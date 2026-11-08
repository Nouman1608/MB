---
resourceId: "mb-ap-csa-3.6-revision-notes"
title: "Methods: Passing and Returning References of an Object: Revision Notes (Computer Science A 3.6)"
description: "One-page recap of passing and returning object references in Java: copy of the reference, mutating versus reassigning, returned references, and access to private data of a parameter."
course: "computer-science-a"
unit: 3
topics: ["3.6"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csa-3.6-study-guide"]
learningObjectives:
  - "Explain that an object argument initialises the parameter with a copy of the reference, not a copy of the object"
  - "Predict whether a method changes the caller's object, and whether reassigning the parameter matters"
  - "Explain that returning an object returns the reference, not a new copy"
  - "Write methods that take and return objects, including ones that must not modify their parameters"
  - "State when a method can access the private data of a parameter"
skills: ["2", "4"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-3.6-study-guide", "mb-ap-csa-3.6-practice", "mb-ap-csa-3.6-checklist"]
next: "mb-ap-csa-3.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a"]
keyPoints:
  - "An object argument initialises the parameter with a copy of the reference, so the parameter and the argument refer to the same object; no copy of the object is made."
  - "A method can use the reference to change the object's state, and the caller sees the change."
  - "Assigning a new object to the parameter changes only the parameter; the caller's variable still refers to the original object."
  - "When a method returns an object, it returns the reference, not a copy."
  - "A method can access the private data of a parameter only if the parameter is the same type as the method's enclosing class."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

These notes recap Topic 3.6. For explanations and worked examples, read the [study guide](/advanced-course-resources/computer-science-a/3-6-methods-passing-returning-references-object-study-guide/).

## Recap

- When the argument is an **object reference**, the parameter is initialised with a **copy of the reference**. No new copy of the object is made.
- If the object is **mutable**, a method can **change its state** through the reference. The caller sees the change.
- **Assigning a new object to the parameter** changes only the parameter. The caller's variable is unaffected.
- When a method **returns an object**, it returns the **reference**, not a copy.
- A method cannot reach the **private** data of a parameter **unless the parameter has the same type as the enclosing class**.
- Good practice: do not modify mutable objects passed as parameters unless the specification requires it.

## Key relationships

| Code inside the method | Effect on the caller's object |
|---|---|
| `b.addItem();` (call a mutator on the parameter) | Changes the shared object: caller sees it |
| `b = new Box(100);` (reassign the parameter) | No effect on the caller's variable |
| `return a;` where `a` is a parameter | Returns the same object: an alias |
| `return new Box(a.getItems());` | Returns an independent copy |
| `other.items` inside class `Box`, `other` a `Box` | Allowed |
| `b.items` inside a different class | Compile error: private access |

## Reference checklist for tracing

1. Draw each variable with an arrow to its object.
2. At a method call, draw the parameter with an arrow to the **same** object.
3. A call to a mutator changes the object. An assignment to the parameter moves only the parameter's arrow.
4. At `return`, the returned reference points to the same object.
5. `==` asks whether two arrows point to the same object.

## Worked reminder

With `Box x = new Box(3)`: `addTwo(x)` makes the box hold 5, because `b` and `x` point to the same object. `replace(x)` leaves it at 5, because `b = new Box(100)` only moves `b`. With `s` at 4 items and `t` at 9, `biggerOf(s, t)` returns the reference to `t`'s box; after `big.addItem()` it holds 10 and `big == t` is `true`.

## Mistakes to avoid

- Thinking a swap method that swaps its parameters swaps the caller's variables.
- Believing a returned object is always a new object.
- Using `==` when the question is about equal contents (for the objects in this topic, compare values through accessors).
- Modifying a parameter object when the specification did not ask for it.
- Reading `b.items` from outside the class.

## Quick self-check

1. `void f(Box b) { b = new Box(0); }` is called with `x`. What happens to `x`? *Answer: nothing; x still refers to the original box.*
2. `Box y = x;` then `y.addItem();` Does `x` change? *Answer: Yes, they refer to the same box.*
3. A method returns one of its two object parameters. Is the result a copy? *Answer: No, it is the same object.*
4. May a method in class `Box` use `other.items` where `other` is a `Box`? *Answer: Yes.*
