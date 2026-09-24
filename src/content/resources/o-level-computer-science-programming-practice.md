---
title: "O Level Computer Science: Programming — Practice Questions (Cambridge 2210)"
resourceType: "practice-questions"
subject: "computer-science"
level: ["o-levels"]
topic: "Programming"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 8
syllabusTopics:
  - qualification: "o-level"
    topic: "programming-2210"
description: "Original exam-style questions with full worked answers on library routines (ROUND, DIV, MOD), string handling, one-dimensional arrays, finding largest values, functions with parameters, data types and constants, for Cambridge O Level Computer Science (2210)."
author: "marlbridge-academic-team"
publishedDate: 2026-09-24
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Each question practises a skill tested in the June 2025 Paper 22. After each answer there is a mark-scheme insight or a tip and, where one matches, the real question to try next.

---

## Questions

**1.** A runner stores the total distance of her last 6 runs, in km, in the variable TotalDistance.

**(a)** Write one pseudocode statement that outputs the mean distance per run, rounded to 2 decimal places.

**(b)** State the value returned by DIV(47, 6) and the value returned by MOD(47, 6). **[4]**

**2.** A product code is stored in the variable Code, which holds the string "KX4829". State the value returned by each of the following: `LENGTH(Code)`, `SUBSTRING(Code, 3, 2)` and `LCASE(Code)`. **[3]**

**3.** A teacher wants to enter the test scores of 25 students and store them in a one-dimensional array called Scores. After all the scores have been entered, the program must output every score that is 50 or more, one after another. Write pseudocode for this algorithm. You do not need to declare the array or any variables. **[4]**

**4.** This pseudocode inputs the prices of 40 items into the array Price[] and outputs the lowest price.

```
Lowest ← 9999
FOR Item ← 1 TO 40
    INPUT Price[Item]
    IF Price[Item] < Lowest
      THEN
        Lowest ← Price[Item]
    ENDIF
NEXT Item
OUTPUT "Lowest price: ", Lowest
```

Explain how you would change the algorithm so that it also finds the highest price and outputs it at the end. Any statements you add must be fully explained. **[4]**

**5.** Write pseudocode for a function called Perimeter that takes the length and the width of a rectangle as two REAL parameters and returns its perimeter. Then write one statement that calls the function with a length of 4.5 and a width of 3.0 and outputs the result. **[4]**

**6.** A cinema booking program uses the variables NumberOfSeats, TicketPrice, RowLetter and IsMember.

**(a)** State the most suitable data type for each of these four variables.

**(b)** The program also uses a sales tax rate of 0.17, which does not change while the program runs. Give two reasons why this value should be stored as a constant rather than typed as 0.17 wherever it is needed. **[4]**

---

## Answers

**1.** **(a)** `OUTPUT ROUND(TotalDistance / 6, 2)`: the division by 6 to find the mean [1] and ROUND with 2 as the number of decimal places [1]. **(b)** DIV(47, 6) = **7** [1]; MOD(47, 6) = **5** [1], because 47 = 6 × 7 + 5.

*Mark-scheme insight (June 2025):* One mark was for correctly calculating the average (or using a variable that holds it) and a second mark for using ROUND with the right number of decimal places, so write the calculation inside ROUND and give the number of places as the second parameter.

*Try the real question next:* Cambridge O Level Computer Science 2210, June 2025, Paper 22, Question 5.

**2.** LENGTH(Code) = **6** [1]. SUBSTRING(Code, 3, 2) starts at character 3 and takes 2 characters, giving **"48"** [1]. LCASE(Code) = **"kx4829"** [1] (the digits are unchanged).

*Mark-scheme insight (June 2025):* In the worked answer for a string-handling algorithm, SUBSTRING(Word, V1, 1) with V1 = 1 gave the first letter, confirming that character positions in Cambridge pseudocode start at 1, not 0.

*Try the real question next:* Cambridge O Level Computer Science 2210, June 2025, Paper 22, Question 6.

**3.** One possible answer:

```
FOR Count ← 1 TO 25
    INPUT Scores[Count]
NEXT Count
FOR Count ← 1 TO 25
    IF Scores[Count] >= 50
      THEN
        OUTPUT Scores[Count]
    ENDIF
NEXT Count
```

Each score input into the array **using the loop counter as the index** [1]; a **second loop, after the first** has finished, that runs 25 times [1]; a selection statement using >= 50 [1]; output of the array element using the counter as the index [1].

*Mark-scheme insight (June 2025):* When asked to store each value and then output them all, marks were given for storing into an array with the counter as the index, and for a separate loop outside the input loop that outputs the array contents using the counter as the index.

*Try the real question next:* Cambridge O Level Computer Science 2210, June 2025, Paper 22, Question 7.

**4.** Declare a new variable, e.g. **Highest**, at the start of the algorithm [1]. Initialise it to a **low value such as 0**, so the first price input will replace it [1]. Inside the loop, after the price is input, add `IF Price[Item] > Highest THEN Highest ← Price[Item] ENDIF`, so that any price larger than the current highest becomes the new highest [1]. After the loop, add `OUTPUT "Highest price: ", Highest` [1].

*Mark-scheme insight (June 2025):* For a similar change, separate marks were given for declaring the new variable, setting it to a low starting value, the comparison after the input, replacing the stored value when a larger one is found, and outputting it outside the loop. The question asked for every statement to be fully explained, so describe what each added line does, not just the code.

*Try the real question next:* Cambridge O Level Computer Science 2210, June 2025, Paper 22, Question 5.

**5.** One possible answer:

```
FUNCTION Perimeter(SideLength : REAL, SideWidth : REAL) RETURNS REAL
    RETURN 2 * (SideLength + SideWidth)
ENDFUNCTION

OUTPUT Perimeter(4.5, 3.0)
```

Function header with the name and **two REAL parameters** [1]; `RETURNS REAL` in the header [1]; `RETURN` with the correct calculation 2 × (length + width) [1]; a call that passes 4.5 and 3.0 and outputs the returned value (15.0) [1].

*Tip:* A function returns a value, so it is called as part of an expression such as an OUTPUT or an assignment. A procedure does not return a value and is run with CALL.

**6.** **(a)** NumberOfSeats: **INTEGER**; TicketPrice: **REAL**; RowLetter: **CHAR**; IsMember: **BOOLEAN**. All four correct [2]; two or three correct [1]. **(b)** Any two from: the value only has to be **changed in one place** if the tax rate changes [1]; it **cannot be changed accidentally** while the program runs [1]; a meaningful name such as TaxRate makes the program **easier to read and maintain** [1]. (Max 2.)

*Tip:* Choose the data type from the values the variable will hold: whole numbers are INTEGER, numbers with decimal places are REAL, a single character is CHAR, and a yes/no value is BOOLEAN.

---

## Where marks are usually lost

- Writing ROUND(Total, 2) / 6 so the rounding happens before the division, or leaving out the number of decimal places.
- Counting string positions from 0 instead of 1, or reading the third SUBSTRING parameter as an end position instead of a length.
- Using a fixed number such as Scores[1] inside a loop instead of the loop counter as the index.
- Starting a "highest" variable at a large value (or a "lowest" at a small one), so it is never replaced.
- Putting the final OUTPUT inside the loop, so it is printed on every pass.
