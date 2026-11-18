---
title: "Cambridge IGCSE ICT (0417): Expert systems"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 6: ICT applications"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 6.8
syllabusTopics:
  - qualification: "igcse"
    topic: "ict-applications"
    subtopic: "expert-systems-0417"
description: "The components of an expert system, how it reaches possible solutions, how one is built, and its named uses and limits, for Cambridge IGCSE ICT 0417 6.8."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Subtopic 6.8 of Cambridge IGCSE ICT 0417 covers the "characteristics, uses and purpose of expert systems", seven named uses, the "components of an expert system: user interface, inference engine, knowledge base, rules base, explanation system" and "how an expert system is used to produce possible solutions for different scenarios". The [ICT Applications study guide](/resources/igcse-ict-applications-systems/) gives a table of the components. This guide traces a diagnosis through the rules, explains how a system is built, and applies the idea to each named use.

## Purpose and characteristics

An **expert system** is software that imitates the knowledge and reasoning of a human expert in one narrow area, so that a non-expert, or an expert wanting a second opinion, can reach a decision.

Characteristics:

- It works in a **single specialist area**, such as car engines or plant identification.
- It holds facts and rules gathered from **human experts**.
- It **asks the user questions**, often with yes/no or multiple-choice answers, and the next question depends on the previous answer.
- It suggests **possible solutions**, often with a **probability** or level of confidence, rather than one certain answer.
- It can **explain** how it reached its conclusion.

## The five components

| Component | What it does | In a car fault system |
|---|---|---|
| User interface | The screens through which the system asks questions and shows results | "Does the engine turn over when you turn the key?" |
| Knowledge base | Stores the facts about the subject | Facts about batteries, starter motors, fuel and ignition faults |
| Rules base | Stores the rules, usually IF ... THEN ..., that link facts to conclusions | IF engine does not turn over AND lights are dim THEN battery may be flat |
| Inference engine | The reasoning part: applies the rules to the user's answers and the knowledge base, decides which question to ask next, and reaches conclusions | Matches the answers to the rules and finds which rule applies |
| Explanation system | Shows the user the reasoning behind a conclusion | "Battery suspected because you said the engine did not turn over and the lights were dim" |

The key difference: the **knowledge base** holds facts, the **rules base** holds rules, and the **inference engine** uses both. Mixing these up is a common lost mark.

## How an expert system produces possible solutions

1. The user interface asks an opening question.
2. The user's answer is passed to the inference engine.
3. The inference engine searches the rules base for rules that match the answers so far, using facts in the knowledge base.
4. It chooses the next most useful question and the interface asks it.
5. Steps 2 to 4 repeat until a rule's conditions are fully met, or no more questions are useful.
6. The system displays one or more possible solutions, often with a probability.
7. The explanation system can show which answers and rules led to the result.

### Worked example: tracing a car fault

The rules below are simplified for illustration.

- **Rule 1**: IF the engine does not turn over AND the dashboard lights are dim THEN the likely cause is a flat battery.
- **Rule 2**: IF the engine does not turn over AND the dashboard lights are bright THEN the likely cause is a faulty starter motor.
- **Rule 3**: IF the engine turns over but does not start AND the fuel gauge shows empty THEN the cause is no fuel.
- **Rule 4**: IF the engine turns over but does not start AND the fuel gauge is not empty THEN possible causes are a fuel supply or ignition fault; further tests are needed.

**The session:**

| Step | System asks | User answers | Inference engine |
|---|---|---|---|
| 1 | Does the engine turn over? | No | Rules 3 and 4 can no longer apply; rules 1 and 2 remain |
| 2 | Are the dashboard lights dim? | Yes | Rule 1's conditions are now all true |
| 3 | Shows result | | "Likely cause: flat battery. Suggested action: test or recharge the battery" |
| 4 | User clicks "Why?" | | Explanation system lists the two answers and Rule 1 |

Notice that the system never asked about fuel: the inference engine skipped questions that could no longer change the result. A real system has many more rules, and might give results such as "flat battery: high probability; faulty connection: low probability".

## How an expert system is built

1. **Gather knowledge** from human experts by interviews and questionnaires, and from manuals and past cases.
2. **Create the knowledge base** of facts.
3. **Create the rules base** of IF ... THEN rules.
4. **Design the inference engine** that will apply the rules.
5. **Design the user interface** and the explanation system.
6. **Test** the system using problems whose answers are already known, and compare its conclusions with the experts'.
7. **Update** the knowledge and rules as new information appears.

## The named uses

| Use | User provides | System suggests |
|---|---|---|
| Mineral prospecting | Geological data: rock types, soil and sample test results, survey readings for a site | The probability of finding a mineral or oil there, and where to drill |
| Car engine fault diagnosis | Symptoms, answers to questions, readings from the car's computer | Likely faults and repairs |
| Medical diagnosis | Symptoms, test results, medical history | Possible illnesses with probabilities, further tests, possible treatments |
| Chess games | Current positions of the pieces | The next move, based on rules and strategies |
| Financial planning | Income, savings, age, attitude to risk | Suitable savings or investment options |
| Route scheduling for delivery vehicles | Delivery addresses, time slots, vehicle capacity, traffic | The order of stops and the best route for each vehicle |
| Plant and animal identification | Features such as leaf shape, flower colour, markings, habitat | The probable species |

## Advantages and disadvantages

**Advantages**

- **Consistent** answers: the same inputs always give the same output, and the system does not get tired.
- **Fast**: many rules are checked in a moment.
- **Available at any time**, and in many places at once, unlike a single human expert.
- **Combines the knowledge of several experts**.
- Lets **non-experts** make good decisions, such as a trainee mechanic or a nurse in a remote clinic.
- Can **explain** its reasoning, which helps training.
- **Reduces cost** of employing experts for routine decisions.

**Disadvantages**

- **Only as good as its knowledge and rules**: a missing or wrong rule gives a wrong result.
- **Lacks common sense** and cannot deal with situations outside its rules.
- **Expensive and slow to build**, and must be **kept up to date**.
- Users may **trust it blindly** instead of questioning an odd result.
- In medicine, it lacks the **empathy** and judgement of a human doctor, and patients may not want to be diagnosed by a computer.
- Needs trained staff to set it up and maintain it.

## Common mistakes

- Saying the knowledge base contains the rules. It holds facts; the rules base holds rules.
- Saying the system gives "the answer". It gives **possible** solutions, often with probabilities.
- Describing the inference engine as "a search engine". It applies rules to reach conclusions.
- Listing uses without saying what is input and what is output.
- Leaving out the explanation system when asked for all the components.

## Exam technique

- **Name** or **state** components: use the exact five terms from the syllabus.
- **Describe** how a system produces a solution: questions, answers to the inference engine, rules applied to the knowledge base, possible solutions with probabilities, explanation.
- **Describe** how one is set up: gather knowledge from experts, build the knowledge and rules bases, design the interface, test with known cases.
- **Evaluate**: weigh consistency and availability against lack of common sense and dependence on correct rules.

## Keep going

- [Expert systems revision notes](/resources/cambridge-igcse-ict-0417-expert-systems-revision-notes/)
- [Expert systems practice questions](/resources/cambridge-igcse-ict-0417-expert-systems-practice/)
- [Computers in medicine study guide](/resources/cambridge-igcse-ict-0417-computers-in-medicine/)

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 6 "ICT applications", 6.8 Expert systems.
