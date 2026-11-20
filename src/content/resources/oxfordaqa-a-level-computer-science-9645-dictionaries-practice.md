---
title: "OxfordAQA A-Level Computer Science (9645): Dictionaries -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Dictionaries Practice Questions"
resourceType: "practice-questions"
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
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.10.5 Dictionaries: key-value pairs, library operations, counting and lookup programs, with answers."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.10.5 Dictionaries** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: key-value pairs, the operations of a dictionary library, and simple applications. Code is Python. Output shown in the answers was produced by running the code.

Related pages: [dictionaries study guide](/resources/oxfordaqa-a-level-computer-science-9645-dictionaries/) ·
[dictionaries revision notes](/resources/oxfordaqa-a-level-computer-science-9645-dictionaries-revision-notes/) ·
[advanced data structures practice questions](/resources/oxfordaqa-a-level-computer-science-advanced-data-structures-practice/)

## Section A

**1.** Describe what a dictionary is. **[2]**

**2.** State whether keys must be unique and whether values must be unique. **[2]**

**3.** A dictionary `d` contains the pairs `"a": 1`. State the contents of `d` after these statements.

```python
d["a"] = 2
d["b"] = 2
```

**[2]**

**4.** State what `x.get("c", 0)` returns when `x` has no key "c", and say why it can be safer than `x["c"]`. **[2]**

## Section B

**5.** A shop keeps its stock in a dictionary.

```python
inv = {"pen": 12, "ink": 3}
inv["pen"] = inv["pen"] - 5
inv["pad"] = 20
del inv["ink"]
print(inv, len(inv), "ink" in inv, "pad" in inv)
```

State the output. **[4]**

**6.** A café price list is held in the dictionary `fruit = {"apple": 0.40, "pear": 0.55, "plum": 0.30}`. A basket is the list `["apple", "plum", "apple", "pear", "apple"]`. Write code that uses the dictionary to calculate the total price of the basket, and state the total. **[4]**

**7.** Write a Python program that counts how many times each letter appears in the string "banana" and displays the counts. State the output. **[5]**

**8.** A dictionary `names` maps each digit character to a word, for example "4" to "four". Write a statement that uses it to display the digits of the string "407" as words separated by spaces, given `names = {"0": "zero", "4": "four", "7": "seven"}`. State the output. **[3]**

**9.** The dictionary below stores facts about employees, keyed by employee number.

```python
staff = {"EM1": {"name": "Rao", "dept": "IT", "pay": 2400},
         "EM2": {"name": "Lin", "dept": "HR", "pay": 2100}}
```

**(a)** Write an expression that gives the department of employee EM2. **[1]**
**(b)** Write an expression that gives the total pay of both employees. **[2]**

**10.** A program must store the phone number for each of 200 students and find the number from a student's name. Compare using a dictionary with using two parallel lists (a list of names and a list of numbers). **[4]**

**11.** The dictionary `scores = {"Ana": 62, "Ben": 55, "Cy": 30}` records each player's best score.

**(a)** Write code that displays the name and score of every player with a score of 50 or more. **[3]**
**(b)** Write a statement that stores the name of the player with the highest score in a variable `top`. **[2]**

**12.** A program adds the pair `"Ben": 70` to the dictionary in question 11 and then the pair `"Ben": 80`. State how many entries the dictionary has afterwards, and explain your answer. **[2]**

## Answers

**1.** A collection of key-value pairs [1] in which each value is accessed using its associated key [1]. **[2]**

**2.** Keys must be unique [1]. Values need not be unique [1]. **[2]**

**3.** `{'a': 2, 'b': 2}` [1 for "a" replaced by 2, 1 for "b" added]. **[2]**

**4.** It returns **0** (the default) [1]. `x["c"]` would cause a `KeyError` if the key is missing, so `get` avoids the error [1]. **[2]**

**5.** Output: `{'pen': 7, 'pad': 20} 2 False True`. The dictionary `{'pen': 7, 'pad': 20}` [2]; length `2` [1]; `False` for "ink" and `True` for "pad" [1]. **[4]**

**6.** Example answer:

```python
total = 0
for item in basket:                  # [1] loops through the basket
    total = total + fruit[item]      # [1] looks up each price by key  [1] adds to total
print(total)
```

The total is 2.05 [1] (it may display with a rounding error such as 2.0500000000000003 unless it is rounded). **[4]**

**7.** Example answer:

```python
counts = {}                              # [1] empty dictionary
for ch in "banana":                      # [1] loops through the letters
    counts[ch] = counts.get(ch, 0) + 1   # [1] adds 1, starting at 0 for a new letter
print(counts)                            # [1]
```

The output is `{'b': 1, 'a': 3, 'n': 2}` [1]. (Accept an `if ch in counts` / `else` version.) **[5]**

**8.** Example answer: `print(" ".join(names[d] for d in "407"))` [2 for looking up each digit and joining the words with spaces]. The output is `four zero seven` [1]. **[3]**

**9. (a)** `staff["EM2"]["dept"]` [1]
**(b)** `staff["EM1"]["pay"] + staff["EM2"]["pay"]` [1] which gives 4500 [1]. **[2]**

**10.** Dictionary: the name is the key and the number is the value, so a number is found directly from the name with a single look-up [1]. Parallel lists: the program must search the names list to find the position of the name, then use that position in the numbers list [1]. The dictionary needs less code and gives fewer opportunities for mistakes, and look-ups are usually much faster for 200 students [1]. With lists the two must be kept in step when students are added or removed, whereas a dictionary keeps each name with its number [1]. **[4]**

**11. (a)** Example answer:

```python
for name, score in scores.items():    # [1] loops through the pairs
    if score >= 50:                   # [1] tests the value
        print(name, score)            # [1] displays name and score
```

The output is `Ana 62` and `Ben 55`. **[3]**
**(b)** `top = max(scores, key=scores.get)` [2] (accept a loop that keeps the key with the largest value). The result is "Ana". **[2]**

**12.** The dictionary has **3** entries [1]. The second assignment replaces the value for the existing key "Ben" instead of adding a new pair, because keys are unique [1]. **[2]**

## Frequently asked questions

**Can two keys have the same value?**
Yes. Values do not have to be unique. Only the keys must be unique.

**Which dictionary library do I need to know?**
The specification asks for experience of a dictionary library in a programming language. Use the one that your course teaches, such as Python's `dict`, or the `Dictionary` type in C# or VB.Net.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.10.5 Dictionaries.
