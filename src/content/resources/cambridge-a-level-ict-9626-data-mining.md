---
title: "Cambridge A Level Information Technology (9626): Data mining"
seoTitle: "A Level IT 9626 Data Mining: Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Topic 12 – IT in society"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 12.2
syllabusTopics:
  - qualification: "a-level"
    topic: "it-in-society"
  - qualification: "a-level"
    topic: "it-in-society"
    subtopic: "data-mining"
description: "Cambridge 9626 IT section 12.2 study guide: the six stages of the data mining process, how and why it is used, worked patterns, benefits and privacy concerns."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide teaches **section 12.2 Data mining** of Topic 12 IT in society in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is A Level content, examined in Paper 3 Advanced Theory. The [IT in society revision notes](/resources/a-level-cambridge-ict-it-in-society-revision-notes/) summarise the whole topic; this page goes deeper on data mining. Use it with the [data mining practice questions](/resources/cambridge-a-level-ict-9626-data-mining-practice/).

## What section 12.2 covers

| Syllabus strand | What you must be able to do |
|---|---|
| The process | Describe what data mining is and why it is carried out |
| The six stages | Describe business understanding, data understanding, data preparation, data modelling, evaluation and deployment |
| Uses | Explain how and why it is used in national security, surveillance, businesses, scientific research, healthcare, and social and economic trends |
| Impact | Give advantages and disadvantages for individuals and organisations, including having all information in one place and ethical and privacy concerns |

**Data mining** is the process of searching large sets of data, often held in a data warehouse, to find patterns, links and trends that were not obvious before. The aim is to turn raw data into useful knowledge that supports decisions. It differs from ordinary querying. A query answers a question you already have ("how many customers bought tea last week?"). Data mining discovers questions and answers you did not know to ask ("customers who buy tea in a week with rain also buy biscuits").

## The six stages

The stages form a cycle. Findings at a later stage often send the team back to an earlier one.

### 1 Business understanding

Decide what the organisation wants to achieve and whether data mining can help. Write the objective as a clear question with a measurable target, for example "find which customers are likely to leave in the next three months, so that 20% fewer leave". Decide the budget, the time and the success criteria.

### 2 Data understanding

Identify and collect the data that might help, and explore it. Check where it comes from, how much there is, which fields it has, and its quality. Look for obvious problems such as missing values, impossible dates or duplicates. Early charts and summary figures often show whether the data can answer the question.

### 3 Data preparation

Prepare the final set to be mined. This is usually the longest stage. Tasks include:

- **Cleaning**: removing duplicates, correcting errors, handling missing values.
- **Selecting** the relevant records and fields.
- **Transforming** data, such as converting dates to one format or grouping ages into bands.
- **Integrating** data from several sources into one table.

Poor preparation gives poor results, however clever the later stages.

### 4 Data modelling

Choose and run mining techniques on the prepared data to build a model. Common techniques are:

- **Classification**: place records into known groups, such as "likely to repay" or "likely to default".
- **Clustering**: find natural groups of similar records, without groups being named in advance.
- **Association**: find items that occur together, such as products bought in the same basket.
- **Prediction (regression)**: estimate a value, such as next month's sales.
- **Anomaly detection**: find records that differ from the normal pattern, such as an unusual card payment.

The data is often split. A **training set** is used to build the model. A **test set**, which the model has not seen, is used to check it.

### 5 Evaluation

Check whether the model is accurate and whether it meets the aims set in stage 1. Test it on new data. Do the findings make sense? Is the model biased? If not good enough, return to an earlier stage.

### 6 Deployment

Put the results to use. This might be a report for managers, a score added to each customer record, or software that runs automatically, such as a fraud alert. After deployment, the model is monitored, because patterns change over time.

## Worked examples

**Worked example 1: association in a supermarket.** A shop looks at 200 transactions. 60 contain bread. 40 of those also contain butter.

- **Support** for "bread and butter" together = 40 ÷ 200 = 0.20 (20% of all baskets).
- **Confidence** that a bread buyer also buys butter = 40 ÷ 60 = 0.667 (about 67%).

