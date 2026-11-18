---
title: "Cambridge A Level Computer Science (9618): Program Development Life Cycle -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 12: Software Development"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 12.1
syllabusTopics:
  - qualification: "a-level"
    topic: "software-development"
    subtopic: "program-development-life-cycle"
description: "Original 9618 section 12.1 questions with answers on life cycle stages and outputs, waterfall, iterative and RAD principles, and choosing a model for a scenario."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Program Development Life Cycle study guide](/resources/cambridge-a-level-computer-science-9618-program-development-life-cycle/) · [Program Development Life Cycle revision notes](/resources/cambridge-a-level-computer-science-9618-program-development-life-cycle-revision-notes/)

---

## Section A

**1.** Identify the stage of the program development life cycle in which each activity takes place.

**(a)** Interviewing the people who will use the program. **[1]**

**(b)** Writing the source code from pseudocode. **[1]**

**(c)** Drawing a structure chart. **[1]**

**(d)** Changing the program so that it runs on a new operating system. **[1]**

**2.** State what is meant by a requirement specification, and why it is agreed with the client. **[2]**

**3.** State what is meant by a prototype. **[1]**

**4.** Give **two** differences between the waterfall model and the iterative model. **[2]**

## Section B

**5.** Describe the principles of the iterative development model. **[3]**

**6.** A project uses the waterfall model. During testing, the team finds that a requirement was misunderstood in the analysis stage. Explain why this is costly to put right. **[3]**

**7.** Recommend a development life cycle for **each** project and justify your choice.

**(a)** A national tax calculator, whose rules are published a year before the program is needed and must be applied exactly. **[2]**

**(b)** An interactive information screen for a museum, where the curators are not sure how it should look and want to try out different layouts. **[2]**

**8.** Describe **two** benefits and **two** drawbacks of rapid application development (RAD). **[4]**

**9.** Explain how the outputs of the design stage are used in the coding and testing stages. **[3]**

**10.** A programmer says: "Analysis wastes time. We can start coding straight away and fix any problems during testing." Evaluate this statement. **[4]**

**11.** Explain why different programs may need different development life cycles. Refer to **two** features of a program in your answer. **[4]**

**12.** Explain how documentation produced during development helps in the maintenance stage. **[2]**

---

## Answers

**1.** **(a)** Analysis [1].

**(b)** Coding [1].

**(c)** Design [1].

**(d)** Maintenance [1].

**2.** A document, produced in analysis, stating exactly what the program must do (its inputs, processes, outputs and constraints) [1]. It is agreed with the client so that both sides know what the finished program will do and can check it against the specification [1].

**3.** An early working model of a program, or part of it, built to obtain feedback from users [1].

**4.** Any two, 1 mark each: waterfall completes each stage once in order, iterative repeats the stages in cycles [1]; waterfall gives a working program only near the end, iterative gives a working version after the first iteration [1]; waterfall handles changes in requirements poorly, iterative can include changes in a later iteration [1]; waterfall involves the client mainly at the start and end, iterative after each iteration [1].

**5.** Any three, 1 mark each: a first version implementing a core subset of the requirements is developed [1]; development proceeds in repeated cycles, each going through design, coding and testing [1]; each iteration adds or refines functionality [1]; feedback from each version is used to plan the next [1]; the program grows until all requirements are met [1].

**6.** Each stage was completed and signed off before the next began, so the design and the code were both built on the wrong requirement [1]. The team must go back to analysis, correct the specification, then redo the affected design and code [1], and then repeat the testing, all of which adds time and cost late in the project [1].

**7.** **(a)** Waterfall [1], because the requirements are fixed and known in advance, so they can be fully specified and documented before design, and thorough sign-off suits rules that must be applied exactly [1].

**(b)** RAD (accept iterative with a matching reason) [1], because the curators are unsure what they want, so prototypes of the layouts can be built quickly and refined using their feedback [1].

**8.** Benefits, any two, 1 mark each: a usable product is produced quickly [1]; constant user feedback means the result closely matches users' needs [1]; changes are easy to make during development [1]; reusing components shortens development [1]. Drawbacks, any two, 1 mark each: users must be available throughout [1]; less documentation can make maintenance harder [1]; unsuitable for large or safety-critical systems [1]; speed can lead to poorer structure or code quality [1].

**9.** Structure charts, algorithms and data structure designs tell the programmer what modules to write, what they must do and the parameters passed between them [1], so the code is written to a plan rather than invented as it goes [1]. The test plan written in design gives the test data and expected results that the testing stage uses [1].

**10.** Points for the statement: coding starts sooner and something is visible quickly [1]. Points against: without analysis there is no requirement specification, so there is nothing to test the program against [1]; misunderstood requirements found in testing mean large parts of the code must be rewritten, which costs more than doing the analysis [1]. Conclusion: the statement is wrong for most projects; a short, focused analysis or a prototyping model such as RAD is a better way to start quickly [1].

**11.** Any two features, 2 marks each (the feature [1] and a matching model with a reason [1]): requirements that are fixed and well understood [1] suit waterfall, because each stage can be completed and signed off once [1]; requirements that are unclear or likely to change [1] suit iterative or RAD, because feedback can be built into later versions [1]; a large or safety-critical program [1] needs the thorough documentation and staged testing of waterfall [1]; a program needed quickly with users available to give feedback [1] suits RAD, because prototypes deliver a usable product early [1].

**12.** Design documents, comments and test records show how the program was built and why [1], so a programmer who did not write it can find where a change is needed and make it without introducing new faults [1].

---

## Where marks are usually lost

- Naming a model without a reason from the scenario.
- Describing RAD and iterative in the same words.
- Giving benefits that could apply to any model.
- Listing stages instead of explaining what each contributes.
