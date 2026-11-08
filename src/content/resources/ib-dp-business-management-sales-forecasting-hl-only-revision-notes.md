---
title: "IB DP Business Management: Sales forecasting (HL only) -- Revision Notes"
seoTitle: "IB Business HL Sales Forecasting Revision Notes"
resourceType: "revision-notes"
subject: "business"
level: ["ib"]
topic: "Unit 4: Marketing"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Business Management"]
syllabusSeries: "First assessment 2024"
order: 828
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-business-unit-4"
    subtopic: "ib-dp-business-4-3"
description: "Condensed revision notes on sales forecasting benefits, limitations and simple linear regression, with a self-test, for IB Business Management HL."
author: "marlbridge-academic-team"
reviewer: "salman-ahmad"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-25
featured: false
reviewNote: "2026-11-08: reviewed by salman-ahmad."
---

These notes condense section 4.3, Sales forecasting (HL only), from Unit 4 of the IB *Business management guide*, first assessment 2024. For full explanations and worked examples, read the [study guide](/resources/ib-dp-business-management-sales-forecasting-hl-only/). The guide lists one content point here, the benefits and limitations of sales forecasting (AO3), and lists simple linear regression (HL only) in its toolkit.

Links: [course hub](/boards/ib/ib-dp/business/), [printable checklist](/checklists/ib/ib-dp/business/), [practice questions](/resources/ib-dp-business-management-sales-forecasting-hl-only-practice/), [Unit 4 overview](/resources/ib-dp-business-management-marketing/), and the [free diagnostics](/diagnostics/).

## Key definitions

| Term | Meaning |
|---|---|
| Sales forecast | A prediction of future sales, in units, revenue or both. The guide does not define it, so this is a working definition. |
| Trend | The general direction of sales over time, such as steady growth or decline. |
| Scatter diagram | A graph of paired data, here time (x) against sales (y). |
| Line of best fit | The straight line that follows the points most closely. |
| Correlation | How closely points follow a straight line, positive or negative. |
| Extrapolation | Extending the line beyond the data to predict a value. |
| Interpolation | Reading a value from within the range of the data. |

## Benefits at a glance

| Area | How the forecast helps |
|---|---|
| Operations | Plans production, purchasing and stock levels, cutting stockouts and excess stock |
| Finance | Shapes the cash flow forecast and the case for loans or investment |
| People | Guides recruitment, training and overtime |
| Marketing | Sets promotion budgets and tests whether objectives are realistic |
| Control | Gives targets, and the gap with actual sales shows where to look |
| Risk | Replaces guesses with evidence, so decisions are easier to defend |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-business-management-sales-forecasting-hl-only--11-forecast-feeds-plans.webp" width="900" height="920" alt="A central circle, the forecast of 495 boards, linked to production and stock, cash flow and lenders, staff, marketing and targets and control." loading="lazy">
  <figcaption>A forecast is the starting point for many other plans.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-business-management-sales-forecasting-hl-only--12-forecast-weigh-up.webp" width="900" height="900" alt="A balance tipped towards benefits (plan resin, foam and hours; lender talks; r = 0.997) against limits (six data points, assumes growth continues, one number hides error), with a four step strip and the judgement that the forecast is useful for next year." loading="lazy">
  <figcaption>Evaluate by weighing benefits against limits, then judge.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-business-marketing--07-forecast-and-capacity.webp" width="900" height="1114" alt="Bars compare August actual and September and October forecasts with a 540 capacity line. October is 6 above capacity. Cards show operations, HR and finance consequences and the warning to test the forecast before a bigger workshop." loading="lazy">
  <figcaption>A forecast above capacity triggers decisions in operations, HR and finance.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-business-marketing--08-forecast-error.webp" width="900" height="760" alt="Two bars show the September forecast of 531 and the actual 509, 22 units lower. Forecast error is (509 - 531) / 531 x 100 = -4.1 percent: sales came in below forecast." loading="lazy">
  <figcaption>Forecast error compares actual with forecast as a percentage of the forecast.</figcaption>
</figure>


## Limitations at a glance

| Limitation | Why it matters |
|---|---|
| Past data | Assumes yesterday's pattern continues |
| External change | Competitors, tastes, the economy, technology and regulation move demand |
| Shocks | One-off events are not in any data set |
| Time horizon | Longer forecasts carry more error |
| Thin data | New products or few data points give weak lines |
| Bias | Optimistic or cautious managers distort figures |
| Cost and time | Data work uses resources |
| False confidence | A precise number can hide a wide range of outcomes |

## Method: simple linear regression (HL only)

The guide gives the headings only (scatter diagrams, line of best fit, correlation/extrapolation). The formulas below are the standard least-squares form.

