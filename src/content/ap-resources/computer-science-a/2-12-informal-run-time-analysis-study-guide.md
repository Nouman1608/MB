---
resourceId: "mb-ap-csa-2.12-study-guide"
title: "Informal Run-Time Analysis: Study Guide (Computer Science A 2.12)"
description: "Learn statement execution counts and informal run-time comparison, with a first-principles explanation, traced Java examples, a diagram, two worked examples and the mistakes to avoid."
course: "computer-science-a"
unit: 2
topics: ["2.12"]
resourceType: "study-guide"
prerequisites:
  - "while and for loops (Topics 2.7 and 2.8)"
  - "Nested iteration (Topic 2.11)"
prerequisiteResources: ["mb-ap-csa-2.11-study-guide"]
learningObjectives:
  - "Define a statement execution count and calculate it for single loops, nested loops and loops with early exits"
  - "Count the initialization, tests and updates of a for loop, and the body executions"
  - "Compare two algorithms for the same task by how their execution counts grow with the size of the input"
  - "Explain why the count can depend on the data as well as on the size of the input"
skills: ["4", "3"]
studyMinutes: 40
difficulty: "stretch"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.12-revision-notes", "mb-ap-csa-2.12-practice", "mb-ap-csa-2.12-checklist"]
next: "mb-ap-csa-2.12-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "A statement execution count is the number of times a statement is executed. It is found by tracing and analysing the loops, usually without running the program."
  - "For for (int i = 0; i < n; i++): the initialization runs once, the test n + 1 times, and the body and update n times each."
  - "A loop that runs n times, a nested pair that runs n x n times, and a loop that halves its variable each time (about log2 n times) grow at very different rates."
  - "An algorithm can finish early, so its count may depend on the data: compare the best case with the worst case."
  - "Informal run-time comparison means comparing execution counts for different inputs, such as when n doubles, rather than timing the code."
faqs:
  - question: "What is a statement execution count?"
    answer: "The number of times a particular statement is executed when the code runs. For a statement in a loop body it is the number of iterations; for a statement in a nested loop it is the number of iterations of the inner loop summed over the outer loop."
  - question: "How many times is the loop test evaluated?"
    answer: "One more time than the body runs, because the final test is the false one. A for loop whose body runs n times evaluates its Boolean expression n + 1 times."
  - question: "Do I need Big-O notation?"
    answer: "No. This topic is about counting how many times statements execute and comparing counts informally, such as 'twice as many when n doubles' or 'four times as many'. You do not need to name the growth rates."
  - question: "Why can two loops with the same output take different amounts of work?"
    answer: "They may execute different numbers of statements. A search that stops as soon as it finds an answer does less work than one that always checks everything, and a loop that tests fewer candidates does less work than one that tests more."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## Counting work, not seconds

How long does a program take? The honest answer depends on the machine, so computer scientists first ask a machine-independent question: **how many statements are executed?** A **statement execution count** indicates the number of times a statement is executed by the program. Statement execution counts are often calculated informally, through **tracing and analysis of the iterative statements**, and then used to compare how much work two pieces of code do.

You already traced loops in Topics 2.7 to 2.11. This topic turns tracing into a habit of counting.

## Counting a single loop

For a `for` loop whose body runs `n` times, every part of the loop has a count.

| Part of `for (int i = 0; i < n; i++)` | How many times |
|---|---|
| Initialization `int i = 0` | 1 |
| Boolean expression `i < n` | n + 1 (n true results, then one false) |
| Body | n |
| Update `i++` | n |

You can check these claims by instrumenting a loop with counters. The helper methods below only measure; the static variables are explained properly in Topic 3.7.

```java
public class HeaderCounts {
    static int tests = 0;
    static int updates = 0;

    static boolean less(int a, int b) {
        tests++;
        return a < b;
    }

    static int next(int i) {
        updates++;
        return i + 1;
    }

    public static void main(String[] args) {
        int body = 0;
        for (int i = 0; less(i, 5); i = next(i)) {
            body++;
        }
        System.out.println("tests " + tests + ", body " + body + ", updates " + updates);
    }
}
```

**Output:**

```text
tests 6, body 5, updates 5
```

With n = 5: the test is evaluated 6 times, the body runs 5 times, and the update runs 5 times. When people ask "how many times does this statement execute?" they usually mean the body statement, which is the iteration count.

