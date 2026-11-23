---
title: "IB DP Computer Science (DP Computer Science): Data Preprocessing for Machine Learning (HL)"
resourceType: "study-guides"
subject: "computer-science"
level: ["ib"]
topic: "A.4 -- Machine learning"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Computer Science"]
syllabusSeries: "First assessment 2027"
order: 1.41
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-a"
    subtopic: "ib-dp-computer-science-a-4"
description: "HL study guide to data preprocessing in IB DP Computer Science A.4: cleaning, missing values, outliers, scaling, encoding and splitting data, with calculations."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-18: Written from the public subject brief and the A4.2 label (Data preprocessing, HL only); the exact learning outcomes were not available, so please check the techniques named against the full DP Computer Science guide."
publishedDate: 2026-11-18
featured: false
---

**This unit covers A4.2 Data preprocessing, a section of A.4 Machine learning that the guide marks HL
only.** The [A.4 Machine learning study guide](/resources/ib-dp-computer-science-a-4/)
explains training data, features and labels. Preprocessing is the work done on that data **before**
training, and it often decides whether a model succeeds: a model can only learn from what it is
given.

> **Scope of this page.** The section number and its HL status come from the full DP Computer Science
> guide (first assessment 2027). Its individual statements and the techniques it names were not
> available when this page was written, so check your school's copy.

## Why preprocessing matters

Real data is messy. A spreadsheet of patient records may have blank cells, a weight typed in grams
instead of kilograms, the same patient entered twice, and "Male", "M" and "male" in one column. A
learning algorithm treats all of this as genuine pattern. The result is a model that learns errors,
is biased towards some groups or simply fails to train. "Garbage in, garbage out" is the short
version.

Preprocessing usually covers four jobs: **cleaning** the data, **transforming** it into a form the
algorithm can use, **selecting** the features that matter, and **splitting** it for training and
testing.

## Cleaning the data

### Missing values

| Strategy | How | When suitable | Risk |
|---|---|---|---|
| Delete the record | Remove rows with missing values | Few rows affected, large data set | Lost data; bias if values are missing for a reason |
| Delete the feature | Remove a column that is mostly empty | Feature rarely recorded | Lose a possibly useful feature |
| Impute with mean or median | Fill gaps with the average of the known values | Numeric data | Reduces natural variation |
| Impute with mode | Fill with the most common value | Categorical data | Over-represents the commonest category |
| Flag as missing | Add a field showing the value was missing | Missingness itself may be informative | More features |

**Worked example: mean imputation.** Ages recorded for five students: 16, 17, *missing*, 19, 18.

```
Known values: 16 + 17 + 19 + 18 = 70
Mean of known values = 70 ÷ 4 = 17.5
Completed data: 16, 17, 17.5, 19, 18
```

Use the **median** instead when the data contains extreme values, because one very large value pulls
the mean upwards.

### Duplicates and inconsistencies

- **Duplicate records** make some examples count twice, so the model over-weights them. Remove exact
  and near-duplicates.
- **Inconsistent formats** ("M", "Male", "male"; dates as 03/04 and 4 March) must be standardised so
  that the same value is always represented the same way.
- **Invalid values** (an age of 240, a negative price) should be corrected if the true value is known,
  or treated as missing.

### Outliers

An **outlier** is a value far from the rest of the data. It may be an **error** (a typing mistake) or
a **genuine** rare case (a very tall person, a fraudulent transaction). Errors should be corrected or
removed. Genuine outliers may be exactly what the model needs to learn: in fraud detection, the rare
unusual transactions are the point. Deciding which is which needs knowledge of the context, not just
a rule.

## Transforming the data

### Feature scaling

Features measured on very different scales can distort learning. In a house-price model, floor area
might range from 50 to 200 square metres while the number of bedrooms ranges from 1 to 5. Algorithms
that compare distances between examples would let floor area dominate simply because its numbers are
bigger.

**Min-max scaling** maps every value into the range 0 to 1:

```
scaled = (x − min) ÷ (max − min)
```

**Worked example.** Floor areas: 50, 80, 120, 200 m².

```
min = 50, max = 200, max − min = 150
50  → (50 − 50)  ÷ 150 = 0
80  → (80 − 50)  ÷ 150 = 0.2
120 → (120 − 50) ÷ 150 = 0.467 (3 s.f.)
200 → (200 − 50) ÷ 150 = 1
```

