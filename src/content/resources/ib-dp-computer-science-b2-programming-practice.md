---
title: "IB DP Computer Science B.2: Programming -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["ib"]
topic: "B.2 -- Programming"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Computer Science"]
syllabusSeries: "First assessment 2027"
order: 4
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-b"
    subtopic: "ib-dp-computer-science-b-2"
description: "Original practice questions with full worked answers covering the three control structures, modularity, pseudocode design, and normal/boundary/erroneous test planning, for IB Diploma Programme Computer Science B.2 Programming."
author: "marlbridge-academic-team"
publishedDate: 2026-09-06
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- the IB holds copyright in its own papers. Use these alongside
> the official past papers available through your school or the IB store.

Related: [B.2 Programming study guide](/resources/ib-dp-computer-science-b2-programming/)
and [revision notes](/resources/ib-dp-computer-science-b2-programming-revision-notes/).

## Section A

**1.** Name the three basic control structures every program is built from. **[3]**

**2.** State the three categories of test data a complete test plan should include. **[3]**

**3.** State one reason a design representation (pseudocode or a flowchart) is produced before code is written. **[2]**

## Section B

**4.** Predict the output of the following pseudocode:

```
total <- 0
FOR i FROM 1 TO 5
    total <- total + i
ENDFOR
OUTPUT total
```

**[3]**

**5.** A program stores a list of 10 student names and needs to check whether a given name is present.

**(a)** State one appropriate data structure for storing the 10 names. **[1]**
**(b)** Outline, in pseudocode or plain steps, an approach to check whether a given name is in the list. **[3]**

**6.** A function is written to calculate the area of a rectangle, taking width and height as inputs and returning the area.

**(a)** Explain one benefit of writing this as a separate function rather than as inline code repeated wherever an area calculation is needed. **[2]**
**(b)** Which step of the computational thinking process does breaking a program into functions directly correspond to? **[1]**

## Section C

**7.** A program accepts a user's age (intended range: 0–120) and calculates their eligibility for a specific service based on age.

**(a)** Design a test plan for this program, giving one normal, one boundary, and one erroneous test value, with the expected outcome for each. **[6]**
**(b)** Explain why testing only with a normal value would leave this program insufficiently tested. **[3]**

**8.** A student submits a program for the computational solution internal assessment that runs correctly but includes no record of what test data was used or what the results were.

**(a)** Explain why this is likely to lose marks even though the program itself works. **[3]**
**(b)** Suggest what the student should have included instead. **[2]**

## Worked answers

**1.** Sequence, selection, and iteration. **[3]**

**2.** Normal (typical, expected values), boundary (values at the very edge of what is valid), and erroneous (invalid values the program should reject or handle gracefully). **[3]**

**3.** Designing the logic first, separately from syntax, reduces logic errors and directly practises the specify-decompose-abstract-test process the course is built around, rather than conflating problem-solving with syntax recall. **[2]**

**4.** The loop adds i to total for i = 1, 2, 3, 4, 5: total = 1+2+3+4+5 = **15**. **[3]** (1 mark for correctly tracing the loop, 1 mark for correct running total logic, 1 mark for the correct final output.)

**5. (a)** A one-dimensional array/list of 10 elements. **[1]**
**(b)** Iterate through each element of the list in turn, comparing it to the given name; if a match is found, report that the name is present (and may stop searching); if the end of the list is reached with no match, report that the name is not present. **[3]** (1 mark for iterating through the list, 1 mark for the comparison step, 1 mark for correctly handling both the found and not-found outcomes.)

**6. (a)** Writing it as a separate function means the area calculation logic exists in one place, so it only needs to be written and tested once, and any later correction only needs to be made in one location rather than everywhere the calculation was repeated inline. **[2]**
**(b)** The "decompose" step. **[1]**

**7. (a)** Normal: age = 30 (a typical valid value), expected outcome: program calculates eligibility normally without error. **[2]** Boundary: age = 0 or age = 120 (the extreme valid values), expected outcome: program still calculates eligibility correctly at the edge of the valid range. **[2]** Erroneous: age = -5 or age = 200 (invalid values outside the intended range), expected outcome: program rejects the input or displays an appropriate error message rather than crashing or producing a nonsensical eligibility result. **[2]**
**(b)** Testing only with a normal value confirms the program works for typical cases, but does not confirm it behaves correctly at the edges of its valid range (boundary values) or that it correctly rejects invalid input (erroneous values) rather than crashing or producing an incorrect result silently -- a program that passes only normal-value testing could still fail in real use whenever an unusual but valid, or an invalid, age is entered. **[3]**

**8. (a)** The internal assessment is scored partly on the quality of design and testing documentation, not just on whether the final program runs correctly, so a working program with no test record does not demonstrate the systematic testing process the assessment criteria specifically reward. **[3]**
**(b)** A test plan listing the normal, boundary and erroneous test data used, together with the expected outcome and the actual outcome recorded for each test, providing evidence that testing was systematic rather than incidental. **[2]**

## Where marks are usually lost

Predicting a loop's output by miscounting how many times the loop body executes, particularly off-by-one errors at the loop's start or end value. Designing a test plan that covers only normal values, omitting boundary and erroneous cases entirely. Describing what a function does without explaining the specific benefit of modularity (reusability, isolated testing, single point of correction) the question is asking for. Treating a working program as sufficient evidence of quality for the internal assessment, without the accompanying design and test documentation the assessment criteria require.

## Official syllabus

International Baccalaureate Organization, *Diploma Programme Subject Brief -- Sciences: Computer
Science*, first assessment 2027, © 2024 -- the same source already cited by the [B.2 Programming study
guide](/resources/ib-dp-computer-science-b2-programming/) and [revision
notes](/resources/ib-dp-computer-science-b2-programming-revision-notes/).
