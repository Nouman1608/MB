---
title: "AQA A-Level Computer Science (7517): Dictionaries"
resourceType: "study-guides"
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
description: "Dictionaries for AQA A-Level Computer Science 7517 4.2.7: key-value pairs, operations, implementation and information retrieval, with code and traces."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper on 4.2.7 Dictionaries in AQA A-Level Computer
Science (7517). The specification asks you to be familiar with the
concept of a dictionary, which it describes as "a collection of
key-value pairs in which the value is accessed via the associated key";
to be familiar with simple applications such as information retrieval;
and to have experience of using a dictionary data structure in a
programming language. The specification's own example represents "The
green, green grass grows" as word counts, ignoring letter case. The
overview of all the 4.2 structures is in the
[abstract data types study guide](/resources/a-level-aqa-computer-science-abstract-data-types/).

## The concept: values found by key, not by position

In an array you reach an item by its position: the third element, index
2. In a dictionary you reach a value by its **key**: the price of
product "B-204", or the count for the word "green". Three rules define
the structure:

- **Keys are unique.** Adding a value under a key that already exists
  replaces the old value; it does not create a second entry.
- **Values need not be unique.** Several keys can share the same value,
  as "grass", "grows" and "the" all map to 1 in AQA's example.
- **Access is by key only.** There is no meaningful "first" or "next"
  item in the abstract idea of a dictionary, even if a particular
  language happens to remember the order in which keys were added.

A dictionary is an **abstract data type**: it is defined by what you can
do with it, not by how it is stored.

## Operations

| Operation | Meaning | Python |
|---|---|---|
| Create | Make an empty dictionary | `stock = {}` |
| Add or update | Store a value under a key | `stock["B-204"] = 12` |
| Retrieve | Get the value for a key | `stock["B-204"]` |
| Retrieve with default | Get the value, or a default if the key is absent | `stock.get("C-101", 0)` |
| Test membership | Is this key present? | `"B-204" in stock` |
| Delete | Remove a key and its value | `del stock["B-204"]` |
| Iterate | Visit every key (or key-value pair) | `for code, qty in stock.items():` |
| Size | Number of pairs | `len(stock)` |

Retrieving a key that is not present is an error in many languages (in
Python it raises a KeyError), which is why code tests membership first
or uses a default. Other languages provide the same structure under
different names: C# and VB.NET have `Dictionary`, and Java has `HashMap`.

## How a dictionary can be implemented

When a language does not provide a dictionary, you can build one:

| Implementation | Lookup | Notes |
|---|---|---|
| Hash table | Usually one step | The usual choice; the key is hashed to find its slot (see the [Hash tables study guide](/resources/aqa-a-level-computer-science-7517-hash-tables/)) |
| Binary search tree ordered by key | About log₂ *n* steps if balanced | Keys can be output in order |
| Array or list of key-value records | Linear search, up to *n* steps | Simple, but slow for large collections |

The hash table version explains why many languages insist that keys are
values that cannot change (in Python, a list cannot be a key but a
string or tuple can): if a key changed after it was stored, its hash
would change and the value could not be found again.

## Information retrieval: the specification's application

Information retrieval means finding documents relevant to a query. A
simple method represents each document by the words it contains and how
often each occurs, ignoring order. A dictionary suits this exactly: each
distinct word is a key, and its count is the value.

### Worked example: building a word-count dictionary

```
SUBROUTINE CountWords(words)
  counts ← empty dictionary
  FOR EACH word IN words
    w ← LowerCase(word)
    IF w is a key in counts THEN
      counts[w] ← counts[w] + 1
    ELSE
      counts[w] ← 1
    ENDIF
  ENDFOR
  RETURN counts
ENDSUBROUTINE
```

Trace for "Red lorry, yellow lorry, red lorry", with punctuation
removed:

| Word read | Key present? | counts after this step |
|---|---|---|
| Red | No | {'red': 1} |
| lorry | No | {'red': 1, 'lorry': 1} |
| yellow | No | {'red': 1, 'lorry': 1, 'yellow': 1} |
| lorry | Yes | {'red': 1, 'lorry': 2, 'yellow': 1} |
| red | Yes | {'red': 2, 'lorry': 2, 'yellow': 1} |
| lorry | Yes | {'red': 2, 'lorry': 3, 'yellow': 1} |

Converting to lower case before the test is what makes "Red" and "red"
the same key, as in AQA's example. The same algorithm in Python:

```python
counts = {}
for word in text.lower().split():
    counts[word] = counts.get(word, 0) + 1
```

### Using the dictionaries

Once each document has a word-count dictionary, a search engine can:

- **Answer a query**: look up each query word in each document's
  dictionary, a fast operation, and rank documents by the counts found.
- **Compare documents**: words that appear as keys in both dictionaries
  are shared vocabulary. Treating each dictionary as a vector (see the
  [Vectors study guide](/resources/aqa-a-level-computer-science-7517-vectors/))
  lets the dot product measure how similar two documents are. For
  {'the': 1, 'cat': 1, 'sat': 1} and {'the': 1, 'cat': 1, 'ran': 1}, the
  shared keys contribute 1 × 1 + 1 × 1 = 2.

The key-value design matters because a word's count can be found and
updated directly. With two parallel lists of words and counts, every
update would need a linear search of the word list.

## Other simple applications

- **Lookup tables**: product code to price, country code to country
  name, username to account record.
- **Counting**: votes per candidate, character frequencies in a text.
- **Graphs**: an adjacency list can be held as a dictionary mapping each
  vertex to a list of its neighbours.
- **Vectors**: a vector viewed as a function can be stored as a
  dictionary from position to value, such as {0: 2.0, 1: 3.14159}.
- **Compression**: dictionary-based methods for lossless compression
  (4.5.6.9) replace repeated patterns with short codes stored in a
  dictionary.

## Common mistakes

- Saying a dictionary "stores data in alphabetical order". The abstract
  type has no order; only some implementations keep keys sorted.
- Allowing duplicate keys. Storing a second value under an existing key
  overwrites the first.
- Accessing a key without checking it exists, so the program crashes on
  the first new word.
- Forgetting to normalise case, so "The" and "the" are counted
  separately when the question says to ignore case.
- Confusing the dictionary (the abstract idea) with the hash table (one
  way of building it).

## Exam technique for AQA command words

- **State / give**: "a collection of key-value pairs where the value is
  accessed via its key" is a full definition.
- **Write the dictionary**: use the notation {'key': value, ...}, with
  every distinct key exactly once.
- **Explain why a dictionary is suitable**: link a feature to the task:
  "each word is a unique key, so its count can be updated directly
  without searching".
- **Write code**: show the test for an existing key and both branches
  (increment or create).

## Next steps

- Recall, traps and a self-test are in the
  [Dictionaries revision notes](/resources/aqa-a-level-computer-science-7517-dictionaries-revision-notes/).
- Original questions with full answers are in the
  [Dictionaries practice questions](/resources/aqa-a-level-computer-science-7517-dictionaries-practice/).

## Official syllabus

AQA A-level Computer Science (7517) specification, 4.2.7 Dictionaries -
[aqa.org.uk](https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/subject-content).
