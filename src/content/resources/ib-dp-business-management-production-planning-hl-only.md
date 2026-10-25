---
title: "IB DP Business Management: Production planning (HL only)"
seoTitle: "IB Business 5.6 Production Planning HL Study Guide"
resourceType: "study-guides"
subject: "business"
level: ["ib"]
topic: "Unit 5: Operations management"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Business Management"]
syllabusSeries: "First assessment 2024"
order: 836
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-business-unit-5"
    subtopic: "ib-dp-business-5-6"
description: "Study guide to IB DP Business Management 5.6 (HL only): supply chains, JIT and JIC, stock control charts, capacity, defects, productivity and CTB or CTM."
author: "marlbridge-academic-team"
publishedDate: 2026-10-25
featured: false
---

This guide covers section 5.6, Production planning, in Unit 5 (Operations management) of the IB *Business management guide*, first assessment 2024. The whole section is HL only, so SL candidates do not need it. Businesses and figures below are invented.

Use it with the [revision notes](/resources/ib-dp-business-management-production-planning-hl-only-revision-notes/) and the [practice questions](/resources/ib-dp-business-management-production-planning-hl-only-practice/). The course hub is [IB DP Business Management](/boards/ib/ib-dp/business/), the printable list is the [syllabus checklist](/checklists/ib/ib-dp/business/), and the [free diagnostics](/diagnostics/) show where to start. For contribution and fixed and variable costs, see [costs and revenues](/resources/ib-dp-business-management-costs-and-revenues/). For stock turnover as a ratio, see the [efficiency ratio page](/resources/ib-dp-business-management-profitability-and-liquidity-ratio-analysis-and-efficiency-ratio-analysis-hl-only/).

## What 5.6 asks you to know

| Content point in the guide | Depth in the guide | Covered under |
|---|---|---|
| Local and global supply chain process | AO2 | Supply chains |
| Difference between JIT and just-in-case (JIC) | AO3 | JIT and JIC |
| Stock control charts: lead time, buffer stock, reorder level, reorder quantity | AO2, AO4 | Stock control charts |
| Capacity utilization rate | AO2, AO4 | Capacity utilization rate |
| Defect rate | AO2, AO4 | Defect rate |
| Labour productivity, capital productivity, productivity rate, operating leverage | AO2, AO4 | Productivity and operating leverage |
| Cost to buy (CTB) and cost to make (CTM) | AO3, AO4 | CTB and CTM |

The guide's formulae section gives two formulas for this section: capacity utilization rate and productivity rate. For the other measures, this guide states the standard form and says so. AO3 points ask you to discuss and weigh, not only to define.

## The local and global supply chain process

A supply chain is the series of steps and organizations that turn raw materials into a product in the customer's hands. The usual stages are sourcing raw materials, supplier delivery, production, storage, distribution, retail or direct sale, and the customer. Information (orders, forecasts) moves back up the chain while goods move forward.

A local supply chain keeps most of those stages within one region or country. A global supply chain spreads them across countries, for example materials from one continent, assembly on another and sale in a third.

| Factor | Local chain | Global chain |
|---|---|---|
| Lead time | Usually short and predictable | Longer, with more handovers |
| Unit cost | Often higher input prices | Often lower, from cheaper labour or scale |
| Risk | Fewer border delays, one local shock can hit all suppliers | Exchange rates, port delays, tariffs, distant disruption |
| Control and communication | Easier visits and quality checks | Time zones and distance complicate checks |
| Sustainability and ethics | Shorter transport | Longer transport and harder to audit labour conditions |
| Flexibility | Quick small orders | Larger minimum orders |

Example. Ketterly Components assembles pumps. It buys castings from a foundry 40 km away (lead time 3 days) and motors from a supplier overseas (lead time 5 weeks). The motors are cheaper per unit, but Ketterly must hold more stock to cover the wait and carries exchange-rate risk. The casting supply is easy to manage but the foundry is its only local choice. A good answer weighs these effects on cost, reliability and stakeholders, then reaches a judgement for the context given.

## JIT and just-in-case (JIC)

Just-in-time (JIT) means ordering and producing only what is needed, when it is needed, so stock is kept as low as possible. Just-in-case (JIC) means holding larger stocks of materials and finished goods in case of delays or surges in demand.

