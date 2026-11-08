---
resourceId: "mb-ap-csp-u3-diagnostic"
title: "Algorithms and Programming: Unit Diagnostic (Computer Science Principles Unit 3)"
description: "A 40-minute check with at least one short question per topic of Unit 3, from variables and lists to binary search, simulations and undecidable problems, showing which topics to revisit."
course: "computer-science-principles"
unit: 3
topics: []
resourceType: "unit-diagnostic"
prerequisites:
  - "You have studied some or all of Topics 3.1 to 3.18"
learningObjectives:
  - "Find out which Unit 3 topics are secure and which need more work"
  - "Practise short questions on variables, control flow, lists, procedures, libraries, randomness, simulations, efficiency and undecidability"
  - "Use the answer explanations to see why common wrong answers are tempting"
  - "Choose the study guides to read next"
skills: ["1", "2", "3", "4"]
studyMinutes: 40
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-u3-review", "mb-ap-csp-3.5-study-guide", "mb-ap-csp-3.8-study-guide", "mb-ap-csp-3.10-study-guide", "mb-ap-csp-3.13-study-guide", "mb-ap-csp-3.17-study-guide"]
next: "mb-ap-csp-u3-review"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "Twenty-three short questions cover all 18 topics of Unit 3."
  - "Nineteen are single-answer multiple choice, two ask for two answers and two need a written answer."
  - "Each answer links to the study guide to read if you missed it."
  - "It shows where to focus. It does not give or predict a score."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Use this diagnostic to find **which Unit 3 topics to revisit**. There is at least one short question for every one of the 18 topics. Questions 1 to 19 are single-answer multiple choice, 20 and 21 ask for two answers, and 22 and 23 are short written answers.

These are **original Marlbridge practice questions**, not past exam questions. The code is Marlbridge's rendering of the exam reference notation (`←` assignment, `=` equality test, lists start at index 1, `DISPLAY` shows a value and a space). The diagnostic is not calibrated and gives **no predicted score**.

**How to take it.** Allow about 40 minutes. No calculator. Answer everything before opening any answer. Then use the table at the end to see which study guides to read next.

## Question 1 (multiple choice · 3.1)

What is displayed?

```text
a ← 3
b ← a + 2
a ← b * 2
DISPLAY(a - b)
```

- (A) 7
- (B) 10
- (C) 5
- (D) 15

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `b` is 3 + 2 = 5, then `a` becomes 5 × 2 = 10, so `a - b` is 10 − 5 = 5.

- (A) subtracts the old `a`: 10 − 3 = 7.
- (B) 10 is only the final value of `a`.
- (D) 15 adds the two values instead of subtracting.

Revisit: [Topic 3.1 study guide](/advanced-course-resources/computer-science-principles/3-1-variables-assignments-study-guide/).

</details>

## Question 2 (multiple choice · 3.2)

What is displayed?

```text
scores ← [14, 9, 21]
DISPLAY(scores[LENGTH(scores)])
```

- (A) 21
- (B) 14
- (C) 3
- (D) The program ends with an error message.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `LENGTH(scores)` is 3, so `scores[3]` is the last element, 21.

- (B) is the first element.
- (C) is the length, not an element.
- (D) Index 3 is valid.

Revisit: [Topic 3.2 study guide](/advanced-course-resources/computer-science-principles/3-2-data-abstraction-study-guide/).

</details>

## Question 3 (multiple choice · 3.3)

What is displayed?

```text
DISPLAY(5 + 17 MOD 5 * 2)
```

- (A) 12
- (B) 9
- (C) 4
- (D) 7

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `17 MOD 5` is 2, then `2 * 2` is 4 (MOD and `*` share precedence, left to right), and 5 + 4 = 9.

- (A) evaluates `5 * 2 = 10` first: `5 + 17 MOD 10` is 12.
- (C) adds first: `(5 + 17) MOD 5 * 2` is 4.
- (D) forgets the `* 2`: 5 + 2 = 7.

Revisit: [Topic 3.3 study guide](/advanced-course-resources/computer-science-principles/3-3-mathematical-expressions-study-guide/).

</details>

## Question 4 (multiple choice · 3.4)

Positions are counted from 1 and `substring(text, start, length)` takes `length` characters from position `start`. What is displayed?

