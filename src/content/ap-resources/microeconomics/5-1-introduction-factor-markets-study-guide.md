---
resourceId: "mb-ap-micro-5.1-study-guide"
title: "Introduction to Factor Markets: Study Guide (Microeconomics 5.1)"
description: "Learn how factor markets work, why labour demand is a derived demand, how to calculate marginal revenue product and marginal resource cost, and why labour demand slopes down and supply slopes up."
course: "microeconomics"
unit: 5
topics: ["5.1"]
resourceType: "study-guide"
prerequisites:
  - "Total product, marginal product and diminishing marginal returns (Topic 3.1)"
  - "Marginal revenue for a price taker and for a firm with market power (Units 3 and 4)"
  - "Demand, supply and market equilibrium (Unit 2)"
prerequisiteResources: ["mb-ap-micro-4.5-study-guide"]
learningObjectives:
  - "Explain how factor markets differ from product markets, and who buys and who sells in each"
  - "Name the payment to each factor of production: wages, interest and rent"
  - "Explain why the demand for labour is a derived demand that depends on productivity, the output price and the cost of the factor"
  - "Calculate marginal revenue product from a table, as the change in total revenue or as marginal product times marginal revenue"
  - "Calculate marginal resource cost from a total cost table and explain why it equals the wage when the firm hires at a given market wage"
  - "Explain, using a graph, why the quantity of labour demanded falls and the quantity supplied rises as the wage rises"
skills: ["1", "2", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "four-function"
calculatorNote: "Only subtraction and multiplication are needed. All firms and data are fictional"
related: ["mb-ap-micro-5.1-revision-notes", "mb-ap-micro-5.1-practice", "mb-ap-micro-5.1-checklist"]
next: "mb-ap-micro-5.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-microeconomics", "page-microeconomics"]
keyPoints:
  - "In factor markets the roles swap: households sell labour, capital and land, and firms buy them, paying wages, interest and rent."
  - "Labour demand is a derived demand: firms want workers only for the output they make and the revenue that output brings."
  - "Marginal revenue product (MRP) is the extra revenue from one more worker: MRP = ΔTR ÷ ΔL = MP × MR. For a price taker in the output market, MRP = MP × P."
  - "Marginal resource cost (MRC) is the extra cost of one more worker: MRC = ΔTC ÷ ΔL. A firm that pays the market wage has MRC equal to the wage."
  - "Quantity of labour demanded falls as the wage rises (MRP falls as workers are added); quantity supplied rises as the wage rises."
faqs:
  - question: "Is marginal revenue product the same as the value of the marginal product?"
    answer: "Only when the firm sells its output in a perfectly competitive market, because then marginal revenue equals price. A firm with market power must cut its price to sell more, so its MRP is lower than MP × P."
  - question: "Why is entrepreneurship not in the wage, interest and rent list?"
    answer: "The course focuses on labour, capital and land in factor markets. The reward to entrepreneurship is profit, which you met in Unit 3."
  - question: "Is marginal resource cost the same as marginal factor cost?"
    answer: "Yes. Both names describe the extra cost of hiring one more unit of a factor. You may see either on exam papers and in textbooks."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Two kinds of market

So far the course has studied **product markets**: markets for goods and services such as bread, cement or phone plans. Firms sell and households buy. Unit 5 turns to **factor markets** (also called resource markets): markets for the inputs firms use to make those products.

In a factor market the roles are **reversed**. Households own the factors of production and **sell** their services. Firms **buy** them. A nurse sells hours of work to a hospital; a landowner rents a field to a farmer; a saver lends money that a firm uses to buy machines.

