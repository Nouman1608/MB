---
resourceId: "mb-ap-bio-6.5-study-guide"
title: "Regulation of Gene Expression: Study Guide (Biology 6.5)"
description: "How cells switch genes on and off: regulatory sequences and proteins, constitutive and inducible genes, the lac and trp operons, coordinate control in eukaryotes, and epigenetic marks on DNA and histones."
course: "biology"
unit: 6
topics: ["6.5"]
resourceType: "study-guide"
prerequisites:
  - "Transcription by RNA polymerase, starting at a promoter"
  - "Translation of mRNA into a polypeptide at a ribosome"
  - "DNA is wrapped around histone proteins in eukaryotic chromosomes"
prerequisiteResources: ["mb-ap-bio-6.4-study-guide"]
learningObjectives:
  - "Describe how regulatory proteins bind to regulatory DNA sequences to turn transcription up or down"
  - "Tell constitutive, inducible and repressible genes apart, with an example of each"
  - "Explain how the position of the operator in the lac and trp operons lets one repressor control several genes at once"
  - "Explain how eukaryotic genes on different chromosomes can be switched on together by the same transcription factor"
  - "Describe how reversible DNA methylation and histone acetylation change gene expression without changing the DNA sequence"
  - "Make a claim about how a gene is regulated from mutant or drug-treatment data, and back it with evidence and reasoning"
