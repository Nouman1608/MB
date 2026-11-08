---
resourceId: "mb-ap-csa-1.12-practice"
title: "Objects: Instances of Classes: Practice Questions (Computer Science A 1.12)"
description: "Nine original Marlbridge practice questions on classes and objects, reference variables, aliasing, the difference from primitive copying, and the Object class."
course: "computer-science-a"
unit: 1
topics: ["1.12"]
resourceType: "practice-questions"
prerequisites: ["The Topic 1.12 study guide"]
learningObjectives: ["Distinguish a class from an object and attributes from behaviors", "Explain what a reference variable holds", "Trace code in which two references refer to the same object", "Contrast copying a reference with copying a primitive value"]
skills: ["3", "4"]
studyMinutes: 40
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.12-study-guide", "mb-ap-csa-1.12-revision-notes", "mb-ap-csa-1.12-checklist"]
next: "mb-ap-csa-1.12-checklist"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["Questions 1 to 6 are multiple choice; 7 to 9 need written answers.", "Every answer explains why the wrong options are wrong.", "Rubrics are suggested Marlbridge rubrics, not official scoring."]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. All code is invented for these questions and was compiled and run before publication. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. No calculator is allowed on the exam, so work everything by hand. Code fragments are assumed to be inside a `main` method. The questions use the class `Counter` below; an object of this class stores a count that starts at 0, `increment()` adds 1 to it and `getCount()` returns it.

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

## Question 1 (multiple choice · foundation)

Which statement correctly describes the relationship between a class and an object?

- (A) An object is the blueprint, and a class is one thing built from it
- (B) A class is the blueprint, and an object is a specific instance of it
- (C) A class and an object are two names for the same thing
- (D) A class is stored in a variable and an object is stored in a method

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A class is the formal implementation, or blueprint, of attributes and behaviors. An object is a specific instance of the class with defined attributes.

- (A) reverses the two ideas.
- (C) ignores that many objects can come from one class.
- (D) mixes up variables and methods with classes and objects.
</details>

## Question 2 (multiple choice · foundation)

What does the variable `s` hold after the following statement?

```java
String s = "hello";
```

- (A) A reference to a `String` object
- (B) The five characters h, e, l, l, o stored directly in the variable
- (C) The `int` 5
- (D) A copy of the `String` class

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `String` is a class, so `s` is a reference variable. It holds an object reference, which can be thought of as the memory address of the object.

- (B) describes a primitive variable, which holds its value directly.
- (C) confuses the object with its length.
- (D) confuses the class with an object of the class.
</details>

## Question 3 (multiple choice · core)

Which statement about `Counter c;` is true?

- (A) It creates a `Counter` object whose count is 0
- (B) It declares a variable that holds the `int` 0
- (C) It declares a variable that can hold a reference to a `Counter`, but creates no object
- (D) It does not compile, because an object cannot be declared without `new`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Declaring a reference variable creates the variable only. An object is created when you use `new` with a constructor (Topic 1.13).

- (A) assumes that declaring creates an object.
- (B) confuses a reference variable with a primitive one.
- (D) is wrong: the declaration compiles (the variable simply cannot be used until it has been assigned a value).
</details>

## Question 4 (multiple choice · core)

What is printed by the following code segment?

```java
Counter p = new Counter();
Counter q = p;
q.increment();
q.increment();
System.out.println(p.getCount());
```

- (A) `0`
- (B) `1`
- (C) The code does not compile
- (D) `2`

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** `q = p;` copies the reference, so `p` and `q` refer to the same object. Both increments act on that single object, whose count becomes 2, and `p.getCount()` reports 2.

- (A) assumes that `q` is a separate object, so `p` is unaffected.
- (B) counts only one of the two increments.
- (C) is wrong: the code compiles.
</details>

## Question 5 (multiple choice · core)

Which statement about the `Object` class is true?

- (A) Only classes whose names begin with `Object` extend it
- (B) All classes in Java are subclasses of the `Object` class
- (C) A programmer must write `extends Object` in every class
- (D) The `Object` class is a subclass of `String`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Every class is a subclass of `Object`, directly or through other classes. As a result, every object has `Object`'s methods, such as `equals` and `toString`.

- (A) is wrong: the name of the class has nothing to do with it.
- (C) is wrong: the relationship exists automatically.
- (D) reverses the hierarchy: `String` is a subclass of `Object`.
</details>

