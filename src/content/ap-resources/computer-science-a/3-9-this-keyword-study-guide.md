---
resourceId: "mb-ap-csa-3.9-study-guide"
title: "this Keyword: Study Guide (Computer Science A 3.9)"
description: "Learn the Java this keyword: a reference to the current object, used to reach instance variables hidden by parameters, to pass the current object as an argument, and why class methods have no this."
course: "computer-science-a"
unit: 3
topics: ["3.9"]
resourceType: "study-guide"
prerequisites:
  - "Scope and hidden instance variables (Topic 3.8)"
  - "Passing object references to methods (Topic 3.6)"
  - "Class methods and static (Topic 3.7)"
prerequisiteResources: ["mb-ap-csa-3.8-study-guide"]
learningObjectives:
  - "Explain that this holds a reference to the object whose method or constructor is running"
  - "Use this.name = name to initialise an instance variable that a parameter hides"
  - "Pass the current object to another method by writing this as an argument"
  - "Write and trace expressions that compare this object with another"
  - "Explain why class methods have no this reference"
skills: ["2"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-3.9-revision-notes", "mb-ap-csa-3.9-practice", "mb-ap-csa-3.9-checklist"]
next: "mb-ap-csa-3.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a"]
keyPoints:
  - "Inside an instance method or a constructor, this is a special variable that holds a reference to the current object, the object whose method or constructor is being called."
  - "Writing this.name = name; assigns the parameter to the instance variable, which fixes the hiding problem from Topic 3.8."
  - "this can be passed as an argument, so an object can give another object a reference to itself."
  - "Comparing this with a parameter using == asks whether they are the same object."
  - "Class methods do not have a this reference, because they run with no particular object."
faqs:
  - {"question": "Do I always have to write this?", "answer": "No. When no local variable or parameter hides an instance variable, name alone means the instance variable and this.name means exactly the same thing. You need this when a parameter or local variable has the same name, or when you need to pass or compare the current object itself."}
  - {"question": "What exactly is this?", "answer": "A reference to the current object: the one on which the instance method was called, or the one being built by the constructor. If you write a.describe(), then inside describe the word this refers to the object a refers to."}
  - {"question": "Why can't a static method use this?", "answer": "A class method belongs to the class and runs with no particular object, so there is no current object for this to refer to. The compiler reports non-static variable this cannot be referenced from a static context."}
  - {"question": "What does return this do?", "answer": "It returns a reference to the current object. This lets calls be chained, as in c.add(2).add(3), because each call returns the same object for the next call to use."}
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## The object that is "me"

When you call `a.describe()`, Java runs the code of `describe` on the particular object `a` refers to. Inside that code there must be some way to say "the object I am running on". That way is the keyword **`this`**.

Within an **instance method or a constructor**, `this` acts as a special variable that holds a **reference to the current object**: the object whose method is being called, or whose constructor is running. You never declare it, and it is always available in an instance method or constructor.

Three uses matter in this course, and one restriction.

## Use 1: reach the instance variable that a parameter hides

In Topic 3.8 you saw the bug that comes from giving a constructor parameter the same name as an instance variable: `name = name;` assigns the parameter to itself and the instance variable stays `null`. With `this`, you can keep the natural names and still be clear:

```java
public class Pet
{
    private String name;
    private int age;

    public Pet(String name, int age)
    {
        this.name = name;
        this.age = age;
    }

    public String describe()
    {
        return name + " " + age;
    }

    public boolean sameObjectAs(Pet other)
    {
        return this == other;
    }

    public boolean olderThan(Pet other)
    {
        return this.age > other.age;
    }
}
```

Now `this.name` means "the `name` instance variable of the current object", and the plain `name` on the right means "the parameter". The assignment `this.name = name;` copies the parameter into the instance variable. Run with `new Pet("Rex", 4)`, `describe()` returns `Rex 4`, as the compiled program confirmed. Using the same name for the parameter and the instance variable is therefore safe **provided** you write `this.` in front of the instance variable.

The same technique works in methods. If a method had a parameter named `age`, `this.age` would still reach the instance variable.

## Use 2: pass the current object as an argument

The keyword `this` can be used to **pass the current object as an argument** in a method call. This is how an object hands a reference to itself to another object.

```java
public class Player
{
    private String name;

    public Player(String name)
    {
        this.name = name;
    }

    public String getName()
    {
        return name;
    }

    public void becomeCaptainOf(Team t)
    {
        t.setCaptain(this);
    }
}
```

