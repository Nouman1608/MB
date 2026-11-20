---
title: "OxfordAQA A-Level Computer Science (9645): Error detection and correction -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Error Detection Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 5 – Representing data"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 5.8
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "representing-data"
  - qualification: "a-level"
    topic: "representing-data"
    subtopic: "error-detection-and-correction-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.5.8: parity bits, majority voting, checksums, how they compare and a self-test with answers."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.5.8 Error detection and correction** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (AS content in topic 3.5 Representing data). For longer worked examples, see the [error detection and correction study guide](/resources/oxfordaqa-a-level-computer-science-9645-error-detection-correction/); then practise with the [error detection and correction practice questions](/resources/oxfordaqa-a-level-computer-science-9645-error-detection-correction-practice/).

## What the specification requires

- **Describe and explain the use of** parity bits, majority voting and checksums.
- **Compare the use and effectiveness** of the three methods.

## Key terms

| Term | Meaning |
|---|---|
| Error detection | Finding out that data has been corrupted |
| Error correction | Working out what the data should have been |
| Parity bit | An extra bit that makes the number of 1s even (even parity) or odd (odd parity) |
| Majority voting | Sending each bit several times and taking the value that occurs most often |
| Checksum | A value calculated from a block of data, sent with it and recalculated to compare |
| Redundancy | Extra data added only to help detect or correct errors |

## Parity bits

**Even parity:** the total number of 1s, including the parity bit, is even. **Odd parity:** the total is odd.

Recomputed (parity bit added on the right):

| Data | 1s | Even parity bit | Odd parity bit |
|---|---|---|---|
| 0101101 | 4 | 0 | 1 |
| 1100001 | 3 | 1 | 0 |
| 1110110 | 5 | 1 | 0 |
| 0001000 | 1 | 1 | 0 |

**Checking (even parity).** Count the 1s in the received byte. Even means no error detected; odd means an error.

| Received byte | 1s | Result |
|---|---|---|
| 11010110 | 5 | Error detected |
| 01100110 | 4 | No error detected |
| 10011111 | 6 | No error detected |

Properties:

- Detects any **single-bit** error (and any odd number of errors).
- **Misses** an even number of errors (two flips cancel in the count).
- Cannot say **which** bit is wrong, so cannot correct.
- Overhead: 1 extra bit per group (about 14% for 7 data bits).

## Majority voting

Send each bit **three times**. The receiver takes the majority of each group of three.

| Data | Sent |
|---|---|
| 0110 | 000111111000 |
| 1001 | 111000000111 |

Decoding:

| Received | Groups | Result |
|---|---|---|
| 110011100111 | 110, 011, 100, 111 | 1, 1, 0, 1: 1101 |
| 101001110000 | 101, 001, 110, 000 | 1, 0, 1, 0: 1010 |

Properties:

- **Corrects** one error in each group of three.
- **Fails** if two bits in the same group are wrong (it silently gives the wrong bit).
- **Inefficient:** 200% extra data. A 40-bit message becomes 120 bits, so 80 bits are redundant.
- Useful when re-sending is impractical.

## Checksums

1. The sender calculates a value from the data using an agreed method.
2. The value is sent with the data.
3. The receiver recalculates the value and compares.
4. A mismatch means an error; the data is normally re-sent.

Simple example: add the byte values and take the remainder after dividing by 256.

| Data bytes | Sum | Checksum |
|---|---|---|
| 12, 45, 200, 17 | 274 | 18 |
| 80, 83, 19, 250 | 432 | 176 |
| 255, 255, 2 | 512 | 0 |
| 72, 101, 108, 108, 111 | 500 | 244 |

Properties:

- **Low overhead** on large blocks (one byte or a few bytes).
- Detects most errors, including several flipped bits.
- **Not guaranteed:** swapped bytes or errors that cancel can give the same sum. For 34, 17, 250, 9 (checksum 54), the swapped data 17, 34, 250, 9 also gives 54.
- Detects but does not correct.

## Comparison

| | Parity | Majority voting | Checksum |
|---|---|---|---|
| Detects | Yes, single (odd number) | Yes | Yes |
| Corrects | No | Yes (within limits) | No |
| Overhead | Low per group | Very high (200%) | Very low per block |
| Weakness | Even number of errors missed | Two errors in a group give wrong data | Some patterns (swaps) missed |
| Best for | Small groups; fast checks | Cases where re-sending is hard | Large blocks and files |

## Exam traps

- **Parity cannot correct.** It only detects.
- **Two flipped bits** can slip past a parity check.
- **Majority voting needs every bit repeated,** so it multiplies the data by three.
- **A checksum is sent with the data** and compared after recalculation.
- **Match the parity rule.** Check whether the question asks for even or odd.
- **Explain the failure case** of each method; it is a common mark.
- **Detection leads to re-sending.** Only correction avoids it.

## Quick self-test

1. What is the difference between detecting and correcting an error?
2. Give the even parity bit for 0101101.
3. Give the odd parity bit for 1100001.
4. A byte 11010110 is received using even parity. Is an error detected?
5. Why can a parity bit not correct an error?
6. Name a case when parity fails to detect errors.
7. Encode 0110 using majority voting with three copies.
8. Decode 110011100111.
9. What is the overhead of three-copy majority voting?
10. What is a checksum?
11. Calculate the checksum (sum mod 256) for 12, 45, 200, 17.
12. Give one weakness of a simple additive checksum.

### Answers

1. Detecting finds that there is an error; correcting also finds what the data should be.
2. 0.
3. 0.
4. Yes; there are five 1s, which is odd.
5. It does not show which bit is wrong.
6. When an even number of bits are flipped.
7. 000111111000.
8. 1101.
9. 200% extra data (three times as much sent).
10. A value calculated from a block of data, sent with it and recalculated to compare.
11. 274 mod 256 = 18.
12. Swapped bytes, or errors that cancel, can give the same sum.

## Next steps

- [Error detection and correction study guide](/resources/oxfordaqa-a-level-computer-science-9645-error-detection-correction/)
- [Error detection and correction practice questions](/resources/oxfordaqa-a-level-computer-science-9645-error-detection-correction-practice/)
- [Basic encryption methods revision notes](/resources/oxfordaqa-a-level-computer-science-9645-basic-encryption-methods-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.5.8 Error detection and correction.
