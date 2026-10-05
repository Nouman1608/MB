---
resourceId: "mb-ap-bio-6.4-practice"
title: "Translation: Practice Questions (Biology 6.4)"
description: "Seven original Marlbridge practice questions on where translation happens, reading the genetic code, anticodons, retroviruses, antibiotic data and the universal code, with worked solutions and suggested mark points."
course: "biology"
unit: 6
topics: ["6.4"]
resourceType: "practice-questions"
prerequisites:
  - "How ribosomes, tRNA and mRNA work together in translation"
prerequisiteResources: ["mb-ap-bio-6.4-study-guide"]
learningObjectives:
  - "Translate an mRNA with a code table, starting at AUG and stopping at a stop codon"
  - "Match anticodons to codons and amino acids"
  - "Represent and reason about the flow of information in retroviruses"
  - "Analyse data on protein synthesis and predict the effects of disrupting translation"
skills: ["1", "2", "4", "5", "6"]
studyMinutes: 45
difficulty: "mixed"
calculator: "four-function"
calculatorNote: "Counting and simple percentages only. Each question lists the codons it needs; the full table is in the study guide"
related: ["mb-ap-bio-6.4-study-guide", "mb-ap-bio-6.4-revision-notes", "mb-ap-bio-6.4-checklist"]
next: "mb-ap-bio-6.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working or reasoning."
  - "Always find AUG first, then read in triplets until a stop codon."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. All genes, compounds and data sets are fictional. Each question lists the codons it needs; the full genetic code table is Table 1 in the [study guide](/advanced-course-resources/biology/6-4-translation-study-guide/). You do not need to memorise any codon except AUG (Met, start).

## Question 1 (multiple choice · foundation)

Why can a bacterium begin translating an mRNA before transcription of that mRNA is finished, while a human cell cannot?

- (A) Bacterial genes contain no stop codons, so translation can begin anywhere.
- (B) Bacteria have no nucleus, so ribosomes can reach the mRNA as soon as its 5′ end is made.
- (C) Bacterial ribosomes are attached to the DNA inside the nucleus.
- (D) Bacteria use a different genetic code that does not need a start codon.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** In prokaryotes, DNA, RNA polymerase and ribosomes share the cytoplasm. Ribosomes attach to the 5′ end of the mRNA while the rest is still being transcribed. In eukaryotes, mRNA is made and processed in the nucleus and must be exported first.

- (A) Bacterial genes do end with stop codons, and translation starts at a start codon.
- (C) Bacteria have no nucleus.
- (D) Bacteria use essentially the same code, including AUG as the start codon.
</details>

## Question 2 (multiple choice · core)

Part of an mRNA is 5′-GCAUGAAAUGCUGGUAAGCA-3′. Which polypeptide does it encode?
Codons: AUG Met · AAA Lys · UGC Cys · UGG Trp · UAA Stop · UGA Stop · GCA Ala · CUG Leu · GUA Val · AGC Ser · UAC Tyr · UUU Phe · ACG Thr · ACC Thr

- (A) Met–Lys–Cys–Trp
- (B) Ala
- (C) Met–Leu–Val–Ser
- (D) Tyr–Phe–Thr–Thr

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The first AUG starts at the third base. Reading on in triplets: AUG | AAA | UGC | UGG | UAA. UAA is a stop codon, so the polypeptide is Met–Lys–Cys–Trp.

- (B) reads from the very first base: GCA (Ala) then UGA (Stop). Translation does not start at the first base.
- (C) starts at a later AUG (inside AAAUGC), which is out of frame with the real start codon.
- (D) translates the complementary sequence (UAC UUU ACG ACC), as if the anticodons were the message.
</details>

## Question 3 (multiple choice · core)

A tRNA has the anticodon 3′-CCA-5′. Which amino acid does it carry?
Codons: GGU Gly · CCA Pro · ACC Thr · UGG Trp

- (A) Glycine (Gly)
- (B) Proline (Pro)
- (C) Threonine (Thr)
- (D) Tryptophan (Trp)

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The anticodon pairs antiparallel with the codon. Pairing 3′-CCA-5′ base by base gives 5′-GGU-3′, which codes for glycine. A tRNA carries the amino acid its anticodon's codon specifies.

