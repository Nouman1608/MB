---
title: "Cambridge International AS & A Level Biology (9700): Principles of genetic technology"
resourceType: "study-guides"
subject: "biology"
level: ["a-levels"]
topic: "Topic 19 – Genetic technology"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9700"]
syllabusSeries: "For examination in 2025, 2026 and 2027"
stage: "A"
order: 19.1
syllabusTopics:
  - qualification: "a-level"
    topic: "genetic-technology-cambridge-alevel-biology"
    subtopic: "principles-of-genetic-technology-cambridge-alevel"
description: "Study guide to 9700 section 19.1: recombinant DNA, gene sources, enzymes and vectors, promoters, markers, gene editing, PCR, electrophoresis, microarrays and databases."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide teaches section 19.1 Principles of genetic technology from Topic 19, Genetic technology, in the Cambridge International AS & A Level Biology 9700 syllabus for examination in 2025, 2026 and 2027. It covers all eleven learning outcomes. This is A Level content, examined on Paper 4, and it relies on DNA structure, transcription and translation from Topic 6 ([Nucleic acids and protein synthesis study guide](/resources/a-level-biology-9700-nucleic-acids-and-protein-synthesis/)).

The [Genetic technology study guide](/resources/a-level-biology-9700-genetic-technology/) defines each tool and gives one example of PCR and of electrophoresis. This page follows a whole gene-transfer project from start to finish, shows how sticky ends really pair, and works through harder data: cycle counts, double digests of a plasmid and two-colour microarrays. Afterwards use the [Principles of genetic technology revision notes](/resources/cambridge-a-level-biology-9700-principles-of-genetic-technology-cambridge-alevel-revision-notes/) and the [Principles of genetic technology practice questions](/resources/cambridge-a-level-biology-9700-principles-of-genetic-technology-cambridge-alevel-practice/).

## What section 19.1 covers

| Outcome | What you must be able to do |
|---|---|
| 19.1.1 | Define recombinant DNA |
| 19.1.2 | Explain genetic engineering as deliberate manipulation of genetic material, which may involve transferring a gene so that it is expressed |
| 19.1.3 | Explain that genes may be extracted from donor DNA, synthesised from donor mRNA or synthesised chemically from nucleotides |
| 19.1.4 | Explain the roles of restriction endonucleases, DNA ligase, plasmids, DNA polymerase and reverse transcriptase |
| 19.1.5 | Explain why a promoter may need to be transferred with the gene |
| 19.1.6 | Explain how marker genes coding for fluorescent products confirm expression |
| 19.1.7 | Explain gene editing as insertion, deletion or replacement of DNA at specific sites |
| 19.1.8 | Describe and explain PCR, including the role of Taq polymerase |
| 19.1.9 | Describe and explain gel electrophoresis |
| 19.1.10 | Outline microarrays in genome analysis and in detecting mRNA |
| 19.1.11 | Outline the benefits of sequence and structure databases |

## Definitions (19.1.1, 19.1.2, 19.1.7)

- **Recombinant DNA**: DNA made by joining DNA from two or more different sources.
- **Genetic engineering**: deliberate manipulation of genetic material to modify specific characteristics of an organism; often a gene is transferred so that it is **expressed** (transcribed and translated).
- **Gene editing**: genetic engineering in which DNA is inserted, deleted or replaced at a **specific site** in the genome. In CRISPR–Cas9 editing, a short guide RNA base-pairs with the target sequence and leads the Cas9 enzyme there to cut both strands; the cell's repair of the cut can delete bases or insert a supplied sequence.

The key contrast: classic gene transfer adds a gene, often at a random position; gene editing changes a chosen position.

## A complete gene transfer: human insulin in bacteria

Follow this sequence and you will have used outcomes 19.1.3 to 19.1.6.

**1. Obtain the gene (19.1.3).** Pancreatic β cells make large amounts of insulin mRNA. The mRNA is extracted and **reverse transcriptase** uses it as a template to make single-stranded **complementary DNA (cDNA)**. **DNA polymerase** then builds the second strand. Using mRNA has two advantages: the β cells contain many copies of it, and it has already had its introns removed, which bacteria could not do.

The other two sources: cutting the gene from donor DNA with restriction enzymes (but a eukaryotic gene would still contain introns), or synthesising it chemically from nucleotides when the sequence is known (no donor cells needed, and codons can be altered to suit the host).

**2. Cut the vector and the gene (19.1.4).** A **plasmid** (small circular bacterial DNA that replicates independently) is the **vector**. The plasmid and the gene are cut with the **same restriction endonuclease**. Many restriction enzymes cut a palindromic recognition sequence in a staggered way. For example, the enzyme EcoRI recognises:

```
5′ – G A A T T C – 3′
3′ – C T T A A G – 5′
```

It cuts between G and A on each strand, leaving single-stranded overhangs (**sticky ends**) of AATT. Because both the plasmid and the gene carry the same overhangs, they are complementary.

**3. Join them (19.1.4).** Sticky ends pair by hydrogen bonds; **DNA ligase** forms **phosphodiester bonds** to seal the sugar–phosphate backbone. The result is a **recombinant plasmid**.

**4. Add a promoter (19.1.5).** A **promoter** is the DNA sequence where RNA polymerase binds to begin transcription. The bacterial RNA polymerase will not recognise the human promoter, so a bacterial promoter is placed just upstream of the gene. Without it the gene is present but not transcribed.

