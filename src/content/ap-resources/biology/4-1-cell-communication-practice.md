---
resourceId: "mb-ap-bio-4.1-practice"
title: "Cell Communication: Practice Questions (Biology 4.1)"
description: "Seven original Marlbridge practice questions on contact signalling, local regulators, quorum sensing, hormones, target cells and why distance matters, with worked solutions and suggested mark points."
course: "biology"
unit: 4
topics: ["4.1"]
resourceType: "practice-questions"
prerequisites:
  - "The difference between direct contact, local and long-distance signalling"
prerequisiteResources: ["mb-ap-bio-4.1-study-guide"]
learningObjectives:
  - "Classify examples of cell communication by route and distance"
  - "Explain why only target cells respond to a hormone"
  - "Analyse data from dye-transfer and quorum-sensing experiments"
  - "Use a diffusion model to explain why long-distance signals need the blood"
skills: ["1", "2", "3", "4", "5", "6"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Model values are given in each question. Convert all distances to metres before using the diffusion model. Round to the precision of the data"
related: ["mb-ap-bio-4.1-study-guide", "mb-ap-bio-4.1-revision-notes", "mb-ap-bio-4.1-checklist"]
next: "mb-ap-bio-4.1-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working or reasoning."
  - "Name the route (contact, local or long-distance) and say why the signal reaches only some cells."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Model values are given in each question where you need them. A calculator is assumed. Keep full calculator values until the last step, then round to the precision of the data. All data sets, organisms and hormones named with a letter are fictional.

## Question 1 (multiple choice · foundation)

A killer T cell finds and destroys a body cell infected by a virus. Which statement best describes how the T cell receives the signal that the cell is infected?

- (A) Direct contact: a receptor on the T cell binds virus fragments displayed on the surface of the infected cell.
- (B) Local signalling: the infected cell releases virus fragments that diffuse to T cells in the surrounding fluid.
- (C) Long-distance signalling: virus fragments travel in the blood and bind T cells anywhere in the body.
- (D) Direct contact: gap junctions let virus fragments pass from the infected cell's cytoplasm into the T cell.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The infected cell holds fragments of viral proteins on its surface, and the T cell must touch it for its receptor to bind them. So the T cell kills only the infected cell, not its healthy neighbours.

- (B) describes a local regulator. The displayed fragments stay attached to the cell surface; they are not released.
- (C) describes a hormone. A signal floating free in the blood could not show which cell was infected.
- (D) mixes up the two kinds of contact. The fragments stay on the outside of the infected cell; they are not passed through channels into the T cell.
</details>

## Question 2 (multiple choice · core)

A gland releases hormone K into the blood. Blood carrying hormone K flows through every organ, but only kidney cells change their activity. Which statement best explains this?

- (A) Kidney cells have a receptor protein that hormone K binds to; other cells lack this receptor.
- (B) Blood vessels from the gland carry hormone K only to the kidneys.
- (C) Hormone K is broken down in the blood before it reaches other organs.
- (D) The kidneys are the organs closest to the gland, so the concentration of hormone K is highest there.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** A hormone reaches nearly every cell, but only cells with a matching receptor respond. Kidney cells are the targets.

- (B) is wrong: blood circulates through the whole body, and the question says hormone K reaches every organ.
- (C) contradicts the data: the hormone is in the blood of every organ.
- (D) uses the logic of a local regulator. For a hormone, receptors decide the response, not distance from the gland.
</details>

## Question 3 (multiple choice · core)

A motor neuron runs about 1 m from the spinal cord to a muscle in the foot. At its end, it releases acetylcholine, which binds receptors on the muscle cell. How is this chemical signal best classified?

- (A) Long-distance signalling, because the signal travels the whole length of the neuron.
- (B) Short-distance (local) signalling, because the neurotransmitter crosses only the narrow gap between the neuron and the muscle cell.
- (C) Direct contact, because the neuron's membrane and the muscle cell's membrane touch at the synapse.
- (D) Long-distance signalling, because neurotransmitters are carried in the blood like hormones.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The chemical signal is released into the synaptic gap, which is only tens of nanometres wide, and acts on the cell next to it. That makes it a local regulator.

- (A) confuses the electrical impulse, which travels along the neuron, with the chemical signal, which crosses only the gap.
- (C) is wrong: there is a gap at the synapse, and the signal is a released molecule.
- (D) is wrong: neurotransmitters are released into the gap, not the blood.
</details>

## Question 4 (graph · core)

To test whether cells in a fictional tissue are linked by gap junctions, a student injects a fluorescent dye into one cell and counts the neighbouring cells that become fluorescent after 5 minutes. She uses a small dye (0.4 kDa), a large dye (10 kDa), and the small dye with a drug that blocks gap junctions. Five cells were injected per treatment.

| Treatment | Neighbours labelled in each trial | Mean |
|---|---|---|
| Small dye | 6, 7, 5, 7, 6 | ? |
| Large dye | 0, 0, 1, 0, 0 | ? |
| Small dye + blocker | 0, 1, 0, 0, 1 | ? |

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="q4-title q4-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="q4-title">Mean number of neighbouring cells labelled by dye</title>
<desc id="q4-desc">Bar chart with range bars. Vertical axis: mean number of neighbours labelled, 0 to 8. Small dye: bar to 6.2, range bar from 5 to 7. Large dye: bar to 0.2, range bar from 0 to 1. Small dye plus blocker: bar to 0.4, range bar from 0 to 1.</desc>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<line x1="80" y1="280" x2="500" y2="280" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="280" x2="80" y2="35" stroke="#1d2b44" stroke-width="2"/>
<text x="72" y="284" text-anchor="end" font-size="12" fill="#1d2b44">0</text>
<text x="72" y="224" text-anchor="end" font-size="12" fill="#1d2b44">2</text>
<text x="72" y="164" text-anchor="end" font-size="12" fill="#1d2b44">4</text>
<text x="72" y="104" text-anchor="end" font-size="12" fill="#1d2b44">6</text>
<text x="72" y="44" text-anchor="end" font-size="12" fill="#1d2b44">8</text>
<text x="24" y="160" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 24 160)">Neighbours labelled (mean)</text>
<rect x="115" y="94" width="70" height="186" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="255" y="274" width="70" height="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="395" y="268" width="70" height="12" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<line x1="150" y1="70" x2="150" y2="130" stroke="#1d2b44" stroke-width="2"/>
<line x1="140" y1="70" x2="160" y2="70" stroke="#1d2b44" stroke-width="2"/>
<line x1="140" y1="130" x2="160" y2="130" stroke="#1d2b44" stroke-width="2"/>
<line x1="290" y1="250" x2="290" y2="280" stroke="#1d2b44" stroke-width="2"/>
<line x1="280" y1="250" x2="300" y2="250" stroke="#1d2b44" stroke-width="2"/>
<line x1="430" y1="250" x2="430" y2="280" stroke="#1d2b44" stroke-width="2"/>
<line x1="420" y1="250" x2="440" y2="250" stroke="#1d2b44" stroke-width="2"/>
<text x="150" y="300" text-anchor="middle" font-size="12" fill="#1d2b44">Small dye</text>
<text x="290" y="300" text-anchor="middle" font-size="12" fill="#1d2b44">Large dye</text>
<text x="430" y="300" text-anchor="middle" font-size="12" fill="#1d2b44">Small dye + blocker</text>
<text x="290" y="326" text-anchor="middle" font-size="12" fill="#1d2b44">Vertical lines show the range of the five trials</text>
</svg>
<figcaption>Question 4 graph. The table above gives the same data.</figcaption>
</figure>

