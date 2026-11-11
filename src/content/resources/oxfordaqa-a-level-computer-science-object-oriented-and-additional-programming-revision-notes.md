---
title: "OxfordAQA A-Level Computer Science: Object-oriented and additional programming (9645) -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 OOP and Recursion Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed notes for OxfordAQA A-Level Computer Science (9645) on classes, access modifiers, inheritance, overriding, association, files and recursion."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-06
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

These notes condense section 3.9 Object-oriented and additional programming (3.9.1 to 3.9.4) of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards. Nothing here is in the International AS; the content is assessed in Unit 3: Advanced Programming, which you sit on screen using C#, Python or VB.Net. If a point below is unfamiliar, go back to the [study guide](/resources/oxfordaqa-a-level-computer-science-object-oriented-and-additional-programming/), which explains each idea with longer examples.

When these feel secure, move on to the [practice set](/resources/oxfordaqa-a-level-computer-science-object-oriented-and-additional-programming-practice/). Other topics in this course sit on the hub, [/boards/oxfordaqa/a-level/computer-science/](/boards/oxfordaqa/a-level/computer-science/); tick outcomes off on the checklist, [/checklists/oxfordaqa/a-level/computer-science/](/checklists/oxfordaqa/a-level/computer-science/); and the free [diagnostics](/diagnostics/) show which topics need work. Code is in Python; the specification sets no pseudo-code style for this section.

## 3.9.1 Key terms (International A-level only)

| Term | Definition to learn |
|---|---|
| Class | Defines the attributes and methods that capture the common characteristics and behaviours of a type of object |
| Property / attribute | A data field held by each object |
| Method | A subroutine defined in a class |
| Object | One instance of a class, with its own attribute values |
| Instantiation | Creating an object from a class |
| Constructor | Called when an object is instantiated; initialises it to a given state. Explicit if you write it, implicit if the language supplies it |
| Encapsulation | Hiding how a class works and how it represents data from other classes |
| Inheritance | One class is a more specialised version of an existing class |
| Overriding | A base-class method is redefined in a subclass so subclass instances behave differently |
| Association | One object can make use of another; much weaker than inheritance |

**Why use the paradigm?** It models problems as interacting objects, protects data behind methods, lets subclasses reuse tested code, and lets each class be built and tested separately.

### Small reminder

```python
class Telescope:
    def __init__(self, aperture_mm):
        self.aperture_mm = aperture_mm
        self.zoom = 1

scope = Telescope(90)
```

`Telescope` is the class. `__init__` is the constructor. `scope = Telescope(90)` is instantiation. The new object's state is `aperture_mm` 90 and `zoom` 1. A second `Telescope(120)` would be a separate object.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-object-oriented-and-additional-programming--13-oo-class-objects.webp" width="900" height="838" alt="The Beehive class is a template with attributes hive_id, frames and honey_kg and methods add_honey and describe. Instantiating it twice gives two separate objects: north with hive_id HV3, 10 frames and 6.75 kg of honey (after adding 4.5 and 2.25), and south with hive_id HV7, 8 frames and 0.0 kg. Each object has its own copy of every attribute, so adding honey to north leaves south unchanged." loading="lazy">
  <figcaption>A class is the template; north and south are separate objects with their own attributes.</figcaption>
</figure>


## 3.9.2 Access modifiers and encapsulation

| Modifier | Symbol | Accessible from | Python convention | C# / VB.Net |
|---|---|---|---|---|
| public | + | anywhere | `name` | `public` / `Public` |
| private | - | the class only | `__name` (name mangled) | `private` / `Private` |
| protected | # | the class and its subclasses | `_name` (convention only) | `protected` / `Protected` |

**Method in steps: designing an encapsulated class**

1. Make every attribute private unless there is a reason not to.
2. Add a getter for each value other classes must read.
3. Add a setter only where outside change is allowed, and validate inside it.
4. Have the setter report failure (return False, or raise an exception).
5. Make an attribute protected only when a subclass needs it.

A reminder in code, with a lap counter that may only go up:

```python
class LapCounter:
    def __init__(self):
        self.__laps = 0
    def get_laps(self):
        return self.__laps
    def add_lap(self):
        self.__laps = self.__laps + 1
```

There is no setter at all, so no outside class can lower the count. Encapsulation is about choosing what to expose, not only adding getters and setters for everything.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-object-oriented-and-additional-programming--14-oo-encapsulation.webp" width="900" height="900" alt="The Incubator keeps its target temperature in a private attribute, __target_c, starting at 37.5. Other code can reach it only through the public methods set_target and get_target. The setter accepts values from 36.0 to 39.5 only: set_target(41.0) returns False and the target stays 37.5, while set_target(38.2) returns True and the target becomes 38.2. Reading unit.__target_c directly from outside the class raises an AttributeError." loading="lazy">
  <figcaption>A setter guards a private attribute; direct access from outside fails.</figcaption>
