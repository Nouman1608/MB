---
title: "AQA A-level Biology (7402): Using genome projects"
resourceType: "study-guides"
subject: "biology"
level: ["a-levels"]
topic: "The control of gene expression"
boards: ["aqa"]
qualifications: ["a-level"]
stage: "A"
syllabusCodes: ["7402"]
syllabusSeries: "For first teaching 2015"
order: 8.3
syllabusTopics:
  - qualification: "a-level"
    topic: "the-control-of-gene-expression-aqa-alevel-biology"
    subtopic: "using-genome-projects-aqa-alevel-biology"
description: "Genome sequencing, the proteome, vaccine antigens and why complex genomes are hard to translate into proteins, for AQA A-level Biology 7402 section 3.8.3."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---
This guide covers section 3.8.3 of the AQA AS and A-level Biology specification (7401/7402), for first teaching 2015: *Using genome projects*. It is A-level only. The section is short, but questions on it usually give unfamiliar data about an organism's genome and ask you to interpret it, so you need to understand the reasoning, not just the four statements.

The broader unit page, [genome projects and gene technologies](/resources/aqa-a-level-biology-genome-projects-and-gene-technologies/), introduces the section alongside the gene technologies that follow it. This page goes deeper into what a genome sequence can and cannot tell you. Test yourself with the [revision notes on using genome projects](/resources/aqa-a-level-biology-7402-using-genome-projects-aqa-alevel-biology-revision-notes/) and the [practice questions on using genome projects](/resources/aqa-a-level-biology-7402-using-genome-projects-aqa-alevel-biology-practice/).

## What the specification says

- Sequencing projects have read the genomes of a wide range of organisms, including humans.
- Determining the genome of simpler organisms allows the sequences of the proteins that derive from the genetic code (the **proteome**) to be determined. This may have many applications, including the identification of potential antigens for use in vaccine production.
- In more complex organisms, the presence of non-coding DNA and of regulatory genes means that knowledge of the genome cannot easily be translated into the proteome.
- Sequencing methods are continuously updated and have become automated.

## Key definitions

- **Genome:** the complete set of genes in a cell, as defined in section 3.4.2. In practice a genome project reads all the DNA bases, coding and non-coding.
- **Proteome:** the full range of proteins that a cell is able to produce (also section 3.4.2).
- **Sequencing:** working out the order of bases in a length of DNA.
- **Regulatory gene:** a gene whose product controls whether other genes are expressed, for example by coding for a transcription factor.

Notice the word *able*. The proteome is every protein the cell could make, not just the ones it is making at one moment.

## From genome to proteome in a simple organism

A bacterium is a "simpler organism" in the sense the specification means. Its genome is small, almost all of it codes for proteins, and its genes contain no introns. That means a computer can scan the sequence for start triplets and stop triplets in the same reading frame and read each coding sequence directly into an amino acid sequence using the genetic code.

### Worked example 1: predicting the size of a polypeptide

A bacterial gene runs from its start triplet to its stop triplet, inclusive, over 1,233 bases.

1. Number of triplets = 1,233 ÷ 3 = 411.
2. The stop triplet codes for no amino acid, so the polypeptide has 411 − 1 = **410 amino acids**.

Because the bacterium has no introns, this is the actual length of the polypeptide made. In a eukaryote, the same calculation done on the gene sequence would overestimate the length if the gene contained introns.

## Application: finding antigens for vaccines

An antigen is a molecule, usually a protein, that triggers an immune response. A vaccine needs an antigen from the pathogen that the immune system can respond to. Before genome sequencing, possible antigens had to be found by growing the pathogen and testing its proteins one at a time, which is slow and impossible for pathogens that are hard to culture.

With the genome sequence, the order of reasoning is:

1. Sequence the pathogen's genome.
2. Predict its proteome by translating every coding sequence.
3. Identify proteins likely to be on the surface of the pathogen, because those are the ones antibodies and immune cells can reach.
4. Compare genomes from several strains of the pathogen and keep proteins whose sequences are the same in all of them, so that the vaccine protects against every strain.
5. Make the chosen proteins (for example, using recombinant DNA technology, section 3.8.4) and test whether they produce an immune response.

### Worked example 2: narrowing down (invented data)

