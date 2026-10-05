---
resourceId: "mb-ap-chem-2.6-study-guide"
title: "Resonance and Formal Charge: Study Guide (Chemistry 2.6)"
description: "Learn when one Lewis diagram is not enough, how resonance predicts equal bond lengths, and how to use formal charge and the octet rule to choose the best Lewis diagram."
course: "chemistry"
unit: 2
topics: ["2.6"]
resourceType: "study-guide"
prerequisites:
  - "Drawing Lewis diagrams for molecules and polyatomic ions (Topic 2.5)"
  - "Electronegativity trends across a period and down a group"
prerequisiteResources: ["mb-ap-chem-2.5-study-guide"]
learningObjectives:
  - "Draw all the equivalent resonance structures for a molecule or ion and explain what the real structure is like"
  - "Calculate the average bond order from a set of resonance structures and use it to predict bond lengths"
  - "Calculate the formal charge on every atom in a Lewis diagram and check that they add up to the overall charge"
  - "Use the octet rule and formal charge to choose the best of several nonequivalent Lewis diagrams"
  - "Explain why the Lewis model breaks down for species with an odd number of valence electrons"
skills: ["6"]
studyMinutes: 45
difficulty: "core"
calculator: "none-needed"
calculatorNote: "Formal charges are whole numbers; average bond orders are simple fractions"
related: ["mb-ap-chem-2.6-revision-notes", "mb-ap-chem-2.6-practice", "mb-ap-chem-2.6-checklist"]
next: "mb-ap-chem-2.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "When two or more equivalent Lewis diagrams can be drawn, the real structure is a resonance hybrid: a blend of them, not a switch between them."
  - "Resonance makes the bonds involved identical. Their bond order is the average, such as 1.5 in the formate ion."
  - "Formal charge = valence electrons − nonbonding electrons − ½ × bonding electrons. The formal charges add up to the overall charge."
  - "The best diagram gives C, N, O and F an octet, keeps formal charges near zero, and puts any negative formal charge on the most electronegative atom."
  - "Species with an odd number of valence electrons, such as NO₂, cannot give every atom an octet: a limitation of the Lewis model."
faqs:
  - question: "Does a molecule with resonance flip between its structures?"
    answer: "No. The molecule has one structure all the time. The separate resonance diagrams are a limitation of drawing electrons as fixed pairs; the real electron arrangement is in between."
  - question: "Is formal charge the real charge on an atom?"
    answer: "No. It is bookkeeping that assumes every bond is shared exactly equally. Real charges depend on electronegativity. Formal charge is still a useful guide for choosing between diagrams."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## When one Lewis diagram is not enough

In Topic 2.5 you drew one Lewis diagram for each molecule. Sometimes the method gives you a choice. Take the **formate ion**, HCO₂⁻ (the ion formed from methanoic acid). Carbon is bonded to H and to two O atoms. There are 1 + 4 + 2(6) + 1 = 18 valence electrons. After the single bonds and the outer octets, carbon is one pair short, so one C–O bond must become a double bond. But which one? Both oxygen atoms are identical, so you can draw the double bond to either.

These two diagrams are **resonance structures**. They have the same skeleton and the same number of electrons. Only the position of some electrons (here, one bonding pair and one lone pair) is different. Resonance structures are joined by a double-headed arrow (↔).

