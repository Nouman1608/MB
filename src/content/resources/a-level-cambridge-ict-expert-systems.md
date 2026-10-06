---
title: "Cambridge A Level Information Technology (ICT): Expert systems (9626)"
seoTitle: "Cambridge A Level IT 9626: Expert Systems Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Expert systems"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 7
syllabusTopics:
  - qualification: "a-level"
    topic: "expert-systems"
description: "Study guide to expert systems for Cambridge AS & A Level IT 9626: components, scenarios, forward and backward chaining, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide covers **topic 7, Expert systems** (section 7.1) of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 3). It is AS Level content, so it is part of both the AS Level and the full A Level. The syllabus states that Paper 1 (Theory) questions are based on sections 1–11, so this topic is examined there. Paper 2 (Practical) candidates apply knowledge and understanding from sections 1–7, which includes this topic.

Use it with the [revision notes](/resources/a-level-cambridge-ict-expert-systems-revision-notes/) and the [practice questions](/resources/a-level-cambridge-ict-expert-systems-practice/). The course is on the [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/), and every outcome is on the [printable 9626 checklist](/checklists/cambridge/a-level/ict/). Not sure where your gaps are? Try a [free diagnostic](/diagnostics/).

## What this topic covers

| Syllabus section | What you must be able to do | Level |
|---|---|---|
| 7.1 Possible solutions | Explain how expert systems produce possible solutions for different scenarios | AS |
| 7.1 Components | Describe the user interface, inference engine, knowledge base (database of facts and rules base), explanation system and knowledge base editor | AS |
| 7.1 Scenarios | Apply expert systems to mineral prospecting, investment analysis, financial planning, insurance planning, car engine fault diagnosis, medical diagnosis, route scheduling for delivery vehicles, and plant and animal identification | AS |
| 7.1 Chaining | Explain backward and forward chaining, including IF…THEN constructs | AS |
| 7.1 Data driven and goal driven | Explain both terms and their use in diagnoses, gaming and AI for manipulating social media | AS |
| 7.1 Evaluation | Give advantages and disadvantages of expert systems | AS |

## What an expert system is and how it works

An **expert system** stores the knowledge of human experts in one field and uses it to reach conclusions as an expert would. A non-expert user describes a situation, usually by answering questions, and the system suggests **possible solutions**, often with a likelihood for each. "Possible" matters: the system gives the conclusions its rules support, and a person still decides what to do.

The same cycle runs in every scenario:

1. The **user interface** asks a question or accepts data.
2. The answer is added to the facts known about this case.
3. The **inference engine** compares the facts with the rules in the **knowledge base**.
4. When a rule's conditions are met, its conclusion becomes a new fact, which may trigger further rules or another question.
5. The system shows one or more possible solutions, often ranked or given a probability.
6. The **explanation system** shows why questions were asked and how conclusions were reached.

## The components

**User interface.** How the user communicates with the system. It asks questions on screen, often with yes/no or multiple-choice answers so input matches what the rules expect, and displays conclusions, advice and explanations.

**Inference engine.** The reasoning part. It takes the facts entered, searches the rules base for rules whose conditions match, fires them to reach new conclusions, decides what to ask next and passes the conclusions to the user interface. It uses forward chaining, backward chaining or both.

**Knowledge base.** The syllabus describes it as a **database of facts** plus a **rules base**.

- The **database of facts** holds known facts about the field, such as the features of each plant species or the symptoms linked with each fault.
- The **rules base** holds **IF…THEN** rules for reasoning with those facts, for example: IF the engine does not crank AND the headlights are dim THEN the battery charge is low.

The knowledge comes from human experts, usually gathered by a knowledge engineer.

**Explanation system.** Tells the user **how** a conclusion was reached (which facts and rules were used) and **why** a question is being asked. It may show a confidence level for each solution. This lets the user check the advice before acting on it.

**Knowledge base editor.** Lets facts and rules be **added, edited or deleted**, for example when a new car model is released or medical advice changes. It is used by the knowledge engineer or experts, not the everyday user.

## IF…THEN rules, forward chaining and backward chaining

Each rule has a condition (IF) and a conclusion (THEN). Conditions can be joined with AND or OR, and one rule's conclusion can be another rule's condition, so rules form chains. Compare the decisions in [algorithms and flowcharts](/resources/a-level-cambridge-ict-algorithms-and-flowcharts/).

**Forward chaining** starts with the **data** and works forward. The inference engine fires any rule whose IF part is satisfied, adds its conclusion as a new fact, then looks again. It stops when no rule adds anything new. Forward chaining is **data driven**.

**Backward chaining** starts with a **goal** (a possible conclusion) and works backward. The engine finds a rule whose THEN part is the goal and tries to prove each IF condition. Each condition becomes a sub-goal, proved from known facts, from another rule, or by asking the user. If a condition fails, the goal is rejected and the next goal is tried. Backward chaining is **goal driven**.

### Worked example 1: forward chaining (car engine fault diagnosis)

A simplified, fictional rules base:

```
R1  IF engine does not crank AND headlights are dim THEN battery charge is low
R2  IF battery charge is low AND battery is over 5 years old THEN advise: replace battery
R3  IF battery charge is low AND battery is 5 years old or less THEN advise: recharge and test charging system
R4  IF engine cranks AND fuel gauge reads empty THEN advise: refuel
R5  IF engine does not crank AND headlights are bright THEN advise: check starter motor
```

Facts entered: the engine does not crank; the headlights are dim; the battery is over 5 years old.

**Step 1.** R1: both conditions true, so R1 fires. New fact: *battery charge is low*.

**Step 2.** R2: battery charge is low (true) and battery over 5 years old (true), so R2 fires: *replace battery*.

**Step 3.** R3, R4 and R5 each need a fact that is false, so none fire. Another pass adds nothing, so the engine stops.

