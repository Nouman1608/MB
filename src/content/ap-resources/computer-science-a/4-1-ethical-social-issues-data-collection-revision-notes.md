---
resourceId: "mb-ap-csa-4.1-revision-notes"
title: "Ethical and Social Issues Around Data Collection: Revision Notes (Computer Science A 4.1)"
description: "One-page recap of data privacy, algorithmic bias, bias from data collection methods, data quality problems and choosing an appropriate data set for a question."
course: "computer-science-a"
unit: 4
topics: ["4.1"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csa-4.1-study-guide"]
learningObjectives:
  - "Explain the risks to privacy from collecting and storing personal data and what programmers can do about them"
  - "Define algorithmic bias and explain how biased or unrepresentative data can produce it"
  - "Judge a data collection method for the bias it may introduce before drawing conclusions"
  - "Explain how incomplete or inaccurate data can make a program work incorrectly, and trace an example"
  - "Decide whether a data set is appropriate for a particular question"
skills: ["5", "1"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-4.1-study-guide", "mb-ap-csa-4.1-practice", "mb-ap-csa-4.1-checklist"]
next: "mb-ap-csa-4.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a"]
keyPoints:
  - "Collecting and storing personal data puts personal privacy at risk; programmers should safeguard the personal privacy of the user."
  - "Algorithmic bias means systemic and repeated errors in a program that create unfair outcomes for a specific group of users."
  - "Before drawing conclusions, ask how the data set was collected: the method can introduce bias, because some people or cases may be left out or over-represented."
  - "Incomplete or inaccurate data can make a program work incorrectly or inefficiently."
  - "A data set built to answer one question may not answer a different question or apply to a different group."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

These notes recap Topic 4.1. For worked examples, read the [study guide](/advanced-course-resources/computer-science-a/4-1-ethical-social-issues-data-collection-study-guide/).

## Recap

- Using a computer puts **personal privacy at risk**. When developing programs, programmers should attempt to **safeguard users' personal privacy**.
- **Algorithmic bias** is **systemic and repeated errors** in a program that create **unfair outcomes for a specific group** of users.
- Be aware of the **data collection method** and its potential for **bias** before using data to extrapolate or draw conclusions.
- Some data sets are **incomplete or inaccurate**. Using them can make a program **work incorrectly or inefficiently**.
- A data set about one question or topic may **not be appropriate** for a different question or topic.

## Key relationships

| Issue | What to ask | Example consequence |
|---|---|---|
| Privacy | What personal data is collected, stored and shared? | A location history reveals where someone lives |
| Algorithmic bias | Who gets worse outcomes, repeatedly? | A tool works less well for a group the data barely included |
| Collection method | Who is missing or over-represented? | Voluntary online data leaves out people without devices |
| Data quality | Are values missing, wrong or special codes? | A code of -999 is averaged as a real reading |
| Fit to the question | Does the data describe the group the question is about? | Adult data used to answer a question about school students |

## Worked reminder

In the fictional bus example, riders aged 65 and over are 20% of all riders but 3% of the app data, so their share in the data is 3 / 20 = 0.15 of their true share. A program tuned on that data could repeatedly serve them worse: algorithmic bias from the collection method. In code, a sensor that treats -999.0 (no reading) as a real value gives an average of -318.67 for 20.5, -999.0 and 22.5, while a version that skips the code gives 21.5.

## Safeguards to name

- Collect only the data that is needed.
- Store it securely and not for longer than necessary.
- Say clearly what is collected and why.
- Check who the data represents before drawing conclusions.
- Handle missing or invalid values explicitly in the program.

## Mistakes to avoid

- Calling any bug algorithmic bias: it must be systemic, repeated and aimed at a specific group.
- Assuming a large data set must be fair.
- Naming a harm without saying who is affected and why.
- Forgetting to check what happens when every value is missing (a division by zero of the count).

## Quick self-check

1. Define algorithmic bias in one sentence. *Answer: systemic and repeated errors in a program that create unfair outcomes for a specific group of users.*
2. Give one way a collection method can cause bias. *Answer: for example, a voluntary online survey leaves out people without internet access.*
3. A data set records adults' heights. Is it suitable for a question about children's heights? *Answer: No; it relates to a different group.*
4. Name one safeguard for privacy. *Answer: for example, collect only the data the program needs.*
