---
resourceId: "mb-ap-csa-2.4-practice"
title: "Nested if Statements: Practice Questions (Computer Science A 2.4)"
description: "10 original Marlbridge practice questions on nested if statements and multiway if-else-if chains, with full answers, an explanation of every wrong option and a suggested rubric."
course: "computer-science-a"
unit: 2
topics: ["2.4"]
resourceType: "practice-questions"
prerequisites:
  - "One-way and two-way if statements (Topic 2.3)"
  - "Boolean expressions with relational operators (Topic 2.2)"
prerequisiteResources: ["mb-ap-csa-2.4-study-guide"]
learningObjectives:
  - "Write nested if statements and explain when the inner condition is evaluated"
  - "Write a multiway if-else-if chain with a trailing else and explain why at most one body runs"
  - "Predict output when conditions are ordered in different ways, including the dangling else"
  - "Choose between nesting, an else-if chain and separate ifs for a given problem"
skills: ["2", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.4-study-guide", "mb-ap-csa-2.4-revision-notes", "mb-ap-csa-2.4-checklist"]
next: "mb-ap-csa-2.4-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. Assume every code segment compiles unless a question says otherwise, and that no calculator is allowed.

## Question 1 (multiple choice · foundation)

What is printed?

```java
int x = 12;
if (x > 10) {
    System.out.print("A");
} else if (x > 5) {
    System.out.print("B");
} else {
    System.out.print("C");
}
System.out.print("D");
```

- (A) A
- (B) AB
- (C) AD
- (D) ABD

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `12 > 10` is true, so `A` is printed and the rest of the chain is skipped. The statement after the chain then prints `D`. Output: `AD`.

- (A) forgets the final `print("D")`, which is outside the chain.
- (B) also runs the second branch, but `else if` is skipped once the first condition is true.
- (D) runs two branches of the chain.
</details>

## Question 2 (multiple choice · core)

What is printed?

```java
int n = 7;
if (n > 0) {
    if (n % 2 == 0) {
        System.out.println("positive even");
    } else {
        System.out.println("positive odd");
    }
} else {
    System.out.println("not positive");
}
```

- (A) positive even
- (B) positive odd
- (C) not positive
- (D) nothing is printed

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `7 > 0` is true, so the nested if-else is reached. `7 % 2` is 1, so `7 % 2 == 0` is false and the inner else prints `positive odd`.

- (A) mistakes 7 for an even number.
- (C) would be printed only if the outer condition were false.
- (D) is not possible: the outer if-else and the inner if-else each have an else.
</details>

## Question 3 (multiple choice · core)

What is printed?

```java
int a = 4;
int b = 9;
if (a > 5)
    if (b > 5)
        System.out.println("X");
else
    System.out.println("Y");
System.out.println("Z");
```

- (A) X then Z
- (B) Y then Z
- (C) Z
- (D) X then Y then Z

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The `else` pairs with the nearest unmatched `if`, which is `if (b > 5)`, despite the indentation. The outer condition `4 > 5` is false, so the whole inner statement (including its else) is skipped. Only `Z` is printed.

- (A) assumes the inner condition is evaluated, but the outer one blocks it.
- (B) pairs the else with the outer if, as the indentation suggests.
- (D) runs both branches of the inner statement.
</details>

## Question 4 (multiple choice · core)

A programmer wants `s` to be "low" for `v` below 10, "mid" for 10 to 19, and "high" for 20 or more. Which code is correct?

- (A) `if (v >= 20) { s = "high"; } else if (v >= 10) { s = "mid"; } else { s = "low"; }`
- (B) `if (v >= 10) { s = "mid"; } else if (v >= 20) { s = "high"; } else { s = "low"; }`
- (C) `if (v < 10) { s = "low"; } if (v < 20) { s = "mid"; } else { s = "high"; }`
- (D) `if (v > 20) { s = "high"; } else if (v > 10) { s = "mid"; } else { s = "low"; }`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The conditions run from the most demanding to the least, and the boundaries (20 and 10) are in the correct bands. For `v = 20` it gives "high", for 10 "mid", for 9 "low".

- (B) tests `v >= 10` first, so every value of 20 or more is "mid": the high branch can never run.
- (C) uses an if followed by an if-else: for `v = 5`, the first if sets "low", but then `5 < 20` is true and "mid" overwrites it.
- (D) uses `>` instead of `>=`, so 20 gives "mid" and 10 gives "low".
</details>

## Question 5 (multiple choice · core)

What is the value of `r` after the code runs?

```java
int k = 3;
int r = 0;
if (k > 1) {
    r = r + 1;
}
if (k > 2) {
    r = r + 2;
} else if (k > 0) {
    r = r + 4;
}
if (k > 3) {
    r = r + 8;
} else {
    r = r + 16;
}
```

- (A) 19
- (B) 23
- (C) 7
- (D) 15

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** There are three separate statements. First: 3 > 1 is true, so `r` = 1. Second (if-else-if): 3 > 2 is true, so `r` = 1 + 2 = 3 and the `else if` is skipped. Third (if-else): 3 > 3 is false, so the else body runs: `r` = 3 + 16 = 19.

- (B) is 1 + 2 + 4 + 16, which also runs the `else if` branch, but it is skipped once the first condition in the second statement is true.
- (C) is 1 + 2 + 4, which ignores the third statement and also runs the skipped `else if`.
- (D) is 1 + 2 + 4 + 8, which runs bodies that are not selected.
</details>

## Question 6 (multiple choice · stretch)

Consider the method.

```java
public static String size(int n) {
    String s;
    if (n < 10) {
        s = "small";
    } else if (n < 100) {
        s = "medium";
    } else if (n >= 100) {
        s = "large";
    }
    return s;
}
```

What happens when this method is compiled?

- (A) It compiles and returns "large" for 100.
- (B) It does not compile, because the compiler cannot be sure that `s` has a value when it is returned.
- (C) It does not compile, because the last `else if` needs a final `else`.
- (D) It compiles but returns null for some values.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Although a human can see that one of the three conditions is always true, the compiler only knows that there is a path (every condition false) on which `s` is not assigned, so it reports that `s` might not have been initialised. Changing the last `else if (n >= 100)` to a plain `else` fixes it.

- (A) assumes the code compiles.
- (C) is wrong: a final `else` is optional in the language. It is needed here only so that the variable is always assigned.
- (D) is wrong: the compiler rejects the code before it can run.
</details>

## Question 7 (constructed response · core)

A bike hire shop charges by the hour. The first 2 hours cost 5 dollars per hour. After that, hours 3 to 5 cost 3 dollars per hour. Hire is not allowed beyond 5 hours.

(a) Write a method `hireCost(int hours)` that returns -1 if `hours` is not between 1 and 5 inclusive, and otherwise the total cost. Use an if-else-if chain. (5 marks)

(b) Give the value returned for `hours` equal to 0, 2, 3 and 5. (4 marks)

<details>
<summary>Answer and explanation</summary>

**(a) Model answer.**

```java
public static int hireCost(int hours) {
    if (hours < 1) {
        return -1;
    } else if (hours > 5) {
        return -1;
    } else if (hours <= 2) {
        return hours * 5;
    } else {
        return 10 + (hours - 2) * 3;
    }
}
```

**(b)** 0 hours: -1. 2 hours: 2 x 5 = 10. 3 hours: the first 2 hours cost 10, plus 1 hour at 3 = 13. 5 hours: 10 + 3 x 3 = 19. The method returns -1, 10, 13 and 19.

**Suggested Marlbridge rubric (9 marks).**

| Marks | Awarded for |
|---|---|
| 1 | Correct header and return type `int` |
| 1 | Invalid hours (below 1 or above 5) return -1, with correct boundaries |
| 1 | `else if (hours <= 2)` with cost `hours * 5` |
| 1 | Final else with first two hours at 10 plus `(hours - 2) * 3` |
| 1 | Every path returns a value; the structure is an if-else-if chain |
| 4 | (b) 1 mark each for -1, 10, 13 and 19 |

Accept a single condition joined with `||` (Topic 2.5) for the invalid range. Accept separate return statements or one result variable.
</details>

## Question 8 (constructed response · core)

Trace the code for each pair of values and give the output. Show which conditions are evaluated. (6 marks)

```java
public class Q8 {
    public static void main(String[] args) {
        int m = 14;
        int n = 3;
        String out = "";
        if (m > 10) {
            out = out + "A";
            if (n > 5) {
                out = out + "B";
            } else if (n > 2) {
                out = out + "C";
            }
        } else {
            out = out + "D";
        }
        out = out + "E";
        System.out.println(out);
    }
}
```

(a) `m = 14, n = 3` (as shown). (2 marks)
(b) `m = 14, n = 7`. (2 marks)
(c) `m = 4, n = 7`. (2 marks)

<details>
<summary>Answer and explanation</summary>

**(a)** `14 > 10` true, so `out` = "A". Nested chain: `3 > 5` false; `3 > 2` true, so `out` = "AC". Then `out` = "ACE". Output **ACE**.

**(b)** `14 > 10` true, `out` = "A". `7 > 5` true, so `out` = "AB"; the `else if` is skipped. Then "ABE". Output **ABE**.

**(c)** `4 > 10` false, so the outer else runs: `out` = "D". The nested conditions are not evaluated. Then "DE". Output **DE**.

**Suggested Marlbridge rubric (6 marks).** For each part, 1 mark for the correct sequence of conditions and 1 mark for the correct output. In (c), award the first mark only if the answer states that the inner conditions are not evaluated.
</details>

## Question 9 (constructed response · stretch)

The following method is meant to return the shipping tier for a parcel mass `kg`: "light" for under 2, "standard" for 2 up to but not including 10, and "heavy" for 10 or more.

```java
public static String tier(double kg) {
    if (kg >= 2) {
        return "standard";
    } else if (kg >= 10) {
        return "heavy";
    } else {
        return "light";
    }
}
```

(a) Give one input for which the method returns the wrong tier, and say what it returns. (2 marks)

(b) Explain the cause of the error. (2 marks)

(c) Rewrite the method so that it is correct. (2 marks)

<details>
<summary>Answer and explanation</summary>

**(a)** `tier(12.5)` returns "standard" instead of "heavy". (Any value of 10 or more shows the fault.)

**(b)** The conditions overlap and the broader one comes first. Any mass of 10 or more is also 2 or more, so the first condition is true and the chain stops there: the "heavy" test can never be reached.

**(c)**

```java
public static String tier(double kg) {
    if (kg >= 10) {
        return "heavy";
    } else if (kg >= 2) {
        return "standard";
    } else {
        return "light";
    }
}
```

**Suggested Marlbridge rubric (6 marks).**

| Marks | Awarded for |
|---|---|
| 1 | A valid wrong input (10 or more) |
| 1 | The wrong output stated ("standard") |
| 1 | Identifies that the first condition is also true for large values |
| 1 | States that the chain stops at the first true condition, so "heavy" is unreachable |
| 1 | Conditions reordered with the most demanding first |
| 1 | Boundaries correct: `>= 10` and `>= 2` |
</details>

## Question 10 (constructed response · stretch)

Consider the dangling else code below.

```java
int x = 8;
int y = 1;
if (x > 5)
    if (y > 5)
        System.out.println("P");
    else
        System.out.println("Q");
```

(a) What is printed? (1 mark)

(b) Add braces so that the `else` clearly belongs to `if (x > 5)`, and state what would be printed. (3 marks)

(c) With the original code and `x = 2`, what is printed, and why? (2 marks)

<details>
<summary>Answer and explanation</summary>

**(a)** `Q`. The else pairs with the inner if. `8 > 5` is true, `1 > 5` is false, so the inner else runs.

**(b)**

```java
int x = 8;
int y = 1;
if (x > 5) {
    if (y > 5) {
        System.out.println("P");
    }
} else {
    System.out.println("Q");
}
```

With these braces the else belongs to the outer if. `8 > 5` is true, the inner condition `1 > 5` is false and has no else, so **nothing** is printed.

**(c)** Nothing is printed. The outer condition `2 > 5` is false, and the inner if-else is entirely the body of the outer if, so it is skipped.

**Suggested Marlbridge rubric (6 marks).**

| Marks | Awarded for |
|---|---|
| 1 | (a) Q |
| 1 | (b) braces enclose the inner if |
| 1 | (b) the else is attached after the closing brace of the outer if body |
| 1 | (b) nothing printed, with the reason |
| 1 | (c) nothing printed |
| 1 | (c) the inner statement including its else is inside the outer if |
</details>

## How did you do?

Questions 1 to 5 test tracing nested structures and chains. If you missed Question 3 or 10, revisit "The dangling else" in the [study guide](/advanced-course-resources/computer-science-a/2-4-nested-if-statements-study-guide/). If you missed Question 4 or 9, review "Order of the conditions matters". Then use the [checklist](/advanced-course-resources/computer-science-a/2-4-nested-if-statements-checklist/).
