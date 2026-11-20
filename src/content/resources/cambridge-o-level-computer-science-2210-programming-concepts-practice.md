---
title: "Cambridge O Level Computer Science (2210): Programming concepts -- Practice Questions"
seoTitle: "Cambridge O Level CS 2210 Programming Concepts Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 8 – Programming"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 8.1
syllabusTopics:
  - qualification: "o-level"
    topic: "programming-2210"
  - qualification: "o-level"
    topic: "programming-2210"
    subtopic: "programming-concepts-2210"
description: "Original questions with answers on Cambridge O Level Computer Science 2210 section 8.1: data types, operators, selection, loops, procedures, functions and maintainable pseudocode."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Programming concepts study guide](/resources/cambridge-o-level-computer-science-2210-programming-concepts/) and [Programming concepts revision notes](/resources/cambridge-o-level-computer-science-2210-programming-concepts-revision-notes/)

---

## Section A

**1.** State what is meant by a constant. **[1]**

**2.** Give the most suitable data type for each value: 'B', 3.5, TRUE and "Hello". **[4]**

**3.** State the value of DIV(29, 4) and the value of MOD(29, 4). **[2]**

**4.** State the value returned by LENGTH("Computer Science") and by SUBSTRING("Computer Science", 10, 4), where the first character is position 1. **[2]**

**5.** State the difference between a WHILE loop and a REPEAT loop. **[2]**

## Section B

**6.** Study the pseudocode.

```
Number ← 3
Total ← 0
FOR Count ← 1 TO 4
   Total ← Total + Number * Count
NEXT Count
OUTPUT Total
```

**(a)** Complete a trace table that shows the values of Count and Total after each pass of the loop. **[3]**

**(b)** State the value that is output. **[1]**

**7.** Study the pseudocode. The value of Number is 4567 before the loop starts.

```
Count ← 0
WHILE Number >= 10 DO
   Number ← DIV(Number, 10)
   Count ← Count + 1
ENDWHILE
OUTPUT Count
```

**(a)** State the value of Number after each pass of the loop. **[2]**

**(b)** State the value that is output. **[1]**

**(c)** State what the algorithm calculates. **[1]**

**8.** A shop gives a 20% discount if the total cost of an order is more than 100. Write pseudocode that inputs the price of one item and the quantity ordered, calculates the total cost, applies the discount if it applies and outputs the final cost. **[5]**

**9.** Write pseudocode that inputs 20 whole numbers and outputs how many of them are even. **[5]**

**10.** A program asks the user for their age. The age must be a whole number from 0 to 120 inclusive. Write pseudocode that keeps asking until a valid age is entered, using a post-condition loop. **[4]**

**11.** A function called Cube returns a whole number multiplied by itself twice.

**(a)** Write the pseudocode for the function. **[3]**

**(b)** Write a statement that outputs the cube of 4. **[1]**

**(c)** State the value that is output. **[1]**

**12.**

**(a)** Explain the difference between a procedure and a function. **[2]**

**(b)** Explain the difference between a local variable and a global variable. **[2]**

**13.** A programmer writes the line `x ← y * 6.5` in a program that calculates the pay of a worker.

**(a)** Suggest **two** changes that would make this line easier for another programmer to understand and maintain. **[2]**

**(b)** Explain why using a procedure or function to calculate the pay makes the program more maintainable. **[2]**

**14.** A menu program stores the user's choice in a CHAR variable named Choice. Write a CASE statement that outputs "Open" for 'O', "Save" for 'S' and "Not recognised" for any other value. **[3]**

**15.**

**(a)** State the value returned by ROUND(8.3764, 2). **[1]**

**(b)** Describe the values produced by ROUND(RANDOM() * 10, 0). **[2]**

---

## Answers

**1.** A named value that is set when the program is written and cannot change while the program runs [1].

**2.** 'B' is CHAR [1]; 3.5 is REAL [1]; TRUE is BOOLEAN [1]; "Hello" is STRING [1].

**3.** DIV(29, 4) is 7 [1]; MOD(29, 4) is 1 [1].

**4.** LENGTH is 16 [1]. SUBSTRING gives "Scie" [1].

**5.** A WHILE loop tests its condition before the body, so the body may not run at all [1]. A REPEAT loop tests the condition after the body, so the body always runs at least once [1].

**6. (a)** Count 1, Total 3 [1]; Count 2, Total 9 [1]; Count 3, Total 18 and Count 4, Total 30 [1].
**(b)** 30 [1].

