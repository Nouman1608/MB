---
title: "OxfordAQA A-Level Computer Science (9645): Dictionaries -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Dictionaries Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 10 – Advanced data structures"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 10.5
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "advanced-data-structures"
  - qualification: "a-level"
    topic: "advanced-data-structures"
    subtopic: "dictionaries-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.10.5 Dictionaries: key-value pairs, Python dictionary operations, applications, when to use one and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.10.5 Dictionaries** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (A-level content in topic 3.10 Advanced data structures). For explanations and worked programs, see the [dictionaries study guide](/resources/oxfordaqa-a-level-computer-science-9645-dictionaries/); then practise with the [dictionaries practice questions](/resources/oxfordaqa-a-level-computer-science-9645-dictionaries-practice/). Code is Python.

## What the specification requires

- Be familiar with the concept of a **dictionary**: a collection of **key-value pairs** in which the value is accessed via the associated key.
- Be familiar with **simple applications** of dictionaries.
- Have **experience of using a programming language library** that implements the dictionary data structure.

## Key terms

| Term | Meaning |
|---|---|
| Dictionary | A collection of key-value pairs; values are found through their keys |
| Key | The identifier used to find a value; unique within the dictionary |
| Value | The data stored against a key; any type; may repeat |
| Pair / item | One key together with its value |
| `KeyError` | The Python error when a key is not present |
| Hash table | A common way of implementing a dictionary |

## Python operations

| Task | Code | Notes |
|---|---|---|
| Create | `d = {"a": 1, "b": 2}` | Or `d = {}` for an empty one |
| Read | `d["a"]` | `KeyError` if the key is missing |
| Safe read | `d.get("z")` / `d.get("z", 0)` | `None` / the default if missing |
| Add or replace | `d["c"] = 3` | New key adds; existing key replaces |
| Remove | `del d["a"]` | `KeyError` if missing |
| Test for key | `"a" in d` | Tests keys, not values |
| Number of pairs | `len(d)` | |
| All keys / values / pairs | `d.keys()`, `d.values()`, `d.items()` | Use in a `for` loop |

In C#, the library type is `Dictionary<TKey, TValue>` (methods `Add`, `Remove`, `ContainsKey`, `TryGetValue`, property `Count`). In VB.Net it is `Dictionary(Of TKey, TValue)`.

## Worked reminders

*Replace and add.*

```python
d = {"a": 1}
d["a"] = 2
d["b"] = 2
```

The dictionary is now `{'a': 2, 'b': 2}`: `"a"` was replaced, `"b"` was added, and two keys share the value 2.

*Counting.*

```python
counts = {}
for ch in "banana":
    counts[ch] = counts.get(ch, 0) + 1
```

The result is `{'b': 1, 'a': 3, 'n': 2}`.

*Lookup table.* `names = {"0": "zero", "4": "four", "7": "seven"}` converts "407" to `four zero seven`.

*Nested dictionary.* `staff["EM2"]["dept"]` reads the department of employee EM2: the first key finds the inner dictionary, and the second finds the value in it.

## Applications

- Phone book or contact list (name to number).
- Word counts and letter frequencies.
- Price lists and stock records.
- Translation tables, such as Morse code.
- Caches of results already worked out.
- Records found by an identifier, such as a student number.

## Dictionary or list?

| Use a dictionary when | Use a list or array when |
|---|---|
| Items are found by a meaningful key | Items are found by position |
| Keys are words, codes or sparse numbers | Items form an ordered sequence |
| You test whether a key exists | You need sorting or order |

## Worked reminder: best score per player

```python
scores = [("Ana", 40), ("Ben", 55), ("Ana", 62), ("Cy", 30), ("Ben", 48)]
best = {}
for name, s in scores:
    if name not in best or s > best[name]:
        best[name] = s
```

The result is `{'Ana': 62, 'Ben': 55, 'Cy': 30}`. Each pair is dealt with in one of three ways: a new player is added, a better score replaces the stored one, or a worse score changes nothing. The `or` stops as soon as `name not in best` is true, so a missing key is never read.

## Looping over a dictionary

| Loop | Gives each time |
|---|---|
| `for k in d:` | A key |
| `for v in d.values():` | A value |
| `for k, v in d.items():` | A key and its value |

To display the pairs with a value of 50 or more: `for name, score in scores.items(): if score >= 50: print(name, score)`.

To find the key with the largest value: `max(scores, key=scores.get)`.

## A dictionary as a store of results already worked out

A dictionary can remember answers so that they are not calculated twice. A recursive Fibonacci function that first looks in a dictionary called `memo` and stores each new answer before returning it finds `fib(30)` (832 040) after storing only 31 values, instead of making about 2.7 million calls. The key is the argument and the value is the answer. This is an example of using the dictionary as a **cache**.

## Dictionary against list: reasoning

A list is searched by position. If the program has a name and wants a number, it must search the list of names to find the position, then use the position in the list of numbers. A dictionary does that in one step. The cost is that a dictionary does not keep an order that you can rely on, so a program that needs to process items in sequence should use a list (or sort the keys first, as in `sorted(d.keys())`).

## Exam traps

- **Keys are unique.** A second assignment to a key replaces the first value.
- **`in` tests keys.** Use `d.values()` to test values.
- **Missing key.** Check first, or use `get`.
- **No positions.** A dictionary cannot be read with 0, 1, 2 (unless those are the keys).
- **Not sorted.** Do not depend on the order of the pairs.
- **Both cases in counting.** Handle a key that is present and one that is not.
- **Name the library.** Say which language and which dictionary type you have used.

## Quick self-test

1. What is a dictionary?
2. Must keys be unique? Must values?
3. What does `d["x"] = 5` do if "x" is not a key?
4. What does it do if "x" is already a key?
5. What does `d.get("q", 0)` return if "q" is not a key?
6. What does `"a" in d` test?
7. What error does `d["missing"]` cause in Python?
8. Give one application of a dictionary.
9. After `inv = {"pen": 12, "ink": 3}`, `inv["pen"] = inv["pen"] - 5` and `del inv["ink"]`, what is `inv`?
10. How do you read the department of employee EM2 from a dictionary of dictionaries called `staff`?
11. State one advantage of a dictionary over two parallel lists.
12. How are dictionaries related to hash tables?

### Answers

1. A collection of key-value pairs in which the value is accessed via the associated key.
2. Keys must be unique; values need not be.
3. It adds a new key-value pair.
4. It replaces the value stored for that key.
5. 0.
6. Whether "a" is one of the keys.
7. A `KeyError`.
8. Any one from: phone book, word counts, price list, translation table, cache, records by identifier.
9. `{'pen': 7}`.
10. `staff["EM2"]["dept"]`.
11. The value is found directly from its key, with no search written by the programmer (so less code and fewer mistakes).
12. A dictionary is commonly implemented with a hash table, which maps each key to a position using a hash function.

## Next steps

- [Dictionaries study guide](/resources/oxfordaqa-a-level-computer-science-9645-dictionaries/)
- [Dictionaries practice questions](/resources/oxfordaqa-a-level-computer-science-9645-dictionaries-practice/)
- [Graph algorithms revision notes](/resources/oxfordaqa-a-level-computer-science-9645-graph-algorithms-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.10.5 Dictionaries.
