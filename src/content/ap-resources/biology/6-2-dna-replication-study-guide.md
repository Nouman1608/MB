---
resourceId: "mb-ap-bio-6.2-study-guide"
title: "DNA Replication: Study Guide (Biology 6.2)"
description: "How DNA is copied: semiconservative replication, 5′ to 3′ synthesis, helicase, topoisomerase, RNA primers, DNA polymerase, leading and lagging strands, and ligase."
course: "biology"
unit: 6
topics: ["6.2"]
resourceType: "study-guide"
prerequisites:
  - "Antiparallel strands, 5′ and 3′ ends, and complementary base pairing (Topics 1.6 and 6.1)"
  - "Enzymes as specific catalysts (Topic 3.1)"
  - "DNA is copied before a cell divides (Topic 4.5)"
prerequisiteResources: ["mb-ap-bio-6.1-study-guide"]
learningObjectives:
  - "Explain what semiconservative replication means and how density-label data support it over other models"
  - "Explain why new DNA can only be built in the 5′ to 3′ direction and why DNA polymerase needs an RNA primer to start"
  - "Describe the jobs of helicase, topoisomerase, DNA polymerase and ligase at a replication fork"
  - "Explain why one new strand is made continuously (leading) and the other in fragments (lagging)"
  - "Write the new strands made at a fork, with 5′ and 3′ ends labelled"
  - "Predict the effect of losing one replication enzyme, and use simple calculations to explain why eukaryotic chromosomes have many starting points"
