---
title: "Cambridge A Level Information Technology: Paper-by-Paper Exam Preparation"
resourceType: "exam-preparation"
subject: "ict"
level: ["a-levels"]
topic: "Exam preparation -- Papers 1, 2, 3 and 4"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
order: 3
description: "How to prepare for Cambridge A Level Information Technology 9626: two theory papers, two practical papers, timing per mark and a worked spreadsheet scenario."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-16
reviewNote: "2026-11-16: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-16: Check what tasks and software skills Papers 2 and 4 expect, and the theory question styles, against the 2025-2027 syllabus; only record titles, durations, marks and weightings were treated as certain."
publishedDate: 2026-11-15
featured: false
---

Cambridge A Level Information Technology (9626, examination series 2025-2027) has four externally assessed papers, each worth 25% of the full A Level: Paper 1 Theory (1 hour 45 minutes, 70 marks), Paper 2 Practical (2 hours 30 minutes, 90 marks), Paper 3 Advanced Theory (1 hour 45 minutes, 70 marks) and Paper 4 Advanced Practical (2 hours 30 minutes, 90 marks). Two are written theory papers and two are practical papers, so your preparation needs both knowledge and hands-on skill. Use this page with the topic pages on [Data Processing and Information](/resources/a-level-cambridge-ict-data-processing-and-information/), [Algorithms and flowcharts](/resources/a-level-cambridge-ict-algorithms-and-flowcharts/) and [Data analysis and visualisation](/resources/a-level-cambridge-ict-data-analysis-and-visualisation/).

## Three routes to the qualification

Papers 1 and 2 form the AS Level, where each is 50% of the AS. Papers 3 and 4 complete the full A Level, where each of the four papers is 25% (25 + 25 + 25 + 25 = 100). The AS Level can be a standalone qualification, or the first stage of an A Level staged over two years with the AS result carried forward, or all four papers can be taken together in the same series. Decide your route early, because it determines how much practical practice you must fit in before each sitting.

## Papers 1 and 3: the theory papers

Paper 1 Theory and Paper 3 Advanced Theory are both 1 hour 45 minutes (105 minutes) and 70 marks, so each allows 105 / 70 = 1.5 minutes per mark. Paper 3 builds on Paper 1, so do not treat the AS content as finished once Paper 1 is behind you. The theory topics include data processing, hardware and software, monitoring and control, eSecurity, the system life cycle and new and emerging technologies. Revision is most effective when you can apply a concept to a described situation: knowing a definition is not enough if the question sets a scenario.

## Papers 2 and 4: the practical papers

Paper 2 Practical and Paper 4 Advanced Practical are both 2 hours 30 minutes (150 minutes) and 90 marks, so each allows 150 / 90 = 1.67 minutes per mark (1.666...). They are assessed as practical papers, which means the marks reward what you produce with software, not what you write about it. The syllabus covers practical areas such as spreadsheets, databases, mail merge, graphics, video and audio editing, animation and programming for the web. Check the current syllabus for exactly which skills each practical paper expects, then rehearse them on a computer under timed conditions. Revision notes such as [Animation](/resources/a-level-cambridge-ict-animation/) help you recall the concepts behind a practical skill, but only repeated practice builds fluency.

## Timing and marks per minute

- Paper 1: 105 minutes / 70 marks = 1.5 minutes per mark.
- Paper 2: 150 minutes / 90 marks = 1.67 minutes per mark.
- Paper 3: 105 minutes / 70 marks = 1.5 minutes per mark.
- Paper 4: 150 minutes / 90 marks = 1.67 minutes per mark.
- Totals for the four papers: 105 + 150 + 105 + 150 = 510 minutes and 70 + 90 + 70 + 90 = 320 marks.

On a practical paper, a four-mark task therefore deserves around 6 to 7 minutes. If a task has taken twice that, save your work, note where you stopped and move on.

## Command words and question styles

