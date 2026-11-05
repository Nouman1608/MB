/**
 * D-438 -- flashcards for Cambridge International AS & A Level Chemistry 9701 (2025-2027).
 *
 * One block per subtopic, in syllabus order. AS Level topics 1-22 and A Level
 * topics 23-37 use stage-qualified slugs (as-/a-): AS cards sit only on AS
 * subtopics and A Level cards only on A Level subtopics. Card ids are
 * `<subtopic number>-<n>` and are permanent (browser progress is keyed by them):
 * add a new card with the next unused n, never renumber.
 *
 * 9701 is not tiered, so no card is marked upper tier.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 9701); origin 'revision-notes'.
 *
 * Plain text only (see types.ts). Unicode for formulae.
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; u?: true; src?: string }

const sub = (topic: string, subtopic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, u, src }) => ({
    id: `${number}-${n}`,
    topic,
    subtopic,
    front: f,
    back: b,
    ...(u ? { tier: 'upper' as const } : {}),
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const ATOM = 'as-chem-atomic-structure-revision-notes';
const BOND = 'as-chemistry-bonding-revision-notes';
const SHAPE = 'as-chemistry-shapes-imf-revision-notes';
const STATES = 'as-chem-states-structure-revision-notes';
const HESS = 'as-chemistry-hess-law-revision-notes';
const KIN = 'as-chem-kinetics-revision-notes';
const G2 = 'as-chem-group2-revision-notes';
const G17 = 'as-chem-group17-revision-notes';
const ORG = 'as-chemistry-organic-introduction-revision-notes';
const ALC = 'as-chem-alcohols-revision-notes';
const CARB = 'as-chem-carbonyls-revision-notes';
const POLY = 'as-chemistry-addition-polymerisation-revision-notes';
const SYN = 'as-chem-synthesis-revision-notes';
const IRMS = 'as-chemistry-ir-mass-spec-revision-notes';
const AENER = 'a-chemistry-energetics-entropy-revision-notes';
const AKIN = 'a-chemistry-reaction-kinetics-revision-notes';
const TRANS = 'a-chemistry-transition-elements-revision-notes';
const AORG = 'a-chemistry-organic-mechanisms-revision-notes';
const AHAL = 'a-chemistry-halogen-compounds-revision-notes';
const AMIDE = 'a-chemistry-amides-amino-acids-revision-notes';
const CHROM = 'a-chemistry-chromatography-revision-notes';

export const DECK_CAMBRIDGE_A_LEVEL_CHEMISTRY: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'a-level',
  subjectSlug: 'chemistry',
  syllabusCode: '9701',
  syllabusSeries: '2025-2027',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // ===== AS LEVEL =====

    // 1 Atomic structure
    ...sub('as-atomic-structure', 'as-particles-in-the-atom-and-atomic-radius', '1.1', [
      { n: 1, f: 'Relative charge and relative mass of a proton, a neutron and an electron', b: 'Proton: charge +1, mass 1.\nNeutron: charge 0, mass 1.\nElectron: charge −1, mass 1/1840 (negligible).', src: ATOM },
      { n: 2, f: 'Describe the distribution of mass and of charge in an atom', b: 'Almost all the mass, and all the positive charge, is in the tiny, dense nucleus (protons and neutrons). The negative charge (electrons) is spread through the large, mostly empty space around it.' },
      { n: 3, f: 'Beams of protons, neutrons and electrons at the same velocity pass between charged plates. What happens to each?', b: 'Protons curve towards the negative plate (small angle). Electrons curve towards the positive plate through a much larger angle. Neutrons pass straight through, undeflected (no charge).', src: ATOM },
      { n: 4, f: 'What decides how much a charged particle beam is deflected in an electric field (at the same velocity)?', b: 'Charge ÷ mass. The sign of the charge decides the direction; charge ÷ mass decides the size. ¹H⁺ (1 ÷ 1 = 1) is deflected more than ⁴He²⁺ (2 ÷ 4 = 0.5).' },
      { n: 5, f: 'Atomic radius across a period and down a group: trends and reasons', b: 'Across a period: decreases. Nuclear charge increases, electrons go into the same shell, shielding roughly constant.\nDown a group: increases. An extra shell each time; greater distance and shielding outweigh the extra nuclear charge.', src: ATOM },
      { n: 6, f: 'Why is a cation smaller than its atom, and an anion larger?', b: 'Cation: usually loses its whole outer shell, and the remaining electrons are attracted by more protons than there are electrons.\nAnion: extra electrons enter the same outer shell, increasing electron–electron repulsion with the same nuclear charge.' },
      { n: 7, f: 'Order Na⁺, Mg²⁺ and Al³⁺ by ionic radius and explain', b: 'Al³⁺ < Mg²⁺ < Na⁺. All are isoelectronic (2,8), but the nuclear charge rises from 11 to 13, so the electrons are pulled in more strongly.' },
    ]),
    ...sub('as-atomic-structure', 'as-isotopes', '1.2', [
      { n: 1, f: 'Isotopes', b: 'Atoms of the same element with the same number of protons but different numbers of neutrons.' },
      { n: 2, f: 'Atomic (proton) number and mass (nucleon) number', b: 'Atomic number, Z: the number of protons in the nucleus (identifies the element).\nMass number, A: the total number of protons + neutrons in the nucleus.', src: ATOM },
      { n: 3, f: 'Why do isotopes of an element have the same chemical properties?', b: 'They have the same number of electrons and the same electronic configuration, and chemical reactions involve the electrons.' },
      { n: 4, f: 'How do the physical properties of isotopes differ (9701 1.2)?', b: 'Only in mass and density: different numbers of neutrons give atoms of different mass, so the heavier isotope gives a denser sample (e.g. water made with ²H is denser than ordinary water).' },
      { n: 5, f: 'Protons, neutrons and electrons in ⁵⁶₂₆Fe³⁺', b: '26 protons, 56 − 26 = 30 neutrons, 26 − 3 = 23 electrons.' },
      { n: 6, f: 'Chlorine is 75% ³⁵Cl and 25% ³⁷Cl (illustrative values). Calculate Ar.', b: 'Ar = (35 × 75 + 37 × 25) ÷ 100 = 3550 ÷ 100 = 35.5' },
    ]),
    ...sub('as-atomic-structure', 'as-electrons-energy-levels-and-atomic-orbitals', '1.3', [
      { n: 1, f: 'Number of orbitals and maximum electrons in s, p and d sub-shells', b: 's: 1 orbital, 2 electrons.\np: 3 orbitals, 6 electrons.\nd: 5 orbitals, 10 electrons.\nEach orbital holds at most two electrons, with opposite spins.' },
      { n: 2, f: 'Shapes of s and p orbitals', b: 's: spherical, centred on the nucleus.\np: two lobes either side of the nucleus (dumbbell); a p sub-shell has three, pointing along different axes.' },
      { n: 3, f: 'Order of filling up to Kr, and the point about 4s and 3d', b: '1s 2s 2p 3s 3p 4s 3d 4p. 4s fills before 3d because it is slightly lower in energy, but 4s electrons are removed first on ionisation.' },
      { n: 4, f: 'Electron configurations of Fe, Fe²⁺ and Fe³⁺', b: 'Fe: [Ar] 3d⁶4s²\nFe²⁺: [Ar] 3d⁶ (the 4s electrons leave first)\nFe³⁺: [Ar] 3d⁵' },
      { n: 5, f: 'The two exceptions in the first row of the d block', b: 'Chromium: [Ar] 3d⁵4s¹. Copper: [Ar] 3d¹⁰4s¹. A half-filled or full d sub-shell is more stable.' },
      { n: 6, f: "Hund's rule", b: 'Electrons occupy separate orbitals within a sub-shell, with unpaired spins, before any orbital is doubly occupied. This minimises repulsion between electrons.' },
      { n: 7, f: 'Free radical (in terms of electrons)', b: 'A species with one or more unpaired electrons.' },
    ]),
    ...sub('as-atomic-structure', 'as-ionisation-energy', '1.4', [
      { n: 1, f: 'First ionisation energy (with equation)', b: 'The energy required to remove one electron from each atom in one mole of gaseous atoms, forming one mole of gaseous 1+ ions.\nX(g) → X⁺(g) + e⁻' },
      { n: 2, f: 'Three factors that control ionisation energy', b: 'Nuclear charge (more protons, higher IE), atomic radius (further out, lower IE) and shielding by inner shells (more shielding, lower IE).' },
      { n: 3, f: 'Trends in first ionisation energy across a period and down a group', b: 'Across a period: increases (nuclear charge rises, shielding roughly constant, radius decreases).\nDown a group: decreases (radius and shielding increase, outweighing the greater nuclear charge).' },
      { n: 4, f: "Why is aluminium's first ionisation energy lower than magnesium's?", b: "Al's outer electron is in a 3p orbital, higher in energy than Mg's 3s and partly shielded by the 3s electrons, so it is removed more easily. Not 'more shielding by inner shells'." },
      { n: 5, f: "Why is sulfur's first ionisation energy lower than phosphorus's?", b: 'In sulfur two electrons share one 3p orbital and repel each other, so one of them is more easily removed.' },
      { n: 6, f: 'Successive IEs (kJ mol⁻¹): 738, 1451, 7733, 10 540. Which group?', b: 'Group 2. The big jump is between the 2nd and 3rd: the 3rd electron comes from a shell closer to the nucleus, so there are two outer electrons.' },
      { n: 7, f: 'Is ionisation energy exothermic or endothermic?', b: 'Always endothermic (positive): energy is required to remove an electron. Successive ionisation energies always increase.' },
    ]),

    // 2 Atoms, molecules and stoichiometry
    ...sub('as-atoms-molecules-and-stoichiometry', 'as-relative-masses-of-atoms-and-molecules', '2.1', [
      { n: 1, f: 'Unified atomic mass unit', b: 'One twelfth of the mass of an atom of carbon-12.' },
      { n: 2, f: 'Relative atomic mass, Ar', b: 'The weighted mean mass of an atom of an element (taking account of its isotopes), compared with one twelfth of the mass of a carbon-12 atom.' },
      { n: 3, f: 'Relative isotopic mass', b: 'The mass of an atom of a particular isotope compared with one twelfth of the mass of a carbon-12 atom.' },
      { n: 4, f: 'Relative molecular mass and relative formula mass', b: 'Relative molecular mass, Mr: the mass of a molecule compared with one twelfth of the mass of a carbon-12 atom.\nRelative formula mass: the same idea for one formula unit of an ionic compound.' },
      { n: 5, f: 'Boron is 20% ¹⁰B and 80% ¹¹B (illustrative values). Calculate Ar.', b: 'Ar = (10 × 20 + 11 × 80) ÷ 100 = 1080 ÷ 100 = 10.8' },
    ]),
    ...sub('as-atoms-molecules-and-stoichiometry', 'as-the-mole-and-the-avogadro-constant', '2.2', [
      { n: 1, f: 'The mole', b: 'The amount of substance containing 6.02 × 10²³ particles (the Avogadro constant, L) of that substance.' },
      { n: 2, f: 'Link between moles, mass and molar mass', b: 'n = m ÷ M\nn in mol, m in g, M in g mol⁻¹.' },
      { n: 3, f: 'Number of particles from moles', b: 'N = n × 6.02 × 10²³' },
      { n: 4, f: 'Molar volume of a gas at rtp, and when it applies', b: '24 dm³ mol⁻¹, so n = V ÷ 24 (V in dm³). Gases at rtp only, never solids or liquids.' },
      { n: 5, f: 'Moles of solute in 25.0 cm³ of 0.200 mol dm⁻³ solution', b: 'V = 0.0250 dm³; n = cV = 0.200 × 0.0250 = 5.00 × 10⁻³ mol' },
    ]),
    ...sub('as-atoms-molecules-and-stoichiometry', 'as-formulas', '2.3', [
      { n: 1, f: 'Empirical formula and molecular formula', b: 'Empirical: the simplest whole-number ratio of atoms of each element in a compound.\nMolecular: the actual number of atoms of each element in a molecule.' },
      { n: 2, f: 'Method: empirical formula from percentage composition', b: '1 Take the mass or % of each element.\n2 Divide by Ar to get moles.\n3 Divide by the smallest to get the ratio.\n4 Multiply to whole numbers if needed.' },
      { n: 3, f: 'How do you get the molecular formula from the empirical formula?', b: 'Molecular formula = empirical formula × n, where n = Mr(molecular) ÷ Mr(empirical).' },
      { n: 4, f: 'Formulas and charges of the polyatomic ions 9701 expects you to recall', b: 'NO₃⁻, CO₃²⁻, SO₄²⁻, OH⁻, NH₄⁺, HCO₃⁻, PO₄³⁻ (plus the monatomic ions Zn²⁺ and Ag⁺).' },
      { n: 5, f: 'Ionic equation', b: 'An equation showing only the species that change, omitting spectator ions. Precipitates, gases and covalent molecules stay as full formulae.\ne.g. Pb²⁺(aq) + 2I⁻(aq) → PbI₂(s)' },
      { n: 6, f: 'Anhydrous, hydrated and water of crystallisation', b: 'Hydrated: a crystalline compound containing water molecules in its structure (water of crystallisation), e.g. CuSO₄·5H₂O.\nAnhydrous: the compound without its water of crystallisation.' },
      { n: 7, f: 'Write the formula of iron(III) oxide from its ions', b: 'Fe³⁺ and O²⁻. The lowest common multiple of 3 and 2 is 6, so 2 Fe³⁺ and 3 O²⁻: Fe₂O₃.' },
    ]),
    ...sub('as-atoms-molecules-and-stoichiometry', 'as-reacting-masses-and-volumes-of-solutions-and-gases', '2.4', [
      { n: 1, f: 'The four-step method for reacting-quantity calculations', b: '1 Balance the equation.\n2 Convert the known quantity to moles.\n3 Apply the mole ratio.\n4 Convert back to the quantity asked for.' },
      { n: 2, f: 'How do you find the limiting reagent?', b: 'Convert both reactants to moles, divide each by its coefficient in the balanced equation; the smaller value is limiting. Base all product calculations on it.' },
      { n: 3, f: 'Percentage yield', b: 'Percentage yield = (actual yield ÷ theoretical yield) × 100. Theoretical yield comes from the limiting reagent. A value above 100% means an impure or wet product, or an error.' },
      { n: 4, f: '4.00 g H₂ reacts with 4.00 g O₂ (2H₂ + O₂ → 2H₂O). Which is limiting, and what mass of water forms?', b: 'H₂: 2.00 mol ÷ 2 = 1.00. O₂: 0.125 mol ÷ 1 = 0.125. O₂ is limiting.\nWater = 2 × 0.125 = 0.250 mol = 4.50 g.' },
      { n: 5, f: 'Concentration, moles and volume of a solution', b: 'n = cV, with c in mol dm⁻³ and V in dm³ (cm³ ÷ 1000).' },
      { n: 6, f: 'Significant figures in 9701 calculations', b: 'Give answers to the number of significant figures given or asked for in the question, and round only at the end, not part-way through.' },
    ]),

    // 3 Chemical bonding
    ...sub('as-chemical-bonding', 'as-electronegativity-and-bonding', '3.1', [
      { n: 1, f: 'Electronegativity', b: 'The ability of an atom to attract the bonding electrons in a covalent bond.' },
      { n: 2, f: 'Trends in electronegativity across a period and down a group', b: 'Increases across a period (greater nuclear charge, same shielding, smaller radius). Decreases down a group (more shells, more shielding, greater distance). Fluorine is the most electronegative element.' },
      { n: 3, f: 'How does electronegativity difference relate to bond type?', b: 'Difference about 0: pure covalent. Small difference: polar covalent. Large difference: ionic. It is a continuum, not a switch.' },
      { n: 4, f: 'Pauling values H 2.2, Cl 3.2, Na 0.9. Predict the bonding in HCl and in NaCl.', b: 'HCl: difference 1.0, polar covalent.\nNaCl: difference 2.3, ionic.' },
    ]),
    ...sub('as-chemical-bonding', 'as-ionic-bonding', '3.2', [
      { n: 1, f: 'Ionic bonding', b: 'Electrostatic attraction between oppositely charged ions (formed when electrons transfer from a metal to a non-metal).', src: BOND },
      { n: 2, f: 'Electron transfer in forming MgO', b: 'Mg (2,8,2) transfers two electrons to O (2,6), giving Mg²⁺ (2,8) and O²⁻ (2,8).' },
      { n: 3, f: 'Electron transfer in forming CaF₂', b: 'Ca (2,8,8,2) transfers one electron to each of two F atoms (2,7), giving Ca²⁺ (2,8,8) and two F⁻ (2,8).' },
      { n: 4, f: 'Giant ionic lattice', b: 'A regular arrangement of oppositely charged ions held by electrostatic attraction acting in all directions, not confined to one ion pair. In NaCl each Na⁺ is surrounded by six Cl⁻.' },
    ]),
    ...sub('as-chemical-bonding', 'as-metallic-bonding', '3.3', [
      { n: 1, f: 'Metallic bonding', b: 'Electrostatic attraction between a lattice of positive metal ions and a sea of delocalised electrons.', src: BOND },
      { n: 2, f: 'Three factors that increase the strength of metallic bonding', b: 'More delocalised electrons per atom, smaller ionic radius, and higher ionic charge.' },
      { n: 3, f: 'Why does magnesium have a much higher melting point than sodium?', b: 'Mg contributes 2 delocalised electrons per atom (Na only 1) and Mg²⁺ is smaller and more highly charged, so the attraction between the ions and the electron sea is stronger.', src: BOND },
      { n: 4, f: 'Why do metals conduct and why are they malleable?', b: 'Conduct (solid and molten): the delocalised electrons are free to move and carry charge.\nMalleable: layers of ions slide past each other while the electron sea redistributes, so no specific bond has to break.' },
    ]),
    ...sub('as-chemical-bonding', 'as-covalent-bonding-and-coordinate-dative-covalent-bonding', '3.4', [
      { n: 1, f: 'Covalent bond', b: 'The electrostatic attraction between two nuclei and a shared pair of electrons.' },
      { n: 2, f: 'Coordinate (dative covalent) bond', b: 'A shared pair of electrons in which both electrons come from the same atom, e.g. N–H⁺ in NH₄⁺. Once formed it is identical to an ordinary covalent bond.' },
      { n: 3, f: 'How is Al₂Cl₆ held together?', b: 'A lone pair on a chlorine atom of each AlCl₃ unit is donated to the aluminium of the other unit, forming two coordinate bonds and two bridging Cl atoms.' },
      { n: 4, f: 'Expanded octet: examples and which atoms can do it', b: 'Only Period 3 (and later) central atoms. SO₂: 10 electrons around S. PCl₅: 10 around P. SF₆: 12 around S. Period 2 atoms (C, N, O) never exceed eight.' },
      { n: 5, f: 'Sigma (σ) and pi (π) bonds', b: 'σ: direct, head-on overlap of orbitals between the bonding atoms.\nπ: sideways overlap of adjacent p orbitals, above and below the σ bond.\nA single bond is one σ; a double bond is one σ + one π.' },
      { n: 6, f: 'Bond energy and bond length', b: 'Bond energy: energy needed to break one mole of a particular covalent bond in the gaseous state.\nBond length: the internuclear distance of two covalently bonded atoms. Triple bonds are shorter and stronger than double, which are shorter and stronger than single.' },
    ]),
    ...sub('as-chemical-bonding', 'as-shapes-of-molecules', '3.5', [
      { n: 1, f: 'The VSEPR rule and the order of repulsion', b: 'Electron pairs around a central atom repel and get as far apart as possible.\nlone pair–lone pair > lone pair–bond pair > bond pair–bond pair.' },
      { n: 2, f: 'Shapes and bond angles of CH₄, NH₃ and H₂O', b: 'CH₄: tetrahedral, 109.5°.\nNH₃: trigonal pyramidal, 107° (one lone pair).\nH₂O: bent, 104.5° (two lone pairs).\nEach lone pair repels more than a bond pair, closing the angle by about 2.5°.' },
      { n: 3, f: 'Shapes and angles: 2, 3, 5 and 6 bond pairs with no lone pairs', b: '2: linear, 180° (e.g. CO₂).\n3: trigonal planar, 120° (e.g. BF₃).\n5: trigonal bipyramidal, 120° and 90° (PCl₅).\n6: octahedral, 90° (SF₆).' },
      { n: 4, f: 'Shape with 4 bond pairs and 2 lone pairs', b: 'Square planar, 90°.' },
      { n: 5, f: 'Hybridisation of carbon: sp³, sp² and sp', b: 'sp³: four hybrids, tetrahedral (methane, ethane).\nsp²: three hybrids in a plane plus one p orbital for a π bond, trigonal planar (ethene).\nsp: two hybrids, linear, two p orbitals for two π bonds (ethyne).', src: SHAPE },
    ]),
    ...sub('as-chemical-bonding', 'as-intermolecular-forces-electronegativity-and-bond-properties', '3.6', [
      { n: 1, f: "The two types of van der Waals' force", b: 'Instantaneous dipole–induced dipole (id-id, London) forces: in all molecules, increase with the number of electrons.\nPermanent dipole–permanent dipole (pd-pd) forces: between polar molecules.\nHydrogen bonding is a special case of pd-pd.' },
      { n: 2, f: 'Two requirements for a hydrogen bond (9701)', b: 'A hydrogen atom bonded directly to N or O, and a lone pair on an N or O atom of a neighbouring molecule to accept it. HCl does not hydrogen bond.' },
      { n: 3, f: 'When is a molecule polar? Compare CO₂ with H₂O, and CCl₄ with CHCl₃.', b: 'Only if the bond dipoles do not cancel.\nCO₂ (linear) and CCl₄ (symmetrical tetrahedral): non-polar.\nH₂O (bent) and CHCl₃ (asymmetric): polar.', src: SHAPE },
      { n: 4, f: 'Why is ice less dense than liquid water?', b: 'Each H₂O forms four hydrogen bonds in a tetrahedral arrangement, giving an open lattice with holes. On melting the lattice partly collapses, so the liquid is denser.', src: SHAPE },
      { n: 5, f: 'Method for comparing boiling points of molecular substances', b: '1 Compare the strongest intermolecular force in each.\n2 If the same type, more electrons → stronger id-id forces → higher b.p.\n3 If still tied, more branching → less surface contact → lower b.p.' },
      { n: 6, f: 'What is overcome when a simple molecular substance boils?', b: 'Only the intermolecular forces between molecules. The covalent bonds within the molecules stay intact.' },
    ]),
    ...sub('as-chemical-bonding', 'as-dot-and-cross-diagrams', '3.7', [
      { n: 1, f: 'Conventions for a dot-and-cross diagram', b: "Dots for one atom's outer electrons, crosses for the other's, so the origin of every electron is visible. Outer shells only. Ions are drawn separately in square brackets with their charge." },
      { n: 2, f: 'How is a coordinate bond shown in a dot-and-cross diagram?', b: 'As two symbols of the same kind (e.g. two dots from N in the fourth N–H bond of NH₄⁺), because both electrons come from the donor atom.' },
      { n: 3, f: 'Dot-and-cross diagram for NO: what is special?', b: 'NO has 5 + 6 = 11 outer electrons. N=O is two shared pairs, O has two lone pairs, N has one lone pair plus one unpaired electron (only seven around N).' },
      { n: 4, f: 'Dot-and-cross diagram for MgCl₂', b: '[Mg]²⁺ and two separate [Cl]⁻ ions, each chloride with a full octet (seven crosses plus one dot), each in square brackets with its charge.' },
    ]),

    // 4 States of matter
    ...sub('as-states-of-matter', 'as-the-gaseous-state', '4.1', [
      { n: 1, f: 'The ideal gas equation, with units', b: 'pV = nRT\np in Pa, V in m³, n in mol, T in K, R = 8.31 J K⁻¹ mol⁻¹.\nConvert: kPa × 1000, cm³ ÷ 10⁶, dm³ ÷ 1000, °C + 273.' },
      { n: 2, f: 'Assumptions of the kinetic theory for an ideal gas', b: 'Particles have negligible volume; there are no intermolecular forces; collisions are perfectly elastic; particles are in constant random motion.' },
      { n: 3, f: 'When do real gases deviate most from ideal behaviour, and why?', b: 'At high pressure (particles close together, so their own volume is no longer negligible) and low temperature (particles move slowly, so intermolecular attractions become significant).' },
      { n: 4, f: 'Conditions under which a gas behaves most ideally', b: 'Low pressure and high temperature. Small non-polar molecules (He, H₂) behave more ideally than molecules with stronger intermolecular forces (NH₃, H₂O).' },
      { n: 5, f: 'How do you find Mr from gas data?', b: 'M = mRT ÷ (pV), using SI units.\ne.g. 4.40 g in 2.24 × 10⁻³ m³ at 101 000 Pa and 273 K: n ≈ 0.0997 mol, so Mr ≈ 44.' },
    ]),
    ...sub('as-states-of-matter', 'as-bonding-and-structure', '4.2', [
      { n: 1, f: 'Giant ionic structure: properties', b: 'High melting point (strong electrostatic attraction between ions). Conducts only when molten or aqueous (ions free to move). Often soluble in water.', src: STATES },
      { n: 2, f: 'Simple molecular structure: properties', b: 'Low melting point: only weak intermolecular forces are overcome. Does not conduct. Solubility depends on polarity (like dissolves like).', src: STATES },
      { n: 3, f: 'Giant covalent structure: properties', b: 'Very high melting point: many strong covalent bonds must be broken. Does not conduct (except graphite). Insoluble.', src: STATES },
      { n: 4, f: 'Giant metallic structure: properties', b: 'High melting point (attraction of ions to the electron sea). Conducts as a solid and when molten. Insoluble.', src: STATES },
      { n: 5, f: 'Diamond and graphite compared', b: 'Diamond: 4 bonds per C, tetrahedral 3D network, very hard, does not conduct.\nGraphite: 3 bonds per C, hexagonal layers held by weak forces (soft, layers slide), one delocalised electron per atom so it conducts.' },
      { n: 6, f: 'Why does iodine melt at 114 °C but diamond needs over 3500 °C?', b: 'Iodine is simple molecular: melting overcomes only weak intermolecular forces. Diamond is giant covalent: many strong covalent bonds must break.' },
    ]),
    // 5 Chemical energetics
    ...sub('as-chemical-energetics', 'as-enthalpy-change', '5.1', [
      { n: 1, f: 'Sign of ΔH for exothermic and endothermic reactions', b: 'Exothermic: ΔH negative, heat released to the surroundings, products lower in energy.\nEndothermic: ΔH positive, heat absorbed, products higher in energy.' },
      { n: 2, f: 'Standard enthalpy change of formation, ΔHf⦵', b: 'The enthalpy change when one mole of a compound is formed from its elements in their standard states under standard conditions. It is zero for any element in its standard state.' },
      { n: 3, f: 'Standard enthalpy change of combustion, ΔHc⦵', b: 'The enthalpy change when one mole of a substance is completely burned in oxygen under standard conditions.' },
      { n: 4, f: 'Standard enthalpy change of neutralisation', b: 'The enthalpy change when an acid and an alkali react to form one mole of water (under standard conditions).', src: HESS },
      { n: 5, f: 'Bond enthalpy, and why calculations using it are approximate', b: 'The energy required to break one mole of a specified bond in the gaseous state. Values are means over many compounds and apply only to gases, so results are approximate.', src: HESS },
      { n: 6, f: 'Standard conditions used in 9701', b: '298 K and 101 kPa, with all substances in their standard states.' },
      { n: 7, f: 'Calorimetry: the two equations, and what m is', b: 'q = mcΔT, with m the mass of water or solution heated (not the fuel) and c = 4.18 J g⁻¹ K⁻¹.\nΔH = −q ÷ n, with n the moles of the limiting reactant. Convert J to kJ.' },
      { n: 8, f: 'Why is an experimental enthalpy of combustion usually less exothermic than the data-book value?', b: 'Heat lost to the surroundings, incomplete combustion, evaporation of the fuel, heat absorbed by the apparatus, non-standard conditions.' },
    ]),
    ...sub('as-chemical-energetics', 'as-hess-s-law', '5.2', [
      { n: 1, f: "Hess's law", b: 'The total enthalpy change for a reaction is independent of the route taken, provided the initial and final conditions are the same.' },
      { n: 2, f: 'ΔHr from formation data, and from combustion data', b: 'Formation: ΔHr = ΣΔHf(products) − ΣΔHf(reactants).\nCombustion: ΔHr = ΣΔHc(reactants) − ΣΔHc(products).\nMultiply each value by its coefficient.' },
      { n: 3, f: 'Find ΔHf⦵(CH₄) from ΔHc: C(graphite) −394, H₂ −286, CH₄ −890 kJ mol⁻¹', b: 'ΔHf = [ΔHc(C) + 2ΔHc(H₂)] − ΔHc(CH₄) = [−394 + 2(−286)] − (−890) = −966 + 890 = −76 kJ mol⁻¹' },
      { n: 4, f: 'ΔH from bond enthalpies; H–H 436, Cl–Cl 242, H–Cl 431 kJ mol⁻¹. Find ΔH for H₂ + Cl₂ → 2HCl.', b: 'ΔH = Σ(bonds broken) − Σ(bonds made) = (436 + 242) − (2 × 431) = 678 − 862 = −184 kJ mol⁻¹' },
      { n: 5, f: 'Why do Hess cycles let you find enthalpy changes that cannot be measured directly?', b: 'Because ΔH is independent of route, an unmeasurable change (such as ΔHf of methane) can be found from measurable ones (such as enthalpies of combustion) that link the same start and end.' },
    ]),

    // 6 Electrochemistry
    ...sub('as-electrochemistry', 'as-redox-processes', '6.1', [
      { n: 1, f: 'Oxidation and reduction in terms of electrons and oxidation number', b: 'Oxidation: loss of electrons, increase in oxidation number.\nReduction: gain of electrons, decrease in oxidation number.' },
      { n: 2, f: 'Oxidising agent and reducing agent', b: 'An oxidising agent oxidises another species and is itself reduced (gains electrons).\nA reducing agent reduces another species and is itself oxidised (loses electrons).' },
      { n: 3, f: 'Key oxidation-number rules (with the exceptions)', b: 'Element 0; simple ion = its charge; F −1; Group 1 +1, Group 2 +2; H +1 (−1 in metal hydrides); O −2 (−1 in peroxides, +2 in OF₂); sum = 0 in a compound, = charge in an ion.' },
      { n: 4, f: 'Oxidation number of Mn in MnO₄⁻ and of Cr in Cr₂O₇²⁻', b: 'Mn: x + 4(−2) = −1, so +7 (manganate(VII)).\nCr: 2x + 7(−2) = −2, so +6 (dichromate(VI)).' },
      { n: 5, f: 'Half-equation for MnO₄⁻ → Mn²⁺ in acid', b: 'MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O' },
      { n: 6, f: 'Steps for balancing a half-equation', b: '1 Balance atoms other than O and H.\n2 Balance O with H₂O.\n3 Balance H with H⁺.\n4 Balance charge with electrons.\nCombine halves so the electrons cancel.' },
      { n: 7, f: 'Disproportionation', b: 'A reaction in which the same element is simultaneously oxidised and reduced, e.g. Cl₂ + 2NaOH → NaCl + NaClO + H₂O (Cl: 0 → −1 and 0 → +1).' },
      { n: 8, f: 'Balanced equation for MnO₄⁻ oxidising Fe²⁺ in acid', b: 'MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O\nMn gains 5 electrons (+7 → +2), so 5 Fe²⁺ each lose one (+2 → +3). Charge: +17 on each side.' },
    ]),

    // 7 Equilibria
    ...sub('as-equilibria', 'as-chemical-equilibria', '7.1', [
      { n: 1, f: 'Dynamic equilibrium', b: 'In a closed system, the rates of the forward and reverse reactions are equal and the concentrations of all species remain constant (not equal). The reactions have not stopped.' },
      { n: 2, f: "Le Chatelier's principle", b: 'When a system at equilibrium is subjected to a change, the position of equilibrium shifts to oppose that change.' },
      { n: 3, f: 'Effect on the position of equilibrium of increasing pressure, increasing temperature and adding a catalyst', b: 'Pressure: shifts towards the side with fewer moles of gas (no effect if equal).\nTemperature: shifts in the endothermic direction.\nCatalyst: no shift; equilibrium is reached sooner.' },
      { n: 4, f: 'Which change alters the value of Kc or Kp?', b: 'Only temperature. Concentration, pressure and catalysts can shift the position but do not change K. For an exothermic forward reaction, raising the temperature decreases K.' },
      { n: 5, f: 'Write Kc and Kp for aA + bB ⇌ cC + dD', b: 'Kc = [C]ᶜ[D]ᵈ ÷ ([A]ᵃ[B]ᵇ)\nKp = (pCᶜ × pDᵈ) ÷ (pAᵃ × pBᵇ)\nSolids and pure liquids are left out.' },
      { n: 6, f: 'Partial pressure of a gas', b: 'Partial pressure = mole fraction × total pressure, where mole fraction = moles of that gas ÷ total moles of gas.' },
      { n: 7, f: 'H₂ + I₂ ⇌ 2HI in 1 dm³: 0.50 mol H₂, 0.50 mol I₂, 3.0 mol HI. Calculate Kc.', b: 'Kc = 3.0² ÷ (0.50 × 0.50) = 9.0 ÷ 0.25 = 36. No units: moles of gas are equal on each side.' },
      { n: 8, f: 'Haber process conditions and why they are a compromise', b: 'N₂ + 3H₂ ⇌ 2NH₃ (exothermic), about 450 °C, 200 atm, iron catalyst. Low temperature would give a higher yield but too slowly; high pressure raises yield but costs more in plant and energy. The catalyst does not change the yield.' },
    ]),
    ...sub('as-equilibria', 'as-bronsted-lowry-theory-of-acids-and-bases', '7.2', [
      { n: 1, f: 'Brønsted–Lowry acid and base', b: 'Acid: a proton (H⁺) donor.\nBase: a proton (H⁺) acceptor.' },
      { n: 2, f: 'Identify the conjugate pairs in NH₃ + H₂O ⇌ NH₄⁺ + OH⁻', b: 'NH₃/NH₄⁺ and H₂O/OH⁻. Each pair differs by one H⁺.' },
      { n: 3, f: 'Strong and weak acids', b: 'Strong: completely dissociated in water (HCl, HNO₃, H₂SO₄).\nWeak: only partially dissociated, an equilibrium (e.g. ethanoic acid).\nStrong/weak is not the same as concentrated/dilute.' },
      { n: 4, f: 'Observable differences between a strong and a weak acid of the same concentration', b: 'The strong acid has a lower pH, reacts faster with a reactive metal (more free H⁺) and conducts electricity better (more ions).' },
      { n: 5, f: 'Neutralisation (ionic equation)', b: 'H⁺(aq) + OH⁻(aq) → H₂O(l). The remaining ions form a salt.' },
      { n: 6, f: 'Equivalence-point pH for the four acid–base titration combinations', b: 'Strong acid + strong base: 7.\nStrong acid + weak base: below 7.\nWeak acid + strong base: above 7.\nWeak acid + weak base: about 7, with no vertical section.' },
      { n: 7, f: 'Choosing an indicator: which for which titration?', b: 'Its pH range must lie within the vertical section. Methyl orange (3.1–4.4): strong acid + weak base. Phenolphthalein (8.3–10.0): weak acid + strong base. Either: strong + strong. Neither: weak + weak (no sharp change).' },
      { n: 8, f: 'Amphoteric', b: 'Able to act as either an acid or a base, e.g. water, HCO₃⁻.' },
    ]),

    // 8 Reaction kinetics
    ...sub('as-reaction-kinetics', 'as-rate-of-reaction', '8.1', [
      { n: 1, f: 'Two conditions for a successful collision', b: 'The particles collide with energy greater than or equal to the activation energy, Eₐ, and with the correct orientation.' },
      { n: 2, f: 'Explain why increasing concentration increases the rate', b: 'More particles per unit volume → more frequent collisions → more effective collisions per second. The proportion of collisions that are effective is unchanged.', src: KIN },
      { n: 3, f: 'Why does increasing surface area or gas pressure increase the rate?', b: 'Surface area: more particles exposed, so more frequent collisions.\nPressure: particles closer together, the same as raising concentration.' },
      { n: 4, f: 'Gas volume rises from 24 cm³ to 39 cm³ between 20 s and 30 s. Average rate?', b: 'Rate = (39 − 24) ÷ (30 − 20) = 15 ÷ 10 = 1.5 cm³ s⁻¹' },
      { n: 5, f: 'Activation energy, Eₐ', b: 'The minimum energy that colliding particles must have for a reaction to occur.' },
    ]),
    ...sub('as-reaction-kinetics', 'as-effect-of-temperature-on-reaction-rates-and-the-concept-of-activation-energy', '8.2', [
      { n: 1, f: 'Key features of a Boltzmann distribution curve', b: 'Starts at the origin; rises to a peak (most probable energy); never touches the x-axis at high energy; area under the curve = total number of particles. The area to the right of Eₐ is the number that can react.' },
      { n: 2, f: 'How does the Boltzmann distribution change at a higher temperature?', b: 'The peak moves right and becomes lower and broader; the total area is unchanged; the area beyond Eₐ increases significantly.' },
      { n: 3, f: 'Why does a small temperature rise cause a large increase in rate?', b: 'A much greater proportion of particles have energy ≥ Eₐ. This matters far more than the modest increase in collision frequency.', src: KIN },
      { n: 4, f: 'Which factor increases the energy of collisions?', b: 'Only temperature. Concentration, pressure and surface area change the collision frequency only.' },
    ]),
    ...sub('as-reaction-kinetics', 'as-homogeneous-and-heterogeneous-catalysts', '8.3', [
      { n: 1, f: 'How does a catalyst increase the rate?', b: 'It provides an alternative reaction pathway with a lower activation energy. It is chemically unchanged at the end and does not change ΔH, the yield or the position of equilibrium.', src: KIN },
      { n: 2, f: 'Homogeneous catalyst, with an example', b: 'A catalyst in the same phase as the reactants, e.g. aqueous iodide ions catalysing the decomposition of aqueous hydrogen peroxide.' },
      { n: 3, f: 'Heterogeneous catalyst, with an example', b: 'A catalyst in a different phase from the reactants; it works by adsorption onto its surface, reaction, then desorption. e.g. solid iron in the gas-phase Haber process.' },
      { n: 4, f: 'How does a catalyst show on a Boltzmann distribution and on a reaction-pathway diagram?', b: 'Boltzmann: the curve is unchanged, the Eₐ line moves left, so more particles lie beyond it.\nPathway diagram: same start and end enthalpy levels (ΔH unchanged), lower peak.' },
    ]),

    // 9 The Periodic Table: chemical periodicity
    ...sub('as-the-periodic-table-chemical-periodicity', 'as-periodicity-of-physical-properties-of-the-elements-in-period-3', '9.1', [
      { n: 1, f: 'Trend in atomic radius across Period 3 and the reason', b: 'Decreases: nuclear charge increases while electrons are added to the same shell with roughly constant shielding, so outer electrons are pulled closer.' },
      { n: 2, f: 'Trend in ionic radius across Period 3', b: 'Decreases from Na⁺ to Al³⁺, jumps up sharply to P³⁻, then decreases to Cl⁻. The anions have one more occupied shell than the cations; within each set, nuclear charge rises for the same electron arrangement.' },
      { n: 3, f: 'Explain the melting point pattern across Period 3', b: 'Na → Al: metallic, rising (more delocalised electrons per ion, smaller ions).\nSi: giant covalent, highest (many strong covalent bonds).\nP₄, S₈, Cl₂, Ar: simple molecular/atomic, low (weak id-id forces only; S₈ > P₄ as it is larger).' },
      { n: 4, f: 'Why does melting point fall sharply after silicon?', b: 'The structure changes from giant covalent to simple molecular, so only weak intermolecular forces must be overcome. It is not because the bonds get weaker.' },
      { n: 5, f: 'Trends in first ionisation energy and electronegativity across Period 3', b: 'Both increase (greater nuclear charge, smaller radius, similar shielding). First IE dips at Al and at S.' },
      { n: 6, f: 'Electrical conductivity across Period 3', b: 'Na, Mg and Al are metallic and conduct (increasingly, as more delocalised electrons per atom); Si is a semiconductor; P, S, Cl and Ar do not conduct.' },
    ]),
    ...sub('as-the-periodic-table-chemical-periodicity', 'as-periodicity-of-chemical-properties-of-the-elements-in-period-3', '9.2', [
      { n: 1, f: 'Period 3 oxides with water: products and pH', b: 'Na₂O → NaOH, pH 13–14.\nMgO → slightly soluble Mg(OH)₂, pH 9–10.\nAl₂O₃ and SiO₂: insoluble, pH 7.\nP₄O₁₀ → H₃PO₄, pH 1–2.\nSO₂/SO₃ → H₂SO₃/H₂SO₄, pH 1–3.' },
      { n: 2, f: 'Show that Al₂O₃ is amphoteric', b: 'It reacts with acids and with bases:\nAl₂O₃ + 6HCl → 2AlCl₃ + 3H₂O\nAl₂O₃ + 2NaOH → 2NaAlO₂ + H₂O' },
      { n: 3, f: 'Period 3 chlorides with water', b: 'NaCl: dissolves, no reaction, pH 7.\nMgCl₂: dissolves, slightly acidic, pH about 6.\nAlCl₃: hydrolyses, pH about 3.\nSiCl₄ and PCl₅: violent hydrolysis, misty HCl fumes, pH about 2.' },
      { n: 4, f: 'Why does the behaviour of the chlorides change from dissolving to hydrolysis across Period 3?', b: 'The electronegativity difference from chlorine shrinks, so bonding changes from ionic (dissolves as ions) to covalent (water attacks the Si–Cl or P–Cl bond).' },
      { n: 5, f: 'Oxidation numbers of Period 3 elements in their oxides', b: 'Na₂O +1, MgO +2, Al₂O₃ +3, SiO₂ +4, P₄O₁₀ +5, SO₃ +6. They rise as more outer electrons are used in bonding.' },
      { n: 6, f: 'Why is MgO in water only about pH 9–10?', b: 'Mg(OH)₂ is only sparingly soluble, so few hydroxide ions enter solution.' },
    ]),
    ...sub('as-the-periodic-table-chemical-periodicity', 'as-chemical-periodicity-of-other-elements', '9.3', [
      { n: 1, f: 'Element X forms an oxide giving a strongly acidic solution and a chloride that fumes in moist air. Deduce X.', b: 'A violently hydrolysing chloride is covalent (like SiCl₄ or PCl₅). SiO₂ does not react with water, so a strongly acidic oxide points to P₄O₁₀: X is phosphorus.' },
      { n: 2, f: 'How can you use periodic patterns to predict an unfamiliar element?', b: 'Use its position: metals on the left give ionic, basic oxides and chlorides that dissolve; non-metals on the right give covalent, acidic oxides and chlorides that hydrolyse. Trends in radius, IE and electronegativity follow from nuclear charge, shells and shielding.' },
      { n: 3, f: 'An unknown element has a high-melting oxide that is basic and a chloride that dissolves to give pH 7. Where is it in the period?', b: 'On the left (Group 1 type): an ionic, basic oxide and an ionic chloride that dissolves without hydrolysis, like Na₂O and NaCl.' },
    ]),

    // 10 Group 2
    ...sub('as-group-2', 'as-similarities-and-trends-in-the-properties-of-the-group-2-metals-and-their-compounds', '10.1', [
      { n: 1, f: 'Why does reactivity increase down Group 2?', b: 'Atomic radius and shielding increase, so the two outer electrons are lost more easily, despite the greater nuclear charge.' },
      { n: 2, f: 'Magnesium with cold water and with steam', b: 'Cold water: very slow, gives Mg(OH)₂ + H₂.\nSteam: vigorous, gives MgO + H₂ (Mg + H₂O → MgO + H₂).' },
      { n: 3, f: 'Solubility trends of the Group 2 hydroxides and sulfates', b: 'Hydroxides: solubility increases down the group (Mg(OH)₂ sparingly soluble → Ba(OH)₂ soluble).\nSulfates: solubility decreases (MgSO₄ soluble → BaSO₄ insoluble).', src: G2 },
      { n: 4, f: 'Thermal decomposition of Group 2 carbonates and nitrates, and the trend', b: 'MCO₃ → MO + CO₂\n2M(NO₃)₂ → 2MO + 4NO₂ + O₂ (brown NO₂)\nThermal stability increases down the group.' },
      { n: 5, f: 'Why does the reaction of barium with dilute sulfuric acid stop almost at once?', b: 'Insoluble BaSO₄ coats the metal and blocks further contact with the acid. It is a solubility effect, not low reactivity.' },
      { n: 6, f: 'Uses of Ca(OH)₂, CaCO₃, MgO and BaSO₄', b: 'Ca(OH)₂: neutralises acidic soils.\nCaCO₃: removes SO₂ from flue gases; cement and iron making.\nMgO: refractory furnace lining.\nBaSO₄: barium meal (insoluble, so safe).', src: G2 },
      { n: 7, f: 'Group 2 oxides, hydroxides and carbonates with dilute hydrochloric acid', b: 'MO + 2HCl → MCl₂ + H₂O\nM(OH)₂ + 2HCl → MCl₂ + 2H₂O\nMCO₃ + 2HCl → MCl₂ + H₂O + CO₂' },
    ]),

    // 11 Group 17
    ...sub('as-group-17', 'as-physical-properties-of-the-group-17-elements', '11.1', [
      { n: 1, f: 'Colours and states of chlorine, bromine and iodine at room temperature', b: 'Chlorine: pale yellow-green gas.\nBromine: red-brown liquid.\nIodine: grey-black solid.\nColour darkens down the group.' },
      { n: 2, f: 'Why does volatility decrease (boiling point increase) down Group 17?', b: 'The molecules have more electrons, so the instantaneous dipole–induced dipole forces between them are stronger.' },
      { n: 3, f: 'Trend in X–X bond strength down Group 17, and why', b: 'Decreases (Cl–Cl 242, Br–Br 193, I–I 151 kJ mol⁻¹): the atoms are larger, so the shared pair is further from both nuclei. This is about the bond within the molecule, not the forces between molecules.' },
    ]),
    ...sub('as-group-17', 'as-the-chemical-properties-of-the-halogen-elements-and-the-hydrogen-halides', '11.2', [
      { n: 1, f: 'Trend in oxidising power of the halogens down the group, and why', b: 'Decreases: larger radius and more shielding, so an incoming electron is attracted less strongly.', src: G17 },
      { n: 2, f: 'Displacement: chlorine water added to KBr(aq) and to KI(aq)', b: 'Cl₂ + 2KBr → 2KCl + Br₂: solution turns orange.\nCl₂ + 2KI → 2KCl + I₂: solution turns brown.\nIodine does not displace bromide.' },
      { n: 3, f: 'Reactions of hydrogen with Cl₂, Br₂ and I₂', b: 'Cl₂: explosive in sunlight.\nBr₂: needs heat and a catalyst, less vigorous.\nI₂: slow, needs heat and a catalyst, and forms an equilibrium (does not go to completion).' },
      { n: 4, f: 'Thermal stability of the hydrogen halides HCl, HBr and HI', b: 'Decreases down the group: HCl is stable to heat, HI decomposes significantly on strong heating, because the H–X bond gets weaker.' },
    ]),
    ...sub('as-group-17', 'as-some-reactions-of-the-halide-ions', '11.3', [
      { n: 1, f: 'Trend in reducing power of the halide ions', b: 'Increases down the group: a larger ion loses an electron more easily.', src: G17 },
      { n: 2, f: 'Silver nitrate test for halide ions, with the ammonia follow-up', b: 'Acidify with dilute nitric acid, add AgNO₃(aq).\nCl⁻: white, dissolves in dilute NH₃.\nBr⁻: cream, dissolves only in concentrated NH₃.\nI⁻: yellow, insoluble in both.' },
      { n: 3, f: 'Products when concentrated H₂SO₄ is added to solid NaCl, NaBr and NaI', b: 'NaCl: HCl only (no redox).\nNaBr: HBr, then SO₂ and Br₂ (red-brown fumes).\nNaI: HI, then SO₂, S and H₂S (rotten-egg smell) and I₂.' },
      { n: 4, f: 'Why do NaCl, NaBr and NaI give different products with concentrated sulfuric acid?', b: 'Increasing reducing power: Cl⁻ cannot reduce H₂SO₄; Br⁻ reduces it to SO₂; I⁻ reduces it further, to S and H₂S.' },
    ]),
    ...sub('as-group-17', 'as-the-reactions-of-chlorine', '11.4', [
      { n: 1, f: 'Chlorine with cold dilute NaOH', b: 'Cl₂ + 2NaOH → NaCl + NaClO + H₂O\nDisproportionation: Cl goes from 0 to −1 and to +1.' },
      { n: 2, f: 'Chlorine with hot concentrated NaOH', b: '3Cl₂ + 6NaOH → 5NaCl + NaClO₃ + 3H₂O\nDisproportionation: Cl goes from 0 to −1 and to +5.' },
      { n: 3, f: 'Chlorine in water treatment', b: 'Cl₂ + H₂O ⇌ HCl + HClO. The chloric(I) acid (HClO) kills bacteria, which is why chlorine is used to treat water.' },
    ]),

    // 12 Nitrogen and sulfur
    ...sub('as-nitrogen-and-sulfur', 'as-nitrogen-and-sulfur', '12.1', [
      { n: 1, f: 'Two reasons nitrogen gas is unreactive', b: 'The N≡N triple bond has a very high bond enthalpy, so the activation energy is large; and the molecule is non-polar, so it does not attract nucleophiles or electrophiles.' },
      { n: 2, f: 'Why is ammonia a base?', b: 'The lone pair on nitrogen accepts a proton, forming a dative bond: NH₃ + H⁺ → NH₄⁺. In water: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ (weak base).' },
      { n: 3, f: 'Shape and bond angle of NH₃ and of NH₄⁺', b: 'NH₃: trigonal pyramidal, 107° (one lone pair).\nNH₄⁺: tetrahedral, 109.5° (the lone pair is now a bonding pair; all four N–H bonds are identical).' },
      { n: 4, f: 'How is ammonia displaced from an ammonium salt, and how is it detected?', b: 'Warm with NaOH(aq): NH₄Cl + NaOH → NaCl + NH₃ + H₂O. Ammonia turns damp red litmus blue.' },
      { n: 5, f: 'Show that NO catalyses the oxidation of SO₂ in the atmosphere', b: 'NO + ½O₂ → NO₂\nNO₂ + SO₂ → SO₃ + NO\nNO is regenerated unchanged.' },
      { n: 6, f: 'How do oxides of nitrogen form, and how are they removed from car exhausts?', b: 'N₂ + O₂ → 2NO at high temperature in engines (and from lightning).\nCatalytic converter: 2CO + 2NO → 2CO₂ + N₂.' },
      { n: 7, f: 'Photochemical smog', b: 'NO and NO₂ react with unburned hydrocarbons in sunlight to form peroxyacetyl nitrate (PAN), an eye and lung irritant.' },
    ]),

    // 13 An introduction to AS Level organic chemistry
    ...sub('as-an-introduction-to-as-level-organic-chemistry', 'as-formulas-functional-groups-and-the-naming-of-organic-compounds', '13.1', [
      { n: 1, f: 'Structural, displayed and skeletal formulae', b: 'Structural: the arrangement written on one line, e.g. CH₃CH₂OH.\nDisplayed: every atom and every bond drawn.\nSkeletal: the carbon backbone as lines; carbons and their hydrogens implied.', src: ORG },
      { n: 2, f: 'What is implied at each vertex and line end of a skeletal formula?', b: 'A carbon atom, with enough hydrogens to make four bonds.' },
      { n: 3, f: 'The three parts of a systematic name', b: 'Root: the longest continuous carbon chain.\nSuffix: the principal functional group.\nPrefix: substituents, in alphabetical order.\nNumber from the end that gives the principal group the lowest locant.' },
      { n: 4, f: 'Homologous series', b: 'A family of compounds with the same functional group and general formula, differing by CH₂, with similar chemical properties and a gradual trend in physical properties.' },
      { n: 5, f: 'Name CH₃CH(OH)CH₂CH₃', b: 'Butan-2-ol (four-carbon chain, OH on carbon 2).' },
    ]),
    ...sub('as-an-introduction-to-as-level-organic-chemistry', 'as-characteristic-organic-reactions', '13.2', [
      { n: 1, f: 'Addition, substitution and elimination reactions', b: 'Addition: two reactants become one product.\nSubstitution: one atom or group replaces another.\nElimination: a small molecule is lost, usually forming a double bond.', src: ORG },
      { n: 2, f: 'Hydrolysis and condensation reactions', b: 'Hydrolysis: breakdown by reaction with water.\nCondensation: two molecules join with loss of a small molecule, often water.', src: ORG },
      { n: 3, f: 'Homolytic and heterolytic fission', b: 'Homolytic: the bond breaks evenly, one electron to each atom, forming two radicals (half-arrows).\nHeterolytic: one atom takes both electrons, forming a cation and an anion (full curly arrows).' },
      { n: 4, f: 'Nucleophile and electrophile', b: 'Nucleophile: an electron-pair donor, attracted to δ+ atoms.\nElectrophile: an electron-pair acceptor, attracted to δ− regions.', src: ORG },
      { n: 5, f: 'Rules for curly arrows', b: 'A full arrow moves a pair of electrons, a half-arrow one electron. It starts from a bond or a lone pair (never an atom or a charge) and ends where the electrons go. Charges must balance.' },
      { n: 6, f: 'Match the mechanism to its substrate: free-radical substitution, electrophilic addition, nucleophilic substitution, nucleophilic addition', b: 'Free-radical substitution: alkanes + halogen, UV.\nElectrophilic addition: alkenes.\nNucleophilic substitution: halogenoalkanes.\nNucleophilic addition: aldehydes and ketones.' },
    ]),
    ...sub('as-an-introduction-to-as-level-organic-chemistry', 'as-shapes-of-organic-molecules', '13.3', [
      { n: 1, f: 'Shape around sp³, sp² and sp carbon atoms', b: 'sp³: tetrahedral, 109.5°.\nsp²: trigonal planar, 120°.\nsp: linear, 180°.' },
      { n: 2, f: 'Why is ethene planar?', b: 'Both carbons are sp² hybridised, so all six atoms lie in one plane. The unhybridised p orbitals overlap sideways above and below this plane to form the π bond.' },
      { n: 3, f: 'Why is the π bond in C=C weaker and more reactive than the σ bond?', b: 'Sideways overlap of p orbitals is less effective than head-on overlap, and the π electron density lies above and below the plane, exposed to electrophiles.' },
      { n: 4, f: 'Number of σ and π bonds in a C=C double bond and in a C≡C triple bond', b: 'C=C: one σ + one π.\nC≡C: one σ + two π.' },
    ]),
    ...sub('as-an-introduction-to-as-level-organic-chemistry', 'as-isomerism', '13.4', [
      { n: 1, f: 'Structural isomers', b: 'Compounds with the same molecular formula but a different structural formula (different connectivity).' },
      { n: 2, f: 'Chain, position and functional group isomerism (one example each)', b: 'Chain: different carbon skeleton (butane / methylpropane).\nPosition: same group, different place (propan-1-ol / propan-2-ol).\nFunctional group: different group (propanal / propanone).', src: ORG },
      { n: 3, f: 'Two conditions for cis–trans (geometrical) isomerism', b: 'A C=C double bond, which prevents rotation, and two different groups on each carbon of the double bond.' },
      { n: 4, f: 'Chiral centre and optical isomers', b: 'A chiral centre is a carbon atom with four different groups attached. It gives two optical isomers (enantiomers): non-superimposable mirror images that rotate plane-polarised light in opposite directions.' },
      { n: 5, f: 'Why is a racemic mixture optically inactive?', b: 'It contains equal amounts of the two enantiomers, which rotate plane-polarised light equally in opposite directions, so the effects cancel.' },
      { n: 6, f: 'Stereoisomers', b: 'Compounds with the same structural formula (same connectivity) but a different arrangement of atoms in space: cis–trans and optical isomers.' },
    ]),

    // 14 Hydrocarbons
    ...sub('as-hydrocarbons', 'as-alkanes', '14.1', [
      { n: 1, f: 'Initiation step for the chlorination of methane', b: 'Cl₂ → 2Cl• in UV light: homolytic fission of the Cl–Cl bond.' },
      { n: 2, f: 'Propagation steps for the chlorination of methane', b: 'Cl• + CH₄ → •CH₃ + HCl\n•CH₃ + Cl₂ → CH₃Cl + Cl•\nEach step uses a radical and makes one, so the chain continues.' },
      { n: 3, f: 'Termination steps for the chlorination of methane', b: 'Any two radicals combine:\nCl• + Cl• → Cl₂\n•CH₃ + Cl• → CH₃Cl\n•CH₃ + •CH₃ → C₂H₆' },
      { n: 4, f: 'Why does free-radical substitution give a mixture of products?', b: 'It is poorly controlled: Cl• can attack the product too, giving further substitution (CH₂Cl₂, CHCl₃, CCl₄).' },
      { n: 5, f: 'Why are alkanes generally unreactive?', b: 'The C–C and C–H bonds are strong and almost non-polar, so they do not attract nucleophiles or electrophiles.' },
    ]),
    ...sub('as-hydrocarbons', 'as-alkenes', '14.2', [
      { n: 1, f: 'Mechanism of electrophilic addition of Br₂ to an alkene (outline)', b: 'The C=C (high electron density) induces a dipole in Br₂. The π electrons attack the δ+ bromine atom, Br–Br breaks heterolytically, a carbocation forms, then Br⁻ attacks the carbocation.' },
      { n: 2, f: 'Test for a C=C bond', b: 'Shake with bromine water: orange-brown → colourless.' },
      { n: 3, f: 'Conditions: alkene → alkane, and alkene → alcohol', b: 'Alkane: H₂, nickel catalyst, about 150 °C.\nAlcohol: steam, H₃PO₄ catalyst, about 300 °C and 60 atm.' },
      { n: 4, f: 'Alkene with cold dilute acidified KMnO₄', b: 'Gives a diol; purple → colourless.' },
      { n: 5, f: 'Alkene with hot concentrated acidified KMnO₄: what the fragments show', b: 'The C=C is broken. =CH₂ → CO₂ + H₂O; =CHR → carboxylic acid; =CR₂ → ketone. The fragments locate the double bond.' },
      { n: 6, f: "Markovnikov's rule and the reason behind it", b: 'When HBr adds to an unsymmetrical alkene, H adds to the carbon that already has more hydrogens, because this forms the more stable carbocation (tertiary > secondary > primary; alkyl groups are electron-donating).' },
    ]),

    // 15 Halogen compounds
    ...sub('as-halogen-compounds', 'as-halogenoalkanes', '15.1', [
      { n: 1, f: 'SN2 and SN1: which halogenoalkanes, and how many steps?', b: 'SN2: primary; one step, through a transition state.\nSN1: tertiary; two steps, through a carbocation.\nSecondary can react by both.' },
      { n: 2, f: 'Why do tertiary halogenoalkanes favour SN1 and primary favour SN2?', b: 'Tertiary: three electron-donating alkyl groups stabilise the carbocation.\nPrimary: little steric hindrance, so the nucleophile can reach the δ+ carbon.' },
      { n: 3, f: 'Halogenoalkane with NaOH: aqueous vs ethanolic', b: 'Aqueous NaOH, heat under reflux: substitution, gives an alcohol.\nEthanolic NaOH, heat: elimination, gives an alkene.' },
      { n: 4, f: 'Halogenoalkane with KCN and with NH₃', b: 'KCN in ethanol, heat under reflux: nitrile (chain + 1 C).\nExcess NH₃ in ethanol, heat in a sealed tube: amine.' },
      { n: 5, f: 'Why does reactivity increase from chloroalkanes to iodoalkanes?', b: 'The C–X bond enthalpy decreases (C–Cl > C–Br > C–I), so C–I breaks most easily. Bond enthalpy, not bond polarity, decides it.' },
      { n: 6, f: 'Comparing hydrolysis rates with AgNO₃(aq) in ethanol', b: 'Warm each halogenoalkane with AgNO₃(aq)/ethanol: precipitate appears fastest for iodo (yellow), then bromo (cream), then chloro (white).' },
    ]),

    // 16 Hydroxy compounds
    ...sub('as-hydroxy-compounds', 'as-alcohols', '16.1', [
      { n: 1, f: 'Oxidation products of primary, secondary and tertiary alcohols', b: 'Primary: aldehyde, then carboxylic acid.\nSecondary: ketone (no further).\nTertiary: not oxidised.', src: ALC },
      { n: 2, f: 'Primary alcohol with acidified K₂Cr₂O₇: how do you get the aldehyde rather than the acid?', b: 'Distil as it forms, so the aldehyde leaves before it is oxidised further. Heating under reflux with excess oxidant gives the carboxylic acid.' },
      { n: 3, f: 'Colour change when acidified dichromate(VI) oxidises an alcohol', b: 'Orange → green (Cr₂O₇²⁻ → Cr³⁺). A tertiary alcohol leaves it orange.' },
      { n: 4, f: 'Dehydration of an alcohol', b: 'Heat with concentrated H₂SO₄ or H₃PO₄ (about 170 °C): elimination of water gives an alkene.' },
      { n: 5, f: 'Alcohols with sodium, and with PCl₅', b: 'Na: sodium alkoxide + hydrogen (effervescence).\nPCl₅: chloroalkane + HCl + POCl₃ (misty fumes of HCl).' },
      { n: 6, f: 'Why are alcohols weaker acids than water?', b: 'The electron-donating alkyl group makes the O–H hydrogen less easily released and makes the alkoxide ion (RO⁻) less stable than OH⁻.' },
      { n: 7, f: 'Iodoform test: which alcohols give a positive result?', b: 'Those containing CH₃CH(OH)–, e.g. ethanol and propan-2-ol. Warm with alkaline I₂(aq): yellow precipitate of CHI₃.' },
    ]),

    // 17 Carbonyl compounds
    ...sub('as-carbonyl-compounds', 'as-aldehydes-and-ketones', '17.1', [
      { n: 1, f: 'Why is the carbonyl carbon attacked by nucleophiles?', b: 'C=O is polar: oxygen is more electronegative, so the carbon carries δ+.' },
      { n: 2, f: 'Reducing aldehydes and ketones', b: 'NaBH₄ (or LiAlH₄): aldehyde + 2[H] → primary alcohol; ketone + 2[H] → secondary alcohol.' },
      { n: 3, f: 'Nucleophilic addition of HCN to a carbonyl (outline)', b: 'HCN with a trace of KCN supplies CN⁻. CN⁻ lone pair attacks the δ+ carbon, the π bond breaks onto O; the O⁻ is protonated. Product: a hydroxynitrile with one more carbon.' },
      { n: 4, f: 'What does a positive 2,4-DNPH test show?', b: 'An orange precipitate: a carbonyl group (aldehyde or ketone). It does not distinguish them; the melting point of the purified derivative identifies the compound.' },
      { n: 5, f: "Tollens' and Fehling's tests", b: "Tollens' (ammoniacal silver nitrate): silver mirror with an aldehyde.\nFehling's (alkaline copper(II)): blue → brick-red precipitate with an aldehyde.\nKetones give no change.", src: CARB },
      { n: 6, f: 'Iodoform test for carbonyl compounds', b: 'Warm with alkaline I₂(aq): yellow precipitate of CHI₃ with any compound containing CH₃CO–, e.g. ethanal and propanone.' },
    ]),

    // 18 Carboxylic acids and derivatives
    ...sub('as-carboxylic-acids-and-derivatives', 'as-carboxylic-acids', '18.1', [
      { n: 1, f: 'Three ways to make a carboxylic acid', b: 'Oxidise a primary alcohol or aldehyde with acidified K₂Cr₂O₇, heating under reflux; hydrolyse a nitrile (dilute acid, or dilute alkali then acidify); hydrolyse an ester (then acidify).' },
      { n: 2, f: 'Reactions of carboxylic acids with metals, alkalis and carbonates', b: 'Reactive metal → salt + hydrogen.\nAlkali or metal oxide → salt + water.\nCarbonate → salt + water + CO₂ (effervescence), e.g. 2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂.' },
      { n: 3, f: 'Test that identifies a carboxylic acid', b: 'Add a carbonate (e.g. Na₂CO₃): effervescence of CO₂. Alcohols do not do this.' },
      { n: 4, f: 'Reducing a carboxylic acid', b: 'LiAlH₄ in dry ether gives a primary alcohol: CH₃COOH + 4[H] → CH₃CH₂OH + H₂O. NaBH₄ is not strong enough.' },
      { n: 5, f: 'Nitrile hydrolysis and the carbon count', b: 'The –C≡N carbon becomes –COOH, so the acid has the same number of carbons as the nitrile (ethanenitrile → ethanoic acid).' },
    ]),
    ...sub('as-carboxylic-acids-and-derivatives', 'as-esters', '18.2', [
      { n: 1, f: 'Esterification: reagents and conditions', b: 'Carboxylic acid + alcohol, concentrated H₂SO₄ catalyst, heat under reflux ⇌ ester + water. It is reversible, so the yield is limited.' },
      { n: 2, f: 'Name the ester from ethanol and propanoic acid', b: 'Ethyl propanoate: the alcohol part first, then the acid part.' },
      { n: 3, f: 'Acid and alkaline hydrolysis of esters', b: 'Dilute acid, reflux: carboxylic acid + alcohol, reversible.\nDilute NaOH, reflux: carboxylate salt + alcohol, goes to completion.' },
      { n: 4, f: 'Why does alkaline hydrolysis of an ester go to completion?', b: 'The carboxylate salt formed cannot react with the alcohol, so the reverse reaction cannot happen.' },
      { n: 5, f: 'Uses of esters', b: 'Volatile with fruity smells: flavourings and perfumes. Also solvents and plasticisers.' },
    ]),

    // 19 Nitrogen compounds
    ...sub('as-nitrogen-compounds', 'as-primary-amines', '19.1', [
      { n: 1, f: 'How is a primary amine made from a halogenoalkane?', b: 'Heat with excess ammonia in ethanol under pressure (sealed tube). e.g. CH₃CH₂Br + 2NH₃ → CH₃CH₂NH₂ + NH₄Br' },
      { n: 2, f: 'Why must ammonia be in excess when making a primary amine?', b: 'The primary amine is itself a nucleophile and would react further with the halogenoalkane, giving secondary and tertiary amines and quaternary salts.' },
      { n: 3, f: 'What type of reaction forms an amine from a halogenoalkane?', b: 'Nucleophilic substitution: the lone pair on NH₃ attacks the δ+ carbon and the halide ion leaves.' },
    ]),
    ...sub('as-nitrogen-compounds', 'as-nitriles-and-hydroxynitriles', '19.2', [
      { n: 1, f: 'Two ways to make nitriles (AS)', b: 'Halogenoalkane + KCN in ethanol, heat under reflux → nitrile.\nAldehyde or ketone + HCN with KCN → hydroxynitrile.\nBoth add one carbon.' },
      { n: 2, f: 'Hydrolysis of a nitrile with acid and with alkali', b: 'Dilute HCl, reflux: carboxylic acid + ammonium salt.\nDilute NaOH, reflux: carboxylate salt + ammonia; then acidify to get the acid.' },
      { n: 3, f: 'CN⁻ gives substitution with halogenoalkanes but addition with carbonyls. Why?', b: 'Halogenoalkane: sp³ carbon with a leaving group, so the halide leaves (substitution).\nCarbonyl: sp² carbon with a π bond and no leaving group, so the π bond breaks (addition).' },
      { n: 4, f: 'Why does HCN with butanone give equal amounts of two enantiomers, but propanone does not?', b: 'The carbonyl carbon is planar, so CN⁻ attacks either face equally. Butanone has two different groups, so a chiral centre forms. Propanone has two identical CH₃ groups, so its product has no chiral centre.' },
      { n: 5, f: 'Route: bromoethane → 2-hydroxypropanenitrile', b: '1 NaOH(aq), heat → ethanol.\n2 Acidified K₂Cr₂O₇, distil → ethanal.\n3 HCN with KCN → CH₃CH(OH)CN.' },
    ]),

    // 20 Polymerisation
    ...sub('as-polymerisation', 'as-addition-polymerisation', '20.1', [
      { n: 1, f: 'Addition polymerisation', b: 'Many alkene monomers join by opening their C=C double bonds to form one long chain. The polymer is the only product.' },
      { n: 2, f: 'Steps for drawing the repeat unit of an addition polymer', b: 'Open the C=C to a single bond; draw the two backbone carbons with their groups; extend a bond from each end through the brackets; write n outside.' },
      { n: 3, f: 'Repeat unit of poly(propene)', b: '–[CH₂–CH(CH₃)]ₙ–' },
      { n: 4, f: 'A polymer chain is …–CH₂–CCl₂–CH₂–CCl₂–… Deduce the monomer.', b: 'Repeat unit –CH₂–CCl₂–, so the monomer is CH₂=CCl₂ (1,1-dichloroethene).' },
      { n: 5, f: 'Why are poly(alkenes) non-biodegradable?', b: 'The C–C backbone is non-polar and unreactive, with no bonds that enzymes or water can attack.' },
      { n: 6, f: 'Incineration of polymers: advantage and disadvantage', b: 'Advantage: releases energy and reduces volume.\nDisadvantage: produces CO₂; burning PVC releases toxic HCl.', src: POLY },
    ]),

    // 21 Organic synthesis
    ...sub('as-organic-synthesis', 'as-organic-synthesis', '21.1', [
      { n: 1, f: 'Which AS reactions add one carbon to the chain?', b: 'Halogenoalkane + KCN → nitrile (then hydrolyse to an acid), and carbonyl + HCN → hydroxynitrile. All other AS reactions keep the carbon count.', src: SYN },
      { n: 2, f: 'Method for planning a multi-step route', b: '1 Identify the functional groups in the start and target.\n2 Compare carbon counts (different → nitrile step).\n3 Work backwards from the target.\n4 Give reagents and conditions for every step.\n5 Check no step destroys a group you need.' },
      { n: 3, f: 'Route from bromoethane to propanoic acid', b: '1 KCN in ethanol, heat under reflux → propanenitrile.\n2 Dilute HCl, heat under reflux → propanoic acid.' },
      { n: 4, f: 'Observations that identify functional groups', b: 'Decolourises bromine water: C=C.\nEffervesces with carbonate: –COOH.\nOrange ppt with 2,4-DNPH: C=O.\nSilver mirror with Tollens\': –CHO.\nOrange → green with acidified dichromate: primary or secondary –OH.' },
      { n: 5, f: 'Three condition pairs that decide the product', b: 'Aqueous NaOH (alcohol) vs ethanolic NaOH (alkene).\nDistil (aldehyde) vs reflux (carboxylic acid).\nConc. H₂SO₄ at 170 °C (alcohol → alkene) vs steam with H₃PO₄ (alkene → alcohol).' },
    ]),

    // 22 Analytical techniques
    ...sub('as-analytical-techniques', 'as-infrared-spectroscopy', '22.1', [
      { n: 1, f: 'What does infrared spectroscopy detect, and what decides the absorption frequency?', b: 'Bonds absorb IR radiation at frequencies matching their vibrations (stretching and bending). The frequency depends on the bond strength and the masses of the atoms.' },
      { n: 2, f: 'IR: alcohol vs carboxylic acid vs aldehyde/ketone', b: 'Alcohol: broad O–H at 3200–3600 cm⁻¹, no C=O.\nCarboxylic acid: very broad O–H at 2500–3000 plus C=O.\nAldehyde, ketone or ester: strong C=O (about 1670–1750), no O–H.' },
      { n: 3, f: 'IR absorptions for C=O and C≡N', b: 'C=O: strong, sharp, about 1670–1740 cm⁻¹ (esters 1710–1750, amides 1640–1690).\nC≡N: sharp, 2200–2250 cm⁻¹.' },
      { n: 4, f: 'A use of infrared spectroscopy outside the lab', b: 'Breathalysers (ethanol) and monitoring of exhaust gases, since CO and CO₂ absorb characteristically.' },
    ]),
    ...sub('as-analytical-techniques', 'as-mass-spectrometry', '22.2', [
      { n: 1, f: 'Molecular ion peak (M⁺)', b: 'The peak at the highest m/e (ignoring isotope peaks); it gives the relative molecular mass.' },
      { n: 2, f: 'M and M+2 peaks: what do the ratios 3 : 1 and 1 : 1 show?', b: '3 : 1: one chlorine atom (³⁵Cl and ³⁷Cl).\n1 : 1: one bromine atom (⁷⁹Br and ⁸¹Br).', src: IRMS },
      { n: 3, f: 'How does the M+1 peak indicate the number of carbon atoms?', b: 'It comes from ¹³C (about 1.1% per carbon). Number of carbons ≈ (height of M+1 as a % of M) ÷ 1.1. e.g. 6.6% → about 6 carbons.' },
      { n: 4, f: 'Common fragment losses: 15, 17, 29 and 45', b: '15: CH₃. 17: OH. 29: CHO or C₂H₅. 45: COOH.' },
      { n: 5, f: 'Ar from a mass spectrum of an element', b: 'Ar = Σ(isotopic mass × % abundance) ÷ 100.' },
    ]),
    // ===== A LEVEL =====

    // 23 Chemical energetics
    ...sub('a-chemical-energetics', 'a-lattice-energy-and-born-haber-cycles', '23.1', [
      { n: 1, f: 'Lattice energy, ΔHlatt', b: 'The enthalpy change when one mole of an ionic compound is formed from its gaseous ions under standard conditions. Always exothermic (negative).' },
      { n: 2, f: 'Enthalpy change of atomisation', b: 'The enthalpy change when one mole of gaseous atoms is formed from the element in its standard state.', src: AENER },
      { n: 3, f: 'First electron affinity', b: 'The enthalpy change when one mole of gaseous atoms each gain an electron to form one mole of gaseous 1− ions.', src: AENER },
      { n: 4, f: 'Why is the second electron affinity endothermic?', b: 'The electron is being added to an already negative ion, so energy is needed to overcome the repulsion.' },
      { n: 5, f: 'Two factors that make a lattice energy more exothermic', b: 'Higher ionic charges (this dominates) and smaller ionic radii: lattice energy is proportional to (charge⁺ × charge⁻) ÷ (r⁺ + r⁻). MgO is far more exothermic than NaCl.' },
      { n: 6, f: 'Born–Haber cycle: the Hess equation for ΔHf of an ionic solid', b: 'ΔHf = Σ(atomisation) + Σ(ionisation energies) + Σ(electron affinities) + ΔHlatt. Watch multipliers: Cl₂ → 2Cl needs 2 × atomisation; Mg²⁺ needs the first and second IE.' },
    ]),
    ...sub('a-chemical-energetics', 'a-enthalpies-of-solution-and-hydration', '23.2', [
      { n: 1, f: 'Enthalpy change of hydration', b: 'The enthalpy change when one mole of gaseous ions dissolves in an excess of water. Always exothermic.', src: AENER },
      { n: 2, f: 'Enthalpy change of solution', b: 'The enthalpy change when one mole of solute dissolves in a solvent to form an infinitely dilute solution. It can be positive or negative.', src: AENER },
      { n: 3, f: 'Equation linking ΔHsol, lattice energy and hydration enthalpies', b: 'ΔHsol = −ΔHlatt + ΔHhyd(cation) + ΔHhyd(anion)' },
      { n: 4, f: 'ΔHlatt(NaCl) = −787, ΔHhyd(Na⁺) = −406, ΔHhyd(Cl⁻) = −364 kJ mol⁻¹. Calculate ΔHsol.', b: 'ΔHsol = −(−787) + (−406) + (−364) = 787 − 770 = +17 kJ mol⁻¹' },
      { n: 5, f: 'How do ionic charge and radius affect hydration enthalpy?', b: 'Higher charge and smaller radius make it more exothermic: stronger attraction between the ion and the polar water molecules.' },
    ]),
    ...sub('a-chemical-energetics', 'a-entropy-change', '23.3', [
      { n: 1, f: 'Entropy, S', b: 'A measure of the dispersal of energy and particles: the number of possible arrangements (disorder) of a system. Units J K⁻¹ mol⁻¹.' },
      { n: 2, f: 'Order of entropy for the three states', b: 'Gas ≫ liquid > solid.' },
      { n: 3, f: 'How do you predict the sign of ΔS for a reaction?', b: 'More moles of gas produced: positive. Fewer moles of gas: negative. Melting, boiling and usually dissolving a solid: positive.' },
      { n: 4, f: 'How do you calculate ΔS from standard entropies?', b: 'ΔS⦵ = ΣS⦵(products) − ΣS⦵(reactants), multiplying each by its coefficient. The answer is in J K⁻¹ mol⁻¹.' },
      { n: 5, f: 'Effect of raising temperature on the entropy of a substance', b: 'Entropy increases: the particles have more energy and more ways of arranging it.' },
    ]),
    ...sub('a-chemical-energetics', 'a-gibbs-free-energy-change', '23.4', [
      { n: 1, f: 'Gibbs equation and the condition for feasibility', b: 'ΔG = ΔH − TΔS (T in K; convert ΔS to kJ K⁻¹ mol⁻¹). A reaction is feasible when ΔG is negative (or zero).' },
      { n: 2, f: 'Feasibility for each combination of signs of ΔH and ΔS', b: 'ΔH −, ΔS +: always feasible.\nΔH +, ΔS −: never.\nΔH −, ΔS −: at low temperature.\nΔH +, ΔS +: at high temperature.' },
      { n: 3, f: 'Temperature at which a reaction becomes feasible', b: 'Set ΔG = 0: T = ΔH ÷ ΔS (with ΔS in kJ K⁻¹ mol⁻¹ if ΔH is in kJ mol⁻¹).' },
      { n: 4, f: 'A reaction has a large negative ΔG but nothing is observed. Why?', b: 'Feasible does not mean fast: the activation energy may be so high that the rate is negligible.' },
      { n: 5, f: 'ΔH = +178 kJ mol⁻¹, ΔS = +0.161 kJ K⁻¹ mol⁻¹. Minimum temperature for feasibility?', b: 'T = ΔH ÷ ΔS = 178 ÷ 0.161 ≈ 1106 K (about 1110 K).' },
    ]),

    // 24 Electrochemistry
    ...sub('a-electrochemistry', 'a-electrolysis', '24.1', [
      { n: 1, f: 'Electrolysis: what happens at the cathode and the anode?', b: 'Cathode (negative): reduction, cations gain electrons.\nAnode (positive): oxidation, anions lose electrons.' },
      { n: 2, f: 'Equations linking charge, current, time and moles of electrons', b: 'Q = It (Q in C, I in A, t in s).\nQ = nF, with n = moles of electrons and F = 96 500 C mol⁻¹.' },
      { n: 3, f: 'Relationship between the Faraday constant, the Avogadro constant and the electron charge', b: 'F = L × e: the charge on one mole of electrons.' },
      { n: 4, f: '2.00 A through CuSO₄(aq) for 3860 s. Mass of copper deposited? (Ar Cu = 63.5)', b: 'Q = 2.00 × 3860 = 7720 C; n(e⁻) = 7720 ÷ 96 500 = 0.0800 mol; Cu²⁺ + 2e⁻ → Cu, so n(Cu) = 0.0400 mol; mass = 0.0400 × 63.5 = 2.54 g.' },
      { n: 5, f: 'Which product forms at the anode in electrolysis of aqueous NaCl, and why does concentration matter?', b: 'Concentrated NaCl: chlorine. Very dilute NaCl: oxygen. E⦵(Cl₂/Cl⁻) +1.36 V is only a little more positive than E⦵(O₂/H₂O) +1.23 V, so high [Cl⁻] makes Cl⁻ discharge.' },
      { n: 6, f: 'Selective discharge at the cathode in aqueous solution', b: 'The cation with the more positive E⦵ is discharged: metals below hydrogen (e.g. Cu) deposit; for reactive metals (e.g. Na) hydrogen is given off instead.' },
    ]),
    ...sub('a-electrochemistry', 'a-standard-electrode-potentials-cell-potentials-and-the-nernst-equation', '24.2', [
      { n: 1, f: 'Standard electrode potential, E⦵', b: 'The e.m.f. of a half-cell measured against the standard hydrogen electrode (E⦵ = 0.00 V by definition) under standard conditions: 298 K, 1 mol dm⁻³ solutions, 101 kPa for gases.' },
      { n: 2, f: 'What does a more positive or more negative E⦵ tell you?', b: 'More positive: the left-hand species is more readily reduced (stronger oxidising agent).\nMore negative: the right-hand species is more readily oxidised (stronger reducing agent).' },
      { n: 3, f: 'E⦵cell for Zn | Zn²⁺ || Cu²⁺ | Cu (Cu²⁺/Cu +0.34 V, Zn²⁺/Zn −0.76 V)', b: 'E⦵cell = 0.34 − (−0.76) = +1.10 V. Zinc is the negative electrode (oxidised); electrons flow from Zn to Cu in the external circuit.' },
      { n: 4, f: 'Can Fe³⁺ oxidise Cl⁻ to Cl₂? (Fe³⁺/Fe²⁺ +0.77 V, Cl₂/Cl⁻ +1.36 V)', b: 'E⦵cell = E(reduced) − E(oxidised) = 0.77 − 1.36 = −0.59 V. Negative, so not feasible. Cl₂ oxidising Fe²⁺ is the feasible reaction.' },
      { n: 5, f: 'Link between ΔG⦵ and E⦵cell', b: 'ΔG⦵ = −nFE⦵cell, with n = moles of electrons transferred. Positive E⦵cell → negative ΔG⦵ → feasible.' },
      { n: 6, f: 'The Nernst equation, and its qualitative effect', b: 'E = E⦵ + (0.059 ÷ z) log([oxidised species] ÷ [reduced species]).\nRaising [oxidised species] makes E more positive; raising [reduced species] makes it less positive.' },
      { n: 7, f: 'Two limitations of predicting reactions from E⦵ values', b: 'They say nothing about rate (a feasible reaction may be very slow), and they apply only at standard conditions: concentration changes alter E.' },
    ]),

    // 25 Equilibria
    ...sub('a-equilibria', 'a-acids-and-bases', '25.1', [
      { n: 1, f: 'Definitions of pH, Ka, pKa and Kw', b: 'pH = −log₁₀[H⁺]\nKa = [H⁺][A⁻] ÷ [HA] (mol dm⁻³)\npKa = −log₁₀Ka\nKw = [H⁺][OH⁻] = 1.00 × 10⁻¹⁴ mol² dm⁻⁶ at 298 K' },
      { n: 2, f: 'pH of 0.020 mol dm⁻³ NaOH', b: '[OH⁻] = 0.020; [H⁺] = Kw ÷ [OH⁻] = 1.00 × 10⁻¹⁴ ÷ 0.020 = 5.0 × 10⁻¹³ mol dm⁻³; pH = 12.30.' },
      { n: 3, f: 'pH of a weak acid, and the two assumptions', b: '[H⁺] = √(Ka × [HA]). Assume [H⁺] = [A⁻] (ignore water) and [HA] at equilibrium ≈ starting concentration.\ne.g. 0.10 mol dm⁻³, Ka 1.7 × 10⁻⁵: [H⁺] = 1.30 × 10⁻³, pH = 2.88.' },
      { n: 4, f: 'Buffer solution', b: 'A solution that resists changes in pH when small amounts of acid or alkali are added. Made from a weak acid and its conjugate base (e.g. ethanoic acid + sodium ethanoate) or a weak base and its conjugate acid.' },
      { n: 5, f: 'How does an ethanoic acid / ethanoate buffer work?', b: 'Large reservoirs of CH₃COOH and CH₃COO⁻. Added H⁺: CH₃COO⁻ + H⁺ → CH₃COOH. Added OH⁻: CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O. The ratio hardly changes, so the pH hardly changes.' },
      { n: 6, f: 'pH of a buffer', b: '[H⁺] = Ka × [HA] ÷ [A⁻], or pH = pKa + log([A⁻] ÷ [HA]). When [HA] = [A⁻], pH = pKa.' },
      { n: 7, f: 'How is the pH of blood controlled?', b: 'Carbonic acid / hydrogencarbonate buffer, near pH 7.4: H₂CO₃ ⇌ H⁺ + HCO₃⁻. HCO₃⁻ removes added H⁺; H₂CO₃ removes added OH⁻.' },
      { n: 8, f: 'Solubility product, Ksp', b: 'The equilibrium constant for a sparingly soluble ionic compound in a saturated solution: the product of its ion concentrations, each raised to its coefficient (solid not included). e.g. Ksp(CaF₂) = [Ca²⁺][F⁻]², mol³ dm⁻⁹.' },
      { n: 9, f: 'Ksp of CaF₂ is 3.2 × 10⁻¹¹ mol³ dm⁻⁹ (illustrative). Calculate its solubility.', b: 'Ksp = s × (2s)² = 4s³ = 3.2 × 10⁻¹¹, so s³ = 8.0 × 10⁻¹² and s = 2.0 × 10⁻⁴ mol dm⁻³.' },
      { n: 10, f: 'The common ion effect', b: 'A sparingly soluble salt is less soluble in a solution already containing one of its ions: the equilibrium shifts to the left. Ksp itself is unchanged.' },
    ]),
    ...sub('a-equilibria', 'a-partition-coefficients', '25.2', [
      { n: 1, f: 'Partition coefficient, Kpc', b: 'The ratio of the concentrations of a solute in two immiscible solvents at equilibrium, at a stated temperature, with the solute in the same physical state in both. No units; state which solvent is on top.' },
      { n: 2, f: 'Effect of polarity on Kpc(organic/water)', b: 'A non-polar solute (e.g. I₂) dissolves better in the non-polar solvent: large Kpc. A polar or hydrogen-bonding solute (e.g. NH₃) dissolves better in water: small Kpc.' },
      { n: 3, f: '1.00 g X in 100 cm³ water is shaken with 50 cm³ organic solvent; Kpc(organic/water) = 4.0. Mass extracted?', b: '(x ÷ 50) ÷ ((1.00 − x) ÷ 100) = 4.0 → 2x ÷ (1.00 − x) = 4.0 → 6x = 4.00 → x = 0.67 g.' },
      { n: 4, f: 'Is one large extraction or several smaller ones more effective?', b: 'Several smaller ones. In the example above, two 25 cm³ portions extract 0.50 g + 0.25 g = 0.75 g, compared with 0.67 g from one 50 cm³ portion.' },
    ]),

    // 26 Reaction kinetics
    ...sub('a-reaction-kinetics', 'a-simple-rate-equations-orders-of-reaction-and-rate-constants', '26.1', [
      { n: 1, f: 'Rate equation', b: 'rate = k[A]ᵐ[B]ⁿ: links the rate to the concentrations of reactants. The orders are found by experiment, never from the balanced equation.', src: AKIN },
      { n: 2, f: 'Order of reaction (with respect to a reactant) and overall order', b: 'Order: the power to which that concentration is raised in the rate equation.\nOverall order: the sum of the orders, m + n.' },
      { n: 3, f: 'Units of k for zero, first, second and third overall order', b: '0: mol dm⁻³ s⁻¹\n1: s⁻¹\n2: dm³ mol⁻¹ s⁻¹\n3: dm⁶ mol⁻² s⁻¹' },
      { n: 4, f: 'Concentration–time and rate–concentration graphs for zero, first and second order', b: 'Zero: straight line falling; rate graph horizontal.\nFirst: curve with constant half-life; rate graph straight line through the origin.\nSecond: steeper curve, half-life increases; rate graph an upward curve.' },
      { n: 5, f: 'Half-life of a first-order reaction', b: 'Constant, independent of starting concentration. k = 0.693 ÷ t½.\ne.g. t½ = 40 s: k = 0.693 ÷ 40 = 1.7 × 10⁻² s⁻¹.' },
      { n: 6, f: 'Rate-determining step', b: 'The slowest step in a multi-step mechanism. The rate equation contains the species in this step (and steps before it); species reacting only afterwards are zero order.', src: AKIN },
      { n: 7, f: 'Intermediate vs catalyst in a mechanism', b: 'Intermediate: formed in one step and used up in a later step.\nCatalyst: used in one step and reformed in a later step; it may appear in the rate equation but not in the overall equation.' },
      { n: 8, f: 'Rate of hydrolysis of 2-bromo-2-methylpropane = k[(CH₃)₃CBr]. What does this show?', b: 'The slow step involves only the halogenoalkane, (CH₃)₃CBr → (CH₃)₃C⁺ + Br⁻ (SN1). OH⁻ reacts in a fast later step, so it is zero order.' },
      { n: 9, f: 'Effect of temperature on the rate constant', b: 'Raising the temperature increases k: a larger proportion of molecules have energy ≥ Eₐ, so there are more successful collisions per unit time. Quote k with its temperature.' },
    ]),
    ...sub('a-reaction-kinetics', 'a-homogeneous-and-heterogeneous-catalysts', '26.2', [
      { n: 1, f: 'Three stages of heterogeneous catalysis', b: '1 Adsorption of reactants onto active sites on the surface.\n2 Bonds in the reactants are weakened (and they are held in a suitable orientation), so they react.\n3 Desorption of the products, freeing the active sites.' },
      { n: 2, f: 'How does iron catalyse the Haber process?', b: 'N₂ and H₂ adsorb on the iron surface, the strong N≡N bond is weakened, they react, and NH₃ desorbs.' },
      { n: 3, f: 'Catalytic converter: catalyst and reactions', b: 'Platinum, palladium and rhodium on a ceramic support (heterogeneous).\n2CO + 2NO → 2CO₂ + N₂\n4CO + 2NO₂ → 4CO₂ + N₂' },
      { n: 4, f: 'How does NO₂ catalyse the oxidation of atmospheric SO₂?', b: 'SO₂ + NO₂ → SO₃ + NO\nNO + ½O₂ → NO₂\nNO₂ is reformed (homogeneous catalyst); NO is an intermediate.' },
      { n: 5, f: 'How do iron ions catalyse the reaction of S₂O₈²⁻ with I⁻?', b: 'S₂O₈²⁻ + 2Fe²⁺ → 2SO₄²⁻ + 2Fe³⁺\n2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂\nEach step is between oppositely charged ions, unlike the slow direct reaction between two negative ions.' },
      { n: 6, f: 'Homogeneous catalyst: mode of action', b: 'In the same phase as the reactants; used in one step and reformed in a later step, giving a route of lower activation energy.', src: AKIN },
    ]),
    // 27 Group 2
    ...sub('a-group-2', 'a-similarities-and-trends-in-the-properties-of-the-group-2-metals-and-their-compounds', '27.1', [
      { n: 1, f: 'Why does the thermal stability of Group 2 carbonates and nitrates increase down the group?', b: 'The cation gets larger with the same 2+ charge, so its charge density falls. It polarises (distorts) the large anion less, weakening the C–O or N–O bonds less, so a higher temperature is needed to decompose it.' },
      { n: 2, f: 'Thermal decomposition equations for Mg(NO₃)₂ and MgCO₃, with observations', b: '2Mg(NO₃)₂ → 2MgO + 4NO₂ + O₂: brown gas; oxygen relights a glowing splint.\nMgCO₃ → MgO + CO₂: CO₂ turns limewater milky.' },
      { n: 3, f: 'Energy cycle used to explain the solubility trends of Group 2 hydroxides and sulfates', b: 'ΔHsol = −ΔHlatt + ΔHhyd(M²⁺) + ΔHhyd(anions). Down the group both ΔHlatt and ΔHhyd(M²⁺) become less exothermic; the trend depends on which changes more.' },
      { n: 4, f: 'Why does the solubility of Group 2 hydroxides increase down the group?', b: 'OH⁻ is small, so a larger cation increases the inter-ionic distance by a large fraction: lattice energy falls faster than the cation hydration enthalpy. ΔHsol becomes more exothermic, so solubility increases.' },
      { n: 5, f: 'Why does the solubility of Group 2 sulfates decrease down the group?', b: 'SO₄²⁻ is large, so the inter-ionic distance changes by only a small fraction and the lattice energy changes little, while the cation hydration enthalpy still falls significantly. ΔHsol becomes less exothermic, so solubility decreases.' },
    ]),

    // 28 Chemistry of transition elements
    ...sub('a-chemistry-of-transition-elements', 'a-general-physical-and-chemical-properties-of-the-first-row-of-transition-elements-titanium-to-copper', '28.1', [
      { n: 1, f: 'Transition element', b: 'A d-block element that forms one or more stable ions with a partially filled d subshell.' },
      { n: 2, f: 'Why are scandium and zinc not transition elements?', b: 'Scandium forms only Sc³⁺, which is d⁰. Zinc forms only Zn²⁺, which is d¹⁰ (full). Neither has a stable ion with a partially filled d subshell.', src: TRANS },
      { n: 3, f: 'Electron configurations of Cr, Cu and Fe²⁺', b: 'Cr: [Ar] 3d⁵4s¹\nCu: [Ar] 3d¹⁰4s¹\nFe²⁺: [Ar] 3d⁶ (4s electrons are lost first)' },
      { n: 4, f: 'Why do transition elements have variable oxidation states?', b: 'The 4s and 3d sub-shells are very close in energy, so different numbers of electrons can be lost (or used in bonding).', src: TRANS },
      { n: 5, f: 'Why are transition elements and their compounds good catalysts?', b: 'Variable oxidation states let them form intermediates, and d orbitals allow reactants to be adsorbed onto their surface.', src: TRANS },
      { n: 6, f: 'Four characteristic properties of transition elements', b: 'Variable oxidation states; coloured compounds; catalytic activity; formation of complex ions.' },
    ]),
    ...sub('a-chemistry-of-transition-elements', 'a-general-characteristic-chemical-properties-of-the-first-set-of-transition-elements-titanium-to-copper', '28.2', [
      { n: 1, f: 'Ligand and complex ion', b: 'Ligand: a species with a lone pair that forms a dative covalent bond to a central metal ion.\nComplex: a central metal ion surrounded by ligands bonded by dative bonds.' },
      { n: 2, f: 'Monodentate, bidentate and multidentate ligands (examples)', b: 'Monodentate: H₂O, NH₃, Cl⁻, CN⁻, OH⁻.\nBidentate: ethanedioate (C₂O₄²⁻), 1,2-diaminoethane (en).\nMultidentate: EDTA⁴⁻ (hexadentate).' },
      { n: 3, f: 'Shapes of complexes by coordination number', b: '6: octahedral.\n4: tetrahedral (e.g. [CuCl₄]²⁻) or square planar (e.g. [Pt(NH₃)₂Cl₂]).\n2: linear.' },
      { n: 4, f: '[Cu(H₂O)₆]²⁺ with NaOH(aq), and with a little then excess NH₃(aq)', b: 'NaOH: pale blue precipitate [Cu(OH)₂(H₂O)₄], insoluble in excess.\nNH₃: the same pale blue precipitate, which dissolves in excess to give deep blue [Cu(NH₃)₄(H₂O)₂]²⁺.' },
      { n: 5, f: '[Cu(H₂O)₆]²⁺ with excess concentrated HCl', b: '[Cu(H₂O)₆]²⁺ + 4Cl⁻ ⇌ [CuCl₄]²⁻ + 6H₂O: yellow-green, tetrahedral. Coordination number falls from 6 to 4 because Cl⁻ is larger than H₂O; adding water reverses it.' },
      { n: 6, f: 'Colours of MnO₄⁻, Cr₂O₇²⁻, [Fe(H₂O)₆]²⁺ and [Fe(H₂O)₆]³⁺', b: 'MnO₄⁻: purple. Cr₂O₇²⁻: orange.\n[Fe(H₂O)₆]²⁺: pale green. [Fe(H₂O)₆]³⁺: yellow-brown.' },
      { n: 7, f: '25.0 cm³ Fe²⁺(aq) reacts with 23.50 cm³ of 0.0200 mol dm⁻³ KMnO₄. Find [Fe²⁺].', b: 'n(MnO₄⁻) = 0.02350 × 0.0200 = 4.70 × 10⁻⁴ mol; n(Fe²⁺) = 5 × 4.70 × 10⁻⁴ = 2.35 × 10⁻³ mol; [Fe²⁺] = 2.35 × 10⁻³ ÷ 0.0250 = 0.0940 mol dm⁻³.' },
      { n: 8, f: 'Reaction of Cu²⁺ with I⁻, and how it is used', b: '2Cu²⁺ + 4I⁻ → 2CuI(s) + I₂. White CuI precipitates; the I₂ released is titrated with thiosulfate to find the amount of Cu²⁺.' },
    ]),
    ...sub('a-chemistry-of-transition-elements', 'a-colour-of-complexes', '28.3', [
      { n: 1, f: 'Degenerate and non-degenerate d orbitals', b: 'Degenerate: the same energy (all five 3d orbitals in an isolated ion).\nNon-degenerate: different energies; ligands split the d orbitals into two sets separated by ΔE.' },
      { n: 2, f: 'How do the d orbitals split in octahedral and tetrahedral complexes?', b: 'Octahedral: two higher, three lower.\nTetrahedral: three higher, two lower, with a smaller ΔE for comparable ligands.' },
      { n: 3, f: 'Why are transition metal complexes coloured?', b: 'Ligands split the d orbitals. An electron absorbs visible light of frequency given by ΔE = hf and is promoted to the higher set. The colour seen is the complementary colour of the light absorbed.' },
      { n: 4, f: 'Why are Sc³⁺ and Zn²⁺ compounds colourless?', b: 'Sc³⁺ is d⁰ (no electron to promote) and Zn²⁺ is d¹⁰ (no vacancy in the higher set), so no d–d transition is possible.' },
      { n: 5, f: 'Why does ligand exchange change the colour of a complex?', b: 'Different ligands split the d orbitals by different amounts, so ΔE changes, a different frequency is absorbed and a different complementary colour is seen.' },
      { n: 6, f: 'Cobalt(II): aqua ion, with excess NH₃(aq), and with concentrated HCl', b: '[Co(H₂O)₆]²⁺: pink.\nExcess NH₃: [Co(NH₃)₆]²⁺, pale yellow-brown (straw), darkens in air.\nConc. HCl: [CoCl₄]²⁻, blue, tetrahedral.' },
    ]),
    ...sub('a-chemistry-of-transition-elements', 'a-stereoisomerism-in-transition-element-complexes', '28.4', [
      { n: 1, f: 'Cis and trans isomers of [Pt(NH₃)₂Cl₂]', b: 'Square planar. Cis: the two Cl⁻ at 90° (cisplatin, an anti-cancer drug). Trans: the two Cl⁻ at 180°.' },
      { n: 2, f: 'Which octahedral complexes in 9701 show cis–trans isomerism?', b: '[Co(NH₃)₄(H₂O)₂]²⁺ and [Ni(en)₂(H₂O)₂]²⁺: two H₂O at 90° (cis) or 180° (trans).' },
      { n: 3, f: 'Why does [Ni(en)₃]²⁺ show optical isomerism?', b: 'The three bidentate en ligands wrap round Ni²⁺ like a propeller, so the complex and its mirror image are non-superimposable.' },
      { n: 4, f: 'How many stereoisomers does [Ni(en)₂(H₂O)₂]²⁺ have?', b: 'Three: the trans isomer (has a plane of symmetry, not optically active) and the two optical isomers of the cis form.' },
      { n: 5, f: 'Are cis and trans complexes polar?', b: 'Trans: the bond dipoles are opposite and cancel, so non-polar. Cis: the dipoles do not cancel, so polar.' },
    ]),
    ...sub('a-chemistry-of-transition-elements', 'a-stability-constants-kstab', '28.5', [
      { n: 1, f: 'Stability constant, Kstab', b: 'The equilibrium constant for the formation of a complex ion in a solvent from its constituent ions or molecules.' },
      { n: 2, f: 'Write Kstab for [Cu(H₂O)₆]²⁺ + 4NH₃ ⇌ [Cu(NH₃)₄(H₂O)₂]²⁺ + 4H₂O', b: 'Kstab = [Cu(NH₃)₄(H₂O)₂²⁺] ÷ ([Cu(H₂O)₆²⁺][NH₃]⁴), units mol⁻⁴ dm¹². [H₂O] is left out.' },
      { n: 3, f: 'What does the size of Kstab tell you about ligand exchange?', b: 'A large Kstab means a stable complex. When ligands compete, exchange favours the complex with the larger Kstab, though a large excess of a ligand can still shift the equilibrium.' },
      { n: 4, f: 'Kstab = 1.0 × 10¹³ mol⁻⁴ dm¹² (illustrative) and [NH₃] = 0.20 mol dm⁻³. Ratio of ammine to aqua complex?', b: 'Ratio = Kstab × [NH₃]⁴ = 1.0 × 10¹³ × 1.6 × 10⁻³ = 1.6 × 10¹⁰, so almost all the copper is in the ammine complex.' },
    ]),
    // 29 An introduction to A Level organic chemistry
    ...sub('a-an-introduction-to-a-level-organic-chemistry', 'a-formulas-functional-groups-and-the-naming-of-organic-compounds', '29.1', [
      { n: 1, f: 'Functional groups new at A Level (with an example of each)', b: 'Arene (benzene), halogenoarene (chlorobenzene), phenol, acyl chloride (propanoyl chloride, CH₃CH₂COCl), amide (propanamide, CH₃CH₂CONH₂), amino acid (2-aminoethanoic acid), secondary and tertiary amines (e.g. dimethylamine).' },
      { n: 2, f: 'How are substituents on a benzene ring named?', b: 'Number round the ring to locate them, e.g. 3-nitrobenzoic acid (nitro group at position 3) or 2,4,6-tribromophenol (Br at 2, 4 and 6).' },
      { n: 3, f: 'Draw/describe the functional groups of an acyl chloride and an amide', b: 'Acyl chloride: –COCl (C=O with Cl on the same carbon).\nAmide: –CONH₂ (or –CONHR for an N-substituted amide).' },
      { n: 4, f: 'Secondary and tertiary amines', b: 'Secondary: two alkyl or aryl groups on the nitrogen (R₂NH, e.g. (CH₃)₂NH).\nTertiary: three (R₃N). 9701 asks you to recognise and draw them, not name them systematically.' },
    ]),
    ...sub('a-an-introduction-to-a-level-organic-chemistry', 'a-characteristic-organic-reactions', '29.2', [
      { n: 1, f: 'Electrophilic substitution (arenes)', b: 'The reaction of arenes: an electrophile replaces an H atom on the ring, and the delocalised ring is restored.', src: AORG },
      { n: 2, f: 'Addition–elimination', b: 'A nucleophile adds to a carbonyl carbon, forming a tetrahedral intermediate, which then eliminates a leaving group (e.g. Cl⁻) to restore C=O. Overall it looks like substitution. Typical of acyl chlorides.' },
      { n: 3, f: 'Why do alkenes undergo addition but arenes undergo substitution?', b: "An alkene's localised π bond is used up in addition, gaining two σ bonds. Benzene's delocalised ring is especially stable; addition would destroy it, while substitution keeps it." },
      { n: 4, f: 'Three stages common to electrophilic substitution of benzene', b: 'Generate the electrophile; the delocalised ring attacks it, forming an unstable positive intermediate; the intermediate loses H⁺ to restore the delocalised ring.' },
    ]),
    ...sub('a-an-introduction-to-a-level-organic-chemistry', 'a-shapes-of-aromatic-organic-molecules', '29.3', [
      { n: 1, f: 'Shape and bonding in benzene', b: 'Planar regular hexagon, bond angles 120°. Each carbon is sp² hybridised with one electron in a p orbital; the p orbitals overlap sideways to form a delocalised π system above and below the ring.' },
      { n: 2, f: 'C–C bond length in benzene compared with single and double bonds', b: 'All six are 139 pm, between C–C (154 pm) and C=C (134 pm).' },
      { n: 3, f: 'Three pieces of evidence for delocalisation in benzene', b: '1 All C–C bond lengths are equal.\n2 Its enthalpy of hydrogenation is about 152 kJ mol⁻¹ less exothermic than 3 × cyclohexene predicts.\n3 It resists addition and does not decolourise bromine water.' },
      { n: 4, f: 'σ and π bonding in benzene', b: 'Each carbon forms three σ bonds (two C–C, one C–H) in the plane; the six p electrons form one delocalised π system rather than three separate π bonds.' },
    ]),
    ...sub('a-an-introduction-to-a-level-organic-chemistry', 'a-isomerism', '29.4', [
      { n: 1, f: 'Which of butan-2-ol, propan-2-ol, lactic acid and glycine have a chiral centre?', b: 'Butan-2-ol: yes (C2: H, OH, CH₃, C₂H₅).\nPropan-2-ol: no (two CH₃).\nLactic acid, CH₃CH(OH)COOH: yes.\nGlycine: no (two H on the CH₂).' },
      { n: 2, f: 'How do two enantiomers differ in properties?', b: 'Identical physical and chemical properties except: they rotate plane-polarised light in opposite directions by the same angle, and they may have different biological activity.' },
      { n: 3, f: 'Why can enantiomers have different biological activity?', b: 'Receptor sites and enzymes are themselves chiral, so only one enantiomer may have the right 3D shape to fit.' },
      { n: 4, f: 'Optically active, and racemic mixture', b: 'Optically active: rotates the plane of plane-polarised light (a single enantiomer).\nRacemic mixture: an equimolar mixture of two enantiomers; optically inactive because the rotations cancel.' },
      { n: 5, f: 'Why do many drug syntheses give a racemic mixture?', b: 'When a chiral centre is created from non-chiral reactants (e.g. HCN adding to a planar C=O), attack from either side is equally likely, giving equal amounts of both enantiomers.' },
      { n: 6, f: 'Why make a drug as a single enantiomer, and how?', b: 'Smaller dose, fewer side effects from the other enantiomer. Separating a racemate is hard and expensive (identical physical properties, up to half wasted), so chiral catalysts are used to make mainly one isomer.' },
    ]),

    // 30 Hydrocarbons
    ...sub('a-hydrocarbons', 'a-arenes', '30.1', [
      { n: 1, f: 'Nitration of benzene: reagents, conditions, electrophile', b: 'Concentrated HNO₃ and concentrated H₂SO₄, 25–60 °C (above about 60 °C gives dinitration). Electrophile NO₂⁺:\nHNO₃ + 2H₂SO₄ → NO₂⁺ + H₃O⁺ + 2HSO₄⁻' },
      { n: 2, f: 'Halogenation of benzene', b: 'Cl₂ with anhydrous AlCl₃ (or Br₂ with AlBr₃) as halogen carrier, room temperature: C₆H₆ + Cl₂ → C₆H₅Cl + HCl.' },
      { n: 3, f: 'Friedel–Crafts alkylation and acylation', b: 'Alkylation: RCl with AlCl₃ catalyst; electrophile R⁺; gives an alkylbenzene.\nAcylation: RCOCl with AlCl₃, heat; electrophile RCO⁺; gives a phenyl ketone.\nBoth add carbon to the ring.' },
      { n: 4, f: 'Methylbenzene with Cl₂: AlCl₃ catalyst vs UV light', b: 'AlCl₃, no UV: ring substitution, giving 2- and 4-chloromethylbenzene.\nUV light, no catalyst: free-radical substitution in the side chain, giving C₆H₅CH₂Cl.' },
      { n: 5, f: 'Oxidation of the side chain of an alkylbenzene', b: 'Hot alkaline KMnO₄, then dilute acid: the side chain is oxidised to –COOH on the ring whatever its length, e.g. methylbenzene → benzoic acid.' },
      { n: 6, f: 'Hydrogenation of benzene', b: 'H₂ with a Pt or Ni catalyst and heat gives cyclohexane. It needs harsh conditions because the delocalised system is destroyed.' },
      { n: 7, f: 'Directing effects of –OH/–NH₂/–R and of –NO₂/–COOH/–COR', b: '–OH, –NH₂, alkyl: direct to the 2- and 4- (and 6-) positions and activate the ring.\n–NO₂, –COOH, –COR: direct to the 3- (and 5-) position and deactivate it.' },
    ]),

    // 31 Halogen compounds
    ...sub('a-halogen-compounds', 'a-halogen-compounds', '31.1', [
      { n: 1, f: 'Halogenoarene vs halogenoalkane', b: 'Halogenoarene: halogen bonded directly to a benzene ring carbon (e.g. chlorobenzene).\nHalogenoalkane: halogen bonded to an sp³ (saturated) carbon (e.g. chloroethane).' },
      { n: 2, f: 'Halogen carrier', b: 'The catalyst (AlCl₃ or AlBr₃) that polarises the halogen to make a stronger electrophile.', src: AHAL },
      { n: 3, f: 'How does AlCl₃ generate the electrophile and get regenerated?', b: 'Cl₂ + AlCl₃ → Cl⁺ + AlCl₄⁻\nC₆H₆ + Cl⁺ → C₆H₅Cl + H⁺\nH⁺ + AlCl₄⁻ → HCl + AlCl₃' },
      { n: 4, f: 'Chloroethane and chlorobenzene with NaOH(aq) under reflux', b: 'Chloroethane is hydrolysed to ethanol. Chlorobenzene does not react.' },
      { n: 5, f: 'Why is chlorobenzene so unreactive towards nucleophiles?', b: 'A Cl lone pair overlaps with the ring π system, giving the C–Cl bond partial double-bond character (shorter, stronger). The electron-rich ring also repels nucleophiles, and substitution would disrupt the delocalised ring.' },
      { n: 6, f: 'Relative ease of hydrolysis: acyl chlorides, alkyl chlorides, aryl chlorides', b: 'Acyl chlorides (fast, even with cold water) > alkyl chlorides (need heating with NaOH(aq)) > aryl chlorides (no reaction under these conditions).' },
    ]),

    // 32 Hydroxy compounds
    ...sub('a-hydroxy-compounds', 'a-alcohols', '32.1', [
      { n: 1, f: 'Alcohol + acyl chloride: conditions and products', b: 'Room temperature, no catalyst: ester + HCl.\nCH₃COCl + CH₃CH₂OH → CH₃COOCH₂CH₃ + HCl' },
      { n: 2, f: 'Compare making an ester from an acyl chloride with using a carboxylic acid', b: 'Acyl chloride: room temperature, vigorous, not reversible, high yield, HCl by-product.\nCarboxylic acid: heat with conc. H₂SO₄, slow, reversible, yield limited by equilibrium, H₂O by-product.' },
      { n: 3, f: 'Mechanism type for alcohol + acyl chloride', b: 'Nucleophilic addition–elimination: the O lone pair of the alcohol attacks the δ+ carbonyl carbon, then Cl⁻ is lost (as HCl).' },
    ]),
    ...sub('a-hydroxy-compounds', 'a-phenol', '32.2', [
      { n: 1, f: 'How is phenol made from phenylamine?', b: '1 NaNO₂ + dilute HCl (giving HNO₂), below 10 °C → benzenediazonium chloride.\n2 Warm the solution with water: C₆H₅N₂⁺Cl⁻ + H₂O → C₆H₅OH + N₂ + HCl.' },
      { n: 2, f: 'Phenol with NaOH(aq) and with sodium', b: 'NaOH: C₆H₅OH + NaOH → C₆H₅ONa + H₂O (dissolves).\nNa: 2C₆H₅OH + 2Na → 2C₆H₅ONa + H₂ (effervescence).\nNo CO₂ with carbonates.' },
      { n: 3, f: 'Phenol with bromine water', b: 'Room temperature, no catalyst: orange colour removed, white precipitate of 2,4,6-tribromophenol.\nC₆H₅OH + 3Br₂ → C₆H₂Br₃OH + 3HBr' },
      { n: 4, f: 'Nitration of phenol', b: 'Dilute HNO₃ at room temperature (no H₂SO₄) gives a mixture of 2-nitrophenol and 4-nitrophenol.' },
      { n: 5, f: 'Order of acidity of phenol, water and ethanol, and why', b: 'Phenol > water > ethanol. In phenoxide the negative charge is delocalised into the ring, stabilising it. In ethoxide the electron-donating ethyl group intensifies the charge on O, destabilising it.' },
      { n: 6, f: 'Why does phenol react with electrophiles more readily than benzene?', b: 'An O lone pair is partly delocalised into the ring, increasing its electron density, so it attracts electrophiles more strongly and can polarise Br₂ without a halogen carrier.' },
      { n: 7, f: 'Coupling a diazonium salt with phenol', b: 'Diazonium salt + phenol in NaOH(aq), below 10 °C: substitution at the 4-position gives a yellow/orange azo compound (–N=N– link), used as a dye.' },
      { n: 8, f: 'How many moles of Br₂ react with 4-methylphenol, and why?', b: 'Two: the 4-position is occupied, so only the 2- and 6-positions are brominated, giving 2,6-dibromo-4-methylphenol + 2HBr.' },
    ]),

    // 33 Carboxylic acids and derivatives
    ...sub('a-carboxylic-acids-and-derivatives', 'a-carboxylic-acids', '33.1', [
      { n: 1, f: 'Effect of chlorine substituents on the strength of ethanoic acid', b: 'Electron-withdrawing Cl atoms pull electron density away and stabilise the carboxylate ion, so acid strength increases: CCl₃COOH > CH₂ClCOOH > CH₃COOH.' },
      { n: 2, f: 'How is a carboxylic acid converted into an acyl chloride?', b: 'With SOCl₂ (or PCl₅ or PCl₃). e.g. CH₃COOH + SOCl₂ → CH₃COCl + SO₂ + HCl.' },
      { n: 3, f: 'Why can methanoic acid be oxidised further, unlike most carboxylic acids?', b: "HCOOH still has an H on the carbonyl carbon (aldehyde-like), so it gives positive results with Tollens', Fehling's and acidified KMnO₄ or K₂Cr₂O₇." },
      { n: 4, f: 'Oxidation of ethanedioic acid', b: 'Warm acidified KMnO₄ oxidises it to CO₂:\n2MnO₄⁻ + 16H⁺ + 5C₂O₄²⁻ → 2Mn²⁺ + 10CO₂ + 8H₂O (self-indicating).' },
      { n: 5, f: 'Why are carboxylic acids acidic while alcohols are not?', b: 'In the carboxylate ion the negative charge is delocalised over both oxygen atoms, stabilising it. An alkoxide ion has no such delocalisation.' },
    ]),
    ...sub('a-carboxylic-acids-and-derivatives', 'a-esters', '33.2', [
      { n: 1, f: 'How are esters of phenol made, and why not from the carboxylic acid?', b: 'React phenol with an acyl chloride: C₆H₅COCl + C₆H₅OH → C₆H₅COOC₆H₅ (phenyl benzoate) + HCl. Phenol reacts only slowly and reversibly with carboxylic acids.' },
      { n: 2, f: 'Phenyl benzoate', b: 'The aryl ester C₆H₅COOC₆H₅, made from benzoyl chloride and phenol.' },
      { n: 3, f: 'General reaction: acyl chloride + alcohol or phenol', b: 'Acyl chloride + alcohol → ester + HCl.\nAcyl chloride + phenol → aryl ester + HCl.\nFast and irreversible at room temperature.' },
    ]),
    ...sub('a-carboxylic-acids-and-derivatives', 'a-acyl-chlorides', '33.3', [
      { n: 1, f: 'Acyl chlorides with water, alcohols, ammonia and primary amines', b: 'Water → carboxylic acid.\nAlcohol → ester.\nAmmonia → primary amide.\nPrimary amine → N-substituted amide.\nAll release HCl (steamy fumes).' },
      { n: 2, f: 'Why are acyl chlorides much more reactive than carboxylic acids?', b: 'The carbonyl carbon is bonded to two electronegative atoms (O and Cl) and Cl donates little lone-pair density into C=O, so the carbon is strongly δ+; Cl⁻ is also a good leaving group.' },
      { n: 3, f: 'Outline the addition–elimination mechanism of an acyl chloride with a nucleophile', b: 'Addition: the nucleophile lone pair attacks the δ+ carbonyl carbon; π electrons move to O, giving a tetrahedral intermediate.\nElimination: C=O re-forms, Cl⁻ leaves, and loss of H⁺ gives the product + HCl.' },
      { n: 4, f: 'Ethanoyl chloride with excess ammonia', b: 'CH₃COCl + 2NH₃ → CH₃CONH₂ + NH₄Cl' },
    ]),

    // 34 Nitrogen compounds
    ...sub('a-nitrogen-compounds', 'a-primary-and-secondary-amines', '34.1', [
      { n: 1, f: 'Order of base strength: secondary amine, primary amine, ammonia, phenylamine', b: 'Secondary aliphatic > primary aliphatic > ammonia > phenylamine.' },
      { n: 2, f: 'Why is ethylamine a stronger base than ammonia?', b: 'The electron-donating ethyl group increases electron density on N, making the lone pair more available to accept a proton.' },
      { n: 3, f: 'Ways to make primary and secondary amines', b: 'Halogenoalkane + excess NH₃ in ethanol, heat under pressure → primary amine.\nNitrile + LiAlH₄ (dry ether) or H₂/Ni → primary amine.\nHalogenoalkane + primary amine in ethanol, heat in sealed tube → secondary amine.' },
      { n: 4, f: 'Reduction of an amide', b: 'LiAlH₄ reduces the C=O of an amide to give an amine: CH₃CONH₂ → CH₃CH₂NH₂.' },
      { n: 5, f: 'Amines with acids and with acyl chlorides', b: 'Acid: forms a salt, RNH₂ + HCl → RNH₃⁺Cl⁻.\nAcyl chloride: condensation gives an N-substituted amide + HCl.' },
    ]),
    ...sub('a-nitrogen-compounds', 'a-phenylamine-and-azo-compounds', '34.2', [
      { n: 1, f: 'How is phenylamine made from benzene?', b: '1 Conc. HNO₃ / conc. H₂SO₄, 25–60 °C → nitrobenzene.\n2 Sn and conc. HCl, heat; then NaOH(aq) to liberate the free amine from its salt → phenylamine.' },
      { n: 2, f: 'Why is phenylamine a weaker base than ammonia?', b: 'The nitrogen lone pair is delocalised into the benzene ring, so it is much less available to accept a proton.' },
      { n: 3, f: 'Phenylamine with bromine water', b: 'Room temperature, no catalyst: immediate white precipitate of 2,4,6-tribromophenylamine. The ring is activated by the delocalised N lone pair.' },
      { n: 4, f: 'Diazotisation: reagents and conditions', b: 'Phenylamine + HNO₂ (from NaNO₂ and dilute HCl), below 10 °C → benzenediazonium salt. Above 10 °C the salt decomposes.' },
      { n: 5, f: 'Why are azo compounds coloured, and what are they used for?', b: 'The –N=N– link joins two rings into an extended delocalised system that absorbs visible light. They are used as dyes.' },
    ]),
    ...sub('a-nitrogen-compounds', 'a-amides', '34.3', [
      { n: 1, f: 'How are amides made?', b: 'Acyl chloride + ammonia → primary amide (RCONH₂).\nAcyl chloride + primary amine → N-substituted amide (RCONHR′).' },
      { n: 2, f: 'Why are amides not basic, unlike amines?', b: 'The nitrogen lone pair is delocalised into the adjacent C=O group, so it is not available to accept a proton.' },
      { n: 3, f: 'Hydrolysis of an amide with acid and with alkali', b: 'Acid: carboxylic acid + ammonium salt, e.g. CH₃CONH₂ + H₂O + HCl → CH₃COOH + NH₄Cl.\nAlkali: carboxylate salt + ammonia, e.g. CH₃CONH₂ + NaOH → CH₃COONa + NH₃.' },
      { n: 4, f: 'Product of reducing an amide with LiAlH₄', b: 'An amine: the C=O becomes CH₂, e.g. ethanamide → ethylamine.' },
    ]),
    ...sub('a-nitrogen-compounds', 'a-amino-acids', '34.4', [
      { n: 1, f: 'Zwitterion', b: 'An ion with both a positive and a negative charge but no overall charge: H₃N⁺CHRCOO⁻, formed when the –COOH group donates H⁺ to the –NH₂ group of the same molecule.' },
      { n: 2, f: 'Why do amino acids have high melting points and dissolve in water?', b: 'Strong ionic attractions between zwitterions, much stronger than the intermolecular forces in similar molecules; the charges interact strongly with polar water molecules.', src: AMIDE },
      { n: 3, f: 'Form of an amino acid at low pH, at the isoelectric point and at high pH', b: 'Low pH: H₃N⁺CHRCOOH, a cation (moves to the cathode).\nIsoelectric point: zwitterion, no net charge (does not move).\nHigh pH: H₂NCHRCOO⁻, an anion (moves to the anode).', src: AMIDE },
      { n: 4, f: 'Peptide bond, and how it is broken', b: '–CONH–, formed by condensation between –NH₂ of one amino acid and –COOH of another, releasing water. Heating under reflux with aqueous acid (HCl) hydrolyses it back to the amino acids.' },
      { n: 5, f: 'Electrophoresis: which way does an amino acid move at a pH above its isoelectric point?', b: 'Towards the anode: above its isoelectric point it carries a net negative charge. Below it, it is positive and moves to the cathode.' },
    ]),

    // 35 Polymerisation
    ...sub('a-polymerisation', 'a-condensation-polymerisation', '35.1', [
      { n: 1, f: 'Condensation polymerisation', b: 'Monomers, each with two functional groups, join with the elimination of a small molecule (usually H₂O, or HCl from an acyl chloride) at every linkage.' },
      { n: 2, f: 'Polyester and polyamide: monomers and linkage', b: 'Polyester: diol + dicarboxylic acid (or diacyl chloride); ester link –COO–.\nPolyamide: diamine + dicarboxylic acid (or diacyl chloride); amide link –CONH–.\nOr one monomer with both groups (hydroxy acid, amino acid).' },
      { n: 3, f: 'Repeat unit from ethane-1,2-diol and benzene-1,4-dicarboxylic acid', b: '–OCH₂CH₂OOCC₆H₄CO– (a polyester); one H₂O lost per ester link.' },
      { n: 4, f: 'Why are polyamides generally stronger than polyesters?', b: 'Amide groups form hydrogen bonds between chains; ester groups only give permanent dipole–dipole attractions.' },
      { n: 5, f: 'How do you deduce the monomers from a section of a condensation polymer?', b: 'Find the repeating ester or amide links, break each one and add back H₂O (–OH to the C=O side, –H to the O or N side) to regenerate the diacid and the diol or diamine.' },
    ]),
    ...sub('a-polymerisation', 'a-predicting-the-type-of-polymerisation', '35.2', [
      { n: 1, f: 'Which monomers give addition and which give condensation polymers?', b: 'A C=C double bond: addition, no small molecule lost.\nTwo reactive groups per monomer (–OH, –NH₂ with –COOH or –COCl): condensation, losing H₂O or HCl.' },
      { n: 2, f: 'How can you tell from a polymer section how it was made?', b: 'A continuous saturated carbon backbone: addition polymer. Repeating ester or amide links in the chain: condensation polymer.' },
      { n: 3, f: 'Addition vs condensation polymerisation: by-product and atom economy', b: 'Addition: nothing eliminated, 100% atom economy.\nCondensation: H₂O or HCl eliminated, atom economy below 100%.' },
    ]),
    ...sub('a-polymerisation', 'a-degradable-polymers', '35.3', [
      { n: 1, f: 'Why are poly(alkenes) difficult to biodegrade?', b: 'They are chemically inert: the non-polar C–C backbone has no bonds that water or enzymes can attack.' },
      { n: 2, f: 'Why are polyesters and polyamides biodegradable?', b: 'Their polar ester or amide links can be hydrolysed by acid or alkali (and by enzymes), breaking the chain into monomers.' },
      { n: 3, f: 'Products of acid and alkaline hydrolysis of polyesters and polyamides', b: 'Polyester: acid → carboxylic acid + alcohol; alkali → carboxylate salt + alcohol.\nPolyamide: acid → carboxylic acid + ammonium salt; alkali → carboxylate salt + amine.' },
      { n: 4, f: 'Photodegradable polymer', b: 'A polymer with bonds or additives that absorb UV light and break, fragmenting the material. This is a different process from biodegradation by hydrolysis.' },
    ]),

    // 36 Organic synthesis
    ...sub('a-organic-synthesis', 'a-organic-synthesis', '36.1', [
      { n: 1, f: 'Reactions that add carbon atoms (A Level)', b: 'KCN in ethanol with a halogenoalkane (nitrile); HCN with an aldehyde or ketone (hydroxynitrile); Friedel–Crafts alkylation or acylation of an arene.' },
      { n: 2, f: 'What do NaBH₄, LiAlH₄ and H₂/Ni each reduce?', b: 'NaBH₄: aldehydes and ketones only.\nLiAlH₄: also carboxylic acids, esters, nitriles and amides (not isolated C=C).\nH₂/Ni: alkenes, the benzene ring and nitriles (not acids, esters, amides).' },
      { n: 3, f: 'Route: methylbenzene → benzamide', b: '1 Hot alkaline KMnO₄, then dilute acid → benzoic acid.\n2 SOCl₂ (or PCl₅) → benzoyl chloride.\n3 Excess NH₃, room temperature → benzamide (by-product NH₄Cl).' },
      { n: 4, f: 'Route: benzene → phenol', b: '1 Conc. HNO₃/conc. H₂SO₄ → nitrobenzene.\n2 Sn/conc. HCl, then NaOH → phenylamine.\n3 NaNO₂/dilute HCl below 10 °C → diazonium salt.\n4 Warm with water → phenol.' },
      { n: 5, f: 'Three questions to ask at each step of a synthesis', b: 'Does the carbon skeleton change? What is the oxidation level (distil or reflux)? Are the conditions compatible with groups already present?' },
    ]),

    // 37 Analytical techniques
    ...sub('a-analytical-techniques', 'a-thin-layer-chromatography', '37.1', [
      { n: 1, f: 'Stationary phase and mobile phase', b: 'Stationary phase: does not move.\nMobile phase: carries the sample through. A component with greater affinity for the stationary phase moves more slowly.', src: CHROM },
      { n: 2, f: 'Rf value', b: 'Rf = distance moved by the spot ÷ distance moved by the solvent front. Between 0 and 1; constant for a substance only under identical conditions.' },
      { n: 3, f: 'TLC phases, and which components have low Rf', b: 'Stationary: silica or alumina on a plate (polar). Mobile: a solvent rising by capillary action. More polar components are held more strongly by the polar stationary phase, so have lower Rf.' },
      { n: 4, f: 'Practical points in TLC', b: 'Draw the baseline in pencil (ink would run); keep the spot above the solvent level; locate colourless spots with UV light or a locating agent (e.g. ninhydrin for amino acids); run a known reference alongside.' },
    ]),
    ...sub('a-analytical-techniques', 'a-gas-liquid-chromatography', '37.2', [
      { n: 1, f: 'GLC: stationary and mobile phases', b: 'Stationary: a high-boiling liquid on an inert solid support in a heated column.\nMobile: an inert carrier gas, such as nitrogen or helium.' },
      { n: 2, f: 'Retention time, and what affects it', b: 'The time from injection to detection. Components with lower boiling points and lower solubility in the stationary phase have shorter retention times.' },
      { n: 3, f: 'Peak areas 15.0, 25.0 and 20.0 for A, B and C. Percentage of A?', b: 'Total area = 60.0, so A = (15.0 ÷ 60.0) × 100 = 25.0%. Use peak area, not height.' },
      { n: 4, f: 'Limitations of GLC', b: 'The sample must be volatile and thermally stable; two compounds can share a retention time, so a known reference is needed for identification.' },
    ]),
    ...sub('a-analytical-techniques', 'a-carbon-13-nmr-spectroscopy', '37.3', [
      { n: 1, f: 'What does the number of peaks in a ¹³C NMR spectrum show?', b: 'The number of chemically different carbon environments (allowing for symmetry). There is no splitting in ¹³C NMR at this level.' },
      { n: 2, f: 'Number of ¹³C NMR peaks: propan-1-ol vs propan-2-ol', b: 'Propan-1-ol: 3 (all carbons different).\nPropan-2-ol: 2 (the two CH₃ groups are equivalent).' },
      { n: 3, f: 'Why is TMS used as the reference in NMR?', b: 'It is defined as δ = 0; it is inert, volatile and non-toxic, and gives a single sharp peak (all its H and C environments are equivalent) away from most others.' },
      { n: 4, f: 'Number of ¹³C environments in benzene and in ethanol', b: 'Benzene: 1 (all six carbons equivalent).\nEthanol: 2.' },
    ]),
    ...sub('a-analytical-techniques', 'a-proton-1h-nmr-spectroscopy', '37.4', [
      { n: 1, f: 'Three pieces of information from a ¹H NMR spectrum', b: 'Chemical shift (δ): the type of proton environment.\nRelative peak area (integration): the ratio of H atoms in each environment.\nSplitting: the number of H on adjacent carbons.' },
      { n: 2, f: 'The n + 1 rule', b: 'A peak is split into n + 1 lines, where n is the number of H atoms on adjacent carbons: 0 singlet, 1 doublet, 2 triplet, 3 quartet.' },
      { n: 3, f: 'Predict the ¹H NMR spectrum of ethanol (CH₃CH₂OH)', b: 'CH₃: triplet, 3H.\nCH₂: quartet, 2H.\nOH: singlet, 1H (broad).' },
      { n: 4, f: 'How is an O–H or N–H peak identified?', b: 'Add D₂O and re-run the spectrum: the O–H/N–H hydrogen exchanges for deuterium, so that peak disappears. These protons do not split or get split.' },
      { n: 5, f: 'Why are deuterated solvents such as CDCl₃ used?', b: 'Ordinary solvents contain H atoms, which would give large peaks and obscure the sample spectrum.' },
    ]),
  ],
};
