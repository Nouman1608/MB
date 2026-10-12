---
title: "AQA A-level Biology: Genome Projects and Gene Technologies (7402)"
seoTitle: "AQA A-level Biology Genome Projects and Gene Tech Guide"
resourceType: "study-guides"
subject: "biology"
level: ["a-levels"]
topic: "Genome Projects and Gene Technologies"
boards: ["aqa"]
qualifications: ["a-level"]
stage: "A"
syllabusCodes: ["7402"]
syllabusSeries: "For first teaching 2015"
order: 174
syllabusTopics:
  - qualification: "a-level"
    topic: "the-control-of-gene-expression-aqa-alevel-biology"
description: "Study guide to genome projects, recombinant DNA, PCR, probes, electrophoresis and genetic fingerprinting for AQA A-level Biology 7402 sections 3.8.3-3.8.4."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---
This guide covers AQA A-level Biology (7402) sections 3.8.3, 3.8.4.1, 3.8.4.2 and 3.8.4.3, as set out in the AQA AS and A-level Biology specification for first teaching 2015. All of this content is marked A-level only, so it is not part of AS. VNTRs sit in 3.8.4.3 in the specification, and this guide follows that numbering. For the other pages in this unit see the [revision notes](/resources/aqa-a-level-biology-genome-projects-and-gene-technologies-revision-notes/) and the [practice questions](/resources/aqa-a-level-biology-genome-projects-and-gene-technologies-practice/). Course pages: [AQA A-level Biology hub](/boards/aqa/a-level/biology/) and the [printable checklist](/checklists/aqa/a-level/biology/). To find weak spots first, try the [free diagnostics](/diagnostics/).

## What the specification asks for

| Section | Focus |
|---|---|
| 3.8.3 | Genome projects, proteome, vaccines, automation |
| 3.8.4.1 | cDNA, restriction enzymes, gene machine, PCR, transformed host cells, marker genes, issues |
| 3.8.4.2 | Probes, hybridisation, screening, genetic counselling, personalised medicine |
| 3.8.4.3 | VNTRs, electrophoresis, genetic fingerprinting and its uses |

## 3.8.3 Using genome projects

Sequencing projects have read the genomes of many organisms, including humans. Sequencing methods are continuously updated and are now automated.

The proteome is the full set of proteins that a cell or organism can make. In a simple organism such as a bacterium, most of the genome codes for proteins and there are few regulatory sequences. Once you know the genome, you can use the genetic code to work out the amino acid sequences of the proteins. This helps identify potential antigens for vaccine production: you look for pathogen proteins the immune system could recognise, then make one and use it in a vaccine.

Complex organisms are different. Their genomes contain a large amount of non-coding DNA and many regulatory genes. Regulatory genes switch other genes on and off. Knowing the genome sequence therefore does not easily give you the proteome.

**Worked example (data supplied).** A bacterium has a genome of 5.2 million base pairs, of which 85% codes for proteins. A mammal has a genome of 3.2 billion base pairs, of which 1.5% codes for proteins.

1. Bacterium coding DNA: 5 200 000 × 0.85 = 4 420 000 base pairs.
2. Bacterium non-coding DNA: 5 200 000 − 4 420 000 = 780 000 base pairs.
3. Mammal coding DNA: 3 200 000 000 × 0.015 = 48 000 000 base pairs.
4. Mammal non-coding DNA is 98.5% of the genome.

The bacterial proteome can be worked out from the sequence. In the mammal almost all the DNA does not code for protein, so the sequence alone cannot predict the proteome.

## 3.8.4.1 Recombinant DNA technology

Recombinant DNA technology moves a fragment of DNA from one organism, or species, into another. The recipient is transgenic. It works because the genetic code, transcription and translation are universal, so the transferred gene can be translated.

### Making the DNA fragment

There are three methods.

- **Reverse transcriptase.** Isolate mRNA for the wanted protein from a cell that makes a lot of it. Reverse transcriptase makes a single strand of complementary DNA (cDNA) using the mRNA as template. DNA polymerase then makes the second strand. The mRNA has already had its introns removed, so the cDNA has no introns.
- **Restriction enzymes.** A restriction endonuclease cuts DNA at a specific base sequence called a recognition site. Each enzyme fits only its own site because of its active site shape. Many cut in a staggered way, leaving short single-stranded ends called sticky ends.
- **Gene machine.** The base sequence of the gene is entered into a machine that builds the DNA from nucleotides. No cell, mRNA or intron is involved.

