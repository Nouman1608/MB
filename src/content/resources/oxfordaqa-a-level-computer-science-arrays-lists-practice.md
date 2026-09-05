---
title: "OxfordAQA A Level Computer Science: Arrays and Lists — Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamental data structures"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 3
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamental-data-structures"
    subtopic: "arrays-and-lists-oxfordaqa-alevel-cs"
description: "Original exam-style practice questions with full worked answers on static vs dynamic data structures, arrays and lists, and one- and two-dimensional structures."
author: "marlbridge-academic-team"
publishedDate: 2026-09-05
featured: false
---
> **These are original questions written for Marlbridge**, in the style and at the
> standard of the examination. They are **not** reproduced past-paper questions —
> examination boards hold copyright in their own papers. Use these alongside the
> official past papers available free from your board.

Related: [Arrays and Lists study guide](/resources/a-level-oxfordaqa-computer-science-arrays-and-lists/) · [Arrays and Lists revision notes](/resources/oxfordaqa-a-level-computer-science-arrays-lists-revision-notes/)

---

## Section A

**1.** Define a static data structure and a dynamic data structure, giving **one** example of each. **[4]**

**2.** State the maximum number of dimensions required in exam questions for this specification. **[1]**

## Section B

**3.** State **one** advantage and **one** disadvantage of a static data structure, and **one** advantage and **one** disadvantage of a dynamic data structure. **[4]**

**4.** A programmer needs to store the number of goals scored by each of 20 players in a five-a-side league across a fixed, already-scheduled season. Justify whether a static or dynamic data structure is more appropriate. **[4]**

**5.** A programmer needs to store an unknown, growing list of chat messages sent during a live stream. Justify whether a static or dynamic data structure is more appropriate. **[4]**

**6.** Explain why Python's built-in list is described as dynamic, even when it is being used to represent something conceptually static, such as an array. **[4]**

**7.** A program stores the test scores of a class of 25 students across 4 tests, so that a specific student's specific test score can be looked up directly. Describe an appropriate data structure for this, and explain how it would be indexed. **[5]**

**8.** Evaluate the claim that a programmer should always choose a dynamic data structure over a static one, because it is more flexible and can never run out of space. **[8]**

---

## Answers

**1.** A **static data structure** has a **fixed size set at creation, which cannot change during a program's execution** [1] — for example, a **traditional array** [1]. A **dynamic data structure** can **grow or shrink in size while a program is running**, allocating or releasing memory as needed [1] — for example, **Python's built-in list** [1].

**2.** **Two dimensions** [1].

**3.** **Static — advantage:** offers **faster, more predictable access**, since its memory layout does not change [1]. **Static — disadvantage:** **wastes memory if oversized, or fails if undersized**, since its size cannot adapt once created [1]. **Dynamic — advantage:** **adapts flexibly to varying amounts of data** [1]. **Dynamic — disadvantage:** that flexibility brings **extra overhead when the structure needs to resize** [1].

**4.** A **static structure (array)** is more appropriate [1]. The **number of players (20) is known in advance and fixed for the whole season**, so a static structure **avoids the overhead of resizing** and gives **fast, predictable indexed access** to any player's goal count [1] [1].

**5.** A **dynamic structure (list)** is more appropriate [1]. The **number of chat messages is not known in advance and grows continuously** as the stream runs, so a structure that can **expand as needed** is more appropriate than a fixed-size structure that would need repeated resizing or risk running out of space [1] [1].

**6.** **Python does not contain a built-in fixed-size array type** in the way languages such as C# or Java do [1]. Its built-in **list behaves dynamically — it can grow or shrink during execution** — so a programmer typically uses a list even when the underlying concept being modelled is a static array, unless they specifically import the **array module** or **numpy** [1] [1]. The vocabulary distinction (array = static, list = dynamic in concept) still matters for a written answer, **even though the practical Python tool used may be the same dynamic list either way** [1].

**7.** An appropriate structure is a **two-dimensional array or list of lists**, indexed by **two coordinates** — here, student and test [1] [1]. For example, `scores[student][test]` would access a specific student's score in a specific test, using **zero-based indexing** so `scores[2][1]` accesses the 3rd student's 2nd test score [1] [1]. Being explicit about **which coordinate maps to which real-world quantity** (student vs test) is what distinguishes a complete answer from one that only states "use a 2D array" [1].

**8. Case for always choosing dynamic:** a dynamic structure **adapts flexibly to varying amounts of data** and avoids the risk of a fixed-size structure being **undersized and failing** when demand is unknown or grows unexpectedly [1] [1].
**Case against:** the claim overstates the trade-off. A dynamic structure still carries **extra overhead when it needs to resize** [1], and "can never run out of space" is not strictly true either, since a dynamic structure is ultimately bounded by the memory actually available to the program. Where the **number of elements is genuinely known and fixed in advance** — such as 365 daily temperature readings across a calendar year — a **static structure gives faster, more predictable access without any resizing overhead at all** [1] [1], so choosing dynamic in that case trades away a real performance advantage for a flexibility the problem does not need.
**Judgement:** the right choice **depends on whether the data size is known and fixed, or unknown and changing** [1], not on a blanket preference for one category. A dynamic structure is the safer default only when the data genuinely cannot be bounded in advance; when the count is known, a static structure remains the more appropriate and more efficient choice, so the claim that dynamic should always be preferred is not supported [1] [1].

---

## Where marks are usually lost

- Describing arrays and lists as interchangeable terms without acknowledging the static/dynamic distinction.
- Choosing a data structure for a scenario without justifying it against whether the size is known/fixed or unknown/changing.
- Assuming a question requires more than two dimensions.
- Stating a 2D structure's indexing without specifying which coordinate represents which real-world quantity.
- Treating "dynamic is always better" as true without acknowledging the resizing overhead and the efficiency case for static structures.
