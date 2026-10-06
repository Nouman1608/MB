---
title: "Cambridge A Level Information Technology (ICT): Expert systems (9626) -- Practice Questions"
seoTitle: "9626 A Level IT Expert Systems Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Expert systems"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 7
syllabusTopics:
  - qualification: "a-level"
    topic: "expert-systems"
description: "Original practice questions with marked answers on expert systems for Cambridge AS & A Level IT 9626, from components to chaining traces."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover **topic 7, Expert systems** (section 7.1) of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 3). This is AS Level content, part of both the AS Level and the full A Level. It is examined on Paper 1 (Theory), which is based on sections 1–11; Paper 2 (Practical) candidates apply knowledge and understanding from sections 1–7. All questions can be answered on paper. All rule sets are fictional and simplified.

Learn the content first with the [study guide](/resources/a-level-cambridge-ict-expert-systems/) and the [revision notes](/resources/a-level-cambridge-ict-expert-systems-revision-notes/). The course hub is [Cambridge A Level IT](/boards/cambridge/a-level/ict/), the [9626 checklist](/checklists/cambridge/a-level/ict/) lists every outcome, and you can find your gaps with a [free diagnostic](/diagnostics/).

## Questions

**1.** State the **two** parts of the knowledge base in an expert system. **[2]**

**2.** Describe the role of the inference engine in an expert system. **[3]**

**3.** Explain the purpose of the knowledge base editor. **[2]**

**4.** Explain why an explanation system is useful in an expert system used for medical diagnosis. **[3]**

**5.** An insurance company uses these rules:

```
R1  IF driver age is under 25 THEN risk level is high
R2  IF risk level is high AND driver has made a claim in the last 3 years THEN premium band is D
R3  IF risk level is high AND driver has made no claim in the last 3 years THEN premium band is C
R4  IF premium band is D THEN offer telematics (black box) policy
```

A 19-year-old driver who made a claim last year applies.

**(a)** Using forward chaining, list the rules that fire, in order. **[3]**
**(b)** State the **two** conclusions the system gives the customer. **[2]**
**(c)** Explain why this process is described as data driven. **[1]**

**6.** A mining company's expert system uses backward chaining with these rules:

```
R1  IF mineral M is likely AND a road is within 20 km THEN recommend test drilling
R2  IF magnetic survey reading is high AND rock samples contain quartz veins THEN mineral M is likely
```

The goal is "recommend test drilling". Questions are asked in the order the conditions appear.

**(a)** State the first question the system asks the user. **[1]**
**(b)** All answers are "yes". List the questions asked, in order. **[2]**
**(c)** At a second site the magnetic survey reading is low. Explain what the system does. **[2]**
**(d)** Give **one** reason why backward chaining suits this task. **[1]**

**7.** A nature reserve's identification system uses these rules:

```
R1  IF animal has six legs THEN animal is an insect
R2  IF animal is an insect AND it has hard wing cases THEN animal is in group G
R3  IF animal is in group G AND wing cases are red THEN species is G2
R4  IF animal is in group G AND wing cases are black THEN species is G3
```

A volunteer enters: six legs; hard wing cases; black wing cases.

**(a)** Using forward chaining, state the order in which the rules fire and the species identified. **[2]**
**(b)** Explain why each question the system asks should test only one feature. **[2]**

**8.** Explain, using examples, the difference between data driven and goal driven behaviour of computer-controlled characters in a game. **[4]**

**9.** Describe how an expert system could be used to help a family with financial planning. **[4]**

**10.** Explain how artificial intelligence used to manipulate social media can be:

**(a)** data driven **[2]**
**(b)** goal driven. **[2]**

**11.** A garage plans to use an expert system to diagnose car engine faults. Describe how each component of the expert system would be used. **[7]**

**12.** A bank lets customers use an expert system for investment analysis instead of meeting an adviser. Evaluate this decision. **[6]**

## Answers

**1.** A database of facts [1]; a rules base. [1] **[2]**
*Examiner insight:* "Facts and rules" earns both marks only if both are named; "a database" alone earns nothing because it does not separate the two parts.

**2.** It takes the facts entered through the user interface and searches the rules base for rules whose conditions match them [1]; it applies (fires) matching rules to reach new conclusions, using forward or backward chaining [1]; it decides which question to ask next and passes the possible solutions to the user interface. [1] **[3]**
*Examiner insight:* "It is the brain of the system" is too vague for credit; each mark needs a specific action the engine carries out.

**3.** It allows facts and rules in the knowledge base to be added, edited or deleted [1] so that the system stays up to date when knowledge changes, for example new research or new products. [1] **[2]**
*Examiner insight:* Answers that say users enter their symptoms through the editor confuse it with the user interface and score zero.

**4.** It shows how the system reached a diagnosis, listing the symptoms and rules used [1], so the doctor can check the reasoning is sound before acting [1]; it can explain why a question is being asked or show a probability for each possible condition, which helps the doctor and patient trust and judge the advice. [1] **[3]**
*Examiner insight:* The question is about medical diagnosis, so at least one point must be applied to doctors, patients or diagnoses; a generic definition earns at most one mark.

**5. (a)** R1 fires first [1], then R2 [1], then R4. [1]
**(b)** Premium band **D** [1]; offer of a **telematics (black box) policy**. [1]
**(c)** It starts from the data entered (age and claim history) and works forward to conclusions. [1] **[6]**
*Examiner insight:* Listing R3 as firing, or omitting R4 because it fires only after R2 adds a new fact, loses the accuracy marks; the order must be exact.

