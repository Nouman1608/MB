---
resourceId: "mb-ap-micro-2.3-study-guide"
title: "Price Elasticity of Demand: Study Guide (Microeconomics 2.3)"
description: "Learn what price elasticity of demand measures, how to calculate it with the midpoint method, why slope is not elasticity, what makes demand elastic, and how a price change affects total revenue."
course: "microeconomics"
unit: 2
topics: ["2.3"]
resourceType: "study-guide"
prerequisites:
  - "The law of demand and reading a demand curve (Topic 2.1)"
  - "Calculating a percentage change"
prerequisiteResources: ["mb-ap-micro-2.2-study-guide"]
learningObjectives:
  - "Define price elasticity of demand and explain what its size tells you"
  - "Calculate price elasticity of demand from a table, a graph or given percentages, using the midpoint method where needed"
  - "Classify demand as elastic, inelastic, unit elastic, perfectly elastic or perfectly inelastic over a price range"
  - "Explain why elasticity changes along a straight-line demand curve even though the slope does not"
  - "Explain how the availability of substitutes and other factors affect price elasticity of demand"
  - "Use the total revenue test to predict how a price change affects total revenue or total expenditure"
skills: ["1", "2", "3", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "four-function"
calculatorNote: "All calculations use subtraction, addition and division only. Give elasticities to 2 decimal places unless exact. All data are fictional"
related: ["mb-ap-micro-2.3-revision-notes", "mb-ap-micro-2.3-practice", "mb-ap-micro-2.3-checklist"]
next: "mb-ap-micro-2.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-microeconomics", "page-microeconomics"]
keyPoints:
  - "Price elasticity of demand (PED) = percentage change in quantity demanded ÷ percentage change in price. Economists usually quote its size and ignore the minus sign."
  - "|PED| > 1 is elastic, |PED| < 1 is inelastic and |PED| = 1 is unit elastic over the price range you measured."
  - "Use the midpoint method: divide each change by the average of the two values, so the answer is the same whether price rises or falls."
  - "Slope is not elasticity. On a straight-line demand curve, demand is elastic above the midpoint, unit elastic at it and inelastic below it."
  - "Total revenue test: if demand is elastic, price and total revenue move in opposite directions; if inelastic, they move in the same direction; if unit elastic, total revenue does not change."
faqs:
  - question: "Why is price elasticity of demand negative?"
    answer: "By the law of demand, price and quantity demanded move in opposite directions, so one percentage change is positive and the other negative. Economists usually drop the sign and compare the size with 1."
  - question: "Do I always have to use the midpoint method?"
    answer: "Use it when you are given two prices and two quantities. If a question gives you the percentage changes directly, just divide one by the other."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## What elasticity measures

The law of demand tells you the **direction** of a response: when the price of a good rises, people buy less of it. It does not tell you **how much** less. A 10% rise in the price of salt and a 10% rise in the price of one brand of trainers both cut the quantity demanded, but by very different amounts.

**Elasticity** measures the size of a response in percentage terms. Economists measure how the quantity demanded responds to a change in a good's own price, to income, or to the prices of related goods. This topic covers the first of these. Topic 2.5 covers the others.

**Price elasticity of demand (PED)** measures how responsive the quantity demanded is to a change in the good's own price:

**PED = (percentage change in quantity demanded) ÷ (percentage change in price)**

Because price and quantity demanded move in opposite directions, PED is negative. Economists usually quote its **magnitude** (its size without the sign), written |PED|. A PED of −2.5 and a |PED| of 2.5 say the same thing.

We use **percentages**, not raw changes, for two reasons. First, percentages have no units, so you can compare goods measured in kilograms, litres or tickets. Second, a $1 rise means a lot for a $2 bus fare and almost nothing for a $2,000 laptop.

## Elastic, inelastic and unit elastic

The benchmark is a magnitude of **1**, where the percentage change in quantity demanded is exactly as large as the percentage change in price.

| Value | Description | Meaning |
|---|---|---|
| \|PED\| > 1 | **elastic** | quantity demanded changes by a larger percentage than price |
| \|PED\| < 1 | **inelastic** | quantity demanded changes by a smaller percentage than price |
| \|PED\| = 1 | **unit elastic** | the two percentage changes are the same size |
| \|PED\| = 0 | perfectly inelastic | quantity demanded does not change at all |
| \|PED\| infinite | perfectly elastic | any rise above one price makes quantity demanded fall to zero |

