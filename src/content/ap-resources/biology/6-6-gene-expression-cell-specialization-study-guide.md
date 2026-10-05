---
resourceId: "mb-ap-bio-6.6-study-guide"
title: "Gene Expression and Cell Specialization: Study Guide (Biology 6.6)"
description: "How cells with the same genome become different: transcription factors at promoters and enhancers, repressors that block transcription, combinations of regulators, and small RNAs that silence genes."
course: "biology"
unit: 6
topics: ["6.6"]
resourceType: "study-guide"
prerequisites:
  - "Regulatory sequences, regulatory proteins and operons"
  - "Transcription by RNA polymerase and translation at the ribosome"
  - "Epigenetic marks on DNA and histones"
prerequisiteResources: ["mb-ap-bio-6.5-study-guide"]
learningObjectives:
  - "Explain how general transcription factors and RNA polymerase assemble at a promoter, and how activators at enhancers raise the rate of transcription"
  - "Explain why an enhancer can work from far upstream or downstream of the start site"
  - "Explain how repressor proteins bound to DNA block transcription"
  - "Use the idea of combinations of transcription factors to predict which genes a cell type expresses"
  - "Describe how microRNAs and siRNAs reduce gene expression after transcription"
  - "Support a claim about gene regulation with evidence from reporter-gene and RNA data"