1. Number the periods x = 1, 2, 3 and so on. Record sales as y.
2. Find the means x̄ and ȳ.
3. Find Sxy = sum of (x − x̄)(y − ȳ) and Sxx = sum of (x − x̄)².
4. Gradient b = Sxy / Sxx. Intercept a = ȳ − b·x̄.
5. Write the line as y = a + bx.
6. Substitute the next period's x to forecast.
7. Check correlation r (between −1 and +1) before trusting the line.

| Item | Standard form |
|---|---|
| Line of best fit | y = a + bx |
| Gradient | b = Sxy / Sxx |
| Intercept | a = ȳ − b·x̄ |
| Correlation coefficient | r = Sxy / √(Sxx × Syy), where Syy is the sum of (y − ȳ)² |

### Worked reminder

Ulverne Cycles sold 120, 132, 145, 151 and 166 bikes in years 1 to 5.

- x̄ = 3 and ȳ = 142.8.
- Sxy = 111 and Sxx = 10, so b = 11.1.
- a = 142.8 − 11.1 × 3 = 109.5.
- Line: y = 109.5 + 11.1x.
- Year 6 forecast: 109.5 + 11.1 × 6 = 176.1, about 176 bikes.
- r = 0.994, a very strong positive correlation, so a one-year-ahead forecast looks reasonable.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-business-management-sales-forecasting-hl-only--10-orsini-extrapolation.webp" width="900" height="1030" alt="Scatter of Orsini sales years 1 to 6 (310, 345, 372, 410, 428, 465) with the line y = 282.13 + 30.34x. The dashed extension gives about 495 boards in year 7 and about 737 in year 15; a widening band shows doubt grows with distance (illustrative width)." loading="lazy">
  <figcaption>Extrapolating one year is reasonable; extrapolating nine years beyond the data is risky.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-business-management-sales-forecasting-hl-only--11-correlation-strong-weak.webp" width="900" height="1120" alt="Two scatter diagrams. Orsini boards: points hug y = 282.13 + 30.34x, r = 0.997, year 7 forecast about 495. Dravik speakers: points scatter around a flat line y = 225.33 - 2.00x, r = -0.09, forecast about 211 is unreliable." loading="lazy">
  <figcaption>A strong correlation supports a forecast; a weak one means the line explains almost nothing.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-business-management-sales-forecasting-hl-only--10-least-squares-boxes.webp" width="900" height="1050" alt="A scatter of six years of Orsini sales with boxes from each point to the mean (3.5 years, 388.33 boards). The box areas are 195.8, 65.0, 8.2, 10.8, 59.5 and 191.7, summing to Sxy = 531.0. With Sxx = 17.5, b = 30.34 and a = 282.13." loading="lazy">
  <figcaption>Sxy adds up the deviation boxes; dividing by Sxx gives the gradient.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-business-management-marketing--03-sales-forecasting-regression.webp" width="900" height="880" alt="A scatter diagram of eight illustrative quarters of sales with a computed least-squares line of best fit (r = 0.97). The dashed extension forecasts quarters 9 and 10 at about 62.7 and 65.4 thousand units, with vertical bars showing the doubt around each forecast." loading="lazy">
  <figcaption>A line of best fit can be extended to forecast, but the forecast is a prediction with uncertainty.</figcaption>
</figure>


## Reading correlation

| Value of r | Reading |
|---|---|
| Close to +1 | Strong positive: sales rise steadily with time |
| Close to −1 | Strong negative: sales fall steadily with time |
| Close to 0 | Little or no straight-line relationship: the line is a poor guide |

High correlation shows that past points fit a line. It does not show that the future will follow it.

## Must-know distinctions

- **Sales forecast and cash flow forecast.** A sales forecast predicts sales. A cash flow forecast predicts money in and out. The first feeds the second.
- **Interpolation and extrapolation.** Interpolation stays inside the data range. Extrapolation goes beyond it and is less reliable.
- **Strong fit and accurate forecast.** A strong fit describes the past. Accuracy depends on whether the future behaves like the past.
- **Benefit and limitation.** A benefit is what the forecast lets you do. A limitation is why it may mislead. An evaluation needs both and a judgement.
- **Forecast and target.** A forecast is a prediction. A target is a goal. Managers sometimes treat one as the other.

## Factors that decide the weighing

| Factor | Forecast more useful when | Forecast less useful when |
|---|---|---|
| Market | Stable, mature demand | Fast-changing tastes or technology |
| Horizon | Next month or next year | Several years ahead |
| Cost of error | Stock can be stored or output changed quickly | Goods perish or commitments cannot be undone |
| Data | Many periods, high correlation | Few periods, correlation near zero |
| Flexibility | Spare capacity, short supplier lead times | Fixed capacity, long lead times |

## Linking to other units