<figure>
<svg viewBox="0 0 720 200" role="img" aria-labelledby="formate-title formate-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="formate-title">The two resonance structures of the formate ion</title>
<desc id="formate-desc">Two Lewis diagrams joined by a double-headed arrow. In each, carbon has a single bond up to hydrogen and bonds to two oxygen atoms, left and right, and the diagram is in square brackets with a minus charge. In the first structure the left oxygen is double-bonded and has two lone pairs, and the right oxygen is single-bonded with three lone pairs and a formal charge of minus one. The second structure is the mirror image: the right oxygen is double-bonded and the left oxygen carries the minus one formal charge. A note on the right says the real ion has two identical carbon-oxygen bonds with bond order 1.5, and the negative charge is shared equally by the two oxygen atoms.</desc>
<g font-size="22" fill="#1d2b44" text-anchor="middle" dominant-baseline="central" font-weight="600">
<text x="50" y="120">O</text><text x="110" y="120">C</text><text x="110" y="60">H</text><text x="170" y="120">O</text>
<text x="340" y="120">O</text><text x="400" y="120">C</text><text x="400" y="60">H</text><text x="460" y="120">O</text>
</g>
<g stroke="#1d2b44" stroke-width="2.5" fill="none">
<path d="M110 74 V106 M64 114 H96 M64 126 H96 M124 120 H156"/>
<path d="M400 74 V106 M354 120 H386 M414 114 H446 M414 126 H446"/>
<path d="M22 40 H14 V180 H22 M198 40 H206 V180 H198"/>
<path d="M312 40 H304 V180 H312 M488 40 H496 V180 H488"/>
</g>
<g fill="#1d2b44">
<circle cx="45" cy="100" r="2.8"/><circle cx="55" cy="100" r="2.8"/><circle cx="45" cy="140" r="2.8"/><circle cx="55" cy="140" r="2.8"/>
<circle cx="165" cy="100" r="2.8"/><circle cx="175" cy="100" r="2.8"/><circle cx="190" cy="115" r="2.8"/><circle cx="190" cy="125" r="2.8"/><circle cx="165" cy="140" r="2.8"/><circle cx="175" cy="140" r="2.8"/>
<circle cx="335" cy="100" r="2.8"/><circle cx="345" cy="100" r="2.8"/><circle cx="320" cy="115" r="2.8"/><circle cx="320" cy="125" r="2.8"/><circle cx="335" cy="140" r="2.8"/><circle cx="345" cy="140" r="2.8"/>
<circle cx="455" cy="100" r="2.8"/><circle cx="465" cy="100" r="2.8"/><circle cx="455" cy="140" r="2.8"/><circle cx="465" cy="140" r="2.8"/>
</g>
<g font-size="20" fill="#1d2b44" font-weight="600"><text x="210" y="46">−</text><text x="500" y="46">−</text></g>
<g font-size="12" fill="#1d2b44" text-anchor="middle"><text x="170" y="164">FC −1</text><text x="340" y="164">FC −1</text></g>
<path d="M233 120 H277" stroke="#1d2b44" stroke-width="2" marker-start="url(#fm-arr)" marker-end="url(#fm-arr)"/>
<defs><marker id="fm-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="525" y="55" width="185" height="110" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="617" y="80" font-weight="600">The real ion</text>
<text x="617" y="102">both C–O bonds identical</text>
<text x="617" y="122">bond order = 3 ÷ 2 = 1.5</text>
<text x="617" y="142">charge shared by both O</text>
</g>
</svg>
<figcaption>Figure 1. The two resonance structures of the formate ion. Neither one alone describes the ion. The real ion (dashed box) is a hybrid with two identical C–O bonds, each between a single and a double bond.</figcaption>
</figure>

### The resonance hybrid

Each resonance structure on its own makes a wrong prediction: one long C–O single bond and one short C=O double bond. Measurements show that the two C–O bonds in formate are the **same length**. The real ion is a **resonance hybrid**, a single structure that is a blend of the resonance diagrams. It does not flip between them. The electrons in the extra bond are spread over both C–O positions, and so is the negative charge.

This is why resonance is not optional. When equivalent structures exist, you need all of them to make correct predictions about:

- **bond lengths** (the resonance bonds are equal, and between single and double length);
- **bond energies** (equal, and between single and double);
- **where the charge is** (shared, not on one atom).

### Average bond order

Bond order is the number of shared pairs between two atoms: 1 for single, 2 for double, 3 for triple. For a set of equivalent resonance structures:

**average bond order = (total number of bonds to the equivalent atoms in one structure) ÷ (number of equivalent bond positions)**

The higher the bond order, the shorter and stronger the bond. You will use this in Topic 2.7.

## Worked example 1: the nitrite ion

**Question.** The nitrite ion, NO₂⁻, has nitrogen bonded to two oxygen atoms. (a) Draw its resonance structures. (b) Find the average N–O bond order. (c) Predict how the two N–O bond lengths compare.

**(a)** Count: 5 + 2(6) + 1 = **18 electrons**. Two N–O single bonds use 4; three lone pairs on each O use 12; 2 are left and go on N as a lone pair. Nitrogen now has 2 bonds + 1 lone pair = 6 electrons, so one O lone pair must become an N=O bond. Either oxygen can provide it, giving two equivalent structures:

