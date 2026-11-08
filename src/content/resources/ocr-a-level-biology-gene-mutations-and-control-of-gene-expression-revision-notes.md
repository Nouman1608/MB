---
title: "OCR A Level Biology A: Gene mutations and control of gene expression (H420) -- Revision Notes"
seoTitle: "OCR A Level Biology Gene Expression Revision Notes"
resourceType: "revision-notes"
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
  - qualification: "a-level"
    topic: "genetics-evolution-and-ecosystems-ocr-alevel-biology"
    subtopic: "cellular-control-ocr-alevel-biology"
description: "Condensed revision notes on mutations, the lac operon, mRNA processing, cAMP, Hox genes, mitosis and apoptosis for OCR A Level Biology A (H420), 6.1.1."
author: "marlbridge-academic-team"
reviewer: "hina-mogul"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-12
featured: false
reviewNote: "2026-11-08: reviewed by hina-mogul."
---

These are condensed notes for OCR A Level Biology A (H420), written to the OCR specification Version 4.1 (April 2026), for first assessment in 2025. They cover module 6.1.1 Cellular control, learning outcomes (a) to (d). The full explanations and worked examples are in the [study guide](/resources/ocr-a-level-biology-gene-mutations-and-control-of-gene-expression/). When you are ready, try the [practice set](/resources/ocr-a-level-biology-gene-mutations-and-control-of-gene-expression-practice/). Course pages: the [OCR A Level Biology hub](/boards/ocr/a-level/biology/) and the [printable checklist](/checklists/ocr/a-level/biology/). The free [10-minute diagnostics](/diagnostics/) show which topics to prioritise. Codon background: [the genetic code, transcription and translation](/resources/ocr-a-level-biology-the-genetic-code-transcription-and-translation/).

## Specification map

| Outcome | One-line summary |
|---|---|
| 6.1.1(a) | Substitution, insertion, deletion; effects beneficial, neutral or harmful |
| 6.1.1(b) | Control at transcription (lac operon, transcription factors), after transcription (primary mRNA editing, intron removal) and after translation (cAMP activation) |
| 6.1.1(c) | Homeobox sequences conserved in plants, animals and fungi; Hox genes and body plans |
| 6.1.1(d) | Mitosis and apoptosis shape body form; cell cycle and apoptosis genes respond to internal and external stimuli |

## 6.1.1(a) Mutations

**Definition.** A gene mutation is a permanent alteration to the order of nucleotides in a gene.

| Mutation | Frame kept? | Typical effect |
|---|---|---|
| Substitution | Yes | Silent, missense (one amino acid changed) or nonsense (stop codon) |
| Insertion of 1 or 2 nucleotides | No | Frameshift: all later amino acids can change |
| Deletion of 1 or 2 nucleotides | No | Frameshift |
| Insertion or deletion of 3, 6, 9... nucleotides | Yes | Amino acids added or lost at that site only |

### Method: predicting the effect

1. Write the mRNA as triplets from the start codon.
2. Make the change, then re-split into triplets from the same start.
3. Translate both and compare.
4. Say which kind of change it is, then say what it does to the protein's shape and function.

### Must-know distinctions

- **Silent versus missense.** The code is degenerate, so an altered codon can still specify the same amino acid.
- **Missense versus nonsense.** Missense swaps one amino acid. Nonsense makes a stop codon and a shorter polypeptide.
- **Frameshift versus in-frame.** Only the number of nucleotides added or lost (multiple of three or not) decides this.
- **Beneficial, neutral, harmful.** The same allele can be harmful in one environment and beneficial in another (sickle cell allele and malaria).

### Small worked reminder

mRNA: AUG CAA UUC GGC UGA gives Met-Gln-Phe-Gly, then stop.

