---
title: "Cambridge A Level Information Technology (ICT): Modelling (9626) -- Revision Notes"
seoTitle: "Cambridge A Level ICT 9626 Modelling Revision Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["a-levels"]
topic: "Modelling"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 9
syllabusTopics:
  - qualification: "a-level"
    topic: "modelling"
description: "Revision notes for Cambridge AS & A Level IT 9626 Modelling: what-if and goal seek steps, uses, model strengths and limits, and a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

For full explanations and worked examples, use the [Modelling study guide](/resources/a-level-cambridge-ict-modelling/). These notes condense **topic 9, Modelling**, of Cambridge International AS & A Level Information Technology (9626), following the syllabus for examination in 2025, 2026 and 2027 (version 3), section 9.1 Modelling and simulations. It is an **AS Level** topic. Paper 1 (Theory) questions are based on sections 1–11 and Paper 2 (Practical) tasks on sections 8–11, so revise both the theory and the spreadsheet skills.

Links: [course hub](/boards/cambridge/a-level/ict/), [9626 checklist](/checklists/cambridge/a-level/ict/), [Modelling practice questions](/resources/a-level-cambridge-ict-modelling-practice/), [free 10-minute diagnostics](/diagnostics/).

## 9.1 at a glance

The syllabus lists five strands under 9.1:

1. **What-if analysis** -- predict the result of changing data; change data to model scenarios; goal seek; uses (financial forecasting, population growth, climate change, weather systems, queue management, traffic flow, construction).
2. **The characteristics of modelling software.**
3. **The need for computer models.**
4. **The effectiveness of spreadsheet models.**
5. **The use of a model to create and run simulations** -- natural disaster planning, pilot training, learning to drive a car, nuclear science research.

## Definitions

| Term | Meaning |
|---|---|
| Computer model | A representation of a real system using variables and rules (formulas) |
| Simulation | Running a model, often over time or with chance events, to see how the system behaves |
| Variable | An input value that can be changed, e.g. price, growth rate |
| Rule | A formula or relationship linking variables |
| Assumption | A simplification built into the model, e.g. "costs stay fixed" |
| Scenario | One set of input values, e.g. "worst case" |
| What-if analysis | Changing inputs to see the effect on outputs |
| Goal seek | Setting a target output and letting the software find the input that achieves it |

## Must-know distinctions

- **Model vs simulation.** The model is the set of rules and data. The simulation is the model being run.
- **What-if vs goal seek.** What-if: you change the input, the output changes. Goal seek: you fix the output, the input is found for you.
- **Predicting vs modelling scenarios.** Predicting means stating the expected effect of one change before you make it. Modelling scenarios means setting up several input sets and comparing them.
- **A spreadsheet model vs dedicated modelling software.** A spreadsheet handles numerical rules well; dedicated software adds features such as 3D visuals, real-time response and physical controls (as in a flight simulator).

## Method in steps

### What-if analysis

1. Put every input in its own labelled cell.
2. Build the output formula from cell references, not typed values.
3. Record the current output.
4. Predict the effect of the change you plan.
5. Change one input (or a planned set of inputs for a scenario).
6. Read the new output and compare it with your prediction.

### Goal seek

1. Identify the **result cell** (must contain a formula).
2. Decide the **target value**.
3. Identify the **input cell to change** (must contain a value, not a formula).
4. Run goal seek and read the new input value.
5. Interpret it in context: round to whole people, tickets or vehicles where needed, and say which way to round.

### Small worked reminder

A savings model holds £2,000 at 4% interest a year, added at the end of each year. Each year's cell multiplies the year before by (1 + rate).

- After 1 year: £2,080.00. After 2 years: £2,163.20. After 3 years: **£2,249.73**.
- Goal seek: "What rate gives £2,400 after 3 years?" Result cell = year-3 balance, target = 2400, cell to change = rate. Answer: about **6.27%**.

### Setting up a model you can trust

- Keep inputs, rules and outputs in separate, clearly labelled areas.
- Use a named cell (or an absolute reference) for a value that every formula shares, such as a growth rate, so copied formulas still point at it.
- Test the model with values whose answer you already know. If the café makes £2.10 a cup and has £1,890 fixed costs, 900 cups must give exactly zero profit.
- Before trusting a prediction, compare the model's output with real past data where you have it.
- Save each scenario (or record its inputs) so results can be compared side by side.
- When you change a scenario, change only the inputs the scenario describes, then reset before trying the next one.

## Uses of what-if analysis

