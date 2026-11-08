/**
 * D-444 -- flashcards for Cambridge International AS & A Level English Language 9093 (2024-2026).
 *
 * English Language is a skills course organised by papers, so the cards cover
 * what each paper and question requires, the analytical frameworks, text types
 * and their conventions, terminology with a one-line effect, and (Papers 3 and
 * 4) the named processes, stages and theories. Card ids are `<subtopic
 * number>-<n>` (or `<topic number>-<n>` for Paper 2, which itemises no
 * subtopics) and are permanent: add a new card with the next unused n, never
 * renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 9093); origin 'revision-notes'.
 *
 * Written from Marlbridge's 9093 study guides and revision notes. Not tiered.
 * Plain text only (see types.ts).
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

const topicOnly = (topic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, src }) => ({
    id: `${number}-${n}`,
    topic,
    front: f,
    back: b,
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const P1 = 'paper-1-reading-9093';
const P3 = 'paper-3-language-analysis-9093';
const P4 = 'paper-4-language-topics-9093';
const W = 'a-level-english-language-paper-2-writing-revision-notes';

export const DECK_CAMBRIDGE_A_LEVEL_ENGLISH_LANGUAGE: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'a-level',
  subjectSlug: 'english-language',
  syllabusCode: '9093',
  syllabusSeries: '2024-2026',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Paper 1 Reading
    ...sub(P1, 'knowledge-and-understanding-9093', '1.1', [
      { n: 1, f: 'How is 9093 Paper 1 Reading set out?', b: '2 hours 15 minutes, 50 marks: 50% of the AS and 25% of the A Level. Two compulsory questions of 25 marks, each on an unseen text of roughly 550–750 words. No dictionaries.' },
      { n: 2, f: 'What are the seven language frameworks for analysing a text?', b: 'Phonology, lexis, semantics, grammar, pragmatics, discourse and graphology. Working through them keeps an analysis systematic rather than impressionistic.' },
      { n: 3, f: 'What are the three components of register?', b: 'Field (the subject matter), tenor (the relationship between writer and reader) and mode (spoken, written, or somewhere between).' },
      { n: 4, f: 'Why does a register mismatch in a text matter?', b: 'It is usually deliberate. Informality in a serious context creates intimacy or humour; formality in a casual context creates distance, authority or irony. The mismatch is the finding, not an oversight.' },
      { n: 5, f: 'Which features of spoken language should you recognise in a transcript?', b: 'Fillers (er, um), false starts, repetition, overlaps and interruptions, adjacency pairs, turn-taking, discourse markers (so, right, anyway) and deixis (this, here, now).' },
      { n: 6, f: 'Are fillers and false starts in a transcript errors?', b: 'No. They are normal features of speech. Comment on what they achieve: planning time, holding the floor, signalling a topic shift or managing the relationship between speakers.' },
    ]),
    ...sub(P1, 'skills-and-techniques-9093', '1.2', [
      { n: 1, f: 'What does Paper 1 Question 1(a) require?', b: 'Directed writing of 150–200 words that reshapes material from the unseen text for a new audience, purpose or form. 10 marks (AO1, AO2).' },
      { n: 2, f: 'What does Paper 1 Question 1(b) require?', b: 'A comparison of your own 1(a) response with the original text by form, structure and language, relating each feature to purpose, audience and context. 15 marks (AO1, AO3), more than the writing itself.' },
      { n: 3, f: 'What does Paper 1 Question 2 require?', b: 'Analysis of a second unseen text: comment on its form, structure and language, relating features to meaning, context and audience, in an organised answer. 25 marks (AO1, AO3).' },
      { n: 4, f: 'How do you transform a text in directed writing without losing marks?', b: 'Fix form, audience and purpose first; change the register for the new audience; select only relevant material; rephrase rather than lift; and follow the conventions of the target form.' },
      { n: 5, f: 'Why does naming a technique on its own score little?', b: 'The mark is for the effect of the feature in this specific text, tied to its audience and purpose, not for identifying it.' },
      { n: 6, f: 'What is the effect of high and low modality?', b: 'High modality (must, will) asserts certainty and authority. Low modality (might, could) hedges and softens, lowering the writer\'s commitment to the claim.' },
      { n: 7, f: 'What is the effect of the passive voice?', b: 'It can conceal or remove the agent ("Mistakes were made"), so responsibility is obscured, which is why it recurs in institutional and political language.' },
      { n: 8, f: 'What do the pronouns "we" and "you" do in persuasive texts?', b: '"We" builds solidarity or implies shared responsibility. "You" creates direct address and synthetic personalisation, making a mass audience feel individually spoken to.' },
    ]),

    // 2 Paper 2 Writing
    ...topicOnly('paper-2-writing-9093', '2', [
      { n: 1, f: 'How is 9093 Paper 2 Writing set out?', b: '2 hours, 50 marks: 50% of the AS and 25% of the A Level. Section A (compulsory, 25 marks) and Section B (one from three, 25 marks).', src: W },
      { n: 2, f: 'What does Paper 2 Section A part (a) require?', b: 'A shorter piece of at most 400 words, written to a specified form, audience and purpose (such as a leaflet, letter or speech). 15 marks.', src: W },
      { n: 3, f: 'What does Paper 2 Section A part (b) require?', b: 'A reflective commentary explaining how your linguistic choices in part (a) fulfil the brief. 10 marks; the syllabus sets no word limit.', src: W },
      { n: 4, f: 'How should each point in a reflective commentary be built?', b: 'Identify the choice, quote it from your own text, and explain its effect in relation to audience and purpose: the same pattern you use to analyse someone else\'s text.' },
      { n: 5, f: 'What does Paper 2 Section B require?', b: 'One extended piece of 600–900 words, chosen from three questions.', src: W },
      { n: 6, f: 'Which three categories does Paper 2 Section B always offer?', b: 'Imaginative/descriptive, discursive/argumentative, and review/critical. The categories are fixed; only the topic within each changes between series.' },
      { n: 7, f: 'What makes a strong imaginative or descriptive piece?', b: 'Precise sensory detail, a controlled narrative voice, and a small number of developed images rather than many undeveloped ones.' },
      { n: 8, f: 'What makes a strong discursive or argumentative piece?', b: 'It is genuinely balanced: it weighs more than one side before reaching a considered conclusion, rather than being one-sided in disguise.' },
      { n: 9, f: 'What makes a strong review or critical piece?', b: 'A consistent evaluative voice supported by specific, concrete detail, not vague praise or criticism.' },
      { n: 10, f: 'What is the most common mistake in the reflective commentary?', b: 'Writing it as a second essay about the topic instead of analysing the language choices made in your own piece.' },
    ]),

    // 3 Paper 3 Language Analysis
    ...sub(P3, 'section-a-language-change-9093', '3.1', [
      { n: 1, f: 'What period of English does 9093 Paper 3 Section A cover?', b: 'The development of English from Early Modern English to Contemporary English. Paper 3 is 2 hours 15 minutes, 50 marks, 25% of the A Level, with two compulsory 25-mark sections.' },
      { n: 2, f: 'What is borrowing, with an example?', b: 'Taking a word from another language (a loanword), for example bungalow from Hindi or algebra from Arabic.' },
      { n: 3, f: 'Compounding, blending and affixation: what is the difference?', b: 'Compounding joins two whole words (laptop). Blending fuses parts of words (brunch, podcast). Affixation adds a prefix or suffix (unfriend, googleable).' },
      { n: 4, f: 'What is conversion (functional shift)?', b: 'A word moving into a new word class without changing form, for example the noun text becoming the verb to text.' },
      { n: 5, f: 'What are broadening, narrowing, amelioration and pejoration?', b: 'Kinds of semantic change: a meaning becomes more general (broadening), more specific (narrowing), more positive (amelioration, as with nice) or more negative (pejoration, as with silly, once meaning blessed).' },
      { n: 6, f: 'Prescriptivism or descriptivism: what is the difference?', b: 'Prescriptivism sets a correct form and treats deviation as error. Descriptivism records and analyses how language is actually used and treats change as natural.' },
      { n: 7, f: 'How do you use an n-gram graph or word-frequency table in Section A?', b: 'Identify the overall trend (rising, falling, a sudden spike), then link it to a plausible cause such as a technological or social change. The skill is interpreting the data given, not reciting dates.' },
    ]),
    ...sub(P3, 'section-b-child-language-acquisition-9093', '3.2', [
      { n: 1, f: 'What are the stages of child language acquisition, with approximate ages?', b: 'Pre-verbal/cooing (0–6 months), babbling (6–12 months), holophrastic (12–18 months), two-word (18–24 months), telegraphic (24–36 months), post-telegraphic (36 months+).' },
      { n: 2, f: 'What age range does 9093 Section B cover?', b: 'Language acquisition from birth to around eight years, so post-telegraphic development (complex sentences, narrative and conversational skills) is in scope.' },
      { n: 3, f: 'What is the behaviourist theory of acquisition, and its main criticism?', b: 'Skinner: children learn by imitation and reinforcement. Criticism: it cannot explain novel utterances a child has never heard.' },
      { n: 4, f: 'What is the nativist theory of acquisition, and its main criticism?', b: 'Chomsky: children have an innate Language Acquisition Device; the input alone is too poor to explain what they learn (poverty of the stimulus). Criticism: no physical basis for the LAD has been identified.' },
      { n: 5, f: 'What is the social interactionist theory, and its main criticism?', b: 'Bruner: carers support learning through interaction, a Language Acquisition Support System. Criticism: not all cultures use child-directed speech, yet children still acquire language.' },
      { n: 6, f: 'What is the cognitive theory of acquisition, and its main criticism?', b: 'Piaget: language reflects prior cognitive development. Criticism: it cannot explain children who develop language despite cognitive impairment.' },
      { n: 7, f: 'What does over-generalisation ("goed", "sheeps") show?', b: 'The child is applying a regular rule to an irregular form: evidence of rule-based, creative learning, not imitation. Such errors cannot have been copied from adults.' },
    ]),

    // 4 Paper 4 Language Topics
    ...sub(P4, 'section-a-english-in-the-world-9093', '4.1', [
      { n: 1, f: 'How is 9093 Paper 4 Language Topics set out?', b: '2 hours 15 minutes, 50 marks, 25% of the A Level. Two compulsory, equally weighted sections, each built around unseen stimulus material.' },
      { n: 2, f: 'What does a Paper 4 question require?', b: 'Discussion of the issues the unseen stimulus raises, grounded in that specific text first and then widened with named concepts and examples from your own study. A prepared essay that ignores the stimulus scores poorly.' },
      { n: 3, f: 'What is a hybrid variety of English? Give examples.', b: 'A blend of English with a local language, such as Hinglish, Singlish or Spanglish.' },
      { n: 4, f: 'What is "zero translation"?', b: 'Using an English word or acronym untranslated in another language\'s text or media, for example WiFi or CEO in Chinese publications.' },
      { n: 5, f: 'What ethical debate surrounds English as a global language?', b: 'Cultural imperialism (threat to local languages and identities) against opportunity and access (education, trade, mobility). Strong answers engage genuinely with both sides.' },
    ]),
    ...sub(P4, 'section-b-language-and-the-self-9093', '4.2', [
      { n: 1, f: 'What are the three strands of Paper 4 Section B, Language and the Self?', b: 'Innateness and learning; language and thought; language and social identity. A stimulus can draw on any of them.' },
      { n: 2, f: 'What is the Sapir-Whorf hypothesis?', b: 'Linguistic relativity: the language you speak shapes how you think. Its strong form (linguistic determinism) says language determines thought.' },
      { n: 3, f: 'What is universalism in the language and thought debate?', b: 'The view that thought is independent of, and comes before, language, so differences in perception may reflect environment or experience rather than vocabulary.' },
      { n: 4, f: 'Idiolect or sociolect: what is the difference?', b: 'An idiolect is one individual\'s distinctive speech. A sociolect is shared by a social group such as a class, occupation or age group (a dialect is defined by region).' },
      { n: 5, f: 'What are the main approaches to language and gender?', b: 'Deficit, dominance, difference and diversity approaches, plus standpoint and muted-group theory.' },
      { n: 6, f: 'How can slang, jargon and accent include or exclude people?', b: 'They act as identity markers: using a group\'s terms signals membership, while getting the register wrong can mark someone as an outsider.' },
    ]),
  ],
};
