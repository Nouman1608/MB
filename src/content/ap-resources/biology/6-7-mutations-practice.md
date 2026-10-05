---
resourceId: "mb-ap-bio-6.7-practice"
title: "Mutations: Practice Questions (Biology 6.7)"
description: "Seven original Marlbridge practice questions on mutation types, frameshifts, nondisjunction, environment-dependent effects, gene transfer and regulatory mutations, with worked solutions and suggested mark points."
course: "biology"
unit: 6
topics: ["6.7"]
resourceType: "practice-questions"
prerequisites:
  - "How to transcribe DNA and translate mRNA with a codon table"
prerequisiteResources: ["mb-ap-bio-6.7-study-guide"]
learningObjectives:
  - "Classify mutations and predict their effect on a polypeptide"
  - "Predict the gametes produced after nondisjunction"
  - "Use data to argue that a mutation's effect depends on the environment"
  - "Distinguish mutations that change the amount of a protein from those that change its type"
skills: ["1", "2", "4", "5", "6"]
studyMinutes: 45
difficulty: "mixed"
calculator: "four-function"
calculatorNote: "Only simple percentages and ratios are needed. The codon table below gives every codon used"
related: ["mb-ap-bio-6.7-study-guide", "mb-ap-bio-6.7-revision-notes", "mb-ap-bio-6.7-checklist"]
next: "mb-ap-bio-6.7-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working or reasoning."
  - "Always trace the chain: DNA change → codon → amino acid → protein → phenotype."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. All genes, organisms and data sets are fictional. Codons you need (mRNA, 5′→3′):

| Codon | Amino acid | Codon | Amino acid | Codon | Amino acid |
|---|---|---|---|---|---|
| AUG | Met (start) | GGU | Gly | GUC | Val |
| CCU | Pro | CAU | His | AUU | Ile |
| GAA | Glu | ACG | Thr | UAC, UAU | Tyr |
| AAC | Asn | UGC | Cys | UAA, UAG, UGA | stop |

## Question 1 (multiple choice · foundation)

In an mRNA, the codon UAC (Tyr) at position 40 of a 300-codon reading frame changes to UAA. Which statement best describes this mutation?

- (A) A silent mutation, because both codons begin with UA.
- (B) A missense mutation, because one amino acid is replaced by another.
- (C) A nonsense mutation, because translation stops early and the polypeptide is much shorter.
- (D) A frameshift mutation, because every codon after position 40 is changed.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** UAA is a stop codon. A single base was substituted, so this is a point mutation that creates a premature stop: a nonsense mutation. Only 39 amino acids are made instead of about 300.

- (A) Silent would need a codon for the same amino acid, such as UAU. Sharing the first two bases is not enough.
- (B) No amino acid replaces Tyr; the chain ends.
- (D) One base was replaced, not added or removed, so the frame is unchanged. Point mutations do not cause frameshifts.
</details>

## Question 2 (multiple choice · core)

Which change near the start of a coding sequence keeps the reading frame **after** the change the same as before?

- (A) Insertion of one nucleotide
- (B) Deletion of two adjacent nucleotides
- (C) Deletion of three adjacent nucleotides
- (D) Insertion of four adjacent nucleotides

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Removing three nucleotides removes exactly one codon's worth of bases, so later codons are grouped exactly as before. The protein loses one amino acid (and, if the deletion spans two codons, the amino acid at the join may also change), but the rest of the sequence is normal.

- (A) and (B) change the number of bases by 1 or 2, so every later codon is regrouped.
- (D) Four is not a multiple of three: four bases shift the frame by one, just like a single insertion.
</details>

## Question 3 (multiple choice · core)

In a cell undergoing meiosis, meiosis I is normal. In meiosis II, the sister chromatids of one chromosome fail to separate in **one** of the two cells. What fraction of the four gametes has one **extra** copy of that chromosome (n + 1)?

- (A) 0
- (B) 1/4
- (C) 1/2
- (D) 1

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The cell that divides normally gives two normal (n) gametes. In the other cell, both chromatids go to one gamete (n + 1) and none to the other (n − 1). So the gametes are n, n, n + 1, n − 1: one in four is n + 1.

