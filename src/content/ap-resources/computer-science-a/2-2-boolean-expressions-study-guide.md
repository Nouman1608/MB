---
resourceId: "mb-ap-csa-2.2-study-guide"
title: "Boolean Expressions: Study Guide (Computer Science A 2.2)"
description: "Learn Boolean expressions built with the relational operators, with a first-principles explanation, traced Java examples, a diagram, two worked examples and the mistakes to avoid."
course: "computer-science-a"
unit: 2
topics: ["2.2"]
resourceType: "study-guide"
prerequisites:
  - "Arithmetic operators, including integer division and the remainder operator %"
  - "Declaring and assigning int, double and boolean variables"
prerequisiteResources: ["mb-ap-csa-2.1-study-guide"]
learningObjectives:
  - "Write Boolean expressions with ==, !=, <, >, <= and >= and say what value each evaluates to"
  - "Evaluate an expression that mixes arithmetic and relational operators using precedence"
  - "Explain that a relational expression always evaluates to true or false and can be stored in a boolean variable"
  - "Spot the common errors: = for ==, chained comparisons, integer division and comparing doubles with =="
skills: ["2", "3"]
studyMinutes: 35
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.2-revision-notes", "mb-ap-csa-2.2-practice", "mb-ap-csa-2.2-checklist"]
next: "mb-ap-csa-2.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "A relational operator compares two values and produces a boolean: true or false."
  - "== and != test whether values are the same or different; <, >, <= and >= compare the size of numeric values."
  - "== is a comparison; = is an assignment. Writing = where == is meant is a compile-time error for int values."
  - "Arithmetic is evaluated before the relational operator, so 2 + 3 > 4 is (2 + 3) > 4, which is true."
  - "Comparisons cannot be chained: 3 < x < 9 does not compile. Doubles carry round-off error, so avoid == on computed doubles."
faqs:
  - question: "What is the difference between = and ==?"
    answer: "A single = is the assignment operator: it stores a value in a variable. A double == is the comparison operator: it asks whether two values are equal and produces true or false. For int and double values, writing = inside a condition is a compile-time error."
  - question: "Why does 3 < x < 9 not compile?"
    answer: "Java evaluates it left to right. 3 < x gives a boolean, and then the program tries to compare that boolean with 9 using <, which is not allowed. You need two comparisons joined by a logical operator, which is Topic 2.5."
  - question: "Can I use < and > with Strings?"
    answer: "No. The relational operators <, >, <= and >= work with numeric values only. Strings are compared with the compareTo and equals methods, and == on objects compares references (Topic 2.6)."
  - question: "Is it safe to compare two doubles with ==?"
    answer: "Not when they are the result of arithmetic. Doubles have round-off error, so 0.1 + 0.2 is not exactly 0.3. Compare the difference with a small tolerance instead, or use int values when you can."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## A question with only two possible answers

Every decision a program makes comes down to a question that is either true or false: *Is the balance negative? Is the score at least 50? Is this number even?* Java stores the answer to such a question in the type `boolean`, which has exactly two values, `true` and `false`. An expression that evaluates to one of them is a **Boolean expression**.

In Topic 2.1 you saw that selection and repetition are controlled by a true or false decision. This topic is about how to *write* those decisions. The simplest Boolean expressions are built from two values and a **relational operator**.

## The six relational operators

| Operator | Meaning | Example | Value if `a` is 7 and `b` is 4 |
|---|---|---|---|
| `==` | equal to | `a == b` | false |
| `!=` | not equal to | `a != b` | true |
| `<` | less than | `a < b` | false |
| `>` | greater than | `a > b` | true |
| `<=` | less than or equal to | `a <= b` | false |
| `>=` | greater than or equal to | `a >= b` | true |

The first two, `==` and `!=`, test whether values are the same. With **primitive types** such as `int`, `double` and `boolean`, they compare the actual values. With **reference types** (objects) they compare the object references, which you will meet in Topic 2.6. The other four compare the size of **numeric** values only.

An expression involving a relational operator always evaluates to a **boolean value**. It never gives a number or a string. This is why you can store it in a `boolean` variable or place it where Java expects a condition.

```java
public class Relational {
    public static void main(String[] args) {
        int a = 7;
        int b = 4;
        System.out.println(a == b);
        System.out.println(a != b);
        System.out.println(a > b);
        System.out.println(a <= b);
        System.out.println(a % b == 3);
    }
}
```

**Output:**

```text
false
true
true
false
true
```

The last line shows that arithmetic happens first: `a % b` is the remainder of 7 divided by 4, which is 3, and then `3 == 3` is true.

## Precedence: arithmetic first, comparison last

