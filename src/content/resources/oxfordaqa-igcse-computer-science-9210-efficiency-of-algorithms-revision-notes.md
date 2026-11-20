---
title: "OxfordAQA IGCSE Computer Science (9210): Efficiency of algorithms -- Revision Notes"
seoTitle: "OxfordAQA IGCSE CS 9210 Efficiency of Algorithms Notes"
resourceType: "revision-notes"
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
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.1.2: comparing time efficiency of algorithms by counting steps, early exit and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Condensed notes for section **3.1.2 Efficiency of algorithms** of OxfordAQA International GCSE Computer Science
(9210). Worked examples are in the [Efficiency of algorithms study
guide](/resources/oxfordaqa-igcse-computer-science-9210-efficiency-of-algorithms/).

## What the specification asks

- Understand that **more than one algorithm** can be used to solve the same problem.
- **Compare the efficiency** of algorithms, explaining how some are more efficient than others for the same
  problem.
- Formal comparisons (such as Big O) are **not required**.
- Exam questions refer **only to time efficiency**.

## Key ideas

| Idea | Meaning |
|---|---|
| Algorithm | A sequence of steps that completes a task |
| Time efficiency | How few steps (comparisons, assignments, loop passes) an algorithm needs to reach the answer |
| Early exit | Stopping as soon as the answer is known instead of finishing all the data |
| Efficient | Does less work than another algorithm that gives the same result |

Time efficiency is about the **number of steps**, not seconds. Seconds depend on the computer; steps do not.

## Pairs of algorithms to know

| Problem | Algorithm 1 | Algorithm 2 | Why one does less work |
|---|---|---|---|
| Find an item | Linear search | Binary search | Binary search halves the sorted list each time |
| Sort a list | Bubble sort | Merge sort | Merge sort splits and merges, so needs fewer comparisons on large lists |
| Add 1 to 1,000 | Loop with 1,000 additions | `n * (n + 1) DIV 2` | The formula does the same 3 calculations whatever n is |
| Is n prime? | Test every divisor | Stop at the first divisor, and test only up to the square root | Fewer tests |

## Counting steps: the numbers to remember

Searching for a value that is not in a sorted list:

| Items | Linear search | Binary search (at most) |
|---|---|---|
| 10 | 10 | 4 |
| 100 | 100 | 7 |
| 1,000 | 1,000 | 10 |
| 1,000,000 | 1,000,000 | 20 |

The gap is small for small lists and huge for large lists, so efficiency matters most for large amounts of data.

Prime test, counting divisions tested:

| n | Every divisor | Early exit | Early exit up to square root |
|---|---|---|---|
| 100 | 98 | 1 | 1 |
| 97 | 95 | 95 | 8 |

Early exit helps only when a divisor exists; for a prime the saving comes from stopping at the square root.

## Bubble sort and early stopping

For the list 2, 1, 3, 4, 5, 6, 7, 8 a bubble sort with a fixed number of passes makes 28 comparisons. The version that
stops when a pass makes no swaps makes 14 comparisons in 2 passes. Always say what **work is avoided**.

## Where to look for inefficiency

1. Work repeated that gives the same result each time.
2. A loop that keeps going after the answer is found.
3. Testing more items than necessary.
4. A method that treats sorted data as if it were unsorted (such as linear search on a sorted list of a million
   items).

## How to write a comparison answer

1. Name both algorithms.
2. State how each one works (the key difference).
3. Give a number of steps for a stated amount of data.
4. Conclude which is more efficient, and mention any condition (for example, the list must be sorted).

Sentence frame: "A is more efficient than B because it ..., so for ... items it needs about ... steps rather than ...".

## Model answer

**Compare the efficiency of a linear search and a binary search of a sorted list of 1,000 items. [4 marks]**

A linear search checks the items one at a time, so it may need up to 1,000 comparisons. A binary search compares the
target with the middle item and discards half of the list each time, so it needs at most 10 comparisons. Binary search
is therefore more time efficient for a large list. It can only be used if the list is sorted.

Notice the four ingredients: both algorithms named, the method of each, a number of steps for the same data, and a
conclusion with its condition.

## Exam traps

- **Counting lines of code.** Short code can still do a lot of work.
- **"It is faster" with no reason.** Always say why: fewer comparisons, fewer passes, earlier stopping.
- **Talking about memory** when the question says time. This specification only examines time efficiency.
- **Faster computer, not better algorithm.** A faster computer does the same steps more quickly; a better algorithm
  needs fewer steps.
- **Forgetting conditions.** Binary search is only more efficient if the data is **sorted**.

## Key terms

| Term | Meaning |
|---|---|
| Comparison | Testing two values against each other, such as `n MOD i = 0` or `nums[i] > largest` |
| Pass | One complete trip through the data or loop |
| Trade-off | Gaining one benefit at the cost of another, such as speed against needing sorted data |

## Self-test

1. State what is meant by time efficiency in 9210.
2. Give two problems that have more than one algorithm.
3. A list has 1,000 sorted items. State the most comparisons a binary search needs.
4. State the number of comparisons a linear search needs in the worst case for the same list.
5. Describe what an early exit is, with an example.
6. Explain why a faster computer does not make an algorithm more efficient.
7. Explain why `total ← n * (n + 1) DIV 2` is more efficient than adding the numbers in a loop.
8. State one condition that must be true before a binary search is used.
9. A bubble sort of 8 items without early stopping makes 28 comparisons. State why stopping after a pass with no
   swaps can save work.
10. State whether you need Big O notation for this specification.

**Answers:**
1. How few steps (such as comparisons) an algorithm needs to complete a task.
2. Any two, such as searching (linear or binary) and sorting (bubble or merge).
3. 10.
4. 1,000.
5. Stopping as soon as the answer is known, such as a linear search stopping when the item is found.
6. It runs the same number of steps, only more quickly. A more efficient algorithm needs fewer steps.
7. The formula does a fixed number of calculations whatever the value of n, whereas the loop does one addition per
   number.
8. The list must be sorted.
9. If a pass makes no swaps, the list is already in order, so further passes are unnecessary.
10. No. Formal comparisons are not required.

## Related resources

- [Efficiency of algorithms study guide](/resources/oxfordaqa-igcse-computer-science-9210-efficiency-of-algorithms/)
- [Efficiency of algorithms practice questions](/resources/oxfordaqa-igcse-computer-science-9210-efficiency-of-algorithms-practice/)
- [Searching algorithms revision notes](/resources/oxfordaqa-igcse-computer-science-9210-searching-algorithms-revision-notes/)
