---
resourceId: "mb-ap-macro-2.1-study-guide"
title: "The Circular Flow and GDP: Study Guide (Macroeconomics 2.1)"
description: "Learn what GDP measures, how the circular flow model links spending, income and output, and how to calculate GDP with the expenditure, income and value-added approaches."
course: "macroeconomics"
unit: 2
topics: ["2.1"]
resourceType: "study-guide"
prerequisites:
  - "The four factors of production (Topic 1.1)"
  - "How buyers and sellers meet in markets (Topics 1.4 to 1.6)"
prerequisiteResources: ["mb-ap-macro-1.6-study-guide"]
learningObjectives:
  - "Define GDP as the market value of final goods and services produced within a country in a given period"
  - "Use the circular flow diagram to explain why total spending, total income and the value of output are equal"
  - "Identify the four expenditure components of GDP and decide which transactions are excluded"
  - "Calculate GDP using the expenditure, income and value-added approaches"
  - "Calculate nominal GDP from the prices and quantities of final goods"
skills: ["1", "2", "4"]
studyMinutes: 40
difficulty: "foundation"
calculator: "four-function"
calculatorNote: "All the arithmetic is addition, subtraction and multiplication. Keep track of units (VD, or billions of VD)."
related: ["mb-ap-macro-2.1-revision-notes", "mb-ap-macro-2.1-practice", "mb-ap-macro-2.1-checklist"]
next: "mb-ap-macro-2.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-macroeconomics", "page-macroeconomics", "clar-macroeconomics"]
keyPoints:
  - "GDP is the market value of all final goods and services produced within a country in a given period."
  - "In the circular flow, one person's spending is another person's income, so total spending = total income = value of output."
  - "Expenditure approach: GDP = C + I + G + Xn, where Xn = exports − imports."
  - "Income approach: add wages, rent, interest and profit. Value-added approach: add the value added at each stage of production."
  - "Intermediate goods, used goods, financial assets and transfer payments are not counted, to avoid double counting or counting things that are not new production."
faqs:
  - question: "Why are imports subtracted if they are bought by people in the country?"
    answer: "Spending on imports is already inside consumption, investment and government purchases, but it pays for goods made abroad. Subtracting imports removes that foreign production so only domestic output is left."
  - question: "Is buying shares an example of investment in GDP?"
    answer: "No. In GDP, investment means spending on new capital goods, new housing and additions to inventories. Buying shares or bonds only transfers ownership of a financial asset; nothing new is produced."
  - question: "Do I need to calculate real GDP in this topic?"
    answer: "No. This topic asks for nominal GDP, valued at the prices of the year. Adjusting GDP for price changes belongs to Topic 2.6, Real v. Nominal GDP."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## What GDP measures

Economists need one number that tells them how much an economy produces. That number is **gross domestic product (GDP)**.

**GDP is the market value of all final goods and services produced within a country's borders in a given period, usually a year or a quarter.**

Each part of the definition matters.

- **Market value.** Apples, haircuts and lorries cannot be added as physical units. GDP adds their **money values** (price × quantity).
- **Final goods and services.** A final good is bought by its end user and is not resold or used up to make something else. An **intermediate good** is used up in making another product, such as flour bought by a bakery. Intermediate goods are left out because their value is already inside the price of the final good. Counting both would be **double counting**.
- **Produced.** GDP measures **new** production. Selling something made in an earlier year is not new output.
- **Within a country's borders.** A car made in Valdoria by a foreign-owned firm counts in Valdoria's GDP. A factory abroad owned by a Valdorian firm does not.
- **In a given period.** GDP is a flow: output per year (or per quarter), not a stock of wealth.

**Nominal GDP** values output at the prices of the same year. Because prices change, nominal GDP can rise even if output does not. You will adjust for that in Topic 2.6.

### What is not counted, and why

