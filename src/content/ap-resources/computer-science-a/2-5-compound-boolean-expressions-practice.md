---
resourceId: "mb-ap-csa-2.5-practice"
title: "Compound Boolean Expressions: Practice Questions (Computer Science A 2.5)"
description: "10 original Marlbridge practice questions on compound Boolean expressions with !, && and ||, with full answers, an explanation of every wrong option and a suggested rubric."
course: "computer-science-a"
unit: 2
topics: ["2.5"]
resourceType: "practice-questions"
prerequisites:
  - "Relational operators and Boolean expressions (Topic 2.2)"
  - "if and if-else-if statements (Topics 2.3 and 2.4)"
prerequisiteResources: ["mb-ap-csa-2.5-study-guide"]
learningObjectives:
  - "Evaluate expressions that use the logical operators !, && and || with the correct precedence"
  - "Write a compound Boolean expression for a range, an exclusion or a combination of conditions"
  - "Explain short-circuit evaluation and use it to guard a risky second condition"
  - "Find and fix typical errors: wrong operator, missing repeated variable and always-true conditions"
skills: ["2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.5-study-guide", "mb-ap-csa-2.5-revision-notes", "mb-ap-csa-2.5-checklist"]
next: "mb-ap-csa-2.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "Questions 1 to 7 are multiple choice; the rest ask for written code, a trace or an explanation."
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

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. Assume every code segment compiles unless a question says otherwise, and that no calculator is allowed.

## Question 1 (multiple choice · foundation)

With `a` true and `b` false, which expression is true?

- (A) `a && b`
- (B) `!a`
- (C) `a || b`
- (D) `!a || b`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `a || b` is true when at least one side is true, and `a` is true.

- (A) is false: `&&` needs both sides true, and `b` is false.
- (B) is false: `!a` is the opposite of true.
- (D) is `false || false`, which is false.
</details>

## Question 2 (multiple choice · core)

What is the value of `n % 2 == 0 || n > 10 && n < 15` when `n = 13`?

- (A) true, because 13 is between 10 and 15
- (B) false, because 13 is odd
- (C) true, because 13 is odd
- (D) false, because 13 is not greater than 10

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `&&` is evaluated before `||`. `n > 10` is true and `n < 15` is true, so `n > 10 && n < 15` is true. `n % 2 == 0` is false (13 is odd). The expression is `false || true`, which is true.

- (B) ignores the second operand of the `||`.
- (C) states the right result for the wrong reason: oddness makes the left side false, not the whole expression true.
- (D) is wrong: 13 is greater than 10.
</details>

## Question 3 (multiple choice · core)

Which expression is true exactly when `x` is **outside** the range 5 to 15 inclusive?

- (A) `x < 5 && x > 15`
- (B) `x <= 5 || x >= 15`
- (C) `x < 5 || x > 15`
- (D) `x > 5 && x < 15`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Outside the range means below 5 or above 15, joined by `||`, with the ends 5 and 15 excluded because they are inside the range.

- (A) can never be true: no number is both below 5 and above 15.
- (B) includes 5 and 15, which are inside the range.
- (D) is true exactly **inside** the range, ends excluded.
</details>

## Question 4 (multiple choice · core)

What is printed?

```java
public class Q4 {
    public static boolean test(String s, boolean v) {
        System.out.print(s);
        return v;
    }
    public static void main(String[] args) {
        if (test("A", true) || test("B", true) && test("C", false)) {
            System.out.print("X");
        }
    }
}
```

- (A) AX
- (B) ABX
- (C) ABCX
- (D) ABC

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `&&` has higher precedence, so the expression is `test("A") || (test("B") && test("C"))`. Evaluation is left to right with short-circuit: `test("A", true)` prints A and is true, so the `||` is already certain to be true and the right side (which contains B and C) is never evaluated. The condition is true, so X is printed.

- (B) evaluates B, but the `||` has already been decided.
- (C) evaluates every method call, ignoring short-circuit.
- (D) also ignores that the whole condition is true, so `X` is printed.
</details>

## Question 5 (multiple choice · core)

What is the result of the following code?

```java
int divisor = 0;
int value = 20;
boolean r = divisor != 0 && value / divisor > 2;
System.out.println(r);
```

- (A) true
- (B) false
- (C) The program throws an ArithmeticException.
- (D) The program does not compile.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `divisor != 0` is false. With `&&`, the right side is not evaluated, so the division by zero never happens. The result is false.

- (A) assumes the right side decides the result.
- (C) would happen if the operands were in the other order, `value / divisor > 2 && divisor != 0`.
- (D) is wrong: the code is valid.
</details>

## Question 6 (multiple choice · core)

A programmer writes `if (day == 6 || 7)` to test for the weekend. What is the problem?

- (A) It compiles and is true for 6 or 7.
- (B) It does not compile: `7` is an int, not a Boolean expression.
- (C) It compiles but is true only for 6.
- (D) It compiles and is always true.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The operator `||` needs Boolean operands on both sides. `7` is an int. The correct form is `day == 6 || day == 7`.

