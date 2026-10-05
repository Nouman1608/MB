---
resourceId: "mb-ap-bio-2.2-study-guide"
title: "Cell Size: Study Guide (Biology 2.2)"
description: "Learn why surface area-to-volume ratio limits cell size, how to calculate it for cubes, spheres, cylinders and boxes, and how folds, shape and body size affect exchange and heat loss."
course: "biology"
unit: 2
topics: ["2.2"]
resourceType: "study-guide"
prerequisites:
  - "Subcellular structures, including the plasma membrane and folded mitochondrial membranes (Topic 2.1)"
  - "Area and volume formulas for simple shapes; working with powers"
prerequisiteResources: ["mb-ap-bio-2.1-study-guide"]
learningObjectives:
  - "Calculate surface area, volume and surface area-to-volume ratio for cubes, spheres, rectangular solids and cylinders"
  - "Explain why a cell's exchange with its surroundings depends on surface area but its needs depend on volume"
  - "Explain how small size, flattened or long shapes and membrane folds such as microvilli raise the ratio"
  - "Relate body size to the rate of heat exchange and to metabolic rate per unit body mass"
  - "Use a supply-and-demand model to find the largest size a cell can reach"
skills: ["2", "5", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Use the π key, not 3.14. Keep full calculator values until the last step. Ratios have units of µm⁻¹ when lengths are in µm"
related: ["mb-ap-bio-2.2-revision-notes", "mb-ap-bio-2.2-practice", "mb-ap-bio-2.2-checklist"]
next: "mb-ap-bio-2.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Materials enter and leave a cell through its surface, but every part of its volume uses them. So the surface area-to-volume ratio (SA/V) controls how well a cell can keep up."
  - "As a cell grows, volume rises faster than surface area, so SA/V falls. For a cube SA/V = 6/s; for a sphere SA/V = 3/r."
  - "Cells stay small, take flat or long shapes, or fold their membranes (microvilli, root hairs, cristae) to keep exchange fast enough."
  - "Larger organisms have a lower SA/V, so they exchange heat with the environment more slowly in proportion to their mass. Smaller organisms usually have a higher metabolic rate per unit body mass."
faqs:
  - question: "Do I need to memorise the area and volume formulas?"
    answer: "The course provides the formulas for spheres, cubes, rectangular solids and cylinders on its equation sheet. You still need to know which one to use, how to substitute and how to interpret the answer."
  - question: "Does a bigger cell have less surface area?"
    answer: "No. A bigger cell has more surface area in total. It has less surface area for each unit of volume, which is what matters for keeping up with its needs."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Why can't a cell just keep growing?

A cell takes in oxygen, glucose and ions, and gets rid of carbon dioxide, waste and heat. All of this crosses the **plasma membrane**, the cell's surface. But every part of the cell's **volume** uses resources and produces waste. So two quantities compete:

- **Supply** depends on **surface area (SA)**: more membrane, more exchange.
- **Demand** depends on **volume (V)**: more cytoplasm, more needs.

The **surface area-to-volume ratio (SA/V)** compares them. A high SA/V means plenty of surface for each unit of volume, so exchange keeps up easily. A low SA/V means each patch of membrane has to serve a lot of cytoplasm. As a cell grows, its volume rises faster than its surface area, so SA/V falls and, at some point, the surface can no longer keep up. This is the main reason cells are small.

## Surface area and volume formulas

These are the shapes you will use to model cells and organisms (r = radius, s = side, l = length, w = width, h = height):

| Shape | Surface area | Volume | SA/V simplified |
|---|---|---|---|
| Cube | SA = 6s² | V = s³ | 6/s |
| Sphere | SA = 4πr² | V = (4/3)πr³ | 3/r |
| Rectangular solid (box) | SA = 2lh + 2lw + 2wh | V = lwh | work it out each time |
| Cylinder | SA = 2πrh + 2πr² | V = πr²h | work it out each time |

The cylinder's surface has two parts: the curved side (2πrh) and the two circular ends (2πr² in total). Forgetting the ends is a common error.

**Units.** If lengths are in µm, SA is in µm², V in µm³, and SA/V in **µm⁻¹** (µm² ÷ µm³). Always state the unit.

## How SA/V changes with size

Look at cubes of increasing side:

| Side s / µm | SA / µm² | V / µm³ | SA/V / µm⁻¹ |
|---|---|---|---|
| 1 | 6 | 1 | 6.0 |
| 2 | 24 | 8 | 3.0 |
| 4 | 96 | 64 | 1.5 |
| 8 | 384 | 512 | 0.75 |

Each time the side **doubles**, the area is multiplied by **4** (2²), the volume by **8** (2³), and SA/V **halves**. Area scales with length squared; volume with length cubed. That mismatch is the whole story.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="sv-title sv-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sv-title">Surface area-to-volume ratio of a cube against its side length</title>
<desc id="sv-desc">Line graph. Horizontal axis: side length in micrometres from 0 to 8. Vertical axis: surface area-to-volume ratio in per micrometre from 0 to 6. A smooth curve falls steeply from 6.0 at side 1 to 3.0 at side 2, then more gently to 1.5 at side 4 and 0.75 at side 8. These four points are marked with circles.</desc>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<line x1="60" y1="70" x2="470" y2="70" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="60" y1="140" x2="470" y2="140" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="60" y1="210" x2="470" y2="210" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="60" y1="280" x2="475" y2="280" stroke="#1d2b44" stroke-width="2"/>
<line x1="60" y1="280" x2="60" y2="55" stroke="#1d2b44" stroke-width="2"/>
<text x="60" y="298" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<text x="160" y="298" text-anchor="middle" font-size="12" fill="#1d2b44">2</text>
<text x="260" y="298" text-anchor="middle" font-size="12" fill="#1d2b44">4</text>
<text x="360" y="298" text-anchor="middle" font-size="12" fill="#1d2b44">6</text>
<text x="460" y="298" text-anchor="middle" font-size="12" fill="#1d2b44">8</text>
<text x="52" y="284" text-anchor="end" font-size="12" fill="#1d2b44">0</text>
<text x="52" y="214" text-anchor="end" font-size="12" fill="#1d2b44">2</text>
<text x="52" y="144" text-anchor="end" font-size="12" fill="#1d2b44">4</text>
<text x="52" y="74" text-anchor="end" font-size="12" fill="#1d2b44">6</text>
<text x="265" y="325" text-anchor="middle" font-size="14" fill="#1d2b44">Side length of cube, s / µm</text>
<text x="20" y="170" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 20 170)">SA/V / µm⁻¹</text>
<polyline points="110.0,70.0 122.5,112.0 135.0,140.0 147.5,160.0 160.0,175.0 172.5,186.7 185.0,196.0 197.5,203.6 210.0,210.0 222.5,215.4 235.0,220.0 247.5,224.0 260.0,227.5 272.5,230.6 285.0,233.3 297.5,235.8 310.0,238.0 322.5,240.0 335.0,241.8 347.5,243.5 360.0,245.0 372.5,246.4 385.0,247.7 397.5,248.9 410.0,250.0 422.5,251.0 435.0,252.0 447.5,252.9 460.0,253.8" fill="none" stroke="#1d2b44" stroke-width="3"/>
<circle cx="110" cy="70" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="160" cy="175" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="260" cy="227.5" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="460" cy="253.8" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="122" y="66" font-size="12" fill="#1d2b44">s = 1: 6.0</text>
<text x="172" y="168" font-size="12" fill="#1d2b44">s = 2: 3.0</text>
<text x="268" y="218" font-size="12" fill="#1d2b44">s = 4: 1.5</text>
<text x="420" y="238" font-size="12" fill="#1d2b44">s = 8: 0.75</text>
</svg>
<figcaption>Figure 1. SA/V = 6/s for a cube. Doubling the side halves the ratio. The fall is steepest at small sizes, so a small increase in size costs a small cell a lot of relative surface.</figcaption>
</figure>

