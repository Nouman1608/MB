---
resourceId: "mb-ap-csa-1.12-study-guide"
title: "Objects: Instances of Classes: Study Guide (Computer Science A 1.12)"
description: "Learn the relationship between a class and an object, what a reference variable holds, how reference variables differ from primitive variables, and how two references can refer to one object."
course: "computer-science-a"
unit: 1
topics: ["1.12"]
resourceType: "study-guide"
prerequisites: ["Topic 1.7: a class defines attributes and behaviors and is a reference type", "Topic 1.2: primitive types hold values; String is a reference type"]
prerequisiteResources: ["mb-ap-csa-1.11-study-guide"]
learningObjectives: ["Explain a class as a blueprint and an object as a specific instance of it with its own attribute values", "Declare variables of reference types and explain that they hold object references, not objects", "Describe the relationship between a superclass and its subclasses and state that every class is a subclass of Object", "Trace code in which two reference variables refer to the same object, and contrast this with copying a primitive"]
skills: ["4"]
studyMinutes: 35
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.12-revision-notes", "mb-ap-csa-1.12-practice", "mb-ap-csa-1.12-checklist"]
next: "mb-ap-csa-1.12-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["A class is the formal implementation, or blueprint, of the attributes and behaviors of an object; an object is a specific instance of a class with defined attributes.", "A variable of a reference type holds an object reference, which can be thought of as the memory address of the object, not the object itself.", "Copying a reference variable copies the reference, so both variables then refer to the same object.", "Common attributes and behaviors of related classes can be placed in a superclass; subclasses extend it. All classes in Java are subclasses of the Object class.", "Designing and implementing inheritance relationships is outside the scope of the course and exam."]
faqs: [{"question": "What is the difference between a class and an object?", "answer": "A class is the blueprint: it describes the attributes and behaviors that every object of that kind has. An object is one specific instance of the class, with its own values for the attributes. One class can have many objects, in the same way that one recipe can make many cakes."}, {"question": "What does a reference variable actually hold?", "answer": "An object reference, which can be thought of as the memory address of the object. The variable does not contain the object; it tells the program where the object is. A primitive variable, by contrast, holds its value directly."}, {"question": "If I assign one reference variable to another, do I get a second object?", "answer": "No. The assignment copies the reference, so both variables refer to the same single object. A change made to the object through one variable is visible through the other."}, {"question": "Do I need to write superclasses and subclasses for the exam?", "answer": "No. The course expects you to know what a class hierarchy is and that all classes are subclasses of Object, but designing and implementing inheritance relationships is outside its scope."}]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## Blueprints and the things built from them

In Topic 1.7 you learned that a class describes **attributes** (data) and **behaviors** (methods). Now we separate two ideas that beginners often mix up.

- A **class** is the formal implementation, or **blueprint**, of the attributes and behaviors of an object. It is a description written once.
- An **object** is a **specific instance of a class** with defined attributes. It is a real thing, created from the blueprint, holding actual values.

Think of the plan for a house and a house built from it. The plan says every house has a number of rooms and a front door. Each built house has its own actual number of rooms, its own address and its own colour. Many houses can be built from one plan, and changing the paint on one does not change the others.

The same holds in code. `String` is a class. The text `"banana"` is an object, an instance of `String`, whose attribute is the sequence of characters b-a-n-a-n-a. The text `"kiwi"` is another instance of the same class with different characters. Both can do everything the class allows (report a length, extract a substring), but each has its own data.

Here is a small class written for these examples. It is not a library class; it is imagined as written by another programmer. (You will study how a class is written in Unit 3, and how constructors create objects in Topic 1.13.)

