---
resourceId: "mb-ap-bio-4.6-study-guide"
title: "Regulation of Cell Cycle: Study Guide (Biology 4.6)"
description: "How checkpoints and cyclin-CDK interactions control the cell cycle, and how disruptions can lead to cancer or to apoptosis (programmed cell death), with data-based predictions."
course: "biology"
unit: 4
topics: ["4.6"]
resourceType: "study-guide"
prerequisites:
  - "The stages of the cell cycle: G1, S, G2, mitosis and cytokinesis, and the G0 state"
  - "Protein kinases and phosphorylation in cell signalling"
prerequisiteResources: ["mb-ap-bio-4.5-study-guide"]
learningObjectives:
  - "Describe what the G1, G2 and M checkpoints check, and what can happen to a cell that does not pass"
  - "Explain how cyclins and cyclin-dependent kinases (CDKs) interact to move a cell from one stage to the next"
  - "Read a graph of cyclin concentration and CDK activity, and predict the effect of changing either"
  - "Describe apoptosis and explain its roles in removing damaged or unneeded cells"
  - "Explain how disruptions to cell cycle control can lead to cancer, and predict the effects of specific disruptions"
skills: ["1", "2", "4", "5", "6"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Calculations use rates (change ÷ time), percentages and percentage change from fictional data. Concentrations are in arbitrary units (au)"
related: ["mb-ap-bio-4.6-revision-notes", "mb-ap-bio-4.6-practice", "mb-ap-bio-4.6-checklist"]
next: "mb-ap-bio-4.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Checkpoints are internal controls that stop the cycle until conditions are right: G1 (is the cell ready, and should it divide?), G2 (is the DNA fully and correctly copied?) and M (is every chromosome attached to the spindle?)."
  - "Cyclin-dependent kinases (CDKs) are enzymes that are present all the time but active only when bound to a cyclin. Cyclin levels rise and fall, so CDK activity rises and falls."
  - "An active cyclin-CDK complex phosphorylates target proteins, which drives the cell past a checkpoint. Breaking down the cyclin switches the CDK off."
  - "Apoptosis is programmed cell death: an orderly self-destruction that removes damaged or unneeded cells."
  - "When the controls fail, cells can divide without restraint and with damaged DNA. This can lead to cancer."
faqs:
  - question: "Do I need to know which cyclin pairs with which CDK?"
    answer: "No. Specific cyclin-CDK pairs, and specific growth factors, are beyond the scope of the course. You need the general idea: cyclin levels change, CDKs need cyclin to be active, and active complexes push the cycle forward."
  - question: "Is apoptosis harmful?"
    answer: "Usually it is protective. It removes cells with DNA damage that cannot be repaired, and it shapes organs during development. Problems arise when there is too little apoptosis (damaged cells survive) or too much (healthy tissue is lost)."
  - question: "Is cancer caused by a single mutation?"
    answer: "Usually not. Most cancers develop after several mutations build up in the same cell line, each one weakening a different control on division or cell death."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Why the cycle needs controls

In Topic 4.5 you followed a cell through G1, S, G2, mitosis and cytokinesis. Those events must happen in the right order and only when the cell is ready. A cell that entered mitosis before finishing DNA replication would hand broken chromosomes to its daughters. A cell that started anaphase before every chromosome was attached to the spindle could give one daughter an extra chromosome and the other none. And a body whose cells divided whenever they could would grow out of control.

So cells have **internal controls**. At several points, the cell checks its own state and either moves on or stops. These control points are called **checkpoints**. The proteins that actually push the cell past a checkpoint are **cyclins** and **cyclin-dependent kinases (CDKs)**.

## Checkpoints: stop or go

<figure>
<svg viewBox="0 0 640 400" role="img" aria-labelledby="cp-title cp-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cp-title">The three main cell cycle checkpoints</title>
<desc id="cp-desc">A ring showing the cell cycle clockwise from the top: G1 round the right side, S at the bottom, G2 on the left and M, a small section, at the top left. Three thick black bars cross the ring. The first, near the end of G1 at the lower right, is labelled G1 checkpoint: is the cell big enough, with enough nutrients and the right signals, and is its DNA undamaged? If yes, it goes on to S; if not, it pauses, enters G0 or undergoes apoptosis. The second, at the end of G2 on the upper left, is labelled G2 checkpoint: is the DNA fully copied and undamaged? The third, inside M at the top, is labelled M or spindle checkpoint: is every chromosome attached to the spindle before anaphase?</desc>
<rect x="0" y="0" width="640" height="400" fill="#ffffff"/>
<path d="M300.0 60.0 A140 140 0 0 1 382.3 313.3 L347.0 264.7 A80 80 0 0 0 300.0 120.0 Z" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<path d="M382.3 313.3 A140 140 0 0 1 166.9 243.3 L223.9 224.7 A80 80 0 0 0 347.0 264.7 Z" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<path d="M166.9 243.3 A140 140 0 0 1 217.7 86.7 L253.0 135.3 A80 80 0 0 0 223.9 224.7 Z" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<path d="M217.7 86.7 A140 140 0 0 1 300.0 60.0 L300.0 120.0 A80 80 0 0 0 253.0 135.3 Z" fill="#e4e8ef" stroke="#1d2b44" stroke-width="2"/>
<text x="405" y="172" text-anchor="middle" font-size="20" font-weight="700" fill="#1d2b44">G1</text>
<text x="266" y="311" text-anchor="middle" font-size="20" font-weight="700" fill="#1d2b44">S</text>
<text x="195" y="172" text-anchor="middle" font-size="20" font-weight="700" fill="#1d2b44">G2</text>
<text x="290" y="102" text-anchor="middle" font-size="16" font-weight="700" fill="#1d2b44">M</text>
<text x="300" y="205" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">Read clockwise</text>
<line x1="355.2" y1="246.3" x2="414.9" y2="296.4" stroke="#1d2b44" stroke-width="8"/>
<line x1="251.8" y1="146.5" x2="199.6" y2="88.5" stroke="#1d2b44" stroke-width="8"/>
<line x1="277.8" y1="131.5" x2="253.6" y2="57.3" stroke="#1d2b44" stroke-width="8"/>
<line x1="415" y1="297" x2="432" y2="318" stroke="#1d2b44" stroke-width="1"/>
<text x="436" y="330" font-size="14" font-weight="700" fill="#1d2b44">1. G1 checkpoint</text>
<text x="436" y="347" font-size="12" fill="#1d2b44">Big enough? Nutrients and</text>
<text x="436" y="362" font-size="12" fill="#1d2b44">signals present? DNA intact?</text>
<text x="436" y="377" font-size="12" fill="#1d2b44">No → pause, G0 or apoptosis</text>
<line x1="199" y1="88" x2="180" y2="70" stroke="#1d2b44" stroke-width="1"/>
<text x="176" y="40" text-anchor="end" font-size="14" font-weight="700" fill="#1d2b44">2. G2 checkpoint</text>
<text x="176" y="57" text-anchor="end" font-size="12" fill="#1d2b44">DNA fully copied</text>
<text x="176" y="72" text-anchor="end" font-size="12" fill="#1d2b44">and undamaged?</text>
<line x1="256" y1="55" x2="306" y2="34" stroke="#1d2b44" stroke-width="1"/>
<text x="310" y="26" font-size="14" font-weight="700" fill="#1d2b44">3. M (spindle) checkpoint</text>
<text x="310" y="43" font-size="12" fill="#1d2b44">Every chromosome attached to</text>
<text x="310" y="58" font-size="12" fill="#1d2b44">the spindle before anaphase?</text>
</svg>
<figcaption>Figure 1. The three main checkpoints, shown as thick bars across the cycle and numbered in the order a cell meets them. Section sizes are illustrative.</figcaption>
</figure>

| Checkpoint | When | What is checked | If the check fails |
|---|---|---|---|
| **G1 checkpoint** | late G1, before DNA replication | Is the cell large enough? Are nutrients and signals from other cells telling it to divide? Is the DNA undamaged? | The cell pauses for repair, leaves the cycle into G0, or (if the damage cannot be repaired) undergoes apoptosis |
| **G2 checkpoint** | end of G2, before mitosis | Has all the DNA been replicated? Is it undamaged? | The cell pauses until replication or repair is complete, or undergoes apoptosis |
| **M checkpoint** (spindle checkpoint) | in mitosis, between metaphase and anaphase | Is every chromosome attached to spindle fibres from **both** poles? | Anaphase is delayed until every chromosome is attached |

The G1 checkpoint is the main decision point for many cells. Passing it usually commits the cell to completing the cycle. Cells that do not pass may enter **G0**, which is where most of the non-dividing cells in your body are.

A checkpoint is not a single object. It is a set of proteins that detect a problem (such as broken DNA or an unattached chromosome) and then block the proteins that would move the cell forward. One well-studied example is a protein called p53, which builds up when DNA is damaged; it halts the cycle and, if repair fails, can trigger apoptosis. You do not need to learn its name, but it is a useful example of a checkpoint protein.

## Cyclins and CDKs: the engine of the cycle

### Two proteins, two jobs

A **kinase** is an enzyme that transfers a phosphate group from ATP to another protein. Adding a phosphate (phosphorylation) changes the shape of the target protein, switching it on or off. You met this idea in the phosphorylation cascades of signal transduction (Topic 4.2).

- **Cyclin-dependent kinases (CDKs)** are kinases whose amount stays roughly **constant** through the cycle. On its own, a CDK is **inactive**.
- **Cyclins** are regulatory proteins whose concentration **rises and falls** in each cycle. The cell makes a cyclin steadily, then destroys it quickly at a set point.

When enough cyclin has built up, it binds to a CDK. The **cyclin-CDK complex** is active: it phosphorylates target proteins that carry out the next stage, such as condensing chromosomes or breaking down the nuclear envelope. The cell passes the checkpoint. Then the cyclin is broken down, the CDK becomes inactive again, and the cell can leave that stage.

Cells use several cyclins, each peaking at a different point in the cycle, so different complexes drive different transitions. You do not need to know the specific cyclin-CDK pairs or growth factors.

<figure>
<svg viewBox="0 0 600 360" role="img" aria-labelledby="cy-title cy-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cy-title">Model levels of a cyclin, CDK amount and CDK activity over two cycles</title>
<desc id="cy-desc">Line graph. Horizontal axis: time in hours from 0 to 24. Vertical axis: relative level in arbitrary units from 0 to 100. Cyclin concentration, solid line, rises steadily from 5 at 0 hours to 80 at 10 hours, falls back to 5 by 12 hours, then repeats, peaking again at 22 hours. CDK amount, dotted line, stays flat at 50 the whole time. CDK activity, dashed line, stays near 5 until about 8 hours, rises sharply to a peak of 90 at 10 hours, then falls to 5 by 12 hours, and repeats with a peak at 22 hours. Shaded bands from 10 to 12 hours and 22 to 24 hours are labelled M for mitosis.</desc>
<rect x="0" y="0" width="600" height="360" fill="#ffffff"/>
<rect x="255" y="60" width="35" height="240" fill="#e4e8ef"/>
<rect x="465" y="60" width="35" height="240" fill="#e4e8ef"/>
<text x="272" y="296" text-anchor="middle" font-size="12" font-weight="700" fill="#1d2b44">M</text>
<text x="482" y="296" text-anchor="middle" font-size="12" font-weight="700" fill="#1d2b44">M</text>
<line x1="80" y1="300" x2="510" y2="300" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="300" x2="80" y2="55" stroke="#1d2b44" stroke-width="2"/>
<text x="72" y="304" text-anchor="end" font-size="12" fill="#1d2b44">0</text>
<text x="72" y="208" text-anchor="end" font-size="12" fill="#1d2b44">40</text>
<text x="72" y="112" text-anchor="end" font-size="12" fill="#1d2b44">80</text>
<text x="72" y="64" text-anchor="end" font-size="12" fill="#1d2b44">100</text>
<line x1="76" y1="204" x2="80" y2="204" stroke="#1d2b44" stroke-width="2"/>
<line x1="76" y1="108" x2="80" y2="108" stroke="#1d2b44" stroke-width="2"/>
<line x1="76" y1="60" x2="80" y2="60" stroke="#1d2b44" stroke-width="2"/>
<text x="80" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<text x="150" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">4</text>
<text x="220" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">8</text>
<text x="290" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">12</text>
<text x="360" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">16</text>
<text x="430" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">20</text>
<text x="500" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">24</text>
<text x="290" y="345" text-anchor="middle" font-size="14" fill="#1d2b44">Time / h</text>
<text x="24" y="180" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 24 180)">Relative level / au</text>
<polyline points="80,180 500,180" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="2 5"/>
<polyline points="80,288 255,108 290,288 465,108 500,288" fill="none" stroke="#1d2b44" stroke-width="3"/>
<polyline points="80,288 220,288 237.5,252 255,84 272.5,228 290,288 430,288 447.5,252 465,84 482.5,228 500,288" fill="none" stroke="#1d2b44" stroke-width="3" stroke-dasharray="9 6"/>
<rect x="90" y="66" width="150" height="62" fill="#ffffff" stroke="#1d2b44" stroke-width="1"/>
<line x1="98" y1="80" x2="130" y2="80" stroke="#1d2b44" stroke-width="3"/>
<text x="136" y="84" font-size="12" fill="#1d2b44">Cyclin</text>
<line x1="98" y1="98" x2="130" y2="98" stroke="#1d2b44" stroke-width="3" stroke-dasharray="9 6"/>
<text x="136" y="102" font-size="12" fill="#1d2b44">CDK activity</text>
<line x1="98" y1="116" x2="130" y2="116" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="2 5"/>
<text x="136" y="120" font-size="12" fill="#1d2b44">CDK amount</text>
</svg>
<figcaption>Figure 2. Model data for one cyclin and its CDK. Solid line: cyclin concentration. Dashed line: CDK activity. Dotted line: CDK amount (constant). Shaded bands: mitosis.</figcaption>
</figure>

