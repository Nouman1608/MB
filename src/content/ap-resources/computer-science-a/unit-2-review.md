---
resourceId: "mb-ap-csa-u2-review"
title: "Selection and Iteration: Mixed Unit Review (Computer Science A Unit 2)"
description: "Seven original Java review questions that combine Unit 2 topics: Boolean logic, if statements, while and for loops, nested loops and algorithm tracing, with traced solutions and suggested rubrics."
course: "computer-science-a"
unit: 2
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have studied Topics 2.1 to 2.12"
  - "You have tried the Unit 2 diagnostic and closed any gaps it showed"
prerequisiteResources: ["mb-ap-csa-u2-diagnostic"]
learningObjectives:
  - "Connect the ideas of Unit 2: Boolean logic, selection, iteration, standard algorithms and run-time counts"
  - "Choose the right structure (if-else-if, nested if, while, for, nested loops) for a given problem and justify the choice"
  - "Write, trace and compare methods that combine selection and iteration"
  - "Check boundary values, loop bounds and execution counts before trusting a solution"
skills: ["1", "2", "3", "4"]
studyMinutes: 60
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-u2-diagnostic", "mb-ap-csa-2.1-checklist", "mb-ap-csa-2.2-checklist", "mb-ap-csa-2.3-checklist", "mb-ap-csa-2.4-checklist", "mb-ap-csa-2.5-checklist", "mb-ap-csa-2.6-checklist", "mb-ap-csa-2.7-checklist", "mb-ap-csa-2.8-checklist", "mb-ap-csa-2.9-checklist", "mb-ap-csa-2.10-checklist", "mb-ap-csa-2.11-checklist", "mb-ap-csa-2.12-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "Every algorithm is sequencing, selection and repetition; the order and nesting of the blocks decide the result."
  - "Boolean expressions use relational and logical operators with the precedence !, &&, ||; De Morgan's laws rewrite negations."
  - "A loop needs a correct initial value, a condition and an update; check the first and last values for off-by-one errors."
  - "Standard algorithms (counting, sums, minimum or maximum, digits, string windows) share one shape: accumulators before the loop, a selection inside it, a result after it."
  - "Statement execution counts compare how much work two pieces of code do as the input grows."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Read the big ideas and the method table, then try the seven questions without notes. Each question combines two or more Unit 2 topics.

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a **suggested Marlbridge rubric**, not official scoring. Assume every code segment compiles unless a question says otherwise. No calculator is allowed.

## Big ideas of the unit

- **Algorithms are built from three blocks.** Sequencing, selection and repetition, and the order and nesting of the blocks decide the outcome ([2.1](/advanced-course-resources/computer-science-a/2-1-algorithms-selection-repetition-study-guide/)).
- **Conditions are Boolean expressions.** Relational operators compare values ([2.2](/advanced-course-resources/computer-science-a/2-2-boolean-expressions-study-guide/)); `!`, `&&` and `||` combine them, with short-circuit evaluation ([2.5](/advanced-course-resources/computer-science-a/2-5-compound-boolean-expressions-study-guide/)); truth tables and De Morgan's laws prove equivalence, and `==` compares references for objects ([2.6](/advanced-course-resources/computer-science-a/2-6-comparing-boolean-expressions-study-guide/)).
- **Selection chooses a path.** `if` and `if-else` ([2.3](/advanced-course-resources/computer-science-a/2-3-if-statements-study-guide/)), nested ifs and else-if chains, where the first true condition wins ([2.4](/advanced-course-resources/computer-science-a/2-4-nested-if-statements-study-guide/)).
- **Iteration repeats.** A `while` loop tests before every pass, so it may run zero times or for ever ([2.7](/advanced-course-resources/computer-science-a/2-7-while-loops-study-guide/)); a `for` loop gathers the initialization, test and update, and can be rewritten as a `while` loop ([2.8](/advanced-course-resources/computer-science-a/2-8-for-loops-study-guide/)).
- **Standard algorithms combine the two.** Divisibility, digits, counting, minimum or maximum, sum or average ([2.9](/advanced-course-resources/computer-science-a/2-9-implementing-selection-iteration-algorithms-study-guide/)) and string algorithms with `substring` windows ([2.10](/advanced-course-resources/computer-science-a/2-10-implementing-string-algorithms-study-guide/)).
- **Nested loops multiply or sum.** The inner loop completes for each outer pass ([2.11](/advanced-course-resources/computer-science-a/2-11-nested-iteration-study-guide/)).
- **Counting executions compares algorithms.** Count the statements, and see how the count changes as the input grows ([2.12](/advanced-course-resources/computer-science-a/2-12-informal-run-time-analysis-study-guide/)).

