---
resourceId: "mb-ap-csa-2.11-study-guide"
title: "Nested Iteration: Study Guide (Computer Science A 2.11)"
description: "Learn nested loops, their order of execution and how often they run, with a first-principles explanation, traced Java examples, a diagram, two worked examples and the mistakes to avoid."
course: "computer-science-a"
unit: 2
topics: ["2.11"]
resourceType: "study-guide"
prerequisites:
  - "for and while loops (Topics 2.7 and 2.8)"
  - "Standard algorithms with loops (Topic 2.9)"
prerequisiteResources: ["mb-ap-csa-2.10-study-guide"]
learningObjectives:
  - "Explain that an inner loop completes all its iterations before the outer loop moves on"
  - "Trace nested loops and predict the output of patterns, tables and pair-counting code"
  - "Work out how many times the innermost statement executes for rectangular and triangular loop bounds"
  - "Diagnose nested-loop faults such as an inner loop variable that is never reset"
skills: ["2", "3", "4"]
studyMinutes: 40
difficulty: "stretch"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.11-revision-notes", "mb-ap-csa-2.11-practice", "mb-ap-csa-2.11-checklist"]
next: "mb-ap-csa-2.11-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "Nested iteration is a loop inside the body of another loop. The inner loop runs through all its iterations each time the outer loop runs once."
  - "If the inner bounds do not depend on the outer variable, the body runs (outer iterations) x (inner iterations) times."
  - "If the inner bound depends on the outer variable, add the inner counts row by row: 1 + 2 + 3 + 4 = 10 for a triangle of four rows."
  - "The inner loop control variable must be set again at the start of every outer iteration; declaring it in the inner for header does this automatically."
  - "Output rows come from the outer loop, and a println after the inner loop ends each row."
faqs:
  - question: "In what order do nested loops run?"
    answer: "The outer loop starts its first iteration. The inner loop then runs from start to finish. Only when the inner loop has completed does the outer loop move to its next iteration, and the inner loop starts over."
  - question: "How many times does the body of a nested loop run?"
    answer: "If the inner loop always runs the same number of times, multiply: 4 outer iterations and 3 inner iterations give 12. If the inner count changes with the outer variable, add up the inner count for each outer iteration."
  - question: "Why does my inner while loop only run once?"
    answer: "The inner loop variable is not reset. After the first outer iteration it holds the value that ended the inner loop, so the inner condition is already false on later passes. Set it again before the inner loop, inside the outer loop."
  - question: "Why do I need System.out.println() after the inner loop?"
    answer: "System.out.print leaves the cursor on the same line. A println after the inner loop ends the current row, so the next row starts on a new line."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## A loop inside a loop

Many problems have two dimensions: the rows and columns of a pattern, every pair of numbers from two ranges, every letter compared with every other letter. To handle them you put one loop inside the body of another. **Nested iteration statements** are iteration statements that appear in the body of another iteration statement.

The rule that governs everything in this topic is:

> When a loop is nested inside another loop, the **inner loop must complete all its iterations** before the outer loop can continue to its next iteration.

For each single pass of the outer loop, the inner loop starts, runs all the way through, and finishes. On the outer loop's next pass the inner loop **starts again from the beginning**.

## Rows and columns

