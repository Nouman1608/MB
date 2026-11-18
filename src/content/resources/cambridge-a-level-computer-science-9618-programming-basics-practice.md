---
title: "Cambridge A Level Computer Science (9618): Programming Basics -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 11: Programming"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 11.1
syllabusTopics:
  - qualification: "a-level"
    topic: "programming"
    subtopic: "programming-basics"
description: "Original 9618 section 11.1 questions with answers: declarations, DIV and MOD, logical expressions, built-in functions and pseudocode written from given designs."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-18: Please check the constant declaration syntax and the built-in function names (STR_TO_NUM, IS_NUM, ASC, CHR) against the current 9618 pseudocode guide and insert."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Programming Basics study guide](/resources/cambridge-a-level-computer-science-9618-programming-basics/) · [Programming Basics revision notes](/resources/cambridge-a-level-computer-science-9618-programming-basics-revision-notes/)

---

## Section A

**1.** Write pseudocode to declare a constant MaxPlayers with the value 8, declare a variable PlayerName to hold text, and declare and initialise a variable Score to 0. **[3]**

**2.** Evaluate each expression.

**(a)** 58 DIV 7 **[1]**

**(b)** 58 MOD 7 **[1]**

**(c)** 58 / 8 **[1]**

**(d)** LEFT("NOTEBOOK", 4) & RIGHT("PENCIL", 3) **[1]**

**(e)** NOT (7 <= 7) OR (3 * 2 = 6) **[1]**

**3.** State **two** differences between a variable and a constant. **[2]**

**4.** Each statement below contains an error. Identify the error in each.

**(a)** Total = Total + 5 **[1]**

**(b)** Mean ← A + B / 2, intended to give the mean of A and B **[1]**

**(c)** Rate ← 0.6, where Rate was declared as CONSTANT Rate = 0.5 **[1]**

**5.** Write an expression that gives a random whole number from 1 to 12 inclusive, and explain why each part is needed. **[3]**

## Section B

**6.** A design is given in structured English.

1. Ask the user to enter a temperature in degrees Celsius.
2. Convert it to Fahrenheit by multiplying by 9, dividing by 5 and adding 32.
3. Output the Fahrenheit temperature with a suitable message.

Write pseudocode for this design. **[4]**

**7.** A program flowchart has these boxes in order: an input box for Length and Width (in metres) of a rectangular room; a process box Area = Length × Width; a process box Cost = Area × the price per square metre, which is fixed at 18.50; and an output box showing Area and Cost.

**(a)** Write pseudocode for this flowchart, using a constant for the price. **[5]**

**(b)** Calculate the output for a room 4.2 m by 3.5 m. **[2]**

**8.** A product code is a string of six characters, such as "KT4821". The first two characters are letters and the last four are digits. Code holds a product code.

**(a)** Write a statement that stores the first two characters of Code in Prefix. **[1]**

**(b)** Write a statement that stores the last four characters of Code, as an integer, in Number. **[2]**

**(c)** Write a BOOLEAN expression that is TRUE only when Code has exactly six characters and its last four characters form a valid number. **[2]**

**9.** A three-digit positive integer is stored in Number. Write pseudocode that uses DIV and MOD to store its digits in reverse order as a new integer in Reversed, and outputs Reversed. For example, 472 gives 274. **[5]**

**10.** Study this pseudocode.

```
A ← 17
B ← 5
C ← A MOD B + A DIV B
D ← (A + B) / 4
E ← NUM_TO_STR(C) & "/" & NUM_TO_STR(B)
OUTPUT C, " ", D, " ", E
```

State the values of C, D and E and the output produced. **[4]**

**11.** Letter holds a single upper-case letter from "A" to "Y". Write an expression, using ASC and CHR, that gives the next letter in the alphabet, and explain how it works. **[3]**

**12.** An online shop gives free delivery if the order total is at least 40 or the customer is a member, provided the delivery address is not overseas. The variables are Total (REAL), IsMember (BOOLEAN) and Overseas (BOOLEAN).

**(a)** Write an assignment statement that sets the BOOLEAN variable FreeDelivery. **[3]**

**(b)** Evaluate FreeDelivery when Total = 25, IsMember = TRUE and Overseas = TRUE. **[1]**

---

## Answers

