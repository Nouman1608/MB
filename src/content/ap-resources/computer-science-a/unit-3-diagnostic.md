---
resourceId: "mb-ap-csa-u3-diagnostic"
title: "Class Creation: Unit Diagnostic (Computer Science A Unit 3)"
description: "A 30-minute check with one short question per topic of Unit 3, from abstraction and constructors to scope and this, showing which topics to revisit. Original practice, no predicted score."
course: "computer-science-a"
unit: 3
topics: []
resourceType: "unit-diagnostic"
prerequisites:
  - "You have studied some or all of Topics 3.1 to 3.9"
  - "Java basics from Units 1 and 2"
learningObjectives:
  - "Find out which Unit 3 topics are secure and which need more work"
  - "Practise short questions on class design, constructors, methods, references, static members, scope and this"
  - "Use the answer explanations to see why common wrong answers are tempting"
  - "Choose the study guides to read next"
skills: ["1", "2", "3", "4", "5"]
studyMinutes: 30
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-u3-review", "mb-ap-csa-3.1-study-guide", "mb-ap-csa-3.4-study-guide", "mb-ap-csa-3.6-study-guide", "mb-ap-csa-3.8-study-guide"]
next: "mb-ap-csa-u3-review"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a"]
keyPoints:
  - "Nine short questions: one for each of the nine topics in Unit 3."
  - "Seven are multiple choice; two need a short written answer."
  - "Each answer links to the study guide to read if you missed it."
  - "It shows where to focus. It does not give or predict a score."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Use this diagnostic to find **which Unit 3 topics to revisit**: one question per topic.

These are **original Marlbridge practice questions** with fictional scenarios, not past exam questions. It is not calibrated and gives **no predicted score**.

**How to take it.** Allow 30 minutes; answer everything before opening any answer. No calculator. Assume every code fragment compiles unless a question says otherwise. Every code fragment was compiled and run, and the stated outputs are the real ones.

## Question 1 (multiple choice · 3.1)

The same four lines of code appear in three methods of a class. A programmer moves them into one `private` method with a parameter and calls it from the three places. What is the **best** description of the benefit?

- (A) There is one place to fix or improve the code, and the method's name says what the code does.
- (B) The instance variables become class variables.
- (C) The methods no longer need return types.
- (D) The class no longer needs a constructor.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Procedural abstraction names a process so it can be reused and changed in one place, and a parameter generalises it.

- (B) is unrelated: moving code into a method does not change what kind of variable anything is.
- (C) is false: the three methods keep their return types.
- (D) is false: constructors are unaffected.

**If you missed this:** [3.1 study guide](/advanced-course-resources/computer-science-a/3-1-abstraction-program-design-study-guide/).
</details>

## Question 2 (multiple choice · 3.2)

A fictional method `taxDue` returns the wrong amount for one valid income band but never crashes or shows an error message. Which statement is **best**?

- (A) The method is unreliable, because it does not perform as expected under its stated conditions.
- (B) The method is reliable, because it never crashes.
- (C) The method is reliable, because wrong answers only matter when the program is slow.
- (D) The method is unreliable only if it is open-source code.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Reliability means performing as expected under stated conditions without failure. A wrong result for a valid input is a failure, even when nothing crashes.

- (B) confuses "does not crash" with "correct".
- (C) mixes up speed and correctness.
- (D) is irrelevant: licensing does not decide reliability.

**If you missed this:** [3.2 study guide](/advanced-course-resources/computer-science-a/3-2-impact-program-design-study-guide/).
</details>

## Question 3 (multiple choice · 3.3)

```java
public class Bad
{
    public static void main(String[] args)
    {
        Locker l = new Locker();
        l.code = 5;
    }
}

class Locker
{
    private int code;
}
```

What happens when this is compiled?

- (A) It compiles and sets `code` to 5.
- (B) It does not compile, because `code` has private access in `Locker`.
- (C) It compiles but throws an exception when run.
- (D) It does not compile, because `Locker` has no constructor.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A private instance variable cannot be used from another class. The compiler reports `code has private access in Locker`, which was confirmed by compiling.

