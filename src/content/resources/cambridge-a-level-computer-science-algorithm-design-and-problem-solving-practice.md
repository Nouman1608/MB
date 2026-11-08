---
title: "Cambridge A Level Computer Science (9618): Algorithm Design and Problem-solving -- Practice Questions"
seoTitle: "Cambridge 9618 Algorithm Design Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 9: Algorithm Design and Problem-solving"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 9
syllabusTopics:
  - qualification: "a-level"
    topic: "algorithm-design-and-problem-solving"
  - qualification: "a-level"
    topic: "algorithm-design-and-problem-solving"
    subtopic: "computational-thinking-skills"
  - qualification: "a-level"
    topic: "algorithm-design-and-problem-solving"
    subtopic: "algorithms-9-2"
description: "Paper 2-style questions with answers on abstraction, decomposition, identifier tables, flowcharts, pseudocode and stepwise refinement for Cambridge AS 9618."
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

Related: [Algorithm Design and Problem-solving revision notes](/resources/cambridge-a-level-computer-science-algorithm-design-and-problem-solving-revision-notes/) · [study guide](/resources/cambridge-a-level-computer-science-algorithm-design-and-problem-solving-study-guide/)

These questions cover Topic 9 of Cambridge International AS & A Level Computer Science 9618, Algorithm Design and Problem-solving, which is assessed in Paper 2. Write all algorithms in Cambridge pseudocode as set out in the 9618 Pseudocode Guide. Model answers show one correct solution; any algorithm that meets every marking point is credited.

---

## Questions

**1.** A theme park wants a program to tell visitors the waiting time for each ride.

**(a)** Explain what is meant by abstraction. **[2]**
**(b)** Identify **two** details the program should include and **two** it should leave out. **[2]**
**(c)** Give **two** benefits of using abstraction when designing the program. **[2]**

**2.** Describe decomposition and explain how it leads to the use of procedures and functions. **[3]**

**3.** State what is meant by an algorithm. **[1]**

**4.** A program inputs the lengths of 20 planks of wood in centimetres, outputs how many are shorter than 150 cm, and outputs the length of the longest plank. Complete an identifier table for the variables the program needs. **[4]**

**5.** Write pseudocode for the algorithm in question 4. **[6]**

**6.** This structured English describes a login algorithm:

1. Set the number of attempts to 0.
2. Input a password and add 1 to the number of attempts.
3. Repeat step 2 until the password is "Kestrel7" or the number of attempts is 3.
4. If the password is "Kestrel7", output "Access granted"; otherwise output "Account locked".

Write the algorithm in pseudocode. **[5]**

**7.** Describe, symbol by symbol, a flowchart for the algorithm in question 6. Name each symbol used. **[5]**

**8.** The pseudocode below is intended to output the sum of the even numbers from 2 to Limit inclusive.

```
INPUT Limit
Sum ← 0
Number ← 2
WHILE Number < Limit
   Sum ← Sum + Number
   Number ← Number + 1
ENDWHILE
OUTPUT Sum
```

**(a)** Trace the algorithm for Limit = 6 and state the output. **[3]**
**(b)** Identify the **two** errors and write the corrected lines. **[2]**

**9.** A cinema's ticket price is set by these rules: under 12s pay 6.00; people aged 65 or over pay 7.00; everyone else pays 10.00, but students aged 12 to 64 pay 8.00. Write a logic statement in pseudocode that sets Price from Age and IsStudent. **[4]**

**10.** Use stepwise refinement to break down the task "Produce a weekly report of a shop's sales" into at least **two** levels of detail. **[4]**

---

## Answers

**1. (a)** Abstraction is removing (filtering out) details that are not needed to solve the problem [1], so that only the essential features are kept in the model [1].
**(b)** Include (any two): the name of each ride; the current queue length or waiting time; the time each ride takes; whether the ride is open [1]. Leave out (any two): the colour of the rides; the names of the staff; the manufacturer of the ride; the music played in the queue [1].
**(c)** Any two: the program is less complex, so it is easier and quicker to design and write [1]; it uses less memory / runs faster because it processes less data [1]; the solution focuses on what the visitor needs [1]; the model can be reused for similar problems [1].

**2.** Decomposition is breaking a problem down into smaller sub-problems [1], repeatedly, until each is small enough to solve on its own [1]. Each sub-problem can then be written as a separate module, a procedure or a function, which can be developed and tested separately (and reused or shared between programmers) [1].

**3.** A solution to a problem expressed as a sequence of defined steps [1].

**4.** One mark per correct row (data type and description both needed), maximum 4:

| Identifier | Data type | Description |
|---|---|---|
| PlankLength | REAL | Length of the current plank in cm |
| ShortCount | INTEGER | Number of planks shorter than 150 cm |
| Longest | REAL | Longest length found so far |
| Index | INTEGER | Loop counter from 1 to 20 |

