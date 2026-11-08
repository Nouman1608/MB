---
resourceId: "mb-ap-csa-3.7-practice"
title: "Class Variables and Methods: Practice Questions (Computer Science A 3.7)"
description: "Nine original Marlbridge practice questions on static variables and methods, final constants, class-name access and common compile errors, with suggested rubrics."
course: "computer-science-a"
unit: 3
topics: ["3.7"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csa-3.7-study-guide"]
learningObjectives:
  - "Explain that a class variable belongs to the class and all objects share a single copy"
  - "Declare class variables and class methods with static, and constants with static final"
  - "Say what a class method can and cannot access without an instance"
  - "Call a public class variable or method using the class name and the dot operator"
  - "Trace code that mixes instance variables and class variables"
skills: ["2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-3.7-study-guide", "mb-ap-csa-3.7-revision-notes", "mb-ap-csa-3.7-checklist"]
next: "mb-ap-csa-3.7-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a"]
keyPoints:
  - "Questions 1 to 6 are multiple choice; Questions 7 to 9 need written code, a trace or an explanation."
  - "Every answer explains why the wrong options are wrong."
  - "Mark points are a suggested Marlbridge rubric, not an official scoring guideline."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. No calculator is allowed. The classes `Member`, `Tally` and `Shop` are printed in the [study guide](/advanced-course-resources/computer-science-a/3-7-class-variables-methods-study-guide/). All code was compiled and run.

## Question 1 (multiple choice · foundation)

What is true of a class variable declared with `static`?

- (A) Each object of the class has its own copy.
- (B) All objects of the class share a single copy.
- (C) It cannot change after it is first set.
- (D) It can only be used inside constructors.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A class variable belongs to the class, with one shared copy.

- (A) describes an instance variable.
- (C) describes `final`.
- (D) is false: methods can use it too.
</details>

## Question 2 (multiple choice · core)

Using `Member` from the study guide, what is printed?

```java
Member a = new Member("Ana");
Member b = new Member("Bo");
Member c = new Member("Cy");
System.out.println(c.getId() + " " + Member.getCount());
```

Assume these are the first `Member` objects created in the program.

- (A) `1 3`
- (B) `3 3`
- (C) `3 4`
- (D) `4 3`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The ids go 1, 2, 3, so `c` has id 3. `nextId` is then 4 and `getCount()` returns `nextId - 1`, which is 3. The compiled program printed `3 3`.

- (A) gives the first id to `c`.
- (C) reports `nextId` (4) instead of `nextId - 1`.
- (D) swaps both values.
</details>

## Question 3 (multiple choice · core)

Which method in a class that has the instance variable `private int id;` does **not** compile?

- (A) `public int getId() { return id; }`
- (B) `public static int total() { return count; }` where `count` is a `private static int`
- (C) `public static int bad() { return id; }`
- (D) `public static boolean same(Item a, Item b) { return a.id == b.id; }` where the method is inside class `Item` and `id` is `Item`'s instance variable

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** A class method has no instance, so it cannot use the instance variable `id`. The compiler reports `non-static variable id cannot be referenced from a static context`.

- (A) is an ordinary instance method using its own object's `id`.
- (B) uses a class variable, which class methods may use.
- (D) uses the instance variables of objects passed in, inside the class, which is allowed.
</details>

## Question 4 (multiple choice · core)

