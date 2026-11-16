(() => {
  'use strict';
  /* ---------------- helpers ---------------- */
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const RM = window.matchMedia('(prefers-reduced-motion: reduce)');
  const reduced = () => RM.matches;
  const EASE = 'cubic-bezier(.2,.7,.2,1)';
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch { return false; } },
  };
  const slugify = s => String(s).toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'toy';
  const cap = s => String(s).charAt(0).toUpperCase() + String(s).slice(1);
  const el = html => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; };
  const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };

  /* ---------------- icons ---------------- */
  const ic = (d, extra = '') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${d}</svg>`;
  const I = {
    search: ic('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
    heart: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5s-7.5-4.6-9.3-9.2C1.5 8 3.6 4.5 7.1 4.5c2 0 3.5 1.1 4.9 2.9 1.4-1.8 2.9-2.9 4.9-2.9 3.5 0 5.6 3.5 4.4 6.8-1.8 4.6-9.3 9.2-9.3 9.2z" stroke-linejoin="round"/></svg>`,
    heartLine: ic('<path d="M12 20.5s-7.5-4.6-9.3-9.2C1.5 8 3.6 4.5 7.1 4.5c2 0 3.5 1.1 4.9 2.9 1.4-1.8 2.9-2.9 4.9-2.9 3.5 0 5.6 3.5 4.4 6.8-1.8 4.6-9.3 9.2-9.3 9.2z"/>'),
    home: ic('<path d="M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-4.5v-5.5h-5V21H5a1 1 0 0 1-1-1z"/>'),
    grid: ic('<rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>'),
    user: ic('<circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20.5c1.2-3.8 4-5.6 7.5-5.6s6.3 1.8 7.5 5.6"/>'),
    back: ic('<path d="M15 18l-6-6 6-6"/>'),
    left: ic('<path d="M15 18l-6-6 6-6"/>'),
    right: ic('<path d="M9 6l6 6-6 6"/>'),
    up: ic('<path d="M6 15l6-6 6 6"/>'),
    chev: ic('<path d="M6 9l6 6 6-6"/>'),
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>`,
    zoom: ic('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5M11 8v6M8 11h6"/>'),
    close: ic('<path d="M6 6l12 12M18 6 6 18"/>'),
    filter: ic('<path d="M4 6h16M7 12h10M10 18h4"/>'),
    print: ic('<path d="M7 9V4h10v5"/><rect x="4" y="9" width="16" height="8" rx="2"/><path d="M7 14h10v6H7z"/>'),
    sun: ic('<rect x="6" y="2.5" width="12" height="19" rx="3"/><circle cx="12" cy="11" r="3"/><path d="M12 5.5v1M12 15.5v1M8.2 11h-1M17 11h-1"/>'),
    note: ic('<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>'),
    bulb: ic('<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.3 1.1 2.2h5c0-.9.4-1.6 1.1-2.2A6 6 0 0 0 12 3z"/>'),
    plus: ic('<path d="M12 5v14M5 12h14"/>'),
    trash: ic('<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>'),
    upload: ic('<path d="M12 16V4M7 9l5-5 5 5M5 20h14"/>'),
    ruler: ic('<path d="M4 16 16 4l4 4L8 20z"/><path d="m8 12 2 2M11 9l2 2M14 6l2 2"/>'),
    hook: ic('<path d="M18 4c1.5 0 2 1.8 1 2.8L7 19a2 2 0 0 1-3-3L15.5 4.5"/><path d="M18 4a2 2 0 0 0-2.5.5"/>'),
    yarn: ic('<circle cx="12" cy="12" r="8"/><path d="M5 9c4 0 9 2 12 8M7 5.5c3 2 6 6 7 12M12 4c1 4 0 9-3 15.5"/>'),
    clock: ic('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    level: ic('<path d="M5 20v-5M12 20V9M19 20V4"/>'),
    palette: ic('<path d="M12 3a9 9 0 1 0 0 18c1.2 0 1.8-.8 1.8-1.7 0-1.3-1-1.6-1-2.6 0-.9.7-1.6 1.6-1.6H17a4 4 0 0 0 4-4C21 6.5 17 3 12 3z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7.5" r="1"/><circle cx="14.5" cy="7.5" r="1"/>'),
    edit: ic('<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>'),
    copy: ic('<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>'),
    paw: ic('<circle cx="7" cy="10" r="1.8"/><circle cx="10.5" cy="6.5" r="1.8"/><circle cx="14.5" cy="6.5" r="1.8"/><circle cx="18" cy="10" r="1.8"/><path d="M12 12c-3 0-5.5 3.2-5.5 5.3 0 1.6 1.4 2.2 2.8 1.8 1-.3 1.8-.6 2.7-.6s1.7.3 2.7.6c1.4.4 2.8-.2 2.8-1.8 0-2.1-2.5-5.3-5.5-5.3z"/>'),
    sparkle: ic('<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/>'),
    berry: ic('<path d="M12 21c-4.5-1.5-7-6-6-9.5C6.8 8.8 9.2 8 12 8s5.2.8 6 3.5c1 3.5-1.5 8-6 9.5z"/><path d="M9 4.5 12 8l3-3.5M12 8V3"/>'),
    mushroom: ic('<path d="M3.5 12a8.5 8 0 0 1 17 0z"/><path d="M9.5 12v6.5a2.5 2.5 0 0 0 5 0V12"/><circle cx="9" cy="8.5" r=".8"/><circle cx="14.5" cy="7.5" r=".8"/>'),
    key: ic('<circle cx="8" cy="15" r="4.5"/><path d="M11.5 12 20 3.5M17 6.5l2.5 2.5M14.5 9l2 2"/>'),
    leaf: ic('<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19c3-4 6-7 10-10"/>'),
  };

  /* ---------------- pattern parser ---------------- */
  const ROUND_RX = /^\s*(R(?:nd|ound)?|Row)\s*(\d+)\s*(?:[-–—]\s*(\d+))?\s*[:.)]\s*(.*)$/i;
  function parsePattern(text) {
    const parts = [];
    let cur = null;
    const newPart = (name) => {
      const m = name.match(/\((?:make|x)\s*(\d+)\)/i);
      cur = { name: name.replace(/\((?:make|x)\s*\d+\)/i, '').trim() || 'Part', count: m ? +m[1] : 1, items: [] };
      parts.push(cur);
    };
    String(text || '').split(/\r?\n/).forEach(raw => {
      const line = raw.trim();
      if (!line) return;
      const h = line.match(/^#{1,4}\s*(.+)$/);
      if (h) return newPart(h[1]);
      if (/^[A-Za-z][^:\d]{0,40}:$/.test(line)) return newPart(line.slice(0, -1));
      if (!cur) newPart('Pattern');
      const m = line.match(ROUND_RX);
      if (m) {
        const isRow = /^row/i.test(m[1]);
        const from = +m[2], to = m[3] ? Math.max(+m[3], from) : from;
        let body = m[4].trim(), count = null;
        const cm = body.match(/\((\d+)\)\s*$/);
        if (cm) { count = +cm[1]; body = body.slice(0, cm.index).trim(); }
        for (let n = from; n <= Math.min(to, from + 200); n++) {
          cur.items.push({ type: 'round', label: (isRow ? 'Row ' : 'R') + n, text: body, count, key: `${cur.name}|${isRow ? 'row' : 'r'}${n}` });
        }
      } else {
        cur.items.push({ type: 'note', text: line.replace(/^note:\s*/i, '') });
      }
    });
    return parts.filter(p => p.items.length);
  }
  const roundsOf = parts => parts.flatMap(p => p.items.filter(i => i.type === 'round'));

  /* ---------------- toys ---------------- */
  const KIND_FOR = { bunny: 'bunny', bear: 'bear', cat: 'cat', frog: 'frog', food: 'strawberry', fantasy: 'dragon' };
  const urlCache = new Map();
  const artUrl = (art, v) => { const k = JSON.stringify(art) + v; if (!urlCache.has(k)) urlCache.set(k, Art.url(art, v)); return urlCache.get(k); };
  const sizeBucket = cm => (SIZES.find(s => cm <= s.max) || SIZES[SIZES.length - 1]).id;

  function normalize(t) {
    const toy = { ...t };
    toy.types = toy.types || []; toy.categories = toy.categories || []; toy.tags = toy.tags || []; toy.colors = toy.colors || [];
    toy.materials = toy.materials || []; toy.assembly = toy.assembly || []; toy.tricky = toy.tricky || [];
    if (!toy.art) {
      const kind = toy.types.map(x => KIND_FOR[x]).find(Boolean) || 'bear';
      const c = toy.colors.map(c => c.hex);
      toy.art = { kind, body: c[0] || '#E9D8BC', belly: kind === 'bunny' || kind === 'cat' ? null : (c[1] || '#F3EBD8'), ear: c[0], leaf: c[1] || '#5E8A5A', seed: c[2] || '#F2DC8A', wing: c[1] || '#8FAE7E', horn: '#E9D8BC', crown: c[2] || '#D9B04A', moon: c[1] || '#EBCB72', pot: c[2] || '#D9A441', yarn: c[1] || c[0] || '#8FAE7E' };
    }
    if (toy.photos && toy.photos.length) {
      toy.pics = toy.photos.map((p, i) => ({ src: p.src, alt: p.alt || `${toy.name}, photo ${i + 1}` }));
    } else {
      toy.pics = (toy.photoViews || [0, 1, 2]).map(v => ({ src: artUrl(toy.art, v), alt: `${toy.name} amigurumi, ${Art.views[v].label}` }));
      toy.illustrated = true;
    }
    toy.parts = parsePattern(toy.pattern);
    toy.sizeId = sizeBucket(+toy.sizeCm || 10);
    toy.hay = [toy.name, ...toy.types, ...toy.tags, ...toy.colors.map(c => c.name), ...toy.categories.map(id => (CATEGORIES.find(c => c.id === id) || {}).name || id), toy.yarn, toy.difficulty].join(' ').toLowerCase();
    return toy;
  }
  let TOYS = [];
  function loadToys() {
    const user = store.get('ll-user-toys', {});
    const hidden = store.get('ll-hidden', []);
    const list = SAMPLE_TOYS.map(t => ({ ...(user[t.id] || t), sample: true }));
    Object.values(user).forEach(t => { if (!SAMPLE_TOYS.some(s => s.id === t.id)) list.push(t); });
    TOYS = list.filter(t => !hidden.includes(t.id)).map(normalize).sort((a, b) => String(b.date).localeCompare(String(a.date)));
  }
  const byId = id => TOYS.find(t => t.id === id);
  const isNew = t => (Date.now() - new Date(t.date).getTime()) < 1000 * 60 * 60 * 24 * 21;

  /* ---------------- favorites ---------------- */
  let favs = new Set(store.get('ll-favs', []));
  const saveFavs = () => store.set('ll-favs', [...favs]);
  function updateFavBadges() {
    const n = [...favs].filter(id => byId(id)).length;
    $$('[data-fav-count]').forEach(b => { b.textContent = n; b.hidden = n === 0; });
  }

  /* ---------------- shared bits ---------------- */
  const diffBadge = d => {
    const n = { easy: 1, medium: 2, hard: 3 }[d] || 1;
    return `<span class="badge ${esc(d)}"><span class="bars" aria-hidden="true">${[1, 2, 3].map(i => `<i class="${i <= n ? 'on' : ''}"></i>`).join('')}</span>${cap(d)}</span>`;
  };
  const dots = colors => `<div class="dots" aria-label="Colors: ${esc(colors.map(c => c.name).join(', '))}">${colors.map(c => `<span class="dot-c" style="background:${esc(c.hex)}" title="${esc(c.name)}"></span>`).join('')}</div>`;
  const heartBtn = (t, inline = false) => {
    const on = favs.has(t.id);
    return `<button class="heart${inline ? ' inline' : ''}" type="button" data-fav="${esc(t.id)}" aria-pressed="${on}" aria-label="${on ? 'Remove' : 'Save'} ${esc(t.name)} ${on ? 'from' : 'to'} favorites">${I.heart}</button>`;
  };
  const metaLine = t => `${cap(t.difficulty)} · ${esc(t.sizeCm)} cm · ${esc(t.yarn)}`;
  const cardHTML = (t, i = 0) => `
    <article class="card reveal" data-id="${esc(t.id)}" style="transition-delay:${(i % 4) * 60}ms">
      <a class="card-link" href="#toy-${esc(t.id)}">
        <div class="card-img"><img src="${t.pics[0].src}" alt="${esc(t.pics[0].alt)}" loading="lazy" decoding="async" width="400" height="400"></div>
        <div class="card-body">
          <h3>${esc(t.name)}${isNew(t) ? '<span class="new-dot">New</span>' : ''}</h3>
          <p class="card-meta">${metaLine(t)}</p>
        </div>
      </a>
      ${heartBtn(t)}
    </article>`;
  const yarnBall = () => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="12" r="8"/><path d="M4 9.5c4.5-.5 9.5 1.5 13 7M6 5.5c3.5 2 6.5 6.5 7.5 13.5M11 4c1.2 4.5.3 10.5-3.5 15.7M18.5 17.5c1.3 1 2.5 1 3.5.3"/></svg>`;
  const divider = '';
  const emptyHTML = (title, text, btn) => `<div class="empty">${yarnBall()}<h3>${title}</h3><p>${text}</p>${btn || ''}</div>`;

  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toast.tm);
    toast.tm = setTimeout(() => t.classList.remove('show'), 2600);
  }

  /* ---------------- reveal on scroll ---------------- */
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -40px 0px', threshold: .08 }) : null;
  const watchReveals = root => $$('.reveal:not(.in)', root).forEach(n => io && !reduced() ? io.observe(n) : n.classList.add('in'));

  /* ---------------- collapsibles (soft ease) ---------------- */
  function setupFolds(root) {
    $$('details.fold', root).forEach(d => {
      const sum = $('summary', d), body = $('.fold-body', d);
      sum.addEventListener('click', e => {
        e.preventDefault();
        if (d._anim) d._anim.cancel();
        if (!d.open) {
          d.open = true;
          if (reduced()) return;
          const h = body.scrollHeight;
          d._anim = body.animate([{ height: '0px', opacity: .3 }, { height: h + 'px', opacity: 1 }], { duration: 360, easing: EASE });
          d._anim.onfinish = () => { d._anim = null; };
        } else {
          if (reduced()) { d.open = false; return; }
          const h = body.scrollHeight;
          d._anim = body.animate([{ height: h + 'px', opacity: 1 }, { height: '0px', opacity: .3 }], { duration: 280, easing: EASE });
          d._anim.onfinish = () => { d.open = false; d._anim = null; };
        }
      });
    });
  }

  /* ---------------- filters ---------------- */
  const F = { q: '', cat: new Set(), type: new Set(), diff: new Set(), size: new Set(), yarn: new Set(), sort: 'new' };
  const GROUPS = [
    { key: 'cat', title: 'Category', opts: () => CATEGORIES.map(c => ({ v: c.id, label: c.name })), get: t => t.categories },
    { key: 'type', title: 'Animal or character', opts: () => [...new Set([...TYPES, ...TOYS.flatMap(t => t.types)])].map(v => ({ v, label: cap(v) })), get: t => t.types },
    { key: 'diff', title: 'Difficulty', opts: () => DIFFICULTIES.map(v => ({ v, label: cap(v) })), get: t => [t.difficulty] },
    { key: 'size', title: 'Finished size', opts: () => SIZES.map(s => ({ v: s.id, label: s.name })), get: t => [t.sizeId] },
    { key: 'yarn', title: 'Yarn weight', opts: () => YARNS.map(v => ({ v, label: v })), get: t => [t.yarn] },
  ];
  const activeCount = () => GROUPS.reduce((n, g) => n + F[g.key].size, 0);
  function filtered() {
    const words = F.q.toLowerCase().split(/\s+/).filter(Boolean);
    let list = TOYS.filter(t => GROUPS.every(g => !F[g.key].size || g.get(t).some(v => F[g.key].has(v))) && words.every(w => t.hay.includes(w)));
    if (F.sort === 'easy') list = [...list].sort((a, b) => DIFFICULTIES.indexOf(a.difficulty) - DIFFICULTIES.indexOf(b.difficulty));
    if (F.sort === 'az') list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }
  const clearFilters = () => { GROUPS.forEach(g => F[g.key].clear()); F.q = ''; };
  const groupsHTML = (skip = []) => GROUPS.filter(g => !skip.includes(g.key)).map(g => `
    <div class="fgroup" role="group" aria-labelledby="fg-${g.key}-${skip.length}">
      <h3 id="fg-${g.key}-${skip.length}">${g.title}</h3>
      <div class="chip-row">${g.opts().map(o => {
        const n = TOYS.filter(t => g.get(t).includes(o.v)).length;
        return `<button type="button" class="chip" data-f="${g.key}" data-v="${esc(o.v)}" aria-pressed="${F[g.key].has(o.v)}">${esc(o.label)} <span class="n">${n}</span></button>`;
      }).join('')}</div>
    </div>`).join('');

  /* ---------------- views ---------------- */
  const catIcon = c => `<span class="ic" style="background:${c.color};color:${c.ink}">${I[c.icon]}</span>`;

  function viewHome() {
    const hero = byId('mushroom-bunny') || TOYS[0];
    const newest = TOYS.slice(0, 4);
    return {
      title: `${SITE.name} · Cozy amigurumi crochet patterns`,
      html: `
      <section class="hero">
        <div class="container">
          <div>
            <h1>${esc(SITE.tagline)}</h1>
            <p class="lead">Cute crochet toys with clear, round-by-round patterns. Check off each round as you go and your place is saved.</p>
            <form class="search" role="search" id="home-search">
              ${I.search}
              <label class="sr-only" for="hq">Search patterns</label>
              <input id="hq" type="search" placeholder="Search bunny, mushroom, sage…" autocomplete="off" enterkeyhint="search">
            </form>
            <a class="btn btn-primary" href="#browse">Browse all patterns</a>
          </div>
          ${hero ? `<a class="hero-photo" href="#toy-${esc(hero.id)}">
            <img src="${hero.pics[0].src}" alt="${esc(hero.pics[0].alt)}" width="560" height="560">
            <span class="caption">${esc(hero.name)} <small>New pattern</small></span>
          </a>` : ''}
        </div>
      </section>
      <section class="section" aria-labelledby="cat-h" style="padding-bottom:0">
        <div class="container">
          <div class="section-head"><h2 id="cat-h">Categories</h2></div>
          <div class="cat-row">
            ${CATEGORIES.map(c => `<a class="chip" href="#browse" data-cat="${c.id}">${esc(c.name)} <span>${TOYS.filter(t => t.categories.includes(c.id)).length}</span></a>`).join('')}
          </div>
        </div>
      </section>
      <section class="section" aria-labelledby="new-h">
        <div class="container">
          <div class="section-head"><h2 id="new-h">Newest toys</h2><a href="#browse" class="btn-link">See all</a></div>
          <div class="grid wide">${newest.map(cardHTML).join('')}</div>
        </div>
      </section>`,
      mount(root) {
        $('#home-search', root).addEventListener('submit', e => { e.preventDefault(); clearFilters(); F.q = $('#hq', root).value.trim(); location.hash = 'browse'; });
        $$('[data-cat]', root).forEach(a => a.addEventListener('click', () => { clearFilters(); F.cat.add(a.dataset.cat); }));
      },
    };
  }

  function viewBrowse() {
    return {
      title: `Browse patterns · ${SITE.name}`,
      html: `
      <div class="container page-head"><h1>Patterns</h1></div>
      <div class="container browse-layout">
        <aside class="filters" aria-label="Filters">
          <div class="filters-head"><h2>Filters</h2><button type="button" class="btn-link" data-clear>Clear all</button></div>
          ${groupsHTML(['_desktop'])}
        </aside>
        <div>
          <div class="filterbar" id="fbar">
            <div class="filterbar-row">
              <div class="search" role="search">
                ${I.search}
                <label class="sr-only" for="bq">Search by name, animal, color or tag</label>
                <input id="bq" type="search" placeholder="Search name, animal, color, tag" value="${esc(F.q)}" autocomplete="off" enterkeyhint="search">
                <button type="button" class="clear-search" aria-label="Clear search" ${F.q ? '' : 'hidden'}>×</button>
              </div>
              <button type="button" class="btn btn-soft filter-toggle" id="open-sheet" aria-haspopup="dialog">${I.filter}<span>Filters</span><span class="count-badge" id="fcount" hidden>0</span></button>
            </div>
            <div class="active-row" id="active-row" aria-label="Active filters"></div>
          </div>
          <div class="results-line">
            <span id="rcount" aria-live="polite"></span>
            <label class="sr-only" for="sort">Sort</label>
            <select id="sort"><option value="new">Newest</option><option value="easy">Easiest first</option><option value="az">A to Z</option></select>
          </div>
          <div class="grid" id="grid"></div>
          <div id="empty"></div>
        </div>
      </div>
      <div class="sheet-backdrop" id="sheet-bd" hidden></div>
      <div class="sheet" id="sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-h" hidden>
        <div class="grab" aria-hidden="true"></div>
        <div class="sheet-head"><h2 id="sheet-h">Filters</h2><button type="button" class="icon-btn" data-close-sheet aria-label="Close filters">${I.close}</button></div>
        ${groupsHTML()}
        <div class="sheet-foot"><button type="button" class="btn btn-ghost" data-clear>Clear all</button><button type="button" class="btn btn-primary" data-close-sheet id="sheet-go">Show toys</button></div>
      </div>`,
      mount(root) {
        const grid = $('#grid', root);
        $('#sort', root).value = F.sort;
        const input = $('#bq', root), clr = $('.clear-search', root);
        const onSearch = debounce(() => { F.q = input.value.trim(); clr.hidden = !F.q; refresh(); }, 140);
        input.addEventListener('input', onSearch);
        clr.addEventListener('click', () => { input.value = ''; F.q = ''; clr.hidden = true; refresh(); input.focus(); });
        $('#sort', root).addEventListener('change', e => { F.sort = e.target.value; refresh(); });
        root.addEventListener('click', e => {
          const chip = e.target.closest('[data-f]');
          if (chip) { const s = F[chip.dataset.f]; s.has(chip.dataset.v) ? s.delete(chip.dataset.v) : s.add(chip.dataset.v); refresh(); return; }
          if (e.target.closest('[data-allcats]')) { F.cat.clear(); refresh(); return; }
          if (e.target.closest('[data-clear]')) { clearFilters(); input.value = ''; clr.hidden = true; refresh(); return; }
          const rm = e.target.closest('[data-rm]');
          if (rm) { const [k, v] = rm.dataset.rm.split('::'); if (k === 'q') { F.q = ''; input.value = ''; clr.hidden = true; } else F[k].delete(v); refresh(); return; }
        });
        // bottom sheet
        const sheet = $('#sheet', root), bd = $('#sheet-bd', root), opener = $('#open-sheet', root);
        const openSheet = () => { sheet.hidden = bd.hidden = false; requestAnimationFrame(() => { sheet.classList.add('open'); bd.classList.add('open'); }); document.body.style.overflow = 'hidden'; setTimeout(() => $('.chip', sheet)?.focus(), 50); };
        const closeSheet = () => { sheet.classList.remove('open'); bd.classList.remove('open'); document.body.style.overflow = ''; setTimeout(() => { sheet.hidden = bd.hidden = true; }, reduced() ? 0 : 380); opener.focus(); };
        opener.addEventListener('click', openSheet);
        bd.addEventListener('click', closeSheet);
        $$('[data-close-sheet]', sheet).forEach(b => b.addEventListener('click', closeSheet));
        sheet.addEventListener('keydown', e => { if (e.key === 'Escape') closeSheet(); });
        // sticky shadow
        const fbar = $('#fbar', root);
        const onScroll = () => fbar.classList.toggle('stuck', fbar.getBoundingClientRect().top <= parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) + 1);
        window.addEventListener('scroll', onScroll, { passive: true });
        cleanup.push(() => { window.removeEventListener('scroll', onScroll); document.body.style.overflow = ''; });

        function refresh(first = false) {
          $$('[data-f]', root).forEach(c => c.setAttribute('aria-pressed', F[c.dataset.f].has(c.dataset.v)));
          const n = activeCount(), fc = $('#fcount', root);
          fc.textContent = n; fc.hidden = !n;
          const labels = [];
          if (F.q) labels.push(['q', F.q, `“${F.q}”`]);
          GROUPS.forEach(g => F[g.key].forEach(v => labels.push([g.key, v, (g.opts().find(o => o.v === v) || { label: v }).label])));
          $('#active-row', root).innerHTML = labels.length ? labels.map(([k, v, l]) => `<button type="button" class="chip" data-rm="${esc(k)}::${esc(v)}" aria-label="Remove filter ${esc(l)}">${esc(l)} <span class="x" aria-hidden="true">×</span></button>`).join('') + `<button type="button" class="btn-link" data-clear>Clear all</button>` : '';
          const list = filtered();
          $('#rcount', root).textContent = `${list.length} ${list.length === 1 ? 'pattern' : 'patterns'}`;
          $('#sheet-go', root).textContent = list.length ? `Show ${list.length} ${list.length === 1 ? 'toy' : 'toys'}` : 'No matches';
          updateGrid(grid, list, first);
          $('#empty', root).innerHTML = list.length ? '' : emptyHTML('No toys match', 'Try removing a filter or searching for something else.', '<button type="button" class="btn btn-primary" data-clear>Clear all filters</button>');
        }
        refresh(true);
      },
    };
  }

  // FLIP: items glide to their new spots instead of jumping
  function updateGrid(grid, list, first) {
    const before = new Map($$('.card', grid).map(c => [c.dataset.id, c.getBoundingClientRect()]));
    const existing = new Map($$('.card', grid).map(c => [c.dataset.id, c]));
    const nodes = list.map((t, i) => existing.get(t.id) || el(cardHTML(t, i)));
    grid.replaceChildren(...nodes);
    if (first) { watchReveals(grid); return; }
    nodes.forEach(n => {
      n.classList.add('in'); n.style.transitionDelay = '0ms';
      if (reduced()) return;
      const b = before.get(n.dataset.id), a = n.getBoundingClientRect();
      if (b) {
        const dx = b.left - a.left, dy = b.top - a.top;
        if (dx || dy) n.animate([{ transform: `translate(${dx}px,${dy}px)` }, { transform: 'none' }], { duration: 480, easing: EASE });
      } else n.animate([{ opacity: 0, transform: 'scale(.92) translateY(10px)' }, { opacity: 1, transform: 'none' }], { duration: 380, easing: EASE });
    });
  }

  function viewFavorites() {
    const list = TOYS.filter(t => favs.has(t.id));
    return {
      title: `My favorites · ${SITE.name}`,
      html: `
      <div class="container page-head"><h1>My favorites</h1><p>${list.length ? `${list.length} saved ${list.length === 1 ? 'toy' : 'toys'}. Saved on this device.` : 'Saved on this device.'}</p></div>
      <div class="container section" style="padding-top:18px">
        <div class="grid wide" id="fav-grid">${list.map(cardHTML).join('')}</div>
        <div id="fav-empty">${list.length ? '' : favEmpty()}</div>
      </div>`,
      mount(root) { watchReveals(root); },
    };
  }
  const favEmpty = () => emptyHTML('No favorites yet', 'Tap the heart on any toy to save it here for later.', '<a class="btn btn-primary" href="#browse">Browse patterns</a>');

  function viewAbout() {
    const t = byId('mushroom-bunny') || TOYS[0];
    return {
      title: `About me · ${SITE.name}`,
      html: `
      <div class="container about">
        <div class="about-photo"><img src="${t ? t.pics[0].src : ''}" alt="${t ? esc(t.pics[0].alt) : ''}" width="360" height="360"></div>
        <div>
          <h1>Hi, I'm Syune</h1>
          <p class="lead" style="font-size:1.1rem;color:var(--text-soft)">I crochet small, soft friends and write down every pattern, round by round, so you can make them too.</p>
          <p>My favorites are forest creatures, mushrooms and tiny embroidered details. Every pattern here uses US crochet terms and is written to be easy to follow on your phone, with a checkbox for every round so you never lose your place.</p>
          <h2 style="margin-top:28px">Using my patterns</h2>
          <ul>
            <li>Patterns are for personal use. You're welcome to sell finished toys in small batches. Please credit ${esc(SITE.name)}.</li>
            <li>Please don't share or resell the written patterns themselves.</li>
            <li>I'd love to see what you make! Tag me on Instagram.</li>
          </ul>
          <h2 style="margin-top:28px">Say hello</h2>
          <p>Instagram: <a href="https://www.instagram.com/myrkvidr.refr/">@myrkvidr.refr</a><br>Email: <a href="mailto:syunehovhan@gmail.com">syunehovhan@gmail.com</a></p>
        </div>
      </div>`,
    };
  }

  function viewNotFound() {
    return {
      title: `Page not found · ${SITE.name}`,
      html: `<div class="container section">${emptyHTML('This page came unraveled', 'We couldn\'t find that page. It may have been moved or renamed.', '<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><a class="btn btn-primary" href="#home">Go home</a><a class="btn btn-ghost" href="#browse">Browse patterns</a></div>')}</div>`,
    };
  }

  /* ---------------- pattern page ---------------- */
  let wakeLock = null, wakeWanted = false;
  async function requestWake() {
    try {
      if (!('wakeLock' in navigator)) throw new Error('unsupported');
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', () => { wakeLock = null; syncWake(); });
      syncWake(); return true;
    } catch { wakeLock = null; wakeWanted = false; syncWake(); return false; }
  }
  function releaseWake() { wakeWanted = false; if (wakeLock) wakeLock.release().catch(() => { }); wakeLock = null; syncWake(); }
  function syncWake() { $$('[data-wake]').forEach(b => b.setAttribute('aria-checked', !!wakeLock)); }
  document.addEventListener('visibilitychange', () => { if (wakeWanted && document.visibilityState === 'visible' && !wakeLock) requestWake(); });

  function mindMap(t) {
    const parts = t.parts, n = parts.length || 1;
    const rx = 262, ry = 182, nw = 160, nh = 58;
    const colorOf = p => {
      const txt = p.items.filter(i => i.type === 'note').map(i => i.text.toLowerCase()).join(' ');
      const hit = t.colors.map(c => ({ c, i: txt.indexOf(c.name.toLowerCase()) })).filter(x => x.i >= 0).sort((a, z) => a.i - z.i)[0];
      return (hit ? hit.c : t.colors[0] || { hex: '#E9D8BC' }).hex;
    };
    const narrow = window.innerWidth < 640;
    let W = 720, H = 500, cx = W / 2, cy = H / 2;
    if (narrow) { W = 360; cx = 180; cy = 96; H = 210 + Math.ceil(n / 2) * 72; }
    const nodes = parts.map((p, i) => {
      const a = -Math.PI / 2 + i * 2 * Math.PI / n;
      const x = narrow ? (i % 2 ? 268 : 92) : cx + rx * Math.cos(a), y = narrow ? 224 + Math.floor(i / 2) * 72 : cy + ry * Math.sin(a);
      const r = p.items.filter(i => i.type === 'round');
      const unit = r.some(x => x.label.startsWith('Row')) ? 'rows' : 'rounds';
      const name = p.name.length > 16 ? p.name.slice(0, 15) + '…' : p.name;
      return [narrow ? '' : `<path d="M${cx} ${cy} Q${(cx + x) / 2 + (y - cy) * .12} ${(cy + y) / 2 - (x - cx) * .12} ${x} ${y}" stroke="#DCD3C7" stroke-width="1.5" fill="none"/>`,
        `<g transform="translate(${x - nw / 2} ${y - nh / 2})">
          <rect width="${nw}" height="${nh}" rx="18" fill="#FFFFFF" stroke="#EAE4DB" stroke-width="1.5"/>
          <circle cx="20" cy="${nh / 2}" r="7" fill="${colorOf(p)}" stroke="rgba(63,46,36,.2)" stroke-width="1"/>
          <text x="36" y="25" font-family="Nunito, sans-serif" font-weight="800" font-size="15" fill="#3F2E24">${esc(name)}</text>
          <text x="36" y="43" font-family="Inter, sans-serif" font-size="12" fill="#75655A">${r.length ? `${r.length} ${r.length === 1 ? unit.slice(0, -1) : unit}` : 'how-to'}${p.count > 1 ? ` · make ${p.count}` : ''}</text>
        </g>`];
    });
    const nodesSvg = nodes.map(x => x[0]).join('') + nodes.map(x => x[1]).join('');
    const label = `Parts map for ${t.name}: ${parts.map(p => `${p.name}${p.count > 1 ? ` (make ${p.count})` : ''}`).join(', ')}.`;
    return `<svg class="mindmap" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(label)}">
      <defs><clipPath id="mm-clip"><circle cx="${cx}" cy="${cy - 8}" r="62"/></clipPath></defs>
      ${nodesSvg}
      <circle cx="${cx}" cy="${cy - 8}" r="66" fill="#F3EFE9"/>
      <image href="${t.pics[0].src}" x="${cx - 62}" y="${cy - 70}" width="124" height="124" clip-path="url(#mm-clip)" preserveAspectRatio="xMidYMid slice"/>
      <rect x="${cx - 80}" y="${cy + 52}" width="160" height="32" rx="16" fill="#3F2E24"/>
      <text x="${cx}" y="${cy + 73}" text-anchor="middle" font-family="Nunito, sans-serif" font-weight="800" font-size="14" fill="#fff">${esc(t.name.length > 20 ? t.name.slice(0, 19) + '…' : t.name)}</text>
    </svg>`;
  }

  function abbreviationsFor(t) {
    const txt = t.pattern || '';
    const tests = {
      'MR': /\bMR\b/, 'sc': /\bsc\b/, 'hdc': /\bhdc\b/, 'dc': /\bdc\b/, 'inc': /\binc\b/, 'dec': /\bdec\b/, 'BLO': /\bBLO\b/, 'FLO': /\bFLO\b/,
      'sl st': /\bsl st\b/i, 'ch': /\bch\b/, 'st': /\bsts?\b/, 'FO': /\bFO\b/, 'R': /^\s*R\d/m, 'x': /\bx\s*\d/, '( )': /\(\d+\)\s*$/m,
    };
    return Object.keys(ABBR).filter(k => tests[k] && tests[k].test(txt));
  }

  function related(t) {
    return TOYS.filter(o => o.id !== t.id).map(o => ({
      o, s: o.types.filter(x => t.types.includes(x)).length * 3 + o.categories.filter(x => t.categories.includes(x)).length * 2 + o.tags.filter(x => t.tags.includes(x)).length + (o.difficulty === t.difficulty ? .5 : 0),
    })).sort((a, b) => b.s - a.s).slice(0, 4).map(x => x.o);
  }

  /* ---------------- make it your size ----------------
     In amigurumi the stitch counts stay the same; the finished size
     comes from the yarn weight and hook. We estimate it from typical
     amigurumi gauge (tight single crochet). */
  const SCALE = {
    'Fingering':   { st: 3.3,  hooks: [2.0, 2.25, 2.5] },
    'Sport':       { st: 3.85, hooks: [2.5, 2.75, 3.0] },
    'DK':          { st: 4.5,  hooks: [2.75, 3.0, 3.5] },
    'Worsted':     { st: 5.6,  hooks: [3.5, 3.75, 4.0] },
    'Chunky':      { st: 7.7,  hooks: [5.0, 5.5, 6.0] },
    'Super bulky': { st: 12.5, hooks: [8.0, 9.0, 10.0] },
  };
  const US_HOOK = { 2.25: 'B/1', 2.75: 'C/2', 3.25: 'D/3', 3.5: 'E/4', 3.75: 'F/5', 4.0: 'G/6', 4.5: '7', 5.0: 'H/8', 5.5: 'I/9', 6.0: 'J/10', 6.5: 'K/10.5', 8.0: 'L/11', 9.0: 'M/N-13', 10.0: 'N/P-15' };
  const EYE_SIZES = [4.5, 6, 8, 9, 10, 12, 15, 18, 20, 25, 30];
  const hookMm = s => { const m = String(s || '').match(/(\d+(?:\.\d+)?)\s*mm/); return m ? +m[1] : null; };
  const fmtHook = mm => `${mm.toFixed(mm % 0.5 ? 2 : 1)} mm${US_HOOK[mm] ? ` (US ${US_HOOK[mm]})` : ''}`;
  const midHook = y => SCALE[y].hooks[1];
  const stitchSize = (yarn, hook) => SCALE[yarn].st * (1 + 0.1 * (hook - midHook(yarn)));
  function makeBase(t) {
    const yarn = SCALE[t.yarn] ? t.yarn : 'DK';
    return { yarn, hook: hookMm(t.hook) || midHook(yarn) };
  }
  const hooksFor = (t, yarn) => {
    const b = makeBase(t);
    return [...new Set([...SCALE[yarn].hooks, ...(yarn === b.yarn ? [b.hook] : [])])].sort((a, z) => a - z);
  };
  function makeInfo(t, cfg) {
    const b = makeBase(t);
    const f = stitchSize(cfg.yarn, cfg.hook) / stitchSize(b.yarn, b.hook);
    const cm = Math.round((+t.sizeCm || 10) * f * 2) / 2;
    return { f, cm, inch: Math.round(cm / 2.54 * 10) / 10, original: cfg.yarn === b.yarn && cfg.hook === b.hook };
  }
  const snapEye = mm => EYE_SIZES.reduce((a, z) => Math.abs(z - mm) < Math.abs(a - mm) ? z : a);
  function scaleMaterial(line, cfg, info) {
    if (info.original) return line;
    let out = line;
    const g = out.match(/about (\d+(?:\.\d+)?) g\b/);
    if (!/floss|thread|embroider/i.test(out)) {
      if (g) out = out.replace(g[0], `about ${Math.max(5, Math.round(+g[1] * Math.pow(info.f, 3) / 5) * 5)} g`);
      out = out.replace(/\b(fingering|sport|dk|worsted|chunky|super bulky)\b(\s+or\s+(fingering|sport|dk|worsted|chunky))?/i, cfg.yarn);
    }
    out = out.replace(/(\d+(?:\.\d+)?)\s*mm crochet hook/i, `${fmtHook(cfg.hook)} crochet hook`);
    out = out.replace(/(\d+(?:\.\d+)?)\s*mm (black )?safety eyes/i, (m, mm, black) => `${snapEye(+mm * info.f)} mm ${black || ''}safety eyes`);
    if (/stuffing/i.test(out) && !/\d+\s*g\b/.test(out)) out += `, about ${Math.max(5, Math.round(0.0045 * Math.pow(info.cm, 3) / 5) * 5)} g`;
    return out;
  }

  function viewToy(id) {
    const t = byId(id);
    if (!t) return viewNotFound();
    const total = roundsOf(t.parts).length;
    const abbr = abbreviationsFor(t);
    const rel = related(t);
    const fact = (label, value, full = false) => `<div class="${full ? 'full' : ''}"><dt>${label}</dt><dd>${value}</dd></div>`;
    const sizePref = store.get('ll-textsize', 1);
    const catNames = t.categories.map(c => (CATEGORIES.find(x => x.id === c) || { name: c }).name).join(' · ');
    return {
      title: `${t.name} amigurumi pattern · ${SITE.name}`,
      desc: t.blurb,
      html: `
      <div class="container crumbs"><a href="#browse">${I.back} All patterns</a></div>
      <div class="container toy-top">
        <div class="gallery" aria-roledescription="carousel" aria-label="${esc(t.name)} photos">
          <div class="g-track" id="g-track">
            ${t.pics.map((p, i) => `<button type="button" class="g-slide" data-zoom="${i}" aria-label="Open photo ${i + 1} of ${t.pics.length} full screen"><img src="${p.src}" alt="${esc(p.alt)}" ${i ? 'loading="lazy"' : ''} decoding="async" width="600" height="600"></button>`).join('')}
          </div>
          ${t.pics.length > 1 ? `<button type="button" class="g-nav prev" aria-label="Previous photo">${I.left}</button><button type="button" class="g-nav next" aria-label="Next photo">${I.right}</button>
          <div class="g-dots">${t.pics.map((_, i) => `<button type="button" aria-label="Show photo ${i + 1}" aria-current="${i === 0}" data-go="${i}"></button>`).join('')}</div>
          <div class="g-thumbs">${t.pics.map((p, i) => `<button type="button" aria-label="Show photo ${i + 1}" aria-current="${i === 0}" data-go="${i}"><img src="${p.src}" alt="" loading="lazy"></button>`).join('')}</div>` : ''}
        </div>
        <div class="toy-intro">
          <p class="kicker">${esc(catNames)}</p>
          <h1>${esc(t.name)}</h1>
          <p class="lede">${esc(t.blurb)}</p>
          <div class="toy-actions">
            <a class="btn btn-primary" href="#" data-jump="pattern-start">Start the pattern</a>
            ${heartBtn(t, true)}
            <button type="button" class="btn btn-ghost" data-print aria-label="Print or save as PDF" title="Print or save as PDF">${I.print}<span class="sr-only">Print</span></button>
          </div>
          <section class="facts" aria-label="Quick facts">
            <dl>
              ${fact('Finished size', `<span data-out="size">${esc(t.size || t.sizeCm + ' cm')}</span>`)}
              ${fact('Difficulty', cap(esc(t.difficulty)))}
              ${fact('Hook', `<span data-out="hook">${esc(t.hook)}</span>`)}
              ${fact('Yarn weight', `<span data-out="yarn">${esc(t.yarn)}</span>`)}
              ${fact('Time', esc(t.time))}
              ${fact('Rounds', `${total}`)}
              ${fact('Colors', `<span class="color-list">${t.colors.map(c => `<span><i class="dot-c" style="background:${esc(c.hex)}"></i>${esc(c.name)}</span>`).join('')}</span>`, true)}
            </dl>
          </section>
          <section class="sizer" aria-labelledby="sizer-h">
            <div class="sizer-head"><h2 id="sizer-h">Make it your size</h2><button type="button" class="btn-link" data-size-reset hidden>Use original</button></div>
            <p class="sizer-label" id="yarn-l">Toy size, by yarn weight</p>
            <div class="opts" role="group" aria-labelledby="yarn-l" id="yarn-opts"></div>
            <p class="sizer-label" id="hook-l">Hook size</p>
            <div class="opts hooks" role="group" aria-labelledby="hook-l" id="hook-opts"></div>
            <p class="sizer-note" id="sizer-note" aria-live="polite"></p>
          </section>
          ${t.tags.length ? `<p class="tag-line">${t.tags.map(g => `<a href="#browse" data-tag="${esc(g)}">#${esc(g)}</a>`).join('&ensp;')}</p>` : ''}
        </div>
      </div>

      <div class="container pattern-body">
        <div>
          <section class="sec" style="padding-top:0" aria-labelledby="mat-h">
            <h2 id="mat-h">Materials</h2>
            <ul class="checklist" id="mat-list"></ul>
          </section>

          <section class="sec" aria-labelledby="map-h">
            <h2 id="map-h">Parts</h2>
            <p class="sec-note">Every piece you'll make for this toy.</p>
            <div class="mindmap-wrap">${mindMap(t)}</div>
          </section>

          <section class="sec" aria-labelledby="pattern-start">
            <h2 id="pattern-start" tabindex="-1">Pattern</h2>
            <div class="tracker" aria-live="polite">
              <div class="tracker-top"><strong id="pdone">0 of ${total} rounds</strong><span class="muted" id="pct">0%</span></div>
              <div class="pbar" role="progressbar" aria-label="Pattern progress" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="0" id="pbar"><i></i></div>
            </div>
            <div class="tools">
              <button type="button" class="switch" role="switch" aria-checked="false" data-wake><span class="track"></span>Keep screen awake</button>
              <span style="display:flex;gap:6px;align-items:center">
                <span class="text-size" role="group" aria-label="Pattern text size">
                  ${[['A', 0], ['A+', 1], ['A++', 2]].map(([l, v]) => `<button type="button" data-size="${v}" aria-pressed="${sizePref === v}" aria-label="Text size ${l}">${l}</button>`).join('')}
                </span>
                <button type="button" class="btn-link" data-reset>Reset</button>
              </span>
            </div>
            <p class="wake-tip" id="wake-tip"></p>
            <div id="parts" style="margin-top:8px">
              <details class="fold">
                <summary><span class="s-title">Abbreviations <small>US terms</small></span><span class="chev">${I.chev}</span></summary>
                <div class="fold-body"><div class="fold-inner">
                  <table class="abbr-table"><tbody>${abbr.map(k => `<tr><th scope="row">${esc(k)}</th><td>${esc(ABBR[k])}</td></tr>`).join('')}</tbody></table>
                </div></div>
              </details>
              ${t.parts.map((p, pi) => {
                const rs = p.items.filter(i => i.type === 'round');
                return `<details class="fold part" id="part-${pi}" ${pi === 0 ? 'open' : ''}>
                  <summary><span class="s-title">${esc(p.name)}${p.count > 1 ? `<small>make ${p.count}</small>` : ''}</span><span class="s-meta" data-pmeta="${pi}">0/${rs.length}</span><span class="chev">${I.chev}</span></summary>
                  <div class="fold-body"><div class="fold-inner">
                    <ol class="rounds">${p.items.map(it => it.type === 'round'
                      ? `<li class="round" data-key="${esc(it.key)}"><label class="check"><input type="checkbox" data-round="${esc(it.key)}" data-part="${pi}"><span class="box">${I.check}</span><span class="rlabel">${esc(it.label)}</span><span class="txt">${esc(it.text)}</span>${it.count != null ? `<span class="rcount" aria-label="${it.count} stitches">(${it.count})</span>` : ''}</label></li>`
                      : `<li class="pnote">${esc(it.text)}</li>`).join('')}</ol>
                  </div></div>
                </details>`;
              }).join('')}
            </div>
          </section>

          ${t.assembly.length ? `<section class="sec" aria-labelledby="asm-h"><h2 id="asm-h">Assembly</h2><ol class="steps">${t.assembly.map(s => `<li><span>${esc(s)}</span></li>`).join('')}</ol></section>` : ''}
          ${t.tricky.length ? `<section class="sec" aria-labelledby="tr-h"><h2 id="tr-h">Tricky parts</h2><div class="tricky">${t.tricky.map(x => `<div class="tip"><h3>${esc(x.q)}</h3><p>${esc(x.a)}</p></div>`).join('')}</div></section>` : ''}
        </div>
        <aside class="pattern-side" aria-label="Jump to part">
          <div class="side-card">
            <h2>Jump to part</h2>
            <ul class="part-jump">${t.parts.map((p, pi) => `<li><a href="#" data-jump="part-${pi}"><span>${esc(p.name)}</span><small data-side="${pi}">0/${p.items.filter(i => i.type === 'round').length}</small></a></li>`).join('')}</ul>
          </div>
        </aside>
      </div>

      ${rel.length ? `<section class="section related" aria-labelledby="rel-h"><div class="container"><div class="section-head"><h2 id="rel-h">You may also like</h2></div><div class="grid wide">${rel.map(cardHTML).join('')}</div></div></section>` : ''}`,
      mount(root) {
        watchReveals(root);
        setupFolds(root);
        document.documentElement.style.setProperty('--round-size', ['1.05rem', '1.2rem', '1.45rem'][sizePref] || '1.2rem');
        // gallery
        const track = $('#g-track', root);
        const go = i => track.scrollTo({ left: i * track.clientWidth, behavior: reduced() ? 'auto' : 'smooth' });
        const cur = () => Math.round(track.scrollLeft / Math.max(1, track.clientWidth));
        track.addEventListener('scroll', debounce(() => { const c = cur(); $$('[data-go]', root).forEach(b => b.setAttribute('aria-current', +b.dataset.go === c)); }, 60), { passive: true });
        $$('[data-go]', root).forEach(b => b.addEventListener('click', () => go(+b.dataset.go)));
        $('.g-nav.prev', root)?.addEventListener('click', () => go(Math.max(0, cur() - 1)));
        $('.g-nav.next', root)?.addEventListener('click', () => go(Math.min(t.pics.length - 1, cur() + 1)));
        $$('[data-zoom]', root).forEach(b => b.addEventListener('click', () => openLightbox(t.pics, +b.dataset.zoom, b)));
        // jumps & tags
        $$('[data-jump]', root).forEach(a => a.addEventListener('click', e => {
          e.preventDefault();
          const target = document.getElementById(a.dataset.jump);
          if (!target) return;
          if (target.tagName === 'DETAILS' && !target.open) $('summary', target).click();
          target.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' });
          (target.tagName === 'DETAILS' ? $('summary', target) : target).focus({ preventScroll: true });
        }));
        $$('[data-tag]', root).forEach(a => a.addEventListener('click', () => { clearFilters(); F.q = a.dataset.tag; }));
        // materials
        const matKey = `ll-mat-${t.id}`;
        let mats = new Set(store.get(matKey, []));
        const matList = $('#mat-list', root);
        matList.addEventListener('change', e => {
          const c = e.target.closest('[data-mat]'); if (!c) return;
          c.checked ? mats.add(+c.dataset.mat) : mats.delete(+c.dataset.mat); store.set(matKey, [...mats]);
        });
        // size & hook
        const base = makeBase(t), cfgKey = `ll-make-${t.id}`;
        let cfg = { ...base, ...store.get(cfgKey, {}) };
        if (!SCALE[cfg.yarn] || !hooksFor(t, cfg.yarn).includes(cfg.hook)) cfg = { ...base };
        const yarnOpts = $('#yarn-opts', root), hookOpts = $('#hook-opts', root);
        function applySize(animate) {
          const info = makeInfo(t, cfg);
          yarnOpts.innerHTML = Object.keys(SCALE).map(y => {
            const h = y === cfg.yarn ? cfg.hook : (y === base.yarn ? base.hook : midHook(y));
            const cm = makeInfo(t, { yarn: y, hook: h }).cm;
            return `<button type="button" class="opt" data-yarn="${y}" aria-pressed="${y === cfg.yarn}"><strong>${cm} cm</strong><span>${y}${y === base.yarn ? ' · original' : ''}</span></button>`;
          }).join('');
          hookOpts.innerHTML = hooksFor(t, cfg.yarn).map(h => `<button type="button" class="opt" data-hook="${h}" aria-pressed="${h === cfg.hook}"><strong>${h.toFixed(h % 0.5 ? 2 : 1)} mm</strong><span>${US_HOOK[h] ? 'US ' + US_HOOK[h] : '&nbsp;'}</span></button>`).join('');
          $('[data-out="size"]', root).textContent = info.original ? (t.size || t.sizeCm + ' cm') : `about ${info.cm} cm (${info.inch} in) tall`;
          $('[data-out="hook"]', root).textContent = info.original ? t.hook : fmtHook(cfg.hook);
          $('[data-out="yarn"]', root).textContent = cfg.yarn;
          $('[data-size-reset]', root).hidden = info.original;
          $('#sizer-note', root).innerHTML = info.original
            ? 'This is the size shown in the photos.'
            : `Your ${esc(t.name)} will be about <strong>${info.cm} cm</strong> tall (${info.f > 1 ? '+' : ''}${Math.round((info.f - 1) * 100)}%). The rounds stay exactly the same. Only the yarn, hook, eyes and amounts change, and the materials list below is updated.${info.f > 1.6 ? ' With yarn this thick, do the embroidery with the same yarn or a doubled strand so it still shows.' : ''}${info.f < .75 ? ' Small toys are fiddly: use a stitch marker every round and good light.' : ''}`;
          matList.innerHTML = t.materials.map((m, i) => `<li><label class="check"><input type="checkbox" data-mat="${i}" ${mats.has(i) ? 'checked' : ''}><span class="box">${I.check}</span><span class="txt">${esc(scaleMaterial(m, cfg, info))}</span></label></li>`).join('');
          if (animate && !reduced()) matList.animate([{ opacity: .4 }, { opacity: 1 }], { duration: 350, easing: EASE });
        }
        root.addEventListener('click', e => {
          const y = e.target.closest('[data-yarn]'), h = e.target.closest('[data-hook]');
          if (y) { const yarn = y.dataset.yarn; cfg = { yarn, hook: yarn === base.yarn ? base.hook : midHook(yarn) }; }
          else if (h) cfg = { ...cfg, hook: +h.dataset.hook };
          else if (e.target.closest('[data-size-reset]')) cfg = { ...base };
          else return;
          store.set(cfgKey, cfg); applySize(true);
          if (y || h) root.querySelector(y ? `[data-yarn="${cfg.yarn}"]` : `[data-hook="${cfg.hook}"]`)?.focus();
        });
        applySize(false);
        // rounds progress
        const pKey = `ll-progress-${t.id}`;
        let done = new Set(store.get(pKey, []));
        const boxes = $$('[data-round]', root);
        boxes.forEach(b => { b.checked = done.has(b.dataset.round); });
        function sync(changedPart) {
          const n = boxes.filter(b => b.checked).length;
          const pct = total ? Math.round(n / total * 100) : 0;
          $('#pct', root).textContent = pct + '%';
          $('#pbar i', root).style.width = pct + '%';
          $('#pbar', root).setAttribute('aria-valuenow', n);
          $('#pdone', root).textContent = `${n} of ${total} rounds`;
          t.parts.forEach((p, pi) => {
            const bs = boxes.filter(b => +b.dataset.part === pi), d = bs.filter(b => b.checked).length;
            const meta = $(`[data-pmeta="${pi}"]`, root), side = $(`[data-side="${pi}"]`, root);
            const txt = !bs.length ? '' : d === bs.length ? 'Done' : `${d}/${bs.length}`;
            meta.textContent = txt; meta.classList.toggle('done', d === bs.length && bs.length > 0);
            side.textContent = txt; side.classList.toggle('ok', d === bs.length && bs.length > 0);
            bs.forEach(b => b.closest('.round').classList.remove('next'));
            const next = bs.find(b => !b.checked);
            if (next && d > 0) next.closest('.round').classList.add('next');
            if (changedPart === pi && d === bs.length && bs.length) toast(`${p.name} finished. Nice work!`);
          });
          if (changedPart != null && n === total && total) toast('All rounds done! Time to assemble.');
        }
        boxes.forEach(b => b.addEventListener('change', () => {
          b.checked ? done.add(b.dataset.round) : done.delete(b.dataset.round);
          if (!store.set(pKey, [...done])) toast('Couldn\'t save progress in this browser.');
          sync(+b.dataset.part);
        }));
        sync();
        // reset (tap twice)
        const reset = $('[data-reset]', root);
        reset.addEventListener('click', () => {
          if (!reset.dataset.armed) { reset.dataset.armed = '1'; reset.textContent = 'Tap again to reset'; setTimeout(() => { delete reset.dataset.armed; reset.textContent = 'Reset'; }, 3000); return; }
          done.clear(); store.set(pKey, []); boxes.forEach(b => { b.checked = false; }); delete reset.dataset.armed; reset.textContent = 'Reset'; sync(); toast('Progress cleared.');
        });
        // text size
        $$('[data-size]', root).forEach(b => b.addEventListener('click', () => {
          const v = +b.dataset.size; store.set('ll-textsize', v);
          document.documentElement.style.setProperty('--round-size', ['1.05rem', '1.2rem', '1.45rem'][v]);
          $$('[data-size]', root).forEach(x => x.setAttribute('aria-pressed', x === b));
        }));
        // wake lock
        $('[data-wake]', root).addEventListener('click', async () => {
          if (wakeLock) { releaseWake(); $('#wake-tip', root).textContent = ''; return; }
          wakeWanted = true;
          const ok = await requestWake();
          $('#wake-tip', root).innerHTML = ok ? 'Your screen will stay on while this page is open.'
            : 'Your browser didn\'t allow this. Instead, raise your screen timeout: iPhone: Settings → Display &amp; Brightness → Auto-Lock. Android: Settings → Display → Screen timeout.';
        });
        cleanup.push(releaseWake);
        // print
        $('[data-print]', root).addEventListener('click', () => {
          openAllFolds(root);
          toast('Opening print… choose "Save as PDF" to keep a copy.');
          setTimeout(() => { try { window.print(); } catch { toast('Printing isn\'t available here. Use your browser\'s menu → Print.'); } }, 300);
        });
      },
    };
  }
  function openAllFolds(root = document) { $$('details.fold', root).forEach(d => { d.open = true; }); }
  window.addEventListener('beforeprint', () => openAllFolds());

  /* ---------------- lightbox ---------------- */
  const LB = { pics: [], i: 0, from: null };
  function openLightbox(pics, i, from) {
    Object.assign(LB, { pics, i, from });
    const lb = $('#lightbox');
    lb.classList.add('open'); lb.hidden = false;
    document.body.style.overflow = 'hidden';
    showLB();
    $('[data-lb-close]', lb).focus();
  }
  function showLB() {
    const lb = $('#lightbox'), img = $('img', lb), stage = $('.lb-stage', lb);
    stage.classList.remove('zoomed');
    img.src = LB.pics[LB.i].src; img.alt = LB.pics[LB.i].alt;
    $('#lb-count').textContent = `${LB.i + 1} / ${LB.pics.length}`;
    $$('.lb-nav', lb).forEach(b => { b.hidden = LB.pics.length < 2; });
  }
  function closeLightbox() {
    const lb = $('#lightbox');
    lb.classList.remove('open'); lb.hidden = true;
    document.body.style.overflow = '';
    LB.from?.focus();
  }
  function setupLightbox() {
    const lb = $('#lightbox'), stage = $('.lb-stage', lb), img = $('img', lb);
    $('[data-lb-close]', lb).addEventListener('click', closeLightbox);
    $('[data-lb-prev]', lb).addEventListener('click', () => { LB.i = (LB.i - 1 + LB.pics.length) % LB.pics.length; showLB(); });
    $('[data-lb-next]', lb).addEventListener('click', () => { LB.i = (LB.i + 1) % LB.pics.length; showLB(); });
    let sx = 0, sy = 0;
    stage.addEventListener('pointerdown', e => { sx = e.clientX; sy = e.clientY; });
    stage.addEventListener('pointerup', e => {
      const dx = e.clientX - sx, dy = e.clientY - sy;
      const zoomed = stage.classList.contains('zoomed');
      if (!zoomed && Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) { $(dx < 0 ? '[data-lb-next]' : '[data-lb-prev]', lb).click(); return; }
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8 && (e.target === img)) {
        const r = img.getBoundingClientRect(), fx = (e.clientX - r.left) / r.width, fy = (e.clientY - r.top) / r.height;
        stage.classList.toggle('zoomed');
        if (stage.classList.contains('zoomed')) requestAnimationFrame(() => { stage.scrollLeft = fx * stage.scrollWidth - stage.clientWidth / 2; stage.scrollTop = fy * stage.scrollHeight - stage.clientHeight / 2; });
      }
    });
    lb.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') $('[data-lb-next]', lb).click();
      if (e.key === 'ArrowLeft') $('[data-lb-prev]', lb).click();
      if (e.key === 'Tab') {
        const f = $$('button:not([hidden])', lb); const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

  /* ---------------- admin ---------------- */
  let editing = null, formPhotos = [];
  function viewAdmin() {
    let ok = false;
    try { ok = sessionStorage.getItem('ll-admin') === '1'; } catch { ok = adminOk; }
    if (!ok && !adminOk) return {
      title: `Pattern studio · ${SITE.name}`,
      html: `<div class="container"><form class="gate form-card" id="gate">
        ${yarnBall().replace('<svg', '<svg width="48" height="48" style="margin:0 auto 10px;display:block;color:#B9AA97"')}
        <h1 style="font-size:1.8rem">Pattern studio</h1>
        <p class="muted">This page is for the site owner. Enter your studio code to add or edit toys.</p>
        <div class="field" style="text-align:left"><label for="code">Studio code</label><input class="input" id="code" type="password" autocomplete="current-password" required></div>
        <p id="gate-err" role="alert" style="color:var(--terra-deep);font-weight:700"></p>
        <button class="btn btn-primary" style="width:100%">Open studio</button>
      </form></div>`,
      mount(root) {
        $('#gate', root).addEventListener('submit', e => {
          e.preventDefault();
          if ($('#code', root).value.trim() === SITE.adminCode) { adminOk = true; try { sessionStorage.setItem('ll-admin', '1'); } catch { } render(); }
          else $('#gate-err', root).textContent = 'That code doesn\'t match. Try again.';
        });
      },
    };
    const t = editing ? byId(editing) : null;
    const user = store.get('ll-user-toys', {});
    if (!t) formPhotos = [];
    return {
      title: `Pattern studio · ${SITE.name}`,
      html: `
      <div class="container page-head"><h1>Pattern studio</h1><p>Add a new toy or edit one you've made. Everything saves in this browser.</p></div>
      <div class="container admin admin-grid">
        <aside>
          <button type="button" class="btn btn-primary" style="width:100%;margin-bottom:14px" data-new>${I.plus} Add a new toy</button>
          <h2 style="font-size:1.1rem">Your toys</h2>
          <ul class="admin-list">${TOYS.map(x => `<li>
            <img src="${x.pics[0].src}" alt="">
            <span class="nm">${esc(x.name)}<small>${x.sample ? (user[x.id] ? 'Sample (edited)' : 'Sample') : 'Added by you'} · ${esc(x.date)}</small></span>
            <button type="button" class="icon-btn" data-edit="${esc(x.id)}" aria-label="Edit ${esc(x.name)}">${I.edit}</button>
          </li>`).join('')}</ul>
          ${store.get('ll-hidden', []).length ? `<button type="button" class="btn-link" data-unhide>Show hidden sample toys again</button>` : ''}
          <details class="fold" style="margin-top:18px">
            <summary><span class="s-title" style="font-size:1rem">Backup &amp; move</span><span class="chev">${I.chev}</span></summary>
            <div class="fold-body"><div class="fold-inner">
              <p class="muted" style="font-size:.92rem">Copy your toys as text to keep a backup or move them to another browser.</p>
              <textarea class="textarea mono" id="io-text" style="min-height:120px" aria-label="Toy data as JSON"></textarea>
              <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
                <button type="button" class="btn btn-soft btn-sm" data-export>${I.copy} Copy backup</button>
                <button type="button" class="btn btn-ghost btn-sm" data-import>Import</button>
              </div>
            </div></div>
          </details>
        </aside>
        <form class="form-card" id="toy-form" novalidate>
          <h2 style="margin-bottom:18px">${t ? `Edit: ${esc(t.name)}` : 'New toy'}</h2>
          <fieldset><legend>Photos</legend>
            <label class="photo-drop" id="drop">${I.upload}<strong>Tap to add photos</strong><br><span class="muted">or drag them here. The first photo is the cover.</span>
              <input type="file" id="photos" accept="image/*" multiple class="sr-only"></label>
            <div class="photo-grid" id="photo-grid"></div>
            ${t && t.illustrated ? '<p class="muted" style="font-size:.9rem;margin-top:8px">This toy is using an illustration. Add photos to replace it.</p>' : ''}
          </fieldset>
          <fieldset><legend>Quick facts</legend>
            <div class="field"><label for="f-name">Toy name</label><input class="input" id="f-name" required value="${esc(t?.name)}"></div>
            <div class="field"><label for="f-blurb">Short description</label><textarea class="textarea" id="f-blurb" style="min-height:90px">${esc(t?.blurb)}</textarea></div>
            <div class="two">
              <div class="field"><label for="f-sizecm">Finished height (cm)</label><input class="input" id="f-sizecm" type="number" min="1" step="0.5" inputmode="decimal" value="${esc(t?.sizeCm ?? '')}"></div>
              <div class="field"><label for="f-size">Size label <small>(optional)</small></label><input class="input" id="f-size" placeholder="e.g. 18 cm (7 in) tall" value="${esc(t?.size)}"></div>
              <div class="field"><label for="f-hook">Hook size</label><input class="input" id="f-hook" placeholder="e.g. 3.0 mm" value="${esc(t?.hook)}"></div>
              <div class="field"><label for="f-yarn">Yarn weight</label><select class="select" id="f-yarn">${YARNS.map(y => `<option ${t?.yarn === y ? 'selected' : ''}>${y}</option>`).join('')}</select></div>
              <div class="field"><label for="f-time">Time estimate</label><input class="input" id="f-time" placeholder="e.g. 4–5 hours" value="${esc(t?.time)}"></div>
              <div class="field"><label for="f-date">Date published</label><input class="input" id="f-date" type="date" value="${esc(t?.date || new Date().toISOString().slice(0, 10))}"></div>
            </div>
            <div class="field"><span class="label" id="diff-l">Difficulty</span>
              <div class="toggle-chips" role="radiogroup" aria-labelledby="diff-l">${DIFFICULTIES.map(d => `<label><input type="radio" name="diff" value="${d}" ${(t?.difficulty || 'easy') === d ? 'checked' : ''}><span>${cap(d)}</span></label>`).join('')}</div>
            </div>
            <div class="field"><span class="label">Colors</span>
              <div class="color-rows" id="color-rows"></div>
              <button type="button" class="btn btn-soft btn-sm" data-add-color style="justify-self:start">${I.plus} Add color</button>
            </div>
          </fieldset>
          <fieldset><legend>Categories &amp; tags</legend>
            <div class="field"><span class="label" id="cat-l">Categories</span>
              <div class="toggle-chips" role="group" aria-labelledby="cat-l">${CATEGORIES.map(c => `<label><input type="checkbox" name="cat" value="${c.id}" ${t?.categories.includes(c.id) ? 'checked' : ''}><span>${esc(c.name)}</span></label>`).join('')}</div>
            </div>
            <div class="field"><span class="label" id="type-l">Animal or character type</span>
              <div class="toggle-chips" role="group" aria-labelledby="type-l">${[...new Set([...TYPES, ...TOYS.flatMap(x => x.types)])].map(v => `<label><input type="checkbox" name="type" value="${esc(v)}" ${t?.types.includes(v) ? 'checked' : ''}><span>${esc(cap(v))}</span></label>`).join('')}</div>
              <input class="input" id="f-newtype" placeholder="Other type (e.g. fox, whale)">
            </div>
            <div class="field"><label for="f-tags">Tags</label><input class="input" id="f-tags" placeholder="cozy, spring, gift" value="${esc(t?.tags.join(', '))}"><small>Separate with commas. Tags are searchable.</small></div>
          </fieldset>
          <fieldset><legend>Materials</legend>
            <div class="field"><label for="f-mat">One item per line</label><textarea class="textarea" id="f-mat">${esc(t?.materials.join('\n'))}</textarea></div>
          </fieldset>
          <fieldset><legend>Pattern</legend>
            <div class="help-box">Paste your pattern. Start each part with <code>## Head</code> (add <code>(make 2)</code> if needed). Rounds look like <code>R1: 6 sc in MR (6)</code>, ranges like <code>R8-15: sc around (42)</code>, rows like <code>Row 1: ch 9…</code>. Any other line becomes a note.</div>
            <div class="field" style="margin-top:12px"><label for="f-pattern">Pattern text</label><textarea class="textarea mono" id="f-pattern" spellcheck="false">${esc(t?.pattern)}</textarea>
            <div class="parse-preview" id="parse-preview" aria-live="polite"></div></div>
            <div class="field"><label for="f-asm">Assembly steps <small>(one per line)</small></label><textarea class="textarea" id="f-asm">${esc(t?.assembly.join('\n'))}</textarea></div>
            <div class="field"><label for="f-tricky">Tricky parts <small>(one per line: Title :: explanation)</small></label><textarea class="textarea" id="f-tricky" placeholder="Lining up the eyes :: Count 7 stitches between them…">${esc(t?.tricky.map(x => `${x.q} :: ${x.a}`).join('\n'))}</textarea></div>
          </fieldset>
          <p id="form-err" role="alert" style="color:var(--terra-deep);font-weight:700"></p>
          <div class="form-actions">
            <button class="btn btn-primary">${t ? 'Save changes' : 'Publish toy'}</button>
            ${t ? `<a class="btn btn-ghost" href="#toy-${esc(t.id)}">View page</a>` : ''}
            ${t && t.sample && user[t.id] ? `<button type="button" class="btn btn-ghost" data-restore>Restore original</button>` : ''}
            ${t ? `<button type="button" class="btn btn-ghost" data-delete style="color:var(--terra-deep)">${I.trash} ${t.sample ? 'Hide' : 'Delete'}</button>` : ''}
          </div>
        </form>
      </div>`,
      mount(root) {
        if (t && !formPhotos.length && t.photos) formPhotos = [...t.photos];
        const form = $('#toy-form', root);
        // photos
        const pg = $('#photo-grid', root);
        const drawPhotos = () => {
          pg.innerHTML = formPhotos.map((p, i) => `<figure>${i === 0 ? '<span class="cover-flag">Cover</span>' : ''}<img src="${p.src}" alt="Uploaded photo ${i + 1}"><div class="ph-actions">${i ? `<button type="button" data-cover="${i}">Cover</button>` : '<span></span>'}<button type="button" data-rmph="${i}" aria-label="Remove photo ${i + 1}">✕</button></div></figure>`).join('');
        };
        drawPhotos();
        pg.addEventListener('click', e => {
          const c = e.target.closest('[data-cover]'), r = e.target.closest('[data-rmph]');
          if (c) { const [p] = formPhotos.splice(+c.dataset.cover, 1); formPhotos.unshift(p); drawPhotos(); }
          if (r) { formPhotos.splice(+r.dataset.rmph, 1); drawPhotos(); }
        });
        const addFiles = async files => {
          for (const f of [...files].filter(f => f.type.startsWith('image/'))) {
            try { formPhotos.push({ src: await compress(f) }); } catch { toast(`Couldn't read ${f.name}.`); }
          }
          drawPhotos();
        };
        $('#photos', root).addEventListener('change', e => addFiles(e.target.files));
        const drop = $('#drop', root);
        ['dragenter', 'dragover'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.add('drag'); }));
        ['dragleave', 'drop'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.remove('drag'); }));
        drop.addEventListener('drop', e => addFiles(e.dataTransfer.files));
        // colors
        const rows = $('#color-rows', root);
        const addColor = (c = { name: '', hex: '#E9D8BC' }) => {
          rows.append(el(`<div class="crow"><input type="color" value="${esc(c.hex)}" aria-label="Color swatch"><input class="input" value="${esc(c.name)}" placeholder="Color name (e.g. Sage green)" aria-label="Color name"><button type="button" class="icon-btn" aria-label="Remove color">${I.close}</button></div>`));
        };
        (t?.colors.length ? t.colors : [{ name: '', hex: '#F3EBD8' }]).forEach(addColor);
        rows.addEventListener('click', e => { const b = e.target.closest('.icon-btn'); if (b) b.closest('.crow').remove(); });
        $('[data-add-color]', root).addEventListener('click', () => addColor());
        // pattern preview
        const pv = $('#parse-preview', root), pt = $('#f-pattern', root);
        const preview = () => {
          const parts = parsePattern(pt.value);
          pv.innerHTML = parts.length ? `<strong>Looks good: ${parts.length} parts, ${roundsOf(parts).length} rounds/rows</strong><ul>${parts.map(p => `<li>${esc(p.name)}${p.count > 1 ? ` ×${p.count}` : ''}: ${p.items.filter(i => i.type === 'round').length} rounds, ${p.items.filter(i => i.type === 'note').length} notes</li>`).join('')}</ul>` : '<span class="muted">Your parts and rounds will be listed here as you type.</span>';
        };
        pt.addEventListener('input', debounce(preview, 200)); preview();
        // sidebar actions
        root.addEventListener('click', e => {
          const ed = e.target.closest('[data-edit]');
          if (ed) { editing = ed.dataset.edit; formPhotos = []; render(); window.scrollTo(0, 0); }
          if (e.target.closest('[data-new]')) { editing = null; formPhotos = []; render(); }
          if (e.target.closest('[data-unhide]')) { store.set('ll-hidden', []); loadToys(); render(); toast('Sample toys are back.'); }
          if (e.target.closest('[data-export]')) {
            const ta = $('#io-text', root); ta.value = JSON.stringify(store.get('ll-user-toys', {}), null, 1); ta.select();
            navigator.clipboard?.writeText(ta.value).then(() => toast('Backup copied.'), () => toast('Select the text and copy it.'));
          }
          if (e.target.closest('[data-import]')) {
            try { const data = JSON.parse($('#io-text', root).value); if (typeof data !== 'object' || Array.isArray(data)) throw 0; const cur = store.get('ll-user-toys', {}); store.set('ll-user-toys', { ...cur, ...data }) ? (loadToys(), render(), toast('Toys imported.')) : toast('Not enough storage space.'); }
            catch { toast('That text isn\'t a valid backup.'); }
          }
          const del = e.target.closest('[data-delete]');
          if (del) {
            if (!del.dataset.armed) { del.dataset.armed = 1; del.lastChild.textContent = ' Tap again to confirm'; setTimeout(() => { if (del.isConnected) { delete del.dataset.armed; del.lastChild.textContent = t.sample ? ' Hide' : ' Delete'; } }, 3000); return; }
            const u = store.get('ll-user-toys', {}); delete u[t.id]; store.set('ll-user-toys', u);
            if (t.sample) store.set('ll-hidden', [...new Set([...store.get('ll-hidden', []), t.id])]);
            editing = null; loadToys(); render(); toast(t.sample ? 'Toy hidden.' : 'Toy deleted.');
          }
          if (e.target.closest('[data-restore]')) { const u = store.get('ll-user-toys', {}); delete u[t.id]; store.set('ll-user-toys', u); loadToys(); render(); toast('Original restored.'); }
        });
        // save
        form.addEventListener('submit', e => {
          e.preventDefault();
          const v = id => $(id, root).value.trim();
          const name = v('#f-name');
          if (!name) { $('#form-err', root).textContent = 'Please give your toy a name.'; $('#f-name', root).focus(); return; }
          const pattern = $('#f-pattern', root).value;
          if (!parsePattern(pattern).length) { $('#form-err', root).textContent = 'Please paste the pattern text.'; $('#f-pattern', root).focus(); return; }
          const types = $$('input[name=type]:checked', root).map(x => x.value).concat(v('#f-newtype').split(',').map(s => s.trim().toLowerCase()).filter(Boolean));
          const sizeCm = parseFloat(v('#f-sizecm')) || 10;
          let id = t?.id;
          if (!id) { id = slugify(name); let n = 2; while (byId(id)) id = slugify(name) + '-' + n++; }
          const base = t ? (SAMPLE_TOYS.find(s => s.id === t.id) || {}) : {};
          const toy = {
            id, name, date: v('#f-date') || new Date().toISOString().slice(0, 10),
            blurb: v('#f-blurb'), sizeCm, size: v('#f-size') || `${sizeCm} cm tall`, hook: v('#f-hook'), yarn: $('#f-yarn', root).value, time: v('#f-time'),
            difficulty: ($('input[name=diff]:checked', root) || {}).value || 'easy',
            colors: $$('.crow', root).map(r => ({ hex: $('input[type=color]', r).value, name: $('.input', r).value.trim() })).filter(c => c.name),
            categories: $$('input[name=cat]:checked', root).map(x => x.value),
            types: [...new Set(types)],
            tags: v('#f-tags').split(',').map(s => s.trim()).filter(Boolean),
            materials: v('#f-mat').split('\n').map(s => s.trim()).filter(Boolean),
            pattern,
            assembly: v('#f-asm').split('\n').map(s => s.trim()).filter(Boolean),
            tricky: v('#f-tricky').split('\n').map(s => s.trim()).filter(Boolean).map(s => { const [q, ...a] = s.split('::'); return { q: q.trim(), a: a.join('::').trim() || '' }; }),
            photos: formPhotos.map((p, i) => ({ src: p.src, alt: `${name}, photo ${i + 1}` })),
          };
          if (base.art && !toy.photos.length) { toy.art = base.art; toy.photoViews = base.photoViews; }
          const u = store.get('ll-user-toys', {}); u[id] = toy;
          if (!store.set('ll-user-toys', u)) { $('#form-err', root).textContent = 'Browser storage is full. Try fewer or smaller photos.'; return; }
          loadToys(); editing = id; toast(t ? 'Changes saved.' : 'Toy published!');
          location.hash = 'toy-' + id;
        });
      },
    };
  }
  let adminOk = false;
  function compress(file) {
    return new Promise((res, rej) => {
      const img = new Image(), url = URL.createObjectURL(file);
      img.onload = () => {
        const s = Math.min(1, 1200 / Math.max(img.width, img.height));
        const c = document.createElement('canvas');
        c.width = Math.round(img.width * s); c.height = Math.round(img.height * s);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        URL.revokeObjectURL(url);
        res(c.toDataURL('image/jpeg', .82));
      };
      img.onerror = () => { URL.revokeObjectURL(url); rej(); };
      img.src = url;
    });
  }

  /* ---------------- router ---------------- */
  const app = $('#app');
  let cleanup = [], current = null;
  const scrollMem = {};
  function parse() {
    const h = decodeURIComponent(location.hash.slice(1)) || 'home';
    if (h.startsWith('toy-')) return { name: 'toy', id: h.slice(4), key: h };
    return { name: ({ home: 1, browse: 1, favorites: 1, about: 1, admin: 1 })[h] ? h : '404', key: h };
  }
  function render() {
    const r = parse();
    cleanup.forEach(fn => { try { fn(); } catch { } }); cleanup = [];
    if (current && current.name !== 'toy') scrollMem[current.key] = window.scrollY;
    const prev = current; current = r;
    const v = r.name === 'home' ? viewHome() : r.name === 'browse' ? viewBrowse() : r.name === 'favorites' ? viewFavorites()
      : r.name === 'about' ? viewAbout() : r.name === 'admin' ? viewAdmin() : r.name === 'toy' ? viewToy(r.id) : viewNotFound();
    app.innerHTML = v.html;
    document.title = v.title;
    $('meta[name=description]').setAttribute('content', v.desc || 'Cozy, round-by-round amigurumi crochet patterns with progress tracking, favorites and printable pages.');
    const navName = r.name === 'toy' ? 'browse' : r.name;
    $$('[data-nav]').forEach(a => a.dataset.nav === navName ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'));
    v.mount?.(app);
    watchReveals(app);
    const same = prev && prev.key === r.key;
    if (!same) {
      if (prev && prev.name === 'toy' && scrollMem[r.key] != null) window.scrollTo(0, scrollMem[r.key]);
      else window.scrollTo(0, 0);
      app.focus({ preventScroll: true });
    }
    return { prev, r };
  }
  function navigate() {
    const prev = current;
    const next = parse();
    if (!document.startViewTransition || reduced()) { render(); return; }
    // smooth photo -> pattern page morph (and back)
    let named = [];
    if (next.name === 'toy') {
      const img = pendingHero; if (img) { img.style.viewTransitionName = 'toy-hero'; named.push(img); }
    } else if (prev && prev.name === 'toy') {
      const img = $('.g-slide img'); if (img) { img.style.viewTransitionName = 'toy-hero'; named.push(img); }
    }
    pendingHero = null;
    const tr = document.startViewTransition(() => {
      named.forEach(n => { n.style.viewTransitionName = ''; });
      render();
      if (next.name === 'toy' && named.length) { const g = $('.g-slide img'); if (g) { g.style.viewTransitionName = 'toy-hero'; named = [g]; } }
      else if (prev && prev.name === 'toy') { const c = $(`.card[data-id="${CSS.escape(prev.id)}"] .card-img img`); if (c) { c.style.viewTransitionName = 'toy-hero'; named = [c]; } else named = []; }
    });
    tr.finished.finally(() => named.forEach(n => { n.style.viewTransitionName = ''; }));
  }
  let pendingHero = null;
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#toy-"]');
    if (a) { const box = a.closest('.card, .hero-art'); pendingHero = box ? $('img', box) : null; }
    const fav = e.target.closest('[data-fav]');
    if (fav) toggleFav(fav);
    const skip = e.target.closest('[data-skip]');
    if (skip) { e.preventDefault(); app.focus(); }
  });
  function toggleFav(btn) {
    const id = btn.dataset.fav, t = byId(id);
    const on = !favs.has(id);
    on ? favs.add(id) : favs.delete(id);
    saveFavs();
    $$(`[data-fav="${CSS.escape(id)}"]`).forEach(b => {
      b.setAttribute('aria-pressed', on);
      b.setAttribute('aria-label', `${on ? 'Remove' : 'Save'} ${t.name} ${on ? 'from' : 'to'} favorites`);
      const s = $('span', b); if (s) s.textContent = on ? 'Saved' : 'Save';
      if (on && !reduced()) { b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop'); setTimeout(() => b.classList.remove('pop'), 600); }
    });
    updateFavBadges();
    toast(on ? `${t.name} saved to favorites` : `Removed from favorites`);
    if (!on && current?.name === 'favorites') {
      const card = btn.closest('.card'), grid = $('#fav-grid');
      const finish = () => { updateGrid(grid, TOYS.filter(x => favs.has(x.id))); if (!favs.size || !TOYS.some(x => favs.has(x.id))) $('#fav-empty').innerHTML = favEmpty(); };
      if (card && !reduced()) card.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'scale(.9)' }], { duration: 260, easing: EASE }).onfinish = () => { card.remove(); finish(); };
      else finish();
    }
  }

  /* ---------------- chrome: back to top, keys ---------------- */
  const toTop = $('#to-top'), header = $('.site-header');
  window.addEventListener('scroll', () => { toTop.classList.toggle('show', window.scrollY > 700); header.classList.toggle('scrolled', window.scrollY > 4); }, { passive: true });
  toTop.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: reduced() ? 'auto' : 'smooth' }); app.focus({ preventScroll: true }); });

  /* ---------------- start ---------------- */
  document.documentElement.classList.remove('no-js');
  loadToys();
  updateFavBadges();
  setupLightbox();
  window.addEventListener('hashchange', navigate);
  render();
})();
