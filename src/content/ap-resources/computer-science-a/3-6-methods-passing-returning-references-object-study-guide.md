---
resourceId: "mb-ap-csa-3.6-study-guide"
title: "Methods: Passing and Returning References of an Object: Study Guide (Computer Science A 3.6)"
description: "Learn what happens when an object is passed to or returned from a Java method: the parameter is a copy of the reference, the object can be changed, reassigning the parameter has no effect, and private access rules."
course: "computer-science-a"
unit: 3
topics: ["3.6"]
resourceType: "study-guide"
prerequisites:
  - "Writing methods and primitive parameters (Topic 3.5)"
  - "Constructors and references to objects (Topic 3.4)"
prerequisiteResources: ["mb-ap-csa-3.5-study-guide"]
learningObjectives:
  - "Explain that an object argument initialises the parameter with a copy of the reference, not a copy of the object"
  - "Predict whether a method changes the caller's object, and whether reassigning the parameter matters"
  - "Explain that returning an object returns the reference, not a new copy"
  - "Write methods that take and return objects, including ones that must not modify their parameters"
  - "State when a method can access the private data of a parameter"
skills: ["2", "4"]
studyMinutes: 40
difficulty: "stretch"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-3.6-revision-notes", "mb-ap-csa-3.6-practice", "mb-ap-csa-3.6-checklist"]
next: "mb-ap-csa-3.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a"]
keyPoints:
  - "An object argument initialises the parameter with a copy of the reference, so the parameter and the argument refer to the same object; no copy of the object is made."
  - "A method can use the reference to change the object's state, and the caller sees the change."
  - "Assigning a new object to the parameter changes only the parameter; the caller's variable still refers to the original object."
  - "When a method returns an object, it returns the reference, not a copy."
  - "A method can access the private data of a parameter only if the parameter is the same type as the method's enclosing class."
faqs:
  - {"question": "Is Java pass by value or pass by reference?", "answer": "Java always passes a copy of the argument's value. For a primitive that value is the number itself. For an object it is the reference, so the parameter refers to the same object as the argument. This is why a method can change an object's state, but cannot change which object the caller's variable refers to."}
  - {"question": "Why can a method change my object if the parameter is only a copy?", "answer": "The copy is of the reference, not of the object. Both references lead to the one object, so calling a mutator through either one changes the single shared object."}
  - {"question": "Should a method modify an object that is passed to it?", "answer": "Only if the specification says it should. It is good practice not to modify mutable objects passed as parameters unless required, because the caller may not expect it."}
  - {"question": "Can one object read another object's private variables?", "answer": "Yes, but only when both are objects of the same class and the code is inside that class, for example a method comparing this object's value with the parameter's value. Code in a different class cannot."}
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## What does a method receive when you pass it an object?

In Topic 3.5 you saw that passing an `int` gives the method a **copy of the number**, so changing the parameter does not touch the caller's variable. What about an object?

A variable that holds an object does not contain the object. It holds a **reference** to it (Topic 3.4). When you pass such a variable as an argument, the same rule applies as before: the parameter is initialised with a **copy of the argument's value**. But the value of an object variable is a *reference*. So the parameter receives a copy of the reference. It does **not** create a new independent copy of the object.

The result: the argument and the parameter are two references to **one** object. Everything that follows comes from that single fact.

## Consequence 1: the method can change the object

If the parameter refers to a **mutable** object, the method can use that reference to alter the object's state. The caller sees the change afterwards, because it is the same object.

```java
public class Box
{
    private int items;

    public Box(int start)
    {
        items = start;
    }

    public void addItem()
    {
        items++;
    }

    public int getItems()
    {
        return items;
    }

    public boolean sameSizeAs(Box other)
    {
        return items == other.items;      // allowed: other is a Box, the enclosing class
    }
}
```

```java
public class Packer
{
    public void addTwo(Box b)
    {
        b.addItem();
        b.addItem();
    }

    public void replace(Box b)
    {
        b = new Box(100);
    }

    public Box biggerOf(Box a, Box b)
    {
        if (a.getItems() >= b.getItems())
        {
            return a;
        }
        return b;
    }
}
```

Consider `addTwo(Box b)`. It calls `b.addItem()` twice through its reference. The caller's variable refers to the same `Box`, so the caller's box has two more items.

## Consequence 2: reassigning the parameter changes nothing for the caller

The parameter `b` is a local variable that holds a reference. In `replace(Box b)`, the statement `b = new Box(100);` makes **that local variable** refer to a brand new object. The caller's variable still holds the original reference and still refers to the original box. Only the parameter was reassigned, and the parameter disappears when the method ends.

