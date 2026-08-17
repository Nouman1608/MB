/** Editorial copy for homepage sections. Program, subject, resource and
 *  article data comes from content collections — never from this file. */

export const pillars = [
  { title: 'Academic Excellence', description: 'Teaching built around the curriculum and the examined skills — with understanding that outlasts the exam hall.' },
  { title: 'Expert Teaching', description: 'Subject specialists who diagnose where a learner is stuck, then teach to the individual.' },
  { title: 'Global Perspective', description: 'International curricula and university pathways, read in the context learners actually live in.' },
  { title: 'Future-Ready Skills', description: 'Reasoning, writing, problem solving and independent study.' },
] as const;

export const tutoringModes = [
  { title: 'One-to-one tutoring', description: 'A single tutor, a single learner, and a plan built around what is actually difficult.' },
  { title: 'Small-group learning', description: 'Small groups at the same level, where discussion helps understanding.' },
  { title: 'Exam preparation', description: 'Focused work on technique, timing and past papers ahead of a session.' },
  { title: 'Online learning', description: 'Live online lessons for learners outside our teaching locations.' },
] as const;
