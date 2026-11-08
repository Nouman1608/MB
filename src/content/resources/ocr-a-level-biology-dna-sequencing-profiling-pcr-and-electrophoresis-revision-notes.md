---
title: "OCR A Level Biology A: DNA sequencing, profiling, PCR and electrophoresis (H420) -- Revision Notes"
seoTitle: "OCR A Level Biology DNA Sequencing PCR Revision Notes"
resourceType: "revision-notes"
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
  - qualification: "a-level"
    topic: "genetics-evolution-and-ecosystems-ocr-alevel-biology"
    subtopic: "manipulating-genomes-ocr-alevel-biology"
description: "Condensed revision notes on DNA sequencing, bioinformatics, DNA profiling, PCR and electrophoresis for OCR A Level Biology A (H420), with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

These notes are for OCR A Level Biology A (H420), written to the OCR specification Version 4.1 (April 2026), for first assessment in 2025. They cover module 6.1.3 learning outcomes (a) to (e): sequencing, bioinformatics, DNA profiling, PCR and electrophoresis. Full explanations and worked examples are in the [study guide](/resources/ocr-a-level-biology-dna-sequencing-profiling-pcr-and-electrophoresis/), and exam-style questions are in the [practice set](/resources/ocr-a-level-biology-dna-sequencing-profiling-pcr-and-electrophoresis-practice/). Course pages: [OCR A Level Biology hub](/boards/ocr/a-level/biology/), the [printable checklist](/checklists/ocr/a-level/biology/) and the free [10-minute diagnostics](/diagnostics/).

## Key terms

| Term | Meaning |
|---|---|
| Sequencing | Finding the order of bases in DNA |
| Dideoxynucleotide | Modified nucleotide with no 3′ hydroxyl group; stops the growing strand |
| High throughput sequencing | Millions of reactions at once; software assembles the short reads |
| Bioinformatics | Software and databases to store, search and analyse biological data |
| Computational biology | Computer models and algorithms applied to biological systems |
| Synthetic biology | Designing and building new biological parts, systems or organisms, or redesigning existing ones |
| STR | Short tandem repeat: a short base sequence repeated head to tail, with a variable number of repeats |
| DNA profile | The combination of repeat lengths at several loci |
| PCR | In vitro amplification of a chosen region of DNA |
| Primer | Short single-stranded DNA that binds to the template and gives the polymerase a start point |
| Electrophoresis | Separation of charged molecules in an electric field through a gel |

## 6.1.3(a) Sequencing

**Sanger method in steps**

1. Mix template DNA, primer, DNA polymerase, ordinary nucleotides and a small amount of four dideoxynucleotides, each with a different fluorescent label.
2. The polymerase builds new strands. When a dideoxynucleotide is added, no phosphodiester bond can form with the next nucleotide, so that strand stops.
3. Termination is random, so the mixture holds strands of every length, each ending in a labelled base.
4. Capillary electrophoresis separates the strands by length.
5. A laser and detector record the label of each strand, shortest first.
6. The labels in order, shortest to longest, give the new strand 5′ to 3′. The template is complementary.

**Sanger to high throughput.** Sanger sequencing reads one short stretch per reaction. High throughput sequencing runs millions of reactions together. It is faster and cheaper and makes whole-genome sequencing routine. You are not required to know the details of high throughput methods.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-biology-9700-genetic-technology--08-sanger-sequencing.webp" width="900" height="1061" alt="The template is copied by DNA polymerase. Strands of every length from 1 to 12 stop at a labelled dideoxynucleotide that lacks a 3 prime OH. Reading the last base from shortest to longest gives G A T T C G C T A A G C, the new strand 5 prime to 3 prime, complementary to the template." loading="lazy">
  <figcaption>Chain-terminating nucleotides give fragments of every length, and the last bases read shortest to longest spell the new strand.</figcaption>
</figure>


## 6.1.3(b) Bioinformatics

| Use | What sequence data allow |
|---|---|
| Genome-wide comparison between species | Percentage identity measures relatedness. More similar suggests a more recent common ancestor |
| Comparison between individuals | Variants more common in people with a trait link genotype to phenotype |
| Epidemiology | Pathogen genomes show chains of transmission and spreading resistance alleles |
| Predicting polypeptides | Find the start codon, read triplets to a stop codon, translate with the genetic code |
| Synthetic biology | Known sequences are used to design DNA, which is then made chemically and checked by sequencing |

**Percentage identity** = (bases that match ÷ bases compared) × 100.

**Predicting a polypeptide in steps:** write the mRNA complementary to the template strand (U replaces T), split it into codons, then look each one up.

**Limits.** Introns mean the coding sequence is found by comparing with mRNA or cDNA. A sequence does not show folding or later modification. A predicted function is a hypothesis until tested.

## 6.1.3(c) DNA profiling

**Method in steps**

1. Extract DNA.
2. Amplify STR loci by PCR with labelled primers.
3. Separate the products by electrophoresis.
4. Compare band or peak patterns between samples.

**Uses.** Forensics (match a scene sample to a suspect or database), paternity and other family relationships, and analysis of disease risk (carrier status, or risk linked to repeat length).