The simplest picture is a grid. The outer loop selects the row; the inner loop visits each column in that row.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="f211-title f211-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="f211-title">Order of the inner and outer loop in a 3 by 4 nested loop</title>
<desc id="f211-desc">A grid of three rows and four columns. Each cell holds its visiting order in a row-by-row pattern: row 0 has 1, 2, 3, 4; row 1 has 5, 6, 7, 8; row 2 has 9, 10, 11, 12. Column labels 0 to 3 run across the top and row labels 0 to 2 run down the left. A note says the outer loop picks the row and the inner loop completes all four columns before the outer loop moves to the next row.</desc>
<defs><marker id="ah-f211" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<text x="180" y="28" font-size="13" text-anchor="middle" fill="#1d2b44">col 0</text>
<text x="250" y="28" font-size="13" text-anchor="middle" fill="#1d2b44">col 1</text>
<text x="320" y="28" font-size="13" text-anchor="middle" fill="#1d2b44">col 2</text>
<text x="390" y="28" font-size="13" text-anchor="middle" fill="#1d2b44">col 3</text>
<text x="70" y="75" font-size="13" text-anchor="end" fill="#1d2b44">row 0</text>
<rect x="150" y="40" width="60" height="52" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="180" y="62.05" font-size="13" text-anchor="middle" fill="#1d2b44">1</text>
<text x="180" y="79.05" font-size="13" text-anchor="middle" fill="#1d2b44">(0,0)</text>
<rect x="220" y="40" width="60" height="52" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="250" y="62.05" font-size="13" text-anchor="middle" fill="#1d2b44">2</text>
<text x="250" y="79.05" font-size="13" text-anchor="middle" fill="#1d2b44">(0,1)</text>
<rect x="290" y="40" width="60" height="52" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="320" y="62.05" font-size="13" text-anchor="middle" fill="#1d2b44">3</text>
<text x="320" y="79.05" font-size="13" text-anchor="middle" fill="#1d2b44">(0,2)</text>
<rect x="360" y="40" width="60" height="52" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="390" y="62.05" font-size="13" text-anchor="middle" fill="#1d2b44">4</text>
<text x="390" y="79.05" font-size="13" text-anchor="middle" fill="#1d2b44">(0,3)</text>
<text x="70" y="137" font-size="13" text-anchor="end" fill="#1d2b44">row 1</text>
<rect x="150" y="102" width="60" height="52" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="180" y="124.05" font-size="13" text-anchor="middle" fill="#1d2b44">5</text>
<text x="180" y="141.05" font-size="13" text-anchor="middle" fill="#1d2b44">(1,0)</text>
<rect x="220" y="102" width="60" height="52" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="250" y="124.05" font-size="13" text-anchor="middle" fill="#1d2b44">6</text>
<text x="250" y="141.05" font-size="13" text-anchor="middle" fill="#1d2b44">(1,1)</text>
<rect x="290" y="102" width="60" height="52" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="320" y="124.05" font-size="13" text-anchor="middle" fill="#1d2b44">7</text>
<text x="320" y="141.05" font-size="13" text-anchor="middle" fill="#1d2b44">(1,2)</text>
<rect x="360" y="102" width="60" height="52" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="390" y="124.05" font-size="13" text-anchor="middle" fill="#1d2b44">8</text>
<text x="390" y="141.05" font-size="13" text-anchor="middle" fill="#1d2b44">(1,3)</text>
<text x="70" y="199" font-size="13" text-anchor="end" fill="#1d2b44">row 2</text>
<rect x="150" y="164" width="60" height="52" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="180" y="186.05" font-size="13" text-anchor="middle" fill="#1d2b44">9</text>
<text x="180" y="203.05" font-size="13" text-anchor="middle" fill="#1d2b44">(2,0)</text>
<rect x="220" y="164" width="60" height="52" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="250" y="186.05" font-size="13" text-anchor="middle" fill="#1d2b44">10</text>
<text x="250" y="203.05" font-size="13" text-anchor="middle" fill="#1d2b44">(2,1)</text>
<rect x="290" y="164" width="60" height="52" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="320" y="186.05" font-size="13" text-anchor="middle" fill="#1d2b44">11</text>
<text x="320" y="203.05" font-size="13" text-anchor="middle" fill="#1d2b44">(2,2)</text>
<rect x="360" y="164" width="60" height="52" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="390" y="186.05" font-size="13" text-anchor="middle" fill="#1d2b44">12</text>
<text x="390" y="203.05" font-size="13" text-anchor="middle" fill="#1d2b44">(2,3)</text>
<text x="280" y="250" font-size="13" text-anchor="middle" fill="#1d2b44" font-weight="bold" font-family="ui-monospace, Menlo, Consolas, monospace">outer loop: row   inner loop: col</text>
<text x="280" y="274" font-size="12" text-anchor="middle" fill="#1d2b44">the inner loop finishes a whole row before the outer loop moves on</text>
</svg>
<figcaption>Figure 1. A nested loop with 3 outer passes and 4 inner passes visits the cells in row order. The number in each cell is the order of the visit (1 to 12). The inner loop completes a full row before the outer loop moves down.</figcaption>
</figure>

```java
public class Rectangle {
    public static void main(String[] args) {
        for (int row = 1; row <= 3; row++) {
            for (int col = 1; col <= 4; col++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```

**Output:**

```text
****
****
****
```