<figure>
<svg viewBox="0 0 520 228" role="img" aria-labelledby="fig-counter-t fig-counter-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fig-counter-t">The Counter class as a blueprint</title>
<desc id="fig-counter-d">A class box named Counter. Its attributes compartment lists: count: a whole number. Its behaviors compartment lists: Counter()  (creates a Counter with count 0); void increment()  (adds 1 to count); int getCount()  (returns count).</desc>
<rect x="0" y="0" width="520" height="228" fill="#ffffff"/>
<rect x="40" y="14" width="440" height="36" rx="4" fill="#b8c4d8" stroke="#1d2b44" stroke-width="2"/>
<text x="260.0" y="38" text-anchor="middle" font-size="16" font-weight="bold" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">class Counter</text>
<rect x="40" y="50" width="440" height="52" rx="0" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="260.0" y="70" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d2b44" >attributes (data stored in variables)</text>
<text x="260.0" y="88" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">count: a whole number</text>
<rect x="40" y="102" width="440" height="96" rx="0" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="260.0" y="122" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d2b44" >behaviors (defined by methods)</text>
<text x="260.0" y="140" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">Counter()  (creates a Counter with count 0)</text>
<text x="260.0" y="162" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">void increment()  (adds 1 to count)</text>
<text x="260.0" y="184" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">int getCount()  (returns count)</text>
</svg>
<figcaption>Figure 1. The class describes what every Counter has and can do. It holds no particular count: each object created from it will have its own.</figcaption>
</figure>

## Variables that hold references

A variable of a **reference type** holds an **object reference**. The reference can be thought of as the **memory address** of the object. This is the key difference between the two kinds of variable you have met:

| | Primitive variable (`int`, `double`, `boolean`) | Reference variable (`String`, `Counter`, ...) |
|---|---|---|
| What the variable holds | the value itself | a reference to an object |
| Declaring it | `int count;` | `Counter c;` |
| Copying with `=` | copies the value | copies the reference |
| After the copy | two independent values | two names for the same object |
| Can hold `null` | no | yes (no object) |

Declaring a reference variable creates only the variable. The line `Counter c;` makes a box that can hold a reference to a `Counter`; it does **not** make a `Counter` object. An object comes into existence when you create one (Topic 1.13), and the variable then holds a reference to it.

<figure>
<svg viewBox="0 0 600 238" role="img" aria-labelledby="fig-refs-t fig-refs-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fig-refs-t">Reference variables point to objects</title>
<desc id="fig-refs-d">Variable boxes on the left, object boxes on the right. Objects: Counter object 1 with count = 2; Counter object 2 with count = 1. Arrows and values: variable a refers to the Counter object 1 object; variable b refers to the Counter object 1 object; variable c refers to the Counter object 2 object.</desc>
<rect x="0" y="0" width="600" height="238" fill="#ffffff"/>
<text x="20" y="24" text-anchor="start" font-size="13" font-weight="bold" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">Counter a</text>
<rect x="20" y="30" width="110" height="44" rx="4" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="75" y="57.0" text-anchor="middle" font-size="15" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace"></text>
<text x="20" y="90" text-anchor="start" font-size="13" font-weight="bold" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">Counter b</text>
<rect x="20" y="96" width="110" height="44" rx="4" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="75" y="123.0" text-anchor="middle" font-size="15" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace"></text>
<text x="20" y="156" text-anchor="start" font-size="13" font-weight="bold" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">Counter c</text>
<rect x="20" y="162" width="110" height="44" rx="4" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="75" y="189.0" text-anchor="middle" font-size="15" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace"></text>
<rect x="330" y="30" width="240" height="54" rx="4" fill="#b8c4d8" stroke="#1d2b44" stroke-width="1.5"/>
<text x="450" y="52" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">Counter object 1</text>
<text x="450" y="74" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">count = 2</text>
<rect x="330" y="106" width="240" height="54" rx="4" fill="#b8c4d8" stroke="#1d2b44" stroke-width="1.5"/>
<text x="450" y="128" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">Counter object 2</text>
<text x="450" y="150" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">count = 1</text>
<line x1="75" y1="52.0" x2="330" y2="47" stroke="#1d2b44" stroke-width="1.8"/>
<circle cx="75" cy="52.0" r="3" fill="#1d2b44"/>
<polygon points="330,47 321.8,50.7 321.6,43.7" fill="#1d2b44"/>
<line x1="75" y1="118.0" x2="330" y2="47" stroke="#1d2b44" stroke-width="1.8"/>
<circle cx="75" cy="118.0" r="3" fill="#1d2b44"/>
<polygon points="330,47 323.0,52.6 321.1,45.8" fill="#1d2b44"/>
<line x1="75" y1="184.0" x2="330" y2="123" stroke="#1d2b44" stroke-width="1.8"/>
<circle cx="75" cy="184.0" r="3" fill="#1d2b44"/>
<polygon points="330,123 322.8,128.3 321.1,121.5" fill="#1d2b44"/>
</svg>
<figcaption>Figure 2. Three Counter variables. The variables a and b hold references to the same object, which has a count of 2. The variable c holds a reference to a different object with a count of 1.</figcaption>
</figure>

