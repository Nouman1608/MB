---
title: "OCR A Level Business (H431): Stock control"
resourceType: "study-guides"
subject: "business"
level: ["a-levels"]
topic: "Operational strategy"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H431"]
syllabusSeries: "Version 2.1 (January 2026), for first assessment in 2017; final assessment summer 2027"
order: 4.1
syllabusTopics:
  - qualification: "a-level"
    topic: "operational-strategy-ocr-alevel-business"
    subtopic: "stock-control-ocr-alevel-business"
description: "Study guide to stock control for OCR A Level Business H431: stock control charts, reorder levels, EOQ, JIT, kanban, other methods and links to production methods."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers the Stock control content in the area of study Productive efficiency, part of the Operational strategy topic of the OCR A Level Business (H431) specification, Version 2.1 (January 2026), final assessment summer 2027. It is numbered 4.10 on this site; the specification does not number its content headings. The [operational strategy study guide](/resources/ocr-a-level-business-operational-strategy/) gives the short version. This page goes further: it builds a stock control chart step by step, works through economic order quantity, compares just in time with holding buffer stock and links stock control to the method of production. All businesses and figures are invented.

Use it with the [stock control revision notes](/resources/ocr-a-level-business-h431-stock-control-ocr-alevel-business-revision-notes/) and the [stock control practice questions](/resources/ocr-a-level-business-h431-stock-control-ocr-alevel-business-practice/). The course hub is [OCR A Level Business](/boards/ocr/a-level/business/).

## What the specification asks for

| Learners should be able to | Covered below |
|---|---|
| explain what is meant by stock control | Core meanings |
| explain methods of stock control: stock control charts, JIT, kanban, fixed reorder stock level, fixed time reordering, economic order quantity and electronic methods | Methods of stock control |
| construct, calculate and interpret stock control charts: buffer stock, reorder level and quantities and lead time | Worked examples 1 and 2 |
| evaluate the impact and importance of holding and controlling stock | Worked example 3 |
| evaluate the relationship between stock control and methods of production | Stock control and production methods |

## Core meanings

**Stock** (inventory) is the materials, work in progress and finished goods a business holds. **Stock control** is managing the amount of stock so the business has enough to meet demand without holding more than it needs.

Holding stock has benefits and costs.

- **Benefits:** production and sales are not interrupted by shortages; bulk orders may earn discounts; the business can meet sudden rises in demand.
- **Costs:** storage space, insurance and security; money tied up in stock that could be used elsewhere (the cost of finance); risk of damage, theft, waste or going out of date; and the risk that products become unfashionable.

Too little stock causes **stock-outs**: lost sales, idle workers, rush orders at high prices and unhappy customers. Too much stock causes high holding costs. Stock control is the search for the point between the two.

## The stock control chart

A stock control chart plots the amount of stock against time. Four terms are needed.

- **Buffer stock:** the minimum level the business aims never to go below. It protects against late deliveries or unexpected demand.
- **Lead time:** the time between placing an order and receiving it.
- **Reorder level:** the stock level at which a new order is placed.
- **Reorder quantity:** the amount ordered each time.

The specification does not print formulae, so use these standard forms:

- Reorder level = buffer stock + (usage per day × lead time in days)
- Maximum stock = reorder level + reorder quantity − (usage per day × lead time)

The first formula says: place the order early enough that stock falls to the buffer level just as the delivery arrives. The second says: when the delivery arrives, stock is at the buffer, and the delivery lifts it to the buffer plus the reorder quantity.

### Worked example 1: constructing the chart

Hendry Paints (invented) uses 40 tins of base paint a day. Lead time is 5 days. Buffer stock is 150 tins and the reorder quantity is 500 tins.

Reorder level = 150 + (40 × 5) = 150 + 200 = **350 tins**.

Maximum stock = 350 + 500 − (40 × 5) = 350 + 500 − 200 = **650 tins**. This also equals buffer plus reorder quantity: 150 + 500 = 650.

The cycle works as follows.

| Day | Event | Stock |
|---|---|---|
| 0 | Delivery arrives | 650 |
| 7.5 | Stock reaches reorder level, order placed | 350 |
| 12.5 | Delivery arrives after 5 days; stock had fallen to buffer | 150, then 650 |

Time from the maximum to the reorder level = (650 − 350) ÷ 40 = 7.5 days. A full cycle lasts 500 ÷ 40 = 12.5 days, so orders are placed about every 12.5 working days.

To draw the chart, put time on the horizontal axis and stock on the vertical axis. Draw a line sloping down from 650 to 150 at a steady 40 a day, and a vertical line up to 650 on delivery. Mark horizontal lines for the buffer (150) and the reorder level (350), and show the lead time as the gap between the order and the delivery.

### Interpreting the chart

The chart rests on assumptions: steady usage and a reliable lead time. In real businesses neither is certain.

- If the lead time rises to 8 days, usage during the wait is 40 × 8 = 320. Stock would be 350 − 320 = 30 tins on delivery, 120 below the buffer. The reorder level should rise to 150 + 320 = **470**.
- If usage rises to 70 tins a day for the 5-day lead time, usage is 350 tins and stock falls to 350 − 350 = 0 on the day of delivery. The buffer has gone and any more delay means a stock-out.

A larger buffer reduces the risk but increases holding costs. The right size depends on how reliable the supplier is, how costly a stock-out would be and how much it costs to hold stock.

## Methods of stock control

