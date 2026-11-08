/**
 * D-444 -- flashcards for IB Diploma Programme Language A: Language and Literature
 * (first assessments for SL and HL 2021).
 *
 * The syllabus record lists the three areas of exploration as topics with no
 * subtopics, so there is one block per area, in syllabus order. Card ids are
 * `<topic number>-<n>` and are permanent (browser progress is keyed by them):
 * add a new card with the next unused n, never renumber.
 *
 * This is a skills course: the cards cover what each assessment component
 * requires, text types and their conventions, analytical terms and devices
 * with a one-line effect, and the key ideas of each area. Assessment cards sit
 * in the area whose pages cover that component (Paper 1 and non-literary text
 * types in area 1; context, power and the HL essay in area 2; Paper 2,
 * intertextuality and the individual oral in area 3).
 *
 *   The syllabus record is not tiered, so no card carries a tier. HL-only
 *   content is marked "(HL only)" in words.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 'DP Language A: Language and
 *               Literature'); origin 'revision-notes'.
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

const P = 'ib-dp-language-a-language-and-literature';
const NLT = 'ib-dp-language-a-language-literature-non-literary-text-types-and-conventions-revision-notes';
const FORMS = 'ib-dp-language-a-language-literature-analysing-literary-forms-revision-notes';
const HLE = 'ib-dp-language-a-language-literature-hl-essay-revision-notes';

export const DECK_IB_IB_DP_LANGUAGE_A_LANGUAGE_AND_LITERATURE: FlashcardDeck = {
  boardSlug: 'ib',
  qualificationSlug: 'ib-dp',
  subjectSlug: 'language-a-language-and-literature',
  syllabusCode: 'DP Language A: Language and Literature',
  syllabusSeries: 'First assessments for SL and HL 2021',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Readers, writers and texts
    ...topicOnly(`${P}-readers-writers-and-texts`, '1', [
      { n: 1, f: 'What is the core question of Readers, writers and texts?', b: 'How a writer\'s choices of language, form and structure shape meaning, and how a reader actively constructs an interpretation rather than passively receiving it. Analyse in two steps: name a specific choice, then explain its effect on the reader.' },
      { n: 2, f: 'What does Paper 1 involve in Language and Literature?', b: 'A guided analysis of unseen non-literary passages from different text types, each with a guiding question. SL: 1 hour 15 minutes. HL: 2 hours 15 minutes, analysing both passages. 35% at SL and HL.' },
      { n: 3, f: 'How do you plan a Paper 1 answer?', b: 'Underline the key words of the guiding question; read for gist (text type, audience, purpose, context); annotate features with effects; write a one-sentence thesis; plan three body paragraphs by idea, each Claim → Evidence → Effect → Link; check every paragraph answers the guiding question.' },
      { n: 4, f: 'What is a text type, and what is a convention?', b: 'A text type is a kind of text defined by purpose, audience and form (advert, speech, news report). A convention is a feature readers expect in that text type.', src: NLT },
      { n: 5, f: 'What is the inverted pyramid in a news report?', b: 'The most important facts come first and background comes last. A feature article, by contrast, often opens with a scene or anecdote.', src: NLT },
      { n: 6, f: 'Editorial versus opinion column', b: 'An editorial is unsigned and speaks as "we" for the newspaper. An opinion column is signed and gives one writer\'s personal view.' },
      { n: 7, f: 'What is anchorage in a multimodal text?', b: 'Words, usually a caption, that fix the meaning of an image, steering the viewer towards one reading of it.', src: NLT },
      { n: 8, f: 'Demand versus offer in an image', b: 'Demand: a direct gaze at the viewer creates contact, so the viewer feels addressed. Offer: the subject looks away, inviting us simply to watch.' },
      { n: 9, f: 'What effect do direct address and inclusive pronouns have?', b: 'Direct address ("you") makes the reader feel personally involved. Inclusive pronouns ("we", "our") build a shared group with the reader. Always test the effect against the text in front of you.' },
      { n: 10, f: 'Why is technique-spotting without effect weak?', b: 'Naming a device ("low angle", "metaphor") is only a label. Analysis explains what the choice does: "the low angle makes the engineer look in control". A shorter answer that links device to effect scores higher than a list of devices.' },
      { n: 11, f: 'Narrator versus author, and speaker versus poet', b: 'The narrator is the voice telling the story, not the author: write "the narrator claims", not "the author believes". The "I" of a poem is a constructed voice, the speaker, not automatically the poet.', src: FORMS },
    ]),

    // 2 Time and space
    ...topicOnly(`${P}-time-and-space`, '2', [
      { n: 1, f: 'What does Time and space ask you to analyse?', b: 'How the context of production and the context of reception shape meaning. The period, culture and place a text was written in are not the same as those it is read in now, and both matter.' },
      { n: 2, f: 'Context of production versus context of reception', b: 'Production: who made the text, when, where, for whom, why, and through which institution.\nReception: who is reading it now, where, and with what beliefs and stake.' },
      { n: 3, f: 'What analytical point does a shift in reception give you?', b: 'The change between how original readers and readers today understand a text is itself the point. For example, an editorial its first readers found authoritative may now read as paternalistic.' },
      { n: 4, f: 'What is representation?', b: 'How a text presents people, groups, places or events through its choices. Every text offers a version of the world, from a position, to an audience.' },
      { n: 5, f: 'What is an agentless passive and what can it do?', b: 'A passive verb with no "by..." phrase, so the actor is hidden ("Jobs were lost"). It can remove responsibility from whoever acted.' },
      { n: 6, f: 'What is nominalisation and what can it do?', b: 'Turning an action into a noun ("the cuts"). Like the agentless passive, it can hide who acted.' },
      { n: 7, f: 'Preferred reading versus oppositional reading', b: 'Preferred reading: the meaning the producer intends the audience to accept.\nOppositional reading: a reading that rejects that intended meaning.' },
      { n: 8, f: 'What is othering?', b: 'Presenting a group as different from, and less than, an assumed "normal" reader. A stereotype is a fixed, simplified image of a group repeated until it seems natural.' },
      { n: 9, f: 'What is the HL essay in Language and Literature?', b: 'Independent coursework of 1,200–1,500 words on one literary work or one non-literary text or body of work studied in class, built on a line of inquiry. 20% of the HL grade; SL students do not write it. (HL only)' },
      { n: 10, f: 'Topic versus line of inquiry in the HL essay', b: 'A topic names an area. A line of inquiry is the one focused, arguable question the essay answers; the thesis is your answer to it, stated in the introduction and proved in the body. (HL only)', src: HLE },
      { n: 11, f: 'How much may a teacher help with the HL essay?', b: 'Regular formative feedback, but no editing or correcting. Near the end, the teacher may give written advice on one complete draft; the next version submitted must be the final one. (HL only)' },
    ]),

    // 3 Intertextuality: connecting texts
    ...topicOnly(`${P}-intertextuality`, '3', [
      { n: 1, f: 'What does Intertextuality: connecting texts focus on?', b: 'A text\'s meaning depends partly on other texts: the ones it borrows from, the conventions of its type or form, and the texts you place it beside.' },
      { n: 2, f: 'Allusion versus quotation', b: 'Allusion: a brief, indirect reference the reader should recognise; the source is hinted at, not named or quoted.\nQuotation: the source\'s exact words, usually marked.' },
      { n: 3, f: 'Parody, pastiche and satire: what is the difference?', b: 'Parody imitates a particular style or form and exaggerates it to mock it. Pastiche imitates a style without mockery, as tribute or play. Satire uses humour, irony or exaggeration to criticise a target, and may or may not imitate anything.' },
      { n: 4, f: 'How do you analyse an intertextual reference?', b: 'Name the source (or the kind of source); say what is kept unchanged; say what is changed (context, speaker, a reversed detail); explain what the gap between the two does for meaning and for the reader.' },
      { n: 5, f: 'What does Paper 2 involve in Language and Literature?', b: 'A comparative essay on two studied literary works, answering one of four questions, written from memory in 1 hour 45 minutes. 35% at SL, 25% at HL. Non-literary texts are not used.' },
      { n: 6, f: 'Point-by-point versus block structure in a comparative essay', b: 'Point-by-point: every body paragraph discusses both works on one point, so comparison runs throughout.\nBlock: half the essay on each work, with comparison left to the end, which risks two separate mini-essays.' },
      { n: 7, f: 'What should a Paper 2 comparative thesis contain?', b: 'One arguable claim answering the question for both works and naming how they differ: both present the key term as X, but Writer A uses one method to one effect, whereas Writer B uses another, because of form or context.' },
      { n: 8, f: 'What is the individual oral?', b: 'A prepared oral response on how one literary work and one non-literary body of work, both studied in class, approach a common global issue, supported by an extract from each. 30% at SL, 20% at HL.' },
      { n: 9, f: 'How do you narrow a global issue for the oral?', b: 'Move from topic to issue to angle: a topic ("technology") is too wide; the angle is the specific claim you trace through both texts. Test it by finding at least three specific choices in each extract that bear on it.' },
      { n: 10, f: 'What do the individual oral criteria cover?', b: 'Knowledge and understanding of both texts and their context; analysis of how the global issue is presented in each; focus and organisation of the response; and language (register, clarity, terminology).' },
      { n: 11, f: 'What is the learner portfolio?', b: 'Your own collection of notes, reflections and responses built during the course. It is a good source of global issues and text pairings for the individual oral.' },
    ]),
  ],
};
