---
resourceId: "mb-ap-csa-3.1-study-guide"
title: "Abstraction and Program Design: Study Guide (Computer Science A 3.1)"
description: "Learn how abstraction reduces complexity: data abstraction (attributes), procedural abstraction (methods), parameters, decomposition, and how to design a class before coding it."
course: "computer-science-a"
unit: 3
topics: ["3.1"]
resourceType: "study-guide"
prerequisites:
  - "Writing and calling simple Java methods (Unit 1)"
  - "Using objects and calling instance methods (Topics 1.12 to 1.14)"
learningObjectives:
  - "Explain abstraction as hiding irrelevant detail to manage complexity"
  - "Distinguish data abstraction from procedural abstraction and give an example of each"
  - "Identify the attributes and behaviours of a real-world entity and say which are instance variables and which are class variables"
  - "Use method decomposition and parameters to remove duplicated code and generalise a procedure"
  - "Represent a class design in natural language or as a diagram before implementing it"
skills: ["1"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-3.1-revision-notes", "mb-ap-csa-3.1-practice", "mb-ap-csa-3.1-checklist"]
next: "mb-ap-csa-3.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a"]
keyPoints:
  - "Abstraction reduces complexity by hiding details that do not matter to the question at hand."
  - "Data abstraction gives data a name without exposing how it is stored; attributes (instance and class variables) are how a class does this."
  - "Procedural abstraction gives a process a name, so a method can be used knowing only what it does, not how."
  - "Parameters generalise a method so one procedure serves many inputs, and the internals can change without changing callers if the signature and behaviour stay the same."
  - "Design first: list the classes, then each class's attributes and behaviours, in words or as a diagram."
faqs:
  - {"question": "What is the difference between data abstraction and procedural abstraction?", "answer": "Data abstraction names a piece of data and hides how it is represented, as an instance variable or a whole class does. Procedural abstraction names a process and hides how it works, as a method does. A class design usually needs both."}
  - {"question": "Do I have to draw UML diagrams on the exam?", "answer": "No diagram is required by a question unless it is given. The course expects you to be able to describe a design in natural language or in a simple diagram that lists the classes, their attributes and their behaviours. Class-design free-response work is judged on the code you write, but good design thinking comes first."}
  - {"question": "What is the difference between an attribute and a variable?", "answer": "An attribute is a variable declared in a class but outside any method or constructor. It records data about an object (an instance variable) or about the whole class (a class variable). A variable declared inside a method is a local variable, not an attribute."}
  - {"question": "Why do methods call other methods instead of repeating code?", "answer": "A repeated block of code is a repeated chance for a bug, and a repeated block to change. Moving it into one method with parameters gives you one place to fix and a name that says what the block does."}
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Abstraction: keep the main idea, hide the rest

A road map is an abstraction. It leaves out every tree and shop and shows only roads and junctions, because that is what you need when you are deciding how to drive across a city. Hiding the irrelevant detail is not carelessness. It is what lets you think about the whole city at once.

**Abstraction** in programming works the same way. It reduces complexity by focusing on the main idea and hiding the details that are irrelevant to the question at hand. A program with thousands of lines is impossible to hold in your head, but a program built from well-named pieces, each used by its name rather than by its insides, is manageable. Unit 3 is where you stop only *using* other people's classes (as you did with `String` and `Math`) and start *creating* your own. Good design decides which details to hide and which to expose.

There are two kinds of abstraction you must be able to name and tell apart.

## Data abstraction and attributes

**Data abstraction** separates the abstract properties of a data type from the concrete details of how it is represented. It manages complexity by giving data a name without referring to the details of its representation. You do this every day. A `String` is just "some text" to you; whether Java stores it as an array of characters or in some other way is hidden. In your own code, a single variable is data abstraction at its smallest scale, and a whole class is data abstraction at a larger scale, because a class bundles related data under one name.

The data a class holds are its **attributes**. An attribute is a data abstraction defined in a class outside any method or constructor. There are two kinds:

- An **instance variable** is an attribute whose value is unique to each instance (each object) of the class. Two `Screening` objects each have their own `seatsLeft`.
- A **class variable** is an attribute shared by all instances of the class. It is declared with the keyword `static`, and there is exactly one copy no matter how many objects exist.

The attributes of an object at a given moment, together with their values, are its **state**. Instance variables define the state, which gives the object a *has-a* relationship with its data: a `Screening` has a film title, has a number of seats left, has a price.

## Procedural abstraction, decomposition and parameters

**Procedural abstraction** gives a *name* to a process, so that a method can be used knowing only **what** it does, not **how** it does it. When you call `Math.sqrt(x)` you neither know nor care which algorithm computes the square root. That is procedural abstraction.

Writing your own methods does two valuable things.

1. **Method decomposition.** You break a large behaviour of a class into smaller behaviours and create a method for each one. A long method that validates a request, updates the data and builds a message becomes three short methods that each do one job and a tidy method that calls them.
2. **Reuse instead of duplication.** If the same block of code appears twice, you can extract the shared feature into one method. That generalises the functionality instead of copy-pasting it. If the block had a bug, there is now one place to fix.

