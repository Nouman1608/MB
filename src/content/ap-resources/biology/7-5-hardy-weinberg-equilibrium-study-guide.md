---
resourceId: "mb-ap-bio-7.5-study-guide"
title: "Hardy–Weinberg Equilibrium: Study Guide (Biology 7.5)"
description: "Learn the Hardy–Weinberg model of a non-evolving population: its five conditions, how to calculate allele and genotype frequencies, and how to use it as a null hypothesis."
course: "biology"
unit: 7
topics: ["7.5"]
resourceType: "study-guide"
prerequisites:
  - "Alleles, genotypes, dominant and recessive (Topic 5.3)"
  - "Mutation, genetic drift, gene flow and natural selection as causes of change (Topics 7.2–7.4)"
  - "The chi-square test (Topic 5.3)"
prerequisiteResources: ["mb-ap-bio-7.4-study-guide"]
learningObjectives:
  - "State the five conditions a population must meet for its allele and genotype frequencies to stay constant"
  - "Predict which frequencies change, and in which direction, when each condition is broken"
  - "Calculate allele frequencies by counting alleles from genotype data"
  - "Use p + q = 1 and p² + 2pq + q² = 1 to predict genotype frequencies, including carrier frequency for a recessive trait"
  - "Use the Hardy–Weinberg prediction as a null hypothesis and test it against observed data with chi-square"
  - "Interpret graphs of allele frequency over time"