**5. Put it into bacteria and find the successes (19.1.6).** Only a small proportion of bacteria take up a plasmid, and some plasmids close without the gene. A **marker gene** coding for a fluorescent product, such as green fluorescent protein (GFP), is placed next to the insulin gene under the same promoter. Colonies that fluoresce under blue or ultraviolet light contain the recombinant plasmid and are expressing the inserted DNA. They are selected and cultured in fermenters.

## PCR in more depth (19.1.8)

PCR clones and amplifies a target sequence. The mixture contains the template DNA, two different **primers**, free nucleotides and **Taq polymerase** in buffer.

| Step | Temperature | What happens | Why |
|---|---|---|---|
| Denaturation | about 95 °C | Hydrogen bonds between strands break | Gives single-stranded templates |
| Annealing | about 55–65 °C | Primers bind by complementary base pairing to each end of the target | DNA polymerase can only add nucleotides to an existing strand; two primers mark both ends |
| Extension | about 72 °C | Taq polymerase adds nucleotides to the 3′ end of each primer | Builds new complementary strands |

**Taq polymerase**, from the hot-spring bacterium *Thermus aquaticus*, is thermostable: it is not denatured at 95 °C and its optimum is near 72 °C, so it lasts through every cycle.

**Worked example.** A single DNA molecule is amplified. How many cycles give at least one million copies, and how long does this take if each cycle lasts 2.5 minutes?

- After n cycles: copies = 2ⁿ. 2¹⁹ = 524 288 (too few); 2²⁰ = 1 048 576.
- **20 cycles**, taking 20 × 2.5 = **50 minutes**.

In practice amplification slows in later cycles as primers and nucleotides run low, so 2ⁿ is a maximum.

## Gel electrophoresis in more depth (19.1.9)

DNA fragments move through agarose gel towards the **anode** (positive electrode) because their phosphate groups carry negative charges. The gel's mesh slows longer fragments more, so **shorter fragments travel further**. A **ladder** of known fragment sizes, run in a neighbouring well, lets you estimate the size of each band.

**Worked example: a double digest.** A circular plasmid of 4000 base pairs (bp) has one site for enzyme X, at position 500, and two sites for enzyme Y, at 1700 and 3200.

| Digest | Cuts | Fragments |
|---|---|---|
| X alone | 1 | One linear fragment of **4000 bp** |
| Y alone | 2 | 3200 − 1700 = **1500 bp** and 4000 − 1500 = **2500 bp** |
| X and Y | 3 | 500 → 1700 = **1200 bp**; 1700 → 3200 = **1500 bp**; 3200 → 4000 → 500 = 800 + 500 = **1300 bp** |

Check each digest adds to 4000 bp. In the X + Y lane the 1200 bp band moves furthest. A circle cut n times gives n fragments.

## Microarrays (19.1.10)

A microarray carries thousands of single-stranded DNA **probes** fixed at known positions.

- **Genome analysis**: sample DNA is fragmented, made single-stranded and labelled with a fluorescent tag. Fragments **hybridise** to complementary probes; fluorescent spots show which sequences (genes or alleles) the genome contains.
- **Gene expression**: mRNA is extracted and reverse transcribed to labelled cDNA. Only genes being transcribed give cDNA, so a fluorescent spot shows an active gene, and brighter spots show more mRNA.

**Interpreting a two-colour array.** cDNA from healthy cells is labelled green and from tumour cells red; both are applied to one array.

| Spot colour | Meaning |
|---|---|
| Green | Gene expressed in healthy cells only (or much more) |
| Red | Gene expressed in tumour cells only (or much more) |
| Yellow | Expressed in both at similar levels |
| No colour | Not expressed in either |

## Databases (19.1.11)

Examples include GenBank (nucleotide sequences), UniProt (protein sequences) and the Protein Data Bank (3D protein structures). Benefits to outline:

- Free, fast access for scientists worldwide; avoids repeating sequencing.
- A new sequence can be searched against all known ones (for example with the BLAST tool) to identify a gene, a species or a pathogen.
- Comparisons of sequences reveal evolutionary relationships (links to 17.3).
- Primers for PCR and probes for microarrays are designed from stored sequences.
- Protein structures help explain function and guide the design of drugs.

## Common mistakes

- Saying restriction enzymes "cut genes out" at random. They cut at specific recognition sequences.
- Giving ligase the job of forming hydrogen bonds. Ligase forms phosphodiester bonds.
- Writing that reverse transcriptase "makes mRNA". It makes cDNA from mRNA.
- Saying a marker shows the gene has been "taken up" only. A fluorescent product shows it is **expressed**.
- Forgetting that the annealing step needs **two** primers.
- Stating that DNA moves to the negative electrode.
- Saying a yellow microarray spot means "no expression".

## Exam technique

- **Explain the role of** an enzyme: name the substrate, what it does, and why that matters for the transfer.
- **Describe and explain** PCR: temperature, event and reason for each step, then Taq's thermostability.
- **Outline** microarrays or databases: short, distinct points.
- In data questions, show the subtraction for each fragment and check the total.

## Official syllabus

Cambridge International AS & A Level Biology 9700 syllabus for 2025, 2026 and 2027, Cambridge University Press & Assessment. Topic 19, Genetic technology, section 19.1 Principles of genetic technology, learning outcomes 1 to 11.
