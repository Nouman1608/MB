---
resourceId: "mb-ap-csa-3.3-study-guide"
title: "Anatomy of a Class: Study Guide (Computer Science A 3.3)"
description: "Learn the parts of a Java class: header, private instance variables, public constructors and methods, how public and private control access, and why encapsulation protects an object's data."
course: "computer-science-a"
unit: 3
topics: ["3.3"]
resourceType: "study-guide"
prerequisites:
  - "Abstraction, attributes and behaviours (Topic 3.1)"
  - "Declaring variables and calling instance methods (Units 1 and 2)"
prerequisiteResources: ["mb-ap-csa-3.1-study-guide"]
learningObjectives:
  - "Name the parts of a class: header, instance variables, constructors and methods"
  - "Use public and private correctly for classes, instance variables, constructors and methods"
  - "Explain encapsulation and how private data with public methods protects an object"
  - "Read a class and say which code can and cannot access each member"
  - "Write a complete class from a written specification"
skills: ["1", "2"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-3.3-revision-notes", "mb-ap-csa-3.3-practice", "mb-ap-csa-3.3-checklist"]
next: "mb-ap-csa-3.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a"]
keyPoints:
  - "In this course a class is declared public class Name, its constructors are public, and its instance variables are private unless the specification says otherwise."
  - "private restricts access to the declaring class; public allows access from other classes."
  - "Encapsulation keeps a class's implementation details hidden, so other classes use only its public methods."
  - "Each object has its own copy of every instance variable, so objects of one class have separate state."
  - "A private method is a helper that only the class's own code can call."
faqs:
  - {"question": "Should every method be public?", "answer": "No. Methods that other classes must call are public. Helper methods that only the class itself needs are private, which keeps the class's interface small and its internals hidden."}
  - {"question": "Why are instance variables private?", "answer": "So that no code outside the class can change an object's state in a way the class did not allow. Other classes must go through public methods, which can check values first. Make them private unless the question says otherwise."}
  - {"question": "What does the name of a constructor have to be?", "answer": "It must be exactly the name of the class, with no return type, not even void. If you write void in front, Java treats it as an ordinary method and the class then has only the default constructor."}
  - {"question": "Do two objects of the same class share their instance variables?", "answer": "No. Each object has its own copy of every instance variable. Only a static variable (Topic 3.7) is shared."}
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## A class is a blueprint; an object is one thing built from it

A class describes a kind of thing: what data each one holds and what each one can do. An **object** is one actual thing built from that description. A `Parcel` class describes parcels in general. The specific parcel going to Leeds, and the one going to Bath, are two separate objects, each with its own values.

Unit 3 is where you write the blueprints. In Topic 3.1 you listed attributes and behaviours in a design. Now you turn the design into Java. Every class you write has the same four parts, in this order:

1. the **class header**;
2. the **instance variables**, which are the attributes;
3. one or more **constructors**, which set up a new object;
4. the **methods**, which are the behaviours.

## Access: public and private

Two keywords decide who may use what. They are the working tools of **data encapsulation**, a technique in which the implementation details of a class are kept hidden from other classes.

- `private` restricts access to the **declaring class**. Only code written inside that class may use the member.
- `public` allows access from **classes outside** the declaring class as well.

The course fixes some choices, so you do not have to decide them each time:

| Part | Access to use | Reason |
|---|---|---|
| The class | always `public`, declared with `class` | In this course classes are always public |
| Constructors | always `public` | In this course constructors are always public |
| Instance variables | `private`, unless the specification says otherwise | Keeps the object's data internal to the class (encapsulation) |
| Methods other classes must call | `public` | They are the class's behaviours |
| Helper methods used only inside the class | `private` | They are an implementation detail |

**Instance variables belong to the object, and each object has its own copy of every one of them.** Access to attributes should stay internal to the class to accomplish encapsulation. If another class needs to read or change a value, you write a public method for it (accessors and mutators are Topic 3.5).

Access to **behaviours** can be internal or external. A `public` method can be called from inside or outside the class. A `private` method can only be called from inside the class.

## The anatomy in code

Here is a complete class. Read it from top to bottom against the four parts above.

```java
public class Parcel
{
    private double weightKg;
    private String destination;
    private boolean delivered;

    public Parcel(double weight, String place)
    {
        weightKg = weight;
        destination = place;
        delivered = false;
    }

    public double getWeightKg()
    {
        return weightKg;
    }

    public boolean isHeavy()
    {
        return weightKg > 20.0;
    }

    public void markDelivered()
    {
        delivered = true;
    }

    public String describe()
    {
        return destination + (delivered ? " (delivered)" : " (on the way)");
    }
}
```

