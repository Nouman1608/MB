---
title: "OxfordAQA IGCSE Computer Science (9210): Efficiency of algorithms -- Study Guide"
seoTitle: "OxfordAQA IGCSE CS 9210 Efficiency of Algorithms Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 1 – Algorithms"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 1.02
syllabusTopics:
  - qualification: "igcse"
    topic: "algorithms-9210"
  - qualification: "igcse"
    topic: "algorithms-9210"
    subtopic: "efficiency-of-algorithms-9210"
description: "Study guide to OxfordAQA IGCSE Computer Science 9210 section 3.1.2: more than one algorithm for a problem, comparing time efficiency by counting steps, with worked examples."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers section **3.1.2 Efficiency of algorithms** of OxfordAQA International GCSE Computer Science
(9210). The specification has two statements. You must "understand that more than one algorithm can be used to
solve the same problem", and you must "compare the efficiency of algorithms explaining how some algorithms are
more efficient than others in solving the same problem". The additional information adds two limits: "formal
comparisons of algorithmic efficiency are not required", and "exam questions in this area will only refer to
**time efficiency**". That means you do not need Big O notation or any mathematical analysis. You do need to
explain, in plain words and with a small count of steps, why one method does less work than another.

## More than one algorithm for the same problem

A problem is a task with a defined result. An algorithm is one particular method of achieving it. Many problems
have several correct algorithms, and they can differ greatly in how much work they do.

Some examples you will meet in this course:

- **Finding an item in a list:** linear search or binary search.
- **Putting a list in order:** bubble sort or merge sort.
- **Finding the sum of the numbers from 1 to 1,000:** add them one at a time in a loop, or use the formula
  `n × (n + 1) DIV 2`.
- **Deciding whether a number is prime:** test every possible divisor, or stop as soon as a divisor is found.

All the algorithms in each pair give a correct answer. What differs is the **number of steps** they take to get
there. Choosing between them is a decision about efficiency, and in the exam you must justify the decision.

## What does "time efficiency" mean?

An algorithm is **time efficient** if it reaches the answer in fewer steps than another algorithm that does the
same job. Time here does not mean seconds on a stopwatch, because the number of seconds depends on the computer.
Instead you count the work the algorithm does, usually the number of **comparisons**, **assignments** or **loop
passes**.

Counting steps works for any computer. If one algorithm needs 1,000 comparisons and another needs 10 for the same
list, the second is faster on a slow computer and on a fast one. That is why the specification treats efficiency
as a question about the number of steps, and why efficiency becomes more important as the amount of data grows.

Be careful with the idea of "efficient". The specification's questions are only about time. You should not discuss
memory use in answers on this topic unless the question asks about it.

## Worked example 1: adding 1 to n

Algorithm A uses a loop:

```
total ← 0
FOR i ← 1 TO n
  total ← total + i
ENDFOR
OUTPUT total
```

Algorithm B uses a formula:

```
total ← n * (n + 1) DIV 2
OUTPUT total
```

Both give the same result. For `n ← 1000`, the answer is **500500**, which can be confirmed by running either
method. Count the work:

| | Algorithm A (loop) | Algorithm B (formula) |
|---|---|---|
| Additions | 1,000 | 1 |
| Other arithmetic | 0 | 1 multiplication and 1 division |
| Loop passes | 1,000 | 0 |

Algorithm A repeats its work once per number, so doubling `n` doubles the work. Algorithm B does the same three
calculations whether `n` is 10 or 10,000,000. For large `n`, B is far more time efficient. A good answer to "which
is more efficient and why" says exactly this: "B does a fixed number of calculations, A does one addition for each
of the n numbers".

## Worked example 2: prime numbers

Here are three algorithms that decide whether a whole number `n` (greater than 1) is prime. Each uses `isPrime ←
True` at the start and sets it to False if a divisor is found.

**Algorithm P1 tests every possible divisor, always.**

```
isPrime ← True
FOR i ← 2 TO n - 1
  IF n MOD i = 0 THEN
    isPrime ← False
  ENDIF
ENDFOR
```

**Algorithm P2 stops as soon as a divisor is found.**

```
isPrime ← True
i ← 2
WHILE isPrime AND i < n
  IF n MOD i = 0 THEN
    isPrime ← False
  ENDIF
  i ← i + 1
ENDWHILE
```

**Algorithm P3 stops as soon as a divisor is found and tests only values up to the square root of `n`.**

```
isPrime ← True
i ← 2
WHILE isPrime AND i * i ≤ n
  IF n MOD i = 0 THEN
    isPrime ← False
  ENDIF
  i ← i + 1
ENDWHILE
```

P3 works because if `n` has a divisor larger than its square root, it also has a matching divisor smaller than its
square root, so the small one would already have been found.

The number of times each algorithm tests a divisor (the number of comparisons `n MOD i = 0`) is:

| n | Prime? | P1 | P2 | P3 |
|---|---|---|---|---|
| 100 | No | 98 | 1 | 1 |
| 91 | No | 89 | 6 | 6 |
| 97 | Yes | 95 | 95 | 8 |
| 1009 | Yes | 1007 | 1007 | 30 |

Three conclusions follow, and each is the kind of point an exam answer can make:

1. P1 is always the slowest, because it carries on after the answer is known. For 100 it makes 98 tests when 1 is
   enough.
2. P2 is the same as P1 when `n` is **prime**, because the early exit never happens. The saving depends on the
   input.
3. P3 is better again, because it makes far fewer tests even for large primes: 30 against 1,007 for 1009.

Notice that the answers are all correct. The three algorithms differ only in the number of steps.

## Early exit

The idea behind P2 is called an **early exit**: finishing as soon as the answer is known instead of working
through all the data. Other places this is used are:

- a linear search that stops when the item is found, instead of continuing to the end of the list;
- a bubble sort that stops when a pass makes no swaps;
- a loop that checks a password and stops after the first mismatch.

Whenever you are asked how to improve an algorithm, look for work being done after the answer is already known.

## Efficiency depends on the data size

The difference between two algorithms is small for a few items and large for many items. Suppose a list has `n`
items sorted in order, and you search for a value that is not there.

| Items in list | Linear search (comparisons) | Binary search (comparisons, at most) |
|---|---|---|
| 10 | 10 | 4 |
| 100 | 100 | 7 |
| 1,000 | 1,000 | 10 |
| 1,000,000 | 1,000,000 | 20 |

For 10 items, binary search is only a little better. For a million items it needs 20 comparisons where linear
search may need a million. This is why efficiency matters most with large amounts of data. You can use this table
as the example required when an exam question says "explain how some algorithms are more efficient than others".
The searching algorithms are described in detail in the [searching algorithms
guide](/resources/oxfordaqa-igcse-computer-science-9210-searching-algorithms/), and the two sorting algorithms in
the [sorting algorithms guide](/resources/oxfordaqa-igcse-computer-science-9210-sorting-algorithms/).

## Worked example 3: improving a bubble sort

A bubble sort that always makes the maximum number of passes does needless work if the list is already sorted, or
nearly so. For the list `2, 1, 3, 4, 5, 6, 7, 8`:

| Version | Passes | Comparisons |
|---|---|---|
| Fixed number of passes (7 passes of shrinking length) | 7 | 28 |
| Stops when a pass makes no swaps | 2 | 14 |

Only the first pass needs to swap the 2 and the 1. The second pass confirms that nothing else moves. The improved
version stops after two passes with 14 comparisons, and the fixed version carries on for 28 comparisons. The
specification expects you to know the improved version that has a flag showing whether any swaps happened.

## Comparing algorithms: how to write the answer

A strong comparison answer has four parts:

1. **Name** the two algorithms.
2. **State** what the difference in method is (for example, "halves the list" or "tests every item").
3. **Give a count or an example** of the number of steps, for a stated amount of data.
4. **Conclude** which one is more efficient and say when it is not (for instance, if the data is not sorted).

For example: "Binary search is more efficient than linear search, because it discards half of the remaining items
at each comparison, so a sorted list of 1,000 items needs at most 10 comparisons, whereas linear search might need
1,000. However, binary search can only be used when the list is sorted."

## Common mistakes

- Judging efficiency by the number of **lines of code**. A short program may do a great deal of work.
- Writing "it is faster" without a reason. You must say **why**: fewer comparisons, fewer passes or earlier stopping.
- Describing memory use when the question is about time. The specification says exam questions refer only to time
  efficiency.
- Saying that a more efficient algorithm is always better. It may need the data to be in a special state (such as
  sorted) or may be harder to write.
- Using vague words such as "quicker" without any figures. Include a small number, such as 10 against 1,000.
- Confusing a faster **computer** with a more efficient **algorithm**. A faster computer runs the same number of
  steps more quickly; a more efficient algorithm needs fewer steps.

## Exam technique

- **Compare** questions need both algorithms, not just one. Write a point about A and the matching point about B.
- **Explain** questions need the reason. Use "because" and say what the algorithm does differently.
- **Improve** questions: look for repeated work, or work done after the answer is known.
- **Count** questions: show the arithmetic, such as "98 tests against 1 test".
- Keep the answer about **time** unless told otherwise.

## More on this topic

For condensed recall and a short self-test, use the [Efficiency of algorithms revision
notes](/resources/oxfordaqa-igcse-computer-science-9210-efficiency-of-algorithms-revision-notes/), and practise
with the [Efficiency of algorithms practice
questions](/resources/oxfordaqa-igcse-computer-science-9210-efficiency-of-algorithms-practice/).
