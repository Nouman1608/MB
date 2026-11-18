---
title: "Cambridge A Level Biology (9700): Gene control"
resourceType: "study-guides"
subject: "biology"
level: ["a-levels"]
topic: "Inheritance"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9700"]
syllabusSeries: "For examination in 2025, 2026 and 2027"
stage: "A"
order: 16.3
syllabusTopics:
  - qualification: "a-level"
    topic: "inheritance-cambridge-alevel-biology"
    subtopic: "gene-control-cambridge-alevel-biology"
description: "A deep guide to 9700 section 16.3: structural and regulatory genes, inducible and repressible enzymes, the lac operon, transcription factors and DELLA proteins."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers section **16.3 Gene control** of the Cambridge International AS & A Level Biology 9700 syllabus for examination in 2025, 2026 and 2027. It is A Level content, examined in Paper 4. The [Inheritance study guide](/resources/a-level-biology-9700-inheritance/) introduces the lac operon and DELLA proteins briefly; this page explains each mechanism step by step and trains the skill examiners test most often in this section: predicting what happens when one part of the control system is changed by a mutation or a chemical. For recall use the [16.3 revision notes](/resources/cambridge-a-level-biology-9700-gene-control-cambridge-alevel-biology-revision-notes/); to test yourself use the [16.3 practice questions](/resources/cambridge-a-level-biology-9700-gene-control-cambridge-alevel-biology-practice/).

## What 16.3 asks you to do

| Outcome | In short |
|---|---|
| 16.3.1 | Describe the differences between structural and regulatory genes, and between repressible and inducible enzymes |
| 16.3.2 | Explain control of protein production in a prokaryote using the lac operon (the role of cAMP is not expected) |
| 16.3.3 | State that transcription factors are proteins that bind to DNA and increase or decrease the rate of transcription in eukaryotes |
| 16.3.4 | Explain how gibberellin activates genes by causing the breakdown of DELLA protein repressors |

## Why cells control genes

Every cell of an organism carries the same genes, but making every protein all the time would waste energy, amino acids and ribosomes. Bacteria in particular live in changing conditions: an enzyme that digests lactose is only worth making when lactose is present. Control usually acts at **transcription**: if a gene is not transcribed, no mRNA and no protein are made.

## Structural and regulatory genes

| | Structural gene | Regulatory gene |
|---|---|---|
| Codes for | A protein with a role in the cell's structure or metabolism, such as an enzyme or a transport protein | A protein that controls the expression of other genes, such as a repressor or a transcription factor |
| lac operon example | lacZ (β-galactosidase), lacY (lactose permease), lacA (transacetylase) | lacI, which codes for the lac repressor protein |

## Inducible and repressible enzymes

| | Inducible enzyme | Repressible enzyme |
|---|---|---|
| Normal state | Gene switched **off**; enzyme not made | Gene switched **on**; enzyme made |
| What changes it | Presence of the **substrate** (inducer) switches the gene on | Presence of the **end product** switches the gene off |
| Logic | Make the enzyme only when there is something to digest | Stop making a product when there is already enough |
| Example | β-galactosidase in the lac operon, induced by lactose | Enzymes that make the amino acid tryptophan in *E. coli*, repressed when tryptophan is plentiful |

## The lac operon in detail

An **operon** is a group of structural genes transcribed together as one mRNA, under the control of one promoter and operator.

**Parts, in order along the DNA:**

- **Regulatory gene (lacI)**, with its own promoter, transcribed all the time: codes for the **repressor protein**.
- **Promoter**: where RNA polymerase binds to start transcription.
- **Operator**: where the repressor protein binds.
- **Structural genes**: lacZ (β-galactosidase, which hydrolyses lactose into glucose and galactose), lacY (lactose permease, which transports lactose into the cell) and lacA (transacetylase).

**When lactose is absent:**

1. The repressor protein binds to the **operator**.
2. This prevents **RNA polymerase** from binding to the promoter (or from moving along the genes).
3. The structural genes are **not transcribed**; no β-galactosidase or permease is made.

**When lactose is present:**

1. Lactose enters the cell and **binds to the repressor** at a different site from the DNA-binding site.
2. The repressor **changes shape** and can no longer bind to the operator; it leaves the DNA.
3. RNA polymerase binds to the promoter and **transcribes all three structural genes** as one mRNA.
4. The enzymes are made; lactose is taken up and hydrolysed.

When the lactose has been used up, the repressor is free again, binds to the operator and transcription stops: the system switches itself off.

### Worked example 1: predicting the effects of mutations

Use the rule "follow the repressor". Ask: can it be made? Can it bind the operator? Can lactose remove it? Can RNA polymerase bind?