<figure>
<svg viewBox="0 0 640 300" role="img" aria-labelledby="rep-title rep-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="rep-title">Reference diagram for replace: the parameter is reassigned, the caller keeps its box</title>
<desc id="rep-desc">Two stages. Stage 1, on entry to replace: the caller variable x and the parameter b both point by arrows to one Box object holding 5 items. Stage 2, after the statement b equals new Box of 100 inside replace: the caller variable x still points to the original Box with 5 items, but the parameter b now points to a different new Box holding 100 items. When replace ends, b disappears and the new Box is no longer reachable, so x still refers to the box with 5 items.</desc>
<rect x="0" y="0" width="640" height="300" fill="#ffffff"/>
<text x="20" y="24" font-size="14" font-weight="bold" fill="#1d2b44">Stage 1: on entry to replace</text>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2"><rect x="20" y="40" width="120" height="30"/><rect x="20" y="80" width="120" height="30"/></g>
<g fill="#dbe4f0" stroke="#1d2b44" stroke-width="2"><rect x="400" y="50" width="200" height="50"/></g>
<g fill="#1d2b44" font-size="14"><text x="30" y="60">x (caller)</text><text x="30" y="100">b (parameter)</text><text x="412" y="80">Box: items = 5</text></g>
<g stroke="#1d2b44" stroke-width="2" fill="none"><path d="M140 55 L400 70"/><path d="M140 95 L400 85"/></g>
<g fill="#1d2b44"><polygon points="400,70 388,63 388,75"/><polygon points="400,85 388,80 389,91"/></g>
<text x="20" y="164" font-size="14" font-weight="bold" fill="#1d2b44">Stage 2: after b = new Box(100);</text>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2"><rect x="20" y="180" width="120" height="30"/><rect x="20" y="230" width="120" height="30"/></g>
<g fill="#dbe4f0" stroke="#1d2b44" stroke-width="2"><rect x="400" y="180" width="200" height="40"/><rect x="400" y="236" width="200" height="40"/></g>
<g fill="#1d2b44" font-size="14"><text x="30" y="200">x (caller)</text><text x="30" y="250">b (parameter)</text><text x="412" y="205">Box: items = 5</text><text x="412" y="261">New Box: items = 100</text></g>
<g stroke="#1d2b44" stroke-width="2" fill="none"><path d="M140 195 L400 200"/><path d="M140 245 L400 256"/></g>
<g fill="#1d2b44"><polygon points="400,200 388,194 388,206"/><polygon points="400,256 389,249 388,261"/></g>
</svg>
<figcaption>Figure 1. Inside <code>replace</code>, reassigning the parameter <code>b</code> redirects only <code>b</code>. The caller's <code>x</code> still refers to the Box that holds 5. Labels, not colour, identify each variable and object.</figcaption>
</figure>

Keep this distinction clear. **Mutating** the object through the parameter (calling a mutator on it) changes the shared object and the caller sees it. **Reassigning** the parameter does not.

It is good programming practice **not to modify mutable objects passed as parameters unless the specification requires it**, because a caller rarely expects its object to be altered by a method that looks like it only reads.

## Consequence 3: returning an object returns the reference

When a return expression evaluates to an object reference, **the reference is returned, not a reference to a new copy of the object**. `biggerOf(Box a, Box b)` above returns whichever of the two boxes it was given. The caller receives a second name for that very object. If it then changes the box, the original is changed. To return an independent object you must build one, as in `return new Box(a.getItems());`.

## Consequence 4: access to private data of a parameter

A method cannot access the private data and methods of a parameter that holds a reference to an object **unless the parameter is the same type as the method's enclosing class**. In `sameSizeAs(Box other)`, the code is inside `Box` and `other` is a `Box`, so `other.items` is allowed. In a different class, writing `b.items` fails to compile with `items has private access in Box`. This is the one situation where private data of another object is visible, and it applies to the class, not to the single object.

## Worked example 1: a method that changes the object and one that reassigns it

**Task.** Predict the output.

```java
Packer p = new Packer();
Box x = new Box(3);
p.addTwo(x);
System.out.println(x.getItems());
p.replace(x);
System.out.println(x.getItems());
```

**Step 1.** `x` refers to Box B1 with 3 items.

**Step 2.** `p.addTwo(x)`: the parameter `b` is initialised with a copy of the reference in `x`, so `b` and `x` refer to B1. `b.addItem()` runs twice on B1: 4, then 5.

**Step 3.** First print: `x.getItems()` is 5.

**Step 4.** `p.replace(x)`: `b` refers to B1 on entry. `b = new Box(100)` creates B2 and makes `b` refer to it. B1 is untouched and `x` still refers to it. The method ends, `b` vanishes.

