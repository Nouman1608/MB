---
title: "Cambridge IGCSE Mathematics 0580: Classifying and interpreting statistical data -- Study Guide"
seoTitle: "IGCSE Maths 0580 Classifying and Interpreting Data Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Classifying and interpreting statistical data"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 9
syllabusTopics:
  - qualification: "igcse"
    topic: "statistics-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "statistics-cambridge-igcse-maths"
    subtopic: "classifying-statistical-data-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "statistics-cambridge-igcse-maths"
    subtopic: "interpreting-statistical-data-cambridge-igcse-maths"
description: "Study guide for Cambridge IGCSE Maths 0580 sections 9.1 and 9.2: tally and two-way tables, reading data, comparing data sets and the limits of conclusions."
author: "marlbridge-academic-team"
publishedDate: 2026-10-04
featured: false
---

This study guide covers **Cambridge IGCSE Mathematics 0580**, aligned to the Cambridge IGCSE Mathematics 0580 syllabus for exams in 2025, 2026 and 2027. It teaches syllabus sections **C9.1/E9.1 Classifying statistical data** and **C9.2/E9.2 Interpreting statistical data** in depth. Both sections appear in the Core and the Extended content with the same learning outcomes. The one difference is in the notes to 9.2: Core compares data sets using averages and **ranges**, while Extended compares averages and **measures of spread**, which brings in the interquartile range. That part is labelled "Extended only" below.

For the whole of Topic 9, see the [Statistics study guide](/resources/igcse-mathematics-statistics/). The worked examples here are new and do not repeat the ones on the existing Topic 9 pages linked at the end.

## What this unit covers

| Syllabus section | What you must be able to do | Tier |
|---|---|---|
| C9.1 / E9.1 | Classify and tabulate statistical data, e.g. tally tables, two-way tables | Core and Extended |
| C9.2 / E9.2 (1) | Read, interpret and draw inferences from tables and statistical diagrams | Core and Extended |
| C9.2 / E9.2 (2) | Compare sets of data using tables, graphs and statistical measures (averages and range) | Core and Extended |
| E9.2 (2) | Compare data sets using averages and measures of spread, such as the interquartile range | Extended only |
| C9.2 / E9.2 (3) | Appreciate restrictions on drawing conclusions from given data | Core and Extended |

Core candidates sit Paper 1 (non-calculator) and Paper 3 (calculator); Extended candidates sit Paper 2 (non-calculator) and Paper 4 (calculator). Practise the arithmetic in this guide by hand.

## 9.1 Classifying statistical data

To **classify** data is to sort it into types and into categories or classes. To **tabulate** it is to put it into a table so that you can count and compare.

### Types of data

- **Qualitative (categorical) data** are words or labels: favourite fruit, eye colour, method of travel.
- **Quantitative (numerical) data** are numbers. They split into two kinds:
  - **Discrete** data are counted and take separate values, usually whole numbers: the number of books read, shoe size, goals scored.
  - **Continuous** data are measured and can take any value in a range: time, mass, height, temperature.

Quick test: 17.35 seconds makes sense, so time is continuous; 2.5 goals does not, so goals are discrete.

### Tally tables and frequency tables

A **tally table** records each item with a stroke as you go through raw data. Strokes are grouped in fives, with the fifth stroke drawn across the first four, so the total is easy to count. The **frequency** is the number of tallies in each row.

**Worked example 1.** 24 students were asked how many books they read last month:

```
2  0  3  1  2  2  4  1  0  2  3  1
2  5  1  2  0  3  2  1  4  2  1  3
```

Work through the list once, in order, crossing off each value as you tally it.

```
Books read   Tally        Frequency
0            |||              3
1            ||||/ |          6
2            ||||/ |||        8
3            ||||             4
4            ||               2
5            |                1
             Total           24
```

Here ||||/ stands for a gate of five. Check that the frequencies add up to 24, the number of students.

Now the table can be used. The number of students who read at least 3 books is 4 + 2 + 1 = 7, which is 7/24 of the class.

### Grouping continuous data into classes

Continuous data are tabulated in **class intervals**. The classes must not overlap and must not leave gaps, so inequality signs are used: 10 ≤ t < 15 means "10 up to but not including 15".

