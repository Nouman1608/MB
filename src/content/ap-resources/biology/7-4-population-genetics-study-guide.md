---
resourceId: "mb-ap-bio-7.4-study-guide"
title: "Population Genetics: Study Guide (Biology 7.4)"
description: "Learn how mutation, genetic drift, bottlenecks, founder events and gene flow change allele frequencies, how to calculate allele frequencies from counts, and why these changes count as evolution."
course: "biology"
unit: 7
topics: ["7.4"]
resourceType: "study-guide"
prerequisites:
  - "Alleles, genotypes, homozygous and heterozygous"
  - "Natural and artificial selection change populations over generations"
prerequisiteResources: ["mb-ap-bio-7.3-study-guide"]
learningObjectives:
  - "Explain how mutation adds new genetic variation and why it is a random process"
  - "Explain genetic drift as chance change in allele frequencies, strongest in small populations"
  - "Distinguish the bottleneck effect from the founder effect, with an example of each"
  - "Explain how gene flow adds or removes alleles and keeps connected populations similar"
  - "Calculate allele frequencies from genotype counts and use changes in them as evidence of evolution"
  - "State a null hypothesis and predict results for an investigation of drift or gene flow"
skills: ["1", "3", "4", "5", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Allele frequency = copies of the allele ÷ total copies of that gene (2 per diploid individual). Give frequencies to 2 or 3 decimal places"
related: ["mb-ap-bio-7.4-revision-notes", "mb-ap-bio-7.4-practice", "mb-ap-bio-7.4-checklist"]
next: "mb-ap-bio-7.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "A population evolves when its allele frequencies change from one generation to the next. Selection is one cause; random processes are others."
  - "Mutation is random and adds new alleles, the raw material for selection. On its own it changes frequencies very slowly."
  - "Genetic drift is chance change in allele frequencies. It is strongest in small populations and can fix or remove an allele regardless of its effect."
  - "Bottleneck: a population is cut to a few survivors. Founder effect: a few individuals start a new, separate population. Both are forms of drift."
  - "Gene flow (migration) moves alleles between populations. It keeps them similar and works against their splitting into separate species."
faqs:
  - question: "Is genetic drift the same as natural selection?"
    answer: "No. Selection favours alleles because of their effect on survival and reproduction. Drift changes allele frequencies by chance, whatever the alleles do. A harmful allele can increase by drift in a small population."
  - question: "Do I need the Hardy–Weinberg equations for this topic?"
    answer: "Not yet. Here you calculate allele frequencies by counting alleles. Hardy–Weinberg equilibrium, and what it predicts, is Topic 7.5."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## What "evolution" means in a population

In Topics 7.2 and 7.3 you saw selection change traits over generations. Population genetics looks at the same change through the genes. A **population** is a group of individuals of one species living in one area that can interbreed. Together their alleles form the **gene pool**.

The key measure is **allele frequency**: the fraction of all copies of a gene in the population that are one particular allele.

**allele frequency = copies of that allele ÷ total copies of the gene**

In a diploid population, each individual carries two copies of each gene, so the total is 2 × the number of individuals. A homozygote (AA) carries two copies of A; a heterozygote (Aa) carries one.

A population **evolves** when its allele frequencies change across generations. So a measured change in allele frequency is direct evidence that evolution has happened. Natural selection is one cause. This topic adds the causes that do not depend on whether an allele is useful: **mutation**, **genetic drift** and **gene flow**.

## Mutation: the source of new alleles

A **mutation** is a change in the DNA sequence (Topic 6.7). Mutations arise at random: a cell does not produce the mutation it "needs". Most have no effect or are harmful; a few are useful in a particular environment.

- Mutation is the only process that creates **brand-new alleles**. All variation that selection acts on traces back to mutation.
- For any one gene, mutation is rare, so mutation alone shifts allele frequencies very slowly.
- What happens to a new allele next depends on selection and on chance.

## Genetic drift: change by chance

**Genetic drift** is a change in allele frequencies caused by chance events, not by the alleles' effects. Each generation, only some individuals happen to breed, and each parent passes on one of its two alleles at random. The next generation is a **sample** of the alleles in the parents, and samples rarely match exactly.

Think of tossing a coin. Ten tosses can easily give 7 heads (70%); a thousand tosses will almost never give 700. In the same way, drift is **strong in small populations** and weak in large ones.

<figure>
<svg viewBox="0 0 640 360" role="img" aria-labelledby="gd1-title gd1-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="gd1-title">Model of genetic drift in small and large populations</title>
<desc id="gd1-desc">Line graph of allele frequency, 0 to 1, against generation, 0 to 30. Six model populations all start at 0.5. Three small populations of 10 individuals, dashed lines, swing widely: one reaches 1.0 at generation 13 and stays there, one falls to 0 at generation 15 and stays there, and one wanders between 0.35 and 0.8 and ends at 0.35. Three large populations of 250 individuals, solid lines, stay close to 0.5, between 0.44 and 0.69, ending at 0.51, 0.57 and 0.65.</desc>
<rect x="0" y="0" width="640" height="360" fill="#ffffff"/>
<line x1="80" y1="240" x2="440" y2="240" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="80" y1="180" x2="440" y2="180" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="80" y1="120" x2="440" y2="120" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="80" y1="60" x2="440" y2="60" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="80" y1="300" x2="450" y2="300" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="300" x2="80" y2="50" stroke="#1d2b44" stroke-width="2"/>
<text x="80" y="320" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<text x="200" y="320" text-anchor="middle" font-size="12" fill="#1d2b44">10</text>
<text x="320" y="320" text-anchor="middle" font-size="12" fill="#1d2b44">20</text>
<text x="440" y="320" text-anchor="middle" font-size="12" fill="#1d2b44">30</text>
<text x="72" y="304" text-anchor="end" font-size="12" fill="#1d2b44">0</text>
<text x="72" y="244" text-anchor="end" font-size="12" fill="#1d2b44">0.25</text>
<text x="72" y="184" text-anchor="end" font-size="12" fill="#1d2b44">0.50</text>
<text x="72" y="124" text-anchor="end" font-size="12" fill="#1d2b44">0.75</text>
<text x="72" y="64" text-anchor="end" font-size="12" fill="#1d2b44">1.00</text>
<text x="260" y="345" text-anchor="middle" font-size="14" fill="#1d2b44">Generation</text>
<text x="22" y="180" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 22 180)">Allele frequency</text>
<polyline points="80,180 92,144 104,132 116,132 128,156 140,168 152,204 164,180 176,144 188,96 200,96 212,96 224,72 236,60 248,60 260,60 272,60 284,60 296,60 308,60 320,60 332,60 344,60 356,60 368,60 380,60 392,60 404,60 416,60 428,60 440,60" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="7 5"/>
<polyline points="80,180 92,216 104,216 116,204 128,252 140,276 152,252 164,276 176,288 188,264 200,264 212,276 224,276 236,276 248,288 260,300 272,300 284,300 296,300 308,300 320,300 332,300 344,300 356,300 368,300 380,300 392,300 404,300 416,300 428,300 440,300" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="7 5"/>
<polyline points="80,180 92,132 104,132 116,180 128,216 140,204 152,216 164,192 176,216 188,192 200,192 212,156 224,156 236,156 248,180 260,120 272,108 284,156 296,192 308,216 320,204 332,192 344,144 356,156 368,132 380,132 392,132 404,132 416,180 428,192 440,216" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="7 5"/>
<polyline points="80,180 92,177.1 104,170.9 116,176.2 128,173.8 140,173.8 152,170.9 164,174.7 176,178.1 188,181 200,176.6 212,175.7 224,177.6 236,178.1 248,184.8 260,185.3 272,177.6 284,172.3 296,168 308,166.1 320,167.5 332,159.8 344,163.7 356,155.5 368,153.1 380,144.5 392,137.3 404,137.3 416,139.7 428,135.4 440,144.5" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<polyline points="80,180 92,179.5 104,181 116,182.9 128,181 140,182.9 152,186.2 164,189.6 176,191 188,194.4 200,189.1 212,182.9 224,180 236,181.4 248,174.2 260,172.3 272,171.8 284,169.9 296,169.4 308,164.2 320,161.3 332,157 344,163.7 356,159.4 368,163.2 380,166.6 392,164.6 404,165.6 416,173.3 428,178.6 440,176.6" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<polyline points="80,180 92,172.8 104,175.2 116,176.6 128,180 140,176.6 152,163.7 164,166.6 176,161.8 188,171.4 200,173.3 212,174.7 224,178.6 236,176.6 248,183.4 260,175.2 272,161.3 284,160.3 296,162.7 308,160.8 320,158.9 332,170.9 344,173.3 356,169.9 368,169.4 380,169.9 392,171.4 404,164.2 416,162.2 428,158.9 440,164.2" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<text x="452" y="64" font-size="12" fill="#1d2b44">small: fixed (1.0)</text>
<text x="452" y="220" font-size="12" fill="#1d2b44">small: 0.35</text>
<text x="452" y="304" font-size="12" fill="#1d2b44">small: lost (0)</text>
<text x="452" y="160" font-size="12" fill="#1d2b44">large: 0.51–0.65</text>
<rect x="470" y="250" width="160" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="1"/>
<line x1="478" y1="262" x2="508" y2="262" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="7 5"/>
<text x="514" y="266" font-size="12" fill="#1d2b44">N = 10 (dashed)</text>
<line x1="478" y1="280" x2="508" y2="280" stroke="#1d2b44" stroke-width="1.5"/>
<text x="514" y="284" font-size="12" fill="#1d2b44">N = 250 (solid)</text>
</svg>
<figcaption>Figure 1. Computer model, not real data: each generation's alleles are a random sample of the previous generation's, with no selection, mutation or migration. Small populations drift far and can fix or lose the allele; large ones barely move.</figcaption>
</figure>

