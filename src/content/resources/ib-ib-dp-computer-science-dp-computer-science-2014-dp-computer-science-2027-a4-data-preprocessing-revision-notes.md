---
title: "IB DP Computer Science (DP Computer Science): Data Preprocessing for Machine Learning (HL) -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed HL notes on data preprocessing for IB DP Computer Science A.4: cleaning, imputation, outliers, scaling, encoding, splitting and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-18: Written from the public subject brief and the A4.2 label (Data preprocessing, HL only); the exact learning outcomes were not available, so please check the techniques named against the full DP Computer Science guide."
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **A4.2 Data preprocessing**, an HL-only section of A.4 Machine learning (IB DP
Computer Science, first assessment 2027). For explanations and worked calculations, use the
[data preprocessing study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a4-data-preprocessing/);
for training data, features and labels, see the
[A.4 Machine learning revision notes](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-4-revision-notes/).

## Key terms

| Term | Meaning |
|---|---|
| Data preprocessing | Preparing raw data before it is used to train a model |
| Data cleaning | Correcting or removing missing, duplicate, inconsistent or invalid data |
| Imputation | Filling in missing values with estimates |
| Outlier | A value far from most of the data; may be an error or a genuine rare case |
| Feature scaling | Putting numeric features on comparable ranges |
| Min-max scaling | (x − min) ÷ (max − min), giving values from 0 to 1 |
| Standardisation | (x − mean) ÷ standard deviation, giving mean 0 and standard deviation 1 |
| Label encoding | Giving each category a number |
| One-hot encoding | One binary column per category |
| Feature selection | Keeping only relevant, non-redundant features |
| Data leakage | Information from outside the training data (for example the test set or the answer) entering training |
| Overfitting | Learning noise in the training data so the model generalises poorly |
| Training / validation / test set | Data to fit the model / tune it / measure final performance |

## The four jobs

1. **Clean:** missing values, duplicates, inconsistent formats, invalid values, outliers.
2. **Transform:** scale numeric features; encode categorical ones.
3. **Select:** keep relevant features; remove redundant or leaking ones.
4. **Split:** training, validation, test, each representative.

## Missing values: choose the strategy

| Situation | Strategy |
|---|---|
| Few rows affected, plenty of data | Delete those rows |
| Column mostly empty | Delete the feature |
| Numeric, no extreme values | Impute mean |
| Numeric, with extreme values | Impute median |
| Categorical | Impute mode |
| Missingness may be meaningful | Impute and add a "missing" flag |

## Calculations to practise

**Mean imputation:** 16, 17, ?, 19, 18 → (16 + 17 + 19 + 18) ÷ 4 = 17.5.

**Median imputation:** 12, 14, ?, 15, 90 → known values in order 12, 14, 15, 90; median =
(14 + 15) ÷ 2 = 14.5. (The mean, 32.75, is distorted by 90.)

**Min-max scaling:** 50, 80, 120, 200 → 0, 0.2, 0.467, 1 (min 50, range 150).

## Encoding at a glance

| Method | Example (red, green, blue) | Use when |
|---|---|---|
| Label | 0, 1, 2 | Categories have a real order (small, medium, large) |
| One-hot | (1,0,0), (0,1,0), (0,0,1) | No natural order |

## Outliers: error or signal?

- **Error** (typing mistake, faulty sensor) → correct or remove.
- **Genuine rare case** (fraud, rare disease) → keep; it may be what the model must detect.
- Decide using knowledge of the context.

## Feature selection checklist

- **Relevant?** Keep features that plausibly relate to the prediction.
- **Redundant?** Drop one of two columns that measure the same thing (height in cm and in inches).
- **Leaking?** Drop any feature recorded after the outcome or derived from it.
- **Available in use?** Keep only features that will exist when the model makes real predictions.

## Splitting rules

- Split **first**; compute means, medians, minima and maxima from the **training set only**.
- Each set should **represent** all classes and groups; watch out for rare classes.
- Use the test set **once**, at the end.

## Links to ethics

- Deleting rows can remove under-represented groups and introduce **bias**.
- Removing a sensitive feature does not ensure fairness if a **proxy** (such as postcode) remains.
- Poor preprocessing produces unreliable decisions about real people.

## Exam traps

- ML "normalisation" means **scaling**; database normalisation (A.3) is different.
- Do not remove all outliers by rule.
- Label encoding unordered categories **invents an order**.
- Scaling before splitting causes **leakage**.
- Always tie a technique to the specific data problem in the scenario.

## Self-test

1. Why does a model trained on uncleaned data perform badly?
2. Give two ways to handle missing values.
3. When is the median better than the mean for imputation?
4. Impute the missing value in 8, 10, ?, 12 using the mean.
5. Scale the value 30 in the data set 10, 30, 60 using min-max scaling.
6. Why are features scaled?
7. What problem does label encoding cause for the categories cat, dog, rabbit?
8. One-hot encode the value "dog" for the categories cat, dog, rabbit.
9. Give one reason not to remove an outlier.
10. What is data leakage?
11. State the purpose of the test set.
12. How could deleting rows with missing data introduce bias?

**Answers:**
1. It learns errors, duplicates and inconsistencies as if they were real patterns.
2. Any two: delete the rows; delete the feature; impute mean, median or mode; add a missing flag.
3. When the data contains extreme values, which pull the mean towards them.
4. (8 + 10 + 12) ÷ 3 = 10.
5. (30 − 10) ÷ (60 − 10) = 20 ÷ 50 = 0.4.
6. So that features with large numeric ranges do not dominate those with small ranges.
7. It implies an order (rabbit > dog > cat) that does not exist, which can mislead the model.
8. (0, 1, 0).
9. It may be a genuine rare case, such as fraud, that the model needs to learn.
10. Information from outside the training data, such as the test set or the answer itself, influencing
    training, so performance looks better than it really is.
11. To give a final, unbiased estimate of how well the model performs on unseen data.
12. If values are more often missing for one group, deleting those rows leaves that group
    under-represented in the training data.

## Related pages

- [Data preprocessing practice questions](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a4-data-preprocessing-practice/)
- [Normalisation to third normal form revision notes](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a3-normalisation-revision-notes/)

## Official syllabus

International Baccalaureate Organization, *Diploma Programme Subject Brief -- Sciences: Computer
science*, first assessment 2027, © 2024.
