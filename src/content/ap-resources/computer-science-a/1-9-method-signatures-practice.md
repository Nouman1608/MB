---
resourceId: "mb-ap-csa-1.9-practice"
title: "Method Signatures: Practice Questions (Computer Science A 1.9)"
description: "Nine original Marlbridge practice questions on method signatures, parameters and arguments, void and non-void methods, call by value, overloading and tracing method calls."
course: "computer-science-a"
unit: 1
topics: ["1.9"]
resourceType: "practice-questions"
prerequisites: ["The Topic 1.9 study guide"]
learningObjectives: ["State the signature of a method and identify legal and illegal overloads", "Decide whether a call matches a signature and give the value it returns", "Trace output through nested method calls and call by value", "Write a method header and a call that uses its return value"]
skills: ["2", "3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.9-study-guide", "mb-ap-csa-1.9-revision-notes", "mb-ap-csa-1.9-checklist"]
next: "mb-ap-csa-1.9-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. All code is invented for these questions and was compiled and run before publication. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. No calculator is allowed on the exam, so work everything by hand. All methods are `public static` methods of the same class, so a method can be called by its name alone.

## Question 1 (multiple choice · foundation)

What is the **signature** of the method with this header?

```text
public static int largest(int a, int b, int c)
```

- (A) `int largest(int a, int b, int c)`
- (B) `largest(int, int, int)`
- (C) `largest(a, b, c)`
- (D) `largest`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A signature consists of the method name and the ordered list of parameter types.

- (A) includes the return type and the parameter names, which are not part of the signature.
- (C) uses parameter names, not types.
- (D) leaves out the parameter list; the list is part of the signature.
</details>

## Question 2 (multiple choice · core)

Which pair of method headers can appear together in the same class (that is, as **overloaded** methods)?

- (A) `int f(int x)` and `double f(int y)`
- (B) `void g(int a)` and `int g(int b)`
- (C) `int f(int x)` and `int f(int x, int y)`
- (D) `int h(double a)` and `int h(double b)`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The names are the same and the signatures differ: `f(int)` and `f(int, int)`.

- (A) both have the signature `f(int)`; they differ only in return type and parameter name, which is not allowed.
- (B) both have the signature `g(int)`; only the return type differs.
- (D) both have the signature `h(double)`; only the parameter name differs.
</details>

## Question 3 (multiple choice · core)

What is printed by the following program?

```java
public class Q3 {
    public static void bump(int n) {
        n = n + 100;
    }

    public static void main(String[] args) {
        int n = 7;
        bump(n);
        System.out.println(n);
    }
}
```

- (A) `107`
- (B) `100`
- (C) Nothing: the program does not compile
- (D) `7`

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Arguments are passed by value: the parameter `n` inside `bump` is a copy of the 7. Changing the copy leaves the `n` in `main` untouched.

- (A) assumes the method changes the caller's variable.
- (B) ignores the original value.
- (C) is wrong: a void method called as a statement is fine, and the two variables named `n` are separate.
</details>

## Question 4 (multiple choice · core)

A class has the method `public static String label(String s, int n)`. Which call compiles?

- (A) `String t = label("x", 3);`
- (B) `label(3, "x");`
- (C) `String t = label("x");`
- (D) `int t = label("x", 3);`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The arguments match the parameters in number, order and type (`String`, then `int`), and the returned `String` is stored in a `String` variable.

- (B) has the arguments in the wrong order.
- (C) supplies one argument; the method has two parameters.
- (D) stores a returned `String` in an `int` variable.
</details>

## Question 5 (multiple choice · core)

What is printed by the following program?

```java
public class Q5 {
    public static void a() {
        System.out.print("A");
        b();
        System.out.print("C");
    }

    public static void b() {
        System.out.print("B");
    }

    public static void main(String[] args) {
        System.out.print("S");
        a();
        System.out.println("E");
    }
}
```

- (A) `SACBE`
- (B) `ABCSE`
- (C) `SABCE`
- (D) `SBACE`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `main` prints S, then calls `a`. `a` prints A, calls `b`, which prints B, and when `b` ends control returns to just after the call, so `a` prints C and ends. Then `main` prints E and ends the line.

- (A) forgets that `b` runs completely before `a` continues.
- (B) assumes that `a` runs before `main` begins.
- (D) assumes that `b` runs first, as if it were called at the start of the program.
</details>

## Question 6 (multiple choice · core)

A class has `public static int cube(int n)` and `public static void say()`. Which statement compiles?

- (A) `int a = say();`
- (B) `cube(3);`
- (C) `say() + 1;`
- (D) `String s = cube(2);`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A non-void method may be called as a statement; its returned value is discarded.

