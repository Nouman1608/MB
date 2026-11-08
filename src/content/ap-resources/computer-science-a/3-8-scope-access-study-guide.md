---
resourceId: "mb-ap-csa-3.8-study-guide"
title: "Scope and Access: Study Guide (Computer Science A 3.8)"
description: "Learn where Java variables can be used: local variables and parameters live only in their block, instance and class variables are available across the class, and a local name hides an instance variable of the same name."
course: "computer-science-a"
unit: 3
topics: ["3.8"]
resourceType: "study-guide"
prerequisites:
  - "Writing constructors and methods (Topics 3.4 and 3.5)"
  - "Instance variables and public and private access (Topic 3.3)"
prerequisiteResources: ["mb-ap-csa-3.3-study-guide"]
learningObjectives:
  - "Say where a local variable or parameter can be used, and where it cannot"
  - "Explain that parameters are local variables and cannot be public or private"
  - "Trace code in which a local variable or parameter has the same name as an instance variable"
  - "Find and fix cannot-find-symbol errors caused by scope"
  - "Describe the behaviour of a code segment that hides an instance variable by mistake"
skills: ["3", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-3.8-revision-notes", "mb-ap-csa-3.8-practice", "mb-ap-csa-3.8-checklist"]
next: "mb-ap-csa-3.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a"]
keyPoints:
  - "A local variable is declared in the header or body of a block and can be used only in the block where it is declared."
  - "Constructors and methods are blocks, so their parameters are local variables, usable only inside that constructor or method and never public or private."
  - "If a local variable or parameter has the same name as an instance variable, the name refers to the local variable inside the body."
  - "Writing name = name in a constructor therefore assigns the parameter to itself and leaves the instance variable unchanged."
  - "Instance variables and class variables are in scope throughout their class, subject to public and private access from outside."
faqs:
  - {"question": "What is a block?", "answer": "A block is a section of code enclosed in braces. The body of a method or constructor is a block, and so are the bodies of an if statement, an else, and a loop."}
  - {"question": "Why does the compiler say cannot find symbol?", "answer": "Usually because the variable is used outside the block in which it was declared, or because it was never declared. After a for loop ends, the loop variable declared in its header no longer exists."}
  - {"question": "What if a parameter has the same name as an instance variable?", "answer": "Inside that constructor or method, the name means the parameter, which hides the instance variable. Assigning to it changes only the local copy. Use different names, or the this keyword from Topic 3.9, to reach the instance variable."}
  - {"question": "Can a local variable be private?", "answer": "No. Local variables, including parameters, cannot be declared public or private. Access modifiers apply only to members of a class: its instance variables, class variables, methods and constructors."}
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## Where can a name be used?

Every variable has a region of the program in which its name is meaningful. Outside that region the name does not exist. That region is the variable's **scope**. Scope matters because the same name can mean different things in different places, and because programs that look fine can behave wrongly when a name quietly refers to a different variable from the one you meant.

This topic has two parts: **where variables can be used** and **which variable a name refers to** when more than one has the same name.

## Local variables

**Local variables** are variables declared in the **headers or bodies of blocks** of code. A **block** is a section of code in braces: a method body, a constructor body, an `if`, an `else`, a loop. A local variable can be **accessed only in the block in which it is declared**. As soon as the block ends, the variable no longer exists.

```java
for (int i = 0; i < 3; i++)
{
    int square = i * i;       // i and square exist only inside the loop
}
// here, neither i nor square exists
```

Constructors and methods are blocks of code, so **parameters to constructors or methods are also local variables**. They may be used only within the constructor or method. And because they are not members of the class, local variables, parameters included, **cannot be declared `public` or `private`**.

## Instance variables and class variables

Instance variables and class variables are declared in the class, outside any method. They are in scope throughout the class: any method or constructor of the class can use them. From **outside** the class, `public` and `private` decide whether they can be seen (Topic 3.3).