The shop could place butter near the bread, or offer a joint discount. This is a pattern found in the data modelling stage and used in deployment.

**Worked example 2: training and test sets.** A bank has 1,000 past loans and splits them 70:30.

1. Training set = 0.70 × 1,000 = 700 loans, used to build the model.
2. Test set = 1,000 − 700 = 300 loans.
3. The model predicts correctly for 270 of the 300 test loans, so accuracy = 270 ÷ 300 = 0.90, or 90%.

Testing on data that was not used to build the model gives a fairer measure than testing on the same data, which would make the result look better than it is.

**Worked example 3: anomaly detection.** A card company flags a payment that is 12 times larger than the customer's usual spending, in a different country, 10 minutes after another payment at home. No single fact proves fraud, but together the pattern is unusual, so the system alerts the bank.

## How and why data mining is used

| Area | How it is used | Why |
|---|---|---|
| National security | Searching communications and travel records for patterns linked to threats | To detect and prevent attacks |
| Surveillance | Analysing CCTV, number plate and online activity data to identify people or events | To monitor behaviour and detect crime |
| Businesses | Customer buying patterns, targeted offers, fraud detection, stock planning | To raise sales, reduce losses and understand customers |
| Scientific research | Searching large experiment, genetic or weather datasets for relationships | To find results that people would take too long to find |
| Healthcare | Linking symptoms, treatments and outcomes; spotting disease outbreaks | To improve diagnosis and treatment, and plan resources |
| Social and economic trends | Studying census, spending and survey data | To plan housing, transport, education and policy |

## Advantages and disadvantages

**Advantages to organisations**
- Finds patterns that humans would miss in very large datasets.
- Supports better, evidence-based decisions.
- **All information is in one place**, usually a data warehouse, so staff can see the full picture and do not need to search many systems.
- Can raise profit by targeting offers and spotting fraud.

**Advantages to individuals**
- More relevant offers and recommendations.
- Fraud on their accounts can be detected quickly.
- Better healthcare and public services planned from the data.

**Disadvantages to organisations**
- Software, storage and skilled staff are costly.
- Poor data gives wrong or misleading conclusions.
- Holding so much personal data in one place is a target for hackers, and a breach can damage reputation and bring legal penalties.

**Disadvantages to individuals: ethical and privacy concerns**
- Personal data may be used without the person fully understanding or agreeing.
- Data collected for one purpose may be reused for another.
- Profiling can lead to unfair decisions, for example a person refused credit or insurance because of the group the model puts them in.
- Individuals can be identified from combined data even when names are removed.
- Constant surveillance may deter lawful activity.
- Data stored in one place can be stolen, leading to identity theft.

Organisations reduce these risks by collecting only the data they need, anonymising it, gaining informed consent, restricting access, encrypting stored data and following data protection law.

## Data mining compared with other analysis

| Feature | Ordinary query or report | Data mining |
|---|---|---|
| Starting point | A question you already have | A large set of data and a goal |
| Result | The exact answer to that question | Patterns, groups or predictions not known before |
| Size of data | Any | Usually very large |
| Example | Total sales last month | Customers likely to stop buying next month |

## Common mistakes

- Describing data mining as simply "searching a database". It looks for unknown patterns across large data.
- Listing the six stages in the wrong order, or leaving out business understanding.
- Saying data preparation is a small step. It usually takes the most time.
- Writing "it invades privacy" with no explanation of how.
- Giving the advantages of data mining for a business without naming the area (fraud detection, targeted marketing).
- Treating the process as a straight line. Evaluation can send the team back to earlier stages.

## Exam technique

- **Describe a stage**: say what is done and why it matters for the stages after it.
- **Explain how it is used** in a given area: name the data and the pattern, and the decision it supports.
- **Discuss**: give advantages and disadvantages for both individuals and organisations, and reach a conclusion.
- For the ethical and privacy point, name a specific harm, such as profiling or reuse of data without consent.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 12 IT in society, section 12.2 Data mining.