## Different steps

The count depends on how the variable moves.

| Loop | Values of `i` | Body count |
|---|---|---|
| `for (int i = 0; i < n; i++)` | 0 to n - 1 | n |
| `for (int i = 1; i <= n; i++)` | 1 to n | n |
| `for (int i = 0; i < n; i += 2)` | 0, 2, 4, ... | about n / 2 (exactly n / 2 rounded up) |
| `for (int i = 1; i < n; i *= 2)` | 1, 2, 4, 8, ... | about log2 of n, much smaller |

The last row is a loop that **doubles** its variable. For `n = 16` the values are 1, 2, 4, 8, so 4 iterations; for `n = 64` the values are 1, 2, 4, 8, 16, 32, so 6 iterations. A loop that **halves** works the same way in the other direction.

```java
int n = 1000;
int steps = 0;
while (n > 1) {
    n = n / 2;
    steps++;
}
System.out.println(steps);
```

**Output:**

```text
9
```

The values are 1000, 500, 250, 125, 62, 31, 15, 7, 3, 1, which gives 9 divisions. Even for a starting value of a million, a halving loop runs only about 20 times, so these loops stay small as `n` grows.

## Counting nested loops

Use the rules from Topic 2.11: multiply when the inner count does not depend on the outer variable, and add row by row when it does.

<figure>
<svg viewBox="0 0 600 330" role="img" aria-labelledby="f212-title f212-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="f212-title">Statement execution counts as n grows</title>
<desc id="f212-desc">A line chart with n from 0 to 10 on the horizontal axis and number of executions from 0 to 100 on the vertical axis. The straight line for a single loop reaches 10 at n equals 10. The curve for a half-triangle nested loop, n times n minus 1 over 2, reaches 45. The steepest curve for a full nested loop, n squared, reaches 100. The lines use different dash patterns and are labelled directly at their right ends.</desc>
<defs><marker id="ah-f212" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="600" height="330" fill="#ffffff"/>
<line x1="70" y1="280" x2="510" y2="280" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="280" x2="70" y2="40" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="280" x2="70" y2="285" stroke="#1d2b44" stroke-width="1.5"/>
<text x="70" y="300" font-size="12" text-anchor="middle" fill="#1d2b44">0</text>
<line x1="158" y1="280" x2="158" y2="285" stroke="#1d2b44" stroke-width="1.5"/>
<text x="158" y="300" font-size="12" text-anchor="middle" fill="#1d2b44">2</text>
<line x1="246" y1="280" x2="246" y2="285" stroke="#1d2b44" stroke-width="1.5"/>
<text x="246" y="300" font-size="12" text-anchor="middle" fill="#1d2b44">4</text>
<line x1="334" y1="280" x2="334" y2="285" stroke="#1d2b44" stroke-width="1.5"/>
<text x="334" y="300" font-size="12" text-anchor="middle" fill="#1d2b44">6</text>
<line x1="422" y1="280" x2="422" y2="285" stroke="#1d2b44" stroke-width="1.5"/>
<text x="422" y="300" font-size="12" text-anchor="middle" fill="#1d2b44">8</text>
<line x1="510" y1="280" x2="510" y2="285" stroke="#1d2b44" stroke-width="1.5"/>
<text x="510" y="300" font-size="12" text-anchor="middle" fill="#1d2b44">10</text>
<line x1="65" y1="280" x2="70" y2="280" stroke="#1d2b44" stroke-width="1.5"/>
<text x="60" y="284" font-size="12" text-anchor="end" fill="#1d2b44">0</text>
<line x1="65" y1="220" x2="70" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<text x="60" y="224" font-size="12" text-anchor="end" fill="#1d2b44">25</text>
<line x1="65" y1="160" x2="70" y2="160" stroke="#1d2b44" stroke-width="1.5"/>
<text x="60" y="164" font-size="12" text-anchor="end" fill="#1d2b44">50</text>
<line x1="65" y1="100" x2="70" y2="100" stroke="#1d2b44" stroke-width="1.5"/>
<text x="60" y="104" font-size="12" text-anchor="end" fill="#1d2b44">75</text>
<line x1="65" y1="40" x2="70" y2="40" stroke="#1d2b44" stroke-width="1.5"/>
<text x="60" y="44" font-size="12" text-anchor="end" fill="#1d2b44">100</text>
<text x="290" y="324" font-size="13" text-anchor="middle" fill="#1d2b44">n (size of the loop bounds)</text>
<text x="70" y="26" font-size="13" text-anchor="start" fill="#1d2b44">number of executions</text>
<polyline points="70,280 114,277.6 158,270.4 202,258.4 246,241.6 290,220 334,193.6 378,162.4 422,126.4 466,85.6 510,40" fill="none" stroke="#1d2b44" stroke-width="3"/>
<polyline points="70,280 114,280 158,277.6 202,272.8 246,265.6 290,256 334,244 378,229.6 422,212.8 466,193.6 510,172" fill="none" stroke="#1d2b44" stroke-width="3" stroke-dasharray="10 5"/>
<polyline points="70,280 114,277.6 158,275.2 202,272.8 246,270.4 290,268 334,265.6 378,263.2 422,260.8 466,258.4 510,256" fill="none" stroke="#1d2b44" stroke-width="3" stroke-dasharray="2 5"/>
<text x="516" y="44" font-size="13" text-anchor="start" fill="#1d2b44" font-weight="bold">n * n</text>
<text x="516" y="176" font-size="13" text-anchor="start" fill="#1d2b44" font-weight="bold">n(n-1)/2</text>
<text x="516" y="254" font-size="13" text-anchor="start" fill="#1d2b44" font-weight="bold">n</text>
</svg>
<figcaption>Figure 1. How many times a statement runs as n grows, for a single loop (n), a triangular nested loop (n(n-1)/2) and a full nested loop (n x n). The gaps widen quickly.</figcaption>
</figure>