A forecast is an input to other plans, so an error spreads. Too high a forecast leads to surplus stock, tied-up cash and possible price cuts. Too low a forecast leads to stockouts, unmet orders and lost customers. When a case study gives a forecast, test it against capacity, cash and staffing before you praise it.

## Percentage check

Forecast error is often expressed against the actual figure: (forecast − actual) / actual × 100. If a forecast is 500 and actual is 460, the forecast was 8.7% above actual sales. State which base you used.

## How to write an evaluation (AO3)

1. Benefit tied to the business and a decision it supports.
2. Limitation tied to a feature of the case.
3. Weigh using market stability, time horizon, cost of error, data quality and flexibility.
4. Judgement with a reason, such as "useful for next year, less so for five years, because...".

## Quick self-test

1. Define a sales forecast.
2. State two benefits of sales forecasting.
3. State two limitations of sales forecasting.
4. Ulverne's line is y = 109.5 + 11.1x. Forecast sales for year 6.
5. For Ulverne, r = 0.994. What does this suggest?
6. Use the same line to forecast year 20. Should the owner rely on it?
7. Distinguish between interpolation and extrapolation.
8. A bakery forecast 500 loaves and sold 460. By what percentage did the forecast exceed actual sales? Give the answer to 1 decimal place.
9. What does the command term "evaluate" ask you to do?
10. Explain how a sales forecast links to a cash flow forecast.
11. Give the standard formula for the gradient b.

### Answers

1. A prediction of the sales (units, revenue or both) a business expects over a future period.
2. Any two, such as: better production and stock planning; support for the cash flow forecast and borrowing; guides recruitment; helps set marketing budgets; provides targets to check against.
3. Any two, such as: relies on past data; external changes such as competitors or tastes; unexpected events; less reliable further ahead; thin data; bias.
4. 109.5 + 11.1 × 6 = 176.1, so about 176 bikes.
5. A very strong positive correlation. Sales have risen steadily and the points fit the line closely, which supports a short-range forecast.
6. 109.5 + 11.1 × 20 = 331.5, so about 332 bikes. This is far beyond the five years of data, so the owner should not rely on it. The market, competitors or tastes could change.
7. Interpolation reads a value from inside the range of the data. Extrapolation extends the line beyond the data and carries more risk.
8. (500 − 460) / 460 × 100 = 8.7%.
9. Make an appraisal by weighing up strengths and limitations, and reach a reasoned judgement.
10. Expected sales revenue shapes expected cash inflows, and expected volumes shape purchases and wages, which are cash outflows. A wrong sales forecast therefore makes the cash flow forecast wrong too.
11. b = Sxy / Sxx, where Sxy is the sum of (x − x̄)(y − ȳ) and Sxx is the sum of (x − x̄)².

## Where marks are usually lost

- Listing benefits and limitations in general terms without linking them to the business in the case.
- Stopping at "it might be wrong" instead of saying what in the case could make it wrong.
- Calling a forecast certain, or calling it useless, with no balance.
- Treating a high correlation as proof of future accuracy.
- Extrapolating a long way from the data and quoting the answer with no warning.
- Mixing up the sales forecast and the cash flow forecast.
- Leaving out the judgement in an "evaluate" or "justify" question.
- Slips in the regression arithmetic, such as using the wrong mean or mixing up the sign of b. Show each step so the working can be followed.

## Next steps

Try the [practice questions](/resources/ib-dp-business-management-sales-forecasting-hl-only-practice/), return to the [study guide](/resources/ib-dp-business-management-sales-forecasting-hl-only/) for any gaps, and tick off the topic on the [checklist](/checklists/ib/ib-dp/business/).

## Frequently asked questions

**What is the difference between interpolation and extrapolation?**
Interpolation reads a value from inside the range of the data. Extrapolation extends the line beyond the data to predict a future value, which becomes less reliable the further it goes.

**How do you calculate forecast error as a percentage?**
Forecast error is often expressed against the actual figure: (forecast − actual) ÷ actual × 100. For example, forecasting 500 loaves and selling 460 gives an error of 8.7%.

**What is the difference between a sales forecast and a cash flow forecast?**
A sales forecast predicts sales, in units or revenue. A cash flow forecast predicts money coming in and going out; the sales forecast feeds into it through expected receipts.

**How do you find the gradient of a line of best fit?**
In standard form, the gradient b = Sxy ÷ Sxx, where Sxy is the sum of (x − x̄)(y − ȳ) and Sxx is the sum of (x − x̄)². The intercept is a = ȳ − b·x̄.

## Official syllabus

IB Diploma Programme *Business management guide*, first assessment 2024, published by the International Baccalaureate Organization. Sections used: 4.3 Sales forecasting (HL only), and the business management tools listing for simple linear regression (HL only).