[O=N–O]⁻ ↔ [O–N=O]⁻

In each: N has one lone pair, the double-bonded O has two lone pairs, and the single-bonded O has three lone pairs. Check: 3 bonds (6) + 6 lone pairs (12) = 18. ✓

**(b)** In one structure there are 3 bonds (one double + one single) spread over 2 N–O positions: average bond order = 3 ÷ 2 = **1.5**.

**(c)** The two N–O bonds are **equal in length**, longer than a typical N=O double bond and shorter than a typical N–O single bond.

**Interpretation.** A student who draws only one structure would predict two different bond lengths, which is wrong. Resonance turns a qualitatively wrong prediction into a right one.

## Formal charge

Sometimes the possible diagrams are **not** equivalent: they differ in skeleton, or in where the multiple bonds go between different atoms. To compare them you need **formal charge** (FC).

**FC = (valence electrons of the free atom) − (nonbonding electrons) − ½ × (bonding electrons)**

A fast way to do this from a diagram: FC = valence electrons − dots − lines, where you count each dot as one electron and each line touching that atom as one.

Formal charge pretends that every bonding pair is shared exactly equally. It is a bookkeeping tool, not the real charge on the atom. Two rules always hold:

- In a neutral molecule, the formal charges add up to **zero**.
- In an ion, they add up to the **charge of the ion**.

A neutral atom with its usual bonding pattern from Topic 2.5 (C with 4 bonds; N with 3 bonds and 1 lone pair; O with 2 bonds and 2 lone pairs; halogen with 1 bond and 3 lone pairs) has FC = 0. An O with only one bond and three lone pairs has FC = 6 − 6 − 1 = −1. An N with four bonds and no lone pairs (as in NH₄⁺) has FC = 5 − 0 − 4 = +1.

## Choosing the best Lewis diagram

When several valid diagrams can be drawn, the one that best predicts structure and properties usually:

1. **Gives every period 2 atom (C, N, O, F) an octet.** These atoms can never exceed 8.
2. **Has formal charges as close to zero as possible.** Fewer and smaller formal charges are better.
3. **Puts any negative formal charge on the most electronegative atom** (and any positive one on the least electronegative).
4. **Avoids formal charges of the same sign on neighbouring atoms.**

Formal charge also explains two choices made in Topic 2.5:

- **COCl₂.** With C=O, every atom has FC = 0. With C=Cl instead, the double-bonded Cl has FC = 7 − 4 − 2 = +1 and the single-bonded O has FC = 6 − 6 − 1 = −1. The C=O diagram is better.
- **BF₃.** With three single bonds, every FC is 0 even though B has only 6 electrons. A B=F double bond would give boron FC = 3 − 0 − 4 = −1 and that fluorine FC = 7 − 4 − 2 = +1: positive charge on the most electronegative element. So the incomplete octet is the better model.

## Worked example 2: choosing among nonequivalent structures of N₂O

**Question.** Dinitrogen monoxide, N₂O, is a linear molecule. (a) Use formal charge to decide whether the skeleton is N–N–O or N–O–N. (b) For the correct skeleton, draw three resonance structures and decide which contributes most.

**Count.** 2(5) + 6 = **16 electrons**. Needed for octets: 3 × 8 = 24, so 24 − 16 = 8 shared electrons = 4 bonds between the three atoms.

**(a)** Try N–O–N with two double bonds, N=O=N. Each N has 2 lone pairs: FC = 5 − 4 − 2 = −1. The O has no lone pairs: FC = 6 − 0 − 4 = **+2**. A +2 formal charge on the most electronegative atom is very unfavourable. Now try N–N–O: the best structure (below) has FCs of 0, +1 and −1 only. The skeleton is **N–N–O**, with nitrogen in the centre. This matches the guideline that the less electronegative element is central.

**(b)** Four bonds can be arranged on the N–N–O skeleton in three ways. Figure 2 shows them with formal charges above each atom.

