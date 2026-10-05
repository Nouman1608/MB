---
resourceId: "mb-ap-bio-6.4-study-guide"
title: "Translation: Study Guide (Biology 6.4)"
description: "How ribosomes read mRNA codons to build a polypeptide: where translation happens, the genetic code, initiation, elongation and termination, and the reverse flow of information in retroviruses."
course: "biology"
unit: 6
topics: ["6.4"]
resourceType: "study-guide"
prerequisites:
  - "The jobs of mRNA, tRNA and rRNA, and how mRNA is made and processed"
  - "Amino acids are joined into polypeptides; sequence determines protein structure"
prerequisiteResources: ["mb-ap-bio-6.3-study-guide"]
learningObjectives:
  - "State where translation happens in prokaryotic and eukaryotic cells, and explain why prokaryotes can translate an mRNA while it is still being transcribed"
  - "Use a genetic code table to translate an mRNA, starting at AUG and stopping at a stop codon"
  - "Describe initiation, elongation and termination, including the roles of rRNA, tRNA anticodons and codons"
  - "Explain how a shared genetic code is evidence for the common ancestry of living things"
  - "Describe how retroviruses use reverse transcriptase to copy RNA into DNA, and predict the effects of disrupting a step in information flow"
skills: ["1", "2", "5", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "four-function"
calculatorNote: "Only counting and simple arithmetic: 3 nucleotides per codon. A genetic code table is provided; you do not need to memorise it"
related: ["mb-ap-bio-6.4-revision-notes", "mb-ap-bio-6.4-practice", "mb-ap-bio-6.4-checklist"]
next: "mb-ap-bio-6.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Translation turns the base sequence of an mRNA into the amino acid sequence of a polypeptide. It happens on ribosomes: free in the cytoplasm of all cells, and on the surface of the rough ER in eukaryotes."
  - "mRNA is read in non-overlapping triplets called codons. Translation starts at AUG (methionine) and ends at a stop codon. Many amino acids have more than one codon."
  - "Each tRNA carries one kind of amino acid and has an anticodon that base-pairs with a codon. The ribosome adds each new amino acid to the growing chain."
  - "Nearly all organisms use the same genetic code, which is evidence that all living things share a common ancestor."
  - "Retroviruses reverse the usual flow: reverse transcriptase copies their RNA genome into DNA, which joins the host's DNA and is then transcribed and translated."
faqs:
  - question: "Do I need to learn the whole genetic code?"
    answer: "No. You only need to know that AUG is the start codon and codes for methionine. Exam-style questions provide a genetic code table when you need one. You do need to be able to read the table quickly."
  - question: "Is the start codon the first three bases of the mRNA?"
    answer: "Usually not. Most mRNAs have a stretch of bases before the start codon that is not translated. The ribosome finds the start codon, and from there the mRNA is read in groups of three."
  - question: "Why do proteins made on the rough ER end up in different places from proteins made on free ribosomes?"
    answer: "Background: ribosomes that make proteins for secretion, for membranes or for some organelles are held on the rough ER, so the new polypeptide passes into the ER and then on through the endomembrane system. Ribosomes in the cytosol mostly make proteins that stay in the cytosol."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## From genotype to phenotype

Your **genotype** is the set of genes you carry. Your **phenotype** is what you can observe: eye colour, enzyme activity, whether you can digest lactose. The link between them is protein. A gene's base sequence sets the amino acid sequence of a protein; the amino acid sequence sets how the protein folds; the shape sets what the protein does. Translation is the step that turns a base sequence into an amino acid sequence.

## Where translation happens

Translation takes place on **ribosomes**. Ribosomes are found:

- free in the **cytoplasm** of both prokaryotic and eukaryotic cells;
- attached to the cytoplasmic surface of the **rough endoplasmic reticulum (rough ER)** in eukaryotic cells.

In eukaryotes, the mature mRNA must first leave the nucleus. In **prokaryotes** there is no nucleus, so transcription and translation happen in the same space. Ribosomes attach to the 5′ end of an mRNA and start translating **while RNA polymerase is still making the rest of it**. This coupling lets bacteria respond very quickly when they need a new protein.

## The genetic code

An mRNA has four bases; proteins are made from 20 amino acids. One base cannot specify 20 amino acids, and nor can pairs (only 4 × 4 = 16 combinations). Triplets give 4 × 4 × 4 = 64 combinations, which is enough. So the mRNA is read in **codons**: groups of three bases, read one after another without overlapping.

Key features of the code:

- **Start codon: AUG.** It codes for methionine (Met) and marks where translation begins. This is the one codon you must know.
- **Stop codons:** three codons (UAA, UAG, UGA) code for no amino acid. They mark where translation ends. You do not need to memorise them; read them from the table.
- **Redundancy:** 61 codons code for amino acids, but there are only 20 amino acids, so many amino acids have more than one codon. Leucine has six; methionine and tryptophan have only one each.
- **No ambiguity:** each codon codes for only one amino acid.
- **Near-universal:** almost all living organisms use the same codon assignments, from bacteria to plants to humans. A few small variations exist, for example in mitochondria.

**Table 1. The genetic code (mRNA codons).** Find the first base in the left column, the second base along the top, then pick the row with the right third base.

| First base | Second base U | Second base C | Second base A | Second base G |
|---|---|---|---|---|
| U | UUU Phe | UCU Ser | UAU Tyr | UGU Cys |
| U | UUC Phe | UCC Ser | UAC Tyr | UGC Cys |
| U | UUA Leu | UCA Ser | **UAA Stop** | **UGA Stop** |
| U | UUG Leu | UCG Ser | **UAG Stop** | UGG Trp |
| C | CUU Leu | CCU Pro | CAU His | CGU Arg |
| C | CUC Leu | CCC Pro | CAC His | CGC Arg |
| C | CUA Leu | CCA Pro | CAA Gln | CGA Arg |
| C | CUG Leu | CCG Pro | CAG Gln | CGG Arg |
| A | AUU Ile | ACU Thr | AAU Asn | AGU Ser |
| A | AUC Ile | ACC Thr | AAC Asn | AGC Ser |
| A | AUA Ile | ACA Thr | AAA Lys | AGA Arg |
| A | **AUG Met (start)** | ACG Thr | AAG Lys | AGG Arg |
| G | GUU Val | GCU Ala | GAU Asp | GGU Gly |
| G | GUC Val | GCC Ala | GAC Asp | GGC Gly |
| G | GUA Val | GCA Ala | GAA Glu | GGA Gly |
| G | GUG Val | GCG Ala | GAG Glu | GGG Gly |

### Why a shared code points to common ancestry

If each group of organisms had evolved its own code separately, we would expect many different codes. Instead, nearly every organism reads the same codons as the same amino acids. The simplest explanation is that the code was already in place in a common ancestor of all life and has been passed down ever since. A practical result: a gene from one species can be read correctly by the cells of a very different species. Bacteria given a human gene (in a form without introns) can make the human protein.

## The players

- **mRNA**: the message, read 5′ → 3′, codon by codon.
- **tRNA**: the adaptor. Each tRNA carries one specific amino acid and has an **anticodon**, three bases that pair with a codon. A tRNA with the anticodon 3′-AAA-5′ pairs with the codon 5′-UUU-3′ and carries phenylalanine.
- **Ribosome**: two subunits, made of **rRNA** and proteins. The ribosome holds the mRNA and tRNAs in position and joins each new amino acid to the growing chain.

<figure>
<svg viewBox="0 0 680 340" role="img" aria-labelledby="tl-title tl-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="tl-title">A ribosome translating an mRNA during elongation</title>
<desc id="tl-desc">An mRNA runs left to right from its 5 prime end to its 3 prime end, divided into boxed codons: AUG, UUU, GGA, CAU, CGU and UAG. A ribosome sits over the third and fourth codons: a large subunit above the mRNA and a small subunit below it. Inside the ribosome are two tRNAs. The left tRNA has anticodon C C U, written 3 prime to 5 prime, paired with codon GGA; it holds a chain of three circles labelled Gly, Phe and Met, which leads out of the top of the ribosome. The right tRNA has anticodon G U A paired with codon CAU and carries one circle labelled His. Labels explain that the anticodon pairs with the codon and that the ribosome moves along the mRNA towards the 3 prime end.</desc>
<rect x="0" y="0" width="680" height="340" fill="#ffffff"/>
<rect x="205" y="112" width="230" height="122" rx="30" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="215" y="266" width="210" height="36" rx="16" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<line x1="40" y1="250" x2="620" y2="250" stroke="#1d2b44" stroke-width="2"/>
<rect x="80" y="236" width="80" height="28" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="160" y="236" width="80" height="28" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="240" y="236" width="80" height="28" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="320" y="236" width="80" height="28" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="400" y="236" width="80" height="28" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="480" y="236" width="80" height="28" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="120" y="255" text-anchor="middle" font-size="14" font-weight="700" fill="#1d2b44">AUG</text>
<text x="200" y="255" text-anchor="middle" font-size="14" font-weight="700" fill="#1d2b44">UUU</text>
<text x="280" y="255" text-anchor="middle" font-size="14" font-weight="700" fill="#1d2b44">GGA</text>
<text x="360" y="255" text-anchor="middle" font-size="14" font-weight="700" fill="#1d2b44">CAU</text>
<text x="440" y="255" text-anchor="middle" font-size="14" font-weight="700" fill="#1d2b44">CGU</text>
<text x="520" y="255" text-anchor="middle" font-size="14" font-weight="700" fill="#1d2b44">UAG</text>
<text x="28" y="255" text-anchor="middle" font-size="14" fill="#1d2b44">5′</text>
<text x="634" y="255" text-anchor="middle" font-size="14" fill="#1d2b44">3′</text>
<rect x="250" y="204" width="60" height="26" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="280" y="222" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2b44">CCU</text>
<line x1="280" y1="204" x2="280" y2="158" stroke="#1d2b44" stroke-width="4"/>
<rect x="330" y="204" width="60" height="26" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="360" y="222" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2b44">GUA</text>
<line x1="360" y1="204" x2="360" y2="158" stroke="#1d2b44" stroke-width="4"/>
<line x1="280" y1="140" x2="248" y2="98" stroke="#1d2b44" stroke-width="2"/>
<line x1="248" y1="98" x2="206" y2="62" stroke="#1d2b44" stroke-width="2"/>
<circle cx="280" cy="140" r="18" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="280" y="145" text-anchor="middle" font-size="12" fill="#1d2b44">Gly</text>
<circle cx="248" cy="98" r="18" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="248" y="103" text-anchor="middle" font-size="12" fill="#1d2b44">Phe</text>
<circle cx="206" cy="62" r="18" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="206" y="67" text-anchor="middle" font-size="12" fill="#1d2b44">Met</text>
<circle cx="360" cy="140" r="18" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="360" y="145" text-anchor="middle" font-size="12" fill="#1d2b44">His</text>
<text x="60" y="40" font-size="13" fill="#1d2b44">Growing polypeptide</text>
<text x="60" y="56" font-size="12" fill="#1d2b44">(Met was first)</text>
<text x="450" y="130" font-size="13" fill="#1d2b44">Large subunit</text>
<text x="450" y="146" font-size="12" fill="#1d2b44">(rRNA + proteins)</text>
<text x="450" y="178" font-size="13" fill="#1d2b44">tRNA carrying His;</text>
<text x="450" y="194" font-size="12" fill="#1d2b44">anticodon 3′-GUA-5′ pairs</text>
<text x="450" y="210" font-size="12" fill="#1d2b44">with codon 5′-CAU-3′</text>
<text x="440" y="290" font-size="13" fill="#1d2b44">Small subunit</text>
<text x="340" y="328" text-anchor="middle" font-size="13" fill="#1d2b44">Ribosome moves along the mRNA towards the 3′ end, one codon at a time</text>
</svg>
<figcaption>Figure 1. Elongation. The tRNA paired with GGA holds the chain Met–Phe–Gly. The next tRNA, carrying His, has just paired with CAU. The chain will now be transferred to His, and the ribosome will move one codon to the right. Anticodons are written 3′ → 5′ from left to right so they line up antiparallel with the mRNA.</figcaption>
</figure>

## Three stages of translation

**1. Initiation.** The small ribosomal subunit binds the mRNA. Its rRNA lines the mRNA up so that translation begins at the **start codon, AUG**. A tRNA carrying methionine pairs with AUG, and the large subunit joins to complete the ribosome. Because the reading begins at AUG, the start codon also fixes the **reading frame**: how the rest of the mRNA is divided into triplets.

**2. Elongation.** This cycle repeats for each codon:

1. A tRNA whose anticodon matches the next codon enters the ribosome and pairs with it, bringing the **correct amino acid** to the place the codon specifies.
2. The growing chain is **transferred** onto the new amino acid. A peptide bond joins them, so the chain is now one amino acid longer.
3. The ribosome moves along the mRNA by **one codon** (three bases) towards the 3′ end. The empty tRNA leaves and can pick up another amino acid of its kind.

**3. Termination.** When a **stop codon** reaches the ribosome, no tRNA pairs with it. Instead, the finished polypeptide is **released**, and the ribosome comes apart from the mRNA. The polypeptide then folds, sometimes with help, into its working shape.

The many proteins and enzymes that help each stage are not required for the course. Concentrate on the sequence of events and on what codons, anticodons and rRNA do.

## A special case: retroviruses

Usually information flows DNA → RNA → protein. **Retroviruses**, such as HIV, have genomes made of RNA and reverse the first step:

1. The virus enters a host cell and releases its RNA genome and an enzyme, **reverse transcriptase**.
2. Reverse transcriptase uses the viral RNA as a template to make a **DNA copy** (RNA → DNA).
3. The viral DNA **integrates** into the host cell's own DNA.
4. The host cell's RNA polymerase **transcribes** the viral genes, and the host's ribosomes **translate** the viral mRNA into viral proteins.
5. New viral RNA genomes and proteins are **assembled** into new viruses.

Because the viral DNA is now part of the host's genome, it is copied whenever the cell replicates its DNA. Human cells do not use reverse transcriptase to express their own genes, which is one reason it makes a useful drug target.

## Worked example 1: translating an mRNA

**Question.** Part of a mature mRNA is 5′-CCGAUGUUUGGACAUCGUUAGGCA-3′. Using Table 1:
(a) give the amino acid sequence of the polypeptide made;
(b) give the anticodon of each tRNA used, written 3′ → 5′.

**(a) Step by step.**

1. Read from the 5′ end and find the first AUG. Here it begins at nucleotide 4 (the bases CCG before it are not translated).
2. From AUG, split the mRNA into triplets: AUG | UUU | GGA | CAU | CGU | UAG | …
3. Look up each codon in Table 1: AUG = Met, UUU = Phe, GGA = Gly, CAU = His, CGU = Arg, UAG = Stop.
4. Stop at the stop codon. The bases after it (GCA) are not translated.

Polypeptide: **Met–Phe–Gly–His–Arg** (5 amino acids).

**(b)** Each anticodon is complementary and antiparallel to its codon:

| Codon (5′ → 3′) | AUG | UUU | GGA | CAU | CGU |
|---|---|---|---|---|---|
| Anticodon (3′ → 5′) | UAC | AAA | CCU | GUA | GCA |
| Amino acid carried | Met | Phe | Gly | His | Arg |

**Check.** Five codons were translated, so five tRNAs were used. No tRNA is used for the stop codon. Compare the first four codons with Figure 1, which shows a moment part-way through this example.

## Worked example 2: counting codons and predicting a change

**Question.** A fictional mature mRNA is 1200 nucleotides (nt) long, not counting its poly-A tail. Its start codon begins at nucleotide 61, and its stop codon (UGA) ends at nucleotide 1011.
(a) How many amino acids are in the polypeptide?
(b) How many nucleotides of the mRNA are not translated?
(c) Predict the effect if an error in the mRNA turned codon 120 into UAA.
(d) Predict the effect if codon 50 changed from GGU to GGC.

**(a)**

1. The translated stretch, including the stop codon, runs from nucleotide 61 to 1011: 1011 − 61 + 1 = 951 nt.
2. Codons: 951 ÷ 3 = 317.
3. The last codon is the stop codon, which adds no amino acid: 317 − 1 = **316 amino acids** (counting the first methionine).

**(b)** Before the start codon: 60 nt. After the stop codon: 1200 − 1011 = 189 nt. Total untranslated: **249 nt**.

**(c)** UAA is a stop codon. Translation would end at codon 120, so the polypeptide would have only **119 amino acids**. It would probably be unable to fold into the normal shape, so the protein would likely not work.

**(d)** GGU and GGC both code for glycine (Table 1). The amino acid sequence is **unchanged**, so the protein should work normally. This is the redundancy of the code in action.

## Common misconceptions

- **"The first three bases of an mRNA are the first codon."** Translation begins at the start codon AUG, which is usually some way along the mRNA.
- **"The tRNA anticodon is the same as the codon."** It is complementary and antiparallel to the codon.
- **"Stop codons code for a 'stop' amino acid."** They code for no amino acid; they trigger release of the polypeptide.
- **"Each amino acid has one codon."** Most have two or more; only Met and Trp have just one.
- **"Every organism has its own genetic code."** Nearly all use the same code, which is evidence of common ancestry.
- **"All ribosomes are on the rough ER."** Many ribosomes are free in the cytoplasm, and prokaryotes have no ER at all.
- **"Prokaryotes finish transcription before translation begins."** Without a nucleus, they translate mRNA while it is still being made.
- **"Retroviruses break the rules completely."** They add an extra step (RNA → DNA), but their genes are then transcribed and translated normally by the host cell.

## Where this leads

Every cell in your body has the same genes, yet a liver cell and a nerve cell make very different proteins. In [Topic 6.5, Regulation of Gene Expression](/advanced-course-resources/biology/6-5-regulation-gene-expression-study-guide/), you will see how cells control which genes are transcribed and when. To review how the mRNA was made and processed, revisit [Topic 6.3, Transcription and RNA Processing](/advanced-course-resources/biology/6-3-transcription-rna-processing-study-guide/). Test yourself with the [practice questions](/advanced-course-resources/biology/6-4-translation-practice/), then use the [revision notes](/advanced-course-resources/biology/6-4-translation-revision-notes/) and the [checklist](/advanced-course-resources/biology/6-4-translation-checklist/) to consolidate.
