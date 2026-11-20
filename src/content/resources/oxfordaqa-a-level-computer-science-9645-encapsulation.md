---
title: "OxfordAQA A-Level Computer Science (9645): Encapsulation"
seoTitle: "OxfordAQA A-Level CS 9645 Encapsulation Study Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.9.2 in depth: encapsulation, public, private and protected access, Python naming conventions, and getters and setters with validation."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.9.2 Encapsulation** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.9 Object-oriented and additional programming (A-level). The specification asks you to know what encapsulation is and how it is used in object-oriented programming, understanding that **the ways in which a class operates and how the class represents data are hidden from other classes**; to design classes that use encapsulation appropriately; to use the **public, private and protected** access modifiers (also called access specifiers) to decide which classes can access properties and methods; to know, if you use Python, the **naming conventions** for public, private and protected; and to use **getter and setter methods** to give controlled access to data stored in a class.

For quick recall use the [encapsulation revision notes](/resources/oxfordaqa-a-level-computer-science-9645-encapsulation-revision-notes/), and test yourself with the [encapsulation practice questions](/resources/oxfordaqa-a-level-computer-science-9645-encapsulation-practice/). The [object-oriented and additional programming study guide](/resources/oxfordaqa-a-level-computer-science-object-oriented-and-additional-programming/) covers all of topic 3.9. This page builds on the [classes and objects study guide](/resources/oxfordaqa-a-level-computer-science-9645-classes-objects-instantiation/) and leads into the [relationships between classes study guide](/resources/oxfordaqa-a-level-computer-science-9645-relationships-between-classes/). Code is Python, and the output shown was produced by running the code.

## What encapsulation means

**Encapsulation** has two sides.

1. **Bundling:** an object keeps its data and the methods that work on that data together in one unit, the class.
2. **Hiding:** the details of how the class works and how it stores its data are hidden from other classes. Other code uses the class only through a small set of **public methods**.

The hiding is the part that the specification stresses. The outside world sees what an object can *do*, not how it does it.

Why this matters:

- **Protection.** Other code cannot put the object into an invalid state by changing an attribute directly. A temperature setting of 500 degrees can be refused.
- **Freedom to change.** The inside of a class can be rewritten, for example to store a temperature in kelvin instead of Celsius, without any change to the code that uses it, as long as the public methods behave the same.
- **Simpler use.** Other programmers need to know only the public methods, not the inner workings.
- **Easier debugging.** If an attribute has a wrong value, the cause must be in the class's own methods, because nothing else can change it.

## Access modifiers

An **access modifier** (or access specifier) sets which code may use a property or method.

| Modifier | Who can access it | Class diagram symbol | Typical use |
|---|---|---|---|
| Public | Any code | + | Methods that make up the class's interface |
| Private | Only code inside the same class | − | Attributes; helper methods |
| Protected | The class itself and its subclasses | # | Members that subclasses need (see 3.9.3) |

In C# and VB.Net these are keywords: `public`, `private` and `protected` in C#, and `Public`, `Private` and `Protected` in VB.Net. A member is declared with its modifier, for example `private int speed;` in C#.

### Python naming conventions

Python does not have access keywords. It uses naming conventions, and the specification says Python students should know them.

| Access | Convention | Example |
|---|---|---|
| Public | No leading underscore | `self.room` |
| Protected | One leading underscore | `self._log` |
| Private | Two leading underscores | `self.__target` |

Two underscores make Python **mangle** the name, so that code outside the class cannot reach it by its plain name. A single underscore is only a signal to other programmers that the attribute is for the class and its subclasses.

## Getters and setters

If attributes are private, outside code needs another way to read or change them. A **getter** is a public method that returns the value. A **setter** is a public method that changes it, and it can **check the new value first**. This is the controlled access that the specification asks for.

```python
class Thermostat:
    def __init__(self, room, target):
        self.room = room              # public
        self._log = []                # protected by convention
        self.__target = 18            # private
        self.set_target(target)

    def get_target(self):
        return self.__target

    def set_target(self, value):
        if 5 <= value <= 30:
            self.__target = value
            self._log.append(value)
            return True
        return False

    def needs_heating(self, current):
        return current < self.__target
```

Now use it.

```python
t = Thermostat("Lab", 21)
print(t.room, t.get_target())
print(t.set_target(45), t.get_target())
print(t.set_target(12), t.get_target())
print(t.needs_heating(15), t.needs_heating(20))
```

Output:

```
Lab 21
False 21
True 12
False False
```

- The constructor uses the setter, so even the starting value is checked.
- `set_target(45)` was refused: it returned `False` and the target stayed at 21.
- `set_target(12)` is within the range 5 to 30, so it was accepted.
- With the target at 12, a room at 15 or 20 does not need heating, so both calls to `needs_heating` return `False`.

### Trying to reach a private attribute

