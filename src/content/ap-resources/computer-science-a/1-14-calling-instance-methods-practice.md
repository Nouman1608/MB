---
resourceId: "mb-ap-csa-1.14-practice"
title: "Calling Instance Methods: Practice Questions (Computer Science A 1.14)"
description: "Ten original Marlbridge practice questions on calling instance methods, void and non-void calls, objects with their own values, aliasing, and NullPointerException."
course: "computer-science-a"
unit: 1
topics: ["1.14"]
resourceType: "practice-questions"
prerequisites: ["The Topic 1.14 study guide"]
learningObjectives: ["Write correct calls to instance methods and say what they return or change", "Trace calls on several objects, including two names for one object", "Explain when a NullPointerException occurs", "Explain why a call does not compile"]
skills: ["2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.14-study-guide", "mb-ap-csa-1.14-revision-notes", "mb-ap-csa-1.14-checklist"]
next: "mb-ap-csa-1.14-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. All code is invented for these questions and was compiled and run before publication. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. No calculator is allowed on the exam, so work everything by hand. Code fragments are assumed to be inside a `main` method. Questions use this class: `area()` returns width times height, `perimeter()` returns twice the sum of width and height, `grow(int amount)` adds `amount` to both width and height, and `describe()` returns text such as `"3 x 4"`.

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

## Question 1 (multiple choice · foundation)

`r` is a `Rectangle` variable that refers to an object. Which statement calls the instance method `area` on it?

- (A) `Rectangle.area();`
- (B) `area(r);`
- (C) `r(area);`
- (D) `r.area();`

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** An instance method is called using the object name, the dot operator and the method name.

- (A) uses the class name, which works only for class methods.
- (B) is the form for a method that takes the object as an argument, and `area` takes no parameters.
- (C) is not valid call syntax.
</details>

## Question 2 (multiple choice · foundation)

What is printed by the following code segment?

```java
Rectangle a = new Rectangle(2, 5);
Rectangle b = new Rectangle(3, 3);
System.out.println(a.area() + b.area());
```

- (A) `10`
- (B) `19`
- (C) `9`
- (D) `109`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `a.area()` is 2 * 5 = 10 and `b.area()` is 3 * 3 = 9. Both calls return `int` values, which are added: 19.

- (A) uses only the first object.
- (C) uses only the second object.
- (D) joins the digits as text; both values are `int`, so they are added.
</details>

## Question 3 (multiple choice · core)

What is printed by the following code segment?

```java
Rectangle r = new Rectangle(1, 2);
r.grow(2);
System.out.println(r.describe());
```

- (A) `1 x 2`
- (B) `2 x 4`
- (C) `3 x 4`
- (D) `3 x 2`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `grow(2)` adds 2 to both sides: width 1 becomes 3 and height 2 becomes 4. `describe()` returns `"3 x 4"`.

- (A) ignores the `grow` call.
- (B) doubles the sides instead of adding 2.
- (D) adds 2 to the width only.
</details>

## Question 4 (multiple choice · core)

Which statement would cause a **compile-time error**?

- (A) `int c = r.grow(3);`
- (B) `int a = r.area();`
- (C) `r.grow(3);`
- (D) `String s = r.describe();`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `grow` is a void method, so there is no value to store in `c`.

- (B) stores the returned `int`.
- (C) calls a void method as a statement, which is correct.
- (D) stores the returned `String`.
</details>

## Question 5 (multiple choice · core)

What is printed by the following code segment?

```java
Rectangle r = new Rectangle(1, 1);
Rectangle s = r;
s.grow(4);
System.out.println(r.area());
```

- (A) `1`
- (B) `4`
- (C) `16`
- (D) `25`

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** `s = r;` copies the reference, so `r` and `s` refer to the same object. `s.grow(4)` changes that object to 5 by 5, and `r.area()` returns 25.

- (A) assumes that `r` is a separate object, unaffected by `s`.
- (B) takes the amount of growth as the area.
- (C) squares 4, ignoring the starting size of 1.
</details>

## Question 6 (multiple choice · core)

What happens when the following code segment is compiled and run?

```java
Rectangle t = null;
System.out.println(t.area());
```

- (A) It prints `0`
- (B) It does not compile
- (C) It compiles and then throws a `NullPointerException` when run
- (D) It compiles and throws an `ArithmeticException` when run

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The compiler checks only that `Rectangle` has an `area()` method; it does not know that `t` will refer to no object. At run time, an instance method call on a `null` reference results in a `NullPointerException`.

- (A) invents an object with a default area.
- (B) is wrong: the code is valid Java.
- (D) is the exception for integer division by zero, which does not apply here.
</details>

