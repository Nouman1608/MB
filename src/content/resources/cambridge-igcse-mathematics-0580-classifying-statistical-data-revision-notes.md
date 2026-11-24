---
title: "Cambridge IGCSE Mathematics (0580): Classifying statistical data -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 9 – Statistics"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 9.1
syllabusTopics:
  - qualification: "igcse"
    topic: "statistics-cambridge-igcse-maths"
    subtopic: "classifying-statistical-data-cambridge-igcse-maths"
description: "Revision notes for Cambridge IGCSE Maths 0580 section 9.1: data types, class interval rules, tally tables, two-way tables, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

These notes condense **9.1 Classifying statistical data** from Topic 9 Statistics of the Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027. The syllabus asks you to "Classify and tabulate statistical data", for example with tally tables and two-way tables. C9.1 and E9.1 are identical, so every line here is for both Core and Extended candidates.

For full explanations and longer worked examples, use the [classifying statistical data study guide](/resources/cambridge-igcse-mathematics-0580-classifying-statistical-data/). To practise, go to the [classifying data practice questions](/resources/cambridge-igcse-mathematics-0580-classifying-statistical-data-practice/).

## Key terms

| Term | Meaning |
|---|---|
| Raw data | Data as collected, before any sorting |
| Variable | The feature being recorded, such as height or favourite colour |
| Qualitative (categorical) | Values are words or labels |
| Quantitative (numerical) | Values are numbers that you can do arithmetic with |
| Discrete | Counted; only separate values are possible |
| Continuous | Measured; any value in a range is possible |
| Tally | A stroke recorded for each item; the fifth stroke crosses the first four |
| Frequency | How many times a value or class occurs |
| Class interval | A group of values, such as 20–29 or 20 ≤ m < 30 |
| Open-ended class | A class with no upper (or lower) limit, such as "60 or more" |
| Two-way table | A table that classifies items by two variables, with row and column totals |

## Data types in one minute

```
Is it a number you can do arithmetic with?
   no  -> QUALITATIVE (colour, brand, bus route number)
   yes -> QUANTITATIVE. Was it counted or measured?
            counted  -> DISCRETE   (people, goals, shoe size, money)
            measured -> CONTINUOUS (length, mass, time, age, temperature)
```

Quick reminders:

- **Shoe size** is discrete: half sizes exist, but nothing in between.
- **Money** is discrete: it changes in steps of the smallest coin.
- **Age** is continuous, even when it is given in whole years.
- **A rounded measurement is still continuous.** 64 kg to the nearest kg is a measured mass.

## Writing class intervals

| Data | How to write the classes | Boundary value goes in |
|---|---|---|
| Discrete | 0–4, 5–9, 10–14 | The class that names it: 9 is in 5–9 |
| Continuous | 0 ≤ t < 5, 5 ≤ t < 10 | The class it starts: 5 is in 5 ≤ t < 10 |

Rules for continuous classes:

- **No gaps:** each class ends exactly where the next begins.
- **No overlaps:** use ≤ at one end and < at the other.
- **Cover everything:** check the smallest and largest values first.

A discrete table may look as if it has gaps (4 then 5), but no data can fall between them. A continuous table must not.

## Tally tables: method

```
1. Write the classes (or values) down the side.
2. Go through the raw data ONCE, in order, one stroke per value.
3. Group strokes in fives (the fifth crosses the four).
4. Count each row into the frequency column.
5. Add the frequencies. The total must equal the number of data items.
```

Step 5 is the check that catches missed or double-counted values.

**Small reminder.** Lengths of 12 phone calls, in minutes: 3.2, 7.5, 1.0, 4.8, 5.0, 2.6, 9.9, 6.1, 0.4, 5.7, 8.3, 2.5.

```
Length t (min)   Frequency
0 ≤ t < 2            2      (1.0, 0.4)
2 ≤ t < 4            3      (3.2, 2.6, 2.5)
4 ≤ t < 6            3      (4.8, 5.0, 5.7)
6 ≤ t < 8            2      (7.5, 6.1)
8 ≤ t < 10           2      (9.9, 8.3)
Total               12
```