skills: ["1", "3", "4", "5", "6"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Square roots are needed. Chi-square critical values at p = 0.05: 3.84 (1 degree of freedom), 5.99 (2). Give frequencies as decimals to 2 or 3 decimal places"
related: ["mb-ap-bio-7.5-revision-notes", "mb-ap-bio-7.5-practice", "mb-ap-bio-7.5-checklist"]
next: "mb-ap-bio-7.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Hardy–Weinberg equilibrium is a model of a population that is not evolving: allele and genotype frequencies stay the same from one generation to the next."
  - "For two alleles with frequencies p and q: p + q = 1, and the genotype frequencies are p² (homozygous one way), 2pq (heterozygous) and q² (homozygous the other way)."
  - "The five conditions are a large population, no migration, no new mutations, random mating and no natural selection. Real populations never meet all five."
  - "Because the conditions are never fully met, the model is a null hypothesis: if observed data differ clearly from its prediction, at least one condition is being broken."
  - "Count alleles to get p from genotype data. Use q = √(q²) only if you assume the population is in equilibrium."
faqs:
  - question: "Is the Hardy–Weinberg equation given in the exam?"
    answer: "Yes. Both p + q = 1 and p² + 2pq + q² = 1 appear on the equations and formulas sheet. You still need to know what each term means and when you may use it."
  - question: "Does a dominant allele always become more common over time?"
    answer: "No. Dominance describes how alleles show up in the phenotype of a heterozygote. It says nothing about frequency. If the five conditions hold, a dominant allele at 0.1 stays at 0.1."
  - question: "If a population is in Hardy–Weinberg equilibrium, does that mean it is not evolving at all?"
    answer: "Only for the gene you tested. A population can be in equilibrium for one gene and evolving at another, for example where selection acts on a different trait."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## A model of a population that is not changing

In Topic 7.4 you saw that evolution, at the level of a population, means a change in **allele frequencies** over generations. Mutation, genetic drift, gene flow and natural selection can all cause that change. To decide whether a real population is evolving, you need something to compare it with: a prediction of what the frequencies would be if **nothing** were changing them.

The **Hardy–Weinberg model** gives that prediction. It describes an idealised population in which allele and genotype frequencies stay the same in every generation. A population that behaves like this is in **Hardy–Weinberg equilibrium**.

## Allele frequencies: p and q

Take one gene with two alleles, A and a, in a population of diploid organisms. Each individual carries two copies of the gene, so a population of N individuals carries 2N copies.

- **p** = frequency of allele A = (number of A alleles) ÷ (total alleles, 2N)
- **q** = frequency of allele a = (number of a alleles) ÷ (2N)

Every allele is either A or a, so the two frequencies always add up to one:

**p + q = 1**

This is true for **any** population with two alleles, evolving or not. Frequencies are proportions, not counts: they run from 0 to 1.

To count alleles, remember that each AA individual has two A alleles, each Aa has one A and one a, and each aa has two a alleles. So:

**p = (2 × number of AA + number of Aa) ÷ 2N**

## From alleles to genotypes: p² + 2pq + q² = 1

Now imagine every individual releases gametes into one big pool, and gametes pair up at random. A gamete carries one allele. The chance a gamete carries A is p, and the chance it carries a is q. Because the two gametes that join are independent, you multiply (the product rule from Topic 5.3):

- AA: an A egg meets an A sperm: p × p = **p²**
- Aa: A egg with a sperm (p × q), **or** a egg with A sperm (q × p). Two routes, so **2pq**
- aa: q × q = **q²**

These three genotype frequencies cover every individual, so:

**p² + 2pq + q² = 1**

<figure>
<svg viewBox="0 0 560 400" role="img" aria-labelledby="gs-title gs-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="gs-title">Random union of gametes when p equals 0.6 and q equals 0.4</title>
<desc id="gs-desc">A large square divided into four rectangles. Along the top, egg alleles: A with frequency 0.6 takes the left 60 percent of the width, a with frequency 0.4 the right 40 percent. Down the left side, sperm alleles: A, 0.6, takes the top 60 percent, a, 0.4, the bottom 40 percent. Top-left rectangle: AA, p squared, 0.36. Top-right: Aa, pq, 0.24. Bottom-left: Aa, pq, 0.24. Bottom-right, the smallest: aa, q squared, 0.16. A note says the two Aa boxes add to 2pq, 0.48.</desc>
<rect x="0" y="0" width="560" height="400" fill="#ffffff"/>
<text x="320" y="24" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Eggs</text>
<text x="260" y="44" text-anchor="middle" font-size="14" fill="#1d2b44">A (p = 0.6)</text>
<text x="410" y="44" text-anchor="middle" font-size="14" fill="#1d2b44">a (q = 0.4)</text>
<text x="40" y="210" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44" transform="rotate(-90 40 210)">Sperm</text>
<text x="120" y="144" text-anchor="middle" font-size="14" fill="#1d2b44">A (p = 0.6)</text>
<text x="120" y="294" text-anchor="middle" font-size="14" fill="#1d2b44">a (q = 0.4)</text>
<rect x="170" y="54" width="180" height="180" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="350" y="54" width="120" height="180" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="170" y="234" width="180" height="120" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="350" y="234" width="120" height="120" fill="#e8ecf3" stroke="#1d2b44" stroke-width="2"/>
<text x="260" y="136" text-anchor="middle" font-size="20" font-weight="700" fill="#1d2b44">AA</text>
<text x="260" y="160" text-anchor="middle" font-size="14" fill="#1d2b44">p² = 0.36</text>
<text x="410" y="136" text-anchor="middle" font-size="20" font-weight="700" fill="#1d2b44">Aa</text>
<text x="410" y="160" text-anchor="middle" font-size="14" fill="#1d2b44">pq = 0.24</text>
<text x="260" y="290" text-anchor="middle" font-size="20" font-weight="700" fill="#1d2b44">Aa</text>
<text x="260" y="314" text-anchor="middle" font-size="14" fill="#1d2b44">pq = 0.24</text>
<text x="410" y="290" text-anchor="middle" font-size="20" font-weight="700" fill="#1d2b44">aa</text>
<text x="410" y="314" text-anchor="middle" font-size="14" fill="#1d2b44">q² = 0.16</text>
<text x="320" y="384" text-anchor="middle" font-size="13" fill="#1d2b44">Both Aa boxes together: 2pq = 0.48. All four boxes: 0.36 + 0.48 + 0.16 = 1</text>
</svg>
<figcaption>Figure 1. A "Punnett square" for a whole population. Each side is split in proportion to the allele frequencies, so the area of each box is the genotype frequency. Boxes are labelled in words; shading is only a guide.</figcaption>
</figure>

Figure 2 shows how the three genotype frequencies depend on q. Two features are worth noticing. First, when an allele is rare, almost all copies of it sit in heterozygotes, because 2pq is much larger than q². Second, the heterozygote frequency can never be above 0.5, and it reaches 0.5 only when p = q = 0.5.

<figure>
<svg viewBox="0 0 580 360" role="img" aria-labelledby="gf-title gf-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="gf-title">Hardy–Weinberg genotype frequencies against the frequency of allele a</title>
<desc id="gf-desc">Line graph. Horizontal axis: q, the frequency of allele a, from 0 to 1. Vertical axis: genotype frequency from 0 to 1. The AA curve, solid, falls from 1 at q equals 0 to 0 at q equals 1. The aa curve, dotted, rises from 0 to 1, mirroring it. The Aa curve, dashed, is an arch that starts at 0, peaks at 0.5 when q equals 0.5, and returns to 0. At q equals 0.2, Aa is 0.32 and aa is only 0.04.</desc>
<rect x="0" y="0" width="580" height="360" fill="#ffffff"/>
<line x1="70" y1="180" x2="470" y2="180" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="70" y1="60" x2="470" y2="60" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="70" y1="300" x2="480" y2="300" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="300" x2="70" y2="50" stroke="#1d2b44" stroke-width="2"/>
<text x="70" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<text x="150" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">0.2</text>
<text x="230" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">0.4</text>
<text x="310" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">0.6</text>
<text x="390" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">0.8</text>
<text x="470" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">1.0</text>
<text x="62" y="304" text-anchor="end" font-size="12" fill="#1d2b44">0</text>
<text x="62" y="184" text-anchor="end" font-size="12" fill="#1d2b44">0.5</text>
<text x="62" y="64" text-anchor="end" font-size="12" fill="#1d2b44">1.0</text>
<text x="270" y="344" text-anchor="middle" font-size="14" fill="#1d2b44">q, frequency of allele a</text>
<text x="20" y="180" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 20 180)">Genotype frequency</text>
<polyline points="70,60.0 90,83.4 110,105.6 130,126.6 150,146.4 170,165.0 190,182.4 210,198.6 230,213.6 250,227.4 270,240.0 290,251.4 310,261.6 330,270.6 350,278.4 370,285.0 390,290.4 410,294.6 430,297.6 450,299.4 470,300.0" fill="none" stroke="#1d2b44" stroke-width="3"/>
<polyline points="70,300.0 90,277.2 110,256.8 130,238.8 150,223.2 170,210.0 190,199.2 210,190.8 230,184.8 250,181.2 270,180.0 290,181.2 310,184.8 330,190.8 350,199.2 370,210.0 390,223.2 410,238.8 430,256.8 450,277.2 470,300.0" fill="none" stroke="#1d2b44" stroke-width="3" stroke-dasharray="9 6"/>
<polyline points="70,300.0 90,299.4 110,297.6 130,294.6 150,290.4 170,285.0 190,278.4 210,270.6 230,261.6 250,251.4 270,240.0 290,227.4 310,213.6 330,198.6 350,182.4 370,165.0 390,146.4 410,126.6 430,105.6 450,83.4 470,60.0" fill="none" stroke="#1d2b44" stroke-width="3" stroke-dasharray="2 5"/>
<text x="112" y="86" font-size="13" font-weight="600" fill="#1d2b44">AA = p² (solid)</text>
<text x="270" y="170" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">Aa = 2pq (dashed)</text>
<text x="398" y="118" text-anchor="end" font-size="13" font-weight="600" fill="#1d2b44">aa = q² (dotted)</text>
<circle cx="150" cy="223.2" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="150" cy="290.4" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
</svg>
<figcaption>Figure 2. Genotype frequencies predicted by the model for every value of q. The three curves add up to 1 at every point. Open circles mark q = 0.2, where Aa = 0.32 and aa = 0.04. The curves are told apart by line style and by their labels.</figcaption>
</figure>

