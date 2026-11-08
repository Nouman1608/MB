---
resourceId: "mb-ap-csa-1.8-practice"
title: "Documentation with Comments: Practice Questions (Computer Science A 1.8)"
description: "Nine original Marlbridge practice questions on Java comments, Javadoc, preconditions and postconditions, writing contracts for methods and judging calls from documentation."
course: "computer-science-a"
unit: 1
topics: ["1.8"]
resourceType: "practice-questions"
prerequisites: ["The Topic 1.8 study guide"]
learningObjectives: ["Identify the three kinds of comment and predict the output of code containing comments", "Define precondition and postcondition and say who is responsible for each", "Write a precondition and a postcondition for a method", "Judge whether a call respects a method's documentation and predict its result"]
skills: ["3", "4"]
studyMinutes: 40
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.8-study-guide", "mb-ap-csa-1.8-revision-notes", "mb-ap-csa-1.8-checklist"]
next: "mb-ap-csa-1.8-checklist"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["Questions 1 to 6 are multiple choice; 7 to 9 need written answers.", "Every answer explains why the wrong options are wrong.", "Rubrics are suggested Marlbridge rubrics, not official scoring."]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. All code is invented for these questions and was compiled and run before publication. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. No calculator is allowed on the exam, so work everything by hand. Code fragments are assumed to be inside a `main` method.

## Question 1 (multiple choice · foundation)

Which statement about comments in a Java program is true?

- (A) The compiler checks that each comment is a correct sentence
- (B) Comments are run before the first statement of `main`
- (C) Comments are ignored by the compiler and are not executed when the program runs
- (D) Comments are printed by `System.out.println` if they are above it

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Comments are for human readers. They have no effect on compilation or execution.

- (A) is wrong: the compiler does not read the content of comments.
- (B) is wrong: comments are not executed at all.
- (D) is wrong: nothing is printed unless a statement prints it.
</details>

## Question 2 (multiple choice · foundation)

Which kind of comment is used to create API documentation?

- (A) `/** text */`
- (B) `// text`
- (C) `/* text */`
- (D) `# text`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** A comment that begins `/**` is a Javadoc comment, used to create API documentation.

- (B) is a one-line comment.
- (C) is a block comment, not used to generate documentation.
- (D) is not a Java comment at all: `#` is not valid comment syntax in Java.
</details>

## Question 3 (multiple choice · core)

What is printed by the following program?

```java
public class Hidden {
    public static void main(String[] args) {
        int n = 4;
        // n = n * 10;
        /* n = n + 1;
           n = n + 1; */
        n = n + 3; // add three
        System.out.println(n);
    }
}
```

- (A) `4`
- (B) `7`
- (C) `9`
- (D) `47`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The statement `n = n * 10;` is commented out with `//`, and both `n = n + 1;` statements are inside a block comment, so they do not execute. Only `n = n + 3;` runs: 4 + 3 = 7. The `// add three` comment is ignored.

- (A) assumes none of the updates ran, but `n = n + 3;` is not commented out.
- (C) counts the two commented-out additions of 1 as well.
- (D) is not an `int` result of any statement shown.
</details>

## Question 4 (multiple choice · core)

Which statement best defines a **precondition**?

- (A) A condition that must be true after a method has run
- (B) A comment that is checked by the compiler
- (C) The first statement of a method
- (D) A condition that must be true just before a method runs for it to behave as expected

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** A precondition describes what must hold before the call. It is the caller's responsibility, and the method is not expected to check it.

- (A) is the definition of a postcondition.
- (B) is wrong: neither kind of condition is checked by the compiler.
- (C) confuses a condition with a statement.
</details>

## Question 5 (multiple choice · core)

A method `double halve(double x)` is documented as "Precondition: none. Postcondition: returns half of x." Which of the following is a valid **postcondition**-style statement for this method?

- (A) The value returned equals `x / 2`
- (B) `x` must be positive
- (C) The caller must pass a `double`
- (D) The method is only run once

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** A postcondition describes the outcome in terms of what is returned.

- (B) and (C) are requirements on the caller, which is the job of a precondition (and the documentation says there is none).
- (D) is not a statement about the outcome of a call.
</details>

## Question 6 (multiple choice · core)

A method `static int quotient(int a, int b)` has the documented precondition `b != 0`. A program calls `quotient(8, 0)`. Which statement is correct?

- (A) The compiler reports an error because the precondition is broken
- (B) The method is expected to detect the problem and return 0
- (C) The call compiles and returns -1
- (D) The call compiles; the caller broke the precondition, and an `ArithmeticException` occurs when the division runs

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Preconditions are not checked by the compiler. The caller was responsible for making sure `b` was not zero, and the integer division by zero throws an exception at run time.