**Reading Figure 1.** All six populations start at 0.5 and experience no selection at all. Within 15 generations, two of the three small populations reached 1.0 (the allele is **fixed**: every copy is that allele) or 0 (the allele is **lost**). Once that happens, drift cannot bring the allele back; only mutation or gene flow can. The large populations stayed between 0.44 and 0.69. The direction of drift is random; which allele wins is a matter of chance.

Consequences of drift:

- It **reduces genetic variation** within a population, as alleles are lost or fixed.
- It can make a **harmful allele common** or remove a useful one, because chance, not effect, is in control.
- It makes separate small populations of one species **diverge** from each other, even in identical environments.

### The bottleneck effect

A **bottleneck** happens when a population is cut to a small number of individuals for at least one generation, for example by a flood, a fire, disease or hunting. The survivors' alleles are a chance sample of the original gene pool. Alleles that happened not to be among them are gone, even if the population later grows large again.

<figure>
<svg viewBox="0 0 640 290" role="img" aria-labelledby="bn-title bn-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="bn-title">A population bottleneck shown with three allele symbols</title>
<desc id="bn-desc">Three panels, left to right, joined by arrows. Original population: 20 alleles, 10 circles, 6 triangles and 4 filled squares. Bottleneck: only 4 alleles survive, 3 circles and 1 triangle. Recovered population: 20 alleles, 15 circles and 5 triangles, no squares. Frequencies are written below each panel.</desc>
<rect x="0" y="0" width="640" height="290" fill="#ffffff"/>
<text x="120" y="40" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Original population</text>
<text x="320" y="40" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Bottleneck</text>
<text x="520" y="40" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Recovered population</text>
<rect x="25" y="70" width="190" height="150" rx="8" fill="none" stroke="#1d2b44" stroke-width="2"/>
<rect x="275" y="105" width="90" height="90" rx="8" fill="none" stroke="#1d2b44" stroke-width="2"/>
<rect x="425" y="70" width="190" height="150" rx="8" fill="none" stroke="#1d2b44" stroke-width="2"/>
<line x1="220" y1="150" x2="265" y2="150" stroke="#1d2b44" stroke-width="2"/>
<polygon points="270,150 260,144 260,156" fill="#1d2b44"/>
<line x1="370" y1="150" x2="415" y2="150" stroke="#1d2b44" stroke-width="2"/>
<polygon points="420,150 410,144 410,156" fill="#1d2b44"/>
<text x="320" y="90" text-anchor="middle" font-size="12" fill="#1d2b44">4 survive by chance</text>
<circle cx="50" cy="95" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<polygon points="85,85 95,103 75,103" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="120" cy="95" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="147" y="87" width="16" height="16" fill="#1d2b44"/>
<circle cx="190" cy="95" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<polygon points="50,120 60,138 40,138" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="85" cy="130" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="112" y="122" width="16" height="16" fill="#1d2b44"/>
<polygon points="155,120 165,138 145,138" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="182" y="122" width="16" height="16" fill="#1d2b44"/>
<circle cx="50" cy="165" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="85" cy="165" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<polygon points="120,155 130,173 110,173" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="155" cy="165" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="182" y="157" width="16" height="16" fill="#1d2b44"/>
<circle cx="50" cy="200" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<polygon points="85,190 95,208 75,208" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="120" cy="200" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="155" cy="200" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<polygon points="190,190 200,208 180,208" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="300" cy="130" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<polygon points="340,120 350,138 330,138" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="300" cy="170" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="340" cy="170" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="450" cy="95" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="485" cy="95" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<polygon points="520,85 530,103 510,103" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="555" cy="95" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="590" cy="95" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="450" cy="130" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="485" cy="130" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<polygon points="520,120 530,138 510,138" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="555" cy="130" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="590" cy="130" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="450" cy="165" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<polygon points="485,155 495,173 475,173" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="520" cy="165" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="555" cy="165" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="590" cy="165" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="450" cy="200" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="485" cy="200" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<polygon points="520,190 530,208 510,208" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="555" cy="200" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<polygon points="590,190 600,208 580,208" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="120" y="245" text-anchor="middle" font-size="13" fill="#1d2b44">○ 0.50  △ 0.30  ■ 0.20</text>
<text x="320" y="245" text-anchor="middle" font-size="13" fill="#1d2b44">○ 0.75  △ 0.25  ■ 0</text>
<text x="520" y="245" text-anchor="middle" font-size="13" fill="#1d2b44">○ 0.75  △ 0.25  ■ 0</text>
<text x="320" y="275" text-anchor="middle" font-size="12" fill="#1d2b44">Symbols are alleles of one gene: circle, triangle, filled square.</text>
</svg>
<figcaption>Figure 2. The survivors were not chosen for their alleles. The square allele was lost by chance, and the population that regrows has the survivors' frequencies, not the original ones.</figcaption>
</figure>

