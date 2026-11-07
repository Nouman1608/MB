# Writing a flashcard deck (D-444)

How every deck in `src/data/flashcards/` is written. The model deck is
`src/data/flashcards/cambridge-igcse-chemistry.ts` (Cambridge IGCSE Chemistry 0620): copy its
structure exactly.

## 1. One file per course

- File: `src/data/flashcards/<board>-<qualification>-<subject>.ts`, using the slugs from the
  course's record in `src/data/academic/syllabus-topics.ts` (the CURRENT one, `status: 'current'`).
  Example: `aqa-gcse-physics.ts`, `ib-ib-dp-mathematics-analysis-and-approaches.ts`.
- It exports exactly one constant, `DECK_<BOARD>_<QUALIFICATION>_<SUBJECT>` (the file name in
  upper case, with every non-alphanumeric run turned into `_`), typed `FlashcardDeck`.
- `syllabusCode` and `syllabusSeries` are copied exactly from that syllabus record.
- `author: 'marlbridge-academic-team'`, `updated` is the date written. Never set `deckReview`:
  only a named teacher's real review of the whole deck fills that in.
- Use the `sub(topic, subtopic, number, specs)` helper from the model file. Card ids are
  `<subtopic number>-<n>` (or `<topic number>-<n>` when the topic has no subtopics, in which case
  write a `topicOnly(topic, number, specs)` helper that leaves `subtopic` out). Ids are permanent.

## 2. Coverage

- Every subtopic gets cards (every topic, where a topic lists no subtopics). Aim for **3–6 cards
  per subtopic**, more for dense ones, and **6–12 per topic** where a topic has no subtopics.
- One fact, definition, method or comparison per card. Front: at most 180 characters. Back: at
  most 420. Split anything longer.
- Prefer what the exam asks for: definitions and key terms, the stated equations and formulae
  with units, standard methods ("how do you…"), required practicals, named examples, and the
  classic confusions the notes call "exam traps".

## 3. Accuracy

- Write from **this course's own Marlbridge pages** first: its study guides and revision notes
  in `src/content/resources/` (find them by `syllabusCodes`, or by `boards` + `qualifications`
  + `subject` plus the `syllabusTopics` mapping). Use their terminology, values and conditions,
  so a card never contradicts the page beside it.
- Where no page covers a subtopic, write from the official syllabus content for that subtopic,
  conservatively: standard textbook facts only, no invented figures, no claims about what the
  examiner "always" asks. Record these subtopics in your report.
- Never copy exam-board wording at length or reproduce exam questions.
- Maths and numbers: check every calculation on a card yourself.

## 4. Tiers

The deck's `tierScheme` is set only when the syllabus record has `tiered: true`:

| Scheme | Courses | `u: true` marks a card that is… |
|---|---|---|
| `core-extended` | Cambridge IGCSE 0580, 0610, 0620, 0625 | Supplement (Extended only) |
| `core-extension` | OxfordAQA International GCSE Mathematics 9260 | Extension only |
| `foundation-higher` | AQA, OCR and Edexcel tiered GCSE / International GCSE | Higher tier only |
| `sl-hl` | IB DP Mathematics AA and AI | HL only |
| `standard-extended` | IB MYP Mathematics | Extended only |

Mark `u: true` **only** where the course's own notes or the syllabus mark the content that way
(for example "(0620 Extended …)", "(Higher tier only)", "HL only"). If nothing marks it, leave
it unmarked. On a `core-extended` deck, a subtopic whose `tier` is `'core'` can never have an
upper-tier card.

## 5. Cards taken from the revision notes

Run `node scripts/flashcard-candidates.mjs <code>` for the term/definition pairs already written
on the course's revision notes. A good one becomes a card with `src: '<resource id>'` (origin
`revision-notes`), on a subtopic that page actually maps to. Reword it if it needs a tier split
or is too long. Everything else is authored (no `src`).

## 6. Plain text

Cards are rendered with textContent. No HTML, no Markdown (`**`, backticks, links). Use Unicode:
H₂O, Fe³⁺, x², √, π, θ, Σ, ∫, ≤, ≥, ≠, ±, →, ⇌, Δ, °C, × and ÷. A `\n` in a string is a line break.

## 7. Check

    node --experimental-strip-types scripts/validate-flashcards.mjs --file src/data/flashcards/<file>.ts

It must print `every subtopic covered` and `validate-flashcards: OK`. Then register the deck:
`npm run generate:flashcards`.
