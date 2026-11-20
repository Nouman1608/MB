---
title: "OxfordAQA A-Level Computer Science (9645): Relationships between classes -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Class Relationships Questions"
resourceType: "practice-questions"
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
description: "Eleven original OxfordAQA 9645 questions on sub-topic 3.9.3: inheritance, protected access, overriding, association and class diagrams, with full answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.9.3 Relationships between classes** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: inheritance, base classes and subclasses, the protected access modifier, overriding, association and class diagrams. Code is Python. Output shown in the answers was produced by running the code.

Related pages: [relationships between classes study guide](/resources/oxfordaqa-a-level-computer-science-9645-relationships-between-classes/) ·
[relationships between classes revision notes](/resources/oxfordaqa-a-level-computer-science-9645-relationships-between-classes-revision-notes/) ·
[object-oriented and additional programming practice questions](/resources/oxfordaqa-a-level-computer-science-object-oriented-and-additional-programming-practice/)

## Section A

**1.** State what is meant by inheritance and give another name for the base class. **[2]**

**2.** Explain why the protected access modifier is used in a base class. **[2]**

**3.** State what is meant by overriding. **[2]**

**4.** State what is meant by association and how it differs from inheritance. **[3]**

**5.** In a class diagram, state what shape is drawn on an inheritance line and at which end. **[2]**

## Section B

**6.** For each pair, state whether inheritance or association is more suitable, with a reason.

**(a)** `Orchestra` and `Musician` **[2]**
**(b)** `Violin` and `Instrument` **[2]**

**7.** Study this code.

```python
class Account:
    def __init__(self, owner, balance):
        self.owner = owner
        self._balance = balance

    def withdraw(self, amount):
        self._balance = self._balance - amount
        return self._balance

class SavingsAccount(Account):
    def __init__(self, owner, balance, limit):
        super().__init__(owner, balance)
        self.limit = limit

    def withdraw(self, amount):
        if amount > self.limit or amount > self._balance:
            return self._balance
        return super().withdraw(amount)

a = Account("Ana", 100)
s = SavingsAccount("Ben", 100, 40)
print(a.withdraw(130))
print(s.withdraw(50))
print(s.withdraw(30))
print(s.withdraw(40))
print(s.withdraw(40))
```

**(a)** State the output. **[5]**
**(b)** Identify the method that is overridden and explain the difference in behaviour. **[2]**
**(c)** Explain why `SavingsAccount` can use `self._balance` directly. **[2]**

**8.** A class `Vehicle` has a constructor with parameters `reg` and `wheels`, a public attribute `reg`, a protected attribute for the number of wheels, and a method `describe` that returns the registration followed by " has " and the number of wheels and " wheels". Write a subclass `Lorry` whose constructor takes `reg` and `load_kg` and always uses 6 wheels. `Lorry` overrides `describe` so that the text from `Vehicle` is followed by " and carries " and the load and " kg". **[7]**

**9.** A music program has `Song` objects (title and length in seconds) and `Playlist` objects, each holding a list of songs. The same song can be in several playlists. Explain what type of relationship this is and why it makes sense. **[3]**

**10.** Using the `Song` and `Playlist` idea in question 9, the two playlists below are created.

```python
s1 = Song("A", 200)
s2 = Song("B", 185)
s3 = Song("C", 240)
pl1 = Playlist()
pl2 = Playlist()
pl1.add(s1)
pl1.add(s2)
pl2.add(s2)
pl2.add(s3)
```

**(a)** State the total seconds of `pl1` and `pl2` if `total_seconds` adds the lengths of a playlist's songs. **[2]**
**(b)** The statement `s2.seconds = 200` is then run. State the new totals and explain the result. **[3]**

**11.** Draw, using a text layout, the class diagram for a base class `Shape` (protected attribute `colour`, public method `area`) and two subclasses `Circle` and `Square`, each overriding `area`. Say which line type joins them and where the triangle is placed. **[4]**

## Answers

**1.** Inheritance is a relationship in which a subclass is a more specialised version of an existing class and takes on its properties and methods [1]. The base class is also called the parent class [1]. **[2]**

**2.** A protected member can be used by the base class and its subclasses [1] but cannot be used by objects of other classes, so subclasses get access to what they need without making it public [1]. **[2]**

**3.** A method from the base class is redefined in a subclass [1] so that an instance of the subclass behaves differently from an instance of the base class [1]. **[2]**

**4.** Association is a relationship in which one object can make use of another [1]. It is a much weaker relationship than inheritance [1]. Inheritance means "is a kind of" and association means "uses" or "has" [1]. **[3]**

**5.** A hollow triangle [1] at the end of the line that touches the base class [1]. **[2]**

**6. (a)** Association [1], because an orchestra uses (has) musicians; it is not a kind of musician [1]. **(b)** Inheritance [1], because a violin is a kind of instrument [1].

**7. (a)** Output:

```
-30
100
70
30
30
```

`-30` [1] (an ordinary account allows the overdraft); `100` [1] (50 exceeds the limit of 40); `70` [1]; `30` [1]; `30` [1] (40 is more than the balance of 30). **[5]**
**(b)** `withdraw` is overridden [1]. In `Account` it always reduces the balance, but in `SavingsAccount` it first checks the limit and the balance and refuses the withdrawal if either is exceeded [1]. **[2]**
**(c)** `_balance` is a protected attribute [1], so it can be accessed in the base class and in its subclasses [1]. **[2]**

**8.** Example answer:

```python
class Vehicle:
    def __init__(self, reg, wheels):
        self.reg = reg                       # [1] public attribute
        self._wheels = wheels                # [1] protected attribute

    def describe(self):
        return self.reg + " has " + str(self._wheels) + " wheels"   # [1]

class Lorry(Vehicle):                        # [1] inherits from Vehicle
    def __init__(self, reg, load_kg):
        super().__init__(reg, 6)             # [1] calls base constructor with 6
        self.load_kg = load_kg               # [1] new attribute

    def describe(self):                      # [1] overrides, adds the load text
        return super().describe() + " and carries " + str(self.load_kg) + " kg"
```

`Lorry("XY99", 7500).describe()` returns `XY99 has 6 wheels and carries 7500 kg`. **[7]**

**9.** Association [1]. A playlist uses song objects; a playlist is not a kind of song and a song is not a kind of playlist [1]. Each playlist holds references to song objects, so one song can appear in several playlists without being copied [1]. **[3]**

**10. (a)** `pl1`: 200 + 185 = **385** [1]; `pl2`: 185 + 240 = **425** [1]. **[2]**
**(b)** `pl1` is now **400** and `pl2` is now **440** [1]. Both playlists hold a reference to the same `s2` object [1], so changing it once changes the total in each playlist [1]. **[3]**

**11.** Example layout:

```
        +----------------+
        | Shape          |
        | # colour       |
        | + area()       |
        +-------^--------+
                |
        +-------+--------+
        |                |
+-------+-------+ +------+--------+
| Circle        | | Square        |
| + area()      | | + area()      |
+---------------+ +---------------+
```

Three boxes with the name, attributes and methods and the correct access symbols (# for the protected colour, + for `area`) [1]; `Circle` and `Square` lists `area()` because it is overridden [1]; an inheritance line joining the subclasses to `Shape` [1]; a hollow triangle at the `Shape` end of the line (shown here by the caret) [1]. **[4]**

## Frequently asked questions

**Is it overriding if I change the number of parameters?**
No. Overriding redefines a base class method with the same name and parameters so that a subclass object behaves differently.

**Do I need to know aggregation and composition?**
No. The specification says students will not be required to distinguish between them. Know association.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.9.3 Relationships between classes.
