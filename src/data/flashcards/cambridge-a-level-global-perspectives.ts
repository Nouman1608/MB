/**
 * D-444 -- flashcards for Cambridge International AS & A Level Global
 * Perspectives & Research 9239 (2026-2028).
 *
 * The syllabus record lists the four components as its topics, with no
 * subtopics, so every card sits on its component (topicOnly helper) and ids
 * are `<topic number>-<n>`. Ids are permanent (browser progress is keyed by
 * them): add a new card with the next unused n, never renumber.
 *
 * 9239 is a skills course built on the Critical Path, so the cards cover the
 * skills, terms and assessment rules of each component (deconstruction,
 * reconstruction, reflection, communication and collaboration; perspectives;
 * evidence and source evaluation; reasoning flaws), not topic facts.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 9239); origin 'revision-notes'.
 *
 * Written from Marlbridge's own 9239 revision notes and study guides.
 * Not tiered. Plain text only (see types.ts).
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; src?: string }

const topicOnly = (topic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, src }) => ({
    id: `${number}-${n}`,
    topic,
    front: f,
    back: b,
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const WE = 'a-level-cambridge-global-perspectives-written-exam-revision-notes';
const ESS = 'a-level-global-perspectives-essay-revision-notes';
const TP = 'a-level-cambridge-global-perspectives-team-project-revision-notes';
const CRR = 'a-level-global-perspectives-9239-component-4-cambridge-research-report-revision-notes';

export const DECK_CAMBRIDGE_A_LEVEL_GLOBAL_PERSPECTIVES: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'a-level',
  subjectSlug: 'global-perspectives',
  syllabusCode: '9239',
  syllabusSeries: '2026-2028',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Component 1 - Written Exam
    ...topicOnly('component-1-written-exam-9239', '1', [
      { n: 1, f: 'What are the four stages of the Critical Path in 9239?', b: 'Deconstruction: analyse and evaluate a point of view.\nReconstruction: research and evaluate evidence and sources for competing views.\nReflection: explore the impact of research on personal perspectives.\nCommunication and collaboration: communicate views and work with others.', src: WE },
      { n: 2, f: 'Which Critical Path stages does Component 1 assess?', b: 'Deconstruction, reconstruction and communication. Reflection and collaboration are excluded: the exam is individually assessed and its AO2 (Reflection) weighting is 0%.' },
      { n: 3, f: 'Which parts of an argument do you identify when deconstructing it?', b: 'The conclusion, the reasons (premises), assumptions (stated and unstated), assertions and counter-assertions, and evidence. A stated claim is treated as the conclusion, not as a separate element.' },
      { n: 4, f: 'What is a hasty generalisation?', b: 'A broad claim drawn from limited cases.', src: WE },
      { n: 5, f: 'What does the flaw "false cause" cover?', b: 'Treating a correlation as causation without justification. It covers confusing correlation with causation, overlooking a confounding variable and reverse causation. Naming any one earns credit as false cause; they are not separate flaws.', src: WE },
      { n: 6, f: 'What is a false dichotomy?', b: 'Presenting two options as the only ones when others exist.', src: WE },
      { n: 7, f: 'What is an ad hominem argument?', b: 'Attacking the arguer, not the argument.', src: WE },
      { n: 8, f: 'What is a straw man argument?', b: 'Misrepresenting a view so that it is easier to defeat.', src: WE },
      { n: 9, f: 'What is circular reasoning?', b: 'An argument in which the conclusion is already assumed within the premises.', src: WE },
      { n: 10, f: 'Why is naming a reasoning flaw only half the job?', b: 'Credit comes from showing how the flaw operates in this source and explaining why it undermines the inference from the reasons to the conclusion.' },
      { n: 11, f: 'On which five criteria should you judge evidence in 9239?', b: 'Provenance (who produced it, and why), methodology (sample, selection, replicability), currency, corroboration and sufficiency. "Cases rose from 2 to 4, a 100% increase" fails on sufficiency: the numbers are too small to mean much.' },
      { n: 12, f: 'Where do perspectives come from, and what scores higher than describing them?', b: 'From contexts: economic, political, cultural, generational, geographic. Explaining why a perspective is held, through its context, scores higher than describing what it says.' },
    ]),

    // 2 Component 2 - Essay
    ...topicOnly('component-2-essay-9239', '2', [
      { n: 1, f: 'What is the format of the 9239 Component 2 Essay?', b: 'Continuous prose of 1750–2000 words on a self-chosen global issue, worth 40 marks and externally marked. An accurate word count (excluding title, references and citations) must be stated; anything beyond 2000 words is not marked.' },
      { n: 2, f: 'How must the essay title be framed?', b: 'As a single question, not a statement or a topic area, creating genuine opportunities for globally contrasting perspectives. A question on an exclusively local or national issue is unlikely to be appropriate.' },
      { n: 3, f: 'What must the essay do with its sources, beyond citing them?', b: 'Assess and justify why those sources were chosen: for example an authoritative primary source, a scholarly analysis, or a source representing one of the perspectives. Being explicit about a source\'s standpoint shows how much weight it can carry.' },
      { n: 4, f: 'What does AO1 reward in the Essay?', b: 'Analysing the question, synthesising arguments into contrasting perspectives, selecting and justifying sources, and comparing and evaluating the perspectives.', src: ESS },
      { n: 5, f: 'What does AO2 reward in the Essay?', b: 'Reflecting on how alternative perspectives affect your own view, and suggesting further relevant research.', src: ESS },
      { n: 6, f: 'What does AO3 reward in the Essay?', b: 'A clear, structured essay with effective referencing. Quotations must be fully referenced and a list of sources is required; referencing accuracy is assessed.', src: ESS },
      { n: 7, f: 'What makes two perspectives "globally contrasting" rather than two versions of one view?', b: 'They come from genuinely different standpoints and disagree on which values and evidence matter most, not just on how strongly to hold the same position.' },
      { n: 8, f: 'How should the Essay end?', b: 'With a personal, supported conclusion on the question. An essay that ends by summarising the perspectives already given has not completed the task.' },
      { n: 9, f: 'How many perspectives can a 2000-word essay develop properly?', b: 'Two or three, each developed with real evidence. Four or five sketched briefly will not reach the depth the marks reward.' },
      { n: 10, f: 'What may and may not a teacher do for the Essay?', b: 'A teacher may lead whole-class background research and support planning, citation and word-count discipline. Each candidate devises their own question. The teacher must not give detailed advice on improving a draft to meet the mark scheme, or correct or edit drafts.' },
    ]),

    // 3 Component 3 - Team Project
    ...topicOnly('component-3-team-project-9239', '3', [
      { n: 1, f: 'What is the 9239 Component 3 Team Project?', b: 'Externally marked coursework worth 40 marks. Teams of 2–5 (3–4 works best) research a local problem with global relevance together, but every candidate is assessed individually.' },
      { n: 2, f: 'What does each candidate produce for the Team Project, and for how many marks?', b: 'An individual presentation (30 marks) and a reflective paper (10 marks, maximum 800 words).' },
      { n: 3, f: 'What are the rules for the Team Project presentation?', b: 'Maximum 10 minutes: work beyond that is not assessed. It is either a live recording to an audience of at least three including the teacher, or presentation software with a recorded voiceover. It should engage a non-specialist audience.' },
      { n: 4, f: 'Which assessment objectives mark the Team Project presentation?', b: 'AO1: individual analysis of the problem, range of research, evaluation of sources and justification of your own proposed solution. AO3: a well-argued, organised presentation, effective visuals and language suited to the audience.' },
      { n: 5, f: 'What is the Team Project reflective paper assessed on, and what should it cover?', b: 'Entirely AO2 (Reflection). It covers how effectively the team worked together and what could improve, and your own learning. It is not a second presentation of findings.' },
      { n: 6, f: 'What makes a good Team Project problem statement?', b: 'Broad enough for each member to research a distinct, contrasting perspective; specific enough to name a real place, group or situation. "Flooding risk to a named coastal town from rising sea levels" works; "climate change" is too abstract.' },
      { n: 7, f: 'What does each candidate submit for the Team Project?', b: 'The recording, supporting audio-visual materials, a verbatim transcript and the reflective paper, plus a statement of originality.' },
      { n: 8, f: 'Is a team presentation accepted in Component 3?', b: 'No. Research is collaborative, but only individual work is marked.' },
      { n: 9, f: 'What may and may not a teacher do during the Team Project?', b: 'Allowed: explaining the task, helping formulate a topic and ways to explore perspectives, and building organisation, referencing and oral skills. Not allowed: detailed subject guidance, researching for a candidate, correcting notes, preparing any part of the presentation or transcript, or suggesting amendments.' },
      { n: 10, f: 'Why should Team Project preparation put research ahead of polish?', b: 'The 30 presentation marks are split between AO1 and AO3, and AO1 covers four assessed elements against AO3\'s three. Research depth and source evaluation hold more of the marks, though weak delivery still loses AO3 marks.' },
    ]),

    // 4 Component 4 - Cambridge Research Report
    ...topicOnly('component-4-cambridge-research-report-9239', '4', [
      { n: 1, f: 'How is the Cambridge Research Report (Component 4) marked?', b: '85 marks: the research report 75 and the research log 10. It is externally marked, taken only on an A Level route, and is worth 50% of the A Level.' },
      { n: 2, f: 'What are the length rules for the Cambridge Research Report?', b: 'Up to 5000 words, with an accurate word count stated; work beyond 5000 words is not marked. The title and bibliographical references are not counted, and the log is outside the limit.' },
      { n: 3, f: 'What form must the Research Report title take?', b: 'A question that leads to a debate, and an open one rather than a loaded one. "Urban farming" is a topic; "Should cities give public land to urban farming?" is a question. "Why is X harmful?" is loaded: it assumes its answer.' },
      { n: 4, f: 'How does the 9239 syllabus define a perspective?', b: '"A coherent world view which is a response to an issue": made up of argument, evidence and assumptions, and possibly shaped by context.', src: CRR },
      { n: 5, f: 'What is the difference between primary and secondary evidence?', b: 'Primary: first-hand information such as documents, texts, artefacts, observations, interviews and surveys. Secondary: specialists\' arguments and opinions that reflect on or synthesise primary evidence.', src: CRR },
      { n: 6, f: 'What is the difference between research methods and methodology?', b: 'Methods are what you did: the ways you gather and analyse evidence. Methodology is why those methods suit your subject, and how they shape what you can conclude.', src: CRR },
      { n: 7, f: 'What is the research log for?', b: 'A separate record of information, plans, findings, decisions and reflection, worth 10 marks. It should record decisions and the reasons for them, not just dates and tasks, and must not be used to stretch the word limit.' },
      { n: 8, f: 'What does the research proposal outline, and is it marked?', b: 'The research question, the key concepts, an outline of the debate and example sources. It is approved by your teacher and submitted, but not externally marked.' },
      { n: 9, f: 'How are the assessment objectives weighted in Component 4?', b: 'AO1 65%, AO2 20%, AO3 15%.', src: CRR },
      { n: 10, f: 'Which Critical Path stages are mapped to Component 4?', b: 'Deconstruction, reconstruction, reflection and communication. Collaboration is not part of this component.', src: CRR },
      { n: 11, f: 'What is the difference between a summary and a judgement in the report?', b: 'A summary repeats both sides. A judgement weighs them and says which is stronger and why.', src: CRR },
      { n: 12, f: 'What two kinds of reflection does AO2 want in the Research Report?', b: 'How other perspectives changed your thinking, and the scope and limits of your own research.', src: CRR },
    ]),
  ],
};
