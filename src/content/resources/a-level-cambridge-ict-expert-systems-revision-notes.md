---
title: "Cambridge A Level Information Technology (ICT): Expert systems (9626) -- Revision Notes"
seoTitle: "9626 A Level IT Expert Systems Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes on expert systems for Cambridge AS & A Level IT 9626: the five components, chaining, data and goal driven, scenarios and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

For full explanations and worked examples, read the [study guide on expert systems](/resources/a-level-cambridge-ict-expert-systems/) first. These notes are for quick recall in the final weeks.

They cover **topic 7, Expert systems** (section 7.1) of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 3). This is AS Level content, part of both the AS Level and the full A Level. It is examined on Paper 1 (Theory), which is based on sections 1–11; Paper 2 (Practical) candidates apply knowledge and understanding from sections 1–7.

Course hub: [Cambridge A Level IT](/boards/cambridge/a-level/ict/). Tick off each outcome on the [9626 checklist](/checklists/cambridge/a-level/ict/). Test yourself with the [practice questions](/resources/a-level-cambridge-ict-expert-systems-practice/), or find your weak spots with a [free diagnostic](/diagnostics/).

## 7.1 at a glance

| Part of 7.1 | What to recall |
|---|---|
| Possible solutions | User answers questions → inference engine applies rules to facts → possible solutions, often with probabilities → explanation available |
| Components | User interface; inference engine; knowledge base (database of facts + rules base); explanation system; knowledge base editor |
| Scenarios | Mineral prospecting; investment analysis; financial planning; insurance planning; car engine fault diagnosis; medical diagnosis; route scheduling for delivery vehicles; plant and animal identification |
| Chaining | Forward chaining and backward chaining, using IF…THEN rules |
| Data driven / goal driven | Uses in diagnoses, gaming, and AI for manipulating social media |
| Evaluation | Advantages and disadvantages |

## Definition

> **Expert system:** a computer system that stores the knowledge of human experts in one field and uses rules to reason with it, producing possible solutions and explaining how it reached them.

Key words for full credit: **knowledge of experts**, **rules**, **possible** solutions (not guaranteed), **explains** its reasoning.

## The five components

| Component | What it does | Who uses it |
|---|---|---|
| User interface | Asks questions (often yes/no or multiple choice); accepts answers; displays conclusions and explanations | The user |
| Inference engine | Reasoning: matches facts to rules, fires rules, reaches conclusions, decides the next question | Works automatically |
| Knowledge base: database of facts | Stored facts about the field (species features, faults and symptoms) | Read by the inference engine |
| Knowledge base: rules base | IF…THEN rules for reasoning with the facts | Read by the inference engine |
| Explanation system | Shows **how** a conclusion was reached and **why** a question is asked; may give a confidence level | The user |
| Knowledge base editor | Adds, edits and deletes facts and rules to keep the system up to date | Knowledge engineer or experts |

### Must-know distinctions

- **Inference engine vs explanation system:** the engine **does** the reasoning; the explanation system **reports** it.
- **User interface vs knowledge base editor:** the user enters **case data** through the interface; the editor changes the **stored knowledge**.
- **Facts vs rules:** a fact states something ("species Q has smooth leaves"); a rule links conditions to a conclusion ("IF … THEN …").

## How a possible solution is produced (method in steps)

1. User interface asks a question; user answers.
2. Answer stored as a fact for this case.
3. Inference engine searches the rules base for matching rules.
4. Matching rule fires; conclusion becomes a new fact.
5. Repeat, asking further questions only where needed.
6. Display possible solutions (often ranked or with probabilities).
7. Explanation system available on request.

## IF…THEN rules and chaining

| | Forward chaining | Backward chaining |
|---|---|---|
| Also called | **Data driven** | **Goal driven** |
| Starts with | Known facts | A goal (hypothesis) |
| Works | From IF parts to THEN parts | From a THEN part back to its IF conditions |
| Stops when | No rule adds a new fact | Goal proved, or all goals rejected |
| Questions asked | Can ask for lots of data up front | Only what is needed to test the current goal |

### Method in steps: tracing forward chaining

1. List the starting facts.
2. Go through the rules in order. If every IF condition is a known fact and the THEN part is new, the rule **fires**; add its conclusion.
3. Repeat passes until a full pass adds nothing.
4. State the rules in the order they fired and the final conclusion.

### Method in steps: tracing backward chaining

1. Take the goal. Find a rule whose THEN part is that goal.
2. Treat each IF condition as a sub-goal. Prove it from known facts, from another rule, or by asking the user.
3. If any condition fails, reject that rule (or goal) and try the next one.
4. Never ask the same question twice: reuse answers already given.

### Worked reminder (forward chaining, investment analysis)

Fictional rules:

```
R1  IF time to retirement is under 10 years THEN investment horizon is short
R2  IF investment horizon is short AND attitude to risk is low THEN suggest: mainly lower-risk savings
R3  IF investment horizon is short AND attitude to risk is high THEN suggest: mix with some higher-risk funds
```