A classification is always for **a price range**. The same demand curve can be elastic at high prices and inelastic at low ones, as you will see below.

<figure>
<svg viewBox="0 0 560 345" role="img" aria-labelledby="ped3-title ped3-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ped3-title">Perfectly inelastic and perfectly elastic demand</title>
<desc id="ped3-desc">Two small graphs side by side, each with quantity on the horizontal axis and price on the vertical axis. Left graph: a vertical demand curve at quantity Q1, labelled perfectly inelastic, PED = 0. Price can rise from P1 to P2 and quantity demanded stays at Q1. Right graph: a horizontal demand curve at price P1, labelled perfectly elastic, PED infinite. At any price above P1 quantity demanded falls to zero.</desc>
<rect x="0" y="0" width="560" height="345" fill="#ffffff"/>
<line x1="50" y1="260" x2="260" y2="260" stroke="#1d2b44" stroke-width="2"/>
<line x1="50" y1="260" x2="50" y2="40" stroke="#1d2b44" stroke-width="2"/>
<text x="155" y="298" text-anchor="middle" font-size="13" fill="#1d2b44">Quantity</text>
<text x="22" y="150" text-anchor="middle" font-size="13" fill="#1d2b44" transform="rotate(-90 22 150)">Price</text>
<line x1="330" y1="260" x2="540" y2="260" stroke="#1d2b44" stroke-width="2"/>
<line x1="330" y1="260" x2="330" y2="40" stroke="#1d2b44" stroke-width="2"/>
<text x="435" y="298" text-anchor="middle" font-size="13" fill="#1d2b44">Quantity</text>
<text x="302" y="150" text-anchor="middle" font-size="13" fill="#1d2b44" transform="rotate(-90 302 150)">Price</text>
<line x1="150" y1="50" x2="150" y2="260" stroke="#1d2b44" stroke-width="3"/>
<text x="150" y="275" text-anchor="middle" font-size="12" fill="#1d2b44">Q₁</text>
<line x1="50" y1="180" x2="150" y2="180" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4"/>
<line x1="50" y1="110" x2="150" y2="110" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4"/>
<text x="44" y="184" text-anchor="end" font-size="12" fill="#1d2b44">P₁</text>
<text x="44" y="114" text-anchor="end" font-size="12" fill="#1d2b44">P₂</text>
<circle cx="150.0" cy="180.0" r="5" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<circle cx="150.0" cy="110.0" r="5" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<text x="158" y="66" text-anchor="start" font-size="13" font-weight="600" fill="#1d2b44">D</text>
<text x="155" y="328" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">Perfectly inelastic: PED = 0</text>
<line x1="330" y1="140" x2="530" y2="140" stroke="#1d2b44" stroke-width="3"/>
<text x="324" y="144" text-anchor="end" font-size="12" fill="#1d2b44">P₁</text>
<text x="520" y="132" text-anchor="start" font-size="13" font-weight="600" fill="#1d2b44">D</text>
<text x="420" y="328" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">Perfectly elastic: PED infinite</text>
</svg>
<figcaption>Figure 1. The two extreme cases. A vertical demand curve (left) is perfectly inelastic: a higher price changes nothing about the quantity demanded. A horizontal demand curve (right) is perfectly elastic: buyers will pay P₁ but nothing above it.</figcaption>
</figure>

Real goods lie between these extremes. The extremes are still useful limits: a good with no substitutes at all is close to the left graph, and one seller's identical product in a market with many identical sellers is close to the right one.

## The midpoint method

Suppose a price rises from $4 to $6. Measured from $4, that is a 50% rise. If the price falls from $6 back to $4, measured from $6, it is a 33% fall. The same change gives two different percentages, so it would give two different elasticities.

The **midpoint method** fixes this by dividing each change by the **average** of the two values:

- **% change in Q = (Q₂ − Q₁) ÷ [(Q₁ + Q₂) ÷ 2] × 100**
- **% change in P = (P₂ − P₁) ÷ [(P₁ + P₂) ÷ 2] × 100**
- **PED = % change in Q ÷ % change in P**