- (A) would need `code` to be public.
- (C) imagines a run-time error; this is a compile-time error.
- (D) is false: a class with no constructor still gets a default one.

**If you missed this:** [3.3 study guide](/advanced-course-resources/computer-science-a/3-3-anatomy-class-study-guide/).
</details>

## Question 4 (multiple choice · 3.4)

```java
public class Gadget
{
    private int uses;
    private String name;
    private boolean armed;

    public int getUses() { return uses; }
    public String getName() { return name; }
    public boolean isArmed() { return armed; }
}
```

What is printed by `Gadget g = new Gadget(); System.out.println(g.getUses() + " " + g.getName() + " " + g.isArmed());`?

- (A) `0 "" false`
- (B) `0 null false`
- (C) `0 null true`
- (D) The code does not compile because the class has no constructor.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** With no constructor, Java supplies a default one and the instance variables take default values: 0, `null` and `false`. The compiled program printed `0 null false`.

- (A) treats the default of a `String` as the empty string.
- (C) makes the `boolean` default `true`.
- (D) is false: the default constructor exists.

**If you missed this:** [3.4 study guide](/advanced-course-resources/computer-science-a/3-4-constructors-study-guide/).
</details>

## Question 5 (multiple choice · 3.5)

`Piggy` stores `coins`. `save(int n)` executes `n = n * 2; coins += n;`. `take(int n)` returns `false` and changes nothing if `n > coins`; otherwise it subtracts `n` and returns `true`.

```java
Piggy p = new Piggy(10);
p.save(4);
System.out.println(p.take(30) + " " + p.getCoins());
System.out.println(p.take(15) + " " + p.getCoins());
```

What is printed?

- (A) `false 14` then `true -1`
- (B) `false 18` then `true 3`
- (C) `true 0` then `false 18`
- (D) `false 10` then `true 3`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `save(4)` doubles the local `n` to 8 and adds it: 18 coins. `take(30)` fails (30 > 18) and leaves 18. `take(15)` succeeds and leaves 3. Output: `false 18`, then `true 3`.

- (A) adds 4 instead of 8 and ignores the failed take.
- (C) reverses the outcomes.
- (D) forgets that `save` changed the coins.

**If you missed this:** [3.5 study guide](/advanced-course-resources/computer-science-a/3-5-methods-how-write-them-study-guide/).
</details>

## Question 6 (multiple choice · 3.6)

```java
public class Cup
{
    private int level;
    public Cup(int start) { level = start; }
    public void fill() { level += 2; }
    public int getLevel() { return level; }

    public void top(Cup c)
    {
        c.fill();
        c = new Cup(0);
        c.fill();
    }
}
```

```java
Cup c = new Cup(1);
Cup d = new Cup(4);
c.top(d);
System.out.println(c.getLevel() + " " + d.getLevel());
```

What is printed?

- (A) `1 4`
- (B) `3 6`
- (C) `1 6`
- (D) `1 8`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The parameter refers to the same cup as `d`, so `c.fill()` inside `top` raises `d` from 4 to 6. Then the parameter is reassigned to a new cup, which has no effect on the caller's `d`. The cup called `c` in `main` is not touched: 1. The compiled program printed `1 6`.

- (A) forgets that the method can change the object.
- (B) fills the cup the method was called on instead of the argument.
- (D) assumes the new cup's `fill()` also affects `d`.

**If you missed this:** [3.6 study guide](/advanced-course-resources/computer-science-a/3-6-methods-passing-returning-references-object-study-guide/).
</details>

## Question 7 (short answer · 3.7)

```java
public class Sticker
{
    private static int made = 0;
    private int serial;

    public Sticker()
    {
        made++;
        serial = made * 10;
    }

    public int getSerial() { return serial; }
    public static int getMade() { return made; }
}
```

```java
Sticker s1 = new Sticker();
Sticker s2 = new Sticker();
Sticker s3 = new Sticker();
System.out.println(s1.getSerial() + " " + s2.getSerial() + " " + s3.getSerial() + " " + Sticker.getMade());
```

