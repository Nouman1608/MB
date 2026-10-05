---
resourceId: "mb-ap-bio-7.5-practice"
title: "Hardy–Weinberg Equilibrium: Practice Questions (Biology 7.5)"
description: "Seven original Marlbridge practice questions on Hardy–Weinberg conditions, allele and genotype frequencies, allele-frequency graphs and chi-square tests, with worked solutions and suggested mark points."
course: "biology"
unit: 7
topics: ["7.5"]
resourceType: "practice-questions"
prerequisites:
  - "The meaning of p, q, p², 2pq and q², and the five Hardy–Weinberg conditions"
prerequisiteResources: ["mb-ap-bio-7.5-study-guide"]
learningObjectives:
  - "Calculate allele and genotype frequencies with the Hardy–Weinberg equations"
  - "Identify which condition is broken in a described population"
  - "Describe and interpret graphs of allele frequency over generations"
  - "Use chi-square to test observed genotype numbers against a Hardy–Weinberg prediction"
skills: ["1", "3", "4", "5", "6"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Chi-square critical values at p = 0.05: 3.84 (1 degree of freedom), 5.99 (2), 7.81 (3). Give frequencies to 2 or 3 decimal places"
related: ["mb-ap-bio-7.5-study-guide", "mb-ap-bio-7.5-revision-notes", "mb-ap-bio-7.5-checklist"]
next: "mb-ap-bio-7.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working or reasoning."
  - "Count alleles whenever every genotype is known; use √(q²) only when you assume equilibrium."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Equations: p + q = 1; p² + 2pq + q² = 1; χ² = Σ (o − e)² ÷ e. Chi-square critical values at p = 0.05: 3.84 (1 df), 5.99 (2 df), 7.81 (3 df). A calculator is assumed. All populations and data sets are fictional.

## Question 1 (multiple choice · foundation)

In a large, randomly mating population of a fictional desert mouse, 9% of individuals have a recessive grey coat. Assuming Hardy–Weinberg equilibrium, what is the expected frequency of heterozygous carriers?

- (A) 0.09
- (B) 0.21
- (C) 0.42
- (D) 0.49

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** q² = 0.09, so q = √0.09 = 0.3 and p = 1 − 0.3 = 0.7. Carriers: 2pq = 2 × 0.7 × 0.3 = 0.42.

- (A) is q², the frequency of grey mice, not of carriers.
- (B) is pq. It forgets that a heterozygote can form in two ways (A egg with a sperm, or a egg with A sperm).
- (D) is p², the frequency of homozygous dominant mice.
</details>

## Question 2 (multiple choice · core)

A large population of wild clover grows in a meadow. Each summer, bees carry pollen into the meadow from a neighbouring farm field of a cultivated clover with different alleles. Which Hardy–Weinberg condition is most directly broken?

- (A) Large population size
- (B) No migration (no gene flow)
- (C) No new mutations
- (D) No natural selection

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Pollen carries alleles. Pollen arriving from another population adds alleles to the meadow population, which is gene flow, the same effect as individuals migrating in.

- (A) The population is described as large, so drift is not the main issue here.
- (C) No new alleles are being created by changes in DNA; existing alleles are being brought in from outside.
- (D) Nothing in the description says some plants survive or reproduce better than others because of their alleles.
</details>

## Question 3 (multiple choice · core)

In a fictional snapdragon population, flower colour shows incomplete dominance. A survey finds 72 red (RR), 96 pink (RW) and 32 white (WW) plants. What is the frequency of the W allele?

- (A) 0.16
- (B) 0.40
- (C) 0.48
- (D) 0.64

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Every genotype can be seen, so count alleles. Total plants = 200, so 400 alleles. W alleles = (2 × 32) + 96 = 160. q = 160 ÷ 400 = 0.40.

- (A) 32 ÷ 200 = 0.16 is the frequency of white **plants** (q² here), not of the allele.
- (C) 96 ÷ 200 = 0.48 is the frequency of pink plants.
- (D) (96 + 32) ÷ 200 = 0.64 is the fraction of plants carrying **at least one** W. It counts each WW plant's two alleles as one and ignores the R alleles in pink plants.
</details>

## Question 4 (graph · core)

The graph shows the frequency of allele A, a gene with two alleles, in three fictional populations of the same beetle species over 10 generations.

| Generation | 0 | 2 | 4 | 6 | 8 | 10 |
|---|---|---|---|---|---|---|
| Population 1 (about 5,000 beetles) | 0.50 | 0.50 | 0.51 | 0.50 | 0.49 | 0.50 |
| Population 2 (about 5,000 beetles) | 0.50 | 0.58 | 0.66 | 0.73 | 0.79 | 0.84 |
| Population 3 (about 20 beetles) | 0.50 | 0.40 | 0.55 | 0.35 | 0.20 | 0.25 |

<figure>
<svg viewBox="0 0 600 330" role="img" aria-labelledby="q4-title q4-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="q4-title">Frequency of allele A over 10 generations in three beetle populations</title>
<desc id="q4-desc">Line graph of allele frequency, 0 to 1, against generation, 0 to 10. All three populations start at 0.50. Population 1, solid line with circle markers, stays flat between 0.49 and 0.51. Population 2, dashed line with square markers, rises steadily to 0.84. Population 3, dotted line with triangle markers, zigzags: 0.40, 0.55, 0.35, 0.20 and finally 0.25.</desc>
<rect x="0" y="0" width="600" height="330" fill="#ffffff"/>
<line x1="70" y1="170" x2="430" y2="170" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="70" y1="60" x2="430" y2="60" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="70" y1="280" x2="440" y2="280" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="280" x2="70" y2="50" stroke="#1d2b44" stroke-width="2"/>
<text x="70" y="298" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<text x="142" y="298" text-anchor="middle" font-size="12" fill="#1d2b44">2</text>
<text x="214" y="298" text-anchor="middle" font-size="12" fill="#1d2b44">4</text>
<text x="286" y="298" text-anchor="middle" font-size="12" fill="#1d2b44">6</text>
<text x="358" y="298" text-anchor="middle" font-size="12" fill="#1d2b44">8</text>
<text x="430" y="298" text-anchor="middle" font-size="12" fill="#1d2b44">10</text>
<text x="62" y="284" text-anchor="end" font-size="12" fill="#1d2b44">0</text>
<text x="62" y="174" text-anchor="end" font-size="12" fill="#1d2b44">0.5</text>
<text x="62" y="64" text-anchor="end" font-size="12" fill="#1d2b44">1.0</text>
<text x="250" y="322" text-anchor="middle" font-size="14" fill="#1d2b44">Generation</text>
<text x="20" y="170" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 20 170)">Frequency of allele A</text>
<polyline points="70,170 142,170 214,168 286,170 358,172 430,170" fill="none" stroke="#1d2b44" stroke-width="3"/>
<polyline points="70,170 142,152 214,135 286,119 358,106 430,95" fill="none" stroke="#1d2b44" stroke-width="3" stroke-dasharray="9 6"/>
<polyline points="70,170 142,192 214,159 286,203 358,236 430,225" fill="none" stroke="#1d2b44" stroke-width="3" stroke-dasharray="2 5"/>
<circle cx="214" cy="168" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="358" cy="172" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="209" y="130" width="10" height="10" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="353" y="101" width="10" height="10" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<polygon points="214,153 208,164 220,164" fill="#e8ecf3" stroke="#1d2b44" stroke-width="2"/>
<polygon points="358,230 352,241 364,241" fill="#e8ecf3" stroke="#1d2b44" stroke-width="2"/>
<text x="440" y="99" font-size="13" fill="#1d2b44">Pop. 2 (dashed, □)</text>
<text x="440" y="174" font-size="13" fill="#1d2b44">Pop. 1 (solid, ○)</text>
<text x="440" y="229" font-size="13" fill="#1d2b44">Pop. 3 (dotted, △)</text>
</svg>
<figcaption>Question 4 graph. The table above gives the same data.</figcaption>
</figure>