**Standardisation** is an alternative: subtract the mean and divide by the standard deviation, so each
feature has a mean of 0 and a standard deviation of 1.

Note that "normalisation" in machine learning often means this kind of scaling. It is unrelated to
**database normalisation** in A.3, which removes redundancy between tables. Say which one you mean.

### Encoding categorical data

Most algorithms need numbers. A categorical feature such as colour (red, green, blue) can be:

- **Label encoded:** red = 0, green = 1, blue = 2. Compact, but it implies an order (blue > red) that
  does not exist, which can mislead the model. Suitable for genuinely ordered categories, such as
  small, medium, large.
- **One-hot encoded:** one binary column per category. Red becomes (1, 0, 0), green (0, 1, 0), blue
  (0, 0, 1). No false order, but many categories create many columns.

## Selecting features

Not every column helps. **Feature selection** keeps the features that are relevant to the prediction
and removes those that are irrelevant, duplicated (two columns measuring the same thing) or that
would leak the answer (a "loan repaid" column when predicting whether a loan will be repaid). Fewer,
better features make training faster and reduce **overfitting**, where a model learns noise in the
training data rather than a general pattern.

Feature selection also has an ethical side. Removing a sensitive feature such as ethnicity does not
guarantee a fair model if another feature, such as postcode, is strongly linked to it. This connects
preprocessing to the bias issues in the A.4 study guide.

## Splitting the data

Data is divided so the model is judged on examples it has not seen:

- **Training set:** used to learn the model's parameters (often the largest share).
- **Validation set:** used while developing to compare settings and detect overfitting.
- **Test set:** used once at the end to estimate performance on new data.

Two rules matter. **Split before** calculating values such as the mean for imputation or the minimum
and maximum for scaling, and calculate them from the training set only; otherwise information from
the test set leaks into training and the test result looks better than it should. And make sure each
set **represents** the whole population: if 95% of examples are "not fraud", a random split could put
almost no fraud cases in the test set.

## Worked example: preprocessing plan for a case study

**Scenario.** A school wants to predict which students may need extra support, using attendance (%),
average homework score (out of 100), year group (7 to 13), and a free-text teacher comment. Some
attendance values are blank; year group is stored as "Y7", "7" or "Year 7".

1. **Standardise** year group to a single number (7 to 13).
2. **Missing attendance:** impute with the median of the training set, and add a "missing" flag, since
   unrecorded attendance might itself be meaningful.
3. **Scale** attendance and homework score with min-max scaling so neither dominates.
4. **Free text:** either exclude it, or convert it into features (for example, the presence of key
   words), noting that it is harder to process consistently.
5. **Split** the data into training, validation and test sets, checking each contains students from
   every year group.
6. **Check for bias:** confirm that the training data covers all groups of students fairly before
   the model is used for decisions about real students.

## Common mistakes

- **Deleting every row with a missing value** without considering how much data, and which groups,
  are lost.
- **Removing all outliers automatically.** Some are the rare cases the model must learn.
- **Label encoding unordered categories**, which invents an order.
- **Scaling using the whole data set** before splitting, which leaks test information.
- **Confusing ML normalisation (scaling) with database normalisation.**

## Exam technique for the command words

- **Describe** a technique: what is done to the data and the reason.
- **Calculate** a scaled or imputed value: write the formula, substitute, give the answer to a sensible
  number of significant figures.
- **Explain** why preprocessing is needed in a scenario: point to the specific problem in the data
  and its effect on the model.
- **Evaluate** a preprocessing choice: benefit, what may be lost or distorted, and a conclusion.

## Practise and revise

- [Data preprocessing revision notes](/resources/ib-dp-computer-science-2014-dp-computer-science-2027-a4-data-preprocessing-revision-notes/)
- [Data preprocessing practice questions](/resources/ib-dp-computer-science-2014-dp-computer-science-2027-a4-data-preprocessing-practice/)
- [A.4 Machine learning revision notes](/resources/ib-dp-computer-science-a-4-revision-notes/)

## Source

International Baccalaureate Organization, *Diploma Programme Subject Brief, Sciences: Computer
science, first assessment 2027* (© 2024). The complete subject guide is available through the IB
Programme Resource Centre.