## The five conditions

Allele and genotype frequencies stay constant only if all five conditions hold. Each one rules out a force you met in Topics 7.2–7.4.

| Condition | What it rules out | What happens if it is broken |
|---|---|---|
| **Large population** | genetic drift | chance events shift allele frequencies, most strongly in small populations |
| **No migration** | gene flow | individuals entering or leaving add or remove alleles |
| **No new mutations** | mutation | new alleles appear, or one allele changes into another |
| **Random mating** | mate choice and inbreeding | genotype frequencies move away from p², 2pq, q² |
| **No natural selection** | differences in survival and reproduction | alleles linked to higher fitness rise in frequency |

Note the special case of mating. If relatives mate, or a plant fertilises itself, heterozygotes become rarer and both homozygotes become more common. Allele frequencies do not change from that alone: the same alleles are just packaged into different genotypes. But if mate choice means some genotypes get more mates and leave more offspring than others, that is sexual selection, which does change allele frequencies.

**The conditions are never all met in nature.** Every real population is finite, and mutations always occur. So why is the model useful? Because it is a **null hypothesis**: a precise statement of what you expect if no evolutionary force is acting at a gene. If the observed frequencies differ from that expectation by more than chance would explain, at least one condition is being broken, and you can investigate which. If they match, you have no evidence that the population is evolving at that gene. You have not proved it is not.