| Code shape (n outer passes) | Innermost statement runs | n = 5 | n = 10 |
|---|---|---|---|
| Single loop | n | 5 | 10 |
| Inner loop independent of `i` (n passes) | n x n | 25 | 100 |
| Inner loop `j < i` | 0 + 1 + ... + (n - 1) = n(n - 1) / 2 | 10 | 45 |
| Inner loop with fixed 3 passes | 3n | 15 | 30 |

When `n` doubles from 5 to 10, the single loop does twice the work, the fixed-inner loop does twice the work, the triangle does 4.5 times the work, and the full nested loop does 4 times the work.

## Early exits: it depends on the data

Some loops can stop before they have visited everything, for example a `return` inside a loop, or a condition that becomes false early. Their count then depends on the **data** as well as on `n`.

- **Best case:** the least work, such as finding what you want straight away.
- **Worst case:** the most work, such as finding nothing and checking every candidate.

A prime test is a good example. The methods in the next section return as soon as they find a divisor, so a number with a small divisor is decided at once, whereas a prime must be tested against every candidate.

## Comparing two algorithms

Informal run-time comparison asks: *for the same task, which code executes fewer statements, and how does the gap change when `n` grows?* Take two ways to test whether `n` is prime. Method A tries every `d` from 2 to n - 1. Method B stops when `d * d` exceeds `n`, because if `n` has a divisor larger than its square root, it also has a smaller one. Each method here returns the **number of divisibility tests** it made.

```java
public class PrimeWork {
    public static int testsA(int n) {
        int tests = 0;
        for (int d = 2; d < n; d++) {
            tests++;
            if (n % d == 0) {
                return tests;
            }
        }
        return tests;
    }

    public static int testsB(int n) {
        int tests = 0;
        for (int d = 2; d * d <= n; d++) {
            tests++;
            if (n % d == 0) {
                return tests;
            }
        }
        return tests;
    }

    public static void main(String[] args) {
        System.out.println(testsA(97) + " " + testsB(97));
        System.out.println(testsA(1009) + " " + testsB(1009));
        System.out.println(testsA(100) + " " + testsB(100));
    }
}
```

**Output:**

```text
95 8
1007 30
1 1
```

For the prime 97, Method A makes 95 tests, and Method B makes 8. For the prime 1009, A makes 1007 and B makes 30: B's count grows far more slowly. For 100, both stop at the first test because 2 divides 100; the data decided the count, and the two methods are equal in this best case. Which method is better is a statement about **how the counts change as n grows and about the worst case**, not about one particular input.

## Worked example 1: counting two statements in a nested loop

