---
title: "Cambridge O Level Computer Science (2210): Artificial intelligence -- Revision Notes"
seoTitle: "Cambridge O Level CS 2210 Artificial Intelligence Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge O Level Computer Science 2210 section 6.3: AI, its characteristics, expert system components, machine learning and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed notes for syllabus section 6.3, Artificial intelligence. For the full explanations and worked examples, use the [Artificial intelligence study guide](/resources/cambridge-o-level-computer-science-2210-artificial-intelligence/).

## Syllabus checklist

- What is meant by artificial intelligence (AI).
- The main characteristics of AI: the collection of data and the rules for using that data, the ability to reason, and (it can include) the ability to learn and adapt.
- The basic operation and components of AI systems that simulate intelligent behaviour, limited to expert systems and machine learning.

## Key terms

| Term | Definition |
|---|---|
| Artificial intelligence (AI) | A branch of computer science dealing with the simulation of intelligent behaviours by computers |
| Expert system | An AI system that simulates a human expert's decisions in one subject area |
| Knowledge base | The collection of facts about the subject |
| Rule base | The set of rules (IF ... THEN ...) for using the facts |
| Inference engine | The part that applies the rules to the facts and the user's answers to reach a conclusion |
| Interface | The screens through which the user enters data and sees results |
| Machine learning | When a program automatically adapts its own processes and/or data |
| Training data | Examples used to teach a machine learning system |

## The three characteristics of AI

1. **Data and rules:** it collects data and has rules for using it.
2. **Reasoning:** it draws conclusions from the data and rules.
3. **Learning and adapting:** it can include the ability to learn and adapt (not every AI does).

## Expert systems

### Components

| Component | Holds or does |
|---|---|
| Knowledge base | Facts from human experts |
| Rule base | IF-THEN rules |
| Inference engine | Reasons: searches the knowledge base and applies the rules |
| Interface | Takes input from the user and displays the output |

### Operation

1. The user answers questions at the **interface**.
2. The **inference engine** searches the **knowledge base**.
3. It applies the **rules** from the **rule base**.
4. The **conclusion** (and often a probability) is displayed.

### Example rules

- IF the plant has yellow leaves AND the soil is wet THEN the plant has too much water.
- IF the plant has yellow leaves AND the soil is dry THEN the plant needs water.

Answers "yellow leaves" and "soil wet" make the inference engine output "too much water".

### Strengths and limits

| Strengths | Limits |
|---|---|
| Available at any time | Only knows what was entered |
| Gives consistent answers | Wrong facts or rules give wrong answers |
| Stores more facts than one person | No common sense outside the subject |
| Can be used by non-experts | Needs experts to build and update it |

## Machine learning

- The program **adapts its own processes and/or data** automatically.
- It starts with **training data**, finds patterns and makes predictions.
- Results are checked and **feedback** is used to improve.
- The more data it has, the better it tends to become.

### Cycle

1. Receive training data.
2. Find patterns and adjust settings.
3. Make a prediction on new data.
4. Check the result and give feedback.
5. Adapt again.

### Uses

Spam filters, recommendations on streaming services, image and speech recognition, predicting traffic, detecting fraud.

## Expert system versus machine learning

| | Expert system | Machine learning |
|---|---|---|
| Rules written by | People (from experts) | Found by the program from data |
| Improves automatically? | No, people must update it | Yes, as it receives more data |
| Core parts | Knowledge base, rule base, inference engine, interface | Training data and an adaptable program |

## Answer templates

**State what is meant by AI (2 marks):** a branch of computer science; simulation of intelligent behaviours by computers.

**Describe the characteristics of AI (3 marks):** collects data and has rules for using it; can reason; can learn and adapt.

**Describe the components of an expert system (4 marks):** knowledge base of facts; rule base of IF-THEN rules; inference engine applies rules to facts; interface lets the user enter data and see results.

**Explain how machine learning works (3 marks):** trained with data; adapts its own processes and/or data; improves as feedback is received.

## Exam traps

- **Knowledge base and rule base swapped.** Facts versus rules.
- **Inference engine called a database.** It is the reasoning part.
- **"AI always learns."** It can include learning and adapting.
- **"Machine learning means the programmer changes the code."** The program adapts itself.
- **"An expert system is a robot."** It is software.
- **No example linked to the scenario.** Name the facts, rules or data used in the question.

## Self-test

1. What is AI?
2. State the three main characteristics of AI.
3. What is an expert system?
4. Name the four components of an expert system.
5. What does the knowledge base hold?
6. What is the form of a rule in the rule base?
7. What does the inference engine do?
8. What is the role of the interface?
9. What is machine learning?
10. Why does a machine learning system need training data?
11. Give one use of machine learning.
12. Give one difference between an expert system and machine learning.

**Answers**

1. A branch of computer science dealing with the simulation of intelligent behaviours by computers.
2. Collecting data and rules for using it; the ability to reason; it can include the ability to learn and adapt.
3. An AI system that simulates the decision-making of a human expert in a particular subject.
4. Knowledge base, rule base, inference engine, interface.
5. A collection of facts about the subject.
6. IF (condition) THEN (conclusion).
7. It searches the knowledge base and applies the rules to the user's answers to reach a conclusion.
8. It lets the user enter information and see the results.
9. When a program has the ability to automatically adapt its own processes and/or data.
10. It uses the examples to find patterns, so that it can make predictions about new data.
11. Any one: spam filtering; recommendations; image recognition; speech recognition; fraud detection.
12. In an expert system the rules are written by people; in machine learning the program finds patterns itself and adapts automatically.
