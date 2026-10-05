---
resourceId: "mb-ap-bio-6.8-study-guide"
title: "Biotechnology: Study Guide (Biology 6.8)"
description: "Learn what gel electrophoresis, PCR, bacterial transformation and DNA sequencing do, how to read a gel and count PCR copies, and how DNA comparisons identify individuals and species."
course: "biology"
unit: 6
topics: ["6.8"]
resourceType: "study-guide"
prerequisites:
  - "DNA structure: antiparallel strands, complementary base pairing and the phosphate backbone"
  - "DNA replication: DNA polymerase, primers and the 5′→3′ direction"
prerequisiteResources: ["mb-ap-bio-6.7-study-guide"]
learningObjectives:
  - "Explain how gel electrophoresis separates DNA fragments and estimate fragment sizes from a ladder"
  - "Describe the three steps of a PCR cycle and calculate how copy number grows with cycles"
  - "Explain how bacterial transformation and a selectable marker introduce and copy a gene"
  - "Explain how DNA sequencing and DNA fingerprints are used to compare samples"
  - "Connect experimental results from these techniques to identification, kinship and evolutionary relationships"
skills: ["1", "2", "3", "4", "5", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "You need powers of 2 and simple ratios. Fragment sizes read from a gel are estimates; give them to 2 significant figures"
related: ["mb-ap-bio-6.8-revision-notes", "mb-ap-bio-6.8-practice", "mb-ap-bio-6.8-checklist"]
next: "mb-ap-bio-6.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Gel electrophoresis: DNA is negatively charged, so it moves toward the positive electrode; shorter fragments move farther."
  - "PCR copies one chosen region: denature (separate strands), anneal (primers bind), extend (polymerase builds). Each cycle can double the copies: N = N₀ × 2ⁿ."
  - "Bacterial transformation puts foreign DNA, usually a plasmid, into bacteria; a resistance gene on the plasmid lets you select the cells that took it up."
  - "DNA sequencing gives the order of nucleotides. Comparing sequences or band patterns (a DNA fingerprint) identifies individuals and species and shows relationships."
faqs:
  - question: "How much technical detail do I need?"
    answer: "Know what each technique does, the purpose of each step and how to interpret results. Detailed protocols (exact recipes, timings, machine settings) are outside the scope of the exam."
  - question: "Does reading about these techniques count as doing the lab?"
    answer: "No. Reading and simulations do not meet the course's laboratory requirement. Gel electrophoresis and bacterial transformation are lab investigations you should carry out with your teacher."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Tools for reading and changing DNA

Topic 6.7 showed that a single changed base can alter a protein. To find such a change, you need to work with DNA directly. **Biotechnology** gives you tools to do four things:

| Technique | What it does |
|---|---|
| **Gel electrophoresis** | separates DNA fragments by size |
| **Polymerase chain reaction (PCR)** | makes millions of copies of one chosen region of DNA |
| **Bacterial transformation** | puts foreign DNA into bacterial cells |
| **DNA sequencing** | determines the order of nucleotides in a DNA molecule |

Each one uses ideas you already know: DNA's charge, complementary base pairing, DNA polymerase and the universal genetic code. You need to know what each technique does and how to interpret its results, not the detailed laboratory protocol.

## Gel electrophoresis: sorting fragments by size

A gel is a slab of a jelly-like material (usually **agarose**) with a mesh of tiny pores. DNA samples are loaded into **wells** at one end, and an electric current is passed through the gel.

- DNA has a **negative charge**, because each nucleotide carries a phosphate group in the backbone. So DNA moves away from the negative electrode, **toward the positive electrode**.
- The gel acts like a sieve. **Short fragments** slip through the pores easily and travel **farther**. Long fragments are slowed down more.
- Every DNA fragment has about the same charge per unit length, so separation depends mainly on **size**.
- A **ladder** (a mixture of fragments of known sizes) is run in one lane. Comparing a band's distance with the ladder gives an estimate of its size, measured in **base pairs (bp)**.
- After the run, the DNA is stained so that the bands can be seen. Each band is many copies of fragments of the same length.

Fragment size and distance are not in direct proportion. Distance falls roughly in a straight line as the **logarithm** of size rises, so the ladder bands get closer together toward the top of the gel. When estimating, always compare a band with the ladder bands just above and just below it.

**Background: cutting DNA first.** Before running a gel, DNA is often cut with **restriction enzymes**, which cut at specific short base sequences. If two people's DNA differs at a cut site, the enzyme makes different fragments, so the band pattern differs. You will not be asked about specific enzymes.

<figure>
<svg viewBox="0 0 640 390" role="img" aria-labelledby="gel-title gel-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="gel-title">Model gel used to identify the species of a fish fillet</title>
<desc id="gel-desc">A gel with five lanes. The negative electrode is at the top near the wells and the positive electrode is at the bottom. Labels on the left give each ladder band's size and its distance from the wells. Lane 1, ladder: bands at 17 mm (5000 base pairs), 24 mm (3000), 30 mm (2000), 40 mm (1000) and 50 mm (500). Lane 2, fillet: bands at 27 mm and 44 mm. Lane 3, species X reference: bands at 22 mm and 47 mm. Lane 4, species Y reference: bands at 27 mm and 44 mm, the same as the fillet. Lane 5, no-DNA control: no bands.</desc>
<rect x="0" y="0" width="640" height="390" fill="#ffffff"/>
<rect x="80" y="30" width="500" height="290" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="600" y="48" font-size="20" font-weight="700" fill="#1d2b44">−</text>
<text x="600" y="318" font-size="20" font-weight="700" fill="#1d2b44">+</text>
<text x="330" y="22" text-anchor="middle" font-size="12" fill="#1d2b44">wells (negative electrode end)</text>
<text x="330" y="338" text-anchor="middle" font-size="12" fill="#1d2b44">DNA moves this way ↓ toward the positive electrode</text>
<rect x="95" y="34" width="50" height="6" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="195" y="34" width="50" height="6" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="295" y="34" width="50" height="6" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="395" y="34" width="50" height="6" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="495" y="34" width="50" height="6" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="95" y="122" width="50" height="6" fill="#1d2b44"/>
<rect x="95" y="157" width="50" height="6" fill="#1d2b44"/>
<rect x="95" y="187" width="50" height="6" fill="#1d2b44"/>
<rect x="95" y="237" width="50" height="6" fill="#1d2b44"/>
<rect x="95" y="287" width="50" height="6" fill="#1d2b44"/>
<text x="74" y="129" text-anchor="end" font-size="11" fill="#1d2b44">5000 bp · 17 mm</text>
<text x="74" y="164" text-anchor="end" font-size="11" fill="#1d2b44">3000 bp · 24 mm</text>
<text x="74" y="194" text-anchor="end" font-size="11" fill="#1d2b44">2000 bp · 30 mm</text>
<text x="74" y="244" text-anchor="end" font-size="11" fill="#1d2b44">1000 bp · 40 mm</text>
<text x="74" y="294" text-anchor="end" font-size="11" fill="#1d2b44">500 bp · 50 mm</text>
<rect x="195" y="172" width="50" height="6" fill="#1d2b44"/>
<rect x="195" y="257" width="50" height="6" fill="#1d2b44"/>
<rect x="295" y="147" width="50" height="6" fill="#1d2b44"/>
<rect x="295" y="272" width="50" height="6" fill="#1d2b44"/>
<rect x="395" y="172" width="50" height="6" fill="#1d2b44"/>
<rect x="395" y="257" width="50" height="6" fill="#1d2b44"/>
<text x="120" y="360" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">1 Ladder</text>
<text x="220" y="360" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">2 Fillet</text>
<text x="320" y="360" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">3 Species X</text>
<text x="420" y="360" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">4 Species Y</text>
<text x="520" y="360" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">5 No DNA</text>
<text x="220" y="380" text-anchor="middle" font-size="11" fill="#1d2b44">27, 44 mm</text>
<text x="320" y="380" text-anchor="middle" font-size="11" fill="#1d2b44">22, 47 mm</text>
<text x="420" y="380" text-anchor="middle" font-size="11" fill="#1d2b44">27, 44 mm</text>
<text x="520" y="380" text-anchor="middle" font-size="11" fill="#1d2b44">none</text>
</svg>
<figcaption>Figure 1. Model gel for Worked example 2. Distances are measured from the wells. Dark bars are bands; open bars are wells.</figcaption>
</figure>

## PCR: copying one region millions of times

PCR copies a chosen **target region** of DNA. You need the template DNA, two **primers** (short single strands complementary to the two ends of the target, one for each strand), free nucleotides, and a **heat-stable DNA polymerase**. Each cycle has three steps:

1. **Denature** (typically about 94–98 °C). Heat breaks the hydrogen bonds between bases, so the two strands separate.
2. **Anneal** (typically about 50–65 °C). The mixture cools, and the primers base-pair with their complementary sequences on the single strands.
3. **Extend** (typically about 72 °C). DNA polymerase adds nucleotides to the 3′ end of each primer, building a new complementary strand.

<figure>
<svg viewBox="0 0 640 230" role="img" aria-labelledby="pcr-title pcr-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcr-title">The three steps of one PCR cycle</title>
<desc id="pcr-desc">Three boxes joined by arrows from left to right, then an arrow looping back from the third box to the first. Box 1, denature, about 94 to 98 degrees Celsius: hydrogen bonds break, strands separate. Box 2, anneal, about 50 to 65 degrees: primers bind to complementary ends of the target. Box 3, extend, about 72 degrees: heat-stable polymerase adds nucleotides to each primer. The loop back is labelled repeat 25 to 35 times; copies of the target can double each cycle.</desc>
<rect x="0" y="0" width="640" height="230" fill="#ffffff"/>
<rect x="20" y="40" width="170" height="110" rx="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="105" y="66" text-anchor="middle" font-size="15" font-weight="700" fill="#1d2b44">1 Denature</text>
<text x="105" y="88" text-anchor="middle" font-size="13" fill="#1d2b44">about 94–98 °C</text>
<text x="105" y="112" text-anchor="middle" font-size="12" fill="#1d2b44">H bonds break;</text>
<text x="105" y="128" text-anchor="middle" font-size="12" fill="#1d2b44">strands separate</text>
<rect x="235" y="40" width="170" height="110" rx="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="320" y="66" text-anchor="middle" font-size="15" font-weight="700" fill="#1d2b44">2 Anneal</text>
<text x="320" y="88" text-anchor="middle" font-size="13" fill="#1d2b44">about 50–65 °C</text>
<text x="320" y="112" text-anchor="middle" font-size="12" fill="#1d2b44">primers bind to the</text>
<text x="320" y="128" text-anchor="middle" font-size="12" fill="#1d2b44">ends of the target</text>
<rect x="450" y="40" width="170" height="110" rx="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 4"/>
<text x="535" y="66" text-anchor="middle" font-size="15" font-weight="700" fill="#1d2b44">3 Extend</text>
<text x="535" y="88" text-anchor="middle" font-size="13" fill="#1d2b44">about 72 °C</text>
<text x="535" y="112" text-anchor="middle" font-size="12" fill="#1d2b44">polymerase adds</text>
<text x="535" y="128" text-anchor="middle" font-size="12" fill="#1d2b44">nucleotides to primers</text>
<line x1="190" y1="95" x2="228" y2="95" stroke="#1d2b44" stroke-width="2"/>
<polygon points="228,89 236,95 228,101" fill="#1d2b44"/>
<line x1="405" y1="95" x2="443" y2="95" stroke="#1d2b44" stroke-width="2"/>
<polygon points="443,89 451,95 443,101" fill="#1d2b44"/>
<polyline points="535,150 535,190 105,190 105,158" fill="none" stroke="#1d2b44" stroke-width="2"/>
<polygon points="99,158 105,150 111,158" fill="#1d2b44"/>
<text x="320" y="212" text-anchor="middle" font-size="13" fill="#1d2b44">repeat 25–35 times: copies of the target can double each cycle</text>
</svg>
<figcaption>Figure 2. One PCR cycle. Temperatures are typical values; exact settings depend on the primers and enzyme and are not assessed.</figcaption>
</figure>

Why a heat-stable polymerase? The mixture is heated to near boiling in every cycle. Most enzymes would denature. The polymerase usually used was first isolated from a bacterium that lives in hot springs, so it keeps working after repeated heating.

**Counting copies.** If every target molecule is copied in every cycle, the number doubles each cycle:

**N = N₀ × 2ⁿ**

where N₀ is the starting number of target copies and n is the number of cycles. One copy becomes 2, 4, 8… and 2³⁰ ≈ 1.07 × 10⁹ after 30 cycles. Real reactions are less than 100% efficient, and copying slows when primers or nucleotides run low, so this is a maximum.

PCR lets scientists work with tiny samples: a trace of blood at a crime scene, a scrap of tissue from a museum specimen, or a few virus particles in a patient sample.

## Bacterial transformation and gene cloning

In **transformation**, bacterial cells take up foreign DNA (you met natural transformation in Topic 6.7). In the lab, the DNA is usually a **plasmid**, a small circle of DNA, carrying:

- the **gene of interest**, and
- a **selectable marker**, usually a gene for resistance to an antibiotic.

Only a small fraction of cells take up the plasmid. To find them, the cells are spread on a plate containing the antibiotic. Cells **without** the plasmid die; cells **with** it grow into colonies. Each colony comes from one transformed cell.

When transformed bacteria divide, they copy the plasmid too. This is **gene cloning**: making many copies of a DNA fragment. Because the genetic code is shared by almost all organisms, bacteria can also transcribe and translate a gene from another species and make its protein (eukaryotic genes are supplied without their introns, which bacteria cannot remove). Human insulin for treating diabetes, for example, is made this way. Organisms that carry genes from another species are **transgenic**, one kind of **genetically modified organism (GMO)**.

**Transformation efficiency** measures how well it worked:

**efficiency = number of colonies ÷ mass of DNA spread on the plate (µg)**

## DNA sequencing and DNA fingerprints

**DNA sequencing** determines the exact order of nucleotides in a DNA molecule. Sequencing a gene from a patient can show the exact mutation (silent, missense, nonsense or frameshift) behind a change in a protein.

Comparing DNA from different samples gives a **DNA fingerprint**: a pattern, either of bands on a gel or of sequence differences, that is characteristic of an individual or species. Uses include:

- **Forensic identification:** does DNA from a crime scene match a suspect, or exclude them?
- **Kinship:** each band (or allele) in a child must come from one of the two biological parents.
- **Identifying organisms:** for example, checking whether food is the species on the label, or which bacterium is causing an infection.
- **Phylogenetics:** species with fewer sequence differences in the same gene usually share a more recent common ancestor (Unit 7).

A match **supports** identity but does not prove it if only a few bands or bases are compared. A mismatch, if the method was reliable, **excludes** a sample.

## Worked example 1: how many PCR cycles?

**Question.** A swab contains about 40 copies of a target DNA region. A test needs at least 1 × 10⁹ copies.

(a) How many copies would 30 cycles give at 100% efficiency?
(b) What is the minimum number of cycles to reach 1 × 10⁹ copies?
(c) In practice each cycle multiplies the copies by about 1.9, not 2. How many cycles are needed then?

1. **(a)** N = N₀ × 2ⁿ = 40 × 2³⁰ = 40 × 1 073 741 824 = 4.29 × 10¹⁰ copies.
2. **(b)** You need 2ⁿ ≥ 1 × 10⁹ ÷ 40 = 2.5 × 10⁷. Try values: 2²⁴ ≈ 1.68 × 10⁷ (too small), 2²⁵ ≈ 3.36 × 10⁷ (enough). Check: 40 × 2²⁴ = 6.7 × 10⁸, below 10⁹; 40 × 2²⁵ = 1.34 × 10⁹, above. So **25 cycles**. (With logarithms: n = log₂(2.5 × 10⁷) ≈ 24.6, so round up to 25.)
3. **(c)** Now 1.9ⁿ ≥ 2.5 × 10⁷. n = log(2.5 × 10⁷) ÷ log(1.9) ≈ 26.5, so **27 cycles**. After 25 cycles you would have only 40 × 1.9²⁵ ≈ 3.7 × 10⁸ copies.

**Interpretation.** Small losses per cycle compound: after 30 cycles, a 2.0 multiplier gives about 4.7 times as many copies as a 1.9 multiplier (2³⁰ ÷ 1.9³⁰ ≈ 4.66). Adding a couple of cycles makes up for it. Always round the number of cycles **up**: a fraction of a cycle is not possible, and rounding down falls short.

## Worked example 2: reading a gel to identify a species

**Question.** A fish fillet is sold as species X. A lab amplifies one gene region by PCR from the fillet and from reference samples of species X and species Y, cuts each product with the same restriction enzyme, and runs the gel in Figure 1.

(a) Estimate the sizes of the fillet's bands. (b) Is the fillet species X? (c) Explain the purpose of lane 5.

1. **(a) Fillet band at 27 mm.** It lies between the 3000 bp band (24 mm) and the 2000 bp band (30 mm), about halfway. Because the scale is logarithmic, halfway in distance is not halfway in size: a standard curve of log(size) against distance gives **about 2500 bp**.
2. **Fillet band at 44 mm.** Between 1000 bp (40 mm) and 500 bp (50 mm), a little under halfway: **about 760 bp**.
3. **(b)** Species X gives bands at 22 mm (about 3500 bp) and 47 mm (about 610 bp). The fillet's bands do not match. The fillet's pattern matches **species Y** exactly. So the evidence indicates that the fillet is species Y, not X, and the label is likely wrong.
4. **(c)** Lane 5 contains everything except DNA. No bands appear, which shows that the reagents were not contaminated with DNA. If a band appeared there, any result would be unreliable.

**Check.** Did the PCR product get cut? Each species gives two bands. If the uncut product were one band, its size should equal the sum of the fragments: the fillet's 2500 + 760 = 3260, about 3300 bp; species X's 3500 + 610 = 4110, about 4100 bp. The two species' products differ in total size as well as in where they are cut.

**How confident?** The pattern matches species Y and excludes species X. Testing more reference species (or sequencing the region) would be needed to be sure no other species gives the same pattern.

## Common misconceptions

- **"DNA moves toward the negative electrode."** DNA is negative, so it moves toward the **positive** electrode.
- **"Big fragments travel farther because they are heavier."** Short fragments move farther; long ones are held back by the gel.
- **"PCR copies the whole genome."** Only the region between the two primers is amplified.
- **"Primers are enzymes."** Primers are short strands of nucleic acid that give the polymerase a starting point.
- **"Every cell in a transformation takes up the plasmid."** Only a small fraction do; the antibiotic selects them.
- **"The antibiotic makes the bacteria resistant."** The resistance gene on the plasmid does; the antibiotic only kills cells without it.
- **"A matching DNA pattern proves identity."** It supports identity; a mismatch excludes. Confidence depends on how many regions are compared.
- **"Reading about the lab is the same as doing it."** It is not; you still need to carry out the lab investigations.

## Where this leads

These tools reappear in Unit 7, where DNA sequence comparisons are evidence for evolution and common ancestry: start with [Introduction to Natural Selection](/advanced-course-resources/biology/7-1-introduction-natural-selection-study-guide/). Now test yourself with the [practice questions](/advanced-course-resources/biology/6-8-biotechnology-practice/), then use the [revision notes](/advanced-course-resources/biology/6-8-biotechnology-revision-notes/) and the [checklist](/advanced-course-resources/biology/6-8-biotechnology-checklist/).