<figure>
<svg viewBox="0 0 660 215" role="img" aria-labelledby="n2o-title n2o-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="n2o-title">Three resonance structures of N₂O with formal charges</title>
<desc id="n2o-desc">Three Lewis diagrams of N, N, O in a row, joined by double-headed arrows, with formal charges written above each atom. Structure (i): N double bond N double bond O; the end nitrogen and the oxygen each have two lone pairs; formal charges minus 1, plus 1, 0. Structure (ii): N triple bond N single bond O; the end nitrogen has one lone pair and the oxygen three; formal charges 0, plus 1, minus 1; labelled best. Structure (iii): N single bond N triple bond O; the end nitrogen has three lone pairs and the oxygen one; formal charges minus 2, plus 1, plus 1; labelled rejected.</desc>
<g font-size="22" fill="#1d2b44" text-anchor="middle" dominant-baseline="central" font-weight="600">
<text x="45" y="110">N</text><text x="110" y="110">N</text><text x="175" y="110">O</text>
<text x="265" y="110">N</text><text x="330" y="110">N</text><text x="395" y="110">O</text>
<text x="485" y="110">N</text><text x="550" y="110">N</text><text x="615" y="110">O</text>
</g>
<g stroke="#1d2b44" stroke-width="2.5" fill="none">
<path d="M59 104 H96 M59 116 H96 M124 104 H161 M124 116 H161"/>
<path d="M279 103 H316 M279 110 H316 M279 117 H316 M344 110 H381"/>
<path d="M499 110 H536 M564 103 H601 M564 110 H601 M564 117 H601"/>
</g>
<g fill="#1d2b44">
<circle cx="40" cy="90" r="2.8"/><circle cx="50" cy="90" r="2.8"/><circle cx="40" cy="130" r="2.8"/><circle cx="50" cy="130" r="2.8"/>
<circle cx="170" cy="90" r="2.8"/><circle cx="180" cy="90" r="2.8"/><circle cx="170" cy="130" r="2.8"/><circle cx="180" cy="130" r="2.8"/>
<circle cx="245" cy="105" r="2.8"/><circle cx="245" cy="115" r="2.8"/>
<circle cx="390" cy="90" r="2.8"/><circle cx="400" cy="90" r="2.8"/><circle cx="415" cy="105" r="2.8"/><circle cx="415" cy="115" r="2.8"/><circle cx="390" cy="130" r="2.8"/><circle cx="400" cy="130" r="2.8"/>
<circle cx="480" cy="90" r="2.8"/><circle cx="490" cy="90" r="2.8"/><circle cx="465" cy="105" r="2.8"/><circle cx="465" cy="115" r="2.8"/><circle cx="480" cy="130" r="2.8"/><circle cx="490" cy="130" r="2.8"/>
<circle cx="635" cy="105" r="2.8"/><circle cx="635" cy="115" r="2.8"/>
</g>
<g font-size="14" fill="#1d2b44" text-anchor="middle">
<text x="45" y="62">−1</text><text x="110" y="62">+1</text><text x="175" y="62">0</text>
<text x="265" y="62">0</text><text x="330" y="62">+1</text><text x="395" y="62">−1</text>
<text x="485" y="62">−2</text><text x="550" y="62">+1</text><text x="615" y="62">+1</text>
</g>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<path d="M200 110 H230" marker-start="url(#n2o-arr)" marker-end="url(#n2o-arr)"/>
<path d="M425 110 H452" marker-start="url(#n2o-arr)" marker-end="url(#n2o-arr)"/>
</g>
<defs><marker id="n2o-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="110" y="170">(i) acceptable</text><text x="110" y="188">− charge on N, not O</text>
<text x="330" y="170" font-weight="700">(ii) best</text><text x="330" y="188">− charge on O</text>
<text x="550" y="170">(iii) rejected</text><text x="550" y="188">−2, and + on O</text>
</g>
</svg>
<figcaption>Figure 2. Resonance structures of N₂O with formal charges written above each atom. All three give every atom an octet, so formal charge decides between them.</figcaption>
</figure>

Working for each structure (FC = valence − nonbonding − ½ bonding):

| Structure | End N | Central N | O | Sum |
|---|---|---|---|---|
| (i) N=N=O | 5 − 4 − 2 = −1 | 5 − 0 − 4 = +1 | 6 − 4 − 2 = 0 | 0 ✓ |
| (ii) N≡N–O | 5 − 2 − 3 = 0 | 5 − 0 − 4 = +1 | 6 − 6 − 1 = −1 | 0 ✓ |
| (iii) N–N≡O | 5 − 6 − 1 = −2 | 5 − 0 − 4 = +1 | 6 − 2 − 3 = +1 | 0 ✓ |

