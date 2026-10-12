---
title: "OCR A Level Biology A: DNA sequencing, profiling, PCR and electrophoresis (H420)"
seoTitle: "OCR A Level Biology DNA Sequencing, PCR, Electrophoresis"
resourceType: "study-guides"
subject: "biology"
level: ["a-levels"]
topic: "DNA sequencing, profiling, PCR and electrophoresis"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H420"]
syllabusSeries: "Version 4.1 (April 2026), for first assessment in 2025"
order: 231
syllabusTopics:
  - qualification: "a-level"
    topic: "genetics-evolution-and-ecosystems-ocr-alevel-biology"
description: "Study guide to DNA sequencing, bioinformatics, DNA profiling, PCR and electrophoresis for OCR A Level Biology A (H420), with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This guide is for OCR A Level Biology A (H420), written to the OCR specification Version 4.1 (April 2026), for first assessment in 2025. It covers module 6.1.3 (Manipulating genomes), learning outcomes (a) to (e): sequencing, bioinformatics, DNA profiling, the polymerase chain reaction and electrophoresis. For quick recall use the [revision notes](/resources/ocr-a-level-biology-dna-sequencing-profiling-pcr-and-electrophoresis-revision-notes/), then test yourself with the [practice set](/resources/ocr-a-level-biology-dna-sequencing-profiling-pcr-and-electrophoresis-practice/). Course pages: [OCR A Level Biology hub](/boards/ocr/a-level/biology/), the [printable checklist](/checklists/ocr/a-level/biology/) and the free [10-minute diagnostics](/diagnostics/). Background: [the genetic code](/resources/ocr-a-level-biology-the-genetic-code-transcription-and-translation/) and [DNA structure and replication](/resources/ocr-a-level-biology-nucleotides-atp-dna-structure-and-semi-conservative/). Module 6 content is assessed in components 02 and 03.

## What this unit covers

| Specification | What you must be able to do |
|---|---|
| 6.1.3(a) | Explain the principles of DNA sequencing and new sequencing techniques, including the rapid advance from Sanger sequencing to high throughput sequencing (details of high throughput methods are not required) |
| 6.1.3(b)(i) | Explain how gene sequencing allows genome-wide comparisons between individuals and between species |
| 6.1.3(b)(ii) | Explain how sequencing allows amino acid sequences in polypeptides to be predicted |
| 6.1.3(b)(iii) | Explain how sequencing has allowed the development of synthetic biology |
| 6.1.3(c) | Explain the principles of DNA profiling and its uses, including forensics and analysis of disease risk |
| 6.1.3(d) | Explain the principles of the polymerase chain reaction (PCR) and its application in DNA analysis |
| 6.1.3(e) | Explain the principles and uses of electrophoresis for separating nucleic acid fragments or proteins |

## 6.1.3(a) DNA sequencing

Sequencing means finding the order of bases in a piece of DNA. Sanger sequencing, also called the chain-termination method, is the technique to understand in detail.

The reaction mixture contains:

* the single-stranded DNA to be sequenced (the template)
* a short primer that binds to the template and marks the start
* DNA polymerase
* a supply of the four ordinary nucleotides, which let the new strand grow
* a small amount of four modified nucleotides, called dideoxynucleotides, each carrying a different fluorescent label.

A dideoxynucleotide has no hydroxyl group on carbon 3 of its sugar. DNA polymerase can add it to the growing strand, but the next nucleotide cannot be joined because no phosphodiester bond can form. The strand stops growing. Because ordinary and modified nucleotides compete, termination happens at random. The mixture ends up with new strands of every possible length, each ending in a labelled base.

The fragments are separated by length in a very narrow capillary tube by electrophoresis. The shortest pass a laser and detector first, which records the label colour of each fragment in turn. Reading the labels from shortest to longest gives the sequence of the new strand, 5′ to 3′. The template is complementary to it.

**Worked example.** A detector reports the terminal base of fragments from shortest to longest as G, A, T, T, C, G, C, T, A, A, G, C.

1. New strand, 5′ to 3′: GATTCGCTAAGC.
2. The template is complementary and antiparallel. Written 3′ to 5′ it is CTAAGCGATTCG.
3. Written 5′ to 3′, the template is GCTTAGCGAATC.

The detector reads the new strand, not the template.

