---
title: "Pearson Edexcel International A Level Business (YBS11): Decision-making techniques"
seoTitle: "Edexcel IAL Business 3.3.3 Decision-Making Techniques"
resourceType: "study-guides"
subject: "business"
level: ["a-levels"]
topic: "Business decisions and strategy"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YBS11"]
syllabusSeries: "Issue 1, September 2017"
stage: "A"
order: 3.3
syllabusTopics:
  - qualification: "a-level"
    topic: "business-decisions-and-strategy-edexcel-alevel-business"
  - qualification: "a-level"
    topic: "business-decisions-and-strategy-edexcel-alevel-business"
    subtopic: "decision-making-techniques-ybs11"
description: "Study guide to Edexcel IAL Business 3.3.3: moving averages, investment appraisal, decision trees, critical path analysis and contribution, with full worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers section **3.3.3 Decision-making techniques** in Unit 3 (Business decisions and strategy) of the Pearson Edexcel International Advanced Subsidiary/Advanced Level in Business (YBS11), Issue 1. This is the most numerical section of Unit 3. Calculators may be used, and the Unit 3 paper includes questions that need quantitative skills (calculating investment appraisal outcomes and interpreting the results is one of them). All businesses and figures are invented.

For the unit as a whole, see the [Business decisions and strategy study guide](/resources/edexcel-ial-business-business-decisions-and-strategy/). Condensed notes are in the [Decision-making techniques revision notes](/resources/edexcel-a-level-business-ybs11-decision-making-techniques-revision-notes/) and questions in the [Decision-making techniques practice questions](/resources/edexcel-a-level-business-ybs11-decision-making-techniques-practice/).

## What the specification lists

1. **Quantitative sales forecasting:** time-series analysis with moving averages (three-period and four-quarter); scatter graphs and the line of best fit, extrapolating past data to the future; limitations.
2. **Investment appraisal:** simple payback, average (accounting) rate of return, and discounted cash flow (net present value only); calculation and interpretation; limitations.
3. **Decision trees:** construct and interpret simple diagrams; calculations; limitations.
4. **Critical path analysis:** nature and purpose; completing and interpreting simple networks; earliest start time, latest finish time and total float; limitations.
5. **Contribution:** nature and purpose; calculation and interpretation; use as a decision-making technique.

## Time-series analysis and moving averages

A **time series** is a set of figures over equal time intervals. It combines a **trend** (the long-run direction), **seasonal variations** (regular patterns within a year) and random variations. A **moving average** smooths out the short-term ups and downs to reveal the trend.

**Worked example 1: three-period moving average.** Monthly sales ($000) are 52, 58, 61, 57, 66, 70, 68.

- First average: (52 + 58 + 61) / 3 = **57.0**, placed against month 2.
- Next: (58 + 61 + 57) / 3 = **58.7**; then 61.3; 64.3; and 68.0.

The trend rises steadily, from 57.0 to 68.0 across five months.

**Worked example 2: four-quarter centred moving average.** Quarterly sales ($000) over three years are:

| | Quarter 1 | Quarter 2 | Quarter 3 | Quarter 4 |
|---|---|---|---|---|
| Year 1 | 120 | 150 | 180 | 140 |
| Year 2 | 130 | 162 | 194 | 150 |
| Year 3 | 140 | 174 | 208 | 160 |

Add the first four quarters and divide by four: (120 + 150 + 180 + 140) / 4 = 147.5. The next group is (150 + 180 + 140 + 130) / 4 = 150.0. These lie *between* quarters, so average each adjacent pair to centre them on a quarter: (147.5 + 150.0) / 2 = **148.75** for Year 1 quarter 3, then **151.5** for quarter 4, **154.75**, **157.75** and so on, up to **169.25** for Year 3 quarter 2.

The **seasonal variation** is actual minus trend. For Year 1 quarter 3: 180 - 148.75 = **+31.25**. For Year 2 quarter 3: 194 - 160.25 = **+33.75**. The average for third quarters is **+32.5**. Doing the same for the other quarters gives roughly -25.5 for quarter 1, +4.5 for quarter 2 and -12.25 for quarter 4.

