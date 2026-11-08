---
resourceId: "mb-ap-csa-2.7-study-guide"
title: "while Loops: Study Guide (Computer Science A 2.7)"
description: "Learn while loops, their condition, and how to trace them, with a first-principles explanation, traced Java examples, a diagram, two worked examples and the mistakes to avoid."
course: "computer-science-a"
unit: 2
topics: ["2.7"]
resourceType: "study-guide"
prerequisites:
  - "Boolean expressions and compound conditions (Topics 2.2 and 2.5)"
  - "Variables, assignment and compound assignment such as i++ and sum += i"
prerequisiteResources: ["mb-ap-csa-2.6-study-guide"]
learningObjectives:
  - "Write a while loop with correct initialisation, condition and update"
  - "Trace a while loop with a table and say how many times its body runs, including zero"
  - "Explain why the condition is tested before every iteration, including the first"
  - "Recognise infinite loops and off-by-one errors, and state the initial conditions a loop needs to work as intended"
skills: ["2", "3", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.7-revision-notes", "mb-ap-csa-2.7-practice", "mb-ap-csa-2.7-checklist"]
next: "mb-ap-csa-2.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "A while loop repeats its body zero or more times, as long as its Boolean expression is true."
  - "The condition is tested before every iteration, including the first. If it is false at the start, the body never runs."
  - "Something in the body must move the loop toward making the condition false; otherwise the loop is infinite."
  - "An off-by-one error means the loop runs one time too many or one time too few, usually from the wrong boundary (< versus <=)."
  - "To trace a loop, make a table with a column for each variable and one row for each time the condition is tested."
faqs:
  - question: "How many times does a while loop run?"
    answer: "As many times as its condition is true when tested. It can be zero times, if the condition is false at the start. It can also be infinite, if the condition never becomes false."
  - question: "What is an infinite loop?"
    answer: "A loop whose Boolean expression always evaluates to true, so it never ends. The usual cause is forgetting to update the variable the condition depends on, or updating it in the wrong direction."
  - question: "What is an off-by-one error?"
    answer: "The loop runs one time too many or one time too few. It is typically caused by using < where <= is needed or the reverse, or by starting the counter at the wrong value."
  - question: "When should I use while rather than for?"
    answer: "Use while when you do not know in advance how many times to repeat, such as 'keep halving until the value is 1'. A for loop (Topic 2.8) is tidier when you count a known number of times. Any for loop can be rewritten as a while loop and the reverse."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## Repeating while a condition holds

In Topic 2.1 you met repetition as one of the three building blocks. Java's most basic repetition statement is the **`while` loop**. Iteration is a form of repetition: an iteration statement changes the flow of control by repeating a segment of code **zero or more times**, as long as the Boolean expression controlling the loop evaluates to true.

```
while (Boolean expression) {
    loop body
}
```

A while loop is a type of **iterative statement**. Its behaviour is very regular:

1. The Boolean expression is evaluated, **including before the first pass**.
2. If it is true, the loop body runs once (one **iteration**), and then control returns to step 1.
3. If it is false, the loop ends and execution continues with the statement after the loop.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="f27-title f27-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="f27-title">Flowchart of a while loop that prints 1, 2, 3</title>
<desc id="f27-desc">A flowchart. A box sets i to 1. A diamond asks: is i less than or equal to 3? If yes, a box prints i and then sets i to i plus 1, and an arrow returns to the diamond. If no, the path leaves the loop on the right to a box labelled after the loop. The test is made before every pass, including the first.</desc>
<defs><marker id="ah-f27" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<rect x="150" y="10" width="160" height="32" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="230" y="30.55" font-size="13" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">int i = 1;</text>
<line x1="230" y1="42" x2="230" y2="70" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f27)"/>
<polygon points="230,70 325,110 230,150 135,110" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="230" y="114.9" font-size="14" text-anchor="middle" fill="#1d2b44">i &lt;= 3 ?</text>
<line x1="230" y1="150" x2="230" y2="180" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f27)"/>
<text x="238" y="170" font-size="12" text-anchor="start" fill="#1d2b44">true</text>
<rect x="130" y="180" width="200" height="66" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="230" y="209.2" font-size="12" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">System.out.println(i);</text>
<text x="230" y="225.2" font-size="12" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">i = i + 1;</text>
<polyline points="130,213 60,213 60,110 135,110" fill="none" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f27)"/>
<polyline points="325,110 430,110" fill="none" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f27)"/>
<text x="378" y="102" font-size="12" text-anchor="middle" fill="#1d2b44">false</text>
<rect x="430" y="94" width="120" height="32" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="490" y="114.55" font-size="13" text-anchor="middle" fill="#1d2b44">after the loop</text>
<text x="230" y="290" font-size="12" text-anchor="middle" fill="#1d2b44">The test runs before every pass, including the first.</text>
</svg>
<figcaption>Figure 1. A while loop that prints 1, 2, 3. The test is made before every pass, including the first, so the body might run zero times.</figcaption>
</figure>

