---
resourceId: "mb-ap-csa-1.4-practice"
title: "Assignment Statements and Input: Practice Questions (Computer Science A 1.4)"
description: "Nine original Marlbridge practice questions on assignment statements, tracing, initialization, type compatibility, null and Scanner input, with explanations and rubrics."
course: "computer-science-a"
unit: 1
topics: ["1.4"]
resourceType: "practice-questions"
prerequisites: ["The Topic 1.4 study guide"]
learningObjectives: ["Trace assignment statements, including statements that use a variable's own value", "Decide whether an assignment compiles and explain why", "Predict the output of a short program that reads input", "Write a short program that reads values and uses assignment to compute a result"]
skills: ["2", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.4-study-guide", "mb-ap-csa-1.4-revision-notes", "mb-ap-csa-1.4-checklist"]
next: "mb-ap-csa-1.4-checklist"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["Questions 1 to 6 are multiple choice; 7 to 9 need written answers.", "Every answer explains why the wrong options are wrong.", "Rubrics are suggested Marlbridge rubrics, not official scoring."]
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

Which statement increases the value of the `int` variable `count` by 1?

- (A) `count = count + 1;`
- (B) `count + 1 = count;`
- (C) `count == count + 1;`
- (D) `count + 1;`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The right side is evaluated using the current value of `count`, and the result is stored back in `count`.

- (B) has the expression on the left. The left side of an assignment must be a variable.
- (C) uses `==`, which compares values. As a statement on its own it does not compile and it never changes `count`.
- (D) calculates a value but stores it nowhere; as a statement on its own it does not compile.
</details>

## Question 2 (multiple choice · foundation)

What is printed by the following code segment?

```java
int a = 5;
int b = 2;
a = a + b;
b = a - b;
System.out.println(a + " " + b);
```

- (A) `7 2`
- (B) `7 5`
- (C) `5 2`
- (D) `7 7`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).**

| After statement | a | b |
|---|---|---|
| `int a = 5;` | 5 | - |
| `int b = 2;` | 5 | 2 |
| `a = a + b;` | 7 | 2 |
| `b = a - b;` | 7 | 5 |

The last statement uses the new `a` (7): 7 - 2 = 5.

- (A) forgets that `b` was reassigned.
- (C) prints the starting values, as if no assignment happened.
- (D) copies `a` into `b`, but `b = a - b` subtracts the old `b`.
</details>

## Question 3 (multiple choice · core)

The variables `int n = 4;` and `double d = 2.5;` have been declared. Which statement compiles?

- (A) `n = d;`
- (B) `n = 2.5;`
- (C) `d = "3.5";`
- (D) `d = n;`

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** An `int` value can be stored in a `double` variable, so `d` becomes 4.0.

- (A) stores a `double` value in an `int` variable, which the compiler rejects.
- (B) stores the `double` literal 2.5 in an `int`, also rejected.
- (C) stores a `String` in a `double` variable; text in quotes is not a number.
</details>

## Question 4 (multiple choice · core)

What happens when this code segment is compiled?

```java nocompile
int total;
total = total + 5;
System.out.println(total);
```

- (A) It compiles and prints `5`
- (B) It compiles and prints `0`
- (C) It does not compile, because `total` is used before it has been assigned a value
- (D) It compiles but throws an exception when it runs

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** In `total = total + 5;` the right side uses `total`, which has not been initialized. Every variable must be assigned a value before it is used in an expression, and the compiler reports it as an error.

- (A) and (B) assume a default value for a local variable. Java does not give one for a variable declared in a method.
- (D) is wrong because the problem is caught at compile time, so the program never runs.
</details>

## Question 5 (multiple choice · core)

What is the value of `result` after the following statements?

```java
int x = 7;
double result = x / 2 + 1.0;
x = 1;
```

- (A) `4.0`
- (B) `4.5`
- (C) `3.0`
- (D) `2.0`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `x / 2` is integer division: 3. Then `3 + 1.0` is 4.0, stored in `result`. The later assignment `x = 1;` does not change `result`, which holds its own value.

- (B) treats `x / 2` as 3.5.
- (C) leaves out the 1.0.
- (D) uses the final value of `x` (1), as if `result` were recalculated when `x` changed. A variable is not a formula.
</details>

## Question 6 (multiple choice · stretch)

The following program is run, and the user types the two lines `8` and `apple`, each followed by the Enter key.

```java stdin="8|apple"
import java.util.Scanner;

public class Echo {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        String s = in.nextLine();
        System.out.println(n + "[" + s + "]");
    }
}
```

What is printed?

- (A) `8[]`
- (B) `8[apple]`
- (C) `8[ ]` with a space between the brackets
- (D) An `InputMismatchException` is thrown

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `nextInt()` reads the 8 and leaves the end of that line unread. `nextLine()` then reads the rest of the **same** line, which is empty, so `s` holds the empty string. The word `apple` is still waiting to be read.

