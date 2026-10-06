---
title: "OxfordAQA A-Level Computer Science: Object-oriented and additional programming (9645)"
seoTitle: "OxfordAQA A-Level CS 9645 OOP, Files and Recursion Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Object-oriented and additional programming"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
stage: "A"
order: 9
syllabusTopics:
  - qualification: "a-level"
    topic: "object-oriented-and-additional-programming"
description: "Study guide to OxfordAQA A-Level Computer Science section 3.9: classes, constructors, encapsulation, inheritance, association, text files and recursion."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This guide teaches section 3.9 Object-oriented and additional programming of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards. It covers sections 3.9.1 to 3.9.4, none of which appears in the International AS. The specification assesses it in Unit 3: Advanced Programming, taken on screen in C#, Python or VB.Net, where the AS programming content of sections 3.1 to 3.4 is also expected.

Pair this page with its [revision notes](/resources/oxfordaqa-a-level-computer-science-object-oriented-and-additional-programming-revision-notes/) and [practice set](/resources/oxfordaqa-a-level-computer-science-object-oriented-and-additional-programming-practice/). Every topic in the course is on the hub, [/boards/oxfordaqa/a-level/computer-science/](/boards/oxfordaqa/a-level/computer-science/), and you can tick off outcomes on the printable checklist, [/checklists/oxfordaqa/a-level/computer-science/](/checklists/oxfordaqa/a-level/computer-science/). A free [diagnostic](/diagnostics/) shows what to fix first.

Code here is Python, one of the three exam languages; the specification defines no pseudo-code style for this section, so C# and VB.Net keywords are given where they differ. All outputs shown were run.

## Coverage at a glance

Each outcome below is International A-level only.

| Spec | What you must be able to do |
|---|---|
| 3.9.1 | Say why the object-oriented paradigm is used; apply and identify class, attribute, method, object, instantiation, encapsulation, inheritance, overriding and association; create classes, objects and constructors |
| 3.9.2 | Explain and design for encapsulation; use public, private and protected; use getters and setters |
| 3.9.3 | Use inheritance, protected members, overriding and association; read class diagrams |
| 3.9.4.1 | Read from and write to a text file |
| 3.9.4.2 | Identify base and recursive cases; read, write and trace recursive code |

Subroutines, parameters and return values are taught in the [procedural programming guide](/resources/a-level-oxfordaqa-computer-science-procedural-programming/). Lists, which you will use to hold collections of objects, are in the [arrays and lists notes](/resources/oxfordaqa-a-level-computer-science-arrays-lists-revision-notes/).

## 3.9.1 Classes, objects and instantiation

### Why the paradigm is used

Object-oriented code packages data with the subroutines that act on it. That gives you:

- **A closer model of the problem.** Each real thing becomes one object holding its own data.
- **Protected data.** Other code changes an object only through its methods.
- **Reuse.** A subclass inherits working code instead of copying it.
- **Easier maintenance.** A class can be written and tested on its own, and its inside can change without breaking callers.

### The vocabulary

A **class** defines the property/attribute fields and the methods that capture the common characteristics and behaviours of a type of object. An **attribute** (or property) is a data field. A **method** is a subroutine that belongs to the class. An **object** is one instance built from the class. **Instantiation** is the act of creating that object.

A **constructor** is called when an object is instantiated. It initialises the object to a given state. In Python the constructor is `__init__`; in C# it is a method named after the class, and in VB.Net it is `Sub New`. If you write no constructor, the language supplies an implicit one.

### Worked example: a beekeeper's hives

```python
class Beehive:
    def __init__(self, hive_id, frames):
        self.hive_id = hive_id
        self.frames = frames
        self.honey_kg = 0.0

    def add_honey(self, kg):
        self.honey_kg = self.honey_kg + kg

    def describe(self):
        return self.hive_id + ": " + str(self.frames) + " frames, " + str(self.honey_kg) + " kg"

north = Beehive("HV3", 10)
south = Beehive("HV7", 8)
north.add_honey(4.5)
north.add_honey(2.25)
print(north.describe())
print(south.describe())
```

Output:

```
HV3: 10 frames, 6.75 kg
HV7: 8 frames, 0.0 kg
```

