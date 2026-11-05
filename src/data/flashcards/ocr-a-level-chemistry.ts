/**
 * D-438 -- flashcards for OCR A Level Chemistry A H432
 * (Version 3.1 (May 2026), for first assessment in 2017).
 *
 * One block per subtopic (the specification's X.Y.Z sections), in syllabus order.
 * Card ids are `<subtopic number>-<n>` and are permanent (browser progress is
 * keyed by them): add a new card with the next unused n, never renumber.
 *
 * The course is untiered, so no card carries an upper-tier mark.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs H432); origin 'revision-notes'.
 *
 * Written from Marlbridge's own H432 revision notes and study guides, using their
 * terminology (London forces, lattice enthalpy as formation, OCR IR ranges).
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

const T1 = 'ocr-a-level-chemistry-development-of-practical-skills-in-chemistry';
const T2 = 'ocr-a-level-chemistry-foundations-in-chemistry';
const T3 = 'ocr-a-level-chemistry-periodic-table-and-energy';
const T4 = 'ocr-a-level-chemistry-core-organic-chemistry';
const T5 = 'ocr-a-level-chemistry-physical-chemistry-and-transition-elements';
const T6 = 'ocr-a-level-chemistry-organic-chemistry-and-analysis';
const s = (code: string) => `ocr-a-level-chemistry-${code}`;

const ALKANE = 'ocr-a-level-chemistry-alkanes-revision-notes';
const ELSTR = 'ocr-a-level-chemistry-electron-structure-revision-notes';
const ENTROPY = 'ocr-a-level-chemistry-enthalpy-and-entropy-revision-notes';
const ENTH = 'ocr-a-level-chemistry-enthalpy-changes-revision-notes';
const HOWFAR = 'ocr-a-level-chemistry-how-far-revision-notes';
const LATTICE = 'ocr-a-level-chemistry-lattice-enthalpy-revision-notes';
const PERIOD = 'ocr-a-level-chemistry-periodicity-revision-notes';

export const DECK_OCR_A_LEVEL_CHEMISTRY: FlashcardDeck = {
  boardSlug: 'ocr',
  qualificationSlug: 'a-level',
  subjectSlug: 'chemistry',
  syllabusCode: 'H432',
  syllabusSeries: 'Version 3.1 (May 2026), for first assessment in 2017',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'nouman-ahmed', reviewedOn: '2026-11-05' },
  cards: [
    // Module 1 Development of practical skills in chemistry
    ...sub(T1, s('1-1-1'), '1.1.1', [
      { n: 1, f: 'Independent, dependent and controlled variables', b: 'Independent: the one you deliberately change.\nDependent: the one you measure.\nControlled: any other variable that could affect the result, kept constant.' },
      { n: 2, f: 'Steps in writing a practical plan', b: 'Name the independent and dependent variables with units; choose apparatus and say why; choose quantities to fit the apparatus; name the controlled variables and how each is controlled; describe measurements and repeats; say how results are processed.' },
      { n: 3, f: 'A plan expects about 80 cm³ of gas in a 50 cm³ gas syringe. What is wrong, and how is it fixed?', b: 'The reading would overflow the apparatus, so the method is not appropriate. Use a 100 cm³ syringe or less reactant.' },
      { n: 4, f: 'Three checks that a method is appropriate', b: 'Does it measure the right quantity? Are readings within range and large enough for a small percentage uncertainty? Is anything lost, gained or side-reacting?' },
    ]),
    ...sub(T1, s('1-1-2'), '1.1.2', [
      { n: 1, f: 'How should column headings and readings appear in a results table?', b: 'Headings as quantity / unit, with no units in the body. Independent variable in the first column. The same number of decimal places down a column, matching the resolution.' },
      { n: 2, f: 'To how many decimal places is a burette reading recorded?', b: 'Two decimal places, ending in 0 or 5 (e.g. 23.45 cm³).' },
      { n: 3, f: 'Units of Kc = [C]² ÷ ([A][B]³)', b: '(mol dm⁻³)² ÷ (mol dm⁻³)⁴ = (mol dm⁻³)⁻² = dm⁶ mol⁻².' },
      { n: 4, f: 'Why rinse a burette with the titrant and a pipette with the solution it delivers?', b: 'So that any water left inside does not dilute the solution, which would change its concentration.' },
    ]),
    ...sub(T1, s('1-1-3'), '1.1.3', [
      { n: 1, f: '1.37 g NaCl (M = 58.44) made up to 250.0 cm³. Concentration to the correct significant figures?', b: '1.37 ÷ 58.44 ÷ 0.2500 = 0.09377…; the mass has 3 s.f., so 0.0938 mol dm⁻³.' },
      { n: 2, f: 'How do you find the gradient of a curve at a point?', b: 'Draw a tangent at that point, then gradient = Δy ÷ Δx using two well-separated points on the tangent.' },
      { n: 3, f: 'Graph-plotting rules', b: 'Independent variable on the x-axis; axes labelled quantity / unit; points fill more than half the grid; scale steps of 1, 2 or 5; small crosses; one thin best-fit line or smooth curve.' },
      { n: 4, f: 'Finding an intercept when the axis does not start at zero', b: 'Use c = y − mx with a point on the line; do not read it off the axis.' },
    ]),
    ...sub(T1, s('1-1-4'), '1.1.4', [
      { n: 1, f: 'Accurate vs precise', b: 'Accurate: close to the true or accepted value.\nPrecise: repeated values are close to one another.' },
      { n: 2, f: 'Random vs systematic error', b: 'Random: unpredictable scatter either side; reduced by repeating and averaging.\nSystematic: the same direction every time; repeats do not remove it.' },
      { n: 3, f: 'Percentage uncertainty of a temperature change of 6.0 °C read on a thermometer to ±0.5 °C', b: 'Two readings, so ±1.0 °C. 1.0 ÷ 6.0 × 100 = 17%.' },
      { n: 4, f: 'Percentage uncertainty for a quantity calculated by multiplying or dividing measurements', b: 'Add the percentage uncertainties of the measured quantities.' },
      { n: 5, f: 'Percentage error is larger than the total percentage uncertainty. What does that show?', b: 'There is a systematic limitation in the method, not just measurement uncertainty. Name it, its direction of effect, and a matching improvement.' },
    ]),
    ...sub(T1, s('1-2-1'), '1.2.1', [
      { n: 1, f: 'What does the Practical Endorsement require?', b: 'A minimum of 12 assessed practical activities covering PAG1 to PAG12, with every 1.2.1 skill and 1.2.2 technique shown. Teacher assessed and reported separately as Pass or Not Classified.' },
      { n: 2, f: 'Hazard vs risk', b: 'Hazard: something that could cause harm.\nRisk: the chance it does cause harm in your method. The control measure must match the named hazard.' },
      { n: 3, f: 'What are the five CPAC areas?', b: 'Follows written procedures; applies investigative approaches; works safely; makes and records observations; researches, references and reports.' },
      { n: 4, f: 'What should a source citation include?', b: 'Author, title, date, and for a website the URL and access date.' },
    ]),
    ...sub(T1, s('1-2-2'), '1.2.2', [
      { n: 1, f: 'How do you make up a standard solution?', b: 'Weigh the solid by difference, dissolve in distilled water in a beaker, transfer to a volumetric flask with washings, make up so the bottom of the meniscus is on the mark at eye level, stopper and invert.' },
      { n: 2, f: 'Concordant titres, and which titres to average', b: 'Titres within 0.10 cm³ of each other. Average only the concordant titres, never the rough titre.' },
      { n: 3, f: 'Distillation: where does the thermometer bulb go?', b: 'Level with the side arm of the still head, so it reads the temperature of the vapour being collected.' },
      { n: 4, f: 'How do you recrystallise an impure solid?', b: 'Dissolve in the minimum hot solvent, hot-filter (fluted paper) if needed, cool slowly then in ice, filter under reduced pressure, wash with ice-cold solvent, dry.' },
      { n: 5, f: 'Melting point of a pure vs an impure solid', b: 'Pure: sharp, at the known value.\nImpure: lower and over a range.' },
      { n: 6, f: 'Why heat flammable organic liquids with a water bath or heating mantle?', b: 'There is no naked flame to ignite the vapour.' },
    ]),

    // Module 2 Foundations in chemistry
    ...sub(T2, s('2-1-1'), '2.1.1', [
      { n: 1, f: 'Isotopes', b: 'Atoms of the same element with the same proton number but different numbers of neutrons, so different masses. They have the same chemistry because the electron arrangement is the same.' },
      { n: 2, f: 'Relative isotopic mass', b: 'The mass of an atom of an isotope compared with 1/12th the mass of an atom of carbon-12.' },
      { n: 3, f: 'Relative atomic mass', b: 'The weighted mean mass of an atom of the element, weighted by the abundance of each isotope as it occurs, compared with 1/12th the mass of an atom of carbon-12.' },
      { n: 4, f: 'Protons, neutrons and electrons in ⁵⁶Fe³⁺ (atomic number 26)', b: '26 protons, 30 neutrons, 23 electrons.' },
      { n: 5, f: 'Peaks at m/z 46, 47 and 48 with abundances 12.0%, 28.0% and 60.0%. Calculate Ar.', b: '(46 × 12.0 + 47 × 28.0 + 48 × 60.0) ÷ 100 = 4748 ÷ 100 = 47.5 (3 s.f.)' },
      { n: 6, f: 'Relative molecular mass vs relative formula mass', b: 'Relative molecular mass, Mr: simple molecules (e.g. SO₂).\nRelative formula mass: giant structures, including ionic compounds (e.g. Ca(NO₃)₂).' },
    ]),
    ...sub(T2, s('2-1-2'), '2.1.2', [
      { n: 1, f: 'Formulae of the nitrate, carbonate, sulfate, hydroxide and ammonium ions', b: 'NO₃⁻, CO₃²⁻, SO₄²⁻, OH⁻, NH₄⁺.' },
      { n: 2, f: 'Charges on simple ions of Groups 1, 2, 13, 15, 16 and 17', b: '1+, 2+, 3+, 3−, 2−, 1−.' },
      { n: 3, f: 'Formulae of magnesium nitride and ammonium sulfate', b: 'Mg₃N₂ (three Mg²⁺ balance two N³⁻).\n(NH₄)₂SO₄ (two NH₄⁺ balance one SO₄²⁻).' },
      { n: 4, f: 'Ionic equation for aqueous barium chloride + aqueous sodium sulfate', b: 'Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s). Na⁺ and Cl⁻ are spectator ions.' },
      { n: 5, f: 'How do you balance an equation without changing a substance?', b: 'Change only the coefficients in front of formulae, never the subscripts: a subscript changes the substance.' },
    ]),
    ...sub(T2, s('2-1-3'), '2.1.3', [
      { n: 1, f: 'Amount of substance relationships (mass, solution, gas at RTP, particles)', b: 'n = m ÷ M\nn = c × V (V in dm³)\nn = V ÷ 24.0 (V in dm³ at RTP)\nn = N ÷ Nᴀ (Nᴀ = 6.02 × 10²³ mol⁻¹)' },
      { n: 2, f: 'Ideal gas equation and its units', b: 'pV = nRT, with p in Pa, V in m³, T in K and R = 8.314 J mol⁻¹ K⁻¹.' },
      { n: 3, f: 'A gas occupies 250 cm³ at 100 kPa and 298 K and has mass 0.44 g. Find Mr.', b: 'n = (1.00 × 10⁵ × 2.50 × 10⁻⁴) ÷ (8.314 × 298) = 1.01 × 10⁻² mol; Mr = 0.44 ÷ 0.0101 ≈ 44.' },
      { n: 4, f: 'Percentage yield vs atom economy', b: 'Yield = actual moles ÷ theoretical moles × 100 (what was obtained).\nAtom economy = Mr of desired product ÷ sum of Mr of all reactants × 100 (what share of reactant mass ends up in the product).' },
      { n: 5, f: 'How do you find the limiting reagent?', b: 'Convert both reactants to moles and divide each by its coefficient in the equation; the smaller value is the limiting reagent.' },
      { n: 6, f: 'Finding x in a hydrated salt, salt·xH₂O', b: 'Find the moles of anhydrous salt and the moles of water lost on heating, then take the simplest whole-number ratio.' },
    ]),
    ...sub(T2, s('2-1-4'), '2.1.4', [
      { n: 1, f: 'Strong acid vs weak acid', b: 'A strong acid is almost completely dissociated in solution (HCl → H⁺ + Cl⁻). A weak acid is only partially dissociated (CH₃COOH ⇌ CH₃COO⁻ + H⁺).' },
      { n: 2, f: 'Base vs alkali', b: 'A base neutralises an acid. An alkali is a base that dissolves in water, releasing OH⁻ ions. All alkalis are bases; CuO and CaCO₃ are bases but not alkalis.' },
      { n: 3, f: 'Ionic equation for neutralisation of an acid by an alkali', b: 'H⁺(aq) + OH⁻(aq) → H₂O(l)' },
      { n: 4, f: 'Why does ammonia + an acid give no water?', b: 'NH₃ accepts H⁺ to form NH₄⁺, giving an ammonium salt only, e.g. NH₃ + HCl → NH₄Cl.' },
      { n: 5, f: 'Mass of Na₂CO₃ (M = 106.0) for 250.0 cm³ of a 0.0500 mol dm⁻³ standard solution', b: '0.2500 × 0.0500 = 0.01250 mol; 0.01250 × 106.0 = 1.325 g' },
      { n: 6, f: 'Back titration: when and how?', b: 'For an insoluble or slow-reacting base. Add a known excess of acid, titrate the leftover acid with standard alkali; moles reacting with the sample = moles added − moles left.' },
    ]),
    ...sub(T2, s('2-1-5'), '2.1.5', [
      { n: 1, f: 'Oxidation and reduction in terms of electrons and oxidation number', b: 'Oxidation: loss of electrons; oxidation number goes up.\nReduction: gain of electrons; oxidation number goes down.' },
      { n: 2, f: 'Oxidation number of H in KH, and of O in Li₂O₂', b: 'H in a metal hydride: −1.\nO in a peroxide: −1.' },
      { n: 3, f: 'Oxidation number of P in P₄O₆', b: '4x + 6(−2) = 0, so x = +3 per P atom.' },
      { n: 4, f: 'Formulae of the chlorate(I) and chlorate(V) ions, and sulfate(IV)', b: 'Chlorate(I): ClO⁻. Chlorate(V): ClO₃⁻. Sulfate(IV): SO₃²⁻.' },
      { n: 5, f: 'Balanced equation: aluminium with ethanoic acid', b: '2Al(s) + 6CH₃COOH(aq) → 2(CH₃COO)₃Al(aq) + 3H₂(g). Al is oxidised (0 → +3); H is reduced (+1 → 0).' },
      { n: 6, f: 'Iron with a dilute acid: iron(II) or iron(III) salt?', b: 'Iron(II), e.g. Fe + 2HCl → FeCl₂ + H₂.' },
    ]),
    ...sub(T2, s('2-2-1'), '2.2.1', [
      { n: 1, f: 'Atomic orbital', b: 'A region around the nucleus that can hold up to two electrons, with opposite spins.' },
      { n: 2, f: 'Shapes of s- and p-orbitals', b: 's: a sphere centred on the nucleus.\np: a dumbbell with two lobes either side of the nucleus; three p-orbitals at 90° to each other.' },
      { n: 3, f: 'Maximum number of electrons in shells n = 1 to 4', b: '2, 8, 18 and 32 (2n² electrons in n² orbitals).' },
      { n: 4, f: 'Order of filling sub-shells up to 4p', b: '1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p. Electrons occupy orbitals singly before pairing.' },
      { n: 5, f: 'Isoelectronic', b: 'Having the same electron configuration (for example Mg²⁺, Ne and F⁻).', src: ELSTR },
      { n: 6, f: 'Electron configuration of Ge²⁺ (Z = 32)', b: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s². The two 4p electrons are removed; 3d is never removed from a p-block ion.' },
    ]),
    ...sub(T2, s('2-2-2'), '2.2.2', [
      { n: 1, f: 'Covalent bond', b: 'The strong electrostatic attraction between a shared pair of electrons and the nuclei of the bonded atoms.' },
      { n: 2, f: 'Dative covalent (coordinate) bond', b: 'A covalent bond in which the shared pair is supplied entirely by one of the two atoms. Example: the third pair in CO comes from oxygen.' },
      { n: 3, f: 'Shapes and angles: NH₃ and H₂O', b: 'NH₃: pyramidal, 107° (3 bonding pairs, 1 lone pair).\nH₂O: non-linear, 104.5° (2 bonding pairs, 2 lone pairs). Each lone pair reduces the angle by about 2.5°.' },
      { n: 4, f: 'Why is CO₂ non-polar although its bonds are polar?', b: 'It is linear, so the two bond dipoles are equal and opposite and cancel.' },
      { n: 5, f: 'Van der Waals’ forces vs London forces', b: 'Van der Waals’ forces cover both permanent dipole–dipole and induced dipole–dipole interactions. London (dispersion) forces are induced dipole–dipole interactions only.' },
      { n: 6, f: 'Why does water have a higher boiling point than predicted from the other Group 16 hydrides?', b: 'Hydrogen bonds between H₂O molecules must be broken as well as London forces, which needs more energy.' },
      { n: 7, f: 'Properties of a simple molecular substance', b: 'Low melting and boiling points (only intermolecular forces are overcome); no conductivity in any state (no mobile charged particles); solubility follows "like dissolves like".' },
    ]),

    // Module 3 Periodic table and energy
    ...sub(T3, s('3-1-1'), '3.1.1', [
      { n: 1, f: 'First ionisation energy', b: 'The energy required to remove 1 mol of electrons from 1 mol of gaseous atoms to form 1 mol of gaseous 1+ ions. X(g) → X⁺(g) + e⁻' },
      { n: 2, f: 'Why is there a small fall in first ionisation energy from N to O?', b: 'In oxygen the electron is removed from a 2p orbital that holds a pair, and repulsion between the paired electrons makes it easier to remove.' },
      { n: 3, f: 'Why is there a small fall in first ionisation energy from Be to B (or Mg to Al)?', b: 'The electron is removed from a p sub-shell, which is higher in energy than the s sub-shell.' },
      { n: 4, f: 'How did Mendeleev’s table gain acceptance?', b: 'He grouped elements by properties, left gaps and predicted missing elements; the discovery of germanium (1886), matching his forecast, supported the Periodic Law.' },
      { n: 5, f: 'Why does graphene conduct and why is it strong?', b: 'Delocalised electrons move along the sheet; every atom is held by strong covalent bonds across the sheet.' },
      { n: 6, f: 'Why is silicon’s melting point far above phosphorus’s?', b: 'Silicon is giant covalent, so many strong Si–Si bonds must break. Phosphorus is simple molecular P₄: only weak London forces between molecules are overcome.' },
      { n: 7, f: 'Ionisation energy equation', b: 'Gaseous atom loses an electron. Not a solid, not a gained electron.', src: PERIOD },
    ]),
    ...sub(T3, s('3-1-2'), '3.1.2', [
      { n: 1, f: 'Equation for the second ionisation energy of strontium', b: 'Sr⁺(g) → Sr²⁺(g) + e⁻' },
      { n: 2, f: 'Why does reactivity increase down Group 2?', b: 'Atomic radius and shielding increase, so nuclear attraction on the outer electrons decreases (despite more protons). The first and second ionisation energies fall, so the two outer electrons are lost more easily.' },
      { n: 3, f: 'Magnesium with steam', b: 'Mg(s) + H₂O(g) → MgO(s) + H₂(g). The product is the oxide (with cold water, Mg(OH)₂ forms very slowly).' },
      { n: 4, f: 'Group 2 oxides with water: trend in pH, and is it redox?', b: 'MO + H₂O → M(OH)₂. The hydroxides get more soluble down the group, so the solutions become more alkaline (about pH 10 for MgO to 13 or above for BaO). No oxidation numbers change: not redox.' },
      { n: 5, f: 'Mass of Mg(OH)₂ (Mr 58.3) that neutralises 25.0 cm³ of 0.400 mol dm⁻³ HCl', b: 'n(HCl) = 0.0100 mol; n(Mg(OH)₂) = 0.00500 mol; mass = 0.292 g.' },
      { n: 6, f: 'Two uses of Group 2 compounds as bases', b: 'Ca(OH)₂ neutralises acidic soil. Mg(OH)₂ (and CaCO₃) are antacids for excess stomach acid.' },
    ]),
    ...sub(T3, s('3-1-3'), '3.1.3', [
      { n: 1, f: 'Why does the boiling point increase from Cl₂ to I₂?', b: 'More electrons per molecule (34, 70, 106), so stronger London forces between molecules, which need more energy to overcome. The X–X bond stays intact.' },
      { n: 2, f: 'Colours of Cl₂, Br₂ and I₂ in water and in cyclohexane', b: 'Cl₂: pale green in both.\nBr₂: orange in both.\nI₂: brown in water, violet in cyclohexane.' },
      { n: 3, f: 'Why does halogen reactivity decrease down Group 17?', b: 'Atomic radius and shielding increase, so there is weaker nuclear attraction for an incoming electron and a 1− ion forms less easily.' },
      { n: 4, f: 'Disproportionation', b: 'Oxidation and reduction of the same element in one reaction.' },
      { n: 5, f: 'Chlorine with cold, dilute NaOH: equation and oxidation numbers', b: 'Cl₂ + 2NaOH → NaCl + NaClO + H₂O. Chlorine goes from 0 to −1 (NaCl) and 0 to +1 (NaClO, sodium chlorate(I)).' },
      { n: 6, f: 'Benefits and risks of chlorinating drinking water', b: 'Benefit: kills bacteria, preventing diseases such as cholera; a residual amount keeps water safe in the pipes.\nRisks: chlorine is toxic; chlorinated hydrocarbons can form, some suspected carcinogens.' },
      { n: 7, f: 'Silver halides: colours and solubility in ammonia', b: 'AgCl: white, soluble in dilute NH₃.\nAgBr: cream, soluble in concentrated NH₃ only.\nAgI: yellow, insoluble in both.' },
    ]),
    ...sub(T3, s('3-1-4'), '3.1.4', [
      { n: 1, f: 'Order of anion tests, and why', b: 'Carbonate, then sulfate, then halide. BaCO₃ and Ag₂SO₄ are both insoluble, so carbonate must go before Ba²⁺ is added and sulfate before Ag⁺ is added.' },
      { n: 2, f: 'Why acidify with nitric acid rather than HCl or H₂SO₄ before anion tests?', b: 'HCl adds Cl⁻ and H₂SO₄ adds SO₄²⁻, which would give false positives. Nitrate ions precipitate with none of the reagents.' },
      { n: 3, f: 'Test for sulfate ions in a sequence of tests', b: 'Add Ba(NO₃)₂(aq) (not BaCl₂, which adds chloride): a white precipitate of BaSO₄.' },
      { n: 4, f: 'Test for ammonium ions', b: 'Warm with NaOH(aq); hold damp red litmus at the mouth of the tube: it turns blue. NH₄⁺ + OH⁻ → NH₃ + H₂O' },
      { n: 5, f: 'Why must the litmus be damp in the ammonium test?', b: 'NH₃ must dissolve in water to give OH⁻ ions before the litmus responds.' },
    ]),
    ...sub(T3, s('3-2-1'), '3.2.1', [
      { n: 1, f: 'Activation energy, Ea', b: 'The minimum energy required for a reaction to take place.', src: ENTH },
      { n: 2, f: 'Standard state', b: 'The physical state of a substance under standard conditions, e.g. Br₂(l), Na(s), N₂(g).', src: ENTH },
      { n: 3, f: 'Enthalpy change of neutralisation, ΔneutH', b: 'The enthalpy change when an acid and a base react to form 1 mol of water, under standard conditions, all in standard states.' },
      { n: 4, f: 'Standard enthalpy change of combustion, ΔcH', b: 'The enthalpy change when 1 mol of a substance burns completely in oxygen, under standard conditions, all in standard states.' },
      { n: 5, f: '2.12 g LiCl (M = 42.4) dissolves in 60.0 g water; temperature rises 7.4 K (c = 4.18 J g⁻¹ K⁻¹). ΔH?', b: 'q = 60.0 × 4.18 × 7.4 = 1856 J = 1.856 kJ; n = 0.0500 mol; ΔH = −1.856 ÷ 0.0500 = −37.1 kJ mol⁻¹' },
      { n: 6, f: 'Why are experimental ΔcH values usually less exothermic than data-book values?', b: 'Heat loss to the air, heat absorbed by the can, incomplete combustion, evaporation of fuel, and non-standard conditions.' },
      { n: 7, f: 'Average vs actual bond enthalpy', b: 'The average comes from many compounds; the actual value in one molecule may be different. This is why bond enthalpy answers differ from ΔfH-based answers.', src: ENTH },
    ]),
    ...sub(T3, s('3-2-2'), '3.2.2', [
      { n: 1, f: 'How does increasing concentration or gas pressure increase the rate?', b: 'More particles per unit volume, so more frequent collisions, and more successful collisions per second. The energy of each collision is unchanged.' },
      { n: 2, f: 'How does a catalyst increase the rate?', b: 'It provides a different route with a lower activation energy, so a greater proportion of molecules have energy ≥ Ea. It is not consumed overall and ΔH is unchanged.' },
      { n: 3, f: 'Homogeneous vs heterogeneous catalyst, with examples', b: 'Homogeneous: same physical state as the reactants (H⁺ in esterification; Cl radicals in ozone breakdown).\nHeterogeneous: different physical state (Fe in ammonia production; Ni in hydrogenation).' },
      { n: 4, f: 'How do catalysts improve sustainability?', b: 'Industrial processes reach a useful rate at a lower temperature, so less energy is needed, less fossil fuel is burned and less CO₂ is emitted. Against this, some catalysts are toxic.' },
      { n: 5, f: 'Boltzmann distribution: effect of raising the temperature', b: 'The peak is lower and further right, with the same area; the Ea line stays put, and a greater proportion of molecules have energy ≥ Ea.' },
      { n: 6, f: 'Converting a gas-volume rate of 1.2 cm³ s⁻¹ to mol s⁻¹ at RTP', b: '1.2 ÷ 24 000 = 5.0 × 10⁻⁵ mol s⁻¹' },
    ]),
    ...sub(T3, s('3-2-3'), '3.2.3', [
      { n: 1, f: 'Dynamic equilibrium', b: 'In a closed system, the forward and reverse reactions run at the same rate, so no concentration in the mixture changes.' },
      { n: 2, f: '2CO(g) + O₂(g) ⇌ 2CO₂(g), forward exothermic. Effect of raising pressure and raising temperature', b: 'Pressure: shifts right (3 gas moles → 2), more CO₂.\nTemperature: shifts left (endothermic direction), less CO₂.' },
      { n: 3, f: '[Co(H₂O)₆]²⁺ + 4Cl⁻ ⇌ [CoCl₄]²⁻ + 6H₂O turns blue when warmed. What does that show?', b: 'The position shifts right on heating, so the forward reaction is endothermic. (Pink [Co(H₂O)₆]²⁺, blue [CoCl₄]²⁻.)' },
      { n: 4, f: 'Haber process compromise conditions', b: 'About 450 °C (low temperature favours yield but is too slow), about 2 × 10⁴ kPa (high pressure favours yield but is costly and a safety risk), iron catalyst; unreacted gases are recycled.' },
      { n: 5, f: '2NOCl ⇌ 2NO + Cl₂; [NOCl] = 0.250, [NO] = 0.0500, [Cl₂] = 0.0250 mol dm⁻³. Kc?', b: 'Kc = [NO]²[Cl₂] ÷ [NOCl]² = (0.0500² × 0.0250) ÷ 0.250² = 1.00 × 10⁻³' },
      { n: 6, f: 'What does the size of Kc tell you?', b: 'Kc ≫ 1: position far to the right (mostly products). Kc ≈ 1: similar amounts. Kc ≪ 1: far to the left (mostly reactants).' },
    ]),

    // Module 4 Core organic chemistry
    ...sub(T4, s('4-1-1'), '4.1.1', [
      { n: 1, f: 'Homologous series', b: 'A series of organic compounds having the same functional group, with each successive member differing by CH₂.' },
      { n: 2, f: 'Aliphatic, alicyclic and aromatic', b: 'Aliphatic: C and H in straight chains, branched chains or non-aromatic rings.\nAlicyclic: aliphatic, in non-aromatic rings.\nAromatic: contains a benzene ring.' },
      { n: 3, f: 'Name CH₃CH(OH)CH₂CHClCH₃', b: '4-chloropentan-2-ol (numbered from the end nearer the OH).' },
      { n: 4, f: 'Homolytic vs heterolytic fission', b: 'Homolytic: one electron goes to each atom, giving two radicals (Br–Br → Br• + Br•).\nHeterolytic: both electrons go to one atom, giving a cation and an anion (H–Cl → H⁺ + Cl⁻).' },
      { n: 5, f: 'A haloalkane CₙH₂ₙ₊₁Br has Mr 108.9 (Br = 79.9). Find its formula.', b: '14n + 1 + 79.9 = 108.9, so 14n = 28 and n = 2: C₂H₅Br.' },
      { n: 6, f: 'Where can a curly arrow start?', b: 'At a covalent bond, a lone pair or a negative charge. Never at an atom with no lone pair shown, or at a positive charge.' },
    ]),
    ...sub(T4, s('4-1-2'), '4.1.2', [
      { n: 1, f: 'σ-bond, and why there is free rotation in alkanes', b: 'A σ-bond forms by direct overlap of orbitals between the two bonding atoms, on the line joining the nuclei. Rotation does not change that overlap, so rotation is free.' },
      { n: 2, f: 'Why does a branched alkane boil lower than its straight-chain isomer?', b: 'Same number of electrons, but the branched molecule is more compact with fewer points of contact, so weaker London forces and less energy to overcome them.' },
      { n: 3, f: 'High bond enthalpy', b: 'C–C and C–H σ-bonds are strong and need a lot of energy to break.', src: ALKANE },
      { n: 4, f: 'Very low polarity', b: 'C and H have very similar electronegativities, so the σ-bonds have little or no dipole and nothing attracts nucleophiles or electrophiles.', src: ALKANE },
      { n: 5, f: 'Radical substitution of propane to 2-chloropropane: the two propagation steps', b: 'CH₃CH₂CH₃ + Cl• → CH₃CH•CH₃ + HCl\nCH₃CH•CH₃ + Cl₂ → CH₃CHClCH₃ + Cl•\n(Conditions: UV radiation.)' },
      { n: 6, f: 'Why is radical substitution of limited use in synthesis?', b: 'Further substitution gives di- and tri-substituted products, and substitution at different positions gives isomers, so a mixture forms.' },
      { n: 7, f: 'Why is carbon monoxide dangerous?', b: 'It is toxic because it binds to haemoglobin and reduces oxygen transport in the blood; it is colourless and odourless, so it is not noticed without a detector.' },
    ]),
    ...sub(T4, s('4-1-3'), '4.1.3', [
      { n: 1, f: 'π-bond', b: 'Sideways overlap of adjacent p-orbitals, with electron density above and below the bonding carbons. It restricts rotation about C=C.' },
      { n: 2, f: 'Cis–trans isomerism vs E/Z isomerism', b: 'E/Z: stereoisomerism from restricted rotation about C=C, with two different groups on each C=C carbon.\nCis–trans: a special case of E/Z where two of the substituent groups on each C=C carbon are the same.' },
      { n: 3, f: 'Why are alkenes more reactive than alkanes?', b: 'The π-bond has a relatively low bond enthalpy, and its exposed electrons above and below the plane attract electrophiles.' },
      { n: 4, f: 'Addition reactions of alkenes: reagents and conditions', b: 'H₂: Ni catalyst, heat → alkane.\nCl₂ or Br₂: room temperature → dihaloalkane.\nHX: room temperature → haloalkane.\nSteam: acid catalyst (H₃PO₄) → alcohol.' },
      { n: 5, f: 'Major product of 2-methylpent-2-ene with HI', b: '2-iodo-2-methylpentane, via the more stable tertiary carbocation (Markownikoff’s rule).' },
      { n: 6, f: 'Electrophile', b: 'An electron pair acceptor.' },
      { n: 7, f: 'Ways of dealing with waste polymers', b: 'Combustion for energy; use as organic feedstock for new plastics and chemicals; removing toxic products such as HCl from burning PVC; biodegradable and photodegradable polymers.' },
    ]),
    ...sub(T4, s('4-2-1'), '4.2.1', [
      { n: 1, f: 'Why do alcohols have higher boiling points than alkanes of similar Mr?', b: 'Similar London forces, plus hydrogen bonds between –OH groups, so more energy is needed to separate the molecules.' },
      { n: 2, f: 'Oxidation of a primary alcohol: aldehyde vs carboxylic acid', b: 'Aldehyde: gentle heat, distil it out as it forms.\nCarboxylic acid: excess K₂Cr₂O₇/H₂SO₄, heat under reflux.\nOrange → green in both.' },
      { n: 3, f: 'Equation: butan-1-ol oxidised under reflux with excess oxidising agent', b: 'CH₃CH₂CH₂CH₂OH + 2[O] → CH₃CH₂CH₂COOH + H₂O (butanoic acid)' },
      { n: 4, f: 'Why does a tertiary alcohol not oxidise with acidified dichromate?', b: 'There is no H atom on the C–OH carbon to remove; the solution stays orange.' },
      { n: 5, f: 'Dehydration of an alcohol: reagent and products from 2-methylheptan-2-ol', b: 'Concentrated H₃PO₄ or H₂SO₄ catalyst, heat. Gives 2-methylhept-1-ene and 2-methylhept-2-ene.' },
      { n: 6, f: 'Making a bromoalkane from an alcohol', b: 'Heat with NaBr and H₂SO₄. NaBr + H₂SO₄ → NaHSO₄ + HBr, then ROH + HBr → RBr + H₂O.' },
    ]),
    ...sub(T4, s('4-2-2'), '4.2.2', [
      { n: 1, f: 'Nucleophile', b: 'An electron pair donor (e.g. :OH⁻ or H₂O). It must have a lone pair to donate; it need not be negative.' },
      { n: 2, f: 'Hydrolysis of a haloalkane with aqueous alkali: reagent, conditions and mechanism', b: 'NaOH(aq), heat under reflux. Nucleophilic substitution: lone pair on O of OH⁻ attacks the δ+ carbon; the C–X bond breaks and X⁻ leaves. R–X + OH⁻ → R–OH + X⁻' },
      { n: 3, f: 'Why do iodoalkanes hydrolyse fastest?', b: 'The C–X bond must break. Bond enthalpy decreases from C–F to C–I, so the C–I bond needs least energy to break. Rate: C–I > C–Br > C–Cl > C–F.' },
      { n: 4, f: 'PAG7: comparing hydrolysis rates with aqueous silver nitrate in ethanol', b: 'Same temperature (water bath), volumes and chain length; time until a precipitate appears. Rate ∝ 1/time. Ethanol is a common solvent. AgI (yellow) forms fastest, AgCl (white) slowest.' },
      { n: 5, f: 'How do chlorine radicals from CFCs break down ozone?', b: 'UV breaks C–Cl homolytically, releasing Cl•.\nCl• + O₃ → ClO• + O₂\nClO• + O → Cl• + O₂\nOverall O₃ + O → 2O₂; Cl• is regenerated, so it is a catalyst.' },
      { n: 6, f: 'Source of NO radicals that also deplete ozone', b: 'High-temperature reactions of N₂ and O₂, such as in lightning and aircraft engines.' },
    ]),
    ...sub(T4, s('4-2-3'), '4.2.3', [
      { n: 1, f: 'Heating under reflux vs distillation', b: 'Reflux: vertical condenser, open top; vapour condenses and returns, so the mixture can be heated for a long time without losing volatile substances.\nDistillation: sloping condenser to a receiver; thermometer at the side arm; removes a product.' },
      { n: 2, f: 'Steps to purify an organic liquid', b: 'Separating funnel: wash with water, then NaHCO₃(aq) to remove acid (vent the CO₂); keep the organic layer; dry with anhydrous MgSO₄ or CaCl₂ until clear; decant; redistil and collect the fraction at the boiling point.' },
      { n: 3, f: 'In a separating funnel, how do you know which layer is organic?', b: 'By density: the denser liquid is at the bottom. Use the density data, not a guess.' },
      { n: 4, f: 'Washing vs drying an organic product', b: 'Washing removes water-soluble impurities such as acid or salts. Drying removes the traces of water left after washing.' },
      { n: 5, f: 'Two-stage route: haloalkane to ketone', b: 'The haloalkane must be secondary. Hydrolyse with NaOH(aq), heat under reflux, to the secondary alcohol; then oxidise with K₂Cr₂O₇/H₂SO₄ under reflux to the ketone.' },
      { n: 6, f: 'Mass of 6.00 cm³ of a liquid of density 0.785 g cm⁻³', b: '6.00 × 0.785 = 4.71 g' },
    ]),
    ...sub(T4, s('4-2-4'), '4.2.4', [
      { n: 1, f: 'What happens when a bond absorbs infrared radiation?', b: 'It vibrates more (stretches and bends). It absorbs only at the frequencies matching its own vibrations, which depend on bond strength and the masses of the atoms.' },
      { n: 2, f: 'IR: alcohol O–H vs carboxylic acid O–H (OCR typical values)', b: 'Alcohol O–H: broad, 3200–3600 cm⁻¹.\nAcid O–H: very broad, 2500–3300 cm⁻¹, together with a strong C=O at about 1700 cm⁻¹ (range 1630–1820).' },
      { n: 3, f: 'How is IR linked to global warming?', b: 'C=O, O–H and C–H bonds in CO₂, H₂O and CH₄ absorb IR emitted by the Earth’s surface and vibrate more; the energy is re-emitted in all directions, some back to the surface.' },
      { n: 4, f: 'Two real-world uses of IR spectroscopy', b: 'Monitoring gases such as CO and NO from car emissions, and breathalysers measuring ethanol in breath (used as evidence in drink-driving cases).' },
      { n: 5, f: 'Molecular ion peak vs M+1 peak', b: 'Molecular ion peak: the peak at highest m/z (ignoring M+1); gives Mr.\nM+1: a small peak one unit higher, from molecules containing a carbon-13 atom.' },
      { n: 6, f: 'Common fragment ions at m/z 15, 29 and 43', b: '15: CH₃⁺.\n29: C₂H₅⁺ or CHO⁺.\n43: C₃H₇⁺ or CH₃CO⁺.\nOnly the positive ion is detected; the radical lost gives no peak.' },
    ]),

    // Module 5 Physical chemistry and transition elements
    ...sub(T5, s('5-1-1'), '5.1.1', [
      { n: 1, f: 'Half-life, and how it shows first order', b: 'The time for the concentration of a reactant to fall to half its value. Constant successive half-lives mean first order.' },
      { n: 2, f: 'Rate constant from the half-life of a first-order reaction with t½ = 46 s', b: 'k = ln 2 ÷ t½ = 0.693 ÷ 46 = 1.51 × 10⁻² s⁻¹' },
      { n: 3, f: '[P] trebles and the rate trebles; [Q] doubles and the rate quadruples. Rate equation?', b: 'Rate = k[P][Q]² (first order in P, second order in Q).' },
      { n: 4, f: 'Units of k for overall order 2 and 3 (OCR form)', b: 'Order 2: dm³ mol⁻¹ s⁻¹.\nOrder 3: dm⁶ mol⁻² s⁻¹.' },
      { n: 5, f: 'Clock reaction: what is measured and why is it valid?', b: 'The time t for a fixed small amount of product to form; initial rate ∝ 1/t. Valid only while the reaction has not proceeded too far, so the rate stays nearly constant.' },
      { n: 6, f: 'Arrhenius plot: gradient −8.42 × 10³ K, R = 8.314 J mol⁻¹ K⁻¹. Ea?', b: 'Ea = −gradient × R = 8.42 × 10³ × 8.314 = 7.00 × 10⁴ J mol⁻¹ = 70.0 kJ mol⁻¹' },
      { n: 7, f: '2NO₂ + F₂ → 2NO₂F has rate = k[NO₂][F₂]. Suggest the rate-determining step.', b: 'NO₂ + F₂ → NO₂F + F (slow), then NO₂ + F → NO₂F (fast). One NO₂ and one F₂ react in the slow step.' },
    ]),
    ...sub(T5, s('5-1-2'), '5.1.2', [
      { n: 1, f: 'Mole fraction', b: 'x(A) = moles of A ÷ total moles of gas present. It has no units, and the values for one mixture sum to 1.', src: HOWFAR },
      { n: 2, f: 'Partial pressure', b: 'x(A) multiplied by the total pressure. Summing every gas’s partial pressure gives back the total pressure.', src: HOWFAR },
      { n: 3, f: 'Kp for CaO(s) + SO₂(g) ⇌ CaSO₃(s)', b: 'Kp = 1 ÷ p(SO₂), units kPa⁻¹. Pure solids are left out of heterogeneous expressions.' },
      { n: 4, f: 'J(g) + 3K(g) ⇌ 2L(g) in 3.00 dm³: 0.30 mol J, 0.90 mol K, 0.60 mol L. Kc?', b: '[J] = 0.100, [K] = 0.300, [L] = 0.200 mol dm⁻³. Kc = 0.200² ÷ (0.100 × 0.300³) = 14.8 dm⁶ mol⁻²' },
      { n: 5, f: 'Kc = 4.6 at 400 K and 1.9 at 500 K. Is the forward reaction exothermic or endothermic?', b: 'Exothermic: K falls as temperature rises.' },
      { n: 6, f: 'In terms of K, why does adding a reactant shift an equilibrium right?', b: 'K is fixed at that temperature. Adding reactant makes the quotient smaller than K, so the reaction goes forwards until the quotient equals K again.' },
    ]),
    ...sub(T5, s('5-1-3'), '5.1.3', [
      { n: 1, f: 'Conjugate acid–base pair', b: 'Two species that differ by one H⁺, e.g. HNO₂ and NO₂⁻.' },
      { n: 2, f: 'pH of a strong base solution: method', b: 'Find [OH⁻] (double it for a base like Sr(OH)₂), then [H⁺] = Kw ÷ [OH⁻] with Kw = 1.00 × 10⁻¹⁴ mol² dm⁻⁶, then pH = −log[H⁺].' },
      { n: 3, f: 'The two approximations for the pH of a weak acid', b: '[H⁺] = [A⁻] (H⁺ from water is negligible), and [HA] at equilibrium ≈ [HA] undissociated. Then [H⁺] = √(Ka × [HA]).' },
      { n: 4, f: 'When does the weak-acid approximation break down?', b: 'For "stronger" weak acids (large Ka), especially in dilute solution: a significant fraction dissociates, so the calculated [H⁺] is too high and the pH too low.' },
      { n: 5, f: 'Buffer solution, and the two ways to make an acid buffer', b: 'A system that minimises pH changes on addition of small amounts of an acid or a base. Made from a weak acid plus its salt, or excess weak acid plus a strong alkali.' },
      { n: 6, f: 'How does the H₂CO₃/HCO₃⁻ buffer control blood pH?', b: 'It holds plasma between pH 7.35 and 7.45. Extra H⁺ reacts with HCO₃⁻ to form H₂CO₃; extra OH⁻ removes H⁺ and H₂CO₃ dissociates to replace it.' },
      { n: 7, f: '30.0 cm³ of 0.180 mol dm⁻³ HZ (Ka 7.2 × 10⁻⁵) + 27.0 cm³ of 0.100 mol dm⁻³ NaOH. pH?', b: 'n(HZ) = 0.00540, n(OH⁻) = 0.00270 mol: half-neutralised, so [HZ] = [Z⁻] and pH = pKa = −log(7.2 × 10⁻⁵) = 4.14' },
      { n: 8, f: 'End point of a titration in terms of the indicator', b: 'The point where the indicator changes colour, when [HIn] = [In⁻]. The indicator’s range must lie within the steep section of the curve.' },
    ]),
    ...sub(T5, s('5-2-1'), '5.2.1', [
      { n: 1, f: 'Lattice enthalpy, ΔLEH (OCR definition)', b: 'The enthalpy change when 1 mol of an ionic lattice is formed from its gaseous ions under standard conditions, e.g. Li⁺(g) + I⁻(g) → LiI(s). Always exothermic.' },
      { n: 2, f: 'First ionisation energy (as a Born–Haber term)', b: 'The energy required to remove 1 mol of electrons from 1 mol of gaseous atoms, giving 1 mol of gaseous 1+ ions.', src: LATTICE },
      { n: 3, f: 'Enthalpy change of formation', b: 'The enthalpy change when 1 mol of a compound forms, under standard conditions, from its constituent elements, each in its standard state.', src: LATTICE },
      { n: 4, f: 'Lattice enthalpy of KF: ΔfH −568, ΔatH(K) +89, IE(K) +419, ΔatH(F) +79, EA(F) −328 kJ mol⁻¹', b: 'Sum of steps = 89 + 419 + 79 − 328 = +259. −568 = 259 + ΔLEH, so ΔLEH = −827 kJ mol⁻¹.' },
      { n: 5, f: 'Enthalpy change of solution from lattice and hydration enthalpies (OCR sign convention)', b: 'ΔsolH = −ΔLEH + ΣΔhydH, counting every ion. E.g. CsBr: +640 + (−276) + (−336) = +28 kJ mol⁻¹.' },
      { n: 6, f: 'Effect of ionic charge and radius on lattice and hydration enthalpies', b: 'Smaller ions or larger charges give stronger attraction, so both become more exothermic. E.g. Mg²⁺ compounds are far more exothermic than Na⁺ ones.' },
      { n: 7, f: 'Atomisation equations for bromine and iodine', b: '½Br₂(l) → Br(g)\n½I₂(s) → I(g)\nPer mole of atoms formed, from the element in its standard state.' },
    ]),
    ...sub(T5, s('5-2-2'), '5.2.2', [
      { n: 1, f: 'Entropy, S', b: 'A measure of the dispersal of energy in a system; the more disordered, the greater the entropy. Units J mol⁻¹ K⁻¹. Elements have non-zero S values.' },
      { n: 2, f: 'Predicting the sign of ΔS', b: 'Positive when solids become liquids or gases, or when the number of gas molecules increases. Negative when the number of gas molecules decreases.' },
      { n: 3, f: 'ZnCO₃ → ZnO + CO₂: ΔH = +68.8 kJ mol⁻¹, ΔS = +175.1 J mol⁻¹ K⁻¹. Feasible at 298 K?', b: 'ΔG = 68.8 − 298 × 0.1751 = +16.6 kJ mol⁻¹: not feasible. It becomes feasible above T = 68.8 ÷ 0.1751 = 393 K.' },
      { n: 4, f: 'Feasibility condition', b: 'A process is feasible when ΔG = ΔH − TΔS is negative (T in K, ΔS converted to kJ).' },
      { n: 5, f: 'Feasible versus fast', b: 'Thermodynamics versus kinetics.', src: ENTROPY },
      { n: 6, f: 'Why might a reaction with negative ΔG not be observed?', b: 'A large activation energy makes it too slow, e.g. methane in air until it is ignited.' },
    ]),
    ...sub(T5, s('5-2-3'), '5.2.3', [
      { n: 1, f: 'Standard hydrogen electrode', b: 'H₂(g) at 100 kPa over platinum, in 1 mol dm⁻³ H⁺(aq), at 298 K. E⦵ = 0.00 V by definition.' },
      { n: 2, f: 'Standard cell potential', b: 'E⦵cell = E⦵(positive electrode) − E⦵(negative electrode). Reduction takes place at the more positive half-cell.' },
      { n: 3, f: 'Half-equation: dichromate(VI) to chromium(III) in acid', b: 'Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O' },
      { n: 4, f: 'Manganate(VII) titration of Fe²⁺: conditions, end point and ratio', b: 'Excess dilute H₂SO₄ (not HCl, as Cl⁻ is oxidised); no indicator needed; end point is the first permanent pale pink. MnO₄⁻ : Fe²⁺ = 1 : 5.' },
      { n: 5, f: 'Iodine–thiosulfate titration: indicator, end point and ratio', b: 'Add starch when the iodine colour is pale yellow; end point is when the blue-black colour just disappears. I₂ : S₂O₃²⁻ = 1 : 2 (I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻).' },
      { n: 6, f: 'Why might a reaction predicted feasible by E⦵ values not happen?', b: 'The rate may be too slow (high activation energy), and real concentrations differ from standard, shifting each half-cell equilibrium.' },
      { n: 7, f: 'Fuel cell', b: 'A cell that uses energy from a fuel reacting with oxygen to create a voltage, with reactants supplied continuously. The fuel is oxidised at the negative electrode.' },
    ]),
    ...sub(T5, s('5-3-1'), '5.3.1', [
      { n: 1, f: 'Transition element', b: 'A d-block element that forms an ion with an incomplete d-sub-shell. In Period 4, Ti to Cu; Sc (Sc³⁺ 3d⁰) and Zn (Zn²⁺ 3d¹⁰) are not.' },
      { n: 2, f: 'Electron configuration of Mn²⁺ (Mn is [Ar]3d⁵4s²)', b: '[Ar]3d⁵ (1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵). The 4s electrons are removed first.' },
      { n: 3, f: 'Shapes of [Cu(H₂O)₆]²⁺, [CuCl₄]²⁻ and Pt(NH₃)₂Cl₂', b: '[Cu(H₂O)₆]²⁺: octahedral, 90°.\n[CuCl₄]²⁻: tetrahedral, 109.5°.\nPt(NH₃)₂Cl₂: square planar, 90°.' },
      { n: 4, f: 'How does cis-platin work as an anticancer drug?', b: 'Cl⁻ ligands are replaced in the cell and Pt binds to nitrogen atoms on DNA bases (often two adjacent guanines). The distorted DNA cannot be copied, so the cell cannot divide.' },
      { n: 5, f: '[Cu(H₂O)₆]²⁺ with concentrated HCl', b: '[Cu(H₂O)₆]²⁺ + 4Cl⁻ ⇌ [CuCl₄]²⁻ + 6H₂O. Blue → yellow (green in between); octahedral → tetrahedral.' },
      { n: 6, f: 'Why is CO toxic, in terms of haemoglobin?', b: 'Haemoglobin has octahedral Fe²⁺ with O₂ on the sixth site. CO substitutes for O₂, binds far more strongly and is not easily released, so less oxygen is carried.' },
      { n: 7, f: 'Cu²⁺ with iodide ions: observations and equation', b: 'A white precipitate of CuI in a brown solution (I₂). 2Cu²⁺ + 4I⁻ → 2CuI + I₂' },
      { n: 8, f: 'Which isomerism does [Ni(en)₃]²⁺ show?', b: 'Optical isomerism: it has no plane of symmetry, so it forms non-superimposable mirror images.' },
    ]),
    ...sub(T5, s('5-3-2'), '5.3.2', [
      { n: 1, f: 'Cu²⁺, Fe²⁺ and Fe³⁺ with a little NaOH(aq) or NH₃(aq)', b: 'Cu²⁺: pale blue precipitate.\nFe²⁺: green precipitate, turning orange-brown at the surface on standing.\nFe³⁺: orange-brown precipitate.' },
      { n: 2, f: 'Mn²⁺ and Cr³⁺ with a little NaOH(aq)', b: 'Mn²⁺: light brown precipitate that darkens on standing in air.\nCr³⁺: grey-green precipitate.' },
      { n: 3, f: 'Which hydroxides dissolve in excess NaOH(aq), and which in excess NH₃(aq)?', b: 'Excess NaOH: only Cr(OH)₃ (dark green [Cr(OH)₆]³⁻).\nExcess NH₃: Cr(OH)₃ (purple [Cr(NH₃)₆]³⁺) and Cu(OH)₂ (deep blue solution [Cu(NH₃)₄(H₂O)₂]²⁺).' },
      { n: 4, f: 'Fe²⁺ and Cr³⁺ solutions can both look green. How do you tell them apart?', b: 'Add excess NaOH(aq): Cr(OH)₃ dissolves to a dark green solution; Fe(OH)₂ does not dissolve.' },
      { n: 5, f: 'Why does aqueous ammonia precipitate metal hydroxides?', b: 'NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ provides hydroxide ions.' },
    ]),

    // Module 6 Organic chemistry and analysis
    ...sub(T6, s('6-1-1'), '6.1.1', [
      { n: 1, f: 'Three pieces of evidence against the Kekulé structure of benzene', b: 'All six C–C bond lengths are equal, between C–C and C=C; the enthalpy of hydrogenation is less exothermic than three times that of cyclohexene; benzene does not undergo electrophilic addition with bromine at room temperature.' },
      { n: 2, f: 'Halogenation of benzene: reagents and electrophile', b: 'Br₂ with a halogen carrier (e.g. FeBr₃ or AlBr₃), room temperature. Br₂ + FeBr₃ → Br⁺ + FeBr₄⁻. Products bromobenzene + HBr; FeBr₃ is regenerated.' },
      { n: 3, f: 'Nitration of benzene: reagents and conditions', b: 'Concentrated HNO₃ and concentrated H₂SO₄, about 50 °C. HNO₃ + H₂SO₄ → NO₂⁺ + HSO₄⁻ + H₂O. Product nitrobenzene.' },
      { n: 4, f: 'Why does phenol react with bromine water without a halogen carrier?', b: 'A lone pair from the oxygen p-orbital is partly delocalised into the ring, increasing its electron density, so the ring polarises Br₂ and is more easily attacked. White precipitate of 2,4,6-tribromophenol.' },
      { n: 5, f: 'How do NaOH(aq) and Na₂CO₃(aq) distinguish phenol from a carboxylic acid?', b: 'Both react with NaOH. Only the carboxylic acid reacts with Na₂CO₃ (effervescence); phenol does not.' },
      { n: 6, f: 'Directing effects of –OH, –NH₂ and –NO₂', b: '–OH and –NH₂ (electron-donating): direct to positions 2 and 4.\n–NO₂ (electron-withdrawing): directs to position 3.' },
      { n: 7, f: 'Phenol with dilute nitric acid', b: 'Room temperature, no H₂SO₄ needed; gives a mixture of 2-nitrophenol and 4-nitrophenol, plus water.' },
    ]),
    ...sub(T6, s('6-1-2'), '6.1.2', [
      { n: 1, f: 'Reduction of carbonyl compounds with NaBH₄', b: 'Aldehyde → primary alcohol; ketone → secondary alcohol. Nucleophilic addition of H⁻; equations use 2[H].' },
      { n: 2, f: 'HCN with carbonyl compounds: reagent and product from ethanal', b: 'NaCN(aq)/H⁺(aq). Ethanal gives 2-hydroxypropanenitrile, CH₃CH(OH)CN. It adds a carbon to the chain.' },
      { n: 3, f: 'Why is C=O attacked by nucleophiles but C=C by electrophiles?', b: 'C=O is polar (C δ+, O δ−), so nucleophiles attack the carbon. C=C is non-polar with an electron-rich π-bond, so it attracts electrophiles.' },
      { n: 4, f: '2,4-DNP test', b: 'An orange (yellow-orange) precipitate shows an aldehyde or ketone. Carboxylic acids and esters give no precipitate.' },
      { n: 5, f: 'How does a 2,4-DNP derivative identify a carbonyl compound?', b: 'Filter, recrystallise and dry the precipitate, measure its melting point, and compare with a data table.' },
      { n: 6, f: 'Tollens’ test: result and explanation', b: 'Warm in a water bath: an aldehyde gives a silver mirror; a ketone gives no change. The aldehyde is oxidised to a carboxylic acid; Ag⁺ is reduced to Ag (Ag⁺ + e⁻ → Ag).' },
      { n: 7, f: 'Mass of silver from 0.290 g of propanal (Mr 58.0) with Tollens’ reagent (Ag 107.9)', b: 'n(propanal) = 0.00500 mol; n(Ag) = 2 × 0.00500 = 0.0100 mol; mass = 1.08 g' },
    ]),
    ...sub(T6, s('6-1-3'), '6.1.3', [
      { n: 1, f: 'Why are short-chain carboxylic acids soluble in water, and why does solubility fall with chain length?', b: 'The –COOH group hydrogen bonds with water. A longer non-polar chain cannot hydrogen bond, so solubility decreases.' },
      { n: 2, f: 'Equation: ethanoic acid with potassium carbonate', b: '2CH₃COOH + K₂CO₃ → 2CH₃COOK + H₂O + CO₂' },
      { n: 3, f: 'Esterification with a carboxylic acid vs with an acid anhydride', b: 'Acid + alcohol: heat with a concentrated H₂SO₄ catalyst; reversible; water also forms.\nAnhydride + alcohol: warm; not reversible; a carboxylic acid also forms; higher yield.' },
      { n: 4, f: 'Acid vs alkaline hydrolysis of an ester', b: 'Hot dilute acid (reflux): carboxylic acid + alcohol; reversible.\nHot aqueous alkali (reflux): carboxylate salt + alcohol; goes to completion.' },
      { n: 5, f: 'Making an acyl chloride from a carboxylic acid', b: 'RCOOH + SOCl₂ → RCOCl + SO₂ + HCl, in dry conditions. Both by-products are gases, so the acyl chloride is easy to separate.' },
      { n: 6, f: 'Products of an acyl chloride with water, an alcohol, ammonia and a primary amine', b: 'Water: carboxylic acid. Alcohol (or phenol): ester. Ammonia: primary amide. Primary amine: secondary amide. HCl forms each time (as an ammonium salt with excess base).' },
      { n: 7, f: 'How is a phenyl ester made?', b: 'Phenol is not readily esterified by a carboxylic acid, so react the phenol with an acyl chloride.' },
    ]),
    ...sub(T6, s('6-2-1'), '6.2.1', [
      { n: 1, f: 'Why are amines bases?', b: 'The lone pair on the nitrogen accepts a proton (H⁺), forming a dative covalent bond.' },
      { n: 2, f: 'Salt formed from phenylamine and HCl', b: 'C₆H₅NH₃⁺Cl⁻, phenylammonium chloride. Warming with NaOH(aq) gives back the free amine.' },
      { n: 3, f: 'Primary amine from a haloalkane: reagent and conditions', b: 'Excess ammonia in ethanol, heated in a sealed tube. RX + 2NH₃ → RNH₂ + NH₄X' },
      { n: 4, f: 'Why ethanol, a sealed tube and excess ammonia?', b: 'Ethanol, not water, so OH⁻ does not form an alcohol. Sealed tube so volatile ammonia does not escape. Excess NH₃ so the primary amine is not substituted further.' },
      { n: 5, f: 'Aromatic amine from a nitroarene: reagents and equation', b: 'Tin and concentrated HCl, heat under reflux, then excess NaOH(aq). ArNO₂ + 6[H] → ArNH₂ + 2H₂O' },
      { n: 6, f: 'Why is NaOH added after reducing a nitroarene with Sn/HCl?', b: 'In concentrated HCl the amine forms as ArNH₃⁺; OH⁻ removes the extra proton to give the free amine.' },
    ]),
    ...sub(T6, s('6-2-2'), '6.2.2', [
      { n: 1, f: 'General formula of an α-amino acid', b: 'RCH(NH₂)COOH: the NH₂ and COOH groups on the same carbon.' },
      { n: 2, f: 'Which group of an amino acid reacts with alkali, with acid, and with an alcohol?', b: 'Alkali: COOH → carboxylate salt.\nAcid: NH₂ → ammonium salt.\nAlcohol with conc. H₂SO₄ catalyst: COOH → ester.' },
      { n: 3, f: 'Primary vs secondary amide', b: 'Primary: N bonded to one carbon (the C=O carbon), RCONH₂.\nSecondary: N bonded to two carbons, RCONHR′.' },
      { n: 4, f: 'Optical isomers', b: 'A pair of non-superimposable mirror images about a chiral centre (a carbon atom carrying four different atoms or groups).' },
      { n: 5, f: 'How many chiral centres in 2,4-dichloropentane, CH₃CHClCH₂CHClCH₃?', b: 'Two: C2 and C4 each carry H, Cl, CH₃ and the rest of the chain.' },
      { n: 6, f: 'Why does glycine have no optical isomers?', b: 'R = H, so its α-carbon carries two H atoms and is not a chiral centre.' },
    ]),
    ...sub(T6, s('6-2-3'), '6.2.3', [
      { n: 1, f: 'Monomers that give a polyester and a polyamide', b: 'Polyester: dicarboxylic acid (or diacyl chloride) + diol, or one hydroxycarboxylic acid.\nPolyamide: dicarboxylic acid (or diacyl chloride) + diamine, or one aminocarboxylic acid.' },
      { n: 2, f: 'Small molecule lost: diacid monomers vs diacyl chloride monomers', b: 'H₂O from –COOH; HCl from –COCl.' },
      { n: 3, f: 'Products of hydrolysing a polyamide in hot aqueous acid and in hot aqueous alkali', b: 'Acid (e.g. HCl): –COOH and –NH₃⁺ Cl⁻.\nAlkali (e.g. NaOH): –COO⁻ Na⁺ and –NH₂.' },
      { n: 4, f: 'Repeat unit from ethanedioic acid and pentane-1,5-diamine', b: '–[CO–CO–NH–(CH₂)₅–NH]–, with water lost at each link.' },
      { n: 5, f: 'How do you tell addition from condensation polymers from the chain?', b: 'An all-carbon backbone means addition. –COO– or –CONH– links in the backbone mean condensation (side-group esters or amides do not count).' },
    ]),
    ...sub(T6, s('6-2-4'), '6.2.4', [
      { n: 1, f: 'Nitrile from a haloalkane: reagent, conditions and product from 1-chlorobutane', b: 'NaCN or KCN in ethanol, reflux; nucleophilic substitution. 1-chlorobutane gives pentanenitrile, CH₃CH₂CH₂CH₂CN.' },
      { n: 2, f: 'Reduction vs acid hydrolysis of a nitrile', b: 'Reduction: H₂ with Ni catalyst → primary amine, RCH₂NH₂.\nHydrolysis: dilute acid, reflux → carboxylic acid RCOOH + NH₄⁺. Both keep the nitrile carbon.' },
      { n: 3, f: 'Friedel–Crafts alkylation of benzene: reagents and electrophile', b: 'A haloalkane with a halogen carrier such as AlCl₃, dry. R–Cl + AlCl₃ → R⁺ + AlCl₄⁻. C₆H₆ + RCl → C₆H₅R + HCl.' },
      { n: 4, f: 'Route: pentanal to 2-hydroxyhexanoic acid', b: 'NaCN(aq)/H⁺(aq) → 2-hydroxyhexanenitrile; then hydrolyse with dilute acid under reflux.' },
      { n: 5, f: 'In a cyanide mechanism, where does the curly arrow start?', b: 'At the lone pair on the carbon of :CN⁻, never at the nitrogen.' },
    ]),
    ...sub(T6, s('6-2-5'), '6.2.5', [
      { n: 1, f: 'Why does recrystallisation remove soluble impurities?', b: 'The product saturates the cold solution and crystallises; soluble impurities are too dilute to saturate it, so they stay dissolved.' },
      { n: 2, f: 'Why filter under reduced pressure rather than by gravity?', b: 'It is faster and leaves a drier solid.' },
      { n: 3, f: 'NaBH₄ vs H₂/Ni as reducing agents', b: 'NaBH₄ reduces only C=O in aldehydes and ketones. H₂/Ni reduces C=C and C≡N.' },
      { n: 4, f: 'Route: benzene to 1-phenylbutan-1-ol', b: 'Butanoyl chloride with AlCl₃ (Friedel–Crafts acylation) → C₆H₅COCH₂CH₂CH₃; then NaBH₄ → C₆H₅CH(OH)CH₂CH₂CH₃.' },
      { n: 5, f: 'Overall yield of a two-stage route with stages of 80% and 65%', b: '0.80 × 0.65 × 100 = 52.0%' },
      { n: 6, f: 'Methyl 3-hydroxybutanoate with Na₂CO₃ and with hot NaOH(aq)', b: 'Na₂CO₃: no effervescence (no COOH).\nHot NaOH(aq): the ester is hydrolysed to sodium 3-hydroxybutanoate and methanol.' },
    ]),
    ...sub(T6, s('6-3-1'), '6.3.1', [
      { n: 1, f: 'Stationary and mobile phases in TLC and GC', b: 'TLC: stationary solid (silica or alumina) on a plate; mobile solvent.\nGC: stationary high-boiling liquid on a solid support in a column; mobile unreactive carrier gas such as helium or nitrogen.' },
      { n: 2, f: 'A polar compound on a silica TLC plate: high or low Rf?', b: 'Low Rf: it is adsorbed strongly onto the silica.' },
      { n: 3, f: 'Solvent front 5.60 cm, spot centre 1.96 cm from the baseline. Rf?', b: '1.96 ÷ 5.60 = 0.35' },
      { n: 4, f: 'How is the proportion of a component found from a gas chromatogram?', b: 'Its peak area ÷ total peak area × 100 (area, not peak height). For an exact concentration, use an external calibration curve of peak area against concentration.' },
      { n: 5, f: 'Test for a haloalkane', b: 'Warm with AgNO₃(aq) in ethanol in a water bath: white AgCl, cream AgBr or yellow AgI precipitate.' },
      { n: 6, f: 'How do you tell a primary from a secondary alcohol?', b: 'Both turn acidified dichromate green. Distil off the product and test it: a silver mirror with Tollens’ (aldehyde) means primary; a ketone means secondary.' },
    ]),
    ...sub(T6, s('6-3-2'), '6.3.2', [
      { n: 1, f: 'Why is TMS used as the NMR standard?', b: 'Defined as δ = 0; its 12 equivalent H (and 4 equivalent C) give one sharp signal away from almost all sample signals; it is inert and volatile, so easily removed.' },
      { n: 2, f: 'Why use a deuterated solvent such as CDCl₃?', b: 'It contains no ¹H, so the solvent gives no signal in the proton spectrum to swamp the sample.' },
      { n: 3, f: 'What does a D₂O shake show?', b: 'O–H and N–H protons exchange with deuterium (R–OH + D₂O ⇌ R–OD + HDO), so their signal disappears on rerunning; C–H signals stay.' },
      { n: 4, f: 'Splitting patterns: (CH₃)₂CH– and a CH₂ between CH₃ and CH₂', b: '(CH₃)₂CH–: 6H doublet + 1H septet.\nCH₂ with 3 + 2 = 5 neighbouring H: a sextet.' },
      { n: 5, f: 'Carbon-13 C=O at δ 160–185 vs 190–220', b: '160–185: acid, ester or amide.\n190–220: aldehyde or ketone.' },
      { n: 6, f: 'How many carbon environments in benzene-1,4-dicarboxylic acid?', b: 'Three: the two C=O carbons, the two ring carbons bonded to COOH, and the four ring C–H carbons.' },
    ]),
  ],
};
