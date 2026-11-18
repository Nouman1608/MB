---
title: "Edexcel International A Level Mathematics (YMA01): Algorithms -- Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit D1: Decision Mathematics 1"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 9.1
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-d1-decision-mathematics-1-edexcel-alevel-maths"
    subtopic: "d1-algorithms-edexcel-alevel-maths"
description: "Twelve original Edexcel IAL Maths D1 algorithm questions with full traces: text algorithms, bubble sort, quick sort, binary search and bin packing bounds."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

These questions cover Unit D1, section 1: implementing algorithms given in text, and bin packing, bubble sort, quick sort and binary search. Use the glossary's middle-item rule throughout, and choose the middle item as the pivot in quick sort.

Related: [algorithms revision notes](/resources/edexcel-a-level-mathematics-yma01-d1-algorithms-edexcel-alevel-maths-revision-notes/) and the [algorithms study guide](/resources/edexcel-a-level-mathematics-yma01-d1-algorithms-edexcel-alevel-maths/).

---

## Section A

**1.** Using the D1 glossary rule, state the position of the middle item of a list of 17 items and of a list of 24 items. In a binary search, the items still under consideration are in positions 30 to 41. State the position of the middle item. **[3]**

**2.** Items of total size 83 are to be packed into bins of capacity 20. Find a lower bound for the number of bins needed, showing your working. **[2]**

**3.** An algorithm is given below.

```
1  Input n
2  Let S = 0 and k = 1
3  Replace S by S + k
4  Replace k by k + 2
5  If k < 2n, go to step 3
6  Output S
```

Implement the algorithm with n = 4, and state what it calculates for any positive integer n. **[3]**

**4.** Explain why a binary search can only be applied to an ordered list, and state what happens if the target is not in the list. **[2]**

## Section B

**5.** Use a bubble sort to arrange 56, 23, 71, 38, 12, 45, 29 into ascending order. Shorten each pass by one comparison.

**(a)** Show the list after each pass. **[4]**

**(b)** State the total number of comparisons and of swaps. **[2]**

**6.** Use a quick sort to arrange these words into alphabetical order, showing the pivots on each line:

```
Kite  Bell  Pear  Drum  Fig  Ant  Moth  Cup
```

**[5]**

**7.** The ordered list below is to be searched using a binary search.

```
1 Abel   2 Bryn   3 Cara   4 Dale   5 Ella   6 Finn   7 Gwen   8 Hana
9 Ivor  10 Jude  11 Kian  12 Lara  13 Mira  14 Nico  15 Owen
```

**(a)** Search for Kian, showing every step. **[3]**

**(b)** Search for Carl, showing every step. **[3]**

**8.** Ten items of sizes 4, 8, 3, 6, 5, 7, 2, 9, 4, 2 are to be packed into bins of capacity 10.

**(a)** Find a lower bound for the number of bins. **[1]**

**(b)** Use first-fit, in the order given. **[2]**

**(c)** Use first-fit decreasing. **[2]**

**(d)** Explain why it is impossible to pack the items into the number of bins given by the lower bound. **[2]**

**9.** The list 14, 27, 9, 33, 21, 40, 18 is to be sorted into **descending** order using a bubble sort. Write down the list after the first pass, and state the number of comparisons and swaps in that pass. **[3]**

**10.** An algorithm is given below.

```
1  Input N
2  Let s be an empty string
3  Let R be the remainder when N is divided by 2
4  Write R at the left-hand end of s
5  Replace N by INT(N/2)
6  If N > 0, go to step 3
7  Output s
```

**(a)** Implement the algorithm with N = 45, showing the values of N, R and s. **[4]**

**(b)** State what the algorithm achieves. **[1]**

**11.** A list of n items is sorted using a bubble sort. State the maximum number of passes needed, and explain why. **[2]**

**12.** State two properties that every algorithm must have. **[2]**

---

## Answers

**1.** 17 items: (17 + 1)/2 = **9th** [1]. 24 items: (24 + 2)/2 = **13th** [1]. Positions 30 to 41: (30 + 41)/2 = 35.5, rounded up to **36** [1].

**2.** 83 ÷ 20 = 4.15 [1], so the lower bound is **5 bins** (rounding up) [1].

