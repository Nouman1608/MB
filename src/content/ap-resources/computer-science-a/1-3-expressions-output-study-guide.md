---
resourceId: "mb-ap-csa-1.3-study-guide"
title: "Expressions and Output: Study Guide (Computer Science A 1.3)"
description: "Learn to display output with print and println, write string literals with escape sequences, and evaluate arithmetic expressions including integer division, remainder and precedence."
course: "computer-science-a"
unit: 1
topics: ["1.3"]
resourceType: "study-guide"
prerequisites: ["Topic 1.2: int, double and boolean values and how variables store them", "School arithmetic, including the order of operations"]
prerequisiteResources: ["mb-ap-csa-1.2-study-guide"]
learningObjectives: ["Use System.out.print and System.out.println, and state exactly what is displayed, including where the cursor ends up", "Write string literals with the escape sequences for a double quote, a backslash and a new line", "Evaluate arithmetic expressions with +, -, *, / and %, applying precedence, left-to-right order and the int/double result rules", "Explain integer division, the remainder operator and why dividing an int by zero throws an ArithmeticException"]
skills: ["2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.3-revision-notes", "mb-ap-csa-1.3-practice", "mb-ap-csa-1.3-checklist"]
next: "mb-ap-csa-1.3-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["System.out.println displays its argument and then moves to a new line; System.out.print does not.", "A string literal is text in double quotes. The escape sequences used in this course are \\\" (double quote), \\\\ (backslash) and \\n (new line).", "Two int operands give an int result; at least one double operand gives a double result. Integer division keeps only the integer part of the quotient.", "a % b is the remainder when a is divided by b. Multiplication, division and remainder come before addition and subtraction, and equal precedence goes left to right.", "Dividing an int by the integer zero causes an ArithmeticException at run time."]
faqs: [{"question": "Why does 7 / 2 give 3 and not 3.5?", "answer": "Both operands are int values, so Java performs integer division and keeps only the integer part of the quotient (3). To get 3.5, make at least one operand a double, as in 7 / 2.0 or 7.0 / 2."}, {"question": "What does the % operator do?", "answer": "It gives the remainder when the first number is divided by the second. 17 % 5 is 2 because 17 is 3 groups of 5 with 2 left over. The course uses it with a non-negative first operand and a positive second operand."}, {"question": "What is the difference between print and println?", "answer": "println displays the information and then moves the cursor to the start of a new line, so the next output appears on the next line. print displays the information and leaves the cursor where it is, so the next output continues on the same line."}, {"question": "How do I print a double quote inside a string?", "answer": "Use the escape sequence \\\" inside the string literal. For example, System.out.println(\"She said \\\"hello\\\"\"); displays She said \"hello\"."}]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## Showing results: print and println

A program is useful only if it can show you something. The statements `System.out.print` and `System.out.println` display information on the computer screen. They differ in one respect: what happens to the **cursor**, the position where the next output will appear.

- `System.out.println(...)` displays the information and then moves the cursor to the **start of a new line**.
- `System.out.print(...)` displays the information and leaves the cursor **where it is**, so the next output continues on the same line.

```java
public class Output {
    public static void main(String[] args) {
        System.out.print("One ");
        System.out.print("Two");
        System.out.println(" Three");
        System.out.println("She said \"hello\"");
        System.out.println("C:\\notes");
        System.out.println("Line A\nLine B");
    }
}
```

```text
One Two Three
She said "hello"
C:\notes
Line A
Line B
```

The first three statements share one line, because the first two use `print`. The `println` in the third statement ends the line. The remaining lines show escape sequences, which we turn to next.

## String literals and escape sequences

A **literal** is the code representation of a fixed value. A **string literal** is a sequence of characters enclosed in **double quotes**, such as `"Plan first"`. The quotes mark where the text starts and ends; they are not part of the text displayed.

