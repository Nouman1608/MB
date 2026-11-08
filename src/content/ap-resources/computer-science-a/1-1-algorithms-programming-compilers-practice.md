---
resourceId: "mb-ap-csa-1.1-practice"
title: "Introduction to Algorithms, Programming, and Compilers: Practice Questions (Computer Science A 1.1)"
description: "Nine original Marlbridge practice questions on algorithms, sequencing, compiling and running, and classifying syntax, logic and run-time errors, with explanations and rubrics."
course: "computer-science-a"
unit: 1
topics: ["1.1"]
resourceType: "practice-questions"
prerequisites: ["The Topic 1.1 study guide"]
learningObjectives: ["Identify sequencing and its effect on a result", "Say what the compiler does and does not detect", "Classify faults as syntax, logic or run-time errors and explain how each is found", "Choose test data that can expose a logic error"]
skills: ["1", "3", "4"]
studyMinutes: 40
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.1-study-guide", "mb-ap-csa-1.1-revision-notes", "mb-ap-csa-1.1-checklist"]
next: "mb-ap-csa-1.1-checklist"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["Questions 1 to 5 and 9 are multiple choice; 6 to 8 need written answers.", "Every answer explains why the wrong options are wrong.", "Rubrics are suggested Marlbridge rubrics, not official scoring."]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. All code is invented for these questions; the code was compiled and run before publication. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. No calculator is allowed on the exam, so work everything by hand. All programs sit inside a class with a `main` method, which is omitted from fragments.

## Question 1 (multiple choice · foundation)

Which statement best describes **sequencing** in an algorithm?

- (A) Repeating a group of steps until a condition is met
- (B) Choosing between two groups of steps based on a decision
- (C) Completing the steps one at a time in a defined order
- (D) Translating the steps into a programming language

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Sequencing defines the order in which steps are completed, and the steps are completed one at a time.

- (A) describes iteration, studied in Unit 2.
- (B) describes selection, also studied in Unit 2.
- (D) describes writing the program (coding). An algorithm exists before it is expressed in any language.
</details>

## Question 2 (multiple choice · foundation)

A student finishes typing a Java program in an IDE and presses the button to compile it. Which is the role of the compiler at this point?

- (A) It runs each statement and shows the output
- (B) It checks the code for some errors, which must be fixed before the program can run
- (C) It tests the program with data to see if the results are as expected
- (D) It decides whether the algorithm is a good one

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The compiler checks for some errors. Any error it finds has to be fixed before the program can be run.

- (A) is running, which happens after compiling.
- (C) is testing, done by the programmer, with specific data. The compiler never judges results.
- (D) is beyond what a compiler can do: it checks rules, not whether the plan is a good one.
</details>

## Question 3 (multiple choice · core)

Which of the following faults would the **compiler** report?

- (A) A string literal that is missing its closing double quote
- (B) A program that should add two numbers but subtracts them
- (C) A program that divides an `int` by an `int` whose value is 0
- (D) A program that was tested with data that did not exercise every line

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** A string literal without its closing quote breaks the rules of the language. That is a syntax error, and the compiler detects syntax errors.

- (B) is a logic error: the program is legal but does the wrong thing. It is found by testing.
- (C) compiles. The `ArithmeticException` occurs only when the division executes, so it is a run-time error.
- (D) is a weakness in testing, not a fault in the program that a compiler could report.
</details>

## Question 4 (multiple choice · core)

A programmer wants to display the area of a rectangle with width 6 and height 4. The program prints `10`.

```java
int width = 6;
int height = 4;
System.out.println(width + height);
```

Which statement is correct?

- (A) This is a syntax error, because the compiler rejects `width + height`
- (B) This is a run-time error, because the program stops before printing
- (C) There is no error, because `10` is a valid number
- (D) This is a logic error, because the program runs but computes the wrong thing

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The code obeys every rule of Java, runs to the end and prints `10`, but the area is 6 * 4 = 24. The fault is in the algorithm (adding instead of multiplying), which makes it a logic error, found by comparing with the expected result.

