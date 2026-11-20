---
title: "Cambridge IGCSE Computer Science (0478): Programming concepts -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 8: Programming"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 8.1
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-0478"
  - qualification: "igcse"
    topic: "programming-0478"
    subtopic: "programming-concepts-0478"
description: "Original questions with full answers on Cambridge IGCSE Computer Science 0478 section 8.1: trace tables, loops, operators, string handling, subroutines and library routines."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs. Use these alongside the official past papers available from your board.

Related: [Programming concepts study guide](/resources/cambridge-igcse-computer-science-0478-programming-concepts/) and [Programming concepts revision notes](/resources/cambridge-igcse-computer-science-0478-programming-concepts-revision-notes/)

---

## Section A

**1.** State the most suitable data type for each item of data: the number of pupils in a class, the price of a book, the first letter of a name, whether a door is open. **[4]**

**2.** State the value returned by each of the following.

**(a)** `DIV(47, 5)` **[1]**

**(b)** `MOD(47, 5)` **[1]**

**(c)** `LENGTH("Network")` **[1]**

**(d)** `UCASE("Code")` **[1]**

**3.** State the purpose of a constant in a program. **[1]**

**4.** Name the loop that is always executed at least once. **[1]**

## Section B

**5.** The pseudocode below is run with these inputs: 4, 7, 10, 3, 8, 5.

```
Total ← 0
Count ← 0
FOR Index ← 1 TO 6
    INPUT Number
    IF Number MOD 2 = 0
       THEN
         Total ← Total + Number
         Count ← Count + 1
    ENDIF
NEXT Index
OUTPUT Total, Count
```

**(a)** Complete a trace table for the variables `Number`, `Total` and `Count`. **[4]**

**(b)** State what the algorithm does. **[2]**

**6.** Write pseudocode that asks the user to enter 10 numbers and outputs their total and the number of values greater than 100. **[5]**

**7.** Write a pseudocode function `Cube` that has one integer parameter, returns the cube of the number and shows the call that outputs the cube of 4. **[4]**

**8.** Describe the difference between a `WHILE` loop and a `REPEAT ... UNTIL` loop. **[2]**

**9.** The code below is run. State the final output.

```
Value ← 1
REPEAT
    Value ← Value * 3
UNTIL Value > 50
OUTPUT Value
```

**[2]**

**10.** Explain the difference between a local variable and a global variable and give one benefit of using local variables. **[3]**

**11.** A program uses variable names `a`, `b` and `c` and has no comments. Explain **two** ways in which the program could be made more maintainable. **[4]**

**12.** Write pseudocode to convert a number of minutes input by the user into hours and minutes and output the result (for example, 135 minutes is 2 hours 15 minutes). **[4]**

---

## Answers

**1.** Integer [1]; real [1]; char [1]; Boolean [1].

**2.** **(a)** 9 [1]. **(b)** 2 [1]. **(c)** 7 [1]. **(d)** `"CODE"` [1].

**3.** To hold a value that does not change while the program runs, so it can be changed in one place [1].

**4.** REPEAT ... UNTIL (post-condition loop) [1].

**5.** **(a)** The completed trace table is shown below. One mark for each of: correct `Number` column [1]; `Total` changing only for 4, 10 and 8 [1]; `Count` changing only for 4, 10 and 8 [1]; final values `Total` 22 and `Count` 3 [1].

| Number | Total | Count |
|---|---|---|
| 4 | 4 | 1 |
| 7 | 4 | 1 |
| 10 | 14 | 2 |
| 3 | 14 | 2 |
| 8 | 22 | 3 |
| 5 | 22 | 3 |

**(b)** It totals [1] and counts the even numbers that are input [1].

**6.** Example answer:

```
Total ← 0
Count ← 0
FOR Index ← 1 TO 10
    INPUT Number
    Total ← Total + Number
    IF Number > 100
       THEN
         Count ← Count + 1
    ENDIF
NEXT Index
OUTPUT Total, Count
```

Initialise `Total` and `Count` to 0 [1]; loop 10 times [1]; input inside the loop [1]; total and count updated correctly with the condition `> 100` [1]; output after the loop [1].

**7.** Example answer:

```
FUNCTION Cube(Number : INTEGER) RETURNS INTEGER
    RETURN Number * Number * Number
ENDFUNCTION

OUTPUT Cube(4)
```

Function header with parameter and return type [1]; correct calculation [1]; `RETURN` used [1]; call within an expression or `OUTPUT`, without `CALL` [1]. Output 64.

**8.** A WHILE loop tests its condition before the statements, so it may never run [1]. A REPEAT ... UNTIL loop tests the condition after the statements, so it always runs at least once [1].

**9.** Value goes 3, 9, 27, 81 [1]. The output is 81 [1].

**10.** A local variable can only be used in the subroutine where it is declared [1], whereas a global variable can be used anywhere in the program [1]. Benefit: a local variable cannot be changed accidentally by other parts of the program, and its name can be reused [1].

**11.** Any two developed: use meaningful identifiers [1], so that readers can tell what each variable holds [1]; add comments [1], to explain what each section does [1]; use procedures and functions [1] to break the program into smaller, reusable parts [1]. Maximum 4.

**12.** Example answer:

```
INPUT Minutes
Hours ← DIV(Minutes, 60)
Remainder ← MOD(Minutes, 60)
OUTPUT Hours, " hours ", Remainder, " minutes"
```

Input [1]; `DIV` by 60 for hours [1]; `MOD` by 60 for minutes [1]; output of both [1].

---

## Where marks are usually lost

- Question 1: choosing integer for a price that has pence or cents.
- Question 5: forgetting that the odd numbers do not change Total or Count.
- Question 6: not setting Total and Count to 0 before the loop.
- Question 7: using `CALL` for a function, or no `RETURN`.
- Question 9: stopping at 27 or writing 50. The loop ends when the value exceeds 50, which is first at 81.
- Question 12: using `/` instead of `DIV`.

## Quick reference for checking your answers

| Item | Key point |
|---|---|
| Totalling and counting | Start at 0 before the loop |
| WHILE | May not run |
| REPEAT | Runs at least once |
| DIV / MOD | Quotient / remainder |
| Function | Returns a value |