- `public class Parcel` is the **header**.
- `weightKg`, `destination` and `delivered` are `private` **instance variables**.
- `public Parcel(double weight, String place)` is the **constructor**: same name as the class, no return type, and it sets the initial state. `delivered` starts `false`.
- `getWeightKg`, `isHeavy`, `markDelivered` and `describe` are public **methods**.

<figure>
<svg viewBox="0 0 640 300" role="img" aria-labelledby="blue-title blue-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="blue-title">Class as blueprint and two objects with separate copies of the variables</title>
<desc id="blue-desc">On the left, a box labelled Parcel class lists three private instance variables, weightKg, destination and delivered, and four public methods. Two arrows labelled new lead to two object boxes on the right. Object a holds weightKg 25.5, destination Leeds, delivered true. Object b holds weightKg 3.0, destination Bath, delivered false. A note says each object has its own copy of every instance variable, and code outside the class can reach them only through the public methods.</desc>
<rect x="0" y="0" width="640" height="300" fill="#ffffff"/>
<rect x="20" y="30" width="250" height="240" fill="#dbe4f0" stroke="#1d2b44" stroke-width="2"/>
<line x1="20" y1="62" x2="270" y2="62" stroke="#1d2b44" stroke-width="2"/>
<line x1="20" y1="150" x2="270" y2="150" stroke="#1d2b44" stroke-width="2"/>
<g fill="#1d2b44" font-size="14"><text x="145" y="52" text-anchor="middle" font-weight="bold" font-size="16">Parcel (class)</text>
<text x="32" y="82">- weightKg : double</text><text x="32" y="104">- destination : String</text><text x="32" y="126">- delivered : boolean</text>
<text x="32" y="172">+ Parcel(double, String)</text><text x="32" y="192">+ getWeightKg() : double</text><text x="32" y="212">+ isHeavy() : boolean</text><text x="32" y="232">+ markDelivered() : void</text><text x="32" y="252">+ describe() : String</text></g>
<g stroke="#1d2b44" stroke-width="2" fill="none"><path d="M270 100 L390 70"/><path d="M270 200 L390 230"/></g>
<g fill="#1d2b44" font-size="13"><text x="305" y="78">new</text><text x="305" y="226">new</text></g>
<rect x="390" y="30" width="230" height="90" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g fill="#1d2b44" font-size="14"><text x="402" y="52" font-weight="bold">a (object)</text><text x="402" y="74">weightKg = 25.5</text><text x="402" y="94">destination = "Leeds"</text><text x="402" y="114">delivered = true</text></g>
<rect x="390" y="180" width="230" height="90" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g fill="#1d2b44" font-size="14"><text x="402" y="202" font-weight="bold">b (object)</text><text x="402" y="224">weightKg = 3.0</text><text x="402" y="244">destination = "Bath"</text><text x="402" y="264">delivered = false</text></g>
<text x="505" y="152" text-anchor="middle" font-size="12" fill="#1d2b44">each object has its own copy</text>
</svg>
<figcaption>Figure 1. The Parcel class (blueprint) and two objects built from it. The minus sign marks private members and the plus sign marks public members. Values are in words and numbers, so colour is not needed to read the figure.</figcaption>
</figure>

## What the compiler enforces

Access rules are checked when the program is compiled. If a different class tries to use a private member, it does not compile.

```java
public class Bad
{
    public static void main(String[] args)
    {
        Parcel p = new Parcel(3.0, "Bath");
        p.weightKg = 30.0;            // not allowed
        System.out.println(p.isHeavy());
    }
}
```

The compiler reports `error: weightKg has private access in Parcel`. The fix is not to make the variable public. The fix is to use a public method of `Parcel`, or to add one if the specification calls for it. That is encapsulation doing its job: the class decides what can be done to its data.

## Worked example 1: reading a class and tracing two objects

**Task.** Using the `Parcel` class above, state what this code prints.

```java
Parcel a = new Parcel(25.5, "Leeds");
Parcel b = new Parcel(3.0, "Bath");
a.markDelivered();
System.out.println(a.describe() + " " + a.isHeavy());
System.out.println(b.describe() + " " + b.isHeavy());
System.out.println(b.getWeightKg());
```

**Step 1: construct `a`.** The constructor copies the arguments into the instance variables: `weightKg` is 25.5, `destination` is "Leeds", `delivered` is `false`.

**Step 2: construct `b`.** A second, separate object: 3.0, "Bath", `false`.

**Step 3: `a.markDelivered()`.** It sets `delivered` to `true` **in `a` only**. `b.delivered` is still `false`, because each object has its own copy.

**Step 4: the first print.** `a.describe()` returns `"Leeds" + " (delivered)"`, which is `"Leeds (delivered)"`. `a.isHeavy()` tests `25.5 > 20.0`, which is `true`. The line is `Leeds (delivered) true`.