*Forecasting.* The trend rose from 148.75 to 169.25 over seven quarters, which is about 2.93 a quarter. To forecast Year 4 quarter 1, three quarters beyond 169.25, extend the trend: 169.25 + 3 x 2.93 = 178.0; then add the quarter 1 seasonal variation: 178.0 - 25.5 = **about 152.5** ($152,500).

**Limitations:** the past may not repeat; the forecast assumes the trend and seasonal pattern continue; random events and changes in fashion or competition are not captured; and a moving average always lags behind recent changes.

## Scatter graphs and the line of best fit

A **scatter graph** plots two variables, such as advertising spend (x) against sales (y). A **line of best fit** is drawn through the points to show the relationship. If the line is y = 20 + 3x (sales in $000, advertising in $000), then spending 15 would be expected to give sales of 20 + 3 x 15 = **65**. Predicting values beyond the observed data is **extrapolation**. It is less reliable than predicting inside the range of the data, because the pattern may change (for example, at high levels of advertising extra spending may bring less extra sales). **Limitations:** correlation is not causation; a few unusual points can shift the line; and it covers only the one factor.

## Investment appraisal

All three methods use the same project. **Project A** costs $200,000 and has net cash flows of $50,000, $70,000, $90,000, $80,000 and $40,000 in years 1 to 5.

### Payback

**Payback** is the time taken to recover the initial cost.

| Year | Cash flow ($) | Cumulative ($) |
|---|---|---|
| 0 | -200,000 | -200,000 |
| 1 | 50,000 | -150,000 |
| 2 | 70,000 | -80,000 |
| 3 | 90,000 | +10,000 |

By the end of year 2, $80,000 is still needed. Year 3 earns $90,000, so payback = 2 + 80,000 / 90,000 = **2.89 years**, about 2 years and 11 months. Payback is simple and focuses on risk and liquidity, but it ignores cash flows after payback and the time value of money.

### Average (accounting) rate of return

```
ARR = (total net return / years) / initial cost x 100
```

Total cash inflows = 50 + 70 + 90 + 80 + 40 = $330,000. Total net return = 330,000 - 200,000 = $130,000. Average annual return = 130,000 / 5 = $26,000. ARR = 26,000 / 200,000 x 100 = **13%**. It is compared with the target rate or with the cost of borrowing: if the business needs 12%, Project A passes. ARR uses all cash flows, but ignores timing.

### Net present value

Money received in the future is worth less than money today, so cash flows are **discounted**. At an 8% discount rate the discount factors for years 1 to 5 are 0.926, 0.857, 0.794, 0.735 and 0.681.

| Year | Cash flow ($) | Discount factor | Present value ($) |
|---|---|---|---|
| 1 | 50,000 | 0.926 | 46,300 |
| 2 | 70,000 | 0.857 | 59,990 |
| 3 | 90,000 | 0.794 | 71,460 |
| 4 | 80,000 | 0.735 | 58,800 |
| 5 | 40,000 | 0.681 | 27,240 |
| | | Total | 263,790 |

NPV = 263,790 - 200,000 = **+$63,790**. A positive NPV means the project earns more than the discount rate in present-value terms, so it is acceptable. Its limits are that the discount rate is a guess and future cash flows are forecasts.

**Comparing projects.** Project B also costs $200,000 but gives $80,000, $60,000, $50,000, $40,000 and $30,000. Payback is **3.25 years** (cumulative $190,000 after year 3, so 3 + 10,000 / 40,000); ARR = (260,000 - 200,000) / 5 / 200,000 = **6%**; NPV at 8% is **+$15,030**. Project B has bigger early inflows ($80,000 in year 1 against $50,000), but Project A is stronger on all three measures: payback of 2.89 years against 3.25, ARR of 13% against 6%, and NPV of +$63,790 against +$15,030. Investment decisions should also consider risk, finance available and non-financial factors such as the effect on the brand.

## Decision trees

A **decision tree** shows options (decision points, drawn as squares) and chance outcomes (circles) with probabilities. The **expected value** of a choice is the sum of each outcome's value multiplied by its probability, less the cost.

