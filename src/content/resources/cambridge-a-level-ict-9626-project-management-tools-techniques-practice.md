---
title: "Cambridge A Level Information Technology (ICT): 15.3 Tools and techniques for project management tasks (9626) -- Practice Questions"
seoTitle: "Cambridge A Level IT 9626: Gantt, PERT and CPM Practice"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Project management"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 15.3
syllabusTopics:
  - qualification: "a-level"
    topic: "project-management"
  - qualification: "a-level"
    topic: "project-management"
    subtopic: "tools-and-techniques-for-project-management-tasks"
description: "Original practice questions with marked answers on Gantt charts, PERT networks, float and the critical path for section 15.3 of Cambridge A Level IT 9626."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover **section 15.3 Tools and techniques for project management tasks** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). This is **A Level only** content examined in Paper 3 (Advanced Theory), where calculators are not allowed. Every question can be answered on paper. In the networks, time is measured in days from day 0.

Revise first with the [study guide](/resources/cambridge-a-level-ict-9626-project-management-tools-techniques/) and [revision notes](/resources/cambridge-a-level-ict-9626-project-management-tools-techniques-revision-notes/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

## Questions

**1.** Define the term *float* in project management. **[2]**

**2.** Explain the difference between a task and a milestone on a project plan. **[2]**

**3.** A project plan shows these tasks. Task P runs from day 0 to day 4. Task Q runs from day 4 to day 9. Task R runs from day 4 to day 7. Task S runs from day 9 to day 11 and cannot start until both Q and R are finished.

**(a)** State which tasks are in progress on day 5. **[1]**
**(b)** State the planned finish day of the project. **[1]**
**(c)** Task R is delayed and now finishes on day 10. Explain the effect on the project. **[2]**

**4.** A company is building a stock-control system. The tasks, their durations in days and their dependencies are shown.

| Task | Duration | Depends on |
|---|---|---|
| A Gather requirements | 4 | none |
| B Design database | 3 | A |
| C Design screens | 6 | A |
| D Build database | 2 | B |
| E Build screens | 5 | B, C |
| F Connect and test | 3 | D, E |
| G Write user guide | 2 | C |
| H Train staff | 4 | F, G |

**(a)** State the earliest start day of task E and explain how you found it. **[2]**
**(b)** State the minimum time in which the project can be completed. **[1]**
**(c)** Calculate the float of tasks B, D and G. **[3]**
**(d)** List the tasks on the critical path. **[2]**
**(e)** Task C takes 3 days longer than planned. State the new project duration and explain your answer. **[2]**
**(f)** Task B takes 8 days instead of 3. Explain why the project is delayed by 2 days, and state what has happened to the critical path. **[3]**

**5.** The project manager of the stock-control system in Question 4 has two extra programmers available for one week. Using critical path analysis, explain which tasks they should be allocated to and why. **[3]**

**6.** Describe **three** ways in which critical path analysis can help a project manager to control a project. **[3]**

**7.** A small project has 12 tasks, several of which run at the same time. The manager is deciding between a Gantt chart and a PERT chart for the weekly progress meeting.

Evaluate the use of each, and recommend which should be used at the meeting. **[6]**

**8.** Give **one** disadvantage of using the critical path method on a long project. **[1]**

## Answers

**1.** Float is the amount of time a task can be delayed [1] without delaying the completion of the whole project (LS - ES). [1] **[2]**
*Examiner insight:* "Spare time" alone is a weak answer; say what the delay does not affect.

**2.** A task has a duration, it is work that takes time and resources [1]; a milestone has no duration and marks a key point such as "design approved" or "testing complete". [1] **[2]**

**3. (a)** Q and R. [1] **[1]**
**(b)** Day 11. [1] **[1]**
**(c)** S cannot start until R is done, so S would start at day 10 instead of day 9 [1] and finish on day 12, so the project finishes one day late. [1] **[2]**
*Examiner insight:* R originally had 2 days of float (finish day 7, needed by day 9), so a delay to day 10 uses it all and goes 1 day further. Show the 2-day float or the start of S.

**4. (a)** 10 [1]. E needs both B (finishes day 7) and C (finishes day 10), so it starts at the later of the two. [1] **[2]**
**(b)** 22 days. [1] **[1]**
**(c)** B: float 3 [1]. D: float 6 [1]. G: float 6. [1] **[3]**
Working: B ES 4, LS 7. D ES 7, LS 13. G ES 10, LS 16 (G needs to finish by day 18, when H starts).
**(d)** A, C, E, F, H (any four correct and in order for 1 mark; all five for 2). [2] **[2]**
Check: 4 + 6 + 5 + 3 + 4 = 22.
**(e)** 25 days [1]. C is on the critical path with no float, so the 3 days are added directly to the project. [1] **[2]**
**(f)** B has 3 days of float, so it can overrun by 3 days without effect [1]. The overrun is 8 - 3 = 5 days, which is 2 days more than the float, so B now finishes on day 12, E starts on day 12 instead of day 10 and the project finishes on day 24 [1]. The critical path now runs through B (A, B, E, F, H) instead of through C. [1] **[3]**
*Examiner insight:* A delay costs project time only when it is larger than the float. Show the comparison of the overrun with the float.

**5.** Allocate them to critical tasks: A, C, E, F or H [1], because only speeding up critical tasks shortens the project [1]. They should not be allocated to B, D or G, which have float, so finishing them sooner would not bring the end date forward. [1] **[3]**
*Examiner insight:* Reasons must refer to float or critical tasks; "they are the biggest tasks" does not score.

**6.** Any three from, one mark each for the use and a linked explanation:
- Authorising work: release work on critical tasks first and watch their start dates, while work with float can be authorised later. [1]
- Costings: pay for extra people or overtime only on critical tasks, as speeding up a task with float saves no time; costs can be linked to task dates to give a budget over time. [1]
- Allocating resources: move staff and equipment from tasks with float to critical tasks. [1]
- Monitoring: recalculate when a task is late, because the critical path may change. [1] **[3]**

**7.** Gantt chart: easy to read and understand [1]; shows what is running in parallel this week and how far each task has progressed [1]; poor at showing dependencies and float on 12 tasks. [1]
PERT chart: shows dependencies and lets the critical path and float be calculated [1]; harder to read, takes longer to draw and redraw, and depends on accurate estimates. [1]
Conclusion (one mark): a justified recommendation, for example use the Gantt chart for the weekly meeting to report progress and keep the PERT/CPM analysis for the manager to decide where delays matter. [1] **[6]**
*Examiner insight:* "Evaluate" needs a judgement. Without a clear recommendation linked to the meeting, the answer is unlikely to reach full marks.

**8.** The critical path can change as tasks overrun or finish early, so the calculation must be repeated often. (Also accept: it depends on accurate duration estimates, which are hard to make on long projects.) [1] **[1]**

## Where marks are usually lost

- Adding all task durations rather than using the longest dependent path.
- Taking the smaller finish time at a merge point on the forward pass.
- Giving float as "extra time" without linking it to the project end date.
- Describing a milestone as a short task.
- Listing advantages and disadvantages without a conclusion in an "evaluate" question.
- Recommending extra resources for tasks that have float.

## More on this topic

- Recap with the [revision notes](/resources/cambridge-a-level-ict-9626-project-management-tools-techniques-revision-notes/).
- Reread the [study guide](/resources/cambridge-a-level-ict-9626-project-management-tools-techniques/).
- Explore the [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) and the [printable 9626 checklist](/checklists/cambridge/a-level/ict/).
- Try all free 10-minute [diagnostics](/diagnostics/).
- [Book a free trial class](/trial/).

## Frequently asked questions

**Is project management examined in Paper 3?**
Yes. Project management is topic 15 of Cambridge International AS & A Level Information Technology (9626) and is A Level only. It is examined in Paper 3 Advanced Theory.

**Do I need a calculator for PERT and critical path questions?**
No. Calculators are not allowed in Paper 3, and the durations are small whole numbers, so the forward and backward passes can be done by hand.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 15.3: Tools and techniques for project management tasks.
