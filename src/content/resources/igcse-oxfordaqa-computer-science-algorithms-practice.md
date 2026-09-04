---
title: "OxfordAQA IGCSE Computer Science: Algorithms — Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 1 – Algorithms"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "2022-onwards"
order: 1
syllabusTopics:
  - qualification: "igcse"
    topic: "algorithms-9210"
description: "Original exam-style practice questions with full worked answers on algorithms, flowcharts, pseudocode, trace tables and searching."
author: "marlbridge-academic-team"
publishedDate: 2026-08-22
featured: false
---
> **These are original questions written for Marlbridge**, in the style and at the
> standard of the examination. They are **not** reproduced past-paper questions —
> examination boards hold copyright in their own papers. Use these alongside the
> official past papers available free from your board.

Related: [Algorithms revision notes](/resources/igcse-oxfordaqa-computer-science-algorithms-revision-notes/)

---

## Section A

**1.** Name the three basic programming constructs and give an example of each. **[3]**

**2.** State the standard flowchart symbol used for a decision, a process and an input/output. **[3]**

## Section B

**3.** Complete a trace table for the following, with input 27:

```
n ← 27
count ← 0
WHILE n > 1
    IF n MOD 2 = 0 THEN
        n ← n / 2
    ELSE
        n ← 3 * n + 1
    ENDIF
    count ← count + 1
ENDWHILE
OUTPUT count
```

**(a)** Give the first **five** values taken by n after the loop begins. **[3]**
**(b)** Explain what the variable count records. **[2]**

**4.** Write pseudocode that reads 10 numbers and outputs the total and the average. **[5]**

**5.** Write pseudocode for a linear search of an array for a target value, outputting the position or a "not found" message. **[6]**

**6.** Explain the difference between a WHILE loop and a FOR loop, and state when each is appropriate. **[4]**

**7.** Explain what a trace table is used for and why it is useful when debugging. **[3]**

## Section C

**8.** A linear search and a binary search are both used to find an item in a sorted list of 1,000 items.

**(a)** Explain why a binary search is much more efficient than a linear search on this list, giving an approximate comparison count for each. **[3]**

**(b)** State one condition a binary search requires that a linear search does not. **[1]**

**9.** Trace the following algorithm with input n = 5, showing the value of `total` after each iteration.

```
INPUT n
total = 0
FOR i = 1 TO n
    total = total + i
NEXT i
OUTPUT total
```

**(a)** Complete the trace table and state the output. **[3]**

**(b)** Describe in one sentence what the algorithm calculates. **[1]**

**10.** A student writes "the search is inefficient" as their answer to an evaluation question and receives no marks. Explain what a precise evaluation answer needs instead. **[2]**

---

## Answers

**1. Sequence** — statements executed one after another, e.g. reading input then calculating [1]. **Selection** — a choice between paths, e.g. IF...THEN...ELSE [1]. **Iteration** — repetition, e.g. FOR or WHILE [1].

**2.** Decision — a **diamond** [1]. Process — a **rectangle** [1]. Input/output — a **parallelogram** [1].

**3. (a)** 27 is odd → 82 [1]; 82 is even → 41; 41 is odd → 124 [1]; 124 → 62; 62 → **31** [1]. (First five: 82, 41, 124, 62, 31.)
**(b)** It records the **number of times the loop body executes** [1] — that is, how many steps the sequence takes to reach 1 [1].

**4.**
```
total ← 0
FOR i ← 1 TO 10
    INPUT number
    total ← total + number
NEXT i
average ← total / 10
OUTPUT total
OUTPUT average
```
Initialising total to 0 before the loop [1]; loop repeating exactly 10 times [1]; input inside the loop [1]; running total accumulated correctly [1]; average calculated after the loop and both values output [1].

**5.**
```
found ← FALSE
FOR i ← 0 TO LENGTH(arr) - 1
    IF arr[i] = target THEN
        OUTPUT "Found at position ", i
        found ← TRUE
        EXIT FOR
    ENDIF
NEXT i
IF found = FALSE THEN
    OUTPUT "Not found"
ENDIF
```
Flag initialised [1]; loop over the whole array with correct bounds [1]; comparison with the target [1]; position output when found [1]; early exit [1]; "not found" message only after the loop completes [1].

**6.** A **FOR loop repeats a known, fixed number of times**, controlled by a counter [1]; a **WHILE loop repeats while a condition remains true**, and may execute zero times [1].
Use a **FOR loop when the number of iterations is known in advance**, such as processing every element of an array [1]; use a **WHILE loop when the number is not known**, such as repeatedly asking for input until the user enters a valid value [1].

**7.** A trace table **records the value of every variable after each step or iteration of an algorithm** [1]. It is useful in debugging because it shows **exactly where a value first becomes incorrect** [1], so the programmer can identify the specific line at fault rather than guessing — it also confirms that loops terminate as expected [1].

**8. (a)** A **linear search** checks each item in turn, so on 1,000 items it may take up to **1,000 comparisons** [1]. A **binary search** repeatedly halves the list, reaching the same item in about **10 comparisons** [1], because each comparison eliminates half of the remaining items [1].

**(b)** The data must be **sorted** before a binary search can be used [1].

**9. (a)**

| i | total |
|---|---|
| 1 | 1 |
| 2 | 3 |
| 3 | 6 |
| 4 | 10 |
| 5 | 15 |

Output: **15** [3 — 1 mark for a correctly completed table, 2 for the correct final output].

**(b)** It sums the integers from 1 to n [1].

**10.** A precise evaluation answer must **identify the specific cause of the inefficiency**, such as "the loop continues checking after the item has been found, so unnecessary comparisons are performed" [1], rather than making a vague, unsupported claim [1].

---

## Where marks are usually lost

- Placing the input statement outside the loop.
- Outputting "not found" inside the loop, so it prints on every non-matching element.
- Using a WHILE loop where the number of repetitions is fixed.
- Forgetting to initialise the total or flag before the loop.