## Key relationships and methods

| If the question asks you to... | Use... | Watch out for... |
|---|---|---|
| Choose one of several options | if-else-if chain with a final else | Order of overlapping conditions; `<` versus `<=` at boundaries |
| Ask a second question only after the first | Nested if | The inner condition may never be evaluated |
| Combine or negate conditions | `&&`, `||`, `!`, De Morgan's laws | `&&` before `||`; the complement of `<` is `>=` |
| Repeat a known number of times | `for` loop | Off-by-one errors; the loop variable's scope |
| Repeat until something happens | `while` loop | Initial value, update, infinite loop, zero iterations |
| Count, sum, find the largest or smallest | Accumulator pattern | Start values; reset inside the loop; integer division |
| Take a number apart | `% 10` and `/ 10` in a loop | Order of digits; leading zeros lost |
| Process a String | `for` over `i` with `substring(i, i + 1)` or a window | Last index is `length() - 1`; `equals`, not `==` |
| Work with two dimensions or all pairs | Nested loops | Inner variable reset; inner start `j = i + 1` or `j = i` |
| Compare the work of two codes | Statement execution counts | Tests are one more than iterations; early exits depend on the data |

## Question 1 (multiple choice · 2.5 and 2.6)

Which code segment is equivalent to the following for all integer values of `a` and `b`?

```java
if (!(a > 3 || b < 2)) {
    x = 1;
} else {
    x = 2;
}
```

- (A) `if (a < 3 && b > 2) { x = 1; } else { x = 2; }`
- (B) `if (a <= 3 && b >= 2) { x = 1; } else { x = 2; }`
- (C) `if (a <= 3 || b >= 2) { x = 1; } else { x = 2; }`
- (D) `if (a > 3 && b < 2) { x = 1; } else { x = 2; }`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** De Morgan's law: `!(P || Q)` is `!P && !Q`. The complement of `a > 3` is `a <= 3`, and the complement of `b < 2` is `b >= 2`, so the condition is `a <= 3 && b >= 2`.

- (A) uses `<` and `>` as the complements, which wrongly exclude `a == 3` and `b == 2`.
- (C) keeps the `||`: it is true when only one of the two parts holds.
- (D) negates nothing, so it gives x = 1 in exactly the cases where the original gives 2.

**Check with a boundary:** `a = 3, b = 2`. The original: `3 > 3` false, `2 < 2` false, so `!(false)` is true, x = 1. Option (B): `3 <= 3` and `2 >= 2` are both true, so x = 1. Option (A): `3 < 3` is false, so x = 2: it differs.
</details>

## Question 2 (multiple choice · 2.7 and 2.9)

What is printed?

```java
int n = 3874;
int result = 0;
while (n > 0) {
    int d = n % 10;
    if (d % 2 == 0) {
        result = result * 10 + d;
    }
    n = n / 10;
}
System.out.println(result);
```

- (A) 84
- (B) 48
- (C) 12
- (D) 3874

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The digits come off from the right: 4, 7, 8, 3. Even digits: 4 and 8. `result` goes 0, then 0 x 10 + 4 = 4, then 4 x 10 + 8 = 48. Digits 7 and 3 are skipped.

- (A) reverses the order of the two digits found; the digit taken first (4) stays in the tens place of `result`.
- (C) is the sum of the even digits, 4 + 8.
- (D) is the original number.
</details>

