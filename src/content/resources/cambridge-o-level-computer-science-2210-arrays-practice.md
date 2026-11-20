---
title: "Cambridge O Level Computer Science (2210): Arrays -- Practice Questions"
seoTitle: "Cambridge O Level CS 2210 Arrays Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 8 – Programming"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 8.2
syllabusTopics:
  - qualification: "o-level"
    topic: "programming-2210"
  - qualification: "o-level"
    topic: "programming-2210"
    subtopic: "arrays-2210"
description: "Original questions with answers on Cambridge O Level Computer Science 2210 section 8.2: declaring arrays, using indexes, loops and nested loops on one-dimensional and two-dimensional arrays."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs. Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Arrays study guide](/resources/cambridge-o-level-computer-science-2210-arrays/) and [Arrays revision notes](/resources/cambridge-o-level-computer-science-2210-arrays-revision-notes/)

---

## Section A

**1.** State what is meant by an array. **[1]**

**2.** Write a declaration for an array called Names that stores 25 strings, using indexes 1 to 25. **[2]**

**3.** State the number of elements in each array.

**(a)** `ARRAY[0:9] OF INTEGER` **[1]**

**(b)** `ARRAY[1:3, 1:6] OF REAL` **[1]**

**4.** The array Temp[1:6] holds the values 14, 18, 21, 19, 25 and 17 in index order 1 to 6. State the value of Temp[3] and the value of Temp[Position + 2] when Position is 4. **[2]**

## Section B

**5.** Study the pseudocode. The array Temp is as in Question 4.

```
Total ← 0
FOR Index ← 1 TO 6
   IF Temp[Index] > 18
      THEN
         Total ← Total + Temp[Index]
   ENDIF
NEXT Index
OUTPUT Total
```

**(a)** Complete a trace of the algorithm, showing the value of Total after each pass of the loop. **[3]**

**(b)** State the value that is output. **[1]**

**(c)** State the purpose of the algorithm. **[1]**

**6.** Eight scores are entered by the user. Write pseudocode that stores the scores in an array called Scores and then outputs the highest score. **[5]**

**7.** The array Marks[1:10] holds ten integers. Write pseudocode to output the values in reverse order, starting with Marks[10]. **[3]**

**8.** A cinema has 4 rows of 6 seats. The array Seats[1:4, 1:6] stores TRUE if a seat is booked and FALSE if it is empty.

**(a)** Write the declaration for the array. **[2]**

**(b)** Write a statement that marks the seat in row 2, seat 5 as booked. **[1]**

**(c)** Write pseudocode that uses nested loops to count and output the number of booked seats. **[5]**

**9.** The two-dimensional array Grid[1:2, 1:3] holds these values.

| | Column 1 | Column 2 | Column 3 |
|---|---|---|---|
| Row 1 | 2 | 4 | 6 |
| Row 2 | 1 | 3 | 5 |

```
FOR Column ← 1 TO 3
   Sum ← 0
   FOR Row ← 1 TO 2
      Sum ← Sum + Grid[Row, Column]
   NEXT Row
   OUTPUT Sum
NEXT Column
```

**(a)** State the three values that are output, in order. **[2]**

**(b)** State how many times the statement `Sum ← Sum + Grid[Row, Column]` is run. **[1]**

**10.** A programmer needs to store the names of 30 students. Explain two advantages of using an array rather than 30 separate variables. **[2]**

**11.** A programmer writes the following pseudocode for an array declared as `Prices[1:10]`.

```
FOR Index ← 1 TO 11
   INPUT Prices[Index]
NEXT Index
```

**(a)** Identify the error. **[1]**

**(b)** Explain what is likely to happen when the program is run. **[1]**

**(c)** Write the corrected loop header. **[1]**

**12.** A noughts and crosses board is stored in the array Board[1:3, 1:3] of CHAR.

**(a)** Write pseudocode to set every element of the array to the space character ' '. **[3]**

**(b)** State what the statement `Board[2, 2] ← 'X'` does. **[1]**

**13.** Explain how using a variable as an index makes it possible to process every element of an array with a loop. **[2]**

---

## Answers

**1.** A fixed-length structure that holds several values of the same data type under one name, each found by an index [1].

**2.** `DECLARE Names : ARRAY[1:25] OF STRING` [2]. Award 1 mark for the correct keywords and structure, and 1 mark for the correct bounds and data type.

