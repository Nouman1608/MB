---
resourceId: "mb-ap-csa-2.5-study-guide"
title: "Compound Boolean Expressions: Study Guide (Computer Science A 2.5)"
description: "Learn compound Boolean expressions with !, && and ||, with a first-principles explanation, traced Java examples, a diagram, two worked examples and the mistakes to avoid."
course: "computer-science-a"
unit: 2
topics: ["2.5"]
resourceType: "study-guide"
prerequisites:
  - "Relational operators and Boolean expressions (Topic 2.2)"
  - "if and if-else-if statements (Topics 2.3 and 2.4)"
prerequisiteResources: ["mb-ap-csa-2.4-study-guide"]
learningObjectives:
  - "Evaluate expressions that use the logical operators !, && and || with the correct precedence"
  - "Write a compound Boolean expression for a range, an exclusion or a combination of conditions"
  - "Explain short-circuit evaluation and use it to guard a risky second condition"
  - "Find and fix typical errors: wrong operator, missing repeated variable and always-true conditions"
skills: ["2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.5-revision-notes", "mb-ap-csa-2.5-practice", "mb-ap-csa-2.5-checklist"]
next: "mb-ap-csa-2.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "!a is true when a is false; a && b is true only when both are true; a || b is true when at least one is true."
  - "Precedence from highest to lowest is ! then && then ||. Brackets override it and make intent clear."
  - "For a range write two comparisons joined with &&; for 'outside a range' join two comparisons with ||."
  - "Short-circuit evaluation: when the left side of && is false, or the left side of || is true, the right side is never evaluated."
  - "Each comparison needs its own variable: x == 1 || x == 2, never x == 1 || 2."
faqs:
  - question: "What is the difference between && and ||?"
    answer: "&& (and) is true only when both sides are true. || (or) is true when at least one side is true, including when both are. In ordinary English 'or' sometimes means 'one or the other but not both', but Java's || includes the case where both are true."
  - question: "What is short-circuit evaluation?"
    answer: "Java stops evaluating a logical expression as soon as the result is certain. If the left side of && is false, the result must be false, so the right side is not evaluated. If the left side of || is true, the result must be true, so the right side is not evaluated."
  - question: "In what order are !, && and || evaluated?"
    answer: "! first, then &&, then ||. This is why a || b && c means a || (b && c). Brackets change the order."
  - question: "Why does x > 3 || x < 8 always give true?"
    answer: "Every number is either greater than 3 or less than 8 (or both), so at least one side is always true. To test for a range you need && instead: x > 3 && x < 8."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## Combining true and false

A single relational expression asks one question. Most real conditions ask several: *Is the customer a member AND is the total at least 50? Is the day Saturday OR Sunday? Is the number NOT a multiple of 3?* A **compound Boolean expression** combines Boolean expressions with the three **logical operators**.

| Operator | Name | `a` | `b` | Result |
|---|---|---|---|---|
| `!a` | not | true | | false |
| `!a` | not | false | | true |
| `a && b` | and | true | true | true |
| `a && b` | and | true | false | false |
| `a && b` | and | false | true | false |
| `a && b` | and | false | false | false |
| `a \|\| b` | or | true | true | true |
| `a \|\| b` | or | true | false | true |
| `a \|\| b` | or | false | true | true |
| `a \|\| b` | or | false | false | false |

In words:

- `!a` ("not a") is true if `a` is false, and false otherwise.
- `a && b` ("a and b") is true if **both** `a` and `b` are true, and false otherwise.
- `a || b` ("a or b") is true if `a` is true, `b` is true, or **both**, and false otherwise.

An expression that uses logical operators always evaluates to a boolean value.

## Precedence

When an expression has more than one logical operator, Java evaluates `!` first, then `&&`, then `||`. Relational operators (`<`, `==`, and so on) and arithmetic are evaluated before any of them. So `x < 3 || x > 6 && y % 4 == 0` is read as `(x < 3) || ((x > 6) && (y % 4 == 0))`. Use brackets whenever the grouping is not obvious; they cost nothing and prevent mistakes. Brackets also let you apply `!` to a whole expression: `!(x > 5)` means "x is not greater than 5".

## Writing ranges

To say that `x` lies in a **range**, both ends must hold, so use `&&`. To say that `x` is **outside** a range, either end is enough, so use `||`.

