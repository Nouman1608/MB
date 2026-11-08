---
title: "IGCSE Computer Science: Programming — Practice Questions (Cambridge 0478)"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Programming"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 8
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-0478"
description: "Original pseudocode questions with answers on loops, CASE, string functions, MOD and DIV, 2D arrays, functions, scope and file handling for IGCSE 0478."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available free from your board.

Related: [Programming study guide](/resources/cambridge-igcse-computer-science-programming-study-guide/) and
[revision notes](/resources/igcse-computer-science-programming-revision-notes/)

These questions cover Topic 8 of the Cambridge IGCSE Computer Science 0478 syllabus (2026–2028): programming concepts (8.1), arrays (8.2) and file handling (8.3). Topic 8 is assessed on Paper 2. Write your answers in pseudocode.

---

## Section A

**1.** A library system stores the following data about each book. State the most suitable data type for each. **[4]**

(a) The number of copies held. (b) Whether the book is currently on loan. (c) The replacement cost in dollars and cents. (d) The shelf section, a single letter such as 'F'.

**2.** The variable `Place` holds the string "Lighthouse". State the value returned by: **[3]**

(a) `LENGTH(Place)` (b) `SUBSTRING(Place, 6, 5)` (c) `UCASE(SUBSTRING(Place, 1, 5))`

**3.** State the values of `DIV(125, 7)` and `MOD(125, 7)`. **[2]**

**4.** Name the type of loop used in each case, and give its pseudocode keywords. **[3]**

(a) The loop runs exactly 12 times, once for each month.
(b) The condition is tested before the loop body, so the body may never run.
(c) The condition is tested after the loop body, so the body always runs at least once.

## Section B

**5.** A vending machine menu accepts a choice of 1, 2 or 3. Write pseudocode using a CASE statement that outputs "Water", "Juice" or "Tea" for choices 1, 2 and 3, and "Invalid choice" for any other value. **[4]**

**6.** A café records the number of cakes sold on each of 7 days for each of 4 cake types in the 2D array `Sales[1:4, 1:7]`, where the first index is the cake type and the second is the day.

Write pseudocode that uses nested loops to calculate and output the total sales for each cake type, followed by the grand total for all cakes. **[6]**

**7.** A program contains this subroutine:

```
FUNCTION Discount(Price : REAL, Member : BOOLEAN) RETURNS REAL
    DECLARE NewPrice : REAL
    IF Member = TRUE
      THEN
        NewPrice ← Price * 0.9
      ELSE
        NewPrice ← Price
    ENDIF
    RETURN ROUND(NewPrice, 2)
ENDFUNCTION
```

**(a)** Identify the parameters of the function. **[1]**
**(b)** State the value returned by `Discount(24.99, TRUE)`. **[1]**
**(c)** `NewPrice` is a local variable. Explain what this means. **[2]**
**(d)** Explain why a function, rather than a procedure, is used here. **[2]**

**8.** A board game needs a random whole number from 0 to 6 each turn. Write one pseudocode statement that assigns such a value to the variable `Roll`, using library routines. **[2]**

**9.** A quiz program must save each player's name and score to a text file called "Results.txt", then later read back the first line of the file and output it.

**(a)** Explain why the results are stored in a file rather than only in variables. **[1]**
**(b)** Write pseudocode to write the variables `PlayerName` and `Score` to the file, then close it. **[3]**
**(c)** Write pseudocode to open the file, read the first line into `FirstLine`, output it and close the file. **[3]**

**10.** Give **three** ways a programmer can make a program easier to maintain. **[3]**

---

## Answers

**1.** (a) INTEGER [1]. (b) BOOLEAN [1]. (c) REAL [1]. (d) CHAR [1].

**2.** (a) 10 [1]. (b) "house" [1]. (c) "LIGHT" [1].

*Working:* L(1) i(2) g(3) h(4) t(5) h(6) o(7) u(8) s(9) e(10), so position 6 for 5 characters is "house" and positions 1–5 are "Light".

**3.** DIV(125, 7) = 17 [1]; MOD(125, 7) = 6 [1]. (17 × 7 = 119; 125 − 119 = 6.)

