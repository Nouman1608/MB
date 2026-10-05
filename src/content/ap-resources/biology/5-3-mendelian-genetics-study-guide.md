---
resourceId: "mb-ap-bio-5.3-study-guide"
title: "Mendelian Genetics: Study Guide (Biology 5.3)"
description: "How alleles segregate and assort independently, how to use Punnett squares, the sum and product rules, test crosses and pedigrees, and how to run a chi-square test on cross data."
course: "biology"
unit: 5
topics: ["5.3"]
resourceType: "study-guide"
prerequisites:
  - "Homologous chromosomes, haploid and diploid cells"
  - "How homologues separate in meiosis I and sister chromatids in meiosis II"
prerequisiteResources: ["mb-ap-bio-5.2-study-guide"]
learningObjectives:
  - "Use the terms gene, allele, genotype, phenotype, homozygous and heterozygous correctly"
  - "Explain the laws of segregation and independent assortment in terms of chromosome behaviour in meiosis, and say when independent assortment applies"
  - "Predict genotypic and phenotypic ratios from monohybrid, dihybrid and test crosses, using Punnett squares or the sum and product rules"
  - "Use a test cross or a pedigree to decide whether an allele is dominant or recessive and to infer genotypes"
  - "State a null hypothesis for a cross, calculate chi-square and decide whether to reject or fail to reject it"
