---
title: "Cambridge A Level Information Technology (ICT): Modelling (9626) -- Practice Questions"
seoTitle: "Cambridge A Level ICT 9626 Modelling Practice Questions"
resourceType: "practice-questions"
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
description: "Original practice questions with marked answers for Cambridge AS & A Level IT 9626 Modelling: what-if, goal seek, model uses and simulations."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover **topic 9, Modelling**, of Cambridge International AS & A Level Information Technology (9626), following the syllabus for examination in 2025, 2026 and 2027 (version 3), section 9.1 Modelling and simulations. Topic 9 is an **AS Level** topic. Paper 1 (Theory) questions are based on sections 1–11 and Paper 2 (Practical) tasks on sections 8–11. Every question here can be answered on paper; the spreadsheet questions practise the thinking behind the practical skills.

Learn the content first in the [Modelling study guide](/resources/a-level-cambridge-ict-modelling/) and the [Modelling revision notes](/resources/a-level-cambridge-ict-modelling-revision-notes/). Course hub: [Cambridge A Level ICT](/boards/cambridge/a-level/ict/). Checklist: [9626 checklist](/checklists/cambridge/a-level/ict/). Find your weak spots with a [free 10-minute diagnostic](/diagnostics/).

The answers show one acceptable set of points with a [1] for each creditworthy point. They are indicative marking written for this practice set, not official mark schemes; other valid points would also earn credit.

## Questions

**1.** Explain the difference between a computer model and a simulation. **[2]**

**2.** Explain the difference between what-if analysis and goal seek. **[2]**

**3.** A drama club uses this spreadsheet to plan a concert.

| | A | B |
|---|---|---|
| 1 | Ticket price (£) | 6.00 |
| 2 | Cost per person (£) | 1.50 |
| 3 | Hall hire (£) | 450 |
| 4 | Tickets sold | 160 |
| 5 | Profit (£) | |

**(a)** Write a formula for cell B5. **[2]**
**(b)** Calculate the profit shown in B5. **[1]**
**(c)** Predict the profit if the ticket price is raised to £7.00 with sales unchanged. Explain your prediction. **[2]**
**(d)** Describe how goal seek could find the number of tickets needed to break even, and state the value it returns. **[4]**

**4.** A town of 24,000 people is modelled as growing by 3% a year.

**(a)** Calculate the predicted population after 3 years, to the nearest whole number. **[2]**
**(b)** A second scenario uses 4% a year. Calculate the population after 3 years, to the nearest whole number. **[1]**
**(c)** State one reason why the 3% assumption may not hold. **[1]**

**5.** Describe **three** characteristics of modelling software. **[3]**

**6.** At a busy junction, one minute of green light lets 18 cars through. At peak time 540 cars an hour arrive on the main road.

**(a)** Calculate how many minutes of green light the main road needs each hour. **[1]**
**(b)** Traffic is forecast to rise by 25%. Calculate the new number of minutes of green light needed each hour. **[2]**
**(c)** Explain **two** reasons why engineers test new light timings in a computer model rather than on the real road. **[4]**

**7.** Explain why computer models are needed to study climate change. **[4]**

**8.** A regional airline plans to move its engine-failure and crosswind-landing practice from real aircraft to a flight simulator. Discuss the advantages and disadvantages of this plan. **[6]**

**9.** A city council wants to plan for a major river flood. Describe how a computer model could be used to create and run a simulation to help it plan. **[5]**

**10.** **(a)** Give **two** benefits to a learner of using a simulator when learning to drive a car. **[2]**
**(b)** Explain why simulations are used in nuclear science research. **[3]**

**11.** For **each** of these uses of what-if analysis, identify one input the model would change and one output it would predict:

**(a)** queue management at a hospital reception **[2]**
**(b)** construction of a footbridge **[2]**

**12.** A bakery models its weekly profit. Each loaf sells for £2.40 and costs £0.90 to make. Fixed costs are £630 a week and it sells 500 loaves a week.

**(a)** Calculate the weekly profit. **[2]**
**(b)** The owner wants a weekly profit of £300 without changing sales. Describe how goal seek finds the price needed, and state the price. **[4]**
**(c)** The owner thinks the higher price will cut sales by 10%. Use the model to calculate the new profit, and comment on the result. **[2]**
**(d)** Evaluate how far the owner should rely on this spreadsheet model when deciding the price. **[4]**

## Answers

**1.** A model is a representation of a real system using variables and rules (formulas) [1]; a simulation is the model being run, for example over time or under chosen conditions, to see how the system behaves [1]. **[2]**
*Examiner insight:* Two separate points are needed: define each term, not just one of them.

**2.** What-if analysis changes input values to see the effect on the output [1]; goal seek sets a target value for the output and finds the input value needed to reach it [1]. **[2]**
*Examiner insight:* "Changing data" alone describes what-if; say which way round goal seek works.

**3. (a)** **=B4*(B1-B2)-B3** (or equivalent): tickets × (price − cost) [1], minus hall hire [1].
**(b)** 160 × 4.50 − 450 = **£270** [1]
**(c)** Each ticket earns £1 more, so profit rises by 160 × 1 = £160 [1], to **£430** [1].
**(d)** Set cell B5 [1]; to value 0 [1]; by changing cell B4 [1]; goal seek returns **100** tickets [1]. **[9]**
*Examiner insight:* In (a), a formula with typed values such as 160*4.5-450 does not update when inputs change, so use cell references.

