---
title: "Cambridge IGCSE ICT (0417): Manipulate data"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 18: Databases"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 18.2
syllabusTopics:
  - qualification: "igcse"
    topic: "databases-0417"
    subtopic: "manipulate-data-0417"
description: "Calculated fields and controls, summary functions, multi-level sorts, and queries with AND, OR, NOT, LIKE and wildcards, for IGCSE ICT 0417 section 18.2."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 18.2 of Cambridge IGCSE ICT 0417 is **manipulate data**. It has three parts. **Perform calculations**: "calculated fields, calculated controls" and run-time formulae using "addition, subtraction, multiplication, division, sum, average, maximum, minimum, count". **Sort data**: "a single criterion, or multiple criteria", ascending or descending. **Search and select data**: queries using "AND, OR, NOT, LIKE, >, <, =, >=, <=, <>" and wildcards. This guide works through all three on one small invented table, with every result listed, going further than the [Databases study guide](/resources/cambridge-igcse-ict-databases-study-guide/).

## The example table

An invented sports shop has a table called **Products**:

| ProductID | ProductName | Category | Price | Stock | OnSale |
|---|---|---|---|---|---|
| P01 | Trail Shoes | Footwear | 54.99 | 12 | Yes |
| P02 | Swim Cap | Swimming | 6.50 | 40 | No |
| P03 | Running Socks | Footwear | 8.25 | 0 | Yes |
| P04 | Tennis Racket | Tennis | 89.00 | 5 | No |
| P05 | Swim Goggles | Swimming | 14.75 | 22 | Yes |
| P06 | Tennis Balls | Tennis | 7.99 | 60 | No |
| P07 | Shin Pads | Football | 12.40 | 18 | No |
| P08 | Football Boots | Footwear | 72.50 | 7 | Yes |

Price is currency, Stock is integer and OnSale is Boolean.

## Performing calculations

### Calculated fields

A **calculated field** is a new field created in a query from an expression using other fields. It is worked out for **each record** when the query runs and is not stored in the table. In many packages it is written as a name, a colon and the expression:

`StockValue: [Price]*[Stock]`

| ProductID | Price | Stock | StockValue |
|---|---|---|---|
| P01 | 54.99 | 12 | 659.88 |
| P02 | 6.50 | 40 | 260.00 |
| P03 | 8.25 | 0 | 0.00 |
| P04 | 89.00 | 5 | 445.00 |
| P05 | 14.75 | 22 | 324.50 |
| P06 | 7.99 | 60 | 479.40 |
| P07 | 12.40 | 18 | 223.20 |
| P08 | 72.50 | 7 | 507.50 |

Other arithmetic works the same way: `SalePrice: [Price]*0.8` (multiplication), `PriceAfterVoucher: [Price]-5` (subtraction), `PricePerPair: [Price]/2` (division), `PriceWithDelivery: [Price]+3.95` (addition). Format the result as the task asks, for example currency with 2 decimal places.

Because a calculated field is recalculated every time, it is always up to date: if the stock of P02 changes to 35, its StockValue becomes 6.50 × 35 = 227.50 the next time the query runs.

### Calculated controls

A **calculated control** is a box on a **form or report** whose content is an expression rather than a stored field. Common uses are totals and averages in a report footer:

| Calculated control | Expression | Result for all eight products |
|---|---|---|
| Total stock | `=Sum([Stock])` | 164 |
| Total stock value | `=Sum([StockValue])` | 2899.48 |
| Average price | `=Avg([Price])` | 33.2975, displayed as 33.30 |
| Number of products | `=Count([ProductID])` | 8 |
| Highest price | `=Max([Price])` | 89.00 |
| Lowest price | `=Min([Price])` | 6.50 |

These are the **run-time** functions in the syllabus: they are worked out when the report is opened or printed, using the records it contains at that moment. If the report is based on a query that selects only products on sale (P01, P03, P05, P08), the same controls give Count 4, Average price 37.6225 (displayed 37.62), Max 72.50 and Min 8.25.

The difference to remember: a calculated **field** gives one value per record (in a query); a calculated **control** sits on a form or report and often summarises many records.

## Sorting data

A **single-criterion** sort orders records by one field, ascending (A to Z, smallest first, earliest date first) or descending.

A **multiple-criteria** sort orders by a first field and then, where records tie, by a second. Sorting Products by **Category ascending, then Price descending**:

