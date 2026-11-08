---
title: "Cambridge IGCSE ICT (0417): Proofing -- Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 15: Proofing"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 15
syllabusTopics:
  - qualification: "igcse"
    topic: "proofing"
  - qualification: "igcse"
    topic: "proofing"
    subtopic: "software-tools-0417"
  - qualification: "igcse"
    topic: "proofing"
    subtopic: "proofing-techniques-0417"
description: "Spell checkers, grammar checkers, validation and proofreading techniques such as visual checking and double entry, for Cambridge IGCSE ICT 0417 Topic 15."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

Proofing means checking a document or data for errors before it is finished or sent. Topic 15 of Cambridge IGCSE ICT 0417 has two parts: the **software tools** that help you find mistakes (15.1) and the **proofing techniques** that people use to catch what the tools miss (15.2). The key lesson is that software helps but never replaces a careful human check, so examination answers should use both.

## Where this fits in the specification

Proofing comes at the end of document production, after layout, styles and images. It also links to the data topic of validation and verification and to the systems life cycle, where data entry errors are guarded against in the design stage. Errors in finished work look careless to an audience, so proofing supports the audience topic too.

## 15.1 Software tools

### Spell checker

A **spell checker** compares each word with a dictionary and flags words that are not in it, usually with a wavy red underline. You can accept a suggested spelling, ignore the word, or add it to the dictionary (for example, a name or a technical word).

Limitations:

- It does not spot a **real word used wrongly**. For example "their", "there" and "they're", or "from" typed instead of "form", are all in the dictionary, so they pass.
- It flags names and specialist words that are correct.
- It uses the language set for the document, so a wrong language setting causes false errors. British English and American English spellings differ ("colour" and "color").
- It does not check numbers, such as a wrong date or price.

### Grammar checker

A **grammar checker** looks for problems with sentence structure, such as a verb that does not agree with its subject, missing capital letters, repeated words and very long sentences. It usually marks them with a blue or green underline. Its suggestions are sometimes wrong, as it may not understand the meaning, so you must decide whether to accept each one.

### Other tools

- **Thesaurus**: suggests alternative words to avoid repetition.
- **Word count**: shows the number of words, which is useful when there is a limit.
- **Find and replace**: finds each instance of a word or inconsistency, such as two spellings of a name, and replaces it. Use it with care so that you do not replace part of another word.
- **Automatic correction**: fixes common typing errors as you type.
- **Show formatting marks**: reveals double spaces, extra paragraph marks and tab characters.
- **Track changes and comments**: record edits so that another person can accept or reject them.
- **Validation**: checks entered data is reasonable. A range check, length check, type check, presence check, format check and check digit are all validation methods. Validation can only check that data is *reasonable*, not that it is *correct*.

### Worked example: what the checker misses

Read this sentence, then think about what a spell check and grammar check would and would not report:

> "The company will recieve there order from the suplier on Thursday 31 Febuary."

The checker would flag `recieve`, `suplier` and `Febuary` as spelling errors. After correcting them to *receive*, *supplier* and *February*, the sentence is:

> "The company will receive there order from the supplier on Thursday 31 February."

Two errors remain that no tool would normally report:

1. *there* should be *their*, because it is a real word in the wrong place.
2. *31 February* does not exist, because February has 28 or 29 days. A date check in a spreadsheet or database could reject it, but a word processor will not.

So there are 3 errors found by the software and 2 remaining ones, a total of 5, which is why a human proofread is essential. This is the point mark schemes reward: software finds some errors, but a person is needed to check meaning, context and facts.

## 15.2 Proofing techniques

### Visual (proofreading) checks

Proofreading means reading the work carefully on screen or on paper and comparing it with the original. Useful practices:

- **Read slowly**, and one line at a time. Reading aloud can reveal missing or repeated words.
- **Check against the source** (the original document, form or instructions), item by item.
- Look for **consistency**: the same font, size, spacing, spelling, capitalisation and punctuation throughout.
- Check **numbers, dates and names** with extra care, as spell checkers ignore them.
- Check **layout**: alignment of columns, table borders, margins, page breaks, headers and footers.
- Look out for **orphan and widow lines** (a single line left alone at the top or bottom of a page), headings stranded at the foot of a page, and extra blank lines.
- Use **print preview** or print a copy, because errors that look fine on screen can show up on paper.
- Ask **another person** to read it, since you see what you expect to see in your own work.

### Checking data entry

- **Verification** confirms that data has been entered or copied exactly as in the source. Two methods are **visual verification** (reading the typed data against the original) and **double data entry** (two people type the same data and the computer compares them, reporting differences).
- **Validation** is the automatic check that data are reasonable.

Differences to remember: validation is done by the computer using rules, and verification confirms accuracy of copying. Data can pass validation and still be wrong. For example, typing 1985 for a birth year instead of 1958 passes a range check, but a verification step would catch it.

### Worked example: choosing between validation and verification

A clerk types student marks from paper forms into a spreadsheet. The mark must be a whole number from 0 to 100.

- A **range check** (0 to 100) and a **type check** (whole number) will reject 105 or "eighty".
- A mark of 68 typed as 86 passes both checks, because both are valid. Only **visual verification** (comparing the screen with the form) or **double entry** would catch it.

The recommendation: use validation for obviously impossible data, and verification for accuracy of copying. Using both is the strongest approach.

### Making the process systematic

A professional approach is to proof in stages: first content (is it correct and complete?), then language (spelling, grammar and punctuation), then layout and consistency. Do a last check after any final change, as new errors can be introduced when fixing old ones.

## Common mistakes

- Believing that a document is error-free because the spell checker found nothing.
- Accepting every grammar suggestion without checking its meaning.
- Mixing up verification and validation. Validation checks reasonableness; verification checks accuracy of entry.
- Forgetting to check numbers, dates, names and consistency of formatting.
- Proofreading only on screen and never looking at a printed copy or print preview.
- Using find and replace without checking that it has not changed other words.

## Exam technique

For **explain** questions on the limits of a spell checker, always give a real example, such as "their" and "there" both being accepted. When asked to **describe** proofreading, give at least two techniques with the aim of each. For a data entry scenario, name the check, say what it does and say what it cannot do. In practical tasks, check your finished work from the top to the bottom for text, numbers, layout and consistency before you save and print.

## Check your understanding

1. State one thing a spell checker cannot detect. *A correctly spelled word used in the wrong place, such as "there" for "their".*
2. What does a grammar checker look for? *Errors in sentence structure, such as verb agreement, missing capitals or repeated words.*
3. Why should you read a printed copy as well as the screen? *Some layout and spacing errors are easier to see on paper or in print preview.*
4. Distinguish between validation and verification. *Validation checks data is reasonable using rules; verification checks data was copied exactly as in the source.*
5. Give two methods of verification. *Visual checking against the source, and double data entry.*
6. A date of birth of 31/04/2010 is typed. What kind of check would reject it? *A date or format check that knows April has 30 days.*
7. Why might correct data still fail to be detected by validation? *Data can be reasonable but wrong, such as a mark of 86 typed in place of 68.*
8. State two things to check for consistency in a document. *Same font and size for headings and body text, and the same spelling and punctuation throughout.*

## Frequently asked questions

**What can a spell checker not detect?**
In Cambridge IGCSE ICT (0417), a spell checker cannot detect a correctly spelled word used in the wrong place, such as "there" instead of "their", and it does not check numbers such as an impossible date. It may also flag correct names and specialist words.

**Why is a human proofread still needed after using a spell checker?**
Software finds some errors, but a person is needed to check meaning, context and facts, such as a real word in the wrong place or a date that does not exist. Exam answers should mention both tools and human checking.

**What is the difference between validation and verification?**
Validation uses rules to check that data is reasonable, such as a range or format check, while verification checks that data was copied exactly as in the source, for example by visual checking or double data entry.

**Can validation prove that data is correct?**
No. Validation can only check that data is reasonable, so a sensible but wrong value, such as a mark of 86 typed instead of 68, will still pass.
