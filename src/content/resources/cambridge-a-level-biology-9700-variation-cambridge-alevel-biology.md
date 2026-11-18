---
title: "Cambridge A Level Biology (9700): Variation"
resourceType: "study-guides"
subject: "biology"
level: ["a-levels"]
topic: "Selection and evolution"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9700"]
syllabusSeries: "For examination in 2025, 2026 and 2027"
stage: "A"
order: 17.1
syllabusTopics:
  - qualification: "a-level"
    topic: "selection-and-evolution-cambridge-alevel-biology"
    subtopic: "variation-cambridge-alevel-biology"
description: "A focused guide to 9700 section 17.1: genetic and environmental causes, continuous and discontinuous variation, polygenes, and the t-test worked in full."
author: "marlbridge-academic-team"
reviewer: "hina-mogul"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hina-mogul (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section **17.1 Variation** of the Cambridge International AS & A Level Biology 9700 syllabus for examination in 2025, 2026 and 2027. It is A Level content, examined in Paper 4, and the t-test also appears in Paper 5. The [Selection and evolution study guide](/resources/a-level-biology-9700-selection-and-evolution/) gives a short overview of 17.1; this page goes further into the genetic basis of the two types of variation, with a model of additive polygenes, and works a t-test from raw data to conclusion. For recall use the [17.1 revision notes](/resources/cambridge-a-level-biology-9700-variation-cambridge-alevel-biology-revision-notes/); to test yourself use the [17.1 practice questions](/resources/cambridge-a-level-biology-9700-variation-cambridge-alevel-biology-practice/).

## What 17.1 asks you to do

| Outcome | In short |
|---|---|
| 17.1.1 | Explain, with examples, that phenotypic variation is caused by genetic factors, environmental factors, or both |
| 17.1.2 | Explain discontinuous and continuous variation |
| 17.1.3 | Explain the genetic basis of each |
| 17.1.4 | Use the t-test to compare the means of two samples (formula provided) |

## Causes of phenotypic variation

The phenotype is the result of the **genotype** interacting with the **environment**. Examiners want an example for each category, so learn one clear case of each:

| Cause | Example | Why it fits |
|---|---|---|
| Genetic only | ABO blood group | Set by the alleles inherited; diet or lifestyle cannot change it |
| Environmental only | A scar, or the language a person speaks | Identical twins can differ completely |
| Both | Human height; mass of a plant | Alleles set a potential range; nutrition, light or disease decide where in that range the individual ends up |

A useful test for "environmental" is to compare **genetically identical** individuals (identical twins, cuttings from one plant, a clone of bacteria). Any variation between them must be environmental. Conversely, raising genetically different individuals in **identical conditions** reveals the genetic contribution.

## Discontinuous and continuous variation

| Feature | Discontinuous | Continuous |
|---|---|---|
| Phenotypes | A few distinct categories, no intermediates | A range of values between two extremes |
| Data | Qualitative; counted | Quantitative; measured |
| Graph | Bar chart with gaps | Histogram; often a normal distribution |
| Example | ABO blood group | Human height, leaf length |
| Number of genes | One or a few | Many (polygenes) |
| Effect of each allele | Large | Small and additive |
| Effect of environment | Little or none | Usually large |

## The genetic basis explained

### Discontinuous variation

A single gene (or a few genes) with alleles that have **large effects** decides the phenotype. Different combinations of alleles give clearly different phenotypes. For ABO blood groups, the alleles Iᴬ, Iᴮ and Iᴼ give exactly four phenotypes: A, B, AB and O. Because each allele's effect is large and the environment has little effect, no intermediate forms exist.

### Continuous variation

Many genes at different loci (**polygenes**) affect the same characteristic. Each gene has alleles that **add** a small amount to the phenotype. The total effect depends on how many "contributing" alleles an individual has, and the environment then blurs the steps between genotypes into a smooth range.

### Worked example 1: a model of additive polygenes

A plant's height is controlled by three unlinked genes, A, B and C. Each **capital** allele adds 5 cm to a base height of 20 cm; lower-case alleles add nothing. Cross AaBbCc × AaBbCc.

Each offspring has six alleles at these loci, and each allele is a capital with probability ½. The number of capital alleles can be 0 to 6, so seven height classes are possible:

| Capital alleles | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| Height / cm | 20 | 25 | 30 | 35 | 40 | 45 | 50 |
| Expected proportion (out of 64) | 1 | 6 | 15 | 20 | 15 | 6 | 1 |

Even with only three genes, the distribution is already bell-shaped with most plants in the middle. With more genes, and with the environment adding variation within each genotype, the classes merge into the **continuous, normal distribution** seen in real populations.

## The t-test

### When to use it

Use the t-test to decide whether the **means of two samples** of **continuous data** differ significantly. The data should be roughly **normally distributed**. (To compare observed and expected numbers in categories, use chi-squared instead.)

### The formula (provided in the exam)

```
t = (x̄₁ − x̄₂) ÷ √( s₁²/n₁ + s₂²/n₂ )
degrees of freedom = n₁ + n₂ − 2
```

where x̄ is a sample mean, s the sample standard deviation and n the sample size. You must work out the degrees of freedom yourself.

### The hypotheses

- **Null hypothesis**: there is no significant difference between the two means; any difference is due to chance.
- If t is **greater than** the critical value at p = 0.05, reject the null hypothesis: the difference is **significant**.
- If t is **less than** the critical value, accept the null hypothesis: the difference is **not significant**.

### Worked example 2: leaf length in shade and sun

Illustrative data: length of leaves (mm) from plants of one species in shaded and sunny sites, n = 10 each.

```
shaded: 62 58 65 70 61 66 59 64 68 63
sunny:  55 52 60 57 50 58 54 56 53 59
```

**Step 1. Means.** Shaded 636 ÷ 10 = 63.6 mm. Sunny 554 ÷ 10 = 55.4 mm.

**Step 2. Standard deviations** (from the formula or a calculator): shaded s = 3.81, so s² = 14.49; sunny s = 3.20, so s² = 10.27.

**Step 3. Denominator.**

```
s₁²/n₁ + s₂²/n₂ = 14.49/10 + 10.27/10 = 1.449 + 1.027 = 2.476
√2.476 = 1.574
```

**Step 4. t.** t = (63.6 − 55.4) ÷ 1.574 = 8.2 ÷ 1.574 = **5.21**.

**Step 5. Degrees of freedom.** 10 + 10 − 2 = **18**. The critical value at p = 0.05 for 18 degrees of freedom is 2.10 (the table will be given).

**Step 6. Conclusion.** 5.21 > 2.10, so the probability that the difference is due to chance is less than 0.05. Reject the null hypothesis: shaded leaves are **significantly longer** than sunny leaves.

**Step 7. Interpretation.** The test shows that a difference exists, not why. If the plants were not genetically identical, the difference could be genetic, environmental or both. Growing cuttings of one plant in both conditions would separate the two causes.

## Common mistakes

- Giving "height" as a purely genetic example. It is affected by both genes and environment.
- Describing continuous variation as "having many phenotypes". Say it shows a **range of values** with no distinct categories.
- Explaining continuous variation as "many alleles". The key idea is **many genes**, each with **small additive** effects, plus the environment.
- Using n₁ + n₂ − 1 for degrees of freedom. The t-test uses **n₁ + n₂ − 2**.
- Concluding that a significant t-test "proves" the cause. It only shows the means are unlikely to differ by chance.
- Using standard deviation where the formula needs s² (variance).

## Exam technique

- **Explain, with examples** (17.1.1): name the example and say why it belongs in its category.
- **Explain** the genetic basis (17.1.3): mention number of genes, size of allele effect and role of environment for each type.
- **Use** the t-test (17.1.4): show means, s², the substitution, t, degrees of freedom, the critical value and a conclusion about the null hypothesis, in that order.
- Round only at the end, and give t to two or three significant figures.

## Next steps

Revise with the [17.1 revision notes](/resources/cambridge-a-level-biology-9700-variation-cambridge-alevel-biology-revision-notes/) and test yourself with the [17.1 practice questions](/resources/cambridge-a-level-biology-9700-variation-cambridge-alevel-biology-practice/). Variation is what selection acts on: continue with the [natural and artificial selection study guide](/resources/cambridge-a-level-biology-9700-natural-and-artificial-selection-cambridge-alevel/). Meiosis, a source of genetic variation, is in the [passage of information from parents to offspring study guide](/resources/cambridge-a-level-biology-9700-passage-of-information-from-parents-to-offspring-cambridge/).
