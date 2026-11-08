---
resourceId: "mb-ap-csp-5.3-practice"
title: "Computing Bias: Practice Questions (Computer Science Principles 5.3)"
description: "Ten original practice questions on bias in data and algorithms, proxies, group-by-group results and reducing bias, with full explanations and suggested rubrics."
course: "computer-science-principles"
unit: 5
topics: ["5.3"]
resourceType: "practice-questions"
prerequisites: 
  - "Topic 2.3 (data, bias in data sources)"
prerequisiteResources: ["mb-ap-csp-5.3-study-guide"]
learningObjectives: 
  - "Apply computing bias to unfamiliar situations"
  - "Explain your reasoning in full sentences, as constructed responses require"
skills: ["4", "5", "6"]
studyMinutes: 50
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-5.3-study-guide", "mb-ap-csp-5.3-revision-notes", "mb-ap-csp-5.3-checklist"]
next: "mb-ap-csp-5.3-checklist"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "Original questions with fictional scenarios and Marlbridge-rendered pseudocode where code appears."
  - "Every answer explains why each wrong option is wrong."
  - "Rubrics are a suggested Marlbridge rubric, not official scoring."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "drafted"
---

These are **original Marlbridge practice questions**, not past exam questions. All systems, groups and data are fictional. The rubrics are a suggested Marlbridge rubric, not an official scoring guideline. Answers should be balanced and non-political. No calculator is needed.

## Question 1 (multiple choice · foundation)

Which statement best describes how a computing innovation can show bias?

- (A) It reflects biases in the data it uses or in the algorithms written for it.
- (B) It always gives random results.
- (C) It cannot be biased because computers have no opinions.
- (D) It only shows bias when a user types it in.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).**

- (B) bias is a systematic pattern, not randomness.
- (C) computers inherit bias from data and designs.
- (D) bias can occur without any user input.
</details>

## Question 2 (multiple choice · foundation)

A fictional speech-recognition app was trained almost entirely on recordings from adults. It often fails to understand young children. This is best described as

- (A) bias in the data used to build the system
- (B) overflow
- (C) lossless compression
- (D) a syntax error

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Children's voices were missing from the training data.

- (B), (C) and (D) are unrelated.
</details>

## Question 3 (multiple choice · core)

A system is right on 72 of 80 tests for one group and 18 of 40 tests for another. What are the accuracies for the two groups?

- (A) 90% and 45%
- (B) 72% and 18%
- (C) 80% and 40%
- (D) 90% and 55%

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** 72 ÷ 80 = 0.90, and 18 ÷ 40 = 0.45.

- (B) uses the counts as percentages.
- (C) uses the number of tests.
- (D) mis-calculates the second group.
</details>

## Question 4 (multiple choice · core)

A fictional app recommends jobs using a scoring formula that gives extra points for "years in a single job". Which concern is most reasonable?

- (A) The formula may favour people whose circumstances allowed long, uninterrupted careers and disadvantage others who had career breaks.
- (B) The formula must be correct, because it uses numbers.
- (C) The app will run slowly.
- (D) The formula is a syntax error.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** A feature can favour groups for reasons unrelated to ability.

- (B) numbers do not guarantee fairness.
- (C) and (D) are unrelated.
</details>

## Question 5 (multiple choice, select two · core)

Which **two** actions could help reduce bias in a fictional recognition system?

- (A) Testing the system separately on each group and comparing results
- (B) Training on a more representative set of examples
- (C) Reporting only the overall accuracy
- (D) Removing all testing to save time

<details>
<summary>Answer and explanation</summary>

**Answer: (A) and (B).**

- (C) hides group differences.
- (D) removes the checks that find bias.
</details>

## Question 6 (multiple choice · core)

A company says: "Our hiring program is fair because the code never uses gender or ethnicity." Which reply is best?

- (A) Correct, because the code never names these.
- (B) The program could still be biased, for example through other features that act as proxies or through biased training data.
- (C) The program must be biased because it uses code.
- (D) The program is fair because it is fast.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).**

- (A) proxies and data can produce unequal results.
- (C) code alone does not imply bias.
- (D) speed is unrelated.
</details>

## Question 7 (multiple choice · stretch)

Read this passage written by Marlbridge.

