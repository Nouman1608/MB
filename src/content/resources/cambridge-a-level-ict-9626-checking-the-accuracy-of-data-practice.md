---
title: "Cambridge A Level Information Technology (9626): Checking the accuracy of data -- Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Topic 1 – Data processing and information"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 1.4
syllabusTopics:
  - qualification: "a-level"
    topic: "data-processing-and-information"
  - qualification: "a-level"
    topic: "data-processing-and-information"
    subtopic: "checking-the-accuracy-of-data"
description: "Thirteen original Cambridge 9626 IT section 1.4 questions with worked answers on validation, verification, check digits, parity, checksums and totals."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs; examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Checking the accuracy of data study guide](/resources/cambridge-a-level-ict-9626-checking-the-accuracy-of-data/)

These questions are for **section 1.4 Checking the accuracy of data** (Topic 1, AS Level) of Cambridge International AS & A Level Information Technology (9626), 2025–2027. All organisations are invented.

---

## Section A

**1.** Define validation. **[2]**

**2.** Define verification. **[2]**

**3.** A form for booking a cinema seat has the field "Number of tickets", which must be a whole number from 1 to 8. State the validation checks that would reject the following entries.

**(a)** `0` **[1]**

**(b)** `three` **[1]**

**(c)** The field left blank **[1]**

**4.** Explain what a check digit is used for. **[2]**

**5.** A seven-bit code `1101011` is to be sent with an even parity bit added at the front. Write the eight-bit byte that is sent. **[2]**

## Section B

**6.** A library uses four-digit book codes with a check digit added at the end. To find the check digit, each digit is multiplied by the weights 5, 4, 3 and 2 in turn, the products are added, and the total is divided by 11. The check digit is 11 minus the remainder (and 0 if this gives 11).

Calculate the check digit for the code 2038. Show your working. **[4]**

**7.** Using the rule in Question 6, decide whether each full code below is valid. Show your working.

**(a)** `53163` **[3]**

**(b)** `53613` **[3]**

**8.** Larkfield Sports Club has an online membership form with these fields: date of birth, membership type (Junior, Adult or Senior) and postcode.

**(a)** Name a suitable validation check for each field and describe what it tests. **[6]**

**(b)** Explain why a consistency check would help between two of the fields. **[2]**

**9.** A student says: "If data passes validation, it must be correct." Explain why the student is wrong. **[3]**

**10.** Compare double data entry with visual checking as methods of verification. **[4]**

**11.** Four bytes with values 120, 85, 60 and 40 are sent with a checksum. The checksum is calculated by adding the values and finding the remainder when the total is divided by 256.

**(a)** Calculate the checksum. **[2]**

**(b)** The receiver calculates 53 from the data it receives. State what this shows and what happens next. **[2]**

**12.** A payroll file holds employee numbers 4501, 4502, 4510 and 4523 with hours worked of 12, 18, 25 and 9.

**(a)** Calculate a hash total for the employee numbers. **[1]**

**(b)** Calculate a control total for the hours worked. **[1]**

**(c)** Explain why one of these totals is a hash total and the other a control total. **[2]**

**13.** Aldermoor Bank asks customers to type their new account number twice and then checks it against a database of valid numbers. Evaluate this approach. **[6]**

---

## Answers

**1.** An automatic check by the computer [1] that data entered is reasonable and allowed (sensible, in the right form), not that it is correct [1]. **[2]**

**2.** A check that data has been entered or transferred accurately [1], by comparing it with the original or with a second copy [1]. **[2]**

**3. (a)** Range check (or limit check) [1].

**(b)** Type check [1].

**(c)** Presence check [1]. **[3]**

**4.** A digit calculated from the other digits in a code and added to it [1]. It is recalculated on entry and compared, to detect typing errors such as a wrong digit or two digits swapped [1]. **[2]**

**5.** The data has five 1s (1+1+0+1+0+1+1 = 5), which is odd [1], so the parity bit is 1 and the byte is `11101011` [1]. **[2]**

**6.** 2 × 5 = 10, 0 × 4 = 0, 3 × 3 = 9 and 8 × 2 = 16 [1]. The total is 10 + 0 + 9 + 16 = 35 [1]. 35 divided by 11 leaves remainder 2 [1]. The check digit is 11 − 2 = **9**, so the full code is 20389 [1]. **[4]**

**7. (a)** First four digits 5, 3, 1, 6: 25 + 12 + 3 + 12 = 52 [1]. 52 divided by 11 leaves remainder 8, so the check digit should be 11 − 8 = 3 [1]. The entered check digit is 3, so the code is valid [1].

**(b)** First four digits 5, 3, 6, 1: 25 + 12 + 18 + 2 = 57 [1]. 57 divided by 11 leaves remainder 2, so the check digit should be 11 − 2 = 9 [1]. The entered check digit is 3, which does not match, so the code is invalid (the digits 1 and 6 were swapped) [1]. **[6]**

**8. (a)** Date of birth: a range check [1] tests the date lies within sensible limits, for example the person is not born in the future or more than 110 years ago [1]. Membership type: a lookup check [1] tests that the entry matches one of the allowed values (Junior, Adult, Senior) [1]. Postcode: a format check [1] tests that the entry follows the pattern of letters and digits for a postcode [1]. (A presence check, length check or type check may be credited for any field where justified.)

**(b)** A consistency check compares two fields [1], for example the membership type "Junior" must not be accepted if the date of birth shows the person is over 60 [1]. **[8]**

**9.** Validation only checks that data is sensible and in the right form [1]. A wrong value can still be sensible, for example 34 typed instead of 43 for an age [1], so it passes the checks, and only verification or a check against the source would find it [1]. **[3]**

**10.** In double data entry the data is typed twice and the computer compares the two entries, whereas in visual checking a person reads the entry against the source [1]. Double entry is automatic in its comparison, so it is more reliable, whereas visual checking depends on a person noticing differences [1]. Double entry takes about twice as long as entering once, whereas visual checking is quicker but easier to get wrong [1]. Visual checking needs no extra software, whereas double entry needs a system to compare the two entries [1]. **[4]**

**11. (a)** 120 + 85 + 60 + 40 = 305 [1]. 305 − 256 = 49, so the checksum is **49** [1].

**(b)** The received checksum (53) is different from 49, so the data has been changed or corrupted in transmission [1]. The receiver rejects it and asks for the data to be sent again [1]. **[4]**

**12. (a)** 4501 + 4502 + 4510 + 4523 = **18036** [1].

**(b)** 12 + 18 + 25 + 9 = **64** hours [1].

**(c)** The employee numbers are identifiers, so their sum has no meaning and is used only to check that no record has changed (hash total) [1]. The hours are real quantities, so their total has meaning, for example the total hours paid (control total) [1]. **[4]**

**13.** For: typing the number twice (double entry) catches typing mistakes, because the two entries must match [1]; the lookup against valid numbers rejects numbers that do not exist [1]; both are automatic and give immediate feedback [1]. Against: a customer could type the same wrong number twice, for example by copying a wrong source, so double entry would not detect it [1]; a wrong number that happens to be valid for someone else would pass the lookup [1]; it takes more effort from the customer and may put some off [1]. Conclusion: it is a strong approach for important data, and a check digit or a name-matching check would add further protection [1]. Any six marks. **[6]**

## Where marks are usually lost

- Saying validation proves that data is correct.
- Using double entry or visual checking as examples of validation.
- Showing only the answer to a check digit calculation and not the working.
- Mixing up hash totals and control totals.
- Naming a check without saying what it tests in the given scenario.