## Question 3 (multiple choice · 2.11 and 2.12)

What are the final value of `c` and the number of times the condition `(i + j) % 2 == 0` is evaluated?

```java
int c = 0;
for (int i = 1; i <= 4; i++) {
    for (int j = 1; j <= i; j++) {
        if ((i + j) % 2 == 0) {
            c++;
        }
    }
}
```

- (A) c is 6; the condition is evaluated 10 times.
- (B) c is 6; the condition is evaluated 16 times.
- (C) c is 10; the condition is evaluated 6 times.
- (D) c is 8; the condition is evaluated 10 times.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The inner loop runs `i` times for each `i`: 1 + 2 + 3 + 4 = 10 evaluations. The pairs (i, j) with an even sum are: i = 1: (1,1); i = 2: (2,2); i = 3: (3,1) and (3,3); i = 4: (4,2) and (4,4). That is 1 + 1 + 2 + 2 = 6.

| `i` | `j` values | sums | even sums |
|---|---|---|---|
| 1 | 1 | 2 | 1 |
| 2 | 1, 2 | 3, 4 | 1 |
| 3 | 1, 2, 3 | 4, 5, 6 | 2 |
| 4 | 1, 2, 3, 4 | 5, 6, 7, 8 | 2 |

- (B) treats the loops as 4 x 4 = 16 evaluations.
- (C) swaps the two answers.
- (D) has the right number of evaluations, but counts 8 pairs.
</details>

## Question 4 (constructed response · 2.3, 2.7 and 2.9)

This question is in the style of a methods-and-control-structures task. A digit pair is two **adjacent** digits of a positive integer that are equal. For example, 1223 has one digit pair (the two 2s), and 55055 has two (the first two 5s, and the last two).

Write the method `equalNeighbours` that returns the number of digit pairs in the positive integer `n`. The method must use a loop and must not convert `n` to a String. (7 marks)

| Call | Returns |
|---|---|
| `equalNeighbours(1223)` | 1 |
| `equalNeighbours(55055)` | 2 |
| `equalNeighbours(7)` | 0 |
| `equalNeighbours(1000)` | 2 |

```java
public static int equalNeighbours(int n)
```

<details>
<summary>Answer and explanation</summary>

**Model answer.**

```java
public static int equalNeighbours(int n) {
    int count = 0;
    int previous = n % 10;
    n = n / 10;
    while (n > 0) {
        int current = n % 10;
        if (current == previous) {
            count++;
        }
        previous = current;
        n = n / 10;
    }
    return count;
}
```

**How it works.** The last digit is taken first as `previous`, and `n` loses it. On each pass the next digit is `current`; if it equals `previous` a pair has been found; then `current` becomes the new `previous` and the digit is removed.

**Trace for `equalNeighbours(1223)`.**

| Test | `n` before | `current` | `previous` | equal? | `count` |
|---|---|---|---|---|---|
| start | 122 (after the first digit 3) | | 3 | | 0 |
| 1 | 122 | 2 | 3 | no | 0 |
| 2 | 12 | 2 | 2 | yes | 1 |
| 3 | 1 | 1 | 2 | no | 1 |
| 4 | 0 | loop ends | | | 1 |

**Suggested Marlbridge rubric (7 marks).**

| Marks | Awarded for |
|---|---|
| 1 | Counter declared and initialised to 0 before the loop, and returned after it |
| 1 | Extracts the first digit with `n % 10` and removes it with `n / 10` before the loop (or an equivalent that avoids comparing the first digit with itself) |
| 1 | A loop that continues while digits remain (`n > 0`) |
| 1 | Extracts the current digit with `% 10` inside the loop |
| 1 | Compares the current digit with the previous digit |
| 1 | Increments the counter only when they are equal |
| 1 | Updates the previous digit and removes the current digit, so the loop makes progress and terminates |

Accept a method that keeps a counter of positions instead of `previous`, provided adjacent digits are compared. Penalise a version that converts to a String, and a version that never updates `previous` (it compares every digit with the last digit only).
</details>

## Question 5 (constructed response · 2.10)

