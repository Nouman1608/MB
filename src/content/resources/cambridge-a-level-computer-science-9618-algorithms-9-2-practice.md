---
title: "Cambridge A Level Computer Science (9618): Algorithms (9.2) -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 9: Algorithm Design and Problem-solving"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 9.2
syllabusTopics:
  - qualification: "a-level"
    topic: "algorithm-design-and-problem-solving"
    subtopic: "algorithms-9-2"
description: "Original questions with worked answers on pseudocode, trace tables, flowcharts, stepwise refinement and logic statements for Cambridge 9618 section 9.2."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Algorithms study guide](/resources/cambridge-a-level-computer-science-9618-algorithms-9-2/) · [Algorithms revision notes](/resources/cambridge-a-level-computer-science-9618-algorithms-9-2-revision-notes/) · [Algorithm Design and Problem-solving practice questions](/resources/cambridge-a-level-computer-science-algorithm-design-and-problem-solving-practice/)

These questions practise section 9.2 of Cambridge International AS & A Level Computer Science 9618. Write pseudocode in the style of the Cambridge Pseudocode Guide. All scenarios are invented. Answers are in mark-scheme style, with [1] for each creditable point.

---

## Section A

**1.** State what is meant by an **algorithm**. **[1]**

**2.** Give **two** features of a suitable identifier name. **[2]**

**3.** Name the flowchart symbol used for **(a)** a decision and **(b)** an input. **[2]**

**4.** A program must ask for a password and keep asking until the correct one is entered. Which loop is most suitable?

A: FOR ... NEXT, because the number of attempts is fixed.

B: REPEAT ... UNTIL, because the request must be made at least once.

C: WHILE ... ENDWHILE, because the loop might never run.

D: CASE ... ENDCASE, because there are several possible passwords.

**[1]**

**5.** A cinema gives a discount to customers aged from 13 to 19 inclusive who are **not** members. Write this as a logic statement using the identifiers Age and Member (BOOLEAN). **[2]**

**6.** Explain why `IF Temp > 10 OR Temp < 30 THEN` cannot be used to test whether Temp is between 10 and 30. **[2]**

## Section B

**7.** This structured English describes an algorithm for a weather station:

1. SET total to 0 and dry days to 0.
2. REPEAT steps 3 to 5 for each of the 7 days.
3. INPUT the rainfall for the day.
4. ADD the rainfall to the total.
5. IF the rainfall is 0, ADD 1 to dry days.
6. OUTPUT the total and the number of dry days.

**(a)** Complete an identifier table for the algorithm. **[3]**

**(b)** Write the algorithm in pseudocode. **[5]**

**8.** Complete a trace table for this algorithm with the input values 42, 67, 50, 88, 31, −1. State the final output. **[4]**

```
Count ← 0
Highest ← -1
INPUT Score
WHILE Score <> -1
   IF Score >= 50 THEN
      Count ← Count + 1
   ENDIF
   IF Score > Highest THEN
      Highest ← Score
   ENDIF
   INPUT Score
ENDWHILE
OUTPUT Count, " ", Highest
```

**9.** A flowchart for a lift is described below, box by box.

- START.
- Process: Total ← 0, Count ← 0.
- Input: INPUT Mass.
- Process: Total ← Total + Mass.
- Process: Count ← Count + 1.
- Decision: Total > 500? The **No** exit goes back up to INPUT Mass. The **Yes** exit continues.
- Output: OUTPUT Count.
- STOP.

**(a)** Write pseudocode for this flowchart. **[4]**

**(b)** Explain why your loop is tested at the end rather than the beginning. **[1]**

**10.** Describe the flowchart for this pseudocode, naming each symbol you would use. **[5]**

```
INPUT Price
IF Price > 100 THEN
   Price ← Price * 0.9
ENDIF
OUTPUT Price
```

**11.** Use stepwise refinement to break down the task "Issue a library book to a member" into at least **two** levels of detail. **[4]**

**12.** A shop gives free delivery when the order total is at least 50.00 **or** the customer has a loyalty card, but never to addresses outside the country.

**(a)** Write a logic statement using OrderTotal (REAL), Loyalty (BOOLEAN) and Abroad (BOOLEAN) that is TRUE when delivery is free. **[3]**

