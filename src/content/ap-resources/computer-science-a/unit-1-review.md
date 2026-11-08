---
resourceId: "mb-ap-csa-u1-review"
title: "Using Objects and Methods: Mixed Unit Review (Computer Science A Unit 1)"
description: "Big ideas, a one-table method summary and seven original exam-style questions that each combine two or more Unit 1 topics, with worked solutions and suggested rubrics."
course: "computer-science-a"
unit: 1
topics: []
resourceType: "unit-review"
prerequisites: ["You have studied Topics 1.1 to 1.15", "You have tried the Unit 1 diagnostic and closed any gaps it showed"]
prerequisiteResources: ["mb-ap-csa-u1-diagnostic"]
learningObjectives: ["Connect the ideas of Unit 1: expressions, assignment, methods, objects and strings", "Choose the right tool (cast, Math method, constructor, String method) for a given task", "Answer multi-part questions that combine several Unit 1 topics", "Trace, write and debug short code with full justification"]
skills: ["1", "2", "3", "4"]
studyMinutes: 70
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-u1-diagnostic", "mb-ap-csa-1.1-checklist", "mb-ap-csa-1.2-checklist", "mb-ap-csa-1.3-checklist", "mb-ap-csa-1.4-checklist", "mb-ap-csa-1.5-checklist", "mb-ap-csa-1.6-checklist", "mb-ap-csa-1.7-checklist", "mb-ap-csa-1.8-checklist", "mb-ap-csa-1.9-checklist", "mb-ap-csa-1.10-checklist", "mb-ap-csa-1.11-checklist", "mb-ap-csa-1.12-checklist", "mb-ap-csa-1.13-checklist", "mb-ap-csa-1.14-checklist", "mb-ap-csa-1.15-checklist"]
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["Types decide results: the type of each operation is fixed by its operands, so integer division and casts must be traced one operation at a time.", "Primitive variables hold values and are copied by value; reference variables hold object references, so two names can refer to one object.", "A method is used through its signature and documentation: match the number, order and types of the arguments, and use the return value correctly.", "Strings are immutable and indexed from 0; every String method returns a new value.", "The compiler finds syntax errors; testing finds logic errors; run-time errors, such as exceptions, appear when the program runs."]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

Read the big ideas and the method table, then try the seven questions without notes. Each question combines two or more Unit 1 topics.

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a **suggested Marlbridge rubric**, not official scoring. No calculator is allowed on the exam, so work by hand. Code fragments are assumed to be inside a `main` method.

## Big ideas of the unit

- **Programs are sequences of statements that run in order** ([1.1](/advanced-course-resources/computer-science-a/1-1-algorithms-programming-compilers-study-guide/)). Order matters, and errors come in three kinds: syntax (compiler), logic (testing) and run-time (while running).
- **Every value has a type.** `int`, `double` and `boolean` are primitive; classes such as `String` are reference types ([1.2](/advanced-course-resources/computer-science-a/1-2-variables-data-types-study-guide/)). The compiler checks that types fit.
- **Expressions are evaluated one operation at a time** with precedence and left-to-right order ([1.3](/advanced-course-resources/computer-science-a/1-3-expressions-output-study-guide/)). Two `int` operands give an `int`; a `double` operand gives a `double`. Casting and range matter ([1.5](/advanced-course-resources/computer-science-a/1-5-casting-range-study-guide/)).
- **Assignment stores the value of the right side in the left variable** ([1.4](/advanced-course-resources/computer-science-a/1-4-assignment-input-study-guide/), [1.6](/advanced-course-resources/computer-science-a/1-6-compound-assignment-study-guide/)). Primitive assignment copies a value.
- **Libraries, documentation and contracts** let you use code you did not write ([1.7](/advanced-course-resources/computer-science-a/1-7-api-libraries-study-guide/), [1.8](/advanced-course-resources/computer-science-a/1-8-documentation-comments-study-guide/)). Preconditions are the caller's job; postconditions are the method's promise.
- **Methods have signatures** ([1.9](/advanced-course-resources/computer-science-a/1-9-method-signatures-study-guide/)). Class methods are called with the class name ([1.10](/advanced-course-resources/computer-science-a/1-10-calling-class-methods-study-guide/), [1.11](/advanced-course-resources/computer-science-a/1-11-math-class-study-guide/)); arguments are passed by value.
- **Objects are instances of classes, created by constructors** ([1.12](/advanced-course-resources/computer-science-a/1-12-objects-instances-classes-study-guide/), [1.13](/advanced-course-resources/computer-science-a/1-13-object-creation-storage-study-guide/)). A reference variable holds a reference or `null`; instance methods are called on objects ([1.14](/advanced-course-resources/computer-science-a/1-14-calling-instance-methods-study-guide/)).
- **Strings are immutable objects** ([1.15](/advanced-course-resources/computer-science-a/1-15-string-manipulation-study-guide/)). Indices start at 0, `substring(from, to)` excludes `to`, and `equals` compares content.

