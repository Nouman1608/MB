---
resourceId: "mb-ap-csa-3.7-revision-notes"
title: "Class Variables and Methods: Revision Notes (Computer Science A 3.7)"
description: "One-page recap of static class variables and methods, final constants, access with the class name, and what class methods cannot do without an instance."
course: "computer-science-a"
unit: 3
topics: ["3.7"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csa-3.7-study-guide"]
learningObjectives:
  - "Explain that a class variable belongs to the class and all objects share a single copy"
  - "Declare class variables and class methods with static, and constants with static final"
  - "Say what a class method can and cannot access without an instance"
  - "Call a public class variable or method using the class name and the dot operator"
  - "Trace code that mixes instance variables and class variables"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-3.7-study-guide", "mb-ap-csa-3.7-practice", "mb-ap-csa-3.7-checklist"]
next: "mb-ap-csa-3.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a"]
keyPoints:
  - "A class variable is declared with static; it belongs to the class and all objects share one copy, unlike an instance variable, which each object has separately."
  - "A public class variable or class method is accessed with the class name and the dot operator, for example Member.getCount()."
  - "A class method can access and change class variables and call other class methods, but cannot use instance variables or instance methods unless it is given an instance as a parameter."
  - "A variable declared final cannot be modified after it is set; constants are usually static final."
  - "Class variables are the standard tool for counting objects and for generating unique identifiers."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

These notes recap Topic 3.7. Full explanations and worked examples are in the [study guide](/advanced-course-resources/computer-science-a/3-7-class-variables-methods-study-guide/).

## Recap

- **Class variables** belong to the class. All objects share a **single copy**. They are declared with **`static`** before the type.
- A `public` class variable is accessed outside the class with the **class name and dot operator**, for example `Member.MAX_BORROW`.
- **Class methods** (`static`) can access and change **class variables** and call **other class methods**.
- Class methods **cannot** access or change **instance variables** or call **instance methods** unless they are **passed an instance** as a parameter.
- A **`final`** variable cannot be modified. Constants are usually `public static final`.
- Typical uses: counting objects created, and giving each object a unique identifier.

## Key relationships

| Feature | Declared | Copies | Accessed with |
|---|---|---|---|
| Instance variable | `private int id;` | One per object | An object (inside its methods) |
| Class variable | `private static int nextId;` | One for the class | Class methods, instance methods, constructors |
| Constant | `public static final int MAX = 4;` | One, unchangeable | `ClassName.MAX` |
| Instance method | `public int getId()` | Operates on one object | An object: `a.getId()` |
| Class method | `public static int getCount()` | Belongs to the class | `ClassName.getCount()` |

## Worked reminder

`Member` gives each new object `id = nextId` then increments `nextId`. After three constructions the ids are 1, 2 and 3, and `Member.getCount()` is 3. In `Tally`, `hit()` increases both the per-object `mine` and the shared `all`. After `p.hit()` twice, `q.hit()`, `Tally.reset()` and `q.hit()` the values are `p.mine` 2, `q.mine` 2 and `all` 1, so the output is `2 2 1`. `Shop.withTax(80.0)` is 100.0 when `TAX_RATE` is 0.25.

## Compile errors to recognise

| Message | Cause |
|---|---|
| `non-static variable id cannot be referenced from a static context` | Class method uses an instance variable with no instance |
| `non-static method getId() cannot be referenced from a static context` | Class method calls an instance method with no instance |
| `cannot assign a value to static final variable LIMIT` | Assigning to a constant |

## Mistakes to avoid

- Declaring a counter as an instance variable when it needs to be shared.
- Resetting a shared counter inside the constructor.
- Using `this` or an instance variable in a class method (Topic 3.9 covers `this`).
- Calling a class method through an object instead of the class name (it works, but is poor style).
- Confusing `static` with `final`.

## Quick self-check

1. Three `Order` objects are created. How many copies of a `static int ordersPlaced` exist? *Answer: one.*
2. Can `public static int total() { return count; }` compile if `count` is an instance variable? *Answer: No.*
3. How do you read `public static final int LIMIT` from another class? *Answer: `ClassName.LIMIT`.*
4. Which is the right place to increment a shared counter of objects created? *Answer: in the constructor.*
