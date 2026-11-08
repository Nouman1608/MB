---
title: "Cambridge A Level Computer Science (9618): Programming -- Practice Questions"
seoTitle: "Cambridge 9618 Programming Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 11: Programming"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 11
syllabusTopics:
  - qualification: "a-level"
    topic: "programming"
  - qualification: "a-level"
    topic: "programming"
    subtopic: "programming-basics"
  - qualification: "a-level"
    topic: "programming"
    subtopic: "constructs"
  - qualification: "a-level"
    topic: "programming"
    subtopic: "structured-programming"
description: "Pseudocode questions with answers on constants, operators, string functions, IF, CASE, loop choice, procedures, functions and BYREF for Cambridge AS 9618."
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
> these alongside the official past papers available from your board.

Related: [Programming revision notes](/resources/cambridge-a-level-computer-science-programming-revision-notes/) · [Programming study guide](/resources/cambridge-a-level-computer-science-programming-study-guide/)

These questions cover Topic 11 Programming of Cambridge International AS & A Level Computer Science 9618 (11.1 Programming Basics, 11.2 Constructs, 11.3 Structured Programming), assessed in Paper 2. Use Cambridge pseudocode. Where a question needs a string function, use only LENGTH, MID, RIGHT, UCASE and LCASE as defined in the 9618 Pseudocode Guide.

---

## Questions

**1.** A program calculates the cost of a taxi journey. The fare is a fixed charge of 3.50 plus 1.80 per kilometre.

**(a)** Write pseudocode to declare the fixed charge and the rate as constants. **[2]**
**(b)** Give **two** reasons for using constants instead of the literal values. **[2]**
**(c)** Write pseudocode to input the distance, calculate the fare and output it with a suitable message. **[3]**

**2.** Evaluate each expression.

**(a)** 47 DIV 6 **[1]**
**(b)** 47 MOD 6 **[1]**
**(c)** MID("COMPUTER", 4, 3) **[1]**
**(d)** LENGTH("Data" & " " & "Base") **[1]**
**(e)** (12 > 9) AND NOT (4 = 4) **[1]**

**3.** Write pseudocode for a function Initials(FirstName : STRING, LastName : STRING) RETURNS STRING that returns the two initials in upper case, for example "MK" for "maya", "Khan". **[4]**

**4.** A menu offers options 1 to 4. Option 1 calls ShowBalance(), option 2 calls Deposit(), option 3 calls Withdraw(), option 4 outputs "Goodbye", and any other value outputs "Invalid option". Write this as a CASE structure. **[4]**

**5.** A shipping company charges by parcel weight: up to 2 kg costs 4.00; over 2 kg and up to 10 kg costs 7.50; over 10 kg costs 12.00. Parcels to an island have an extra charge of 3.00. Write pseudocode using nested IF statements to set Cost from Weight and ToIsland (BOOLEAN). **[5]**

**6.** For **each** task, state the most suitable loop structure and justify your choice.

**(a)** Output the 12 times table from 1 × 12 to 12 × 12. **[2]**
**(b)** Ask the user for a menu choice until a valid one (1 to 4) is entered. **[2]**
**(c)** Process items in a basket, where the basket may be empty. **[2]**

**7.** Write pseudocode that inputs positive integers until the user enters 0, then outputs how many of the numbers were even. **[5]**

**8.** Explain **one** situation where it is appropriate to use a procedure and **one** where it is appropriate to use a function. **[2]**

**9.** Study this pseudocode.

```
PROCEDURE Adjust(BYREF Score : INTEGER, Bonus : INTEGER)
   Score ← Score + Bonus
   Bonus ← 0
ENDPROCEDURE

Points ← 40
Extra ← 15
CALL Adjust(Points, Extra)
OUTPUT Points, " ", Extra
```

**(a)** State the output, and explain why. **[3]**
**(b)** Identify the procedure header, a parameter and an argument. **[3]**

**10.** Write pseudocode for a procedure OrderPair(BYREF X : INTEGER, BYREF Y : INTEGER) that swaps the two values if X is greater than Y, so that after the call X ≤ Y. **[4]**

**11.** The pseudocode below is meant to output the largest of 50 numbers stored in Data[1:50]. Rewrite it to be more efficient and explain your change.

```
Max ← Data[1]
FOR i ← 1 TO 50
   FOR j ← 1 TO 50
      IF Data[j] > Max THEN
         Max ← Data[j]
      ENDIF
   NEXT j
NEXT i
OUTPUT Max
```

**[3]**

---

## Answers

**1. (a)**

```
CONSTANT FixedCharge = 3.50
CONSTANT RatePerKm = 1.80
```

[1] per correct constant declaration.

**(b)** Any two: the identifier makes the code easier to understand than a bare number [1]; if a fare changes, it is updated in one place only, so there is less chance of error [1]; the value cannot be changed by mistake while the program runs [1].

**(c)**

```
DECLARE Distance, Fare : REAL
INPUT Distance
Fare ← FixedCharge + Distance * RatePerKm
OUTPUT "The fare is ", Fare
```

Marks: input of distance [1]; correct calculation using the constants [1]; output with message [1].

**2. (a)** 7 [1]. **(b)** 5 [1]. **(c)** "PUT" [1]. **(d)** 9 [1]. **(e)** FALSE [1].

