---
resourceId: "mb-ap-csp-5.3-study-guide"
title: "Computing Bias: Study Guide (Computer Science Principles 5.3)"
description: "How bias enters computing through data, algorithms and design choices, how to detect it by comparing results across groups, and how to reduce it, with two worked examples including a proxy rule."
course: "computer-science-principles"
unit: 5
topics: ["5.3"]
resourceType: "study-guide"
prerequisites: 
  - "Topic 2.3 (data, bias in data sources)"
  - "Topic 5.1 (beneficial and harmful effects)"
prerequisiteResources: ["mb-ap-csp-5.2-study-guide"]
learningObjectives: 
  - "Explain how computing innovations can reflect existing human biases through the data they use or the algorithms written into them"
  - "Explain that bias can be introduced at every level of software development"
  - "Calculate and compare results across groups to detect bias that an overall figure hides"
  - "Describe actions programmers can take to reduce bias in algorithms and data"
skills: ["4", "5", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-5.3-revision-notes", "mb-ap-csp-5.3-practice", "mb-ap-csp-5.3-checklist"]
next: "mb-ap-csp-5.3-practice"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "Computing innovations can reflect existing human biases because of biases written into algorithms or biases in the data they use."
  - "Biases can be embedded at all levels of software development: in the problem chosen, the data collected, the rules written and the way results are used."
  - "An overall result can hide poor performance for a smaller group, so results should be checked group by group."
  - "A rule that looks neutral can act as a proxy for a characteristic it does not name."
  - "Programmers should take action to reduce bias, for example with more representative data, testing across groups and review by varied people."
faqs:
  - question: "What is computing bias?"
    answer: "Computing innovations can reflect existing human biases, either because biases are written into the algorithms or because the data they use are biased. The effect can be unfair treatment of some groups."
  - question: "Can a program be biased if no one meant it to be?"
    answer: "Yes. Bias can come from unrepresentative data, from historical patterns in the data, or from rules that act as proxies, none of which need any intention to treat groups differently."
  - question: "Is collecting more data enough to remove bias?"
    answer: "No. Bias is often created by the type or source of data. More data from the same source repeats the same bias. The data need to be representative, and results need to be checked across groups."
  - question: "What can programmers do about bias?"
    answer: "They should take action to reduce it: use more representative data, test the program on different groups, review rules for proxies, include varied perspectives in the team, and monitor results after release."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Computers are not automatically neutral

It is tempting to think a program must be fair because it follows rules and has no feelings. But programs are written by people, trained or tested on data that people collected, and used by people in settings with their own history. So **computing innovations can reflect existing human biases**. The course names two routes:

- **Biases written into the algorithms**: the rules, scoring formulas or decisions the developers chose.
- **Biases in the data** used by the innovation: who is included, who is missing, and what past decisions the data record.

And **biases can be embedded at all levels of software development**: in choosing the problem to solve, deciding what to measure, collecting data, writing and testing the algorithm, and deciding how results are used. **Programmers should take action to reduce bias in algorithms** used for computing innovations, as a way of combating existing human biases.

Here **bias** means a systematic unfairness in how a system treats people or groups. This topic is not about opinions or politics; it is about checking carefully whether a computing system treats groups equally and what can be done if it does not.

## How biased data cause biased results

Many computing systems use data to learn patterns or to set rules. If the data are unrepresentative, the results will be too.

- **Missing groups.** If a face-recognition system is tested mainly on photographs of one kind of face, it may work worse on others.
- **Historical patterns.** If a hiring system learns from past hiring decisions, and those past decisions favoured some applicants unfairly, the system may learn to repeat them.
- **Measurement choices.** If a system measures something that is easy to count (for example, number of posts) instead of what it claims to measure (for example, quality of contribution), groups who differ in the easy measure may be treated differently.

As Topic 2.3 noted, **bias is not eliminated by simply collecting more data** if the data keep coming from the same unrepresentative source.

## How algorithms can introduce bias

An algorithm can treat groups differently even when it never mentions a group. A **proxy** is a feature that is closely linked to a characteristic. Suppose a shortlisting rule uses "distance from the office". If people who live far away are more likely to belong to a particular community, the rule can disadvantage that community without ever naming it.

Other sources include a poorly chosen threshold, a scoring formula that rewards what one group is more likely to have, and a program that works well in the conditions where it was tested but not elsewhere.

## Detecting bias: look group by group

A single overall number can hide a problem. Imagine a system that is right 96% of the time for a large group and 60% of the time for a small group. The overall figure can still look excellent, because the large group dominates. To detect bias:

1. Divide the results into **groups** that matter for the use.
2. Compute the **result for each group separately**.
3. **Compare** them and ask whether the differences are large enough to matter.

<figure>
<svg viewBox="0 0 640 230" role="img" aria-labelledby="bias-title bias-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="bias-title">Accuracy of a fictional recognition system, overall and by group</title>
<desc id="bias-desc">Three horizontal bars drawn at 5 pixels per percentage point from a zero line. The bar for Group A shows 96 percent. The bar for Group B shows 60 percent and is hatched. The bar for overall shows 92.4 percent and is outlined with a dashed border. A note says the overall figure hides the lower accuracy for Group B.</desc>
<rect x="0" y="0" width="640" height="230" fill="#ffffff"/>
<defs><pattern id="bh" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="6" stroke="#1d2b44" stroke-width="2"/></pattern></defs>
<line x1="140" y1="20" x2="140" y2="170" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="2">
<rect x="140" y="30" width="480" height="30" fill="#ffffff"/>
<rect x="140" y="75" width="300" height="30" fill="url(#bh)"/>
<rect x="140" y="120" width="462" height="30" fill="#ffffff" stroke-dasharray="6 4"/>
</g>
<g fill="#1d2b44" font-size="14">
<text x="130" y="50" text-anchor="end">Group A (900 tests)</text>
<text x="130" y="95" text-anchor="end">Group B (100 tests)</text>
<text x="130" y="140" text-anchor="end">Overall (1000 tests)</text>
<text x="146" y="50" fill="#1d2b44" font-weight="bold">96%</text>
<text x="446" y="95" font-weight="bold">60%</text>
<text x="146" y="140" font-weight="bold">92.4%</text>
<text x="140" y="195">The overall figure (92.4%) is close to Group A's because Group A is 90% of the tests.</text>
<text x="140" y="215">It hides how much lower the accuracy is for Group B (60%).</text>
</g>
</svg>
<figcaption>Figure 1. Accuracy of a fictional recognition system. Scale: 5 pixels per percentage point. The single overall figure looks high but conceals a 36 percentage-point gap between groups.</figcaption>
</figure>

## Reducing bias

Programmers and organisations can take practical steps:

- **Collect representative data** and say who is in and out of the data.
- **Test across groups**, not just overall, before and after release.
- **Review features and rules for proxies** of characteristics that should not matter.
- **Bring in varied perspectives** (Topic 1.1) at every stage, including the people who will be affected.
- **Keep human review** for important decisions, and give people a way to question a result.
- **Monitor after release**, because patterns in real use may differ from testing.

None of these removes bias with certainty. The goal is to identify it, reduce it and keep checking.

## Worked example 1: the overall figure hides a gap

**Scenario.** A fictional recognition system is tested on 1,000 photographs: 900 from Group A and 100 from Group B. It is right on 864 of the Group A photographs and on 60 of the Group B photographs.

**Task.** Calculate the accuracy overall and for each group, and interpret.

**Group A.** 864 ÷ 900 = 0.96, so **96%**.

**Group B.** 60 ÷ 100 = 0.60, so **60%**.

**Overall.** The number correct is 864 + 60 = 924 of 1,000, so 924 ÷ 1,000 = **92.4%**.

**Interpretation.** The overall figure of 92.4% sounds strong. But the system is **36 percentage points less accurate** for Group B (96 - 60 = 36). The overall figure is close to Group A's because 90% of the tests came from Group A.

**What this suggests.** The test set is **unrepresentative** (only 10% from Group B), and the training data may be too. Remedies: collect more varied training and test photographs, report accuracy for each group, and set a target for the lowest-scoring group, not just the average.

**Check.** The check 0.9 × 96 + 0.1 × 60 = 86.4 + 6 = 92.4 confirms the overall figure is a weighted average dominated by the larger group.

## Worked example 2: a proxy rule

**Scenario.** A fictional company shortlists applicants with this rule, written in Marlbridge's rendering of the course's reference notation (`AND` joins two conditions; both must be true):

```text
IF (score >= 70 AND distance < 10)
{
  APPEND(shortlist, applicantNumber)
}
```

Here `score` is the interview score and `distance` is the distance in kilometres from the applicant's home to the office. Eight applicants:

| Applicant | Score | Distance (km) |
|---|---|---|
| 1 | 82 | 5 |
| 2 | 75 | 12 |
| 3 | 90 | 15 |
| 4 | 71 | 3 |
| 5 | 68 | 4 |
| 6 | 88 | 8 |
| 7 | 79 | 20 |
| 8 | 73 | 9 |

**Task.** (a) Who is shortlisted? (b) Who would be shortlisted using the score alone? (c) Evaluate the distance condition.

**(a) With both conditions.** Check each: 1 (82, 5): yes. 2 (75, 12): distance fails. 3 (90, 15): distance fails. 4 (71, 3): yes. 5 (68, 4): score fails. 6 (88, 8): yes. 7 (79, 20): distance fails. 8 (73, 9): yes. Shortlist: **1, 4, 6, 8** (4 applicants).

**(b) Score alone (at least 70).** Applicants 1, 2, 3, 4, 6, 7, 8 (7 applicants; only 5 fails).

**(c) Evaluation.** The distance condition removed applicants 2, 3 and 7, three people who met the score requirement, including the applicant with the highest score (90). The rule never mentions any group, but if people living far away are more likely to belong to a particular community, the rule acts as a **proxy** and can disadvantage that community. It may also exclude people who would be happy to travel, or work from home.

**Improvements.** Ask whether distance is genuinely needed for the job; if so, check which groups it excludes; if not, remove it. Test the rule's results by group, and let applicants explain their circumstances.

**Check.** Both lists were produced by applying the stated rule line by line to every row, and the difference (2, 3 and 7) is exactly the applicants who fail only the distance test.

## Feedback loops and other ways bias grows

Bias can strengthen itself. Imagine a fictional restaurant app that shows the most-reviewed places first. Places shown first get more visitors, so they get more reviews, so they are shown first again. A new restaurant of equal quality may never be seen, not because people disliked it but because the system's own output changed the data it learns from. This kind of **feedback loop** is a reason to monitor a system after release, not only to test it before.

Other sources of bias are less obvious. A **measurement choice** can favour some people: a fitness band that detects steps well for people who swing their arms while walking will under-count for others. A **threshold** can be set at a level that suits the group the designers tested on. And **testing conditions** matter: a camera system tested only in bright daylight may fail at night. In each case, the lesson of this topic holds: ask who was in the data, what was measured, what was not, and how results differ by group, and keep checking after release.

## Common misconceptions

- **"Computers are objective, so their results cannot be biased."** They reflect the data and rules they are given.
- **"If the algorithm never mentions a group, it cannot treat groups differently."** Proxy features can have the same effect.
- **"A high overall accuracy means the system is fair."** Check each group.
- **"Bias only comes from bad intentions."** It can arise from unrepresentative data and historical patterns.
- **"More data automatically fixes bias."** Representative data and group-by-group testing are needed.
- **"Bias is only a problem at the end, when the program is used."** It can be embedded at all levels.
- **"Removing bias means making everything the same."** It means checking and correcting unfair differences in how people are treated.

## Where this leads

Bias links back to the digital divide ([5.2](/advanced-course-resources/computer-science-principles/5-2-digital-divide-study-guide/)), since who is in the data depends on who has access, and forward to [Crowdsourcing](/advanced-course-resources/computer-science-principles/5-4-crowdsourcing-study-guide/) and [Legal and Ethical Concerns](/advanced-course-resources/computer-science-principles/5-5-legal-ethical-concerns-study-guide/), where fairness and responsibility are central. Practise with the [practice questions](/advanced-course-resources/computer-science-principles/5-3-computing-bias-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-principles/5-3-computing-bias-revision-notes/), and check your skills on the [checklist](/advanced-course-resources/computer-science-principles/5-3-computing-bias-checklist/).
