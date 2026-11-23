---
title: "AQA A-level Biology (7402): Populations"
resourceType: "study-guides"
subject: "biology"
level: ["a-levels"]
topic: "Genetics, populations, evolution and ecosystems"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7402"]
syllabusSeries: "For first teaching 2015"
order: 7.2
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "genetics-populations-evolution-and-ecosystems-aqa-alevel-biology"
    subtopic: "populations-aqa-alevel-biology"
description: "Study guide to AQA A-level Biology 7402 section 3.7.2: populations, gene pools, allele frequency and Hardy-Weinberg calculations, with worked examples."
author: "marlbridge-academic-team"
reviewer: "hina-mogul"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hina-mogul (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers **3.7.2 Populations** from AQA A-level Biology (7402), in Topic 7, *Genetics, populations, evolution and ecosystems*. It is A-level-only content, examined on Paper 2 and Paper 3. The broader guide to [populations, Hardy-Weinberg, selection and speciation](/resources/aqa-a-level-biology-populations-hardy-weinberg-selection-and-speciation/) gives the core method with a carrier-number calculation and a test against observed genotype counts; this page adds where the equation comes from, the dominant-phenotype starting point, codominant data, percentages, and comparing generations. Use the [populations revision notes](/resources/aqa-a-level-biology-7402-populations-revision-notes/) for recall and the [populations practice questions](/resources/aqa-a-level-biology-7402-populations-practice/) to test yourself.

## What the specification asks for

| Statement | What you must be able to do |
|---|---|
| Species exist as one or more populations | Explain that a species can be split into separate populations |
| A population is a group of organisms of the same species occupying the same space at the same time that can potentially interbreed | Give the definition with all its parts |
| The concepts of gene pool and allele frequency | Define both and calculate allele frequency |
| The Hardy–Weinberg principle is a mathematical model predicting that allele frequencies will not change from generation to generation | State the prediction |
| The conditions under which the principle applies | List them and explain why each matters |
| Calculate allele, genotype and phenotype frequencies from data and from p² + 2pq + q² = 1 | Carry out all three types of calculation |
| Understand and use p + q = 1 | Move between the two equations |

Here p is the frequency of one (dominant) allele and q is the frequency of the other (recessive) allele.

## Populations and gene pools

A species may exist as one population or as several, for example in separate lakes, islands or valleys. Each population has its own **gene pool**: all the alleles of all the genes in that population at one time. Because populations can be separated, their gene pools can come to differ, which is the starting point for speciation in 3.7.3.

**Allele frequency** is the proportion of all copies of a gene in the gene pool that are one particular allele. In a diploid organism, every individual carries two copies, so a population of 200 has 400 copies of each gene.

## Where the equation comes from

If gametes combine at random, the chance of each genotype is the product of the allele frequencies:

| | Sperm: A (p) | Sperm: a (q) |
|---|---|---|
| **Egg: A (p)** | AA: p² | Aa: pq |
| **Egg: a (q)** | Aa: pq | aa: q² |

Adding the four cells: p² + 2pq + q². Since p + q = 1, (p + q)² = 1, so p² + 2pq + q² = 1. This explains why the heterozygote term is 2pq: there are two ways to be heterozygous.

## The conditions, and what each one rules out

| Condition | If it is broken |
|---|---|
| Large population | Chance events (genetic drift) change allele frequencies |
| Mating is random | Some genotypes become more or less common than predicted |
| No mutations | New alleles appear or one allele becomes another |
| No migration into or out of the population | Alleles are added or removed by gene flow |
| No selection | Some alleles are passed on more often than others |

In a data question, if the observed frequencies do not match those predicted, the principle's conditions are not being met. Your job is to suggest which one, with a reason from the context.

## Worked example 1: starting from the dominant phenotype

In a population of a plant, 84% have purple flowers (dominant) and 16% white (recessive). Find the frequency of heterozygotes.

```
Recessive phenotype:   q² = 0.16      (always start here)
                       q  = √0.16 = 0.4
                       p  = 1 − 0.4 = 0.6
Heterozygotes:         2pq = 2 × 0.6 × 0.4 = 0.48, so 48%
Homozygous dominant:   p² = 0.36, so 36%
Check:                 0.36 + 0.48 + 0.16 = 1.00
```

The trap is to treat 0.84 as p² or as p. The dominant phenotype includes two genotypes (p² + 2pq), so you cannot get p from it directly. Always use the recessive phenotype.

## Worked example 2: codominant alleles

When alleles are codominant, each genotype has its own phenotype, so you can count alleles directly and do not need to take square roots. A population of 500 snapdragon-like plants (invented data), with codominant alleles R and W, has 245 red (RR), 210 pink (RW) and 45 white (WW).

```
Total alleles      = 2 × 500 = 1000
R alleles         = 2 × 245 + 210 = 700      p = 0.70
W alleles         = 2 × 45 + 210 = 300       q = 0.30
Expected pink      = 2pq × 500 = 2 × 0.7 × 0.3 × 500 = 210
```

Observed and expected match exactly here, so these data are consistent with Hardy–Weinberg equilibrium.

## Worked example 3: comparing two generations

A population of moths was sampled twice (invented data). Generation 1: 9% of moths showed the recessive pale phenotype. Generation 10: 25% were pale.

```
Generation 1:  q² = 0.09  →  q = 0.3
Generation 10: q² = 0.25  →  q = 0.5
Change in q:   0.5 − 0.3 = 0.2  (a rise of 0.2 ÷ 0.3 × 100 = 66.7%)
```

The Hardy–Weinberg model predicts no change, so the change in allele frequency shows that one of the conditions does not apply. If the habitat had changed so that pale moths were harder for predators to see, the most likely explanation is selection favouring the pale allele. This links to directional selection in 3.7.3.

## Percentages, decimals and numbers of individuals

- Hardy–Weinberg terms are frequencies from 0 to 1. Convert percentages first: 4% → 0.04.
- To find a number of individuals, multiply the frequency by the population size.
- Round only at the end; rounding q early changes p², 2pq and the final count.
- If a question gives "1 in 2500 people", q² = 1 ÷ 2500 = 0.0004.

## Common mistakes

- Taking q as the recessive phenotype frequency instead of its square root.
- Using the dominant phenotype to find p directly.
- Writing pq instead of 2pq for heterozygotes.
- Forgetting that each individual carries two alleles when counting.
- Defining a population without "same species", "same place and time" or "can interbreed".
- Saying the principle predicts genotype frequencies stay at 25 : 50 : 25; it predicts constant allele frequencies, whatever their values.
- Listing conditions without linking a mismatch in data to a specific condition.

## Exam technique for AQA command words

| Command word | What earns the marks |
|---|---|
| Calculate | Show q², q, p and the term required, each on a line; units are frequencies or percentages |
| Use the Hardy–Weinberg equation | Write the equation and the values substituted |
| Explain (a mismatch) | Name a condition that is not met and say how it changes allele frequency |
| Suggest | Use the context: an isolated island suggests a small population; a new predator suggests selection |

## Where to go next

- [Populations revision notes](/resources/aqa-a-level-biology-7402-populations-revision-notes/)
- [Populations practice questions](/resources/aqa-a-level-biology-7402-populations-practice/)
- What changes allele frequencies: [evolution may lead to speciation study guide](/resources/aqa-a-level-biology-7402-evolution-may-lead-to-speciation/)
- Monohybrid and dihybrid crosses: [inheritance and chi-squared](/resources/aqa-a-level-biology-inheritance-and-chi-squared/)

## Official syllabus

AQA AS and A-level Biology specification (7401, 7402), for first teaching 2015, published by AQA. This guide is aligned to section 3.7.2.