## Ways to keep SA/V high

**1. Stay small.** Most cells are only micrometres across. Smaller cells have a higher SA/V and exchange materials with their surroundings more efficiently than larger ones. A larger organism is mostly made of **more** cells, not bigger ones.

**2. Change shape.** For a given volume, a sphere has the smallest possible surface. Flattening or stretching a cell adds surface without adding volume. Long, thin cells and flat, sheet-like cells have a higher SA/V than round cells of the same volume.

**3. Fold the membrane.** When a cell must exchange a lot, simple shape is not enough. More complex structures add membrane area while adding almost no volume:

- **Microvilli** are finger-like projections on gut lining (epithelial) cells. They multiply the area for absorbing digested food.
- **Root hairs** are long, thin extensions of root surface cells. They greatly increase the area for taking up water and mineral ions from the soil.
- **Cristae**, the folds of the inner mitochondrial membrane (Topic 2.1), give more area for making ATP.
- In leaves, **stomata** (pores, each opened and closed by a pair of guard cells) lead to air spaces lined by a large, moist cell surface, which allows fast gas exchange.

<figure>
<svg viewBox="0 0 620 300" role="img" aria-labelledby="mv-title mv-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="mv-title">A gut lining cell without and with microvilli</title>
<desc id="mv-desc">Two rectangles of the same size represent two cells side by side. The left cell has a flat top edge, labelled flat surface. The right cell has the same footprint, but its top edge is covered with a row of narrow finger-like projections labelled microvilli. A note says same footprint and almost the same volume, but much more membrane facing the gut contents.</desc>
<rect x="0" y="0" width="620" height="300" fill="#ffffff"/>
<rect x="60" y="90" width="180" height="170" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2.5"/>
<text x="150" y="180" text-anchor="middle" font-size="13" fill="#1d2b44">cytoplasm</text>
<text x="150" y="78" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">Flat surface</text>
<path d="M 360 90 L 360 50 A 4 4 0 0 1 368 50 L 368 90 L 376 90 L 376 50 A 4 4 0 0 1 384 50 L 384 90 L 392 90 L 392 50 A 4 4 0 0 1 400 50 L 400 90 L 408 90 L 408 50 A 4 4 0 0 1 416 50 L 416 90 L 424 90 L 424 50 A 4 4 0 0 1 432 50 L 432 90 L 440 90 L 440 50 A 4 4 0 0 1 448 50 L 448 90 L 456 90 L 456 50 A 4 4 0 0 1 464 50 L 464 90 L 472 90 L 472 50 A 4 4 0 0 1 480 50 L 480 90 L 488 90 L 488 50 A 4 4 0 0 1 496 50 L 496 90 L 504 90 L 504 50 A 4 4 0 0 1 512 50 L 512 90 L 520 90 L 520 50 A 4 4 0 0 1 528 50 L 528 90 L 540 90 L 540 260 L 360 260 Z" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2.5"/>
<text x="450" y="180" text-anchor="middle" font-size="13" fill="#1d2b44">cytoplasm</text>
<text x="450" y="30" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">Microvilli</text>
<text x="300" y="285" text-anchor="middle" font-size="12" fill="#1d2b44">Same footprint, almost the same volume, far more membrane facing the gut (top).</text>
</svg>
<figcaption>Figure 2. Microvilli add membrane area on the side of the cell that faces digested food (not to scale; real microvilli are far more numerous and narrower).</figcaption>
</figure>

