---
resourceId: "mb-ap-csa-1.2-practice"
title: "Variables and Data Types: Practice Questions (Computer Science A 1.2)"
description: "Nine original Marlbridge practice questions on data types, int, double, boolean and String, declaring variables, and predicting values, with explanations and rubrics."
course: "computer-science-a"
unit: 1
topics: ["1.2"]
resourceType: "practice-questions"
prerequisites: ["The Topic 1.2 study guide"]
learningObjectives: ["Choose the appropriate data type for described data", "Decide whether a variable declaration compiles and explain why", "Trace variable values through a short sequence of declarations and assignments", "Explain that each primitive variable holds its own copy of a value"]
skills: ["2", "3"]
studyMinutes: 40
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.2-study-guide", "mb-ap-csa-1.2-revision-notes", "mb-ap-csa-1.2-checklist"]
next: "mb-ap-csa-1.2-checklist"
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

Which of the following is a **primitive** data type in this course?

- (A) `String`
- (B) `Scanner`
- (C) `boolean`
- (D) `Object`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `boolean` is one of the three primitive types in the course, with `int` and `double`.

- (A) `String` is a class, so it is a reference type.
- (B) `Scanner` is also a class, hence a reference type.
- (D) `Object` is a class too; every class in Java is a subclass of it.
</details>

## Question 2 (multiple choice · foundation)

A program stores the length of a rope in metres, which was measured as 3.75. Which declaration is appropriate?

- (A) `double length = 3.75;`
- (B) `int length = 3.75;`
- (C) `boolean length = 3.75;`
- (D) `String length = 3.75;`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** A measurement with a fractional part is a real number, so `double` is the appropriate type, and `3.75` is a `double` value.

- (B) does not compile. A `double` cannot be stored in an `int` variable (`possible lossy conversion from double to int`).
- (C) does not compile. A number is not a `boolean`, which holds only `true` or `false`.
- (D) does not compile. A `String` value must be written in double quotes, and `3.75` is a number, not text.
</details>

## Question 3 (multiple choice · core)

Which declaration will compile?

- (A) `int 3rdPlace = 3;`
- (B) `double ratio = "2.5";`
- (C) `boolean ready = true;`
- (D) `int value = 8.0;`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `true` is a `boolean` value and `ready` is a legal name.

- (A) fails because an identifier cannot begin with a digit.
- (B) fails because `"2.5"` is a `String`, not a number. Quotes make it text.
- (D) fails because `8.0` is a `double`, and storing it in an `int` could lose information. The compiler rejects it even though the fractional part is zero.
</details>

## Question 4 (multiple choice · core)

What is printed by the following code segment?

```java
int a = 6;
double b = a;
a = 10;
System.out.println(a + " " + b);
```

- (A) `10 10.0`
- (B) `6 6.0`
- (C) `10 6`
- (D) `10 6.0`

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** `b = a` copies the value 6 into `b` as the `double` 6.0. Changing `a` afterwards to 10 does not change `b`, which has its own box. `a` is an `int`, so it prints as `10`, and `b` is a `double`, so it prints as `6.0`.

- (A) assumes that `b` follows `a`. Variables are not linked.
- (B) assumes that the assignment `a = 10` had no effect on `a`.
- (C) forgets that a `double` prints with a decimal point; `b` is `6.0`, not `6`.
</details>

## Question 5 (multiple choice · core)

What value does `avg` hold after this declaration?

```java
double avg = 7 / 2;
```

- (A) `3.5`
- (B) `3.0`
- (C) `4.0`
- (D) Nothing: the statement does not compile

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Both operands of `7 / 2` are `int` values, so the division is integer division. Only the integer part of the quotient, 3, is kept. That `int` 3 is then stored in a `double` variable as `3.0`.

- (A) would need at least one operand to be a `double`, as in `7 / 2.0`.
- (C) rounds the 3.5 up. Integer division truncates; it does not round.
- (D) is wrong because an `int` value can be stored in a `double` variable.
</details>

## Question 6 (multiple choice · core)

What is printed by the code segment below?

```java
int total = 5;
int Total = 9;
System.out.println(total);
```

- (A) `5`
- (B) `9`
- (C) Nothing: it will not compile because the two names clash
- (D) `14`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Java is case-sensitive, so `total` and `Total` are different variables. The statement prints the value of `total`, which is 5.

- (B) prints the value of `Total` instead.
- (C) assumes that the names are the same, but they differ in capitalisation.
- (D) adds the two variables, but the code never does that.
</details>