- CAA becomes CAG: both code for Gln, so **silent**.
- CAA becomes UAA: stop codon, so Met only (**nonsense**).
- UUC becomes UAC: Phe becomes Tyr (**missense**).
- First U of UUC deleted: AUG CAA UCG GCU GA, so Met-Gln-Ser-Ala (**frameshift**, and the stop is lost).
- GGAUCC (six nucleotides) inserted after CAA: Met-Gln-Gly-Ser-Phe-Gly, then stop (in frame; two amino acids added).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-biology-gene-mutations-and-stem-cells--01-mutation-types.webp" width="900" height="1108" alt="The same nine-base gene ATGCTTGGC is shown after each mutation with changed bases in gold and lost bases as dashed boxes. Substitution keeps nine bases, addition gives ten, deletion eight, duplication of GGC twelve, inversion of the last six bases (reads GCCAAG) keeps nine, and translocation moves CTT to the other end. OCR names only substitution, insertion and deletion." loading="lazy">
  <figcaption>Six mutation types shown as base strips; duplication, inversion and translocation are AQA only.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-biology-gene-mutations-and-stem-cells--02-mutation-effects.webp" width="900" height="1110" alt="The mRNA AUG CUU GGC ACC AAG GAU CGU UAG is read in triplets. A silent change (CUU to CUC) keeps Leu, a missense change (CUU to CCU) gives Pro, a nonsense change (AAG to UAG) stops the chain after four amino acids, one added G causes a frame shift so every later amino acid changes, and deleting three bases keeps the frame and loses only Leu." loading="lazy">
  <figcaption>Silent, missense, nonsense, frame shift and in-frame deletion followed through one mRNA.</figcaption>
</figure>


## 6.1.1(b) Control of gene expression

### Transcriptional level

| Feature of the lac operon | Role |
|---|---|
| lacI (regulatory gene) | Codes for the repressor protein |
| Promoter | Binding site for RNA polymerase |
| Operator | Binding site for the repressor, next to the structural genes |
| lacZ | Beta-galactosidase: hydrolyses lactose |
| lacY | Permease: lactose uptake |

| Lactose absent | Lactose present |
|---|---|
| Repressor binds the operator | Lactose binds the repressor and changes its shape |
| RNA polymerase blocked | Repressor leaves the operator |
| No transcription of lacZ and lacY | RNA polymerase transcribes lacZ and lacY |

**Reading mutant data.** Constitutive (always on) means a fault that stops the repressor working or binding: a faulty repressor gene, or an operator that the repressor cannot bind. A faulty promoter means always off, because RNA polymerase cannot bind.

**Eukaryotic transcription factors.** Proteins that bind to specific DNA sequences near genes. Activators help RNA polymerase to bind and start transcription. Repressors prevent it. A cell type is defined partly by which factors are active. You need the general role only, not named factors.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-biology-gene-mutations-and-stem-cells--03-lac-operon.webp" width="900" height="960" alt="Two panels show lacI (separate repressor gene), promoter, operator, lacZ and lacY. With no lactose the repressor sits on the operator and blocks RNA polymerase so the genes are off. With lactose present, lactose binds the repressor and changes its shape, it leaves the operator, RNA polymerase makes mRNA and the enzymes are made." loading="lazy">
  <figcaption>The lac operon with and without lactose.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-biology-gene-mutations-and-stem-cells--07-alternative-splicing.webp" width="900" height="970" alt="A pre-mRNA with five exons of 90, 60, 105, 45 and 72 nucleotides is spliced so introns are removed and exons joined. Keeping exon 1, exon 5 and one of exons 2, 3 or 4 gives mRNAs coding for 73, 88 and 68 amino acids." loading="lazy">
  <figcaption>Alternative splicing gives three polypeptides from one gene.</figcaption>
</figure>


### Post-transcriptional level

Sequence: transcription gives **primary mRNA** (exons and introns), introns are removed and exons are joined, giving **mature mRNA** which leaves the nucleus. Capping and a poly-A tail are also part of editing. Different exon combinations can give different polypeptides from one gene.

| Number to remember | Meaning |
|---|---|
| Nucleotides per codon | 3 |
| Amino acids | Coding nucleotides divided by 3, minus one for the stop codon |