**3.**

```
FUNCTION Initials(FirstName : STRING, LastName : STRING) RETURNS STRING
   DECLARE First, Second : CHAR
   First ← UCASE(MID(FirstName, 1, 1))
   Second ← UCASE(MID(LastName, 1, 1))
   RETURN First & Second
ENDFUNCTION
```

Marks: extract the first character of each name [1]; convert each to upper case [1]; concatenate with & [1]; RETURN (not OUTPUT) the result [1]. (MID returns a string of length 1, used here as the single character that UCASE expects; in the exam, use the functions exactly as the Insert defines them.)

**4.**

```
CASE OF Option
   1 : CALL ShowBalance()
   2 : CALL Deposit()
   3 : CALL Withdraw()
   4 : OUTPUT "Goodbye"
   OTHERWISE : OUTPUT "Invalid option"
ENDCASE
```

Marks: CASE OF ... ENDCASE [1]; cases 1 to 3 with CALL [1]; case 4 [1]; OTHERWISE as the last clause [1].

**5.**

```
IF Weight <= 2 THEN
   Cost ← 4.00
ELSE
   IF Weight <= 10 THEN
      Cost ← 7.50
   ELSE
      Cost ← 12.00
   ENDIF
ENDIF
IF ToIsland = TRUE THEN
   Cost ← Cost + 3.00
ENDIF
```

Marks: first band correct including 2 kg [1]; second band with the 10 kg boundary [1]; third band [1]; correct nesting with ENDIFs [1]; island charge added to the cost for all weights [1].

**6. (a)** Count-controlled (FOR) loop [1]: the number of repetitions, 12, is known before the loop starts [1].
**(b)** Post-condition (REPEAT ... UNTIL) loop [1]: the choice must be input at least once before it can be checked, and the number of attempts is unknown [1].
**(c)** Pre-condition (WHILE) loop [1]: the condition is tested before the body, so the body is not executed at all if the basket is empty [1].

**7.**

```
DECLARE Number, EvenCount : INTEGER
EvenCount ← 0
INPUT Number
WHILE Number <> 0
   IF Number MOD 2 = 0 THEN
      EvenCount ← EvenCount + 1
   ENDIF
   INPUT Number
ENDWHILE
OUTPUT "Even numbers: ", EvenCount
```

Marks: counter initialised [1]; input before the loop and again at the end of the body [1]; loop ends when 0 is entered (0 itself is not counted) [1]; even test with MOD 2 [1]; output after the loop [1].

**8.** Procedure: a task that does something but does not produce a single value, e.g. displaying a menu or writing a record to a file [1]. Function: when a single value must be calculated and used in an expression, e.g. calculating the area of a room, or checking whether a password is valid and returning TRUE or FALSE [1].

**9. (a)** Output: **55 15** [1]. Score is passed by reference, so the change to Score alters Points [1]. Bonus is passed by value, so setting Bonus to 0 changes only the local copy and Extra keeps the value 15 [1].
**(b)** Header: `PROCEDURE Adjust(BYREF Score : INTEGER, Bonus : INTEGER)` [1]. Parameter: Score (or Bonus) [1]. Argument: Points (or Extra) [1].

**10.**

```
PROCEDURE OrderPair(BYREF X : INTEGER, BYREF Y : INTEGER)
   DECLARE Temp : INTEGER
   IF X > Y THEN
      Temp ← X
      X ← Y
      Y ← Temp
   ENDIF
ENDPROCEDURE
```

Marks: correct header with BYREF parameters [1]; comparison X > Y [1]; use of a temporary variable [1]; correct three-step swap inside the IF [1].

**11.**

```
Max ← Data[1]
FOR i ← 2 TO 50
   IF Data[i] > Max THEN
      Max ← Data[i]
   ENDIF
NEXT i
OUTPUT Max
```

Marks: single loop [1]; loop can start at 2 because Max already holds Data[1] [1]. Explanation: the outer loop repeated the whole search 50 times, giving 2500 comparisons instead of 49, with the same result [1].

---

## Where marks are usually lost

- Writing OUTPUT inside a function instead of RETURN.
- Joining strings with + instead of &.
- Inputting a value inside a module when it was already passed in as a parameter.
- Putting the second INPUT in the wrong place in a WHILE loop, so the rogue value is processed.
- Boundaries such as "up to 2 kg" coded as < 2 instead of <= 2.

## Frequently asked questions

**Is `WHILE ... DO` correct Cambridge pseudocode?**
The 9618 Pseudocode Guide writes the pre-condition loop as `WHILE <condition>` followed by the statements and `ENDWHILE`, with no DO.

**Can a function change a parameter?**
The guide says parameters should not be passed by reference to a function, so a function should return its result rather than change its arguments.

**Do I lose marks for extra declarations?**
No. Declaring variables is good practice and is never penalised; missing initialisation of a total or counter often is.

## Official syllabus

Questions are written against Cambridge International AS & A Level Computer Science 9618, syllabus for 2026 and syllabus for 2027, 2028 and 2029, Topic 11 Programming, using the Cambridge 9618 Pseudocode Guide for Teachers. Examiner comments by series are on the [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
