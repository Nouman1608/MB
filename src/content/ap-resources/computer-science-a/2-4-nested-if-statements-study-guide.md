---
resourceId: "mb-ap-csa-2.4-study-guide"
title: "Nested if Statements: Study Guide (Computer Science A 2.4)"
description: "Learn nested if statements and multiway if-else-if chains, with a first-principles explanation, traced Java examples, a diagram, two worked examples and the mistakes to avoid."
course: "computer-science-a"
unit: 2
topics: ["2.4"]
resourceType: "study-guide"
prerequisites:
  - "One-way and two-way if statements (Topic 2.3)"
  - "Boolean expressions with relational operators (Topic 2.2)"
prerequisiteResources: ["mb-ap-csa-2.3-study-guide"]
learningObjectives:
  - "Write nested if statements and explain when the inner condition is evaluated"
  - "Write a multiway if-else-if chain with a trailing else and explain why at most one body runs"
  - "Predict output when conditions are ordered in different ways, including the dangling else"
  - "Choose between nesting, an else-if chain and separate ifs for a given problem"
skills: ["2", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.4-revision-notes", "mb-ap-csa-2.4-practice", "mb-ap-csa-2.4-checklist"]
next: "mb-ap-csa-2.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "A nested if is an if, if-else or if-else-if inside another one. The inner condition is evaluated only if the outer condition is true (or, for an else body, only if it is false)."
  - "In an if-else-if chain, no more than one body runs: the first true condition wins and all later conditions are skipped."
  - "If no condition is true and the chain ends with an else, the else body runs. Without a trailing else, nothing runs."
  - "The order of the conditions in a chain changes the result: test the most specific or most extreme condition first."
  - "An else belongs to the nearest unmatched if, whatever the indentation suggests. Braces remove the doubt."
faqs:
  - question: "How is an if-else-if chain different from several if statements?"
    answer: "In a chain, the conditions are tested in order and the first true one runs its body, after which the rest of the chain is skipped. With separate if statements, every condition is tested and several bodies can run."
  - question: "Does an if-else-if chain need a final else?"
    answer: "No. A final else is optional. It runs when none of the conditions was true. Without it, a chain in which no condition is true does nothing."
  - question: "What is the dangling else problem?"
    answer: "When an else follows two nested ifs without braces, it pairs with the nearest if that has no else, not with the one its indentation lines up with. Braces make the pairing explicit."
  - question: "When should I nest and when should I use else-if?"
    answer: "Use an else-if chain when you choose one of several mutually exclusive options based on the same quantity (such as a score band). Nest when a second question only makes sense after the first has been answered (such as checking student status only for adults)."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## Decisions inside decisions

Real rules are rarely a single yes or no. A cinema asks whether you are an adult, and only then asks whether you are a student. A grade depends on which of several score bands you fall into. Both situations are built from the `if` statements of Topic 2.3, but arranged in two new ways: **nested** `if` statements, and a **multiway selection** (an if-else-if chain).

## Nested if statements

A **nested if statement** is an `if`, `if-else` or `if-else-if` statement placed inside the body of another one. The key rule is:

> The Boolean expression of the inner `if` is evaluated **only if** the Boolean expression of the outer `if` evaluates to true (or, when the inner statement sits in an `else` body, only if the outer expression is false).

If the outer condition sends execution somewhere else, the inner condition is never examined.

```java
public class NestedTicket {
    public static String ticket(int age, boolean student) {
        String result;
        if (age >= 18) {
            if (student) {
                result = "adult student";
            } else {
                result = "adult";
            }
        } else {
            result = "minor";
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println(ticket(20, true));
        System.out.println(ticket(20, false));
        System.out.println(ticket(15, true));
    }
}
```

**Output:**

```text
adult student
adult
minor
```

For the third call, `age >= 18` is false, so execution goes to the outer `else`. The variable `student` is never looked at, even though it is true. Read nested code from the outside in: settle the outer decision first.

## Multiway selection: if-else-if

When you must pick **one** of several options, a chain of `else if` clauses does it neatly. The conditions are tested from top to bottom. As soon as one is true, its body runs and **the rest of the chain is skipped**. If none is true and the chain ends with a plain `else`, the `else` body runs.

```java
int score = 85;
String grade;
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else {
    grade = "D";
}
System.out.println(grade);
```

**Output:**

```text
B
```

<figure>
<svg viewBox="0 0 600 470" role="img" aria-labelledby="f24-title f24-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="f24-title">Flowchart of a multiway if-else-if chain for grade bands</title>
<desc id="f24-desc">A flowchart with three diamonds stacked top to bottom. The first asks score at least 90; if true it prints A. If false, the second diamond asks score at least 80; if true it prints B. If false, the third asks score at least 70; if true it prints C. If false, a final else box prints D. Only the first true test runs its body. All four bodies lead to a single box at the bottom labelled next statement.</desc>
<defs><marker id="ah-f24" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="600" height="470" fill="#ffffff"/>
<polygon points="180,25 265,60 180,95 95,60" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="180" y="64.55" font-size="13" text-anchor="middle" fill="#1d2b44">score &gt;= 90</text>
<line x1="265" y1="60" x2="340" y2="60" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f24)"/>
<text x="302" y="52" font-size="12" text-anchor="middle" fill="#1d2b44">true</text>
<rect x="340" y="43" width="110" height="34" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="395" y="64.55" font-size="13" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">print "A"</text>
<polyline points="450,60 540,60 540,372" fill="none" stroke="#1d2b44" stroke-width="2"/>
<polygon points="180,135 265,170 180,205 95,170" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="180" y="174.55" font-size="13" text-anchor="middle" fill="#1d2b44">score &gt;= 80</text>
<line x1="265" y1="170" x2="340" y2="170" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f24)"/>
<text x="302" y="162" font-size="12" text-anchor="middle" fill="#1d2b44">true</text>
<rect x="340" y="153" width="110" height="34" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="395" y="174.55" font-size="13" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">print "B"</text>
<polyline points="450,170 540,170 540,372" fill="none" stroke="#1d2b44" stroke-width="2"/>
<polygon points="180,245 265,280 180,315 95,280" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="180" y="284.55" font-size="13" text-anchor="middle" fill="#1d2b44">score &gt;= 70</text>
<line x1="265" y1="280" x2="340" y2="280" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f24)"/>
<text x="302" y="272" font-size="12" text-anchor="middle" fill="#1d2b44">true</text>
<rect x="340" y="263" width="110" height="34" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="395" y="284.55" font-size="13" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">print "C"</text>
<polyline points="450,280 540,280 540,372" fill="none" stroke="#1d2b44" stroke-width="2"/>
<line x1="180" y1="95" x2="180" y2="135" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f24)"/>
<text x="190" y="116" font-size="12" text-anchor="start" fill="#1d2b44">false</text>
<line x1="180" y1="205" x2="180" y2="245" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f24)"/>
<text x="190" y="226" font-size="12" text-anchor="start" fill="#1d2b44">false</text>
<line x1="180" y1="315" x2="180" y2="355" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f24)"/>
<text x="190" y="340" font-size="12" text-anchor="start" fill="#1d2b44">false</text>
<rect x="100" y="355" width="160" height="34" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="180" y="376.55" font-size="13" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">else: print "D"</text>
<line x1="180" y1="389" x2="180" y2="420" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f24)"/>
<rect x="100" y="420" width="160" height="30" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="180" y="439.55" font-size="13" text-anchor="middle" fill="#1d2b44">next statement</text>
<polyline points="260,372 540,372" fill="none" stroke="#1d2b44" stroke-width="2"/>
<polyline points="540,372 540,435 260,435" fill="none" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f24)"/>
</svg>
<figcaption>Figure 1. An if-else-if chain for grade bands. Each false exit leads to the next question; each true exit runs one body and then jumps to the statement after the chain. Only one body can run.</figcaption>
</figure>

