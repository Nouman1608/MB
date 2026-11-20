---
title: "Cambridge O Level Computer Science (2210): Artificial intelligence"
seoTitle: "Cambridge O Level CS 2210 Artificial Intelligence Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 6 – Automated and emerging technologies"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 6.3
syllabusTopics:
  - qualification: "o-level"
    topic: "automated-and-emerging-technologies-2210"
  - qualification: "o-level"
    topic: "automated-and-emerging-technologies-2210"
    subtopic: "artificial-intelligence-2210"
description: "Study guide to Cambridge O Level Computer Science 2210 section 6.3: what artificial intelligence is, its main characteristics, and the operation and components of expert systems and machine learning."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Section 6.3 of Cambridge O Level Computer Science 2210 has three learning statements. Candidates should understand **what is meant by artificial intelligence (AI)**, describe the **main characteristics of AI**, and explain the **basic operation and components of AI systems** that simulate intelligent behaviour. The guidance limits the systems to **expert systems** and **machine learning**. This guide takes them in order and uses worked examples so that you can explain the operation, not only name the parts.

## Part 1: what is artificial intelligence?

**Artificial intelligence** is a branch of computer science dealing with the **simulation of intelligent behaviours by computers**. The word "simulation" matters. An AI system behaves as if it were intelligent, for example by recognising a face, giving a medical diagnosis or playing a game well, but it does this by following programmed processes and data.

AI is different from an ordinary program. A normal program follows a fixed list of steps written for one job. An AI system uses large amounts of data and rules to deal with situations that are too varied for a fixed list, and some AI systems can improve with experience.

## Part 2: the main characteristics of AI

The syllabus gives three characteristics.

1. **The collection of data and the rules for using that data.** The AI needs data (facts, readings, examples) and rules that say how to use them. A weather forecasting AI needs past weather records and rules about how pressure, temperature and wind relate.
2. **The ability to reason.** The system draws conclusions from the data and rules. For example, from "the car will not start" and "the lights are dim", it can reason that the battery is likely to be flat.
3. **It can include the ability to learn and adapt.** Some AI systems change their own behaviour as they meet new data, becoming more accurate over time. This is the part that "can include", which means not every AI system learns.

| Characteristic | Everyday example |
|---|---|
| Data and rules | A chess program stores the rules of chess and a database of past games |
| Reasoning | A satnav compares routes and picks the quickest one given traffic |
| Learning and adapting | A music app learns which songs you skip and suggests better ones |

## Part 3: expert systems

An **expert system** is an AI system that simulates the decision-making of a human expert in one narrow area, such as medical diagnosis, mineral exploration or fault-finding in machinery. A user asks a question, and the expert system gives advice or a diagnosis, usually with a measure of how sure it is.

### The four components

| Component | What it is | Role |
|---|---|---|
| **Knowledge base** | A large collection of facts about the subject, gathered from human experts | The data the system draws on |
| **Rule base** | A set of rules, usually in the form IF (condition) THEN (conclusion) | Describes how to use the facts to reach conclusions |
| **Inference engine** | The part of the program that does the reasoning | Searches the knowledge base, applies the rules to the information the user gives, and reaches a conclusion |
| **Interface** | Screens and menus through which the user communicates with the system | Takes the user's answers in and displays the result |

### How an expert system operates

1. The user enters details at the **interface**, usually by answering questions.
2. The **inference engine** takes the answers and searches the **knowledge base** for matching facts.
3. The inference engine applies the rules in the **rule base** to reach a conclusion.
4. The result (and often the chance that it is right) is shown at the interface.

### Worked example: a car fault expert system

Suppose the rule base contains these rules:

- Rule 1: IF the engine does not turn over AND the lights are dim THEN the battery is flat.
- Rule 2: IF the engine does not turn over AND the lights are bright THEN the starter motor is faulty.
- Rule 3: IF the engine turns over but does not start AND the fuel gauge shows empty THEN the tank is empty.

