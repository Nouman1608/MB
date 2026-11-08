---
resourceId: "mb-ap-csa-1.13-practice"
title: "Object Creation and Storage (Instantiation): Practice Questions (Computer Science A 1.13)"
description: "Ten original Marlbridge practice questions on constructors, creating objects with new, overloaded constructors, null references, call by value and the order of execution in constructor calls."
course: "computer-science-a"
unit: 1
topics: ["1.13"]
resourceType: "practice-questions"
prerequisites: ["The Topic 1.13 study guide"]
learningObjectives: ["Identify the constructor used by a call from its arguments", "Write statements that declare variables and create objects", "Trace constructor calls, including call by value and execution order", "Explain why a constructor call does not compile"]
skills: ["2", "3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.13-study-guide", "mb-ap-csa-1.13-revision-notes", "mb-ap-csa-1.13-checklist"]
next: "mb-ap-csa-1.13-checklist"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["Questions 1 to 7 are multiple choice; 8 to 10 need written answers.", "Every answer explains why the wrong options are wrong.", "Rubrics are suggested Marlbridge rubrics, not official scoring."]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All code is invented for these questions and was compiled and run before publication. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. No calculator is allowed on the exam, so work everything by hand. Code fragments are assumed to be inside a `main` method. Most questions use this class.

```java
class Box {
    private int width;
    private int height;

    public Box() {
        width = 1;
        height = 1;
    }

    public Box(int side) {
        width = side;
        height = side;
    }

    public Box(int w, int h) {
        width = w;
        height = h;
    }

    public int area() {
        return width * height;
    }
}
```

## Question 1 (multiple choice · foundation)

Which statement about a constructor is true?

- (A) It has the return type `void`
- (B) It has the same name as the class and is called with `new` to create an object
- (C) It is called with the class name and the dot operator, like a class method
- (D) It can only be written once in a class

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A constructor has the same name as the class and is usually called with the keyword `new`.

- (A) is wrong: a constructor has no return type, not even `void`.
- (C) describes calling a class method.
- (D) is wrong: a class can have several constructors with different signatures (overloaded).
</details>

## Question 2 (multiple choice · foundation)

Which statement creates a `Box` with width 3 and height 5 and stores a reference to it in the variable `c`?

- (A) `Box c = Box(3, 5);`
- (B) `Box c = new Box(5, 3);`
- (C) `Box c = new Box(3, 5);`
- (D) `new Box c(3, 5);`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The keyword `new` and the constructor call `Box(3, 5)` create the object, and the assignment stores the reference in `c`. The arguments follow the order of the parameters (`w`, then `h`).

- (A) omits `new`.
- (B) creates a box that is 5 wide and 3 high, the reverse of what was asked.
- (D) is not valid syntax.
</details>

## Question 3 (multiple choice · core)

What is the **signature** of the constructor `public Box(int w, int h)`?

- (A) `Box(int, int)`
- (B) `Box(w, h)`
- (C) `public Box(int w, int h)`
- (D) `void Box(int, int)`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The signature is the constructor's name (the class name) and the ordered list of parameter types.

- (B) uses the parameter names, which are not part of the signature.
- (C) is the whole header, including `public` and the parameter names.
- (D) invents a return type; constructors have none.
</details>

## Question 4 (multiple choice · core)

A class has the constructors `Box()`, `Box(int)` and `Box(int, int)`. Which of the following statements would **not compile**?

- (A) `Box d = new Box(2, 3, 4);`
- (B) `Box a = new Box();`
- (C) `Box b = new Box(4);`
- (D) `Box c = new Box(2, 3);`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** No constructor takes three parameters, so no signature matches.

- (B), (C) and (D) each match exactly one of the three signatures.
</details>

## Question 5 (multiple choice · core)

What is printed by the following code segment?

```java
Box b = new Box(4);
System.out.println(b.area());
```

- (A) `4`
- (B) `8`
- (C) `16`
- (D) `1`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `new Box(4)` calls the constructor with one `int` parameter, which sets both width and height to 4. The area is 4 * 4 = 16.

- (A) treats the argument as the area.
- (B) adds instead of multiplying.
- (D) is the area of the box made by the no-argument constructor, which was not called.
</details>

## Question 6 (multiple choice · core)

Consider the following declaration.

```java
Box d = null;
```

Which statement is correct?

- (A) `d` refers to a `Box` whose width and height are both 0
- (B) The statement does not compile, because a `Box` variable cannot hold `null`
- (C) `d` holds the `int` 0
- (D) `d` refers to no object

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** A variable of a reference type holds an object reference or, if there is no object, `null`.