- (B) assumes that `nextLine()` moves on to the next line first. It does not.
- (C) has nothing to put a space there: the remainder of the line is empty.
- (D) would happen only if `nextInt()` met text that is not an integer. The first item is 8.
</details>

## Question 7 (tracing · core)

Trace the following code segment and state what it prints.

```java
int a = 6;
int b = 4;
int c = a / b;
double d = a / b;
double e = a / 4.0;
a = c + b;
b = a * 2;
System.out.println(a + " " + b + " " + c + " " + d + " " + e);
```

<details>
<summary>Worked solution</summary>

| After statement | a | b | c | d | e |
|---|---|---|---|---|---|
| `int a = 6;` | 6 | - | - | - | - |
| `int b = 4;` | 6 | 4 | - | - | - |
| `int c = a / b;` | 6 | 4 | 1 | - | - |
| `double d = a / b;` | 6 | 4 | 1 | 1.0 | - |
| `double e = a / 4.0;` | 6 | 4 | 1 | 1.0 | 1.5 |
| `a = c + b;` | 5 | 4 | 1 | 1.0 | 1.5 |
| `b = a * 2;` | 5 | 10 | 1 | 1.0 | 1.5 |

The output is `5 10 1 1.0 1.5`. Note that `d` is 1.0, not 1.5: the division `a / b` is an integer division, and only afterwards is the result stored as a `double`.

**Suggested Marlbridge rubric (5 marks):**

| Mark | Awarded for |
|---|---|
| 1 | `c` is 1 (integer division) |
| 1 | `d` is 1.0 and the reason is stated or shown |
| 1 | `e` is 1.5 |
| 1 | `a` becomes 5 and `b` becomes 10 (uses the **new** `a`) |
| 1 | Output line exactly `5 10 1 1.0 1.5` |
</details>

## Question 8 (writing code · core)

Write a program fragment that reads two whole numbers from the keyboard using a `Scanner` named `in`, stores them in `int` variables `first` and `second`, and prints their sum on one line and their product on the next. Show the output when the user enters 6 and 7.

<details>
<summary>Worked solution</summary>

```java stdin="6|7"
import java.util.Scanner;

public class SumProduct {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int first = in.nextInt();
        int second = in.nextInt();
        int sum = first + second;
        int product = first * second;
        System.out.println(sum);
        System.out.println(product);
    }
}
```

```text
13
42
```

**Suggested Marlbridge rubric (5 marks):**

| Mark | Awarded for |
|---|---|
| 1 | Creates a `Scanner` that reads from the keyboard (accept the form used in your course) |
| 1 | Reads **both** values with `nextInt()` and stores them in `int` variables |
| 1 | Sum calculated correctly and stored or printed |
| 1 | Product calculated correctly and stored or printed |
| 1 | Prints 13 then 42 on separate lines (`println`) |
</details>

## Question 9 (null and compatibility · stretch)

(a) Which of the following two lines compile? Give a reason for each: `String name = null;` and `int count = null;`.

(b) Explain in one or two sentences what `null` means for a `String` variable.

(c) The statement `double average = total / count;` appears in a method, where `total` and `count` are `int` variables with the values 7 and 2. State the value stored in `average` and explain why it is not 3.5.

<details>
<summary>Worked solution</summary>

**(a)** `String name = null;` compiles: a variable of a reference type can hold an object reference or `null`. `int count = null;` does **not** compile: `int` is a primitive type and holds only `int` values, never `null`.

**(b)** `null` means the variable is not associated with any object: it refers to no `String` at all. (This is different from an empty string `""`, which is an object with no characters.)

**(c)** `average` holds **3.0**. `total / count` is evaluated first, with two `int` operands, so it is integer division and gives 3; only then is 3 stored in a `double`, becoming 3.0. To keep the fraction, at least one operand would have to be a `double`, for example `total / 2.0`.

**Suggested Marlbridge rubric (5 marks):**

| Mark | Awarded for |
|---|---|
| 1 | `String name = null;` compiles, with a reason about reference types |
| 1 | `int count = null;` does not compile, with a reason about primitives |
| 1 | `null` means no object (not 0, not empty text) |
| 1 | `average` is 3.0 |
| 1 | Explains that the division is done on `int` values first |
</details>

## How did you do?

- **Questions 1 and 2:** re-read "Assignment: evaluate on the right, store on the left" in the [study guide](/advanced-course-resources/computer-science-a/1-4-assignment-input-study-guide/).
- **Questions 3 to 5 and 7:** practise tracing with a table, one row per statement, and check the type of each value.
- **Questions 6 and 8:** revisit "Input: getting values from a user" and run the examples if you can.
- **Question 9:** revisit "Reference types and null".

Then try the [checklist](/advanced-course-resources/computer-science-a/1-4-assignment-input-checklist/).
