---
title: "Cambridge A Level Information Technology (9626): Checking the accuracy of data"
resourceType: "study-guides"
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
description: "Cambridge 9626 IT section 1.4 study guide: nine validation checks, five verification methods, the difference between them and why both are needed, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide teaches **section 1.4 Checking the accuracy of data** of Topic 1 Data processing and information in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is AS Level content, examined in Paper 1 Theory, and the same checks are applied in the practical papers when you build spreadsheet and database validation (sections 8.1 and 10.1). The [Data processing and information overview](/resources/a-level-cambridge-ict-data-processing-and-information/) lists the checks; this page shows how each one works, with calculated examples. Use it with the [checking the accuracy of data practice questions](/resources/cambridge-a-level-ict-9626-checking-the-accuracy-of-data-practice/).

## What section 1.4 covers

| Syllabus point | What you must be able to do |
|---|---|
| Validation | Describe and apply presence, range, type, length, format, check digit, lookup, consistency and limit checks |
| Verification | Describe and apply visual checking and double data entry, parity check, checksum, hash total and control total |
| Difference | Explain how validation differs from verification |
| Need for both | Explain why using only one is not enough |
| Evaluation | Give advantages and disadvantages of validation and verification |

## Validation and verification in one sentence each

**Validation** is an automatic check that data is **reasonable and allowed**: it is sensible, complete and in the right form. It does not prove the data is correct.

**Verification** is a check that data has been **copied or transferred accurately**: what was entered or sent matches the original.

Example: a customer types their age as 34 when it is really 43. Validation will accept 34 because it is a sensible age. Only verification, or a check against the true record, would show that something is wrong.

## Validation checks

### Presence check

Checks that a **required field is not left empty**. Example: an order form will not submit unless a delivery address is entered. It does not check that the address is real, only that something has been typed.

### Range check

Checks that a number or date lies **between a lower and an upper limit**. Example: a mark for a test out of 60 must be between 0 and 60 inclusive. A value of 75 or -2 is rejected.

### Limit check

Checks a value against **one boundary only**, either a minimum or a maximum. Example: the quantity of tickets booked must be at most 8, or a person's age must be at least 16. The difference from a range check is that a range check has **two** boundaries and a limit check has **one**.

### Type check

Checks that data is of the **correct data type**. Example: a field for the number of items must hold a whole number, so `7` is accepted but `seven` and `7.5` are rejected.

### Length check

Checks that the **number of characters** is correct, either an exact number or within a minimum and maximum. Example: a mobile number field requires exactly 11 digits, and a password must be at least 8 characters.

### Format check

Checks that data follows a **set pattern** of letters and digits. Example: a product code must be two letters, then four digits, such as `BK2045`. `B2045K` is rejected, although it has the right length.

### Lookup check

Checks that data **matches one of a stored list of valid values**. Example: a "country" field accepts only items from a drop-down list or a table of valid countries. It prevents spelling variations.

### Consistency check

Checks that **two or more fields agree with each other**. Example: a booking form where the return date must be later than the departure date, or a form that says "Under 18" must not also contain a date of birth that makes the person 40.

### Check digit

A **check digit** is an extra digit added to the end of a code, calculated from the other digits. When the code is entered, the computer repeats the calculation and compares. It detects typing errors such as a wrong digit or two digits swapped, and is used on barcodes, library cards and account numbers.

### Worked example 1: a modulus 11 check digit

A company uses a four-digit product code with a check digit added at the end. The rule is:

1. Multiply the digits by the weights 5, 4, 3 and 2.
2. Add the results and find the remainder when the total is divided by 11.
3. The check digit is 11 minus the remainder, and if the answer is 11 the check digit is 0.

**Create the check digit for 4172.**
- 4 × 5 = 20, 1 × 4 = 4, 7 × 3 = 21 and 2 × 2 = 4.
- The total is 20 + 4 + 21 + 4 = 49.
- 49 divided by 11 leaves a remainder of 5, since 11 × 4 = 44.
- The check digit is 11 − 5 = 6, so the full code is **41726**.

**Validate an entry of 41276.** The user has swapped the digits 7 and 2, which should read 41726.
- The first four digits are 4, 1, 2, 7: 4 × 5 = 20, 1 × 4 = 4, 2 × 3 = 6 and 7 × 2 = 14.
- The total is 20 + 4 + 6 + 14 = 44. The remainder after dividing by 11 is 0, so the calculated check digit is 11 − 0 = 11, which becomes 0.
- The entered check digit is 6, which does not match 0. The code is **rejected**.

The data entered was a sensible 5-digit number, so only a check digit would catch this type of mistake.

### Why validation does not guarantee accuracy

A value can pass every validation check and still be wrong. If a user types 18 instead of 19 for a person's age, every range, type and length check will pass. Validation reduces the number of errors; it cannot remove them.