<figure>
<svg viewBox="0 0 560 400" role="img" aria-labelledby="fm1-title fm1-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fm1-title">Who buys and who sells in product markets and factor markets</title>
<desc id="fm1-desc">Two boxes, Households on the left and Firms on the right. Between them are two markets. In the upper box, the product market, arrows show goods and services flowing from firms to households and spending flowing from households to firms. In the lower box, the factor market, arrows show labour, capital and land flowing from households to firms, and wages, interest and rent flowing from firms to households. Households are buyers in the product market and sellers in the factor market; firms are the reverse.</desc>
<rect x="0" y="0" width="560" height="400" fill="#ffffff"/>
<defs><marker id="fmah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="20" y="150" width="120" height="90" rx="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="80" y="200" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">Households</text>
<rect x="420" y="150" width="120" height="90" rx="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="480" y="200" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">Firms</text>
<rect x="190" y="30" width="180" height="60" rx="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="280" y="56" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Product market</text>
<text x="280" y="76" text-anchor="middle" font-size="12" fill="#1d2b44">goods and services</text>
<rect x="190" y="300" width="180" height="60" rx="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="280" y="326" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Factor market</text>
<text x="280" y="346" text-anchor="middle" font-size="12" fill="#1d2b44">labour, capital, land</text>
<path d="M480 148 L480 60 L374 60" fill="none" stroke="#1d2b44" stroke-width="2" marker-end="url(#fmah)"/>
<text x="472" y="110" text-anchor="end" font-size="12" fill="#1d2b44">goods and</text>
<text x="472" y="125" text-anchor="end" font-size="12" fill="#1d2b44">services</text>
<path d="M80 148 L80 60 L186 60" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5" marker-end="url(#fmah)"/>
<text x="88" y="110" text-anchor="start" font-size="12" fill="#1d2b44">spending</text>
<text x="88" y="125" text-anchor="start" font-size="12" fill="#1d2b44">($)</text>
<path d="M80 242 L80 330 L186 330" fill="none" stroke="#1d2b44" stroke-width="2" marker-end="url(#fmah)"/>
<text x="88" y="275" text-anchor="start" font-size="12" fill="#1d2b44">labour,</text>
<text x="88" y="290" text-anchor="start" font-size="12" fill="#1d2b44">capital, land</text>
<path d="M480 242 L480 330 L374 330" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5" marker-end="url(#fmah)"/>
<text x="472" y="275" text-anchor="end" font-size="12" fill="#1d2b44">wages, interest,</text>
<text x="472" y="290" text-anchor="end" font-size="12" fill="#1d2b44">rent ($)</text>
<text x="280" y="200" text-anchor="middle" font-size="12" fill="#1d2b44">Solid arrows: real flows</text>
<text x="280" y="218" text-anchor="middle" font-size="12" fill="#1d2b44">Dashed arrows: money flows</text>
</svg>
<figcaption>Figure 1. In the product market, firms sell and households buy. In the factor market the roles swap: households sell the services of labour, capital and land, and firms buy them. Solid arrows are real flows; dashed arrows are money.</figcaption>
</figure>

## Factors and their prices

Each factor of production earns its own kind of payment, called its **factor price**.

| Factor | Example | Factor price (payment to the owner) |
|---|---|---|
| **Labour** | hours of work by a picker, nurse or engineer | **wage** (per hour, day or year) |
| **Capital** | machines, buildings, tools used in production | **interest** (the price of using funds to buy capital) |
| **Land** | fields, sites and natural resources | **rent** |

Factor prices do two jobs. They are **incentives**: a higher wage in one job draws workers towards it. They also carry **information**: a high price for a factor tells firms it is scarce, so they should use it carefully. This topic and the next three use labour as the main example, because the labour market is the one you will be asked about most. The same ideas apply to capital and land.

## Derived demand

A firm does not want workers for their own sake. It hires a picker because the picker produces strawberries, and the strawberries can be sold. The demand for labour is therefore a **derived demand**: it is derived from the demand for the product the labour helps to make.

This explains the three things every hiring decision depends on:

1. **Productivity of the factor.** How much extra output does one more worker add? This is the **marginal product (MP)** from Topic 3.1.
2. **The price of the output.** What is that extra output worth? For a price taker, each unit sells for the market price P. For a firm with market power, the useful measure is **marginal revenue (MR)**.
3. **The cost of the factor.** How much does one more worker add to the firm's costs?

The first two combine into the benefit of hiring; the third is the cost. This is the familiar marginal benefit versus marginal cost comparison from Unit 1, applied to inputs instead of outputs.

## Marginal revenue product

**Marginal revenue product (MRP)** is the extra total revenue a firm earns from hiring one more unit of a factor.

**MRP = ΔTR ÷ ΔL** (change in total revenue ÷ change in the number of workers)

Because each extra worker adds MP units of output, and each extra unit adds MR to revenue, MRP can also be found as:

**MRP = MP × MR**

Two cases matter:

| How the firm sells its output | Marginal revenue | MRP |
|---|---|---|
| **Perfectly competitive output market** (price taker) | MR = P, the same for every unit | **MRP = MP × P**, also called the **value of the marginal product** |
| **Imperfectly competitive output market** (monopoly, oligopoly, monopolistic competition) | MR < P, because the firm must cut its price to sell more | MRP = MP × MR, which is **less than** MP × P |

Either way, MRP **falls** as more workers are hired. With capital fixed, diminishing marginal returns make MP fall. For a firm with market power, MR also falls as output rises, so MRP falls even faster.

## Marginal resource cost

**Marginal resource cost (MRC)**, also called **marginal factor cost (MFC)**, is the extra total cost of hiring one more unit of a factor.

**MRC = ΔTC ÷ ΔL**

Fixed costs do not change when one more worker is hired, so only the extra labour cost matters. If the firm can hire as many workers as it wants at the market wage (it is a **wage taker**), every extra worker adds exactly the wage to total cost. Then **MRC = wage**, and MRC is a horizontal line on a graph. (In Topic 5.4 you will meet a firm that must raise the wage to attract more workers; its MRC is above the wage.)

## Worked example 1: pickers at Saltmere Strawberry Farm

**Question.** Saltmere Strawberry Farm is a fictional farm with a fixed amount of land and equipment. It sells strawberries in a perfectly competitive market at **$4 per kilogram**. It hires pickers at the market wage of **$60 per day**, and its fixed costs are **$200 per day**.

| Pickers per day (L) | Total product (kg per day) |
|---|---|
| 0 | 0 |
| 1 | 30 |
| 2 | 55 |
| 3 | 75 |
| 4 | 90 |
| 5 | 100 |
| 6 | 105 |

(a) Calculate the marginal product and MRP of each picker.
(b) Check the MRP of the 3rd picker using total revenue.
(c) Calculate total cost and the MRC of each picker.
(d) Should the farm hire the 5th picker? Explain using MRP and MRC.

**(a)** MP = change in total product. MRP = MP × P, because Saltmere is a price taker (MR = P = $4).

| L | TP (kg) | MP (kg) | MRP = MP × $4 |
|---|---|---|---|
| 1 | 30 | 30 | $120 |
| 2 | 55 | 25 | $100 |
| 3 | 75 | 20 | $80 |
| 4 | 90 | 15 | $60 |
| 5 | 100 | 10 | $40 |
| 6 | 105 | 5 | $20 |

**(b)** Total revenue = $4 × total product. With 2 pickers, TR = 4 × 55 = $220. With 3 pickers, TR = 4 × 75 = $300. MRP of the 3rd picker = 300 − 220 = **$80**, the same as 20 × $4.

**(c)** Total cost = $200 + $60 × L: $200, $260, $320, $380, $440, $500, $560. Each picker raises total cost by **$60**, so MRC = $60 for every picker. MRC equals the wage, because the farm pays the same market wage however many pickers it hires.

**(d)** **No.** The 5th picker adds $40 to revenue (MRP) but $60 to cost (MRC). Hiring that picker would **lower profit by $20** per day.

**Check.** The MRP column falls steadily, which fits diminishing marginal returns: the land and equipment are fixed, so each extra picker has less to work with.

<figure>
<svg viewBox="0 0 560 400" role="img" aria-labelledby="fm2-title fm2-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fm2-title">Marginal revenue product and marginal resource cost at Saltmere Strawberry Farm</title>
<desc id="fm2-desc">Number of pickers per day on the horizontal axis, 0 to 7, and dollars per picker per day on the vertical axis, 0 to 140. A downward-sloping line labelled MRP joins points at 1 picker and 120 dollars, 2 and 100, 3 and 80, 4 and 60, 5 and 40, and 6 and 20. A dashed horizontal line at 60 dollars is labelled MRC equals wage equals 60 dollars. The MRP line crosses the dashed line at 4 pickers. The first three points lie above the dashed line; the 5th and 6th lie below it.</desc>
<rect x="0" y="0" width="560" height="400" fill="#ffffff"/>
<line x1="70" y1="330" x2="500" y2="330" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="330" x2="70" y2="20" stroke="#1d2b44" stroke-width="2"/>
<text x="70.0" y="348" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<text x="130.0" y="348" text-anchor="middle" font-size="12" fill="#1d2b44">1</text>
<text x="190.0" y="348" text-anchor="middle" font-size="12" fill="#1d2b44">2</text>
<text x="250.0" y="348" text-anchor="middle" font-size="12" fill="#1d2b44">3</text>
<text x="310.0" y="348" text-anchor="middle" font-size="12" fill="#1d2b44">4</text>
<text x="370.0" y="348" text-anchor="middle" font-size="12" fill="#1d2b44">5</text>
<text x="430.0" y="348" text-anchor="middle" font-size="12" fill="#1d2b44">6</text>
<text x="490.0" y="348" text-anchor="middle" font-size="12" fill="#1d2b44">7</text>
<text x="62" y="334.0" text-anchor="end" font-size="12" fill="#1d2b44">0</text>
<text x="62" y="291.1" text-anchor="end" font-size="12" fill="#1d2b44">20</text>
<text x="62" y="248.3" text-anchor="end" font-size="12" fill="#1d2b44">40</text>
<text x="62" y="205.4" text-anchor="end" font-size="12" fill="#1d2b44">60</text>
<text x="62" y="162.6" text-anchor="end" font-size="12" fill="#1d2b44">80</text>
<text x="62" y="119.7" text-anchor="end" font-size="12" fill="#1d2b44">100</text>
<text x="62" y="76.9" text-anchor="end" font-size="12" fill="#1d2b44">120</text>
<text x="62" y="34.0" text-anchor="end" font-size="12" fill="#1d2b44">140</text>
<text x="280.0" y="372" text-anchor="middle" font-size="14" fill="#1d2b44">Number of pickers per day</text>
<text x="20" y="180.0" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 20 180.0)">Dollars per picker per day</text>
<polyline points="130.0,72.9 190.0,115.7 250.0,158.6 310.0,201.4 370.0,244.3 430.0,287.1" fill="none" stroke="#1d2b44" stroke-width="3"/>
<circle cx="130.0" cy="72.9" r="5" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<text x="138.0" y="64.9" text-anchor="start" font-size="13" font-weight="600" fill="#1d2b44">120</text>
<circle cx="190.0" cy="115.7" r="5" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<text x="198.0" y="107.7" text-anchor="start" font-size="13" font-weight="600" fill="#1d2b44">100</text>
<circle cx="250.0" cy="158.6" r="5" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<text x="258.0" y="150.6" text-anchor="start" font-size="13" font-weight="600" fill="#1d2b44">80</text>
<circle cx="310.0" cy="201.4" r="5" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<text x="318.0" y="193.4" text-anchor="start" font-size="13" font-weight="600" fill="#1d2b44">60</text>
<circle cx="370.0" cy="244.3" r="5" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<text x="378.0" y="236.3" text-anchor="start" font-size="13" font-weight="600" fill="#1d2b44">40</text>
<circle cx="430.0" cy="287.1" r="5" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<text x="438.0" y="279.1" text-anchor="start" font-size="13" font-weight="600" fill="#1d2b44">20</text>
<line x1="70.0" y1="201.4" x2="490.0" y2="201.4" stroke="#1d2b44" stroke-width="2" stroke-dasharray="9 6"/>
<text x="79.0" y="218.6" text-anchor="start" font-size="12" fill="#1d2b44">MRC = wage = $60 (dashed)</text>
<text x="268.0" y="62.1" text-anchor="start" font-size="13" font-weight="600" fill="#1d2b44">MRP (solid) = MP × $4</text>
</svg>
<figcaption>Figure 2. Saltmere's MRP falls as it adds pickers, because each picker adds less fruit. MRC is the same $60 for every picker because the farm pays the market wage. Pickers 1 to 3 add more to revenue than to cost; picker 4 breaks even; pickers 5 and 6 add less.</figcaption>
</figure>

**Interpretation.** Figure 2 shows the logic the firm uses. Pickers 1 to 3 add more to revenue than to cost, picker 4 exactly covers the cost, and pickers 5 and 6 add less. Now imagine the wage changes. At $100 a day only the first 2 pickers are worth hiring; at $40 a day, 5 are. A lower wage means **more** workers are worth hiring. This is why the firm's MRP curve is its **demand curve for labour**. You will use this rule formally, and practise finding the profit-maximising number of workers, in Topic 5.3.

## Worked example 2: a firm that sets its own price

**Question.** Ferncastle Tiles is a fictional firm that makes hand-painted tiles. Its tiles are distinctive, so it faces a downward-sloping demand curve: to sell Q boxes a day, it must charge **P = $100 − Q** per box, on every box. Its daily output with each number of workers is:

| Workers (L) | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Boxes per day (Q) | 0 | 10 | 18 | 24 | 28 | 30 |

(a) Find the price, total revenue and MRP for each number of workers.
(b) Compare MRP with MP × P. Explain the difference for the 2nd worker.
(c) The wage is $200 per day. Which workers add more to revenue than to cost?

**(a)**

| L | Q | MP | P = 100 − Q | TR = P × Q | MRP = ΔTR | MP × P |
|---|---|---|---|---|---|---|
| 0 | 0 | – | 100 | 0 | – | – |
| 1 | 10 | 10 | 90 | 900 | 900 | 900 |
| 2 | 18 | 8 | 82 | 1,476 | 576 | 656 |
| 3 | 24 | 6 | 76 | 1,824 | 348 | 456 |
| 4 | 28 | 4 | 72 | 2,016 | 192 | 288 |
| 5 | 30 | 2 | 70 | 2,100 | 84 | 140 |

All money values are in dollars per day (prices in dollars per box).

**(b)** From the 2nd worker on, MRP is **less** than MP × P. Take the 2nd worker:

1. The 8 extra boxes sell at $82 each: 8 × 82 = $656. This is MP × P.
2. To sell 18 boxes instead of 10, Ferncastle must cut the price from $90 to $82 on the **first 10 boxes** too. That loses 10 × $8 = $80.
3. MRP = 656 − 80 = **$576**, matching the change in total revenue (1,476 − 900).

So MRP = MP × MR, not MP × P. A firm with market power gains less from each extra worker than the price of the output suggests.

**(c)** MRC = $200 for each worker (the market wage). Workers 1, 2 and 3 have MRP of $900, $576 and $348, all above $200. The 4th worker's MRP is $192, below $200. So **the first 3 workers** add more to revenue than to cost.

**Interpretation.** MRP falls for two reasons here: MP falls (diminishing returns) **and** MR falls (the price must be cut to sell more). Ferncastle's demand curve for labour is therefore steeper than a price taker's would be.

## The labour market: demand and supply

Add up the demand for a type of labour by all the firms that hire it and you get the **market demand for labour**. Add up all the people willing to do that job and you get the **market supply of labour**.

<figure>
<svg viewBox="0 0 560 400" role="img" aria-labelledby="fm3-title fm3-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fm3-title">Demand and supply in a labour market</title>
<desc id="fm3-desc">Quantity of labour on the horizontal axis and the wage rate on the vertical axis. A downward-sloping line labelled D L equals MRP and an upward-sloping line labelled S L cross at point E. Dashed guide lines from E mark the equilibrium wage W star on the vertical axis and the equilibrium quantity Q star on the horizontal axis. At a higher wage W1, marked on the vertical axis, a horizontal dashed line meets the demand curve at a smaller quantity Q d and the supply curve at a larger quantity Q s, showing a surplus of labour.</desc>
<rect x="0" y="0" width="560" height="400" fill="#ffffff"/>
<line x1="70" y1="330" x2="500" y2="330" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="330" x2="70" y2="20" stroke="#1d2b44" stroke-width="2"/>
<text x="280.0" y="372" text-anchor="middle" font-size="14" fill="#1d2b44">Quantity of labour (workers)</text>
<text x="20" y="180.0" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 20 180.0)">Wage rate ($ per hour)</text>
<line x1="112.0" y1="60.0" x2="448.0" y2="300.0" stroke="#1d2b44" stroke-width="3"/>
<line x1="112.0" y1="285.0" x2="448.0" y2="75.0" stroke="#1d2b44" stroke-width="3"/>
<line x1="280.0" y1="180.0" x2="280.0" y2="330" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 4"/>
<line x1="70" y1="180.0" x2="280.0" y2="180.0" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 4"/>
<text x="280.0" y="348" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">Q*</text>
<text x="62" y="184.0" text-anchor="end" font-size="12" font-weight="600" fill="#1d2b44">W*</text>
<circle cx="280.0" cy="180.0" r="5" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<text x="290.0" y="184.0" text-anchor="start" font-size="13" font-weight="600" fill="#1d2b44">E</text>
<line x1="70.0" y1="120.0" x2="376.0" y2="120.0" stroke="#1d2b44" stroke-width="1" stroke-dasharray="9 6"/>
<text x="62" y="124.0" text-anchor="end" font-size="12" font-weight="600" fill="#1d2b44">W₁</text>
<circle cx="196.0" cy="120.0" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="376.0" cy="120.0" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<line x1="196.0" y1="120.0" x2="196.0" y2="330" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 4"/>
<line x1="376.0" y1="120.0" x2="376.0" y2="330" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 4"/>
<text x="196.0" y="348" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">Qd</text>
<text x="376.0" y="348" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">Qs</text>
<text x="286.0" y="108.0" text-anchor="middle" font-size="12" fill="#1d2b44">surplus of labour</text>
<text x="452.2" y="294.0" text-anchor="start" font-size="13" font-weight="600" fill="#1d2b44">D<tspan font-size="10" dy="4">L</tspan><tspan dy="-4"> = MRP</tspan></text>
<text x="439.6" y="60.0" text-anchor="end" font-size="13" font-weight="600" fill="#1d2b44">S<tspan font-size="10" dy="4">L</tspan></text>
</svg>
<figcaption>Figure 3. In a labour market, demand (D<sub>L</sub>) slopes down and supply (S<sub>L</sub>) slopes up. They meet at the equilibrium wage W* and quantity Q*. At a wage above W*, such as W₁, more people want to work (Qs) than firms want to hire (Qd).</figcaption>
</figure>

