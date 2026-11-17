---
title: "IGCSE ICT: The Systems Life Cycle — Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes on the systems life cycle for Cambridge IGCSE ICT 0417: research methods, design, test data, changeover methods, documentation and evaluation."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: credited to harris-khan (accountable teacher, D-379)."
---

The systems life cycle is the sequence of stages used to replace or build an ICT system: analysis, design, development and testing, implementation, documentation and evaluation. Cambridge IGCSE ICT 0417 (Topic 7, Paper 1 Theory) expects you to describe each stage, compare the methods used within it and apply them to a scenario such as a shop, school or hospital.

Condensed for revision. For the full explanation, use the
[systems life cycle study guide](/resources/cambridge-igcse-ict-the-systems-life-cycle-study-guide/), then test yourself with the
[systems life cycle practice questions](/resources/cambridge-igcse-ict-the-systems-life-cycle-practice/).

## Syllabus coverage

| Syllabus ref | Content | Covered below |
|---|---|---|
| 7.1 Analysis | Research methods; inputs, outputs, processing and problems of the current system; user and information requirements; system specification (hardware and software) | Research methods table; analysis checklist |
| 7.2 Design | File/data structures, input formats, output formats, validation routines | Design checklist; validation table |
| 7.3 Development and testing | Need to test; test designs, strategies and plans; normal, abnormal and extreme data; live data | Test data worked example |
| 7.4 Implementation | Direct changeover, parallel running, pilot running, phased implementation | Changeover comparison table |
| 7.5 Documentation | Technical and user documentation and their components | Documentation table |
| 7.6 Evaluation | Efficiency, ease of use, appropriateness; compare with requirements; limitations, improvements, user responses | Evaluation checklist |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-ict-the-systems-life-cycle-study-guide--12-slc-cycle.webp" width="900" height="870" alt="Six boxes in a ring joined by clockwise arrows: 1 Analysis (requirements), 2 Design (test plan), 3 Development and testing (test data), 4 Implementation (changeover), 5 Documentation (technical and user) and 6 Evaluation (against the requirements). A gold arrow runs from Evaluation back to Analysis because evaluation can show new problems, which starts the analysis of the next version." loading="lazy">
  <figcaption>The six stages form a cycle because evaluation can start the next analysis.</figcaption>
</figure>

## Key definitions

| Term | Meaning |
|---|---|
| Requirements | What the users and the organisation need the new system to do |
| System specification | The hardware and software chosen, and justified, for the new system |
| Validation | An automatic check that data entered is reasonable and follows the rules (not that it is correct) |
| Test plan | A list of tests with the test data, expected outcome, actual outcome and any remedial action |
| Normal data | Valid data the system should accept |
| Abnormal data | Invalid data the system should reject |
| Extreme data | Valid data at the very edge of the accepted range, which should be accepted |
| Live data | Real data, with known results, used to test the system |
| Technical documentation | Documents for the people who maintain or upgrade the system |
| User documentation | Documents for the people who use the system |

## 7.1 What happens at the analysis stage?

The analyst researches the current system, records how it works and decides what the new one must do.

| Method | Advantage | Disadvantage |
|---|---|---|
| Observation | Sees what really happens; reliable first-hand information | People may work differently when watched; slow |
| Interviews | Can ask follow-up questions; detailed answers | Time-consuming; interviewee may not be honest face to face |
| Questionnaires | Many people at once; anonymous, so answers may be more honest; quick to analyse | Questions cannot be explained; low return rate; answers may be rushed |
| Examining existing documents | Shows the data actually used, the forms and reports | Documents may be out of date or hard to understand |

Analysis checklist (from the syllabus): identify the **inputs**, **outputs** and **processing** of the current system; identify **problems** with it; set the **user and information requirements** for the new system; then **identify and justify hardware and software** (the system specification).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-ict-the-systems-life-cycle-study-guide--13-slc-research-methods.webp" width="900" height="950" alt="A table of four research methods with one strength and one weakness each. Observation shows what really happens, but staff may behave differently when watched. Interviews give detailed answers and can be followed up, but they are time-consuming and only a few people can be asked. Questionnaires let many people answer quickly and are easy to analyse, but answers may be short or rushed and the response low. Examining documents shows the data, forms and reports used, but they may be out of date. Analysis ends with a requirements specification." loading="lazy">
  <figcaption>Each research method has one strength and one weakness.</figcaption>
</figure>

## 7.2 What is designed?

- **File/data structures**: field name, data type, field length, and coding of data (for example M for male, F for female).
- **Input formats**: data capture forms (paper or on-screen).
- **Output formats**: screen layouts and report layouts.
- **Validation routines**:

| Check | What it checks | Example |
|---|---|---|
| Range check | Value lies between limits | Mark from 0 to 100 |
| Character check | Only allowed characters are present | A name contains no digits |
| Length check | Number of characters is correct or within limits | Phone number has 11 digits |
| Type check | Data is the right type | Age is a number, not text |
| Format check | Data follows a pattern | Date entered as DD/MM/YYYY |
| Presence check | Field has not been left empty | Surname must be entered |
| Check digit | Extra digit calculated from the others detects errors | Final digit of an ISBN or barcode |

## 7.3 How is a system tested?

The system must be tested **before implementation** so faults are found when they are cheap to fix. Test **designs** cover data structures, file structures, input formats, output formats and validation routines. Test **strategies** test each module, each function and then the whole system.

### Worked example: test data for a range check

Rule: a shoe size field accepts whole numbers from 3 to 12.

| Type | Data | Expected outcome |
|---|---|---|
| Normal | 7 | Accepted |
| Extreme | 3 | Accepted |
| Extreme | 12 | Accepted |
| Abnormal | 2 | Rejected with an error message |
| Abnormal | 13 | Rejected |
| Abnormal | seven | Rejected (wrong type) |