**Worked reminder.** A primary mRNA of 1950 nucleotides contains introns totalling 1320. Exons: 1950 − 1320 = 630 nucleotides. Introns are 1320 / 1950 × 100 = **67.7%**. Codons: 630 / 3 = 210, so **209** amino acids if one is the stop codon.

### Post-translational level

Hormone binds a surface receptor, so the cell makes **cAMP**. cAMP binds an inactive protein (such as protein kinase A) and changes its shape, so it becomes active. The active enzyme can phosphorylate other proteins. This acts on proteins that already exist, so it needs no new transcription or translation.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-biology-gene-mutations-and-stem-cells--04-oestrogen-transcription-factor.webp" width="900" height="1060" alt="Oestrogen diffuses through the cell-surface membrane, binds a receptor in the cytoplasm to form a complex, the complex enters the nucleus through a nuclear pore, binds a base sequence next to the target gene, and RNA polymerase can then make mRNA." loading="lazy">
  <figcaption>Five steps by which oestrogen acts as a transcription factor.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-biology-gene-mutations-and-stem-cells--05-epigenetic-switch.webp" width="900" height="1200" alt="Acetylated histones hold DNA loosely so RNA polymerase can reach the gene and make mRNA. Without acetyl groups, and with methyl groups on the DNA, DNA is tight and the gene is off. The methylation pattern is copied when a cell divides, so both daughter cells keep it. The base sequence does not change." loading="lazy">
  <figcaption>Acetylation, methylation and their inheritance on cell division.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-biology-gene-mutations-and-stem-cells--09-cancer-genes.webp" width="900" height="940" alt="Normal control has a proto-oncogene go signal and a working tumour suppressor brake, giving 8 cells in 90 hours with a 30 hour cycle. A stuck-on oncogene (mutation or too little methylation) with an 18 hour cycle gives 32 cells. Losing the tumour suppressor gene (mutation or too much methylation) leaves division unchecked." loading="lazy">
  <figcaption>How oncogenes and loss of tumour suppressor genes lead to uncontrolled division.</figcaption>
</figure>


## 6.1.1(c) Body plans

- **Homeobox:** a conserved sequence of about 180 base pairs, coding for a DNA-binding domain of about 60 amino acids (180 / 3 = 60). Found in plants, animals and fungi. The proteins act as transcription factors.
- **Hox genes:** a subset of homeobox genes in animals. They sit in clusters. Their order along the chromosome matches the head-to-tail order in which they act.
- **Mutation:** a change in a Hox gene can change what forms in a body region (legs in place of antennae in a fly).
- **Why conserved:** a change in a gene that controls the whole layout is likely to be harmful, so natural selection removes it.

| Homeobox gene | Hox gene |
|---|---|
| Any gene containing the sequence | Subset of homeobox genes |
| Plants, animals and fungi | Animals |
| Regulates gene expression | Controls body plan along the head-to-tail axis |

## 6.1.1(d) Mitosis and apoptosis

| Process | Role in development | Key points |
|---|---|---|
| Mitosis | Increases cell number from the zygote; growth; replacement | Daughter cells genetically identical |
| Apoptosis | Programmed cell death that removes cells that are not needed or are damaged; shapes the body (separates digits, loses a tadpole tail) | Caspase enzymes; cell breaks into membrane-bound fragments; phagocytes engulf them; no inflammation |

**Balance.** Body form depends on cell division and cell death being balanced in the right place at the right time.

**Control.** The genes that regulate the cell cycle and apoptosis respond to internal stimuli (such as DNA damage) and external stimuli (such as growth factors and death signals from other cells).

**Worked reminder.** In *C. elegans*, 1090 somatic cells are made and 131 undergo apoptosis: 959 remain, and 131 / 1090 × 100 = 12.0% die. **Mitotic index** = cells in mitosis / total cells × 100. If 18 of 240 cells are dividing, index = **7.5%**.

## Quick self-test