<figure>
<svg viewBox="0 0 560 270" role="img" aria-labelledby="f25-title f25-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="f25-title">Number lines for two compound Boolean expressions</title>
<desc id="f25-desc">Two number lines from 0 to 10. The upper line shows x greater than 2 and x less than 8: a thick segment between open circles at 2 and 8, so only values between them make the expression true. The lower line shows x less than 2 or x greater than 8: thick segments from 0 to an open circle at 2 and from an open circle at 8 to 10, so values outside the middle make it true.</desc>
<defs><marker id="ah-f25" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="270" fill="#ffffff"/>
<text x="30" y="30" font-size="14" text-anchor="start" fill="#1d2b44" font-weight="bold" font-family="ui-monospace, Menlo, Consolas, monospace">x &gt; 2 &amp;&amp; x &lt; 8</text>
<line x1="40" y1="70" x2="520" y2="70" stroke="#1d2b44" stroke-width="2"/>
<line x1="40" y1="65" x2="40" y2="75" stroke="#1d2b44" stroke-width="1.5"/>
<text x="40" y="92" font-size="12" text-anchor="middle" fill="#1d2b44">0</text>
<line x1="88" y1="65" x2="88" y2="75" stroke="#1d2b44" stroke-width="1.5"/>
<text x="88" y="92" font-size="12" text-anchor="middle" fill="#1d2b44">1</text>
<line x1="136" y1="65" x2="136" y2="75" stroke="#1d2b44" stroke-width="1.5"/>
<text x="136" y="92" font-size="12" text-anchor="middle" fill="#1d2b44">2</text>
<line x1="184" y1="65" x2="184" y2="75" stroke="#1d2b44" stroke-width="1.5"/>
<text x="184" y="92" font-size="12" text-anchor="middle" fill="#1d2b44">3</text>
<line x1="232" y1="65" x2="232" y2="75" stroke="#1d2b44" stroke-width="1.5"/>
<text x="232" y="92" font-size="12" text-anchor="middle" fill="#1d2b44">4</text>
<line x1="280" y1="65" x2="280" y2="75" stroke="#1d2b44" stroke-width="1.5"/>
<text x="280" y="92" font-size="12" text-anchor="middle" fill="#1d2b44">5</text>
<line x1="328" y1="65" x2="328" y2="75" stroke="#1d2b44" stroke-width="1.5"/>
<text x="328" y="92" font-size="12" text-anchor="middle" fill="#1d2b44">6</text>
<line x1="376" y1="65" x2="376" y2="75" stroke="#1d2b44" stroke-width="1.5"/>
<text x="376" y="92" font-size="12" text-anchor="middle" fill="#1d2b44">7</text>
<line x1="424" y1="65" x2="424" y2="75" stroke="#1d2b44" stroke-width="1.5"/>
<text x="424" y="92" font-size="12" text-anchor="middle" fill="#1d2b44">8</text>
<line x1="472" y1="65" x2="472" y2="75" stroke="#1d2b44" stroke-width="1.5"/>
<text x="472" y="92" font-size="12" text-anchor="middle" fill="#1d2b44">9</text>
<line x1="520" y1="65" x2="520" y2="75" stroke="#1d2b44" stroke-width="1.5"/>
<text x="520" y="92" font-size="12" text-anchor="middle" fill="#1d2b44">10</text>
<line x1="136" y1="70" x2="424" y2="70" stroke="#1d2b44" stroke-width="7"/>
<circle cx="136" cy="70" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="424" cy="70" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="280" y="56" font-size="12" text-anchor="middle" fill="#1d2b44">true only between 2 and 8</text>
<text x="30" y="160" font-size="14" text-anchor="start" fill="#1d2b44" font-weight="bold" font-family="ui-monospace, Menlo, Consolas, monospace">x &lt; 2 || x &gt; 8</text>
<line x1="40" y1="200" x2="520" y2="200" stroke="#1d2b44" stroke-width="2"/>
<line x1="40" y1="195" x2="40" y2="205" stroke="#1d2b44" stroke-width="1.5"/>
<text x="40" y="222" font-size="12" text-anchor="middle" fill="#1d2b44">0</text>
<line x1="88" y1="195" x2="88" y2="205" stroke="#1d2b44" stroke-width="1.5"/>
<text x="88" y="222" font-size="12" text-anchor="middle" fill="#1d2b44">1</text>
<line x1="136" y1="195" x2="136" y2="205" stroke="#1d2b44" stroke-width="1.5"/>
<text x="136" y="222" font-size="12" text-anchor="middle" fill="#1d2b44">2</text>
<line x1="184" y1="195" x2="184" y2="205" stroke="#1d2b44" stroke-width="1.5"/>
<text x="184" y="222" font-size="12" text-anchor="middle" fill="#1d2b44">3</text>
<line x1="232" y1="195" x2="232" y2="205" stroke="#1d2b44" stroke-width="1.5"/>
<text x="232" y="222" font-size="12" text-anchor="middle" fill="#1d2b44">4</text>
<line x1="280" y1="195" x2="280" y2="205" stroke="#1d2b44" stroke-width="1.5"/>
<text x="280" y="222" font-size="12" text-anchor="middle" fill="#1d2b44">5</text>
<line x1="328" y1="195" x2="328" y2="205" stroke="#1d2b44" stroke-width="1.5"/>
<text x="328" y="222" font-size="12" text-anchor="middle" fill="#1d2b44">6</text>
<line x1="376" y1="195" x2="376" y2="205" stroke="#1d2b44" stroke-width="1.5"/>
<text x="376" y="222" font-size="12" text-anchor="middle" fill="#1d2b44">7</text>
<line x1="424" y1="195" x2="424" y2="205" stroke="#1d2b44" stroke-width="1.5"/>
<text x="424" y="222" font-size="12" text-anchor="middle" fill="#1d2b44">8</text>
<line x1="472" y1="195" x2="472" y2="205" stroke="#1d2b44" stroke-width="1.5"/>
<text x="472" y="222" font-size="12" text-anchor="middle" fill="#1d2b44">9</text>
<line x1="520" y1="195" x2="520" y2="205" stroke="#1d2b44" stroke-width="1.5"/>
<text x="520" y="222" font-size="12" text-anchor="middle" fill="#1d2b44">10</text>
<line x1="40" y1="200" x2="136" y2="200" stroke="#1d2b44" stroke-width="7"/>
<line x1="424" y1="200" x2="520" y2="200" stroke="#1d2b44" stroke-width="7"/>
<circle cx="136" cy="200" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="424" cy="200" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="280" y="186" font-size="12" text-anchor="middle" fill="#1d2b44">true only outside 2 to 8</text>
</svg>
<figcaption>Figure 1. The values that make two compound expressions true. With && the true region is the overlap of the two conditions; with || the true region is everything that satisfies either condition.</figcaption>
</figure>