## Worked example 1: reading a cyclin-CDK graph

**Question.** The values plotted in Figure 2 for the first cycle are:

| Time / h | 0 | 2 | 4 | 6 | 8 | 10 | 12 |
|---|---|---|---|---|---|---|---|
| Cyclin / au | 5 | 20 | 35 | 50 | 65 | 80 | 5 |
| CDK activity / au | 5 | 5 | 5 | 5 | 5 | 90 | 5 |
| CDK amount / au | 50 | 50 | 50 | 50 | 50 | 50 | 50 |

(a) Calculate the rate at which cyclin builds up between 0 h and 10 h.
(b) Explain why CDK activity changes even though the amount of CDK does not.
(c) Predict the effect of a mutation that stops this cyclin being broken down.
(d) Predict the effect of a drug that stops the cell making this cyclin.

**(a) Rate.**

1. Change in cyclin = 80 − 5 = 75 au.
2. Time = 10 − 0 = 10 h.
3. Rate = 75 au ÷ 10 h = **7.5 au h⁻¹**. Check with any 2-hour step: 15 au ÷ 2 h = 7.5 au h⁻¹.

**(b) Explanation.** A CDK is only active when bound to cyclin. The amount of CDK stays at 50 au, but while cyclin is low, few CDK molecules have a partner, so activity stays low (5 au). As cyclin reaches its peak, enough cyclin-CDK complexes form to switch on the targets: activity jumps to 90 au at 10 h, and the cell enters mitosis. When the cyclin is destroyed (by 12 h), activity falls back to 5 au. So **CDK activity follows the cyclin concentration**, not the CDK amount.

