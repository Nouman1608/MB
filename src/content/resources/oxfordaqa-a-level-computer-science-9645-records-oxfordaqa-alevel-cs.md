---
title: "OxfordAQA A-Level Computer Science (9645): Records"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.2.2 in depth: designing records, Python classes and data classes, structs, arrays of records and copying versus referencing."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers sub-topic **3.2.2 Records** of OxfordAQA International AS and A-level Computer Science
(9645), Version 1.1, in topic 3.2 Fundamental data structures (AS). The specification asks you to "be
familiar with the composition of a group of values (known as fields) into a record which can be manipulated
as a single entity". Its additional information shows two Python routes (a class used in a
non-object-oriented way, or a data class from Python 3.7) and names `struct` in C# and `Structure` in
Visual Basic.

For quick recall use the [records revision notes](/resources/oxfordaqa-a-level-computer-science-9645-records-oxfordaqa-alevel-cs-revision-notes/),
and test yourself with the [records practice questions](/resources/oxfordaqa-a-level-computer-science-9645-records-oxfordaqa-alevel-cs-practice/).
Records also appear alongside queues and stacks in the
[records, queues and stacks study guide](/resources/a-level-oxfordaqa-computer-science-records-queues-and-stacks/).

## What "a single entity" means in practice

A record bundles related values so that the program can treat them as **one thing**. Three practical
consequences follow, and each is a likely exam point:

1. **One variable holds the whole record.** You can pass a book record to a subroutine as one parameter,
   return it from a function, or store it in one array element.
2. **Each field is reached by name**, using dot notation such as `book.price`. The name documents what the
   value means.
3. **Fields may have different data types**: a string title, a real price and a Boolean stock flag can sit
   in the same record. An array, by contrast, normally holds elements of one type reached by index.

## Designing a record

Before writing code, decide the fields and their types. A record design is often asked for in a
table.

| Field | Data type | Reason |
|---|---|---|
| `isbn` | String | Contains hyphens and may start with 0, so it is not a number to calculate with |
| `title` | String | Text |
| `price` | Real (float) | Has a fractional part |
| `in_stock` | Boolean | Only two states |

Two design rules earn marks:

- **Choose the type by use, not by appearance.** A phone number or product code is a string even if it is
  made of digits, because you never do arithmetic on it and leading zeros matter.
- **One field, one fact.** Storing "title and author" in one string makes searching by author awkward.

## Records in Python

### A class used without methods

The specification's first route is a class whose constructor only sets fields:

```python
class Book():
    def __init__(self):
        self.isbn = ""
        self.title = ""
        self.price = 0.0
        self.in_stock = False

b = Book()
b.title = "Data Structures"
b.price = 12.99
b.in_stock = True
```

Every field gets a default value in `__init__`, which also tells the reader its intended type.

### A data class

The second route declares fields with type hints and lets Python write the constructor:

```python
from dataclasses import dataclass

@dataclass
class Book:
    isbn: str = ""
    title: str = ""
    price: float = 0.0
    in_stock: bool = False

b = Book("B101", "Algorithms", 18.50, True)
```

Data classes are shorter and give a readable printout of the record for free. The type hints document the
design but Python does not enforce them at run time.

### C# and Visual Basic

```csharp
struct Book
{
    public string Isbn;
    public string Title;
    public double Price;
    public bool InStock;
}
```

```vb
Structure Book
    Public Isbn As String
    Public Title As String
    Public Price As Double
    Public InStock As Boolean
End Structure
```

## Arrays of records

An array (or list) of records models a table: each element is a row and each field is a column.

```python
library = [
    Book("B101", "Algorithms", 18.50, True),
    Book("B102", "Networks", 9.99, False),
    Book("B103", "Databases", 14.25, True),
]

def total_in_stock_value(books):
    total = 0.0
    for book in books:
        if book.in_stock:
            total += book.price
    return total

def find_by_isbn(books, target):
    for i in range(len(books)):
        if books[i].isbn == target:
            return i
    return -1
```

`total_in_stock_value(library)` returns 32.75 (18.50 + 14.25), and `find_by_isbn(library, "B102")` returns 1.
Returning −1 for "not found" is a common convention, because −1 can never be a valid index here.

### Why not parallel arrays?

Without records you could keep `titles = [...]` and `prices = [...]` and rely on matching indexes. This is
fragile: sorting one array without the other, or deleting from one only, silently attaches prices to the
wrong titles. A list of records keeps each book's fields together, so sorting moves whole records:

```python
library.sort(key=lambda bk: bk.price)
```

## Passing and returning whole records

Because a record is one entity, a subroutine can take or give back all its fields at once. This keeps
parameter lists short and makes the subroutine's job clear.

```python
def apply_discount(book, percent):
    book.price = round(book.price * (1 - percent / 100), 2)

def make_book(isbn, title):
    return Book(isbn, title, 0.0, False)
```

`apply_discount(library[0], 10)` changes the price inside the record stored in the list, because the
function receives a reference to that record, not a copy. `make_book` returns a complete new record with
safe defaults for the fields it was not given.

## Worked example: copying versus referencing

*Trace this Python code, which uses the data class above.*

```python
first = library[0]
alias = first
alias.price = 5.00
print(first.price)
```

| Line | Effect |
|---|---|
| `first = library[0]` | `first` refers to the record stored at index 0 |
| `alias = first` | `alias` refers to the **same** record; no copy is made |
| `alias.price = 5.00` | The single shared record is changed |
| `print(first.price)` | Outputs `5.0` |

In Python, a variable holding a class instance holds a **reference**. To get an independent copy, create a
new record, for example with `dataclasses.replace(first, price=5.00)` or `copy.copy(first)`. In C# and
Visual Basic, a `struct` or `Structure` is a **value type**, so assigning one to another variable copies all
its fields. This difference is worth knowing when you trace code in your chosen language.

## Annotated model answer

*Explain one advantage of storing customer details as an array of records rather than as several separate
arrays.* 

> Each customer's fields are stored **together in one record** *(the structural point)*, so when the array
> is sorted or an element is deleted, **all of that customer's data moves together** *(the consequence)*,
> and fields cannot become mismatched as they can with parallel arrays *(comparison with the alternative)*.

## Exam technique

- **Define:** a record is a collection of related fields, possibly of different types, treated as a single
  entity; a field is one named item of data within it.
- **Design:** give a field name, a sensible data type and, if asked, a reason, for each field.
- **Write code:** use the record syntax of your exam language consistently, initialise every field, and
  access fields with dot notation.
- **Compare with arrays:** name access (by field name versus index) and types (mixed versus usually one
  type).

## Common mistakes

- Storing numeric-looking codes as integers, losing leading zeros.
- Accessing fields by position (`book[1]`) instead of by name.
- Forgetting to create a new record object for each item, so every array element refers to the same one.
- Assuming assignment copies a Python record.
- Calling a record "an object with methods": a record holds data only.

## Next steps

- [Records revision notes](/resources/oxfordaqa-a-level-computer-science-9645-records-oxfordaqa-alevel-cs-revision-notes/)
- [Records practice questions](/resources/oxfordaqa-a-level-computer-science-9645-records-oxfordaqa-alevel-cs-practice/)
- [Queues study guide](/resources/oxfordaqa-a-level-computer-science-9645-queues-oxfordaqa-alevel-cs/)
- [Arrays and lists study guide](/resources/a-level-oxfordaqa-computer-science-arrays-and-lists/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS
exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.2.2 Records.
