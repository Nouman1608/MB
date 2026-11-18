---
title: "AQA A-Level Computer Science (7517): Dictionaries -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data structures"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 2.7
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "dictionaries-7517"
description: "Condensed AQA A-Level Computer Science 7517 notes on 4.2.7 Dictionaries: key-value rules, operations, implementations, word counting, traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Condensed recall for **4.2.7 Dictionaries** in AQA A-Level Computer
Science (7517). For full explanations, code and traces, use the
[Dictionaries study guide](/resources/aqa-a-level-computer-science-7517-dictionaries/).

## Definition to learn word for word

A **dictionary** is a collection of **key-value pairs** in which the
value is accessed via the associated key.

The specification's example: "The green, green grass grows", ignoring
letter case, is {'grass': 1, 'green': 2, 'grows': 1, 'the': 1}.

## Key terms

| Term | Definition |
|---|---|
| **Key** | Unique identifier used to look up a value |
| **Value** | Data stored against a key; may be repeated across keys |
| **Key-value pair** | One entry: a key with its value |
| **Abstract data type** | Defined by its operations, not by its storage |
| **Information retrieval** | Finding documents relevant to a query |
| **Word count (bag of words)** | Representing a document by each distinct word and how often it occurs |
| **KeyError** | Python's error when a key that is not present is accessed |

## Rules of the structure

- Keys are **unique**: storing under an existing key **overwrites**.
- Values can repeat.
- Lookup is **by key**, not by position.
- The abstract type has **no order**.
- In Python, keys must be values that cannot change (a string or a
  tuple, not a list), because a hash-table implementation relies on the
  key's hash staying the same.

## Operations at a glance

| Operation | Python |
|---|---|
| Create empty | `d = {}` |
| Add / update | `d[k] = v` |
| Retrieve | `d[k]` (error if absent) |
| Retrieve safely | `d.get(k, default)` |
| Test for key | `k in d` |
| Delete | `del d[k]` |
| Every pair | `for k, v in d.items():` |
| Number of pairs | `len(d)` |

## Implementations compared

| Built with | Lookup | Ordered keys? |
|---|---|---|
| Hash table | Usually one step | No |
| Binary search tree | About log₂ *n* if balanced | Yes, by in-order traversal |
| List of pairs | Linear search, up to *n* | Only if kept sorted |

## Word counting pattern

For each word: convert to lower case; if it is already a key, add 1 to
its value; otherwise store it with value 1.

```python
counts = {}
for word in text.lower().split():
    counts[word] = counts.get(word, 0) + 1
```

Example: "one fish two fish" gives {'one': 1, 'fish': 2, 'two': 1}.

## Trace the operations, one line at a time

| Statement | Dictionary afterwards |
|---|---|
| `d = {}` | {} |
| `d["ant"] = 6` | {'ant': 6} |
| `d["bee"] = 6` | {'ant': 6, 'bee': 6} (values may repeat) |
| `d["ant"] = 8` | {'ant': 8, 'bee': 6} (overwritten, still one 'ant') |
| `del d["bee"]` | {'ant': 8} |
| `d.get("bee", 0)` | Returns 0; dictionary unchanged |

`len(d)` is now 1. Writing `d["bee"]` at this point would raise a
KeyError.

## Array or dictionary?

| Question to ask | Array | Dictionary |
|---|---|---|
| How is an item found? | By its integer position | By its key, which can be a string |
| Can the "positions" have gaps? | No; indices run 0 to n − 1 | Yes; only keys in use are stored |
| Is order meaningful? | Yes | Not in the abstract type |
| Best for | A fixed sequence of items | Looking up values by name or code |

If a question asks you to justify a dictionary, name the key, name the
value and say that the value is found directly through its key.

## Applications

| Application | Key | Value |
|---|---|---|
| Information retrieval | Word | Number of occurrences |
| Price lookup | Product code | Price |
| Vote counting | Candidate | Votes |
| Adjacency list | Vertex | List of neighbours |
| Vector as a function | Position | Entry |
| Dictionary-based compression (4.5.6.9) | Pattern | Short code |

## Exam traps

- Writing a key twice in a dictionary answer, such as two entries for
  'green'.
- Ignoring the instruction to ignore case, or ignoring it when the
  question does not say so.
- Claiming a dictionary is sorted.
- Code that reads `counts[w]` before checking that w is a key.
- Calling a dictionary "a hash table": a hash table is one way to
  implement it.
- Saying keys can be any value: in a hash-based dictionary they must
  not change after being stored.

## Self-test

1. Define a dictionary.
2. What happens if a value is stored under a key that already exists?
3. Can two keys have the same value?
4. Write the dictionary for "Big cat, big dog, BIG cat", ignoring case
   and punctuation.
5. Which Python expression returns 0 instead of an error if "zebra" is
   not a key of d?
6. How do you test whether "zebra" is a key of d in Python?
7. Name the data structure most often used to implement a dictionary.
8. Why might a binary search tree be chosen instead?
9. Give one disadvantage of implementing a dictionary as an unsorted
   list of pairs.
10. Why can a Python list not be used as a dictionary key?
11. Give one application of a dictionary other than information
    retrieval.
12. In a word-count dictionary, what does a value of 3 for the key 'data'
    mean?

**Answers:** 1. A collection of key-value pairs in which the value is
accessed via the associated key. 2. The old value is replaced; there is
still only one entry for that key. 3. Yes; only keys must be unique. 4.
{'big': 3, 'cat': 2, 'dog': 1}. 5. `d.get("zebra", 0)`. 6. `"zebra" in d`.
7. A hash table. 8. It keeps the keys in order, so they can be output in
sorted order. 9. Every lookup needs a linear search, which is slow for
large collections. 10. A list can be changed after it is stored, so its
hash could change and the value could not be found again. 11. For
example a price lookup by product code, vote counting, an adjacency list
or storing a vector. 12. The word "data" occurs three times in the
document.

## Next steps

- Practise writing dictionaries and code with the
  [Dictionaries practice questions](/resources/aqa-a-level-computer-science-7517-dictionaries-practice/).
- See how the underlying hash table works in the
  [Hash tables revision notes](/resources/aqa-a-level-computer-science-7517-hash-tables-revision-notes/).

## Official syllabus

AQA A-level Computer Science (7517) specification, 4.2.7 Dictionaries -
[aqa.org.uk](https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/subject-content).
