---
title: "Cambridge IGCSE ICT (0417): Software tools -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original questions with mark-scheme answers on spell check suggestions and the six validation checks named in Cambridge IGCSE ICT 0417 section 15.1."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These questions cover section 15.1 Software tools of Cambridge IGCSE ICT 0417: using spell and grammar checks and making appropriate changes, and choosing and explaining range, character, length, type, format and presence checks.

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available through your school or
> Cambridge directly.

Related: [Software tools study guide](/resources/cambridge-igcse-ict-0417-software-tools/) · [Software tools revision notes](/resources/cambridge-igcse-ict-0417-software-tools-revision-notes/)

---

## Section A: short answers

**1.** Name the validation check that would reject an entry of 0 in a field that must hold a value from 1 to 31. **[1]**

**2.** Which **one** of the following would a spell checker **not** flag?

A: recieve

B: accomodation

C: there (used instead of their)

D: seperate

**[1]**

**3.** A field holds a four-digit PIN. Name **two** validation checks that would be suitable for this field. **[2]**

**4.** Give **two** reasons why a spell checker might flag a word that is spelt correctly. **[2]**

**5.** State what is meant by a *format check*. **[1]**

**6.** A form asks for a postcode. Explain why a format check is more suitable than a length check. **[2]**

---

## Section B: structured questions

**7.** A user types this original sentence into a word processor:

"The new libary will open on Monday and the manager, Mr Oyelaran, hopes it will be full of reeders."

**(a)** Identify **three** words that the spell checker is likely to flag. **[3]**

**(b)** For **one** of the words you identified, explain why the user should not simply accept the first suggestion. **[2]**

**8.** A sports centre uses a database to store bookings. Complete the table by naming the most appropriate validation check for each field and giving one example of data the check would reject.

| Field | Rule |
|---|---|
| CourtNumber | Must be from 1 to 8 |
| BookingCode | Two letters followed by four digits |
| MemberSurname | Must not contain digits or symbols other than a hyphen or apostrophe |

**[6]**

**9.** A mobile telephone number is stored as text and must contain exactly 11 digits.

**(a)** Explain why a type check would not be useful for this field. **[2]**

**(b)** Name **two** checks that should be used instead and describe what each would test. **[4]**

**10.** A teacher enters test marks out of 50 into a spreadsheet. A range check allows 0 to 50.

**(a)** State **four** values the teacher should use to test that the range check works at its limits, and say whether each should be accepted or rejected. **[4]**

**(b)** A mark of 34 is entered as 43. Explain why the range check does not detect this error. **[2]**

**11.** Explain why validation is important when data is entered into a system. **[3]**

**12.** A company's letters are checked with a spell checker set to an American English dictionary, although the company uses British English.

Describe **two** problems this would cause and how they should be dealt with. **[4]**

**13.** Describe how a grammar checker can help a user and explain why its suggestions must still be checked. **[3]**

---

## Answers

**1.** Range check. **[1]**

**2.** C: there (used instead of their). **[1]**

**3.** Any two: length check (exactly 4 characters) (1); character check (digits only) (1); presence check (1); type check if the PIN is stored as a number (1). **[2]**

**4.** Any two: it is a name, such as a surname or place name (1); it is a specialist or technical term (1); the dictionary is set to a different language or variety of English (1); it is a product code or abbreviation (1). **[2]**

**5.** A check that the data matches a set pattern of characters, for example two letters followed by four digits. **[1]**

**6.** Postcodes vary in length, so a length check alone is too loose (or would reject valid postcodes) (1); a format check tests which kind of character (letter or digit) appears in each position, so it rejects badly formed postcodes of the right length (1). **[2]**

**7. (a)** 1 mark each: *libary* (1); *Oyelaran* (1); *reeders* (1). **[3]**

**(b)** For example: *Oyelaran* is a correct surname, so the first suggestion would replace it with a wrong word (1); the user should choose ignore or add to dictionary (1). Or: *reeders* might be corrected to a word such as *reefers* or *readers*; the closest match is not always the meaning intended (1), so the user must read the list and choose *readers* (1). **[2]**

**8.** 1 mark for each check and 1 for each valid rejected example:
- CourtNumber: range check (1); for example 0 or 9 (1).
- BookingCode: format check (1); for example 12ABCD, AB123 or ABC123 (1).
- MemberSurname: character check (1); for example Smith2 or O#Neil (1). **[6]**

**9. (a)** The data is stored as text, so any characters, including letters, would pass a check that only tests for text (1); the number cannot be stored as a numeric type because the leading zero would be lost (1). **[2]**

**(b)** Length check (1): tests that exactly 11 characters have been entered (1). Character check (1): tests that every character is a digit 0 to 9 (1). **[4]**

**10. (a)** 1 mark each, value with correct outcome: 0, accepted (1); 50, accepted (1); -1, rejected (1); 51, rejected (1). **[4]**

**(b)** 43 is within the allowed range of 0 to 50 (1), so it is reasonable data and the check accepts it; validation cannot tell that the value is not the one on the original paper (1). **[2]**

**11.** Any three: it stops unreasonable or impossible data being stored (1); errors are caught at the point of entry, when they are easiest to correct (1); outputs such as reports or invoices produced from the data will be more accurate (1); it saves time and cost compared with finding errors later (1); an error message tells the user how to enter the data correctly (1). **[3]**

**12.** Two problems with responses, for example:
- Correct British spellings such as *colour* or *organise* would be flagged as errors (1); the user should change the dictionary language to British English rather than accept the suggestions (1).
- If the user accepts suggestions such as *color*, the letters would contain American spellings and break the company's house style (1); the user should proofread and correct these back to British spellings, or rerun the check with the correct dictionary (1). **[4]**

**13.** It flags possible errors such as subject and verb that do not agree, repeated words or missing capital letters (1). It applies rules without understanding the meaning (1), so a suggestion may be wrong or a correct sentence may be flagged, and the user must decide whether each change improves the sentence (1). **[3]**

## Frequently asked questions

**Do I need to know the syllabus names of the checks exactly?**
Yes. Use the names range, character, length, type, format and presence check. A described check without its name may not gain a mark that asks you to name it.

**Is a check digit one of the 15.1 checks?**
The 15.1 notes and guidance list six checks: range, character, length, type, format and presence. Learn those six first.

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, Topic 15 "Proofing", 15.1 Software tools.