For each of the 3 values of `row`, the inner loop prints 4 stars, and then the `println` after the inner loop ends the row. The `*` statement runs 3 x 4 = **12** times, and the `println` runs only 3 times because it is in the outer loop's body, not the inner one.

## When the inner bound depends on the outer variable

If the inner loop's limit uses the outer variable, the rows have different lengths.

```java
for (int row = 1; row <= 4; row++) {
    for (int col = 1; col <= row; col++) {
        System.out.print("*");
    }
    System.out.println();
}
```

**Output:**

```text
*
**
***
****
```

Row 1 runs the inner loop once, row 2 runs it twice, and so on. The star statement runs 1 + 2 + 3 + 4 = **10** times. For a triangle with `n` rows the total is 1 + 2 + ... + n = n(n + 1) / 2.

## Tables and combinations

A nested loop can produce a table of values:

```java
for (int row = 1; row <= 3; row++) {
    for (int col = 1; col <= 3; col++) {
        System.out.print(row * col + " ");
    }
    System.out.println();
}
```

**Output:**

```text
1 2 3
2 4 6
3 6 9
```

It can also test every combination of two values. Counting the pairs of whole numbers from 1 to 9 that add up to 10:

```java
int pairs = 0;
for (int a = 1; a <= 9; a++) {
    for (int b = 1; b <= 9; b++) {
        if (a + b == 10) {
            pairs++;
        }
    }
}
System.out.println(pairs);
```

**Output:**

```text
9
```

There are 81 combinations (9 x 9). For each `a` from 1 to 9 there is exactly one `b` (10 - a), so 9 pairs satisfy the test. If you only want each pair once, with `a < b`, start the inner loop at `a + 1`: `for (int b = a + 1; b <= 9; b++)`. That gives (1, 9), (2, 8), (3, 7) and (4, 6): 4 pairs.

## Counting the executions of the inner body

For any nested loop you can find how often the innermost statement runs.

| Loop structure (outer, inner) | Count |
|---|---|
| `i` from 0 to 3, `j` from 0 to 2 (independent) | 4 x 3 = 12 |
| `i` from 1 to 4, `j` from 1 to `i` | 1 + 2 + 3 + 4 = 10 |
| `i` from 0 to 3, `j` from `i` to 3 | 4 + 3 + 2 + 1 = 10 |
| `i` from 0 to 3, `j` from `i + 1` to 3 | 3 + 2 + 1 + 0 = 6 |

If the inner count is the same for every outer pass, multiply. If it changes, list the inner count for each outer value and add.

## The inner variable must start again

With `for` loops, the inner variable is declared in the inner header, so it is re-initialised on every outer pass automatically. With `while` loops you must do it yourself, and forgetting is a classic mistake.

```java
int row = 1;
int col = 1;
while (row <= 3) {
    while (col <= 3) {
        System.out.print("X");
        col++;
    }
    System.out.println();
    row++;
}
```

**Output:**

```text
XXX


```

In the first pass `col` runs from 1 to 4. On the second pass `col` is still 4, so `col <= 3` is false at once, the inner loop does nothing, and only an empty line is printed. The initial condition for the inner loop (`col` equal to 1) is no longer true. The fix is to set `col = 1;` **inside** the outer loop, just before the inner loop:

```java
int row = 1;
while (row <= 3) {
    int col = 1;
    while (col <= 3) {
        System.out.print("X");
        col++;
    }
    System.out.println();
    row++;
}
```

**Output:**

```text
XXX
XXX
XXX
```

Declaring `col` inside the outer loop re-creates it on every pass, giving the inner loop its starting value again.

## Worked example 1: counting executions

**Question.** For `n = 4`, how many times does `count++` run in each segment?

```java
public class Counts {
    public static void main(String[] args) {
        int n = 4;
        int a = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                a++;
            }
        }
        int b = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j <= i; j++) {
                b++;
            }
        }
        int c = 0;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                c++;
            }
        }
        System.out.println(a + " " + b + " " + c);
    }
}
```

**Output:**

```text
16 10 6
```

**Segment 1.** The inner loop always runs `n = 4` times, and the outer loop runs 4 times: 4 x 4 = **16**.

**Segment 2.** For `i` = 0, 1, 2, 3 the inner loop runs `i + 1` times: 1, 2, 3, 4. The total is 1 + 2 + 3 + 4 = **10**.

