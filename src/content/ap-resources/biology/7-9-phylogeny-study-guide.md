---
resourceId: "mb-ap-bio-7.9-study-guide"
title: "Phylogeny: Study Guide (Biology 7.9)"
description: "Learn to read and build cladograms and phylogenetic trees, use shared derived characters and an outgroup, weigh molecular against body-form evidence and date splits with a molecular clock."
course: "biology"
unit: 7
topics: ["7.9"]
resourceType: "study-guide"
prerequisites:
  - "Common ancestry and the evidence for evolution: homologous structures, fossils and shared DNA"
  - "Mutations change DNA sequences and are passed on to offspring"
prerequisiteResources: ["mb-ap-bio-7.8-study-guide"]
learningObjectives:
  - "Read a tree: identify the root, nodes, clades and sister groups, and judge relatedness from the most recent common ancestor"
  - "Explain how a phylogenetic tree differs from a cladogram, including how time is calibrated with fossils or a molecular clock"
  - "Build a cladogram from a table of traits gained or lost, using an outgroup and shared derived characters"
  - "Compare morphological, fossil, DNA and protein evidence and explain why molecular data are usually more reliable"
  - "Explain why every tree is a testable hypothesis that is revised when new evidence appears"
skills: ["1", "2", "4", "5", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "You need simple division for percentages and molecular-clock rates. Give dates to 2 significant figures; they are estimates"
related: ["mb-ap-bio-7.9-revision-notes", "mb-ap-bio-7.9-practice", "mb-ap-bio-7.9-checklist"]
next: "mb-ap-bio-7.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "A tree is a hypothesis about how lineages are related. Each node stands for the most recent common ancestor of the lineages that branch from it, and marks a speciation event."
  - "Judge relatedness by how recently two lineages share an ancestor, not by how close their tips are drawn. Branches can rotate at a node without changing the tree."
  - "A cladogram shows only the branching order. A phylogenetic tree also shows time or amount of change, calibrated by dated fossils or a molecular clock."
  - "Shared derived characters (traits gained or lost) group lineages; the outgroup shows which state is ancestral. Traits every group shares, or that only one lineage has, do not help."
  - "Molecular data (DNA and protein sequences) usually give more reliable trees than body form, because they provide many characters and are less often misled by convergent evolution."
faqs:
  - question: "Is a cladogram the same as a phylogenetic tree?"
    answer: "Both show branching order. In this course a phylogenetic tree also shows time or amount of change along its branches; a cladogram does not, so its branch lengths mean nothing."
  - question: "Does the outgroup represent the ancestor of the other species?"
    answer: "No. The outgroup is a living (or fossil) lineage that is less closely related to the ingroup than ingroup members are to each other. It shows which character states are probably ancestral."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## A tree is a hypothesis about history

Topic 7.8 showed that all species are still evolving. Over long periods, one ancestral species can split into two, then four, then many. **Phylogeny** is the evolutionary history of a group: who branched from whom, and roughly when. Biologists draw it as a **tree**.

Nobody watched these splits happen. A tree is built from evidence that exists today: body structures of living and fossil organisms, and the sequences of DNA and proteins. So every tree is a **hypothesis**. It makes predictions that can be tested. For example, if two species sit on neighbouring branches, a gene sequenced for the first time should be more similar between them than between either of them and a distant branch. When new evidence disagrees, the tree is redrawn.

## Reading a tree

Learn the parts before you read any tree.

- **Root**: the base of the tree. It stands for the ancestor of every lineage shown.
- **Branch**: a lineage, a line of descent through time.
- **Node**: a point where one branch splits into two. A node represents the **most recent common ancestor** of all the lineages that branch from it. It also marks a speciation event: one ancestral population became two lineages that then evolved separately (Topic 7.10 explains how).
- **Tip**: the end of a branch. Tips are usually living species or groups, but can be fossil species that left no descendants.
- **Clade**: an ancestor and **all** of its descendants. On a tree, a clade is everything you would remove if you cut one branch.
- **Sister groups**: two lineages that share a node with nothing else; each is the other's closest relative on the tree.

**How to judge relatedness.** Ask: "Which two lineages share the most recent common ancestor?" Trace back from each tip until the two paths meet. The more recent (closer to the tips) that meeting node, the more closely related the lineages are. Do **not** judge by how close two tips are printed on the page.

**Rotation does not matter.** You can swing the two branches at any node around, like a mobile hanging from the ceiling. The order of the tips changes, but every node, and so every relationship, stays the same. Two drawings that look different can show the same hypothesis.

**Living tips are cousins, not ancestors.** A species at one tip did not give rise to a species at another tip. Both descend from a shared ancestor at a node, and both have kept evolving since.

## Cladograms and phylogenetic trees

The course separates two kinds of diagram.

- A **cladogram** shows only the **branching order**: which lineages share more recent ancestors. It has no time scale. Branch lengths are drawn for neatness and carry no information.
- A **phylogenetic tree** shows the branching order **and** the amount of time or change along each branch. Nodes are placed against a time axis.

<figure>
<svg viewBox="0 0 700 330" role="img" aria-labelledby="t1-title t1-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="t1-title">The same four lineages as a cladogram and as a phylogenetic tree</title>
<desc id="t1-desc">Left panel, labelled cladogram, no time scale: a diagonal line rises from a root at the bottom left to tip D at the top right. Vertical branches leave it to tips A, B and C in that order, so A branches off first, then B, then C, and C and D are sister lineages. Right panel, labelled phylogenetic tree: the same branching drawn with right-angled branches against a horizontal axis of millions of years ago, from 30 on the left to 0, the present, on the right. A splits from the others 30 million years ago, B splits from C and D 18 million years ago, and C and D split 6 million years ago. Black dots mark the three nodes in each panel.</desc>
<rect x="0" y="0" width="700" height="330" fill="#ffffff"/>
<text x="150" y="22" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Cladogram (no time scale)</text>
<line x1="25" y1="315" x2="40" y2="300" stroke="#1d2b44" stroke-width="3"/>
<line x1="40" y1="300" x2="270" y2="70" stroke="#1d2b44" stroke-width="3"/>
<line x1="70" y1="270" x2="70" y2="70" stroke="#1d2b44" stroke-width="3"/>
<line x1="140" y1="200" x2="140" y2="70" stroke="#1d2b44" stroke-width="3"/>
<line x1="210" y1="130" x2="210" y2="70" stroke="#1d2b44" stroke-width="3"/>
<circle cx="70" cy="270" r="6" fill="#1d2b44"/>
<circle cx="140" cy="200" r="6" fill="#1d2b44"/>
<circle cx="210" cy="130" r="6" fill="#1d2b44"/>
<text x="70" y="58" text-anchor="middle" font-size="16" font-weight="700" fill="#1d2b44">A</text>
<text x="140" y="58" text-anchor="middle" font-size="16" font-weight="700" fill="#1d2b44">B</text>
<text x="210" y="58" text-anchor="middle" font-size="16" font-weight="700" fill="#1d2b44">C</text>
<text x="270" y="58" text-anchor="middle" font-size="16" font-weight="700" fill="#1d2b44">D</text>
<text x="40" y="324" font-size="12" fill="#1d2b44">root</text>
<line x1="330" y1="30" x2="330" y2="310" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 5"/>
<text x="510" y="22" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Phylogenetic tree (time scale)</text>
<line x1="360" y1="122.5" x2="380" y2="122.5" stroke="#1d2b44" stroke-width="3"/>
<line x1="380" y1="70" x2="380" y2="175" stroke="#1d2b44" stroke-width="3"/>
<line x1="380" y1="70" x2="640" y2="70" stroke="#1d2b44" stroke-width="3"/>
<line x1="380" y1="175" x2="484" y2="175" stroke="#1d2b44" stroke-width="3"/>
<line x1="484" y1="130" x2="484" y2="220" stroke="#1d2b44" stroke-width="3"/>
<line x1="484" y1="130" x2="640" y2="130" stroke="#1d2b44" stroke-width="3"/>
<line x1="484" y1="220" x2="588" y2="220" stroke="#1d2b44" stroke-width="3"/>
<line x1="588" y1="190" x2="588" y2="250" stroke="#1d2b44" stroke-width="3"/>
<line x1="588" y1="190" x2="640" y2="190" stroke="#1d2b44" stroke-width="3"/>
<line x1="588" y1="250" x2="640" y2="250" stroke="#1d2b44" stroke-width="3"/>
<circle cx="380" cy="122.5" r="6" fill="#1d2b44"/>
<circle cx="484" cy="175" r="6" fill="#1d2b44"/>
<circle cx="588" cy="220" r="6" fill="#1d2b44"/>
<text x="650" y="75" font-size="16" font-weight="700" fill="#1d2b44">A</text>
<text x="650" y="135" font-size="16" font-weight="700" fill="#1d2b44">B</text>
<text x="650" y="195" font-size="16" font-weight="700" fill="#1d2b44">C</text>
<text x="650" y="255" font-size="16" font-weight="700" fill="#1d2b44">D</text>
<line x1="380" y1="280" x2="640" y2="280" stroke="#1d2b44" stroke-width="2"/>
<line x1="380" y1="280" x2="380" y2="288" stroke="#1d2b44" stroke-width="2"/>
<line x1="466.7" y1="280" x2="466.7" y2="288" stroke="#1d2b44" stroke-width="2"/>
<line x1="553.3" y1="280" x2="553.3" y2="288" stroke="#1d2b44" stroke-width="2"/>
<line x1="640" y1="280" x2="640" y2="288" stroke="#1d2b44" stroke-width="2"/>
<text x="380" y="303" text-anchor="middle" font-size="12" fill="#1d2b44">30</text>
<text x="466.7" y="303" text-anchor="middle" font-size="12" fill="#1d2b44">20</text>
<text x="553.3" y="303" text-anchor="middle" font-size="12" fill="#1d2b44">10</text>
<text x="640" y="303" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<text x="510" y="322" text-anchor="middle" font-size="13" fill="#1d2b44">Millions of years ago</text>
</svg>
<figcaption>Figure 1. Four fictional snail species. Both diagrams show the same branching order: A split off first, then B, and C and D are sister species. Only the phylogenetic tree (right) tells you when: about 30, 18 and 6 million years ago. Dots mark nodes.</figcaption>
</figure>

**Where the dates come from.** There are two ways to calibrate a tree.

1. **Fossils.** A fossil whose age is known from the rock layers around it (dated with radioactive isotopes) gives a minimum age for the lineage it belongs to. If the oldest fossil clearly on the C line is 6 million years old, the C–D split cannot be younger than that.
2. **A molecular clock.** Mutations build up in a gene at a roughly steady average rate. The number of sequence differences between two species is then roughly proportional to the time since their lineages split. A clock has to be **calibrated** first, usually with one split dated by fossils. Then it can date other splits (see Worked example 2).

A molecular clock gives estimates, not exact dates. Different genes tick at different rates, and the rate can vary between lineages.

## Building a tree from traits

A **character** is any heritable feature you can compare, such as "eyes present or absent". Each character has states. To build a tree, you need to know which state is old and which is new.

- An **ancestral character** was already present in the common ancestor of the whole group.
- A **derived character** is a new state that appeared in one lineage and was inherited by its descendants.

Derived does not only mean "gained". **Losing** a trait is also a derived change. Snakes lost their legs, and many cave animals lost their eyes; both losses are derived characters.

**The outgroup tells you which state is ancestral.** The **outgroup** is a lineage known (from other evidence) to be less closely related to the rest than they are to each other. The rest form the **ingroup**. A state found in the outgroup is assumed to be ancestral; a different state found only in some ingroup members is assumed to be derived.

**Only shared derived characters group lineages.** A derived character found in two or more lineages is a **shared derived character**. The simplest explanation is that it arose once, in their common ancestor, and was inherited. So it marks a clade. Two kinds of character do not help:

- a **shared ancestral character** (present in the outgroup too) says only that everyone inherited it from far back;
- a derived character found in only **one** lineage tells you about that lineage, not about how it is grouped with others.

When characters disagree, biologists usually prefer the tree that needs the fewest changes (the principle of **parsimony**; background, not tested in detail).

## Evidence: body form, fossils, DNA and proteins

Trees can be built from several kinds of data.

| Evidence | What is compared | Strengths | Limits |
|---|---|---|---|
| Morphology of living species | bones, organs, cell features | easy to observe; works for many groups | relatively few characters; similar shapes can evolve separately |
| Fossils | the same structures in extinct species | shows past forms and gives dates for calibration | record is incomplete; soft parts rarely preserved |
| DNA sequences | the order of bases in the same gene or genome | thousands of characters; can compare very different organisms | rates vary between genes and lineages |
| Protein sequences | the order of amino acids in the same protein | easy to align; good for older splits | fewer characters than DNA |

**Why molecular data are usually more reliable.** First, a single gene gives hundreds or thousands of characters to count, against a few dozen body features. Second, body features can mislead. Unrelated lineages living in similar environments can evolve similar shapes through **convergent evolution** (Topic 7.10). Their similarity is **analogous**, not inherited from a common ancestor. Long runs of DNA are very unlikely to become similar by chance in the same way. Third, molecular differences can be counted objectively.

Molecular data are not perfect, so the best trees combine both kinds of evidence. Fossils remain the main way to put real dates on a tree.

**A real revision.** Whales were long placed on their own branch of the mammal tree, because their body form is so unusual. Comparisons of DNA instead placed whales inside the even-toed hoofed mammals, with **hippopotamuses** as their closest living relatives. Fossil early whales with legs then turned out to have a "double-pulley" ankle bone, a feature otherwise found only in even-toed hoofed mammals. Two separate lines of evidence agreed, and the tree was redrawn. This is what "trees are hypotheses" means in practice.

## Worked example 1: building a cladogram from a character table

**Question.** A biologist studies five fictional species of small crustaceans (P, Q, R, S and T) from rivers and caves. Outgroup O is a related marine species. She scores six characters (1 = present, 0 = absent).

| Character | O | P | Q | R | S | T |
|---|---|---|---|---|---|---|
| Gills | 1 | 1 | 1 | 1 | 1 | 1 |
| a. Survives in fresh water | 0 | 1 | 1 | 1 | 1 | 1 |
| b. Clawed first legs | 0 | 1 | 1 | 0 | 0 | 0 |
| c. Antennae longer than body | 0 | 0 | 0 | 1 | 1 | 1 |
| d. Body pigment lost (pale) | 0 | 0 | 0 | 0 | 1 | 1 |
| e. Eyes lost | 0 | 0 | 0 | 0 | 0 | 1 |

(a) Identify the derived characters and say which ones are useful for grouping. (b) Draw the cladogram. (c) Explain why "eyes lost" counts even though it is a loss.

**(a) Sort the characters.**

1. Gills are present in the outgroup, so they are **ancestral**. Every species shares them; they cannot separate any groups.
2. Characters a–e are absent in O, so their presence is **derived**.
3. Find who shares each derived character: a: P, Q, R, S, T. b: P, Q. c: R, S, T. d: S, T. e: T only.
4. Characters a–d are shared derived characters, so each marks a clade. Character e belongs to T alone; it goes on T's own branch but does not group T with anything.

**(b) Draw the tree.** Start from the character shared by the most species and work inward.

1. a defines the ingroup (P–T), separating it from O.
2. b defines the clade P + Q; c defines the clade R + S + T.
3. Inside R + S + T, d defines the clade S + T, so S and T are sister species.
4. The result is shown in Figure 2. Every character changes only once on this tree. Any other arrangement, for example pairing R with S, would need pigment loss to happen twice.

<figure>
<svg viewBox="0 0 680 430" role="img" aria-labelledby="t2-title t2-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="t2-title">Cladogram of five crustacean species and an outgroup</title>
<desc id="t2-desc">Right-angled cladogram with tips on the right, from top to bottom: O outgroup, P, Q, R, S, T. O branches off first from the root. The ingroup branch carries mark a. It splits into a clade of P and Q, whose stem carries mark b, and a clade of R, S and T, whose stem carries mark c. Within that, R branches off and S and T form a clade whose stem carries mark d. The branch leading only to T carries mark e. A key below reads: a, survives in fresh water; b, clawed first legs; c, antennae longer than body; d, body pigment lost; e, eyes lost.</desc>
<rect x="0" y="0" width="680" height="430" fill="#ffffff"/>
<line x1="40" y1="128.75" x2="60" y2="128.75" stroke="#1d2b44" stroke-width="3"/>
<line x1="60" y1="50" x2="60" y2="207.5" stroke="#1d2b44" stroke-width="3"/>
<line x1="60" y1="50" x2="470" y2="50" stroke="#1d2b44" stroke-width="3"/>
<line x1="60" y1="207.5" x2="150" y2="207.5" stroke="#1d2b44" stroke-width="3"/>
<line x1="150" y1="140" x2="150" y2="275" stroke="#1d2b44" stroke-width="3"/>
<line x1="150" y1="140" x2="330" y2="140" stroke="#1d2b44" stroke-width="3"/>
<line x1="330" y1="110" x2="330" y2="170" stroke="#1d2b44" stroke-width="3"/>
<line x1="330" y1="110" x2="470" y2="110" stroke="#1d2b44" stroke-width="3"/>
<line x1="330" y1="170" x2="470" y2="170" stroke="#1d2b44" stroke-width="3"/>
<line x1="150" y1="275" x2="260" y2="275" stroke="#1d2b44" stroke-width="3"/>
<line x1="260" y1="230" x2="260" y2="320" stroke="#1d2b44" stroke-width="3"/>
<line x1="260" y1="230" x2="470" y2="230" stroke="#1d2b44" stroke-width="3"/>
<line x1="260" y1="320" x2="370" y2="320" stroke="#1d2b44" stroke-width="3"/>
<line x1="370" y1="290" x2="370" y2="350" stroke="#1d2b44" stroke-width="3"/>
<line x1="370" y1="290" x2="470" y2="290" stroke="#1d2b44" stroke-width="3"/>
<line x1="370" y1="350" x2="470" y2="350" stroke="#1d2b44" stroke-width="3"/>
<line x1="105" y1="199" x2="105" y2="216" stroke="#1d2b44" stroke-width="4"/>
<text x="105" y="192" text-anchor="middle" font-size="15" font-weight="700" fill="#1d2b44">a</text>
<line x1="240" y1="132" x2="240" y2="149" stroke="#1d2b44" stroke-width="4"/>
<text x="240" y="125" text-anchor="middle" font-size="15" font-weight="700" fill="#1d2b44">b</text>
<line x1="205" y1="267" x2="205" y2="284" stroke="#1d2b44" stroke-width="4"/>
<text x="205" y="260" text-anchor="middle" font-size="15" font-weight="700" fill="#1d2b44">c</text>
<line x1="315" y1="312" x2="315" y2="329" stroke="#1d2b44" stroke-width="4"/>
<text x="315" y="305" text-anchor="middle" font-size="15" font-weight="700" fill="#1d2b44">d</text>
<line x1="420" y1="342" x2="420" y2="359" stroke="#1d2b44" stroke-width="4"/>
<text x="420" y="335" text-anchor="middle" font-size="15" font-weight="700" fill="#1d2b44">e</text>
<text x="480" y="55" font-size="15" font-weight="700" fill="#1d2b44">O (outgroup)</text>
<text x="480" y="115" font-size="15" font-weight="700" fill="#1d2b44">P</text>
<text x="480" y="175" font-size="15" font-weight="700" fill="#1d2b44">Q</text>
<text x="480" y="235" font-size="15" font-weight="700" fill="#1d2b44">R</text>
<text x="480" y="295" font-size="15" font-weight="700" fill="#1d2b44">S</text>
<text x="480" y="355" font-size="15" font-weight="700" fill="#1d2b44">T</text>
<text x="40" y="395" font-size="13" fill="#1d2b44">Key (thick bar = character appears): a survives in fresh water · b clawed first legs · c long antennae</text>
<text x="40" y="415" font-size="13" fill="#1d2b44">d body pigment lost · e eyes lost</text>
</svg>
<figcaption>Figure 2. Cladogram for Worked example 1. Each thick bar marks where a derived character first appeared. Everything to the right of a bar inherited that character. There is no time scale.</figcaption>
</figure>

**(c) Losses count.** The ancestors of these species had eyes, as the outgroup still does. Losing them is a heritable change, so "eyes lost" is a derived state just like "pigment lost". In a dark cave, eyes and pigment give no advantage, so their loss is not selected against.

**Check.** Counting derived characters gives P 2, Q 2, R 2, S 3, T 4. T has the most, but that does **not** make T "more evolved". All five lineages have been evolving for the same length of time since their common ancestor.

## Worked example 2: molecular data and a molecular clock

**Question.** The same 1,000-base gene was sequenced in four fictional river fish, J, K, L and M. The table gives the number of differences between each pair.

| | J | K | L | M |
|---|---|---|---|---|
| **J** | — | 12 | 30 | 52 |
| **K** | | — | 30 | 52 |
| **L** | | | — | 52 |

A dated fossil shows that the lineage leading to L split from the lineage leading to J and K **7.5 million years ago**. (a) Draw the branching order. (b) Calibrate the clock. (c) Estimate when J and K split, and when M split from the others. (d) J and L both have a slim body and live in fast streams, while K is deep-bodied. Explain why the molecular result should be preferred.

**(a) Branching order.**

1. The smallest number is J–K (12, which is 1.2% of 1,000 bases). J and K are sister species.
2. L differs from J and from K by the same amount (30, 3.0%). L joins the J + K clade next.
3. M differs from all three by 52 (5.2%). M branched off first.
4. Tree: M splits from (L, (J, K)).

**(b) Calibrate.** Rate = differences ÷ time since the split = 30 ÷ 7.5 million years = **4.0 differences per million years** of separation. (This counts changes on both branches together, since both lineages have been mutating since the split.)

**(c) Estimate other dates.** Time = differences ÷ rate.

1. J–K split: 12 ÷ 4.0 = **3.0 million years ago**.
2. M split: 52 ÷ 4.0 = **13 million years ago**.

**Check.** The dates fall in the right order: 13 > 7.5 > 3.0, matching the branching order in (a). These are estimates that assume a steady rate on every branch.

**(d) Interpret.** The body shape suggests J and L are closest, but 1,000 bases point the other way. A slim body is an advantage in fast water, so it could have evolved separately in J and L: this would be convergent evolution. The sequence data offer far more characters, and similar sequences are much less likely to arise separately. The molecular tree is the better-supported hypothesis. A good test would be to sequence a second, unrelated gene and see if it gives the same branching order.

## Common misconceptions

- **"Tips printed next to each other are the closest relatives."** Relatedness depends on the most recent shared node. Rotating branches can put any sister pair far apart on the page.
- **"The species on the left (or at the top) is the most primitive."** Every living tip is a modern species. The position of a tip says nothing about how advanced it is.
- **"One living species evolved from another living species."** Living species share common ancestors at nodes; neither is the ancestor of the other.
- **"The outgroup is the ancestor."** It is a separate lineage used to tell ancestral from derived states.
- **"Long branches on a cladogram mean a long time."** Only a phylogenetic tree with a scale shows time or amount of change.
- **"Any shared feature shows close relationship."** Shared ancestral characters and convergent (analogous) features do not.
- **"Losing a trait is going backwards, so it cannot be used."** A loss is a derived character and can define a clade.
- **"A published tree is a proven fact."** It is the best current hypothesis and can change with new data.

## Where this leads

Every node on a tree is a speciation event. The next topic, [Speciation](/advanced-course-resources/biology/7-10-speciation-study-guide/), explains how one population becomes two species and why rates of speciation vary. Now test yourself with the [practice questions](/advanced-course-resources/biology/7-9-phylogeny-practice/), then use the [revision notes](/advanced-course-resources/biology/7-9-phylogeny-revision-notes/) and the [checklist](/advanced-course-resources/biology/7-9-phylogeny-checklist/). For the evidence behind trees, look back at [Continuing Evolution](/advanced-course-resources/biology/7-8-continuing-evolution-study-guide/) and the earlier topics of this unit.