**3.** S takes the values 1, 4, 9, 16 as k takes 1, 3, 5, 7; then k = 9, which is not less than 8 [1]. Output **16** [1]. The algorithm adds the first n odd numbers, so it calculates **n²** [1].

**4.** Each comparison with the middle item discards half the list, which is only valid if every item before the middle comes earlier in the order and every item after comes later [1]. If the target is absent, the list under consideration eventually becomes empty and the search reports that the item is not in the list [1].

**5. (a)** Pass 1: 23 56 38 12 45 29 71 [1]. Pass 2: 23 38 12 45 29 56 71 [1]. Pass 3: 23 12 38 29 45 56 71 [1]. Pass 4: 12 23 29 38 45 56 71; pass 5 makes no swaps, so the sort stops [1].

**(b)** Comparisons: 6 + 5 + 4 + 3 + 2 = **20** [1]. Swaps: 5 + 4 + 2 + 2 + 0 = **13** [1].

**6.** 8 items, pivot 5th = Fig: Bell Drum Ant Cup **Fig** Kite Pear Moth [1]. Pivots Ant (3rd of 4) and Pear (2nd of 3): **Ant** Bell Drum Cup **Fig** Kite Moth **Pear** [1]. Pivots Drum (2nd of 3) and Moth (2nd of 2): Ant Bell Cup **Drum** Fig Kite **Moth** Pear [1]. Pivot Cup (2nd of 2): Ant Bell **Cup** Drum Fig Kite Moth Pear [1]. Every item is now a pivot or alone, so the list is sorted: **Ant, Bell, Cup, Drum, Fig, Kite, Moth, Pear** [1].

**7. (a)** Positions 1–15: middle 8, Hana; Kian is after Hana, keep 9–15 [1]. Middle ⌈24/2⌉ = 12, Lara; Kian is before Lara, keep 9–11 [1]. Middle 10, Jude; Kian is after, keep 11. Middle 11, **Kian found** [1].

**(b)** Middle 8, Hana; Carl is before, keep 1–7 [1]. Middle 4, Dale; Carl is before, keep 1–3. Middle 2, Bryn; Carl is after, keep 3 [1]. Middle 3, Cara; Carl is after Cara, so no items remain: **Carl is not in the list** [1].

**8. (a)** 50 ÷ 10 = 5 bins [1].

**(b)** Bin 1: 4, 3, 2; bin 2: 8, 2; bin 3: 6, 4; bin 4: 5; bin 5: 7; bin 6: 9 [1]. **6 bins** [1].

**(c)** Sorted: 9, 8, 7, 6, 5, 4, 4, 3, 2, 2. Bin 1: 9; bin 2: 8, 2; bin 3: 7, 3; bin 4: 6, 4; bin 5: 5, 4; bin 6: 2 [1]. **6 bins** [1].

**(d)** Five bins of capacity 10 hold exactly 50, so every bin would have to be exactly full [1]. The item of size 9 needs an item of size 1 to fill its bin, and there is none, so 5 bins is impossible and 6 is optimal [1].

**9.** 27 14 33 21 40 18 9 [1]; **6 comparisons** [1] and **5 swaps** [1].

**10. (a)** N = 45, R = 1, s = 1; N = 22, R = 0, s = 01 [1]; N = 11, R = 1, s = 101; N = 5, R = 1, s = 1101 [1]; N = 2, R = 0, s = 01101; N = 1, R = 1, s = 101101 [1]; N = 0, so output **101101** [1].

**(b)** It converts N into binary (base 2) [1].

**11.** **n − 1 passes** [1]. Each pass places at least one more item in its final position, so after n − 1 passes the remaining item must also be in place [1].

**12.** Any two: it is finite and always stops [1]; each instruction is precise and unambiguous; it produces an output that solves the problem for any valid input [1].

---

## Where marks are usually lost

- Rounding the middle position down in Questions 1 and 7.
- Reordering items within a sublist in Question 6.
- Missing the final pass with no swaps in Question 5.
- Giving 5 as the answer in Question 8 without checking whether the lower bound can be reached.
- Stating the output of an algorithm without saying what it achieves.