`Beehive` is the class; `hive_id`, `frames` and `honey_kg` are attributes; `add_honey` and `describe` are methods. `Beehive("HV3", 10)` instantiates an object, and the constructor runs at once to set its starting state, with `honey_kg` fixed at 0.0. `north` and `south` are separate objects, each with its own copy of every attribute, so adding honey to `north` leaves `south` untouched.

## 3.9.2 Encapsulation

**Encapsulation** hides how a class works and how it stores its data from other classes, which use only the methods it makes public.

### Access modifiers

| Modifier | Diagram symbol | Who can use the member | Python naming convention |
|---|---|---|---|
| public | + | any class | `name` |
| private | - | only the class itself | `__name` |
| protected | # | the class and its subclasses | `_name` |

Python has no access keywords. A single leading underscore is a convention only. A double leading underscore triggers **name mangling**: in class `Incubator`, `__target_c` is stored as `_Incubator__target_c`, so outside code cannot find `__target_c`. C# and VB.Net use the keywords `public`, `private` and `protected` (`Public`, `Private`, `Protected` in VB.Net).

### Getters and setters

A **getter** returns a private value. A **setter** changes it, but only after checking the new value. This is controlled access.

### Worked example: an egg incubator

The target temperature must stay between 36.0 °C and 39.5 °C.

```python
class Incubator:
    def __init__(self, tray_count):
        self.tray_count = tray_count
        self.__target_c = 37.5

    def get_target(self):
        return self.__target_c

    def set_target(self, new_c):
        if 36.0 <= new_c <= 39.5:
            self.__target_c = new_c
            return True
        return False

unit = Incubator(4)
print(unit.set_target(41.0), unit.get_target())
print(unit.set_target(38.2), unit.get_target())
```

Output:

```
False 37.5
True 38.2
```

The first call is rejected. Reading `unit.__target_c` from outside the class raises an `AttributeError`. Design rule: make attributes private by default and add only the getters and setters other classes need; a value with no setter is read-only from outside.

## 3.9.3 Relationships between classes

### Inheritance

**Inheritance** is a relationship in which one class is a more specialised version of an existing class. The general class is the **base class** (also called the parent class). The specialised one is the **subclass** (also called the derived class). Properties and methods common to both are defined once, in the base class.

### Protected members

A private base-class attribute cannot be used in the subclass; a public one is open to every class. **Protected** sits between: subclasses can use it, unrelated classes cannot.

### Overriding

**Overriding** redefines a base-class method in the subclass, so an instance of the subclass behaves differently. In C# the base method is declared `virtual` and the new one `override`. In VB.Net the keywords are `Overridable` and `Overrides`. Python needs no keyword: a method with the same name replaces the inherited one.

### Worked example: a plant nursery

```python
class Plant:
    def __init__(self, label, pot_litres):
        self.label = label
        self._pot_litres = pot_litres

    def weekly_water_ml(self):
        return self._pot_litres * 150

    def summary(self):
        return self.label + " needs " + str(self.weekly_water_ml()) + " ml a week"

class Cactus(Plant):
    def __init__(self, label, pot_litres, spines):
        super().__init__(label, pot_litres)
        self.spines = spines

    def weekly_water_ml(self):
        return self._pot_litres * 25

fern = Plant("Fern", 4)
aloe = Cactus("Aloe", 4, False)
print(fern.summary())
print(aloe.summary())
```

Output:

```
Fern needs 600 ml a week
Aloe needs 100 ml a week
```

`class Cactus(Plant)` makes `Cactus` a subclass that inherits `label`, `_pot_litres` and `summary`. Its constructor calls `super().__init__` so the base class sets up its own attributes, then adds `spines`. Because `_pot_litres` is protected, `Cactus` can use it. `Cactus` overrides `weekly_water_ml`, so the inherited `summary`, run on `aloe`, calls the new version: 4 × 25 = 100.

### Association

**Association** is a relationship between two objects in which one object can make use of another. It is much weaker than inheritance: neither class is a version of the other, and both kinds of object can exist on their own. You will not be asked to tell aggregation and composition apart.

`Singer` is a small class with public attributes `given_name` and `part`.

```python
class Choir:
    def __init__(self, title):
        self.title = title
        self.members = []

    def enrol(self, singer):
        self.members.append(singer)

    def count_part(self, part):
        total = 0
        for s in self.members:
            if s.part == part:
                total = total + 1
        return total
```