**Worked example.** The enzyme EcoRI has the recognition site GAATTC and cuts after the G in each strand. A 62-base-pair piece of DNA reads (top strand only):

TTACGGAATTCCGATTAGCAGTCCGGAATTCTTAGCCATGGATCCAAGTCGAATTCAGGCTA

1. Find each GAATTC: it starts at bases 6, 26 and 51.
2. Cut after the G, so the cuts fall after bases 6, 26 and 51.
3. Fragment lengths (top strand): 6, 20, 25 and 11 bases.
4. Check: 6 + 20 + 25 + 11 = 62.

Three sites give four fragments from a linear piece. A circular plasmid with three sites gives three.

### Amplifying DNA in vitro: PCR

The polymerase chain reaction copies a DNA fragment many times in a machine called a thermocycler. The mixture contains the template DNA, a pair of primers, free nucleotides and a heat-stable DNA polymerase (Taq polymerase, from a bacterium that lives in hot water). Each cycle has three stages.

1. **Denature, about 95 °C.** Heat breaks the hydrogen bonds holding the two strands together.
2. **Anneal, roughly 50 to 65 °C.** The mixture is cooled so that primers bind to the complementary sequence at the ends of the target.
3. **Extend, about 72 °C.** Taq polymerase extends each primer from its 3' end, building new complementary strands.

The number of copies doubles each cycle, so the number of molecules is starting number × 2ⁿ for n cycles.

**Worked example.** One template molecule is amplified for 30 cycles. Copies = 2³⁰ = 1 073 741 824, about 1.07 × 10⁹. A sample with 4 starting molecules after 6 cycles gives 4 × 2⁶ = 256.

A heat-stable polymerase is used so it is not denatured at each 95 °C step.

### Amplifying DNA in vivo: transformed host cells

1. Cut the vector (usually a plasmid) with the same restriction endonuclease, so that it has sticky ends complementary to those on the fragment.
2. Add the fragment and DNA ligase. Ligase forms phosphodiester bonds and joins the sticky ends, giving recombinant DNA.
3. The fragment needs a **promoter** before it so that RNA polymerase binds, and a **terminator** after it so that transcription stops. These may be added to the fragment.
4. Mix the plasmids with host cells, often bacteria, and treat them so the cells take the plasmid up. This is transformation.
5. Culture the cells. Each time they divide, the plasmid is copied.

Only a small proportion of cells take up the plasmid, so **marker genes** detect transformed cells. A marker gene may give antibiotic resistance or make a fluorescent protein, so transformed cells survive on a selective medium or can be seen. You will not be asked to recall particular marker genes.

**Worked example (data supplied).** Bacteria are treated with a plasmid carrying an antibiotic-resistance marker. Plated on nutrient agar, 312 colonies grow. Plated on agar with the antibiotic, 41 colonies grow. The fraction transformed is 41 ÷ 312 × 100 = 13.1%. The 271 other colonies did not take up the plasmid.

### Issues to evaluate

You must evaluate ethical, financial and social issues in agriculture, industry and medicine, and balance humanitarian gains against opposition from environmentalists and anti-globalisation activists. Link recombinant DNA to gene therapy, in which a functional allele is delivered to a patient's cells.

| Area | Possible benefit | Possible concern |
|---|---|---|
| Agriculture | Crops with higher yield or added nutrients may reduce hunger | Gene flow to wild relatives; effects on other organisms; monoculture |
| Industry | Bacteria can make useful proteins cheaply | Patents raise prices |
| Medicine | Proteins made without extracting them from animals; gene therapy may treat disease | High cost; unequal access; long-term effects unknown |

Anti-globalisation arguments focus on ownership, such as company patents. Humanitarian arguments focus on food, health and cost. Weigh both and reach a judgement.

## 3.8.4.2 Probes, hybridisation and screening