## Question 6 (multiple choice · core)

What is printed by the following code segment?

```java
int x = 3;
int y = x;
x = x + 10;
Counter a = new Counter();
Counter b = a;
b.increment();
System.out.println(x + " " + y + " " + a.getCount());
```

- (A) `13 13 1`
- (B) `13 3 0`
- (C) `3 3 1`
- (D) `13 3 1`

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** `y` received a copy of 3, so changing `x` to 13 leaves `y` at 3. `a` and `b` refer to the same `Counter`, so `b.increment()` raises the count seen through `a` to 1.

- (A) treats the primitive copy as if `y` followed `x`.
- (B) treats the reference copy as if `a` were a separate object from `b`.
- (C) ignores the update to `x`.
</details>

## Question 7 (classifying · core)

A school program has a class `Student`. Classify each of the following as a class, an object, an attribute or a behavior, and give one-line reasons.

(a) `Student`
(b) the student called Amira, as stored by the program
(c) a student's date of birth
(d) calculating a student's age
(e) the student called Tariq, as stored by the program

<details>
<summary>Worked solution</summary>

- (a) **Class**: the blueprint that describes every student.
- (b) **Object**: one specific instance of `Student`, with its own data.
- (c) **Attribute**: data related to the class, stored in a variable.
- (d) **Behavior**: something an instance can do, defined by a method.
- (e) **Object**: a different instance of the same class, with different attribute values but the same behaviors.

**Suggested Marlbridge rubric (5 marks):** one mark each for (a) to (e): the correct classification **and** a reason in terms of blueprint, instance, data or method.
</details>

## Question 8 (tracing references · core)

Trace the following code segment.

```java
Counter x = new Counter();
Counter y = new Counter();
Counter z = y;
x.increment();
z.increment();
z.increment();
System.out.println(x.getCount() + " " + y.getCount() + " " + z.getCount());
```

(a) How many `Counter` objects are created?

(b) State the output and explain why `y` and `z` give the same value.

<details>
<summary>Worked solution</summary>

**(a)** Two. `new Counter()` is executed twice. The statement `Counter z = y;` copies a reference and creates no object.

**(b)** The output is `1 2 2`. `x` refers to the first object, which was incremented once. `y` and `z` refer to the **same** second object, which was incremented twice (both times through `z`). Whichever name is used to ask, the answer is that object's count.

**Suggested Marlbridge rubric (4 marks):**

| Mark | Awarded for |
|---|---|
| 1 | Two objects created |
| 1 | `Counter z = y;` identified as copying a reference |
| 1 | Output `1 2 2` |
| 1 | Explanation that `y` and `z` are two names for one object |
</details>

## Question 9 (primitive and reference copying · stretch)

Two code segments are shown.

```java
int m = 7;
int n = m;
m++;
System.out.println(m + " " + n);
```

```java
Counter r = new Counter();
Counter s = r;
r.increment();
System.out.println(r.getCount() + " " + s.getCount());
```

(a) State the output of each.

(b) Explain, in terms of what each variable holds, why the first segment leaves the two values different while the second leaves them the same.

<details>
<summary>Worked solution</summary>

**(a)** The first prints `8 7`. The second prints `1 1`.

**(b)** A primitive variable holds its **value**. `int n = m;` copies the value 7 into `n`, so `n` has its own 7, and `m++` changes only `m`. A reference variable holds an **object reference**. `Counter s = r;` copies the reference, so `r` and `s` refer to the **same** object; incrementing through `r` changes that object, and `s` sees the change.

**Suggested Marlbridge rubric (4 marks):**

| Mark | Awarded for |
|---|---|
| 1 | First output `8 7` |
| 1 | Second output `1 1` |
| 1 | Primitive explanation: the value is copied, so the variables are independent |
| 1 | Reference explanation: the reference is copied, so both refer to one object |
</details>

## How did you do?

- **Questions 1 to 3 and 7:** re-read "Blueprints and the things built from them" in the [study guide](/advanced-course-resources/computer-science-a/1-12-objects-instances-classes-study-guide/).
- **Questions 4, 6, 8 and 9:** draw the diagram: variables on the left, objects on the right, an arrow for each reference.
- **Question 5:** re-read "Class hierarchies and the Object class".

Then try the [checklist](/advanced-course-resources/computer-science-a/1-12-objects-instances-classes-checklist/).
