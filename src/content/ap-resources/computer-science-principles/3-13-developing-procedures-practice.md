---
resourceId: "mb-ap-csp-3.13-practice"
title: "Developing Procedures: Practice Questions (Computer Science Principles 3.13)"
description: "Nine original Marlbridge practice questions on writing procedures, parameters, return values, reuse and explaining how procedural abstraction manages complexity, with a suggested rubric."
course: "computer-science-principles"
unit: 3
topics: ["3.13"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csp-3.13-study-guide"]
learningObjectives:
  - "Explain how procedural abstraction manages complexity"
  - "Write procedures with parameters, with and without a returned value"
  - "Refactor repeated code into a general procedure"
  - "Explain why each wrong option is wrong, not only why the right one is right"
skills: ["3"]
studyMinutes: 40
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.13-study-guide", "mb-ap-csp-3.13-revision-notes", "mb-ap-csp-3.13-checklist"]
next: "mb-ap-csp-3.13-checklist"
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

Which statement best describes procedural abstraction?

- (A) Writing every statement in a program on a separate line.
- (B) Using a variable with a meaningful name.
- (C) Giving a name to a process so it can be used without knowing how it works inside.
- (D) Storing several values in a list.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Procedural abstraction hides the "how" behind a name that says "what".

- (A) is about layout.
- (B) is about naming variables.
- (D) describes data abstraction with lists.

</details>

## Question 2 (multiple choice · core)

A programmer copies the same ten lines three times, changing only one number each time. What is the best way to improve the program?

- (A) Rename the variables in each copy.
- (B) Add comments to each copy.
- (C) Write one procedure with a parameter for the number that changes, and call it three times.
- (D) Delete two of the copies.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** A parameter generalises the shared code so the ten lines exist once.

- (A) and (B) leave the duplication in place.
- (D) loses behaviour.

</details>

## Question 3 (multiple choice · core)

A procedure `total(aList)` adds up the numbers in a list and returns the sum. A programmer replaces the loop inside with a different method that still returns the same sum for every list. What must the programmer do about the code that calls `total`?

- (A) Rewrite every call to match the new method.
- (B) Add a second parameter to each call.
- (C) Nothing, because what the procedure does has not changed.
- (D) Tell all users to rename the parameter.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Callers depend on what the procedure does, not on its internal steps.

- (A), (B) and (D) are needed only if the behaviour or the interface changed.

</details>

## Question 4 (multiple choice · core)

What is displayed?

```text
PROCEDURE countAbove(aList, limit)
{
  count ← 0
  FOR EACH item IN aList
  {
    IF(item > limit)
    {
      count ← count + 1
    }
  }
  RETURN(count)
}
DISPLAY(countAbove([12, 5, 15, 10, 11], 10))
```

- (A) 5
- (B) 0
- (C) 4
- (D) 3

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** `countAbove` counts the elements greater than the limit 10 in the list passed in. The values 12, 15 and 11 are greater than 10, so it returns 3.

- (A) counts every element.
- (B) would be the result if the count were never updated.
- (C) would need another value above 10.

</details>

## Question 5 (multiple choice · core)

A procedure is meant to compute a discounted price that other parts of the program will then add to a bill. Which design is best?

- (A) It displays the discounted price and returns nothing.
- (B) It reads the price from a fixed variable and displays the result.
- (C) It takes the price as a parameter and returns the discounted price.
- (D) It has no parameters and always uses the price 100.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** A parameter makes it general, and returning the value lets the caller use it in the bill.

- (A) and (B) show the number but the program cannot reuse it.
- (D) cannot be reused for other prices.

</details>

## Question 6 (multiple choice · core)

Which is a benefit of dividing a large program into procedures (modularity)?

- (A) The program will always run faster.
- (B) Each procedure can be written and tested separately.
- (C) The program no longer needs any variables.
- (D) The program needs no testing as a whole.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Separate modules are easier to develop, test and fix individually.

- (A) Speed is not guaranteed.
- (C) Procedures use variables.
- (D) Combining modules still needs testing.

</details>

## Question 7 (multiple select, choose two · core)

Which **two** statements about procedures are correct?

- (A) All code in a program must be inside a procedure.
- (B) A procedure must always display its result.
- (C) A parameter allows a procedure to be reused with a range of arguments.
- (D) A RETURN statement can appear anywhere in the procedure and returns control immediately.
- (E) Once written, the inside of a procedure can never be changed.

<details>
<summary>Answer and explanation</summary>

**Answers: (C) and (D).** Parameters generalise; RETURN ends the call at once.

- (A) Not all code is inside a procedure.
- (B) Procedures may return values and display nothing.
- (E) The inside can change as long as what it does is preserved.

</details>

## Question 8 (constructed response · core)

(a) Write a procedure `bigger(a, b)` that returns the larger of its two parameters. (b) Use it, twice and without any new comparison code, to display the largest of the variables `p`, `q` and `r`. (c) State what is displayed when `p` is 4, `q` is 9 and `r` is 6.

<details>
<summary>Answer and explanation</summary>

(a)

```text
PROCEDURE bigger(a, b)
{
  IF(a > b)
  {
    RETURN(a)
  }
  RETURN(b)
}
```

(b) `DISPLAY(bigger(bigger(p, q), r))`

(c) `bigger(4, 9)` returns 9, then `bigger(9, 6)` returns 9, so `9` is displayed.

**Suggested Marlbridge rubric (5 marks)**

| Mark point | Marks |
|---|---|
| (a) Procedure with two parameters and an IF comparing them | 1 |
| (a) Returns the larger value on every path (including equal values) | 1 |
| (b) Calls `bigger` on two values and passes the result to a second call | 1 |
| (b) Displays the final result | 1 |
| (c) 9 with the intermediate returns shown | 1 |

</details>

## Question 9 (constructed response · core)

A program for a school uses a procedure `countAbove(aList, limit)` in three places: to count high test scores, to count hot days and to count heavy parcels. Explain how procedural abstraction manages complexity in this program. Mention parameters in your answer.

<details>
<summary>Answer and explanation</summary>

A full-credit answer:

"`countAbove` gives the process of counting how many values in a list exceed a limit a single name. The three parts of the program only need to call `countAbove` with their own list and limit, without knowing how the counting is done. Its two parameters, `aList` and `limit`, make the same procedure work for test scores, temperatures and parcel weights, so the counting loop is written once and reused. Without the procedure the counting code would have to be copied three times, making the program longer and meaning a mistake would have to be fixed in three places."

An answer that only says "it makes the program shorter" earns little.

**Suggested Marlbridge rubric (5 marks)**

| Mark point | Marks |
|---|---|
| Names the procedure and states what it does (counts values above a limit) | 1 |
| States that callers use it without needing to know how it works | 1 |
| Explains the role of the parameters in allowing reuse with different lists and limits | 1 |
| States the contrast: code would be repeated three times otherwise | 1 |
| Links to reduced complexity or easier correction (one place to fix) | 1 |

</details>

## How did you do?

Count the questions you got right first time, then read the explanation for every one you missed, including the wrong options you rejected correctly, because the distractors show you the typical slips. Anything you missed twice goes onto your revision list for the [revision notes](/advanced-course-resources/computer-science-principles/3-13-developing-procedures-revision-notes/); re-read the matching section of the [study guide](/advanced-course-resources/computer-science-principles/3-13-developing-procedures-study-guide/) before trying again.
