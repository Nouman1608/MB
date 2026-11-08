---
resourceId: "mb-ap-csa-1.3-practice"
title: "Expressions and Output: Practice Questions (Computer Science A 1.3)"
description: "Ten original Marlbridge practice questions on print and println, escape sequences, integer division, the remainder operator and operator precedence, with explanations and rubrics."
course: "computer-science-a"
unit: 1
topics: ["1.3"]
resourceType: "practice-questions"
prerequisites: ["The Topic 1.3 study guide"]
learningObjectives: ["State exactly what a sequence of print and println statements displays", "Evaluate arithmetic expressions by hand, applying type, precedence and left-to-right rules", "Use / and % to split quantities into whole groups and leftovers", "Identify run-time errors caused by integer division by zero"]
skills: ["2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.3-study-guide", "mb-ap-csa-1.3-revision-notes", "mb-ap-csa-1.3-checklist"]
next: "mb-ap-csa-1.3-checklist"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["Questions 1 to 6 are multiple choice; 7 to 10 need written answers.", "Every answer explains why the wrong options are wrong.", "Rubrics are suggested Marlbridge rubrics, not official scoring."]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All code is invented for these questions and was compiled and run before publication. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. No calculator is allowed on the exam, so work everything by hand. Code fragments are assumed to be inside a `main` method.

## Question 1 (multiple choice · foundation)

What is displayed by this code segment?

```java
System.out.print("A");
System.out.println("B");
System.out.print("C");
System.out.println("D");
```

- (A) `ABCD` on one line
- (B) `AB` on one line and `CD` on the next line
- (C) `A`, `B`, `C` and `D` each on its own line
- (D) `A` on one line, `BC` on the next line and `D` on the last line

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `print("A")` leaves the cursor after the A, so `println("B")` continues on the same line and then moves to a new line. Then `print("C")` and `println("D")` do the same on the next line.

- (A) forgets that `println` moves the cursor to a new line after displaying.
- (C) treats every statement as if it were `println`.
- (D) groups the output as if `println` moved to a new line **before** displaying instead of after.
</details>

## Question 2 (multiple choice · foundation)

What is displayed by the following statement?

```java
System.out.println("Say \"go\" to C:\\now");
```

- (A) `Say \"go\" to C:\\now`
- (B) `Say go to C:now`
- (C) The statement does not compile
- (D) `Say "go" to C:\now`

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** `\"` displays a double quote and `\\` displays a single backslash.

- (A) displays the escape sequences as typed, as if the backslashes were ordinary characters.
- (B) drops the quotes and the backslash, as if the backslashes simply hid the character after them.
- (C) is wrong because both escape sequences are valid and the string is properly closed.
</details>

## Question 3 (multiple choice · core)

What is the value of the expression `25 / 4 + 25 % 4`?

- (A) `7.25`
- (B) `6`
- (C) `7`
- (D) `1`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `25 / 4` is integer division: 6. `25 % 4` is the remainder: 25 - 24 = 1. Then 6 + 1 = 7.

- (A) would come from using real division, but both operands are `int`.
- (B) is the quotient alone and forgets to add the remainder.
- (D) is the remainder alone.
</details>

## Question 4 (multiple choice · core)

What is printed by `System.out.println(5 + 3 * 2 - 8 / 3);`?

- (A) `2`
- (B) `9`
- (C) `8`
- (D) `11`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `3 * 2` is 6 and `8 / 3` is 2 (integer division). The expression becomes `5 + 6 - 2`, which is `11 - 2`, which is 9.

- (A) comes from ignoring precedence and working strictly left to right: `((5 + 3) * 2 - 8) / 3` is `8 / 3`, which is 2.
- (C) rounds `8 / 3` up to 3 instead of truncating to 2, giving `5 + 6 - 3`.
- (D) forgets to subtract the division term at all: `5 + 6`.
</details>

## Question 5 (multiple choice · core)

What value is stored in `r` after the following statement?

```java
double r = 10 / 4 * 2.0;
```

- (A) `5.0`
- (B) `2.0`
- (C) `4.0`
- (D) `6.0`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Equal precedence goes left to right, so `10 / 4` comes first. Both operands are `int`, so the result is 2. Then `2 * 2.0` is the `double` 4.0.

- (A) would come from 10 / 4 = 2.5 and then 2.5 * 2.0, which is wrong because the first division is an integer division.
- (B) stops after the division, forgetting that 2 is then multiplied by 2.0.
- (D) comes from rounding 2.5 up to 3 and then multiplying by 2.0. Integer division truncates; it never rounds.
</details>

## Question 6 (multiple choice · core)

Which of the following statements compiles but causes an `ArithmeticException` when it executes? Assume `int z = 0;` has been declared.

- (A) `System.out.println(8 / 2.0);`
- (B) `System.out.println(8 % 3);`
- (C) `System.out.println(0 / 8);`
- (D) `System.out.println(8 % z);`

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The remainder operation with an `int` divisor of zero cannot be performed, so an `ArithmeticException` is thrown at run time. The compiler does not check the value of `z`.

- (A) is fine: it divides by 2.0 and prints 4.0.
- (B) prints 2.
- (C) is dividing **zero** by 8, which is allowed and prints 0. The problem arises when zero is the divisor, not the dividend.
</details>

## Question 7 (writing code · core)

A school has 1,234 pupils to seat at tables of 8. Write code that stores the number of pupils in an `int` variable, then displays (a) the number of **full** tables and (b) the number of pupils left over for a partly filled table. State the values displayed.