## From cells to whole organisms

The same geometry applies to whole bodies. A larger organism has a **lower SA/V**, which affects how fast it exchanges **heat** with its surroundings.

- A small animal has a lot of surface for its mass, so it **gains or loses heat quickly**. For the same body temperature difference, a small mass exchanges **proportionally more heat** than a large mass.
- As mass increases, SA/V **and** the rate of heat exchange per unit mass both decrease. A large animal holds its heat for longer.

This links to **metabolic rate**, the rate at which an organism uses energy. In multicellular organisms there is a clear pattern: **the smaller the organism, the higher its metabolic rate per unit body mass**. A small mammal such as a shrew loses heat quickly through its relatively large surface, and it must release energy fast, for each gram of its body, to stay warm. A large mammal uses more energy in total but much less per gram.

## Worked example 1: how big can a spherical cell grow?

**Question.** Two fictional spherical cells have radii of 4 µm and 12 µm. Each µm³ of cytoplasm uses oxygen at 0.02 units per minute (demand). Each µm² of membrane can take in at most 0.05 units per minute (supply). (a) Calculate SA, V and SA/V for each cell. (b) Decide whether each cell's surface can meet its demand. (c) Find the largest radius at which supply just meets demand.

**(a)** Use SA = 4πr² and V = (4/3)πr³.

1. r = 4 µm: SA = 4π(4²) = **201.1 µm²**; V = (4/3)π(4³) = **268.1 µm³**; SA/V = 201.1 ÷ 268.1 = **0.75 µm⁻¹**.
2. r = 12 µm: SA = 4π(12²) = **1809.6 µm²**; V = (4/3)π(12³) = **7238.2 µm³**; SA/V = **0.25 µm⁻¹**.
3. Check with the shortcut SA/V = 3/r: 3 ÷ 4 = 0.75 and 3 ÷ 12 = 0.25. ✓

The radius tripled, so SA rose 9 times (3²) and V rose 27 times (3³), and SA/V fell to one third.

**(b)** Supply = SA × 0.05; demand = V × 0.02.

