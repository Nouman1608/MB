---
title: "Cambridge A Level Computer Science (9618): Structured Programming -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 11: Programming"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 11.3
syllabusTopics:
  - qualification: "a-level"
    topic: "programming"
    subtopic: "structured-programming"
description: "Original 9618 section 11.3 questions with answers: module headers, BYVAL and BYREF traces, writing procedures and functions, interfaces and more efficient code."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Structured Programming study guide](/resources/cambridge-a-level-computer-science-9618-structured-programming/) · [Structured Programming revision notes](/resources/cambridge-a-level-computer-science-9618-structured-programming-revision-notes/)

---

## Section A

**1.** State **two** differences between a procedure and a function. **[2]**

**2.** Define each term.

**(a)** Parameter **[1]**

**(b)** Return value **[1]**

**3.** Explain the difference between passing a parameter by value and by reference. **[2]**

**4.** Write the header for each module.

**(a)** A procedure SaveScore that receives a player's name and an integer score, both by value. **[2]**

**(b)** A function Average that receives three integers and returns a real number. **[2]**

## Section B

**5.** Study this pseudocode.

```
FUNCTION Mystery(N : INTEGER) RETURNS INTEGER
   DECLARE Result : INTEGER
   Result ← 1
   WHILE N > 1
      Result ← Result * N
      N ← N - 1
   ENDWHILE
   RETURN Result
ENDFUNCTION

X ← 4
Y ← Mystery(X) + Mystery(2)
OUTPUT X, " ", Y
```

**(a)** State the output, showing the value returned by each call. **[3]**

**(b)** State the purpose of the function Mystery. **[1]**

**6.** A global array Temps[1:24] of REAL holds hourly temperatures. Write a procedure MinMax that finds the lowest and highest temperatures and sends both back to the calling program through its parameters. **[6]**

**7.** A quiz program displays a menu, asks ten questions, checks whether each answer is correct, adds to the score, and finally displays the score with a message. Explain where in this algorithm a procedure would be appropriate and where a function would be appropriate. **[4]**

**8.** Study this pseudocode.

```
PROCEDURE Update(BYREF Total : INTEGER, BYVAL Bonus : INTEGER)
   Bonus ← Bonus + 5
   Total ← Total + Bonus
ENDPROCEDURE

Score ← 20
Extra ← 3
CALL Update(Score, Extra)
CALL Update(Score, Extra)
OUTPUT Score, " ", Extra
```

State the output and explain why Extra has the value shown. **[3]**

**9.** A membership code is valid if it has exactly five characters, its first character is an upper-case letter from "A" to "Z", and its last four characters form a number.

**(a)** Write a function IsValidCode(Code : STRING) RETURNS BOOLEAN. **[4]**

**(b)** Write a statement that uses IsValidCode to output "Accepted" or "Rejected" for the variable NewCode. **[2]**

**10.** This code sets a grade for each of 100 marks.

```
FOR I ← 1 TO 100
   IF Marks[I] >= 70 THEN
      Grade[I] ← 'A'
   ENDIF
   IF Marks[I] >= 50 AND Marks[I] < 70 THEN
      Grade[I] ← 'B'
   ENDIF
   IF Marks[I] < 50 THEN
      Grade[I] ← 'C'
   ENDIF
NEXT I
```

**(a)** Rewrite the code to be more efficient. **[3]**

**(b)** Explain why your version is more efficient. **[1]**

**11.** A team of programmers is splitting a program into modules. Describe what a module's interface includes and why each programmer needs it. **[3]**

**12.** Give **two** advantages of passing data to modules as parameters rather than using global variables. **[2]**

---

## Answers

**1.** Any two, 1 mark each: a function returns a value but a procedure does not [1]; a function is called inside an expression, a procedure with a CALL statement [1]; a function header includes RETURNS and a return type, a procedure header does not [1].

**2.** **(a)** A variable named in a module's header that receives a value (an argument) when the module is called [1].

**(b)** The value a function sends back, which replaces the function call in the expression where it was used [1].

**3.** By value, a copy of the argument is passed, so changes inside the module do not affect the caller's variable [1]. By reference, the address of the caller's variable is passed, so changes inside the module change the caller's variable [1].

