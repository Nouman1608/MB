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
 * D-541 (25 Nov 2026): the page now shows Cambridge's generic list PLUS
 * four named Pearson Edexcel documents (IAL Business, IAL Economics,
 * International GCSE Physics exemplar pack, International GCSE Biology 4BI1
 * Getting Started Guide), each as its own section -- never blended into one
 * "Edexcel list" (D-097 still holds: Edexcel publishes no generic glossary).
 * AQA, OCR and OxfordAQA, and every other Edexcel subject, are still not
 * sourced and the page says so.
 *
 * Scope, stated honestly: the Cambridge list is Cambridge's own official list,
 * fetched directly from their site (not reconstructed from memory or a
 * third party). Cambridge states it applies "in new and revised
 * syllabuses published from 2019 onwards" -- i.e. essentially every
 * current Cambridge syllabus, across IGCSE, O Level and AS & A Level.
 * Cambridge also notes that "any subject-specific command words will also
 * be listed in the syllabus" -- this generic glossary does not attempt to
 * capture subject-specific command words on top of it. Other boards
 * (Edexcel, AQA, OCR, OxfordAQA) publish their own command-word glossaries
 * too, but they have not yet been sourced and verified for Marlbridge --
 * this is disclosed on the tool's own page (as of D-541: Cambridge's generic
 * list plus the named Edexcel documents; other boards not yet sourced)
 * rather than silently presenting
 * a Cambridge-only list as if it covered every board.
 *
 * Flagship Dominance/Trust programme (2026-08-31, D-097): investigated
 * extending this to the other four boards, per the brief's explicit
 * "board-aware, since meanings differ by board" request. Real finding,
 * not an excuse: Cambridge is structurally unusual in publishing ONE
 * generic, cross-subject glossary. AQA, OCR and OxfordAQA each instead
 * publish command-word guidance PER SUBJECT (verified directly: AQA
 * publishes separate PDFs/pages for GCSE Science, A-level Geography,
 * Computer Science, PE, Design & Technology and more, each independently;
 * OCR the same, e.g. its GCSE Geography command-words PDF; OxfordAQA the
 * same, e.g. separate Psychology, Maths, English Language and Geography
 * command-word PDFs). Pearson Edexcel appears not to publish a
 * consolidated official glossary of any kind, generic or per-subject, at
 * a stable public URL (only third-party/teaching-resource compilations
 * were found). A single "AQA/OCR/OxfordAQA generic list" the way
 * Cambridge's exists would therefore misrepresent how those boards
 * actually define these words -- it would either have to pick one
 * subject's list and present it as if it applied broadly (false), or
 * blend several subjects' definitions into something none of those boards
 * actually publishes (fabricated). Neither is done here. Properly
 * cataloguing real, subject-scoped command-word glossaries across three
 * boards and dozens of subjects each, individually source-verified, is a
 * legitimately large research task -- correctly deferred rather than
 * rushed, per the brief's own priority order (academic truth over feature
 * completeness). This file/page's disclosure was updated to state the
 * real, verified reason precisely instead of a generic "not yet added."
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

/**
 * Pearson Edexcel, per-document command-word tables (owner-supplied PDFs,
 * 2026-11-25; see reports/owner-decisions/edexcel-command-words-extract.md).
 *
 * Edexcel does not publish a generic cross-subject glossary, so (consistent
 * with D-097) each list below is scoped to the ONE document it was copied
 * from and must never be presented as an Edexcel-wide or Cambridge-equivalent
 * list. Definitions are copied as printed; a newline marks a paragraph or
 * bullet break inside a printed cell. `pdfPage` is the PDF viewer page.
 * `marks` is the "Number of marks" column, present only in the two IAL
 * specifications. The four documents are rendered, one section each, on
 * /command-words/ (D-541). The Biology table is an image in the PDF; its
 * transcription was re-checked against 2.2x page renders of PDF pages 17-18
 * (2026-11-25) and every entry matched. The Business, Economics and Physics
 * text was re-checked against the PDFs with PyMuPDF.
 */
