---
title: "AQA A-Level Computer Science: Data Structures and Arrays — Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data structures"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "data-structures-7517"
description: "Original exam-style practice questions with full worked answers on the definition of a data structure and single- and multi-dimensional arrays for AQA A-Level Computer Science (7517), 3.2.1.1 and 3.2.1.2."
author: "marlbridge-academic-team"
publishedDate: 2026-09-03
featured: false
---
> **These are original questions written for Marlbridge**, in the style and at the
> standard of the examination. They are **not** reproduced past-paper questions —
> examination boards hold copyright in their own papers. Use these alongside the
> official past papers available free from your board.

Related: [Data Structures and Arrays study guide](/resources/a-level-aqa-computer-science-data-structures-and-arrays/) | [Data Structures and Arrays revision notes](/resources/aqa-a-level-computer-science-data-structures-revision-notes/)

---

## Section A


**1.** Give the specification's precise definition of a data structure. **[2]**

**2.** State what a 1-D array represents and what a 2-D array represents. **[2]**

## Section B

**3.** A program stores the number of goals scored by each of 11 players in a football team across a single match.

**(a)** State the dimensionality of array needed, and justify your choice. **[3]**
**(b)** Write pseudocode to declare this array and a FOR loop that calculates the total goals scored by the team. **[4]**

**4.** A program must store the temperature recorded at 3 different times of day (morning, afternoon, evening), for each of the 30 days in a month.

**(a)** State the dimensionality of array needed and what each index represents. **[3]**
**(b)** Explain why using 90 separate variables instead would be a poor design choice. **[2]**

**5.** Distinguish between an array's **dimensionality** and its **size**, giving an example of an array that is small in size but has more than one dimension. **[3]**

**6.** A student writes: "temperatures[7][3] is a 2-D array, so it must hold exactly 7 values."

**(a)** Explain what is wrong with this statement. **[2]**
**(b)** State how many individual values this array actually holds. **[1]**

**7.** Write pseudocode for nested FOR loops that visit every element of a 2-D array called grid, with dimensions grid[5][4], and set every element to zero. **[4]**

**8.** AQA's specification describes arrays as "(or equivalent)". Explain what this phrase means and why it is included. **[2]**

**9.** State the index number from which AQA's pseudocode conventions begin an array, and explain why this matters when writing a loop that must visit every element exactly once. **[3]**

---

## Answers


**1.** A **way of organising, storing and accessing data** [1] so that it can be **used efficiently for a given task** [1].

**2.** A 1-D array represents a **vector** — a single ordered list, each element accessed by one index [1]. A 2-D array represents a **matrix** — values arranged in rows and columns, each accessed by two indices [1].

**3. (a)** A **1-D array** [1], because the data is a single ordered list of 11 values, each naturally accessed by **one index** (the player number) [1], with no second dimension needed [1].
**(b)**
```
DECLARE goals : ARRAY[0:10] OF INTEGER
total <- 0
FOR i <- 0 TO 10
    total <- total + goals[i]
NEXT i
```
Correct declaration with 11 elements [1]; total initialised to 0 [1]; loop covering every index from 0 to 10 [1]; correct accumulation [1].

**4. (a)** A **2-D array**, e.g. temperatures[30][3] [1]. One index represents the **day (0-29)** [1] and the other represents the **time slot (0-2: morning/afternoon/evening)** [1].
**(b)** With 90 separate variables there is **no way to loop through the data using index logic** [1] — every reading would need its own uniquely named variable, making the program long, error-prone, and impossible to process systematically (e.g. calculating an average) without repeating code 90 times [1].

**5.** **Dimensionality** is how many indices are needed to locate one element; **size** is how many elements the array holds in total [1] [1]. Example: a **2×2 array is two-dimensional but small in size**, holding only 4 elements [1].

**6. (a)** The statement confuses **dimensionality with size** [1] — temperatures[7][3] being 2-D refers to needing two indices to locate an element, not to the total number of values stored [1].
**(b)** **21** (7 × 3) [1].

**7.**
```
FOR row <- 0 TO 4
    FOR col <- 0 TO 3
        grid[row][col] <- 0
    NEXT col
NEXT row
```
Outer loop over rows (0 to 4, since grid[5][4] has 5 rows) [1]; inner loop over columns (0 to 3) [1]; correct element assignment using both indices [1]; loops correctly nested and closed [1].

**8.** It means different programming languages implement the same underlying concept differently — for example, **Python's lists serve a similar role to arrays** [1]. It is included because the specification assesses the **underlying concept** (organising same-type data for indexed access), not the exact syntax of one specific language [1].

**9.** AQA's pseudocode conventions index arrays **from 0** [1]. This matters because a loop must run from **0 to (size − 1)**, not 1 to size, to visit every element exactly once [1] — using the wrong bounds either misses the last element or attempts to access an element that does not exist, causing an error [1].


---

## Where marks are usually lost

- Defining a data structure vaguely as "a way to store data" without mentioning organisation and efficient access for a task.
- Confusing an array's dimensionality (how many indices) with its size (how many elements) — the single most common error on this sub-topic.
- Using 1-based loop bounds when AQA's pseudocode indexes from 0, causing an off-by-one error.
- Justifying an array choice by saying "it fits" rather than explaining how the data will actually be accessed and what each index represents.
- Forgetting to close nested loops correctly, or reversing which loop should be outer and which inner when iterating row by row.

## Approaching "justify the structure" questions

Whenever a question describes a real scenario and asks which data structure to use, the mark scheme rewards three things in sequence: naming the structure (e.g. a 2-D array), stating how many dimensions it needs and what each index represents, and explaining how that structure supports the way the data will be accessed or processed (for example, looping through one row, one column, or the whole structure). Simply naming "an array" without this reasoning, even if it is the correct structure, typically earns only partial credit.
