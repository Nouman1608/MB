---
title: "OxfordAQA A-Level Computer Science (9645): Error detection and correction"
seoTitle: "OxfordAQA A-Level CS 9645 Error Detection Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.5.8 in depth: parity bits, majority voting and checksums, worked examples, and comparing how effective each method is."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.5.8 Error detection and correction** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.5 Representing data (AS). The specification asks you to **describe and explain the use of** three methods: **parity bits**, **majority voting** and **checksums**, and to **compare the use and effectiveness** of the three.

For quick recall use the [error detection and correction revision notes](/resources/oxfordaqa-a-level-computer-science-9645-error-detection-correction-revision-notes/), then try the [error detection and correction practice questions](/resources/oxfordaqa-a-level-computer-science-9645-error-detection-correction-practice/). The topic-level [representing data study guide](/resources/oxfordaqa-a-level-computer-science-representing-data/) covers all of section 3.5. Every example below was recomputed with a script.

## Why errors happen and what we can do

When data is stored or sent, noise, interference or faulty hardware can **flip a bit**, turning a 0 into a 1 or the reverse. A single wrong bit can change a letter, a number or an instruction. To protect data, extra information is added so that the receiver can:

- **detect** that an error has happened, and then perhaps ask for the data to be sent again; or
- **correct** the error without any resending.

Detecting is simpler than correcting. Correcting needs more redundant data.

## Parity bits

A **parity bit** is one extra bit added to a group of data bits so that the total number of 1s in the group is always **even** (**even parity**) or always **odd** (**odd parity**). Sender and receiver must agree which. The receiver counts the 1s: if the count has the wrong parity, an error has occurred.

### Worked example 1: adding parity bits

Data bits (7-bit ASCII style), with the parity bit added on the right:

| Data | Number of 1s | Even parity bit | Sent (even) | Odd parity bit | Sent (odd) |
|---|---|---|---|---|---|
| 1011001 | 4 | 0 | 10110010 | 1 | 10110011 |
| 0110100 | 3 | 1 | 01101001 | 0 | 01101000 |
| 1111111 | 7 | 1 | 11111111 | 0 | 11111110 |
| 0000000 | 0 | 0 | 00000000 | 1 | 00000001 |

For even parity: count the 1s in the data. If the count is already even, the parity bit is 0; if it is odd, the parity bit is 1.

### Worked example 2: checking received data (even parity)

| Received | Number of 1s | Result |
|---|---|---|
| 10110010 | 4 | Even, so no error detected |
| 10100010 | 3 | Odd, so an error is detected |
| 10110011 | 5 | Odd, so an error is detected (the parity bit itself was flipped) |
| 10010010 | 3 | Odd, so an error is detected |

### Strengths and weaknesses of parity

- **Simple and cheap:** it adds only one bit per group (for 7 data bits, that is 1 extra bit in 8).
- It detects **any single-bit error**, including an error in the parity bit itself.
- It detects any **odd** number of flipped bits.
- It **misses an even number** of flipped bits. If two bits flip, the count of 1s keeps the right parity and nothing is detected. For example, 10110010 changing to 10100000 still has 2 ones.
- It **cannot say which bit is wrong**, so it cannot correct the error. The data must be re-sent.

### Parity blocks

If a block of bytes is sent, a parity bit can be added to each row and an extra parity byte added for each column. A single flipped bit then produces one wrong row and one wrong column, whose crossing point identifies the bit, so it can be corrected. The specification only requires the single-bit parity idea, but the block shows how extra redundancy allows correction.

Example (even parity) for four rows of 7 bits:

| Row | Data | Row parity bit |
|---|---|---|
| 1 | 1011001 | 0 |
| 2 | 0110100 | 1 |
| 3 | 1100110 | 0 |
| 4 | 0011011 | 0 |
| Column parity bits | 0010000 | |

## Majority voting

In **majority voting**, each bit is sent **several times** (usually three) and the receiver takes the **majority** value in each group. This allows the receiver to **correct** errors, not just detect them.

### Worked example 3: encoding and decoding

Send the data 1011. Each bit is sent three times: 111 000 111 111, which is 111000111111 (12 bits for 4 data bits).

