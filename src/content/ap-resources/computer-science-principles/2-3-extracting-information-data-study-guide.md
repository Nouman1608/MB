---
resourceId: "mb-ap-csp-2.3-study-guide"
title: "Extracting Information from Data: Study Guide (Computer Science Principles 2.3)"
description: "How information is extracted from data: metadata, cleaning, filtering, transforming, combining and visualising, why correlation is not causation, and why bias and size matter, with two worked examples."
course: "computer-science-principles"
unit: 2
topics: ["2.3"]
resourceType: "study-guide"
prerequisites: 
  - "Topic 2.1 (data stored as bits)"
  - "Reading tables and simple charts"
prerequisiteResources: ["mb-ap-csp-2.2-study-guide"]
learningObjectives: 
  - "Explain the difference between data and information, and why correlation does not show causation"
  - "Explain what metadata are and what changing or deleting them does and does not do"
  - "Describe challenges of processing data: cleaning, incomplete or invalid data, combining sources, bias and size"
  - "Describe processes that extract information from data: transforming, filtering, combining and visualising"
skills: ["1", "4", "5"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-2.3-revision-notes", "mb-ap-csp-2.3-practice", "mb-ap-csp-2.3-checklist"]
next: "mb-ap-csp-2.3-practice"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "Information is the collection of facts and patterns extracted from data; data give chances to find trends, connections and problems."
  - "A correlation found in data does not show a causal relationship; more research is needed."
  - "Metadata are data about data; changing or deleting them does not change the primary data."
  - "Data may need cleaning (making them uniform without changing their meaning); incomplete or invalid data and combining sources are challenges at any size."
  - "Bias comes from the type or source of data and is not removed by collecting more data."
faqs:
  - question: "What is the difference between data and information?"
    answer: "Data are raw values, such as a list of temperatures. Information is the facts and patterns extracted from data, such as the town gets warmer by about 4 degrees each month in spring."
  - question: "Does deleting metadata change the file itself?"
    answer: "No. Metadata are data about data, such as the date a photo was taken. Changes and deletions made to metadata do not change the primary data, here the picture."
  - question: "If two things move together, does one cause the other?"
    answer: "Not necessarily. A correlation can be caused by a third factor or be a coincidence. Further research is needed to understand the relationship."
  - question: "Can a larger dataset fix a biased sample?"
    answer: "No. Bias comes from the type or source of the data. Collecting more data from the same source repeats the same bias."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "drafted"
---

## From data to information

**Data** are recorded values: a column of temperatures, a list of search words, millions of clicks. **Information** is the collection of facts and patterns that we extract from data. A single reading of 14 degrees tells you little. A year of readings tells you the town's coldest month, how fast it warms in spring, and whether this year is unusual. Data give opportunities to find **trends**, make **connections** and address **problems**.

Programs help because they can process far more data, far faster, than a person can. Programs are used in an **iterative and interactive** way: you filter, look at a chart, change the question and filter again, gradually gaining insight.

## Metadata: data about data

**Metadata** are data about other data. A photograph is the **primary data**; the date it was taken, the size of the file and the place where it was taken are metadata. Metadata are used for **finding, organising and managing** information. A music app finds all songs by one artist because each file has an "artist" metadata field. Metadata also increase the effective use of a dataset by giving extra context, and they let data be **structured and organised**.

An important point: **changes and deletions made to metadata do not change the primary data.** If you edit the "date" of a photo, the picture itself is unchanged. If you delete a photo's location tag, the picture is the same, but the *information about* it is gone.

<figure>
<svg viewBox="0 0 640 230" role="img" aria-labelledby="meta-title meta-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="meta-title">Primary data and its metadata</title>
<desc id="meta-desc">A large box on the left labelled primary data: the photograph itself. A box on the right labelled metadata lists date taken, file size, location and camera. A double-headed arrow joins the two boxes. Below, a note says editing or deleting metadata does not change the photograph, but it changes what we can find and know about it.</desc>
<rect x="0" y="0" width="640" height="230" fill="#ffffff"/>
<g fill="none" stroke="#1d2b44" stroke-width="2">
<rect x="20" y="25" width="250" height="130" rx="8"/>
<rect x="380" y="25" width="240" height="130" rx="8" stroke-dasharray="6 4"/>
</g>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="272" y1="90" x2="378" y2="90"/><path d="M282 84 L270 90 L282 96"/><path d="M368 84 L380 90 L368 96"/>
</g>
<g fill="#1d2b44" font-size="14" text-anchor="middle">
<text x="145" y="55" font-weight="bold">Primary data</text>
<text x="145" y="85">the photograph itself</text>
<text x="145" y="105">(the pixels, stored as bits)</text>
<text x="500" y="55" font-weight="bold">Metadata</text>
<text x="500" y="82">date taken: 3 May</text>
<text x="500" y="102">file size: 2 MB</text>
<text x="500" y="122">location: lakeside</text>
<text x="500" y="142">camera: model X</text>
<text x="320" y="190">Editing or deleting metadata does not change the photograph,</text>
<text x="320" y="210">but it changes what we can find and know about it.</text>
</g>
</svg>
<figcaption>Figure 1. Metadata describe the primary data. They help us find and organise data; changing them does not change the primary data.</figcaption>
</figure>

## Challenges when processing data

Data sets pose challenges **whatever their size**.

- **Cleaning.** Data collected through an open field vary: one person types "NYC", another "New York", another "new york". **Cleaning** makes the data uniform **without changing their meaning**, for example by replacing all equivalent spellings and capitalisations with one form.
- **Incomplete or invalid data.** Records with missing values, or values that cannot be right (an age of 250), must be handled, usually by flagging, correcting or removing them.
- **Combining data sources.** One source often does not hold everything needed to draw a conclusion. Combining sources (for example, sales and weather) can reveal more, but the formats must be made compatible.
- **Bias.** Problems of bias are often created by the **type or source** of the data collected. **Bias is not eliminated by simply collecting more data**: a million responses from one unrepresentative group is still unrepresentative.
- **Size.** The amount of information that can be extracted depends on the size of the dataset. Very large datasets are hard to process on a single computer and may need **parallel systems**, and the **scalability** of a system (its capacity to change in size to meet new demands) affects how data can be stored and processed.
- **Capability.** What you can process also depends on the abilities of the people and the tools available.

## Correlation is not causation

Digitally processed data may show **correlation**: two variables tend to rise and fall together. A correlation found in data does **not necessarily** indicate a **causal relationship**: one variable making the other change. A third factor may drive both, or the link may be coincidence. Additional research, often combining other data, is needed to understand the relationship.

## Processes that extract information

The course lists four kinds of process on data sets:

1. **Transforming** every element: for example, doubling every number in a list, or adding a parent's email to every student record.
2. **Filtering**: keeping only the elements that meet a condition, such as the positive numbers in a list or the students who signed up for band.
3. **Combining or comparing**: adding up a list of numbers, or finding the student with the highest score.
4. **Visualising** the data in a chart, graph or other picture.

Search tools find information efficiently, data filtering systems help find patterns, and spreadsheets organise data and reveal trends. Tables, diagrams and text communicate the insight gained.

## Worked example 1: cleaning free-text survey data

**Scenario.** A fictional school asks students to type their favourite lunch. Eleven records are collected:

`Pizza`, `pizza`, `PIZZA`, `Pasta`, `pasta`, `Salad`, `pizza`, `Pasta`, `salad`, `Burger`, (blank)

**Task.** (a) Count each exact entry before cleaning and state the most common. (b) Clean the data. (c) Count again and compare.

**(a) Before cleaning.** Counting each exact string: `pizza` 2, `Pasta` 2, `Pizza` 1, `PIZZA` 1, `pasta` 1, `Salad` 1, `salad` 1, `Burger` 1, and one blank. A naive count says there is a **tie** between `pizza` and `Pasta` at 2 each, and shows 8 different answers plus a blank.

**(b) Clean.** Make the entries uniform without changing their meaning: convert all to lower case, so `Pizza`, `pizza` and `PIZZA` are all "pizza". Handle the **blank**: it is incomplete data, so it is excluded from the count (and noted).

**(c) After cleaning.** pizza: 1 + 2 + 1 = 4 (the entries `Pizza`, `pizza` twice, and `PIZZA`); pasta: 2 + 1 = 3; salad: 1 + 1 = 2; burger: 1. Total usable records: 4 + 3 + 2 + 1 = 10 of 11 (one blank).

**Compare.** Before cleaning, the data suggested a tie at 2 votes. After cleaning, **pizza is clearly the most common (4 of 10, or 40%)**. Cleaning changed the *answer* without changing what any student meant.

**Check.** The 10 cleaned records and the 1 excluded blank add to 11, so no record was lost without being accounted for. The cleaning did not merge "pasta" with "pizza": uniform spelling is not the same as changing meaning.

## Worked example 2: reading a correlation carefully

**Scenario.** A fictional seaside kiosk records, for four months, ice creams sold and the number of sunburn cases treated at the first-aid hut:

| Month | Ice creams sold | Sunburn cases |
|---|---|---|
| March | 200 | 5 |
| April | 350 | 9 |
| May | 600 | 18 |
| June | 900 | 30 |

**Task.** (a) Describe the pattern. (b) Can we conclude that ice cream causes sunburn? (c) What would you do next?

**(a) Pattern.** As ice cream sales rise from 200 to 900, sunburn cases rise from 5 to 30. Both increase every month. This is a **positive correlation**: the two move together.

**(b) Cause?** **No.** The data show only that they rise together. A plausible third factor is sunny weather, which brings more people to the beach, so both ice cream sales and time in the sun increase. Another possible concern is that the data come from **one kiosk over four months**, which is a small and limited source: more data of the same kind would not remove that bias.

**(c) Next steps.** **Combine data sources**: add hours of sunshine and visitor numbers for each month from a weather and a tourism source. Look at whether the correlation remains once sunshine is considered. Look at more months and more locations.

**Check.** The answer separates what the data *show* (they rise together) from what they do *not* show (that one causes the other), and proposes a concrete way to gain more insight.

## Searching by metadata: a short example

Metadata make large collections easy to search. A music library holds six songs, each with metadata:

| Song | Artist | Year | Length (minutes) |
|---|---|---|---|
| Sunrise | Ana Reyes | 2021 | 3.5 |
| Tide | Ben Ortiz | 2019 | 4.2 |
| Lantern | Ana Reyes | 2022 | 4.5 |
| Orbit | Ana Reyes | 2018 | 2.9 |
| Harbor | Ben Ortiz | 2023 | 3.1 |
| Ember | Ana Reyes | 2023 | 3.8 |

To find songs by Ana Reyes released in 2020 or later and shorter than 4 minutes, apply the three conditions to each row. Sunrise passes all three (2021, 3.5). Tide fails on artist. Lantern is by Ana and from 2022 but is 4.5 minutes, so it fails on length. Orbit is by Ana and short but is from 2018, so it fails on year. Harbor fails on artist. Ember passes (2023, 3.8). The result is **Sunrise and Ember**, two songs. Notice that the search never opened the audio, the primary data; it used only the metadata. That is what makes metadata so useful for finding, organising and managing information, and why a missing or wrong value in the metadata (a mistyped year, say) can hide a song from the search without changing the song itself.

## What exam questions ask about data

Questions about this topic tend to ask you to do one of four things: **name** a process (cleaning, filtering, combining), **say what a change does** (what happens to the picture when its date metadata is edited), **evaluate a claim** (does this correlation show a cause) or **suggest a next step** (which extra data would help). In every case, tie the answer to the details of the scenario.

## Common misconceptions

- **"If two things are correlated, one causes the other."** Correlation alone does not show causation.
- **"Deleting metadata deletes the file."** Metadata are separate; the primary data are unchanged.
- **"More data automatically removes bias."** Bias from the source of the data is not fixed by more of the same.
- **"Cleaning data means changing the results to what we want."** Cleaning makes data uniform without changing their meaning.
- **"Small datasets do not have problems."** Challenges such as incompleteness, invalid values and bias arise at any size.
- **"Data and information are the same."** Information is the facts and patterns extracted from data.
- **"A big enough computer solves any dataset."** Very large datasets may need parallel systems and scalable design.

## Where this leads

Next, [Using Programs with Data](/advanced-course-resources/computer-science-principles/2-4-using-programs-data-study-guide/) shows how programs perform the filtering, transforming and combining described here. The issue of biased data returns in Unit 5, [Computing Bias](/advanced-course-resources/computer-science-principles/5-3-computing-bias-study-guide/). Practise with the [practice questions](/advanced-course-resources/computer-science-principles/2-3-extracting-information-data-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-principles/2-3-extracting-information-data-revision-notes/), and check your skills on the [checklist](/advanced-course-resources/computer-science-principles/2-3-extracting-information-data-checklist/).
