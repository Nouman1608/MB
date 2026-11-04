---
title: "Cambridge International AS & A Level Biology 9700: Selection and evolution -- Study Guide"
seoTitle: "A Level Biology 9700 Selection and Evolution Study Guide"
resourceType: "study-guides"
subject: "biology"
level: ["a-levels"]
topic: "Selection and evolution"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9700"]
syllabusSeries: "For examination in 2025, 2026 and 2027"
stage: "A"
order: 17
syllabusTopics:
  - qualification: "a-level"
    topic: "selection-and-evolution-cambridge-alevel-biology"
  - qualification: "a-level"
    topic: "selection-and-evolution-cambridge-alevel-biology"
    subtopic: "variation-cambridge-alevel-biology"
  - qualification: "a-level"
    topic: "selection-and-evolution-cambridge-alevel-biology"
    subtopic: "natural-and-artificial-selection-cambridge-alevel"
  - qualification: "a-level"
    topic: "selection-and-evolution-cambridge-alevel-biology"
    subtopic: "evolution-cambridge-alevel-biology"
description: "Study guide for Cambridge 9700 A Level Biology topic 17: variation, the t-test, natural and artificial selection, Hardy-Weinberg and speciation."
author: "marlbridge-academic-team"
reviewer: "hina-mogul"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

This guide teaches topic 17, Selection and evolution, of the Cambridge International AS & A Level Biology 9700 syllabus for examination in 2025, 2026 and 2027. It covers sections 17.1 Variation, 17.2 Natural and artificial selection and 17.3 Evolution. This is A Level content, not AS. It is examined on Paper 4 (A Level Structured Questions), and the t-test can also appear on Paper 5 (Planning, Analysis and Evaluation).

Quick links: [course hub](/boards/cambridge/a-level/biology/) · [printable checklist](/checklists/cambridge/a-level/biology/) · [revision notes](/resources/a-level-biology-9700-selection-and-evolution-revision-notes/) · [practice questions](/resources/a-level-biology-9700-selection-and-evolution-practice/) · [A Level diagnostic](/practice/9700/diagnostic/a-level/)

## What this topic covers

| Section | What you must be able to do | Paper |
|---|---|---|
| 17.1 (1–3) | Explain genetic and environmental causes of variation; continuous vs discontinuous variation and their genetic basis | 4 |
| 17.1 (4) | Use the t-test to compare two means (formula provided) | 4, 5 |
| 17.2 (1–3) | Explain natural selection; stabilising, directional and disruptive selection; selection, founder effect, genetic drift and bottlenecks | 4 |
| 17.2 (4) | Outline how bacteria become resistant to antibiotics | 4 |
| 17.2 (5) | Use the Hardy–Weinberg principle and state its conditions (equations provided) | 4 |
| 17.2 (6–7) | Principles of selective breeding; wheat and rice, maize, dairy cattle | 4 |
| 17.3 (1–3) | Outline evolution; use DNA sequence data; allopatric and sympatric speciation | 4 |

This topic builds on [Inheritance](/resources/a-level-biology-9700-inheritance/): alleles, meiosis and the chi-squared test are all used here.

## 17.1 Variation

### Genetic and environmental causes

Phenotypic variation can be caused by:

- **genetic factors only**, for example ABO blood group
- **environmental factors only**, for example a scar or the language a person speaks
- **both**, for example human height (alleles set a potential; diet and health decide how much of it is reached) or the height of a plant (alleles plus light and mineral ions)

Genetically identical organisms, such as clones or identical twins, show that any differences between them must be environmental.

### Discontinuous and continuous variation

| | Discontinuous | Continuous |
|---|---|---|
| Phenotypes | A few distinct classes, no intermediates | A range between two extremes |
| Genetic basis | One gene or a few genes; different alleles have large effects | Many genes (polygenes), each with a small, additive effect |
| Environment | Little or no effect | Large effect |
| Example | ABO blood group | Body mass, leaf length |
| Graph | Bar chart | Histogram; often a normal distribution |

**Why polygenes give continuous variation.** Suppose height in a plant is controlled by three unlinked genes, A/a, B/b and C/c, where each capital-letter allele adds the same amount. A cross AaBbCc × AaBbCc gives offspring with 0 to 6 "adding" alleles, in the proportions:

```
number of adding alleles:  0   1   2   3   4   5   6
fraction (out of 64):      1   6  15  20  15   6   1
```

Seven classes already give a bell shape. With more genes and environmental effects blurring the classes, the result is a smooth continuous range.