5.0 is in 4 ≤ t < 6 because that class includes values up to but not including 6.

## Two-way tables: method

```
1. Draw rows for one variable, columns for the other, plus a Total row and column.
2. Put in every number given directly.
3. Turn each fraction, percentage or ratio into a number.
   Check which total it is "of".
4. Fill any row or column with only one gap left. Repeat.
5. Check: rows add to row totals, columns to column totals,
   and both sets of totals give the grand total.
```

**Small reminder.** 60 people choose tea or coffee; 35 are women. 18 men choose coffee. 40% of the women choose tea.

```
Men       = 60 − 35 = 25
Women tea = 40% of 35 = 14
Women coffee = 35 − 14 = 21
Men tea   = 25 − 18 = 7

          Tea   Coffee   Total
Men         7     18       25
Women      14     21       35
Total      21     39       60
```

Check: 21 + 39 = 60.

## Reading a two-way table: which denominator?

| Question wording | Denominator |
|---|---|
| "What fraction of the men chose coffee?" | Men total (25): 18/25 |
| "What fraction of the coffee drinkers were men?" | Coffee total (39): 18/39 = 6/13 |
| "What fraction of all the people were men who chose coffee?" | Grand total (60): 18/60 = 3/10 |

The group named after "of" is the denominator.

## Exam traps

- Answering "quantitative" without "discrete" or "continuous" when the question asks for the type of numerical data.
- Saying age or time is discrete because the answers were whole numbers.
- Classes such as 10–20, 20–30 for continuous data: 20 is in both.
- Putting a boundary value in the class that ends with it, for continuous classes.
- Tallying one class at a time through the list, which misses values.
- Not checking that the frequency total equals the number of items.
- Using the grand total for "25% of the women".
- Leaving the Total cells blank in a "complete the table" question.

## Quick self-test

1. State the type of data: the number of pages in a book.
2. State the type of data: the time a phone battery lasts.
3. State the type of data: the colour of a car.
4. Explain why a player's shirt number is qualitative.
5. A student uses the classes 0–10, 10–20, 20–30 for times in seconds. Give one problem with these classes.
6. Rewrite the classes in question 5 correctly.
7. Which class contains the value 15 if the classes are 10 ≤ x < 15 and 15 ≤ x < 20?
8. Which class contains the value 19 if the classes are 10–19 and 20–29, for whole numbers?
9. A tally table has frequencies 4, 9, 11, 6. There were 32 items of data. What does this tell you?
10. 80 students: 45 are girls; 20% of the boys play chess. How many boys play chess?
11. In question 10, 15 girls play chess. How many students do not play chess?
12. In question 10, what fraction of the chess players are girls?

### Answers

1. **Quantitative, discrete** (counted).
2. **Quantitative, continuous** (measured).
3. **Qualitative.**
4. The number is a **label**: arithmetic on shirt numbers has no meaning.
5. **10 and 20 are each in two classes** (the classes overlap at the ends).
6. **0 ≤ t < 10, 10 ≤ t < 20, 20 ≤ t < 30.**
7. **15 ≤ x < 20.**
8. **10–19.**
9. 4 + 9 + 11 + 6 = 30, not 32: **two values have been missed** in the tally.
10. Boys = 80 − 45 = 35; 20% of 35 = **7**.
11. Chess players = 7 + 15 = 22; 80 − 22 = **58**.
12. **15/22.**

## More on this topic

- Re-read the worked examples in the [classifying statistical data study guide](/resources/cambridge-igcse-mathematics-0580-classifying-statistical-data/).
- Try the [classifying data practice questions](/resources/cambridge-igcse-mathematics-0580-classifying-statistical-data-practice/).
- See the whole topic in the [Statistics revision notes](/resources/igcse-mathematics-statistics-revision-notes/).

## Official syllabus

Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027 (Version 3), Cambridge International. Topic 9 Statistics, C9.1 and E9.1 Classifying statistical data.
