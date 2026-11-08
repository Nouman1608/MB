---
resourceId: "mb-ap-csa-3.4-study-guide"
title: "Constructors: Study Guide (Computer Science A 3.4)"
description: "Understand how constructors set an object's initial state, what happens in memory on new, default constructors and default values, overloaded constructors, and copying mutable parameters."
course: "computer-science-a"
unit: 3
topics: ["3.4"]
resourceType: "study-guide"
prerequisites:
  - "The anatomy of a class: private instance variables, public constructors (Topic 3.3)"
  - "Creating objects with new (Topic 1.13)"
prerequisiteResources: ["mb-ap-csa-3.3-study-guide"]
learningObjectives:
  - "Explain that an object's state is its instance variables and their values at a given time"
  - "Write constructors that initialise every instance variable, with or without parameters"
  - "State the default values of int, double, boolean and reference instance variables, and when Java supplies the default constructor"
  - "Trace what happens in memory when new calls a constructor"
  - "Explain why a constructor should store a copy of a mutable object it is given, and write one that does"
skills: ["2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-3.4-revision-notes", "mb-ap-csa-3.4-practice", "mb-ap-csa-3.4-checklist"]
next: "mb-ap-csa-3.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a"]
keyPoints:
  - "An object's state is its attributes and their values at a given time; instance variables define it, giving a has-a relationship."
  - "A constructor sets the initial state of a new object. When it is called, memory is allocated and the object's reference is returned."
  - "With no constructor written, Java supplies a no-parameter default constructor and instance variables take default values: 0, 0.0, false and null."
  - "Writing any constructor removes the default one, so every call must match a constructor you wrote."
  - "If a constructor receives a mutable object, store a copy so the class's state cannot be changed from outside through the original reference."
faqs:
  - {"question": "Do I have to write a constructor?", "answer": "No. If you write none, Java provides a no-parameter default constructor that sets instance variables to their default values. But most real classes need a constructor to give the object a sensible starting state."}
  - {"question": "What are the default values of instance variables?", "answer": "int is 0, double is 0.0, boolean is false, and any reference type, such as String, is null."}
  - {"question": "Can a class have more than one constructor?", "answer": "Yes. Constructors can be overloaded: several may share the class name provided their parameter lists differ in number or type. Which one runs depends on the arguments in the call to new."}
  - {"question": "What does the constructor return?", "answer": "A constructor has no return type and no return value in its code, but the expression new ClassName(...) produces a reference to the newly created object, which you can store in a variable."}
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## An object has a state, and a constructor gives it a first one

Think of a new smartphone out of the box. It already has a battery percentage, a language setting and a wallpaper: its **state**. Someone (the factory) set all of that before you touched it.

In Java, an object's **state** is its attributes and their values at a given time. It is defined by the object's instance variables. A `Player` with `name` "Asha" and `lives` 3 has a different state from one with "Ben" and 5. Because an object *has* a name and *has* a number of lives, this is called a **has-a relationship** between the object and its instance variables.

A **constructor** is the code that gives a new object its **initial state**. A good constructor gives an initial value to **all** the instance variables, so that no object is ever left half set up. Its header has three rules: it is `public` (in this course), it has **exactly the class name**, and it has **no return type**, not even `void`.

## What happens when you write `new`

For `Player p1 = new Player("Asha");` Java does the following, in order:

1. **Memory is allocated** for a new `Player` object.
2. The instance variables get their **default values** (see below).
3. The **constructor runs**, with its parameters set from the arguments, and assigns the real initial values.
4. The **reference** to the finished object is **returned** by the `new` expression and stored in `p1`.

So a variable such as `p1` does not hold the object itself. It holds a **reference** to it, which is the object's address in memory. This idea, that a variable of a class type holds a reference, matters in every later topic, and it is what makes Worked example 2 behave the way it does.

## Constructor parameters

Parameters, if specified, provide **data to initialise the instance variables**. They make each object different at birth:

```java
public class Player
{
    private String name;
    private int lives;

    public Player(String playerName)
    {
        name = playerName;
        lives = 3;
    }

    public Player(String playerName, int startingLives)
    {
        name = playerName;
        lives = startingLives;
    }

    public String toLine()
    {
        return name + ":" + lives;
    }
}
```

There are **two constructors** here. The first takes only a name and sets `lives` to 3. The second takes both. Having several constructors with the same name but different parameter lists is called **overloading**, and the call decides which runs: `new Player("Asha")` matches the one-parameter version, `new Player("Ben", 5)` the two-parameter version. Notice that the parameter names (`playerName`, `startingLives`) differ from the instance variable names, so there is no confusion about which variable an assignment targets (Topic 3.8 explains what happens when the names are the same).

