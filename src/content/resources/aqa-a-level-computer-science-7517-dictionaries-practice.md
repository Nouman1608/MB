---
title: "AQA A-Level Computer Science (7517): Dictionaries -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original AQA A-Level Computer Science 7517 dictionary questions: key-value rules, word counts, Python operations, implementations and code, with answers."
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

Related: [Dictionaries study guide](/resources/aqa-a-level-computer-science-7517-dictionaries/) | [Dictionaries revision notes](/resources/aqa-a-level-computer-science-7517-dictionaries-revision-notes/)

These questions cover 4.2.7 Dictionaries of AQA A-Level Computer Science
(7517). Code questions accept AQA-style pseudocode or a high-level
language you have studied; the examples use Python.

---

## Section A

**1.** Define the term **dictionary** as used in computer science. **[2]**

**2.** State what happens when a program stores a value under a key that is already present in a dictionary. **[1]**

**3.** Explain why the keys in a dictionary must be unique, but the values need not be. **[2]**

**4.** Give **two** applications of dictionaries. **[2]**

## Section B

**5.** Write the dictionary that represents the text "Sea shells, sea SHELLS, seashore", ignoring letter case and punctuation. **[2]**

**6.** The following pseudocode is run with word set to "BANANA".

```
counts ← empty dictionary
FOR EACH letter IN word
  IF letter is a key in counts THEN
    counts[letter] ← counts[letter] + 1
  ELSE
    counts[letter] ← 1
  ENDIF
ENDFOR
```

**(a)** Complete a trace showing the contents of counts after each letter is processed. **[3]**
**(b)** State the number of key-value pairs in counts when the loop ends. **[1]**

**7.** The following Python statements are run in order.

```python
stock = {"pen": 40, "ruler": 15}
stock["pen"] = stock["pen"] - 5
stock["glue"] = 8
del stock["ruler"]
stock["glue"] = stock["glue"] + 2
```

**(a)** State the final contents of stock. **[2]**
**(b)** State what happens if the program next runs `print(stock["ruler"])`. **[1]**
**(c)** Rewrite that statement so that it prints 0 when the key is not present. **[1]**

**8.** A spelling checker stores 100 000 words in a dictionary. Compare implementing this dictionary with a hash table and with an unsorted list of key-value pairs. **[3]**

**9.** A search engine stores word counts for two documents.

- Document X: {'data': 3, 'model': 1, 'test': 2}
- Document Y: {'data': 1, 'test': 4, 'code': 2}

**(a)** List the keys that appear in both dictionaries. **[1]**
**(b)** Treating each dictionary as a vector over the words data, model, test and code (with 0 for a missing word), calculate the dot product of the two documents. **[2]**

## Section C

**10.** An election program has a list called votes, in which each element is the name of the candidate chosen by one voter. Write a subroutine that uses a dictionary to count the votes and returns the name of the candidate with the most votes. You may assume there is no tie. **[6]**

**11.** An information retrieval system must answer the query "which documents contain this word?" quickly for a large collection of documents.

**(a)** Describe how a dictionary could be used to store the information needed. **[2]**
**(b)** Explain why a dictionary is more suitable for this task than a single list of (word, document) pairs. **[2]**

**12.** A game stores the contents of grid squares in a dictionary, using the square's coordinates as the key. Explain why a Python list such as [3, 4] cannot be used as the key, and state a suitable alternative. **[2]**

---

## Answers

**1.** A collection of key-value pairs [1] in which each value is accessed via its associated key [1].

**2.** The existing value is replaced (overwritten) by the new value; no second entry is created [1].

**3.** Each key is used to find exactly one value, so a duplicated key would make it impossible to know which value to return [1]. Values are only data looked up through their keys, so several keys can map to the same value without ambiguity [1].

**4.** Information retrieval, such as word counts for documents [1]. A lookup table, such as product code to price [1]. Also credit vote or frequency counting, an adjacency list for a graph, representing a vector, or dictionary-based compression.

**5.** {'sea': 2, 'shells': 2, 'seashore': 1} [2]. One mark for the three correct keys with no duplicates, one mark for the correct counts. Keys in any order.

**6.** **(a)**

| Letter | counts after this letter |
|---|---|
| B | {'B': 1} |
| A | {'B': 1, 'A': 1} |
| N | {'B': 1, 'A': 1, 'N': 1} |
| A | {'B': 1, 'A': 2, 'N': 1} |
| N | {'B': 1, 'A': 2, 'N': 2} |
| A | {'B': 1, 'A': 3, 'N': 2} |

First three rows correct, each new letter added with value 1 [1]; repeated letters incremented, not added again [1]; final state {'B': 1, 'A': 3, 'N': 2} [1].
**(b)** Three [1].

**7.** **(a)** {'pen': 35, 'glue': 10} [2]. One mark for each correct pair; no mark for the pen pair if 'ruler' is still shown.
**(b)** An error occurs (a KeyError), because "ruler" was deleted and is no longer a key [1].
**(c)** `print(stock.get("ruler", 0))` [1]. Also accept an `if "ruler" in stock` test with an else branch printing 0.

**8.** A hash table finds a word by hashing it and going straight to its slot, usually in one step, whereas the list needs a linear search that may check all 100 000 entries [1]. The hash table's lookup time stays roughly the same as more words are added, whereas the list's average lookup time grows in proportion to the number of words [1]. The hash table needs spare empty slots and handling of collisions, whereas the list is simpler to program and uses no extra space [1].

**9.** **(a)** 'data' and 'test' [1].
**(b)** (3 × 1) + (1 × 0) + (2 × 4) + (0 × 2) [1] = 3 + 0 + 8 + 0 = **11** [1].

**10.** Example answer in Python:

```python
def winner(votes):
    tally = {}
    for name in votes:
        if name in tally:
            tally[name] = tally[name] + 1
        else:
            tally[name] = 1
    best = ""
    most = 0
    for name, count in tally.items():
        if count > most:
            most = count
            best = name
    return best
```

Marking points: creates an empty dictionary [1]; loops through every vote [1]; increments the count when the name is already a key [1]; adds the name with count 1 when it is not [1]; loops through the dictionary keeping track of the highest count found [1]; returns the name with the highest count [1]. Equivalent pseudocode gains full marks.

**11.** **(a)** Use each distinct word as a key [1], with its value being a list (or set) of the identifiers of the documents that contain the word [1].
**(b)** With a dictionary, the query word is looked up directly by key, usually in one step with a hash-table implementation [1], whereas a single list of pairs would have to be searched from start to end, checking every pair, for every query [1].

**12.** A list can be changed after it has been used as a key, so its hash value could change and the stored value could no longer be found; Python therefore does not allow lists as keys [1]. Use a tuple such as (3, 4), which cannot be changed (or a string such as "3,4") [1].

---

## Where marks are usually lost

- Dictionaries with repeated keys, such as 'sea' listed twice.
- Ignoring the instruction about letter case.
- Tracing code that adds a letter again instead of incrementing its count.
- Code that reads a key before checking it exists.
- Comparisons that describe the hash table but never mention the list.
