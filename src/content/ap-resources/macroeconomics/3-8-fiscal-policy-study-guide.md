---
resourceId: "mb-ap-macro-3.8-study-guide"
title: "Fiscal Policy: Study Guide (Macroeconomics 3.8)"
description: "Learn what fiscal policy is, how government spending, taxes and transfers shift aggregate demand, how to calculate the change needed to close an output gap, and why policy lags matter."
course: "macroeconomics"
unit: 3
topics: ["3.8"]
resourceType: "study-guide"
prerequisites:
  - "The spending and tax multipliers (Topic 3.2)"
  - "Output gaps in the AD–AS model (Topics 3.5 and 3.6)"
  - "Long-run self-adjustment (Topic 3.7)"
prerequisiteResources: ["mb-ap-macro-3.7-study-guide"]
learningObjectives:
  - "Define fiscal policy, its tools, and expansionary and contractionary fiscal policy"
  - "Explain why government spending changes AD directly while taxes and transfers change it indirectly, through disposable income"
  - "Choose the right fiscal policy for a recessionary or an inflationary gap and show its short-run effects on an AD–AS graph"
  - "Calculate the change in government spending, taxes or transfers needed to close an output gap"
  - "Explain why lags can make discretionary fiscal policy less effective"
skills: ["2", "3", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "four-function"
calculatorNote: "All the arithmetic works on a four-function calculator. Values are in billions of valdas; round to 2 decimal places."
related: ["mb-ap-macro-3.8-revision-notes", "mb-ap-macro-3.8-practice", "mb-ap-macro-3.8-checklist"]
next: "mb-ap-macro-3.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-macroeconomics", "page-macroeconomics", "clar-macroeconomics"]
keyPoints:
  - "Fiscal policy is the government's use of spending and taxes/transfers to reach goals such as full employment and stable prices."
  - "Government spending is part of AD, so it shifts AD directly. Taxes and transfers change disposable income first, so they shift AD indirectly."
  - "Recessionary gap: expansionary policy (spend more, cut taxes, raise transfers). Inflationary gap: contractionary policy (the opposite)."
  - "Change needed = output gap ÷ multiplier. The spending multiplier is larger than the tax multiplier, so a smaller change in spending than in taxes does the job."
  - "Discretionary fiscal policy works with lags: it takes time to recognise a problem, decide on a policy and put it into action."
faqs:
  - question: "Is a central bank cutting interest rates fiscal policy?"
    answer: "No. Fiscal policy is set by the government through spending and taxes. Changes made by the central bank, such as interest rate changes, are monetary policy (Unit 4)."
  - question: "Why is the needed spending change smaller than the gap?"
    answer: "Because of the multiplier. Each valda of new government spending becomes income that is partly spent again, so AD rises by more than the first change."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## What fiscal policy is

In Topic 3.7 you saw that, with no government action, an economy with an output gap eventually returns to full-employment output (Yf). The wait can be long, and in a recession it means high unemployment for years. **Fiscal policy** is one way a government can act instead.

Key definitions:

- **Fiscal policy:** changes in government spending and in taxes or transfer payments, made by the government to reach macroeconomic goals such as full employment, price stability and growth.
- **Government spending (G):** government purchases of goods and services, such as roads, school buildings and teachers' salaries.
- **Taxes:** payments to the government, such as income tax and taxes on businesses.
- **Transfer payments:** payments from the government for which no good or service is provided in return, such as pensions or unemployment benefits. They are **not** part of G.
- **Expansionary fiscal policy:** raising government spending, cutting taxes or raising transfers. It shifts AD **right**.
- **Contractionary fiscal policy:** cutting government spending, raising taxes or cutting transfers. It shifts AD **left**.
- **Discretionary fiscal policy:** a deliberate decision to change spending or taxes. (Changes that happen automatically, without a new decision, are the topic of 3.9.)

Do not mix fiscal policy up with **monetary policy**, which is carried out by the central bank through the money supply and interest rates (Unit 4).

## Direct and indirect effects on AD

Recall that AD = C + I + G + NX. The fiscal tools reach AD in two different ways.

- **Government spending affects AD directly.** G is one of the components of AD. When the government buys VD 1 billion more of goods, AD rises by VD 1 billion in the first round, before any multiplier effect.
- **Taxes and transfers affect AD indirectly.** They change households' **disposable income**. Households then change consumption by only the MPC of that change and change saving by the rest. A tax cut on businesses can also raise investment. Either way, the effect works through C (or I), not through G.

This is why, as you saw in Topic 3.2:

**Spending multiplier = 1 ÷ MPS** and **tax multiplier = −MPC ÷ MPS**

The size of the government spending multiplier is always **larger** than the size of the tax multiplier. A rise in transfers works like a tax cut of the same size: it raises AD by MPC ÷ MPS for each valda.

