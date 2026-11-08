---
resourceId: "mb-ap-csa-1.7-practice"
title: "Application Program Interface (API) and Libraries: Practice Questions (Computer Science A 1.7)"
description: "Ten original Marlbridge practice questions on libraries, packages, API documentation, attributes and behaviors, and using Math and String methods from their documentation."
course: "computer-science-a"
unit: 1
topics: ["1.7"]
resourceType: "practice-questions"
prerequisites: ["The Topic 1.7 study guide"]
learningObjectives: ["Define library, package, class and API specification in context", "Read a method entry and decide which call is valid", "Classify features of a class as attributes or behaviors", "Predict the results of Math and String method calls described in the documentation"]
skills: ["3", "4"]
studyMinutes: 40
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.7-study-guide", "mb-ap-csa-1.7-revision-notes", "mb-ap-csa-1.7-checklist"]
next: "mb-ap-csa-1.7-checklist"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["Questions 1 to 6 and 10 are multiple choice; 7 to 9 need written answers.", "Every answer explains why the wrong options are wrong.", "Rubrics are suggested Marlbridge rubrics, not official scoring."]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. All code is invented for these questions and was compiled and run before publication. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. No calculator is allowed on the exam, so work everything by hand. Code fragments are assumed to be inside a `main` method.

Library entries used below (as in the Java Quick Reference): `static double sqrt(double x)` returns the nonnegative square root of a `double` value; `static double pow(double base, double exponent)` returns the value of the first parameter raised to the power of the second; `int length()` returns the number of characters in a `String`; `String substring(int from, int to)` returns the substring beginning at index `from` and ending at index `to - 1`; `String substring(int from)` returns `substring(from, length())`; `int indexOf(String str)` returns the index of the first occurrence of `str`, or -1 if not found.

## Question 1 (multiple choice · foundation)

Which statement best describes an **application programming interface (API) specification**?

- (A) The compiler that translates Java code into a runnable program
- (B) A collection of ready-made classes
- (C) A variable that stores data about a class
- (D) Documentation that informs the programmer how to use the classes in a library

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The specification is the documentation: it tells the programmer what each class and method is called, what it needs and what it does.

- (A) describes a compiler, which checks code and prepares it to run.
- (B) describes a library, the collection itself, not its documentation.
- (C) describes an attribute.
</details>

## Question 2 (multiple choice · foundation)

Classes in which of the following packages are available to every program **by default**, without an import?

- (A) `java.util`
- (B) `java.lang`
- (C) Any package that contains a class you have used before
- (D) Only packages whose names begin with `java`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Classes in the `java.lang` package, such as `String`, `Math` and `Integer`, are available by default.

- (A) `java.util` contains `Scanner` and `ArrayList`, which need an import.
- (C) Using a class before does not change how it is found; the import rule applies each time.
- (D) is wrong: `java.util` begins with `java` too but is not available by default.
</details>

## Question 3 (multiple choice · core)

Which of the following is a **behavior** of the `String` class?

- (A) The sequence of characters a `String` object holds
- (B) The name of the variable that refers to the string
- (C) A method that returns the number of characters in the string
- (D) The package that the class belongs to

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `length()` is a method, and methods define behaviors: what objects can do or what can be done with them.

- (A) is the attribute: the data related to the class.
- (B) is just a variable name in your program; it is not part of the class.
- (D) describes where the class is stored, not what it does.
</details>

## Question 4 (multiple choice · core)

Using the entry `static double sqrt(double x)`, which of the following statements compiles, assuming `Math` is the class that holds `sqrt`?

- (A) `int r = Math.sqrt(16);`
- (B) `double r = Math.sqrt(16, 2);`
- (C) `double r = Math.sqrt(16);`
- (D) `double r = sqrt(16);`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `sqrt` takes one `double` parameter and returns a `double`. The `int` argument 16 is converted automatically, and the returned 4.0 can be stored in a `double`.

- (A) stores a `double` in an `int`; the return type is `double`, so the compiler rejects it.
- (B) supplies two arguments, but the parameter list has one.
- (D) leaves out the class name. A class method is called through its class (Topic 1.10), so the compiler cannot find a method called `sqrt` here.
</details>

## Question 5 (multiple choice · core)

What is displayed by the following statement?

```java
System.out.println("computer".indexOf("pu") + "computer".indexOf("z"));
```

- (A) `3`
- (B) `2`
- (C) `4`
- (D) `-1`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The letters are c(0) o(1) m(2) p(3) u(4) t(5) e(6) r(7), so `"pu"` first occurs at index 3. There is no "z", so `indexOf("z")` returns -1. The sum is 3 + (-1) = 2.

- (A) forgets the second call.
- (C) treats the not-found result as +1.
- (D) forgets the first call.
</details>

## Question 6 (multiple choice · core)

What is the value of `"programming".substring(3, 7)`?

- (A) `"ogra"`
- (B) `"gramm"`
- (C) `"rogr"`
- (D) `"gram"`

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The letters are p(0) r(1) o(2) g(3) r(4) a(5) m(6) m(7) i(8) n(9) g(10). The substring begins at index 3 and ends at index 6 (`to - 1`), giving g, r, a, m.