After testing with this data the system can be run with **live data** and its results compared with the known results from the old system. If an actual outcome differs from the expected outcome, the test plan records the **remedial action**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-ict-the-systems-life-cycle-study-guide--14-slc-test-data.webp" width="900" height="940" alt="A number line from 9 to 18 with the valid range 11 to 16 shaded. Test values: 10 is abnormal and rejected; 11 is extreme and accepted; 13 is normal and accepted; 16 is extreme and accepted; 17 is abnormal and rejected. The word &quot;ten&quot; is abnormal and rejected because it is the wrong data type. Values 10 and 17 are outside the range, so they are abnormal, not extreme." loading="lazy">
  <figcaption>Values 11 to 16 are accepted; 11 and 16 are extreme, 13 normal, and 10, 17 and &quot;ten&quot; abnormal.</figcaption>
</figure>

## 7.4 Which changeover method should be used?

| Method | How it works | Advantage | Disadvantage |
|---|---|---|---|
| Direct changeover | Old system stops, new one starts immediately | Fast; cheapest; benefits are immediate | No fallback if the new system fails |
| Parallel running | Old and new systems run together | Old system is a backup; outputs can be compared | Costly; staff do the work twice |
| Pilot running | New system is used in one branch or department first | Failure affects only one area; staff there can train others | Slower to roll out everywhere |
| Phased implementation | One part (module) of the new system is introduced at a time | Problems are limited to one part | Takes a long time to complete |

Choose by risk and cost in the scenario: a hospital or bank should avoid direct changeover; a small organisation with low-risk data may use it.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-ict-the-systems-life-cycle-study-guide--15-slc-changeover.webp" width="900" height="1034" alt="Four timelines, each showing the old system in grey and the new system in teal. Direct changeover: the old system stops and the new one starts at once; cheap and quick but with no fallback. Parallel running: both systems run side by side for a time; safest but costs the most. Phased implementation: parts A, B and C switch to the new system one at a time; problems are limited but the change is slower. Pilot running: one branch switches first while the others wait; only a small part is affected if it fails. The diagram is schematic and not to scale." loading="lazy">
  <figcaption>Direct, parallel, phased and pilot changeover differ in when old and new systems run.</figcaption>
</figure>

## 7.5 What goes in technical and user documentation?

| Technical documentation only | Both | User documentation only |
|---|---|---|
| Program listing, program language, program flowcharts/algorithms, system flowcharts, file structures, list of variables, validation routines | Purpose of the system, limitations, hardware and software requirements, input format, output format, sample runs | How to load/run/install, save a file, print data, add, delete or edit records; error messages and error handling; troubleshooting guide/helpline; FAQs; glossary of terms |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-ict-the-systems-life-cycle-study-guide--16-slc-documentation.webp" width="900" height="932" alt="Two columns. Technical documentation, for the people who maintain or upgrade the system, includes the purpose of the system, hardware and software requirements, flowcharts, program listings or settings, file structures, input and output formats, validation rules and test results. User documentation, for the people who use the system, includes how to log in, how to use features, example screens, error messages and what to do, troubleshooting tips and frequently asked questions. The content must match the audience." loading="lazy">
  <figcaption>Technical documentation is for maintainers and user documentation is for users.</figcaption>
</figure>

## 7.6 How is a new system evaluated?

- Judge the **efficiency**, **ease of use** and **appropriateness** of the solution.
- **Compare** the solution with the original task requirements.
- Identify **limitations** and necessary **improvements**.
- Evaluate the **users' responses** to the results of testing the system.

## Common mistakes and exam traps

- Calling out-of-range values (2 or 13 above) "extreme". Extreme data is valid and is accepted.
- Saying validation makes data correct. It only checks that data is reasonable; verification checks it was copied accurately.
- Giving a list of research methods without linking an advantage or disadvantage to the scenario in the question.
- Describing pilot and phased implementation the same way. Pilot = one location gets the whole system; phased = everyone gets one part at a time.
- Putting "error messages" or "how to save a file" in technical documentation. These are for users.
- Writing "see if it works" for evaluation instead of "compare against the original requirements".

## Frequently asked questions

**What are the six stages of the systems life cycle in IGCSE ICT 0417?**
Analysis, design, development and testing, implementation, documentation and evaluation. They form a cycle, because evaluation can identify improvements that start a new analysis.

**What is the difference between extreme and abnormal test data?**
Extreme data is valid data on the boundary of the accepted range and should be accepted. Abnormal data is outside the range or of the wrong type and should be rejected.

**Which implementation method is the safest?**
Parallel running, because the old system continues as a backup and outputs can be compared. It is also the most expensive, because the work is done twice.

**Why is live data used after normal, abnormal and extreme data?**
Live data is real data whose results are already known, so it shows the system works in real conditions and gives the same results as the old system.

## Self-test

1. Give one advantage of questionnaires over interviews.
2. Name the check that would stop a date being typed as 2026/11/08 when DD/MM/YYYY is required.
3. A field accepts 1 to 50. Give one extreme value and one abnormal value.
4. Which changeover method introduces the new system in one branch first?
5. Give two items found only in technical documentation.
6. State two things an evaluation compares or judges.

*Answers: 1 many people at once / anonymous / quicker to analyse; 2 format check; 3 extreme 1 or 50, abnormal 0, 51 or text; 4 pilot running; 5 any two of program listing, flowcharts, list of variables, file structures, validation routines; 6 any two of efficiency, ease of use, appropriateness, comparison with requirements.*

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, section 3 Subject content, Topic 7 "The systems life cycle" (7.1–7.6).