A DNA probe is a short single-stranded piece of DNA with a base sequence complementary to part of a target allele. It is labelled, either with a radioactive isotope (detected on X-ray film) or with a fluorescent dye (detected by its light). In hybridisation, DNA from the patient is separated into single strands. The probe is added, and it binds only where the sequences are complementary, forming hydrogen bonds.

**Worked example.** A normal allele has the region 5' CCTAGCTTACGGATC 3'. A harmful allele has A in place of C at the tenth base: 5' CCTAGCTTAAGGATC 3'. The probe for the harmful allele is the complement of this strand. Written 5' to 3' it is GATCCTTAAGCTAGG. Against the normal allele it would mismatch at one base, so a probe for the harmful allele binds firmly only to the harmful allele under suitable conditions. A positive signal means the allele is present.

Probes screen patients for heritable conditions, drug responses and health risks. The information is used in:

- **Genetic counselling.** A counsellor explains the chance of passing on a condition, the options, and what a result means.
- **Personalised medicine.** Knowing a patient's alleles lets doctors choose drugs and doses that suit them, reducing side effects.

**Worked example.** A woman's brother has a recessive condition and her parents do not. Her chance of being a carrier is 2/3. Her partner is from a group in which 1 in 30 people are carriers (data supplied). Chance a child is affected = 2/3 × 1/30 × 1/4 = 1/180, about 0.56%. If she is tested and found to be a carrier, it becomes 1/30 × 1/4 = 1/120, about 0.83%.

Evaluating screening means weighing early treatment and informed choice against anxiety, cost, privacy and possible discrimination.

## 3.8.4.3 Genetic fingerprinting

The genome contains many **variable number tandem repeats (VNTRs)**: short base sequences repeated in a row, with the number of repeats varying between people. The chance of two individuals having the same VNTRs is very low.

### The technique

1. Extract DNA from a sample.
2. Amplify the VNTR regions by PCR, using primers on either side of them.
3. Separate the fragments by gel electrophoresis.
4. Make the fragments visible with a probe label, a fluorescent dye or a stain.

**Gel electrophoresis.** Phosphate groups give DNA an overall negative charge. Fragments are loaded into wells in a gel and an electric current is applied. DNA moves towards the positive electrode. The gel acts as a mesh, so shorter fragments move further in a given time. Fragments of the same length form a band. A ladder of known sizes lets you estimate sizes in the other lanes.

**Worked example (paternity).** Band sizes in kilobases:

| Lane | Bands |
|---|---|
| Mother | 9.0, 5.0, 4.0, 2.0 |
| Child | 9.0, 6.5, 5.0, 3.5, 2.0 |
| Man A | 9.0, 6.5, 3.5, 1.5 |
| Man B | 6.5, 4.0, 2.5, 1.5 |

1. Bands in the child that the mother lacks: 6.5 and 3.5. These must come from the father.
2. Man A has both 6.5 and 3.5, so he could be the father.
3. Man B has 6.5 but not 3.5, so he is excluded.

If the chances of matching at five independent places are 0.1, 0.05, 0.2, 0.08 and 0.125, the chance of a chance match is 0.1 × 0.05 × 0.2 × 0.08 × 0.125 = 0.00001, which is 1 in 100 000.

### Uses

- **Forensic science:** compare crime-scene DNA with suspects, or identify remains.
- **Medical diagnosis:** establish genetic relationships and identify individuals or samples reliably.
- **Animal and plant breeding:** check parentage, avoid inbreeding, and measure genetic variability in a population so breeders can keep diversity.

Fingerprints also show genetic relationships (more shared bands means closer relatives) and genetic variability within a population (fewer different patterns means less variability).

## Common errors

- Saying cDNA is made from DNA. It is made from mRNA.
- Saying ligase cuts DNA. It joins it. Restriction enzymes cut.
- Forgetting that mRNA used for cDNA has no introns, which is why bacteria can use it.
- Saying DNA moves to the negative electrode. It is negatively charged, so it moves to the positive one.
- Saying larger fragments travel further. Smaller ones do.
- Writing that the probe has the same sequence as the allele. It is complementary.

## Official syllabus

AQA AS and A-level Biology specification (7401 and 7402), for first teaching 2015, sections 3.8.3, 3.8.4.1, 3.8.4.2 and 3.8.4.3 (version 1.5), published by AQA.
