---
resourceId: "mb-ap-csa-3.4-revision-notes"
title: "Constructors: Revision Notes (Computer Science A 3.4)"
description: "One-page recap of Java constructors: setting initial state, default constructor and default values, constructor parameters, overloading and storing a copy of a mutable parameter."
course: "computer-science-a"
unit: 3
topics: ["3.4"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csa-3.4-study-guide"]
learningObjectives:
  - "Explain that an object's state is its instance variables and their values at a given time"
  - "Write constructors that initialise every instance variable, with or without parameters"
  - "State the default values of int, double, boolean and reference instance variables, and when Java supplies the default constructor"
  - "Trace what happens in memory when new calls a constructor"
  - "Explain why a constructor should store a copy of a mutable object it is given, and write one that does"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-3.4-study-guide", "mb-ap-csa-3.4-practice", "mb-ap-csa-3.4-checklist"]
next: "mb-ap-csa-3.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a"]
keyPoints:
  - "An object's state is its attributes and their values at a given time; instance variables define it, giving a has-a relationship."
  - "A constructor sets the initial state of a new object. When it is called, memory is allocated and the object's reference is returned."
  - "With no constructor written, Java supplies a no-parameter default constructor and instance variables take default values: 0, 0.0, false and null."
  - "Writing any constructor removes the default one, so every call must match a constructor you wrote."
  - "If a constructor receives a mutable object, store a copy so the class's state cannot be changed from outside through the original reference."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

These notes recap Topic 3.4. Full explanations and worked examples are in the [study guide](/advanced-course-resources/computer-science-a/3-4-constructors-study-guide/).

## Recap

- An object's **state** is its instance variables and their values at a given time (a **has-a** relationship).
- A **constructor** sets the **initial state**, including values for all instance variables. It is `public`, named like the class, and has **no return type**.
- When a constructor is called, **memory is allocated** and the **reference** to the object is returned.
- Constructor **parameters** supply data to initialise the instance variables.
- If **no constructor** is written, Java provides a **no-parameter default constructor**; instance variables get default values.
- When a **mutable object** is a constructor parameter, initialise the instance variable with a **copy** so the class's state cannot be changed through the original reference.

## Key relationships

| Situation | What happens |
|---|---|
| `new Player("Asha")` with a one-parameter constructor | `name` = "Asha", `lives` = 3 |
| `new Player()` when only parameterised constructors exist | Does not compile |
| No constructor written | Default no-parameter constructor; fields at defaults |
| `seat = s;` | Same reference: two names, one object |
| `seat = new Seat(s.getRow(), s.getNumber());` | A copy: two objects |

## Default values

| Type | Default |
|---|---|
| `int` | 0 |
| `double` | 0.0 |
| `boolean` | false |
| reference (e.g. `String`) | `null` |

## Worked reminder

`new Player("Ben", 5)` allocates a `Player`, sets `name` to `null` and `lives` to 0 for an instant, runs the two-parameter constructor (so `name` becomes "Ben" and `lives` becomes 5) and returns the reference, which is stored in the variable. With `Seat original = new Seat(4, 12)`, a booking that does `seat = s;` follows `original.setNumber(99)` and reports 99, whereas a booking that builds `new Seat(s.getRow(), s.getNumber())` still reports 12. Both facts come from the same rule: a variable of a class type holds a reference.

## Assumptions and checks

- Overloaded constructors share the class name and differ in the number or types of parameters.
- Parameter names that differ from instance variable names avoid confusion (Topic 3.8 covers the same-name case).
- Check every line that creates an object against the constructors actually written in the class.

## Mistakes to avoid

- Writing a return type before the constructor name, which turns it into a method.
- Forgetting that adding a constructor removes the default one.
- Leaving an instance variable unassigned and relying on a default that does not suit the specification.
- Assuming `seat = s;` copies the object.
- Mixing up the order of arguments when two parameters have the same type.

## Quick self-check

1. What is printed by a default-constructed object with `int count; String label;` and getters printed in that order? *Answer: `0 null`.*
2. A class has only `public Pet(String n)`. Does `new Pet()` compile? *Answer: No.*
3. After `Seat s1 = new Seat(1, 5); Seat s2 = s1; s2.setNumber(9);` what does `s1.getNumber()` return? *Answer: 9, because both names refer to the same object.*
4. Why store a copy of a mutable parameter? *Answer: so code outside the class cannot change the object's state by altering the original.*