(a) Calculate the mean for each treatment.
(b) Calculate the percentage change in the mean when the blocker is added to the small dye.
(c) Explain what the results show about how these cells communicate, and why the large dye does not spread.
(d) Identify the control for part (b), and suggest one further control that would make the blocker result more convincing.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Small dye: (6 + 7 + 5 + 7 + 6) ÷ 5 = 31 ÷ 5 = **6.2**. Large dye: 1 ÷ 5 = **0.2**. Small dye + blocker: 2 ÷ 5 = **0.4**.

**(b)** (0.4 − 6.2) ÷ 6.2 × 100 = **−93.5%** (a fall of about 94%).

**(c)** The small dye moves from the injected cell into about six neighbours, so the cells' cytoplasms are linked by channels: **gap junctions**. The blocker almost stops this spread, which supports that idea. The large dye does not spread because the channels are narrow and let through only ions and small molecules. The ranges do not overlap (5–7 against 0–1), so the differences are unlikely to be due to chance.

**(d)** Control: the small dye **without** the blocker. A further control: inject the small dye into cells treated with the solvent that the blocker is dissolved in, but no blocker. This shows that the solvent itself does not stop the spread. (Also accept: check that blocked cells are still alive.)

| Point | What earns it |
|---|---|
| 1 | All three means correct |
| 1 | −93.5% (or a fall of about 94%) with working |
| 1 | Spread of small dye linked to gap junctions joining cytoplasm, supported by the blocker result |
| 1 | Large dye blocked because the channels pass only small molecules |
| 1 | Correct control **and** a sensible extra control with its purpose |
</details>