**7. (a)** After pass 1: 456; after pass 2: 45; after pass 3: 4 [2]. Award 1 mark for two of the three values.
**(b)** 3 [1].
**(c)** The number of digits in the original number, minus one / how many times the number can be divided by 10 before it is a single digit [1].

**8.** Sample answer:

```
INPUT Price
INPUT Quantity
Total ← Price * Quantity
IF Total > 100
   THEN
      Total ← Total * 0.8
ENDIF
OUTPUT Total
```

Marks: inputs both values [1]; calculates Total as Price multiplied by Quantity [1]; IF with the condition Total > 100 [1]; applies the 20% discount correctly (Total * 0.8, or Total - Total * 0.2) [1]; outputs the final cost [1]. For example, a price of 15.00 and a quantity of 8 gives 120.0, which is reduced to 96.0.

**9.** Sample answer:

```
EvenCount ← 0
FOR Index ← 1 TO 20
   INPUT Number
   IF MOD(Number, 2) = 0
      THEN
         EvenCount ← EvenCount + 1
   ENDIF
NEXT Index
OUTPUT EvenCount
```

Marks: counter set to 0 before the loop [1]; loop that repeats 20 times [1]; input inside the loop [1]; test for even using MOD(Number, 2) = 0 [1]; counter increased and output after the loop [1].

**10.** Sample answer:

```
REPEAT
   OUTPUT "Enter your age"
   INPUT Age
UNTIL Age >= 0 AND Age <= 120
```

Marks: REPEAT ... UNTIL structure [1]; input of Age inside the loop [1]; correct range test with both limits [1]; AND used so that both limits must be true / the loop ends only when the age is valid [1]. Accept an error message output inside the loop.

**11. (a)**
```
FUNCTION Cube(Number : INTEGER) RETURNS INTEGER
   RETURN Number * Number * Number
ENDFUNCTION
```
Marks: header with parameter and RETURNS INTEGER [1]; RETURN with a correct calculation [1]; ENDFUNCTION [1].
**(b)** `OUTPUT Cube(4)` [1] (the function is used in an expression and is not called with CALL).
**(c)** 64 [1].

**12. (a)** A function returns a value to the place where it is called, and is used in an expression [1], whereas a procedure does not return a value and is run with a CALL statement [1].
**(b)** A local variable is declared inside a procedure or function and can only be used there [1], whereas a global variable is declared in the main program and can be used anywhere in the program [1].

**13. (a)** Use meaningful identifiers, such as TotalPay, HoursWorked [1] and a constant for the rate, such as CONSTANT HourlyRate ← 6.50 [1]. (Accept adding a comment to explain the calculation.)
**(b)** The calculation is written in one place, so it only has to be changed once if the method changes [1]. The main program is shorter and easier to read, and the procedure or function can be tested separately [1].

**14.** Sample answer:

```
CASE OF Choice
   'O' : OUTPUT "Open"
   'S' : OUTPUT "Save"
   OTHERWISE OUTPUT "Not recognised"
ENDCASE
```

Marks: CASE OF Choice and ENDCASE [1]; both cases with correct values and outputs [1]; OTHERWISE clause last [1].

**15. (a)** 8.38 [1].
**(b)** RANDOM() gives a number from 0 to 1, which is multiplied by 10 to give a number from 0 to 10 [1]. ROUND(..., 0) rounds it to a whole number, so the result is a whole number from 0 to 10 [1].

---

## Where marks are usually lost

- Question 2: giving 3.5 as INTEGER, or 'B' as STRING. A single character in single quotes is CHAR.
- Question 4: counting the space or starting at position 0 for SUBSTRING.
- Question 6: forgetting that the trace table needs one row for every pass.
- Question 7: giving the number of digits (4) instead of the count that is output (3).
- Question 8: writing the discount as Total * 0.2, which gives the discount and not the final cost.
- Question 9: not setting the counter to 0 before the loop.
- Question 10: using UNTIL Age < 0 OR Age > 120, which stops on an invalid age. The loop ends when the age is valid.
- Question 11: using CALL for the function.
- Question 13: answering "add comments" only. Link each change to maintainability.

## Checking pseudocode

Read each of your own structures and check that it closes properly (ENDIF, NEXT, ENDWHILE, UNTIL, ENDFUNCTION), that every variable is given a value before it is used, and that you used the arrow for assignment.