**Worked example 2.** The times, in minutes, taken by 20 people to finish a puzzle were:

```
12.4  18.0  23.7  15.0   9.8  21.2  17.5  14.9  26.3  19.9
20.0  11.6  16.2  22.8  13.1  18.7  25.0  17.0  10.0  24.6
```

Using classes of width 5 starting at 5:

```
Time t (minutes)   Frequency
5  ≤ t < 10            1
10 ≤ t < 15            5
15 ≤ t < 20            7
20 ≤ t < 25            5
25 ≤ t < 30            2
Total                 20
```

Watch the boundary values. 15.0 goes into 15 ≤ t < 20, not 10 ≤ t < 15, because the first class does not include 15. In the same way 10.0, 20.0 and 25.0 each go in the class that **starts** at that value. 14.9 stays in 10 ≤ t < 15.

Once data are grouped, individual values are lost: 7 people took 15 to 20 minutes, but the table cannot say how many took exactly 17.

### Two-way tables

A **two-way table** classifies data by two features at once, one along the rows and one along the columns. Every row and every column has a total, and the grand total in the corner must agree both ways.

**Worked example 3.** A sports club has 80 members. Each member is a junior or an adult, and each chooses one activity: tennis, swimming or gym.

- 32 members are juniors.
- 18 juniors swim.
- 25% of the adults use the gym.
- 26 members play tennis, and 10 of them are juniors.

Complete a two-way table.

```
Step 1  Adults = 80 − 32 = 48
Step 2  Adults in the gym = 25% of 48 = 48 ÷ 4 = 12
Step 3  Juniors in the gym = 32 − 18 − 10 = 4
Step 4  Adults playing tennis = 26 − 10 = 16
Step 5  Adults swimming = 48 − 16 − 12 = 20
```

```
           Tennis   Swimming   Gym   Total
Juniors      10        18        4     32
Adults       16        20       12     48
Total        26        38       16     80
```

Check: 26 + 38 + 16 = 80 and 32 + 48 = 80.

Fill any cell where the other values in its row or column are known, then repeat. "25% of the adults" refers to the adult total, not the grand total.

## 9.2 Interpreting statistical data

### Reading tables and diagrams, and drawing inferences

To **read** is to take a value from a table or diagram; to **interpret** is to say what it means in context; to **draw an inference** is to make a statement the data support but do not state directly.

Using the table in worked example 3:

- The fraction of swimmers who are juniors is 18/38 = **9/19**. The denominator is the swimming total, because the question is about swimmers.
- The percentage of all members who are adults using the gym is 12/80 × 100 = **15%**. The denominator is now the grand total.
- An inference: swimming is the most popular activity for both juniors and adults, since 18 is the largest junior value and 20 is the largest adult value.

Before you read any diagram, check the title, the axis labels, the scale and any key.

**Worked example 4.** This dual bar chart shows the number of cups of coffee sold by two cafés on five days. Each █ represents 5 cups.

```
       Café A  ████████            
Mon    Café B  ███████████        
       Café A  ███████            
Tue    Café B  ██████████          
       Café A  ██████████          
Wed    Café B  █████████          
       Café A  █████████          
Thu    Café B  ████████████        
       Café A  ██████████████      
Fri    Café B  █████████████       
```

(a) Read the values. Café A: 40, 35, 50, 45, 70. Café B: 55, 50, 45, 60, 65. Each value is the number of blocks × 5.

(b) Total sales. Café A: 40 + 35 + 50 + 45 + 70 = 240 cups. Café B: 55 + 50 + 45 + 60 + 65 = 275 cups.

(c) Interpret. Café B sold more on Monday, Tuesday and Thursday. Café A sold more on Wednesday and Friday. The statement "Café B sold more every day" is false.

(d) Infer. Friday was Café A's busiest day, with 70/240 = 7/24 of its weekly sales. Café A's sales vary more from day to day than Café B's: A goes from 35 to 70, B from 45 to 65.

### Comparing data sets

A good comparison has **two parts**: one about an **average** and one about **spread**. Each part should name the data sets, say which is higher, and say what that means in context.

**Worked example 5.** Two classes did the same quiz, marked out of 30. Each class had 11 students.

