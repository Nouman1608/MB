/**
 * D-444 -- flashcards for IB MYP Sciences (from 2014).
 *
 * The syllabus record lists five topics and no subtopics, so there is one block
 * per topic, in syllabus order. Card ids are `<topic number>-<n>` and are
 * permanent (browser progress is keyed by them): add a new card with the next
 * unused n, never renumber.
 *
 * MYP Sciences is criterion-assessed (criteria A-D, each 0-8). The cards cover
 * the key and related concepts, the global contexts and statements of inquiry,
 * the four criteria and their command terms, and the eAssessment structure, as
 * the Marlbridge MYP Sciences pages describe them. Topics 2 and 5 also carry a
 * few science cards from the topic revision notes, which are mapped to those
 * two topics.
 *
 *   The syllabus record is not tiered, so no card carries a tier.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 'MYP Sciences'); origin
 *               'revision-notes'.
 *
 * Plain text only (see types.ts).
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; u?: true; src?: string }

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

const P = 'ib-myp-sciences';
const KC = 'ib-myp-sciences-key-concepts-revision-notes';
const CYC = 'ib-myp-sciences-cycles-revision-notes';
const ATOM = 'ib-myp-sciences-atomic-structure-and-bonding-revision-notes';
const MODELS = 'ib-myp-sciences-course-models-revision-notes';

export const DECK_IB_IB_MYP_SCIENCES: FlashcardDeck = {
  boardSlug: 'ib',
  qualificationSlug: 'ib-myp',
  subjectSlug: 'myp-sciences',
  syllabusCode: 'MYP Sciences',
  syllabusSeries: 'From 2014',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Key concepts
    ...topicOnly(`${P}-key-concepts`, '1', [
      { n: 1, f: 'What is a key concept in the MYP?', b: 'A broad concept that works within and across subjects; there are sixteen in the MYP. A concept is a lasting "big idea" whose importance reaches beyond one topic, place or time.', src: KC },
      { n: 2, f: 'Which three key concepts does MYP Sciences use?', b: 'Change, relationships and systems. The guide says development, time, place and space, and creativity can also matter in sciences.' },
      { n: 3, f: 'What does change mean as a sciences key concept?', b: 'The difference in a system\'s state when observed at different times. It can be qualitative (structure or behaviour changes, a caterpillar becoming a butterfly) or quantitative (a number or rate changes, a falling count rate).' },
      { n: 4, f: 'Reversible, irreversible and self-perpetuating change', b: 'Reversible: can go back (dissolved sugar recovered by evaporation).\nIrreversible: cannot (a cake bakes, an iron nail rusts).\nSelf-perpetuating: drives more of itself (a forest fire releases heat that ignites the next trees).' },
      { n: 5, f: 'What does relationships mean as a sciences key concept?', b: 'Connections among variables, found by observation or experiment and testable by experiment. Name the variables and the pattern, give a scientific reason, and say how you could test it. Correlation alone is not enough.' },
      { n: 6, f: 'What is a form-and-function relationship?', b: 'Linking a feature (form) to what it does (function). Example: a fish\'s gills have many thin filaments, giving a large surface for absorbing oxygen; powdered zinc reacts faster than a lump because of its larger surface area.' },
      { n: 7, f: 'What does systems mean as a sciences key concept?', b: 'Sets of components that function because they are interdependent or complementary, such as the digestive system or the Earth–Moon system. Systems can be open or closed, static or dynamic, simple or complex.' },
      { n: 8, f: 'Open versus closed system in the MYP Sciences guide', b: 'Open: necessary resources are renewed regularly (a river).\nClosed: resources are not removed or replaced (a candle in a sealed jar goes out). In later physics and chemistry, "closed" means no matter crosses but energy can; say which meaning you use.' },
      { n: 9, f: 'How does development apply as a key concept in science?', b: 'Scientific knowledge grows through change as evidence builds, for example models of the solar system moving from Earth-centred to Sun-centred.' },
    ]),

    // 2 Related concepts
    ...topicOnly(`${P}-related-concepts`, '2', [
      { n: 1, f: 'What is a related concept?', b: 'A narrower, discipline-based concept used to explore a key concept in more depth, for example energy, models or evidence.' },
      { n: 2, f: 'Which related concepts appear in all three sciences lists?', b: 'The guide lists twelve per science. Nine are shared: consequences, energy, evidence, form, function, interaction, models, movement and patterns.' },
      { n: 3, f: 'Which related concepts are specific to biology, chemistry and physics?', b: 'Biology adds balance, environment and transformation. Chemistry adds balance, conditions and transfer. Physics adds development, environment and transformation. Teachers may add others for local needs.' },
      { n: 4, f: 'Key concept versus related concept', b: 'Key concepts (change, relationships, systems) are broad and shared across subjects. Related concepts (energy, models, evidence) belong to the discipline.' },
      { n: 5, f: 'Why do scientists use models?', b: 'To represent relationships that are too large, too slow or too data-heavy to observe directly, such as how a disease spreads through a population or how a star changes over millions of years. Models often use closed systems to limit variables.' },
      { n: 6, f: 'Respiration versus combustion', b: 'Both release CO₂. Respiration happens in cells and is controlled by enzymes; combustion is burning.', src: CYC },
      { n: 7, f: 'Nitrogen fixation versus nitrification versus denitrification', b: 'Fixation: N₂ → ammonium. Nitrification: ammonium → nitrate. Denitrification: nitrate → N₂.', src: CYC },
      { n: 8, f: 'Weathering versus erosion', b: 'Weathering is the breakdown of rock in place. Erosion is its removal and transport.', src: CYC },
    ]),

    // 3 Global contexts
    ...topicOnly(`${P}-global-contexts`, '3', [
      { n: 1, f: 'What are the six MYP global contexts?', b: 'Identities and relationships; orientation in space and time; personal and cultural expression; scientific and technical innovation; globalization and sustainability; fairness and development.' },
      { n: 2, f: 'What is a global context for?', b: 'It is the real-world lens that shows why a unit matters. Every unit has one. Many science inquiries fall naturally under scientific and technical innovation, but over the course you should meet all six.' },
      { n: 3, f: 'What is a statement of inquiry?', b: 'One transferable sentence joining a key concept, related concept(s) and a global context, setting the purpose of the unit. It should not name the topic; test it by checking it would still be true for a different topic.' },
      { n: 4, f: 'Factual, conceptual and debatable inquiry questions', b: 'Factual: recall or measure ("Which hormone rises in the evening?").\nConceptual: a big idea that transfers ("How do internal clocks keep body systems in step?").\nDebatable: more than one defensible answer ("Should schools start later?").' },
      { n: 5, f: 'How do you choose between two global contexts for a science unit?', b: 'Ask which issue the unit investigates: how a device works and is improved → scientific and technical innovation; who can access it → fairness and development; shared resources across borders → globalization and sustainability; how ideas changed → orientation in space and time.' },
      { n: 6, f: 'Global context versus factor', b: 'The global context frames the whole unit ("fairness and development"). A factor is the lens inside a criterion D answer: moral, ethical, social, economic, political, cultural or environmental. "Environmental" is a factor, not a global context.' },
      { n: 7, f: 'Which global context fits a unit on how the model of the atom changed?', b: 'Orientation in space and time, through the exploration of discoveries and turning points.' },
      { n: 8, f: 'Global context versus topic', b: '"Electromagnetism" is a topic. "Fairness and development" is a global context that could frame it, by asking who gains from the science and who pays.' },
    ]),

    // 4 Assessment criteria
    ...topicOnly(`${P}-assessment-criteria`, '4', [
      { n: 1, f: 'What are the four MYP Sciences assessment criteria?', b: 'A: Knowing and understanding. B: Inquiring and designing. C: Processing and evaluating. D: Reflecting on the impacts of science. Each is marked 0–8, so the subject total is 0–32. There is no SL/HL split.' },
      { n: 2, f: 'What does top-band criterion A evidence look like?', b: 'Applying scientific knowledge (facts, concepts, laws, models, theories) to solve problems in unfamiliar contexts and make scientifically supported judgements — not just recalling a definition.' },
      { n: 3, f: 'What does criterion B (Inquiring and designing) require?', b: 'Formulating your own testable research question and hypothesis, identifying the independent, dependent and controlled variables, and designing and justifying a method that could answer the question.' },
      { n: 4, f: 'What makes a hypothesis testable?', b: 'It states a specific, measurable relationship between the independent and dependent variables, ideally with a scientific reason. Example: as salt concentration increases, potato mass decreases more, because water leaves the cells by osmosis.' },
      { n: 5, f: 'Why must controlled variables be named and justified?', b: 'An uncontrolled variable can affect the dependent variable independently and confound the results. Example: temperature affects the rate of osmosis, so it must be kept constant when testing salt concentration.' },
      { n: 6, f: 'What does criterion C (Processing and evaluating) require?', b: 'Collecting, processing and interpreting data accurately; drawing a conclusion justified by the data (trends, patterns, anomalies) and explained with science; evaluating a specific limitation of the method with a specific, realistic improvement.' },
      { n: 7, f: 'Why is "use more trials" a weak evaluation?', b: 'It is generic. A strong evaluation names the actual limitation (only one sample per concentration, so one anomaly could distort the pattern) and a targeted improvement (repeat each three times and use the mean), saying why it helps.' },
      { n: 8, f: 'What does criterion D (Reflecting on the impacts of science) require?', b: 'Explaining how science is applied to a real problem (strand i); discussing and evaluating its implications using a named factor (strand ii); using precise scientific language (strand iii); and documenting sources (strand iv).' },
      { n: 9, f: 'What is the year 5 command-term ladder for criterion D?', b: 'Strand i: outline (1–2), summarize (3–4), describe (5–6), explain (7–8).\nStrand ii: outline (1–2), describe (3–4), discuss (5–6), discuss and evaluate (7–8). 7–8 needs a two-sided discussion ending in a judgement.' },
      { n: 10, f: 'What do the command terms discuss and evaluate require?', b: 'Discuss: a considered, balanced review of a range of arguments or factors.\nEvaluate: weigh strengths and limitations (benefits and risks) and reach a justified judgement.' },
    ]),

    // 5 MYP eAssessment structure and on-screen examination topics
    ...topicOnly(`${P}-eassessment-structure`, '5', [
      { n: 1, f: 'What is the structure of the MYP Sciences eAssessment?', b: 'An on-screen examination in biology, chemistry, physics or integrated sciences, with three tasks: knowing and understanding (criterion A, 25 marks); investigation skills (criteria B and C, 50 marks); applying science (criterion D, 25 marks).' },
      { n: 2, f: 'Which eAssessment task carries the most marks?', b: 'Investigation skills (criteria B and C), worth 50 marks — half the total. Practise designing, processing and evaluating investigations, not just recalling content.' },
      { n: 3, f: 'Which topics can the sciences on-screen examination draw on?', b: 'Examples include atomic structure and bonding, cells, cycles, electromagnetism, evolution, interactions between organisms, forces, states and properties of matter, metabolism, organisms and waves. Which apply depends on the option you are entered for.' },
      { n: 4, f: 'Discrete, modular and integrated science courses', b: 'Discrete: biology, chemistry and physics taught as separate subjects. Modular: two or more sciences taught in rotation. Integrated: disciplines blended together. The same four criteria apply to all three.', src: MODELS },
      { n: 5, f: 'Isotopes', b: 'Atoms of the same element with the same number of protons but different numbers of neutrons.', src: ATOM },
      { n: 6, f: 'Mass number versus relative atomic mass', b: 'Mass number: protons + neutrons, a whole number for one isotope. Relative atomic mass (Aᵣ): the weighted mean mass of an element\'s atoms relative to 1/12 of a carbon-12 atom, often not a whole number.', src: ATOM },
      { n: 7, f: 'Ionic versus metallic conduction', b: 'Ionic compounds conduct by moving ions, only when molten or dissolved. Metals conduct by moving delocalised electrons, as a solid or liquid.', src: ATOM },
      { n: 8, f: 'Intrusive versus extrusive igneous rock', b: 'Intrusive: cools slowly underground, giving large crystals (granite). Extrusive: cools fast at the surface, giving small crystals (basalt).', src: CYC },
      { n: 9, f: 'How do MYP Sciences criteria B and C prepare you for the DP?', b: 'Formulating a research question, designing a fair method and processing and evaluating data map onto the internal assessment of the DP sciences.' },
    ]),
  ],
};