| Order | ProductID | Category | Price |
|---|---|---|---|
| 1 | P07 | Football | 12.40 |
| 2 | P08 | Footwear | 72.50 |
| 3 | P01 | Footwear | 54.99 |
| 4 | P03 | Footwear | 8.25 |
| 5 | P05 | Swimming | 14.75 |
| 6 | P02 | Swimming | 6.50 |
| 7 | P04 | Tennis | 89.00 |
| 8 | P06 | Tennis | 7.99 |

Football comes before Footwear because their fifth letters are *b* and *w*. Within Footwear, the prices run from highest to lowest. The order of the sort fields matters: sorting by Price first and Category second would produce a completely different list. In a query grid, the leftmost sorted field is applied first.

## Searching and selecting data

A **query** selects the subset of records that meet the criteria, showing only the fields chosen.

### Comparison operators

| Operator | Meaning | Example on Price | Records |
|---|---|---|---|
| = | equal to | = 89 | P04 |
| > | greater than | > 54.99 | P04, P08 |
| < | less than | < 8 | P02, P06 |
| >= | greater than or equal to | >= 54.99 | P01, P04, P08 |
| <= | less than or equal to | <= 8.25 | P02, P03, P06 |
| <> | not equal to | Stock <> 0 | All except P03 |

Note how > 54.99 excludes P01 while >= 54.99 includes it. Read the wording: "more than" is >, "at least" is >=, "up to" is <=.

### AND, OR and NOT

- **AND**: both conditions must be true. `Category = "Footwear" AND Price < 60` gives **P01, P03** (P08 is Footwear but costs 72.50).
- **OR**: at least one must be true. `Category = "Tennis" OR Category = "Swimming"` gives **P02, P04, P05, P06**.
- **NOT**: reverses a condition. `NOT Category = "Footwear"` (often entered as `Not "Footwear"`) gives **P02, P04, P05, P06, P07**.
- A range uses AND on one field: `Price >= 12.40 AND Price <= 54.99` gives **P01, P05, P07**.

In a query grid, criteria on the **same row** are joined by AND; criteria on **different rows** are joined by OR.

### LIKE and wildcards

**LIKE** compares text with a pattern containing **wildcards**. In many database packages, `*` stands for any number of characters (including none) and `?` for exactly one character; some use `%` and `_` instead, so check your software.

- `ProductName LIKE "Swim*"` gives **P02, P05** (names starting with Swim).
- `ProductName LIKE "*Ball*"` gives **P06 and P08**: Tennis Balls, and also Football Boots, because *ball* appears inside "Football". Pattern searches often ignore case.
- `ProductID LIKE "P0?"` matches all eight IDs; `ProductID LIKE "P1?"` matches none.

### Worked example: building a query from a request

*Request:* "List the name and price of products that are on sale and are either footwear or cost more than 50, with the dearest first."

1. Conditions: OnSale = Yes **AND** (Category = "Footwear" **OR** Price > 50).
2. Check each record: P01 (on sale, footwear) yes; P03 (on sale, footwear) yes; P05 (on sale, swimming, 14.75) no; P08 (on sale, footwear) yes; the others are not on sale.
3. Result: P01, P03, P08. Sort on Price descending: Football Boots 72.50, Trail Shoes 54.99, Running Socks 8.25.
4. Show only ProductName and Price.

The brackets matter. Without them, "on sale AND footwear OR price over 50" could also include P04 (89.00, not on sale). In a query grid, put OnSale = Yes on **both** OR rows to get the bracketed meaning.

## Common mistakes

- Using > when the question says "at least", or < when it says "up to".
- Using OR between conditions on different fields when both must be true.
- Forgetting that `LIKE "*ball*"` also matches words such as *Football*.
- Placing a calculated field in the table instead of the query.
- Putting the sort fields in the wrong order for a multi-level sort.
- Typing criteria text with a different spelling from the stored data.

## Exam technique

In practical tasks, show the query design (criteria and sort) as well as the results, because both earn marks. Name calculated fields exactly as instructed. On the theory paper, if asked to write criteria, use the field name, operator and value, with text in quotation marks. When asked which records a query returns, check every record against every condition, as in the worked example.

## Next steps

Revise with the [manipulate data revision notes](/resources/cambridge-igcse-ict-0417-manipulate-data-revision-notes/), then try the [manipulate data practice questions](/resources/cambridge-igcse-ict-0417-manipulate-data-practice/). For setting up the tables first, see the [create a database structure study guide](/resources/cambridge-igcse-ict-0417-create-a-database-structure/).

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, Topic 18 "Databases", 18.2 Manipulate data.