**(c) Cyclin cannot be broken down.** Cyclin stays high, so the CDK stays active. The cell cannot switch off the complex that drives mitosis, so it is likely to **stay stuck in mitosis** instead of finishing and returning to interphase. Destroying the cyclin is the "off switch", and it is as important as the "on switch".

**(d) No cyclin made.** The CDK never gains a partner, so it stays inactive. The cell **cannot pass the checkpoint** that this complex controls, so it stops before mitosis (here, in G2). It would not divide.

**Skill check.** Both predictions follow the same chain: change in cyclin → change in CDK activity → change in phosphorylation of targets → change in progress through the cycle. Writing every link earns the marks.

## Apoptosis: programmed cell death

**Apoptosis** is a controlled, orderly way for a cell to destroy itself. The cell shrinks, its DNA is cut into pieces, and it breaks into small membrane-wrapped fragments that neighbouring cells or white blood cells engulf. Because the contents do not spill out, nearby tissue is not damaged.

Apoptosis is a normal and useful process:

- **Removing damaged cells.** When a checkpoint finds DNA damage that cannot be repaired, apoptosis removes the cell before it can pass the damage on.
- **Shaping the body in development.** Human hands and feet first form with tissue between the digits; apoptosis removes those cells, leaving separate fingers and toes.
- **Removing cells that are no longer needed**, keeping cell numbers in a tissue steady.

