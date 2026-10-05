---
resourceId: "mb-ap-bio-1.7-practice"
title: "Proteins: Practice Questions (Biology 1.7)"
description: "Seven original Marlbridge practice questions on peptide bonds, R groups, levels of protein structure, mutation data and experimental design, with worked solutions and suggested mark points."
course: "biology"
unit: 1
topics: ["1.7"]
resourceType: "practice-questions"
prerequisites:
  - "The general structure of an amino acid and the four levels of protein structure"
prerequisiteResources: ["mb-ap-bio-1.7-study-guide"]
learningObjectives:
  - "Explain how peptide bonds form and count bonds and water molecules for one or more chains"
  - "Link each level of protein structure to the interactions that hold it"
  - "Analyse data on altered proteins and predict how a change in one amino acid affects shape and function"
  - "Design a controlled experiment on protein folding and evaluate a claim using evidence"
skills: ["1", "2", "3", "5", "6"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Mass of a water molecule: 18 Da. Any other values are given in the question. Give percentages to 2 or 3 significant figures, matching the data"
related: ["mb-ap-bio-1.7-study-guide", "mb-ap-bio-1.7-revision-notes", "mb-ap-bio-1.7-checklist"]
next: "mb-ap-bio-1.7-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working or reasoning."
  - "For every prediction, give the full chain: change in R group → interaction gained or lost → change in shape → change in function."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data for every question: mass of a water molecule = 18 Da. A calculator is assumed. Keep full calculator values until the last step. All proteins, organisms and data sets are fictional.

## Question 1 (multiple choice · foundation)

Which statement correctly describes the formation of a peptide bond?

- (A) The carboxyl group of one amino acid reacts with the amine group of the next amino acid, and a molecule of water is released.
- (B) The R groups of two neighbouring amino acids form a covalent bond, and a molecule of water is released.
- (C) A hydrogen bond forms between the C=O group of one amino acid and the N–H group of another.
- (D) A molecule of water is added between two amino acids, which joins them.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** A peptide bond is a covalent bond made by dehydration synthesis. The −OH from the carboxyl group and an −H from the next amine group leave as water, and the carbon bonds to the nitrogen.

- (B) R groups are not part of the peptide bond. They stick out from the backbone and interact later, during folding.
- (C) describes a hydrogen bond in secondary structure, not a peptide bond. It is a weak attraction, not a covalent bond.
- (D) confuses synthesis with hydrolysis: adding water **breaks** a peptide bond, while forming one releases water.
</details>

## Question 2 (multiple choice · core)

A fictional hormone is made of two separate polypeptide chains, one of 23 amino acids and one of 31 amino acids. How many water molecules were released when the two chains were made?

- (A) 52
- (B) 53
- (C) 54
- (D) 104

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Each chain of n amino acids has n − 1 peptide bonds, and each bond releases one water molecule. (23 − 1) + (31 − 1) = 22 + 30 = 52.

- (B) treats the two chains as one continuous chain: 54 − 1 = 53. Each separate chain has its own two free ends.
- (C) counts one water per amino acid (23 + 31 = 54).
- (D) doubles the correct answer, as if each bond released two water molecules. Each bond releases one: an −OH from one amino acid and an −H from the other.
</details>

## Question 3 (multiple choice · core)

A fictional enzyme dissolves in the cytoplasm. In its normal form, the amino acid at position 74 has a nonpolar R group buried in the centre of the folded protein. A mutation replaces it with an amino acid that has an ionic (charged) R group. Which prediction is best supported?

- (A) The tertiary structure is likely to be disrupted, because a charged R group is now trapped in the nonpolar core, away from water; the enzyme may lose activity.
- (B) Only the primary structure changes, so the shape and activity of the enzyme stay the same.
- (C) The peptide bonds on either side of position 74 will break, splitting the enzyme into two pieces.
- (D) No α-helices or β-pleated sheets can form anywhere in the enzyme, because they depend on interactions between R groups.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Nonpolar R groups cluster in the interior through hydrophobic interactions. A charged R group in that core cannot interact well with its nonpolar neighbours and is attracted to water, so the chain is likely to fold differently. A changed shape usually changes function.

- (B) ignores the rule that the sequence decides the shape. A change in primary structure can change every level above it.
- (C) confuses a change in R group with breaking the backbone. The peptide bonds still form normally.
- (D) is wrong twice: secondary structure is held by hydrogen bonds between **backbone** atoms, and one changed amino acid would not prevent all helices and sheets.
</details>

## Question 4 (data analysis · core)

A fictional enzyme from a soil bacterium was compared with three variants, each with one amino acid changed. Activity was measured under identical conditions.

| Enzyme | Change | Activity / µmol product min⁻¹ |
|---|---|---|
| Wild type (normal) | none | 42.0 |
| V1 | a polar R group on the surface replaced by a different polar R group | 40.3 |
| V2 | a nonpolar R group in the core replaced by an ionic R group | 3.8 |
| V3 | one of the two R groups that form a disulfide bridge replaced by one that cannot form it | 17.6 |

<figure>
<svg viewBox="0 0 580 330" role="img" aria-labelledby="q4-title q4-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="q4-title">Activity of the wild-type enzyme and three variants</title>
<desc id="q4-desc">Bar chart. Vertical axis: activity in micromoles of product per minute, marked from 0 to 40 in steps of 10. Four bars, each labelled with its value: wild type 42.0, V1 40.3, V2 3.8, V3 17.6.</desc>
<rect x="0" y="0" width="580" height="330" fill="#ffffff"/>
<line x1="80" y1="231.1" x2="500" y2="231.1" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="80" y1="182.2" x2="500" y2="182.2" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="80" y1="133.3" x2="500" y2="133.3" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="80" y1="84.4" x2="500" y2="84.4" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="80" y1="280" x2="500" y2="280" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="280" x2="80" y2="50" stroke="#1d2b44" stroke-width="2"/>
<text x="72" y="284" text-anchor="end" font-size="12" fill="#1d2b44">0</text>
<text x="72" y="235" text-anchor="end" font-size="12" fill="#1d2b44">10</text>
<text x="72" y="186" text-anchor="end" font-size="12" fill="#1d2b44">20</text>
<text x="72" y="137" text-anchor="end" font-size="12" fill="#1d2b44">30</text>
<text x="72" y="88" text-anchor="end" font-size="12" fill="#1d2b44">40</text>
<text x="22" y="165" text-anchor="middle" font-size="13" fill="#1d2b44" transform="rotate(-90 22 165)">Activity / µmol min⁻¹</text>
<rect x="110" y="74.7" width="60" height="205.3" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="210" y="83.0" width="60" height="197.0" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="310" y="261.4" width="60" height="18.6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="410" y="194.0" width="60" height="86.0" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="140" y="68" text-anchor="middle" font-size="13" fill="#1d2b44">42.0</text>
<text x="240" y="77" text-anchor="middle" font-size="13" fill="#1d2b44">40.3</text>
<text x="340" y="255" text-anchor="middle" font-size="13" fill="#1d2b44">3.8</text>
<text x="440" y="188" text-anchor="middle" font-size="13" fill="#1d2b44">17.6</text>
<text x="140" y="300" text-anchor="middle" font-size="13" fill="#1d2b44">Wild type</text>
<text x="240" y="300" text-anchor="middle" font-size="13" fill="#1d2b44">V1</text>
<text x="340" y="300" text-anchor="middle" font-size="13" fill="#1d2b44">V2</text>
<text x="440" y="300" text-anchor="middle" font-size="13" fill="#1d2b44">V3</text>
</svg>
<figcaption>Question 4 chart. The table above gives the same data.</figcaption>
</figure>

(a) Calculate the activity of each variant as a percentage of the wild type.
(b) Identify the variant whose change has the largest effect, and explain the effect in terms of R-group interactions.
(c) Explain why V1 has almost the same activity as the wild type.
(d) Explain why V3 keeps some activity even though a covalent bond in its tertiary structure is missing.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** V1: 40.3 ÷ 42.0 × 100 = **96.0%**. V2: 3.8 ÷ 42.0 × 100 = **9.0%**. V3: 17.6 ÷ 42.0 × 100 = **41.9%**.

**(b)** **V2.** The nonpolar R group was part of the hydrophobic core. A charged R group cannot take part in the hydrophobic interactions there and is attracted to water instead, so the chain is likely to fold differently. If the active site loses its shape, the enzyme can no longer bind its substrate well, so activity falls to about a tenth.

**(c)** The new R group is still polar and still on the surface, where it can hydrogen-bond with water. The interactions holding the shape are mostly unchanged, so shape and function are too.

**(d)** A disulfide bridge is only one of many interactions holding the tertiary structure. Hydrogen bonds, hydrophobic and ionic interactions still form, so much of the fold remains. The shape is probably less stable or slightly altered, so activity falls to about 42%, not to zero.

| Point | What earns it |
|---|---|
| 1 | All three percentages correct |
| 1 | V2 identified, with hydrophobic core disrupted by a charged R group |
| 1 | V2 effect linked from changed shape to reduced substrate binding or activity |
| 1 | V1: similar R-group properties, so interactions and shape mostly unchanged |
| 1 | V3: other interactions still hold most of the fold |

Accept answers to (b) that say V2 has about one-eleventh of the wild-type activity (42.0 ÷ 3.8 ≈ 11).
</details>

## Question 5 (constructed response · core)

Protein F is a fictional protein that glows (fluoresces) only when it is correctly folded. It normally works inside cells at pH 7.0. A student wants to test whether pH affects the folding of Protein F. She has samples of Protein F, buffer solutions from pH 3.0 to pH 11.0 and a meter that measures fluorescence.

(a) State a testable hypothesis.
(b) Identify the independent variable, the dependent variable and an appropriate control condition.
(c) Give two variables she must keep constant, and why.
(d) Predict the results and justify your prediction using R-group interactions.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** "As the pH moves further from 7.0, the fluorescence of Protein F decreases, because less of the protein is correctly folded."

**(b)** Independent variable: pH of the buffer (for example 3.0, 5.0, 7.0, 9.0, 11.0). Dependent variable: fluorescence, measured with the meter after a fixed time, as a measure of how much protein is folded. Control: Protein F in pH 7.0 buffer, the pH at which it normally works, as the baseline.

**(c)** Any two with a reason: temperature (heat can also unfold proteins); concentration of Protein F (more protein gives more light); time in the buffer before measuring (unfolding may take time); meter settings.

**(d)** Fluorescence should be highest at or near pH 7.0 and lower at very low and very high pH. A change in pH changes the concentration of H⁺ ions, which can change the charge on some ionic R groups. Ionic interactions that held parts of the tertiary structure together may be lost, or like charges may now repel, and some hydrogen bonds may also change. The protein then unfolds (denatures) and stops fluorescing.

| Point | What earns it |
|---|---|
| 1 | Testable hypothesis linking pH to folding or fluorescence |
| 1 | Independent and dependent variables correct **and** a pH 7.0 baseline |
| 1 | Two valid controlled variables, each with a reason |
| 1 | Prediction linked to changed charges on R groups **and** loss of ionic interactions or hydrogen bonds |

Do not award the last point for "low pH breaks the peptide bonds": the prediction is about the folded shape, not the sequence.
</details>

## Question 6 (constructed response · stretch)

Pelorin is a fictional protein made of two identical polypeptide chains of 250 amino acids each. Only the paired form is active. The two chains are held together by a patch of nonpolar R groups on the surface of each chain, which fit against each other. In a mutant, two nonpolar amino acids in this patch are replaced by amino acids with polar R groups.

(a) Identify the level of protein structure that is most directly affected. Explain your choice.
(b) Predict the effect of the mutation on Pelorin activity, and justify your prediction.
(c) A student claims: "Only 2 out of 250 amino acids have changed, less than 1%, so the protein's function cannot change much." Evaluate the claim.
(d) Describe one result that would support your prediction in (b).

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** **Quaternary structure.** The changed amino acids are in the patch where the two chains meet, so they affect how the two polypeptides fit together. (The primary structure has changed too, but the effect on function comes through the quaternary structure.)

**(b)** Activity should **decrease**. The nonpolar patches held the chains together through hydrophobic interactions. Polar R groups attract water, so the patches are less hydrophobic and the chains pair less well. Fewer chains are in the active paired form, so activity falls.

**(c)** The claim is not justified. The proportion changed is small (2 ÷ 250 = 0.8%), but what matters is **where** the change is and **what kind** of R group is gained or lost. These two amino acids are in the contact patch that holds the active form together. One change in the right place can alter function, as sickle cell hemoglobin shows; a similar change elsewhere on the surface might have little effect.

**(d)** Any one: the mutant has lower activity than the normal protein under the same conditions; more mutant protein is found as single chains than as pairs; restoring nonpolar R groups at those positions restores activity.

| Point | What earns it |
|---|---|
| 1 | Quaternary structure with a reason based on contact between chains |
| 1 | Prediction: lower activity, linked to weaker hydrophobic interactions between chains |
| 1 | Claim rejected, with the reason that location and type of R group matter more than the number changed |
| 1 | A valid supporting result |
</details>

## Question 7 (calculation · stretch)

A fictional antimicrobial peptide is a single chain of 18 amino acids. The 18 free amino acids used to build it have a combined mass of 2286 Da.

(a) How many peptide bonds does the peptide contain?
(b) Calculate the total mass of water released when it was made.
(c) Calculate the mass of the peptide.
(d) An enzyme in a bacterium cuts the peptide by hydrolysis into two fragments, of 7 and 11 amino acids. How many water molecules are used, and what is the combined mass of the two fragments?
(e) Explain what happens to the water molecule during this hydrolysis.

<details>
<summary>Worked solution</summary>

**(a)** One chain: 18 − 1 = **17** peptide bonds.

**(b)** 17 × 18 Da = **306 Da**.

**(c)** 2286 − 306 = **1980 Da**.

**(d)** One peptide bond is broken, so **1** water molecule is used. Check: the fragments have (7 − 1) + (11 − 1) = 16 bonds, one fewer than 17. Combined mass = 1980 + 18 = **1998 Da**.

**(e)** The water molecule is split. An −H joins the amine group at the new end of one fragment, and an −OH joins the carboxyl group at the new end of the other. This is the reverse of the dehydration synthesis that formed the bond.

Suggested mark points (4): 1 for 17 bonds and 306 Da; 1 for 1980 Da; 1 for one water used and 1998 Da; 1 for the −H and −OH going to the amine and carboxyl ends.

Common errors: using 18 bonds gives 2286 − 324 = 1962 Da. In (d), hydrolysis adds water, so the fragments together must weigh **more** than the peptide; subtracting gives 1962 Da.
</details>

## How did you do?

- **Q1 wrong:** re-read "Peptide bonds: building the chain" in the [study guide](/advanced-course-resources/biology/1-7-proteins-study-guide/) and look again at Figure 1.
- **Q2 or Q7 wrong:** rework Worked example 1. Subtract 1 for each chain, and remember that hydrolysis adds water back.
- **Q3, Q4 or Q6 incomplete:** re-read "Tertiary structure", "Quaternary structure" and "Shape determines function", then Worked example 2. Give the full chain from R group to function.
- **Q5 incomplete:** compare your design with Worked example 2, especially the control and the trials.

Then tick off the [topic checklist](/advanced-course-resources/biology/1-7-proteins-checklist/).
