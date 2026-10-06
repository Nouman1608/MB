---
title: "OxfordAQA A-Level Computer Science: Object-oriented and additional programming (9645) -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 OOP and Recursion Practice"
resourceType: "practice-questions"
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
description: "Original practice questions with worked answers for OxfordAQA A-Level Computer Science (9645): classes, inheritance, encapsulation, files, recursion."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

This set tests section 3.9 Object-oriented and additional programming (3.9.1 to 3.9.4) of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards. The section is International A-level only; Unit 3: Advanced Programming assesses it on screen, in C#, Python or VB.Net. Answers use Python; any of the three languages earns the same credit here.

If the ideas are new, work through the [study guide](/resources/oxfordaqa-a-level-computer-science-object-oriented-and-additional-programming/) or the shorter [revision notes](/resources/oxfordaqa-a-level-computer-science-object-oriented-and-additional-programming-revision-notes/) before attempting these. Other topics in this course are on the hub, [/boards/oxfordaqa/a-level/computer-science/](/boards/oxfordaqa/a-level/computer-science/), and outcomes can be ticked off on the checklist, [/checklists/oxfordaqa/a-level/computer-science/](/checklists/oxfordaqa/a-level/computer-science/). A free [diagnostic](/diagnostics/) will point you to weaker areas.

## Questions

**1.** State what is meant by instantiation and by a constructor. **[2]**

**2.** A gliding club uses this class.

```python
class Glider:
    def __init__(self, reg, wingspan_m):
        self.reg = reg
        self.wingspan_m = wingspan_m
        self.flights = 0

    def log_flight(self):
        self.flights = self.flights + 1

g1 = Glider("G-KTRL", 15)
```

**(a)** From the code, identify one example of each: a class, an attribute, a method, an object. **[4]**
**(b)** `g1.log_flight()` is called twice. State the value of `g1.flights`. **[1]**

**3.** Explain three reasons why the object-oriented paradigm is used. **[3]**

**4.** A `WaterTank` class has a public attribute `capacity_litres`, set by a constructor parameter, and `level_litres`, which starts at 0. Its method `fill(litres)` adds water. If the water would overflow, the tank is filled to capacity and the method returns the litres that did not fit; otherwise it returns 0.

**(a)** Write the class. **[5]**
**(b)** A tank with capacity 500 is created. State the values returned by `fill(320)` and then `fill(260)`. **[2]**

**5.** A `RoomBooking` class must store the number of guests, which must be from 1 to 6 and starts at 1.

**(a)** Write the attribute declaration in the constructor, a getter and a setter that uses encapsulation appropriately. **[4]**
**(b)** Explain why the guest count should be private. **[2]**

**6.** Describe how Python represents public, protected and private members. **[3]**

**7.** A shipping program has this base class.

```python
class Crate:
    def __init__(self, ref, weight_kg):
        self.ref = ref
        self._weight_kg = weight_kg

    def postage(self):
        return 4.00 + 1.50 * self._weight_kg
```

A `ChilledCrate` is a crate with an extra attribute `min_temp`. Its postage is the normal postage plus 6.25.

**(a)** Write the `ChilledCrate` class. **[4]**
**(b)** Calculate the postage for a 5 kg chilled crate. **[1]**
**(c)** Explain why `_weight_kg` is protected rather than private. **[2]**

**8.** Study this class diagram.

```
 Instrument
 # serial : String
 - hire_count : Integer
 + hire()
 + daily_rate() : Real
        △
        |
 Piano
 + tuned : Boolean
 + daily_rate() : Real
```

**(a)** Name the base class. **[1]**
**(b)** State which attribute of `Instrument` a `Piano` method can use directly, and why the other cannot be used. **[2]**
**(c)** State what `daily_rate()` appearing in the `Piano` box shows. **[1]**

**9.** For each pair, state whether inheritance or association fits better.

**(a)** `Hatchback` and `Car` **[1]**
**(b)** `Tournament` and `Referee` **[1]**
**(c)** Explain why association is a weaker relationship than inheritance. **[2]**

**10.** `orders.txt` holds one order per line as `item,quantity`, for example:

```
hinges,12
screws,250
brackets,6
washers,10
bolts,9
```