An expression such as `a + b * 2 > c - 1` contains arithmetic operators and a relational operator. Java evaluates the arithmetic first, using the usual precedence (multiplication, division and remainder before addition and subtraction), and then applies the relational operator to the two results. You can add brackets to make the order obvious, but you do not need them here.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="f22-title f22-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="f22-title">Step-by-step evaluation of a relational expression</title>
<desc id="f22-desc">Four stacked boxes joined by downward arrows show the expression a + b * 2 &gt; c - 1 with a equal to 4, b equal to 3 and c equal to 9. Step one substitutes the values: 4 + 3 * 2 &gt; 9 - 1. Step two does the multiplication: 4 + 6 &gt; 9 - 1. Step three does addition and subtraction: 10 &gt; 8. Step four compares: true. Notes on the right say that arithmetic comes first and the relational operator is evaluated last.</desc>
<defs><marker id="ah-f22" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<rect x="30" y="14" width="230" height="38" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="145" y="38.6" font-size="16" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">4 + 3 * 2 &gt; 9 - 1</text>
<text x="285" y="38" font-size="13" text-anchor="start" fill="#1d2b44">substitute a = 4, b = 3, c = 9</text>
<line x1="145" y1="52" x2="145" y2="84" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f22)"/>
<rect x="30" y="84" width="230" height="38" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="145" y="108.6" font-size="16" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">4 + 6 &gt; 9 - 1</text>
<text x="285" y="108" font-size="13" text-anchor="start" fill="#1d2b44">multiply first: 3 * 2 = 6</text>
<line x1="145" y1="122" x2="145" y2="154" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f22)"/>
<rect x="30" y="154" width="230" height="38" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="145" y="178.6" font-size="16" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">10 &gt; 8</text>
<text x="285" y="178" font-size="13" text-anchor="start" fill="#1d2b44">then + and -: 4 + 6 = 10, 9 - 1 = 8</text>
<line x1="145" y1="192" x2="145" y2="224" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f22)"/>
<rect x="30" y="224" width="230" height="38" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="145" y="248.6" font-size="16" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">true</text>
<text x="285" y="248" font-size="13" text-anchor="start" fill="#1d2b44">relational operator last: 10 &gt; 8 is true</text>
</svg>
<figcaption>Figure 1. Evaluating a + b * 2 > c - 1 for a = 4, b = 3, c = 9. The two sides of the relational operator are fully worked out before the comparison is made.</figcaption>
</figure>

Always evaluate both sides to a single value, then compare.

## Integer division inside a comparison

Because int division discards the fractional part, comparisons that involve division need care. Suppose we want to know whether the average of two scores is above 50, and the scores are 50 and 51. The true average is 50.5, so the answer should be true.

```java
int a = 50;
int b = 51;
boolean wrong = (a + b) / 2 > 50;
boolean right = (a + b) / 2.0 > 50;
System.out.println(wrong + " " + right);
```

**Output:**

```text
false true
```

In `wrong`, both operands of `/` are `int`, so 101 / 2 is the int 50, and 50 > 50 is false. In `right`, dividing by `2.0` produces a `double`, 50.5, and 50.5 > 50 is true. The comparison is only as good as the numbers that go into it.

## Round-off error and doubles

A `double` stores most decimal values only approximately. If an expression would give a value that is more precise than the allotted memory can hold, the result is rounded, which is called **round-off error**. This means `==` can disappoint you when it compares computed doubles.

```java
double sum = 0.1 + 0.2;
System.out.println(sum == 0.3);
System.out.println(Math.abs(sum - 0.3) < 0.000001);
```

**Output:**

```text
false
true
```

Although 0.1 + 0.2 looks like 0.3 on paper, the stored result is a tiny amount different, so the first comparison is false. A better test asks whether the two values are *close enough*: the absolute difference, `Math.abs(sum - 0.3)`, is smaller than a small tolerance. Where the problem allows it, use `int` values to avoid the issue altogether.

## Boolean variables

Because a relational expression has a boolean value, you can assign it to a `boolean` variable and use the variable later:

```java
int n = 14;
boolean isEven = n % 2 == 0;
boolean isBig = n > 20;
System.out.println(isEven + " " + isBig);
```

**Output:**

```text
true false
```

The assignment operator `=` has the lowest precedence, so Java evaluates `n % 2 == 0` first and then stores the result. Choosing names such as `isEven` makes later conditions read like English.

## Two errors the compiler catches

**Assignment instead of comparison.** `=` stores a value; `==` compares. For `int` values, `x = 5` is an assignment expression whose value is an `int`, and a condition must be `boolean`, so the compiler rejects it.

```java
int x = 5;
boolean r = (x = 5);
```

This does not compile: Java reports that an `int` cannot be converted to `boolean`.

**Chained comparisons.** Mathematics lets you write 3 < x < 9. Java does not. The expression `3 < x < 9` is evaluated left to right as `(3 < x) < 9`, which tries to compare a boolean with an int and does not compile. To express "x is between 3 and 9" you need two comparisons joined by a logical operator, covered in Topic 2.5.