That raises a problem: how do you put a double quote **inside** a string, when a double quote means "end of string"? The answer is an **escape sequence**. An escape sequence is a special combination of characters that starts with a backslash `\` and has a special meaning. The three used in this course are:

| Escape sequence | Meaning | Example string literal | Displayed as |
|---|---|---|---|
| `\"` | a double quote character | `"say \"hi\""` | say "hi" |
| `\\` | a single backslash | `"C:\\notes"` | C:\notes |
| `\n` | a new line | `"A\nB"` | A, then B on the next line |

Each escape sequence is written with **two** characters but counts as **one** character in the string. A lone backslash followed by anything else is a syntax error, and a string whose closing quote is missing is also a syntax error.

## Arithmetic expressions

An **arithmetic expression** is built from numeric values, variables and operators. The arithmetic operators are:

| Operator | Meaning | Example | Result |
|---|---|---|---|
| `+` | addition | `6 + 4` | `10` |
| `-` | subtraction | `6 - 4` | `2` |
| `*` | multiplication | `6 * 4` | `24` |
| `/` | division | `6 / 4` | `1` |
| `%` | remainder | `6 % 4` | `2` |

Two rules decide the **type** of the result:

1. An operation on **two `int` values** gives an **`int`**.
2. An operation with **at least one `double`** gives a **`double`**.

### Integer division

Look closely at `6 / 4`. Both operands are `int` values, so the result is an `int`: **only the integer portion of the quotient is kept**. The true quotient is 1.5, the integer portion is 1, so `6 / 4` is `1`. Nothing is rounded: the fractional part is thrown away. When at least one operand is a `double`, the result is the full quotient: `6 / 4.0` is `1.5`.

### The remainder operator

`a % b` computes the remainder when `a` is divided by `b`. For `17 % 5`, 5 goes into 17 three times (15) with 2 left over, so the answer is 2. Integer division and remainder are partners: for positive numbers, `a == (a / b) * b + a % b`. In this course the operator is used with `a` not negative and `b` positive.

Remainders are useful: `n % 10` gives the last digit of a positive whole number, `n / 10` removes it, and `n % 2` is 0 for even numbers.

### Precedence

An expression with several operators is grouped at compile time by **operator precedence**:

- `*`, `/` and `%` are evaluated **before** `+` and `-`.
- Operators of **equal precedence** are evaluated **from left to right**.
- **Parentheses** override precedence: the inside is worked out first.

<figure>
<svg viewBox="0 0 600 378" role="img" aria-labelledby="fig-eval-t fig-eval-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fig-eval-t">Evaluating 10 + 7 % 4 * 2 - 9 / 2 step by step</title>
<desc id="fig-eval-d">A top-to-bottom chain of steps with arrows between them: 10 + 7 % 4 * 2 - 9 / 2; then 10 + 3 * 2 - 4; then 10 + 6 - 4; then 16 - 4; then 12. Notes beside arrows: after step 1, 7 % 4 is 3 and 9 / 2 is 4 (integer division); after step 2, 3 * 2 is 6; after step 3, 10 + 6 is 16; after step 4, 16 - 4 is 12.</desc>
<rect x="0" y="0" width="600" height="378" fill="#ffffff"/>
<rect x="20" y="14" width="360" height="40" rx="8" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="39.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >10 + 7 % 4 * 2 - 9 / 2</text>
<line x1="200.0" y1="54" x2="200.0" y2="82" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="200.0,82 196.5,73.7 203.5,73.7" fill="#1d2b44"/>
<text x="214.0" y="73.0" text-anchor="start" font-size="12" font-weight="normal" fill="#1d2b44" >7 % 4 is 3 and 9 / 2 is 4 (integer division)</text>
<rect x="20" y="84" width="360" height="40" rx="8" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="109.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >10 + 3 * 2 - 4</text>
<line x1="200.0" y1="124" x2="200.0" y2="152" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="200.0,152 196.5,143.7 203.5,143.7" fill="#1d2b44"/>
<text x="214.0" y="143.0" text-anchor="start" font-size="12" font-weight="normal" fill="#1d2b44" >3 * 2 is 6</text>
<rect x="20" y="154" width="360" height="40" rx="8" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="179.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >10 + 6 - 4</text>
<line x1="200.0" y1="194" x2="200.0" y2="222" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="200.0,222 196.5,213.7 203.5,213.7" fill="#1d2b44"/>
<text x="214.0" y="213.0" text-anchor="start" font-size="12" font-weight="normal" fill="#1d2b44" >10 + 6 is 16</text>
<rect x="20" y="224" width="360" height="40" rx="8" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="249.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >16 - 4</text>
<line x1="200.0" y1="264" x2="200.0" y2="292" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="200.0,292 196.5,283.7 203.5,283.7" fill="#1d2b44"/>
<text x="214.0" y="283.0" text-anchor="start" font-size="12" font-weight="normal" fill="#1d2b44" >16 - 4 is 12</text>
<rect x="20" y="294" width="360" height="40" rx="8" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="319.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >12</text>
</svg>
<figcaption>Figure 1. Each row rewrites the expression after one round of work. The % and / steps come first; the multiplication then uses the remainder, and the addition and subtraction go left to right.</figcaption>
</figure>

Running a collection of expressions makes the rules concrete:

```java
public class Arithmetic {
    public static void main(String[] args) {
        System.out.println("17 / 5 = " + 17 / 5);
        System.out.println("17 % 5 = " + 17 % 5);
        System.out.println("17 / 5.0 = " + 17 / 5.0);
        System.out.println("2 + 3 * 4 = " + (2 + 3 * 4));
        System.out.println("(2 + 3) * 4 = " + (2 + 3) * 4);
        System.out.println("10 - 4 - 3 = " + (10 - 4 - 3));
        System.out.println("20 / 4 / 2 = " + 20 / 4 / 2);
        System.out.println("20 / (4 / 2) = " + 20 / (4 / 2));
        System.out.println("7 / 2 * 2.0 = " + 7 / 2 * 2.0);
        System.out.println("7 / 2.0 * 2 = " + 7 / 2.0 * 2);
    }
}
```

```text
17 / 5 = 3
17 % 5 = 2
17 / 5.0 = 3.4
2 + 3 * 4 = 14
(2 + 3) * 4 = 20
10 - 4 - 3 = 3
20 / 4 / 2 = 2
20 / (4 / 2) = 10
7 / 2 * 2.0 = 6.0
7 / 2.0 * 2 = 7.0
```

Study the last two lines. They use the same numbers, yet differ. In `7 / 2 * 2.0` the division comes first and both of its operands are `int`, so it gives 3; only then is 3 multiplied by `2.0`. In `7 / 2.0 * 2` the first division already involves a `double`, so it gives 3.5, and 3.5 * 2 is 7.0. **The type is decided one operation at a time, in the order of evaluation.**

### Dividing by zero

An attempt to divide an `int` by the integer zero results in an `ArithmeticException`, a run-time error (Topic 1.1). The same happens for `%` with a zero divisor. The program compiles but stops when the statement executes. (Expressions that involve a `double` divided by zero are outside the scope of this course.)

## Worked example 1: Evaluate a mixed expression and a mixed-type expression

**Task.** State the value and type of (a) `10 + 7 % 4 * 2 - 9 / 2` and (b) `3 + 8 / 4 * 1.5`.

**Part (a), step by step.** This is the expression in Figure 1.

1. Identify the operators of higher precedence: `%`, `*` and `/`. They are worked out before `+` and `-`.
2. Among `7 % 4 * 2`, the operators `%` and `*` have equal precedence, so go left to right. `7 % 4` is 3 (7 = 1 * 4 + 3). Then `3 * 2` is 6.
3. `9 / 2` is integer division of two `int` values: 4.
4. The expression is now `10 + 6 - 4`. Equal precedence, left to right: `10 + 6` is 16, and `16 - 4` is 12.

The value is **12**, and its type is `int`, because every operation used only `int` values.

**Part (b), step by step.**

1. `8 / 4` comes first (`/` before `+`, and `/` is to the left of `*`). Both are `int`, so the result is the `int` 2.
2. `2 * 1.5` has a `double` operand, so the result is the `double` 3.0.
3. `3 + 3.0` has a `double` operand, so the result is the `double` 6.0.

The value is **6.0**, of type `double`.

**Check.** Run both: `System.out.println(10 + 7 % 4 * 2 - 9 / 2);` prints `12` and `System.out.println(3 + 8 / 4 * 1.5);` prints `6.0`.

## Worked example 2: Minutes into hours and minutes

**Task.** A program stores a total of 197 minutes in an `int` variable. Display it as hours and minutes, in the form `3 h 17 min`. Work out the arithmetic first, then show the code and the result.

**Step 1, think about what is needed.** There are 60 minutes in an hour. The number of **whole** hours is the quotient of 197 divided by 60 with the fraction thrown away: exactly what integer division does. The minutes left over are the **remainder**.

**Step 2, work it by hand.**

- Hours: `197 / 60`. 60 goes into 197 three times (180), so the integer quotient is 3.
- Minutes: `197 % 60`. 197 - 180 = 17, so the remainder is 17.
- Check: 3 * 60 + 17 = 197.

**Step 3, write the program.** Printing a label, a number and another label uses `+` to join them (Topic 1.15 explains string joining in full). Here each `+` has text on one side, so it joins rather than adds.

```java
public class Duration {
    public static void main(String[] args) {
        int total = 197;
        int hours = total / 60;
        int minutes = total % 60;
        System.out.println(hours + " h " + minutes + " min");
    }
}
```

```text
3 h 17 min
```

**Step 4, interpret.** The output matches the hand calculation, and the check (3 * 60 + 17 = 197) shows no minutes have been lost or invented. The same pair of operators converts seconds to minutes and seconds, or splits a number of days into weeks and days. Whenever you want "how many whole groups" use `/`; whenever you want "how many are left over" use `%`.

## Common misconceptions

- **"`7 / 2` is 3.5."** With two `int` operands it is 3. Make an operand a `double` to keep the fraction.
- **"Integer division rounds."** It truncates: `9 / 10` is 0, and `19 / 10` is 1.
- **"`%` means percent."** It is the remainder operator.
- **"Operations are done strictly left to right."** Only operators of equal precedence go left to right. `2 + 3 * 4` is 14, not 20.
- **"`println` and `print` do the same thing."** Only `println` ends the line.
- **"`\n` prints a backslash and an n."** It is one character, a new line. To print a backslash use `\\`.
- **"`10 - 4 - 3` is 9."** Equal precedence goes left to right: `(10 - 4) - 3` is 3.
- **"If the result is going into a `double`, the division is done in `double`."** The division is evaluated on its own operands first. `double x = 7 / 2;` stores 3.0.

## Where this leads

Practise on the [Topic 1.3 practice questions](/advanced-course-resources/computer-science-a/1-3-expressions-output-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/1-3-expressions-output-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/1-3-expressions-output-checklist/). The next topic, [1.4 Assignment Statements and Input](/advanced-course-resources/computer-science-a/1-4-assignment-input-study-guide/), stores the results of expressions in variables and reads values typed by a user.