**New techniques.** Sanger sequencing reads a few hundred bases up to about a thousand per reaction, so a genome had to be broken into many pieces, sequenced reaction by reaction and assembled. The human genome, roughly 3 billion base pairs, took many years. High throughput sequencing runs millions of reactions at the same time and software assembles the short reads by finding overlaps. It is much faster and cheaper per base, so sequencing whole genomes of individuals and pathogens is now routine.

## 6.1.3(b) Bioinformatics and computational biology

**Bioinformatics** is the development and use of software and databases to store, search and analyse biological data, especially sequences. **Computational biology** uses computer models and algorithms to study biological systems.

### (i) Genome-wide comparisons

Aligning sequences and counting differences gives a measure of similarity.

* **Between species.** Species with more similar sequences diverged from a common ancestor more recently, because fewer mutations have built up since they diverged. This helps to build evolutionary trees.
* **Between individuals.** Comparing the genomes of many people with and without a trait reveals variants, often single nucleotide differences, that are more common in one group. This links **genotype** to **phenotype**.
* **Epidemiology.** Comparing pathogen genomes from patients shows who infected whom and whether drug-resistance alleles are spreading.

**Worked example.** Aligned 30-base stretches of one gene from three species:

```
P  ATGGCTAAGTGGCACGGATTCCTGAAGTAC
Q  ATGGCTAAGTGGCATGGATTCCTGAAGTAC
R  ATGGCAAAGTGGCATGGGTTCCTCAAGTAT
```

* P and Q differ at 1 base, so they are 29/30 = 96.7% identical.
* P and R differ at 5 bases: 25/30 = 83.3%.
* Q and R differ at 4 bases: 26/30 = 86.7%.

P and Q are the most similar, so they probably shared the most recent common ancestor. One short gene is weak evidence.

### (ii) Predicting amino acid sequences

Once the base sequence of a gene is known, the polypeptide can be predicted. Find the start codon, read the mRNA codons in triplets using the genetic code, and stop at a stop codon. Comparing the predicted sequence with known proteins in databases suggests its function.

**Worked example.** The template strand of a gene, 3′ to 5′, is TACCGATTCACCGTGATT.

1. mRNA is complementary to the template, with U for T: AUG GCU AAG UGG CAC UAA.
2. Using the genetic code: Met, Ala, Lys, Trp, His, then a stop codon.
3. If the fourth template triplet ACC changes to ACT, the mRNA codon becomes UGA, a stop codon. The chain is cut short after Met-Ala-Lys.

Predictions have limits. A eukaryotic gene contains introns, so the coding sequence is found by comparing with mRNA or cDNA. The sequence does not show how the polypeptide folds or is modified afterwards.

### (iii) Synthetic biology

**Synthetic biology** designs and builds new biological parts, systems or organisms, or redesigns existing ones. Sequencing underpins it: designers need known sequences, and new DNA can be designed on a computer, synthesised chemically and checked by sequencing. In 2010 researchers designed the genome of the bacterium *Mycoplasma mycoides* on a computer, synthesised it chemically and transplanted it into cells of a related species, which then grew under its control. Benefits include microorganisms engineered to make medicines. Concerns include safety and misuse.

## 6.1.3(c) DNA profiling

Some non-coding regions of the human genome contain **short tandem repeats (STRs)**, a short base sequence repeated head to tail. The number of repeats at a locus differs between people, so a combination of several loci is almost unique to an individual (identical twins excepted).

1. Extract DNA from the sample, such as blood or saliva.
2. Amplify chosen STR loci by PCR, using fluorescently labelled primers.
3. Separate the products by length using electrophoresis.
4. Compare the pattern of fragment sizes between samples.

An earlier method cut DNA with restriction enzymes and found the repeat-containing fragments with labelled probes.

**Uses.** In forensics, crime scene profiles are compared with those of suspects or a database. Profiling also shows family relationships such as paternity, since each person inherits half their repeat pattern from each parent. In **disease risk**, some conditions are caused or predicted by the length of a repeat or by the presence of a particular allele, and profiling or targeted tests can show carrier status or risk.

**Worked example (match probability).** Six loci are used. The frequencies in the population of the matching pattern at each locus are 0.08, 0.12, 0.05, 0.20, 0.10 and 0.15 (data supplied). If the loci are inherited independently, multiply:

0.08 × 0.12 × 0.05 × 0.20 × 0.10 × 0.15 = 1.44 × 10⁻⁶, about 1 in 694 000.

Adding a seventh locus with frequency 0.10 reduces this to about 1 in 6.9 million. More loci make a chance match less likely, but a match is not proof of guilt.

**Worked example (disease risk).** One late-onset condition is linked to the number of CAG repeats in a gene. Primers either side of the repeat give a PCR product of 123 bp plus 3 bp for every repeat (data supplied). A person's two alleles give bands at 177 bp and 252 bp.

* Repeats = (177 − 123) ÷ 3 = 18.
* Repeats = (252 − 123) ÷ 3 = 43.

If the stated risk threshold is 40 or more repeats, the 43-repeat allele puts this person in the at-risk group.

## 6.1.3(d) The polymerase chain reaction

PCR makes many copies of a chosen region of DNA in a test tube, from very little starting material. The mixture contains template DNA, two primers (one for each end of the target, each complementary to one strand), free DNA nucleotides, a buffer and a **thermostable DNA polymerase** such as Taq polymerase, from a heat-tolerant bacterium, which withstands the repeated heating to about 95 °C.

Each cycle has three steps in a thermal cycler:

| Step | Temperature | What happens |
|---|---|---|
| Denaturation | about 95 °C | The strands separate as heat breaks the hydrogen bonds between base pairs |
| Annealing | about 50 to 65 °C | The temperature falls and primers bind by complementary base pairing to the ends of the target |
| Extension | about 72 °C | The polymerase adds nucleotides to the 3′ end of each primer, making a new complementary strand |

Ideally the number of copies doubles each cycle: copies = starting copies × 2ⁿ for n cycles.

**Worked example.** A sample holds 3 copies of the target. How many cycles are needed to exceed 1 × 10⁹ copies, and how long will it take if one cycle lasts 2 minutes 30 seconds?

* 2ⁿ > 10⁹ ÷ 3 = 3.33 × 10⁸, so n > log₂(3.33 × 10⁸) = 28.3. So 29 cycles.
* Check: 3 × 2²⁹ = 1.61 × 10⁹ copies (3 × 2²⁸ = 8.05 × 10⁸ is too few).
* Time = 29 × 2.5 = 72.5 minutes.

Real reactions fall short of perfect doubling and level off as reagents run out. PCR amplifies any DNA present, so contamination is a risk, and a control tube without template is run to detect it.

## 6.1.3(e) Electrophoresis

Electrophoresis separates charged molecules in an electric field through a gel.

**For nucleic acids.** DNA is negatively charged because of its phosphate groups. Samples are loaded into wells at the cathode end of an agarose gel covered in buffer. With the current on, DNA moves towards the anode (positive). The gel is a mesh, so shorter fragments move through it more easily and travel further in a given time. Fragments are made visible with a stain or fluorescent label, and each band is made up of many fragments of one size. A **ladder** of known sizes is run alongside.

**For proteins.** Polyacrylamide gel is used. In SDS-PAGE the detergent SDS unfolds the proteins and coats them with negative charge in proportion to their length, so they separate by mass. Without SDS, separation depends on charge, size and shape.

**Worked example (estimating size).** A ladder gives 1500 bp at 14 mm, 1000 bp at 21 mm, 750 bp at 26 mm, 500 bp at 33 mm and 250 bp at 45 mm. A fragment travelled 29 mm. Plotting distance against log₁₀(fragment length) gives a straight line, and reading it at 29 mm gives log₁₀(length) = 2.80, so the fragment is about 630 bp.

**Practical points (PAG6).** Wear gloves, take care with stains, keep mains equipment away from spilled buffer, and stop the run before small fragments leave the gel.

## Common errors

* Writing that dideoxynucleotides "stop the polymerase working". They stop only that strand, because the next bond cannot form.
* Saying primers "join" the strands. They anneal and give the polymerase a start point.
* Saying DNA moves because of its mass. It moves because of its negative charge, and the gel slows long fragments more.
* Treating a profile match as proof of identity.

## Official syllabus

OCR Advanced GCE in Biology A (H420) specification, Version 4.1, April 2026, for first assessment in 2025, published by OCR (Cambridge University Press and Assessment): module 6.1.3, learning outcomes (a) to (e).
