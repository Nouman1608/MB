---
resourceId: "mb-ap-macro-2.3-study-guide"
title: "Unemployment: Study Guide (Macroeconomics 2.3)"
description: "Learn who counts as employed, unemployed or outside the labor force, how to calculate the unemployment and participation rates, the three types of unemployment and the natural rate."
course: "macroeconomics"
unit: 2
topics: ["2.3"]
resourceType: "study-guide"
prerequisites:
  - "Calculating a percentage"
  - "What GDP measures (Topic 2.1) and its limits (Topic 2.2)"
prerequisiteResources: ["mb-ap-macro-2.2-study-guide"]
learningObjectives:
  - "Define the adult population, the labor force, the unemployment rate and the labor force participation rate"
  - "Calculate the unemployment rate and the labor force participation rate from labor market data"
  - "Explain how a person moving between employment, unemployment and outside the labor force changes each rate"
  - "Explain why the measured unemployment rate can understate joblessness, using discouraged and part-time workers"
  - "Define frictional, structural and cyclical unemployment and classify examples of each"
  - "Define the natural rate of unemployment, calculate cyclical unemployment and explain why the natural rate can change"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "foundation"
calculator: "four-function"
calculatorNote: "All the arithmetic works on a four-function calculator. Round rates to 2 decimal places at the final step."
related: ["mb-ap-macro-2.3-revision-notes", "mb-ap-macro-2.3-practice", "mb-ap-macro-2.3-checklist"]
next: "mb-ap-macro-2.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-macroeconomics", "page-macroeconomics", "clar-macroeconomics"]
keyPoints:
  - "Labor force = employed + unemployed. People who are not working and not looking are outside the labor force."
  - "Unemployment rate = unemployed ÷ labor force × 100."
  - "Labor force participation rate = labor force ÷ adult population × 100."
  - "Discouraged workers and involuntary part-time workers mean the measured rate can understate joblessness."
  - "Natural rate = frictional + structural unemployment. Cyclical unemployment = actual rate − natural rate."
faqs:
  - question: "Is a discouraged worker counted as unemployed?"
    answer: "No. A discouraged worker wants a job but has stopped looking, so they are outside the labor force. They are not in the unemployment rate at all, which is one reason the rate can understate joblessness."
  - question: "Does full employment mean an unemployment rate of zero?"
    answer: "No. Full employment means there is no cyclical unemployment. Frictional and structural unemployment still exist, so the unemployment rate equals the natural rate, which is above zero."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Why we measure unemployment

GDP tells you how much an economy produces. The **unemployment rate** tells you how many people who want to work cannot find a job. It is one of the three main indicators of how an economy is performing, along with GDP and the inflation rate.

Unemployment matters for two reasons. First, unemployed people lose income, and their families feel it. Second, the whole economy loses the output those people could have produced. An economy with high unemployment is producing inside its production possibilities curve.

## Sorting the adult population into three groups

Statistics offices survey households and place every person in the **adult population** into exactly one of three groups. (In the United States, official figures cover people aged 16 and over who are not in the armed forces or living in institutions such as prisons.)

- **Employed:** has a paid job, full-time or part-time. A person who works only a few hours a week still counts as employed.
- **Unemployed:** does not have a job, is available for work and has **actively looked** for work recently (in the United States survey, within the past four weeks). The survey makes one exception: a worker temporarily laid off and expecting to be recalled counts as unemployed without searching.
- **Not in the labor force:** neither employed nor unemployed. Examples: retirees, full-time students who are not looking for work, people caring for family at home who are not looking for work, and **discouraged workers**.

The **labor force** is everyone who is working or actively trying to work:

**Labor force = employed + unemployed**

Two rates come from these groups.

**Unemployment rate = (number unemployed ÷ labor force) × 100**

**Labor force participation rate = (labor force ÷ adult population) × 100**

The unemployment rate is the share of the **labor force** that is out of work. The participation rate is the share of the **adult population** that is in the labor force. They have different denominators, so always check which one you need.