## Matching the policy to the gap

| Situation | Unemployment | Policy needed | Tools | Short-run effects |
|---|---|---|---|---|
| **Recessionary (negative) gap:** real GDP < Yf | Above the natural rate | **Expansionary** | G ↑, taxes ↓, transfers ↑ | AD right: real GDP ↑, price level ↑, unemployment ↓ |
| **Inflationary (positive) gap:** real GDP > Yf | Below the natural rate | **Contractionary** | G ↓, taxes ↑, transfers ↓ | AD left: real GDP ↓, price level ↓ (or rises less), unemployment ↑ |

The aim in both cases is to move real GDP to **Yf**, where unemployment equals the natural rate. Fiscal policy influences **aggregate demand, real output and the price level** together. (It can also affect exchange rates, which you will meet in Unit 6.)

<figure>
<svg viewBox="0 0 640 320" role="img" aria-labelledby="fp1-title fp1-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fp1-title">Expansionary fiscal policy closing a recessionary gap</title>
<desc id="fp1-desc">An AD–AS graph with the price level on the vertical axis and real GDP on the horizontal axis. A vertical LRAS line stands at Yf. An upward-sloping SRAS curve is fixed. The first aggregate demand curve, AD1, crosses SRAS at point E1, at output Y1 to the left of Yf and price level PL1: a recessionary gap. Expansionary fiscal policy shifts aggregate demand right to AD2, which crosses SRAS at point E2 on the LRAS line, at output Yf and a higher price level PL2.</desc>
<rect x="0" y="0" width="640" height="320" fill="#ffffff"/>
<line x1="80" y1="270" x2="610" y2="270" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="25" x2="80" y2="270" stroke="#1d2b44" stroke-width="2"/>
<text x="345" y="305" text-anchor="middle" font-size="14" fill="#1d2b44">Real GDP</text>
<text x="30" y="150" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 30 150)">Price level</text>
<line x1="380" y1="35" x2="380" y2="270" stroke="#1d2b44" stroke-width="2.5"/>
<text x="388" y="42" font-size="14" font-weight="bold" fill="#1d2b44">LRAS</text>
<line x1="140" y1="250" x2="540" y2="90" stroke="#1d2b44" stroke-width="2.5"/>
<text x="546" y="88" font-size="14" font-weight="bold" fill="#1d2b44">SRAS</text>
<line x1="100" y1="82" x2="480" y2="234" stroke="#1d2b44" stroke-width="2.5"/>
<text x="486" y="240" font-size="14" font-weight="bold" fill="#1d2b44">AD₁</text>
<line x1="200" y1="82" x2="580" y2="234" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="10 5"/>
<text x="586" y="240" font-size="14" font-weight="bold" fill="#1d2b44">AD₂</text>
<g stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4">
<line x1="80" y1="174" x2="330" y2="174"/><line x1="330" y1="174" x2="330" y2="270"/><line x1="80" y1="154" x2="380" y2="154"/>
</g>
<g fill="#fdf6e3" stroke="#1d2b44" stroke-width="2">
<rect x="325" y="169" width="10" height="10"/><circle cx="380" cy="154" r="5"/>
</g>
<text x="312" y="196" font-size="14" font-style="italic" fill="#1d2b44">E₁</text>
<text x="390" y="150" font-size="14" font-style="italic" fill="#1d2b44">E₂</text>
<g font-size="13" fill="#1d2b44" text-anchor="end"><text x="72" y="178">PL₁</text><text x="72" y="158">PL₂</text></g>
<g font-size="13" fill="#1d2b44" text-anchor="middle"><text x="330" y="288">Y₁</text><text x="380" y="288" font-weight="bold">Yf</text></g>
<g stroke="#1d2b44" stroke-width="1.5" fill="none">
<path d="M190,110 L240,110"/><path d="M234,105 L240,110 L234,115"/>
</g>
<text x="100" y="70" font-size="12" fill="#1d2b44">G ↑, taxes ↓ or transfers ↑</text>
<text x="200" y="232" font-size="12" fill="#1d2b44">recessionary gap: Y₁ to Yf</text>
</svg>
<figcaption>Figure 1. Expansionary fiscal policy shifts AD₁ to AD₂ (dashed). Equilibrium moves from E₁ (square), below Yf, to E₂ (circle), on LRAS. Real GDP and the price level both rise, and unemployment falls to the natural rate. Labels, line styles and marker shapes, not colour, identify the curves and points.</figcaption>
</figure>

## Calculating the change needed to close a gap

The question is usually: **what is the smallest change in G (or in taxes, or in transfers) that would close the gap?** Work backwards from the size of the gap:

**Change in G needed = output gap ÷ spending multiplier**
**Change in taxes (or transfers) needed = output gap ÷ size of the tax multiplier**