**Step 5: the second print.** `b.describe()` returns `"Bath (on the way)"`. `b.isHeavy()` tests `3.0 > 20.0`, which is `false`.

**Step 6: the third print.** `b.getWeightKg()` returns `3.0`.

| After this line | `a` state | `b` state |
|---|---|---|
| construct `a` | 25.5, Leeds, false | not yet created |
| construct `b` | 25.5, Leeds, false | 3.0, Bath, false |
| `a.markDelivered()` | 25.5, Leeds, true | 3.0, Bath, false |

The program printed:

```
Leeds (delivered) true
Bath (on the way) false
3.0
```

**Check.** The two objects ended in different states because they have separate copies of their instance variables.

## Worked example 2: writing a class from a specification

**Task.** Write a class `Scoreboard` for a match. It keeps a home score and an away score, both 0 at the start. `addHome` and `addAway` add a number of points but ignore anything that is not positive. `leader` returns `"home"`, `"away"` or `"tied"`.

**Step 1: header and attributes.** `public class Scoreboard` with two `private int` instance variables, `homeScore` and `awayScore`.

**Step 2: the constructor.** The specification gives no parameters, so the constructor takes none. It sets both scores to 0. (A constructor is `public`, has the class name and no return type.)

**Step 3: a private helper.** Both `addHome` and `addAway` need the same check, so write it once as a `private` method, `isValid(int points)`. Only `Scoreboard` needs it, so it is private. This is procedural abstraction from Topic 3.1.

**Step 4: the public methods.** `addHome` and `addAway` call the helper; `leader` compares the scores.

```java
public class Scoreboard
{
    private int homeScore;
    private int awayScore;

    public Scoreboard()
    {
        homeScore = 0;
        awayScore = 0;
    }

    public void addHome(int points)
    {
        if (isValid(points))
        {
            homeScore += points;
        }
    }

    public void addAway(int points)
    {
        if (isValid(points))
        {
            awayScore += points;
        }
    }

    public String leader()
    {
        if (homeScore > awayScore)
        {
            return "home";
        }
        if (awayScore > homeScore)
        {
            return "away";
        }
        return "tied";
    }

    private boolean isValid(int points)
    {
        return points > 0;
    }
}
```

**Trace.**

| Call | `homeScore` | `awayScore` | Note |
|---|---|---|---|
| construct | 0 | 0 | |
| `addHome(3)` | 3 | 0 | 3 > 0 so valid |
| `addAway(5)` | 3 | 5 | |
| `addAway(-2)` | 3 | 5 | −2 is not positive, ignored |
| `addHome(2)` | 5 | 5 | |
| `leader()` | 5 | 5 | neither is greater: `"tied"` |
| `addHome(1)` then `leader()` | 6 | 5 | `"home"` |

The program printed `tied` and then `home`.

**Check.** Every instance variable is private, the constructor is public with no return type, and the helper is private. All four anatomy parts are there.

## Common misconceptions

- **"Public makes things easier, so I will use it everywhere."** Public instance variables let any code change the object's state without the class's checks. Keep instance variables private unless the specification says otherwise.
- **"A constructor needs `void`."** A constructor has no return type at all. Writing `public void Parcel(...)` creates an ordinary method that happens to have the class's name, and the class keeps only its default constructor. Code like `new Parcel(3.0, "Bath")` then fails to compile, with `required: no arguments`.
- **"Private means secret from everyone."** Private restricts access to the declaring class. Objects of the *same* class can still reach each other's private members, a point Topic 3.6 returns to.
- **"Objects of one class share their instance variables."** Each has its own copy. Changing `a.delivered` cannot change `b.delivered`.
- **"A private method is useless because nothing can call it."** The class's own methods can, and that is what helper methods are for.
- **"The constructor and a method are the same."** A constructor sets the initial state when an object is created; a method is a behaviour that can be called afterwards.

## Where this leads

Next you will look closely at constructors in [Constructors](/advanced-course-resources/computer-science-a/3-4-constructors-study-guide/), then at writing methods in [Methods: How to Write Them](/advanced-course-resources/computer-science-a/3-5-methods-how-write-them-study-guide/). To check yourself on this topic, work through the [practice questions](/advanced-course-resources/computer-science-a/3-3-anatomy-class-practice/), skim the [revision notes](/advanced-course-resources/computer-science-a/3-3-anatomy-class-revision-notes/) and tick the [topic checklist](/advanced-course-resources/computer-science-a/3-3-anatomy-class-checklist/). If the design vocabulary is hazy, revisit [Abstraction and Program Design](/advanced-course-resources/computer-science-a/3-1-abstraction-program-design-study-guide/).