(a) Describe the change in the frequency of allele A in each population, using values from the data.
(b) For populations 2 and 3, identify the Hardy–Weinberg condition most likely broken, and justify each answer from the data.
(c) Assuming random mating, calculate the expected frequency of heterozygotes in population 2 at generation 0 and at generation 10.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Population 1: stays at about 0.50 throughout (never outside 0.49–0.51). Population 2: rises steadily every interval, from 0.50 to 0.84, a gain of 0.34. Population 3: changes irregularly, falling to 0.40, rising to 0.55, then falling to 0.20 and ending at 0.25, a net fall of 0.25.

**(b)** Population 2: **no natural selection** is broken. The change is in one direction every generation in a large population, which fits allele A giving a survival or reproductive advantage. (Steady gene flow from a population rich in A is an acceptable alternative if stated with reasoning.) Population 3: **large population size** is broken. With only about 20 beetles, chance events in who breeds cause large, random, up-and-down changes: genetic drift. The direction changes several times, which selection would not normally produce.

**(c)** Generation 0: 2pq = 2 × 0.50 × 0.50 = **0.50**. Generation 10: p = 0.84, q = 0.16, so 2pq = 2 × 0.84 × 0.16 = **0.27** (0.2688).

| Point | What earns it |
|---|---|
| 1 | Describes all three patterns with at least one quoted value each |
| 1 | Population 2: selection (or gene flow), justified by steady one-way change in a large population |
| 1 | Population 3: small size / drift, justified by irregular changes of direction |
| 1 | Both 2pq values correct (0.50 and 0.27) |

