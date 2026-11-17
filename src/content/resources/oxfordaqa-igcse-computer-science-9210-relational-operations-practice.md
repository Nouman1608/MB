---
title: "OxfordAQA IGCSE Computer Science (9210): Relational operations in a programming language -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 2 – Programming"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 2.04
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "relational-operations-9210"
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on relational operators, boundary values, loop counts and selection chains."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-17
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Relational operations study guide](/resources/oxfordaqa-igcse-computer-science-9210-relational-operations/) | [Relational operations revision notes](/resources/oxfordaqa-igcse-computer-science-9210-relational-operations-revision-notes/)

These questions cover section 3.2.4 Relational operations in a programming language of the OxfordAQA
International GCSE Computer Science (9210) specification. The symbols =, ≠, <, >, ≤ and ≥ are used throughout.

---

## Section A

**1.** State whether each condition is True or False when `x ← 8`:
**(a)** `x ≥ 8` **(b)** `x ≠ 8` **(c)** `x < 8` **(d)** `x ≤ 9`. **[4]**

**2.** State the data type of the value produced by a relational operation. **[1]**

**3.** Write a condition for each rule:
**(a)** the number of items is at least 3 **(b)** the age is under 16 **(c)** the answer is anything other than
"Q". **[3]**

**4.** State the opposite condition of `level > 4`, without using the word NOT. **[1]**

**5.** A programmer writes `IF password == "Hal9" THEN` in Python. State the symbol the exam paper would use for the
same operator. **[1]**

## Section B

**6.** A shop gives free delivery when an order is worth 40 dollars or more. A programmer writes:

```
IF orderValue > 40 THEN
  delivery ← 0
ELSE
  delivery ← 5
ENDIF
```

**(a)** State the value of `delivery` when `orderValue` is 40. **[1]**
**(b)** Explain why this is an error and write the corrected condition. **[2]**
**(c)** State **three** values of `orderValue` that would test this selection statement well, and give a reason
for your choice. **[2]**

**7.** Study this pseudocode:

```
total ← 0
k ← 15
WHILE k > 3
  total ← total + k
  k ← k - 4
ENDWHILE
OUTPUT total
```

**(a)** State how many times the body of the loop is executed. **[1]**
**(b)** State the value output. **[1]**
**(c)** State the value output if the condition were changed to `k ≥ 3`. **[1]**

**8.** A ticket system sets a price from a customer's age:

```
IF age < 5 THEN
  price ← 0
ELSE IF age < 18 THEN
  price ← 3
ELSE IF age ≥ 65 THEN
  price ← 4
ELSE
  price ← 8
ENDIF
```

**(a)** State the price for ages 5, 17, 18 and 65. **[4]**
**(b)** Describe the range of ages that pay 3. **[1]**

**9.** Rewrite this loop using `REPEAT...UNTIL` so that it stops at the same point. Assume `score` is
below 100 when the loop is first reached, so the body runs at least once in both versions.

```
WHILE score < 100
  score ← score + bonus
ENDWHILE
```

**[2]**

**10.** Write pseudocode that inputs two integers and outputs `"First"`, `"Second"` or `"Equal"` to show which is
larger. **[4]**

**11.** A program asks `Continue (Y/N)?` and uses `IF reply = "Y" THEN`. A user types `y`.

**(a)** State the result of the condition. **[1]**
**(b)** Explain why. **[1]**

**12.** Explain why `IF 1 ≤ rating ≤ 5 THEN` should not be used in a program, and write a version that works in
most languages. **[2]**

**13.** Study this pseudocode, where `names` is an array holding `"Ola"`, `"Ben"`, `"Ivy"` and `"Tom"` in
positions 0 to 3:

```
i ← 0
WHILE i < 4 AND names[i] ≠ "Ivy"
  i ← i + 1
ENDWHILE
OUTPUT i
```

**(a)** State the value output. **[1]**
**(b)** The condition is changed to `WHILE names[i] ≠ "Zak"`. Explain what would go wrong. **[2]**

---

## Answers

**1.** (a) True [1] (b) False [1] (c) False [1] (d) True [1].

**2.** Boolean [1].

**3.** (a) `items ≥ 3` [1] (b) `age < 16` [1] (c) `answer ≠ "Q"` [1].

**4.** `level ≤ 4` [1].

**5.** `=` [1].

**6.** **(a)** 5 [1].
**(b)** An order of exactly 40 should have free delivery, but `40 > 40` is False [1]; the condition should be
`orderValue ≥ 40` [1].
**(c)** For example 39, 40 and 41 (or 39.99, 40 and 40.01) [1]: values just below, on and just above the boundary
show whether the operator includes 40 correctly [1].

**7.** **(a)** 3 [1] (`k` = 15, 11, 7; then `k` = 3 fails `k > 3`).
**(b)** 33 [1] (15 + 11 + 7).
**(c)** 36 [1] (the loop also runs for `k` = 3, adding 3).

**8.** **(a)** Age 5: 3 [1]; age 17: 3 [1]; age 18: 8 [1]; age 65: 4 [1].
**(b)** Ages 5 to 17 inclusive (at least 5 and under 18) [1].

**9.**

```
REPEAT
  score ← score + bonus
UNTIL score ≥ 100
```

`REPEAT...UNTIL` structure with the body inside [1]; opposite condition `score ≥ 100` [1].

**10.** One possible answer:

```
a ← STRING_TO_INT(USERINPUT)
b ← STRING_TO_INT(USERINPUT)
IF a > b THEN
  OUTPUT "First"
ELSE IF b > a THEN
  OUTPUT "Second"
ELSE
  OUTPUT "Equal"
ENDIF
```

Both values input [1]; correct test for the first being larger [1]; correct test for the second being larger [1];
"Equal" output when neither is larger [1].

**11.** **(a)** False [1].
**(b)** String comparison is case-sensitive, so `"y"` and `"Y"` are different characters with different
character codes [1].

**12.** Many languages do not allow two relational operators to be chained like this, or interpret it differently
from the mathematical meaning [1]; use `IF rating ≥ 1 AND rating ≤ 5 THEN` [1].


**13.** **(a)** 2 [1].
**(b)** "Zak" is not in the array, so the condition never becomes False and `i` keeps increasing past 3 [1];
the program then tries to read a position that does not exist in the array, causing an error [1].
---

## Where marks are usually lost

- Treating "or more" as `>` (Question 6).
- Stopping a trace one pass early or late (Question 7): test the condition before every pass.
- Forgetting that the `ELSE IF age ≥ 65` branch is only reached by ages 18 and over (Question 8).
- Keeping `<` in the `UNTIL` version instead of switching to the opposite operator.
- Missing the "Equal" case in Question 10.