<figure>
<svg viewBox="0 0 640 310" role="img" aria-labelledby="sc-title sc-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sc-title">Nested scopes in a class: instance variable, parameter, local variables and a block</title>
<desc id="sc-desc">A large outer rectangle is the class Calc and holds the instance variable x. Inside it a medium rectangle is the method calc with parameter y and local variable z. Inside that, a small rectangle is the body of an if statement and holds the local variable w. A note says x is visible everywhere inside the class, y and z are visible throughout the method, and w only inside the if block.</desc>
<rect x="0" y="0" width="640" height="310" fill="#ffffff"/>
<rect x="10" y="10" width="620" height="290" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="24" y="34" font-size="14" font-weight="bold" fill="#1d2b44">class Calc    (instance variable x: in scope everywhere in the class)</text>
<rect x="40" y="52" width="560" height="235" fill="#eef2f8" stroke="#1d2b44" stroke-width="2"/>
<text x="54" y="76" font-size="14" font-weight="bold" fill="#1d2b44">method calc(int y)    (y and z: in scope only in this method)</text>
<text x="54" y="100" font-size="14" fill="#1d2b44">int z = x + y;</text>
<rect x="80" y="116" width="480" height="108" fill="#dbe4f0" stroke="#1d2b44" stroke-width="2"/>
<text x="94" y="140" font-size="14" font-weight="bold" fill="#1d2b44">if (z &gt; 5) block    (w: in scope only inside these braces)</text>
<text x="94" y="166" font-size="14" fill="#1d2b44">int w = z * 2;</text>
<text x="94" y="192" font-size="14" fill="#1d2b44">z = w;    (x, y, z and w are all usable here)</text>
<text x="54" y="250" font-size="14" fill="#1d2b44">return z;    (w no longer exists here; x, y, z do)</text>
<text x="54" y="274" font-size="13" fill="#1d2b44">Inner boxes can see names from the boxes around them, not the other way round.</text>
</svg>
<figcaption>Figure 1. Nested scopes in the class Calc. Each rectangle is labelled with its variables in words, so the diagram does not depend on colour. A name is usable in its own box and in boxes inside it.</figcaption>
</figure>

```java
public class Calc
{
    private int x = 2;

    public int calc(int y)
    {
        int z = x + y;
        if (z > 5)
        {
            int w = z * 2;
            z = w;
        }
        return z;
    }
}
```

With `c = new Calc()`, `c.calc(1)` gives `z = 2 + 1 = 3`; the `if` is skipped, so `w` never exists and the method returns 3. `c.calc(4)` gives `z = 6`; the `if` runs, `w` is 12, `z` is set to 12, and the method returns 12. The compiled program printed `3 12`. Writing `return w;` at the end would not compile, because `w` is out of scope there.

## When two variables share a name

If a **local variable or parameter has the same name as an instance variable**, then inside the body of the constructor or method the name refers to the **local** variable (or parameter). The instance variable is hidden there.

This is the source of a classic bug. Study this class:

```java
public class Pet
{
    private String name;
    private int age;

    public Pet(String name, int age)
    {
        name = name;
        age = age;
    }

    public String describe()
    {
        return name + " " + age;
    }
}
```

```java
Pet p = new Pet("Rex", 4);
System.out.println(p.describe());
```

It compiles, and it prints:

```
null 0
```

Inside the constructor, `name = name;` means "assign the parameter `name` to the parameter `name`". The instance variable `name` is hidden, so it is never set and keeps its default `null`; likewise `age` stays 0. Nothing in the language warns you. The fix is to use different names:

```java
public class PetFixed
{
    private String name;
    private int age;

    public PetFixed(String petName, int petAge)
    {
        name = petName;
        age = petAge;
    }

    public String describe()
    {
        return name + " " + age;
    }
}
```

which prints `Rex 4`. (Topic 3.9 shows a second fix, using `this`, which lets you keep the same name and still reach the instance variable.)

## Worked example 1: a parameter and a local variable that hide an instance variable

**Task.** Trace this class.

```java
public class Scorer
{
    private int total = 0;

    public int bonus(int total)
    {
        total = total + 5;
        return total;
    }

    public int localOnly()
    {
        int total = 100;
        total++;
        return total;
    }

    public void add(int points)
    {
        total += points;
    }

    public int getTotal()
    {
        return total;
    }
}
```

```java
Scorer s = new Scorer();
s.add(7);
System.out.println(s.bonus(20));
System.out.println(s.getTotal());
System.out.println(s.localOnly());
System.out.println(s.getTotal());
```

