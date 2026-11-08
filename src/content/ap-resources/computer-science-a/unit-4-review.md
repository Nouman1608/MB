---
resourceId: "mb-ap-csa-u4-review"
title: "Data Collections: Mixed Unit Review (Computer Science A Unit 4)"
description: "Big ideas, a decision table for every Unit 4 tool, and six original multi-topic questions on files, lists, 2D arrays, searching, sorting and recursion, with worked solutions and rubrics."
course: "computer-science-a"
unit: 4
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have studied Topics 4.1 to 4.17"
  - "You have tried the Unit 4 diagnostic and closed any gaps it showed"
learningObjectives:
  - "Connect the ideas of Unit 4: data ethics, arrays, files, wrapper classes, ArrayList, 2D arrays, searching, sorting and recursion"
  - "Choose the right collection, traversal and algorithm for a task and justify the choice"
  - "Answer multi-part questions that move between reading data, storing it, processing it and searching or sorting it"
  - "Trace recursive and iterative code and write short methods that return the results"
skills: ["2", "3", "4", "5"]
studyMinutes: 75
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
prerequisiteResources: ["mb-ap-csa-u4-diagnostic"]
related: ["mb-ap-csa-u4-diagnostic", "mb-ap-csa-4.6-checklist", "mb-ap-csa-4.7-checklist", "mb-ap-csa-4.8-checklist", "mb-ap-csa-4.9-checklist", "mb-ap-csa-4.10-checklist", "mb-ap-csa-4.11-checklist", "mb-ap-csa-4.12-checklist", "mb-ap-csa-4.13-checklist", "mb-ap-csa-4.14-checklist", "mb-ap-csa-4.15-checklist", "mb-ap-csa-4.16-checklist", "mb-ap-csa-4.17-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Most Unit 4 algorithms are a traversal plus a small piece of state; the start value and the loop bounds cause most bugs."
  - "Never remove from an ArrayList in a forward loop without compensating, and never add or remove inside an enhanced for loop."
  - "Linear search works on any order; binary search needs sorted data; merge sort is recursive, with a split step and a merge step."
  - "Recursion needs a base case and a call that moves towards it; each call has its own variables."
  - "Collecting personal data risks privacy, and a data set may not suit a question it was not collected for."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Read the big ideas and the decision table, then try the six questions without notes. Each combines two or more Unit 4 topics.

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a **suggested Marlbridge rubric**, not official scoring. Code was compiled and run, and the outputs quoted come from those runs. No calculator is needed.

## Big ideas of the unit

1. **Data collections hold related values under one name.** An array has a fixed size; an `ArrayList` can grow and shrink; a 2D array is an array of arrays (rows of columns). A file holds data that outlasts the program.
2. **Most algorithms are a traversal plus a little state.** A loop visits elements; a variable holds the best so far, a running total, a count or a flag. The starting value and the loop bounds are where most bugs live.
3. **Changing a collection while you traverse it is dangerous.** Removing from an `ArrayList` in a forward loop skips the element that slides into the gap; fix it by looping backwards or holding the index still. Do not add or remove inside an enhanced for loop.
4. **References, not copies.** A 2D array's rows, an `ArrayList` variable and an enhanced-for variable over objects all involve references; assignment copies the reference, not the data.
5. **Search and sort have costs.** Linear search works on any order and may check every element; binary search needs sorted data and halves the range each time. Selection and insertion sort work with loops; merge sort uses recursion.
6. **Recursion is repetition with a base case.** Each call has its own variables; trace down to the base case and back up. Any recursion can be a loop and vice versa; the exam asks you to trace recursive code, not write it.
7. **Data has consequences.** Collecting personal data risks privacy, and data sets can be biased, incomplete or unsuitable for a different question.

## Decision table: which tool for which job?

| You need to... | Use | Watch out for |
|---|---|---|
| Keep data after the program ends | text file with `File` and `Scanner` ([Topic 4.6](/advanced-course-resources/computer-science-a/4-6-using-text-files-study-guide/)) | `throws IOException`; `hasNext()` loop; `close()` |
| Turn text into a number | `Integer.parseInt`, `Double.parseDouble` ([Topic 4.7](/advanced-course-resources/computer-science-a/4-7-wrapper-classes-study-guide/)) | `NumberFormatException`; no `Double d = 7;` |
| Hold a list whose size changes | `ArrayList<E>` ([Topic 4.8](/advanced-course-resources/computer-science-a/4-8-arraylist-methods-study-guide/)) | indices 0 to `size() - 1`; `set` does not change the size |
| Visit every element of a list | indexed or enhanced for ([Topic 4.9](/advanced-course-resources/computer-science-a/4-9-arraylist-traversals-study-guide/)) | no add or remove inside enhanced for |
| Remove matches from a list | backward loop or held index ([Topic 4.9](/advanced-course-resources/computer-science-a/4-9-arraylist-traversals-study-guide/)) | skipped elements |
| Maximum, sum, count, any, all | traversal pattern ([Topic 4.5](/advanced-course-resources/computer-science-a/4-5-implementing-array-algorithms-study-guide/) and [Topic 4.10](/advanced-course-resources/computer-science-a/4-10-implementing-arraylist-algorithms-study-guide/)) | start values; integer division; empty list |
| Store a table | 2D array ([Topic 4.11](/advanced-course-resources/computer-science-a/4-11-2d-array-creation-access-study-guide/)) | `[row][col]`; `length` and `[0].length` |
| Visit every cell | nested loops ([Topic 4.12](/advanced-course-resources/computer-science-a/4-12-2d-array-traversals-study-guide/)) | row-major or column-major; bounds |
| Row, column or table results | 2D algorithms ([Topic 4.13](/advanced-course-resources/computer-science-a/4-13-implementing-2d-array-algorithms-study-guide/)) | per-row accumulators; saved element in a rotation |
| Find a value in any collection | linear search ([Topic 4.14](/advanced-course-resources/computer-science-a/4-14-searching-algorithms-study-guide/)) | `-1` after the loop; `equals` for Strings |
| Order a collection | selection or insertion sort ([Topic 4.15](/advanced-course-resources/computer-science-a/4-15-sorting-algorithms-study-guide/)) | what each pass guarantees |
| Find a value in a sorted collection quickly | binary search ([Topic 4.17](/advanced-course-resources/computer-science-a/4-17-recursive-searching-sorting-study-guide/)) | sorted data only; `mid + 1` and `mid - 1` |
| Sort large data efficiently | merge sort ([Topic 4.17](/advanced-course-resources/computer-science-a/4-17-recursive-searching-sorting-study-guide/)) | split then merge; left half first |
| Understand a recursive method | trace with a call stack ([Topic 4.16](/advanced-course-resources/computer-science-a/4-16-recursion-study-guide/)) | base case; own variables per call |
| Judge a data set or a program's effects | ethics and data quality ([Topic 4.1](/advanced-course-resources/computer-science-a/4-1-ethical-social-issues-data-collection-study-guide/) and [Topic 4.2](/advanced-course-resources/computer-science-a/4-2-introduction-using-data-sets-study-guide/)) | privacy, bias, incomplete data |

## Question 1 (files, wrapper classes, ArrayList · 4.6, 4.7, 4.8, 4.10)

A file `marks.csv` has one line per student in the form `name,score`, for example `Ana,70`. The file holds `Ana,70`, `Ben,85`, `Cy,60` and `Dee,90`, one per line.

(a) Write `ArrayList<Integer> readScores(String fileName)`, which returns the scores in file order.

(b) Write `int countAboveAverage(ArrayList<Integer> scores)`, which returns how many scores are strictly above the mean (0 for an empty list).

(c) Give the list returned for the file above and the value of `countAboveAverage` for it.

<details>
<summary>Answer and explanation</summary>

(a)

```java
public static ArrayList<Integer> readScores(String fileName) throws IOException
{
    ArrayList<Integer> scores = new ArrayList<Integer>();
    Scanner in = new Scanner(new File(fileName));
    while (in.hasNext())
    {
        String[] parts = in.nextLine().split(",");
        scores.add(Integer.parseInt(parts[1]));
    }
    in.close();
    return scores;
}
```

(b)

```java
public static int countAboveAverage(ArrayList<Integer> scores)
{
    if (scores.size() == 0)
    {
        return 0;
    }
    int sum = 0;
    for (int s : scores)
    {
        sum += s;
    }
    double avg = (double) sum / scores.size();
    int count = 0;
    for (int s : scores)
    {
        if (s > avg)
        {
            count++;
        }
    }
    return count;
}
```

(c) The list is `[70, 85, 60, 90]`; the mean is 305 / 4 = 76.25; the scores above it are 85 and 90, so the result is **2** (run and confirmed). Autoboxing puts each `int` into the list and unboxing returns it in the enhanced for loop.

**Suggested Marlbridge rubric (8 points)**

| Point | Award for |
|---|---|
| 1 | (a) `throws IOException`, `Scanner` built from a `File` |
| 2 | (a) `hasNext()` loop reading one line per pass with `nextLine()` |
| 3 | (a) `split(",")` then `Integer.parseInt` of the second piece |
| 4 | (a) adds each score to an `ArrayList`, closes the Scanner, returns the list |
| 5 | (b) guard for an empty list (no division by zero) |
| 6 | (b) mean computed as a `double` (cast before dividing) |
| 7 | (b) counts elements strictly greater than the mean |
| 8 | (c) both results correct: `[70, 85, 60, 90]` and 2 |

Topic checks: [Topic 4.6](/advanced-course-resources/computer-science-a/4-6-using-text-files-study-guide/), [Topic 4.7](/advanced-course-resources/computer-science-a/4-7-wrapper-classes-study-guide/), [Topic 4.8](/advanced-course-resources/computer-science-a/4-8-arraylist-methods-study-guide/) and [Topic 4.10](/advanced-course-resources/computer-science-a/4-10-implementing-arraylist-algorithms-study-guide/).
</details>

## Question 2 (ArrayList, searching, recursion · 4.10, 4.14, 4.17)

`list` is the sorted `ArrayList<Integer>` `[3, 8, 12, 15, 21, 27]`. The method `insertSorted(list, 18)` inserts 18 so that the list stays in ascending order.

(a) Give the list after the insertion and the index where 18 is inserted.

(b) Trace a binary search of the new list for 21: give `low`, `high`, `mid` and the value at `mid` at each step, and the result.

(c) Trace a binary search for 10 and state the result. Explain why a linear search would not need the list to be sorted.

<details>
<summary>Answer and explanation</summary>

(a) The insertion loop passes 3, 8, 12 and 15 (each less than 18) and stops at index 4, where 21 is not less than 18. `add(4, 18)` gives `[3, 8, 12, 15, 18, 21, 27]`.

(b) The list now has 7 elements (indices 0 to 6).

| Step | `low` | `high` | `mid` | value at `mid` | Decision |
|---|---|---|---|---|---|
| 1 | 0 | 6 | 3 | 15 | 15 < 21, so `low = 4` |
| 2 | 4 | 6 | 5 | 21 | found: return 5 |

The result is 5 after two comparisons (run and confirmed).

(c) For 10:

| Step | `low` | `high` | `mid` | value at `mid` | Decision |
|---|---|---|---|---|---|
| 1 | 0 | 6 | 3 | 15 | 15 > 10, so `high = 2` |
| 2 | 0 | 2 | 1 | 8 | 8 < 10, so `low = 2` |
| 3 | 2 | 2 | 2 | 12 | 12 > 10, so `high = 1` |
| 4 | 2 | 1 | | | `low > high`: return -1 |

The result is -1 after three comparisons. A linear search checks each element in turn for equality (or a property), so it does not rely on order; binary search relies on order to discard half of the range after each comparison.

**Suggested Marlbridge rubric (7 points)**

| Point | Award for |
|---|---|
| 1 | (a) final list correct |
| 2 | (a) index 4 |
| 3 | (b) first step `mid` 3 (value 15) and `low` becomes 4 |
| 4 | (b) second step `mid` 5 (value 21) and result 5 |
| 5 | (c) first two steps correct (mid 3 then mid 1) |
| 6 | (c) third step mid 2 and result -1 |
| 7 | (c) explains that linear search needs no sorted data |

Topic checks: [Topic 4.10](/advanced-course-resources/computer-science-a/4-10-implementing-arraylist-algorithms-study-guide/), [Topic 4.14](/advanced-course-resources/computer-science-a/4-14-searching-algorithms-study-guide/) and [Topic 4.17](/advanced-course-resources/computer-science-a/4-17-recursive-searching-sorting-study-guide/).
</details>

## Question 3 (2D arrays · 4.11, 4.12, 4.13)

`t` is the 3-by-4 table `{ {80, 70, 90, 60}, {75, 85, 65, 95}, {88, 92, 79, 81} }`. Each row is a student and each column is a test.

(a) Write `double[] testAverages(int[][] s)`, which returns the mean score for each test (column).

(b) Write `int bestStudent(int[][] s)`, which returns the index of the row with the highest total (the first such row if there is a tie).

(c) Give the results for `t`.

<details>
<summary>Answer and explanation</summary>

(a)

```java
public static double[] testAverages(int[][] s)
{
    double[] avg = new double[s[0].length];
    for (int c = 0; c < s[0].length; c++)
    {
        int sum = 0;
        for (int r = 0; r < s.length; r++)
        {
            sum += s[r][c];
        }
        avg[c] = (double) sum / s.length;
    }
    return avg;
}
```

(b)

```java
public static int bestStudent(int[][] s)
{
    int best = 0;
    int bestTotal = -1;
    for (int r = 0; r < s.length; r++)
    {
        int total = 0;
        for (int c = 0; c < s[r].length; c++)
        {
            total += s[r][c];
        }
        if (total > bestTotal)
        {
            bestTotal = total;
            best = r;
        }
    }
    return best;
}
```

(c) Column sums are 243, 247, 234 and 236, so the test averages are 81.0, 82.33333333333333, 78.0 and 78.66666666666667. Row totals are 300, 320 and 340, so `bestStudent(t)` is 2 (run and confirmed).

**Suggested Marlbridge rubric (8 points)**

| Point | Award for |
|---|---|
| 1 | (a) result array of length `s[0].length` (one per column) |
| 2 | (a) column-wise traversal with the sum reset for each column |
| 3 | (a) mean as a `double` with a cast before dividing by the number of rows |
| 4 | (a) returns the array |
| 5 | (b) nested loops with a total reset for each row |
| 6 | (b) tracks the best row index and best total with a strict comparison |
| 7 | (b) returns the index |
| 8 | (c) both results correct |

Topic checks: [Topic 4.11](/advanced-course-resources/computer-science-a/4-11-2d-array-creation-access-study-guide/), [Topic 4.12](/advanced-course-resources/computer-science-a/4-12-2d-array-traversals-study-guide/) and [Topic 4.13](/advanced-course-resources/computer-science-a/4-13-implementing-2d-array-algorithms-study-guide/).
</details>

## Question 4 (sorting and recursion · 4.15, 4.16, 4.17)

`x` holds `{9, 6, 7, 1, 5}`.

(a) Give the array after each of the first two passes of selection sort.

(b) Give the array after each of the first two passes of insertion sort (keys at indices 1 and 2).

(c) State what `countBig(x, 0)` returns and explain how the parameter `i` records progress.

```java
public static int countBig(int[] a, int i)
{
    if (i == a.length)
    {
        return 0;
    }
    if (a[i] > 5)
    {
        return 1 + countBig(a, i + 1);
    }
    return countBig(a, i + 1);
}
```

<details>
<summary>Answer and explanation</summary>

(a) Pass 1 swaps the minimum 1 (index 3) with the 9: `1, 6, 7, 9, 5`. Pass 2 finds the minimum of the rest, 5 (index 4), and swaps it with the 6: `1, 5, 7, 9, 6`.

(b) Pass 1 inserts 6 before 9: `6, 9, 7, 1, 5`. Pass 2 inserts 7 between 6 and 9: `6, 7, 9, 1, 5`. (Run and confirmed.) The two sorts differ: after two passes the selection sort has the two smallest values in final places, while the insertion sort's first three values are only sorted among themselves.

(c) `countBig(x, 0)` returns **3**. The calls are `i` = 0 (9 > 5: 1 plus the rest), `i` = 1 (6 > 5), `i` = 2 (7 > 5), `i` = 3 (1: not counted), `i` = 4 (5 is not greater than 5: not counted), `i` = 5 (equals the length: base case, 0). The parameter `i` is the position being examined; it grows by one per call until it reaches the length, like a loop index.

**Suggested Marlbridge rubric (7 points)**

| Point | Award for |
|---|---|
| 1 | (a) after pass 1: `1, 6, 7, 9, 5` |
| 2 | (a) after pass 2: `1, 5, 7, 9, 6` |
| 3 | (b) after pass 1: `6, 9, 7, 1, 5` |
| 4 | (b) after pass 2: `6, 7, 9, 1, 5` |
| 5 | (c) result 3 |
| 6 | (c) identifies the base case `i == a.length` |
| 7 | (c) explains `i` as the progress parameter |

Topic checks: [Topic 4.15](/advanced-course-resources/computer-science-a/4-15-sorting-algorithms-study-guide/), [Topic 4.16](/advanced-course-resources/computer-science-a/4-16-recursion-study-guide/) and [Topic 4.17](/advanced-course-resources/computer-science-a/4-17-recursive-searching-sorting-study-guide/).
</details>

## Question 5 (data, ethics, searching · 4.1, 4.2, 4.14)

A fictional library keeps a data set of every borrower's name, address, member number and the titles they have borrowed.

(a) Describe **two** privacy risks of collecting and storing this data, and one step the programmers could take to safeguard it.

(b) A teacher proposes using this data set to estimate how many books pupils in another country read each year. Explain why this data set may not be appropriate for that question.

(c) Describe in words how a program could find a borrower from a member number stored in an `ArrayList<Integer>` of member numbers, and say what it should return if the number is not present.

<details>
<summary>Answer and explanation</summary>

(a) Any two of: the records could be leaked or stolen, exposing names and addresses; the titles borrowed can reveal sensitive personal interests or beliefs; the data might be kept longer than needed or used for purposes borrowers did not agree to, such as marketing; combining the data with other data sets could identify individuals. A safeguard: collect only the data needed, restrict who can access it, protect it (for example by encryption), and delete it when it is no longer required.

(b) The contents of a data set relate to a specific question and may not give correct answers for a different one. This data set describes borrowers of one library, who are probably not representative of pupils in another country, and it records borrowing, not all reading. Using it to extrapolate would risk biased conclusions.

(c) Use a linear search: traverse the list from the first index, compare each member number with the target using a value comparison, and return the index as soon as one matches. If every element has been checked without a match, return -1 (after the loop). The list does not have to be sorted. (Binary search would be faster for a long sorted list.)

**Suggested Marlbridge rubric (6 points)**

| Point | Award for |
|---|---|
| 1 | (a) first privacy risk, explained |
| 2 | (a) second, distinct privacy risk |
| 3 | (a) a sensible safeguard |
| 4 | (b) says the data set relates to a different population or purpose and may be unsuitable or biased for the question |
| 5 | (c) linear search from the start with an equality test, returning the index when found |
| 6 | (c) returns -1 only after checking every element |

Topic checks: [Topic 4.1](/advanced-course-resources/computer-science-a/4-1-ethical-social-issues-data-collection-study-guide/), [Topic 4.2](/advanced-course-resources/computer-science-a/4-2-introduction-using-data-sets-study-guide/) and [Topic 4.14](/advanced-course-resources/computer-science-a/4-14-searching-algorithms-study-guide/).
</details>

## Question 6 (2D array, ArrayList and arrays together · 4.5, 4.8, 4.12)

(a) Write `ArrayList<Integer> evens(int[][] m)`, which returns the even values of `m` in row-major order.

(b) Write `int[] toArray(ArrayList<Integer> list)`, which returns a new array holding the same values in the same order.

(c) For `m` = `{ {1, 2, 3}, {4, 5, 6}, {7, 8, 9} }` give the result of `evens(m)` and of `toArray(evens(m))`.

<details>
<summary>Answer and explanation</summary>

(a)

```java
public static ArrayList<Integer> evens(int[][] m)
{
    ArrayList<Integer> result = new ArrayList<Integer>();
    for (int[] row : m)
    {
        for (int v : row)
        {
            if (v % 2 == 0)
            {
                result.add(v);
            }
        }
    }
    return result;
}
```

(b)

```java
public static int[] toArray(ArrayList<Integer> list)
{
    int[] a = new int[list.size()];
    for (int i = 0; i < list.size(); i++)
    {
        a[i] = list.get(i);
    }
    return a;
}
```

(c) `evens(m)` is `[2, 4, 6, 8]` and `toArray` gives an array of length 4 holding 2, 4, 6 and 8 (run and confirmed). In (a) the nested enhanced for loops visit the table in row-major order, with `row` of type `int[]` and `v` of type `int`. The ArrayList is the right result type because the number of even values is not known in advance; the array in (b) has a fixed size equal to `list.size()`.

**Suggested Marlbridge rubric (7 points)**

| Point | Award for |
|---|---|
| 1 | (a) creates an empty `ArrayList<Integer>` |
| 2 | (a) nested traversal of all elements in row-major order |
| 3 | (a) tests evenness with `% 2 == 0` and adds the element |
| 4 | (a) returns the list |
| 5 | (b) new array of length `list.size()` |
| 6 | (b) copies each element in order using `get` (unboxing to `int`) |
| 7 | (c) both results correct |

Topic checks: [Topic 4.5](/advanced-course-resources/computer-science-a/4-5-implementing-array-algorithms-study-guide/), [Topic 4.8](/advanced-course-resources/computer-science-a/4-8-arraylist-methods-study-guide/) and [Topic 4.12](/advanced-course-resources/computer-science-a/4-12-2d-array-traversals-study-guide/).
</details>

## Your next step

- **Mark each part right, partly right or wrong** using the rubric points.
- **If a part went wrong, find its topic in the decision table** and re-read that study guide, then do its practice set.
- **If everything went well**, redo the [Unit 4 diagnostic](/advanced-course-resources/computer-science-a/unit-4-diagnostic/) a few days later under timed conditions.
- **Practise writing methods by hand**, since the exam's free-response section is answered in a code editor with no compiler or hints.