Then state the **direction**: increase G or cut taxes for a recessionary gap; cut G or raise taxes for an inflationary gap.

**Assumption.** These calculations treat the price level as constant, so the shift in AD equals the change in real GDP. This is the usual way such calculations are set. In the full AD–AS model, SRAS slopes upward, so part of any AD shift raises the price level and real GDP rises by a little less than the shift (look at Figure 1: AD shifts right by more than the distance from Y₁ to Yf).

## Worked example 1: closing a recessionary gap in Valdoria

Valdoria is the fictional country used across the Marlbridge macroeconomics pages; its currency is the valda (VD). All data are fictional.

**Question.** Valdoria's real GDP is **VD 810 billion** and its full-employment output is **VD 840 billion**. The MPC is **0.75**. The natural rate of unemployment is 5.0%, and each VD 40 billion of output is 1 percentage point of unemployment.

(a) Identify the gap and the unemployment rate. Which type of fiscal policy is needed?
(b) Calculate the minimum increase in government spending that would close the gap.
(c) Calculate the tax cut that would close the gap instead.
(d) Calculate the increase in transfer payments that would close the gap.
(e) State the short-run effect of the policy on AD, real GDP, the price level and unemployment.

**(a)** Real GDP is below Yf by 840 − 810 = **VD 30 billion**: a **recessionary gap**. Unemployment is 5.0 + 30 ÷ 40 = **5.75%**, above the natural rate. **Expansionary** fiscal policy is needed.

**(b)** MPS = 1 − 0.75 = 0.25. Spending multiplier = 1 ÷ 0.25 = **4**. ΔG = 30 ÷ 4 = **+VD 7.5 billion**.

**(c)** Tax multiplier = −0.75 ÷ 0.25 = **−3**. Tax cut = 30 ÷ 3 = **VD 10 billion**. Step by step: a VD 10 billion tax cut raises disposable income by 10; households spend 0.75 × 10 = VD 7.5 billion in the first round; 7.5 × 4 = VD 30 billion. ✓

**(d)** Transfers work like a tax cut: an increase of **VD 10 billion**.

**(e)** AD shifts **right**. Real GDP rises towards VD 840 billion, the price level **rises**, and unemployment **falls** towards 5.0%.

**Check.** 7.5 × 4 = 30 ✓ and 10 × 3 = 30 ✓. The spending route needs less money (VD 7.5 billion against VD 10 billion) because all of the new spending enters AD in the first round, while part of a tax cut is saved. A common error is to **multiply** the gap by the multiplier (30 × 4 = 120): that gives a huge overshoot.

## Worked example 2: cooling an inflationary gap in Kestria

**Question.** Kestria, a fictional neighbour of Valdoria (values in VD billion), has real GDP of **636** and full-employment output of **600**. Its MPC is **0.75**.

(a) Identify the gap and the type of fiscal policy needed.
(b) Calculate the decrease in government spending that would close the gap.
(c) Calculate the tax increase that would close the gap instead.
(d) The government cuts spending by VD 3 billion and closes the rest of the gap with a tax increase. How large must the tax increase be?

**(a)** Real GDP is above Yf by 636 − 600 = **VD 36 billion**: an **inflationary gap**. Unemployment is below the natural rate and the price level is under upward pressure. **Contractionary** fiscal policy is needed.

**(b)** Spending multiplier = 4. ΔG = −36 ÷ 4 = **−VD 9 billion** (cut G by 9).

**(c)** Tax multiplier = −3. Tax increase = 36 ÷ 3 = **VD 12 billion**. A VD 12 billion tax rise cuts disposable income by 12, so consumption falls by 0.75 × 12 = VD 9 billion in the first round; 9 × 4 = 36. ✓

**(d)** The spending cut lowers AD by 3 × 4 = VD 12 billion. Remaining gap: 36 − 12 = VD 24 billion. Tax increase = 24 ÷ 3 = **VD 8 billion**.

**Interpretation.** AD shifts **left**. Real GDP falls back towards 600, unemployment rises towards the natural rate, and the price level falls or rises less than it otherwise would. Without the policy, Topic 3.7 tells you that rising wages would eventually close the gap through a leftward shift of SRAS, but at a **higher** price level.

## Lags in discretionary fiscal policy

The model shows AD moving at once. In reality, discretionary fiscal policy takes time. Textbooks group and name the lags in slightly different ways, but the stages are:

