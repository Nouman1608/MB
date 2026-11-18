---
title: "Cambridge IGCSE ICT (0417): Expert systems -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed notes on expert system components, reaching possible solutions, building a system and the seven named uses, for Cambridge IGCSE ICT 0417 6.8."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense subtopic 6.8 of Cambridge IGCSE ICT 0417, expert systems. For a full rule-by-rule trace of a car fault diagnosis, read the [expert systems study guide](/resources/cambridge-igcse-ict-0417-expert-systems/); then test yourself with the [expert systems practice questions](/resources/cambridge-igcse-ict-0417-expert-systems-practice/).

## Syllabus coverage

- Characteristics, uses and purpose of expert systems.
- Named uses: mineral prospecting, car engine fault diagnosis, medical diagnosis, chess games, financial planning, route scheduling for delivery vehicles, plant and animal identification.
- Components: user interface, inference engine, knowledge base, rules base, explanation system.
- How an expert system is used to produce possible solutions for different scenarios.

## Key terms

| Term | Meaning |
|---|---|
| Expert system | Software that imitates a human expert's knowledge and reasoning in one specialist area |
| User interface | Screens that ask questions and display results |
| Knowledge base | Store of facts about the subject |
| Rules base | Store of IF ... THEN rules linking facts to conclusions |
| Inference engine | Reasoning part that applies rules to answers and facts, chooses the next question and reaches conclusions |
| Explanation system | Shows how a conclusion was reached |
| Probability | How likely a suggested solution is to be correct |

Memory hook: **K**nowledge = facts, **R**ules = IF ... THEN, **I**nference = the thinking.

## Purpose and characteristics

- Gives non-experts access to expert-level decisions; gives experts a second opinion.
- Covers one narrow area.
- Built from knowledge gathered from human experts.
- Asks questions; the next question depends on the last answer.
- Suggests possible solutions with probabilities.
- Explains its reasoning.

## Producing a possible solution

1. Interface asks a question.
2. Answer passed to the inference engine.
3. Inference engine compares answers with the rules base, using facts in the knowledge base.
4. It chooses the next question; interface asks it.
5. Repeat until a conclusion is reached.
6. Possible solutions displayed, often with probabilities.
7. Explanation system shows the reasoning if asked.

## Building an expert system

1. Interview human experts; collect information from manuals and past cases.
2. Build the knowledge base.
3. Build the rules base.
4. Design the inference engine.
5. Design the user interface and explanation system.
6. Test with problems whose answers are known.
7. Keep knowledge and rules updated.

## The seven uses: input and output

| Use | Input | Output |
|---|---|---|
| Mineral prospecting | Rock, soil and survey data for a site | Probability of finding minerals or oil; where to drill |
| Car engine fault diagnosis | Symptoms; readings from the car's computer | Likely faults; repairs |
| Medical diagnosis | Symptoms; test results; history | Possible illnesses with probabilities; tests; treatments |
| Chess games | Positions of the pieces | Next move |
| Financial planning | Income, savings, age, attitude to risk | Suitable savings or investments |
| Route scheduling for delivery vehicles | Addresses, time slots, capacity, traffic | Order of stops; route |
| Plant and animal identification | Leaf shape, colour, markings, habitat | Probable species |

## Advantages and disadvantages

| Advantages | Disadvantages |
|---|---|
| Consistent; does not tire | Only as good as its facts and rules |
| Fast | No common sense; fails outside its rules |
| Available any time, in many places | Expensive and slow to build |
| Combines several experts' knowledge | Must be kept up to date |
| Non-experts can make good decisions | Users may trust it blindly |
| Explains reasoning, useful for training | Lacks human empathy, especially in medicine |
| Saves the cost of experts for routine decisions | Needs trained staff to maintain |

## Writing a rule

Rules follow **IF condition(s) THEN conclusion**. Conditions can be joined with AND. Example for plant identification (simplified, invented): IF leaves are needle-shaped AND the tree keeps its leaves in winter THEN the tree is probably a conifer.

## Exam traps

- Putting the rules in the knowledge base.
- Saying the system gives one definite answer. It gives possible solutions.
- Calling the inference engine a "search engine" or "database".
- Forgetting the explanation system when listing all five components.
- Listing a use with no inputs or outputs.
- Describing how a system is *used* when asked how it is *set up*, or the other way round.

## Self-test

1. State the purpose of an expert system.
2. Name the five components of an expert system.
3. What is stored in the knowledge base?
4. What is stored in the rules base?
5. Describe the role of the inference engine.
6. What does the explanation system do?
7. Why does an expert system often show a probability with its result?
8. Give the first two steps in setting up an expert system.
9. How is a new expert system tested?
10. Give two inputs and one output for a medical diagnosis expert system.
11. Give two advantages of an expert system over a human expert.
12. Give two disadvantages of expert systems.

### Answers

1. To imitate the knowledge and reasoning of a human expert so that users can reach decisions in a specialist area.
2. User interface; inference engine; knowledge base; rules base; explanation system.
3. Facts about the subject.
4. IF ... THEN rules linking facts to conclusions.
5. It applies the rules to the user's answers and the facts, chooses the next question and reaches conclusions.
6. Shows the user how the system reached its conclusion.
7. Because more than one solution may fit the answers, and some are more likely than others.
8. Gather knowledge from human experts; build the knowledge base.
9. With problems whose answers are already known, comparing its results with the experts'.
10. Inputs: symptoms; test results (or medical history). Output: possible illnesses with probabilities (or tests, treatments).
11. Any two: consistent; does not tire; fast; available any time; combines several experts' knowledge.
12. Any two: relies on correct rules; no common sense; expensive to build; must be updated; users may trust it blindly.
