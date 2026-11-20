/**
 * D-444 -- flashcards for AQA GCSE Chemistry 8462 (for teaching from September 2016).
 *
 * One block per subtopic (topics 1 to 10, which the syllabus record itemises into
 * subtopics) or per topic (topic 11, which it itemises without subtopics), in syllabus
 * order. Card ids are `<subtopic number>-<n>` or `<topic number>-<n>` and are permanent
 * (browser progress is keyed by them): add a new card with the next unused n, never
 * renumber.
 *
 * 20 Nov 2026: the cards that sat on whole topics 3 to 10 were re-filed under those
 * topics' subtopics, so they have new ids; `idMigration` below moves browser progress
 * saved before that date onto the new ids.
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
const STATES = 'aqa-gcse-chemistry-8462-three-states-of-matter-revision-notes';
const SYMB = 'aqa-gcse-chemistry-8462-state-symbols-revision-notes';
const IONPROP = 'aqa-gcse-chemistry-8462-properties-of-ionic-compounds-revision-notes';
const SMALL = 'aqa-gcse-chemistry-8462-properties-of-small-molecules-revision-notes';
const POLY = 'aqa-gcse-chemistry-8462-polymers-revision-notes';
const GIANT = 'aqa-gcse-chemistry-8462-giant-covalent-structures-revision-notes';
const METAL = 'aqa-gcse-chemistry-8462-properties-of-metals-and-alloys-revision-notes';
const MCOND = 'aqa-gcse-chemistry-8462-metals-as-conductors-revision-notes';
const DIAM = 'aqa-gcse-chemistry-8462-diamond-revision-notes';
const GRAPH = 'aqa-gcse-chemistry-8462-graphite-revision-notes';
const FULL = 'aqa-gcse-chemistry-8462-graphene-and-fullerenes-revision-notes';
const SIZES = 'aqa-gcse-chemistry-8462-sizes-of-particles-and-their-properties-revision-notes';
const NANOUSE = 'aqa-gcse-chemistry-8462-uses-of-nanoparticles-revision-notes';

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
  updated: '2026-11-20',
  deckReview: { reviewerSlug: 'nouman-ahmed', reviewedOn: '2026-11-05' },
  // Re-filed under the new subtopics on 2026-11-20: old id -> new id for every card, so progress
  // saved before then follows each card. Cards that were already on a subtopic keep their id.
  idMigration: {
    id: '8462-subtopics-2026-11-20',
    before: '2026-11-20',
    map: {
      '4.1.1-1': '4.1.1-1', '4.1.1-2': '4.1.1-2', '4.1.1-3': '4.1.1-3', '4.1.1-4': '4.1.1-4', '4.1.1-5': '4.1.1-5',
      '4.1.1-6': '4.1.1-6', '4.1.1-7': '4.1.1-7', '4.1.1-8': '4.1.1-8', '4.1.1-9': '4.1.1-9', '4.1.1-10': '4.1.1-10',
      '4.1.1-11': '4.1.1-11', '4.1.1-12': '4.1.1-12', '4.1.2-1': '4.1.2-1', '4.1.2-2': '4.1.2-2', '4.1.2-3': '4.1.2-3',
      '4.1.2-4': '4.1.2-4', '4.1.2-5': '4.1.2-5', '4.1.2-6': '4.1.2-6', '4.1.2-7': '4.1.2-7', '4.1.2-8': '4.1.2-8',
      '4.1.2-9': '4.1.2-9', '4.1.2-10': '4.1.2-10', '4.1.3-1': '4.1.3-1', '4.1.3-2': '4.1.3-2', '4.1.3-3': '4.1.3-3',
      '4.1.3-4': '4.1.3-4', '4.1.3-5': '4.1.3-5', '4.1.3-6': '4.1.3-6', '4.1.3-7': '4.1.3-7', '4.2.1.1-1': '4.2.1.1-1',
      '4.2.1.1-2': '4.2.1.1-2', '4.2.1.1-3': '4.2.1.1-3', '4.2.1.1-4': '4.2.1.1-4', '4.2.1.1-5': '4.2.1.1-5', '4.2.1.2-1': '4.2.1.2-1',
      '4.2.1.2-2': '4.2.1.2-2', '4.2.1.2-3': '4.2.1.2-3', '4.2.1.2-4': '4.2.1.2-4', '4.2.1.2-5': '4.2.1.2-5', '4.2.1.2-6': '4.2.1.2-6',
      '4.2.1.3-1': '4.2.1.3-1', '4.2.1.3-2': '4.2.1.3-2', '4.2.1.3-3': '4.2.1.3-3', '4.2.1.3-4': '4.2.1.3-4', '4.2.1.3-5': '4.2.1.3-5',
      '4.2.1.3-6': '4.2.1.3-6', '4.2.1.4-1': '4.2.1.4-1', '4.2.1.4-2': '4.2.1.4-2', '4.2.1.4-3': '4.2.1.4-3', '4.2.1.4-4': '4.2.1.4-4',
      '4.2.1.4-5': '4.2.1.4-5', '4.2.1.4-6': '4.2.1.4-6', '4.2.1.4-7': '4.2.1.4-7', '4.2.1.5-1': '4.2.1.5-1', '4.2.1.5-2': '4.2.1.5-2',
      '4.2.1.5-3': '4.2.1.5-3', '4.2.1.5-4': '4.2.1.5-4', '4.2.1.5-5': '4.2.1.5-5', '3-1': '4.3.1-1', '3-2': '4.3.1-2',
      '3-3': '4.3.1-3', '3-4': '4.3.1-4', '3-5': '4.3.1-5', '3-6': '4.3.2-1', '3-7': '4.3.2-2',
      '3-8': '4.3.2-3', '3-9': '4.3.3-1', '3-10': '4.3.3-2', '3-11': '4.3.5-1', '3-12': '4.3.4-1',
      '4-1': '4.4.1-1', '4-2': '4.4.1-2', '4-3': '4.4.1-3', '4-4': '4.4.1-4', '4-5': '4.4.1-5',
      '4-6': '4.4.2-1', '4-7': '4.4.2-2', '4-8': '4.4.2-3', '4-9': '4.4.2-4', '4-10': '4.4.2-5',
      '4-11': '4.4.3-1', '4-12': '4.4.3-2', '5-1': '4.5.1-1', '5-2': '4.5.1-2', '5-3': '4.5.1-3',
      '5-4': '4.5.1-4', '5-5': '4.5.1-5', '5-6': '4.5.1-6', '5-7': '4.5.1-7', '5-8': '4.5.1-8',
      '5-9': '4.5.2-1', '5-10': '4.5.2-2', '5-11': '4.5.2-3', '5-12': '4.5.2-4', '6-1': '4.6.1-1',
      '6-2': '4.6.1-2', '6-3': '4.6.1-3', '6-4': '4.6.1-4', '6-5': '4.6.1-5', '6-6': '4.6.1-6',
      '6-7': '4.6.1-7', '6-8': '4.6.2-1', '6-9': '4.6.2-2', '6-10': '4.6.2-3', '6-11': '4.6.2-4',
      '6-12': '4.6.2-5', '7-1': '4.7.1-1', '7-2': '4.7.1-2', '7-3': '4.7.1-3', '7-4': '4.7.1-4',
      '7-5': '4.7.1-5', '7-6': '4.7.1-6', '7-7': '4.7.1-7', '7-8': '4.7.2-1', '7-9': '4.7.2-2',
      '7-10': '4.7.3-1', '7-11': '4.7.3-2', '7-12': '4.7.3-3', '8-1': '4.8.1-1', '8-2': '4.8.1-2',
      '8-3': '4.8.1-3', '8-4': '4.8.1-4', '8-5': '4.8.2-1', '8-6': '4.8.2-2', '8-7': '4.8.3-1',
      '8-8': '4.8.3-2', '8-9': '4.8.3-3', '8-10': '4.8.3-4', '8-11': '4.8.3-5', '8-12': '4.8.3-6',
      '9-1': '4.9.1-1', '9-2': '4.9.1-2', '9-3': '4.9.1-3', '9-4': '4.9.1-4', '9-5': '4.9.1-5',
      '9-6': '4.9.2-1', '9-7': '4.9.2-2', '9-8': '4.9.2-3', '9-9': '4.9.3-1', '9-10': '4.9.3-2',
      '10-1': '4.10.1-1', '10-2': '4.10.1-2', '10-3': '4.10.1-3', '10-4': '4.10.1-4', '10-5': '4.10.1-5',
      '10-6': '4.10.1-6', '10-7': '4.10.2-1', '10-8': '4.10.3-1', '10-9': '4.10.3-2', '10-10': '4.10.3-3',
      '10-11': '4.10.4-1', '10-12': '4.10.4-2', '11-1': '11-1', '11-2': '11-2', '11-3': '11-3',
      '11-4': '11-4', '11-5': '11-5', '11-6': '11-6', '11-7': '11-7', '11-8': '11-8',
      '11-9': '11-9', '11-10': '11-10',
    },
  },
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

    ...sub(T2, 'the-three-states-of-matter-8462', '4.2.2.1', [
      { n: 1, f: 'Which changes of state happen at the melting point, and which at the boiling point?', b: 'Melting (solid → liquid) and freezing (liquid → solid) happen at the melting point.\nBoiling (liquid → gas) and condensing (gas → liquid) happen at the boiling point.', src: STATES },
      { n: 2, f: 'Why does the temperature stay constant while a pure solid is melting?', b: 'The energy supplied is used to overcome the forces between the particles. It does not make the particles move faster, so the temperature does not rise until the change of state is complete.', src: STATES },
      { n: 3, f: 'Compare the arrangement and movement of particles in a solid, a liquid and a gas', b: 'Solid: regular, touching, vibrating in place.\nLiquid: touching but random, sliding past each other.\nGas: far apart, random, moving fast in all directions.', src: STATES },
      { n: 4, f: 'What decides how much energy is needed to change state? Are covalent bonds broken when water boils?', b: 'The strength of the forces between the particles: stronger forces mean higher melting and boiling points. When water boils the intermolecular forces are overcome; the covalent bonds in H₂O stay.', src: STATES },
      { n: 5, f: 'A substance melts at 98 °C and boils at 883 °C. What state is it in at 25 °C?', b: 'Solid, because 25 °C is below the melting point of 98 °C. Between 98 °C and 883 °C it would be a liquid; above 883 °C a gas.', src: STATES },
      { n: 6, f: 'Limitations of the simple particle model, where particles are solid spheres', b: 'It shows no forces between particles, although real particles attract each other; all particles are the same sphere, though real ones differ in size and shape; and atoms are not solid, being mostly empty space.', u: true, src: STATES },
    ]),
    ...sub(T2, 'state-symbols-8462', '4.2.2.2', [
      { n: 1, f: 'What do the state symbols (s), (l), (g) and (aq) mean?', b: '(s) solid, (l) liquid, (g) gas, (aq) aqueous: dissolved in water. The symbol is written in brackets straight after the formula.', src: SYMB },
      { n: 2, f: 'Do state symbols change the balancing numbers? When do you add them?', b: 'No. Balance the equation first, then add the symbols last. The numbers of atoms and the balancing numbers do not depend on the state symbols.', src: SYMB },
      { n: 3, f: 'Add state symbols: magnesium ribbon + dilute hydrochloric acid → magnesium chloride solution + hydrogen', b: 'Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)', src: SYMB },
      { n: 4, f: 'Add state symbols to Pb(NO₃)₂ + 2KI → PbI₂ + 2KNO₃ when lead iodide is a precipitate', b: 'Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s) + 2KNO₃(aq)\nA solid formed from two solutions is a precipitate and can be filtered off.', src: SYMB },
      { n: 5, f: 'Give the state symbols for pure water, steam and molten sodium chloride', b: 'H₂O(l), H₂O(g) and NaCl(l). Pure water is not a solution, and molten NaCl has melted without water, so neither is (aq).', src: SYMB },
      { n: 6, f: 'In CaCO₃(s) → CaO(s) + CO₂(g), how does a state symbol explain why the solid loses mass?', b: 'The (g) shows that carbon dioxide is a gas. It escapes into the air from an open container, so its mass is no longer counted with the solid left behind.', src: SYMB },
    ]),
    ...sub(T2, 'properties-of-ionic-compounds-8462', '4.2.2.3', [
      { n: 1, f: 'Describe the structure of an ionic compound and the forces in it', b: 'A giant ionic lattice: a regular arrangement of oppositely charged ions. Strong electrostatic forces of attraction act in all directions between the ions.', src: IONPROP },
      { n: 2, f: 'Explain why ionic compounds have high melting and boiling points', b: 'There are many strong electrostatic forces between oppositely charged ions in the lattice, so a large amount of energy is needed to break them.', src: IONPROP },
      { n: 3, f: 'When do ionic compounds conduct electricity, and what carries the charge?', b: 'When molten or dissolved in water. The ions are free to move, so they carry the charge. They do not conduct as solids.', src: IONPROP },
      { n: 4, f: 'Solid sodium chloride contains ions. Why does it not conduct electricity?', b: 'The ions are held in fixed positions in the lattice and cannot move, so charge cannot flow. Containing ions is not enough: they must be free to move.', src: IONPROP },
      { n: 5, f: 'A solid melts at 801 °C, does not conduct as a solid, but its melt does. What is it?', b: 'An ionic compound. The high melting point shows many strong bonds; conducting only once molten shows the ions can move only when the lattice has broken down.', src: IONPROP },
      { n: 6, f: 'What does the formula NaCl tell you about sodium chloride?', b: 'Na⁺ and Cl⁻ ions are in the ratio 1 : 1 in a giant lattice. There are no separate NaCl molecules. Sodium chloride is the only ionic structure you need to know.', src: IONPROP },
    ]),
    ...sub(T2, 'properties-of-small-molecules-8462', '4.2.2.4', [
      { n: 1, f: 'Typical state and melting and boiling points of substances made of small molecules', b: 'Usually gases or liquids, with low melting and boiling points, because only weak intermolecular forces hold the molecules together.', src: SMALL },
      { n: 2, f: 'When a small molecular substance boils, what is overcome and what stays intact?', b: 'The weak intermolecular forces between the molecules are overcome. The strong covalent bonds inside each molecule are not broken.', src: SMALL },
      { n: 3, f: 'How does the size of molecules affect melting and boiling points?', b: 'Intermolecular forces increase with the size of the molecules, so larger molecules have higher melting and boiling points. Methane boils at −162 °C and butane at −1 °C.', src: SMALL },
      { n: 4, f: 'Why do small molecular substances not conduct electricity?', b: 'The molecules have no overall electric charge, and there are no free ions or delocalised electrons to carry charge.', src: SMALL },
      { n: 5, f: 'Explain why bromine (boils at 59 °C) boils at a higher temperature than chlorine (−34 °C)', b: 'Bromine molecules are larger than chlorine molecules, so the intermolecular forces are stronger and more energy is needed to overcome them.', src: SMALL },
      { n: 6, f: 'Iodine is a solid at room temperature. Why is it still a small molecular substance?', b: 'It is made of small I₂ molecules held by intermolecular forces. They are stronger than in chlorine because the molecules are larger, but still weak compared with covalent bonds, so it melts easily.', src: SMALL },
    ]),
    ...sub(T2, 'polymers-8462', '4.2.2.5', [
      { n: 1, f: 'Describe the structure and bonding of a polymer', b: 'Very large molecules in which the atoms are linked by strong covalent bonds. The intermolecular forces between the molecules are relatively strong.', src: POLY },
      { n: 2, f: 'Why are polymers solids at room temperature?', b: 'The molecules are very long, so the intermolecular forces add up and are relatively strong. A lot of energy is needed to separate the chains. The covalent bonds along the chain do not break.', src: POLY },
      { n: 3, f: 'How can you recognise a polymer in a diagram of its bonding?', b: 'A repeat unit in square brackets, with bond lines passing through the brackets and n after the second bracket, where n is a very large number of repeat units.', src: POLY },
      { n: 4, f: 'Give the repeat unit formulae of poly(ethene), poly(propene) and poly(chloroethene)', b: 'Poly(ethene) C₂H₄, poly(propene) C₃H₆, poly(chloroethene) C₂H₃Cl.', src: POLY },
      { n: 5, f: 'A polymer chain has 300 repeat units of C₂H₄. How many carbon and hydrogen atoms?', b: 'Carbon: 300 × 2 = 600 atoms.\nHydrogen: 300 × 4 = 1200 atoms.', src: POLY },
      { n: 6, f: 'How does a polymer differ from a giant covalent structure?', b: 'A polymer is separate, very long molecules held by relatively strong intermolecular forces. A giant covalent structure is one continuous network of covalent bonds with no separate molecules.', src: POLY },
    ]),
    ...sub(T2, 'giant-covalent-structures-8462', '4.2.2.6', [
      { n: 1, f: 'Giant covalent structure: bonding, state and melting point', b: 'All the atoms are linked to other atoms by strong covalent bonds in a network. They are solids with very high melting points.', src: GIANT },
      { n: 2, f: 'Name three giant covalent structures', b: 'Diamond and graphite (forms of carbon) and silicon dioxide (silica, SiO₂).', src: GIANT },
      { n: 3, f: 'Describe the bonding in silicon dioxide and explain why its formula is SiO₂', b: 'Each silicon is bonded to four oxygen atoms and each oxygen to two silicon atoms. 4 ÷ 2 = 2 oxygen atoms for each silicon, so the formula is a ratio, not a molecule.', src: GIANT },
      { n: 4, f: 'Explain why silicon dioxide has a very high melting point', b: 'It is a giant covalent structure. The strong covalent bonds linking the atoms must be broken to melt it, and there are very many of them, so a very large amount of energy is needed.', src: GIANT },
      { n: 5, f: 'Why is carbon dioxide a gas but silicon dioxide a solid?', b: 'CO₂ is made of small molecules with weak intermolecular forces to overcome. SiO₂ is a giant covalent structure, so strong covalent bonds must be broken.', src: GIANT },
      { n: 6, f: 'A substance melts at 2000 °C and does not conduct when solid or molten. What structure is it?', b: 'Giant covalent. The very high melting point fits strong covalent bonds, and it is not ionic because ionic compounds conduct when molten.', src: GIANT },
    ]),
    ...sub(T2, 'properties-of-metals-and-alloys-8462', '4.2.2.7', [
      { n: 1, f: 'Why do most metals have high melting and boiling points?', b: 'Metals have giant structures with strong metallic bonding between the positive ions and the delocalised electrons. There are many bonds, so a large amount of energy is needed to break them.', src: METAL },
      { n: 2, f: 'Why can a pure metal be bent and shaped?', b: 'The atoms are all the same size and arranged in regular layers. The layers can slide over each other while the metallic bonding still holds, so the metal changes shape without breaking.', src: METAL },
      { n: 3, f: 'Explain why an alloy is harder than a pure metal', b: 'Atoms of different sizes distort the regular layers, so the layers cannot slide over each other so easily.', src: METAL },
      { n: 4, f: 'Alloy: what is it, and what are brass, bronze and steel made from?', b: 'A mixture of a metal with one or more other elements. Brass: copper and zinc. Bronze: copper and tin. Steel: iron with a little carbon, a non-metal.', src: METAL },
      { n: 5, f: '250 g of brass is 70% copper. What mass of zinc does it contain?', b: 'Copper: 70 ÷ 100 × 250 = 175 g.\nZinc: 250 − 175 = 75 g.', src: METAL },
      { n: 6, f: 'Why is a pure metal often unsuitable for use in construction?', b: 'Pure metals are too soft for many uses because their layers slide easily. Mixing them with other elements to make alloys gives a harder material, such as steel.', src: METAL },
    ]),
    ...sub(T2, 'metals-as-conductors-8462', '4.2.2.8', [
      { n: 1, f: 'Why are metals good conductors of electricity?', b: 'The delocalised electrons are free to move through the metal and carry electrical charge.', src: MCOND },
      { n: 2, f: 'Why are metals good conductors of thermal energy?', b: 'The delocalised electrons gain energy at the hot end, move through the metal and transfer the energy to cooler parts.', src: MCOND },
      { n: 3, f: 'In a solid metal, which particles stay fixed and which can move?', b: 'The positive metal ions stay in position in a regular arrangement. The delocalised electrons move freely and carry the charge and the energy.', src: MCOND },
      { n: 4, f: 'Why does solid sodium conduct electricity but solid sodium chloride does not?', b: 'Sodium has delocalised electrons that are free to move. Sodium chloride has ions fixed in the lattice and no free electrons.', src: MCOND },
      { n: 5, f: 'Name a non-metal element that conducts electricity, and give the reason', b: 'Graphite (carbon). It has one delocalised electron per carbon atom, free to move. Diamond does not conduct because all its outer electrons are used in bonds.', src: MCOND },
      { n: 6, f: 'Why is a pan made of metal but its handle of plastic?', b: 'Metal conducts thermal energy well, so the pan heats the food. Plastic is a poor thermal conductor, so the handle stays cool to touch.', src: MCOND },
    ]),
    ...sub(T2, 'diamond-8462', '4.2.3.1', [
      { n: 1, f: 'Describe the structure and bonding of diamond', b: 'A giant covalent structure of carbon atoms. Each carbon atom forms four covalent bonds with other carbon atoms, in a rigid three-dimensional network.', src: DIAM },
      { n: 2, f: 'Explain why diamond is very hard', b: 'Each atom is held by four strong covalent bonds in a rigid 3D network, so the atoms cannot slide over each other.', src: DIAM },
      { n: 3, f: 'Explain why diamond has a very high melting point', b: 'Many strong covalent bonds must be broken to melt it, so a very large amount of energy is needed.', src: DIAM },
      { n: 4, f: 'Explain why diamond does not conduct electricity', b: 'All four outer electrons of each carbon atom are used in covalent bonds, so there are no delocalised electrons or ions free to move.', src: DIAM },
      { n: 5, f: 'How many covalent bonds are in a crystal of 300 carbon atoms of diamond?', b: 'Each atom has four bonds and each bond joins two atoms, so 300 × 4 ÷ 2 = 600 bonds.', src: DIAM },
      { n: 6, f: 'Allotropes of carbon: how many bonds per atom in diamond and in graphite?', b: 'Allotropes are different structural forms of the same element. Diamond has four bonds per carbon atom (3D network); graphite has three (layers).', src: DIAM },
    ]),
    ...sub(T2, 'graphite-8462', '4.2.3.2', [
      { n: 1, f: 'Describe the structure and bonding of graphite', b: 'Each carbon atom forms three covalent bonds, giving layers of hexagonal rings. There are no covalent bonds between the layers. One electron per carbon atom is delocalised.', src: GRAPH },
      { n: 2, f: 'Explain why graphite is soft and slippery', b: 'There are no covalent bonds between the layers, so the layers can slide over one another.', src: GRAPH },
      { n: 3, f: 'Explain why graphite conducts electricity', b: 'One electron from each carbon atom is delocalised. These electrons are free to move through the layers and carry charge.', src: GRAPH },
      { n: 4, f: 'Explain why graphite has a very high melting point', b: 'The many strong covalent bonds within the layers must be broken, which needs a very large amount of energy.', src: GRAPH },
      { n: 5, f: 'Give three uses of graphite and the property each depends on', b: 'Pencils: soft, layers rub off.\nLubricant: layers slide.\nElectrodes: conducts electricity and has a high melting point.', src: GRAPH },
      { n: 6, f: 'Each carbon atom in a graphite layer is shared by three hexagons. How many atoms per hexagon?', b: 'A hexagon has six corner atoms: 6 ÷ 3 = 2 carbon atoms per hexagon. So 50 hexagons contain 100 carbon atoms.', src: GRAPH },
      { n: 7, f: 'In what way is graphite similar to a metal?', b: 'It has delocalised electrons, so it conducts electricity. Unlike a metal it is a non-metal with a giant covalent structure.', src: GRAPH },
    ]),
    ...sub(T2, 'graphene-and-fullerenes-8462', '4.2.3.3', [
      { n: 1, f: 'Graphene: what is it, and why does it conduct electricity?', b: 'A single layer of graphite, one atom thick. Each carbon forms three bonds in hexagonal rings, and the one delocalised electron per atom is free to move and carry charge.', src: FULL },
      { n: 2, f: 'Fullerenes: what are they, and what rings do they contain?', b: 'Molecules of carbon atoms with hollow shapes. Their structure is based on hexagonal rings of carbon atoms, but they may also contain rings of five or seven carbon atoms.', src: FULL },
      { n: 3, f: 'Buckminsterfullerene: formula, shape, relative formula mass', b: 'C₆₀: a hollow sphere of 60 carbon atoms, the first fullerene discovered. Mr = 60 × 12 = 720.', src: FULL },
      { n: 4, f: 'Carbon nanotubes: shape and uses', b: 'Cylindrical fullerenes with very high length to diameter ratios. Used in nanotechnology, electronics and materials, for example to strengthen them.', src: FULL },
      { n: 5, f: 'How many covalent bonds are in one molecule of C₆₀?', b: 'Each of the 60 carbon atoms forms three bonds and each bond joins two atoms: 60 × 3 ÷ 2 = 90 bonds.', src: FULL },
      { n: 6, f: 'Give a use of graphene and a use of fullerenes, with the property each depends on', b: 'Graphene: electronics (conducts electricity) or composites (strong but light).\nFullerenes: drug delivery (the hollow shape can carry other molecules).', src: FULL },
    ]),
    ...sub(T2, 'sizes-of-particles-and-their-properties-8462', '4.2.4.1', [
      { n: 1, f: 'What size range does nanoscience cover, and how many atoms is that?', b: 'Structures 1 to 100 nm in size, which is of the order of a few hundred atoms. 1 nm = 1 × 10⁻⁹ m.', src: SIZES },
      { n: 2, f: 'Give the diameter ranges of fine particles (PM2.5) and coarse particles (PM10)', b: 'Fine particles: 100 to 2500 nm (1 × 10⁻⁷ m to 2.5 × 10⁻⁶ m).\nCoarse particles, often called dust: 2.5 × 10⁻⁶ m to 1 × 10⁻⁵ m.', src: SIZES },
      { n: 3, f: 'What happens to the surface area to volume ratio as the side of a cube decreases by a factor of 10?', b: 'It increases by a factor of 10. For a cube of side L the ratio is 6L² ÷ L³ = 6 ÷ L.', src: SIZES },
      { n: 4, f: 'Write 40 nm in metres in standard form', b: '40 × 10⁻⁹ m = 4 × 10⁻⁸ m.', src: SIZES },
      { n: 5, f: 'Calculate the surface area to volume ratio of a cube of side 3 cm', b: 'Surface area = 6 × 3² = 54 cm². Volume = 3³ = 27 cm³. Ratio = 54 ÷ 27 = 2 (that is, 6 ÷ 3).', src: SIZES },
      { n: 6, f: 'Why may nanoparticles have different properties from the same material in bulk?', b: 'They have a very high surface area to volume ratio, so a large proportion of their atoms is at the surface. They can interact more effectively, so smaller quantities may be needed.', src: SIZES },
      { n: 7, f: 'How many atoms of diameter 0.1 nm fit across a nanoparticle 20 nm wide?', b: '20 ÷ 0.1 = 200 atoms.', src: SIZES },
    ]),
    ...sub(T2, 'uses-of-nanoparticles-8462', '4.2.4.2', [
      { n: 1, f: 'Name areas where nanoparticles have applications', b: 'Medicine, electronics, cosmetics and sun creams, deodorants, and catalysts. New applications are an important area of research.', src: NANOUSE },
      { n: 2, f: 'Why is a nanoparticle catalyst effective, and why may less of it be needed?', b: 'Its high surface area to volume ratio exposes more of the material, so more reactant particles meet the surface and a smaller quantity is effective.', src: NANOUSE },
      { n: 3, f: 'State possible risks of using nanoparticles', b: 'Very small particles may enter the body through the skin or lungs, long-term health effects may be unknown, and they might spread in the environment.', src: NANOUSE },
      { n: 4, f: 'What four parts should an evaluation of a nanoparticle use include?', b: 'A benefit linked to a property, a possible risk or drawback, evidence from the data given, and a conclusion (or what more information is needed).', src: NANOUSE },
      { n: 5, f: 'Catalyst A: 10 kg at £25 per kg. Nanoparticle catalyst: 1 kg at £120 per kg. Which is cheaper, and by how much?', b: 'A costs 10 × 25 = £250; the nanoparticle catalyst costs 1 × 120 = £120. The nanoparticle catalyst is cheaper by £130.', src: NANOUSE },
      { n: 6, f: 'Why does an answer about nanoparticle risks say "possible"? Must you learn specific examples?', b: 'The risks are not all proven and some effects are not yet known. You do not need specific examples: the question supplies the information, which you use to evaluate.', src: NANOUSE },
    ]),

    // 3 Quantitative chemistry
    ...sub('quantitative-chemistry-8462', 'chemical-measurements-conservation-of-mass-and-the-quantitative-interpretation-of-chemical-equations-8462', '4.3.1', [
      { n: 1, f: 'Law of conservation of mass', b: 'No atoms are lost or made in a chemical reaction, so the mass of the products equals the mass of the reactants.' },
      { n: 2, f: 'Calculate the Mr of Ca(OH)₂ (Ca = 40, O = 16, H = 1)', b: '40 + 2 × (16 + 1) = 74' },
      { n: 3, f: 'Percentage by mass of nitrogen in NH₄NO₃ (N = 14, H = 1, O = 16)', b: 'Mr = 14 + 4 + 14 + 48 = 80.\n% N = (2 × 14) ÷ 80 × 100 = 35%' },
      { n: 4, f: 'Why does mass increase when magnesium is heated in an open crucible, but decrease when calcium carbonate is heated?', b: 'Magnesium: oxygen atoms from the air join it in the solid oxide.\nCalcium carbonate: carbon dioxide gas escapes into the air.\nMass is still conserved in both.' },
      { n: 5, f: 'How is the uncertainty of a mean worked out?', b: '± half the range of the readings. Example: 31.2, 30.8, 31.6 cm³ → mean 31.2, range 0.8, result 31.2 ± 0.4 cm³.' },
    ]),
    ...sub('quantitative-chemistry-8462', 'use-of-amount-of-substance-in-relation-to-masses-of-pure-substances-8462', '4.3.2', [
      { n: 1, f: 'Moles from mass, and the Avogadro constant', b: 'moles = mass (g) ÷ Mr. One mole of any substance contains 6.02 × 10²³ of the stated particles.', u: true },
      { n: 2, f: 'Limiting reactant', b: 'The reactant that is used up completely. It fixes the amount of product; the other reactant is in excess. Compare moles against the equation ratio, not masses.', u: true },
      { n: 3, f: '15 g of solute is dissolved to make 250 cm³ of solution. Concentration in g/dm³?', b: '15 ÷ 0.250 = 60 g/dm³ (divide cm³ by 1000 to get dm³).' },
    ]),
    ...sub('quantitative-chemistry-8462', 'yield-and-atom-economy-of-chemical-reactions-8462', '4.3.3', [
      { n: 1, f: 'Percentage yield: formula, and why it is less than 100%', b: 'mass of product actually made ÷ maximum theoretical mass × 100.\nLess because the reaction may be reversible, some product is lost when it is separated, or reactants react in unexpected ways.' },
      { n: 2, f: 'Atom economy: formula, and the value for making CaO from CaCO₃ → CaO + CO₂', b: 'Mr of desired product ÷ sum of Mr of all reactants × 100.\nCaO: 56 ÷ 100 × 100 = 56%' },
    ]),
    ...sub('quantitative-chemistry-8462', 'using-concentrations-of-solutions-in-mol-dm3-8462', '4.3.4', [
      { n: 1, f: '0.050 mol of solute is dissolved in 250 cm³. Concentration in mol/dm³?', b: '0.050 ÷ 0.250 = 0.20 mol/dm³. Multiply by Mr to convert to g/dm³.', u: true },
    ]),
    ...sub('quantitative-chemistry-8462', 'use-of-amount-of-substance-in-relation-to-volumes-of-gases-8462', '4.3.5', [
      { n: 1, f: 'Volume of one mole of gas at RTP. What volume does 3.2 g of O₂ occupy?', b: '24 dm³ at RTP (20 °C, 1 atmosphere).\n3.2 ÷ 32 = 0.10 mol → 0.10 × 24 = 2.4 dm³', u: true },
    ]),

    // 4 Chemical changes
    ...sub('chemical-changes-8462', 'reactivity-of-metals-8462', '4.4.1', [
      { n: 1, f: 'Oxidation and reduction in terms of oxygen', b: 'Oxidation: gain of oxygen.\nReduction: loss of oxygen.' },
      { n: 2, f: 'Oxidation and reduction in terms of electrons', b: 'Oxidation is loss of electrons; reduction is gain of electrons.', u: true },
      { n: 3, f: 'The reactivity series in the specification, most reactive first (with carbon and hydrogen)', b: 'Potassium, sodium, lithium, calcium, magnesium, [carbon], zinc, iron, [hydrogen], copper.' },
      { n: 4, f: 'How is a metal extracted if it is below carbon, and if it is above carbon?', b: 'Below carbon: reduce the oxide by heating with carbon (the oxide is reduced, carbon is oxidised).\nAbove carbon: electrolysis of the molten compound.' },
      { n: 5, f: 'Ionic equation for iron displacing copper from copper sulfate. Which species is oxidised?', b: 'Fe + Cu²⁺ → Fe²⁺ + Cu (SO₄²⁻ is a spectator ion). Iron loses electrons, so it is oxidised; copper ions are reduced.', u: true },
    ]),
    ...sub('chemical-changes-8462', 'reactions-of-acids-8462', '4.4.2', [
      { n: 1, f: 'Products of acid + metal carbonate, and of acid + alkali', b: 'Acid + metal carbonate → salt + water + carbon dioxide.\nAcid + alkali → salt + water.' },
      { n: 2, f: 'Required practical 1: making a soluble salt from an insoluble oxide or carbonate', b: 'Warm the acid, add the solid until some is left unreacted (excess), filter off the excess, evaporate some water from the filtrate, leave to crystallise, filter and dry. Excess makes sure all the acid reacts.' },
      { n: 3, f: 'Ionic equation for neutralisation', b: 'H⁺(aq) + OH⁻(aq) → H₂O(l)' },
      { n: 4, f: 'Strong acid vs weak acid, with examples', b: 'Strong: completely ionised in aqueous solution (hydrochloric, nitric, sulfuric).\nWeak: only partially ionised (ethanoic, citric, carbonic). Strength is not the same as concentration.', u: true },
      { n: 5, f: 'A solution changes from pH 5 to pH 3. By what factor does [H⁺] change?', b: 'Each fall of 1 pH unit multiplies [H⁺] by 10, so two units → × 100.', u: true },
    ]),
    ...sub('chemical-changes-8462', 'electrolysis-8462', '4.4.3', [
      { n: 1, f: 'Electrolysis of an aqueous solution: rules for the products', b: 'Cathode: hydrogen if the metal is more reactive than hydrogen, otherwise the metal.\nAnode: the halogen if a halide ion is present, otherwise oxygen.' },
      { n: 2, f: 'Extracting aluminium: why cryolite, and why the anodes are replaced', b: 'Aluminium oxide is dissolved in molten cryolite to lower the melting temperature, so less energy is needed. Oxygen made at the carbon anode reacts with it to form carbon dioxide, so the anode wears away.' },
    ]),

    // 5 Energy changes
    ...sub('energy-changes-8462', 'exothermic-and-endothermic-reactions-8462', '4.5.1', [
      { n: 1, f: 'Exothermic vs endothermic reaction', b: 'Exothermic: transfers energy to the surroundings, so the temperature of the surroundings increases.\nEndothermic: takes in energy from the surroundings, so their temperature decreases.' },
      { n: 2, f: 'Examples and uses of exothermic reactions', b: 'Examples: combustion, many oxidation reactions, neutralisation.\nUses: self-heating cans, hand warmers.' },
      { n: 3, f: 'Examples and a use of endothermic reactions', b: 'Examples: thermal decompositions; citric acid + sodium hydrogencarbonate.\nUse: some sports injury packs.' },
      { n: 4, f: 'Required practical 4: measuring a temperature change in a reacting solution', b: 'Polystyrene cup in a beaker; measure a fixed volume of solution; record the start temperature; add the other reactant, stir, fit a lid; record the highest (or lowest) temperature. Change = final − initial.' },
      { n: 5, f: 'On a reaction profile, where are the activation energy and the overall energy change?', b: 'Activation energy: from the reactant level up to the peak.\nOverall energy change: from the reactant level to the product level (products lower for exothermic, higher for endothermic).' },
      { n: 6, f: 'Reactants 80 kJ, peak 250 kJ, products 150 kJ. Activation energy and overall change?', b: 'Activation energy = 250 − 80 = 170 kJ.\nOverall change = 150 − 80 = +70 kJ, so endothermic.' },
      { n: 7, f: 'Bond breaking and bond making: which takes in energy?', b: 'Breaking bonds takes in energy (endothermic). Forming bonds releases energy (exothermic). Overall exothermic when more energy is released forming bonds than is needed to break them.', u: true },
      { n: 8, f: 'N₂ + 3H₂ → 2NH₃. N≡N 945, H–H 436, N–H 391 kJ/mol. Energy change?', b: 'Broken: 945 + 3 × 436 = 2253.\nFormed: 2 × 3 × 391 = 2346.\nChange = 2253 − 2346 = −93 kJ/mol (exothermic).', u: true },
    ]),
    ...sub('energy-changes-8462', 'chemical-cells-and-fuel-cells-8462', '4.5.2', [
      { n: 1, f: 'Simple chemical cell: what is it, and what affects the voltage?', b: 'Two different metals in contact with an electrolyte. The voltage depends on the electrodes and the electrolyte; the bigger the difference in reactivity of the metals, the bigger the voltage.' },
      { n: 2, f: 'Battery; non-rechargeable vs rechargeable', b: 'A battery is two or more cells in series (voltages add).\nNon-rechargeable: reactions stop when a reactant is used up.\nRechargeable: reactions are reversed by an external electrical current.' },
      { n: 3, f: 'Hydrogen fuel cell: overall reaction, one advantage and one disadvantage', b: '2H₂ + O₂ → 2H₂O.\nFor: the only product is water; no recharging.\nAgainst: hydrogen is hard to store and flammable; making it often uses fossil fuels.' },
      { n: 4, f: 'Half equations in a hydrogen fuel cell (acidic electrolyte)', b: 'Negative electrode: 2H₂ → 4H⁺ + 4e⁻ (oxidation).\nPositive electrode: O₂ + 4H⁺ + 4e⁻ → 2H₂O (reduction).', u: true },
    ]),

    // 6 The rate and extent of chemical change
    ...sub('the-rate-and-extent-of-chemical-change-8462', 'rate-of-reaction-8462', '4.6.1', [
      { n: 1, f: 'Mean rate of reaction: formula and units', b: 'Quantity of reactant used (or product formed) ÷ time taken. Units g/s or cm³/s. Example: 84 cm³ in 60 s → 1.4 cm³/s.' },
      { n: 2, f: '0.44 g of CO₂ (Mr 44) forms in 50 s. Mean rate in mol/s?', b: '0.44 ÷ 44 = 0.010 mol; 0.010 ÷ 50 = 2.0 × 10⁻⁴ mol/s', u: true },
      { n: 3, f: 'How do you find the rate at one moment from a graph?', b: 'Draw a tangent to the curve at that time and find its gradient: (y₂ − y₁) ÷ (x₂ − x₁), using two points far apart on the tangent.', u: true },
      { n: 4, f: 'The five factors that increase the rate of reaction', b: 'Higher concentration, higher pressure (gases), larger surface area (smaller pieces), higher temperature, and adding a catalyst.' },
      { n: 5, f: 'Use collision theory to explain why a higher temperature increases the rate', b: 'Particles move faster, so collisions are more frequent and more energetic: more collisions have at least the activation energy, so more are successful.' },
      { n: 6, f: 'How does a catalyst increase the rate?', b: 'It provides a different reaction pathway with a lower activation energy. It is not used up and is not written in the equation.' },
      { n: 7, f: 'Required practical 5: the disappearing cross method', b: 'Put a flask of sodium thiosulfate solution on a paper cross, add hydrochloric acid and start the timer; stop it when the cross disappears. Relative rate = 1 ÷ time. Repeat for other concentrations.' },
    ]),
    ...sub('the-rate-and-extent-of-chemical-change-8462', 'reversible-reactions-and-dynamic-equilibrium-8462', '4.6.2', [
      { n: 1, f: 'Reversible reactions and energy', b: 'The products can react to produce the original reactants (⇌). If one direction is exothermic, the other is endothermic, and the same amount of energy is transferred.' },
      { n: 2, f: 'Equilibrium', b: 'In a closed system, when the forward and reverse reactions occur at exactly the same rate. The reactions do not stop.' },
      { n: 3, f: "Le Chatelier's Principle", b: 'If a condition is changed at equilibrium, the system responds to counteract the change.', u: true },
      { n: 4, f: 'Effect of raising the temperature on an equilibrium', b: 'The equilibrium shifts in the endothermic direction. If the forward reaction is exothermic, the relative amount of products decreases.', u: true },
      { n: 5, f: '2NO₂(g) ⇌ N₂O₄(g). Effect of increasing the pressure?', b: 'Shifts to the side with fewer gas molecules: to the right, towards N₂O₄ (1 molecule instead of 2).', u: true },
    ]),

    // 7 Organic chemistry
    ...sub('organic-chemistry-8462', 'carbon-compounds-as-fuels-and-feedstock-8462', '4.7.1', [
      { n: 1, f: 'Hydrocarbon', b: 'A compound of hydrogen and carbon only.', src: ORG },
      { n: 2, f: 'Homologous series', b: 'A family of compounds with the same general formula and the same functional group.', src: ORG },
      { n: 3, f: 'Alkanes: general formula and the first four', b: 'CₙH₂ₙ₊₂ (saturated, only single C–C bonds). Methane, ethane, propane, butane.' },
      { n: 4, f: 'How does fractional distillation separate crude oil?', b: 'Crude oil is heated to evaporate it; the vapour rises up a column that is hot at the bottom and cooler at the top; each hydrocarbon condenses at a level below its boiling point. Long chains collect low, short chains high.' },
      { n: 5, f: 'How do boiling point, viscosity and flammability change as hydrocarbon molecules get larger?', b: 'Boiling point increases, viscosity increases, flammability decreases.' },
      { n: 6, f: 'Cracking: what it is, and the two methods', b: 'Breaking large hydrocarbons into smaller, more useful molecules (smaller alkanes + alkenes).\nCatalytic: vapour over a hot catalyst. Steam: vapour mixed with steam at a very high temperature.' },
      { n: 7, f: 'Test for an alkene', b: 'Shake with bromine water: orange → colourless. An alkane leaves it orange.' },
    ]),
    ...sub('organic-chemistry-8462', 'reactions-of-alkenes-and-alcohols-8462', '4.7.2', [
      { n: 1, f: 'What forms when an alcohol reacts with sodium, and with an oxidising agent?', b: 'Sodium: fizzing, hydrogen given off.\nOxidising agent: a carboxylic acid (propanol → propanoic acid).' },
      { n: 2, f: 'Ethanoic acid + ethanol (acid catalyst) gives…', b: 'The ester ethyl ethanoate, and water.' },
    ]),
    ...sub('organic-chemistry-8462', 'synthetic-and-naturally-occurring-polymers-8462', '4.7.3', [
      { n: 1, f: 'Addition polymerisation', b: 'Many alkene monomers join as the C=C opens to C–C. Nothing else forms, so the repeating unit has the same atoms as the monomer. Example: ethene → poly(ethene).' },
      { n: 2, f: 'Condensation polymerisation', b: 'Monomers each with two functional groups join, losing a small molecule (usually water) at each link. Example: ethanediol + hexanedioic acid → a polyester + water.', u: true },
      { n: 3, f: 'Amino acids and proteins', b: 'An amino acid has two different functional groups (–NH₂ and –COOH), such as glycine, H₂NCH₂COOH. Amino acids join by condensation polymerisation to make polypeptides; different amino acids make proteins.', u: true },
    ]),

    // 8 Chemical analysis
    ...sub('chemical-analysis-8462', 'purity-formulations-and-chromatography-8462', '4.8.1', [
      { n: 1, f: 'Pure substance (in chemistry), and how melting point shows purity', b: 'A single element or compound, not mixed with any other substance. A pure substance melts sharply at its known value; an impure one melts lower and over a range.' },
      { n: 2, f: 'Formulation', b: 'A mixture designed as a useful product, with components in carefully measured quantities, each with a particular purpose.', src: ANAL },
      { n: 3, f: 'Rf value, and a worked example: solvent 6.0 cm, spot 4.2 cm', b: 'Rf = distance moved by substance ÷ distance moved by solvent, both from the origin line.\n4.2 ÷ 6.0 = 0.70. No units; always less than 1.' },
      { n: 4, f: 'Chromatography (RP 6): why a pencil origin line, and where the solvent level goes', b: 'Pencil does not dissolve and run (ink would). The solvent level is below the origin line, so the spots do not dissolve into the solvent.' },
    ]),
    ...sub('chemical-analysis-8462', 'identification-of-common-gases-8462', '4.8.2', [
      { n: 1, f: 'Tests for hydrogen and oxygen', b: 'Hydrogen: burning splint at the mouth of the tube → squeaky pop.\nOxygen: glowing splint relights.' },
      { n: 2, f: 'Tests for carbon dioxide and chlorine', b: 'Carbon dioxide: limewater turns milky.\nChlorine: damp litmus paper is bleached white.' },
    ]),
    ...sub('chemical-analysis-8462', 'identification-of-ions-by-chemical-and-spectroscopic-means-8462', '4.8.3', [
      { n: 1, f: 'Flame test colours: Li⁺, Na⁺, K⁺, Ca²⁺, Cu²⁺', b: 'Li⁺ crimson, Na⁺ yellow, K⁺ lilac, Ca²⁺ orange-red, Cu²⁺ green.' },
      { n: 2, f: 'Sodium hydroxide precipitates: Al³⁺, Ca²⁺, Mg²⁺, Cu²⁺, Fe²⁺, Fe³⁺', b: 'Al³⁺, Ca²⁺, Mg²⁺: white (only the aluminium one dissolves in excess).\nCu²⁺: blue. Fe²⁺: green. Fe³⁺: brown.' },
      { n: 3, f: 'Test for halide ions, and the results', b: 'Add dilute nitric acid, then silver nitrate solution.\nCl⁻ white, Br⁻ cream, I⁻ yellow precipitate.' },
      { n: 4, f: 'Tests for sulfate and carbonate ions', b: 'Sulfate: dilute hydrochloric acid, then barium chloride solution → white precipitate.\nCarbonate: dilute acid → fizzing; the gas turns limewater milky.' },
      { n: 5, f: 'Why is nitric acid, not hydrochloric acid, used to acidify in the halide test?', b: 'Acid removes carbonate ions, which would also give a precipitate. Hydrochloric acid would add chloride ions and give a false positive for chloride.' },
      { n: 6, f: 'Flame emission spectroscopy', b: 'The sample is put in a flame and the light is passed through a spectroscope to give a line spectrum. Lines identify the metal ions (even in mixtures); intensity gives the concentration.', src: ANAL },
    ]),

    // 9 Chemistry of the atmosphere
    ...sub('chemistry-of-the-atmosphere-8462', 'the-composition-and-evolution-of-the-earths-atmosphere-8462', '4.9.1', [
      { n: 1, f: "Composition of today's atmosphere", b: 'About 80% (four-fifths) nitrogen and about 20% (one-fifth) oxygen, with small amounts of carbon dioxide, water vapour and noble gases.' },
      { n: 2, f: "Earth's early atmosphere: where it came from and what it contained", b: 'Intense volcanic activity released mainly carbon dioxide and water vapour, with nitrogen; there was little or no oxygen. Water vapour condensed to form the oceans.' },
      { n: 3, f: 'How did oxygen build up in the atmosphere?', b: 'Algae began photosynthesis about 2.7 billion years ago; then plants evolved, and oxygen rose over the next billion years until animals could evolve.\n6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂' },
      { n: 4, f: 'How did the amount of carbon dioxide decrease?', b: 'It dissolved in the oceans (carbonates precipitated), was used in photosynthesis, and was locked up in sedimentary rocks and fossil fuels.' },
      { n: 5, f: 'How was limestone formed?', b: 'From the calcium carbonate shells and skeletons of sea creatures, compressed on the sea bed.', src: ATMOS },
    ]),
    ...sub('chemistry-of-the-atmosphere-8462', 'carbon-dioxide-and-methane-as-greenhouse-gases-8462', '4.9.2', [
      { n: 1, f: 'The greenhouse effect: name three greenhouse gases and describe how they warm the atmosphere', b: 'Water vapour, carbon dioxide, methane. The surface absorbs short wavelength radiation from the Sun and emits long wavelength (infrared) radiation; greenhouse gases absorb it and re-emit some back, so less energy escapes.' },
      { n: 2, f: 'Two human activities that increase carbon dioxide, and two that increase methane', b: 'Carbon dioxide: burning fossil fuels, deforestation.\nMethane: cattle farming, rice paddy fields (also landfill waste decay).' },
      { n: 3, f: 'Carbon footprint', b: 'The total amount of carbon dioxide and other greenhouse gases emitted over the full life cycle of a product, service or event.' },
    ]),
    ...sub('chemistry-of-the-atmosphere-8462', 'common-atmospheric-pollutants-and-their-sources-8462', '4.9.3', [
      { n: 1, f: 'Effects of carbon monoxide, sulfur dioxide, oxides of nitrogen and particulates', b: 'CO: toxic; colourless and odourless, so hard to detect.\nSO₂ and oxides of nitrogen: respiratory problems and acid rain.\nParticulates: global dimming and health problems.' },
      { n: 2, f: 'Where does the nitrogen in oxides of nitrogen from a car engine come from?', b: 'From the air: nitrogen and oxygen react at the high temperature in the engine, not nitrogen in the fuel.' },
    ]),

    // 10 Using resources
    ...sub('using-resources-8462', 'using-the-earths-resources-and-obtaining-potable-water-8462', '4.10.1', [
      { n: 1, f: 'Sustainable development', b: 'Development that meets the needs of current generations without compromising the ability of future generations to meet their own needs.' },
      { n: 2, f: 'Potable water vs pure water', b: 'Potable: safe to drink, with low levels of dissolved salts and microbes.\nPure: only water molecules, no dissolved substances.' },
      { n: 3, f: 'How is potable water produced from fresh water in the UK?', b: 'Choose a suitable source (ground water, lakes, rivers), pass it through filter beds to remove solids, then sterilise with chlorine, ozone or ultraviolet light.' },
      { n: 4, f: 'Desalination: two methods and their drawback', b: 'Distillation or reverse osmosis. Both need large amounts of energy.' },
      { n: 5, f: 'Stages of sewage treatment, in order', b: 'Screening and grit removal → sedimentation (sludge and effluent) → anaerobic digestion of the sludge → aerobic biological treatment of the effluent.' },
      { n: 6, f: 'Phytomining and bioleaching', b: 'Phytomining: plants absorb metal compounds, are harvested and burned; the ash contains metal compounds.\nBioleaching: bacteria produce leachate solutions containing metal compounds.\nThe metal is then obtained by displacement with scrap iron or electrolysis.', u: true },
    ]),
    ...sub('using-resources-8462', 'life-cycle-assessment-and-recycling-8462', '4.10.2', [
      { n: 1, f: 'Stages of a life cycle assessment (LCA), and why it is not fully objective', b: 'Raw materials → manufacture and packaging → use → disposal (with transport throughout). Pollutant effects are hard to quantify and need value judgements.' },
    ]),
    ...sub('using-resources-8462', 'using-materials-8462', '4.10.3', [
      { n: 1, f: 'What does rusting need, and how does galvanising protect iron?', b: 'Both air (oxygen) and water. Galvanising coats iron with zinc: a barrier, plus sacrificial protection, because zinc is more reactive and corrodes instead of the iron, even when scratched.' },
      { n: 2, f: 'Percentage of gold in 18 carat gold', b: '% gold = carat ÷ 24 × 100 = 18 ÷ 24 × 100 = 75%. (24 carat is 100% gold.)' },
      { n: 3, f: 'Thermosoftening vs thermosetting polymers', b: 'Thermosoftening: no cross-links, weak forces between chains, so they melt on heating.\nThermosetting: cross-links between chains, so they do not melt.' },
    ]),
    ...sub('using-resources-8462', 'the-haber-process-and-the-use-of-npk-fertilisers-8462', '4.10.4', [
      { n: 1, f: 'Haber process: equation, raw materials and conditions', b: 'N₂ + 3H₂ ⇌ 2NH₃. Nitrogen from the air, hydrogen from natural gas. Iron catalyst, about 450 °C, about 200 atmospheres. Ammonia is removed by cooling (it liquefies); unreacted gases are recycled.' },
      { n: 2, f: 'Why are 450 °C and 200 atmospheres compromise conditions in the Haber process?', b: 'Forward reaction exothermic: a lower temperature gives a higher yield but a slower rate.\n4 gas molecules → 2: higher pressure gives a higher yield and faster rate, but costs more in equipment and energy.', u: true },
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