<figure>
<svg viewBox="0 0 640 230" role="img" aria-labelledby="fp2-title fp2-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fp2-title">The lags between an economic problem and the effect of fiscal policy</title>
<desc id="fp2-desc">A timeline of four boxes joined by arrows, running left to right. Box 1, recognition: data reveal the gap only after some months. Box 2, decision: the government and legislature debate and agree a budget. Box 3, implementation: projects are started and tax rules are changed. Box 4, impact: the multiplier rounds spread through aggregate demand. An arrow below the boxes is labelled time. A note says the economy may have changed by the time the policy takes effect.</desc>
<rect x="0" y="0" width="640" height="230" fill="#ffffff"/>
<g fill="#fdf6e3" stroke="#1d2b44" stroke-width="2">
<rect x="15" y="30" width="135" height="100" rx="6"/><rect x="165" y="30" width="135" height="100" rx="6"/><rect x="315" y="30" width="155" height="100" rx="6"/><rect x="485" y="30" width="140" height="100" rx="6"/>
</g>
<g font-size="14" font-weight="bold" fill="#1d2b44" text-anchor="middle">
<text x="82.5" y="55">1. Recognition</text><text x="232.5" y="55">2. Decision</text><text x="392.5" y="55">3. Implementation</text><text x="555" y="55">4. Impact</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="82.5" y="80">data reveal the</text><text x="82.5" y="96">gap only after</text><text x="82.5" y="112">some months</text>
<text x="232.5" y="80">government and</text><text x="232.5" y="96">legislature debate</text><text x="232.5" y="112">and agree a budget</text>
<text x="392.5" y="80">projects start;</text><text x="392.5" y="96">tax rules and</text><text x="392.5" y="112">payments change</text>
<text x="555" y="80">multiplier rounds</text><text x="555" y="96">spread through AD</text><text x="555" y="112">over time</text>
</g>
<g stroke="#1d2b44" stroke-width="1.5" fill="none">
<path d="M150,80 L163,80"/><path d="M157,75 L163,80 L157,85"/>
<path d="M300,80 L313,80"/><path d="M307,75 L313,80 L307,85"/>
<path d="M470,80 L483,80"/><path d="M477,75 L483,80 L477,85"/>
<path d="M20,160 L615,160"/><path d="M607,154 L615,160 L607,166"/>
</g>
<text x="320" y="180" text-anchor="middle" font-size="13" fill="#1d2b44">Time</text>
<text x="320" y="210" text-anchor="middle" font-size="12" fill="#1d2b44">By the end of stage 4 the gap may already be closing, so the policy can push output past Yf.</text>
</svg>
<figcaption>Figure 2. The lags in discretionary fiscal policy. Stages 1–3 happen before any money is spent or any tax changes; stage 4 is the time the change takes to work through the economy. The order of the boxes, not colour, shows the sequence.</figcaption>
</figure>

Why lags matter: suppose Valdoria agrees the VD 7.5 billion spending rise from Worked example 1, but the roads are built two years later. By then, falling wages (Topic 3.7) or a recovery in exports may already have closed the gap. The extra spending would then push real GDP **above** Yf and add to inflation. Badly timed policy can make the business cycle **worse**, not better. This is one reason governments also rely on automatic stabilisers, which need no new decision (Topic 3.9).

## Common misconceptions

- **"Transfer payments are part of G."** They are not purchases of goods and services. They change disposable income, so they work like a tax cut, with the tax multiplier's size.
- **"Change in G needed = gap × multiplier."** Divide the gap **by** the multiplier: 30 ÷ 4 = 7.5, not 30 × 4.
- **Using the spending multiplier for a tax change.** A tax change uses the tax multiplier; with MPC 0.75 the tax cut needed is 10, not 7.5.
- **"A tax cut and a spending rise of the same size have the same effect."** The spending rise has the bigger effect, because part of a tax cut is saved.
- **"Expansionary policy lowers the price level."** It shifts AD right, so the price level **rises** in the short run.
- **"Interest rate cuts are fiscal policy."** Those are monetary policy, carried out by the central bank.
- **"Fiscal policy shifts SRAS or LRAS."** In this topic it works through **AD**.
- **"Fiscal policy works immediately."** Recognition, decision, implementation and impact all take time.

## Where this leads

Next, [Topic 3.9, Automatic Stabilizers](/advanced-course-resources/macroeconomics/3-9-automatic-stabilizers-study-guide/), shows how parts of the tax and transfer system change by themselves over the business cycle. In Unit 5 you will look at fiscal policy again: government deficits and debt (Topic 5.4) and crowding out (Topic 5.5). If the multipliers are not yet secure, go back to [Topic 3.2](/advanced-course-resources/macroeconomics/3-2-multipliers-study-guide/); for the alternative of doing nothing, see [Topic 3.7](/advanced-course-resources/macroeconomics/3-7-long-run-self-adjustment-study-guide/).

Now try the [practice questions](/advanced-course-resources/macroeconomics/3-8-fiscal-policy-practice/), then use the [revision notes](/advanced-course-resources/macroeconomics/3-8-fiscal-policy-revision-notes/) and the [checklist](/advanced-course-resources/macroeconomics/3-8-fiscal-policy-checklist/) to consolidate.