**Match probability.** Multiply the frequencies of the matching pattern at each independent locus. Example: 0.25 × 0.2 × 0.04 = 0.002, which is 1 in 500. More loci make a chance match less likely.

**Repeat number from a product size.** Repeats = (product size − flanking length) ÷ repeat unit length.

**Caution.** A match is not proof of guilt. Contamination, mixed samples and degraded DNA reduce reliability. Risk results are probabilities.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-biology-9700-genetic-technology--01-restriction-sticky-ends.webp" width="900" height="975" alt="Four steps show a DNA duplex with the palindromic site GAATTC. The enzyme cuts after the G in each strand, leaving AATT single-stranded sticky ends. Plasmid and gene ends cut with the same enzyme anneal by hydrogen bonds, and DNA ligase then forms phosphodiester bonds across the two nicks." loading="lazy">
  <figcaption>Cutting both DNA molecules with the same enzyme gives matching sticky ends, and ligase seals the backbone.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-biology-9700-genetic-technology--07-dna-profile-paternity.webp" width="900" height="1010" alt="Four lanes of band sizes in kb show mother, child and two men. The child has bands 6.5 and 3.5 that the mother lacks, so they come from the father. Man A has both; Man B lacks 3.5 and is excluded. Five independent loci with chances 0.1, 0.05, 0.2, 0.08 and 0.125 give a chance match of 1 in 100 000." loading="lazy">
  <figcaption>Bands the child lacks from the mother must come from the father: Man A fits, Man B is excluded.</figcaption>
</figure>


## 6.1.3(d) PCR

| Component | Role |
|---|---|
| Template DNA | Contains the target |
| Two primers | Bind to opposite strands at the ends of the target |
| Free DNA nucleotides | Raw material for new strands |
| Thermostable DNA polymerase (Taq) | Builds new strands and survives about 95 °C |

| Step | Temperature | Event |
|---|---|---|
| Denaturation | about 95 °C | The two strands come apart |
| Annealing | about 50 to 65 °C | Primers bind by complementary base pairing |
| Extension | about 72 °C | Polymerase adds nucleotides to the 3′ end of each primer |

**Copies after n cycles (ideal)** = starting copies × 2ⁿ. For example, 5 copies after 8 cycles gives 5 × 256 = 1280. Ten cycles give a 1024-fold increase.

**Applications in DNA analysis:** amplifying tiny samples for profiling, preparing DNA for sequencing, and testing for particular alleles. Run a no-template control to detect contamination.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-biology-9700-genetic-technology--05-pcr-cycle.webp" width="900" height="1230" alt="A temperature trace shows 95 C, about 60 C and 72 C plateaus. Three panels show one cycle: heat separates the strands, primers anneal to the 3 prime end of each template, and Taq polymerase extends each primer 5 prime to 3 prime. A bar chart shows copies doubling each cycle, from 4 to 256 in 6 cycles." loading="lazy">
  <figcaption>Each PCR cycle denatures, anneals and extends, doubling the number of DNA molecules.</figcaption>
</figure>


## 6.1.3(e) Electrophoresis

**Nucleic acids**

* DNA is negatively charged (phosphate groups), so it moves towards the anode.
* Agarose gel is a mesh, so short fragments travel further than long ones in the same time.
* A ladder of known sizes is run alongside. Plot distance against log₁₀(length) to read off unknown sizes.
* A band is made up of many fragments of one size.

**Proteins**

* Polyacrylamide gel is used.
* With SDS (SDS-PAGE), proteins are unfolded and coated with negative charge, so they separate by mass.
* Without SDS, charge, size and shape all matter.

**Reading a gel:** the smallest fragments are furthest from the wells, and two bands at the same distance are fragments of the same size. If a sample shows no band, the DNA may be absent or degraded, or the sample may not have loaded.

**Practical (PAG6):** wear gloves, handle stains with care, keep mains equipment dry, and stop the run before small fragments leave the gel.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-biology-9700-genetic-technology--06-gel-electrophoresis.webp" width="900" height="1109" alt="An agarose gel has wells at the negative end and DNA runs towards the positive electrode. Smaller fragments travel further. Linear 6000 bp DNA cut twice gives 3300, 1500 and 1200 bp bands; a 5000 bp circle cut twice gives 2300 and 2700 bp bands." loading="lazy">
  <figcaption>Negatively charged DNA runs to the anode, with smaller fragments travelling further.</figcaption>
</figure>


## Must-know distinctions

* **Dideoxynucleotide and ordinary nucleotide.** The first lacks the 3′ hydroxyl group, so it ends the chain.
* **PCR and DNA replication in a cell.** PCR uses a thermal cycler, a heat-stable polymerase and primers made in advance. It copies a chosen region only.
* **Sequencing and profiling.** Sequencing gives the base order. Profiling compares repeat patterns to identify or relate individuals.
* **Hydrogen bonds and phosphodiester bonds in PCR.** Heating at denaturation breaks hydrogen bonds between the strands. The polymerase forms phosphodiester bonds when it extends the primers. Primers are held on the template by hydrogen bonds between complementary bases.
* **SDS-PAGE and DNA gels.** SDS gives proteins a uniform negative charge. DNA already has one.