- (A) is how the sentence reads in English, but Java does not read it that way.
- (C) and (D) both assume the code compiles, but Java rejects an int as an operand of `||`.
</details>

## Question 7 (multiple choice · stretch)

How many of the integers from 1 to 20 make `n % 3 == 0 && n % 2 != 0 || n > 18` true?

- (A) 3
- (B) 5
- (C) 8
- (D) 6

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `&&` is evaluated before `||`, so the condition is "(a multiple of 3 and odd) or greater than 18". The multiples of 3 from 1 to 20 are 3, 6, 9, 12, 15 and 18; the odd ones are 3, 9 and 15. The values greater than 18 are 19 and 20, and neither is a multiple of 3, so there is no overlap. The set is {3, 9, 15, 19, 20}, which has 5 members.

- (A) 3 counts only the odd multiples of 3 and ignores the `|| n > 18` part.
- (C) 8 counts all six multiples of 3 and the two values above 18, ignoring the "odd" test.
- (D) 6 counts all multiples of 3 and ignores the rest of the condition.
</details>

## Question 8 (constructed response · core)

Write a Java Boolean expression for each condition, using the variable named. (5 marks)

(a) `age` is between 13 and 19 inclusive.
(b) `ch` (an int code) is not 65 and not 66.
(c) `score` is below 0 or above 100 (an invalid score).
(d) `n` is positive and even.
(e) `hour` is before 9 or at/after 17, and `holiday` is false.

<details>
<summary>Answer and explanation</summary>

**Model answers.**

(a) `age >= 13 && age <= 19`
(b) `ch != 65 && ch != 66`
(c) `score < 0 || score > 100`
(d) `n > 0 && n % 2 == 0`
(e) `(hour < 9 || hour >= 17) && !holiday`

**Suggested Marlbridge rubric (5 marks).** One mark for each correct expression. Penalise: `||` for (a); `||` for (b); `&&` for (c); a missing repeat of the variable (such as `age >= 13 && <= 19`); and in (e) missing brackets, which would make the `&&` bind to `hour >= 17 && !holiday` first. Accept `holiday == false` in place of `!holiday`.
</details>

## Question 9 (constructed response · core)

Complete the truth table for `!(p && q) || r`. (6 marks)

| `p` | `q` | `r` | `p && q` | `!(p && q)` | `!(p && q) \|\| r` |
|---|---|---|---|---|---|
| true | true | true | | | |
| true | true | false | | | |
| true | false | true | | | |
| false | true | false | | | |
| false | false | false | | | |

<details>
<summary>Answer and explanation</summary>

| `p` | `q` | `r` | `p && q` | `!(p && q)` | `!(p && q) \|\| r` |
|---|---|---|---|---|---|
| true | true | true | true | false | true |
| true | true | false | true | false | false |
| true | false | true | false | true | true |
| false | true | false | false | true | true |
| false | false | false | false | true | true |

**Suggested Marlbridge rubric (6 marks).** One mark for each correct row of the last three columns (5 marks); one further mark for a stated observation that the expression is false only when `p` and `q` are both true and `r` is false (the second row).
</details>

## Question 10 (constructed response · stretch)

A shop gives a discount if the customer is a member and spends at least 50, or if the spend is at least 200 whether or not the customer is a member. A student writes:

```java
boolean discount = isMember && spend >= 50 || spend >= 200;
```

(a) Explain how Java groups this expression, and say whether it matches the rule. (2 marks)

(b) Evaluate it for (member, 60), (non-member, 60), (non-member, 250) and (member, 45). (4 marks)

(c) Rewrite it with brackets so that the grouping is obvious. (1 mark)

<details>
<summary>Answer and explanation</summary>

**(a)** `&&` binds tighter than `||`, so Java reads it as `(isMember && spend >= 50) || spend >= 200`. This matches the rule: member with at least 50, or at least 200 regardless of membership.

**(b)**

| Customer | `isMember && spend >= 50` | `spend >= 200` | `discount` |
|---|---|---|---|
| member, 60 | true | false | true |
| non-member, 60 | false | false | false |
| non-member, 250 | false | true | true |
| member, 45 | false | false | false |

**(c)** `boolean discount = (isMember && spend >= 50) || spend >= 200;`

**Suggested Marlbridge rubric (7 marks).**

| Marks | Awarded for |
|---|---|
| 1 | States that `&&` is evaluated before `||` |
| 1 | Concludes the grouping matches the rule |
| 4 | One mark for each correct row in (b) |
| 1 | (c) brackets around the `&&` part (any equivalent grouping that keeps the meaning) |
</details>

## How did you do?

Questions 1 to 6 test the operators, precedence and short-circuit evaluation. If you missed Question 4 or 5, revisit "Short-circuit evaluation" in the [study guide](/advanced-course-resources/computer-science-a/2-5-compound-boolean-expressions-study-guide/). If you missed Question 3 or 8, review "Writing ranges". Then use the [checklist](/advanced-course-resources/computer-science-a/2-5-compound-boolean-expressions-checklist/).
