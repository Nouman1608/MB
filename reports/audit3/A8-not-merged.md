# A8: MYP Language Acquisition eAssessment marks, 32 -> 24 (audit 3 item 25)

Written 25 Nov 2026 (PKT). Branch `audit-fixes-3-a8`. Owner decision (25 Nov 2026, D-530 "IB (owner)" line): the MYP Language Acquisition eAssessment is 24 marks per criterion. On-screen examination: criteria A, B and D, 3 x 24 = 72. Speaking examination: criterion C, 24. Source: the MYP Language acquisition subject brief ("Criterion A 24", "Criterion B 24", "Criterion D 24", "Criterion C 24"), as quoted in the record note in `src/data/academic/assessments.ts` (A3's correction). I could not re-read the brief myself: ibo.org returns a Cloudflare "Just a moment..." page (HTTP 403) to curl.

## Items

| ID | Status | Files | Evidence | Source used |
|---|---|---|---|---|
| 25 (A8) eAssessment marks in resources | FIXED | 24 `src/content/resources/ib-myp-language-acquisition-*.md` (list below) | Lines matching `\b(32\|96\|128)\b`: 128 before, 30 after. Every one of the 30 that remain is a classroom figure (0-32 total, or "8-level, 32-mark-total classroom") or the "two figures" sentence that contrasts 32 (classroom) with 24 (eAssessment). The two "32 euros" lines in the listening practice set are unrelated and unchanged. `96`: 45 lines before, 0 after. Per-task "16 marks" lines: 25 before, 0 after. | Owner decision; subject brief (via the `assessments.ts` note) |
| 25 (A8) flashcards | FIXED | `src/data/flashcards/ib-ib-myp-language-acquisition.ts` cards 5-1 and 5-3 (ids unchanged) | below | same |
| 25 (A8) SVG figures | FIXED (text only) | `public/images/learning/myp-language-acquisition/{myp-la-eassessment-two-marking-scales,myp-la-eassessment-revision-balance,myp-la-speaking-examination-overview}.svg` | Only `<text>` and `<desc>` changed. No geometry encodes the marks: all criterion boxes are the same size. Every edited text element has the same number of characters or fewer. All three files still parse as XML. | same |

Derived totals: on screen 3 x 24 = 72 (was 3 x 32 = 96); speaking 24 (was 32). There was no 128 (4 x 32) anywhere. Its 24-mark equivalent, 4 x 24 = 96 for all four criteria, is not printed on any page, and I did not add it. The practice answer in `global-contexts-and-topics-practice` 8(a) now reads 3 x 24 = 72.

**Per-task split removed (NEEDS OWNER).** The pages said "16 marks each per task" for A and B in Tasks 1 and 2, and "each task is worth 32 marks". Those figures came from the guide's 32-mark blueprint, and the brief gives only criterion totals. Splitting 24 over two tasks (for example 12 + 12) would be an invented figure, so I removed the per-task marks and kept "assessed in Tasks 1 and 2". I kept Task 3 = criterion D, 24 marks ("all in Task 3"), because D is assessed only in Task 3 in the task structure the pages already describe. If the owner has a per-task split for the 24-mark scheme, it can be added back.

**Citations.** Wherever a page said the eAssessment marks came from the "Middle Years Programme Language acquisition guide ... pages 51 and 52", the marks are now cited to the MYP Language acquisition subject brief, with the quoted "Criterion X 24" wording and no page number. The guide citation stays for what it still supports: the task structure, the 35-minute tasks and 1 hour 45 minutes, and the 15 to 17 minute speaking examination.

**Review notes.** All 24 resources are `reviewStatus: "reviewed"`. In each one I kept every field and appended this to `reviewNote`, in the existing dated format: ` 2026-11-25: eAssessment marks corrected to 24 per criterion (72 on screen) from the MYP Language acquisition subject brief (owner decision, audit 3 item 25).`

## Every changed line (before -> after)

Strings are shown with line breaks as ` / `. "(xN)" means the same replacement was made N times in that file.


### `src/content/resources/ib-myp-language-acquisition-assessment-revision-notes.md`

- `which allocates 32 marks / to each criterion (96 marks for the on-screen examination, which covers A, B and D, plus 32 for speaking). The / figure 32 means something different on each scale: a classroom total, or the marks for one criterion.`
  -> `which allocates 24 marks / to each criterion (72 marks for the on-screen examination, which covers A, B and D, plus 24 for speaking). The / two figures mean different things: 32 is a classroom total, 24 the marks for one criterion.`
- `**1 hour 45 minutes** in all and **96 marks**.`
  -> `**1 hour 45 minutes** in all and **72 marks**.`
- `reading (B) equally, 16 marks each per task, so each task is worth 32 marks. Task 3 is writing in /   response to multimodal texts (D), worth 32 marks. That gives A 32, B 32 and D 32 marks in the`
  -> `reading (B) equally. Task 3 is writing in /   response to multimodal texts (D), worth 24 marks. That gives A 24, B 24 and D 24 marks in the`
- `including preparation time, worth **32 marks**,`
  -> `including preparation time, worth **24 marks**,`
- `- Source for these marks and timings: International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
  -> `- Source for these marks: the MYP Language acquisition subject brief ("Criterion A 24", "Criterion B 24", "Criterion D 24", "Criterion C 24"). Source for the task structure and timings: International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
- `carrying 32 marks each, 96 marks in all for those three`
  -> `carrying 24 marks each, 72 marks in all for those three`
- `each carry 32 marks on the on-screen exam, which is worth 96 marks in all, and speaking (criterion C) is assessed separately and is worth 32 marks.`
  -> `each carry 24 marks on the on-screen exam, which is worth 72 marks in all, and speaking (criterion C) is assessed separately and is worth 24 marks.`
- `Separately, the eAssessment blueprint gives each criterion 32 marks: A and B in Tasks 1 and 2 and D in Task 3 of the on-screen paper, which is worth 96 marks,`
  -> `Separately, the eAssessment blueprint gives each criterion 24 marks: A and B in Tasks 1 and 2 and D in Task 3 of the on-screen paper, which is worth 72 marks,`
- `32 marks per criterion in eAssessment (96 on screen)`
  -> `24 marks per criterion in eAssessment (72 on screen)`
- `share one on-screen paper worth 96 marks and can be revised together; speaking is a separate strand. Each criterion is worth 32 marks.`
  -> `share one on-screen paper worth 72 marks and can be revised together; speaking is a separate strand. Each criterion is worth 24 marks.`
- frontmatter `reviewNote`: appended the dated line above.

### `src/content/resources/ib-myp-language-acquisition-criterion-a-listening-practice.md`

- `The eAssessment marks (32 for Criterion A, 16 in each of Tasks 1 and 2 of the on-screen examination) come from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
  -> `The eAssessment mark (24 for Criterion A: "Criterion A 24") comes from the subject brief; the task structure (Criterion A is assessed in Tasks 1 and 2 of the on-screen examination) comes from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
- frontmatter `reviewNote`: appended the dated line above.

### `src/content/resources/ib-myp-language-acquisition-criterion-a-listening-revision-notes.md`

- `**96 marks**. Tasks 1 and 2 each pair a written-visual text with an audio-visual text and assess Criterion A (16 marks) and Criterion B (16 marks), so Criterion A is worth **32 marks** across the two tasks. Task 3 is writing (Criterion D, 32 marks).`
  -> `**72 marks**. Tasks 1 and 2 each pair a written-visual text with an audio-visual text and assess Criterion A and Criterion B, so Criterion A is worth **24 marks** across the two tasks. Task 3 is writing (Criterion D, 24 marks).`
- `- Speaking (Criterion C, 32 marks) is`
  -> `- Speaking (Criterion C, 24 marks) is`
- `2. How many marks does the guide give Criterion A in the on-screen examination, and how are they spread across the tasks?`
  -> `2. How many marks does the brief give Criterion A in the on-screen examination, and in which tasks is it assessed?`
- `2. 32 marks: 16 in Task 1 and 16 in Task 2.`
  -> `2. 24 marks, assessed in Tasks 1 and 2.`
- `which is worth 96 marks: 32 for each of Criteria A, B and D. Criterion A is assessed in Tasks 1 and 2, 16 marks in each.`
  -> `which is worth 72 marks: 24 for each of Criteria A, B and D. Criterion A is assessed in Tasks 1 and 2.`
- `The eAssessment marks (32 for Criterion A, 16 in each of Tasks 1 and 2) come from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
  -> `The eAssessment mark (24 for Criterion A: "Criterion A 24") comes from the subject brief; the task structure (Criterion A is assessed in Tasks 1 and 2) comes from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
- frontmatter `reviewNote`: appended the dated line above.

### `src/content/resources/ib-myp-language-acquisition-criterion-a-listening.md`

- `(1 hour 45 minutes in all) and is worth 96 marks.`
  -> `(1 hour 45 minutes in all) and is worth 72 marks.`
- `and Criterion B (reading) equally, 16 marks each per task, so listening is worth 32 marks across the two tasks.`
  -> `and Criterion B (reading) equally, so listening is worth 24 marks across the two tasks.`
- `Listening (Criterion A) is worth 32 marks: 16 in Task 1 and 16 in Task 2 of the on-screen examination, which is worth 96 marks in all.`
  -> `Listening (Criterion A) is worth 24 marks, assessed in Tasks 1 and 2 of the on-screen examination, which is worth 72 marks in all.`
- `The eAssessment marks (32 for Criterion A, 16 in each of Tasks 1 and 2) come from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
  -> `The eAssessment mark (24 for Criterion A: "Criterion A 24") comes from the subject brief; the task structure (Criterion A is assessed in Tasks 1 and 2) comes from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
- frontmatter `reviewNote`: appended the dated line above.

### `src/content/resources/ib-myp-language-acquisition-criterion-b-reading-practice.md`

- `The eAssessment marks (32 for Criterion B, 16 in each of Tasks 1 and 2 of the on-screen examination) come from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
  -> `The eAssessment mark (24 for Criterion B: "Criterion B 24") comes from the subject brief; the task structure (Criterion B is assessed in Tasks 1 and 2 of the on-screen examination) comes from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
- frontmatter `reviewNote`: appended the dated line above.

### `src/content/resources/ib-myp-language-acquisition-criterion-b-reading-revision-notes.md`

- `35 minutes each, 96 marks; Tasks 1 and 2`
  -> `35 minutes each, 72 marks; Tasks 1 and 2`
- `= Criterion B, 16 marks per task, 32 marks in all |`
  -> `= Criterion B, 24 marks in all |`
- `11. **32 marks** (16 in each of Tasks 1 and 2);`
  -> `11. **24 marks** (assessed in Tasks 1 and 2);`
- `which is worth 96 marks: 32 each for listening (A), reading (B) and writing (D). Criterion B is assessed in Tasks 1 and 2, 16 marks in each.`
  -> `which is worth 72 marks: 24 each for listening (A), reading (B) and writing (D). Criterion B is assessed in Tasks 1 and 2.`
- `The eAssessment marks (32 for Criterion B, 16 in each of Tasks 1 and 2 of the on-screen examination) come from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
  -> `The eAssessment mark (24 for Criterion B: "Criterion B 24") comes from the subject brief; the task structure (Criterion B is assessed in Tasks 1 and 2 of the on-screen examination) comes from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
- frontmatter `reviewNote`: appended the dated line above.

### `src/content/resources/ib-myp-language-acquisition-criterion-b-reading.md`

- `35 minutes each, 96 marks in all.`
  -> `35 minutes each, 72 marks in all.`
- `is assessed by Criterion B for 16 marks in each of those two tasks, 32 marks in all.`
  -> `is assessed by Criterion B across those two tasks, 24 marks in all.`
- `Criterion B for 32 marks in the on-screen examination (16 in each of Tasks 1 and 2, out of 96 marks for the whole examination).`
  -> `Criterion B for 24 marks in the on-screen examination (assessed in Tasks 1 and 2, out of 72 marks for the whole examination).`
- `The eAssessment marks (32 for Criterion B, 16 in each of Tasks 1 and 2) come from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
  -> `The eAssessment mark (24 for Criterion B: "Criterion B 24") comes from the subject brief; the task structure (Criterion B is assessed in Tasks 1 and 2) comes from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
- frontmatter `reviewNote`: appended the dated line above.

### `src/content/resources/ib-myp-language-acquisition-criterion-c-speaking-practice.md`

- `Also accept: interactive; worth 32 marks.`
  -> `Also accept: interactive; worth 24 marks.`
- `The speaking examination mark (32) and length (15 to 17 minutes including preparation time) come from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("Language acquisition examination blueprint", page 52).`
  -> `The speaking examination mark (24: "Criterion C 24") comes from the subject brief; its length (15 to 17 minutes including preparation time) comes from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("Language acquisition examination blueprint", page 52).`
- frontmatter `reviewNote`: appended the dated line above.

### `src/content/resources/ib-myp-language-acquisition-criterion-c-speaking-revision-notes.md`

- `| Speaking in response to multimodal texts -- 32 marks |`
  -> `| Speaking in response to multimodal texts -- 24 marks |`
- `3. **32 marks.**`
  -> `3. **24 marks.**`
- `interactive task worth 32 marks and lasting`
  -> `interactive task worth 24 marks and lasting`
- `which is worth 96 marks (32 each); criterion C, speaking, is a separate individual examination worth 32 marks`
  -> `which is worth 72 marks (24 each); criterion C, speaking, is a separate individual examination worth 24 marks`
- `IB-moderated conversation worth 32 marks.</figcaption>`
  -> `IB-moderated conversation worth 24 marks.</figcaption>`
- `The speaking examination mark (32) and length (15 to 17 minutes including preparation time) come from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("Language acquisition examination blueprint", page 52).`
  -> `The speaking examination mark (24: "Criterion C 24") comes from the subject brief; its length (15 to 17 minutes including preparation time) comes from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("Language acquisition examination blueprint", page 52).`
- frontmatter `reviewNote`: appended the dated line above.

### `src/content/resources/ib-myp-language-acquisition-criterion-c-speaking.md`

- `Criterion C, **32 marks**.`
  -> `Criterion C, **24 marks**.`
- `is assessed by Criterion C for 32 marks.`
  -> `is assessed by Criterion C for 24 marks.`
- `which is worth 96 marks (32 each); criterion C, speaking, is a separate individual examination worth 32 marks`
  -> `which is worth 72 marks (24 each); criterion C, speaking, is a separate individual examination worth 24 marks`
- `IB-moderated conversation worth 32 marks.</figcaption>`
  -> `IB-moderated conversation worth 24 marks.</figcaption>`
- `The speaking examination mark (32) and length (15 to 17 minutes including preparation time) come from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("Language acquisition examination blueprint", page 52).`
  -> `The speaking examination mark (24: "Criterion C 24") comes from the subject brief; its length (15 to 17 minutes including preparation time) comes from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("Language acquisition examination blueprint", page 52).`
- frontmatter `reviewNote`: appended the dated line above.

### `src/content/resources/ib-myp-language-acquisition-criterion-d-writing-practice.md`

- `Writing in response to multimodal texts [1]; **32 marks** [1].`
  -> `Writing in response to multimodal texts [1]; **24 marks** [1].`
- `The eAssessment marks (32 for criterion D, all in Task 3 of the on-screen examination) come from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
  -> `The eAssessment mark (24 for criterion D: "Criterion D 24") comes from the subject brief; the task structure (criterion D is assessed in Task 3 of the on-screen examination) comes from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
- frontmatter `reviewNote`: appended the dated line above.

### `src/content/resources/ib-myp-language-acquisition-criterion-d-writing-revision-notes.md`

- `| eAssessment marks | 32, all in Task 3 (criteria A and B also 32 each) |`
  -> `| eAssessment marks | 24, all in Task 3 (criteria A and B also 24 each) |`
- `35 minutes each, 96 marks; Task 3`
  -> `35 minutes each, 72 marks; Task 3`
- `2. 32 marks, all in Task 3.`
  -> `2. 24 marks, all in Task 3.`
- `carries 32 marks in the on-screen examination blueprint, all in Task 3 (the on-screen examination is worth 96 marks in all).`
  -> `carries 24 marks in the on-screen examination blueprint, all in Task 3 (the on-screen examination is worth 72 marks in all).`
- `The eAssessment marks (32 for criterion D, all in Task 3 of the on-screen examination) come from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
  -> `The eAssessment mark (24 for criterion D: "Criterion D 24") comes from the subject brief; the task structure (criterion D is assessed in Task 3 of the on-screen examination) comes from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
- frontmatter `reviewNote`: appended the dated line above.

### `src/content/resources/ib-myp-language-acquisition-criterion-d-writing.md`

- `the guide's blueprint names the objective "Writing in response to multimodal texts" and gives criterion D **32 marks**`
  -> `the brief's blueprint names the objective "Writing in response to multimodal texts" and gives criterion D **24 marks**`
- `(1 hour 45 minutes in all, 96 marks)`
  -> `(1 hour 45 minutes in all, 72 marks)`
- `carries all 32 marks for criterion D`
  -> `carries all 24 marks for criterion D`
- `gives Criterion D 32 marks, all in Task 3`
  -> `gives Criterion D 24 marks, all in Task 3`
- `The eAssessment marks (32 for criterion D, all in Task 3 of the on-screen examination) come from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
  -> `The eAssessment mark (24 for criterion D: "Criterion D 24") comes from the subject brief; the task structure (criterion D is assessed in Task 3 of the on-screen examination) comes from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
- frontmatter `reviewNote`: appended the dated line above.

### `src/content/resources/ib-myp-language-acquisition-eassessment-exam-preparation.md`

- `(criterion A) and reading (criterion B) equally, 16 marks each per task, so each task is worth 32 marks. / Task 3 is writing in response to multimodal texts (criterion D), worth 32 marks. Criteria A, B and D are / therefore worth 32 marks each, 96 marks in all, in the eAssessment blueprint`
  -> `(criterion A) and reading (criterion B) equally. / Task 3 is writing in response to multimodal texts (criterion D), worth 24 marks. Criteria A, B and D are / worth 24 marks each, 72 marks in all, in the eAssessment blueprint`
- `It is worth 32 marks and lasts 15 to 17 minutes`
  -> `It is worth 24 marks and lasts 15 to 17 minutes`
- `equally weighted at 32 marks each in the`
  -> `equally weighted at 24 marks each in the`
- `The on-screen exam has three tasks and is worth 96 marks.`
  -> `The on-screen exam has three tasks and is worth 72 marks.`
- `and reading (Criterion B), 16 marks each per task. Task 3 is writing in response to multimodal texts (Criterion D), 32 marks. That makes 32 marks each for Criteria A, B and D in the eAssessment blueprint. Speaking (Criterion C) is assessed separately and is worth 32 marks.`
  -> `and reading (Criterion B). Task 3 is writing in response to multimodal texts (Criterion D), 24 marks. That makes 24 marks each for Criteria A, B and D in the eAssessment blueprint. Speaking (Criterion C) is assessed separately and is worth 24 marks.`
- `marks and timings for the on-screen examination and the speaking examination come from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 / ("MYP eAssessment"`
  -> `marks for the on-screen examination and the speaking examination come from the MYP Language acquisition subject brief ("Criterion A 24", "Criterion B 24", "Criterion D 24", "Criterion C 24"); the timings come from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 / ("MYP eAssessment"`
- frontmatter `reviewNote`: appended the dated line above.

### `src/content/resources/ib-myp-language-acquisition-global-contexts-and-topics-practice.md`

- `**8. (a)** Each of the three tasks is worth 32 marks, so 3 × 32 = **96 marks** [1].`
  -> `**8. (a)** Criteria A, B and D are worth 24 marks each, so 3 × 24 = **72 marks** [1].`
- `The eAssessment marks (on-screen examination 96 marks, speaking examination 32 marks) come from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
  -> `The eAssessment marks (on-screen examination 72 marks, 24 for each of Criteria A, B and D; speaking examination 24 marks) come from the subject brief ("Criterion A 24", "Criterion B 24", "Criterion D 24", "Criterion C 24"); the task structure and timings come from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
- frontmatter `reviewNote`: appended the dated line above.

### `src/content/resources/ib-myp-language-acquisition-global-contexts-and-topics.md`

- `96 marks in all, 32 for each of Criteria A, B and D)`
  -> `72 marks in all, 24 for each of Criteria A, B and D)`
- `Speaking (Criterion C, 32 marks) is internally assessed`
  -> `Speaking (Criterion C, 24 marks) is internally assessed`
- `The eAssessment marks (on-screen examination 96 marks, speaking examination 32 marks) come from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
  -> `The eAssessment marks (on-screen examination 72 marks, 24 for each of Criteria A, B and D; speaking examination 24 marks) come from the subject brief ("Criterion A 24", "Criterion B 24", "Criterion D 24", "Criterion C 24"); the task structure and timings come from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
- frontmatter `reviewNote`: appended the dated line above.

### `src/content/resources/ib-myp-language-acquisition-multimodal-texts-and-visuals-revision-notes.md`

- `| A | 32 (16 per task) |`
  -> `| A | 24 |`
- `| B | 32 (16 per task) |`
  -> `| B | 24 |`
- `| D | 32 |`
  -> `| D | 24 |`
- `| C | 32 |`
  -> `| C | 24 |`
- `(1 hour 45 minutes in all), 96 marks.`
  -> `(1 hour 45 minutes in all), 72 marks.`
- `5. How many marks does the guide's blueprint give the on-screen examination in total?`
  -> `5. How many marks does the brief's blueprint give the on-screen examination in total?`
- `5. 96 marks (32 each for A, B and D).`
  -> `5. 72 marks (24 each for A, B and D).`
- `The eAssessment marks (on-screen examination 96 marks, speaking examination 32 marks) come from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
  -> `The eAssessment marks (on-screen examination 72 marks, 24 for each of Criteria A, B and D; speaking examination 24 marks) come from the subject brief ("Criterion A 24", "Criterion B 24", "Criterion D 24", "Criterion C 24"); the task structure and timings come from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
- frontmatter `reviewNote`: appended the dated line above.

### `src/content/resources/ib-myp-language-acquisition-multimodal-texts-and-visuals.md`

- `| A | 32 (16 per task) |`
  -> `| A | 24 |`
- `| B | 32 (16 per task) |`
  -> `| B | 24 |`
- `| D | 32 |`
  -> `| D | 24 |`
- `| C | 32 |`
  -> `| C | 24 |`
- `The guide's blueprint: / `
  -> `The blueprint (marks from the brief; task structure from the guide): / `
- `(1 hour 45 minutes in all, 96 marks)`
  -> `(1 hour 45 minutes in all, 72 marks)`
- `The eAssessment marks (on-screen examination 96 marks, speaking examination 32 marks) come from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
  -> `The eAssessment marks (on-screen examination 72 marks, 24 for each of Criteria A, B and D; speaking examination 24 marks) come from the subject brief ("Criterion A 24", "Criterion B 24", "Criterion D 24", "Criterion C 24"); the task structure and timings come from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
- frontmatter `reviewNote`: appended the dated line above.

### `src/content/resources/ib-myp-language-acquisition-proficiency-phases-practice.md`

- `**2.** 32 marks each in the eAssessment blueprint`
  -> `**2.** 24 marks each in the eAssessment blueprint`
- `independently weighted at an equal 32 marks each`
  -> `independently weighted at an equal 24 marks each`
- `The eAssessment marks on this page come from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
  -> `The eAssessment marks on this page come from the MYP Language acquisition subject brief ("Criterion A 24", "Criterion B 24", "Criterion D 24", "Criterion C 24").`
- frontmatter `reviewNote`: appended the dated line above.

### `src/content/resources/ib-myp-language-acquisition-proficiency-phases-revision-notes.md`

- `eAssessment blueprint (32 marks each -- not to be`
  -> `eAssessment blueprint (24 marks each -- not to be`
- `scale: it allocates 32 marks to each criterion`
  -> `scale: it allocates 24 marks to each criterion`
- `is out of 96 marks and the speaking / examination (criterion C) is out of 32.`
  -> `is out of 72 marks and the speaking / examination (criterion C) is out of 24.`
- `**Criterion A: Listening** (32 marks)`
  -> `**Criterion A: Listening** (24 marks)`
- `**Criterion B: Reading** (32 marks)`
  -> `**Criterion B: Reading** (24 marks)`
- `**Criterion C: Speaking** (32 marks)`
  -> `**Criterion C: Speaking** (24 marks)`
- `**Criterion D: Writing** (32 marks)`
  -> `**Criterion D: Writing** (24 marks)`
- `independently weighted at an equal 32 marks`
  -> `independently weighted at an equal 24 marks`
- `3. 32 marks each in the eAssessment blueprint`
  -> `3. 24 marks each in the eAssessment blueprint`
- `carries 32 marks and they are weighted equally`
  -> `carries 24 marks and they are weighted equally`
- `Separately, the eAssessment blueprint gives each criterion 32 marks: A and B in Tasks 1 and 2 and D in Task 3 of the on-screen paper, which is worth 96 marks,`
  -> `Separately, the eAssessment blueprint gives each criterion 24 marks: A and B in Tasks 1 and 2 and D in Task 3 of the on-screen paper, which is worth 72 marks,`
- `32 marks per criterion in eAssessment (96 on screen)`
  -> `24 marks per criterion in eAssessment (72 on screen)`
- `share one on-screen paper worth 96 marks and can be revised together; speaking is a separate strand. Each criterion is worth 32 marks.`
  -> `share one on-screen paper worth 72 marks and can be revised together; speaking is a separate strand. Each criterion is worth 24 marks.`
- `The eAssessment marks on this page come from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
  -> `The eAssessment marks on this page come from the MYP Language acquisition subject brief ("Criterion A 24", "Criterion B 24", "Criterion D 24", "Criterion C 24").`
- frontmatter `reviewNote`: appended the dated line above.

### `src/content/resources/ib-myp-language-acquisition-proficiency-phases.md`

- `eAssessment blueprint (32 marks / each --`
  -> `eAssessment blueprint (24 marks / each --`
- `Criterion A, Listening (32 / marks)`
  -> `Criterion A, Listening (24 / marks)`
- `Reading (32 marks)`
  -> `Reading (24 marks)`
- `Speaking (32 marks)`
  -> `Speaking (24 marks)`
- `Writing (32 marks)`
  -> `Writing (24 marks)`
- `equal 32 marks each in the eAssessment blueprint.`
  -> `equal 24 marks each in the eAssessment blueprint.`
- `Separately, the eAssessment blueprint gives each criterion 32 marks: A and B in Tasks 1 and 2 and D in Task 3 of the on-screen paper, which is worth 96 marks,`
  -> `Separately, the eAssessment blueprint gives each criterion 24 marks: A and B in Tasks 1 and 2 and D in Task 3 of the on-screen paper, which is worth 72 marks,`
- `32 marks per criterion in eAssessment (96 on screen)`
  -> `24 marks per criterion in eAssessment (72 on screen)`
- `share one on-screen paper worth 96 marks and can be revised together; speaking is a separate strand. Each criterion is worth 32 marks.`
  -> `share one on-screen paper worth 72 marks and can be revised together; speaking is a separate strand. Each criterion is worth 24 marks.`
- `The eAssessment marks on this page come from the International Baccalaureate Organization, Middle Years Programme Language acquisition guide, for use from September 2020/January 2021 ("MYP eAssessment" and "Language acquisition examination blueprint", pages 51 and 52).`
  -> `The eAssessment marks on this page come from the MYP Language acquisition subject brief ("Criterion A 24", "Criterion B 24", "Criterion D 24", "Criterion C 24").`
- frontmatter `reviewNote`: appended the dated line above.

### `src/content/resources/ib-myp-language-acquisition-subject-guide.md`

- `(three tasks, 96 marks in all, worth 32 marks each for criteria A, B`
  -> `(three tasks, 72 marks in all, worth 24 marks each for criteria A, B`
- `The speaking exam is worth 32 marks and lasts 15 to 17 minutes including preparation time (marks and timings from the Middle Years Programme Language acquisition guide, for use from September 2020/January 2021).`
  -> `The speaking exam is worth 24 marks and lasts 15 to 17 minutes including preparation time (marks from the MYP Language acquisition subject brief ("Criterion A 24", "Criterion B 24", "Criterion D 24", "Criterion C 24"); timings from the Middle Years Programme Language acquisition guide, for use from September 2020/January 2021).`
- frontmatter `reviewNote`: appended the dated line above.

### `src/content/resources/ib-myp-language-acquisition-syllabus-guide.md`

- `allocates **32 marks** to each criterion: 96 marks /   for the on-screen examination (criteria A, B and D) and 32 for the speaking examination`
  -> `allocates **24 marks** to each criterion: 72 marks /   for the on-screen examination (criteria A, B and D) and 24 for the speaking examination`
- `blueprint. The figure 32 therefore means something different on each scale: a classroom total /   of the four 0-8 levels, or the marks for a single criterion in the eAssessment.`
  -> `blueprint. The two figures therefore mean different things: 32 is a classroom total /   of the four 0-8 levels, 24 the marks for a single criterion in the eAssessment.`
- `45 minutes in all, 96 marks).`
  -> `45 minutes in all, 72 marks).`
- `multimodal texts (criterion A, 16 marks per task) and reading written /   multimodal texts (criterion B, 16 marks per task) equally. Task 3 is /   writing in response to multimodal texts (criterion D, 32 marks). Criteria /   A, B and D are therefore worth 32 marks each.`
  -> `multimodal texts (criterion A) and reading written /   multimodal texts (criterion B) equally. Task 3 is /   writing in response to multimodal texts (criterion D). Criteria /   A, B and D are worth 24 marks each.`
- `(criterion C, 32 marks, 15 to 17 minutes`
  -> `(criterion C, 24 marks, 15 to 17 minutes`
- `each worth an equal 32 marks in the eAssessment`
  -> `each worth an equal 24 marks in the eAssessment`
- `The marks and timings above come from the Middle Years Programme Language acquisition guide, for use / from September`
  -> `The marks above come from the MYP Language acquisition subject brief ("Criterion A 24", "Criterion B 24", "Criterion D 24", "Criterion C 24"); the task structure and timings come from the Middle Years Programme Language acquisition guide, for use / from September`
- `allocates 32 marks to each criterion (96 marks for the on-screen examination covering A, B and D, and 32 for speaking)`
  -> `allocates 24 marks to each criterion (72 marks for the on-screen examination covering A, B and D, and 24 for speaking)`
- `Separately, the eAssessment blueprint gives each criterion 32 marks: A and B in Tasks 1 and 2 and D in Task 3 of the on-screen paper, which is worth 96 marks,`
  -> `Separately, the eAssessment blueprint gives each criterion 24 marks: A and B in Tasks 1 and 2 and D in Task 3 of the on-screen paper, which is worth 72 marks,`
- `32 marks per criterion in eAssessment (96 on screen)`
  -> `24 marks per criterion in eAssessment (72 on screen)`
- frontmatter `reviewNote`: appended the dated line above.

### `src/content/resources/ib-myp-language-acquisition-text-types-and-conventions-revision-notes.md`

- `is Criterion D and carries 32 marks (Task 3 of the on-screen examination, which is worth 96 marks in all)`
  -> `is Criterion D and carries 24 marks (Task 3 of the on-screen examination, which is worth 72 marks in all)`
- frontmatter `reviewNote`: appended the dated line above.

### `src/data/flashcards/ib-ib-myp-language-acquisition.ts`

- Card 5-1 (`What is the structure of the MYP Language Acquisition eAssessment?`): `A, B and D are worth 32 marks each, 96 marks in all. Speaking (C, 32 marks) is a separate examination.`
  -> `A, B and D are worth 24 marks each, 72 marks in all. Speaking (C, 24 marks) is a separate examination.`
- Card 5-3 (`Classroom scale versus eAssessment blueprint`): `eAssessment blueprint: 32 marks for each of A, B and D on screen, 96 in all, plus 32 marks for the speaking examination (C).`
  -> `eAssessment blueprint: 24 marks for each of A, B and D on screen, 72 in all, plus 24 marks for the speaking examination (C).` The classroom part ("each criterion 0–8, total 0–32") is unchanged.
- Card 4-1 ("0–8 each and 0–32 in class"): classroom, unchanged.

### `public/images/learning/myp-language-acquisition/myp-la-eassessment-two-marking-scales.svg`

- `<desc>`: `each criterion is worth 32 marks` -> `24 marks`; `of the on-screen examination, 16 marks in each task, and D in Task 3. The on-screen examination is worth 96 marks.` -> `of the on-screen examination, and D in Task 3. The on-screen examination is worth 72 marks.`; `worth 32 marks.</desc>` -> `worth 24 marks.</desc>`
- `<text>` x4 (A, B, C, D column): `32 marks` -> `24 marks`
- `<text>` x2 (A, B): `(16 marks in each)` (18 characters) -> `(over both tasks)` (17 characters). The per-task split is not in the brief; see NEEDS OWNER.
- `<text>`: `on-screen 96 marks` -> `on-screen 72 marks`; `speaking 32 marks` -> `speaking 24 marks`
- Unchanged: `total 0–32` (classroom).

### `public/images/learning/myp-language-acquisition/myp-la-eassessment-revision-balance.svg`

- `<desc>`: `each worth 32 marks` -> `24 marks`; `on-screen paper of 96 marks` -> `72 marks`
- `<text>`: `On-screen paper (96 marks): revise together` -> `On-screen paper (72 marks): revise together`
- `<text>` x4 (A, B, D, C): `32 marks` -> `24 marks`

### `public/images/learning/myp-language-acquisition/myp-la-speaking-examination-overview.svg`

- `<desc>`: `which is worth 96 marks, 32 each. ... worth 32 marks` -> `which is worth 72 marks, 24 each. ... worth 24 marks`
- `<text>`: `On-screen examination: 96 marks` -> `72 marks`; `A Listening: 32 marks`, `B Reading: 32 marks`, `D Writing: 32 marks`, `C Speaking: 32 marks` -> `24 marks` each

## Lines left unchanged (ambiguous, or not a 32/96 eAssessment figure)

1. "The distribution of marks may vary by no more than three marks from the blueprint" (assessment-revision-notes, criterion-a-listening(-revision-notes), criterion-d-writing, multimodal-texts-and-visuals(-revision-notes) Q6, syllabus-guide 129 and 204, proficiency-phases-revision-notes 68, flashcard 5-3 "may vary by up to three from the blueprint"). This is not a 32/96 figure, so I left it. The pages attribute it to the guide's blueprint. The versions from before 20 Nov (commit 7b5259a91) attributed the same sentence to the brief; I could not re-check either one.
2. "8-level, 32-mark-total classroom assessment/scale" (eassessment-exam-preparation 42, proficiency-phases 33, proficiency-phases-revision-notes 31 and 189, proficiency-phases-practice 84, subject-guide 78). This describes the classroom scale, so it stays. It does call the classroom total a "mark" total although it is a sum of levels; that is a wording point for another pass.
3. `global-contexts-and-topics-practice.md` line 79: "**8.** (Course knowledge) Answer from the brief and the guide's eAssessment blueprint." No figure. Part (a) now rests on the brief, but the guide still supplies the task structure, so I left it.
4. `criterion-c-speaking.md` line 51: "For eAssessment, the facts printed in the brief and in the guide's blueprint are:". No figure, and the list mixes the brief's 24 with the guide's timings, so I left it.
5. "The guide's blueprint gives 1 hour 45 minutes ..." (assessment-revision-notes 155, eassessment-exam-preparation 52 and 133). These are timings, not marks.
6. Criterion D "all in Task 3" with 24 (criterion-d-writing*, text-types-and-conventions-revision-notes). This is derived from the existing task structure, not printed in the brief.

## NEEDS OWNER

1. Per-task marks under the 24-mark scheme. How are A's 24 and B's 24 spread over Tasks 1 and 2? The pages now give no per-task figure, and the SVG reads "(over both tasks)".
2. Does the brief also print "1 hour 45 minutes", "35 minutes" per task and "15 to 17 minutes", or only the guide? The pages still cite the guide for these timings.

## REQUEST TO LEAD

1. `src/data/academic/syllabus-topics.ts` line 8394 (MYP Language Acquisition record notes). I do not own this file. Its note still records the superseded 20 Nov decision.
   - Old: `eAssessment marks: the blueprint in the full guide prints 32 marks for each of criteria A, B and D on screen (96 in all) and 32 for the speaking examination; the owner confirmed on 20 Nov 2026 that these are the correct figures, so the 24 marks for each criterion printed in the two-page brief are not used. The flashcards follow the brief.`
   - New: `eAssessment marks: the blueprint in the full guide prints 32 marks for each of criteria A, B and D on screen (96 in all) and 32 for the speaking examination, but the owner decided on 25 Nov 2026 (audit 3 item 25) to use the two-page brief's figures, 24 marks for each criterion (72 on screen, 24 for speaking); the resources, flashcards and figures follow the brief.`
2. `docs/decision-log.md`: the earlier entry (line 16702, "MYP Language Acquisition marks. The owner confirmed the guide's blueprint ... 32 marks each ... The earlier brief's 24 marks is not used.") is superseded by D-530. The lead may want to add a cross-reference. I did not edit the log.

## Commands and results (25 Nov 2026 PKT)

- `grep -nE '\b(32|96|128)\b' src/content/resources/ib-myp-language-acquisition-*.md | wc -l`: 128 before, 30 after (all 30 are classroom; see above)
- `grep -cE '\b96\b'` over the same files: 45 before, 0 after. `16 marks|16 in|16 per`: 25 before, 0 after.
- `grep -nE '\b(32|96)\b' src/data/flashcards/ib-ib-myp-language-acquisition.ts`: 3 lines before (125, 158, 160), 2 after (125 and 160, classroom "0–32" only)
- `node --experimental-strip-types scripts/validate-flashcards.mjs`: OK (exit 0)
- `node scripts/validate-academic-content.mjs`: OK (topic, stage and code references OK; exit 0)
- `node scripts/validate-review-integrity.mjs`: PASS, 0 problems (exit 0)
- `node --experimental-strip-types scripts/validate-academic-qa.mjs`: integrity OK, no open hard-stop (exit 0). Its two notes (a-level psychology QA-0014, R1 gate) are older and unrelated.
- `node --experimental-strip-types scripts/validate-course-consistency.mjs`: 166 courses, 18309 resources, hard problems 0, new [5] findings 0 (exit 0)
- `npm run -s test:tools`: 239 tests, 239 pass, 0 fail
- `node scripts/check-duplicate-resource-scope.mjs`: PASS (exit 0)
- `python3 xml.dom.minidom.parse` on the 3 SVGs: all parse
- `curl https://www.ibo.org/...myp-brief-language-acquisition-2020-en.pdf`: 403 (Cloudflare bot check), so I could not read the brief directly
