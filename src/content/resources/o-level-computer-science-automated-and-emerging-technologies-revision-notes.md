---
title: "O Level Computer Science: Automated and Emerging Technologies — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["o-levels"]
topic: "Automated and Emerging Technologies"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 6
syllabusTopics:
  - qualification: "o-level"
    topic: "automated-and-emerging-technologies-2210"
description: "Recall notes for Topic 6 of Cambridge O Level Computer Science 2210: the control loop, automation pros and cons, robots, expert systems and machine learning."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

Topic 6 of Cambridge O Level Computer Science (2210) rewards a small set of definitions applied carefully to scenarios: the sensor–microprocessor–actuator loop, the three characteristics of a robot, the characteristics of AI, the four parts of an expert system and the meaning of machine learning. These notes give each in exam-ready form, with answer frames you can reuse on Paper 1.

Condensed for the final weeks. For the full explanation and scenario tables, use the
[Automated and emerging technologies study guide](/resources/o-level-computer-science-automated-and-emerging-technologies/); for practice, use the
[practice questions](/resources/o-level-computer-science-automated-and-emerging-technologies-practice/).

## Syllabus coverage (2210, 2026–2028)

| Ref | What you must be able to do |
|---|---|
| 6.1.1 | Describe how sensors, microprocessors and actuators work together in automated systems |
| 6.1.2 | Describe advantages and disadvantages of an automated system in a given scenario |
| 6.2.1 | Understand what is meant by robotics |
| 6.2.2 | Describe the characteristics of a robot |
| 6.2.3 | Understand the roles robots perform and the advantages and disadvantages of their use |
| 6.3.1 | Understand what is meant by AI |
| 6.3.2 | Describe the main characteristics of AI |
| 6.3.3 | Explain the operation and components of expert systems and machine learning |

## Definitions to learn word for word

| Term | Definition |
|---|---|
| Robotics | A branch of computer science that incorporates the design, construction and operation of robots |
| Artificial intelligence | A branch of computer science dealing with the simulation of intelligent behaviours by computers |
| Machine learning | When a program has the ability to automatically adapt its own processes and/or data |

## Answer frame: "Describe how this automated system works" (4 marks)

1. A **[named] sensor** continuously measures **[quantity]** and sends the data to the microprocessor.
2. The **microprocessor compares** the reading with a **stored value / range**.
3. If the reading is **[above/below]** the value, the microprocessor **sends a signal to the [named] actuator**, which **[action]**.
4. This **repeats continuously**.

Example — an automatic car-wash: a proximity sensor detects the car's position; the microprocessor compares it with the stored stopping position; when the car reaches it, the microprocessor signals the motors to start the brushes; the sensor keeps monitoring so the brushes follow the car.

## Answer frame: advantages and disadvantages

Write **point + "so…" + context**. The second mark in Cambridge mark schemes usually goes for the expansion.

| Generic point | Turned into a scored point (automated factory paint line) |
|---|---|
| Works continuously | The line runs 24 hours a day, so more cars are painted each week |
| More accurate | Each car gets the same thickness of paint, so fewer need repainting |
| Safer | Workers are not exposed to paint fumes, so health risks are lower |
| Expensive | The robots and sensors cost a lot to buy, so it takes years to recover the cost |
| Job losses | Fewer painters are needed, so local unemployment may rise |
| Breakdowns | If a sensor fails, the whole line may stop, so production is lost |

## Robot checklist

A robot must have **all three**:

1. mechanical structure or framework
2. electrical components — sensors, microprocessors, actuators
3. programmable

Syllabus examples: factory equipment, domestic robots, drones. Areas of use: industry, transport, agriculture, medicine, domestic settings, entertainment.

## AI in two boxes

**Characteristics of AI:** collection of data and rules for using that data · ability to reason · can include the ability to learn and adapt.

**Expert system components and roles:**

| Component | Role |
|---|---|
| Knowledge base | Facts about the specialist area |
| Rule base | Rules for applying the facts |
| Inference engine | Uses the rules, facts and user inputs to reach a conclusion; chooses the next question |
| Interface | Asks the questions and shows the conclusion |

**Machine learning vs expert system:** an expert system follows the rules it was given; a machine-learning program changes its own processes or data as it receives more data.

## 2210 and its sibling syllabus

Topic 6 in 2210 has the same learning outcomes as Topic 6 in Cambridge IGCSE Computer Science (0478), so any 0478-endorsed resource covers it.

## Exam traps

Drawn from our [practice page](/resources/o-level-computer-science-automated-and-emerging-technologies-practice/), which paraphrases the Cambridge 2210 June 2025 mark schemes and lists where marks are usually lost:

- The credited expert-system answer used the **inference engine** and said it **chooses the next question from earlier inputs**. Mention it by name.
- When asked for electrical components of a robot, the credited answers were **sensors, microprocessors and actuators** — wheels and arms are mechanical, so they score nothing there.
- Advantages and disadvantages earned a second mark only for a matching "so…" expansion.
- The sensor never "controls" anything; the microprocessor sends the signal to the actuator.
- "A computer that thinks" is not a definition of machine learning.

## Frequently asked questions

**Is a drone a robot?**
Yes. It has a mechanical framework, electrical components (sensors, a microprocessor, motors) and is programmable, for example with a flight path. The 2210 syllabus lists drones as an example.

**Can an automated system work without a microprocessor?**
Not in the sense the syllabus uses. The microprocessor is the part that processes sensor data and decides whether the actuator should act.

**What does the inference engine do?**
It applies the rules in the rule base to the facts in the knowledge base and the user's answers, decides which question to ask next and reaches a conclusion.

## Self-test

1. Name the component that produces movement in an automated system.
2. Give the three characteristics of a robot.
3. State the three main characteristics of AI.
4. Which component of an expert system stores IF–THEN rules?
5. A photo app gets better at recognising faces as users tag more photos. Explain why this is machine learning.

**Answers:** 1. The actuator. 2. Mechanical structure or framework; electrical components such as sensors, microprocessors and actuators; programmable. 3. Collection of data and the rules for using that data; the ability to reason; the ability to learn and adapt. 4. The rule base. 5. The program adapts its own data/processes automatically from the tagged photos, improving without being reprogrammed.
