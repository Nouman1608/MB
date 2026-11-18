---
title: "AQA A-level Biology (7402): DNA and protein synthesis"
resourceType: "study-guides"
subject: "biology"
level: ["a-levels"]
topic: "Genetic information, variation and relationships between organisms"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7402"]
syllabusSeries: "For first teaching 2015"
order: 4.2
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "genetic-information-variation-and-relationships-between-organisms-aqa-alevel-biology"
    subtopic: "dna-and-protein-synthesis-aqa-alevel-biology"
description: "Study guide to AQA A-level Biology 7402 section 3.4.2: genome and proteome, mRNA and tRNA, transcription, splicing, translation and the role of ATP."
author: "marlbridge-academic-team"
reviewer: "hina-mogul"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hina-mogul (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers **3.4.2 DNA and protein synthesis** from AQA AS and A-level Biology (7401/7402), in Topic 4, *Genetic information, variation and relationships between organisms*. It is AS content, examined on both AS papers and on A-level Papers 1 and 3. The broader guide to [DNA, genes, chromosomes and protein synthesis](/resources/aqa-a-level-biology-dna-genes-chromosomes-and-protein-synthesis/) gives the step-by-step sequences for transcription and translation with one codon problem; this page adds the base-pairing logic across all three nucleic acids, working backwards from tRNA, splicing problems and inhibitor experiments. Use the [DNA and protein synthesis revision notes](/resources/aqa-a-level-biology-7402-dna-and-protein-synthesis-aqa-alevel-biology-revision-notes/) for recall and the [DNA and protein synthesis practice questions](/resources/aqa-a-level-biology-7402-dna-and-protein-synthesis-aqa-alevel-biology-practice/) to test yourself.

## What the specification asks for

| Statement | What you must be able to do |
|---|---|
| Genome and proteome | Define both and explain why cells with the same genome can have different proteomes |
| Structure of mRNA and tRNA | Describe and compare them, and compare both with DNA |
| Transcription; the role of RNA polymerase | Describe how mRNA is made and what RNA polymerase joins |
| Prokaryotes: transcription gives mRNA directly. Eukaryotes: pre-mRNA, then splicing | Explain the difference and what splicing removes |
| Translation; roles of ribosomes, tRNA and ATP | Describe how a polypeptide is assembled |
| Relate base sequences to amino acid sequences when given the genetic code | Convert between DNA, mRNA, tRNA and amino acids using data provided |
| Interpret data from experimental work on the role of nucleic acids | Draw conclusions from labelling and inhibitor experiments |

You will not be asked to recall specific codons and their amino acids: a codon table or list is always given.

## Genome and proteome

The **genome** is the complete set of genes in a cell. The **proteome** is the full range of proteins that a cell is able to produce. All body cells of an organism (apart from gametes and a few exceptions) have the same genome, but a liver cell and a skin cell make different ranges of proteins because they use different genes. Questions may ask you to explain this in terms of which genes are transcribed; how genes are switched on and off is A-level content in 3.8.

## Three nucleic acids compared

| Feature | DNA | mRNA | tRNA |
|---|---|---|---|
| Strands | Two, as a double helix | One, linear | One, folded into a clover-leaf shape |
| Sugar | Deoxyribose | Ribose | Ribose |
| Bases | A, T, C, G | A, U, C, G | A, U, C, G |
| Hydrogen bonds between bases | Along the whole length | None | In parts, holding the fold |
| Three-base unit | Triplet | Codon | Anticodon |
| Other key feature | Very long | Shorter than the gene it copies | Amino acid binding site; carries one specific amino acid |

## The base-pairing chain

Every conversion question uses complementary base pairing. Learn the chain:

```
DNA template strand   T  A  C  G  G  A
mRNA codon            A  U  G  C  C  U      (complementary to template; U replaces T)
tRNA anticodon        U  A  C  G  G  A      (complementary to codon)
```

Two shortcuts follow. The mRNA has the same sequence as the DNA **coding** (non-template) strand, with U in place of T. The tRNA anticodon has the same sequence as the DNA **template** strand, with U in place of T.

## Transcription in detail

1. Hydrogen bonds between the two DNA strands break in the region of the gene, exposing the bases. Only one strand, the template strand, is used.
2. Free RNA nucleotides in the nucleus pair with complementary bases on the template strand.
3. **RNA polymerase** moves along the template and joins adjacent RNA nucleotides, forming phosphodiester bonds by condensation reactions.
4. Behind RNA polymerase, the DNA strands re-form hydrogen bonds.
5. At the end of the gene, the RNA molecule is released.

In a **prokaryote**, this RNA is mRNA and can be translated straight away. In a **eukaryote**, it is **pre-mRNA**, containing copies of both exons and introns. **Splicing** removes the introns and joins the exons to form mRNA, which leaves the nucleus through a nuclear pore.

## Worked example 1: splicing (invented sequence)

A pre-mRNA is shown with introns in lower case:

```
AUG GCU | guaagu | UUC GAA | gcaaguag | UGG UAA
```

```
Remove introns:  AUG GCU UUC GAA UGG UAA
Length:          pre-mRNA 32 nucleotides → mRNA 18 nucleotides
Codons:          6, the last being a stop codon → 5 amino acids
```

The intron lengths need not be multiples of three; only the joined exons must keep the codons in frame.

## Translation in detail

1. The mRNA attaches to a ribosome. The ribosome moves along to the start codon.
2. A tRNA molecule with a complementary anticodon pairs with the codon by hydrogen bonding. It carries the amino acid that matches its anticodon.
3. A second tRNA pairs with the next codon. The ribosome can hold two tRNAs at a time.
4. A peptide bond forms between the two amino acids by a condensation reaction.
5. The ribosome moves along one codon. The first tRNA, now without its amino acid, leaves and can pick up another amino acid of the same type.
6. This continues until the ribosome reaches a stop codon. The polypeptide is released.

**The role of ATP.** ATP is hydrolysed to provide energy for attaching each amino acid to its tRNA and for forming the peptide bonds. A cell with an ATP shortage makes polypeptides more slowly.

**The role of ribosomes.** They hold the mRNA and two tRNAs in position so that codons and anticodons pair correctly, and they allow peptide bonds to form between the amino acids.

## Worked example 2: working backwards from tRNA (invented data)

The anticodons of the tRNAs used, in order, were UAC, CGA, GGU. Find the mRNA and the DNA template strand.

```
tRNA anticodons:     UAC  CGA  GGU
mRNA codons:         AUG  GCU  CCA     (complement of anticodons)
DNA template:        TAC  CGA  GGT     (complement of mRNA; T for U)
DNA coding strand:   ATG  GCT  CCA
```

Check with the shortcut: the template strand equals the anticodon sequence with T for U. It does.

## Interpreting experiments on nucleic acids

The specification asks you to interpret data from experimental work. Two common designs:

**Inhibitor experiments.** Cells are treated with a substance that stops one step. Reason through the chain: what is stopped, what therefore cannot happen next, and what you would measure.

| Inhibitor stops | Immediate effect | Effect on protein synthesis |
|---|---|---|
| RNA polymerase | No new mRNA | Stops once existing mRNA is broken down |
| Ribosome function | mRNA not translated | Stops quickly |
| ATP production | Amino acids not attached to tRNA; no peptide bonds | Slows or stops |
| Splicing (eukaryote) | Pre-mRNA not converted | Functional mRNA not produced |

**Worked example 3 (invented data).** Cells were given an RNA polymerase inhibitor at time 0. Incorporation of labelled amino acids into protein was 100% of the control at 0 h, 70% at 2 h and 15% at 6 h.

> Protein synthesis did not stop at once, because mRNA already present was still translated. It fell as existing mRNA was broken down and was not replaced. Fall at 6 h = 100 − 15 = 85 percentage points.

## Common mistakes

- Using T in mRNA or tRNA sequences.
- Writing the mRNA as identical to the template strand.
- Saying RNA polymerase "makes complementary base pairs": base pairing happens by hydrogen bonding; RNA polymerase joins nucleotides.
- Saying DNA polymerase is used in transcription.
- Saying splicing removes exons, or happens in the cytoplasm.
- Saying the tRNA "makes" the amino acid: it carries one specific amino acid.
- Counting the stop codon as an amino acid.

## Exam technique for AQA command words

| Command word | What earns the marks |
|---|---|
| Describe | Ordered steps, naming the molecules and enzymes involved |
| Explain | The reason for each step, for example "complementary base pairing ensures the correct amino acid is placed" |
| Use the data / table | Convert carefully, showing intermediate sequences |
| Suggest | Apply the chain to inhibitors or unfamiliar experiments |

## Where to go next

- [DNA and protein synthesis revision notes](/resources/aqa-a-level-biology-7402-dna-and-protein-synthesis-aqa-alevel-biology-revision-notes/)
- [DNA and protein synthesis practice questions](/resources/aqa-a-level-biology-7402-dna-and-protein-synthesis-aqa-alevel-biology-practice/)
- Previous sub-topic: [DNA, genes and chromosomes study guide](/resources/aqa-a-level-biology-7402-dna-genes-and-chromosomes-aqa-alevel-biology/)

## Official syllabus

AQA AS and A-level Biology specification (7401, 7402), for first teaching 2015, published by AQA. This guide is aligned to section 3.4.2.
