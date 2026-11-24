---
title: "Cambridge IGCSE ICT (0417): Software tools"
resourceType: "study-guides"
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
description: "Spell and grammar checkers, why their suggestions can be wrong, and the six validation checks for Cambridge IGCSE ICT 0417 section 15.1, with worked examples."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

Section 15.1 of Cambridge IGCSE ICT 0417 is about the software tools that reduce errors. It has two halves. The first is using automated tools, the **spell check** and **grammar check**, and making appropriate changes, knowing that "automated suggestions given by spell check software do not always give the correct response". The second is using **validation routines** to minimise data entry errors, with six named checks: range, character, length, type, format and presence. This guide takes each half in more depth than the [Proofing study guide](/resources/cambridge-igcse-ict-proofing-study-guide/), which covers the whole of Topic 15.

## How a spell checker produces its suggestions

A spell checker compares every word with its dictionary. A word that is not in the dictionary is flagged, and the software offers the dictionary words that are **closest** to it, for example those that differ by one missing, extra, swapped or wrong letter. It has no idea what you meant. That is why the suggestions can be wrong:

- **Several words may be equally close.** "Fro" could be meant as *for*, *from* or *fro*; "bown" could be *brown*, *down*, *gown* or *bowl*. The first suggestion is only the closest match, not necessarily the intended word.
- **Correct words may be missing from the dictionary.** Surnames, place names, product codes and specialist terms are flagged, and the suggestion would replace a correct word with a wrong one.
- **The dictionary language may be wrong.** With an American English dictionary, *colour* and *organise* are flagged, and the suggestions *color* and *organize* would break a British English house style.
- **A real word typed by mistake is not flagged at all.** *Form* for *from*, *of* for *off* and *their* for *there* are all in the dictionary.
- **Automatic correction can act without asking.** A setting that corrects as you type may change an unusual but deliberate word.

### Making appropriate changes

When a word is flagged, the user chooses one of these actions. Choosing well is the "appropriate changes" part of the syllabus.

| Action | When it is appropriate |
|---|---|
| Change | The suggestion is the word you meant |
| Change all | The same misspelling appears several times and the suggestion is right for every one |
| Ignore once | This occurrence is correct, for example a deliberate quotation |
| Ignore all | A correct word, such as a name, appears many times in this document only |
| Add to dictionary | A correct word you will use often, such as your company's name |
| Type your own correction | None of the suggestions is the word you meant |

### Worked example: deciding on each flagged word

An original sentence typed by a school secretary:

> "Mrs Adeyemi's class will vist the musuem on Friday; pupils should bring there lunch and a pencil for the quizz."

The spell checker flags four words. The decisions:

1. *Adeyemi's*: a correct surname. Suggestions might include a different, unrelated word. **Ignore all** (or add to the dictionary if the name is used often in school letters).
2. *vist*: suggestions might be *vista*, *visit* or *vast*. The first suggestion may not be *visit*, so read the list and choose **visit**.
3. *musuem*: choose **museum**.
4. *quizz*: choose **quiz**.

One error is not flagged: *there* should be *their*. Only reading the sentence finds it. The corrected sentence has four changes made with the tool, one name left alone and one change made by the person. That combination is what the syllabus means by using the tool *and* making appropriate changes.

## Grammar checkers

A grammar checker flags possible problems such as a verb that does not agree with its subject ("the results is"), a repeated word ("the the"), a missing capital letter at the start of a sentence or a sentence fragment. Like the spell checker, it applies rules without understanding meaning. It can flag a sentence that is correct, and miss one that is wrong. Each suggestion should be read and accepted only if it improves the sentence.

## Validation routines

**Validation** is an automatic check, carried out by the software as data is entered, that the data obeys rules set by the person who designed the system. Data that breaks a rule is rejected and an **error message** is shown, ideally one that tells the user what is allowed ("Enter a whole number from 1 to 10").

### Why validation is important

Data that enters a system is used to produce outputs: invoices, timetables, deliveries, reports. Unreasonable data, such as an age of 250 or a missing postcode, produces wrong or useless outputs. It is much cheaper to stop the error at the moment of entry than to find and correct it later, after letters have been printed or goods sent.

### The six checks in the syllabus

