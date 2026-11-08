---
resourceId: "mb-ap-csp-3.11-study-guide"
title: "Binary Search: Study Guide (Computer Science Principles 3.11)"
description: "How binary search finds a value in a sorted list by repeatedly halving it, why sorted data is required, and how to work out the greatest number of checks. Two worked examples with an original trace diagram."
course: "computer-science-principles"
unit: 3
topics: ["3.11"]
resourceType: "study-guide"
prerequisites:
  - "Lists and linear search (Topic 3.10)"
  - "Iteration (Topic 3.8)"
prerequisiteResources: ["mb-ap-csp-3.10-study-guide"]
learningObjectives:
  - "Describe how binary search works and why the data must be sorted"
  - "Trace a binary search and identify which half is eliminated at each check"
  - "Determine the greatest number of checks needed for a list of a given size"
  - "Compare linear and binary search and choose the appropriate one"
skills: ["1"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.11-revision-notes", "mb-ap-csp-3.11-practice", "mb-ap-csp-3.11-checklist"]
next: "mb-ap-csp-3.11-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "Binary search starts at the middle of a sorted list and eliminates half of the remaining data with each check."
  - "The data must be in sorted order; on unsorted data it can wrongly report not found."
  - "The greatest number of checks is how many times the size can be halved, plus one: 10 for 1,000 items, 20 for a million."
  - "Doubling the list adds only one check for binary search."
  - "Binary search is often more efficient than linear search on sorted data, but linear search needs no sorting."
faqs:
  - question: "Why must the data be sorted for binary search?"
    answer: "Because binary search discards half of the data after each comparison. That is only safe if everything in the discarded half is on the wrong side of the target, which sorting guarantees."
  - question: "How many checks does binary search need for 1000 items?"
    answer: "At most 10, because 2 to the power 10 is 1,024, so 10 halvings reduce 1,000 items to one candidate."
  - question: "Is binary search always faster than linear search?"
    answer: "No. For a small list or a target near the start, linear search can be as quick. Binary search is usually far faster for large sorted data."
  - question: "Do I need to write binary search code for the exam?"
    answer: "No. Specific implementations are outside the course. You must understand how it works, its requirement for sorted data and how to find the number of iterations."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Imagine looking for a name in a printed phone book. You do not start at page 1 and read every name; you open the book near the middle, see whether your name comes before or after that page, and throw away the half you do not need. Then you repeat on the half that is left. **Binary search** is exactly this strategy turned into an algorithm, and it is dramatically faster than checking every item when the data is large. This topic explains how binary search works, why the data must be **sorted**, and how to work out the greatest number of checks it needs.

**Notation.** The exam uses its own pseudocode, not a real programming language. The code in this pack is Marlbridge's rendering of that reference notation, not a copy of the official sheet: `←` is assignment, `=` tests equality, lists start at index 1, `DISPLAY` shows a value, and braces mark blocks. Use the Exam Reference Sheet from your teacher for the official wording.

**Scope.** The course expects you to understand the idea and to work out the number of iterations. *Specific implementations* of binary search are outside the course and the exam. The code in this guide is an illustration to help you see the process, and it uses a procedure (see Topic 3.12).

## How binary search works

Binary search finds a target value in a **sorted** list. The steps are:

1. Look at the **middle** element of the part of the list still under consideration.
2. If it equals the target, you are done.
3. If the target is **smaller** than the middle element, every element at or above the middle is too big: **eliminate that half**, keeping the lower part.
4. If the target is **larger**, eliminate the lower half, keeping the upper part.
5. Repeat on the remaining half until the target is found or no elements remain.

Each check removes **about half** of what is left. That is why it is so fast: after 10 checks a list of 1,000 values has been narrowed to a single candidate.

**Why the data must be sorted.** Step 3 is only valid because in a sorted list everything above the middle element is at least as big. If the data is in no order, throwing away half the list may throw away the target. So the exam fact is simple: **binary search requires the data to be in sorted order**. Linear search has no such requirement.

<figure>
<svg viewBox="0 0 770 262" role="img" aria-labelledby="f311-t f311-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="14">
<title id="f311-t">Binary search for 52 in a sorted list of 15 values</title>
<desc id="f311-d">Four rows each showing the same fifteen sorted values: 3, 8, 12, 15, 21, 26, 30, 34, 41, 47, 52, 58, 63, 71, 79. In check 1 all values are live and the middle value 34 is highlighted. In check 2 the values up to 34 are greyed and marked gone and the middle of the rest, 58, is highlighted. In check 3 the values from 58 up are also gone and the middle of the rest, 47, is highlighted. In check 4 only 52 remains live and it is highlighted: found.</desc>
<rect x="0" y="0" width="770" height="262" fill="#ffffff"/>
<defs><marker id="f311-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<text x="10" y="45" text-anchor="start" font-size="12" font-weight="bold" fill="#1d2b44">check 1</text><rect x="130" y="20" width="40" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="150.0" y="43" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">3</text><rect x="170" y="20" width="40" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="190.0" y="43" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">8</text><rect x="210" y="20" width="40" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="230.0" y="43" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">12</text><rect x="250" y="20" width="40" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="270.0" y="43" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">15</text><rect x="290" y="20" width="40" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="310.0" y="43" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">21</text><rect x="330" y="20" width="40" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="350.0" y="43" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">26</text><rect x="370" y="20" width="40" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="390.0" y="43" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">30</text><rect x="410" y="20" width="40" height="36" fill="#fff4d6" stroke="#1d2b44" stroke-width="4"/><text x="430.0" y="43" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">34</text><text x="430.0" y="71" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">middle</text><rect x="450" y="20" width="40" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="470.0" y="43" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">41</text><rect x="490" y="20" width="40" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="510.0" y="43" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">47</text><rect x="530" y="20" width="40" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="550.0" y="43" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">52</text><rect x="570" y="20" width="40" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="590.0" y="43" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">58</text><rect x="610" y="20" width="40" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="630.0" y="43" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">63</text><rect x="650" y="20" width="40" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="670.0" y="43" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">71</text><rect x="690" y="20" width="40" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="710.0" y="43" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">79</text><text x="10" y="103" text-anchor="start" font-size="12" font-weight="bold" fill="#1d2b44">check 2</text><rect x="130" y="78" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="150.0" y="101" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">3</text><text x="150.0" y="129" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="170" y="78" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="190.0" y="101" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">8</text><text x="190.0" y="129" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="210" y="78" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="230.0" y="101" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">12</text><text x="230.0" y="129" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="250" y="78" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="270.0" y="101" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">15</text><text x="270.0" y="129" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="290" y="78" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="310.0" y="101" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">21</text><text x="310.0" y="129" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="330" y="78" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="350.0" y="101" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">26</text><text x="350.0" y="129" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="370" y="78" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="390.0" y="101" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">30</text><text x="390.0" y="129" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="410" y="78" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="430.0" y="101" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">34</text><text x="430.0" y="129" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="450" y="78" width="40" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="470.0" y="101" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">41</text><rect x="490" y="78" width="40" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="510.0" y="101" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">47</text><rect x="530" y="78" width="40" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="550.0" y="101" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">52</text><rect x="570" y="78" width="40" height="36" fill="#fff4d6" stroke="#1d2b44" stroke-width="4"/><text x="590.0" y="101" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">58</text><text x="590.0" y="129" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">middle</text><rect x="610" y="78" width="40" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="630.0" y="101" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">63</text><rect x="650" y="78" width="40" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="670.0" y="101" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">71</text><rect x="690" y="78" width="40" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="710.0" y="101" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">79</text><text x="10" y="161" text-anchor="start" font-size="12" font-weight="bold" fill="#1d2b44">check 3</text><rect x="130" y="136" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="150.0" y="159" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">3</text><text x="150.0" y="187" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="170" y="136" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="190.0" y="159" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">8</text><text x="190.0" y="187" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="210" y="136" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="230.0" y="159" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">12</text><text x="230.0" y="187" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="250" y="136" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="270.0" y="159" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">15</text><text x="270.0" y="187" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="290" y="136" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="310.0" y="159" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">21</text><text x="310.0" y="187" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="330" y="136" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="350.0" y="159" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">26</text><text x="350.0" y="187" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="370" y="136" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="390.0" y="159" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">30</text><text x="390.0" y="187" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="410" y="136" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="430.0" y="159" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">34</text><text x="430.0" y="187" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="450" y="136" width="40" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="470.0" y="159" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">41</text><rect x="490" y="136" width="40" height="36" fill="#fff4d6" stroke="#1d2b44" stroke-width="4"/><text x="510.0" y="159" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">47</text><text x="510.0" y="187" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">middle</text><rect x="530" y="136" width="40" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="550.0" y="159" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">52</text><rect x="570" y="136" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="590.0" y="159" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">58</text><text x="590.0" y="187" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="610" y="136" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="630.0" y="159" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">63</text><text x="630.0" y="187" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="650" y="136" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="670.0" y="159" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">71</text><text x="670.0" y="187" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="690" y="136" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="710.0" y="159" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">79</text><text x="710.0" y="187" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><text x="10" y="219" text-anchor="start" font-size="12" font-weight="bold" fill="#1d2b44">check 4</text><rect x="130" y="194" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="150.0" y="217" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">3</text><text x="150.0" y="245" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="170" y="194" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="190.0" y="217" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">8</text><text x="190.0" y="245" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="210" y="194" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="230.0" y="217" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">12</text><text x="230.0" y="245" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="250" y="194" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="270.0" y="217" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">15</text><text x="270.0" y="245" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="290" y="194" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="310.0" y="217" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">21</text><text x="310.0" y="245" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="330" y="194" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="350.0" y="217" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">26</text><text x="350.0" y="245" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="370" y="194" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="390.0" y="217" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">30</text><text x="390.0" y="245" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="410" y="194" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="430.0" y="217" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">34</text><text x="430.0" y="245" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="450" y="194" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="470.0" y="217" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">41</text><text x="470.0" y="245" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="490" y="194" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="510.0" y="217" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">47</text><text x="510.0" y="245" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="530" y="194" width="40" height="36" fill="#fff4d6" stroke="#1d2b44" stroke-width="4"/><text x="550.0" y="217" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">52</text><text x="550.0" y="245" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">middle</text><rect x="570" y="194" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="590.0" y="217" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">58</text><text x="590.0" y="245" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="610" y="194" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="630.0" y="217" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">63</text><text x="630.0" y="245" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="650" y="194" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="670.0" y="217" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">71</text><text x="670.0" y="245" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="690" y="194" width="40" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="710.0" y="217" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">79</text><text x="710.0" y="245" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text>
</svg>
<figcaption>Figure 1. Each check removes about half of the live values (grey, dashed, marked "gone"). The highlighted value is the one compared with the target 52. Four checks find it.</figcaption>
</figure>

## Worked example 1: trace a successful search

The sorted list `DATA` is `[3, 8, 12, 15, 21, 26, 30, 34, 41, 47, 52, 58, 63, 71, 79]`, fifteen values at positions 1 to 15. Trace a binary search for **52** (Figure 1 shows the same trace).

| Check | Live positions | Middle position | Value there | Compare with 52 | Action |
|---|---|---|---|---|---|
| 1 | 1–15 | 8 | 34 | 34 < 52 | Keep the upper half (9–15) |
| 2 | 9–15 | 12 | 58 | 58 > 52 | Keep the lower half (9–11) |
| 3 | 9–11 | 10 | 47 | 47 < 52 | Keep the upper part (11) |
| 4 | 11–11 | 11 | 52 | 52 = 52 | **Found at position 11** |

**Check.** Four checks examined only four of the fifteen values. A linear search for 52 would have examined 11 (every value from the start up to position 11).

For the illustration, here is a version in code that also counts the checks. It returns a two-element list: the position (0 if not found) and the number of checks. Do not memorise it; use it to run your own experiments.

```text
PROCEDURE binarySearch(aList, target)
{
  low ← 1
  high ← LENGTH(aList)
  checks ← 0
  REPEAT UNTIL(low > high)
  {
    middle ← (low + high - (low + high) MOD 2) / 2
    checks ← checks + 1
    IF(aList[middle] = target)
    {
      RETURN([middle, checks])
    }
    IF(aList[middle] < target)
    {
      low ← middle + 1
    }
    ELSE
    {
      high ← middle - 1
    }
  }
  RETURN([0, checks])
}
```

For example, `binarySearch(DATA, 52)` gives position 11 after 4 checks, and `binarySearch(DATA, 30)` gives position 7 after 4 checks, as the program confirmed when we ran it.

## Worked example 2: how many checks, and why sortedness matters

**Part A. The maximum number of checks.** Each check at least halves the list. So the greatest number of checks is the number of times you can halve the list size until one candidate remains, plus the final check of that candidate. As a rule: the maximum number of checks for a list of *n* items is the smallest *k* such that 2<sup>k</sup> − 1 ≥ *n*, which is the same as ⌊log<sub>2</sub> *n*⌋ + 1. You do not need logarithms in the exam; you can find *k* by doubling 1, 2, 4, 8, ... until the doubled value passes *n*. For 1,000 items:

1,000 → 500 → 250 → 125 → 62 → 31 → 15 → 7 → 3 → 1.

That is nine halvings, plus checking the last remaining item: **10 checks**. Another way: 2<sup>10</sup> = 1,024 is the first power of two that is more than 1,000, so 10 checks are enough, and 2<sup>9</sup> = 512 is too small.

| Items in the list *n* | Greatest checks, binary search | Greatest checks, linear search |
|---|---|---|
| 15 | 4 | 15 |
| 100 | 7 | 100 |
| 1,000 | 10 | 1,000 |
| 5,000 | 13 | 5,000 |
| 1,000,000 | 20 | 1,000,000 |

Notice what happens when the list **doubles**: binary search needs only **one more** check, while linear search needs twice as many. That is the key advantage on large data.

**Check.** The table values agree with a program check that ran binary search on every possible target in every list length up to 3,000 and recorded the worst case, and with the doubling rule for the larger sizes. Binary search is "often more efficient" than linear search on sorted data. It is not *always* faster: if the target is the first item, a linear search needs one check.

**Part B. What goes wrong with unsorted data.** Search for 5 in `[9, 2, 14, 5, 11]`, which is *not* sorted. The middle value is 14 (position 3). Since 5 < 14, binary search discards positions 3 to 5, including the 5 itself. It next looks at the lower half, `[9, 2]`, finds the middle value 9 and then 2, and reports **not found**, even though 5 is in the list. This was confirmed by running the code above, which returns position 0.

Binary search therefore gives wrong answers on unsorted data. If the data is unsorted, either use linear search or sort it first.

## Choosing between linear and binary search

- **Data unsorted, searched once:** use **linear search**. Binary search is not allowed because the data is not sorted.
- **Data sorted, large, searched many times:** use **binary search**. It saves a great deal of work.
- **Data sorted but tiny:** the difference is small; choose the simpler method.
- **Data keeps changing:** keeping it sorted costs effort, which may or may not be worth it. (Sorting algorithms are not part of this course.)

## Common misconceptions

- **"Binary search works on any list."** It needs the data in sorted order.
- **"Binary search always finds the target faster than linear search."** Linear search can be quicker if the target happens to be near the front. Binary search is better in the *worst case* and on average for large data.
- **"The number of checks is half the list size."** It is the number of times you can halve the list: 10 for 1,000 items, not 500.
- **"Binary search looks at the first element first."** It starts at the **middle**.
- **"After a check you keep the half with the middle value."** The middle value has already been compared; it is eliminated along with the wrong half.
- **"Doubling the list size doubles the checks."** For binary search it adds only one check.


## Where this leads

Binary search is your first example of an algorithm whose cost grows slowly as the data grows. Topic 3.17 builds on this idea by comparing algorithms by how many steps they take as the input gets bigger.

Next steps: try the [practice questions](/advanced-course-resources/computer-science-principles/3-11-binary-search-practice/), skim the [revision notes](/advanced-course-resources/computer-science-principles/3-11-binary-search-revision-notes/) the night before, and tick off the [topic checklist](/advanced-course-resources/computer-science-principles/3-11-binary-search-checklist/). The next topic is [Topic 3.12, Calling Procedures](/advanced-course-resources/computer-science-principles/3-12-calling-procedures-study-guide/).
