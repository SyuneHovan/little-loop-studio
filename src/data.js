/* ============================================================
   Site data. Sample toys live here; toys you add on the
   "Add toy" page are saved in your browser and merged in.
   Pattern text format (same as the Add toy page):
     ## Part name (make 2)     -> a new part
     R1: 6 sc in MR (6)        -> a round (tap to check off)
     R8-15: sc around (42)     -> expands to R8, R9 ... R15
     Row 1: ...                -> a row (flat pieces)
     anything else             -> a note
   ============================================================ */
const SITE = {
  name: 'Little Loop Studio',
  tagline: 'Cozy amigurumi patterns, one round at a time',
  adminCode: 'loops', // change this! (simple gate, not real security)
};

const CATEGORIES = [
  { id: 'animals', name: 'Animals', color: '#E4ECDF', ink: '#4D6B50', icon: 'paw' },
  { id: 'fantasy', name: 'Fantasy creatures', color: '#ECE3F1', ink: '#6A4C7A', icon: 'sparkle' },
  { id: 'food', name: 'Food', color: '#F6E2D8', ink: '#9C4E31', icon: 'berry' },
  { id: 'plants', name: 'Plants & mushrooms', color: '#E9EFD9', ink: '#55702F', icon: 'mushroom' },
  { id: 'small', name: 'Small items & keychains', color: '#F5ECCB', ink: '#7A5A1E', icon: 'key' },
  { id: 'seasonal', name: 'Seasonal', color: '#F3E0D2', ink: '#8C4A2A', icon: 'leaf' },
];

const TYPES = ['bunny', 'bear', 'cat', 'frog', 'mushroom', 'fantasy', 'food'];
const DIFFICULTIES = ['easy', 'medium', 'hard'];
const YARNS = ['Fingering', 'Sport', 'DK', 'Worsted', 'Chunky'];
const SIZES = [
  { id: 'mini', name: 'Mini (under 8 cm)', max: 7.99 },
  { id: 'small', name: 'Small (8–14 cm)', max: 14.99 },
  { id: 'medium', name: 'Medium (15–20 cm)', max: 20.99 },
  { id: 'large', name: 'Large (21 cm +)', max: Infinity },
];

const ABBR = {
  'MR': 'magic ring (adjustable starting loop)',
  'sc': 'single crochet (UK: double crochet)',
  'hdc': 'half double crochet (UK: half treble)',
  'dc': 'double crochet (UK: treble)',
  'inc': 'increase: 2 sc in the same stitch',
  'dec': 'decrease: sc 2 together (invisible decrease recommended)',
  'BLO': 'back loop only',
  'FLO': 'front loop only',
  'sl st': 'slip stitch',
  'ch': 'chain',
  'st': 'stitch(es)',
  'FO': 'fasten off',
  'R': 'round',
  'x': 'repeat the part in brackets this many times',
  '( )': 'number of stitches at the end of the round',
};

