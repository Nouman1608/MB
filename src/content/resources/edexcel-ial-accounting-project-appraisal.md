---
title: "Edexcel A-Level Accounting: Project appraisal (YAC11)"
seoTitle: "Edexcel IAL Accounting Project Appraisal Study Guide"
resourceType: "study-guides"
subject: "accounting"
level: ["a-levels"]
topic: "Project appraisal"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YAC11"]
syllabusSeries: "2015-onwards"
order: 6
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "project-appraisal"
description: "Study guide to Edexcel IAL Accounting topic 2.6: net present value, WACC, profitability index, IRR, ARR and payback, each with a fully worked example."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This guide teaches topic 2.6, Project appraisal, of the Pearson Edexcel International Advanced
Subsidiary/Advanced Level in Accounting specification (XAC11/YAC11), Issue 2, September 2018. It
covers outcomes 2.6.1 and 2.6.2. Project appraisal belongs to Unit 2 (Corporate and Management
Accounting), which makes it **Unit 2 (A2) only**: you need it for the full International A Level but
not for the International AS.
The specification lists Unit 2 as available in January, June and October. Every business and figure
below is invented.

Useful links: [Edexcel A-Level Accounting hub](/boards/edexcel/a-level/accounting/),
[printable checklist](/checklists/edexcel/a-level/accounting/),
[revision notes for this topic](/resources/edexcel-ial-accounting-project-appraisal-revision-notes/),
[practice questions](/resources/edexcel-ial-accounting-project-appraisal-practice/) and the
[free 10-minute diagnostics](/diagnostics/). For how Unit 2 is structured and timed, see the
[exam preparation guide](/resources/edexcel-ial-accounting-exam-preparation/).

## What this topic covers

| Outcome | Content in the specification | What you must be able to do |
|---|---|---|
| 2.6.1 | Net present value | Discount each year's net cash flow, total the present values and accept or reject the project |
| 2.6.1 | Weighted average cost of capital | Combine the cost of each source of finance into one rate and use it as the discount rate |
| 2.6.1 | Profitability index | Relate present value to the money invested, and rank projects when funds are limited |
| 2.6.1 | Internal rate of return | Find the rate at which NPV is zero by interpolation, and compare it with the cost of capital |
| 2.6.2 | Average rate of return (accounting rate of return) | Express average annual profit as a percentage of the investment |
| 2.6.2 | Payback period | Find how long the cash inflows take to recover the initial outlay |

The specification groups the first four as the discounted methods and calls ARR and payback the
**non-discounted methods**. The difference is whether the method allows for the time value of money.

## Cash flows: the raw material

A project is a long-term spending decision, such as a new machine, a branch or a delivery fleet.
Before you apply any method, set out the project's **net cash flow** for each year.

- **Year 0** is the start. The initial outlay goes here, shown in brackets as an outflow.
- Later years show cash received minus cash paid because of the project.
- A **residual (scrap) value** is a cash inflow in the final year.
- **Depreciation is not a cash flow.** It spreads the cost already counted in year 0. Add it back if a
  question gives you profit after depreciation.
- Ignore money already spent (sunk costs) and overheads that will be paid whatever is decided.

Unless a question says otherwise, discounted methods assume each year's cash flow arrives at the end
of that year. Payback in months assumes cash arrives evenly during the year.

### The running example

Fellgarth Textiles plc is considering a dyeing machine costing £240,000, payable now. It will run for
five years and then be sold for £30,000. Net cash inflows from operating it are expected to be
£60,000, £75,000, £80,000, £70,000 and £50,000 in years 1 to 5.

| Year | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Net cash flow (£) | (240,000) | 60,000 | 75,000 | 80,000 | 70,000 | 80,000 |

Year 5 is £50,000 operating inflow plus the £30,000 sale proceeds.

## Weighted average cost of capital (2.6.1)

The **cost of capital** is the return the providers of a company's finance expect: dividends for
shareholders, interest for lenders. A project must earn at least this rate, so it is used as the
**discount rate** in NPV and as the benchmark for IRR.

A company raises money from several sources at different costs. The **weighted average cost of
capital (WACC)** weights each cost by that source's share of total finance.

`WACC = Σ (proportion of total finance from the source × cost of that source)`

### Worked example 1: WACC