</figure>


## 3.9.3 Relationships between classes

### Inheritance in steps

1. Put shared attributes and methods in the **base class** (parent class).
2. Declare the **subclass** (derived class): `class Sub(Base):` in Python, `class Sub : Base` in C#, `Inherits Base` in VB.Net.
3. In the subclass constructor, call the base constructor first (`super().__init__(...)` in Python).
4. Add only what is new.
5. Override any method that must behave differently.

### Overriding keywords

| Language | Base-class method | Subclass method |
|---|---|---|
| C# | `virtual` | `override` |
| VB.Net | `Overridable` | `Overrides` |
| Python | no keyword | same name |

An inherited method that calls an overridden one runs the subclass version when the object is a subclass instance.

### Must-know distinctions

- **Class vs object.** A class is written once; many objects are made from it.
- **Inheritance vs association.** "Is a more specialised kind of" means inheritance. "Uses" or "has a link to" means association. A Ward is associated with its Patients; a Ward is not a kind of Patient.
- **Private vs protected.** Both hide a member from unrelated classes. Only protected lets subclasses in.
- **Overriding vs adding.** Overriding redefines an inherited method with the same name. Adding a new method is not overriding.
- **Aggregation vs composition.** Not required: the specification says you will not need to distinguish them.

### Class diagram key

- Inheritance: a line with an unfilled triangle head; by convention the triangle points at the base class.
- Association: a plain line between the two classes.
- Each box: class name, then attributes, then methods, each marked +, - or #.
- A subclass box repeats only new members and overridden methods.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-object-oriented-and-additional-programming--15-oo-inheritance.webp" width="900" height="914" alt="Class diagram. Plant has public attribute label, protected attribute pot_litres, and methods weekly_water_ml and summary. Cactus inherits from Plant (unfilled triangle pointing at the base class), adds a public spines attribute and overrides weekly_water_ml. A fern, which is a Plant, with a 4 litre pot needs 4 times 150, which is 600 millilitres a week. An aloe, which is a Cactus, with the same pot needs 4 times 25, which is 100 millilitres, because the inherited summary method calls the overridden version." loading="lazy">
  <figcaption>Cactus inherits from Plant and overrides weekly_water_ml, so aloe needs 100 ml not 600 ml.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-object-oriented-and-additional-programming--16-oo-association.webp" width="900" height="830" alt="An evening choir has three singers: Leocadia (alto), Oskar (tenor) and Rafe (tenor). A festival choir has only Rafe. Plain lines show association: a Choir uses Singers. count_part for tenor returns 2 for the evening choir and 1 for the festival choir. Rafe is a single object shared by both choirs, not copied. Compare: a Cactus is a Plant is inheritance, whereas a Choir uses Singers is association." loading="lazy">
  <figcaption>One Singer object used by two Choir objects; association is weaker than inheritance.</figcaption>
</figure>


## 3.9.4.1 Text files

**Method in steps: reading**

1. Open in `"r"` mode.
2. Loop over lines.
3. `strip()` the newline; convert with `int()` or `float()` if needed; `split(",")` for several fields.
4. Close (automatic with `with`).

**Method in steps: writing**

1. Open in `"w"` (new or wipe) or `"a"` (add to end).
2. Convert numbers with `str()`.
3. Write each line with `"\n"` at the end.
4. Close, so the data is saved.

```python
with open("log.txt", "a") as f:
    f.write("door opened\n")
```

This adds one line to the end of `log.txt` and creates the file if it does not exist.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-object-oriented-and-additional-programming--17-oo-file-modes.webp" width="900" height="900" alt="Three file modes: r reads and the file must exist; w writes and creates the file or wipes an existing one; a appends to the end and keeps what is there. In the example, readings.txt holds six temperatures 14, 17, 21, 19, 16 and 22. The program reads them, works out the mean and the highest, and writes summary.txt with three lines: Readings: 6, Mean: 18.2 and Highest: 22. strip() removes the newline before int(), and write adds no newline of its own. Reopening summary.txt with a and writing one line gives four lines; w would wipe it first." loading="lazy">
  <figcaption>File modes r, w and a, and the readings-to-summary example.</figcaption>
</figure>


## 3.9.4.2 Recursion

- A **recursive subroutine** calls itself.
- **Base case:** the subroutine does not call itself. It stops the recursion.
- **Recursive case:** it calls itself on a smaller problem.
- There may be more than one of each.
- With no reachable base case it recurses indefinitely; in practice the program crashes with a stack overflow (a `RecursionError` in Python).

**Method in steps: tracing**

1. Write the first call.
2. Below it, write each new call with its argument, indenting one level.
3. Stop at a base case and write its return value.
4. Work back up, replacing each call with its value.