**A real example.** Hunting in the 1800s cut the northern elephant seal to a tiny remnant, perhaps a few tens of animals. Protected, the population has since grown to well over 100,000, but genetic studies show a sharp loss of variation and high homozygosity. Size recovered; lost alleles did not.

### The founder effect

The **founder effect** happens when a few individuals leave a population and start a new, separate one, for example by colonising an island. The new gene pool contains only the founders' alleles, at the founders' frequencies. A rare allele can become common in the new population simply because one founder happened to carry it.

Human examples exist: some genetic conditions are much more common in small, long-isolated communities descended from few founders. For instance, Ellis–van Creveld syndrome, a rare inherited condition that includes extra fingers (polydactyly), is far more common among the Old Order Amish of Lancaster County, Pennsylvania, than in most other populations.

**Bottleneck or founder effect?** In a bottleneck, the original population itself shrinks. In a founder event, a small group splits off and the original population may continue unchanged. Both are drift: the new gene pool is a chance sample.

## Gene flow: alleles on the move

**Gene flow** is the movement of alleles between populations, when individuals migrate and breed (or when pollen or seeds are carried). It can **add** alleles to a population, including new ones, and it **removes** alleles from the population that the migrants leave.

Gene flow makes connected populations **more similar**. Each exchange pulls their allele frequencies toward each other. This is why continued gene flow **stops two populations from splitting** into separate species. Cut off gene flow (a new dam, road or rising sea) and drift, mutation and selection can act on each population separately, so they drift apart.