- (A) is wrong: the compiler does not enforce preconditions, and does not know the value.
- (B) is wrong: there is no expectation that a method checks its preconditions.
- (C) invents a special return value that the documentation never promised.
</details>

## Question 7 (writing documentation · core)

Write a precondition and a postcondition for each method. State what a caller must make sure of.

```java
public class Methods {
    public static int lastDigit(int n) {
        return n % 10;
    }

    public static int perimeter(int width, int height) {
        return 2 * (width + height);
    }
}
```

<details>
<summary>Worked solution</summary>

**`lastDigit`:** Precondition: `n >= 0` (the course uses `%` with a non-negative first operand). Postcondition: returns the ones digit of `n`, a value from 0 to 9 inclusive. The caller must make sure that `n` is not negative.

**`perimeter`:** Precondition: `width >= 0` and `height >= 0` (lengths cannot be negative; also, the result must be in the range of `int`). Postcondition: returns `2 * (width + height)`, the perimeter of a rectangle of that width and height. The caller must make sure that both values are non-negative.

Any reasonable precondition that makes the postcondition true is acceptable. A good postcondition describes the **result**, not the code.

**Suggested Marlbridge rubric (4 marks):**

| Mark | Awarded for |
|---|---|
| 1 | `lastDigit` precondition names the non-negative input |
| 1 | `lastDigit` postcondition describes the result (the ones digit, 0 to 9) |
| 1 | `perimeter` precondition about the sign of the arguments |
| 1 | `perimeter` postcondition states the value returned in terms of the inputs |
</details>

## Question 8 (judging calls · core)

A class documents this method; you cannot see its code.

```text
static int secondsIn(int hours, int minutes)
   Precondition: hours >= 0 and 0 <= minutes <= 59
   Postcondition: returns hours * 3600 + minutes * 60
```

(a) For each call, say whether it respects the precondition and, if it does, give the value returned: (i) `secondsIn(1, 15)` (ii) `secondsIn(0, 59)` (iii) `secondsIn(2, 75)`.

(b) For (iii), what can you rely on?

<details>
<summary>Worked solution</summary>

**(a)** (i) The precondition holds (1 >= 0 and 15 is between 0 and 59). The value is 1 * 3600 + 15 * 60 = 3600 + 900 = **4500**. (ii) The precondition holds (59 is allowed). The value is 0 + 59 * 60 = **3540**. (iii) 75 is outside 0 to 59, so the precondition is **not** met.

**(b)** Nothing. The documentation promises a result only when the precondition holds. The call is the caller's mistake, and it is not the method's job to check.

**Suggested Marlbridge rubric (5 marks):**

| Mark | Awarded for |
|---|---|
| 1 | (i) respects the precondition |
| 1 | (i) 4500 |
| 1 | (ii) 3540 |
| 1 | (iii) identified as breaking the precondition (75 is above 59) |
| 1 | (b) no guarantee, because the precondition was broken |
</details>

## Question 9 (comment syntax · stretch)

A student writes the following inside `main`, intending to comment out the three lines of code. The program does not compile.

```java nocompile
int total = 0;
/* Compute total
   /* inner note */
   total = 5;
*/
System.out.println(total);
```

(a) Explain why it does not compile.

(b) Show two different ways to comment out the section so that the program compiles and prints `0`.

<details>
<summary>Worked solution</summary>

**(a)** A block comment ends at the **first** `*/` it meets. The comment that starts with `/* Compute total` ends at the `*/` after `inner note`. The statement `total = 5;` is then ordinary code, which is fine on its own, but the final `*/` is outside any comment and is a syntax error: block comments do not nest.

**(b)** Remove the inner comment so that a single block comment covers everything: `/* Compute total inner note total = 5; */`. Or use `//` at the start of each line: `// Compute total`, `// inner note`, `// total = 5;`. Both leave only `int total = 0;` and the print statement, so the program prints 0.

**Suggested Marlbridge rubric (4 marks):**

| Mark | Awarded for |
|---|---|
| 1 | States that a block comment ends at the first `*/` |
| 1 | Identifies the leftover `*/` as a syntax error (block comments do not nest) |
| 1 | One correct fix |
| 1 | A second, different correct fix |
</details>

## How did you do?

- **Questions 1 to 3 and 9:** re-read "The three kinds of comment" in the [study guide](/advanced-course-resources/computer-science-a/1-8-documentation-comments-study-guide/).
- **Questions 4 to 6:** revisit "Documenting a method" and say aloud who is responsible for what.
- **Questions 7 and 8:** write pre- and postconditions for three methods of your own.

Then try the [checklist](/advanced-course-resources/computer-science-a/1-8-documentation-comments-checklist/).
