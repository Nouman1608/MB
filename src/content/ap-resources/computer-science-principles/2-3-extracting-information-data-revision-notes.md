---
resourceId: "mb-ap-csp-2.3-revision-notes"
title: "Extracting Information from Data: Revision Notes (Computer Science Principles 2.3)"
description: "One-page recap of data versus information, metadata, data cleaning, correlation versus causation, bias, dataset size, and processes that extract information."
course: "computer-science-principles"
unit: 2
topics: ["2.3"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-2.3-study-guide"]
learningObjectives: 
  - "Recall the key ideas of extracting information from data without notes"
  - "Spot the common errors before making them"
skills: ["1", "4", "5"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-2.3-study-guide", "mb-ap-csp-2.3-practice", "mb-ap-csp-2.3-checklist"]
next: "mb-ap-csp-2.3-practice"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "Information is the collection of facts and patterns extracted from data; data give chances to find trends, connections and problems."
  - "A correlation found in data does not show a causal relationship; more research is needed."
  - "Metadata are data about data; changing or deleting them does not change the primary data."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "drafted"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/computer-science-principles/2-3-extracting-information-data-study-guide/).

## Recap

- **Data** are values; **information** is the facts and patterns extracted from data.
- **Metadata** are data about data (date, size, location). They help find, organise and manage data. Changing or deleting metadata does **not** change the primary data.
- **Cleaning** makes data uniform without changing their meaning.
- Challenges at **any size**: incomplete data, invalid data, combining sources, non-uniform entries.
- **Bias** comes from the type or source of data; **more data does not remove it**.
- **Correlation** does not mean **causation**; more research is needed.
- Processes: **transform** every element, **filter**, **combine or compare**, **visualise**.
- Very large datasets need **parallel systems**; **scalability** matters.

## Key relationships

| Idea | How to recognise it |
|---|---|
| Primary data | The thing itself (photo, song, number list) |
| Metadata | Facts about it (date, author, size) |
| Cleaning | Same meaning, one consistent format |
| Filtering | Keep only items that meet a condition |
| Transforming | Apply the same change to every item |
| Combining | Add, compare or merge data sources |
| Correlation | Two variables move together |
| Bias | Result distorted by who or what was included |

## Assumptions and conventions

- When asked about a conclusion, separate **what the data show** from **what they do not show**.
- Name the specific third factor or missing data when discussing causation.
- Bias and correlation questions often need a concrete next step: more varied data, or a combined source.

## Mistakes to avoid

1. Writing "causes" when the data show only a correlation.
2. Thinking metadata edits change the primary data.
3. Believing a larger sample from the same biased source fixes bias.
4. Cleaning in a way that changes meaning (merging different answers).
5. Forgetting to account for incomplete records.
6. Confusing filtering (keeping some items) with transforming (changing every item).

## Two quick worked examples

**1.** Songs have metadata fields artist, year and length. To list songs by one artist from 2020 onward, filter on two metadata fields; the audio data are never changed or opened.

**2.** Sales of umbrellas and sales of raincoats rise together in autumn. This is a correlation. It does not show that umbrellas cause raincoat sales; rainy weather is a likely third factor, and weather data would help test that.

## A revision routine

Make a small table of six records with a free-text field typed in different ways. Clean it, recount, and note whether the answer changed. Then write one sentence that says what a correlation in the table does show and one that says what it does not show. Finish by listing three challenges that exist at any data size.

## Quick self-check

1. A song file has the artist name stored with it. Primary data or metadata? *(Metadata; the song audio is the primary data.)*
2. Replacing "NY", "ny" and "New York" with one form is an example of what? *(Cleaning.)*
3. A survey of 5,000 people all from one club shows a strong preference. Does the large size remove bias? *(No; bias from the source remains.)*

Next: [practice questions](/advanced-course-resources/computer-science-principles/2-3-extracting-information-data-practice/).
