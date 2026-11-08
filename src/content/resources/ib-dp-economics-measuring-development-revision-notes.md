---
title: "IB DP Economics: Measuring development -- Revision Notes"
seoTitle: "IB Economics Measuring Development Revision Notes"
resourceType: "revision-notes"
subject: "economics"
level: ["ib"]
topic: "Measuring development"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: []
syllabusSeries: "First assessment 2022"
order: 323
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-economics-unit-4"
    subtopic: "ib-dp-economics-4-8"
description: "Condensed revision notes for IB DP Economics sub-topic 4.8: development indicators, HDI, IHDI, GII, Happy Planet Index, evaluation and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-19
featured: false
---

These notes follow the IB Diploma Programme *Economics guide* (first assessment 2022, published February 2020), the course examined from the 2022 session onwards. They cover sub-topic 4.8, measuring development, which is SL and HL with no HL-only content. For full explanations start with the [study guide](/resources/ib-dp-economics-measuring-development/), then test yourself with the [practice set](/resources/ib-dp-economics-measuring-development-practice/). The [IB DP Economics hub](/boards/ib/ib-dp/economics/), the [printable checklist](/checklists/ib/ib-dp/economics/) and the [free diagnostics](/diagnostics/) show what to revise next. All countries and figures below are invented.

## Key definitions

| Term | Meaning |
|---|---|
| Economic growth | Increase in real output, measured by real GDP or GNI |
| Economic development | Wider improvement in living standards: health, education, equity, choice, sustainability and income |
| Purchasing power parity (PPP) | Exchange rate that makes a standard basket cost the same in two countries |
| Single indicator | A measure of one aspect of development |
| Composite indicator | One index built from several measures |

## Single indicators at a glance

| Category | Examples | Typical limit |
|---|---|---|
| Income | GDP or GNI per person at PPP | Average only; says nothing on distribution |
| Health | Life expectancy; infant or maternal mortality; doctors per 1,000 people | Averages hide group gaps |
| Education | Literacy; mean and expected years of schooling | Years attended are not learning gained |
| Inequality | Gini coefficient; income share of top 10% or bottom 40%; gender gaps | Shows spread, not the level of living |
| Energy | Energy use per person; access to electricity; renewable share | More energy use is not always better |
| Environmental | Carbon dioxide per person; ecological footprint; forest area; air quality | Often reported with delay and gaps |

## Composite indicators at a glance

| Index | What goes in | Reading it |
|---|---|---|
| HDI | Life expectancy; mean and expected schooling; GNI per person at PPP | 0 to 1; higher is better |
| IHDI | The HDI, adjusted for inequality within each dimension | Never above HDI; the gap is the loss to inequality |
| GII | Reproductive health; empowerment; labour market participation | 0 to 1; higher means more gender inequality |
| Happy Planet Index | Life expectancy; reported well-being; inequality of outcomes; ecological footprint | Rewards long, satisfied lives with a light footprint |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-economics-measuring-development--02-gii-happy-planet.webp" width="900" height="1020" alt="SL and HL. The HDI scale runs from 0 to 1 and higher is better. The Gender Inequality Index also runs from 0 to 1 but higher means more inequality between women and men, so higher is worse. The GII has three dimensions: reproductive health (maternal mortality, adolescent births), empowerment (parliament seats, secondary education) and labour market (women in the labour force). The Happy Planet Index combines life expectancy, reported well-being and inequality of outcomes and relates them to ecological footprint; it is the only listed index with sustainability built in." loading="lazy">
  <figcaption>The GII runs 0 to 1 with higher meaning worse, and the Happy Planet Index relates well-being to ecological footprint.</figcaption>
</figure>


## Method: building an HDI (illustrative limits)

Use limits: income from 200 to 80,000, expected schooling from 0 to 20, mean schooling from 0 to 15, life expectancy from 25 to 85.

1. Dimension index = (actual - minimum) / (maximum - minimum).
2. Education index = average of the expected-schooling and mean-schooling indices.
3. Income index = (ln income - ln minimum) / (ln maximum - ln minimum).
4. HDI = cube root of (health x education x income).