**1.** CONSTANT MaxPlayers = 8 [1]. DECLARE PlayerName : STRING [1]. DECLARE Score : INTEGER followed by Score ← 0 [1].

**2.** **(a)** 8 [1].

**(b)** 2 [1] (7 × 8 = 56, 58 − 56 = 2).

**(c)** 7.25 [1].

**(d)** "NOTECIL" [1].

**(e)** TRUE [1]: NOT (7 <= 7) is FALSE, 3 * 2 = 6 is TRUE, and FALSE OR TRUE is TRUE.

**3.** The value of a variable can change while the program runs, but a constant's value cannot [1]. A variable is declared with a data type and given a value later, but a constant is given its value in its declaration [1].

**4.** **(a)** = is used for assignment; it should be ← [1].

**(b)** Missing brackets: only B is halved; it should be (A + B) / 2 [1].

**(c)** A constant cannot be assigned a new value [1].

**5.** INT(RAND(12)) + 1 [1]. RAND(12) gives a real number from 0 up to but not including 12, and INT removes the fractional part to give 0 to 11 [1]. Adding 1 changes the range to 1 to 12 [1].

**6.** Model answer:

```
DECLARE Celsius, Fahrenheit : REAL
OUTPUT "Enter the temperature in Celsius"
INPUT Celsius
Fahrenheit ← Celsius * 9 / 5 + 32
OUTPUT "The temperature in Fahrenheit is ", Fahrenheit
```

Declaration of REAL variables [1]; prompt and INPUT [1]; correct calculation [1]; OUTPUT with a message and the result [1].

**7.** **(a)** Model answer:

```
CONSTANT PricePerSqM = 18.50
DECLARE Length, Width, Area, Cost : REAL
INPUT Length
INPUT Width
Area ← Length * Width
Cost ← Area * PricePerSqM
OUTPUT "Area: ", Area, " Cost: ", Cost
```

Constant declared with the value 18.50 [1]; variables declared as REAL [1]; Length and Width input [1]; Area and Cost calculated, using the constant [1]; both values output [1].

**(b)** Area = 4.2 × 3.5 = 14.7 square metres [1]. Cost = 14.7 × 18.50 = 271.95 [1].

**8.** **(a)** Prefix ← LEFT(Code, 2) [1].

**(b)** Number ← STR_TO_NUM(RIGHT(Code, 4)): RIGHT(Code, 4) to extract the digits [1]; STR_TO_NUM to convert to a number [1].

**(c)** (LENGTH(Code) = 6) AND IS_NUM(RIGHT(Code, 4)): length test [1]; IS_NUM on the last four characters, joined with AND [1].

**9.** Model answer:

```
Hundreds ← Number DIV 100
Tens ← (Number DIV 10) MOD 10
Units ← Number MOD 10
Reversed ← Units * 100 + Tens * 10 + Hundreds
OUTPUT Reversed
```

Hundreds digit using DIV 100 [1]; tens digit using DIV 10 then MOD 10 [1]; units digit using MOD 10 [1]; digits recombined with the correct place values [1]; Reversed output [1]. Check: 472 gives 4, 7 and 2, and 2 × 100 + 7 × 10 + 4 = 274.

**10.** C = 17 MOD 5 + 17 DIV 5 = 2 + 3 = 5 [1]. D = 22 / 4 = 5.5 [1]. E = "5/5" [1]. Output: 5 5.5 5/5 [1].

**11.** CHR(ASC(Letter) + 1) [1]. ASC gives the character code of Letter [1]; adding 1 gives the code of the next letter, because the letters A to Z have consecutive codes, and CHR converts that code back to a character [1].

**12.** **(a)** FreeDelivery ← ((Total >= 40) OR IsMember) AND NOT Overseas: (Total >= 40) OR IsMember [1]; AND NOT Overseas [1]; brackets placing the OR inside, so that the overseas condition applies to both [1].

**(b)** (FALSE OR TRUE) AND NOT TRUE = TRUE AND FALSE = FALSE [1].

---

## Where marks are usually lost

- Using = instead of ← in an assignment.
- Forgetting brackets, so that only part of an expression is divided or negated.
- Applying RIGHT or LEFT to a number instead of a string.
- Leaving out the prompt or the message when the question asks for one.
- Not declaring variables, or giving a REAL value an INTEGER type.
