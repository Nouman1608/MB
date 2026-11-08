---
title: "Cambridge A Level Computer Science (9618): Software Development -- Practice Questions"
seoTitle: "Cambridge 9618 Software Development Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 12: Software Development"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 12
syllabusTopics:
  - qualification: "a-level"
    topic: "software-development"
  - qualification: "a-level"
    topic: "software-development"
    subtopic: "program-development-life-cycle"
  - qualification: "a-level"
    topic: "software-development"
    subtopic: "program-design"
  - qualification: "a-level"
    topic: "software-development"
    subtopic: "program-testing-and-maintenance"
description: "Questions with answers on life cycle models, structure charts, state-transition diagrams, errors, testing, test data and maintenance for Cambridge 9618."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Software Development revision notes](/resources/cambridge-a-level-computer-science-software-development-revision-notes/) · [Software Development study guide](/resources/cambridge-a-level-computer-science-software-development-study-guide/)

These questions cover Topic 12 Software Development of Cambridge International AS & A Level Computer Science 9618: the program development life cycle (12.1), program design (12.2), and program testing and maintenance (12.3). The topic is assessed in Paper 2. Answers are in mark-scheme style.

---

## Questions

**1.** State the purpose of a program development life cycle. **[2]**

**2.** Describe what happens in the **analysis** and **design** stages of the life cycle. **[4]**

**3.** A company is writing software to control the brakes on a train. A second team is building a website for a new café whose owner is not sure what she wants.

**(a)** Recommend a life cycle model for **each** project and justify each choice. **[4]**
**(b)** Describe **one** drawback of rapid application development (RAD). **[2]**

**4.** A program is designed with a top module CalculatePay, which calls three modules: GetHours, which returns HoursWorked; ComputeGross, which receives HoursWorked and HourlyRate and returns GrossPay; and PrintPayslip, which receives GrossPay.

**(a)** State the purpose of a structure chart. **[2]**
**(b)** Describe how the parameters would be shown on the structure chart for this design. **[3]**
**(c)** Write the pseudocode header for ComputeGross. **[2]**

**5.** A door lock has three states: Locked, Unlocked and Alarm. Entering the correct code in Locked moves it to Unlocked. Three wrong codes in a row in Locked move it to Alarm. Closing the door in Unlocked moves it to Locked. A reset key in Alarm moves it to Locked.

**(a)** State the purpose of a state-transition diagram. **[1]**
**(b)** List every state and every transition the diagram would show, with the event labelling each transition. **[4]**

**6.** Identify the type of error in each case.

**(a)** A program stops with a message when it tries to read Scores[31] from an array declared ARRAY[1:30]. **[1]**
**(b)** A program calculates the average of three numbers as A + B + C / 3. **[1]**
**(c)** The keyword ENDWHILE is spelt ENDWHLE. **[1]**

**7.** The function below should return TRUE if Age is from 13 to 19 inclusive.

```
FUNCTION IsTeen(Age : INTEGER) RETURNS BOOLEAN
   IF Age > 13 AND Age < 19 THEN
      RETURN TRUE
   ELSE
      RETURN FALSE
   ENDIF
ENDFUNCTION
```

**(a)** Complete a test plan with **four** tests for this function, giving the test data, the type of test data and the expected result. **[4]**
**(b)** State which of your tests would reveal the error, and correct the code. **[2]**

**8.** Explain the difference between white-box and black-box testing. **[2]**

**9.** A team is developing a program in modules. Describe how **stub testing** and **integration testing** would each be used. **[4]**

**10.** Explain the difference between alpha, beta and acceptance testing. **[3]**

**11.** Describe **one** example of each type of maintenance for a hotel booking system: corrective, adaptive and perfective. **[3]**

**12.** Give **two** ways a programmer can avoid faults when writing a program. **[2]**

---

## Answers

**1.** It provides a structured sequence of stages to follow when developing a program [1], so that the work is planned and monitored and the final program meets the user's requirements [1].

**2.** Analysis: investigate the current system / problem, e.g. by interviewing users [1], and produce a requirements specification of what the program must do [1]. Design: plan how the program will work, e.g. modules, algorithms, data structures and the user interface [1], using structure charts and pseudocode, and plan the testing [1].

**3. (a)** Train brakes: waterfall [1], because the requirements are fixed and safety-critical, so each stage can be fully completed, documented and checked before the next [1]. Café website: RAD or iterative [1], because the owner is unsure of her needs; prototypes / early versions let her give feedback so the site is changed to match what she wants [1].
**(b)** Any one, described: users must be available throughout to give feedback, which costs them time [1+1]; fast development can mean less documentation / lower code quality, making later maintenance harder [1+1]; it is not suited to large or safety-critical systems where full design up front is needed [1+1].