**Parameters** make this generalisation work. A method with parameters can be reused with a range of input values (the arguments). Compare `double addTenPercent()` that only ever works on one fixed field with `double addTax(double amount)`, which works on any amount you hand it.

Procedural abstraction has a second great benefit: the **internals of a method can change** (to make it faster, more efficient or to use less storage) **without notifying the people who call it**, as long as the method signature and what the method does are preserved. A caller who has written `total = receipt.addTax(a)` does not need to change a thing when you rewrite the inside of `addTax`. This is the practical meaning of "hiding the details".

## Designing a class before you write it

Before you implement a class, spend time designing it: decide what it must *know* (attributes) and what it must *do* (behaviours). Doing this on paper first prevents a common mistake, which is to start typing code and discover halfway through that a needed piece of data has no home. The design can be written in natural language or drawn as a diagram. The usual diagram is a box split into three parts: the class name, its attributes, and its behaviours.

<figure>
<svg viewBox="0 0 640 250" role="img" aria-labelledby="scr-title scr-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="scr-title">Design diagram for a Screening class</title>
<desc id="scr-desc">A box with three stacked sections. The top section holds the class name Screening. The middle section lists three attributes: filmTitle of type String, seatsLeft of type int, and price of type double. The bottom section lists three behaviours: sellTickets taking an int and returning a boolean, getSeatsLeft returning an int, and getPrice returning a double. A label on the left reads data abstraction for the attributes section, and a label on the right reads procedural abstraction for the behaviours section.</desc>
<rect x="0" y="0" width="640" height="250" fill="#ffffff"/>
<rect x="190" y="20" width="260" height="210" fill="#dbe4f0" stroke="#1d2b44" stroke-width="2"/>
<line x1="190" y1="58" x2="450" y2="58" stroke="#1d2b44" stroke-width="2"/>
<line x1="190" y1="140" x2="450" y2="140" stroke="#1d2b44" stroke-width="2"/>
<g fill="#1d2b44" font-size="15" text-anchor="middle"><text x="320" y="46" font-weight="bold" font-size="17">Screening</text></g>
<g fill="#1d2b44" font-size="14"><text x="204" y="82">- filmTitle : String</text><text x="204" y="104">- seatsLeft : int</text><text x="204" y="126">- price : double</text>
<text x="204" y="164">+ sellTickets(int) : boolean</text><text x="204" y="186">+ getSeatsLeft() : int</text><text x="204" y="208">+ getPrice() : double</text></g>
<g fill="#1d2b44" font-size="13" text-anchor="end"><text x="176" y="92">Attributes</text><text x="176" y="108">(data abstraction)</text></g>
<g fill="#1d2b44" font-size="13"><text x="464" y="172">Behaviours</text><text x="464" y="188">(procedural abstraction)</text></g>
<path d="M180 98 H190" stroke="#1d2b44" stroke-width="2"/><path d="M450 180 H460" stroke="#1d2b44" stroke-width="2"/>
</svg>
<figcaption>Figure 1. A three-part design box for a fictional cinema's Screening class. The minus sign means private (hidden) and the plus sign means public (usable from outside); the meaning of these signs is covered in Topic 3.3. The labels, not colour, show which part is data and which is behaviour.</figcaption>
</figure>

The same design in natural language reads: "A `Screening` knows its film title, how many seats are left and the ticket price. It can try to sell a number of tickets, report the seats left and report the price." Either form earns full credit as a *design*; it is the habit of listing **all** the attributes and behaviours that matters.

## Worked example 1: designing a Screening class

**Task.** A small cinema wants a program to manage ticket sales. Each screening shows one film, has a fixed number of seats and one ticket price. A customer can buy several tickets at once, but only if enough seats remain. Design the class.

**Step 1: find the noun that is the object.** The thing the cinema manages is a *screening*, so the class is `Screening`.

**Step 2: list what a screening must know (attributes).** Film title (text), seats left (a whole number that changes), price (a decimal). Each screening has its own values, so all three are **instance variables**. Because outsiders should not be able to set `seatsLeft` to any number they like, they will be private (Topic 3.3).

**Step 3: list what a screening must do (behaviours).** Sell tickets, tell how many seats are left, tell the price. Selling changes the state, so it is a method that changes an instance variable; the other two only report.

**Step 4: decide the signature of the interesting method.** `sellTickets` needs to know how many tickets (an `int` parameter) and should tell the caller whether the sale succeeded (a `boolean` result).

**Step 5: implement to test the design.** The class compiled and run with this code:

```java
class Screening
{
    private String filmTitle;
    private int seatsLeft;
    private double price;

    public Screening(String title, int seats, double ticketPrice)
    {
        filmTitle = title;
        seatsLeft = seats;
        price = ticketPrice;
    }

    public boolean sellTickets(int count)
    {
        if (count > 0 && count <= seatsLeft)
        {
            seatsLeft -= count;
            return true;
        }
        return false;
    }

    public int getSeatsLeft()
    {
        return seatsLeft;
    }

    public double getPrice()
    {
        return price;
    }
}
```

