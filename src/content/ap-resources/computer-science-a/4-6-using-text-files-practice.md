---
resourceId: "mb-ap-csa-4.6-practice"
title: "Using Text Files: Practice Questions (Computer Science A 4.6)"
description: "Ten original questions on reading text files in Java: header requirements, traces of Scanner loops, split results, exceptions and two code-writing tasks, with rubrics."
course: "computer-science-a"
unit: 4
topics: ["4.6"]
resourceType: "practice-questions"
prerequisites:
  - "while loops and the hasNext idea of looping until data runs out (Topic 2.7)"
  - "String methods and calling methods on objects (Topics 1.14 and 1.15)"
  - "Parsing a String to a number is new here; the wrapper-class topic (4.7) goes deeper"
learningObjectives:
  - "Trace Scanner loops over a described file"
  - "Predict the result of split and of reading past the end of a file"
  - "Write complete file-reading methods"
skills: ["2", "3", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.6-study-guide", "mb-ap-csa-4.6-revision-notes", "mb-ap-csa-4.6-checklist"]
next: "mb-ap-csa-4.6-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Ten questions: eight multiple choice and two written methods."
  - "Answers explain the trace and why each wrong option fails."
  - "All code was compiled and run with the stated file contents."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. Every code fragment was compiled and run. Assume the imports `java.io.File`, `java.io.IOException` and `java.util.Scanner` are present and that each file named exists in the current folder unless the question says otherwise.

## Question 1 (multiple choice · foundation)

A method opens a file with `Scanner in = new Scanner(new File(name));`. Which change is required for the method to compile?

- (A) Add `throws IOException` to the method header
- (B) Declare `name` as a `File`
- (C) Call `in.close()` before the first read
- (D) Replace `Scanner` with `String`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Building a `Scanner` from a `File` can fail, so the code must state what happens. The course's way is a `throws IOException` clause in the header (the method also needs the imports).

- (B) `new File(name)` expects a `String` file name; `name` is correctly a `String`.
- (C) Closing before any read would make later reads fail; `close()` goes after the loop.
- (D) A `Scanner` cannot be replaced by a `String`; they are unrelated types.
</details>

## Question 2 (multiple choice · core)

The file `nums.txt` contains one line: `4 9 2`. What is printed?

```java
Scanner in = new Scanner(new File("nums.txt"));
int total = 0;
while (in.hasNext())
{
    total += in.nextInt();
}
in.close();
System.out.println(total);
```

- (A) 3
- (B) 15
- (C) 429
- (D) 2

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Three tokens are read: 4, 9 and 2, so `total` goes 4, 13, 15. Output: `15`.

- (A) counts the tokens instead of adding them.
- (C) joins the digits as text; `+=` on an `int` adds numbers.
- (D) is just the last value read.
</details>

## Question 3 (multiple choice · core)

The file `bad.txt` contains `5 8 two 3`. The loop in Question 2 is run on it. What happens?

- (A) `total` becomes 16 and `two` is ignored
- (B) `total` becomes 13 and the loop ends normally
- (C) An `InputMismatchException` is thrown after 5 and 8 have been added
- (D) A `NoSuchElementException` is thrown immediately

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** 5 and 8 are read (total 13). The third `nextInt()` sees the token `two`, which is not an `int`, so `InputMismatchException` is thrown. Running this, the exception was `java.util.InputMismatchException`.

- (A) `nextInt()` never skips a bad token.
- (B) The loop does not end normally; the exception stops the program.
- (D) `NoSuchElementException` is for running out of data, and there is data left.
</details>

## Question 4 (multiple choice · core)

What is the length of the array returned by `"a,b,,".split(",")`?

- (A) 2
- (B) 3
- (C) 4
- (D) 5

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `split` removes empty strings from the **end** of the result, so only `"a"` and `"b"` remain. Running `"a,b,,".split(",").length` printed `2`. For comparison, `"ab,cd,,ef".split(",")` has length 4, because the empty piece is in the middle and is kept.

- (B) would count one empty piece.
- (C) counts the delimiters plus one, assuming nothing is dropped.
- (D) counts every comma plus one with an extra piece; no rule gives this.
</details>

## Question 5 (multiple choice · core)

The file `words.txt` contains `the cat sat` on the first line and `on the mat` on the second. How many times does the loop body run?

```java
Scanner in = new Scanner(new File("words.txt"));
int n = 0;
while (in.hasNext())
{
    in.next();
    n++;
}
in.close();
```

- (A) 2
- (B) 3
- (C) 6
- (D) 18

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `next()` returns one token per call and whitespace (including the line break) separates tokens. There are six words, so `n` is 6 (confirmed by running).

- (A) counts lines; that would need `nextLine()`.
- (B) counts the words in one line only.
- (D) counts the characters including spaces; nothing in the code reads characters.
</details>

## Question 6 (multiple choice · core)

After a `Scanner` has returned the last token of the file, a program calls `in.nextInt()` once more. What happens?

- (A) It returns 0
- (B) It returns -1
- (C) It throws a `NoSuchElementException`
- (D) The program waits for keyboard input

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** When there is nothing left to read, a `next` call throws `NoSuchElementException` (confirmed on a file containing three numbers). That is why loops test `hasNext()` first.

- (A) and (B) are made-up default values; Java returns nothing here.
- (D) The scanner reads a file, not the keyboard, and keyboard input is not part of this course.
</details>

## Question 7 (multiple choice · core)

Which statement about `hasNext()` is true?

- (A) It returns the next token and moves past it
- (B) It returns `true` if another item can be read, without moving the cursor
- (C) It closes the file when the data is exhausted
- (D) It returns the number of tokens left

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `hasNext()` is a test. The following `next...` call returns the item.

- (A) describes `next()`.
- (C) only `close()` closes a Scanner.
- (D) `hasNext()` returns a `boolean`, not a count.
</details>

## Question 8 (multiple choice · core)

The file `vals.txt` holds the six numbers `3 14` / `20 9` / `11 2` on three lines. A student wants the number of values greater than 10. Which loop body is correct?

- (A) `if (in.nextInt() > 10) count++;`
- (B) `if (in.nextInt() > 10 && in.nextInt() > 10) count++;`
- (C) `if (in.hasNext() > 10) count++;`
- (D) `if (in.next() > 10) count++;`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** It reads one `int` per pass and tests it. For this file the values above 10 are 14, 20 and 11, so `count` is 3 (run and confirmed).

- (B) reads two numbers per pass, and the second is skipped when the first is not above 10 because of short-circuit evaluation, so tokens are consumed unevenly.
- (C) `hasNext()` returns a `boolean`, which cannot be compared with `10`; it does not compile.
- (D) `next()` returns a `String`, which cannot be compared with `>`; it does not compile.
</details>

## Question 9 (constructed response · core)

Write the method `countAbove(String fileName, int limit)`. The file holds only whole numbers separated by whitespace, in any layout. The method returns how many of them are strictly greater than `limit`. The method must compile as written and must release the file.

<details>
<summary>Answer and explanation</summary>

```java
public static int countAbove(String fileName, int limit) throws IOException
{
    Scanner in = new Scanner(new File(fileName));
    int count = 0;
    while (in.hasNext())
    {
        if (in.nextInt() > limit)
        {
            count++;
        }
    }
    in.close();
    return count;
}
```

For `vals.txt` with `limit` 10 the method returns 3 (run and confirmed).

**Suggested Marlbridge rubric (4 points)**

| Point | Award for |
|---|---|
| 1 | Header includes `throws IOException` and the method returns an `int` |
| 2 | Creates the `Scanner` from a `File` built from `fileName` |
| 3 | A `while (in.hasNext())` loop that reads exactly one `int` per pass |
| 4 | Counts only values strictly greater than `limit`, closes the Scanner and returns the count |

Alternative: reading with `next()` and `Integer.parseInt` is acceptable. Do not award point 3 for reading two numbers per pass or for a loop that can read past the end.
</details>

## Question 10 (constructed response · stretch)

Each line of a file holds a name, a comma and a whole-number score, such as `Ana,70`. Write `averageScore(String fileName)`, which returns the mean score as a `double`, or `0.0` if the file has no lines. Do not use integer division for the mean.

<details>
<summary>Answer and explanation</summary>

```java
public static double averageScore(String fileName) throws IOException
{
    Scanner in = new Scanner(new File(fileName));
    int sum = 0;
    int n = 0;
    while (in.hasNext())
    {
        String[] parts = in.nextLine().split(",");
        sum += Integer.parseInt(parts[1]);
        n++;
    }
    in.close();
    if (n == 0)
    {
        return 0.0;
    }
    return (double) sum / n;
}
```

With `Ana,70`, `Ben,85`, `Cy,90` the sum is 245 and `n` is 3, so the result is 81.66666666666667 (run and confirmed). An empty file returns 0.0 without dividing by zero.

**Suggested Marlbridge rubric (6 points)**

| Point | Award for |
|---|---|
| 1 | `throws IOException`, `Scanner` built from a `File` |
| 2 | Loop controlled by `hasNext()` |
| 3 | Reads one line per pass with `nextLine()` |
| 4 | Uses `split(",")` and `Integer.parseInt` on the second piece |
| 5 | Accumulates a sum and a count |
| 6 | Returns 0.0 for no data, otherwise a `double` mean (cast before dividing), and closes the Scanner |

Do not award point 6 if `sum / n` is computed with two `int` values before conversion (the decimal part would be lost, giving 81.0 here).
</details>

## How did you do?

Questions 1 to 8 are worth one mark each. Count the slips: a missing `throws`, a mixed-up `next` method, or a miscounted token each point to the [Topic 4.6 study guide](/advanced-course-resources/computer-science-a/4-6-using-text-files-study-guide/). Then tick off the [checklist](/advanced-course-resources/computer-science-a/4-6-using-text-files-checklist/).