**6. (a)** Is the magnetic survey reading high? [1]
**(b)** Is the magnetic survey reading high?; do rock samples contain quartz veins? [1]; is a road within 20 km? [1] (in that order)
**(c)** R2 fails at its first condition, so "mineral M is likely" cannot be proved [1]; R1 therefore fails and test drilling is not recommended, without asking about quartz veins or the road. [1]
**(d)** Only the questions needed to test the goal are asked, so costly survey or sampling data is collected only when needed. [1] **[6]**
*Examiner insight:* In (b) the road question must come last, because backward chaining proves the sub-goal "mineral M is likely" before the second condition of R1.

**7. (a)** R1, then R2, then R4 [1]; species **G3**. [1]
**(b)** If a question tests two features, a user whose animal has one but not the other cannot answer it correctly [1], so the inference engine may receive wrong facts and give a wrong identification. [1] **[4]**
*Examiner insight:* In (a) the species mark depends on the rule order being correct; naming G3 with an order that includes R3 does not earn both marks.

**8.** A data driven character reacts to the current state of the game [1], for example IF the player comes within range THEN attack. [1] A goal driven character starts with a goal and works backward to plan the actions needed [1], for example to capture an object it must reach a room, so it must first open a door. [1] **[4]**
*Examiner insight:* Each type needs both a description and an example; two descriptions with no examples is capped at two marks.

**9.** The family enters income, spending, savings, debts and goals, such as buying a house, through the user interface [1]. The knowledge base holds experts' rules on budgeting, saving, loans and pensions [1]. The inference engine applies the rules to the family's data to work out what they can afford to save or borrow [1]. The system outputs a possible plan, such as a monthly savings amount, with an explanation of how it was reached. [1] **[4]**
*Examiner insight:* "Describe how" needs the input, the processing and the output for this family; a list of component names with no financial content earns little.

**10. (a)** The system collects the user's activity data, such as likes, shares and viewing time [1], and works forward from it to infer interests and choose which posts or adverts to show. [1]
**(b)** The system starts from a goal, such as keeping the user online longer or making them see a particular message [1], and works backward to select the content and timing most likely to achieve it. [1] **[4]**
*Examiner insight:* Each part needs the starting point and the direction of reasoning; describing (a) and (b) with the same example earns credit only once.

**11.** Indicative points; seven shown:
- User interface: the mechanic answers questions on screen, such as whether the engine cranks, often as yes/no choices [1], and sees the suggested faults. [1]
- Knowledge base: the database of facts holds faults and their symptoms for each model [1]; the rules base holds IF…THEN rules linking symptoms to faults. [1]
- Inference engine: applies the rules to the mechanic's answers to reach likely faults and decides which question to ask next. [1]
- Explanation system: shows which symptoms and rules led to each suggested fault, so the mechanic can check it. [1]
- Knowledge base editor: lets experts add rules and facts for new car models. [1] **[7]**
*Examiner insight:* Every component needs a garage-specific use; naming all five components without applying them to car engines earns well below half marks.

**12.** Indicative points; for each point one mark for the benefit or drawback and its development.
- Available at any time without an appointment, so customers can check investments when they choose. [1]
- Gives consistent analysis based on several experts' knowledge, not one adviser's view. [1]
- Cheaper for the bank than employing many advisers. [1]
- Cannot take account of unusual personal circumstances that are not in its rules, so advice may be unsuitable. [1]
- If market rules are not updated through the knowledge base editor, advice goes out of date and could lose customers money. [1]
- Conclusion: suitable for routine analysis, but customers with large or complex investments should still be able to speak to an adviser. [1] **[6]**
*Examiner insight:* "Evaluate" needs both sides and a reasoned judgement; a one-sided list usually earns no more than about half the marks.

## Where marks are usually lost

- Naming "a database" for the knowledge base without its two parts.
- Treating the knowledge base editor as the way users enter data.
- Describing the explanation system as a help screen rather than an account of the reasoning.
- Missing a rule that fires only after a new fact has been added in a forward chaining trace.
- In backward chaining, listing questions in the order they appear on the page rather than the order sub-goals are tested.
- Forgetting that a failed condition stops the rule, so later questions are never asked.
- Giving data driven and goal driven definitions with no example from the context in the question.
- Writing generic advantages ("it is fast") with no link to the scenario.

## Next steps

- Review weak areas in the [revision notes](/resources/a-level-cambridge-ict-expert-systems-revision-notes/)
- Re-read the [study guide](/resources/a-level-cambridge-ict-expert-systems/) for full explanations
- More AS practice: [The digital divide practice](/resources/a-level-cambridge-ict-the-digital-divide-practice/) and [Algorithms and flowcharts practice](/resources/a-level-cambridge-ict-algorithms-and-flowcharts-practice/)
- Course hub: [Cambridge A Level IT](/boards/cambridge/a-level/ict/)
- Printable checklist: [9626 checklist](/checklists/cambridge/a-level/ict/)
- Find your gaps with [all free 10-minute diagnostics](/diagnostics/)
- [Book a free trial class](/trial/)

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, version 3 (published July 2025), Cambridge International, part of Cambridge University Press & Assessment. Topic 7, Expert systems, section 7.1.