- (A) is wrong because `width + height` is perfectly legal; nothing is reported by the compiler.
- (B) is wrong because nothing goes wrong during execution: the program finishes normally.
- (C) confuses "a valid number" with "the correct number". The program does not do what was intended.
</details>

## Question 5 (multiple choice · core)

What is printed by this code segment?

```java
int x = 4;
int y = 10;
int z = x;
x = y;
y = z + x;
System.out.println(x + " " + y);
```

- (A) `4 10`
- (B) `10 10`
- (C) `14 10`
- (D) `10 14`

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Trace the statements in order.

| After statement | x | y | z |
|---|---|---|---|
| `int x = 4;` | 4 | - | - |
| `int y = 10;` | 4 | 10 | - |
| `int z = x;` | 4 | 10 | 4 |
| `x = y;` | 10 | 10 | 4 |
| `y = z + x;` | 10 | 14 | 4 |

The last statement uses the **new** value of `x` (10) plus `z` (4), giving 14. The output is `10 14`.

- (A) prints the starting values, as if no assignment happened.
- (B) forgets that `y = z + x` changes `y`.
- (C) swaps the two printed values: it puts `y`'s value first, but the code prints `x` first.
</details>

## Question 6 (algorithm and sequencing · core)

A cafe algorithm for charging a customer is listed below, but the steps are in the wrong order.

1. Display the amount to pay.
2. Subtract the discount from the subtotal.
3. Read the price of each item and add it to the subtotal.
4. Read the discount.

(a) Write the steps in an order that makes the algorithm work. Is there only one correct order? Explain.

(b) A program uses the data subtotal 50 and discount 8. Write Java declarations and a statement that stores the amount to pay in an `int` variable named `toPay`, then state the value displayed.

<details>
<summary>Worked solution</summary>

**(a)** One valid order: 3, 4, 2, 1. The subtotal must exist and the discount must be known before the subtraction (step 2), and the amount must be calculated before it is displayed (step 1 last). Order 4, 3, 2, 1 is also correct, because reading the discount and building the subtotal do not depend on each other. So there is **more than one** correct order, but step 2 must come after steps 3 and 4, and step 1 must come last.

**(b)**

```java
int subtotal = 50;
int discount = 8;
int toPay = subtotal - discount;
System.out.println(toPay);
```

The value displayed is `42`.

**Suggested Marlbridge rubric (5 marks):**

| Mark | Awarded for |
|---|---|
| 1 | A valid order given, with step 1 (display) last |
| 1 | Step 2 placed after both steps 3 and 4 |
| 1 | Recognises that two orders (3, 4 or 4, 3) work, because those steps are independent |
| 1 | Java code that declares and uses `subtotal`, `discount` and `toPay` correctly in sequence |
| 1 | Displayed value 42 |
</details>

## Question 7 (classifying faults · core)

For each situation, state whether it is a syntax error, a logic error or a run-time error, and say **how** it is detected.

(a) A student writes `System.out.println("Total: " + total` and forgets the closing bracket and semicolon.

(b) A program to find the average of two ints `m` and `n` contains `m + n / 2`. For m = 4 and n = 6 it prints 7.

(c) A program divides the number of points by the number of games played. On a day when no games have been played, the program stops and prints a message naming an `ArithmeticException`.

(d) A program prints a message **before** hitting the problem in (c), then stops. Does the message printed earlier still appear? Explain.

<details>
<summary>Worked solution</summary>

**(a) Syntax error.** The grammar of the statement is broken. It is detected by the **compiler** before the program runs.

**(b) Logic error.** The program compiles and runs normally, but the expression `m + n / 2` does the division first, giving 4 + 3 = 7, not the average 5. It is detected by **testing** with data whose correct answer is known (the average of 4 and 6 should be 5).

**(c) Run-time error** (an exception). The division by an integer zero is legal code, so it compiles; the failure occurs when the line executes and interrupts the normal flow. It is detected **while the program runs**, through the error message.