## When control fails: cancer

**Cancer** is a group of diseases in which cells divide without the normal controls. It usually starts with **mutations** in the genes that code for cell cycle proteins. Two broad kinds of change matter:

- A protein that **drives** the cycle becomes overactive (like an accelerator stuck down). For example, a cyclin might be made all the time, so its CDK is always active.
- A protein that **stops** the cycle or triggers apoptosis stops working (like failed brakes). For example, a checkpoint protein that detects DNA damage might be lost.

A cell with these changes can pass checkpoints it should fail, divide with damaged DNA and avoid apoptosis. Each division can add new mutations, so the problems build up. The result can be a **tumour**, a mass of cells; in a malignant tumour, cells can invade nearby tissue and spread. Most cancers need several such mutations in the same cell line, which is one reason cancer becomes more common with age.

Disruption can also go the other way. Too much apoptosis removes healthy cells, so a tissue can shrink or fail to work properly.

## Worked example 2: predicting the effect of a broken checkpoint

**Question.** Researchers grow two fictional cell lines in culture: **normal** cells and **mutant** cells lacking a working DNA-damage checkpoint protein. Half of each line is exposed to a dose of UV light that damages DNA. After 24 h they measure the percentage of cells undergoing apoptosis and the mitotic index.

| Cell line | Treatment | Cells in apoptosis / % | Mitotic index / % |
|---|---|---|---|
| Normal | no UV | 3.0 | 5.0 |
| Normal | UV | 42 | 0.5 |
| Mutant | no UV | 3.0 | 5.0 |
| Mutant | UV | 6.0 | 4.8 |

