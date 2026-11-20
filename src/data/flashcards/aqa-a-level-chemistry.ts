/**
 * D-444 -- flashcards for AQA A-level Chemistry 7405 (for teaching from September 2015).
 *
 * One block per subtopic wherever the syllabus record itemises subtopics, or per topic
 * where it itemises none, in syllabus order. Card ids are `<subtopic number>-<n>` or
 * `<topic number>-<n>` and are permanent (browser progress is keyed by them): add a
 * new card with the next unused n, never renumber.
 *
 * 20 Nov 2026: cards that sat on a whole topic were re-filed under that topic's new
 * subtopics, so most of them have a new id; `idMigration` below moves browser
 * progress saved before that date onto the new ids.
 *
 * The course is untiered, so no card carries an upper-tier mark. "A-level only"
 * content (stage 'A' topics) is not a tier and is not flagged here.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 7405); origin 'revision-notes'.
 *
 * Written from Marlbridge's own 7405 revision notes and study guides. Plain text
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

const topicOnly = (topic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, u, src }) => ({
    id: `${number}-${n}`,
    topic,
    front: f,
    back: b,
    ...(u ? { tier: 'upper' as const } : {}),
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const ATOM = 'aqa-a-level-chemistry-atomic-structure-revision-notes';
const MOLE = 'aqa-a-level-chemistry-mole-revision-notes';
const ACID = 'aqa-a-level-chemistry-acids-and-bases-revision-notes';
const ALC = 'aqa-a-level-chemistry-alcohols-revision-notes';
const AMINE = 'aqa-a-level-chemistry-amines-revision-notes';
const AMINO = 'aqa-a-level-chemistry-amino-acids-proteins-and-dna-revision-notes';
const CARB = 'aqa-a-level-chemistry-carboxylic-acids-and-derivatives-revision-notes';
const ELEC = 'aqa-a-level-chemistry-electrode-potentials-and-electrochemical-cells-revision-notes';
const INTRO = 'aqa-a-level-chemistry-introduction-to-organic-chemistry-revision-notes';
const NMR = 'aqa-a-level-chemistry-nuclear-magnetic-resonance-spectroscopy-revision-notes';
const OPT = 'aqa-a-level-chemistry-optical-isomerism-revision-notes';
const P3OX = 'aqa-a-level-chemistry-properties-of-period-3-elements-and-their-oxides-revision-notes';
const RATE = 'aqa-a-level-chemistry-rate-equations-revision-notes';
const IONS = 'aqa-a-level-chemistry-reactions-of-ions-in-aqueous-solution-revision-notes';
const TM = 'aqa-a-level-chemistry-transition-metals-revision-notes';
const BAL = 'aqa-a-level-chemistry-7405-balanced-equations-and-associated-calculations-revision-notes';
const SHAPES = 'aqa-a-level-chemistry-7405-shapes-of-complex-ions-revision-notes';

export const DECK_AQA_A_LEVEL_CHEMISTRY: FlashcardDeck = {
  boardSlug: 'aqa',
  qualificationSlug: 'a-level',
  subjectSlug: 'chemistry',
  syllabusCode: '7405',
  syllabusSeries: 'For teaching from September 2015',
  author: 'marlbridge-academic-team',
  updated: '2026-11-20',
  deckReview: { reviewerSlug: 'nouman-ahmed', reviewedOn: '2026-11-05' },
  // Re-filed under the new subtopics on 2026-11-20: old id -> new id for every card, so progress
  // saved before then follows each card. Cards that were already on a subtopic keep their id.
  idMigration: {
    id: '7405-subtopics-2026-11-20',
    before: '2026-11-20',
    map: {
      '3.1.1.1-1': '3.1.1.1-1', '3.1.1.1-2': '3.1.1.1-2', '3.1.1.1-3': '3.1.1.1-3', '3.1.1.1-4': '3.1.1.1-4', '3.1.1.1-5': '3.1.1.1-5',
      '3.1.1.2-1': '3.1.1.2-1', '3.1.1.2-2': '3.1.1.2-2', '3.1.1.2-3': '3.1.1.2-3', '3.1.1.2-4': '3.1.1.2-4', '3.1.1.2-5': '3.1.1.2-5',
      '3.1.1.2-6': '3.1.1.2-6', '3.1.1.3-1': '3.1.1.3-1', '3.1.1.3-2': '3.1.1.3-2', '3.1.1.3-3': '3.1.1.3-3', '3.1.1.3-4': '3.1.1.3-4',
      '3.1.1.3-5': '3.1.1.3-5', '3.1.1.3-6': '3.1.1.3-6', '3.1.1.3-7': '3.1.1.3-7', '3.1.2.1-1': '3.1.2.1-1', '3.1.2.1-2': '3.1.2.1-2',
      '3.1.2.1-3': '3.1.2.1-3', '3.1.2.1-4': '3.1.2.1-4', '3.1.2.2-1': '3.1.2.2-1', '3.1.2.2-2': '3.1.2.2-2', '3.1.2.2-3': '3.1.2.2-3',
      '3.1.2.2-4': '3.1.2.2-4', '3.1.2.2-5': '3.1.2.2-5', '3.1.2.3-1': '3.1.2.3-1', '3.1.2.3-2': '3.1.2.3-2', '3.1.2.3-3': '3.1.2.3-3',
      '3.1.2.3-4': '3.1.2.3-4', '3.1.2.3-5': '3.1.2.3-5', '3.1.2.4-1': '3.1.2.4-1', '3.1.2.4-2': '3.1.2.4-2', '3.1.2.4-3': '3.1.2.4-3',
      '3.1.2.4-4': '3.1.2.4-4', '3.1.2.4-5': '3.1.2.4-5', '3-1': '3.1.3.1-1', '3-2': '3.1.3.2-1', '3-3': '3.1.3.3-1',
      '3-4': '3.1.3.6-1', '3-5': '3.1.3.5-1', '3-6': '3.1.3.5-2', '3-7': '3.1.3.5-3', '3-8': '3.1.3.6-2',
      '3-9': '3.1.3.7-1', '3-10': '3.1.3.4-1', '3-11': '3.1.3.4-2', '3-12': '3.1.3.7-2', '4-1': '3.1.4.1-1',
      '4-2': '3.1.4.1-2', '4-3': '3.1.4.1-3', '4-4': '3.1.4.3-1', '4-5': '3.1.4.4-1', '4-6': '3.1.4.2-1',
      '4-7': '3.1.4.3-2', '4-8': '3.1.4.2-2', '4-9': '3.1.4.4-2', '4-10': '3.1.4.1-4', '5-1': '3.1.5.1-1',
      '5-2': '3.1.5.1-2', '5-3': '3.1.5.5-1', '5-4': '3.1.5.2-1', '5-5': '3.1.5.3-1', '5-6': '3.1.5.3-2',
      '5-7': '3.1.5.4-1', '5-8': '3.1.5.5-2', '5-9': '3.1.5.4-2', '6-1': '3.1.6.1-1', '6-2': '3.1.6.1-2',
      '6-3': '3.1.6.1-3', '6-4': '3.1.6.1-4', '6-5': '3.1.6.1-5', '6-6': '3.1.6.1-6', '6-7': '3.1.6.2-1',
      '6-8': '3.1.6.2-2', '6-9': '3.1.6.2-3', '6-10': '3.1.6.2-4', '7-1': '7-1', '7-2': '7-2',
      '7-3': '7-3', '7-4': '7-4', '7-5': '7-5', '7-6': '7-6', '7-7': '7-7',
      '7-8': '7-8', '8-1': '3.1.8.1-1', '8-2': '3.1.8.1-2', '8-3': '3.1.8.1-3', '8-4': '3.1.8.1-4',
      '8-5': '3.1.8.1-5', '8-6': '3.1.8.2-1', '8-7': '3.1.8.2-2', '8-8': '3.1.8.2-3', '8-9': '3.1.8.2-4',
      '8-10': '3.1.8.2-5', '9-1': '3.1.9.1-1', '9-2': '3.1.9.1-2', '9-3': '3.1.9.2-1', '9-4': '3.1.9.1-3',
      '9-5': '3.1.9.1-4', '9-6': '3.1.9.2-2', '9-7': '3.1.9.1-5', '9-8': '3.1.9.1-6', '9-9': '3.1.9.2-3',
      '10-1': '10-1', '10-2': '10-2', '10-3': '10-3', '10-4': '10-4', '10-5': '10-5',
      '10-6': '10-6', '10-7': '10-7', '10-8': '10-8', '11-1': '3.1.11.1-1', '11-2': '3.1.11.1-2',
      '11-3': '3.1.11.1-3', '11-4': '3.1.11.1-4', '11-5': '3.1.11.1-5', '11-6': '3.1.11.1-6', '11-7': '3.1.11.1-7',
      '11-8': '3.1.11.1-8', '11-9': '3.1.11.2-1', '11-10': '3.1.11.1-9', '12-1': '3.1.12.1-1', '12-2': '3.1.12.2-1',
      '12-3': '3.1.12.3-1', '12-4': '3.1.12.3-2', '12-5': '3.1.12.3-3', '12-6': '3.1.12.4-1', '12-7': '3.1.12.6-1',
      '12-8': '3.1.12.6-2', '12-9': '3.1.12.6-3', '12-10': '3.1.12.5-1', '12-11': '3.1.12.4-2', '13-1': '3.2.1.1-1',
      '13-2': '3.2.1.1-2', '13-3': '3.2.1.2-1', '13-4': '3.2.1.2-2', '13-5': '3.2.1.2-3', '13-6': '3.2.1.2-4',
      '13-7': '3.2.1.2-5', '14-1': '14-1', '14-2': '14-2', '14-3': '14-3', '14-4': '14-4',
      '14-5': '14-5', '14-6': '14-6', '14-7': '14-7', '15-1': '3.2.3.1-1', '15-2': '3.2.3.1-2',
      '15-3': '3.2.3.1-3', '15-4': '3.2.3.1-4', '15-5': '3.2.3.1-5', '15-6': '3.2.3.1-6', '15-7': '3.2.3.2-1',
      '15-8': '3.2.3.2-2', '16-1': '16-1', '16-2': '16-2', '16-3': '16-3', '16-4': '16-4',
      '16-5': '16-5', '16-6': '16-6', '16-7': '16-7', '16-8': '16-8', '17-1': '3.2.5.1-1',
      '17-2': '3.2.5.2-1', '17-3': '3.2.5.2-2', '17-4': '3.2.5.2-3', '17-5': '3.2.5.2-4', '17-6': '3.2.5.2-5',
      '17-7': '3.2.5.4-1', '17-8': '3.2.5.5-1', '17-9': '3.2.5.5-2', '17-10': '3.2.5.6-1', '17-11': '3.2.5.6-2',
      '18-1': '18-1', '18-2': '18-2', '18-3': '18-3', '18-4': '18-4', '18-5': '18-5',
      '18-6': '18-6', '18-7': '18-7', '18-8': '18-8', '19-1': '3.3.1.1-1', '19-2': '3.3.1.1-2',
      '19-3': '3.3.1.1-3', '19-4': '3.3.1.3-1', '19-5': '3.3.1.3-2', '19-6': '3.3.1.3-3', '19-7': '3.3.1.3-4',
      '19-8': '3.3.1.2-1', '19-9': '3.3.1.3-5', '20-1': '3.3.2.1-1', '20-2': '3.3.2.1-2', '20-3': '3.3.2.2-1',
      '20-4': '3.3.2.2-2', '20-5': '3.3.2.3-1', '20-6': '3.3.2.3-2', '20-7': '3.3.2.4-1', '20-8': '3.3.2.4-2',
      '21-1': '3.3.3.1-1', '21-2': '3.3.3.1-2', '21-3': '3.3.3.1-3', '21-4': '3.3.3.1-4', '21-5': '3.3.3.2-1',
      '21-6': '3.3.3.1-5', '21-7': '3.3.3.3-1', '21-8': '3.3.3.1-6', '22-1': '3.3.4.1-1', '22-2': '3.3.4.2-1',
      '22-3': '3.3.4.2-2', '22-4': '3.3.4.2-3', '22-5': '3.3.4.2-4', '22-6': '3.3.4.2-5', '22-7': '3.3.4.3-1',
      '22-8': '3.3.4.3-2', '3.3.5.1-1': '3.3.5.1-1', '3.3.5.1-2': '3.3.5.1-2', '3.3.5.1-3': '3.3.5.1-3', '3.3.5.1-4': '3.3.5.1-4',
      '3.3.5.1-5': '3.3.5.1-5', '3.3.5.2-1': '3.3.5.2-1', '3.3.5.2-2': '3.3.5.2-2', '3.3.5.2-3': '3.3.5.2-3', '3.3.5.2-4': '3.3.5.2-4',
      '3.3.5.2-5': '3.3.5.2-5', '3.3.5.2-6': '3.3.5.2-6', '3.3.5.3-1': '3.3.5.3-1', '3.3.5.3-2': '3.3.5.3-2', '3.3.5.3-3': '3.3.5.3-3',
      '3.3.5.3-4': '3.3.5.3-4', '3.3.5.3-5': '3.3.5.3-5', '24-1': '3.3.6.1-1', '24-2': '3.3.6.1-2', '24-3': '3.3.6.1-3',
      '24-4': '3.3.6.2-1', '24-5': '3.3.6.3-1', '24-6': '3.3.6.3-2', '24-7': '3.3.6.3-3', '24-8': '3.3.6.3-4',
      '25-1': '25-1', '25-2': '25-2', '25-3': '25-3', '25-4': '25-4', '25-5': '25-5',
      '25-6': '25-6', '25-7': '25-7', '26-1': '26-1', '26-2': '26-2', '26-3': '26-3',
      '26-4': '26-4', '26-5': '26-5', '26-6': '26-6', '26-7': '26-7', '26-8': '26-8',
      '27-1': '3.3.9.1-1', '27-2': '3.3.9.1-2', '27-3': '3.3.9.1-3', '27-4': '3.3.9.1-4', '27-5': '3.3.9.1-5',
      '27-6': '3.3.9.2-1', '27-7': '3.3.9.2-2', '27-8': '3.3.9.2-3', '27-9': '3.3.9.2-4', '27-10': '3.3.9.1-6',
      '28-1': '3.3.10.1-1', '28-2': '3.3.10.1-2', '28-3': '3.3.10.1-3', '28-4': '3.3.10.2-1', '28-5': '3.3.10.2-2',
      '28-6': '3.3.10.2-3', '28-7': '3.3.10.2-4', '29-1': '3.3.11.1-1', '29-2': '3.3.11.3-1', '29-3': '3.3.11.1-2',
      '29-4': '3.3.11.1-3', '29-5': '3.3.11.2-1', '29-6': '3.3.11.2-2', '29-7': '3.3.11.3-2', '29-8': '3.3.11.3-3',
      '30-1': '3.3.12.1-1', '30-2': '3.3.12.1-2', '30-3': '3.3.12.1-3', '30-4': '3.3.12.1-4', '30-5': '3.3.12.2-1',
      '30-6': '3.3.12.1-5', '30-7': '3.3.12.2-2', '30-8': '3.3.12.2-3', '31-1': '3.3.13.1-1', '31-2': '3.3.13.1-2',
      '31-3': '3.3.13.2-1', '31-4': '3.3.13.2-2', '31-5': '3.3.13.3-1', '31-6': '3.3.13.4-1', '31-7': '3.3.13.5-1',
      '31-8': '3.3.13.1-3', '32-1': '32-1', '32-2': '32-2', '32-3': '32-3', '32-4': '32-4',
      '32-5': '32-5', '32-6': '32-6', '32-7': '32-7', '33-1': '33-1', '33-2': '33-2',
      '33-3': '33-3', '33-4': '33-4', '33-5': '33-5', '33-6': '33-6', '33-7': '33-7',
      '33-8': '33-8', '34-1': '34-1', '34-2': '34-2', '34-3': '34-3', '34-4': '34-4',
      '34-5': '34-5', '34-6': '34-6', '34-7': '34-7', '34-8': '34-8',
    },
  },
  cards: [
    // 1 Atomic structure (3.1.1)
    ...sub('atomic-structure-7405', 'fundamental-particles-7405', '3.1.1.1', [
      { n: 1, f: 'Relative mass and relative charge of a proton, a neutron and an electron', b: 'Proton: mass 1, charge +1.\nNeutron: mass 1, charge 0.\nElectron: mass 1/1840 (often given as 1/1836), charge −1.' },
      { n: 2, f: 'Atomic number and mass number', b: 'Atomic number (proton number): the number of protons in the nucleus.\nMass number: the number of protons plus neutrons.' },
      { n: 3, f: 'What did Rutherford’s gold foil experiment show, and which model did it replace?', b: 'Most alpha particles passed straight through, a few were deflected and a tiny fraction bounced back. So the atom has a tiny, dense, positive nucleus and is mostly empty space. It replaced the plum pudding model.' },
      { n: 4, f: 'What did Bohr and Chadwick each add to the model of the atom?', b: 'Bohr: electrons occupy fixed energy levels (shells).\nChadwick (1932): the nucleus also contains neutrons, neutral particles with a mass similar to the proton.' },
      { n: 5, f: 'How many protons, neutrons and electrons are in ²⁴Mg²⁺ (atomic number 12)?', b: '12 protons, 12 neutrons (24 − 12) and 10 electrons (two lost to give the 2+ charge).' },
    ]),
    ...sub('atomic-structure-7405', 'mass-number-and-isotopes-7405', '3.1.1.2', [
      { n: 1, f: 'Isotopes, and why isotopes of an element react in the same way', b: 'Atoms of the same element with different numbers of neutrons. Chemistry depends on the electron arrangement, which is the same, so their chemical properties are identical.' },
      { n: 2, f: 'The five stages of time-of-flight (TOF) mass spectrometry, in order', b: 'Ionisation, acceleration, ion drift, detection, data analysis.', src: ATOM },
      { n: 3, f: 'Electron impact vs electrospray ionisation', b: 'Electron impact: a high-energy electron knocks an electron out, forming X⁺ (elements and low-Mr compounds).\nElectrospray: the sample gains a proton, forming XH⁺ (large molecules that would otherwise fragment).' },
      { n: 4, f: 'In TOF mass spectrometry, why do lighter ions reach the detector first?', b: 'All ions are accelerated to the same kinetic energy. Since KE = ½mv², lighter ions have a higher speed, so they cross the drift region in less time.' },
      { n: 5, f: 'An electrospray spectrum shows a molecular ion peak at m/z 181. What is the Mr?', b: '180. Electrospray forms XH⁺, so the m/z is one more than the Mr: subtract 1.' },
      { n: 6, f: 'Magnesium is 79.0% ²⁴Mg, 10.0% ²⁵Mg and 11.0% ²⁶Mg. Calculate its Ar.', b: '(24 × 79.0 + 25 × 10.0 + 26 × 11.0) ÷ 100 = 2432 ÷ 100 = 24.3' },
    ]),
    ...sub('atomic-structure-7405', 'electron-configuration-7405', '3.1.1.3', [
      { n: 1, f: 'Electron configurations of Fe and Fe²⁺', b: 'Fe: [Ar]3d⁶4s².\nFe²⁺: [Ar]3d⁶. The 4s electrons are lost first, even though 4s fills before 3d.' },
      { n: 2, f: 'The two Period 4 exceptions to the filling order', b: 'Cr = [Ar]3d⁵4s¹ and Cu = [Ar]3d¹⁰4s¹, because a half-filled or filled d sub-shell gives extra stability.' },
      { n: 3, f: 'First ionisation energy', b: 'The energy required to remove one mole of electrons from one mole of gaseous atoms to form one mole of gaseous 1+ ions. X(g) → X⁺(g) + e⁻' },
      { n: 4, f: 'Why does first ionisation energy decrease down a group?', b: 'More shells, so a larger atomic radius and more shielding. The outer electron is held less tightly, which outweighs the increase in nuclear charge.' },
      { n: 5, f: 'Why is the first ionisation energy of Al lower than that of Mg?', b: 'Aluminium’s outer electron is in a 3p sub-shell, which is higher in energy and slightly shielded by the 3s electrons, so it is easier to remove.', src: ATOM },
      { n: 6, f: 'Why is the first ionisation energy of S lower than that of P?', b: 'Sulfur has two electrons paired in one 3p orbital, and the repulsion between them makes one easier to remove.', src: ATOM },
      { n: 7, f: 'How do successive ionisation energies show the group of an element?', b: 'A large jump occurs when an electron is removed from a shell closer to the nucleus. The number of electrons removed before the first big jump is the number of outer electrons, which gives the group.' },
    ]),

    // 2 Amount of substance (3.1.2)
    ...sub('amount-of-substance-7405', 'relative-atomic-mass-and-relative-molecular-mass-7405', '3.1.2.1', [
      { n: 1, f: 'Relative atomic mass (Ar)', b: 'The weighted mean mass of an atom of an element, accounting for isotopic abundance, on a scale where an atom of carbon-12 has a mass of exactly 12.' },
      { n: 2, f: 'Relative molecular mass (Mr)', b: 'The weighted mean mass of a molecule on the carbon-12 scale; the sum of the Ar values of its atoms. Used for covalently bonded molecules.' },
      { n: 3, f: 'Relative formula mass is used for…', b: 'Ionic compounds (e.g. NaCl) — use this term, not Mr.', src: MOLE },
      { n: 4, f: 'Why do Ar and Mr have no units?', b: 'They are ratios: masses relative to one-twelfth of the mass of a carbon-12 atom, not actual masses.' },
    ]),
    ...sub('amount-of-substance-7405', 'the-mole-and-the-avogadro-constant-7405', '3.1.2.2', [
      { n: 1, f: 'The three mole equations', b: 'moles = mass ÷ Mr\nmoles = concentration (mol dm⁻³) × volume (dm³)\nnumber of particles = moles × Avogadro constant' },
      { n: 2, f: 'The Avogadro constant', b: 'The number of particles in one mole of a substance, about 6.02 × 10²³ mol⁻¹. You do not need to recall its value; it is given when needed.' },
      { n: 3, f: 'How many molecules are in 8.8 g of CO₂ (Mr 44)? Take L = 6.02 × 10²³ mol⁻¹.', b: '8.8 ÷ 44 = 0.20 mol; 0.20 × 6.02 × 10²³ = 1.2 × 10²³ molecules (2 s.f.).' },
      { n: 4, f: 'How many ions are in 250 cm³ of 0.20 mol dm⁻³ NaCl? Take L = 6.02 × 10²³ mol⁻¹.', b: '0.20 × 0.250 = 0.050 mol NaCl → 3.0 × 10²² formula units. Each gives 2 ions, so 6.0 × 10²² ions.' },
      { n: 5, f: 'To how many significant figures should a calculated answer be given?', b: 'To the number of significant figures in the least precise (least accurate) piece of data used.' },
    ]),
    ...sub('amount-of-substance-7405', 'the-ideal-gas-equation-7405', '3.1.2.3', [
      { n: 1, f: 'The ideal gas equation and its SI units', b: 'pV = nRT\np in Pa, V in m³, n in mol, T in K, R in J K⁻¹ mol⁻¹ (8.31, given in the question).' },
      { n: 2, f: 'Convert to SI: 600 cm³, 2.5 dm³, 101 kPa, 25 °C', b: '600 cm³ = 6.00 × 10⁻⁴ m³\n2.5 dm³ = 2.5 × 10⁻³ m³\n101 kPa = 1.01 × 10⁵ Pa\n25 °C = 298 K' },
      { n: 3, f: '0.0250 mol of argon is in 600 cm³ at 300 K. Find the pressure in kPa (R = 8.31 J K⁻¹ mol⁻¹).', b: 'p = nRT ÷ V = (0.0250 × 8.31 × 300) ÷ (6.00 × 10⁻⁴) = 1.04 × 10⁵ Pa = 104 kPa' },
      { n: 4, f: 'How do you find the Mr of a volatile liquid with a heated gas syringe?', b: 'Inject a weighed mass of liquid into a syringe above its boiling point and read the vapour volume. Then M = mRT ÷ pV, with T the syringe temperature and p the room pressure.' },
      { n: 5, f: 'Classic unit trap when converting cm³ for pV = nRT', b: 'cm³ to m³ is × 10⁻⁶. Dividing by 1000 only gives dm³.' },
    ]),
    ...sub('amount-of-substance-7405', 'empirical-and-molecular-formula-7405', '3.1.2.4', [
      { n: 1, f: 'Empirical formula and molecular formula', b: 'Empirical: the simplest whole-number ratio of atoms of each element in a compound.\nMolecular: the actual number of atoms of each element in the formula.' },
      { n: 2, f: 'Method: empirical formula from percentage composition', b: 'Treat percentages as masses in 100 g. Divide each by Ar, divide all by the smallest, then clear fractions (× 2 for .5, × 3 for .33 or .67, × 4 for .25 or .75).' },
      { n: 3, f: 'A carbide is 75.0% Al and 25.0% C by mass (Al 27.0, C 12.0). Find its empirical formula.', b: 'Al 75.0 ÷ 27.0 = 2.778; C 25.0 ÷ 12.0 = 2.083. Ratio 1.333 : 1, × 3 gives 4 : 3. Al₄C₃.' },
      { n: 4, f: 'How do you get the molecular formula from the empirical formula?', b: 'Multiplier = Mr ÷ empirical formula mass. Multiply every subscript by it. Composition alone cannot do this: CF₂ and C₂F₄ have the same percentages.' },
      { n: 5, f: 'Finding an oxide’s formula: how do you know the reaction is complete?', b: 'Heat to constant mass. Then mass of oxygen = mass of oxide − mass of metal.' },
    ]),
    ...sub('amount-of-substance-7405', 'balanced-equations-and-associated-calculations-7405', '3.1.2.5', [
      { n: 1, f: 'Method for writing an ionic equation. Give the one for Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s) + 2KNO₃(aq)', b: 'Split soluble ionic compounds into ions, keep solids, liquids, gases and weak electrolytes whole, cancel spectator ions, keep state symbols.\nPb²⁺(aq) + 2I⁻(aq) → PbI₂(s)', src: BAL },
      { n: 2, f: '0.500 g of CaCO₃ (Mr 100.1) reacts with excess acid at 298 K and 100 kPa. Volume of CO₂ in cm³? (R = 8.31)', b: 'n = 0.500 ÷ 100.1 = 4.995 × 10⁻³ mol. V = nRT ÷ p = 4.995 × 10⁻³ × 8.31 × 298 ÷ 1.00 × 10⁵ = 1.237 × 10⁻⁴ m³ = 124 cm³.', src: BAL },
      { n: 3, f: '25.0 cm³ of Na₂CO₃ needs 22.50 cm³ of 0.100 mol dm⁻³ HCl. Find the concentration of Na₂CO₃.', b: 'n(HCl) = 0.100 × 0.02250 = 2.250 × 10⁻³ mol. Ratio Na₂CO₃ : HCl = 1 : 2, so n(Na₂CO₃) = 1.125 × 10⁻³ mol. c = 1.125 × 10⁻³ ÷ 0.0250 = 0.0450 mol dm⁻³.', src: BAL },
      { n: 4, f: 'Percentage yield vs percentage atom economy: formulae and what each depends on', b: 'Yield = actual mass ÷ theoretical mass × 100; it needs an experiment and depends on losses.\nAtom economy = Mr of desired product ÷ sum of Mr of all reactants × 100; it needs only the equation.', src: BAL },
      { n: 5, f: 'Atom economy for making CaO from CaCO₃ → CaO + CO₂ (Mr CaO 56.1, CaCO₃ 100.1)', b: '56.1 ÷ 100.1 × 100 = 56.0%. The rest of the reactant mass ends up as the by-product carbon dioxide.', src: BAL },
      { n: 6, f: 'Economic, environmental and ethical advantages of a high atom economy', b: 'Economic: less waste to separate and dispose of, more feedstock becomes product. Environmental: fewer resources used, less waste released. Ethical: conserves finite resources and reduces pollution.', src: BAL },
      { n: 7, f: '2.50 g of CuSO₄·xH₂O gives 1.60 g of anhydrous solid (Mr 159.6). Find x. Why heat to constant mass?', b: 'n(CuSO₄) = 1.60 ÷ 159.6 = 0.0100 mol; n(H₂O) = 0.90 ÷ 18.0 = 0.0500 mol; ratio 5, so x = 5. Constant mass shows all water has gone; otherwise x comes out too small.', src: BAL },
    ]),

    // 3 Bonding (3.1.3)
    ...sub('bonding-7405', 'ionic-bonding-7405', '3.1.3.1', [
      { n: 1, f: 'Ionic bonding', b: 'Electrostatic attraction between oppositely charged ions in a lattice.' },
    ]),
    ...sub('bonding-7405', 'nature-of-covalent-and-dative-covalent-bonds-7405', '3.1.3.2', [
      { n: 1, f: 'Co-ordinate (dative covalent) bond', b: 'A shared pair of electrons with both electrons supplied by one atom. Drawn as an arrow from the donor atom to the acceptor. Examples: NH₄⁺, H₃O⁺, NH₃BF₃.' },
    ]),
    ...sub('bonding-7405', 'metallic-bonding-7405', '3.1.3.3', [
      { n: 1, f: 'Metallic bonding, and what makes it stronger', b: 'Attraction between positive metal ions in a lattice and the delocalised electrons around them. Stronger with a bigger ion charge, smaller ions, or more delocalised electrons per atom.' },
    ]),
    ...sub('bonding-7405', 'bonding-and-physical-properties-7405', '3.1.3.4', [
      { n: 1, f: 'Diamond vs graphite: bonding and conductivity', b: 'Diamond: each C makes 4 covalent bonds (tetrahedral); no free electrons, so no conduction.\nGraphite: each C makes 3 bonds in hexagonal layers; one delocalised electron per C, so it conducts. Weak forces between layers let them slide.' },
      { n: 2, f: 'What is overcome when a simple molecular solid such as iodine melts?', b: 'Only the weak intermolecular forces (van der Waals) between molecules. The covalent bonds inside the molecules do not break.' },
    ]),
    ...sub('bonding-7405', 'shapes-of-simple-molecules-and-ions-7405', '3.1.3.5', [
      { n: 1, f: 'Order of repulsion between electron pairs, and its effect', b: 'Lone pair–lone pair > lone pair–bond pair > bond pair–bond pair. Each lone pair squeezes the bond angles.' },
      { n: 2, f: 'Shapes and bond angles: CH₄ or NH₄⁺, NH₃, H₂O', b: 'NH₄⁺/CH₄: tetrahedral, 109.5°.\nNH₃: trigonal pyramidal, about 107°.\nH₂O: bent, about 104.5°.\nEach lone pair reduces the angle.' },
      { n: 3, f: 'Shapes of SF₆, XeF₄, PCl₅ and ClF₃', b: 'SF₆: octahedral, 90°.\nXeF₄: square planar (2 lone pairs opposite each other).\nPCl₅: trigonal bipyramidal, 120° and 90°.\nClF₃: T-shaped (2 lone pairs).' },
    ]),
    ...sub('bonding-7405', 'bond-polarity-7405', '3.1.3.6', [
      { n: 1, f: 'Electronegativity', b: 'The ability of an atom to draw the bonding pair of electrons towards itself in a covalent bond. It increases across a period and decreases down a group; fluorine is the most electronegative.' },
      { n: 2, f: 'Why is CH₂Cl₂ polar but BF₃ non-polar?', b: 'Both have polar bonds. BF₃ is symmetrical (trigonal planar) so the dipoles cancel. CH₂Cl₂ is tetrahedral with two different outer atoms, so its dipoles do not cancel.' },
    ]),
    ...sub('bonding-7405', 'forces-between-molecules-7405', '3.1.3.7', [
      { n: 1, f: 'The three intermolecular forces, weakest to strongest', b: 'Induced dipole–dipole (van der Waals, London) between all molecules; permanent dipole–dipole between polar molecules; hydrogen bonding (H on N, O or F to a lone pair on N, O or F).' },
      { n: 2, f: 'Why is ice less dense than liquid water?', b: 'In ice each H₂O molecule is hydrogen bonded to four others in an open lattice, holding the molecules further apart than in the liquid.' },
    ]),

    // 4 Energetics (3.1.4)
    ...sub('energetics-7405', 'enthalpy-change-7405', '3.1.4.1', [
      { n: 1, f: 'Enthalpy change, ΔH, and standard conditions', b: 'ΔH is the heat energy change measured at constant pressure. Standard conditions: 100 kPa and a stated temperature, e.g. ΔH⦵₂₉₈ for 298 K.' },
      { n: 2, f: 'Standard enthalpy of combustion, ΔcH⦵', b: 'The enthalpy change when 1 mole of a substance is completely burned in oxygen under standard conditions, all reactants and products in their standard states.' },
      { n: 3, f: 'Standard enthalpy of formation, ΔfH⦵', b: 'The enthalpy change when 1 mole of a compound is formed from its elements under standard conditions, all reactants and products in their standard states.' },
      { n: 4, f: 'What is ΔfH⦵ of O₂(g), and of Br₂(g)?', b: 'O₂(g): zero, as an element in its standard state.\nBr₂(g): not zero, because bromine’s standard state is liquid.' },
    ]),
    ...sub('energetics-7405', 'calorimetry-7405', '3.1.4.2', [
      { n: 1, f: 'Calorimetry: the two equations, with units', b: 'q = mcΔT (m in g of water or solution, c in J g⁻¹ K⁻¹, ΔT in K; q in J).\nΔH = −q ÷ n, with q in kJ and n the moles of the limiting reactant.' },
      { n: 2, f: 'Required practical 2: why extrapolate the cooling line back to the time of mixing?', b: 'To estimate the maximum temperature change, correcting for heat lost to the surroundings while the temperature was rising.' },
    ]),
    ...sub('energetics-7405', 'applications-of-hesss-law-7405', '3.1.4.3', [
      { n: 1, f: 'Hess’s law', b: 'The enthalpy change for a reaction is independent of the route taken, provided the initial and final conditions are the same.' },
      { n: 2, f: 'Hess’s law shortcuts with formation and with combustion data', b: 'Formation: ΔH = ΣΔfH(products) − ΣΔfH(reactants).\nCombustion: ΔH = ΣΔcH(reactants) − ΣΔcH(products).' },
    ]),
    ...sub('energetics-7405', 'bond-enthalpies-7405', '3.1.4.4', [
      { n: 1, f: 'Mean bond enthalpy', b: 'The enthalpy change to break 1 mole of a stated covalent bond in gaseous molecules, averaged over a range of compounds.' },
      { n: 2, f: 'Why does a bond-enthalpy ΔH differ from a Hess’s law value?', b: 'Mean bond enthalpies are averages over many compounds, not the values in these molecules; and the method assumes all species are gases, ignoring enthalpy changes of state.' },
    ]),

    // 5 Kinetics (3.1.5)
    ...sub('kinetics-7405', 'collision-theory-7405', '3.1.5.1', [
      { n: 1, f: 'Activation energy, Ea', b: 'The minimum energy that colliding particles must have for a reaction to occur.' },
      { n: 2, f: 'Rate of reaction', b: 'The change in amount or concentration of a reactant or product per unit time.' },
    ]),
    ...sub('kinetics-7405', 'maxwell-boltzmann-distribution-7405', '3.1.5.2', [
      { n: 1, f: 'Maxwell–Boltzmann distribution: three drawing rules', b: 'Starts at the origin; the curve never meets the energy axis at high energy; the area under it equals the total number of molecules.' },
    ]),
    ...sub('kinetics-7405', 'effect-of-temperature-on-reaction-rate-7405', '3.1.5.3', [
      { n: 1, f: 'How does the curve change at a higher temperature?', b: 'The peak is lower and further right, with the same area. Many more molecules have E ≥ Ea.' },
      { n: 2, f: 'Main reason a small temperature rise greatly increases rate', b: 'A much larger proportion of molecules have energy ≥ Ea, so many more collisions are successful. Slightly more frequent collisions is only a minor reason.' },
    ]),
    ...sub('kinetics-7405', 'effect-of-concentration-and-pressure-7405', '3.1.5.4', [
      { n: 1, f: 'Raising concentration or gas pressure: what changes and what does not?', b: 'Collision frequency rises (more particles per unit volume). The proportion of particles with E ≥ Ea does not change, and the Maxwell–Boltzmann curve does not move.' },
      { n: 2, f: 'Required practical 3 (thiosulfate + acid): what measures the rate?', b: '1/t, where t is the time for the sulfur precipitate to hide a cross. The same amount of sulfur forms each run, so rate ∝ 1/t.' },
    ]),
    ...sub('kinetics-7405', 'catalysts-kinetics-7405', '3.1.5.5', [
      { n: 1, f: 'Catalyst, and how it works', b: 'A substance that increases the rate of a chemical reaction without being changed in chemical composition or amount. It provides an alternative reaction route of lower activation energy.' },
      { n: 2, f: 'Catalyst on a Maxwell–Boltzmann diagram', b: 'One curve, unchanged. A lower Ea(cat) marked to the left of Ea, so a greater proportion of molecules have enough energy to react.' },
    ]),

    // 6 Chemical equilibria, Le Chatelier's principle and Kc (3.1.6)
    ...sub('chemical-equilibria-le-chateliers-principle-and-kc-7405', 'chemical-equilibria-and-le-chateliers-principle-7405', '3.1.6.1', [
      { n: 1, f: 'Dynamic equilibrium', b: 'In a closed system, the forward and reverse reactions proceed at equal rates and the concentrations of reactants and products remain constant (not equal).' },
      { n: 2, f: 'Le Chatelier’s principle', b: 'If a factor affecting a system at equilibrium is changed, the position of equilibrium shifts to oppose the change.' },
      { n: 3, f: 'Effect of increasing pressure on an equilibrium', b: 'The position shifts to the side with fewer moles of gas, reducing the pressure. No shift if both sides have the same number of moles of gas.' },
      { n: 4, f: 'Effect of increasing temperature on an equilibrium', b: 'The position shifts in the endothermic direction, absorbing heat.' },
      { n: 5, f: 'Effect of a catalyst on an equilibrium', b: 'No shift in position and no change in yield. It speeds up the forward and reverse reactions equally, so equilibrium is reached faster.' },
      { n: 6, f: 'Why are moderate temperatures used for an exothermic industrial equilibrium such as the Haber process?', b: 'Low temperature gives a higher yield but too slow a rate. A moderate temperature is a compromise: an acceptable yield at an acceptable rate.' },
    ]),
    ...sub('chemical-equilibria-le-chateliers-principle-and-kc-7405', 'equilibrium-constant-kc-for-homogeneous-systems-7405', '3.1.6.2', [
      { n: 1, f: 'Units of Kc for 2A(g) ⇌ B(g)', b: 'Kc = [B] ÷ [A]², so units are (mol dm⁻³) ÷ (mol dm⁻³)² = mol⁻¹ dm³.' },
      { n: 2, f: 'What changes the value of Kc?', b: 'Only temperature. Concentration, pressure and catalysts change the position or rate, not Kc.' },
      { n: 3, f: 'Forward reaction exothermic, temperature raised: effect on Kc', b: 'Equilibrium shifts left, so Kc decreases (and so does the yield).' },
      { n: 4, f: '2A ⇌ B: start with 1.00 mol A in 2.00 dm³; 0.200 mol B at equilibrium. Find Kc.', b: 'A used 0.400 mol, A left 0.600 mol. [A] = 0.300, [B] = 0.100 mol dm⁻³. Kc = 0.100 ÷ 0.300² = 1.11 mol⁻¹ dm³.' },
    ]),

    // 7 Oxidation, reduction and redox equations (3.1.7)
    ...topicOnly('oxidation-reduction-and-redox-equations-7405', '7', [
      { n: 1, f: 'Oxidation and reduction (electron definitions)', b: 'Oxidation: the process of electron loss.\nReduction: the process of electron gain.' },
      { n: 2, f: 'Oxidising agent and reducing agent', b: 'Oxidising agent: an electron acceptor (it is reduced).\nReducing agent: an electron donor (it is oxidised).' },
      { n: 3, f: 'Oxidation state of H in NaH, and of O in H₂O₂', b: 'H in metal hydrides: −1.\nO in peroxides: −1.' },
      { n: 4, f: 'Oxidation state of Cl in ClO₃⁻', b: 'x + 3(−2) = −1, so x = +5.' },
      { n: 5, f: 'Oxidation states of Mn in MnO₄⁻ and Cr in Cr₂O₇²⁻', b: 'Mn +7 in MnO₄⁻.\nCr +6 in Cr₂O₇²⁻.' },
      { n: 6, f: 'Steps to balance a half-equation in acid', b: 'Balance the element that changes oxidation state; balance O with H₂O; balance H with H⁺; balance charge with e⁻.' },
      { n: 7, f: 'Half-equation: NO₃⁻ to NO₂ in acid', b: 'NO₃⁻ + 2H⁺ + e⁻ → NO₂ + H₂O (N goes from +5 to +4: reduction).' },
      { n: 8, f: 'How do you combine two half-equations into an overall equation?', b: 'Scale them so electrons lost = electrons gained, add, then cancel electrons and any H⁺ and H₂O that appear on both sides. Check atoms and charge.' },
    ]),

    // 8 Thermodynamics (3.1.8)
    ...sub('thermodynamics-7405', 'born-haber-cycles-7405', '3.1.8.1', [
      { n: 1, f: 'Enthalpy of atomisation, ΔatH⦵', b: 'The enthalpy change when 1 mole of gaseous atoms is formed from the element in its standard state, e.g. ½Cl₂(g) → Cl(g). Always positive.' },
      { n: 2, f: 'First and second electron affinity of oxygen: equations and signs', b: 'First: O(g) + e⁻ → O⁻(g), exothermic.\nSecond: O⁻(g) + e⁻ → O²⁻(g), endothermic (adding an electron to a negative ion).' },
      { n: 3, f: 'Lattice enthalpy of formation vs lattice enthalpy of dissociation', b: 'Formation: 1 mole of solid ionic compound formed from its gaseous ions (negative).\nDissociation: 1 mole of solid separated into its gaseous ions (positive). Same size, opposite sign.' },
      { n: 4, f: 'Enthalpy of solution from lattice and hydration enthalpies', b: 'ΔsolH = lattice enthalpy of dissociation + Σ ΔhydH of all the ions (count each ion).' },
      { n: 5, f: 'Born–Haber value more exothermic than the perfect ionic model value: what does it show?', b: 'Covalent character. The cation polarises the anion’s electron cloud, giving extra attraction. Greatest with a small, highly charged cation and a large anion.' },
    ]),
    ...sub('thermodynamics-7405', 'gibbs-free-energy-change-g-and-entropy-change-s-7405', '3.1.8.2', [
      { n: 1, f: 'When is ΔS positive?', b: 'When a solid becomes liquid or gas, a liquid becomes gas, or the number of moles of gas increases.' },
      { n: 2, f: 'Gibbs free-energy equation and the feasibility condition', b: 'ΔG = ΔH − TΔS (T in K, ΔS in kJ K⁻¹ mol⁻¹ to match ΔH). A reaction is feasible when ΔG ≤ 0.' },
      { n: 3, f: 'Temperature at which a reaction becomes feasible', b: 'Set ΔG = 0, so T = ΔH ÷ ΔS. With ΔH and ΔS both positive it is feasible above this T; both negative, below it.' },
      { n: 4, f: 'Graph of ΔG against T: gradient and intercept', b: 'Gradient = −ΔS. Intercept at T = 0 = ΔH. It crosses ΔG = 0 where the reaction becomes feasible.' },
      { n: 5, f: 'Classic unit trap in ΔG = ΔH − TΔS', b: 'Entropies are in J K⁻¹ mol⁻¹ but ΔH is in kJ mol⁻¹: divide ΔS by 1000 first.' },
    ]),

    // 9 Rate equations (3.1.9)
    ...sub('rate-equations-7405', 'rate-equations-subtopic-7405', '3.1.9.1', [
      { n: 1, f: 'Rate equation', b: 'Rate = k[A]^m [B]^n, an experimentally determined relationship.', src: RATE },
      { n: 2, f: 'Order of reaction with respect to a reactant', b: 'The power to which its concentration is raised in the rate equation. The overall order is the sum of the orders.' },
      { n: 3, f: 'Units of k for overall orders 1, 2 and 3', b: 'First: s⁻¹.\nSecond: mol⁻¹ dm³ s⁻¹.\nThird: mol⁻² dm⁶ s⁻¹.' },
      { n: 4, f: 'Rate = k[A][B]². [A] is halved and [B] is tripled. What happens to the rate?', b: '½ × 3² = 4.5, so the rate increases by a factor of 4.5.' },
      { n: 5, f: 'The Arrhenius equation and its straight-line form', b: 'k = A e^(−Ea/RT).\nln k = −Ea/(RT) + ln A: plot ln k against 1/T; gradient = −Ea/R, intercept = ln A.' },
      { n: 6, f: 'What can change the value of k?', b: 'Temperature (k rises as T rises) or adding a catalyst. Never a change in concentration.' },
    ]),
    ...sub('rate-equations-7405', 'determination-of-rate-equation-7405', '3.1.9.2', [
      { n: 1, f: 'Rate-determining step', b: 'The slowest step in a mechanism; it limits the overall rate.', src: RATE },
      { n: 2, f: 'Shapes of rate against [A] for orders 0, 1 and 2', b: 'Order 0: horizontal line.\nOrder 1: straight line through the origin.\nOrder 2: upward curve through the origin.' },
      { n: 3, f: 'What do the orders tell you about the rate-determining step?', b: 'Species in the rate equation take part in the rate-determining step (or a step before it). A zero-order reactant reacts after it.' },
    ]),

    // 10 Equilibrium constant Kp for homogeneous systems (3.1.10)
    ...topicOnly('equilibrium-constant-kp-for-homogeneous-systems-7405', '10', [
      { n: 1, f: 'Mole fraction', b: 'x(A) = moles of A ÷ total moles of gas in the mixture. No units; all mole fractions add up to 1.' },
      { n: 2, f: 'Partial pressure', b: 'p(A) = x(A) × total pressure: the pressure gas A would exert if it alone filled the container. Partial pressures add up to the total pressure.' },
      { n: 3, f: 'Kp expression for N₂(g) + 3H₂(g) ⇌ 2NH₃(g), with units in kPa', b: 'Kp = p(NH₃)² ÷ (p(N₂) × p(H₂)³). Units: kPa⁻².' },
      { n: 4, f: 'Units of Kp for N₂O₄(g) ⇌ 2NO₂(g) with pressures in kPa', b: 'kPa (Δn = 2 − 1 = +1).' },
      { n: 5, f: 'Effect of raising total pressure on Kp and on the position', b: 'Kp does not change at constant temperature. The position shifts to the side with fewer moles of gas.' },
      { n: 6, f: 'Forward reaction endothermic, temperature raised: effect on Kp', b: 'The equilibrium shifts right, so Kp increases.' },
      { n: 7, f: '0.900 mol A, 0.300 mol B, 0.600 mol C at a total pressure of 180 kPa. Partial pressures?', b: 'Total 1.800 mol. p(A) = 0.500 × 180 = 90.0 kPa; p(B) = 30.0 kPa; p(C) = 60.0 kPa. They sum to 180 kPa.' },
      { n: 8, f: 'Classic trap when finding the total moles of gas for mole fractions', b: 'Use equilibrium moles, not initial moles, and include products that started at zero.' },
    ]),

    // 11 Electrode potentials and electrochemical cells (3.1.11)
    ...sub('electrode-potentials-and-electrochemical-cells-7405', 'electrode-potentials-and-cells-7405', '3.1.11.1', [
      { n: 1, f: 'Standard electrode potential, E⦵', b: 'The EMF of a half-cell measured against the standard hydrogen electrode at 298 K, 100 kPa and 1.00 mol dm⁻³ solutions of ions.', src: ELEC },
      { n: 2, f: 'Salt bridge', b: 'Usually filter paper soaked in saturated KNO₃(aq). Ions move through it to balance charge. It does not carry electrons.', src: ELEC },
      { n: 3, f: 'The standard hydrogen electrode', b: 'Platinum electrode; H₂ gas at 100 kPa; 1.00 mol dm⁻³ H⁺(aq); 298 K. E⦵ = 0.00 V by definition. Pt(s) | H₂(g) | H⁺(aq)' },
      { n: 4, f: 'Conventional cell representation: what goes on the left and the right?', b: 'Left: the negative electrode, written as an oxidation, e.g. Zn(s) | Zn²⁺(aq).\nRight: the positive electrode, written as a reduction, e.g. Ag⁺(aq) | Ag(s).\n|| is the salt bridge.' },
      { n: 5, f: 'EMF of a cell from electrode potentials', b: 'EMF = E⦵(right) − E⦵(left) = E⦵(positive) − E⦵(negative). Do not multiply E⦵ when a half-equation is scaled.' },
      { n: 6, f: 'EMF of Zn | Zn²⁺ || Cu²⁺ | Cu (E⦵ Zn²⁺/Zn −0.76 V, Cu²⁺/Cu +0.34 V)', b: '+0.34 − (−0.76) = +1.10 V' },
      { n: 7, f: 'How do you decide whether a redox reaction is feasible from E⦵ values?', b: 'The more positive half-equation goes forwards (reduction) and the other goes backwards. It is feasible if the oxidising agent’s E⦵ is more positive than the reducing agent’s.' },
      { n: 8, f: 'Raising [Cu²⁺] in a Cu²⁺/Cu half-cell: effect on its electrode potential', b: 'The equilibrium Cu²⁺ + 2e⁻ ⇌ Cu shifts right, so E becomes more positive.' },
      { n: 9, f: 'Required practical 8: why a high-resistance voltmeter?', b: 'So that negligible current flows and the reading is the EMF.' },
    ]),
    ...sub('electrode-potentials-and-electrochemical-cells-7405', 'commercial-applications-of-electrochemical-cells-7405', '3.1.11.2', [
      { n: 1, f: 'Alkaline hydrogen–oxygen fuel cell: electrode half-equations', b: 'Positive: O₂ + 2H₂O + 4e⁻ → 4OH⁻\nNegative: H₂ + 2OH⁻ → 2H₂O + 2e⁻\nOverall 2H₂ + O₂ → 2H₂O; EMF +1.23 V.' },
    ]),

    // 12 Acids and bases (3.1.12)
    ...sub('acids-and-bases-7405', 'bronsted-lowry-acid-base-equilibria-in-aqueous-solution-7405', '3.1.12.1', [
      { n: 1, f: 'Brønsted–Lowry acid and base', b: 'An acid is a proton donor; a base is a proton acceptor.', src: ACID },
    ]),
    ...sub('acids-and-bases-7405', 'definition-and-determination-of-ph-7405', '3.1.12.2', [
      { n: 1, f: 'pH', b: '−log₁₀[H⁺].', src: ACID },
    ]),
    ...sub('acids-and-bases-7405', 'the-ionic-product-of-water-kw-7405', '3.1.12.3', [
      { n: 1, f: 'Kw: expression, value at 298 K and units', b: 'Kw = [H⁺][OH⁻] = 1.00 × 10⁻¹⁴ mol² dm⁻⁶ at 298 K.' },
      { n: 2, f: 'Pure water at a higher temperature has a pH below 7. Is it acidic?', b: 'No, it is still neutral, because [H⁺] = [OH⁻]. Kw increases with temperature because the dissociation of water is endothermic.' },
      { n: 3, f: 'pH of 0.0100 mol dm⁻³ NaOH at 298 K', b: '[H⁺] = Kw ÷ [OH⁻] = 1.00 × 10⁻¹⁴ ÷ 0.0100 = 1.00 × 10⁻¹² mol dm⁻³, so pH = 12.00.' },
    ]),
    ...sub('acids-and-bases-7405', 'weak-acids-and-bases-ka-for-weak-acids-7405', '3.1.12.4', [
      { n: 1, f: 'pH of a weak acid: the two assumptions', b: '[H⁺] = [A⁻], and [HA] at equilibrium equals the starting concentration (only slight dissociation). So [H⁺] = √(Ka × [HA]).' },
      { n: 2, f: 'Ka vs pKa: which way means a stronger acid?', b: 'Larger Ka means stronger acid; larger pKa means weaker acid.', src: ACID },
    ]),
    ...sub('acids-and-bases-7405', 'ph-curves-titrations-and-indicators-7405', '3.1.12.5', [
      { n: 1, f: 'Indicator for a weak acid–strong base titration, and why', b: 'Phenolphthalein (range 8.3–10.0), because the vertical section and the equivalence point are in the alkaline range.' },
    ]),
    ...sub('acids-and-bases-7405', 'buffer-action-7405', '3.1.12.6', [
      { n: 1, f: 'pH of a buffer made from HA and its salt', b: '[H⁺] = Ka × [HA] ÷ [A⁻] (moles can be used, as the volume cancels), then pH = −log₁₀[H⁺]. At half-neutralisation pH = pKa.' },
      { n: 2, f: 'Buffer', b: 'A solution that keeps an approximately constant pH despite dilution or the addition of small amounts of acid or base.' },
      { n: 3, f: 'How does an acidic buffer (CH₃COOH / CH₃COO⁻) resist added acid and added alkali?', b: 'Added H⁺: H⁺ + A⁻ → HA.\nAdded OH⁻: OH⁻ + HA → A⁻ + H₂O.\nThe large reservoirs of HA and A⁻ mean the ratio [HA]/[A⁻] barely changes.' },
    ]),

    // 13 Periodicity (3.2.1)
    ...sub('periodicity-7405', 'classification-7405', '3.2.1.1', [
      { n: 1, f: 'How is an element’s block (s, p, d or f) decided?', b: 'By the sub-shell that holds its highest-energy electron.' },
      { n: 2, f: 'Which block are helium and gallium in?', b: 'Helium (1s²): s block.\nGallium: p block, because its last electron goes into 4p, even though it contains 3d¹⁰.' },
    ]),
    ...sub('periodicity-7405', 'physical-properties-of-period-3-elements-7405', '3.2.1.2', [
      { n: 1, f: 'Why does atomic radius decrease from Na to Cl?', b: 'Nuclear charge increases, electrons are added to the same shell so shielding is similar, and the stronger attraction pulls the outer electrons closer.' },
      { n: 2, f: 'Why does silicon have the highest melting point in Period 3?', b: 'It is macromolecular: many strong covalent bonds must be broken to melt it.' },
      { n: 3, f: 'Melting points of P₄, S₈ and Cl₂: order and reason', b: 'S₈ > P₄ > Cl₂. Only van der Waals forces are overcome; more electrons per molecule (S₈ 128, P₄ 60, Cl₂ 34) give stronger forces.' },
      { n: 4, f: 'Why does the melting point rise from Na to Al?', b: 'Ion charge goes +1, +2, +3, delocalised electrons per atom go 1, 2, 3 and the ions get smaller, so metallic bonding gets stronger.' },
      { n: 5, f: 'Trend in first ionisation energy across Period 3', b: 'A general increase from Na (lowest) to Ar (highest), with small drops at Al and at S.' },
    ]),

    // 14 Group 2, the alkaline earth metals (3.2.2)
    ...topicOnly('group-2-the-alkaline-earth-metals-7405', '14', [
      { n: 1, f: 'Trends down Group 2 (Mg to Ba): atomic radius and first ionisation energy', b: 'Atomic radius increases (one more shell each time). First ionisation energy decreases: the outer electron is further away and more shielded.' },
      { n: 2, f: 'Why does the melting point generally decrease from Ca to Ba?', b: 'Each ion is 2+, but the ions get larger, so the attraction between the ions and the delocalised electrons is weaker.' },
      { n: 3, f: 'Magnesium with cold water and with steam', b: 'Cold water: very slow, Mg + 2H₂O → Mg(OH)₂ + H₂.\nSteam: burns with a bright white light, Mg + H₂O → MgO + H₂.' },
      { n: 4, f: 'Solubility trends of Group 2 hydroxides and sulfates', b: 'Hydroxides: solubility increases down the group (Mg(OH)₂ sparingly soluble).\nSulfates: solubility decreases down the group (BaSO₄ insoluble).' },
      { n: 5, f: 'Test for sulfate ions, and why the acid is added', b: 'Add dilute HCl (or HNO₃), then BaCl₂(aq): a white precipitate of BaSO₄. The acid removes carbonate (and sulfite) ions, which would also give a white precipitate. Never use H₂SO₄.' },
      { n: 6, f: 'Role of magnesium in titanium extraction', b: 'TiCl₄ + 2Mg → Ti + 2MgCl₂. Magnesium is oxidised, so it is the reducing agent.' },
      { n: 7, f: 'Uses of Mg(OH)₂, Ca(OH)₂, CaO/CaCO₃ and BaSO₄', b: 'Mg(OH)₂: antacid.\nCa(OH)₂: raises the pH of acidic soil.\nCaO or CaCO₃: removes SO₂ from flue gases.\nBaSO₄: barium meal for X-rays (insoluble, so toxic Ba²⁺ is not absorbed).' },
    ]),

    // 15 Group 7(17), the halogens (3.2.3)
    ...sub('group-7-17-the-halogens-7405', 'trends-in-properties-7405', '3.2.3.1', [
      { n: 1, f: 'Why does the boiling point of the halogens increase down the group?', b: 'More electrons per molecule (Cl₂ 34, Br₂ 70, I₂ 106), so stronger van der Waals forces between molecules need more energy to overcome. The X–X bond does not break.' },
      { n: 2, f: 'Trends down Group 7 in the oxidising ability of X₂ and the reducing ability of X⁻', b: 'Oxidising ability of the halogens decreases; reducing ability of the halide ions increases.' },
      { n: 3, f: 'Chlorine water added to potassium iodide solution: result and ionic equation', b: 'Brown solution. Cl₂ + 2I⁻ → 2Cl⁻ + I₂' },
      { n: 4, f: 'Concentrated H₂SO₄ with NaCl and with NaBr: observations', b: 'NaCl: steamy white fumes of HCl only (acid–base, not redox).\nNaBr: steamy fumes of HBr, then orange-brown fumes of Br₂, and SO₂ forms (S +6 → +4).' },
      { n: 5, f: 'Reduction products of H₂SO₄ with sodium iodide, and their observations', b: 'SO₂ (S +4); S, a yellow solid (S 0); H₂S, a bad-egg smell (S −2). I₂ appears as a black solid or purple vapour.' },
      { n: 6, f: 'Silver nitrate test: precipitate colours and ammonia solubility', b: 'Cl⁻: white, dissolves in dilute NH₃.\nBr⁻: cream, dissolves only in concentrated NH₃.\nI⁻: yellow, insoluble in concentrated NH₃.\nAcidify with dilute HNO₃ first.' },
    ]),
    ...sub('group-7-17-the-halogens-7405', 'uses-of-chlorine-and-chlorate-i-7405', '3.2.3.2', [
      { n: 1, f: 'Chlorine with cold, dilute NaOH: equation and type of reaction', b: 'Cl₂ + 2NaOH → NaCl + NaClO + H₂O. Disproportionation: Cl goes from 0 to −1 and to +1. The NaClO solution is bleach.' },
      { n: 2, f: 'Why is chlorine added to drinking water despite being toxic?', b: 'It kills bacteria. The doses are controlled and the health benefits outweigh the toxic effects.' },
    ]),

    // 16 Properties of Period 3 elements and their oxides (3.2.4)
    ...topicOnly('properties-of-period-3-elements-and-their-oxides-7405', '16', [
      { n: 1, f: 'Amphoteric oxide', b: 'Reacts with both acids and bases (Al₂O₃).', src: P3OX },
      { n: 2, f: 'Sodium vs magnesium with cold water', b: 'Na: vigorous, 2Na + 2H₂O → 2NaOH + H₂, pH 13–14.\nMg: very slow, Mg + 2H₂O → Mg(OH)₂ + H₂, pH 9–10.' },
      { n: 3, f: 'Equations: P₄O₁₀, SO₂ and SO₃ with water', b: 'P₄O₁₀ + 6H₂O → 4H₃PO₄\nSO₂ + H₂O → H₂SO₃\nSO₃ + H₂O → H₂SO₄' },
      { n: 4, f: 'Why do Al₂O₃ and SiO₂ give pH 7 with water?', b: 'Both are insoluble: their giant structures are too strongly bonded to dissolve. They are not neutral oxides: Al₂O₃ is amphoteric and SiO₂ is acidic.' },
      { n: 5, f: 'Why does MgO have a higher melting point than Na₂O?', b: 'Both are giant ionic, but Mg²⁺ has a higher charge and is smaller than Na⁺, so the attraction to O²⁻ is stronger.' },
      { n: 6, f: 'Why does P₄O₁₀ have a low melting point?', b: 'It is simple molecular: only van der Waals forces between molecules are overcome, not covalent bonds.' },
      { n: 7, f: 'Al₂O₃ with an acid and with sodium hydroxide', b: 'Al₂O₃ + 6H⁺ → 2Al³⁺ + 3H₂O\nAl₂O₃ + 2OH⁻ + 3H₂O → 2Al(OH)₄⁻' },
      { n: 8, f: 'SiO₂ with sodium hydroxide', b: 'Only with hot, concentrated NaOH: SiO₂ + 2OH⁻ → SiO₃²⁻ + H₂O' },
    ]),

    // 17 Transition metals (3.2.5)
    ...sub('transition-metals-7405', 'general-properties-of-transition-metals-7405', '3.2.5.1', [
      { n: 1, f: 'What gives transition metals (Ti–Cu) their characteristic properties, and what are the four properties?', b: 'An incomplete d sub-level in atoms or ions. Properties: complex formation, coloured ions, variable oxidation state and catalytic activity.' },
    ]),
    ...sub('transition-metals-7405', 'substitution-reactions-7405', '3.2.5.2', [
      { n: 1, f: 'Ligand', b: 'A molecule or ion that forms a co-ordinate bond with a transition metal by donating a pair of electrons.', src: TM },
      { n: 2, f: 'Co-ordination number', b: 'The number of co-ordinate bonds to the central metal atom or ion.', src: TM },
      { n: 3, f: 'Why does replacing H₂O by Cl⁻ change the co-ordination number from 6 to 4?', b: 'Cl⁻ is larger than H₂O, so fewer fit round the metal: e.g. [Co(H₂O)₆]²⁺ + 4Cl⁻ → [CoCl₄]²⁻ + 6H₂O (octahedral to tetrahedral).' },
      { n: 4, f: 'The chelate effect', b: 'Multidentate ligands replace monodentate ones. ΔH is small (similar bonds broken and made) but the number of particles increases, so ΔS is positive and ΔG = ΔH − TΔS is negative.' },
      { n: 5, f: 'Why is carbon monoxide toxic?', b: 'CO replaces the O₂ that is co-ordinately bonded to Fe(II) in haem, so oxygen cannot be transported in the blood.' },
    ]),
    ...sub('transition-metals-7405', 'shapes-of-complex-ions-7405', '3.2.5.3', [
      { n: 1, f: 'The four shapes of complex ions: co-ordination number, bond angle and an example of each', b: 'Octahedral: 6, 90°, [Cu(H₂O)₆]²⁺.\nTetrahedral: 4, 109.5°, [CuCl₄]²⁻.\nSquare planar: 4, 90°, [Pt(NH₃)₂Cl₂].\nLinear: 2, 180°, [Ag(NH₃)₂]⁺.', src: SHAPES },
      { n: 2, f: 'Why does Cl⁻ give a tetrahedral complex when H₂O or NH₃ give an octahedral one?', b: 'Cl⁻ is a larger ligand, so only four fit around the metal ion. The co-ordination number falls from 6 to 4 and the shape changes from octahedral to tetrahedral.', src: SHAPES },
      { n: 3, f: 'Cis–trans isomerism in complexes, and which isomer is cisplatin', b: 'Identical ligands are adjacent (cis, 90°) or opposite (trans, 180°). It occurs in square planar and octahedral complexes. Cisplatin is cis-[Pt(NH₃)₂Cl₂], an anti-cancer drug.', src: SHAPES },
      { n: 4, f: 'Which complexes show cis–trans isomerism?', b: 'Square planar MA₂B₂ and octahedral MA₄B₂: yes. Square planar MA₃B: no. Tetrahedral and linear complexes: no.', src: SHAPES },
      { n: 5, f: 'Optical isomerism in complexes: what is needed, with an example', b: 'Octahedral complexes with bidentate ligands, such as [Ni(H₂NCH₂CH₂NH₂)₃]²⁺ or [Cr(C₂O₄)₃]³⁻. The isomers are non-superimposable mirror images.', src: SHAPES },
      { n: 6, f: 'cis-[Co(en)₂Cl₂]⁺ shows optical isomerism but the trans form does not. Why?', b: 'The trans form has a plane of symmetry, so it is superimposable on its mirror image. The cis form has no plane of symmetry, so its mirror images are different.', src: SHAPES },
      { n: 7, f: 'Shape, isomerism and oxidation state of cobalt in [Co(NH₃)₄Cl₂]⁺', b: 'Octahedral, with cis (Cl⁻ at 90°) and trans (Cl⁻ at 180°) isomers. Cobalt is +3, since the overall charge +1 = Co + 2 × (−1).', src: SHAPES },
    ]),
    ...sub('transition-metals-7405', 'formation-of-coloured-ions-7405', '3.2.5.4', [
      { n: 1, f: 'Why are transition metal complexes coloured?', b: 'Some visible wavelengths are absorbed, moving d electrons from the ground state to an excited state (ΔE = hν = hc/λ). The colour seen is the light transmitted or reflected.' },
    ]),
    ...sub('transition-metals-7405', 'variable-oxidation-states-7405', '3.2.5.5', [
      { n: 1, f: 'Colours of vanadium oxidation states when vanadate(V) is reduced by zinc in acid', b: 'VO₂⁺ (+5) yellow → VO²⁺ (+4) blue → V³⁺ (+3) green → V²⁺ (+2) violet.' },
      { n: 2, f: 'Manganate(VII) titrations: mole ratio with Fe²⁺ and with ethanedioate', b: 'MnO₄⁻ : Fe²⁺ = 1 : 5.\nMnO₄⁻ : C₂O₄²⁻ = 2 : 5 (the mixture is warmed).\nThe end point is the first permanent pale pink.' },
    ]),
    ...sub('transition-metals-7405', 'catalysts-transition-metals-7405', '3.2.5.6', [
      { n: 1, f: 'Heterogeneous vs homogeneous catalyst, with an example of each', b: 'Heterogeneous: a different phase; works at surface active sites (V₂O₅ in the Contact process, Fe in the Haber process).\nHomogeneous: the same phase; works through an intermediate (Fe²⁺ in S₂O₈²⁻ + I⁻).' },
      { n: 2, f: 'Autocatalyst', b: 'A product of the reaction that catalyses it, e.g. Mn²⁺ in the reaction of MnO₄⁻ with C₂O₄²⁻.' },
    ]),

    // 18 Reactions of ions in aqueous solution (3.2.6)
    ...topicOnly('reactions-of-ions-in-aqueous-solution-7405', '18', [
      { n: 1, f: 'Metal-aqua ion', b: 'A metal ion with six water ligands, each bonded by a co-ordinate bond from oxygen, for example [Cu(H₂O)₆]²⁺.', src: IONS },
      { n: 2, f: 'Why are [M(H₂O)₆]³⁺ solutions more acidic than [M(H₂O)₆]²⁺ solutions?', b: 'M³⁺ has a higher charge and smaller radius, so a higher charge/size ratio. It is more polarising, weakening the O–H bonds in the water ligands, so H⁺ is released more easily.' },
      { n: 3, f: 'Fe²⁺, Cu²⁺, Fe³⁺ and Al³⁺ with a little NaOH(aq): precipitate colours', b: 'Fe²⁺: green.\nCu²⁺: pale blue.\nFe³⁺: brown.\nAl³⁺: white.' },
      { n: 4, f: 'Which hydroxide precipitate dissolves in excess NaOH, and which in excess NH₃?', b: 'Excess NaOH: aluminium hydroxide only (amphoteric), giving a colourless solution of [Al(H₂O)₂(OH)₄]⁻.\nExcess NH₃: copper hydroxide only, giving deep blue [Cu(NH₃)₄(H₂O)₂]²⁺.' },
      { n: 5, f: 'Sodium carbonate with 2+ aqua ions vs 3+ aqua ions', b: '2+ (Fe²⁺, Cu²⁺): a metal carbonate precipitates (FeCO₃, CuCO₃).\n3+ (Fe³⁺, Al³⁺): the hydroxide precipitates and CO₂ is given off (effervescence).' },
      { n: 6, f: 'Equation: [Fe(H₂O)₆]³⁺ with ammonia (a few drops)', b: '[Fe(H₂O)₆]³⁺ + 3NH₃ → [Fe(H₂O)₃(OH)₃] + 3NH₄⁺ (brown precipitate).' },
      { n: 7, f: 'Why does an iron(II) hydroxide precipitate darken on standing in air?', b: 'Iron(II) is oxidised to iron(III) by oxygen in the air, so the green precipitate turns brown.' },
      { n: 8, f: 'Why do the neutral hydroxides precipitate?', b: 'They carry no charge (e.g. [Cu(H₂O)₄(OH)₂]), so they are not stabilised by water and come out of solution.' },
    ]),

    // 19 Introduction to organic chemistry (3.3.1)
    ...sub('introduction-to-organic-chemistry-7405', 'nomenclature-7405', '3.3.1.1', [
      { n: 1, f: 'Homologous series: four features', b: 'Same general formula; successive members differ by CH₂; same functional group, so similar chemical properties; a gradual trend in physical properties.' },
      { n: 2, f: 'Functional group', b: 'An atom or group of atoms responsible for the typical reactions of a compound.' },
      { n: 3, f: 'Name CH₃COCH₂CH₂CH₃ and CH₂=CHCH(OH)CH₃', b: 'Pentan-2-one.\nBut-3-en-2-ol (–OH takes the suffix and the lower number).' },
    ]),
    ...sub('introduction-to-organic-chemistry-7405', 'reaction-mechanisms-7405', '3.3.1.2', [
      { n: 1, f: 'Curly arrow', b: 'Shows the movement of an electron pair. It starts at a lone pair or a covalent bond and ends where the new bond forms or at the atom that keeps the pair.' },
    ]),
    ...sub('introduction-to-organic-chemistry-7405', 'isomerism-7405', '3.3.1.3', [
      { n: 1, f: 'Structural isomers vs stereoisomers', b: 'Structural isomers: same molecular formula, different structural formula.\nStereoisomers: same structural formula, different arrangement of atoms in space.' },
      { n: 2, f: 'The three types of structural isomer, with examples', b: 'Chain: butane / methylpropane.\nPosition: 1-chloropropane / 2-chloropropane.\nFunctional group: hex-1-ene / cyclohexane.' },
      { n: 3, f: 'Why do E–Z isomers exist, and when are they possible?', b: 'Restricted rotation about the planar C=C bond. Each carbon of the C=C must carry two different groups.' },
      { n: 4, f: 'How do you assign E or Z?', b: 'Rank the two groups on each C=C carbon by atomic number (CIP rules). Higher-priority groups on the same side: Z. On opposite sides: E.' },
      { n: 5, f: 'E/Z vs cis/trans', b: 'The specification uses E and Z with CIP priorities. Z is not always the "both H on one side" form — apply the rules each time.', src: INTRO },
    ]),

    // 20 Alkanes (3.3.2)
    ...sub('alkanes-7405', 'fractional-distillation-of-crude-oil-7405', '3.3.2.1', [
      { n: 1, f: 'How does fractional distillation of crude oil separate it?', b: 'The vapour rises through a column that is hot at the bottom and cool at the top. Each hydrocarbon condenses where the temperature falls below its boiling point; short chains collect near the top.' },
      { n: 2, f: 'Why do longer-chain alkanes have higher boiling points?', b: 'More electrons and more surface contact, so stronger van der Waals forces between molecules, which need more energy to overcome.' },
    ]),
    ...sub('alkanes-7405', 'modification-of-alkanes-by-cracking-7405', '3.3.2.2', [
      { n: 1, f: 'Thermal vs catalytic cracking: conditions and main products', b: 'Thermal: high pressure, high temperature; high percentage of alkenes.\nCatalytic: slight pressure, high temperature, zeolite catalyst; motor fuels and aromatic hydrocarbons.' },
      { n: 2, f: 'Economic reasons for cracking', b: 'Distillation gives a surplus of long-chain fractions; demand is higher for short-chain fractions such as petrol, which are worth more. Cracking also makes alkenes for polymers and other chemicals.' },
    ]),
    ...sub('alkanes-7405', 'combustion-of-alkanes-7405', '3.3.2.3', [
      { n: 1, f: 'Where do NO and SO₂ from engines and power stations come from?', b: 'NO: nitrogen and oxygen from the air reacting at high engine temperature (N₂ + O₂ → 2NO).\nSO₂: sulfur impurities in the fuel.' },
      { n: 2, f: 'What does a catalytic converter do? Give one equation.', b: 'Converts CO, NOₓ and unburned hydrocarbons into CO₂, N₂ and H₂O. For example 2CO + 2NO → 2CO₂ + N₂.' },
    ]),
    ...sub('alkanes-7405', 'chlorination-of-alkanes-7405', '3.3.2.4', [
      { n: 1, f: 'Chlorination of methane: conditions and the two propagation steps', b: 'UV light; free-radical substitution.\nCl• + CH₄ → •CH₃ + HCl\n•CH₃ + Cl₂ → CH₃Cl + Cl•' },
      { n: 2, f: 'Initiation and termination steps in the chlorination of methane', b: 'Initiation: Cl₂ → 2Cl•\nTermination (any two radicals): Cl• + Cl• → Cl₂; •CH₃ + Cl• → CH₃Cl; •CH₃ + •CH₃ → C₂H₆' },
    ]),

    // 21 Halogenoalkanes (3.3.3)
    ...sub('halogenoalkanes-7405', 'nucleophilic-substitution-7405', '3.3.3.1', [
      { n: 1, f: 'Why do nucleophiles attack halogenoalkanes?', b: 'The halogen is more electronegative than carbon, so the C–X bond is polar: C is δ+ and attracts the lone pair of a nucleophile.' },
      { n: 2, f: 'Nucleophilic substitution: reagents and conditions for OH⁻, CN⁻ and NH₃', b: 'OH⁻: NaOH or KOH(aq), warm → alcohol.\nCN⁻: KCN in aqueous ethanol, reflux → nitrile (one more carbon).\nNH₃: excess NH₃ in ethanol, heated in a sealed container → primary amine.' },
      { n: 3, f: 'Order of reactivity of halogenoalkanes, and the reason', b: 'Iodo > bromo > chloro > fluoro. The C–X bond enthalpy decreases from C–F to C–I, and the weaker bond breaks faster. Polarity predicts the opposite order.' },
      { n: 4, f: 'Why is excess ammonia used to make a primary amine?', b: 'The amine product has a lone pair and can itself act as a nucleophile; excess NH₃ reduces further substitution.' },
      { n: 5, f: 'Name the product of 1-bromopropane with KCN', b: 'Butanenitrile, CH₃CH₂CH₂CN (the C of C≡N is counted).' },
      { n: 6, f: 'Hydrolysis with aqueous silver nitrate: which halogenoalkane gives a precipitate first?', b: 'The iodoalkane (yellow AgI), then bromo (cream AgBr), then chloro (white AgCl), following C–X bond enthalpy.' },
    ]),
    ...sub('halogenoalkanes-7405', 'elimination-halogenoalkanes-7405', '3.3.3.2', [
      { n: 1, f: 'Substitution vs elimination with KOH: conditions that favour each', b: 'Substitution (alcohol): aqueous, warm; OH⁻ acts as a nucleophile.\nElimination (alkene): ethanol, hot; OH⁻ acts as a base.' },
    ]),
    ...sub('halogenoalkanes-7405', 'ozone-depletion-7405', '3.3.3.3', [
      { n: 1, f: 'How do chlorine radicals destroy ozone? Give the equations.', b: 'UV breaks C–Cl in CFCs, releasing Cl•.\nCl• + O₃ → ClO• + O₂\nClO• + O₃ → 2O₂ + Cl•\nCl• is regenerated, so it acts as a catalyst.' },
    ]),

    // 22 Alkenes (3.3.4)
    ...sub('alkenes-7405', 'structure-bonding-and-reactivity-7405', '3.3.4.1', [
      { n: 1, f: 'Why do alkenes react with electrophiles?', b: 'The C=C bond has two shared pairs between the same two carbons, so it is a centre of high electron density that attracts electron-deficient species.' },
    ]),
    ...sub('alkenes-7405', 'addition-reactions-of-alkenes-7405', '3.3.4.2', [
      { n: 1, f: 'Electrophile', b: 'An electron pair acceptor, e.g. H⁺, Hδ+ in HBr, or Brδ+ in Br₂.' },
      { n: 2, f: 'Test for a C=C bond', b: 'Shake with bromine water at room temperature: orange → colourless for an alkene. An alkane stays orange.' },
      { n: 3, f: 'Carbocation stability order, and why', b: 'Tertiary > secondary > primary. More alkyl groups release electron density and spread the positive charge.' },
      { n: 4, f: 'Major product of 2-methylpropene + HBr', b: '2-bromo-2-methylpropane, formed via the more stable tertiary carbocation (CH₃)₃C⁺.' },
      { n: 5, f: 'Product of ethene with cold concentrated sulfuric acid', b: 'Ethyl hydrogensulfate, CH₃CH₂OSO₂OH. The hydrogensulfate bonds to carbon through its negative O atom.' },
    ]),
    ...sub('alkenes-7405', 'addition-polymers-7405', '3.3.4.3', [
      { n: 1, f: 'Why are polyalkenes unreactive?', b: 'The chains are saturated, with strong, non-polar C–C and C–H bonds and no C=C for electrophiles to attack.' },
      { n: 2, f: 'How does a plasticiser make PVC flexible?', b: 'Its small molecules get between the polymer chains, push them apart and weaken the intermolecular forces, so the chains slide more easily.' },
    ]),

    // 23 Alcohols (3.3.5)
    ...sub('alcohols-7405', 'alcohol-production-7405', '3.3.5.1', [
      { n: 1, f: 'Hydration of ethene: equation and conditions', b: 'CH₂=CH₂ + H₂O → CH₃CH₂OH. Steam, about 300 °C, high pressure, acid catalyst such as phosphoric acid on a solid support.' },
      { n: 2, f: 'Fermentation of glucose: equation and conditions', b: 'C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. Yeast enzymes, around 35 °C, anaerobic, aqueous.' },
      { n: 3, f: 'Fermentation temperature', b: 'Too cold → slow; too hot → yeast enzymes denature. About 35 °C is a compromise.', src: ALC },
      { n: 4, f: 'Why must fermentation be done without air?', b: 'Oxygen would oxidise ethanol to ethanoic acid, and yeast would respire aerobically to CO₂ and water.' },
      { n: 5, f: 'Why is bioethanol only "carbon neutral" on paper?', b: '6 CO₂ are absorbed in photosynthesis and 6 released by fermentation (2) and combustion (4). But fossil fuels used for farm machinery, fertiliser, distillation and transport release more CO₂.' },
    ]),
    ...sub('alcohols-7405', 'oxidation-of-alcohols-7405', '3.3.5.2', [
      { n: 1, f: 'Primary, secondary and tertiary alcohols', b: 'The carbon bonded to –OH is bonded to one, two or three other carbons respectively (methanol counts as primary).' },
      { n: 2, f: 'Oxidising agent for alcohols and its colour change', b: 'Acidified potassium dichromate(VI), K₂Cr₂O₇ / H₂SO₄: orange → green (Cr₂O₇²⁻ → Cr³⁺).' },
      { n: 3, f: 'Primary alcohol: how do you get the aldehyde rather than the carboxylic acid?', b: 'Aldehyde: distil it off as it forms (it has no hydrogen bonding, so it boils lowest).\nCarboxylic acid: heat under reflux with excess dichromate.' },
      { n: 4, f: 'Products of oxidising a secondary and a tertiary alcohol', b: 'Secondary: a ketone.\nTertiary: no reaction (stays orange), because there is no H on the carbon bonded to –OH.' },
      { n: 5, f: 'Equation for the oxidation of propan-1-ol to propanal', b: 'CH₃CH₂CH₂OH + [O] → CH₃CH₂CHO + H₂O' },
      { n: 6, f: 'Tollens’ and Fehling’s results with an aldehyde', b: 'Tollens’: silver mirror.\nFehling’s: blue → red precipitate.\nA ketone gives no change with either. Warm in a water bath.' },
    ]),
    ...sub('alcohols-7405', 'elimination-alcohols-7405', '3.3.5.3', [
      { n: 1, f: 'Dehydration of an alcohol: reagent and conditions', b: 'Heat with concentrated sulfuric acid or concentrated phosphoric acid. An alkene and water form.' },
      { n: 2, f: 'Outline the three stages of the mechanism for alcohol elimination', b: 'A lone pair on O takes H⁺, forming R–OH₂⁺; the C–O bond breaks and H₂O leaves, giving a carbocation; electrons from an adjacent C–H bond form C=C and H⁺ is released.' },
      { n: 3, f: 'Which alkenes form when 2-methylbutan-2-ol is dehydrated?', b: '2-methylbut-1-ene and 2-methylbut-2-ene. Neither shows E–Z isomerism.' },
      { n: 4, f: 'Why is making ethene from ethanol useful?', b: 'Ethanol from fermentation → ethene → poly(ethene), so addition polymers can be made without crude oil.' },
      { n: 5, f: 'Required practical 5: purifying cyclohexene from the crude distillate', b: 'Shake with sodium carbonate solution in a separating funnel (release CO₂), discard the aqueous layer, wash with water, dry with anhydrous CaCl₂ or MgSO₄, then redistil.' },
    ]),

    // 24 Organic analysis (3.3.6)
    ...sub('organic-analysis-7405', 'identification-of-functional-groups-by-test-tube-reactions-7405', '3.3.6.1', [
      { n: 1, f: 'Required practical 6: test for a carboxylic acid', b: 'Add Na₂CO₃ or NaHCO₃: effervescence; the CO₂ turns limewater cloudy.' },
      { n: 2, f: 'How does acidified dichromate distinguish alcohols?', b: 'Primary and secondary alcohols turn it from orange to green. A tertiary alcohol leaves it orange.' },
      { n: 3, f: 'In a test sequence, why test for an aldehyde before using dichromate?', b: 'Aldehydes are also oxidised by dichromate (orange → green), so an aldehyde would be mistaken for an alcohol.' },
    ]),
    ...sub('organic-analysis-7405', 'mass-spectrometry-7405', '3.3.6.2', [
      { n: 1, f: 'How does high-resolution mass spectrometry find a molecular formula?', b: 'Molecules with the same whole-number Mr have different precise masses. The m/z of the molecular ion to four decimal places matches only one formula.' },
    ]),
    ...sub('organic-analysis-7405', 'infrared-spectroscopy-7405', '3.3.6.3', [
      { n: 1, f: 'IR absorptions: alcohol O–H vs carboxylic acid O–H', b: 'Alcohol O–H: 3230–3550 cm⁻¹, broad.\nAcid O–H: 2500–3000 cm⁻¹, very broad.' },
      { n: 2, f: 'IR absorption range for C=O', b: '1680–1750 cm⁻¹, strong and sharp.' },
      { n: 3, f: 'Fingerprint region', b: 'The region below about 1500 cm⁻¹, with a pattern unique to each molecule. Comparing it with a known spectrum identifies the compound.' },
      { n: 4, f: 'Why do CO₂, methane and water vapour contribute to global warming?', b: 'Their bonds (C=O, C–H, O–H) absorb infrared radiation emitted by the Earth’s surface, and they re-emit energy, some back towards the surface.' },
    ]),

    // 25 Optical isomerism (3.3.7)
    ...topicOnly('optical-isomerism-7405', '25', [
      { n: 1, f: 'Chiral centre (asymmetric carbon)', b: 'A carbon atom bonded to four different atoms or groups.' },
      { n: 2, f: 'Enantiomers', b: 'Non-superimposable mirror images that differ in their effect on plane-polarised light.' },
      { n: 3, f: 'Racemic mixture (racemate)', b: 'A mixture of equal amounts of the two enantiomers. It is optically inactive.' },
      { n: 4, f: 'Why is a racemate optically inactive?', b: 'Each enantiomer rotates the plane of plane-polarised light by the same angle in opposite directions, and there are equal amounts of each, so the effects cancel.' },
      { n: 5, f: 'Why does a reaction at a planar group give a racemate?', b: 'The planar group (C=O or a carbocation) can be attacked from either side with equal probability, giving equal amounts of the two enantiomers.' },
      { n: 6, f: 'Which carbon in butan-2-ol is chiral, and what are its groups?', b: 'C2: it carries H, OH, CH₃ and C₂H₅.' },
      { n: 7, f: 'Optically active vs racemate', b: 'A single enantiomer is optically active; an equal mixture is not, even though every molecule in it is chiral.', src: OPT },
    ]),

    // 26 Aldehydes and ketones (3.3.8)
    ...topicOnly('aldehydes-and-ketones-7405', '26', [
      { n: 1, f: 'Reducing agent for aldehydes and ketones, and the products', b: 'NaBH₄ in aqueous solution. Aldehyde → primary alcohol; ketone → secondary alcohol. Nucleophilic addition.' },
      { n: 2, f: 'Equation for reducing propanal with NaBH₄', b: 'CH₃CH₂CHO + 2[H] → CH₃CH₂CH₂OH (propan-1-ol)' },
      { n: 3, f: 'Nucleophile in NaBH₄ reduction, and the mechanism outline', b: 'H⁻. It attacks the δ+ carbonyl carbon, the C=O π electrons move to O giving an alkoxide, then O⁻ is protonated by water (or H⁺).' },
      { n: 4, f: 'Product of ethanal with KCN followed by dilute acid', b: '2-hydroxypropanenitrile, CH₃CH(OH)CN, by nucleophilic addition of CN⁻. It forms as a racemic mixture.' },
      { n: 5, f: 'Hazards of KCN, and why KCN is used rather than HCN', b: 'KCN is highly toxic and acid releases toxic, volatile HCN: use a fume cupboard and gloves. HCN is hard to handle and, as a weak acid, gives few CN⁻ ions; KCN gives plenty.' },
      { n: 6, f: 'Which carbonyl compounds give a racemic mixture with KCN?', b: 'Aldehydes (except methanal) and unsymmetrical ketones. Methanal and symmetrical ketones such as propanone give no chiral centre.' },
      { n: 7, f: 'Why are ketones not oxidised by Tollens’ or Fehling’s?', b: 'The C=O carbon has no H, so oxidation would need a C–C bond to break.' },
      { n: 8, f: 'Mole ratios: aldehyde to silver (Tollens’) and aldehyde to Cu₂O (Fehling’s)', b: '1 mol aldehyde → 2 mol Ag.\n1 mol aldehyde → 1 mol Cu₂O.' },
    ]),

    // 27 Carboxylic acids and derivatives (3.3.9)
    ...sub('carboxylic-acids-and-derivatives-7405', 'carboxylic-acids-and-esters-7405', '3.3.9.1', [
      { n: 1, f: 'Name the ester CH₃CH₂CH₂COOCH₃', b: 'Methyl butanoate (from butanoic acid and methanol). The alcohol part is named first.' },
      { n: 2, f: 'Esterification: reagents and conditions', b: 'Carboxylic acid + alcohol, warm, with a concentrated H₂SO₄ catalyst. Reversible: CH₃COOH + CH₃OH ⇌ CH₃COOCH₃ + H₂O' },
      { n: 3, f: 'Acid vs alkaline hydrolysis of an ester', b: 'Acid (dilute acid, reflux): reversible, gives the carboxylic acid.\nAlkaline (NaOH(aq), reflux): goes to completion, gives the carboxylate salt.' },
      { n: 4, f: 'Soap and biodiesel from fats and oils', b: 'Soap: fat + 3NaOH → 3 sodium salts of long-chain acids + glycerol.\nBiodiesel: oil + 3CH₃OH (catalyst) → 3 methyl esters + glycerol.' },
      { n: 5, f: 'Four uses of esters', b: 'Solvents, plasticisers, perfumes and food flavourings.' },
      { n: 6, f: 'Fats and oils', b: 'Esters of glycerol with three long-chain carboxylic acids.', src: CARB },
    ]),
    ...sub('carboxylic-acids-and-derivatives-7405', 'acylation-7405', '3.3.9.2', [
      { n: 1, f: 'Products of ethanoyl chloride with water, ethanol, ammonia and methylamine', b: 'Water: ethanoic acid. Ethanol: ethyl ethanoate. Ammonia: ethanamide. Methylamine: N-methylethanamide. HCl is the by-product (as a salt with excess NH₃ or amine).' },
      { n: 2, f: 'Name the mechanism for acyl chlorides with nucleophiles', b: 'Nucleophilic addition–elimination.' },
      { n: 3, f: 'Why is ethanoic anhydride used rather than ethanoyl chloride to make aspirin?', b: 'Its by-product is ethanoic acid, not corrosive HCl gas; it reacts less vigorously so it is easier to control; it is hydrolysed less readily, and is cheaper.' },
      { n: 4, f: 'Required practical 10: how do you recrystallise an impure organic solid?', b: 'Dissolve in the minimum volume of hot solvent, hot-filter if needed, cool to crystallise, filter under reduced pressure, wash with a little cold solvent and dry.' },
    ]),

    // 28 Aromatic chemistry (3.3.10)
    ...sub('aromatic-chemistry-7405', 'bonding-aromatic-7405', '3.3.10.1', [
      { n: 1, f: 'Bonding in benzene', b: 'A planar ring of six carbons, bond angles 120°. Each C has one p electron; the p orbitals overlap to form a ring of six delocalised electrons above and below the plane. All C–C bonds are the same length, between single and double.' },
      { n: 2, f: 'How does hydrogenation data show benzene’s extra stability?', b: 'Predicted ΔH for cyclohexa-1,3,5-triene = 3 × ΔH(cyclohexene). Benzene’s measured value is less exothermic, so benzene is more stable, because of delocalisation.' },
      { n: 3, f: 'Why does benzene undergo substitution rather than addition?', b: 'Addition would break the delocalised ring and lose its extra stability. Substitution keeps the delocalised ring.' },
    ]),
    ...sub('aromatic-chemistry-7405', 'electrophilic-substitution-7405', '3.3.10.2', [
      { n: 1, f: 'Nitration of benzene: reagents and electrophile', b: 'Concentrated HNO₃ and concentrated H₂SO₄. Electrophile NO₂⁺: HNO₃ + 2H₂SO₄ → NO₂⁺ + H₃O⁺ + 2HSO₄⁻' },
      { n: 2, f: 'Friedel–Crafts acylation: reagents and electrophile', b: 'An acyl chloride with an AlCl₃ catalyst (dry). Electrophile RCO⁺: RCOCl + AlCl₃ → RCO⁺ + AlCl₄⁻. The product is a phenyl ketone.' },
      { n: 3, f: 'Why is nitration of benzene important?', b: 'It is a step in the manufacture of explosives, and reducing nitrobenzene gives aromatic amines used to make dyes.' },
      { n: 4, f: 'Product of benzene with propanoyl chloride and AlCl₃', b: '1-phenylpropan-1-one, C₆H₅COCH₂CH₃, plus HCl.' },
    ]),

    // 29 Amines (3.3.11)
    ...sub('amines-7405', 'preparation-7405', '3.3.11.1', [
      { n: 1, f: 'Primary / secondary / tertiary amine', b: 'One / two / three carbons bonded to N (RNH₂, R₂NH, R₃N).', src: AMINE },
      { n: 2, f: 'Two ways to make a primary aliphatic amine', b: 'Halogenoalkane + excess NH₃ in ethanol, heated in a sealed container (gives a mixture by further substitution).\nReduction of a nitrile, e.g. LiAlH₄ or H₂ with a Ni catalyst (primary amine only).' },
      { n: 3, f: 'How is phenylamine made from nitrobenzene?', b: 'Reduction, e.g. Sn and concentrated HCl under reflux, then NaOH. C₆H₅NO₂ + 6[H] → C₆H₅NH₂ + 2H₂O' },
    ]),
    ...sub('amines-7405', 'base-properties-7405', '3.3.11.2', [
      { n: 1, f: 'Base strength order: methylamine, ammonia, phenylamine', b: 'Methylamine > ammonia > phenylamine.' },
      { n: 2, f: 'Explain the base strength order of primary aliphatic amine > NH₃ > phenylamine', b: 'A base accepts H⁺ with the N lone pair. Alkyl groups release electron density, so N is more electron-rich. In phenylamine the lone pair is delocalised into the ring, so it is less available.' },
    ]),
    ...sub('amines-7405', 'nucleophilic-properties-7405', '3.3.11.3', [
      { n: 1, f: 'Quaternary ammonium ion', b: 'Four carbons bonded to N, R₄N⁺. Its salts are R₄N⁺X⁻.', src: AMINE },
      { n: 2, f: 'Cationic surfactant', b: 'A surfactant whose ionic head group is positive, e.g. a quaternary ammonium salt with one long hydrocarbon chain.', src: AMINE },
      { n: 3, f: 'Product of ethanoyl chloride with propylamine', b: 'N-propylethanamide, CH₃CONHCH₂CH₂CH₃ (plus propylammonium chloride with excess amine).' },
    ]),

    // 30 Polymers (3.3.12)
    ...sub('polymers-7405', 'condensation-polymers-7405', '3.3.12.1', [
      { n: 1, f: 'Condensation polymerisation', b: 'Monomers with two functional groups join, losing a small molecule (usually H₂O) at each link.' },
      { n: 2, f: 'Monomers of Terylene', b: 'Benzene-1,4-dicarboxylic acid and ethane-1,2-diol. It is a polyester.' },
      { n: 3, f: 'Monomers of nylon 6,6 and of Kevlar', b: 'Nylon 6,6: hexanedioic acid and hexane-1,6-diamine.\nKevlar: benzene-1,4-dicarboxylic acid and benzene-1,4-diamine.' },
      { n: 4, f: 'Forces between polymer chains: polyester vs polyamide', b: 'Polyester: van der Waals and permanent dipole–dipole (no H on N or O).\nPolyamide: van der Waals and hydrogen bonds between N–H on one chain and the C=O oxygen of another.' },
      { n: 5, f: 'Mr of the repeating unit of nylon 6,6 (monomer Mr values 146.0 and 116.0)', b: '146.0 + 116.0 − 2 × 18.0 = 226.0' },
    ]),
    ...sub('polymers-7405', 'biodegradability-and-disposal-of-polymers-7405', '3.3.12.2', [
      { n: 1, f: 'Why are polyesters and polyamides biodegradable but polyalkenes not?', b: 'The ester and amide links have a polar C=O with a δ+ carbon that nucleophiles (H₂O, OH⁻) attack, so they can be hydrolysed. Polyalkenes have only non-polar C–C and C–H bonds and are inert.' },
      { n: 2, f: 'One advantage and one disadvantage of incinerating waste polymers', b: 'Advantage: less volume, and the energy can generate electricity.\nDisadvantage: CO₂ is released, and PVC gives toxic HCl that must be removed.' },
      { n: 3, f: 'Products of acid hydrolysis of a polyamide', b: 'The dicarboxylic acid and the ammonium salt of the diamine (not the free amine).' },
    ]),

    // 31 Amino acids, proteins and DNA (3.3.13)
    ...sub('amino-acids-proteins-and-dna-7405', 'amino-acids-7405', '3.3.13.1', [
      { n: 1, f: 'Zwitterion', b: 'An ion with a positive and a negative charge and no overall charge, H₃N⁺–CHR–COO⁻.' },
      { n: 2, f: 'Form of an amino acid in acid and in alkaline solution', b: 'Acid: H₃N⁺–CHR–COOH (overall +1).\nAlkali: H₂N–CHR–COO⁻ (overall −1).' },
      { n: 3, f: 'How are colourless amino acids located on a TLC plate?', b: 'Spray with ninhydrin (purple spots) or use UV light on a fluorescent plate.' },
    ]),
    ...sub('amino-acids-proteins-and-dna-7405', 'proteins-7405', '3.3.13.2', [
      { n: 1, f: 'Primary, secondary and tertiary structure of a protein: what holds each?', b: 'Primary: the amino acid sequence, held by peptide links.\nSecondary: α-helix or β-pleated sheet, held by hydrogen bonds between peptide links.\nTertiary: the 3D fold, held by hydrogen bonds and S–S bonds between side chains.' },
      { n: 2, f: 'α-helix', b: 'A coil; hydrogen bonds between peptide links on different turns of the same chain.', src: AMINO },
    ]),
    ...sub('amino-acids-proteins-and-dna-7405', 'enzymes-7405', '3.3.13.3', [
      { n: 1, f: 'Why does an enzyme act on only one enantiomer of a substrate?', b: 'The active site is stereospecific: its binding groups are in fixed 3D positions, and only one enantiomer can line up with all of them.' },
    ]),
    ...sub('amino-acids-proteins-and-dna-7405', 'dna-7405', '3.3.13.4', [
      { n: 1, f: 'Base pairing in DNA and the number of hydrogen bonds', b: 'A pairs with T (2 hydrogen bonds); G pairs with C (3 hydrogen bonds).' },
    ]),
    ...sub('amino-acids-proteins-and-dna-7405', 'action-of-anticancer-drugs-7405', '3.3.13.5', [
      { n: 1, f: 'How does cisplatin act as an anticancer drug?', b: 'Its Cl⁻ ligands are replaced as Pt bonds to nitrogen atoms on guanine in DNA. Binding two guanines distorts the DNA, so it cannot replicate and the cell cannot divide.' },
    ]),

    // 32 Organic synthesis (3.3.14)
    ...topicOnly('organic-synthesis-7405', '32', [
      { n: 1, f: 'Percentage atom economy', b: '(Mr of the desired product ÷ sum of Mr of all reactants) × 100.' },
      { n: 2, f: 'Why do chemists aim for processes that need no solvent?', b: 'Solvents must be made, transported and separated from the product (often by energy-intensive distillation), become waste unless recycled, and are often flammable or toxic.' },
      { n: 3, f: 'Why do chemists aim for fewer steps?', b: 'Product is lost at every step, so the overall yield falls; each step also needs its own reagents, separation, energy and time.' },
      { n: 4, f: 'Overall yield of a three-step route with step yields 80%, 70% and 50%', b: '0.80 × 0.70 × 0.50 = 0.28, so 28%. Multiply the yields; never add or average them.' },
      { n: 5, f: 'Which reactions in the course make a new C–C bond?', b: 'KCN with a halogenoalkane; KCN with an aldehyde or ketone; Friedel–Crafts acylation (and addition polymerisation).' },
      { n: 6, f: 'Atom economy of an addition reaction', b: 'Exactly 100%: there is only one product. Substitution and elimination are always below 100%.' },
      { n: 7, f: 'Route: 1-bromopropane to butylamine', b: 'KCN in aqueous ethanol, reflux → butanenitrile; then reduce (e.g. LiAlH₄, or H₂ with Ni) → butylamine.' },
    ]),

    // 33 Nuclear magnetic resonance spectroscopy (3.3.15)
    ...topicOnly('nuclear-magnetic-resonance-spectroscopy-7405', '33', [
      { n: 1, f: 'Four reasons TMS is used as the standard', b: '12 equivalent H atoms give one strong single peak; its peak (δ = 0) is at lower δ than almost all other protons; it is inert; it is volatile, so it is easily removed.' },
      { n: 2, f: 'Why are ¹H NMR samples dissolved in CDCl₃ or CCl₄?', b: 'Deuterium gives no signal in a ¹H spectrum, and CCl₄ has no H atoms, so the solvent does not swamp the sample’s peaks.' },
      { n: 3, f: 'The n+1 rule', b: 'A ¹H signal is split into n + 1 lines by n H atoms on adjacent carbon atoms.' },
      { n: 4, f: 'Splitting pattern of an ethyl group, CH₃CH₂–', b: 'A quartet (CH₂, 2H) and a triplet (CH₃, 3H).' },
      { n: 5, f: 'What does integration of a ¹H spectrum give?', b: 'The relative number of H atoms in each environment, as a ratio. You need the molecular formula to get actual numbers.' },
      { n: 6, f: 'How many peaks in the ¹³C NMR spectrum of methyl ethanoate, CH₃COOCH₃?', b: 'Three: the C=O carbon, the O–CH₃ carbon and the CH₃ on the C=O.' },
      { n: 7, f: '¹³C vs ¹H', b: '¹³C counts carbon environments and shows no splitting. ¹H counts hydrogen environments and gives integration and splitting.', src: NMR },
      { n: 8, f: 'Aldehyde vs ketone', b: 'Both show C=O near 190–220 in ¹³C. Only an aldehyde has a ¹H peak at δ 9–10.', src: NMR },
    ]),

    // 34 Chromatography (3.3.16)
    ...topicOnly('chromatography-7405', '34', [
      { n: 1, f: 'What does separation in chromatography depend on?', b: 'The balance between solubility in the moving phase and retention by the stationary phase.' },
      { n: 2, f: 'Rf value', b: 'Distance moved by the spot ÷ distance moved by the solvent front, both measured from the baseline. No units; between 0 and 1.' },
      { n: 3, f: 'Retention time (GC)', b: 'The time from injection into the column until the component reaches the detector.' },
      { n: 4, f: 'Stationary and moving phases in TLC, column chromatography and GC', b: 'TLC: solid on a plate; liquid solvent moving up.\nColumn: solid packed in a column; solvent moving down.\nGC: solid, or liquid-coated solid, in a column; gas under pressure.' },
      { n: 5, f: 'Spot centre 3.15 cm and solvent front 7.00 cm from the baseline. Rf?', b: '3.15 ÷ 7.00 = 0.45' },
      { n: 6, f: 'TLC: why draw the baseline in pencil and keep the solvent below it?', b: 'Pencil graphite does not dissolve or separate, unlike ink. If the solvent were above the baseline, the samples would dissolve into the solvent pool.' },
      { n: 7, f: 'What does GC-MS do?', b: 'Gas chromatography separates the components; each then passes into a mass spectrometer, which identifies it from its molecular ion (and precise m/z).' },
      { n: 8, f: 'Why cover the TLC tank with a lid?', b: 'It saturates the air with solvent vapour, stopping solvent evaporating from the plate so the front rises evenly.' },
    ]),
  ],
};
