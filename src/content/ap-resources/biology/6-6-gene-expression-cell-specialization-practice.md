---
resourceId: "mb-ap-bio-6.6-practice"
title: "Gene Expression and Cell Specialization: Practice Questions (Biology 6.6)"
description: "Seven original Marlbridge practice questions on transcription factors, enhancers, repressors, combinatorial control and small RNAs, with worked solutions and suggested mark points."
course: "biology"
unit: 6
topics: ["6.6"]
resourceType: "practice-questions"
prerequisites:
  - "How transcription factors, enhancers and repressors control transcription"
prerequisiteResources: ["mb-ap-bio-6.6-study-guide"]
learningObjectives:
  - "Predict which genes a cell type expresses from the transcription factors it contains"
  - "Interpret deletion and reporter data to identify enhancers and silencers"
  - "Explain how small RNAs lower gene expression and interpret RNA-interference data"
  - "Support claims linking regulatory changes to differences in phenotype"
skills: ["1", "2", "5", "6"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Fold change = test value ÷ reference value. Percentage = test ÷ reference × 100. Round to 2 or 3 significant figures"
related: ["mb-ap-bio-6.6-study-guide", "mb-ap-bio-6.6-revision-notes", "mb-ap-bio-6.6-checklist"]
next: "mb-ap-bio-6.6-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working or reasoning."
  - "Say which molecule binds which sequence, and what that does to the rate of transcription or translation."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. All organisms, genes and data sets are fictional unless stated otherwise. Fold change = test value ÷ reference value. A calculator is useful but not essential.

## Question 1 (multiple choice · foundation)

A liver cell and a nerve cell from the same person make very different proteins. Which statement best explains this?

- (A) The two cells contain different genes, because genes not needed by a cell are lost as it develops.
- (B) The two cells contain the same genes, but they contain different sets of transcription factors, so they transcribe different genes.
- (C) The two cells contain the same genes, but their ribosomes read the genetic code differently.
- (D) The two cells contain different numbers of chromosomes.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Both cells came from the same fertilised egg by mitosis, so they have the same genome. Each cell type has its own combination of activators and repressors, so different genes are transcribed. This is differential gene expression.

- (A) is the most common error: cells keep the genes they do not use and switch them off.
- (C) is wrong: the genetic code is the same in every cell.
- (D) is wrong: chromosome number does not decide which proteins a cell makes. Both cells carry the same genes; the difference is in which genes are expressed.
</details>

## Question 2 (multiple choice · core)

An enhancer normally lies 2000 base pairs upstream of a gene's start site. A researcher moves the same enhancer sequence to an intron 2000 base pairs **downstream** of the start site. Activator proteins are still present in the cells. What is the most likely result?

- (A) Transcription stops, because enhancers only work upstream of the promoter.
- (B) The enhancer still raises transcription, because the DNA can loop to bring the activators to the promoter complex.
- (C) The enhancer now acts as a silencer, because its position has changed.
- (D) The gene's mRNA now includes the enhancer sequence, which is translated into extra amino acids.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Enhancers can work upstream, downstream or inside introns. Activators bound to the enhancer reach the promoter complex through DNA looping, whatever side they are on.

- (A) states a rule that does not hold for enhancers.
- (C) confuses position with function: whether a sequence enhances or silences depends on which proteins bind it.
- (D) ignores that introns are removed from the pre-mRNA during processing, so the enhancer sequence is not in the mature mRNA and is not translated.
</details>

## Question 3 (multiple choice · core)

Researchers add a synthetic microRNA to cultured cells. Over 24 hours, the amount of mRNA for protein Z stays the same, but the amount of protein Z falls by 70%. Which explanation fits these data best?

- (A) The microRNA bound to the promoter of gene Z and blocked RNA polymerase.
- (B) The microRNA base-paired with Z mRNA and reduced its translation.
- (C) The microRNA caused a mutation in the coding sequence of gene Z.
- (D) The microRNA bound to protein Z and caused it to denature.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The mRNA level is unchanged, so transcription and mRNA breakdown are not the cause. Less protein is made from the same amount of mRNA: translation is blocked. MicroRNAs do this by base-pairing with their target mRNA.

- (A) would lower the amount of mRNA, which did not happen.
- (C) is wrong: small RNAs act on RNA, not on the DNA sequence.
- (D) is wrong: microRNAs base-pair with nucleic acids; they do not act on proteins.
</details>

## Question 4 (constructed response · core)

In a fictional animal, three genes need these combinations of activators to be transcribed strongly:

| Gene | Activators needed |
|---|---|
| Gene K | P and Q |
| Gene L | Q and S |
| Gene M | P and S |

| Cell type | Activators present |
|---|---|
| skin | P, Q |
| gut | Q, S |
| liver | P, Q, S |

(a) Predict which genes each cell type expresses strongly.
(b) Activator Q is present in both skin and gut cells. Explain why it does not switch on the same genes in both.
(c) Liver cells are then found also to make a repressor, T, which binds a silencer next to Gene K only. Revise your prediction for liver cells and explain.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Skin: **Gene K** only (has P and Q). Gut: **Gene L** only (has Q and S). Liver: **K, L and M** (has all three activators).

**(b)** Each gene needs a **combination** of activators. In skin, Q is paired with P, which completes the set for Gene K. In gut, Q is paired with S, which completes the set for Gene L. The same activator contributes to different genes depending on its partners.

**(c)** Liver: **Gene L and Gene M** only. The repressor T binds the silencer by Gene K and blocks transcription, even though the activators for K are present. Negative regulation can override activation at a single gene.

| Point | What earns it |
|---|---|
| 1 | All three cell types correct |
| 1 | Explanation based on combinations (partners) of activators |
| 1 | Revised liver prediction: L and M |
| 1 | Repressor bound to DNA near K blocks its transcription despite activators |
</details>

## Question 5 (data analysis · core)

A fictional plant gene, *Rt2*, is expressed in roots but not leaves. Researchers suspect that a repressor protein, RX, found only in leaf cells binds a silencer near *Rt2*. They measure *Rt2* mRNA (arbitrary units).

| Cells | *Rt2* mRNA |
|---|---|
| root cells | 240 |
| leaf cells | 8 |
| leaf cells, silencer deleted | 230 |
| root cells engineered to make RX | 12 |

(a) Calculate how many times more *Rt2* mRNA root cells contain than leaf cells.
(b) Express the values for "leaf cells, silencer deleted" and "root cells engineered to make RX" as percentages of the root value.
(c) Make a claim about why *Rt2* is not expressed in leaves, and support it with two pieces of evidence.
(d) Explain how a protein bound to a silencer can stop transcription.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** 240 ÷ 8 = **30 times**.

**(b)** Silencer deleted: 230 ÷ 240 × 100 = **95.8%** (about 96%). Root + RX: 12 ÷ 240 × 100 = **5.0%**.

**(c)** **Claim:** in leaf cells, repressor RX binds the silencer and blocks transcription of *Rt2*. **Evidence 1:** deleting the silencer restores leaf expression to 95.8% of the root level, so the silencer is needed for silencing. **Evidence 2:** adding RX to root cells drops expression to 5.0%, so RX alone is enough to silence the gene. Together these show both the protein and its DNA binding site are required.

**(d)** A repressor bound to the silencer can stop activators binding nearby enhancers, or stop the general transcription factors and RNA polymerase from assembling at the promoter, so transcription does not start.

| Point | What earns it |
|---|---|
| 1 | 30 times |
| 1 | 95.8% (or 96%) and 5.0% |
| 1 | Claim plus **both** pieces of evidence with numbers |
| 1 | Mechanism: bound repressor blocks activator binding or assembly of the transcription complex |
</details>

## Question 6 (constructed response · stretch)

Researchers inject flatworms with double-stranded RNA matching the gene for a pigment-making enzyme. A control group is injected with double-stranded RNA matching a jellyfish gene that flatworms do not have. Fictional results for enzyme mRNA, as a percentage of uninjected worms:

| Day after injection | 0 | 2 | 4 | 10 |
|---|---|---|---|---|
| pigment-gene dsRNA / % | 100 | 22 | 9 | 60 |
| jellyfish-gene dsRNA / % | 100 | 98 | 101 | 99 |

(a) Calculate the percentage reduction in enzyme mRNA on day 4 in the pigment-gene group.
(b) Explain how the injected double-stranded RNA lowers the enzyme mRNA.
(c) Explain the purpose of the control group and what its results show.
(d) Suggest why the mRNA level rises again by day 10, and explain why sequencing the pigment gene on day 4 would find no change.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** 100 − 9 = **91%** reduction.

**(b)** The cells cut the long double-stranded RNA into short pieces (siRNAs, about 21–23 nucleotides). Each is held in a protein complex and base-pairs with the complementary sequence on the enzyme's mRNA, which is then cut and broken down. This is RNA interference.

**(c)** The control shows that injecting double-stranded RNA by itself does not lower the enzyme mRNA (98–101%). The fall in the test group must depend on the RNA **matching** the pigment gene's sequence.

**(d)** The injected RNA is gradually used up or broken down, and the new cells formed as the worm grows do not receive it, so silencing weakens and mRNA recovers (to 60%). The gene itself was never altered: RNAi acts on mRNA after transcription, so the DNA sequence is normal.

| Point | What earns it |
|---|---|
| 1 | 91% |
| 1 | Base-pairing of short RNAs with the target mRNA, leading to its breakdown |
| 1 | Control rules out an effect of injecting RNA in general; sequence match is needed |
| 1 | Recovery linked to loss of the RNA **and** DNA unchanged because RNAi acts after transcription |
</details>

## Question 7 (constructed response · stretch)

In a fictional lizard, gene *Pg* codes for an enzyme that makes dark pigment in both the skin and the iris of the eye. Transcription of *Pg* in skin depends on a skin enhancer; transcription in the eye depends on a separate eye enhancer. Lizards on one island have very pale skin but normally dark eyes. Their *Pg* coding sequence is identical to that of dark lizards, but their skin enhancer has one changed base in an activator binding site. In pale lizards, skin cells contain 5% of the normal amount of Pg enzyme; eye cells contain the normal amount.

(a) Make a claim explaining the pale skin of the island lizards, and support it with evidence.
(b) Explain why the eyes of the island lizards are normal.
(c) Predict the phenotype of a lizard whose *Pg* coding sequence had a change that made the enzyme inactive, with normal enhancers. Explain how this differs from the island lizards.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** **Claim:** the changed base stops the skin activator from binding the skin enhancer, so *Pg* is transcribed very little in skin cells, little enzyme is made and little pigment is produced. **Evidence:** the coding sequence is normal, so the enzyme that is made works; the only difference is in the activator binding site; skin cells have only 5% of the normal enzyme.

**(b)** The eye uses a different enhancer, bound by different activators, and that enhancer is unchanged. So transcription of *Pg* in eye cells is normal, and the eye has a normal amount of enzyme. A regulatory change can affect one tissue only.

**(c)** **Pale skin and pale eyes**: the enzyme would be inactive in every cell that makes it. Transcription would be normal, but the product would not work. The island lizards make a working enzyme in the wrong (reduced) amount in one tissue; this lizard makes the normal amount of a non-working enzyme in all tissues.

| Point | What earns it |
|---|---|
| 1 | Claim links the enhancer change to reduced activator binding and reduced transcription in skin |
| 1 | Evidence: normal coding sequence **and** 5% enzyme in skin |
| 1 | Eye normal because a separate, unchanged enhancer controls eye expression |
| 1 | Coding change predicted to affect both tissues, with the contrast between amount and function |
</details>

## How did you do?

- **Q1 or Q4 wrong:** re-read "One genome, many kinds of cell" and "Combinations of transcription factors" in the [study guide](/advanced-course-resources/biology/6-6-gene-expression-cell-specialization-study-guide/).
- **Q2 or Q5 wrong:** look again at Figure 1, "Repressors: turning transcription down" and Worked example 1.
- **Q3 or Q6 wrong:** re-read "Small RNAs: control after transcription", Figure 2 and Worked example 2.
- **Q7 incomplete:** re-read "From regulation to phenotype".

Then tick off the [topic checklist](/advanced-course-resources/biology/6-6-gene-expression-cell-specialization-checklist/).
