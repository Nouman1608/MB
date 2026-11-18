---
title: "Cambridge A Level Computer Science (9618): Data Integrity"
resourceType: "study-guides"
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
description: "Validation checks in pseudocode, check digits, double entry, parity blocks and checksums worked through for Cambridge AS Computer Science 9618 6.2."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers **6.2 Data Integrity** in the Cambridge International AS & A Level Computer Science 9618 syllabus. It is AS content, examined on Paper 1, and the validation checks also appear in Paper 2 algorithms. The [Security, privacy and data integrity study guide](/resources/cambridge-a-level-computer-science-security-privacy-and-data-integrity-study-guide/) gives an overview of all of Topic 6; this page concentrates on 6.2, with each check written in pseudocode and new worked examples for check digits, parity and checksums. Condensed notes are in the [Data Integrity revision notes](/resources/cambridge-a-level-computer-science-9618-data-integrity-revision-notes/), and the [Data Integrity practice questions](/resources/cambridge-a-level-computer-science-9618-data-integrity-practice/) let you test yourself.

## What 6.2 asks you to do

- describe how **validation** and **verification** help protect the integrity of data
- describe and use validation methods: range check, format check, length check, presence check, existence check, limit check and check digit
- describe and use verification methods during **data entry** (visual check, double entry) and during **data transfer** (parity check, byte and block, and checksum).

"Describe and use" means you may have to apply a check to given data or write it as an algorithm, not just name it.

## Validation versus verification

| | Validation | Verification |
|---|---|---|
| Question it answers | Is the data reasonable and allowed? | Is the data the same as the original? |
| Carried out by | The computer, automatically, using rules | Comparing two copies: by a person, by the computer, or by the receiver of a transmission |
| Example | Rejects 14 as a month | Detects that 0612 was typed as 0621 |

Neither proves data is **correct**. A date of birth of 03/05/2009 can pass every validation check and match the form it was copied from, and still be wrong if the form itself was filled in wrongly. Together, though, they remove most of the errors that occur while data is entered and moved.

## The validation checks

| Check | Rule | Example of rejected data |
|---|---|---|
| Range | Value lies between a lower and an upper limit | Exam mark 104 when marks are 0 to 100 |
| Limit | Value is on the correct side of **one** boundary | Quantity 0 when it must be at least 1 |
| Length | Number of characters is exactly, or within, a set amount | Seven-character code when it must be six |
| Format | Characters follow a pattern | "7HK2" when the pattern is two letters then two digits |
| Presence | Something has been entered | Empty surname field |
| Existence | Value exists in a set of allowed values, such as a table or file | Product code not found in the product table |
| Check digit | Final digit, calculated from the others, is correct | Code with two digits swapped |

The difference between **range** and **limit** is a favourite exam point: a range check has two boundaries, a limit check has one.

### Validation in pseudocode

A range check usually repeats the input until it is acceptable:

```
REPEAT
   OUTPUT "Enter mark (0 to 100)"
   INPUT Mark
UNTIL Mark >= 0 AND Mark <= 100
```

A presence check and a length check on a six-character code:

```
IF Code = "" THEN
   OUTPUT "Code must be entered"
ELSE
   IF LENGTH(Code) <> 6 THEN
      OUTPUT "Code must be 6 characters"
   ENDIF
ENDIF
```

A format check for two capital letters followed by two digits, written as a function:

```
FUNCTION ValidFormat(Code : STRING) RETURNS BOOLEAN
   DECLARE Index : INTEGER
   DECLARE Ch : STRING
   IF LENGTH(Code) <> 4 THEN
      RETURN FALSE
   ENDIF
   FOR Index ← 1 TO 4
      Ch ← MID(Code, Index, 1)
      IF Index <= 2 THEN
         IF Ch < "A" OR Ch > "Z" THEN
            RETURN FALSE
         ENDIF
      ELSE
         IF Ch < "0" OR Ch > "9" THEN
            RETURN FALSE
         ENDIF
      ENDIF
   NEXT Index
   RETURN TRUE
ENDFUNCTION
```

An existence check is a linear search of the allowed values; if the search reaches the end without a match, the value is rejected.

## Check digits

A **check digit** is calculated from the other digits of a code and appended to it. When the code is entered, the computer recalculates the digit; if it differs, the code is rejected. Check digits are designed to catch the typing errors people make most: one wrong digit, and two digits swapped (transposition).