**Step 1: initial state.** The instance variable `total` is 0.

**Step 2: `s.add(7)`.** The parameter is `points`, so `total += points;` refers to the instance variable. `total` is 7.

**Step 3: `s.bonus(20)`.** Here the parameter is called `total`, so it **hides** the instance variable. The parameter starts at 20; `total = total + 5` makes the **parameter** 25; the method returns 25. The instance variable is untouched.

**Step 4: `s.getTotal()`.** It has no local `total`, so it returns the instance variable: 7.

**Step 5: `s.localOnly()`.** It declares a new local variable `int total = 100;` which hides the instance variable. `total++` makes the local 101, which is returned. The instance variable is untouched.

**Step 6: `s.getTotal()`.** Still 7.

| Statement | Which `total` is used? | Local / parameter `total` | Instance `total` |
|---|---|---|---|
| `add(7)` | instance (no hiding) | none | 7 |
| `bonus(20)` | parameter | 25 | 7 |
| `getTotal()` | instance | none | 7 |
| `localOnly()` | local | 101 | 7 |
| `getTotal()` | instance | none | 7 |

The program printed `25`, `7`, `101`, `7`.

**Check.** If you meant `bonus` to change the object's total, the parameter name is the bug. It must have a different name (and the body must then update the instance variable).

## Worked example 2: finding scope errors

**Task.** This class does not compile. Find each error, say why, and fix it.

```java
public class ScopeErr
{
    private int sum = 0;

    public int first()
    {
        for (int i = 0; i < 3; i++)
        {
            int square = i * i;
            sum += square;
        }
        return i;
    }

    public int second()
    {
        if (sum > 0)
        {
            int doubled = sum * 2;
        }
        return doubled;
    }

    public int third()
    {
        int temp = 4;
        return sum + temp;
    }

    public int fourth()
    {
        return temp;
    }
}
```

**Step 1: `first`.** `i` was declared in the `for` header, so it exists only inside the loop. At `return i;` the compiler reports `cannot find symbol` for `i`. Fix: return `sum`, or declare `int i;` before the loop if the final value is needed.

**Step 2: `second`.** `doubled` is declared inside the `if` block, so `return doubled;` is outside its scope: `cannot find symbol`. Fix: declare `int doubled = 0;` before the `if`, assign inside it, and return afterwards.

**Step 3: `third`.** `temp` is local to `third` and is used inside it: correct. `sum` is an instance variable, available everywhere in the class.

**Step 4: `fourth`.** `temp` was declared in `third`, a different method. Local variables are not shared between methods, so `cannot find symbol`. Fix: declare `temp` in `fourth` or make it an instance variable if it must be shared.

The compiler listed exactly three errors (for `i`, `doubled` and `temp`) and none for `sum`, `square` or the first `temp`. A compact rule: **a name is visible from its declaration to the end of the block that contains it**.

## Common misconceptions

- **"A variable declared in a loop or an if is available after it."** It exists only inside that block.
- **"A variable in one method can be used in another method of the same class."** Only instance and class variables are shared between methods; locals are not.
- **"A parameter can be private."** Parameters are local variables and take no access modifier.
- **"If I write `name = name;` the compiler will know I mean the instance variable."** It assigns the parameter to itself. The compiler accepts it silently, which makes it a hard bug to see.
- **"Giving a local variable the same name as an instance variable changes the instance variable."** It creates a separate variable that hides it for the length of the block.
- **"Scope is the same as private."** Scope is about which block a name belongs to. Access (`public` / `private`) is about which classes may use a class member.

## Where this leads

The `this` keyword in [this Keyword](/advanced-course-resources/computer-science-a/3-9-this-keyword-study-guide/) solves the same-name problem directly. Check this topic with the [practice questions](/advanced-course-resources/computer-science-a/3-8-scope-access-practice/), read the [revision notes](/advanced-course-resources/computer-science-a/3-8-scope-access-revision-notes/) and tick the [topic checklist](/advanced-course-resources/computer-science-a/3-8-scope-access-checklist/). To remind yourself how constructors set instance variables, see [Constructors](/advanced-course-resources/computer-science-a/3-4-constructors-study-guide/).