With the midpoint method you get the same answer whichever direction the price moves. The most common error on exams is to divide the **change** in quantity by the **change** in price. That gives the slope-type ratio, not the elasticity. Always convert both changes to percentages first.

If a question gives you the percentage changes directly ("price rises by 10% and quantity falls by 4%"), you do not need the midpoint method: PED = 4 ÷ 10 = 0.4.

## Slope is not elasticity

**Brightwater Aquarium** is a fictional visitor attraction. Its daily demand for tickets is a straight line:

| Price ($ per ticket) | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 |
|---|---|---|---|---|---|---|---|---|---|
| Quantity (tickets per day) | 180 | 160 | 140 | 120 | 100 | 80 | 60 | 40 | 20 |
| Total revenue ($ per day) | 360 | 640 | 840 | 960 | 1,000 | 960 | 840 | 640 | 360 |

Every $2 rise in price cuts quantity by 20 tickets. The slope is the same everywhere. But the **percentage** changes are not. At low prices, a $2 rise is a large percentage of the price and 20 tickets is a small percentage of a large quantity. At high prices, it is the other way round.

<figure>
<svg viewBox="0 0 560 400" role="img" aria-labelledby="ped1-title ped1-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ped1-title">Brightwater Aquarium demand curve and its elastic and inelastic sections</title>
<desc id="ped1-desc">Graph with quantity of tickets per day on the horizontal axis, 0 to 200, and price in dollars per ticket on the vertical axis, 0 to 20. A straight downward-sloping demand curve D runs from 20 dollars at zero tickets to zero dollars at 200 tickets. The midpoint, at 10 dollars and 100 tickets, is marked and labelled unit elastic. The upper section, above the midpoint, is labelled elastic, with the magnitude of price elasticity greater than 1. The lower section, below the midpoint, is labelled inelastic, with magnitude less than 1. Points G at 14 dollars and 60 tickets and H at 16 dollars and 40 tickets are on the elastic section. Points A at 4 dollars and 160 tickets and B at 6 dollars and 140 tickets are on the inelastic section.</desc>
<rect x="0" y="0" width="560" height="400" fill="#ffffff"/>
<line x1="70" y1="330" x2="500" y2="330" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="330" x2="70" y2="30" stroke="#1d2b44" stroke-width="2"/>
<text x="70" y="348" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<text x="150" y="348" text-anchor="middle" font-size="12" fill="#1d2b44">40</text>
<text x="230" y="348" text-anchor="middle" font-size="12" fill="#1d2b44">80</text>
<text x="310" y="348" text-anchor="middle" font-size="12" fill="#1d2b44">120</text>
<text x="390" y="348" text-anchor="middle" font-size="12" fill="#1d2b44">160</text>
<text x="470" y="348" text-anchor="middle" font-size="12" fill="#1d2b44">200</text>
<text x="62" y="278" text-anchor="end" font-size="12" fill="#1d2b44">4</text>
<text x="62" y="222" text-anchor="end" font-size="12" fill="#1d2b44">8</text>
<text x="62" y="166" text-anchor="end" font-size="12" fill="#1d2b44">12</text>
<text x="62" y="110" text-anchor="end" font-size="12" fill="#1d2b44">16</text>
<text x="62" y="54" text-anchor="end" font-size="12" fill="#1d2b44">20</text>
<text x="270" y="372" text-anchor="middle" font-size="14" fill="#1d2b44">Quantity of tickets (per day)</text>
<text x="20" y="190" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 20 190)">Price ($ per ticket)</text>
<line x1="70" y1="50" x2="470" y2="330" stroke="#1d2b44" stroke-width="3"/>
<circle cx="270.0" cy="190.0" r="5" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="190" x2="270" y2="190" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4"/>
<line x1="270" y1="190" x2="270" y2="330" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4"/>
<text x="282" y="184" text-anchor="start" font-size="13" font-weight="600" fill="#1d2b44">M: unit elastic (|PED| = 1)</text>
<circle cx="390.0" cy="274.0" r="5" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<text x="399" y="266" text-anchor="start" font-size="13" font-weight="600" fill="#1d2b44">A</text>
<circle cx="350.0" cy="246.0" r="5" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<text x="359" y="238" text-anchor="start" font-size="13" font-weight="600" fill="#1d2b44">B</text>
<circle cx="190.0" cy="134.0" r="5" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<text x="199" y="126" text-anchor="start" font-size="13" font-weight="600" fill="#1d2b44">G</text>
<circle cx="150.0" cy="106.0" r="5" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<text x="159" y="98" text-anchor="start" font-size="13" font-weight="600" fill="#1d2b44">H</text>
<text x="230" y="100" text-anchor="start" font-size="13" fill="#1d2b44">Elastic section (above M):</text>
<text x="230" y="116" text-anchor="start" font-size="13" fill="#1d2b44">|PED| &gt; 1</text>
<text x="405" y="222" text-anchor="start" font-size="13" fill="#1d2b44">Inelastic section</text>
<text x="405" y="238" text-anchor="start" font-size="13" fill="#1d2b44">(below M): |PED| &lt; 1</text>
<text x="454" y="295.0" text-anchor="start" font-size="13" font-weight="600" fill="#1d2b44">D</text>
</svg>
<figcaption>Figure 2. Brightwater's straight-line demand curve has the same slope everywhere, but its elasticity changes. Above the midpoint M demand is elastic; at M it is unit elastic; below M it is inelastic. Points A and B are used in Worked example 1, as are G and H.</figcaption>
</figure>