Facts: 7 years to retirement; attitude to risk is low. R1 fires (horizon short). R2 fires (lower-risk savings). R3 does not fire. Order: **R1, R2**.

## Data driven and goal driven: uses

| Use | Data driven (forward) | Goal driven (backward) |
|---|---|---|
| Diagnoses | Enter all symptoms or fault codes; system lists every condition or fault they support | Start from one suspected condition or fault; ask only for the evidence to confirm or reject it |
| Gaming | Character reacts to the current game state (IF player in range THEN attack) | Character has a goal and plans the steps backward to reach it |
| AI for manipulating social media | Activity data (likes, shares, viewing time) used to infer interests and choose content | Start from a goal (more time online, see a message) and choose content and timing to achieve it |

## Scenarios: one line each

| Scenario | Input → possible solution |
|---|---|
| Mineral prospecting | Survey and rock sample data → probable deposit sites, where to drill |
| Investment analysis | Market and company data, investor aims → buy, hold or sell, with risk |
| Financial planning | Income, spending, debts, goals → saving, borrowing or retirement plan |
| Insurance planning | Age, claims history, property or vehicle → risk level, cover, premium |
| Car engine fault diagnosis | Symptoms, fault codes → likely fault, repair |
| Medical diagnosis | Symptoms, test results, history → possible conditions with probabilities, further tests |
| Route scheduling for delivery vehicles | Addresses, time windows, vehicles, roads → stop order and route per vehicle |
| Plant and animal identification | Observed features → most likely species |

Identification questions should test **one feature at a time**, like the couplets of a classification key.

## Advantages and disadvantages

| Advantages | Disadvantages |
|---|---|
| Consistent; no tiredness | Errors in the knowledge base give wrong advice |
| Available any time, including remote areas | No common sense; fails outside its rules |
| Combines several experts' knowledge | Expensive and slow to build |
| Explains its reasoning | Needs regular updating |
| Cheaper than many experts over time; trains non-experts | Over-reliance; no empathy; unclear responsibility for errors |

Link every point to the scenario in the question.

## Quick self-test

1. Name the **two** parts of the knowledge base.
2. Which component decides which question to ask next?
3. Which component would a knowledge engineer use to add a rule for a new car model?
4. Give the other name for forward chaining.
5. State what backward chaining starts with.
6. A system asks, "Why do you need my age?" Which component answers?
7. Rules: R1 IF parcel is urgent THEN priority is 1. R2 IF priority is 1 AND road is closed on route A THEN use route B. R3 IF use route B THEN schedule first stop on route B. Facts: parcel is urgent; road is closed on route A. List the rules in the order they fire using forward chaining.
8. Give **one** data driven use of AI in social media.
9. A doctor suspects one condition and wants to test it. Data driven or goal driven?
10. Give **one** disadvantage of an expert system for insurance planning.

### Answers

1. Database of facts; rules base.
2. Inference engine.
3. Knowledge base editor.
4. Data driven.
5. A goal (a hypothesis or possible conclusion).
6. Explanation system (shown through the user interface).
7. **R1, R2, R3**: R1 gives priority 1; R2 then gives route B; R3 then schedules the first stop on route B.
8. Using a user's likes, shares and viewing time to infer interests and select which posts or adverts to show.
9. Goal driven (backward chaining).
10. For example: if a risk rule is wrong or out of date, every customer it applies to gets an unsuitable premium; or it cannot take account of unusual circumstances that a human underwriter would notice.

## Where marks are usually lost

- Naming the knowledge base without its two parts.
- Describing the explanation system as "explaining how to use the system". It explains the **reasoning**.
- Saying the knowledge base editor is used to type in symptoms or answers.
- Writing that forward chaining "starts with the answer". It starts with the **data**.
- In a chaining trace, stopping after the first pass when a new fact would fire another rule.
- In backward chaining, asking a question whose answer is already known.
- Describing a scenario without saying what is input and what possible solution is output.
- Giving "it is fast" or "it is expensive" with no reason and no link to the scenario.
- Saying an expert system replaces the expert. It supports a decision; it suggests **possible** solutions.

## Next steps

- Full explanations and worked examples: [expert systems study guide](/resources/a-level-cambridge-ict-expert-systems/)
- Marked exam-style questions: [expert systems practice](/resources/a-level-cambridge-ict-expert-systems-practice/)
- Related: [algorithms and flowcharts](/resources/a-level-cambridge-ict-algorithms-and-flowcharts/) (IF…THEN logic) and [the digital divide](/resources/a-level-cambridge-ict-the-digital-divide/)
- [Free diagnostics](/diagnostics/)

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, version 3 (published July 2025), Cambridge International, part of Cambridge University Press & Assessment. Topic 7, Expert systems, section 7.1.