- `x > 2 && x < 8`: true only between 2 and 8 (not including 2 or 8).
- `x >= 2 && x <= 8`: the same range with its end points included.
- `x < 2 || x > 8`: true for everything outside that range.

**Each comparison needs its own variable and operator.** Natural language lets you say "x is 1 or 2". Java does not allow `x == 1 || 2`, because `2` is an int and `||` needs booleans. Write `x == 1 || x == 2`. Likewise "x is greater than 5 or less than 3" is `x > 5 || x < 3`, never `x > 5 || < 3`.

**The always-true trap.** The expression `x > 3 || x < 8` is true for every number, because each number is greater than 3 or less than 8 (or both). A range needs `&&`.

## Short-circuit evaluation

Java evaluates a compound expression from left to right and **stops as soon as the result is certain**. This is called **short-circuit evaluation**.

- In `a && b`, if `a` is false the result is false whatever `b` is, so `b` is **not evaluated**.
- In `a || b`, if `a` is true the result is true whatever `b` is, so `b` is **not evaluated**.

You can see it by using a method that announces when it is called.

```java
public class Shortcut {
    public static boolean check(String label, boolean value) {
        System.out.println("checking " + label);
        return value;
    }

    public static void main(String[] args) {
        boolean r1 = check("A", false) && check("B", true);
        System.out.println("r1 = " + r1);
        boolean r2 = check("C", true) || check("D", false);
        System.out.println("r2 = " + r2);
        boolean r3 = check("E", true) && check("F", false);
        System.out.println("r3 = " + r3);
    }
}
```

**Output:**

```text
checking A
r1 = false
checking C
r2 = true
checking E
checking F
r3 = false
```

`B` and `D` are never checked: after `A` is false the `&&` cannot become true, and after `C` is true the `||` cannot become false. `F` is checked because the first operand of `&&` was true, so the second one still decides the answer.

Short-circuiting is more than a curiosity. It lets you put a **guard** on the left that makes the right side safe:

```java
int count = 0;
int total = 50;
boolean ok = count != 0 && total / count > 5;
System.out.println(ok);
```

**Output:**

```text
false
```

Because `count != 0` is false, the division `total / count` is never evaluated, so there is no divide-by-zero error. Written the other way round, `total / count > 5 && count != 0`, the division would be evaluated first and the program would throw an `ArithmeticException`. When the right side can fail, test the safe condition on the left.

## A compound condition in an if

A compound expression is used wherever a Boolean expression is expected: in an `if`, an `else if`, or on the right of an assignment to a `boolean`. It often replaces nested ifs:

```java
int hour = 14;
boolean isWeekend = false;
if (hour >= 9 && hour < 17 && !isWeekend) {
    System.out.println("open");
} else {
    System.out.println("closed");
}
```

**Output:**

```text
open
```