**Segment 3.** The inner loop starts at `i + 1`, so it runs `n - 1 - i` times: 3, 2, 1, 0. The total is 3 + 2 + 1 + 0 = **6**. When `i` is 3 the inner loop starts at 4, and `4 < 4` is false, so it runs zero times.

| `i` | Segment 1 inner passes | Segment 2 inner passes | Segment 3 inner passes |
|---|---|---|---|
| 0 | 4 | 1 | 3 |
| 1 | 4 | 2 | 2 |
| 2 | 4 | 3 | 1 |
| 3 | 4 | 4 | 0 |
| total | 16 | 10 | 6 |

**Check.** Segment 2 and segment 3 together cover the 16 combinations of Segment 1: they split the grid into the part on or below the diagonal (10 cells) and the part strictly above it (6 cells), and 10 + 6 = 16.

## Worked example 2: tracing nested loops with selection

**Question.** What does the following print, and how many pairs are found?

```java
public class Pairs {
    public static void main(String[] args) {
        int count = 0;
        for (int a = 1; a <= 4; a++) {
            for (int b = a; b <= 4; b++) {
                if ((a + b) % 3 == 0) {
                    count++;
                    System.out.print("(" + a + "," + b + ") ");
                }
            }
        }
        System.out.println();
        System.out.println(count);
    }
}
```

**Output:**

```text
(1,2) (2,4) (3,3)
3
```

**Trace.**

| `a` | `b` values | `a + b` | `(a + b) % 3 == 0`? |
|---|---|---|---|
| 1 | 1, 2, 3, 4 | 2, 3, 4, 5 | only `b` = 2 (sum 3) |
| 2 | 2, 3, 4 | 4, 5, 6 | only `b` = 4 (sum 6) |
| 3 | 3, 4 | 6, 7 | only `b` = 3 (sum 6) |
| 4 | 4 | 8 | none |

Pairs found, in the order they are visited: (1,2), (2,4), (3,3). **Count = 3.** **Check.** The inner loop starts at `a`, so the pairs satisfy `b >= a` and each unordered pair is visited once (with equal values allowed). The total number of pairs examined is 4 + 3 + 2 + 1 = 10, of which 3 have a sum divisible by 3.

## How this appears in exam questions

Nested loops appear as output questions, counting questions and code-writing tasks. For output, find where `print` and `println` sit: a `println` after the inner loop and inside the outer loop ends each row. For counting, write one line per outer value showing how many times the inner loop runs, and add the lines if the inner bound changes. For code-writing, decide first which loop controls the rows and which the columns, then decide whether the inner loop starts at 0, at the outer variable, or at the outer variable plus 1, depending on whether equal pairs and repeated pairs are wanted. The same structure returns in Unit 4, where the outer loop walks the rows of a 2D array and the inner loop walks the columns, so the picture in Figure 1 is worth learning well now.

## Common misconceptions

- **"The two loops take turns, one step each."** The inner loop runs completely for each single step of the outer loop.
- **"The body runs outer + inner times."** For independent bounds it runs outer x inner times.
- **"`println` after the inner loop runs once in total."** It runs once per outer iteration, because it is in the outer loop's body.
- **"The inner variable keeps its value between outer passes."** With a `for` loop it is re-created and re-initialised each time. With a `while` loop it keeps its value unless you reset it.
- **"A triangle's inner bound is a fixed number."** Its bound uses the outer variable, so the inner loop runs a different number of times for each row.
- **"The inner loop can never run zero times."** It can: if its start already fails the test (for example `j = i + 1` when `i` is the last value).
- **"The output pattern only depends on the inner loop."** Both loops, and the position of the `println`, shape the output.

## Where this leads

Nested loops are the engine of 2D array traversal in Topics 4.11 to 4.13 (the rows-and-columns picture here becomes a 2D array), and of the sorting algorithms in Topic 4.15. In Topic 2.12 you will count executions more formally to compare how fast the work grows. Try the [practice questions](/advanced-course-resources/computer-science-a/2-11-nested-iteration-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/2-11-nested-iteration-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/2-11-nested-iteration-checklist/). Then read the [Topic 2.12 study guide](/advanced-course-resources/computer-science-a/2-12-informal-run-time-analysis-study-guide/). For single loops, revisit the [Topic 2.8 study guide](/advanced-course-resources/computer-science-a/2-8-for-loops-study-guide/).