**Worked reminder.**

```python
def halvings(n):
    if n <= 1:
        return 0
    return 1 + halvings(n // 2)
```

`halvings(40)`: 40 → 20 → 10 → 5 → 2 → 1. The base case returns 0; five recursive calls each add 1. Result: **5**.

## Quick self-test

1. What does a constructor do?
2. Name the three access modifiers and their class diagram symbols.
3. Which Python naming style is enforced by the interpreter, and how?
4. State one reason for using getters and setters rather than public attributes.
5. Which C# keyword must a base-class method carry before it can be overridden?
6. An `Orchestra` object stores references to several `Violinist` objects. Which relationship is this?
7. A file is opened with `"w"` and already holds 30 lines. One line is written. How many lines does it now hold?
8. What does this return for `tri(6)`?

```python
def tri(n):
    if n == 0:
        return 0
    return n + tri(n - 1)
```

9. What does `echo("lamp")` return?

```python
def echo(s):
    if len(s) <= 1:
        return s
    return s[-1] + echo(s[:-1])
```

10. What does `step3(14)` return?

```python
def step3(n):
    if n < 3:
        return n
    return step3(n - 3) + 1
```

### Answers

1. It is called when an object is instantiated and initialises the object to a given state.
2. Public (+), private (-), protected (#).
3. A double leading underscore (private): the name is mangled to `_ClassName__name`. A single underscore is only a convention.
4. The setter can validate a new value before storing it, so the object cannot reach an invalid state.
5. `virtual` (the subclass method uses `override`).
6. Association.
7. One line. `"w"` wipes the existing content first.
8. **21** (6 + 5 + 4 + 3 + 2 + 1 + 0).
9. **"pmal"**. Each call takes the last character and puts it in front.
10. **6**. 14 → 11 → 8 → 5 → 2; the base case returns 2 and four recursive calls add 1 each.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-object-oriented-and-additional-programming--18-oo-recursion-ways.webp" width="900" height="900" alt="Call tree for ways(n), which counts the ways to climb n steps taking one or two at a time. ways(5) calls ways(4) and ways(3); ways(4) calls ways(3) and ways(2); each ways(3) calls ways(2) and ways(1). The base cases ways(1) = 1 and ways(2) = 2 stop the recursion. Working back up gives ways(3) = 3, ways(4) = 5 and ways(5) = 8. There are 9 calls in total, and ways(3) is worked out twice." loading="lazy">
  <figcaption>The 9 calls of ways(5), with two base cases and ways(3) worked out twice.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-object-oriented-and-additional-programming--19-oo-recursion-string.webp" width="900" height="854" alt="The recursive function count_char counts how often a character appears in a string. Each call removes the first character: tattoo, attoo, ttoo, too, oo, o, then the empty string, which is the base case and returns 0. Going back up, o and oo return 0, too returns 1 plus 0 which is 1, ttoo returns 1 plus 1 which is 2, attoo returns 2, and tattoo returns 1 plus 2 which is 3. The first character is highlighted in gold when it matches t." loading="lazy">
  <figcaption>Each call drops a character until the empty-string base case, then results add back up.</figcaption>
</figure>


## Where marks are usually lost

- Defining a constructor as "creates the object" without saying it sets the starting state.
- Writing "encapsulation means private attributes" with no mention of hiding how the class works.
- Making a base-class attribute private and then reading it in a subclass method.
- Forgetting to call the base constructor, so inherited attributes are never set.
- Overriding with a different name, which adds a method instead of replacing one.
- In C# or VB.Net, forgetting `virtual`/`Overridable` on the base method.
- Calling a "uses" link inheritance, or drawing the inheritance triangle at the subclass end.
- Not stripping newlines before converting a line to a number.
- Choosing `"w"` instead of `"a"` and losing existing file data.
- A recursive case that does not move towards the base case, or a trace that stops before working back up.

## Frequently asked questions

**What are the three access modifiers and their class diagram symbols?**
Public (+) members can be used from anywhere, private (-) members only from the class itself, and protected (#) members from the class and its subclasses. In Python these correspond to name, __name and _name.

**What is the difference between inheritance and association?**
If one class "is a more specialised kind of" another, use inheritance. If one object "uses" or "has a link to" another, use association.

**What is the difference between overriding and adding a method?**
Overriding redefines an inherited method in a subclass using the same name. Giving the method a different name adds a new method instead of replacing the inherited one.

**Do you need to know the difference between aggregation and composition for 9645?**
No. The OxfordAQA 9645 specification says you will not need to distinguish aggregation from composition.

**What happens if a recursive subroutine has no reachable base case?**
It recurses indefinitely, and in practice the program crashes with a stack overflow. Each recursive case must call the subroutine on a smaller problem that moves towards a base case.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.9 Object-oriented and additional programming.