```text
s ← "network"
DISPLAY(concat(substring(s, 4, 4), substring(s, 1, 3)))
```

- (A) network
- (B) wornet
- (C) netwo
- (D) worknet

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** `substring(s, 4, 4)` is `"work"` and `substring(s, 1, 3)` is `"net"`. Joined in that order: `"worknet"`.

- (A) and (C) do not follow from the code.
- (B) takes only three characters for the first part.

Revisit: [Topic 3.4 study guide](/advanced-course-resources/computer-science-principles/3-4-strings-study-guide/).

</details>

## Question 5 (multiple choice · 3.5)

What is displayed?

```text
x ← 8
DISPLAY((x ≥ 8) AND NOT(x MOD 2 = 0))
```

- (A) An error message
- (B) true
- (C) 8
- (D) false

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** `x ≥ 8` is true. `x MOD 2 = 0` is true, so `NOT(...)` is false. true AND false is false.

- (A) The expression is valid.
- (B) forgets the NOT.
- (C) A Boolean expression gives true or false.

Revisit: [Topic 3.5 study guide](/advanced-course-resources/computer-science-principles/3-5-boolean-expressions-study-guide/).

</details>

## Question 6 (multiple choice · 3.6)

What is displayed?

```text
x ← 7
IF(x > 5)
{
  DISPLAY("a")
}
IF(x > 6)
{
  DISPLAY("b")
}
ELSE
{
  DISPLAY("c")
}
```

- (A) b
- (B) a b
- (C) a c
- (D) a

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The two IFs are separate. `x > 5` is true so `a` is shown. The second IF tests `x > 6` (true) so `b` is shown and its ELSE is skipped.

- (A) misses the first IF.
- (C) runs the ELSE after a true condition.
- (D) assumes the second IF is an ELSE.

Revisit: [Topic 3.6 study guide](/advanced-course-resources/computer-science-principles/3-6-conditionals-study-guide/).

</details>

## Question 7 (multiple choice · 3.7)

What is displayed?

```text
x ← 4
y ← 9
IF(x > 5)
{
  IF(y > 5)
  {
    DISPLAY("P")
  }
  ELSE
  {
    DISPLAY("Q")
  }
}
ELSE
{
  DISPLAY("R")
}
```

- (A) Nothing is displayed.
- (B) R
- (C) Q
- (D) P

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `x > 5` is false, so the outer ELSE runs and displays R. The inner conditional is not evaluated.

- (A) The outer ELSE always runs here.
- (C) and (D) need `x > 5` to be true.

Revisit: [Topic 3.7 study guide](/advanced-course-resources/computer-science-principles/3-7-nested-conditionals-study-guide/).

</details>

## Question 8 (multiple choice · 3.8)

What is displayed?

```text
n ← 1
REPEAT UNTIL(n > 20)
{
  n ← n * 3
}
DISPLAY(n)
```

- (A) 9
- (B) 27
- (C) 20
- (D) 81

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `n` goes 3, 9, 27. After 27 the condition `n > 20` is true and the loop stops.

- (A) stops one pass early.
- (C) is the limit, not a value `n` takes.
- (D) goes one pass too far.

Revisit: [Topic 3.8 study guide](/advanced-course-resources/computer-science-principles/3-8-iteration-study-guide/).

</details>

## Question 9 (multiple choice · 3.9)

Algorithm P is `IF(n ≥ 10) { DISPLAY("big") }` and Algorithm Q is `IF(n > 10) { DISPLAY("big") }`. For which value of `n` do they behave differently?

- (A) 11
- (B) 10
- (C) 0
- (D) 9

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** At 10, P displays `big` but Q displays nothing. For every other whole number the two agree.

- (A), (C) and (D) give the same behaviour in both.

Revisit: [Topic 3.9 study guide](/advanced-course-resources/computer-science-principles/3-9-developing-algorithms-study-guide/).

</details>

## Question 10 (multiple choice · 3.10)

What is displayed?

```text
aList ← [4, 5, 6]
INSERT(aList, 2, 9)
REMOVE(aList, 1)
DISPLAY(aList[2])
```

- (A) 9
- (B) 4
- (C) 5
- (D) 6

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `[4, 5, 6]` becomes `[4, 9, 5, 6]` after the INSERT and `[9, 5, 6]` after removing index 1. The second element is 5.