### Worked example 1: a weighted modulus 10 check digit

An invented scheme gives six-digit product codes a seventh check digit. Weights 1, 3, 1, 3, 1, 3 are applied from the left; the check digit is (10 − (total MOD 10)) MOD 10.

For the code **402715**:

| Digit | 4 | 0 | 2 | 7 | 1 | 5 |
|---|---|---|---|---|---|---|
| Weight | 1 | 3 | 1 | 3 | 1 | 3 |
| Product | 4 | 0 | 2 | 21 | 1 | 15 |

Total = 43. 43 MOD 10 = 3. Check digit = 10 − 3 = **7**, so the full code is **4027157**.

Suppose a clerk types **4207157** (the 0 and 2 swapped). The computer recalculates from 420715: 4 + 6 + 0 + 21 + 1 + 15 = 47, giving check digit 10 − 7 = 3. The entered check digit is 7, so the code is rejected.

This scheme does not catch every swap. Swapping the 2 and the 7 gives 407215, whose total is 33 and whose check digit is again 7, so that error would pass. Swapping two neighbouring digits changes the total by twice their difference, which is a multiple of 10 when they differ by 5. Being able to show a limitation like this is exactly what "use" a check digit means at this level.

## Verification during data entry

- **Visual check**: the person entering the data reads what is on the screen and compares it with the source document. It is quick and needs no extra software, but relies on the person noticing errors, and tired people miss them.
- **Double entry**: the data is entered twice, often by different people, and the computer compares the two versions. Any difference is flagged for checking. It catches most typing errors, but takes twice as long and still misses an error made identically both times, such as copying a wrong value from the form.

## Verification during data transfer

### Parity check on a byte

With **even** parity, the parity bit is set so that each byte contains an even number of 1s; with **odd** parity, an odd number. The receiver counts the 1s in each byte. A single changed bit makes the count wrong, so the error is detected, but the receiver cannot tell which bit changed. If **two** bits change, the count is right again and the error goes unnoticed.

### Parity block

A block of bytes is sent with a parity bit on every byte **and** a **parity byte** at the end, in which each bit is the parity of that column. A single changed bit makes one row and one column fail, and the bit at their intersection is the one to flip back.

### Worked example 2: locating an error

Even parity is used; the leftmost bit of each byte is its parity bit. The block was sent as:

| | Bit 1 | Bit 2 | Bit 3 | Bit 4 | Bit 5 | Bit 6 | Bit 7 | Bit 8 |
|---|---|---|---|---|---|---|---|---|
| Byte 1 | 0 | 1 | 0 | 0 | 1 | 1 | 0 | 1 |
| Byte 2 | 1 | 0 | 1 | 1 | 0 | 0 | 1 | 0 |
| Byte 3 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 1 |
| Byte 4 | 1 | 0 | 0 | 0 | 1 | 0 | 1 | 1 |
| Parity byte | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 |

Byte 3 arrives as **01111001**. The receiver finds:

- Byte 3 now has five 1s, which is odd, so the error is in **byte 3**.
- Column 5 now holds 1, 0, 1, 1 in the four bytes and 0 in the parity byte, which is three 1s, an odd number, so the error is in **bit 5**.
- Every other row and column is still even.

Flipping byte 3, bit 5 back to 0 restores 01110001.

### Checksum

The sender calculates a value from all the data in a block using an agreed method and sends it with the block. The receiver performs the same calculation; if its result differs from the checksum received, the block is requested again. A simple method adds the byte values and keeps the remainder after dividing by 256, so the result fits in one byte. For the invented bytes 200, 150, 75 and 40 the sum is 465, and 465 MOD 256 = **209**. One limitation of this simple method: if two bytes are swapped in transit the sum is unchanged, so the error is not detected.

## Common mistakes

- Saying validation checks that data is correct. It checks that data is reasonable or allowed.
- Using "range check" for a single boundary; that is a limit check.
- Confusing an existence check (in a list of allowed values) with a presence check (not empty).
- Claiming a parity check can locate the error in a single byte. Only a parity block can locate it.
- Forgetting that two bit errors in one byte cancel out.
- Describing double entry as "checking it twice" without saying that the computer compares the two entries.

## Exam technique

For **describe** questions, give what the check tests plus an example of data it would reject, using the field in the question. For **use** questions, show every step: the weighted products, the total, the remainder. In parity questions, state which row and which column fail, and why, before naming the bit.
