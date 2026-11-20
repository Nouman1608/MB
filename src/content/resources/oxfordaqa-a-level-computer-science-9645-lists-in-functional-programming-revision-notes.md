---
title: "OxfordAQA A-Level Computer Science (9645): Lists in functional programming -- Revision Notes"
seoTitle: "OxfordAQA 9645 Functional Lists Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 12 – Functional programming"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 12.3
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "functional-programming"
  - qualification: "a-level"
    topic: "functional-programming"
    subtopic: "lists-in-functional-programming-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.12.3: Haskell lists, head and tail, list operations, x:xs patterns, recursive list functions and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.12.3 Lists in functional programming** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (International A-level content in topic 3.12, examined in Unit 4). For worked traces, see the [lists in functional programming study guide](/resources/oxfordaqa-a-level-computer-science-9645-lists-in-functional-programming/), then practise with the [lists in functional programming practice questions](/resources/oxfordaqa-a-level-computer-science-9645-lists-in-functional-programming-practice/). Exam questions use Haskell.

## What the specification requires

- Know that a list stores a **sequence of values** and is written in brackets.
- Know that a list can be **empty**: `[]`.
- **Define** a list, for example `listOne = [10, 7, 8]`.
- Represent a list as a **head** joined to a **tail**, written head:tail.
- Know the head is an **element** and the tail is a **list**.
- Describe and apply: return head, return tail, test for empty, return length, construct an empty list, append an item.
- Write programs for those operations in Haskell.
- Understand how the head and tail of a list argument are **referred to inside a function**.

## Key terms

| Term | Meaning |
|---|---|
| List | An ordered sequence of values of one type, in square brackets |
| Empty list | `[]`, a list with no items |
| Head | The first item of a non-empty list (one element) |
| Tail | Everything after the head; always a list |
| Cons (colon) | `:` joins an item to the front of a list |
| Concatenation | `++` joins two lists |
| Pattern `(x:xs)` | x names the head, xs names the tail |

## Operations with listOne = [1, 2, 3], listTwo = [4, 5], listThree = []

| Operation | Expression | Result |
|---|---|---|
| Head | `head listOne` | 1 |
| Tail | `tail listOne` | `[2,3]` |
| Empty test | `null listOne` | False |
| Empty test | `null listThree` | True |
| Length | `length listOne` | 3 |
| Append lists | `listOne ++ listTwo` | `[1,2,3,4,5]` |
| Append an item | `listOne ++ [9]` | `[1,2,3,9]` |
| Add to the front | `0 : listOne` | `[0,1,2,3]` |
| Second item | `head (tail listOne)` | 2 |

`head []` and `tail []` have no valid result. Test with `null` first.

## Head and tail

| List | Head | Tail |
|---|---|---|
| `[4, 3, 5]` | 4 | `[3, 5]` |
| `[9]` | 9 | `[]` |
| `[7, 2, 1]` | 7 | `[2, 1]` |

`4:[3, 5]` is the list `[4,3,5]`, and `9:[]` is `[9]`. The tail is **always a list**, even when it has one item or none.

## Recursion pattern for lists

```haskell
name [] = base-value
name (x:xs) = ... x ... name xs
```

- Brackets round `(x:xs)` are required.
- The tail xs is shorter than the list, so the recursion finishes.
- If an empty list has no sensible answer (for example the largest item), use `[x]` as the base case.

## Worked reminders

```haskell
total [] = 0
total (x:xs) = x + total xs

count [] = 0
count (x:xs) = 1 + count xs

largest [x] = x
largest (x:xs) = max x (largest xs)

member v [] = False
member v (x:xs) = x == v || member v xs

doubleAll [] = []
doubleAll (x:xs) = (x * 2) : doubleAll xs

rev [] = []
rev (x:xs) = rev xs ++ [x]
```

| Call | Working | Result |
|---|---|---|
| `total [8, 3, 2]` | 8 + (3 + (2 + 0)) | 13 |
| `count [7, 2, 1, 9]` | 1 + (1 + (1 + (1 + 0))) | 4 |
| `largest [4, 9, 2, 7]` | max 4 (max 9 (max 2 7)) | 9 |
| `member 3 [1, 2, 3]` | False, False, then True | True |
| `member 9 [1, 2, 3]` | reaches the empty list | False |
| `doubleAll [3, 1, 4]` | 6 : 2 : 8 : [] | `[6,2,8]` |
| `rev [1, 2, 3, 4]` | rev [2,3,4] ++ [1], and so on | `[4,3,2,1]` |

## Colon or double-plus

| Job | Use | Example |
|---|---|---|
| Item at the front | `item : list` | `0 : [1, 2]` gives `[0,1,2]` |
| Item at the end | `list ++ [item]` | `[1, 2] ++ [3]` gives `[1,2,3]` |
| Join two lists | `list ++ list` | `[1] ++ [2, 3]` gives `[1,2,3]` |

`:` needs an **item on the left**. `++` needs a **list on each side**.

## Exam traps

- **Tail is a list.** The tail of [9] is `[]`, not 9 and not "nothing".
- **Appending an item.** `xs ++ 4` is a type error; write `xs ++ [4]`.
- **Empty list.** `null []` is True. `head []` has no answer.
- **Missing base case.** A recursive list function without a `[]` equation fails at the end of the list.
- **Missing brackets.** Write `(x:xs)`, not `x:xs`, in a function definition.
- **Which name is which.** x is one item; xs is a list.
- **Length versus last item.** `length` counts items; it does not return one.

## Quick self-test

1. What is the empty list written as in Haskell?
2. Give the head and tail of `[6, 1, 9]`.
3. Evaluate `length [5, 5, 5, 5]`.
4. Evaluate `null []`.
5. Evaluate `[2, 4] ++ [6]`.
6. Evaluate `1 : [2, 3]`.
7. Write the expression that appends 8 to the list `ys`.
8. In `total (x:xs) = x + total xs`, what does xs refer to when the argument is `[8, 3, 2]`?
9. Why does `total []` need its own equation?
10. Evaluate `head (tail [7, 2, 1])`.
11. Evaluate `rev [5, 6]` using the definition above.
12. Evaluate `member 4 [2, 4]`.

### Answers

1. `[]`
2. Head 6; tail `[1,9]`.
3. 4.
4. True.
5. `[2,4,6]`
6. `[1,2,3]`
7. `ys ++ [8]`
8. The tail, the list `[3,2]`.
9. It is the base case; without it the recursion has no stopping point and fails on the empty list.
10. 2.
11. `rev [6] ++ [5]` = `([] ++ [6]) ++ [5]` = `[6,5]`.
12. False for 2 == 4, then True for 4 == 4, so True.

## Next steps

- [Lists in functional programming study guide](/resources/oxfordaqa-a-level-computer-science-9645-lists-in-functional-programming/)
- [Lists in functional programming practice questions](/resources/oxfordaqa-a-level-computer-science-9645-lists-in-functional-programming-practice/)
- [Writing functional programs revision notes](/resources/oxfordaqa-a-level-computer-science-9645-writing-functional-programs-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.12.3 Lists in functional programming.