- (B) looks up the anticodon itself as if it were a codon.
- (C) reverses the anticodon (5′-ACC-3′) and looks that up, without pairing.
- (D) reverses the anticodon and then pairs it, giving UGG; the bases pair but the ends are mismatched.
</details>

## Question 4 (visual representation · core)

The flowchart shows how a fictional retrovirus reproduces inside a host cell.

<figure>
<svg viewBox="0 0 680 250" role="img" aria-labelledby="q4-title q4-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="q4-title">Flowchart of a retrovirus life cycle in six steps</title>
<desc id="q4-desc">Six boxes joined by arrows. Top row, left to right: step 1, virus enters host cell and releases its RNA genome and enzyme P; step 2, enzyme P copies viral RNA into DNA; step 3, viral DNA joins a host chromosome. An arrow leads down to the bottom row, which runs right to left: step 4, host RNA polymerase makes viral mRNA; step 5, host ribosomes make viral proteins; step 6, new viruses assembled and released.</desc>
<rect x="0" y="0" width="680" height="250" fill="#ffffff"/>
<rect x="15" y="30" width="200" height="70" rx="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="240" y="30" width="200" height="70" rx="8" fill="#ffffff" stroke="#1d2b44" stroke-width="3"/>
<rect x="465" y="30" width="200" height="70" rx="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="465" y="150" width="200" height="70" rx="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="240" y="150" width="200" height="70" rx="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="15" y="150" width="200" height="70" rx="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="115" y="58" text-anchor="middle" font-size="12" fill="#1d2b44">1. Virus enters host cell,</text>
<text x="115" y="76" text-anchor="middle" font-size="12" fill="#1d2b44">releases RNA + enzyme P</text>
<text x="340" y="58" text-anchor="middle" font-size="12" font-weight="700" fill="#1d2b44">2. Enzyme P copies</text>
<text x="340" y="76" text-anchor="middle" font-size="12" font-weight="700" fill="#1d2b44">viral RNA into DNA</text>
<text x="565" y="58" text-anchor="middle" font-size="12" fill="#1d2b44">3. Viral DNA joins</text>
<text x="565" y="76" text-anchor="middle" font-size="12" fill="#1d2b44">a host chromosome</text>
<text x="565" y="178" text-anchor="middle" font-size="12" fill="#1d2b44">4. Host RNA polymerase</text>
<text x="565" y="196" text-anchor="middle" font-size="12" fill="#1d2b44">makes viral mRNA</text>
<text x="340" y="178" text-anchor="middle" font-size="12" fill="#1d2b44">5. Host ribosomes</text>
<text x="340" y="196" text-anchor="middle" font-size="12" fill="#1d2b44">make viral proteins</text>
<text x="115" y="178" text-anchor="middle" font-size="12" fill="#1d2b44">6. New viruses</text>
<text x="115" y="196" text-anchor="middle" font-size="12" fill="#1d2b44">assembled and released</text>
<line x1="215" y1="65" x2="230" y2="65" stroke="#1d2b44" stroke-width="2"/>
<polygon points="230,59 240,65 230,71" fill="#1d2b44"/>
<line x1="440" y1="65" x2="455" y2="65" stroke="#1d2b44" stroke-width="2"/>
<polygon points="455,59 465,65 455,71" fill="#1d2b44"/>
<line x1="565" y1="100" x2="565" y2="140" stroke="#1d2b44" stroke-width="2"/>
<polygon points="559,140 565,150 571,140" fill="#1d2b44"/>
<line x1="465" y1="185" x2="450" y2="185" stroke="#1d2b44" stroke-width="2"/>
<polygon points="450,179 440,185 450,191" fill="#1d2b44"/>
<line x1="240" y1="185" x2="225" y2="185" stroke="#1d2b44" stroke-width="2"/>
<polygon points="225,179 215,185 225,191" fill="#1d2b44"/>
<text x="340" y="242" text-anchor="middle" font-size="12" fill="#1d2b44">Step 2 is drawn with a thicker border and bold text.</text>
</svg>
<figcaption>Question 4 flowchart. Follow the arrows from step 1 to step 6.</figcaption>
</figure>