**(a)** Write a program that writes the name of every item with a quantity of 10 or more to a new file `bulk.txt`, one per line, then outputs how many were written. **[6]**
**(b)** State the output for the file above. **[1]**

**11.** Study this subroutine.

```python
def zig(n):
    if n <= 0:
        return ""
    if n % 2 == 0:
        return zig(n // 2) + "E"
    return zig(n - 1) + "O"
```

**(a)** Identify the base case. **[1]**
**(b)** State how many recursive cases `zig` has. **[1]**
**(c)** Trace `zig(11)` and state the value returned. **[3]**
**(d)** Explain why `zig` always terminates for a positive whole number. **[1]**

**12.** `heights.txt` holds one whole number per line: 152, 167, 149, 171, 160.

**(a)** Write a subroutine `read_heights(filename)` that returns the values as a list of integers. **[3]**
**(b)** Write a recursive function `largest(values, n)` that returns the largest of the first `n` values. It must not use a loop or a built-in maximum function. **[4]**
**(c)** State the value returned by `largest(values, 3)` and the number of calls made, including the first. **[2]**

## Answers

**1.** Instantiation is creating an object from a class [1]. A constructor is called when an object is instantiated and initialises it to a given state [1]. **[2]**
*Examiner insight:* "a constructor creates the object" alone tends to miss the credit; the point the specification stresses is that it sets the starting state.

**2. (a)** Class: `Glider` [1]. Attribute: `reg`, `wingspan_m` or `flights` [1]. Method: `log_flight` or `__init__` [1]. Object: `g1` [1].
**(b)** **2** [1]
*Examiner insight:* writing `Glider` as the object, or `"G-KTRL"` as the object, confuses the class or an argument with the instance; the object is the variable that refers to it.

**3.** Any three, one mark each. Each real thing is modelled as one object, so code mirrors the problem [1]. Encapsulation means data changes only through methods, so errors stay local [1]. Inheritance lets subclasses reuse tested code [1]. Also creditworthy: classes can be written, tested and changed independently, easing maintenance.
*Examiner insight:* "it is easier" earns little on its own; each reason needs the mechanism (encapsulation, inheritance, independent classes) that makes it true.

**4. (a)**

```python
class WaterTank:
    def __init__(self, capacity_litres):
        self.capacity_litres = capacity_litres
        self.level_litres = 0

    def fill(self, litres):
        space = self.capacity_litres - self.level_litres
        if litres > space:
            self.level_litres = self.capacity_litres
            return litres - space
        self.level_litres = self.level_litres + litres
        return 0
```

Class with constructor taking a parameter [1]; capacity set from parameter and level set to 0 [1]; space left worked out and compared [1]; overflow branch fills to capacity and returns the excess [1]; otherwise level increased and 0 returned [1].
**(b)** `fill(320)` returns **0** [1]; `fill(260)` returns **80**, because only 180 litres fit [1].
*Examiner insight:* a constructor that sets `level_litres` from a parameter, rather than to 0, does not give the state the question describes.

**5. (a)**

```python
    def __init__(self, room):
        self.room = room
        self.__guests = 1

    def get_guests(self):
        return self.__guests

    def set_guests(self, n):
        if 1 <= n <= 6:
            self.__guests = n
            return True
        return False
```

Private attribute starting at 1 [1]; getter returns it [1]; setter checks 1 to 6 [1]; stores only a valid value and signals the result [1].
**(b)** Other classes cannot set an invalid value such as 9 directly; every change goes through the validating setter [1]. How the count is stored is hidden, so it can change without affecting other classes [1].
*Examiner insight:* a setter that stores the value without checking it shows syntax but not appropriate encapsulation.

**6.** Public: no leading underscore, e.g. `room` [1]. Protected: one leading underscore, `_room`, a convention only [1]. Private: two leading underscores, `__room`, which Python name-mangles to `_ClassName__room` [1].
*Examiner insight:* swapping the single and double underscore is a common slip; check which one the interpreter actually enforces.

**7. (a)**

```python
class ChilledCrate(Crate):
    def __init__(self, ref, weight_kg, min_temp):
        super().__init__(ref, weight_kg)
        self.min_temp = min_temp

    def postage(self):
        return super().postage() + 6.25
```

