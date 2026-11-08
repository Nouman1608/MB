---
resourceId: "mb-ap-csa-1.11-practice"
title: "Math Class: Practice Questions (Computer Science A 1.11)"
description: "Ten original Marlbridge practice questions on Math.abs, Math.pow, Math.sqrt and Math.random, building expressions with them, and generating random numbers in a given range."
course: "computer-science-a"
unit: 1
topics: ["1.11"]
resourceType: "practice-questions"
prerequisites: ["The Topic 1.11 study guide"]
learningObjectives: ["Evaluate expressions using Math.abs, Math.pow and Math.sqrt and state the type of the result", "Write expressions that generate random ints and doubles in a stated range", "Identify the range of a given random expression and the effect of a misplaced cast", "Use Math methods inside a class method of your own"]
skills: ["2", "3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.11-study-guide", "mb-ap-csa-1.11-revision-notes", "mb-ap-csa-1.11-checklist"]
next: "mb-ap-csa-1.11-checklist"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["Questions 1 to 7 are multiple choice; 8 to 10 need written answers.", "Every answer explains why the wrong options are wrong.", "Rubrics are suggested Marlbridge rubrics, not official scoring."]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. All code is invented for these questions and was compiled and run before publication. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. No calculator is allowed on the exam, so work everything by hand. Code fragments are assumed to be inside a `main` method. `Math.random()` returns a `double` greater than or equal to 0.0 and less than 1.0.

## Question 1 (multiple choice · foundation)

Which statement about the `Math` class is true?

- (A) It must be imported with `import java.util.Math;` before it is used
- (B) You must write `Math m = new Math();` before calling `m.sqrt(16)`
- (C) It is in `java.lang`, so it is available by default, and its methods are class methods
- (D) It contains only instance methods

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `Math` is in `java.lang`, which is available by default, and it contains only class methods, called with `Math.` and the method name.

- (A) is wrong: no import is needed, and `Math` is not in `java.util`.
- (B) is wrong: you never create a `Math` object.
- (D) is wrong: every `Math` method in the course is a class method.
</details>

## Question 2 (multiple choice · foundation)

What is printed by `System.out.println(Math.abs(-7) + Math.abs(-2.5));`?

- (A) `9`
- (B) `9.5`
- (C) `-9.5`
- (D) `4.5`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `Math.abs(-7)` is the `int` 7 and `Math.abs(-2.5)` is the `double` 2.5. The sum, with a `double` operand, is the `double` 9.5.

- (A) drops the fractional part, as if the sum were an `int`.
- (C) forgets to take the absolute values.
- (D) subtracts: -7 + 2.5 is -4.5, whose absolute value is 4.5, not the same as adding the absolute values.
</details>

## Question 3 (multiple choice · core)

What are the value and type of `Math.pow(2, 5)`?

- (A) `32`, an `int`
- (B) `10`, an `int`
- (C) `25`, an `int`
- (D) `32.0`, a `double`

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** `pow` raises the first parameter to the power of the second and returns a `double`: 2 to the power 5 is 32.0.

- (A) has the right number but the wrong type; `pow` always returns a `double`.
- (B) multiplies 2 by 5.
- (C) raises 5 to the power 2, which reverses the base and exponent.
</details>

## Question 4 (multiple choice · core)

What is printed by the following statement?

```java
System.out.println(Math.sqrt(Math.pow(6, 2) + Math.pow(8, 2)));
```

- (A) `10.0`
- (B) `14.0`
- (C) `10`
- (D) `100.0`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `Math.pow(6, 2)` is 36.0, `Math.pow(8, 2)` is 64.0, the sum is 100.0, and its square root is 10.0.

- (B) adds 6 and 8 without squaring them.
- (C) has the right value but the wrong type; `sqrt` returns a `double`, which prints with a decimal point.
- (D) forgets to take the square root.
</details>

## Question 5 (multiple choice · core)

Which expression produces a random `int` from 1 to 6, **both inclusive**?

- (A) `(int) (Math.random() * 6) + 1`
- (B) `(int) (Math.random() * 6)`
- (C) `(int) (Math.random() * 7)`
- (D) `(int) Math.random() * 6 + 1`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `Math.random() * 6` is from 0.0 up to but not including 6.0; the cast gives 0 to 5; adding 1 gives 1 to 6.

- (B) gives 0 to 5.
- (C) gives 0 to 6, which is seven values.
- (D) has the cast on `Math.random()` alone, so it is `0 * 6 + 1`, always 1.
</details>

## Question 6 (multiple choice · core)

What is the range of possible values of the following expression?

```java
int n = (int) (Math.random() * 10 + 5);
```

- (A) 0 to 9
- (B) 5 to 15, both inclusive
- (C) 5 to 14, both inclusive
- (D) 5 to 10, both inclusive

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `Math.random() * 10 + 5` is from 5.0 up to but not including 15.0. Truncating by the cast gives the integers 5 to 14.

- (A) ignores the shift of 5.
- (B) includes 15, which would need the value 15.0, never reached.
- (D) confuses the multiplier 10 with the number of values counted from 5.
</details>

## Question 7 (multiple choice · stretch)

What value is stored in `roll` by the following statement?

```java
int roll = (int) Math.random() * 6 + 1;
```

