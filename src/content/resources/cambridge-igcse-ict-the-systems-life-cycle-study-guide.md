---
title: "Cambridge IGCSE ICT (0417): The systems life cycle -- Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 7: The systems life cycle"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 7
syllabusTopics:
  - qualification: "igcse"
    topic: "the-systems-life-cycle"
  - qualification: "igcse"
    topic: "the-systems-life-cycle"
    subtopic: "analysis-0417"
  - qualification: "igcse"
    topic: "the-systems-life-cycle"
    subtopic: "design-0417"
  - qualification: "igcse"
    topic: "the-systems-life-cycle"
    subtopic: "development-and-testing-0417"
  - qualification: "igcse"
    topic: "the-systems-life-cycle"
    subtopic: "implementation-0417"
  - qualification: "igcse"
    topic: "the-systems-life-cycle"
    subtopic: "documentation-0417"
  - qualification: "igcse"
    topic: "the-systems-life-cycle"
    subtopic: "evaluation-0417"
description: "Analysis, design, development and testing, implementation, documentation and evaluation in the systems life cycle, for Cambridge IGCSE ICT 0417 Topic 7."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

The systems life cycle is the series of stages that an organisation follows when it replaces or builds an ICT system, from finding out what is wrong with the current one to judging whether the new one works. Cambridge IGCSE ICT 0417 lists six stages: analysis, design, development and testing, implementation, documentation and evaluation. You are expected to know what happens at each stage, the methods used, and why one method might be chosen over another.

## Where this fits in the specification

Topic 7 is a theory topic. It links to data handling (validation and verification), to safety and security (protecting the data in a new system) and to the effects of ICT on organisations. Paper questions usually set a scenario, such as a school replacing its paper library records, and ask you to apply the stage to that scenario rather than recite a definition.

The stages are best seen as a cycle. The evaluation of a finished system often shows new problems, which starts the analysis of the next version.

## 7.1 Analysis

Analysis is about understanding the existing system and deciding what the new one must do.

**Methods of researching the current system**

| Method | Strength | Weakness |
|---|---|---|
| Observation | Shows what really happens, not what people say | Staff may behave differently when watched; takes time |
| Interviews | Detailed answers; questions can be followed up | Time-consuming; only a few people can be asked |
| Questionnaires | Many people can answer quickly; easy to analyse | Answers may be short, rushed or untruthful; low response |
| Examining existing documents | Shows the data used and the forms and reports produced | Documents may be out of date and do not show how they are used |

Analysis also identifies the **problems** with the current system, sets out the **requirements** of the user and the organisation, and produces a **requirements specification**, which is the agreed list of what the new system must do. Inputs, outputs and processing are identified here. The analyst also considers possible solutions and recommends one, weighing the costs and benefits.

## 7.2 Design

Design turns the requirements into a plan for the new system. Typical design tasks:

- **Data capture forms** and **screen layouts**, sketched with the fields, labels and the order of data entry.
- **Report layouts** for printed or screen output.
- **File or database structure**: field names, data types and field lengths, and the key field.
- **Validation routines** to catch unreasonable data on entry (range check, length check, type check, presence check, format check, check digit).
- **Verification** methods to make sure data copied is the same as the source, such as visual checking or double data entry.
- Choosing the **hardware and software** needed.
- A **test plan** describing what will be tested and with what data.

Remember that validation checks whether data is sensible, not whether it is right. A date of birth that is the wrong year can still pass a range check.

## 7.3 Development and testing

In this stage the system is built from the design: files and databases are created, input and output screens are made, validation is added and the system is tested.

### Test data

Testing uses three types of data, with an agreed expected result for each:

- **Normal data**: valid values the system should accept.
- **Abnormal data**: invalid values the system should reject, such as text in a number field.
- **Extreme data**: the largest and smallest valid values, which are on the edge of the accepted range. (Some mark schemes call the extremes boundary data.)

### Worked example: choosing test data

A school stores a pupil's age in years. The validation rule is a range check: the age must be between 11 and 16 inclusive.

| Test | Data | Expected result | Why |
|---|---|---|---|
| Normal | 13 | Accepted | Inside the range |
| Extreme | 11 | Accepted | Lowest valid value |
| Extreme | 16 | Accepted | Highest valid value |
| Abnormal | 10 | Rejected | Just below the range |
| Abnormal | 17 | Rejected | Just above the range |
| Abnormal | "ten" | Rejected | Wrong data type |

A frequent exam error is calling 10 or 17 extreme data. They are outside the range, so they are abnormal. In a test plan table you need the test, the data, the expected outcome and, once the test is run, the actual outcome.

