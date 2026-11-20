---
title: "OxfordAQA A-Level Computer Science (9645): Classes, objects and instantiation -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Classes and Objects Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 9 – Object-oriented and additional programming"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 9.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "object-oriented-and-additional-programming"
  - qualification: "a-level"
    topic: "object-oriented-and-additional-programming"
    subtopic: "classes-objects-and-instantiation-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.9.1: why OOP is used, class, attribute, method, object, instantiation, constructors and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.9.1 Classes, objects and instantiation** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (A-level content in topic 3.9 Object-oriented and additional programming). For explanations and worked examples, see the [classes and objects study guide](/resources/oxfordaqa-a-level-computer-science-9645-classes-objects-instantiation/); then practise with the [classes and objects practice questions](/resources/oxfordaqa-a-level-computer-science-9645-classes-objects-instantiation-practice/). Code is Python.

## What the specification requires

- Know **why the object-oriented paradigm is used**.
- Be familiar with **class, property/attribute, method, object, instantiation, encapsulation, inheritance, overriding and association**, and be able to apply and identify them.
- Know what a **class** is and **create classes**.
- Know what an **object** is and **create objects by instantiation**, using an explicit or implicit constructor.
- Know that a **constructor** is called when an object is instantiated, and **create constructor functions**.
- Know that a constructor **initialises an object to a given state**.

## Key terms

| Term | Meaning |
|---|---|
| Class | A template defining the attributes and methods shared by a kind of object |
| Attribute / property | A named item of data held by an object |
| Method | A subroutine in a class that works on an object's data |
| Object | One item created from a class, with its own attribute values |
| Instantiation | Creating an object from a class |
| Constructor | Method called automatically on instantiation to set the starting state |
| `self` | In Python, the first parameter of a method; refers to the object being worked on |
| Class attribute | An attribute shared by all objects of the class |
| Reference | A variable's link to an object; two variables can refer to one object |

## Why use OOP?

- Models real things, so programs are easier to design and understand.
- Classes are **reused** to make many objects (and, later, subclasses).
- A change in a class is made in **one place**.
- Data and the code that uses it are kept **together**.
- Different programmers can write different classes.

## Class and object in Python

```python
class Bicycle:
    def __init__(self, colour, gears):
        self.colour = colour
        self.gears = gears
        self.current_gear = 1

    def change_gear(self, new_gear):
        if 1 <= new_gear <= self.gears:
            self.current_gear = new_gear
            return True
        return False

red = Bicycle("red", 18)      # instantiation: constructor runs
```

- `Bicycle` is the class. `red` is an object (an instance).
- `__init__` is the constructor. `self.colour` is an attribute. `change_gear` is a method.
- `red.change_gear(7)` calls a method on the object. `red.colour` reads an attribute.

## Constructor facts

- Runs **once**, at instantiation, and sets the **starting state**.
- Its arguments are the values written in the brackets after the class name.
- Can have **default parameters**: `def __init__(self, watts=40)`.
- **Explicit** constructor: one you write. **Implicit**: the language supplies one if you write none, and it sets no attributes.
- In C# and VB.NET, a constructor has the name of the class rather than `__init__`.

## Object behaviour: worked reminders

*Separate objects.* `red.change_gear(7)` changes only `red`. `blue` keeps its own `current_gear`.

*References.* After `y = x`, both names refer to **one** object, so `y.change_gear(4)` is visible through `x`. A new object needs a new instantiation.

*Class attribute counting.*

```python
class Ticket:
    count = 0
    def __init__(self, seat):
        self.seat = seat
        Ticket.count = Ticket.count + 1
        self.number = Ticket.count
```

Three tickets created in turn get numbers 1, 2 and 3, and `Ticket.count` ends at 3.

## From description to class

1. Attributes are the data nouns.
2. Methods are the verbs (actions and calculations).
3. Constructor parameters are the values supplied at creation. Values that always start the same (such as `delivered = False`) are set inside the constructor.
4. Write every attribute with `self.`.

