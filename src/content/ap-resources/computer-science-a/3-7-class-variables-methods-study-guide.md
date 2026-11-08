---
resourceId: "mb-ap-csa-3.7-study-guide"
title: "Class Variables and Methods: Study Guide (Computer Science A 3.7)"
description: "Learn Java class variables and class methods: static means one copy shared by the class, what class methods can and cannot access, final constants, and how to call them with the class name."
course: "computer-science-a"
unit: 3
topics: ["3.7"]
resourceType: "study-guide"
prerequisites:
  - "Writing instance methods and constructors (Topics 3.4 and 3.5)"
  - "Calling class methods such as Math.sqrt (Topic 1.10)"
prerequisiteResources: ["mb-ap-csa-3.5-study-guide"]
learningObjectives:
  - "Explain that a class variable belongs to the class and all objects share a single copy"
  - "Declare class variables and class methods with static, and constants with static final"
  - "Say what a class method can and cannot access without an instance"
  - "Call a public class variable or method using the class name and the dot operator"
  - "Trace code that mixes instance variables and class variables"
skills: ["2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-3.7-revision-notes", "mb-ap-csa-3.7-practice", "mb-ap-csa-3.7-checklist"]
next: "mb-ap-csa-3.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a"]
keyPoints:
  - "A class variable is declared with static; it belongs to the class and all objects share one copy, unlike an instance variable, which each object has separately."
  - "A public class variable or class method is accessed with the class name and the dot operator, for example Member.getCount()."
  - "A class method can access and change class variables and call other class methods, but cannot use instance variables or instance methods unless it is given an instance as a parameter."
  - "A variable declared final cannot be modified after it is set; constants are usually static final."
  - "Class variables are the standard tool for counting objects and for generating unique identifiers."
faqs:
  - {"question": "Why can't a static method use an instance variable?", "answer": "A class method belongs to the class, not to any one object, so there is no particular object whose instance variable it could mean. It can use instance variables only of an object it is given, such as a parameter."}
  - {"question": "Do I call a static method on an object or on the class?", "answer": "On the class, for example Member.getCount(). That is the clearest form and is what the course expects for public class variables and methods."}
  - {"question": "What does final do?", "answer": "A variable declared final cannot be given a new value after it has been set. A constant in this course is typically declared public static final, so one shared, unchangeable value can be read from anywhere."}
  - {"question": "Does each object get its own copy of a static variable?", "answer": "No. There is exactly one copy, shared by every object of the class. Changing it through one object changes what every other object sees."}
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Two kinds of attribute: per-object and per-class

In Topic 3.1 you met the idea that an attribute can be **unique to each object** (an instance variable) or **shared by every object of the class** (a class variable). Now you declare and use both.

Think of a school. Each student has their own locker number. That is per-student data: an **instance variable**. But the school also has a single count of how many students have enrolled. That number is not owned by any one student. It belongs to the school as a whole: a **class variable**.

## Class variables

**Class variables belong to the class**, with all objects of a class sharing a **single copy** of the class variable. A class variable is designated with the keyword **`static`** before the variable type:

```java
private static int nextId = 1;     // one copy, shared
private int id;                     // a separate copy inside every object
```

If the class variable is `public`, code outside the class reaches it with the **class name and the dot operator**, because it is associated with the class, not with objects of the class: `Member.MAX_BORROW`.

A variable declared **`final`** cannot be modified once its value has been set. A **constant** is normally declared `public static final`: shared, readable everywhere and unchangeable.

## Class methods

A **class method** is declared with `static` and belongs to the class too. You already use class methods such as `Math.sqrt` and `Integer.parseInt`. They are called with the class name.

There are firm rules about what a class method can reach:

- It **can** access or change the values of **class variables** and **call other class methods**.
- It **cannot** access or change the values of **instance variables**, or call **instance methods**, **unless it is passed an instance of the class** through a parameter.

The reason is that a class method runs without any particular object. Writing `id` in it would raise the question "whose `id`?", and Java refuses. A class method that is given a `Member` as a parameter, on the other hand, has a particular object to work with.

Here is a class that uses all of these ideas:

```java
public class Member
{
    public static final int MAX_BORROW = 4;     // constant: shared and cannot change
    private static int nextId = 1;              // class variable: one copy for all Members

    private int id;                             // instance variable: one per Member
    private String name;

    public Member(String memberName)
    {
        name = memberName;
        id = nextId;
        nextId++;
    }

    public int getId()
    {
        return id;
    }

    public static int getCount()
    {
        return nextId - 1;
    }

    public static boolean sameId(Member a, Member b)
    {
        return a.id == b.id;                    // allowed: given instances, inside the class
    }
}
```

- `nextId` is a `private static` class variable: one copy for all `Member`s. The constructor reads it to give each new member a **unique identifier** and then increments it.
- `id` is an instance variable: each member keeps its own.
- `getCount()` is a class method that uses only the class variable, so it is allowed.
- `sameId(Member a, Member b)` is a class method that reads instance variables of the objects it is **given**, which is allowed because they are passed in and the code is inside `Member`.
- `MAX_BORROW` is a `public static final` constant, read from outside as `Member.MAX_BORROW`.

<figure>
<svg viewBox="0 0 640 280" role="img" aria-labelledby="mem-title mem-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="mem-title">One shared class variable and one instance variable per object</title>
<desc id="mem-desc">A box at the top labelled Member class holds the single shared class variable nextId, whose value is 4 after three members are created, and the constant MAX_BORROW equals 4. Below it three object boxes labelled a, b and c each hold their own id: a has id 1, b has id 2, c has id 3. A note says there is one copy of nextId but three separate copies of id.</desc>
<rect x="0" y="0" width="640" height="280" fill="#ffffff"/>
<rect x="150" y="20" width="340" height="80" fill="#dbe4f0" stroke="#1d2b44" stroke-width="2"/>
<g fill="#1d2b44" font-size="14"><text x="162" y="44" font-weight="bold">Member (the class): one copy only</text><text x="162" y="68">static nextId = 4  (after 3 members)</text><text x="162" y="88">static final MAX_BORROW = 4</text></g>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2"><rect x="30" y="170" width="170" height="70"/><rect x="235" y="170" width="170" height="70"/><rect x="440" y="170" width="170" height="70"/></g>
<g fill="#1d2b44" font-size="14"><text x="42" y="194" font-weight="bold">a (Member)</text><text x="42" y="216">id = 1</text><text x="247" y="194" font-weight="bold">b (Member)</text><text x="247" y="216">id = 2</text><text x="452" y="194" font-weight="bold">c (Member)</text><text x="452" y="216">id = 3</text></g>
<g stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" fill="none"><path d="M115 170 L250 100"/><path d="M320 170 L320 100"/><path d="M525 170 L390 100"/></g>
<text x="320" y="265" text-anchor="middle" font-size="13" fill="#1d2b44">Each object has its own id. All of them share the class's nextId.</text>
</svg>
<figcaption>Figure 1. After three Member objects are created: one shared class variable, three separate instance variables. The dashed lines show that every object belongs to the same class; the text, not colour, tells the two kinds of variable apart.</figcaption>
</figure>

## Worked example 1: unique identifiers

**Task.** Predict the output of this code using the `Member` class.

```java
System.out.println(Member.getCount());
Member a = new Member("Ana");
Member b = new Member("Bo");
Member c = new Member("Cy");
System.out.println(a.getId() + " " + b.getId() + " " + c.getId());
System.out.println(Member.getCount());
System.out.println(Member.sameId(a, b) + " " + Member.sameId(c, c));
System.out.println(Member.MAX_BORROW);
```

**Step 1.** Before any object exists, `nextId` is 1 (the initial value of the class variable). `Member.getCount()` returns `nextId - 1`, which is 0. Notice that this call works with **no object at all**, because it is a class method.

**Step 2.** Trace the three constructors.

| Statement | `id` given to the new object | `nextId` after |
|---|---|---|
| (before any object) | | 1 |
| `new Member("Ana")` | 1 | 2 |
| `new Member("Bo")` | 2 | 3 |
| `new Member("Cy")` | 3 | 4 |

**Step 3.** Second print: `1 2 3`.

**Step 4.** Third print: `Member.getCount()` is `4 - 1`, which is `3`.