**4.** (a) Count-controlled loop: `FOR ... TO ... NEXT` [1]. (b) Pre-condition loop: `WHILE ... DO ... ENDWHILE` [1]. (c) Post-condition loop: `REPEAT ... UNTIL` [1].

**5.**

```
INPUT Choice
CASE OF Choice
    1 : OUTPUT "Water"
    2 : OUTPUT "Juice"
    3 : OUTPUT "Tea"
    OTHERWISE OUTPUT "Invalid choice"
ENDCASE
```

Marks: input of the choice [1]; `CASE OF Choice ... ENDCASE` structure [1]; three correct cases [1]; `OTHERWISE` with the error message as the last case [1].

**6.**

```
GrandTotal ← 0
FOR Cake ← 1 TO 4
    CakeTotal ← 0
    FOR Day ← 1 TO 7
        CakeTotal ← CakeTotal + Sales[Cake, Day]
    NEXT Day
    OUTPUT "Cake type ", Cake, " total: ", CakeTotal
    GrandTotal ← GrandTotal + CakeTotal
NEXT Cake
OUTPUT "Grand total: ", GrandTotal
```

Mark points (max 6):
- grand total initialised to 0 before the loops [1]
- outer loop for the 4 cake types [1]
- cake total reset to 0 inside the outer loop, before the inner loop [1]
- inner loop for the 7 days [1]
- correct use of both indexes, `Sales[Cake, Day]` [1]
- cake total output after the inner loop, for each cake [1]
- grand total updated and output after both loops [1]

**7. (a)** `Price` and `Member` [1].
**(b)** 22.49 [1]. (24.99 × 0.9 = 22.491, rounded to 2 decimal places.)
**(c)** It is declared inside the function, so it can only be used within that function [1] and it no longer exists once the function has finished [1].
**(d)** The subroutine needs to send a single value back to the code that called it [1], so it can be used in an expression, for example `Total ← Total + Discount(Price, IsMember)`; a procedure does not return a value [1].

**8.** `Roll ← ROUND(RANDOM() * 6, 0)` [2]. (1 mark for `RANDOM() * 6`, 1 mark for rounding to 0 decimal places and assigning to Roll.)

**9. (a)** Data in a file is kept after the program closes, so the results can be used again later [1].
**(b)**

```
OPENFILE "Results.txt" FOR WRITE
WRITEFILE "Results.txt", PlayerName
WRITEFILE "Results.txt", Score
CLOSEFILE "Results.txt"
```

Opening in WRITE mode [1]; writing both values [1]; closing the file [1].

**(c)**

```
OPENFILE "Results.txt" FOR READ
READFILE "Results.txt", FirstLine
OUTPUT FirstLine
CLOSEFILE "Results.txt"
```

Opening in READ mode [1]; reading into FirstLine and outputting it [1]; closing the file [1].

**10.** Any three from: use meaningful identifiers for variables, constants, arrays and subroutines [1]; add comments that explain what sections of code do [1]; use procedures and functions so code is not repeated [1]; use constants for fixed values so they are changed in one place [1]; use consistent indentation [1].

## Where marks are usually lost

- Q1(c): choosing INTEGER for money. Cents need a REAL.
- Q6: setting `CakeTotal ← 0` once, before the outer loop, so each cake's total includes the previous cakes.
- Q7(c): saying a local variable "can't change". It can change, but only exists inside its subroutine.
- Q9(b): writing to a file opened FOR READ, or forgetting CLOSEFILE.

## Frequently asked questions

**Does Cambridge 0478 count string positions from 0 or 1?**
The syllabus allows either, but the pseudocode guide says a start position of 1 is generally the first character. Questions normally make the convention clear.

**How many levels of nesting can a question ask for?**
The 0478 syllabus says you will not be required to write more than three levels of nested statements.

**What does RANDOM() return in Cambridge pseudocode?**
A random number between 0 and 1 inclusive. Multiply and round it to get a whole number in a range, for example `ROUND(RANDOM() * 6, 0)` for 0 to 6.
