---
title: "Cambridge IGCSE Computer Science (0478): Methods of error detection -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 2: Data transmission"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 2.2
syllabusTopics:
  - qualification: "igcse"
    topic: "data-transmission"
    subtopic: "methods-of-error-detection-0478"
description: "Condensed Cambridge IGCSE Computer Science 0478 notes on parity checks and blocks, checksums, echo checks, check digits and ARQ, with a 12-question self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense **2.2 Methods of error detection** from Topic 2, Data transmission, of the Cambridge IGCSE
Computer Science 0478 syllabus for 2026 to 2028 (Paper 1, Computer systems). For worked examples, read the
[Methods of error detection study guide](/resources/cambridge-igcse-computer-science-0478-methods-of-error-detection/),
then try the
[Methods of error detection practice questions](/resources/cambridge-igcse-computer-science-0478-methods-of-error-detection-practice/).
The whole topic is summarised in the [Data Transmission revision notes](/resources/data-transmission-revision-notes/).

## Why check for errors?

- Data can be corrupted during transmission, mainly by **interference**.
- Types of error: **data loss** (bits missing), **data gain** (extra bits), **data change** (bits flipped).
- One wrong bit can change a value, a character or an instruction, so errors must be detected and the data resent.

## Parity check

- Sender and receiver agree **odd** or **even** parity.
- A **parity bit** is set so the total number of 1s in the byte (including the parity bit) is odd or even.
- Receiver counts the 1s; the wrong total → **error**.

```
data 1100101 (four 1s)  even parity → bit 0 → 01100101
                        odd parity  → bit 1 → 11100101
```

| Strength | Weakness |
|---|---|
| Simple and quick | Two flipped bits (any even number) are not detected |
| Detects any single flipped bit | Does not show which bit is wrong |

## Parity block check

- Several bytes sent as a **block**; each byte has a parity bit.
- A **parity byte** is added: each of its bits is the parity bit for one **column**.
- One wrong bit → one row **and** one column have the wrong parity → the error is where they cross.

**Method: locating the error**

```
Step 1  count 1s in each byte (row) → find the row with the wrong parity
Step 2  count 1s in each column, including the parity byte → find the wrong column
Step 3  error = that row, that column; flip it to correct a single-bit error
```

## Checksum

```
sender: calculate a value from the data (agreed method) → send data + checksum
receiver: recalculate with the same method → compare
match → accept;  no match → error → request the data again
```

## Echo check

```
receiver sends the received data back → sender compares with the original
different → error → resend
```

Weakness: cannot tell whether the error was on the way there or on the way back; doubles the data sent.

## Check digit (data entry, not transmission)

- Extra digit at the end of a number, **calculated from the other digits**.
- Detects **data-entry errors**: a wrong digit, digits swapped (transposed), a digit missed out.
- Examples: **ISBN** and **bar codes**.

**ISBN-13 method**

```
weights 1, 3, 1, 3 ... for the first 12 digits → multiply → add
check digit = number that brings the total up to the next multiple of 10
(if the total is already a multiple of 10, the check digit is 0)
on entry: recalculate; mismatch → number entered wrongly
```

## ARQ (automatic repeat query)

```
send data + start timer
receiver checks data
  no error → POSITIVE acknowledgement
  error    → NEGATIVE acknowledgement → sender resends
no acknowledgement before TIMEOUT → sender resends automatically
repeat until positive acknowledgement received
```

## Key terms

| Term | Meaning |
|---|---|
| Interference | Disturbance that corrupts the signal during transmission |
| Parity bit | Extra bit making the number of 1s odd or even |
| Parity byte | Extra byte holding the parity bit for each column of a block |
| Parity block check | Using row and column parity to locate a wrong bit |
| Checksum | Value calculated from the data, sent and recalculated for comparison |
| Echo check | Received data returned to the sender for comparison |
| Check digit | Digit calculated from the others to detect data-entry errors |
| Acknowledgement | Message from receiver confirming (positive) or rejecting (negative) data |
| Timeout | Time limit after which unacknowledged data is resent |

## Exam traps

- "A parity check finds which bit is wrong": only a parity **block** can locate it.
- Forgetting that two flipped bits pass a single parity check.
- Not counting the parity bit when checking.
- Calling a check digit a transmission method.
- ARQ answers with no **timeout**.
- Echo check described as the **sender** sending the data twice.

## Quick self-test

1. Name three ways data can be affected by an error during transmission.
2. What is the main cause of transmission errors?
3. Using even parity, what is the parity bit for 0110111?
4. Using odd parity, is 10110110 correct?
5. Why can a single parity bit fail to detect an error?
6. What extra item does a parity block check add?
7. How does a receiver use a checksum?
8. Give one weakness of an echo check.
9. Give two examples of where check digits are used.
10. Name a type of error a check digit can detect.
11. What does a negative acknowledgement cause in ARQ?
12. What happens in ARQ if the timeout is reached?

### Answers

1. Data loss, data gain, data change.
2. Interference.
3. 0110111 has five 1s; even parity needs an even total, so the parity bit is **1**.
4. It has five 1s, an odd total, so it is correct for odd parity.
5. If an even number of bits (for example two) are changed, the count still has the right parity.
6. A parity byte (a parity bit for each column).
7. It recalculates the checksum from the received data and compares it with the one sent; a mismatch shows an error.
8. It cannot tell whether the error was on the outward or return journey (or it doubles the data sent).
9. ISBNs and bar codes.
10. A wrong digit, or two digits transposed.
11. The sender resends the data.
12. The sender assumes the data was lost and resends it.

## Official syllabus

Cambridge IGCSE Computer Science 0478 syllabus for 2026, 2027 and 2028 (Cambridge International) -- Topic 2 Data
transmission, 2.2 Methods of error detection.
