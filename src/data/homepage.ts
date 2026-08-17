/** Editorial copy for homepage sections. Program, subject, resource and
 *  article data comes from content collections — never from this file. */

export const pillars = [
  { title: 'Academic Excellence', description: 'Teaching built around the curriculum, examined skills and the depth of understanding that lasts beyond the exam hall.' },
  { title: 'Expert Teaching', description: 'Subject specialists who explain clearly, diagnose where a learner is stuck, and teach to the individual.' },
  { title: 'Global Perspective', description: 'International curricula and university pathways understood in the context of the places our learners come from.' },
  { title: 'Future-Ready Skills', description: 'Reasoning, writing, problem solving and independent study — the habits that carry a student through and beyond school.' },
] as const;

export const tutoringModes = [
  { title: 'One-to-one tutoring', description: 'A single tutor, a single learner, and a plan built around what is actually difficult.' },
  { title: 'Small-group learning', description: 'Small groups at the same level, where discussion helps understanding.' },
  { title: 'Exam preparation', description: 'Focused work on technique, timing and past papers ahead of a session.' },
  { title: 'Online learning', description: 'Live online lessons for learners outside our teaching locations.' },
] as const;
