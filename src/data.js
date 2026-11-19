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
  { id: 'wearables', name: 'Clothing & wearables', color: '#E6E7EC', ink: '#4B4D5C', icon: 'leaf' },
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
    id: 'crossover-wrap-vest',
    name: 'Crossover Wrap Vest',
    kind: 'clothing',
    date: '2026-11-19',
    types: [],
    categories: ['wearables'],
    difficulty: 'medium',
    sizes: [
      { id: 'S', label: 'S', fits: 'Bust 81–86 cm (32–34 in)', chest: 'Finished chest 84 cm (33 in)' },
      { id: 'M', label: 'M', fits: 'Bust 89–97 cm (35–38 in)', chest: 'Finished chest 94 cm (37 in)' },
      { id: 'L', label: 'L', fits: 'Bust 99–107 cm (39–42 in)', chest: 'Finished chest 104 cm (41 in)' },
    ],
    defaultSize: 1,
    sizeNote: 'Length from shoulder to hem is about 37 cm (14.5 in) in all sizes. The fit is close, with about 0–3 cm of ease.',
    hook: '4 mm (US G-6)',
    yarn: 'DK',
    time: '15–20 hours',
    gauge: '18 hdc3 × 14 rows = 10 cm in the body stitch; 20 sts × 18 rows = 10 cm in griddle stitch (sc, dc)',
    colors: [{ name: 'Charcoal heather', hex: '#4B4D5C' }],
    tags: ['vest', 'wrap vest', 'crossover top', 'cropped vest', 'griddle stitch', 'knit look', 'sleeveless top', 'layering'],
    blurb: 'A cropped, cosy vest whose two front panels cross over the chest and wrap around to button at the back. Textured bands frame the smooth, knit-look body and rise into a little stand-up collar.',
    credit: 'Inspired by a knitted crossover wrap vest by Robin Reich. This crochet version is a new pattern.',
    creditUrl: 'https://thetwistedyarn.com',
    untested: 'New pattern: it hasn\'t been test-made yet. Please check your gauge before you start.',
    photos: [
      { src: '@img/crossover-wrap-vest-1.jpg', alt: 'Front of the original knitted crossover wrap vest in charcoal on a dress form, with the stand-up collar and crossed front bands', caption: 'Original knitted design and photo by Robin Reich (thetwistedyarn.com), used with permission' },
      { src: '@img/crossover-wrap-vest-2.jpg', alt: 'Side view of the original knitted vest showing the textured bands crossing over the chest', caption: 'Original knitted design and photo by Robin Reich (thetwistedyarn.com), used with permission' },
      { src: '@img/crossover-wrap-vest-3.jpg', alt: 'Back of the original knitted vest with the waist strap fastened by two wooden buttons', caption: 'Original knitted design and photo by Robin Reich (thetwistedyarn.com), used with permission' },
    ],
    art: { kind: 'vest', body: '#4B4D5C' },
    abbr: [
      ['ch', 'chain'], ['sc', 'single crochet'], ['hdc', 'half double crochet'], ['dc', 'double crochet'],
      ['hdc3', 'hdc worked in the 3rd loop (the horizontal bar just below the top V, on the side facing away from you)'],
      ['hdc2tog', 'half double crochet 2 together, worked through the 3rd loops'],
      ['sl st', 'slip stitch'], ['sk', 'skip'], ['st(s)', 'stitch(es)'], ['sp', 'space'], ['R', 'round'],
    ],
    materials: [
      'DK wool or wool-alpaca blend in Charcoal heather, about 275 (325, 375) g / 620 (730, 845) m',
      '4 mm (US G-6) crochet hook',
      '2 wooden buttons, 18 mm',
      'Tapestry needle',
      'Stitch markers',
      'Rust-proof pins and a blocking mat or towel',
    ],
    pattern: `## Back
Charcoal heather.
Row 1: ch 78 (86, 96), hdc in 3rd ch from hook and in each ch across (76, 84, 94)
Row 2-15: ch 1, turn, hdc3 across (76, 84, 94)
Armhole shaping starts here.
Row 16: turn, sl st in first 3 sts, ch 1, hdc3 in next st and in each st across to last 3 sts, leave the last 3 sts unworked (70, 78, 88)
Row 17: ch 1, turn, hdc2tog, hdc3 across to last 2 sts, hdc2tog (68, 76, 86)
Row 18: ch 1, turn, hdc2tog, hdc3 across to last 2 sts, hdc2tog (66, 74, 84)
Row 19-44: ch 1, turn, hdc3 across (66, 74, 84)
Fasten off. Place markers 19 (22, 26) sts in from each end of Row 44. These outer sts are the shoulders, and the 28 (30, 32) sts in the middle are the back neck.
## Right front
Charcoal heather.
This is the under panel. Row 1 ends at the front edge, so the odd rows end at the front edge and the even rows begin at it.
Row 1: ch 69 (72, 76), hdc in 3rd ch from hook and in each ch across (67, 70, 74)
Row 2: ch 1, turn, hdc2tog, hdc3 across (66, 69, 73)
Row 3: ch 1, turn, hdc3 across to last 2 sts, hdc2tog (65, 68, 72)
Row 4-15: repeat Row 2 and Row 3 in turn, 6 times each (53, 56, 60)
Armhole shaping starts here, at the side edge.
Row 16: ch 1, turn, hdc2tog, hdc3 across to last 3 sts, leave the last 3 sts unworked (49, 52, 56)
Row 17: ch 1, turn, hdc2tog, hdc3 across to last 2 sts, hdc2tog (47, 50, 54)
Row 18: ch 1, turn, hdc2tog, hdc3 across to last 2 sts, hdc2tog (45, 48, 52)
Row 19-44: repeat Row 3 and Row 2 in turn, 13 times each (19, 22, 26)
Fasten off. The last row is the shoulder.
## Left front
Charcoal heather.
This is the over panel. Row 1 ends at the side edge, so the odd rows begin at the front edge and the even rows end at it.
Row 1: ch 69 (72, 76), hdc in 3rd ch from hook and in each ch across (67, 70, 74)
Row 2: ch 1, turn, hdc3 across to last 2 sts, hdc2tog (66, 69, 73)
Row 3: ch 1, turn, hdc2tog, hdc3 across (65, 68, 72)
Row 4-15: repeat Row 2 and Row 3 in turn, 6 times each (53, 56, 60)
Armhole shaping starts here, at the side edge.
Row 16: turn, sl st in first 3 sts, ch 1, hdc3 in next st and in each st across to last 2 sts, hdc2tog (49, 52, 56)
Row 17: ch 1, turn, hdc2tog, hdc3 across to last 2 sts, hdc2tog (47, 50, 54)
Row 18: ch 1, turn, hdc2tog, hdc3 across to last 2 sts, hdc2tog (45, 48, 52)
Row 19-44: repeat Row 3 and Row 2 in turn, 13 times each (19, 22, 26)
Fasten off. The last row is the shoulder.
## Hem band (make 2)
Charcoal heather.
One band goes on the back hem. The other goes on the Right Front hem and reaches across to the left side seam.
Row 1: ch 13, sc in 2nd ch from hook, dc in next ch, [sc, dc] x5 (12)
Row 2-76 (2-84, 2-94): ch 1, turn, [sc, dc] x6 (12)
Fasten off, leaving a long tail for sewing.
## Waist strap
Charcoal heather.
This strap is sewn to the Left Front hem, then wraps around the right side and buttons at the back. Start at the buttonhole end.
Row 1: ch 13, sc in 2nd ch from hook, dc in next ch, [sc, dc] x5 (12)
Row 2-3: ch 1, turn, [sc, dc] x6 (12)
Row 4: ch 1, turn, sc, dc, ch 2, sk 2 sts, [sc, dc] x2, ch 2, sk 2 sts, sc, dc (12)
Row 5: ch 1, turn, [sc, dc] x6, working 1 st in each st and in each ch (12)
Row 6-124 (6-136, 6-150): ch 1, turn, [sc, dc] x6 (12)
Fasten off, leaving a long tail for sewing.
## Front band and collar
Charcoal heather.
Row 1: ch 11, sc in 2nd ch from hook, dc in next ch, [sc, dc] x4 (10)
Row 2-168 (2-170, 2-172): ch 1, turn, [sc, dc] x5 (10)
Fasten off, leaving a long tail for sewing. Place a marker on Row 84 (85, 86). This is the center back of the collar.
## Armhole edging (make 2)
Charcoal heather.
Work these after the vest is sewn together. Join the yarn at the underarm side seam.
R1: ch 1, sc evenly around the armhole, 45 sts along each piece (3 sc along the 3 skipped sts, 1 sc in each row end of Rows 16-18, then 3 sc in every 2 row ends up to the shoulder), sl st to first sc (90)
R2: ch 1, [sc, dc] x45, sl st to first sc (90)
R3: ch 1, [dc, sc] x45, sl st to first dc (90)
R4: ch 1, [sc, dc] x45, sl st to first sc (90)
Fasten off and weave in the ends.`,
    assembly: [
      'Weave in all ends except the sewing tails. Pin each piece to its measurements, mist with water and let it dry. The back should measure 42 (47, 52) cm wide and 31 cm tall.',
      'Sew the shoulders: lay the last row of each front on the matching shoulder sts of the back (19 (22, 26) sts) and whipstitch. Leave the middle 28 (30, 32) back sts open as the back neck.',
      'Sew one Hem band along the foundation edge of the back, 1 band row to 1 back st, so the band runs from side edge to side edge.',
      'Sew the second Hem band along the foundation edge of the Right Front, starting at the side edge, 1 band row to 1 st. The last 9 (14, 20) band rows extend past the front tip.',
      'Sew the last 67 (70, 74) rows of the Waist strap along the foundation edge of the Left Front, 1 strap row to 1 st. The non-buttonhole end of the strap should line up with the side edge, and the buttonhole end stays free past the front tip.',
      'Sew the right side seam: the back and its hem band to the Right Front and its hem band.',
      'Lay the Right Front flat, then cross the Left Front over it. Bring the free end of the Right Front hem band across to the left side, under the Left Front. Sew the left side seam through all layers: the back and its hem band, the Left Front and the strap end, and the end of the Right Front hem band tucked between them.',
      'Pin the Front band and collar along the neckline. Match its center marker to the center of the back neck, then pin evenly down the diagonal edge of each front to the top of the hem band or strap. Sew in place along one long edge, then tack each short end to the top of the band below it.',
      'Work the Armhole edging around each armhole.',
      'Try the vest on and wrap the strap around your right side and across your back. Mark the buttonhole positions on the back hem band, about 3.5 cm to the left of center (as worn), and sew on the 2 buttons.',
      'Weave in all remaining ends and lightly steam the seams flat.',
    ],
    tricky: [
      { q: 'Check your gauge first', a: 'Crochet a swatch before you start: 18 hdc3 × 14 rows should measure 10 cm. If you have more stitches than the gauge, go up a hook size; if you have fewer, go down.' },
      { q: 'Finding the 3rd loop', a: 'Turn your work so you can see the back of the row. Below the top V of each hdc there is a horizontal bar, and that bar is the 3rd loop. Working into it pushes the V forward and gives the knit-look ridges. Always work into the same side so every row looks alike.' },
      { q: 'Hdc2tog in the 3rd loop', a: 'Yarn over, insert the hook in the 3rd loop of the next st and pull up a loop. Yarn over, insert in the 3rd loop of the following st and pull up a loop. Yarn over and pull through all 5 loops. Count your sts after each decrease row.' },
      { q: 'Keeping the diagonal on the right edge', a: 'Put a marker on the front edge after Row 1 and move it up every few rows. Every row has one decrease at the marked edge. If a row\'s decrease lands at the side edge instead, rip back that row.' },
      { q: 'Left and Right Fronts are mirror images', a: 'They are written separately on purpose. Do not make two of the same front, or the ridged side will face inward on one of them. Hold the finished fronts side by side before sewing: the diagonals should slant toward each other.' },
      { q: 'Griddle stitch rhythm', a: 'The bands alternate sc and dc. Because each row has an even number of sts, every sc lands on a dc and every dc lands on an sc without any extra counting, which builds the seed-stitch bumps. If two sc end up stacked, you missed a st.' },
      { q: 'Sewing the band to the diagonal', a: 'The diagonal edge is a mix of row ends and decreases, so it stretches. Pin the band at the center back, both shoulders and both lower ends first, then fill in the pins evenly between them before sewing. The band should lie flat without rippling.' },
      { q: 'Making the collar stand up', a: 'Sew the band with small, firm stitches along the back neck and do not stretch it there. The extra band length at the back neck makes it rise into a little stand collar.' },
      { q: 'Making it longer', a: 'Add rows to Rows 2–15 of the back and both fronts, and add the same number of rows to the Front band and collar for every 2 rows you add.' },
      { q: 'Choosing yarn', a: 'Choose a soft yarn with a little halo, such as wool-alpaca, to get the same heathered look.' },
    ],
  },
  {
    id: 'pink-sitting-dragon',
    name: 'Pink Sitting Dragon',
    date: '2026-11-19',
    types: ['fantasy'],
    categories: ['fantasy'],
    difficulty: 'hard',
    sizeCm: 15,
    size: 'about 15 cm (6 in) sitting',
    hook: '3.0 mm',
    yarn: 'DK',
    time: '8–10 hours',
    colors: [
      { name: 'Pink', hex: '#E79AB5' }, { name: 'Cream', hex: '#F4EADB' }, { name: 'Yellow', hex: '#E8B53A' },
    ],
    tags: ['dragon', 'pink', 'wings', 'tail', 'spikes', 'tapestry crochet', 'sitting'],
    blurb: 'A sweet pink dragon sitting on its haunches, with cream horns and spikes, striped pink-and-cream wings, golden almond eyes and a curled tail.',
    photos: [
      { src: '@img/pink-sitting-dragon-1.jpg', alt: 'Pink Sitting Dragon amigurumi held in a hand: a pink crochet dragon with cream horns, striped pink and cream wings, yellow eyes and a curled tail' },
      { src: '@img/pink-sitting-dragon-2.jpg', alt: 'Close-up of the dragon head with cream horns, embroidered yellow almond eyes and a small cream spike on the forehead' },
      { src: '@img/pink-sitting-dragon-3.jpg', alt: 'Close-up of a wing with pink ribs and cream panels, and the round back thigh with toes' },
    ],
    materials: [
      'DK or light worsted yarn in pink, about 120 m',
      'DK or light worsted yarn in cream, about 35 m',
      'Yellow yarn, a little for the eyes',
      '3 mm crochet hook',
      'Fiberfill stuffing',
      '1 pipe cleaner for the tail',
      'Tapestry needle',
    ],
    pattern: `## Head
Pink.
R1: 6 sc in MR (6)
R2: inc around (12)
R3: [sc, inc] x6 (18)
R4: [sc 2, inc] x6 (24)
R5: [sc 3, inc] x6 (30)
R6: [sc 4, inc] x6 (36)
R7-13: sc around (36)
R14: [sc 4, dec] x6 (30)
R15: [sc 3, dec] x6 (24)
R16: [sc 2, dec] x6 (18)
Start stuffing firmly.
R17: [sc, dec] x6 (12)
R18: dec x6 (6)
Close the hole and leave a tail to sew.
## Snout
Pink.
R1: 6 sc in MR (6)
R2: [sc, inc] x3 (9)
R3: [sc 2, inc] x3 (12)
R4: [sc 3, inc] x3 (15)
R5-6: sc around (15)
Fasten off with a long tail. Sew to the lower front of the head between R9 and R15, stuffing as you go.
Eyes: with yellow, embroider slanted almond eyes just above the snout sides, 6-7 stitches apart. Add 2 small pink stitches for nostrils.
## Horn (make 2)
Cream.
R1: 4 sc in MR (4)
R2: [sc, inc] x2 (6)
R3: [sc 2, inc] x2 (8)
R4: sc around (8)
Fasten off. Do not stuff, or stuff lightly. Sew on top of the head at R5-7, angled slightly back.
## Body and neck
Pink. Start at the bottom.
R1: 6 sc in MR (6)
R2: inc around (12)
R3: [sc, inc] x6 (18)
R4: [sc 2, inc] x6 (24)
R5: [sc 3, inc] x6 (30)
R6: [sc 4, inc] x6 (36)
R7: [sc 5, inc] x6 (42)
R8-15: sc around (42)
R16: [sc 5, dec] x6 (36)
R17-19: sc around (36)
R20: [sc 4, dec] x6 (30)
R21-22: sc around (30)
R23: [sc 3, dec] x6 (24)
R24-25: sc around (24)
Stuff the body firmly and keep the bottom flat so it sits.
R26: [sc 2, dec] x6 (18)
R27-34: sc around (18)
Stuff the neck firmly. Fasten off with a long tail and sew the head on, tilted slightly down and to one side.
## Back leg (make 2)
Pink. This is the big round thigh.
R1: 6 sc in MR (6)
R2: inc around (12)
R3: [sc, inc] x6 (18)
R4: [sc 2, inc] x6 (24)
R5-9: sc around (24)
R10: [sc 2, dec] x6 (18)
R11: [sc, dec] x6 (12)
Stuff lightly.
R12: dec x6 (6)
Close the hole. Flatten a little and sew to the lower sides of the body (R4-12) so the knees point forward.
## Back foot (make 2)
Pink.
R1: 6 sc in MR (6)
R2: [sc, inc] x3 (9)
R3-6: sc around (9)
Stuff lightly, flatten, and sew under the front of each thigh, pointing forward.
## Front leg (make 2)
Pink.
R1: 6 sc in MR (6)
R2: [sc, inc] x3 (9)
R3-4: sc around (9)
R5: [sc, dec] x3 (6)
R6-10: sc around (6)
Stuff only the paw. Sew the open end to the chest at about R17-19, with the paws resting on the thighs.
## Toe (make 12)
Pink.
R1: 4 sc in MR (4)
R2: sc around (4)
Fasten off. Sew 3 toes on the front of each back foot and 3 on each front paw.
## Tail
Pink. Start at the tip.
R1: 4 sc in MR (4)
R2: sc around (4)
R3: [sc, inc] x2 (6)
R4-7: sc around (6)
R8: [sc 2, inc] x2 (8)
R9-12: sc around (8)
R13: [sc 3, inc] x2 (10)
R14-17: sc around (10)
R18: [sc 4, inc] x2 (12)
R19-22: sc around (12)
Fold the end of a pipe cleaner over so it can't poke out. Put it inside and stuff lightly around it. Sew the tail to the lower back, then curl it around to the front beside a back leg.
## Spike (make 9)
Cream.
R1: 4 sc in MR (4)
R2: [sc, inc] x2 (6)
Fasten off. Do not stuff. Sew 7 down the middle of the back of the head, neck and back. Sew 1 near the tail tip and 1 small one on the forehead.
## Wing (make 2)
Worked flat in rows. P = pink, C = cream. In rows 3-12, carry the unused color inside the stitches (tapestry crochet) so the pink ribs stay straight.
Row 1: ch 20 in pink, sc in 2nd ch from hook and across (19)
Row 2: ch 1, turn, sc across (19)
Row 3-12: ch 1, turn, sc 1 P, sc 5 C, sc 1 P, sc 5 C, sc 1 P, sc 5 C, sc 1 P (19)
Row 13: points. Ch 1, turn. With pink, sl st 1. Then repeat 3 times: [with cream, sl st 1, hdc 1, (dc, ch 2, dc) in next st, hdc 1, sl st 1; with pink, sl st 1]. You now have 3 points.
Fasten off and weave in the ends.
Pinch the short pink edge of Row 1-2 nearest the body into a narrow base. Sew it to the upper back (around R20-24), with the pink arm edge on top and the points facing down and out.`,
    assembly: [
      'Sew the snout to the lower front of the head between R9 and R15, stuffing as you go. Embroider the yellow almond eyes and the 2 pink nostril stitches.',
      'Sew the horns on top of the head at R5–R7, angled slightly back.',
      'Sew the head onto the neck, tilted slightly down and to one side.',
      'Sew the back legs to the lower sides of the body (R4–R12) so the knees point forward, then sew a back foot under the front of each thigh.',
      'Sew the front legs to the chest at about R17–R19, with the paws resting on the thighs.',
      'Sew 3 toes on the front of each back foot and 3 on each front paw.',
      'Sew the tail to the lower back and curl it around to the front beside a back leg.',
      'Sew 7 spikes down the middle of the head, neck and back, 1 near the tail tip and 1 small one on the forehead.',
      'Sew the wings to the upper back (around R20–R24), pink arm edge on top and points facing down and out.',
    ],
    tricky: [
      { q: 'Straight wing ribs (tapestry crochet)', a: 'In rows 3–12, carry the color you are not using inside your stitches. That keeps the pink ribs in straight lines and hides the floats.' },
      { q: 'Making it sit', a: 'Stuff the body firmly but keep the bottom flat, so the dragon sits steadily on its own.' },
      { q: 'Pipe cleaner in the tail', a: 'Fold the end of the pipe cleaner over before you put it in, so it can\'t poke through the stitches. Stuff lightly around it so the tail can still curl.' },
      { q: 'Almond eyes', a: 'Embroider the eyes slanted, just above the sides of the snout and 6–7 stitches apart. Mark both ends with pins first so they match.' },
    ],
  },
  {
    id: 'mushroom-bunny',
    name: 'Mushroom Bunny',
    date: '2026-11-10',
    types: ['bunny', 'mushroom'],
    categories: ['animals', 'plants'],
    difficulty: 'medium',
    sizeCm: 18,
    size: 'about 18 cm (7 in) tall without the cap',
    hook: '3.5 mm (US E/4)',
    yarn: 'DK',
    time: '8–10 hours',
    colors: [
      { name: 'Cream', hex: '#F1E9D8' }, { name: 'Sage green', hex: '#8DA47A' }, { name: 'Brown', hex: '#7E4E2C' },
      { name: 'Dark green', hex: '#4F7044' }, { name: 'Light green', hex: '#9DBB83' }, { name: 'Light tan', hex: '#CDB08A' },
    ],
    tags: ['mushroom', 'cottagecore', 'forest', 'bag', 'embroidery', 'lop ears', 'leaves', 'ruffle'],
    blurb: 'A cream bunny with a green mushroom cap and a wavy cream ruffle underneath, long ears with leaf embroidery, a little round tail, a forehead leaf and a brown cross-body bag.',
    photos: [
      { src: '@img/mushroom-bunny-1.jpg', alt: 'Mushroom Bunny amigurumi: a cream crochet bunny with a sage-green mushroom cap, leaf-embroidered long ears and a brown cross-body bag' },
      { src: '@img/mushroom-bunny-2.jpg', alt: 'Close-up of the Mushroom Bunny face, showing the cream ruffle under the cap and the small brown leaf on the forehead' },
      { src: '@img/mushroom-bunny-3.jpg', alt: 'Close-up of the body with green leaf embroidery and the brown bag' },
    ],
    art: { kind: 'bunny', body: '#F3EBD8', ear: '#EFE4CF', cap: '#8FAE7E', spots: '#F7F0E0', leaves: '#5E8A5A', bag: '#8A6243' },
    materials: [
      'DK cotton yarn in cream (main color), about 100 g',
      'DK cotton yarn in sage green (cap), about 25 g',
      'DK cotton yarn in brown (bag and forehead leaf), about 15 g',
      'Dark green and light green yarn, small amounts for the leaf embroidery',
      'Light tan yarn, a small amount for the bag embroidery',
      '3.5 mm crochet hook',
      '10 mm black safety eyes (1 pair)',
      'Fiberfill stuffing',
      'Tapestry needle, stitch marker, pins and scissors',
    ],
    pattern: `## Head
Cream yarn. Work in a spiral and don't join rounds. Move your stitch marker up every round.
R1: 6 sc in MR (6)
R2: inc x6 (12)
R3: (sc, inc) x6 (18)
R4: (2 sc, inc) x6 (24)
R5: (3 sc, inc) x6 (30)
R6: (4 sc, inc) x6 (36)
R7: (5 sc, inc) x6 (42)
R8-17: sc around (42)
Eyes now: put the safety eyes between R12 and R13, 7 stitches apart. Snap the backs on firmly.
R18: (5 sc, dec) x6 (36)
R19: (4 sc, dec) x6 (30)
R20: (3 sc, dec) x6 (24)
R21: (2 sc, dec) x6 (18)
Stuff the head firmly.
R22: (sc, dec) x6 (12)
R23: dec x6 (6)
Fasten off, close the hole and weave in the end.
## Legs (make 2)
Cream yarn. The body starts at the legs: both legs are joined together, then you crochet the body up from there.
R1: 6 sc in MR (6)
R2: inc x6 (12)
R3: (sc, inc) x6 (18)
R4: BLO sc around, this makes a flat foot (18)
R5-8: sc around (18)
Leg 1: fasten off. Leg 2: don't cut the yarn.
## Body
Cream yarn, continuing from leg 2.
R1: from leg 2, ch 2 and attach to any stitch on leg 1. Sc 18 around leg 1, sc 2 along the chain, sc 18 around leg 2, sc 2 along the other side of the chain (40)
Put your marker here: this is the new start of the round.
R2-7: sc around (40)
R8: (8 sc, dec) x4 (36)
R9-10: sc around (36)
R11: (4 sc, dec) x6 (30)
R12-13: sc around (30)
R14: (3 sc, dec) x6 (24)
R15: sc around (24)
R16: (2 sc, dec) x6 (18)
Stuff the legs and body firmly. Fasten off and leave a long tail for sewing on the head.
## Arms (make 2)
Cream yarn.
R1: 6 sc in MR (6)
R2: (sc, inc) x3 (9)
R3: (2 sc, inc) x3 (12)
R4-10: sc around (12)
Stuff only the bottom half lightly.
R11: flatten the opening and sc 6 through both layers to close it (6)
Fasten off and leave a tail for sewing.
## Ears (make 2)
Cream yarn. The ears start at the bottom tip and are wider at the bottom, like in the photo.
R1: 6 sc in MR (6)
R2: (sc, inc) x3 (9)
R3: (2 sc, inc) x3 (12)
R4: (3 sc, inc) x3 (15)
R5-18: sc around (15)
R19: (3 sc, dec) x3 (12)
R20-26: sc around (12)
Don't stuff. Flatten the ear, then sc 6 through both layers to close the top.
Fasten off and leave a tail for sewing.
## Tail
Cream yarn.
R1: 6 sc in MR (6)
R2: inc x6 (12)
R3-4: sc around (12)
Stuff a little.
R5: dec x6 (6)
Fasten off and leave a tail for sewing.
## Mushroom cap
Green dome, in sage green.
R1: 6 sc in MR (6)
R2: inc x6 (12)
R3: (sc, inc) x6 (18)
R4: (2 sc, inc) x6 (24)
R5: (3 sc, inc) x6 (30)
R6: (4 sc, inc) x6 (36)
R7: (5 sc, inc) x6 (42)
R8: (6 sc, inc) x6 (48)
R9: (7 sc, inc) x6 (54)
R10: (8 sc, inc) x6 (60)
R11: sc around (60)
R12: (9 sc, inc) x6 (66)
R13: sc around (66)
R14: (10 sc, inc) x6 (72)
R15-17: sc around (72)
Cream underside: change to cream.
R18: BLO sc around, this makes a neat folded edge (72)
R19: (10 sc, dec) x6 (66)
R20: (9 sc, dec) x6 (60)
R21: (8 sc, dec) x6 (54)
R22: (7 sc, dec) x6 (48)
R23: (6 sc, dec) x6 (42)
Fasten off and leave a long tail. The hole in the middle is where the head goes.
## Wavy ruffle
Cream yarn, a separate piece worked in rows.
Row 1: ch 73. Sc in the 2nd ch from the hook and in each ch across (72)
Row 2: ch 2 (doesn't count as a stitch), 2 hdc in each stitch across (144)
Fasten off. Sew the two short ends together to make a ring.
Sew the straight edge (row 1) around the cap underside on R19, so that the wavy edge peeks out just below the green rim.
## Forehead leaf
Brown yarn.
Row 1: ch 6. Starting in the 2nd ch from the hook: sl st, sc, hdc, dc. In the last ch: hdc, ch 2, sl st in the 2nd ch from the hook for the pointy tip, hdc. Along the other side of the chain: dc, hdc, sc, sl st.
Fasten off. Stitch a vein down the middle with dark brown or tan yarn.
## Bag pouch
Brown yarn.
R1: ch 9. Sc in the 2nd ch from the hook, sc 6, 3 sc in the last ch. Turn and work along the other side of the chain: sc 6, 2 sc in the first ch (18)
R2-7: sc around (18)
Fasten off. Don't stuff. Flatten it into a little pouch.
## Bag flap and strap
Brown yarn.
Row 1: ch 8. Sc in the 2nd ch from the hook and across (7)
Row 2-5: ch 1, turn, sc across (7)
Row 6: ch 1, turn, dec, 3 sc, dec (5)
Row 7: ch 1, turn, dec, sc, dec (3)
Sc around the whole flap edge for a neat finish. Fasten off.
Sew the straight top of the flap to the back top edge of the pouch, then fold it over the front.
Strap: ch about 60, then sl st into the back bump of each chain back down. Sew one end to each side of the pouch.
Embroidery: with light tan yarn, stitch a few leaf-vein lines on the flap and a small sprout shape on the front of the pouch.
## Leaf embroidery
Use dark green for the stems and leaves and light green for the leaf centers. Split the yarn into 2 thinner strands if it looks too bulky.
Stems: back stitch or stem stitch in a gentle curve.
Leaves: a lazy daisy stitch, or 3 to 4 satin stitches side by side in a leaf shape. Add one light green straight stitch in the middle as a vein.
Ears (before sewing them on): one vine down the front of each ear, with 5 leaves alternating left and right.
Body (before attaching the arms and bag): one vine from one shoulder down across the belly to the opposite hip, with about 8 leaves. Run it the opposite way to the bag strap so that both show.`,
    assembly: [
      'Embroider the leaf vines on both ears and the body first. This is much easier while the pieces are loose.',
      'Head to body: pin the head onto the open neck of the body (R16). Make sure the eyes face forward, then sew all the way around. Add a little more stuffing in the neck before closing it up, so the head doesn\'t wobble.',
      'Ears: sew the flat top of each ear to the side of the head at R9–R10, right where the cap rim will cover the seam. Let them hang down beside the body.',
      'Cap: pull the cap over the top of the head so it covers down to about R8–R9 and the ear tops. Push a little stuffing into the brim so it stays puffy. Pin it level, then sew around the cream opening.',
      'Forehead leaf: sew it in the center of the forehead, just below the ruffle and above the eyes, pointing up.',
      'Arms: sew them to the sides of the body at R14–R15, angled slightly forward.',
      'Tail: sew it to the center back at about body R4–R5.',
      'Bag: place the strap over one shoulder so the bag rests on the opposite hip. Add a stitch at the shoulder so it stays in place.',
    ],
    tricky: [
      { q: 'Magic ring', a: 'Wrap the yarn around 2 fingers, insert the hook, pull up a loop, ch 1, then work the sc into the ring. Pull the tail to close it tight.' },
      { q: 'Invisible decrease', a: 'Insert the hook into the front loop of the next stitch and the front loop of the one after it (3 loops on the hook), yarn over and pull through 2 loops, then yarn over and pull through both. It\'s much neater than a normal sc2tog.' },
      { q: 'Joining the legs', a: 'Count your stitches carefully. You should have exactly 40 after body R1. If there\'s a small hole between the legs, close it with your yarn tail.' },
      { q: 'BLO rounds (foot sole, cap edge)', a: 'Only crochet into the back loop. The unused front loops make a ridge, and that ridge is what gives the sharp edge.' },
      { q: 'Safety eyes', a: 'Always put them in before you close the head. Check where they sit from the front before snapping on the backs, because they\'re very hard to remove afterwards.' },
      { q: 'Lining up the cap', a: 'Use 4 pins at the front, back and both sides first, then sew. That keeps the cap from sitting crooked.' },
      { q: 'Lazy daisy leaf', a: 'Come up at the base of the leaf, go back down into the same hole and leave a loop. Come up at the leaf tip inside the loop, then go down just outside it to hold the loop in place.' },
      { q: 'Color change', a: 'On the last stitch before the new color, pull the new color through the final 2 loops.' },
      { q: 'Hook size', a: '3.5 mm is a little big for amigurumi with DK yarn. Crochet tightly so the stuffing doesn\'t show. If you still see gaps, go down to a 3 mm hook.' },
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