| Check | Characteristic: what it tests | Typical use | Example of data rejected |
|---|---|---|---|
| Range check | A value lies between a lower and an upper limit | Exam mark from 0 to 100; month from 1 to 12 | 104 |
| Character check | Only permitted characters are present | Surname may contain letters, spaces, hyphens and apostrophes only | Sm1th |
| Length check | The number of characters is exactly, at least or at most a set number | Password of at least 8 characters; mobile number of exactly 11 digits | A 7-character password |
| Type check | The data is of the correct data type | Number of tickets must be an integer | "two" |
| Format check | The data matches a set pattern | Product code of two letters followed by four digits; date as DD/MM/YYYY | 4AB321 |
| Presence check | The field has not been left empty | Email address on a sign-up form | A blank field |

### Telling similar checks apart

- **Type check or character check?** A type check tests the kind of data for the whole field: is it a number, a date, text? A character check looks at each individual character and tests whether it is in the allowed set. A mobile number is usually stored as text (it can begin with 0), so a type check is not useful, but a character check can make sure every character is a digit.
- **Length check or format check?** "AB1234" and "123456" both have six characters, so a length check of 6 accepts both. A format check of two letters then four digits accepts only the first.
- **Range check on dates.** A range check works on dates as well as numbers, for example a booking date that must not be in the past and not more than a year ahead.

### Worked example: choosing validation for a form

An invented cinema club has an online membership form. For each field, the designer picks the most appropriate check.

| Field | Appropriate check(s) | Reason |
|---|---|---|
| MemberCode (for example CN48213) | Format check: two letters then five digits | Every code follows the same pattern |
| Surname | Presence check and character check | It must be filled in, and digits or symbols such as # are never part of a surname |
| DateOfBirth | Format check (DD/MM/YYYY) and range check | Must be a valid date, and members must be old enough to join |
| MobileNumber | Length check (11) and character check (digits only) | Fixed length; stored as text so that the leading zero is kept |
| TicketsPerVisit | Type check (integer) and range check (1 to 10) | A whole number, with a sensible upper limit |

Two checks are often combined on one field, as here. In an exam answer, name the check, say what it tests on *that field* and, if asked, give an example of data it would reject.

### What validation cannot do

Validation only proves data is **reasonable**, not that it is **correct**. A ticket count of 3 typed as 2 passes both the type check and the range check. A surname of "Brown" typed as "Brwon" passes the presence check and the character check. Catching these needs verification, which is part of section 15.2 (see the [proofing techniques study guide](/resources/cambridge-igcse-ict-0417-proofing-techniques/)).

### Testing a validation rule

After setting a rule, try it with values that should be accepted, values that should be rejected, and values exactly at the limits. For a range of 1 to 10, try 5, then 1 and 10 (accepted), then 0 and 11 (rejected). A rule written as "greater than 1" instead of "greater than or equal to 1" would wrongly reject 1, and only testing at the limit shows it.

## Common mistakes

- Saying a spell checker "finds all spelling errors". It finds only words that are not in its dictionary.
- Accepting the first suggestion every time.
- Writing "it checks the data is correct" for validation. Say it checks the data is reasonable, sensible or allowed.
- Mixing up a type check and a character check, or a length check and a format check.
- Giving a check without linking it to the field in the question.

## Exam technique

**Identify** or **state** questions want the name of a check, spelled exactly as in the syllabus. **Describe** wants what the check tests, for example "a range check makes sure the value is between 1 and 10". **Explain** wants a reason, for example why a spell checker's suggestion may be wrong. When asked for an example of rejected data, give an actual value, not "wrong data".

## Check your understanding

1. Why can the first spell-check suggestion be wrong? *The checker offers the closest dictionary words and does not know which one was meant.*
2. When should you choose "add to dictionary"? *For a correct word used often, such as the organisation's name.*
3. Name the check that stops a field being left blank. *Presence check.*
4. Which check would reject "Sm1th" in a surname field? *Character check.*
5. Why is a type check not useful on a mobile number stored as text? *Every entry is text, so the check accepts letters too; a character check is needed.*
6. A rule allows 1 to 10 tickets. Give two values at the limits that must be accepted. *1 and 10.*

## More on this topic

Revise with the [software tools revision notes](/resources/cambridge-igcse-ict-0417-software-tools-revision-notes/), then try the [software tools practice questions](/resources/cambridge-igcse-ict-0417-software-tools-practice/).

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, Topic 15 "Proofing", 15.1 Software tools.