| Feature | JIT | JIC |
|---|---|---|
| Stock held | Minimal | High, including buffer stock |
| Storage and holding costs | Low | High (space, insurance, damage, theft) |
| Cash tied up | Little | More |
| Reliance on suppliers | Very high | Lower |
| Response to a delay | Production may stop | Stock keeps production running |
| Response to a rush order | May be slow | Can be met from stock |
| Bulk-buying discounts | Seldom available | More likely |
| Waste and obsolescence | Low | Higher risk of unsold or out-of-date items |

JIT suits a business with reliable local suppliers, predictable demand and low-cost frequent delivery. JIC suits a business with unreliable or distant supply, goods that store safely without going off, or demand that spikes. The comparison is a spectrum: many businesses keep a small buffer even when they aim for JIT.

For the wider lean-production context, 5.3 covers JIT as a lean method. Here the focus is the planning difference and the trade-off between cost saving and risk.

## Stock control charts

A stock control chart plots the level of one item against time. With steady use and regular deliveries, it looks like a saw tooth: stock falls in a straight line, a delivery arrives, stock jumps up, and the pattern repeats.

The four terms the guide lists:

- Lead time: the time between placing an order and receiving it.
- Buffer stock: the minimum stock kept as a safety margin against late delivery or higher use.
- Reorder level: the stock level at which a new order is placed.
- Reorder quantity: the amount ordered each time.

The guide does not give formulas for these. The standard forms are:

- Reorder level = buffer stock + (usage per day × lead time in days)
- Maximum stock = buffer stock + reorder quantity (when the delivery arrives just as stock reaches the buffer level)
- Days between orders = reorder quantity ÷ usage per day

An ASCII sketch of the pattern (time runs left to right):

    stock
    680 |\        /|\
        | \      / | \
    320 |--\----/--|--\--   reorder level
        |   \  /   |   \
     80 |....\/....|....\.. buffer stock
        +---------------------- time
          order placed -> lead time -> delivery

Worked example. Hallibrook Bakery uses 40 kg of a special flour each day. Lead time is 6 days, buffer stock is 80 kg and the reorder quantity is 600 kg.

1. Usage during lead time = 40 × 6 = 240 kg.
2. Reorder level = 80 + 240 = 320 kg.
3. Maximum stock = 80 + 600 = 680 kg.
4. Days between deliveries = 600 ÷ 40 = 15 days.
5. Stock falls from 680 kg to 320 kg in (680 − 320) ÷ 40 = 9 days. The order is placed then, and the delivery arrives 6 days later with 80 kg left. That agrees with 9 + 6 = 15.
6. The buffer covers 80 ÷ 40 = 2 days of normal use.

What if use rises to 55 kg per day? From the reorder level of 320 kg, six days of lead time uses 330 kg, so the delivery arrives 10 kg too late. Stock runs out after 320 ÷ 55 = 5.8 days. The buffer was too small for the higher use, which is why reorder levels and buffers need review when demand changes. A larger buffer lowers stock-out risk but raises holding costs.

## Capacity utilization rate

Capacity utilization rate = (actual output ÷ productive capacity) × 100. This formula is in the guide's formulae section.

Productive capacity is the maximum output the business can produce in a period with its present resources. Hallibrook Bakery can bake 12,000 loaves a month and bakes 9,000.

Capacity utilization rate = 9,000 ÷ 12,000 × 100 = 75%.

Interpreting the figure: 25% of capacity is unused. Fixed costs are spread over fewer units, so fixed cost per loaf is higher. With monthly fixed costs of USD 18,000, fixed cost per loaf is 2.00 at 9,000 loaves and about 1.67 at 10,800 loaves (90% utilization). A high rate improves unit cost, but near 100% there is no room for rush orders, maintenance or breakdowns, and overtime and wear rise. A low rate may point to weak demand, over-investment or seasonal swings. Responses include seeking new orders, renting out spare space, or reducing capacity, each with its own cost and risk.

## Defect rate

Defect rate = (number of defective units ÷ total units produced) × 100. This is the standard form; the guide lists defect rate without a formula.

