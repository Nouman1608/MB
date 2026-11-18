---
title: "IB DP Computer Science (DP Computer Science): Data Preprocessing for Machine Learning (HL) -- Practice Questions"
resourceType: "practice-questions"
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
description: "Twelve original HL questions on data preprocessing for IB DP Computer Science A.4: cleaning, imputation, scaling, encoding and splitting, with full answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-18: Written from the public subject brief and the A4.2 label (Data preprocessing, HL only); please check the questions and mark allocations against the full DP Computer Science guide."
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- the IB holds copyright in its own papers. Use these alongside
> the official past papers available through your school or the IB store.

These questions cover **A4.2 Data preprocessing** (HL only), in A.4 Machine learning. Related:
[data preprocessing study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a4-data-preprocessing/)
and [revision notes](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a4-data-preprocessing-revision-notes/).
All data in these questions is invented for practice.

## Section A

**1.** Define the term *data preprocessing*. **[1]**

**2.** Identify **two** problems that data cleaning addresses. **[2]**

**3.** A data set of exam scores is 62, 70, *missing*, 58, 75. Calculate the value that mean
imputation would insert. Show your working. **[2]**

**4.** Using min-max scaling, calculate the scaled value of 45 in the data set 20, 45, 70, 120. **[2]**

**5.** Outline why one-hot encoding is preferred to label encoding for the feature "country of
residence". **[2]**

**6.** State the purpose of the validation set. **[1]**

## Section B

**7.** A data set of monthly incomes contains these values (in an invented currency): 2100, 2300,
*missing*, 2200, 25,000.
**(a)** Calculate the mean and the median of the known values. **[2]**
**(b)** Explain which of these is the better value to impute. **[2]**

**8.** A bank is training a model to detect fraudulent card payments. A data scientist suggests
removing every payment more than three standard deviations from the mean amount, to "clean the data".
Evaluate this suggestion. **[4]**

**9.** A model predicting house prices uses floor area (40 to 300 m²) and number of bathrooms
(1 to 4). Explain why the features should be scaled before training a model that compares distances
between examples. **[3]**

**10.** A student scales the whole data set using its minimum and maximum, then splits it into training
and test sets.
**(a)** Explain the problem with this order of steps. **[2]**
**(b)** State the correct order. **[1]**

**11.** A hospital's data set records patients' smoking status as "Y", "yes", "Smoker", "N", "no" and
"Non-smoker", and includes a column "TreatmentGiven" that is recorded after diagnosis. The model is to
predict diagnosis.
**(a)** Describe the preprocessing needed for the smoking status column. **[2]**
**(b)** Explain why the TreatmentGiven column should be removed. **[2]**

**12.** A recruitment company trains a model on past hiring data to shortlist applicants. To make it
fair, it deletes the "gender" column. It also deletes every record with any missing value, which
removes 30% of applicants from part-time backgrounds. Discuss whether the preprocessing is likely to
produce a fair model. **[6]**

---

## Answers

**1.** Preparing raw data (cleaning, transforming, selecting and splitting it) before it is used to
train a machine learning model [1].

**2.** Any two, [1] each: missing values; duplicate records; inconsistent formats; invalid or
impossible values; erroneous outliers. Maximum 2.

**3.** (62 + 70 + 58 + 75) ÷ 4 = 265 ÷ 4 [1] = 66.25 [1].

**4.** (45 − 20) ÷ (120 − 20) = 25 ÷ 100 [1] = 0.25 [1].

**5.** Countries have no natural order, so label encoding (for example 0, 1, 2) would imply an order
or size that does not exist [1]; one-hot encoding gives each country its own binary column, so no
false order is introduced [1].

**6.** To compare model settings during development and detect overfitting, without using the test
set [1].

**7. (a)** Mean = (2100 + 2300 + 2200 + 25,000) ÷ 4 = 31,600 ÷ 4 = 7900 [1]. Median: in order 2100,
2200, 2300, 25,000, so median = (2200 + 2300) ÷ 2 = 2250 [1].
**(b)** The median (2250) [1], because the extreme value 25,000 pulls the mean far above every other
income, so the mean would be an unrealistic estimate [1].

**8.** Award up to 4:
- Removing extreme values can remove genuine errors, such as mistyped amounts, which would otherwise
  distort the model [1].
- But fraudulent payments are often unusual, so many of them may be among the extreme values [1].
- Removing them would deprive the model of the very examples it needs to learn to detect fraud [1].
- Conclusion: the suggestion is not appropriate; outliers should be checked individually and kept if
  genuine, with only confirmed errors corrected or removed [1].

**9.** Floor area has values in the hundreds while bathrooms range only from 1 to 4 [1]. When distances
between examples are calculated, differences in floor area would be much larger numbers and so would
dominate [1]. Scaling both features to a similar range (for example 0 to 1) lets each contribute
according to its actual importance [1].

**10. (a)** The minimum and maximum include test-set values [1], so information from the test set
leaks into the training data and the test result overestimates performance on new data [1].
**(b)** Split the data first, calculate the minimum and maximum from the training set only, then
scale both sets with those values [1].

**11. (a)** Standardise the inconsistent labels so each status has one value (for example "Y"/"yes"/
"Smoker" become smoker, the rest non-smoker) [1], then encode it as a number, such as 1 and 0 [1].
**(b)** TreatmentGiven is recorded after diagnosis, so it would not be available when the model is used
to predict a new diagnosis [1]; it effectively reveals the answer (data leakage), making the model
appear accurate in testing but fail in use [1].

**12.** Award up to 6:
- Deleting the gender column removes direct use of that feature [1].
- However, other features may act as proxies for gender (for example career breaks or part-time
  work), so the model could still learn gender-related patterns [1].
- If past hiring decisions were themselves biased, the labels carry that bias regardless of which
  columns are removed [1].
- Deleting records with missing values removes 30% of part-time applicants, so this group becomes
  under-represented in training [1].
- The model may then perform worse for, or unfairly reject, part-time applicants [1].
- Conclusion: the preprocessing is unlikely to produce a fair model; better options include imputation
  or missing flags, checking for proxies, and testing the model's results across groups [1].
Maximum 6.

---

## Where marks are usually lost

- Arithmetic slips: dividing by the total count including the missing value.
- Treating every outlier as an error.
- Explaining "why scale" without referring to the different ranges in the question.
- Discussing fairness only in terms of deleting a sensitive column.

## Frequently asked questions

**Do I need to calculate standard deviations?**
These questions only need means, medians and min-max scaling. Check the full guide for any further
calculation your school expects.

**Are these real IB questions?**
No. They are original practice questions written for revision.
