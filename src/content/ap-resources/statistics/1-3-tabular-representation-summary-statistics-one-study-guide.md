---
resourceId: "mb-ap-stats-1.3-study-guide"
title: "Tabular Representation and Summary Statistics for One Categorical Variable: Study Guide (Statistics 1.3)"
description: "Learn to build frequency and relative frequency tables for one categorical variable, switch between counts, proportions, percentages and ratios, and use them to justify claims."
course: "statistics"
unit: 1
topics: ["1.3"]
resourceType: "study-guide"
prerequisites:
  - "Telling categorical and quantitative variables apart (Topic 1.2)"
  - "Writing a fraction as a decimal and as a percentage"
prerequisiteResources: ["mb-ap-stats-1.2-study-guide"]
learningObjectives:
  - "Build a frequency table from raw data for one categorical variable"
  - "Turn counts into a relative frequency table of proportions or percentages, and check that it adds to 1"
  - "Move between counts, proportions, percentages and ratios, and recover counts when the total is known"
  - "Use counts and relative frequencies to support or reject a claim about a categorical variable, in context"
skills: ["3", "4"]
studyMinutes: 35
difficulty: "foundation"
calculator: "four-function"
calculatorNote: "Only division and multiplication are needed. Give proportions to 3 decimal places, or percentages to 1 decimal place, unless they are exact."
related: ["mb-ap-stats-1.3-revision-notes", "mb-ap-stats-1.3-practice", "mb-ap-stats-1.3-checklist"]
next: "mb-ap-stats-1.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "A frequency table gives the count of individuals in each category; the counts add to n."
  - "A relative frequency table gives the proportion in each category: count ÷ n. The proportions add to 1 (100%)."
  - "Proportions, percentages, relative frequencies and ratios carry the same information in different forms."
  - "To get counts back from a relative frequency table you must know the total n."
  - "A claim must match the numbers: “most common” is not the same as “a majority” (more than 50%)."
faqs:
  - question: "Can I find the mean or median of a categorical variable?"
    answer: "No. Categories are labels, not measured numbers, so you cannot add them or average them. Even when categories have a natural order (Small, Medium, Large), the gaps between them are not measured amounts. Summarise a categorical variable with counts and proportions, and name the most common category."
  - question: "My percentages add to 99.9% or 100.1%. Have I made a mistake?"
    answer: "Probably not. Rounding each percentage separately can make the total a little off 100%. Check with the unrounded fractions, and say that the total differs because of rounding."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## What does a table of a categorical variable show?

A **categorical variable** puts each individual into a group, such as a type of transport, a blood group or a favourite sport. In Topic 1.2 you met the individuals (the **observational units**) and the variables measured on them. Now the question is: how do you summarise many answers at once?

For a categorical variable, the **distribution** tells you two things:

- which **categories** occur, and
- **how often** each one occurs.

A table is the simplest way to show this. Every individual must fall into **exactly one** category. Then the categories split the whole group into pieces, and those pieces add up to the whole.

## The data set used in this guide

A fictional school, Larkfield Academy, asked 25 students: "How do you usually travel to school?" Each student gave one answer. The observational units are the 25 students. The variable is **usual way of travelling to school**, which is categorical. The answers, in the order they were collected, are:

Car, Walk, Walk, Bicycle, Walk, Car, Walk, Bus, Bus, Bus, Walk, Walk, Bus, Train, Bus, Car, Car, Car, Bus, Bus, Bus, Bicycle, Bicycle, Walk, Bus

A list like this is hard to read. A table makes the pattern clear.

## Frequency tables

A **frequency table** lists each category and its **frequency**: the number of observational units in that category. Frequency is just another word for count.

To build one:

1. List every category that appears (and any that the question offered but nobody chose, with a count of 0).
2. Go through the raw data **once**, in order, and make a mark beside the category for each answer. Tick off each answer as you use it, so none is counted twice.
3. Count the marks for each category.
4. **Check:** the counts must add to n, the number of individuals.

For the Larkfield data:

| Travel method | Frequency (number of students) |
|---|---|
| Bus | 9 |
| Walk | 7 |
| Car | 5 |
| Bicycle | 3 |
| Train | 1 |
| **Total** | **25** |