## Worked reminder: a Parcel class

*A parcel has a tracking code and a weight in kilograms, and starts as not delivered. It can be marked as delivered. Sending costs 3.50 plus 1.25 per kilogram.*

```python
class Parcel:
    def __init__(self, tracking, weight_kg):
        self.tracking = tracking
        self.weight_kg = weight_kg
        self.delivered = False

    def mark_delivered(self):
        self.delivered = True

    def cost(self):
        return 3.50 + 1.25 * self.weight_kg
```

A parcel of 2 kg costs 3.50 + 2.50 = 6.00. A parcel of 4 kg costs 8.50. Marking one parcel delivered leaves the other unchanged, because each object holds its own `delivered` attribute.

## Tracing object state

Write a small table with a column for each attribute and a row for each statement.

| Statement | `red.current_gear` | `blue.current_gear` |
|---|---|---|
| `red = Bicycle("red", 18)` | 1 | |
| `blue = Bicycle("blue", 3)` | 1 | 1 |
| `red.change_gear(7)` | 7 | 1 |
| `blue.change_gear(5)` (rejected, only 3 gears) | 7 | 1 |

Each object has its own state, so a method call changes only the object it is called on.

## How the topic is assessed

Section 3.9 is assessed in Unit 3 (Advanced Programming), an on-screen exam available in C#, Python or VB.Net. Questions ask you to write and test programs, so you must be able to write class definitions, constructors and object creation in your chosen language, not only describe them.

## Exam traps

- **Missing `self`.** `colour = colour` makes a local variable that disappears. Use `self.colour = colour`.
- **Missing `self` parameter.** Each method needs `self` as its first parameter.
- **Class versus object.** The class is the template, and an object is one thing made from it.
- **Copy or reference?** `y = x` copies the reference, not the object.
- **Constructor returning a value.** A constructor sets up the object. It is not written to return one.
- **Calling `__init__` directly.** Instantiate with `ClassName(arguments)`.

## Quick self-test

1. Define the term class.
2. Define the term object.
3. What is instantiation?
4. What is the purpose of a constructor?
5. Which attribute is created by `self.speed = 0`?
6. Give two reasons why OOP is used.
7. What does `x = Bicycle("red", 5)` do?
8. After `a = Score("Ana")` and `c = a`, how many objects exist?
9. What is an implicit constructor?
10. How is a class attribute different from an ordinary attribute?
11. Write the first line of a constructor for a `Parcel` class that takes a tracking code and a weight.
12. Why is `colour = colour` wrong in a constructor?

### Answers

1. A template that defines the attributes and methods shared by a kind of object.
2. An instance of a class, with its own values for the attributes.
3. Creating an object from a class.
4. It is called when an object is created and sets the object to a given starting state.
5. An attribute named `speed` on the object, starting at 0.
6. Any two from: models real-world things, code reuse, easier maintenance, data and methods kept together, team working.
7. Creates a new `Bicycle` object, runs its constructor with "red" and 5, and makes `x` refer to it.
8. One. Both names refer to the same object.
9. A constructor supplied by the language when the programmer writes none.
10. A class attribute belongs to the class and is shared by all objects; an ordinary attribute belongs to each object.
11. `def __init__(self, tracking, weight_kg):`
12. It assigns to a local variable, not an attribute of the object. It should be `self.colour = colour`.

## Next steps

- [Classes, objects and instantiation study guide](/resources/oxfordaqa-a-level-computer-science-9645-classes-objects-instantiation/)
- [Classes, objects and instantiation practice questions](/resources/oxfordaqa-a-level-computer-science-9645-classes-objects-instantiation-practice/)
- [Encapsulation revision notes](/resources/oxfordaqa-a-level-computer-science-9645-encapsulation-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.9.1 Classes, objects and instantiation.
