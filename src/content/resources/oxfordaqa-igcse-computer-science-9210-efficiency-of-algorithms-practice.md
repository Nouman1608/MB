---
title: "OxfordAQA IGCSE Computer Science (9210): Efficiency of algorithms -- Practice Questions"
seoTitle: "OxfordAQA IGCSE CS 9210 Efficiency of Algorithms Practice"
resourceType: "practice-questions"
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
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on comparing the time efficiency of algorithms by counting steps."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Efficiency of algorithms study guide](/resources/oxfordaqa-igcse-computer-science-9210-efficiency-of-algorithms/) | [Efficiency of algorithms revision notes](/resources/oxfordaqa-igcse-computer-science-9210-efficiency-of-algorithms-revision-notes/)

These questions cover section 3.1.2 Efficiency of algorithms of the OxfordAQA International GCSE Computer Science
(9210) specification.

---

## Section A

**1.** State what is meant by the term "time efficiency" when comparing two algorithms. **[1]**

**2.** Explain why it is possible for two different algorithms to solve the same problem. **[2]**

**3.** A student says, "Algorithm X has fewer lines of code, so it must be more efficient than Algorithm Y."
Explain why this reasoning may be wrong. **[2]**

**4.** A sorted list holds 1,000 items.

**(a)** State the greatest number of comparisons a binary search needs to find an item, or to show that it is
absent. **[1]**

**(b)** State the greatest number of comparisons a linear search needs for the same list. **[1]**

**5.** State two reasons why a company might prefer a more time-efficient algorithm even though a faster computer
is available. **[2]**

## Section B

**6.** Two algorithms add up the whole numbers from 1 to `n`.

```
-- Algorithm A
total ← 0
FOR i ← 1 TO n
  total ← total + i
ENDFOR
OUTPUT total

-- Algorithm B
OUTPUT n * (n + 1) DIV 2
```

**(a)** State the value that both algorithms output when `n` is 200. **[1]**

**(b)** State how many additions Algorithm A performs when `n` is 200. **[1]**

**(c)** Explain why Algorithm B is more time efficient when `n` is 20,000. **[2]**

**7.** The algorithm below tests whether the number `n` is a multiple of any number from 2 up to `n - 1`.

```
found ← False
FOR i ← 2 TO n - 1
  IF n MOD i = 0 THEN
    found ← True
  ENDIF
ENDFOR
```

**(a)** State how many times the condition `n MOD i = 0` is tested when `n` is 100. **[1]**

**(b)** The first multiple, 2, is found on the first test. Explain why the algorithm is inefficient for this
value of `n`. **[2]**

**(c)** Describe a change that improves the algorithm so that it stops as soon as a multiple is found. **[2]**

**(d)** State how many times the condition is tested in the improved version when `n` is 91 (which is 7 × 13), and
when `n` is 97 (which has no divisors other than 1 and itself). **[2]**

**8.** A shop keeps a list of 5,000 product codes sorted in ascending order. A programmer proposes using a linear
search. Compare linear search with a binary search for this task. **[4]**

**9.** A bubble sort sorts the list `2, 1, 3, 4, 5, 6, 7, 8`.

**(a)** Version 1 makes seven passes, with 7, 6, 5, 4, 3, 2 and 1 comparisons. Calculate the total number of
comparisons. **[1]**

**(b)** Version 2 makes 7 comparisons on every pass and stops after a pass in which no swaps happen. State the
number of passes and the total number of comparisons. **[2]**

**(c)** State why Version 2 is more efficient for this list. **[1]**

**10.** A program checks whether a username is already used by searching an unsorted list of 200 usernames.

```
used ← False
FOR i ← 0 TO 199
  IF names[i] = newName THEN
    used ← True
  ENDIF
ENDFOR
```

**(a)** The name being checked is the first item in the list. State how many comparisons the algorithm makes. **[1]**

**(b)** Explain why this is wasteful and describe how to improve the algorithm. **[3]**

**11.** Explain why a binary search might not be a better choice than a linear search for a list of 10 items that is
not sorted. **[3]**

---

## Answers

**1.** How few steps (for example comparisons or loop passes) an algorithm needs to complete a task [1].

**2.** A problem is a task with a required result, and more than one sequence of steps can achieve it [1]; for
example, a list can be sorted by bubble sort or by merge sort [1].

**3.** The number of lines does not show the amount of work done [1]; a short loop can repeat many times, so a
short program can carry out more steps than a longer one [1].

**4.** **(a)** 10 [1]. **(b)** 1,000 [1].

**5.** Any two from: the algorithm will still need fewer steps on any computer [1]; it will be better as the amount
of data grows [1]; it saves time or processor effort when used many times [1].

**6.** **(a)** 20,100 [1]. **(b)** 200 [1]. **(c)** Algorithm A does 20,000 additions [1], but Algorithm B does the same
fixed small number of calculations whatever `n` is [1].

**7.** **(a)** 98 [1] (the values of `i` from 2 to 99). **(b)** The loop carries on testing every value up to 99 [1]
even though the answer is already known [1]. **(c)** Replace the `FOR` loop with a `WHILE` loop whose condition
also stops when `found` is True [1], so that `i` is only increased while no multiple has been found [1].
**(d)** 91: 6 tests [1] (it stops at 7); 97: 95 tests [1].

**8.** Linear search checks the items one at a time [1], so it may need up to 5,000 comparisons [1]. Binary search
compares with the middle item and discards half each time [1], so it needs no more than 13 comparisons for 5,000
sorted items, so it is much more efficient [1]. (Because 2 to the power 12 is 4,096 and 2 to the power 13 is 8,192,
13 comparisons are enough.)

**9.** **(a)** 28 [1]. **(b)** 2 passes [1] and 14 comparisons [1]. **(c)** It stops once a pass makes no swaps, so it
avoids the unnecessary passes that Version 1 makes [1].

**10.** **(a)** 200 [1] (the loop always runs to the end). **(b)** The answer (True) is known after the first
comparison [1], but the loop still compares the other 199 names [1]. Improve it by stopping the search as soon as
the name is found, for example by using a `WHILE` loop that also tests `NOT used` [1].

**11.** Binary search needs the list to be sorted [1], so the list would need to be sorted first, which takes extra
steps [1]; with only 10 items, linear search takes at most 10 comparisons, so the saving from binary search is
small [1].

---

## Where marks are usually lost

- Writing "it is faster" without explaining that fewer steps are needed.
- Counting lines of code instead of steps, as in Question 3.
- Forgetting that binary search needs sorted data, as in Question 11.
- Not showing the arithmetic in a counting question, such as the 7 + 6 + 5 + 4 + 3 + 2 + 1 in Question 9.
- Writing about memory when the question asks only about time.