## Two routes to allele frequencies

**Route 1: count alleles.** When you can see every genotype (codominance, incomplete dominance, or a DNA test), count alleles directly. This works for **any** population, whether or not it is in equilibrium. Use it whenever you can.

**Route 2: start from the recessive phenotype.** With complete dominance, AA and Aa look the same. Only aa individuals can be counted, and their frequency is q². Then q = √(q²). This route **assumes** the population is in equilibrium. If it is not, for example because of inbreeding, the answer will be wrong.

## Worked example 1: comparing a population with the model

**Question.** In a fictional pond, shell colour in a snail is controlled by one gene with two codominant alleles: B (brown) and Y (yellow). BB snails are brown, BY are tan and YY are yellow. A survey records 210 brown, 180 tan and 110 yellow snails. (a) Calculate the allele frequencies. (b) Calculate the genotype numbers expected under Hardy–Weinberg equilibrium. (c) Compare and suggest which condition may be broken.

**(a) Count the alleles.**

1. Population size: 210 + 180 + 110 = 500 snails, so 2 × 500 = 1000 alleles.
2. B alleles: (2 × 210) + 180 = 420 + 180 = 600. So p = 600 ÷ 1000 = **0.60**.
3. q = 1 − 0.60 = **0.40**. Check: Y alleles = (2 × 110) + 180 = 400, and 400 ÷ 1000 = 0.40.

**(b) Expected genotypes.**

1. p² = 0.60² = 0.36, so expected BB = 0.36 × 500 = **180**.
2. 2pq = 2 × 0.60 × 0.40 = 0.48, so expected BY = 0.48 × 500 = **240**.
3. q² = 0.40² = 0.16, so expected YY = 0.16 × 500 = **80**.
4. Check: 180 + 240 + 80 = 500.

**(c) Compare.**

| Genotype | Observed | Expected |
|---|---|---|
| BB (brown) | 210 | 180 |
| BY (tan) | 180 | 240 |
| YY (yellow) | 110 | 80 |

There are **fewer heterozygotes** than expected (frequency 0.36 instead of 0.48) and more of both homozygotes. This pattern is most simply explained by **non-random mating**: perhaps snails tend to mate with snails of their own colour, or the "pond" really holds two groups that rarely meet. Notice that a deficit of heterozygotes does not tell you the allele frequencies are changing. You would need data from more than one generation, or a test of the cause, to say that. A chi-square test would tell you whether a gap this size is likely to be chance (see Worked example 3).

## Worked example 2: a recessive trait, then selection

**Question.** A fictional island population of 2,500 lizards includes 100 with a pale throat, a recessive trait (genotype tt). Assume Hardy–Weinberg equilibrium. (a) Calculate p, q and the number of carriers. (b) A drought follows, and no pale-throated lizard breeds. All other lizards breed equally well. Calculate the frequency of t among the breeders.

**(a)**

1. q² = 100 ÷ 2500 = 0.04.
2. q = √0.04 = **0.20**, so p = 1 − 0.20 = **0.80**.
3. Carriers (Tt): 2pq = 2 × 0.80 × 0.20 = 0.32, and 0.32 × 2500 = **800 lizards**.
4. TT: p² = 0.64, and 0.64 × 2500 = 1600 lizards. Check: 1600 + 800 + 100 = 2500.

**(b)**

1. Breeders: 1600 TT + 800 Tt = 2400 lizards, carrying 4800 alleles.
2. t alleles among breeders: only the 800 carriers have one each, so 800.
3. New q = 800 ÷ 4800 = **0.17** (0.1667). New p = 0.83.

