---
title: "OxfordAQA IGCSE Computer Science (9210): Data structures -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 2 – Programming"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 2.06
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "data-structures-9210"
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on one- and two-dimensional arrays, records and arrays of records."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-17
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Data structures study guide](/resources/oxfordaqa-igcse-computer-science-9210-data-structures/) | [Data structures revision notes](/resources/oxfordaqa-igcse-computer-science-9210-data-structures-revision-notes/)

These questions cover section 3.2.6 Data structures of the OxfordAQA International GCSE Computer Science (9210)
specification. Arrays are indexed from 0 unless a question says otherwise.

---

## Section A

**1.** State what is meant by a **data structure**. **[1]**

**2.** Explain **one** advantage of storing 50 temperature readings in an array rather than in 50 separate
variables. **[2]**

**3.** The array `ages ← [12, 15, 11, 14, 13]` is used in a program.
**(a)** State the value of the element at index 3. **[1]**
**(b)** State the value of `LEN(ages)`. **[1]**
**(c)** State the index of the last element. **[1]**

**4.** State the most suitable data structure for each of the following:
**(a)** the booking status of every seat in a hall with 12 rows of 20 seats **(b)** one employee's name, start
year, hourly rate and whether they work part-time. **[2]**

**5.** An array of records called `stock` holds items, each with a field `name`. Write an expression that gives
the name of the item at index `k`. **[1]**

## Section B

**6.** An array `rainfall` holds 12 real values, one for each month.

**(a)** Write pseudocode that calculates and outputs the mean monthly rainfall. **[3]**
**(b)** Extend your answer so that it also outputs how many months had rainfall above the mean. **[3]**

**7.** A two-dimensional array `scores` stores the points scored by two teams in three rounds. Row `home ← 0`
holds `6, 9, 4` and row `away ← 1` holds `8, 3, 7`, with the round number as the column index.

```
home ← 0
away ← 1
FOR r ← 0 TO 2
  IF scores[home][r] > scores[away][r] THEN
    OUTPUT "Home"
  ELSE
    OUTPUT "Away"
  ENDIF
ENDFOR
```

**(a)** State the three outputs. **[3]**
**(b)** Write pseudocode that calculates and outputs the total points of the away team. **[3]**
**(c)** State what is output for a round in which the two scores are equal, and suggest a change that would deal
with this case properly. **[2]**

**8.** A railway station program stores information about each departure: a service code such as `"RX204"`, the
destination, the departure time such as `"09:45"`, the platform number and whether the train is delayed.

**(a)** Define a record structure for one departure, giving a suitable data type for each field. **[5]**
**(b)** The departures are stored in an array of records called `board`. Write pseudocode that outputs the
destination of every delayed train. **[3]**

**9.** A teacher stores the marks of 28 pupils in 5 tests. Explain why a two-dimensional array is more suitable
than five separate one-dimensional arrays. **[2]**

**10.** An array of records `cars` stores vehicles, each with fields `reg` (string) and `price` (real). Write
pseudocode that asks the user for a registration and outputs that car's price, or `"Not found"` if no car has
that registration. **[5]**

**11.** A student writes this code to output every element of the array `list`:

```
FOR i ← 1 TO LEN(list)
  OUTPUT list[i]
ENDFOR
```

Identify the **two** problems with the loop and write a corrected first line. **[3]**

**12.** State what the specification says can be used in Python in place of an array, and what can be used to
create a record. **[2]**

---

## Answers

**1.** An organised way of storing a collection of related data items under one name, so that they can be
processed together [1].

**2.** One loop can process every reading by changing the index [1], so the code is far shorter and works for any
number of readings without writing 50 separate statements [1].

**3.** **(a)** 14 [1] **(b)** 5 [1] **(c)** 4 [1].

**4.** (a) A two-dimensional array (12 × 20, for example of Booleans) [1] (b) a record [1].

**5.** `stock[k].name` [1].

**6.** **(a)**

```
total ← 0
FOR i ← 0 TO 11
  total ← total + rainfall[i]
ENDFOR
mean ← total / 12
OUTPUT mean
```

Total initialised and accumulated in a loop over all 12 elements [1]; divided by 12 (or `LEN(rainfall)`) [1];
mean output [1].
**(b)**

```
above ← 0
FOR i ← 0 TO 11
  IF rainfall[i] > mean THEN
    above ← above + 1
  ENDIF
ENDFOR
OUTPUT above
```

Second loop after the mean is known [1]; comparison with the mean [1]; count incremented and output [1].

**7.** **(a)** Away [1], Home [1], Away [1].
**(b)**

```
awayTotal ← 0
FOR r ← 0 TO 2
  awayTotal ← awayTotal + scores[away][r]
ENDFOR
OUTPUT awayTotal
```

Total set to 0 [1]; loop over the three rounds using the away row [1]; total accumulated and output (18) [1].
**(c)** "Away" is output [1]; add a test such as `ELSE IF scores[home][r] = scores[away][r] THEN OUTPUT "Draw"`
before the final `ELSE` [1].

**8.** **(a)**

```
RECORD Departure
  code : String
  destination : String
  time : String
  platform : Integer
  delayed : Boolean
ENDRECORD
```

One mark for each field with a suitable type [1] [1] [1] [1] [1]. (Accept time as a real or a pair of integers
with a reason; code must be a string because it contains letters.)
**(b)**

```
FOR i ← 0 TO LEN(board) - 1
  IF board[i].delayed THEN
    OUTPUT board[i].destination
  ENDIF
ENDFOR
```

Loop over every record [1]; test the `delayed` field [1]; output the `destination` field [1].

**9.** All the marks can be stored under one name and reached with a pupil index and a test index [1], so nested
loops can process the whole table, for example to total each pupil's marks, without writing separate code for
each test [1].

**10.** One possible answer:

```
target ← USERINPUT
found ← False
FOR i ← 0 TO LEN(cars) - 1
  IF cars[i].reg = target THEN
    OUTPUT cars[i].price
    found ← True
  ENDIF
ENDFOR
IF NOT found THEN
  OUTPUT "Not found"
ENDIF
```

Registration input [1]; loop over every record [1]; comparison with the `reg` field [1]; price output when
matched [1]; "Not found" output only when no match occurs [1].

**11.** The loop starts at 1, so the first element (index 0) is missed [1]; it ends at `LEN(list)`, which is
beyond the last index [1]. Corrected: `FOR i ← 0 TO LEN(list) - 1` [1].

**12.** A list in place of an array [1]; a class used in a non-object-oriented way to create a record [1].

---

## Where marks are usually lost

- Calculating the mean inside the loop, or counting above-mean months before the mean is known.
- Treating `scores[home][r]` as column first.
- Giving the platform number as a string without a reason, or the service code as an integer.
- Outputting "Not found" inside the loop, once for every non-matching car.
- Off-by-one loop bounds: indexes run from 0 to `LEN - 1`.
