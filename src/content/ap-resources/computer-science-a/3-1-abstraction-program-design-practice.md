---
resourceId: "mb-ap-csa-3.1-practice"
title: "Abstraction and Program Design: Practice Questions (Computer Science A 3.1)"
description: "Nine original Marlbridge practice questions on data and procedural abstraction, attributes and behaviours, and designing classes before coding, with suggested rubrics."
course: "computer-science-a"
unit: 3
topics: ["3.1"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csa-3.1-study-guide"]
learningObjectives:
  - "Explain abstraction as hiding irrelevant detail to manage complexity"
  - "Distinguish data abstraction from procedural abstraction and give an example of each"
  - "Identify the attributes and behaviours of a real-world entity and say which are instance variables and which are class variables"
  - "Use method decomposition and parameters to remove duplicated code and generalise a procedure"
  - "Represent a class design in natural language or as a diagram before implementing it"
skills: ["1"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-3.1-study-guide", "mb-ap-csa-3.1-revision-notes", "mb-ap-csa-3.1-checklist"]
next: "mb-ap-csa-3.1-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. No calculator is allowed; assume every code fragment compiles unless a question says otherwise. Try each question before opening its answer.

## Question 1 (multiple choice · foundation)

Which statement best describes **procedural abstraction**?

- (A) Giving a process a name so it can be used knowing only what it does, not how it does it
- (B) Declaring all instance variables of a class `private`
- (C) Writing comments above every line of a method
- (D) Storing several values of the same type in one array

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** A method is a named process; callers rely on what it does and need not know its internals.

- (B) describes a good practice for encapsulation (Topic 3.3), a different idea from abstraction.
- (C) is documentation, which helps humans but is not abstraction.
- (D) describes a data structure (Topic 4.3), an example of data abstraction rather than procedural abstraction.
</details>

## Question 2 (multiple choice · foundation)

A fictional design for a `Thermostat` class lists: current temperature, target temperature, whether the heating is on, a way to raise the target, a way to lower the target, and a way to report the current temperature. Which choice correctly separates the **attributes** from the **behaviours**?

- (A) Attributes: raise the target, lower the target, report the temperature. Behaviours: the three data items.
- (B) Attributes: current temperature, target temperature, heating on or off. Behaviours: raise, lower and report.
- (C) Attributes: all six items, because everything in a class is data.
- (D) Behaviours: all six items, because everything in a class is a method.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Attributes are the data the object knows; behaviours are the things it can do.

- (A) swaps the two lists.
- (C) and (D) ignore the distinction: a class has data (attributes) and methods (behaviours).
</details>

## Question 3 (multiple choice · core)

Consider this class and code segment.

```java
class Booth
{
    private static int totalSold = 0;
    private int soldHere = 0;

    public void sell()
    {
        soldHere++;
        totalSold++;
    }

    public int getSoldHere()
    {
        return soldHere;
    }

    public static int getTotalSold()
    {
        return totalSold;
    }
}
```

```java
Booth b1 = new Booth();
Booth b2 = new Booth();
b1.sell();
b1.sell();
b2.sell();
System.out.println(b1.getSoldHere() + " " + b2.getSoldHere() + " " + Booth.getTotalSold());
```

What is printed?

- (A) `2 1 2`
- (B) `3 3 3`
- (C) `2 1 3`
- (D) `3 1 3`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `soldHere` is an instance variable, so `b1` ends at 2 and `b2` at 1. `totalSold` is a class variable shared by all booths and is incremented on every sale: 2 + 1 = 3. The program prints `2 1 3`.

- (A) treats `totalSold` as if it counted only `b1`'s sales.
- (B) treats both variables as shared.
- (D) adds `b2`'s sale to `b1`'s own count, as if `soldHere` were shared.
</details>

## Question 4 (multiple choice · core)

A programmer rewrites the **body** of the public method `double totalForTwoItems(double a, double b)` so that it runs faster. The header and the value returned for every input are unchanged. Which statement is correct?

- (A) Every class that calls the method must be recompiled with new arguments.
- (B) The callers do not need to change, because the signature and the behaviour are preserved.
- (C) The change is illegal, because a method body may only be edited once.
- (D) The callers must be told, because the method is no longer abstract.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Procedural abstraction lets internals change without notifying users, as long as the signature and what the method does are preserved.

- (A) is wrong: no arguments need to change.
- (C) is false; nothing restricts how often a body is edited.
- (D) misuses the word abstract: a method is still a procedural abstraction after its body changes.
</details>

## Question 5 (multiple choice · core)

Which of the following is the best reason to give a method **parameters** instead of writing a separate method for each value?

- (A) Parameters make a method run faster.
- (B) A method with parameters can be reused with a range of input values.
- (C) Parameters allow a method to return more than one value.
- (D) Parameters make the method's name unnecessary.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Parameters generalise a procedure so one method serves many arguments.

- (A) is not guaranteed; speed is unaffected.
- (C) is false: a non-void method returns a single value.
- (D) is false: the method still needs a name.
</details>

## Question 6 (multiple choice · core)

A design for a `Playlist` class includes the sentence "every `Playlist` object has its own list of songs, and all `Playlist` objects share the number of playlists created". Which declarations best match?

- (A) Both attributes are `static`.
- (B) The songs are an instance variable; the number of playlists is a `static` class variable.
- (C) The songs are a `static` class variable; the number of playlists is an instance variable.
- (D) Neither is an attribute, because both are described in words.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Data unique to each object are instance variables; data shared by all instances form a class variable, declared `static`.

- (A) would make every playlist share one list of songs.
- (C) reverses the roles.
- (D) is wrong: the designs are for attributes, whatever the words used to describe them.
</details>

## Question 7 (constructed response · core)

A fictional library wants software for its loan desk. Each **Book** has a title, an author, a catalogue number and a flag showing whether it is on loan. A book can be borrowed (only if it is not already on loan), returned and asked whether it is available.

(a) Write a design for the `Book` class as a list of attributes (with types) and behaviours (with signatures).

(b) State which of the attributes should be instance variables and justify it in one sentence.

(c) The library also wants to know how many `Book` objects have ever been created. Describe the attribute you would add and say what kind it is.

<details>
<summary>Answer and explanation</summary>

**(a)** Attributes: `String title`, `String author`, `int catalogueNumber`, `boolean onLoan`. Behaviours: `boolean borrowBook()` (sets `onLoan` to true and returns true only if it was false), `void returnBook()`, `boolean isAvailable()`. Equivalent signatures are accepted.

**(b)** All four are instance variables, because every book has its own title, author, number and loan status.

**(c)** Add an `int` named, for example, `booksCreated`. It must be a class variable (`static`), shared by all books and incremented in the constructor.

**Suggested Marlbridge rubric (6 marks).**

| Mark | Requirement |
|---|---|
| 1 | The four attributes are present with sensible types, including `boolean` for the loan status |
| 1 | At least three behaviours are listed with plausible signatures |
| 1 | The borrowing behaviour reports success or failure (a `boolean` result) or otherwise handles an already-on-loan book |
| 1 | Part (b): says the attributes are instance variables because each object has its own values |
| 1 | Part (c): adds a count attribute |
| 1 | Part (c): identifies it as a class variable (`static`) because it is shared |
</details>

## Question 8 (constructed response · core)

The class below works but repeats a calculation.

```java
class Quiz
{
    public String summary(int right1, int total1, int right2, int total2)
    {
        int p1 = right1 * 100 / total1;
        int p2 = right2 * 100 / total2;
        return p1 + "% and " + p2 + "%";
    }
}
```

(a) Rewrite the class so that the percentage calculation is written only once, in a `private` helper method.

(b) State what `summary(7, 8, 3, 4)` returns, showing the two helper results.

(c) Explain why programs that call `summary` do not need to change.

<details>
<summary>Answer and explanation</summary>

**(a)**

```java
class Quiz
{
    private int percent(int right, int total)
    {
        return right * 100 / total;
    }

    public String summary(int right1, int total1, int right2, int total2)
    {
        return percent(right1, total1) + "% and " + percent(right2, total2) + "%";
    }
}
```

**(b)** `percent(7, 8)` is 700 / 8, which is 87 (integer division discards the 0.5); `percent(3, 4)` is 300 / 4 = 75. The method returns `"87% and 75%"`. This was checked by compiling and running both versions.

**(c)** The public method keeps the same signature and the same behaviour, so callers cannot tell the helper exists. Only the internals changed.

**Suggested Marlbridge rubric (5 marks).**

| Mark | Requirement |
|---|---|
| 1 | A helper method with `int` parameters for the right count and the total, returning `int` |
| 1 | The helper holds the single copy of `right * 100 / total` |
| 1 | `summary` calls the helper twice and still returns a `String` in the same format |
| 1 | Part (b): 87 and 75 with the result `"87% and 75%"` |
| 1 | Part (c): same signature and behaviour, so callers do not change |
</details>

## Question 9 (constructed response · stretch)

A designer says: "Our `Account` class uses procedural abstraction but no data abstraction, because everything is done by methods." Their class has the instance variable `private double balance;` and the methods `deposit(double amount)` and `getBalance()`.

(a) Explain why the designer is wrong, naming the data abstraction.

(b) Explain, with reference to `deposit`, how procedural abstraction benefits someone writing a program that uses `Account`.

(c) Give one change to the *inside* of `deposit` that would not require any caller to change.

<details>
<summary>Answer and explanation</summary>

**(a)** `balance` is an attribute, which is a data abstraction: the class gives the data a name (`balance`) and callers work with it through the methods without knowing how it is stored.

**(b)** A caller only needs to know that `deposit` adds an amount to the account. They do not need to know how the balance is updated, so they can write `acct.deposit(50.0);` without understanding the internals.

**(c)** For example, adding a check that ignores a negative amount, or storing the balance in whole pence internally while still accepting a `double` and returning the same results. Any change that keeps the signature and what the method does is acceptable.

**Suggested Marlbridge rubric (4 marks).**

| Mark | Requirement |
|---|---|
| 1 | Identifies `balance` as an attribute or data abstraction |
| 1 | Explains that data are named without callers knowing the representation |
| 1 | Part (b): callers use `deposit` knowing what it does, not how |
| 1 | Part (c): a plausible internal change that preserves the signature and behaviour |
</details>

## How did you do?

- Questions 1 to 6 right and the rubrics mostly met: move on to the [Impact of Program Design study guide](/advanced-course-resources/computer-science-a/3-2-impact-program-design-study-guide/).
- Missed Questions 1, 4 or 5: reread the "Procedural abstraction, decomposition and parameters" section of the [study guide](/advanced-course-resources/computer-science-a/3-1-abstraction-program-design-study-guide/).
- Missed Questions 2, 3 or 6: reread "Data abstraction and attributes".
- Missed the design questions: redo Worked example 1, then tick the [topic checklist](/advanced-course-resources/computer-science-a/3-1-abstraction-program-design-checklist/).