- **Stock control charts and reorder levels.** Use the chart above to decide when to order.
- **Fixed reorder stock level.** Order a fixed quantity when stock reaches the reorder level. The time between orders varies with demand.
- **Fixed time reordering.** Order at fixed intervals, such as every Friday, and vary the quantity to bring stock up to a target. If the target is 650 and stock on hand at the review is 400, order 250. This suits businesses that deliver on a schedule, but needs a larger buffer because stock can run out between reviews.
- **Economic order quantity (EOQ).** The order size that gives the lowest total of ordering cost and holding cost. In standard form EOQ = √(2 × annual demand × cost per order ÷ annual holding cost per unit). It assumes steady demand and constant costs.
- **Just in time (JIT).** Materials arrive when they are needed for production, so stock is kept to a minimum. It requires reliable suppliers, frequent small deliveries and few quality problems.
- **Kanban.** A signal system from the JIT approach. A card or container tells the previous stage to supply more only when material has been used, so production is pulled by demand rather than pushed.
- **Electronic methods.** Barcode scanning, electronic point of sale and stock software record stock in real time, trigger automatic orders at the reorder level and reduce errors. They need investment and training and fail if the system goes down.

## Worked example 2: economic order quantity

Hendry's annual demand is 40 × 250 working days = 10,000 tins. Each order costs £80 to place. Holding one tin for a year costs £2.50.

EOQ = √(2 × 10,000 × 80 ÷ 2.50) = √640,000 = **800 tins**.

Compare total costs (ordering plus holding) at the current order size of 500 and the EOQ. Average stock is taken as half the order size.

| Order size | Orders per year | Ordering cost | Holding cost | Total |
|---|---|---|---|---|
| 500 | 20 | £1,600 | £625 | £2,225 |
| 800 | 12.5 | £1,000 | £1,000 | £2,000 |

At the EOQ, ordering cost equals holding cost, which is a useful check. Moving to 800 tins saves £225 a year.

Limits of EOQ: it assumes that demand is steady, that the supplier does not offer discounts for larger orders and that costs do not change. It does not allow for storage space or the risk that stock goes out of date. A paint business with a limited shelf life may not be able to order 800 tins at a time.

## Worked example 3: holding stock against just in time

Hendry's average stock is (150 + 650) ÷ 2 = 400 tins. Each tin cost £6, so £2,400 of cash is tied up. If holding costs are 25% of stock value a year, this costs £600.

Suppose the business moves to JIT with an average of 60 tins. The value is £360 and the holding cost is £90. The saving is £2,400 × 25% − £360 × 25% = £600 − £90 = **£510 a year**, and £2,040 of cash is freed.

The costs of JIT are less obvious. The business would need weekly or daily deliveries, so transport costs may rise. It loses bulk discounts. If one delivery is late, the production line stops. If production stopped for a day and the lost contribution were £4,800, a single late delivery would wipe out almost ten years of the holding-cost saving (£4,800 ÷ £510 = 9.4 years).

**Evaluation.** The figures show that the holding-cost saving is modest compared with the damage of a stoppage. JIT makes sense only if suppliers are close, reliable and communicate electronically, and if there is a good record of on-time delivery. A cautious option is to cut the buffer stock gradually while measuring the reliability of the supplier. The decision also depends on the nature of the product: perishable or bulky stock favours JIT, while materials that are scarce or have long lead times favour holding buffer stock.

**Stakeholders.** Employees may lose work if stock runs out. Suppliers must deliver more often to a tighter timetable. Customers depend on stock being available. Owners gain from the cash freed but risk lost sales.

## Stock control and production methods

- **Job production** (one-off items): stock is ordered for each job, so buffer stock is small, but materials may be specialised and have long lead times. Plan orders around the project timetable.
- **Batch production:** materials are drawn down in batches, and stock of work in progress builds up between stages. Fixed reorder levels and EOQ work well for materials used across many batches.
- **Flow production:** continuous output needs continuous supply. A stoppage is very costly, so buffer stock or a very reliable JIT system is essential. Kanban is common.

The pattern: the more continuous and expensive the production, the greater the cost of a stock-out, so the more careful the stock control must be.

## Evaluating the impact of holding and controlling stock

Strong answers consider:

1. **Cost.** Holding costs against the cost of shortages and rush orders.
2. **Cash flow.** Stock ties up cash. Cutting stock can free cash but may cost sales.
3. **Customer service.** Availability affects reputation.
4. **Waste.** Perishable and fashion goods lose value if held too long.
5. **Reliability of suppliers** and the length of the lead time.
6. **The method of production** and the size of the business.

## Common mistakes

- Using lead time days without multiplying by daily usage when working out the reorder level.
- Forgetting to subtract the usage during lead time when finding maximum stock.
- Saying that JIT always saves money without discussing supplier reliability.
- Confusing buffer stock (a minimum) with the reorder quantity (the amount ordered).
- Using EOQ as if demand and costs never change.

## Exam technique

Show formulae and working. If asked to construct a chart, label axes, buffer stock, reorder level, lead time and maximum stock. For "evaluate", weigh the costs and benefits in the context given, and say what the answer depends on.

Practise with the [stock control practice questions](/resources/ocr-a-level-business-h431-stock-control-ocr-alevel-business-practice/). Return to the [operational strategy study guide](/resources/ocr-a-level-business-operational-strategy/) for the other content headings in this topic.

## Official syllabus

OCR, Advanced GCE in Business (H431), specification Version 2.1 (January 2026), for first assessment in 2017: area of study Productive efficiency, content Stock control.
