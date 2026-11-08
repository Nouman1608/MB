---
resourceId: "mb-ap-csa-2.8-study-guide"
title: "for Loops: Study Guide (Computer Science A 2.8)"
description: "Learn for loops, the header's three parts and equivalent while loops, with a first-principles explanation, traced Java examples, a diagram, two worked examples and the mistakes to avoid."
course: "computer-science-a"
unit: 2
topics: ["2.8"]
resourceType: "study-guide"
prerequisites:
  - "while loops (Topic 2.7)"
  - "Compound assignment and increment operators such as i++ and i += 2"
prerequisiteResources: ["mb-ap-csa-2.7-study-guide"]
learningObjectives:
  - "Write a for loop whose header has the correct initialisation, Boolean expression and update"
  - "State the exact order in which the header and the body of a for loop execute"
  - "Count iterations and trace the loop control variable, including loops that step by more than 1 or count down"
  - "Rewrite a for loop as an equivalent while loop and the reverse, and diagnose common for-loop errors"
skills: ["2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.8-revision-notes", "mb-ap-csa-2.8-practice", "mb-ap-csa-2.8-checklist"]
next: "mb-ap-csa-2.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "A for loop header has three parts separated by semicolons: initialisation, Boolean expression, update."
  - "Order of execution: initialisation once; then test, body, update, test, body, update ... until the test is false."
  - "The update runs after the whole body and before the next test."
  - "A for loop can be rewritten as an equivalent while loop and vice versa."
  - "A variable declared in the header exists only inside the loop; using it afterwards does not compile."
faqs:
  - question: "When does the update statement in a for loop run?"
    answer: "After the entire loop body has run and before the Boolean expression is tested again. It never runs before the first iteration."
  - question: "How do I count the iterations of a for loop?"
    answer: "List the values of the loop control variable for which the Boolean expression is true. For example, for (int i = 2; i <= 20; i += 6) has i equal to 2, 8, 14 and 20, so 4 iterations."
  - question: "Why does a semicolon after the for header cause a bug?"
    answer: "The semicolon is an empty statement and becomes the whole loop body. The loop runs its header all the way through doing nothing, and the block after it runs once."
  - question: "Can I use the loop variable after the loop?"
    answer: "Not if it was declared in the header: its scope is the loop. Declare the variable before the loop if you need its final value afterwards."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## A loop with its controls in one place

The `while` loop of Topic 2.7 needs three ingredients: an initial value, a test and an update. In a `while` loop they are scattered: the initial value is above the loop, the test is in the brackets, and the update is hidden somewhere in the body. A **`for` loop** brings all three together in one header, which makes counting loops easier to read and harder to get wrong.

A for loop is a type of iterative statement. The header has **three parts**, separated by semicolons:

```
for (initialization; Boolean expression; update) {
    loop body
}
```

- The **initialization** declares and gives a starting value to the **loop control variable**, for example `int i = 0`.
- The **Boolean expression** decides whether the body runs, for example `i < 5`.
- The **update** changes the loop control variable, for example `i++`.

## The order of execution

This is the fact you must know exactly.

1. The initialization is executed **once**, before the first Boolean expression is evaluated.
2. The Boolean expression is evaluated. If it is false, the loop ends.
3. If it is true, the **entire body** executes.
4. The update is executed.
5. Go back to step 2.

In each iteration the update runs after the whole body and before the Boolean expression is evaluated again.

<figure>
<svg viewBox="0 0 600 300" role="img" aria-labelledby="f28-title f28-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="f28-title">How a for loop header executes</title>
<desc id="f28-desc">At the top, the header for int i = 0; i &lt; 3; i++ is split into three labelled parts. Below is a flowchart: initialization runs once, then the Boolean test is evaluated. If true, the loop body runs, then the update runs, and control returns to the test. If false, the loop ends.</desc>
<defs><marker id="ah-f28" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="600" height="300" fill="#ffffff"/>
<text x="100" y="30" font-size="20" text-anchor="start" fill="#1d2b44" font-weight="bold" font-family="ui-monospace, Menlo, Consolas, monospace">for ( int i = 0 ;  i &lt; 3 ;  i++ )</text>
<text x="226" y="52" font-size="12" text-anchor="middle" fill="#1d2b44">initialization</text>
<text x="348" y="52" font-size="12" text-anchor="middle" fill="#1d2b44">Boolean test</text>
<text x="432" y="52" font-size="12" text-anchor="middle" fill="#1d2b44">update</text>
<rect x="30" y="130" width="120" height="40" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="90" y="146.2" font-size="12" text-anchor="middle" fill="#1d2b44">initialization</text>
<text x="90" y="162.2" font-size="12" text-anchor="middle" fill="#1d2b44">(once only)</text>
<line x1="150" y1="150" x2="205" y2="150" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f28)"/>
<polygon points="260,110 315,150 260,190 205,150" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="260" y="154.9" font-size="14" text-anchor="middle" fill="#1d2b44">test</text>
<line x1="315" y1="150" x2="365" y2="150" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f28)"/>
<text x="340" y="142" font-size="12" text-anchor="middle" fill="#1d2b44">true</text>
<rect x="365" y="130" width="90" height="40" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="410" y="154.55" font-size="13" text-anchor="middle" fill="#1d2b44">body</text>
<line x1="455" y1="150" x2="490" y2="150" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f28)"/>
<rect x="490" y="130" width="90" height="40" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="535" y="154.55" font-size="13" text-anchor="middle" fill="#1d2b44">update</text>
<polyline points="535,130 535,92 260,92 260,110" fill="none" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f28)"/>
<text x="400" y="86" font-size="12" text-anchor="middle" fill="#1d2b44">back to the test</text>
<line x1="260" y1="190" x2="260" y2="245" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f28)"/>
<rect x="205" y="245" width="110" height="30" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="260" y="264.2" font-size="12" text-anchor="middle" fill="#1d2b44">after the loop</text>
<text x="270" y="222" font-size="12" text-anchor="start" fill="#1d2b44">false: leave the loop</text>
</svg>
<figcaption>Figure 1. Execution of a for loop. The initialization happens once; the test, body and update then repeat in that order until the test is false.</figcaption>
</figure>