Fellgarth's long-term finance and the cost of each source are:

| Source | Amount (£) | Cost |
|---|---|---|
| Ordinary shares and reserves | 450,000 | 12% |
| 8% preference shares | 150,000 | 8% |
| Debentures | 400,000 | 8.5% |
| **Total** | **1,000,000** | |

**Step 1: weights.** 450,000 ÷ 1,000,000 = 0.45; 150,000 ÷ 1,000,000 = 0.15; 400,000 ÷ 1,000,000 = 0.40.

**Step 2: weighted costs.** 0.45 × 12% = 5.4%; 0.15 × 8% = 1.2%; 0.40 × 8.5% = 3.4%.

**Step 3: add.** 5.4% + 1.2% + 3.4% = **10.0%**.

Fellgarth will discount the dyeing machine's cash flows at 10%. Use whichever values (book or market)
the question supplies for the weights, and check the weights total 1.

## Net present value (2.6.1)

A pound today is worth more than a pound later: it can be invested now, inflation erodes future
money, and future receipts are less certain. Discounting converts each future cash flow to its
**present value** (its worth at year 0).

`Discount factor = 1 ÷ (1 + r)ⁿ`, where r is the rate as a decimal and n is the year.

`Present value = net cash flow × discount factor`

`NPV = total present value of the cash flows − initial outlay`

Decision rule: **accept if NPV is positive** (the project earns more than the cost of capital);
reject if it is negative. Between two projects that exclude each other, choose the higher NPV. When a
question gives discount factors, use them exactly as printed.

### Worked example 2: NPV at 10%

| Year | Net cash flow (£) | Factor at 10% | Present value (£) |
|---|---|---|---|
| 0 | (240,000) | 1.000 | (240,000) |
| 1 | 60,000 | 0.909 | 54,540 |
| 2 | 75,000 | 0.826 | 61,950 |
| 3 | 80,000 | 0.751 | 60,080 |
| 4 | 70,000 | 0.683 | 47,810 |
| 5 | 80,000 | 0.621 | 49,680 |
| | | **NPV** | **34,060** |

Present value of inflows: 54,540 + 61,950 + 60,080 + 47,810 + 49,680 = £274,060.
NPV = 274,060 − 240,000 = **£34,060 positive**, so on financial grounds the machine should be bought.

## Profitability index (2.6.1)

NPV is an absolute figure, so it favours big projects. The **profitability index (PI)** relates the
present value earned to the money tied up.

`PI = present value of future cash inflows ÷ initial investment`

Accept if PI is greater than 1 (the same as NPV positive). When capital is limited and projects
cannot be split, rank them by PI so that each pound of scarce funds earns the most present value.
Some textbooks define PI as NPV ÷ initial investment; under that version the threshold is 0, not 1.
State the formula you use.

### Worked example 3: PI

PI = 274,060 ÷ 240,000 = **1.14**. Each £1 invested returns £1.14 in present-value terms.

## Internal rate of return (2.6.1)

The **internal rate of return (IRR)** is the discount rate at which NPV is exactly zero. It is the
project's own rate of return. Accept the project if the IRR is **higher than the cost of capital**
(WACC).

You find it by **linear interpolation** between one rate giving a positive NPV and one giving a
negative NPV:

`IRR = L + [NPV at L ÷ (NPV at L − NPV at H)] × (H − L)`

L is the lower rate and H the higher rate. Because NPV at H is negative, the bottom line becomes an
addition of the two sizes.

### Worked example 4: IRR

At 10%, NPV = +£34,060 (worked example 2). Try 16%:

| Year | Net cash flow (£) | Factor at 16% | Present value (£) |
|---|---|---|---|
| 0 | (240,000) | 1.000 | (240,000) |
| 1 | 60,000 | 0.862 | 51,720 |
| 2 | 75,000 | 0.743 | 55,725 |
| 3 | 80,000 | 0.641 | 51,280 |
| 4 | 70,000 | 0.552 | 38,640 |
| 5 | 80,000 | 0.476 | 38,080 |
| | | **NPV** | **(4,555)** |

IRR = 10 + [34,060 ÷ (34,060 + 4,555)] × (16 − 10)
= 10 + (34,060 ÷ 38,615) × 6 = 10 + 5.29 = **15.3%**.