Gene flow can also help a population that has lost variation. Bringing in individuals from a larger population restores alleles, a process conservation biologists call **genetic rescue**.

| Process | Random? | Effect on variation within a population | Effect on differences between populations |
|---|---|---|---|
| Mutation | yes | adds new alleles (slowly) | can increase |
| Genetic drift (incl. bottleneck, founder) | yes | decreases (alleles lost or fixed) | increases |
| Gene flow | not selective | usually increases | decreases |
| Natural selection | no | often decreases | can increase (different environments) |

## Worked example 1: a bottleneck in numbers

**Question.** A fictional island population of 500 ground beetles has these genotypes for a wing-colour gene: 180 AA, 240 Aa, 80 aa. A storm leaves 12 survivors: 2 AA, 4 Aa, 6 aa.
(a) Calculate the frequency of A before and after the storm. (b) Has the population evolved? (c) State a null hypothesis for whether the storm acted as selection, and say what you would need to test it.

**(a) Before the storm.**

1. Total alleles = 2 × 500 = 1000.
2. Copies of A = (2 × 180) + 240 = 360 + 240 = 600.
3. Frequency of A = 600 ÷ 1000 = **0.60**; frequency of a = 1 − 0.60 = **0.40**.

**After the storm.**

1. Total alleles = 2 × 12 = 24.
2. Copies of A = (2 × 2) + 4 = 8.
3. Frequency of A = 8 ÷ 24 = **0.333**; frequency of a = **0.667**.