**3. (a)** 10 [1].
**(b)** 18 (3 rows × 6 columns) [1].

**4.** Temp[3] is 21 [1]. Temp[Position + 2] is Temp[6], which is 17 [1].

**5. (a)** Index 1: 14 is not greater than 18, so Total stays 0 [1]. Indexes 2 to 3: 18 is not greater than 18 so Total stays 0, then 21 is added, giving 21 [1]. Indexes 4 to 6: 19 is added, giving 40; 25 is added, giving 65; 17 is not added, so Total stays 65 [1].
**(b)** 65 [1].
**(c)** It adds up all the temperatures that are greater than 18 / the total of the values above 18 [1].

**6.** Sample answer:

```
DECLARE Scores : ARRAY[1:8] OF INTEGER
FOR Index ← 1 TO 8
   INPUT Scores[Index]
NEXT Index
Highest ← Scores[1]
FOR Index ← 2 TO 8
   IF Scores[Index] > Highest
      THEN
         Highest ← Scores[Index]
   ENDIF
NEXT Index
OUTPUT Highest
```

Marks: array with correct bounds [1]; loop to input all eight scores into the array elements [1]; Highest set to the first score (or a very low value) [1]; loop that compares each element with Highest and replaces it when larger [1]; output of Highest after the loop [1].

**7.** Sample answer:

```
FOR Index ← 10 TO 1 STEP -1
   OUTPUT Marks[Index]
NEXT Index
```

Marks: loop from 10 down to 1 [1]; STEP -1 [1]; output of Marks[Index] [1].

**8. (a)** `DECLARE Seats : ARRAY[1:4, 1:6] OF BOOLEAN` [2]. Award 1 mark for correct bounds on both dimensions and 1 mark for BOOLEAN.
**(b)** `Seats[2, 5] ← TRUE` [1].
**(c)** Sample answer:

```
BookedCount ← 0
FOR Row ← 1 TO 4
   FOR Seat ← 1 TO 6
      IF Seats[Row, Seat] = TRUE
         THEN
            BookedCount ← BookedCount + 1
      ENDIF
   NEXT Seat
NEXT Row
OUTPUT BookedCount
```

Marks: counter set to 0 before the loops [1]; outer loop for rows 1 to 4 [1]; inner loop for seats 1 to 6 [1]; test of the element with both indexes and the counter increased [1]; output after both loops [1].

**9. (a)** 3, 7, 11 [2]. Award 1 mark for any two correct values.
**(b)** 6 times (3 columns × 2 rows) [1].

**10.** One mark for each: one name is used for all the values, so there are fewer identifiers to declare [1]; a loop can process all the elements with the same short block of code, so the program is shorter and easier to change [1]. Accept: the number of students can be changed by altering the bounds.

**11. (a)** The loop goes to 11 but the array only has indexes 1 to 10 [1].
**(b)** The program will try to store a value outside the array, so a run-time error occurs on the eleventh pass / the program stops with an index error [1].
**(c)** `FOR Index ← 1 TO 10` [1].

**12. (a)** Sample answer:

```
FOR Row ← 1 TO 3
   FOR Column ← 1 TO 3
      Board[Row, Column] ← ' '
   NEXT Column
NEXT Row
```

Marks: nested loops with correct ranges [1]; correct use of Board[Row, Column] [1]; assignment of the space character [1].
**(b)** It stores the character 'X' in the element in row 2, column 2 (the middle of the board) [1].

**13.** The index in the square brackets can be a variable [1], so as the loop variable changes on each pass, a different element is selected, and the same statement works through every element [1].

---

## Where marks are usually lost

- Question 2: the bounds written the wrong way, such as `ARRAY[25]`, or the data type missing.
- Question 5: treating 18 as greater than 18.
- Question 6: starting Highest at 0, which is acceptable here only because scores are not negative. Starting with the first element is safer.
- Question 7: ending the loop at 0 instead of 1.
- Question 8: swapping row and column, or leaving out the declaration of the counter.
- Question 9: working across the rows instead of down the columns.
- Question 11: changing the array bounds instead of the loop. The array was declared with ten elements.
- Question 12: using only one loop for a two-dimensional array.

## Checking a nested loop

Count the passes. The body of the inner loop must run rows × columns times. If your loops give a different number, one of the ranges is wrong.