On any straight-line demand curve that meets both axes:

- demand is **elastic above the midpoint** (high price, small quantity);
- **unit elastic at the midpoint**, here $10 and 100 tickets;
- **inelastic below the midpoint** (low price, large quantity).

So you cannot judge elasticity just by how steep a curve looks. A steeper curve is less elastic than a flatter one **only when you compare them at the same point** (same price and quantity) on the same axes.

## Elasticity and total revenue

**Total revenue (TR)** is what sellers receive: TR = price × quantity. It is also the **total expenditure** of buyers on the good. A price change pulls TR in two directions: each unit sold earns more (or less), but fewer (or more) units are sold. Elasticity tells you which effect wins.

| Demand in the range | Price rises | Price falls |
|---|---|---|
| Elastic (\|PED\| > 1) | TR **falls** | TR **rises** |
| Inelastic (\|PED\| < 1) | TR **rises** | TR **falls** |
| Unit elastic (\|PED\| = 1) | TR unchanged | TR unchanged |

This is the **total revenue test**. A short way to remember it: with **inelastic** demand, price and TR move in the **same** direction; with **elastic** demand, they move in **opposite** directions.

<figure>
<svg viewBox="0 0 560 400" role="img" aria-labelledby="ped2-title ped2-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ped2-title">Brightwater Aquarium total revenue at each quantity</title>
<desc id="ped2-desc">Graph with quantity of tickets per day on the horizontal axis, 0 to 200, and total revenue in dollars per day on the vertical axis, 0 to 1,000. Total revenue starts at zero, rises to a maximum of 1,000 dollars at 100 tickets, then falls back to zero at 200 tickets, forming a hill shape. Points are marked at 40 tickets and 640 dollars, 60 tickets and 840 dollars, 100 tickets and 1,000 dollars, 140 tickets and 840 dollars, and 160 tickets and 640 dollars. The rising part on the left is labelled elastic demand: a price cut raises total revenue. The falling part on the right is labelled inelastic demand: a price cut lowers total revenue. The peak is labelled unit elastic.</desc>
<rect x="0" y="0" width="560" height="400" fill="#ffffff"/>
<line x1="80" y1="330" x2="510" y2="330" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="330" x2="80" y2="40" stroke="#1d2b44" stroke-width="2"/>
<text x="80" y="348" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<text x="160" y="348" text-anchor="middle" font-size="12" fill="#1d2b44">40</text>
<text x="240" y="348" text-anchor="middle" font-size="12" fill="#1d2b44">80</text>
<text x="320" y="348" text-anchor="middle" font-size="12" fill="#1d2b44">120</text>
<text x="400" y="348" text-anchor="middle" font-size="12" fill="#1d2b44">160</text>
<text x="480" y="348" text-anchor="middle" font-size="12" fill="#1d2b44">200</text>
<text x="72" y="284.0" text-anchor="end" font-size="12" fill="#1d2b44">200</text>
<text x="72" y="234.0" text-anchor="end" font-size="12" fill="#1d2b44">400</text>
<text x="72" y="184.0" text-anchor="end" font-size="12" fill="#1d2b44">600</text>
<text x="72" y="134.0" text-anchor="end" font-size="12" fill="#1d2b44">800</text>
<text x="72" y="84.0" text-anchor="end" font-size="12" fill="#1d2b44">1,000</text>
<text x="280" y="372" text-anchor="middle" font-size="14" fill="#1d2b44">Quantity of tickets (per day)</text>
<text x="20" y="190" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 20 190)">Total revenue ($ per day)</text>
<polyline points="80.0,330.0 100.0,282.5 120.0,240.0 140.0,202.5 160.0,170.0 180.0,142.5 200.0,120.0 220.0,102.5 240.0,90.0 260.0,82.5 280.0,80.0 300.0,82.5 320.0,90.0 340.0,102.5 360.0,120.0 380.0,142.5 400.0,170.0 420.0,202.5 440.0,240.0 460.0,282.5 480.0,330.0" fill="none" stroke="#1d2b44" stroke-width="3"/>
<circle cx="160.0" cy="170.0" r="5" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<circle cx="200.0" cy="120.0" r="5" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<circle cx="280.0" cy="80.0" r="5" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<circle cx="360.0" cy="120.0" r="5" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<circle cx="400.0" cy="170.0" r="5" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<text x="280" y="68.0" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">maximum TR = $1,000 at 100 tickets: unit elastic</text>
<text x="184" y="262" text-anchor="middle" font-size="12" fill="#1d2b44">elastic section:</text>
<text x="184" y="278" text-anchor="middle" font-size="12" fill="#1d2b44">price cut raises TR</text>
<text x="376" y="262" text-anchor="middle" font-size="12" fill="#1d2b44">inelastic section:</text>
<text x="376" y="278" text-anchor="middle" font-size="12" fill="#1d2b44">price cut lowers TR</text>
<text x="430" y="196.5" text-anchor="start" font-size="13" font-weight="600" fill="#1d2b44">TR</text>
</svg>
<figcaption>Figure 3. Brightwater's total revenue at each quantity. Moving right means a lower price. TR rises while demand is elastic, reaches its maximum where demand is unit elastic, and falls once demand is inelastic.</figcaption>
</figure>

