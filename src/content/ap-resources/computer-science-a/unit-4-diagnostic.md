---
resourceId: "mb-ap-csa-u4-diagnostic"
title: "Data Collections: Unit Diagnostic (Computer Science A Unit 4)"
description: "A 45-minute check with a short question for every topic of Unit 4, from data collection ethics to recursion and binary search, showing which topics to revisit."
course: "computer-science-a"
unit: 4
topics: []
resourceType: "unit-diagnostic"
prerequisites:
  - "You have studied some or all of Topics 4.1 to 4.17"
learningObjectives:
  - "Find out which Unit 4 topics are secure and which need more work"
  - "Practise short questions on data ethics, arrays, files, wrapper classes, ArrayList, 2D arrays, searching, sorting and recursion"
  - "Use the answer explanations to see why common wrong answers are tempting"
  - "Choose the study guides to read next"
skills: ["2", "3", "4", "5"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-u4-review", "mb-ap-csa-4.6-study-guide", "mb-ap-csa-4.7-study-guide", "mb-ap-csa-4.8-study-guide", "mb-ap-csa-4.9-study-guide", "mb-ap-csa-4.10-study-guide", "mb-ap-csa-4.11-study-guide", "mb-ap-csa-4.12-study-guide", "mb-ap-csa-4.13-study-guide", "mb-ap-csa-4.14-study-guide", "mb-ap-csa-4.15-study-guide", "mb-ap-csa-4.16-study-guide", "mb-ap-csa-4.17-study-guide"]
next: "mb-ap-csa-u4-review"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Twenty-two short questions: at least one for each of the 17 topics in Unit 4."
  - "Seventeen are multiple choice; five need a short written answer."
  - "Each answer links to the study guide to read if you missed it."
  - "It shows where to focus. It does not give or predict a score."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Use this diagnostic to find **which Unit 4 topics to revisit**: one short question for every topic from 4.1 to 4.17, and a second question for Topics 4.1, 4.5, 4.10, 4.13 and 4.17.

These are **original Marlbridge practice questions**, not past exam questions. The diagnostic is not calibrated and gives **no predicted score**. Code fragments for Topics 4.6 to 4.17 were compiled and run, and the answers come from those runs.

**How to take it.** Allow 45 minutes. Answer everything on paper before you open any answer. No calculator. Assume the usual imports (`java.io.File`, `java.io.IOException`, `java.util.Scanner`, `java.util.ArrayList`) where code needs them, and that methods that read files declare `throws IOException`. Questions 7, 13, 14, 17 and 22 are short written answers; the others are multiple choice.

## Question 1 (multiple choice · 4.1)

A fictional school app records every student's location each minute and stores the records with no end date. What is the greatest **privacy** risk?

- (A) The records take up a lot of storage space
- (B) The personal data may be exposed or used for purposes the students never expected
- (C) The app may run slowly on older phones
- (D) The location data may be rounded to the nearest metre

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Collecting and storing personal data puts personal privacy at risk, especially when it is kept indefinitely. Programmers should try to safeguard the privacy of the user.

- (A) and (C) are engineering costs, not privacy risks.
- (D) is an accuracy detail, not a privacy risk.

**If you missed this:** [Topic 4.1 study guide](/advanced-course-resources/computer-science-a/4-1-ethical-social-issues-data-collection-study-guide/).
</details>

## Question 2 (multiple choice · 4.1)

A fictional program that screens loan applications was trained on past decisions that mostly came from one region. It rejects many applicants from other regions who would have repaid. Which term best describes the problem?

- (A) A syntax error
- (B) Algorithmic bias
- (C) A run-time exception
- (D) Autoboxing

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Algorithmic bias is a systemic and repeated error in a program that creates unfair outcomes for a specific group of users. Here the data set's collection method made it unrepresentative.

- (A) The code compiles and runs; the issue is the unfair results.
- (C) No exception is involved.
- (D) Autoboxing is a conversion between primitives and wrapper objects.

**If you missed this:** [Topic 4.1 study guide](/advanced-course-resources/computer-science-a/4-1-ethical-social-issues-data-collection-study-guide/).
</details>

## Question 3 (multiple choice · 4.2)

A table holds the number of steps taken on each of seven days. Which description best matches an algorithm to count the days with more than 8,000 steps?

- (A) Look at each value in turn, test it against 8,000 and add one to a counter when the test is true
- (B) Add all seven values and divide by 8,000
- (C) Sort the table, then read only the middle value
- (D) Replace every value by 8,000

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** When analysing a data set, values are accessed one at a time and processed according to the desired outcome; here each is tested and counted.

- (B) computes an unrelated quantity.
- (C) gives a median, not a count.
- (D) destroys the data.

**If you missed this:** [Topic 4.2 study guide](/advanced-course-resources/computer-science-a/4-2-introduction-using-data-sets-study-guide/).
</details>

## Question 4 (multiple choice · 4.3)

What is printed?

```java
int[] a = new int[4];
a[1] = 5;
a[3] = a[1] + 2;
System.out.println(a[0] + a[3] + a.length);
```

- (A) 7
- (B) 11
- (C) 12
- (D) An `ArrayIndexOutOfBoundsException` is thrown

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A new `int` array is all 0s, so `a[0]` is 0. `a[3]` is 5 + 2 = 7 and `a.length` is 4: 0 + 7 + 4 = 11.

- (A) leaves out the length.
- (C) treats `a[0]` as 1.
- (D) The indices 0, 1 and 3 are valid for length 4.

**If you missed this:** [Topic 4.3 study guide](/advanced-course-resources/computer-science-a/4-3-array-creation-access-study-guide/).
</details>

## Question 5 (multiple choice · 4.4)

What is printed?

```java
int[] n = {1, 2, 3};
for (int v : n)
{
    v = v * 2;
}
System.out.println(n[0] + n[2]);
```

- (A) 4
- (B) 8
- (C) 2
- (D) 6

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The enhanced for loop variable `v` is a copy of each element, so assigning to it does not change the array. `n[0] + n[2]` is 1 + 3 = 4.

- (B) assumes the elements were doubled (2 + 6).
- (C) and (D) do not follow from the array contents.

**If you missed this:** [Topic 4.4 study guide](/advanced-course-resources/computer-science-a/4-4-array-traversals-study-guide/).
</details>

## Question 6 (multiple choice · 4.5)

What is printed?

```java
int[] q = {4, 9, 2, 9, 7};
int c = 0;
for (int i = 0; i < q.length - 1; i++)
{
    if (q[i] > q[i + 1])
    {
        c++;
    }
}
System.out.println(c);
```

- (A) 1
- (B) 2
- (C) 3
- (D) 4

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The consecutive pairs are (4, 9) no, (9, 2) yes, (2, 9) no, (9, 7) yes: two decreases.

- (A) misses a decrease.
- (C) counts a non-decrease.
- (D) is the number of pairs.

**If you missed this:** [Topic 4.5 study guide](/advanced-course-resources/computer-science-a/4-5-implementing-array-algorithms-study-guide/).
</details>

## Question 7 (short written · 4.5)

Write `countAboveMean(int[] a)`, which returns the number of elements strictly greater than the mean of the non-empty array `a`. Do not use integer division for the mean.

<details>
<summary>Answer and explanation</summary>

```java
public static int countAboveMean(int[] a)
{
    int sum = 0;
    for (int v : a)
    {
        sum += v;
    }
    double mean = (double) sum / a.length;
    int count = 0;
    for (int v : a)
    {
        if (v > mean)
        {
            count++;
        }
    }
    return count;
}
```

For `{70, 85, 60, 90}` the mean is 76.25 and the method returns 2; for `{5, 5, 5}` it returns 0 (both run).

**Suggested Marlbridge rubric (4 points)**

| Point | Award for |
|---|---|
| 1 | Computes the sum of all elements by traversal |
| 2 | Computes the mean as a `double` (a cast before dividing) |
| 3 | Second traversal comparing each element with the mean using `>` |
| 4 | Counts and returns the count |

**If you missed this:** [Topic 4.5 study guide](/advanced-course-resources/computer-science-a/4-5-implementing-array-algorithms-study-guide/).
</details>

## Question 8 (multiple choice · 4.6)

The file `data.txt` holds the two lines `3 8` and `1`. What is printed?

```java
Scanner in = new Scanner(new File("data.txt"));
int total = 0;
while (in.hasNext())
{
    total += in.nextInt();
}
in.close();
System.out.println(total);
```

- (A) 3
- (B) 11
- (C) 12
- (D) 381

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The loop reads one token per pass across the line break: 3, 8, 1 give 12 (run and confirmed). The enclosing method needs `throws IOException`.

- (A) reads the first token only.
- (B) stops before the last line.
- (D) joins the digits as text.

**If you missed this:** [Topic 4.6 study guide](/advanced-course-resources/computer-science-a/4-6-using-text-files-study-guide/).
</details>

## Question 9 (multiple choice · 4.7)

What is printed?

```java
Integer a = 7;
double d = a / 2;
System.out.println(d);
```

- (A) 3.5
- (B) 3.0
- (C) 3
- (D) The code does not compile

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `a` is unboxed to an `int`, so `a / 2` is integer division (3), which is then widened to the `double` 3.0.

- (A) would need a cast such as `(double) a / 2`.
- (C) A `double` prints with a decimal point.
- (D) Unboxing and widening are automatic.

**If you missed this:** [Topic 4.7 study guide](/advanced-course-resources/computer-science-a/4-7-wrapper-classes-study-guide/).
</details>

## Question 10 (multiple choice · 4.8)

What is printed?

```java
ArrayList<String> list = new ArrayList<String>();
list.add("x");
list.add("y");
list.add(0, "z");
String old = list.set(1, "w");
list.remove(0);
System.out.println(old + " " + list + " " + (list.size() + list.get(0)));
```

- (A) `x [w, y] 2w`
- (B) `y [w, y] 2w`
- (C) `x [z, w] 4`
- (D) `x [w, y] 3w`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The list goes `[x]`, `[x, y]`, `[z, x, y]`. `set(1, "w")` returns `"x"` and gives `[z, w, y]`. `remove(0)` leaves `[w, y]`. The size is 2 and `get(0)` is `"w"`, so `2 + "w"` is `"2w"`.

- (B) returns the wrong old element.
- (C) mixes up the final list and adds a `String` as a number.
- (D) uses size 3.

**If you missed this:** [Topic 4.8 study guide](/advanced-course-resources/computer-science-a/4-8-arraylist-methods-study-guide/).
</details>

## Question 11 (multiple choice · 4.9)

`t` holds `[2, 2, 3, 2]`. What does it hold after the loop?

```java
for (int i = 0; i < t.size(); i++)
{
    if (t.get(i) == 2)
    {
        t.remove(i);
    }
}
```

- (A) `[3]`
- (B) `[2, 3]`
- (C) `[2, 2, 3]`
- (D) `[3, 2]`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** At `i` = 0 the first 2 is removed (`[2, 3, 2]`) and the next 2 slides into index 0, but `i` moves on to 1, skipping it. 3 is kept at `i` = 1; at `i` = 2 the last 2 is removed. Result `[2, 3]` (run and confirmed).

- (A) is what a correct deletion loop would give.
- (C) and (D) do not follow from the passes.

**If you missed this:** [Topic 4.9 study guide](/advanced-course-resources/computer-science-a/4-9-arraylist-traversals-study-guide/).
</details>

## Question 12 (multiple choice · 4.10)

`av` holds `[1, 2, 2]`. What is `avg`?

```java
int sum = 0;
for (int v : av)
{
    sum += v;
}
double avg = sum / av.size();
```

- (A) 1.0
- (B) 1.67
- (C) 1.6666666666666667
- (D) 5.0

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `sum` is 5 and `av.size()` is 3. Both are `int`, so the division is integer division (1), widened to 1.0 on assignment. A cast `(double) sum / av.size()` would give 1.6666666666666667.

- (B) and (C) need the cast.
- (D) is the sum.

**If you missed this:** [Topic 4.10 study guide](/advanced-course-resources/computer-science-a/4-10-implementing-arraylist-algorithms-study-guide/).
</details>

## Question 13 (short written · 4.10)

Write `moveMaxToEnd(ArrayList<Integer> list)`, which moves the first occurrence of the largest value to the end of the non-empty list, leaving the order of the other elements unchanged. For `[3, 9, 2, 9, 5]` the list becomes `[3, 2, 9, 5, 9]`.

<details>
<summary>Answer and explanation</summary>

```java
public static void moveMaxToEnd(ArrayList<Integer> list)
{
    int maxIndex = 0;
    for (int i = 1; i < list.size(); i++)
    {
        if (list.get(i) > list.get(maxIndex))
        {
            maxIndex = i;
        }
    }
    list.add(list.remove(maxIndex));
}
```

Strict `>` keeps the first occurrence. The run on `[3, 9, 2, 9, 5]` gave `[3, 2, 9, 5, 9]`.

**Suggested Marlbridge rubric (4 points)**

| Point | Award for |
|---|---|
| 1 | Finds the index of the maximum by traversal (start from index 0, loop from 1) |
| 2 | Strict comparison so that the first occurrence is used |
| 3 | Removes at that index with `remove(index)` |
| 4 | Appends the removed element to the end |

**If you missed this:** [Topic 4.10 study guide](/advanced-course-resources/computer-science-a/4-10-implementing-arraylist-algorithms-study-guide/).
</details>

## Question 14 (short written · 4.11)

(a) For `int[][] g = new int[3][2];` followed by `g[2][1] = 4;`, give the value of `g.length * g[0].length + g[2][1]`.

(b) Explain what `g.length` and `g[0].length` measure.

<details>
<summary>Answer and explanation</summary>

(a) `g.length` is 3 and `g[0].length` is 2, so 3 * 2 + 4 = **10** (run and confirmed).

(b) `g.length` is the number of **rows** (the length of the outer array). `g[0].length` is the number of **columns** (the length of one row array).

**Suggested Marlbridge rubric (3 points):** 1 for 10; 1 for rows; 1 for columns.

**If you missed this:** [Topic 4.11 study guide](/advanced-course-resources/computer-science-a/4-11-2d-array-creation-access-study-guide/).
</details>

## Question 15 (multiple choice · 4.12)

For `cm = { {1, 2}, {3, 4}, {5, 6} }`, what does this print?

```java
for (int c = 0; c < cm[0].length; c++)
{
    for (int r = 0; r < cm.length; r++)
    {
        System.out.print(cm[r][c] + " ");
    }
}
```

- (A) `1 2 3 4 5 6`
- (B) `1 3 5 2 4 6`
- (C) `2 4 6 1 3 5`
- (D) `1 2 3 4`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The outer loop is over the 2 columns and the inner over the 3 rows: column 0 gives 1, 3, 5 and column 1 gives 2, 4, 6 (column-major order).

- (A) is row-major order.
- (C) visits the columns in reverse.
- (D) stops early.

**If you missed this:** [Topic 4.12 study guide](/advanced-course-resources/computer-science-a/4-12-2d-array-traversals-study-guide/).
</details>

## Question 16 (multiple choice · 4.13)

What does `bestCol` return for `{ {1, 5}, {4, 3}, {2, 9} }`?

```java
public static int bestCol(int[][] m)
{
    int best = 0;
    int bestSum = -1;
    for (int c = 0; c < m[0].length; c++)
    {
        int sum = 0;
        for (int r = 0; r < m.length; r++)
        {
            sum += m[r][c];
        }
        if (sum > bestSum)
        {
            bestSum = sum;
            best = c;
        }
    }
    return best;
}
```

- (A) 0
- (B) 1
- (C) 17
- (D) 7

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The column sums are 1 + 4 + 2 = 7 and 5 + 3 + 9 = 17. The larger is column 1, and the method returns the column **index**.

- (A) is the first column.
- (C) is the largest sum, not the index.
- (D) is the sum of column 0.

**If you missed this:** [Topic 4.13 study guide](/advanced-course-resources/computer-science-a/4-13-implementing-2d-array-algorithms-study-guide/).
</details>

## Question 17 (short written · 4.13)

Write `rotateRowRight(int[][] m, int r)`, which rotates row `r` one place to the right: the last element moves to the front and every other element moves one column to the right. For the row `1, 2, 3, 4` the result is `4, 1, 2, 3`.

<details>
<summary>Answer and explanation</summary>

```java
public static void rotateRowRight(int[][] m, int r)
{
    int last = m[r][m[r].length - 1];
    for (int c = m[r].length - 1; c > 0; c--)
    {
        m[r][c] = m[r][c - 1];
    }
    m[r][0] = last;
}
```

The run on `{ {1, 2, 3, 4}, {5, 6, 7, 8} }` with `r` = 0 gave `4 1 2 3` and left row 1 unchanged.

**Suggested Marlbridge rubric (4 points)**

| Point | Award for |
|---|---|
| 1 | Saves the last element before it is overwritten |
| 2 | Loop that shifts elements right, working from the back so no value is lost |
| 3 | Correct loop bounds (from the last column down to column 1) |
| 4 | Places the saved element in column 0 and changes only row `r` |

A loop that shifts from the front without a saved copy of each element loses values; do not award point 2 for it.

**If you missed this:** [Topic 4.13 study guide](/advanced-course-resources/computer-science-a/4-13-implementing-2d-array-algorithms-study-guide/).
</details>

## Question 18 (multiple choice · 4.14)

A linear search for 7 is made in `{6, 4, 9, 4}`. How many elements are compared with 7, and what is returned?

- (A) 1 element; -1
- (B) 4 elements; -1
- (C) 4 elements; 4
- (D) 3 elements; -1

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The target is absent, so every element is checked (4 comparisons) and -1 is returned after the loop.

- (A) stops after the first mismatch, which is wrong.
- (C) returns the length, not -1.
- (D) misses the last element.

**If you missed this:** [Topic 4.14 study guide](/advanced-course-resources/computer-science-a/4-14-searching-algorithms-study-guide/).
</details>

## Question 19 (multiple choice · 4.15)

Insertion sort (the standard version) is run on `{7, 4, 9, 2, 5}`. What does the array hold after three passes (keys at indices 1, 2 and 3 inserted)?

- (A) `2, 4, 5, 7, 9`
- (B) `2, 4, 7, 9, 5`
- (C) `4, 7, 9, 2, 5`
- (D) `2, 4, 9, 7, 5`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Pass 1 gives `4, 7, 9, 2, 5`; pass 2 leaves it unchanged; pass 3 inserts 2 at the front by shifting 9, 7 and 4: `2, 4, 7, 9, 5` (run and confirmed).

- (A) is the array after three passes of **selection** sort (and the fully sorted array).
- (C) is the state after one or two passes.
- (D) is the state after one pass of **selection** sort.

**If you missed this:** [Topic 4.15 study guide](/advanced-course-resources/computer-science-a/4-15-sorting-algorithms-study-guide/).
</details>

## Question 20 (multiple choice · 4.16)

What does `f(20)` return?

```java
public static int f(int n)
{
    if (n <= 1)
    {
        return 0;
    }
    return 1 + f(n / 2);
}
```

- (A) 10
- (B) 4
- (C) 5
- (D) 0

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The calls are `f(20)`, `f(10)`, `f(5)`, `f(2)` and `f(1)`. The base case returns 0 and each of the four earlier calls adds 1: 4 (run and confirmed). The method counts how many times `n` can be halved (integer division) before it reaches 1.

- (A) is `20 / 2`, only the first step.
- (C) counts the five calls rather than the four additions.
- (D) is the base-case value, not the result of the first call.

**If you missed this:** [Topic 4.16 study guide](/advanced-course-resources/computer-science-a/4-16-recursion-study-guide/).
</details>

## Question 21 (multiple choice · 4.17)

Binary search for 27 in the sorted array `{3, 8, 12, 15, 21, 27, 30, 34, 40}` (indices 0 to 8) with `mid = (low + high) / 2`. Which indices are examined, in order?

- (A) 4, 6, 5
- (B) 4, 5
- (C) 4, 7, 5
- (D) 0, 1, 2, 3, 4, 5

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `mid` is 4 (21 < 27, so `low` = 5); then `mid` = (5 + 8) / 2 = 6 (30 > 27, so `high` = 5); then `mid` = 5 (27, found). Three comparisons (run and confirmed).

- (B) assumes the second `mid` lands on 5 directly; it is 6.
- (C) uses 7, the wrong rounding of the midpoint of 5 and 8.
- (D) is the order of a linear search.

**If you missed this:** [Topic 4.17 study guide](/advanced-course-resources/computer-science-a/4-17-recursive-searching-sorting-study-guide/).
</details>

## Question 22 (short written · 4.17)

Show every split and merge made by merge sort on `{6, 2, 9, 4}` (use `mid = (lo + hi) / 2`, and sort the left half before the right half), ending with the sorted array.

<details>
<summary>Answer and explanation</summary>

1. split `[6, 2, 9, 4]` into `[6, 2]` and `[9, 4]`
2. split `[6, 2]` into `[6]` and `[2]`
3. merge `[6]` and `[2]` into `[2, 6]`
4. split `[9, 4]` into `[9]` and `[4]`
5. merge `[9]` and `[4]` into `[4, 9]`
6. merge `[2, 6]` and `[4, 9]` into `[2, 4, 6, 9]`

The last merge compares the fronts: 2 and 4 (copy 2), 6 and 4 (copy 4), 6 and 9 (copy 6), then copy the remaining 9.

**Suggested Marlbridge rubric (5 points):** 1 for the first split into halves; 1 for splitting both halves down to single elements; 1 for the two small merges (`[2, 6]` and `[4, 9]`); 1 for the final merge giving `[2, 4, 6, 9]`; 1 for doing the left half completely before the right half.

**If you missed this:** [Topic 4.17 study guide](/advanced-course-resources/computer-science-a/4-17-recursive-searching-sorting-study-guide/).
</details>

## Your next step

| Topic | Question(s) | If you missed it, read |
|---|---|---|
| 4.1 | 1, 2 | [Ethical and social issues around data collection](/advanced-course-resources/computer-science-a/4-1-ethical-social-issues-data-collection-study-guide/) |
| 4.2 | 3 | [Introduction to using data sets](/advanced-course-resources/computer-science-a/4-2-introduction-using-data-sets-study-guide/) |
| 4.3 | 4 | [Array creation and access](/advanced-course-resources/computer-science-a/4-3-array-creation-access-study-guide/) |
| 4.4 | 5 | [Array traversals](/advanced-course-resources/computer-science-a/4-4-array-traversals-study-guide/) |
| 4.5 | 6, 7 | [Implementing array algorithms](/advanced-course-resources/computer-science-a/4-5-implementing-array-algorithms-study-guide/) |
| 4.6 | 8 | [Using text files](/advanced-course-resources/computer-science-a/4-6-using-text-files-study-guide/) |
| 4.7 | 9 | [Wrapper classes](/advanced-course-resources/computer-science-a/4-7-wrapper-classes-study-guide/) |
| 4.8 | 10 | [ArrayList methods](/advanced-course-resources/computer-science-a/4-8-arraylist-methods-study-guide/) |
| 4.9 | 11 | [ArrayList traversals](/advanced-course-resources/computer-science-a/4-9-arraylist-traversals-study-guide/) |
| 4.10 | 12, 13 | [Implementing ArrayList algorithms](/advanced-course-resources/computer-science-a/4-10-implementing-arraylist-algorithms-study-guide/) |
| 4.11 | 14 | [2D array creation and access](/advanced-course-resources/computer-science-a/4-11-2d-array-creation-access-study-guide/) |
| 4.12 | 15 | [2D array traversals](/advanced-course-resources/computer-science-a/4-12-2d-array-traversals-study-guide/) |
| 4.13 | 16, 17 | [Implementing 2D array algorithms](/advanced-course-resources/computer-science-a/4-13-implementing-2d-array-algorithms-study-guide/) |
| 4.14 | 18 | [Searching algorithms](/advanced-course-resources/computer-science-a/4-14-searching-algorithms-study-guide/) |
| 4.15 | 19 | [Sorting algorithms](/advanced-course-resources/computer-science-a/4-15-sorting-algorithms-study-guide/) |
| 4.16 | 20 | [Recursion](/advanced-course-resources/computer-science-a/4-16-recursion-study-guide/) |
| 4.17 | 21, 22 | [Recursive searching and sorting](/advanced-course-resources/computer-science-a/4-17-recursive-searching-sorting-study-guide/) |

## How to use your result

- **Mark each question right, partly right or wrong.** For a written question, award yourself the rubric points honestly.
- **Fix weak topics in order.** The later topics build on the earlier ones: arrays (4.3 to 4.5) support lists (4.8 to 4.10), which support 2D arrays (4.11 to 4.13), which share their loop patterns with searching and sorting (4.14, 4.15) and recursion (4.16, 4.17).
- **Read the study guide, then do its practice set.**
- **Then try the [Unit 4 mixed review](/advanced-course-resources/computer-science-a/unit-4-review/).**
