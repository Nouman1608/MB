---
resourceId: "mb-ap-csa-4.16-practice"
title: "Recursion: Practice Questions (Computer Science A 4.16)"
description: "Ten original questions on recursion: tracing return values, print order, digits and strings, counting calls, missing base cases, iteration equivalents, and two written trace tasks."
course: "computer-science-a"
unit: 4
topics: ["4.16"]
resourceType: "practice-questions"
prerequisites:
  - "Writing and calling methods with parameters and return values (Topics 1.9 and 3.5)"
  - "Tracing loops and conditionals (Topics 2.3 and 2.7)"
  - "String methods length and substring (Topic 1.15)"
learningObjectives:
  - "Trace recursive methods"
  - "Predict print order and call counts"
  - "Explain base cases and iterative equivalents"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.16-study-guide", "mb-ap-csa-4.16-revision-notes", "mb-ap-csa-4.16-checklist"]
next: "mb-ap-csa-4.16-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Ten questions: eight multiple choice, two constructed response."
  - "Every method was compiled and run; the returned values, outputs and call counts come from those runs."
  - "Rubrics are a suggested Marlbridge rubric, not an official scoring guideline."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. Writing recursive code is outside the scope of the course, so every question asks you to trace, count or explain. Every method was compiled and run, and the returned values, outputs and call counts quoted come from those runs.

## Question 1 (multiple choice · foundation)

What does `fact(4)` return?

```java
public static int fact(int n)
{
    if (n <= 1)
    {
        return 1;
    }
    return n * fact(n - 1);
}
```

- (A) 10
- (B) 24
- (C) 12
- (D) 4

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `fact(4) = 4 * fact(3) = 4 * 3 * fact(2) = 4 * 3 * 2 * fact(1) = 4 * 3 * 2 * 1 = 24`.

- (A) is the sum 4 + 3 + 2 + 1.
- (C) multiplies only two terms, 4 * 3.
- (D) is just the argument.
</details>

## Question 2 (multiple choice · core)

What is printed by `mystery(3)`?

```java
public static void mystery(int n)
{
    if (n > 0)
    {
        System.out.print(n + " ");
        mystery(n - 1);
        System.out.print(n + " ");
    }
}
```

- (A) `3 2 1 `
- (B) `1 2 3 `
- (C) `3 2 1 1 2 3 `
- (D) `3 2 1 0 1 2 3 `

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The first print runs before each recursive call (3, 2, 1), and the second runs as the calls return (1, 2, 3). `mystery(0)` prints nothing.

- (A) omits the prints that happen after the calls.
- (B) omits the prints before the calls.
- (D) wrongly includes 0, since `0 > 0` is false.
</details>

## Question 3 (multiple choice · core)

What does `rev("stop")` return?

```java
public static String rev(String s)
{
    if (s.length() <= 1)
    {
        return s;
    }
    return rev(s.substring(1)) + s.substring(0, 1);
}
```

- (A) `"stop"`
- (B) `"pots"`
- (C) `"spot"`
- (D) `"p"`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Each call places its first character **after** the reversed rest: `rev("top") + "s"`, then `rev("op") + "t"`, then `rev("p") + "o"` with `rev("p")` returning `"p"`. Building up: `"po"`, `"pot"`, `"pots"`.

- (A) would result if the first character were placed before the recursive result.
- (C) is a different word, not a result of the method.
- (D) is only the base-case value.
</details>

## Question 4 (multiple choice · core)

What does `sumDigits(4729)` return?

```java
public static int sumDigits(int n)
{
    if (n < 10)
    {
        return n;
    }
    return n % 10 + sumDigits(n / 10);
}
```

- (A) 4729
- (B) 472
- (C) 22
- (D) 9

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The calls peel off 9, 2, 7 and finally the single digit 4: 9 + 2 + 7 + 4 = 22.

- (A) is the argument.
- (B) is `n / 10`, only the first step.
- (D) is the last digit, `n % 10`, of the first call.
</details>

## Question 5 (multiple choice · core)

What happens when `bad(5)` is called?

```java
public static int bad(int n)
{
    return n + bad(n - 1);
}
```

- (A) It returns 15
- (B) It returns 5
- (C) It throws a `StackOverflowError`
- (D) It does not compile

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** There is no base case, so the calls never stop and the stack runs out of space (run and confirmed).

- (A) would need a base case such as `if (n == 0) return 0;`.
- (B) is the value of `n` in the first call only.
- (D) The code is valid Java; the error appears at run time.
</details>

## Question 6 (multiple choice · core)

What does `mystery2(4)` return, and what does the method compute for a non-negative `n`?

```java
public static int mystery2(int n)
{
    if (n == 0)
    {
        return 0;
    }
    return 2 + mystery2(n - 1);
}
```

- (A) 8, which is 2 times n
- (B) 6, which is n plus 2
- (C) 4, which is n
- (D) 16, which is n squared

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `mystery2(4) = 2 + 2 + 2 + 2 + 0 = 8`. Each call adds 2 and moves one step closer to 0, so the result is 2n.

- (B), (C) and (D) do not match the repeated addition of 2 for n calls.
</details>

