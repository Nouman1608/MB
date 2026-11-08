---
resourceId: "mb-ap-csa-3.3-revision-notes"
title: "Anatomy of a Class: Revision Notes (Computer Science A 3.3)"
description: "One-page recap of class anatomy in Java: public class header, private instance variables, public constructors, public and private methods, encapsulation, and common compile errors."
course: "computer-science-a"
unit: 3
topics: ["3.3"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csa-3.3-study-guide"]
learningObjectives:
  - "Name the parts of a class: header, instance variables, constructors and methods"
  - "Use public and private correctly for classes, instance variables, constructors and methods"
  - "Explain encapsulation and how private data with public methods protects an object"
  - "Read a class and say which code can and cannot access each member"
  - "Write a complete class from a written specification"
skills: ["1", "2"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-3.3-study-guide", "mb-ap-csa-3.3-practice", "mb-ap-csa-3.3-checklist"]
next: "mb-ap-csa-3.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a"]
keyPoints:
  - "In this course a class is declared public class Name, its constructors are public, and its instance variables are private unless the specification says otherwise."
  - "private restricts access to the declaring class; public allows access from other classes."
  - "Encapsulation keeps a class's implementation details hidden, so other classes use only its public methods."
  - "Each object has its own copy of every instance variable, so objects of one class have separate state."
  - "A private method is a helper that only the class's own code can call."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

These notes recap Topic 3.3. For worked examples, read the [study guide](/advanced-course-resources/computer-science-a/3-3-anatomy-class-study-guide/).

## Recap

- A class has a **header**, **instance variables**, **constructors** and **methods**.
- In this course classes are always `public class Name` and constructors are always `public`.
- Instance variables are `private` unless the specification says otherwise. Each **object has its own copy** of every instance variable.
- `private` restricts access to the declaring class. `public` allows access from classes outside it.
- **Encapsulation** hides implementation details: outside code uses public methods and never touches private data directly.
- **Public methods** can be called inside or outside the class. **Private methods** can only be called from inside it, so they are used as helpers.

## Key relationships

| Member | Typical form | Who can use it |
|---|---|---|
| Class | `public class Parcel` | Everyone |
| Instance variable | `private double weightKg;` | Code inside `Parcel` |
| Constructor | `public Parcel(double w, String p)` | Everyone (to create objects) |
| Behaviour other classes need | `public boolean isHeavy()` | Everyone |
| Helper | `private boolean isValid(int points)` | Code inside the class |

## Assumptions

- A constructor has the class's name and **no return type**, not even `void`.
- If no constructor is written, Java supplies a default no-parameter constructor (Topic 3.4).
- Access errors are **compile-time** errors, for example `weightKg has private access in Parcel`.

## Worked reminder

For `Parcel a = new Parcel(25.5, "Leeds"); Parcel b = new Parcel(3.0, "Bath"); a.markDelivered();`, `a.describe()` is `"Leeds (delivered)"` and `b.describe()` is `"Bath (on the way)"`: marking `a` does not change `b`. For a `Scoreboard`, after `addHome(3)`, `addAway(5)`, `addAway(-2)` and `addHome(2)` both scores are 5, so `leader()` returns `"tied"`.

## Reading a class quickly in the exam

1. Find the header, then list the instance variables and their types: this is the object's state.
2. Find the constructor: what initial values does it give each variable?
3. For each method, note whether it only reads the state (an accessor) or changes it.
4. Check every line that uses a member against its `public` or `private` access and the class it is written in.
5. When code creates two objects, keep a small state table for each, as in the study guide, and update it line by line.

## Mistakes to avoid

- Writing `void` before a constructor name.
- Declaring instance variables `public` and then accessing them from another class.
- Calling a private method from another class.
- Forgetting that a class with no instance-variable assignment in the constructor leaves defaults (0, 0.0, `false`, `null`).
- Believing that changing one object changes all objects of the class.

## Quick self-check

1. Which keyword makes a method callable only from inside its class? *Answer: `private`.*
2. Why make instance variables private? *Answer: so other classes cannot change an object's state except through public methods, which keeps its data safe (encapsulation).*
3. What is wrong with `public void Cup(int ml)` in class `Cup` if it is meant to be a constructor? *Answer: `void` makes it an ordinary method; a constructor has no return type.*
4. Two `Parcel` objects exist. How many copies of `weightKg` are there? *Answer: two, one per object.*