## Question 5 (constructed response · core)

A fictional soil bacterium forms a biofilm only when its population is dense. It uses quorum sensing. A researcher has two mutant strains:

- **Strain S** cannot make the signal molecule but has a normal receptor.
- **Strain R** makes the signal normally but has no working receptor.

Grown alone at high density, neither strain forms a biofilm.

(a) Explain why each strain fails to form a biofilm on its own.
(b) The two strains are mixed and grown together at high density. Predict which strain, if either, switches on its biofilm genes. Justify your answer.
(c) Predict what happens if purified signal is added to a **dilute** culture of strain S. Justify your answer, and say why responding only at high density normally benefits the bacteria.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Strain S has receptors but no signal is made, so the signal concentration stays at zero however dense the culture becomes. Strain R makes the signal, so the concentration rises, but with no working receptor the cells cannot detect it.

**(b)** **Strain S** switches on its biofilm genes; strain R does not. Strain R releases the signal, which builds up in the shared medium. Strain S cells have working receptors, so they detect it once it passes the threshold. Strain R still cannot respond, because it has no working receptor.

**(c)** Strain S switches on its biofilm genes even though the culture is dilute. The cells respond to the **concentration of signal**, not to the number of cells. Adding the signal by hand bypasses the need for high density. Normally this rule pays off: a biofilm works only when many cells build it together, so a few cells acting alone would waste resources.

| Point | What earns it |
|---|---|
| 1 | Both failures explained: S has no signal; R cannot detect the signal |
| 1 | Prediction in (b) that S responds and R does not |
| 1 | Justification in (b): signal from R reaches S's receptors in the shared medium |
| 1 | (c) S responds because the response depends on signal concentration, not cell number; benefit linked to group action |

Do not award the third point for "the strains touch": quorum sensing uses a released signal.
</details>

## Question 6 (constructed response · stretch)

Hormone Z, made by a gland in the neck of a fictional lizard, was injected into the blood. Researchers measured receptors per cell and the percentage of cells that responded in five tissues. Hormone Z in blood leaving each tissue was 4.0 nmol L⁻¹ in all five.

| Tissue | Liver | Muscle | Kidney | Bone | Skin |
|---|---|---|---|---|---|
| Receptors per cell | 12 000 | 8 000 | 6 000 | 0 | 0 |
| Cells responding / % | 95 | 90 | 85 | 3 | 2 |

A student claims: "Hormone Z is delivered only to the liver, muscle and kidney."

