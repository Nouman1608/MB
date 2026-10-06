---
title: "Cambridge A Level Information Technology (ICT): Modelling (9626)"
seoTitle: "Cambridge A Level ICT 9626 Modelling Study Guide"
resourceType: "study-guides"
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
description: "Study guide for Cambridge AS & A Level IT 9626 Modelling: what-if analysis, goal seek, modelling software, spreadsheet models and simulations."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide covers **topic 9, Modelling**, of Cambridge International AS & A Level Information Technology (9626). It follows the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 3), section 9.1 Modelling and simulations. Topic 9 is an **AS Level** topic, so it is part of both the AS Level and the full A Level. The syllabus bases **Paper 1 (Theory)** questions on sections 1–11 and **Paper 2 (Practical)** tasks on sections 8–11, so you can meet modelling in both papers. Paper 4 (Advanced Practical) may also include practical tasks from sections 8–10 within a problem-solving context.

Modelling uses the spreadsheet skills from topic 8, and A Level topic 17 (Data analysis and visualisation) builds on it. Course hub: [Cambridge A Level ICT](/boards/cambridge/a-level/ict/). Printable checklist: [9626 checklist](/checklists/cambridge/a-level/ict/). Not sure where your gaps are? Try a [free 10-minute diagnostic](/diagnostics/).

## What this topic covers

| Section | What you must be able to do | Stage |
|---|---|---|
| 9.1 | Use what-if analysis: predict the result of changing data, and change data to model different scenarios | AS |
| 9.1 | Use goal seek | AS |
| 9.1 | Describe uses of what-if analysis: financial forecasting, population growth, climate change, weather systems, queue management, traffic flow, construction | AS |
| 9.1 | Describe the characteristics of modelling software | AS |
| 9.1 | Explain the need for computer models | AS |
| 9.1 | Evaluate the effectiveness of spreadsheet models | AS |
| 9.1 | Explain the use of a model to create and run simulations: natural disaster planning, pilot training, learning to drive a car, nuclear science research | AS |

Every outcome can be asked about in writing in Paper 1. Because Paper 2 tasks are based on sections 8–11, you should also be able to build a model, change its data and use goal seek in practical work.

## Models and simulations

A **computer model** is a representation of a real system using data (the variables) and rules (formulas or relationships between the variables). A spreadsheet that works out a shop's profit from its prices, costs and sales is a model of that shop's finances.

A **simulation** is what you get when you run a model to see how the system behaves, often over time or under conditions you choose. You might step a population model forward year by year, or feed random customer arrivals into a queue model.

Key vocabulary:

- **Variable** -- a value you can change, such as a price or a growth rate.
- **Rule** -- a formula linking the variables, such as profit = sales × (price − cost) − fixed costs.
- **Assumption** -- a simplification built into the model, such as "the growth rate stays the same every year".
- **Scenario** -- one set of input values, such as "best case" or "price rise".

## What-if analysis

What-if analysis means changing one or more inputs to a model and seeing how the outputs change. Because the spreadsheet recalculates automatically, you can try many scenarios in seconds. The syllabus lists two parts:

- **Predict the result of changing data** -- before you change an input, say what you expect to happen, then check.
- **Change data to model different scenarios** -- change inputs to compare options such as "raise prices" against "cut costs".

### Worked example 1: a café's monthly profit

A café owner sets up this model.

| | A | B |
|---|---|---|
| 1 | Price per cup (£) | 3.20 |
| 2 | Cost per cup (£) | 1.10 |
| 3 | Fixed costs per month (£) | 1890 |
| 4 | Cups sold per month | 1000 |
| 5 | Profit (£) | =B4*(B1-B2)-B3 |

**Step 1 -- current profit.** Each cup earns 3.20 − 1.10 = £2.10 towards the fixed costs. Profit = 1000 × 2.10 − 1890 = **£210**.