**(d)** Yes, the earlier message still appears. Statements run in sequence; the exception only stops execution at the line where it occurs. Everything that already ran has already produced its output.

**Suggested Marlbridge rubric (6 marks):**

| Mark | Awarded for |
|---|---|
| 1 | (a) classified as a syntax error |
| 1 | (a) detected by the compiler (before running) |
| 1 | (b) classified as a logic error, with the reason that division is done first (or the program runs but gives 7, not 5) |
| 1 | (b) detected by testing with known data |
| 1 | (c) classified as a run-time error/exception, detected while running |
| 1 | (d) earlier output still appears, because statements run in sequence and execution stops only at the failing line |
</details>

## Question 8 (choosing test data · stretch)

A programmer wants a program to display the average of two `int` values `a` and `b`, using integer division. The correct expression is `(a + b) / 2`. By mistake the programmer writes `a + b / 2`.

(a) For each pair, give the output of the faulty expression and the output of the correct one: (i) a = 0, b = 10; (ii) a = 4, b = 6; (iii) a = 3, b = 4.

(b) Which pair(s) would **fail to reveal** the bug? Explain why.

(c) State one general lesson about choosing test data.

<details>
<summary>Worked solution</summary>

**(a)**

| Pair | Faulty `a + b / 2` | Correct `(a + b) / 2` |
|---|---|---|
| (i) a = 0, b = 10 | 0 + 5 = 5 | 10 / 2 = 5 |
| (ii) a = 4, b = 6 | 4 + 3 = 7 | 10 / 2 = 5 |
| (iii) a = 3, b = 4 | 3 + 2 = 5 | 7 / 2 = 3 (integer division truncates the 3.5) |

**(b)** Pair (i) fails to reveal the bug: both expressions give 5. When `a` is 0, adding `a` first or last makes no difference, so the wrong bracketing happens to give the right answer.

**(c)** Choose test data for which you can work out the expected result independently, and avoid values (such as 0 or 1) that can hide an error. Use several different inputs, because one lucky test can pass a faulty program.

**Suggested Marlbridge rubric (5 marks):**

| Mark | Awarded for |
|---|---|
| 1 | Both outputs correct for (i) |
| 1 | Both outputs correct for (ii) |
| 1 | Both outputs correct for (iii), including the truncation to 3 |
| 1 | Pair (i) identified as hiding the bug, with the reason (a is 0) |
| 1 | A valid general lesson about test data |
</details>

## Question 9 (multiple choice · stretch)

Consider the statement `int ratio = 100 / count;` where `count` is an `int` variable. Which statement is true?

- (A) If `count` is 0 the code will not compile
- (B) If `count` is 0 the code compiles and `ratio` becomes 0
- (C) If `count` is 0 the code compiles, and an exception occurs when the statement executes
- (D) If `count` is 0 the code compiles and the program prints an error but continues with the next statement

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The compiler does not know what value `count` will hold when the program runs, so the line is legal. Dividing an `int` by the integer zero results in an `ArithmeticException`, which interrupts the normal flow of execution (a run-time error).

- (A) mixes up compile time and run time. The value of a variable is not examined by the compiler.
- (B) is wrong: no value is produced, because the exception stops the statement from completing.
- (D) is wrong because an uncaught exception terminates the program abnormally; later statements do not run.
</details>

## How did you do?

- **Questions 1 to 3:** if you missed any, re-read "An algorithm is a plan you can follow one step at a time" and "Three families of error" in the [study guide](/advanced-course-resources/computer-science-a/1-1-algorithms-programming-compilers-study-guide/).
- **Questions 4, 7 and 9:** work through the table of error kinds again, then try classifying five faults of your own.
- **Questions 5 and 6:** practise tracing with a table, one row per statement.
- **Question 8:** write three more test pairs for a formula of your own and see which ones would catch a mistake.

Then try the [checklist](/advanced-course-resources/computer-science-a/1-1-algorithms-programming-compilers-checklist/).
