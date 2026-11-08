---
title: "IGCSE Computer Science: Automated and Emerging Technologies — Practice Questions (Cambridge 0478)"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Automated and emerging technologies"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 6
syllabusTopics:
  - qualification: "igcse"
    topic: "automated-and-emerging-technologies"
description: "Original scenario questions with answers on automated lighting and irrigation, drones, surgical robots, expert systems and machine learning for IGCSE 0478."
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
> these alongside the official past papers available free from your board.

Related: [Automated and emerging technologies study guide](/resources/cambridge-igcse-computer-science-automated-and-emerging-technologies-study-guide/) and
[revision notes](/resources/igcse-computer-science-automated-and-emerging-technologies-revision-notes/)

The questions below cover all three parts of Topic 6 in the Cambridge IGCSE Computer Science 0478 syllabus (2026–2028): automated systems (6.1), robotics (6.2) and artificial intelligence (6.3). Every Section B question is set in a scenario, as on Paper 1, so each answer must refer to that scenario.

---

## Section A

**1.** State what is meant by robotics. **[1]**

**2.** Identify whether each device is a sensor or an actuator. **[3]**

(a) A motor that opens a window. (b) A light-dependent device that measures brightness. (c) A valve that releases water.

**3.** State **two** main characteristics of artificial intelligence. **[2]**

## Section B

**4.** A town council installs automatic street lighting. The lights must switch on when it gets dark and switch off when it gets light.

**(a)** Describe how a sensor, a microprocessor and an actuator are used together to control the lights. **[4]**
**(b)** Explain **two** advantages to the council of using this automated system rather than workers switching the lights. **[4]**
**(c)** Explain **one** disadvantage of the automated system. **[2]**

**5.** A farmer uses an automated irrigation system in a field of vegetables.

**(a)** Identify the most suitable sensor for this system. **[1]**
**(b)** Explain why the readings are taken continuously rather than once a day. **[2]**

**6.** A delivery company is testing drones to carry small parcels.

**(a)** Explain why a drone is classed as a robot. Refer to the characteristics of a robot. **[3]**
**(b)** Give **one** advantage and **one** disadvantage of delivering parcels by drone. **[2]**

**7.** A hospital uses a robot to help surgeons carry out operations.

Explain **two** advantages and **one** disadvantage of using the robot in this role. **[6]**

**8.** A plant identification app uses an expert system. The user answers questions about a plant's leaves and flowers, and the app suggests what the plant is.

**(a)** Name the component of the expert system that holds the facts about plants. **[1]**
**(b)** Describe how the expert system uses the user's answers to suggest a plant. **[4]**

**9.** An email service uses machine learning to filter out spam emails. Each time a user marks an email as spam, the filter becomes better at spotting similar emails.

**(a)** Explain why this is an example of machine learning. **[2]**
**(b)** Explain why an expert system with fixed rules would be less effective at this task over time. **[2]**

---

## Answers

**1.** A branch of computer science that incorporates the design, construction and operation of robots [1].

**2.** (a) Actuator [1]. (b) Sensor [1]. (c) Actuator [1].

**3.** Any two from: the collection of data; the rules for using that data; the ability to reason; the ability to learn and adapt [1 each, max 2].

**4. (a)** Any four from:
- a light sensor continually measures the light level [1]
- readings are sent to the microprocessor (converted by an ADC if analogue) [1]
- the microprocessor compares the reading with a stored threshold value [1]
- if the light level is below the threshold, the microprocessor sends a signal to the actuator to switch the lights on [1]
- if the light level rises above the threshold, it signals the actuator to switch the lights off [1]
- the process repeats continuously [1]

**(b)** Any two, each with an explanation linked to the street lights:
- The lights respond to the actual light level [1], so they come on early on a dark, stormy afternoon, which improves safety [1].
- They are never left on in daylight [1], so the council saves electricity and money [1].
- No workers are needed to switch hundreds of lights [1], reducing staff costs [1].

**(c)** If a light sensor fails or is covered by dirt [1], the light may stay on all day or not come on at night, and the system may not detect the fault until someone reports it [1]. Or: the cost of installing sensors and microprocessors on every light is high [1], so it takes time to save enough to cover it [1].

**5. (a)** Moisture sensor [1].
**(b)** Soil moisture changes throughout the day, for example in hot weather [1]; continuous readings mean water is supplied as soon as it is needed and stopped as soon as the soil is moist, so crops do not dry out and water is not wasted [1].

**6. (a)** It has a mechanical structure or framework (the body, rotors and parcel holder) [1]; it contains electrical components such as sensors (for example GPS or proximity), a microprocessor and actuators (motors that drive the rotors) [1]; and it is programmable, for example with a delivery route [1].
**(b)** Advantage: faster delivery that avoids road traffic / can reach remote places / lower labour costs [1]. Disadvantage: limited parcel weight / affected by bad weather / may be hacked or crash / privacy concerns [1].

**7.** Two advantages, each explained [2 each, max 4]:
- The robot is very precise and steady [1], so smaller cuts can be made and patients may recover faster [1].
- It does not get tired [1], so its accuracy stays the same during a long operation [1].
- It can be controlled remotely [1], so a specialist surgeon does not need to be in the same hospital [1].

One disadvantage, explained [2]:
- It is very expensive to buy and maintain [1], so fewer hospitals can afford it / money is not available for other care [1].
- If it malfunctions during an operation [1], the patient could be harmed, so a surgeon must always be ready to take over [1].
- Surgeons need extra training [1] before they can use it safely [1].

**8. (a)** Knowledge base [1].
**(b)** Any four from:
- the interface asks the user questions about the leaves and flowers [1]
- the answers are passed to the inference engine [1]
- the inference engine applies the rules in the rule base [1]
- to search the facts in the knowledge base for matching plants [1]
- it may ask further questions to narrow down the possibilities [1]
- the suggested plant (possibly with a probability) is output through the interface [1]

**9. (a)** The program automatically adapts its own processes/data [1] using the emails users mark as spam, so it improves without being reprogrammed [1].
**(b)** An expert system only applies the rules that were written into its rule base [1]. Spammers keep changing their messages, so fixed rules would miss new types of spam until a person updated the rules [1].

## Where marks are usually lost

- Q4(a): skipping the comparison with a stored value — the microprocessor's decision is a separate mark.
- Q4(b) and Q7: giving a correct general advantage that never mentions the street lights or surgery.
- Q6(a): listing characteristics without linking each one to the drone.
- Q8(b): describing what an expert system **is** rather than how it **processes** the answers.

## Frequently asked questions

**Which scenario areas can Paper 1 use for automated systems?**
The 0478 syllabus names industry, transport, agriculture, weather, gaming, lighting and science. Practise at least one example from each.

**How much detail do I need on expert systems?**
Know the four components (knowledge base, rule base, inference engine, interface) and be able to describe how they work together to reach a conclusion.

**Do I need to explain neural networks?**
No. The syllabus limits AI systems to expert systems and machine learning, with machine learning defined as a program adapting its own processes and/or data.