skills: ["1", "2", "5", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Only ratios and percentages are needed. Fold change = expression in the test condition ÷ expression in the reference condition"
related: ["mb-ap-bio-6.5-revision-notes", "mb-ap-bio-6.5-practice", "mb-ap-bio-6.5-checklist"]
next: "mb-ap-bio-6.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Every cell carries many genes it is not using. Regulatory proteins bind to regulatory DNA sequences and decide which genes are transcribed, and how much."
  - "Constitutive genes are expressed all the time. Inducible genes are off until a signal switches them on; repressible genes are on until a signal switches them off."
  - "In bacteria, genes for one job often sit together in an operon under one promoter and one operator, so a single repressor controls them all. The lac operon is inducible; the trp operon is repressible."
  - "In eukaryotes, genes scattered across chromosomes can be switched on together because they share the same control sequence for one transcription factor."
  - "Epigenetic changes, such as DNA methylation (usually silencing) and histone acetylation (usually activating), alter expression without changing the DNA sequence, and they can be reversed."
  - "A cell's phenotype depends on which genes it expresses and at what levels."
faqs:
  - question: "Is epigenetics the same as a mutation?"
    answer: "No. A mutation changes the sequence of bases. An epigenetic change adds or removes chemical groups on the DNA or on histones; the base sequence stays the same, and the change can be reversed."
  - question: "Do eukaryotes have operons?"
    answer: "Almost never in the bacterial sense. Eukaryotic genes usually have their own promoters. They are coordinated instead by sharing control sequences that the same transcription factor recognises."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Why cells regulate their genes

A bacterium carries genes for digesting many different sugars, but it rarely meets all of those sugars at once. Making every enzyme all the time would waste amino acids and ATP. A human liver cell and a skin cell carry the same genome, yet they make very different proteins. In both cases the cell solves the problem the same way: it controls **which genes are expressed, and how strongly**.

Gene expression can be controlled at several steps, from transcription to the breakdown of the protein. This topic focuses on the step used most often: **whether transcription starts**. Two kinds of molecule are involved:

- **Regulatory sequences**: stretches of DNA, near or within a gene, that do not code for protein. Promoters and operators are examples.
- **Regulatory proteins**: proteins that bind to those sequences. A **repressor** blocks transcription when it binds; an **activator** makes transcription more likely when it binds.

Whether a gene is on depends on the *interaction* between the two. A regulatory protein can only act where its matching DNA sequence is, and the sequence does nothing without the protein.

## Three patterns of expression

| Pattern | What it means | Example |
|---|---|---|
| **Constitutive** | Transcribed all the time at a fairly steady level | genes for ribosomal RNA, for glycolysis enzymes, and the *lacI* gene that makes the lac repressor |
| **Inducible** | Normally off; switched on when a signal (an inducer) is present | the lac operon, switched on when lactose is available |
| **Repressible** | Normally on; switched off when a signal (a corepressor) is present | the trp operon, switched off when tryptophan is plentiful |

Constitutive genes are often called "housekeeping" genes: every cell needs their products every day. Inducible and repressible genes let a cell respond to what is around it.

## Operons: one switch for several genes

In bacteria, the genes for one pathway are often next to each other and share one promoter. This unit is an **operon**. It contains:

1. a **promoter**, where RNA polymerase binds;
2. an **operator**, a short sequence that a repressor can bind; it lies between the promoter and the first gene, or overlaps the promoter;
3. the **structural genes**, transcribed together into **one mRNA** that codes for several proteins.

The repressor itself is made by a separate **regulatory gene** elsewhere, which has its own promoter.

**Why the location matters.** Because the operator sits in the path of RNA polymerase, a repressor bound there physically stops the polymerase from transcribing. And because all the structural genes lie downstream of that single operator, one repressor switches the whole pathway on or off together. This is **coordinate regulation**: genes whose products work together are expressed together.

### The lac operon: an inducible system

*E. coli* can use the sugar lactose. The lac operon has three structural genes: *lacZ* (β-galactosidase, which splits lactose into glucose and galactose), *lacY* (a permease that carries lactose into the cell) and *lacA* (a transacetylase).

<figure>
<svg viewBox="0 0 640 410" role="img" aria-labelledby="lac-title lac-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="lac-title">The lac operon with lactose absent and with lactose present</title>
<desc id="lac-desc">Two panels showing the same stretch of bacterial DNA. Left to right: the lacI gene, a gap, the promoter P, the operator O, then the genes lacZ, lacY and lacA. Top panel, lactose absent: a repressor protein, drawn as a rounded box, sits on the operator. RNA polymerase, drawn as an oval, sits on the promoter but is blocked, marked with a cross. No mRNA is made. Bottom panel, lactose present: allolactose, drawn as a small triangle, is bound to the repressor, which has left the operator. RNA polymerase moves along the genes and one wavy mRNA strand is made covering lacZ, lacY and lacA.</desc>
<rect x="0" y="0" width="640" height="410" fill="#ffffff"/>
<text x="20" y="28" font-size="15" font-weight="700" fill="#1d2b44">A. Lactose absent: operon OFF</text>
<line x1="30" y1="110" x2="600" y2="110" stroke="#1d2b44" stroke-width="3"/>
<rect x="40" y="98" width="70" height="24" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="75" y="115" text-anchor="middle" font-size="13" font-style="italic" fill="#1d2b44">lacI</text>
<rect x="150" y="98" width="60" height="24" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="180" y="115" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2b44">P</text>
<rect x="210" y="98" width="45" height="24" fill="#ffffff" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/>
<text x="232" y="115" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2b44">O</text>
<rect x="255" y="98" width="120" height="24" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="315" y="115" text-anchor="middle" font-size="13" font-style="italic" fill="#1d2b44">lacZ</text>
<rect x="375" y="98" width="100" height="24" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="425" y="115" text-anchor="middle" font-size="13" font-style="italic" fill="#1d2b44">lacY</text>
<rect x="475" y="98" width="100" height="24" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="525" y="115" text-anchor="middle" font-size="13" font-style="italic" fill="#1d2b44">lacA</text>
<ellipse cx="172" cy="76" rx="30" ry="18" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="172" y="81" text-anchor="middle" font-size="12" fill="#1d2b44">RNA pol</text>
<line x1="196" y1="54" x2="210" y2="68" stroke="#1d2b44" stroke-width="3"/>
<line x1="210" y1="54" x2="196" y2="68" stroke="#1d2b44" stroke-width="3"/>
<rect x="205" y="58" width="56" height="36" rx="10" fill="#1d2b44"/>
<text x="233" y="81" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">Rep</text>
<text x="300" y="62" font-size="13" fill="#1d2b44">Active repressor bound to operator</text>
<text x="300" y="80" font-size="13" fill="#1d2b44">blocks RNA polymerase (✕)</text>
<text x="75" y="145" text-anchor="middle" font-size="12" fill="#1d2b44">regulatory gene,</text>
<text x="75" y="160" text-anchor="middle" font-size="12" fill="#1d2b44">always expressed</text>
<text x="415" y="152" text-anchor="middle" font-size="13" fill="#1d2b44">No mRNA for lacZ, lacY, lacA</text>
<line x1="20" y1="190" x2="620" y2="190" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 5"/>
<text x="20" y="220" font-size="15" font-weight="700" fill="#1d2b44">B. Lactose present: operon ON</text>
<line x1="30" y1="310" x2="600" y2="310" stroke="#1d2b44" stroke-width="3"/>
<rect x="40" y="298" width="70" height="24" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="75" y="315" text-anchor="middle" font-size="13" font-style="italic" fill="#1d2b44">lacI</text>
<rect x="150" y="298" width="60" height="24" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="180" y="315" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2b44">P</text>
<rect x="210" y="298" width="45" height="24" fill="#ffffff" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/>
<text x="232" y="315" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2b44">O</text>
<rect x="255" y="298" width="120" height="24" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="315" y="315" text-anchor="middle" font-size="13" font-style="italic" fill="#1d2b44">lacZ</text>
<rect x="375" y="298" width="100" height="24" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="425" y="315" text-anchor="middle" font-size="13" font-style="italic" fill="#1d2b44">lacY</text>
<rect x="475" y="298" width="100" height="24" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="525" y="315" text-anchor="middle" font-size="13" font-style="italic" fill="#1d2b44">lacA</text>
<rect x="160" y="236" width="56" height="36" rx="10" fill="#1d2b44"/>
<text x="188" y="259" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">Rep</text>
<polygon points="216,262 232,262 224,248" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="245" y="250" font-size="13" fill="#1d2b44">Allolactose (△) binds the repressor,</text>
<text x="245" y="267" font-size="13" fill="#1d2b44">changes its shape; it leaves the operator</text>
<ellipse cx="330" cy="288" rx="30" ry="16" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="330" y="293" text-anchor="middle" font-size="12" fill="#1d2b44">RNA pol</text>
<line x1="362" y1="288" x2="400" y2="288" stroke="#1d2b44" stroke-width="2"/>
<polygon points="400,283 410,288 400,293" fill="#1d2b44"/>
<path d="M255 345 q10 -8 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="415" y="375" text-anchor="middle" font-size="13" fill="#1d2b44">One mRNA (wavy line) codes for all three enzymes</text>
<text x="75" y="345" text-anchor="middle" font-size="12" fill="#1d2b44">still makes</text>
<text x="75" y="360" text-anchor="middle" font-size="12" fill="#1d2b44">repressor</text>
</svg>
<figcaption>Figure 1. The lac operon. P = promoter, O = operator (dashed outline), Rep = repressor. The repressor gene, <i>lacI</i>, is constitutive. Not to scale.</figcaption>
</figure>

**Lactose absent (Figure 1A).** The *lacI* gene makes active repressor all the time. The repressor binds the operator, so RNA polymerase cannot transcribe *lacZ*, *lacY* or *lacA*. The cell does not waste resources on enzymes it cannot use.

**Lactose present (Figure 1B).** Some lactose is converted to **allolactose**, which acts as the **inducer**. Allolactose binds the repressor and changes its shape, so the repressor can no longer hold on to the operator. RNA polymerase transcribes the three genes as one mRNA, and the enzymes are made. When the lactose has been used up, allolactose leaves the repressor, the repressor binds the operator again, and the operon switches off.

**Positive control by glucose level.** Glucose is the sugar *E. coli* prefers. When glucose is scarce, the level of a small signal molecule, **cAMP**, rises. cAMP binds an **activator protein called CAP**, and the CAP–cAMP complex binds DNA next to the lac promoter, helping RNA polymerase attach. So the operon is transcribed strongly only when **lactose is present and glucose is scarce**. The repressor is a negative control; CAP is a positive one. Both are proteins acting on regulatory sequences.

### The trp operon: a repressible system

The trp operon carries five genes for enzymes that make the amino acid tryptophan. Here the logic is reversed.

- **Little tryptophan.** The repressor is made in an **inactive** form that cannot bind the operator. The operon is transcribed, and the cell makes tryptophan.
- **Plenty of tryptophan.** Tryptophan binds the repressor as a **corepressor**. This changes the repressor's shape so that it *can* bind the operator. Transcription stops, and the cell stops making something it already has.

| | lac operon | trp operon |
|---|---|---|
| Type | inducible | repressible |
| Pathway | breaks down a nutrient (catabolic) | builds a product (anabolic) |
| Default state | off | on |
| Signal molecule | allolactose (inducer) | tryptophan (corepressor) |
| Effect of signal on repressor | inactivates it | activates it |

A useful rule: pathways that break down a food are usually **inducible** (make the enzymes only when the food arrives); pathways that build a product are usually **repressible** (stop when there is enough product).

## Coordinate regulation in eukaryotes

Eukaryotic genes are rarely grouped in operons. Each usually has its own promoter, and genes that work together can be on different chromosomes. They are still switched on together, by a different method: each gene carries a copy of the **same control sequence** in its regulatory DNA. One **transcription factor** that recognises that sequence binds near all of them at once and activates them together.

A real example is the response to heat. Genes for heat-shock proteins, which help other proteins keep their shape, lie on different chromosomes but share a common control element. When a cell is heated, one transcription factor becomes active, binds that element at every gene, and all of them are transcribed together. The same principle lets a single steroid hormone switch on a whole set of genes in its target cells.

Compare the two strategies:

- **Prokaryotes:** genes are physically together, so one operator controls them.
- **Eukaryotes:** genes can be scattered, so the *same sequence* repeated near each gene lets one regulatory protein control them.

In both cases, the position of the regulatory sequence relative to the genes it controls is what makes the system work.

## Epigenetic regulation

In eukaryotes, DNA is wrapped around **histone** proteins. How tightly it is packed affects whether RNA polymerase and transcription factors can reach a gene. Cells change packing and access by adding or removing chemical groups. Because these changes do not alter the base sequence, they are called **epigenetic**.

- **DNA methylation.** Methyl groups (–CH₃) are added to some cytosine bases, often in promoter regions. Heavy methylation usually **silences** a gene: it blocks some proteins from binding and attracts proteins that pack the DNA tightly.
- **Histone acetylation.** Acetyl groups are added to the tails of histone proteins. This reduces the attraction between histones and DNA, so the DNA is packed more **loosely** and the gene is **more likely to be transcribed**. Removing the acetyl groups (deacetylation) packs the DNA tightly again.

Key features of epigenetic changes:

1. They are **reversible**. Enzymes add the groups and other enzymes remove them.
2. They can be **copied when a cell divides**, so a liver cell's daughters stay liver cells.
3. They respond to the environment, for example to diet, temperature or chemicals.

## From expression to phenotype

The phenotype of a cell, or of a whole organism, is set by **which genes are expressed and at what levels**.

- **Cell differentiation.** A muscle cell and a nerve cell look and work differently because each expresses a set of **tissue-specific** genes, such as genes for contractile proteins in muscle.
- **Sequential gene expression in development.** In an embryo, a signal can induce a transcription factor. That factor switches on the next set of genes, which may include another transcription factor, and so on. Like a row of falling dominoes, each step depends on the one before. In muscle development, for example, a transcription factor called MyoD switches on a series of muscle-specific genes.
- **Function and amount of the products.** A protein that does not work, or one made in too small an amount, can change the phenotype. Half the normal amount of an enzyme is sometimes enough; sometimes it is not.

## Worked example 1: making a claim from mutant data

**Question.** A fictional soil bacterium can use the sugar xylose. Its genes for xylose breakdown form an operon. Researchers measure the activity of one enzyme from the operon in four strains grown without and with xylose (units per mg of protein; data fictional).

| Strain | Without xylose | With xylose |
|---|---|---|
| Wild type | 4 | 320 |
| Strain R: repressor gene mutated, no working repressor | 310 | 316 |
| Strain O: operator sequence changed | 305 | 322 |
| Strain P: promoter sequence changed | 1 | 2 |

(a) Is the operon constitutive, inducible or repressible in the wild type? Support your claim with numbers.
(b) Explain the results for strains R and O.
(c) Explain the result for strain P.

**(a) Claim and evidence.**

1. Fold induction = activity with xylose ÷ activity without = 320 ÷ 4 = **80**.
2. The operon is almost off without xylose and strongly on with it. **Claim: it is inducible**, with xylose (or a product of it) acting as the inducer.

**(b) Strains R and O.**

1. Strain R: 310 without xylose is already 96.9% of the wild-type induced level (310 ÷ 320 × 100), and xylose adds almost nothing (316 ÷ 310 = 1.02-fold).
2. Without a working repressor, nothing blocks the operator, so the operon is on all the time: **constitutive**.
3. Strain O gives the same pattern (322 ÷ 305 = 1.06-fold). A working repressor is still made, but the changed operator sequence means it cannot bind. The repressor and the operator must match for regulation to work.

**(c) Strain P.** Activity stays near zero (2 with xylose, about 0.6% of the wild-type induced level: 2 ÷ 320 × 100 = 0.625). If RNA polymerase cannot bind the promoter, the genes are not transcribed whether or not the repressor is bound.

**Reasoning check.** The data fit a negative, inducible control: repressor bound to the operator when xylose is absent; inducer removes the repressor. The results for R and O together show that the repressor acts **at the operator**, which lies between the promoter and the genes.

## Worked example 2: evidence for epigenetic silencing

**Question.** Gene G is silent in a fictional mouse cell line. Researchers treat the cells for 48 hours with drug M, which blocks the enzyme that adds methyl groups to DNA, and with drug H, which blocks the enzyme that removes acetyl groups from histones. Neither drug changes the DNA base sequence. They measure methylation of the gene's promoter and the amount of G mRNA (relative to untreated cells).

| Treatment | Promoter methylation / % | G mRNA (relative) |
|---|---|---|
| None (control) | 92 | 1.0 |
| Drug M | 35 | 14 |
| Drug H | 90 | 3.0 |
| Drugs M + H | 33 | 41 |
| Drug M, then 10 days without drug | 80 | 2.5 |

Make a claim about how gene G is silenced and support it.

1. **Effect of M.** Methylation falls from 92% to 35%, a relative fall of (92 − 35) ÷ 92 × 100 = **62%**. G mRNA rises **14-fold**. Lower methylation goes with higher expression.
2. **Effect of H.** Methylation barely changes (90%), but mRNA rises **3-fold**. Keeping histones acetylated loosens the DNA a little, even while methylation stays high.
3. **Both drugs.** mRNA rises **41-fold**, more than either drug alone (2.93 times M alone). Fold changes multiply, so if the two marks act independently you expect about 14 × 3 = 42-fold. The measured 41 is close to that: each mark adds its own layer of silencing, and removing both releases the gene most.
4. **Reversibility.** Ten days after M is removed, methylation is back to 80% and mRNA has fallen from 14 to 2.5, an **82% drop**. The silencing returns.

**Claim.** Gene G is silenced epigenetically, mainly by methylation of its promoter, helped by tightly packed (deacetylated) histones.

**Reasoning.** Neither drug changes the DNA sequence, yet expression changed, so the control must be through chemical marks. The return of methylation after the drug was removed shows the marks are reversible and are actively re-established by the cell. A mutation would not reverse in ten days.

**Limits.** These are one cell line and one time point. The drugs act on every gene in the cell, so some of the effect on G could be indirect, through other genes that were also switched on.

## Common misconceptions

- **"Cells lose the genes they do not use."** Almost every cell keeps the full genome. Unused genes are switched off, not deleted.
- **"The repressor is part of the operon."** The repressor is made by a separate regulatory gene with its own promoter. The operon contains the operator, the DNA site the repressor binds.
- **"Lactose binds the operator to switch on the lac operon."** The inducer (allolactose) binds the **repressor**, not the DNA, and removes it from the operator.
- **"Repressors only exist in inducible operons."** Both operons use a repressor. The difference is whether the signal molecule inactivates it (lac) or activates it (trp).
- **"Epigenetic changes are mutations."** Methylation and acetylation leave the base sequence unchanged and can be reversed.
- **"Histone acetylation and DNA methylation have the same effect."** Acetylation usually opens chromatin and increases transcription; methylation of DNA usually silences it.
- **"Eukaryotic genes that work together must be next to each other."** They can be on different chromosomes, linked by a shared control sequence.
- **"A gene is either fully on or fully off."** The level of expression matters too, and it can change the phenotype.

## Where this leads

Topic 6.6 looks closely at how transcription factors bind promoters and enhancers in eukaryotes, how negative regulators block transcription, and how small RNA molecules fine-tune expression, all of which explains how cells with the same genome become specialised: see [Gene Expression and Cell Specialization](/advanced-course-resources/biology/6-6-gene-expression-cell-specialization-study-guide/). Before moving on, test yourself with the [practice questions](/advanced-course-resources/biology/6-5-regulation-gene-expression-practice/), then use the [revision notes](/advanced-course-resources/biology/6-5-regulation-gene-expression-revision-notes/) and the [checklist](/advanced-course-resources/biology/6-5-regulation-gene-expression-checklist/). To review how the gene is read in the first place, go back to [Translation](/advanced-course-resources/biology/6-4-translation-study-guide/).
