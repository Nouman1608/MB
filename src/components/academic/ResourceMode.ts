/**
 * D-397 -- the three study modes, one definition for every surface that
 * shows a resource type (course pages, resource cards, resource pages).
 * Each mode has a label, an action verb, a colour family (Tailwind token
 * names, so the classes are visible to the compiler) and an icon. Colour
 * is never the only cue: the icon and the words always travel with it.
 */
import type { StudyKind } from '../../utils/academic/combination-resources';

export interface ModeStyle {
  label: string;        // card heading, e.g. "Study guides"
  singular: string;     // one item, e.g. "Study guide"
  mode: string;         // short mode name, e.g. "Learn"
  text: string;         // accent text class (labels, actions)
  tint: string;         // light background class
  border: string;       // card border class
  hoverBorder: string;  // card border on hover
  hasHover: string;     // card border when a link inside it is hovered
  underline: string;    // resting underline colour for the action
}

// D-398: study guides are blue, revision notes teal, practice questions
// amber; tokens in global.css. Text on every tint stays dark navy; the
// colour is carried by the icon tile, the card edge and the action.
export const MODE: Record<StudyKind, ModeStyle> = {
  learn: { label: 'Study guides', singular: 'Study guide', mode: 'Learn', text: 'text-learn-700', tint: 'bg-learn-50', border: 'border-learn-200', hoverBorder: 'hover:border-learn-700', hasHover: 'has-[a:hover]:border-learn-700', underline: 'decoration-learn-200' },
  review: { label: 'Revision notes', singular: 'Revision notes', mode: 'Revise', text: 'text-revise-700', tint: 'bg-revise-50', border: 'border-revise-200', hoverBorder: 'hover:border-revise-700', hasHover: 'has-[a:hover]:border-revise-700', underline: 'decoration-revise-200' },
  practice: { label: 'Practice questions', singular: 'Practice questions', mode: 'Practise', text: 'text-practise-700', tint: 'bg-practise-50', border: 'border-practise-200', hoverBorder: 'hover:border-practise-700', hasHover: 'has-[a:hover]:border-practise-700', underline: 'decoration-practise-200' },
};

/** What following the link does, by resource type. */
export const ACTION: Record<string, string> = {
  'study-guides': 'Read guide',
  'subject-guides': 'Read course guide',
  'learning-articles': 'Read article',
  'revision-notes': 'Revise topic',
  'practice-questions': 'Try questions',
  'past-papers': 'Read guide',
  'exam-preparation': 'Read guide',
};
