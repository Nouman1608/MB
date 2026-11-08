---
resourceId: "mb-ap-csa-u3-review"
title: "Class Creation: Unit Review (Computer Science A Unit 3)"
description: "Unit 3 recap and seven mixed practice questions that combine class design, constructors, methods, references, static members, scope and this, with full answers and suggested rubrics."
course: "computer-science-a"
unit: 3
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have studied Topics 3.1 to 3.9 or tried the Unit 3 diagnostic"
learningObjectives:
  - "Pull the ideas of Unit 3 together in one summary and one method table"
  - "Answer questions that combine two or more Unit 3 topics"
  - "Write a complete class from a specification, using static, this, constructors and methods"
  - "Explain a method's reliability by choosing tests with a variety of conditions"
skills: ["1", "2", "3", "4", "5"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-u3-diagnostic", "mb-ap-csa-3.3-study-guide", "mb-ap-csa-3.6-study-guide", "mb-ap-csa-3.7-study-guide", "mb-ap-csa-3.9-study-guide"]
next: "mb-ap-csa-4.1-study-guide"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a"]
keyPoints:
  - "A class bundles attributes (data abstraction) and methods (procedural abstraction); designing it first, in words or a diagram, saves rework."
  - "Instance variables are per object and private; class variables are shared and static; local variables and parameters live only in their block and can hide an instance variable."
  - "An object argument is a copy of a reference: a method can change the object but cannot change which object the caller's variable refers to."
  - "Constructors set the initial state; this names the current object and fixes parameter-versus-instance-variable name clashes."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

Read the big ideas and the method table, then try the seven questions without notes; each combines two or more topics of Unit 3.

These are **original Marlbridge practice questions**, not past exam questions, with fictional scenarios. The rubrics are a **suggested Marlbridge rubric**, not official scoring. No calculator is allowed. Every code fragment was compiled and run, and the stated outputs are the real ones.

## Big ideas of the unit

- **Abstraction manages complexity.** A class gives data a name (attributes) and processes a name (methods); parameters generalise a method, and its internals can change if its signature and behaviour do not ([3.1](/advanced-course-resources/computer-science-a/3-1-abstraction-program-design-study-guide/)).
- **Programs affect people.** Reliability means performing as expected under stated conditions; programs can have beneficial, harmful and unintended effects; reused code carries legal conditions ([3.2](/advanced-course-resources/computer-science-a/3-2-impact-program-design-study-guide/)).
- **A class has a header, private instance variables, public constructors and methods.** `private` hides, `public` exposes, and each object has its own copy of each instance variable ([3.3](/advanced-course-resources/computer-science-a/3-3-anatomy-class-study-guide/)).
- **Constructors set the initial state.** With no constructor Java supplies a no-argument one and defaults 0, 0.0, `false`, `null`; a mutable parameter should be copied ([3.4](/advanced-course-resources/computer-science-a/3-4-constructors-study-guide/)).
- **Methods are behaviours.** A non-void method returns one value; `return` ends the method; primitive parameters are copies ([3.5](/advanced-course-resources/computer-science-a/3-5-methods-how-write-them-study-guide/)).
- **Object parameters are copies of references.** A method can change the object, not the caller's variable; returned objects are the same objects ([3.6](/advanced-course-resources/computer-science-a/3-6-methods-passing-returning-references-object-study-guide/)).
- **`static` means one per class.** Class methods cannot use instance variables without an instance; `final` means unchangeable ([3.7](/advanced-course-resources/computer-science-a/3-7-class-variables-methods-study-guide/)).
- **Scope controls names.** Locals and parameters exist only in their block and can hide instance variables ([3.8](/advanced-course-resources/computer-science-a/3-8-scope-access-study-guide/)); `this` is the current object ([3.9](/advanced-course-resources/computer-science-a/3-9-this-keyword-study-guide/)).

## Key relationships and methods

| Situation | Rule | Example |
|---|---|---|
| Object created | Constructor runs, reference returned | `Voucher v = new Voucher(20);` |
| No constructor written | Default constructor; fields 0, 0.0, `false`, `null` | `0 null false` |
| Primitive argument | Parameter is a copy | `n = n * 2;` leaves the caller's `n` alone |
| Object argument | Parameter is a copy of the reference | `g.add(n)` changes the caller's object |
| Parameter reassigned | Affects only the parameter | `g = new Gauge(100);` |
| Class variable | One copy, `static` | `private static int total;` |
| Class method | No instance variables without an instance | `Member.getTotal()` |
| Same name as an instance variable | Local or parameter hides it | `on = on;` assigns the parameter to itself |
| `this` | The current object | `this.on = on;` |
| Private access | Class code may use private members of its own type | `other.partner = this;` inside `Duo` |

## Question 1 (multiple choice · mixed)

```java
public class Lamp
{
    private boolean on;
    private int watts;

    public Lamp(boolean on, int watts)
    {
        on = on;
        this.watts = watts;
    }

    public boolean isOn() { return on; }
    public int getWatts() { return watts; }
}
```

What is printed by `Lamp l = new Lamp(true, 40); System.out.println(l.isOn() + " " + l.getWatts());`?

- (A) `true 40`
- (B) `false 40`
- (C) `true 0`
- (D) `false 0`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** In the constructor, `on = on;` assigns the parameter to itself because the parameter hides the instance variable, so the instance variable keeps its default `false`. `this.watts = watts;` correctly sets `watts` to 40. The compiled program printed `false 40`.

- (A) is the intended result, which needs `this.on = on;`.
- (C) and (D) wrongly make `watts` 0, as if neither assignment worked.

Topics: 3.3, 3.8, 3.9.
</details>

## Question 2 (multiple choice · mixed)

```java
public class Gauge
{
    private int reading;
    public Gauge(int start) { reading = start; }
    public void add(int n) { reading += n; }
    public int getReading() { return reading; }
}

public class Mixer
{
    public int run(Gauge g, int n)
    {
        g.add(n);
        n = n * 2;
        g = new Gauge(100);
        g.add(n);
        return g.getReading();
    }
}
```

```java
Gauge gg = new Gauge(5);
Mixer mx = new Mixer();
int n = 3;
int r = mx.run(gg, n);
System.out.println(r + " " + gg.getReading() + " " + n);
```

What is printed?

- (A) `106 8 3`
- (B) `106 108 6`
- (C) `106 5 3`
- (D) `8 8 6`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `g.add(n)` changes the caller's gauge from 5 to 8, because `g` is a copy of the reference. `n = n * 2` changes only the copy of the primitive: the caller's `n` stays 3. `g = new Gauge(100)` redirects only the parameter; the new gauge becomes 100 + 6 = 106, which is returned. So `r` is 106, `gg` reads 8 and `n` is 3. The compiled program printed `106 8 3`.

- (B) treats the new gauge as the caller's and the primitive as changed.
- (C) forgets that `g.add(n)` changed the caller's gauge.
- (D) loses track of which gauge the 106 came from, and changes `n`.

Topics: 3.5, 3.6.
</details>

## Question 3 (multiple choice · mixed)

```java
public class Member
{
    private static int total = 0;
    private int id;

    public Member()
    {
        total++;
        id = total;
    }

    public int getId() { return id; }
    public static int getTotal() { return total; }
}
```

```java
Member m1 = new Member();
Member m2 = new Member();
Member m3 = new Member();
System.out.println(m1.getId() + " " + m3.getId() + " " + Member.getTotal());
```

What is printed?

- (A) `1 1 3`
- (B) `3 3 3`
- (C) `1 3 3`
- (D) `1 3 1`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `total` is shared, and each constructor increments it and copies the result into the object's own `id`: 1, 2, 3. `Member.getTotal()` is 3. The compiled program printed `1 3 3`.

- (A) treats `id` as if it were shared with the class's starting value.
- (B) treats `id` as shared, so every member would see the final total.
- (D) reads the total as if it were per object.

Topics: 3.4, 3.7.
</details>

## Question 4 (multiple choice · mixed)

```java
public class Flag
{
    private int colour;
    public Flag(int c) { colour = c; }
    public void setColour(int c) { colour = c; }
    public int getColour() { return colour; }
}

public class Banner
{
    private Flag flag;
    public Banner(Flag f) { flag = f; }
    public int shown() { return flag.getColour(); }
}
```

```java
Flag f = new Flag(1);
Banner bn = new Banner(f);
f.setColour(9);
System.out.println(bn.shown());
```

What is printed, and what change would make `bn.shown()` stay 1?

- (A) `1`; no change is needed.
- (B) `9`; the `Banner` constructor should store a copy: `flag = new Flag(f.getColour());`
- (C) `9`; `Flag` should be declared `static`.
- (D) `1`; the `Flag` constructor should be declared `private`.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The constructor stores the reference it was given, so `f` and the banner's `flag` refer to one `Flag`; `setColour(9)` is seen through both. The compiled program printed `9`. Storing a copy of a mutable parameter, `flag = new Flag(f.getColour());`, keeps the banner's own flag at 1.

- (A) assumes a copy was made.
- (C) misapplies `static`, which would make one colour shared by all flags.
- (D) is wrong on both counts: it prints 9, and making a constructor private would stop other classes creating flags at all.

Topics: 3.4, 3.6.
</details>

## Question 5 (multiple choice · mixed)

A designer writes: "Our `Account` class keeps a `balance` and gives the rest of the program `deposit` and `withdraw` methods. We can rewrite how the balance is stored next year without changing any code that calls those methods." Which two Unit 3 ideas does this describe?

- (A) Data abstraction hiding the representation, and procedural abstraction preserving the signature and behaviour
- (B) Class variables and the `this` keyword
- (C) Default constructors and unintended effects
- (D) Scope and open-source licensing

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Keeping `balance` private behind methods hides the representation (data abstraction), and methods whose signatures and behaviour stay fixed let their internals change without notifying callers (procedural abstraction).

- (B), (C) and (D) name real topics but not the ones the statement is about.

Topics: 3.1, 3.3.
</details>

## Question 6 (constructed response · mixed)

A cafe issues vouchers. Write a complete class `Voucher` from this specification.

- Each voucher has a value in pounds (an `int`), a code and a flag for whether it has been redeemed.
- The first voucher issued gets code 1001, the second 1002, and so on; the class can report how many vouchers have been issued.
- The constructor takes the value.
- `redeem(int bill)` returns the amount still to pay. If the voucher has already been redeemed, it returns `bill` unchanged. Otherwise it marks the voucher redeemed, then returns 0 if the value covers the bill, or `bill - value` if not.
- `worthMoreThan(Voucher other)` returns whether this voucher's value is greater than the other's.
- `getCode()` and `isRedeemed()` return the code and flag.

Then state the output of:

```java
Voucher v1 = new Voucher(20);
Voucher v2 = new Voucher(50);
System.out.println(v1.getCode() + " " + v2.getCode() + " " + Voucher.getIssued());
System.out.println(v1.redeem(35) + " " + v1.redeem(35) + " " + v2.redeem(35) + " " + v2.isRedeemed());
System.out.println(v2.worthMoreThan(v1) + " " + v1.worthMoreThan(v2));
```

<details>
<summary>Answer and explanation</summary>

```java
public class Voucher
{
    private static int issued = 0;
    private int value;
    private int code;
    private boolean redeemed;

    public Voucher(int value)
    {
        this.value = value;
        issued++;
        code = 1000 + issued;
        redeemed = false;
    }

    public int redeem(int bill)
    {
        if (redeemed)
        {
            return bill;
        }
        redeemed = true;
        if (value >= bill)
        {
            return 0;
        }
        return bill - value;
    }

    public int getCode() { return code; }

    public boolean isRedeemed() { return redeemed; }

    public static int getIssued() { return issued; }

    public boolean worthMoreThan(Voucher other)
    {
        return this.value > other.value;
    }
}
```

**Output.** First line: `1001 1002 2`. Second line: `v1.redeem(35)` is the first redemption: 20 does not cover 35, so it returns 15; the second `v1.redeem(35)` returns 35 because the voucher is already redeemed; `v2.redeem(35)` returns 0 because 50 covers 35; `v2.isRedeemed()` is `true`. So `15 35 0 true`. Third line: `true false`. This was compiled and run.

**Suggested Marlbridge rubric (9 marks).**

| Mark | Requirement |
|---|---|
| 1 | `public class Voucher` with private instance variables for value, code and redeemed |
| 1 | A `private static int` counter initialised to 0 |
| 1 | Public constructor with no return type; `this.value = value` (or different parameter names) sets the value |
| 1 | Constructor increments the counter and sets the code to 1000 plus the counter |
| 1 | `redeem` returns `bill` unchanged if already redeemed |
| 1 | `redeem` marks the voucher redeemed and returns 0 or `bill - value` correctly |
| 1 | `getIssued` is `public static` and returns the counter; `getCode` and `isRedeemed` are public accessors |
| 1 | `worthMoreThan` compares `this.value` with `other.value` |
| 1 | The three lines of output are correct |
</details>

## Question 7 (constructed response · mixed)

A savings app uses this method to say how many whole months are needed to reach a goal when saving a fixed amount each month. The stated conditions are that `goal` is 0 or more and `perMonth` is greater than 0.

```java
public static int monthsToSave(int goal, int perMonth)
{
    return (goal + perMonth - 1) / perMonth;
}
```

(a) Give four test calls that form a variety of conditions within the stated conditions, with the value each returns.

(b) Give one call that is **within** the stated conditions and returns a wrong value, and explain why.

(c) Describe one social or ethical impact of a savings app that gives users wrong answers.

<details>
<summary>Answer and explanation</summary>

**(a)** For example: `monthsToSave(100, 30)` returns 4 (129 ÷ 30); `monthsToSave(0, 30)` returns 0 (a boundary: goal already met); `monthsToSave(90, 30)` returns 3 (an exact multiple); `monthsToSave(1, 30)` returns 1 (the smallest positive goal). All four were confirmed by running the code.

**(b)** `monthsToSave(2000000000, 2000000000)`. The correct answer is 1, but `2000000000 + 2000000000 - 1` is 3,999,999,999, which is more than `Integer.MAX_VALUE`, so the `int` overflows to −294,967,297. Dividing by 2,000,000,000 gives 0, so the method returns 0. The method is therefore not reliable for extreme valid inputs.

**(c)** Users might believe they will reach a goal sooner than they will, for example deciding not to save more; the harm falls on the people who trust the app. (Any specific, reasoned harm to a named group is acceptable.)

**Suggested Marlbridge rubric (6 marks).**

| Mark | Requirement |
|---|---|
| 1 | Part (a): four tests inside the stated conditions |
| 1 | Part (a): includes at least one boundary (such as a goal of 0) |
| 1 | Part (a): all four returned values correct |
| 1 | Part (b): a valid failing call, such as both arguments 2000000000 |
| 1 | Part (b): explanation of `int` overflow in the sum |
| 1 | Part (c): a specific harm to a named group with a reason |
</details>

## How did you do?

- Mostly secure: move on to the [Unit 4 study guides](/advanced-course-resources/computer-science-a/4-1-ethical-social-issues-data-collection-study-guide/), starting with Ethical and Social Issues Around Data Collection.
- Missed Questions 1 or 5: reread [3.8](/advanced-course-resources/computer-science-a/3-8-scope-access-study-guide/), [3.9](/advanced-course-resources/computer-science-a/3-9-this-keyword-study-guide/) and [3.1](/advanced-course-resources/computer-science-a/3-1-abstraction-program-design-study-guide/).
- Missed Questions 2, 3 or 4: reread [3.5](/advanced-course-resources/computer-science-a/3-5-methods-how-write-them-study-guide/), [3.6](/advanced-course-resources/computer-science-a/3-6-methods-passing-returning-references-object-study-guide/), [3.7](/advanced-course-resources/computer-science-a/3-7-class-variables-methods-study-guide/) and [3.4](/advanced-course-resources/computer-science-a/3-4-constructors-study-guide/).
- Missed Questions 6 or 7: rewrite a class from a specification, then see [3.2](/advanced-course-resources/computer-science-a/3-2-impact-program-design-study-guide/) and the [Unit 3 diagnostic](/advanced-course-resources/computer-science-a/unit-3-diagnostic/).