## Quick self-test

1. Why does a dideoxynucleotide stop strand synthesis?
2. Fragment terminal bases, shortest to longest, are C, A, G, G, T. State the new strand and the template (both 5′ to 3′).
3. Two aligned 20-base sequences differ at 3 positions. Give the percentage identity.
4. A template strand reads 3′ TACGGTCAT 5′. Give the mRNA and the first three amino acids (AUG Met, CCA Pro, GUA Val).
5. A sample has 5 copies of the target. How many after 8 ideal PCR cycles?
6. Why is Taq polymerase used?
7. A PCR product across a repeat is 142 bp. Flanking sequence is 100 bp and the repeat unit is 3 bp. How many repeats?
8. Which travels further in agarose, a 200 bp or an 800 bp fragment?
9. Why is SDS added for protein electrophoresis?
10. Three independent loci have matching-pattern frequencies 0.25, 0.2 and 0.04. Give the combined probability and its 1 in n form.

### Answers

1. It lacks the 3′ hydroxyl group, so no phosphodiester bond can form with the next nucleotide.
2. New strand 5′ CAGGT 3′. The template is complementary and antiparallel: 5′ ACCTG 3′.
3. 17 ÷ 20 × 100 = 85%.
4. mRNA 5′ AUGCCAGUA 3′, giving Met, Pro, Val.
5. 5 × 2⁸ = 1280.
6. It withstands the heating to about 95 °C, so it does not need replacing each cycle.
7. (142 − 100) ÷ 3 = 14 repeats.
8. The 200 bp fragment, because it moves more easily through the gel mesh.
9. It unfolds the proteins and gives them a negative charge in proportion to their length, so they separate by mass.
10. 0.25 × 0.2 × 0.04 = 0.002, or 1 in 500.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-biology-9700-genetic-technology--03-selecting-transformed-bacteria.webp" width="900" height="1010" alt="Two plates have the same colony positions. On nutrient agar 312 colonies grow; on agar with antibiotic only 41 grow, the ones that took up the plasmid with the resistance marker. 41/312 is 13.1 percent. GFP is the alternative marker, glowing under UV." loading="lazy">
  <figcaption>Only bacteria carrying the plasmid survive on antibiotic agar, so 41 of 312 colonies (13.1%) were transformed.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-biology-9700-genetic-technology--04-three-ways-to-get-a-gene.webp" width="900" height="1070" alt="Three routes are shown. Restriction enzymes cut the gene from the genome but it keeps its introns. Reverse transcriptase copies mRNA to cDNA and DNA polymerase makes the second strand, giving a gene with no introns. A gene machine builds the gene from a known base sequence." loading="lazy">
  <figcaption>Restriction cutting keeps introns, whereas cDNA and machine-made genes have none.</figcaption>
</figure>


## Where marks are usually lost

* Reading the template from the detector instead of the new strand, or forgetting that the template is antiparallel.
* Saying dideoxynucleotides "stop the polymerase" and not saying why the next bond cannot form.
* Giving a match probability as a decimal when the question asks for "1 in n", or stopping before the final step.
* Stating that PCR doubles copies every cycle without saying "ideally", or using 2n instead of 2ⁿ.
* Saying DNA moves "because it is small" without charge, or forgetting that DNA moves to the anode.
* Writing that a DNA profile match "proves" guilt.
* Saying Taq polymerase is used because it works "fast", not because it is heat stable.
* Plotting fragment length (not its logarithm) against distance and reading a curve badly.
* Describing synthetic biology as simply "genetic engineering" without mentioning design and synthesis.

## Frequently asked questions

**What is a short tandem repeat?**
A short tandem repeat (STR) is a short base sequence repeated head to tail in non-coding DNA, and the number of repeats at a locus varies between people. A DNA profile is the combination of repeat lengths at several loci.

**What is the job of a primer in PCR?**
A primer is a short single-stranded piece of DNA that binds to the template by complementary base pairing and gives DNA polymerase a starting point. Two primers are used, one for each end of the target region.

**What is the difference between bioinformatics and computational biology?**
Bioinformatics is the development and use of software and databases to store, search and analyse biological data, especially sequences. Computational biology applies computer models and algorithms to study biological systems.

**What is synthetic biology?**
Synthetic biology is designing and building new biological parts, systems or organisms, or redesigning existing ones. Sequencing has made it possible, as required by OCR A Level Biology A (H420) section 6.1.3(b)(iii).

**How is high throughput sequencing different from Sanger sequencing?**
High throughput sequencing runs millions of reactions at once and uses software to assemble the short reads, making it much faster and cheaper per base. Details of high throughput methods are not required for H420.

## Official syllabus

OCR Advanced GCE in Biology A (H420) specification, Version 4.1, April 2026, for first assessment in 2025, published by OCR (Cambridge University Press and Assessment): module 6.1.3, learning outcomes (a) to (e).
