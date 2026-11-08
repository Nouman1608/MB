---
resourceId: "mb-ap-csa-3.6-practice"
title: "Methods: Passing and Returning References of an Object: Practice Questions (Computer Science A 3.6)"
description: "Nine original Marlbridge practice questions on passing and returning object references: aliasing, reassigning parameters, returned references and private access, with suggested rubrics."
course: "computer-science-a"
unit: 3
topics: ["3.6"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csa-3.6-study-guide"]
learningObjectives:
  - "Explain that an object argument initialises the parameter with a copy of the reference, not a copy of the object"
  - "Predict whether a method changes the caller's object, and whether reassigning the parameter matters"
  - "Explain that returning an object returns the reference, not a new copy"
  - "Write methods that take and return objects, including ones that must not modify their parameters"
  - "State when a method can access the private data of a parameter"
skills: ["2", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-3.6-study-guide", "mb-ap-csa-3.6-revision-notes", "mb-ap-csa-3.6-checklist"]
next: "mb-ap-csa-3.6-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. No calculator is allowed. The classes `Box`, `Packer` and `Swapper` are printed in the [study guide](/advanced-course-resources/computer-science-a/3-6-methods-passing-returning-references-object-study-guide/). All code was compiled and run.

## Question 1 (multiple choice · foundation)

A method has a parameter of type `Box`. A caller passes the variable `x`, which refers to a `Box`. What is the parameter initialised with?

- (A) A copy of the reference in `x`
- (B) A new independent copy of the `Box`
- (C) The name of the variable `x`
- (D) Nothing; it starts as `null`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The parameter receives a copy of the reference, so it refers to the same object.

- (B) is the common misconception: the object is not copied.
- (C) is meaningless: a parameter holds a value, not a variable name.
- (D) is wrong: the parameter is initialised from the argument.
</details>

## Question 2 (multiple choice · core)

Assume `addTwo(Box b)` calls `b.addItem()` twice and `replace(Box b)` executes `b = new Box(100);`.

```java
Packer p = new Packer();
Box x = new Box(3);
p.addTwo(x);
p.replace(x);
System.out.println(x.getItems());
```

What is printed?

- (A) `3`
- (B) `5`
- (C) `100`
- (D) `103`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `addTwo` changes the shared box from 3 to 5. `replace` only reassigns its parameter, so `x` still refers to the box with 5. The compiled program printed `5`.

- (A) ignores the mutation by `addTwo`.
- (C) assumes `replace` changes the caller's variable.
- (D) adds the new box's 100 to the old count; the two boxes are unrelated.
</details>

## Question 3 (multiple choice · core)

`biggerOf(Box a, Box b)` returns `a` if `a.getItems() >= b.getItems()`, otherwise `b`.

```java
Box s = new Box(4);
Box t = new Box(9);
Box big = p.biggerOf(s, t);
big.addItem();
System.out.println(t.getItems() + " " + s.getItems());
```

What is printed?

- (A) `9 4`
- (B) `10 4`
- (C) `9 5`
- (D) `10 5`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `biggerOf` returns the reference to `t`'s box (9 > 4 so `b` is returned). `big.addItem()` raises that box to 10. `s` is unaffected. The output was `10 4`.

- (A) assumes `big` is a copy.
- (C) and (D) change `s`'s box, which was not returned.
</details>

## Question 4 (multiple choice · core)

```java
Box u = new Box(1);
Box v = u;
v.addItem();
v = new Box(50);
v.addItem();
System.out.println(u.getItems() + " " + v.getItems());
```

What is printed?

- (A) `1 51`
- (B) `2 51`
- (C) `2 2`
- (D) `52 51`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `v = u` makes both refer to one box; `v.addItem()` raises it to 2. Then `v = new Box(50)` points `v` at a new box, which `addItem` raises to 51. `u` still refers to the first box, with 2. The compiled program printed `2 51`.

- (A) misses the first `addItem` through the alias.
- (C) assumes the reassignment of `v` changes `u` too.
- (D) merges the two boxes' counts.
</details>

## Question 5 (multiple choice · core)

Which statement is correct?

```java
public class Box
{
    private int items;
    public boolean sameSizeAs(Box other) { return items == other.items; }
}

public class Audit
{
    public int peek(Box b) { return b.items; }
}
```

- (A) Both classes compile.
- (B) Neither class compiles.
- (C) `Box` compiles, but `Audit` does not, because `items` has private access in `Box`.
- (D) `Audit` compiles, but `Box` does not.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Inside `Box`, a method may use the private data of a parameter whose type is `Box`. In `Audit`, `b.items` is private to `Box`; the compiler reports `items has private access in Box`.

- (A) and (D) forget the private restriction for `Audit`.
- (B) forgets that a class may reach private members of other objects of its own type.
</details>

## Question 6 (multiple choice · core)

A programmer needs a method `combined(Box a, Box b)` that returns a box holding the total of the two boxes' items. Which design follows good practice?

- (A) Add `b`'s items to `a` by calling `a.addItem()` repeatedly, then return `a`.
- (B) Return `new Box(a.getItems() + b.getItems())`.
- (C) Assign `a = new Box(a.getItems() + b.getItems());` and return nothing.
- (D) Return `b` after adding `a`'s items to it.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** It creates a new object and leaves both parameters unchanged, as good practice recommends when the specification does not ask for modification. For boxes of 3 and 4 items it returns a box of 7 while leaving 3 and 4 unchanged (confirmed by running it).

- (A) and (D) modify a parameter's object, which the caller does not expect.
- (C) only reassigns the local parameter and returns nothing, so the caller gets no result.
</details>

## Question 7 (constructed response · core)

Using the class `Box` from the study guide:

(a) Write a method `public Box copyOf(Box a)` that returns a new `Box` with the same number of items as `a`.

(b) State what is printed by the following code and explain the difference from using `Box d = c;`.

```java
Box c = new Box(7);
Box d = copyOf(c);
d.addItem();
System.out.println(c.getItems() + " " + d.getItems());
```

<details>
<summary>Answer and explanation</summary>

**(a)**

```java
public Box copyOf(Box a)
{
    return new Box(a.getItems());
}
```

**(b)** `7 8`. `d` refers to a separate object, so `addItem` changes only `d`'s box. With `Box d = c;` both variables would refer to one box and the output would be `8 8`.

**Suggested Marlbridge rubric (4 marks).**

| Mark | Requirement |
|---|---|
| 1 | Header with return type `Box` and a `Box` parameter |
| 1 | Builds a new `Box` using `a.getItems()` |
| 1 | Output `7 8` |
| 1 | Explains that `d = c` would be an alias, giving `8 8` |
</details>

## Question 8 (constructed response · core)

A student writes a method that is meant to swap two boxes.

```java
public void swap(Box a, Box b)
{
    Box temp = a;
    a = b;
    b = temp;
}
```

The caller runs `Box m = new Box(1); Box n = new Box(2); swap(m, n);`.

(a) State the values of `m.getItems()` and `n.getItems()` afterwards.

(b) Explain why, using the words reference and parameter.

(c) Describe one way to make the caller see a swap of the **contents** of the boxes, and say what extra capability `Box` would need.

<details>
<summary>Answer and explanation</summary>

**(a)** `1` and `2`. The compiled program printed `1 2`.

**(b)** The parameters `a` and `b` are initialised with copies of the references in `m` and `n`. The method swaps only those local references. The caller's `m` and `n` still refer to their original boxes.

**(c)** Change the contents rather than the references: read both counts, then set each box's count to the other's. `Box` would need a mutator that can set the number of items (for example `setItems(int n)`).

**Suggested Marlbridge rubric (5 marks).**

| Mark | Requirement |
|---|---|
| 1 | Part (a): 1 and 2 |
| 1 | Part (b): parameters are copies of the references |
| 1 | Part (b): only the local references are swapped |
| 1 | Part (c): swap contents through mutators rather than references |
| 1 | Part (c): identifies the need for a setter or equivalent |
</details>

## Question 9 (constructed response · stretch)

Explain, with reference to the code below, why `big == t` is `true`.

```java
Box s = new Box(4);
Box t = new Box(9);
Box big = p.biggerOf(s, t);
```

(a) Say what `biggerOf` returns.

(b) Explain what `==` compares for object variables.

(c) Describe one risk of a method returning a reference to a parameter rather than a copy.

<details>
<summary>Answer and explanation</summary>

**(a)** It returns the reference to the box that `t` also refers to, because 4 >= 9 is false so the method returns `b`.

**(b)** For objects, `==` compares references: it is `true` when both variables refer to the very same object. Here `big` and `t` do, so `big == t` is `true` and `big == s` is `false`.

**(c)** The caller's variable and the original are aliases, so changing the returned object changes the original object, which the owner of the original may not expect.

**Suggested Marlbridge rubric (4 marks).**

| Mark | Requirement |
|---|---|
| 1 | Part (a): returns the reference to the box `t` refers to |
| 1 | Part (b): `==` compares references (same object) |
| 1 | Conclusion linking (a) and (b) to `true` |
| 1 | Part (c): a valid risk, such as unintended changes through the alias |
</details>

## How did you do?

- Questions 1 to 6 right and the rubrics mostly met: move on to the [Class Variables and Methods study guide](/advanced-course-resources/computer-science-a/3-7-class-variables-methods-study-guide/).
- Missed Questions 1, 2 or 4: reread "What does a method receive" and Consequences 1 and 2 in the [study guide](/advanced-course-resources/computer-science-a/3-6-methods-passing-returning-references-object-study-guide/).
- Missed Questions 3, 6 or 9: redo Worked example 2.
- Missed Question 5: reread "Consequence 4", then tick the [topic checklist](/advanced-course-resources/computer-science-a/3-6-methods-passing-returning-references-object-checklist/).