**4.** **(a)** PROCEDURE SaveScore(BYVAL PlayerName : STRING, BYVAL Score : INTEGER): PROCEDURE keyword with name [1]; both parameters with correct types and BYVAL [1].

**(b)** FUNCTION Average(A : INTEGER, B : INTEGER, C : INTEGER) RETURNS REAL: three INTEGER parameters [1]; RETURNS REAL [1].

**5.** **(a)** Mystery(4) returns 4 × 3 × 2 = 24 [1]. Mystery(2) returns 2 [1]. The output is 4 26, because X was passed by value and is unchanged [1].

**(b)** It returns the factorial of N [1].

**6.** Model answer:

```
PROCEDURE MinMax(BYREF Low : REAL, BYREF High : REAL)
   DECLARE Index : INTEGER
   Low ← Temps[1]
   High ← Temps[1]
   FOR Index ← 2 TO 24
      IF Temps[Index] < Low THEN
         Low ← Temps[Index]
      ELSE
         IF Temps[Index] > High THEN
            High ← Temps[Index]
         ENDIF
      ENDIF
   NEXT Index
ENDPROCEDURE
```

Procedure header with two parameters [1]; both passed BYREF with type REAL [1]; Low and High initialised to the first element [1]; loop through the remaining elements [1]; comparison updating Low [1]; comparison updating High [1].

**7.** A procedure is appropriate for displaying the menu [1], because it is a self-contained task that produces output and returns no value [1]. A function is appropriate for checking each answer [1], because it returns one BOOLEAN value (correct or not) that can be used in an expression such as IF CheckAnswer(Reply, 3) THEN, and it is reused for all ten questions [1].

**8.** Output: 36 3 [1]. Each call adds Extra + 5 = 8 to Score, so Score goes from 20 to 28 to 36 [1]. Bonus is passed by value, so adding 5 to it changes only the copy, and Extra remains 3 [1].

**9.** **(a)** Model answer:

```
FUNCTION IsValidCode(Code : STRING) RETURNS BOOLEAN
   IF LENGTH(Code) <> 5 THEN
      RETURN FALSE
   ENDIF
   IF LEFT(Code, 1) < "A" OR LEFT(Code, 1) > "Z" THEN
      RETURN FALSE
   ENDIF
   RETURN IS_NUM(RIGHT(Code, 4))
ENDFUNCTION
```

Length check [1]; first-character check against "A" and "Z" [1]; numeric check on the last four characters [1]; a BOOLEAN returned on every path [1].

**(b)** IF IsValidCode(NewCode) THEN OUTPUT "Accepted" ELSE OUTPUT "Rejected" ENDIF: function used as the condition with NewCode as the argument [1]; both outputs correct [1].

**10.** **(a)** Model answer:

```
FOR I ← 1 TO 100
   IF Marks[I] >= 70 THEN
      Grade[I] ← 'A'
   ELSE
      IF Marks[I] >= 50 THEN
         Grade[I] ← 'B'
      ELSE
         Grade[I] ← 'C'
      ENDIF
   ENDIF
NEXT I
```

Nested IF with ELSE [1]; second condition tests only Marks[I] >= 50 [1]; 'C' given in the final ELSE with no further test [1].

**(b)** Once a condition is TRUE, no further conditions are tested, and conditions already known to be FALSE are not repeated, so fewer comparisons are made for each mark [1].

**11.** The interface is the module's name, its parameters with their data types, order and passing method, and its return type for a function [1]. A programmer calling the module needs it to supply the right arguments and use the result correctly [1], without needing to know how the module is coded, so modules written by different people fit together [1].

**12.** Any two, 1 mark each: a module cannot accidentally change data it was not given [1]; the module can be reused in other programs because it does not depend on global names [1]; each module can be tested on its own by passing it test values [1]; errors are easier to trace because data flows through the interface [1].

---

## Where marks are usually lost

- Missing RETURNS and a return type in a function header.
- Forgetting that unstated parameters are passed by value, so the caller's variable is unchanged.
- Giving a procedure where one value is needed in an expression.
- Rewriting code for efficiency without stating what work is saved.