Using `Tally` from the study guide (each `hit()` increases the object's own count and the shared total; `Tally.reset()` sets the shared total to 0), what is printed?

```java
Tally p = new Tally();
Tally q = new Tally();
p.hit();
p.hit();
q.hit();
Tally.reset();
q.hit();
System.out.println(p.getMine() + " " + q.getMine() + " " + Tally.getAll());
```

- (A) `2 2 1`
- (B) `2 1 0`
- (C) `0 0 0`
- (D) `2 2 5`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `p` counted 2; `q` counted 1 and then 1 more, giving 2. The shared total went 3, then 0 after the reset, then 1. The program printed `2 2 1`.

- (B) forgets the last `q.hit()`.
- (C) assumes `reset` clears the per-object counts as well.
- (D) adds the objects' counts and ignores the reset.
</details>

## Question 5 (multiple choice · core)

A class contains `public static final int LIMIT = 10;`. A method in the same class contains the statement `LIMIT = 20;`. What happens?

- (A) `LIMIT` becomes 20 for all objects.
- (B) `LIMIT` becomes 20 only for the object that executed the statement.
- (C) The code does not compile, because a final variable cannot be changed.
- (D) The statement is ignored at run time.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** A `final` variable cannot be modified. The compiler reports `cannot assign a value to static final variable LIMIT`.

- (A) and (B) imagine the assignment succeeds.
- (D) imagines a run-time rule; the error is found at compile time.
</details>

## Question 6 (multiple choice · core)

`Shop` declares `public static final double TAX_RATE = 0.25;` and `public static double withTax(double price) { return price * (1 + TAX_RATE); }`. Which statement from another class prints the value 100.0?

- (A) `System.out.println(withTax(80.0));`
- (B) `System.out.println(Shop.withTax(80.0));`
- (C) `System.out.println(Shop.TAX_RATE * 80.0);`
- (D) `System.out.println(new Shop().TAX_RATE + 80.0);`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A public class method is called with the class name. `80.0 * 1.25` is `100.0`; the program printed `100.0`.

- (A) omits the class name, which is not allowed outside `Shop`.
- (C) prints `20.0` (0.25 × 80.0).
- (D) prints `80.25`.
</details>

## Question 7 (constructed response · core)

Write a class `Order` for a shop.

- Each order has an order number. The first order created is numbered 100, the next 101, and so on.
- The class can report how many orders have been placed so far, without needing an object.
- A method `getOrderNumber()` returns an order's number.

State the output of the code that creates three orders `x`, `y`, `z` and prints their numbers and the total count.

<details>
<summary>Answer and explanation</summary>

```java
public class Order
{
    private static int ordersPlaced = 0;
    private int orderNumber;

    public Order()
    {
        orderNumber = 100 + ordersPlaced;
        ordersPlaced++;
    }

    public int getOrderNumber()
    {
        return orderNumber;
    }

    public static int getOrdersPlaced()
    {
        return ordersPlaced;
    }
}
```

Output for `x.getOrderNumber() + " " + y.getOrderNumber() + " " + z.getOrderNumber() + " " + Order.getOrdersPlaced()`: `100 101 102 3`. This was compiled and run.

**Suggested Marlbridge rubric (6 marks).**

| Mark | Requirement |
|---|---|
| 1 | `private static int` counter initialised to 0 |
| 1 | Private instance variable for the order number |
| 1 | Constructor assigns the number from the counter (100 plus the number of earlier orders) |
| 1 | Constructor increments the shared counter |
| 1 | `getOrdersPlaced` is a `public static` method returning the counter |
| 1 | Output `100 101 102 3` |
</details>

## Question 8 (constructed response · core)

The class below does not compile.

```java
public class Bad
{
    private int id = 5;
    private static int total = 0;
    public static final int LIMIT = 10;

    public int getId() { return id; }

    public static int first()  { return id; }
    public static int second() { return getId(); }
    public static int third()  { LIMIT = 20; return total; }
}
```

(a) For each of `first`, `second` and `third`, explain the error.

(b) Suggest a correction for each.

<details>
<summary>Answer and explanation</summary>

**(a)** `first` uses an instance variable in a class method. `second` calls an instance method from a class method. `third` assigns to a `final` variable. (The use of `total` in `third` is fine.)

**(b)** `first`: change it to an instance method, or pass an object, `public static int first(Bad b) { return b.id; }`. `second`: make it an instance method, or call `b.getId()` on a parameter. `third`: delete `LIMIT = 20;` (or remove `final` if the value genuinely has to change).

The three compiler messages were confirmed by compiling.

**Suggested Marlbridge rubric (6 marks).** One mark for the correct explanation and one for an acceptable correction, for each of the three methods.
</details>

## Question 9 (constructed response · stretch)

A programmer says, "I made `nextId` an instance variable and it always gives every member the id 1."

(a) Explain why this happens.

(b) State the fix.

(c) Explain why the fix lets each member get a different id while every object still has its own id.

<details>
<summary>Answer and explanation</summary>

**(a)** An instance variable has a separate copy in every object, so each new object starts with its own `nextId` set to 1, and incrementing it affects only that object.

**(b)** Declare `nextId` as `private static int nextId = 1;`.

**(c)** With `static` there is one `nextId` for the whole class, so each constructor call reads the current value and increments the shared one. `id` remains an instance variable, so each object keeps the value it was given.

**Suggested Marlbridge rubric (4 marks).**

| Mark | Requirement |
|---|---|
| 1 | Part (a): each object has its own copy, restarting at 1 |
| 1 | Part (b): `static` |
| 1 | Part (c): one shared counter advances across all constructions |
| 1 | Part (c): `id` stays an instance variable so each object keeps its own value |
</details>

## How did you do?

- Questions 1 to 6 right and the rubrics mostly met: move on to the [Scope and Access study guide](/advanced-course-resources/computer-science-a/3-8-scope-access-study-guide/).
- Missed Questions 1 or 2: reread "Class variables" in the [study guide](/advanced-course-resources/computer-science-a/3-7-class-variables-methods-study-guide/).
- Missed Questions 3, 5 or 8: reread "Class methods" and Worked example 2, Part C.
- Missed Questions 4, 7 or 9: redo Worked examples 1 and 2, then tick the [topic checklist](/advanced-course-resources/computer-science-a/3-7-class-variables-methods-checklist/).
