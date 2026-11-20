---
title: "Cambridge IGCSE Computer Science (0478): Arrays -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 8: Programming"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 8.2
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-0478"
  - qualification: "igcse"
    topic: "programming-0478"
    subtopic: "arrays-0478"
description: "Revision notes for Cambridge IGCSE Computer Science 0478 section 8.2: array declaration, indexes, loops over 1D and 2D arrays, and common array algorithms."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
Condensed notes for syllabus section 8.2, Arrays: 1D and 2D arrays, indexes and loops.

## Four facts to start with

1. An **array** stores a fixed number of elements of the same data type under one name.
2. Each element is found using an **index**.
3. A 1D array needs one index; a 2D array needs two.
4. Loops, including **nested loops** for 2D arrays, read and write arrays.

## Key terms

| Term | Definition |
|---|---|
| Array | Data structure holding a fixed number of elements of the same type |
| Element | One item in an array |
| Index | Number that gives the position of an element |
| Lower bound / upper bound | First and last index |
| 1D array | List with one index |
| 2D array | Table with row and column indexes |
| Nested loop | Loop inside another loop |
| Linear search | Checking each element in turn until the value is found or the end is reached |

## Declaring and using arrays

| Task | Pseudocode |
|---|---|
| 1D declaration | `DECLARE Names : ARRAY[1:30] OF STRING` |
| 2D declaration | `DECLARE Grid : ARRAY[1:3, 1:3] OF CHAR` |
| Assign | `Names[1] ← "Ali"`, `Grid[2, 3] ← 'X'` |
| Variable index | `Names[Index + 1] ← Names[Index]` |
| Number of elements | upper − lower + 1 (1D); rows × columns (2D) |

## Standard loops

**Write** a 1D array: `FOR Index ← 1 TO 5` then `INPUT Marks[Index]` then `NEXT Index`.

**Total** a 1D array: set `Total ← 0`, then add `Marks[Index]` in the loop.

**2D array**: outer loop for rows, inner loop for columns.

```
FOR Row ← 1 TO 3
    FOR Column ← 1 TO 4
        Table[Row, Column] ← 0
    NEXT Column
NEXT Row
```

## Worked example: trace of a loop

```
Values[1] ← 4   Values[2] ← 7   Values[3] ← 2   Values[4] ← 9
Count ← 0
FOR Index ← 1 TO 4
    IF Values[Index] > 5
       THEN
         Count ← Count + 1
    ENDIF
NEXT Index
```

| Index | Values[Index] | Count |
|---|---|---|
| 1 | 4 | 0 |
| 2 | 7 | 1 |
| 3 | 2 | 1 |
| 4 | 9 | 2 |

Count finishes as 2.

## Worked example: maximum

Start `Highest ← Marks[1]`, loop from 2 to the upper bound and replace `Highest` whenever `Marks[Index]` is bigger. For 12, 18, 9, 20, 15 the answer is 20.

## Linear search outline

1. Set `Found ← FALSE` and `Index ← 1`.
2. Repeat while `Index` is within the array and `Found` is FALSE.
3. If `Marks[Index]` equals the search value, set `Found ← TRUE`; otherwise add 1 to `Index`.
4. Output the position or "Not found".

## 2D array example

| | Col 1 | Col 2 | Col 3 |
|---|---|---|---|
| Row 1 | 3 | 5 | 1 |
| Row 2 | 8 | 2 | 6 |

`Table[2, 3]` is 6. Total of row 1 is 9. Total of row 2 is 16. Total of all is 25.

## Zero or one

The first index may be 0 or 1. State it in the declaration. A 1D array `ARRAY[0:4]` has 5 elements, the same as `ARRAY[1:5]`.

## Which array to use

| Data | Structure |
|---|---|
| A list of 30 names | 1D array of STRING |
| Marks for 3 classes of 4 students | 2D array of INTEGER |
| Names and matching scores | Two 1D arrays with the same index |
| A game board | 2D array of CHAR |

## Common patterns at a glance

| Task | Idea |
|---|---|
| Total | Start at 0; add `Array[Index]` in a loop |
| Average | Total divided by number of elements |
| Highest | Start with the first element; replace when a bigger one is found |
| Count | Add 1 when the condition is true |
| Search | Compare each element; stop when found |
| Reverse output | Loop from the upper bound down to the lower bound with `STEP -1` |

## Exam traps

- **Index out of range.** Check the bounds.
- **Row and column swapped.**
- **Total not reset** in the right place for 2D arrays.
- **Loop limits wrong.** `1 TO 5` for five elements.
- **Mixed data types.** All elements are the same type.
- **Using the array name alone** when one element is needed.

## Self-test

1. What is an array?
2. How many elements are in `ARRAY[1:8]`?
3. How many elements are in `ARRAY[1:4, 1:5]`?
4. What does `Marks[3]` mean?
5. Why use a variable as an index?
6. Which loop type is normally used to read an array of known size?
7. How are two loops used for a 2D array?
8. What value is assigned in `Grid[2, 3] ← 'X'`, and where?
9. What is a linear search?
10. Why is a total reset inside the outer loop in a row-total program?

**Answers**

1. A data structure that holds a fixed number of elements of the same type under one name.
2. 8.
3. 20.
4. The element at index 3 of Marks.
5. So a loop can visit every element with the same code.
6. A count-controlled (FOR) loop.
7. The outer loop moves through the rows and the inner loop through the columns.
8. The character `X` is put in row 2, column 3.
9. Checking each element in turn until the value is found or the end is reached.
10. So each row's total starts from 0.

## Command words to expect

| Command word | What to write |
|---|---|
| State, Give, Identify | A short answer with no explanation |
| Define | A precise meaning |
| Describe | The main points or characteristics, or the steps in order |
| Explain | A reason or "how and why", supported with evidence from the question |
| Compare | Similarities and differences, naming both sides every time |
| Suggest | A sensible proposal that applies your knowledge to the situation given |
| Evaluate | A judgement based on advantages and disadvantages, ending with a conclusion |

## Next steps

Read the full explanations in the [Arrays study guide](/resources/cambridge-igcse-computer-science-0478-arrays/), then try the [Arrays practice questions](/resources/cambridge-igcse-computer-science-0478-arrays-practice/).

## Official syllabus

Cambridge IGCSE Computer Science (0478) syllabus for 2026, 2027 and 2028, section 8.2:
[official syllabus PDF](https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf).