Inherits from `Crate` [1]; calls the base constructor [1]; adds `min_temp` [1]; overrides `postage`, adding 6.25 to the base result [1].
**(b)** 4.00 + 1.50 × 5 + 6.25 = **17.75** [1]
**(c)** Protected lets `ChilledCrate` methods use `_weight_kg` [1] while objects of unrelated classes still cannot access it [1].
*Examiner insight:* copying the base formula into the subclass works, but reusing the base method through `super()` shows that you understand inheritance and overriding.

**8. (a)** `Instrument` [1]
**(b)** `serial`, because # marks it protected [1]; `hire_count` is private (-), so only `Instrument` can use it [1].
**(c)** `Piano` overrides `daily_rate()` [1].
*Examiner insight:* name the symbol and the modifier together; "it has a hash" without "protected" is incomplete.

**9. (a)** Inheritance: a hatchback is a more specialised kind of car [1].
**(b)** Association: a tournament uses referees, but neither is a kind of the other [1].
**(c)** Inheritance makes the subclass a version of the base class, inheriting its members [1]; association only lets one object make use of another, and both exist independently [1].
*Examiner insight:* answering with the "is a" or "uses" test, in a full sentence, is clearer than naming the relationship alone.

**10. (a)**

```python
count = 0
with open("orders.txt", "r") as src, open("bulk.txt", "w") as out:
    for line in src:
        item, qty = line.strip().split(",")
        if int(qty) >= 10:
            out.write(item + "\n")
            count = count + 1
print(count)
```

Opens `orders.txt` for reading [1]; opens `bulk.txt` for writing [1]; loops through lines and splits each at the comma [1]; converts the quantity and tests ≥ 10 [1]; writes the item name with a newline [1]; counts and outputs the total [1].
**(b)** **3** (hinges, screws, washers) [1]
*Examiner insight:* comparing the text "10" with the number 10, or using > instead of ≥, drops washers and loses the condition mark.

**11. (a)** `n <= 0`, which returns an empty string [1].
**(b)** **Two** (even and odd) [1].
**(c)** Calls: 11 → 10 → 5 → 4 → 2 → 1 → 0 [1]. Returning: "" then "O" (from 1), "E" (2), "E" (4), "O" (5), "E" (10), "O" (11) are added in turn [1]. Result **"OEEOEO"** [1].
**(d)** Each recursive case makes `n` smaller (n − 1 or n // 2), so it must reach 0 [1].
*Examiner insight:* a trace that lists the calls but never shows values being returned back up usually earns only the first mark.

**12. (a)**

```python
def read_heights(filename):
    values = []
    with open(filename, "r") as f:
        for line in f:
            values.append(int(line.strip()))
    return values
```

Opens the file for reading [1]; strips and converts each line, adding it to the list [1]; returns the list [1].
**(b)**

```python
def largest(values, n):
    if n == 1:
        return values[0]
    rest = largest(values, n - 1)
    if values[n - 1] > rest:
        return values[n - 1]
    return rest
```

Base case `n == 1` returns the first value [1]; recursive call on `n - 1` [1]; compares `values[n - 1]` with that result [1]; returns the larger [1].
**(c)** **167** [1]; **3** calls (n = 3, 2, 1) [1].
*Examiner insight:* the recursive call must be on a smaller `n`; calling `largest(values, n)` again never reaches the base case.

## Where marks are usually lost

- Calling the class the object, or the constructor's arguments the attributes.
- Constructors that leave some attributes unset.
- Setters with no validation.
- A subclass that never calls the base constructor.
- Private base attributes used in subclass methods.
- Overriding under a new name, which adds a method instead.
- Missing `virtual`/`override` (C#) or `Overridable`/`Overrides` (VB.Net).
- Reading numbers from a file without stripping and converting.
- `"w"` used where `"a"` was needed.
- Recursive traces with no return phase.

## Next steps

- [Revision notes](/resources/oxfordaqa-a-level-computer-science-object-oriented-and-additional-programming-revision-notes/)
- [Study guide](/resources/oxfordaqa-a-level-computer-science-object-oriented-and-additional-programming/)
- [Course hub](/boards/oxfordaqa/a-level/computer-science/)
- [Printable checklist](/checklists/oxfordaqa/a-level/computer-science/)
- [All free 10-minute diagnostics](/diagnostics/)
- [Book a free trial class](/trial/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.9 Object-oriented and additional programming.