**Step 5.** Second print: `x.getItems()` is 5.

| Moment | `x` refers to | `b` refers to | B1 items | B2 items |
|---|---|---|---|---|
| after `new Box(3)` | B1 | not yet created | 3 | not created |
| inside `addTwo`, after two calls | B1 | B1 | 5 | not created |
| inside `replace`, on entry | B1 | B1 | 5 | not created |
| inside `replace`, after `b = new Box(100)` | B1 | B2 | 5 | 100 |
| after `replace` returns | B1 | gone | 5 | unreachable |

The program printed `5` and `5`.

**Check.** The same two-step contrast appears in nearly every question in this topic: "did the code call a method on the object, or assign to the parameter?"

## Worked example 2: returned references and aliasing

**Task.** Predict the output and say why.

```java
Box s = new Box(4);
Box t = new Box(9);
Box big = p.biggerOf(s, t);
big.addItem();
System.out.println(t.getItems() + " " + s.getItems());
System.out.println((big == t) + " " + (big == s));
System.out.println(s.sameSizeAs(t));
```

**Step 1.** `s` refers to B1 (4 items) and `t` to B2 (9 items).

**Step 2.** In `biggerOf(s, t)`, the test `a.getItems() >= b.getItems()` is `4 >= 9`, which is false, so the method returns `b`. Because `b` holds a reference to B2, the **reference to B2** is returned. No new object is made.

**Step 3.** `big` now refers to B2. `big.addItem()` raises B2 from 9 to 10, so `t.getItems()` is 10 and `s.getItems()` is still 4. First print: `10 4`.

**Step 4.** `big == t` compares references: both refer to B2, so `true`. `big == s` is `false`. Second print: `true false`.

**Step 5.** `s.sameSizeAs(t)` compares `items` of B1 (4) and B2 (10) using `other.items`, which is allowed inside `Box`. The result is `false`.

The program printed:

```
10 4
true false
false
```

**Check.** If `biggerOf` had returned a copy, `t` would have stayed at 9. Returning a reference means returned object and original are the same object.

**Independent copies and an aliasing trap.** A method that must not disturb its parameters should build a new object, like this:

```java
public class Swapper
{
    public void swap(Box a, Box b)
    {
        Box temp = a;
        a = b;
        b = temp;
    }

    public Box combined(Box a, Box b)
    {
        return new Box(a.getItems() + b.getItems());
    }

    public Box copyOf(Box a)
    {
        return new Box(a.getItems());
    }
}
```

`combined(a, b)` returns a new `Box` with the sum, leaving `a` and `b` alone. `copyOf` returns an independent copy. `swap`, by contrast, achieves nothing for the caller: it swaps only its **local** parameters, so after `swap(m, n)` the caller's `m` and `n` still refer to their original boxes, and `m.getItems() + " " + n.getItems()` still prints `1 2`. For `Box c = sw.combined(a, b)` with 3 and 4 items, `c.getItems()` is 7, and `a` and `b` are still 3 and 4. After `Box d = sw.copyOf(c); d.addItem();`, `c` is 7 and `d` is 8. All of these were compiled and run.

## Common misconceptions

- **"Passing an object copies the object."** Only the reference is copied. There is still one object.
- **"If a method assigns a new object to a parameter, the caller's variable changes."** It does not. The parameter is a local variable.
- **"A method cannot change the caller's object because parameters are copies."** It can, by calling a mutator through the copied reference.
- **"A returned object is a fresh copy."** It is the same object; the caller and the original holder are aliases.
- **"`==` compares the contents of two objects."** For objects, `==` compares references: whether they are the same object.
- **"Private means no other object can read it."** Code inside the same class can read private members of another object of that class.

## Where this leads

Reference behaviour returns in Unit 4: an array or an `ArrayList` of objects holds references, and an enhanced `for` loop variable is a copy of one. Next in Unit 3, [Class Variables and Methods](/advanced-course-resources/computer-science-a/3-7-class-variables-methods-study-guide/) adds `static`. Practise with the [practice questions](/advanced-course-resources/computer-science-a/3-6-methods-passing-returning-references-object-practice/), consult the [revision notes](/advanced-course-resources/computer-science-a/3-6-methods-passing-returning-references-object-revision-notes/) and tick the [topic checklist](/advanced-course-resources/computer-science-a/3-6-methods-passing-returning-references-object-checklist/). To refresh primitives as parameters, see [Methods: How to Write Them](/advanced-course-resources/computer-science-a/3-5-methods-how-write-them-study-guide/).