const SAMPLE_TOYS = [
  {
    id: 'mushroom-bunny',
    name: 'Mushroom Bunny',
    date: '2026-11-10',
    types: ['bunny', 'mushroom'],
    categories: ['animals', 'plants'],
    difficulty: 'medium',
    sizeCm: 18,
    size: '18 cm (7 in) tall',
    hook: '2.5 mm (US B/1–C/2)',
    yarn: 'DK',
    time: '8–10 hours',
    colors: [
      { name: 'Cream', hex: '#F1E9D8' }, { name: 'Sage green', hex: '#8DA47A' },
      { name: 'Leaf green', hex: '#5C7F4E' }, { name: 'Chestnut brown', hex: '#7E4E2C' }, { name: 'Gold metallic', hex: '#D4A93A' },
    ],
    tags: ['mushroom', 'cottagecore', 'forest', 'bag', 'embroidery', 'lop ears', 'stars', 'leaves'],
    blurb: 'A cream bunny under a sage-green mushroom cap, with long lop ears covered in embroidered leaf vines, tiny gold stars at the ear tips and a little brown satchel.',
    photos: [
      { src: '@img/mushroom-bunny-1.jpg', alt: 'Mushroom Bunny amigurumi: a cream crochet bunny with a sage-green mushroom cap, leaf-embroidered lop ears with gold stars, and a brown satchel' },
      { src: '@img/mushroom-bunny-2.jpg', alt: 'Close-up of the Mushroom Bunny face, showing the cream cap gills and the small brown leaf on the forehead' },
      { src: '@img/mushroom-bunny-3.jpg', alt: 'Close-up of the body with green leaf embroidery, the brown satchel and the gold stars on the ear tips' },
    ],
    art: { kind: 'bunny', body: '#F3EBD8', ear: '#EFE4CF', cap: '#8FAE7E', spots: '#F7F0E0', leaves: '#5E8A5A', bag: '#8A6243' },
    materials: [
      'DK cotton yarn in cream, about 70 g',
      'DK cotton yarn in sage green, about 25 g',
      'DK cotton yarn in chestnut brown, about 10 g',
      'Leaf green embroidery floss or fingering yarn',
      'Gold metallic yarn or thread, a few meters',
      '2.5 mm crochet hook',
      '10 mm black safety eyes (1 pair)',
      'Polyester fiberfill stuffing',
      'Stitch markers, tapestry needle and embroidery needle',
    ],
    pattern: `## Head
Cream yarn. Work in continuous rounds and move your marker up each round.
R1: 6 sc in MR (6)
R2: inc in each st around (12)
R3: (sc, inc) x 6 (18)
R4: (2 sc, inc) x 6 (24)
R5: (3 sc, inc) x 6 (30)
R6: (4 sc, inc) x 6 (36)
R7: (5 sc, inc) x 6 (42)
R8-15: sc around (42)
Place the safety eyes between R11 and R12, about 8 stitches apart.
R16: (5 sc, dec) x 6 (36)
R17: (4 sc, dec) x 6 (30)
R18: (3 sc, dec) x 6 (24)
Start stuffing firmly.
R19: (2 sc, dec) x 6 (18)
R20: (sc, dec) x 6 (12)
R21: dec x 6 (6)
FO, close the hole and weave in the end.
## Ears (make 2)
Cream yarn.
R1: 6 sc in MR (6)
R2: (sc, inc) x 3 (9)
R3: (2 sc, inc) x 3 (12)
R4: (3 sc, inc) x 3 (15)
R5-22: sc around (15)
R23: (3 sc, dec) x 3 (12)
Do not stuff. Flatten and sc 6 across to close. FO, leaving a long tail for sewing.
Embroider a leaf vine down each ear: a stem in backstitch with 5–6 lazy daisy leaves in leaf green.
## Legs (make 2)
Cream yarn. The legs are joined to start the body.
R1: 6 sc in MR (6)
R2: inc x 6 (12)
R3-7: sc around (12)
FO the first leg. Do not fasten off the second leg.
## Body
Cream yarn, continuing from the second leg.
R1: ch 3, sc 12 around the first leg, sc 3 along the chain, sc 12 around the second leg, sc 3 along the other side of the chain (30)
R2-8: sc around (30)
R9: (3 sc, dec) x 6 (24)
R10-12: sc around (24)
R13: (2 sc, dec) x 6 (18)
R14: sc around (18)
Stuff firmly, adding stuffing to the legs first. FO, leaving a long tail for sewing to the head.
Embroider two leaf sprigs across the chest before sewing the head on.
## Arms (make 2)
Cream yarn.
R1: 6 sc in MR (6)
R2: (sc, inc) x 3 (9)
R3-10: sc around (9)
Stuff the tip lightly. Flatten and sc 4 across to close. FO.
## Mushroom cap
Sage green yarn for the top.
R1: 6 sc in MR (6)
R2: inc x 6 (12)
R3: (sc, inc) x 6 (18)
R4: (2 sc, inc) x 6 (24)
R5: (3 sc, inc) x 6 (30)
R6: (4 sc, inc) x 6 (36)
R7: (5 sc, inc) x 6 (42)
R8: (6 sc, inc) x 6 (48)
R9: (7 sc, inc) x 6 (54)
R10-14: sc around (54)
R15: (8 sc, inc) x 6 (60)
R16: sc around (60)
Do not FO yet. Set aside while you make the underside.
## Cap underside
Cream yarn, worked as a flat circle.
R1: 6 sc in MR (6)
R2: inc x 6 (12)
R3: (sc, inc) x 6 (18)
R4: (2 sc, inc) x 6 (24)
R5: (3 sc, inc) x 6 (30)
R6: (4 sc, inc) x 6 (36)
R7: (5 sc, inc) x 6 (42)
R8: (6 sc, inc) x 6 (48)
R9: (7 sc, inc) x 6 (54)
R10: (8 sc, inc) x 6 (60)
Make the gills: with cream yarn, surface slip stitch straight lines from the center out to the edge, about 12 lines evenly spaced.
Place the underside inside the green cap and sc both edges together with the green yarn. Stuff the cap lightly before closing.
## Forehead leaf
Chestnut brown yarn, worked in a row.
Row 1: ch 7, sl st in 2nd ch from hook, sc, hdc, dc, hdc, sc (6)
Work sc down the other side of the chain and sl st to the tip. Embroider a center vein in gold or light brown.
## Stars (make 2)
Gold metallic yarn.
R1: 5 sc in MR (5)
R2: (ch 3, sl st in 2nd ch from hook, sc in next ch, sl st in next MR st) x 5 (5)
FO, leaving a tail to sew to the ear tip.
## Satchel
Chestnut brown yarn, worked in rows.
Row 1: ch 11, sc in 2nd ch from hook and across (10)
Row 2-14: ch 1, turn, sc across (10)
Fold rows 1–5 up to form the pocket and sl st up both sides. Round off the flap corners with a row of sc.
Strap: ch 70 and sl st to the other side of the bag.
Embroider a leaf on the flap and a small gold clasp below it.`,
    assembly: [
      'Sew the head to the body, adding a little extra stuffing in the neck before closing.',
      'Sew the ears to the sides of the head just under where the cap will sit, so they hang straight down past the arms.',
      'Sew the arms on each side of the body, 2 rounds below the neck.',
      'Sew the mushroom cap onto the top of the head so it sits level and covers the ear seams.',
      'Sew the brown leaf to the forehead, just under the cap edge, between the eyes.',
      'Sew a gold star to the tip of each ear.',
      'Put the satchel strap across the body from the left shoulder and tack it in place under the right arm.',
    ],
    tricky: [
      { q: 'Joining the legs', a: 'Make sure both legs face forward before you make the ch 3 join. Count your 30 stitches on round 1 and place a marker before you continue.' },
      { q: 'Embroidered leaf vines', a: 'Embroider the ears and chest before assembly, while the pieces are easy to hold. Keep your stitches loose so the fabric doesn\'t pucker.' },
      { q: 'Cap gills', a: 'Keep your surface slip stitches loose and the lines straight, working from the center out. Pin the underside to the cap before joining so the edges stay even.' },
      { q: 'Tiny gold stars', a: 'Metallic yarn frays easily. Put a small drop of fabric glue on the cut ends, and pull the magic ring tight before working the points.' },
    ],
  },
  {
    id: 'sleepy-honey-bear',
    name: 'Sleepy Honey Bear',
    date: '2026-10-22',
    types: ['bear'],
    categories: ['animals'],
    difficulty: 'easy',
    sizeCm: 14,
    size: '14 cm (5.5 in) tall',
    hook: '3.5 mm (US E/4)',
    yarn: 'Worsted',
    time: '3–4 hours',
    colors: [
      { name: 'Honey brown', hex: '#B98552' }, { name: 'Oatmeal', hex: '#E9D8BC' }, { name: 'Amber', hex: '#D9A441' }, { name: 'Dark brown', hex: '#4A3428' },
    ],
    tags: ['honey', 'sleepy', 'beginner', 'gift', 'baby', 'teddy'],
    blurb: 'A drowsy little teddy hugging his honey pot. Embroidered sleepy eyes make him safe for babies and a great first amigurumi.',
    art: { kind: 'bear', body: '#B98552', belly: '#E9D8BC', sleepy: true, pot: '#D9A441', yarn: '#D9A441', handle: '#8FAE7E', bg: ['#F1E3CC', '#EDE6DA', '#F6E2D8'] },
    photoViews: [0, 1, 2],
    materials: [
      'Worsted yarn in honey brown, about 40 g',
      'Worsted yarn in oatmeal, about 10 g',
      'Worsted yarn in amber, about 10 g',
      'Dark brown yarn for embroidery',
      '3.5 mm crochet hook',
      'Fiberfill stuffing',
      'Stitch marker and tapestry needle',
    ],
    pattern: `## Head
Honey brown yarn.
R1: 6 sc in MR (6)
R2: inc x 6 (12)
R3: (sc, inc) x 6 (18)
R4: (2 sc, inc) x 6 (24)
R5: (3 sc, inc) x 6 (30)
R6: (4 sc, inc) x 6 (36)
R7-12: sc around (36)
R13: (4 sc, dec) x 6 (30)
R14: (3 sc, dec) x 6 (24)
R15: (2 sc, dec) x 6 (18)
Stuff firmly.
R16: (sc, dec) x 6 (12)
R17: dec x 6 (6)
FO and close.
## Ears (make 2)
Honey brown yarn.
R1: 6 sc in MR (6)
R2: inc x 6 (12)
R3-4: sc around (12)
Do not stuff. Flatten and FO, leaving a tail.
## Muzzle
Oatmeal yarn.
R1: 6 sc in MR (6)
R2: inc x 6 (12)
R3: (sc, inc) x 6 (18)
R4: sc around (18)
FO, leaving a tail. Embroider the nose with dark brown before sewing.
## Body
Honey brown yarn.
R1: 6 sc in MR (6)
R2: inc x 6 (12)
R3: (sc, inc) x 6 (18)
R4: (2 sc, inc) x 6 (24)
R5-10: sc around (24)
R11: (2 sc, dec) x 6 (18)
R12: sc around (18)
Stuff and FO with a long tail.
## Arms and legs (make 4)
R1: 6 sc in MR (6)
R2: (sc, inc) x 3 (9)
R3-6: sc around (9)
Stuff lightly, flatten and FO.
## Honey pot
Amber yarn.
R1: 6 sc in MR (6)
R2: inc x 6 (12)
R3: (sc, inc) x 6 (18)
R4: BLO sc around (18)
R5-8: sc around (18)
R9: BLO sl st around (18)
Stuff lightly. Embroider honey drips with oatmeal yarn.`,
    assembly: [
      'Sew the muzzle to the lower half of the face and stuff it lightly before closing.',
      'Embroider sleepy eyes as two small curves, 4 stitches above the muzzle.',
      'Sew the ears to the top of the head between R4 and R6.',
      'Sew the head onto the body.',
      'Attach the legs to the bottom of the body and the arms at the sides.',
      'Sew the honey pot between the arms, then tack the paws onto the pot.',
    ],
    tricky: [
      { q: 'Even sleepy eyes', a: 'Mark both ends of each eye with pins first. Use a long backstitch in a gentle curve and check from the front before tying off.' },
      { q: 'Sewing the head on straight', a: 'Pin the head at four points (front, back, sides) before sewing, and look at the bear from the front once more before you stitch.' },
    ],
  },
  {
    id: 'pumpkin-patch-dragon',
    name: 'Pumpkin Patch Dragon',
    date: '2026-10-05',
    types: ['fantasy'],
    categories: ['fantasy', 'seasonal'],
    difficulty: 'hard',
    sizeCm: 24,
    size: '24 cm (9.5 in) tall',
    hook: '3.0 mm (US C/2–D/3)',
    yarn: 'DK',
    time: '10–12 hours',
    colors: [
      { name: 'Pumpkin orange', hex: '#D98A4E' }, { name: 'Cream', hex: '#F3EBD8' }, { name: 'Sage green', hex: '#8FAE7E' }, { name: 'Chestnut brown', hex: '#8A6243' },
    ],
    tags: ['autumn', 'fall', 'halloween', 'wings', 'tail', 'dragon', 'pumpkin'],
    blurb: 'A friendly autumn dragon with sage-green wings, a striped cream belly and a tiny pumpkin stem on his head. Lots of parts, lots of love.',
    art: { kind: 'dragon', body: '#D98A4E', belly: '#F3EBD8', wing: '#8FAE7E', horn: '#E9D8BC', leafHat: true, yarn: '#D98A4E', handle: '#8A6243', bg: ['#F3E0D2', '#EDE4D3', '#E4ECDF'] },
    photoViews: [0, 1, 2],
    materials: [
      'DK yarn in pumpkin orange, about 80 g',
      'DK yarn in cream, about 20 g',
      'DK yarn in sage green, about 25 g',
      'DK yarn in chestnut brown and oatmeal, scraps',
      '3.0 mm crochet hook',
      '12 mm safety eyes',
      'Fiberfill stuffing',
      'Pipe cleaners (optional, for poseable wings)',
      'Stitch markers, pins and tapestry needle',
    ],
    pattern: `## Head
Pumpkin orange yarn.
R1: 6 sc in MR (6)
R2: inc x 6 (12)
R3: (sc, inc) x 6 (18)
R4: (2 sc, inc) x 6 (24)
R5: (3 sc, inc) x 6 (30)
R6: (4 sc, inc) x 6 (36)
R7: (5 sc, inc) x 6 (42)
R8: (6 sc, inc) x 6 (48)
R9-17: sc around (48)
Place safety eyes between R13 and R14, 9 stitches apart.
R18: (6 sc, dec) x 6 (42)
R19: (5 sc, dec) x 6 (36)
R20: (4 sc, dec) x 6 (30)
R21: (3 sc, dec) x 6 (24)
Stuff firmly.
R22: (2 sc, dec) x 6 (18)
R23: (sc, dec) x 6 (12)
R24: dec x 6 (6)
## Snout
Pumpkin orange yarn.
R1: ch 7, sc in 2nd ch from hook, 4 sc, 3 sc in last ch, 4 sc on the other side, 2 sc in last ch (14)
R2: inc, 4 sc, 3 inc, 4 sc, 2 inc (20)
R3-5: sc around (20)
FO, leaving a tail. Embroider two nostrils.
## Horns (make 2)
Oatmeal yarn.
R1: 4 sc in MR (4)
R2: (sc, inc) x 2 (6)
R3: (2 sc, inc) x 2 (8)
R4-5: sc around (8)
## Body
Pumpkin orange yarn.
R1: 6 sc in MR (6)
R2: inc x 6 (12)
R3: (sc, inc) x 6 (18)
R4: (2 sc, inc) x 6 (24)
R5: (3 sc, inc) x 6 (30)
R6: (4 sc, inc) x 6 (36)
R7-14: sc around (36)
R15: (4 sc, dec) x 6 (30)
R16-17: sc around (30)
R18: (3 sc, dec) x 6 (24)
Stuff firmly and FO with a long tail.
## Belly patch
Cream yarn, worked flat.
R1: 6 sc in MR, do not join (6)
R2: ch 1, turn, inc x 6 (12)
R3: ch 1, turn, (sc, inc) x 6 (18)
R4: ch 1, turn, (2 sc, inc) x 6 (24)
Embroider 3 brown stripes across before sewing on.
## Wings (make 2)
Sage green yarn, worked in rows.
Row 1: ch 3, 2 sc in 2nd ch from hook, sc (3)
Row 2: ch 1, turn, inc, sc, inc (5)
Row 3: ch 1, turn, inc, 3 sc, inc (7)
Row 4: ch 1, turn, inc, 5 sc, inc (9)
Row 5: ch 1, turn, (sl st, ch 2, dc, ch 2, sl st) x 3 to make scallops
Make a second identical layer and sc both layers together, slipping a pipe cleaner between them if you like.
## Tail
Pumpkin orange yarn.
R1: 4 sc in MR (4)
R2: (sc, inc) x 2 (6)
R3: (2 sc, inc) x 2 (8)
R4: (3 sc, inc) x 2 (10)
R5: (4 sc, inc) x 2 (12)
R6: (5 sc, inc) x 2 (14)
R7: (6 sc, inc) x 2 (16)
R8: (7 sc, inc) x 2 (18)
R9-12: sc around (18)
Stuff as you go. FO with a long tail.
## Spikes (make 3)
Sage green yarn.
R1: 3 sc in MR (3)
R2: (sc, inc) x 1, sc (4)
R3: (sc, inc) x 2 (6)
## Arms and legs (make 4)
R1: 6 sc in MR (6)
R2: inc x 6 (12)
R3-4: sc around (12)
R5: (sc, dec) x 4 (8)
R6-8: sc around (8)`,
    assembly: [
      'Stuff and sew the snout to the lower half of the face, just below the eyes.',
      'Sew the horns to the top of the head between R5 and R7, about 12 stitches apart.',
      'Sew the three spikes in a line down the middle of the head, between the horns.',
      'Sew the belly patch to the front of the body.',
      'Attach the head to the body, then the wings to the back, 3 rounds below the neck.',
      'Sew the tail to the lower back so the dragon can lean on it.',
      'Attach arms and legs. Add a little brown stem and leaf to the top of the head.',
    ],
    tricky: [
      { q: 'Starting the oval snout', a: 'Work around both sides of the foundation chain. Put a marker in the first stitch, the 3-sc corners are what make it oval.' },
      { q: 'Scalloped wing edges', a: 'Each scallop is sl st, ch 2, dc, ch 2, sl st in the same stitch. Block the wings flat with a little steam before sewing.' },
      { q: 'Making him stand', a: 'Stuff the legs firmly and sew them a little forward. The tail acts as a third leg, so sew it low and flat against the floor.' },
    ],
  },
  {
    id: 'moon-cat',
    name: 'Moon Cat',
    date: '2026-09-30',
    types: ['cat'],
    categories: ['animals', 'fantasy'],
    difficulty: 'medium',
    sizeCm: 16,
    size: '16 cm (6.3 in) tall',
    hook: '3.0 mm (US C/2–D/3)',
    yarn: 'DK',
    time: '5–6 hours',
    colors: [
      { name: 'Mist grey', hex: '#A9A6A8' }, { name: 'Butter yellow', hex: '#EBCB72' }, { name: 'Blush pink', hex: '#E8B4B4' },
    ],
    tags: ['moon', 'night', 'celestial', 'whiskers', 'tail', 'stars'],
    blurb: 'A soft grey kitty with a crescent moon on her tummy and a little star by her ear. Perfect for bedtime cuddles.',
    art: { kind: 'cat', body: '#A9A6A8', moon: '#EBCB72', star: true, yarn: '#EBCB72', handle: '#A8566A', bg: ['#E6E3EA', '#EFE4D2', '#E4ECDF'] },
    photoViews: [0, 1, 2],
    materials: [
      'DK yarn in mist grey, about 50 g',
      'DK yarn in butter yellow, about 5 g',
      'Blush pink yarn for the nose and inner ears',
      '3.0 mm crochet hook',
      '10 mm safety eyes',
      'Fiberfill stuffing',
      'Black embroidery floss for whiskers',
    ],
    pattern: `## Head
Mist grey yarn.
R1: 6 sc in MR (6)
R2: inc x 6 (12)
R3: (sc, inc) x 6 (18)
R4: (2 sc, inc) x 6 (24)
R5: (3 sc, inc) x 6 (30)
R6: (4 sc, inc) x 6 (36)
R7: (5 sc, inc) x 6 (42)
R8-14: sc around (42)
Place safety eyes between R10 and R11, 8 stitches apart.
R15: (5 sc, dec) x 6 (36)
R16: (4 sc, dec) x 6 (30)
R17: (3 sc, dec) x 6 (24)
R18: (2 sc, dec) x 6 (18)
Stuff firmly.
R19: (sc, dec) x 6 (12)
R20: dec x 6 (6)
## Ears (make 2)
Mist grey yarn.
R1: 4 sc in MR (4)
R2: (sc, inc) x 2 (6)
R3: (sc, inc) x 3 (9)
R4: (2 sc, inc) x 3 (12)
R5: sc around (12)
Flatten and FO. Embroider a pink triangle inside.
## Body
Mist grey yarn.
R1: 6 sc in MR (6)
R2: inc x 6 (12)
R3: (sc, inc) x 6 (18)
R4: (2 sc, inc) x 6 (24)
R5: (3 sc, inc) x 6 (30)
R6-12: sc around (30)
R13: (3 sc, dec) x 6 (24)
R14: (2 sc, dec) x 6 (18)
Stuff and FO with a long tail.
## Tail
Mist grey yarn.
R1: 6 sc in MR (6)
R2-20: sc around (6)
Stuff only the first few rounds. FO.
## Crescent moon
Butter yellow yarn, worked in rows.
Row 1: ch 10, sc in 2nd ch, hdc, 2 dc, hdc, 2 sc, sl st (8)
FO and curl the piece into a crescent while sewing it on.
## Paws (make 4)
R1: 6 sc in MR (6)
R2: (sc, inc) x 3 (9)
R3-5: sc around (9)`,
    assembly: [
      'Sew the ears to the top of the head between R4 and R7.',
      'Embroider a pink nose between the eyes and three whiskers on each side.',
      'Sew the head to the body.',
      'Sew the crescent moon to the tummy and embroider a little yellow star near one ear.',
      'Attach the paws and curl the tail around one side.',
    ],
    tricky: [
      { q: 'Pointy ears', a: 'Starting with 4 sc instead of 6 gives a sharper tip. Pull the magic ring very tight.' },
      { q: 'Whiskers that stay put', a: 'Use one strand of floss and knot it inside the head. A drop of fabric glue on the knot helps.' },
    ],
  },
  {
    id: 'little-frog-prince',
    name: 'Little Frog Prince',
    date: '2026-08-18',
    types: ['frog'],
    categories: ['animals', 'fantasy'],
    difficulty: 'easy',
    sizeCm: 10,
    size: '10 cm (4 in) tall',
    hook: '3.5 mm (US E/4)',
    yarn: 'Worsted',
    time: '2–3 hours',
    colors: [
      { name: 'Moss green', hex: '#7FA36B' }, { name: 'Light sage', hex: '#CFE0BE' }, { name: 'Gold', hex: '#D9B04A' },
    ],
    tags: ['pond', 'crown', 'prince', 'beginner', 'quick', 'fairy tale'],
    blurb: 'A round little frog with a big smile and a golden crown. A quick, beginner-friendly make that works up in an evening.',
    art: { kind: 'frog', body: '#7FA36B', belly: '#CFE0BE', crown: '#D9B04A', yarn: '#7FA36B', handle: '#D9B04A', bg: ['#E4ECDF', '#F1E8D2', '#EFE4D2'] },
    photoViews: [0, 1, 2],
    materials: [
      'Worsted yarn in moss green, about 30 g',
      'Worsted yarn in light sage, about 5 g',
      'Worsted yarn in gold, about 5 g',
      '3.5 mm crochet hook',
      '8 mm safety eyes and white felt',
      'Fiberfill stuffing',
    ],
    pattern: `## Head and body (one piece)
Moss green yarn.
R1: 6 sc in MR (6)
R2: inc x 6 (12)
R3: (sc, inc) x 6 (18)
R4: (2 sc, inc) x 6 (24)
R5: (3 sc, inc) x 6 (30)
R6: (4 sc, inc) x 6 (36)
R7-13: sc around (36)
R14: (4 sc, dec) x 6 (30)
R15: (3 sc, dec) x 6 (24)
Stuff firmly.
R16: (2 sc, dec) x 6 (18)
R17: (sc, dec) x 6 (12)
R18: dec x 6 (6)
## Eye bumps (make 2)
R1: 6 sc in MR (6)
R2: inc x 6 (12)
R3-4: sc around (12)
Push the safety eye through a small white felt circle and then through R3.
## Belly
Light sage yarn.
R1: 6 sc in MR (6)
R2: inc x 6 (12)
R3: (sc, inc) x 6 (18)
## Crown
Gold yarn.
Row 1: ch 13, sl st to the first ch to make a ring (13)
R2: sc around (13)
R3: (sl st, ch 3, sl st in the same st, sl st) x 6 for the points`,
    assembly: [
      'Sew the eye bumps to the top of the head, 2 stitches apart.',
      'Embroider a wide smile across the front with dark brown yarn.',
      'Sew the belly circle to the lower front.',
      'Tack the crown between the eye bumps.',
    ],
    tricky: [
      { q: 'Crown standing up', a: 'Starch the crown lightly or work it with a hook one size smaller so the points stay stiff.' },
    ],
  },
  {
    id: 'strawberry-keychain',
    name: 'Strawberry Keychain',
    date: '2026-07-05',
    types: ['food'],
    categories: ['food', 'small', 'seasonal'],
    difficulty: 'easy',
    sizeCm: 6,
    size: '6 cm (2.4 in) tall',
    hook: '2.5 mm (US B/1–C/2)',
    yarn: 'Fingering',
    time: '1 hour',
    colors: [
      { name: 'Berry red', hex: '#D9634F' }, { name: 'Leaf green', hex: '#5E8A5A' }, { name: 'Seed yellow', hex: '#F2DC8A' },
    ],
    tags: ['keychain', 'fruit', 'summer', 'gift', 'quick', 'market', 'bag charm'],
    blurb: 'A tiny smiling strawberry for your keys or bag. Makes a lovely quick gift and uses up yarn scraps.',
    art: { kind: 'strawberry', body: '#D9634F', leaf: '#5E8A5A', seed: '#F2DC8A', yarn: '#D9634F', handle: '#5E8A5A', bg: ['#F6E2D8', '#E4ECDF', '#F5ECCB'] },
    photoViews: [0, 1, 2],
    materials: [
      'Fingering or sport cotton in berry red, about 5 g',
      'Fingering cotton in leaf green, a scrap',
      'Yellow embroidery floss for the seeds',
      '2.5 mm crochet hook',
      '5 mm safety eyes (or embroider them)',
      'A small amount of stuffing',
      'Keyring with a jump ring',
    ],
    pattern: `## Berry
Berry red yarn.
R1: 6 sc in MR (6)
R2: (sc, inc) x 3 (9)
R3: (2 sc, inc) x 3 (12)
R4: (3 sc, inc) x 3 (15)
R5: (4 sc, inc) x 3 (18)
R6: (5 sc, inc) x 3 (21)
R7-9: sc around (21)
Place eyes between R7 and R8, 4 stitches apart. Embroider seeds.
R10: (5 sc, dec) x 3 (18)
R11: (4 sc, dec) x 3 (15)
Stuff.
R12: (3 sc, dec) x 3 (12)
R13: dec x 6 (6)
## Leaves
Leaf green yarn.
R1: 5 sc in MR (5)
R2: (ch 4, sl st in 2nd ch from hook, sc, hdc, sl st in the next MR st) x 5 for five leaves
## Keychain loop
Leaf green yarn.
Row 1: ch 8, sl st into the first ch to form a loop (8)`,
    assembly: [
      'Sew the leaves to the top of the berry, covering the closing hole.',
      'Sew the chain loop through the center of the leaves.',
      'Open the jump ring, slip it through the loop, and close it onto the keyring.',
    ],
    tricky: [
      { q: 'Tiny stitches', a: 'With fingering yarn and a small hook, a stitch marker in every round helps a lot. Good light helps too!' },
      { q: 'Making it sturdy', a: 'Sew the loop through the leaves and into the berry a few times, so it holds up to daily use on keys.' },
    ],
  },
];