**Step 5.** `sameId(a, b)` compares 1 and 2: `false`. `sameId(c, c)` compares 3 with 3: `true`. Fourth print: `false true`.

**Step 6.** `Member.MAX_BORROW` is `4`.

The compiled program printed:

```
0
1 2 3
3
false true
4
```

**Check.** Every object got a different `id`, although the same line in the constructor ran each time, because `nextId` is shared and moves on after each object.

## Worked example 2: shared versus per-object counts, and what the compiler rejects

**Part A: a class variable and an instance variable side by side.**

```java
public class Tally
{
    private static int all = 0;
    private int mine = 0;

    public void hit()
    {
        mine++;
        all++;
    }

    public int getMine()
    {
        return mine;
    }

    public static int getAll()
    {
        return all;
    }

    public static void reset()
    {
        all = 0;
    }
}
```

```java
Tally p = new Tally();
Tally q = new Tally();
p.hit();
p.hit();
q.hit();
Tally.reset();
q.hit();
System.out.println(p.getMine() + " " + q.getMine() + " " + Tally.getAll());
```

| Statement | `p.mine` | `q.mine` | `all` (shared) |
|---|---|---|---|
| after both constructors | 0 | 0 | 0 |
| `p.hit()` twice | 2 | 0 | 2 |
| `q.hit()` | 2 | 1 | 3 |
| `Tally.reset()` | 2 | 1 | 0 |
| `q.hit()` | 2 | 2 | 1 |

The output was `2 2 1`. The reset affected only the shared count, and the per-object counts continued.

**Part B: a constant.**

```java
public class Shop
{
    public static final double TAX_RATE = 0.25;

    public static double withTax(double price)
    {
        return price * (1 + TAX_RATE);
    }
}
```

`Shop.withTax(80.0)` evaluates `80.0 * (1 + 0.25)`, which is `100.0`. The constant is read with the class name, `Shop.TAX_RATE`, which is `0.25`. Both values were confirmed by running the code.

**Part C: what the compiler rejects.** This class has three mistakes.

```java
public class Bad
{
    private int id = 5;
    private static int total = 0;
    public static final int LIMIT = 10;

    public int getId() { return id; }

    public static int first()  { return id; }
    public static int second() { return getId(); }
    public static int third()  { LIMIT = 20; return total; }
}
```

The compiler reports:

- `first`: `non-static variable id cannot be referenced from a static context`. A class method cannot read an instance variable without an instance.
- `second`: `non-static method getId() cannot be referenced from a static context`. A class method cannot call an instance method without an instance.
- `third`: `cannot assign a value to static final variable LIMIT`. A final variable cannot be changed. (Using `total` there is fine, because it is a class variable.)

**Check.** Each fix keeps the rule in view: pass an instance (`first(Bad b)` returning `b.id`), make the method non-static, and remove the assignment to the constant.

## Common misconceptions

- **"Static means the value can never change."** That is `final`. A `static` variable such as `nextId` changes freely; it is just shared.
- **"Each object has its own copy of a static variable."** There is one copy for the whole class.
- **"A class method can use any instance variable of its class."** Only those of an object it has been given.
- **"I need an object to call a class method."** You do not: `Member.getCount()` works before any `Member` exists.
- **"`final` and `private` do the same thing."** `private` limits who can use a variable; `final` limits whether it can be changed.
- **"A constructor should reset the class variable."** Doing so would erase the shared count each time an object is built; the constructor should only update it.

## Where this leads

Class variables for counting and identification are a staple of class-design problems. The next topic, [Scope and Access](/advanced-course-resources/computer-science-a/3-8-scope-access-study-guide/), looks at where each kind of variable can be used. Work on the [practice questions](/advanced-course-resources/computer-science-a/3-7-class-variables-methods-practice/), read the [revision notes](/advanced-course-resources/computer-science-a/3-7-class-variables-methods-revision-notes/) and tick the [topic checklist](/advanced-course-resources/computer-science-a/3-7-class-variables-methods-checklist/). If you need the instance-method rules again, see [Methods: How to Write Them](/advanced-course-resources/computer-science-a/3-5-methods-how-write-them-study-guide/).
