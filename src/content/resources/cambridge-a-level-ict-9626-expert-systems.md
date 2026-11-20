---
title: "Cambridge A Level Information Technology (9626): Expert systems"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Topic 7 – Expert systems"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 7.1
syllabusTopics:
  - qualification: "a-level"
    topic: "expert-systems"
  - qualification: "a-level"
    topic: "expert-systems"
    subtopic: "expert-systems-content"
description: "Cambridge 9626 IT section 7.1 study guide: expert system components, scenarios, forward and backward chaining with IF...THEN rules, data and goal driven systems, and evaluation."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide teaches **section 7.1 Expert systems** of Topic 7 in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is AS Level content, examined in Paper 1 Theory. The [expert systems overview](/resources/a-level-cambridge-ict-expert-systems/) gives a summary; this page explains each component, works through forward and backward chaining step by step, and shows how to evaluate an expert system. Use it with the [expert systems practice questions](/resources/cambridge-a-level-ict-9626-expert-systems-practice/).

## What section 7.1 covers

| Syllabus point | What you must be able to do |
|---|---|
| Use | Explain how expert systems produce possible solutions for different scenarios |
| Components | Describe the user interface, inference engine, knowledge base (a database of facts and a rules base), explanation system and knowledge base editor |
| Scenarios | Mineral prospecting, investment analysis, financial planning, insurance planning, car engine fault diagnosis, medical diagnosis, route scheduling for delivery vehicles, plant and animal identification |
| Reasoning | Explain backward chaining and forward chaining using IF...THEN constructs |
| Driven by | Explain data driven and goal driven systems in diagnoses, gaming and artificial intelligence (for use in manipulating social media) |
| Evaluation | Give advantages and disadvantages of expert systems |

## What an expert system is

An **expert system** is a computer system that holds the **knowledge of human experts** in a particular field and uses it to answer questions and give advice or **possible solutions**. A user types or selects answers to questions, and the system works out the most likely conclusions, usually with an indication of how likely each one is.

It does not replace a decision-maker in every case. It supports people by making expert knowledge available to non-experts, any time, with consistent answers.

## Components of an expert system

### User interface

The part the user sees. It displays **questions**, accepts **answers** (often from menus, tick boxes or typed text) and shows the **conclusions**. It should be easy to use by someone who is not an expert in the subject. A well-designed interface asks only the questions that matter, one at a time.

### Knowledge base

The knowledge base stores what the system knows. It has two parts, as named in the syllabus:

- **Database of facts:** the known information about the subject, for example the symptoms of each illness or the features of each plant.
- **Rules base:** the set of **IF...THEN rules** that link facts to conclusions, for example `IF engine does not turn over AND headlights are dim THEN battery is flat`.

The rules come from interviews with experts and from published information. The knowledge base is built so that it can be searched and updated.

### Inference engine

The **inference engine** is the "reasoning" part of the system. It takes the user's answers, searches the rules base, applies the rules to the facts and works towards conclusions. It decides which question to ask next and calculates the probability of each possible solution. It is the part that behaves like an expert thinking through a problem.

### Explanation system

The **explanation system** tells the user **how** the system reached its conclusion and **why** it asked a particular question. For example: "Battery flat, because the headlights are dim AND the engine does not turn over." This helps the user to check the advice and to trust it, and helps experts find mistakes in the rules.

### Knowledge base editor

The **knowledge base editor** lets the system's **managers** (knowledge engineers or experts) add, change or delete facts and rules, so the system stays correct and up to date. Users cannot normally use it.

### How the components work together

1. The user answers questions through the **user interface**.
2. The **inference engine** compares the answers with the facts and rules in the **knowledge base**.
3. The engine reaches possible conclusions and, if more information is needed, asks another question through the interface.
4. The system displays the conclusions. The **explanation system** shows the reasoning if the user asks.
5. Later, an expert updates the rules using the **knowledge base editor**.

## Scenarios

| Scenario | What the system does |
|---|---|
| Mineral prospecting | Uses geological survey data to suggest where minerals or oil are likely to be found |
| Investment analysis | Compares the features of investments with the investor's goals and risk |
| Financial planning | Suggests savings, pensions and spending plans from a person's circumstances |
| Insurance planning | Advises on which cover is suitable and calculates premiums from the risk |
| Car engine fault diagnosis | Asks about symptoms and suggests the likely faults |
| Medical diagnosis | Uses symptoms and test results to list possible illnesses and their likelihood |
| Route scheduling for delivery vehicles | Plans the best order of stops using distances, times and loads |
| Plant and animal identification | Asks about features and suggests the species |

In each case a large amount of specialist knowledge is applied to a particular case, and several possible answers are offered.

## Forward chaining and backward chaining

**Chaining** is how the inference engine links rules. Both use `IF...THEN` constructs.

### A small rule set

Suppose the rules base for a car fault system contains:

- **Rule 1:** IF the headlights are dim THEN the battery is low.
- **Rule 2:** IF the battery is low AND the engine does not turn over THEN replace or charge the battery.
- **Rule 3:** IF the engine turns over AND the engine does not start AND the fuel gauge shows empty THEN the car is out of fuel.