## Question 7 (multiple choice · core)

`fib(n)` returns `n` for `n <= 1`, otherwise `fib(n - 1) + fib(n - 2)`. How many times is `fib` called in total (including the first call) by `fib(4)`?

- (A) 4
- (B) 5
- (C) 9
- (D) 3

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** With C(0) = C(1) = 1, C(2) = 3, C(3) = 5 and C(4) = 1 + C(3) + C(2) = 9 (a counter in the run also showed 9; `fib(4)` returns 3).

- (A) counts one call per value of n.
- (B) is C(3).
- (D) is the **value** returned, not the number of calls.
</details>

## Question 8 (multiple choice · stretch)

Which loop computes the same value as the recursive method `sumTo(n)` for n at least 0?

```java
public static int sumTo(int n)
{
    if (n == 0)
    {
        return 0;
    }
    return n + sumTo(n - 1);
}
```

- (A) `int s = 0; for (int i = 1; i <= n; i++) { s += i; } return s;`
- (B) `int s = 1; for (int i = 1; i <= n; i++) { s *= i; } return s;`
- (C) `int s = 0; for (int i = 0; i < n; i++) { s += i; } return s;`
- (D) `int s = n; for (int i = 0; i < n; i++) { s += n; } return s;`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `sumTo(5)` is 5 + 4 + 3 + 2 + 1 = 15, which is the sum of 1 to `n` (run and confirmed).

- (B) multiplies, giving a factorial.
- (C) stops one short: it sums 0 to n - 1.
- (D) adds `n` repeatedly and starts from `n`.
</details>

## Question 9 (constructed response · core)

Consider `g`:

```java
public static int g(int n)
{
    if (n <= 0)
    {
        return 0;
    }
    System.out.print("[" + n + "]");
    return n + g(n - 2);
}
```

(a) List the calls made by `g(7)` in order and state what is printed.

(b) State the value returned by `g(7)`, and explain why the base case uses `<=` and not `==`.

<details>
<summary>Answer and explanation</summary>

(a) The calls are `g(7)`, `g(5)`, `g(3)`, `g(1)` and `g(-1)`. The print happens before each recursive call, so the output is `[7][5][3][1]`. `g(-1)` meets the base case and prints nothing.

(b) The returns unwind as `g(-1) = 0`, `g(1) = 1 + 0 = 1`, `g(3) = 3 + 1 = 4`, `g(5) = 5 + 4 = 9`, `g(7) = 7 + 9 = 16`, so `g(7)` returns 16 (run and confirmed). The argument decreases by 2, so for an odd start it goes 1 then -1 and steps **over** 0. With `n == 0` as the base case the calls would continue to -3, -5, and so on, never meeting it, and a `StackOverflowError` would result. `n <= 0` catches every value that has gone past 0.

**Suggested Marlbridge rubric (6 points)**

| Point | Award for |
|---|---|
| 1 | Correct list of calls ending with `g(-1)` |
| 2 | Output `[7][5][3][1]` (prints before the recursive call, none for the base case) |
| 3 | Substitutes returns from the base case upwards |
| 4 | Final value 16 |
| 5 | Explains that the argument steps over 0 |
| 6 | Concludes that `==` would never be met and would cause a stack overflow |
</details>

## Question 10 (constructed response · stretch)

`countA` is shown.

```java
public static int countA(String s)
{
    if (s.length() == 0)
    {
        return 0;
    }
    if (s.substring(0, 1).equals("a"))
    {
        return 1 + countA(s.substring(1));
    }
    return countA(s.substring(1));
}
```

(a) Identify the base case and the recursive cases, and state what `countA("banana")` returns.

(b) Write an iterative method (a loop, not recursion) that returns the same result as `countA` for any String.

<details>
<summary>Answer and explanation</summary>

(a) The base case is the empty String (`length() == 0`), which returns 0. There are two recursive cases: if the first character is `"a"` the result is 1 plus the count in the rest; otherwise it is the count in the rest. `countA("banana")` returns 3 (run and confirmed): the three `a` characters.

(b)

```java
public static int countAIter(String s)
{
    int count = 0;
    for (int i = 0; i < s.length(); i++)
    {
        if (s.substring(i, i + 1).equals("a"))
        {
            count++;
        }
    }
    return count;
}
```

**Suggested Marlbridge rubric (6 points)**

| Point | Award for |
|---|---|
| 1 | Part (a): base case identified (empty String returns 0) |
| 2 | Part (a): both recursive cases described, each on the shorter String `s.substring(1)` |
| 3 | Part (a): result 3 for `"banana"` |
| 4 | Part (b): loop visits every character |
| 5 | Part (b): compares each single character with `"a"` using `equals` |
| 6 | Part (b): accumulates a count and returns it |
</details>

## How did you do?

Questions 1 to 8 are one mark each. If you lost track of the order of returns or prints, redraw the call stack as in Figure 1 of the [Topic 4.16 study guide](/advanced-course-resources/computer-science-a/4-16-recursion-study-guide/); then tick off the [checklist](/advanced-course-resources/computer-science-a/4-16-recursion-checklist/).