## Our fictional economy: Valdoria

Valdoria is the fictional country used across the Marlbridge macroeconomics pages. Its statistics office reports these labor market figures for 2025:

| Group | Number (millions) |
|---|---|
| Adult population | 50.0 |
| Employed | 30.4 |
| Unemployed | 1.6 |
| Not in the labor force | 18.0 |

All figures are fictional. Check that the three groups add up: 30.4 + 1.6 + 18.0 = 50.0 million.

<figure>
<svg viewBox="0 0 640 250" role="img" aria-labelledby="lf-title lf-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="lf-title">How Valdoria's adult population divides into the labor force and those outside it</title>
<desc id="lf-desc">A horizontal bar represents Valdoria's adult population of 50.0 million. From left to right it is split into employed, 30.4 million, shown with a light solid fill; unemployed, 1.6 million, a narrow segment shown with diagonal hatching; and not in the labor force, 18.0 million, shown with a dotted fill. A bracket above the employed and unemployed segments is labelled labor force, 32.0 million. Text below gives the unemployment rate as 1.6 divided by 32.0, which is 5.0 percent, and the participation rate as 32.0 divided by 50.0, which is 64.0 percent.</desc>
<defs>
<pattern id="lf-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#ffffff"/><line x1="0" y1="0" x2="0" y2="6" stroke="#1d2b44" stroke-width="2"/></pattern>
<pattern id="lf-dots" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="#ffffff"/><circle cx="4" cy="4" r="1.2" fill="#1d2b44"/></pattern>
</defs>
<rect x="0" y="0" width="640" height="250" fill="#ffffff"/>
<path d="M40 62 V50 H398 V62" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="219" y="40" text-anchor="middle" font-size="14" fill="#1d2b44">Labor force: 32.0 million</text>
<rect x="40" y="70" width="340.5" height="60" fill="#dbe7f5" stroke="#1d2b44" stroke-width="2"/>
<rect x="380.5" y="70" width="17.9" height="60" fill="url(#lf-hatch)" stroke="#1d2b44" stroke-width="2"/>
<rect x="398.4" y="70" width="201.6" height="60" fill="url(#lf-dots)" stroke="#1d2b44" stroke-width="2"/>
<text x="210" y="98" text-anchor="middle" font-size="14" fill="#1d2b44">Employed</text>
<text x="210" y="117" text-anchor="middle" font-size="14" fill="#1d2b44">30.4 million</text>
<rect x="430" y="84" width="140" height="34" fill="#ffffff" stroke="none"/>
<text x="500" y="98" text-anchor="middle" font-size="13" fill="#1d2b44">Not in labor force</text>
<text x="500" y="114" text-anchor="middle" font-size="13" fill="#1d2b44">18.0 million</text>
<line x1="389" y1="130" x2="389" y2="152" stroke="#1d2b44" stroke-width="1.5"/>
<text x="389" y="168" text-anchor="middle" font-size="13" fill="#1d2b44">Unemployed: 1.6 million (hatched)</text>
<text x="320" y="204" text-anchor="middle" font-size="14" fill="#1d2b44">Unemployment rate = 1.6 ÷ 32.0 × 100 = 5.0%</text>
<text x="320" y="228" text-anchor="middle" font-size="14" fill="#1d2b44">Participation rate = 32.0 ÷ 50.0 × 100 = 64.0%</text>
</svg>
<figcaption>Figure 1. Valdoria's adult population in 2025 (fictional data). The bar is drawn to scale. The labor force is only the employed and unemployed segments; the unemployment rate divides by the labor force, not by the whole population.</figcaption>
</figure>

## Worked example 1: calculating the two rates

**Question.** Use the 2025 table to calculate Valdoria's labor force, unemployment rate and labor force participation rate.

**Step 1: labor force.** Employed + unemployed = 30.4 + 1.6 = **32.0 million**. The 18.0 million outside the labor force are left out.