export interface BoardCommandWord {
  readonly word: string;
  readonly definition: string;
  readonly marks?: string;
  /** Printed sub-heading row the entry sits under, where the table has one. */
  readonly group?: string;
  readonly pdfPage: number;
}

export interface BoardCommandWordDocument {
  readonly board: 'Pearson Edexcel';
  readonly qualification: string;
  readonly document: string;
  readonly documentLabel: string;
  /** Plain statement of which question papers the table covers, per the document itself. */
  readonly appliesTo: string;
  readonly sourceUrl: string;
  readonly entries: readonly BoardCommandWord[];
}

export const EDEXCEL_COMMAND_WORD_DOCUMENTS: readonly BoardCommandWordDocument[] = [
  {
    board: 'Pearson Edexcel',
    qualification: 'International Advanced Subsidiary/Advanced Level in Business',
    document: 'IAL-Business-Specification-with-Command-Words.pdf',
    appliesTo: 'The question papers of Pearson Edexcel International Advanced Subsidiary/Advanced Level in Business (the specification lists the command words used in those papers). Not a list for other Edexcel subjects.',
    documentLabel: 'Specification - Issue 1 - September 2017, Appendix 6: Command words (printed p56)',
    sourceUrl: 'https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Business/2018/Specification-and-Sample-Assessment/International-A-Level-Business-Spec.pdf',
    entries: [
      { word: 'Define', marks: '2', pdfPage: 58, definition: 'Requires students to define a term or phrase.' },
      { word: 'Calculate', marks: '4', pdfPage: 58, definition: 'Requires students to perform a calculation, based on given data. Calculators may be used and workings should be given.' },
      { word: 'Construct', marks: '4', pdfPage: 58, definition: 'Requires students to draw an accurately labelled diagram. Students may be required to decide on a type of diagram, or the type required may be stated.' },
      { word: 'Explain', marks: '4', pdfPage: 58, definition: 'Requires students to provide a brief explanation of cause or effect, which is supported by details or example(s).' },
      { word: 'Analyse', marks: '6', pdfPage: 58, definition: 'Requires a brief chain of reasoning, explanation and/or justification. If applied to given diagrams or data, it will include interpretation. Does not include evaluation.' },
      { word: 'Discuss', marks: '8', pdfPage: 58, definition: 'Requires a logical chains of reasoning, in context, showing cause(s) and/or effect(s). A brief assessment is required showing an awareness of competing arguments/factors.' },
      { word: 'Assess', marks: '10 [Units 1/2]; 12 [Units 3/4]', pdfPage: 58, definition: 'Requires a coherent and logical chain of reasoning, showing cause(s) and/or effect(s) which is well contextualised. Assessment is balanced and wide ranging showing an awareness of competing arguments/factors, leading to a supported judgement.' },
      { word: 'Evaluate', marks: '20', pdfPage: 58, definition: 'Requires fully developed, coherent and logical chains of reasoning, showing a range of cause and/or effect(s). A full awareness of the validity and significance of competing arguments/factors leading to a perceptive conclusion that proposes a solution and/or recommendations.' },
    ],
  },
  {
    board: 'Pearson Edexcel',
    qualification: 'International Advanced Subsidiary/Advanced Level in Economics',
    document: 'IAL-Economics-Specification-with-Command-Words.pdf',
    appliesTo: 'The question papers of Pearson Edexcel International Advanced Subsidiary/Advanced Level in Economics (the specification lists the command words used in those papers). Not a list for other Edexcel subjects.',
    documentLabel: 'Specification - Issue 2 - June 2018, Appendix 6: Command word taxonomy (printed p68)',
    sourceUrl: 'https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Economics/2018/Specification-and-Sample-Assessment/International-A-Level-Economics-spec.pdf',
    entries: [
      { word: 'Define', marks: '2', pdfPage: 72, definition: 'Requires knowledge and understanding only. Requires students to give the meaning of a term, concept or phrase.' },
      { word: 'Calculate', marks: '2 or 4', pdfPage: 72, definition: 'Assesses quantitative skills. Requires a calculation involving several stages based on given data and may involve the use of a prescribed diagram or formula. Calculators may be used. Students are advised to show workings.' },
      { word: 'Draw', marks: '4', pdfPage: 72, definition: 'Assesses quantitative skills. Requires students to construct an accurately labelled diagram, using quantitative skills. Students may be required to decide on a type of diagram, or the type required may be stated.' },
      { word: 'Explain', marks: '4', pdfPage: 72, definition: 'When asking students to explain a term or the characteristics, this requires knowledge, understanding and application.\nWhen asking students to explain a reason or impact, this also includes analysis as it requires a two-stage chain of reasoning.' },
      { word: 'Analyse', marks: '6', pdfPage: 72, definition: 'Requires knowledge, understanding, application and analysis. Requires an explanation which includes a chain of reasoning, and diagrams where appropriate. Focuses on depth rather than breadth. Any relevant data provided needs to be interpreted. Does not include evaluation.' },
      { word: 'Examine', marks: '8', pdfPage: 72, definition: 'Requires knowledge, understanding, application, analysis and evaluation. Requires an explanation which includes a chain of reasoning, and diagrams where appropriate. Focuses on depth rather than breadth. Any relevant data provided needs to be interpreted. There should be a brief assessment of the arguments/factors/evidence.' },
      { word: 'Discuss', marks: '14', pdfPage: 72, definition: 'Requires knowledge, understanding, application, analysis and evaluation. Logical and coherent chains of reasoning need to be developed with reference to context where appropriate. The validity and significance of arguments/models and concepts should be considered and supported by relevant chains of reasoning. There should also be a recognition of different viewpoints and/or a critical assessment of the evidence.' },
      { word: 'Evaluate/ To what extent', marks: '20', pdfPage: 72, definition: 'Requires knowledge, understanding, application, analysis and evaluation. Logical and coherent multi-stage chains of reasoning need to be developed with reference to context where appropriate. The validity and significance of arguments/models and concepts should be considered and supported by relevant chains of reasoning. There should also be a recognition of different viewpoints and/or a critical assessment of the evidence so that informed judgements arguments may be made.' },
    ],
  },
  {
    board: 'Pearson Edexcel',
    qualification: 'International GCSE Biology (Modular) (2017) (4BI1)',
    document: 'IGCSE-Biology-4BI1-Getting-Started-Guide.pdf',
    appliesTo: 'Pearson Edexcel International GCSE Biology (Modular) (2017), code 4BI1. Not a list for other Edexcel subjects.',
    documentLabel: 'Getting Started Guide - Issue 2 - October 2024, Command word taxonomy, PDF pages 17-18 (the table is an embedded image; every entry was re-checked against rendered page images on 2026-11-25)',
    sourceUrl: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Biology/2017/teaching-and-learning-materials/gstt-int-gcse-biology.pdf',
    entries: [
      { word: 'Add/Label', pdfPage: 17, definition: 'Requires the addition or labelling of a stimulus material given in the question, for example labelling a diagram or adding units to a table.' },
      { word: 'Calculate', pdfPage: 17, definition: 'Obtain a numerical answer, showing relevant working.' },
      { word: 'Comment on', pdfPage: 17, definition: 'Requires the synthesis of a number of variables from data/information to form a judgement.' },
      { word: 'Complete', pdfPage: 17, definition: 'Requires the completion of a table/diagram.' },
      { word: 'Deduce', pdfPage: 17, definition: 'Draw/reach conclusion(s) from the information provided.' },
      { word: 'Describe', pdfPage: 17, definition: 'To give an account of something. Statements in the response need to be developed, as they are often linked but do not need to include a justification or reason.' },
      { word: 'Determine', pdfPage: 17, definition: 'The answer must have an element that is quantitative from the stimulus provided, or must show how the answer can be reached quantitatively. To gain maximum marks, there must be a quantitative element to the answer.' },
      { word: 'Design', pdfPage: 17, definition: 'Plan or invent a procedure from existing principles/ideas.' },
      { word: 'Discuss', pdfPage: 17, definition: 'Identify the issue/situation/problem/argument that is being assessed within the question.\nExplore all aspects of an issue/situation/problem/argument.\nInvestigate the issue/situation etc. by reasoning or argument.' },
      { word: 'Draw', pdfPage: 17, definition: 'Produce a diagram either using a ruler or freehand.' },
      { word: 'Estimate', pdfPage: 17, definition: 'Find an approximate value, number or quantity from a diagram/given data or through a calculation.' },
      { word: 'Evaluate', pdfPage: 17, definition: "Review information (e.g. data, methods) then bring it together to form a conclusion, drawing on evidence including strengths, weaknesses, alternative actions, relevant data or information. Come to a supported judgement of a subject's quality and relate it to its context." },
      { word: 'Explain', pdfPage: 17, definition: 'An explanation requires a justification/exemplification of a point. The answer must contain some element of reasoning/justification – this can include mathematical explanations.' },
      { word: 'Give/State/Name', pdfPage: 17, definition: 'All of these command words are really synonyms. They generally all require recall of one or more pieces of information.' },
      { word: 'Give a reason/reasons', pdfPage: 17, definition: 'When a statement has been made and the requirement is only to give the reason(s) why.' },
      { word: 'Identify', pdfPage: 17, definition: 'Usually requires some key information to be selected from a given stimulus/resource.' },
      { word: 'Justify', pdfPage: 17, definition: 'Give evidence to support (either the statement given in the question or an earlier answer).' },
      { word: 'Plot', pdfPage: 18, definition: 'Produce a graph by marking points accurately on a grid from data that is provided and then draw a line of best fit through these points. A suitable scale and appropriately labelled axes must be included if these are not provided in the question.' },
      { word: 'Predict', pdfPage: 18, definition: 'Give an expected result.' },
      { word: 'Show that', pdfPage: 18, definition: 'Verify the statement given in the question.' },
      { word: 'Sketch', pdfPage: 18, definition: 'Produce a freehand drawing. For a graph, this would need a line and labelled axes with important features indicated.\nThe axes are not scaled.' },
      { word: 'State what is meant by', pdfPage: 18, definition: 'When the meaning of a term is expected but there are different ways for how these can be described.' },
      { word: 'Suggest', pdfPage: 18, definition: 'Use your knowledge to propose a solution to a problem in a novel context.' },
      { word: 'Analyse the data/graph to explain', group: 'Verb proceeding a command word', pdfPage: 18, definition: 'Examine the data/graph in detail to provide an explanation.' },
      { word: 'What, Why, Which', group: 'Multiple choice questions', pdfPage: 18, definition: 'Direct command words used for multiple-choice questions.' },
    ],
  },
  {
    board: 'Pearson Edexcel',
    qualification: 'International GCSE Physics (4PH1/4XPH1; also Double Science 4SD0/4XSD1)',
    document: 'IGCSE-Physics-Command-Words-Exemplars.pdf',
    appliesTo: 'Pearson Edexcel International GCSE Physics (4PH1), Physics (Modular) (4XPH1), Double Science (4SD0) and Double Science (Modular) (4XSD1), per the cover of the exemplar pack. Not a list for other Edexcel subjects.',
    documentLabel: 'Command words exemplars for WPH1/WXPH1 (all series) - Issue 1 - February 2026 (definition column; repeated on every exemplar page, wording varies slightly between pages)',
    sourceUrl: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Physics/2024/teaching-and-learning-materials/ig-physics-command-words-exemplars-ext-v1-0.pdf',
    entries: [
      { word: 'Add/Label', pdfPage: 4, definition: 'Requires the addition of labelling of a stimulus material given in the question, for example, labelling a diagram or adding units to a table' },
      { word: 'Calculate', pdfPage: 8, definition: 'Obtain a numerical answer, showing relevant working.' },
      { word: 'Comment on', pdfPage: 13, definition: 'Requires the synthesis of a number of variables from data/information to form a judgment' },
      { word: 'Compare', pdfPage: 16, definition: 'Identify the main factors relating to two or more items/situations or aspects of a subject that is extended to explain the similarities, differences, advantages and disadvantages.' },
      { word: 'Complete', pdfPage: 17, definition: 'Requires completion of a table/diagram' },
      { word: 'Deduce', pdfPage: 21, definition: 'Draw/reach conclusion(s) from the information provided' },
      { word: 'Define', pdfPage: 23, definition: 'Recalling the meaning of a term from the specification' },
      { word: 'Describe', pdfPage: 24, definition: 'To give an account of something. Statement in the response need to be developed, as they are often linked but do not need to include a justification or reason' },
      { word: 'Design', pdfPage: 27, definition: 'Plan or invent a procedure from existing principles /ideas' },
      { word: 'Determine', pdfPage: 30, definition: 'The answer must have an element that is quantitative from the stimulus provided or must show how the answer can be reached quantitatively. To gain maximum marks, there must be a quantitative element to the answer' },
      { word: 'Discuss', pdfPage: 32, definition: 'Identify the issue/situation/problem/argument that is being assessed within the questions\nExplore all aspects of an issue/situation/problem/argument\nInvestigate the issue/situation etc. by reasoning or argument' },
      { word: 'Draw', pdfPage: 33, definition: 'Produce a diagram using a ruler or freehand' },
      { word: 'Estimate', pdfPage: 37, definition: 'Find an approximate value, number or quantity from a diagram' },
      { word: 'Evaluate', pdfPage: 38, definition: "Review information (e.g. data, methods) then bring it together to form a conclusion, drawing on evidence including strengths, weaknesses, alternative actions, relevant data or information\nCome to a supported judgement of a subject's quality and relate it to its context" },
      { word: 'Explain', pdfPage: 43, definition: 'An explanation requires a justification/ exemplification of a point\nThe answer must contain some element of reasoning/ justification - this can include mathematical explanations' },
      { word: 'Give/State/Name', pdfPage: 47, definition: 'All of these command words are synonyms\nThey are generally all requiring recall of one or more pieces of information' },
      { word: 'Give a reason/reasons', pdfPage: 49, definition: 'When a statement has been made and the requirement is only to give the reason(s) why' },
      { word: 'Identify', pdfPage: 50, definition: 'Usually requires some key information to be selected from a given stimulus/resource' },
      { word: 'Justify', pdfPage: 52, definition: 'Give evidence to support (either the statement given in the questions or an earlier answer)' },
      { word: 'Plot', pdfPage: 56, definition: 'Produce a graph by marking points accurately on a grid from data that is provided and then draw a line of best fit through these points\nA suitable scale and appropriately labelled axes must be included if these are not provided in the question' },
      { word: 'Predict', pdfPage: 60, definition: 'Give an expected result' },
      { word: 'Show that', pdfPage: 63, definition: 'Verify the statement given in the equation' },
      { word: 'Sketch', pdfPage: 65, definition: 'Produce a freehand drawing.\nFor a graph, this would need a line and labelled axes with important features indicated\nThe axes are not scaled.' },
      { word: 'Suggest', pdfPage: 67, definition: 'Use your knowledge to propose a solution to a problem in a novel context' },
    ],
  },
] as const;

export const COMMAND_WORDS_SOURCE = {
  officialSourceUrl: 'https://www.cambridgeinternational.org/exam-administration/what-to-expect-on-exams-day/command-words/',
  verifiedOn: '2026-08-29',
  scopeNote:
    "Cambridge's own generic command-word glossary, applying to new and revised syllabuses published from 2019 onwards. Subject-specific command words are listed in each syllabus and are not duplicated here.",
} as const;
