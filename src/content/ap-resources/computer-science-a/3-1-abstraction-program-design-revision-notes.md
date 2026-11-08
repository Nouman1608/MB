---
resourceId: "mb-ap-csa-3.1-revision-notes"
title: "Abstraction and Program Design: Revision Notes (Computer Science A 3.1)"
description: "One-page recap of abstraction, attributes versus behaviours, instance versus class variables, method decomposition and class design diagrams, with a quick self-check."
course: "computer-science-a"
unit: 3
topics: ["3.1"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csa-3.1-study-guide"]
learningObjectives:
  - "Explain abstraction as hiding irrelevant detail to manage complexity"
  - "Distinguish data abstraction from procedural abstraction and give an example of each"
  - "Identify the attributes and behaviours of a real-world entity and say which are instance variables and which are class variables"
  - "Use method decomposition and parameters to remove duplicated code and generalise a procedure"
  - "Represent a class design in natural language or as a diagram before implementing it"
skills: ["1"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-3.1-study-guide", "mb-ap-csa-3.1-practice", "mb-ap-csa-3.1-checklist"]
next: "mb-ap-csa-3.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a"]
keyPoints:
  - "Abstraction reduces complexity by hiding details that do not matter to the question at hand."
  - "Data abstraction gives data a name without exposing how it is stored; attributes (instance and class variables) are how a class does this."
  - "Procedural abstraction gives a process a name, so a method can be used knowing only what it does, not how."
  - "Parameters generalise a method so one procedure serves many inputs, and the internals can change without changing callers if the signature and behaviour stay the same."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These notes recap Topic 3.1. For the full explanations and worked examples, read the [study guide](/advanced-course-resources/computer-science-a/3-1-abstraction-program-design-study-guide/).

## Recap

- **Abstraction** reduces complexity by focusing on the main idea and hiding irrelevant detail.
- **Data abstraction** names data without exposing how it is represented. In a class the data are **attributes**: variables declared in the class outside any method or constructor.
- **Procedural abstraction** names a process. A **method** can be used knowing only what it does, not how.
- **Method decomposition** breaks a large behaviour into smaller methods, each with one job.
- **Parameters** generalise a method so it works for a range of arguments.
- You may change a method's internals without telling its callers if the **signature** and **what it does** stay the same.
- Design a class before coding it: list the attributes and the behaviours, in natural language or as a diagram.

## Key relationships

| Idea | What it hides | Java form | Example |
|---|---|---|---|
| Data abstraction | How the data are stored | Attribute (instance or class variable) | `private int seatsLeft;` |
| Procedural abstraction | How the process works | Method | `sellTickets(int count)` |
| Instance variable | Nothing: it is per-object state | No `static` | each `Booth` has its own `soldHere` |
| Class variable | Nothing: it is shared state | `static` | one `totalSold` for all booths |
| Parameter | The specific value used | Variable in the method header | `addTax(double amount)` |

## Assumptions to keep in mind

- A **local variable** is not an attribute: it lives inside one method or constructor.
- An object's **state** is its attributes and their current values.
- A design should list **all** attributes and behaviours the specification needs, not a sample.

## Mistakes to avoid

- Calling a method "abstract" because it has no code. Abstraction is about hiding detail, not missing code.
- Listing only attributes (or only behaviours) in a design.
- Repeating the same block twice instead of writing one method with a parameter.
- Changing a method's signature while believing it is an "internal" change.
- Treating a class variable as if each object had its own copy.

## Mini example to remember

A `Screening` object has the attributes `filmTitle`, `seatsLeft` and `price`, and the behaviours `sellTickets(int)`, `getSeatsLeft()` and `getPrice()`. `sellTickets(2)` on a screening with 3 seats left returns `true` and leaves 1; a second `sellTickets(2)` returns `false` and leaves 1. The data (attributes) and the process (method) are each given a name, and the callers use them without seeing the insides. In the design diagram, the attributes go in the middle box and the behaviours in the bottom box.

## Quick self-check

1. A class has `private int lives;` and a method `loseLife()`. Which is data abstraction and which is procedural abstraction? *Answer: `lives` is data abstraction (an attribute), `loseLife()` is procedural abstraction (a method).*
2. A method contains the same three lines twice. What should you do and why? *Answer: extract them into one method (with parameters if the values differ), to remove duplication and leave one place to fix.*
3. You speed up a method but keep its header and behaviour. Must callers change? *Answer: No.*
4. `static int count;` appears in `Pet`. If three `Pet` objects exist, how many copies of `count` exist? *Answer: one.*
