---
resourceId: "mb-ap-csa-2.1-practice"
title: "Algorithms with Selection and Repetition: Practice Questions (Computer Science A 2.1)"
description: "10 original Marlbridge practice questions on algorithms built from sequencing, selection and repetition, with full answers, an explanation of every wrong option and a suggested rubric."
course: "computer-science-a"
unit: 2
topics: ["2.1"]
resourceType: "practice-questions"
prerequisites:
  - "Variables, assignment and arithmetic expressions from Unit 1"
  - "Printing output with System.out.println"
prerequisiteResources: ["mb-ap-csa-2.1-study-guide"]
learningObjectives:
  - "Name the three building blocks of an algorithm and recognise each in a description, a flowchart or code"
  - "Describe an everyday process as an algorithm using written steps or a flowchart"
  - "Explain why the order and nesting of the building blocks changes the outcome"
  - "Trace a simple algorithm by hand and record the result"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.1-study-guide", "mb-ap-csa-2.1-revision-notes", "mb-ap-csa-2.1-checklist"]
next: "mb-ap-csa-2.1-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "Questions 1 to 6 are multiple choice; the rest ask for written code, a trace or an explanation."
  - "Every answer explains why each wrong option is wrong."
  - "Rubrics are a suggested Marlbridge rubric, not official scoring."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. Java appears only to show how an algorithm looks in code; you are not asked to write Java in this topic. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. Assume every program compiles and runs.

## Question 1 (multiple choice · foundation)

Which statement describes **repetition**?

- (A) A thermostat turns the heating on if the temperature is below 18 degrees.
- (B) A baker adds flour a cup at a time until the dough is firm.
- (C) A cook weighs the flour and then adds the water.
- (D) A shop gives a discount if a customer is a member.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Adding flour again and again until a desired outcome (firm dough) is reached is repetition.

- (A) is selection: one decision, one of two paths, no repeating.
- (C) is sequencing: two steps in a fixed order.
- (D) is selection: a true or false question (is the customer a member?) chooses a path.
</details>

## Question 2 (multiple choice · foundation)

A flowchart contains a diamond with two exits, and one of the exits leads to an arrow that returns to a box earlier in the chart. Which building blocks does the chart definitely use?

- (A) Sequencing only
- (B) Sequencing and selection only
- (C) Sequencing and repetition only
- (D) Sequencing, selection and repetition

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The boxes joined by arrows are sequencing. The diamond with two exits is a selection (a true or false decision). The arrow back to an earlier box makes part of the chart repeat, which is repetition.

- (A) ignores the diamond and the returning arrow.
- (B) ignores the arrow back to an earlier step, which is what makes steps repeat.
- (C) ignores the diamond: a decision is selection, and the diamond is also what decides when the loop stops.
</details>

## Question 3 (multiple choice · core)

Consider the algorithm. Start with `total = 0`. Repeat for `k` = 1, 2, 3, 4: if `k` is odd, add `k` to `total`. Then output `total`. What is output?

- (A) 4
- (B) 6
- (C) 10
- (D) 3

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The odd values of `k` are 1 and 3, so `total` = 0 + 1 + 3 = 4.

- (B) adds the even values 2 + 4 instead of the odd ones.
- (C) adds all four values and ignores the decision.
- (D) counts only the last odd value, 3, instead of adding 1 and 3.
</details>

## Question 4 (multiple choice · core)

Algorithm X: "If today is Saturday, repeat three times: wash one window." Algorithm Y: "Repeat three times: if today is Saturday, wash one window." On a Tuesday, how many windows does each algorithm wash?

- (A) X washes 0 and Y washes 0.
- (B) X washes 3 and Y washes 0.
- (C) X washes 0 and Y washes 3.
- (D) X washes 3 and Y washes 3.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** On a Tuesday the condition is false. In X the decision is made once and the loop is never reached, so 0 windows. In Y the loop runs three times, but the decision is false each time, so 0 windows.

The two algorithms give the same result on a Tuesday but are different algorithms: on a Saturday both would wash 3 windows, but Y asks the question 3 times. The nesting matters when the condition can change during the loop.

- (B) and (D) assume X washes windows even though its condition is false.
- (C) assumes Y washes windows without checking the condition.
</details>

## Question 5 (multiple choice · core)

What is printed?