The test also works backwards. If a firm cuts its price and its total revenue falls, demand must have been inelastic over that range. With the midpoint method, the link is exact: |PED| is exactly 1 when TR does not change between the two prices.

## What makes demand more or less elastic

The most important factor is the **availability of close substitutes**. Here are the main ones:

| Factor | More elastic when… | Example |
|---|---|---|
| **Substitutes** | there are many close substitutes | one brand of orange juice (other brands are easy to switch to) |
| **Necessity or luxury** | the good is a luxury rather than a necessity | holiday cruises compared with basic medicines |
| **Share of income** | the good takes a large share of the buyer's budget | a new car compared with a box of matches |
| **Time to adjust** | buyers have longer to find alternatives | electricity over five years compared with over one week |
| **How the market is defined** | the market is narrowly defined | "Brand X bread" compared with "food" |

Notice how many of these come back to substitutes. A narrow market has more substitutes than a broad one, and over time people discover or create substitutes.

## Worked example 1: same slope, different elasticity

**Question.** Use the Brightwater table.
(a) Calculate PED when the price rises from $4 to $6 (point A to point B).
(b) Calculate PED when the price rises from $14 to $16 (point G to point H).
(c) Classify each range and use the total revenue test to predict what happens to TR. Check with the table.

**(a)** From A ($4, 160 tickets) to B ($6, 140 tickets):

1. Change in Q = 140 − 160 = −20. Average Q = (160 + 140) ÷ 2 = 150. % change in Q = −20 ÷ 150 × 100 = **−13.33%**.
2. Change in P = 6 − 4 = 2. Average P = (4 + 6) ÷ 2 = 5. % change in P = 2 ÷ 5 × 100 = **40%**.
3. PED = −13.33 ÷ 40 = **−0.33**, so |PED| = 0.33.

