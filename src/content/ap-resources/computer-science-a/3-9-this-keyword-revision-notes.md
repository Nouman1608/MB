---
resourceId: "mb-ap-csa-3.9-revision-notes"
title: "this Keyword: Revision Notes (Computer Science A 3.9)"
description: "One-page recap of the this keyword: current-object reference, this.name = name, passing this to another method, comparing with this, and why static methods cannot use it."
course: "computer-science-a"
unit: 3
topics: ["3.9"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csa-3.9-study-guide"]
learningObjectives:
  - "Explain that this holds a reference to the object whose method or constructor is running"
  - "Use this.name = name to initialise an instance variable that a parameter hides"
  - "Pass the current object to another method by writing this as an argument"
  - "Write and trace expressions that compare this object with another"
  - "Explain why class methods have no this reference"
skills: ["2"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-3.9-study-guide", "mb-ap-csa-3.9-practice", "mb-ap-csa-3.9-checklist"]
next: "mb-ap-csa-3.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a"]
keyPoints:
  - "Inside an instance method or a constructor, this is a special variable that holds a reference to the current object, the object whose method or constructor is being called."
  - "Writing this.name = name; assigns the parameter to the instance variable, which fixes the hiding problem from Topic 3.8."
  - "this can be passed as an argument, so an object can give another object a reference to itself."
  - "Comparing this with a parameter using == asks whether they are the same object."
  - "Class methods do not have a this reference, because they run with no particular object."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These notes recap Topic 3.9. For worked examples, read the [study guide](/advanced-course-resources/computer-science-a/3-9-this-keyword-study-guide/).

## Recap

- In an **instance method or constructor**, `this` is a special variable holding a **reference to the current object**: the object whose method or constructor is being run.
- `this.name = name;` stores the parameter `name` in the instance variable `name`, solving the hiding problem of Topic 3.8.
- `this` can be **passed as an argument** so that one object can give another a reference to itself, as in `t.setCaptain(this)`.
- `this == other` tests whether two references refer to the **same object**. `this.age > other.age` compares the values held by the two objects.
- **Class methods do not have a `this` reference.**

## Key relationships

| Expression | Meaning |
|---|---|
| `this` | The object before the dot in the call, or the object being constructed |
| `this.age` | The `age` instance variable of the current object |
| `age` (with a parameter called `age`) | The parameter |
| `age` (with no hiding) | The instance variable, the same as `this.age` |
| `t.setCaptain(this)` | Passes a reference to the current object |
| `this == other` | `true` only if both are the same object |

## Worked reminder

With `Pet a = new Pet("Rex", 4)`, `Pet b = new Pet("Tia", 7)` and `Pet c = a`: `a.sameObjectAs(c)` is `true`, `a.sameObjectAs(b)` is `false`, `a.olderThan(b)` is `false` (4 > 7) and `b.olderThan(a)` is `true` (7 > 4), because `this` is `a` in the first calls and `b` in the last. After `p.becomeCaptainOf(team)`, the team's captain is the same object as `p`: `team.getCaptain() == p` is `true`.

## Using this in class-design questions

1. In a constructor that takes parameters named like the instance variables, begin each assignment with `this.` on the left.
2. When another method needs to know which object is calling it, pass `this`.
3. When a method compares two objects of the same class, write the current object as `this` and the other as the parameter.
4. Never use `this` inside a method declared `static`; pass an object in as a parameter instead.

## Assumptions

- `this` exists only in instance methods and constructors.
- A reference-typed instance variable that is never set holds `null`.
- Without a hiding parameter, `this.` is optional.

## Compile errors to recognise

| Message | Cause |
|---|---|
| `non-static variable this cannot be referenced from a static context` | `this` used in a class method |

## Mistakes to avoid

- Writing `name = name;` in a constructor instead of `this.name = name;`.
- Writing `name = this.name;` (reversed), which leaves the instance variable unchanged.
- Using `this` in a `static` method.
- Thinking `this` is a fixed object rather than the object before the dot.
- Using `==` to compare contents.

## Quick self-check

1. What does `this.score = score;` do when `score` is also a parameter? *Answer: stores the parameter in the instance variable.*
2. In `x.show()`, what does `this` refer to inside `show`? *Answer: the object `x` refers to.*
3. Can `this` be used in a `static` method? *Answer: No.*
4. A method contains `other.setBuddy(this);`. What does `other` receive? *Answer: a reference to the object running the method.*