(a) Identify the independent variables and the controls.
(b) Calculate the percentage increase in apoptosis caused by UV in each line.
(c) Explain the results, and predict a long-term consequence for the mutant cells.

**(a) Variables.** Two independent variables: cell line (normal or mutant) and UV treatment (yes or no). The no-UV groups are the controls for each line: they show the baseline of apoptosis and division without DNA damage. Dependent variables: percentage of cells in apoptosis, and mitotic index.

**(b) Percentage increase.**

1. Normal: (42 − 3.0) ÷ 3.0 × 100 = 39 ÷ 3.0 × 100 = **1300%** (a 14-fold rise).
2. Mutant: (6.0 − 3.0) ÷ 3.0 × 100 = **100%** (a 2-fold rise).

**(c) Explanation.** Without UV, the two lines behave the same, so the mutation does not change normal division. After UV, normal cells detect the DNA damage: the checkpoint stops the cycle (mitotic index falls from 5.0% to 0.5%), and cells that cannot repair the damage undergo apoptosis (42%). Mutant cells cannot detect the damage, so they keep dividing (4.8%, almost unchanged) and few undergo apoptosis (6.0%).

**Prediction.** Mutant cells with damaged DNA survive and divide, passing the damage to their daughter cells. Over many divisions, more mutations build up, some in other cell cycle genes. This raises the chance that a line of cells escapes control and forms a tumour.

**Limits.** These are cells in culture, measured once at 24 h; a real tissue has other controls, such as signals from neighbouring cells and the immune system.

## Common misconceptions

- **"Cyclins are enzymes."** CDKs are the enzymes (kinases). Cyclins are the regulatory partners that switch CDKs on.
- **"The amount of CDK rises and falls."** CDK amount stays roughly constant. It is the cyclin concentration, and so CDK **activity**, that rises and falls.
- **"Checkpoints only stop the cycle."** A cell that fails a checkpoint may pause for repair, enter G0 or undergo apoptosis.
- **"Apoptosis is always harmful."** It protects the body by removing damaged cells and shapes organs in development. Both too little and too much can cause disease.
- **"Cancer cells always divide faster than normal cells."** The key problem is that they ignore the signals and checkpoints that should stop them, and they avoid apoptosis.
- **"One mutation is enough to cause cancer."** Usually several mutations in the same cell line are needed.
- **"A kinase makes ATP."** A kinase uses ATP: it moves a phosphate group from ATP onto a target protein.

## Where this leads

This topic completes Unit 4. Next, [Topic 5.1, Meiosis](/advanced-course-resources/biology/5-1-meiosis-study-guide/), shows a different kind of division that halves the chromosome number to make gametes. Test yourself with the [practice questions](/advanced-course-resources/biology/4-6-regulation-cell-cycle-practice/), then use the [revision notes](/advanced-course-resources/biology/4-6-regulation-cell-cycle-revision-notes/) and the [checklist](/advanced-course-resources/biology/4-6-regulation-cell-cycle-checklist/) to consolidate.