Worked reminder. Ormund: life expectancy 78, expected schooling 15, mean schooling 11, GNI per person 30,000 units at PPP.

- Health = (78 - 25) / 60 = 0.883.
- Schooling indices: 15 / 20 = 0.750 and 11 / 15 = 0.733; education = 0.742.
- Income = (ln 30,000 - ln 200) / (ln 80,000 - ln 200) = 5.011 / 5.991 = 0.836.
- HDI = (0.883 x 0.742 x 0.836)^(1/3) = **0.818**.

Pellara: life expectancy 64, expected schooling 10, mean schooling 5, income 3,000. Indices 0.650, 0.417 and 0.452 give an HDI of **0.497**.

Ormund's income is ten times Pellara's, yet its HDI is only about 1.6 times higher, not ten times, because each dimension is capped at 1 and the income index uses logarithms.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-economics-measuring-development--04-hdi-built.webp" width="900" height="910" alt="Three vertical bars on a 0 to 1 scale for invented country Sorenth: health index 0.783 from life expectancy 72, education index 0.567 as the average of expected schooling 12 of 20 (0.600) and mean schooling 8 of 15 (0.533), and income index 0.683 from GNI per person 12,000 at PPP using logarithms. The Human Development Index is the geometric mean of the three, 0.672. Minimum and maximum limits are illustrative." loading="lazy">
  <figcaption>The HDI is the geometric mean of health, education and income indices.</figcaption>
</figure>


## Method: adjusting for inequality (simplified)

1. Find the percentage loss to inequality in each dimension.
2. Multiply each dimension index by (1 - loss).
3. Take the cube root of the product of the three adjusted indices.
4. Overall loss = (HDI - IHDI) / HDI.

Worked reminder. Ormund's losses are 5% in health, 10% in education and 15% in income.

- Adjusted indices: 0.883 x 0.95 = 0.839; 0.742 x 0.90 = 0.668; 0.836 x 0.85 = 0.711.
- IHDI = (0.839 x 0.668 x 0.711)^(1/3) = **0.736**.
- Loss = (0.818 - 0.736) / 0.818 = about 10%.

The real IHDI uses its own inequality formula for each dimension. In an answer, say that unequal distribution lowers the score, and name which dimension loses most.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-economics-measuring-development--07-ihdi-inequality.webp" width="900" height="860" alt="Invented Sorenth. Paired bars compare each HDI dimension index with its inequality-adjusted value: health 0.783 falls 10 percent to 0.705, education 0.567 falls 20 percent to 0.453 and income 0.683 falls 30 percent to 0.478. The geometric mean of the adjusted indices gives IHDI 0.535 against HDI 0.672, a loss of 20.4 percent. The published method uses a specific inequality formula for each dimension." loading="lazy">
  <figcaption>Adjusting each dimension for inequality lowers the HDI from 0.672 to 0.535.</figcaption>
</figure>


## Reading the GII

The GII is a score from 0 to 1. Compare two countries with similar HDI values: if one has a much higher GII, its average achievement hides a wider gap between women and men in health, representation, schooling or jobs. A falling GII over time shows narrowing gaps. Remember it covers three dimensions only, so a low GII does not prove equality in every part of life.

## Method: PPP conversion

1. PPP rate = price of basket at home / price of the same basket abroad.
2. Income at PPP = income at home / PPP rate.

Pellara's basket costs 1,500 and the same basket costs 500 in a reference economy, so the PPP rate is 3. An income of 45,000 is worth 45,000 / 3 = 15,000 units at PPP.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-economics-measuring-development--06-ppp-income.webp" width="900" height="840" alt="Invented example. A basket costs 2,400 taran in Tarvia and 800 units in a reference economy, so the PPP rate is 3 taran per unit, while the market rate is 6. A GNI per person of 36,000 taran is 6,000 units at the market rate but 12,000 units at PPP, double, because prices in Tarvia are low. PPP is still an average and does not show distribution." loading="lazy">
  <figcaption>PPP income is double the market-rate figure in the Tarvia example.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-aqa-economics-measurement-of-macroeconomic-performance--07-ppp-exchange-rates.webp" width="900" height="1050" alt="The same basket costs 100 X in Country X and 200 Y in Country Y. At the market rate (4 Y = 1 X) Country Y income looks like 5,000 X, but at the PPP rate (2 Y = 1 X) it is 10,000 X, matching the 2 to 1 gap in baskets bought (200 versus 100)." loading="lazy">
  <figcaption>PPP rates adjust for cost-of-living differences so incomes can be compared by what they buy.</figcaption>