| Mutation | Lactose absent | Lactose present | Reasoning |
|---|---|---|---|
| lacI codes for a repressor that cannot bind the operator | Enzymes made | Enzymes made | Nothing blocks RNA polymerase, so the genes are always on |
| Operator changed so repressor cannot bind | Enzymes made | Enzymes made | Same outcome, caused by the binding site rather than the protein |
| Repressor cannot bind lactose | Not made | Not made | Lactose cannot remove the repressor, so the genes stay off |
| Promoter changed so RNA polymerase cannot bind | Not made | Not made | Transcription cannot start, whatever the repressor does |
| lacY non-functional | Not made | β-galactosidase made, but lactose is taken up slowly | The operon is switched on, but less lactose reaches the enzyme |

### Worked example 2: reading an induction curve

Illustrative data: β-galactosidase activity in a culture of *E. coli* growing on glucose. Lactose is added at 10 minutes; the glucose has already run out.

| Time / min | 0 | 10 | 15 | 20 | 30 | 60 | 120 |
|---|---|---|---|---|---|---|---|
| Activity / arbitrary units | 1 | 1 | 2 | 15 | 40 | 42 | 3 |

*Description.* Activity is very low until lactose is added, rises steeply between 15 and 30 minutes, levels off at about 40–42 units, then falls to 3 units by 120 minutes.

*Explanation.* The low starting value shows the repressor keeping the genes off. After lactose is added there is a short **lag** while lactose enters, binds the repressor and transcription and translation take place. Activity levels off when the rate of enzyme synthesis balances its breakdown and dilution as cells divide. The fall suggests the lactose has been **used up**: the repressor binds to the operator again, no new enzyme is made, and existing enzyme is broken down or diluted.

## Transcription factors in eukaryotes

**Transcription factors** are proteins that **bind to DNA**, usually near the promoter of a gene, and **increase or decrease the rate of transcription**. Some help RNA polymerase bind to the promoter and start transcription; others block it. This is how different cells in one organism express different genes, and how hormones switch genes on or off.

Notice the difference from bacteria: in the lac operon, one repressor controls several genes in one operon; in eukaryotes, each gene is usually controlled by several transcription factors acting together.

## Gibberellin and DELLA proteins

**DELLA proteins** are repressors. They do not bind to the gene directly; instead they **bind to and inhibit a transcription factor** that would otherwise promote transcription.

1. **Without gibberellin**: DELLA proteins inhibit the transcription factor, so the target genes are transcribed slowly or not at all.
2. **Gibberellin arrives** and binds to a **receptor** in the cell.
3. This causes the **DELLA proteins to be broken down**.
4. The transcription factor is released and can bind to the promoter of its target genes.
5. The **target genes are transcribed**. In the aleurone layer of barley this includes the gene for **amylase**; in stems, genes for growth that cause elongation.

### Worked example 3: annotated model answer

*Explain why a barley mutant whose DELLA proteins cannot be broken down fails to germinate normally, even though its embryo makes gibberellin.* (3 marks)

1. Gibberellin binds to its receptor, but the DELLA proteins remain. *(Identifies which step fails.)*
2. They continue to inhibit the transcription factor, so the **amylase gene is not transcribed** in the aleurone layer. *(Links the protein to the gene.)*
3. No amylase is made, starch in the endosperm is not hydrolysed, so the embryo lacks sugars for respiration and growth. *(Links the gene to the phenotype.)*

A mutant with **no functional DELLA protein** shows the opposite: target genes are transcribed **even without gibberellin**.

## Common mistakes

- Writing that the repressor binds to the **promoter**. It binds to the **operator**.
- Saying lactose "binds to the operator". Lactose binds to the **repressor**.
- Calling lacI a structural gene. It is a **regulatory** gene.
- Mixing up inducible and repressible: inducible enzymes are switched **on by substrate**; repressible enzymes are switched **off by product**.
- Saying gibberellin binds to DNA. It binds to a **receptor**, and its effect reaches DNA through DELLA breakdown.
- Writing that DELLA proteins are transcription factors. They **inhibit** a transcription factor.
- Including cAMP in a lac operon answer: it is not required, and an incorrect statement about it can cost the mark.

## Exam technique

- **Describe the differences** (16.3.1): give paired statements, for example "structural genes code for enzymes, whereas regulatory genes code for proteins that control other genes".
- **Explain** the lac operon (16.3.2): write both conditions, lactose absent and present, and name the repressor, operator, promoter and RNA polymerase.
- **State** (16.3.3): the syllabus sentence is enough: proteins that bind to DNA and increase or decrease the rate of transcription.
- **Predict** mutation effects: follow the repressor, then say whether RNA polymerase can transcribe.

## Next steps

Condense this with the [16.3 revision notes](/resources/cambridge-a-level-biology-9700-gene-control-cambridge-alevel-biology-revision-notes/), then try the [16.3 practice questions](/resources/cambridge-a-level-biology-9700-gene-control-cambridge-alevel-biology-practice/). The germination context is described in the [control and coordination in plants study guide](/resources/cambridge-a-level-biology-9700-control-and-coordination-in-plants-cambridge/), and transcription itself in the [nucleic acids and protein synthesis study guide](/resources/a-level-biology-9700-nucleic-acids-and-protein-synthesis/).