**(b)** From G ($14, 60 tickets) to H ($16, 40 tickets):

1. Change in Q = −20. Average Q = (60 + 40) ÷ 2 = 50. % change in Q = −20 ÷ 50 × 100 = **−40%**.
2. Change in P = 2. Average P = 15. % change in P = 2 ÷ 15 × 100 = **13.33%**.
3. PED = −40 ÷ 13.33 = **−3.0**, so |PED| = 3.

**(c)** From $4 to $6, |PED| = 0.33 < 1: **inelastic**. A price rise should **raise** TR. Check: TR goes from 4 × 160 = $640 to 6 × 140 = $840, up $200.

From $14 to $16, |PED| = 3 > 1: **elastic**. A price rise should **lower** TR. Check: TR goes from 14 × 60 = $840 to 16 × 40 = $640, down $200.

**Interpretation.** Both moves are a $2 rise that loses 20 visitors, so the slope is identical. The elasticities differ by a factor of 9 because the percentages differ. That is why slope is not elasticity.

## Worked example 2: working from percentages

**Question.** Tavira Mobile, a fictional phone company, has 2,000 subscribers on its $20 per month data plan. It cuts the price by 15% and the number of subscribers rises by 24%.
(a) Calculate PED and classify demand.
(b) Find total revenue before and after, and check it against the total revenue test.
(c) Suppose instead that |PED| had been 0.5. By what percentage would subscribers have risen, and what would have happened to TR?

**(a)** The percentages are given, so no midpoint step is needed. PED = 24 ÷ (−15) = **−1.6**. |PED| = 1.6 > 1, so demand is **elastic**.

**(b)**

1. Before: TR = $20 × 2,000 = **$40,000 per month**.
2. New price = $20 × 0.85 = $17. New subscribers = 2,000 × 1.24 = 2,480.
3. After: TR = $17 × 2,480 = **$42,160 per month**, a rise of 5.4%.

Demand is elastic and the price fell, so the test predicts TR **rises**. It does.

**(c)** % change in Q = |PED| × % change in P = 0.5 × 15 = **7.5%**. Subscribers = 2,000 × 1.075 = 2,150. TR = $17 × 2,150 = **$36,550**, a fall of $3,450 (about 8.6%). With inelastic demand, the price cut lowers TR.

**Check.** You can rearrange the formula: % change in Q = |PED| × % change in P. This lets you predict a response before it happens, which is how firms and governments use elasticity.

## Common misconceptions

- **"Elasticity is the slope of the demand curve."** Slope uses raw changes; elasticity uses percentage changes. Along a straight line, slope is constant but elasticity is not.
- **"PED = change in quantity ÷ change in price."** This misses the percentage step. Convert both changes to percentages first.
- **"A steep curve is always inelastic."** Steepness depends on the scale of the axes, and elasticity changes along a straight line. Compare curves only at a common point.
- **"Inelastic demand means quantity does not change."** That is *perfectly* inelastic demand (|PED| = 0). Inelastic only means quantity changes by a smaller percentage than price.
- **"A price rise always raises revenue."** Only when demand is inelastic. With elastic demand, a price rise lowers total revenue.
- **"An elasticity of −2 is less than an elasticity of −0.5."** Compare magnitudes: |−2| = 2 is more elastic than |−0.5| = 0.5.
- **"Elasticity is one number for a whole good."** It is measured for a price range and can be different in another range.

## Where this leads

Next, Topic 2.4 applies the same percentage idea to sellers: the [price elasticity of supply](/advanced-course-resources/microeconomics/2-4-price-elasticity-supply-study-guide/). Topic 2.5 then measures responses to income and to the prices of related goods, and later topics use elasticity to explain who bears a tax. Test yourself with the [practice questions](/advanced-course-resources/microeconomics/2-3-price-elasticity-demand-practice/), then use the [revision notes](/advanced-course-resources/microeconomics/2-3-price-elasticity-demand-revision-notes/) and the [checklist](/advanced-course-resources/microeconomics/2-3-price-elasticity-demand-checklist/) to consolidate. If the demand curve itself feels shaky, look back at the previous topic, [supply](/advanced-course-resources/microeconomics/2-2-supply-study-guide/), and at Topic 2.1 on demand.
