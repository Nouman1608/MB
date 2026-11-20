---
title: "OxfordAQA IGCSE Computer Science (9210): Sorting algorithms -- Practice Questions"
seoTitle: "OxfordAQA IGCSE CS 9210 Sorting Algorithms Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 1 – Algorithms"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 1.04
syllabusTopics:
  - qualification: "igcse"
    topic: "algorithms-9210"
  - qualification: "igcse"
    topic: "algorithms-9210"
    subtopic: "sorting-algorithms-9210"
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on bubble sort, merge sort, writing pseudocode and comparing sorting algorithms."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs; examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Sorting algorithms study guide](/resources/oxfordaqa-igcse-computer-science-9210-sorting-algorithms/) | [Sorting algorithms revision notes](/resources/oxfordaqa-igcse-computer-science-9210-sorting-algorithms-revision-notes/)

These questions cover section 3.1.4 Sorting algorithms of the OxfordAQA International GCSE Computer Science (9210)
specification.

---

## Section A

**1.** In a bubble sort, state which items are compared at each step. **[1]**

**2.** State when a bubble sort that uses a swap flag decides to stop. **[1]**

**3.** In a merge sort, state when the splitting of a list stops. **[1]**

**4.** Describe what is meant by a recursive algorithm. **[2]**

## Section B

**5.** A bubble sort is applied to the list `[9, 4, 7, 1, 8, 3]` to put it in ascending order.

**(a)** Complete the table to show the list at the end of each pass. **[4]**

| Pass | List at the end of the pass | Number of swaps |
|---|---|---|
| 1 | 4, 7, 1, 8, 3, 9 | 5 |
| 2 | | |

**(b)** State the number of passes made, and explain why the last pass is needed. **[2]**

**(c)** Calculate the total number of comparisons made, if every pass compares all five pairs. **[1]**

**6.** Demonstrate how a merge sort sorts the list `[14, 6, 21, 3, 17, 9, 1]`. Take the first three items as
the left half when the first split is made. Show every split and every merge. **[6]**

**7.** Show how the lists `[2, 8, 11]` and `[3, 4, 12]` are merged into one sorted list. State the comparison made
at each step. **[3]**

**8.** Write pseudocode for a bubble sort of the array `scores` into ascending order. Your answer must use a
condition-controlled outer loop that depends on whether any swaps were made, and a count-controlled inner
loop. **[5]**

**9.** A student writes this code to swap `data[i]` and `data[i + 1]`.

```
data[i] ← data[i + 1]
data[i + 1] ← data[i]
```

**(a)** The array holds `[3, 1]` and `i` is 0. State the contents of the array after these two lines. **[1]**

**(b)** Explain why the swap fails, and describe how to correct it. **[2]**

**10.** A programmer writes the bubble sort below.

```
swapped ← False
REPEAT
  FOR i ← 0 TO LEN(data) - 2
    IF data[i] > data[i + 1] THEN
      temp ← data[i]
      data[i] ← data[i + 1]
      data[i + 1] ← temp
      swapped ← True
    ENDIF
  ENDFOR
UNTIL NOT swapped
```

**(a)** State what happens when this code is run on a list that needs at least one swap. **[2]**

**(b)** Describe the change that is needed. **[1]**

**11.** A list of seven items, `[1, 2, 3, 4, 5, 6, 7]`, is already in order. State the number of passes and the
number of comparisons a bubble sort with a swap flag makes. **[2]**

**12.** Compare bubble sort and merge sort. Include one advantage and one disadvantage of each. **[4]**

**13.** For a list that starts in reverse order, a bubble sort makes 9,900 comparisons for 100 items and 999,000
for 1,000 items. A merge sort makes 356 and 5,044. Use these figures to explain which algorithm a company should
choose to sort a list of one million customer records. **[3]**

---

## Answers

**1.** Two items next to each other (adjacent items) [1].

**2.** When a complete pass makes no swaps [1].

**3.** When each part of the list contains only one item [1].

