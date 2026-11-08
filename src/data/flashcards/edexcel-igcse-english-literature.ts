/**
 * D-444 -- flashcards for Pearson Edexcel International GCSE English Literature 4ET1
 * (first teaching 2016).
 *
 * Cards cover the assessment objectives, what each section and assignment
 * requires, the poetic, narrative and dramatic methods an answer analyses
 * (each with a one-line effect), and a few set-text facts for texts the
 * specification names (the anthology poems, the modern prose, modern drama
 * and literary heritage lists, as given on Marlbridge's 4ET1 pages). The only
 * quotations are short lines from out-of-copyright anthology poems.
 *
 * IDS. The specification does not number its sections, so their subtopic
 * number in syllabus-topics.ts is '' and the validator expects ids of the form
 * `-<n>`. To keep those ids unique, each section takes its own block of n:
 * Component 1 Section A 101+, B 201+, C 301+; Component 2 Section A 401+,
 * B 501+; Component 3 Assignment A 601+, B 701+. Ids are permanent: add a
 * card with the next unused n in its block, never renumber.
 *
 * Written from Marlbridge's 4ET1 study guides and revision notes; no
 * revision-notes page maps to a single section, so every card is authored.
 * Not tiered. Plain text only (see types.ts).
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string }

const sub = (topic: string, subtopic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b }) => ({
    id: `${number}-${n}`,
    topic,
    subtopic,
    front: f,
    back: b,
    origin: 'authored' as const,
  }));

const C1 = 'component-1-poetry-and-modern-prose-4et1';
const C2 = 'component-2-modern-drama-and-literary-heritage-texts-4et1';
const C3 = 'component-3-modern-drama-and-literary-heritage-texts-nea-4et1';

export const DECK_EDEXCEL_IGCSE_ENGLISH_LITERATURE: FlashcardDeck = {
  boardSlug: 'edexcel',
  qualificationSlug: 'igcse',
  subjectSlug: 'english-literature',
  syllabusCode: '4ET1',
  syllabusSeries: 'For first teaching 2016',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Component 1 -- Section A Unseen Poetry
    ...sub(C1, 'section-a-unseen-poetry-4et1', '', [
      { n: 101, f: 'How is 4ET1 Component 1 set out?', b: '2 hours, 90 marks, 60% of the qualification: Section A unseen poem (20 marks), Section B comparing two anthology poems (30 marks), Section C modern prose (40 marks).' },
      { n: 102, f: 'What are the four assessment objectives in 4ET1?', b: 'AO1 an informed, textually supported personal response; AO2 analysis of language, form and structure and their effects; AO3 comparison of texts; AO4 understanding of the relationship between texts and their contexts.' },
      { n: 103, f: 'What does 4ET1 Component 1 Section A require?', b: 'Analysis of an unseen poem printed on the paper, marked on AO2 only: how language, form and structure create meaning and effect. The paper recommends 35 minutes.' },
      { n: 104, f: 'What three areas should a Section A unseen-poem answer cover?', b: 'Language (imagery, word choice, sound), form (rhyme, metre, stanza shape) and structure (how the poem develops or shifts), each point rooted in a short quotation with its effect.' },
      { n: 105, f: 'What is assonance, and what can it do?', b: 'Repetition of vowel sounds in nearby words. It links words in the ear and can slow the pace or create a mournful, musical or harmonious tone.' },
    ]),
    // 1 Component 1 -- Section B Anthology Poetry
    ...sub(C1, 'section-b-anthology-poetry-4et1', '', [
      { n: 201, f: 'What does 4ET1 Component 1 Section B require?', b: 'A 30-mark comparison of two anthology poems (AO2 and AO3), from a choice of two questions. The paper recommends 40 minutes.' },
      { n: 202, f: 'How should a two-poem comparison be organised?', b: 'By point of comparison, not poem by poem: "both poets use natural imagery, but Poem A does X while Poem B does Y". Without direct comparison the AO3 marks are lost.' },
      { n: 203, f: 'What is a dramatic monologue? Give a 4ET1 anthology example.', b: 'A poem spoken by a single character to a silent listener, revealing more about the speaker than they intend. Robert Browning\'s My Last Duchess is an example.' },
      { n: 204, f: 'How does "Let me not to the marriage of true minds / Admit impediments" open Sonnet 116?', b: 'Shakespeare\'s speaker defines true love by what it is not, echoing the marriage service. The sonnet goes on to present love as constant and unaltered by time.' },
      { n: 205, f: 'What is the effect of the question form in Blake\'s The Tyger?', b: 'The poem is built from unanswered questions about who could create the tiger ("Tyger Tyger, burning bright"), conveying awe and unease about a creator of both beauty and terror.' },
      { n: 206, f: 'What form is Dylan Thomas\'s Do not go gentle into that good night?', b: 'A villanelle: nineteen lines with two refrains that repeat throughout. The insistent repetition mirrors the speaker\'s urgent plea to his dying father.' },
    ]),
    // 1 Component 1 -- Section C Modern Prose
    ...sub(C1, 'section-c-modern-prose-4et1', '', [
      { n: 301, f: 'What does 4ET1 Component 1 Section C require?', b: 'A 40-mark essay on the studied modern prose text from a choice of two questions, marked on AO1 and AO4 (context). It is closed book; the paper recommends 45 minutes.' },
      { n: 302, f: 'Which modern prose texts are set for 4ET1?', b: 'To Kill a Mockingbird, Of Mice and Men, The Whale Rider, The Joy Luck Club, Things Fall Apart, Klara and the Sun, and Western Lane.' },
      { n: 303, f: 'How do you track a character or theme in a Section C answer?', b: 'At least three distinct points (the beginning, a turning point, and the ending or a late development), with specific evidence at each and context explaining why it develops as it does.' },
      { n: 304, f: 'How should context be used in Section C?', b: 'Woven into the argument (social, historical, cultural) to explain choices in the text, not bolted on as a separate final paragraph.' },
      { n: 305, f: 'How can a setting be used to show a character\'s state of mind?', b: 'Track the same setting, or a contrasting pair, at two points in the novel and use each to make an explicit claim about how the character has developed.' },
    ]),

    // 2 Component 2 -- Section A Modern Drama
    ...sub(C2, 'section-a-modern-drama-4et1', '', [
      { n: 401, f: 'How is 4ET1 Component 2 set out?', b: '1 hour 30 minutes, 60 marks, 40% of the qualification: two 30-mark essays, Section A Modern Drama and Section B Literary Heritage Texts. Unmarked copies of the set texts are allowed.' },
      { n: 402, f: 'Which modern drama texts are set for 4ET1?', b: 'A View from the Bridge, An Inspector Calls, The Curious Incident of the Dog in the Night-time (adapted by Simon Stephens), Kindertransport, and Death and the King\'s Horseman.' },
      { n: 403, f: 'Which assessment objectives does the Modern Drama essay test?', b: 'AO1 (a personal response supported by evidence) and AO2 (how the playwright\'s language, stage directions, structure and form create meaning for an audience).' },
      { n: 404, f: 'Why are stage directions worth analysing?', b: 'They are the playwright\'s deliberate choices about what an audience sees and hears, so they are markable evidence, not scenery.' },
      { n: 405, f: 'What should you revise for an open-book drama paper?', b: 'Fast navigation: where key scenes and speeches sit in the text, so you can find and analyse them quickly. Word-perfect memorising matters less.' },
    ]),
    // 2 Component 2 -- Section B Literary Heritage Texts
    ...sub(C2, 'section-b-literary-heritage-texts-4et1', '', [
      { n: 501, f: 'Which literary heritage texts are set for 4ET1?', b: 'Romeo and Juliet, Macbeth, The Merchant of Venice, Pride and Prejudice, Great Expectations and The Scarlet Letter.' },
      { n: 502, f: 'Which assessment objectives does the Literary Heritage essay test?', b: 'AO1, AO2 and AO4. AO4 (context) is available only in this section of Component 2, so it must not be forgotten.' },
      { n: 503, f: 'How do you earn AO4 in every paragraph?', b: 'Connect a specific textual choice to a named historical, social or cultural condition of the time it was written, rather than writing vaguely about "the context of the time".' },
      { n: 504, f: 'What is the commonest timing failure on Component 2?', b: 'Letting the Section A drama essay overrun, which leaves Section B\'s context analysis rushed. Allow about 45 minutes per essay.' },
      { n: 505, f: 'How does Macbeth\'s "Is this a dagger which I see before me" show his state of mind?', b: 'The vision of a dagger before the murder of Duncan dramatises his disturbed imagination and the pull of the deed, blurring what is real and what is guilty fantasy.' },
    ]),

    // 3 Component 3 (non-examined) -- Assignment A
    ...sub(C3, 'assignment-a-modern-drama-4et1', '', [
      { n: 601, f: 'What is 4ET1 Component 3?', b: 'The coursework alternative to Component 2: 40% of the qualification, 60 marks, one essay on a modern drama text (Assignment A, 30) and one on a literary heritage text (Assignment B, 30), centre-assessed and moderated by Pearson.' },
      { n: 602, f: 'Which assessment objectives does Assignment A (Modern Drama) test?', b: 'AO1 (15 marks: reading, understanding and interpreting) and AO2 (15 marks: analysing language, form and structure and their effects).' },
      { n: 603, f: 'What makes a good coursework essay task?', b: 'A question that invites an argument about the writer\'s methods and is narrow enough to explore in depth, rather than a broad topic.' },
    ]),
    // 3 Component 3 (non-examined) -- Assignment B
    ...sub(C3, 'assignment-b-literary-heritage-texts-4et1', '', [
      { n: 701, f: 'Which assessment objectives does Assignment B (Literary Heritage) test?', b: 'AO1 (10 marks), AO2 (10 marks) and AO4 context (10 marks). Unlike Assignment A, context is assessed.' },
      { n: 702, f: 'How should a literary heritage essay handle context?', b: 'Treat the text as a product of, and response to, its era: link a theme or choice to a real social or historical condition of the time, within the analysis.' },
      { n: 703, f: 'Why must coursework be your own work?', b: 'It is internally assessed and moderated, so plagiarism or uncredited help can lead to serious penalties. Acknowledge any critic\'s idea and keep your drafts.' },
    ]),
  ],
};
