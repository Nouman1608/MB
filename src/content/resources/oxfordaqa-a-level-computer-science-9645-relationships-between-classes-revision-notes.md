---
title: "OxfordAQA A-Level Computer Science (9645): Relationships between classes -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Class Relationships Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 9 – Object-oriented and additional programming"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 9.3
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "object-oriented-and-additional-programming"
  - qualification: "a-level"
    topic: "object-oriented-and-additional-programming"
    subtopic: "relationships-between-classes-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.9.3: inheritance, base and subclasses, protected access, overriding, association, class diagrams and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.9.3 Relationships between classes** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (A-level content in topic 3.9 Object-oriented and additional programming). For explanations and examples, see the [relationships between classes study guide](/resources/oxfordaqa-a-level-computer-science-9645-relationships-between-classes/); then practise with the [relationships practice questions](/resources/oxfordaqa-a-level-computer-science-9645-relationships-between-classes-practice/). Code is Python.

## What the specification requires

- Know that **inheritance** makes one class a more specialised version of an existing class; **create classes using inheritance**.
- Know the **base class** (parent) and the **subclass** (derived class).
- Use the **protected** modifier so subclasses can access some members of the base class, but objects of other classes cannot.
- Know what **overriding** is and use it.
- Know that **association** is a relationship in which one object can make use of another, much weaker than inheritance; use it.
- Be familiar with **class diagrams** showing inheritance and association. Aggregation and composition need not be distinguished.

## Key terms

| Term | Meaning |
|---|---|
| Inheritance | A subclass takes on the attributes and methods of a base class |
| Base class (parent) | The class being inherited from |
| Subclass (derived class) | The class that inherits and adds or changes behaviour |
| Protected | Accessible in the class and its subclasses |
| Overriding | Redefining a base class method in a subclass |
| Association | One object holding a reference to another object and using it |
| `super()` | Python's way of reaching the base class (for the constructor, `super().__init__(...)`) |
| Virtual | In C# and VB.Net, a method must be declared virtual to be overridden |

## Inheritance or association?

| Test | Inheritance | Association |
|---|---|---|
| Phrase | "is a kind of" | "uses" or "has" |
| Example | Teacher is a kind of Staff | Team uses Player objects |
| Strength | Strong | Weak |
| Python | `class Teacher(Staff):` | An attribute that holds other objects (for example, a list) |

## Inheritance pattern

```python
class Staff:
    def __init__(self, name, base_pay):
        self.name = name
        self._base_pay = base_pay      # protected
    def monthly_pay(self):
        return self._base_pay

class Teacher(Staff):
    def __init__(self, name, base_pay, subject):
        super().__init__(name, base_pay)   # set up inherited attributes
        self.subject = subject
    def monthly_pay(self):                 # overrides the base method
        return self._base_pay + 200
```

- `Teacher` inherits `name` and `_base_pay`, and everything else in `Staff`.
- `Teacher("Rita", 2400, "Physics").monthly_pay()` gives 2600.
- A private (`__`) attribute in `Staff` cannot be used by name inside `Teacher`.

## Access in inheritance

| Member in base class | Subclass can use it? | Other classes? |
|---|---|---|
| Public (+) | Yes | Yes |
| Protected (#) | Yes | No |
| Private (−) | No | No |

## Overriding

- The subclass **redefines** a method with the same name and parameters.
- An object of the subclass uses the redefined version, so it behaves differently from an object of the base class.
- A base class method that calls `self.method()` uses the **subclass's version** when the object is a subclass object.
- `super().method()` can call the base version from inside the overriding method.
- In C# the base method must be `virtual`; in VB.Net it must be `Overridable`.

## Association pattern

```python
class Team:
    def __init__(self, title):
        self.title = title
        self.players = []                # holds references to Player objects
    def add_player(self, player):
        self.players.append(player)
    def total_goals(self):
        return sum(p.goals for p in self.players)
```

The same `Player` object can be referred to from more than one place. A change made to the player is seen by every object that refers to it.

## Class diagram rules

- Each class is a box with name, attributes and methods.
- Access symbols: **+** public, **−** private, **#** protected.
- **Inheritance:** a line with a **hollow triangle at the base class end**.
- **Association:** a **plain line**.
- A subclass box lists only the members it adds or overrides.

## Worked reminder: choosing relationships

*A library has books, e-books and members. An e-book is a book with a file size. A member can borrow several books.*

| Pair | Relationship | Reason |
|---|---|---|
| `EBook` and `Book` | Inheritance (`Book` is the base class) | An e-book is a kind of book |
| `Library` and `Book` | Association | A library has a collection of books; it is not a kind of book |
| `Member` and `Book` | Association | A member uses books by borrowing them |

If `EBook` needs the title that `Book` stores, make the title **protected** in `Book`. If the base class reports a shelf location, `EBook` can **override** that method to say that the book is downloaded.

## Worked reminder: overriding in action

```python
class Account:
    def withdraw(self, amount):          # base version: always allowed
        ...
class SavingsAccount(Account):
    def withdraw(self, amount):          # override: checks a limit first
        ...
```

An `Account` object runs the first version and a `SavingsAccount` object runs the second, even though the method name is the same. Inside the override, `super().withdraw(amount)` can reuse the base class version once the checks have passed.

## Reading a class diagram

1. Find the hollow triangle. The class it touches is the base class.
2. The classes at the other ends are subclasses.
3. Read the symbols: + public, − private, # protected.
4. A method that appears in both the base class and a subclass is overridden.
5. A plain line between classes means association.
6. Members listed only in the base class are inherited by the subclasses.

## Exam traps

- **Wrong relationship.** Make Team a subclass of Player? No. Team *uses* Player.
- **Forgot the base constructor.** The inherited attributes are then missing.
- **Private in a subclass.** Private base members cannot be used by name; use protected.
- **Not really overriding.** The method name and parameters must match the base method.
- **Triangle at the wrong end.** The triangle touches the base class.
- **Reversed class line.** `class Staff(Teacher)` makes Staff the subclass.

## Quick self-test

1. What does inheritance mean?
2. What is another name for a base class?
3. What is another name for a subclass?
4. What does the protected modifier allow?
5. What is overriding?
6. What is association?
7. Which phrase tests for inheritance?
8. How does a Python subclass call its base class constructor?
9. Which line type joins two classes in association on a class diagram?
10. Where is the triangle drawn on an inheritance line?
11. Why does a C# base method need `virtual`?
12. Why is "a Team is a kind of Player" a poor use of inheritance?

### Answers

1. A subclass is a more specialised version of an existing class and takes on its attributes and methods.
2. Parent class.
3. Derived class.
4. Access from the class and its subclasses, but not from objects of other classes.
5. A method from the base class is redefined in a subclass so that subclass objects behave differently.
6. A relationship in which one object can make use of another.
7. "Is a kind of".
8. `super().__init__(...)`.
9. A plain line.
10. At the base class end.
11. So that a subclass is allowed to override it.
12. A team is not a kind of player. A team uses players, so association is correct.

## Next steps

- [Relationships between classes study guide](/resources/oxfordaqa-a-level-computer-science-9645-relationships-between-classes/)
- [Relationships between classes practice questions](/resources/oxfordaqa-a-level-computer-science-9645-relationships-between-classes-practice/)
- [Additional programming revision notes](/resources/oxfordaqa-a-level-computer-science-9645-additional-programming-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.9.3 Relationships between classes.