**Step 2: unemployment rate.** 1.6 ÷ 32.0 × 100 = **5.0%**. One in every twenty people in the labor force is out of work and looking.

**Step 3: participation rate.** 32.0 ÷ 50.0 × 100 = **64.0%**. Almost two-thirds of adults are either working or looking for work.

**Check.** A common slip is to divide the unemployed by the adult population: 1.6 ÷ 50.0 × 100 = 3.2%. That is not the unemployment rate. People who are not trying to work cannot be "out of work" in the official sense, so they are excluded from the denominator.

## How changes in the labor market move the rates

When a person moves from one group to another, think about two things: does the **labor force** change, and does the number **unemployed** change? The table starts from Valdoria's 2025 figures, with the adult population held constant.

| Event | Labor force | Unemployment rate | Participation rate |
|---|---|---|---|
| An unemployed person finds a job | unchanged | falls | unchanged |
| An employed person loses a job and starts searching | unchanged | rises | unchanged |
| A student, not looking before, starts looking for work | rises | rises | rises |
| An unemployed person gives up looking (becomes discouraged) | falls | falls | falls |
| An employed person retires | falls | rises slightly | falls |
| A full-time worker's hours are cut to part-time | unchanged | unchanged | unchanged |

The fourth row is the surprise. When jobless people stop searching, the unemployment rate **falls** even though nobody found work. The fifth row looks odd too: the number unemployed is the same, but it is now divided by a smaller labor force.

## Worked example 2: a weak year in Valdoria

**Question.** In 2026 Valdoria's economy weakens. The adult population stays at 50.0 million. During the year, 0.6 million employed workers lose their jobs and start looking for new ones. Also, 0.4 million unemployed people give up searching because they believe no jobs are available. (a) Calculate the new unemployment rate and participation rate. (b) What would the unemployment rate be if the 0.4 million discouraged workers were still counted as unemployed?

**(a) New group sizes.**

- Employed: 30.4 − 0.6 = **29.8 million**
- Unemployed: 1.6 + 0.6 − 0.4 = **1.8 million**
- Not in the labor force: 18.0 + 0.4 = **18.4 million** (check: 29.8 + 1.8 + 18.4 = 50.0)
- Labor force: 29.8 + 1.8 = **31.6 million**

Unemployment rate = 1.8 ÷ 31.6 × 100 = **5.70%**. Participation rate = 31.6 ÷ 50.0 × 100 = **63.2%**.

**(b)** If the discouraged workers were counted as unemployed, the unemployed would be 1.8 + 0.4 = 2.2 million and the labor force would be 31.6 + 0.4 = 32.0 million. The rate would be 2.2 ÷ 32.0 × 100 = **6.88%**.

**Interpretation.** The official rate rose from 5.0% to 5.70%, but it hides part of the damage. Jobs fell by 0.6 million, yet the measured rate rose by much less than it would have if the discouraged workers had kept looking. The fall in participation from 64.0% to 63.2% is a clue that people are leaving the labor force.

## Limitations of the unemployment rate

The measured unemployment rate is often criticised for **understating** joblessness. Two groups explain most of this.

- **Discouraged workers.** They want a job but have stopped looking because they think none is available. They are outside the labor force, so they do not appear in the unemployment rate at all. In a recession their number tends to grow, as Worked example 2 shows.
- **Part-time workers who want full-time work.** Anyone with some paid work counts as fully employed. A worker cut from 40 hours to 12 hours a week is still "employed", so the rate misses the lost hours and income.

A related idea is **underemployment**: people working in jobs below their skill level, such as a trained engineer driving a taxi. They also count as employed. The official rate cannot show how well people's skills are being used.

## Three types of unemployment

Economists focus on three types.