```java
int x = 5;
boolean r = 3 < x < 9;
```

## Worked example 1: evaluating expressions

**Question.** Let `a = 6`, `b = 4`, `c = 10`. Evaluate each expression and say what its type is.

1. `a + b == c`
2. `c / b > 2`
3. `c % a != b`
4. `(a + b) * 2 <= c + a`
5. `c / a == 1.5`

**Solution.** Work out both sides, then compare.

| Expression | Left side | Right side | Result |
|---|---|---|---|
| `a + b == c` | 6 + 4 = 10 | 10 | `10 == 10` is **true** |
| `c / b > 2` | 10 / 4 = 2 (int division) | 2 | `2 > 2` is **false** |
| `c % a != b` | 10 % 6 = 4 | 4 | `4 != 4` is **false** |
| `(a + b) * 2 <= c + a` | 10 * 2 = 20 | 10 + 6 = 16 | `20 <= 16` is **false** |
| `c / a == 1.5` | 10 / 6 = 1 (int division), compared as 1.0 | 1.5 | `1.0 == 1.5` is **false** |

All five are of type `boolean`. **Check:** in item 2 the exact quotient is 2.5, which *is* greater than 2, but both operands are `int`, so the quotient is truncated to 2. Remembering which divisions are integer divisions is the commonest source of wrong answers. In item 5, Java converts the int 1 to the double 1.0 before comparing.

## Worked example 2: from English to Java

**Question.** Write a Boolean expression for each statement and evaluate it for the given values.

1. A person is old enough to vote: `age` is at least 18 (`age = 17`).
2. A number leaves remainder 2 when divided by 5 (`n = 37`).
3. The total `t` is not zero (`t = 0`).
4. The average of `p` and `q` is greater than 50 (`p = 50`, `q = 51`).
5. The year `y` is a multiple of 4 (`y = 2026`).

**Solution.**

```java
public class FromEnglish {
    public static void main(String[] args) {
        int age = 17, n = 37, t = 0, p = 50, q = 51, y = 2026;
        System.out.println(age >= 18);
        System.out.println(n % 5 == 2);
        System.out.println(t != 0);
        System.out.println((p + q) / 2.0 > 50);
        System.out.println(y % 4 == 0);
    }
}
```

**Output:**

```text
false
true
false
true
false
```

**Reasoning.**

1. "At least 18" means 18 or more, so the operator is `>=`, not `>`. 17 >= 18 is false.
2. "Remainder 2 when divided by 5" is `n % 5 == 2`. 37 = 7 × 5 + 2, so the remainder is 2 and the result is true.
3. "Not zero" is `!=`. 0 != 0 is false.
4. The average needs a `double` division (`2.0`) so that 50.5 is not truncated to 50. 50.5 > 50 is true.
5. "Multiple of 4" means the remainder after dividing by 4 is 0. 2026 = 506 × 4 + 2, the remainder is 2, so the result is false.

**Check on word choice.** "At least" means `>=`, "at most" means `<=`, "more than" means `>`, "fewer than" means `<`, "exactly" or "the same as" means `==`, and "different from" means `!=`. Reading the boundary word carefully is worth a mark on almost every Boolean-expression question.

## Common misconceptions

- **"= and == are interchangeable."** `=` stores a value, `==` compares two values. They are different operators with different results.
- **"A relational expression can have a numeric result."** It cannot. `a > b` is true or false, never a number.
- **"3 < x < 9 means x is between 3 and 9."** It is a compile-time error in Java. Use two comparisons and a logical operator.
- **"At least" and "more than" are the same."** "At least 18" is `>= 18`; "more than 18" is `> 18`. They differ when the value is exactly 18.
- **"The comparison is exact when numbers look exact."** Integer division truncates, and doubles carry round-off error, so what you see on paper is not always what the computer compares.
- **"You can use < with Strings."** The relational operators `<`, `>`, `<=` and `>=` are for numeric values only.
- **"Precedence goes left to right across everything."** Arithmetic is evaluated before the relational operator, regardless of where the comparison sits.

## Where this leads

Boolean expressions are the conditions in every `if` statement and loop. In Topic 2.3 you will use them to choose between two paths. In Topic 2.5 you will combine them with `&&`, `||` and `!`. Practise now with the [practice questions](/advanced-course-resources/computer-science-a/2-2-boolean-expressions-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/2-2-boolean-expressions-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/2-2-boolean-expressions-checklist/). Then read the [Topic 2.3 study guide](/advanced-course-resources/computer-science-a/2-3-if-statements-study-guide/) on `if` statements. If the idea of selection feels hazy, revisit the [Topic 2.1 study guide](/advanced-course-resources/computer-science-a/2-1-algorithms-selection-repetition-study-guide/).