**5.**

```
DECLARE PlankLength, Longest : REAL
DECLARE ShortCount, Index : INTEGER
ShortCount ← 0
Longest ← 0.0
FOR Index ← 1 TO 20
   INPUT PlankLength
   IF PlankLength < 150 THEN
      ShortCount ← ShortCount + 1
   ENDIF
   IF PlankLength > Longest THEN
      Longest ← PlankLength
   ENDIF
NEXT Index
OUTPUT "Planks shorter than 150 cm: ", ShortCount
OUTPUT "Longest plank: ", Longest
```

Marks: initialise ShortCount (and Longest) [1]; count-controlled loop for 20 planks [1]; INPUT inside the loop [1]; correct test and increment of ShortCount [1]; correct update of Longest [1]; both outputs after the loop [1]. (Initialising Longest to 0.0 is acceptable here because a length cannot be negative; setting it from the first plank is also correct.)

**6.**

```
DECLARE Password : STRING
DECLARE Attempts : INTEGER
Attempts ← 0
REPEAT
   INPUT Password
   Attempts ← Attempts + 1
UNTIL Password = "Kestrel7" OR Attempts = 3
IF Password = "Kestrel7" THEN
   OUTPUT "Access granted"
ELSE
   OUTPUT "Account locked"
ENDIF
```

Marks: Attempts initialised to 0 [1]; REPEAT ... UNTIL loop (post-condition, as the password is always input at least once) [1]; input and increment inside the loop [1]; correct compound UNTIL condition with OR [1]; IF ... ELSE with both outputs [1].

**7.** Terminator: START [1]. Process (rectangle): Attempts ← 0. Input/output (parallelogram): INPUT Password; process: Attempts ← Attempts + 1 [1]. Decision (diamond): "Password = "Kestrel7" OR Attempts = 3?", with the No exit returning to the INPUT symbol [1]. Decision (diamond): "Password = "Kestrel7"?"; Yes → output (parallelogram) "Access granted", No → output (parallelogram) "Account locked" [1]. Both paths join and end at a terminator: STOP [1].

**8. (a)**

| Limit | Number | Sum | Number < Limit? |
|---|---|---|---|
| 6 | 2 | 0 | TRUE |
| | 3 | 2 | TRUE |
| | 4 | 5 | TRUE |
| | 5 | 9 | TRUE |
| | 6 | 14 | FALSE |

Marks: Number values [1]; Sum values [1]; output **14** [1].

**(b)** `WHILE Number <= Limit` so that Limit itself is included [1]; `Number ← Number + 2` so only even numbers are added [1]. (Corrected, Limit = 6 gives 2 + 4 + 6 = 12.)

**9.**

```
IF Age < 12 THEN
   Price ← 6.00
ELSE
   IF Age >= 65 THEN
      Price ← 7.00
   ELSE
      IF IsStudent = TRUE THEN
         Price ← 8.00
      ELSE
         Price ← 10.00
      ENDIF
   ENDIF
ENDIF
```

Marks: under-12 condition [1]; 65 or over condition [1]; student condition tested only for ages 12 to 64 [1]; correct default of 10.00 [1].

**10.** One mark for a sensible level 1 breakdown, up to three marks for level 2 detail. For example:

1. Input the week's sales data → 1.1 Open the sales file; 1.2 Read each sale record until the end of the file.
2. Process the data → 2.1 Total the sales value for each day; 2.2 Find the best-selling product; 2.3 Calculate the weekly total.
3. Output the report → 3.1 Output a heading with the week's date; 3.2 Output each day's total; 3.3 Output the weekly total and best seller.

---

## Where marks are usually lost

- Abstraction answers that say "hiding" without saying details are removed because they are not needed.
- Loops with no input inside them, or with a FOR loop where the number of repetitions is not known.
- Conditions that miss a boundary, such as `< Limit` where `<= Limit` is needed.
- Python or other language syntax instead of Cambridge pseudocode.
- Flowchart decisions with unlabelled exits, or paths that never reach STOP.

## Frequently asked questions

**Why is REPEAT ... UNTIL the right loop for question 6?**
The password must be input at least once before it can be checked, and a post-condition loop always runs its body once before testing.

**Are trace tables in Topic 9?**
Tracing is a core Paper 2 skill used across Topics 9 to 12. Write each new value on a new row so the order of changes is clear.

**How strict is pseudocode marking?**
Marks go to the logic, but Cambridge expects its own keywords and the assignment arrow. Use only the functions given in the exam Insert.

## Official syllabus

Questions are written against Cambridge International AS & A Level Computer Science 9618, syllabus for 2026 and syllabus for 2027, 2028 and 2029, Topic 9, using the Cambridge 9618 Pseudocode Guide for Teachers. Examiner comments by series are on the [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