Here three conditions must hold: the hour is at least 9, it is before 17, and it is not the weekend. The equivalent nested version would need three levels of `if`.

## Worked example 1: evaluating compound expressions

**Question.** Let `x = 7` and `y = 12`. Evaluate each expression.

1. `x > 5 && y < 10`
2. `x > 5 || y < 10`
3. `!(x > 5) || y == 12`
4. `x < 3 || x > 6 && y % 4 == 0`
5. `(x < 3 || x > 6) && y % 5 == 0`
6. `!(x == 7 && y == 12)`

**Solution.** First evaluate each relational part, then apply `!`, then `&&`, then `||`.

| Expression | Parts | Result |
|---|---|---|
| 1 | `x > 5` true, `y < 10` false | true && false = **false** |
| 2 | `x > 5` true, `y < 10` false | true \|\| false = **true** (short-circuits after the left side) |
| 3 | `x > 5` true so `!` gives false; `y == 12` true | false \|\| true = **true** |
| 4 | `x < 3` false; `x > 6` true; `y % 4` is 0 so `== 0` true | false \|\| (true && true) = **true** |
| 5 | `x < 3` false, `x > 6` true so brackets give true; `y % 5` is 2 so `== 0` false | true && false = **false** |
| 6 | `x == 7` true, `y == 12` true | `!(true && true)` = !true = **false** |

**Check.** Items 4 and 5 use the same tests but different grouping, and give different results (true and false). That is exactly why precedence matters: in item 4 `&&` binds first, so the expression is `x < 3` or (both of the others); in item 5 the brackets force the `||` first.

## Worked example 2: from rules to code

**Question.** A year is a leap year if it is divisible by 4, except that years divisible by 100 are not leap years, unless they are also divisible by 400. Write a method `isLeap(int year)` and test it on 1900, 2000, 2024 and 2026.

**Plan.** Translate each clause. "Divisible by 4 except if divisible by 100" is `year % 4 == 0 && year % 100 != 0`. "Unless also divisible by 400" adds a second route to true: `|| year % 400 == 0`.

```java
public class LeapYears {
    public static boolean isLeap(int year) {
        return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
    }

    public static void main(String[] args) {
        System.out.println(isLeap(1900));
        System.out.println(isLeap(2000));
        System.out.println(isLeap(2024));
        System.out.println(isLeap(2026));
    }
}
```

**Output:**

```text
false
true
true
false
```

**Trace.**

| `year` | `year % 4 == 0` | `year % 100 != 0` | left group (`&&`) | `year % 400 == 0` | result |
|---|---|---|---|---|---|
| 1900 | true | false | false | false (1900 % 400 = 300) | false |
| 2000 | true | false | false | true | true |
| 2024 | true | true | true | not evaluated | true |
| 2026 | false (2026 % 4 = 2) | not evaluated | false | false (2026 % 400 = 26) | false |

**Check.** 1900 is a century year not divisible by 400, so it is not a leap year. 2000 is divisible by 400, so it is. 2024 is an ordinary leap year, and 2026 is not divisible by 4. The `&&` group is bracketed so that the `||` is applied last.

## Common misconceptions

- **"`||` means one or the other but not both."** In Java `||` is also true when both sides are true.
- **"`x == 1 || 2` means x is 1 or 2."** It does not compile. Write `x == 1 || x == 2`.
- **"A range uses `||`."** A range needs both ends to hold, so it uses `&&`. `x > 3 || x < 8` is always true.
- **"`&&` and `||` evaluate left to right with equal priority."** `&&` binds tighter than `||`, and `!` binds tighter than both.
- **"Both sides of a logical operator are always evaluated."** Java short-circuits: the right side may never run.
- **"The order of the two operands never matters."** For the result alone it does not, but when the right side could fail (such as a division or a method call) the order decides whether a program crashes.
- **"`!x > 5` means not (x > 5)."** `!` applies to the next operand only, so `!x > 5` tries to apply `!` to an int and does not compile. Write `!(x > 5)`.

## Where this leads

In Topic 2.6 you will prove that two Boolean expressions are equivalent using truth tables and De Morgan's laws, which is how you simplify the conditions you wrote here. In Topics 2.7 and 2.8 the same compound conditions control loops. Practise with the [practice questions](/advanced-course-resources/computer-science-a/2-5-compound-boolean-expressions-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/2-5-compound-boolean-expressions-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/2-5-compound-boolean-expressions-checklist/). Then read the [Topic 2.6 study guide](/advanced-course-resources/computer-science-a/2-6-comparing-boolean-expressions-study-guide/). For nested decisions that compound conditions can sometimes replace, see the [Topic 2.4 study guide](/advanced-course-resources/computer-science-a/2-4-nested-if-statements-study-guide/).
