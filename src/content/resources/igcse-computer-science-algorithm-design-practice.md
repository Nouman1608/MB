---
title: "IGCSE Computer Science: Algorithm Design and Problem-Solving — Practice Questions (Cambridge 0478)"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Algorithm design and problem-solving"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 7
syllabusTopics:
  - qualification: "igcse"
    topic: "algorithm-design-and-problem-solving-0478"
description: "Original Paper 2 style questions with answers on the life cycle, bubble sort, validation, test data, trace tables and debugging for Cambridge IGCSE 0478."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available free from your board.

Related: [Algorithm design and problem-solving study guide](/resources/cambridge-igcse-computer-science-algorithm-design-and-problem-solving-study-guide/) and
[revision notes](/resources/igcse-computer-science-algorithm-design-revision-notes/)

These questions practise every learning outcome in Topic 7 of the Cambridge IGCSE Computer Science 0478 syllabus (2026–2028). Topic 7 is assessed on Paper 2; write all algorithms in pseudocode, using the Cambridge format such as `Count ← Count + 1`.

---

## Section A

**1.** A team is building an app for booking badminton courts. Identify the stage of the program development life cycle in which each task is carried out. **[4]**

(a) Drawing a structure diagram of the booking system. (b) Finding out what the club's members need the app to do. (c) Running the finished code with planned test data. (d) Writing the code and testing each section as it is written.

**2.** A school canteen's ordering system is decomposed. Give **one** input, **one** process, **one** output and **one** item of storage for this system. **[4]**

**3.** State the purpose of each flowchart symbol: **[3]**

(a) a diamond (decision); (b) a parallelogram (input/output); (c) a rounded rectangle (terminator).

**4.** Identify the most suitable validation check for each item of data. **[4]**

(a) A postcode must be entered — it cannot be left blank.
(b) A product code must be two capital letters followed by three digits.
(c) The number of people at a table must be between 1 and 12.
(d) A 13-digit book number has a final digit calculated from the other twelve.

## Section B

**5.** A cinema website allows 1 to 8 tickets per booking (whole numbers only).

Give **one** item of test data of each type and state the expected result. **[5]**

(a) Normal (b) Abnormal (c) Extreme (d) Boundary — give both values for the upper limit.

**6.** Explain why data that passes validation may still be incorrect, and name **one** verification check that could help. **[3]**

**7.** The list 12, 4, 15, 8, 6 is to be sorted into ascending order using a bubble sort.

**(a)** Show the list after the first pass. **[2]**
**(b)** State how many passes are completed before the algorithm stops, if it stops after the first pass with no swaps. **[1]**
**(c)** Explain how the algorithm knows the list is sorted. **[2]**

**8.** Complete a trace table for this algorithm using the inputs 12, 18, 9, −1. **[5]**

```
Count ← 0
Total ← 0
REPEAT
    OUTPUT "Enter a time in minutes, -1 to finish"
    INPUT Time
    IF Time >= 0
      THEN
        Total ← Total + Time
        Count ← Count + 1
    ENDIF
UNTIL Time < 0
IF Count > 0
  THEN
    OUTPUT "Average: ", Total / Count
ENDIF
```

**9.** Explain the purpose of the algorithm in Question 8. **[2]**

**10.** This algorithm should search the 100-element array `Codes[1:100]` for a code entered by the user and output whether it was found. It contains **three** errors.

```
01 Found ← TRUE
02 Index ← 0
03 INPUT Target
04 REPEAT
05     IF Codes[Index] = Target
06       THEN
07         Found ← TRUE
08     ENDIF
09     Index ← Index + 1
10 UNTIL Found = TRUE AND Index > 100
11 IF Found = TRUE
12   THEN
13     OUTPUT "Code found"
14   ELSE
15     OUTPUT "Code not found"
16 ENDIF
```

Identify the line number of each error and write the corrected line. **[6]**

**11.** A running club records the age of each runner who enters a race. Write an algorithm in pseudocode that:

- inputs ages until the value 0 is entered
- rejects any age outside 8 to 90 inclusive and asks for it again
- counts the runners aged under 18 and those aged 18 or over
- outputs both counts at the end. **[6]**

---

## Answers

**1.** (a) Design [1]. (b) Analysis [1]. (c) Testing [1]. (d) Coding [1].

**2.** One mark each, for example: input — the pupil's food choice / pupil ID [1]; process — calculating the total cost of the order [1]; output — a receipt or order confirmation on screen [1]; storage — the menu and prices / each pupil's account balance [1].