```java
int count = 0;
for (int i = 1; i <= 6; i++) {
    if (i % 2 == 0) {
        count = count + i;
    }
}
System.out.println(count);
```

- (A) 6
- (B) 9
- (C) 12
- (D) 21

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The even values of `i` from 1 to 6 are 2, 4 and 6. `count` becomes 0 + 2 + 4 + 6 = 12.

- (A) is the number of passes, or the last even value, not their sum.
- (B) is 1 + 3 + 5, the sum of the **odd** values: the condition has been reversed.
- (D) is 1 + 2 + 3 + 4 + 5 + 6, which ignores the `if`.
</details>

## Question 6 (multiple choice · core)

A programmer must count how many of the numbers from 1 to 20 are multiples of 5. Which description of the algorithm is correct?

- (A) Set count to 0. If a number is a multiple of 5, repeat for 1 to 20 and add 1 to count.
- (B) Set count to 0. Repeat for 1 to 20: if the number is a multiple of 5, add 1 to count. Output count.
- (C) Repeat for 1 to 20: set count to 0, then if the number is a multiple of 5, add 1 to count. Output count.
- (D) Set count to 0. Repeat for 1 to 20: add 1 to count. If the number is a multiple of 5, output count.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The count is set up once, before the loop (sequencing). The decision is inside the loop so every number is tested. The result is output after the loop. The answer is 4 (5, 10, 15, 20).

- (A) puts the loop inside the decision, so the decision is made about one unnamed number and not for each number.
- (C) resets `count` to 0 on every pass, so the final value can never exceed 1.
- (D) adds 1 for every number and then outputs inside the loop, so it counts all 20 and outputs repeatedly.
</details>

## Question 7 (constructed response · core)

A gym lets a member book a class if the class has fewer than 12 people booked. The coordinator checks four classes, one after another, and wants to know how many of the four still have space.

(a) Write the algorithm in numbered steps, using plain language. (4 marks)

(b) The coordinator finds the four classes have 12, 9, 12 and 5 people booked. Trace your algorithm, showing the count after each class. (2 marks)

(c) Name the building block used for each of: checking each class in turn; asking whether a class has space; setting the count to 0 at the start. (3 marks)

<details>
<summary>Answer and explanation</summary>

**(a) Model answer.**

1. Set `spaces` to 0.
2. Repeat for each of the four classes:
    1. If the class has fewer than 12 people booked, add 1 to `spaces`.
3. Output `spaces`.

**(b) Trace.**

| Class | Booked | Fewer than 12? | `spaces` after |
|---|---|---|---|
| 1 | 12 | no | 0 |
| 2 | 9 | yes | 1 |
| 3 | 12 | no | 1 |
| 4 | 5 | yes | 2 |

The output is 2.

**(c)** Checking each class in turn: repetition. Asking whether the class has space: selection. Setting the count to 0: sequencing.

**Suggested Marlbridge rubric (9 marks).**

| Marks | Awarded for |
|---|---|
| 1 | Sets the counter to 0 before the repetition |
| 1 | Repeats the check once for each of the four classes |
| 1 | A decision with the correct condition (fewer than 12) inside the repetition |
| 1 | Adds 1 to the counter only when the condition is true, and outputs after the repetition |
| 2 | Trace: correct values in the table (1 mark for the decisions, 1 for the counts) |
| 3 | One mark for each correct block named in (c) |

Accept a flowchart in (a) if it shows the same logic. Do not award the third and fourth marks if the counter is reset inside the repetition.
</details>

## Question 8 (constructed response · core)

A website asks for a password and keeps asking until the password typed matches the stored one. After 3 wrong attempts it locks the account instead of asking again.

(a) Draw or describe a flowchart for this algorithm. (4 marks)

(b) Identify one place where selection is used and one place where repetition is used. (2 marks)

(c) A student says "the loop will run forever if the user never types the right password". Explain why this is not true for this algorithm. (2 marks)

<details>
<summary>Answer and explanation</summary>

**(a) Model answer (description of the flowchart).** Start. Set `attempts` to 0. Ask for the password and add 1 to `attempts`. Diamond: does the password match? If yes, grant access and stop. If no, a second diamond: is `attempts` equal to 3? If yes, lock the account and stop. If no, return to the "ask for the password" box.