## Question 7 (choosing types · core)

A theatre program stores these items for each booking. For each, give the most appropriate type from `int`, `double`, `boolean` or `String`, and write a declaration with a sensible initial value.

(a) the number of tickets booked
(b) the price of one ticket, in pounds and pence (such as 12.50)
(c) whether the customer asked for a seat with extra leg room
(d) the customer's surname
(e) the percentage discount, which can be a decimal such as 7.5

<details>
<summary>Worked solution</summary>

```java
int tickets = 4;
double ticketPrice = 12.50;
boolean extraLegRoom = true;
String surname = "Okafor";
double discountPercent = 7.5;
```

- (a) `int`: tickets are counted, so the value is a whole number.
- (b) `double`: prices have a fractional part.
- (c) `boolean`: the answer is yes or no.
- (d) `String`: text. It is a reference type, so the value is written in double quotes.
- (e) `double`: the value can have a fractional part such as 7.5.

**Suggested Marlbridge rubric (5 marks):** one mark for each of (a) to (e): correct type chosen **and** a declaration that compiles (valid name, matching value, quotes on the `String`).
</details>

## Question 8 (finding declaration errors · core)

Each line below is a separate attempt at a declaration. Each contains one mistake. Say what is wrong and write a corrected line.

```java nocompile
int 1stPrize = 500;
double price = "9.99";
boolean open = yes;
int seats = 40.0;
String city = Lahore;
```

<details>
<summary>Worked solution</summary>

| Line | What is wrong | Corrected line |
|---|---|---|
| `int 1stPrize = 500;` | The name starts with a digit | `int firstPrize = 500;` |
| `double price = "9.99";` | `"9.99"` is a `String`, not a number | `double price = 9.99;` |
| `boolean open = yes;` | `yes` is not a `boolean` value; the only values are `true` and `false` | `boolean open = true;` |
| `int seats = 40.0;` | A `double` value cannot be stored in an `int` | `int seats = 40;` |
| `String city = Lahore;` | A `String` value needs double quotes; without them `Lahore` is read as a variable name | `String city = "Lahore";` |

**Suggested Marlbridge rubric (5 marks):** one mark per line for naming the problem correctly **and** giving a corrected declaration that compiles. (Accept any valid alternative, such as `double seats = 40.0;`.)
</details>

## Question 9 (tracing · stretch)

Consider the code segment:

```java
int p = 4;
int q = p;
p = 9;
int r = q + p;
double s = r;
System.out.println(p + " " + q + " " + r + " " + s);
```

(a) Complete a trace table that shows the value of every variable after each statement.

(b) State the output.

(c) Explain why `q` is still 4 after `p = 9;`.

<details>
<summary>Worked solution</summary>

**(a)**

| After statement | p | q | r | s |
|---|---|---|---|---|
| `int p = 4;` | 4 | - | - | - |
| `int q = p;` | 4 | 4 | - | - |
| `p = 9;` | 9 | 4 | - | - |
| `int r = q + p;` | 9 | 4 | 13 | - |
| `double s = r;` | 9 | 4 | 13 | 13.0 |

**(b)** The output is `9 4 13 13.0`.

**(c)** When `int q = p;` ran, `q` received a **copy** of the value 4. A variable of a primitive type holds its own value, so later changing `p` does not affect `q`.

**Suggested Marlbridge rubric (6 marks):**

| Mark | Awarded for |
|---|---|
| 1 | Rows for `p` and `q` correct (including `q` staying 4) |
| 1 | `p` becomes 9 on the third row |
| 1 | `r` is 13 (4 + 9) |
| 1 | `s` is 13.0 (a `double`) |
| 1 | Output `9 4 13 13.0` with `13.0` showing the decimal point |
| 1 | Explanation that `q` holds its own copy of the value |
</details>

## How did you do?

- **Questions 1 to 3:** re-read "Storing information needs a plan" and the declaration tables in the [study guide](/advanced-course-resources/computer-science-a/1-2-variables-data-types-study-guide/).
- **Questions 4, 6 and 9:** trace with a table and remember that each primitive variable is a separate box.
- **Question 5:** remember that division of two `int` values gives an `int`; Topic 1.3 covers this in full.
- **Questions 7 and 8:** write five declarations of your own, deliberately break each one, and note the compiler message.

Then try the [checklist](/advanced-course-resources/computer-science-a/1-2-variables-data-types-checklist/).
