---
resourceId: "mb-ap-csp-3.18-practice"
title: "Undecidable Problems: Practice Questions (Computer Science Principles 3.18)"
description: "Nine original Marlbridge practice questions on decidable and undecidable problems, the halting problem, solvable instances and how this differs from unreasonable running time, with a suggested rubric."
course: "computer-science-principles"
unit: 3
topics: ["3.18"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csp-3.18-study-guide"]
learningObjectives:
  - "Define decidable and undecidable problems"
  - "Describe the halting problem and why no general algorithm can solve it"
  - "Explain that an undecidable problem can have solvable instances"
  - "Explain why each wrong option is wrong, not only why the right one is right"
skills: ["1"]
studyMinutes: 40
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.18-study-guide", "mb-ap-csp-3.18-revision-notes", "mb-ap-csp-3.18-checklist"]
next: "mb-ap-csp-3.18-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "10 original questions: multiple choice, multiple select and constructed response."
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

Which statement defines a **decidable** problem?

- (A) A problem that has never been attempted.
- (B) A problem with more than one answer.
- (C) A decision problem for which an algorithm can be written that produces a correct output for all inputs.
- (D) A problem that every computer can solve instantly.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Decidable means an algorithm always gives the right yes-or-no answer.

- (A) and (B) are unrelated.
- (D) Speed is not part of the definition.

</details>

## Question 2 (multiple choice · core)

Which statement best describes an **undecidable** problem?

- (A) No algorithm can be constructed that is always capable of providing a correct yes-or-no answer.
- (B) A problem whose answer is always no.
- (C) A problem that has not yet been solved by anyone.
- (D) An algorithm exists but takes an unreasonable amount of time.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Undecidability is about the nonexistence of an always-correct algorithm.

- (B) The answer may be yes or no.
- (C) Not yet solved is different from provably unsolvable.
- (D) describes unreasonable time.

</details>

## Question 3 (multiple choice · foundation)

Which of these problems is decidable?

- (A) Neither is decidable.
- (B) Both are decidable.
- (C) "Is the whole number n even?"
- (D) "Given any program and input, will the program eventually stop?"

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `n MOD 2 = 0` answers correctly for every whole number.

- (A) and (B) contradict the above.
- (D) is the halting problem, which is undecidable.

</details>

## Question 4 (multiple choice · core)

The halting problem is undecidable. Which statement follows?

- (A) A faster computer could answer for every program.
- (B) No program can ever be shown to stop.
- (C) Every program that runs for a long time is an infinite loop.
- (D) Some programs can be shown to stop or not stop, but no single algorithm can answer correctly for every program and input.

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Some instances are easy to decide, but there is no algorithm for all of them.

- (A) Speed does not matter.
- (B) is false: a program with no loops always stops.
- (C) is false: long running is not the same as forever.

</details>

## Question 5 (multiple choice · core)

A problem has an algorithm that always gives the correct answer but needs more steps than the number of atoms in the universe for large inputs. How should it be described?

- (A) Not a decision problem.
- (B) Solvable in reasonable time.
- (C) Undecidable.
- (D) Decidable but not solvable in a reasonable amount of time.

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** An algorithm exists (so it is decidable), but its running time is unreasonable.

- (A) Nothing says it is not a decision problem.
- (B) contradicts the information.
- (C) Undecidable means no algorithm exists.

</details>

## Question 6 (multiple choice · core)

The code below is run with `n` equal to 5. What happens?

```text
REPEAT UNTIL(n = 0)
{
  n ← n - 2
}
DISPLAY(n)
```

- (A) It displays 0.
- (B) It stops after 5 passes.
- (C) It never stops, because `n` skips over 0.
- (D) It stops after 3 passes.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `n` goes 5, 3, 1, −1, −3, ..., so `n` never equals 0 and the loop never ends. This shows that an instance of the halting problem can sometimes be decided by inspection.

- (A) The loop never finishes, so nothing is displayed.
- (B) and (D) assume `n` reaches 0.

</details>

## Question 7 (multiple choice · core)

Is it correct to say that nothing can be decided about any instance of an undecidable problem?

- (A) Yes: undecidable problems have only one instance.
- (B) Yes: every instance is unsolvable.
- (C) No: undecidable problems are always solved quickly.
- (D) No: an undecidable problem may have some instances that can be solved by an algorithm.

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Undecidability concerns the lack of an algorithm for all instances.

- (A) and (B) are false.
- (C) is false: speed is not the issue.

</details>

## Question 8 (multiple select, choose two · core)

Which **two** statements are correct?

- (A) Undecidable and unreasonable running time are different ideas.
- (B) The halting problem asks whether a program will eventually stop for a given input.
- (C) A decidable problem is always fast to solve.
- (D) An undecidable problem has no instances that anyone can solve.
- (E) A faster computer would make an undecidable problem decidable.

<details>
<summary>Answer and explanation</summary>

**Answers: (A) and (B).** (A) and (B) state the key ideas.

- (C) Decidable only means an algorithm exists.
- (D) Some instances can be solved.
- (E) Speed is not the barrier.

</details>

## Question 9 (constructed response · stretch)

A software company claims that its product `LoopCheck` can read any program and input and always correctly report whether the program will run forever. Explain, using the idea behind the halting problem, why this claim cannot be true.

<details>
<summary>Answer and explanation</summary>

A full-credit answer:

"The question LoopCheck claims to answer is the halting problem: will a given program stop on a given input? This is an undecidable problem, so no algorithm can be written that is always correct for every program and input. Suppose LoopCheck did exist. We could write a program that asks LoopCheck about itself and does the opposite of what it says: it loops forever if LoopCheck says it will stop, and stops if LoopCheck says it will run forever. Whatever LoopCheck answers about that program is wrong, which is a contradiction. LoopCheck may be right for many programs, such as those with no loops, but not for all."

An answer that says only "it would take too long" is incorrect: the problem is not about time.

**Suggested Marlbridge rubric (5 marks)**

| Mark point | Marks |
|---|---|
| Identifies the claim as the halting problem | 1 |
| States that it is undecidable: no algorithm is always correct for all inputs | 1 |
| Gives the idea of a program that does the opposite of what the checker predicts | 1 |
| Concludes that the checker would be wrong for that program, a contradiction | 1 |
| Notes that it may work for some programs or special cases (instances), and that the issue is not speed | 1 |

</details>

## Question 10 (constructed response · core)

Classify each problem as (i) decidable and solvable in reasonable time, (ii) decidable but not solvable in reasonable time, or (iii) undecidable, and give a reason. (a) "Is the list `[2, 4, 6, 9]` sorted?" (b) "Given any program and input, does it eventually stop?" (c) "What is the best tour through 60 towns?" using only the method of trying every possible order.

<details>
<summary>Answer and explanation</summary>

(a) **(i)** Decidable and quick. A single pass comparing each item with the next always gives the correct answer (here, yes: 2 ≤ 4 ≤ 6 ≤ 9), using only three comparisons.

(b) **(iii)** Undecidable. It is the halting problem: no algorithm is always capable of answering correctly for every program and input.

(c) **(ii)** Decidable but not in reasonable time. Trying every order is an algorithm that gives the correct answer, but the number of orders (59!) is so large that it would take an unreasonable amount of time. A heuristic could give an approximate tour quickly.

**Suggested Marlbridge rubric (5 marks)**

| Mark point | Marks |
|---|---|
| (a) Classified as decidable and quick, with a reason | 1 |
| (b) Classified as undecidable and named as the halting problem (or equivalent reason) | 1 |
| (c) Classified as decidable but unreasonable in time | 1 |
| (c) Reason: an algorithm exists but the number of orders grows factorially | 1 |
| Shows the difference between (b) and (c): no algorithm exists versus an algorithm exists that is too slow | 1 |

</details>

## How did you do?

Count the questions you got right first time, then read the explanation for every one you missed, including the wrong options you rejected correctly, because the distractors show you the typical slips. Anything you missed twice goes onto your revision list for the [revision notes](/advanced-course-resources/computer-science-principles/3-18-undecidable-problems-revision-notes/); re-read the matching section of the [study guide](/advanced-course-resources/computer-science-principles/3-18-undecidable-problems-study-guide/) before trying again.