- (A) ignores the failed separation.
- (C) is the fraction of gametes that are **abnormal** (n + 1 or n − 1) here, or the fraction that are n + 1 after an error in **meiosis I**.
- (D) would need every gamete to receive an extra copy, which is impossible: whatever one gamete gains, another loses.
</details>

## Question 4 (constructed response · core)

The **template** strand of part of a fictional gene reads (3′→5′):

3′-TAC GGA CTT TTG CCA GTA ACT-5′

(a) Write the mRNA (5′→3′) and the polypeptide it codes for.
(b) Mutation 1: the 9th nucleotide of the template strand (a T) is deleted. Write the new mRNA codons and polypeptide, and name the type of mutation.
(c) Mutation 2 (in a different cell): the 10th template nucleotide changes from T to A. Write the changed codon and amino acid, and name the type of mutation.
(d) Predict which mutation is more likely to destroy the protein's function. Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** mRNA is complementary to the template: 5′-AUG CCU GAA AAC GGU CAU UGA-3′. Polypeptide: **Met–Pro–Glu–Asn–Gly–His**, then stop.

**(b)** New template: TAC GGA CTT TGC CAG TAA CT…, so the mRNA reads AUG CCU GAA **ACG GUC AUU** GA… Polypeptide: Met–Pro–Glu–**Thr–Val–Ile**… The UGA stop is no longer in frame, so translation continues past this stretch. This is a **frameshift** (deletion of one nucleotide).

**(c)** Template codon 4 becomes ATG, so the mRNA codon becomes **UAC** instead of AAC: **Tyr** replaces **Asn**. All other codons are unchanged. This is a **missense** point mutation.

**(d)** Mutation 1 is more likely to destroy function. Every amino acid after position 3 is different and the normal stop is lost, so the chain has a different sequence, folds differently and is unlikely to work. Mutation 2 changes one amino acid; the protein may still fold and work, unless position 4 is in the active site or is needed for correct folding.

| Point | What earns it |
|---|---|
| 1 | Correct mRNA and Met–Pro–Glu–Asn–Gly–His |
| 1 | Frameshift identified, with Thr–Val–Ile after Glu |
| 1 | Missense identified, with Asn → Tyr |
| 1 | Frameshift chosen, reasoning about all later amino acids **and** the condition under which the missense could matter |

Do not award the last point for "the frameshift denatures the protein": the sequence changes; the protein is not denatured.
</details>

## Question 5 (data analysis · core)

A fictional ground beetle has a pale form and a dark form; the dark form carries a mutation in a pigment gene. Researchers marked 200 beetles of each form and released them at two sites, then counted how many they recaptured a week later.

| Site | Dark released | Dark recaptured | Pale released | Pale recaptured |
|---|---|---|---|---|
| Dark volcanic soil | 200 | 112 | 200 | 58 |
| Pale sand | 200 | 46 | 200 | 104 |

(a) Calculate the percentage of each form recaptured at each site.
(b) Make a claim about whether the pigment mutation is beneficial.
(c) Support your claim with the data and explain it in terms of natural selection.
(d) A student says: "Living on dark soil caused the beetles to become dark." Evaluate this statement.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Dark soil: dark 112 ÷ 200 = **56%**, pale 58 ÷ 200 = **29%**. Pale sand: dark 46 ÷ 200 = **23%**, pale 104 ÷ 200 = **52%**.

**(b)** The mutation is **beneficial on dark soil and detrimental on pale sand**. Whether it helps depends on the environment.

**(c)** On dark soil, nearly twice as many dark as pale beetles were recaptured (56% against 29%); on pale sand the pattern reverses (23% against 52%). A plausible explanation is that beetles matching the background are harder for predators to see, so more survive. The survivors reproduce, so the allele that matches the local background becomes more common in each population.

**(d)** The statement is not supported. Mutations arise at random, by replication errors or mutagens, not because of the colour of the soil. Both forms were present in the released groups at both sites. The soil **selects** among existing variants; it does not cause the mutation. (Recapture also assumes that both forms are equally easy to find and equally likely to stay near the release point; if not, recapture would not measure survival.)