Hallibrook Bakery makes 15,000 pies and 450 fail inspection. Defect rate = 450 ÷ 15,000 × 100 = 3%. After staff training, 225 of 15,000 fail, a rate of 1.5%.

Defects cost the business in scrap, rework, replaced goods, lost time and damage to reputation. A falling rate suggests better quality control, training or equipment. A rising rate suggests worn machines, poor materials or rushed output. Compare the rate with a target, a past period or a competitor, and ask what the defects cost in USD as well as in percent.

## Productivity and operating leverage

Productivity measures how efficiently inputs become outputs.

- Productivity rate = (total output ÷ total input) × 100. This is in the guide's formulae section. Output and input must be in the same kind of unit, usually money value.
- Labour productivity = output ÷ number of employees (or labour hours). Standard form.
- Capital productivity = output ÷ value of capital employed (such as machinery). Standard form.

Ketterly Components makes 24,000 pumps a year with 30 workers and capital equipment worth USD 400,000. It sells at USD 20, variable cost is USD 12 per pump and fixed costs are USD 144,000.

- Labour productivity = 24,000 ÷ 30 = 800 pumps per worker.
- Capital productivity = 24,000 ÷ 400,000 = 0.06 pumps per USD of capital, or 60 per USD 1,000.
- Sales revenue = 24,000 × 20 = 480,000. Total cost = 144,000 + (12 × 24,000) = 432,000.
- Productivity rate = 480,000 ÷ 432,000 × 100 = 111.1%.

A rate above 100 means output is worth more than the inputs used. Improvements may come from training, better machines, or reorganized work, but pushing workers harder can damage morale and quality.

Operating leverage links costs to profit. Standard form: degree of operating leverage = total contribution ÷ profit from operations. The guide lists the term without a formula, so state this as the standard form in an answer.

Contribution per pump = 20 − 12 = 8. Total contribution = 8 × 24,000 = 192,000. Profit = 192,000 − 144,000 = 48,000. Operating leverage = 192,000 ÷ 48,000 = 4.0.

This means a 10% rise in sales volume raises profit by about 40%: volume 26,400, contribution 211,200, profit 67,200, which is 40% above 48,000. A 10% fall cuts profit to 28,800, a 40% drop. High operating leverage (high fixed costs) magnifies gains and losses. Contribution is covered in [costs and revenues](/resources/ib-dp-business-management-costs-and-revenues/).

## Cost to buy (CTB) and cost to make (CTM)

A make-or-buy decision compares what it costs to produce a part in-house with what it costs to purchase it. Standard forms:

- CTB = purchase price per unit × quantity (plus delivery or fees, if given)
- CTM = variable cost per unit × quantity + any extra fixed cost of making

Dravenport Joinery needs 5,000 handles a year. A supplier charges USD 3.20 each. Making them needs a machine lease of USD 4,400 a year and variable cost of USD 1.90 per handle.

- CTB = 5,000 × 3.20 = 16,000.
- CTM = 4,400 + (1.90 × 5,000) = 13,900.
- Making saves 2,100 a year.

The quantity at which the two costs are equal is the extra fixed cost ÷ (buy price − variable cost) = 4,400 ÷ 1.30 = 3,385 units (rounded up). Below that, buying is cheaper. At 3,000 handles, CTB is 9,600 and CTM is 10,100.

Cost is not the only factor. Making gives control over quality, protects confidential designs and uses spare capacity, but needs capital, skills and space and removes flexibility. Buying frees resources for core activities and can be scaled up or down, but risks late delivery and a dependent supplier. A strong answer gives the numbers, then weighs these factors and the forecast demand.

## Common errors

- Writing reorder level as the maximum stock level, or forgetting the buffer when finding it.
- Dividing by actual output instead of capacity in the utilization formula.
- Calculating labour productivity per worker but comparing it with another business's figure per hour.
- Mixing units in productivity rate, such as units of output against dollars of input.
- Comparing CTB and CTM at one quantity and ignoring the volume where the answer flips.
- Claiming JIT always beats JIC. State when each suits the context.

## Official syllabus

IB Diploma Programme *Business management guide*, first assessment 2024, published by the International Baccalaureate Organization. This page covers section 5.6, Production planning (HL only).
