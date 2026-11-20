---
title: "OxfordAQA A-Level Computer Science (9645): Big data -- Practice Questions"
seoTitle: "OxfordAQA 9645 Big Data Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 15 – Databases"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 15.2
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "databases-9645"
  - qualification: "a-level"
    topic: "databases-9645"
    subtopic: "big-data-oxfordaqa-alevel-cs"
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.15.2 Big data: the three Vs, distributed processing, map-reduce, fact-based models and graph schemas."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.15.2 Big data** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: volume, velocity and variety, distributed processing with functional programming and map-reduce, the fact-based model, and graph schemas.

Related pages: [big data study guide](/resources/oxfordaqa-a-level-computer-science-9645-big-data/) ·
[big data revision notes](/resources/oxfordaqa-a-level-computer-science-9645-big-data-revision-notes/)

## Section A

**1.** State what is meant by the **velocity** of Big Data. **[1]**

**2.** State what is meant by the **variety** of Big Data and give one example. **[2]**

**3.** Explain why a relational database is not an appropriate way to store most Big Data. **[2]**

## Section B

**4.** A weather network receives 800 sensor readings every second, and each reading is 120 bytes.

**(a)** Calculate the number of readings per hour. **[1]**
**(b)** Calculate the amount of data received per day, in gigabytes (1 gigabyte is 1,000,000,000 bytes) to 2 decimal places. **[2]**
**(c)** Identify which of the three Vs this calculation illustrates, and explain your choice. **[2]**

**5.** A company holds 7.5 terabytes of data. Each of its servers can store 2 terabytes. Calculate the minimum number of servers needed and state why processing on one server would not be possible. **[2]**

**6.** Explain **three** features of functional programming that make it easier to write correct and efficient distributed code. **[3]**

**7.** Three servers each hold a share of the votes in a poll. The partial counts produced by the map stage on each server are:

| Server | Partial counts |
|---|---|
| 1 | A 40, B 25 |
| 2 | A 10, C 35 |
| 3 | A 20, B 15, C 5 |

**(a)** Describe what the reduce stage does here. **[1]**
**(b)** Calculate the final total for each option and the overall number of votes. **[3]**

**8.** Three servers each hold temperature readings. The map stage on each server produces the sum and the number of readings: server 1 (120, 4), server 2 (90, 3), server 3 (140, 5).

**(a)** Calculate the average temperature of all the readings by combining the partial results. **[3]**
**(b)** A student calculates each server's average and then averages those three averages. State the student's answer to 2 decimal places and explain why it differs from the correct answer. **[3]**

**9.** Explain how map and reduce work together to process a data set that is spread across several servers. **[4]**

**10.** The following facts are stored about students in a school.

- Lena is a student.
- Lena is in Form 10B.
- Lena was born on 2 April 2011.
- Form 10B is taught by Mr Okoye.

**(a)** State what is meant by a fact in a fact-based model. **[1]**
**(b)** Describe how these facts would be drawn in a graph schema, identifying the nodes, the properties and the edges. **[5]**

## Answers

**1.** Data arrives as a stream and a response is needed within milliseconds to seconds **[1]**.

**2.** The data comes in many different forms **[1]**, such as structured data, unstructured text, images or video (any one example) **[1]**. **[2]**

**3.** A relational database requires data to fit a fixed row-and-column format **[1]**; most Big Data is unstructured and lacks this structure, so it cannot be stored in tables with fixed fields **[1]**. **[2]**

**4. (a)** 800 × 3,600 = **2,880,000** readings **[1]**
**(b)** 800 × 120 × 86,400 **[1]** = 8,294,400,000 bytes, which is **8.29 GB** **[1]**. **[2]**
**(c)** Velocity **[1]**, because the data arrives continuously as a stream at a high rate **[1]**. (Volume is also acceptable if the reason refers to the very large amount of data accumulating each day.) **[2]**

**5.** 7.5 / 2 = 3.75, so at least **4 servers** **[1]**. A single server can store only 2 TB, so the data does not fit on one server and the processing has to be distributed across several machines **[1]**. **[2]**

**6.** Award **[1]** each: **immutable data structures**, so data is never changed and machines cannot interfere with each other's data; **statelessness**, so a function's result depends only on its inputs and any machine can run it; **higher-order functions** (such as map and fold) that can combine the results of processing on different servers **[1] [1] [1]**. **[3]**

**7. (a)** It combines (adds) the partial counts for each option from all the servers **[1]**.
**(b)** A = 40 + 10 + 20 = **70** **[1]**; B = 25 + 15 = **40** **[1]**; C = 35 + 5 = **40**, and the overall total is 70 + 40 + 40 = **150** **[1]**. **[3]**

**8. (a)** Total of sums = 120 + 90 + 140 = 350 **[1]**; total number of readings = 4 + 3 + 5 = 12 **[1]**; average = 350 / 12 = **29.17** **[1]**. **[3]**
**(b)** The server averages are 30, 30 and 28 **[1]**; their mean is 87 / 3 = **29.33** **[1]**. It differs because the servers hold different numbers of readings, so each average should carry a different weight; combining sums and counts is correct **[1]**. **[3]**

**9.** The map stage applies the same function to the data held on each server **[1]**, at the same time and independently, producing partial results as key-value pairs **[1]**. The reduce stage then combines the partial results for each key, for example by adding them **[1]** to produce the final answer for the whole data set **[1]**. **[4]**

**10. (a)** A single piece of information **[1]**.
**(b)** Nodes (ovals): Student Lena **[1]** and Form 10B **[1]** (and Teacher Mr Okoye **[1]** if shown as a node). Property: a rectangle "Born: 2 April 2011" joined to the Lena oval by a dashed line **[1]**. Edges: a solid line from Lena to Form 10B labelled "member of" (or similar), and a solid line from Form 10B to Mr Okoye labelled "taught by" **[1]**. Award up to **[5]**.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.15.2 Big data.
