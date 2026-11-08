---
resourceId: "mb-ap-csa-3.3-practice"
title: "Anatomy of a Class: Practice Questions (Computer Science A 3.3)"
description: "Nine original Marlbridge practice questions on the anatomy of a Java class, access with public and private, encapsulation and writing a class from a specification, with rubrics."
course: "computer-science-a"
unit: 3
topics: ["3.3"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csa-3.3-study-guide"]
learningObjectives:
  - "Name the parts of a class: header, instance variables, constructors and methods"
  - "Use public and private correctly for classes, instance variables, constructors and methods"
  - "Explain encapsulation and how private data with public methods protects an object"
  - "Read a class and say which code can and cannot access each member"
  - "Write a complete class from a written specification"
skills: ["1", "2"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-3.3-study-guide", "mb-ap-csa-3.3-revision-notes", "mb-ap-csa-3.3-checklist"]
next: "mb-ap-csa-3.3-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. No calculator is allowed. Assume code fragments compile unless a question says otherwise. The `Parcel` class used in several questions is the one in the [study guide](/advanced-course-resources/computer-science-a/3-3-anatomy-class-study-guide/).

## Question 1 (multiple choice · foundation)

In this course, which declaration pattern is expected for a class with ordinary instance variables, a constructor and methods?

- (A) A `private` class, `public` instance variables, `private` constructors
- (B) A `public` class, `private` instance variables, `public` constructors
- (C) A `public` class, `public` instance variables, `private` constructors
- (D) A `private` class, `private` instance variables, `public` constructors

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Classes and constructors are always public, and instance variables are private unless the specification says otherwise.

- (A) has three of the four choices backwards.
- (C) would expose the data and hide the constructors, so other classes could not create objects.
- (D) makes the class itself private, which is not how classes are declared in this course.
</details>

## Question 2 (multiple choice · foundation)

What does the keyword `private` do when it appears before an instance variable?

- (A) It prevents the variable from ever changing.
- (B) It restricts access to code inside the declaring class.
- (C) It makes one shared copy of the variable for all objects.
- (D) It allows only the constructor to read the variable.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Private restricts access to the declaring class.

- (A) describes `final`, not `private`.
- (C) describes `static`.
- (D) is wrong: every method in the class can use a private instance variable, not only the constructor.
</details>

## Question 3 (multiple choice · core)

A class `Parcel` declares `private double weightKg;`. Another class contains this code.

```java
Parcel p = new Parcel(3.0, "Bath");
p.weightKg = 30.0;
```

What happens?

- (A) The program compiles and sets the weight to 30.0.
- (B) The program compiles, but throws an exception when it runs.
- (C) The program does not compile, because `weightKg` has private access in `Parcel`.
- (D) The program compiles and ignores the assignment.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** A private member cannot be used by a different class. The compiler reports `weightKg has private access in Parcel`, which was confirmed by compiling.

- (A) would be true only if the variable were public.
- (B) and (D) imagine run-time behaviour; the error occurs before the program runs.
</details>

## Question 4 (multiple choice · core)

Consider the `Parcel` class from the study guide and this code segment.

```java
Parcel a = new Parcel(25.5, "Leeds");
Parcel b = new Parcel(3.0, "Bath");
a.markDelivered();
System.out.println(a.describe() + " " + b.isHeavy());
```

What is printed?

- (A) `Leeds (on the way) false`
- (B) `Leeds (delivered) true`
- (C) `Leeds (delivered) false`
- (D) `Bath (on the way) false`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `markDelivered` changes only `a`, so `a.describe()` is `"Leeds (delivered)"`. `b.isHeavy()` tests `3.0 > 20.0`, which is `false`. The output was `Leeds (delivered) false`.

- (A) ignores the call to `markDelivered`.
- (B) uses `a.isHeavy()`'s value (true) instead of `b`'s.
- (D) prints `b`'s description although the code calls `a.describe()`.
</details>

## Question 5 (multiple choice · core)

A `Scoreboard` object `sb` has just been constructed (both scores 0). Its `addHome` and `addAway` methods ignore any argument that is not positive, and `leader` returns `"home"`, `"away"` or `"tied"`.

```java
sb.addHome(3);
sb.addAway(5);
sb.addAway(-2);
sb.addHome(2);
System.out.println(sb.leader());
```

What is printed?

- (A) `home`
- (B) `away`
- (C) `tied`
- (D) Nothing: the program does not compile.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Home becomes 3, then 5. Away becomes 5 and then the `-2` is ignored, so away stays 5. The scores are equal, so `leader` returns `"tied"`. Running the class printed `tied`.

- (A) forgets that `addHome(2)` raised home only to 5, level with away.
- (B) stops after `addAway(5)` (home 3, away 5) and forgets that `addHome(2)` follows.
- (D) is wrong: the code compiles.
</details>

## Question 6 (multiple choice · core)

A class `Scoreboard` has a method `private boolean isValid(int points)`. Which statement is true?

- (A) Any class may call `isValid` through a `Scoreboard` object.
- (B) Only methods and constructors inside `Scoreboard` may call `isValid`.
- (C) `isValid` can only be called by the constructor.
- (D) `isValid` cannot be called at all.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A private method can be accessed only from inside its class, which includes every method and constructor of that class.

- (A) describes a public method.
- (C) is too narrow: any method in the class may call it.
- (D) is wrong: helper methods exist to be called from inside the class.
</details>

## Question 7 (constructed response · core)

Write a complete class `LibraryCard` from this specification.

- It stores the owner's name (a `String`) and the number of books currently out (an `int`).
- The constructor takes the owner's name and starts with 0 books out.
- `borrow()` allows a book only if fewer than 5 are out. If allowed, it adds one and returns `true`; otherwise it returns `false`.
- `getBooksOut()` returns the number of books out.

<details>
<summary>Answer and explanation</summary>

```java
public class LibraryCard
{
    private String ownerName;
    private int booksOut;

    public LibraryCard(String name)
    {
        ownerName = name;
        booksOut = 0;
    }

    public boolean borrow()
    {
        if (booksOut < 5)
        {
            booksOut++;
            return true;
        }
        return false;
    }

    public int getBooksOut()
    {
        return booksOut;
    }
}
```

Compiled and tested: with a loop that calls `borrow()` seven times on a new card, five calls return `true` and `getBooksOut()` is 5.

**Suggested Marlbridge rubric (7 marks).**

| Mark | Requirement |
|---|---|
| 1 | Header `public class LibraryCard` |
| 1 | Both instance variables declared `private` with the right types |
| 1 | Constructor is `public`, named `LibraryCard`, has no return type and takes the name |
| 1 | Constructor assigns the name and sets books out to 0 |
| 1 | `borrow` tests that fewer than 5 books are out |
| 1 | `borrow` increments the count and returns `true`, otherwise returns `false` |
| 1 | `getBooksOut` is public and returns the count |
</details>

## Question 8 (constructed response · core)

A student wrote this class.

```java
public class Cup
{
    public int millilitres;
    private String colour;

    public void Cup(int ml, String c)
    {
        millilitres = ml;
        colour = c;
    }

    public String getColour()
    {
        return colour;
    }
}
```

(a) A different class contains `Cup c = new Cup(250, "red");`. Explain why this does not compile.

(b) Identify a second problem that breaks the principle of encapsulation.

(c) Rewrite the class so that both problems are fixed.

<details>
<summary>Answer and explanation</summary>

**(a)** `public void Cup(int ml, String c)` has a return type (`void`), so it is an ordinary method, not a constructor. The class therefore has only the default no-parameter constructor, and `new Cup(250, "red")` does not match it. The compiler reports that the constructor cannot be applied to the given types (required: no arguments; found: int, String).

**(b)** `millilitres` is `public`, so any class can change it directly. It should be `private`.

**(c)**

```java
public class Cup
{
    private int millilitres;
    private String colour;

    public Cup(int ml, String c)
    {
        millilitres = ml;
        colour = c;
    }

    public String getColour()
    {
        return colour;
    }
}
```

An accessor for `millilitres` could be added if the specification needs one.

**Suggested Marlbridge rubric (5 marks).**

| Mark | Requirement |
|---|---|
| 1 | Part (a): identifies `void` as the cause |
| 1 | Part (a): says the result is a method and the class has only the default constructor |
| 1 | Part (b): identifies the public instance variable |
| 1 | Part (c): constructor has no return type |
| 1 | Part (c): `millilitres` is private |
</details>

## Question 9 (constructed response · stretch)

A developer wants the weight of a `Parcel` never to be negative.

(a) Explain why making `weightKg` private helps.

(b) Write a public method `setWeightKg(double w)` for `Parcel` that changes the weight only if `w` is positive.

(c) Explain how this shows encapsulation.

<details>
<summary>Answer and explanation</summary>

**(a)** Outside code cannot assign to a private variable, so every change must go through the class's own methods, where the check can be made.

**(b)**

```java
public void setWeightKg(double w)
{
    if (w > 0)
    {
        weightKg = w;
    }
}
```

**(c)** The class hides how the weight is stored and controls every change to it through a public method. Other classes depend only on the method, so the class can enforce its own rules.

**Suggested Marlbridge rubric (4 marks).**

| Mark | Requirement |
|---|---|
| 1 | Part (a): private prevents direct assignment from other classes |
| 1 | Part (b): public `void` method with a `double` parameter |
| 1 | Part (b): assigns only when `w > 0` |
| 1 | Part (c): links hidden data and a controlled public method to encapsulation |
</details>

## How did you do?

- Questions 1 to 6 right and the rubrics mostly met: move on to the [Constructors study guide](/advanced-course-resources/computer-science-a/3-4-constructors-study-guide/).
- Missed Questions 1, 2 or 6: reread "Access: public and private" in the [study guide](/advanced-course-resources/computer-science-a/3-3-anatomy-class-study-guide/).
- Missed Questions 3, 4 or 5: redo Worked example 1 and "What the compiler enforces".
- Missed the writing questions: redo Worked example 2, then tick the [topic checklist](/advanced-course-resources/computer-science-a/3-3-anatomy-class-checklist/).