**Step 2 -- predict, then change.** The owner asks: "What if I sell only 800 cups?" Prediction: profit falls by 200 × 2.10 = £420. Change B4 to 800: profit = 800 × 2.10 − 1890 = **−£210**, a loss. The prediction was right.

**Step 3 -- a second scenario.** Reset B4 to 1000 and change B1 to 3.50. Each cup now earns £2.40, so profit = 1000 × 2.40 − 1890 = **£510**.

Notice that every input sits in its own labelled cell and the formula refers to those cells. If the price were typed into the formula itself, each scenario would mean editing the formula, which is slow and easy to get wrong.

## Goal seek

What-if analysis changes the inputs and reads the output. **Goal seek** works the other way round: you choose the output you want and the software finds the input value that produces it. A goal seek tool needs three things:

1. the cell that holds the result (it must contain a formula);
2. the target value you want that cell to reach;
3. the input cell the software is allowed to change.

The software then tries input values until the result matches the target.

### Worked example 2: break-even for the café

The owner wants to know how many cups give a profit of exactly zero.

- Result cell: **B5**. Target value: **0**. Cell to change: **B4**.
- Goal seek returns **900**. Check: 900 × 2.10 − 1890 = 0.

At the higher price of £3.50, goal seek returns 1890 ÷ 2.40 = **787.5**. Goal seek has no idea that half a cup cannot be sold, so you must interpret the answer: the café needs **788** cups to cover its costs.

### Worked example 3: a population model

A planner models a town of 50,000 people growing at 2% a year. The growth rate is stored in a cell named Rate (2%).

| | A | B |
|---|---|---|
| 1 | Year | Population |
| 2 | 0 | 50000 |
| 3 | 1 | =B2*(1+Rate) |
| 4 | 2 | =B3*(1+Rate) |

The formula in B3 is filled down to B7 (year 5). Because Rate is a named cell, every copied formula still refers to it.

- Year 1: 50,000 × 1.02 = 51,000. Year 2: 52,020. Year 5: **55,204** (to the nearest person).
- **Goal seek:** "What yearly growth rate gives 60,000 people after 5 years?" Result cell B7, target 60000, cell to change Rate. Goal seek returns about **3.71%** (to 3 s.f.).

## Uses of what-if analysis

The syllabus names seven uses. For each, know what is varied and what is predicted.

| Use | Typical inputs changed | What the model predicts |
|---|---|---|
| Financial forecasting | prices, sales, costs, interest rates | profit, cash flow, loan repayments |
| Population growth | birth, death and migration rates | future population; demand for schools, housing |
| Climate change | greenhouse gas emissions, land use | temperature and sea-level trends |
| Weather systems | air pressure, temperature, humidity, wind readings | the weather over the coming days |
| Queue management | arrival rate, service time, number of servers | waiting times and queue lengths |
| Traffic flow | traffic light timings, number of lanes, vehicle numbers | congestion and journey times |
| Construction | materials, loads, dimensions, costs | whether a structure is safe, and what it costs |

### Worked example 4: queue management

A post office expects 72 customers an hour at its busiest time. One clerk serves 15 customers an hour on average.

- Clerks needed = 72 ÷ 15 = 4.8, so the model recommends **5 clerks**.
- **What if** arrivals rise to 96 an hour? 96 ÷ 15 = 6.4, so **7 clerks**.
- **What if** new equipment lets each clerk serve 18 an hour? 72 ÷ 18 = exactly **4 clerks**.

The last result shows a limit of a simple model. With 4 clerks working flat out, any short burst of arrivals creates a queue that cannot clear, because real customers do not arrive at an even rate. A simulation that generates random arrivals would show this; the average-rate spreadsheet does not.

## Characteristics of modelling software

Modelling software (including a spreadsheet used as a model) typically lets you:

- store variables in cells or fields and **change them easily**;
- define **rules and formulas** that link the variables;
- **recalculate automatically** when an input changes;
- carry out **what-if analysis** and **goal seek**;
- set up and save several **scenarios** and compare their results;
- step the model through **time intervals** (days, years) to show change over time;
- generate **random values** so that a simulation reflects chance events;
- display results as **graphs, charts** or animated visual output, so trends are easy to see;
- **import real data** so the model can be checked against what actually happened.

## The need for computer models

Computer models are used because, compared with testing the real thing, they can be:

- **Cheaper** -- testing a new traffic layout on screen costs far less than rebuilding a junction.
- **Safer** -- no one is put at risk while a dangerous situation is studied.
- **Faster** -- years of population change can be calculated in seconds.
- **Repeatable** -- the same scenario can be run again with one variable changed, to see its effect alone.
- **Possible at all** -- you cannot run a real experiment on the future climate or on an earthquake.

They also let decision-makers compare many options before committing money or resources.

## The effectiveness of spreadsheet models

A spreadsheet model is only as good as its rules, its data and its assumptions. When asked to evaluate one, weigh both sides.

**Strengths**

- Formulas recalculate instantly, so what-if analysis and goal seek are quick.
- Widely available and familiar; non-specialists can follow the layout.
- Results can be shown as charts.
- Easy to update when new data arrives.

**Weaknesses**

- **Simplified rules**: real systems depend on more variables than a spreadsheet includes.
- **Fixed assumptions**: a constant growth rate or average arrival rate may not hold.
- **Input data quality**: inaccurate data gives inaccurate predictions.
- **Formula errors**: one wrong cell reference can spread through the whole model.
- **Human behaviour** and rare events are hard to express as formulas.
- Spreadsheets are poor at visual, real-time or three-dimensional simulation.

A good evaluation ends with a judgement: for example, a spreadsheet is effective for a café's monthly forecast but too limited for a full weather system.

## Using a model to create and run simulations

| Simulation | What is simulated | Benefits | Drawbacks |
|---|---|---|---|
| Natural disaster planning | floods, earthquakes, storms; how people and services respond | emergency plans and evacuation routes tested without danger; resources placed in advance | real disasters may not follow the model; depends on good data about the area |
| Pilot training | aircraft behaviour, weather, instrument readings, faults | emergencies such as engine failure practised safely; no fuel used; scenarios repeated | high cost of simulator equipment; trainees know they are not in real danger |
| Learning to drive a car | roads, other vehicles, hazards, weather | hazards practised without risk to the learner or the public; useful for first lessons | cannot fully reproduce the feel of a real car; may cause motion sickness |
| Nuclear science research | reactions, reactor behaviour, effects of changing conditions | no exposure to radiation; experiments impossible in reality can be run | results depend on the accuracy of the scientific rules in the model |

In each case the model holds the rules (how the aircraft responds to its controls, how floodwater spreads) and the simulation runs those rules under conditions the user chooses.

## Common errors

- Confusing what-if analysis with goal seek. What-if: change inputs, read the output. Goal seek: set the output, find an input.
- Leaving a goal seek answer unrounded when the context needs whole units (787.5 cups, 6.4 clerks).
- Typing values into formulas instead of referencing input cells, so scenarios cannot be changed easily.
- Writing "a model is cheaper" without saying cheaper than what. Compare with the real-life alternative.
- Using "model" and "simulation" as if they mean the same thing.
- Giving only advantages when the question asks you to evaluate.

## Next steps

Condense this with the [Modelling revision notes](/resources/a-level-cambridge-ict-modelling-revision-notes/), then test yourself on the [Modelling practice questions](/resources/a-level-cambridge-ict-modelling-practice/). For the sensors and control systems behind weather data, see [Monitoring and Control](/resources/a-level-cambridge-ict-monitoring-and-control/). For the hardware used to run large simulations, see [Hardware and Software](/resources/a-level-cambridge-ict-hardware-and-software/).

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 3, Cambridge University Press & Assessment. Topic 9: Modelling (9.1 Modelling and simulations).
