---
title: "AQA A-Level Computer Science (7517): Abstraction and automation -- Practice Questions"
seoTitle: "AQA A-Level CS Abstraction Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Theory of computation"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 4.1
syllabusTopics:
  - qualification: "a-level"
    topic: "theory-of-computation-7517"
  - qualification: "a-level"
    topic: "theory-of-computation-7517"
    subtopic: "abstraction-and-automation-7517"
description: "Original AQA 7517 section 4.4.1 questions with answers: algorithms and tracing, the forms of abstraction, decomposition, composition and automation."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs, because examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Abstraction and automation study guide](/resources/aqa-a-level-computer-science-7517-abstraction-and-automation/) | [Abstraction and automation revision notes](/resources/aqa-a-level-computer-science-7517-abstraction-and-automation-revision-notes/)

---

## Section A

**1.** State what is meant by an algorithm. **[2]**

**2.** Name the four standard constructs used to express an algorithm in pseudocode. **[2]**

**3.** State what is meant by representational abstraction. **[1]**

**4.** State the difference between decomposition and composition. **[2]**

**5.** State what is hidden from the user in information hiding. **[1]**

## Section B

**6.** Study this algorithm.

```
a ← 45
b ← 18
WHILE a <> b
    IF a > b THEN
        a ← a - b
    ELSE
        b ← b - a
    ENDIF
ENDWHILE
OUTPUT a
```

**(a)** Complete a trace table showing the values of `a` and `b` at the start of each iteration, and state the output. **[4]**
**(b)** State what the algorithm calculates. **[1]**
**(c)** Show that the algorithm does not terminate if the starting values are a = 0 and b = 5. **[2]**

**7.** A car park charges nothing if a vehicle is under 5 metres long and has been parked for 20 minutes or less, or if it displays a blue badge. Otherwise it charges.

**(a)** Write a Boolean condition, using the variables `length`, `minutes` and `badge`, which is True when the vehicle is not charged. **[3]**
**(b)** Give three test cases which together check the condition, stating the expected result for each. **[3]**

**8.** A programmer writes a procedure `DrawSquare(side)` to replace several pieces of code that each draw a square of a fixed size.

**(a)** Name the type of abstraction used and explain what has been abstracted away. **[2]**
**(b)** Explain how this differs from functional abstraction. **[2]**

**9.** A stack is implemented as an array and a pointer to the top item. The programmer later changes the implementation to a linked list. Explain how data abstraction means that the rest of the program does not need to change. **[3]**

**10.** A map of a city's tram network shows only the stops and the routes between them, in straight lines. Name the type of abstraction and state two details that have been removed. **[3]**

**11.** A programmer is asked to find the second-largest value in a list. They sort the list into descending order and take the second item. Name this approach to problem-solving and explain it. **[2]**

**12.** A program for managing a school library will let a librarian add books, record loans and print overdue reminders.

**(a)** Describe how procedural decomposition could be applied to this program. **[3]**
**(b)** Give two benefits of decomposing the program. **[2]**

**13.** Explain, using an example, what is meant by abstraction by generalisation or categorisation. **[3]**

**14.** Describe the four steps involved in automation, using the example of a program that predicts bus arrival times. **[4]**

---

## Answers

**1.** A sequence of steps [1] that can be followed to complete a task and that always terminates [1].

**2.** Sequence, assignment, selection and iteration [2]. (One mark if two or three are correct.)

**3.** A representation arrived at by removing unnecessary details [1].

**4.** Decomposition breaks a problem into smaller sub-problems [1]; composition combines procedures or data objects into compound procedures or compound data [1].

**5.** Details of an object that do not contribute to its essential characteristics (how it works inside) [1].

**6. (a)**

| Iteration | a at start | b at start | Action |
|---|---|---|---|
| 1 | 45 | 18 | a ← 27 |
| 2 | 27 | 18 | a ← 9 |
| 3 | 9 | 18 | b ← 9 |

Rows 1 to 3 correct [3]; output 9 (a and b are both 9 so the loop ends) [1].
**(b)** The highest common factor (greatest common divisor) of the two numbers [1].
**(c)** With a = 0 and b = 5, a is not equal to b and a is less than b, so b ← 5 − 0 = 5 [1]; the values never change, so a <> b is always true and the loop never ends [1].

**7. (a)** `(length < 5 AND minutes <= 20) OR badge` [3]. (One mark for `length < 5`, one mark for `minutes <= 20` joined by AND, one mark for OR with `badge`.)
**(b)** Any three suitable cases with correct results, for example: length 4, minutes 15, no badge gives True [1]; length 6, minutes 15, no badge gives False [1]; length 6, minutes 90, badge gives True [1]. Further good cases are length 5, minutes 20 (False, boundary of the length test) and length 4, minutes 21 (False, boundary of the time test).

**8. (a)** Procedural abstraction [1]; the particular value (the actual side length) has been abstracted away and replaced by a parameter, leaving the method of drawing a square [1].
**(b)** In procedural abstraction the method is kept and only the actual values are removed [1]; in functional abstraction the method of computation itself is hidden, so that the caller knows only what the function returns [1].

**9.** Data abstraction hides how the stack is stored [1]; the rest of the program uses the stack only through operations such as Push and Pop [1]; so as long as the new implementation provides the same operations with the same behaviour, the code that calls them need not be changed [1].

**10.** Representational abstraction [1]; any two of: real distances between stops; the actual shape or direction of the routes; roads, buildings and the geography [2]. (Maximum 3.)

**11.** Problem abstraction (or reduction) [1]; the problem is reduced to one that has already been solved, namely sorting, so an existing sorting algorithm can be used [1].

**12. (a)** Break the program into sub-problems, each an identifiable task [1]; for example, adding a book, recording a loan, finding overdue loans and printing a reminder [1]; and subdivide any of these further, such as splitting "record a loan" into checking the book is available, finding the member and storing the loan [1].
**(b)** Any two: each subroutine can be written and tested separately; the work can be shared between programmers; subroutines can be reused; the program is easier to understand and maintain [2].

**13.** Grouping things by common characteristics [1] to create a hierarchy of the "is a kind of" type [1]; for example, a car and a lorry are each a kind of vehicle, so shared properties such as speed and number of wheels belong to the general class Vehicle [1].

**14.** Create algorithms, for example one to find the quickest route between two stops [1]; implement the algorithms in program code in a programming language [1]; implement the model in data structures, for example a graph of stops and journey times held as an adjacency list [1]; execute the code on a computer so that predictions are produced automatically [1].

---

## Where marks are usually lost

- Defining an algorithm without "always terminates".
- Confusing procedural and functional abstraction.
- Naming the type of abstraction without saying what has been removed or hidden.
- Not showing every iteration in a trace table.
- Boolean conditions that use OR where AND is needed, or the wrong boundary (`<` or `<=`).
