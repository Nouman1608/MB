---
resourceId: "mb-ap-csp-3.4-practice"
title: "Strings: Practice Questions (Computer Science Principles 3.4)"
description: "Nine original Marlbridge practice questions on concatenation, substrings, building strings in loops and choosing string versus number, with explanations and a suggested rubric."
course: "computer-science-principles"
unit: 3
topics: ["3.4"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csp-3.4-study-guide"]
learningObjectives:
  - "Define a string as an ordered sequence of characters"
  - "Evaluate concatenation and substring expressions"
  - "Trace code that builds or cuts strings, including inside a loop"
  - "Explain why each wrong option is wrong, not only why the right one is right"
skills: ["4"]
studyMinutes: 40
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.4-study-guide", "mb-ap-csp-3.4-revision-notes", "mb-ap-csp-3.4-checklist"]
next: "mb-ap-csp-3.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "9 original questions: multiple choice, multiple select and constructed response."
  - "Every answer explains why each wrong option fails."
  - "Constructed-response answers come with a suggested Marlbridge rubric."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. The code is Marlbridge's rendering of the exam reference notation (`←` assignment, `=` equality test, lists start at index 1, `DISPLAY` shows a value). Mark points are a **suggested Marlbridge rubric**, not an official scoring guideline. No calculator is needed or allowed. Try each question before opening its answer.

## Question 1 (multiple choice · foundation)

What is displayed?

```text
DISPLAY(concat("sun", "shine"))
```

- (A) sun shine
- (B) shinesun
- (C) sunshine
- (D) sun+shine

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `concat("sun", "shine")` joins the first string then the second with nothing in between.

- (A) inserts a space that neither string contains.
- (B) reverses the order.
- (D) invents a "+" symbol; concatenation adds no characters.

</details>

## Question 2 (multiple choice · core)

Using `substring(text, start, length)` with positions counted from 1, what does `substring("computer", 2, 3)` evaluate to?

- (A) com
- (B) omp
- (C) ompu
- (D) mpu

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Three characters starting at position 2 are o (2), m (3), p (4).

- (A) starts at position 1.
- (C) takes four characters.
- (D) starts at position 3.

</details>

## Question 3 (multiple choice · core)

What is displayed?

```text
word ← "banana"
part ← substring(word, 2, 3)
DISPLAY(concat(part, part))
```

- (A) anaana
- (B) nannan
- (C) banana
- (D) ana

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `"banana"` is b-a-n-a-n-a. Three characters from position 2 are `"ana"`. Joining it to itself gives `"anaana"`.

- (B) starts at position 3 instead of 2, giving `"nan"` twice.
- (C) is the original string.
- (D) forgets the second copy.

</details>

## Question 4 (multiple choice · foundation)

What does `concat("12", "34")` evaluate to?

```text
DISPLAY(concat("12", "34"))
```

- (A) "12 34"
- (B) "1234"
- (C) 46
- (D) "46"

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The two values are strings, so they are joined end to end.

- (A) adds a space that is not in either string.
- (C) and (D) add them as numbers, but they are strings.

</details>

## Question 5 (multiple choice · core)

What is displayed by the program?

```text
s ← "hello"
t ← substring(s, 1, 2)
DISPLAY(s)
```

- (A) hehe
- (B) hello
- (C) he
- (D) llo

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `substring` builds a new string and leaves `s` unchanged, so the last line shows the original.

- (A) joins `t` to itself, which no line does.
- (C) is the value of `t`, not `s`.
- (D) is the substring from position 3, which the program never builds.

</details>

## Question 6 (multiple choice · core)

What is displayed?

```text
result ← ""
REPEAT 3 TIMES
{
  result ← concat(result, "ha")
}
DISPLAY(result)
```

- (A) hhaa
- (B) hahaha
- (C) hahah
- (D) ha

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Each pass adds `"ha"` to the end: `""` → `"ha"` → `"haha"` → `"hahaha"`.

- (A) mixes up the letters.
- (C) cuts the last character off.
- (D) shows only one pass.

</details>

## Question 7 (multiple select, choose two · core)

Let `word` be `"concatenate"`. Which **two** expressions evaluate to `"cat"`?

- (A) `concat(substring(word, 1, 1), "at")`
- (B) `substring(word, 4, 3)`
- (C) `concat("at", "c")`
- (D) `substring(word, 5, 3)`
- (E) `substring(word, 3, 3)`

<details>
<summary>Answer and explanation</summary>

**Answers: (A) and (B).** `"concatenate"` is c-o-n-c-a-t-e-n-a-t-e. Positions 4, 5, 6 are c, a, t, and `"c"` joined to `"at"` is also `"cat"`.

- (C) gives `"atc"`, the wrong order.
- (D) gives `"ate"`.
- (E) gives `"nca"`.

</details>

## Question 8 (constructed response · core)

The variables `first` and `last` hold `"Priya"` and `"Rao"`. (a) Write code that stores in `label` the text `Rao, Priya` (surname, comma, space, first name) and displays it. (b) State what is displayed. (c) State how many characters `label` contains.

<details>
<summary>Answer and explanation</summary>

(a) One correct answer:

```text
label ← concat(concat(last, ", "), first)
DISPLAY(label)
```

(b) `Rao, Priya` is displayed.

(c) 10 characters: R, a, o (3) + comma (1) + space (1) + P, r, i, y, a (5) = 10.

**Suggested Marlbridge rubric (4 marks)**

| Mark point | Marks |
|---|---|
| (a) Joins `last`, then a comma-and-space string, then `first`, in that order | 1 |
| (a) Nests the two `concat` calls correctly and displays the result | 1 |
| (b) Rao, Priya | 1 |
| (c) 10, with the space counted | 1 |

</details>

## Question 9 (constructed response · core)

Variables `w1`, `w2` and `w3` hold `"random"`, `"access"` and `"memory"`. (a) Write code that displays a three-letter code made from the first letter of each word, in order. (b) State the displayed code. (c) Explain why the order of the `concat` calls matters.

<details>
<summary>Answer and explanation</summary>

(a) One correct answer:

```text
code ← concat(concat(substring(w1, 1, 1), substring(w2, 1, 1)), substring(w3, 1, 1))
DISPLAY(code)
```

(b) `ram`.

(c) Concatenation joins strings in the order given, so changing the order changes the result: joining the same three letters in a different order would display a different code.

**Suggested Marlbridge rubric (4 marks)**

| Mark point | Marks |
|---|---|
| (a) Three `substring(..., 1, 1)` calls, one per word | 1 |
| (a) Joins them with two `concat` calls in the right order | 1 |
| (b) ram | 1 |
| (c) Order of joining decides order of characters | 1 |

</details>

## How did you do?

Count the questions you got right first time, then read the explanation for every one you missed, including the wrong options you rejected correctly, because the distractors show you the typical slips. Anything you missed twice goes onto your revision list for the [revision notes](/advanced-course-resources/computer-science-principles/3-4-strings-revision-notes/); re-read the matching section of the [study guide](/advanced-course-resources/computer-science-principles/3-4-strings-study-guide/) before trying again.