```java
public class ForBasics {
    public static void main(String[] args) {
        for (int i = 0; i < 3; i++) {
            System.out.println("i = " + i);
        }
        System.out.println("finished");
    }
}
```

**Output:**

```text
i = 0
i = 1
i = 2
finished
```

Trace: `i` starts at 0 and `0 < 3` is true, so the body prints and `i++` makes it 1. Then 1, then 2. After the body with `i = 2`, the update makes `i` equal to 3; `3 < 3` is false and the loop ends. The body ran **3** times, for the values 0, 1 and 2.

## Counting up, counting down, stepping

The update can be anything that moves the variable toward a false test.

| Header | Values of the loop variable | Iterations |
|---|---|---|
| `for (int i = 0; i < 5; i++)` | 0, 1, 2, 3, 4 | 5 |
| `for (int i = 1; i <= 5; i++)` | 1, 2, 3, 4, 5 | 5 |
| `for (int i = 10; i > 0; i--)` | 10, 9, ..., 1 | 10 |
| `for (int i = 2; i <= 20; i += 6)` | 2, 8, 14, 20 | 4 |
| `for (int i = 0; i < 10; i += 3)` | 0, 3, 6, 9 | 4 |

To count iterations, list the values for which the test is true. The most common form, `for (int i = 0; i < n; i++)`, runs exactly `n` times, with `i` from 0 to `n - 1`.

## Accumulating inside a for loop

```java
int sum = 0;
for (int i = 1; i <= 4; i++) {
    sum = sum + i * i;
}
System.out.println(sum);
```

**Output:**

```text
30
```

The loop adds 1, 4, 9 and 16, giving 30. The accumulator `sum` is declared **before** the loop so that it is still available afterwards.

## A for loop is a while loop in disguise

Any `for` loop can be rewritten as an equivalent `while` loop, and the reverse. The mapping is mechanical.

| `for` loop | Equivalent `while` loop |
|---|---|
| `for (int i = 1; i <= 3; i++) {`<br>`    body`<br>`}` | `int i = 1;`<br>`while (i <= 3) {`<br>`    body`<br>`    i++;`<br>`}` |

Put the initialization before the loop, the Boolean expression in the `while`, and the update as the last statement of the body. The one difference is **scope**: a variable declared in the for header exists only inside the loop, whereas the while version leaves `i` visible after the loop (with the value that failed the test).

```java
public class ForWhile {
    public static void main(String[] args) {
        for (int i = 1; i <= 3; i++) {
            System.out.print(i + " ");
        }
        System.out.println();

        int j = 1;
        while (j <= 3) {
            System.out.print(j + " ");
            j++;
        }
        System.out.println();
        System.out.println("j after the loop: " + j);
    }
}
```

**Output:**

```text
1 2 3
1 2 3
j after the loop: 4
```

## Scope of the loop control variable

If the variable is declared in the header, it exists only for the loop. Using it afterwards is a compile-time error:

```java
for (int i = 0; i < 3; i++) {
    System.out.println(i);
}
System.out.println(i);
```

The last line does not compile: `i` is out of scope. If you need the final value, declare the variable before the loop (`int i;` or `int i = 0;`) and leave the initialization out of the header (or use it as the first part of the header without `int`).

## Errors to watch for

**A semicolon after the header.**

```java
for (int i = 0; i < 5; i++);
{
    System.out.println("x");
}
```

**Output:**

```text
x
```

The semicolon is an empty statement and forms the whole loop body. The loop spins five times doing nothing, then the block runs **once**.

**Changing the loop control variable inside the body.** This is legal but easy to misjudge.