- **Frictional unemployment:** people between jobs or entering the labor force who are searching for a suitable job. It takes time to match workers and jobs. Example: a Valdorian graduate spends two months applying for accounting jobs; a nurse quits to move to a better-paid hospital and is searching.
- **Structural unemployment:** a lasting mismatch between workers' skills (or locations) and the jobs available. It often follows changes in technology or in the industries a country relies on. Example: Valdoria's textile mills close as clothing is imported more cheaply, and former machine operators lack the skills for the software jobs that are hiring.
- **Cyclical unemployment:** unemployment caused by a downturn in the business cycle. When spending and output fall, firms need fewer workers. Example: a car factory lays off workers during a recession and will hire them back when sales recover.

Some textbooks also name **seasonal** unemployment (such as beach-resort staff in winter). The course concentrates on the three types above.

## The natural rate of unemployment

The economy always has some frictional and structural unemployment, even when it is producing its full-employment level of real output. The **natural rate of unemployment** is the unemployment rate when real GDP is at full-employment output:

**Natural rate = frictional rate + structural rate**

**Cyclical unemployment = actual unemployment rate − natural rate**

So **full employment does not mean zero unemployment**. It means zero cyclical unemployment.

The natural rate is not fixed forever. It can change gradually as the labor force changes. For example:

- If a larger share of workers are young, the natural rate tends to rise, because young workers change jobs and search more often (more frictional unemployment).
- If online job platforms help workers and firms find each other faster, frictional unemployment and the natural rate fall.
- If new technology makes many existing skills obsolete, structural unemployment and the natural rate rise until workers retrain.

## Worked example 3: the natural rate and cyclical unemployment

**Question.** Valdoria's statistics office estimates frictional unemployment at 1.8% and structural unemployment at 2.7% of the labor force. Calculate the natural rate, and the cyclical rate in 2025 (actual 5.0%) and 2026 (actual 5.70%). In a later boom year the actual rate is 4.0%. Interpret this.

**Natural rate** = 1.8% + 2.7% = **4.5%**.

**Cyclical rate:**

- 2025: 5.0% − 4.5% = **0.5%**
- 2026: 5.70% − 4.5% = **1.2%**. The downturn added cyclical unemployment.
- Boom year: 4.0% − 4.5% = **−0.5%**.

**Interpretation.** A negative cyclical rate means the actual rate is **below** the natural rate. The economy is producing more than its full-employment output, for example because firms are working staff overtime and hiring people who would normally take longer to find a job. This cannot last for ever; you will see why in Unit 3.

**Check.** All three numbers are percentages of the labor force, so they can be added and subtracted directly.

## Common misconceptions

- **"Unemployed means anyone without a job."** A person without a job counts as unemployed only if they are available and actively looking. Retirees and discouraged workers are outside the labor force.
- **"The unemployment rate divides by the adult population."** It divides by the labor force. The participation rate divides by the adult population.
- **"A falling unemployment rate always means more people found jobs."** It can fall because people stopped looking. Check the participation rate and the number employed.
- **"Part-time workers are partly unemployed."** In the official figures they are fully employed, which is why the rate can understate joblessness.
- **"Full employment means 0% unemployment."** It means the actual rate equals the natural rate, so cyclical unemployment is zero.
- **"Structural and cyclical unemployment are the same because both follow job losses."** Cyclical unemployment ends when the economy recovers. Structural unemployment lasts until skills or locations match the jobs available.
- **"The natural rate includes cyclical unemployment."** It is frictional plus structural only.

## Where this leads

Next, Topic 2.4 shows how a price index measures inflation, the third key indicator. The natural rate returns in Topic 2.7, where full-employment output defines potential GDP, and in Unit 5 with the Phillips curve. Read on to [Topic 2.4, Price Indices and Inflation](/advanced-course-resources/macroeconomics/2-4-price-indices-and-inflation-study-guide/). First try the [practice questions](/advanced-course-resources/macroeconomics/2-3-unemployment-practice/), then use the [revision notes](/advanced-course-resources/macroeconomics/2-3-unemployment-revision-notes/) and the [checklist](/advanced-course-resources/macroeconomics/2-3-unemployment-checklist/) to consolidate.