- (A) invents an object; `null` means there is none.
- (B) is wrong: reference variables can hold `null`.
- (C) confuses `null` with the number 0; `null` is not an `int`.
</details>

## Question 7 (multiple choice · core)

A class `Wallet` is defined as follows. What is printed by the code segment after it?

```java
class Wallet {
    private int coins;

    public Wallet(int start) {
        start = start + 5;
        coins = start;
    }

    public int getCoins() {
        return coins;
    }
}
```

```java
int n = 10;
Wallet w = new Wallet(n);
System.out.println(n + " " + w.getCoins());
```

- (A) `10 10`
- (B) `10 15`
- (C) `15 15`
- (D) `15 10`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The parameter `start` is a copy of `n`. The constructor changes the copy to 15 and stores 15 in `coins`. The variable `n` is untouched, so `n` is 10 and `getCoins()` is 15.

- (A) ignores the +5 in the constructor.
- (C) assumes the constructor changed `n`.
- (D) has the two values in the wrong order.
</details>

## Question 8 (writing statements · core)

Using the `Box` class, write statements that:

(a) create a `Box` 5 wide and 2 high and store the reference in a variable `shelf`;

(b) create a square `Box` with side 6 and store the reference in `tile`;

(c) declare a `Box` variable `spare` that currently refers to no object;

(d) state the values of `shelf.area()` and `tile.area()`.

<details>
<summary>Worked solution</summary>

```java
Box shelf = new Box(5, 2);
Box tile = new Box(6);
Box spare = null;
```

(d) `shelf.area()` is 5 * 2 = **10** and `tile.area()` is 6 * 6 = **36**.

**Suggested Marlbridge rubric (5 marks):**

| Mark | Awarded for |
|---|---|
| 1 | (a) `new Box(5, 2)` with arguments in the correct order |
| 1 | (b) `new Box(6)`, using the one-parameter constructor |
| 1 | (c) variable of type `Box` set to `null` (or declared without a value) |
| 1 | (d) area of `shelf` is 10 |
| 1 | (d) area of `tile` is 36 |
</details>

## Question 9 (identifying constructors · core)

For each statement, say which constructor is called, and give the width and height of the new object. If the statement does not compile, say why.

(a) `new Box()`
(b) `new Box(8)`
(c) `new Box(2, 9)`
(d) `new Box(2, 9, 4)`
(e) `new Box(1.5)`

<details>
<summary>Worked solution</summary>

| Statement | Constructor | Width, height |
|---|---|---|
| (a) | `Box()` | 1, 1 |
| (b) | `Box(int)` | 8, 8 |
| (c) | `Box(int, int)` | 2, 9 |
| (d) | none | does not compile: no constructor has three parameters |
| (e) | none | does not compile: `1.5` is a `double`, and the only one-parameter constructor takes an `int` |

**Suggested Marlbridge rubric (5 marks):** one mark per row: the correct constructor or error **and** the correct values or reason.
</details>

## Question 10 (order of execution · stretch)

Trace the program and state the output.

```java
class Logger {
    public Logger() {
        System.out.println("L0");
    }

    public Logger(int n) {
        System.out.println("L1:" + n);
    }
}

public class Run {
    public static void main(String[] args) {
        System.out.println("start");
        Logger a = new Logger();
        Logger b = new Logger(7);
        System.out.println("end");
    }
}
```

<details>
<summary>Worked solution</summary>

```text
start
L0
L1:7
end
```

`main` prints `start`. Then `new Logger()` calls the no-parameter constructor, which prints `L0`, and control returns to `main`. Then `new Logger(7)` calls the constructor with one `int`, which prints `L1:7`. Finally `main` prints `end`.

**Suggested Marlbridge rubric (4 marks):**

| Mark | Awarded for |
|---|---|
| 1 | `start` first |
| 1 | `L0` from the no-parameter constructor, before `main` continues |
| 1 | `L1:7` using the `int` constructor |
| 1 | `end` last |
</details>

## How did you do?

- **Questions 1 to 4:** re-read "Making an object" and "Constructor signatures and overloading" in the [study guide](/advanced-course-resources/computer-science-a/1-13-object-creation-storage-study-guide/).
- **Questions 5, 7 and 10:** trace the constructor call, then return to the line after it.
- **Questions 6 and 8:** revisit "Creating objects and storing references".
- **Question 9:** count and type-check the arguments against each signature.

Then try the [checklist](/advanced-course-resources/computer-science-a/1-13-object-creation-storage-checklist/).