**4.** An algorithm that calls itself [1] to solve a smaller version of the same problem [1].

**5.** **(a)**

| Pass | List at the end of the pass | Number of swaps |
|---|---|---|
| 1 | 4, 7, 1, 8, 3, 9 | 5 |
| 2 | 4, 1, 7, 3, 8, 9 | 2 |
| 3 | 1, 4, 3, 7, 8, 9 | 2 |
| 4 | 1, 3, 4, 7, 8, 9 | 1 |
| 5 | 1, 3, 4, 7, 8, 9 | 0 |

One mark for each of passes 2, 3, 4 and 5 with the correct list and number of swaps [4].
**(b)** 5 passes [1]; the last pass makes no swaps, which is the only way the algorithm can tell that the list is
sorted [1].
**(c)** 25 [1] (5 passes of 5 comparisons).

**6.** Splitting: `[14, 6, 21, 3, 17, 9, 1]` into `[14, 6, 21]` and `[3, 17, 9, 1]` [1]; then `[14]`, `[6, 21]`,
`[3, 17]` and `[9, 1]` [1]; then down to single items `[14]`, `[6]`, `[21]`, `[3]`, `[17]`, `[9]`, `[1]` [1].
Merging: `[6, 21]` and `[1, 9]` and `[3, 17]` formed from single items [1]; `[6, 14, 21]` and `[1, 3, 9, 17]` [1];
final merge to `[1, 3, 6, 9, 14, 17, 21]` [1].

**7.** 2 and 3 compared, 2 taken [1]; 8 against 3 gives 3, then 8 against 4 gives 4, then 8 against 12 gives 8, then
11 against 12 gives 11 [1]; the first list is empty, so 12 is added to give `[2, 3, 4, 8, 11, 12]` [1].

**8.** One possible answer:

```
REPEAT
  swapped ← False
  FOR i ← 0 TO LEN(scores) - 2
    IF scores[i] > scores[i + 1] THEN
      temp ← scores[i]
      scores[i] ← scores[i + 1]
      scores[i + 1] ← temp
      swapped ← True
    ENDIF
  ENDFOR
UNTIL NOT swapped
```

Outer loop that repeats until a pass has no swaps [1]; flag reset to False at the start of each pass [1]; inner
`FOR` loop with correct limits [1]; correct comparison of adjacent items [1]; swap using a temporary variable, and
the flag set to True when a swap happens [1].

**9.** **(a)** `[1, 1]` [1].
**(b)** The first line overwrites `data[i]` before its value has been saved [1]; store `data[i]` in a temporary
variable first, then copy `data[i + 1]` into `data[i]` and the temporary variable into `data[i + 1]` [1].

**10.** **(a)** `swapped` is set to False only once, before the loop, so after the first swap it stays True [1], and
the `UNTIL NOT swapped` condition is never met, so the loop repeats forever [1]. **(b)** Put `swapped ← False`
inside the `REPEAT` loop, before the `FOR` loop [1].

**11.** 1 pass [1] and 6 comparisons [1], because no swaps are made so the algorithm stops after the first pass.

**12.** Bubble sort advantage: simple to write, or needs no extra lists [1]. Bubble sort disadvantage: slow on long
lists because of the large number of comparisons [1]. Merge sort advantage: far fewer comparisons on long lists [1].
Merge sort disadvantage: more complex to write, or needs extra memory for the lists it creates [1].

**13.** Merge sort [1]. For 1,000 items bubble sort needs about 200 times as many comparisons as merge sort
(999,000 against 5,044) [1], and the gap widens as the list grows, so for a million records bubble sort would take far
longer [1].

---

## Where marks are usually lost

- Leaving out the final pass with no swaps in a bubble sort trace, as in Question 5.
- Swapping two items without a temporary variable, as in Question 9.
- Putting the flag reset outside the loop, as in Question 10.
- Describing merge sort as sorting the halves while splitting them, rather than when merging.
- Giving an advantage of bubble sort without saying why (such as simplicity or no extra storage).