## Verification methods

### Visual checking

The person who entered the data **reads it back and compares it with the source** on screen or on paper. It is simple and needs no extra software, but it is slow, and the person tends to miss their own mistakes.

### Double data entry

The data is **entered twice**, by the same person or by two different people, and the computer compares the two entries. Any difference is flagged for correction. Passwords and email addresses are often entered twice when creating an account. It is more reliable than visual checking but takes twice as long.

### Parity check

A **parity bit** is added to each group of bits (such as a byte) so the number of 1s is always even (**even parity**) or always odd (**odd parity**). The receiver counts the 1s. If the parity is wrong, an error occurred in transmission.

**Worked example 2: even parity.** The seven data bits are `1011001`. They contain four 1s, which is already even, so the parity bit is 0 and the byte sent is `01011001`.

If one bit changes in transit and the receiver gets `01011101`, it contains five 1s, which is odd. The receiver knows there is an error and asks for the data again.

**Limitation.** If **two** bits change, the number of 1s is still even. For example, `01011001` could arrive as `01010101` (four 1s) and the error would not be detected. Parity also cannot show **which** bit is wrong.

### Checksum

A **checksum** is a value calculated from a block of data using an agreed method. It is sent with the data. The receiver repeats the calculation and compares the results. A difference means the data was changed or damaged. It is widely used when downloading files.

**Worked example 3: a simple checksum.** Four bytes with the values 200, 150, 90 and 30 are sent. The checksum method adds them and takes the remainder when divided by 256.
- 200 + 150 + 90 + 30 = 470.
- 470 − 256 = 214, so the checksum is **214**.
- The receiver adds the bytes it receives. If its checksum is not 214, the data has been corrupted.

### Hash total

A **hash total** is the sum of a field of data that **has no meaning when added** (such as account numbers). It is not a real quantity; it is only used to check that no records have been lost, duplicated or changed.

**Worked example 4.** Three account numbers are 10234, 20567 and 30891. Their hash total is 10234 + 20567 + 30891 = **61692**. After the file is transferred, the computer recalculates the hash total. If it differs from 61692, a record has been changed.

### Control total

A **control total** is the sum of a field that **does have meaning**, such as the amounts of invoices. It is calculated before processing and compared afterwards.

**Example.** Four invoices are for 125, 240, 75 and 310 pounds. The control total is **750 pounds**. If the system reports a total of 700 after entry, an invoice was missed or mistyped.

The difference between hash and control totals is **meaning**: you could sensibly use a control total in a report, but never a hash total.

## Validation versus verification

| Feature | Validation | Verification |
|---|---|---|
| Question answered | Is the data sensible and allowed? | Is the data identical to the original? |
| Carried out by | The computer, automatically | A person or a computer comparing two copies |
| Detects | Impossible, missing or wrongly formatted data | Transcription and transmission errors |
| Cannot detect | A sensible but wrong value | A value that is wrong at source but copied correctly |
| Examples | Range check, format check, check digit | Double entry, parity, checksum, hash total |

## The need for both

Neither method alone finds every error.
- A value that is **copied exactly but is nonsense** (an age of 340 typed into the source form) passes verification but fails validation.
- A value that is **sensible but mistyped** (34 instead of 43) passes validation but fails verification.

Using both gives the best chance of accurate data. A good system validates each entry as it is typed and then verifies critical data, such as bank account numbers.

## Advantages and disadvantages

**Validation.** Advantages: fast and automatic; consistent; stops impossible data entering the system; gives immediate error messages so the user can correct the entry. Disadvantages: does not prove data is correct; rules must be designed and tested; strict rules can reject genuine unusual values; extra programming effort.

**Verification.** Advantages: finds transcription and transmission errors; double entry catches typing errors that validation cannot. Disadvantages: double entry and visual checking are slow and costly; people can repeat the same mistake or miss errors; parity cannot detect two-bit errors; checksums add processing time.

## Common mistakes

- Saying validation "checks that data is correct". It checks that data is **reasonable**.
- Describing a check without an example of a valid and invalid entry.
- Mixing up a **range check** (two limits) with a **limit check** (one limit).
- Confusing a **hash total** with a **control total**: only the control total is a meaningful quantity.
- Saying a parity check can correct errors. It only detects a single-bit error.

## Exam technique

- **Describe** a check: say what it tests, then give an example of data that passes and data that fails.
- **Explain the need for both**: show that each one catches an error that the other misses.
- When a question gives a field (for example a date of birth or a product code), choose the **most suitable** check and say why. A format check suits a code with a fixed pattern; a lookup check suits a field with a fixed list of choices.
- In calculations, **show each step** so method marks can be given.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 1 Data processing and information, section 1.4 Checking the accuracy of data.