1. r = 4 µm: supply = 201.1 × 0.05 = 10.05 units min⁻¹; demand = 268.1 × 0.02 = 5.36 units min⁻¹. Supply is larger, so the small cell **can** meet its needs.
2. r = 12 µm: supply = 1809.6 × 0.05 = 90.48 units min⁻¹; demand = 7238.2 × 0.02 = 144.76 units min⁻¹. Demand is larger, so the large cell **cannot** meet its needs.

**(c)** Supply equals demand when SA × 0.05 = V × 0.02, that is when SA/V = 0.02 ÷ 0.05 = 0.4 µm⁻¹. For a sphere SA/V = 3/r, so 3/r = 0.4 and **r = 7.5 µm**. Any larger, and the cell's demand outruns its surface.

**Interpretation.** The large cell has nine times the surface but 27 times the demand. This model ignores diffusion distances inside the cell and assumes uptake is the same everywhere on the membrane, but it shows why growth has a limit. The cell could divide, flatten or fold its membrane to stay below it.

## Worked example 2: what do microvilli add?

**Question.** A fictional gut lining cell is modelled as a box 10 µm × 10 µm × 25 µm. Its top face (10 µm × 10 µm) carries 2000 microvilli, each modelled as a cylinder of radius 0.05 µm and height 1.0 µm. (a) Calculate SA, V and SA/V without microvilli. (b) Calculate the area added by the microvilli and the percentage increase in SA. (c) Calculate the new SA/V and comment.

**(a)** SA = 2(10 × 10) + 4(10 × 25) = 200 + 1000 = **1200 µm²**. V = 10 × 10 × 25 = **2500 µm³**. SA/V = 1200 ÷ 2500 = **0.48 µm⁻¹**.

**(b)** Each microvillus stands on a patch of the top face. Its round tip has the same area as the patch it covers, so the area it **adds** is just its curved side: 2πrh = 2π × 0.05 × 1.0 = 0.314 µm².

1. Added area = 2000 × 0.314 = **628.3 µm²**.
2. New SA = 1200 + 628.3 = **1828.3 µm²**.
3. Percentage increase = 628.3 ÷ 1200 × 100 = **52.4%**.

**(c)** Added volume = 2000 × πr²h = 2000 × π × 0.05² × 1.0 = 15.7 µm³, only 0.63% more. New SA/V = 1828.3 ÷ 2515.7 = **0.73 µm⁻¹**, up from 0.48 µm⁻¹. The absorbing face alone grows from 100 µm² to 728.3 µm², about 7.3 times. Microvilli add a lot of membrane exactly where food is absorbed, for almost no extra volume to supply.

**Check the units.** µm² ÷ µm³ = µm⁻¹ ✓. Common error: adding the full cylinder surface (2πrh + 2πr²) for each microvillus counts each tip twice (its area is already part of the top face) and adds a base that is not exposed.

## Common misconceptions

- **"A bigger cell has less surface area."** It has more surface area in total, but less per unit of volume.
- **"SA/V has no units."** It has units of length⁻¹ (for example µm⁻¹), so the number depends on the length unit used.
- **"Doubling the size halves the surface area."** Doubling the length multiplies SA by 4 and V by 8; it is the **ratio** that halves.
- **"Big organisms are made of big cells."** Most of the extra size comes from more cells, each kept small.
- **"Microvilli and root hairs help because they make the cell bigger."** They add surface while adding almost no volume, which raises SA/V.
- **"Large animals have a higher metabolic rate per gram because they are bigger."** The reverse: smaller organisms typically have the higher rate per unit mass.
- **"A small animal loses heat slowly because it has a small surface."** Its total surface is small, but its surface **per unit mass** is large, so it loses heat quickly for its size.

## Where this leads

SA/V explains why exchange happens across thin, folded surfaces throughout biology, from cristae ([Topic 2.1, Cell Structure and Function](/advanced-course-resources/biology/2-1-cell-structure-function-study-guide/)) to lungs and gills. Next, [Topic 2.3, Plasma Membrane](/advanced-course-resources/biology/2-3-plasma-membrane-study-guide/), looks at the membrane itself: what it is made of and why it lets some substances through but not others. Test yourself now with the [practice questions](/advanced-course-resources/biology/2-2-cell-size-practice/), then use the [revision notes](/advanced-course-resources/biology/2-2-cell-size-revision-notes/) and the [checklist](/advanced-course-resources/biology/2-2-cell-size-checklist/) to consolidate.