**Question.** For `n = 6`, how many times do `a++` and `b++` execute? Give the general formulas, then check them for `n = 10`.

```java
public class TwoCounts {
    public static void main(String[] args) {
        int n = 6;
        int a = 0;
        int b = 0;
        for (int i = 1; i <= n; i++) {
            a++;
            for (int j = 1; j <= i; j++) {
                b++;
            }
        }
        System.out.println(a + " " + b);
    }
}
```

**Output:**

```text
6 21
```

**Solution.**

- `a++` is in the outer loop's body only, so it runs once per outer pass: **n = 6 times**.
- `b++` is in the inner loop. The inner loop runs `i` times on outer pass `i`, so the counts are 1, 2, 3, 4, 5, 6, which sum to **21**. In general, 1 + 2 + ... + n = n(n + 1) / 2, which for `n = 6` is 6 x 7 / 2 = 21.

| `i` | 1 | 2 | 3 | 4 | 5 | 6 | total |
|---|---|---|---|---|---|---|---|
| `a++` runs | 1 | 1 | 1 | 1 | 1 | 1 | 6 |
| `b++` runs | 1 | 2 | 3 | 4 | 5 | 6 | 21 |

**Check for `n = 10`.** `a++` runs 10 times and `b++` runs 10 x 11 / 2 = 55 times. Doubling `n` from 5 to 10 changes `b++` from 15 to 55, which is a factor of about 3.7, approaching 4 as `n` grows.

## Worked example 2: which loop does more work?

**Question.** Three code segments each use `n = 100`. How many times does `count++` run in each? Which does the most work?

```java
public class Compare {
    public static void main(String[] args) {
        int n = 100;
        int c1 = 0;
        for (int i = 0; i < n; i += 5) {
            c1++;
        }
        int c2 = 0;
        for (int i = 1; i < n; i *= 2) {
            c2++;
        }
        int c3 = 0;
        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                c3++;
            }
        }
        System.out.println(c1 + " " + c2 + " " + c3);
    }
}
```

**Output:**

```text
20 7 100
```

**Solution.**

1. `i` takes the values 0, 5, 10, ..., 95: that is 100 / 5 = **20** iterations.
2. `i` takes the values 1, 2, 4, 8, 16, 32, 64, and the next value, 128, is not less than 100: **7** iterations.
3. The nested loops are independent, so 10 x 10 = **100** iterations.

The third segment does the most work, even though its loop bounds (10) look small, because the two loops multiply. The second does the least, because its variable doubles.

**Check.** If `n` were doubled to 200, segment 1 would run 40 times (twice as many), segment 2 would run 8 times (one more), and the nested segment would still be 100, since its bounds are fixed numbers. Counts respond to `n` only through the bounds that use `n`.

## Common misconceptions

- **"A loop condition is tested as many times as the body runs."** It is tested one more time.
- **"Fewer lines of code means a faster program."** Speed in this sense depends on how often statements execute, not on how many lines are written. A short nested loop can do far more work than a long, straight sequence.
- **"Nested loops always give n x n."** Only if both bounds depend on n and the inner bound does not depend on the outer variable.
- **"Doubling n always doubles the work."** Only for a single loop. A nested loop does about four times as much; a halving loop does just one more pass.
- **"Run-time analysis means timing the program."** Here you count statement executions, which does not depend on the machine.
- **"The count is fixed by n."** A loop with an early exit also depends on the data.
- **"A bigger count is always worse."** The comparison is about the work needed for the same task; a loop that does more work to get a different result is not comparable.

## Where this leads

Counting executions is how you will compare searching and sorting algorithms in Topics 4.14 and 4.15 and recursion in Topic 4.16. In the multiple-choice section it is a standard question type: "how many times is this statement executed?". Try the [practice questions](/advanced-course-resources/computer-science-a/2-12-informal-run-time-analysis-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/2-12-informal-run-time-analysis-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/2-12-informal-run-time-analysis-checklist/). Then take the [Unit 2 diagnostic](/advanced-course-resources/computer-science-a/unit-2-diagnostic/) and finish with the [Unit 2 review](/advanced-course-resources/computer-science-a/unit-2-review/). For nested loop counting, revisit the [Topic 2.11 study guide](/advanced-course-resources/computer-science-a/2-11-nested-iteration-study-guide/).
