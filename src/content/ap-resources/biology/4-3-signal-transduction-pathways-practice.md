---
resourceId: "mb-ap-bio-4.3-practice"
title: "Signal Transduction Pathways: Practice Questions (Biology 4.3)"
description: "Seven original Marlbridge practice questions on cellular responses, apoptosis, quorum sensing, receptor mutations, toxins and blocking drugs, with worked solutions and suggested mark points."
course: "biology"
unit: 4
topics: ["4.3"]
resourceType: "practice-questions"
prerequisites:
  - "The parts of a signal transduction pathway and the kinds of response it can produce"
prerequisiteResources: ["mb-ap-bio-4.3-study-guide"]
learningObjectives:
  - "Classify a cellular response as a change in protein activity, gene expression, phenotype or apoptosis"
  - "Predict the effect of a mutation, toxin or drug at a named point in a pathway"
  - "Use experimental data to justify a claim about where a chemical acts"
  - "Calculate how long a growing bacterial population takes to reach a quorum-sensing threshold"
skills: ["1", "4", "5", "6"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Logarithms to base 2 help in Question 7 (log₂x = log x ÷ log 2). All data sets and named compounds are fictional unless stated"
related: ["mb-ap-bio-4.3-study-guide", "mb-ap-bio-4.3-revision-notes", "mb-ap-bio-4.3-checklist"]
next: "mb-ap-bio-4.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working or reasoning."
  - "For any change, find where it acts, decide whether that component is now more or less active, then follow the effect downstream."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. A calculator is assumed. Keep full calculator values until the last step, then round to the precision of the data. All data sets and named compounds (drug B, compound A, compound W, analogue Z) are fictional.

## Question 1 (multiple choice · foundation)

Which of these responses to a signal **requires** a change in gene expression?

- (A) Within 10 seconds of a hormone binding, a kinase phosphorylates an enzyme that is already present, and the enzyme becomes active.
- (B) A ligand binds a ligand-gated channel, which opens and lets sodium ions into the cell.
- (C) A hormone–receptor complex binds DNA, and over 6 hours the amount of an enzyme in the cell rises tenfold.
- (D) The concentration of cAMP in the cytoplasm rises after a receptor is activated.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The hormone–receptor complex is acting as a transcription factor. The rise in the **amount** of enzyme over hours means new mRNA and new protein have been made.

- (A) changes the activity of a protein that already exists. That needs no new gene expression, which is why it is so fast.
- (B) is also a change in an existing protein: the channel changes shape and opens.
- (D) is a step inside the pathway (a second messenger), not a response that needs new proteins.
</details>

## Question 2 (multiple choice · core)

Cholera toxin enters cells lining the small intestine and modifies a G protein so that it can no longer switch itself off. In these cells the G protein normally activates the enzyme that makes cAMP. Which outcome is expected in infected cells?

- (A) cAMP stays high even when no signal is bound to the receptor, so the cells keep pumping out chloride ions, and water follows.
- (B) cAMP falls to zero, so the cells stop secreting ions and water.
- (C) The receptor can no longer bind its normal signal, so the pathway is switched off.
- (D) The cells respond normally, because the toxin only affects the G protein when the signal is present.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** A G protein stuck in its active state keeps the cAMP-making enzyme switched on. Everything downstream stays on with no signal at all. The cells keep secreting chloride, water follows by osmosis, and the result is severe watery diarrhoea.

- (B) treats the toxin as an inhibitor. The question says the G protein cannot switch **off**, which is a gain of function.
- (C) puts the effect at the receptor. The toxin acts on the G protein, downstream of the receptor; the receptor is unchanged.
- (D) ignores the point of "cannot switch itself off": once active, the G protein stays active whether or not signal is present.
</details>

## Question 3 (multiple choice · core)

Cells from a patient do not respond to a hormone. Researchers find that a radioactively labelled form of the hormone binds to the patient's cells exactly as well as it binds to normal cells. Which explanation best fits the evidence?

- (A) A mutation in the intracellular domain of the receptor stops it from activating the next protein in the pathway.
- (B) A mutation in the ligand-binding domain stops the hormone from binding.
- (C) The patient's cells make too much of the hormone.
- (D) A mutation keeps the receptor permanently in its active shape.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Binding is normal, so the ligand-binding domain works. The fault must be at or after the step where the receptor passes the signal on. A change in the intracellular domain fits: the hormone binds, but the shape change is not passed to the next component, so there is no response.

- (B) is ruled out by the evidence: the hormone binds normally.
- (C) would not stop cells responding; the problem is that they do not respond to the hormone that is there.
- (D) would give a response all the time, even without hormone. The cells give no response.
</details>

## Question 4 (data analysis · core)

Epinephrine raises the beating rate of heart muscle cells through a receptor, a G protein and the enzyme that makes cAMP. A student grew beating heart muscle cells in dishes and measured the mean beating rate (4 dishes per treatment). Compound A switches on the cAMP-making enzyme directly.

| Treatment | Mean rate / beats min⁻¹ |
|---|---|
| None | 60 |
| Epinephrine | 96 |
| Drug B | 59 |
| Drug B + epinephrine | 64 |
| Compound A | 94 |
| Drug B + compound A | 93 |

(a) Calculate the percentage increase in rate caused by epinephrine.
(b) Calculate the fraction of the epinephrine effect that drug B removes.
(c) Use the data to justify a claim about where in the pathway drug B acts.
(d) Predict the effect of drug B on a person's heart rate during a sudden fright, and explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Increase = 96 − 60 = 36 beats min⁻¹. Percentage increase = 36 ÷ 60 × 100 = **60%**. (Dividing by 96 instead gives 37.5%, which uses the wrong baseline.)

**(b)** With drug B, the increase is only 64 − 60 = 4 beats min⁻¹. Fraction removed = 1 − 4 ÷ 36 = 1 − 0.111 = **0.89** (about 89%).

**(c)** **Claim:** drug B acts upstream of the cAMP-making enzyme, most likely by blocking the epinephrine receptor. **Evidence:** drug B almost abolishes the response to epinephrine (64 against 96), but not the response to compound A (93 against 94). **Reasoning:** compound A switches on the pathway at the enzyme, beyond the receptor and G protein. Because the pathway still works from the enzyme onwards when drug B is present, drug B must block a step before it. Alone it leaves the resting rate unchanged (59), so it blocks rather than activates.

**(d)** During a fright, epinephrine is released into the blood. With drug B, less epinephrine can act on heart cells, so heart rate rises **much less** than normal.

| Point | What earns it |
|---|---|
| 1 | 60% increase, with working |
| 1 | about 0.89 (89%) of the effect removed |
| 1 | Claim that B acts before the cAMP-making enzyme (receptor or G protein) |
| 1 | Evidence from compound A results used to justify the claim |
| 1 | Prediction of a smaller rise in heart rate, linked to blocked epinephrine signalling |

Accept "B acts at the receptor or the G protein" for the claim; these data cannot separate the two.
</details>

## Question 5 (constructed response · core)

In a chick embryo, the foot starts as a paddle. Cells in the tissue between the future toes receive a signal and undergo apoptosis. A researcher places a tiny bead soaked in compound W, which blocks the receptor for this signal, between two toes of one foot of each embryo.

(a) Describe what apoptosis is.
(b) Predict the appearance of the treated foot at hatching, and explain.
(c) Describe a suitable control for this experiment.
(d) State the kind of cellular response the signal normally causes, and explain how it changes the phenotype of the foot.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Apoptosis is **programmed cell death**: a signal activates enzymes inside the cell that take it apart in an orderly way. The pieces are removed by other cells without damaging the tissue around them.

**(b)** The toes on either side of the bead should stay **joined by webbing**. Compound W stops the signal binding its receptor, so the pathway is not switched on, the death enzymes are not activated and the cells between those toes survive.

**(c)** A bead soaked in the **solvent only** (no compound W), placed in the same position in other embryos (or in the other foot). This shows that the bead and the solvent alone do not cause webbing.

**(d)** The signal causes **apoptosis**. Removing the cells between the digits changes the shape of the foot from a paddle to separate toes, so the phenotype depends on this response.

| Point | What earns it |
|---|---|
| 1 | Apoptosis as programmed, ordered cell death |
| 1 | Prediction: webbing between the treated toes |
| 1 | Explanation: blocked receptor → no signal transduction → no apoptosis |
| 1 | Solvent-only bead control with a reason |
| 1 | Apoptosis linked to the change in foot shape |
</details>

## Question 6 (constructed response · stretch)

Yeast cells of one mating type respond to a pheromone released by the other mating type. The response is measured as expression of a mating gene (arbitrary units). Analogue Z is a modified pheromone molecule with one chemical group changed.

| Treatment of normal cells | Mating gene expression / a.u. |
|---|---|
| None | 5 |
| Pheromone (low concentration) | 100 |
| Analogue Z alone | 4 |
| Pheromone (low concentration) + analogue Z | 30 |
| Pheromone (10 × higher concentration) + analogue Z | 88 |

(a) Describe the effect of analogue Z, using numbers.
(b) Propose an explanation for the results that refers to the ligand-binding domain of the receptor.
(c) Explain why raising the pheromone concentration restores most of the response.
(d) A mutant strain has a receptor whose intracellular domain is stuck in the active shape. Predict its mating gene expression with analogue Z alone, and justify your prediction.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Analogue Z alone does not switch on the gene (4, the same as the untreated 5). It reduces the response to the low pheromone concentration from 100 to 30, a 70% fall.

**(b)** Analogue Z is similar enough in shape to the pheromone to **bind the ligand-binding domain**, but its changed group means binding does **not** cause the shape change that activates the receptor. While Z occupies a receptor, the pheromone cannot bind it. Fewer receptors are activated, so less signal passes downstream to the transcription factor and less mating gene is expressed.

**(c)** Pheromone and Z **compete** for the same binding sites. At a 10 times higher concentration, pheromone molecules occupy most receptors before Z can, so more receptors are activated and expression returns towards normal (88).

**(d)** Expression should be **high** (similar to fully stimulated cells), even with analogue Z alone. The receptor is active whatever is bound outside, so the pathway is on from the intracellular domain onwards. Z acts only at the binding site, upstream of the fault, so it cannot switch the pathway off.

| Point | What earns it |
|---|---|
| 1 | Describes no activation by Z and the drop from 100 to 30 |
| 1 | Z binds the ligand-binding domain but does not activate the receptor |
| 1 | Fewer active receptors → less downstream signalling → less gene expression |
| 1 | Competition explains the recovery at high pheromone concentration |
| 1 | Predicts high expression in the mutant, because Z acts upstream of the stuck-on domain |
</details>

## Question 7 (calculation · stretch)

A quorum-sensing bacterium switches on a set of genes when its population reaches 1.6 × 10⁸ cells mL⁻¹. A culture starts at 5.0 × 10⁶ cells mL⁻¹ and doubles every 30 minutes. Assume growth continues at this rate and each cell releases autoinducer at a steady rate.

(a) Calculate how long the culture takes to reach the threshold.
(b) A mutant releases 4 times as much autoinducer per cell, so it reaches the same autoinducer concentration at one quarter of the cell density. How much sooner does the mutant switch on the genes?
(c) Explain why switching genes on only at high density can benefit the bacteria.

<details>
<summary>Worked solution</summary>

**(a)** Number of times the population must double: 1.6 × 10⁸ ÷ 5.0 × 10⁶ = 32 = 2⁵, so **5 doublings**. Time = 5 × 30 min = **150 min** (2.5 hours).

**(b)** Mutant threshold density = 1.6 × 10⁸ ÷ 4 = 4.0 × 10⁷ cells mL⁻¹. Ratio 4.0 × 10⁷ ÷ 5.0 × 10⁶ = 8 = 2³, so 3 doublings = 90 min. The mutant switches on **60 min sooner**.

**(c)** Some products only work when many cells make them together, such as light bright enough to be seen. Made by a few cells, they would waste energy with no benefit.

Suggested mark points (3): 1 for 150 min from 5 doublings; 1 for 60 min sooner with working; 1 for a reason linked to products being useful only in large numbers.

Common error: dividing 1.6 × 10⁸ by 5.0 × 10⁶ and treating the answer (32) as the number of doublings gives 960 min. The population doubles, so count powers of 2.
</details>

## How did you do?

- **Q1 wrong:** re-read "Four kinds of cellular response" in the [study guide](/advanced-course-resources/biology/4-3-signal-transduction-pathways-study-guide/).
- **Q2, Q3 or Q6 wrong:** re-read "When part of the pathway changes" and "When chemicals interfere", and look again at Figure 1. Decide whether the component is now more or less active, then follow the effect downstream.
- **Q4 incomplete:** rework Worked example 2; a treatment that bypasses a block shows that the block is upstream.
- **Q5 or Q7 incomplete:** re-read "Apoptosis" and Worked example 1 on quorum sensing.

Then tick off the [topic checklist](/advanced-course-resources/biology/4-3-signal-transduction-pathways-checklist/).