</figure>


## Must-know distinctions

- **Growth versus development:** growth means more output; development covers people's health, schooling and fairness as well.
- **Single versus composite:** single indicators are clear but narrow; composites are broad but depend on weights and method.
- **HDI versus IHDI:** the IHDI adjusts for inequality, so it is lower unless distribution is perfectly equal.
- **HDI versus GII:** the HDI measures average achievement; the GII measures gender disadvantage, and a higher GII is worse.
- **HDI versus Happy Planet Index:** the HDI ignores the environment; the Happy Planet Index relates well-being to ecological footprint.
- **Arithmetic versus geometric mean:** geometric penalises a weak dimension more heavily.

## Strengths and limitations: evaluation prompts

- Does the measure show averages, or how outcomes are shared?
- Are the data reliable, current and comparable between countries?
- Is the weighting a value judgement, and would a different weighting change the ranking?
- Is anything important left out, such as freedom, environment or unpaid work?
- Is the data objective (life expectancy) or subjective (reported satisfaction)?
- Are two scores close enough that a ranking difference means little?

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-economics-measuring-development--03-indicator-coverage-grid.webp" width="900" height="990" alt="SL and HL. A grid of nine indicators against six dimensions: income, health, schooling, equity, gender gaps and planet. GNI per person at PPP covers income only. A health indicator covers health only, an education indicator schooling only, the Gini coefficient equity only, energy and carbon dioxide indicators the environment only. The HDI covers income, health and schooling. The IHDI adds distribution (equity). The GII covers health, schooling and gender gaps. The Happy Planet Index covers health (life expectancy), well-being and inequality, and the environment. Single indicators show one side; composites combine several but weights are choices." loading="lazy">
  <figcaption>Single indicators cover one dimension; composites combine several but omit others.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-aqa-economics-measurement-of-macroeconomic-performance--06-gdp-limitations.webp" width="900" height="930" alt="An iceberg: the visible tip is measured GDP per capita; below the surface are the informal economy, unpaid work, externalities and income distribution, which national income data ignores." loading="lazy">
  <figcaption>National income data is useful but limited as a measure of living standards.</figcaption>
</figure>


## Growth and development: summary

| Growth helps development when | Growth fails to help when |
|---|---|
| Tax revenue funds health, schools and infrastructure | Gains go to a small group, so inequality rises |
| Household incomes rise and are spent on needs | Governments spend little on public services |
| Healthier, educated workers raise productivity | Growth causes pollution or resource depletion |
| Institutions are strong and revenue is used well | Corruption or weak institutions waste revenue |

Conclusion to aim for: the link is positive but conditional. Use a named case with two or three indicators.

## Quick self-test

1. Define purchasing power parity.
2. A basket costs 1,500 in Pellara and 500 in a reference economy. GNI per person is 45,000 in Pellara. Find GNI per person at PPP.
3. Name the three dimensions of the HDI.
4. Life expectancy is 55 and the illustrative limits are 25 and 85. Find the health index.
5. Explain why the HDI uses a geometric mean.
6. Dimension indices are 0.9, 0.8 and 0.5. Find the HDI to 3 decimal places.
7. What does a higher GII value show?
8. A country's IHDI is lower than its HDI. What does that show?
9. Name one energy indicator and one environmental indicator.
10. Real GNI per person rises from 8,000 to 8,400. Find the percentage growth, then give two reasons why this may not raise development.
11. Which composite index includes ecological footprint?

### Answers