- **(iii) is rejected:** it has a −2 charge, and a positive charge on oxygen, the most electronegative atom, next to another positive charge.
- **(i) and (ii)** both have the smallest possible charges (−1, +1, 0). **(ii) is best** because its negative formal charge sits on oxygen, which is more electronegative than nitrogen.

**Interpretation.** Unlike formate, these structures are not equivalent, so they do not contribute equally. The real molecule is closest to (ii), with a smaller contribution from (i). Formal charge lets you rank them.

## When the octet rule and formal charge disagree

For central atoms in period 3 and beyond, the two criteria can point in different directions. In the sulfate ion, SO₄²⁻ (32 electrons):

- With **four S–O single bonds**, every atom has an octet, but S has FC = 6 − 0 − 4 = +2 and each O has FC = −1.
- With **two S=O double bonds and two S–O single bonds**, S has 12 electrons (an expanded octet), and the formal charges are smaller: S is 0, the double-bonded O atoms are 0 and the single-bonded O atoms are −1.

Both are valid Lewis diagrams, and both predict four equal S–O bonds once resonance is included. Formal charge favours the second; the octet rule favours the first. In a written answer, say which criterion you are applying and apply it correctly.

## Worked example 3: a limitation of the model

**Question.** Nitrogen dioxide, NO₂, has nitrogen bonded to two oxygen atoms. (a) Count its valence electrons. (b) Explain why no Lewis diagram can give every atom an octet. (c) Suggest how this links to an observed property of NO₂.

**(a)** 5 + 2(6) = **17 electrons**: an odd number.

**(b)** A Lewis diagram places electrons in pairs. With 17 electrons, at least one electron must be **unpaired**, so at least one atom is surrounded by an odd number of electrons and cannot have an octet. A common diagram is O=N–O with the single electron on nitrogen (N then has 7 electrons; formal charges N +1, O 0, O −1). You could also place the single electron on the single-bonded oxygen (which makes every formal charge zero). The Lewis model cannot reliably tell you where an unpaired electron is. This is a real **limitation** of the Lewis model, not a mistake in your counting.

**(c)** Species with an unpaired electron (radicals) tend to be reactive. Brown NO₂ gas reversibly combines in pairs at lower temperatures to form colourless dinitrogen tetroxide, N₂O₄. In N₂O₄ the two unpaired electrons pair up to form an N–N bond, and every atom can be given an octet.

## Common misconceptions

- **"The molecule switches between its resonance structures."** It has one hybrid structure all the time.
- **"Resonance structures can move atoms."** Only electrons (lone pairs and multiple-bond pairs) move between resonance structures. A different skeleton is a different compound or a different proposal, not a resonance structure.
- **"Average bond order is 1.5 whenever there is resonance."** Count it: nitrite and formate give 1.5, but nitrate (NO₃⁻) gives 4 bonds ÷ 3 positions = 1.33.
- **"Formal charge is the actual charge on the atom."** It is a bookkeeping number that ignores electronegativity.
- **Forgetting to check the sum.** If your formal charges do not add up to the overall charge, you have miscounted electrons.
- **"Lowest formal charges always wins, even for N or O with 10 electrons."** Never give a period 2 atom more than 8 electrons, whatever the formal charges.
- **Putting a negative formal charge on the less electronegative atom** when another structure with the same size of charges puts it on the more electronegative one.

## Where this leads

This topic refines the Lewis diagrams of [Topic 2.5, Lewis Diagrams](/advanced-course-resources/chemistry/2-5-lewis-diagrams-study-guide/). Next, [Topic 2.7, VSEPR and Hybridization](/advanced-course-resources/chemistry/2-7-vsepr-hybridization-study-guide/), uses your best Lewis diagram (including resonance) to predict shapes, bond angles, bond lengths, bond energies and polarity. Try the [practice questions](/advanced-course-resources/chemistry/2-6-resonance-formal-charge-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/2-6-resonance-formal-charge-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/2-6-resonance-formal-charge-checklist/) to consolidate.