```java
Player p1 = new Player("Asha");
Player p2 = new Player("Ben", 5);
System.out.println(p1.toLine() + " " + p2.toLine());
```

Output when run:

```
Asha:3 Ben:5
```

## The default constructor and default values

When **no constructor is written**, Java provides a **no-parameter constructor** called the **default constructor**. Every instance variable is set to the **default value for its type**:

| Type of the attribute | Default value |
|---|---|
| `int` | `0` |
| `double` | `0.0` |
| `boolean` | `false` |
| a reference type (such as `String`) | `null` |

Here is a class with four instance variables and no constructor:

```java
public class Defaults
{
    private int count;
    private double average;
    private boolean ready;
    private String label;

    public int getCount()
    {
        return count;
    }

    public double getAverage()
    {
        return average;
    }

    public boolean isReady()
    {
        return ready;
    }

    public String getLabel()
    {
        return label;
    }
}
```

```java
Defaults d = new Defaults();
System.out.println(d.getCount() + " " + d.getAverage() + " " + d.isReady() + " " + d.getLabel());
```

Output when run:

```
0 0.0 false null
```

There is an important catch. **Once you write any constructor, Java no longer supplies the default one.** If `Player` has only constructors with parameters, then `new Player()` does not compile. The compiler says `no suitable constructor found for Player(no arguments)`.

## Storing a mutable object you were given

Sometimes a constructor receives an **object** as a parameter, for example a `Seat` passed to a `Booking`. If the object is **mutable** (its state can be changed by its methods, as `Seat.setNumber` can), there is a risk. If you write `seat = s;`, the instance variable and the caller's variable now hold the **same reference**, so one object has two names. When the caller later changes it, your `Booking`'s state changes too, without any method of `Booking` being involved.

When a mutable object is a constructor parameter, the instance variable should be initialised with a **copy** of the referenced object. Then the instance variable does not hold a reference to the original object, and nothing done to the original can alter the new object's state.

<figure>
<svg viewBox="0 0 640 260" role="img" aria-labelledby="ref-title ref-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ref-title">Memory diagram: aliasing a Seat versus storing a copy</title>
<desc id="ref-desc">Left column shows three reference variables: original in the main program, seat inside BookingAlias, and seat inside BookingCopy. On the right are two Seat objects. Seat object 1 has row 4 and number 99, after being changed from 12. Arrows from original and from the seat of BookingAlias both point to Seat object 1. Seat object 2 has row 4 and number 12. A single arrow from the seat of BookingCopy points to Seat object 2. So changing the original changes what BookingAlias sees but not what BookingCopy holds.</desc>
<rect x="0" y="0" width="640" height="260" fill="#ffffff"/>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2"><rect x="20" y="30" width="200" height="40"/><rect x="20" y="100" width="200" height="40"/><rect x="20" y="190" width="200" height="40"/></g>
<g fill="#1d2b44" font-size="14"><text x="30" y="55">original (main)</text><text x="30" y="125">seat in BookingAlias</text><text x="30" y="215">seat in BookingCopy</text></g>
<g fill="#dbe4f0" stroke="#1d2b44" stroke-width="2"><rect x="380" y="50" width="240" height="70"/><rect x="380" y="170" width="240" height="70"/></g>
<g fill="#1d2b44" font-size="14"><text x="392" y="74" font-weight="bold">Seat object 1</text><text x="392" y="94">row = 4</text><text x="392" y="112">number = 99 (was 12)</text>
<text x="392" y="194" font-weight="bold">Seat object 2 (the copy)</text><text x="392" y="214">row = 4</text><text x="392" y="232">number = 12</text></g>
<g stroke="#1d2b44" stroke-width="2" fill="none"><path d="M220 50 L380 75"/><path d="M220 120 L380 95"/><path d="M220 210 L380 205"/></g>
<g fill="#1d2b44"><polygon points="380,75 368,69 370,80"/><polygon points="380,95 369,102 368,91"/><polygon points="380,205 368,199 368,211"/></g>
</svg>
<figcaption>Figure 1. Reference diagram after <code>original.setNumber(99)</code>. The Alias booking shares Seat object 1 with the original, so it sees 99. The Copy booking holds its own Seat object 2, still number 12. The arrows run from each variable to the object it refers to.</figcaption>
</figure>

## Worked example 1: defaults, a constructor and what the object holds

**Task.** For the `Player` class above, trace `Player p2 = new Player("Ben", 5);` through memory, then state what `new Player("Cy")` would store.

**Step 1: allocate.** Java reserves space for a `Player` object with two instance variables.

**Step 2: defaults.** `name` is `null` and `lives` is `0` for an instant.

**Step 3: parameters.** The constructor with two parameters is chosen, because the call has a `String` and an `int`. `playerName` is "Ben" and `startingLives` is 5.

