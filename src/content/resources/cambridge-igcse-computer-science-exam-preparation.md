---
title: "Cambridge IGCSE Computer Science: Paper-by-Paper Exam Preparation"
resourceType: "exam-preparation"
subject: "computer-science"
level: ["igcse"]
topic: "Exam preparation -- Papers 1 and 2"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 3
description: "How to prepare for the two Cambridge IGCSE Computer Science 0478 papers: Computer Systems and Algorithms, Programming and Logic, with timing per mark and a worked binary and trace example."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-16
reviewNote: "2026-11-16: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-16: Check the pseudocode conventions, the scenario-based question style and any pre-release or practical-skills material against the 2026-2028 syllabus; only record titles, durations, marks, weightings and topic ranges were treated as certain."
publishedDate: 2026-11-15
featured: false
---

Cambridge IGCSE Computer Science (0478, examination series 2026-2028, first assessed in 2026) has two compulsory, externally assessed written papers and is not tiered. Paper 1 Computer Systems (1 hour 45 minutes, 75 marks, 50%) covers Topics 1 to 6 with short-answer and structured questions. Paper 2 Algorithms, Programming and Logic (1 hour 45 minutes, 75 marks, 50%) covers Topics 7 to 10 with short-answer, structured and scenario-based questions. Calculators are not permitted on either paper. Revise with topic pages such as [Data Representation](/resources/data-representation-revision-notes/), [Data Transmission](/resources/data-transmission-revision-notes/) and the [Programming study guide](/resources/cambridge-igcse-computer-science-programming-study-guide/).

## How the topics map to the papers

The ten syllabus topics split cleanly. Paper 1 takes Topics 1 to 6: data representation, data transmission, hardware, software, the internet and its uses, and automated and emerging technologies. Paper 2 takes Topics 7 to 10: algorithm design and problem-solving, programming, databases and Boolean logic. Draw this split on one page and tick off each topic as you revise it, so you never discover late that a whole paper's worth of content has been skipped.

## Paper 1: Computer Systems (1 hour 45 minutes, 75 marks, 50%)

Paper 1 is 105 minutes for 75 marks, or 105 / 75 = 1.4 minutes per mark. Because calculators are not allowed, conversions between binary, denary and hexadecimal must be done by hand, so practise them until they are routine. Short-answer questions reward exact vocabulary: learn the terms in the study guides on [software](/resources/cambridge-igcse-computer-science-software-study-guide/) and [the internet and its uses](/resources/cambridge-igcse-computer-science-the-internet-and-its-uses-study-guide/), and be ready to apply them to a described situation.

## Paper 2: Algorithms, Programming and Logic (1 hour 45 minutes, 75 marks, 50%)

Paper 2 is also 105 minutes for 75 marks, 1.4 minutes per mark. It tests whether you can design, read and correct algorithms and use logic. Practise writing and tracing code by hand, since no computer is available. The pages on [algorithm design and problem-solving](/resources/cambridge-igcse-computer-science-algorithm-design-and-problem-solving-study-guide/), [databases](/resources/cambridge-igcse-computer-science-databases-study-guide/) and [Boolean logic](/resources/cambridge-igcse-computer-science-boolean-logic-study-guide/) cover the other Paper 2 areas. Scenario-based questions describe a situation and ask you to apply a design or a program fragment to it, so read the scenario for the data it names.

## A revision routine that suits both papers

Split each revision week between recall and application. For recall, write a one-page summary of a topic from memory, then compare it with your notes and mark the gaps. For application, take one Paper 1 style question (a description or explanation) and one Paper 2 style question (writing, tracing or correcting an algorithm) every session, and time both. Keep a log of mistakes by topic number, so that repeated slips, such as off-by-one errors in loops or confusing a bit with a byte, are visible and fixed before the exam.

## Timing and marks per minute

- Paper 1: 105 minutes / 75 marks = 1.4 minutes per mark.
- Paper 2: 105 minutes / 75 marks = 1.4 minutes per mark.
- Both papers: 105 + 105 = 210 minutes for 75 + 75 = 150 marks.

A 6-mark question deserves about 8 minutes. If you are 15 minutes behind that pace at the halfway point, shorten extended answers and return to unfinished parts at the end.

## Command words and question styles

"State" and "give" want a short fact. "Describe" wants a sequence of linked points. "Explain" wants a reason. "Complete" asks you to fill gaps in a table, trace or diagram. "Write" and "design" ask you to produce an algorithm or code. "Identify" and "correct" ask you to find and fix a fault. Use the vocabulary of the syllabus: "the data is stored" is weaker than a precise term. Check the syllabus for the exact definitions Cambridge uses.

## Worked practice scenario

Original question, part (a): "Convert the denary number 45 to binary and to hexadecimal." Part (b): "Convert the 8-bit binary number 10110110 to denary and hexadecimal." Part (c): "Complete a trace table for the loop below."

```
total <- 0
FOR n <- 1 TO 5
    total <- total + n * n
NEXT n
OUTPUT total
```

Working without a calculator:

```
(a) 45 = 32 + 8 + 4 + 1 -> 0010 1101 -> binary 101101, hex 2D
(b) 10110110 = 128 + 32 + 16 + 4 + 2 = 182
    Split into nibbles: 1011 = B, 0110 = 6 -> hex B6
(c) n: 1  2  3   4   5
    total: 1  5  14  30  55    Output: 55
```

Check (b): B6 = 11 x 16 + 6 = 176 + 6 = 182, so the two answers agree. In (c), 1 + 4 + 9 + 16 + 25 = 55. The trace shows one row per iteration and the final output. Pseudocode in the exam may follow Cambridge conventions, so check the syllabus's pseudocode guide and practise in that style.

## Before/during exam checklist

- Draw the topic-to-paper map: Topics 1 to 6 on Paper 1, Topics 7 to 10 on Paper 2.
- Practise number conversions by hand until they are quick.
- Write and trace algorithms on paper, not just on a computer.
- Learn precise terms for hardware, software and networking.
- Read scenario questions for the named data and constraints.
- Practise full timed papers at 1.4 minutes per mark.
- Do not rely on a calculator; none is permitted.
- Check each trace table row and each answer by a second method.

## Self-test

1. Which topics are examined on Paper 2?
2. What is the weighting of each paper?
3. How many minutes per mark does Paper 1 allow?
4. What is 10110110 in hexadecimal?
5. What does the loop in the worked scenario output?

**Answers:** 1. Topics 7 to 10: algorithm design and problem-solving, programming, databases and Boolean logic. 2. 50% each. 3. 105 / 75 = 1.4 minutes per mark. 4. B6. 5. 55.

## Frequently asked questions

**How many papers are there in Cambridge IGCSE Computer Science 0478?**
Two compulsory papers: Paper 1 Computer Systems and Paper 2 Algorithms, Programming and Logic. The qualification is not tiered.

**How long are the papers?**
Each is 1 hour 45 minutes and 75 marks, and each is 50% of the qualification.

**Can I use a calculator?**
No. Calculators are not permitted on either paper.

**Which topics are on which paper?**
Paper 1 covers Topics 1 to 6, and Paper 2 covers Topics 7 to 10.

**Is IGCSE 0478 the same as O Level 2210?**
The record notes that the structure is identical to O Level 2210 by design, since the syllabus states that textbooks endorsed for 0478 are suitable for 2210 as well.

*Written against Cambridge IGCSE Computer Science 0478 (assessment structure verified 2026-08-27). The worked scenario is an original example, not a reproduction of any official past or sample paper question. Always check the current specification for your examination year at [Cambridge International website](https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf).*