skills: ["1", "2", "5", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Chi-square critical values at p = 0.05: 3.84 (1 degree of freedom), 5.99 (2), 7.81 (3). Keep probabilities as fractions until the last step"
related: ["mb-ap-bio-5.3-revision-notes", "mb-ap-bio-5.3-practice", "mb-ap-bio-5.3-checklist"]
next: "mb-ap-bio-5.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Each diploid organism carries two alleles of each gene. The two alleles separate into different gametes (segregation), because homologous chromosomes separate in meiosis I."
  - "Genes on different chromosomes are sorted into gametes independently of each other (independent assortment). Genes close together on one chromosome are not."
  - "For independent events, multiply probabilities (product rule). For mutually exclusive ways of getting the same result, add them (sum rule)."
  - "A genotypic ratio counts allele combinations (1 AA : 2 Aa : 1 aa); a phenotypic ratio counts visible traits (3 dominant : 1 recessive). Never mix them up."
  - "Chi-square compares observed counts with the counts your null hypothesis predicts. If χ² is above the critical value, reject the null hypothesis; otherwise fail to reject it."
faqs:
  - question: "Does dominant mean the allele is more common or better?"
    answer: "No. Dominant only means that one copy is enough to produce the phenotype. A dominant allele can be rare, and it can cause a disorder. How common an allele is depends on the population, not on dominance."
  - question: "If chi-square tells me to fail to reject, have I proved my hypothesis?"
    answer: "No. You have only shown that the difference between observed and expected counts is small enough to be explained by chance. Your hypothesis is supported, not proved."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## From chromosomes to traits

In Topics 5.1 and 5.2 you followed chromosomes through meiosis. This topic follows the **genes** they carry. Gregor Mendel worked out the basic rules in the 1850s and 1860s by crossing pea plants and counting the offspring, long before anyone had seen a chromosome. Today we can explain his rules with meiosis.

Start with the vocabulary. You will use it in every answer.

| Term | Meaning |
|---|---|
| **Gene** | a section of DNA that codes for a product, found at a fixed place (locus) on a chromosome |
| **Allele** | one version of a gene, written as a letter: capital for dominant (A), lower case for recessive (a) |
| **Genotype** | the alleles an individual has for one or more genes, e.g. Aa |
| **Homozygous** | two identical alleles for a gene (AA or aa) |
| **Heterozygous** | two different alleles for a gene (Aa) |
| **Phenotype** | the observable trait that the genotype produces, e.g. purple flowers |
| **Dominant allele** | its phenotype shows in the heterozygote |
| **Recessive allele** | its phenotype shows only in the homozygote (aa) |
| **True-breeding** | homozygous, so it always passes on the same allele |

Crosses are labelled by generation. The **P generation** is the parents. Their offspring are the **F₁** generation. Crossing two F₁ individuals gives the **F₂** generation.

**Why is one allele dominant?** Often the dominant allele codes for a working protein, such as an enzyme, and the recessive allele codes for a faulty one. In a heterozygote, one working allele usually makes enough enzyme for a normal phenotype. Only aa individuals lack the working enzyme. This lets you predict the effect of a new mutation: if it destroys an enzyme, it is likely to be recessive.

## The law of segregation

A diploid organism has two alleles of each gene, one on each chromosome of a homologous pair. In meiosis I the homologues separate, so **each gamete receives only one allele of each gene**. This is the **law of segregation**. An Aa individual makes two kinds of gamete, A and a, in equal numbers.

At fertilization, two haploid gametes fuse. This restores the diploid number and brings two alleles together again, often in a new combination. Fertilization therefore adds to genetic variation in a population.

## The law of independent assortment

Now follow two genes. If they are on **different chromosomes**, the way one homologous pair lines up at metaphase I does not affect the way the other pair lines up. So the alleles of one gene are sorted into gametes independently of the alleles of the other. This is the **law of independent assortment**.

<figure>
<svg viewBox="0 0 640 320" role="img" aria-labelledby="ia-title ia-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ia-title">Independent assortment of two homologous pairs at metaphase I</title>
<desc id="ia-desc">Two rows, each showing a cell at metaphase I with a long homologous pair carrying alleles P and p, and a short homologous pair carrying alleles R and r, lined up on either side of a dashed metaphase plate. In arrangement 1, P and R are on the left and p and r on the right, giving gametes P R and p r. In arrangement 2, P and r are on the left and p and R on the right, giving gametes P r and p R. Each arrangement is equally likely, so a PpRr individual produces four kinds of gamete in equal proportions.</desc>
<rect x="0" y="0" width="640" height="320" fill="#ffffff"/>
<text x="210" y="20" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Arrangement 1: P and R face the same pole</text>
<ellipse cx="210" cy="85" rx="95" ry="58" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<line x1="210" y1="30" x2="210" y2="140" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 4"/>
<rect x="180" y="37" width="14" height="40" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="226" y="37" width="14" height="40" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="180" y="93" width="14" height="24" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="226" y="93" width="14" height="24" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="170" y="62" text-anchor="end" font-size="16" font-weight="700" fill="#1d2b44">P</text>
<text x="250" y="62" font-size="16" font-weight="700" fill="#1d2b44">p</text>
<text x="170" y="110" text-anchor="end" font-size="16" font-weight="700" fill="#1d2b44">R</text>
<text x="250" y="110" font-size="16" font-weight="700" fill="#1d2b44">r</text>
<line x1="315" y1="85" x2="375" y2="85" stroke="#1d2b44" stroke-width="2"/>
<polygon points="375,79 387,85 375,91" fill="#1d2b44"/>
<circle cx="440" cy="85" r="32" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="440" y="91" text-anchor="middle" font-size="17" font-weight="700" fill="#1d2b44">P R</text>
<circle cx="550" cy="85" r="32" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="550" y="91" text-anchor="middle" font-size="17" font-weight="700" fill="#1d2b44">p r</text>
<text x="210" y="172" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Arrangement 2: P and r face the same pole</text>
<ellipse cx="210" cy="237" rx="95" ry="58" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<line x1="210" y1="182" x2="210" y2="292" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 4"/>
<rect x="180" y="189" width="14" height="40" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="226" y="189" width="14" height="40" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="180" y="245" width="14" height="24" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="226" y="245" width="14" height="24" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="170" y="214" text-anchor="end" font-size="16" font-weight="700" fill="#1d2b44">P</text>
<text x="250" y="214" font-size="16" font-weight="700" fill="#1d2b44">p</text>
<text x="170" y="262" text-anchor="end" font-size="16" font-weight="700" fill="#1d2b44">r</text>
<text x="250" y="262" font-size="16" font-weight="700" fill="#1d2b44">R</text>
<line x1="315" y1="237" x2="375" y2="237" stroke="#1d2b44" stroke-width="2"/>
<polygon points="375,231 387,237 375,243" fill="#1d2b44"/>
<circle cx="440" cy="237" r="32" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="440" y="243" text-anchor="middle" font-size="17" font-weight="700" fill="#1d2b44">P r</text>
<circle cx="550" cy="237" r="32" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="550" y="243" text-anchor="middle" font-size="17" font-weight="700" fill="#1d2b44">p R</text>
<text x="495" y="312" text-anchor="middle" font-size="13" fill="#1d2b44">gametes (one allele of each gene)</text>
</svg>
<figcaption>Figure 1. The long pair carries gene P and the short pair carries gene R. The dashed line is the metaphase plate. Both arrangements are equally likely, so a PpRr individual makes PR, Pr, pR and pr gametes in a 1 : 1 : 1 : 1 ratio.</figcaption>
</figure>

**The limit of the law.** Independent assortment applies to genes on **different** chromosomes. Two genes close together on the **same** chromosome tend to travel into gametes together. They are **genetically linked**, and their offspring do not fit Mendel's ratios. Topic 5.4 shows how to recognise and measure linkage.

## Punnett squares and genotypic versus phenotypic ratios

A **Punnett square** lists one parent's gametes across the top and the other's down the side. Each box is one possible zygote, and every box is equally likely.

<figure>
<svg viewBox="0 0 640 320" role="img" aria-labelledby="ps-title ps-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ps-title">Punnett square for a cross between two heterozygotes, Aa by Aa</title>
<desc id="ps-desc">A two by two grid. Gametes from parent 1, A and a, are written across the top; gametes from parent 2, A and a, down the left side. The four boxes read AA, Aa, Aa and aa. The first three boxes are labelled dominant phenotype; the aa box has a dashed border and is labelled recessive phenotype. To the right: genotypic ratio 1 AA to 2 Aa to 1 aa; phenotypic ratio 3 dominant to 1 recessive.</desc>
<rect x="0" y="0" width="640" height="320" fill="#ffffff"/>
<text x="200" y="28" text-anchor="middle" font-size="13" fill="#1d2b44">Parent 1 (Aa) gametes</text>
<text x="150" y="58" text-anchor="middle" font-size="18" font-weight="700" fill="#1d2b44">A</text>
<text x="250" y="58" text-anchor="middle" font-size="18" font-weight="700" fill="#1d2b44">a</text>
<text x="30" y="170" text-anchor="middle" font-size="13" fill="#1d2b44" transform="rotate(-90 30 170)">Parent 2 (Aa) gametes</text>
<text x="80" y="126" text-anchor="middle" font-size="18" font-weight="700" fill="#1d2b44">A</text>
<text x="80" y="226" text-anchor="middle" font-size="18" font-weight="700" fill="#1d2b44">a</text>
<rect x="100" y="70" width="100" height="100" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="200" y="70" width="100" height="100" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="100" y="170" width="100" height="100" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="204" y="174" width="92" height="92" fill="#ffffff" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5"/>
<text x="150" y="122" text-anchor="middle" font-size="20" font-weight="700" fill="#1d2b44">AA</text>
<text x="250" y="122" text-anchor="middle" font-size="20" font-weight="700" fill="#1d2b44">Aa</text>
<text x="150" y="222" text-anchor="middle" font-size="20" font-weight="700" fill="#1d2b44">Aa</text>
<text x="250" y="222" text-anchor="middle" font-size="20" font-weight="700" fill="#1d2b44">aa</text>
<text x="150" y="146" text-anchor="middle" font-size="11" fill="#1d2b44">dominant</text>
<text x="250" y="146" text-anchor="middle" font-size="11" fill="#1d2b44">dominant</text>
<text x="150" y="246" text-anchor="middle" font-size="11" fill="#1d2b44">dominant</text>
<text x="250" y="246" text-anchor="middle" font-size="11" fill="#1d2b44">recessive</text>
<text x="340" y="110" font-size="15" font-weight="600" fill="#1d2b44">Genotypic ratio</text>
<text x="340" y="134" font-size="15" fill="#1d2b44">1 AA : 2 Aa : 1 aa</text>
<text x="340" y="190" font-size="15" font-weight="600" fill="#1d2b44">Phenotypic ratio</text>
<text x="340" y="214" font-size="15" fill="#1d2b44">3 dominant : 1 recessive</text>
<text x="340" y="250" font-size="12" fill="#1d2b44">(dashed box = the only</text>
<text x="340" y="266" font-size="12" fill="#1d2b44">recessive phenotype)</text>
</svg>
<figcaption>Figure 2. A monohybrid cross between two heterozygotes. The same four boxes give a 1 : 2 : 1 genotypic ratio but a 3 : 1 phenotypic ratio, because AA and Aa look the same.</figcaption>
</figure>

Read the question carefully: does it ask for genotypes or phenotypes? This is one of the most common sources of lost marks.

## The rules of probability

Punnett squares get large quickly. With three genes, a full square has 64 boxes. Two probability rules do the same job faster.

- **Product rule.** If two events are independent, P(A and B) = P(A) × P(B). Use it to combine genes that assort independently, or to combine separate children.
- **Sum rule.** If two events are mutually exclusive, P(A or B) = P(A) + P(B). Use it when there is more than one way to get the same result.

**Sum rule example.** In Aa × Aa, a heterozygote can arise in two ways: A from parent 1 and a from parent 2 (1/2 × 1/2 = 1/4), or a from parent 1 and A from parent 2 (another 1/4). So P(Aa) = 1/4 + 1/4 = **1/2**.

**Product rule example.** In AaBbCc × AaBbCc, treat each gene as its own monohybrid cross, then multiply:

- P(aabbcc) = 1/4 × 1/4 × 1/4 = **1/64**.
- P(dominant A trait, recessive b trait, dominant C trait) = 3/4 × 1/4 × 3/4 = **9/64**.

Each child is a new, independent event. If a couple's first child has the recessive phenotype, the chance for the second child is still 1/4.

## Crosses as tools

| Cross | Typical use | Expected offspring |
|---|---|---|
| **Monohybrid** Aa × Aa | show which allele is dominant | genotypes 1 : 2 : 1; phenotypes 3 : 1 |
| **Dihybrid** AaBb × AaBb | show dominance for two traits at once, and test independent assortment | phenotypes 9 : 3 : 3 : 1 |
| **Test cross** (unknown × homozygous recessive) | find the genotype of an individual with the dominant phenotype | all dominant if the unknown is AA; 1 : 1 if Aa |
| **Dihybrid test cross** AaBb × aabb | test independent assortment directly | phenotypes 1 : 1 : 1 : 1 |

The test cross works because the homozygous recessive parent can only give recessive alleles. Every offspring's phenotype therefore shows which allele came from the unknown parent.

## Reading pedigrees

A **pedigree** is a family tree that shows who has a trait. Squares are males, circles are females, and filled symbols are affected individuals.

<figure>
<svg viewBox="0 0 640 300" role="img" aria-labelledby="pd-title pd-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pd-title">Pedigree of a family with an autosomal recessive trait</title>
<desc id="pd-desc">Generation one: an unaffected father, I-1, shown as an open square, and an unaffected mother, I-2, shown as an open circle, joined by a horizontal line. Generation two: four children. II-1 is an unaffected son, open square. II-2 is an affected daughter, filled circle. II-3 is an unaffected daughter, open circle. II-4 is an affected son, filled square. A key at the right explains the symbols.</desc>
<rect x="0" y="0" width="640" height="300" fill="#ffffff"/>
<text x="30" y="68" font-size="16" font-weight="700" fill="#1d2b44">I</text>
<text x="30" y="198" font-size="16" font-weight="700" fill="#1d2b44">II</text>
<rect x="182" y="45" width="36" height="36" fill="#ffffff" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="300" cy="63" r="18" fill="#ffffff" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="218" y1="63" x2="282" y2="63" stroke="#1d2b44" stroke-width="2"/>
<line x1="250" y1="63" x2="250" y2="140" stroke="#1d2b44" stroke-width="2"/>
<line x1="100" y1="140" x2="400" y2="140" stroke="#1d2b44" stroke-width="2"/>
<text x="200" y="102" text-anchor="middle" font-size="12" fill="#1d2b44">I-1</text>
<text x="300" y="102" text-anchor="middle" font-size="12" fill="#1d2b44">I-2</text>
<line x1="100" y1="140" x2="100" y2="175" stroke="#1d2b44" stroke-width="2"/>
<line x1="200" y1="140" x2="200" y2="175" stroke="#1d2b44" stroke-width="2"/>
<line x1="300" y1="140" x2="300" y2="175" stroke="#1d2b44" stroke-width="2"/>
<line x1="400" y1="140" x2="400" y2="175" stroke="#1d2b44" stroke-width="2"/>
<rect x="82" y="175" width="36" height="36" fill="#ffffff" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="200" cy="193" r="18" fill="#1d2b44" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="300" cy="193" r="18" fill="#ffffff" stroke="#1d2b44" stroke-width="2.5"/>
<rect x="382" y="175" width="36" height="36" fill="#1d2b44" stroke="#1d2b44" stroke-width="2.5"/>
<text x="100" y="232" text-anchor="middle" font-size="12" fill="#1d2b44">II-1</text>
<text x="200" y="232" text-anchor="middle" font-size="12" fill="#1d2b44">II-2</text>
<text x="200" y="248" text-anchor="middle" font-size="11" fill="#1d2b44">affected</text>
<text x="300" y="232" text-anchor="middle" font-size="12" fill="#1d2b44">II-3</text>
<text x="400" y="232" text-anchor="middle" font-size="12" fill="#1d2b44">II-4</text>
<text x="400" y="248" text-anchor="middle" font-size="11" fill="#1d2b44">affected</text>
<rect x="470" y="60" width="20" height="20" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="500" y="75" font-size="12" fill="#1d2b44">unaffected male</text>
<rect x="470" y="92" width="20" height="20" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<text x="500" y="107" font-size="12" fill="#1d2b44">affected male</text>
<circle cx="480" cy="134" r="10" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="500" y="139" font-size="12" fill="#1d2b44">unaffected female</text>
<circle cx="480" cy="166" r="10" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<text x="500" y="171" font-size="12" fill="#1d2b44">affected female</text>
</svg>
<figcaption>Figure 3. A fictional family. Two unaffected parents have two affected children, so the trait must be recessive. Affected individuals are also labelled in words.</figcaption>
</figure>

**Reading Figure 3.**

1. Two unaffected parents have affected children. The allele must have been hidden in both parents, so it is **recessive**, and both parents are carriers (Aa).
2. Could it be X-linked recessive? An affected daughter (II-2) would need a recessive allele on the X from her father. Her father would then be affected, but I-1 is not. So the allele is **autosomal**.
3. II-3 is unaffected, so she is AA or Aa. From Aa × Aa, unaffected children are AA : Aa in the ratio 1 : 2. So P(II-3 is a carrier) = (1/2) ÷ (3/4) = **2/3**, not 1/2.

Useful clues:

| Pattern | Clues in a pedigree |
|---|---|
| Autosomal recessive | can skip generations; two unaffected parents can have an affected child; males and females affected about equally |
| Autosomal dominant | every affected person has at least one affected parent; two affected parents can have an unaffected child |
| X-linked recessive | mostly males affected; an affected father never passes it to his sons (covered in Topic 5.4) |

Genetically linked genes usually show up in cross data rather than pedigrees: some allele combinations appear far more often than independent assortment predicts.

## The chi-square test

Real offspring counts never match a ratio exactly. Chance in fertilization makes them scatter. The **chi-square (χ²) test** asks whether the difference between observed (o) and expected (e) counts is small enough to be due to chance.

1. **State the null hypothesis.** It links the experimental variables to a specific expectation, for example: "The two genes assort independently, so offspring phenotypes occur in a 9 : 3 : 3 : 1 ratio; any difference from this is due to chance."
2. **Calculate expected counts** from the total number of offspring and the predicted ratio. Use counts, never percentages.
3. **Calculate χ² = Σ (o − e)² ÷ e** over every category.
4. **Degrees of freedom** = number of categories − 1.
5. **Compare with the critical value** at p = 0.05 (given on the formula sheet: 3.84 for 1 degree of freedom, 5.99 for 2, 7.81 for 3).
6. **Conclude.** If χ² is **greater** than the critical value, reject the null hypothesis: the difference is unlikely (less than 5% probability) to be chance alone. If χ² is **less than or equal to** it, fail to reject the null hypothesis.

Chi-square only fits **counts in categories**. It is not the right test for continuous measurements, such as plant heights.

## Worked example 1: a dihybrid cross with the product rule

**Question.** In a hypothetical bean species, purple seed coat (P) is dominant to cream (p), and round pods (R) are dominant to flat pods (r). The genes are on different chromosomes. A PpRr plant is crossed with a Pprr plant.
(a) List the gametes each parent can make.
(b) Find the probability of an offspring with purple seeds and round pods.
(c) Give the expected phenotypic ratio, and the expected numbers among 160 offspring.
(d) A purple-seeded offspring is chosen. What is the probability it is heterozygous for seed colour?

**(a) Gametes.** PpRr makes PR, Pr, pR and pr, each with probability 1/4 (Figure 1). Pprr makes only Pr and pr, each 1/2.

**(b) Split the cross into one-gene crosses.**

1. Seed colour, Pp × Pp: P(purple) = 3/4, P(cream) = 1/4.
2. Pods, Rr × rr: P(round) = 1/2, P(flat) = 1/2.
3. The genes assort independently, so use the product rule: P(purple and round) = 3/4 × 1/2 = **3/8**.

**(c) Phenotypic ratio.**

| Phenotype | Probability | Expected of 160 |
|---|---|---|
| purple, round | 3/4 × 1/2 = 3/8 | 60 |
| purple, flat | 3/4 × 1/2 = 3/8 | 60 |
| cream, round | 1/4 × 1/2 = 1/8 | 20 |
| cream, flat | 1/4 × 1/2 = 1/8 | 20 |

The phenotypic ratio is **3 : 3 : 1 : 1**. It is not 9 : 3 : 3 : 1, because only one parent is heterozygous for the pod gene. The genotypic ratio is different again: 1 PPRr : 1 PPrr : 2 PpRr : 2 Pprr : 1 ppRr : 1 pprr.

**(d) Conditional probability.** Among purple-seeded offspring of Pp × Pp, PP and Pp occur 1 : 2. So P(Pp, given purple) = (1/2) ÷ (3/4) = **2/3**.

**Check.** The four phenotype probabilities add to 3/8 + 3/8 + 1/8 + 1/8 = 1, and 60 + 60 + 20 + 20 = 160.

**Using a test cross.** Suppose you want to know whether a purple, round offspring is PPRr or PpRr. Cross it with a pprr plant. If any offspring have cream seeds, the parent must carry p, so it is PpRr. If many offspring are all purple, it is very likely PPRr.

## Worked example 2: chi-square on a dihybrid F₂

**Question.** Two PpRr bean plants from Worked example 1 are crossed. The 320 offspring are: 186 purple round, 55 purple flat, 61 cream round and 18 cream flat. Do the data support independent assortment with complete dominance?

**Step 1: null hypothesis.** "The seed-colour and pod-shape genes assort independently, so the four phenotypes occur in a 9 : 3 : 3 : 1 ratio. Any difference between observed and expected counts is due to chance."

**Step 2: expected counts.** Total = 320. Expected = 320 × 9/16 = 180; 320 × 3/16 = 60; 60; 320 × 1/16 = 20.

**Step 3: calculate χ².**

| Phenotype | o | e | o − e | (o − e)² | (o − e)² ÷ e |
|---|---|---|---|---|---|
| purple, round | 186 | 180 | 6 | 36 | 0.200 |
| purple, flat | 55 | 60 | −5 | 25 | 0.417 |
| cream, round | 61 | 60 | 1 | 1 | 0.017 |
| cream, flat | 18 | 20 | −2 | 4 | 0.200 |
| **Total** | 320 | 320 | | | **χ² = 0.833** |

**Step 4: degrees of freedom.** 4 categories − 1 = **3**.

**Step 5: compare.** The critical value for 3 degrees of freedom at p = 0.05 is 7.81. Since 0.833 < 7.81, we **fail to reject** the null hypothesis.

**Step 6: interpret.** The differences are small enough to be explained by chance. The data are consistent with the two genes assorting independently with complete dominance. This supports, but does not prove, the hypothesis.

**Predict a disruption.** If the two genes were in fact close together on the same chromosome, parental combinations (purple round and cream flat) would be much more common than 9 : 3 : 3 : 1 predicts. χ² would then be large, and you would reject the null hypothesis. You will analyse data like this in Topic 5.4.

## Common misconceptions

- **"Dominant alleles are more common."** Dominance describes how alleles act in a heterozygote, not how often they occur.
- **"A 3 : 1 ratio means exactly three of every four children will show the trait."** Ratios are probabilities. Small families often differ from them, and each child is an independent event.
- **"Genotypic and phenotypic ratios are the same thing."** For Aa × Aa the genotypic ratio is 1 : 2 : 1 and the phenotypic ratio is 3 : 1.
- **"An unaffected child of two carriers has a 1/2 chance of being a carrier."** Once you know the child is unaffected, aa is ruled out. The chance is 2/3.
- **"Independent assortment applies to all genes."** It applies to genes on different chromosomes. Linked genes do not assort independently.
- **"Degrees of freedom = number of offspring − 1."** It is the number of categories minus one.
- **"Fail to reject means the hypothesis is proved."** It means the data are consistent with it. Rejecting means the difference is unlikely to be chance.
- **"Use percentages in chi-square."** χ² must use actual counts. Percentages give the wrong value (too small whenever there are more than 100 offspring).
- **"Recessive alleles disappear."** A recessive allele can be hidden in carriers for many generations and reappear.

## Where this leads

Topic 5.4, [Non-Mendelian Genetics](/advanced-course-resources/biology/5-4-non-mendelian-genetics-study-guide/), looks at patterns that break these ratios: linked genes, sex-linked traits, incomplete dominance, codominance, pleiotropy and inheritance through mitochondria and chloroplasts. You will use the chi-square test there to spot the deviations. First, test yourself with the [practice questions](/advanced-course-resources/biology/5-3-mendelian-genetics-practice/), then use the [revision notes](/advanced-course-resources/biology/5-3-mendelian-genetics-revision-notes/) and the [checklist](/advanced-course-resources/biology/5-3-mendelian-genetics-checklist/) to consolidate.
