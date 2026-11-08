---
resourceId: "mb-ap-csa-2.3-study-guide"
title: "if Statements: Study Guide (Computer Science A 2.3)"
description: "Learn one-way and two-way if statements, with a first-principles explanation, traced Java examples, a diagram, two worked examples and the mistakes to avoid."
course: "computer-science-a"
unit: 2
topics: ["2.3"]
resourceType: "study-guide"
prerequisites:
  - "Boolean expressions and relational operators (Topic 2.2)"
  - "Declaring variables and printing with System.out.println"
prerequisiteResources: ["mb-ap-csa-2.2-study-guide"]
learningObjectives:
  - "Write one-way (if) and two-way (if-else) selection statements with correct syntax"
  - "Trace an if or if-else statement and state exactly which statements run for given values"
  - "Explain the difference between an if-else and two separate if statements"
  - "Avoid and diagnose common errors: a stray semicolon, missing braces and = used for =="
skills: ["2", "3", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.3-revision-notes", "mb-ap-csa-2.3-practice", "mb-ap-csa-2.3-checklist"]
next: "mb-ap-csa-2.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "An if statement runs its body only when its Boolean expression is true; a one-way selection does nothing at all when it is false."
  - "An if-else runs the if body when the expression is true and the else body when it is false: exactly one of the two bodies runs."
  - "Two separate if statements are not an if-else: both can run, because the second condition is tested afterwards, using any values the first changed."
  - "Use braces for every body. A semicolon straight after the condition makes the body a separate block that always runs."
  - "To trace selection, write the value of every variable before the condition, say true or false, and follow the one path that is taken."
faqs:
  - question: "What is the difference between a one-way and a two-way selection?"
    answer: "A one-way selection (if) has one body that runs only when the condition is true. A two-way selection (if-else) has two bodies: the if body for true and the else body for false. After either one, execution continues with the next statement."
  - question: "Do I need curly braces around a single statement?"
    answer: "Java allows you to omit them when the body is one statement, but then only the one statement directly after the condition belongs to the if. Using braces every time avoids mistakes when you add a second statement or misread the indentation."
  - question: "Why does a semicolon after the condition cause a bug?"
    answer: "The semicolon is an empty statement. Java treats it as the whole body of the if, so the block that follows is not part of the if at all and always runs."
  - question: "Can the condition in an if be a boolean variable?"
    answer: "Yes. If isEven is a boolean variable, if (isEven) is correct and clearer than if (isEven == true). Both work, but the shorter form is the usual style."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Choosing a path

Up to now your programs have run every statement from top to bottom. Real programs have to react: charge a different price for a child, print a warning if a temperature is too high, stop a game when a player is out of lives. **Selection statements** change the normal top-to-bottom order of execution. They look at a Boolean expression and decide which segment of code, if any, to run. The most important selection statement in Java is the **`if` statement**.

An `if` statement affects the **flow of control** by executing different segments of code depending on the value of a Boolean expression. There are two forms you need to master in this topic.

## One-way selection: if

A **one-way selection** is used when there is a segment of code that should run *only under a certain condition*. The body is executed only when the Boolean expression is true. When it is false, the body is skipped and execution carries on with the next statement.

```java
public class OneWay {
    public static void main(String[] args) {
        int temperature = 3;
        System.out.println("Checking forecast");
        if (temperature < 5) {
            System.out.println("Wear a coat");
        }
        System.out.println("Done");
    }
}
```

**Output:**

```text
Checking forecast
Wear a coat
Done
```

With `temperature = 12` instead, the condition `12 < 5` is false, the body is skipped, and the output is just `Checking forecast` followed by `Done`.

The pattern is:

```
if (Boolean expression) {
    statements that run only when the expression is true
}
```

The parentheses around the condition are required. There is no semicolon after the closing parenthesis.

## Two-way selection: if-else

A **two-way selection** is used when there are two segments of code: one for when the expression is true and another for when it is false. The body of the `if` runs when the expression is true; the body of the `else` runs when it is false. **Exactly one of the two bodies runs**, never both and never neither.

```java
int balance = -20;
if (balance < 0) {
    System.out.println("Overdrawn");
} else {
    System.out.println("Balance OK");
}
```

**Output:**

```text
Overdrawn
```

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="f23-title f23-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="f23-title">Flowchart of a two-way if-else statement</title>
<desc id="f23-desc">A flowchart. A diamond asks: is balance less than 0? The true branch on the left leads to a box that prints Overdrawn. The false branch on the right leads to a box that prints Balance OK. Both boxes lead down to one box labelled next statement, so exactly one of the two bodies runs.</desc>
<defs><marker id="ah-f23" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<rect x="200" y="8" width="160" height="28" rx="14" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="280" y="26.55" font-size="13" text-anchor="middle" fill="#1d2b44">Before the if</text>
<line x1="280" y1="36" x2="280" y2="60" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f23)"/>
<polygon points="280,60 390,100 280,140 170,100" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="280" y="104.9" font-size="14" text-anchor="middle" fill="#1d2b44">balance &lt; 0 ?</text>
<polyline points="170,100 110,100 110,160" fill="none" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f23)"/>
<text x="140" y="92" font-size="12" text-anchor="middle" fill="#1d2b44">true</text>
<polyline points="390,100 450,100 450,160" fill="none" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f23)"/>
<text x="420" y="92" font-size="12" text-anchor="middle" fill="#1d2b44">false</text>
<rect x="30" y="160" width="160" height="34" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="110" y="181.2" font-size="12" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">print "Overdrawn"</text>
<rect x="370" y="160" width="160" height="34" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="450" y="181.2" font-size="12" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">print "Balance OK"</text>
<polyline points="110,194 110,240 280,240" fill="none" stroke="#1d2b44" stroke-width="2"/>
<polyline points="450,194 450,240 280,240" fill="none" stroke="#1d2b44" stroke-width="2"/>
<line x1="280" y1="240" x2="280" y2="262" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f23)"/>
<rect x="200" y="262" width="160" height="34" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="280" y="283.55" font-size="13" text-anchor="middle" fill="#1d2b44">next statement</text>
</svg>
<figcaption>Figure 1. The flow of control through an if-else. One diamond, two exits, and both bodies lead to the same next statement.</figcaption>
</figure>

