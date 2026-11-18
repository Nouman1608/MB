---
title: "Cambridge IGCSE ICT (0417): Modelling applications"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 6: ICT applications"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 6.2
syllabusTopics:
  - qualification: "igcse"
    topic: "ict-applications"
    subtopic: "modelling-applications-0417"
description: "How computer models work for finance, building design, floods, traffic and weather, and when modelling beats human work, for Cambridge IGCSE ICT 0417 6.2."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Subtopic 6.2 of Cambridge IGCSE ICT 0417 is computer modelling, "including: personal finance, bridge and building design, flood water management, traffic management, weather forecasting", together with the "advantages and disadvantages of using computer modelling rather than humans". The [ICT Applications study guide](/resources/igcse-ict-applications-systems/) summarises each use in one line. This guide shows what goes into and comes out of each model, works through a what-if calculation, and sets out how to argue for and against modelling.

## What a computer model is

A **computer model** is a representation of a real system built from data, formulas and rules. It lets people ask **"what if?"** questions: change one input and see how the outputs change, without doing anything in the real world.

Every model has three parts:

- **Inputs (variables)**: values that can be changed, such as an interest rate or the amount of rainfall.
- **Rules and formulas**: the relationships between the values, such as "savings = income minus spending".
- **Outputs**: the predictions the model produces, such as a monthly balance, a flood map or a forecast.

Running a model forward over time, for example hour by hour through a storm, is often called a **simulation**. Simple models are often built in a spreadsheet, where each variable sits in a cell and formulas calculate the results; the [spreadsheets study guide](/resources/cambridge-igcse-ict-spreadsheets-study-guide/) covers the practical skills. Large models such as weather forecasting need specialist software and very powerful computers.

## The five named applications

### Personal finance

**Inputs:** income, regular bills, spending on food and travel, savings, loan amounts, interest rates.
**Rules:** totals, differences and interest formulas.
**Outputs:** money left each month, how long it will take to save for something, the cost of a loan over its term.
**Why model:** a person can test a decision, such as moving to a flat with higher rent, before committing to it.

### Bridge and building design

**Inputs:** the shape and size of the structure, the materials, the expected loads (people, vehicles, furniture), wind speeds and possible earthquake forces.
**Rules:** the physics of how materials bend and carry loads.
**Outputs:** where stresses are greatest and whether the structure would bend, crack or collapse.
**Why model:** a full-sized bridge cannot be built and loaded until it fails. A model can be tested to destruction many times, and the design changed until it is safe.

### Flood water management

**Inputs:** rainfall amounts, river levels and flow rates, the height of the land, how wet the ground already is, and the position of existing defences.
**Rules:** how water flows downhill, fills low areas and overtops barriers.
**Outputs:** which areas would flood, how deep and how quickly.
**Why model:** planners can decide where to build flood barriers, which homes need warnings, and how to plan evacuations, without waiting for a real flood.

### Traffic management

**Inputs:** the number of vehicles arriving at a junction per minute, traffic light timings, pedestrian crossings, road layout, the number of lanes.
**Rules:** how queues build up when more vehicles arrive than can pass through.
**Outputs:** queue lengths and journey times.
**Why model:** engineers can try different light timings, a new roundabout or an extra lane on the computer before spending money on roadworks.

### Weather forecasting

**Inputs:** temperature, air pressure, humidity, wind speed and direction, and rainfall, collected from weather stations, satellites, weather balloons and ocean buoys.
**Rules:** the physics of how the atmosphere behaves, together with comparisons with past weather patterns.
**Outputs:** forecasts for the coming hours and days, often with a likelihood, such as a chance of rain.
**Why model:** the atmosphere cannot be experimented on, and the volume of data is far too large for people to calculate by hand.

## Worked example: a personal finance what-if

The figures are invented for illustration. A young worker builds a monthly budget in a spreadsheet.

| Item | Amount (£) |
|---|---|
| Income | 1,800 |
| Rent | 650 |
| Food | 300 |
| Transport | 120 |
| Bills | 180 |
| Other spending | 250 |

**Step 1: total outgoings.** 650 + 300 + 120 + 180 + 250 = **£1,500**.

**Step 2: monthly saving.** 1,800 − 1,500 = **£300**, so over 12 months she saves 12 × 300 = **£3,600**.

**Step 3: the what-if.** Her landlord says rent will rise by 10%. She changes one input: 10% of 650 is 65, so rent becomes **£715**. The spreadsheet recalculates automatically: outgoings become 1,565, the monthly saving falls to **£235**, and the yearly saving to 12 × 235 = **£2,820**.

**Step 4: a second what-if.** To keep saving £300 a month at the higher rent she must cut other spending by £65, from 250 to **£185**.

The point for the exam: the model answered two questions in seconds, and nothing in her real finances changed while she explored them.

## Computer modelling compared with humans

The syllabus asks about using models "rather than humans", which covers humans calculating by hand and humans testing things in real life.

**Advantages:**

- **Cheaper**: no need to build real prototypes or test bridges to destruction.
- **Safer**: dangerous situations, such as a flood or a building collapse, are tested without risk to life.
- **Faster**: thousands of calculations, or many scenarios, can be run in minutes; time can be speeded up, for example years of savings shown at once.
- **Easy to repeat and change**: a variable can be changed and the model rerun as often as needed.
- **Handles huge amounts of data**: weather models process far more data than people could.
- **Fewer calculation errors** than working by hand, once the formulas are correct.

**Disadvantages:**

- **Only as good as its data and rules**: wrong inputs or a faulty formula give wrong results.
- **Simplifies reality**: real systems contain factors the model may not include, such as a driver who stops suddenly or an unusual storm.
- **Expensive to set up**: specialist software, powerful computers and expert programmers cost money.
- **Over-reliance**: people may trust the output without questioning it.
- **Needs human judgement**: forecasters and engineers still interpret results and make the final decision.

## Common mistakes

- Saying a model "shows what will happen". It **predicts** or **simulates** what might happen.
- Giving "cheaper" as an advantage without saying cheaper than what, such as building a real prototype.
- Listing the five applications without saying what is modelled in each.
- Forgetting that weather models need data from sensors and satellites as inputs.
- Claiming models are always accurate; accuracy depends on the data and rules.

## Exam technique

- **Describe** how a model is used: name inputs, say what changes in a what-if, and state the output.
- **Explain** an advantage: give the advantage and link it to the scenario, such as "safer, because a flood can be tested without endangering anyone in the town".
- **Discuss** or **evaluate**: give advantages and disadvantages for the named application and finish with a judgement, such as "the model is useful but its predictions should be checked by experienced engineers".

## Frequently asked questions

**Is a spreadsheet a computer model?**
A spreadsheet can hold a simple model, with variables in cells and formulas linking them. Complex models such as weather forecasts use specialist software.

**Why do weather forecasts still go wrong if they use computers?**
The model simplifies the atmosphere and the input data cannot cover every place, so small errors grow over time. That is one of the disadvantages of modelling.

## Keep going

- [Modelling applications revision notes](/resources/cambridge-igcse-ict-0417-modelling-applications-revision-notes/)
- [Modelling applications practice questions](/resources/cambridge-igcse-ict-0417-modelling-applications-practice/)
- [Computer controlled systems study guide](/resources/cambridge-igcse-ict-0417-computer-controlled-systems/)

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 6 "ICT applications", 6.2 Modelling applications.
