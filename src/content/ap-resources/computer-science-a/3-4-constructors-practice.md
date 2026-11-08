---
resourceId: "mb-ap-csa-3.4-practice"
title: "Constructors: Practice Questions (Computer Science A 3.4)"
description: "Nine original Marlbridge practice questions on constructors: initial state, default values, parameters, overloading, reference copying and writing constructors, with rubrics."
course: "computer-science-a"
unit: 3
topics: ["3.4"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csa-3.4-study-guide"]
learningObjectives:
  - "Explain that an object's state is its instance variables and their values at a given time"
  - "Write constructors that initialise every instance variable, with or without parameters"
  - "State the default values of int, double, boolean and reference instance variables, and when Java supplies the default constructor"
  - "Trace what happens in memory when new calls a constructor"
  - "Explain why a constructor should store a copy of a mutable object it is given, and write one that does"
skills: ["2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-3.4-study-guide", "mb-ap-csa-3.4-revision-notes", "mb-ap-csa-3.4-checklist"]
next: "mb-ap-csa-3.4-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. No calculator is allowed. The classes `Player`, `Defaults`, `Seat`, `BookingAlias` and `BookingCopy` are the ones printed in the [study guide](/advanced-course-resources/computer-science-a/3-4-constructors-study-guide/). All code was compiled and run.

## Question 1 (multiple choice · foundation)

What is the main purpose of a constructor?

- (A) To set the initial state of a new object
- (B) To delete an object when it is no longer needed
- (C) To return the value of an instance variable
- (D) To compare two objects of the same class

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** A constructor gives a new object its initial state, which should include initial values for all instance variables.

- (B) Java has no explicit deletion in this course.
- (C) is the job of an accessor method.
- (D) is not what constructors do.
</details>

## Question 2 (multiple choice · foundation)

A class declares `private int count; private double average; private boolean ready; private String label;` and has **no constructor**. Its getters return each value. What is printed by the code below?

```java
Defaults d = new Defaults();
System.out.println(d.getCount() + " " + d.getAverage() + " " + d.isReady() + " " + d.getLabel());
```

- (A) `0 0 false ""`
- (B) `0 0.0 false null`
- (C) `0 0.0 true null`
- (D) The code does not compile because there is no constructor.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Java supplies a default constructor and the instance variables take default values: 0, 0.0, `false` and `null`. The printed line was `0 0.0 false null`.

- (A) uses `0` for a `double` (it prints as `0.0`) and the empty string for a reference type (it is `null`).
- (C) wrongly makes the `boolean` true.
- (D) is false: a class without constructors still compiles and gets a default one.
</details>

## Question 3 (multiple choice · core)

A class `Player` has these two constructors:

```java
public Player(String playerName)
public Player(String playerName, int startingLives)
```

Which statement does **not** compile?

- (A) `Player a = new Player("Asha");`
- (B) `Player b = new Player("Ben", 5);`
- (C) `Player c = new Player();`
- (D) `Player d = new Player("Cy", 2);`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Neither constructor takes no arguments, and because constructors were written, Java does not supply a default one. The compiler reports `no suitable constructor found for Player(no arguments)`.

- (A), (B) and (D) each match a declared constructor by number and type of arguments.
</details>

## Question 4 (multiple choice · core)

With the `Player` class from the study guide (the one-parameter constructor sets `lives` to 3), what is printed?

```java
Player p1 = new Player("Asha");
Player p2 = new Player("Ben", 5);
System.out.println(p1.toLine() + " " + p2.toLine());
```

- (A) `Asha:5 Ben:5`
- (B) `Asha:3 Ben:3`
- (C) `Asha:0 Ben:5`
- (D) `Asha:3 Ben:5`

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The one-parameter constructor sets `lives` to 3. The two-parameter constructor sets it to 5. Output: `Asha:3 Ben:5`.

- (A) copies 5 to both players.
- (B) ignores the argument 5.
- (C) believes the unspecified value stays at the default 0, but the constructor assigns 3.
</details>

## Question 5 (multiple choice · core)

Using `Seat`, `BookingAlias` and `BookingCopy` from the study guide, what is printed?

```java
Seat original = new Seat(4, 12);
BookingAlias a = new BookingAlias(original);
BookingCopy c = new BookingCopy(original);
original.setNumber(99);
System.out.println(a.seatNumber() + " " + c.seatNumber());
```

- (A) `12 12`
- (B) `99 99`
- (C) `12 99`
- (D) `99 12`

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** `BookingAlias` stored the same reference as `original`, so it sees the change (99). `BookingCopy` stored a separate copy, which still has number 12. The program printed `99 12`.

- (A) assumes both constructors copy.
- (B) assumes neither copies.
- (C) swaps the two classes' behaviour.
</details>

## Question 6 (multiple choice · core)

A programmer writes this class and expects `new Cup(250, "red")` to work.

```java
public class Cup
{
    private int millilitres;
    private String colour;

    public void Cup(int ml, String c)
    {
        millilitres = ml;
        colour = c;
    }
}
```

Which statement is correct?

- (A) It works; `void` is optional in a constructor header.
- (B) It does not compile at the call, because `void` makes `Cup` an ordinary method and the class has only the default constructor.
- (C) It compiles, but `millilitres` and `colour` stay at their defaults.
- (D) It does not compile because a constructor cannot have parameters.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A constructor has no return type. With `void`, `Cup` is just a method, and the class has the default no-parameter constructor only, so the call with two arguments fails. (If the code called `new Cup()` it would compile, and the fields would stay at defaults.)

- (A) is false: a return type, including `void`, is not allowed.
- (C) describes `new Cup()`, not the call in the question.
- (D) is false: constructors commonly have parameters.
</details>

## Question 7 (constructed response · core)

Write a class `Ticket` with instance variables `event` (a `String`), `price` (a `double`) and `used` (a `boolean`).

- One constructor takes the event name and the price.
- A second constructor takes only the event name and sets the price to 10.0.
- In both, `used` starts as `false`.
- A method `describe()` returns the event, price and used flag separated by single spaces.

Give the output for `new Ticket("Fair", 12.5).describe()` and `new Ticket("Gala").describe()`.

<details>
<summary>Answer and explanation</summary>

```java
public class Ticket
{
    private String event;
    private double price;
    private boolean used;

    public Ticket(String eventName, double ticketPrice)
    {
        event = eventName;
        price = ticketPrice;
        used = false;
    }

    public Ticket(String eventName)
    {
        event = eventName;
        price = 10.0;
        used = false;
    }

    public String describe()
    {
        return event + " " + price + " " + used;
    }
}
```

Outputs: `Fair 12.5 false` and `Gala 10.0 false`.

**Suggested Marlbridge rubric (6 marks).**

| Mark | Requirement |
|---|---|
| 1 | Three private instance variables with correct types |
| 1 | Two-parameter constructor is public, has no return type and assigns event and price |
| 1 | One-parameter constructor sets the price to 10.0 |
| 1 | Both constructors set `used` to `false` (or rely on its default and say so) |
| 1 | `describe` builds the string with spaces and returns it |
| 1 | The two outputs are correct |
</details>

## Question 8 (constructed response · core)

A class `Roster` is meant to hold a `Seat` given to its constructor, and its code must prevent the original `Seat` from changing the roster's seat later.

```java
public class Roster
{
    private Seat seat;

    public Roster(Seat s)
    {
        seat = s;
    }

    public int seatNumber()
    {
        return seat.getNumber();
    }
}
```

(a) Explain what is wrong with the constructor.

(b) Rewrite the constructor so that it works as intended.

(c) State what `seatNumber()` returns after `Seat x = new Seat(2, 7); Roster r = new Roster(x); x.setNumber(40);` for the corrected class.

<details>
<summary>Answer and explanation</summary>

**(a)** `seat = s;` copies only the reference, so `seat` and the caller's variable refer to the same mutable `Seat`. A later change to the original also changes the roster's seat.

**(b)**

```java
public Roster(Seat s)
{
    seat = new Seat(s.getRow(), s.getNumber());
}
```

**(c)** `7`. The roster holds its own `Seat`, which `x.setNumber(40)` does not change.

**Suggested Marlbridge rubric (4 marks).**

| Mark | Requirement |
|---|---|
| 1 | Part (a): says the reference is copied, so both variables refer to one object |
| 1 | Part (b): creates a new `Seat` in the constructor |
| 1 | Part (b): uses the parameter's row and number to build it |
| 1 | Part (c): 7 |
</details>

## Question 9 (constructed response · stretch)

Describe, in order, what happens when `Player p = new Player("Dee", 4);` executes, and explain why `p` does not hold the object itself.

<details>
<summary>Answer and explanation</summary>

1. Memory is allocated for a new `Player` object.
2. The instance variables take their default values (`name` is `null`, `lives` is 0).
3. The constructor whose parameters match (`String`, `int`) runs, with `playerName` = "Dee" and `startingLives` = 4.
4. It assigns `name` and `lives`, so the state is "Dee" and 4.
5. The reference to the new object is returned and stored in `p`.

`p` holds a **reference** to the object (where it is in memory), not the object itself, so copying `p` into another variable copies the reference and both variables then refer to the same object.

**Suggested Marlbridge rubric (5 marks).**

| Mark | Requirement |
|---|---|
| 1 | Memory is allocated for the object |
| 1 | Defaults set, or the matching constructor is chosen by argument types |
| 1 | The constructor assigns the instance variables from the parameters |
| 1 | The reference is returned and stored in `p` |
| 1 | Explains that a variable holds a reference, not the object |
</details>

## How did you do?

- Questions 1 to 6 right and the rubrics mostly met: move on to the [Methods: How to Write Them study guide](/advanced-course-resources/computer-science-a/3-5-methods-how-write-them-study-guide/).
- Missed Questions 2 or 3: reread "The default constructor and default values" in the [study guide](/advanced-course-resources/computer-science-a/3-4-constructors-study-guide/).
- Missed Questions 4 or 6: reread "Constructor parameters" and the misconceptions list.
- Missed Questions 5 or 8: redo Worked example 2, then tick the [topic checklist](/advanced-course-resources/computer-science-a/3-4-constructors-checklist/).