**(b)** Selection: the diamond "does the password match?" (or "is attempts 3?"). Repetition: the arrow returning to "ask for the password".

**(c)** The loop has a second stopping condition. Each failed attempt moves `attempts` toward 3, and when it reaches 3 the account is locked and the algorithm stops, so it is guaranteed to finish.

**Suggested Marlbridge rubric (8 marks).**

| Marks | Awarded for |
|---|---|
| 1 | `attempts` is initialised and increased each time round |
| 1 | A decision for password matching with correct exits |
| 1 | A decision comparing `attempts` to 3 with correct exits |
| 1 | A returning arrow that forms a loop |
| 1 | Selection identified correctly |
| 1 | Repetition identified correctly |
| 1 | States that the attempt counter moves toward the limit |
| 1 | Concludes the algorithm always finishes |
</details>

## Question 9 (constructed response · stretch)

Two algorithms act on the whole numbers 5, 6, 7, 8, 9.

- Algorithm P: Set `sum` to 0. Repeat for each number: if the number is greater than 6, add it to `sum`. Output `sum`.
- Algorithm Q: Set `sum` to 0. If the first number is greater than 6, repeat for each number: add it to `sum`. Output `sum`.

(a) Find the output of each algorithm. (3 marks)

(b) Explain, using the words *selection* and *repetition*, why the outputs differ. (2 marks)

(c) Change the numbers to 7, 8, 9, 10, 11. Find the new output of each. (2 marks)

<details>
<summary>Answer and explanation</summary>

**(a)** P: the numbers greater than 6 are 7, 8, 9, so 7 + 8 + 9 = **24**. Q: the first number is 5, which is not greater than 6, so the loop is never entered and the output is **0**.

**(b)** In P the selection is inside the repetition, so every number is tested separately. In Q the repetition is inside the selection, so a single test of the first number decides whether any number is added.

**(c)** P: all of 7 to 11 are greater than 6, so 7 + 8 + 9 + 10 + 11 = **45**. Q: the first number, 7, is greater than 6, so the loop runs and adds all five numbers, also **45**.

**Suggested Marlbridge rubric (7 marks).**

| Marks | Awarded for |
|---|---|
| 1 | P output 24 |
| 1 | Q reaches no addition |
| 1 | Q output 0 |
| 1 | Identifies that the selection is inside the repetition in P |
| 1 | Identifies that the repetition is inside the selection in Q (a single test) |
| 1 | P output 45 |
| 1 | Q output 45 |

The point of part (c) is that the two algorithms can agree for some data and still be different algorithms.
</details>

## Question 10 (constructed response · stretch)

The following Java program is meant to count how many of the numbers from 1 to 12 are divisible by 4, then print the count once.

```java
int count = 0;
for (int n = 1; n <= 12; n++) {
    if (n % 4 == 0) {
        count++;
    }
    System.out.println(count);
}
```

(a) What does this code actually print? (2 marks)

(b) Which building block is in the wrong place, and how should the code be fixed? (2 marks)

(c) What value is printed by the corrected program? (1 mark)

<details>
<summary>Answer and explanation</summary>

**(a)** It prints twelve lines, one per pass: 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3. The count changes at n = 4, 8 and 12, and `println` runs on every pass.

**(b)** The output statement is **inside the repetition**, so it runs 12 times. It should come after the loop (sequencing after repetition) so it runs once. Move `System.out.println(count);` after the closing brace of the `for` loop.

**(c)** 3 (the multiples of 4 are 4, 8 and 12).

**Suggested Marlbridge rubric (5 marks).**

| Marks | Awarded for |
|---|---|
| 1 | States that twelve values are printed |
| 1 | The values listed correctly (or the pattern 0 0 0 1 1 1 1 2 2 2 2 3) |
| 1 | Identifies the print statement as being inside the loop |
| 1 | Moves it after the loop |
| 1 | Final value 3 |
</details>

## How did you do?

Questions 1 to 6 are the core of this topic: naming the blocks, tracing a short algorithm and seeing why nesting matters. If you missed Question 3 or 5, practise tracing with a table. If you missed Question 4, 6 or 9, go back to "Order matters" in the [study guide](/advanced-course-resources/computer-science-a/2-1-algorithms-selection-repetition-study-guide/). Then use the [checklist](/advanced-course-resources/computer-science-a/2-1-algorithms-selection-repetition-checklist/).