## Question 7 (multiple choice · stretch)

What is printed by the following code segment?

```java
String word = "programming";
System.out.println(word.length() + word.indexOf("g"));
```

- (A) `14`
- (B) `113`
- (C) `3`
- (D) `11`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The word has 11 characters, and the first `"g"` is at index 3 (p0 r1 o2 g3). Both calls return `int` values, so they are added: 11 + 3 = 14.

- (B) joins the digits as if the values were text.
- (C) and (D) use only one of the two calls.
</details>

## Question 8 (tracing · core)

Trace the following code segment and give the output.

```java
Rectangle p = new Rectangle(2, 3);
Rectangle q = new Rectangle(4, 4);
p.grow(1);
q.grow(2);
int total = p.area() + q.perimeter();
System.out.println(p.describe() + " " + q.describe() + " " + total);
```

<details>
<summary>Worked solution</summary>

| After statement | p | q | total |
|---|---|---|---|
| `Rectangle p = new Rectangle(2, 3);` | 2 x 3 | - | - |
| `Rectangle q = new Rectangle(4, 4);` | 2 x 3 | 4 x 4 | - |
| `p.grow(1);` | 3 x 4 | 4 x 4 | - |
| `q.grow(2);` | 3 x 4 | 6 x 6 | - |
| `int total = p.area() + q.perimeter();` | 3 x 4 | 6 x 6 | 36 |

`p.area()` is 12 and `q.perimeter()` is 2 * (6 + 6) = 24, so `total` is 36. The output is `3 x 4 6 x 6 36`.

**Suggested Marlbridge rubric (4 marks):**

| Mark | Awarded for |
|---|---|
| 1 | `p` becomes 3 x 4 |
| 1 | `q` becomes 6 x 6 |
| 1 | `total` is 36 (12 + 24) |
| 1 | Output line `3 x 4 6 x 6 36` |
</details>

## Question 9 (writing calls · core)

Write code (inside a `main` method) that:

(a) creates a `Rectangle` `plot` that is 6 by 4;

(b) makes it 3 larger on each side using one method call;

(c) stores its perimeter in an `int` variable `fence`;

(d) prints `plot.describe()` and `fence`. State the output.

<details>
<summary>Worked solution</summary>

```java
Rectangle plot = new Rectangle(6, 4);
plot.grow(3);
int fence = plot.perimeter();
System.out.println(plot.describe() + " " + fence);
```

After `grow(3)` the rectangle is 9 by 7, so `describe()` returns `"9 x 7"`, and the perimeter is 2 * (9 + 7) = 32. The output is `9 x 7 32`.

**Suggested Marlbridge rubric (5 marks):**

| Mark | Awarded for |
|---|---|
| 1 | Creates the object with `new Rectangle(6, 4)` |
| 1 | Calls `grow(3)` on the object as a statement |
| 1 | Stores `plot.perimeter()` in an `int` variable |
| 1 | Prints both values |
| 1 | Output `9 x 7 32` |
</details>

## Question 10 (null and a fix · stretch)

The following code segment compiles but stops with an exception.

```java
Rectangle shed;
shed = null;
int a = shed.area();
System.out.println(a);
```

(a) Name the exception and say when it occurs.

(b) Explain why the compiler does not report this.

(c) Rewrite the code so that it runs and prints 12 for a 3 by 4 shed.

<details>
<summary>Worked solution</summary>

**(a)** A `NullPointerException`, at run time, when `shed.area()` is executed.

**(b)** The compiler only checks that the type `Rectangle` has a method `area()`. It does not track which object, or no object, a variable refers to at run time.

**(c)**

```java
Rectangle shed = new Rectangle(3, 4);
int a = shed.area();
System.out.println(a);
```

The program prints `12`.

**Suggested Marlbridge rubric (4 marks):**

| Mark | Awarded for |
|---|---|
| 1 | Names `NullPointerException` and says it occurs at run time |
| 1 | Says the variable refers to no object when the method is called |
| 1 | Explains that the compiler checks the method exists, not the object |
| 1 | A corrected version that creates the object before the call |
</details>

## How did you do?

- **Questions 1 and 4:** re-read "Asking an object to do something" in the [study guide](/advanced-course-resources/computer-science-a/1-14-calling-instance-methods-study-guide/).
- **Questions 2, 3, 5 and 8:** keep a table of what each object holds after each statement.
- **Questions 6 and 10:** revisit "Calling a method on null".
- **Questions 7 and 9:** write the call, then check the return type.

Then try the [checklist](/advanced-course-resources/computer-science-a/1-14-calling-instance-methods-checklist/).
