---
title: "O Level Computer Science: Automated and Emerging Technologies — Practice Questions (Cambridge 2210)"
resourceType: "practice-questions"
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
description: "Original exam-style questions with full worked answers on automated systems, robots, expert systems and artificial intelligence, for Cambridge O Level Computer Science (2210)."
author: "marlbridge-academic-team"
publishedDate: 2026-09-24
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Each question practises a skill tested in the June 2025 Paper 12. After each answer there is a mark-scheme insight or a tip and, where one matches, the real question to try next.

---

## Questions

**1.** A garage uses an expert system to help mechanics find faults in cars. The mechanic enters what is wrong with the car through the interface and the system outputs the most likely fault. Describe how the expert system decides which fault to output. **[4]**

**2.** An expert system has a knowledge base and a rule base. State the purpose of each. **[2]**

**3.** A warehouse uses robots to pick parcels from shelves.

**(a)** Name **two** electrical parts that such a robot would contain.

**(b)** State **one** other characteristic of a robot. **[3]**

**4.** An energy company uses a robot to inspect equipment inside a nuclear power station. An engineer controls the robot from an office in another city. Explain **two** advantages of using the remotely controlled robot for this inspection. **[4]**

**5.** An engineer in one city uses a network connection to control a robot that inspects equipment inside a power station in another city. Explain **one** disadvantage of controlling the robot remotely in this way. **[2]**

**6.** A plant nursery has an automated greenhouse that keeps the air temperature between 20 °C and 25 °C. Describe how the sensor, microprocessor and actuators work together to keep the temperature in this range. **[4]**

**7.** A music streaming service uses artificial intelligence (AI) to recommend songs.

**(a)** State **two** characteristics of AI.

**(b)** State what is meant by machine learning. **[3]**

---

## Answers

**1.** Any four from:

- The **inference engine** is used to decide on the fault [1].
- It **decides which question to ask the mechanic next** [1], **based on the answers already given** [1].
- The details entered are **compared with the facts in the knowledge base** [1].
- The inference engine **uses the IF…THEN rules to reason about the stored facts** and reach a conclusion [1].
- The most likely fault is output through the interface, often with a probability and an explanation [1]. (Max 4.)

*Mark-scheme insight (June 2025):* Credit depended on naming the inference engine and describing what it does: choosing the next question from earlier inputs, comparing the inputs with the knowledge base and applying the rule base. Simply listing the components of an expert system does not describe how the decision is made.

*Try the real question next:* Cambridge O Level Computer Science 2210, June 2025, Paper 12, Question 5.

**2.** The knowledge base is a **database of facts** about the subject, gathered from human experts [1]. The rule base is a **set of rules (IF … THEN …)** used by the inference engine to draw conclusions from those facts [1].

*Tip:* Keep the two apart: facts are stored in the knowledge base and rules in the rule base.

**3.** **(a)** Any two from: **sensors** [1]; **microprocessors** [1]; **actuators** [1]. (Max 2.)

**(b)** Any one from: it has a **mechanical structure or framework** [1]; it is **programmable** [1].

*Mark-scheme insight (June 2025):* The electrical components credited were sensors, microprocessors and actuators. Wheels and arms belong to the robot's mechanical structure, not its electrical components, so keep them out of part (a).

*Try the real question next:* Cambridge O Level Computer Science 2210, June 2025, Paper 12, Question 5.

**4.** Two advantages, each with one mark for the point and one for the explanation, for example:

- The engineer **does not need to be near the equipment** [1], **so they are not exposed to radiation** and the inspection is safer [1].
- The engineer **does not have to travel** to the power station [1], **so the inspection can start straight away and travel costs are saved** [1].
- The robot can be **more precise** than a human hand [1], **so it can reach small spaces and take accurate readings** [1].
- The company can use **the best specialist anywhere in the world** [1], **so the inspection is likely to be done well** [1].

*Mark-scheme insight (June 2025):* The credited advantages were linked by a "so…" expansion, for example no travel, so it can be done straight away by any specialist, or greater precision, so the work is more accurate and safer. Give the point and then the consequence.

*Try the real question next:* Cambridge O Level Computer Science 2210, June 2025, Paper 12, Question 5.

**5.** One disadvantage with its expansion, for example:

- The **network connection could be lost or delayed** [1], **so the engineer cannot control the robot and the inspection has to stop** [1].
- The robot **could be hacked** [1], **so someone could make it damage the equipment and cause a safety risk** [1].
- The control **data could be corrupted in transmission** [1], **so the robot carries out the wrong movement** [1].
- The robot is **expensive to buy and maintain** [1], **so money cannot be spent elsewhere** [1].

*Mark-scheme insight (June 2025):* One mark was for the disadvantage and the second for an expansion that matches it, so a lost connection must be followed by its effect (the work cannot continue), not by an unrelated point.

*Try the real question next:* Cambridge O Level Computer Science 2210, June 2025, Paper 12, Question 5.

**6.** Any four from:

- A **temperature sensor** continually measures the air temperature and sends readings to the microprocessor [1].
- The analogue reading is **converted to digital** by an ADC [1].
- The microprocessor **compares the reading with the stored values** of 20 °C and 25 °C [1].
- If the temperature is **below 20 °C**, the microprocessor **sends a signal to an actuator to switch on the heater** [1].
- If the temperature is **above 25 °C**, it sends a signal to an actuator to **open the windows or switch on a fan** [1].
- The process **repeats continuously** [1]. (Max 4.)

*Tip:* Name the sensor, say what the microprocessor compares the reading with, and say which actuator it switches on in each case. Remember that the sensor only measures; it does not decide anything.

**7.** **(a)** Any two from: the **collection of data and rules** [1]; the **ability to reason** [1]; the **ability to learn and adapt** [1]. (Max 2.)

**(b)** Machine learning is when a program **can change its own data and processes automatically**, using what it has learned from previous data (for example, the songs a user skipped), **without being reprogrammed by a person** [1].

*Tip:* Make the key idea clear: the program improves by itself as it meets more data.

---

## Where marks are usually lost

- Describing an expert system without mentioning the inference engine or how it uses the knowledge base and rule base.
- Giving mechanical parts (wheels, arms) when electrical components are asked for.
- Stating an advantage or disadvantage without the "so…" explanation that earns the second mark.
- Saying that the sensor controls the heater, rather than the microprocessor sending a signal to an actuator.
- Describing machine learning as "a computer that thinks", rather than a program that adapts its own data and processes.