**Worked example 3.** A firm can launch a new product at a cost of $100,000, or license a design for a certain $120,000. If launched, there is a 0.6 chance of success worth $500,000 and a 0.4 chance of failure losing $150,000.

- Expected value of the launch outcomes = 0.6 x 500,000 + 0.4 x (-150,000) = 300,000 - 60,000 = **$240,000**.
- Net of the $100,000 cost = **$140,000**.
- Licensing = **$120,000**.

On expected value alone, launch is better by $20,000, but it is much riskier, since there is a 40% chance of a $150,000 loss. A cautious owner may prefer the certain payment. **Limitations:** probabilities are subjective estimates, values are forecasts, tree structure ignores time value of money, and non-financial factors (such as reputation) are left out.

## Critical path analysis

**Critical path analysis (CPA)** maps the activities in a project and their order, to find the shortest time in which it can be completed and which activities cannot be delayed. **Worked example 4** (durations in weeks):

| Activity | Duration | Preceded by |
|---|---|---|
| A | 3 | none |
| B | 4 | A |
| C | 2 | A |
| D | 5 | B |
| E | 3 | C |
| F | 2 | D and E |

- **Earliest start time (EST):** A 0, B 3, C 3, D 7, E 5, F 12 (F waits for the later of D, which ends at week 12, and E, which ends at week 8).
- **Project duration:** F ends at 12 + 2 = **14 weeks**.
- **Latest finish time (LFT)** (working back from 14): F 14, D 12, E 12, B 7, C 9, A 3.
- **Total float** = LFT - EST - duration: A 0, B 0, C 9 - 3 - 2 = **4**, D 0, E 12 - 5 - 3 = **4**, F 0.

The **critical path** is the activities with zero float: A, B, D, F, which takes 14 weeks. A delay to any of these delays the whole project. C and E each have 4 weeks of float, so resources can be moved from them to speed up the critical path. **Limitations:** durations are estimates; complex projects are hard to map; the network must be updated as events change; it does not itself show cost.

## Contribution

**Contribution per unit** = selling price - variable cost per unit. **Total contribution** = contribution per unit x units sold. Contribution pays towards fixed costs, and what remains is profit.

**Worked example 5.** A firm sells units at $25 each with variable costs of $15 and fixed costs of $40,000.

- Contribution per unit = 25 - 15 = **$10**.
- Break-even output = 40,000 / 10 = **4,000 units**.
- A special order for 2,000 units is offered at **$18** each. Contribution per unit on the order = 18 - 15 = **$3**, so total contribution = **$6,000**.

If there is spare capacity and the order will not affect normal sales, accepting adds $6,000 to profit even though the price is below the normal price, because fixed costs are already covered. If it would let regular customers demand lower prices, the order may cost more than it earns. This is why contribution is used for special orders, make-or-buy choices and whether to drop a product. **Limitation:** it ignores fixed costs and capacity.

## Common mistakes

- Placing a four-quarter average against a quarter without centring it.
- Using the wrong total in payback: count cumulative cash flow, not individual years.
- Dividing total inflows rather than net return by the years in ARR.
- Forgetting to subtract the initial cost in NPV.
- Taking expected value without subtracting the cost of each option.
- Mixing up float (spare time) with duration, and forgetting that the critical path has zero float.
- Accepting or rejecting a special order from profit per unit rather than contribution.

## Exam technique

For **calculate** questions, show each stage; a wrong answer can still earn marks for method. For interpretation, state the decision rule (for example, "positive NPV, so accept") and then at least one limitation or non-financial point. In longer answers, say what the numbers do not show, such as risk, and make a judgement that depends on the firm's priorities.

## Related resources

- [Decision-making techniques revision notes](/resources/edexcel-a-level-business-ybs11-decision-making-techniques-revision-notes/)
- [Decision-making techniques practice questions](/resources/edexcel-a-level-business-ybs11-decision-making-techniques-practice/)
- [Business decisions and strategy study guide](/resources/edexcel-ial-business-business-decisions-and-strategy/)
