---
title: "OxfordAQA A-Level Computer Science (9645): Error detection and correction -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Error Detection Practice"
resourceType: "practice-questions"
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
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.5.8: parity bits, majority voting and checksums, with calculations and comparisons, with answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and practice on this content. They are **not** reproduced past-paper questions, and they do **not** replicate the exam's exact structure, question count or mark tariffs -- examination boards hold copyright in their own papers. Use these alongside the official past papers from your board or school.

These questions practise sub-topic **3.5.8 Error detection and correction** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: parity bits, majority voting, checksums and their comparison. A parity bit is added to the right of the seven data bits.

Related pages: [error detection and correction study guide](/resources/oxfordaqa-a-level-computer-science-9645-error-detection-correction/) · [error detection and correction revision notes](/resources/oxfordaqa-a-level-computer-science-9645-error-detection-correction-revision-notes/)

## Section A

**1.** State the difference between error detection and error correction. **[2]**

**2.** Give the even parity bit for the data 0101101 and the odd parity bit for the data 1100001. **[2]**

**3.** State what is meant by a checksum. **[2]**

## Section B

**4.** A system uses even parity. Three bytes (seven data bits plus one parity bit) are received: 11010110, 01100110 and 10011111.

**(a)** State, for each byte, whether an error is detected. **[3]**
**(b)** Explain why a parity bit cannot correct the error in a byte where one is detected. **[1]**
**(c)** Give an example of a byte that is sent, and the byte received, where errors are present but the parity check is passed, and explain why this can happen. **[2]**

**5.** Each bit of the message 0110 is sent three times (majority voting).

**(a)** Write down the bits that are sent. **[2]**
**(b)** The bits 000111011000 are received. State the decoded message and say whether errors were corrected. **[3]**
**(c)** State the number of bits sent for a 40-bit message and calculate the overhead as a percentage. **[2]**

**6.** A receiver gets the bits 110011100111 using three-copy majority voting. Decode the message. **[3]**

**7.** Explain why majority voting fails if two bits in the same group of three are wrong. Give an example. **[3]**

**8.** A checksum is calculated by adding the byte values and taking the remainder after dividing by 256. Data bytes 12, 45, 200 and 17 are sent.

**(a)** Calculate the checksum. **[2]**
**(b)** The receiver gets 12, 45, 201 and 17 with the checksum from (a). Show how the error is detected. **[2]**
**(c)** Explain why the checksum would not detect the bytes 45, 12, 200 and 17 arriving in a different order. **[2]**

**9.** Compare parity bits, majority voting and checksums. In your answer discuss what each can do, the extra data needed and one weakness of each. **[6]**

**10.** A space probe sends data to Earth. Re-sending data takes several hours.

**(a)** Explain why majority voting may be more suitable than a checksum for this data. **[2]**
**(b)** State **one** disadvantage of using majority voting. **[1]**

## Answers

**1.** Detection **finds out that** an error has occurred [1]; correction **works out what the data should have been** (and restores it) [1]. **[2]**

**2.** 0101101 has four 1s, so the even parity bit is **0** [1]. 1100001 has three 1s (odd), so the odd parity bit is **0** [1]. **[2]**

**3.** A value **calculated from a block of data** by an agreed method [1], sent with the data and **recalculated by the receiver and compared** to detect corruption [1]. **[2]**

**4. (a)** 11010110 has five 1s: **error detected**; 01100110 has four 1s: **no error detected**; 10011111 has six 1s: **no error detected** [3: one for each correct]. **[3]**
**(b)** The parity bit only shows that an error occurred, **not which bit** is wrong [1]. **[1]**
**(c)** Example: 01100110 is sent but 01010110 is received (the third and fourth bits are flipped) [1]. The count of 1s is still four, because an **even number of flips** leaves the parity unchanged, so the check passes [1]. **[2]**

**5. (a)** 0 sent as 000, 1 as 111, 1 as 111, 0 as 000 [1]: **000111111000** [1]. **[2]**
**(b)** The groups are 000, 111, 011, 000 [1]. The majority values are 0, 1, 1, 0 [1], so the decoded message is **0110**, and one error (in the third group) was corrected [1]. **[3]**
**(c)** 40 × 3 = **120** bits [1]; the redundant 80 bits are an overhead of **200%** [1]. **[2]**

**6.** Groups: 110, 011, 100, 111 [1]. Majority values: 1, 1, 0, 1 [1]. Decoded message: **1101** [1]. **[3]**

**7.** The receiver takes the majority of each group [1]. If two of the three bits are wrong, the wrong value is the majority [1], so the wrong bit is chosen and no error is reported. Example: 111 received as 010 decodes as 0 [1]. **[3]**

**8. (a)** 12 + 45 + 200 + 17 = 274 [1]; 274 mod 256 = **18** [1]. **[2]**
**(b)** The new sum is 12 + 45 + 201 + 17 = 275 [1]; 275 mod 256 = 19, which differs from the checksum 18, so the error is detected [1]. **[2]**
**(c)** Addition gives the **same sum** whatever order the bytes are in [1], so the recalculated checksum is still 18 and the error is not detected [1]. **[2]**

**9.** Any six points [1 each], up to two per method. Parity bits: detect single-bit errors [1]; only 1 extra bit per group [1]; cannot correct and miss an even number of flipped bits [1]. Majority voting: can correct errors without re-sending [1]; sends each bit three times, 200% extra [1]; fails when two bits in a group are wrong [1]. Checksums: detect most errors in a large block [1]; only a few extra bytes [1]; cannot correct, and some changes such as swapped bytes are missed [1]. **[6]**

**10. (a)** Majority voting can **correct** errors at the receiver [1], so the data need not be re-sent, which would cost hours; a checksum only detects errors and so would require a re-send [1]. **[2]**
**(b)** Any one [1]: it sends **three times as much data**; it still fails if two bits in a group are wrong; it uses more bandwidth and transmission time. **[1]**

## Frequently asked questions

**Can parity detect two flipped bits?**
Not reliably. If two bits flip, the number of 1s keeps the same parity, so the check passes.

**Does a checksum have to be a sum?**
No. A checksum is any value calculated from the data by an agreed method; adding the bytes is the simplest example.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.5.8 Error detection and correction.