skills: ["1", "2", "5", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Only percentages and ratios are needed. Percentage of full activity = test value ÷ full-construct value × 100"
related: ["mb-ap-bio-6.6-revision-notes", "mb-ap-bio-6.6-practice", "mb-ap-bio-6.6-checklist"]
next: "mb-ap-bio-6.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Almost every cell in your body has the same genes. Cells specialise because they express different genes, at different levels: differential gene expression."
  - "RNA polymerase and general transcription factors bind the promoter. Activators bind enhancers, which can sit far upstream or downstream of the start site, and greatly raise the rate of transcription."
  - "Negative regulators (repressors) bind DNA and block transcription, for example at silencer sequences."
  - "Each gene needs a particular combination of transcription factors. Each cell type has its own set, so it switches on its own set of genes."
  - "Small RNAs, such as microRNAs and siRNAs, base-pair with mRNA and block translation or cause the mRNA to be broken down."
faqs:
  - question: "If every cell has the same genes, why does a nerve cell not make insulin?"
    answer: "The insulin gene is present in a nerve cell, but the nerve cell lacks the combination of activators the insulin gene's control region needs, and the gene's chromatin is packed away. So the gene is not transcribed."
  - question: "Is an enhancer a gene?"
    answer: "No. An enhancer is a regulatory DNA sequence. It does not code for a protein. It is a binding site for activator proteins that make transcription of a nearby gene more likely."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## One genome, many kinds of cell

You started as a single cell. That cell divided by mitosis, so nearly every cell in your body carries the same DNA. Yet a nerve cell, a muscle cell and a pancreatic beta cell look and work very differently. Beta cells make insulin; developing red blood cells make haemoglobin. Each cell type still carries the gene for the other's protein. It simply does not use it.

This is **differential gene expression**: different cells express different subsets of the same genome. The proteins a cell makes decide its structure and its job, so gene regulation is what turns one genome into many cell types. In [Topic 6.5](/advanced-course-resources/biology/6-5-regulation-gene-expression-study-guide/) you saw that regulatory proteins bind regulatory DNA sequences. This topic shows how that works in eukaryotic cells, and adds a second layer of control by small RNA molecules.

## Starting transcription at a promoter

In a eukaryotic cell, RNA polymerase cannot find a gene on its own. It needs helper proteins called **transcription factors**.

1. **The promoter** is a DNA sequence just upstream of the transcription start site. Many promoters include a short sequence rich in T and A, the **TATA box**, roughly 25 to 35 base pairs before the start site.
2. **General transcription factors** bind the promoter first. They are needed at nearly every gene.
3. **RNA polymerase** then binds to the promoter–factor complex. Transcription can begin, but on its own this complex starts transcription only rarely. The result is a low, "basal" rate.

High rates of transcription need extra proteins that are specific to particular genes and cell types.

## Enhancers and activators: turning transcription up

An **enhancer** is a regulatory DNA sequence that binds **activators**, the gene-specific transcription factors. Enhancers have three surprising features:

- They can be **far** from the gene, sometimes many thousands of base pairs away.
- They can be **upstream** of the start site, **downstream** of it, or even inside an intron.
- They still act on their own gene, because DNA is flexible.

**How a distant enhancer works.** The DNA between the enhancer and the promoter bends into a loop. This brings the activators on the enhancer into contact with a group of **mediator** proteins, which in turn contact the general transcription factors and RNA polymerase at the promoter (Figure 1). The activators help the whole complex assemble and start transcription much more often. More activator bound means a higher rate of transcription, more mRNA and, usually, more protein.

<figure>
<svg viewBox="0 0 640 350" role="img" aria-labelledby="loop-title loop-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="loop-title">An enhancer far from a gene is brought close to the promoter by DNA bending</title>
<desc id="loop-desc">A strand of DNA, drawn as a thick line, runs from left to right. On the left it bends up into a large loop. At the top of the loop is a box labelled enhancer, with two round activator proteins, A1 and A2, bound to it. The loop brings the activators into contact with a group of mediator proteins, drawn as a dashed rounded box. The mediator touches RNA polymerase two, a large oval, which sits with small ovals for general transcription factors on the promoter, labelled TATA box. A bent arrow marks the transcription start site, and the gene is a long box to the right.</desc>
<rect x="0" y="0" width="640" height="350" fill="#ffffff"/>
<path d="M20 270 H90 C140 270 110 100 210 100 C300 100 310 190 300 235 C295 262 305 270 335 270 H620" fill="none" stroke="#1d2b44" stroke-width="4"/>
<rect x="170" y="88" width="80" height="24" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="210" y="105" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2b44">Enhancer</text>
<text x="210" y="58" text-anchor="middle" font-size="12" fill="#1d2b44">may be thousands of base pairs</text>
<text x="210" y="73" text-anchor="middle" font-size="12" fill="#1d2b44">upstream or downstream of the gene</text>
<circle cx="268" cy="104" r="16" fill="#1d2b44"/>
<text x="268" y="109" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">A1</text>
<circle cx="300" cy="122" r="16" fill="#1d2b44"/>
<text x="300" y="127" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">A2</text>
<text x="345" y="100" font-size="13" fill="#1d2b44">Activators bound</text>
<text x="345" y="116" font-size="13" fill="#1d2b44">to the enhancer</text>
<rect x="312" y="134" width="90" height="34" rx="12" fill="#ffffff" stroke="#1d2b44" stroke-width="2" stroke-dasharray="5 3"/>
<text x="357" y="156" text-anchor="middle" font-size="12" fill="#1d2b44">Mediator</text>
<ellipse cx="400" cy="226" rx="34" ry="22" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="400" y="224" text-anchor="middle" font-size="11" fill="#1d2b44">RNA</text>
<text x="400" y="237" text-anchor="middle" font-size="11" fill="#1d2b44">pol II</text>
<line x1="365" y1="168" x2="385" y2="205" stroke="#1d2b44" stroke-width="3"/>
<ellipse cx="342" cy="248" rx="13" ry="9" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<ellipse cx="366" cy="248" rx="13" ry="9" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="330" y="258" width="100" height="24" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="380" y="304" text-anchor="middle" font-size="12" fill="#1d2b44">Promoter</text>
<text x="380" y="319" text-anchor="middle" font-size="12" fill="#1d2b44">(TATA box)</text>
<text x="285" y="306" text-anchor="end" font-size="12" fill="#1d2b44">General transcription</text>
<text x="285" y="321" text-anchor="end" font-size="12" fill="#1d2b44">factors (small ovals)</text>
<line x1="288" y1="300" x2="336" y2="255" stroke="#1d2b44" stroke-width="1"/>
<rect x="455" y="258" width="160" height="24" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="535" y="275" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2b44">Gene</text>
<path d="M450 282 V312 H485" fill="none" stroke="#1d2b44" stroke-width="2"/>
<polygon points="485,307 495,312 485,317" fill="#1d2b44"/>
<text x="500" y="316" font-size="12" fill="#1d2b44">start site</text>
<text x="20" y="300" font-size="12" fill="#1d2b44">DNA (thick line)</text>
</svg>
<figcaption>Figure 1. A model of transcription initiation in a eukaryotic cell. The DNA loop lets activators on a distant enhancer touch the proteins at the promoter. Not to scale; the real loop can be thousands of base pairs long.</figcaption>
</figure>

## Repressors: turning transcription down

Regulation also works in the negative direction. **Negative regulatory molecules**, usually repressor proteins, bind to DNA and **block transcription**. They can:

- bind a **silencer** sequence and stop the transcription complex from assembling;
- sit on or next to an enhancer, so activators cannot bind;
- bind near the promoter, so RNA polymerase cannot start.

You met the same idea in the lac operon, where a repressor on the operator blocked RNA polymerase. In eukaryotes, a gene's control region often has binding sites for both activators and repressors. The balance between them decides the rate of transcription.

## Combinations of transcription factors

A human cell uses only a limited number of different activator types, yet it must control thousands of genes in hundreds of cell types. The solution is **combinatorial control**: each gene's control region has binding sites for a particular **combination** of activators, and the gene is switched on strongly only when that whole combination is present.

Here is a model with four activators, A to D, and three genes.

| Gene | Activators its enhancer needs |
|---|---|
| gene 1 | A and B |
| gene 2 | A and C |
| gene 3 | B and D |

| Cell type | Activators present | Genes switched on |
|---|---|---|
| cell X | A, B, D | genes 1 and 3 |
| cell Y | A, C | gene 2 |
| cell Z | B, C, D | gene 3 |

Every cell contains all three genes. Activator A is in both X and Y, but it switches on different genes in each, because its partners differ. A small set of regulators, used in different combinations, gives each cell type its own pattern of gene expression, and so its own products and functions.

## From regulation to phenotype

Differential gene expression explains how cells specialise:

- A muscle cell expresses genes for contractile proteins such as actin and myosin at high levels, so it can contract.
- A beta cell in the pancreas expresses the insulin gene, so it can secrete insulin.
- A change in regulation, such as a missing activator or a damaged enhancer, can change **how much** of a protein is made, or **in which cells** it is made. This can change the phenotype of a cell, a tissue or the whole organism, even if the protein's own coding sequence is normal.

## Small RNAs: control after transcription

Some genes code for RNA molecules that are never translated but regulate other genes. Two important kinds are short, about 21 to 23 nucleotides long:

- **MicroRNAs (miRNAs).** A miRNA gene is transcribed into RNA that folds into a hairpin. Enzymes cut out a short single strand, which is held in a protein complex. The miRNA base-pairs with a complementary sequence on target mRNAs. In animals the match is often partial and usually in the 3′ untranslated region. The result is that translation is blocked, or the mRNA is broken down, or both. One miRNA can regulate many different mRNAs.
- **Small interfering RNAs (siRNAs).** These are cut from long double-stranded RNA, such as the RNA of some viruses. They work in the same protein complex but usually match their target exactly, which leads to the target mRNA being cut and destroyed.

<figure>
<svg viewBox="0 0 640 300" role="img" aria-labelledby="mir-title mir-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="mir-title">How a microRNA reduces expression of a target gene</title>
<desc id="mir-desc">Flow chart in four numbered boxes joined by arrows. Box 1: a microRNA gene is transcribed into RNA that folds back on itself into a hairpin. Box 2: enzymes cut the hairpin into a short single strand about 22 nucleotides long, held in a protein complex. Box 3: the microRNA base-pairs with a complementary sequence on a target mRNA, usually in its 3 prime untranslated region. Box 4 splits into two outcomes: translation is blocked, or the mRNA is broken down. Either way, less protein is made. The DNA of the target gene is not changed.</desc>
<rect x="0" y="0" width="640" height="300" fill="#ffffff"/>
<rect x="20" y="20" width="280" height="100" rx="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="36" y="46" font-size="14" font-weight="700" fill="#1d2b44">1. Transcribe</text>
<text x="36" y="68" font-size="13" fill="#1d2b44">A miRNA gene is transcribed. The RNA</text>
<text x="36" y="86" font-size="13" fill="#1d2b44">folds back on itself into a hairpin.</text>
<text x="36" y="104" font-size="13" fill="#1d2b44">The miRNA is never translated.</text>
<line x1="300" y1="70" x2="330" y2="70" stroke="#1d2b44" stroke-width="2"/>
<polygon points="330,64 340,70 330,76" fill="#1d2b44"/>
<rect x="340" y="20" width="280" height="100" rx="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="356" y="46" font-size="14" font-weight="700" fill="#1d2b44">2. Cut and load</text>
<text x="356" y="68" font-size="13" fill="#1d2b44">Enzymes cut out a single strand about</text>
<text x="356" y="86" font-size="13" fill="#1d2b44">22 nucleotides long. A protein</text>
<text x="356" y="104" font-size="13" fill="#1d2b44">complex holds it.</text>
<line x1="480" y1="120" x2="480" y2="140" stroke="#1d2b44" stroke-width="2"/>
<line x1="480" y1="140" x2="160" y2="140" stroke="#1d2b44" stroke-width="2"/>
<line x1="160" y1="140" x2="160" y2="152" stroke="#1d2b44" stroke-width="2"/>
<polygon points="154,152 160,162 166,152" fill="#1d2b44"/>
<rect x="20" y="162" width="280" height="118" rx="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="36" y="188" font-size="14" font-weight="700" fill="#1d2b44">3. Base-pair</text>
<text x="36" y="210" font-size="13" fill="#1d2b44">The miRNA pairs with a matching</text>
<text x="36" y="228" font-size="13" fill="#1d2b44">sequence on a target mRNA, usually</text>
<text x="36" y="246" font-size="13" fill="#1d2b44">in the 3′ untranslated region.</text>
<line x1="300" y1="221" x2="330" y2="221" stroke="#1d2b44" stroke-width="2"/>
<polygon points="330,215 340,221 330,227" fill="#1d2b44"/>
<rect x="340" y="162" width="280" height="118" rx="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<text x="356" y="188" font-size="14" font-weight="700" fill="#1d2b44">4. Silence (either or both)</text>
<text x="356" y="210" font-size="13" fill="#1d2b44">(a) ribosomes are blocked: less</text>
<text x="356" y="228" font-size="13" fill="#1d2b44">translation; (b) the mRNA is broken</text>
<text x="356" y="246" font-size="13" fill="#1d2b44">down. Result: less protein.</text>
<text x="356" y="268" font-size="12" font-style="italic" fill="#1d2b44">The target gene's DNA is unchanged.</text>
</svg>
<figcaption>Figure 2. How a microRNA reduces expression of a target gene. Numbered boxes are steps in order; the dashed box shows the possible outcomes.</figcaption>
</figure>

Researchers use this natural system as a tool. Adding double-stranded RNA that matches a chosen gene triggers **RNA interference (RNAi)**, lowering that gene's expression so its function can be studied. The gene's DNA is not changed, so the effect wears off as the added RNA is used up.

| Level of control | Molecule that regulates | Effect |
|---|---|---|
| chromatin (Topic 6.5) | enzymes adding or removing methyl and acetyl groups | gene accessible or packed away |
| start of transcription | general transcription factors, activators, repressors | rate of mRNA production |
| after transcription | miRNAs and siRNAs | less translation or faster mRNA breakdown |

## Worked example 1: finding enhancers with a reporter gene

**Question.** A fictional mouse gene, *Kd1*, is expressed strongly in kidney cells but hardly at all in liver cells. Researchers join its control region to a **reporter gene** that makes a light-emitting enzyme; the amount of light shows how much transcription the control region drives. The control region contains a promoter, a region E1 about 3000 base pairs upstream, a region R about 800 base pairs upstream, and a region E2 inside the first intron, downstream of the start site. Each version, with one or more regions deleted (Δ), is put into kidney cells (light units; data fictional).

| Construct | Light units | % of full-length |
|---|---|---|
| full-length | 1000 | 100 |
| ΔE1 | 380 | 38 |
| ΔE2 | 450 | 45 |
| ΔE1 and ΔE2 | 30 | 3.0 |
| ΔR | 2100 | 210 |
| Δpromoter | 2 | 0.2 |

The full-length construct gives 25 units in liver cells.

(a) Identify the role of E1, E2, R and the promoter. Support each claim with data.
(b) Explain why the full-length construct gives so much more light in kidney than in liver cells.

**(a) Claims and evidence.**

1. **Promoter: essential.** Without it, activity falls to 0.2% (2 ÷ 1000 × 100). RNA polymerase and the general transcription factors have nowhere to assemble.
2. **E1 and E2: enhancers.** Removing E1 cuts activity to 38%; removing E2 cuts it to 45%. Removing both leaves only 3.0%, near the basal level. So each region **raises** transcription.
3. **The two enhancers work together.** If each enhancer multiplied the rate independently, removing both would leave about 0.38 × 0.45 = 0.171, or 17%, of full activity. The measured value, 3.0%, is far lower. Each enhancer is much more effective when the other is present.
4. **E2 is downstream.** It lies inside an intron, yet it still enhances transcription. The position of an enhancer, upstream or downstream, does not stop it working.
5. **R: silencer.** Removing R **raises** activity to 210% (2.1 times full-length). So R normally **lowers** transcription, most likely by binding a repressor.

**(b) Tissue difference.** Liver cells give 25 units, only 2.5% of the kidney value, or 1/40. Both cell types received the same DNA. The difference must come from the proteins inside the cells: kidney cells contain the activators that bind E1 and E2; liver cells lack them, or contain more of the repressor that binds R. This is differential gene expression caused by different sets of transcription factors.

**Limits.** A reporter gene in a cell culture is a model. It shows what the control region *can* do, but the gene in its normal place on the chromosome may also be affected by chromatin packing.

## Worked example 2: supporting a claim about a microRNA

**Question.** In fictional muscle cells, a microRNA called miR-X is suspected of controlling protein P. Researchers measure P mRNA and P protein, relative to untreated cells, under four conditions.

| Condition | P mRNA | P protein | Protein ÷ mRNA |
|---|---|---|---|
| untreated (miR-X present) | 1.0 | 1.0 | 1.0 |
| miR-X blocked by a complementary RNA | 1.9 | 4.2 | 2.2 |
| P mRNA made without the miR-X binding site | 2.0 | 4.0 | 2.0 |
| unrelated control RNA added | 1.0 | 1.05 | 1.05 |

Make a claim about how miR-X affects protein P, and support it with evidence and reasoning.

1. **Claim.** miR-X reduces the amount of protein P by base-pairing with P mRNA. It does this in two ways, to a similar extent: it blocks translation and it causes the mRNA to be broken down.
2. **Evidence that miR-X is responsible.** Blocking miR-X raises P protein 4.2-fold. The unrelated control RNA has almost no effect (1.05), so the rise is not just a result of adding RNA to the cells.
3. **Evidence that it acts on the mRNA itself.** Removing the binding site from P mRNA gives almost the same rise (4.0-fold) as blocking miR-X. miR-X needs to pair with that site to work.
4. **Evidence for two effects.** P mRNA roughly doubles (1.9 and 2.0), so miR-X normally speeds up mRNA breakdown. But protein rises about **twice as much** as mRNA: protein per mRNA goes from 1.0 to 2.2 (4.2 ÷ 1.9) and 2.0 (4.0 ÷ 2.0). Each mRNA is translated about twice as often when miR-X cannot bind, so miR-X also blocks translation. The two effects are about equal (about 2-fold each), and together they multiply: 1.9 × 2.2 ≈ 4.2.
5. **Reasoning.** Base-pairing between a small RNA and its target mRNA lowers gene expression after transcription. Muscle cells that make miR-X will therefore have less protein P than cells that do not, which is one way cell types differ even when both transcribe the same gene.

## Common misconceptions

- **"Different cells have different genes."** Almost all cells have the same genome. They differ in which genes they **express**.
- **"Enhancers must be just upstream of the gene."** They can be far upstream, downstream or inside introns. DNA looping brings them close to the promoter.
- **"An activator binds the promoter."** General transcription factors bind the promoter. Activators bind enhancers and act on the promoter complex through mediator proteins.
- **"One transcription factor controls one gene."** Most genes need a combination of factors, and one factor can help control many genes.
- **"miRNAs change the DNA of the target gene."** They act on **mRNA**, after transcription. The gene is unchanged.
- **"If mRNA level does not change, the protein level cannot change."** Small RNAs can block translation, lowering protein without much change in mRNA.
- **"Transcription is either on or off."** Activators and repressors set a **rate**, which controls how much protein is made.

## Where this leads

Changes to DNA sequences, in coding regions or in regulatory sequences like enhancers and promoters, are the subject of [Topic 6.7, Mutations](/advanced-course-resources/biology/6-7-mutations-study-guide/). Before moving on, try the [practice questions](/advanced-course-resources/biology/6-6-gene-expression-cell-specialization-practice/), then use the [revision notes](/advanced-course-resources/biology/6-6-gene-expression-cell-specialization-revision-notes/) and the [checklist](/advanced-course-resources/biology/6-6-gene-expression-cell-specialization-checklist/).
