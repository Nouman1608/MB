---
title: "Cambridge A Level Information Technology (ICT): System life cycle (9626) -- Practice Questions"
seoTitle: "Cambridge A Level IT 9626: System Life Cycle Practice"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "System life cycle"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 16
syllabusTopics:
  - qualification: "a-level"
    topic: "system-life-cycle"
description: "Original practice questions with marked answers on the system life cycle for Cambridge A Level IT 9626: DFDs, test plans, changeover and maintenance."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover **topic 16, System life cycle** (sections 16.1–16.10) of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 3). This is **A Level only** content. The syllabus states that Paper 3 (Advanced Theory) questions are based on sections 12–21, and calculators are not allowed in Paper 3. All questions can be answered on paper.

Revise first with the [study guide](/resources/a-level-cambridge-ict-system-life-cycle/) and [revision notes](/resources/a-level-cambridge-ict-system-life-cycle-revision-notes/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic, and the [printable 9626 checklist](/checklists/cambridge/a-level/ict/) tracks your progress. Not sure where you stand? Take a [free diagnostic](/diagnostics/).

## Questions

**1.** State what is meant by a system, and give one example of a hardware system. **[2]**

**2.** A regional bus company is replacing paper tickets with a smartcard system. Describe the purpose of:

**(a)** the user requirements specification **[2]**
**(b)** the system specification. **[2]**

**3.** A youth sports club's new membership system has a field Age that must accept whole numbers from 11 to 18 inclusive. Complete a test plan for this field with **six** tests: one normal value, both extreme values, an abnormal value just outside each limit, and one abnormal value of the wrong data type. For each, give the test data, its type and the expected result. **[6]**

**4.** Explain the difference between white box testing and black box testing. **[2]**

**5.** A hospital pharmacy is designing a system to manage prescriptions. Three external entities send or receive data: Doctor (sends prescriptions), Patient (receives medicine labels and collection notices) and Supplier (receives orders, sends delivery notes).

**(a)** Describe what a level 0 (context-level) data flow diagram for this system would show. Refer to the entities and data flows above. **[4]**
**(b)** Explain **two** ways a level 1 DFD of the same system would differ from the level 0 diagram. **[2]**
**(c)** A student's level 1 DFD shows the flow "Delivery note" going from Supplier directly into the data store Stock. Explain why this is incorrect and how to correct it. **[2]**

**6.** Name the system flowchart symbol you would use for each of the following in a weekly payroll system:

**(a)** timesheet data keyed in by a clerk **[1]**
**(b)** the employee master file held on a hard disk **[1]**
**(c)** a payslip printed for every employee **[1]**
**(d)** an error summary shown on the clerk's monitor. **[1]**

**7.** A school is developing a canteen pre-order app. There are about 1,200 students, 8 catering staff and 1 catering manager.

**(a)** Explain why an interview is a suitable method for researching the manager's requirements. **[2]**
**(b)** Explain why a questionnaire is a suitable method for researching the students' views. **[2]**
**(c)** Give **one** disadvantage of observing the catering staff at work. **[1]**

**8.** Identify the type of maintenance in each case.

**(a)** A booking system crashes when a date in a leap year is entered, and the code is fixed. **[1]**
**(b)** A payroll system is changed because the government has introduced a new tax band. **[1]**
**(c)** Users ask for search results to load faster, and the database queries are improved. **[1]**
**(d)** Developers rewrite an unclear module and update its documentation before any fault is reported. **[1]**

**9.** A courier company with five depots is replacing its delivery-tracking system. Evaluate the use of pilot implementation for this company. **[6]**

**10.** A new online bookshop wants a mobile app. Its owners are not yet sure which features they need, and expect their ideas to change after launch. Compare waterfall and agile development for this project, and recommend one. **[8]**

**11.** **(a)** Describe the difference between throwaway prototyping and evolutionary prototyping. **[4]**
**(b)** Give **one** disadvantage of rapid prototyping. **[1]**

**12.** A dental practice has introduced a new appointments system.

**(a)** Describe **three** items you would expect to find in its technical documentation. **[3]**
**(b)** Explain why the receptionists need user documentation rather than the technical documentation. **[2]**
**(c)** Describe **two** techniques the practice could use to evaluate the new system. **[4]**

## Answers

**1.** A collection of components that work together to form a whole [1]; for example a network of card readers and tills, or the sensors and processor in a security system. [1] **[2]**
*Examiner insight:* A software example such as "a booking app" does not answer the hardware part; match the example to the type asked for.

**2. (a)** It records what the users need the system to do, for example passengers tapping a card to pay and drivers seeing a valid or invalid fare [1]; it is agreed with the bus company and later used to evaluate whether the system meets those needs. [1] **[2]**
**(b)** It lists the hardware the system needs, such as card readers on buses and servers [1], and the software needed, such as the operating system and database software. [1] **[2]**
*Examiner insight:* Describing the system specification as "what the system must do" is the user requirements again; keep hardware and software in (b).

**3.** One mark for each correct row with data, type and expected result:
Test 1: 14, normal, accepted. [1]
Test 2: 11, extreme, accepted. [1]
Test 3: 18, extreme, accepted. [1]
Test 4: 10, abnormal, rejected with an error message such as "Age must be 11 to 18". [1]
Test 5: 19, abnormal, rejected with an error message. [1]
Test 6: "fourteen", abnormal, rejected with a message asking for a whole number. [1] **[6]**
*Examiner insight:* A row is unlikely to be credited if the expected result is missing or says only "error"; state accepted or rejected for each.

**4.** White box testing examines the internal code and logic, testing each path through the program [1]; black box testing checks that given inputs produce the expected outputs without looking at the code. [1] **[2]**
*Examiner insight:* Describe both sides of a difference; a description of white box alone usually leaves the second mark unearned.

**5. (a)** One process representing the whole pharmacy system [1]; the three external entities Doctor, Patient and Supplier around it [1]; labelled data flows: prescription from Doctor in, medicine label and collection notice out to Patient [1]; order out to Supplier and delivery note in from Supplier. No data stores are shown. [1] **[4]**
**(b)** Level 1 splits the single process into several numbered sub-processes, such as "Check prescription" and "Reorder stock" [1]; level 1 shows data stores such as Stock and Prescriptions, which level 0 does not. [1] **[2]**
**(c)** Data cannot flow directly from an external entity to a data store; it must pass through a process [1]. Add a process such as "Record delivery" that receives the delivery note and then updates the Stock store. [1] **[2]**
*Examiner insight:* Name the actual entities and flows from the scenario; a generic description of DFDs is likely to earn little in part (a).

**6. (a)** Input/output. [1]
**(b)** Magnetic disk file. [1]
**(c)** Multiple document output. [1]
**(d)** Display. [1] **[4]**
*Examiner insight:* (c) is multiple, not single, document output because a payslip is produced for every employee; read the quantity in the question.

**7. (a)** There is only one manager, so an interview is not too time-consuming [1], and follow-up questions can draw out detailed requirements such as menu rules and order deadlines. [1] **[2]**
**(b)** There are too many students to interview, so a questionnaire reaches all of them quickly [1], and the answers to closed questions are easy to collate and analyse. [1] **[2]**
**(c)** Staff may work differently, for example more carefully, because they know they are being watched. [1] **[1]**
*Examiner insight:* "Suitable" questions need a reason tied to the group in the scenario, such as numbers of people; a general advantage of the method on its own may not score.

**8. (a)** Corrective. [1]
**(b)** Adaptive. [1]
**(c)** Perfective. [1]
**(d)** Preventive. [1] **[4]**
*Examiner insight:* Adaptive is a change in the outside environment (law, hardware, operating system); perfective is an improvement users ask for. Check which caused the change.

**9.** The whole new system goes live at one depot first while the other four keep the old system. [1]
Advantage: if the system fails, only one depot is affected, so most deliveries are still tracked. [1]
Advantage: staff at the pilot depot gain experience and can train staff at the other depots. [1]
Disadvantage: rollout to all five depots takes longer than a direct changeover. [1]
Disadvantage: parcels moving between the pilot depot and old-system depots may be harder to track. [1]
Conclusion: with several similar depots and costly lost parcels, pilot is suitable if transfers between depots are planned for. [1] **[6]**
*Examiner insight:* "Evaluate" calls for both advantages and disadvantages applied to the company and a justified conclusion; a list of advantages alone is unlikely to reach full marks.

**10.** Waterfall completes each stage, from analysis to implementation, before the next begins [1], so it needs clear requirements at the start, which the owners lack. [1] Changes found after the design stage are costly to make in waterfall. [1] Waterfall does give a clear plan, documentation and fixed deadlines, which helps budgeting. [1]
Agile builds the app in short cycles, delivering small working features [1], with the owners involved throughout, so changing ideas can be added in the next cycle. [1] Agile needs the owners to give time to frequent reviews, and produces less documentation. [1]
Recommendation: agile, because the requirements are unclear and expected to change. [1] **[8]**
*Examiner insight:* A comparison needs points about both methods linked to the bookshop, and a recommendation that follows from the scenario.

**11. (a)** A throwaway prototype is built quickly to clarify or test requirements [1], then discarded, and the real system is built separately [1]. An evolutionary prototype is refined repeatedly in response to user feedback [1] until it becomes the final system itself. [1] **[4]**
**(b)** Users may think the system is almost finished because a working model appeared so quickly. [1] **[1]**
*Examiner insight:* The key difference is what happens to the prototype at the end; state it for both types.

**12. (a)** Any three, one mark each: program code or listings [1]; data structures and file or table layouts [1]; validation rules, test plans and test results. [1] **[3]**
**(b)** Receptionists need step-by-step, non-technical instructions for tasks such as booking an appointment [1]; technical documentation holds code and data structures they do not need. [1] **[2]**
**(c)** Compare the working system against the original requirements and specifications [1], for example checking that double bookings are blocked as specified [1]. Collect feedback from receptionists and dentists using questionnaires or interviews [1] about ease of use and speed, and use it to plan improvements. [1] **[4]**
*Examiner insight:* Each technique in (c) needs a description applied to the practice, not just its name.

## Where marks are usually lost

- Confusing the system specification with the user requirements specification.
- Including data stores on a level 0 DFD, or drawing flows straight from entities to stores.
- Writing "error" instead of a clear expected result in a test plan.
- Classifying boundary values (11 and 18 above) as abnormal.
- Mixing up adaptive and perfective maintenance.
- Recommending a development method without linking it to how certain the requirements are.
- "Evaluate" answers with no disadvantages and no conclusion.

## Next steps

- Recap with the [revision notes](/resources/a-level-cambridge-ict-system-life-cycle-revision-notes/).
- Reread the [study guide](/resources/a-level-cambridge-ict-system-life-cycle/).
- Review test data in [spreadsheets](/resources/a-level-cambridge-ict-spreadsheets/) and validation in [data processing and information](/resources/a-level-cambridge-ict-data-processing-and-information/).
- Explore the [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) and the [printable 9626 checklist](/checklists/cambridge/a-level/ict/).
- Try all free 10-minute [diagnostics](/diagnostics/).
- [Book a free trial class](/trial/).

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 3, Cambridge University Press & Assessment. Topic 16: System life cycle.
