---
title: "AQA A-Level Computer Science (7517): Sorting algorithms -- Practice Questions"
seoTitle: "AQA A-Level CS Sorting Algorithms Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of algorithms"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 3.5
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-algorithms"
  - qualification: "a-level"
    topic: "fundamentals-of-algorithms"
    subtopic: "sorting-algorithms-7517"
description: "Original AQA 7517 section 4.3.5 questions with answers: tracing and analysing bubble sort and merge sort and comparing their time complexity."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs, because examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Sorting algorithms study guide](/resources/aqa-a-level-computer-science-7517-sorting-algorithms/) | [Sorting algorithms revision notes](/resources/aqa-a-level-computer-science-7517-sorting-algorithms-revision-notes/)

All lists are sorted into ascending order. In a bubble sort each pass compares adjacent pairs from the start of the list and stops one pair earlier than the previous pass, and the sort ends after a pass in which no swap is made. In a merge sort a list of length `n` is split into a first half of `n DIV 2` items and a second half containing the rest.

---

## Section A

**1.** State the time complexity of bubble sort in Big-O notation. **[1]**

**2.** State the time complexity of merge sort in Big-O notation. **[1]**

**3.** State what is meant by a divide and conquer algorithm. **[2]**

**4.** State the base case of the merge sort algorithm. **[1]**

**5.** Explain why a bubble sort needs a final pass in which no swaps are made. **[2]**

## Section B

**6.** The list `9, 4, 6, 1, 8, 2` is sorted using a bubble sort.

**(a)** Show the list at the end of each pass until the sort ends. **[5]**
**(b)** State the total number of comparisons made. **[2]**
**(c)** State the total number of swaps made. **[1]**

**7.** Write a bubble sort subroutine that sorts an array `list` of `n` items into ascending order and stops early if a pass makes no swaps. **[5]**

**8.** The list `11, 4, 16, 2, 13, 8, 6` is sorted using a merge sort.

**(a)** Show how the list is divided until every part has one item. **[2]**
**(b)** Show each merge, in the order in which they take place. **[4]**

**9.** Two sorted lists, `2, 9, 15, 21` and `4, 5, 16`, are merged into one sorted list.

**(a)** Give the merged list. **[1]**
**(b)** State the number of comparisons made. **[2]**

**10.** Explain, with reference to the number of times a list can be halved and the work done at each level, why merge sort has time complexity O(n log n). **[3]**

**11.** A bubble sort of 1,000 items in the worst case makes n(n − 1)/2 comparisons.

**(a)** Calculate the number of comparisons for 1,000 items. **[1]**
**(b)** Calculate the number of comparisons for 100 items. **[1]**
**(c)** State, with a reason, roughly how many times more work is needed when the number of items is multiplied by 10. **[2]**

**12.** A bubble sort is run on the list `1, 2, 3, 4, 5`. State the number of comparisons made and the number of swaps, and explain what this shows about the benefit of the early-exit check. **[3]**

**13.** A company must sort a list of 5 million customer records each night. A developer proposes a bubble sort because it is simple to write. Evaluate this proposal and recommend an algorithm. **[4]**

---

## Answers

**1.** O(n²) [1].

**2.** O(n log n) [1].

**3.** The problem is split into smaller problems of the same type [1]; the smaller problems are solved (usually recursively) and their solutions combined to solve the original problem [1].

**4.** A list containing one item (or no items), which is already sorted [1].

**5.** The algorithm cannot tell that the list is in order until it has checked every adjacent pair [1]; a pass with no swaps shows that every pair is in the correct order, so the sort can stop [1].

**6. (a)**

| Pass | List at the end |
|---|---|
| 1 | 4, 6, 1, 8, 2, 9 |
| 2 | 4, 1, 6, 2, 8, 9 |
| 3 | 1, 4, 2, 6, 8, 9 |
| 4 | 1, 2, 4, 6, 8, 9 |
| 5 | 1, 2, 4, 6, 8, 9 |

One mark for each correct pass [5].
**(b)** Passes 1 to 5 make 5, 4, 3, 2 and 1 comparisons [1]; total 15 [1].
**(c)** 10 swaps [1]. (Pass 1: 5 swaps, pass 2: 2, pass 3: 2, pass 4: 1, pass 5: 0.)

**7.**
```
SUBROUTINE BubbleSort(list, n)
    REPEAT
        swapped ← False
        FOR i ← 0 TO n - 2
            IF list[i] > list[i + 1] THEN
                temp ← list[i]
                list[i] ← list[i + 1]
                list[i + 1] ← temp
                swapped ← True
            ENDIF
        NEXT i
        n ← n - 1
    UNTIL swapped = False
ENDSUBROUTINE
```
Outer loop that repeats passes [1]; inner loop comparing each adjacent pair list[i] and list[i + 1] [1]; correct swap using a temporary variable [1]; flag set when a swap is made and reset at the start of each pass [1]; loop ends when no swap was made [1]. (Shortening each pass, as shown, is not required for the mark.)

**8. (a)** `11, 4, 16, 2, 13, 8, 6` splits into `11, 4, 16` and `2, 13, 8, 6` [1]; then `11`, `4, 16`, `2, 13`, `8, 6`, and finally every item on its own [1].
**(b)** Merge 4 and 16 giving `4, 16` [1]; merge `11` with `4, 16` giving `4, 11, 16` [1]; merge `2` with `13` giving `2, 13` and `8` with `6` giving `6, 8`, then merge those giving `2, 6, 8, 13` [1]; final merge of `4, 11, 16` and `2, 6, 8, 13` giving `2, 4, 6, 8, 11, 13, 16` [1].

**9. (a)** `2, 4, 5, 9, 15, 16, 21` [1].
**(b)** 2 v 4, 9 v 4, 9 v 5, 9 v 16, 15 v 16, 21 v 16 [1]; this is 6 comparisons; the right list is then empty and 21 is copied without a comparison [1].

**10.** A list of n items can be halved about log₂ n times before parts have one item, so there are about log₂ n levels [1]; at each level all of the n items are merged, with about one comparison per item [1]; total work is about n × log₂ n, so O(n log n) [1].

**11. (a)** 1,000 × 999 / 2 = 499,500 [1].
**(b)** 100 × 99 / 2 = 4,950 [1].
**(c)** About 100 times as much work [1]; because the time complexity is O(n²), multiplying n by 10 multiplies n² by 100 [1].

**12.** 4 comparisons and 0 swaps [2]; the early-exit check stops after a single pass when the list is already sorted, so the work is proportional to n rather than n² [1].

**13.** Bubble sort is O(n²), so 5 million items could need about 12.5 trillion comparisons [1]; this would take far too long for a nightly job [1]; merge sort is O(n log n), roughly 5 million × 22 = 110 million steps, which is thousands of times less work [1]; recommend merge sort, noting that it needs extra memory of the order of n and is harder to implement, but that the saving in time outweighs this [1].

---

## Where marks are usually lost

- Comparing and swapping items that are not adjacent in bubble sort.
- Leaving out the last pass, which has no swaps.
- Joining two halves together instead of merging by comparing front items.
- Quoting a complexity without a reason such as halving or repeated passes.
- Forgetting the memory cost of merge sort when asked to evaluate.