```java
public class Team
{
    private Player captain;

    public void setCaptain(Player p)
    {
        captain = p;
    }

    public Player getCaptain()
    {
        return captain;
    }
}
```

Inside `becomeCaptainOf`, the call `t.setCaptain(this)` gives the `Team` a reference to the `Player` that is running the method.

<figure>
<svg viewBox="0 0 640 270" role="img" aria-labelledby="th-title" aria-describedby="th-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="th-title">this refers to the object the method was called on</title>
<desc id="th-desc">Variables in the main program: p refers to a Player object with name Maya, and team refers to a Team object. During the call p.becomeCaptainOf(team), inside the method this refers to the same Player object as p, and the parameter t refers to the same Team object as team. The statement t.setCaptain(this) stores a reference to the Maya Player in the captain variable of the Team object, shown as an arrow from captain to the Player.</desc>
<rect x="0" y="0" width="640" height="270" fill="#ffffff"/>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2"><rect x="20" y="30" width="170" height="34"/><rect x="20" y="80" width="170" height="34"/><rect x="20" y="160" width="170" height="34"/><rect x="20" y="210" width="170" height="34"/></g>
<g fill="#1d2b44" font-size="14"><text x="30" y="52">p (in main)</text><text x="30" y="102">team (in main)</text><text x="30" y="182">this (in the method)</text><text x="30" y="232">t (parameter)</text></g>
<g fill="#dbe4f0" stroke="#1d2b44" stroke-width="2"><rect x="400" y="30" width="220" height="60"/><rect x="400" y="160" width="220" height="70"/></g>
<g fill="#1d2b44" font-size="14"><text x="412" y="54" font-weight="bold">Player object</text><text x="412" y="76">name = "Maya"</text><text x="412" y="184" font-weight="bold">Team object</text><text x="412" y="206">captain = (reference to Player)</text></g>
<g stroke="#1d2b44" stroke-width="2" fill="none"><path d="M190 47 L400 55"/><path d="M190 177 L300 120 L400 70"/><path d="M190 97 L350 130 L400 185"/><path d="M190 227 L400 215"/><path d="M510 175 C 590 150, 590 80, 620 70" stroke-dasharray="6 4"/></g>
<text x="215" y="265" font-size="12" fill="#1d2b44">Solid lines: variables referring to objects. Dashed line: captain stored by t.setCaptain(this).</text>
</svg>
<figcaption>Figure 1. During <code>p.becomeCaptainOf(team)</code>, <code>this</code> and <code>p</code> refer to the same Player, and <code>t</code> and <code>team</code> refer to the same Team. The call <code>t.setCaptain(this)</code> stores a reference to that Player in the Team.</figcaption>
</figure>

After `p.becomeCaptainOf(team)`, the expression `team.getCaptain() == p` is `true`: the captain stored in the team is the very same object as `p`.

## Use 3: compare the current object with another

Because `this` is a reference, you can compare it with another reference using `==`, which tests whether they are the same object. And `this.age` reads the current object's variable while `other.age` reads the other object's (allowed because both are `Pet`s and the code is inside `Pet`; see Topic 3.6):

```java
public boolean sameObjectAs(Pet other)
{
    return this == other;
}

public boolean olderThan(Pet other)
{
    return this.age > other.age;
}
```

## The restriction: class methods have no `this`

**Class methods do not have a `this` reference.** A `static` method is not called on an object, so there is no current object. Using `this` in one is a compile-time error:

```java
public static int twice()
{
    return this.value * 2;
}
```

The compiler reports `non-static variable this cannot be referenced from a static context`.

## Worked example 1: tracing this inside methods

**Task.** Using the `Pet` class above, predict the output.

```java
Pet a = new Pet("Rex", 4);
Pet b = new Pet("Tia", 7);
Pet c = a;
System.out.println(a.describe());
System.out.println(a.sameObjectAs(c) + " " + a.sameObjectAs(b));
System.out.println(a.olderThan(b) + " " + b.olderThan(a));
```

**Step 1.** `a` refers to Pet P1 ("Rex", 4); `b` refers to P2 ("Tia", 7); `c = a;` makes `c` another name for P1.

**Step 2.** `a.describe()`: `this` is P1, so it returns `Rex 4`.