**(b)** Give **two** sets of test data, with the expected result, that would check the statement. **[2]**

---

## Answers

**1.** A solution to a problem expressed as a sequence of defined steps [1].

**2.** Any two: meaningful / describes the data held [1]; contains no spaces [1]; follows a consistent style [1]; is not a keyword [1].

**3. (a)** Diamond [1].

**(b)** Parallelogram [1].

**4.** **B** [1].

**5.** `Age >= 13 AND Age <= 19` [1] `AND NOT Member` (or `Member = FALSE`) [1].

**6.** Every number is either greater than 10 or less than 30, so the condition is always TRUE [1]; AND is needed: `Temp > 10 AND Temp < 30` [1].

**7. (a)**

| Identifier | Data type | Description |
|---|---|---|
| Rainfall | REAL | Rainfall for one day, input |
| Total | REAL | Total rainfall for the week |
| DryDays | INTEGER | Number of days with no rain |
| Day | INTEGER | Loop counter, 1 to 7 |

Suitable identifiers [1]; suitable data types [1]; descriptions [1].

**(b)**

```
Total ← 0
DryDays ← 0
FOR Day ← 1 TO 7
   INPUT Rainfall
   Total ← Total + Rainfall
   IF Rainfall = 0 THEN
      DryDays ← DryDays + 1
   ENDIF
NEXT Day
OUTPUT Total, " ", DryDays
```

Both variables initialised to 0 [1]; FOR loop from 1 to 7 [1]; INPUT and add to Total inside the loop [1]; IF Rainfall = 0 with increment [1]; OUTPUT both values after the loop [1].

**8.**

| Score | Count | Highest | OUTPUT |
|---|---|---|---|
| | 0 | −1 | |
| 42 | | 42 | |
| 67 | 1 | 67 | |
| 50 | 2 | | |
| 88 | 3 | 88 | |
| 31 | | | |
| −1 | | | 3 88 |

Count values 1, 2, 3 in the correct rows [1]; Highest values 42, 67, 88 in the correct rows [1]; no changes for 31 or −1 [1]; output 3 88 [1].

**9. (a)**

```
Total ← 0
Count ← 0
REPEAT
   INPUT Mass
   Total ← Total + Mass
   Count ← Count + 1
UNTIL Total > 500
OUTPUT Count
```

Initialisation of Total and Count [1]; REPEAT ... UNTIL loop [1]; INPUT, add to Total and increment Count inside the loop [1]; condition Total > 500, then OUTPUT Count after the loop [1].

**(b)** The decision comes after the body on the flowchart, so the body always runs at least once / the condition is tested after each person enters [1].

**10.** START terminator, then a parallelogram for INPUT Price [1]; a diamond for the decision Price > 100? [1]; a Yes exit to a rectangle (process) Price ← Price × 0.9 [1]; the No exit and the line from the process box rejoin, leading to a parallelogram for OUTPUT Price [1]; STOP terminator, with flow lines (arrows) joining the symbols and both decision exits labelled [1].

**11.** Level 1: issue a library book [1].
Level 2 (any three steps, in order) [1]: get member ID; check member is valid; get book ID; check book is available; record the loan; output due date.
Level 3: at least two steps refined further [2], e.g. "check member is valid" refined to "search member table for ID; if not found output message and stop; if member has 5 or more loans, refuse"; "record the loan" refined to "set due date to today + 21 days; store member ID, book ID and due date; set book status to on loan".

**12. (a)** `(OrderTotal >= 50.00 OR Loyalty = TRUE)` [1] `AND Abroad = FALSE` [1], with brackets so the OR is evaluated first [1].

**(b)** Any two sets with correct results [2], e.g.: OrderTotal 60.00, Loyalty FALSE, Abroad FALSE → TRUE; OrderTotal 20.00, Loyalty TRUE, Abroad TRUE → FALSE; OrderTotal 49.99, Loyalty FALSE, Abroad FALSE → FALSE; OrderTotal 50.00, Loyalty FALSE, Abroad FALSE → TRUE.

---

## Where marks are usually lost

- Using a WHILE loop in question 9, which changes when the condition is tested.
- Omitting the initial values in a trace table.
- Writing `=` instead of `←` for assignment.
- Leaving out the brackets in a statement that mixes AND and OR.
- Refining only one level in stepwise refinement questions.