- (A) A random integer from 1 to 6
- (B) A random integer from 0 to 5
- (C) The expression does not compile
- (D) Always 1

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The cast has higher precedence than `*`, so it applies to `Math.random()` alone. A value from 0.0 up to but not including 1.0 truncates to 0. Then `0 * 6 + 1` is always 1.

- (A) and (B) assume the cast applies to the whole product.
- (C) is wrong: the expression compiles, which is why the bug is easy to miss.
</details>

## Question 8 (writing expressions · core)

Write an expression for each of the following, and test it using the smallest and largest possible values of `Math.random()` (0.0 and just under 1.0).

(a) a random `int` from 20 to 30, both inclusive

(b) a random `double` that is at least 0.5 and less than 2.5

<details>
<summary>Worked solution</summary>

**(a)** There are 30 - 20 + 1 = 11 values, so `(int) (Math.random() * 11) + 20`. With `Math.random()` equal to 0.0: `0.0 * 11` is 0.0, the cast gives 0, and the result is 20. With 0.999: `0.999 * 11` is 10.989, the cast gives 10, and the result is 30. So the range is 20 to 30 inclusive.

**(b)** The width is 2.5 - 0.5 = 2, so `Math.random() * 2 + 0.5`. With 0.0 the result is 0.5 (included). With a value just below 1.0 the result is just below 2.5, and 2.5 is never reached (excluded).

**Suggested Marlbridge rubric (5 marks):**

| Mark | Awarded for |
|---|---|
| 1 | (a) multiplier 11 (the count of values) |
| 1 | (a) cast applied to the whole product and a shift of 20 |
| 1 | (a) test of both extremes giving 20 and 30 |
| 1 | (b) multiplier 2 and shift 0.5, with no cast |
| 1 | (b) states that 0.5 can occur and 2.5 cannot |
</details>

## Question 9 (a class method · core)

(a) Write a class method `distance` that takes four `int` parameters `x1`, `y1`, `x2`, `y2` and returns the distance between the points (x1, y1) and (x2, y2) as a `double`, using `Math.pow` and `Math.sqrt`.

(b) Write a call to it for the points (1, 2) and (4, 6), and state the value.

<details>
<summary>Worked solution</summary>

```java
public class Points {
    public static double distance(int x1, int y1, int x2, int y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    public static void main(String[] args) {
        System.out.println(distance(1, 2, 4, 6));
    }
}
```

```text
5.0
```

The differences are 4 - 1 = 3 and 6 - 2 = 4. Squared: 9.0 and 16.0. The sum is 25.0 and its square root is 5.0.

**Suggested Marlbridge rubric (5 marks):**

| Mark | Awarded for |
|---|---|
| 1 | Header: `static`, return type `double`, four `int` parameters |
| 1 | Differences of the coordinates computed correctly |
| 1 | Squares with `Math.pow(..., 2)` |
| 1 | `Math.sqrt` of the sum, returned |
| 1 | Call with (1, 2, 4, 6) and the value 5.0 |
</details>

## Question 10 (tracing with chosen values · stretch)

The following helper turns a value `r` (standing in for `Math.random()`) into an integer from `low` to `high` inclusive.

```java
public class Scaler {
    public static int scale(double r, int low, int high) {
        return (int) (r * (high - low + 1)) + low;
    }

    public static void main(String[] args) {
        System.out.println(scale(0.0, 3, 8));
        System.out.println(scale(0.34, 3, 8));
        System.out.println(scale(0.5, 3, 8));
        System.out.println(scale(0.84, 3, 8));
        System.out.println(scale(0.999, 3, 8));
    }
}
```

(a) State the five values printed.

(b) Explain why no value of `r` from 0.0 up to but not including 1.0 can make `scale(r, 3, 8)` return 9.

<details>
<summary>Worked solution</summary>

**(a)** The count of values is 8 - 3 + 1 = 6. Then: 0.0 gives (int) 0.0 = 0, so 3; 0.34 gives (int) 2.04 = 2, so 5; 0.5 gives (int) 3.0 = 3, so 6; 0.84 gives (int) 5.04 = 5, so 8; 0.999 gives (int) 5.994 = 5, so 8.

```text
3
5
6
8
8
```

**(b)** To return 9, the product `r * 6` would have to reach 6.0, which needs `r` to be 1.0 or more. `Math.random()` is always less than 1.0, so `r * 6` is below 6.0 and truncates to at most 5; the largest result is 5 + 3 = 8.

**Suggested Marlbridge rubric (4 marks):**

| Mark | Awarded for |
|---|---|
| 1 | Correct count of values (6) used in the working |
| 1 | First three values 3, 5, 6 |
| 1 | Last two values 8 and 8 |
| 1 | Explanation based on `r` being less than 1.0 so the product is below 6.0 |
</details>

## How did you do?

- **Questions 1 to 4:** re-read "A toolbox of mathematical class methods" in the [study guide](/advanced-course-resources/computer-science-a/1-11-math-class-study-guide/) and the table of return types.
- **Questions 5 to 8:** re-read "The general recipe", and always test the smallest and largest possible values.
- **Question 7:** mark exactly how far each cast reaches with brackets.
- **Questions 9 and 10:** trace each call line by line.

Then try the [checklist](/advanced-course-resources/computer-science-a/1-11-math-class-checklist/).