| Transaction | Counted in GDP? | Reason |
|---|---|---|
| Steel bought by a car maker | No | Intermediate good; its value is in the price of the car |
| A household buys a second-hand car | No | Produced in an earlier year (but a dealer's fee for selling it is a new service and is counted) |
| A saver buys shares or government bonds | No | Financial transaction; it changes who owns an asset but produces nothing |
| The government pays a pension or unemployment benefit | No | Transfer payment; nothing is produced in return |
| A household buys a newly built house | Yes | Counted as investment |
| A firm's unsold output added to its stock | Yes | Counted as investment (change in inventories) |

Some production is missed because no market transaction takes place, such as cooking a meal at home. That is a limitation of GDP, covered in Topic 2.2.

## The circular flow model

The **circular flow model** shows how money, goods and resources move around the economy. The simplest version has two groups of decision-makers and two markets.

- **Households** own the factors of production (land, labour, capital and entrepreneurship) and buy goods and services.
- **Firms** hire the factors of production and use them to produce goods and services.
- In the **product market**, firms sell goods and services and households buy them.
- In the **factor market** (also called the resource market), households sell the services of their resources and firms buy them.

There are two loops that run in **opposite directions**:

- **Real flows:** goods and services go from firms to households; resources go from households to firms.
- **Money flows:** households' spending goes to firms as revenue; firms pay wages, rent, interest and profit to households as income.

<figure>
<svg viewBox="0 0 680 420" role="img" aria-labelledby="cf-title cf-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cf-title">Two-sector circular flow model</title>
<desc id="cf-desc">Four boxes form a diamond: product market at the top, households on the left, firms on the right and factor market at the bottom. An outer loop of solid arrows shows money moving clockwise: consumer spending from households to the product market, revenue from the product market to firms, payments for resources from firms to the factor market, and income of wages, rent, interest and profit from the factor market to households. An inner loop of dashed arrows shows real flows moving anticlockwise: goods and services from firms to the product market and on to households, and factors of production from households to the factor market and on to firms.</desc>
<defs>
<marker id="cf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1d2b44"/></marker>
</defs>
<rect x="0" y="0" width="680" height="420" fill="#ffffff"/>
<g fill="#fdf6e3" stroke="#1d2b44" stroke-width="2">
<rect x="260" y="30" width="160" height="50" rx="6"/>
<rect x="30" y="185" width="140" height="50" rx="6"/>
<rect x="510" y="185" width="140" height="50" rx="6"/>
<rect x="260" y="340" width="160" height="50" rx="6"/>
</g>
<g font-size="15" font-weight="600" fill="#1d2b44" text-anchor="middle">
<text x="340" y="60">Product market</text>
<text x="100" y="215">Households</text>
<text x="580" y="215">Firms</text>
<text x="340" y="370">Factor market</text>
</g>
<g stroke="#1d2b44" stroke-width="2.5" fill="none" marker-end="url(#cf-arrow)">
<line x1="90" y1="185" x2="258" y2="60"/>
<line x1="422" y1="60" x2="590" y2="185"/>
<line x1="590" y1="235" x2="422" y2="360"/>
<line x1="258" y1="360" x2="90" y2="235"/>
</g>
<g stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5" fill="none" marker-end="url(#cf-arrow)">
<line x1="530" y1="185" x2="405" y2="82"/>
<line x1="275" y1="82" x2="150" y2="185"/>
<line x1="150" y1="235" x2="275" y2="338"/>
<line x1="405" y1="338" x2="530" y2="235"/>
</g>
<g font-size="12" fill="#1d2b44">
<text x="160" y="100" text-anchor="end">Consumer spending</text>
<text x="160" y="115" text-anchor="end">(VD)</text>
<text x="520" y="105" text-anchor="start">Revenue (VD)</text>
<text x="520" y="320" text-anchor="start">Payments for</text>
<text x="520" y="335" text-anchor="start">resources (VD)</text>
<text x="160" y="320" text-anchor="end">Income: wages, rent,</text>
<text x="160" y="335" text-anchor="end">interest, profit (VD)</text>
<text x="455" y="165" text-anchor="end">Goods and services</text>
<text x="225" y="165" text-anchor="start">Goods and services</text>
<text x="225" y="262" text-anchor="start">Factors of</text>
<text x="225" y="277" text-anchor="start">production</text>
<text x="455" y="262" text-anchor="end">Factors of</text>
<text x="455" y="277" text-anchor="end">production</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="340" y="203">Solid arrows: money flows</text>
<text x="340" y="221">Dashed arrows: real flows</text>
</g>
</svg>
<figcaption>Figure 1. The two-sector circular flow. Money (solid arrows, outer loop) moves clockwise; goods, services and resources (dashed arrows, inner loop) move the opposite way. Every money payment in one direction matches a real flow in the other.</figcaption>
</figure>

### Why spending, income and output are equal

Every valda a household spends on a final good becomes revenue for a firm. The firm uses that revenue to pay its workers, landlords, lenders and owners. Anything left after paying for its inputs and the other resources is **profit**, which is also income (for the owners). So **one person's spending is another person's income**, and:

**Total spending on final goods = total income earned = value of final output**

This is why GDP can be measured from either side of the diagram.

### Adding government, banks and other countries

A fuller circular flow adds three more sectors. Money that leaves the flow of spending on domestic output is a **leakage**; money that enters it is an **injection**.

| Sector | Leakage from the flow | Injection into the flow |
|---|---|---|
| Financial sector (banks, financial markets) | Households' **saving** | Firms' **investment** spending, financed by borrowing |
| Government | **Taxes** | **Government purchases** of goods and services (transfer payments go back to households as income, but they are not purchases) |
| Foreign sector | **Imports** (spending on goods made abroad) | **Exports** (foreign spending on domestic goods) |

The model still says the same thing: total spending on a country's output equals the total income earned from producing it.

## Three ways to measure GDP

### 1. The expenditure approach

Add all spending on final goods and services produced in the country:

**GDP = C + I + G + Xn**

- **C, consumption:** household spending on new goods and services (food, clothes, phones, haircuts, bus rides).
- **I, investment (gross private domestic investment):** business spending on new capital goods (machines, tools, factories, offices), **new residential housing**, and the **change in inventories** (unsold output added to firms' stocks, or subtracted when stocks fall).
- **G, government purchases:** government spending on goods and services (roads, teachers' wages, military equipment). **Transfer payments are not included.**
- **Xn, net exports:** exports − imports. Spending on imports is already inside C, I and G, but it buys foreign production, so it must be taken away.

### 2. The income approach

Add all the incomes earned in producing the output:

**GDP = wages + rent + interest + profit**

These are the payments to labour, land, capital and entrepreneurship. This is the simplified version used in the course. Official national accounts make further adjustments (for example, for taxes on production and for the wearing out of capital), which you do not need to calculate.

### 3. The value-added approach

**Value added** is a firm's sales revenue minus what it paid other firms for intermediate goods:

**Value added = value of the firm's output − cost of intermediate goods bought from other firms**

Add the value added by every firm at every stage of production. The total equals the value of the final good, so the approach avoids double counting automatically.

## Worked example 1: the expenditure approach

**Question.** Here are some of Valdoria's figures for 2025, in billions of valdas (VD). All data are fictional. Calculate Valdoria's GDP using the expenditure approach.

| Item | VD billion |
|---|---|
| Household spending on new consumer goods and services | 620 |
| Households buying used cars from other households | 30 |
| Business spending on new machinery and buildings | 110 |
| New houses built and sold to households | 50 |
| Increase in firms' inventories | 20 |
| Government purchases of goods and services | 240 |
| Government pensions and unemployment benefits | 90 |
| Households buying shares and bonds | 75 |
| Steel bought by car makers | 210 |
| Exports | 150 |
| Imports | 190 |

**Step 1: sort out what does not belong.**

- Used cars (30): produced in earlier years. **Exclude.**
- Pensions and benefits (90): transfer payments. **Exclude.**
- Shares and bonds (75): financial transactions. **Exclude.**
- Steel (210): intermediate good; its value is already inside the price of the cars. **Exclude.**

**Step 2: find each component.**

- C = **620**
- I = 110 + 50 + 20 = **180** (new houses count as investment, not consumption)
- G = **240**
- Xn = 150 − 190 = **−40**

**Step 3: add.**

GDP = 620 + 180 + 240 + (−40) = **VD 1,000 billion**

**Check with the income approach.** Valdoria's statistics office also reports these 2025 incomes: wages VD 610 billion, rent VD 60 billion, interest VD 90 billion and profit VD 240 billion. 610 + 60 + 90 + 240 = **VD 1,000 billion**, the same total, as the circular flow predicts.

**Interpretation.** Net exports are negative because Valdoria spent more on foreign goods than foreigners spent on Valdorian goods. That lowers GDP, but only by the net amount. If you had added every number in the table you would get VD 1,785 billion, far too high.

## Worked example 2: the value-added approach

**Question.** A wooden table passes through four Valdorian firms. Calculate the value added at each stage and the table's contribution to GDP. Show why adding all the sales would be wrong.

| Stage | Buys inputs from another firm for | Sells its output for | Value added |
|---|---|---|---|
| Forester grows and cuts timber | VD 0 | VD 40 | 40 − 0 = **VD 40** |
| Sawmill cuts timber into planks | VD 40 | VD 90 | 90 − 40 = **VD 50** |
| Furniture maker builds the table | VD 90 | VD 210 | 210 − 90 = **VD 120** |
| Shop sells the table to a household | VD 210 | VD 300 | 300 − 210 = **VD 90** |
| **Total** | | | **VD 300** |

**Answer.** The table adds **VD 300** to GDP, which equals the price the household pays for the final good.

**Why not add the sales?** The sales add up to 40 + 90 + 210 + 300 = VD 640. That counts the forester's value added four times, the sawmill's three times and the furniture maker's twice. The extra VD 340 is exactly the value of the intermediate goods (40 + 90 + 210).

**Link to the income approach.** Each firm's value added is paid out as income. For example, the furniture maker's VD 120 of value added is paid as wages VD 80, rent VD 10 and interest VD 5, and the VD 25 left over is the owner's profit: 80 + 10 + 5 + 25 = VD 120. Adding the value added of every firm and adding every income give the same answer.

## Worked example 3: calculating nominal GDP

**Question.** Pell Island is a tiny fictional economy. In 2025 it produces these goods. Calculate nominal GDP for 2025. Then the prices of fish and boat trips rise in 2026 while quantities stay the same. Calculate nominal GDP for 2026 and comment.

| Product | Quantity | 2025 price | 2026 price |
|---|---|---|---|
| Fish sold to households (kg) | 4,000 | VD 6 | VD 7 |
| Boat trips sold to tourists | 1,500 | VD 20 | VD 22 |
| Woven baskets sold to households | 800 | VD 15 | VD 15 |
| Bait sold to the island's fishers (kg) | 200 | VD 25 | VD 25 |

**Step 1: identify the final goods.** The bait is used up in catching the fish, so it is an intermediate good. Leave it out.

**Step 2: price × quantity for each final good, then add.**

- 2025: 4,000 × 6 + 1,500 × 20 + 800 × 15 = 24,000 + 30,000 + 12,000 = **VD 66,000**
- 2026: 4,000 × 7 + 1,500 × 22 + 800 × 15 = 28,000 + 33,000 + 12,000 = **VD 73,000**

**Step 3: comment.** Nominal GDP rose by (73,000 − 66,000) ÷ 66,000 × 100 = **10.61%**, yet the island produced exactly the same quantities. The rise came only from higher prices. This is why economists also need **real** GDP (Topic 2.6).

**Check.** Including the bait would give VD 71,000 for 2025. The bait's value is already part of the price of the fish, so that answer double counts.

## Common misconceptions

- **"Investment means buying shares."** In GDP, investment is spending on new capital goods, new houses and inventories. Shares and bonds are financial assets.
- **"A new house is consumption."** Newly built housing is counted as investment.
- **"All government spending is G."** Transfer payments (pensions, benefits) are not purchases of output and are excluded.
- **"Imports are subtracted because they are bad for the economy."** They are subtracted only because C, I and G already include them and they are not domestic production.
- **"Adding every sale gives GDP."** That double counts intermediate goods. Count final goods only, or add value added.
- **"Used goods add to GDP when they are resold."** Only the new service of selling them (such as a dealer's fee) counts.
- **"Unsold goods are not counted."** They are counted in the year they are produced, as an increase in inventories.
- **Mixing up the loops.** Money and real flows move in opposite directions. Labour goes from households to firms; wages go from firms to households.

## Where this leads

GDP is a useful measure, but it misses some things that matter for living standards, such as household production. That is the next topic: [Topic 2.2, Limitations of GDP](/advanced-course-resources/macroeconomics/2-2-limitations-gdp-study-guide/). Later in the unit you will separate price changes from output changes with real GDP (Topic 2.6), and the expenditure components C, I, G and Xn return as the parts of aggregate demand in Unit 3. If the factors of production are not secure, revisit [Topic 1.1, Scarcity](/advanced-course-resources/macroeconomics/1-1-scarcity-study-guide/).

Try the [practice questions](/advanced-course-resources/macroeconomics/2-1-circular-flow-gdp-practice/) now, then use the [revision notes](/advanced-course-resources/macroeconomics/2-1-circular-flow-gdp-revision-notes/) and the [checklist](/advanced-course-resources/macroeconomics/2-1-circular-flow-gdp-checklist/) to consolidate.