```
Class P: 14  18  21   9  17  22  19  15  20  16  27
Class Q: 24  13  28   7  21  25  15  27  12  28  20
```

**Core comparison: mean and range.**

```
Class P: sum = 198,  mean = 198 ÷ 11 = 18
         range = 27 − 9 = 18
Class Q: sum = 220,  mean = 220 ÷ 11 = 20
         range = 28 − 7 = 21
```

- On average, Class Q did better, because its mean (20) is higher than Class P's mean (18).
- Class P's marks were more consistent, because its range (18) is smaller than Class Q's range (21).

**Extended only: median and interquartile range.** First put each list in order.

```
Class P: 9  14  15  16  17  18  19  20  21  22  27
Class Q: 7  12  13  15  20  21  24  25  27  28  28
```

With 11 values, the median is the 6th value, the lower quartile is the 3rd value and the upper quartile is the 9th value.

```
Class P: median = 18,  LQ = 15,  UQ = 21,  IQR = 21 − 15 = 6
Class Q: median = 21,  LQ = 13,  UQ = 27,  IQR = 27 − 13 = 14
```

- Class Q has the higher median (21 against 18), so its typical mark was higher.
- Class P has the smaller interquartile range (6 against 14), so the middle half of its marks were much closer together.

The IQR shows the difference in consistency far more clearly than the range, which uses only the two extreme marks.

### Restrictions on drawing conclusions

Data can support a conclusion only so far. Before you agree with a claim, ask these questions.

- **Is the sample big enough?** A survey of 10 people gives weak evidence about a town of 50 000.
- **Is the sample representative?** People asked at a gym will not represent everyone's exercise habits. People asked at 10 a.m. on a weekday leave out most full-time workers.
- **Is the time period long enough?** Five days of sales may include a holiday.
- **Does the data measure what the claim is about?** Coffee sales are not the same as total sales or number of customers.
- **Has information been lost?** Grouped data hide individual values. An average on its own hides spread.
- **Does a link show a cause?** Two quantities rising together does not prove that one causes the other.

**Worked example 6.** Using worked example 4, Sam says: "Café A is less popular than Café B, so Café A will sell less coffee next month." Give two reasons why this conclusion may not be reliable.

1. The data cover only one set of five days, which may not be typical. Next month could include holidays or different weather.
2. The data show coffee sales only. Café A may sell more food or other drinks, so "less popular" is not shown.

## Common errors

- Missing or double-counting values in a tally. Check the frequency total equals the number of data items.
- Putting a boundary value such as 15.0 in the wrong class. With 10 ≤ t < 15 and 15 ≤ t < 20, the value 15 belongs only in the second class.
- Taking a percentage of the grand total when the question says "of the adults" or "of the juniors".
- Using the wrong denominator for a fraction from a two-way table, such as 18/80 instead of 18/38 for "the fraction of swimmers who are juniors".
- Reading a bar chart or pictogram without checking the scale or key, so that every value is out by a factor such as 5.
- Comparing only one feature of two data sets, or giving numbers without saying what they mean in context.
- Comparing a median from one set with a mean from the other. Compare like with like.
- Accepting a conclusion from a small or biased sample without comment.

## Next steps

- [Statistics study guide](/resources/igcse-mathematics-statistics/)
- [Statistics revision notes](/resources/igcse-mathematics-statistics-revision-notes/)
- [Statistics practice questions](/resources/igcse-mathematics-statistics-practice/)
- [Statistics and Probability (Extended) practice questions](/resources/igcse-mathematics-statistics-and-probability-extended-practice/)
- Check where you stand with the [Core diagnostic](/practice/0580/diagnostic/core/) or the [Extended diagnostic](/practice/0580/diagnostic/extended/)
- All Cambridge IGCSE Mathematics resources: [course hub](/boards/cambridge/igcse/mathematics/)
- Tick off every learning outcome with the [printable checklist](/checklists/cambridge/igcse/mathematics/)

## Official syllabus

Cambridge International, *Cambridge IGCSE Mathematics 0580 syllabus for exams in 2025, 2026 and 2027* (Version 3), Subject content, Topic 9 Statistics: C9.1/E9.1 Classifying statistical data and C9.2/E9.2 Interpreting statistical data.
