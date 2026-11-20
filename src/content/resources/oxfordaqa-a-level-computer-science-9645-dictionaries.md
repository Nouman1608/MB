---
title: "OxfordAQA A-Level Computer Science (9645): Dictionaries"
seoTitle: "OxfordAQA A-Level CS 9645 Dictionaries Study Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.10.5 in depth: key-value pairs, using a dictionary library in Python and other languages, common applications and worked programs."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.10.5 Dictionaries** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.10 Advanced data structures (A-level). The specification asks you to be familiar with the concept of a dictionary, which it describes as **a collection of key-value pairs in which the value is accessed via the associated key**; to be familiar with **simple applications** of dictionaries; and to have **experience of using a programming language library that implements the dictionary data structure**.

For quick recall use the [dictionaries revision notes](/resources/oxfordaqa-a-level-computer-science-9645-dictionaries-revision-notes/), and test yourself with the [dictionaries practice questions](/resources/oxfordaqa-a-level-computer-science-9645-dictionaries-practice/). The [advanced data structures study guide](/resources/oxfordaqa-a-level-computer-science-advanced-data-structures/) covers all of topic 3.10. A dictionary is closely related to the [hash tables study guide](/resources/oxfordaqa-a-level-computer-science-9645-hash-tables/): a hash table is one way in which a dictionary can be implemented. Code is Python, and the output shown was produced by running the code.

## What a dictionary is

A **dictionary** stores **key-value pairs**. Each **key** is paired with one **value**. To get a value you give the dictionary the key, and it returns the value that goes with it. You do not need to know where the pair is stored or how many other pairs there are.

- Each key appears **once**. Keys are unique.
- A key identifies its value, as a word identifies its definition in a paper dictionary.
- Values can be any type: numbers, strings, lists or even other dictionaries. Values need not be unique, so two keys can have the same value.
- Items are found by **key**, not by position. A dictionary has no index numbers like an array.

An array answers the question "what is at position 3?". A dictionary answers "what is the value for the key 'Kenya'?".

## Using a dictionary library in Python

Python has a built-in dictionary type, `dict`. This is the language library that the specification expects you to have used.

### Creating and reading

```python
capitals = {"France": "Paris", "Japan": "Tokyo", "Kenya": "Nairobi"}
print(capitals["Japan"])
```

This prints `Tokyo`. The text in the square brackets is the **key**.

### Adding and changing

Assigning to a key that does not exist **adds** a new pair. Assigning to a key that exists **replaces** its value.

```python
capitals["Chile"] = "Santiago"
capitals["Japan"] = "Tokyo (updated)"
print(len(capitals), capitals["Japan"])
```

This prints `4 Tokyo (updated)`. There were three pairs, one was added, and one was changed, so there are four pairs. Because keys are unique, the second statement did not add another Japan.

### Testing for a key

```python
print("Kenya" in capitals, "Peru" in capitals)
```

This prints `True False`. The `in` operator tests the **keys**.

### Looking up a missing key

Reading a key that is not present is an error in Python.

```python
try:
    print(capitals["Peru"])
except KeyError:
    print("KeyError")
```

This prints `KeyError`. The method `get` is safer. It returns a default instead of failing.

```python
print(capitals.get("Peru"), capitals.get("Peru", "unknown"))
```

This prints `None unknown`: `get` returns `None` if you give no default, or the default you supply.

### Removing and listing

```python
del capitals["France"]
print(sorted(capitals.keys()))
for country, city in capitals.items():
    print(country, "->", city)
```

The first line removes the France pair. `keys()` gives all the keys, `values()` gives all the values and `items()` gives each pair. The output is the sorted key list `['Chile', 'Japan', 'Kenya']`, and then the three pairs: `Japan -> Tokyo (updated)`, `Kenya -> Nairobi` and `Chile -> Santiago`. Python keeps pairs in the order they were added, but you should not write programs that depend on the order of a dictionary in general.

### Other languages

The same idea exists in the other languages named in the specification. In C# the library type is `Dictionary<TKey, TValue>`, with methods such as `Add`, `Remove`, `ContainsKey` and `TryGetValue`, a `Count` property, and an indexer written with square brackets. In VB.Net it is `Dictionary(Of TKey, TValue)`. Reading a missing key in C# throws a `KeyNotFoundException`. Learn the dictionary operations of the language that you use.

## Worked applications

### Counting how often each item appears

A dictionary is ideal for counting, using the item as the key and the count as the value.

```python
text = "the cat saw the dog and the cat ran"
counts = {}
for w in text.split():
    if w in counts:
        counts[w] = counts[w] + 1
    else:
        counts[w] = 1
print(counts)
print(max(counts, key=counts.get), counts["the"])
```

