---
resourceId: "mb-ap-chem-3.1-study-guide"
title: "Intermolecular and Interparticle Forces: Study Guide (Chemistry 3.1)"
description: "Learn the forces that act between molecules and ions, from London dispersion to hydrogen bonding and ion–dipole forces, and how molecular structure sets their relative strength."
course: "chemistry"
unit: 3
topics: ["3.1"]
resourceType: "study-guide"
prerequisites:
  - "Bond polarity and electronegativity (Topic 2.1)"
  - "Lewis diagrams and molecular shape, including whether a molecule is polar (Topics 2.5 to 2.7)"
prerequisiteResources: ["mb-ap-chem-2.7-study-guide"]
learningObjectives:
  - "Tell intermolecular forces (between particles) apart from the bonds inside a molecule"
  - "Explain London dispersion forces using temporary dipoles, and predict how electron count, molecular shape and contact area change their strength"
  - "Identify dipole–dipole, dipole–induced dipole, hydrogen bonding and ion–dipole forces, and show how the partial charges must line up"
  - "Rank the strength of the forces between molecules of one substance, using structure as evidence"
  - "Identify the strongest force acting between two different chemical species, including within and between large biomolecules"
skills: ["4", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "none-needed"
calculatorNote: "No calculation is needed; boiling points are quoted to the nearest degree as evidence"
related: ["mb-ap-chem-3.1-revision-notes", "mb-ap-chem-3.1-practice", "mb-ap-chem-3.1-checklist"]
next: "mb-ap-chem-3.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Intermolecular forces act between particles. They are Coulombic attractions between partial or full charges, and they are much weaker than covalent bonds."
  - "London dispersion forces act between all molecules. They grow with the number of electrons (polarizability) and with the contact area between molecules."
  - "A polar molecule adds dipole–dipole forces (with another polar molecule) or dipole–induced dipole forces (with a nonpolar one) on top of dispersion forces."
  - "Hydrogen bonding needs H bonded to N, O or F in one molecule and a lone pair on N, O or F in another molecule or another part of the same molecule."
  - "Ion–dipole forces, between an ion and a polar molecule, are usually stronger than dipole–dipole forces. Partial charges must point the right way."
  - "For large molecules, dispersion forces are often the strongest net intermolecular force, even when the molecules are polar."
faqs:
  - question: "Are London dispersion forces the same as van der Waals forces?"
    answer: "No. Van der Waals forces is a wider name that usually also covers dipole–dipole and dipole–induced dipole forces. Use the specific name of the force you mean."
  - question: "Is a hydrogen bond a covalent bond?"
    answer: "No. It is an intermolecular attraction between an H atom on one molecule and a lone pair on N, O or F of another molecule (or another part of the same large molecule). It is stronger than most other intermolecular forces but much weaker than a covalent bond."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Forces between particles, not inside them

In Unit 2 you studied the bonds that hold atoms together *inside* a molecule or an ionic lattice. Unit 3 is about the forces that act *between* separate particles. These are called **intermolecular forces** when the particles are molecules, and **interparticle forces** when the list also includes ions.

Every one of these forces is **Coulombic**: a positive charge (full or partial) attracts a negative one. The charges are smaller or further apart than in a covalent or ionic bond, so the forces are much weaker.

A quick test of the difference: when water boils, the steam is still H₂O. No O–H bonds break. Boiling only pulls whole water molecules away from each other, overcoming the forces between them.

There are five forces to know:

| Force | Acts between | Origin |
|---|---|---|
| London dispersion | all molecules and atoms | temporary dipoles |
| Dipole–induced dipole | a polar and a nonpolar molecule | permanent dipole creates a temporary one |
| Dipole–dipole | two polar molecules | permanent dipoles |
| Hydrogen bonding | H on N, O or F, and a lone pair on N, O or F | a strong, special dipole interaction |
| Ion–dipole | an ion and a polar molecule | full charge attracts a partial charge |

## London dispersion forces

The electrons in an atom or molecule are always moving. At any instant they may be slightly more on one side than the other. For that instant the particle is a **temporary dipole**: one end is δ− and the other is δ+. The δ− end repels the electrons of a neighbouring particle and so creates an **induced dipole** in it. The two dipoles attract. A moment later the electrons have moved, the dipoles have flipped, and the attraction forms again. The net effect, averaged over time, is an attraction called the **London dispersion force**.

<figure>
<svg viewBox="0 0 640 230" role="img" aria-labelledby="ldf-title ldf-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ldf-title">How a temporary dipole induces a dipole in a neighbour</title>
<desc id="ldf-desc">Two panels. Left panel, labelled "No dipole at this instant": two atoms drawn as circles, each with a dot for the nucleus in the centre of an evenly spread electron cloud. Right panel, labelled "A moment later": in the first atom the electron cloud has shifted to the right, so its left side is labelled delta plus and its right side delta minus. The second atom, just to its right, has its electron cloud pushed away to the right, so its left side, facing the first atom, is labelled delta plus and its right side delta minus. A dashed line between the delta minus side of atom 1 and the delta plus side of atom 2 is labelled "attraction".</desc>
<g fill="none" stroke="#1d2b44" stroke-width="2">
<rect x="10" y="10" width="290" height="210" rx="8"/>
<rect x="340" y="10" width="290" height="210" rx="8"/>
<circle cx="95" cy="120" r="48" fill="#fdf6e3"/>
<circle cx="215" cy="120" r="48" fill="#fdf6e3"/>
<ellipse cx="440" cy="120" rx="58" ry="44" fill="#fdf6e3"/>
<ellipse cx="560" cy="120" rx="58" ry="44" fill="#fdf6e3"/>
<path d="M480 120 H520" stroke-dasharray="5 4"/>
</g>
<g fill="#1d2b44">
<circle cx="95" cy="120" r="5"/><circle cx="215" cy="120" r="5"/>
<circle cx="420" cy="120" r="5"/><circle cx="540" cy="120" r="5"/>
</g>
<g font-size="14" fill="#1d2b44" text-anchor="middle">
<text x="155" y="35" font-weight="600">No dipole at this instant</text>
<text x="485" y="35" font-weight="600">A moment later</text>
<text x="95" y="196">even cloud</text><text x="215" y="196">even cloud</text>
<text x="395" y="96">δ+</text><text x="470" y="96">δ−</text>
<text x="525" y="96">δ+</text><text x="595" y="96">δ−</text>
<text x="500" y="150">attraction</text>
<text x="440" y="196">temporary dipole</text><text x="565" y="196">induced dipole</text>
</g>
</svg>
<figcaption>Figure 1. Dots are nuclei; the shaded shapes are electron clouds. A shift in one cloud (right panel) pushes the neighbouring cloud the same way, so facing ends carry opposite partial charges and attract.</figcaption>
</figure>

### What makes dispersion forces stronger

- **More electrons, bigger electron cloud.** A large cloud with many electrons is easier to distort. This property is called **polarizability**. Polarizability grows with the number of electrons and the size of the cloud, and π bonds (whose electrons are less tightly held) add to it. The halogens show the effect clearly:

| Halogen | Electrons per molecule | Boiling point |
|---|---|---|
| F₂ | 18 | −188 °C |
| Cl₂ | 34 | −34 °C |
| Br₂ | 70 | 59 °C |
| I₂ | 106 | 184 °C |

All four are nonpolar, so dispersion is the only force between their molecules. More electrons give stronger dispersion forces and a higher boiling point.

- **More contact area.** Dispersion forces act only where molecules are close. Long, straight molecules can lie alongside each other and touch along their whole length. Compact, branched molecules touch at fewer points. Pentane and 2,2-dimethylpropane (neopentane) have the same formula, C₅H₁₂, and the same 42 electrons. Pentane, a chain, boils at 36 °C; the near-spherical neopentane boils at 9.5 °C.

Molar mass often rises with electron count, which is why bigger molar mass "usually" means stronger dispersion forces. But the real cause is the number of electrons and how easily the cloud is distorted, not the mass itself.

**Large molecules.** Dispersion forces act all over the surface of a molecule, so in a large molecule they add up to a lot. For large molecules they are often the strongest *net* intermolecular force, even when the molecule also has a dipole.

**A naming note.** Do not use "van der Waals forces" as another name for London dispersion forces. Van der Waals is a broader term. Name the specific force.

## Forces that need a permanent dipole

From Topic 2.7 you can decide whether a molecule is polar: it needs polar bonds *and* a shape in which the bond dipoles do not cancel. A polar molecule has a permanent δ+ end and δ− end, which adds new interactions.

### Dipole–induced dipole

When a polar molecule meets a nonpolar one, its δ− end (or δ+ end) distorts the electron cloud of the nonpolar molecule and induces a dipole. The two then attract. This force is always attractive. It is stronger when the polar molecule has a larger dipole and when the nonpolar molecule is more polarizable. An example is the attraction between water and a dissolved O₂ molecule.

### Dipole–dipole

Two polar molecules attract when the δ+ end of one is near the δ− end of the other. Orientation matters: head-to-tail (δ+ next to δ−) is attractive; side-by-side with like ends together is repulsive. In a liquid the molecules spend more time in attractive orientations, so the net effect is attraction. A larger dipole gives a stronger interaction.

Dipole–dipole forces act **in addition to** dispersion forces. So when two molecules have a similar size (similar numbers of electrons), the polar one usually has the stronger total attraction.

| Substance | Polar? | Electrons | Boiling point |
|---|---|---|---|
| Propane, CH₃CH₂CH₃ | no | 26 | −42 °C |
| Dimethyl ether, CH₃OCH₃ | yes | 26 | −24 °C |
| Ethanol, CH₃CH₂OH | yes, with O–H | 26 | 78 °C |

Propane has only dispersion forces. Dimethyl ether has the same number of electrons, plus dipole–dipole forces, so it boils 18 °C higher. Ethanol has the same formula as dimethyl ether, C₂H₆O, yet boils over 100 °C higher. The reason is hydrogen bonding.

## Hydrogen bonding

**Hydrogen bonding** is a strong type of intermolecular attraction. It needs two things:

1. A **donor**: an H atom covalently bonded to N, O or F. These atoms are so electronegative that the H carries a large δ+ charge, and the small H atom lets a neighbour get very close.
2. An **acceptor**: a lone pair on an N, O or F atom in a different molecule, or in a different part of the same large molecule.

<figure>
<svg viewBox="0 0 640 250" role="img" aria-labelledby="hb-title hb-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="hb-title">Orientation of dipoles and a hydrogen bond between two water molecules</title>
<desc id="hb-desc">Left panel, labelled "Dipole–dipole": two pairs of dipoles, each drawn as a rounded bar with a delta plus end and a delta minus end. The top pair is arranged head to tail, delta plus end of one next to the delta minus end of the other, labelled "attract". The bottom pair is side by side with delta minus next to delta minus, labelled "repel". Right panel, labelled "Hydrogen bond": two water molecules. The left water has an O atom with two H atoms. One of its H atoms, labelled delta plus, points towards the O atom of the right water molecule, labelled delta minus, which has two lone pairs shown as pairs of dots. A dashed line from that H to the lone pair on the second O is labelled "hydrogen bond". Solid lines show the covalent O–H bonds inside each molecule.</desc>
<g fill="none" stroke="#1d2b44" stroke-width="2">
<rect x="10" y="10" width="270" height="230" rx="8"/>
<rect x="300" y="10" width="330" height="230" rx="8"/>
<rect x="35" y="65" width="90" height="30" rx="15" fill="#fdf6e3"/>
<rect x="140" y="65" width="90" height="30" rx="15" fill="#fdf6e3"/>
<rect x="35" y="160" width="90" height="30" rx="15" fill="#fdf6e3"/>
<rect x="140" y="160" width="90" height="30" rx="15" fill="#fdf6e3"/>
<path d="M365 124 L344 158"/><path d="M381 116 L403 130"/>
<path d="M425 140 L465 152" stroke-dasharray="6 4"/>
<path d="M499 144 L541 119"/><path d="M499 160 L541 190"/>
</g>
<g font-size="15" fill="#1d2b44" text-anchor="middle">
<text x="145" y="35" font-weight="600">Dipole–dipole</text>
<text x="465" y="35" font-weight="600">Hydrogen bond</text>
<text x="55" y="85">δ+</text><text x="105" y="85">δ−</text>
<text x="160" y="85">δ+</text><text x="210" y="85">δ−</text>
<text x="132" y="122">attract (head to tail)</text>
<text x="55" y="180">δ+</text><text x="105" y="180">δ−</text>
<text x="160" y="180">δ−</text><text x="210" y="180">δ+</text>
<text x="132" y="217">repel (δ− next to δ−)</text>
</g>
<g font-size="20" font-weight="600" fill="#1d2b44" text-anchor="middle" dominant-baseline="central">
<text x="370" y="112">O</text><text x="338" y="170">H</text><text x="414" y="136">H</text>
<text x="490" y="152">O</text><text x="550" y="112">H</text><text x="550" y="198">H</text>
</g>
<g font-size="14" fill="#1d2b44" text-anchor="middle">
<text x="420" y="160">δ+</text><text x="492" y="180">δ−</text>
<text x="370" y="85">δ−</text>
<text x="440" y="222">dashed line = hydrogen bond</text>
</g>
<g fill="#1d2b44">
<circle cx="474" cy="148" r="2.5"/><circle cx="474" cy="157" r="2.5"/>
<circle cx="486" cy="135" r="2.5"/><circle cx="494" cy="135" r="2.5"/>
</g>
</svg>
<figcaption>Figure 2. Left: dipoles attract head to tail and repel when like ends meet. Right: a hydrogen bond (dashed) joins the δ+ H of one water molecule to a lone pair on the O of another. Solid lines are covalent bonds inside each molecule.</figcaption>
</figure>

Two rules trip students up:

- **The H must be on N, O or F.** In dimethyl ether every H is bonded to carbon, so dimethyl ether molecules cannot hydrogen bond with each other. In ethanol one H is on O, so they can.
- **A molecule can be an acceptor without being a donor.** Acetone, (CH₃)₂CO, has lone pairs on O but no H on O. Acetone molecules do not hydrogen bond with each other, but an acetone molecule *can* accept a hydrogen bond from a water molecule.

## Ion–dipole forces

An ion attracts the oppositely charged end of a polar molecule. A cation such as Na⁺ attracts the δ− oxygen end of water molecules; an anion such as Cl⁻ attracts the δ+ hydrogen ends. These **ion–dipole forces** involve a full charge, so they tend to be stronger than dipole–dipole forces. They explain why water molecules cluster around ions when an ionic solid dissolves.

<figure>
<svg viewBox="0 -15 640 245" role="img" aria-labelledby="iond-title iond-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="iond-title">How water molecules orient around a cation and an anion</title>
<desc id="iond-desc">Left: a sodium ion, labelled Na plus, with three water molecules around it. Each water molecule has its O atom, labelled delta minus, pointing towards the ion and its two H atoms pointing away. Right: a chloride ion, labelled Cl minus, with three water molecules around it. Each water molecule has one H atom, labelled delta plus, pointing towards the ion, with its O atom and second H atom further away.</desc>
<g fill="#fdf6e3" stroke="#1d2b44" stroke-width="2">
<circle cx="160" cy="105" r="26"/><circle cx="480" cy="105" r="32"/>
</g>
<g fill="none" stroke="#1d2b44" stroke-width="2">
<path d="M153 42 L142 30"/><path d="M167 42 L178 30"/>
<path d="M89 147 L73 143"/><path d="M96 160 L89 178"/>
<path d="M231 147 L247 143"/><path d="M224 160 L231 178"/>
<path d="M480 29 L480 47"/><path d="M471 12 L459 4"/>
<path d="M409 154 L423 146"/><path d="M399 171 L396 187"/>
<path d="M551 154 L537 146"/><path d="M561 171 L564 187"/>
</g>
<g font-size="17" font-weight="600" fill="#1d2b44" text-anchor="middle" dominant-baseline="central">
<text x="160" y="105">Na⁺</text><text x="480" y="105">Cl⁻</text>
<text x="160" y="50">O</text><text x="135" y="22">H</text><text x="185" y="22">H</text>
<text x="100" y="150">O</text><text x="62" y="140">H</text><text x="85" y="188">H</text>
<text x="220" y="150">O</text><text x="258" y="140">H</text><text x="235" y="188">H</text>
<text x="480" y="18">O</text><text x="480" y="58">H</text><text x="450" y="-2">H</text>
<text x="400" y="160">O</text><text x="432" y="140">H</text><text x="395" y="198">H</text>
<text x="560" y="160">O</text><text x="528" y="140">H</text><text x="565" y="198">H</text>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="190" y="58">δ−</text><text x="112" y="128">δ−</text><text x="208" y="128">δ−</text>
<text x="500" y="60">δ+</text><text x="440" y="122">δ+</text><text x="520" y="122">δ+</text>
<text x="160" y="222">O ends point in</text><text x="480" y="222">H ends point in</text>
</g>
</svg>
<figcaption>Figure 3. Water molecules turn their δ− oxygen towards a cation and a δ+ hydrogen towards an anion. The labels, not any colour, show which end faces the ion.</figcaption>
</figure>

## Forces inside large biomolecules

Proteins and nucleic acids are so large that different parts of the *same* molecule can attract each other. Hydrogen bonds, dispersion forces and attractions between charged groups act between distant parts of one chain, and between separate chains. In DNA, for example, hydrogen bonds between bases hold the two strands together. These noncovalent interactions are weak one at a time, but there are very many of them, and together they hold the molecule in its shape.

## A method for comparing forces

**Molecules of the same substance:**

1. Draw the Lewis diagram and decide the shape and polarity.
2. List the forces: dispersion always; dipole–dipole if polar; hydrogen bonding if there is H on N, O or F *and* a lone pair on N, O or F.
3. Compare electron counts and shapes for the dispersion part.
4. Decide which difference matters more. With similar electron counts, hydrogen bonding > dipole–dipole > dispersion only. With very different electron counts, dispersion can win.

**Two different species:** ask what each brings. Ion + polar molecule → ion–dipole. Polar + polar → dipole–dipole (or hydrogen bonding if one has a donor H and the other has an N, O or F lone pair). Polar + nonpolar → dipole–induced dipole. Nonpolar + nonpolar → dispersion only. Dispersion forces are present in every case.

## Worked example 1: ranking three liquids of similar size

**Question.** Butane (CH₃CH₂CH₂CH₃), acetone ((CH₃)₂CO) and propan-1-ol (CH₃CH₂CH₂OH) have 34, 32 and 34 electrons per molecule. Rank them by the strength of their intermolecular forces, explain the ranking, and predict the order of their boiling points.

1. **Butane:** nonpolar hydrocarbon. Forces: dispersion only.
2. **Acetone:** the C=O bond is polar and the shape does not cancel it, so the molecule is polar. Forces: dispersion and dipole–dipole. No H is bonded to O, so there is no hydrogen bonding between acetone molecules.
3. **Propan-1-ol:** has an O–H group. Forces: dispersion, dipole–dipole and hydrogen bonding.
4. The electron counts are almost equal, so dispersion forces are similar. The extra interactions decide the order.

**Answer.** Weakest to strongest: butane < acetone < propan-1-ol. The boiling points follow the same order: about −1 °C, 56 °C and 97 °C.

**Check.** Every step rested on structure (polarity, O–H), not on molar mass, which is almost the same for all three.

## Worked example 2: when dispersion forces win

**Question.** Fluoromethane, CH₃F, is polar. Tetrachloromethane, CCl₄, is nonpolar. CH₃F boils at −78 °C and CCl₄ at 77 °C. A student says this cannot be right, because "polar molecules have stronger intermolecular forces". Explain the data.

1. **CH₃F:** 18 electrons. Forces: dispersion and dipole–dipole. There is no hydrogen bonding: the H atoms are bonded to C, not F.
2. **CCl₄:** the four C–Cl bond dipoles cancel in the tetrahedral shape, so the molecule is nonpolar. Forces: dispersion only. But it has 74 electrons, about four times as many as CH₃F, in a large, easily distorted cloud.
3. CCl₄'s dispersion forces are therefore much stronger than CH₃F's dispersion and dipole–dipole forces combined.

**Answer.** The student's rule only works for molecules of similar size. Here the difference in polarizability outweighs the dipole.

**Takeaway.** Always compare the dispersion part first. A permanent dipole is a bonus that matters most when sizes are similar.

## Worked example 3: forces between two different species

**Question.** London dispersion forces act between every pair below. For each pair, name the other interparticle force that acts (or write "dispersion only") and describe how the particles line up: (a) a K⁺ ion and a water molecule; (b) an iodine molecule, I₂, and a water molecule; (c) an acetone molecule and a water molecule; (d) a hexane molecule and an octane molecule.

1. **(a) Ion–dipole.** The δ− oxygen of water points towards K⁺, with the H atoms pointing away.
2. **(b) Dipole–induced dipole.** Water's dipole distorts the large, polarizable electron cloud of I₂; the induced δ+ end of I₂ faces water's δ− oxygen (or the induced δ− end faces a δ+ H).
3. **(c) Hydrogen bonding.** Water supplies the donor H (on O); acetone supplies a lone pair on its O. The O–H···O arrangement is close to a straight line.
4. **(d) Dispersion only.** Both are nonpolar hydrocarbons. Their long chains lie side by side for maximum contact.

**Check.** In (a) and (c) the extra force is the strongest one present. In (b) the induced dipole is weak, so dispersion forces between the large I₂ cloud and water matter at least as much.

## Common misconceptions

- **"Boiling breaks covalent bonds."** No. Boiling a molecular liquid separates whole molecules. The bonds inside them stay intact.
- **"Any molecule with H and O can hydrogen bond with itself."** Only if an H is bonded *directly* to N, O or F. Dimethyl ether and acetone cannot.
- **"A hydrogen bond is a bond to hydrogen."** The covalent O–H bond is *inside* the molecule; the hydrogen bond is the weaker attraction *between* that H and a lone pair elsewhere.
- **"Nonpolar molecules have no intermolecular forces."** Every molecule has dispersion forces.
- **"Polar always beats nonpolar."** Only when sizes are similar. CCl₄ (nonpolar) boils far above CH₃F (polar).
- **"Heavier molecules attract more because of their mass."** Mass is a proxy. The cause is the number of electrons and how polarizable the cloud is; contact area also matters (pentane versus neopentane).
- **"Van der Waals forces and London dispersion forces are the same thing."** They are not; name the specific force.

## Where this leads

The forces in this topic explain almost every physical property in Unit 3. Next, [Topic 3.2, Properties of Solids](/advanced-course-resources/chemistry/3-2-properties-solids-study-guide/), uses them to explain melting points, vapor pressures and the behaviour of ionic, covalent network, molecular and metallic solids. Later topics use them for gases that do not behave ideally, solubility and chromatography. Try the [practice questions](/advanced-course-resources/chemistry/3-1-intermolecular-interparticle-forces-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/3-1-intermolecular-interparticle-forces-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/3-1-intermolecular-interparticle-forces-checklist/) to consolidate.