The flowchart makes the structure clear. There is a single decision. After the chosen body finishes, both paths meet again at the next statement, so selection never "loses" the rest of the program.

## Where the else belongs

An `else` must follow an `if` and always belongs to it. It has no condition of its own: it means "whenever the `if` condition was false". If you need a second condition you use `else if`, which is Topic 2.4.

## If-else is not two ifs

This is the idea that most often costs marks. Compare these two pieces of code with `n = 15`.

```java
public class IfVsIfElse {
    public static void main(String[] args) {
        int n = 15;
        if (n > 10) {
            n = n - 10;
        }
        if (n <= 10) {
            n = n * 2;
        }
        System.out.println("two ifs: " + n);

        int m = 15;
        if (m > 10) {
            m = m - 10;
        } else {
            m = m * 2;
        }
        System.out.println("if-else: " + m);
    }
}
```

**Output:**

```text
two ifs: 10
if-else: 5
```

In the first version the two `if` statements are independent. The first changes `n` from 15 to 5. Then the second condition is tested using the **new** value, `5 <= 10`, which is true, so `n` becomes 10. In the second version there is only one decision, made on the original value; the `else` is skipped because the `if` body ran. The results are 10 and 5.

Use `if-else` when exactly one of two actions must happen. Use separate `if` statements only when the conditions are genuinely independent.

## Braces and layout

The body of a selection statement is a **block**, the statements between `{` and `}`. Java lets you leave off the braces when the body is a single statement, but then only the one statement immediately after the condition belongs to the `if`. Indentation is for human readers; the compiler ignores it.

```java
int n = 2;
if (n > 5)
    System.out.println("big");
    System.out.println("done checking");
```

**Output:**

```text
done checking
```

The second `println` is indented, but it is **not** part of the `if`, so it always runs. Because `2 > 5` is false, only `done checking` is printed. The safest habit is to write braces every time.

## The stray semicolon

```java
int score = 3;
if (score > 5);
{
    System.out.println("High score");
}
```

**Output:**

```text
High score
```

The semicolon after `if (score > 5)` is an empty statement. Java reads it as the complete body of the `if`. The block that follows is an ordinary block, executed whatever the value of `score`. The program compiles and prints `High score` even though 3 is not greater than 5, which makes this a hard bug to see.

## Boolean variables as conditions

If you store a Boolean expression in a variable, you can use the variable directly as the condition:

```java
int n = 7;
boolean isEven = n % 2 == 0;
if (isEven) {
    System.out.println("even");
} else {
    System.out.println("odd");
}
```

**Output:**

```text
odd
```

`if (isEven)` is the usual style. Writing `if (isEven == true)` works but says the same thing more slowly.

## Tracing selection

To trace an `if` or `if-else`, do three things in order: write down the current value of each variable the condition uses; evaluate the condition to true or false; follow only the path it selects. Then write down any variables that changed. The trace of `IfVsIfElse` above, for the first version, is:

| Line | `n` before | Condition | Path taken | `n` after |
|---|---|---|---|---|
| `if (n > 10)` | 15 | `15 > 10` true | run body: `n = n - 10` | 5 |
| `if (n <= 10)` | 5 | `5 <= 10` true | run body: `n = n * 2` | 10 |

## Worked example 1: a method with if and if-else

