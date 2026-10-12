---
title: "OCR A Level Biology A: Gene mutations and control of gene expression (H420)"
seoTitle: "OCR A Level Biology Gene Mutations and Gene Expression"
resourceType: "study-guides"
subject: "biology"
level: ["a-levels"]
topic: "Gene mutations and control of gene expression"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H420"]
syllabusSeries: "Version 4.1 (April 2026), for first assessment in 2025"
order: 228
syllabusTopics:
  - qualification: "a-level"
    topic: "genetics-evolution-and-ecosystems-ocr-alevel-biology"
description: "Study guide to gene mutations, the lac operon, transcription factors, Hox genes, mitosis and apoptosis for OCR A Level Biology A (H420), module 6.1.1."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This guide is for OCR A Level Biology A (H420), written to the OCR specification Version 4.1 (April 2026), for first assessment in 2025. It covers module 6.1.1, Cellular control, learning outcomes (a) to (d): gene mutations, the control of gene expression at three levels, the genetic control of body plans, and mitosis and apoptosis in development. Use the [revision notes](/resources/ocr-a-level-biology-gene-mutations-and-control-of-gene-expression-revision-notes/) for quick recall and the [practice set](/resources/ocr-a-level-biology-gene-mutations-and-control-of-gene-expression-practice/) to test yourself. Course pages: the [OCR A Level Biology hub](/boards/ocr/a-level/biology/) and the [printable checklist](/checklists/ocr/a-level/biology/). Take the free [10-minute diagnostics](/diagnostics/) to check where you stand. Background on codons and transcription is in [the genetic code, transcription and translation](/resources/ocr-a-level-biology-the-genetic-code-transcription-and-translation/).

Data are invented for teaching unless stated.

## What this unit covers

| Specification | What you must be able to do |
|---|---|
| 6.1.1(a) | Describe substitution, insertion and deletion of one or more nucleotides, and explain their possible effects on protein production and function (beneficial, neutral or harmful) |
| 6.1.1(b) | Explain control of gene expression at the transcriptional level (lac operon; the general role of transcription factors in eukaryotes), the post-transcriptional level (editing of primary mRNA, removal of introns) and the post-translational level (activation of proteins by cyclic AMP) |
| 6.1.1(c) | Explain that Homeobox sequences are similar and highly conserved in plants, animals and fungi and regulate gene expression, and the role of Hox genes in body plan development |
| 6.1.1(d) | Explain the importance of mitosis and apoptosis in the development of body form, including how genes regulating the cell cycle and apoptosis respond to internal and external stimuli |

You do not have to recall specific transcription factors.

## 6.1.1(a) Gene mutations

A **gene mutation** is a permanent alteration to the order of nucleotides in a gene. Three kinds are named.

| Type | What happens | Length of gene |
|---|---|---|
| Substitution | One nucleotide is swapped for another | Unchanged |
| Insertion | One or more extra nucleotides are added | Longer |
| Deletion | One or more nucleotides are lost | Shorter |

### Effects on the polypeptide

Ask three questions in order.

1. **Does the codon still code for the same amino acid?** The code is degenerate, so a substitution (often in the third base) can leave the amino acid unchanged. This is a **silent** change.
2. **If the amino acid changes, is it a different amino acid (missense) or a stop codon (nonsense)?** A new stop codon ends translation early and gives a shorter polypeptide.
3. **For an insertion or deletion, is the number of nucleotides a multiple of three?** If not, the reading frame shifts and every codon after the change is read differently. This is a **frameshift**. If it is a multiple of three, the frame is kept and only the amino acids at that site are added or lost.

A change in primary structure can alter the R-group interactions that hold the tertiary structure, so an enzyme's active site or a receptor's binding site may change shape.

### Worked example 1: following a mutation through

Codons are read from the standard genetic code.

mRNA: AUG GAA CCU UGG AAA UCU GGU UAA. Polypeptide: Met-Glu-Pro-Trp-Lys-Ser-Gly, then stop.

