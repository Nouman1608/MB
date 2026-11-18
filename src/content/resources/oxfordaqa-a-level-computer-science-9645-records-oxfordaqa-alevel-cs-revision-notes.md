---
title: "OxfordAQA A-Level Computer Science (9645): Records -- Revision Notes"
resourceType: "revision-notes"
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
description: "Recall notes for OxfordAQA 9645 sub-topic 3.2.2 Records: fields, record design, Python and struct syntax, arrays of records, traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense sub-topic **3.2.2 Records** of OxfordAQA International AS and A-level Computer Science
(9645), Version 1.1 (AS content in topic 3.2 Fundamental data structures). The specification wording is
"the composition of a group of values (known as fields) into a record which can be manipulated as a single
entity". For full explanations and traced examples, see the
[records study guide](/resources/oxfordaqa-a-level-computer-science-9645-records-oxfordaqa-alevel-cs/), then
test yourself with the
[records practice questions](/resources/oxfordaqa-a-level-computer-science-9645-records-oxfordaqa-alevel-cs-practice/).

## Core ideas

- A **record** groups related values, called **fields**, into one unit.
- Fields can be of **different data types**.
- Fields are accessed **by name** (`rec.field`), not by index.
- The whole record can be **assigned, passed, returned and stored** as one item.
- An **array of records** models a table: one record per row, one field per column.

## Key terms

| Term | Meaning |
|---|---|
| Record | A collection of related fields treated as a single entity |
| Field | One named data item within a record, with its own data type |
| Record type | The definition (template) listing the fields and their types |
| Data class | Python 3.7+ shortcut (`@dataclass`) that builds a record type from typed fields |
| `struct` / `Structure` | Record types in C# / Visual Basic |
| Array of records | An array whose elements are each a record |
| Parallel arrays | Separate arrays linked only by matching index; the fragile alternative to records |
| Reference | What a Python variable holds for a class instance; two variables can share one record |

## Syntax summary

**Python, class without methods**

```python
class Pupil():
    def __init__(self):
        self.name = ""
        self.form = ""
        self.mark = 0
```

**Python, data class**

```python
from dataclasses import dataclass

@dataclass
class Pupil:
    name: str = ""
    form: str = ""
    mark: int = 0
```

**C#:** `struct Pupil { public string Name; public string Form; public int Mark; }`

**Visual Basic:** `Structure Pupil` … `Public Mark As Integer` … `End Structure`

## Choosing field types

| Data | Type | Why |
|---|---|---|
| Name, address | String | Text |
| Phone number, product code | String | Digits but no arithmetic; leading zeros matter |
| Age, quantity | Integer | Whole numbers used in calculations |
| Price, height | Real | Fractional values |
| Paid?, member? | Boolean | Two states |
| Date of birth | Date (or string in a fixed format) | Language-dependent |

## Common operations on an array of records

| Task | Pattern |
|---|---|
| Read a field | `pupils[i].mark` |
| Update a field | `pupils[i].mark = 72` |
| Linear search by field | Loop; compare `pupils[i].name` with the target; return index or −1 |
| Total or average a field | Loop and accumulate `p.mark` |
| Sort by a field | `pupils.sort(key=lambda p: p.mark)` |
| Count matches | Loop with an `if` on a field and a counter |

## Worked reminder: counting matches

Count the pupils in form "12B" whose mark is at least 60:

```python
def count_passes(pupils, form):
    count = 0
    for p in pupils:
        if p.form == form and p.mark >= 60:
            count = count + 1
    return count
```

Two fields are tested in one condition, and the whole list of records is passed as a single parameter.

## Records versus arrays

| | Record | Array |
|---|---|---|
| Element types | Can differ | Normally all the same |
| Access | By field name | By index |
| Typical use | Details of one entity | A collection of similar items |
| Combined | An array of records stores many entities | |

## Exam traps

- **Numeric codes stored as integers.** "0123" becomes 123.
- **Index access to fields.** `pupil[2]` is not how you reach a field; use `pupil.mark`.
- **Shared references in Python.** `b = a` makes `b` another name for the same record; changing `b.mark`
  changes `a.mark`.
- **`[Pupil()] * 30`.** Creates 30 references to **one** record; build each with a loop or comprehension.
- **Struct copies.** In C# and Visual Basic, assigning a struct copies its fields, so the two copies change
  independently.
- **Records are not objects with behaviour.** The specification uses classes "in a non-object-oriented
  way": data only, no methods.

## Quick self-test

1. Define a record.
2. Define a field.
3. Give two differences between a record and an array.
4. Suggest a data type for a postcode and justify it.
5. Suggest a data type for the number of items in stock.
6. Write the Python expression for the mark of the fourth pupil in a list `pupils`.
7. Name the Python feature, available from 3.7, that builds a record type from typed fields.
8. Name the record keyword in C#.
9. Give one problem with parallel arrays that records avoid.
10. After `x = pupils[0]` and `x.mark = 90`, what is `pupils[0].mark` in Python?
11. What does a linear search over an array of records usually return if the target is not found?
12. Why is `[Pupil()] * 3` a poor way to create three records in Python?

### Answers

1. A collection of related fields, possibly of different types, treated as a single entity.
2. A single named item of data within a record.
3. Fields can have different types (arrays usually one type); fields are accessed by name (arrays by index).
4. String: it mixes letters and digits and is not used in arithmetic.
5. Integer: a whole number used in calculations.
6. `pupils[3].mark`
7. Data classes (`@dataclass`).
8. `struct`
9. Sorting or deleting in one array but not the others mismatches the data.
10. 90, because `x` refers to the same record.
11. −1 (a value that cannot be a valid index).
12. It makes three references to one record, so changing one changes all three.

## Next steps

- [Records study guide](/resources/oxfordaqa-a-level-computer-science-9645-records-oxfordaqa-alevel-cs/)
- [Records practice questions](/resources/oxfordaqa-a-level-computer-science-9645-records-oxfordaqa-alevel-cs-practice/)
- [Queues revision notes](/resources/oxfordaqa-a-level-computer-science-9645-queues-oxfordaqa-alevel-cs-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS
exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.2.2 Records.