| Received | Groups | Majority of each | Decoded | Comment |
|---|---|---|---|---|
| 111000111111 | 111, 000, 111, 111 | 1, 0, 1, 1 | 1011 | No errors |
| 111000111110 | 111, 000, 111, 110 | 1, 0, 1, 1 | 1011 | One error in the last group corrected |
| 110000111101 | 110, 000, 111, 101 | 1, 0, 1, 1 | 1011 | One error in each of two groups, both corrected |
| 011000111111 | 011, 000, 111, 111 | 1, 0, 1, 1 | 1011 | One error in the first group corrected |
| 010000111111 | 010, 000, 111, 111 | 0, 0, 1, 1 | 0011 | Two errors in one group: wrong answer |

### Strengths and weaknesses of majority voting

- It can **correct** any single error in a group of three, and one error in each group.
- It **fails when two or more bits in the same group are wrong**, and then silently gives the wrong value.
- It is very **inefficient**: three times the data is sent, an overhead of 200%. A 4-bit message becomes 12 bits.
- It needs no re-sending, so it suits situations where the data cannot be requested again, such as a signal from a distant space probe.

## Checksums

A **checksum** is a value calculated from a block of data by an agreed method. The sender calculates the checksum and sends it **with** the data. The receiver recalculates the checksum from the data received and **compares** it with the one sent. If they differ, the data has been corrupted.

A simple checksum adds up the byte values and keeps the remainder after dividing by 256, so the result fits in one byte.

### Worked example 4: calculating a checksum

Data bytes 72, 101, 108, 108, 111 (the ASCII codes for Hello). The sum is 72 + 101 + 108 + 108 + 111 = 500. Dividing by 256 gives remainder **244**, so the checksum is 244.

| Data bytes | Sum | Checksum (sum mod 256) |
|---|---|---|
| 72, 101, 108, 108, 111 | 500 | 244 |
| 200, 100, 90 | 390 | 134 |
| 34, 17, 250, 9 | 310 | 54 |

### Worked example 5: checking received data

Data 34, 17, 250, 9 is sent with checksum 54. The receiver gets 34, 17, 251, 9. Its sum is 311, and 311 mod 256 = 55. The checksum 55 differs from 54, so an **error is detected**.

### Strengths and weaknesses of checksums

- They suit **large blocks** of data, so the overhead is small: one byte (or a few bytes) for a whole file or packet.
- They detect most errors, including multiple-bit errors.
- Some errors **escape detection**. If the bytes are swapped, so the data arrives as 17, 34, 250, 9, the sum is unchanged and the checksum is still 54. Two errors that cancel (one value up by 1, another down by 1) also give the same checksum.
- A basic checksum **detects but cannot correct**. If an error is found, the block must be sent again.

## Comparing the three methods

| | Parity bit | Majority voting | Checksum |
|---|---|---|---|
| Purpose | Detect | Correct | Detect |
| Extra data | 1 bit per group | 2 extra copies of every bit (200% extra) | A few bytes per block |
| Single-bit error | Detected | Corrected | Detected |
| Two-bit error | Not detected if the count stays even | Corrected if in different groups; wrong if in the same group | Usually detected |
| Re-sending needed? | Yes, if error found | Not for a single error per group | Yes, if error found |
| Typical use | Short data, serial transmission and memory | Where re-sending is impossible or very costly | Files, network packets and large blocks |
| Efficiency | Very low overhead | Very high overhead | Low overhead for large blocks |

No method is perfect. The right choice depends on the importance of the data, the cost of re-sending and the overhead that can be accepted.

## Exam technique

- **For calculating a parity bit,** state the number of 1s, the parity type and the bit added.
- **For majority voting,** write out the groups and the majority of each.
- **For checksums,** show the sum and the remainder.
- **For comparing,** say what each method can do (detect or correct), its overhead, and one weakness.
- **State clearly** whether an error is detected, corrected or missed.

## Common mistakes

- Adding the parity bit to make an odd total when even parity was specified.
- Believing parity can find which bit is wrong.
- Believing parity detects two flipped bits.
- Forgetting that majority voting repeats every bit, not just the group.
- Thinking a checksum can correct data.
- Saying checksums always find an error.

## More on this topic

- [Error detection and correction revision notes](/resources/oxfordaqa-a-level-computer-science-9645-error-detection-correction-revision-notes/)
- [Error detection and correction practice questions](/resources/oxfordaqa-a-level-computer-science-9645-error-detection-correction-practice/)
- [Basic encryption methods study guide](/resources/oxfordaqa-a-level-computer-science-9645-basic-encryption-methods/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.5.8 Error detection and correction.