<details>
<summary>Worked solution</summary>

```java
int pupils = 1234;
int fullTables = pupils / 8;
int leftOver = pupils % 8;
System.out.println(fullTables);
System.out.println(leftOver);
```

1234 / 8: 8 * 154 = 1232, so the integer quotient is **154** and the remainder is 1234 - 1232 = **2**. The output is two lines: `154` and `2`. Check: 154 * 8 + 2 = 1234.

**Suggested Marlbridge rubric (4 marks):**

| Mark | Awarded for |
|---|---|
| 1 | Declares and initialises `pupils` as an `int` |
| 1 | Uses `/ 8` for full tables |
| 1 | Uses `% 8` for the leftover pupils |
| 1 | Correct values 154 and 2 (and displays them) |
</details>

## Question 8 (tracing output · core)

State exactly what the following program displays, showing each line of output.

```java
public class Trace {
    public static void main(String[] args) {
        int a = 14;
        int b = 4;
        System.out.print("Q: " + a / b);
        System.out.println(" R: " + a % b);
        System.out.println("Half: " + a / 2.0);
        System.out.println("Mix: " + (a + b) / 3 * 1.5);
        System.out.println("Tab\\\"x\"");
    }
}
```

<details>
<summary>Worked solution</summary>

```text
Q: 3 R: 2
Half: 7.0
Mix: 9.0
Tab\"x"
```

- `a / b` is 14 / 4 = 3 and `a % b` is 14 - 12 = 2. The first statement is `print`, so the second continues on the same line: `Q: 3 R: 2`.
- `a / 2.0` has a `double` operand, so it is 7.0.
- `(a + b) / 3 * 1.5`: the bracket is 18; `18 / 3` is 6 (equal precedence, left to right); `6 * 1.5` is 9.0.
- The last string is `Tab`, then `\\` (one backslash), then `\"` (a double quote), then `x`, then `\"` (a double quote): displayed as `Tab\"x"`.

**Suggested Marlbridge rubric (4 marks):** 1 mark for each correct line. Line 1 must show `Q: 3 R: 2` on the **same** line.
</details>

## Question 9 (digits · stretch)

A program stores the three-digit whole number `n = 407`.

(a) Write expressions, using only `/` and `%`, for the hundreds digit, the tens digit and the ones digit of `n`.

(b) Use them to find the sum of the digits of 407.

(c) Explain why `n % 10` gives the ones digit.

<details>
<summary>Worked solution</summary>

**(a)** `hundreds = n / 100` (integer division removes the last two digits: 4). `tens = n / 10 % 10` (first `n / 10` is 40, then `40 % 10` is 0). `ones = n % 10` (7).

**(b)** The sum is 4 + 0 + 7 = **11**.

**(c)** Dividing by 10 groups the number into tens with a remainder. The remainder is what is left after removing every complete group of ten, which is exactly the digit in the ones place.

**Suggested Marlbridge rubric (5 marks):**

| Mark | Awarded for |
|---|---|
| 1 | Hundreds expression `n / 100` |
| 1 | Tens expression `n / 10 % 10` (or equivalent such as `n % 100 / 10`) |
| 1 | Ones expression `n % 10` |
| 1 | Sum 11 |
| 1 | Explanation that the remainder after complete groups of ten is the ones digit |
</details>

## Question 10 (finding the bug · stretch)

A program should display the average of three `int` test scores, with a fractional part if there is one. For the scores 70, 80 and 90 it should display `80.0`.

```java
int a = 70;
int b = 80;
int c = 90;
System.out.println(a + b + c / 3.0);
```

(a) State what the code displays. What kind of error is this, and how would it be detected?

(b) Rewrite the last statement so that it displays the correct average.

(c) For the scores 70, 80 and 85, what does your corrected statement display, and why is `3.0` used instead of `3`?

<details>
<summary>Worked solution</summary>

**(a)** `c / 3.0` is evaluated first: 90 / 3.0 = 30.0. Then 70 + 80 = 150 and 150 + 30.0 = **180.0**. The code compiles and runs, so this is a **logic error**, detected by testing with data whose answer you know (80.0).

**(b)** `System.out.println((a + b + c) / 3.0);`

**(c)** (70 + 80 + 85) = 235 and 235 / 3.0 = 78.33333333333333 (a repeating decimal, shown to the precision a `double` can hold). Using `3.0` makes the division a `double` division. With `3` the sum 235 would be divided by 3 using integer division and give `78`, losing the fraction.

**Suggested Marlbridge rubric (5 marks):**

| Mark | Awarded for |
|---|---|
| 1 | Displays 180.0 (division first, then additions) |
| 1 | Identifies a logic error found by testing |
| 1 | Brackets around the sum in the corrected statement |
| 1 | Keeps a `double` division (`3.0`) in the corrected statement |
| 1 | Explains that `3` would truncate the fractional part (integer division) |
</details>

## How did you do?

- **Questions 1 and 2:** re-read "Showing results" and "String literals and escape sequences" in the [study guide](/advanced-course-resources/computer-science-a/1-3-expressions-output-study-guide/).
- **Questions 3 to 5 and 8:** evaluate on paper, rewriting the expression after each step as in Figure 1.
- **Questions 6 and 10:** revisit "Dividing by zero" and the idea that the type of each operation is decided separately.
- **Questions 7 and 9:** practise using `/` and `%` together on other numbers.

Then try the [checklist](/advanced-course-resources/computer-science-a/1-3-expressions-output-checklist/).