## One-table method summary

| Task | Tool | Remember |
|---|---|---|
| Split into whole groups and a remainder | `/` and `%` | `/` truncates for `int` operands |
| Keep a fraction in a division | `(double) a / b` or `a / 2.0` | the cast must come before the division |
| Round a non-negative `double` | `(int) (x + 0.5)` | negative: `(int) (x - 0.5)` |
| Update a variable from itself | `x += e;` `x++;` | the whole right side is evaluated first |
| Absolute value, power, root | `Math.abs`, `Math.pow`, `Math.sqrt` | `pow` and `sqrt` return `double` |
| Random `int` from `low` to `high` inclusive | `(int) (Math.random() * (high - low + 1)) + low` | the cast covers the whole product |
| Create an object | `new ClassName(args)` | arguments select the constructor |
| Call a class method | `ClassName.method(args)` | name optional inside the defining class |
| Call an instance method | `object.method(args)` | `null` object gives `NullPointerException` |
| Part of a string | `substring(from, to)` | `to` is excluded; legal range is 0 to `length()` |
| Find text in a string | `indexOf(str)` | `-1` when not found |
| Compare strings | `equals`, `compareTo` | `compareTo` only guarantees its sign |

The classes used in Question 5.

```java
class Rectangle {
    private int width;
    private int height;

    public Rectangle(int w, int h) {
        width = w;
        height = h;
    }

    public int area() {
        return width * height;
    }

    public int perimeter() {
        return 2 * (width + height);
    }

    public void grow(int amount) {
        width = width + amount;
        height = height + amount;
    }

    public String describe() {
        return width + " x " + height;
    }
}
```

## Question 1 (multiple choice · 1.2, 1.3, 1.5)

What value is stored in `r` by the following statement?

```java
double r = (double) 7 / 2 + 7 / 2;
```

- (A) `7.0`
- (B) `6.5`
- (C) `6.0`
- (D) `7.5`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The cast applies to 7 alone, so `(double) 7 / 2` is 7.0 / 2 = 3.5. The other division, `7 / 2`, has two `int` operands, so it is 3. The sum is 3.5 + 3 = 6.5.

- (A) makes both divisions real divisions (3.5 + 3.5).
- (C) makes both divisions integer divisions (3 + 3), forgetting the cast.
- (D) treats the second division as real (3.5) and the first as 4.
</details>

## Question 2 (splitting a quantity · 1.3, 1.4, 1.6)

A program stores 200000 seconds in an `int` variable `t`. Using `/` and `%=` only, write statements that store the whole days, whole hours, whole minutes and remaining seconds in `days`, `hours`, `mins` and `t`, and display them in the form `2 d 7 h 33 min 20 s` for this data. (A day has 86400 seconds.)

<details>
<summary>Worked solution</summary>

```java
int t = 200000;
int days = t / 86400;
t %= 86400;
int hours = t / 3600;
t %= 3600;
int mins = t / 60;
t %= 60;
System.out.println(days + " d " + hours + " h " + mins + " min " + t + " s");
```