**Why labour demand slopes down.** The quantity of labour demanded is **negatively related** to the wage, other things constant. Each firm's demand is its MRP curve, and MRP falls as more workers are hired. When the wage falls, workers whose MRP was below the old wage become worth hiring, so firms hire more. When the wage rises, fewer workers are worth hiring.

**Why labour supply slopes up.** The quantity of labour supplied is **positively related** to the wage, other things constant. A higher wage:

- raises the **opportunity cost of leisure**, so people choose to work more hours;
- draws workers into **this** market from other occupations and from outside the labour force.

**Equilibrium.** The market wage settles where quantity demanded equals quantity supplied (W* and Q* in Figure 3). Above W*, there is a **surplus** of labour: more people want jobs than firms want to fill, so the wage tends to fall. Below W*, there is a **shortage**, so firms compete for workers and the wage tends to rise.

**Movement, not shift.** A change in the wage causes a **movement along** the demand and supply curves: a change in **quantity** demanded or supplied. Things other than the wage, such as the price of the product, workers' productivity or immigration, **shift** the curves. That is Topic 5.2.

## Common misconceptions

- **"In factor markets, households are the buyers."** Households sell factor services; firms buy them. It is the reverse of a product market.
- **"MRP is the marginal product."** MP is measured in units of output (kilograms, boxes). MRP is measured in **dollars**: it is MP turned into revenue.
- **"MRP = total product × price."** That is total revenue. MRP uses the **change** in output (MP) or the change in total revenue.
- **"MRP always equals MP × P."** Only for a price taker in the output market. A firm with market power must cut its price to sell more, so its MRP = MP × MR is lower (Worked example 2).
- **"MRC includes fixed costs."** Fixed costs do not change when one more worker is hired. MRC is the **change** in total cost.
- **"A higher wage shifts the labour demand curve left."** A wage change moves the market **along** the curve. Only a change in a determinant other than the wage shifts it.
- **"Firms demand labour because they need workers."** Firms demand labour only for the output it produces and the revenue that output brings: it is a derived demand.

## Where this leads

You now have the two measures that drive every hiring decision: MRP (the benefit of a worker) and MRC (the cost). Next, [Topic 5.2, Changes in Factor Demand and Factor Supply](/advanced-course-resources/microeconomics/5-2-changes-factor-demand-factor-supply-study-guide/), explains what shifts the labour demand and supply curves. Then Topic 5.3 puts MRP and MRC together to find the number of workers a profit-maximising firm hires. Test yourself with the [practice questions](/advanced-course-resources/microeconomics/5-1-introduction-factor-markets-practice/), then use the [revision notes](/advanced-course-resources/microeconomics/5-1-introduction-factor-markets-revision-notes/) and the [checklist](/advanced-course-resources/microeconomics/5-1-introduction-factor-markets-checklist/) to consolidate. For the product-market topic just before this one, see [Topic 4.5, Oligopoly and Game Theory](/advanced-course-resources/microeconomics/4-5-oligopoly-game-theory-study-guide/).