- (A) starts one index too early (index 2).
- (B) includes index 7, as if `to` were included.
- (C) starts at index 1 instead of 3.
</details>

## Question 7 (attributes and behaviors · core)

A programmer designs a class `Thermostat`. For each item, say whether it is an **attribute** or a **behavior**, and say how it would be represented in the code (a variable or a method).

(a) the current temperature
(b) the target temperature
(c) raising the target temperature by one degree
(d) reporting whether the heating is on

<details>
<summary>Worked solution</summary>

| Item | Attribute or behavior | Represented by |
|---|---|---|
| (a) current temperature | attribute | a variable that stores a number |
| (b) target temperature | attribute | a variable that stores a number |
| (c) raise the target by one degree | behavior | a method |
| (d) report whether the heating is on | behavior | a method (one that returns a `boolean`) |

Attributes are the data related to the class, stored in variables; behaviors are what an instance can do, or what can be done with it, defined by methods.

**Suggested Marlbridge rubric (4 marks):** one mark for each item correctly classified **with** the matching representation.
</details>

## Question 8 (reading entries · core)

Using the `Math` entries for `pow` and `sqrt` given above:

(a) Write one statement that stores 2^5 + the square root of 81 in a `double` variable `total`, and give the value.

(b) A student writes `int p = Math.pow(2, 5);`. Explain the compile-time error and give two different corrections.

<details>
<summary>Worked solution</summary>

**(a)** `double total = Math.pow(2, 5) + Math.sqrt(81);` `Math.pow(2, 5)` returns 32.0 and `Math.sqrt(81)` returns 9.0, so `total` is **41.0**.

**(b)** `pow` returns a `double`, and a `double` cannot be stored in an `int` variable: the compiler reports a possible lossy conversion. Corrections: cast the result, `int p = (int) Math.pow(2, 5);` (32), or declare the variable as a `double`, `double p = Math.pow(2, 5);` (32.0).

**Suggested Marlbridge rubric (5 marks):**

| Mark | Awarded for |
|---|---|
| 1 | `Math.pow(2, 5)` with arguments in the right order |
| 1 | `Math.sqrt(81)` called correctly |
| 1 | Value 41.0 |
| 1 | Explains that `pow` returns a `double` that cannot be stored in an `int` |
| 1 | Gives a valid correction (a cast or a `double` variable) |
</details>

## Question 9 (packages and imports · stretch)

A program contains the line `Scanner in = new Scanner(System.in);` but no `import` line, and the compiler reports "cannot find symbol".

(a) Explain why this error appears.

(b) For each of the classes `String`, `Math`, `Scanner` and `ArrayList`, say whether an import is needed, giving the package.

(c) A student says: "Libraries are the instructions for how to use classes." Correct the statement.

<details>
<summary>Worked solution</summary>

**(a)** `Scanner` is in the `java.util` package, which is not available by default. Without an import the compiler does not know where to find the class named `Scanner`.

**(b)** `String` (`java.lang`): no import. `Math` (`java.lang`): no import. `Scanner` (`java.util`): import needed. `ArrayList` (`java.util`): import needed.

**(c)** A library is a collection of classes. The instructions for using them are the API specification, the documentation.

**Suggested Marlbridge rubric (5 marks):**

| Mark | Awarded for |
|---|---|
| 1 | Cause: `Scanner` is in a package that is not available by default |
| 1 | `String` and `Math`: no import, `java.lang` |
| 1 | `Scanner` and `ArrayList`: import needed, `java.util` |
| 1 | Library = collection of classes |
| 1 | API specification = documentation on how to use them |
</details>

## Question 10 (multiple choice · stretch)

Two entries appear in the documentation: `String substring(int from, int to)` and `String substring(int from)`. The second returns `substring(from, length())`. What is the value of `"classroom".substring(5)`?

- (A) `"room"`
- (B) `"oom"`
- (C) `"class"`
- (D) `"classroo"`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The letters are c(0) l(1) a(2) s(3) s(4) r(5) o(6) o(7) m(8), and the string has length 9. `substring(5)` is `substring(5, 9)`, which runs from index 5 to index 8: r, o, o, m.

- (B) starts at index 6.
- (C) is `substring(0, 5)`, the part before index 5, not the part from it.
- (D) stops one character early and starts at index 0.
</details>

## How did you do?

- **Questions 1 to 3:** re-read "Why use code that someone else wrote?" and "Attributes and behaviors" in the [study guide](/advanced-course-resources/computer-science-a/1-7-api-libraries-study-guide/).
- **Questions 4, 8 and 9:** reread "Reading API documentation" and "Using classes from a library". Check types and the number of parameters before writing a call.
- **Questions 5, 6 and 10:** write the indices under the string, then apply the entry.
- **Question 7:** invent two more classes and sort their features.

Then try the [checklist](/advanced-course-resources/computer-science-a/1-7-api-libraries-checklist/).