### The t-test


<figure class="lesson-diagram" style="margin: 2rem 0;">
  <!-- marlbridge-diagram:biology-t-test-workflow --><a href="/images/learning/biology/biology-t-test-workflow.svg" aria-label="Open full-size diagram: Two-sample t-test workflow for Cambridge 9700" title="Two-sample t-test workflow for Cambridge 9700"><img src="/images/learning/biology/biology-t-test-workflow.svg" width="1600" height="1050" alt="Two-sample t-test workflow for Cambridge 9700. The figure checks test suitability, displays the course formula, and works through the exact plant-cutting height example in the source guide, including t=4.44, df=14, p=0.05 critical value 2.14 and conclusion. A companion panel gives a bounded decision workflow. Statistical significance does not by itself identify causation." title="Two-sample t-test workflow for Cambridge 9700" loading="lazy" decoding="async" style="display:block;width:100%;height:auto;" /></a>
  <figcaption>Worked two-sample t-test workflow; check assumptions, calculate t and degrees of freedom, compare with the critical value, then interpret. Select the diagram to enlarge it.</figcaption>
</figure>
The t-test tells you whether the difference between two means is significant. Use it when:

- the data are continuous
- both samples come from normally distributed populations
- the standard deviations are about the same

The formula is provided; the degrees of freedom are not:

```
t = (x̄₁ − x̄₂) / √( s₁²/n₁ + s₂²/n₂ )        degrees of freedom = n₁ + n₂ − 2
```

In Papers 4 and 5 you may be given a partly completed calculation to finish rather than all the steps.

**Worked example.** Cuttings from one plant (so genetically identical) were grown in high or low light. Height in cm after four weeks:

```
high light: 34, 38, 31, 36, 40, 35, 33, 37     n = 8
low light:  29, 31, 27, 33, 30, 28, 32, 30     n = 8
```

1. Null hypothesis: there is no significant difference between the mean heights.
2. Means: x̄₁ = 284/8 = 35.5 cm; x̄₂ = 240/8 = 30.0 cm.
3. Standard deviations: Σ(x − x̄)² = 58 and 28, so s₁ = √(58/7) = 2.878 and s₂ = √(28/7) = 2.000.
4. s₁²/n₁ = 8.286/8 = 1.036; s₂²/n₂ = 4.000/8 = 0.500.
5. t = 5.5 / √1.536 = 5.5 / 1.239 = **4.44**.
6. Degrees of freedom = 8 + 8 − 2 = 14. Critical value at p = 0.05 = 2.14.
7. 4.44 > 2.14, so reject the null hypothesis: the difference is significant. Because the plants are clones, the difference is caused by the environment (light).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-biology-9700-selection-and-evolution--01-polygenes-bell-curve.webp" width="900" height="1040" alt="A bar chart of offspring from AaBbCc x AaBbCc across 0 to 6 height-adding alleles: 1, 6, 15, 20, 15, 6, 1 out of 64. A plant under each bar gets taller as the number of adding alleles rises. Many small additive genes, blurred by the environment, give a smooth continuous range." loading="lazy">
  <figcaption>Many genes with small additive effects give a bell-shaped distribution of offspring.</figcaption>
</figure>


## 17.2 Natural and artificial selection

### Natural selection

1. Populations can produce **many more offspring** than the environment can support.
2. There is **variation** among the offspring, much of it genetic.
3. Offspring **compete** for limited resources such as food, mates and space: the "struggle for existence".
4. Individuals best adapted to the conditions are **most likely to survive and reproduce**.
5. They **pass on their alleles**, so the frequency of advantageous alleles increases in the next generation.

The environmental factor that decides who survives (a predator, a disease, a temperature, an antibiotic) is the **selection pressure**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-biology-9700-selection-and-evolution--03-selection-changes-allele-frequency.webp" width="900" height="1140" alt="A population of 1000 beetles is 490 AA, 420 Aa and 90 aa. Predators eat all aa beetles, leaving 910 breeders. The allele count changes q from 600/2000 = 0.30 to 420/1820 = 0.23, a gradual fall because a allele hides in Aa survivors." loading="lazy">
  <figcaption>Removing one phenotype lowers the frequency of its allele in the next generation.</figcaption>
</figure>


### Three forces of selection

| Type | Which phenotypes are favoured | Effect on distribution | Example |
|---|---|---|---|
| Stabilising | The mean; both extremes selected against | Mean unchanged; range narrows | Human birth mass: very light and very heavy babies have lower survival |
| Directional | One extreme | Mean shifts in one direction | Antibiotic resistance in bacteria |
| Disruptive | Both extremes; the mean selected against | Two peaks may form | A bird population feeding on only very small and very large seeds |

