---
title: "AQA A-Level Computer Science (7517): Programming Paradigms -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of programming"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 1.2
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-programming"
    subtopic: "programming-paradigms-aqa-alevel-cs"
description: "Condensed AQA 7517 section 4.1.2 recall: structured approach, hierarchy charts, OOP terms, method types, specifiers, UML diamonds, traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Condensed recall for **4.1.2 Programming paradigms**, AQA A-Level Computer Science (7517). The worked cinema-booking example is in the [Programming paradigms study guide](/resources/aqa-a-level-computer-science-7517-programming-paradigms-aqa-alevel-cs/); exam-style questions are in the [Programming Paradigms practice questions](/resources/aqa-a-level-computer-science-programming-paradigms-practice/).

## Two paradigms (4.1.2.1)

- **Procedural:** a program is a sequence of instructions grouped into procedures and functions that act on data passed to them.
- **Object-oriented:** a program is a collection of objects, each combining attributes (data) and methods (behaviour), interacting by calling methods.
- You are expected to have programmed in both.

## Structured approach (4.1.2.2)

- **Top-down design / stepwise refinement:** split the problem into sub-problems repeatedly until each is one manageable module.
- Uses sequence, selection and iteration, with modules that have clear interfaces.
- **Hierarchy chart:** boxes for modules, lines from a module to its sub-modules. Shows **decomposition**, not order of execution, conditions or loops.

**Advantages of the structured approach**

| Feature | Why it helps |
|---|---|
| Small modules | Easier to write, understand and test individually |
| Clear interfaces | Programmers can build modules in parallel |
| Independent modules | Reusable in other programs |
| Changes confined to a module | Easier maintenance and debugging |

## Object-oriented concepts (4.1.2.3)

| Concept | Recall |
|---|---|
| Class | Defines the methods and attribute fields common to its objects |
| Object | An instance of a class |
| Instantiation | Creating an object with a constructor (implicit or explicit); a reference to it is assigned to a variable of the class type |
| Encapsulation | Attributes and methods bundled together; data hidden and reached only through methods |
| Inheritance | A subclass takes on the attributes and methods of its superclass and may add its own |
| Aggregation | "Has-a"; the part can exist independently of the whole (white diamond) |
| Composition | "Has-a"; the part is created and destroyed with the whole (black diamond) |
| Polymorphism | The same method call behaves differently depending on the object's class |
| Overriding | A subclass redefines a method it inherited, with the same name |

## Method types and specifiers

| Item | Meaning |
|---|---|
| Abstract method | No implementation in the class; subclasses must implement it |
| Virtual method | Has an implementation that subclasses may override |
| Static method | Belongs to the class; called without creating an object |
| Public (+) | Accessible from anywhere |
| Private (−) | Accessible only within the class |
| Protected (#) | Accessible within the class and its subclasses |

## Class diagrams

- Box with three compartments: **name / attributes / methods**.
- Members written with a specifier, for example `− price : Real`, `+ GetPrice() : Real`.
- **Inheritance:** line with a **hollow triangle** pointing at the superclass.
- **Composition:** line with a **black (filled) diamond** at the containing class.
- **Aggregation:** line with a **white (hollow) diamond** at the containing class.
- Only single inheritance is required.

## Why use OOP?

- Models real entities, so designs are easier to understand.
- Encapsulation protects data and hides implementation details.
- Inheritance reuses existing, tested code.
- Polymorphism lets new subclasses be added without changing code that uses the superclass.
- Classes can be developed, tested and reused independently.

## Design principles

| Principle | In one line |
|---|---|
| Encapsulate what varies | Put the parts most likely to change behind a class boundary |
| Favour composition over inheritance | Build behaviour from contained objects rather than deep subclass trees |
| Program to interfaces, not implementation | Depend on what methods an object offers, not on how they work |

AQA states that programming to interfaces is not explicitly tested in a practical exam, but you should be aware of the principle.

## Exam traps

- A hierarchy chart is **not** a flowchart.
- **Black = composition**, **white = aggregation**; the diamond sits at the **whole**, not the part.
- Protected is not public: subclasses only.
- Static does not mean "unchanging"; it means "belongs to the class".
- An abstract class cannot be instantiated.
- Encapsulation needs a **reason** (controlled access, data protection) to earn the explanation mark.
- Overriding and polymorphism are related but different terms.

## Self-test

1. What does a hierarchy chart show, and what does it not show?
2. Give two advantages of the structured approach.
3. What is assigned to a variable when an object is instantiated?
4. Distinguish an abstract method from a virtual method.
5. How is a static method called?
6. Which specifier allows access from a subclass but not from unrelated classes?
7. In UML, which diamond shows composition?
8. A playlist contains songs that remain in the music library if the playlist is deleted. Aggregation or composition?
9. A form contains text boxes that are destroyed when the form is closed. Aggregation or composition?
10. Define polymorphism.
11. State the meaning of "favour composition over inheritance".
12. What do the three compartments of a class box contain?

**Answers**

1. It shows how a problem is decomposed into modules and sub-modules; it does not show the order of execution, conditions or loops.
2. Any two: modules are easier to write and test; modules can be built by different programmers in parallel; modules can be reused; maintenance is easier because changes are confined to one module.
3. A reference to the new object.
4. An abstract method has no implementation and must be implemented by a subclass; a virtual method has an implementation that a subclass may override.
5. Through the class name, without creating an object.
6. Protected (#).
7. The black (filled) diamond.
8. Aggregation, because the songs exist independently of the playlist.
9. Composition, because the text boxes are destroyed with the form.
10. The same method call produces different behaviour depending on the class of the object it is called on.
11. Build classes by containing other objects with the needed behaviour, rather than creating ever more subclasses.
12. The class name, the attributes, and the methods.

## Related resources

- [Programming paradigms study guide](/resources/aqa-a-level-computer-science-7517-programming-paradigms-aqa-alevel-cs/)
- [Programming Paradigms practice questions](/resources/aqa-a-level-computer-science-programming-paradigms-practice/)
- [Programming revision notes for section 4.1.1](/resources/aqa-a-level-computer-science-7517-programming-aqa-alevel-cs-revision-notes/)
