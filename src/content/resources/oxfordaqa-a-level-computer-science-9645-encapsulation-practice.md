---
title: "OxfordAQA A-Level Computer Science (9645): Encapsulation -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Encapsulation Practice Questions"
resourceType: "practice-questions"
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
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.9.2 Encapsulation: access modifiers, Python naming, getters and setters and class design, with full answers."
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

These questions practise sub-topic **3.9.2 Encapsulation** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: what encapsulation is, the public, private and protected access modifiers, the Python naming conventions, and getters and setters. Code is Python. Output shown in the answers was produced by running the code.

Related pages: [encapsulation study guide](/resources/oxfordaqa-a-level-computer-science-9645-encapsulation/) ·
[encapsulation revision notes](/resources/oxfordaqa-a-level-computer-science-9645-encapsulation-revision-notes/) ·
[object-oriented and additional programming practice questions](/resources/oxfordaqa-a-level-computer-science-object-oriented-and-additional-programming-practice/)

## Section A

**1.** State what is meant by encapsulation. **[2]**

**2.** Describe who can access a member declared as public, as private and as protected. **[3]**

**3.** State how a public, a protected and a private attribute are named in Python. **[3]**

**4.** State the symbol used in a class diagram for a private member and for a protected member. **[2]**

## Section B

**5.** Explain one advantage of making an attribute private and providing a setter that validates the new value. **[2]**

**6.** A game has a class `Player`. Each player has a public name and a private health value that starts at 100. Health may never go below 0 or above 100. Write the class `Player` with a constructor, a getter `get_health`, a method `take_damage(n)` that reduces health and a method `heal(n)` that increases it. **[7]**

**7.** Using your class from question 6, state the output of this program.

```python
p = Player("Kai")
print(p.get_health())
p.take_damage(30)
print(p.get_health())
p.heal(50)
print(p.get_health())
p.take_damage(120)
print(p.get_health())
```

**[3]**

**8.** A programmer adds `print(p.__health)` to the end of the program in question 7. State what happens and why. **[2]**

**9.** A class stores a user's age as a public attribute `age`. Explain two problems this causes and describe how encapsulation solves them. **[4]**

**10.** A library member class holds a member number (never changed after creation), a name, and the fines owed (which can increase when a book is late and decrease when a fine is paid).

**(a)** For each of the three pieces of data, state an appropriate access modifier and say whether a getter and a setter should be provided. **[3]**
**(b)** State the output of this program for the class below.

```python
class Member:
    def __init__(self, member_id, name):
        self._member_id = member_id
        self.__name = name
        self.__fines = 0.0

    def add_fine(self, amount):
        if amount > 0:
            self.__fines = self.__fines + amount

    def pay(self, amount):
        if 0 < amount <= self.__fines:
            self.__fines = round(self.__fines - amount, 2)
            return True
        return False

    def get_fines(self):
        return self.__fines

m = Member(7, "Lee")
m.add_fine(2.50)
m.add_fine(1.25)
print(m.get_fines(), m.pay(5.00), m.pay(3.00), m.get_fines())
```

**[3]**

## Answers

**1.** Data and the methods that work on it are bundled together in a class [1], and the details of how the class works and stores its data are hidden from other classes [1]. **[2]**

**2.** Public: accessible from any code [1]. Private: accessible only from inside the class [1]. Protected: accessible from the class and its subclasses [1]. **[3]**

**3.** Public: no leading underscore (for example `name`) [1]. Protected: one leading underscore (`_name`) [1]. Private: two leading underscores (`__name`) [1]. **[3]**

**4.** Private: − (minus) [1]. Protected: # [1]. **[2]**

**5.** The setter checks the new value before it is stored [1], so the attribute can never hold an invalid value and the object stays in a valid state [1]. (Accept other valid advantages, such as freedom to change the internal storage.) **[2]**

**6.** Example answer:

```python
class Player:
    def __init__(self, name):
        self.name = name                    # [1] public name
        self.__health = 100                 # [1] private, starts at 100

    def get_health(self):
        return self.__health                # [1] getter

    def take_damage(self, n):
        self.__health = self.__health - n   # [1] reduces
        if self.__health < 0:
            self.__health = 0               # [1] not below 0

    def heal(self, n):
        self.__health = self.__health + n   # [1] increases
        if self.__health > 100:
            self.__health = 100             # [1] not above 100
```

**[7]**

**7.** Output:

```
100
70
100
0
```

`100` [1]; `70` [1]; `100` then `0` [1]. (30 off gives 70; healing 50 would give 120 but is capped at 100; 120 damage is capped at 0.) **[3]**

**8.** An `AttributeError` is raised [1]. The double underscore makes Python rename the attribute inside the class, so the name `__health` is not available from outside [1]. **[2]**

**9.** Any value can be assigned, including impossible ones such as -5 or 400 [1]. The class cannot check or control changes to its own data [1]. Encapsulation makes the attribute private [1] and provides a setter that validates the value before storing it, with a getter for reading [1]. (Accept: if the class later stores date of birth instead of age, other code that uses `age` directly would break.) **[4]**

**10. (a)** Member number: private or protected, with a getter only, because it must not change [1]. Name: private, with a getter, and a setter only if the name may change [1]. Fines owed: private, with a getter, but changed only through methods such as `add_fine` and `pay` that apply rules, not through a plain setter [1]. **[3]**
**(b)** `3.75` [1], `False` and `True` for the two payments [1], `0.75` for the last value [1]. The first payment of 5.00 is refused because it is more than the 3.75 owed. The second payment of 3.00 is accepted. **[3]**

## Frequently asked questions

**Does Python really make attributes private?**
Not completely. Names with two leading underscores are renamed inside the class, so outside code cannot use the plain name. The convention exists to signal intent, and you should follow it.

**Do I need a getter for every attribute?**
No. Provide a getter only for data that other classes need to read. Some data should stay hidden entirely.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.9.2 Encapsulation.