(a) Name enzyme P, and explain why step 2 is an unusual direction of information flow.
(b) Name the two steps that use the host cell's own molecules to express viral genes, and state what is made in each.
(c) A fictional drug D blocks enzyme P. Predict its effect (i) on cells treated before they are infected, and (ii) on viral protein production in cells whose chromosomes already carry viral DNA. Justify each prediction.
(d) Explain why, when an infected cell divides, both daughter cells carry the viral DNA.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** **Reverse transcriptase.** It copies RNA into DNA, the reverse of the usual DNA → RNA flow in transcription.

**(b)** **Step 4:** host RNA polymerase transcribes the viral DNA into **viral mRNA** (and new RNA genomes). **Step 5:** host ribosomes translate the viral mRNA into **viral proteins**.

**(c)** (i) No DNA copy is made, so nothing integrates and no viral genes are expressed: infection is **blocked**. (ii) **Little or no effect** on viral protein production. Steps 4 and 5 use host enzymes and ribosomes, not enzyme P, so integrated viral DNA can still be transcribed and translated. (The drug would still protect uninfected cells.)

**(d)** The viral DNA is part of a host chromosome, so it is **copied during DNA replication** along with the host's DNA, and each daughter cell gets a copy of that chromosome.

| Point | What earns it |
|---|---|
| 1 | Reverse transcriptase, with RNA → DNA as the reverse of transcription |
| 1 | Steps 4 and 5, each with its product |
| 1 | (i) blocked, because no DNA copy can integrate |
| 1 | (ii) little effect, because steps 4–5 do not need enzyme P |
| 1 | Viral DNA replicated with the chromosome |
</details>

## Question 5 (data analysis · core)

A fictional compound Z is tested on bacterial cells and on human cells grown in culture. Protein synthesis is measured as the rate at which amino acids are built into new protein, shown as a percentage of untreated cells.

| Compound Z / µg mL⁻¹ | 0 | 1 | 5 | 10 | 50 |
|---|---|---|---|---|---|
| Bacterial cells / % | 100 | 72 | 31 | 12 | 3 |
| Human cells / % | 100 | 99 | 97 | 96 | 94 |

In bacterial cells treated with 10 µg mL⁻¹ of Z, the total amount of mRNA was 98% of the untreated value.

(a) Calculate the percentage decrease in protein synthesis at 10 µg mL⁻¹ for each cell type.
(b) Estimate the concentration of Z that halves bacterial protein synthesis. Show how you used the data.
(c) A student claims that Z blocks translation, not transcription, in bacteria. Evaluate this claim using the data.
(d) Suggest why Z affects bacterial cells much more than human cells.
(e) Predict how Z would affect a population of bacteria growing in a culture, and explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Bacteria: 100 − 12 = **88%** decrease. Human cells: 100 − 96 = **4%** decrease.

**(b)** 50% lies between 1 µg mL⁻¹ (72%) and 5 µg mL⁻¹ (31%). The fall is 41 percentage points over 4 µg mL⁻¹, and 22 points are needed: 1 + (22 ÷ 41) × 4 ≈ **3.1 µg mL⁻¹** (accept about 3).

**(c)** The data **support** the claim. At 10 µg mL⁻¹, mRNA stays at 98% of normal, so transcription is almost unaffected, but protein synthesis falls to 12%. The cells still have mRNA but cannot use it. Limitation: total mRNA was measured at only one concentration, and these data do not show which step of translation is affected.

**(d)** Bacterial (prokaryotic) and human (eukaryotic) ribosomes differ in structure. Z may bind a part of the bacterial ribosome that is shaped differently in human ribosomes.

**(e)** The population would **stop growing** or grow much more slowly. Cells need new proteins, such as enzymes, to grow and divide; without translation they cannot make them.

| Point | What earns it |
|---|---|
| 1 | 88% and 4% |
| 1 | About 3 µg mL⁻¹, with interpolation shown |
| 1 | Supports claim, citing mRNA ~unchanged **and** protein synthesis greatly reduced |
| 1 | Difference between prokaryotic and eukaryotic ribosomes |
| 1 | Growth slows or stops, linked to lack of new proteins |
</details>

## Question 6 (constructed response · stretch)