A String `names` contains one or more words separated by **single spaces**, with no space at the beginning or end. Write the method `initials` that returns a String made of the first letter of each word, in order. Use `indexOf` and `substring`. (6 marks)

| Call | Returns |
|---|---|
| `initials("ada king lovelace")` | "akl" |
| `initials("plato")` | "p" |

```java
public static String initials(String names)
```

<details>
<summary>Answer and explanation</summary>

**Model answer.**

```java
public static String initials(String names) {
    String result = "";
    String rest = names;
    while (rest.indexOf(" ") >= 0) {
        result = result + rest.substring(0, 1);
        rest = rest.substring(rest.indexOf(" ") + 1);
    }
    result = result + rest.substring(0, 1);
    return result;
}
```

**How it works.** While there is still a space in `rest`, the first letter of the first remaining word is added to `result`, and `rest` is shortened to everything after the first space. When no space is left, `rest` is the last word, and its first letter is added after the loop. Because Strings are immutable, `rest` is reassigned each pass.

**Trace for "ada king lovelace".**

| Test | `rest` before | space found? | `result` after |
|---|---|---|---|
| 1 | ada king lovelace | yes | a |
| 2 | king lovelace | yes | ak |
| 3 | lovelace | no (loop ends) | |
| after loop | lovelace | | akl |

**Suggested Marlbridge rubric (6 marks).**

| Marks | Awarded for |
|---|---|
| 1 | Result initialised to the empty String and returned |
| 1 | A loop that continues while `indexOf(" ") >= 0` (or an equivalent that visits each word) |
| 1 | Appends the first letter of the current word with `substring(0, 1)` |
| 1 | Removes the processed word using `substring(indexOf(" ") + 1)` and assigns the result |
| 1 | Handles the last word (the one with no space after it) after the loop |
| 1 | Correct results for both calls, including a single word |

An alternative that loops over the characters and takes the letter after each space is also correct if it adds the first letter and handles the index range safely.
</details>

## Question 6 (constructed response · 2.4, 2.8, 2.11 and 2.12)

Consider the following code.

```java
for (int r = 0; r < 4; r++) {
    for (int c = 0; c < 6; c++) {
        if (r == 0 || r == 3 || c == 0 || c == 5) {
            System.out.print("#");
        } else {
            System.out.print(".");
        }
    }
    System.out.println();
}
```

(a) What is printed? (2 marks)

(b) How many times is the condition in the `if` evaluated? How many times is `System.out.print("#")` executed? (2 marks)

(c) Write the condition that is true exactly when the `else` branch runs, using De Morgan's law, with no `!` in front of a bracket. (2 marks)

<details>
<summary>Answer and explanation</summary>

**(a)**

```text
######
#....#
#....#
######
```

Rows 0 and 3 are complete rows of `#`. Rows 1 and 2 have `#` only in columns 0 and 5.

**(b)** The condition is evaluated for every cell: 4 x 6 = **24** times. `print("#")` runs for the border cells: 6 (row 0) + 2 (row 1) + 2 (row 2) + 6 (row 3) = **16** times. The other 8 cells print `.`.

**(c)** The `else` branch runs when the condition is false, that is `!(r == 0 || r == 3 || c == 0 || c == 5)`. By De Morgan's law, negate each part and replace `||` by `&&`: `r != 0 && r != 3 && c != 0 && c != 5`.

**Suggested Marlbridge rubric (7 marks).**

| Marks | Awarded for |
|---|---|
| 1 | (a) four rows of six characters |
| 1 | (a) the border is `#` and the inside is `.` |
| 1 | (b) 24 evaluations |
| 1 | (b) 16 executions of the `#` print |
| 1 | (c) every `||` replaced by `&&` |
| 1 | (c) every comparison negated correctly (`!=`) |
| 1 | (c) the result contains no `!` before a bracket |
</details>

## Question 7 (constructed response · 2.6, 2.11 and 2.12)

Two methods count the pairs of whole numbers `a` and `b`, each between 1 and `n` inclusive, with `a + b == s`.