| Use | Change | Predict |
|---|---|---|
| Financial forecasting | sales, prices, costs, interest | profit, cash flow |
| Population growth | birth, death, migration rates | future population, service demand |
| Climate change | emissions, land use | temperature, sea level |
| Weather systems | pressure, temperature, humidity, wind | forecast for coming days |
| Queue management | arrival rate, service time, servers | waiting time, queue length |
| Traffic flow | light timings, lanes, vehicles | congestion, journey time |
| Construction | materials, loads, dimensions | safety of the structure, cost |

## Characteristics of modelling software

- Variables can be changed easily.
- Rules and formulas link the variables.
- Automatic recalculation.
- What-if analysis and goal seek.
- Saved, comparable scenarios.
- Time steps to show change over time.
- Random values for chance events.
- Graphs, charts or animated output.
- Can import real data to test the model.

## The need for computer models

Use the word **"than"** -- always compare with the real-life alternative.

- Cheaper than building or testing the real thing.
- Safer: nobody is in danger.
- Faster: time can be speeded up (decades in seconds) or slowed down.
- Repeatable with one variable changed.
- Can study things that cannot be tested for real (future climate, earthquakes).

## Effectiveness of spreadsheet models

| Strengths | Weaknesses |
|---|---|
| Instant recalculation for what-if and goal seek | Rules are simplified; not every variable is included |
| Familiar, widely available software | Assumptions (constant rates) may not hold |
| Results can be charted | Only as accurate as the input data |
| Easy to update with new data | One formula error spreads through the model |
| | Human behaviour and rare events are hard to express |
| | Poor at 3D, visual or real-time simulation |

Finish an evaluation with a judgement linked to the context.

## Simulations

| Simulation | Main benefit | Main drawback |
|---|---|---|
| Natural disaster planning | Evacuation routes and resources planned safely in advance | Real events may not match the model |
| Pilot training | Emergencies practised with no risk and no fuel | Simulator is costly; no real sense of danger |
| Learning to drive a car | Hazards practised with no risk to anyone | Does not fully feel like a real car |
| Nuclear science research | No radiation exposure; impossible experiments can be run | Only as accurate as the scientific rules used |

## Quick self-test

1. State what is meant by a computer model.
2. State the difference between what-if analysis and goal seek.
3. A goal seek tool needs three inputs. Name them.
4. A club's fixed costs are £1,200 and each ticket makes £8 after costs (price £15, cost £7). How many tickets break even?
5. Using the club in question 4, how many tickets give a profit of £400?
6. A clinic expects 45 patients an hour and one nurse sees 6 an hour. How many nurses does the model suggest?
7. A village of 8,000 grows by 5% a year. What does the model predict after 2 years?
8. Give two reasons for using a flight simulator rather than a real aircraft for training.
9. Give two limitations of a spreadsheet model of a supermarket queue.
10. Name two characteristics of modelling software.

### Answers

1. A representation of a real system that uses variables and rules (formulas) to predict how it behaves.
2. What-if changes inputs to see the output; goal seek sets a target output and finds the input needed.
3. The result cell (with a formula), the target value, and the input cell to change.
4. 1200 ÷ 8 = **150 tickets**.
5. (1200 + 400) ÷ 8 = **200 tickets**.
6. 45 ÷ 6 = 7.5, so **8 nurses** (round up, or some patients are not seen).
7. 8000 × 1.05² = **8,820**.
8. Any two: emergencies such as engine failure can be practised safely; no fuel is used; scenarios can be repeated; no risk to the aircraft or people.
9. Any two: assumes customers arrive at an even rate; ignores staff breaks or slow customers; depends on accurate arrival data; cannot show the queue visually in real time.
10. Any two: automatic recalculation; what-if analysis; goal seek; saved scenarios; time steps; random values; graphical output.

## Where marks are usually lost

- Describing goal seek as "changing the data to see what happens" -- that is what-if analysis.
- Naming the cell to change as one that holds a formula. It must hold an input value.
- Leaving answers such as 7.5 nurses or 787.5 cups without rounding up in context.
- Writing "it is cheaper" or "it is safer" with no comparison and no context.
- Listing a use (e.g. "traffic flow") without saying what is changed and what is predicted.
- Giving only strengths when the question says "evaluate" or "discuss".
- Treating "simulation" and "model" as the same word.
- For a named simulation, giving benefits that would apply to any computer system, rather than ones specific to that simulation.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 3, Cambridge University Press & Assessment. Topic 9: Modelling (9.1 Modelling and simulations).