The flowchart shows why at most one body runs: every true exit jumps straight to the end. For `score = 85`, `85 >= 90` is false, then `85 >= 80` is true, so the answer is B and the test `score >= 70` is never evaluated. Note that the second condition does not need to say "less than 90": the only way to reach it is for the first condition to have been false.

The trailing `else` is optional. If the chain has no `else` and no condition is true, nothing runs.

## Order of the conditions matters

Because the first true condition wins, the order decides the outcome. Suppose the conditions are written from the lowest band to the highest.

```java
int score = 95;
String grade;
if (score >= 70) {
    grade = "C";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 90) {
    grade = "A";
} else {
    grade = "D";
}
System.out.println(grade);
```

**Output:**

```text
C
```

A score of 95 passes the very first test (`95 >= 70`), so the chain stops at C. The tests for B and A can never be reached. Write the **most demanding** condition first when the conditions overlap like this.

## Separate ifs versus an else-if chain

If you replace `else if` by a plain `if`, the conditions are tested independently and later ones can overwrite earlier results:

```java
int score = 85;
String grade = "D";
if (score >= 90) { grade = "A"; }
if (score >= 80) { grade = "B"; }
if (score >= 70) { grade = "C"; }
System.out.println(grade);
```

**Output:**

```text
C
```

All of `85 >= 80` and `85 >= 70` are true, so `grade` is set to B and then overwritten with C. This is the wrong result for a grade. The chain version gives B. Choosing `else if` here is what makes the bands mutually exclusive.

