---
resourceId: "mb-ap-bio-5.4-study-guide"
title: "Non-Mendelian Genetics: Study Guide (Biology 5.4)"
description: "Why some traits break Mendel's ratios: linked genes and gene mapping, sex-linked traits, incomplete dominance, codominance, pleiotropy and maternal inheritance of mitochondria and chloroplasts."
course: "biology"
unit: 5
topics: ["5.4"]
resourceType: "study-guide"
prerequisites:
  - "Mendel's laws, Punnett squares and the product rule"
  - "The chi-square test for cross data"
  - "Crossing over in prophase I of meiosis"
prerequisiteResources: ["mb-ap-bio-5.3-study-guide"]
learningObjectives:
  - "Use a chi-square test to show that observed offspring ratios differ from Mendelian predictions"
  - "Explain genetic linkage and calculate recombination frequency and map distance from cross data"
  - "Distinguish incomplete dominance from codominance and predict ratios for each"
  - "Predict and explain the inheritance of X-linked and Y-linked traits, and describe ZW and haplodiploid sex determination"
  - "Explain pleiotropy and non-nuclear (mitochondrial and chloroplast) inheritance"
skills: ["1", "2", "5", "6"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Recombination frequency = recombinant offspring ÷ total offspring × 100%; 1% = 1 map unit. Chi-square critical values at p = 0.05: 3.84 (1 df), 5.99 (2 df), 7.81 (3 df)"
related: ["mb-ap-bio-5.4-revision-notes", "mb-ap-bio-5.4-practice", "mb-ap-bio-5.4-checklist"]
next: "mb-ap-bio-5.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Many traits do not follow Mendel's ratios. You show this quantitatively: a chi-square test rejects the Mendelian expectation."
  - "Genes close together on one chromosome are linked. Recombinant offspring come from crossing over; the percentage of recombinants gives the map distance (1% = 1 map unit)."
  - "Incomplete dominance: the heterozygote is a blend. Codominance: the heterozygote shows both phenotypes. Both give a 1 : 2 : 1 phenotypic ratio from two heterozygotes."
  - "Males (XY) have one X, so X-linked recessive traits appear more often in males than in females. Birds (ZW) and bees (haplodiploidy) use other systems."
  - "Pleiotropy: one gene affects several traits. Mitochondrial and chloroplast genes are usually inherited only from the mother."
faqs:
  - question: "Are non-Mendelian patterns exceptions that disprove Mendel?"
    answer: "No. Segregation still happens for every nuclear gene. The ratios change because of where the gene is (same chromosome, sex chromosome, organelle) or how its alleles interact, not because alleles stop separating."
  - question: "Can a map distance be more than 50 map units?"
    answer: "Two genes can be more than 50 units apart on a map built by adding up short distances, but a single cross never shows more than about 50% recombinants. Genes that far apart look as if they assort independently."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## When the ratios do not fit

In Topic 5.3, Mendel's laws predicted neat ratios: 3 : 1, 9 : 3 : 3 : 1, 1 : 1 : 1 : 1. Many real traits give different ratios. How do you know a difference is real and not just chance? You use the **chi-square test**. If χ² is greater than the critical value, the observed ratio differs significantly from the Mendelian prediction, and you look for a biological reason.

This topic covers the main reasons:

| Cause | What changes |
|---|---|
| Linked genes | genes on one chromosome do not assort independently |
| Incomplete dominance or codominance | heterozygotes look different from both homozygotes |
| Sex-linked genes | inheritance depends on the sex of parent and offspring |
| Pleiotropy | one gene affects several traits, so those traits are inherited together |
| Non-nuclear genes | genes in mitochondria or chloroplasts come from one parent only |

In every case the alleles of nuclear genes still segregate in meiosis. What changes is where the gene sits or how its alleles act.

## Incomplete dominance and codominance

With complete dominance, Aa looks like AA. Two other kinds of allele interaction give the heterozygote its own phenotype.

- **Incomplete dominance.** Neither allele masks the other, so the heterozygote is a **blend** of the two homozygous phenotypes. A classic example is snapdragon flower colour: red × white gives pink.
- **Codominance.** **Both** alleles are fully expressed in the heterozygote. In the human ABO blood groups, alleles Iᴬ and Iᴮ are codominant: an IᴬIᴮ person has both A and B antigens on their red blood cells (blood group AB). A third allele, i, is recessive to both.

Because the heterozygote has its own phenotype, a cross between two heterozygotes gives a **1 : 2 : 1 phenotypic ratio**, the same as the genotypic ratio. With complete dominance it would be 3 : 1.

**Codominance example.** A parent with genotype IᴬIᴮ has a child with a partner who is Iᴬi. The possible children are IᴬIᴬ, Iᴬi, IᴬIᴮ and Iᴮi, each with probability 1/4. So P(group A) = 1/4 + 1/4 = 1/2 (sum rule), P(group AB) = 1/4, P(group B) = 1/4, and P(group O) = 0.

## Linked genes and gene mapping

Each chromosome carries many genes. Genes on the same chromosome are **genetically linked**: they tend to go into gametes together, so they do not assort independently.

Linkage is not complete. In prophase I, non-sister chromatids exchange segments by **crossing over**. If a crossover happens between two linked genes, it produces chromosomes with **new combinations** of their alleles. Offspring carrying these are **recombinants**. Offspring with the original combinations are **parental types**.

The farther apart two genes are, the more likely a crossover falls between them. So the percentage of recombinants measures distance:

**Recombination frequency (%) = number of recombinant offspring ÷ total offspring × 100**

**1% recombination = 1 map unit.** Using these distances to place genes in order along a chromosome is **gene mapping**.

How to spot linkage in a dihybrid test cross (AaBb × aabb):

- Unlinked genes give four phenotypes in a 1 : 1 : 1 : 1 ratio.
- Linked genes give two large classes (the parental types) and two small classes (the recombinants).
- A chi-square test against 1 : 1 : 1 : 1 gives a large χ², so you reject the hypothesis of independent assortment.

Recombination frequency cannot exceed about 50%. At that point, recombinants and parental types are equally common, which looks the same as independent assortment.

<figure>
<svg viewBox="0 0 640 240" role="img" aria-labelledby="map-title map-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="map-title">Genetic map of three linked genes</title>
<desc id="map-desc">A horizontal bar represents a chromosome. Three marks show gene B at 0 map units, gene E at 9 map units and gene L at 17 map units. Brackets below show 9 map units between B and E, 8 map units between E and L, and 17 map units between B and L.</desc>
<rect x="0" y="0" width="640" height="240" fill="#ffffff"/>
<rect x="90" y="80" width="470" height="34" rx="17" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<line x1="120" y1="72" x2="120" y2="122" stroke="#1d2b44" stroke-width="3"/>
<line x1="336" y1="72" x2="336" y2="122" stroke="#1d2b44" stroke-width="3"/>
<line x1="528" y1="72" x2="528" y2="122" stroke="#1d2b44" stroke-width="3"/>
<text x="120" y="60" text-anchor="middle" font-size="18" font-weight="700" fill="#1d2b44">B</text>
<text x="336" y="60" text-anchor="middle" font-size="18" font-weight="700" fill="#1d2b44">E</text>
<text x="528" y="60" text-anchor="middle" font-size="18" font-weight="700" fill="#1d2b44">L</text>
<text x="120" y="32" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<text x="336" y="32" text-anchor="middle" font-size="12" fill="#1d2b44">9</text>
<text x="528" y="32" text-anchor="middle" font-size="12" fill="#1d2b44">17</text>
<line x1="120" y1="140" x2="336" y2="140" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="120" y1="134" x2="120" y2="146" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="336" y1="134" x2="336" y2="146" stroke="#1d2b44" stroke-width="1.5"/>
<text x="228" y="162" text-anchor="middle" font-size="13" fill="#1d2b44">9 map units</text>
<line x1="336" y1="140" x2="528" y2="140" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="528" y1="134" x2="528" y2="146" stroke="#1d2b44" stroke-width="1.5"/>
<text x="432" y="162" text-anchor="middle" font-size="13" fill="#1d2b44">8 map units</text>
<line x1="120" y1="190" x2="528" y2="190" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<line x1="120" y1="184" x2="120" y2="196" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="528" y1="184" x2="528" y2="196" stroke="#1d2b44" stroke-width="1.5"/>
<text x="324" y="214" text-anchor="middle" font-size="13" fill="#1d2b44">17 map units (B to L)</text>
<text x="600" y="32" text-anchor="end" font-size="12" fill="#1d2b44">(position)</text>
</svg>
<figcaption>Figure 1. Map of three hypothetical linked genes from Worked example 2. Numbers above the genes are positions in map units. The two short distances add up to the long one, which places E between B and L.</figcaption>
</figure>

## Sex-linked traits

In humans and other mammals, females are XX and males are XY. The X chromosome carries many genes; the small Y carries few. A gene on a sex chromosome is **sex-linked**.

- **X-linked genes.** A male has one X, so he has only one allele for each X-linked gene. A single recessive allele is therefore expressed in a male. A female needs two copies. This is why X-linked recessive traits, such as red-green colour blindness and haemophilia, are **much more common in males**.
- A father passes his X to **all his daughters** and his Y to **all his sons**. So an affected father never passes an X-linked trait to his sons.
- **Y-linked genes** pass from a father to **all** his sons, and never to daughters.

**Pedigree clues for X-linked recessive traits:** affected individuals are mostly male; affected sons usually have unaffected (carrier) mothers; there is no father-to-son transmission; and every daughter of an affected father is at least a carrier.

Write X-linked genotypes with the allele as a superscript: Xᴮ for normal colour vision, Xᵇ for colour blindness, and Y with no allele.

<figure>
<svg viewBox="0 0 640 320" role="img" aria-labelledby="xl-title xl-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="xl-title">Punnett square for an X-linked recessive trait</title>
<desc id="xl-desc">Mother's gametes, X with allele B and X with allele b, across the top. Father's gametes, X with allele B and Y, down the side. The four boxes are: X B X B, a daughter with normal vision; X B X b, a carrier daughter with normal vision; X B Y, a son with normal vision; X b Y, a colour-blind son, drawn with a dashed border. Summary at right: no colour-blind daughters, half of daughters are carriers, half of sons are colour-blind, probability of a colour-blind son is one quarter.</desc>
<rect x="0" y="0" width="640" height="320" fill="#ffffff"/>
<text x="200" y="26" text-anchor="middle" font-size="13" fill="#1d2b44">Mother (carrier) gametes</text>
<text x="150" y="58" text-anchor="middle" font-size="18" font-weight="700" fill="#1d2b44">X<tspan dy="-7" font-size="12">B</tspan></text>
<text x="250" y="58" text-anchor="middle" font-size="18" font-weight="700" fill="#1d2b44">X<tspan dy="-7" font-size="12">b</tspan></text>
<text x="30" y="170" text-anchor="middle" font-size="13" fill="#1d2b44" transform="rotate(-90 30 170)">Father (normal vision) gametes</text>
<text x="76" y="126" text-anchor="middle" font-size="18" font-weight="700" fill="#1d2b44">X<tspan dy="-7" font-size="12">B</tspan></text>
<text x="76" y="226" text-anchor="middle" font-size="18" font-weight="700" fill="#1d2b44">Y</text>
<rect x="100" y="70" width="100" height="100" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="200" y="70" width="100" height="100" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="100" y="170" width="100" height="100" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="204" y="174" width="92" height="92" fill="#ffffff" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5"/>
<text x="150" y="120" text-anchor="middle" font-size="18" font-weight="700" fill="#1d2b44">X<tspan dy="-7" font-size="12">B</tspan><tspan dy="7" font-size="18">X</tspan><tspan dy="-7" font-size="12">B</tspan></text>
<text x="250" y="120" text-anchor="middle" font-size="18" font-weight="700" fill="#1d2b44">X<tspan dy="-7" font-size="12">B</tspan><tspan dy="7" font-size="18">X</tspan><tspan dy="-7" font-size="12">b</tspan></text>
<text x="150" y="220" text-anchor="middle" font-size="18" font-weight="700" fill="#1d2b44">X<tspan dy="-7" font-size="12">B</tspan><tspan dy="7" font-size="18">Y</tspan></text>
<text x="250" y="220" text-anchor="middle" font-size="18" font-weight="700" fill="#1d2b44">X<tspan dy="-7" font-size="12">b</tspan><tspan dy="7" font-size="18">Y</tspan></text>
<text x="150" y="145" text-anchor="middle" font-size="11" fill="#1d2b44">daughter, normal</text>
<text x="250" y="145" text-anchor="middle" font-size="11" fill="#1d2b44">daughter, carrier</text>
<text x="150" y="245" text-anchor="middle" font-size="11" fill="#1d2b44">son, normal</text>
<text x="250" y="245" text-anchor="middle" font-size="11" fill="#1d2b44">son, colour-blind</text>
<text x="330" y="100" font-size="14" fill="#1d2b44">Daughters: none colour-blind,</text>
<text x="330" y="120" font-size="14" fill="#1d2b44">1/2 are carriers</text>
<text x="330" y="160" font-size="14" fill="#1d2b44">Sons: 1/2 colour-blind</text>
<text x="330" y="200" font-size="14" font-weight="600" fill="#1d2b44">P(colour-blind son) = 1/4</text>
<text x="330" y="240" font-size="12" fill="#1d2b44">(dashed box = affected)</text>
</svg>
<figcaption>Figure 2. A carrier mother and a father with normal vision. Every son gets his only X from his mother, so each son has a 1/2 chance of being colour-blind. Daughters always get the father's normal X.</figcaption>
</figure>

**Other sex-determination systems.** Not every species uses X and Y.

- **Birds** use the **ZW** system: males are ZZ and females are ZW. Here the female has only one Z, so Z-linked recessive traits are more common in **females**.
- **Bees** use **haplodiploidy**: females develop from fertilized eggs and are diploid; males develop from unfertilized eggs and are haploid. A male has no father and passes on his whole genome to every daughter.

## Pleiotropy

**Pleiotropy** is when one gene affects several traits. The best-known human example is the sickle-cell allele of the gene for a haemoglobin subunit. People with two copies make haemoglobin that makes red blood cells sickle-shaped. This one change causes anaemia, blocked small blood vessels, pain and organ damage. Heterozygotes are more resistant to malaria.

Because all these effects come from one gene, they are **inherited together**. They cannot segregate independently, and crossing over can never separate them. This is how you tell pleiotropy from linkage: two linked genes are occasionally separated by crossing over, giving recombinants.

## Non-nuclear inheritance

Mitochondria and chloroplasts contain their own small circular DNA. Their genes follow different rules.

- When a cell divides, its mitochondria and chloroplasts are shared out **at random** between daughter cells and gametes. So their traits do not follow Mendel's ratios. In some plants with variegated (patchy green and white) leaves, cells with mixed chloroplasts divide, and some cell lines end up with mostly faulty chloroplasts, giving white patches.
- In animals, the egg supplies the zygote's mitochondria; sperm usually contribute none. Traits coded by mitochondrial DNA are therefore **typically maternally inherited**: an affected mother can pass the trait to any of her children, while an affected father usually passes it to none. (How severely each child is affected can vary, because mitochondria are shared out at random.)
- In plants, mitochondria and chloroplasts are usually passed on in the ovule, not the pollen, so their traits are also typically maternally inherited.

**Reciprocal crosses** reveal this. Cross a female with trait X and a male without it, then the reverse. Nuclear genes (not sex-linked) give the same result both ways. Organelle genes follow the mother.

## Worked example 1: incomplete dominance and chi-square

**Question.** In a hypothetical ornamental flower, true-breeding red plants are crossed with true-breeding white plants. All F₁ plants are pink. Two F₁ plants are crossed, giving 240 F₂ plants: 52 red, 131 pink and 57 white. Do the data support incomplete dominance?

1. **Model.** Red = CᴿCᴿ, white = CᵂCᵂ, pink = CᴿCᵂ. F₁ × F₁ = CᴿCᵂ × CᴿCᵂ, which predicts 1 red : 2 pink : 1 white.
2. **Null hypothesis.** "Flower colour is controlled by one gene with incompletely dominant alleles, so the F₂ occurs in a 1 : 2 : 1 ratio of red : pink : white. Differences are due to chance."
3. **Expected counts.** 240 × 1/4 = 60 red; 240 × 1/2 = 120 pink; 60 white.
4. **χ².**

| Phenotype | o | e | (o − e)² | (o − e)² ÷ e |
|---|---|---|---|---|
| red | 52 | 60 | 64 | 1.067 |
| pink | 131 | 120 | 121 | 1.008 |
| white | 57 | 60 | 9 | 0.150 |
| **Total** | 240 | 240 | | **χ² = 2.225** |

5. **Degrees of freedom** = 3 − 1 = 2. Critical value at p = 0.05 = 5.99.
6. **Conclusion.** 2.225 < 5.99, so **fail to reject** the null hypothesis. The data are consistent with incomplete dominance.

**Interpretation.** The pink F₁ shows that neither allele masks the other. If red were completely dominant, the F₁ would be red and the F₂ would show 3 red : 1 white. Notice that the pink heterozygote is a blend: this is incomplete dominance, not codominance. A codominant heterozygote would show red **and** white, for example in separate patches.

## Worked example 2: mapping linked genes

**Question.** In a hypothetical beetle, black body (B) is dominant to brown (b), and long wings (L) are dominant to short wings (l). A BbLl beetle, whose parents were BBLL and bbll, is test crossed with a bbll beetle. The 1000 offspring are: 412 black long, 418 brown short, 87 black short and 83 brown long.
(a) Show that the genes are linked. (b) Calculate the map distance. (c) A third gene, E, is 9 map units from B and 8 map units from L. Give the gene order.

**(a) Linked?** Independent assortment would give 250 in each class. The observed classes are two large (412, 418) and two small (87, 83). A chi-square test against 1 : 1 : 1 : 1 gives χ² = (162² + 168² + 163² + 167²) ÷ 250 = 108 926 ÷ 250 ≈ 436, far above 7.81 (3 df). Reject independent assortment. The large classes match the parents' combinations (B with L, b with l), so these alleles sit together on the same chromosomes.

**(b) Map distance.**

1. Parental types: black long and brown short (412 + 418 = 830).
2. Recombinants: black short and brown long (87 + 83 = **170**).
3. Recombination frequency = 170 ÷ 1000 × 100 = **17%**.
4. Map distance = **17 map units**.

**(c) Gene order.** B–E = 9 and E–L = 8. Since 9 + 8 = 17 = B–L, E must lie **between** B and L: the order is **B–E–L** (Figure 1). In general, the gene in the middle is the one whose two distances add up to the largest distance.

**Check.** The recombinant classes are similar in size (87 and 83), as expected, because each crossover makes one of each.

## Worked example 3: an X-linked cross

**Question.** A woman with normal colour vision, whose father was colour-blind, has children with a man with normal vision.
(a) Give both genotypes. (b) Find the probability that a son is colour-blind, and that a child is a colour-blind son. (c) Could a daughter be colour-blind?

1. **Her genotype.** Her father gave her his only X, which carried Xᵇ. She has normal vision, so her other X is Xᴮ. She is **XᴮXᵇ** (a carrier). The man is **XᴮY**.
2. **Sons** get Y from the father and an X from the mother: Xᴮ or Xᵇ with equal chance. P(colour-blind, given a son) = **1/2**.
3. **Any child.** P(son) = 1/2, so P(colour-blind son) = 1/2 × 1/2 = **1/4** (Figure 2).
4. **Daughters** always receive the father's Xᴮ, so **none** can be colour-blind. Each has a 1/2 chance of being a carrier.

**Interpretation.** The trait passed from the woman's father, through her, to her sons: it "skipped" a generation through a carrier daughter. This is the typical pattern of X-linked recessive inheritance, and it explains why more males than females are affected.

## Common misconceptions

- **"Incomplete dominance and codominance are the same."** Incomplete: a blend. Codominance: both phenotypes appear fully.
- **"Linked genes never recombine."** Crossing over separates them at a rate that depends on their distance apart.
- **"Recombination frequency is recombinants ÷ parental types."** Divide by the **total** number of offspring.
- **"Sons inherit X-linked traits from their fathers."** Sons get their X from their mothers; fathers give sons a Y.
- **"Females are always XX."** In birds, females are ZW; in bees, sex depends on whether the egg was fertilized.
- **"Pleiotropy is the same as linkage."** Pleiotropy is one gene with several effects; linkage is two genes close together. Only linked genes can be separated by crossing over.
- **"Mitochondrial traits come from both parents."** They are typically inherited from the mother only.
- **"A significant chi-square tells you why the ratio is different."** It only shows that the difference is unlikely to be chance. You must then propose a biological explanation.

## Where this leads

Topic 5.5, [Environmental Effects on Phenotype](/advanced-course-resources/biology/5-5-environmental-effects-on-phenotype-study-guide/), shows that the same genotype can produce different phenotypes in different environments. Test yourself first with the [practice questions](/advanced-course-resources/biology/5-4-non-mendelian-genetics-practice/), then use the [revision notes](/advanced-course-resources/biology/5-4-non-mendelian-genetics-revision-notes/) and the [checklist](/advanced-course-resources/biology/5-4-non-mendelian-genetics-checklist/). The previous topic, [Mendelian Genetics](/advanced-course-resources/biology/5-3-mendelian-genetics-study-guide/), has the basic cross and chi-square methods.
