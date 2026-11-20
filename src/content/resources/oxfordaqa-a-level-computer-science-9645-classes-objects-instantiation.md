---
title: "OxfordAQA A-Level Computer Science (9645): Classes, objects and instantiation"
seoTitle: "OxfordAQA A-Level CS 9645 Classes and Objects Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.9.1 in depth: why object-oriented programming is used, classes, attributes, methods, objects, instantiation and constructors in Python."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.9.1 Classes, objects and instantiation** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.9 Object-oriented and additional programming (A-level). The specification asks you to know **why the object-oriented paradigm is used**; to be familiar with and able to apply and identify the concepts of **class, property/attribute, method, object, instantiation, encapsulation, inheritance, overriding and association**; to know what a class is and be able to create classes; to know what an object is and how to create objects using instantiation; to know that a **constructor** is called when an object is instantiated and be able to create constructor functions; and to know that a constructor initialises an object to a given state.

For quick recall use the [classes and objects revision notes](/resources/oxfordaqa-a-level-computer-science-9645-classes-objects-instantiation-revision-notes/), and test yourself with the [classes and objects practice questions](/resources/oxfordaqa-a-level-computer-science-9645-classes-objects-instantiation-practice/). The [object-oriented and additional programming study guide](/resources/oxfordaqa-a-level-computer-science-object-oriented-and-additional-programming/) covers all of topic 3.9. This page goes deeper on the first sub-topic, with new examples and exact program output. Encapsulation and inheritance have their own pages, starting with the [encapsulation study guide](/resources/oxfordaqa-a-level-computer-science-9645-encapsulation/). Code is Python. Indentation matters, and the program output shown was produced by running the code.

## Why object-oriented programming is used

In procedural programming the data and the subroutines that work on it are separate. In **object-oriented programming (OOP)** a program is built from **objects**. Each object bundles together its **data** and the **methods** that work on that data. Reasons for using it:

- **It models the real world.** A program about bicycles, bank accounts or players can have objects that match those things, which makes the design easier to understand.
- **Reuse.** A class is written once and many objects are made from it. Through inheritance (3.9.3) a new class can build on an existing one.
- **Easier maintenance.** A change to how a class works is made in one place. Other code that uses the class need not change if its public methods stay the same.
- **Data protection.** With encapsulation (3.9.2), an object controls how its data is changed.
- **Team working.** Different programmers can write different classes, as long as they agree how the classes will be used.

## The vocabulary

| Term | Meaning |
|---|---|
| Class | A template that defines the attributes and methods shared by a kind of object |
| Property / attribute | A named piece of data stored in an object |
| Method | A subroutine defined in a class that works on an object's data |
| Object | One particular item created from a class, with its own values for the attributes |
| Instantiation | Creating an object from a class |
| Constructor | The method that runs automatically when an object is instantiated, to set its starting state |

The specification also names encapsulation, inheritance, overriding and association. These are covered in the next pages; here you only need to recognise the words and know they are part of the same paradigm.

## A class

The specification says that a class defines methods and property/attribute fields that capture the **common behaviours and characteristics** of objects. Here is a class for bicycles.

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

    def describe(self):
        return (self.colour + " bicycle, gear " + str(self.current_gear)
                + " of " + str(self.gears))
```

- `Bicycle` is the class.
- `colour`, `gears` and `current_gear` are the attributes. In Python they are created by assigning to `self.<name>`.
- `change_gear` and `describe` are methods. The first parameter, `self`, refers to the object that the method is working on.
- `__init__` is the constructor.

## Objects and instantiation

An object is created by **calling the class** as if it were a function. This is **instantiation**.

```python
red = Bicycle("red", 18)
blue = Bicycle("blue", 3)
print(red.describe())
print(blue.describe())
print(red.change_gear(7))
print(blue.change_gear(5))
print(red.describe())
print(blue.describe())
```

Output:

```
red bicycle, gear 1 of 18
blue bicycle, gear 1 of 3
True
False
red bicycle, gear 7 of 18
blue bicycle, gear 1 of 3
```

Two separate objects exist. Each has its **own** copy of the attributes. Changing the red bicycle to gear 7 did not affect the blue one. The request to move the blue bicycle to gear 5 returned `False` because it has only 3 gears, so its state did not change. Both objects use the same methods, because the methods belong to the class.

`red is blue` is `False`: they are different objects, even though they came from one class.

### Object references

A variable holds a **reference** to an object, not a copy of it. Look at this code.

```python
x = Bicycle("green", 5)
y = x
y.change_gear(4)
print(x.current_gear, x is y)
z = Bicycle("green", 5)
print(z.current_gear, x is z)
```

It prints `4 True` and then `1 False`. `y = x` does not create a new bicycle. Both names refer to the same object, so a change made through `y` is seen through `x`. `z` was created by instantiation, so it is a new object in its starting state.

## Constructors

A **constructor** is called when an object is instantiated, and it **initialises the object to a given state**. In Python it is the method named `__init__`. The values you pass when you create the object are given to the constructor's parameters.

- The constructor above sets `colour` and `gears` from the arguments and sets `current_gear` to 1, so that every new bicycle starts in first gear.
- A constructor can use **default parameter values**, which makes some arguments optional.

```python
class Lamp:
    def __init__(self, watts=40):
        self.watts = watts
        self.on = False

    def switch(self):
        self.on = not self.on