*"A town tested a fictional app that predicts which streets need extra winter gritting. It was trained on past complaint calls. Most complaints came from streets whose residents have fast internet and phone credit. The app predicts these streets need the most gritting."*

Which concern is **best supported**?

- (A) The training data may reflect who complains rather than where gritting is needed, so some streets could be overlooked.
- (B) The app must be unbiased because it used real calls.
- (C) The app cannot work with more data.
- (D) Gritting is unnecessary.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The data record who contacted the town, not the true need.

- (B) real data can still be unrepresentative.
- (C) and (D) are not supported by the passage.
</details>

## Question 8 (constructed response · core)

A fictional recognition system is tested: Group X has 400 tests with 360 correct; Group Y has 100 tests with 70 correct.

(a) Calculate the accuracy for each group and overall. (3 points)

(b) Explain why the overall figure could mislead. (1 point)

(c) Suggest **one** action to reduce the difference. (1 point)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (5 points).**

| Point | Award when the response… |
|---|---|
| 1 | gives Group X: 360 ÷ 400 = 90% |
| 2 | gives Group Y: 70 ÷ 100 = 70% |
| 3 | gives overall: (360 + 70) ÷ 500 = 430 ÷ 500 = 86% |
| 4 | explains that the overall figure is dominated by the larger group and hides the 20 percentage-point gap |
| 5 | suggests a valid action (collect more representative training data for Group Y, test and report by group) |

**Sample response.** (a) X 90%, Y 70%, overall 86%. (b) Group X makes up 80% of the tests, so the overall figure looks close to X's and hides the lower accuracy for Y. (c) Collect more varied training examples for Group Y and report results for each group.
</details>

## Question 9 (constructed response · core)

A fictional school uses a program to suggest which students should join an advanced class, using this rule:

```text
IF (testScore >= 80 AND attendance >= 95)
{
  DISPLAY("recommend")
}
```

(`attendance` is the percentage of days present.) Students who care for family members or have health conditions often miss days.

(a) Explain how the attendance condition could produce unequal results. (2 points)

(b) Explain what the school could do to check whether the rule is fair. (2 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (4 points).**

| Point | Award when the response… |
|---|---|
| 1 | says attendance can be affected by circumstances unrelated to ability |
| 2 | says the rule could exclude capable students in those circumstances (a proxy effect) |
| 3 | suggests comparing the recommendations for different groups of students |
| 4 | suggests reviewing the rule (is attendance needed? would another measure work?), or allowing human review of exceptions |

**Sample response.** (a) Students who miss days for reasons they cannot control would be excluded even if their test scores are high. (b) The school could compare how many students from different circumstances are recommended, and reconsider whether attendance is needed, or let a teacher review the students who are close to the limit.
</details>

## Question 10 (constructed response · stretch)

A fictional bank trains a program on ten years of its loan decisions to recommend whether to approve new applications.

(a) Explain how the program could repeat unfair patterns in the past decisions. (2 points)

(b) Describe **two** different actions the bank could take to reduce the risk. (2 points)

(c) Explain why more past decisions alone would not fix the problem. (1 point)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (5 points).**

| Point | Award when the response… |
|---|---|
| 1 | says the training data record past human decisions, which may have been unfair |
| 2 | says the program learns the patterns and may repeat them |
| 3 | gives a first action (test results by group; review features for proxies) |
| 4 | gives a second, different action (human review of decisions; remove or adjust biased features; use more representative data) |
| 5 | says more data from the same source repeats the same pattern, so bias is not removed by quantity |

**Sample response.** (a) The data show who was approved in the past; if the past decisions were unfair, the program learns that pattern and repeats it. (b) The bank can compare approval rates by group and ask staff to review rejected applications near the boundary. (c) Ten more years of the same kind of decisions would contain the same pattern.
</details>

## How did you do?

Questions 1 to 7 are multiple choice; 8 to 10 are written. If you lost marks on Question 8, check that you computed each group before the overall figure. Re-read "Detecting bias: look group by group" in the [study guide](/advanced-course-resources/computer-science-principles/5-3-computing-bias-study-guide/) if needed, then use the [checklist](/advanced-course-resources/computer-science-principles/5-3-computing-bias-checklist/).
