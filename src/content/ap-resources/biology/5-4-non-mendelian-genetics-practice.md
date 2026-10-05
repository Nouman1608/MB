---
resourceId: "mb-ap-bio-5.4-practice"
title: "Non-Mendelian Genetics: Practice Questions (Biology 5.4)"
description: "Seven original Marlbridge practice questions on pleiotropy, sex-linked and Z-linked crosses, organelle inheritance, gene mapping and chi-square tests of deviating ratios, with worked solutions."
course: "biology"
unit: 5
topics: ["5.4"]
resourceType: "practice-questions"
prerequisites:
  - "Mendelian ratios and the chi-square test"
prerequisiteResources: ["mb-ap-bio-5.4-study-guide"]
learningObjectives:
  - "Identify linkage, sex linkage, pleiotropy, codominance and maternal inheritance from cross data"
  - "Calculate recombination frequency and map distance, and order genes on a map"
  - "Use chi-square to decide whether data deviate from a Mendelian ratio"
  - "Predict offspring for X-linked and Z-linked crosses"
skills: ["1", "2", "5", "6"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Recombination frequency = recombinants ÷ total × 100%; 1% = 1 map unit. Chi-square critical values at p = 0.05: 3.84 (1 df), 5.99 (2 df), 7.81 (3 df)"
related: ["mb-ap-bio-5.4-study-guide", "mb-ap-bio-5.4-revision-notes", "mb-ap-bio-5.4-checklist"]
next: "mb-ap-bio-5.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working or reasoning."
  - "Name the pattern, then support it with a specific clue from the data."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data for every question: χ² = Σ (o − e)² ÷ e; degrees of freedom = number of categories − 1; critical values at p = 0.05 are 3.84 (1 df), 5.99 (2 df) and 7.81 (3 df); recombination frequency = recombinants ÷ total × 100%, and 1% = 1 map unit. All organisms with letter-named genes, and all data sets, are fictional.

## Question 1 (multiple choice · foundation)

In a hypothetical mammal, animals with a particular allele have pale fur **and** are deaf. Across many litters over several generations, every pale animal is deaf and every deaf animal is pale; no pale hearing or dark deaf animals ever appear. Which explanation is best supported?

- (A) The fur gene and the hearing gene are linked on the same chromosome.
- (B) One gene affects both fur colour and hearing (pleiotropy).
- (C) The fur-colour alleles are codominant.
- (D) The two traits are inherited through the mitochondria.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** If one gene causes both effects, the traits can never be separated: every animal with the allele shows both. That matches the data.

- (A) Linked genes are usually inherited together, but crossing over occasionally separates them. Over many litters some recombinants (pale hearing, or dark deaf) would appear.
- (C) Codominance describes a heterozygote showing both phenotypes of one trait. It does not explain two different traits always appearing together.
- (D) Mitochondrial inheritance would make the traits follow the mother. Nothing in the data shows that, and it would still not explain why the two traits always go together.
</details>

## Question 2 (multiple choice · core)

A hypothetical X-linked recessive condition is caused by allele Xᵃ. A man with the condition (XᵃY) and a woman who is a carrier (XᴬXᵃ) have children. What is the probability that their first child is a daughter with the condition?

- (A) 0
- (B) 1/8
- (C) 1/4
- (D) 1/2

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Every daughter receives the father's Xᵃ. From the mother she receives Xᴬ or Xᵃ with equal chance, so P(affected, given a daughter) = 1/2. P(daughter) = 1/2. P(affected daughter) = 1/2 × 1/2 = **1/4**.

- (A) assumes daughters cannot be affected. They can, if they get Xᵃ from both parents, and here the father always gives Xᵃ.
- (B) multiplies by an extra 1/2, as if the father's allele were uncertain. He has only one X, so he always gives Xᵃ to a daughter.
- (D) is the probability that a daughter is affected **given** the child is a daughter, not the probability for the first child.
</details>

## Question 3 (multiple choice · core)

A hypothetical plant species sometimes has variegated (green and white) leaves. A gardener makes reciprocal crosses:

| Cross | Ovule (seed) parent | Pollen parent | Offspring |
|---|---|---|---|
| 1 | variegated | green | a mixture of green, variegated and white seedlings |
| 2 | green | variegated | all green |

Which explanation best fits these results?

- (A) Variegation is caused by a dominant nuclear allele.
- (B) Variegation is caused by faulty chloroplasts, which are passed on through the ovule and shared randomly between cells.
- (C) Variegation is caused by an X-linked recessive allele.
- (D) Variegation is caused by two linked nuclear genes.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The offspring follow the seed parent: crosses that differ only in which parent is female give different results. Chloroplasts come from the ovule, not the pollen, and their random sharing between dividing cells explains the mixture of green, variegated and white seedlings in cross 1.

- (A) A nuclear allele would come equally from ovule or pollen, so reciprocal crosses would give the same result. A dominant allele from the pollen parent would also show in cross 2.
- (C) Sex linkage needs sex chromosomes that differ between the parents; even then it would not produce a random mixture of green, variegated and white offspring.
- (D) Linked nuclear genes would still be inherited from both parents and give the same results in both directions.
</details>

## Question 4 (multiple choice · core)

Three genes on one chromosome have these recombination frequencies: A–B 12%, B–C 7%, A–C 19%. What is the gene order?

- (A) A–B–C
- (B) B–A–C
- (C) A–C–B
- (D) The genes cannot be on the same chromosome.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The largest distance is A–C (19 map units). The other two add up to it: 12 + 7 = 19. So B lies between A and C.

- (B) puts A in the middle; then B–A + A–C would equal B–C, but 12 + 19 is not 7.
- (C) puts C in the middle; then A–C + C–B would equal A–B, but 19 + 7 is not 12.
- (D) All three frequencies are well below 50%, which is evidence that the genes **are** linked.
</details>

## Question 5 (constructed response · core)

In a hypothetical plant, tall (T) is dominant to dwarf (t) and smooth leaves (S) are dominant to hairy leaves (s). A TTSS plant is crossed with a ttss plant. The F₁ (TtSs) is test crossed with ttss. There are 800 offspring:

| Phenotype | Tall, smooth | Dwarf, hairy | Tall, hairy | Dwarf, smooth |
|---|---|---|---|---|
| Number | 331 | 325 | 74 | 70 |

(a) State a null hypothesis based on independent assortment and give the expected counts.
(b) Calculate χ², and state your conclusion.
(c) Identify the recombinant classes and calculate the map distance between the two genes.
(d) Explain how the recombinant offspring arose.
(e) Predict which classes would be largest if the F₁ had instead come from a TTss × ttSS cross. Would the map distance change?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** "The height and leaf-hair genes assort independently, so the test cross gives the four phenotypes in a 1 : 1 : 1 : 1 ratio; any difference is due to chance." Expected: 800 ÷ 4 = **200** each.

**(b)** χ² = (131² + 125² + 126² + 130²) ÷ 200 = (17 161 + 15 625 + 15 876 + 16 900) ÷ 200 = 65 562 ÷ 200 = **327.8**. df = 3; critical value 7.81. 327.8 > 7.81, so **reject** the null hypothesis: the genes do not assort independently.

**(c)** The F₁ received T with S, and t with s. So the parental classes are tall smooth and dwarf hairy (the large classes). **Recombinants: tall hairy and dwarf smooth**, 74 + 70 = 144. Recombination frequency = 144 ÷ 800 × 100 = **18%**, so **18 map units**.

**(d)** The genes are on the same chromosome. In prophase I of meiosis in the F₁, crossing over between non-sister chromatids of the homologous pair exchanged the segments between the two genes, producing chromosomes carrying T with s and t with S. Gametes with these chromosomes gave the recombinant offspring.

**(e)** The F₁ would carry T with s on one homologue and t with S on the other. The parental (largest) classes would now be **tall hairy and dwarf smooth**, about 328 each; tall smooth and dwarf hairy would be recombinants, about 72 each. The **map distance would not change** (18 map units), because it depends on how far apart the genes are, not on which alleles are together.

| Point | What earns it |
|---|---|
| 1 | Null hypothesis names independent assortment and 1 : 1 : 1 : 1; expected 200 each |
| 1 | χ² ≈ 328 with df = 3 and the correct decision to reject |
| 1 | Recombinant classes correctly identified **and** 18 map units |
| 1 | Crossing over between the two genes in prophase I explained |
| 1 | Correct prediction of the new large classes **and** unchanged distance |
</details>

## Question 6 (constructed response · core)

In a hypothetical bird species, a recessive allele on the Z chromosome (Zᵖ) causes a pale beak; the dominant allele (Zᴾ) gives a normal beak. Birds use the ZW system.

(a) A pale-beaked male is crossed with a normal-beaked female. Give the genotypes of both parents, and predict the phenotypes of their sons and daughters.
(b) From this cross, a breeder hatches 52 chicks: 25 have pale beaks and 27 have normal beaks. Explain how beak colour could let the breeder sort the chicks by sex.
(c) Explain why pale beaks are expected to be more common in females than in males in this species, and contrast this with X-linked recessive traits in mammals.
(d) In honeybees, a queen mates with a male (drone) carrying a rare allele. Explain why none of the queen's sons can inherit that allele.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Male: **ZᵖZᵖ** (males are ZZ; he shows the recessive trait, so both Z carry p). Female: **ZᴾW**. Sons receive Zᴾ from the mother and Zᵖ from the father: **ZᴾZᵖ, all normal beaks** (carriers). Daughters receive W from the mother and Zᵖ from the father: **ZᵖW, all pale beaks**.

**(b)** Every pale chick should be female and every normal chick male. So the 25 pale chicks are expected to be females and the 27 normal chicks males (a close-to-even split, as expected for sex). Beak colour at hatching would act as a sex marker.

**(c)** Female birds have one Z chromosome, so a single recessive Z-linked allele is expressed. Males have two Z chromosomes and need two copies. In mammals it is the reverse: XY males have one X and show X-linked recessive traits more often than XX females. In both cases, the sex with only one copy of the chromosome is affected more often.

**(d)** Honeybee males develop from **unfertilized** eggs, so a queen's sons carry only her chromosomes. The drone's sperm fertilizes eggs that develop into females. His allele can pass to daughters, but never to sons.

| Point | What earns it |
|---|---|
| 1 | Both parental genotypes correct |
| 1 | Sons all normal (carriers) **and** daughters all pale |
| 1 | Beak colour used as a sex marker, consistent with the 25 : 27 data |
| 1 | Single Z in females explained, **and** contrasted with single X in mammalian males |
| 1 | Males from unfertilized eggs, so no paternal chromosomes in sons |
</details>

## Question 7 (constructed response · stretch)

In a hypothetical fish, true-breeding black fish (CᴮCᴮ) are crossed with true-breeding silver fish (CˢCˢ). The F₁ fish all have a mixture of separate fully black scales and fully silver scales. Crossing F₁ fish gives 200 F₂ fish: 41 black, 112 mixed and 47 silver.

(a) Is this incomplete dominance or codominance? Justify your answer.
(b) State a null hypothesis and test it with chi-square.
(c) Another student combines the black and mixed fish (153) and tests a 3 : 1 ratio. She gets χ² = 0.24 and concludes that black is completely dominant. Evaluate her method.
(d) Mixed-scale fish also grow more slowly. In every family studied, slow growth appears in all mixed fish and in no black or silver fish. Explain why this suggests pleiotropy rather than a second gene linked to the scale gene.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** **Codominance.** The heterozygote expresses **both** phenotypes fully (whole black scales and whole silver scales). Incomplete dominance would give a blend, such as uniformly grey scales.

**(b)** Null hypothesis: "Scale colour is controlled by one gene with codominant alleles, so the F₂ occurs in a 1 : 2 : 1 ratio of black : mixed : silver; differences are due to chance." Expected: 50, 100, 50.

χ² = (41 − 50)² ÷ 50 + (112 − 100)² ÷ 100 + (47 − 50)² ÷ 50 = 81 ÷ 50 + 144 ÷ 100 + 9 ÷ 50 = 1.62 + 1.44 + 0.18 = **3.24**. df = 3 − 1 = 2; critical value 5.99. 3.24 < 5.99, so **fail to reject**: the data are consistent with a 1 : 2 : 1 ratio.

**(c)** Her calculation is correct for the categories she used, (153 − 150)² ÷ 150 + (47 − 50)² ÷ 50 = 0.06 + 0.18 = 0.24, but the method is invalid. Mixed fish have a distinct phenotype, so black and mixed are different categories. Combining them throws away the information that heterozygotes look different, which is the evidence against complete dominance. Failing to reject a 3 : 1 hypothesis does not show that it is the right model; the F₁ phenotype already rules it out.

**(d)** If slow growth were caused by a separate gene linked to the scale gene, crossing over would occasionally separate them. Some mixed fish would then grow normally, or some black or silver fish would grow slowly. None do. The simplest explanation is that the same gene (the heterozygous CᴮCˢ genotype) affects both scale colour and growth: pleiotropy.

| Point | What earns it |
|---|---|
| 1 | Codominance, justified by both phenotypes being fully expressed |
| 1 | Null hypothesis with 1 : 2 : 1 and expected 50 : 100 : 50 |
| 1 | χ² = 3.24, df = 2, fail to reject with comparison to 5.99 |
| 1 | Explains that lumping a distinct heterozygote phenotype is invalid |
| 1 | No recombinants seen, so pleiotropy rather than linkage |
</details>

## How did you do?

- **Q1 or Q7(d) wrong:** re-read "Pleiotropy" in the [study guide](/advanced-course-resources/biology/5-4-non-mendelian-genetics-study-guide/) and the misconception about pleiotropy and linkage.
- **Q2 or Q6 wrong:** rework Worked example 3 and Figure 2, then re-read "Other sex-determination systems".
- **Q3 wrong:** re-read "Non-nuclear inheritance", especially reciprocal crosses.
- **Q4 or Q5 wrong:** rework Worked example 2 and Figure 1. Divide recombinants by the total, and check which classes are parental.
- **Q7(a)–(c) wrong:** rework Worked example 1 and compare incomplete dominance with codominance.

Then tick off the [topic checklist](/advanced-course-resources/biology/5-4-non-mendelian-genetics-checklist/).