```java
for (int i = 0; i < 10; i++) {
    System.out.print(i + " ");
    i += 2;
}
```

**Output:**

```text
0 3 6 9
```

Trace: `i = 0`, print 0, body makes `i` 2, update makes 3. Print 3, body makes 5, update 6. Print 6, body 8, update 9. Print 9, body 11, update 12, and `12 < 10` is false. The body ran 4 times, not 10.

**`<` versus `<=`.** `for (int i = 1; i < 5; i++)` visits 1 to 4; `for (int i = 1; i <= 5; i++)` visits 1 to 5. The boundary decides whether the last value is included.

## Worked example 1: counting and tracing

**Question.** (a) How many times does the body of `for (int i = 1; i <= 20; i += 4)` run? (b) What does the loop below print, and what is the value of `total` afterwards?

```java
public class StepSum {
    public static void main(String[] args) {
        int total = 0;
        for (int i = 1; i <= 20; i += 4) {
            total += i;
            System.out.print(i + " ");
        }
        System.out.println();
        System.out.println("total = " + total);
    }
}
```

**Output:**

```text
1 5 9 13 17
total = 45
```

**Solution.** (a) The values of `i` for which `i <= 20` is true are 1, 5, 9, 13 and 17. The next value, 21, is not at most 20, so the loop ends. The body runs **5** times.

(b) Trace:

| Iteration | `i` at the test | `i <= 20`? | `total` after the body |
|---|---|---|---|
| 1 | 1 | true | 1 |
| 2 | 5 | true | 6 |
| 3 | 9 | true | 15 |
| 4 | 13 | true | 28 |
| 5 | 17 | true | 45 |
| (test) | 21 | false | loop ends |

**Check.** 1 + 5 + 9 + 13 + 17 = 45. The values form an arithmetic sequence with 5 terms, first 1 and last 17, so the sum is 5 x (1 + 17) / 2 = 45.

## Worked example 2: rewriting and countdown

**Question.** Rewrite the following while loop as a for loop, then trace it.

```java
int c = 10;
while (c > 0) {
    System.out.print(c + " ");
    c -= 3;
}
```

**Output:**

```text
10 7 4 1
```

**Solution.** The initialization is `int c = 10`, the Boolean expression is `c > 0`, and the update is `c -= 3`. As a for loop:

```java
for (int c = 10; c > 0; c -= 3) {
    System.out.print(c + " ");
}
```

**Output:**

```text
10 7 4 1
```

Trace: `c` takes the values 10, 7, 4, 1, and then -2, for which `-2 > 0` is false. So the body runs 4 times and the output is `10 7 4 1`. **Check:** the number of iterations is the number of values in the sequence 10, 7, 4, 1, and the next value, -2, is not positive. If we had written `c >= 0`, the sequence would still stop at -2, because it never hits exactly 0, which is a reminder that an inequality such as `>=` is safer than testing for an exact value.

## How this appears in exam questions

Because a `for` loop packs its controls into one line, questions about it often probe the order of execution and the scope of the variable. Expect to be asked how many times a body runs for a header with a step other than 1, what a loop prints when the body also changes the control variable, or why a segment does not compile or does not behave as intended (a variable used after the loop, a semicolon after the header, a loop that counts the wrong way). You may also be asked to rewrite a `for` loop as an equivalent `while` loop. Practise reading a header aloud in the order it executes: *set, test, run the body, update, test again.* Writing the sequence of values of the control variable before you answer is the quickest way to avoid an off-by-one slip.

## Common misconceptions

- **"The update runs before the first iteration."** It runs after the body, so the first iteration uses the initial value.
- **"The initialization runs on every iteration."** It runs once.
- **"A for loop is faster than a while loop."** They are equivalent in behaviour; the for loop is simply a tidier way to write a counting loop.
- **"The loop variable can be used anywhere afterwards."** If declared in the header, it is out of scope after the loop.
- **"`i < n` and `i <= n` both run n times."** `i < n` from 0 runs n times; `i <= n` from 0 runs n + 1 times.
- **"A semicolon after the header is harmless."** It becomes an empty loop body, and the block after it runs once.
- **"Changing the loop variable inside the body is the same as changing the update."** It also affects the test, so the number of iterations changes in a way that is easy to misjudge. Trace such loops carefully.

## Where this leads

In Topic 2.9 you will use loops (both kinds) to write standard algorithms: finding divisors, extracting digits, counting, summing, finding a minimum or maximum. In Topic 2.11 you will put one loop inside another. Practise now with the [practice questions](/advanced-course-resources/computer-science-a/2-8-for-loops-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/2-8-for-loops-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/2-8-for-loops-checklist/). Then read the [Topic 2.9 study guide](/advanced-course-resources/computer-science-a/2-9-implementing-selection-iteration-algorithms-study-guide/). For loops that are not counting loops, revisit the [Topic 2.7 study guide](/advanced-course-resources/computer-science-a/2-7-while-loops-study-guide/).
