---
title: "Cambridge A Level Computer Science (9618): Arrays -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 10: Data Types and Structures"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 10.2
syllabusTopics:
  - qualification: "a-level"
    topic: "data-types-and-structures"
    subtopic: "arrays"
description: "Original questions with worked answers on array bounds, 2D arrays, bubble sort traces and linear search for Cambridge AS Computer Science 9618 10.2."
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

Related: [Arrays study guide](/resources/cambridge-a-level-computer-science-9618-arrays/) · [Arrays revision notes](/resources/cambridge-a-level-computer-science-9618-arrays-revision-notes/) · [Data Types and Structures practice questions](/resources/cambridge-a-level-computer-science-data-types-and-structures-practice/)

These questions practise section 10.2 of Cambridge International AS & A Level Computer Science 9618. Write pseudocode in the style of the Cambridge Pseudocode Guide. All scenarios are invented. Answers are in mark-scheme style, with [1] for each creditable point.

---

## Section A

**1.** An array is declared as `DECLARE Readings : ARRAY[0:23] OF REAL`. State its lower bound, its upper bound and the number of elements. **[3]**

**2.** For each task, state whether a 1D or a 2D array is more suitable, and give a reason.

**(a)** storing the number of visitors to a museum on each day of one year **[1]**

**(b)** storing the number of visitors to each of 6 galleries on each day of one year **[1]**

**3.** `Grid` is declared as `ARRAY[1:5, 1:4] OF INTEGER`, with rows first. Which statement sets the value in row 3, column 2 to 0?

A: Grid[2, 3] ← 0

B: Grid(3, 2) = 0

C: Grid[3, 2] ← 0

D: Grid ← 0

**[1]**

**4.** Explain why a temporary variable is needed when two array elements are swapped. **[2]**

**5.** State the largest number of comparisons a linear search can make on an array of 200 elements, and when this happens. **[2]**

**6.** Explain the purpose of the Boolean variable Swapped in a bubble sort. **[2]**

## Section B

**7.** The array `Nums[1:5]` contains 31, 8, 25, 14, 3. A bubble sort with a Swapped flag and a pass that shrinks by one each time sorts it into ascending order.

**(a)** Show the contents of the array after each pass. **[4]**

**(b)** State the total number of comparisons made. **[1]**

**8.** A teacher records the mark of each of 30 students in each of 5 tests.

**(a)** Write a declaration for a suitable array Marks. **[2]**

**(b)** Write pseudocode to output the total mark of each student. **[4]**

**9.** `Readings[1:100]` holds integer sensor readings. Write pseudocode that inputs a value and outputs the index of **every** element equal to it, or the message "Not found" if there are none. **[5]**

**10.** The bubble sort below sorts `Names[1:20]` into alphabetical order. Identify the change needed to sort into reverse alphabetical order, and explain why the algorithm still works with strings. **[2]**

```
Last ← 20
REPEAT
   Swapped ← FALSE
   FOR Index ← 1 TO Last - 1
      IF Names[Index] > Names[Index + 1] THEN
         Temp ← Names[Index]
         Names[Index] ← Names[Index + 1]
         Names[Index + 1] ← Temp
         Swapped ← TRUE
      ENDIF
   NEXT Index
   Last ← Last - 1
UNTIL Swapped = FALSE OR Last = 1
```

**11.** `Heat : ARRAY[1:6, 1:6] OF INTEGER` holds temperatures from a grid of sensors. Write pseudocode to find and output the highest temperature and the row and column where it occurs (the first such position if there is a tie). **[5]**

**12.** A programmer wants to store each member's name and age in a single 2D array. Explain why this is not possible, and state a suitable alternative. **[2]**

---

## Answers

**1.** Lower bound 0 [1]; upper bound 23 [1]; 24 elements [1].

**2. (a)** 1D: one value per day, so one index is enough [1].

**(b)** 2D: each value needs two indexes, the gallery and the day [1].

**3.** **C** [1].

**4.** The first assignment overwrites one of the two values [1]; the temporary variable keeps a copy of it so it can be put into the other position [1].

**5.** 200 comparisons [1]; when the item is in the last position or is not in the array [1].

**6.** It records whether any swap was made during a pass [1]; if a pass makes no swaps the array is sorted and the algorithm stops early, saving unnecessary passes [1].

**7. (a)** Pass 1: 8, 25, 14, 3, 31 [1]. Pass 2: 8, 14, 3, 25, 31 [1]. Pass 3: 8, 3, 14, 25, 31 [1]. Pass 4: 3, 8, 14, 25, 31 [1].

**(b)** 4 + 3 + 2 + 1 = **10** [1]. (After pass 4, Last becomes 1, so the loop ends.)

**8. (a)** `DECLARE Marks : ARRAY[1:30, 1:5] OF INTEGER` (or REAL) [1], with the correct bounds for students and tests [1].

**(b)**

```
FOR Student ← 1 TO 30
   Total ← 0
   FOR Test ← 1 TO 5
      Total ← Total + Marks[Student, Test]
   NEXT Test
   OUTPUT "Student ", Student, ": ", Total
NEXT Student
```

Outer loop over students [1]; Total reset to 0 inside the outer loop [1]; inner loop adding each test mark [1]; OUTPUT after the inner loop [1].

**9.**

```
INPUT Target
Found ← FALSE
FOR Index ← 1 TO 100
   IF Readings[Index] = Target THEN
      OUTPUT Index
      Found ← TRUE
   ENDIF
NEXT Index
IF Found = FALSE THEN
   OUTPUT "Not found"
ENDIF
```

INPUT of the target [1]; Found initialised to FALSE [1]; loop over all 100 elements (it must not stop at the first match) [1]; compare and output the index, setting Found [1]; "Not found" output after the loop if Found is FALSE [1].

**10.** Change `>` to `<` in the IF condition [1]. Strings can be compared with `>` and `<`, which compare them character by character in alphabetical (character code) order, so the same swapping logic applies [1].

**11.**

```
MaxTemp ← Heat[1, 1]
MaxRow ← 1
MaxCol ← 1
FOR Row ← 1 TO 6
   FOR Col ← 1 TO 6
      IF Heat[Row, Col] > MaxTemp THEN
         MaxTemp ← Heat[Row, Col]
         MaxRow ← Row
         MaxCol ← Col
      ENDIF
   NEXT Col
NEXT Row
OUTPUT MaxTemp, " at row ", MaxRow, " column ", MaxCol
```

Maximum initialised to the first element (or a very low value) [1]; nested loops over rows and columns [1]; comparison using `>` so the first position is kept in a tie [1]; record value, row and column when a new maximum is found [1]; output after both loops [1].

**12.** Every element of an array must have the same data type, but a name is a STRING and an age an INTEGER [1]. Use an array of records with Name and Age fields (or two parallel 1D arrays) [1].

---

## Where marks are usually lost

- Showing only the final sorted array instead of the array after each pass.
- Stopping a search at the first match when every match is needed.
- Resetting a total outside the outer loop.
- Using `=` for assignment or separate bracket pairs such as `Grid[Row][Col]` that the Pseudocode Guide does not use.
- Using `>=` when the question asks for the first position in a tie.
