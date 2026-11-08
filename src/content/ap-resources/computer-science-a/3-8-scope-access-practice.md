---
resourceId: "mb-ap-csa-3.8-practice"
title: "Scope and Access: Practice Questions (Computer Science A 3.8)"
description: "Nine original Marlbridge practice questions on variable scope, local variables, parameters that hide instance variables, and cannot-find-symbol errors, with suggested rubrics."
course: "computer-science-a"
unit: 3
topics: ["3.8"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csa-3.8-study-guide"]
learningObjectives:
  - "Say where a local variable or parameter can be used, and where it cannot"
  - "Explain that parameters are local variables and cannot be public or private"
  - "Trace code in which a local variable or parameter has the same name as an instance variable"
  - "Find and fix cannot-find-symbol errors caused by scope"
  - "Describe the behaviour of a code segment that hides an instance variable by mistake"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-3.8-study-guide", "mb-ap-csa-3.8-revision-notes", "mb-ap-csa-3.8-checklist"]
next: "mb-ap-csa-3.8-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a"]
keyPoints:
  - "Questions 1 to 6 are multiple choice; Questions 7 to 9 need written code, a trace or an explanation."
  - "Every answer explains why the wrong options are wrong."
  - "Mark points are a suggested Marlbridge rubric, not an official scoring guideline."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. No calculator is allowed. The classes `Pet`, `Scorer` and `Calc` are the ones printed in the [study guide](/advanced-course-resources/computer-science-a/3-8-scope-access-study-guide/). All code was compiled and run.

## Question 1 (multiple choice · foundation)

A variable is declared inside the braces of an `if` statement. Where can it be used?

- (A) Anywhere in the class
- (B) Anywhere in the method that contains the `if`
- (C) Only inside the block of that `if` statement, after its declaration
- (D) Only in other classes

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** A local variable can be accessed only in the block in which it is declared.

- (A) describes instance variables.
- (B) would apply to a variable declared at the top of the method, not inside the block.
- (D) is not how scope works.
</details>

## Question 2 (multiple choice · foundation)

Which statement about the parameters of a method is true?

- (A) They are local variables that can be used only within the method.
- (B) They are instance variables shared by all methods.
- (C) They may be declared `private` to hide them from other classes.
- (D) They keep their values after the method returns.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Parameters are local variables of the method or constructor.

- (B) is wrong: they are not shared.
- (C) is wrong: local variables cannot be public or private.
- (D) is wrong: they disappear when the method ends.
</details>

## Question 3 (multiple choice · core)

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

What is printed by `System.out.println(new Pet("Rex", 4).describe());`?

- (A) `Rex 4`
- (B) `null 0`
- (C) `Rex 0`
- (D) The code does not compile.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The parameters hide the instance variables, so each assignment copies a parameter to itself. The instance variables keep their defaults, `null` and 0. The compiled program printed `null 0`.

- (A) is what the programmer intended, not what happens.
- (C) wrongly sets one of the two variables.
- (D) is false: the code compiles without a warning.
</details>

## Question 4 (multiple choice · core)

`Scorer` has an instance variable `private int total = 0;`, a method `add(int points)` that does `total += points;`, a method `getTotal()` that returns `total`, and the method below.

```java
public int bonus(int total)
{
    total = total + 5;
    return total;
}
```

What is printed?

```java
Scorer s = new Scorer();
s.add(7);
System.out.println(s.bonus(20) + " " + s.getTotal());
```

- (A) `25 7`
- (B) `25 32`
- (C) `12 12`
- (D) `5 7`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** In `bonus`, the parameter `total` hides the instance variable. The method returns 20 + 5 = 25 and the instance variable stays 7. The compiled program printed `25 7`.

- (B) assumes `bonus` added 25 to the instance variable (7 + 25 = 32).
- (C) mixes up the arguments and instance variable.
- (D) forgets to use the argument 20.
</details>

## Question 5 (multiple choice · core)

```java
public int sumTo(int n)
{
    int total = 0;
    for (int i = 1; i <= n; i++)
    {
        total += i;
    }
    return i;
}
```

What happens when this code is compiled?

- (A) It compiles and returns `n`.
- (B) It compiles and returns the sum.
- (C) It does not compile, because `i` is not in scope at the return statement.
- (D) It does not compile, because `total` is declared before the loop.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `i` is declared in the `for` header, so it exists only in the loop. The compiler reports `cannot find symbol`. (The intended `return total;` would work.)

- (A) and (B) imagine that `i` is still available.
- (D) is wrong: declaring `total` before the loop is correct.
</details>

## Question 6 (multiple choice · core)

`Scorer` also has a method

```java
public int localOnly()
{
    int total = 100;
    total++;
    return total;
}
```

After `Scorer s = new Scorer(); s.add(7);` what is printed by `System.out.println(s.localOnly() + " " + s.getTotal());`?