Do not award (b) for population 3 if the answer says "selection against A": the reversals in direction do not fit that.
</details>

## Question 5 (constructed response · core)

A fictional grain-store beetle has two alleles, F and S, for a digestive enzyme; all three genotypes can be identified on a gel. In the parent generation, p(F) = 0.50. The store is then sprayed with a new pesticide. A sample of 400 offspring gives: FF 130, FS 190, SS 80.

(a) State the null hypothesis.
(b) Calculate the expected numbers and the chi-square value.
(c) State the degrees of freedom, and whether you reject the null hypothesis. Explain what this suggests.
(d) Calculate the frequency of F in the offspring sample.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The offspring are in Hardy–Weinberg equilibrium with p(F) = 0.50, so any difference between observed and expected genotype numbers is due to chance.

**(b)** Expected: FF = 0.25 × 400 = 100; FS = 0.50 × 400 = 200; SS = 0.25 × 400 = 100.
χ² = (130 − 100)² ÷ 100 + (190 − 200)² ÷ 200 + (80 − 100)² ÷ 100 = 9.0 + 0.5 + 4.0 = **13.5**.

**(c)** The expected numbers come from the parents' known frequency, so df = 3 − 1 = **2**; critical value 5.99. 13.5 > 5.99, so **reject** the null hypothesis. The difference is too large to be chance alone. There are more FF and fewer SS beetles than predicted, which suggests that at least one condition is broken, most likely natural selection favouring F (for example if the F enzyme helps break down the pesticide). The test alone does not identify the cause.

**(d)** p(F) = (2 × 130 + 190) ÷ 800 = 450 ÷ 800 = **0.5625 ≈ 0.56**. It has risen from 0.50.

| Point | What earns it |
|---|---|
| 1 | Null hypothesis states no difference beyond chance from the equilibrium prediction |
| 1 | Expected numbers 100, 200, 100 |
| 1 | χ² = 13.5 |
| 1 | df = 2, compared with 5.99, null rejected |
| 1 | Suggests a condition is broken, linked to the excess of FF / shortage of SS; p(F) ≈ 0.56 |

The conclusion must say the data **suggest** a cause; do not award the last point for "proves selection".
</details>

## Question 6 (constructed response · stretch)

A fictional wild plant usually fertilises itself. A sample of 400 plants gives AA 150, Aa 100, aa 150.

(a) Calculate p and q.
(b) Calculate the genotype numbers expected under Hardy–Weinberg equilibrium and compare them with the observed numbers.
(c) Explain how self-fertilisation produces this pattern.
(d) A student says: "This population is not in equilibrium, so its allele frequencies must be changing." Evaluate the claim.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** A alleles = (2 × 150) + 100 = 400 out of 800, so p = **0.50** and q = **0.50**.

