---
title: "OxfordAQA A-Level Computer Science (9645): Encapsulation -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Encapsulation Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 9 – Object-oriented and additional programming"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 9.2
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "object-oriented-and-additional-programming"
  - qualification: "a-level"
    topic: "object-oriented-and-additional-programming"
    subtopic: "encapsulation-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.9.2: encapsulation, public, private and protected access, Python naming, getters and setters, and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.9.2 Encapsulation** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (A-level content in topic 3.9 Object-oriented and additional programming). For explanations and full examples, see the [encapsulation study guide](/resources/oxfordaqa-a-level-computer-science-9645-encapsulation/); then practise with the [encapsulation practice questions](/resources/oxfordaqa-a-level-computer-science-9645-encapsulation-practice/). Code is Python.

## What the specification requires

- Know what **encapsulation** is and how it is used: the ways a class operates and represents data are **hidden** from other classes.
- **Design classes** to use encapsulation appropriately.
- Use **public, private and protected** access modifiers (also called access specifiers) to decide which classes can access properties and methods.
- If using Python, know the **naming conventions** for public, private and protected.
- Use **getter and setter** methods for controlled access to data in a class.

## Key terms

| Term | Meaning |
|---|---|
| Encapsulation | Bundling data with its methods and hiding the internal details from other classes |
| Access modifier / specifier | Setting that decides which code may use a property or method |
| Public | Accessible from any code |
| Private | Accessible only within the class |
| Protected | Accessible within the class and its subclasses |
| Getter | Public method that returns the value of an attribute |
| Setter | Public method that sets an attribute, usually after validating the new value |
| Validation | Checking that a value is acceptable before using it |
| Name mangling | Python renaming a `__name` attribute so outside code cannot use the plain name |

## Access summary

| Modifier | Same class | Subclass | Other classes | Python | Class diagram |
|---|---|---|---|---|---|
| Public | Yes | Yes | Yes | `name` | + |
| Protected | Yes | Yes | No | `_name` | # |
| Private | Yes | No | No | `__name` | − |

In C# and VB.Net the modifiers are written as keywords: `public`, `protected`, `private` (VB.Net: `Public`, `Protected`, `Private`).

## Why encapsulate?

- **Protects data:** it cannot be set to an invalid value, because a setter checks it.
- **Hides detail:** other classes use the public methods only.
- **Allows change:** the inside of a class can be rewritten without changing code that uses it.
- **Easier to debug:** only the class's own methods can change its data.
- **Easier to use:** other programmers learn the interface, not the internals.

## Pattern: private attribute, getter, setter

```python
class Thermostat:
    def __init__(self, room, target):
        self.room = room            # public
        self.__target = 18          # private
        self.set_target(target)

    def get_target(self):
        return self.__target

    def set_target(self, value):
        if 5 <= value <= 30:
            self.__target = value
            return True
        return False
```

- `Thermostat("Lab", 21)` gives a target of 21.
- `set_target(45)` returns `False` and leaves the target unchanged.
- `t.__target` from outside raises an `AttributeError`.
- No getter or setter at all: the attribute is hidden. A getter only: read-only. A setter with validation: controlled change.

## Worked reminder: a class that defends itself

```python
class Wallet:
    def __init__(self, amount):
        self.__balance = amount
    def get_balance(self):
        return self.__balance
    def spend(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance = self.__balance - amount
            return True
        return False
```

A wallet of 20: `spend(30)` returns `False` and the balance stays 20; `spend(8)` returns `True` and leaves 12. The balance can never go negative.

## Design checklist

1. Attributes: **private** (or protected if a subclass needs them).
2. Methods used by other classes: **public**.
3. Helper methods: **private**.
4. Getter for each attribute others need to read.
5. Setter only where outside change is allowed, with **validation**.
6. Never expose an attribute that has rules without a setter that applies them.

## Hiding how data is stored

A class can store data in a different form from the one it shows. A temperature class might store kelvin internally but offer `get_celsius` and `set_celsius` publicly. If the class later changes to store Fahrenheit, only the inside changes. Code that calls the public methods is not affected. This is one of the strongest reasons for hiding the representation: **the interface stays stable while the implementation changes**.

## Read-only, write-only and controlled data

| Design | What outside code can do | Example |
|---|---|---|
| Getter only | Read the value, not change it | A circle's radius, set once in the constructor |
| Getter and validating setter | Read, and change within the rules | A thermostat's target temperature (5 to 30) |
| Action methods only | Cause changes through named actions | A wallet changed by `spend` and `add` |
| No getter, no setter | Nothing directly | A PIN, checked only by `try_open(guess)` |

Choose the narrowest access that lets the class do its job.

## Spotting broken encapsulation

- A public attribute with rules about its value, such as an age or a balance.
- A setter that stores whatever it is given.
- A method that returns a private list directly, which lets outside code change the list. Return a copy or provide methods such as `count()` instead.
- A subclass that needs an attribute but is forced to use a public one. Protected is the better choice.
- A class whose users need to know how it stores data before they can use it.

## Exam traps

- **Half a definition.** Encapsulation is bundling **and** hiding.
- **Private versus protected.** Subclasses can use protected members, not private.
- **Decorative setters.** A setter with no check does not protect anything.
- **Wrong Python prefix.** One underscore is protected, two underscores private.
- **Forgetting `self.`** when using an attribute inside a method.
- **Diagram symbols.** + is public, − is private, # is protected.

## Quick self-test

1. What is encapsulation?
2. Which access modifier allows access only from inside the class?
3. Which modifier allows access from the class and its subclasses?
4. How do you write a private attribute `speed` in Python?
5. What symbol marks a protected member in a class diagram?
6. What is a getter?
7. Why might a setter contain an `if` statement?
8. How can a class make an attribute read-only?
9. Give two benefits of encapsulation.
10. What happens if outside code reads `obj.__speed`?
11. State the modifier you would normally give to an attribute and to a method that other classes need.
12. What is another name for an access modifier?

### Answers

1. Bundling data and methods together and hiding how the class works and stores data from other classes.
2. Private.
3. Protected.
4. `self.__speed`.
5. #.
6. A public method that returns the value of an attribute.
7. To validate the new value so the attribute never holds an invalid value.
8. Provide a getter but no setter.
9. Any two from: protects data from invalid values, hides detail, internals can change without affecting other code, easier debugging, simpler to use.
10. In Python an `AttributeError` is raised, because the name was mangled inside the class.
11. Private (or protected) for the attribute, and public for the method.
12. Access specifier.

## More on this topic

- [Encapsulation study guide](/resources/oxfordaqa-a-level-computer-science-9645-encapsulation/)
- [Encapsulation practice questions](/resources/oxfordaqa-a-level-computer-science-9645-encapsulation-practice/)
- [Relationships between classes revision notes](/resources/oxfordaqa-a-level-computer-science-9645-relationships-between-classes-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.9.2 Encapsulation.