Check: 9 + 7 + 5 + 3 + 1 = 25. Every student is counted once.

Listing the categories from the largest count to the smallest makes the table easier to read. Use the natural order instead if the categories have one (for example, "Never, Sometimes, Often").

## Relative frequency tables

A count on its own can mislead. Is 9 students a lot? That depends on how many were asked. A **relative frequency** answers this. It is the **proportion** of the observational units in a category:

**relative frequency = count in the category ÷ total number of individuals (n)**

A **relative frequency table** lists each category with its relative frequency. For Larkfield, n = 25:

| Travel method | Frequency | Relative frequency (proportion) | Percentage |
|---|---|---|---|
| Bus | 9 | 9 ÷ 25 = 0.36 | 36% |
| Walk | 7 | 7 ÷ 25 = 0.28 | 28% |
| Car | 5 | 5 ÷ 25 = 0.20 | 20% |
| Bicycle | 3 | 3 ÷ 25 = 0.12 | 12% |
| Train | 1 | 1 ÷ 25 = 0.04 | 4% |
| **Total** | **25** | **1.00** | **100%** |

Two facts always hold:

- Each relative frequency is between 0 and 1.
- The relative frequencies add to **1** (or 100%), because every individual is in exactly one category.

You can also add relative frequencies for a group of categories. The proportion of students who walk or cycle is 0.28 + 0.12 = **0.40**. The proportion who do **not** travel by car is 1 − 0.20 = **0.80**. Using "1 minus" like this is often quicker than adding many categories.

## One piece of information, four forms

Percentages, relative frequencies, proportions and ratios all give the **same information**. They are different ways of writing the same comparison of a part with the whole. Figure 1 follows the bus category through each form.

<figure>
<svg viewBox="0 0 640 260" role="img" aria-labelledby="forms-title forms-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="forms-title">Four ways to write the bus result for 25 Larkfield students</title>
<desc id="forms-desc">Three boxes in a row joined by arrows. The first box reads: count, 9 students out of n equals 25. An arrow labelled divide by 25 leads to the second box: relative frequency or proportion, 0.36. An arrow labelled multiply by 100 leads to the third box: percentage, 36 percent. Below, a wide box joined to the first box reads: ratio, 9 out of 25 travel by bus; 9 to 16 bus to not bus. A note at the bottom says all four forms give the same information, and to go back from a proportion to a count you need n.</desc>
<rect x="0" y="0" width="640" height="260" fill="#ffffff"/>
<g fill="none" stroke="#1d2b44" stroke-width="2">
<rect x="20" y="30" width="170" height="80" rx="8"/>
<rect x="245" y="30" width="170" height="80" rx="8"/>
<rect x="470" y="30" width="150" height="80" rx="8"/>
<rect x="20" y="150" width="395" height="60" rx="8" stroke-dasharray="6 4"/>
</g>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="190" y1="70" x2="237" y2="70"/><path d="M229 64 L239 70 L229 76"/>
<line x1="415" y1="70" x2="462" y2="70"/><path d="M454 64 L464 70 L454 76"/>
<line x1="105" y1="110" x2="105" y2="142"/><path d="M99 134 L105 144 L111 134"/>
</g>
<g fill="#1d2b44" text-anchor="middle">
<text x="105" y="55" font-size="13">Count (frequency)</text>
<text x="105" y="82" font-size="20" font-weight="bold">9 students</text>
<text x="105" y="102" font-size="12">out of n = 25</text>
<text x="330" y="55" font-size="13">Relative frequency</text>
<text x="330" y="82" font-size="20" font-weight="bold">0.36</text>
<text x="330" y="102" font-size="12">(a proportion)</text>
<text x="545" y="55" font-size="13">Percentage</text>
<text x="545" y="82" font-size="20" font-weight="bold">36%</text>
<text x="213" y="60" font-size="12">÷ 25</text>
<text x="438" y="60" font-size="12">× 100</text>
<text x="217" y="173" font-size="13">Ratio</text>
<text x="217" y="195" font-size="14">9 out of 25 travel by bus · bus : not bus = 9 : 16</text>
<text x="320" y="245" font-size="12">Same information in every form. To go back from 0.36 or 36% to a count, you need n.</text>
</g>
</svg>
<figcaption>Figure 1. The bus result for the 25 fictional Larkfield students written as a count, a proportion, a percentage and a ratio. The arrows show the operation that turns one form into the next.</figcaption>
</figure>

