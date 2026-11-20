---
title: "Cambridge A Level Information Technology (9626): Flowcharts -- Revision Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["a-levels"]
topic: "Topic 4 – Algorithms and flowcharts"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 4.2
syllabusTopics:
  - qualification: "a-level"
    topic: "algorithms-and-flowcharts"
  - qualification: "a-level"
    topic: "algorithms-and-flowcharts"
    subtopic: "flowcharts"
description: "Revision notes for Cambridge 9626 IT section 4.2: flowchart symbols, drawing rules, loops, editing, common errors and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes condense **section 4.2 Flowcharts** (Topic 4 Algorithms and flowcharts) of the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. AS Level content, examined in Paper 1 Theory. Full explanations and traced examples are in the [flowcharts study guide](/resources/cambridge-a-level-ict-9626-flowcharts/); test yourself with the [flowcharts practice questions](/resources/cambridge-a-level-ict-9626-flowcharts-practice/).

## What the syllabus asks

- **Draw** a basic program flowchart to solve a given problem.
- **Draw** a flowchart that shows a decision-making process.
- **Edit** a given basic flowchart.
- **Identify errors** in an algorithm or flowchart for a given scenario.

## Key terms

| Term | Meaning |
|---|---|
| Flowchart | A diagram of the steps of an algorithm using standard symbols joined by arrows |
| Flow line | An arrow showing the direction to follow |
| Terminator | START or STOP |
| Process box | A calculation or assignment |
| Decision | A question with two exits, Yes and No |
| Subroutine | A call to a separate named flowchart |
| Connector | A small labelled circle joining one part to another |
| Trace | Following the flowchart with sample data and recording each variable |

## The symbols

| Element | Shape | Example content |
|---|---|---|
| Terminator | Rounded rectangle | START, STOP |
| Input/output | Parallelogram | INPUT mark, OUTPUT total |
| Process | Rectangle | total ← total + mark |
| Decision | Diamond | mark > 49? |
| Subroutine | Rectangle with double side lines | CalculatePostage |
| Connector | Small circle with a letter | A |
| Flow line | Arrow | (none) |

Operators allowed in the text: comparison `>`, `<`, `=`; arithmetic `+`, `-`, `*`, `/`.

## Drawing rules

1. One START; at least one STOP.
2. A decision has **one way in and two ways out**, each labelled Yes or No.
3. Every other box has **one way out**.
4. Draw from top to bottom and left to right; avoid crossing lines.
5. Keep text short, in pseudocode style.
6. Test with a normal value and a **boundary** value.

## Patterns to recognise

| Pattern | Flowchart shape | Pseudocode |
|---|---|---|
| Selection | Decision whose two branches rejoin | IF...ELSE...ENDIF |
| Test-before loop | Decision first, arrow back from the body to the decision | WHILE...ENDWHILE |
| Test-after loop | Body first, decision after, arrow back if the answer says repeat | REPEAT...UNTIL |
| Counting loop | Counter set, tested, increased, arrow back | FOR...NEXT |
| Reuse | Subroutine symbol | PROCEDURE and CALL |

## Worked example: totalling until zero

Boxes in order: START; `total ← 0`; INPUT number; decision `number = 0?`; Yes goes to OUTPUT total then STOP; No goes to `total ← total + number` and back to INPUT number.

Inputs 4, 9, 2, 0 give totals 4, 13, 15 and the output is **15**. The 0 is not added because the decision sends the flow out of the loop first.

## Editing a flowchart

1. Trace the original with a sample.
2. Find the boxes to change, add or remove.
3. Change as little as possible; keep every decision labelled and every path ending at STOP.
4. Re-trace, including boundary values.

Example: to add a "Merit" grade for marks of 70 or more to a pass/fail chart, add a second decision (`mark > 69?`) on the Yes branch of the first.

## Finding errors: checklist

- Missing START, STOP or a path with no end.
- A decision with one exit or unlabelled exits.
- A loop that never changes the value it tests (endless loop).
- A total or counter not set to 0 first.
- Wrong comparison or boundary (`>` or `<` where the other is needed).
- Wrong symbol (calculation in a parallelogram, input in a rectangle).
- Output inside a loop that should be after it.
- An arrow to the wrong box, so a step is skipped or repeated.

For each error: say **where**, **what is wrong**, and **how to fix it**.

## Exam traps

- Drawing a decision as a rectangle.
- Not labelling Yes and No.
- Treating a loop as a separate symbol; a loop is only an arrow back to an earlier box.
- Using `=` for both assignment and comparison without care; the arrow is clearer for assignment.
- Forgetting that WHILE-style loops can run zero times.
- Skipping the boundary test.

## Self-test

1. Name the shape used for a decision.
2. What shape is used for input and output?
3. How many exits does a decision box have, and how are they marked?
4. What does a connector do?
5. How is a loop drawn on a flowchart?
6. What goes in a process box?
7. A flowchart sets `count ← 1`, then asks `count > 3?`. Yes stops; No outputs count and adds 1 to count, then returns to the question. What is output?
8. Give two errors that can make a loop endless.
9. Which symbol shows a call to a separate procedure?
10. Why are boundary values used when testing?
11. A decision asks `age > 17?`. Which age should be tested to check the boundary?
12. A total is added to inside a loop but never set before it. Which error is this?

### Answers

1. A diamond.
2. A parallelogram.
3. Two, labelled Yes and No (or True and False).
4. It joins one part of a flowchart to another, using the same letter in both circles.
5. A flow line goes back to an earlier box, controlled by a decision.
6. A calculation or assignment, such as `total ← total + 1`.
7. 1, 2, 3 (the loop stops when count becomes 4).
8. The tested variable is never changed in the loop; the decision tests the wrong way round.
9. A rectangle with double vertical lines on both sides.
10. Errors most often occur at the edge of a condition, such as using > instead of >=.
11. 17 and 18 (the values on each side of the boundary).
12. A variable not initialised.