| Change to the mRNA | New reading | Result |
|---|---|---|
| GAA becomes GAG | Met-Glu-Pro-Trp-Lys-Ser-Gly | Silent: unchanged |
| CCU becomes CGU | Met-Glu-Arg-Trp-Lys-Ser-Gly | Missense: one amino acid differs |
| UGG becomes UGA | Met-Glu-Pro, stop | Nonsense: three amino acids only |
| One A inserted after the sixth base | AUG GAA ACC UUG GAA AUC UGG UUA A | Frameshift: Met-Glu-Thr-Leu-Glu-Ile-Trp-Leu, and the stop codon is no longer in frame |
| Whole CCU deleted | AUG GAA UGG AAA UCU GGU UAA | In frame: Met-Glu-Trp-Lys-Ser-Gly, one amino acid lost |

Deleting the first C of CCU also gives a frameshift (Met-Glu-Leu-Gly-Asn-Leu-Val). An insertion followed by a deletion nearby can restore the frame: an A inserted after the sixth base and the first U of UGG deleted gives Met-Glu-Thr-Trp-Lys-Ser-Gly, with only one amino acid changed.

### Beneficial, neutral or harmful

- **Harmful.** The sickle cell allele has the codon GAG for Glu changed to GUG for Val at position 6 of the beta polypeptide of haemoglobin. Haemoglobin S can form fibres in low oxygen and distorts red blood cells. Another example is the loss of three nucleotides in the CFTR gene that removes one phenylalanine in cystic fibrosis.
- **Neutral.** Silent substitutions, and changes in non-coding DNA or away from an active site, may have no effect on the phenotype.
- **Beneficial.** A mutation that gives a selective advantage in a particular environment, for example a change that makes a bacterium resistant to an antibiotic, or the sickle cell allele giving heterozygotes protection against malaria where malaria is common. The same allele is harmful in homozygotes, so "beneficial" depends on the context.

## 6.1.1(b) Control of gene expression

A cell does not need every protein at all times, so the use of a gene's information is controlled at three stages.

### Transcriptional level: the lac operon

In prokaryotes, genes for related functions can be grouped as an **operon** under one promoter. The *lac* operon of *E. coli* controls the use of lactose.

- **lacZ** codes for beta-galactosidase, which hydrolyses lactose to glucose and galactose.
- **lacY** codes for lactose permease, which carries lactose into the cell.
- A **promoter** is where RNA polymerase binds, and an **operator** is the stretch of DNA next to it where the repressor binds.
- **lacI**, the regulatory gene (a separate gene nearby), is always expressed at a low level and codes for the **repressor protein**.

| Condition | Repressor | Operator | RNA polymerase | Structural genes |
|---|---|---|---|---|
| No lactose | Active, binds operator | Covered | Blocked | Not transcribed |
| Lactose present | Lactose (strictly, allolactose made from it) binds the repressor and changes its shape | Free | Transcribes the structural genes | Enzymes made |

When lactose disappears, the repressor binds the operator again and transcription stops, saving the cell the cost of unneeded enzymes.

### Worked example 2: interpreting lac mutants

Beta-galactosidase activity (arbitrary units) was measured in strains grown with glucose only, then with lactose.

| Strain | Glucose only | Lactose present |
|---|---|---|
| Normal | 2 | 800 |
| Faulty repressor gene (lacI) | 780 | 810 |
| Operator cannot bind repressor | 760 | 790 |
| Faulty promoter | 1 | 2 |

- Normal: induction is 800 / 2 = 400-fold.
- Faulty repressor gene: activity is high with no lactose. No active repressor is made, so the operator is never covered.
- Operator mutant: the same result, but the fault is in the DNA binding site, not the repressor protein.
- Faulty promoter: low in both. RNA polymerase cannot bind, so lactose cannot switch the genes on.

### Transcription factors in eukaryotes

Eukaryotic genes are switched by **transcription factors**: proteins that bind to specific DNA sequences near a gene, or to other proteins bound there. Some **activators** help RNA polymerase bind to the promoter so transcription starts; others are **repressors** that prevent this. A signal such as a hormone can alter whether a factor is active. A steroid hormone, for example, can bind a receptor to form a complex that acts as a transcription factor. Different cell types hold different active factors, so they transcribe different genes from the same DNA. You are not required to recall specific factors.

### Post-transcriptional level: processing primary mRNA