- (A) `101 101`
- (B) `101 7`
- (C) `8 8`
- (D) `100 7`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The local `total` hides the instance variable. The local is incremented to 101 and returned; the instance variable stays 7. The compiled program printed `101 7`.

- (A) assumes the local variable is the instance variable.
- (C) increments the instance variable instead.
- (D) forgets the `total++`.
</details>

## Question 7 (constructed response · core)

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

(a) For each of `x`, `y`, `z` and `w`, state where in the class it can be used.

(b) State the values returned by `calc(1)` and `calc(4)`, showing the values of `z`.

(c) Explain why adding `return w;` as the last line of the method would not compile.

<details>
<summary>Answer and explanation</summary>

**(a)** `x` (instance variable): anywhere in the class. `y` (parameter): only inside `calc`. `z` (local): inside `calc` from its declaration to the end of the method. `w` (local): only inside the `if` block, from its declaration.

**(b)** `calc(1)`: `z = 2 + 1 = 3`; 3 > 5 is false, so the `if` is skipped; returns 3. `calc(4)`: `z = 2 + 4 = 6`; 6 > 5 is true; `w = 12`; `z = 12`; returns 12. Compiled and run: `3 12`.

**(c)** `w` is declared inside the `if` block and does not exist after its closing brace, so the compiler reports `cannot find symbol`.

**Suggested Marlbridge rubric (6 marks).**

| Mark | Requirement |
|---|---|
| 1 | Part (a): `x` in scope in the whole class |
| 1 | Part (a): `y` and `z` limited to the method |
| 1 | Part (a): `w` limited to the `if` block |
| 1 | Part (b): `calc(1)` is 3 with `z` shown |
| 1 | Part (b): `calc(4)` is 12 with `w` and `z` shown |
| 1 | Part (c): `w` is out of scope after the block |
</details>

## Question 8 (constructed response · core)

A programmer's constructor produces objects whose `name` is always `null`.

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
}
```

(a) Explain exactly why the instance variables are not set.

(b) Rewrite the constructor so that it works, without using any keyword you have not met.

(c) State the values of `name` and `age` for `new Pet("Rex", 4)` before and after your fix.

<details>
<summary>Answer and explanation</summary>

**(a)** In the constructor body, `name` and `age` refer to the parameters, which hide the instance variables of the same names. Each statement assigns a parameter to itself, so the instance variables keep their defaults.

**(b)**

```java
public Pet(String petName, int petAge)
{
    name = petName;
    age = petAge;
}
```

**(c)** Before: `name` is `null` and `age` is 0. After: `name` is "Rex" and `age` is 4. (The unfixed output `null 0` and the fixed output `Rex 4` were confirmed by running both versions.)

**Suggested Marlbridge rubric (4 marks).**

| Mark | Requirement |
|---|---|
| 1 | Part (a): parameters hide the instance variables |
| 1 | Part (a): each statement assigns a parameter to itself |
| 1 | Part (b): different parameter names, with the assignments written correctly |
| 1 | Part (c): correct before and after values |
</details>

## Question 9 (constructed response · stretch)

A programmer writes `localOnly()` as shown in Question 6 and complains that "`getTotal()` still returns 7".

(a) Explain why.

(b) Rewrite `localOnly` so that it adds 94 to the instance variable and returns the new instance value.

(c) Explain what happens to a local variable when its method returns.

<details>
<summary>Answer and explanation</summary>

**(a)** `int total = 100;` declares a new local variable that hides the instance variable. All of `total++` and `return total;` use the local, so the instance variable is never changed.

**(b)**

```java
public int localOnly()
{
    total += 94;
    return total;
}
```

With `total` at 7, this makes it 101 and returns 101. (There is no declaration of a second `total`.)

**(c)** It ceases to exist: a local variable lasts only until the end of its block.

**Suggested Marlbridge rubric (4 marks).**

| Mark | Requirement |
|---|---|
| 1 | Part (a): a local variable hides the instance variable |
| 1 | Part (a): the instance variable is never modified |
| 1 | Part (b): no redeclaration; updates the instance variable and returns it |
| 1 | Part (c): the local ceases to exist when its block ends |
</details>

## How did you do?

- Questions 1 to 6 right and the rubrics mostly met: move on to the [this Keyword study guide](/advanced-course-resources/computer-science-a/3-9-this-keyword-study-guide/).
- Missed Questions 1, 2 or 5: reread "Local variables" in the [study guide](/advanced-course-resources/computer-science-a/3-8-scope-access-study-guide/).
- Missed Questions 3, 4 or 6: reread "When two variables share a name" and Worked example 1.
- Missed the long questions: redo Worked example 2, then tick the [topic checklist](/advanced-course-resources/computer-science-a/3-8-scope-access-checklist/).