**(b)** Expected: AA = 0.25 × 400 = 100; Aa = 0.50 × 400 = 200; aa = 100. Observed heterozygotes are 100, half the expected 200 (frequency 0.25 instead of 0.50), and each homozygote is higher (150 instead of 100).

**(c)** Self-fertilisation breaks **random mating**. A homozygote that fertilises itself produces only offspring like itself. A heterozygote that fertilises itself produces 1/4 AA, 1/2 Aa and 1/4 aa, so only half its offspring are heterozygous. Each generation of selfing therefore halves the heterozygote frequency (for example 0.50 → 0.25 → 0.125), and the lost heterozygotes are split equally between the two homozygotes.

**(d)** The claim is **not justified**. Selfing changes how alleles are combined into genotypes, but every A and a allele is still passed on, so selfing alone does not change p or q. Being out of equilibrium shows that at least one condition is broken, not that allele frequencies are changing. To show evolution you would need allele frequencies from at least two generations.

| Point | What earns it |
|---|---|
| 1 | p = q = 0.50 by counting alleles |
| 1 | Expected 100 : 200 : 100, with the heterozygote deficit identified |
| 1 | Random mating named as the broken condition, with the 1/4 : 1/2 : 1/4 offspring of a selfed heterozygote |
| 1 | Explains that genotype frequencies change but allele frequencies do not under selfing alone |
| 1 | Concludes the claim is not supported and states what evidence would be needed |
</details>

## Question 7 (calculation · stretch)

In a large fictional seabird colony, 1 in 400 chicks inherits a recessive condition (genotype bb) and dies before fledging. Assume Hardy–Weinberg equilibrium among newly hatched chicks.

(a) Calculate q, p and the frequency of carriers.
(b) In a hatch of 20,000 chicks, how many carriers and how many affected chicks are expected?
(c) Explain why selection removes the b allele only very slowly from this population.
(d) Suppose the colony actually has a lot of mating between close relatives. Explain whether the value of q from (a) would be too high or too low.

<details>
<summary>Worked solution</summary>

**(a)** q² = 1 ÷ 400 = 0.0025, so q = √0.0025 = **0.05**; p = **0.95**. Carriers: 2pq = 2 × 0.95 × 0.05 = **0.095** (9.5%).

**(b)** Carriers: 0.095 × 20,000 = **1,900**. Affected: 0.0025 × 20,000 = **50**. There are 38 carriers for every affected chick (1900 ÷ 50 = 38).

**(c)** Selection acts only on bb chicks, because carriers look and survive like BB chicks. Per chick, carriers hold 0.095 b alleles (one each) and affected chicks hold 2 × 0.0025 = 0.005. So 0.095 ÷ (0.095 + 0.005) = 95% of b alleles are in carriers, hidden from selection. Each generation only a small share of b alleles is removed.

**(d)** Inbreeding raises the frequency of homozygotes, including bb, above q². So the observed 1 in 400 would be higher than the true q² for this allele frequency, and √(1/400) would give a q that is **too high**. This is why √(q²) should only be used when equilibrium can be assumed.

Suggested mark points (4): 1 for q = 0.05 and 2pq = 0.095; 1 for 1,900 and 50; 1 for linking slow removal to most b alleles being hidden in heterozygotes; 1 for "too high", with inbreeding raising the bb frequency.

Common errors: using q = 1/400 instead of its square root gives q = 0.0025 and a carrier frequency of about 0.005, far too low; using pq gives 0.0475.
</details>

## How did you do?

- **Q1 or Q7 wrong:** re-read "From alleles to genotypes" and Worked example 2 in the [study guide](/advanced-course-resources/biology/7-5-hardy-weinberg-equilibrium-study-guide/); check you took the square root of q² and used 2pq.
- **Q3 or Q6 wrong:** rework Worked example 1; count alleles, not individuals.
- **Q2 or Q4 wrong:** re-read "The five conditions" and "Graphs of allele frequency over time".
- **Q5 wrong:** rework Worked example 3, especially how to choose the degrees of freedom.

Then tick off the [topic checklist](/advanced-course-resources/biology/7-5-hardy-weinberg-equilibrium-checklist/).
