---
resourceId: "mb-ap-csa-1.10-practice"
title: "Calling Class Methods: Practice Questions (Computer Science A 1.10)"
description: "Nine original Marlbridge practice questions on class methods, the static keyword, calling methods with the class name, nested calls and fixing calls that do not compile."
course: "computer-science-a"
unit: 1
topics: ["1.10"]
resourceType: "practice-questions"
prerequisites: ["The Topic 1.10 study guide"]
learningObjectives: ["Identify class methods and write correct calls to them", "Evaluate nested class method calls", "Explain why a call does not compile and correct it", "Write a class method and call it from another class"]
skills: ["2", "3"]
studyMinutes: 40
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.10-study-guide", "mb-ap-csa-1.10-revision-notes", "mb-ap-csa-1.10-checklist"]
next: "mb-ap-csa-1.10-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. All code is invented for these questions and was compiled and run before publication. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. No calculator is allowed on the exam, so work everything by hand. Unless stated, the class `Tools` below is the class used in the questions.

```java
public class Tools {
    public static int twice(int n) {
        return n * 2;
    }

    public static int plus(int a, int b) {
        return a + b;
    }

    public static void show(String label, int value) {
        System.out.println(label + ": " + value);
    }
}
```

## Question 1 (multiple choice · foundation)

Which keyword in a method header shows that the method is a **class method**?

- (A) `static`
- (B) `public`
- (C) `void`
- (D) `class`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** A class method is associated with the class, not with instances, and its header includes `static` before the method name.

- (B) controls where the method can be used, not whether it belongs to the class.
- (C) is a return type, meaning the method returns nothing.
- (D) is used to declare a class, not a method.
</details>

## Question 2 (multiple choice · foundation)

A class `Calc` defines `public static int cube(int n)`. Which statement correctly calls it from a **different** class, with argument 4?

- (A) `cube(4);`
- (B) `Calc.cube(4);`
- (C) `Calc(4).cube;`
- (D) `new Calc().cube(4);`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A class method is called with the class name, the dot operator and the method name with its arguments.

- (A) omits the class name, which is required when the call is in a different class.
- (C) is not valid call syntax.
- (D) creates an object, which is unnecessary for a class method. (It happens to compile in Java, but it is not the form this course uses.)
</details>

## Question 3 (multiple choice · core)

What is printed by the following statement?

```java
System.out.println(Tools.plus(Tools.twice(3), Tools.twice(4)));
```

- (A) `14`
- (B) `7`
- (C) `10`
- (D) `24`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The inner calls are evaluated first: `Tools.twice(3)` is 6 and `Tools.twice(4)` is 8. Then `Tools.plus(6, 8)` is 14.

- (B) adds the original numbers, 3 + 4, without doubling.
- (C) doubles only one of the numbers (3 + 8 is 11, and 6 + 4 is 10).
- (D) multiplies instead of adding.
</details>

## Question 4 (multiple choice · core)

Which statement in a different class would cause a **compile-time error**?

- (A) `int r = Tools.twice(7);`
- (B) `Tools.show("n", 7);`
- (C) `int r = Tools.twice(2.5);`
- (D) `int r = Tools.plus(1, 2) + Tools.twice(3);`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The parameter of `twice` is an `int`, and a `double` argument (2.5) cannot be passed to it without a cast. The compiler reports a possible lossy conversion.

- (A) passes an `int` and stores the `int` result in an `int`.
- (B) is a correct call to a void method as a statement, with a `String` then an `int`.
- (D) adds two `int` results, and stores the sum in an `int`.
</details>

## Question 5 (multiple choice · core)

The class `Tools` is extended with a method `demo`. The call to `twice` appears **inside** `Tools`, in a method that is also in `Tools`.

```java
public class Tools {
    public static int twice(int n) {
        return n * 2;
    }

    public static int demo() {
        int r = twice(6);
        return r;
    }
}
```

Which statement is true?

- (A) It does not compile, because the class name is missing
- (B) It compiles, because the class name is optional inside the defining class
- (C) It compiles only if `twice` is declared before the method containing the call
- (D) It compiles only if an object of `Tools` has been created

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** When the method call occurs in the defining class, the use of the class name is optional.

- (A) is the rule for calls from a **different** class.
- (C) is wrong: the order of methods in a class does not matter.
- (D) is wrong: class methods never need an object.
</details>

## Question 6 (multiple choice · core)

What is printed by the following statement?

