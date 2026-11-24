---
title: "OxfordAQA A-Level Computer Science (9645): Relationships between classes"
seoTitle: "OxfordAQA A-Level CS 9645 Class Relationships Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.9.3 in depth: inheritance, base and subclasses, protected access, overriding, association and class diagrams, with run examples."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.9.3 Relationships between classes** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.9 Object-oriented and additional programming (A-level). The specification asks you to know that **inheritance** is a relationship in which one class is a more specialised version of an existing class, and to create classes using it; to know the **base class** (parent) and **subclass** (derived class); to use the **protected** access modifier so that subclasses, but not objects of other classes, can access some members of a base class; to know and use **overriding**; to know and use **association**, a much weaker relationship than inheritance in which one object can make use of another; and to be familiar with **class diagrams** that show inheritance and association. Students are not required to distinguish between aggregation and composition.

For quick recall use the [relationships between classes revision notes](/resources/oxfordaqa-a-level-computer-science-9645-relationships-between-classes-revision-notes/), and test yourself with the [relationships practice questions](/resources/oxfordaqa-a-level-computer-science-9645-relationships-between-classes-practice/). The [object-oriented and additional programming study guide](/resources/oxfordaqa-a-level-computer-science-object-oriented-and-additional-programming/) covers all of topic 3.9. This page follows the [encapsulation study guide](/resources/oxfordaqa-a-level-computer-science-9645-encapsulation/). Code is Python, and the output shown was produced by running the code.

## Inheritance: an "is a" relationship

Inheritance lets a new class take over the attributes and methods of an existing class and add to them or change them. The existing class is the **base class** (also called the parent class). The new class is the **subclass** (also called the derived class). The test for inheritance is the phrase "**is a kind of**": a Teacher *is a* member of Staff, so Teacher can inherit from Staff. If the phrase sounds wrong, inheritance is the wrong tool.

The benefits:

- **Reuse.** Properties and methods common to all the classes are written once, in the base class, and are available to the subclasses too.
- **Specialisation.** Each subclass adds only what makes it different.
- **Maintenance.** A fix or change to common behaviour is made in one place.

### Creating a subclass

In Python the base class is named in brackets after the subclass name, and the subclass constructor calls the base class constructor with `super().__init__(...)`.

```python
class Staff:
    def __init__(self, name, base_pay):
        self.name = name
        self._base_pay = base_pay
        self.__badge = "S-" + name[:2].upper()

    def monthly_pay(self):
        return self._base_pay

    def describe(self):
        return self.name + " earns " + str(self.monthly_pay())

    def get_badge(self):
        return self.__badge

class Teacher(Staff):
    def __init__(self, name, base_pay, subject):
        super().__init__(name, base_pay)
        self.subject = subject

    def monthly_pay(self):
        return self._base_pay + 200

class Technician(Staff):
    def __init__(self, name, base_pay, on_call_days):
        super().__init__(name, base_pay)
        self.on_call_days = on_call_days

    def monthly_pay(self):
        return self._base_pay + 35 * self.on_call_days
```

`Teacher` and `Technician` both get `name`, `describe` and `get_badge` from `Staff` without rewriting them. Each adds one attribute of its own (`subject`, `on_call_days`).

## Protected access

Section 3.9.2 introduced the three access levels. Inheritance is where **protected** matters.

- A **private** member of the base class can be used only inside that class. A subclass cannot use it directly.
- A **protected** member can be used inside the base class **and its subclasses**, but not by objects of other classes.
- A **public** member can be used by anything.

In the example `_base_pay` is protected (one underscore in Python), so `Teacher` and `Technician` can use `self._base_pay` in their own methods. `__badge` is private, so a subclass cannot reach it by name. In a class diagram these are shown with the symbols # (protected), − (private) and + (public).

```python
t = Teacher("Rita", 2400, "Physics")
print(t.subject, t.get_badge())
```

This prints `Physics S-RI`. The subclass object can read the badge through the public method `get_badge`, which belongs to `Staff`. If a method in `Teacher` tried to read `self.__badge` directly, Python would raise an `AttributeError`, because the private name belongs to `Staff`.

## Overriding

**Overriding** is when a method from the base class is **redefined in a subclass**, so that an object of the subclass behaves differently from an object of the base class. The method keeps the same name and parameters. In the example, `monthly_pay` is defined in `Staff` and then redefined in `Teacher` and `Technician`.

```python
s = Staff("Omar", 2000)
t = Teacher("Rita", 2400, "Physics")
n = Technician("Joe", 1800, 4)
for p in (s, t, n):
    print(p.describe())
```

Output:

```
Omar earns 2000
Rita earns 2600
Joe earns 1940
```

The `describe` method is written only once, in `Staff`. It calls `self.monthly_pay()`, and Python uses the version that belongs to the object's own class. So the teacher's pay is 2400 + 200 = 2600, and the technician's pay is 1800 + 35 × 4 = 1940.

In C# and VB.Net, a method must be declared as **virtual** in the base class (`virtual` in C#, `Overridable` in VB.Net) for a subclass to override it. Python does not need this.

An `isinstance` check shows the "is a" relationship: `isinstance(t, Staff)` is `True`, because a teacher is a member of Staff, and `isinstance(s, Teacher)` is `False`, because a general staff member is not necessarily a teacher.