**Check.** The two frequencies add to 1 in each case.

**(b)** The frequency of A fell by 0.267 (from 0.60 to 0.333). If the descendants keep these frequencies, the population has evolved: its allele frequencies have changed between generations. Strictly, you confirm evolution by measuring the next generation.

**(c)** Null hypothesis: **"Survival in the storm was independent of genotype at this gene."** If survival were random, 12 survivors drawn from the original proportions would include about 4.3 AA, 5.8 Aa and 1.9 aa on average. The observed 2, 4 and 6 differ, most clearly the 6 aa beetles against about 1.9 expected. A difference this large would arise by chance only rarely (roughly 2 times in 100), so it hints at selection, but one storm and 12 beetles is a single small sample. To test the null hypothesis you would need more evidence: for example, repeat observations from several storms or islands, or a mechanism by which wing colour could affect survival. If aa beetles did better every time, selection is likely; if the direction varies, drift is the better explanation.

A second gene shows drift's other effect. Allele B2 had a frequency of 0.02 before the storm (20 of 1000 copies). The chance that none of the 24 surviving alleles is B2 is 0.98²⁴ ≈ **0.62**, so B2 is more likely than not to be lost, regardless of what it does.

## Worked example 2: founders and gene flow

**Question.** On a fictional mainland, the frequency of a stripe allele S in a lizard population is 0.20. Eight lizards raft to an empty island: 1 SS, 3 Ss and 4 ss.
(a) Calculate the frequency of S among the founders. (b) Many generations later the island holds 60 lizards with S at 0.40. Fifteen mainland lizards then arrive and breed. Calculate the new frequency of S. (c) Explain what continued migration would do.

**(a)** Total alleles = 2 × 8 = 16. Copies of S = (2 × 1) + 3 = 5. Frequency = 5 ÷ 16 = **0.3125 ≈ 0.31**, already higher than the mainland's 0.20 by chance alone: a founder effect.

**(b)** Count alleles in each group, then combine.

1. Island: 2 × 60 = 120 alleles; S = 0.40 × 120 = 48.
2. Migrants: 2 × 15 = 30 alleles; S = 0.20 × 30 = 6.
3. Combined: S = 48 + 6 = 54, out of 120 + 30 = 150 alleles.
4. New frequency of S = 54 ÷ 150 = **0.36**.

**(c)** Each wave of migrants pulls the island frequency toward the mainland value (0.40 → 0.36). If the same proportion of migrants arrived every generation, and nothing else acted, the frequency would continue falling toward 0.20 (about 0.27 after five such generations). Gene flow is keeping the two populations alike, working against the divergence that the founder effect and drift started.

## Common misconceptions

- **"Organisms mutate because they need to adapt."** Mutations are random with respect to need. Selection then acts on whatever arises.
- **"Genetic drift only happens in small populations."** It happens in all populations; it is just much stronger in small ones.
- **"Drift favours the better allele."** Drift ignores an allele's effect. Only selection favours alleles by their effects.
- **"Once a bottlenecked population grows back, its variation returns."** Lost alleles stay lost unless mutation or gene flow restores them.
- **"The founder effect and the bottleneck effect are the same."** In a founder event a small group separates; in a bottleneck the whole population shrinks.
- **"Evolution means individuals change."** Individuals do not evolve. Populations evolve, as their allele frequencies change across generations.
- **"Allele frequency = fraction of individuals showing the trait."** Count alleles, not phenotypes; heterozygotes carry one copy of each allele.

## Where this leads

Next, [Topic 7.5, Hardy–Weinberg Equilibrium](/advanced-course-resources/biology/7-5-hardy-weinberg-equilibrium-study-guide/), describes what allele and genotype frequencies look like when none of these processes is acting, and uses that as a null model to detect evolution. Test yourself with the [practice questions](/advanced-course-resources/biology/7-4-population-genetics-practice/), then use the [revision notes](/advanced-course-resources/biology/7-4-population-genetics-revision-notes/) and the [checklist](/advanced-course-resources/biology/7-4-population-genetics-checklist/) to consolidate. For how human choice changes allele frequencies, look back at [Topic 7.3, Artificial Selection](/advanced-course-resources/biology/7-3-artificial-selection-study-guide/).
