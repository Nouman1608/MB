---
resourceId: "mb-ap-csa-1.12-revision-notes"
title: "Objects: Instances of Classes: Revision Notes (Computer Science A 1.12)"
description: "A one-page recap of classes and objects, reference variables, object references, copying references versus primitives, class hierarchies and the Object class."
course: "computer-science-a"
unit: 1
topics: ["1.12"]
resourceType: "revision-notes"
prerequisites: ["Read the study guide first, or use this page as a recap"]
learningObjectives: ["Recall the definitions of class, object, reference variable and object reference", "Contrast copying a primitive with copying a reference", "Recall what a superclass and subclass are and that all classes extend Object"]
skills: ["4"]
studyMinutes: 15
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.12-study-guide", "mb-ap-csa-1.12-practice", "mb-ap-csa-1.12-checklist"]
next: "mb-ap-csa-1.12-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["A class is the blueprint; an object is a specific instance with its own attribute values.", "A reference variable holds an object reference (like a memory address), not the object.", "Assigning one reference variable to another copies the reference: both refer to the same object."]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/computer-science-a/1-12-objects-instances-classes-study-guide/).

## Recap

- An **object** is a specific instance of a class with defined attributes.
- A **class** is the formal implementation, or blueprint, of the attributes and behaviors of an object.
- A variable of a **reference type** holds an **object reference**, which can be thought of as the memory address of that object.
- Common attributes and behaviors of related classes can be put in a **superclass**. Classes that **extend** it are **subclasses**; this is an **inheritance relationship**.
- **All classes in Java are subclasses of the `Object` class.**
- Designing and implementing inheritance relationships is outside the course and exam.

## Key relationships

| Idea | Example |
|---|---|
| Class | `Counter`, `String`, `Scanner` |
| Object | one particular `Counter`; the text `"banana"` |
| Reference variable | `Counter c;` can refer to a `Counter` |
| Attribute | data stored in a variable (for `Counter`, `count`) |
| Behavior | a method (`increment()`, `getCount()`) |
| Copy a primitive | `int y = x;` copies the value; later changes to `x` do not affect `y` |
| Copy a reference | `Counter b = a;` copies the reference; `a` and `b` are the same object |
| Change via one name | visible through every other name for that object |
| Declaring only | `Counter c;` creates a variable, not an object |

| Variable type | Holds | Can be `null` |
|---|---|---|
| `int`, `double`, `boolean` | a value | no |
| a class such as `String` or `Counter` | an object reference | yes |

## Assumptions and conventions

- In diagrams an arrow means "holds a reference to". Two arrows to one box mean two names for one object.
- One class can have many objects, each with its own attribute values and the same behaviors.
- Objects are created with `new` and a constructor (Topic 1.13).
- Methods are called on objects through reference variables (Topic 1.14).

## Mistakes to avoid

1. **Confusing the class with the object.**
2. **Thinking a reference variable contains the object.**
3. **Expecting `b = a` to copy the object.**
4. **Being surprised that a change through one name shows through another.**
5. **Treating `Counter c;` as if it made a `Counter`.**
6. **Forgetting that all classes are subclasses of `Object`.**
7. **Spending time on writing inheritance, which is outside the course.**

## Quick self-check

1. What is the difference between a class and an object? *(A class is the blueprint; an object is one instance created from it.)*
2. What does `String s;` create? *(A variable that can refer to a `String`; no `String` object yet.)*
3. After `Counter b = a;` how many `Counter` objects exist (if `a` referred to one)? *(Still one: `a` and `b` refer to the same object.)*
4. After `int y = x; x++;` does `y` change? *(No.)*
5. Which class is a superclass of every class? *(`Object`)*

Next: [practice questions](/advanced-course-resources/computer-science-a/1-12-objects-instances-classes-practice/).