15.3% is above the WACC of 10%, so accept. Interpolation draws a straight line between two points on
a curve, so it is an estimate; rates close to the true IRR give a closer answer.

## Average rate of return (2.6.2)

The specification calls this the **average rate of return (accounting rate of return)**. Unlike the
other methods it uses **profit**, so depreciation is charged.

`ARR = (average annual profit ÷ investment) × 100`

Two bases are in use for "investment":

- **initial investment**, the cost of the asset; or
- **average investment** = (initial cost + residual value) ÷ 2.

Use the base the question asks for and show it. Accept if ARR beats the business's target return.

### Worked example 5: ARR

Operating cash inflows over five years: 60,000 + 75,000 + 80,000 + 70,000 + 50,000 = £335,000.
Total depreciation = 240,000 − 30,000 = £210,000 (£42,000 a year, straight-line).

Total profit = 335,000 − 210,000 = £125,000. Average annual profit = 125,000 ÷ 5 = **£25,000**.

- On initial investment: 25,000 ÷ 240,000 × 100 = **10.4%**
- On average investment: (240,000 + 30,000) ÷ 2 = £135,000; 25,000 ÷ 135,000 × 100 = **18.5%**

The same project gives very different ARRs depending on the base, which is why you must state it.

## Payback period (2.6.2)

The **payback period** is the time the net cash inflows take to recover the initial outlay. Shorter
is better; many businesses set a maximum.

With equal annual inflows, payback = outlay ÷ annual inflow. With unequal inflows, use a cumulative
column and find the year in which it turns positive.

### Worked example 6: payback

| Year | Net cash flow (£) | Cumulative (£) |
|---|---|---|
| 0 | (240,000) | (240,000) |
| 1 | 60,000 | (180,000) |
| 2 | 75,000 | (105,000) |
| 3 | 80,000 | (25,000) |
| 4 | 70,000 | 45,000 |

£25,000 is still to recover at the end of year 3, and year 4 brings £70,000.
25,000 ÷ 70,000 × 12 = 4.3 months, so payback is **3 years 4 months** to the nearest month. The
year 5 cash flow, including the £30,000 sale proceeds, plays no part.

## Comparing the methods

| Method | Strengths | Weaknesses |
|---|---|---|
| Payback | Simple; favours quick recovery, which helps liquidity and limits risk | Ignores cash after payback; ignores time value |
| ARR | Uses profit, which managers recognise; a percentage is easy to compare with a target | Ignores timing; result depends on the investment base; profit depends on depreciation policy |
| NPV | Uses all cash flows and the time value of money; shows the gain in today's money | Needs a reliable cost of capital; favours larger projects |
| PI | Allows for project size; ranks projects when funds are limited | Does not show the size of the gain |
| IRR | A single percentage that is easy to compare with WACC | Interpolation gives an estimate; can rank projects differently from NPV |

When NPV and IRR disagree between projects that exclude each other, follow NPV, because it measures
the increase in value in money terms.

Evaluation questions also expect **non-financial factors**: effect on the workforce and local
community, environmental impact, reliability of a supplier, quality, and how certain the forecasts
are (outcomes 1.6.2 and 1.6.3 in Unit 1 cover these ideas).

## Common errors

- Including depreciation in NPV or payback cash flows, or leaving it out of ARR profit.
- Forgetting the residual value in the final year's cash flow for NPV.
- Discounting year 0 (its factor is 1.000).
- Using simple averages of the costs instead of weighting them for WACC.
- Writing IRR = L + (NPV at L ÷ NPV at H) × (H − L), which uses the wrong denominator.
- Mixing ARR bases, or not stating which base you used.
- Counting months for payback from the start of the project instead of from the start of the payback year.

## Next steps

Go to the [revision notes](/resources/edexcel-ial-accounting-project-appraisal-revision-notes/) for the
formulae on one page and ten short recall questions. After that, work through the
[practice questions](/resources/edexcel-ial-accounting-project-appraisal-practice/). Check your gaps
with the [free diagnostics](/diagnostics/).

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Accounting (XAC11/YAC11)
specification, Issue 2, September 2018, first teaching September 2015 (Pearson Education Limited):
Unit 2, topic 2.6 Project appraisal, outcomes 2.6.1 and 2.6.2.