In theory papers, "state" and "identify" want a short fact, "describe" wants a sequence of linked points, and "explain" wants a reason with a consequence. "Evaluate" and "discuss" ask you to weigh advantages and disadvantages and reach a conclusion. In practical papers the equivalent skill is reading the instruction literally: if the task names a field, a format or a file name, match it exactly. Always confirm the exact command-word definitions in the current syllabus.

## Worked practice scenario

Original task: a small shop records weekly sales in a spreadsheet. Row 2 has 120 items at 3.50 each, row 3 has 85 items at 4.20 each, and row 4 has 60 items at 5.00 each. Column D holds the revenue for each row. Column E must show "High" if the revenue is at least 350 and "Standard" otherwise. Cell D5 must total the revenue, and D6 must show the average.

Model working:

```
D2: =B2*C2   -> 120 x 3.50 = 420.00
D3: =B3*C3   -> 85  x 4.20 = 357.00
D4: =B4*C4   -> 60  x 5.00 = 300.00
E2: =IF(D2>=350,"High","Standard")  -> High
E3: =IF(D3>=350,"High","Standard")  -> High
E4: =IF(D4>=350,"High","Standard")  -> Standard
D5: =SUM(D2:D4)      -> 1077.00
D6: =AVERAGE(D2:D4)  -> 359.00
```

Check: 420 + 357 + 300 = 1077, and 1077 / 3 = 359. Good practice is to use cell references rather than typed numbers, so that changing a price updates every result, and to format the revenue column to two decimal places. State in a short note what each formula does if the paper asks for documentation.

## Before/during exam checklist

- Confirm your route: AS Level only, staged A Level, or all four papers in one series.
- Rehearse each practical skill on a computer under timed conditions, not just by reading notes.
- Practise reading task instructions literally and ticking each requirement off.
- Revise theory by applying each topic to a scenario.
- On practical papers, save your work frequently with the file names you are asked to use.
- Keep an eye on the clock using the minutes-per-mark figures above.
- Leave time in each paper to proofread output and check every task has been attempted.

## Self-test

1. How many marks is Paper 4 worth, and what percentage of the full A Level?
2. What is the time allowance per mark on Paper 1?
3. Which two papers belong to the AS Level, and what is each worth at AS?
4. In the worked scenario, why is a cell reference better than typing 420?
5. What is the total number of minutes across all four papers?

**Answers:** 1. 90 marks, 25% of the A Level. 2. 105 / 70 = 1.5 minutes per mark. 3. Papers 1 and 2, each 50% of the AS Level. 4. A reference updates automatically when an input changes, so the result stays correct. 5. 105 + 150 + 105 + 150 = 510 minutes.

## Frequently asked questions

**How many papers are there in Cambridge A Level Information Technology 9626?**
There are four externally assessed papers: Paper 1 Theory, Paper 2 Practical, Paper 3 Advanced Theory and Paper 4 Advanced Practical.

**How long are the practical papers?**
Paper 2 and Paper 4 are each 2 hours 30 minutes and 90 marks, and each is 25% of the full A Level.

**What is the difference between the AS Level and the A Level?**
Papers 1 and 2 form the AS Level and carry 50% each of the AS. Papers 3 and 4 complete the A Level, and every paper is 25% of the full A Level.

**Can I carry my AS result forward?**
Yes. The AS Level can be a standalone qualification or the first half of a staged A Level, or all four papers can be taken in the same series.

**How should I split revision between theory and practical?**
The papers are weighted equally at 25% each, so split time evenly. Spend theory time applying concepts to scenarios and practical time working at a computer under the timing set out above.

*Written against Cambridge A Level Information Technology 9626 (assessment structure verified 2026-08-28). The worked scenario is an original example, not a reproduction of any official past or sample paper question. Always check the current specification for your examination year at [Cambridge International website](https://www.cambridgeinternational.org/Images/662482-2025-2027-syllabus.pdf).*