An arrow in the diagram means "holds a reference to". Two arrows leading to the same box show two variables referring to the **same** object.

### Two names for one object

Run the program below. The class `Counter` is defined first (you can skim its code for now), followed by the program that uses it.

```java
class Counter {
    private int count;

    public Counter() {
        count = 0;
    }

    public void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }
}
```

The program that uses it:

```java
public class Alias {
    public static void main(String[] args) {
        Counter a = new Counter();
        Counter b = a;
        Counter c = new Counter();
        a.increment();
        a.increment();
        c.increment();
        System.out.println(a.getCount() + " " + b.getCount() + " " + c.getCount());
        int x = 5;
        int y = x;
        x++;
        System.out.println(x + " " + y);
    }
}
```

```text
2 2 1
6 5
```

The statement `Counter b = a;` did **not** create a second `Counter`. It copied the reference held by `a`, so `a` and `b` refer to the **same** object. Incrementing through `a` therefore changed what `b` sees: both report 2. The variable `c` refers to a different object, which was incremented only once.

The primitive case behaves differently. `int y = x;` copied the **value** 5, so `x++` changed only `x`. This is the same copying rule you met in Topic 1.2, and the reason reference variables need their own diagram.

## Class hierarchies and the Object class

Related classes often share attributes and behaviors. A programmer can put the common features into a single class called a **superclass**. Classes that **extend** a superclass, called **subclasses**, can draw upon the existing attributes and behaviors of the superclass without replacing these in the code. This creates an **inheritance relationship** from the subclasses to the superclass.

For example, a `Cat` and a `Dog` class might both extend an `Animal` superclass that already provides a name and an `eat()` behavior. You would then write only what is different about cats and dogs. (**Designing and implementing inheritance relationships is outside the scope of the course and exam.** It is enough to know what the words mean.)

One inheritance fact applies to everything: **all classes in Java are subclasses of the `Object` class**. Even a class you write yourself, with no mention of `Object`, inherits from it. That is why every object has the methods the Quick Reference lists for `Object`, `equals(Object other)` and `toString()`, and why you can call them on any object.

## Reading and drawing reference diagrams

Reference diagrams are the main tool of this topic, and drawing them by hand is the quickest way to answer a question about references. The conventions are simple.

- **One box per variable** on the left, labelled with its type and name. For a primitive, write the value inside the box. For a reference, draw an arrow leaving the box, or write `null` if there is no object.
- **One box per object** on the right, labelled with its class, and listing its attribute values.
- **An arrow means "holds a reference to".** It starts in a variable's box and ends at an object's box.

Then redraw the diagram **after every statement**. A statement that contains `new` adds a box on the right. An assignment between two reference variables adds or moves an **arrow**, but never a box. A call that changes an attribute edits the text **inside** an object box, which every arrow to that box can see. A statement such as `a = null;` removes an arrow.

You can see the idea at work in the library classes too. `String` objects and `Scanner` objects live in the same kind of memory as your own objects, and a variable that appears to "contain" a string is really holding an arrow to it. Even `System.out`, which you have used since Topic 1.1, is a reference to an object whose `println` behavior displays text.