- (A) is the first element.
- (B) was removed.
- (D) is the last.

Revisit: [Topic 3.10 study guide](/advanced-course-resources/computer-science-principles/3-10-lists-study-guide/).

</details>

## Question 11 (multiple choice · 3.10)

What is displayed?

```text
total ← 0
FOR EACH v IN [3, 8, 5, 10]
{
  IF(v MOD 2 = 0)
  {
    total ← total + v
  }
}
DISPLAY(total)
```

- (A) 26
- (B) 8
- (C) 4
- (D) 18

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The loop adds only the even values: 8 and 10, giving 18.

- (A) is the sum of all the values.
- (B) and (C) are single values or counts.

Revisit: [Topic 3.10 study guide](/advanced-course-resources/computer-science-principles/3-10-lists-study-guide/).

</details>

## Question 12 (multiple choice · 3.11)

A sorted list holds 600 items. What is the greatest number of items binary search needs to check?

- (A) 600
- (B) 10
- (C) 300
- (D) 9

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The first power of two greater than 600 is 1,024 = 2 to the power 10, so at most 10 checks.

- (A) is the greatest for linear search.
- (C) is half the list.
- (D) is too few: 2 to the power 9 is only 512.

Revisit: [Topic 3.11 study guide](/advanced-course-resources/computer-science-principles/3-11-binary-search-study-guide/).

</details>

## Question 13 (multiple choice · 3.12)

What is displayed?

```text
PROCEDURE mix(a, b)
{
  RETURN(a * 10 + b)
}
DISPLAY(mix(3, 7) - mix(7, 3))
```

- (A) 0
- (B) 36
- (C) -36
- (D) 110

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `mix(3, 7)` is 37 and `mix(7, 3)` is 73, so the difference is −36. The order of the arguments matters.

- (A) assumes the order does not matter.
- (B) reverses the subtraction.
- (D) adds the two results (37 + 73) instead of subtracting.

Revisit: [Topic 3.12 study guide](/advanced-course-resources/computer-science-principles/3-12-calling-procedures-study-guide/).

</details>

## Question 14 (multiple choice · 3.13)

A program contains three identical blocks of eight lines, each using a different number. Which is the main benefit of replacing them with one procedure that has a parameter for the number?

- (A) The program no longer needs variables.
- (B) The code is written once, can be reused with any number, and only needs correcting in one place.
- (C) The program can no longer contain errors.
- (D) The program will run faster in every case.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** This is reuse and generalisation through a parameter.

- (A), (C) and (D) are claims the course does not make.

Revisit: [Topic 3.13 study guide](/advanced-course-resources/computer-science-principles/3-13-developing-procedures-study-guide/).

</details>

## Question 15 (multiple choice · 3.14)

Documentation for a library: `middleOf(a, b, c)` returns the middle value of three numbers when they are put in order (the median). What is displayed?

```text
DISPLAY(middleOf(9, 2, 5))
```

- (A) 16
- (B) 9
- (C) 5
- (D) 2

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** In order the numbers are 2, 5, 9, so the middle one is 5.

- (A) is the sum.
- (B) is the largest.
- (D) is the smallest.

Revisit: [Topic 3.14 study guide](/advanced-course-resources/computer-science-principles/3-14-libraries-study-guide/).

</details>

## Question 16 (multiple choice · 3.15)

Which set contains all the possible results of `RANDOM(1, 4) + 3`?

- (A) 1, 2, 3, 4
- (B) 3, 4, 5, 6, 7
- (C) 4, 5, 6, 7
- (D) 4, 5, 6

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `RANDOM(1, 4)` can return 1, 2, 3 or 4, so adding 3 gives 4, 5, 6 or 7.

- (A) forgets to add 3.
- (B) includes 3, which needs `RANDOM` to return 0.
- (D) omits 7.

Revisit: [Topic 3.15 study guide](/advanced-course-resources/computer-science-principles/3-15-random-values-study-guide/).

</details>

## Question 17 (multiple choice · 3.16)

A designer builds a simulation of crowd movement in a stadium but leaves out stairs. Which statement is most accurate?