The output is `{'the': 3, 'cat': 2, 'saw': 1, 'dog': 1, 'and': 1, 'ran': 1}`, then `the 3`. For each word, if it is already a key, its count goes up by one; otherwise it is added with a count of 1. Without a dictionary you would need to search a list of words for every word read.

### A price list

```python
prices = {"tea": 1.50, "cake": 2.75, "juice": 2.00}
order = ["tea", "cake", "tea", "juice"]
total = 0
for item in order:
    total = total + prices[item]
print(total)
```

This prints `7.75`: 1.50 + 2.75 + 1.50 + 2.00.

### Updating stored values

```python
stock = {"bolts": 120, "nuts": 80}
stock["bolts"] -= 20
stock["washers"] = 300
print(stock, sum(stock.values()))
```

This prints `{'bolts': 100, 'nuts': 80, 'washers': 300} 480`. A stock count is changed by key, a new item is added by assigning to a new key, and `values()` gives the counts to add up.

### A translation table

```python
morse = {"A": ".-", "B": "-...", "E": "."}
print(" ".join(morse[c] for c in "BEA"))
```

This prints `-... . .-`. Each letter is converted by looking it up.

### Values that are themselves dictionaries

```python
students = {"S101": {"name": "Ana", "year": 12},
            "S102": {"name": "Ben", "year": 13}}
print(students["S102"]["name"], students["S101"]["year"])
```

This prints `Ben 12`. The student number is the key, and each value is a dictionary of facts about that student.

## Worked example: keeping the best score for each player

*A game records scores as (name, score) pairs. Produce the highest score for each player.*

```python
scores = [("Ana", 40), ("Ben", 55), ("Ana", 62), ("Cy", 30), ("Ben", 48)]
best = {}
for name, s in scores:
    if name not in best or s > best[name]:
        best[name] = s
print(best)
```

The output is `{'Ana': 62, 'Ben': 55, 'Cy': 30}`. Follow the trace:

1. ("Ana", 40): Ana is not a key, so `best["Ana"] = 40`.
2. ("Ben", 55): Ben is not a key, so `best["Ben"] = 55`.
3. ("Ana", 62): Ana is a key, but 62 > 40, so `best["Ana"]` becomes 62.
4. ("Cy", 30): Cy is not a key, so `best["Cy"] = 30`.
5. ("Ben", 48): Ben is a key, but 48 is not greater than 55, so nothing changes.

The condition `name not in best or s > best[name]` is safe because Python stops evaluating an `or` as soon as the first part is true, so `best[name]` is read only when the key exists.

### The same task without a dictionary

Without a dictionary you could keep two lists, one of names and one of best scores, and search the names list for every pair that you read. That needs a loop inside the loop, more code, and more places for mistakes. The dictionary replaces the search with a single look-up by key. This is the practical advantage that an exam answer should mention when it says that a dictionary is "easier" or "faster": the pairs are found directly by their key, with no search by the programmer.

## When is a dictionary the right structure?

| Use a dictionary when... | Use an array or list when... |
|---|---|
| You look things up by a meaningful key (name, code, word) | You use position numbers (0, 1, 2, ...) |
| Keys are not consecutive whole numbers | The items form an ordered sequence |
| You need to test quickly whether a key exists | You need to keep items in order and process them in turn |
| You are counting or grouping by category | You want to sort the items |

Typical applications: phone books, word counts, lookup and translation tables, price lists, caches of results already calculated, and records found by an identifier such as a student number.

### Dictionaries and hash tables

Dictionaries are commonly implemented with a **hash table**. The key is passed through a hash function to find where the value is stored, which is why look-ups by key are usually very fast and why keys must be unique. The programmer using the dictionary library does not need to write that code.

## Exam technique

- **Define a dictionary using the words key and value:** a collection of key-value pairs in which the value is accessed via the associated key.
- **Say why a dictionary suits the situation:** look-up by a meaningful key is quick and simple.
- **Show how you test for a key** before reading it, or use `get` with a default.
- **Remember that keys are unique.** Assigning to an existing key replaces its value.
- **In counting programs,** deal with both cases: the key is already present, and it is not.
- **Name the library and the operations** you have used, because the specification asks for experience of one.

## Common mistakes

- Using a position number to read a dictionary.
- Reading a key that might not exist without checking.
- Thinking that adding a second pair with the same key keeps both. It replaces the first.
- Thinking that `in` tests the values. It tests the keys.
- Saying a dictionary is "sorted". It is not kept in key order.
- Writing an array where a dictionary was asked for, or the reverse.

## Next steps

- [Dictionaries revision notes](/resources/oxfordaqa-a-level-computer-science-9645-dictionaries-revision-notes/)
- [Dictionaries practice questions](/resources/oxfordaqa-a-level-computer-science-9645-dictionaries-practice/)
- [Graph algorithms study guide](/resources/oxfordaqa-a-level-computer-science-9645-graph-algorithms/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.10.5 Dictionaries.