### Forward chaining (data driven)

Forward chaining **starts with the known facts** and applies rules to reach a conclusion. It works from **data to goal**.

**Worked example 1.** The user states two facts: the headlights are dim, and the engine does not turn over.

1. Rule 1 matches the fact "headlights are dim", so the system adds a new fact: **the battery is low**.
2. Rule 2 now matches "battery is low" and "engine does not turn over", so it fires.
3. The conclusion is: **replace or charge the battery**.
4. Rule 3 does not match, since the engine does not turn over and the fuel is not reported as empty, so it is not used.

The system moved forward from what it knew to what could be concluded.

### Backward chaining (goal driven)

Backward chaining **starts with a goal (a hypothesis)** and works backwards to find whether the facts support it. It works from **goal to data**.

**Worked example 2.** The goal is to test the hypothesis: *replace or charge the battery*.

1. Which rule gives this conclusion? Rule 2. It needs two conditions: the battery is low, and the engine does not turn over.
2. Is "battery is low" known? Not yet, so look for a rule that concludes it. Rule 1 does, and needs "headlights are dim".
3. Ask the user: are the headlights dim? Suppose the answer is yes. The battery is low is therefore true.
4. Ask the user: does the engine turn over? Suppose the answer is no. Both conditions of Rule 2 are met.
5. The goal is **proved**.

If the user had answered that the headlights are bright, Rule 1 would fail and the goal would be **rejected**, so the system would move on to the next goal.

| Feature | Forward chaining | Backward chaining |
|---|---|---|
| Starting point | Known facts | A goal or hypothesis |
| Direction | Facts to conclusions | Conclusion back to facts |
| Called | Data driven | Goal driven |
| Best when | There is a lot of data and the aim is to see what follows | There are a few possible goals to test, such as diagnoses |
| Risk | Many rules may fire that are irrelevant | May ask questions for goals that turn out not to apply |

## Data driven and goal driven systems in use

**Diagnoses.** A medical or fault-finding system often uses **goal-driven** reasoning to test each possible illness or fault in turn ("is this measles?"). When the patient or machine already supplies many readings, a **data-driven** approach can work forward to list what the evidence suggests.

**Gaming.** A computer opponent can be **data driven**, reacting to what the player has just done (the player's piece moves, so the opponent responds). It can also be **goal driven**, setting a goal such as "capture the flag" and working backwards to choose the steps needed.

**Artificial intelligence for manipulating social media.** An AI system that reacts to the posts and reactions it detects, and spreads or targets content as a result, is **data driven**. One that is given a goal, such as making a message appear popular, and then works out the posts and accounts needed to achieve it, is **goal driven**. This use raises ethical issues because it can mislead people and spread false information.

## Advantages of expert systems

- Expert knowledge is **available to non-experts**, at any time and in any place.
- Answers are **consistent**: the system gives the same advice for the same facts and is not affected by tiredness or mood.
- It can hold **more knowledge** than one person and can combine the opinions of several experts.
- It is **faster** than a person at searching large numbers of rules.
- It can **explain** its reasoning.
- It reduces the **cost** of employing experts and can free them for harder cases.

## Disadvantages of expert systems

- **Expensive** and time-consuming to build, because the knowledge must be collected from experts and tested.
- The system has **no common sense or judgement**. It cannot deal with a case that falls outside its rules.
- Advice is only as good as the rules. If the knowledge base is **incorrect or out of date**, the advice is wrong.
- It cannot **learn** unless the rules are updated by a person (the knowledge base editor).
- Users may **trust** the system too much and not seek a second opinion.
- Experts may be **unwilling** to share their knowledge.
- Questions asked may not suit the user's situation, and the system does not notice a user's body language or tone, which a human expert might.

## Worked example 3: choosing the type of reasoning

A garden centre builds an expert system for identifying plants. It holds 400 plants, and the customer describes the leaf, flower and height.

- The customer supplies facts, and the system narrows the list: this is **forward chaining** (data driven).
- If instead the assistant suspects "this is a hydrangea" and wants to confirm it, the system checks the features of a hydrangea one by one: this is **backward chaining** (goal driven).

A good system can use both: forward chaining to narrow the list, then backward chaining to confirm the most likely plant.

## Common mistakes

- Describing the inference engine as "the database". The **knowledge base** holds the facts and rules; the **inference engine** reasons.
- Forgetting that the knowledge base has two parts: facts and rules.
- Mixing up forward chaining (starts with facts) and backward chaining (starts with a goal).
- Writing that an expert system "thinks" or "is always right".
- Saying the explanation system "explains how to use the system". It explains how the **conclusion** was reached.

## Exam technique

- **Describe** a component by saying what it does and what it works with, in one or two sentences.
- For **chaining**, write a numbered sequence of rules and facts; show each new fact that is produced.
- For **scenario** questions, name the component, link it to the scenario, and say what it does there.
- For **advantages and disadvantages**, match them to the scenario. "Cheaper than paying a doctor for every minor illness" is stronger than "it saves money".

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 7 Expert systems, section 7.1 Expert systems.