- (A) The simulation is invalid because simulations must include every detail.
- (B) The simulation is an abstraction, and leaving out stairs may bias its results about how quickly the crowd can leave.
- (C) Leaving out stairs cannot affect the results.
- (D) The simulation will not run without stairs.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Abstraction removes details; whether the omission matters depends on the question, and here it could bias exit times.

- (A) Simulations are always simplified.
- (C) Stairs slow movement, so the omission can matter.
- (D) A simplified model runs fine.

Revisit: [Topic 3.16 study guide](/advanced-course-resources/computer-science-principles/3-16-simulations-study-guide/).

</details>

## Question 18 (multiple choice · 3.17)

Assume `n` holds 30. How many times does `count ← count + 1` run?

```text
n ← 30
count ← 0
REPEAT n TIMES
{
  REPEAT n TIMES
  {
    count ← count + 1
  }
}
DISPLAY(count)
```

- (A) 60
- (B) 30
- (C) 90
- (D) 900

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The inner loop runs 30 times for each of the 30 passes of the outer loop: 30 × 30 = 900.

- (A) adds the loop counts.
- (B) is a single loop.
- (C) is 30 × 3.

Revisit: [Topic 3.17 study guide](/advanced-course-resources/computer-science-principles/3-17-algorithmic-efficiency-study-guide/).

</details>

## Question 19 (multiple choice · 3.18)

Which problem is undecidable?

- (A) What is the best tour of 60 towns, found by trying every order?
- (B) Is this list sorted?
- (C) Is the whole number n even?
- (D) Given any program and input, will the program eventually stop?

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** This is the halting problem; no algorithm answers correctly for every program and input.

- (A) has an algorithm (try every order) but it takes an unreasonable time.
- (B) and (C) have always-correct, quick algorithms.

Revisit: [Topic 3.18 study guide](/advanced-course-resources/computer-science-principles/3-18-undecidable-problems-study-guide/).

</details>

## Question 20 (multiple select, choose two · 3.5)

Which **two** expressions are equivalent to `NOT(x > 3 AND y < 5)`?

- (A) `x < 3 OR y > 5`
- (B) `NOT(y < 5) OR NOT(x > 3)`
- (C) `x ≤ 3 OR y ≥ 5`
- (D) `x > 3 OR y < 5`
- (E) `x ≤ 3 AND y ≥ 5`

<details>
<summary>Answer and explanation</summary>

**Answers: (B) and (C).** De Morgan: the negation of an AND is the OR of the negations, and `NOT(x > 3)` is `x ≤ 3`, `NOT(y < 5)` is `y ≥ 5`.

- (A) mishandles the boundaries (3 and 5).
- (D) is the opposite combination.
- (E) uses AND.

Revisit: [Topic 3.5 study guide](/advanced-course-resources/computer-science-principles/3-5-boolean-expressions-study-guide/).

</details>

## Question 21 (multiple select, choose two · 3.17 and 3.18)

Which **two** statements are true?

- (A) A decidable problem may still need an unreasonable amount of time to solve.
- (B) Binary search can be used on any list, sorted or not.
- (C) A faster computer makes an undecidable problem decidable.
- (D) An algorithm that needs 2 to the power n steps is considered to run in reasonable time for large n.
- (E) Different correct algorithms for the same problem can have different efficiencies.

<details>
<summary>Answer and explanation</summary>

**Answers: (A) and (E).** Decidable means an algorithm exists, not that it is quick; and correct algorithms can differ in efficiency.

- (B) Binary search needs sorted data.
- (C) Speed is not what makes a problem undecidable.
- (D) Exponential growth is unreasonable.

Revisit: [Topic 3.17 study guide](/advanced-course-resources/computer-science-principles/3-17-algorithmic-efficiency-study-guide/). Revisit: [Topic 3.18 study guide](/advanced-course-resources/computer-science-principles/3-18-undecidable-problems-study-guide/).

</details>

## Question 22 (constructed response · 3.10 and 3.13)

Write a procedure `countEven(aList)` that returns how many elements of the list are even, using `FOR EACH`. Show the value returned for `[3, 8, 5, 10, 12]`.

<details>
<summary>Answer and explanation</summary>

```text
PROCEDURE countEven(aList)
{
  count ← 0
  FOR EACH item IN aList
  {
    IF(item MOD 2 = 0)
    {
      count ← count + 1
    }
  }
  RETURN(count)
}
```