```text
2 d 7 h 33 min 20 s
```

Working: 200000 / 86400 is 2 (172800), leaving 27200. Then 27200 / 3600 is 7 (25200), leaving 2000. Then 2000 / 60 is 33 (1980), leaving 20. Check: 2 * 86400 + 7 * 3600 + 33 * 60 + 20 = 172800 + 25200 + 1980 + 20 = 200000.

**Suggested Marlbridge rubric (5 marks):**

| Mark | Awarded for |
|---|---|
| 1 | Days found with integer division by 86400 (value 2) |
| 1 | `t %= 86400;` applied **after** days are taken, leaving 27200 |
| 1 | Hours 7, with `t %= 3600;` leaving 2000 |
| 1 | Minutes 33, with `t %= 60;` leaving 20 |
| 1 | Output line correct, with the text and values joined in the right order |
</details>

## Question 3 (methods and contracts · 1.8, 1.9, 1.10)

The class `Digits` below has two class methods. The first one has a Javadoc comment.

```java
class Digits {
    /**
     * Returns the last two digits of n.
     * Precondition: n >= 0
     * Postcondition: the value returned is from 0 to 99 inclusive
     */
    public static int lastTwoDigits(int n) {
        n = n % 100;
        return n;
    }

    public static int bump(int n) {
        n++;
        return n;
    }
}
```

In a different class:

```java
int v = 12345;
int w = Digits.lastTwoDigits(v);
int z = Digits.bump(w) + Digits.lastTwoDigits(v + 55);
System.out.println(v + " " + w + " " + z);
```

(a) State the signature of `lastTwoDigits` and say who is responsible for the precondition.

(b) State the output, showing the value of each call.

(c) Explain why `v` is still 12345 even though `lastTwoDigits` assigns to its parameter.

<details>
<summary>Worked solution</summary>

**(a)** The signature is `lastTwoDigits(int)`. The **caller** is responsible for the precondition `n >= 0`; the method is not expected to check it.

**(b)** `Digits.lastTwoDigits(v)` is 12345 % 100 = 45, so `w` is 45. `Digits.bump(w)` returns 46. `v + 55` is 12400, and `Digits.lastTwoDigits(12400)` is 0. So `z` is 46 + 0 = 46.

```text
12345 45 46
```

**(c)** Arguments are passed by value: the parameter `n` is a **copy** of `v`'s value. Changing the copy inside the method does not change `v`.

**Suggested Marlbridge rubric (6 marks):**

| Mark | Awarded for |
|---|---|
| 1 | Signature `lastTwoDigits(int)` |
| 1 | The caller is responsible for the precondition |
| 1 | `w` is 45 |
| 1 | `z` is 46 (calls evaluated left to right: 46 and 0) |
| 1 | Output `12345 45 46` |
| 1 | Call by value: the parameter is a copy, so `v` is unchanged |
</details>

## Question 4 (random numbers and rounding · 1.5, 1.11)

(a) Write an expression for a random `int` from -5 to 5, both inclusive, and test it with the smallest and largest possible values of `Math.random()`.

(b) Write an expression for a random `double` that is at least 20.0 and less than 30.0.

(c) A student scored 7 out of 8. Write one expression that gives the percentage rounded to the nearest whole number as an `int`, and state its value.

<details>
<summary>Worked solution</summary>

**(a)** There are 5 - (-5) + 1 = 11 values, so `(int) (Math.random() * 11) - 5`. With `Math.random()` equal to 0.0 the cast gives 0 and the result is -5. With 0.999 the product is 10.989, the cast gives 10, and the result is 5. So the range is -5 to 5.

**(b)** The width is 10 and the shift is 20: `Math.random() * 10 + 20`. 20.0 can occur; 30.0 cannot.

**(c)** `(int) (100.0 * 7 / 8 + 0.5)`. `100.0 * 7` is 700.0; divided by 8 it is 87.5; adding 0.5 gives 88.0; the cast gives **88**.

**Suggested Marlbridge rubric (6 marks):**

