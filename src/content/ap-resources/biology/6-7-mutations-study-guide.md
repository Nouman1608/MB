---
resourceId: "mb-ap-bio-6.7-study-guide"
title: "Mutations: Study Guide (Biology 6.7)"
description: "Learn the types of mutation, how changes in DNA alter protein type or amount and phenotype, how chromosome errors arise, and how mutations and gene transfer feed natural selection."
course: "biology"
unit: 6
topics: ["6.7"]
resourceType: "study-guide"
prerequisites:
  - "Transcription and translation, and how to read a codon table"
  - "The stages of meiosis and what a homologous pair is"
prerequisiteResources: ["mb-ap-bio-6.6-study-guide"]
learningObjectives:
  - "Classify a change in DNA as a substitution, insertion or deletion, and as silent, missense, nonsense or frameshift"
  - "Predict how a mutation changes the amino acid sequence, the amount of protein, and the phenotype"
  - "Explain why the same mutation can be beneficial, harmful or neutral in different environments"
  - "Describe how replication errors, failed repair, radiation and reactive chemicals cause random mutations"
  - "Explain how nondisjunction and changes in chromosome structure alter phenotype"
  - "Explain how mutation, horizontal gene transfer and viral recombination add variation that natural selection can act on"
skills: ["1", "2", "5", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "four-function"
calculatorNote: "Only simple ratios and percentages are needed. A codon table is given wherever you need one"
related: ["mb-ap-bio-6.7-revision-notes", "mb-ap-bio-6.7-practice", "mb-ap-bio-6.7-checklist"]
next: "mb-ap-bio-6.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "A mutation is any change in the DNA sequence. It can change the type of protein made, the amount made, or nothing at all."
  - "Point (substitution) mutations can be silent, missense or nonsense. Insertions or deletions that are not a multiple of three shift the reading frame."
  - "Mutations are random. Whether one is beneficial, harmful or neutral depends on its effect and on the environment."
  - "Nondisjunction in meiosis gives gametes with an extra or missing chromosome; changes in chromosome number or structure often affect development."
  - "Mutation, plus gene transfer between prokaryotes and recombination between viruses, creates the variation that natural selection acts on."
faqs:
  - question: "Do I need to learn the names of specific genetic disorders?"
    answer: "No. Knowledge of specific mutations, and of specific disorders caused by changes in chromosome number, is outside the scope of the exam. You need the general principles and the ability to reason from a sequence or data you are given."
  - question: "Is a mutation always bad?"
    answer: "No. Many mutations have no effect on the protein or phenotype. Some help in one environment and harm in another. Only the effect in context decides."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## What a mutation is

A **mutation** is a change in the sequence of nucleotides in DNA. In Topics 6.3 and 6.4 you followed the flow of information: DNA is transcribed into mRNA, and mRNA is translated, three bases (one **codon**) at a time, into a chain of amino acids. A mutation changes the first step of that chain, so its effects can travel all the way to the phenotype:

**DNA sequence → mRNA codons → amino acid sequence → protein shape and function → phenotype**

A mutation can change:

- the **type** of protein made (a different amino acid sequence, a shorter chain, or a chain whose sequence is different after a certain point); or
- the **amount** of protein made (for example, a change in a promoter or other regulatory sequence from Topic 6.5 can make transcription faster or slower); or
- **nothing at all** that the cell or organism can detect.

So a mutation can be **beneficial**, **detrimental** (harmful) or **neutral**. That label comes from the effect, not from the change itself.

## Types of gene mutation

### Point mutations (substitutions)

In a **point mutation**, one nucleotide is replaced by a different one. The reading frame stays the same, so at most one codon changes. That one codon can have three kinds of outcome:

| Outcome | What happens to the codon | Effect on the protein |
|---|---|---|
| **Silent** | new codon codes for the **same** amino acid (the code has several codons for most amino acids) | no change in amino acid sequence |
| **Missense** | new codon codes for a **different** amino acid | one amino acid changed; effect ranges from none to severe |
| **Nonsense** | new codon is a **stop** codon | translation ends early, giving a shortened chain |

A missense change is often small if the new amino acid has similar properties (for example, one nonpolar R group for another) or sits on a part of the protein that does not affect its shape much. It can be large if it changes the charge or polarity of an amino acid in the active site or in a region that controls folding.

### Insertions and deletions: frameshifts

An **insertion** adds one or more nucleotides; a **deletion** removes them. Ribosomes read codons in fixed groups of three from the start codon, with no gaps. If the number of bases added or removed is **not a multiple of three**, every codon after the change is read in a new grouping. This is a **frameshift mutation**. Most amino acids after the change are different, and a stop codon usually appears early in the new frame, or the original stop is lost.

If exactly three bases (or six, or nine) are inserted or deleted, the frame is kept: the protein gains or loses whole amino acids but the rest of the sequence is normal.

<figure>
<svg viewBox="0 0 640 300" role="img" aria-labelledby="rf-title rf-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="rf-title">How a substitution and a deletion change the reading frame</title>
<desc id="rf-desc">Three rows of codons from the same coding strand. Row 1, original: ATG GCA TGG AAG GAA CGT, read as Met Ala Trp Lys Glu Arg. Row 2, substitution: the A in GAA becomes T, giving GTA, read as Met Ala Trp Lys Val Arg; only one codon and one amino acid change, marked with a box. Row 3, deletion: the first A of AAG is removed, so codons after it regroup as AGG AAC GTT, read as Met Ala Trp Arg Asn Val; every amino acid after the deletion is different, marked with a bracket labelled frame shifted.</desc>
<rect x="0" y="0" width="640" height="300" fill="#ffffff"/>
<text x="20" y="40" font-size="14" font-weight="700" fill="#1d2b44">1. Original</text>
<text x="160" y="40" font-size="17" font-family="ui-monospace, Menlo, monospace" fill="#1d2b44">ATG GCA TGG AAG GAA CGT</text>
<text x="175" y="64" text-anchor="middle" font-size="14" fill="#1d2b44">Met</text>
<text x="216" y="64" text-anchor="middle" font-size="14" fill="#1d2b44">Ala</text>
<text x="257" y="64" text-anchor="middle" font-size="14" fill="#1d2b44">Trp</text>
<text x="298" y="64" text-anchor="middle" font-size="14" fill="#1d2b44">Lys</text>
<text x="338" y="64" text-anchor="middle" font-size="14" fill="#1d2b44">Glu</text>
<text x="379" y="64" text-anchor="middle" font-size="14" fill="#1d2b44">Arg</text>
<text x="20" y="130" font-size="14" font-weight="700" fill="#1d2b44">2. Substitution</text>
<text x="160" y="130" font-size="17" font-family="ui-monospace, Menlo, monospace" fill="#1d2b44">ATG GCA TGG AAG GTA CGT</text>
<rect x="318" y="112" width="42" height="50" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="175" y="154" text-anchor="middle" font-size="14" fill="#1d2b44">Met</text>
<text x="216" y="154" text-anchor="middle" font-size="14" fill="#1d2b44">Ala</text>
<text x="257" y="154" text-anchor="middle" font-size="14" fill="#1d2b44">Trp</text>
<text x="298" y="154" text-anchor="middle" font-size="14" fill="#1d2b44">Lys</text>
<text x="338" y="154" text-anchor="middle" font-size="14" fill="#1d2b44">Val</text>
<text x="379" y="154" text-anchor="middle" font-size="14" fill="#1d2b44">Arg</text>
<text x="420" y="146" font-size="13" fill="#1d2b44">one codon changed</text>
<text x="20" y="220" font-size="14" font-weight="700" fill="#1d2b44">3. Deletion</text>
<text x="160" y="220" font-size="17" font-family="ui-monospace, Menlo, monospace" fill="#1d2b44">ATG GCA TGG AGG AAC GTT …</text>
<text x="175" y="244" text-anchor="middle" font-size="14" fill="#1d2b44">Met</text>
<text x="216" y="244" text-anchor="middle" font-size="14" fill="#1d2b44">Ala</text>
<text x="257" y="244" text-anchor="middle" font-size="14" fill="#1d2b44">Trp</text>
<text x="298" y="244" text-anchor="middle" font-size="14" fill="#1d2b44">Arg</text>
<text x="338" y="244" text-anchor="middle" font-size="14" fill="#1d2b44">Asn</text>
<text x="379" y="244" text-anchor="middle" font-size="14" fill="#1d2b44">Val</text>
<line x1="280" y1="258" x2="400" y2="258" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5"/>
<line x1="280" y1="252" x2="280" y2="264" stroke="#1d2b44" stroke-width="2"/>
<line x1="400" y1="252" x2="400" y2="264" stroke="#1d2b44" stroke-width="2"/>
<text x="340" y="282" text-anchor="middle" font-size="13" fill="#1d2b44">frame shifted: all later codons change</text>
</svg>
<figcaption>Figure 1. A substitution changes one codon (boxed). Deleting one base regroups every codon after it (dashed bracket). The sequence is the one used in Worked example 1.</figcaption>
</figure>

A common error is to say that a point mutation causes a frameshift. It cannot: replacing one base with another keeps the number of bases the same, so the grouping into codons is unchanged.

### Location matters

The same kind of change has different effects in different places:

- **Coding region, active site:** a missense change may stop the enzyme working.
- **Coding region, surface loop:** a missense change may do almost nothing.
- **Near the start of the gene:** a frameshift or nonsense change destroys almost the whole protein. Near the end, most of the chain is still made.
- **Promoter or other regulatory sequence:** the protein is normal, but the **amount** made changes.
- **Third base of a codon:** substitutions here are often silent, because many codons for the same amino acid differ only in this position.

## What causes mutations

Mutations happen **at random**. They are not produced because an organism "needs" a new trait. Their main causes:

- **Errors in DNA replication.** DNA polymerase occasionally pairs the wrong base. Proofreading and repair systems fix most errors, but not all.
- **Failures of DNA repair.** If a repair system itself is faulty, errors build up faster.
- **Radiation.** Ultraviolet light can join neighbouring bases on the same strand; higher-energy radiation such as X-rays can break DNA strands.
- **Reactive chemicals.** Some chemicals alter bases so that they pair wrongly at the next replication.

A mutagen raises the **rate** of mutation; it does not choose **which** genes change or whether the change helps.

## Is it beneficial, harmful or neutral? Context decides

Whether a mutation helps depends on the **environment**. A mutation that makes a bacterium resistant to an antibiotic helps when the drug is present, but may slow the bacterium's growth when the drug is absent. A mutation that darkens an animal's coat may help it hide on dark rock and make it more visible on pale sand. For example, dark coat colour in some populations of rock pocket mice that live on dark lava has been linked to mutations in a pigment gene. You will not be asked to recall this example; it shows the principle.

Because mutations create new alleles, they are the **original source of genetic variation**. Natural selection (Unit 7) then acts on the phenotypes these alleles produce.

## Errors in chromosomes

### Changes in chromosome number

During meiosis, homologous chromosomes (meiosis I) or sister chromatids (meiosis II) normally separate. If a pair fails to separate, this is **nondisjunction**. The resulting gametes have one chromosome too many (n + 1) or one too few (n − 1). When such a gamete fuses with a normal one, the zygote has an abnormal chromosome number: **aneuploidy**. Three copies of one chromosome is a **trisomy**; one copy is a **monosomy**. Errors can also produce a whole extra set of chromosomes (**polyploidy**, for example triploidy, three full sets), which is common in plants.

<figure>
<svg viewBox="0 0 640 330" role="img" aria-labelledby="nd-title nd-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="nd-title">Gametes produced after nondisjunction in meiosis I and in meiosis II</title>
<desc id="nd-desc">Two flow diagrams side by side for one pair of homologous chromosomes. Left, nondisjunction in meiosis I: the pair does not separate, so one daughter cell gets both homologues and the other gets none; after meiosis II the four gametes are n plus 1, n plus 1, n minus 1, n minus 1, so all four are abnormal. Right, nondisjunction in meiosis II: meiosis I is normal; in one of the two cells the sister chromatids fail to separate, so the four gametes are n plus 1, n minus 1, n, n, so two of four are abnormal.</desc>
<rect x="0" y="0" width="640" height="330" fill="#ffffff"/>
<text x="160" y="28" text-anchor="middle" font-size="15" font-weight="700" fill="#1d2b44">Error in meiosis I</text>
<text x="480" y="28" text-anchor="middle" font-size="15" font-weight="700" fill="#1d2b44">Error in meiosis II</text>
<rect x="110" y="45" width="100" height="40" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="160" y="70" text-anchor="middle" font-size="13" fill="#1d2b44">parent cell 2n</text>
<line x1="160" y1="85" x2="90" y2="125" stroke="#1d2b44" stroke-width="2"/>
<line x1="160" y1="85" x2="230" y2="125" stroke="#1d2b44" stroke-width="2"/>
<text x="160" y="118" text-anchor="middle" font-size="12" fill="#1d2b44">pair fails</text>
<rect x="45" y="125" width="90" height="36" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="90" y="148" text-anchor="middle" font-size="12" fill="#1d2b44">both homologues</text>
<rect x="185" y="125" width="90" height="36" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<text x="230" y="148" text-anchor="middle" font-size="12" fill="#1d2b44">neither</text>
<line x1="90" y1="161" x2="60" y2="215" stroke="#1d2b44" stroke-width="2"/>
<line x1="90" y1="161" x2="120" y2="215" stroke="#1d2b44" stroke-width="2"/>
<line x1="230" y1="161" x2="200" y2="215" stroke="#1d2b44" stroke-width="2"/>
<line x1="230" y1="161" x2="260" y2="215" stroke="#1d2b44" stroke-width="2"/>
<text x="60" y="235" text-anchor="middle" font-size="14" font-weight="700" fill="#1d2b44">n+1</text>
<text x="120" y="235" text-anchor="middle" font-size="14" font-weight="700" fill="#1d2b44">n+1</text>
<text x="200" y="235" text-anchor="middle" font-size="14" font-weight="700" fill="#1d2b44">n−1</text>
<text x="260" y="235" text-anchor="middle" font-size="14" font-weight="700" fill="#1d2b44">n−1</text>
<text x="160" y="275" text-anchor="middle" font-size="13" fill="#1d2b44">4 of 4 gametes abnormal</text>
<rect x="430" y="45" width="100" height="40" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="480" y="70" text-anchor="middle" font-size="13" fill="#1d2b44">parent cell 2n</text>
<line x1="480" y1="85" x2="410" y2="125" stroke="#1d2b44" stroke-width="2"/>
<line x1="480" y1="85" x2="550" y2="125" stroke="#1d2b44" stroke-width="2"/>
<text x="480" y="118" text-anchor="middle" font-size="12" fill="#1d2b44">normal</text>
<rect x="365" y="125" width="90" height="36" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="410" y="148" text-anchor="middle" font-size="12" fill="#1d2b44">chromatids fail</text>
<rect x="505" y="125" width="90" height="36" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="550" y="148" text-anchor="middle" font-size="12" fill="#1d2b44">normal split</text>
<line x1="410" y1="161" x2="380" y2="215" stroke="#1d2b44" stroke-width="2"/>
<line x1="410" y1="161" x2="440" y2="215" stroke="#1d2b44" stroke-width="2"/>
<line x1="550" y1="161" x2="520" y2="215" stroke="#1d2b44" stroke-width="2"/>
<line x1="550" y1="161" x2="580" y2="215" stroke="#1d2b44" stroke-width="2"/>
<text x="380" y="235" text-anchor="middle" font-size="14" font-weight="700" fill="#1d2b44">n+1</text>
<text x="440" y="235" text-anchor="middle" font-size="14" font-weight="700" fill="#1d2b44">n−1</text>
<text x="520" y="235" text-anchor="middle" font-size="14" fill="#1d2b44">n</text>
<text x="580" y="235" text-anchor="middle" font-size="14" fill="#1d2b44">n</text>
<text x="480" y="275" text-anchor="middle" font-size="13" fill="#1d2b44">2 of 4 gametes abnormal</text>
<text x="320" y="315" text-anchor="middle" font-size="12" fill="#1d2b44">Bold labels = abnormal gamete. Dashed box = cell missing this chromosome.</text>
</svg>
<figcaption>Figure 2. Following one homologous pair. An error in meiosis I affects all four gametes; an error in meiosis II affects two of the four.</figcaption>
</figure>

Changes in chromosome number change the **dose** of hundreds of genes at once, so they often cause disorders with limits on growth and development. You do not need to name specific disorders.

Errors in **mitosis** can also give cells with the wrong chromosome number. In animals these body cells are not passed to offspring, but they can change the phenotype of the tissue they form.

### Changes in chromosome structure

Breaks in chromosomes can be rejoined wrongly. A segment may be lost (**deletion**), copied (**duplication**), flipped (**inversion**) or moved to a different chromosome (**translocation**). Each can remove genes, add extra copies, or separate a gene from its regulatory sequences, and so can cause genetic disorders.

## Variation for natural selection to act on

A change in genotype matters to evolution only if it changes a phenotype that affects survival or reproduction. Then the environment can **select for** it. Besides mutation, several processes add variation:

| Process | What happens | Where |
|---|---|---|
| **Transformation** | a cell takes up DNA from its surroundings | prokaryotes |
| **Transduction** | a virus carries DNA from one host cell to another | prokaryotes |
| **Conjugation** | DNA passes directly from one cell to another through a connecting tube | prokaryotes |
| **Transposition** | a DNA segment (a transposon) moves within or between DNA molecules | prokaryotes and eukaryotes |
| **Viral recombination** | related viruses infecting the same host cell swap genetic material | viruses |

The first three are **horizontal gene transfer**: genes move between cells in the same generation, not from parent to offspring. This is one way antibiotic-resistance genes spread quickly between bacteria.

Sexual reproduction (meiosis with crossing over, independent assortment and fertilisation) also increases variation. These processes are **evolutionarily conserved**: they are shared by a wide range of organisms, which suggests common ancestry.

## Worked example 1: classifying mutations from a sequence

**Question.** The coding strand of a short gene (fictional) reads, from the start codon:

5′-ATG GCA TGG AAG GAA CGT TTC TAA-3′

This codes for Met–Ala–Trp–Lys–Glu–Arg–Phe, then stop. Using a codon table, classify each mutation and describe its effect on the polypeptide.

(a) GCA → GCG in codon 2. (b) TGG → TAG in codon 3. (c) GAA → GTA in codon 5. (d) The first A of codon 4 is deleted.

**Method.** The coding strand has the same sequence as the mRNA, with T in place of U. So read each codon as mRNA and look it up.

1. **(a)** GCG (mRNA GCG) codes for Ala, the same as GCA. **Silent** point mutation. The polypeptide is unchanged: 7 amino acids.
2. **(b)** TAG (mRNA UAG) is a **stop** codon. **Nonsense** point mutation. Translation ends after Met–Ala, giving 2 amino acids instead of 7. A chain this short cannot fold into the normal protein.
3. **(c)** GTA (mRNA GUA) codes for Val instead of Glu. **Missense** point mutation. Glu has a charged (acidic) R group; Val is nonpolar. If position 5 forms ionic bonds or sits in the active site, shape and function may change. If it is on an unimportant surface, the effect may be small.
4. **(d)** Removing one base regroups all later codons: ATG GCA TGG **AGG AAC GTT TCT AA…**. The polypeptide reads Met–Ala–Trp–**Arg–Asn–Val–Ser**… This is a **frameshift**. Every amino acid after position 3 is different, and the original stop codon is no longer in frame, so translation continues until a stop codon appears further along.

**Check.** Only (d) changed the number of bases. The point mutations (a)–(c) each changed at most one codon. If three bases (for example GGC) had been inserted after codon 4 instead, the protein would gain one amino acid (Gly) and the rest would be normal: Met–Ala–Trp–Lys–Gly–Glu–Arg–Phe.

## Worked example 2: are mutations random, and when do they help?

**Question.** In a fictional experiment, samples of a bacterium were exposed to different doses of ultraviolet (UV) light, then spread on plates containing an antibiotic. Only resistant mutants form colonies. Three plates were counted per dose; each count is per 10⁸ surviving cells.

| UV dose / J m⁻² | Plate 1 | Plate 2 | Plate 3 | Mean |
|---|---|---|---|---|
| 0 | 2 | 4 | 3 | 3.0 |
| 10 | 14 | 17 | 14 | 15.0 |
| 20 | 39 | 44 | 40 | 41.0 |
| 40 | 85 | 92 | 87 | 88.0 |

In a second test without antibiotic, the resistant strain doubled every 36 min and the original strain every 30 min.

(a) Describe the effect of UV dose. (b) Explain why resistant colonies appear at a dose of 0. (c) Use the growth data to explain why resistance is not simply "beneficial".

**(a)** Mean resistant colonies rise with dose: 3.0 at 0, 15.0 at 10, 41.0 at 20 and 88.0 at 40 J m⁻², about 29 times the unexposed value (88.0 ÷ 3.0 = 29.3). The replicate ranges do not overlap, so the trend is unlikely to be chance. UV increases the **rate** of mutation.

**(b)** The unexposed cells were never treated with UV and met the antibiotic only on the plate. Resistant mutants were already present, arising from replication errors. The antibiotic did not create the mutations; it **selected** the cells that already had them. Even at 40 J m⁻², the frequency is only 88 in 10⁸, or 8.8 × 10⁻⁷: UV made mutations more common but did not target the resistance gene.

**(c)** In 300 min, the original strain completes 300 ÷ 30 = 10 doublings (1 cell → 2¹⁰ = 1024 cells). The resistant strain completes 300 ÷ 36 ≈ 8.3 doublings (about 322 cells). Without the drug, the original strain outgrows the resistant one about 3.2 to 1. With the drug, only the resistant strain grows. The same mutation is **detrimental** in one environment and **beneficial** in the other.

**Limits.** The data support these conclusions for this fictional strain. They do not show which base changed; sequencing the gene (Topic 6.8) would.

## Common misconceptions

- **"Mutations denature proteins."** Denaturing is loss of shape caused by heat or pH (Topic 3.2). A mutation changes the amino acid sequence, which may produce a protein that folds differently.
- **"A point mutation causes a frameshift."** A substitution keeps the number of bases, so the frame is unchanged. Only insertions or deletions that are not multiples of three shift the frame.
- **"All mutations are harmful."** Many are neutral (silent changes, or changes that do not affect function). Some are beneficial in a given environment.
- **"Silent means the DNA did not change."** The DNA did change; only the amino acid sequence did not.
- **"Organisms mutate because they need to adapt."** Mutations arise at random. The environment selects among variants that already exist.
- **"A mutagen causes a particular mutation."** It raises the overall mutation rate; which bases change is random.
- **"Any insertion causes a frameshift."** Inserting three (or six…) bases keeps the frame.
- **"Nondisjunction only happens in meiosis I."** It can happen in either division, and the gamete outcomes differ (Figure 2).

## Where this leads

Topic 6.8 shows how biotechnology can detect mutations, by amplifying and sequencing DNA: read [Biotechnology](/advanced-course-resources/biology/6-8-biotechnology-study-guide/) next. Unit 7 builds on the variation described here. Now test yourself with the [practice questions](/advanced-course-resources/biology/6-7-mutations-practice/), then use the [revision notes](/advanced-course-resources/biology/6-7-mutations-revision-notes/) and the [checklist](/advanced-course-resources/biology/6-7-mutations-checklist/).