**3.** (a) Shows a decision with a yes/no (true/false) outcome, with a branch for each [1]. (b) Shows data being input or output [1]. (c) Shows the start or end of the algorithm [1].

**4.** (a) Presence check [1]. (b) Format check [1]. (c) Range check [1]. (d) Check digit [1].

**5.** (a) e.g. 4 — accepted [1]. (b) e.g. 15, or "three", or 2.5 — rejected [1]. (c) 1 or 8 — accepted [1]. (d) 8 — accepted [1]; 9 — rejected [1].

**6.** Validation only checks that data is reasonable or follows the rules, not that it is the value intended [1]. For example, entering 6 tickets instead of 5 passes a range check of 1 to 8 [1]. A visual check (comparing the entry with the original) or a double entry check would help [1].

**7. (a)** 4, 12, 8, 6, 15 [2]. (1 mark if 15 is in the last position but another item is wrong.)

Working: 12↔4 swap → 4, 12, 15, 8, 6; 12, 15 no swap; 15↔8 swap → 4, 12, 8, 15, 6; 15↔6 swap → 4, 12, 8, 6, 15.

**(b)** 4 passes [1]. (Pass 2 gives 4, 8, 6, 12, 15; pass 3 gives 4, 6, 8, 12, 15; pass 4 makes no swaps.)

**(c)** A flag such as `Swapped` is set to FALSE at the start of each pass and to TRUE whenever a swap is made [1]; if it is still FALSE at the end of a pass, no items were out of order, so the loop stops [1].

**8.**

| Count | Total | Time | OUTPUT |
|---|---|---|---|
| 0 | 0 | | |
| | | | Enter a time in minutes, -1 to finish |
| 1 | 12 | 12 | |
| | | | Enter a time in minutes, -1 to finish |
| 2 | 30 | 18 | |
| | | | Enter a time in minutes, -1 to finish |
| 3 | 39 | 9 | |
| | | | Enter a time in minutes, -1 to finish |
| | | −1 | |
| | | | Average: 13 |

Marks: initial values 0, 0 [1]; prompts output before each input [1]; Total column 12, 30, 39 [1]; Count column 1, 2, 3 [1]; final output Average: 13 [1].

**9.** It finds the average (mean) of a set of times entered [1]. It totals and counts the times until a negative value (the rogue value −1) is input, then outputs Total divided by Count, only if at least one time was entered [1].

**10.**
- Line 01 [1]: `Found ← FALSE` [1]
- Line 02 [1]: `Index ← 1` [1] (the array starts at index 1)
- Line 10 [1]: `UNTIL Found = TRUE OR Index > 100` [1]

**11.** Example answer:

```
Under18 ← 0
Adults ← 0
INPUT Age
WHILE Age <> 0 DO
    WHILE Age < 8 OR Age > 90 DO
        OUTPUT "Age must be from 8 to 90, enter again"
        INPUT Age
    ENDWHILE
    IF Age < 18
      THEN
        Under18 ← Under18 + 1
      ELSE
        Adults ← Adults + 1
    ENDIF
    INPUT Age
ENDWHILE
OUTPUT "Under 18: ", Under18
OUTPUT "18 or over: ", Adults
```

Mark points (max 6):
- both counters initialised to 0 [1]
- a loop that continues until 0 is entered [1]
- a validation loop that rejects values outside 8 to 90 [1]
- with an error message and re-input [1]
- correct selection for under 18 / 18 or over [1]
- correct incrementing of the right counter [1]
- both counts output after the loop, with labels [1]

*Note:* in this answer the validation loop sits inside the main loop, so a rejected value is re-entered before it is counted. A candidate who also lets 0 escape the validation loop (for example `WHILE Age <> 0 AND (Age < 8 OR Age > 90)`) should be credited.

## Where marks are usually lost

- Q5(d): giving one value only. Boundary data needs the accepted value and the matching rejected value.
- Q7(a): doing a full sort instead of showing only the first pass.
- Question 8: leaving the prompt out of the OUTPUT column; prompts are part of the trace.
- Question 10: rewriting the whole algorithm instead of giving the line number and the corrected line.
- Question 11: placing the counting before the validation, so invalid ages are counted.

## Frequently asked questions

**How many columns should a trace table have?**
One for each variable that changes and one for output. The question usually provides the headings; fill each row in the order the steps happen.

**Can I use a FOR loop when the number of inputs is not known?**
No. When input stops at a rogue value, use a pre-condition (WHILE) or post-condition (REPEAT) loop.

**Do I need to memorise the bubble sort pseudocode?**
Yes. Paper 2 can ask you to write, complete or correct a linear search or bubble sort, so you should be able to produce both from memory.