| Mark | Awarded for |
|---|---|
| 1 | (a) multiplier 11 and a cast covering the whole product |
| 1 | (a) shift of -5 with both extremes tested (-5 and 5) |
| 1 | (b) `Math.random() * 10 + 20` with no cast |
| 1 | (b) 20.0 inclusive, 30.0 exclusive |
| 1 | (c) a `double` division (the `100.0` or a cast placed before the division) |
| 1 | (c) `+ 0.5`, the cast to `int`, and the value 88 |
</details>

## Question 5 (objects and references · 1.12, 1.13, 1.14)

Using the `Rectangle` class above, trace the code and state the output of each `println`.

```java
Rectangle a = new Rectangle(2, 5);
Rectangle b = a;
Rectangle c = new Rectangle(3, 3);
b.grow(1);
c.grow(1);
int s = a.area() + c.perimeter();
Rectangle d = null;
System.out.println(a.describe() + " " + b.describe() + " " + c.describe() + " " + s);
System.out.println(d.area());
```

(a) State the first line of output and the value of `s`.

(b) What happens at the last statement, and why does the compiler not report it?

(c) How many `Rectangle` objects were created?

<details>
<summary>Worked solution</summary>

**(a)** `a` and `b` refer to the **same** object, so `b.grow(1)` changes what `a` sees: 3 by 6. `c` is separate: 3 by 3 becomes 4 by 4. `a.area()` is 3 * 6 = 18 and `c.perimeter()` is 2 * (4 + 4) = 16, so `s` is 34. The first line is `3 x 6 3 x 6 4 x 4 34`.

**(b)** `d` holds `null`, so `d.area()` is a method call on a null reference, which throws a `NullPointerException` at run time. The compiler checks only that `Rectangle` has an `area()` method; it does not know what `d` will refer to.

**(c)** Two: `new Rectangle(2, 5)` and `new Rectangle(3, 3)`. The statements `Rectangle b = a;` and `Rectangle d = null;` create no object.

**Suggested Marlbridge rubric (6 marks):**

| Mark | Awarded for |
|---|---|
| 1 | `a` and `b` identified as the same object |
| 1 | `a` and `b` both 3 x 6; `c` is 4 x 4 |
| 1 | `s` is 34 |
| 1 | `NullPointerException` at the last statement |
| 1 | Reason: the compiler does not track which object a variable refers to |
| 1 | Two objects created |
</details>

## Question 6 (strings and parsing · 1.7, 1.9, 1.15)

The variable `date` holds `"2027-05-12"` (year, month, day, separated by hyphens).

(a) State `date.indexOf("-")` and `date.length()`.

(b) Write code that stores the year, month and day in `String` variables `year`, `month` and `day` using `substring`.

(c) Write a statement that displays `12/05/2027`.

(d) Using the `Integer.parseInt` entry from the Java Quick Reference (it returns the `String` argument as an `int`), write a statement that displays the year after `year`, and state the output.

<details>
<summary>Worked solution</summary>

The characters are 2(0) 0(1) 2(2) 7(3) -(4) 0(5) 5(6) -(7) 1(8) 2(9).

**(a)** `date.indexOf("-")` is **4** and `date.length()` is **10**.

**(b)**

```java
String date = "2027-05-12";
String year = date.substring(0, 4);
String month = date.substring(5, 7);
String day = date.substring(8);
System.out.println(day + "/" + month + "/" + year);
System.out.println(Integer.parseInt(year) + 1);
```

```text
12/05/2027
2028
```

**(c)** `System.out.println(day + "/" + month + "/" + year);` displays `12/05/2027`.

**(d)** `Integer.parseInt(year)` converts `"2027"` to the `int` 2027, so `Integer.parseInt(year) + 1` is the `int` 2028. Without `parseInt`, `year + 1` would be the `String` `"20271"`.

**Suggested Marlbridge rubric (6 marks):**