(a) Describe the relationship between receptors and response, using numbers from the table.
(b) Evaluate the student's claim using the data.
(c) Skin cells are genetically engineered to make the hormone Z receptor. Predict and justify the result when hormone Z is injected.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Tissues with receptors respond strongly (85–95%; mean 90.0%); tissues without barely respond (2–3%; mean 2.5%). More receptors go with a slightly higher response (12 000 → 95%, 6 000 → 85%), but the big difference is receptors versus none.

**(b)** The claim is **not supported**. Hormone Z was at the same concentration (4.0 nmol L⁻¹) in the blood of all five tissues, so bone and skin received it too. They do not respond because they lack receptors: delivery is the same everywhere, and the receptor decides the response. The small 2–3% responses are probably background changes; a control injection of salt solution would check this.

**(c)** The engineered skin cells should now **respond**: the hormone already reaches the skin, and the cells now have a receptor to bind it. (Accept a caution that the response also needs a suitable pathway inside the cell.)

| Point | What earns it |
|---|---|
| 1 | Relationship described with numbers from both groups |
| 1 | Claim rejected using the equal blood concentration in all tissues |
| 1 | Response explained by presence or absence of receptors |
| 1 | (c) Engineered skin responds, justified by receptor plus delivery |
</details>

## Question 7 (calculation · stretch)

A simple model gives the typical time t for a small molecule to diffuse a distance x: **t = x² ÷ (2D)**, where D is the diffusion coefficient. Take D = 1 × 10⁻⁹ m² s⁻¹ for a small signal molecule in body fluid.

(a) Calculate t for a distance of (i) 20 nm, the width of a synaptic gap; (ii) 100 µm, a few cells; (iii) 1 m, roughly the length of a human body.
(b) Use your answers to explain why local regulators work only over short distances and why hormones are carried in the blood.
(c) By what factor does the diffusion time change if the distance is doubled?

<details>
<summary>Worked solution</summary>

**(a)** Convert to metres first: 20 nm = 2 × 10⁻⁸ m; 100 µm = 1 × 10⁻⁴ m.

- (i) t = (2 × 10⁻⁸)² ÷ (2 × 1 × 10⁻⁹) = 4 × 10⁻¹⁶ ÷ 2 × 10⁻⁹ = **2 × 10⁻⁷ s** (0.2 microseconds).
- (ii) t = (1 × 10⁻⁴)² ÷ (2 × 10⁻⁹) = 1 × 10⁻⁸ ÷ 2 × 10⁻⁹ = **5 s**.
- (iii) t = 1² ÷ (2 × 10⁻⁹) = **5 × 10⁸ s**, which is about **16 years** (5 × 10⁸ ÷ 3.15 × 10⁷ s per year = 15.9).

**(b)** Diffusion is almost instant across a synapse and takes seconds across a few cells, so a local regulator acts quickly on nearby cells. Across the body it would take years, and the signal would be diluted and broken down long before arriving. Blood carries a hormone round the body in about a minute.

**(c)** t depends on x², so doubling x multiplies t by 2² = **4**. (For example, 200 µm takes 20 s.)

Suggested mark points (4): 1 for unit conversions; 1 for all three times; 1 for linking short times to local signalling and the long time to blood transport; 1 for the factor of 4.

Common errors: not squaring x gives 5 × 10⁴ s for 100 µm; using x² ÷ D gives 10 s, double the model value.
</details>

## How did you do?

- **Q1, Q3 or Q4 wrong:** re-read "Communication by direct contact" and "Neurotransmitters" in the [study guide](/advanced-course-resources/biology/4-1-cell-communication-study-guide/), with Figure 1.
- **Q2 or Q6 wrong:** re-read "Specificity comes from receptors".
- **Q5 incomplete:** rework Worked example 2.
- **Q7 wrong:** convert to metres first and square the distance.

Then tick off the [topic checklist](/advanced-course-resources/biology/4-1-cell-communication-checklist/).
