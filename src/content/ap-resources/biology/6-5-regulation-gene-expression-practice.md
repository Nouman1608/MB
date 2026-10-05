---
resourceId: "mb-ap-bio-6.5-practice"
title: "Regulation of Gene Expression: Practice Questions (Biology 6.5)"
description: "Seven original Marlbridge practice questions on operons, constitutive and inducible genes, coordinate control, epigenetic marks and developmental gene cascades, with worked solutions and suggested mark points."
course: "biology"
unit: 6
topics: ["6.5"]
resourceType: "practice-questions"
prerequisites:
  - "How transcription starts at a promoter"
prerequisiteResources: ["mb-ap-bio-6.5-study-guide"]
learningObjectives:
  - "Predict the state of the lac and trp operons under given conditions"
  - "Use expression data to make and support claims about how genes are regulated"
  - "Explain how shared control sequences coordinate eukaryotic genes"
  - "Distinguish epigenetic changes from mutations using evidence"
skills: ["1", "2", "5", "6"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Fold change = test value ÷ reference value. Percentage of a reference = test ÷ reference × 100. Round to 2 or 3 significant figures"
related: ["mb-ap-bio-6.5-study-guide", "mb-ap-bio-6.5-revision-notes", "mb-ap-bio-6.5-checklist"]
next: "mb-ap-bio-6.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working or reasoning."
  - "For every claim, quote the data and explain the mechanism (which protein binds which sequence)."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. All organisms' data sets are fictional unless a real system is named, and even then the numbers are invented for practice. Fold change = test value ÷ reference value. A calculator is useful but not essential.

## Question 1 (multiple choice · foundation)

Which gene is most likely to be expressed **constitutively** in a bacterium?

- (A) A gene for an enzyme that breaks down a rare sugar
- (B) A gene for a ribosomal RNA used in every round of protein synthesis
- (C) A gene for an enzyme that makes an amino acid, switched off when the amino acid is plentiful
- (D) A gene for a protein that protects the cell only at high temperatures

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Ribosomes are needed all the time, so their RNA genes are transcribed continuously. This is constitutive ("housekeeping") expression.

- (A) describes an inducible gene: making the enzyme only when the rare sugar appears saves resources.
- (C) describes a repressible gene, like those of the trp operon.
- (D) describes an inducible gene, switched on by a signal (heat).
</details>

## Question 2 (multiple choice · core)

An *E. coli* cell is growing in a medium rich in tryptophan. Which statement describes the trp operon?

- (A) Tryptophan binds the operator directly and blocks RNA polymerase.
- (B) The repressor is inactive, so RNA polymerase transcribes the trp genes.
- (C) Tryptophan binds the repressor, which then binds the operator, so transcription of the trp genes stops.
- (D) Tryptophan binds RNA polymerase and prevents it from binding the promoter.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Tryptophan acts as a corepressor. Binding changes the repressor's shape so that it can bind the operator and block transcription. The cell stops making an amino acid it already has.

- (A) skips the repressor: the small signal molecule binds the protein, not the DNA.
- (B) describes the operon when tryptophan is **scarce**.
- (D) invents a mechanism; the control acts through the repressor and operator.
</details>

## Question 3 (multiple choice · core)

A drug causes histones in treated cells to keep more of their acetyl groups. No DNA bases are changed. What is the most likely effect on a gene that was previously silent because its chromatin was tightly packed?

- (A) The gene becomes more accessible and is more likely to be transcribed.
- (B) The gene is mutated, so it now codes for a different protein.
- (C) The gene becomes more tightly packed and stays silent.
- (D) The gene is removed from the genome because it was not being used.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Acetyl groups on histone tails weaken the attraction between histones and DNA. Chromatin loosens, and transcription factors and RNA polymerase can reach the gene.

- (B) confuses an epigenetic change with a mutation. The base sequence is unchanged, so the protein coded is unchanged.
- (C) describes the effect of **removing** acetyl groups.
- (D) is wrong: cells keep unused genes and switch them off.
</details>

## Question 4 (data analysis · core)

Researchers measure β-galactosidase activity in wild-type *E. coli* grown in four media, and in a mutant strain that cannot make a working CAP protein (fictional units).

| Medium | Wild type | CAP mutant |
|---|---|---|
| neither glucose nor lactose | 2 | 2 |
| glucose only | 2 | 2 |
| lactose only | 1500 | 70 |
| glucose + lactose | 120 | not measured |

(a) Calculate the fold increase in wild-type activity in "lactose only" compared with "neither".
(b) Calculate wild-type "glucose + lactose" activity as a percentage of "lactose only".
(c) Explain why activity is low in "glucose only" and in "neither".
(d) Explain the results for "glucose + lactose" and for the CAP mutant.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** 1500 ÷ 2 = **750-fold**.

**(b)** 120 ÷ 1500 × 100 = **8.0%**.

**(c)** With no lactose there is no allolactose, so the active repressor stays bound to the operator and RNA polymerase is blocked. Glucose alone cannot remove the repressor.

**(d)** With both sugars, lactose removes the repressor, so some transcription occurs (60 times the "neither" level). But glucose keeps cAMP low, so little CAP–cAMP binds near the promoter, and RNA polymerase attaches less often. Activity is only 8.0% of the level with lactose alone. In the CAP mutant with lactose only, the repressor is removed, but without the activator RNA polymerase binds poorly: 70 is only 4.7% of the wild-type value. The operon needs **both** the repressor removed **and** the activator bound for strong expression.

| Point | What earns it |
|---|---|
| 1 | 750-fold and 8.0%, both correct |
| 1 | Low activity without lactose explained by repressor on the operator |
| 1 | Glucose + lactose explained by low cAMP, so little CAP–cAMP, so less RNA polymerase binding |
| 1 | CAP mutant explained: repressor removed but no positive control, so low transcription |
</details>

## Question 5 (constructed response · core)

In a fictional plant, drought switches on three genes, D1, D2 and D3, which lie on chromosomes 2, 4 and 5. All three have the same 10-base-pair sequence, called element E, just upstream of their promoters. The table shows the increase in each gene's mRNA after five days of drought (fold change compared with watered plants).

| Plants | D1 | D2 | D3 |
|---|---|---|---|
| Wild type | 25 | 18 | 30 |
| Element E deleted from D2 only | 24 | 1.1 | 29 |
| Lacking transcription factor DF | 1.0 | 1.0 | 1.1 |

(a) Calculate the D2 response in the deletion plants as a percentage of the wild-type D2 response.
(b) Make a claim about how the three genes are coordinated, and support it with two pieces of evidence from the table.
(c) Contrast this method of coordinating genes with the way a bacterium coordinates the genes of an operon.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** 1.1 ÷ 18 × 100 = **6.1%** (the response is almost lost).

**(b)** **Claim:** transcription factor DF binds element E near each gene and switches all three on together during drought. **Evidence 1:** deleting element E from D2 removes the response of D2 only (18 → 1.1) while D1 and D3 respond normally (24 and 29), so the element works only on the gene it sits next to. **Evidence 2:** plants without DF show no response at any of the three genes (fold change about 1), so the same protein is needed for all three. **Reasoning:** a shared DNA sequence recognised by one regulatory protein lets genes in different places respond to one signal.

**(c)** In a bacterial operon, the genes are next to each other, share one promoter and one operator, and are transcribed into **one mRNA**. Here, the genes are on **different chromosomes**, each with its **own promoter**, and they are coordinated because each has a **copy of the same control sequence**.

| Point | What earns it |
|---|---|
| 1 | 6.1% (accept 6%) |
| 1 | Claim that DF acts through element E to switch on all three genes |
| 1 | Evidence from the deletion row **and** the DF row, with numbers |
| 1 | Contrast: one operator/one mRNA in operons versus shared control sequences near separate genes |
</details>

## Question 6 (constructed response · stretch)

Some plants flower only after a long cold winter. In the real plant *Arabidopsis*, a gene called *FLC* makes a protein that **stops flowering**. Prolonged cold silences *FLC* by adding chemical marks to its histones. The fictional data show relative *FLC* mRNA levels in one population.

| Sample | *FLC* mRNA (relative) |
|---|---|
| before cold | 100 |
| after 2 weeks at 4 °C | 70 |
| after 4 weeks at 4 °C | 35 |
| after 6 weeks at 4 °C | 8 |
| new leaves, 3 weeks after return to 22 °C (following 6 weeks cold) | 9 |
| offspring of these plants, before any cold | 98 |

(a) Describe the effect of cold on *FLC* expression, with numbers.
(b) A student claims that cold causes a **mutation** in *FLC*. Evaluate this claim using two pieces of evidence from the table.
(c) Explain how silencing *FLC* allows the plant to flower at the right time of year.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** The longer the cold, the lower the expression: 100 → 70 → 35 → 8 over six weeks, a 92% fall.

**(b)** The claim is **not supported**; the data fit an **epigenetic** change. Evidence 1: the low level is kept in **new leaves** grown after the return to warmth (9), so the silenced state is copied through cell division even without cold. That alone could fit a mutation, but evidence 2 does not: the **offspring** have a level of 98, almost the original 100. A mutation in the parent's germ cells would be inherited; an epigenetic mark can be reset. Also, a mutation would be a rare, random event in a few cells, not a gradual change in every plant that tracks the length of cold.

**(c)** While *FLC* is expressed, its protein blocks flowering, so the plant does not flower in autumn. After a long winter *FLC* is silenced and stays silent as the plant grows in spring warmth, so flowering is no longer blocked. The plant flowers in spring, when conditions suit seed production.

| Point | What earns it |
|---|---|
| 1 | Trend described with at least two values (or the 92% fall) |
| 1 | Uses the new-leaves value to show the silenced state is kept through cell division |
| 1 | Uses the offspring value to argue against a mutation (reset; reversible) |
| 1 | Links silencing of a flowering repressor to flowering in spring rather than autumn |
</details>

## Question 7 (constructed response · stretch)

In a fictional fish embryo, a signal from nearby cells switches on transcription factor A in fin cells. Protein A activates gene B, which codes for another transcription factor. Protein B activates gene C, which codes for a structural protein of the fin rays. Adult wild-type fins are 12 mm long.

(a) Predict which of proteins A, B and C are present in fin cells of embryos lacking a working gene B. Explain.
(b) A researcher adds protein B to fin cells of embryos lacking gene A. Predict whether protein C is made, and explain.
(c) Fish with one working and one non-working copy of gene B make 50% of the normal amount of protein B, and their fins are 9 mm long. Calculate the fin length as a percentage of wild type, and explain what this shows about the link between gene expression and phenotype.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Protein A **is** present: it is upstream of B and depends only on the signal. Protein B is **absent**: its gene does not work. Protein C is **absent**: gene C needs protein B to be switched on. This is sequential gene expression: each step needs the one before.

**(b)** Protein C **is** made. Gene C needs only protein B. Supplying B skips the missing step (A is needed only to switch on B).

**(c)** 9 ÷ 12 × 100 = **75%** of wild-type length. Half the amount of transcription factor B switches on less of gene C, so less fin-ray protein is made and the fins are shorter. The **amount** of a gene product, not just whether it is present, affects the phenotype.

| Point | What earns it |
|---|---|
| 1 | A present, B and C absent, with the dependence of C on B stated |
| 1 | C made when B is supplied, explained by B being the direct activator of C |
| 1 | 75% |
| 1 | Links less transcription factor to less product and a changed phenotype (amount matters) |
</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read "Three patterns of expression" and "Epigenetic regulation" in the [study guide](/advanced-course-resources/biology/6-5-regulation-gene-expression-study-guide/).
- **Q2 or Q4 wrong:** look again at Figure 1 and the lac/trp comparison table; check which molecule binds which.
- **Q5 incomplete:** re-read "Coordinate regulation in eukaryotes" and Worked example 1.
- **Q6 or Q7 incomplete:** re-read Worked example 2 and "From expression to phenotype".

Then tick off the [topic checklist](/advanced-course-resources/biology/6-5-regulation-gene-expression-checklist/).