For `[3, 8, 5, 10, 12]` the even elements are 8, 10 and 12, so it returns **3**.

Revisit: [Topic 3.10](/advanced-course-resources/computer-science-principles/3-10-lists-study-guide/) and [Topic 3.13](/advanced-course-resources/computer-science-principles/3-13-developing-procedures-study-guide/).

**Suggested Marlbridge rubric (4 marks)**

| Mark point | Marks |
|---|---|
| Procedure header with a list parameter | 1 |
| Counter initialised to 0 and a loop over every element | 1 |
| Even test with MOD and counter increment | 1 |
| RETURN of the count after the loop; result 3 | 1 |

</details>

## Question 23 (constructed response · 3.2)

A program stores song titles in a list `playlist` and plays them with `FOR EACH song IN playlist`. Explain how the list manages complexity in this program.

<details>
<summary>Answer and explanation</summary>

A full-credit answer: "The list `playlist` stores all the song titles under one name, and the loop plays each song without the code mentioning how many songs there are. Adding or removing a song changes only the list, not the code. Without the list the program would need a separate variable and a separate line of code for every song, which is longer and has to be edited whenever the number of songs changes."

Revisit: [Topic 3.2](/advanced-course-resources/computer-science-principles/3-2-data-abstraction-study-guide/).

**Suggested Marlbridge rubric (3 marks)**

| Mark point | Marks |
|---|---|
| Names the list and says what it stores | 1 |
| Links it to the loop that processes every song | 1 |
| Explains the alternative without a list and why it is worse | 1 |

</details>

## What to do next

Tick the questions you got right and look up the topics you missed in the table. If you missed two or more questions from one group, read the study guides for that group before moving on to the review.

| Questions | Topics | Study guides |
|---|---|---|
| 1, 2 | 3.1, 3.2 | [3.1](/advanced-course-resources/computer-science-principles/3-1-variables-assignments-study-guide/), [3.2](/advanced-course-resources/computer-science-principles/3-2-data-abstraction-study-guide/) |
| 3, 4 | 3.3, 3.4 | [3.3](/advanced-course-resources/computer-science-principles/3-3-mathematical-expressions-study-guide/), [3.4](/advanced-course-resources/computer-science-principles/3-4-strings-study-guide/) |
| 5, 20 | 3.5 | [3.5](/advanced-course-resources/computer-science-principles/3-5-boolean-expressions-study-guide/) |
| 6, 7 | 3.6, 3.7 | [3.6](/advanced-course-resources/computer-science-principles/3-6-conditionals-study-guide/), [3.7](/advanced-course-resources/computer-science-principles/3-7-nested-conditionals-study-guide/) |
| 8 | 3.8 | [3.8](/advanced-course-resources/computer-science-principles/3-8-iteration-study-guide/) |
| 9 | 3.9 | [3.9](/advanced-course-resources/computer-science-principles/3-9-developing-algorithms-study-guide/) |
| 10, 11, 22 | 3.10 | [3.10](/advanced-course-resources/computer-science-principles/3-10-lists-study-guide/) |
| 12 | 3.11 | [3.11](/advanced-course-resources/computer-science-principles/3-11-binary-search-study-guide/) |
| 13, 14, 22, 23 | 3.12, 3.13 | [3.12](/advanced-course-resources/computer-science-principles/3-12-calling-procedures-study-guide/), [3.13](/advanced-course-resources/computer-science-principles/3-13-developing-procedures-study-guide/) |
| 15 | 3.14 | [3.14](/advanced-course-resources/computer-science-principles/3-14-libraries-study-guide/) |
| 16, 17 | 3.15, 3.16 | [3.15](/advanced-course-resources/computer-science-principles/3-15-random-values-study-guide/), [3.16](/advanced-course-resources/computer-science-principles/3-16-simulations-study-guide/) |
| 18, 21 | 3.17 | [3.17](/advanced-course-resources/computer-science-principles/3-17-algorithmic-efficiency-study-guide/) |
| 19, 21 | 3.18 | [3.18](/advanced-course-resources/computer-science-principles/3-18-undecidable-problems-study-guide/) |

When you are ready, try the [Unit 3 review](/advanced-course-resources/computer-science-principles/unit-3-review/), which combines several topics in each question.