In eukaryotes the first RNA made is **primary mRNA** (pre-mRNA). It contains **exons**, which stay, and **introns**, which are removed. Introns are cut out and exons joined (**splicing**) to give **mature mRNA**, which then leaves the nucleus through a nuclear pore. Other editing adds a cap at one end and a tail of adenine nucleotides at the other, which protect the mRNA. Exons can be joined in different combinations, so one gene can give more than one polypeptide.

**Worked example 3.** A gene has four exons of 210, 156, 183 and 264 nucleotides, separated by introns of 480, 1150 and 390 nucleotides. Primary transcript: 813 + 2020 = 2833 nucleotides. Introns are 2020 / 2833 × 100 = **71.3%** of it. Treating the 813 nucleotides as all coding with a stop codon, 813 / 3 = 271 codons, so **270** amino acids plus the stop codon.

### Post-translational level: activation of proteins by cyclic AMP

Some proteins are made in an inactive form and only work after a later change. **Cyclic AMP (cAMP)** is a signalling molecule made inside a cell when a hormone binds a receptor on the surface. cAMP binds to an inactive enzyme, such as protein kinase A, changes its shape and activates it. The active enzyme then adds phosphate groups to other enzymes, so their activity changes. Adrenaline acting on liver cells works this way (see [hormonal communication and blood glucose control](/resources/ocr-a-level-biology-hormonal-communication-and-blood-glucose-control/)). The protein is already present, so the response is faster than waiting for new transcription and translation.

## 6.1.1(c) Genetic control of body plans

A **body plan** is the basic layout of an organism: which end is the head, which is the tail, and where limbs or other structures form.

**Homeobox genes** contain a short sequence, about 180 base pairs, which codes for a protein domain of about 60 amino acids that binds to DNA. These proteins are transcription factors that switch on or off other genes that control development. Homeobox sequences are **similar and highly conserved** in plants, animals and fungi, which suggests strong selection against change: a mutation in a gene that controls the body plan is likely to be harmful.

**Hox genes** are a subset of homeobox genes in animals. They are found in clusters, and the order of genes along the chromosome matches the order of the body regions in which they are expressed, from head to tail. Each Hox gene is expressed in a region and switches on the genes that make the right structures there. Some features:

- A mutation in one Hox gene can put a structure in the wrong place, as when a fly develops legs where antennae should be.
- Vertebrates have several clusters; humans have four.

**Worked example 4.** The homeodomain of a protein in a fruit fly and the matching region in a mouse are compared (invented figures): 54 of 60 amino acids are identical. Identity = 54 / 60 × 100 = **90%**.

## 6.1.1(d) Mitosis and apoptosis in development

**Mitosis** produces genetically identical diploid cells. In development it increases the number of cells from the zygote, supplies the cells for growth, and replaces cells lost or damaged. 

**Apoptosis** is programmed cell death. A cell is broken down in an orderly way: enzymes called caspases break down the cell contents, the cell shrinks and forms membrane-bound fragments, and phagocytes engulf them. Because the contents are not released, there is no inflammation.

Apoptosis shapes the body:

- Cells between developing fingers and toes die, so the digits separate.
- The tail of a tadpole is lost as it becomes a frog.

Development is a balance between division and death. In the roundworm *Caenorhabditis elegans*, 1090 somatic cells are made in the hermaphrodite and 131 undergo apoptosis, leaving 959. Apoptosis removes 131 / 1090 × 100 = **12.0%** of the cells that mitosis produces.

**Control.** The genes that regulate the cell cycle and apoptosis respond to **internal stimuli** (for example, DNA damage detected inside the cell) and **external stimuli** (for example, signals from other cells such as growth factors or death signals). A cell in which the cell cycle genes are damaged may keep dividing, and a cell in which the apoptosis genes are damaged may escape death.

## Common errors

- Writing "the mutation changes the amino acid" for every substitution. Check the codon: it may be silent.
- Saying every deletion causes a frameshift. A deletion of three nucleotides is in frame.
- Saying lactose switches off the repressor gene. Lactose changes the shape of the repressor protein.
- Saying introns are removed from DNA. They are removed from the primary mRNA.
- Confusing apoptosis with damage-caused cell death. Apoptosis is controlled and tidy.

## Official syllabus

Source: OCR, A Level Biology A (H420), specification Version 4.1 (April 2026), first assessment 2025, module 6.1.1 Cellular control, learning outcomes (a) to (d).
