---
title: "OxfordAQA A-Level Computer Science (9645): Records -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 2 – Fundamental data structures"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 2.2
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamental-data-structures"
    subtopic: "records-oxfordaqa-alevel-cs"
description: "Twelve original OxfordAQA 9645 questions on sub-topic 3.2.2 Records: field types, data classes, arrays of records and reference traces, with full answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.2.2 Records** of OxfordAQA International AS and A-level Computer
Science (9645), Version 1.1: grouping values (fields) into a record that can be manipulated as a single
entity. Code is in Python, one of the exam languages; answers in C# or Visual Basic using `struct` or
`Structure` would be equally valid where code is asked for.

Related pages: [records study guide](/resources/oxfordaqa-a-level-computer-science-9645-records-oxfordaqa-alevel-cs/) ·
[records revision notes](/resources/oxfordaqa-a-level-computer-science-9645-records-oxfordaqa-alevel-cs-revision-notes/) ·
[records, queues and stacks practice questions](/resources/oxfordaqa-a-level-computer-science-records-queues-stacks-practice/)

## Section A

**1.** State **two** differences between a record and an array. **[2]**

**2.** An airline stores a record for each flight. Suggest a suitable data type for each field.

**(a)** Flight code, such as "BA0117" **[1]**
**(b)** Number of seats still available **[1]**
**(c)** Ticket price **[1]**
**(d)** Whether the flight has departed **[1]**

**3.** State the output of this code.

```python
from dataclasses import dataclass

@dataclass
class Plant:
    name: str = ""
    height: float = 0.0
    watered: bool = False

p = Plant("Fern", 32.5)
print(p.name, p.watered)
p.height = p.height + 1.5
print(p.height)
```

**[2]**

**4.** The specification says a record "can be manipulated as a single entity". Give **two** examples of a
record being handled as a single entity in a program. **[2]**

**5.** Give **one** advantage of declaring a record with `@dataclass` rather than with a class that sets
each field in `__init__`. **[1]**

## Section B

**6.** Write a Python data class called `Sensor` with these fields and default values: `sensor_id`
(string), `location` (string), `reading` (real) and `active` (Boolean). **[3]**

**7.** Using your `Sensor` record, write a Python function `average_active(sensors)` that takes a list of
`Sensor` records and returns the mean `reading` of the active sensors only. It should return 0.0 if no
sensor is active. **[5]**

**8.** Using the `Plant` data class from question 3, state the three values output by this code and explain
the first one.

```python
team = [Plant("Aloe", 10.0), Plant("Basil", 20.0)]
i = 1
x = team[i]
y = Plant(x.name, x.height)
x.height = 25.0
y.height = 30.0
print(team[i].height, y.height, x is team[i])
```

**[4]**

**9.** A program stores pupils' names in one list and their scores in a second list, linked by index. A
programmer sorts the scores list into descending order to produce a leaderboard.

**(a)** Explain the problem this causes. **[2]**
**(b)** Explain how storing the data as a list of records avoids the problem. **[2]**

**10.** A `Product` record has fields `code`, `name` and `price`. Write a Python function
`find_cheapest(products)` that returns the record with the lowest price from a non-empty list. **[4]**

**11.** A student writes:

```python
row = [Sensor()] * 3
start, middle, end = row
start.sensor_id = "S9"
print(end.sensor_id)
```

**(a)** State the output. **[1]**
**(b)** Explain why. **[1]**
**(c)** Rewrite the first line so that the list holds three separate records. **[1]**

**12.** A program written in C# uses a `struct` for customer records. It is rewritten in Python using a
class. In the C# version, `copy = original; copy.Balance = 0;` leaves `original` unchanged. In the Python
version, the equivalent code sets the original balance to 0 as well. Explain why, and describe how the
Python code should make an independent copy. **[3]**

## Answers

**1.** Any two [1] [1]: a record's fields can have **different data types**, while an array's elements are
normally all the same type; fields are accessed **by name**, array elements **by index**; a record
describes one entity, while an array holds a collection of similar items. **[2]**

**2. (a)** **String** (it contains letters, and leading zeros must be kept) [1]
**(b)** **Integer** [1]
**(c)** **Real / float** [1]
**(d)** **Boolean** [1]

**3.** `Fern False` [1]; `34.0` [1]. **[2]**

**4.** Any two [1] [1]: assigning a whole record to a variable; passing a record to a subroutine as one
parameter; returning a record from a function; storing a record in one element of an array; sorting an array
of records so that whole records move. **[2]**

**5.** Any one [1]: the constructor is generated automatically, so there is less code; the record prints in
a readable form; the field types are declared clearly with type hints.

**6.** Example answer:

```python
from dataclasses import dataclass

@dataclass
class Sensor:
    sensor_id: str = ""      # [1] decorator and class header
    location: str = ""
    reading: float = 0.0     # [1] all four fields named with types
    active: bool = False     # [1] sensible defaults of the right type
```

**[3]**

**7.** Example answer:

```python
def average_active(sensors):
    total = 0.0
    count = 0                         # [1] initialise total and counter
    for s in sensors:                 # [1] iterate over every record
        if s.active:                  # [1] test the Boolean field
            total = total + s.reading
            count = count + 1         # [1] accumulate reading and count
    if count == 0:
        return 0.0
    return total / count              # [1] guard against no active sensors, return mean
```

**[5]**
*Examiner insight:* Dividing by `len(sensors)` instead of the count of active sensors gives the wrong mean
and loses the accumulation mark.

**8.** Output: `25.0 30.0 True` [1] [1] [1] (one mark for each value). `team[i].height` is 25.0 because `x`
refers to the **same record** as `team[i]`, while `y` is a **new** record, so changing `y` does not affect
the list [1]. **[4]**

**9. (a)** The scores move to new positions but the names do not [1], so names are now matched with the
**wrong scores** [1]. **[2]**
**(b)** Each record holds a pupil's name **and** score together [1], so sorting the list by the score field
moves **whole records**, keeping each name with its score [1]. **[2]**

**10.** Example answer:

```python
def find_cheapest(products):
    cheapest = products[0]            # [1] start with the first record
    for p in products:                # [1] loop through all records
        if p.price < cheapest.price:  # [1] compare the price fields
            cheapest = p
    return cheapest                   # [1] return the record, not just the price
```

**[4]**

**11. (a)** `S9` [1]
**(b)** List multiplication copies the **reference**, so all three elements are the **same record** [1].
**(c)** `row = [Sensor() for i in range(3)]` (or append a new `Sensor()` in a loop) [1]

**12.** A C# `struct` is a **value type**, so assignment copies every field [1]. A Python class instance is
held by **reference**, so `copy = original` makes two names for one record [1]. Make an independent copy
by creating a new record, for example `copy.copy(original)` or `dataclasses.replace(original)`, or by
constructing a new record from the original's field values [1]. **[3]**

## Frequently asked questions

**Do I have to use a data class in the exam?**
No. The specification shows both a class used without methods and a data class; either is acceptable in
Python.

**Can a field hold another record or a list?**
Yes. A field can hold any type your language allows, but exam questions on 3.2.2 usually keep fields to
simple types.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS
exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.2.2 Records.