Stabilising selection is typical when the environment is stable; directional selection follows a change in the environment.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-biology-9700-selection-and-evolution--02-three-types-of-selection.webp" width="900" height="1274" alt="Three panels each show a dashed bell curve before selection and a solid curve after. Stabilising selection narrows the curve with the mean unchanged, directional selection shifts it toward one extreme, and disruptive selection leaves two peaks and removes the middle." loading="lazy">
  <figcaption>Selection can narrow, shift or split the distribution of a phenotype.</figcaption>
</figure>


### Other changes in allele frequency

- **Genetic drift**: random changes in allele frequency from one generation to the next, because chance decides which individuals reproduce. Its effect is largest in **small populations**, where an allele can be lost or fixed by chance alone.
- **Founder effect**: a few individuals start a new, isolated population. Their alleles are only a small sample of the original gene pool, so allele frequencies differ from the parent population, and some alleles are missing.
- **Bottleneck effect**: a population is drastically reduced by a catastrophe, disease or hunting. The survivors carry a random, reduced set of alleles. Even if numbers recover, genetic diversity stays low.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-biology-9700-selection-and-evolution--06-genetic-drift.webp" width="900" height="1200" alt="Two graphs show eight simulated populations starting with an allele at 0.5. With 20 gene copies the lines wander and several are lost or fixed by chance; with 1000 gene copies they stay near 0.5." loading="lazy">
  <figcaption>Chance changes in allele frequency are large in small populations and small in large ones.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-biology-9700-selection-and-evolution--07-bottleneck-founder.webp" width="900" height="1070" alt="In a bottleneck 5000 animals fall to 40 survivors and allele A drops from 0.30 to 0.15. In the founder effect 25 birds found an island and a rare allele rises from 0.02 to 0.10. A small sample of the gene pool differs from the original by chance." loading="lazy">
  <figcaption>A small sample of a gene pool can change allele frequencies without any selection.</figcaption>
</figure>


### Antibiotic resistance

1. A **random mutation** gives one bacterium an allele for resistance, for example one coding for an enzyme that breaks down the antibiotic. The antibiotic does not cause the mutation.
2. When the antibiotic is used, susceptible bacteria are killed; the resistant bacterium survives.
3. It reproduces by binary fission, passing the allele to its offspring. The allele can also spread to other bacteria on plasmids.
4. With less competition, resistant bacteria increase, so the **frequency of the resistance allele rises**. This is directional selection.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-biology-9700-selection-and-evolution--04-antibiotic-resistance.webp" width="900" height="1100" alt="A rare bacterium already carries a resistance allele, the antibiotic kills the susceptible cells, and the survivors divide. A log-scale chart shows the resistant share rising from 0.001 to 0.0099, 0.091 and 0.50 over three doses that each kill 90 percent of susceptible cells." loading="lazy">
  <figcaption>Antibiotics select for resistance alleles that mutation had already produced.</figcaption>
</figure>


### The Hardy–Weinberg principle

The equations are provided:

```
p + q = 1                  p = frequency of dominant allele, q = recessive allele
p² + 2pq + q² = 1          p² = AA, 2pq = Aa, q² = aa
```

The principle applies only when: the population is **large**; mating is **random**; there is **no mutation**; there is **no migration** into or out of the population; and there is **no selection** (all genotypes survive and reproduce equally).

**Worked example.** In a population of 400 animals, 16 show a recessive phenotype. Find the number of heterozygotes.

```
q² = 16/400 = 0.04    q = √0.04 = 0.2
p = 1 − 0.2 = 0.8
2pq = 2 × 0.8 × 0.2 = 0.32
heterozygotes = 0.32 × 400 = 128
```

Always start from q² (the homozygous recessive frequency), because only that genotype can be recognised from its phenotype when there is dominance.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-biology-9700-selection-and-evolution--05-hardy-weinberg-square.webp" width="900" height="1010" alt="A unit square is divided by p = 0.8 and q = 0.2 into AA 0.64, two Aa areas of 0.16 and aa 0.04. For 400 animals with 16 recessive, q squared is 0.04, so q is 0.2, p is 0.8, 2pq is 0.32 and there are 128 carriers." loading="lazy">
  <figcaption>p squared, 2pq and q squared are the areas of a square split by the two allele frequencies.</figcaption>
</figure>


### Selective breeding (artificial selection)