1. State the three types of gene mutation named in the specification.
2. A codon CAA changes to CAG, and both code for Gln. Name this kind of change and say what happens to the polypeptide.
3. Six nucleotides are deleted from the middle of a coding sequence. Does a frameshift occur? Explain.
4. A single nucleotide is inserted near the start of a gene. Why is the effect usually greater than a substitution at the same place?
5. In the lac operon, what does the lacI gene code for?
6. Explain why lactose in the medium leads to beta-galactosidase being made.
7. A strain makes beta-galactosidase when no lactose is present. Suggest two possible causes.
8. State what happens to introns during mRNA processing.
9. Explain how cAMP can activate an enzyme.
10. A homeobox is 180 base pairs. How many amino acids are in the domain it codes for?
11. Give two roles of apoptosis in development.
12. A tissue sample shows 18 cells in mitosis out of 240. Calculate the mitotic index.

### Answers

1. Substitution, insertion, deletion.
2. A silent substitution. The same amino acid is coded for, so the polypeptide is unchanged.
3. No. Six is a multiple of three, so the reading frame is kept and two amino acids are lost.
4. It shifts the frame, so every codon after the insertion is read differently and the polypeptide can differ from there on, or end early.
5. The repressor protein.
6. Lactose binds the repressor and changes its shape, so the repressor cannot bind the operator. RNA polymerase can transcribe lacZ, so the enzyme is made.
7. A faulty repressor (from a mutation in lacI) or an operator that the repressor cannot bind.
8. They are removed from the primary mRNA and the exons are joined.
9. cAMP binds to the inactive enzyme and changes its shape, so it becomes active.
10. 180 / 3 = **60** amino acids.
11. Any two of: separating the digits; removing a tadpole's tail; removing cells that are damaged or not needed.
12. 18 / 240 × 100 = **7.5%**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-biology-gene-mutations-and-stem-cells--06-rna-interference.webp" width="900" height="1140" alt="An enzyme cuts double-stranded RNA into siRNA. One siRNA strand in a protein complex pairs with mRNA of matching sequence (example pairing GCUCCGUUAGCA with CGAGGCAAUCGU), and the mRNA is broken down so no protein is made. The gene is still transcribed." loading="lazy">
  <figcaption>How siRNA stops translation of one mRNA.</figcaption>
</figure>


## Where marks are usually lost

- Saying "the gene changes shape" or "the DNA is the enzyme". Name the molecule: the repressor, the polypeptide, the active site.
- Writing that lactose "turns off" the repressor gene. Say that lactose binds the repressor protein and changes its shape.
- Missing the word frameshift, or forgetting that a deletion of three nucleotides keeps the frame.
- Stating a mutation is harmful without saying how the protein's structure or function changes.
- Confusing the operator with the regulatory gene, or the promoter with the operator.
- Saying that introns are removed from DNA instead of from the primary mRNA.
- Describing apoptosis as cells being damaged, instead of programmed, controlled death.
- Giving a homeobox sequence and a Hox gene as the same thing.
- Not giving units or working in a percentage question: write the formula, then the answer.

## Frequently asked questions

**What is the difference between a homeobox sequence and a Hox gene?**
A homeobox is a DNA sequence that is similar and highly conserved in plants, animals and fungi. Hox genes are a group of genes that contain a homeobox and control the development of the body plan, so the two terms are not the same thing.

**What are the three levels of control of gene expression for OCR A Level Biology?**
OCR A Level Biology A (H420) section 6.1.1(b) covers control at the transcriptional level, such as the lac operon and transcription factors, the post-transcriptional level, such as removing introns from primary mRNA, and the post-translational level, such as the activation of proteins by cyclic AMP.

**What is apoptosis?**
Apoptosis is programmed, controlled cell death. It is not cell death caused by damage, and together with mitosis it shapes the body form during development.

**How do you explain why a mutation is harmful?**
Say how the change in the base sequence alters the amino acid sequence, and then how that changes the protein's structure or function, for example the shape of an enzyme's active site. Stating that a mutation is harmful without this link loses marks.

## Official syllabus

Source: OCR, A Level Biology A (H420), specification Version 4.1 (April 2026), first assessment 2025, module 6.1.1 Cellular control, learning outcomes (a) to (d).