## A first loop

```java
public class CountUp {
    public static void main(String[] args) {
        int i = 1;
        while (i <= 3) {
            System.out.println(i);
            i = i + 1;
        }
        System.out.println("after: " + i);
    }
}
```

**Output:**

```text
1
2
3
after: 4
```

Every while loop has three ingredients, even though only one is inside the brackets:

- an **initial value** for the variable that the loop depends on (`int i = 1;`), set before the loop;
- a **condition** that says whether to go round again (`i <= 3`);
- an **update** in the body that changes the variable so the condition can eventually become false (`i = i + 1;`).

When the loop ends, `i` is 4, not 3: the loop only stops when the test `4 <= 3` fails, so the variable has already moved past the last value. Many errors come from forgetting this.

## Tracing a loop

Tracing is the key skill for loops. Make a table with one row for each time the condition is tested, and a column for each variable. For `CountUp`:

| Test number | `i` | `i <= 3`? | Action |
|---|---|---|---|
| 1 | 1 | true | print 1, then `i` becomes 2 |
| 2 | 2 | true | print 2, then `i` becomes 3 |
| 3 | 3 | true | print 3, then `i` becomes 4 |
| 4 | 4 | false | loop ends |

The condition is tested **four** times, but the body runs **three** times. That difference, one more test than iterations, is worth remembering.

## Zero iterations

Because the test comes first, a loop whose condition is false at the start never runs its body.

```java
int k = 10;
while (k < 5) {
    System.out.println("inside");
    k++;
}
System.out.println("k = " + k);
```

**Output:**

```text
k = 10
```

The body is skipped, `k` is unchanged, and only the final line prints. A well-designed loop is expected to cope with this case.

## Infinite loops

An **infinite loop** occurs when the Boolean expression always evaluates to true, so the loop never stops. The usual cause is that the update is missing, or moves the variable the wrong way.

```java
int n = 5;
while (n > 0) {
    System.out.println(n);
}
```

Here `n` starts at 5 and nothing in the body changes it, so `n > 0` is true at every test and the program prints 5 for ever. The fix is to move `n` toward the exit condition by adding `n = n - 1;` inside the loop. If you wrote `n = n + 1;` instead, the loop would be heading away from its exit. When you write a loop, always ask: *what in the body makes the condition eventually false?*

## Off-by-one errors

An **off-by-one error** occurs when the loop runs one time too many or one time too few. It is nearly always a boundary mistake.

```java
int i = 1;
while (i < 5) {
    System.out.print(i + " ");
    i++;
}
```

**Output:**

```text
1 2 3 4
```

If the aim was to print 1 to 5, the loop runs once too few: the condition should be `i <= 5`. A reliable check is to ask what happens on the first and last values. For the correct loop, the last iteration is the one with `i == 5`, so `i <= 5` must be true there and `i <= 5` must be false for 6.

## Accumulating a result

Most while loops build up an answer: a running total, a count, a product. You set the accumulator before the loop, change it inside, and use it after.

```java
int n = 40;
int steps = 0;
while (n > 1) {
    n = n / 2;
    steps++;
}
System.out.println(steps);
```

**Output:**

```text
5
```

This counts how many times 40 can be halved (with integer division) before it reaches 1: 40 → 20 → 10 → 5 → 2 → 1.

## Worked example 1: a loop that stops at a target

**Question.** A savings pot of 100 dollars grows by 10% each year, with each year's total rounded down to a whole number of dollars (integer arithmetic). How many years until it reaches at least 200 dollars, and how much is in the pot then?

**Plan.** We do not know the number of years in advance, so a while loop is appropriate. Set `amount` to 100 and `years` to 0. Keep going while `amount < 200`. Each pass: `amount = amount * 11 / 10;` and `years++`. Multiply first, so the integer division happens last.

```java
public class Savings {
    public static void main(String[] args) {
        int amount = 100;
        int years = 0;
        while (amount < 200) {
            amount = amount * 11 / 10;
            years++;
        }
        System.out.println(years + " years, " + amount + " dollars");
    }
}
```