- (A) stores the result of a void method, which has no value.
- (C) uses a void method in an expression (and is not a legal statement either).
- (D) stores an `int` in a `String` variable.
</details>

## Question 7 (writing a method · core)

(a) Write the header and body of a method named `rectangleArea` that takes two `int` parameters, `width` and `height`, and returns their product as an `int`.

(b) State its signature.

(c) Write one statement in `main` that calls it with 5 and 3, and stores the result in a variable `area`, and state the value stored.

<details>
<summary>Worked solution</summary>

**(a)** The method, shown inside a complete program so that it can be run (the method is the first one in the class):

```java
public class Rect {
    public static int rectangleArea(int width, int height) {
        return width * height;
    }

    public static void main(String[] args) {
        int area = rectangleArea(5, 3);
        System.out.println(area);
    }
}
```

```text
15
```

**(b)** The signature is `rectangleArea(int, int)`.

**(c)** `int area = rectangleArea(5, 3);` stores **15**, as the output shows.

**Suggested Marlbridge rubric (5 marks):**

| Mark | Awarded for |
|---|---|
| 1 | Return type `int` and the correct name in the header |
| 1 | Two `int` parameters, correctly declared |
| 1 | Body returns `width * height` |
| 1 | Signature `rectangleArea(int, int)` |
| 1 | Call with arguments 5 and 3 stored in `area`, value 15 |
</details>

## Question 8 (tracing calls · stretch)

Trace the following program and give its output.

```java
public class Q8 {
    public static int bump(int n) {
        n = n + 1;
        return n * 2;
    }

    public static void main(String[] args) {
        int n = 3;
        int m = bump(n);
        n = bump(m) - n;
        System.out.println(n + " " + m);
    }
}
```

<details>
<summary>Worked solution</summary>

| Step | n in main | m in main | Working |
|---|---|---|---|
| `int n = 3;` | 3 | - | |
| `int m = bump(n);` | 3 | 8 | parameter is a copy of 3; it becomes 4, and the method returns 4 * 2 = 8 |
| `n = bump(m) - n;` | 15 | 8 | `bump(m)`: the copy of 8 becomes 9, returns 18; then 18 - 3 = 15 (the old `n`) |

The output is `15 8`. The `n` inside `bump` and the `n` in `main` are separate variables.

**Suggested Marlbridge rubric (4 marks):**

| Mark | Awarded for |
|---|---|
| 1 | `bump(3)` returns 8 and `m` becomes 8 |
| 1 | `n` in `main` is unchanged by the first call |
| 1 | `bump(8)` returns 18 |
| 1 | Final output `15 8` (using the old `n` = 3 in the subtraction) |
</details>

## Question 9 (overloading · stretch)

A class contains three overloaded methods:

```java
public class Shapes {
    public static int area(int s) {
        return s * s;
    }

    public static int area(int w, int h) {
        return w * h;
    }

    public static double area(double r) {
        return r * r;
    }
}
```

(a) For each call say which method it uses and give the value and type returned: (i) `area(4)` (ii) `area(4, 5)` (iii) `area(2.0)`.

(b) Explain why `area(4.0, 5)` does not compile.

<details>
<summary>Worked solution</summary>

**(a)** (i) One `int` argument: `area(int)`, returns the `int` **16**. (ii) Two `int` arguments: `area(int, int)`, returns the `int` **20**. (iii) One `double` argument: `area(double)`, returns the `double` **4.0**.

**(b)** No overloaded method has the signature `(double, int)`. The only two-parameter method is `area(int, int)`, and a `double` argument cannot be passed to an `int` parameter, so the compiler cannot find a matching method.

**Suggested Marlbridge rubric (5 marks):**

| Mark | Awarded for |
|---|---|
| 1 | (i) `area(int)`, 16 |
| 1 | (ii) `area(int, int)`, 20 |
| 1 | (iii) `area(double)`, 4.0 as a `double` |
| 1 | (b) no method matches the argument types |
| 1 | (b) a `double` cannot be passed to an `int` parameter |
</details>

## How did you do?

- **Questions 1 and 2:** re-read "The anatomy of a method header" and "Overloading" in the [study guide](/advanced-course-resources/computer-science-a/1-9-method-signatures-study-guide/).
- **Questions 3, 5 and 8:** trace with a table, and keep the two variables called `n` apart.
- **Questions 4, 6 and 9:** check number, order and type of arguments before anything else.
- **Question 7:** write three more methods of your own, each with its signature.

Then try the [checklist](/advanced-course-resources/computer-science-a/1-9-method-signatures-checklist/).
