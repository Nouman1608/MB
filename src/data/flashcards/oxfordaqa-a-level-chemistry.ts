/**
 * D-438 -- flashcards for OxfordAQA International AS and A-level Chemistry 9620
 * (for teaching from September 2019, exams from May/June 2020 onwards).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * (topic 32, Organic synthesis, itemises no subtopics, so its ids are `32-<n>`)
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 * The syllabus is not tiered, so no card is marked upper tier. Sections 3.1.8-3.1.12,
 * 3.2.4-3.2.6 and 3.3.7-3.3.16 are International A2 (A-level only) content.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 9620); origin 'revision-notes'.
 *
 * Written from Marlbridge's own 9620 revision notes and study guides. Plain text
 * only (see types.ts). Unicode for formulae.
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

/** For a topic that itemises no subtopics: ids are `<topic number>-<n>` and `subtopic` is left out. */
const topicOnly = (topic: string, number: number, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, u, src }) => ({
    id: `${number}-${n}`,
    topic,
    front: f,
    back: b,
    ...(u ? { tier: 'upper' as const } : {}),
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const P = 'oxfordaqa-a-level-chemistry-';

const EC = 'oxfordaqa-a-level-chemistry-electrode-potentials-and-electrochemical-cells-revision-notes';
const AB = 'oxfordaqa-a-level-chemistry-acids-and-bases-revision-notes';
const RATE = 'oxfordaqa-a-level-chemistry-rate-equations-revision-notes';
const P3 = 'oxfordaqa-a-level-chemistry-properties-of-period-3-elements-and-their-oxides-revision-notes';
const TM = 'oxfordaqa-a-level-chemistry-transition-metals-revision-notes';
const AQ = 'oxfordaqa-a-level-chemistry-reactions-of-ions-in-aqueous-solution-revision-notes';
const ALC = 'oxfordaqa-a-level-chemistry-alcohols-revision-notes';
const NMR = 'oxfordaqa-a-level-chemistry-nuclear-magnetic-resonance-spectroscopy-revision-notes';

export const DECK_OXFORDAQA_A_LEVEL_CHEMISTRY: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'a-level',
  subjectSlug: 'chemistry',
  syllabusCode: '9620',
  syllabusSeries: 'For teaching from September 2019 (exams from May/June 2020) onwards',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'nouman-ahmed', reviewedOn: '2026-11-05' },
  cards: [
    // 1 Atomic structure (3.1.1)
    ...sub(`${P}atomic-structure`, `${P}3-1-1-1`, '3.1.1.1', [
      { n: 1, f: 'Relative charge and relative mass of a proton, a neutron and an electron', b: 'Proton: charge +1, mass 1.\nNeutron: charge 0, mass 1.\nElectron: charge −1, mass about 1/1840 (very small).' },
      { n: 2, f: 'Where are protons, neutrons and electrons found in an atom?', b: 'Protons and neutrons are in the nucleus. Electrons are in shells around the nucleus.' },
      { n: 3, f: 'What did the gold foil (alpha particle scattering) experiment show?', b: 'Nearly all alpha particles passed straight through, but a few bounced back at large angles. So an atom has a tiny, dense, positive nucleus with mostly empty space around it, replacing the plum pudding model.' },
      { n: 4, f: 'Why do models of atomic structure change over time?', b: 'A model is kept until new evidence appears that it cannot explain; then it is revised (for example, solid spheres → plum pudding → nuclear atom → shells, sub-shells and orbitals).' },
    ]),
    ...sub(`${P}atomic-structure`, `${P}3-1-1-2`, '3.1.1.2', [
      { n: 1, f: 'Mass number (A) and atomic (proton) number (Z)', b: 'A: the number of protons + neutrons.\nZ: the number of protons.' },
      { n: 2, f: 'How do you find the numbers of protons, neutrons and electrons in an ion?', b: 'Protons = Z. Neutrons = A − Z. Electrons = Z − charge (a 3+ ion has lost three electrons; a 2− ion has gained two).' },
      { n: 3, f: 'Protons, neutrons and electrons in ⁵⁶Fe³⁺ (Z = 26)', b: '26 protons, 30 neutrons, 23 electrons.' },
      { n: 4, f: 'Isotopes', b: 'Atoms of the same element with the same number of protons but different numbers of neutrons (so different mass numbers). Same electron arrangement, so the same chemical properties; mass-dependent properties such as density differ slightly.' },
      { n: 5, f: 'The four stages of a time of flight (TOF) mass spectrometer', b: 'Ionisation (sample vaporised, positive ions formed), acceleration (an electric field gives all ions the same kinetic energy), ion drift (lighter ions move faster and arrive sooner), detection (ions gain electrons, making a current).' },
      { n: 6, f: 'Why is a TOF mass spectrometer kept under a vacuum?', b: 'So that the ions do not collide with air particles.' },
      { n: 7, f: 'Formula for relative atomic mass from a mass spectrum', b: 'Ar = Σ(isotopic mass × abundance) ÷ Σ(abundance)\nExample: (35 × 3 + 37 × 1) ÷ 4 = 35.5' },
      { n: 8, f: 'In the mass spectrum of a compound, what does the peak at the highest m/z show?', b: 'The molecular ion. Its m/z gives the relative molecular mass.' },
    ]),
    ...sub(`${P}atomic-structure`, `${P}3-1-1-3`, '3.1.1.3', [
      { n: 1, f: 'Number of orbitals and maximum electrons in s, p and d sub-shells', b: 's: 1 orbital, 2 electrons.\np: 3 orbitals, 6 electrons.\nd: 5 orbitals, 10 electrons.\nEach orbital holds at most two electrons.' },
      { n: 2, f: 'Electron configurations of Cr (Z = 24) and Cu (Z = 29)', b: 'Cr: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹\nCu: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹\nThe two exceptions up to Z = 36.' },
      { n: 3, f: 'Which electrons are lost first when a d-block atom forms a positive ion? Give Fe³⁺.', b: 'The 4s electrons are lost first (before 3d).\nFe³⁺: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵' },
      { n: 4, f: 'First ionisation energy', b: 'The energy change when one mole of gaseous atoms each lose one electron to form one mole of gaseous 1+ ions.\nFor example: Ba(g) → Ba⁺(g) + e⁻' },
      { n: 5, f: 'Why does first ionisation energy decrease down Group 2?', b: 'The outer electron is in a shell further from the nucleus and more shielded by inner electrons. This outweighs the greater nuclear charge.' },
      { n: 6, f: 'Explain the dips in first ionisation energy from Mg to Al and from P to S', b: 'Mg → Al: Al’s outer electron is in 3p, slightly higher in energy and further out than 3s (evidence for sub-shells).\nP → S: in S one 3p orbital holds a pair of electrons that repel, so one is removed more easily.' },
      { n: 7, f: 'How do successive ionisation energies show an element’s group?', b: 'Find the largest jump between consecutive values. The number of electrons removed before the jump is the number of outer-shell electrons, which gives the group.' },
    ]),

    // 2 Amount of substance (3.1.2)
    ...sub(`${P}amount-of-substance`, `${P}3-1-2-1`, '3.1.2.1', [
      { n: 1, f: 'Relative atomic mass, Ar', b: 'The weighted mean mass of an atom of an element (allowing for its isotopes) divided by one twelfth of the mass of an atom of carbon-12.' },
      { n: 2, f: 'Relative molecular mass, Mr', b: 'The mean mass of a molecule divided by one twelfth of the mass of an atom of carbon-12.' },
      { n: 3, f: 'Why is “relative formula mass” used for ionic compounds?', b: 'Ionic compounds exist as lattices, not as separate molecules.' },
      { n: 4, f: 'Why do Ar and Mr have no units?', b: 'Each is a ratio of masses (compared with one twelfth of the mass of a carbon-12 atom).' },
    ]),
    ...sub(`${P}amount-of-substance`, `${P}3-1-2-2`, '3.1.2.2', [
      { n: 1, f: 'The Avogadro constant, L', b: 'The number of entities (atoms, molecules, ions, electrons…) in one mole of a substance: 6.02 × 10²³ mol⁻¹.' },
      { n: 2, f: 'Equations linking amount (n) with mass, number of particles and concentration', b: 'n = m ÷ Mr\nN = n × L\nc = n ÷ V (c in mol dm⁻³, V in dm³)' },
      { n: 3, f: '0.0500 mol of Na₂CO₃ is dissolved to make 250 cm³ of solution. Concentration?', b: 'c = 0.0500 ÷ 0.250 = 0.200 mol dm⁻³' },
      { n: 4, f: 'How many moles of ions are in 0.0200 mol of Al₂(SO₄)₃?', b: '0.0400 mol Al³⁺ + 0.0600 mol SO₄²⁻ = 0.100 mol of ions.' },
    ]),
    ...sub(`${P}amount-of-substance`, `${P}3-1-2-3`, '3.1.2.3', [
      { n: 1, f: 'The ideal gas equation, with SI units', b: 'pV = nRT\np in Pa, V in m³, n in mol, R = 8.31 J K⁻¹ mol⁻¹, T in K.' },
      { n: 2, f: 'Unit conversions for pV = nRT', b: 'kPa × 1000 = Pa\ncm³ × 10⁻⁶ = m³\ndm³ × 10⁻³ = m³\nK = °C + 273' },
      { n: 3, f: 'Find p for 0.0500 mol of gas at 400 K in a 2.00 dm³ vessel (R = 8.31 J K⁻¹ mol⁻¹)', b: 'p = nRT ÷ V = (0.0500 × 8.31 × 400) ÷ (2.00 × 10⁻³) = 83 100 Pa = 83.1 kPa' },
      { n: 4, f: 'How do you find Mr of a gas from pV = nRT?', b: 'Find n = pV ÷ RT (all in SI units), then Mr = mass ÷ n.' },
    ]),
    ...sub(`${P}amount-of-substance`, `${P}3-1-2-4`, '3.1.2.4', [
      { n: 1, f: 'Empirical formula and molecular formula', b: 'Empirical: the smallest whole-number ratio of atoms of each element in a compound.\nMolecular: the actual number of atoms of each element in one molecule (a whole-number multiple of the empirical formula).' },
      { n: 2, f: 'Method for an empirical formula from masses or percentages', b: 'Divide each mass (or % as grams in 100 g) by Ar to get moles, divide all by the smallest, then multiply to whole numbers if needed (×2 for .5, ×3 for .33 or .67).' },
      { n: 3, f: 'An oxide is 69.9% Fe and 30.1% O. Empirical formula?', b: 'Fe: 69.9 ÷ 55.8 = 1.25; O: 30.1 ÷ 16.0 = 1.88. Ratio 1 : 1.50, multiply by 2 → Fe₂O₃. Do not round 1.50 down.' },
      { n: 4, f: 'Empirical formula CH₂O, Mr = 60.0. Molecular formula?', b: 'CH₂O has mass 30.0. 60.0 ÷ 30.0 = 2, so C₂H₄O₂.' },
    ]),
    ...sub(`${P}amount-of-substance`, `${P}3-1-2-5`, '3.1.2.5', [
      { n: 1, f: 'Percentage yield', b: '(actual mass of product ÷ theoretical mass) × 100' },
      { n: 2, f: 'Percentage atom economy', b: '(molecular mass of desired product ÷ sum of molecular masses of all reactants) × 100' },
      { n: 3, f: 'Yield vs atom economy', b: 'Percentage yield depends on what happened in one experiment. Atom economy is fixed by the balanced equation.' },
      { n: 4, f: 'Advantages of a high atom economy', b: 'Economic: less raw material ends up as unwanted product, and waste disposal and separation costs are lower.\nEnvironmental/ethical: fewer natural resources used and less waste produced.' },
      { n: 5, f: 'Ionic equation and spectator ions', b: 'An ionic equation shows only the species that change, for example Pb²⁺(aq) + 2I⁻(aq) → PbI₂(s). Spectator ions are present unchanged on both sides and are left out.' },
      { n: 6, f: 'Required practical 1: making up a volumetric (standard) solution', b: 'Weigh the solid by difference, dissolve in a beaker, transfer with rinsings to a volumetric flask, make up to the graduation line, then invert to mix.' },
    ]),

    // 3 Bonding (3.1.3)
    ...sub(`${P}bonding`, `${P}3-1-3-1`, '3.1.3.1', [
      { n: 1, f: 'Ionic bonding', b: 'The electrostatic attraction between oppositely charged ions in a lattice. It acts in all directions.' },
      { n: 2, f: 'Formulae and charges of the five compound ions to learn', b: 'Sulfate SO₄²⁻, carbonate CO₃²⁻, nitrate NO₃⁻, hydroxide OH⁻, ammonium NH₄⁺.' },
      { n: 3, f: 'Charges on simple ions of Groups 1, 2, 3, 5, 6 and 7', b: 'Group 1: 1+. Group 2: 2+. Group 3: 3+.\nGroup 5: 3−. Group 6: 2−. Group 7: 1−.' },
      { n: 4, f: 'Formulae of aluminium sulfate and magnesium nitride', b: 'Al₂(SO₄)₃ and Mg₃N₂.' },
    ]),
    ...sub(`${P}bonding`, `${P}3-1-3-2`, '3.1.3.2', [
      { n: 1, f: 'Single covalent bond', b: 'One shared pair of electrons. A double bond has two shared pairs; a triple bond has three.' },
      { n: 2, f: 'Co-ordinate (dative covalent) bond', b: 'A shared pair of electrons where both electrons come from one atom. Drawn as an arrow from the donor atom to the acceptor.' },
      { n: 3, f: 'What does an atom need to donate, and to accept, a co-ordinate bond?', b: 'Donor: a lone pair of electrons.\nAcceptor: an empty orbital (a gap in its outer shell).' },
      { n: 4, f: 'Name the donor and acceptor in NH₄⁺ and in H₃N→BF₃', b: 'NH₄⁺: N of NH₃ donates to H⁺.\nH₃N→BF₃: N of NH₃ donates to B of BF₃.' },
    ]),
    ...sub(`${P}bonding`, `${P}3-1-3-3`, '3.1.3.3', [
      { n: 1, f: 'Metallic bonding', b: 'The attraction between a lattice of positive ions and delocalised electrons.' },
      { n: 2, f: 'What makes metallic bonding stronger?', b: 'A larger charge on the ions, more delocalised electrons per atom and smaller ions.' },
      { n: 3, f: 'Why does magnesium have a higher melting point than sodium?', b: 'Mg forms 2+ ions and releases two delocalised electrons per atom (Na: 1+, one electron), so the attraction between ions and delocalised electrons is stronger.' },
    ]),
    ...sub(`${P}bonding`, `${P}3-1-3-4`, '3.1.3.4', [
      { n: 1, f: 'The four types of crystal structure, with the six named examples', b: 'Ionic: sodium chloride.\nMetallic: magnesium.\nMacromolecular (giant covalent): diamond, graphite.\nMolecular: iodine, ice.' },
      { n: 2, f: 'Electrical conductivity of sodium chloride', b: 'Does not conduct as a solid (ions fixed in the lattice). Conducts when molten or dissolved, because the ions are free to move.' },
      { n: 3, f: 'Diamond vs graphite: bonding and conductivity', b: 'Diamond: each C bonded to 4 others in a 3-D network; no free charge carriers, so does not conduct.\nGraphite: each C bonded to 3 others in layers; one delocalised electron per atom, so conducts along the layers.' },
      { n: 4, f: 'What is overcome when a molecular solid such as iodine melts or sublimes?', b: 'Only the weak intermolecular forces between molecules. The covalent bonds inside each molecule stay intact.' },
      { n: 5, f: 'Why do melting and boiling need energy?', b: 'They are endothermic: particles are pulled apart against the forces of attraction between them (ionic bonds, metallic bonding, covalent bonds or intermolecular forces, depending on the structure).' },
    ]),
    ...sub(`${P}bonding`, `${P}3-1-3-5`, '3.1.3.5', [
      { n: 1, f: 'Order of strength of repulsion between electron pairs', b: 'Lone pair–lone pair > lone pair–bond pair > bond pair–bond pair. So each lone pair reduces the bond angles.' },
      { n: 2, f: 'Method to find the number of electron pairs round a central atom', b: 'Central atom’s outer electrons + one per bonded monovalent atom − the charge (add for a negative ion). Divide by two for total pairs; subtract bonding pairs to get lone pairs.' },
      { n: 3, f: 'Shapes and bond angles of NH₃ and H₂O', b: 'NH₃: pyramidal, 3 bonding + 1 lone pair, about 107°.\nH₂O: bent, 2 bonding + 2 lone pairs, about 104.5°.' },
      { n: 4, f: 'Shapes and angles: BF₃, CH₄ (or NH₄⁺), PCl₅, SF₆', b: 'BF₃: trigonal planar, 120°.\nNH₄⁺: tetrahedral, 109.5°.\nPCl₅: trigonal bipyramidal, 90° and 120°.\nSF₆: octahedral, 90°.' },
      { n: 5, f: 'Shape of ICl₄⁻', b: '7 + 4 + 1 = 12 electrons, so 6 pairs: 4 bonding and 2 lone. Square planar, 90°.' },
      { n: 6, f: 'Shapes of SF₄ and ClF₃', b: 'SF₄: see-saw (4 bonding, 1 lone pair).\nClF₃: T-shaped (3 bonding, 2 lone pairs).\nIn a trigonal bipyramid the lone pairs take equatorial positions.' },
    ]),
    ...sub(`${P}bonding`, `${P}3-1-3-6`, '3.1.3.6', [
      { n: 1, f: 'Electronegativity', b: 'The power of an atom to attract the pair of electrons in a covalent bond towards itself.' },
      { n: 2, f: 'When is a covalent bond polar?', b: 'When the two atoms have different electronegativities, so the electron density is unsymmetrical. The more electronegative atom is δ−.' },
      { n: 3, f: 'Why does CCl₄ have no permanent dipole although its bonds are polar?', b: 'Four identical polar bonds are arranged symmetrically (tetrahedral), so the bond dipoles cancel.' },
      { n: 4, f: 'Which of SO₃, SF₆, PCl₃ and CH₂Cl₂ have a permanent dipole?', b: 'PCl₃ (pyramidal) and CH₂Cl₂ (unlike atoms round C). In SO₃ and SF₆ the dipoles cancel.' },
    ]),
    ...sub(`${P}bonding`, `${P}3-1-3-7`, '3.1.3.7', [
      { n: 1, f: 'Induced dipole–dipole forces (van der Waals, London, dispersion)', b: 'Act between all molecules. Electron movement creates a temporary dipole that induces a dipole in a neighbouring molecule. Stronger with more electrons and a larger surface area of contact.' },
      { n: 2, f: 'Permanent dipole–dipole forces', b: 'Attraction between the δ+ end of one polar molecule and the δ− end of another.' },
      { n: 3, f: 'Conditions for hydrogen bonding', b: 'A hydrogen atom bonded to N, O or F, attracted to a lone pair on an N, O or F atom of another molecule.' },
      { n: 4, f: 'Why does pentane boil higher than 2,2-dimethylpropane?', b: 'The straight chain has a larger surface area of contact with neighbouring molecules, so the induced dipole–dipole forces are stronger.' },
      { n: 5, f: 'Why is ice less dense than liquid water?', b: 'In ice each molecule is held by four hydrogen bonds in an open lattice, so the molecules are further apart than in the liquid.' },
      { n: 6, f: 'Why do H₂O, NH₃ and HF have anomalously high boiling points?', b: 'Hydrogen bonding between their molecules is stronger than the intermolecular forces in the hydrides of their group neighbours, so more energy is needed to separate them.' },
    ]),

    // 4 Energetics (3.1.4)
    ...sub(`${P}energetics`, `${P}3-1-4-1`, '3.1.4.1', [
      { n: 1, f: 'Enthalpy change, ΔH', b: 'The heat energy change of a reaction measured at constant pressure. Negative for exothermic (surroundings get hotter), positive for endothermic.' },
      { n: 2, f: 'Standard enthalpy of combustion, ΔcH°', b: 'The enthalpy change when one mole of a substance is completely burned in oxygen under standard conditions, with all reactants and products in their standard states.' },
      { n: 3, f: 'Standard enthalpy of formation, ΔfH°', b: 'The enthalpy change when one mole of a compound is formed from its elements, all in their standard states, under standard conditions.' },
      { n: 4, f: 'Standard conditions', b: '100 kPa and a stated temperature (usually 298 K), with each substance in its standard state.' },
      { n: 5, f: 'Equation for the standard enthalpy of formation of ethanol', b: '2C(s) + 3H₂(g) + ½O₂(g) → C₂H₅OH(l)' },
      { n: 6, f: 'ΔfH° of an element in its standard state', b: 'Zero: forming it from itself involves no change.' },
    ]),
    ...sub(`${P}energetics`, `${P}3-1-4-2`, '3.1.4.2', [
      { n: 1, f: 'q = mcΔT: meaning and units', b: 'q: heat change (J). m: mass of the substance whose temperature changes, usually water or solution (g). c: specific heat capacity (J g⁻¹ K⁻¹). ΔT: temperature change (K).' },
      { n: 2, f: 'Method to find a molar enthalpy change from calorimetry', b: 'q = mcΔT in J, convert to kJ, divide by moles of the limiting reagent or fuel burned. Add the sign last: temperature rise → ΔH negative.' },
      { n: 3, f: '0.92 g ethanol (Mr 46.0) heats 150 g water by 22.0 K (c = 4.18 J g⁻¹ K⁻¹). ΔcH?', b: 'q = 150 × 4.18 × 22.0 = 13 794 J = 13.8 kJ. n = 0.0200 mol. ΔcH = −13.8 ÷ 0.0200 = −690 kJ mol⁻¹.' },
      { n: 4, f: 'Why is an experimental enthalpy of combustion less exothermic than the data-book value?', b: 'Heat lost to the surroundings and apparatus, incomplete combustion, fuel evaporating from the burner, and non-standard conditions.' },
      { n: 5, f: 'Required practical 2: why extrapolate a temperature–time graph?', b: 'Extrapolating the cooling line back to the time of mixing gives ΔT allowing for heat lost while the reaction was happening.' },
    ]),
    ...sub(`${P}energetics`, `${P}3-1-4-3`, '3.1.4.3', [
      { n: 1, f: 'Hess’s law', b: 'The enthalpy change for a reaction is independent of the route taken, provided the starting and finishing conditions are the same.' },
      { n: 2, f: 'ΔH from enthalpies of formation', b: 'ΔH = ΣΔfH°(products) − ΣΔfH°(reactants)' },
      { n: 3, f: 'ΔH from enthalpies of combustion', b: 'ΔH = ΣΔcH°(reactants) − ΣΔcH°(products)' },
      { n: 4, f: 'Find ΔH for PbO(s) + CO(g) → Pb(s) + CO₂(g). ΔfH°: PbO −217, CO −111, CO₂ −394 kJ mol⁻¹', b: 'ΔH = −394 − (−217 + −111) = −394 + 328 = −66 kJ mol⁻¹ (Pb is an element: zero).' },
      { n: 5, f: 'Rules for following a Hess cycle', b: 'Going with an arrow, add its ΔH. Going against an arrow, reverse its sign. Multiply each value by the number of moles in the equation.' },
    ]),
    ...sub(`${P}energetics`, `${P}3-1-4-4`, '3.1.4.4', [
      { n: 1, f: 'Mean bond enthalpy', b: 'The enthalpy change for breaking one mole of a given type of bond in the gaseous state, averaged over many different molecules containing it.' },
      { n: 2, f: 'ΔH from bond enthalpies', b: 'ΔH = Σ(bonds broken) − Σ(bonds formed). Breaking bonds is endothermic; making bonds is exothermic.' },
      { n: 3, f: 'ΔH for N₂ + 3H₂ → 2NH₃ given N≡N 945, H–H 436, N–H 391 kJ mol⁻¹', b: 'Broken: 945 + 3 × 436 = 2253. Formed: 6 × 391 = 2346.\nΔH = 2253 − 2346 = −93 kJ mol⁻¹' },
      { n: 4, f: 'Why does a ΔH from mean bond enthalpies differ from a Hess’s law value?', b: 'Mean bond enthalpies are averages over many molecules, not the actual values in these compounds. The method also assumes all species are gases.' },
    ]),

    // 5 Oxidation, reduction and redox equations (3.1.5)
    ...sub(`${P}oxidation-reduction-and-redox-equations`, `${P}3-1-5-1`, '3.1.5.1', [
      { n: 1, f: 'Oxidation and reduction (in terms of electrons)', b: 'Oxidation is the process of electron loss.\nReduction is the process of electron gain.' },
      { n: 2, f: 'Oxidising agent and reducing agent', b: 'Oxidising agent: an electron acceptor (it is reduced).\nReducing agent: an electron donor (it is oxidised).' },
      { n: 3, f: 'Oxidation state rules for F, H and O in compounds', b: 'F: always −1.\nH: +1, but −1 in metal hydrides (such as LiH).\nO: −2, but −1 in peroxides and positive when bonded to F.' },
      { n: 4, f: 'Oxidation state of P in P₄O₁₀ and of S in Na₂S₂O₅', b: 'P: 4x + 10(−2) = 0, so +5.\nS: 2(+1) + 2x + 5(−2) = 0, so +4.' },
      { n: 5, f: 'Steps to balance a half-equation in acidic solution', b: 'Balance the element that changes, then O with H₂O, then H with H⁺, then charge with e⁻.\nExample: IO₄⁻ + 2H⁺ + 2e⁻ → IO₃⁻ + H₂O' },
      { n: 6, f: 'How do you combine two half-equations into a redox equation?', b: 'Scale them so electrons lost = electrons gained, add them, then cancel the electrons and any H⁺ or H₂O that appear on both sides. Check atoms and total charge.' },
      { n: 7, f: 'Is SO₃ + H₂O → H₂SO₄ a redox reaction?', b: 'No. S is +6 on both sides, H stays +1 and O stays −2. No oxidation state changes.' },
      { n: 8, f: 'Oxidation state +2 vs ionic charge 2+', b: 'An oxidation state is written sign first (+2); the charge on an ion is written number first (2+).' },
    ]),

    // 6 Kinetics (3.1.6)
    ...sub(`${P}kinetics`, `${P}3-1-6-1`, '3.1.6.1', [
      { n: 1, f: 'Activation energy, Ea', b: 'The minimum energy that particles must have when they collide for a reaction to occur.' },
      { n: 2, f: 'Why do most collisions not lead to a reaction?', b: 'Most particles have less energy than the activation energy, so the collision cannot break the necessary bonds and the particles rebound unchanged.' },
      { n: 3, f: 'The three links to use in any rate-of-reaction explanation', b: 'Do particles collide more or less often? Does a bigger or smaller fraction of collisions have energy ≥ Ea? So what happens to the number of successful collisions per second, and the rate?' },
    ]),
    ...sub(`${P}kinetics`, `${P}3-1-6-2`, '3.1.6.2', [
      { n: 1, f: 'Maxwell–Boltzmann distribution: drawing rules', b: 'Starts at the origin, one peak (most probable energy), lopsided with a long tail that approaches but never touches the energy axis. Area under the curve = total number of molecules.' },
      { n: 2, f: 'What does the area under a Maxwell–Boltzmann curve beyond Ea represent?', b: 'The molecules that have enough energy to react if they collide.' },
      { n: 3, f: 'Why is the mean energy greater than the most probable energy?', b: 'The curve is not symmetrical: the long high-energy tail pulls the mean to the right of the peak.' },
      { n: 4, f: 'Maxwell–Boltzmann: how does a higher-temperature curve differ from a lower one?', b: 'Lower and broader, with the peak at higher energy. Same area under the curve. The two curves cross once; beyond the crossing the hotter curve is higher.' },
    ]),
    ...sub(`${P}kinetics`, `${P}3-1-6-3`, '3.1.6.3', [
      { n: 1, f: 'Rate of reaction', b: 'The change in concentration (or amount) of a reactant or product per unit time. Unit for concentration: mol dm⁻³ s⁻¹.' },
      { n: 2, f: 'Why does a small temperature rise greatly increase the rate?', b: 'Ea lies in the thin tail of the distribution, so a small shift of the curve to higher energy multiplies the fraction of molecules with energy ≥ Ea. Collision frequency rises only slightly.' },
      { n: 3, f: 'A product concentration rises from 0 to 0.036 mol dm⁻³ in 120 s. Mean rate?', b: '0.036 ÷ 120 = 3.0 × 10⁻⁴ mol dm⁻³ s⁻¹' },
      { n: 4, f: 'When temperature rises, which effect contributes most to the higher rate?', b: 'The larger proportion of molecules with energy at or above Ea, not the slight increase in collision frequency.' },
    ]),
    ...sub(`${P}kinetics`, `${P}3-1-6-4`, '3.1.6.4', [
      { n: 1, f: 'Why does increasing concentration increase the rate?', b: 'There are more reactant particles per unit volume, so they collide more often, giving more successful collisions per second.' },
      { n: 2, f: 'Why does increasing the pressure of a gas increase the rate?', b: 'The same molecules are packed into a smaller volume, so they collide more often.' },
      { n: 3, f: 'Does increasing concentration or pressure change the Maxwell–Boltzmann curve?', b: 'No. The proportion of collisions with energy ≥ Ea is unchanged; only the collision frequency increases.' },
    ]),
    ...sub(`${P}kinetics`, `${P}3-1-6-5`, '3.1.6.5', [
      { n: 1, f: 'Catalyst', b: 'A substance that increases the rate of a chemical reaction without being changed in chemical composition or amount.' },
      { n: 2, f: 'How does a catalyst work?', b: 'It provides an alternative reaction route (pathway) with a lower activation energy.' },
      { n: 3, f: 'Showing a catalyst on a Maxwell–Boltzmann distribution', b: 'Same single curve (temperature unchanged). Mark Ea(cat) at a lower energy than Ea: a larger area lies beyond it, so a larger fraction of molecules can react.' },
      { n: 4, f: 'Effect of a catalyst on ΔH and on the enthalpy profile', b: 'The hump (activation energy) is lower. Reactant and product levels, and so ΔH, are unchanged.' },
    ]),

    // 7 Chemical equilibria, Le Chatelier's principle and Kc (3.1.7)
    ...sub(`${P}chemical-equilibria-le-chateliers-principle-and-kc`, `${P}3-1-7-1`, '3.1.7.1', [
      { n: 1, f: 'Conditions for dynamic equilibrium', b: 'In a closed system, the rates of the forward and reverse reactions are equal and the concentrations of all species remain constant.' },
      { n: 2, f: 'At equilibrium, are the concentrations of reactants and products equal?', b: 'Not usually. They are constant, not equal. The reactions have not stopped; they continue at equal rates.' },
      { n: 3, f: 'Le Chatelier’s principle', b: 'When a change is applied to a system at equilibrium, the position of equilibrium shifts to oppose the change.' },
      { n: 4, f: 'Effect on equilibrium position of increasing pressure, and of increasing temperature', b: 'Pressure: shifts to the side with fewer moles of gas (no effect if equal).\nTemperature: shifts in the endothermic direction.' },
      { n: 5, f: 'Effect of a catalyst on an equilibrium', b: 'No shift in position. It increases the rates of the forward and reverse reactions equally, so equilibrium is reached sooner.' },
      { n: 6, f: 'Haber process conditions, and why the temperature is a compromise', b: 'N₂ + 3H₂ ⇌ 2NH₃: about 450 °C, 200 atm, iron catalyst. A lower temperature would give a higher yield (exothermic) but an uneconomically slow rate.' },
    ]),
    ...sub(`${P}chemical-equilibria-le-chateliers-principle-and-kc`, `${P}3-1-7-2`, '3.1.7.2', [
      { n: 1, f: 'Kc expression for aA + bB ⇌ cC + dD', b: 'Kc = [C]ᶜ[D]ᵈ ÷ ([A]ᵃ[B]ᵇ), using equilibrium concentrations in mol dm⁻³.' },
      { n: 2, f: 'Which change alters the value of Kc?', b: 'Only temperature. Changes in concentration, pressure or adding a catalyst move the position (or speed) but not Kc.' },
      { n: 3, f: 'For an exothermic forward reaction, what happens to Kc when the temperature rises?', b: 'Kc decreases, because the endothermic (reverse) direction is favoured.' },
      { n: 4, f: 'Common error when calculating Kc from equilibrium amounts', b: 'Using moles directly. Divide each amount by the volume to get concentrations before substituting.' },
      { n: 5, f: 'When does Kc have no units?', b: 'When the powers in the expression cancel, for example when the total moles on each side of the equation are equal. Otherwise work the units out each time.' },
    ]),

    // 8 Thermodynamics (3.1.8)
    ...sub(`${P}thermodynamics`, `${P}3-1-8-1`, '3.1.8.1', [
      { n: 1, f: 'Enthalpy of atomisation', b: 'The enthalpy change when one mole of gaseous atoms is formed from the element in its standard state. For example: ½Br₂(l) → Br(g). Always positive.' },
      { n: 2, f: 'First electron affinity', b: 'The enthalpy change when each atom in one mole of gaseous atoms gains one electron to form one mole of gaseous 1− ions. For example: Br(g) + e⁻ → Br⁻(g). Exothermic.' },
      { n: 3, f: 'Lattice enthalpy of dissociation vs lattice enthalpy of formation', b: 'Dissociation: one mole of ionic solid → its gaseous ions (positive), e.g. SrBr₂(s) → Sr²⁺(g) + 2Br⁻(g).\nFormation: the reverse (negative). Same size, opposite sign: always say which you mean.' },
      { n: 4, f: 'Enthalpy of hydration', b: 'The enthalpy change when one mole of gaseous ions becomes one mole of aqueous ions. For example: Sr²⁺(g) → Sr²⁺(aq). Exothermic.' },
      { n: 5, f: 'Is the second electron affinity of oxygen exothermic or endothermic?', b: 'Endothermic: an electron is being added to a negative ion (O⁻), which repels it. The first electron affinity is exothermic.' },
      { n: 6, f: 'Enthalpy of solution from lattice and hydration enthalpies', b: 'ΔsolH = lattice enthalpy of dissociation + Σ hydration enthalpies of all the ions (multiply by the number of each ion).' },
      { n: 7, f: 'Born–Haber lattice enthalpy more exothermic than the perfect ionic model value. What does it show?', b: 'The compound has some covalent character: the cation polarises the anion, distorting its electron cloud. Most polarisation with a small, highly charged cation and a large anion.' },
      { n: 8, f: 'ΔatH of hydrogen if the H–H bond enthalpy is +436 kJ mol⁻¹', b: '+218 kJ mol⁻¹: atomisation is per mole of atoms formed, so it is half the bond enthalpy.' },
    ]),
    ...sub(`${P}thermodynamics`, `${P}3-1-8-2`, '3.1.8.2', [
      { n: 1, f: 'Gibbs free-energy change equation', b: 'ΔG = ΔH − TΔS\nT in K. Divide ΔS (J K⁻¹ mol⁻¹) by 1000 to match ΔH in kJ mol⁻¹.' },
      { n: 2, f: 'Condition for a reaction to be feasible', b: 'ΔG ≤ 0 (zero or negative).' },
      { n: 3, f: 'Temperature at which a reaction becomes feasible', b: 'Set ΔG = 0: T = ΔH ÷ ΔS. Then use the signs to say whether it is feasible above or below that temperature.' },
      { n: 4, f: 'When is ΔS positive?', b: 'When disorder increases: solid → liquid → gas, an increase in the number of moles of gas, or a solid or liquid forming a gas.' },
      { n: 5, f: 'ΔH positive and ΔS positive: when is the reaction feasible?', b: 'Only above T = ΔH ÷ ΔS, because −TΔS becomes more negative as T rises.' },
      { n: 6, f: 'Why does a negative ΔG not mean a reaction will be observed?', b: 'ΔG shows it is thermodynamically feasible, but says nothing about rate. A high activation energy can make it too slow to observe.' },
    ]),

    // 9 Electrode potentials and electrochemical cells (3.1.9)
    ...sub(`${P}electrode-potentials-and-electrochemical-cells`, `${P}3-1-9-1`, '3.1.9.1', [
      { n: 1, f: 'Standard electrode potential, E⦵', b: 'The EMF of a half-cell measured against the SHE at 298 K, 100 kPa and 1.00 mol dm⁻³ solutions of ions.', src: EC },
      { n: 2, f: 'Standard hydrogen electrode (SHE)', b: 'The reference half-cell, defined as 0.00 V.', src: EC },
      { n: 3, f: 'Salt bridge', b: 'Filter paper soaked in an unreactive salt solution (such as KNO₃). Ions move through it; electrons do not.', src: EC },
      { n: 4, f: 'Make-up of the standard hydrogen electrode', b: 'Platinum electrode, H₂ gas at 100 kPa, solution with [H⁺] = 1.00 mol dm⁻³, 298 K.\n2H⁺(aq) + 2e⁻ ⇌ H₂(g)' },
      { n: 5, f: 'Cell EMF from electrode potentials', b: 'EMF = E⦵(right) − E⦵(left) = E⦵(positive electrode) − E⦵(negative electrode). The left-hand (negative) electrode is where oxidation happens.' },
      { n: 6, f: 'Conventional representation of a Cd–Au cell, and its EMF (Cd²⁺/Cd −0.40 V, Au³⁺/Au +1.52 V)', b: 'Cd(s) | Cd²⁺(aq) || Au³⁺(aq) | Au(s)\nEMF = 1.52 − (−0.40) = +1.92 V' },
      { n: 7, f: 'When scaling a half-equation to combine it, what happens to its E⦵?', b: 'Nothing. Scale the half-equation, never the E⦵ value.' },
      { n: 8, f: 'What can E⦵ values not tell you about a reaction?', b: 'Its rate (the activation energy may be too high), or the outcome far from standard conditions.' },
    ]),
    ...sub(`${P}electrode-potentials-and-electrochemical-cells`, `${P}3-1-9-2`, '3.1.9.2', [
      { n: 1, f: 'Non-rechargeable cell, rechargeable cell and fuel cell', b: 'Non-rechargeable: reactions cannot be reversed in practice.\nRechargeable: an external supply reverses the electrode reactions.\nFuel cell: reactants supplied continuously; not recharged electrically.' },
      { n: 2, f: 'Electrode reactions in the alkaline hydrogen–oxygen fuel cell', b: 'Negative: H₂ + 2OH⁻ → 2H₂O + 2e⁻\nPositive: O₂ + 2H₂O + 4e⁻ → 4OH⁻\nOverall: 2H₂ + O₂ → 2H₂O' },
      { n: 3, f: 'Electrode reactions in the lithium cell during discharge', b: 'Positive: Li⁺ + CoO₂ + e⁻ → Li⁺[CoO₂]⁻ (cobalt reduced, +4 → +3).\nNegative: Li → Li⁺ + e⁻.\nCharging reverses both reactions.' },
      { n: 4, f: 'Benefits and risks of hydrogen fuel cells', b: 'Benefit: water is the only product where they run; no CO₂ there.\nRisks: making hydrogen uses energy, possibly from fossil fuels; hydrogen–air mixtures are explosive; hydrogen is bulky to store.' },
      { n: 5, f: 'EMF', b: 'The potential difference of a cell when no current flows.', src: EC },
    ]),

    // 10 Acids and bases (3.1.10)
    ...sub(`${P}acids-and-bases`, `${P}3-1-10-1`, '3.1.10.1', [
      { n: 1, f: 'Brønsted–Lowry acid and base', b: 'Acid: proton donor.\nBase: proton acceptor.', src: AB },
      { n: 2, f: 'Acid–base equilibrium', b: 'One in which protons (H⁺) are transferred. Check both directions: the species that loses H⁺ in the reverse reaction is also an acid.', src: AB },
      { n: 3, f: 'In HCO₃⁻ + OH⁻ → CO₃²⁻ + H₂O, which species is the Brønsted–Lowry acid?', b: 'HCO₃⁻: it donates a proton to OH⁻.' },
      { n: 4, f: 'Strong vs concentrated (acid)', b: '“Strong” describes the extent of dissociation (complete); “concentrated” describes how many moles are in each dm³.', src: AB },
    ]),
    ...sub(`${P}acids-and-bases`, `${P}3-1-10-2`, '3.1.10.2', [
      { n: 1, f: 'Definition of pH', b: 'pH = −log₁₀[H⁺], so [H⁺] = 10^(−pH).' },
      { n: 2, f: 'pH of a strong monoprotic acid', b: '[H⁺] = concentration of the acid; pH = −log₁₀[H⁺].\nExample: 0.0072 mol dm⁻³ HI has pH = −log₁₀(0.0072) = 2.14.' },
      { n: 3, f: 'Calculate [H⁺] in a solution of pH 10.46', b: '[H⁺] = 10^(−10.46) = 3.47 × 10⁻¹¹ mol dm⁻³' },
      { n: 4, f: 'Method: pH after mixing a strong acid with a strong base', b: 'Find n(H⁺) and n(OH⁻), subtract the smaller from the larger, divide the excess by the combined volume. Excess H⁺ gives pH directly; excess OH⁻ needs Kw.' },
    ]),
    ...sub(`${P}acids-and-bases`, `${P}3-1-10-3`, '3.1.10.3', [
      { n: 1, f: 'Ionic product of water, Kw', b: 'Kw = [H⁺][OH⁻] = 1.00 × 10⁻¹⁴ mol² dm⁻⁶ at 25 °C. It comes from Kc for H₂O ⇌ H⁺ + OH⁻, with [H₂O] effectively constant.' },
      { n: 2, f: 'pH of a strong base', b: '[OH⁻] = concentration × OH⁻ per formula unit; [H⁺] = Kw ÷ [OH⁻]; pH = −log₁₀[H⁺].\nExample: 0.0028 mol dm⁻³ NaOH → [H⁺] = 3.57 × 10⁻¹² → pH 11.45.' },
      { n: 3, f: 'Neutral solution', b: '[H⁺] = [OH⁻]. This is pH 7 only at 25 °C.', src: AB },
      { n: 4, f: 'What happens to Kw and the pH of pure water as temperature rises?', b: 'Water’s dissociation is endothermic, so Kw increases and the pH falls below 7. The water is still neutral because [H⁺] = [OH⁻].' },
    ]),
    ...sub(`${P}acids-and-bases`, `${P}3-1-10-4`, '3.1.10.4', [
      { n: 1, f: 'Weak acid or base', b: 'Dissociates only slightly in water.', src: AB },
      { n: 2, f: 'Ka expression and pKa', b: 'Ka = [H⁺][A⁻] ÷ [HA] (mol dm⁻³).\npKa = −log₁₀ Ka. Larger Ka = stronger acid; larger pKa = weaker acid.' },
      { n: 3, f: 'pH of a weak acid from Ka', b: 'Assume [H⁺] = [A⁻] and [HA] ≈ starting concentration, so [H⁺] = √(Ka × [HA]).\nExample: Ka = 2.0 × 10⁻⁶, [HA] = 0.500 → [H⁺] = 1.0 × 10⁻³, pH 3.00.' },
      { n: 4, f: 'Ka from the pH of a weak acid solution', b: '[H⁺] = 10^(−pH), then Ka = [H⁺]² ÷ [HA].' },
    ]),
    ...sub(`${P}acids-and-bases`, `${P}3-1-10-5`, '3.1.10.5', [
      { n: 1, f: 'Indicator colour-change ranges: methyl orange and phenolphthalein', b: 'Methyl orange: 3.1–4.4 (red to yellow).\nPhenolphthalein: 8.3–10.0 (colourless to pink).' },
      { n: 2, f: 'When is an indicator suitable for a titration?', b: 'When its entire colour-change range lies within the vertical (steep) section of the pH curve.' },
      { n: 3, f: 'Indicator for weak acid–strong base and for strong acid–weak base titrations', b: 'Weak acid–strong base (vertical about 7–11): phenolphthalein.\nStrong acid–weak base (vertical about 3–7): methyl orange.\nWeak–weak: no sharp change; use a pH meter.' },
      { n: 4, f: 'How can you find pKa from a weak acid–strong base pH curve?', b: 'Read the pH at half the equivalence volume. There [HA] = [A⁻], so pH = pKa.' },
      { n: 5, f: 'End point vs equivalence point', b: 'The end point is where the indicator changes; the equivalence point is where reacting amounts match.', src: AB },
      { n: 6, f: 'Required practical 7: key steps for a pH curve', b: 'Calibrate the pH meter with buffers. Add base from a burette to the acid, stir, record pH and total volume, using smaller additions near the end point. Plot pH against volume.' },
    ]),
    ...sub(`${P}acids-and-bases`, `${P}3-1-10-6`, '3.1.10.6', [
      { n: 1, f: 'Buffer', b: 'A solution whose pH stays nearly constant when it is diluted or when a small amount of acid or base is added.' },
      { n: 2, f: 'What does an acidic buffer contain? A basic buffer?', b: 'Acidic: a weak acid and its salt (or a weak acid partly neutralised by NaOH).\nBasic: a weak base and its salt, e.g. methylamine with methylammonium chloride.' },
      { n: 3, f: 'How does an acidic buffer resist added acid and added base?', b: 'Added H⁺ reacts with A⁻ to form HA (HA ⇌ H⁺ + A⁻ shifts left). Added OH⁻ removes H⁺, and HA dissociates to replace it (shifts right). Large amounts of HA and A⁻ keep [HA]/[A⁻] almost constant.' },
      { n: 4, f: '[H⁺] in an acidic buffer', b: '[H⁺] = Ka × [HA] ÷ [A⁻] (or the ratio of moles). Do not use √(Ka[HA]) for a buffer.' },
      { n: 5, f: 'Buffer: 0.024 mol HA and 0.016 mol A⁻, Ka = 3.0 × 10⁻⁵ mol dm⁻³. pH?', b: '[H⁺] = 3.0 × 10⁻⁵ × 0.024 ÷ 0.016 = 4.5 × 10⁻⁵ mol dm⁻³, so pH = 4.35.' },
      { n: 6, f: 'Applications of buffers', b: 'Calibrating pH meters, controlling the pH of blood, controlling acidity in foods and drinks, and any process (such as with enzymes) that needs a steady pH.' },
    ]),

    // 11 Rate equations (3.1.11)
    ...sub(`${P}rate-equations`, `${P}3-1-11-1`, '3.1.11.1', [
      { n: 1, f: 'Rate equation', b: 'Rate = k[A]^m [B]^n. It is found by experiment.', src: RATE },
      { n: 2, f: 'Order with respect to a reactant', b: 'The power of that reactant’s concentration in the rate equation.', src: RATE },
      { n: 3, f: 'Overall order', b: 'The sum of all the individual orders.', src: RATE },
      { n: 4, f: 'Units of k for overall orders 0, 1, 2 and 3', b: '0: mol dm⁻³ s⁻¹\n1: s⁻¹\n2: mol⁻¹ dm³ s⁻¹\n3: mol⁻² dm⁶ s⁻¹' },
      { n: 5, f: 'The Arrhenius equation and its straight-line form', b: 'k = Ae^(−Ea/RT)\nln k = −Ea/RT + ln A: plot ln k against 1/T; gradient = −Ea/R, intercept = ln A. Ea in J mol⁻¹, T in K.' },
      { n: 6, f: 'Effect of temperature and of concentration on k', b: 'Higher temperature → larger k. Changing a concentration changes the rate, not k.' },
      { n: 7, f: 'Rate = k[V]²[L]. [V] is halved and [L] tripled. Factor change in rate?', b: '0.5² × 3 = 0.75' },
    ]),
    ...sub(`${P}rate-equations`, `${P}3-1-11-2`, '3.1.11.2', [
      { n: 1, f: 'Rate-determining (rate-limiting) step', b: 'The slowest step of a mechanism.', src: RATE },
      { n: 2, f: 'Rate–concentration graph shapes for orders 0, 1 and 2', b: 'Order 0: flat horizontal line.\nOrder 1: straight line through the origin.\nOrder 2: curve through the origin, getting steeper.' },
      { n: 3, f: 'Finding an order from initial-rate data', b: 'Compare two runs where only one concentration changes. Rate unchanged → order 0; same factor → order 1; factor squared → order 2.' },
      { n: 4, f: 'What does a zero order with respect to a reactant tell you about the mechanism?', b: 'That reactant is not in the rate equation: it takes part after the rate-determining step. It is still consumed.' },
      { n: 5, f: 'Initial rate from a concentration–time graph', b: 'Draw a tangent to the curve at t = 0 and take its gradient (ignoring the minus sign).' },
      { n: 6, f: 'Required practical 8: in a clock reaction, how is rate related to time?', b: 'Rate ∝ 1/t, where t is the time taken for a fixed small amount of reaction (the sudden colour change).' },
    ]),

    // 12 Equilibrium constant Kp for homogeneous systems (3.1.12)
    ...sub(`${P}equilibrium-constant-kp-for-homogeneous-systems`, `${P}3-1-12-1`, '3.1.12.1', [
      { n: 1, f: 'Mole fraction and partial pressure', b: 'Mole fraction of A = n(A) ÷ total moles of gas (no units).\nPartial pressure of A = mole fraction of A × total pressure.' },
      { n: 2, f: 'Kp expression for 2NO₂(g) ⇌ 2NO(g) + O₂(g)', b: 'Kp = p(NO)² × p(O₂) ÷ p(NO₂)². With pressures in kPa, units are kPa (Δn = +1).' },
      { n: 3, f: 'How do you work out the units of Kp?', b: '(pressure unit)^Δn, where Δn = moles of gaseous products − moles of gaseous reactants. No units if Δn = 0.' },
      { n: 4, f: 'Effect of raising total pressure on Kp and on the equilibrium position', b: 'Kp is unchanged. The position shifts towards the side with fewer moles of gas.' },
      { n: 5, f: 'Kp increases when the temperature rises. Is the forward reaction exothermic or endothermic?', b: 'Endothermic: the rise in temperature moved the equilibrium right, in the endothermic direction.' },
      { n: 6, f: 'A gas mixture has 0.270 mol of one gas in 0.900 mol total at 250 kPa. Partial pressure of that gas?', b: 'Mole fraction = 0.270 ÷ 0.900 = 0.300; partial pressure = 0.300 × 250 = 75.0 kPa.' },
    ]),

    // 13 Periodicity (3.2.1)
    ...sub(`${P}periodicity`, `${P}3-2-1-1`, '3.2.1.1', [
      { n: 1, f: 'How is an element classified into the s, p, d or f block?', b: 'By the sub-shell that holds its highest-energy electron (the last electron added in the filling order).' },
      { n: 2, f: 'Which blocks do the Period 3 elements belong to?', b: 's block: Na, Mg.\np block: Al, Si, P, S, Cl, Ar.' },
      { n: 3, f: 'Which block is copper (Z = 29, [Ar] 3d¹⁰ 4s¹) in? Which block is helium in?', b: 'Copper: d block (the 4s¹ ending does not change that).\nHelium: s block, although it sits in Group 0.' },
      { n: 4, f: 'Block vs group', b: 'Block is a sub-shell type (s, p, d, f); a group is a column. For the s and p blocks the group gives the number of outer electrons.' },
    ]),
    ...sub(`${P}periodicity`, `${P}3-2-1-2`, '3.2.1.2', [
      { n: 1, f: 'Why does atomic radius decrease from Na to Cl?', b: 'Nuclear charge increases across the period, while the outer electrons stay in the third shell with similar shielding, so they are pulled closer to the nucleus.' },
      { n: 2, f: 'Trend in first ionisation energy across Period 3, and the two exceptions', b: 'General increase (Na lowest, Ar highest). Drops at Mg → Al (3p electron removed, higher in energy than 3s) and P → S (paired 3p electrons repel).' },
      { n: 3, f: 'Order of melting points across Period 3 (highest to lowest)', b: 'Si > Al > Mg > S > Na > P > Cl > Ar' },
      { n: 4, f: 'Why does silicon have the highest melting point in Period 3?', b: 'It is macromolecular (giant covalent): melting breaks many strong covalent bonds.' },
      { n: 5, f: 'Why does the melting point increase from Na to Al?', b: 'Metallic bonding gets stronger: ion charge 1+, 2+, 3+; delocalised electrons per atom 1, 2, 3; and the ions get smaller.' },
      { n: 6, f: 'Why is the melting point of S₈ higher than P₄, and P₄ higher than Cl₂?', b: 'All are molecular: melting overcomes only van der Waals forces. S₈ has the most electrons per molecule (128, vs 60 for P₄ and 34 for Cl₂), so the strongest forces.' },
    ]),

    // 14 Group 2 (3.2.2)
    ...sub(`${P}group-2-the-alkaline-earth-metals`, `${P}3-2-2-1`, '3.2.2.1', [
      { n: 1, f: 'Trends down Group 2 (Mg → Ba): atomic radius and first ionisation energy', b: 'Atomic radius increases (an extra occupied shell each time).\nFirst ionisation energy decreases: the outer electron is further out and better shielded, outweighing the greater nuclear charge.' },
      { n: 2, f: 'Trend in melting point down Group 2', b: 'Generally decreases (from Ca to Ba): the 2+ ions get larger, so the attraction between ions and delocalised electrons weakens. Magnesium is lower than calcium and does not fit the trend.' },
      { n: 3, f: 'Magnesium with cold water vs with steam', b: 'Cold water: Mg + 2H₂O → Mg(OH)₂ + H₂ (very slow).\nSteam: Mg + H₂O → MgO + H₂ (bright white flame, white powder).' },
      { n: 4, f: 'Trend in reactivity of Group 2 metals with water', b: 'More vigorous down the group, because the outer electrons are lost more easily. For example Ca + 2H₂O → Ca(OH)₂ + H₂.' },
      { n: 5, f: 'Extraction of titanium using magnesium', b: 'TiCl₄ + 2Mg → Ti + 2MgCl₂\nTi is reduced (+4 → 0); Mg is the reducing agent (0 → +2).' },
      { n: 6, f: 'Solubility trends of Group 2 hydroxides and sulfates', b: 'Hydroxides become more soluble down the group (Mg(OH)₂ is sparingly soluble).\nSulfates become less soluble (BaSO₄ is insoluble).' },
      { n: 7, f: 'Uses of Mg(OH)₂, Ca(OH)₂ and BaSO₄', b: 'Mg(OH)₂: antacid (milk of magnesia).\nCa(OH)₂: raising the pH of acidic soil.\nBaSO₄: barium meal for X-rays; it is insoluble, so toxic Ba²⁺ is not absorbed.' },
      { n: 8, f: 'How are CaO and CaCO₃ used to remove SO₂ from flue gases?', b: 'They are bases that react with the acidic gas:\nCaO + SO₂ → CaSO₃\nCaCO₃ + SO₂ → CaSO₃ + CO₂' },
      { n: 9, f: 'Test for sulfate ions, and why the solution is acidified', b: 'Add acidified BaCl₂(aq): white precipitate of BaSO₄. The acid removes carbonate ions, which would also give a white precipitate (BaCO₃). Do not use H₂SO₄: it adds sulfate.' },
    ]),

    // 15 Group 7(17), the halogens (3.2.3)
    ...sub(`${P}group-7-17-the-halogens`, `${P}3-2-3-1`, '3.2.3.1', [
      { n: 1, f: 'Trends down Group 7 (F → I): electronegativity and boiling point', b: 'Electronegativity falls: larger atom, more shielding, so the bonding pair is held less tightly.\nBoiling point rises: more electrons per molecule, so stronger van der Waals forces.' },
      { n: 2, f: 'Trends down Group 7: oxidising ability of X₂ and reducing ability of X⁻', b: 'Oxidising ability of the halogen falls. Reducing ability of the halide ion rises (its outer electron is further out and more shielded, so easier to lose).' },
      { n: 3, f: 'Which halogens displace which halide ions in aqueous solution?', b: 'A halogen oxidises the halide ions of any halogen below it: Cl₂ displaces Br⁻ and I⁻; Br₂ displaces I⁻ only.\nFor example: Cl₂ + 2I⁻ → 2Cl⁻ + I₂' },
      { n: 4, f: 'Products of solid NaCl, NaBr and NaI with concentrated H₂SO₄', b: 'All: HX (steamy fumes), e.g. NaCl + H₂SO₄ → NaHSO₄ + HCl.\nBr⁻ also reduces S to SO₂ (orange-brown Br₂).\nI⁻ reduces S to SO₂, S and H₂S (purple vapour / black solid I₂, yellow solid, bad-egg smell).' },
      { n: 5, f: 'Silver nitrate test results for Cl⁻, Br⁻ and I⁻ (with ammonia)', b: 'Acidify with HNO₃, add AgNO₃(aq).\nCl⁻: white, dissolves in dilute NH₃.\nBr⁻: cream, dissolves in concentrated NH₃ only.\nI⁻: yellow, insoluble in both.' },
      { n: 6, f: 'Why is the sample acidified with nitric acid (not HCl) before adding silver nitrate?', b: 'To remove ions such as CO₃²⁻ and OH⁻ that would also form a precipitate with Ag⁺. HCl would add Cl⁻ ions.' },
    ]),
    ...sub(`${P}group-7-17-the-halogens`, `${P}3-2-3-2`, '3.2.3.2', [
      { n: 1, f: 'Reaction of chlorine with water (in the dark)', b: 'Cl₂ + H₂O ⇌ HClO + HCl\nA reversible disproportionation: chlorine goes from 0 to +1 and −1.' },
      { n: 2, f: 'Reaction of chlorine water in sunlight', b: '2Cl₂ + 2H₂O → 4H⁺ + 4Cl⁻ + O₂\nChlorine is reduced and oxygen is oxidised. This is not disproportionation.' },
      { n: 3, f: 'Reaction of chlorine with cold, dilute sodium hydroxide, and a use of the product', b: 'Cl₂ + 2NaOH → NaClO + NaCl + H₂O (disproportionation). The solution of sodium chlorate(I) is bleach (also a disinfectant).' },
      { n: 4, f: 'Why is chlorine added to drinking water, despite its risks?', b: 'It kills bacteria and so prevents water-borne disease. Chlorine is toxic and can form chlorinated organic compounds, but on balance the health benefits outweigh the toxic effects.' },
    ]),

    // 16 Properties of Period 3 elements and their oxides and chlorides (3.2.4)
    ...sub(`${P}properties-of-period-3-elements-and-their-oxides-and-chlorides`, `${P}3-2-4-1`, '3.2.4.1', [
      { n: 1, f: 'Basic oxide', b: 'Neutralises an acid, giving a salt plus water (Na₂O, MgO).', src: P3 },
      { n: 2, f: 'Acidic oxide', b: 'Neutralises a base, giving a salt plus water (SiO₂, P₄O₁₀, SO₂, SO₃).', src: P3 },
      { n: 3, f: 'Amphoteric (oxide)', b: 'Reacts with acids and with bases. Al₂O₃.', src: P3 },
      { n: 4, f: 'Equation for aluminium reacting with chlorine, and why the product is a dimer', b: '2Al + 3Cl₂ → Al₂Cl₆\nAl in AlCl₃ has only six outer electrons, so a Cl lone pair from another unit forms a co-ordinate bond; two such bonds make the dimer.' },
      { n: 5, f: 'pH of the solutions formed by Na₂O, MgO, P₄O₁₀ and SO₂ with water', b: 'Na₂O: 14 (NaOH). MgO: about 9 (Mg(OH)₂ sparingly soluble). P₄O₁₀: about 0 (H₃PO₄). SO₂: about 3 (H₂SO₃, a weak acid).' },
      { n: 6, f: 'Why do Al₂O₃ and SiO₂ give pH 7 with water?', b: 'They are insoluble (giant structures). Al₂O₃ is still amphoteric and SiO₂ is still acidic: they react with bases (and Al₂O₃ with acids).' },
      { n: 7, f: 'Ionic vs covalent Period 3 chlorides with water', b: 'NaCl and MgCl₂ dissolve (pH 7 and about 6). SiCl₄ and PCl₅ are hydrolysed, giving steamy fumes of HCl and pH about 1:\nSiCl₄ + 2H₂O → SiO₂ + 4HCl\nPCl₅ + 4H₂O → H₃PO₄ + 5HCl' },
      { n: 8, f: 'Why is aluminium chloride solution acidic (about pH 3)?', b: 'The small, highly charged Al³⁺ ion polarises the O–H bonds of its water ligands:\n[Al(H₂O)₆]³⁺ ⇌ [Al(H₂O)₅(OH)]²⁺ + H⁺' },
      { n: 9, f: 'Why does MgO have a much higher melting point than P₄O₁₀ or SO₂?', b: 'MgO is giant ionic, so melting overcomes strong ionic attraction (2+ and 2− ions). P₄O₁₀ and SO₂ are simple molecular: only weak van der Waals forces are overcome.' },
    ]),

    // 17 Transition metals (3.2.5)
    ...sub(`${P}transition-metals`, `${P}3-2-5-1`, '3.2.5.1', [
      { n: 1, f: 'Characteristic properties of transition metals (Ti to Cu), and their cause', b: 'They form complexes, form coloured ions, have variable oxidation states and act as catalysts. The cause is an incomplete d sub-level in the atom or ion.' },
      { n: 2, f: 'Ligand', b: 'A molecule or ion that donates an electron pair to a transition metal ion to form a co-ordinate bond.' },
      { n: 3, f: 'Complex, and co-ordination number', b: 'Complex: a central metal atom or ion surrounded by ligands.\nCo-ordination number: the number of co-ordinate bonds formed by the central metal atom or ion.' },
      { n: 4, f: 'Electron configurations of Cu²⁺ and V³⁺', b: 'Cu²⁺: [Ar] 3d⁹\nV³⁺: [Ar] 3d²\n(4s electrons are lost before 3d.)' },
    ]),
    ...sub(`${P}transition-metals`, `${P}3-2-5-2`, '3.2.5.2', [
      { n: 1, f: 'Why does the co-ordination number stay 6 when NH₃ replaces H₂O, but fall to 4 with Cl⁻?', b: 'NH₃ and H₂O are similar in size and both uncharged. Cl⁻ is larger, so only four fit round the metal ion.' },
      { n: 2, f: 'Product when excess ammonia is added to [Cu(H₂O)₆]²⁺', b: '[Cu(NH₃)₄(H₂O)₂]²⁺, deep blue: an incomplete substitution (co-ordination number still 6).' },
      { n: 3, f: 'Monodentate, bidentate and multidentate ligands, with examples', b: 'Monodentate: one donor atom (H₂O, NH₃, Cl⁻).\nBidentate: two (H₂NCH₂CH₂NH₂, C₂O₄²⁻).\nMultidentate: many (EDTA⁴⁻, six donor atoms).' },
      { n: 4, f: 'Explain the chelate effect', b: 'A multidentate ligand replacing monodentate ones increases the number of particles, so ΔS is positive. Similar bonds are broken and made, so ΔH is small. So ΔG = ΔH − TΔS is negative.' },
      { n: 5, f: 'Haem and carbon monoxide', b: 'Haem is an iron(II) complex with a multidentate ligand. O₂ bonds co-ordinately to Fe(II) to be transported in blood. CO replaces the O₂ and binds strongly, so it is toxic.' },
    ]),
    ...sub(`${P}transition-metals`, `${P}3-2-5-3`, '3.2.5.3', [
      { n: 1, f: 'Shapes of complexes with small ligands (H₂O, NH₃) and with larger Cl⁻', b: 'Small ligands: octahedral (six ligands, 90°).\nCl⁻: tetrahedral (four ligands, 109.5°), e.g. [CuCl₄]²⁻.' },
      { n: 2, f: 'Shape of the silver complex in Tollens’ reagent', b: '[Ag(NH₃)₂]⁺ is linear, 180°.' },
      { n: 3, f: 'Cisplatin', b: 'The cis isomer of square planar [Pt(NH₃)₂Cl₂]: the two Cl ligands are at 90° to each other.' },
      { n: 4, f: 'Which types of stereoisomerism are shown by octahedral complexes?', b: 'Cis–trans with monodentate ligands (a special case of E–Z isomerism), and optical isomerism with bidentate ligands.' },
      { n: 5, f: 'Cis vs trans (complexes)', b: 'Identical ligands at 90° vs 180°.', src: TM },
    ]),
    ...sub(`${P}transition-metals`, `${P}3-2-5-4`, '3.2.5.4', [
      { n: 1, f: 'Why are transition metal ions coloured?', b: 'They absorb certain wavelengths of visible light, using the energy to move a d electron from the ground state to an excited state. The colour seen is the light transmitted or reflected.' },
      { n: 2, f: 'Equation linking the energy absorbed to frequency and wavelength', b: 'ΔE = hν = hc/λ (λ in m, so convert nm × 10⁻⁹).' },
      { n: 3, f: 'Three changes that alter the colour of a complex', b: 'Changing the oxidation state, the co-ordination number or the ligand, because each changes ΔE.' },
      { n: 4, f: 'How is a colorimeter used to find the concentration of a coloured ion?', b: 'Choose a filter of the colour most absorbed, zero with solvent, measure standards to make a calibration graph, read the unknown off it, and multiply by any dilution factor.' },
      { n: 5, f: 'Absorbed vs seen (colour)', b: 'The colour you see is what is not absorbed.', src: TM },
    ]),
    ...sub(`${P}transition-metals`, `${P}3-2-5-5`, '3.2.5.5', [
      { n: 1, f: 'Colours and oxidation states of vanadium species', b: 'VO₂⁺ (+5): yellow\nVO²⁺ (+4): blue\nV³⁺ (+3): green\nV²⁺ (+2): violet\nZinc in acid reduces vanadate(V) through all four.' },
      { n: 2, f: 'Tollens’ reagent', b: '[Ag(NH₃)₂]⁺ + e⁻ → Ag + 2NH₃. Silver mirror with an aldehyde; no change with a ketone.', src: TM },
      { n: 3, f: 'Ratio and equation for the titration of Fe²⁺ with MnO₄⁻', b: 'MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O\nMnO₄⁻ : Fe²⁺ = 1 : 5' },
      { n: 4, f: 'Manganate(VII) titrations: indicator and acid', b: 'No indicator: the end point is the first permanent pink. Acidify with dilute H₂SO₄, never HCl.' },
      { n: 5, f: 'pH effect (on transition metal redox)', b: 'Half-equations with H⁺ (such as MnO₄⁻/Mn²⁺) shift with acidity; more H⁺ makes the higher oxidation state easier to reduce.', src: TM },
    ]),
    ...sub(`${P}transition-metals`, `${P}3-2-5-6`, '3.2.5.6', [
      { n: 1, f: 'Heterogeneous vs homogeneous catalyst', b: 'Heterogeneous: in a different phase from the reactants (e.g. Fe in the Haber process). Homogeneous: in the same phase, working through an intermediate species.' },
      { n: 2, f: 'How V₂O₅ catalyses the Contact process', b: 'V₂O₅ + SO₂ → V₂O₄ + SO₃\nV₂O₄ + ½O₂ → V₂O₅\nVanadium goes +5 → +4 → +5, so the catalyst is regenerated.' },
      { n: 3, f: 'How Fe²⁺ catalyses the reaction between S₂O₈²⁻ and I⁻', b: '2Fe²⁺ + S₂O₈²⁻ → 2Fe³⁺ + 2SO₄²⁻\n2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂\nEach step is between oppositely charged ions, unlike the slow direct reaction between two negative ions.' },
      { n: 4, f: 'Autocatalysis in the MnO₄⁻ / C₂O₄²⁻ reaction', b: 'Mn²⁺, a product, catalyses the reaction (Mn²⁺ → Mn³⁺ → Mn²⁺). It starts slowly because two negative ions repel and no Mn²⁺ is present yet.' },
      { n: 5, f: 'Support medium and poisoning (heterogeneous catalysts)', b: 'A support medium spreads the catalyst to give a large surface area at low cost. Poisoning: impurities block the active sites, reducing efficiency and adding cost.' },
    ]),

    // 18 Reactions of ions in aqueous solution (3.2.6)
    ...sub(`${P}reactions-of-ions-in-aqueous-solution`, `${P}3-2-6-1`, '3.2.6.1', [
      { n: 1, f: 'Aqua ion', b: 'A metal ion surrounded by six water ligands, each joined through a co-ordinate bond from oxygen.', src: AQ },
      { n: 2, f: 'Hydrolysis (of an aqua ion)', b: 'Transfer of a proton from a water ligand to a solvent water molecule, producing H₃O⁺.', src: AQ },
      { n: 3, f: 'Why is [Fe(H₂O)₆]³⁺ more acidic than [Fe(H₂O)₆]²⁺?', b: 'Fe³⁺ has a higher charge and a smaller radius, so a higher charge/size ratio. It is more polarising, weakening the O–H bonds in its water ligands, so H⁺ is released more easily.' },
      { n: 4, f: 'Fe²⁺(aq) and Cu²⁺(aq) with NaOH(aq) or a little NH₃(aq)', b: 'Fe²⁺: green precipitate [Fe(H₂O)₄(OH)₂], browns on standing in air.\nCu²⁺: blue precipitate [Cu(H₂O)₄(OH)₂].\nNeither dissolves in excess NaOH.' },
      { n: 5, f: 'Cu²⁺(aq) with excess ammonia', b: 'The blue precipitate dissolves to give a deep blue solution of [Cu(NH₃)₄(H₂O)₂]²⁺.' },
      { n: 6, f: 'Fe³⁺(aq) and Al³⁺(aq) with NaOH(aq), then excess', b: 'Fe³⁺: orange-brown precipitate [Fe(H₂O)₃(OH)₃], no change in excess.\nAl³⁺: white precipitate [Al(H₂O)₃(OH)₃], dissolves in excess to colourless [Al(H₂O)₂(OH)₄]⁻.' },
      { n: 7, f: 'Amphoteric (aluminium hydroxide)', b: 'Reacts with both acids and bases:\n[Al(H₂O)₃(OH)₃] + 3H⁺ → [Al(H₂O)₆]³⁺\n[Al(H₂O)₃(OH)₃] + OH⁻ → [Al(H₂O)₂(OH)₄]⁻ + H₂O' },
      { n: 8, f: 'Metal aqua ions with sodium carbonate: 2+ ions vs 3+ ions', b: '2+ (Fe²⁺, Cu²⁺): metal carbonate precipitate (FeCO₃ green, CuCO₃ blue-green), no gas.\n3+ (Fe³⁺, Al³⁺): hydroxide precipitate and effervescence of CO₂. The 3+ aqua ion is acidic enough to protonate carbonate.' },
      { n: 9, f: 'Equation for a 3+ aqua ion with carbonate ions', b: '2[M(H₂O)₆]³⁺ + 3CO₃²⁻ → 2[M(H₂O)₃(OH)₃] + 3CO₂ + 3H₂O' },
    ]),

    // 19 Introduction to organic chemistry (3.3.1)
    ...sub(`${P}introduction-to-organic-chemistry`, `${P}3-3-1-1`, '3.3.1.1', [
      { n: 1, f: 'Homologous series: four features', b: 'Same general formula; successive members differ by CH₂; similar chemical reactions; a gradual trend in physical properties. All members contain the same functional group.' },
      { n: 2, f: 'Functional group', b: 'The part of a molecule that is responsible for its typical chemical reactions.' },
      { n: 3, f: 'Displayed, structural and skeletal formulae', b: 'Displayed: every atom and every bond drawn.\nStructural: groups written carbon by carbon, e.g. CH₃CH₂CHO.\nSkeletal: lines for bonds, carbons at ends and corners, no C–H hydrogens shown.' },
      { n: 4, f: 'Name CH₃COCH(CH₃)CH₂CH₃', b: '3-methylpentan-2-one' },
      { n: 5, f: 'Which functional groups are always on C1 and take no locant?', b: 'Aldehydes (-al) and carboxylic acids (-oic acid). Writing “butan-1-al” is wrong.' },
    ]),
    ...sub(`${P}introduction-to-organic-chemistry`, `${P}3-3-1-2`, '3.3.1.2', [
      { n: 1, f: 'Radical', b: 'A species with an unpaired electron, shown by a dot (e.g. Cl•, CH₃•).' },
      { n: 2, f: 'How are free-radical mechanisms written?', b: 'With no curly arrows: a balanced equation for each step, showing the radicals with dots.' },
      { n: 3, f: 'Curly arrow: what does it show, and where does it start?', b: 'The movement of a pair of electrons. It starts from a lone pair or a covalent bond (the middle of the bond if the bond breaks) and points to where the pair goes.' },
    ]),
    ...sub(`${P}introduction-to-organic-chemistry`, `${P}3-3-1-3`, '3.3.1.3', [
      { n: 1, f: 'Structural isomers', b: 'Compounds with the same molecular formula but a different structural formula.' },
      { n: 2, f: 'Stereoisomers', b: 'Compounds with the same structural formula but a different arrangement of atoms in space.' },
      { n: 3, f: 'Chain, position and functional group isomers (example pairs for C₆H₁₂O)', b: 'Chain: hexanal and 2-methylpentanal.\nPosition: hexan-2-one and hexan-3-one.\nFunctional group: hexanal and hexan-3-one.' },
      { n: 4, f: 'Cause of E–Z isomerism, and the condition for it', b: 'Restricted rotation about the planar C=C double bond. Each carbon of the C=C must carry two different groups.' },
      { n: 5, f: 'E or Z: how do you decide using CIP priority rules?', b: 'On each C=C carbon, rank the two groups by the atomic number of the atom attached directly (compare further atoms if tied). Higher priorities on the same side = Z; on opposite sides = E.' },
      { n: 6, f: 'Does 2,3-dimethylbut-2-ene have E–Z isomers?', b: 'No. Each carbon of the C=C carries two identical CH₃ groups.' },
    ]),

    // 20 Alkanes (3.3.2)
    ...sub(`${P}alkanes`, `${P}3-3-2-1`, '3.3.2.1', [
      { n: 1, f: 'Alkane', b: 'A saturated hydrocarbon (contains only C and H, with only single C–C bonds). General formula CₙH₂ₙ₊₂ for chains.' },
      { n: 2, f: 'Petroleum (crude oil) and a fraction', b: 'Petroleum: a mixture consisting mainly of alkane hydrocarbons.\nFraction: part of the distillate with boiling points in a narrow range.' },
      { n: 3, f: 'How does fractional distillation of crude oil work?', b: 'Heated crude oil vapour enters a column that is hot at the bottom and cool at the top. Each compound condenses where the temperature falls below its boiling point: short chains high up, long chains low down.' },
      { n: 4, f: 'Why do longer-chain alkanes have higher boiling points?', b: 'More electrons and a bigger contact area, so stronger van der Waals forces between molecules, needing more energy to separate them.' },
    ]),
    ...sub(`${P}alkanes`, `${P}3-3-2-2`, '3.3.2.2', [
      { n: 1, f: 'Cracking', b: 'Breaking C–C bonds in alkanes to give smaller molecules.' },
      { n: 2, f: 'Thermal vs catalytic cracking: conditions and main products', b: 'Thermal: high pressure, high temperature; gives a high percentage of alkenes.\nCatalytic: slight pressure, high temperature, zeolite catalyst; gives motor fuels and aromatic hydrocarbons.' },
      { n: 3, f: 'Economic reasons for cracking', b: 'Distillation gives more of the heavy fractions than are needed and too little of lighter ones such as motor fuels. Cracking turns low-value surplus into higher-value products, including alkenes for polymers.' },
      { n: 4, f: 'Octadecane, C₁₈H₃₈, cracks into hexadecane and one other molecule. Name it.', b: 'C₁₈H₃₈ − C₁₆H₃₄ = C₂H₄: ethene.' },
    ]),
    ...sub(`${P}alkanes`, `${P}3-3-2-3`, '3.3.2.3', [
      { n: 1, f: 'Products of complete and incomplete combustion of alkanes', b: 'Complete (plenty of oxygen): CO₂ and H₂O.\nIncomplete (limited oxygen): CO and/or C (soot), and H₂O.' },
      { n: 2, f: 'Pollutants from the internal combustion engine', b: 'NOₓ (N₂ and O₂ from the air combine at high temperature), CO (toxic) and carbon particles from incomplete combustion, and unburned hydrocarbons.' },
      { n: 3, f: 'What does a catalytic converter do? Give one equation.', b: 'Removes CO, NOₓ and unburned hydrocarbons, forming CO₂, N₂ and H₂O. CO and hydrocarbons are oxidised; NO is reduced.\n2CO + 2NO → 2CO₂ + N₂' },
      { n: 4, f: 'How is SO₂ removed from power station flue gases?', b: 'A base (CaO or CaCO₃) neutralises the acidic gas:\nCaO + SO₂ → CaSO₃\nCaCO₃ + SO₂ → CaSO₃ + CO₂' },
      { n: 5, f: 'Balanced equation for complete combustion of methanol', b: 'CH₃OH + 1½O₂ → CO₂ + 2H₂O' },
    ]),
    ...sub(`${P}alkanes`, `${P}3-3-2-4`, '3.3.2.4', [
      { n: 1, f: 'Conditions and mechanism type for the chlorination of methane', b: 'UV light; free-radical substitution.' },
      { n: 2, f: 'Initiation step in the chlorination of methane', b: 'Cl₂ → 2Cl• (UV light splits the Cl–Cl bond by homolytic fission).' },
      { n: 3, f: 'The two propagation steps in the chlorination of methane', b: 'CH₄ + Cl• → HCl + •CH₃\n•CH₃ + Cl₂ → CH₃Cl + Cl•' },
      { n: 4, f: 'Termination steps in the chlorination of methane', b: 'Two radicals combine: 2Cl• → Cl₂; Cl• + •CH₃ → CH₃Cl; 2•CH₃ → C₂H₆.' },
      { n: 5, f: 'Why does chlorinating methane give a mixture of products?', b: 'Cl• can remove H from any chloromethane that still has C–H bonds, giving CH₂Cl₂, CHCl₃ and CCl₄. Excess methane favours CH₃Cl.' },
    ]),

    // 21 Halogenoalkanes (3.3.3)
    ...sub(`${P}halogenoalkanes`, `${P}3-3-3-1`, '3.3.3.1', [
      { n: 1, f: 'Nucleophile', b: 'An electron pair donor that attacks an electron-deficient (δ+) atom.' },
      { n: 2, f: 'Why is the carbon of a C–X bond δ+?', b: 'The halogen is more electronegative than carbon, so the bonding pair is pulled towards X.' },
      { n: 3, f: 'Halogenoalkane with OH⁻, CN⁻ and NH₃: conditions and products', b: 'OH⁻: warm aqueous NaOH/KOH → alcohol.\nCN⁻: KCN in ethanol and water, heat under reflux → nitrile (one carbon longer).\nNH₃: excess, in ethanol, heated in a sealed vessel → primary amine.' },
      { n: 4, f: 'Order of rate of substitution of halogenoalkanes, and why', b: 'R–F < R–Cl < R–Br < R–I. The C–I bond has the lowest bond enthalpy, so it needs least energy to break. Polarity cannot explain this: C–F is most polar but slowest.' },
      { n: 5, f: 'Nucleophilic substitution with OH⁻: the curly arrows', b: 'Arrow from a lone pair on the O of OH⁻ to the δ+ carbon; arrow from the C–X bond to X. Products: alcohol and X⁻.' },
      { n: 6, f: 'Why is excess ammonia used to make a primary amine from a halogenoalkane?', b: 'The amine product is also a nucleophile. Excess NH₃ makes it more likely that the halogenoalkane reacts with ammonia rather than with the amine.' },
    ]),
    ...sub(`${P}halogenoalkanes`, `${P}3-3-3-2`, '3.3.3.2', [
      { n: 1, f: 'Conditions for elimination from a halogenoalkane', b: 'KOH (or NaOH) dissolved in ethanol, heated. Product: an alkene, plus H₂O and X⁻.' },
      { n: 2, f: 'OH⁻ as a nucleophile vs OH⁻ as a base', b: 'Nucleophile: bonds to carbon (substitution, gives an alcohol; favoured by warm aqueous conditions).\nBase: accepts H⁺ from a carbon next to the C–X carbon (elimination, gives an alkene; favoured by hot ethanolic conditions).' },
      { n: 3, f: 'Elimination mechanism: the three curly arrows', b: 'Lone pair on the O of OH⁻ to an H on the carbon next to C–X; C–H bond to between the two carbons (forming C=C); C–X bond to X.' },
      { n: 4, f: 'Products of 2-bromopropane with KOH', b: 'Substitution: propan-2-ol. Elimination: propene. Both reactions happen at the same time (concurrently).' },
    ]),

    // 22 Alkenes (3.3.4)
    ...sub(`${P}alkenes`, `${P}3-3-4-1`, '3.3.4.1', [
      { n: 1, f: 'Why are alkenes attacked by electrophiles?', b: 'The C=C double bond (four shared electrons) is a centre of high electron density, which attracts electrophiles.' },
      { n: 2, f: 'Electrophile', b: 'An electron pair acceptor: a positive ion or a species with a δ+ atom.' },
      { n: 3, f: 'Unsaturated', b: 'Contains a C=C double bond, so more atoms can add on.' },
    ]),
    ...sub(`${P}alkenes`, `${P}3-3-4-2`, '3.3.4.2', [
      { n: 1, f: 'Electrophilic addition of HBr to an alkene: the three curly arrows', b: 'From the middle of the C=C to the Hδ+ of HBr; from the H–Br bond to Br; then from a lone pair on Br⁻ to the carbocation C⁺.' },
      { n: 2, f: 'Why can non-polar Br₂ act as an electrophile?', b: 'The electron density of the C=C repels the Br–Br bonding electrons, inducing a dipole: the nearer Br becomes δ+.' },
      { n: 3, f: 'Test for a C=C double bond', b: 'Shake with bromine water: orange to colourless if C=C is present. A saturated compound leaves it orange.' },
      { n: 4, f: 'Why does propene + HBr give mainly 2-bromopropane?', b: 'It forms via the secondary carbocation, which is more stable than the primary one, because alkyl groups release electrons and spread the positive charge. The more stable carbocation forms more readily.' },
      { n: 5, f: 'Order of stability of carbocations', b: 'Primary < secondary < tertiary.' },
      { n: 6, f: 'Reagent and conditions for adding sulfuric acid to an alkene', b: 'Cold, concentrated H₂SO₄. The H of H₂SO₄ is the electrophile; the hydrogensulfate ion bonds to C⁺ through its negatively charged O.' },
    ]),
    ...sub(`${P}alkenes`, `${P}3-3-4-3`, '3.3.4.3', [
      { n: 1, f: 'How do you draw the repeating unit of an addition polymer from its monomer?', b: 'Turn the C=C into C–C, keep every group on its own carbon, add extension bonds, brackets and n.' },
      { n: 2, f: 'Monomer of the chain –CH₂–CF₂–CH₂–CF₂–', b: 'CH₂=CF₂ (1,1-difluoroethene).' },
      { n: 3, f: 'Why are poly(alkenes) unreactive?', b: 'They are saturated (no C=C left) and contain strong, non-polar C–C and C–H bonds.' },
      { n: 4, f: 'How does a plasticiser make PVC flexible?', b: 'Small molecules lodge between the polymer chains and push them apart, weakening the intermolecular forces so the chains can slide over each other.' },
      { n: 5, f: 'Uses of unplasticised and plasticised PVC', b: 'Unplasticised (rigid): water and sewage pipes, doors, bank cards.\nPlasticised (flexible): cable insulation, inflatable products, flooring.' },
    ]),
    ...sub(`${P}alkenes`, `${P}3-3-4-4`, '3.3.4.4', [
      { n: 1, f: 'How is epoxyethane made industrially?', b: '2CH₂=CH₂ + O₂ → 2C₂H₄O, silver catalyst (about 220–280 °C, 1–3 MPa). Atom economy 100%.' },
      { n: 2, f: 'Why is epoxyethane so reactive?', b: 'Its three-membered ring has bond angles of about 60° (not 109.5°), so it is strained with weak C–O bonds; the polar Cδ+–Oδ− bonds attract nucleophiles.' },
      { n: 3, f: 'Hazards of making and using epoxyethane', b: 'The competing combustion of ethene is far more exothermic; epoxyethane is extremely flammable, explosive with air, toxic and carcinogenic.' },
      { n: 4, f: 'Products of epoxyethane with water and with ethanol', b: 'Water: ethane-1,2-diol, HOCH₂CH₂OH (antifreeze, coolant, making PET).\nEthanol: 2-ethoxyethanol, CH₃CH₂OCH₂CH₂OH (a glycol ether solvent).' },
      { n: 5, f: 'How are non-ionic surfactants made from epoxyethane?', b: 'A long-chain alcohol reacts with several epoxyethane molecules: ROH + nC₂H₄O → R(OCH₂CH₂)ₙOH, giving a non-polar tail and an uncharged polar head.' },
    ]),

    // 23 Alcohols (3.3.5)
    ...sub(`${P}alcohols`, `${P}3-3-5-1`, '3.3.5.1', [
      { n: 1, f: 'Primary, secondary and tertiary alcohols', b: 'Classified by the number of carbons bonded to the C–OH carbon: one (primary), two (secondary), three (tertiary). Methanol, with none, counts as primary.' },
      { n: 2, f: 'Oxidising agent for alcohols, and the colour change', b: 'Potassium dichromate(VI) acidified with dilute sulfuric acid: orange (Cr₂O₇²⁻) to green (Cr³⁺).' },
      { n: 3, f: 'Oxidation products of primary, secondary and tertiary alcohols', b: 'Primary: aldehyde (distil as it forms), or carboxylic acid (reflux with excess oxidising agent).\nSecondary: ketone.\nTertiary: not oxidised (stays orange).' },
      { n: 4, f: 'Why is an aldehyde distilled off as it forms?', b: 'Aldehyde molecules cannot hydrogen bond to each other, so it boils below the alcohol and escapes before it is oxidised further to the carboxylic acid.' },
      { n: 5, f: 'Fehling’s solution and Tollens’ reagent: results with an aldehyde and a ketone', b: 'Warm in a water bath.\nFehling’s: aldehyde gives a red precipitate (Cu₂O); ketone stays blue.\nTollens’: aldehyde gives a silver mirror; ketone, no change.' },
      { n: 6, f: 'Why are tertiary alcohols not oxidised by acidified dichromate(VI)?', b: 'The C–OH carbon has no hydrogen atom, so C=O cannot form without breaking a C–C bond.' },
    ]),
    ...sub(`${P}alcohols`, `${P}3-3-5-2`, '3.3.5.2', [
      { n: 1, f: 'Reagent and conditions to eliminate water from an alcohol', b: 'Heat with a concentrated acid catalyst: concentrated H₂SO₄ or concentrated H₃PO₄. Product: an alkene + H₂O.' },
      { n: 2, f: 'Mechanism of acid-catalysed dehydration of an alcohol', b: 'Lone pair on O attacks H⁺ (protonated alcohol, R–OH₂⁺); the C–O bond breaks and water leaves (carbocation); an adjacent C–H bond’s electrons form C=C and H⁺ is released.' },
      { n: 3, f: 'Hexan-2-ol dehydration: which alkenes form?', b: 'Neighbours are C1 and C3. Loss of H from C1 gives hex-1-ene. Loss from C3 gives hex-2-ene, which has E and Z forms: three alkenes in total.', src: ALC },
      { n: 4, f: 'Why does making alkenes from alcohols matter?', b: 'The alkenes can be made into addition polymers without monomers derived from crude oil (if the alcohol itself does not come from crude oil).' },
      { n: 5, f: 'Required practical 4: why is the thermometer bulb level with the side arm in distillation?', b: 'It measures the temperature of the vapour leaving, so only the fraction distilling near the product’s boiling point is collected.' },
    ]),

    // 24 Organic analysis (3.3.6)
    ...sub(`${P}organic-analysis`, `${P}3-3-6-1`, '3.3.6.1', [
      { n: 1, f: 'Test for a primary or secondary alcohol', b: 'Warm with acidified potassium dichromate(VI): orange → green. A tertiary alcohol (or a ketone) leaves it orange.' },
      { n: 2, f: 'Test for a carboxylic acid', b: 'Add Na₂CO₃(aq): fizzing; the CO₂ turns limewater milky.' },
      { n: 3, f: 'Why must aldehydes be ruled out before using dichromate(VI) to test for an alcohol?', b: 'Aldehydes are also oxidised by dichromate(VI), so they also turn it from orange to green.' },
      { n: 4, f: 'Which two compound types does no AS test-tube reaction separate?', b: 'A ketone and a tertiary alcohol: neither reacts with dichromate(VI), Fehling’s or Tollens’. Use IR (C=O vs O–H).' },
      { n: 5, f: 'Required practical 5: why heat organic test mixtures in a water bath?', b: 'Most of the organic liquids are flammable, so no naked flame.' },
    ]),
    ...sub(`${P}organic-analysis`, `${P}3-3-6-2`, '3.3.6.2', [
      { n: 1, f: 'How does high-resolution mass spectrometry identify a molecular formula?', b: 'Formulae with the same integer Mr have different precise masses. The m/z of the molecular ion to 4 decimal places is matched against the precise mass of each candidate formula.' },
      { n: 2, f: 'Molecular ion at m/z 90.0678: C₄H₁₀O₂ or C₃H₆O₃? (C 12.0000, H 1.0078, O 15.9949)', b: 'C₄H₁₀O₂: 48.0000 + 10.0780 + 31.9898 = 90.0678 (match).\nC₃H₆O₃: 36.0000 + 6.0468 + 47.9847 = 90.0315.' },
      { n: 3, f: 'What can mass spectrometry of the molecular ion not tell you?', b: 'The structure: many isomers share a molecular formula. IR, test-tube reactions or fingerprint comparison are needed to go further.' },
    ]),
    ...sub(`${P}organic-analysis`, `${P}3-3-6-3`, '3.3.6.3', [
      { n: 1, f: 'IR absorptions: O–H in alcohols vs O–H in carboxylic acids', b: 'Alcohol O–H: broad, 3230–3550 cm⁻¹.\nAcid O–H: very broad, 2500–3000 cm⁻¹ (merges with C–H).' },
      { n: 2, f: 'IR absorptions for C=O, C=C and C≡N', b: 'C=O: 1680–1750 cm⁻¹ (strong, sharp).\nC=C: 1620–1680 cm⁻¹.\nC≡N: 2220–2260 cm⁻¹.' },
      { n: 3, f: 'Fingerprint region', b: 'Below about 1500 cm⁻¹. Its pattern is characteristic of the whole molecule, so comparing it with spectra of known compounds identifies the substance.' },
      { n: 4, f: 'A product expected to be an aldehyde shows a very broad band at 2500–3000 cm⁻¹. What does it show?', b: 'Impurity of a carboxylic acid, from over-oxidation.' },
      { n: 5, f: 'How do CO₂, methane and water vapour contribute to global warming?', b: 'Their C=O, C–H and O–H bonds absorb infrared emitted by the Earth’s surface; the energy is re-emitted in all directions, some back towards the surface.' },
    ]),

    // 25 Optical isomerism (3.3.7)
    ...sub(`${P}optical-isomerism`, `${P}3-3-7-1`, '3.3.7.1', [
      { n: 1, f: 'Asymmetric carbon atom (chiral centre)', b: 'A carbon atom with four different atoms or groups attached.' },
      { n: 2, f: 'Enantiomers (optical isomers)', b: 'Non-superimposable mirror-image forms of a molecule with a chiral centre.' },
      { n: 3, f: 'How do two enantiomers differ in their effect on plane-polarised light?', b: 'They rotate the plane of plane-polarised light by the same angle in opposite directions. Their other physical properties are the same.' },
      { n: 4, f: 'Racemic mixture (racemate)', b: 'A mixture of equal amounts of the two enantiomers.' },
      { n: 5, f: 'Why is a racemate optically inactive?', b: 'The two enantiomers rotate the plane of polarised light equally in opposite directions; with equal amounts, the rotations cancel.' },
      { n: 6, f: 'Why does nucleophilic addition of CN⁻ to an aldehyde give a racemate?', b: 'The C=O carbon is planar, so CN⁻ can attack from either side with equal probability, forming the two enantiomers in equal amounts.' },
      { n: 7, f: 'Which carbon atoms can never be chiral centres?', b: 'Carbons in C=C, C=O or C≡N, any CH₃ or CH₂ carbon, and any carbon in a benzene ring.' },
    ]),

    // 26 Aldehydes and ketones (3.3.8)
    ...sub(`${P}aldehydes-and-ketones`, `${P}3-3-8-1`, '3.3.8.1', [
      { n: 1, f: 'Why is the carbonyl group attacked by nucleophiles?', b: 'C=O is polar (Cδ+=Oδ−) because oxygen is more electronegative, so the δ+ carbon attracts nucleophiles.' },
      { n: 2, f: 'Products of reducing aldehydes and ketones with NaBH₄', b: 'Aqueous NaBH₄. Aldehyde → primary alcohol; ketone → secondary alcohol.\nRCHO + 2[H] → RCH₂OH' },
      { n: 3, f: 'Mechanism of reduction by NaBH₄', b: 'Nucleophilic addition. Lone pair of H⁻ attacks the δ+ carbonyl carbon; the C=O electrons move to O (alkoxide, O⁻); O⁻ takes H⁺ from water to form the alcohol.' },
      { n: 4, f: 'Reaction of an aldehyde with KCN followed by dilute acid', b: 'Nucleophilic addition giving a hydroxynitrile: RCHO + HCN → RCH(OH)CN. The C of :CN⁻ attacks the carbonyl carbon; the O⁻ is then protonated. The chain gains one carbon.' },
      { n: 5, f: 'Which carbonyl compounds give a racemate with KCN then dilute acid?', b: 'Aldehydes (except methanal) and unsymmetrical ketones. A symmetrical ketone or methanal gives no chiral centre, so no enantiomers.' },
      { n: 6, f: 'Hazards of the KCN reaction', b: 'KCN is highly toxic, and adding acid forms HCN, a highly toxic, volatile gas. Use a fume cupboard, gloves and eye protection, and add the dilute acid slowly.' },
      { n: 7, f: 'Why are aldehydes oxidised but ketones not?', b: 'An aldehyde’s C=O carbon carries an H atom, so it is readily oxidised to a carboxylic acid (RCHO + [O] → RCOOH). A ketone’s C=O carbon carries two carbons and is not oxidised.' },
    ]),

    // 27 Carboxylic acids and derivatives (3.3.9)
    ...sub(`${P}carboxylic-acids-and-derivatives`, `${P}3-3-9-1`, '3.3.9.1', [
      { n: 1, f: 'Carboxylic acids: strength and reaction with carbonates', b: 'Weak acids (only partly dissociated), but they still liberate CO₂ from carbonates.\n2CH₃CH₂CH₂COOH + CaCO₃ → (CH₃CH₂CH₂COO)₂Ca + CO₂ + H₂O' },
      { n: 2, f: 'How are esters made from carboxylic acids?', b: 'Warm the acid with an alcohol and an acid catalyst (concentrated H₂SO₄). Reversible: acid + alcohol ⇌ ester + water.' },
      { n: 3, f: 'Name the ester HCOOCH₂CH₂CH₂CH₂CH₃', b: 'Pentyl methanoate (from methanoic acid and pentan-1-ol).' },
      { n: 4, f: 'Acid vs alkaline hydrolysis of an ester', b: 'Acid (dilute acid, reflux): carboxylic acid + alcohol; reversible.\nAlkaline (NaOH(aq), reflux): carboxylate salt + alcohol; goes to completion because the carboxylate ion does not react with the alcohol.' },
      { n: 5, f: 'Uses of esters', b: 'Solvents, plasticisers, perfumes and food flavourings.' },
      { n: 6, f: 'Making soap from a fat or oil', b: 'Fats and oils are triesters of propane-1,2,3-triol (glycerol). Heating with NaOH(aq) hydrolyses them: 1 mol fat + 3 mol NaOH → 3 mol soap (carboxylate salt) + 1 mol glycerol.' },
      { n: 7, f: 'Biodiesel', b: 'A mixture of methyl esters of long-chain carboxylic acids, made by reacting vegetable oils with methanol in the presence of a catalyst (glycerol is also formed).' },
    ]),
    ...sub(`${P}carboxylic-acids-and-derivatives`, `${P}3-3-9-2`, '3.3.9.2', [
      { n: 1, f: 'Products of acyl chlorides with water, alcohols, ammonia and primary amines', b: 'Water: carboxylic acid. Alcohol: ester. Ammonia: amide (–CONH₂). Primary amine: N-substituted amide (–CONHR). The by-product is HCl (or an ammonium/alkylammonium chloride with excess NH₃ or amine).' },
      { n: 2, f: 'Acyl chloride vs acid anhydride as acylating agents', b: 'Same organic products, but the by-product from an acid anhydride is a carboxylic acid instead of HCl.' },
      { n: 3, f: 'Outline of the nucleophilic addition–elimination mechanism with an acyl chloride', b: 'Lone pair (on O or N) attacks the δ+ carbonyl C; C=O electrons move to O. Then the O⁻ lone pair re-forms C=O and Cl⁻ leaves. Finally H⁺ is lost from the positive O or N.' },
      { n: 4, f: 'Ethanoyl chloride with excess butylamine: equation and product name', b: 'CH₃COCl + 2CH₃CH₂CH₂CH₂NH₂ → CH₃CONHCH₂CH₂CH₂CH₃ + CH₃CH₂CH₂CH₂NH₃Cl\nProduct: N-butylethanamide.' },
      { n: 5, f: 'Why does industry use ethanoic anhydride, not ethanoyl chloride, to make aspirin?', b: 'It is cheaper, less corrosive, less readily hydrolysed by moisture, reacts less vigorously (easier to control) and gives no hydrogen chloride gas.' },
      { n: 6, f: 'Required practical 10: recrystallisation and purity check', b: 'Dissolve in the minimum hot solvent, filter hot, cool, collect crystals by vacuum filtration, rinse with a little cold solvent, dry. A pure solid melts sharply at the data-book value; an impure one melts lower and over a range.' },
    ]),

    // 28 Aromatic chemistry (3.3.10)
    ...sub(`${P}aromatic-chemistry`, `${P}3-3-10-1`, '3.3.10.1', [
      { n: 1, f: 'Bonding in benzene', b: 'Planar ring; each C forms three σ bonds at 120°. Each C has one p electron; the six p orbitals overlap sideways, so six electrons are delocalised above and below the ring.' },
      { n: 2, f: 'Carbon–carbon bond length in benzene', b: 'All six bonds are equal, with a length between a C–C single bond and a C=C double bond.' },
      { n: 3, f: 'How do enthalpies of hydrogenation show benzene is more stable than cyclohexa-1,3,5-triene?', b: 'Predicted ΔH for the triene = 3 × ΔH(cyclohexene). Benzene’s measured value is less exothermic. Both give cyclohexane, so benzene starts lower in energy: the difference is the delocalisation stabilisation.' },
      { n: 4, f: 'Why does benzene undergo substitution rather than addition?', b: 'Addition would destroy the delocalised ring and lose its extra stability. Substitution keeps the ring intact.' },
    ]),
    ...sub(`${P}aromatic-chemistry`, `${P}3-3-10-2`, '3.3.10.2', [
      { n: 1, f: 'Nitration of benzene: reagents, electrophile and its formation', b: 'Concentrated HNO₃ and concentrated H₂SO₄. Electrophile: NO₂⁺.\nHNO₃ + 2H₂SO₄ → NO₂⁺ + H₃O⁺ + 2HSO₄⁻\nProduct: nitrobenzene.' },
      { n: 2, f: 'Electrophilic substitution mechanism on benzene: outline', b: 'Arrow from the delocalised ring to the electrophile; intermediate with a horseshoe over five carbons and + inside, the attacked C carrying H and the new group; arrow from the C–H bond into the ring, releasing H⁺.' },
      { n: 3, f: 'Friedel–Crafts acylation: reagents and electrophile', b: 'Acyl chloride with AlCl₃ catalyst, dry conditions.\nRCOCl + AlCl₃ → RCO⁺ + AlCl₄⁻\nProduct: a phenyl ketone, C₆H₅COR. Catalyst re-formed: H⁺ + AlCl₄⁻ → AlCl₃ + HCl.' },
      { n: 4, f: 'Sulfonation of benzene: reagent and electrophile', b: 'Fuming sulfuric acid, warm (or concentrated H₂SO₄ under reflux). Electrophile: SO₃ (the ring attacks the S). Product: benzenesulfonic acid, C₆H₅SO₃H.' },
      { n: 5, f: 'Nitration of methylbenzene compared with benzene', b: 'Faster, because CH₃ releases electron density into the ring. Substitution mainly at positions 2 and 4: 2-nitromethylbenzene and 4-nitromethylbenzene.' },
      { n: 6, f: 'Chlorine with benzene vs with methylbenzene in UV light', b: 'Benzene: free-radical addition to the ring, giving C₆H₆Cl₆.\nMethylbenzene: free-radical substitution on the side chain, giving (chloromethyl)benzene, C₆H₅CH₂Cl, and further products.' },
      { n: 7, f: 'Why is chlorobenzene unreactive towards nucleophiles, unlike (chloromethyl)benzene?', b: 'In chlorobenzene a Cl lone pair overlaps with the ring, giving the C–Cl bond partial double-bond character (shorter, stronger), and the delocalised electrons repel nucleophiles.' },
    ]),

    // 29 Amines (3.3.11)
    ...sub(`${P}amines`, `${P}3-3-11-1`, '3.3.11.1', [
      { n: 1, f: 'Primary, secondary and tertiary amines', b: 'Classified by the number of carbon atoms bonded directly to the N: one, two or three.' },
      { n: 2, f: 'Two ways to make a primary aliphatic amine', b: 'Halogenoalkane + excess NH₃ in ethanol, heated in a sealed vessel (gives a mixture).\nReduce a nitrile, e.g. with H₂ and a nickel catalyst: RCN + 4[H] → RCH₂NH₂ (only the primary amine).' },
      { n: 3, f: 'Making an aromatic amine from a nitro compound', b: 'Reduce with tin and concentrated HCl, heat under reflux, then add NaOH to free the amine.\nC₆H₅NO₂ + 6[H] → C₆H₅NH₂ + 2H₂O' },
      { n: 4, f: 'Use of aromatic amines made by reducing nitro compounds', b: 'Manufacture of dyes.' },
    ]),
    ...sub(`${P}amines`, `${P}3-3-11-2`, '3.3.11.2', [
      { n: 1, f: 'Why are amines bases?', b: 'The lone pair on the nitrogen accepts a proton (H⁺).\nRNH₂ + H₂O ⇌ RNH₃⁺ + OH⁻' },
      { n: 2, f: 'Order of base strength: ammonia, primary aliphatic amines, primary aromatic amines', b: 'Primary aromatic amine < ammonia < primary aliphatic amine.' },
      { n: 3, f: 'Why is a primary aliphatic amine a stronger base than ammonia?', b: 'The alkyl group is electron-releasing, increasing the electron density on N, so the lone pair is more available to accept H⁺.' },
      { n: 4, f: 'Why is phenylamine a weaker base than ammonia?', b: 'The nitrogen lone pair is delocalised into the benzene ring, lowering the electron density on N, so it is less available to accept H⁺.' },
    ]),
    ...sub(`${P}amines`, `${P}3-3-11-3`, '3.3.11.3', [
      { n: 1, f: 'Successive substitution of ammonia by halogenoalkanes', b: 'NH₃ → RNH₂ (primary) → R₂NH (secondary) → R₃N (tertiary) → R₄N⁺X⁻ (quaternary ammonium salt). Excess NH₃ favours the primary amine; excess halogenoalkane favours the quaternary salt.' },
      { n: 2, f: 'Why can a quaternary ammonium ion not act as a nucleophile or a base?', b: 'Its nitrogen has used its lone pair in four bonds, so it has no lone pair to donate.' },
      { n: 3, f: 'Cationic surfactants', b: 'Quaternary ammonium salts with a long hydrocarbon chain: a positive N⁺ head that interacts with water and a non-polar tail. Used in fabric softeners and hair conditioners.' },
      { n: 4, f: 'Product of an acyl chloride with a primary amine', b: 'An N-substituted amide, by nucleophilic addition–elimination. E.g. heptanoyl chloride + excess methylamine → N-methylheptanamide + methylammonium chloride.' },
    ]),

    // 30 Polymers (3.3.12)
    ...sub(`${P}polymers`, `${P}3-3-12-1`, '3.3.12.1', [
      { n: 1, f: 'Condensation polymer', b: 'A polymer formed when monomers with two reactive groups join, giving off a small molecule (usually water) at each new link.' },
      { n: 2, f: 'Monomers of Terylene, nylon 6,6 and Kevlar', b: 'Terylene: ethane-1,2-diol + benzene-1,4-dicarboxylic acid.\nNylon 6,6: hexane-1,6-diamine + hexanedioic acid.\nKevlar: benzene-1,4-diamine + benzene-1,4-dicarboxylic acid.' },
      { n: 3, f: 'Polyester vs polyamide: linkage and monomers', b: 'Polyester: ester link –COO–, from a diol and a dicarboxylic acid.\nPolyamide: amide link –CONH–, from a diamine and a dicarboxylic acid (or from amino acids).' },
      { n: 4, f: 'Repeating unit of nylon 6,6', b: '–[CO–(CH₂)₄–CO–NH–(CH₂)₆–NH]–, with 2n H₂O formed for n units.' },
      { n: 5, f: 'Strongest forces between chains in polyesters and in polyamides', b: 'Polyesters: permanent dipole–dipole forces between C=O groups.\nPolyamides: hydrogen bonds from N–H on one chain to the C=O oxygen of another (very many in Kevlar, whose flat rigid chains line up).' },
      { n: 6, f: 'Uses of Terylene, nylon 6,6 and Kevlar', b: 'Terylene: polyester fabric, bottles.\nNylon 6,6: rope, carpet, clothing.\nKevlar: bulletproof vests, armour.' },
    ]),
    ...sub(`${P}polymers`, `${P}3-3-12-2`, '3.3.12.2', [
      { n: 1, f: 'Why are polyesters and polyamides biodegradable but polyalkenes are not?', b: 'Ester and amide links have a δ+ carbonyl carbon that water or OH⁻ can attack, so they hydrolyse. Polyalkenes have only non-polar C–C and C–H bonds, so they are chemically inert.' },
      { n: 2, f: 'Products of hydrolysing a polyamide with acid and with alkali', b: 'Dilute acid, heat: dicarboxylic acid + diammonium salt.\nAqueous alkali, heat: dicarboxylate salt + diamine.' },
      { n: 3, f: 'Landfill vs incineration of waste polymers', b: 'Landfill: cheap, no sorting; but uses land, and polyalkenes last a very long time.\nIncineration: reduces volume, heat can generate electricity; but releases CO₂, and toxic gases such as HCl from chlorinated polymers must be removed.' },
      { n: 4, f: 'Advantages and disadvantages of recycling polymers', b: 'Conserves crude oil and energy, and reduces landfill. But collection, sorting by polymer type and cleaning cost money and energy, and mechanically recycled material is lower quality.' },
    ]),

    // 31 Amino acids and proteins (3.3.13)
    ...sub(`${P}amino-acids-and-proteins`, `${P}3-3-13-1`, '3.3.13.1', [
      { n: 1, f: 'Amino acid (general structure)', b: 'A molecule with –NH₂ and –COOH on the same carbon: H₂N–CH(R)–COOH.' },
      { n: 2, f: 'Zwitterion', b: 'A species with both a positive and a negative charge in the same molecule, neutral overall: ⁺H₃N–CH(R)–COO⁻.' },
      { n: 3, f: 'Form of an amino acid (simple R) in excess acid and in excess alkali', b: 'Excess acid: ⁺H₃N–CH(R)–COOH (charge +1).\nExcess alkali: H₂N–CH(R)–COO⁻ (charge −1).' },
      { n: 4, f: 'Formula and charge of glutamic acid, HOOC–CH₂CH₂–CH(NH₂)–COOH, in excess NaOH', b: '⁻OOC–CH₂CH₂–CH(NH₂)–COO⁻, charge −2 (the side-chain –COOH also reacts).' },
    ]),
    ...sub(`${P}amino-acids-and-proteins`, `${P}3-3-13-2`, '3.3.13.2', [
      { n: 1, f: 'Peptide link and how it forms', b: '–CO–NH–, formed by condensation of –COOH with –NH₂, eliminating water. n amino acids give (n − 1) links and lose (n − 1) H₂O.' },
      { n: 2, f: 'Primary, secondary and tertiary structure of a protein', b: 'Primary: sequence of amino acids.\nSecondary: α-helix or β-pleated sheet, held by hydrogen bonds between backbone C=O and N–H.\nTertiary: overall 3-D folding, held by side-chain interactions such as hydrogen bonds and S–S bonds.' },
      { n: 3, f: 'Disulfide (S–S) bonds in proteins', b: 'Covalent –S–S– links formed by oxidation of the –SH groups of two cysteine residues. They help fix the tertiary structure.' },
      { n: 4, f: 'How are amino acids from a hydrolysed protein identified by TLC?', b: 'Spot the hydrolysate and standards on a pencil baseline; run in a lidded tank; locate spots with ninhydrin (purple) or UV light on a fluorescent plate; compare Rf values with the standards.' },
      { n: 5, f: 'Rf value', b: 'Distance moved by the spot ÷ distance moved by the solvent front, both from the baseline. Example: 3.9 cm ÷ 6.5 cm = 0.60.' },
    ]),
    ...sub(`${P}amino-acids-and-proteins`, `${P}3-3-13-3`, '3.3.13.3', [
      { n: 1, f: 'Structure of cisplatin', b: 'cis-[Pt(NH₃)₂Cl₂]: square planar, platinum(II), with the two Cl⁻ ligands next to each other (at 90°).' },
      { n: 2, f: 'How does cisplatin act as an anticancer drug?', b: 'By ligand replacement: Cl⁻ ligands are replaced by nitrogen atoms in DNA, forming co-ordinate bonds to Pt. The distorted DNA cannot be copied, so the cell cannot divide.' },
      { n: 3, f: 'Adverse effects of cisplatin, and why they happen', b: 'It is not selective: it also binds to DNA in healthy cells. Side effects include kidney damage and hearing loss. Society weighs the benefits of a drug against its harm.' },
    ]),

    // 32 Organic synthesis (3.3.14; no subtopics)
    ...topicOnly(`${P}organic-synthesis`, 32, [
      { n: 1, f: 'Why do chemists aim for processes with no solvent?', b: 'No energy or raw materials to make, transport and remove the solvent (often by distillation), no solvent waste, and no flammable or toxic vapour to leak.' },
      { n: 2, f: 'Why do chemists aim for non-hazardous starting materials?', b: 'Less cost for storage, transport, protective equipment and emergency plans, and lower risk to workers, neighbours and the environment. Example of a hazardous one: KCN (very toxic; acid releases HCN).' },
      { n: 3, f: 'Why is a synthesis with fewer steps and a high atom economy preferred?', b: 'Every step loses some product and needs its own reagents, energy, separation and waste disposal. High atom economy means most reactant atoms end up in the product, so less waste.' },
      { n: 4, f: 'A route has three steps with yields of 92%, 88% and 61%. Overall yield?', b: '0.92 × 0.88 × 0.61 = 0.494, so 49.4%. Multiply the step yields as decimals.' },
      { n: 5, f: 'The four 9620 reactions (other than polymerisation) that form a new C–C bond', b: 'Halogenoalkane + KCN (nitrile); aldehyde or ketone + KCN then dilute acid (hydroxynitrile); Friedel–Crafts acylation; Friedel–Crafts alkylation.' },
      { n: 6, f: 'Halogenoalkane with NaOH(aq) vs with KOH in ethanol', b: 'Aqueous, warm: substitution, giving an alcohol.\nEthanolic, hot: elimination, giving an alkene.' },
      { n: 7, f: 'Two steps to make phenylamine from benzene', b: '1. Concentrated HNO₃ and concentrated H₂SO₄ → nitrobenzene.\n2. Reduce (e.g. tin and concentrated HCl, reflux, then NaOH) → phenylamine.' },
      { n: 8, f: 'Converting methylbenzene into phenylmethanol, C₆H₅CH₂OH', b: '1. Cl₂ in UV light → (chloromethyl)benzene (side-chain substitution).\n2. Warm NaOH(aq) → phenylmethanol.' },
      { n: 9, f: 'Why does benzene + Cl₂ (UV) then NaOH(aq) not give an alcohol?', b: 'In UV light chlorine adds to benzene (C₆H₆Cl₆), not chlorobenzene. And a chlorine bonded directly to a benzene ring is not substituted by hydroxide.' },
      { n: 10, f: 'Reagent and conditions: secondary alcohol from a ketone, and ketone from a secondary alcohol', b: 'Ketone → alcohol: NaBH₄ in aqueous solution.\nAlcohol → ketone: acidified potassium dichromate(VI), heat under reflux.' },
    ]),

    // 33 Nuclear magnetic resonance spectroscopy (3.3.15)
    ...sub(`${P}nuclear-magnetic-resonance-spectroscopy`, `${P}3-3-15-1`, '3.3.15.1', [
      { n: 1, f: 'Why is TMS, Si(CH₃)₄, used as the standard in NMR?', b: 'It gives one intense signal (12 equivalent H, 4 equivalent C) at the low-δ end, clear of nearly all organic signals. It is inert and volatile, so it can be removed and the sample recovered.' },
      { n: 2, f: 'Why are ¹H NMR samples dissolved in CDCl₃ or CCl₄, not CHCl₃?', b: 'CDCl₃ (deuterium, ²H) and CCl₄ (no H) give no ¹H signal. The ¹H in CHCl₃ would give a huge signal that swamps the sample’s.' },
      { n: 3, f: 'What does an integrated ¹H NMR spectrum show?', b: 'The relative areas of the signals: the ratio of H atoms in each environment. Scale the simplest ratio to the molecular formula.' },
      { n: 4, f: 'The n+1 rule', b: 'A ¹H signal is split into n + 1 peaks by n non-equivalent H on the adjacent carbon(s): 0 → singlet, 1 → doublet, 2 → triplet, 3 → quartet.' },
      { n: 5, f: '2H quartet + 3H triplet (¹H NMR)', b: 'An ethyl group, CH₃CH₂–.', src: NMR },
      { n: 6, f: '9H singlet (¹H NMR)', b: '(CH₃)₃C–.', src: NMR },
      { n: 7, f: '¹³C vs ¹H NMR', b: '¹³C shows carbon environments with no splitting; ¹H gives integration and splitting.', src: NMR },
      { n: 8, f: 'What affects chemical shift (δ)?', b: 'The molecular environment: an electronegative atom (O, Cl, Br) or a C=O group close to the nucleus gives a larger δ. Splitting, by contrast, counts H on the neighbouring carbons.' },
      { n: 9, f: 'How many ¹³C lines and ¹H signals does butanedione, CH₃COCOCH₃, give?', b: '2 ¹³C lines (C=O and CH₃, by symmetry) and 1 ¹H signal (a singlet: all 6 H equivalent).' },
    ]),

    // 34 Chromatography (3.3.16)
    ...sub(`${P}chromatography`, `${P}3-3-16-1`, '3.3.16.1', [
      { n: 1, f: 'What decides how fast a component moves in chromatography?', b: 'The balance between its solubility in the moving phase and its retention by the stationary phase.' },
      { n: 2, f: 'Moving and stationary phases in TLC, column chromatography and GC', b: 'TLC: solvent rises up a thin solid layer on a plate.\nCC: solvent runs down a column packed with solid.\nGC: a gas carries the sample through a column of solid (which may be liquid-coated), at high temperature.' },
      { n: 3, f: 'Retention time (GC)', b: 'The time from injecting the sample into the column to a component reaching the detector.' },
      { n: 4, f: 'How are components identified by TLC or GC?', b: 'Compare Rf values or retention times with standards run under the same conditions (same plate and solvent, or same column, temperature and gas flow).' },
      { n: 5, f: 'GC-MS', b: 'The separated components leave the GC column one at a time and pass straight into a mass spectrometer, which gives a spectrum of each: the molecular ion gives Mr, and a precise m/z fixes the formula.' },
      { n: 6, f: 'TLC technique: why a pencil baseline, solvent below the baseline and a lid?', b: 'Pencil does not dissolve (ink would run). Solvent below the baseline so spots are carried up, not dissolved away. The lid keeps the air saturated with solvent vapour so the plate does not dry.' },
      { n: 7, f: 'Spot centre 3.8 cm and solvent front 5.0 cm above the baseline. Rf?', b: 'Rf = 3.8 ÷ 5.0 = 0.76 (no units; always between 0 and 1).' },
    ]),
  ],
};