**Output:**

```text
8 years, 212 dollars
```

**Trace.**

| Test | `amount` before | `amount < 200`? | `amount` after | `years` after |
|---|---|---|---|---|
| 1 | 100 | true | 100 * 11 / 10 = 110 | 1 |
| 2 | 110 | true | 1210 / 10 = 121 | 2 |
| 3 | 121 | true | 1331 / 10 = 133 | 3 |
| 4 | 133 | true | 1463 / 10 = 146 | 4 |
| 5 | 146 | true | 1606 / 10 = 160 | 5 |
| 6 | 160 | true | 1760 / 10 = 176 | 6 |
| 7 | 176 | true | 1936 / 10 = 193 | 7 |
| 8 | 193 | true | 2123 / 10 = 212 | 8 |
| 9 | 212 | false | | loop ends |

**Check.** 100 would reach 200 after about 7.3 years of exact 10% growth (1.1 to the power 7 is about 1.95, and to the power 8 is about 2.14), so 8 years is plausible, and 212 is a little under 2.14 times 100 because of the rounding down. The initial condition (`amount` below 200) holds, so the loop runs at least once.

## Worked example 2: three broken loops

**Question.** Each loop is meant to print 2, 4, 6, 8, 10. Describe what each actually does and fix it.

**Loop A.**

```java
int a = 2;
while (a < 10) {
    System.out.print(a + " ");
    a = a + 2;
}
```

**Output:**

```text
2 4 6 8
```

Off by one: the last value, 10, fails the test `10 < 10`. Fix: `a <= 10`.

**Loop B.**

```java
int b = 2;
while (b <= 10) {
    System.out.print(b + " ");
}
```

Infinite loop: `b` never changes, so the condition stays true and 2 is printed for ever. Fix: add `b = b + 2;` inside the loop.

**Loop C.**

```java
int c = 12;
while (c <= 10) {
    System.out.print(c + " ");
    c = c + 2;
}
System.out.println("done");
```

**Output:**

```text
done
```

Zero iterations: the initial value 12 already makes the condition false, so nothing is printed. The initial condition is wrong: the loop needs `c` to start at 2.

**Corrected loop.**

```java
int c = 2;
while (c <= 10) {
    System.out.print(c + " ");
    c = c + 2;
}
System.out.println("done");
```

**Output:**

```text
2 4 6 8 10 done
```

The three symptoms are different: one loop stops early, one never stops and one never starts. In each case the question to ask is the same: what is the value before the first test, what is the test, and what changes the value?

## How this appears in exam questions

Loop questions in the multiple-choice section usually ask for the output, the final value of a variable, or the number of times a statement executes. Build a table with one column for each variable that changes and one row for each test of the condition, and stop only when you have recorded a test that is false. Two further question types draw on this topic. One asks you to describe the **initial conditions** a loop needs to work as intended, for example that a variable must be positive before a loop that halves it, or that a counter must start at 0 and not at 1. The other gives a loop and asks what is wrong: it is infinite, it never runs, or it is off by one. In your own code, set the loop up in this order: initial value, condition, update, and then check the first and last values.

## Common misconceptions

- **"A while loop always runs at least once."** It runs zero or more times, because the test comes first.
- **"The loop stops the moment the condition becomes false in the middle of the body."** The condition is only tested again at the top, so the rest of the body still runs.
- **"The variable equals the last value when the loop ends."** It equals the first value that failed the test (for `i <= 3` it is 4).
- **"The body runs as many times as the condition is tested."** It runs one fewer time, because the final test is the false one.
- **"A loop with no update is fine if the body prints something."** Without an update that makes the condition false, the loop is infinite.
- **"Changing the wrong direction only changes the answer."** An update in the wrong direction (adding when it should subtract) usually makes the loop infinite.
- **"`<` and `<=` are interchangeable at the boundary."** They differ by exactly one iteration.

## Where this leads

The while loop has a compact relative, the for loop, which gathers the initialisation, test and update in one header (Topic 2.8). In Topic 2.9 you will use loops to implement standard algorithms such as sums, counts, and the digits of an integer. Practise now with the [practice questions](/advanced-course-resources/computer-science-a/2-7-while-loops-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/2-7-while-loops-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/2-7-while-loops-checklist/). Then read the [Topic 2.8 study guide](/advanced-course-resources/computer-science-a/2-8-for-loops-study-guide/). For Boolean conditions, look back at the [Topic 2.5 study guide](/advanced-course-resources/computer-science-a/2-5-compound-boolean-expressions-study-guide/).