**4. (a)** 24000 × 1.03³ [1] = **26,225** [1]
**(b)** 24000 × 1.04³ = **26,997** [1]
**(c)** Any one: birth, death or migration rates may change; new housing or jobs may attract people; a major event may change growth [1]. **[4]**
*Examiner insight:* Round to whole people only at the end; rounding each year changes the final figure.

**5.** Any three, each described: variables can be changed easily [1]; formulas/rules link the variables and recalculate automatically [1]; what-if and goal seek tools [1]; saved scenarios for comparison; time steps to show change over time; random values for chance events; results shown as graphs or charts. **[3]**
*Examiner insight:* "Easy to use" is not a characteristic of modelling software; name a feature.

**6. (a)** 540 ÷ 18 = **30 minutes** [1]
**(b)** 540 × 1.25 = 675 cars [1]; 675 ÷ 18 = **37.5 minutes** [1]
**(c)** Any two explained: testing on the real road would cause congestion or accidents [1] -- the model puts no drivers at risk [1]; many timings can be tried quickly [1] -- far faster than a separate real trial for each option [1]; cheaper than changing real equipment repeatedly. **[7]**
*Examiner insight:* For "explain", each reason needs a point and a development, not a one-word list.

**7.** Any four: the real system cannot be experimented on [1]; changes happen over decades, which a model can calculate in minutes [1]; many scenarios (different emission levels) can be compared [1]; predictions can guide decisions before it is too late to act [1]; models can be tested against past climate data. **[4]**
*Examiner insight:* Points must be about climate change, not generic benefits of computers.

**8.** Advantages, any three: emergencies such as engine failure practised with no danger [1]; no fuel used or aircraft wear [1]; scenarios (bad weather, rare faults) repeated as often as needed [1]; trainee performance can be recorded and replayed.
Disadvantages, any two: simulators are very expensive to buy and maintain [1]; pilots know they are not in real danger, so stress differs from a real emergency [1].
Conclusion, e.g. valuable for practice but real flying hours are still needed [1]. **[6]**
*Examiner insight:* "Discuss" needs both sides and a conclusion; a list of advantages alone does not show discussion.

**9.** Data about the area is entered, such as land height, river levels and rainfall [1]; rules describe how water spreads [1]; the simulation is run for different scenarios, e.g. heavier rain or a failed flood barrier [1]; output shows which areas flood and when [1]; the council uses this to plan evacuation routes, shelters or where to place emergency resources [1]. **[5]**
*Examiner insight:* Describe the stages (data, rules, run, output, use); listing benefits alone does not describe how the simulation is used.

**10. (a)** Any two: hazards practised without risk to the learner or others [1]; mistakes can be made safely and repeated [1]; bad weather or night driving practised at any time. 
**(b)** Experiments with radioactive material are dangerous [1]; a simulation avoids exposure to radiation [1]; it can test conditions that would be impossible or too costly to create for real [1]. **[5]**
*Examiner insight:* In (b), "it is safer" earns little unless you say what the danger is.

**11. (a)** Input: number of reception staff or patient arrival rate [1]; output: waiting time or queue length [1].
**(b)** Input: materials, loads or dimensions [1]; output: whether the bridge is safe under load, or its cost [1]. **[4]**
*Examiner insight:* Keep input and output distinct; "the queue" on its own is neither.

**12. (a)** 500 × (2.40 − 0.90) − 630 [1] = **£120** [1]
**(b)** Set the profit cell [1] to value 300 [1] by changing the price cell [1]; price = **£2.76** [1].
**(c)** 450 × (2.76 − 0.90) − 630 = **£207** [1]; profit rises from £120 but falls short of the £300 target, so the goal-seek price alone does not meet the target if sales drop [1].
**(d)** For: quick to test prices and sales levels with what-if analysis [1]; uses the bakery's own cost figures [1]. Against: the 10% fall is only an estimate, and real demand may differ [1]. Judgement: useful for comparing options, but the owner should test the price and update the model with real sales [1]. **[12]**
*Examiner insight:* In (c), use the price found in (b); a correct method using a wrong carried value still shows the right working.

## Where marks are usually lost

- Writing formulas with typed numbers instead of cell references.
- Naming a formula cell as the "cell to change" in goal seek.
- Not rounding to whole tickets, people or staff when the context needs it.
- Rounding part-way through a growth calculation.
- Describing the benefits of a simulation without linking them to the named use (pilots, floods, driving, nuclear research).
- Giving one side only for "discuss" or "evaluate", or leaving out a conclusion.
- Writing "cheaper" or "safer" without saying than what.
- Confusing a model's input with its output.

## Next steps

- [Modelling revision notes](/resources/a-level-cambridge-ict-modelling-revision-notes/)
- [Modelling study guide](/resources/a-level-cambridge-ict-modelling/)
- [Monitoring and Control practice questions](/resources/a-level-ict-monitoring-control-practice/)
- [Cambridge A Level ICT course hub](/boards/cambridge/a-level/ict/)
- [9626 printable checklist](/checklists/cambridge/a-level/ict/)
- [All free 10-minute diagnostics](/diagnostics/)
- [Book a free trial class](/trial/)

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 3, Cambridge University Press & Assessment. Topic 9: Modelling (9.1 Modelling and simulations).