**4. (a)** It shows how a problem is decomposed into modules, arranged in a hierarchy [1], and the parameters passed between the modules [1].
**(b)** HoursWorked is shown as a data couple (arrow with an open circle) pointing up from GetHours to CalculatePay [1]. HoursWorked and HourlyRate are data couples pointing down from CalculatePay to ComputeGross, and GrossPay points up from ComputeGross [1]. GrossPay is a data couple pointing down from CalculatePay to PrintPayslip [1].
**(c)** `FUNCTION ComputeGross(HoursWorked : REAL, HourlyRate : REAL) RETURNS REAL` [2]: one mark for the two parameters with data types, one for FUNCTION with RETURNS REAL.

**5. (a)** To document an algorithm by showing the states a system can be in and the events (inputs) that cause it to change from one state to another [1].
**(b)** States: Locked (start state), Unlocked, Alarm [1]. Transitions: Locked → Unlocked labelled "correct code" [1]; Locked → Alarm labelled "third wrong code" (with Locked → Locked for the first two wrong codes, if attempts are counted) [1]; Unlocked → Locked labelled "door closed", and Alarm → Locked labelled "reset key" [1].

**6. (a)** Run-time error [1]. **(b)** Logic error [1] (only C is divided by 3; it should be (A + B + C) / 3). **(c)** Syntax error [1].

**7. (a)** One mark per correct row, maximum 4. For example:

| Test | Data | Type | Expected result |
|---|---|---|---|
| 1 | 16 | Normal | TRUE |
| 2 | 13 | Extreme (lower) | TRUE |
| 3 | 19 | Extreme (upper) | TRUE |
| 4 | 12 or 20 | Boundary (just outside) | FALSE |
| 5 | −4 | Abnormal | FALSE |

**(b)** Tests 2 and 3 (13 and 19) would return FALSE instead of TRUE [1]. Correction: `IF Age >= 13 AND Age <= 19 THEN` [1].

**8.** White-box testing chooses tests using knowledge of the code, so that every path / branch through it is tested [1]. Black-box testing uses only the specification: inputs are entered and the outputs compared with the expected outputs, without looking at how the code works [1].

**9.** Stub testing: a module that calls another module not yet written is tested using a stub [1], a simple dummy module that, for example, outputs a message or returns a fixed value, so the calling module's logic can be checked [1]. Integration testing: after each module has been tested on its own, the modules are combined [1] and tested together to check that they work correctly with each other, e.g. that parameters are passed correctly [1].

**10.** Alpha testing is carried out in-house by the developer's team before release [1]. Beta testing gives a near-final version to a limited group of real users outside the company, who report faults found in normal use [1]. Acceptance testing is done with or by the client to show that the program meets the agreed requirements before it is handed over [1].

**11.** Corrective: fix a fault where two guests can be booked into the same room for the same night [1]. Adaptive: change the system for a new tax rate, or to run on a new operating system or connect to a new payment provider [1]. Perfective: improve the system, e.g. make room searches faster or add an option to choose a room with a view [1].

**12.** Any two: plan the solution first using structure charts / pseudocode [1]; use modules that can be tested separately [1]; use meaningful identifier names and comments [1]; use existing, tested library routines [1]; validate inputs [1].

---

## Where marks are usually lost

- Swapping the error types: a crash at run time is not a syntax error.
- Test plans without expected results, or with data outside the stated range.
- Calling "75" extreme data for a 1 to 50 range; it is abnormal.
- Writing that stub testing tests modules together; it replaces a missing module.
- Recommending a life cycle without a reason taken from the scenario.

## Frequently asked questions

**How many tests should a test plan include?**
Enough to cover normal, extreme, boundary and abnormal data for every input the question names. Each test needs data, type and expected result to score.

**Do I have to draw structure charts and state-transition diagrams?**
You may be asked to draw or complete one in the exam. Practise drawing them on paper, labelling every parameter or event.

**Is a dry run the same as a walkthrough?**
No. A dry run is done by hand by one person, usually with a trace table; a walkthrough is the programmer taking others through the code so they can find errors.

## Official syllabus

Questions are written against Cambridge International AS & A Level Computer Science 9618, syllabus for 2026 and syllabus for 2027, 2028 and 2029, Topic 12 Software Development. Examiner comments by series are on the [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