```java
System.out.println(Math.sqrt(Math.abs(-16)) + Math.abs(-3));
```

- (A) `7`
- (B) `19.0`
- (C) `13.0`
- (D) `7.0`

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** `Math.abs(-16)` is 16, so `Math.sqrt(16)` is 4.0. `Math.abs(-3)` is 3. The sum of the `double` 4.0 and the `int` 3 is the `double` 7.0.

- (A) forgets that the sum is a `double` and so prints with a decimal point.
- (B) adds 16 and 3 without taking the square root.
- (C) treats the square root as -16 + 3 (the absolute value was ignored).
</details>

## Question 7 (writing and calling · core)

(a) Write a class `Geometry` with a class method `perimeter` that takes two `int` parameters, `width` and `height`, and returns the perimeter of a rectangle as an `int`.

(b) Write a `main` method in a class `Main` that calls it for a 7 by 4 rectangle and prints the result. State the output.

<details>
<summary>Worked solution</summary>

```java
class Geometry {
    public static int perimeter(int width, int height) {
        return 2 * (width + height);
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println(Geometry.perimeter(7, 4));
    }
}
```

```text
22
```

The output is `22`: 2 * (7 + 4) = 22. The class name `Geometry` is required in the call, because `main` is in a different class.

**Suggested Marlbridge rubric (5 marks):**

| Mark | Awarded for |
|---|---|
| 1 | Header with `static`, return type `int`, name `perimeter` |
| 1 | Two `int` parameters |
| 1 | Body returns `2 * (width + height)` (brackets correct) |
| 1 | Call with the class name and dot operator: `Geometry.perimeter(7, 4)` |
| 1 | Output 22 |
</details>

## Question 8 (finding errors · core)

Each line below is in a class **other than** `Tools`. Say whether it compiles. If it does not, give the reason and a corrected line.

(a) `int r = plus(2, 3);`
(b) `Tools.show(7, "total");`
(c) `String s = Tools.twice(4);`
(d) `int r = Tools.plus(Tools.twice(2), 3);`

<details>
<summary>Worked solution</summary>

| Line | Compiles? | Reason | Correction |
|---|---|---|---|
| (a) | no | the class name `Tools` is missing, and the compiler cannot find a method `plus` in this class | `int r = Tools.plus(2, 3);` |
| (b) | no | the arguments are in the wrong order: the parameters are (`String`, `int`) | `Tools.show("total", 7);` |
| (c) | no | `twice` returns an `int`, which cannot be stored in a `String` | `int s = Tools.twice(4);` |
| (d) | yes | `Tools.twice(2)` is 4, and `Tools.plus(4, 3)` is 7, which is stored in `r` | no change |

**Suggested Marlbridge rubric (4 marks):** one mark per line for the correct verdict, the correct reason and (for (a) to (c)) a correct fix.
</details>

## Question 9 (tracing · stretch)

State exactly what the following program prints.

```java
public class Q9 {
    public static int step(int n) {
        System.out.println("step " + n);
        return n + 1;
    }

    public static void main(String[] args) {
        int a = step(1);
        int b = step(a) * step(a + 1);
        System.out.println(a + " " + b);
    }
}
```

<details>
<summary>Worked solution</summary>

```text
step 1
step 2
step 3
2 12
```

- `step(1)` prints `step 1` and returns 2, so `a` is 2.
- In `step(a) * step(a + 1)` the two calls are evaluated from left to right. `step(2)` prints `step 2` and returns 3. Then `step(3)` prints `step 3` and returns 4.
- The product is 3 * 4 = 12, so `b` is 12 and the last line printed is `2 12`.

**Suggested Marlbridge rubric (4 marks):**

| Mark | Awarded for |
|---|---|
| 1 | `step 1` printed first, `a` is 2 |
| 1 | Left-to-right evaluation: `step 2` printed before `step 3` |
| 1 | `b` is 12 |
| 1 | Final line `2 12` |
</details>

## How did you do?

- **Questions 1 and 2:** re-read "Methods that belong to the class" in the [study guide](/advanced-course-resources/computer-science-a/1-10-calling-class-methods-study-guide/).
- **Questions 3, 6 and 9:** work nested calls from the inside out, one line per call.
- **Questions 4, 5 and 8:** use the four checks in "Why a call does not compile".
- **Question 7:** write another class with two methods and call them from `main`.

Then try the [checklist](/advanced-course-resources/computer-science-a/1-10-calling-class-methods-checklist/).