## Association

**Association** is a relationship between two objects in which **one object can make use of another**. It is much weaker than inheritance. There is no "is a" relationship. Instead, one object **has** or **uses** another. The specification's example is a football simulation in which a `Team` object is associated with `Player` objects.

```python
class Player:
    def __init__(self, name, goals):
        self.name = name
        self.goals = goals

class Team:
    def __init__(self, title):
        self.title = title
        self.players = []

    def add_player(self, player):
        self.players.append(player)

    def total_goals(self):
        total = 0
        for p in self.players:
            total = total + p.goals
        return total

    def top_scorer(self):
        best = self.players[0]
        for p in self.players:
            if p.goals > best.goals:
                best = p
        return best.name
```

```python
a = Player("Ivy", 7)
b = Player("Dev", 11)
c = Player("Mo", 4)
team = Team("Reds")
for p in (a, b, c):
    team.add_player(p)
print(team.total_goals(), team.top_scorer())
b.goals = 13
print(team.total_goals(), team.top_scorer())
```

Output:

```
22 Dev
24 Dev
```

The `Team` holds **references** to the `Player` objects. Each `Player` exists separately. When Dev's goals were changed to 13 through the variable `b`, the team's total changed to 24, because the team uses the very same object. A team is not a kind of player and a player is not a kind of team, so inheritance would be wrong here. Association is the right relationship.

## Inheritance or association?

| Question | Inheritance | Association |
|---|---|---|
| Relationship | "is a kind of" | "uses" or "has" |
| Example | Teacher is a kind of Staff | Team uses Player objects |
| Strength | Strong: the subclass takes on the base class members | Weak: objects just refer to each other |
| In code | `class Teacher(Staff)` | An attribute holding other objects, such as a list |

## Class diagrams

A class diagram shows each class as a box with three parts: the **name**, the **attributes** and the **methods**. Each member is marked with its access symbol: + public, − private and # protected. Two kinds of line show relationships.

- **Inheritance:** a line from the subclass to the base class with a **hollow triangle** at the base class end. Several subclasses can join a single triangle.
- **Association:** a **plain line** between the two classes.

A text version of the Staff diagram, one box at a time:

**Staff:** `+ name`, `# base_pay`, `- badge`, `+ monthly_pay()`, `+ describe()`, `+ get_badge()`

**Teacher:** `+ subject`, `+ monthly_pay()`

**Technician:** `+ on_call_days`, `+ monthly_pay()`

In the drawn diagram, Teacher and Technician sit below Staff, each joined to a triangle at the bottom of the Staff box. Because `monthly_pay` appears in both subclasses, the diagram also shows that the method is overridden. Teacher and Technician do not list `name`, `describe` or `get_badge`, because they inherit them.

## Worked example: choosing the relationships

*A school library system has books, e-books, members and a library. An e-book is a book that has a file size and no shelf location. A member can borrow several books. The library keeps a collection of books.*

1. **E-book and book.** An e-book *is a kind of* book: it has a title and an author, and it can be borrowed. Use **inheritance**, with `Book` as the base class and `EBook` as the subclass. The e-book adds the file size. If the base class has a method that reports where to find the book, `EBook` **overrides** it to say that the book is downloaded.
2. **Library and books.** A library *has* a collection of books. It is not a kind of book. Use **association**: the library object holds references to book objects, for example in a list.
3. **Member and books.** A member *uses* books by borrowing them. Use **association** again. The member holds references to the books that are on loan.
4. **Protected members.** If `EBook` needs the title that `Book` stores, the base class should make that attribute **protected**, so that the subclass can use it but unrelated classes such as `Library` cannot.

On a class diagram, there would be a hollow triangle between `Book` and `EBook`, and plain lines joining `Library` to `Book` and `Member` to `Book`. Notice that all of the reasoning came from asking the "is a kind of" question first, which is the quickest way to avoid the most common error in this topic.

## Exam technique

- **Use "is a kind of" to justify inheritance** and "uses" or "has" to justify association.
- **Define overriding precisely:** a method of the base class is redefined in a subclass, so the subclass object behaves differently.
- **Choose protected for base members that subclasses need,** and private for those only the base class needs.
- **Call the base constructor** with `super().__init__(...)` in Python, so that the inherited attributes are set up.
- **Read class diagrams carefully:** the hollow triangle marks the base class, and +, − and # show the access.
- **Do not distinguish aggregation and composition.** The specification does not require it.

## Common mistakes

- Using inheritance for a "has a" relationship, such as making Team a subclass of Player.
- Forgetting to call the base class constructor, so that inherited attributes are missing.
- Trying to use a private base attribute directly in a subclass.
- Redefining a method with a different name or different parameters and calling it overriding.
- Drawing the triangle at the subclass end of the line.
- Writing the base and subclass names the wrong way round: `class Staff(Teacher)` would make Staff a kind of Teacher.

## More on this topic

- [Relationships between classes revision notes](/resources/oxfordaqa-a-level-computer-science-9645-relationships-between-classes-revision-notes/)
- [Relationships between classes practice questions](/resources/oxfordaqa-a-level-computer-science-9645-relationships-between-classes-practice/)
- [Additional programming study guide](/resources/oxfordaqa-a-level-computer-science-9645-additional-programming/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.9.3 Relationships between classes.