## The dangling else

When ifs are nested without braces, an `else` always pairs with the **nearest preceding `if` that does not already have an `else`**. Indentation is ignored.

```java
int a = 5;
int b = 2;
if (a > 3)
    if (b > 3)
        System.out.println("both");
else
    System.out.println("other");
```

**Output:**

```text
other
```

The `else` is lined up with the outer `if`, which suggests "if a is not greater than 3, print other". In fact it pairs with `if (b > 3)`. Since `a > 3` is true and `b > 3` is false, the inner else runs and `other` is printed. If `a` were 1, the outer condition would be false and **nothing** would be printed, because the whole inner statement, including its else, is the body of the outer if. Braces remove the problem:

```java
int a = 5;
int b = 2;
if (a > 3) {
    if (b > 3) {
        System.out.println("both");
    } else {
        System.out.println("other");
    }
}
```

**Output:**

```text
other
```

## Which structure should I use?

| Situation | Structure | Why |
|---|---|---|
| Choose exactly one option from several by the same quantity | if-else-if chain (with a final else) | One decision tested in order; at most one body runs |
| The second question only makes sense after the first is answered | Nested if | Inner condition evaluated only when the outer allows it |
| Independent checks that may all apply | Separate ifs | Each condition is tested on its own |

Nested ifs and else-if chains can often be rewritten into one another. What matters is that you can trace each form and say which statements run.

## Worked example 1: a multiway method

**Question.** A parking meter charges by length of stay: up to 30 minutes is free, 31 to 120 minutes costs 4 dollars, 121 to 240 minutes costs 9 dollars, and anything longer costs 15 dollars. Write a method `fee(int minutes)` and find the fee for 30, 31, 120, 121 and 300 minutes.

**Plan.** There is one quantity, `minutes`, divided into bands, so an if-else-if chain is the natural choice. Test from the lowest band upwards, using `<=` so that the boundaries are included in the lower band, and let the final `else` handle everything above 240.

```java
public class Meter {
    public static int fee(int minutes) {
        if (minutes <= 30) {
            return 0;
        } else if (minutes <= 120) {
            return 4;
        } else if (minutes <= 240) {
            return 9;
        } else {
            return 15;
        }
    }

    public static void main(String[] args) {
        System.out.println(fee(30));
        System.out.println(fee(31));
        System.out.println(fee(120));
        System.out.println(fee(121));
        System.out.println(fee(300));
    }
}
```

