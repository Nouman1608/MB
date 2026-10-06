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
publishedDate: 2026-10-06
featured: false
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

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.9 Object-oriented and additional programming.