Enrol three singers (Rafe tenor, Leocadia alto, Oskar tenor) in an evening choir and only Rafe in a festival choir. `count_part("tenor")` returns 2 and 1. Rafe is one object used by both choirs, never copied. Test: "a Cactus **is a** Plant" means inheritance; "a Choir **uses** Singers" means association.

### Class diagrams

The specification shows inheritance as a line with an unfilled triangle head, and association as a plain line. In the usual convention the triangle points at the base class. Members carry + (public), - (private) or # (protected).

```
 ---------------------------
| Plant                     |
|---------------------------|
| + label : String          |
| # pot_litres : Integer    |
|---------------------------|
| + weekly_water_ml() : Int |
| + summary() : String      |
 ---------------------------
             △
             |
 ---------------------------
| Cactus                    |
|---------------------------|
| + spines : Boolean        |
|---------------------------|
| + weekly_water_ml() : Int |
 ---------------------------

 Choir ------------------ Singer
```

`Cactus` lists `weekly_water_ml` again because it overrides it, but not the inherited `summary`.

## 3.9.4.1 Files

You must be able to write to and read from a text file. Three steps: **open** the file in a mode, **read or write** lines, **close** it. In Python, `with open(...)` closes the file for you.

| Mode | Effect |
|---|---|
| `"r"` | read; the file must exist |
| `"w"` | write; creates the file, or wipes an existing one |
| `"a"` | append; adds to the end, keeping what is there |

### Worked example: greenhouse readings

`readings.txt` holds one whole-number temperature per line: 14, 17, 21, 19, 16, 22.

```python
temps = []
with open("readings.txt", "r") as f:
    for line in f:
        temps.append(int(line.strip()))

mean = sum(temps) / len(temps)
with open("summary.txt", "w") as f:
    f.write("Readings: " + str(len(temps)) + "\n")
    f.write("Mean: " + str(round(mean, 1)) + "\n")
    f.write("Highest: " + str(max(temps)) + "\n")
```

`summary.txt` then holds `Readings: 6`, `Mean: 18.2` and `Highest: 22`. Each line read ends in a newline, so `strip()` comes before `int()`; `write` adds none, so you add `"\n"`. Reopening with `"a"` and writing one line gives four lines; `"w"` would wipe the file first.

## 3.9.4.2 Recursion

A **recursive subroutine** calls itself. It has:

- a **base case**, where it does not call itself, which stops it recursing for ever;
- a **recursive case**, where it calls itself on a smaller version of the problem.

There may be more than one of each.

### Worked example 1: two base cases

`ways(n)` counts the ways to climb `n` steps taking one or two steps at a time.

```python
def ways(n):
    if n == 1:
        return 1
    if n == 2:
        return 2
    return ways(n - 1) + ways(n - 2)
```

Trace `ways(5)`, working down then adding back up:

```
ways(5) = ways(4) + ways(3)
ways(4) = ways(3) + ways(2)
ways(3) = ways(2) + ways(1) = 2 + 1 = 3
ways(4) = 3 + 2 = 5
ways(5) = 5 + 3 = 8
```

Result: **8**, from 9 calls in total (`ways(3)` is worked out twice). With only the `n == 1` base case, `ways(2)` would call `ways(0)`, which never reaches a base case.

### Worked example 2: recursion on a string

```python
def count_char(text, ch):
    if text == "":
        return 0
    if text[0] == ch:
        return 1 + count_char(text[1:], ch)
    return count_char(text[1:], ch)
```

One base case (empty string) and two recursive cases. Each call drops the first character, so the string shrinks towards the base case. `count_char("tattoo", "t")` returns **3**.

## Common errors

- Calling a class an object. The class is the template; `north` is the object.
- A setter that stores the value without checking it.
- Making a base attribute private and then using it in the subclass. Use protected.
- Using inheritance for a "uses" relationship. A Choir is not a kind of Singer.
- Opening a file with `"w"` when you meant `"a"`.
- A recursive case that does not move towards the base case.

Next, test yourself with the [practice questions](/resources/oxfordaqa-a-level-computer-science-object-oriented-and-additional-programming-practice/). Recursion is used again on trees in [advanced data structures](/resources/oxfordaqa-a-level-computer-science-advanced-data-structures/).

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.9 Object-oriented and additional programming.