Humans choose the individuals with the desired feature, breed them together, select the best offspring and repeat for many generations. Humans, not the environment, are the selection pressure, and the frequency of the chosen alleles increases.

- **Disease resistance in wheat and rice.** A high-yielding variety is crossed with a variety (or wild relative) that carries an allele for resistance to a disease such as a fungal infection. Offspring that show resistance are crossed again with the high-yielding variety over several generations, keeping resistant offspring each time, until the new variety has both high yield and resistance.
- **Inbreeding and hybridisation in maize.** Inbreeding (self-pollination over several generations) produces inbred lines that are homozygous and uniform, but they are weak because harmful recessive alleles become homozygous (inbreeding depression). Two different inbred lines are then crossed. The F1 hybrids are heterozygous at many loci, so they are vigorous (hybrid vigour), and they are uniform because every plant has the same genotype. Farmers buy new F1 seed each year because the F2 would vary.
- **Milk yield in dairy cattle.** Only cows produce milk, so bulls are judged by the milk yield of their daughters (progeny testing). Semen from the best bulls is used to inseminate high-yielding cows by artificial insemination. Offspring with the highest yields are chosen to breed again.

## 17.3 Evolution

**Evolution** is the process by which new species form from pre-existing species over time, as a result of changes to gene pools from generation to generation.

### DNA sequence data

Species that share a recent common ancestor have had less time to build up mutations, so their DNA base sequences for the same gene are more similar. Comparing sequences lets you rank relationships and build evolutionary trees. If mutations build up at a roughly constant rate, the number of differences also estimates how long ago two species diverged.

**Worked example.** The same 27-base section of a gene from species A is compared with species B, C and D:

| Species compared with A | Base differences | Percentage difference |
|---|---|---|
| B | 1 | 3.7% |
| C | 3 | 11.1% |
| D | 8 | 29.6% |

B is most closely related to A (most recent common ancestor); D is least closely related. In an exam, say "more similar sequences suggest a more recent common ancestor". Evidence from one short section is limited, so conclusions are stronger when many genes are compared.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-biology-9700-selection-and-evolution--09-dna-relatedness.webp" width="900" height="930" alt="Four rows show the same 27-base DNA section in species A to D with differences from A highlighted: B 1 (3.7 percent), C 3 (11.1 percent) and D 8 (29.6 percent). Fewer differences mean a more recent common ancestor, so B is closest to A." loading="lazy">
  <figcaption>Fewer base differences suggest a more recent common ancestor.</figcaption>
</figure>


### Speciation

Speciation needs **reproductive isolation**: two populations stop exchanging alleles (no gene flow). Then mutation, different selection pressures and genetic drift change their gene pools separately until they can no longer interbreed to produce fertile offspring.

- **Allopatric speciation**: the populations are separated by a **geographical barrier**, such as a mountain range, a river or the sea.
- **Sympatric speciation**: the populations live in the **same area** but are isolated by **ecological** separation (for example different habitats, food sources or breeding seasons) or **behavioural** separation (for example different courtship displays or songs).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-biology-9700-selection-and-evolution--08-speciation.webp" width="900" height="1080" alt="In allopatric speciation a river splits one population, gene flow stops, and the two groups diverge until they cannot produce fertile offspring together. In sympatric speciation the groups share an area but are isolated, for example by flowering in May or July, and diverge in the same way." loading="lazy">
  <figcaption>Speciation needs reproductive isolation, either by a physical barrier or by another barrier in the same place.</figcaption>
</figure>


## Common errors

- Saying individuals "adapt" or "evolve" during their lifetime. Populations evolve; individuals are selected.
- Saying bacteria become "immune" or that the antibiotic "causes" the mutation.
- Starting Hardy–Weinberg from the dominant phenotype frequency instead of q².
- Forgetting that the t-test needs similar standard deviations and normal distributions.
- Writing "the results are significant" without comparing t with the critical value at the right degrees of freedom.
- Describing hybrid maize as vigorous "because it is homozygous". Inbred lines are homozygous; the hybrids are heterozygous.

## Next steps

Condense this with the [selection and evolution revision notes](/resources/a-level-biology-9700-selection-and-evolution-revision-notes/), then test yourself with the [selection and evolution practice questions](/resources/a-level-biology-9700-selection-and-evolution-practice/).

## Official syllabus

Cambridge International AS & A Level Biology 9700 syllabus for examination in 2025, 2026 and 2027 (Version 1), Cambridge University Press & Assessment -- topic 17, Selection and evolution.