a = Lamp()
b = Lamp(60)
a.switch()
print(a.watts, a.on, b.watts, b.on)
```

This prints `40 True 60 False`. `Lamp()` used the default of 40 watts; `Lamp(60)` supplied its own value. Both lamps start off, because the constructor sets `on` to `False`, and only `a` was switched.

### Explicit and implicit constructors

The specification says objects are created using an **explicit or implicit constructor**. An **explicit** constructor is one that you write, like `__init__` above. If you write no constructor, the language supplies an **implicit** one that creates the object without setting any attributes. In Python, a class with no `__init__` still works.

```python
class Marker:
    pass

m = Marker()
m.label = "A"
print(m.label)
```

This prints `A`. The object was created by the implicit constructor in a default state, and the attribute was added afterwards. This is poor practice for real programs, because nothing guarantees that every object has the same attributes. Writing a constructor means every object starts in a valid, known state.

## Class attributes and counting objects

Normally attributes belong to each object. A **class attribute** belongs to the class and is shared by all of its objects. It is useful for a count.

```python
class Ticket:
    count = 0

    def __init__(self, seat):
        self.seat = seat
        Ticket.count = Ticket.count + 1
        self.number = Ticket.count

t1 = Ticket("A1")
t2 = Ticket("A2")
t3 = Ticket("B7")
print(t1.number, t2.number, t3.number, Ticket.count)
```

The output is `1 2 3 3`. Each ticket has its own `number`, taken from the shared `count` at the moment it was created.

## Using several objects together

Objects can be stored in a list like any other values.

```python
fleet = [Bicycle("red", 18), Bicycle("blue", 3), Bicycle("black", 21)]
total = 0
for b in fleet:
    total = total + b.gears
print(total)
```

This prints `42`, the total of 18, 3 and 21. A loop that visits every object and calls its methods is a very common pattern.

## Designing a class from a description

Exam questions often describe a situation and ask you to write the class. Work through it in four steps.

*A courier company stores parcels. Each parcel has a tracking code and a weight in kilograms, and starts as not delivered. A parcel can be marked as delivered. The cost of sending a parcel is 3.50 plus 1.25 for each kilogram.*

1. **Find the nouns that are data.** Tracking code, weight and delivery status are the attributes.
2. **Find the verbs.** Marking as delivered and working out the cost are the methods.
3. **Decide what the constructor receives.** The code and the weight are given when the parcel is created. The status always starts as `False`, so it is not a parameter.
4. **Write the class.**

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

Using it:

```python
p1 = Parcel("PX100", 2)
p2 = Parcel("PX101", 4)
print(p1.cost(), p2.cost())
p1.mark_delivered()
print(p1.delivered, p2.delivered)
```

The output is `6.0 8.5` and then `True False`. The costs are 3.50 + 1.25 × 2 = 6.00 and 3.50 + 1.25 × 4 = 8.50. Marking the first parcel as delivered changed only that object.

Mark schemes for this kind of question usually reward: the class header, a constructor with the right parameters, each attribute assigned with `self`, a correct starting value for the status, and each method with a correct body.

## Exam technique

- **Define terms briefly, then give an example.** "A class is a template that defines the attributes and methods of its objects, for example `Bicycle`."
- **Distinguish class and object.** The class is the blueprint, and each object is one item made from it, with its own attribute values.
- **In constructor questions, set every attribute.** Give each a starting value, taken from a parameter or fixed.
- **Remember `self`.** Attributes are `self.name` inside methods, and the first parameter of each method is `self` in Python.
- **Say how an object is created.** Name the class with the arguments, for example `Bicycle("red", 18)`.
- **Read the language in the question.** In C# and VB.NET, a constructor has the name of the class rather than `__init__`.

## Common mistakes

- Writing the attribute as a plain local name (`colour = colour`) rather than `self.colour = colour`.
- Forgetting `self` as the first parameter of a method.
- Saying that an object is a "type of class". An object is an instance of a class.
- Believing `y = x` copies the object. It copies the reference.
- Calling the constructor like a normal method (`red.__init__(...)`) instead of instantiating with the class name.
- Saying that a constructor returns the object. It sets up the new object; the language returns it.

## Next steps

- [Classes, objects and instantiation revision notes](/resources/oxfordaqa-a-level-computer-science-9645-classes-objects-instantiation-revision-notes/)
- [Classes, objects and instantiation practice questions](/resources/oxfordaqa-a-level-computer-science-9645-classes-objects-instantiation-practice/)
- [Encapsulation study guide](/resources/oxfordaqa-a-level-computer-science-9645-encapsulation/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.9.1 Classes, objects and instantiation.