The user answers the questions: "Does the engine turn over?" No. "Are the lights bright or dim?" Dim. The inference engine checks the rules against these answers. Rule 1 matches, so the system outputs "The battery is flat". Rules 2 and 3 do not match, because the lights are not bright and the engine does not turn over at all.

The more facts and rules the system has, the more accurate it can be. The knowledge base and rule base are built by interviewing experts and recording what they know.

### Uses, advantages and limits

- **Uses:** medical diagnosis, mineral prospecting, fault-finding, legal advice, financial planning.
- **Advantages:** available at any time, consistent, and can store far more facts than one person.
- **Limits:** it only knows what was entered, can be wrong if the facts or rules are wrong, and has no common sense outside its area.

## Part 4: machine learning

**Machine learning** is when a program has the **ability to automatically adapt its own processes and/or data**. Instead of the programmer writing every rule, the program is given examples and works out patterns itself, and then it improves as it gets more data.

### How machine learning operates

1. The system is given a large set of **training data**, often with the right answers attached.
2. It finds patterns and adjusts its own settings (its processes) or stores what it has found (its data).
3. It is then given new data and **makes a prediction or decision**.
4. The results are checked, **feedback** is given, and the system **adapts** again so that it improves.

### Worked example: a spam filter

An email program is given thousands of emails marked "spam" or "not spam".

- It notices that spam often contains words such as "winner" and "free prize", and comes from unknown senders.
- A new email arrives with "winner" and "free prize". The program decides that it is probably spam and moves it to the junk folder.
- The user marks a different email as spam. The program adds this to its data and adjusts its settings, so that similar emails are caught in future.

No one has written a rule for each of these messages. The program has changed its own processes and data as a result of what it has learned.

### Expert system versus machine learning

| | Expert system | Machine learning |
|---|---|---|
| Where the rules come from | Written in by people from human experts | Found by the program from the data |
| Changes over time? | Only when people update the knowledge base and rules | Adapts automatically as it receives more data |
| Typical use | Diagnosis, fault-finding | Spam filtering, recommendations, image recognition |
| Main components | Knowledge base, rule base, inference engine, interface | Training data and a program that adapts its processes and/or data |

## Worked example

**Question:** Describe how an expert system is used to diagnose a medical condition. [4]

> The doctor enters the patient's symptoms through the interface [1]. The inference engine searches the knowledge base for matching facts [1] and applies the rules in the rule base to the symptoms [1]. The system outputs the most likely condition at the interface [1].

## Common mistakes

- **Saying AI "thinks like a human".** It simulates intelligent behaviour.
- **Mixing up the knowledge base and the rule base.** The knowledge base holds facts. The rule base holds the rules for using them.
- **Calling the inference engine "the interface".** The engine reasons. The interface communicates with the user.
- **Saying every AI system learns.** The syllabus says it can include the ability to learn and adapt.
- **Describing machine learning as a person updating rules.** The program adapts itself.
- **Confusing AI with robotics.** A robot may use AI, but they are different topics.

## Exam technique

- **Define AI:** simulation of intelligent behaviours by computers.
- **Characteristics:** data and rules, reasoning, and (can include) learning and adapting.
- **Expert system questions:** name the four components and say what each does in the scenario.
- **Machine learning questions:** say the program changes its own processes and/or data, and give a feedback step.

## Quick check

1. What is AI? *A branch of computer science dealing with the simulation of intelligent behaviours by computers.*
2. Name the four parts of an expert system. *Knowledge base, rule base, inference engine, interface.*
3. Which part applies the rules? *The inference engine.*
4. What does machine learning let a program do? *Automatically adapt its own processes and/or data.*
5. Give one use of machine learning. *Spam filtering, recommendations or image recognition.*

## Continue with

Revise with the [Artificial intelligence revision notes](/resources/cambridge-o-level-computer-science-2210-artificial-intelligence-revision-notes/) and practise with the [Artificial intelligence practice questions](/resources/cambridge-o-level-computer-science-2210-artificial-intelligence-practice/).