1. The exchange rate that makes a standard basket of goods cost the same in two countries.
2. PPP rate = 1,500 / 500 = 3; 45,000 / 3 = **15,000 units**.
3. Health (life expectancy), education (schooling) and standard of living (GNI per person at PPP).
4. (55 - 25) / (85 - 25) = 30 / 60 = **0.500**.
5. It lowers the index when one dimension is weak, so strength in one dimension cannot fully offset weakness in another.
6. (0.9 x 0.8 x 0.5)^(1/3) = (0.36)^(1/3) = **0.711**.
7. Greater inequality between women and men, so a worse position.
8. Health, education or income is spread unequally; the larger the gap, the greater the loss due to inequality.
9. For example, access to electricity (energy) and carbon dioxide emitted per person (environmental).
10. (8,400 - 8,000) / 8,000 = **5%**. Reasons: gains may go to a few households; public spending on health and schooling may not rise; growth may cause pollution.
11. The Happy Planet Index.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-economics-measuring-development--05-hdi-geometric-mean.webp" width="900" height="880" alt="Two invented countries. Country A has indices 0.9, 0.9 and 0.3; Country B has 0.7, 0.7 and 0.7. Both have an arithmetic mean of 0.700, but the geometric mean is 0.624 for A and 0.700 for B, so A is penalised for its weak dimension." loading="lazy">
  <figcaption>A geometric mean penalises a country with one weak dimension.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-economics-measuring-development--01-tarvia-quelland-hdi.webp" width="900" height="940" alt="SL and HL. Invented countries Tarvia and Quelland both have GNI per person of 22,000 units at PPP, so both have an income index of 0.785. Tarvia has health index 0.750, education index 0.625 and HDI 0.716. Quelland has health index 0.850, education index 0.742 and HDI 0.791. Same income, different health and schooling, so different development. Illustrative limits from the lesson." loading="lazy">
  <figcaption>Tarvia and Quelland have the same income index (0.785) but HDI 0.716 and 0.791 because health and schooling differ.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-edexcel-economics-economic-growth--07-what-gdp-leaves-out.webp" width="900" height="880" alt="Four cards show what GDP/GNI miss: income distribution, unpaid non-market work, environmental costs, and subjective wellbeing. This is why happiness and wellbeing indicators are used alongside GDP." loading="lazy">
  <figcaption>GDP says nothing about distribution, unpaid work, environmental costs or wellbeing.</figcaption>
</figure>


## Where marks are usually lost

- Treating development and growth as the same thing.
- Describing the HDI as an income measure, or leaving out one of its three dimensions.
- Saying a higher GII is better.
- Writing "PPP" without explaining that it adjusts for price differences.
- Stating strengths and limitations as a general list rather than applying them to a named index and a given country.
- Ignoring the data given in the question and relying on memorised statements.
- Stopping an evaluation after one side, with no supported judgement at the end.
- Mixing up IHDI and GII: one adjusts HDI for inequality in general, the other measures gender disadvantage.

## Frequently asked questions

**What is the difference between single and composite indicators of development?**
A single indicator measures one aspect of development, such as GNI per person at PPP or life expectancy. A composite indicator, such as the HDI, combines several measures into one number so countries can be ranked and compared.

**What does the Human Development Index measure?**
The HDI combines three dimensions: health, measured by life expectancy at birth; education, measured by mean and expected years of schooling; and standard of living, measured by GNI per person at PPP. It is part of sub-topic 4.8 of the IB DP Economics guide.

**Is a higher Gender Inequality Index better or worse?**
Worse. The GII runs from 0 to 1, and a higher value means more inequality between women and men, unlike the HDI where higher is better.

**What is the inequality adjusted HDI?**
The IHDI starts from the HDI and adjusts each dimension for how unequally it is spread across people. If there is no inequality, the IHDI equals the HDI; otherwise it is lower.

## Official syllabus

IB Diploma Programme *Economics guide*, first assessment 2022, published by the International Baccalaureate Organization (February 2020). This page covers sub-topic 4.8.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-aqa-economics-measurement-of-macroeconomic-performance--05-lorenz-gini.webp" width="900" height="1075" alt="A Lorenz curve from illustrative quintile income shares 5, 10, 15, 25, 45 sags below the equality line. Area A is 0.19 and B is 0.31, so Gini = A/(A+B) = 0.38; 0 is perfect equality, 1 perfect inequality." loading="lazy">
  <figcaption>The Gini coefficient is the share of the area under the equality line that lies between it and the Lorenz curve.</figcaption>
</figure>

