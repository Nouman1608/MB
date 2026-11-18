---
title: "Cambridge IGCSE ICT (0417): Find and replace text -- Revision Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["igcse"]
topic: "Topic 17: Document production"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 17.3
syllabusTopics:
  - qualification: "igcse"
    topic: "document-production"
    subtopic: "find-and-replace-text-t17-0417"
description: "Quick recall of find, replace and replace all with the match case and whole words options, exam traps and a self-test, for Cambridge IGCSE ICT 0417 Topic 17."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes cover **find and replace text** in Topic 17 of Cambridge IGCSE ICT 0417, "including matching case, whole words". For the full explanation and counted examples, see the [find and replace study guide](/resources/cambridge-igcse-ict-0417-find-and-replace-text-t17/); to test yourself, use the [find and replace practice questions](/resources/cambridge-igcse-ict-0417-find-and-replace-text-t17-practice/).

## Syllabus coverage

| Syllabus statement | Notes and guidance |
|---|---|
| Find and replace text | Including matching case, whole words |

## Key terms

| Term | Meaning |
|---|---|
| Find | Locates each occurrence of a word or phrase without changing it |
| Find next | Moves to the next occurrence |
| Replace | Changes the highlighted occurrence only |
| Replace all | Changes every occurrence in one step |
| Match case | Capitals and lower-case letters must match exactly |
| Whole words only | Matches only complete words, not letters inside longer words |
| Placeholder | A temporary string, not found anywhere else, used when swapping two words |

## What each option does

| Search for *ten* in: | Ten | ten | TEN | often | tent |
|---|---|---|---|---|---|
| No options | found | found | found | found | found |
| Match case | | found | | found | found |
| Whole words | found | found | found | | |
| Both | | found | | | |

- **Match case** filters by **capital letters**.
- **Whole words** filters by **word boundaries** (space, punctuation or line end on each side).
- With **both** on, only exact, separate, same-case words are found.

## Counting matches step by step

Original sentence: "Ann and Anne met Joanna at the annual fair; ANN waved to ann." Search for *Ann*.

1. List every place the three letters appear, ignoring case: **Ann**, **Ann**e, Jo**ann**a, **ann**ual, **ANN**, **ann**. That is 6, the answer with no options.
2. Whole words only: keep those that stand alone: Ann, ANN, ann. That is 3.
3. Match case only: keep those with a capital A and lower-case nn: Ann, Anne. That is 2.
4. Both: keep those that are separate words **and** spelt Ann: just the first word. That is 1.

Writing the list first, then crossing out, avoids missing matches hidden inside words such as *Joanna*.

## Choosing options

- Short word (2 to 4 letters)? Turn on **whole words**: it is almost certainly inside other words.
- Abbreviation or name with capitals (IT, UK, Mr Lee)? Turn on **match case**.
- Long, unusual phrase? Options matter less, but still check the count.
- Instruction says "the word ..."? That means **whole words**.

## Safe method

1. Find first and note how many occurrences there are.
2. If any should not change, use Find next and Replace one at a time.
3. Use Replace all only when every match should change.
4. Read the number of replacements reported.
5. Find the old text again: there should be no wrong leftovers.
6. Check capital letters at the start of sentences.

## Swapping two words

To swap *A* and *B*: replace A with a placeholder such as *zzzz*, then B with A, then zzzz with B. Without the placeholder, both words end up the same.

## Good uses

- Correcting a name spelt wrongly throughout.
- Updating a date, venue or product name.
- Making terms follow a house style (*e-mail* to *email*).
- Replacing two spaces with one.

## Exam traps

- **Replace all without whole words** damages other words, such as *Leeds* when replacing *Lee*.
- **Match case alone** does not stop matches inside words: *ten* still matches inside "often".
- **Whole words alone** does not separate *IT* from *it*: both are whole words.
- Not checking the count after Replace all.
- Swapping two words without a placeholder.
- Saying find and replace "checks spelling": it only finds the text you type.

## Self-test

1. What is the difference between Replace and Replace all?
2. What does match case do?
3. What does whole words only do?
4. Search for *ran* with whole words on. Is "Ran" found? Is "grand" found?
5. Search for *ran* with match case on only. Is "grand" found? Is "Ran" found?
6. Which option(s) would stop *Ed* matching inside "Edinburgh" and "edit"?
7. You must replace the word *IT* with *ICT*. Which options should be on and why?
8. Why should you use Find before Replace all?
9. How would you swap every *Monday* with *Friday*?
10. After Replace all, what two checks should you make?
11. Give two practical uses of find and replace.
12. A search for *the* with no options would find it in which of these: "The", "other", "theme", "bathe"?

### Answers

1. Replace changes only the highlighted occurrence; Replace all changes every occurrence at once.
2. It makes the search treat capital and lower-case letters as different.
3. It finds the text only where it is a complete word, not part of a longer word.
4. "Ran" is found (whole word, case ignored); "grand" is not.
5. "grand" is found (lower-case *ran* inside it); "Ran" is not.
6. Whole words (which excludes Edinburgh and edit); match case as well if lower-case *ed* as a word should be excluded.
7. Match case, so that "it" is not changed; whole words, so that capital letters inside longer capitalised words are not changed.
8. To see how many occurrences will change and whether any should be left alone.
9. Replace Monday with a placeholder such as zzzz, then Friday with Monday, then zzzz with Friday.
10. Read the number of replacements, then search for the old text (and the new text) to confirm the result.
11. Any two: correcting a misspelt name throughout; updating details such as a date; making terms consistent with a house style; replacing double spaces.
12. All four.

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, Topic 17 "Document production", find and replace text.