**Step 3.** `a.sameObjectAs(c)`: `this` is P1 and `other` (a copy of the reference in `c`) is P1: `this == other` is `true`. `a.sameObjectAs(b)`: P1 versus P2 is `false`. Printed: `true false`.

**Step 4.** `a.olderThan(b)`: `this.age` is 4 and `other.age` is 7: `4 > 7` is `false`. `b.olderThan(a)`: `this` is now P2, so `7 > 4` is `true`. Printed: `false true`.

| Call | `this` is | `other` is | Comparison | Result |
|---|---|---|---|---|
| `a.sameObjectAs(c)` | P1 | P1 | P1 == P1 | `true` |
| `a.sameObjectAs(b)` | P1 | P2 | P1 == P2 | `false` |
| `a.olderThan(b)` | P1 (4) | P2 (7) | 4 > 7 | `false` |
| `b.olderThan(a)` | P2 (7) | P1 (4) | 7 > 4 | `true` |

The compiled program printed:

```
Rex 4
true false
false true
```

**Check.** The value of `this` is different in different calls: it is always the object before the dot. The same method code gave different results because `this` was a different object each time.

## Worked example 2: passing this and returning this

**Part A: passing `this`.** Trace the captain example.

```java
Team team = new Team();
Player p = new Player("Maya");
p.becomeCaptainOf(team);
System.out.println(team.getCaptain().getName());
System.out.println(team.getCaptain() == p);
```

1. `team` refers to a new `Team` whose `captain` is `null` (the default for a reference type).
2. `p` refers to a `Player` with `name` "Maya". The constructor used `this.name = name;`, so the name was stored correctly.
3. `p.becomeCaptainOf(team)`: inside the method, `this` refers to the Maya object and `t` to the team. `t.setCaptain(this)` stores that reference in `captain`.
4. `team.getCaptain()` returns the stored reference, so `getName()` returns `Maya`.
5. `team.getCaptain() == p` compares two references to the same object: `true`.

The program printed `Maya` and `true`.

**Part B: returning `this` (an extension that follows from the same rule).** A method may return `this`, which lets calls be chained.

```java
public class Chain
{
    private int total;

    public Chain add(int n)
    {
        total += n;
        return this;
    }

    public int getTotal()
    {
        return total;
    }
}
```

```java
Chain c = new Chain();
Chain d = c.add(2).add(3);
System.out.println(c.getTotal() + " " + d.getTotal() + " " + (c == d));
```

`c.add(2)` adds 2 to the object and returns a reference to that same object, on which `.add(3)` is called. The total is 5. Since `d` was assigned the returned reference, `d` is the same object as `c`: the output is `5 5 true`, as the compiled program confirmed.

**Check.** Each result follows from one rule: `this` is the reference to the object before the dot in the call.

## Common misconceptions

- **"`this` always refers to the same object."** It refers to the object the current method was called on, so it changes from call to call.
- **"`this.name = name` assigns the instance variable to the parameter."** The assignment goes right to left: the parameter's value is stored into the instance variable.
- **"I must put `this.` before every instance variable."** Only where a parameter or local variable hides it. Elsewhere it is optional and means the same.
- **"A class method can use `this` if the class has instance variables."** It cannot; class methods have no `this`.
- **"`this == other` compares contents."** It compares references, so it is `true` only when both refer to the same object.
- **"`this` is a variable I declare."** It is provided automatically in instance methods and constructors.

## Where this leads

That completes Unit 3. You can now design a class, write its constructors, methods, class variables and use `this`. For a mixed check, use the [Unit 3 diagnostic](/advanced-course-resources/computer-science-a/unit-3-diagnostic/) and the [Unit 3 review](/advanced-course-resources/computer-science-a/unit-3-review/). Before moving on, work through the [practice questions](/advanced-course-resources/computer-science-a/3-9-this-keyword-practice/), the [revision notes](/advanced-course-resources/computer-science-a/3-9-this-keyword-revision-notes/) and the [topic checklist](/advanced-course-resources/computer-science-a/3-9-this-keyword-checklist/). To revise the hiding problem that `this` solves, see [Scope and Access](/advanced-course-resources/computer-science-a/3-8-scope-access-study-guide/). Unit 4 starts with [Ethical and Social Issues Around Data Collection](/advanced-course-resources/computer-science-a/4-1-ethical-social-issues-data-collection-study-guide/).
