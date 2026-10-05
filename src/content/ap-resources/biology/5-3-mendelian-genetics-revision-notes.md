---
resourceId: "mb-ap-bio-5.3-revision-notes"
title: "Mendelian Genetics: Revision Notes (Biology 5.3)"
description: "One-page recap of segregation, independent assortment, cross ratios, the sum and product rules, pedigree clues and the chi-square test, with the mistakes that cost marks."
course: "biology"
unit: 5
topics: ["5.3"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-bio-5.3-study-guide"]
learningObjectives:
  - "Recall Mendel's two laws and the chromosome behaviour behind them"
  - "Recall the standard cross ratios and the steps of a chi-square test"
skills: ["1", "5"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
calculatorNote: "Chi-square critical values at p = 0.05: 3.84 (1 df), 5.99 (2 df), 7.81 (3 df)"
related: ["mb-ap-bio-5.3-study-guide", "mb-ap-bio-5.3-practice", "mb-ap-bio-5.3-checklist"]
next: "mb-ap-bio-5.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Segregation: the two alleles of a gene go to different gametes because homologues separate in meiosis I."
  - "Independent assortment: genes on different chromosomes sort into gametes independently."
  - "Multiply for independent events; add for mutually exclusive ways to the same outcome."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, figures and worked examples, use the [full study guide](/advanced-course-resources/biology/5-3-mendelian-genetics-study-guide/).

## Recap

- **Genotype** = the alleles an individual has (AA, Aa, aa). **Phenotype** = the observable trait. Homozygous = two identical alleles; heterozygous = two different.
- A **dominant** allele shows its phenotype in the heterozygote. Often it codes for a working protein, and one copy is enough.
- **Law of segregation:** each gamete gets one allele of each gene, because homologous chromosomes separate in meiosis I.
- **Law of independent assortment:** genes on different chromosomes are sorted independently, because each homologous pair lines up at metaphase I independently of the others. Linked genes are the exception.
- **Fertilization** joins two haploid gametes, restores the diploid number and creates new allele combinations.
- **Pedigrees:** squares are males, circles females, filled symbols affected.

## Key relationships

| Cross | Genotypic ratio | Phenotypic ratio |
|---|---|---|
| Aa × Aa | 1 AA : 2 Aa : 1 aa | 3 : 1 |
| Aa × aa (test cross) | 1 Aa : 1 aa | 1 : 1 |
| AA × aa | all Aa | all dominant |
| AaBb × AaBb | 9 genotypes | 9 : 3 : 3 : 1 |
| AaBb × aabb (test cross) | 1 : 1 : 1 : 1 | 1 : 1 : 1 : 1 |

| Rule or equation | Use |
|---|---|
| **P(A and B) = P(A) × P(B)** | independent events: separate genes, separate children |
| **P(A or B) = P(A) + P(B)** | mutually exclusive routes to one outcome, e.g. P(Aa) = 1/4 + 1/4 |
| **χ² = Σ (o − e)² ÷ e** | o = observed count, e = expected count |
| **df = categories − 1** | compare χ² with the critical value at p = 0.05 |

| Pedigree clue | Points to |
|---|---|
| two unaffected parents with an affected child | recessive |
| two affected parents with an unaffected child | dominant |
| affected daughter with an unaffected father | not X-linked recessive, so autosomal |

## Assumptions behind the numbers

- Mendel's ratios assume **complete dominance**, **unlinked genes**, and that every genotype survives equally well.
- Expected ratios are probabilities. Small samples scatter around them.
- The chi-square test needs **counts** in categories, not percentages or continuous measurements.

## Mistakes to avoid

1. Giving a genotypic ratio when the question asks for a phenotypic one, or the reverse.
2. Saying P(carrier) = 1/2 for an unaffected child of two carriers; it is 2/3.
3. Using number of offspring − 1 as degrees of freedom.
4. Writing "the null hypothesis is proved" or "accepted"; say "fail to reject".
5. Writing a null hypothesis that does not mention the expected ratio or the variables.
6. Applying independent assortment to genes on the same chromosome.

## Quick self-check

1. AaBb × aabb: probability of an aabb offspring? *(1/2 × 1/2 = 1/4)*
2. A monohybrid F₂ of 400 has 290 dominant and 110 recessive. χ² against 3 : 1? *(Expected 300 and 100; χ² = 100/300 + 100/100 = 1.33; df = 1; 1.33 < 3.84, so fail to reject.)*
3. Why is a test cross made with a homozygous recessive? *(It gives only recessive alleles, so each offspring's phenotype reveals the allele from the unknown parent.)*

Next: [practice questions](/advanced-course-resources/biology/5-3-mendelian-genetics-practice/).