Using it:

```java
Screening s = new Screening("Harbour Lights", 3, 8.5);
System.out.println(s.sellTickets(2) + " " + s.getSeatsLeft());
System.out.println(s.sellTickets(2) + " " + s.getSeatsLeft());
System.out.println(s.sellTickets(1) + " " + s.getSeatsLeft());
```

Output when run:

```
true 1
false 1
true 0
```

**Trace.** The state of the object after each call:

| Call | `count > 0 && count <= seatsLeft`? | `seatsLeft` after | Returned |
|---|---|---|---|
| start | | 3 | |
| `sellTickets(2)` | 2 > 0 and 2 <= 3: true | 1 | `true` |
| `sellTickets(2)` | 2 <= 1 is false | 1 | `false` |
| `sellTickets(1)` | 1 <= 1: true | 0 | `true` |

**Check.** The second sale is refused and the state is unchanged, which is exactly what the written requirement demanded. The design (data in attributes, one process in one method) mapped directly onto the code, which is the point of designing first.

## Worked example 2: decomposition and changing the internals

**Task.** A shop's receipt class adds 20% tax to each of two items. Its first version repeats the calculation. Improve it using procedural abstraction, and explain why callers are unaffected.

**Version 1** (duplicated logic):

```java
class ReceiptBefore
{
    public double totalForTwoItems(double a, double b)
    {
        double first = a + a * 0.2;
        double second = b + b * 0.2;
        return first + second;
    }
}
```

**Version 2** (shared feature extracted into one method with a parameter):

```java
class ReceiptAfter
{
    private double addTax(double amount)
    {
        return amount * 1.2;
    }

    public double totalForTwoItems(double a, double b)
    {
        return addTax(a) + addTax(b);
    }
}
```

Both versions, given `totalForTwoItems(10.0, 5.0)`, print `18.0`.

**Trace of version 2.** `addTax(10.0)` returns `10.0 * 1.2 = 12.0`; `addTax(5.0)` returns `5.0 * 1.2 = 6.0`; the sum is `18.0`.

**Why callers are unaffected.** The public method `totalForTwoItems` has the same signature (`double`, `double` in, `double` out) and does the same thing. The code that calls it cannot tell which version it is using. If the tax later changes to 25%, version 2 has **one** number to edit; version 1 has two, and a programmer who edits only one has created a bug. Because `addTax` is `private`, it is also hidden from outside: it is an implementation detail, not part of what the class promises.

**A second kind of abstraction, in the same file.** The next class shows attributes of both kinds in one place.

```java
class Booth
{
    private static int totalSold = 0;   // class variable: one copy shared by every Booth
    private int soldHere = 0;           // instance variable: one copy per Booth object

    public void sell()
    {
        soldHere++;
        totalSold++;
    }

    public int getSoldHere()
    {
        return soldHere;
    }

    public static int getTotalSold()
    {
        return totalSold;
    }
}
```

If `b1` sells twice and `b2` sells once, `b1.getSoldHere()` is `2`, `b2.getSoldHere()` is `1` and `Booth.getTotalSold()` is `3`. The output of that program line is `2 1 3`. `soldHere` is an instance variable (one per `Booth`), whereas `totalSold` is a class variable (one for all). Notice the class method is called with the class name, `Booth.getTotalSold()`, because it belongs to the class (Topic 3.7).

## Common misconceptions

- **"Abstraction means leaving things out of the program."** No. It means hiding detail from the *user* of a class or method. The detail still exists in the code. Callers just do not have to know it.
- **"A class is only data."** A class bundles attributes (data abstraction) **and** behaviours (procedural abstraction). A design that lists only attributes is incomplete.
- **"Every variable in a class is an attribute."** Only variables declared in the class outside any method or constructor are attributes. A variable declared inside a method is local and disappears when the method ends.
- **"If I change a method's code, I must tell everyone who calls it."** Only if you change the signature or *what the method does*. Changing how it does it is exactly what procedural abstraction is designed to allow.
- **"Static and non-static attributes are the same."** An instance variable is one per object; a class variable is one for the whole class. Mixing them up is a frequent cause of wrong output in a trace question.
- **"Designing first is a waste of time on a short program."** Even a two-minute sketch of attributes and behaviours stops you discovering a missing attribute halfway through your answer to a design question.

## Where this leads

You now have the vocabulary for the rest of Unit 3: attributes (Topic 3.3), constructors that set the initial state (Topic 3.4), methods that implement behaviours (Topic 3.5) and class variables and methods (Topic 3.7). Test yourself with the [practice questions](/advanced-course-resources/computer-science-a/3-1-abstraction-program-design-practice/), review the [revision notes](/advanced-course-resources/computer-science-a/3-1-abstraction-program-design-revision-notes/) and tick off the [topic checklist](/advanced-course-resources/computer-science-a/3-1-abstraction-program-design-checklist/). The next topic, [Impact of Program Design](/advanced-course-resources/computer-science-a/3-2-impact-program-design-study-guide/), asks what happens to people when programs are designed and released.