**Step 4: assignments.** `name = playerName;` stores a reference to the string "Ben". `lives = startingLives;` stores 5.

**Step 5: return.** The reference to the new object is stored in `p2`.

| Moment | `name` | `lives` |
|---|---|---|
| after allocation (defaults) | `null` | 0 |
| after `name = playerName;` | "Ben" | 0 |
| after `lives = startingLives;` | "Ben" | 5 |

For `new Player("Cy")`, the one-parameter constructor runs, so `name` is "Cy" and `lives` is 3.

**Second part: a missing constructor.** If a programmer deleted both constructors, `new Player("Cy")` would not compile (there would be only the default no-parameter constructor). If the programmer kept only the two-parameter constructor, `new Player()` would not compile either. The check is always: does a constructor exist whose parameter list matches the call?

**Check.** The state table shows every instance variable getting its final value in the constructor. If one had been forgotten, it would silently keep its default.

## Worked example 2: aliasing versus copying

**Task.** Two booking classes store a `Seat`. One keeps the reference it is given, the other keeps a copy. Predict what each reports after the original seat is changed.

The mutable class (it has `setNumber`):

```java
public class Seat
{
    private int row;
    private int number;

    public Seat(int r, int n)
    {
        row = r;
        number = n;
    }

    public int getRow()
    {
        return row;
    }

    public int getNumber()
    {
        return number;
    }

    public void setNumber(int n)
    {
        number = n;
    }
}
```

Version 1 stores the reference:

```java
public class BookingAlias
{
    private Seat seat;

    public BookingAlias(Seat s)
    {
        seat = s;                       // stores the same reference
    }

    public int seatNumber()
    {
        return seat.getNumber();
    }
}
```

Version 2 stores a copy:

```java
public class BookingCopy
{
    private Seat seat;

    public BookingCopy(Seat s)
    {
        seat = new Seat(s.getRow(), s.getNumber());   // stores a copy
    }

    public int seatNumber()
    {
        return seat.getNumber();
    }
}
```

```java
Seat original = new Seat(4, 12);
BookingAlias a = new BookingAlias(original);
BookingCopy c = new BookingCopy(original);
original.setNumber(99);
System.out.println(a.seatNumber() + " " + c.seatNumber());
```

**Step 1.** `original` refers to a `Seat` object with row 4, number 12 (Seat object 1).

**Step 2.** `new BookingAlias(original)`: the parameter `s` is initialised with a copy of the **reference**, so `s` and `original` both refer to Seat object 1. The assignment `seat = s;` makes the booking's `seat` refer to Seat object 1 as well. Three names, one object.

**Step 3.** `new BookingCopy(original)`: the constructor reads `s.getRow()` (4) and `s.getNumber()` (12) and builds a **new** `Seat` (object 2) from them. The booking's `seat` refers to object 2.

**Step 4.** `original.setNumber(99)` changes Seat object 1 only.

**Step 5.** `a.seatNumber()` reads Seat object 1 and returns 99. `c.seatNumber()` reads Seat object 2 and returns 12.

The program printed `99 12`.

**Check.** The two booking objects were built from the same argument but ended with different behaviour, only because of whether the constructor stored the reference or a copy. The copy version is the safe one for a class that needs to control its own state.

## Common misconceptions

- **"A constructor returns an object, so it needs a return type."** It has no return type. The `new` expression is what produces the reference.
- **"If I write one constructor, Java still gives me the default one."** It does not. Once any constructor exists, only your constructors are available.
- **"Uninitialised instance variables are random."** They take default values: 0, 0.0, `false` or `null`. A `null` `String` can later cause a `NullPointerException` when a method is called on it.
- **"`seat = s;` makes a new Seat."** It copies the reference only. Both variables refer to the same object.
- **"The constructor runs when the class is compiled."** It runs each time `new` is executed.
- **"Overloaded constructors must have different names."** They have the same name, the class name, and different parameter lists.

## Where this leads

Constructors set the starting state; methods then change and report it. [Methods: How to Write Them](/advanced-course-resources/computer-science-a/3-5-methods-how-write-them-study-guide/) is next, and [Passing and Returning References of an Object](/advanced-course-resources/computer-science-a/3-6-methods-passing-returning-references-object-study-guide/) builds on the aliasing you met here. Practise with the [practice questions](/advanced-course-resources/computer-science-a/3-4-constructors-practice/), consult the [revision notes](/advanced-course-resources/computer-science-a/3-4-constructors-revision-notes/), and tick the [topic checklist](/advanced-course-resources/computer-science-a/3-4-constructors-checklist/). To revisit the class structure, see [Anatomy of a Class](/advanced-course-resources/computer-science-a/3-3-anatomy-class-study-guide/).
