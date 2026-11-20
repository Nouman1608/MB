---
title: "OxfordAQA A-Level Computer Science (9645): Classes, objects and instantiation -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Classes and Objects Questions"
resourceType: "practice-questions"
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
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.9.1: writing classes and constructors, instantiation, object references and tracing, with full answers."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.9.1 Classes, objects and instantiation** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: why object-oriented programming is used, classes, attributes, methods, objects, instantiation and constructors. Code is Python. Output shown in the answers was produced by running the code.

Related pages: [classes and objects study guide](/resources/oxfordaqa-a-level-computer-science-9645-classes-objects-instantiation/) ·
[classes and objects revision notes](/resources/oxfordaqa-a-level-computer-science-9645-classes-objects-instantiation-revision-notes/) ·
[object-oriented and additional programming practice questions](/resources/oxfordaqa-a-level-computer-science-object-oriented-and-additional-programming-practice/)

## Section A

**1.** Explain the difference between a class and an object. **[2]**

**2.** State what is meant by instantiation and what a constructor does during it. **[2]**

**3.** State two reasons why the object-oriented paradigm is used. **[2]**

**4.** Explain the difference between an explicit constructor and an implicit constructor. **[2]**

## Section B

**5.** A kettle has a capacity in litres and a temperature in degrees Celsius. A new kettle is at 20 degrees. The temperature rises by a given number of degrees when the kettle is heated, but never above 100. A method tells whether the kettle is boiling, meaning that its temperature is exactly 100.

Write a Python class `Kettle` with a constructor and the two methods `heat` and `is_boiling`. **[6]**

**6.** Using your class from question 5, a program runs these lines.

```python
k = Kettle(1.5)
k.heat(50)
print(k.temperature, k.is_boiling())
k.heat(60)
print(k.temperature, k.is_boiling())
```

State the output. **[2]**

**7.** Write Python code that creates three `Kettle` objects with capacities 1.5, 1.0 and 1.7 litres, stores them in a list, and displays the total capacity. **[4]**

**8.** Trace this program and state the output.

```python
class Score:
    def __init__(self, name):
        self.name = name
        self.points = 0

    def add(self, n):
        self.points = self.points + n

a = Score("Ana")
b = Score("Ben")
c = a
a.add(5)
b.add(2)
c.add(3)
print(a.points, b.points, c.points)
print(a is c, a is b)
```

**[4]**

**9.** This class contains errors.

```python
class Door:
    def __init__(colour):
        self.colour = colour
        locked = True

    def lock(self):
        locked = True
```

Identify three errors and give the corrected class. **[5]**

**10.** A class keeps count of the visitors created.

```python
class Visitor:
    total = 0

    def __init__(self, name):
        self.name = name
        Visitor.total = Visitor.total + 1
        self.id = Visitor.total

v = [Visitor("x"), Visitor("y")]
w = Visitor("z")
print(v[0].id, v[1].id, w.id, Visitor.total)
```

**(a)** State the output. **[2]**
**(b)** Explain why `total` is declared in the class and not set in the constructor as `self.total`. **[2]**

**11.** A class `Pupil` has attributes `name` and `year` and a method `describe` that returns the pupil's name followed by the text " is in year " and the year number.

**(a)** Write the class, including a constructor. **[4]**
**(b)** Write the statements that create a pupil called "Sam" in year 9 and display the description. **[2]**

## Answers

**1.** A class is a template that defines the attributes and methods for a kind of thing [1]. An object is one particular instance created from the class, with its own attribute values [1]. **[2]**

**2.** Instantiation is creating an object from a class [1]. The constructor is called automatically and initialises the object to a given state [1]. **[2]**

**3.** Any two from: it models real-world things; classes can be reused to create many objects; changes are made in one place so the code is easier to maintain; data and methods are kept together; different programmers can write different classes [1 each]. **[2]**

**4.** An explicit constructor is one that the programmer writes (for example `__init__`) [1]. An implicit constructor is one supplied by the language when none is written, and it does not set any attributes [1]. **[2]**

**5.** Example answer:

```python
class Kettle:
    def __init__(self, capacity_litres):          # [1] class and constructor header
        self.capacity_litres = capacity_litres    # [1] attribute from the parameter
        self.temperature = 20                     # [1] starts at 20

    def heat(self, degrees):
        self.temperature = self.temperature + degrees   # [1] adds the rise
        if self.temperature > 100:
            self.temperature = 100                       # [1] capped at 100

    def is_boiling(self):
        return self.temperature == 100                   # [1]
```

**[6]**

**6.** The output is:

```
70 False
100 True
```

First line [1]; second line [1]. (20 + 50 = 70, then 70 + 60 = 130, which is capped at 100.) **[2]**

**7.** Example answer:

```python
kettles = [Kettle(1.5), Kettle(1.0), Kettle(1.7)]   # [2] three objects in a list
total = 0
for k in kettles:                                    # [1] iterates
    total = total + k.capacity_litres
print(total)                                         # [1] displays 4.2
```

The output is `4.2`. **[4]**

**8.** Output:

```
8 2 8
True False
```

`c = a` makes both names refer to one object [1]. `a.points` is 5 + 3 = 8 [1] and `c.points` is the same, 8 [1]. `b.points` is 2, with `a is c` True and `a is b` False [1]. **[4]**

**9.** Errors (any three, 1 each): the constructor does not have `self` as its first parameter; `locked = True` in the constructor creates a local variable instead of the attribute `self.locked`; `locked = True` in `lock` also creates a local variable; the constructor has no parameter for `self` so the call would fail. Corrected class [2]:

```python
class Door:
    def __init__(self, colour):
        self.colour = colour
        self.locked = True

    def lock(self):
        self.locked = True
```

**[5]**

**10. (a)** `1 2 3 3` [2: 1 for the ids, 1 for the total]
**(b)** `total` has to be shared by all `Visitor` objects [1]. If it were set as `self.total` in the constructor, each object would have its own copy starting from 0, so the count could not be shared between them [1]. **[2]**

**11. (a)** Example answer:

```python
class Pupil:
    def __init__(self, name, year):       # [1] constructor with self, name and year
        self.name = name                  # [1] attribute name
        self.year = year                  # [1] attribute year
    def describe(self):
        return self.name + " is in year " + str(self.year)   # [1] method with str()
```

**[4]**
**(b)** `sam = Pupil("Sam", 9)` [1] and `print(sam.describe())` [1], which displays `Sam is in year 9`. **[2]**

## Frequently asked questions

**Do I have to use Python in the exam?**
Unit 3, which assesses section 3.9, is an on-screen exam available in C#, Python or VB.Net, so you use the language you have been taught. Know the syntax of your own language.

**Is `self` a keyword?**
No, it is a convention in Python for the first parameter of a method. Always use it.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.9.1 Classes, objects and instantiation.