After testing with test data, the system may be tested with **live data**, which is real data whose results are already known from the old system.

## 7.4 Implementation

Implementation means changing from the old system to the new one. There are four methods:

- **Direct changeover**: the old system is stopped and the new one starts at once. It is cheap and quick, but if the new system fails there is nothing to fall back on.
- **Parallel running**: both systems run side by side for a time. It is the safest because results can be compared, but it costs the most, since all work is done twice.
- **Phased implementation**: the new system is introduced one part at a time. Problems are limited to a single part, but the full change takes longer.
- **Pilot running**: the new system is tried in one branch or department first. If it fails, only a small part of the organisation is affected, but other sites wait for the benefits.

To choose, think about the risk. A bank handling payments would rarely use direct changeover, whereas a small club with a low-risk membership list might. Staff **training** and **data transfer** (file conversion) also take place around implementation.

## 7.5 Documentation

Two main types of documentation are produced.

**Technical documentation** is for the people who maintain or upgrade the system. It includes the purpose of the system, the hardware and software requirements, flowcharts, program listings or settings, the file structures, the input and output formats, the validation rules and the test results.

**User documentation** is for the people who use the system. It includes how to log in and use features, example screens, a list of error messages with what to do, troubleshooting tips and frequently asked questions.

The test for a good answer is the audience. Technical detail in a user guide would confuse users, and a user guide would not help an engineer upgrade the system.

## 7.6 Evaluation

Evaluation takes place after the system has been used for some time. The evaluator:

- Checks whether the system **meets the requirements** in the original specification.
- Tests how **easy it is to use**, perhaps through feedback from users.
- Assesses how **efficient** it is (time and resources saved).
- Checks **user satisfaction** and the **appropriateness** of the solution.
- Identifies **limitations** and proposes **improvements**.

Evidence comes from comparing the results with the requirements specification, from user questionnaires and from test results.

## Common mistakes

- Putting stages in the wrong order, or describing what happens at implementation when the question is about analysis.
- Calling test data that falls outside the range extreme rather than abnormal.
- Writing "to see if it works" as a purpose for evaluation. Say that you compare the system against the original requirements.
- Describing validation as proving that data is correct.
- Recommending parallel running in every case. State the cost and justify the method with the scenario.

## Exam technique

Command words: **describe** means give the main features of a stage; **explain** means give a reason; **justify** means give a reason linked to the scenario; **compare** needs a point about both sides. Use the vocabulary exactly (requirements specification, test plan, technical documentation, direct changeover) and tie each point to the organisation in the question. Links to other topics help, for example the need for secure back-ups during data transfer.

## Check your understanding

1. State two methods of finding out how the current system works. *Observation, interviews, questionnaires or examining documents.*
2. Why might a questionnaire be less reliable than an interview? *People may answer quickly or untruthfully, and the analyst cannot ask follow-up questions.*
3. A field accepts a quantity from 1 to 50. Give one example each of normal, extreme and abnormal data. *Normal 25; extreme 1 or 50; abnormal 0, 51 or text.*
4. Name the implementation method that runs both systems together and give one disadvantage. *Parallel running; it is expensive because all work is done twice.*
5. Give two items found in technical documentation but not usually in user documentation. *Flowcharts, program listings, file structures or hardware requirements.*
6. Why would a hospital avoid direct changeover for patient records? *If the new system fails there is no working backup, which risks patient safety.*
7. State two things checked during evaluation. *Whether it meets the requirements and whether it is easy to use or efficient.*
8. What is the purpose of a test plan? *It lists what will be tested, with which data, and the expected results so that actual results can be compared.*

## Frequently asked questions

**What are the stages of the systems life cycle in IGCSE ICT?**
Cambridge IGCSE ICT (0417) lists six stages: analysis, design, development and testing, implementation, documentation and evaluation. Evaluation often reveals new problems, which starts the analysis of the next version.

**What are normal, abnormal and extreme test data?**
Normal data is valid data the system should accept, abnormal data is invalid data it should reject, such as text in a number field, and extreme data is the largest and smallest valid values on the edge of the accepted range.

**What is a requirements specification?**
A requirements specification is the agreed list of what the new system must do, produced at the end of analysis after researching the current system and identifying its problems and the users' requirements.

**How should systems life cycle questions be answered?**
Exam questions usually set a scenario, so apply each point to the organisation in the question rather than reciting a definition, and use the exact vocabulary such as test plan, technical documentation and direct changeover.