**Question.** A cinema charges 6 dollars for a child (under 12) and 10 dollars for anyone else. On weekends it adds 2 dollars to every ticket. Write a method `price` that returns the cost, then find the cost for four customers.

**Plan.** There are two independent decisions: age band (an if-else, because there are exactly two prices) and weekend (a one-way if, because the weekend surcharge is added or not). Each decision is made once.

```java
public class Cinema {
    public static int price(int age, boolean weekend) {
        int cost;
        if (age < 12) {
            cost = 6;
        } else {
            cost = 10;
        }
        if (weekend) {
            cost = cost + 2;
        }
        return cost;
    }

    public static void main(String[] args) {
        System.out.println(price(8, false));
        System.out.println(price(8, true));
        System.out.println(price(30, false));
        System.out.println(price(30, true));
    }
}
```

**Output:**

```text
6
8
10
12
```

**Trace.**

| `age` | `weekend` | `age < 12` | `cost` after if-else | `weekend` true? | returned |
|---|---|---|---|---|---|
| 8 | false | true | 6 | no | 6 |
| 8 | true | true | 6 | yes: 6 + 2 | 8 |
| 30 | false | false | 10 | no | 10 |
| 30 | true | false | 10 | yes: 10 + 2 | 12 |

**Check.** The cheapest customer pays 6 and the most expensive pays 12, which fit the rules. `cost` is assigned in both branches of the if-else, so it always has a value when the method returns it.

## Worked example 2: predicting the output

**Question.** What is printed when `x` is 4, and then when `x` is 9?

```java
public class Predict {
    public static void main(String[] args) {
        int x = 4;
        int y = 0;
        if (x > 5) {
            y = 1;
        }
        if (x % 2 == 0) {
            y = y + 10;
        } else {
            y = y + 20;
        }
        System.out.println(y);
    }
}
```

**Output:**

```text
10
```

**Solution for x = 4.** First `if`: 4 > 5 is false, so the body is skipped and `y` stays 0. Second statement (an if-else): 4 % 2 is 0, so `4 % 2 == 0` is true, the if body runs and `y` becomes 0 + 10 = 10. The else body is skipped. Output: **10**.

**Solution for x = 9.** First `if`: 9 > 5 is true, so `y` becomes 1. Second statement: 9 % 2 is 1, so the condition is false and the else body runs: `y` becomes 1 + 20 = 21. Output: **21**.

| `x` | first `if` true? | `y` after first | `x % 2 == 0`? | `y` after second |
|---|---|---|---|---|
| 4 | no | 0 | yes | 10 |
| 9 | yes | 1 | no | 21 |

Notice the two selections are in sequence, so each is evaluated on its own. The second one does not care what happened in the first, except through the value of `y`.

## How this appears in exam questions

Selection is tested in two main ways. In **multiple-choice** questions you are given a code segment with one or more `if` statements and asked for the output or the final value of a variable. The reliable method is the one in "Tracing selection": write the starting values, evaluate each condition in order, strike through the bodies that do not run, and remember that a later condition sees any value an earlier body changed. In the **free-response** question on methods and control structures you write a method whose result depends on conditions. Before you finish, check three things: that every path through the method assigns or returns a value; that each boundary in the problem (for example "under 12") uses the correct operator; and that you have tested a value on each side of every boundary, such as 11 and 12, in your head.

## Common misconceptions

- **"Both the if body and the else body can run."** In an if-else, exactly one runs. Two separate `if` statements can both run.
- **"An else with no condition runs only after the if ran."** It is the reverse: the else body runs when the if condition was false.
- **"Indentation puts a statement inside the if."** Only braces (or a single statement directly after the condition) do. The compiler ignores indentation.
- **"A semicolon after the condition is harmless."** It ends the if statement. The body that follows then always runs.
- **"`if (x = 5)` tests whether x is 5."** It is an assignment, not a comparison, and does not compile for an int.
- **"After an if-else, execution can only continue in the branch that ran."** Both branches rejoin and the next statement runs either way.
- **"A one-way if must have an else somewhere."** It does not: nothing happens when the condition is false.

## Where this leads

In Topic 2.4 you will put `if` statements inside other `if` statements and chain `else if` for several choices. In Topic 2.5 you will build conditions with `&&`, `||` and `!`. Practise now with the [practice questions](/advanced-course-resources/computer-science-a/2-3-if-statements-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/2-3-if-statements-revision-notes/) and check the [checklist](/advanced-course-resources/computer-science-a/2-3-if-statements-checklist/). Then continue to the [Topic 2.4 study guide](/advanced-course-resources/computer-science-a/2-4-nested-if-statements-study-guide/). If conditions still feel unfamiliar, revisit the [Topic 2.2 study guide](/advanced-course-resources/computer-science-a/2-2-boolean-expressions-study-guide/).