A note on ratios. "9 out of 25" compares a part with the whole, so it is a proportion written in words. "9 : 16" compares the part with the **rest** (bus with not bus). Both describe the same split: from 9 : 16 you get 9 out of 9 + 16 = 25. Be clear which kind of ratio you mean.

A ratio can also compare two categories. Bus to car is 9 : 5, so for every 5 students who come by car, 9 come by bus. The same ratio comes from the proportions: 0.36 : 0.20 = 9 : 5.

## Rounding and totals that are not exactly 1

When proportions are not exact decimals, you must round. Then the rounded values may not add to exactly 1. Suppose 21 students vote for three class trips and each trip gets 7 votes. Each share is 7 ÷ 21 = 33.3% (to 1 decimal place). The total is 3 × 33.3% = 99.9%, not 100%. The table is still correct. Say "the total is not 100% because of rounding".

A total far from 1, such as 0.85 or 1.30, is a warning sign. It means a category is missing, a count is wrong, or some individuals were counted in more than one category.

## Summarising a categorical variable

For a quantitative variable you will use the mean, median and standard deviation (Topic 1.7). Those make no sense for categories. You cannot add "Bus" and "Walk", or put them in numerical order. Instead, summarise a categorical variable with:

- the **count** and **proportion** in each category (the tables above);
- the **most common category**: here, Bus (36%);
- the proportion in a **group of categories** that matters for the question: here, 40% walk or cycle.

Watch out for categories written as numbers, such as postcodes or shirt numbers. They are still labels. A "mean shirt number" has no meaning.

## Using counts and relative frequencies to justify claims

A claim about a categorical variable should quote a count or a proportion and say what it means in context. Check the words of the claim carefully.

| Words in a claim | What the numbers must show |
|---|---|
| "a majority", "more than half" | proportion greater than 0.5 |
| "the most common", "the most popular" | the largest count or proportion (it can be less than 0.5) |
| "more than a quarter", "fewer than 1 in 10" | compare the proportion with 0.25 or 0.10 |
| "twice as many as" | one count (or proportion) at least 2 times the other |

For Larkfield: "Bus is the most common way to travel" is supported, because 9 is the largest count. "A majority of students travel by bus" is **not** supported, because 0.36 < 0.5.

Two more points:

- **Name the group.** These are 25 students at one school, asked on one occasion. The proportion 0.36 is a **statistic** describing this sample (Topic 1.2). It is not certain that 36% of all students at the school travel by bus.
- **Compare proportions, not counts, when totals differ.** A count only makes sense next to its total.

## Worked example 1: building both tables from raw data

**Question.** Use the 25 Larkfield answers to (a) build a frequency table, (b) build a relative frequency table, and (c) find the proportion of students who use public transport (bus or train). Interpret your answer to (c).

**(a)** Go through the list once, marking each answer beside its category. The counts are Bus 9, Walk 7, Car 5, Bicycle 3 and Train 1. **Check:** 9 + 7 + 5 + 3 + 1 = 25 = n.

**(b)** Divide each count by n = 25:

1. Bus: 9 ÷ 25 = 0.36
2. Walk: 7 ÷ 25 = 0.28
3. Car: 5 ÷ 25 = 0.20
4. Bicycle: 3 ÷ 25 = 0.12
5. Train: 1 ÷ 25 = 0.04

**Check:** 0.36 + 0.28 + 0.20 + 0.12 + 0.04 = 1.00.

**(c)** Public transport = bus or train. The categories do not overlap, so add: 0.36 + 0.04 = **0.40**. As a check with counts: (9 + 1) ÷ 25 = 10 ÷ 25 = 0.40.

**Interpretation.** 40% of the 25 Larkfield students surveyed usually travel to school by public transport (bus or train). That is 2 in every 5 of these students.