Use these codon counts from the genetic code: Met 1 codon (AUG), Trp 1 (UGG), Gly 4 (GGU, GGC, GGA, GGG), Leu 6 (UUA, UUG, CUU, CUC, CUA, CUG), Stop 3 (UAA, UAG, UGA).

(a) A short polypeptide is Met–Gly–Leu–Trp, followed by a stop codon. Calculate how many different mRNA coding sequences could produce it.
(b) Calculate the minimum number of mRNA nucleotides needed to encode a polypeptide of 450 amino acids, including the stop codon.
(c) A change in an mRNA turns the codon CUA into CUG. Predict the effect on the polypeptide, and explain.
(d) Explain why the redundancy of the code can protect an organism against some copying errors.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Multiply the choices at each position: 1 × 4 × 6 × 1 × 3 = **72** sequences.

**(b)** 450 codons for the amino acids plus 1 stop codon = 451 codons; 451 × 3 = **1353 nt**.

**(c)** **No change.** CUA and CUG both code for leucine, so the same amino acid is added, the amino acid sequence is unchanged, and the protein folds and works normally.

**(d)** Many amino acids have several codons that differ only in the third base. An error that changes one of these codons into another codon for the same amino acid leaves the protein unchanged. So some errors in DNA or mRNA have no effect on phenotype.

| Point | What earns it |
|---|---|
| 1 | 72, with the product of choices shown |
| 1 | 1353 nt, including the stop codon |
| 1 | No change, because both codons code for Leu |
| 1 | Redundancy: a changed codon may still code for the same amino acid, so the protein is unchanged |

A common error in (b) is 450 × 3 = 1350, which forgets the stop codon.
</details>

## Question 7 (constructed response · stretch)

Scientists want bacteria to make a protein from a fictional plant gene, *PgA*. The gene has three exons and two introns. The coding sequence in the three exons totals 660 nt, from the start codon to the end of the stop codon. Intron 1 is 91 nt long.

(a) Calculate the number of amino acids in the plant protein.
(b) Explain why bacteria can, in principle, read a plant gene and make the correct protein.
(c) When the scientists insert the gene's DNA directly into bacteria, the protein is wrong. Explain why, referring to intron 1.
(d) Propose how the scientists could use reverse transcriptase to make a version of the gene that bacteria can use, and explain why it works.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** 660 ÷ 3 = 220 codons, one of them the stop codon: **219 amino acids**.

**(b)** The genetic code is nearly universal: bacteria read each codon as the same amino acid as the plant does. This shared code is inherited from a common ancestor of all life.

**(c)** Bacteria do not remove introns, so intron 1 would be translated as if it were part of the message. 91 is not a multiple of 3 (91 ÷ 3 = 30.3…), so after intron 1 the reading frame is shifted. Every codon after it is read in the wrong triplets, giving wrong amino acids and probably an early stop codon.

**(d)** Extract the **mature mRNA** from plant cells. It has already been spliced, so it contains only the exons. Use reverse transcriptase to copy it into DNA. This DNA has no introns, so bacteria can transcribe and translate it into the correct 219-amino-acid protein.

| Point | What earns it |
|---|---|
| 1 | 219 amino acids |
| 1 | Universal code linked to common ancestry |
| 1 | Bacteria do not splice, so the intron is translated |
| 1 | 91 not a multiple of 3, so the reading frame shifts after it |
| 1 | Reverse transcriptase copies spliced mRNA into intron-free DNA |
</details>

## How did you do?

- **Q1 wrong:** re-read "Where translation happens" in the [study guide](/advanced-course-resources/biology/6-4-translation-study-guide/).
- **Q2 or Q3 wrong:** rework Worked example 1 and look again at Figure 1; start at AUG, and pair anticodons antiparallel.
- **Q4 incomplete:** re-read "A special case: retroviruses".
- **Q5 or Q6 wrong:** rework Worked example 2 and "Three stages of translation".
- **Q7 incomplete:** revisit splicing in [Topic 6.3](/advanced-course-resources/biology/6-3-transcription-rna-processing-study-guide/) and "Why a shared code points to common ancestry".

Then tick off the [topic checklist](/advanced-course-resources/biology/6-4-translation-checklist/).
