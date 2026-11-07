/**
 * D-444 -- flashcards for Pearson Edexcel International A Level Chemistry YCH11
 * (Issue 1, September 2017).
 *
 * One block per subtopic (Units 1, 2, 4 and 5) or per topic (Units 3 and 6,
 * which the syllabus record itemises without subtopics), in syllabus order.
 * Card ids are `<subtopic number>-<n>` or `<topic number>-<n>` and are
 * permanent (browser progress is keyed by them): add a new card with the next
 * unused n, never renumber.
 *
 * Id note: the record numbers Unit 2's first subtopic (Energetics) '6' and the
 * Unit 6 topic is also number 6, so both share the `6-<n>` id pattern. Energetics
 * cards use n = 1, 2, 3...; Unit 6 cards use n = 101, 102, 103... so no id can
 * collide. Keep to that split when adding cards.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs YCH11); origin 'revision-notes'.
 *
 * No tierScheme: the syllabus record is not tiered. Plain text only (see types.ts).
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; src?: string }

const card = (topic: string, subtopic: string | undefined, number: string, { n, f, b, src }: Spec): Flashcard => ({
  id: `${number}-${n}`,
  topic,
  ...(subtopic ? { subtopic } : {}),
  front: f,
  back: b,
  origin: src ? 'revision-notes' as const : 'authored' as const,
  ...(src ? { source: src } : {}),
});

const sub = (topic: string, subtopic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map((s) => card(topic, subtopic, number, s));

/** For a topic the syllabus record itemises without subtopics: ids are `<topic number>-<n>`. */
const topicOnly = (topic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map((s) => card(topic, undefined, number, s));

const P = 'edexcel-ial-chemistry-';
const SHAPES = `${P}shapes-of-molecules-and-metallic-bonding-revision-notes`;
const ALKANES = `${P}introductory-organic-chemistry-and-alkanes-revision-notes`;
const ENERG = `${P}energetics-revision-notes`;
const IMF = `${P}intermolecular-forces-revision-notes`;
const REDOX = `${P}redox-chemistry-revision-notes`;
const HALO = `${P}organic-principles-and-halogenoalkanes-revision-notes`;
const MSIR = `${P}mass-spectra-and-infrared-spectroscopy-revision-notes`;
const KIN = `${P}kinetics-revision-notes`;
const PH = `${P}acid-base-equilibria-ph-ka-and-kw-revision-notes`;
const BUFF = `${P}acid-base-equilibria-titration-curves-and-buffers-revision-notes`;
const ACIDS = `${P}carboxylic-acids-and-their-derivatives-revision-notes`;
const TMCAT = `${P}transition-metals-redox-and-catalysis-revision-notes`;
const PRAC1 = `${P}practical-skills-in-chemistry-i-revision-notes`;

const U1 = 'unit-1-structure-bonding-organic-chemistry-ych11';
const U2 = 'unit-2-energetics-group-chemistry-ych11';
const U4 = 'unit-4-rates-equilibria-further-organic-ych11';
const U5 = 'unit-5-transition-metals-organic-nitrogen-ych11';

export const DECK_EDEXCEL_A_LEVEL_CHEMISTRY: FlashcardDeck = {
  boardSlug: 'edexcel',
  qualificationSlug: 'a-level',
  subjectSlug: 'chemistry',
  syllabusCode: 'YCH11',
  syllabusSeries: 'Issue 1, September 2017',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'nouman-ahmed', reviewedOn: '2026-11-05' },
  cards: [
    // Unit 1 Structure, Bonding and Introduction to Organic Chemistry
    ...sub(U1, 'formulae-equations-and-amount-of-substance-ych11', '1.1', [
      { n: 1, f: 'Empirical formula vs molecular formula', b: 'Empirical: the lowest whole-number ratio of the atoms present.\nMolecular: the real number of atoms of each element in one molecule (C₂H₄ has empirical formula CH₂).' },
      { n: 2, f: 'Relative molecular mass vs relative formula mass', b: 'Both are sums of Ar values and have no units. Relative molecular mass is for simple molecular substances; relative formula mass is for compounds with giant structures, such as NaCl and SiO₂.' },
      { n: 3, f: 'The ideal gas equation, with the units it needs', b: 'pV = nRT, with p in Pa, V in m³, T in K and R = 8.31 J mol⁻¹ K⁻¹. Convert kPa × 1000, cm³ × 10⁻⁶, °C + 273.' },
      { n: 4, f: '1.06 g of sodium carbonate (M = 106.0 g mol⁻¹) is dissolved to make 100 cm³. Concentration?', b: 'n = 1.06 ÷ 106.0 = 0.0100 mol.\nc = 0.0100 ÷ 0.100 = 0.100 mol dm⁻³ (10.6 g dm⁻³).' },
      { n: 5, f: 'Atom economy (as defined in this specification)', b: 'Molar mass of the desired product ÷ sum of the molar masses of all products × 100%. It depends only on the equation; an addition reaction with one product has 100%.' },
      { n: 6, f: 'Ionic equation for an acid reacting with a carbonate, and what you see', b: 'CO₃²⁻(aq) + 2H⁺(aq) → CO₂(g) + H₂O(l). Fizzing; the gas turns limewater cloudy.' },
      { n: 7, f: 'Core Practical 1 (molar volume of a gas): two reasons the result is often low', b: 'Any two: gas escapes before the bung is fitted; gas dissolves in water if collected over water; an oxide layer on the metal; leaks at joints.' },
    ]),
    ...sub(U1, 'atomic-structure-and-the-periodic-table-ych11', '1.2', [
      { n: 1, f: 'Electrons in a positive ion and in a negative ion', b: 'A positive ion has fewer electrons than protons; a negative ion has more electrons than protons. Neutrons = mass number − atomic number.' },
      { n: 2, f: 'Why do isotopes of an element have the same chemical properties?', b: 'They have the same number of protons and so the same electron arrangement, which governs chemistry. They differ only in neutrons, so physical properties such as mass differ.' },
      { n: 3, f: 'Relative atomic mass from a mass spectrum: chlorine is 75% ³⁵Cl and 25% ³⁷Cl', b: 'Weighted mean: (35 × 75 + 37 × 25) ÷ 100 = (2625 + 925) ÷ 100 = 35.5' },
      { n: 4, f: 'How many molecular ion peaks does Cl₂ give, and at which m/z?', b: 'Three: ³⁵Cl–³⁵Cl at 70, ³⁵Cl–³⁷Cl at 72, ³⁷Cl–³⁷Cl at 74. Their heights follow the probability of each combination, so they are not equal.' },
      { n: 5, f: 'First ionisation energy', b: 'The energy needed to remove one electron from each atom in one mole of gaseous atoms, forming one mole of gaseous 1+ ions: X(g) → X⁺(g) + e⁻.' },
      { n: 6, f: 'What do successive ionisation energies show? Use magnesium as the example.', b: 'A large jump shows an electron being removed from a shell closer to the nucleus. For Mg the jump comes at the third electron: two electrons in the outer shell (shells 2, 8, 2).' },
      { n: 7, f: 'Orbitals per sub-shell and electrons each holds', b: 's: 1 orbital, 2 electrons. p: 3 orbitals, 6 electrons. d: 5 orbitals, 10 electrons. Each orbital holds two electrons of opposite spin; orbitals in a sub-shell fill singly before pairing.' },
    ]),
    ...sub(U1, 'bonding-and-structure-ych11', '1.3', [
      { n: 1, f: 'Ionic bonding', b: 'Strong net electrostatic attraction between oppositely charged ions in a giant lattice.' },
      { n: 2, f: 'Covalent bond and dative covalent bond', b: 'Covalent: strong electrostatic attraction between two nuclei and the shared pair of electrons between them.\nDative: a covalent bond where one atom supplies both electrons of the shared pair (e.g. N to H⁺ in NH₄⁺).' },
      { n: 3, f: 'What gives an ionic compound covalent character?', b: 'Polarisation: a small, highly charged cation (high polarising power) distorts the electron cloud of a large, highly charged anion (high polarisability). Covalent character: AlF₃ < AlCl₃ < AlI₃.' },
      { n: 4, f: 'Why do the radii of N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺, Al³⁺ decrease in that order?', b: 'All have 10 electrons in the same arrangement, but the number of protons rises from 7 to 13, so the electrons are pulled in more strongly.' },
      { n: 5, f: 'Shapes and bond angles of CH₄, NH₃ and H₂O', b: 'CH₄: 4 bonding pairs, tetrahedral, 109.5°.\nNH₃: 3 bonding pairs + 1 lone pair, pyramidal, about 107°.\nH₂O: 2 bonding pairs + 2 lone pairs, bent, about 104.5°. Lone pairs repel more than bonding pairs.' },
      { n: 6, f: 'Shapes of gaseous PCl₅ and SF₆', b: 'PCl₅(g): 5 bonding pairs, trigonal bipyramidal, 120° and 90°.\nSF₆: 6 bonding pairs, octahedral, 90°.' },
      { n: 7, f: 'Why is CO₂ non-polar but H₂O polar?', b: 'Both have polar bonds. CO₂ is linear and symmetrical, so the bond dipoles cancel. H₂O is bent, so they do not cancel and there is a net dipole.' },
      { n: 8, f: 'Why do metals conduct electricity?', b: 'When a potential difference is applied, the mobile delocalised electrons drift through the lattice, carrying charge.', src: SHAPES },
      { n: 9, f: 'Why are metals malleable?', b: 'Layers of ions slide while the electron sea keeps holding them, since the bonds are not between fixed pairs of atoms.', src: SHAPES },
    ]),
    ...sub(U1, 'introductory-organic-chemistry-and-alkanes-ych11', '1.4', [
      { n: 1, f: 'Hazard vs risk', b: 'The property versus the likelihood of harm. A hazard is something with the potential to cause harm; risk is the likelihood that it causes harm under the conditions of use.', src: ALKANES },
      { n: 2, f: 'Homolytic vs heterolytic fission', b: 'Radicals versus ions; half-arrows versus full arrows.', src: ALKANES },
      { n: 3, f: 'Homologous series', b: 'Members share a functional group and a general formula; neighbouring members differ by CH₂.' },
      { n: 4, f: 'Structural isomers of C₅H₁₂', b: 'Three: pentane, 2-methylbutane and 2,2-dimethylpropane.' },
      { n: 5, f: 'Free radical substitution of an alkane with chlorine: conditions and the three stages', b: 'UV light.\nInitiation: Cl₂ → 2Cl•.\nPropagation: Cl• + RH → R• + HCl; R• + Cl₂ → RCl + Cl•.\nTermination: two radicals join (e.g. Cl• + R• → RCl).' },
      { n: 6, f: 'Why is free radical substitution of limited use in synthesis?', b: 'The product can be substituted further, and termination gives side products, so a mixture forms with a low yield of any one compound.' },
      { n: 7, f: 'Cracking vs reforming', b: 'Cracking shortens chains and makes alkenes; reforming keeps the carbon count and changes shape (to branched or cyclic molecules).', src: ALKANES },
      { n: 8, f: 'Why is carbon monoxide toxic, and why is bioethanol not fully carbon-neutral?', b: 'CO binds to haemoglobin more strongly than O₂, reducing oxygen transport.\nBioethanol: the CO₂ released was taken in by photosynthesis, but farming, processing and transport add CO₂.' },
    ]),
    ...sub(U1, 'alkenes-ych11', '1.5', [
      { n: 1, f: 'σ bond vs π bond', b: 'σ: head-on overlap of orbitals on the axis between the two nuclei.\nπ: sideways overlap of p orbitals, with electron density above and below the plane. The π bond is weaker.' },
      { n: 2, f: 'Two conditions for E/Z (geometric) isomerism', b: 'A C=C, which has restricted rotation, and two different atoms or groups on each carbon of the C=C.' },
      { n: 3, f: 'How are E and Z assigned?', b: 'On each C=C carbon, the attached atom with the higher atomic number has priority. Higher-priority groups on the same side = Z; on opposite sides = E.' },
      { n: 4, f: 'Conditions for hydrogenation and hydration of an alkene', b: 'Hydrogenation: H₂, nickel catalyst, about 150 °C → alkane.\nHydration: steam, phosphoric acid catalyst, high temperature and pressure → alcohol.' },
      { n: 5, f: 'Propene + HBr: major product and why', b: '2-bromopropane. It forms via the secondary carbocation CH₃CH⁺CH₃, which is more stable than the primary one because more alkyl groups release electron density onto C⁺.' },
      { n: 6, f: 'What evidence supports a two-step (carbocation) mechanism for Br₂ adding to ethene?', b: 'In sodium chloride solution, BrCH₂CH₂Cl forms as well as BrCH₂CH₂Br: a carbocation forms first and is attacked by any available nucleophile. No ClCH₂CH₂Cl forms.' },
      { n: 7, f: 'Repeat unit of poly(chloroethene), PVC, and a problem with incinerating it', b: '–[CH₂–CHCl]ₙ– from CH₂=CHCl.\nIncineration releases HCl; it is removed by scrubbers containing a base such as calcium hydroxide.' },
    ]),

    // Unit 2 Energetics, Group Chemistry, Halogenoalkanes and Alcohols
    ...sub(U2, 'energetics-ych11', '6', [
      { n: 1, f: 'Standard conditions (energetics)', b: '100 kPa and a specified temperature, usually 298 K. Substances in their standard states. Symbol ⦵.', src: ENERG },
      { n: 2, f: 'Exothermic vs endothermic (sign of ΔH)', b: 'Exothermic: ΔH negative; surroundings get hotter.\nEndothermic: ΔH positive; surroundings get colder.' },
      { n: 3, f: 'Standard enthalpy change of formation', b: 'The enthalpy change when 1 mol of a compound is formed from its elements, under standard conditions with all substances in their standard states, e.g. Na(s) + ½Cl₂(g) → NaCl(s). It is zero for an element.' },
      { n: 4, f: 'Standard enthalpy change of neutralisation', b: 'The enthalpy change when an acid and a base react to form 1 mol of water, under standard conditions with all substances in their standard states.' },
      { n: 5, f: '25.0 cm³ of solution warms by 4.4 °C when 0.00500 mol of a metal reacts (c = 4.18 J g⁻¹ °C⁻¹). ΔH?', b: 'Energy = 25.0 × 4.18 × 4.4 = 459.8 J = 0.4598 kJ.\nΔH = −0.4598 ÷ 0.00500 = −92 kJ mol⁻¹ (negative because the temperature rose).' },
      { n: 6, f: "Hess's law, and ΔrH from formation data", b: 'The overall enthalpy change is the same whatever route is taken, if the start and end conditions match.\nΔrH = ΣΔfH(products) − ΣΔfH(reactants).' },
      { n: 7, f: 'Bond enthalpy vs mean bond enthalpy', b: 'One specific bond in one molecule vs an average over many.', src: ENERG },
      { n: 8, f: 'Why is a measured enthalpy change of combustion usually less exothermic than the data value?', b: 'Heat is lost to the air and the can, combustion is incomplete, fuel evaporates, and conditions are not standard.' },
    ]),
    ...sub(U2, 'intermolecular-forces-ych11', '7', [
      { n: 1, f: 'London force', b: 'An attraction between an instantaneous dipole in one molecule and the dipole it induces in a neighbouring molecule.', src: IMF },
      { n: 2, f: 'Hydrogen bond', b: 'An attraction between a δ+ hydrogen atom bonded to N, O or F and a lone pair on an N, O or F atom of another molecule. The X–H···Y arrangement is close to linear.', src: IMF },
      { n: 3, f: 'Why does water boil higher than HF and NH₃?', b: 'Water can form the most hydrogen bonds per molecule (2 H and 2 lone pairs). NH₃ has only one lone pair; HF has only one H. It is the number of hydrogen bonds, not the strength of each.' },
      { n: 4, f: 'Why is ice less dense than liquid water?', b: 'In ice each molecule is hydrogen bonded to four others in a tetrahedral arrangement, an open structure with empty space. On melting some hydrogen bonds break and the molecules move closer.' },
      { n: 5, f: 'Why does 2,2-dimethylpropane boil lower than pentane?', b: 'Same number of electrons, but the branched molecule is compact with less surface contact, so the London forces are weaker.' },
      { n: 6, f: 'Why does boiling temperature rise from HCl to HI?', b: 'More electrons, so stronger London forces, which outweigh the falling permanent dipole.' },
      { n: 7, f: 'Why do halogenoalkanes not dissolve well in water?', b: 'They are polar but cannot hydrogen bond with water, so the energy needed to break water’s hydrogen bonds is not repaid.' },
    ]),
    ...sub(U2, 'redox-chemistry-and-groups-1-2-and-7-ych11', '8', [
      { n: 1, f: 'Oxidation number rules: the exceptions for hydrogen and oxygen', b: 'H is +1, but −1 in metal hydrides (NaH, CaH₂).\nO is −2, but −1 in peroxides (H₂O₂, Na₂O₂) and positive with F.' },
      { n: 2, f: 'Oxidation number of Se in H₂SeO₄', b: '2(+1) + x + 4(−2) = 0, so x = +6.' },
      { n: 3, f: 'Oxidising agent versus oxidised', b: 'The oxidising agent is the species that gets reduced.', src: REDOX },
      { n: 4, f: 'Disproportionation', b: 'Atoms of one element, all in the same species, are both oxidised and reduced. Example: Cl₂ + 2NaOH → NaCl + NaClO + H₂O (Cl 0 → −1 and 0 → +1).' },
      { n: 5, f: 'Why does first ionisation energy fall down Groups 1 and 2?', b: 'An extra shell each time places the outer electron further out, with more inner-shell shielding; these outweigh the larger nuclear charge, so the attraction is weaker.' },
      { n: 6, f: 'Solubility trends down Group 2 for hydroxides and sulfates', b: 'Hydroxides become more soluble (Mg(OH)₂ least, Ba(OH)₂ most).\nSulfates become less soluble (MgSO₄ most, BaSO₄ least).' },
      { n: 7, f: 'Why do Group 2 carbonates become more thermally stable down the group?', b: 'The cation gets larger, so it is less polarising: it distorts the carbonate ion’s electron cloud less and weakens the C–O bonds less. Order: MgCO₃ < CaCO₃ < SrCO₃ < BaCO₃.' },
      { n: 8, f: 'What does heating sodium nitrate give, and what does a Group 2 nitrate give?', b: 'NaNO₃ (and KNO₃): the nitrite plus O₂ only.\nGroup 2 nitrates (and LiNO₃): the oxide + NO₂ + O₂.' },
      { n: 9, f: 'Chlorine with cold, dilute NaOH vs hot NaOH', b: 'Cold: Cl₂ + 2NaOH → NaCl + NaClO + H₂O (chlorate(I), +1).\nHot: 3Cl₂ + 6NaOH → 5NaCl + NaClO₃ + 3H₂O (chlorate(V), +5).' },
      { n: 10, f: 'Solid NaCl, NaBr and NaI with concentrated sulfuric acid: what forms?', b: 'NaCl: HCl only (steamy fumes); not redox.\nNaBr: HBr, then Br₂ + SO₂ (S +6 → +4).\nNaI: HI, then I₂ with SO₂, S and H₂S. Reducing power HCl < HBr < HI.' },
      { n: 11, f: 'Silver halide precipitates and their behaviour with ammonia', b: 'AgCl white, dissolves in dilute NH₃.\nAgBr cream, dissolves in concentrated NH₃ only.\nAgI yellow, does not dissolve.' },
      { n: 12, f: 'Colour of iodine in water and in cyclohexane', b: 'Brown in water; violet in cyclohexane (a non-polar solvent). Bromine is orange to red-brown in cyclohexane.' },
    ]),
    ...sub(U2, 'introduction-to-kinetics-and-equilibria-ych11', '9', [
      { n: 1, f: 'Activation energy', b: 'The minimum energy colliding particles need for reaction to occur.' },
      { n: 2, f: 'Maxwell-Boltzmann distribution: shape, and the effect of a higher temperature', b: 'Starts at zero, one asymmetric peak, long tail that never touches the energy axis; area = number of molecules.\nHigher T: peak lower and further right, same area, much more area beyond Ea.' },
      { n: 3, f: 'Main reason a higher temperature increases the rate', b: 'A greater proportion of collisions have energy ≥ Ea, so successful collisions are more frequent. Collision frequency rises only slightly.' },
      { n: 4, f: 'How does a catalyst appear on a Maxwell-Boltzmann diagram and on a reaction profile?', b: 'Maxwell-Boltzmann: the curve is unchanged; only the Ea mark moves left.\nProfile: a lower route, usually two humps with an intermediate in the dip; ΔH unchanged.' },
      { n: 5, f: 'Dynamic equilibrium: the two statements needed', b: 'Forward and backward rates are equal, and the concentrations of reactants and products do not change. It needs a closed system.' },
      { n: 6, f: 'Effect of a catalyst on the position of equilibrium', b: 'None: it speeds up the forward and backward reactions equally, so equilibrium is reached sooner but the yield is unchanged.' },
      { n: 7, f: 'Run A takes 50 s and run B takes 20 s. How many times faster is B?', b: 'Rate ∝ 1/t: (1/20) ÷ (1/50) = 2.5 times faster.' },
    ]),
    ...sub(U2, 'organic-chemistry-halogenoalkanes-alcohols-and-spectra-ych11', '10', [
      { n: 1, f: 'Nucleophile', b: 'Donates a lone pair of electrons to form a new covalent bond.', src: HALO },
      { n: 2, f: 'Halogenoalkane with KOH: aqueous vs ethanolic', b: 'KOH(aq), heat under reflux: OH⁻ acts as a nucleophile; substitution gives an alcohol.\nKOH in ethanol, heat under reflux: OH⁻ acts as a base; elimination gives an alkene.' },
      { n: 3, f: 'Halogenoalkane + KCN in ethanol: product', b: 'A nitrile with one more carbon atom (bromoethane → propanenitrile, CH₃CH₂CN). Heat under reflux.' },
      { n: 4, f: 'Why does hydrolysis rate follow R–I > R–Br > R–Cl?', b: 'Bond enthalpy, not polarity: C–I is the weakest bond, so it breaks most easily. C–Cl is the most polar but reacts slowest.' },
      { n: 5, f: 'Oxidising a primary alcohol to an aldehyde vs to a carboxylic acid', b: 'Both: K₂Cr₂O₇ / dilute H₂SO₄, orange → green.\nAldehyde: distil off as it forms.\nAcid: excess oxidising agent, heat under reflux.\nA tertiary alcohol does not react (stays orange).' },
      { n: 6, f: 'Test for an –OH group with PCl₅', b: 'Steamy fumes of HCl, using a dry sample: ROH + PCl₅ → RCl + POCl₃ + HCl. Positive for alcohols, carboxylic acids and water.' },
      { n: 7, f: 'Why is 50% (not fully concentrated) sulfuric acid used with KBr to brominate an alcohol?', b: 'Fully concentrated sulfuric acid oxidises the HBr to bromine, wasting the HBr.' },
      { n: 8, f: 'Molecular ion peak', b: 'Found at the largest m/z value, if you ignore the tiny M+1 peak from carbon-13. Its m/z gives Mr.', src: MSIR },
      { n: 9, f: 'Mass spectrum M⁺ patterns for one Cl and one Br', b: 'One Cl: two peaks 2 apart, heights about 3 : 1.\nOne Br: two peaks 2 apart, heights about 1 : 1.' },
      { n: 10, f: 'IR: how do the O–H absorptions of an alcohol and a carboxylic acid differ?', b: 'Alcohol: broad, about 3550–3230 cm⁻¹.\nAcid: very broad, about 3300–2500 cm⁻¹, always with a strong C=O near 1700 cm⁻¹. Hydrogen bonding makes O–H bands broad.' },
    ]),

    // Unit 3 Practical Skills in Chemistry I
    ...topicOnly('unit-3-practical-skills-in-chemistry-i-ych11', '3', [
      { n: 1, f: 'Accuracy vs precision', b: 'Tight repeats can all be wrong if a systematic error is present. Accurate: close to the true value. Precise: repeat results close to each other.', src: PRAC1 },
      { n: 2, f: 'Random error vs systematic error', b: 'Random: unpredictable scatter, reduced by repeating and averaging.\nSystematic: the same shift in every reading, not removed by repeats.' },
      { n: 3, f: 'Percentage uncertainty of a titre or a temperature change', b: 'Double the single-reading uncertainty (two readings are subtracted), then divide by the value and × 100. Add percentage uncertainties for the overall result.' },
      { n: 4, f: 'Reflux (set-up)', b: 'Vertical condenser, open at the top, anti-bumping granules, water bath or electric heater for flammable liquids.', src: PRAC1 },
      { n: 5, f: 'Distillation (set-up)', b: 'Thermometer bulb at the side arm; water into the condenser at the bottom; collect over a narrow range.', src: PRAC1 },
      { n: 6, f: 'Using a separating funnel', b: 'Stopper, invert, vent through the tap; let layers settle; drain the lower layer.', src: PRAC1 },
      { n: 7, f: 'Drying an organic liquid', b: 'Add anhydrous salt until some moves freely and the liquid is clear; decant or filter.', src: PRAC1 },
      { n: 8, f: 'Mass by difference vs taring', b: 'Weighing by difference accounts for solid left in the weighing bottle.', src: PRAC1 },
      { n: 9, f: 'Test for the ammonium ion', b: 'Warm with NaOH(aq): ammonia is given off, which turns damp red litmus blue.' },
      { n: 10, f: 'Flame test colours for Ca²⁺, Sr²⁺ and Ba²⁺', b: 'Ca²⁺ orange-red, Sr²⁺ red, Ba²⁺ pale green.' },
    ]),

    // Unit 4 Rates, Equilibria and Further Organic Chemistry
    ...sub(U4, 'kinetics-ych11', '11', [
      { n: 1, f: 'Rate equation and order of reaction', b: 'rate = k[A]ᵐ[B]ⁿ, with orders found by experiment (usually 0, 1 or 2). Order with respect to A is m; overall order is m + n.' },
      { n: 2, f: 'Units of k for zero, first and second order overall', b: 'Zero: mol dm⁻³ s⁻¹. First: s⁻¹. Second: mol⁻¹ dm³ s⁻¹.' },
      { n: 3, f: 'rate = k[A][B]; rate 3.0 × 10⁻⁴ mol dm⁻³ s⁻¹, [A] = 0.20, [B] = 0.050 mol dm⁻³. k?', b: 'k = 3.0 × 10⁻⁴ ÷ (0.20 × 0.050) = 0.030 mol⁻¹ dm³ s⁻¹' },
      { n: 4, f: 'Concentration-time and rate-concentration graphs for zero and first order', b: 'Zero order: straight line with negative gradient; rate-concentration horizontal.\nFirst order: curve with a constant half-life; rate-concentration a straight line through the origin.' },
      { n: 5, f: 'SN1 vs SN2 for halogenoalkane hydrolysis', b: 'SN1 (tertiary): rate = k[RX]; slow ionisation to a carbocation, then fast attack by OH⁻.\nSN2 (primary): rate = k[RX][OH⁻]; one step via a transition state, OH⁻ attacking opposite the halogen.' },
      { n: 6, f: 'Intermediate vs catalyst in a mechanism', b: 'Intermediate: made in one step, used in a later one. Catalyst: used in one step, regenerated later.', src: KIN },
      { n: 7, f: 'Finding Ea from an Arrhenius plot', b: 'ln k = −(Ea/R)(1/T) + ln A. Plot ln k against 1/T (T in K); gradient = −Ea/R, so Ea = −gradient × 8.31 J mol⁻¹.' },
      { n: 8, f: 'Iodination of propanone (Core Practical 9a): what does zero order in iodine tell you?', b: 'Iodine is not in the rate-determining step; it reacts after it. rate = k[CH₃COCH₃][H⁺]; H⁺ is a catalyst (regenerated).' },
      { n: 9, f: 'How does a solid (heterogeneous) catalyst work?', b: 'Reactant gases adsorb weakly onto active sites; their bonds weaken and they meet in a good orientation, so Ea falls. Products desorb and free the sites.' },
    ]),
    ...sub(U4, 'entropy-and-energetics-ych11', '12', [
      { n: 1, f: 'Entropy, and the order of entropy for the three states', b: 'A measure of disorder: the random dispersal of molecules and of energy quanta between them. S(solid) < S(liquid) < S(gas); a perfect crystal at 0 K has zero entropy.' },
      { n: 2, f: 'ΔSsurroundings and ΔStotal', b: 'ΔSsurroundings = −ΔH ÷ T (ΔH in J mol⁻¹, T in K).\nΔStotal = ΔSsystem + ΔSsurroundings. A change is feasible when ΔStotal > 0.' },
      { n: 3, f: 'ΔH = +52 kJ mol⁻¹, ΔSsystem = +130 J mol⁻¹ K⁻¹. When is the reaction feasible?', b: 'Changeover T = ΔH ÷ ΔSsystem = 52 000 ÷ 130 = 400 K. Both positive, so feasible above 400 K.' },
      { n: 4, f: 'Thermodynamic vs kinetic stability', b: 'Thermodynamically stable: ΔStotal for the change is negative, so it is not feasible.\nKinetically stable: feasible, but the activation energy is so high the rate is negligible (petrol in air).' },
      { n: 5, f: 'Lattice energy (as defined in this specification)', b: 'The enthalpy change when gaseous ions come together to form 1 mol of ionic solid, e.g. Ca²⁺(g) + 2I⁻(g) → CaI₂(s). Always negative.' },
      { n: 6, f: 'First electron affinity, and the sign of the second', b: 'First: the enthalpy change when 1 mol of gaseous atoms each gain one electron to form 1 mol of gaseous 1− ions; usually negative. The second electron affinity is always positive.' },
      { n: 7, f: 'Born-Haber: ΔfH(LiCl) −409; ΔatH(Li) +159; IE(Li) +520; ΔatH(Cl) +122; EA(Cl) −349 kJ mol⁻¹. Lattice energy?', b: 'Steps to gaseous ions: 159 + 520 + 122 − 349 = +452.\nLattice energy = −409 − 452 = −861 kJ mol⁻¹.' },
      { n: 8, f: 'Enthalpy change of solution from lattice and hydration enthalpies', b: 'ΔsolH = −(lattice energy) + Σ ΔhydH(ions). For CaI₂: 2074 + (−1616) + 2(−297) = −136 kJ mol⁻¹.' },
      { n: 9, f: 'What does an experimental lattice energy much more exothermic than the theoretical value show?', b: 'Partial covalent bonding: the cation polarises the anion, drawing electron density between the nuclei. Biggest for a small, highly charged cation with a large anion.' },
    ]),
    ...sub(U4, 'chemical-equilibria-ych11', '13', [
      { n: 1, f: 'Homogeneous vs heterogeneous equilibrium', b: 'Homogeneous: every species in one phase. Heterogeneous: species in more than one phase. Solids never appear in K expressions.' },
      { n: 2, f: 'Kc for N₂(g) + 3H₂(g) ⇌ 2NH₃(g), with units', b: 'Kc = [NH₃]² ÷ ([N₂][H₂]³). Units dm⁶ mol⁻².' },
      { n: 3, f: 'Mole fraction and partial pressure', b: 'x(A) = moles of A ÷ total moles of gas.\np(A) = x(A) × total pressure. The partial pressures add up to the total pressure.' },
      { n: 4, f: 'C₂H₄ + H₂ ⇌ C₂H₆: p(C₂H₄) 0.40, p(H₂) 0.25, p(C₂H₆) 1.10 atm. Kp?', b: 'Kp = 1.10 ÷ (0.40 × 0.25) = 11.0 atm⁻¹' },
      { n: 5, f: 'Which changes alter the value of K?', b: 'Only temperature. Concentration and pressure move the position of equilibrium; a catalyst changes neither.' },
      { n: 6, f: 'Effect of raising the temperature on K for an exothermic forward reaction', b: 'K gets smaller, and the equilibrium moves left so the composition matches the new K. (K changes first.)' },
      { n: 7, f: 'Link between ΔStotal and K', b: 'ΔStotal = R ln K (R = 8.31 J K⁻¹ mol⁻¹). A large positive ΔStotal means a very large K.' },
    ]),
    ...sub(U4, 'acid-base-equilibria-ych11', '14', [
      { n: 1, f: 'Brønsted–Lowry acid and base, and a conjugate pair', b: 'Acid: proton (H⁺) donor. Base: proton acceptor.\nA conjugate pair is two species that differ by one H⁺, e.g. HSO₄⁻/SO₄²⁻.' },
      { n: 2, f: 'Kw vs pKw', b: 'Kw = 1.00 × 10⁻¹⁴ mol² dm⁻⁶ and pKw = 14.00, both at 298 K only.', src: PH },
      { n: 3, f: 'Ka vs pKa', b: 'Larger Ka means stronger acid; smaller pKa means stronger acid.', src: PH },
      { n: 4, f: 'pH of 0.110 mol dm⁻³ weak acid with pKa 4.13', b: 'Ka = 10⁻⁴·¹³ = 7.41 × 10⁻⁵.\n[H⁺] = √(7.41 × 10⁻⁵ × 0.110) = 2.86 × 10⁻³.\npH = 2.54' },
      { n: 5, f: 'pH of 0.0215 mol dm⁻³ KOH at 298 K', b: '[H⁺] = Kw ÷ [OH⁻] = 1.00 × 10⁻¹⁴ ÷ 0.0215 = 4.65 × 10⁻¹³. pH = 12.33' },
      { n: 6, f: 'Buffer solution', b: 'A solution whose pH changes very little when a small amount of acid or alkali is added to it.', src: BUFF },
      { n: 7, f: 'How does an acidic buffer (HA and A⁻) resist added acid and added alkali?', b: 'Added H⁺: H⁺ + A⁻ → HA. Added OH⁻: OH⁻ + HA → A⁻ + H₂O.\nHA and A⁻ are present in large amounts, so the ratio [HA]/[A⁻] and so [H⁺] change only slightly.' },
      { n: 8, f: 'Half-neutralisation point', b: 'Half the equivalence volume; here [HA] = [A⁻] and pH = pKa.', src: BUFF },
      { n: 9, f: 'Choosing an indicator for weak acid–strong base and strong acid–weak base titrations', b: 'Its whole colour-change range must lie in the steep section.\nWeak acid + strong base: phenolphthalein (about 8.2–10.0).\nStrong acid + weak base: methyl orange (about 3.1–4.4).\nWeak + weak: no sharp change; use a pH meter.' },
      { n: 10, f: 'How is blood kept close to pH 7.4?', b: 'Mainly the H₂CO₃ ⇌ H⁺ + HCO₃⁻ buffer. Extra acid: H⁺ + HCO₃⁻ → H₂CO₃, removed as CO₂ through the lungs.' },
    ]),
    ...sub(U4, 'organic-chemistry-carbonyls-carboxylic-acids-and-chirality-ych11', '15', [
      { n: 1, f: 'Chiral centre, and optical isomers', b: 'A chiral centre is a carbon atom carrying four different atoms or groups. Optical isomers (enantiomers) are non-superimposable mirror images.' },
      { n: 2, f: 'Optical activity, and a racemic mixture', b: 'A single optical isomer rotates the plane of polarisation of plane-polarised monochromatic light; enantiomers rotate it by equal angles in opposite directions. A racemic mixture (equal amounts of both) shows no net rotation.' },
      { n: 3, f: 'How optical activity distinguishes SN1 from SN2', b: 'SN1: planar carbocation attacked equally from either face → racemic product, zero rotation.\nSN2: one-sided attack with inversion → a single enantiomer, non-zero rotation.' },
      { n: 4, f: 'Tests that distinguish an aldehyde from a ketone', b: 'Warm with Tollens’ reagent: aldehyde gives a silver mirror.\nWarm with Fehling’s or Benedict’s: aldehyde gives a red precipitate (Cu₂O); a ketone stays blue.\n2,4-DNPH gives a yellow-orange precipitate with both.' },
      { n: 5, f: 'Adding HCN to a carbonyl: mechanism type, why KCN is added, and the stereochemistry', b: 'Nucleophilic addition. HCN is a weak acid, so KCN supplies enough CN⁻. CN⁻ attacks the planar C=O equally from both sides, so a chiral product forms as a racemic mixture.' },
      { n: 6, f: 'Reducing aldehydes, ketones and carboxylic acids', b: 'LiAlH₄ in dry ether. Aldehyde → primary alcohol (2[H]); ketone → secondary alcohol (2[H]); carboxylic acid → primary alcohol (4[H]).' },
      { n: 7, f: 'Iodoform test: reagents, result and what it shows', b: 'Iodine with NaOH(aq), warm: pale yellow precipitate of CHI₃. Shows a CH₃CO– group (ethanal and methyl ketones), or CH₃CH(OH)–.' },
      { n: 8, f: 'Acyl chloride reactions with water, alcohols and ammonia', b: 'Water → carboxylic acid + HCl. Alcohol → ester + HCl. Concentrated ammonia (2 mol) → amide + NH₄Cl. Fast at room temperature and not reversible.' },
      { n: 9, f: 'Ester hydrolysis: acidic vs alkaline', b: 'Both heated under reflux.\nAcidic (dilute HCl or H₂SO₄): carboxylic acid + alcohol; reversible.\nAlkaline (NaOH(aq)): carboxylate salt + alcohol; goes to completion.' },
      { n: 10, f: 'Terylene', b: 'Ethane-1,2-diol + benzene-1,4-dicarboxylic acid. Repeat unit –OC–C₆H₄–COO–CH₂CH₂–O–.', src: ACIDS },
      { n: 11, f: '¹³C NMR: what does the number of peaks tell you?', b: 'The number of different carbon environments, not the number of carbons. Symmetry reduces the count.' },
      { n: 12, f: '¹H NMR: what do peak area and splitting tell you?', b: 'Relative area: the number of H atoms in that environment.\nSplitting (n + 1 rule): n non-equivalent H atoms on adjacent carbons give n + 1 lines. Equivalent H do not split each other; O–H is usually a singlet.' },
      { n: 13, f: 'HPLC vs GC', b: 'Both are column chromatography that separate by retention time.\nHPLC: liquid mobile phase under high pressure; solid particles packed in the column.\nGC: unreactive carrier gas; liquid stationary phase on a solid support. Linked to MS for identification.' },
    ]),

    // Unit 5 Transition Metals and Organic Nitrogen Chemistry
    ...sub(U5, 'redox-equilibria-ych11', '16', [
      { n: 1, f: 'Standard electrode potential, E⦵', b: 'The voltage of a half-cell measured against a standard hydrogen electrode, both under standard conditions: 298 K, 100 kPa for any gas, 1.00 mol dm⁻³ for each ion.' },
      { n: 2, f: 'Standard hydrogen electrode', b: 'Platinum coated with platinum black, H₂ at 100 kPa, H⁺(aq) at 1.00 mol dm⁻³, 298 K. E⦵ = 0.00 V by definition.' },
      { n: 3, f: 'Al³⁺/Al −1.66 V and Cu²⁺/Cu +0.34 V. Cell diagram and E⦵cell', b: 'Al(s) | Al³⁺(aq) || Cu²⁺(aq) | Cu(s).\nE⦵cell = E⦵(right) − E⦵(left) = +0.34 − (−1.66) = +2.00 V. Overall 2Al + 3Cu²⁺ → 2Al³⁺ + 3Cu.' },
      { n: 4, f: 'Why a salt bridge of potassium nitrate, and a high-resistance voltmeter?', b: 'The salt bridge completes the circuit by ion movement without mixing the solutions; nitrate forms no precipitates. The high-resistance voltmeter draws almost no current, so it reads the true emf.' },
      { n: 5, f: 'Limitations of using E⦵ to predict whether a reaction happens', b: 'E⦵ predicts thermodynamics, not rate: a feasible reaction can be too slow if its activation energy is large. Non-standard conditions change E and can reverse a prediction when E⦵cell is close to zero.' },
      { n: 6, f: 'Iron(II) with manganate(VII): ionic equation, ratio and end point', b: '5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O. Fe²⁺ : MnO₄⁻ = 5 : 1. Self-indicating: first permanent pale pink. Use dilute sulfuric acid (HCl would be oxidised to chlorine).' },
      { n: 7, f: 'Iodine–thiosulfate titration: equation, ratio and indicator', b: '2S₂O₃²⁻ + I₂ → S₄O₆²⁻ + 2I⁻. S₂O₃²⁻ : I₂ = 2 : 1. Starch added near the end: blue-black to colourless.' },
      { n: 8, f: 'Hydrogen fuel cell electrode equations with an alkaline electrolyte', b: 'Negative: H₂ + 2OH⁻ → 2H₂O + 2e⁻.\nPositive: O₂ + 2H₂O + 4e⁻ → 4OH⁻.\nOverall 2H₂ + O₂ → 2H₂O.' },
    ]),
    ...sub(U5, 'transition-metals-and-their-chemistry-ych11', '17', [
      { n: 1, f: 'Transition metal, and why scandium and zinc are not', b: 'A d-block element with at least one stable ion with incompletely filled d-orbitals. Sc forms only Sc³⁺ (d⁰) and Zn only Zn²⁺ (d¹⁰).' },
      { n: 2, f: 'Electron configurations of Cr, Cu and Fe³⁺', b: 'Cr: [Ar] 3d⁵ 4s¹. Cu: [Ar] 3d¹⁰ 4s¹.\nFe³⁺: [Ar] 3d⁵ (4s electrons are removed first).' },
      { n: 3, f: 'Ligand, and coordination number', b: 'Ligand: a molecule or ion that bonds to a metal ion by donating a lone pair (a dative bond).\nCoordination number: the total number of dative bonds to the metal ion.' },
      { n: 4, f: 'Shapes of [Fe(H₂O)₆]³⁺, [CoCl₄]²⁻ and cis-platin', b: 'Octahedral (90°), coordination number 6.\nTetrahedral (109.5°), 4: large Cl⁻ ligands.\nSquare planar (90°), 4: [Pt(NH₃)₂Cl₂] with the two Cl on the same side.' },
      { n: 5, f: 'Why are transition metal complexes coloured?', b: 'Ligands split the 3d orbitals into two levels. A d electron absorbs visible light of frequency f where ΔE = hf. The complementary colour is transmitted and seen. d⁰ and d¹⁰ ions are colourless.' },
      { n: 6, f: 'Why is carbon monoxide toxic (haemoglobin)?', b: 'CO replaces O₂ on the Fe²⁺ by ligand exchange and binds far more strongly, so the change is not easily reversed and less oxygen is carried.' },
      { n: 7, f: 'Colours of vanadium in oxidation states +5, +4, +3, +2', b: 'VO₂⁺ (+5) yellow; VO²⁺ (+4) blue; V³⁺ (+3) green; V²⁺ (+2) violet.' },
      { n: 8, f: 'Cr³⁺(aq) with NaOH(aq) and with NH₃(aq), then excess', b: 'Grey-green precipitate with both. Excess NaOH: dark green solution (amphoteric). Excess NH₃: purple solution (ligand exchange).' },
      { n: 9, f: 'Why is an EDTA⁴⁻ complex more stable than the aqua complex it replaces?', b: '[M(H₂O)₆]ⁿ⁺ + EDTA⁴⁻ → 7 particles from 2, so ΔSsystem is large and positive. ΔH ≈ 0, so ΔStotal is positive and K is large (the chelate effect).' },
      { n: 10, f: 'Heterogeneous vs homogeneous catalysts', b: 'Heterogeneous: different phase; reaction at the surface (V₂O₅ in the Contact process).\nHomogeneous: same phase; goes via an intermediate species (Fe²⁺ with S₂O₈²⁻ and I⁻).', src: TMCAT },
      { n: 11, f: 'Catalyst vs autocatalyst', b: 'An autocatalyst forms during the reaction and then catalyses it (Mn²⁺ in the manganate(VII)–ethanedioate reaction).', src: TMCAT },
    ]),
    ...sub(U5, 'organic-chemistry-arenes-ych11', '18', [
      { n: 1, f: 'Three lines of evidence against the Kekulé structure of benzene', b: 'Thermochemical: benzene is more stable than predicted for three C=C.\nX-ray: all six C–C bonds equal, about 0.140 nm.\nIR: no alkene C=C band near 1650 cm⁻¹.' },
      { n: 2, f: 'The delocalised model of benzene', b: 'Each carbon forms three σ bonds at 120° and has one electron in a p-orbital perpendicular to the ring. The p-orbitals overlap sideways all round, so six π-electrons are delocalised above and below the ring.' },
      { n: 3, f: 'Why does benzene need a halogen carrier to react with bromine, unlike cyclohexene?', b: 'Its π-electrons are delocalised, so electron density between any two carbons is too low to polarise Br₂. FeBr₃ makes Br⁺. It substitutes rather than adds, keeping the stable delocalised ring.' },
      { n: 4, f: 'Nitration of benzene: reagents, conditions and electrophile', b: 'Concentrated HNO₃ + concentrated H₂SO₄, at or below about 55 °C. Electrophile NO₂⁺: HNO₃ + 2H₂SO₄ → NO₂⁺ + H₃O⁺ + 2HSO₄⁻. Product nitrobenzene.' },
      { n: 5, f: 'Friedel-Crafts acylation: reagents and product', b: 'An acyl chloride with anhydrous AlCl₃, warm under reflux. RCOCl + AlCl₃ → RCO⁺ + AlCl₄⁻; product an aromatic ketone C₆H₅COR + HCl.' },
      { n: 6, f: 'Phenol with bromine water: observation, product and reason', b: 'Orange decolourised and a white precipitate of 2,4,6-tribromophenol (C₆H₅OH + 3Br₂ → C₆H₂Br₃OH + 3HBr). An O lone pair is partly delocalised into the ring, raising its electron density.' },
    ]),
    ...sub(U5, 'organic-nitrogen-compounds-amines-amides-amino-acids-and-proteins-ych11', '19', [
      { n: 1, f: 'Order of base strength: ammonia, butylamine, phenylamine', b: 'Butylamine > ammonia > phenylamine. The alkyl group releases electron density onto N; in phenylamine the N lone pair is delocalised into the ring and is less available.' },
      { n: 2, f: 'Making phenylamine from nitrobenzene', b: 'Heat under reflux with tin and concentrated HCl, then add NaOH(aq) until alkaline to free the amine from C₆H₅NH₃⁺. ArNO₂ + 6[H] → ArNH₂ + 2H₂O.' },
      { n: 3, f: 'Making an azo dye from phenylamine', b: 'Diazotisation: NaNO₂ + HCl below 10 °C → benzenediazonium chloride.\nCoupling: add to phenol in NaOH(aq) → a yellow-orange azo dye. Too warm and the diazonium ion decomposes to N₂ and phenol.' },
      { n: 4, f: 'Amine + ethanoyl chloride', b: 'CH₃COCl + 2RNH₂ → CH₃CONHR + RNH₃⁺Cl⁻. An N-substituted amide forms fast at room temperature; two moles of amine are needed.' },
      { n: 5, f: 'Nylon-6,6: monomers and small molecule lost', b: 'H₂N(CH₂)₆NH₂ + HOOC(CH₂)₄COOH (or the diacyl dichloride). Repeat unit –[NH(CH₂)₆NHCO(CH₂)₄CO]–; water (or HCl) is lost at each link.' },
      { n: 6, f: 'Forms of 2-aminopropanoic acid in the solid, in acid and in alkali', b: 'Solid / neutral: zwitterion H₃N⁺CH(CH₃)COO⁻.\nAcid: H₃N⁺CH(CH₃)COOH.\nAlkali: H₂NCH(CH₃)COO⁻.' },
      { n: 7, f: 'Why does poly(ethenol) dissolve in water, and one use?', b: 'Its many –OH groups hydrogen bond with water. Used for soluble hospital laundry bags and liquid-detergent capsules.' },
    ]),
    ...sub(U5, 'organic-synthesis-ych11', '20', [
      { n: 1, f: 'Grignard reagent: how it is made, and why everything must be dry', b: 'RX + Mg → RMgX in dry ether. Water reacts with RMgX to give the alkane RH, destroying the reagent.' },
      { n: 2, f: 'Grignard reagent with CO₂, methanal, another aldehyde and a ketone', b: 'Then hydrolyse with dilute acid.\nCO₂ → carboxylic acid. Methanal → primary alcohol. Other aldehyde → secondary alcohol. Ketone → tertiary alcohol.' },
      { n: 3, f: 'Recrystallisation', b: 'Dissolve the solid in the minimum volume of hot solvent, filter hot, cool to crystallise, filter, wash with a little cold solvent and dry.' },
      { n: 4, f: 'Steam distillation is used for…', b: 'A volatile, water-immiscible compound that would decompose at its boiling point: it distils with steam below 100 °C.' },
      { n: 5, f: 'Making aspirin (Core Practical 16): how is purity checked?', b: 'Measure the melting temperature: pure aspirin melts sharply at about 135–136 °C. A lower, broad range shows impurity (often unreacted 2-hydroxybenzoic acid) or water.' },
      { n: 6, f: 'Reagents and conditions: halogenoalkane → amine, and nitrile → amine', b: 'Halogenoalkane → amine: excess ammonia in ethanol, heat in a sealed tube.\nNitrile → amine: LiAlH₄ in dry ether.' },
    ]),

    // Unit 6 Practical Skills in Chemistry II (n from 101: see the id note above)
    ...topicOnly('unit-6-practical-skills-in-chemistry-ii-ych11', '6', [
      { n: 101, f: 'Core Practical 9a: why are samples run into sodium hydrogencarbonate solution?', b: 'To quench the reaction: it removes the H⁺ catalyst, stopping the iodination so the iodine left can be titrated with thiosulfate.' },
      { n: 102, f: 'Core Practical 9b (iodine clock): how is concentration kept proportional to volume?', b: 'Keep the total volume constant by making it up with water, changing only one solution’s volume at a time. Initial rate ∝ 1/t.' },
      { n: 103, f: 'Core Practical 10: which graph gives the activation energy?', b: 'ln(1/t) (y) against 1/T in K⁻¹ (x). Ea = −gradient × 8.31, then divide by 1000 for kJ mol⁻¹.' },
      { n: 104, f: 'Core Practical 11: finding Ka of a weak acid', b: 'Calibrate the pH meter with buffers; find the end-point volume V for one portion; add V/2 of alkali to an identical portion; its pH = pKa, so Ka = 10⁻ᵖᴴ.' },
      { n: 105, f: 'Core Practical 12: preparing the half-cells', b: 'Clean the metals with emery paper; use a potassium nitrate salt bridge (no precipitates with metal ions); read the emf on a high-resistance voltmeter.' },
      { n: 106, f: 'Iodate(V) releasing iodine: equation and ratio to thiosulfate', b: 'IO₃⁻ + 5I⁻ + 6H⁺ → 3I₂ + 3H₂O, so IO₃⁻ : S₂O₃²⁻ = 1 : 6.' },
      { n: 107, f: '0.642 g KIO₃ (Mr 214.0) in 250.0 cm³; each 25.0 cm³ portion needs 22.50 cm³ thiosulfate. Its concentration?', b: 'KIO₃ per portion = (0.642 ÷ 214.0) ÷ 10 = 3.00 × 10⁻⁴ mol.\nThiosulfate = 6 × 3.00 × 10⁻⁴ = 1.80 × 10⁻³ mol.\nc = 1.80 × 10⁻³ ÷ 0.02250 = 0.0800 mol dm⁻³.' },
      { n: 108, f: 'Fe²⁺, Fe³⁺ and Zn²⁺ with NaOH(aq)', b: 'Fe²⁺: green precipitate, browning in air.\nFe³⁺: red-brown precipitate.\nZn²⁺: white precipitate, dissolving in excess to a colourless solution.' },
      { n: 109, f: 'A redox titration result differs from the accepted value by more than the total uncertainty. What does that suggest?', b: 'A systematic error that apparatus uncertainty cannot explain, such as air oxidising Fe²⁺ before titration (lowering every result).' },
    ]),
  ],
};
