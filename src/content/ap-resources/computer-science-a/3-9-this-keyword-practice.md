---
resourceId: "mb-ap-csa-3.9-practice"
title: "this Keyword: Practice Questions (Computer Science A 3.9)"
description: "Nine original Marlbridge practice questions on this: disambiguating variables, passing this as an argument, comparing objects with this, and static-context errors, with suggested rubrics."
course: "computer-science-a"
unit: 3
topics: ["3.9"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csa-3.9-study-guide"]
learningObjectives:
  - "Explain that this holds a reference to the object whose method or constructor is running"
  - "Use this.name = name to initialise an instance variable that a parameter hides"
  - "Pass the current object to another method by writing this as an argument"
  - "Write and trace expressions that compare this object with another"
  - "Explain why class methods have no this reference"
skills: ["2"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-3.9-study-guide", "mb-ap-csa-3.9-revision-notes", "mb-ap-csa-3.9-checklist"]
next: "mb-ap-csa-3.9-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a"]
keyPoints:
  - "Questions 1 to 6 are multiple choice; Questions 7 to 9 need written code, a trace or an explanation."
  - "Every answer explains why the wrong options are wrong."
  - "Mark points are a suggested Marlbridge rubric, not an official scoring guideline."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. No calculator is allowed. The classes `Pet`, `Player`, `Team` and `Chain` are printed in the [study guide](/advanced-course-resources/computer-science-a/3-9-this-keyword-study-guide/). All code was compiled and run.

## Question 1 (multiple choice · foundation)

Inside an instance method, what does the keyword `this` hold?

- (A) The name of the class
- (B) A reference to the current object
- (C) The value of the first parameter
- (D) A reference to the class's first object ever created

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `this` is a reference to the object whose method or constructor is running.

- (A) is not a value `this` holds.
- (C) is unrelated to parameters.
- (D) is wrong: `this` refers to the current object, whichever it is.
</details>

## Question 2 (multiple choice · foundation)

A constructor is `public Pet(String name, int age)`. Which statement correctly stores the parameter `name` in the instance variable `name`?

- (A) `name = name;`
- (B) `this.name = name;`
- (C) `name = this.name;`
- (D) `this = name;`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `this.name` is the instance variable and `name` alone is the parameter; assignment copies right to left.

- (A) assigns the parameter to itself.
- (C) copies the instance variable into the parameter, the wrong direction.
- (D) does not compile: `this` cannot be assigned.
</details>

## Question 3 (multiple choice · core)

Using the `Pet` class from the study guide (the constructor uses `this.name = name;`), what is printed?

```java
Pet a = new Pet("Rex", 4);
Pet b = new Pet("Tia", 7);
Pet c = a;
System.out.println(a.sameObjectAs(c) + " " + a.sameObjectAs(b));
```

where `sameObjectAs(Pet other)` returns `this == other`.

- (A) `true true`
- (B) `false false`
- (C) `true false`
- (D) `false true`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `c` is another name for the same object as `a`, so `this == other` is `true`. `b` is a different object, so it is `false`. The compiled program printed `true false`.

- (A) treats two different objects as the same.
- (B) forgets that `c` is an alias of `a`.
- (D) reverses the results.
</details>

## Question 4 (multiple choice · core)

`olderThan(Pet other)` returns `this.age > other.age`. Assume `Pet a = new Pet("Rex", 4); Pet b = new Pet("Tia", 7);`. What is printed by `System.out.println(a.olderThan(b) + " " + b.olderThan(a));`?

- (A) `true false`
- (B) `false true`
- (C) `true true`
- (D) `false false`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** In `a.olderThan(b)`, `this` is `a` (age 4): `4 > 7` is false. In `b.olderThan(a)`, `this` is `b` (age 7): `7 > 4` is true. The program printed `false true`.

- (A) reads the ages the wrong way round.
- (C) and (D) forget that `this` changes with the object before the dot.
</details>

## Question 5 (multiple choice · core)

```java
public class Bad
{
    private int value = 3;

    public static int twice()
    {
        return this.value * 2;
    }
}
```

What happens when this class is compiled?

- (A) It compiles and `twice()` returns 6.
- (B) It compiles but throws an exception when `twice()` is called.
- (C) It does not compile, because a class method has no `this` reference.
- (D) It does not compile, because `value` is private.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Class methods have no `this`. The compiler reports `non-static variable this cannot be referenced from a static context`.

- (A) and (B) assume the code compiles.
- (D) is wrong: the method is inside the class, so private access is not the problem.
</details>

## Question 6 (multiple choice · core)

```java
Team team = new Team();
Player p = new Player("Maya");
p.becomeCaptainOf(team);
System.out.println(team.getCaptain() == p);
```

where `becomeCaptainOf(Team t)` contains `t.setCaptain(this);` and `setCaptain` stores its parameter in the instance variable `captain`. What is printed?

- (A) `true`
- (B) `false`
- (C) `null`
- (D) Nothing: the code does not compile.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `this` inside `becomeCaptainOf` is the same object as `p`. The team stores that reference, so `getCaptain()` returns the object that `p` refers to, and `==` is `true`. The compiled program printed `true`.

- (B) would need the team to store a copy.
- (C) is not a possible output of `==`.
- (D) is wrong: the code compiles.
</details>

## Question 7 (constructed response · core)

Write a class `Badge` with instance variables `owner` (a `String`) and `level` (an `int`).

(a) Write a constructor `Badge(String owner, int level)` that uses `this` so that the parameters and instance variables keep the same names.

(b) Write a method `boolean outranks(Badge other)` that returns whether this badge's level is greater than the other badge's level.

(c) State the output of `new Badge("Ola", 5).outranks(new Badge("Sam", 3))`.

<details>
<summary>Answer and explanation</summary>

```java
public class Badge
{
    private String owner;
    private int level;

    public Badge(String owner, int level)
    {
        this.owner = owner;
        this.level = level;
    }

    public boolean outranks(Badge other)
    {
        return this.level > other.level;
    }
}
```

**(c)** `true`, because 5 > 3.

**Suggested Marlbridge rubric (5 marks).**

| Mark | Requirement |
|---|---|
| 1 | Two private instance variables with the right types |
| 1 | Public constructor with no return type and parameters with the same names |
| 1 | `this.owner = owner;` and `this.level = level;` in the correct direction |
| 1 | `outranks` is a public `boolean` method comparing the levels |
| 1 | Part (c): `true` |
</details>

## Question 8 (constructed response · core)

A `Chain` class has the method

```java
public Chain add(int n)
{
    total += n;
    return this;
}
```

and `getTotal()` returns `total` (initially 0).

(a) State the output of the code below.

```java
Chain c = new Chain();
Chain d = c.add(2).add(3);
System.out.println(c.getTotal() + " " + d.getTotal() + " " + (c == d));
```

(b) Explain why `c == d` has that value.

(c) Explain what `this` refers to in the second call to `add`.

<details>
<summary>Answer and explanation</summary>

**(a)** `5 5 true`. This was confirmed by running the code.

**(b)** `add` returns `this`, a reference to the object it was called on. Both calls therefore act on the same object, and `d` is assigned a reference to that object, so `c` and `d` refer to the same object.

**(c)** The object returned by the first call, which is the same object as `c`.

**Suggested Marlbridge rubric (4 marks).**

| Mark | Requirement |
|---|---|
| 1 | Part (a): `5 5 true` |
| 1 | Part (b): `add` returns a reference to the current object |
| 1 | Part (b): `c` and `d` are aliases of one object |
| 1 | Part (c): `this` is the object returned by the first call (the same object as `c`) |
</details>

## Question 9 (constructed response · stretch)

A programmer writes this constructor and finds that every `Pet` has `name` equal to `null`.

```java
public Pet(String name, int age)
{
    name = name;
    this.age = age;
}
```

(a) Explain what is wrong and say which instance variable is set correctly.

(b) Fix it using `this`.

(c) Explain what `this` refers to when the constructor runs for `new Pet("Rex", 4)`.

<details>
<summary>Answer and explanation</summary>

**(a)** `name = name;` assigns the parameter to itself because the parameter hides the instance variable, so the instance variable `name` keeps its default `null`. `this.age = age;` is correct, so `age` is set to 4.

**(b)** Change the first line to `this.name = name;`.

**(c)** The new `Pet` object that is being constructed.

**Suggested Marlbridge rubric (4 marks).**

| Mark | Requirement |
|---|---|
| 1 | Part (a): the parameter hides the instance variable, so it is assigned to itself |
| 1 | Part (a): `age` is set correctly (it already uses `this`) |
| 1 | Part (b): `this.name = name;` |
| 1 | Part (c): the object under construction |
</details>

## How did you do?

- Questions 1 to 6 right and the rubrics mostly met: Unit 3 is complete. Try the [Unit 3 diagnostic](/advanced-course-resources/computer-science-a/unit-3-diagnostic/), then the [Ethical and Social Issues Around Data Collection study guide](/advanced-course-resources/computer-science-a/4-1-ethical-social-issues-data-collection-study-guide/).
- Missed Questions 1 or 2: reread Use 1 in the [study guide](/advanced-course-resources/computer-science-a/3-9-this-keyword-study-guide/).
- Missed Questions 3, 4 or 6: redo Worked examples 1 and 2.
- Missed Question 5: reread "The restriction: class methods have no this", then tick the [topic checklist](/advanced-course-resources/computer-science-a/3-9-this-keyword-checklist/).