skills: ["1", "2", "4", "5", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Replication rates and sizes in the examples are model values for fictional organisms. Convert seconds to minutes or days only at the end"
related: ["mb-ap-bio-6.2-revision-notes", "mb-ap-bio-6.2-practice", "mb-ap-bio-6.2-checklist"]
next: "mb-ap-bio-6.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Replication is semiconservative: each new DNA molecule has one original (template) strand and one newly made strand."
  - "DNA polymerase only adds nucleotides to a free 3′ end, so new DNA always grows 5′ → 3′. It cannot start a strand from nothing, so it needs a short RNA primer."
  - "Helicase separates the two strands at the fork. Topoisomerase relieves the overwinding (supercoiling) that builds up ahead of the fork."
  - "The leading strand is made continuously towards the fork. The lagging strand is made in short fragments away from the fork, each with its own primer."
  - "Primers are replaced with DNA, and ligase joins the fragments of the lagging strand into one continuous strand."
faqs:
  - question: "Which enzyme names do I need to know?"
    answer: "DNA polymerase, helicase, topoisomerase and ligase for replication (and RNA polymerase, which you will meet in transcription). Other enzymes, such as the one that makes primers, and the names of the stages are not required, although you should know what they do."
  - question: "Why does the cell use an RNA primer, not a DNA one?"
    answer: "DNA polymerase cannot start a new chain; it can only extend an existing one from its 3′ end. The enzyme that makes primers is a kind of RNA polymerase, which can start a chain from scratch. The RNA is later removed and replaced with DNA."
  - question: "Is replication the same in prokaryotes and eukaryotes?"
    answer: "The core mechanism is the same: semiconservative, 5′ → 3′, with primers, leading and lagging strands and ligase. The main difference in this course is scale: a circular bacterial chromosome usually has one starting point, while each linear eukaryotic chromosome has many."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Why DNA must be copied

Before a cell divides, it must make a complete copy of its DNA so that each daughter cell receives the same genetic information. This copying is **DNA replication**. It ensures the **continuity** of hereditary information from one cell generation to the next, and, through gametes, from parents to offspring.

The structure you studied in [Topic 6.1](/advanced-course-resources/biology/6-1-dna-rna-structure-study-guide/) makes copying possible. Because A pairs with T and G pairs with C, each strand carries the information needed to rebuild its partner. Separate the strands, and each one can act as a **template**.

## Semiconservative replication

In replication, the two strands of the parent molecule separate. Each one serves as the template for a new **complementary** strand. So each of the two new DNA molecules contains:

- **one original strand** (from the parent), and
- **one newly made strand**.

This is called **semiconservative** replication: half of each parent molecule is conserved in each daughter molecule.

Before this was known, two other models were proposed (Figure 1). In the **conservative** model, the parent molecule stays intact and a completely new molecule is made. In the **dispersive** model, every strand of every new molecule is a patchwork of old and new pieces.

<figure>
<svg viewBox="0 0 640 320" role="img" aria-labelledby="md-title md-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="md-title">Three models of DNA replication</title>
<desc id="md-desc">Three columns: conservative, semiconservative and dispersive. Each double-stranded molecule is drawn as two short horizontal lines. Solid lines are original strands; dashed lines are newly made strands. Conservative: after one round, one all-solid molecule and one all-dashed molecule; after two rounds, one all-solid and three all-dashed. Semiconservative: after one round, two molecules each with one solid and one dashed strand; after two rounds, two half-and-half molecules and two all-dashed molecules. Dispersive: after one round, both molecules have strands that are half solid and half dashed pieces; after two rounds, all four molecules have strands that are one quarter solid and three quarters dashed.</desc>
<rect x="0" y="0" width="640" height="320" fill="#ffffff"/>
<text x="320" y="72" text-anchor="middle" font-size="12" fill="#1d2b44">Parent molecule</text>
<text x="320" y="152" text-anchor="middle" font-size="12" fill="#1d2b44">After 1 round of replication</text>
<text x="320" y="232" text-anchor="middle" font-size="12" fill="#1d2b44">After 2 rounds</text>
<text x="110" y="40" text-anchor="middle" font-size="15" font-weight="700" fill="#1d2b44">Conservative</text>
<line x1="92.0" y1="90" x2="128.0" y2="90" stroke="#1d2b44" stroke-width="4"/>
<line x1="92.0" y1="100" x2="128.0" y2="100" stroke="#1d2b44" stroke-width="4"/>
<line x1="70.0" y1="170" x2="106.0" y2="170" stroke="#1d2b44" stroke-width="4"/>
<line x1="70.0" y1="180" x2="106.0" y2="180" stroke="#1d2b44" stroke-width="4"/>
<line x1="114.0" y1="170" x2="150.0" y2="170" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<line x1="114.0" y1="180" x2="150.0" y2="180" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<line x1="26.0" y1="250" x2="62.0" y2="250" stroke="#1d2b44" stroke-width="4"/>
<line x1="26.0" y1="260" x2="62.0" y2="260" stroke="#1d2b44" stroke-width="4"/>
<line x1="70.0" y1="250" x2="106.0" y2="250" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<line x1="70.0" y1="260" x2="106.0" y2="260" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<line x1="114.0" y1="250" x2="150.0" y2="250" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<line x1="114.0" y1="260" x2="150.0" y2="260" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<line x1="158.0" y1="250" x2="194.0" y2="250" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<line x1="158.0" y1="260" x2="194.0" y2="260" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<text x="320" y="40" text-anchor="middle" font-size="15" font-weight="700" fill="#1d2b44">Semiconservative</text>
<line x1="302.0" y1="90" x2="338.0" y2="90" stroke="#1d2b44" stroke-width="4"/>
<line x1="302.0" y1="100" x2="338.0" y2="100" stroke="#1d2b44" stroke-width="4"/>
<line x1="280.0" y1="170" x2="316.0" y2="170" stroke="#1d2b44" stroke-width="4"/>
<line x1="280.0" y1="180" x2="316.0" y2="180" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<line x1="324.0" y1="170" x2="360.0" y2="170" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<line x1="324.0" y1="180" x2="360.0" y2="180" stroke="#1d2b44" stroke-width="4"/>
<line x1="236.0" y1="250" x2="272.0" y2="250" stroke="#1d2b44" stroke-width="4"/>
<line x1="236.0" y1="260" x2="272.0" y2="260" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<line x1="280.0" y1="250" x2="316.0" y2="250" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<line x1="280.0" y1="260" x2="316.0" y2="260" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<line x1="324.0" y1="250" x2="360.0" y2="250" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<line x1="324.0" y1="260" x2="360.0" y2="260" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<line x1="368.0" y1="250" x2="404.0" y2="250" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<line x1="368.0" y1="260" x2="404.0" y2="260" stroke="#1d2b44" stroke-width="4"/>
<text x="530" y="40" text-anchor="middle" font-size="15" font-weight="700" fill="#1d2b44">Dispersive</text>
<line x1="512.0" y1="90" x2="548.0" y2="90" stroke="#1d2b44" stroke-width="4"/>
<line x1="512.0" y1="100" x2="548.0" y2="100" stroke="#1d2b44" stroke-width="4"/>
<line x1="490.0" y1="170" x2="508.0" y2="170" stroke="#1d2b44" stroke-width="4"/>
<line x1="510.0" y1="170" x2="526.0" y2="170" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<line x1="490.0" y1="180" x2="508.0" y2="180" stroke="#1d2b44" stroke-width="4"/>
<line x1="510.0" y1="180" x2="526.0" y2="180" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<line x1="534.0" y1="170" x2="552.0" y2="170" stroke="#1d2b44" stroke-width="4"/>
<line x1="554.0" y1="170" x2="570.0" y2="170" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<line x1="534.0" y1="180" x2="552.0" y2="180" stroke="#1d2b44" stroke-width="4"/>
<line x1="554.0" y1="180" x2="570.0" y2="180" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<line x1="446.0" y1="250" x2="455.0" y2="250" stroke="#1d2b44" stroke-width="4"/>
<line x1="457.0" y1="250" x2="482.0" y2="250" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<line x1="446.0" y1="260" x2="455.0" y2="260" stroke="#1d2b44" stroke-width="4"/>
<line x1="457.0" y1="260" x2="482.0" y2="260" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<line x1="490.0" y1="250" x2="499.0" y2="250" stroke="#1d2b44" stroke-width="4"/>
<line x1="501.0" y1="250" x2="526.0" y2="250" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<line x1="490.0" y1="260" x2="499.0" y2="260" stroke="#1d2b44" stroke-width="4"/>
<line x1="501.0" y1="260" x2="526.0" y2="260" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<line x1="534.0" y1="250" x2="543.0" y2="250" stroke="#1d2b44" stroke-width="4"/>
<line x1="545.0" y1="250" x2="570.0" y2="250" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<line x1="534.0" y1="260" x2="543.0" y2="260" stroke="#1d2b44" stroke-width="4"/>
<line x1="545.0" y1="260" x2="570.0" y2="260" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<line x1="578.0" y1="250" x2="587.0" y2="250" stroke="#1d2b44" stroke-width="4"/>
<line x1="589.0" y1="250" x2="614.0" y2="250" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<line x1="578.0" y1="260" x2="587.0" y2="260" stroke="#1d2b44" stroke-width="4"/>
<line x1="589.0" y1="260" x2="614.0" y2="260" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<line x1="150" y1="298" x2="186" y2="298" stroke="#1d2b44" stroke-width="4"/>
<text x="192" y="302" font-size="12" fill="#1d2b44">original strand</text>
<line x1="330" y1="298" x2="366" y2="298" stroke="#1d2b44" stroke-width="4" stroke-dasharray="5 4"/>
<text x="372" y="302" font-size="12" fill="#1d2b44">newly made strand</text>
</svg>
<figcaption>Figure 1. The three models that were tested for how DNA is copied. Only the semiconservative model matches the experimental evidence: each new molecule keeps one original strand.</figcaption>
</figure>

**The evidence.** In 1958, Matthew Meselson and Franklin Stahl grew the bacterium *E. coli* on a medium containing a heavy isotope of nitrogen (¹⁵N), so that all its DNA became "heavy". They then moved the bacteria to a medium with normal, lighter nitrogen (¹⁴N) and separated DNA by density in a centrifuge. After one round of replication, all the DNA had an intermediate density, which ruled out the conservative model. After two rounds, there were equal amounts of intermediate and light DNA, which ruled out the dispersive model. Only the semiconservative model predicts both results. Worked example 2 uses the same reasoning with new data.

## The direction rule: 5′ → 3′ only

The enzyme that builds new DNA is **DNA polymerase**. It reads the template strand and adds nucleotides that pair with it. Two features of this enzyme explain almost everything else in the topic:

1. **It adds nucleotides only to a free 3′ end.** As you saw in Topic 1.6, each new nucleotide bonds to the 3′ –OH of the growing strand. So new DNA is always **synthesised in the 5′ → 3′ direction**. Because the strands are antiparallel, the polymerase moves along the template from its 3′ end towards its 5′ end.
2. **It cannot start a new strand from nothing.** It can only extend a strand that already exists. A short **RNA primer**, complementary to the template, is laid down first. DNA polymerase then adds DNA nucleotides to the primer's 3′ end.

*Background (name not required):* the primers are made by an enzyme called primase, which is a kind of RNA polymerase. Unlike DNA polymerase, it can start a chain from scratch.

## At the replication fork

Replication begins at a specific site called an **origin of replication**. The strands separate there, opening a "bubble" with a **replication fork** at each side. Each fork moves away from the origin as more DNA is unwound. Figure 2 shows one fork.

<figure>
<svg viewBox="0 0 640 350" role="img" aria-labelledby="rf-title rf-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="rf-title">A replication fork, with the enzymes that act there</title>
<desc id="rf-desc">On the right, unreplicated parental DNA: two parallel strands, the upper ending 3 prime and the lower ending 5 prime at the right edge. A box on the parental DNA ahead of the fork is labelled topoisomerase, relieving overwinding ahead of the fork. At the fork a circle is labelled helicase, separating the strands. The fork moves to the right. To the left the two template strands separate. The upper template runs 5 prime at its left end; the lower template has its 3 prime end on the left. Along the lower template a dashed new strand runs continuously from 5 prime on the left to 3 prime on the right, ending in an arrowhead at an oval labelled DNA polymerase near the fork: the leading strand. Along the upper template, new DNA is made in three short dashed fragments, each with an arrowhead pointing left, away from the fork. The middle and right fragments start with a short black block labelled RNA primer at their right-hand, 5 prime ends. A small gap between the left and middle fragments is labelled ligase joins the fragments. This is the lagging strand, 3 prime at the left and 5 prime at the right.</desc>
<rect x="0" y="0" width="640" height="350" fill="#ffffff"/>
<text x="40" y="20" font-size="14" font-weight="700" fill="#1d2b44">Lagging strand: made in fragments, away from the fork</text>
<polyline points="400,150 340,90 40,90" fill="none" stroke="#1d2b44" stroke-width="5"/>
<polyline points="400,180 340,240 40,240" fill="none" stroke="#1d2b44" stroke-width="5"/>
<line x1="400" y1="150" x2="600" y2="150" stroke="#1d2b44" stroke-width="5"/>
<line x1="400" y1="180" x2="600" y2="180" stroke="#1d2b44" stroke-width="5"/>
<text x="28" y="95" text-anchor="end" font-size="13" font-weight="600" fill="#1d2b44">5′</text>
<text x="28" y="245" text-anchor="end" font-size="13" font-weight="600" fill="#1d2b44">3′</text>
<text x="606" y="155" font-size="13" font-weight="600" fill="#1d2b44">3′</text>
<text x="606" y="185" font-size="13" font-weight="600" fill="#1d2b44">5′</text>
<line x1="60" y1="106" x2="165" y2="106" stroke="#1d2b44" stroke-width="3" stroke-dasharray="10 4"/>
<polygon points="60,100 48,106 60,112" fill="#1d2b44"/>
<line x1="184" y1="106" x2="250" y2="106" stroke="#1d2b44" stroke-width="3" stroke-dasharray="10 4"/>
<polygon points="184,100 172,106 184,112" fill="#1d2b44"/>
<rect x="250" y="100" width="16" height="12" fill="#1d2b44"/>
<line x1="296" y1="106" x2="306" y2="106" stroke="#1d2b44" stroke-width="3"/>
<polygon points="296,100 284,106 296,112" fill="#1d2b44"/>
<rect x="306" y="100" width="16" height="12" fill="#1d2b44"/>
<text x="40" y="126" font-size="12" font-weight="600" fill="#1d2b44">3′</text>
<text x="326" y="126" font-size="12" font-weight="600" fill="#1d2b44">5′</text>
<text x="168" y="42" text-anchor="middle" font-size="12" fill="#1d2b44">ligase joins the fragments</text>
<line x1="168" y1="46" x2="168" y2="102" stroke="#1d2b44" stroke-width="1"/>
<text x="290" y="62" text-anchor="middle" font-size="12" fill="#1d2b44">RNA primers (black blocks)</text>
<line x1="258" y1="66" x2="258" y2="98" stroke="#1d2b44" stroke-width="1"/>
<line x1="314" y1="66" x2="314" y2="98" stroke="#1d2b44" stroke-width="1"/>
<line x1="60" y1="226" x2="316" y2="226" stroke="#1d2b44" stroke-width="3" stroke-dasharray="10 4"/>
<polygon points="316,220 328,226 316,232" fill="#1d2b44"/>
<ellipse cx="334" cy="226" rx="16" ry="11" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="56" y="218" text-anchor="end" font-size="12" font-weight="600" fill="#1d2b44">5′</text>
<text x="300" y="214" font-size="12" font-weight="600" fill="#1d2b44">3′</text>
<text x="250" y="270" text-anchor="middle" font-size="12" fill="#1d2b44">DNA polymerase adds nucleotides to the 3′ end</text>
<line x1="334" y1="237" x2="320" y2="258" stroke="#1d2b44" stroke-width="1"/>
<text x="40" y="296" font-size="14" font-weight="700" fill="#1d2b44">Leading strand: made continuously, towards the fork</text>
<circle cx="400" cy="165" r="20" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="400" y="170" text-anchor="middle" font-size="11" font-weight="700" fill="#1d2b44">H</text>
<text x="428" y="214" font-size="13" font-weight="600" fill="#1d2b44">Helicase (H)</text>
<text x="428" y="230" font-size="12" fill="#1d2b44">separates the strands</text>
<rect x="495" y="140" width="50" height="50" rx="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="520" y="170" text-anchor="middle" font-size="11" font-weight="700" fill="#1d2b44">T</text>
<text x="440" y="108" font-size="13" font-weight="600" fill="#1d2b44">Topoisomerase (T)</text>
<text x="440" y="124" font-size="12" fill="#1d2b44">relieves overwinding ahead</text>
<text x="470" y="262" font-size="13" fill="#1d2b44">Fork moves this way →</text>
<line x1="380" y1="318" x2="410" y2="318" stroke="#1d2b44" stroke-width="5"/>
<text x="416" y="322" font-size="12" fill="#1d2b44">template (parent) strand</text>
<line x1="380" y1="334" x2="410" y2="334" stroke="#1d2b44" stroke-width="3" stroke-dasharray="10 4"/>
<text x="416" y="338" font-size="12" fill="#1d2b44">new DNA</text>
</svg>
<figcaption>Figure 2. One replication fork (simplified, not to scale). Both new strands are built 5′ → 3′. On the leading strand that direction points into the fork, so synthesis is continuous. On the lagging strand it points away from the fork, so DNA is made in short fragments, each started by an RNA primer and later joined by ligase.</figcaption>
</figure>

| Enzyme | Job at the fork |
|---|---|
| **Helicase** | Unwinds the double helix by breaking the hydrogen bonds between paired bases, separating the two template strands |
| **Topoisomerase** | Works on the still-paired DNA **ahead of** the fork. Unwinding at the fork makes the DNA in front twist more tightly (supercoil). Topoisomerase cuts, untwists and rejoins the DNA to relieve this strain |
| **RNA primers** | Short RNA pieces give DNA polymerase a 3′ end to build on |
| **DNA polymerase** | Adds DNA nucleotides, complementary to the template, to the 3′ end of the primer or growing strand |
| **Ligase** | Joins the fragments on the lagging strand by forming the final covalent bond in the sugar–phosphate backbone |

### Leading and lagging strands

The two template strands at a fork run in opposite directions, but DNA polymerase can only build 5′ → 3′. So the two new strands are made in different ways:

- **Leading strand.** Its 5′ → 3′ direction points **into** the fork. As helicase opens more template, DNA polymerase simply keeps going. One primer is enough, and synthesis is **continuous**.
- **Lagging strand.** Its 5′ → 3′ direction points **away** from the fork. The polymerase can only build backwards from the fork, a short stretch at a time. Each time the fork opens a new stretch of template, a new primer is laid down and a new short fragment is made. Synthesis is **discontinuous**. (*Background:* these fragments are often called Okazaki fragments.)

To finish the lagging strand, the RNA primers are removed and the gaps are filled with DNA by a DNA polymerase. **Ligase** then seals each remaining break in the backbone, giving one continuous strand.

Every new DNA molecule ends up with one template strand and one new strand: replication is semiconservative at every fork.

*Background:* DNA polymerase also checks ("proofreads") each new base and removes most mismatches. The few errors that remain are one source of the mutations you will study in Topic 6.7.

## Worked example 1: writing the new strands at a fork

**Question.** At a replication fork, the parental DNA reads:

- Top strand: 5′-GCTTAGCATCGA-3′ (left to right)
- Bottom strand: 3′-CGAATCGTAGCT-5′ (left to right)

The fork is moving from left to right.

(a) Which template will give the leading strand, and which the lagging strand?
(b) Write the full sequence of each new strand, from 5′ to 3′.
(c) On the lagging strand, at which end of each fragment is the RNA primer?

**(a)**

1. A new strand runs antiparallel to its template and grows 5′ → 3′.
2. On the **bottom** template (3′ at the left), the new strand runs 5′ on the left to 3′ on the right. It grows to the right, **towards** the fork: this is the **leading strand**.
3. On the **top** template (5′ at the left), the new strand runs 3′ on the left to 5′ on the right. It grows to the left, **away** from the fork: this is the **lagging strand**.

**(b)**

1. Leading strand (pairs with the bottom template): **5′-GCTTAGCATCGA-3′**. It has the same sequence as the top strand, because both pair with the bottom strand.
2. Lagging strand (pairs with the top template): pair each base, then read it 5′ → 3′, which is right to left. Result: **5′-TCGATGCTAAGC-3′**. It has the same sequence as the bottom strand.

**Check.** Read the lagging strand from its 3′ end: C-G-A-A-T-C-G-T-A-G-C-T. Pair it with the top strand from its 5′ end: G–C, C–G, T–A, T–A, A–T, G–C, C–G, A–T, T–A, C–G, G–C, A–T. All twelve pairs are correct.

**(c)** Each fragment is built from its primer onwards, in the 5′ → 3′ direction, so the primer is at the **5′ end** of every fragment, the end nearest the fork. For example, if the fragment nearest the fork began with a four-base primer, the primer would read 5′-UCGA-3′ (RNA uses U, not T).

**Interpretation.** Both daughter molecules end up with the same sequence as the parent: one is top strand + new copy of the bottom strand, the other bottom strand + new copy of the top. That is semiconservative replication in practice.

## Worked example 2: testing the models with density data

**Question.** A fictional bacterium is grown for many generations on light nitrogen (¹⁴N), so all its DNA is light. It is then moved to a medium containing only heavy nitrogen (¹⁵N). Samples of DNA are separated by density.

| Rounds of replication after transfer | Bands seen (percentage of DNA) |
|---|---|
| 1 | one band, intermediate density (100%) |
| 2 | intermediate (49%) and heavy (51%) |
| 3 | intermediate (26%) and heavy (74%) |

(a) Predict the bands after rounds 1 and 2 for each model.
(b) Which model do the data support?
(c) After 3 rounds, what fraction of all DNA strands are original light strands?

**(a)** In this experiment the **new** strands are heavy and the original strands are light.

| Model | Round 1 | Round 2 |
|---|---|---|
| Conservative | 50% light, 50% heavy | 25% light, 75% heavy |
| Semiconservative | 100% intermediate | 50% intermediate, 50% heavy |
| Dispersive | one band, half heavy nitrogen (intermediate) | one band, 75% heavy nitrogen (between intermediate and heavy) |

How the semiconservative row works: after round 1, each of the 2 molecules has one light and one heavy strand. In round 2, each light strand pairs with a new heavy strand (2 intermediate molecules), and each heavy strand pairs with a new heavy strand (2 heavy molecules): 2 out of 4 = 50% each.

**(b)** Round 1 has one intermediate band and no light band, which rules out the conservative model. Round 2 has **two** separate bands, not one band at a single new position, which rules out the dispersive model. The percentages (49 : 51 and 26 : 74) match the semiconservative predictions (50 : 50 and 25 : 75) within measurement error. The data **support** the semiconservative model.

**(c)** After 3 rounds, one molecule has become 2³ = 8 molecules, with 16 strands. Only the 2 original strands are light: 2 ÷ 16 = **1/8 (12.5%)** of all strands. They are found in 2 of the 8 molecules (25%), matching the intermediate band.

## Worked example 3: why so many starting points?

**Question.** Use these model values for two fictional organisms. Each origin produces **two** forks that move in opposite directions.

- Bacterium: one circular chromosome of 3.6 × 10⁶ base pairs, one origin, each fork copies 900 nucleotides per second. Lagging-strand fragments are about 1 200 nucleotides long.
- Eukaryote: one linear chromosome of 8.0 × 10⁷ base pairs, each fork copies 40 nucleotides per second.

(a) How long does the bacterium take to copy its chromosome?
(b) About how many lagging-strand fragments, and so primers and joining steps, are needed?
(c) How long would the eukaryotic chromosome take with one origin in the middle, and how long with 1 600 evenly spaced origins?

**(a)** The two forks meet halfway round the circle, so each fork copies 3.6 × 10⁶ ÷ 2 = 1.8 × 10⁶ bp. Time = 1.8 × 10⁶ ÷ 900 = 2 000 s, which is about **33 minutes**.

**(b)** Each fork has one lagging strand that copies 1.8 × 10⁶ nucleotides, so the total lagging DNA is 3.6 × 10⁶ nucleotides. Number of fragments ≈ 3.6 × 10⁶ ÷ 1 200 = **3 000**. Each fragment needs its own primer, and ligase must make roughly 3 000 joins. The leading strands need only one primer per fork.

**(c)**

1. One origin: each fork copies 8.0 × 10⁷ ÷ 2 = 4.0 × 10⁷ bp. Time = 4.0 × 10⁷ ÷ 40 = 1.0 × 10⁶ s ≈ **11.6 days**.
2. 1 600 origins: each origin is responsible for 8.0 × 10⁷ ÷ 1 600 = 50 000 bp, so each of its two forks copies 25 000 bp. Time = 25 000 ÷ 40 = 625 s ≈ **10 minutes**.

**Interpretation.** Eukaryotic forks in this model are much slower and the chromosome is much longer, so many origins are essential to copy the DNA in reasonable time. The model ignores the ends of the chromosome and assumes all origins start together.

## Common misconceptions

- **"Replication makes one old molecule and one brand-new molecule."** That is the conservative model. Each new molecule has one old and one new strand.
- **"DNA polymerase can add nucleotides at either end."** Only at the 3′ end, so new strands always grow 5′ → 3′.
- **"DNA polymerase starts each strand."** It needs an RNA primer with a free 3′ end.
- **"The lagging strand is made 3′ → 5′."** Both strands are made 5′ → 3′. The lagging strand is made in fragments because its 5′ → 3′ direction points away from the fork.
- **"Helicase breaks the covalent backbone."** Helicase breaks the hydrogen bonds between bases. Topoisomerase is the enzyme that cuts and rejoins the backbone to relieve twisting.
- **"Topoisomerase works behind the fork."** It acts on the unreplicated DNA ahead of the fork, where overwinding builds up.
- **"Ligase joins the base pairs."** Ligase forms covalent bonds in the backbone between fragments; hydrogen bonds between bases form by themselves.
- **"The primers stay in the DNA."** RNA primers are removed and replaced with DNA before the fragments are joined.

## Where this leads

Next you will see how the same template-copying idea is used to make RNA from DNA: continue with [Topic 6.3, Transcription and RNA Processing](/advanced-course-resources/biology/6-3-transcription-rna-processing-study-guide/). Before you move on, try the [practice questions](/advanced-course-resources/biology/6-2-dna-replication-practice/), then use the [revision notes](/advanced-course-resources/biology/6-2-dna-replication-revision-notes/) and the [checklist](/advanced-course-resources/biology/6-2-dna-replication-checklist/). The previous topic is [Topic 6.1, DNA and RNA Structure](/advanced-course-resources/biology/6-1-dna-rna-structure-study-guide/).