**Output:**

```text
0
4
4
9
15
```

**Trace.**

| `minutes` | `<= 30`? | `<= 120`? | `<= 240`? | fee |
|---|---|---|---|---|
| 30 | true | not tested | not tested | 0 |
| 31 | false | true | not tested | 4 |
| 120 | false | true | not tested | 4 |
| 121 | false | false | true | 9 |
| 300 | false | false | false | else: 15 |

**Check.** The boundary values 30, 31, 120 and 121 land in the correct bands. The second condition can say `<= 120` without saying "greater than 30" because it is reached only when `<= 30` was false.

## Worked example 2: tracing a nested structure

**Question.** What is printed for `p = 6, q = 4` and for `p = 2, q = 9`?

```java
public class Trace {
    public static void main(String[] args) {
        int p = 6;
        int q = 4;
        int r = 0;
        if (p > 5) {
            if (q > 5) {
                r = 1;
            } else if (q > 3) {
                r = 2;
            } else {
                r = 3;
            }
        } else {
            r = 4;
        }
        System.out.println(r);
    }
}
```

**Output:**

```text
2
```

**Solution for p = 6, q = 4.** Outer condition `6 > 5` is true, so we enter the nested chain. `q > 5`: 4 > 5 is false. `q > 3`: 4 > 3 is true, so `r = 2`. The final `else` of the chain and the outer `else` are skipped. Output **2**.

**Solution for p = 2, q = 9.** Outer condition `2 > 5` is false, so the outer `else` runs: `r = 4`. The inner conditions, including `q > 5`, which would have been true, are never evaluated. Output **4**.

| `p` | `p > 5` | `q > 5` | `q > 3` | `r` |
|---|---|---|---|---|
| 6 | true | false | true | 2 |
| 2 | false | not evaluated | not evaluated | 4 |

The possible results are 1, 2, 3 and 4, and exactly one of them is assigned on every path.

## How this appears in exam questions

Chains and nested ifs are favourites for tracing questions because a single wrong assumption about which branch runs changes the answer. When you read a chain, find the **first** true condition and ignore everything after it; when you read a nest, settle the outer condition before you look at the inner one. In free-response code, prefer an if-else-if chain when the categories are exclusive bands of one quantity, and test the boundary values of every band, as the parking-meter example showed. A `return` inside each branch is also fine: once a method has returned, no later branch can run, so an `else` after it is allowed but not required. If the chain order feels risky, give each band its own two-sided test so that the order stops mattering.

## Common misconceptions

- **"All the conditions in an else-if chain are always evaluated."** They are tested in order only until one is true. The rest are skipped.
- **"More than one body can run in an if-else-if chain."** At most one runs.
- **"An else needs its own condition."** It does not. An `else` with a condition in brackets after it is a syntax error. Use `else if` to add a condition.
- **"The order of the conditions does not matter."** When conditions overlap it matters a great deal, as the grade example shows.
- **"The inner condition is always evaluated."** It is evaluated only when the outer condition lets execution reach it.
- **"Indentation tells you which if an else belongs to."** The compiler ignores indentation. An else pairs with the nearest unmatched if.
- **"A chain with no else always does something."** If no condition is true and there is no else, no body runs, and a variable you meant to set may be left unassigned.

## Where this leads

Conditions are often easier to express by combining several tests, using `&&`, `||` and `!` in Topic 2.5, which can replace some nested ifs with a single condition. In Topic 2.6 you will see how to prove two Boolean expressions equivalent. Practise now with the [practice questions](/advanced-course-resources/computer-science-a/2-4-nested-if-statements-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/2-4-nested-if-statements-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/2-4-nested-if-statements-checklist/). Then read the [Topic 2.5 study guide](/advanced-course-resources/computer-science-a/2-5-compound-boolean-expressions-study-guide/). For the single-decision building blocks, return to the [Topic 2.3 study guide](/advanced-course-resources/computer-science-a/2-3-if-statements-study-guide/).