When two arrows point to the same box, we say the variables are **aliases** of each other. Aliasing is neither good nor bad in itself. It is what lets a method receive an object and work on the caller's copy (Topic 3.6), and it is also a common source of surprises when a programmer forgets that a second name exists. The guard against surprises is always the same: when you change an object through one variable, ask yourself which other variables might refer to it.

## Worked example 1: Class, object, attribute or behavior?

**Task.** A music app has a class `Playlist`. Classify each item as a class, an object, an attribute or a behavior: (a) `Playlist`; (b) the playlist called "Study Mix" that a user created; (c) the title of a playlist; (d) adding a song to a playlist; (e) the playlist called "Gym" created by another user.

**(a)** `Playlist` is the **class**: the blueprint.

**(b)** "Study Mix" is an **object**: one specific instance of the class, with its own title and songs.

**(c)** The title is an **attribute**: data related to the class, stored in a variable. Each playlist object has its own title.

**(d)** Adding a song is a **behavior**: what an instance can do, defined by a method.

**(e)** "Gym" is another **object** of the same class, a different instance with different attribute values. The two objects share the same behaviors but have different data.

**Reflection.** Declaring `Playlist p;` makes a variable that can refer to a playlist. It is a variable of a reference type, not a playlist itself.

## Worked example 2: Tracing references

**Task.** Using the `Counter` class above, state what the program prints and draw a table of which object each variable refers to.

```java
Counter x = new Counter();
Counter y = new Counter();
Counter z = y;
x.increment();
z.increment();
z.increment();
System.out.println(x.getCount() + " " + y.getCount() + " " + z.getCount());
```

**Step 1, create objects.** `x` refers to a new object (call it object 1, count 0). `y` refers to another new object (object 2, count 0).

**Step 2, copy a reference.** `Counter z = y;` makes `z` refer to **object 2**, the same one `y` refers to. No new object is made.

**Step 3, update the objects.** `x.increment();` raises object 1 to 1. Then `z.increment();` twice raises object 2 to 2.

| After statement | `x` refers to | `y` refers to | `z` refers to | Object 1 count | Object 2 count |
|---|---|---|---|---|---|
| `Counter x = new Counter();` | object 1 | - | - | 0 | - |
| `Counter y = new Counter();` | object 1 | object 2 | - | 0 | 0 |
| `Counter z = y;` | object 1 | object 2 | object 2 | 0 | 0 |
| `x.increment();` | object 1 | object 2 | object 2 | 1 | 0 |
| `z.increment();` (twice) | object 1 | object 2 | object 2 | 1 | 2 |

**Step 4, print.** `x.getCount()` is 1, and `y.getCount()` and `z.getCount()` are both 2, because `y` and `z` are the same object. The output is `1 2 2`.

## Common misconceptions

- **"A class and an object are the same."** A class is the blueprint; an object is one instance built from it.
- **"A reference variable contains the object."** It holds a reference (a memory address); the object lives elsewhere.
- **"`Counter c;` creates a `Counter`."** It only declares a variable that can refer to one.
- **"`b = a` makes a copy of the object."** It copies the reference, so `a` and `b` refer to the same object.
- **"Changing an object through `b` will not affect `a`."** If they refer to the same object, it will.
- **"Primitive variables and reference variables are copied the same way."** Both copy what the variable holds, but a primitive holds a value and a reference variable holds a reference.
- **"I must write subclasses for the exam."** Writing inheritance is outside the course; you need only the vocabulary.
- **"`Object` is a class only advanced programmers use."** Every class is a subclass of it.

## Where this leads

Practise with the [Topic 1.12 practice questions](/advanced-course-resources/computer-science-a/1-12-objects-instances-classes-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/1-12-objects-instances-classes-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/1-12-objects-instances-classes-checklist/). The next topic, [1.13 Object Creation and Storage (Instantiation)](/advanced-course-resources/computer-science-a/1-13-object-creation-storage-study-guide/), explains how an object comes into being, using the keyword `new` and a constructor.