```python
try:
    print(t.__target)
except AttributeError:
    print("AttributeError")
```

This prints `AttributeError`. Python renamed the attribute inside the class, so the plain name does not exist from outside. (Python's mangling can be got around by writing `t._Thermostat__target`, which prints 12, but doing so breaks the encapsulation rules and you should never do it in a program. It is shown here only so that you understand what the double underscore does.)

## Read-only data

If a class gives a getter but **no setter**, outside code can read the value but not change it. This suits data that must not change after creation.

```python
class Circle:
    def __init__(self, r):
        self.__r = r

    def get_radius(self):
        return self.__r

    def area(self):
        return 3.14159 * self.__r ** 2

c = Circle(2)
print(round(c.area(), 2), c.get_radius())
```

This prints `12.57 2`. The radius is set once, and the only way to change it would be to create a new circle.

## Hiding how data is stored

Encapsulation lets a class change its internal representation. This class stores temperature in kelvin but only ever deals with Celsius in its public methods.

```python
class Temp:
    def __init__(self, c):
        self.__k = c + 273.15

    def get_celsius(self):
        return round(self.__k - 273.15, 1)

    def set_celsius(self, c):
        self.__k = c + 273.15

x = Temp(20)
x.set_celsius(25.5)
print(x.get_celsius())
```

This prints `25.5`. Code using `Temp` never sees kelvin. If the class were changed to store Fahrenheit, the public methods would still return Celsius, and no other code would need to change.

## Worked example: repairing a class with no encapsulation

This class stores a wallet's balance as a public attribute.

```python
class WalletBad:
    def __init__(self, amount):
        self.balance = amount

w = WalletBad(20)
w.balance = -50
print(w.balance)
```

It prints `-50`. Nothing stops other code from setting an impossible balance, and the class cannot defend itself. Here is a version that uses encapsulation.

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

    def add(self, amount):
        if amount > 0:
            self.__balance = self.__balance + amount
            return True
        return False
```

Testing it:

```python
w2 = Wallet(20)
print(w2.spend(30), w2.get_balance())
print(w2.spend(8), w2.get_balance())
print(w2.add(-5), w2.add(10), w2.get_balance())
```

The output is:

```
False 20
True 12
False True 22
```

Spending 30 is refused because it is more than the balance. Spending 8 leaves 12. Adding -5 is refused, adding 10 is accepted and the balance becomes 22. The balance can now never become negative, and every change goes through methods that check it. There is no setter for the balance at all, because the class decides how it can change: only by spending or adding.

## Designing a class with encapsulation

A good default design:

1. Make every **attribute private** (or protected, if a subclass needs it).
2. Make the **methods** that other classes should use **public**.
3. Provide a **getter** for each attribute that outside code needs to read.
4. Provide a **setter** only where outside code should be allowed to change the value, and put **validation** in it.
5. Make helper methods private.

Consider a locker with a PIN. The number is public (anyone can see it), but the PIN is private and there is no getter for it. The only way to learn whether a guess is right is to call `try_open`.

```python
class Locker:
    def __init__(self, number, pin):
        self.number = number
        self.__pin = pin
        self.__open = False

    def try_open(self, guess):
        if guess == self.__pin:
            self.__open = True
        return self.__open

    def is_open(self):
        return self.__open

l = Locker(14, "4821")
print(l.try_open("0000"), l.try_open("4821"), l.is_open())
```

The output is `False True True`. The wrong guess leaves the locker shut; the right guess opens it.

## Exam technique

- **Define encapsulation with both parts:** data and methods bundled, and internal details hidden.
- **Give a benefit and explain it.** "Validation in the setter stops the attribute being set to an invalid value, so the object always stays in a valid state."
- **Use the correct modifier for the situation.** Private for attributes, public for the interface, protected for members subclasses need.
- **Show validation in setters.** A setter that only assigns the value adds little.
- **Know the Python names.** `x` is public, `_x` is protected and `__x` is private.
- **In class diagrams,** use + for public, − for private and # for protected.

## Common mistakes

- Saying that encapsulation means "hiding the class from the user". It hides the data and implementation details inside the class.
- Making every attribute public.
- Writing a getter and setter pair that does no checking, then claiming encapsulation is achieved.
- Mixing up protected and private. Private is the class only; protected includes subclasses.
- Forgetting `self.` when reading a private attribute inside a method.
- Calling a private method or attribute from outside the class.

## Next steps

- [Encapsulation revision notes](/resources/oxfordaqa-a-level-computer-science-9645-encapsulation-revision-notes/)
- [Encapsulation practice questions](/resources/oxfordaqa-a-level-computer-science-9645-encapsulation-practice/)
- [Relationships between classes study guide](/resources/oxfordaqa-a-level-computer-science-9645-relationships-between-classes/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.9.2 Encapsulation.