**Interpretation.** The allele frequency has changed from 0.20 to 0.17 in one generation, so the population has **evolved**: natural selection broke one of the five conditions. Notice how small the drop is, even though every pale lizard failed to breed. Before the drought there were 1000 t alleles (200 in pale lizards and 800 in carriers), so 80% of them were hidden in heterozygotes, where selection could not "see" them. If the next generation mates at random, the expected frequency of pale throats is 0.1667² ≈ 0.028, or about 2.8%, down from 4%.

## Worked example 3: testing the null hypothesis

**Question.** A fictional laboratory population of fruit flies is set up with two forms of an enzyme, F and S, which can be told apart on a gel. The founders have p(F) = 0.70. After many generations of random mating in a very large cage, a sample of 200 flies gives FF 92, FS 88, SS 20. Has the population stayed in Hardy–Weinberg equilibrium for this gene?

1. **Null hypothesis:** the population is in equilibrium with p = 0.70, so there is no difference between observed and expected numbers other than chance.
2. **Expected numbers:** FF = 0.70² × 200 = 98; FS = 2 × 0.70 × 0.30 × 200 = 84; SS = 0.30² × 200 = 18.
3. **Chi-square:** χ² = Σ (o − e)² ÷ e = (92 − 98)² ÷ 98 + (88 − 84)² ÷ 84 + (20 − 18)² ÷ 18 = 0.367 + 0.190 + 0.222 = **0.78**.
4. **Degrees of freedom:** the expected numbers come from the founders' known frequency, not from this sample, so df = 3 classes − 1 = **2**. Critical value at p = 0.05: **5.99**.
5. **Decision:** 0.78 < 5.99, so **fail to reject** the null hypothesis.

**Conclusion.** The differences are small enough to be chance. The data give no evidence that the population is evolving at this gene. The observed frequency, p = (2 × 92 + 88) ÷ 400 = 0.68, is close to 0.70. This does not prove that all five conditions hold, only that any departure is too small to detect in a sample of 200.

## Graphs of allele frequency over time

You may be asked to describe a graph that plots p or q against generations. Read it in three steps:

1. **Identify specific points**: starting value, final value, and the size of any change.
2. **Describe the pattern**: flat (consistent with equilibrium), a steady rise or fall in one direction (consistent with selection, or with steady gene flow), or irregular ups and downs (consistent with drift, especially in a small population).
3. **Link it to a condition**: name which condition is most likely broken and say what evidence on the graph supports that.

Always say "consistent with" or "suggests". A graph alone rarely proves the cause.

## Common misconceptions

- **"Dominant alleles become more common."** Dominance affects the phenotype of heterozygotes, not allele frequency. Without selection or another force, frequencies stay put.
- **"p is the frequency of the dominant phenotype."** p is an allele frequency. The dominant phenotype has frequency p² + 2pq.
- **"Equilibrium means p = q = 0.5."** Any value of p can be stable. Equilibrium means the frequencies do not change, whatever they are.
- **"The heterozygote frequency is pq."** There are two ways to make a heterozygote, so it is 2pq.
- **"q is the frequency of the recessive phenotype."** That frequency is q². Take the square root to get q.
- **"You can always use √(q²)."** Only if you assume equilibrium. If you know every genotype, count alleles instead.
- **"Inbreeding changes allele frequencies."** On its own, it changes genotype frequencies (fewer heterozygotes) but not allele frequencies.
- **"Real populations are in Hardy–Weinberg equilibrium."** The conditions are never all met. The model is a baseline for comparison.
- **"Failing to reject the null hypothesis proves the population is not evolving."** It means there is no evidence of change at that gene in that sample.
- **"Individuals evolve."** Allele frequencies are a property of a population. An individual's genotype does not change during its life.

## Where this leads

This topic builds on the causes of change in [Topic 7.4, Population Genetics](/advanced-course-resources/biology/7-4-population-genetics-study-guide/). Next, [Topic 7.6, Evidence of Evolution](/advanced-course-resources/biology/7-6-evidence-evolution-study-guide/), looks at how fossils, anatomy and molecules show change over much longer times. Test yourself with the [practice questions](/advanced-course-resources/biology/7-5-hardy-weinberg-equilibrium-practice/), then use the [revision notes](/advanced-course-resources/biology/7-5-hardy-weinberg-equilibrium-revision-notes/) and the [checklist](/advanced-course-resources/biology/7-5-hardy-weinberg-equilibrium-checklist/) to consolidate.
