/**
 * D-438 -- flashcards for AQA GCSE Chemistry 8462 (for teaching from September 2016).
 *
 * One block per subtopic (topic 1 and 2) or per topic (topics 3-11, which the
 * syllabus record itemises without subtopics), in syllabus order. Card ids are
 * `<subtopic number>-<n>` or `<topic number>-<n>` and are permanent (browser
 * progress is keyed by them): add a new card with the next unused n, never renumber.
 *
 *   u: true     Upper tier: Higher tier only content, following the (HT only) marks
 *               on Marlbridge's own 8462 revision notes. Foundation candidates can
 *               hide these cards.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 8462); origin 'revision-notes'.
 *
 * Plain text only (see types.ts). Unicode for formulae.
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; u?: true; src?: string }

const card = (topic: string, subtopic: string | undefined, number: string, { n, f, b, u, src }: Spec): Flashcard => ({
  id: `${number}-${n}`,
  topic,
  ...(subtopic ? { subtopic } : {}),
  front: f,
  back: b,
  ...(u ? { tier: 'upper' as const } : {}),
  origin: src ? 'revision-notes' as const : 'authored' as const,
  ...(src ? { source: src } : {}),
});

const sub = (topic: string, subtopic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map((s) => card(topic, subtopic, number, s));

/** For a topic the syllabus record itemises without subtopics: ids are `<topic number>-<n>`. */
const topicOnly = (topic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map((s) => card(topic, undefined, number, s));

const ATOM = 'aqa-gcse-chemistry-8462-atomic-structure-revision-notes';
const TRANS = 'aqa-gcse-chemistry-8462-properties-of-transition-metals-revision-notes';
const COV = 'aqa-gcse-chemistry-8462-covalent-and-metallic-bonding-revision-notes';
const IONIC = 'aqa-gcse-chemistry-ionic-bonding-revision-notes';
const ORG = 'aqa-gcse-chemistry-8462-organic-chemistry-revision-notes';
const ANAL = 'aqa-gcse-chemistry-8462-chemical-analysis-revision-notes';
const ATMOS = 'aqa-gcse-chemistry-8462-chemistry-of-the-atmosphere-revision-notes';
const KEY = 'aqa-gcse-chemistry-8462-key-ideas-revision-notes';

const T1 = 'atomic-structure-and-the-periodic-table-8462';
const T2 = 'bonding-structure-and-the-properties-of-matter-8462';

export const DECK_AQA_GCSE_CHEMISTRY: FlashcardDeck = {
  boardSlug: 'aqa',
  qualificationSlug: 'gcse',
  subjectSlug: 'chemistry',
  syllabusCode: '8462',
  syllabusSeries: 'For teaching from September 2016',
  tierScheme: 'foundation-higher',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // 1 Atomic structure and the periodic table
    ...sub(T1, 'atomic-structure-8462', '4.1.1', [
      { n: 1, f: 'Atom', b: 'The smallest part of an element that can exist.', src: ATOM },
      { n: 2, f: 'Compound', b: 'Two or more elements chemically combined in fixed proportions. It can be separated only by chemical reactions.', src: ATOM },
      { n: 3, f: 'Mixture vs compound', b: 'Mixture: not chemically combined, any proportions, each part keeps its properties, separated by physical processes.\nCompound: chemically combined, fixed proportions, new properties, separated only by chemical reactions.' },
      { n: 4, f: 'Plum pudding model vs nuclear model of the atom', b: 'Plum pudding: a ball of positive charge with electrons embedded in it, no nucleus.\nNuclear: a tiny, dense, positive nucleus holding almost all the mass, with electrons outside it and mostly empty space.' },
      { n: 5, f: 'Alpha scattering: the three observations and what each showed', b: 'Most passed straight through → the atom is mostly empty space.\nSome were deflected → the nucleus is positively charged.\nA very few bounced back → the nucleus is very small and holds most of the mass.' },
      { n: 6, f: 'What did Bohr and Chadwick add to the model of the atom?', b: 'Bohr: electrons orbit the nucleus at specific distances (shells).\nChadwick: neutrons exist in the nucleus.' },
      { n: 7, f: 'Relative charge and relative mass of a proton, a neutron and an electron', b: 'Proton: +1, mass 1.\nNeutron: 0, mass 1.\nElectron: −1, very small mass.' },
      { n: 8, f: 'Approximate radius of an atom and of its nucleus', b: 'Atom: about 0.1 nm (1 × 10⁻¹⁰ m).\nNucleus: about 1 × 10⁻¹⁴ m, less than 1/10 000 of the atomic radius.' },
      { n: 9, f: 'Isotopes', b: 'Atoms of the same element (same number of protons) with different numbers of neutrons. They have the same chemical properties.' },
      { n: 10, f: 'Chlorine is 75% chlorine-35 and 25% chlorine-37. Calculate its relative atomic mass.', b: '(35 × 75 + 37 × 25) ÷ 100 = (2625 + 925) ÷ 100 = 35.5' },
      { n: 11, f: 'How do electrons fill the shells for the first 20 elements? Give potassium (atomic number 19).', b: 'Lowest energy levels first: 2 in the first shell, 8 in the second, 8 in the third, then the fourth.\nPotassium: 2,8,8,1.' },
      { n: 12, f: 'Half equation for a sodium atom forming a sodium ion, and the rule for half equations', b: 'Na → Na⁺ + e⁻\nElectrons lost are written on the right, electrons gained on the left. Atoms and charge must both balance.', u: true },
    ]),
    ...sub(T1, 'the-periodic-table-8462', '4.1.2', [
      { n: 1, f: 'How is the modern periodic table ordered, and what do groups and periods tell you?', b: 'In order of atomic (proton) number.\nGroup number = number of outer-shell electrons (similar chemical properties).\nPeriod number = number of occupied shells.' },
      { n: 2, f: 'What did Mendeleev do that earlier tables did not?', b: 'He left gaps for undiscovered elements and predicted their properties, and he changed the atomic-weight order where properties required it (tellurium before iodine). Gallium and germanium were later found to fit his predictions.' },
      { n: 3, f: 'Why is argon placed before potassium although its relative atomic mass is higher?', b: 'Argon has the lower atomic number (18 vs 19). Its relative atomic mass is higher because nearly all argon is argon-40 while most potassium is potassium-39: Ar is an average over isotopes.' },
      { n: 4, f: 'Metal vs non-metal, defined by ions', b: 'A metal is an element that reacts to form positive ions (left and bottom of the table). A non-metal does not form positive ions (right and top).' },
      { n: 5, f: 'Why are the noble gases (Group 0) unreactive, and how do their boiling points change down the group?', b: 'They have a stable arrangement of electrons: a full outer shell (8, or 2 for helium), so they do not easily lose, gain or share electrons. Boiling points increase down the group.' },
      { n: 6, f: 'Explain why reactivity increases down Group 1', b: 'The outer electron is further from the nucleus, with more shielding by inner shells, so the attraction is weaker and the electron is lost more easily.' },
      { n: 7, f: 'Group 1 metal + water: word and balanced equation (M = Li, Na or K)', b: 'Metal + water → metal hydroxide + hydrogen\n2M + 2H₂O → 2MOH + H₂\nThe solution is alkaline (universal indicator turns purple).' },
      { n: 8, f: 'Group 7 trends down the group, with the reason for the reactivity trend', b: 'Melting and boiling points increase; reactivity decreases. The outer shell is further from the nucleus, so an incoming electron is attracted less strongly and gained less easily.' },
      { n: 9, f: 'Bromine water is added to sodium iodide solution. Equation and observation', b: 'Br₂ + 2NaI → 2NaBr + I₂\nThe more reactive bromine displaces iodine; the solution turns from orange to brown.' },
      { n: 10, f: 'Ionic equation for bromine displacing iodide ions', b: 'Br₂ + 2I⁻ → 2Br⁻ + I₂ (sodium ions are spectators).', u: true },
    ]),
    ...sub(T1, 'properties-of-transition-metals-8462', '4.1.3', [
      { n: 1, f: 'The six transition metals the specification uses as examples', b: 'Chromium, manganese, iron, cobalt, nickel, copper (Cr, Mn, Fe, Co, Ni, Cu).' },
      { n: 2, f: 'Transition elements', b: 'Metals in the central block of the periodic table, with similar properties to each other that are different from those of Group 1.', src: TRANS },
      { n: 3, f: 'Physical properties of transition metals compared with Group 1 metals', b: 'Transition metals have higher melting points (all six above 1000 °C; Group 1 all below 200 °C), higher density, and are stronger and harder.' },
      { n: 4, f: 'Reactivity of transition metals compared with Group 1', b: 'Much less reactive with oxygen, water and halogens. Copper does not react with water; Group 1 metals react with cold water. Transition metals are less reactive, not unreactive.' },
      { n: 5, f: 'Three typical properties of many transition elements', b: 'Ions with different charges (Fe²⁺ and Fe³⁺), coloured compounds, and use as catalysts. The specification says "many", not "all".' },
      { n: 6, f: 'Name two transition metal catalysts and their reactions', b: 'Iron: the Haber process, N₂ + 3H₂ ⇌ 2NH₃.\nManganese(IV) oxide: decomposition of hydrogen peroxide, 2H₂O₂ → 2H₂O + O₂.' },
      { n: 7, f: 'Formula of iron(III) sulfate', b: 'Fe³⁺ and SO₄²⁻: two Fe³⁺ (6+) balance three SO₄²⁻ (6−), so Fe₂(SO₄)₃. The Roman numeral gives the metal ion charge.' },
    ]),

    // 2 Bonding, structure, and the properties of matter
    ...sub(T2, 'chemical-bonds-8462', '4.2.1.1', [
      { n: 1, f: 'The three types of strong chemical bond and where each occurs', b: 'Ionic: compounds of metals with non-metals.\nCovalent: most non-metallic elements and compounds of non-metals.\nMetallic: metallic elements and alloys.' },
      { n: 2, f: 'What happens to the electrons in ionic, covalent and metallic bonding?', b: 'Ionic: transferred from metal to non-metal.\nCovalent: shared in pairs.\nMetallic: delocalised and shared through the structure.' },
      { n: 3, f: 'What attracts what in each type of strong bond?', b: 'Ionic: positive ions and negative ions.\nCovalent: the shared pair of electrons and the nuclei of both atoms.\nMetallic: delocalised electrons and positive metal centres.\nAll are electrostatic attractions.' },
      { n: 4, f: 'How do you decide the bond type from the elements present?', b: 'Metal + non-metal compound → ionic.\nNon-metal(s) only → covalent.\nMetal(s) only, element or alloy → metallic.\nA single noble gas → no strong bonds.' },
      { n: 5, f: 'What type of bonding is in solder, an alloy of tin and lead?', b: 'Metallic. An alloy of metals is metallic, not ionic, even though it contains two elements.' },
    ]),
    ...sub(T2, 'ionic-bonding-8462', '4.2.1.2', [
      { n: 1, f: 'Ionic bonding: particles involved and where it occurs', b: 'Oppositely charged ions, in compounds of a metal with a non-metal.', src: IONIC },
      { n: 2, f: 'How does an ionic bond form?', b: 'Outer-shell electrons transfer: the metal atom loses electrons to form a positive ion, the non-metal atom gains them to form a negative ion. Then the oppositely charged ions attract by strong electrostatic forces.' },
      { n: 3, f: 'Ion charges for Groups 1, 2, 6 and 7', b: 'Group 1: loses 1 → 1+.\nGroup 2: loses 2 → 2+.\nGroup 6: gains 2 → 2−.\nGroup 7: gains 1 → 1−.' },
      { n: 4, f: 'Magnesium oxide: what happens to the electrons, and which electronic structures result?', b: 'Mg (Group 2) loses 2 electrons → Mg²⁺. O (Group 6) gains 2 → O²⁻. Both ions have the electronic structure of neon, the nearest noble gas.' },
      { n: 5, f: 'Sodium chloride: the electronic structures of the two ions', b: 'Na⁺: 2,8 (like neon). Cl⁻: 2,8,8 (like argon).' },
      { n: 6, f: 'Conventions for an ionic dot and cross diagram', b: 'Dots for electrons from one atom, crosses for the other; usually outer shell only; each finished ion in square brackets with its charge.' },
    ]),
    ...sub(T2, 'ionic-compounds-8462', '4.2.1.3', [
      { n: 1, f: 'Ionic compound (structure)', b: 'A giant structure of ions held together by strong electrostatic forces of attraction between oppositely charged ions. The forces act in all directions in the lattice.' },
      { n: 2, f: 'Describe the structure of sodium chloride', b: 'Na⁺ and Cl⁻ ions alternate in a regular cubic lattice; each ion has six oppositely charged nearest neighbours. Ratio 1 : 1, and there are no separate NaCl molecules.' },
      { n: 3, f: 'A model of an ionic compound has 10 potassium ions and 5 oxide ions. Empirical formula?', b: '10 : 5 = 2 : 1, so K₂O. Check: 2(+1) + (−2) = 0.' },
      { n: 4, f: 'One limitation of a ball and stick model of sodium chloride', b: 'Any one: the sticks suggest bonds between particular pairs of ions, when forces act in all directions; ions are shown too far apart; sizes may be wrong; only a tiny part of the lattice is shown.' },
      { n: 5, f: 'One limitation of a dot and cross diagram for an ionic compound', b: 'Any one: shows one pair of ions only; no 3D arrangement; no relative sizes; does not show the forces acting in all directions.' },
      { n: 6, f: 'In a diagram, how do you tell an ionic structure from a metallic one?', b: 'Ionic: two types of particle, positive and negative ions. Metallic: positive particles among delocalised electrons, with no negative ions.' },
    ]),
    ...sub(T2, 'covalent-bonding-8462', '4.2.1.4', [
      { n: 1, f: 'Covalent bond', b: 'A shared pair of electrons between two atoms. Covalent bonds are strong.', src: COV },
      { n: 2, f: 'How many covalent bonds do H, C, N, O and Cl form?', b: 'H 1, C 4, N 3, O 2, Cl 1. For Groups 4 to 7: bonds = 8 − group number.' },
      { n: 3, f: 'Nitrogen, N₂: shared and non-shared pairs', b: 'A triple bond (N≡N): 3 shared pairs, and 1 non-shared pair on each N.' },
      { n: 4, f: 'Water, H₂O: shared and non-shared pairs', b: '2 shared pairs (two O–H bonds) and 2 non-shared pairs on the oxygen.' },
      { n: 5, f: 'CO₂ and SiO₂: which structure is each?', b: 'CO₂: small molecules. SiO₂: giant covalent (each Si bonded to 4 O, each O to 2 Si). For a giant structure the formula gives only the ratio of atoms.' },
      { n: 6, f: 'Polymer', b: 'A very large molecule made of many repeating units joined by covalent bonds.', src: COV },
      { n: 7, f: 'A model shows 2 N atoms and 4 H atoms in one molecule. Molecular formula?', b: 'N₂H₄. A molecular formula gives the actual number of atoms: do not cancel it to NH₂.' },
    ]),
    ...sub(T2, 'metallic-bonding-8462', '4.2.1.5', [
      { n: 1, f: 'Delocalised electrons (in a metal)', b: 'Outer-shell electrons from metal atoms that are free to move through the whole structure.', src: COV },
      { n: 2, f: 'Metallic bond', b: 'The strong bond that comes from sharing delocalised electrons among the metal atoms in a giant regular structure.', src: COV },
      { n: 3, f: 'How are the atoms arranged in a metal?', b: 'A giant structure of atoms arranged in a regular pattern.' },
      { n: 4, f: 'How many delocalised electrons does each atom of sodium, calcium and aluminium provide?', b: 'The number of outer electrons: sodium 1 (Na⁺ left), calcium 2 (Ca²⁺), aluminium 3 (Al³⁺).' },
      { n: 5, f: 'Covalent vs metallic bonding: electrons and structure', b: 'Covalent: electrons shared in pairs between two particular atoms; small molecule, polymer or giant covalent.\nMetallic: electrons delocalised across the whole structure; always giant and regular.' },
    ]),

    // 3 Quantitative chemistry
    ...topicOnly('quantitative-chemistry-8462', '3', [
      { n: 1, f: 'Law of conservation of mass', b: 'No atoms are lost or made in a chemical reaction, so the mass of the products equals the mass of the reactants.' },
      { n: 2, f: 'Calculate the Mr of Ca(OH)₂ (Ca = 40, O = 16, H = 1)', b: '40 + 2 × (16 + 1) = 74' },
      { n: 3, f: 'Percentage by mass of nitrogen in NH₄NO₃ (N = 14, H = 1, O = 16)', b: 'Mr = 14 + 4 + 14 + 48 = 80.\n% N = (2 × 14) ÷ 80 × 100 = 35%' },
      { n: 4, f: 'Why does mass increase when magnesium is heated in an open crucible, but decrease when calcium carbonate is heated?', b: 'Magnesium: oxygen atoms from the air join it in the solid oxide.\nCalcium carbonate: carbon dioxide gas escapes into the air.\nMass is still conserved in both.' },
      { n: 5, f: 'How is the uncertainty of a mean worked out?', b: '± half the range of the readings. Example: 31.2, 30.8, 31.6 cm³ → mean 31.2, range 0.8, result 31.2 ± 0.4 cm³.' },
      { n: 6, f: 'Moles from mass, and the Avogadro constant', b: 'moles = mass (g) ÷ Mr. One mole of any substance contains 6.02 × 10²³ of the stated particles.', u: true },
      { n: 7, f: 'Limiting reactant', b: 'The reactant that is used up completely. It fixes the amount of product; the other reactant is in excess. Compare moles against the equation ratio, not masses.', u: true },
      { n: 8, f: '15 g of solute is dissolved to make 250 cm³ of solution. Concentration in g/dm³?', b: '15 ÷ 0.250 = 60 g/dm³ (divide cm³ by 1000 to get dm³).' },
      { n: 9, f: 'Percentage yield: formula, and why it is less than 100%', b: 'mass of product actually made ÷ maximum theoretical mass × 100.\nLess because the reaction may be reversible, some product is lost when it is separated, or reactants react in unexpected ways.' },
      { n: 10, f: 'Atom economy: formula, and the value for making CaO from CaCO₃ → CaO + CO₂', b: 'Mr of desired product ÷ sum of Mr of all reactants × 100.\nCaO: 56 ÷ 100 × 100 = 56%' },
      { n: 11, f: 'Volume of one mole of gas at RTP. What volume does 3.2 g of O₂ occupy?', b: '24 dm³ at RTP (20 °C, 1 atmosphere).\n3.2 ÷ 32 = 0.10 mol → 0.10 × 24 = 2.4 dm³', u: true },
      { n: 12, f: '0.050 mol of solute is dissolved in 250 cm³. Concentration in mol/dm³?', b: '0.050 ÷ 0.250 = 0.20 mol/dm³. Multiply by Mr to convert to g/dm³.', u: true },
    ]),

    // 4 Chemical changes
    ...topicOnly('chemical-changes-8462', '4', [
      { n: 1, f: 'Oxidation and reduction in terms of oxygen', b: 'Oxidation: gain of oxygen.\nReduction: loss of oxygen.' },
      { n: 2, f: 'Oxidation and reduction in terms of electrons', b: 'Oxidation is loss of electrons; reduction is gain of electrons.', u: true },
      { n: 3, f: 'The reactivity series in the specification, most reactive first (with carbon and hydrogen)', b: 'Potassium, sodium, lithium, calcium, magnesium, [carbon], zinc, iron, [hydrogen], copper.' },
      { n: 4, f: 'How is a metal extracted if it is below carbon, and if it is above carbon?', b: 'Below carbon: reduce the oxide by heating with carbon (the oxide is reduced, carbon is oxidised).\nAbove carbon: electrolysis of the molten compound.' },
      { n: 5, f: 'Ionic equation for iron displacing copper from copper sulfate. Which species is oxidised?', b: 'Fe + Cu²⁺ → Fe²⁺ + Cu (SO₄²⁻ is a spectator ion). Iron loses electrons, so it is oxidised; copper ions are reduced.', u: true },
      { n: 6, f: 'Products of acid + metal carbonate, and of acid + alkali', b: 'Acid + metal carbonate → salt + water + carbon dioxide.\nAcid + alkali → salt + water.' },
      { n: 7, f: 'Required practical 1: making a soluble salt from an insoluble oxide or carbonate', b: 'Warm the acid, add the solid until some is left unreacted (excess), filter off the excess, evaporate some water from the filtrate, leave to crystallise, filter and dry. Excess makes sure all the acid reacts.' },
      { n: 8, f: 'Ionic equation for neutralisation', b: 'H⁺(aq) + OH⁻(aq) → H₂O(l)' },
      { n: 9, f: 'Strong acid vs weak acid, with examples', b: 'Strong: completely ionised in aqueous solution (hydrochloric, nitric, sulfuric).\nWeak: only partially ionised (ethanoic, citric, carbonic). Strength is not the same as concentration.', u: true },
      { n: 10, f: 'A solution changes from pH 5 to pH 3. By what factor does [H⁺] change?', b: 'Each fall of 1 pH unit multiplies [H⁺] by 10, so two units → × 100.', u: true },
      { n: 11, f: 'Electrolysis of an aqueous solution: rules for the products', b: 'Cathode: hydrogen if the metal is more reactive than hydrogen, otherwise the metal.\nAnode: the halogen if a halide ion is present, otherwise oxygen.' },
      { n: 12, f: 'Extracting aluminium: why cryolite, and why the anodes are replaced', b: 'Aluminium oxide is dissolved in molten cryolite to lower the melting temperature, so less energy is needed. Oxygen made at the carbon anode reacts with it to form carbon dioxide, so the anode wears away.' },
    ]),

    // 5 Energy changes
    ...topicOnly('energy-changes-8462', '5', [
      { n: 1, f: 'Exothermic vs endothermic reaction', b: 'Exothermic: transfers energy to the surroundings, so the temperature of the surroundings increases.\nEndothermic: takes in energy from the surroundings, so their temperature decreases.' },
      { n: 2, f: 'Examples and uses of exothermic reactions', b: 'Examples: combustion, many oxidation reactions, neutralisation.\nUses: self-heating cans, hand warmers.' },
      { n: 3, f: 'Examples and a use of endothermic reactions', b: 'Examples: thermal decompositions; citric acid + sodium hydrogencarbonate.\nUse: some sports injury packs.' },
      { n: 4, f: 'Required practical 4: measuring a temperature change in a reacting solution', b: 'Polystyrene cup in a beaker; measure a fixed volume of solution; record the start temperature; add the other reactant, stir, fit a lid; record the highest (or lowest) temperature. Change = final − initial.' },
      { n: 5, f: 'On a reaction profile, where are the activation energy and the overall energy change?', b: 'Activation energy: from the reactant level up to the peak.\nOverall energy change: from the reactant level to the product level (products lower for exothermic, higher for endothermic).' },
      { n: 6, f: 'Reactants 80 kJ, peak 250 kJ, products 150 kJ. Activation energy and overall change?', b: 'Activation energy = 250 − 80 = 170 kJ.\nOverall change = 150 − 80 = +70 kJ, so endothermic.' },
      { n: 7, f: 'Bond breaking and bond making: which takes in energy?', b: 'Breaking bonds takes in energy (endothermic). Forming bonds releases energy (exothermic). Overall exothermic when more energy is released forming bonds than is needed to break them.', u: true },
      { n: 8, f: 'N₂ + 3H₂ → 2NH₃. N≡N 945, H–H 436, N–H 391 kJ/mol. Energy change?', b: 'Broken: 945 + 3 × 436 = 2253.\nFormed: 2 × 3 × 391 = 2346.\nChange = 2253 − 2346 = −93 kJ/mol (exothermic).', u: true },
      { n: 9, f: 'Simple chemical cell: what is it, and what affects the voltage?', b: 'Two different metals in contact with an electrolyte. The voltage depends on the electrodes and the electrolyte; the bigger the difference in reactivity of the metals, the bigger the voltage.' },
      { n: 10, f: 'Battery; non-rechargeable vs rechargeable', b: 'A battery is two or more cells in series (voltages add).\nNon-rechargeable: reactions stop when a reactant is used up.\nRechargeable: reactions are reversed by an external electrical current.' },
      { n: 11, f: 'Hydrogen fuel cell: overall reaction, one advantage and one disadvantage', b: '2H₂ + O₂ → 2H₂O.\nFor: the only product is water; no recharging.\nAgainst: hydrogen is hard to store and flammable; making it often uses fossil fuels.' },
      { n: 12, f: 'Half equations in a hydrogen fuel cell (acidic electrolyte)', b: 'Negative electrode: 2H₂ → 4H⁺ + 4e⁻ (oxidation).\nPositive electrode: O₂ + 4H⁺ + 4e⁻ → 2H₂O (reduction).', u: true },
    ]),

    // 6 The rate and extent of chemical change
    ...topicOnly('the-rate-and-extent-of-chemical-change-8462', '6', [
      { n: 1, f: 'Mean rate of reaction: formula and units', b: 'Quantity of reactant used (or product formed) ÷ time taken. Units g/s or cm³/s. Example: 84 cm³ in 60 s → 1.4 cm³/s.' },
      { n: 2, f: '0.44 g of CO₂ (Mr 44) forms in 50 s. Mean rate in mol/s?', b: '0.44 ÷ 44 = 0.010 mol; 0.010 ÷ 50 = 2.0 × 10⁻⁴ mol/s', u: true },
      { n: 3, f: 'How do you find the rate at one moment from a graph?', b: 'Draw a tangent to the curve at that time and find its gradient: (y₂ − y₁) ÷ (x₂ − x₁), using two points far apart on the tangent.', u: true },
      { n: 4, f: 'The five factors that increase the rate of reaction', b: 'Higher concentration, higher pressure (gases), larger surface area (smaller pieces), higher temperature, and adding a catalyst.' },
      { n: 5, f: 'Use collision theory to explain why a higher temperature increases the rate', b: 'Particles move faster, so collisions are more frequent and more energetic: more collisions have at least the activation energy, so more are successful.' },
      { n: 6, f: 'How does a catalyst increase the rate?', b: 'It provides a different reaction pathway with a lower activation energy. It is not used up and is not written in the equation.' },
      { n: 7, f: 'Required practical 5: the disappearing cross method', b: 'Put a flask of sodium thiosulfate solution on a paper cross, add hydrochloric acid and start the timer; stop it when the cross disappears. Relative rate = 1 ÷ time. Repeat for other concentrations.' },
      { n: 8, f: 'Reversible reactions and energy', b: 'The products can react to produce the original reactants (⇌). If one direction is exothermic, the other is endothermic, and the same amount of energy is transferred.' },
      { n: 9, f: 'Equilibrium', b: 'In a closed system, when the forward and reverse reactions occur at exactly the same rate. The reactions do not stop.' },
      { n: 10, f: "Le Chatelier's Principle", b: 'If a condition is changed at equilibrium, the system responds to counteract the change.', u: true },
      { n: 11, f: 'Effect of raising the temperature on an equilibrium', b: 'The equilibrium shifts in the endothermic direction. If the forward reaction is exothermic, the relative amount of products decreases.', u: true },
      { n: 12, f: '2NO₂(g) ⇌ N₂O₄(g). Effect of increasing the pressure?', b: 'Shifts to the side with fewer gas molecules: to the right, towards N₂O₄ (1 molecule instead of 2).', u: true },
    ]),

    // 7 Organic chemistry
    ...topicOnly('organic-chemistry-8462', '7', [
      { n: 1, f: 'Hydrocarbon', b: 'A compound of hydrogen and carbon only.', src: ORG },
      { n: 2, f: 'Homologous series', b: 'A family of compounds with the same general formula and the same functional group.', src: ORG },
      { n: 3, f: 'Alkanes: general formula and the first four', b: 'CₙH₂ₙ₊₂ (saturated, only single C–C bonds). Methane, ethane, propane, butane.' },
      { n: 4, f: 'How does fractional distillation separate crude oil?', b: 'Crude oil is heated to evaporate it; the vapour rises up a column that is hot at the bottom and cooler at the top; each hydrocarbon condenses at a level below its boiling point. Long chains collect low, short chains high.' },
      { n: 5, f: 'How do boiling point, viscosity and flammability change as hydrocarbon molecules get larger?', b: 'Boiling point increases, viscosity increases, flammability decreases.' },
      { n: 6, f: 'Cracking: what it is, and the two methods', b: 'Breaking large hydrocarbons into smaller, more useful molecules (smaller alkanes + alkenes).\nCatalytic: vapour over a hot catalyst. Steam: vapour mixed with steam at a very high temperature.' },
      { n: 7, f: 'Test for an alkene', b: 'Shake with bromine water: orange → colourless. An alkane leaves it orange.' },
      { n: 8, f: 'What forms when an alcohol reacts with sodium, and with an oxidising agent?', b: 'Sodium: fizzing, hydrogen given off.\nOxidising agent: a carboxylic acid (propanol → propanoic acid).' },
      { n: 9, f: 'Ethanoic acid + ethanol (acid catalyst) gives…', b: 'The ester ethyl ethanoate, and water.' },
      { n: 10, f: 'Addition polymerisation', b: 'Many alkene monomers join as the C=C opens to C–C. Nothing else forms, so the repeating unit has the same atoms as the monomer. Example: ethene → poly(ethene).' },
      { n: 11, f: 'Condensation polymerisation', b: 'Monomers each with two functional groups join, losing a small molecule (usually water) at each link. Example: ethanediol + hexanedioic acid → a polyester + water.', u: true },
      { n: 12, f: 'Amino acids and proteins', b: 'An amino acid has two different functional groups (–NH₂ and –COOH), such as glycine, H₂NCH₂COOH. Amino acids join by condensation polymerisation to make polypeptides; different amino acids make proteins.', u: true },
    ]),

    // 8 Chemical analysis
    ...topicOnly('chemical-analysis-8462', '8', [
      { n: 1, f: 'Pure substance (in chemistry), and how melting point shows purity', b: 'A single element or compound, not mixed with any other substance. A pure substance melts sharply at its known value; an impure one melts lower and over a range.' },
      { n: 2, f: 'Formulation', b: 'A mixture designed as a useful product, with components in carefully measured quantities, each with a particular purpose.', src: ANAL },
      { n: 3, f: 'Rf value, and a worked example: solvent 6.0 cm, spot 4.2 cm', b: 'Rf = distance moved by substance ÷ distance moved by solvent, both from the origin line.\n4.2 ÷ 6.0 = 0.70. No units; always less than 1.' },
      { n: 4, f: 'Chromatography (RP 6): why a pencil origin line, and where the solvent level goes', b: 'Pencil does not dissolve and run (ink would). The solvent level is below the origin line, so the spots do not dissolve into the solvent.' },
      { n: 5, f: 'Tests for hydrogen and oxygen', b: 'Hydrogen: burning splint at the mouth of the tube → squeaky pop.\nOxygen: glowing splint relights.' },
      { n: 6, f: 'Tests for carbon dioxide and chlorine', b: 'Carbon dioxide: limewater turns milky.\nChlorine: damp litmus paper is bleached white.' },
      { n: 7, f: 'Flame test colours: Li⁺, Na⁺, K⁺, Ca²⁺, Cu²⁺', b: 'Li⁺ crimson, Na⁺ yellow, K⁺ lilac, Ca²⁺ orange-red, Cu²⁺ green.' },
      { n: 8, f: 'Sodium hydroxide precipitates: Al³⁺, Ca²⁺, Mg²⁺, Cu²⁺, Fe²⁺, Fe³⁺', b: 'Al³⁺, Ca²⁺, Mg²⁺: white (only the aluminium one dissolves in excess).\nCu²⁺: blue. Fe²⁺: green. Fe³⁺: brown.' },
      { n: 9, f: 'Test for halide ions, and the results', b: 'Add dilute nitric acid, then silver nitrate solution.\nCl⁻ white, Br⁻ cream, I⁻ yellow precipitate.' },
      { n: 10, f: 'Tests for sulfate and carbonate ions', b: 'Sulfate: dilute hydrochloric acid, then barium chloride solution → white precipitate.\nCarbonate: dilute acid → fizzing; the gas turns limewater milky.' },
      { n: 11, f: 'Why is nitric acid, not hydrochloric acid, used to acidify in the halide test?', b: 'Acid removes carbonate ions, which would also give a precipitate. Hydrochloric acid would add chloride ions and give a false positive for chloride.' },
      { n: 12, f: 'Flame emission spectroscopy', b: 'The sample is put in a flame and the light is passed through a spectroscope to give a line spectrum. Lines identify the metal ions (even in mixtures); intensity gives the concentration.', src: ANAL },
    ]),

    // 9 Chemistry of the atmosphere
    ...topicOnly('chemistry-of-the-atmosphere-8462', '9', [
      { n: 1, f: "Composition of today's atmosphere", b: 'About 80% (four-fifths) nitrogen and about 20% (one-fifth) oxygen, with small amounts of carbon dioxide, water vapour and noble gases.' },
      { n: 2, f: "Earth's early atmosphere: where it came from and what it contained", b: 'Intense volcanic activity released mainly carbon dioxide and water vapour, with nitrogen; there was little or no oxygen. Water vapour condensed to form the oceans.' },
      { n: 3, f: 'How did oxygen build up in the atmosphere?', b: 'Algae began photosynthesis about 2.7 billion years ago; then plants evolved, and oxygen rose over the next billion years until animals could evolve.\n6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂' },
      { n: 4, f: 'How did the amount of carbon dioxide decrease?', b: 'It dissolved in the oceans (carbonates precipitated), was used in photosynthesis, and was locked up in sedimentary rocks and fossil fuels.' },
      { n: 5, f: 'How was limestone formed?', b: 'From the calcium carbonate shells and skeletons of sea creatures, compressed on the sea bed.', src: ATMOS },
      { n: 6, f: 'The greenhouse effect: name three greenhouse gases and describe how they warm the atmosphere', b: 'Water vapour, carbon dioxide, methane. The surface absorbs short wavelength radiation from the Sun and emits long wavelength (infrared) radiation; greenhouse gases absorb it and re-emit some back, so less energy escapes.' },
      { n: 7, f: 'Two human activities that increase carbon dioxide, and two that increase methane', b: 'Carbon dioxide: burning fossil fuels, deforestation.\nMethane: cattle farming, rice paddy fields (also landfill waste decay).' },
      { n: 8, f: 'Carbon footprint', b: 'The total amount of carbon dioxide and other greenhouse gases emitted over the full life cycle of a product, service or event.' },
      { n: 9, f: 'Effects of carbon monoxide, sulfur dioxide, oxides of nitrogen and particulates', b: 'CO: toxic; colourless and odourless, so hard to detect.\nSO₂ and oxides of nitrogen: respiratory problems and acid rain.\nParticulates: global dimming and health problems.' },
      { n: 10, f: 'Where does the nitrogen in oxides of nitrogen from a car engine come from?', b: 'From the air: nitrogen and oxygen react at the high temperature in the engine, not nitrogen in the fuel.' },
    ]),

    // 10 Using resources
    ...topicOnly('using-resources-8462', '10', [
      { n: 1, f: 'Sustainable development', b: 'Development that meets the needs of current generations without compromising the ability of future generations to meet their own needs.' },
      { n: 2, f: 'Potable water vs pure water', b: 'Potable: safe to drink, with low levels of dissolved salts and microbes.\nPure: only water molecules, no dissolved substances.' },
      { n: 3, f: 'How is potable water produced from fresh water in the UK?', b: 'Choose a suitable source (ground water, lakes, rivers), pass it through filter beds to remove solids, then sterilise with chlorine, ozone or ultraviolet light.' },
      { n: 4, f: 'Desalination: two methods and their drawback', b: 'Distillation or reverse osmosis. Both need large amounts of energy.' },
      { n: 5, f: 'Stages of sewage treatment, in order', b: 'Screening and grit removal → sedimentation (sludge and effluent) → anaerobic digestion of the sludge → aerobic biological treatment of the effluent.' },
      { n: 6, f: 'Phytomining and bioleaching', b: 'Phytomining: plants absorb metal compounds, are harvested and burned; the ash contains metal compounds.\nBioleaching: bacteria produce leachate solutions containing metal compounds.\nThe metal is then obtained by displacement with scrap iron or electrolysis.', u: true },
      { n: 7, f: 'Stages of a life cycle assessment (LCA), and why it is not fully objective', b: 'Raw materials → manufacture and packaging → use → disposal (with transport throughout). Pollutant effects are hard to quantify and need value judgements.' },
      { n: 8, f: 'What does rusting need, and how does galvanising protect iron?', b: 'Both air (oxygen) and water. Galvanising coats iron with zinc: a barrier, plus sacrificial protection, because zinc is more reactive and corrodes instead of the iron, even when scratched.' },
      { n: 9, f: 'Percentage of gold in 18 carat gold', b: '% gold = carat ÷ 24 × 100 = 18 ÷ 24 × 100 = 75%. (24 carat is 100% gold.)' },
      { n: 10, f: 'Thermosoftening vs thermosetting polymers', b: 'Thermosoftening: no cross-links, weak forces between chains, so they melt on heating.\nThermosetting: cross-links between chains, so they do not melt.' },
      { n: 11, f: 'Haber process: equation, raw materials and conditions', b: 'N₂ + 3H₂ ⇌ 2NH₃. Nitrogen from the air, hydrogen from natural gas. Iron catalyst, about 450 °C, about 200 atmospheres. Ammonia is removed by cooling (it liquefies); unreacted gases are recycled.' },
      { n: 12, f: 'Why are 450 °C and 200 atmospheres compromise conditions in the Haber process?', b: 'Forward reaction exothermic: a lower temperature gives a higher yield but a slower rate.\n4 gas molecules → 2: higher pressure gives a higher yield and faster rate, but costs more in equipment and energy.', u: true },
    ]),

    // 11 Key ideas
    ...topicOnly('key-ideas-8462', '11', [
      { n: 1, f: 'Element', b: 'A substance made of one type of atom; all its atoms have the same number of protons.', src: KEY },
      { n: 2, f: 'Relative atomic mass', b: 'An average value that takes account of the abundance of the isotopes of the element.', src: KEY },
      { n: 3, f: 'Activation energy', b: 'The minimum amount of energy that particles must have to react.', src: KEY },
      { n: 4, f: 'Catalyst', b: 'Changes the rate of reaction but is not used up; it gives a pathway with a lower activation energy.', src: KEY },
      { n: 5, f: 'The three ways in which chemical reactions take place, and which one neutralisation is', b: 'Proton transfer, electron transfer and electron sharing. Neutralisation is proton transfer: H⁺ ions react with OH⁻ ions to form water.' },
      { n: 6, f: 'Why do ionic compounds conduct electricity only when molten or dissolved?', b: 'The ions must be free to move to carry charge; in the solid they are held in fixed positions in the lattice.' },
      { n: 7, f: 'Why does graphite conduct electricity but diamond does not?', b: 'In graphite each carbon forms three bonds, leaving one delocalised electron per atom that can move. In diamond all four outer electrons are used in covalent bonds.' },
      { n: 8, f: 'Why does a small molecular substance have a low melting point?', b: 'Only the weak intermolecular forces between molecules are overcome, which needs little energy. The strong covalent bonds inside the molecules do not break.' },
      { n: 9, f: 'Number of protons, neutrons and electrons in ³⁷Cl⁻ (atomic number 17)', b: '17 protons, 37 − 17 = 20 neutrons, 17 + 1 = 18 electrons.' },
      { n: 10, f: 'How many times greater is [H⁺] at pH 2 than at pH 6?', b: '10⁽⁶⁻²⁾ = 10⁴ = 10 000 times.', u: true },
    ]),
  ],
};
