/**
 * D-444 -- flashcards for Pearson Edexcel International GCSE Chemistry 4CH1
 * (Issue 3, September 2024).
 *
 * 4CH1 is untiered, so no card carries a tier. Content that the specification
 * marks with a "C" reference (bold) is assessed on Paper 2 only; those cards say
 * "(Paper 2 only)" on the card itself, following the Marlbridge 4CH1 notes.
 *
 * Topics 1 and 2 are itemised into sub-topics (1a-1i, a-h), so ids are
 * `<sub-topic number>-<n>`. Topics 3 and 4 itemise no sub-topics in the
 * syllabus record, so their cards sit on the topic and ids are `<topic>-<n>`.
 * Ids are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 4CH1); origin 'revision-notes'.
 *
 * Plain text only (see types.ts). Unicode for formulae.
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; src?: string }

const sub = (topic: string, subtopic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, src }) => ({
    id: `${number}-${n}`,
    topic,
    subtopic,
    front: f,
    back: b,
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

/** For a topic that itemises no subtopics: the card sits on the topic alone. */
const topicOnly = (topic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, src }) => ({
    id: `${number}-${n}`,
    topic,
    front: f,
    back: b,
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const P = 'principles-of-chemistry-4ch1';
const I = 'inorganic-chemistry-4ch1';

const ASPT = 'edexcel-igcse-chemistry-4ch1-atomic-structure-and-the-periodic-table-revision-notes';
const REACT = 'edexcel-igcse-chemistry-reactivity-revision-notes';
const PHYS = 'edexcel-igcse-chemistry-4ch1-physical-chemistry-revision-notes';
const ORG = 'edexcel-igcse-chemistry-4ch1-organic-chemistry-revision-notes';

export const DECK_EDEXCEL_IGCSE_CHEMISTRY: FlashcardDeck = {
  boardSlug: 'edexcel',
  qualificationSlug: 'igcse',
  subjectSlug: 'chemistry',
  syllabusCode: '4CH1',
  syllabusSeries: 'Issue 3, September 2024',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'nouman-ahmed', reviewedOn: '2026-11-05' },
  cards: [
    // 1 Principles of chemistry
    ...sub(P, 'states-of-matter-4ch1', '1a', [
      { n: 1, f: 'Particles in a solid: arrangement, movement and energy', b: 'Close together in a regular arrangement. They vibrate about fixed positions. Lowest energy of the three states.' },
      { n: 2, f: 'Particles in a liquid: arrangement, movement and energy', b: 'Close together in an irregular arrangement. They move around each other. More energy than in a solid.' },
      { n: 3, f: 'Particles in a gas: arrangement, movement and energy', b: 'Far apart in a random arrangement. They move fast in all directions. Highest energy of the three states.' },
      { n: 4, f: 'Name the changes of state: solid → liquid, liquid → gas, gas → liquid, liquid → solid, solid → gas', b: 'Melting; boiling (or evaporating); condensing; freezing; sublimation.' },
      { n: 5, f: 'Evaporation compared with boiling', b: 'Evaporation: only at the surface, below the boiling point.\nBoiling: throughout the liquid, at the boiling point.' },
      { n: 6, f: 'Why does the temperature of a pure substance stay constant while it melts or boils?', b: 'The energy supplied is used to overcome the forces between the particles, not to make them move faster.' },
      { n: 7, f: 'Diffusion', b: 'The random movement of particles from a high concentration to a low concentration until they are evenly spread.' },
      { n: 8, f: 'What makes diffusion faster?', b: 'A gas rather than a liquid, a higher temperature, and lighter particles. Into a vacuum it is almost instant.' },
      { n: 9, f: 'What does repeatedly diluting potassium manganate(VII) solution show?', b: 'The colour gets paler but stays visible for many dilutions, so a small amount of solid contains a huge number of tiny particles.' },
      { n: 10, f: '1 cm³ of dye solution is made up to 100 cm³, then this is repeated once. What fraction of the original concentration remains?', b: 'Each step dilutes 100 times: 1/100 × 1/100 = 1/10 000.' },
      { n: 11, f: 'Saturated solution', b: 'A solution in which no more solute can dissolve at that temperature.' },
      { n: 12, f: 'Solubility (Paper 2 only)', b: 'The mass of solute that dissolves in 100 g of solvent at a stated temperature to make a saturated solution. Unit: g per 100 g of solvent.' },
      { n: 13, f: '4.5 g of a solid saturates 15 g of water at 30 °C. Calculate its solubility. (Paper 2 only)', b: '4.5 ÷ 15 × 100 = 30 g per 100 g of water at 30 °C. Divide by the mass of water, not of the solution.' },
      { n: 14, f: 'Solubility 64 g/100 g water at 70 °C, 24 g/100 g at 15 °C. Saturated solution in 200 g of water cooled from 70 °C to 15 °C: mass of crystals? (Paper 2 only)', b: '(64 − 24) × 200 ÷ 100 = 80 g' },
    ]),
    ...sub(P, 'elements-compounds-and-mixtures-4ch1', '1b', [
      { n: 1, f: 'Element, compound and mixture', b: 'Element: one type of atom.\nCompound: two or more elements chemically combined, in fixed proportions.\nMixture: two or more substances not chemically combined; proportions can vary.' },
      { n: 2, f: 'Is chlorine gas, Cl₂, an element or a compound?', b: 'An element. It has two atoms per molecule, but both are the same type of atom.' },
      { n: 3, f: 'How do melting points show whether a substance is pure?', b: 'A pure substance melts at a sharp, fixed temperature (pure water: 0 °C). A mixture melts over a range. Compare with the data-book value.' },
      { n: 4, f: 'Choose the separation method: an insoluble solid from a liquid; a soluble solid from its solution; pure solvent from a solution', b: 'Filtration; crystallisation; simple distillation.' },
      { n: 5, f: 'How do you separate two liquids that mix and have different boiling points?', b: 'Fractional distillation. The liquid with the lower boiling point distils first.' },
      { n: 6, f: 'Crystallisation: how do you know the solution is saturated?', b: 'Dip in a glass rod: when crystals form on it as it cools, the solution is saturated. Then leave to cool, filter, wash with a little cold water and dry.' },
      { n: 7, f: 'Chromatography: why is the baseline in pencil, and the solvent below it?', b: 'Pencil does not dissolve and run like ink. Solvent below the baseline so the spots do not dissolve into the solvent.' },
      { n: 8, f: 'Rf value', b: 'Rf = distance moved by substance ÷ distance moved by solvent, both from the baseline. No units; less than 1.' },
      { n: 9, f: 'A spot moves 2.1 cm and the solvent front 7.0 cm. Calculate Rf.', b: '2.1 ÷ 7.0 = 0.30' },
      { n: 10, f: 'What does a chromatogram tell you about purity and identity?', b: 'One spot: pure. Several spots: a mixture. A spot level with a reference: the same substance (same solvent and paper).' },
    ]),
    ...sub(P, 'atomic-structure-4ch1', '1c', [
      { n: 1, f: 'Atom', b: 'The smallest particle of an element that keeps the chemical properties of that element.' },
      { n: 2, f: 'Molecule', b: 'Two or more atoms chemically (covalently) bonded together. It can be an element (O₂) or a compound (H₂O).' },
      { n: 3, f: 'Relative mass, relative charge and position of a proton, a neutron and an electron', b: 'Proton: 1, +1, nucleus.\nNeutron: 1, 0, nucleus.\nElectron: about 1/1840 (negligible), −1, shells around the nucleus.' },
      { n: 4, f: 'Atomic number vs mass number', b: 'Atomic number: protons only.\nMass number: protons + neutrons.', src: ASPT },
      { n: 5, f: 'Isotopes', b: 'Atoms of the same element with the same atomic number but different mass numbers (different numbers of neutrons).' },
      { n: 6, f: 'Relative atomic mass, Ar', b: 'The weighted mean mass of the atoms of an element compared with one-twelfth of the mass of an atom of carbon-12.' },
      { n: 7, f: 'Mass number vs Ar', b: 'Mass number: a whole number for one isotope.\nAr: a weighted mean for the element, usually not a whole number.', src: ASPT },
      { n: 8, f: 'Protons, neutrons and electrons in ³²₁₆S²⁻', b: '16 protons, 32 − 16 = 16 neutrons, 16 + 2 = 18 electrons.' },
      { n: 9, f: 'Neon-20 and neon-22 occur in the ratio 9 : 1. Calculate Ar.', b: '(20 × 9 + 22 × 1) ÷ (9 + 1) = 202 ÷ 10 = 20.2. Divide by the total of the ratio, not 100.' },
      { n: 10, f: 'Atom vs ion of the same isotope', b: 'Same numbers of protons and neutrons; only the number of electrons differs.', src: ASPT },
    ]),
    ...sub(P, 'the-periodic-table-4ch1', '1d', [
      { n: 1, f: 'How is the Periodic Table arranged, and why does argon come before potassium?', b: 'In order of increasing atomic number. Argon (18) comes before potassium (19) even though its Ar is larger.' },
      { n: 2, f: 'Group vs period', b: 'Group: a column (same number of outer electrons).\nPeriod: a row (same number of shells).', src: ASPT },
      { n: 3, f: 'Where are the metals and non-metals in the Periodic Table?', b: 'Metals: the left-hand side and the centre block. Non-metals: the right-hand side, beyond the stepped line. Hydrogen is a non-metal.', src: ASPT },
      { n: 4, f: 'Electronic configurations of potassium (19) and calcium (20)', b: 'K: 2,8,8,1\nCa: 2,8,8,2' },
      { n: 5, f: 'Period 2, Group 5: configuration and element', b: 'Two shells, 5 outer electrons: 2,5 — nitrogen.' },
      { n: 6, f: 'Two tests to classify an element as a metal or a non-metal', b: 'Conductivity of the solid: metals conduct (graphite is the non-metal exception).\nOxide: metal oxides are basic; non-metal oxides are generally acidic.' },
      { n: 7, f: 'Why do elements in the same group have similar chemical properties?', b: 'Their atoms have the same number of outer-shell electrons, and reactions involve the outer-shell electrons.' },
      { n: 8, f: 'Why are the noble gases unreactive?', b: 'They have a full outer shell, a stable arrangement, so they have no tendency to lose, gain or share electrons. (Helium’s full shell has 2, not 8.)', src: ASPT },
    ]),
    ...sub(P, 'chemical-formulae-equations-and-calculations-4ch1', '1e', [
      { n: 1, f: 'State symbols', b: '(s) solid, including a precipitate; (l) liquid, including water; (g) gas; (aq) dissolved in water.' },
      { n: 2, f: 'Balance: C₂H₆ + O₂ → CO₂ + H₂O', b: '2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O' },
      { n: 3, f: 'Relative formula mass, Mr', b: 'The sum of the relative atomic masses of all the atoms in the formula. No units.' },
      { n: 4, f: 'Mr of magnesium nitrate, Mg(NO₃)₂ (Ar: N = 14, O = 16, Mg = 24)', b: '24 + 2 × (14 + 3 × 16) = 148' },
      { n: 5, f: 'Equation linking moles, mass and Mr', b: 'moles (mol) = mass (g) ÷ Mr' },
      { n: 6, f: 'Three steps of a reacting-mass calculation', b: '1. Mass → moles of the known substance (÷ Mr).\n2. Use the mole ratio from the balanced equation.\n3. Moles → mass of the wanted substance (× Mr).' },
      { n: 7, f: 'Empirical formula and molecular formula', b: 'Empirical: the simplest whole-number ratio of atoms of each element.\nMolecular: the actual number of atoms of each element in one molecule.' },
      { n: 8, f: 'A hydrocarbon has 2.4 g C and 0.6 g H, and Mr 30. Empirical and molecular formulae? (Ar: C = 12, H = 1)', b: 'C 0.20 mol, H 0.60 mol → 1 : 3, CH₃.\n30 ÷ 15 = 2, so C₂H₆.' },
      { n: 9, f: 'Percentage yield', b: '(actual yield ÷ theoretical yield) × 100. It cannot be more than 100%.' },
      { n: 10, f: 'Finding x in a hydrated salt such as Na₂SO₄·xH₂O', b: 'Heat to constant mass. Mass of water = hydrated − anhydrous. x = moles of water ÷ moles of anhydrous salt (use moles, not masses).' },
      { n: 11, f: 'Concentration in mol/dm³ (Paper 2 only)', b: 'c = n ÷ V, with V in dm³ (cm³ ÷ 1000).' },
      { n: 12, f: 'Molar volume of a gas at rtp (Paper 2 only)', b: '24 dm³ or 24 000 cm³ per mole of any gas.' },
      { n: 13, f: 'Volume of 0.0250 mol of hydrogen at rtp, in cm³ (Paper 2 only)', b: '0.0250 × 24 000 = 600 cm³' },
      { n: 14, f: 'Finding the formula of magnesium oxide by burning magnesium in a crucible: two key precautions', b: 'Lift the lid now and then to let air in, but keep it on to stop MgO smoke escaping. Heat, cool and weigh to constant mass.' },
    ]),
    ...sub(P, 'ionic-bonding-4ch1', '1f', [
      { n: 1, f: 'Ion', b: 'A charged particle formed when an atom loses or gains electrons.' },
      { n: 2, f: 'How do metals and non-metals form ions?', b: 'Metals lose outer electrons → positive ions. Non-metals gain electrons → negative ions. Each ion has a full outer shell; the number of protons does not change.' },
      { n: 3, f: 'Ionic bond', b: 'A strong electrostatic attraction between oppositely charged ions (not between atoms).' },
      { n: 4, f: 'Ion charges from the group number', b: 'Group 1: 1+. Group 2: 2+. Group 3: 3+.\nGroup 5: 3−. Group 6: 2−. Group 7: 1−.' },
      { n: 5, f: 'Formulae and charges of the hydroxide, nitrate, carbonate, sulfate and ammonium ions', b: 'OH⁻, NO₃⁻, CO₃²⁻, SO₄²⁻, NH₄⁺' },
      { n: 6, f: 'Formula of calcium nitrate (Ca²⁺, NO₃⁻)', b: 'Ca(NO₃)₂. The LCM of the charges is 2, so one Ca²⁺ balances two NO₃⁻; the bracket shows two nitrate ions.' },
      { n: 7, f: 'Electronic configuration of the oxide ion, O²⁻', b: '2.8 — oxygen (2.6) gains two electrons.' },
      { n: 8, f: 'Why do ionic compounds have high melting and boiling points?', b: 'There are many strong electrostatic attractions between oppositely charged ions throughout the giant lattice, which need a lot of energy to overcome.' },
      { n: 9, f: 'Why does solid potassium bromide not conduct, but its solution does?', b: 'In the solid the ions are fixed in the lattice. In solution (or when molten) the ions are free to move and carry charge. It is the ions that move, not electrons.' },
    ]),
    ...sub(P, 'covalent-bonding-4ch1', '1g', [
      { n: 1, f: 'Covalent bond', b: 'A shared pair of electrons between two atoms.' },
      { n: 2, f: 'Why does a covalent bond hold the atoms together?', b: 'There is an electrostatic attraction between the shared pair of electrons and the nuclei of both atoms.' },
      { n: 3, f: 'Shared pairs and lone pairs in H₂O, NH₃ and N₂', b: 'H₂O: 2 shared, 2 lone.\nNH₃: 3 shared, 1 lone.\nN₂: 3 shared (a triple bond), 2 lone.' },
      { n: 4, f: 'How many shared pairs of electrons are in a molecule of ethane, C₂H₆?', b: '7 — one C–C and six C–H.' },
      { n: 5, f: 'Why do simple molecular substances have low melting and boiling points?', b: 'Only the weak intermolecular forces between molecules are overcome, which needs little energy. The strong covalent bonds within the molecules do not break.' },
      { n: 6, f: 'Why is chlorine a gas at room temperature but iodine a solid?', b: 'Both are simple molecular. Iodine has a higher Mr (254 vs 71), so its intermolecular forces are stronger and need more energy to overcome.' },
      { n: 7, f: 'Why do giant covalent substances have high melting points?', b: 'Melting means breaking many strong covalent bonds throughout the network, which needs a lot of energy.' },
      { n: 8, f: 'Diamond vs graphite: bonds per carbon, hardness and conductivity', b: 'Diamond: 4 bonds, very hard (rigid 3-D network), does not conduct.\nGraphite: 3 bonds, soft and slippery (weak forces between layers), conducts (one delocalised electron per carbon).' },
      { n: 9, f: 'Why is C60 fullerene soft and a poor conductor?', b: 'It is simple molecular: only weak intermolecular forces hold the molecules together, and electrons cannot move from molecule to molecule.' },
      { n: 10, f: 'Do covalent compounds conduct electricity?', b: 'Not usually. Graphite is the exception to learn.' },
    ]),
    ...sub(P, 'metallic-bonding-4ch1', '1h', [
      { n: 1, f: 'Metallic bonding (Paper 2 only)', b: 'The electrostatic attraction between positive metal ions and delocalised electrons.' },
      { n: 2, f: 'What must a 2-D diagram of a metal lattice show? (Paper 2 only)', b: 'Regular, closely packed positive ions (labelled +, or 2+ for magnesium) with delocalised electrons (e⁻) between them. Both labels are needed.' },
      { n: 3, f: 'Why do metals conduct electricity, as solids and liquids? (Paper 2 only)', b: 'The delocalised electrons are free to move through the structure and carry charge.' },
      { n: 4, f: 'Why are metals malleable? (Paper 2 only)', b: 'The layers of positive ions can slide over each other, and the attraction to the delocalised electrons is kept.' },
      { n: 5, f: 'Why do metals usually have high melting points? (Paper 2 only)', b: 'There are many strong attractions between the positive ions and the delocalised electrons to overcome.' },
    ]),
    ...sub(P, 'electrolysis-4ch1', '1i', [
      { n: 1, f: 'Electrolysis (Paper 2 only)', b: 'The breakdown of an ionic compound, molten or in solution, by a direct current.' },
      { n: 2, f: 'Cathode and anode: charge, and what happens there (Paper 2 only)', b: 'Cathode: negative; cations arrive; reduction.\nAnode: positive; anions arrive; oxidation.' },
      { n: 3, f: 'What carries the charge in the electrolyte, and in the wires? (Paper 2 only)', b: 'Electrolyte: ions move.\nWires: electrons move.' },
      { n: 4, f: 'Aqueous solution, inert electrodes: what forms at the cathode? (Paper 2 only)', b: 'A metal less reactive than hydrogen (Cu, Ag) is deposited. If the metal is more reactive than hydrogen (K, Na, Ca, Mg…), hydrogen is given off.' },
      { n: 5, f: 'Aqueous solution, inert electrodes: what forms at the anode? (Paper 2 only)', b: 'A halide in concentrated solution gives the halogen. Sulfate or nitrate: oxygen is given off.' },
      { n: 6, f: 'Products of electrolysing concentrated sodium chloride solution, and what is left (Paper 2 only)', b: 'Cathode: hydrogen. Anode: chlorine. Sodium hydroxide is left, so the solution becomes alkaline.' },
      { n: 7, f: 'Products of electrolysing copper(II) sulfate solution with inert electrodes (Paper 2 only)', b: 'Cathode: copper (pink-brown deposit). Anode: oxygen. The blue colour fades and sulfuric acid is left.' },
      { n: 8, f: 'Half-equation for oxygen forming at the anode (Paper 2 only)', b: '4OH⁻ → O₂ + 2H₂O + 4e⁻ (oxidation)' },
      { n: 9, f: 'Half-equations for electrolysing molten lead(II) bromide (Paper 2 only)', b: 'Cathode: Pb²⁺ + 2e⁻ → Pb\nAnode: 2Br⁻ → Br₂ + 2e⁻\nHeat in a fume cupboard: bromine is toxic.' },
      { n: 10, f: 'Dilute sulfuric acid is electrolysed and 50 cm³ of hydrogen is collected. Volume of oxygen? (Paper 2 only)', b: '25 cm³. Hydrogen : oxygen = 2 : 1 (4e⁻ give 2H₂ and 1O₂).' },
    ]),

    // 2 Inorganic chemistry
    ...sub(I, 'group-1-alkali-metals-4ch1', 'a', [
      { n: 1, f: 'Observations when lithium, sodium or potassium is added to water', b: 'Floats (less dense than water), fizzes (hydrogen), moves around, gets smaller and disappears; universal indicator turns blue/purple (alkaline hydroxide).' },
      { n: 2, f: 'General equation for an alkali metal with water', b: 'metal + water → metal hydroxide + hydrogen\n2M(s) + 2H₂O(l) → 2MOH(aq) + H₂(g)' },
      { n: 3, f: 'Lithium, sodium and potassium with water: how do they differ?', b: 'Lithium fizzes steadily and stays solid. Sodium fizzes rapidly and melts into a ball. Potassium reacts violently; the hydrogen ignites with a lilac flame.' },
      { n: 4, f: 'Why are alkali metals stored under oil?', b: 'To stop them reacting with oxygen and water vapour in the air.' },
      { n: 5, f: 'Group 1 trends down the group: reactivity, melting point, hardness', b: 'Reactivity increases. Melting point decreases. The metals get softer.' },
      { n: 6, f: 'Formulae of caesium hydroxide and rubidium oxide', b: 'CsOH and Rb₂O — every Group 1 metal forms a 1+ ion.' },
      { n: 7, f: 'Explain why reactivity increases down Group 1 (Paper 2 only)', b: 'More occupied shells, so the outer electron is further from the nucleus, with more shielding. The attraction to the nucleus is weaker, so the outer electron is lost more easily.' },
    ]),
    ...sub(I, 'group-7-halogens-4ch1', 'b', [
      { n: 1, f: 'Appearance of chlorine, bromine and iodine at room temperature', b: 'Chlorine: pale green (yellow-green) gas.\nBromine: red-brown liquid (orange-brown vapour).\nIodine: grey-black solid (purple vapour).' },
      { n: 2, f: 'Group 7 trends down the group', b: 'Colour darkens; gas → liquid → solid; melting and boiling points increase; reactivity decreases.' },
      { n: 3, f: 'Predict the state and colour of fluorine, and of astatine', b: 'Fluorine: a gas, paler than chlorine (pale yellow).\nAstatine: a solid, darker than iodine (black).' },
      { n: 4, f: 'Halogen displacement rule', b: 'A more reactive halogen displaces a less reactive halogen from a solution of its halide.' },
      { n: 5, f: 'Chlorine water is added to potassium iodide solution. What do you see? Give the ionic equation.', b: 'The solution turns brown (iodine forms).\nCl₂(aq) + 2I⁻(aq) → 2Cl⁻(aq) + I₂(aq)' },
      { n: 6, f: 'Bromine water is added to sodium chloride solution. What happens?', b: 'No reaction — it stays orange. Bromine is less reactive than chlorine, so it cannot displace it.' },
      { n: 7, f: 'In Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂, what is oxidised and what is reduced?', b: 'Bromide ions are oxidised (lose electrons). Chlorine is reduced (gains electrons) — it is the oxidising agent.' },
      { n: 8, f: 'Explain why reactivity decreases down Group 7 (Paper 2 only)', b: 'The outer shell is further from the nucleus, with more shielding, so the attraction for an incoming electron is weaker and an electron is gained less easily.' },
    ]),
    ...sub(I, 'gases-in-the-atmosphere-4ch1', 'c', [
      { n: 1, f: 'Composition of dry air: the four most abundant gases', b: 'Nitrogen 78%, oxygen 21%, argon 0.9%, carbon dioxide 0.04% (by volume).' },
      { n: 2, f: 'Three ways to find the percentage of oxygen in air', b: 'Damp iron wool rusting in an inverted measuring cylinder over water; burning phosphorus over water; passing air over hot copper between two gas syringes.' },
      { n: 3, f: '200 cm³ of air over damp iron wool falls to a constant 158 cm³. Percentage of oxygen?', b: '(200 − 158) ÷ 200 × 100 = 21.0%. Always divide by the starting volume.' },
      { n: 4, f: 'Gas-syringe method: why let the apparatus cool before the final reading?', b: 'Warm gas has expanded, so the final volume reads too large and the percentage of oxygen comes out too low.' },
      { n: 5, f: 'Magnesium, hydrogen and sulfur burning in oxygen: observation and product', b: 'Magnesium: very bright white flame → white magnesium oxide.\nHydrogen: pale blue flame → water.\nSulfur: blue flame → sulfur dioxide (SO₂, not SO₃).' },
      { n: 6, f: 'Thermal decomposition of copper(II) carbonate: colour change and equation', b: 'Green → black.\nCuCO₃(s) → CuO(s) + CO₂(g)' },
      { n: 7, f: 'Heating a carbonate with a delivery tube into limewater: why remove the tube before stopping heating?', b: 'To prevent suck-back of cold limewater into the hot tube.' },
      { n: 8, f: 'How does carbon dioxide affect the Earth’s temperature?', b: 'The surface gives out infrared radiation; CO₂ absorbs some and re-emits some back. More CO₂ (burning fossil fuels, deforestation) keeps more heat in, which may contribute to climate change.' },
    ]),
    ...sub(I, 'reactivity-series-4ch1', 'd', [
      { n: 1, f: 'The 4CH1 reactivity series, most to least reactive', b: 'Potassium, sodium, lithium, calcium, magnesium, aluminium, zinc, iron, copper, silver, gold.' },
      { n: 2, f: 'Which reactions are used to place metals in the reactivity series?', b: 'Reactions with water; with dilute hydrochloric or sulfuric acid; and displacement reactions (metal + metal oxide, metal + aqueous metal salt).' },
      { n: 3, f: 'Will zinc react with copper(II) sulfate solution?', b: 'Yes. Zinc is more reactive than copper, so it displaces it: zinc sulfate and copper metal form. Zinc is oxidised (Zn → Zn²⁺); copper ions are reduced (Cu²⁺ → Cu).' },
      { n: 4, f: 'Oxidation and reduction in terms of oxygen', b: 'Oxidation: gain of oxygen.\nReduction: loss of oxygen.', src: REACT },
      { n: 5, f: 'Oxidation and reduction in terms of electrons', b: 'Oxidation: loss of electrons.\nReduction: gain of electrons.', src: REACT },
      { n: 6, f: 'Redox, oxidising agent and reducing agent', b: 'Redox: oxidation and reduction happen at the same time.\nOxidising agent: is reduced (gains electrons).\nReducing agent: is oxidised (loses electrons).' },
      { n: 7, f: 'Conditions needed for iron to rust', b: 'Both water and oxygen together; neither alone is enough.' },
      { n: 8, f: 'Three ways to prevent rusting, and how each works', b: 'Barrier (paint, oil): keeps out water and oxygen.\nGalvanising: a zinc coating — a barrier, and sacrificial if scratched.\nSacrificial protection: a more reactive metal (zinc, magnesium) corrodes instead of the iron.' },
    ]),
    ...sub(I, 'extraction-and-uses-of-metals-4ch1', 'e', [
      { n: 1, f: 'Ore (Paper 2 only)', b: 'A rock containing enough of a metal compound to make extracting the metal worthwhile.' },
      { n: 2, f: 'Why is gold found as the uncombined element? (Paper 2 only)', b: 'It is very unreactive, so it does not react with substances in the ground.' },
      { n: 3, f: 'How does reactivity decide the extraction method? (Paper 2 only)', b: 'Carbon sits between aluminium and zinc. Below carbon (Zn, Fe, Cu): heat the oxide with carbon. Above carbon: electrolysis of a molten compound, because carbon cannot remove the oxygen.' },
      { n: 4, f: 'Reduction of iron(III) oxide: equation, and what is reduced and oxidised (Paper 2 only)', b: 'Fe₂O₃ + 3CO → 2Fe + 3CO₂\nIron(III) oxide is reduced; carbon monoxide is oxidised and is the reducing agent.' },
      { n: 5, f: 'Why is aluminium oxide dissolved in molten cryolite? (Paper 2 only)', b: 'Al₂O₃ melts above 2000 °C; the solution in cryolite can be electrolysed below 1000 °C, saving energy. (Cryolite is not a catalyst.)' },
      { n: 6, f: 'Electrode half-equations in aluminium extraction, and why the anodes are replaced (Paper 2 only)', b: 'Cathode: Al³⁺ + 3e⁻ → Al\nAnode: 2O²⁻ → O₂ + 4e⁻\nThe oxygen reacts with the hot carbon anodes to form CO₂, so they burn away.' },
      { n: 7, f: 'Uses of aluminium and copper, with the property behind each (Paper 2 only)', b: 'Aluminium: aircraft and power cables (low density); cans and foil (resists corrosion).\nCopper: wiring (very good electrical conductor, ductile); water pipes (does not react with water).' },
      { n: 8, f: 'Mild steel, high-carbon steel and stainless steel: property and use (Paper 2 only)', b: 'Mild (low-carbon): strong, malleable, rusts — car bodies.\nHigh-carbon: very hard but brittle — cutting tools.\nStainless (chromium, often nickel): resists corrosion — cutlery.' },
      { n: 9, f: 'Alloy, and why an alloy is harder than the pure metal (Paper 2 only)', b: 'A mixture of a metal with one or more other elements. Atoms of a different size distort the regular layers, so the layers slide over each other less easily.' },
      { n: 10, f: 'Maximum mass of iron from 400 tonnes of Fe₂O₃ (Ar: Fe = 56, O = 16) (Paper 2 only)', b: 'Mr Fe₂O₃ = 160, containing 112 of iron. 400 × 112 ÷ 160 = 280 tonnes.' },
    ]),
    ...sub(I, 'acids-alkalis-and-titrations-4ch1', 'f', [
      { n: 1, f: 'Colours of litmus, phenolphthalein and methyl orange in acid and in alkali', b: 'Litmus: red in acid, blue in alkali.\nPhenolphthalein: colourless in acid, pink in alkali.\nMethyl orange: red in acid, yellow in alkali.' },
      { n: 2, f: 'pH bands', b: '0–3 strongly acidic; 4–6 weakly acidic; 7 neutral; 8–10 weakly alkaline; 11–14 strongly alkaline.' },
      { n: 3, f: 'Universal indicator colours at pH 1, 7 and 14', b: 'pH 1: red. pH 7: green. pH 14: purple. It gives only an approximate pH.' },
      { n: 4, f: 'Which ions do acids and alkalis provide in aqueous solution?', b: 'Acids: H⁺ ions.\nAlkalis: OH⁻ ions.' },
      { n: 5, f: 'Ionic equation for neutralisation of an acid by an alkali', b: 'H⁺(aq) + OH⁻(aq) → H₂O(l)' },
      { n: 6, f: 'Acid–alkali titration: outline method (Paper 2 only)', b: 'Pipette 25.0 cm³ of alkali into a conical flask; add phenolphthalein or methyl orange; add acid from a burette with swirling, dropwise near the end; stop at the first permanent colour change. Repeat until titres are concordant.' },
      { n: 7, f: 'Titres: 19.10 (rough), 18.45, 18.80, 18.50, 18.40 cm³. Mean titre? (Paper 2 only)', b: 'Use only the concordant titres (within 0.10 cm³): (18.45 + 18.50 + 18.40) ÷ 3 = 18.45 cm³.' },
      { n: 8, f: 'Why is universal indicator not used in a titration? (Paper 2 only)', b: 'It changes colour gradually, so there is no sharp end point.' },
    ]),
    ...sub(I, 'acids-bases-and-salt-preparations-4ch1', 'g', [
      { n: 1, f: 'Which salts are always soluble?', b: 'All sodium, potassium and ammonium compounds, and all nitrates.' },
      { n: 2, f: 'Insoluble chlorides and insoluble sulfates', b: 'Chlorides: silver and lead(II).\nSulfates: barium, calcium and lead(II).' },
      { n: 3, f: 'Which carbonates and hydroxides are soluble?', b: 'Carbonates: sodium, potassium, ammonium.\nHydroxides: sodium, potassium, and calcium (only slightly).' },
      { n: 4, f: 'Acid and base in terms of protons', b: 'Acid: a proton (H⁺) donor.\nBase: a proton acceptor.' },
      { n: 5, f: 'Base and alkali', b: 'Bases: metal oxides, metal hydroxides and ammonia. An alkali is a base that is soluble in water — so magnesium hydroxide is a base but not an alkali.' },
      { n: 6, f: 'acid + metal →\nacid + base →\nacid + carbonate →', b: 'salt + hydrogen (not with nitric acid)\nsalt + water\nsalt + water + carbon dioxide' },
      { n: 7, f: 'Making hydrated copper(II) sulfate from copper(II) oxide', b: 'Warm dilute sulfuric acid; add CuO until in excess; filter off the excess; evaporate some water until saturated; cool to crystallise; filter and dry. Do not evaporate to dryness.' },
      { n: 8, f: 'Making a soluble sodium, potassium or ammonium salt (Paper 2 only)', b: 'Titrate to find the volumes needed, then mix the same volumes again without indicator, and crystallise. Both reactants are soluble, so there is no excess to filter off.' },
      { n: 9, f: 'Making an insoluble salt such as lead(II) sulfate (Paper 2 only)', b: 'Mix two solutions (e.g. lead(II) nitrate and a soluble sulfate), filter off the precipitate, wash with distilled water, dry.\nPb²⁺(aq) + SO₄²⁻(aq) → PbSO₄(s)' },
    ]),
    ...sub(I, 'chemical-tests-4ch1', 'h', [
      { n: 1, f: 'Tests for hydrogen and oxygen', b: 'Hydrogen: lighted splint at the mouth of the tube — squeaky pop.\nOxygen: glowing splint — relights.' },
      { n: 2, f: 'Tests for carbon dioxide, ammonia and chlorine', b: 'CO₂: bubble through limewater — turns milky.\nNH₃: damp red litmus paper — turns blue.\nCl₂: damp litmus paper — bleached white.' },
      { n: 3, f: 'Flame test: method', b: 'Clean a nichrome or platinum wire in concentrated HCl and heat until there is no colour; dip it in the acid then the solid; hold it in a blue (non-luminous) Bunsen flame; record the colour.' },
      { n: 4, f: 'Flame colours of Li⁺, Na⁺, K⁺, Ca²⁺ and Cu²⁺', b: 'Li⁺: red. Na⁺: yellow. K⁺: lilac. Ca²⁺: orange-red. Cu²⁺: blue-green.' },
      { n: 5, f: 'Sodium hydroxide solution: precipitate colours with Cu²⁺, Fe²⁺ and Fe³⁺', b: 'Cu²⁺: blue. Fe²⁺: green. Fe³⁺: brown.' },
      { n: 6, f: 'Test for the ammonium ion, NH₄⁺', b: 'Add sodium hydroxide solution and warm. No precipitate; the gas given off (ammonia) turns damp red litmus blue.' },
      { n: 7, f: 'Test for halide ions, and the precipitate colours', b: 'Add dilute nitric acid, then silver nitrate solution.\nCl⁻: white. Br⁻: cream. I⁻: yellow.' },
      { n: 8, f: 'Test for sulfate ions (4CH1 reagents)', b: 'Add dilute hydrochloric acid, then barium chloride solution: white precipitate of BaSO₄.' },
      { n: 9, f: 'Why use nitric acid (not hydrochloric) before silver nitrate?', b: 'Hydrochloric acid adds Cl⁻ ions, which always give a white precipitate. The acid is there to remove carbonate ions, which would also give a precipitate.' },
      { n: 10, f: 'Chemical test for water, and physical test for pure water', b: 'Anhydrous copper(II) sulfate turns from white to blue (water present).\nPure water boils at exactly 100 °C and freezes at exactly 0 °C.' },
    ]),

    // 3 Physical chemistry (no subtopics itemised)
    ...topicOnly('physical-chemistry-4ch1', '3', [
      { n: 1, f: 'Exothermic and endothermic: heat, surroundings and sign of ΔH', b: 'Exothermic: heat given out, surroundings get hotter, ΔH negative.\nEndothermic: heat taken in, surroundings get colder, ΔH positive.' },
      { n: 2, f: 'Calculating ΔH from a calorimetry experiment', b: 'Q = m × c × ΔT (m = mass of water or solution, not the fuel). Convert to kJ (÷ 1000). ΔH = Q ÷ moles of the reactant not in excess. Temperature rose → negative sign.' },
      { n: 3, f: '200 g of water warms by 15.0 °C. Calculate Q. (c = 4.2 J/g/°C)', b: 'Q = 200 × 4.2 × 15.0 = 12 600 J (12.6 kJ)' },
      { n: 4, f: 'Bond breaking and bond making: which is endothermic, and how is ΔH found from bond energies? (Paper 2 only)', b: 'Breaking is endothermic; making is exothermic.\nΔH = total energy of bonds broken − total energy of bonds made.' },
      { n: 5, f: 'Activation energy vs ΔH on a reaction profile', b: 'Activation energy: from the reactants line up to the peak.\nΔH: from the reactants line to the products line.', src: PHYS },
      { n: 6, f: 'Why does raising the temperature increase the rate? (two reasons)', b: 'Particles move faster, so they collide more often, and a greater proportion of collisions have energy equal to or greater than the activation energy.' },
      { n: 7, f: 'More collisions vs more successful collisions', b: 'Only temperature and catalysts change the proportion of collisions that succeed. Concentration, pressure and surface area just make collisions more frequent.', src: PHYS },
      { n: 8, f: 'Catalyst', b: 'A substance that increases the rate of a reaction and is chemically unchanged at the end. It provides an alternative pathway with a lower activation energy; ΔH is unchanged.' },
      { n: 9, f: 'Marble chips + dilute HCl rate practical: what to measure and what to keep the same', b: 'Measure mass loss (cotton wool plug) or gas volume at regular times. Change chip size or acid concentration only; keep the mass of chips, volume of acid and temperature the same.', src: PHYS },
      { n: 10, f: 'Heating hydrated copper(II) sulfate, then adding water to the product', b: 'Heating: blue → white (endothermic).\nAdding water: white → blue, and it gets hot (exothermic).' },
      { n: 11, f: 'Equal rates vs equal concentrations at equilibrium (Paper 2 only)', b: 'At dynamic equilibrium the forward and reverse rates are equal; the concentrations stay constant, but are not necessarily equal. It needs a sealed container.', src: PHYS },
      { n: 12, f: 'Effect of temperature, pressure and a catalyst on the position of equilibrium (Paper 2 only)', b: 'Temperature up: shifts in the endothermic direction.\nPressure up: shifts to the side with fewer moles of gas.\nCatalyst: no change in position — equilibrium is reached sooner.' },
    ]),

    // 4 Organic chemistry (no subtopics itemised)
    ...topicOnly('organic-chemistry-4ch1', '4', [
      { n: 1, f: 'Homologous series', b: 'A family with the same general formula and functional group, similar chemical properties and a trend in physical properties; each member differs by CH₂.' },
      { n: 2, f: 'Isomers', b: 'Compounds with the same molecular formula but different structural formulae. A bent chain is not a new isomer.' },
      { n: 3, f: 'Crude oil fractions, top to bottom, with a use for each', b: 'Refinery gases: bottled gas. Gasoline: petrol. Kerosene: aircraft fuel. Diesel: lorries, trains. Fuel oil: ships, power stations. Bitumen: roads.\nGoing down: higher boiling point, more viscous, darker.' },
      { n: 4, f: 'Complete vs incomplete combustion', b: 'Complete (plenty of oxygen): CO₂ and H₂O.\nIncomplete: CO and/or C (soot). CO is poisonous: it reduces the blood’s capacity to carry oxygen.', src: ORG },
      { n: 5, f: 'Nitrogen oxides vs sulfur dioxide from engines and power stations', b: 'Nitrogen oxides: N₂ and O₂ from the air react at high temperature.\nSulfur dioxide: sulfur impurities in the fuel. Both cause acid rain.', src: ORG },
      { n: 6, f: 'Cracking: products, conditions and why it is done', b: 'Long-chain alkane → shorter alkane + alkene. Silica or alumina catalyst, 600–700 °C. Supply of long-chain fractions exceeds demand; demand for short-chain fractions such as gasoline exceeds supply.' },
      { n: 7, f: 'Addition vs substitution', b: 'Alkenes add (one product), e.g. C₂H₄ + Br₂ → C₂H₄Br₂.\nAlkanes substitute in UV light (two products, one is HX), e.g. C₃H₈ + Cl₂ → C₃H₇Cl + HCl.', src: ORG },
      { n: 8, f: 'Test to tell an alkene from an alkane', b: 'Bromine water: an alkene decolourises it (orange → colourless); an alkane leaves it orange.' },
      { n: 9, f: 'Making ethanol: hydration of ethene vs fermentation (Paper 2 only)', b: 'Hydration: C₂H₄ + H₂O → C₂H₅OH; phosphoric acid catalyst, about 300 °C, 60–70 atm.\nFermentation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂; yeast enzymes, about 30 °C, absence of air.' },
      { n: 10, f: 'Making an ester, with an example (Paper 2 only)', b: 'Alcohol + carboxylic acid ⇌ ester + water, with an acid catalyst. Ethanol + ethanoic acid → ethyl ethanoate, CH₃COOC₂H₅. Esters are used in food flavourings and perfumes.' },
      { n: 11, f: 'Addition polymer', b: 'Many monomers joined as the C=C opens. The repeat unit has only single bonds in the backbone and extension bonds through the brackets.', src: ORG },
      { n: 12, f: 'Addition vs condensation polymerisation', b: 'Addition gives one product only. Condensation also gives water — e.g. a dicarboxylic acid + a diol → polyester + water (Paper 2 only).', src: ORG },
    ]),
  ],
};