| Point | What earns it |
|---|---|
| 1 | All four percentages correct |
| 1 | Claim that the benefit depends on the site |
| 1 | Evidence from both sites **and** a survival-and-reproduction explanation |
| 1 | Rejects "caused by soil": mutation is random; the environment selects |
</details>

## Question 6 (constructed response · core)

(a) Name the process in each fictional scenario.

1. Cells of strain P burst and release DNA. Nearby cells of strain Q take up a fragment and can now digest a new sugar.
2. A virus infects strain R. Some new virus particles package a piece of R's DNA and carry it into strain S.
3. Two cells are joined by a tube, and a copy of a plasmid passes from one to the other.
4. Inside one cell, a DNA segment carrying a resistance gene moves from a plasmid into the chromosome.

(b) Explain why processes 1–3 can spread an antibiotic-resistance gene through a bacterial population faster than mutation alone.
(c) Two related strains of a virus infect the same host cell. Explain how a new strain could arise.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** 1 transformation; 2 transduction; 3 conjugation; 4 transposition.

**(b)** A new mutation must arise by chance in each lineage, which is rare. In horizontal gene transfer, a gene that already exists passes directly between cells in the same generation, even between different strains. If an antibiotic is present, cells that receive the gene survive and reproduce, so resistance becomes common quickly.

**(c)** When both viruses copy their genetic material in the same cell, pieces can be exchanged or mixed when new particles are assembled. A new particle may carry genes from both parents: a recombinant strain with a new combination of traits.

| Point | What earns it |
|---|---|
| 1 | At least three of the four processes correctly named |
| 1 | All four correct |
| 1 | Existing gene transferred within a generation, then selected by the antibiotic |
| 1 | Recombination of genetic material from both viruses in one host cell |
</details>

## Question 7 (data analysis · stretch)

Three fictional mutant strains of a yeast each carry one mutation in or near the gene for enzyme E. Results relative to the normal (wild-type) strain, set at 100:

| Strain | mRNA for E | Amount of protein E | Total activity of E |
|---|---|---|---|
| Wild type | 100 | 100 | 100 |
| M1 | 22 | 20 | 21 |
| M2 | 98 | 97 | 3 |
| M3 | 101 | 102 | 99 |

(a) Calculate the activity per unit of protein (total activity ÷ amount of protein) for each mutant.
(b) For each mutant, state whether the mutation mainly changes the **amount** or the **type** of protein, and suggest where in the gene it might be.
(c) Explain why M3's mutation could still be a change in the DNA of the coding region.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** M1: 21 ÷ 20 = **1.05**. M2: 3 ÷ 97 = **0.03**. M3: 99 ÷ 102 = **0.97**. (Wild type: 1.0.)

**(b)** **M1** changes the **amount**: mRNA and protein both fall to about a fifth, but each molecule works normally (about 1.0 per unit). The mutation is likely in the **promoter** or another regulatory sequence, reducing transcription. **M2** changes the **type**: normal amounts of mRNA and protein, but each molecule has almost no activity. Likely a **missense** change in the coding region, for example in the active site. **M3** has no meaningful change in amount or activity: a **neutral** mutation.

**(c)** M3 could be a **silent** substitution (a new codon for the same amino acid), or a missense change to an amino acid with similar properties in a part of the protein that does not affect its function. The DNA changed, but the phenotype did not.

| Point | What earns it |
|---|---|
| 1 | All three ratios correct |
| 1 | M1 = amount, linked to a regulatory region, using both the mRNA and per-protein evidence |
| 1 | M2 = type, linked to an amino acid change affecting function |
| 1 | M3 explained as silent or a harmless missense |

Accept "M1 could be a mutation that makes the mRNA less stable" if supported by the data.
</details>

## How did you do?

- **Q1, Q2 or Q4 wrong:** rework Worked example 1 in the [study guide](/advanced-course-resources/biology/6-7-mutations-study-guide/) and look again at Figure 1.
- **Q3 wrong:** follow one chromosome through Figure 2.
- **Q5 or Q7 incomplete:** re-read "Is it beneficial, harmful or neutral? Context decides" and "Location matters", then Worked example 2.
- **Q6 wrong:** re-read "Variation for natural selection to act on".

Then tick off the [topic checklist](/advanced-course-resources/biology/6-7-mutations-checklist/).
