---
title: "AQA A-level Biology: Inheritance and Chi-squared (7402) -- Revision Notes"
seoTitle: "AQA A-level Biology Inheritance and Chi-squared Notes"
resourceType: "revision-notes"
subject: "biology"
level: ["a-levels"]
topic: "Inheritance and Chi-squared"
boards: ["aqa"]
qualifications: ["a-level"]
stage: "A"
syllabusCodes: ["7402"]
syllabusSeries: "For first teaching 2015"
order: 169
syllabusTopics:
  - qualification: "a-level"
    topic: "genetics-populations-evolution-and-ecosystems-aqa-alevel-biology"
description: "Condensed revision notes on crosses, linkage, epistasis, ratios and the chi-squared test for AQA A-level Biology 7402 section 3.7.1, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---
These are condensed revision notes for AQA A-level Biology (7402) section 3.7.1, *Inheritance*, from the AQA AS and A-level Biology specification for first teaching 2015. 3.7.1 is A-level only content (not AS), in topic 7, assessed in A-level Paper 2 and Paper 3. For full explanations read the [study guide](/resources/aqa-a-level-biology-inheritance-and-chi-squared/), then try the [practice questions](/resources/aqa-a-level-biology-inheritance-and-chi-squared-practice/). See also the [AQA A-level Biology hub](/boards/aqa/a-level/biology/), the [printable checklist](/checklists/aqa/a-level/biology/) and the [free diagnostics](/diagnostics/).

## Definitions to recall word for word

| Term | Definition |
|---|---|
| Genotype | The genetic constitution of an organism |
| Phenotype | The expression of the genetic constitution and its interaction with the environment |
| Allele | One version of a gene; there may be many alleles of one gene |
| Locus | Position of a gene on a chromosome; a diploid has two alleles per locus |
| Homozygous / heterozygous | Two identical alleles / two different alleles at a locus |
| Dominant / recessive | Expressed in the heterozygote / expressed only when no dominant allele is present |
| Codominant | Both alleles expressed in the heterozygote |
| Autosomal linkage | Genes on the same autosome, inherited together unless crossing over separates them |
| Epistasis | An allele at one locus masks or suppresses expression of alleles at another locus |

## Ratios to recognise

| Cross | Offspring ratio | Meaning |
|---|---|---|
| Aa × Aa | 3 : 1 | Dominant : recessive |
| Aa × aa (test cross) | 1 : 1 | Parent is heterozygous |
| Codominant heterozygotes crossed | 1 : 2 : 1 | Phenotype shows genotype |
| AaBb × AaBb | 9 : 3 : 3 : 1 | Two unlinked genes |
| AaBb × aabb | 1 : 1 : 1 : 1 | Unlinked genes, test cross |
| Linked genes, test cross | Two parental classes much larger than two recombinant classes | Crossing over is rare |
| Recessive epistasis | 9 : 3 : 4 | Two classes merge: homozygous recessive masks other locus |
| Dominant epistasis | 12 : 3 : 1 | Dominant allele masks other locus |
| Complementary genes | 9 : 7 | Both loci need a functional allele |
| X-linked cross | Different ratios in males and females | Males have one X allele |

## Method: a genetic diagram

1. Key for the alleles (capital letter for dominant; superscripts for codominance).
2. Write parental phenotypes and genotypes.
3. List the gametes: a single allele per gene (two genes give four gamete types).
4. Fertilisation grid or list of offspring genotypes.
5. Offspring phenotypes and ratio. Write the expected numbers if a total is given.

For a probability question, work gene by gene and multiply: P(both events) = P(A) × P(B). Add probabilities for alternative routes to one outcome. Example: from AaBb × AaBb, P(aabb) = 1/4 × 1/4 = 1/16, and P(dominant for both) = 3/4 × 3/4 = 9/16.

## Multiple alleles and sex linkage

- **ABO:** the alleles Iᴬ and Iᴮ show codominance; i is recessive to both. Group O is always ii. Group AB parent × group O parent gives only group A (Iᴬi) and group B (Iᴮi), in equal numbers.
- **Human sex chromosomes:** female XX, male XY. A male has one allele of each X-linked gene, so a recessive allele is always expressed in him.
- **X-linked recessive:** an affected mother (XᵈXᵈ) passes the allele to every son, so all sons are affected. An unaffected father (XᴰY) gives his X to daughters, so all daughters are carriers if the mother is XᵈXᵈ.
- **Birds:** male ZZ, female ZW. The female is the one with a single copy of each Z-linked gene.
- **Spotting sex linkage:** the ratio differs between sexes, or reciprocal crosses give different results.

## Autosomal linkage

In a test cross of a heterozygote (coupling: AB on one chromosome, ab on the other) with a double recessive, the offspring show:

- two parental classes (AB, ab) in large and similar numbers
- two recombinant classes (Ab, aB) in small and similar numbers, made by crossing over in meiosis

Calculation: percentage recombinants = recombinants ÷ total × 100. Example: 54 recombinants in 300 offspring is 18%. Compare with 50% recombinants (a 1 : 1 : 1 : 1 ratio) for unlinked genes.

## Epistasis: how to explain it

Use a short chain in your answer:

1. Count the classes and the total of the ratio. Two heterozygous parents give a total of 16.
2. Say which classes have merged (for example 3 + 1 = 4 white in a 9 : 3 : 4 ratio).
3. Name the masking genotype (for example cc hides the second gene).
4. State the effect: the allele at one locus prevents or changes the expression of alleles at the other locus, so a dihybrid ratio is modified.

Worked reminder: in a flower, pigment needs allele K, and a second gene turns it from pink (rr) to red (R_). Kk Rr × Kk Rr gives 9 red : 3 pink : 4 white if kk is white whatever the second gene carries. From 64 offspring expect 36 red, 12 pink, 16 white.

## Interpreting results from a cross

- Count the classes, then divide the totals by the smallest number to find the closest simple ratio.
- A ratio close to 3 : 1 or 1 : 1 points to one gene; a four-class ratio points to two.
- If the numbers differ between males and females, think of sex linkage.
- If the two largest classes are the parental types, think of autosomal linkage.
- Always follow a suggested ratio with a chi-squared test before saying the data fit it.

## Method: chi-squared in six steps

1. State the null hypothesis: chance alone explains any gap between observed and expected counts.
2. Work out expected numbers: total × (part of ratio ÷ sum of ratio).
3. Calculate (O − E)² ÷ E for each class and add: χ² = Σ (O − E)² / E.
4. Degrees of freedom = classes − 1.
5. Look up the critical value for p = 0.05.
6. Conclude in words that refer to the context.

| Degrees of freedom | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| Critical value at p = 0.05 | 3.84 | 5.99 | 7.81 | 9.49 |

Wording: if calculated χ² is smaller than the critical value, the difference is not significant, the null hypothesis is not rejected, and the difference is probably due to chance. If it is larger, the difference is significant and the null hypothesis is rejected.

### Worked reminders

- **3:1 fits:** observed 141 : 59, expected 150 : 50. χ² = 81/150 + 81/50 = 0.54 + 1.62 = 2.16. Degrees of freedom 1, critical 3.84. Not significant.
- **3:1 rejected:** observed 94 : 66, expected 120 : 40. χ² = 676/120 + 676/40 = 5.63 + 16.90 = 22.53. Larger than 3.84, so significant: the results do not fit 3 : 1.
- **1 : 2 : 1:** observed 33, 66, 21 against 30, 60, 30. χ² = 0.30 + 0.60 + 2.70 = 3.60. Degrees of freedom 2, critical 5.99. Not significant.
- **12 : 3 : 1:** observed 101, 21, 6 against 96, 24, 8 (n = 128). χ² = 0.26 + 0.38 + 0.50 = 1.14. Degrees of freedom 2. Not significant.

## Must-know distinctions

- **Genotype vs phenotype:** a heterozygote and a homozygous dominant have different genotypes but the same phenotype.
- **Dominant vs codominant:** in codominance the heterozygote shows both traits, not just one.
- **Linkage vs epistasis:** linkage changes how alleles travel together (parental classes larger); epistasis changes how loci interact (classes merge, but the genes still assort independently).
- **Observed vs expected:** expected numbers come from the ratio and the total, not from the observed numbers.
- **Not significant vs proved:** a non-significant result only means chance could explain the difference.

## Quick self-test

1. Define phenotype.
2. Give the offspring ratio from Aa × aa.
3. Give the phenotype ratio when two heterozygotes of a codominant pair are crossed.
4. What is the probability of aabb from AaBb × AaBb?
5. A group AB man and a group O woman have children. Which groups are possible?
6. A father with an X-linked recessive condition and a mother who is not a carrier have children. What are the outcomes?
7. How many degrees of freedom for a chi-squared test with four phenotype classes?
8. A cross expected 1 : 1 gives 45 : 35. Calculate χ² and state the conclusion (critical value 3.84).
9. Which ratio is typical of recessive epistasis?
10. In a test cross, 54 of 300 offspring are recombinants. What percentage is this?
11. Why must the chi-squared test use counts, not percentages?

### Answers

1. The expression of the genetic constitution and its interaction with the environment.
2. 1 : 1.
3. 1 : 2 : 1.
4. 1/4 × 1/4 = 1/16.
5. Group A (Iᴬi) and group B (Iᴮi), each with probability 1/2.
6. All sons are unaffected (they get the father's Y); all daughters are carriers (XᴰXᵈ).
7. 3.
8. Expected 40 and 40. χ² = 25/40 + 25/40 = 1.25, below 3.84 with 1 degree of freedom: not significant, so the data fit 1 : 1.
9. 9 : 3 : 4.
10. 54 ÷ 300 × 100 = 18%.
11. The value of χ² depends on the sample size; percentages sum to 100 and hide how many individuals were counted.

## Where marks are usually lost

- Missing a key, so the symbols in the diagram have no meaning.
- Writing parental genotypes in the gamete row, or giving gametes with two alleles of one gene.
- Giving a ratio without the phenotypes it refers to.
- Using the observed totals as expected values rather than sharing the total in the ratio.
- Using the number of individuals, not the number of classes, to find degrees of freedom.
- Saying a non-significant result "proves" the ratio, or that "there is no difference".
- Explaining epistasis as "one gene is dominant over another"; dominance is between alleles of one gene.
- Treating a sex-linked cross as a plain monohybrid, so males and females get the same ratio.

## Official syllabus

AQA AS and A-level Biology specification (7401 and 7402), for first teaching 2015, section 3.7.1 (version 1.5), published by AQA.