**Result:** rules fire in the order **R1, then R2**, and the advice is to **replace the battery**. The explanation system could show both rules and the facts each used.

### Worked example 2: backward chaining (plant identification)

A fictional rules base:

```
R1  IF leaves are hairy AND flowers are yellow THEN plant is W
R2  IF leaves are hairy AND flowers are white THEN plant is X
R3  IF leaves are smooth AND stem is square THEN plant is Y
R4  IF leaves are smooth AND stem is round THEN plant is Z
```

The system tests the goal "plant is X" first. The user's plant has hairy leaves and yellow flowers.

**Step 1.** Goal *plant is X* is concluded by R2.

**Step 2.** Sub-goal *leaves are hairy*: unknown and no rule concludes it, so the system asks. Yes.

**Step 3.** Sub-goal *flowers are white*: asked. No. R2 fails, so *plant is X* is rejected.

**Step 4.** Next goal *plant is W* (R1). *Leaves are hairy* is already known, so it is not asked again. *Flowers are yellow?* Yes.

**Result:** **plant is W**, after only three questions; the stem was never needed. If the user asks why flower colour is needed, the explanation system can reply: "I am testing whether the plant is W, and rule R1 needs the flower colour."

Each question tests **one feature**, as each step of a classification key should.

## Data driven and goal driven

Data driven reasoning starts from the facts available (forward chaining). Goal driven reasoning starts from a goal or hypothesis (backward chaining).

**In diagnoses.** Data driven: a patient's symptoms and test results, or a car's fault codes, are entered and the system works forward to every condition or fault the data supports. Goal driven: a doctor or mechanic suspects one cause, and the system works backward from it, asking only for the evidence needed to confirm or reject it.

**In gaming.** Data driven: a computer-controlled character reacts to the game state, such as the player's position: IF the player is within range THEN attack. Goal driven: the character has a goal, such as capturing an object, and works backward: to capture it, it must reach the room; to reach the room, it must open the door.

**In AI for manipulating social media.** Data driven: the system collects a user's likes, shares, viewing time and follows, and works forward to infer interests and choose which posts and adverts to show. Goal driven: the system starts from a goal, such as keeping the user online longer or making them see a particular message, and works backward to the content and timing most likely to achieve it.

## Scenarios

For each scenario, know the **inputs**, what the **knowledge base** holds and the **possible solutions** produced.

| Scenario | Inputs | Knowledge base holds | Possible solutions |
|---|---|---|---|
| Mineral prospecting | Survey results, rock samples, location | Conditions linked with mineral deposits | Likely deposit sites with probabilities; where to test drill |
| Investment analysis | Market data, company information, investor's aims | How investments behave; signs of risk | Buy, hold or sell, with risk levels |
| Financial planning | Income, spending, savings, debts, goals | Rules on budgeting, saving, pensions, loans | A saving, borrowing or retirement plan |
| Insurance planning | Age, claims history, property or vehicle details | Risk factors linked to likely claims | Risk level, type of cover, premium |
| Car engine fault diagnosis | Symptoms, fault codes, sensor readings | Faults and their symptoms | Likely faults and repairs |
| Medical diagnosis | Symptoms, test results, history | Conditions and their symptoms | Possible conditions with probabilities; further tests |
| Route scheduling for delivery vehicles | Addresses, time windows, vehicle capacity, road information | Road network, journey times, scheduling rules | Order of stops and route for each vehicle |
| Plant and animal identification | Observed features | Features of each species | Most likely species |

### Worked example 3 (Describe, 4 marks)

**Question.** Describe how an expert system would be used to help schedule routes for delivery vehicles.

**Model answer.** The planner enters the deliveries, addresses, time windows and vehicles available through the user interface [1]. The knowledge base holds the road network, journey times and rules such as vehicle capacity limits [1]. The inference engine applies the rules to the delivery data to decide which vehicle takes which parcels, and in what order [1]. It outputs a route and schedule for each driver, and the explanation system can show why, for example, a road closure moved a stop later [1].

Each mark is a separate point applied to deliveries.

## Advantages and disadvantages

| Advantages | Disadvantages |
|---|---|
| Consistent answers, no tiredness or mood | Only as good as its rules: errors give wrong advice |
| Available at any time, including remote places with no expert | No common sense; fails on cases outside its rules |
| Combines knowledge from several experts | Expensive and slow to build |
| Explains its reasoning, so advice can be checked | Must be updated regularly |
| Can be cheaper than employing many experts; can train non-experts | Users may over-rely on it; no empathy; unclear responsibility when wrong |

On "Evaluate", tie each point to the scenario. In medical diagnosis, "available at any time" becomes "a nurse in a remote clinic gets diagnostic support when no doctor is present", balanced by "it cannot see the patient or notice something its rules do not cover".

## Common errors

- Forgetting the knowledge base has **two** parts: database of facts and rules base.
- Mixing up the **inference engine** (reasons) and the **explanation system** (explains the reasoning).
- Saying the **knowledge base editor** is where users enter symptoms. That is the user interface.
- Swapping the chaining types. **Forward = data driven. Backward = goal driven.**
- Claiming an expert system "always gives the right answer".

## Where to go next

- [Expert systems revision notes](/resources/a-level-cambridge-ict-expert-systems-revision-notes/) and [practice questions](/resources/a-level-cambridge-ict-expert-systems-practice/)
- Previous topic: [The digital divide](/resources/a-level-cambridge-ict-the-digital-divide/)
- [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/), [9626 checklist](/checklists/cambridge/a-level/ict/) and [free diagnostics](/diagnostics/)

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, version 3 (published July 2025), Cambridge International, part of Cambridge University Press & Assessment. Topic 7, Expert systems, section 7.1.