```java
public static int pairsNested(int n, int s) {
    int count = 0;
    for (int a = 1; a <= n; a++) {
        for (int b = 1; b <= n; b++) {
            if (a + b == s) {
                count++;
            }
        }
    }
    return count;
}

public static int pairsSingle(int n, int s) {
    int count = 0;
    for (int a = 1; a <= n; a++) {
        int b = s - a;
        if (b >= 1 && b <= n) {
            count++;
        }
    }
    return count;
}
```

(a) Give the value returned by each method for `(n, s)` equal to (10, 11), (10, 4) and (10, 25). (3 marks)

(b) For `n = 10`, how many times is the `if` condition evaluated in each method? (2 marks)

(c) When `n` is doubled to 20, by what factor does each method's number of condition evaluations change? (2 marks)

(d) Write the condition that is true exactly when `pairsSingle` does **not** count the value of `a`, with no `!` in front of a bracket. (1 mark)

<details>
<summary>Answer and explanation</summary>

**(a)**

| `(n, s)` | `pairsNested` | `pairsSingle` |
|---|---|---|
| (10, 11) | 10 | 10 |
| (10, 4) | 3 | 3 |
| (10, 25) | 0 | 0 |

For `s = 11` the pairs are (1,10), (2,9), ..., (10,1): 10 of them. For `s = 4` the pairs are (1,3), (2,2) and (3,1). For `s = 25` the largest possible sum is 20, so there are none.

**(b)** `pairsNested` evaluates the condition 10 x 10 = **100** times. `pairsSingle` evaluates it **10** times.

**(c)** For `n = 20`: `pairsNested` evaluates it 400 times, **4 times as many**; `pairsSingle` evaluates it 20 times, **twice as many**.

**(d)** The method counts `a` when `b >= 1 && b <= n`, so it does not count `a` when `b < 1 || b > n`.

**Explanation of why both give the same answer.** For each `a` there is at most one `b` with `a + b == s`, namely `s - a`. `pairsNested` finds it by trying every `b`; `pairsSingle` calculates it and checks that it lies in the allowed range. The single loop does far less work for large `n`.

**Suggested Marlbridge rubric (8 marks).**

| Marks | Awarded for |
|---|---|
| 3 | (a) one mark for each value of `s` (both methods correct) |
| 1 | (b) 100 for `pairsNested` |
| 1 | (b) 10 for `pairsSingle` |
| 1 | (c) factor 4 for `pairsNested` |
| 1 | (c) factor 2 for `pairsSingle` |
| 1 | (d) `b < 1 \|\| b > n` |
</details>

## How did you do?

If a question went wrong, find its topics in the title and go back to that study guide. Use the topic checklists to make sure you can do each skill without notes: [2.1](/advanced-course-resources/computer-science-a/2-1-algorithms-selection-repetition-checklist/), [2.2](/advanced-course-resources/computer-science-a/2-2-boolean-expressions-checklist/), [2.3](/advanced-course-resources/computer-science-a/2-3-if-statements-checklist/), [2.4](/advanced-course-resources/computer-science-a/2-4-nested-if-statements-checklist/), [2.5](/advanced-course-resources/computer-science-a/2-5-compound-boolean-expressions-checklist/), [2.6](/advanced-course-resources/computer-science-a/2-6-comparing-boolean-expressions-checklist/), [2.7](/advanced-course-resources/computer-science-a/2-7-while-loops-checklist/), [2.8](/advanced-course-resources/computer-science-a/2-8-for-loops-checklist/), [2.9](/advanced-course-resources/computer-science-a/2-9-implementing-selection-iteration-algorithms-checklist/), [2.10](/advanced-course-resources/computer-science-a/2-10-implementing-string-algorithms-checklist/), [2.11](/advanced-course-resources/computer-science-a/2-11-nested-iteration-checklist/) and [2.12](/advanced-course-resources/computer-science-a/2-12-informal-run-time-analysis-checklist/). Then move on to Unit 3 (Class Creation), where you will write your own classes and methods using the control structures you now know.
