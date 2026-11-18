---
title: "Cambridge IGCSE ICT (0417): Software tools -- Revision Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["igcse"]
topic: "Topic 15: Proofing"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 15.1
syllabusTopics:
  - qualification: "igcse"
    topic: "proofing"
    subtopic: "software-tools-0417"
description: "Quick recall of spell check limits and the range, character, length, type, format and presence checks, with exam traps and a self-test, for IGCSE ICT 0417."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes cover section 15.1 Software tools of Cambridge IGCSE ICT 0417: using spell and grammar checks sensibly, and using validation to reduce data entry errors. For full explanations and worked examples, read the [software tools study guide](/resources/cambridge-igcse-ict-0417-software-tools/); to practise, use the [software tools practice questions](/resources/cambridge-igcse-ict-0417-software-tools-practice/).

## Syllabus coverage

| Syllabus statement | Notes and guidance (summarised) |
|---|---|
| Reduce errors | Use spell check and grammar check and make appropriate changes; use validation routines to minimise data entry errors |
| Spell check software | Automated suggestions do not always give the correct response |
| Validation checks | Importance, characteristics and uses of range, character, length, type, format and presence checks |

## Key terms

| Term | Meaning |
|---|---|
| Spell checker | Tool that flags words not found in its dictionary and suggests the closest dictionary words |
| Grammar checker | Tool that flags possible errors in sentence structure, agreement and punctuation |
| Custom dictionary | The user's own list of extra words, such as names, that the spell checker should accept |
| Validation | Automatic check by the software, on entry, that data obeys set rules and is reasonable |
| Validation rule | The condition the data must meet, for example between 1 and 10 |
| Error message | The message shown when data breaks a rule; it should say what is allowed |

## Spell and grammar checks: what to remember

- The checker matches words to a dictionary; it does **not** understand meaning.
- Suggestions are the **closest** dictionary words, so several may fit and the first may be wrong.
- Real words in the wrong place are **not** flagged: *form/from*, *of/off*, *their/there*, *bear/bare*.
- Correct names, place names, codes and technical terms **are** flagged.
- The dictionary language matters: an American dictionary flags *colour*, *centre* and *organise*.
- Numbers and dates are not checked for sense.
- Appropriate actions: change, change all, ignore once, ignore all, add to dictionary, or type your own correction.
- A grammar checker can also be wrong both ways: it may flag a correct sentence and miss a faulty one.
- Always proofread after the automated checks.

## The six validation checks

| Check | Tests that... | Use | Rejected example |
|---|---|---|---|
| Range | a value is between limits | Percentage 0 to 100 | 120 |
| Character | only allowed characters appear | Town name: letters, spaces, hyphens | Leed$ |
| Length | the number of characters is exact, minimum or maximum | PIN of exactly 4 digits | 123 |
| Type | data is the correct data type | Age is an integer | twelve |
| Format | data follows a pattern | Registration code LL-NNN | 12-ABC |
| Presence | the field is not empty | Customer email | (blank) |

### Telling them apart

- **Type** tests the whole field's kind of data; **character** tests each character against an allowed set.
- **Length** counts characters; **format** checks which kind of character is in which position.
- **Range** applies to numbers **and dates**.
- Several checks can be applied to one field, for example presence plus format.

## Why validation matters

- Errors stopped on entry never reach outputs such as invoices, letters or reports.
- It is cheaper and quicker than correcting errors later.
- Clear error messages help users enter the data correctly first time.

**Limitation:** validation shows data is *reasonable*, not *correct*. A mark of 64 entered as 46 passes a 0 to 100 range check. Verification (section 15.2) is needed as well; see the [proofing techniques revision notes](/resources/cambridge-igcse-ict-0417-proofing-techniques-revision-notes/).

## Testing a rule

Use accepted values, rejected values and values exactly on the limits. For a range of 18 to 65, test 30, then 18 and 65 (both accepted), then 17 and 66 (both rejected).

## Exam traps

- "A spell check finds every error" is wrong. It finds only words missing from its dictionary.
- "Validation checks data is correct" is wrong. Use *reasonable*, *sensible* or *allowed*.
- A **phone number** is stored as text, so a **type** check is not the answer; use character and length checks.
- "Length check on a postcode" is weak, because postcodes vary in length; a **format** check fits better.
- Name the check exactly as the syllabus does: *character check*, not "letter check".
- When asked for rejected data, give an actual value, such as 105, not "a wrong number".

## Self-test

1. How does a spell checker decide which words to flag?
2. Give two reasons why a spell checker's suggestion may not be the correct word.
3. A user types *off* instead of *of*. Will the spell checker flag it? Why?
4. When would "ignore all" be the appropriate action?
5. Define validation.
6. Which check makes sure a field is not left blank?
7. Which check would reject *J0nes* in a surname field?
8. A password must have at least 10 characters. Name the check.
9. A product code must be three letters then two digits. Name the check and give one code it would reject.
10. Explain the difference between a type check and a character check.
11. A range check allows 1 to 50. Which four values would you use to test the limits?
12. Give one error that validation cannot detect.

### Answers

1. It flags any word that is not in its dictionary (or the custom dictionary).
2. Any two: several dictionary words are equally close; the intended word may be a name not in the dictionary; the dictionary is set to the wrong language; it cannot know the meaning intended.
3. No, because *off* is a real word in the dictionary.
4. When a correct word, such as a name, appears several times in this document but should not be added to the dictionary.
5. An automatic check by the software, on entry, that data obeys set rules and is reasonable.
6. Presence check.
7. Character check (a digit is not an allowed character).
8. Length check.
9. Format check; for example *AB123*, *12ABC* or *ABCD1* would be rejected.
10. A type check tests that the data is of the correct data type, such as integer; a character check tests that every character is one of an allowed set, such as digits only.
11. 1 and 50 (accepted), 0 and 51 (rejected).
12. A value that is reasonable but wrong, for example 25 typed instead of 52, or a correctly formatted but wrong code.

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, Topic 15 "Proofing", 15.1 Software tools.
