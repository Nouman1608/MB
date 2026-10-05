---
resourceId: "mb-ap-bio-6.8-practice"
title: "Biotechnology: Practice Questions (Biology 6.8)"
description: "Seven original Marlbridge practice questions on gel electrophoresis, PCR, transformation efficiency, kinship testing, plate controls and sequence comparison, with worked solutions and suggested mark points."
course: "biology"
unit: 6
topics: ["6.8"]
resourceType: "practice-questions"
prerequisites:
  - "What gel electrophoresis, PCR, transformation and sequencing each do"
prerequisiteResources: ["mb-ap-bio-6.8-study-guide"]
learningObjectives:
  - "Interpret gels and DNA band patterns to identify or exclude individuals"
  - "Calculate PCR copy numbers and transformation efficiency"
  - "Predict and explain growth on transformation plates, including controls"
  - "Use sequence differences as evidence about relationships between species"
skills: ["1", "3", "4", "5", "6"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Powers of 2 and logarithms are useful. Assume 100% PCR efficiency unless told otherwise. Round to the precision of the data"
related: ["mb-ap-bio-6.8-study-guide", "mb-ap-bio-6.8-revision-notes", "mb-ap-bio-6.8-checklist"]
next: "mb-ap-bio-6.8-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working or reasoning."
  - "Link every result to the principle behind it: charge and size, base pairing, selection, or shared ancestry."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Useful relationships: N = N₀ × 2ⁿ for PCR at 100% efficiency; transformation efficiency = colonies ÷ mass of DNA spread (µg). A calculator is assumed. All organisms, plasmids, people and data sets are fictional.

## Question 1 (multiple choice · foundation)

A DNA sample contains fragments of 300 bp, 1200 bp and 4000 bp. After gel electrophoresis, which fragment is closest to the wells, and why?

- (A) The 300 bp fragment, because it carries the least charge and is pulled most weakly.
- (B) The 4000 bp fragment, because longer fragments are held back more by the pores of the gel.
- (C) The 4000 bp fragment, because it carries the most negative charge and is repelled by the positive electrode.
- (D) All three are the same distance, because all DNA has the same charge per unit length.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** All fragments move toward the positive electrode. Charge per unit length is about the same, so the pull per unit length is similar; the gel's mesh slows long fragments most. The 4000 bp fragment stays closest to the wells.

- (A) The 300 bp fragment has less total charge but also much less length to drag through the gel. It travels farthest.
- (C) A negative fragment is **attracted** to the positive electrode, not repelled. And more charge does not mean it moves less.
- (D) Equal charge per length is true, which is why separation depends on size; the gel is what separates them.
</details>

## Question 2 (multiple choice · foundation)

During a PCR cycle, the mixture is cooled from about 95 °C to about 55 °C. What is the main purpose of this step?

- (A) To let the primers base-pair with their complementary sequences on the separated strands.
- (B) To let the DNA polymerase add nucleotides at its best working temperature.
- (C) To let the two original template strands pair up again so that they can be copied.
- (D) To denature the DNA polymerase so that it stops making copies.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** At 95 °C the strands separate. Cooling to about 55 °C lets the short primers form hydrogen bonds with matching sequences at each end of the target. This is annealing.

- (B) describes extension, which is usually done at about 72 °C.
- (C) If the template strands paired again, primers could not bind and nothing would be copied. The many primer molecules bind first.
- (D) The polymerase is chosen to be heat-stable and works through every cycle.
</details>

## Question 3 (multiple choice · core)

A student mixes 10 µL of plasmid solution (0.010 µg µL⁻¹) with bacteria, then adds broth to a total volume of 500 µL. She spreads 100 µL on an antibiotic plate and counts 156 colonies. What is the transformation efficiency?

- (A) 3.12 transformants per µg
- (B) 7.8 transformants per µg
- (C) 1.56 × 10³ transformants per µg
- (D) 7.8 × 10³ transformants per µg

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Total DNA = 10 µL × 0.010 µg µL⁻¹ = 0.10 µg. Fraction spread = 100 ÷ 500 = 0.20, so DNA on the plate = 0.10 × 0.20 = 0.020 µg. Efficiency = 156 ÷ 0.020 = 7800 = 7.8 × 10³ transformants per µg.

- (A) multiplies colonies by DNA (156 × 0.020) instead of dividing.
- (B) is the value per **nanogram** (0.020 µg = 20 ng; 156 ÷ 20 = 7.8), labelled with the wrong unit.
- (C) uses all 0.10 µg of DNA, but only a fifth of the mixture was spread.
</details>

## Question 4 (calculation · core)

A forensic sample contains 5 copies of a target DNA region.

(a) Calculate the number of copies after 28 cycles of PCR, assuming 100% efficiency.
(b) Calculate the minimum number of cycles needed to reach at least 1 × 10⁸ copies.
(c) Explain why the DNA polymerase used in PCR must be heat-stable.
(d) In a different sample, a mutation has changed several bases in the sequence where one primer binds. Predict the effect on the PCR, and explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** N = 5 × 2²⁸ = 5 × 268 435 456 = 1 342 177 280 ≈ **1.34 × 10⁹** copies.

**(b)** Need 2ⁿ ≥ 1 × 10⁸ ÷ 5 = 2 × 10⁷. log₂(2 × 10⁷) ≈ 24.3, so **25 cycles** (round up). Check: 5 × 2²⁴ ≈ 8.4 × 10⁷ (too few); 5 × 2²⁵ ≈ 1.7 × 10⁸ (enough).

**(c)** Every cycle heats the mixture to about 95 °C to separate the strands. An ordinary polymerase would denature and stop working after the first cycle, so it would have to be added again every cycle. A heat-stable enzyme survives repeated heating.

**(d)** The primer can no longer base-pair well with its binding site, because the sequences are no longer complementary. Little or no copying starts from that end, so little or no product forms (no band, or a faint band, on a gel). The other primer alone can only make single-stranded copies that increase slowly, not exponentially.

| Point | What earns it |
|---|---|
| 1 | 1.34 × 10⁹ copies |
| 1 | 25 cycles, rounded up with a check or log working |
| 1 | High denaturing temperature would denature an ordinary enzyme |
| 1 | Primer cannot anneal (not complementary) so the target is not amplified |

Accept "about 1.3 × 10⁹" in (a).
</details>

## Question 5 (data analysis · core)

DNA from a mother, her child and two men was cut with restriction enzymes and run on a gel. Band sizes (bp) are:

| Person | Bands / bp |
|---|---|
| Mother | 600, 380 |
| Child | 600, 450, 380, 250 |
| Man 1 | 450, 300 |
| Man 2 | 520, 450, 250 |

(a) Identify the child's bands that must have come from the biological father.
(b) Can either man be excluded as the biological father? Explain.
(c) Evaluate the claim: "These results prove that Man 2 is the father."

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** The child's 600 and 380 bp bands are present in the mother. The **450 and 250 bp** bands are not, so they must have come from the father.

**(b)** **Man 1 is excluded**: he has the 450 bp band but not the 250 bp band, so he could not have given the child that band. Man 2 has both 450 and 250 bp bands, so he **cannot be excluded**.

**(c)** The claim is too strong. The results are **consistent with** Man 2 being the father, but other men could also carry 450 and 250 bp bands, especially relatives. Only a few bands were compared. Testing many more DNA regions would make a chance match far less likely. (Man 2's 520 bp band is not in the child, which is expected: a child inherits only one of each pair of a parent's alleles.)

| Point | What earns it |
|---|---|
| 1 | 450 and 250 bp identified as paternal |
| 1 | Man 1 excluded, with the missing 250 bp band as evidence |
| 1 | Man 2 not excluded, but a match supports rather than proves |
| 1 | Suggests more regions (or explains why 520 bp in Man 2 does not count against him) |
</details>

## Question 6 (experimental design · core)

A student transforms bacteria with plasmid pQ, which carries a kanamycin-resistance gene and a gene for a blue pigment protein. Bacteria without the plasmid are white and killed by kanamycin. She spreads equal volumes on four plates:

| Plate | Bacteria | Medium |
|---|---|---|
| A | no plasmid added | nutrient agar |
| B | no plasmid added | nutrient agar + kanamycin |
| C | plasmid added | nutrient agar |
| D | plasmid added | nutrient agar + kanamycin |

(a) Predict the growth on each plate.
(b) Explain the purpose of plates A and B.
(c) Explain why plate D, not plate C, shows that transformation happened.
(d) Predict the colour of the colonies on plate D, and explain why bacteria can make a protein coded by a gene from another organism.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** A: a **lawn** (dense, continuous growth) of white bacteria. B: **no growth**. C: a **lawn**, almost all white. D: a **small number of separate colonies**, blue.

**(b)** Plate A shows that the bacteria were alive and able to grow. Plate B shows that kanamycin kills bacteria without the plasmid, so any growth on D cannot be explained by naturally resistant cells.

**(c)** On plate C, both transformed and untransformed cells grow, and the few transformed cells are hidden among millions of others. On plate D, kanamycin kills every cell that did not take up the plasmid, so each colony must have grown from a transformed cell.

**(d)** **Blue**: each colony comes from a cell carrying the plasmid, which includes the pigment gene. The genetic code is (almost) universal, so the bacterial cell's RNA polymerase and ribosomes can transcribe and translate the gene into the same amino acid sequence.

| Point | What earns it |
|---|---|
| 1 | All four predictions correct |
| 1 | Purpose of A (cells viable) **and** B (antibiotic works) |
| 1 | D shows transformation because only transformed cells survive kanamycin |
| 1 | Blue colonies, with the universal genetic code |

Accept "a few blue colonies may be hard to see on C" for plate C if the lawn is described.
</details>

## Question 7 (data analysis · stretch)

A 24-base region of the same gene was sequenced in four fictional species, W, X, Y and Z.

| Species | Sequence (5′→3′) |
|---|---|
| W | ATGCCG TTAGCA AGTCTG GCATAC |
| X | ATGCCA TTAGCA AGTCTA GCATAC |
| Y | ATACCA TTAACA AGCCTA GCATAC |
| Z | ACACCA TCAACA GGCCTA ACATAC |

(a) Count the number of positions at which X, Y and Z each differ from W, and express each as a percentage identity with W.
(b) Which species is most closely related to W? Justify your answer.
(c) The two differences between X and W are also found in Y and Z. Suggest an explanation.
(d) State one limitation of drawing conclusions from these data.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** X differs at **2** positions: identity = 22 ÷ 24 = **91.7%**. Y differs at **5**: 19 ÷ 24 = **79.2%**. Z differs at **9**: 15 ÷ 24 = **62.5%**.

**(b)** **X**, because it has the fewest differences from W. Mutations build up over time in separated lineages, so fewer differences suggest a more recent common ancestor.

**(c)** These two changes probably arose once, by mutation, in a common ancestor of X, Y and Z after its lineage split from W's, and were inherited by all three. (They are less likely to have arisen independently three times.)

**(d)** Any one: only 24 bases of one gene were compared, so chance could affect the counts; different genes can change at different rates; the same base can change more than once, hiding some differences; sequencing errors are possible.

| Point | What earns it |
|---|---|
| 1 | All three counts correct |
| 1 | All three percentages correct (or carried forward) |
| 1 | X chosen, with reasoning about fewer differences and recent common ancestry |
| 1 | Shared changes explained by inheritance from a common ancestor **and** a valid limitation |
</details>

## How did you do?

- **Q1 or Q2 wrong:** re-read "Gel electrophoresis" and "PCR" in the [study guide](/advanced-course-resources/biology/6-8-biotechnology-study-guide/), with Figures 1 and 2.
- **Q3 or Q4 calculations wrong:** rework Worked example 1; check you used only the DNA actually spread, and rounded cycles up.
- **Q5 or Q7 incomplete:** re-read "DNA sequencing and DNA fingerprints" and Worked example 2.
- **Q6 incomplete:** re-read "Bacterial transformation and gene cloning".

Then tick off the [topic checklist](/advanced-course-resources/biology/6-8-biotechnology-checklist/).