A sequenced bacterial pathogen is predicted to make 2,000 proteins. Analysis finds that 180 are likely to be surface proteins. Of these, 40 have identical sequences in all 12 strains sequenced. The 40 proteins represent 40 ÷ 2,000 × 100 = **2%** of the predicted proteome. Testing 40 candidates is far quicker than testing 2,000, which is the practical value of knowing the proteome.

Note the word "potential" in the specification. A predicted protein is only a candidate until it has been shown to trigger a protective immune response.

## Why complex genomes are harder

In a complex organism such as a mammal or a flowering plant, knowing the base sequence does not easily give you the proteome, for reasons you can link to other sections:

- **Non-coding DNA.** Most of the genome does not code for polypeptides. Genes contain **introns**, which are removed from pre-mRNA by splicing, and there are long stretches of non-coding repeats between genes. Finding where each gene starts and ends, and which parts are exons, is much harder than in a bacterium.
- **Regulatory genes.** Many genes code for proteins that switch other genes on and off. The sequence of a gene does not tell you when, where or whether it is expressed.
- **Different cells, different proteins.** Every body cell has the same genome, but each cell type translates only part of it (section 3.8.2.1). Knowing the genome does not tell you which proteins a particular tissue makes.
- **Splicing and modification.** The mRNA translated is not a direct copy of the gene, and many proteins are modified after translation, so the final protein is not fully predicted by the DNA sequence.

### Worked example 3: comparing genomes (invented data)

| Organism | Genome size (million base pairs) | Number of protein-coding genes | Percentage of genome that codes for protein |
|---|---|---|---|
| A (bacterium) | 4.6 | 4,300 | 88 |
| B (single-celled eukaryote) | 12.1 | 6,000 | 70 |
| C (mammal) | 3,100 | 20,000 | 1.5 |

**(a) Genes per million base pairs.** A: 4,300 ÷ 4.6 = 935. C: 20,000 ÷ 3,100 = 6.5. Organism C has about 145 times fewer genes per million base pairs.

**(b) Interpretation.** C's genome is about 670 times bigger than A's (3,100 ÷ 4.6) but has fewer than five times as many genes, and only 1.5% codes for protein. Most of C's genome is non-coding DNA, so predicting C's proteome from its sequence is much harder than for A.

**(c) A trap.** Genome size does not tell you how complex an organism is or how many proteins it makes. Always use the coding percentage and gene number together.

## Automated sequencing

Early sequencing was done by hand: fragments were separated and the base order was read by eye, a few hundred bases at a time. Methods have been continuously updated. Modern machines use fluorescent labels detected by computer, read very many fragments at once, and assemble the overlapping sequences automatically. The cost and time needed to sequence a genome have fallen enormously, so whole genomes of many organisms, and of many individuals of one species, can now be read and compared. The project to sequence the human genome was declared complete in 2003; it is now routine to sequence a single human genome.

The specification only asks you to know that sequencing is continuously updated and automated. You do not need to describe a particular sequencing method.

## Common mistakes

- Defining the proteome as "the proteins a cell is making". It is the full range of proteins a cell is able to produce.
- Saying the human genome "cannot be sequenced". It has been sequenced; the difficulty is predicting the proteome from it.
- Forgetting the stop triplet when calculating the number of amino acids from a gene length.
- Saying all antigens in a vaccine must be found by genome sequencing. Sequencing identifies *potential* antigens that still need testing.
- Claiming a bigger genome means more genes. Organism C above shows this is not so.

## Exam technique

- **Explain** why a bacterium's proteome can be found from its genome: little non-coding DNA, no introns, few regulatory genes.
- **Suggest** why a vaccine based on a genome might not protect against every strain: the antigen chosen may differ between strains, or new strains may arise by mutation.
- **Use the data**: when a table of genome sizes is given, calculate a ratio or percentage, then say what it shows about non-coding DNA.

## Frequently asked questions

**Why is it easier to find the proteome of a bacterium than of a human?**
A bacterial genome has little non-coding DNA, no introns and few regulatory genes, so its coding sequences can be read directly into amino acid sequences. A human genome is mostly non-coding and its genes are controlled by regulatory genes.

**How do genome projects help vaccine development?**
Knowing the pathogen's genome lets scientists predict its proteome and pick out potential antigens, such as surface proteins shared by all strains, to test in a vaccine.

## Official syllabus

AQA AS and A-level Biology (7401/7402) specification, for first teaching 2015, section 3.8.3 (A-level only), published by AQA.
