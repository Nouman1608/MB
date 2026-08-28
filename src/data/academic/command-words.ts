/**
 * Command-word glossary -- v2.0 AUTHORITY/PRACTICE/TOOLS/GROWTH MEGA
 * PROGRAMME WS12.
 *
 * "Command words" are the instruction verbs exam boards use in question
 * wording (Describe, Explain, Evaluate, and so on) -- each one signals a
 * specific kind of answer, and marks are lost when a student answers the
 * wrong kind of question for the command word used (e.g. writing a
 * one-line "State" answer to a "Discuss" question, or vice versa).
 *
 * Scope, stated honestly: this glossary is Cambridge's own official list,
 * fetched directly from their site (not reconstructed from memory or a
 * third party). Cambridge states it applies "in new and revised
 * syllabuses published from 2019 onwards" -- i.e. essentially every
 * current Cambridge syllabus, across IGCSE, O Level and AS & A Level.
 * Cambridge also notes that "any subject-specific command words will also
 * be listed in the syllabus" -- this generic glossary does not attempt to
 * capture subject-specific command words on top of it. Other boards
 * (Edexcel, AQA, OCR, OxfordAQA) publish their own command-word glossaries
 * too, but they have not yet been sourced and verified for Marlbridge --
 * this is disclosed on the tool's own page rather than silently presenting
 * a Cambridge-only list as if it covered every board.
 */

export interface CommandWord {
  readonly word: string;
  readonly definition: string;
}

export const CAMBRIDGE_COMMAND_WORDS: readonly CommandWord[] = [
  { word: 'Analyse', definition: 'examine in detail to show meaning, and identify elements and the relationship between them' },
  { word: 'Assess', definition: 'make an informed judgement' },
  { word: 'Calculate', definition: 'work out from given facts, figures or information' },
  { word: 'Comment', definition: 'give an informed opinion' },
  { word: 'Compare', definition: 'identify/comment on similarities and/or differences' },
  { word: 'Consider', definition: 'review and respond to given information' },
  { word: 'Contrast', definition: 'identify/comment on differences' },
  { word: 'Define', definition: 'give a precise meaning' },
  { word: 'Describe', definition: 'state the points of a topic / give characteristics and main features' },
  { word: 'Develop', definition: 'take forward to a more advanced stage or build upon given information' },
  { word: 'Discuss', definition: 'write about issue(s) or topic(s) in depth in a structured way' },
  { word: 'Evaluate', definition: 'judge or calculate the quality, importance, amount or value of something' },
  { word: 'Explain', definition: 'set out purposes or reasons / make the relationships between things clear / say why and/or how and support with relevant evidence' },
  { word: 'Give', definition: 'produce an answer from a given source or recall/memory' },
  { word: 'Identify', definition: 'name/select/recognise' },
  { word: 'Justify', definition: 'support a case with evidence/argument' },
  { word: 'Outline', definition: 'set out the main points' },
  { word: 'Predict', definition: 'suggest what may happen based on available information' },
  { word: 'Sketch', definition: 'make a simple freehand drawing showing the key features, taking care over proportions' },
  { word: 'State', definition: 'express in clear terms' },
  { word: 'Suggest', definition: 'apply knowledge and understanding to situations where there are a range of valid responses to make proposals/put forward considerations' },
  { word: 'Summarise', definition: 'select and present the main points, without detail' },
] as const;

export const COMMAND_WORDS_SOURCE = {
  officialSourceUrl: 'https://www.cambridgeinternational.org/exam-administration/what-to-expect-on-exams-day/command-words/',
  verifiedOn: '2026-08-29',
  scopeNote:
    "Cambridge's own generic command-word glossary, applying to new and revised syllabuses published from 2019 onwards. Subject-specific command words are listed in each syllabus and are not duplicated here.",
} as const;
