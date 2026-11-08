---
resourceId: "mb-ap-csp-3.6-practice"
title: "Conditionals: Practice Questions (Computer Science Principles 3.6)"
description: "Nine original Marlbridge practice questions on tracing IF and IF/ELSE, independent IF statements, writing conditions and testing branches, with explanations and a suggested rubric."
course: "computer-science-principles"
unit: 3
topics: ["3.6"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csp-3.6-study-guide"]
learningObjectives:
  - "Explain selection and the flow of control"
  - "Trace IF and IF/ELSE statements and say which block runs"
  - "Write a conditional from a written description"
  - "Explain why each wrong option is wrong, not only why the right one is right"
skills: ["2", "4"]
studyMinutes: 40
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.6-study-guide", "mb-ap-csp-3.6-revision-notes", "mb-ap-csp-3.6-checklist"]
next: "mb-ap-csp-3.6-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "9 original questions: multiple choice, multiple select and constructed response."
  - "Every answer explains why each wrong option fails."
  - "Constructed-response answers come with a suggested Marlbridge rubric."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. The code is Marlbridge's rendering of the exam reference notation (`←` assignment, `=` equality test, lists start at index 1, `DISPLAY` shows a value). Mark points are a **suggested Marlbridge rubric**, not an official scoring guideline. No calculator is needed or allowed. Try each question before opening its answer.

## Question 1 (multiple choice · foundation)

What is displayed?

```text
x ← 10
IF(x > 10)
{
  y ← 1
}
ELSE
{
  y ← 2
}
DISPLAY(y)
```

- (A) Nothing is displayed.
- (B) 1 2
- (C) 1
- (D) 2

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** `x > 10` is false for 10, so the ELSE block runs and `y` becomes 2.

- (A) `DISPLAY` runs after the conditional.
- (B) would need both blocks to run.
- (C) would be correct for `x ≥ 10`.

</details>

## Question 2 (multiple choice · core)

What is displayed?

```text
x ← 15
IF(x > 10)
{
  DISPLAY("A")
}
IF(x > 5)
{
  DISPLAY("B")
}
ELSE
{
  DISPLAY("C")
}
```

- (A) A C
- (B) A B
- (C) A
- (D) B

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The two IFs are independent. `x > 10` is true so `A` is shown. The second IF tests `x > 5`, which is true, so `B` is shown and its ELSE is skipped.

- (A) runs the ELSE after the second IF as well.
- (C) assumes the second IF is an ELSE of the first.
- (D) misses the first IF.

</details>

## Question 3 (multiple choice · foundation)

A pass mark is 50. Which condition is true for a score of exactly 50 and for all higher scores?

- (A) `score ≤ 50`
- (B) `score > 50`
- (C) `score ≥ 50`
- (D) `score = 50`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `≥` includes 50 and everything above.

- (A) is true for 50 and below.
- (B) excludes 50.
- (D) is true for 50 only.

</details>

## Question 4 (multiple choice · core)

What is displayed when `total` is 80?

```text
total ← 80
discount ← 0
IF(total ≥ 100)
{
  discount ← 10
}
DISPLAY(total - discount)
```

- (A) 80
- (B) 90
- (C) 10
- (D) 70

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `80 ≥ 100` is false, so the block is skipped. `discount` keeps its starting value of 0 and the display is 80 - 0.

- (B) and (D) assume the block ran with a different discount.
- (C) 10 is the discount that would apply only if the block had run.

</details>

## Question 5 (multiple choice · core)

`isOpen` holds `true`. What is displayed?

```text
isOpen ← true
IF(isOpen)
{
  DISPLAY("open")
}
ELSE
{
  DISPLAY("closed")
}
```

- (A) closed
- (B) open closed
- (C) open
- (D) Nothing is displayed.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** A Boolean variable can be the condition. It is true, so the first block runs and the ELSE block is skipped.

- (A) would need `isOpen` to be false.
- (B) both blocks cannot run.
- (D) one of the two blocks always runs.

</details>

## Question 6 (multiple choice · core)

A program must display `bonus` for a score of at least 90 and `no bonus` otherwise. Which segment is correct?

- (A) `IF(score ≥ 90) {DISPLAY("bonus")} ELSE {DISPLAY("no bonus")}`
- (B) `IF(score ≥ 90) {DISPLAY("bonus")}` followed by `IF(score < 90) {DISPLAY("bonus")}`
- (C) `IF(score > 90) {DISPLAY("bonus")} ELSE {DISPLAY("no bonus")}`
- (D) `IF(score = 90) {DISPLAY("bonus")} ELSE {DISPLAY("no bonus")}`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `≥ 90` includes the boundary and the ELSE covers all other cases.

- (B) shows `bonus` for every score and does not display `no bonus` at all.
- (C) gives "no bonus" for a score of exactly 90.
- (D) awards the bonus only to a score of exactly 90.

</details>

## Question 7 (multiple select, choose two · core)

A conditional has the form IF(c) {first} ELSE {second}. Which **two** statements are true?

- (A) If c is false, the program ends.
- (B) Both blocks run if c is true.
- (C) Exactly one of the blocks runs each time the conditional is reached.
- (D) If c is false, the first block runs.
- (E) The statements after the conditional run whichever block was chosen.

<details>
<summary>Answer and explanation</summary>

**Answers: (C) and (E).** The conditional chooses one path, and control rejoins afterwards.

- (A) The program continues after the conditional.
- (B) Only one block runs.
- (D) The first block runs when c is **true**.

</details>

## Question 8 (constructed response · core)

A leisure centre charges 4 for children under 13, 6 for people aged 13 to 64, and 3 for people aged 65 or over. (a) Write code that uses `age` to set `price` for these three groups, using IF statements only (you do not need nesting if you write the middle condition with AND). (b) State `price` for ages 12, 13, 64 and 65.

<details>
<summary>Answer and explanation</summary>

(a) One correct answer, using three independent tests so that no nesting is needed:

```text
IF(age < 13)
{
  price ← 4
}
IF(age ≥ 13 AND age ≤ 64)
{
  price ← 6
}
IF(age ≥ 65)
{
  price ← 3
}
```

(b) Age 12 gives 4; age 13 gives 6; age 64 gives 6; age 65 gives 3. The boundaries 13 and 65 fall in the group that includes them.

**Suggested Marlbridge rubric (5 marks)**

| Mark point | Marks |
|---|---|
| Condition for under-13 group correct (`age < 13`) | 1 |
| Condition for the middle group uses AND with correct boundary operators (`≥ 13`, `≤ 64`) | 1 |
| Condition for the 65+ group correct (`≥ 65`) | 1 |
| Each branch sets the correct price | 1 |
| Prices for 12, 13, 64, 65 are 4, 6, 6, 3 | 1 |

</details>

## Question 9 (constructed response · core)

The segment below is run with `temp` equal to 30, then with `temp` equal to 18. (a) State what is displayed each time. (b) Explain why `mild` is not displayed as well as `hot` when `temp` is 30.

```text
IF(temp > 25)
{
  DISPLAY("hot")
}
ELSE
{
  DISPLAY("mild")
}
```

<details>
<summary>Answer and explanation</summary>

(a) With `temp` = 30: `30 > 25` is true, so `hot` is displayed. With `temp` = 18: `18 > 25` is false, so the ELSE block runs and `mild` is displayed.

(b) The ELSE block belongs to the **same** IF as `temp > 25`. Because that condition is true for 30, the first block runs and the ELSE is skipped. An IF ... ELSE always runs exactly one block, so the ELSE cannot run when the condition is true.

**Suggested Marlbridge rubric (4 marks)**

| Mark point | Marks |
|---|---|
| Displays `hot` for 30 | 1 |
| Displays `mild` for 18 | 1 |
| Explains that ELSE is attached to the same condition | 1 |
| States that only one block runs | 1 |

</details>

## How did you do?

Count the questions you got right first time, then read the explanation for every one you missed, including the wrong options you rejected correctly, because the distractors show you the typical slips. Anything you missed twice goes onto your revision list for the [revision notes](/advanced-course-resources/computer-science-principles/3-6-conditionals-revision-notes/); re-read the matching section of the [study guide](/advanced-course-resources/computer-science-principles/3-6-conditionals-study-guide/) before trying again.