## Worked example 2: working backwards and judging claims

**Question.** The fictional Harwick Public Library asked 240 visitors the main reason for their visit. Each visitor chose one reason. The library published only this relative frequency table:

| Main reason for visit | Percentage of visitors |
|---|---|
| Borrow or return books | 42.5% |
| Study | 27.5% |
| Use the computers | 15% |
| Attend an event | 10% |
| Other | 5% |

(a) Find the number of visitors in each category.
(b) For each claim, say whether the data support it, with a reason.
- Claim 1: "Most visitors come to borrow or return books."
- Claim 2: "Studying is more than twice as common as using the computers."
- Claim 3: "About 1 in 20 visitors come for some other reason."
- Claim 4: "More than half of the visitors came for a reason other than borrowing or returning books."

**(a)** First check the table: 42.5 + 27.5 + 15 + 10 + 5 = 100%. Then count = proportion × n:

1. Borrow or return books: 0.425 × 240 = 102 visitors
2. Study: 0.275 × 240 = 66 visitors
3. Use the computers: 0.15 × 240 = 36 visitors
4. Attend an event: 0.10 × 240 = 24 visitors
5. Other: 0.05 × 240 = 12 visitors

**Check:** 102 + 66 + 36 + 24 + 12 = 240. All counts are whole numbers, as they must be.

**(b)**

- **Claim 1 depends on the meaning of "most".** Borrowing or returning books is the **most common** reason (42.5%, the largest share). But it is **not a majority**: 42.5% < 50%, so fewer than half of the visitors (102 of 240) came for this reason. If "most" means "more than half", the claim is not supported.
- **Claim 2 is not supported.** Twice the computer users would be 2 × 36 = 72 visitors, but only 66 came to study. The ratio is 66 : 36, about 1.83 : 1. Studying is more common, but not more than twice as common.
- **Claim 3 is supported.** 12 ÷ 240 = 0.05 = 1/20, so exactly 1 in 20 of these visitors chose "Other".
- **Claim 4 is supported.** 1 − 0.425 = 0.575, so 57.5% (138 of 240 visitors) came for a reason other than borrowing or returning books, and 0.575 > 0.5.

**Check.** All four answers refer to these 240 visitors. The table describes this sample, not every library user.

## Common misconceptions

- **"Relative frequency is the count divided by 100."** Divide by the total n, not by 100. Only when n = 100 are the two the same.
- **"The most common category must be a majority."** With three or more categories, the largest share can be well below 50%. Here, bus is most common at only 36%.
- **"A relative frequency table tells me how many people were asked."** It does not. 50% could be 1 of 2 or 500 of 1,000. You need n to recover counts.
- **"A bigger count always means a bigger share."** Not when the totals are different. Compare proportions.
- **"Rounded percentages that add to 99.9% are wrong."** Small differences from 100% come from rounding. Large ones point to a real error.
- **"Every survey with several answers gives one categorical variable."** If people can choose more than one answer, the counts add to more than n and the proportions add to more than 1. That is not a relative frequency table of one categorical variable.
- **"I can find the average category."** Means and medians need numbers. Use counts, proportions and the most common category.
- **Quoting a number with no context.** "0.36" is incomplete. Say "36% of the 25 students surveyed usually travel by bus".

## Where this leads

In Topic 1.4 you will show the same counts and proportions as bar charts and pie charts, and compare categorical data sets. In Unit 2, two-way tables extend these ideas to two categorical variables at once. Try the [practice questions](/advanced-course-resources/statistics/1-3-tabular-representation-summary-statistics-one-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/1-3-tabular-representation-summary-statistics-one-revision-notes/) and the [checklist](/advanced-course-resources/statistics/1-3-tabular-representation-summary-statistics-one-checklist/) to consolidate. When you are ready, move on to the [Topic 1.4 study guide](/advanced-course-resources/statistics/1-4-graphical-representations-one-categorical-variable-study-guide/). If you need a refresher on variable types, go back to the [Topic 1.2 study guide](/advanced-course-resources/statistics/1-2-variables-study-guide/).
