/* ============================================================
   Illustrated "photos" for the sample toys.
   Real uploaded photos (from the Add toy page) replace these.
   ============================================================ */
const Art = (() => {
  const INK = '#3B2A20';
  const shade = (hex, amt) => {
    const n = parseInt(hex.slice(1), 16);
    let r = (n >> 16) + amt, g = ((n >> 8) & 255) + amt, b = (n & 255) + amt;
    r = Math.max(0, Math.min(255, r)); g = Math.max(0, Math.min(255, g)); b = Math.max(0, Math.min(255, b));
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  // draw a shape in color + a crochet-stitch texture overlay
  const knit = (shape, color, extra = '') =>
    `<${shape} fill="${color}" ${extra}/><${shape} fill="url(#st)" ${extra}/>`;
  const E = (cx, cy, rx, ry, rot = 0) =>
    `ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}"${rot ? ` transform="rotate(${rot} ${cx} ${cy})"` : ''}`;
  const C = (cx, cy, r) => `circle cx="${cx}" cy="${cy}" r="${r}"`;
  const P = d => `path d="${d}"`;

  const eyes = (y = 178, gap = 36, closed = false) => closed
    ? `<path d="M${200 - gap - 10} ${y} q10 9 20 0 M${200 + gap - 10} ${y} q10 9 20 0" stroke="${INK}" stroke-width="4" fill="none" stroke-linecap="round"/>`
    : `<ellipse cx="${200 - gap}" cy="${y}" rx="9" ry="11" fill="${INK}"/><ellipse cx="${200 + gap}" cy="${y}" rx="9" ry="11" fill="${INK}"/>
       <circle cx="${203 - gap}" cy="${y - 4}" r="3.2" fill="#fff"/><circle cx="${203 + gap}" cy="${y - 4}" r="3.2" fill="#fff"/>`;
  const cheeks = (y = 200, gap = 60, col = '#E8A0A0') =>
    `<ellipse cx="${200 - gap}" cy="${y}" rx="14" ry="8" fill="${col}" opacity=".75"/><ellipse cx="${200 + gap}" cy="${y}" rx="14" ry="8" fill="${col}" opacity=".75"/>`;
  const smile = (y = 200, w = 8) => `<path d="M${200 - w} ${y} q${w} ${w} ${w * 2} 0" stroke="${INK}" stroke-width="3.2" fill="none" stroke-linecap="round"/>`;
  const leaf = (x, y, rot, col) =>
    `<g transform="translate(${x} ${y}) rotate(${rot})"><path d="M0 0 q9 -11 0 -24 q-9 13 0 24z" fill="${col}"/><path d="M0 -2 v-18" stroke="${shade(col, -30)}" stroke-width="1.4"/></g>`;

  const baseBody = (a, opt = {}) => {
    const b = a.body, b2 = shade(b, -16);
    return `
      ${knit(E(158, 336, 32, 20), b2)}${knit(E(242, 336, 32, 20), b2)}
      ${knit(E(200, 282, opt.bodyRx || 82, opt.bodyRy || 68), b)}
      ${a.belly ? knit(E(200, 292, 50, 44), a.belly) : ''}
      ${knit(E(126, 276, 20, 34, 22), b2)}${knit(E(274, 276, 20, 34, -22), b2)}`;
  };

  const kinds = {
    bunny(a) {
      const b = a.body, ear = a.ear || b;
      return `
        ${baseBody(a)}
        ${a.bag ? `<path d="M146 236 Q200 262 262 300" stroke="${a.bag}" stroke-width="7" fill="none" stroke-linecap="round"/>` : ''}
        ${knit(E(200, 168, 96, 84), b)}
        ${knit(E(110, 205, 27, 74, 14), ear)}${knit(E(290, 205, 27, 74, -14), ear)}
        ${a.leaves ? [[104, 182, -10], [108, 222, 14], [116, 258, -8], [296, 182, 10], [292, 222, -14], [284, 258, 8]].map(l => leaf(l[0], l[1], l[2], a.leaves)).join('') : ''}
        ${eyes(184, 34)}${cheeks(206, 56)}
        <ellipse cx="200" cy="198" rx="8" ry="6" fill="#D88C93"/>${smile(208, 7)}
        ${a.cap ? `${knit(P('M96 138 Q100 46 200 40 Q300 46 304 138 Q250 152 200 150 Q150 152 96 138Z'), a.cap)}
          <path d="M96 138 Q150 156 200 154 Q250 156 304 138" stroke="${shade(a.cap, -28)}" stroke-width="5" fill="none" stroke-linecap="round"/>
          ${[[150, 92, 13], [212, 70, 10], [256, 104, 12], [184, 118, 8], [120, 124, 7]].map(s => `<circle cx="${s[0]}" cy="${s[1]}" r="${s[2]}" fill="${a.spots}"/>`).join('')}` : ''}
        ${a.bag ? `${knit(P('M232 282 h50 a10 10 0 0 1 10 10 v28 a12 12 0 0 1 -12 12 h-46 a12 12 0 0 1 -12 -12 v-28 a10 10 0 0 1 10 -10z'), a.bag)}
          ${knit(P('M226 286 h62 v14 q-31 16 -62 0z'), shade(a.bag, -18))}<circle cx="257" cy="304" r="5" fill="${a.spots || '#F3EBD8'}"/>` : ''}`;
    },
    bear(a) {
      const b = a.body, b2 = shade(b, -18);
      return `
        ${knit(C(124, 98, 32), b)}${knit(C(276, 98, 32), b)}
        <circle cx="124" cy="98" r="17" fill="${a.belly}"/><circle cx="276" cy="98" r="17" fill="${a.belly}"/>
        ${baseBody(a)}
        ${knit(E(200, 168, 98, 84), b)}
        ${knit(E(200, 204, 38, 27), a.belly)}
        <ellipse cx="200" cy="192" rx="12" ry="8" fill="${INK}"/>
        <path d="M200 200 v8 M190 210 q10 7 20 0" stroke="${INK}" stroke-width="3" fill="none" stroke-linecap="round"/>
        ${eyes(166, 40, a.sleepy)}${cheeks(196, 64)}
        ${a.pot ? `${knit(P('M168 268 q-10 0 -10 12 v34 q0 20 42 20 q42 0 42 -20 v-34 q0 -12 -10 -12z'), a.pot)}
          <rect x="160" y="258" width="80" height="16" rx="8" fill="${shade(a.pot, -30)}"/>
          <path d="M176 274 q4 14 0 22 M224 274 q4 10 0 18" stroke="#F7D27A" stroke-width="7" stroke-linecap="round" fill="none"/>
          <text x="200" y="314" font-family="Fredoka, sans-serif" font-weight="600" font-size="18" text-anchor="middle" fill="#5A3A14">HONEY</text>` : ''}
        ${a.nightcap ? `${knit(P('M128 108 Q190 40 286 92 Q300 40 342 52 Q300 70 290 120 Q210 92 128 108Z'), a.nightcap)}<circle cx="344" cy="54" r="15" fill="#F3EBD8"/>` : ''}`;
    },
    cat(a) {
      const b = a.body;
      return `
        <path d="M262 312 Q340 320 330 250 Q324 214 300 222" stroke="${shade(b, -16)}" stroke-width="26" fill="none" stroke-linecap="round"/>
        ${knit(P('M114 128 L124 52 L184 96Z'), b)}${knit(P('M286 128 L276 52 L216 96Z'), b)}
        <path d="M126 112 L131 72 L164 98Z M274 112 L269 72 L236 98Z" fill="#E8B4B4"/>
        ${baseBody(a)}
        ${a.moon ? `<path d="M222 252 a34 34 0 1 0 0 62 a26 26 0 1 1 0 -62z" fill="${a.moon}"/>` : ''}
        ${knit(E(200, 168, 98, 80), b)}
        ${eyes(170, 38)}${cheeks(194, 64)}
        <path d="M193 186 h14 l-7 8z" fill="#D88C93"/>
        <path d="M200 194 v6 M190 204 q5 5 10 0 q5 5 10 0" stroke="${INK}" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M128 186 h-34 M130 198 l-32 8 M272 186 h34 M270 198 l32 8" stroke="${INK}" stroke-opacity=".55" stroke-width="2.5" stroke-linecap="round"/>
        ${a.star ? `<path d="M152 98 l5 10 11 2 -8 8 2 11 -10 -5 -10 5 2 -11 -8 -8 11 -2z" fill="${a.moon}"/>` : ''}`;
    },
    frog(a) {
      const b = a.body;
      return `
        ${baseBody(a, { bodyRx: 86 })}
        ${knit(C(144, 112, 36), b)}${knit(C(256, 112, 36), b)}
        ${knit(E(200, 176, 108, 74), b)}
        <circle cx="144" cy="110" r="22" fill="#FFFDF8"/><circle cx="256" cy="110" r="22" fill="#FFFDF8"/>
        <circle cx="148" cy="114" r="12" fill="${INK}"/><circle cx="252" cy="114" r="12" fill="${INK}"/>
        <circle cx="151" cy="109" r="4" fill="#fff"/><circle cx="255" cy="109" r="4" fill="#fff"/>
        <path d="M150 192 Q200 232 250 192" stroke="${INK}" stroke-width="4" fill="none" stroke-linecap="round"/>
        ${cheeks(190, 76)}
        ${a.crown ? `<path d="M168 82 L172 46 L188 66 L200 40 L212 66 L228 46 L232 82Z" fill="${a.crown}" stroke="${shade(a.crown, -40)}" stroke-width="3" stroke-linejoin="round"/>
          <circle cx="200" cy="70" r="5" fill="#D9634F"/>` : ''}`;
    },
    strawberry(a) {
      const b = a.body;
      const seeds = [[160, 220], [200, 210], [240, 220], [146, 262], [186, 252], [228, 256], [262, 268], [168, 296], [208, 300], [244, 302], [190, 334], [226, 330]];
      return `
        <path d="M200 40 v34" stroke="#B9A88F" stroke-width="5"/>
        <circle cx="200" cy="36" r="24" fill="none" stroke="#C9C2B8" stroke-width="7"/>
        <circle cx="200" cy="36" r="24" fill="none" stroke="#FFFFFF" stroke-opacity=".6" stroke-width="2"/>
        ${knit(P('M200 360 C108 330 84 196 126 148 C156 112 244 112 274 148 C316 196 292 330 200 360Z'), b)}
        ${seeds.map(s => `<ellipse cx="${s[0]}" cy="${s[1]}" rx="4" ry="6" fill="${a.seed}"/>`).join('')}
        ${knit(P('M200 96 L232 116 L270 112 L246 140 L220 128 L200 150 L180 128 L154 140 L130 112 L168 116Z'), a.leaf)}
        ${eyes(206, 30)}${cheeks(226, 52, '#F2B7A8')}${smile(222, 7)}`;
    },
    dragon(a) {
      const b = a.body, w = a.wing;
      return `
        <path d="M250 320 Q330 340 340 280 Q346 250 330 238" stroke="${shade(b, -14)}" stroke-width="28" fill="none" stroke-linecap="round"/>
        <path d="M330 236 l20 -16 -2 26z" fill="${w}"/>
        ${knit(P('M132 250 Q64 196 52 238 Q70 246 66 266 Q86 262 92 282 Q112 270 132 286Z'), w)}
        ${knit(P('M268 250 Q336 196 348 238 Q330 246 334 266 Q314 262 308 282 Q288 270 268 286Z'), w)}
        ${[[160, 86], [200, 76], [240, 86]].map(s => `<path d="M${s[0] - 13} ${s[1] + 10} L${s[0]} ${s[1] - 18} L${s[0] + 13} ${s[1] + 10}Z" fill="${w}"/>`).join('')}
        ${knit(P('M128 116 L118 62 L158 96Z'), a.horn)}${knit(P('M272 116 L282 62 L242 96Z'), a.horn)}
        ${baseBody(a)}
        ${[268, 286, 304].map(y => `<path d="M168 ${y} q32 8 64 0" stroke="${shade(a.belly, -26)}" stroke-width="3" fill="none"/>`).join('')}
        ${knit(E(200, 170, 98, 82), b)}
        ${knit(E(200, 208, 46, 28), shade(b, 14))}
        <circle cx="186" cy="204" r="4" fill="${INK}"/><circle cx="214" cy="204" r="4" fill="${INK}"/>
        ${smile(218, 10)}
        ${eyes(166, 40)}${cheeks(190, 70)}
        ${a.leafHat ? `<path d="M200 90 q-4 -24 8 -34" stroke="#6B4A2E" stroke-width="6" fill="none" stroke-linecap="round"/>${leaf(214, 70, 60, '#5E8A5A')}` : ''}`;
    },
    vest(a) {
      const b = a.body, lite = shade(b, 16), band = shade(b, -14), dot = shade(b, 34);
      const dots = (d, w) => `<path d="${d}" stroke="${band}" stroke-width="${w}" fill="none" stroke-linecap="round"/><path d="${d}" stroke="${dot}" stroke-width="3" fill="none" stroke-linecap="round" stroke-dasharray="1 7" opacity=".7"/>`;
      return `
        ${knit(P('M120 82 L170 66 Q200 96 230 66 L280 82 Q268 146 298 176 L304 316 L96 316 L102 176 Q132 146 120 82Z'), shade(b, -8))}
        ${knit(P('M230 66 L280 82 Q268 146 298 176 L304 316 L118 316Z'), b)}
        ${dots('M230 66 L118 312', 15)}
        ${knit(P('M170 66 L120 82 Q132 146 102 176 L96 316 L282 316Z'), lite)}
        ${dots('M170 66 L282 312', 15)}
        ${dots('M166 66 Q200 84 234 66', 13)}
        ${dots('M96 314 L304 314', 22)}
        ${dots('M121 84 Q133 146 103 176', 9)}${dots('M279 84 Q267 146 297 176', 9)}`;
    },
  };

  const props = a => `
    <g transform="translate(332 330)">
      <circle r="34" fill="${a.yarn}"/>
      <path d="M-30 -12 Q0 -34 30 -8 M-34 6 Q0 -20 32 12 M-26 22 Q4 2 24 28" stroke="${shade(a.yarn, -26)}" stroke-width="3" fill="none"/>
      <path d="M-28 20 Q-90 50 -150 30" stroke="${a.yarn}" stroke-width="3" fill="none"/>
    </g>
    <g transform="translate(66 330) rotate(-38)"><rect x="-4" y="-46" width="8" height="92" rx="4" fill="#C9A27A"/><path d="M-4 -46 q4 -10 8 0" fill="#C9A27A"/><rect x="-6" y="6" width="12" height="40" rx="6" fill="${a.handle || '#8FAE7E'}"/></g>`;

  const views = [
    { vb: '0 0 400 400', label: 'front view', bg: 0 },
    { vb: '86 34 228 228', label: 'close-up of the face', bg: 1 },
    { vb: '20 20 360 360', label: 'three-quarter view', bg: 2, tilt: -6 },
    { vb: '176 206 168 168', label: 'detail', bg: 1 },
  ];

  function svg(a, v = 0) {
    const view = views[v] || views[0];
    const bg = ['#EFEBE5', '#EAE5DE', '#F1EDE7'][view.bg % 3];
    const toy = (kinds[a.kind] || kinds.bear)(a);
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${view.vb}">
      <defs><pattern id="st" width="10" height="9" patternUnits="userSpaceOnUse"><path d="M1.5 1.5 L5 7 L8.5 1.5" stroke="#000" stroke-opacity=".05" fill="none" stroke-width="1.5" stroke-linecap="round"/></pattern>
      <radialGradient id="glow" cx=".5" cy=".38" r=".7"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>
      <rect x="-50" y="-50" width="500" height="500" fill="${bg}"/>
      <ellipse cx="200" cy="356" rx="118" ry="15" fill="#3B2A20" opacity=".07"/>
      <g ${view.tilt ? `transform="rotate(${view.tilt} 200 260)"` : ''}>${toy}</g>
      
    </svg>`;
  }
  const url = (a, v) => 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg(a, v).replace(/\s+/g, ' '));
  return { url, views };
})();
