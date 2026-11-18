---
title: "Cambridge A Level Computer Science (9618): Data Integrity -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 6: Security, privacy and data integrity"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 6.2
syllabusTopics:
  - qualification: "a-level"
    topic: "security-privacy-and-data-integrity"
    subtopic: "data-integrity"
description: "Condensed notes on validation checks, check digits, visual checks, double entry, parity and checksums for Cambridge AS Computer Science 9618 section 6.2, with a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **6.2 Data Integrity** (AS content, Paper 1). The [Data Integrity study guide](/resources/cambridge-a-level-computer-science-9618-data-integrity/) has the full explanations, pseudocode and worked examples; the [Data Integrity practice questions](/resources/cambridge-a-level-computer-science-9618-data-integrity-practice/) give exam-style practice. For 6.1, see the [Data Security revision notes](/resources/cambridge-a-level-computer-science-9618-data-security-revision-notes/).

## The two ideas

- **Validation**: the computer checks that data is **reasonable and allowed**, using rules. It cannot tell whether the data is correct.
- **Verification**: data is compared with its **original** to check it was entered or transferred without change.
- Both protect **integrity** (data that is accurate, complete and consistent); neither guarantees it.

## Validation checks

| Check | Tests | Pseudocode idea |
|---|---|---|
| Range | Between two limits | `Mark >= 0 AND Mark <= 100` |
| Limit | One limit only | `Quantity >= 1` |
| Length | Number of characters | `LENGTH(Code) = 6` |
| Format | Pattern of characters | Check each `MID(Code, Index, 1)` against the pattern |
| Presence | Not empty | `Name <> ""` |
| Existence | Found in a set of allowed values | Linear search of a table or array |
| Check digit | Last digit matches one calculated from the others | Recalculate and compare |

**Typical input loop:** `REPEAT ... INPUT ... UNTIL` *valid condition*. The loop must repeat while the data is **invalid**, so the UNTIL condition is the valid one.

## Check digit method (weighted)

1. Multiply each digit by its weight.
2. Add the products.
3. Find the remainder after dividing by the modulus (e.g. 10 or 11).
4. Apply the rule to get the check digit (e.g. 10 − remainder, with 10 written as 0).
5. On entry, recalculate and compare with the digit typed.

Catches: a single wrong digit; most transpositions. A weak scheme (weights 1 and 3, modulus 10) misses a swap of neighbouring digits that differ by 5.

## Verification: data entry

| Method | How | Weakness |
|---|---|---|
| Visual check | User compares screen with source document | Relies on the person spotting the error |
| Double entry | Data entered twice; computer compares the two | Slower; an identical mistake made twice is not caught |

## Verification: data transfer

| Method | How | Detects | Does not detect |
|---|---|---|---|
| Parity (byte) | Parity bit makes the number of 1s even (or odd); receiver recounts | An odd number of changed bits | An even number of changed bits; cannot locate the bit |
| Parity block | Parity bit per byte plus a parity byte for the columns | Locates a single changed bit at the failing row and column, so it can be corrected | Some patterns of several errors |
| Checksum | Value calculated from the whole block, sent with it, recalculated by receiver | Most changes to the block | Changes that leave the calculated value the same, e.g. two bytes swapped when the method is a plain sum |

If a check fails during transfer, the receiver requests that the data be sent again.

## Parity quick method

1. Decide even or odd from the question.
2. Count the 1s in each row; mark rows that break the rule.
3. Count the 1s in each column, including the parity byte; mark columns that break the rule.
4. The changed bit is where the failing row and column cross.

## Key terms

| Term | Meaning |
|---|---|
| Data integrity | Data is accurate, complete and consistent |
| Parity bit | Extra bit added to make the count of 1s even or odd |
| Parity byte | Byte whose bits give the parity of each column in a block |
| Transposition error | Two characters entered in the wrong order |
| Checksum | Value calculated from a block of data, sent with it for checking |

## Exam traps

- "Validation checks that data is correct": wrong. It checks the data is sensible.
- One boundary is a **limit** check, not a range check.
- **Existence** means "is in the list"; **presence** means "is not blank".
- A single parity bit cannot locate an error; a parity block can.
- In a REPEAT loop, the UNTIL condition is the condition for **valid** data.
- Include the parity byte when counting a column.
- Visual check and double entry are for **entry**; parity and checksum are for **transfer**. Do not mix the lists.

## Self-test

1. State the difference between validation and verification.
2. A field must contain a whole number of at least 18. Which check is this?
3. Give an example of data that passes a range check but is still wrong.
4. Which check would reject a product code that is not in the product table?
5. Write the UNTIL condition for an input loop that accepts a month from 1 to 12.
6. Using weights 1, 3, 1, 3, 1, 3 and check digit (10 − (total MOD 10)) MOD 10, find the check digit for 381604.
7. Why does double entry not catch every error?
8. A byte using even parity arrives with five 1s. What can the receiver conclude?
9. Why can a parity check on a single byte miss an error?
10. What extra information does a parity block give?
11. Describe how a checksum is used.
12. Give one limitation of a checksum that simply adds the bytes.

**Answers**

1. Validation checks that data is reasonable/allowed by rules; verification checks that data matches its original after entry or transfer.
2. Limit check.
3. Any suitable, e.g. age 34 entered instead of 43 when the range is 0 to 120.
4. Existence check.
5. `UNTIL Month >= 1 AND Month <= 12`
6. 3 + 24 + 1 + 18 + 0 + 12 = 58; 58 MOD 10 = 8; 10 − 8 = **2**.
7. If the same mistake is made both times (for example copied wrongly from the form), the two entries match.
8. An error has occurred in transmission (an odd number of bits changed), so the byte should be sent again.
9. If two bits change, the number of 1s is even again and the parity is still correct.
10. It identifies the column as well as the byte, so a single wrong bit can be located and corrected.
11. The sender calculates a value from the block and sends it; the receiver recalculates and compares; if they differ, the block is sent again.
12. If two bytes are swapped, the sum (and so the checksum) is unchanged.