| Mark | Awarded for |
|---|---|
| 1 | (a) 4 and 10 |
| 1 | (b) `year` is `substring(0, 4)` |
| 1 | (b) `month` is `substring(5, 7)` (excludes index 7) |
| 1 | (b) `day` is `substring(8)` |
| 1 | (c) pieces joined in the order day, month, year with `/` |
| 1 | (d) `Integer.parseInt(year) + 1` displaying 2028 |
</details>

## Question 7 (finding and classifying errors · 1.1, 1.4, 1.9, 1.10)

The program below does not compile as written.

```java nocompile
public class Faulty {
    public static int square(int n) {
        return n * n;
    }

    public static void main(String[] args) {
        int side = 4;
        int area = Faulty.square(side)
        double ratio = 7 / 2;
        int zero = 0;
        System.out.println(area / zero);
    }
}
```

(a) Find the error that stops it compiling, say what kind it is and correct it.

(b) After the correction, the program compiles. State the value stored in `ratio`. If the programmer expected 3.5, what kind of error is this, and how would it be found?

(c) What happens when the last statement is executed? What kind of error is this?

<details>
<summary>Worked solution</summary>

**(a)** The statement `int area = Faulty.square(side)` is missing its semicolon. This is a **syntax error**, detected by the compiler. Correction: add `;` at the end of the line.

**(b)** `7 / 2` is integer division, so 3 is stored in `ratio` as 3.0. If 3.5 was expected, this is a **logic error**: the program compiles and runs but gives the wrong value. It is found by **testing** with data whose answer is known. Correction: `double ratio = 7 / 2.0;`.

**(c)** `area / zero` divides the `int` 16 by the `int` 0, so an `ArithmeticException` is thrown at run time and the program stops. This is a **run-time error**; the compiler cannot know the value of `zero`.

**Suggested Marlbridge rubric (6 marks):**

| Mark | Awarded for |
|---|---|
| 1 | (a) missing semicolon identified and corrected |
| 1 | (a) classified as a syntax error found by the compiler |
| 1 | (b) `ratio` holds 3.0, because of integer division |
| 1 | (b) classified as a logic error found by testing, with a correction |
| 1 | (c) `ArithmeticException` when the division executes |
| 1 | (c) classified as a run-time error (an exception) |
</details>

## How did you do?

- **Question 1:** revisit [1.3](/advanced-course-resources/computer-science-a/1-3-expressions-output-study-guide/) and [1.5](/advanced-course-resources/computer-science-a/1-5-casting-range-study-guide/): evaluate one operation at a time.
- **Question 2:** revisit [1.3](/advanced-course-resources/computer-science-a/1-3-expressions-output-study-guide/) and [1.6](/advanced-course-resources/computer-science-a/1-6-compound-assignment-study-guide/).
- **Question 3:** revisit [1.8](/advanced-course-resources/computer-science-a/1-8-documentation-comments-study-guide/), [1.9](/advanced-course-resources/computer-science-a/1-9-method-signatures-study-guide/) and [1.10](/advanced-course-resources/computer-science-a/1-10-calling-class-methods-study-guide/).
- **Question 4:** revisit [1.5](/advanced-course-resources/computer-science-a/1-5-casting-range-study-guide/) and [1.11](/advanced-course-resources/computer-science-a/1-11-math-class-study-guide/).
- **Question 5:** revisit [1.12](/advanced-course-resources/computer-science-a/1-12-objects-instances-classes-study-guide/), [1.13](/advanced-course-resources/computer-science-a/1-13-object-creation-storage-study-guide/) and [1.14](/advanced-course-resources/computer-science-a/1-14-calling-instance-methods-study-guide/); draw the reference diagram.
- **Question 6:** revisit [1.15](/advanced-course-resources/computer-science-a/1-15-string-manipulation-study-guide/) and [1.7](/advanced-course-resources/computer-science-a/1-7-api-libraries-study-guide/).
- **Question 7:** revisit [1.1](/advanced-course-resources/computer-science-a/1-1-algorithms-programming-compilers-study-guide/).

Unit 2 adds decisions and loops. Before starting, make sure you can trace Unit 1 code with a table, one row per statement.
