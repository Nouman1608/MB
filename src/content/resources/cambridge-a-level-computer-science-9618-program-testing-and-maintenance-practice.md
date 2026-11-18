---
title: "Cambridge A Level Computer Science (9618): Program Testing and Maintenance -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 12: Software Development"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 12.3
syllabusTopics:
  - qualification: "a-level"
    topic: "software-development"
    subtopic: "program-testing-and-maintenance"
description: "Original 9618 section 12.3 questions with answers on error types, dry runs, white-box paths, stubs, test plans, maintenance types and amending existing code."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Program Testing and Maintenance study guide](/resources/cambridge-a-level-computer-science-9618-program-testing-and-maintenance/) · [Program Testing and Maintenance revision notes](/resources/cambridge-a-level-computer-science-9618-program-testing-and-maintenance-revision-notes/)

---

## Section A

**1.** Identify the type of error in each case.

**(a)** A loop begins FOR Count ← 1 TO 10 and ends NEXT Counter. **[1]**

**(b)** A program meant to add the numbers 1 to 10 outputs 45. **[1]**

**(c)** A program stops when STR_TO_NUM is applied to the input "abc". **[1]**

**2.** Explain the difference between a test strategy and a test plan. **[2]**

**3.** State why the expected results in a test plan should be written before the tests are run. **[1]**

**4.** Name the testing method described in each case.

**(a)** A programmer explains her code line by line to the rest of the team, who look for mistakes. **[1]**

**(b)** Testers are given only the requirement specification and check the outputs for chosen inputs. **[1]**

**(c)** Selected customers use a pre-release version of the program in their own work. **[1]**

## Section B

**5.** This function should return the number of vowels in a word.

```
FUNCTION CountVowels(Word : STRING) RETURNS INTEGER
   DECLARE Count, Index : INTEGER
   DECLARE Letter : STRING
   Count ← 0
   FOR Index ← 1 TO LENGTH(Word) - 1
      Letter ← MID(Word, Index, 1)
      IF Letter = "a" OR Letter = "e" OR Letter = "i" OR Letter = "o" OR Letter = "u" THEN
         Count ← Count + 1
      ENDIF
   NEXT Index
   RETURN Count
ENDFUNCTION
```

**(a)** Dry run the function with the word "piano". State the expected result and the actual result. **[3]**

**(b)** Identify the error and write the corrected line. **[2]**

**(c)** Even after this correction, CountVowels("APPLE") returns 0. Explain why and describe an amendment that fixes it. **[2]**

**6.** A function accepts a whole-number discount from 0 to 30 per cent inclusive. Complete a test plan with **six** tests, giving the test data, the type of test data and the expected result for each. Include each type of test data. **[6]**

**7.** A module PrintPayslip calls a module CalculateTax, which has not been written yet. Describe how stub testing would allow PrintPayslip to be tested now. **[3]**

**8.** Study this pseudocode.

```
IF Age >= 18 THEN
   IF Member THEN
      Price ← 8
   ELSE
      Price ← 10
   ENDIF
ELSE
   Price ← 5
ENDIF
```

Give the smallest set of test data that would test every path in a white-box test, with the expected value of Price for each. **[3]**

**9.** Identify the type of maintenance needed in each case for a school timetable program.

**(a)** The program stops whenever a teacher's name contains an apostrophe. **[1]**

**(b)** A new government rule requires reports to be produced in a different file format. **[1]**

**(c)** Teachers ask for a feature that emails each student their timetable. **[1]**

**10.** Explain why a program needs continuing maintenance after it has been released. **[3]**

**11.** This code outputs the highest of 30 scores held in Scores[1:30]. Every score is 0 or more.

```
Highest ← -1
FOR I ← 1 TO 30
   IF Scores[I] > Highest THEN
      Highest ← Scores[I]
   ENDIF
NEXT I
OUTPUT Highest
```

Amend the code so that it also outputs the position of the highest score and the number of scores greater than 50. **[5]**

---

## Answers

**1.** **(a)** Syntax error [1].

**(b)** Logic error [1].

**(c)** Run-time error [1].

**2.** A test strategy is the overall approach to testing: which methods are used, in what order, by whom and when [1]. A test plan is the detailed list of individual tests, each with its test data and expected result [1].

**3.** So that the expected results come from the specification and not from what the program actually does, which may be wrong [1].

**4.** **(a)** Walkthrough [1].

**(b)** Black-box testing [1].

**(c)** Beta testing [1].

**5.** **(a)** Expected result: 3 (i, a, o) [1]. The loop runs for Index 1 to 4, checking p, i, a, n [1], so the actual result is 2; the final o is never checked [1].

**(b)** The loop stops one character early (a logic error) [1]. Corrected line: FOR Index ← 1 TO LENGTH(Word) [1].

**(c)** The comparisons are only with lower-case vowels, so "A" and "E" do not match [1]. Convert each letter before comparing, for example Letter ← TO_LOWER(MID(Word, Index, 1)) [1].

**6.** One mark for each correct test with data, type and expected result; all four types must appear. For example:

| Test | Data | Type | Expected result |
|---|---|---|---|
| 1 | 15 | Normal | Accepted [1] |
| 2 | 0 | Extreme | Accepted [1] |
| 3 | 30 | Extreme | Accepted [1] |
| 4 | −1 | Boundary | Rejected [1] |
| 5 | 31 | Boundary | Rejected [1] |
| 6 | "ten" | Abnormal | Rejected [1] |

**7.** A simple stub version of CalculateTax is written with the same interface (name and parameters) as the real module [1]. Instead of calculating, it returns a fixed value, such as 100.00, or outputs a message showing it was called [1]. PrintPayslip is run with the stub, and its output is checked against the result expected using the fixed value, so it can be tested before CalculateTax exists [1].

**8.** Age 20 and Member TRUE gives 8 [1]. Age 20 and Member FALSE gives 10 [1]. Age 12 (Member either value) gives 5 [1].

**9.** **(a)** Corrective [1].

**(b)** Adaptive [1].

**(c)** Perfective [1].

**10.** Any three, 1 mark each: some faults only appear when real users use the program with real data, so corrective maintenance is needed [1]; the environment changes, such as new hardware, operating systems or laws, so adaptive maintenance is needed [1]; users ask for improvements or new features over time, so perfective maintenance is needed [1]; performance may need improving as the amount of data grows [1].

**11.** Model answer:

```
Highest ← -1
Position ← 0
AboveFifty ← 0
FOR I ← 1 TO 30
   IF Scores[I] > Highest THEN
      Highest ← Scores[I]
      Position ← I
   ENDIF
   IF Scores[I] > 50 THEN
      AboveFifty ← AboveFifty + 1
   ENDIF
NEXT I
OUTPUT "Highest: ", Highest, " at position ", Position
OUTPUT "Scores above 50: ", AboveFifty
```

Position initialised before the loop [1]; Position updated with I when a new highest is found [1]; counter initialised to 0 [1]; counter increased for each score greater than 50, checked for all 30 scores [1]; both new values output [1].

---

## Where marks are usually lost

- Giving a test value without its expected result.
- Confusing a logic error (wrong output) with a run-time error (the program stops).
- Naming beta testing for in-house testing.
- Amending code so that the first element is skipped by a new counter.
