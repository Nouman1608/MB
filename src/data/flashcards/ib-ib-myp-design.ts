/**
 * D-444 -- flashcards for IB MYP Design (from 2014).
 *
 * One block per topic (topics 1-3 list no subtopics), then one block per
 * assessment criterion (topic 4's subtopics A-D), in syllabus order. Card ids
 * are `<topic number>-<n>` for topics 1-3 and `<criterion letter>-<n>` for the
 * criteria, and are permanent (browser progress is keyed by them): add a new
 * card with the next unused n, never renumber. The letter prefixes cannot
 * clash with the numbered topic ids.
 *
 * MYP Design is criterion-assessed (criteria A-D, each 0-8). The cards cover the
 * key and related concepts, the global contexts and design situations, and the
 * four criteria with their command terms and the design cycle, as the Marlbridge
 * MYP Design pages describe them.
 *
 *   The syllabus record is not tiered, so no card carries a tier.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 'MYP Design'); origin
 *               'revision-notes'.
 *
 * Worked figures are invented for illustration, as on the revision notes.
 * Plain text only (see types.ts).
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

const P = 'ib-myp-design';
const AC = `${P}-assessment-criteria`;
const CRA = 'ib-myp-design-criterion-a-inquiring-and-analysing-revision-notes';

export const DECK_IB_IB_MYP_DESIGN: FlashcardDeck = {
  boardSlug: 'ib',
  qualificationSlug: 'ib-myp',
  subjectSlug: 'myp-design',
  syllabusCode: 'MYP Design',
  syllabusSeries: 'From 2014',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Key concepts
    ...topicOnly(`${P}-key-concepts`, '1', [
      { n: 1, f: 'Which key concepts frame MYP Design?', b: 'Communication, communities, development and systems. Key concepts are broad and shared across MYP subjects.' },
      { n: 2, f: 'What does communication mean as a design key concept?', b: 'The exchange of information between people, or between a product and its user — for example the warning light on a hair straightener.' },
      { n: 3, f: 'What does communities mean as a design key concept?', b: 'Groups sharing a place, need, interest or identity, whose needs a design serves — for example park seating designed for older visitors and parents.' },
      { n: 4, f: 'What does development mean as a design key concept?', b: 'Growth or change over time, of a product or of your own solution — for example prototype 1 becoming prototype 2 after user testing.' },
      { n: 5, f: 'What does systems mean as a design key concept?', b: 'Parts working together as input → process → output, with feedback — for example a thermostat controlling a heater.' },
      { n: 6, f: 'Concept versus topic in MYP Design', b: '"Lighting" is a topic. "Ergonomics" is a concept that applies across lighting, seating and software. Concepts transfer; topics do not.' },
    ]),

    // 2 Related concepts
    ...topicOnly(`${P}-related-concepts`, '2', [
      { n: 1, f: 'Name the related concepts the MYP Design brief gives as examples', b: 'Adaptation, ergonomics, sustainability and innovation. Related concepts belong to the discipline and drive specific design decisions.' },
      { n: 2, f: 'Adaptation versus development', b: 'Adaptation changes a design or borrowed idea for a different user, purpose or setting (wide-grip cutlery for limited hand strength).\nDevelopment improves a design over versions for the same purpose.' },
      { n: 3, f: 'What is ergonomics?', b: 'Fitting products and tasks to the people using them. Physical ergonomics: sizes. Physiological: body capability and comfort. Psychological: perception and feeling. Anthropometrics are the body measurements used.' },
      { n: 4, f: 'Which percentile do you design for: clearance, reach and adjustable?', b: 'Clearance (doorway, handle opening): 95th percentile, so the large user fits. Reach (shelf, switch): 5th percentile, so the small user can reach. Adjustable: 5th to 95th. Avoid the 50th for everything.' },
      { n: 5, f: 'Invention versus innovation', b: 'Invention creates something new. Innovation is a new idea or combination that is put into successful use (wheels added to suitcases). Incremental innovation improves step by step; radical innovation changes how a task is done.' },
      { n: 6, f: 'What is a product life cycle?', b: 'Every stage of a product\'s life: raw materials, manufacture, distribution, use and end of life. Cradle to grave assesses impact from extraction to disposal; cradle to cradle designs end-of-life materials to become new raw materials.' },
      { n: 7, f: 'What are the 6 Rs of sustainable design?', b: 'Rethink, refuse, reduce, reuse, repair, recycle.' },
      { n: 8, f: 'What are planned obsolescence and design for disassembly?', b: 'Planned obsolescence: designing a product to become unusable or outdated sooner than necessary.\nDesign for disassembly: joining parts so they separate easily for repair or recycling (a battery held by screws, not glue).' },
    ]),

    // 3 Global contexts
    ...topicOnly(`${P}-global-contexts`, '3', [
      { n: 1, f: 'What are the six MYP global contexts?', b: 'Identities and relationships; orientation in space and time; personal and cultural expression; scientific and technical innovation; globalization and sustainability; fairness and development.' },
      { n: 2, f: 'What does a global context do in a design project?', b: 'It is the real-world lens for the unit: it decides which problem you pick out of the design situation, who you research and what you test.' },
      { n: 3, f: 'Design situation versus problem statement', b: 'A design situation is the open starting scenario you are given. A problem statement is narrow and written by you: one specific, evidenced need for a named client or audience, naming no solution.' },
      { n: 4, f: 'How do you write a problem statement from a design situation?', b: '[Audience] need(s) a way to [need] because [evidence], within [constraints]. Check: one audience, one need, evidence included, no solution named, testable.' },
      { n: 5, f: 'Innovation (related concept) versus scientific and technical innovation (global context)', b: 'Innovation is a concept to understand within design. Scientific and technical innovation is the lens for a whole unit. The same applies to sustainability versus globalization and sustainability: say which role you mean.' },
      { n: 6, f: 'What is a context-linked success criterion?', b: 'A measurable target that only makes sense because of the chosen global context — for example, for fairness and development, the share of under-served users who can use the product unaided.' },
      { n: 7, f: 'Product, digital and combined design', b: 'Product design: a physical object made from materials. Digital design: on screen or in software (site, app, game, animation). Combined: physical and digital parts working together as one solution.' },
    ]),

    // 4 Assessment criteria
    ...sub(AC, `${AC}-a-inquiring-and-analysing`, 'A', [
      { n: 1, f: 'What are the four MYP Design criteria and how are they marked?', b: 'A: Inquiring and analysing. B: Developing ideas. C: Creating the solution. D: Evaluating. They are equally weighted; each has eight achievement levels in four bands (0–8 with level 0), giving a total of 0–32. There is no SL/HL split.' },
      { n: 2, f: 'How does the design cycle map onto the criteria?', b: 'Inquiring and analysing (A) → developing ideas (B) → creating the solution (C) → evaluating (D). The cycle is repeated for every project; skipping a stage loses marks on the criterion tied to it.' },
      { n: 3, f: 'What does criterion A require?', b: 'From a given design situation: explain and justify the need for a solution for a client or target audience; identify and prioritise research; analyse existing products; develop a design brief that summarises the analysis.' },
      { n: 4, f: 'Explain versus justify in criterion A', b: 'Explain says what the need is. Justify gives evidence that it is worth solving, with sample sizes ("9 of 12 coaches, 75%") and the consequence of leaving it unsolved.', src: CRA },
      { n: 5, f: 'Client versus target audience', b: 'The client is one person or organisation you design for and can consult. The target audience is the wider user group.', src: CRA },
      { n: 6, f: 'Primary versus secondary research', b: 'The difference is who collected it, not where you found it. Primary: collected first-hand for this project (your own questionnaire, interview, observation). Secondary: already collected or published by someone else.', src: CRA },
    ]),
    ...sub(AC, `${AC}-b-developing-ideas`, 'B', [
      { n: 1, f: 'What does criterion B require?', b: 'Develop a design specification; develop a range of feasible design ideas; present the chosen design and justify it against the specification; develop planning drawings or diagrams accurate enough to make the solution from.' },
      { n: 2, f: 'Design brief versus design specification', b: 'The brief states what is needed and why (end of criterion A). The specification is a list of measurable requirements that drives development (criterion B) and is tested against in criterion D.' },
      { n: 3, f: 'What makes a good specification point?', b: 'Requirement + measurable target + reason from research + test method. "Holds a bag" is weak; "holds a 5 kg bag without slipping for 8 hours" is measurable.' },
      { n: 4, f: 'What is a decision matrix?', b: 'A table scoring each design idea against the specification points, often weighted, used with user feedback to justify the choice of design.' },
      { n: 5, f: 'What is a feasible range of ideas?', b: 'Ideas that solve the problem in genuinely different ways, each makeable with the skills, tools, materials, time and budget available.' },
      { n: 6, f: 'What is a tolerance?', b: 'The allowed variation from a stated size: 150 ± 2 mm means anything from 148 mm to 152 mm is acceptable.' },
    ]),
    ...sub(AC, `${AC}-c-creating-the-solution`, 'C', [
      { n: 1, f: 'What does criterion C require?', b: 'Construct a logical plan (steps, time, resources); demonstrate technical skills; follow the plan to create a prototype sufficient for testing and evaluation; justify any changes made to the design or the plan.' },
      { n: 2, f: 'What makes a plan logical?', b: 'Steps in a workable order, one action each, with time, materials (size and quantity), tools, safety and a quality check — clear enough for someone else to follow.' },
      { n: 3, f: 'How do you check whether a time plan fits?', b: 'Available time = lessons × minutes; contingency = available − planned; contingency % = contingency ÷ available × 100.\nExample: 4 × 45 = 180 min; planned 150 → 30 min, 16.7%. Negative contingency means the plan does not fit.' },
      { n: 4, f: 'Production log versus Gantt chart', b: 'A production log is a dated record of what was actually done, how long it took and any problems. A Gantt chart plans steps against lessons or weeks, showing order, overlap and waiting time.' },
      { n: 5, f: 'What is a prototype sufficient for testing?', b: 'One complete enough that your criterion D tests can be run on it. A solution can be a model, prototype, product or system.' },
    ]),
    ...sub(AC, `${AC}-d-evaluating`, 'D', [
      { n: 1, f: 'What does criterion D require?', b: 'Design tests to evaluate the solution; carry them out and objectively evaluate its success against the specification; identify how it could be improved; explain its impact on the client or target audience.' },
      { n: 2, f: 'How do you write a test plan?', b: 'For every specification point choose a test type, write a repeatable method (equipment, steps, repeats), copy the success measure from the specification, state the data and units to record, and say who tests it and where (real users, real conditions).' },
      { n: 3, f: 'What is an objective evaluation?', b: 'A judgement that follows the evidence, including results that fall short of the specification, rather than claiming the solution is a success.' },
      { n: 4, f: 'What makes an improvement specific?', b: 'It is a specific change linked to a test result, with an explanation of how it would help — not a general wish to "make it better".' },
      { n: 5, f: 'User trial versus expert appraisal', b: 'User trial: real users do set tasks while you time and observe them (do not help them). Expert appraisal: an expert judges safety, construction or code quality; it does not replace user testing.' },
      { n: 6, f: 'How is MYP Design externally assessed?', b: 'By ePortfolio, not an on-screen exam: a complete design folder (brief, research, specification, development, solution, evaluation) starting from a design situation, marked by the teacher against year 5 criteria and moderated by the IB on a sample.' },
    ]),
  ],
};