(a) State the output.

(b) Explain why the three stickers have different serial numbers although the same constructor ran each time.

<details>
<summary>Answer and explanation</summary>

**(a)** `10 20 30 3`.

**(b)** `made` is a class variable, so there is one copy shared by all stickers. Each constructor call increments it before using it, so the three stickers see 1, 2 and 3 and store 10, 20 and 30 in their own instance variable `serial`.

**Suggested Marlbridge rubric (3 marks):** 1 for the correct output; 1 for saying `made` is shared (static); 1 for saying `serial` is separate in each object.

**If you missed this:** [3.7 study guide](/advanced-course-resources/computer-science-a/3-7-class-variables-methods-study-guide/).
</details>

## Question 8 (multiple choice · 3.8)

```java
public class Dial
{
    private int level = 1;

    public void set(int level)
    {
        level = level;
    }

    public int getLevel() { return level; }
}
```

What is printed by `Dial di = new Dial(); di.set(7); System.out.println(di.getLevel());`?

- (A) `7`
- (B) `0`
- (C) `1`
- (D) The code does not compile.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The parameter `level` hides the instance variable, so `level = level;` assigns the parameter to itself. The instance variable stays 1. The compiled program printed `1`.

- (A) is what the programmer intended.
- (B) forgets that the variable was initialised to 1.
- (D) is false: the code compiles with no warning.

**If you missed this:** [3.8 study guide](/advanced-course-resources/computer-science-a/3-8-scope-access-study-guide/).
</details>

## Question 9 (short answer · 3.9)

A `Duo` object has a private `Duo` instance variable `partner` and a method `getPartner()`.

(a) Write a method `pairWith(Duo other)` that makes this object and `other` each other's partner, using `this`.

(b) State the output of the code below.

```java
Duo a = new Duo();
Duo b = new Duo();
a.pairWith(b);
System.out.println((a.getPartner() == b) + " " + (b.getPartner() == a) + " " + (a.getPartner() == a));
```

<details>
<summary>Answer and explanation</summary>

**(a)**

```java
public void pairWith(Duo other)
{
    this.partner = other;
    other.partner = this;
}
```

(The second line is allowed because `other` is a `Duo` and the code is inside `Duo`.)

**(b)** `true true false`. `a`'s partner is `b`; `b`'s partner is the object `this` stood for, which is `a`; and `a`'s partner is not `a`. This was confirmed by running the code.

**Suggested Marlbridge rubric (4 marks):** 1 for `this.partner = other`; 1 for `other.partner = this`; 1 for the first two `true` values; 1 for `false` at the end.

**If you missed this:** [3.9 study guide](/advanced-course-resources/computer-science-a/3-9-this-keyword-study-guide/).
</details>

## What next?

- Missed Question 1 or 2: review [3.1](/advanced-course-resources/computer-science-a/3-1-abstraction-program-design-study-guide/) and [3.2](/advanced-course-resources/computer-science-a/3-2-impact-program-design-study-guide/) (design, abstraction and impact).
- Missed Question 3, 4 or 5: review [3.3](/advanced-course-resources/computer-science-a/3-3-anatomy-class-study-guide/), [3.4](/advanced-course-resources/computer-science-a/3-4-constructors-study-guide/) and [3.5](/advanced-course-resources/computer-science-a/3-5-methods-how-write-them-study-guide/) (class anatomy, constructors and methods).
- Missed Question 6, 7, 8 or 9: review [3.6](/advanced-course-resources/computer-science-a/3-6-methods-passing-returning-references-object-study-guide/), [3.7](/advanced-course-resources/computer-science-a/3-7-class-variables-methods-study-guide/), [3.8](/advanced-course-resources/computer-science-a/3-8-scope-access-study-guide/) and [3.9](/advanced-course-resources/computer-science-a/3-9-this-keyword-study-guide/).
- Secure on all nine? Try the [Unit 3 review](/advanced-course-resources/computer-science-a/unit-3-review/), which combines topics.
