---
title: "OCR A Level Business (H431): Decision trees"
resourceType: "study-guides"
subject: "business"
level: ["a-levels"]
topic: "Business objectives and strategic decisions"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H431"]
syllabusSeries: "Version 2.1 (January 2026), for first assessment in 2017; final assessment summer 2027"
order: 1.14
syllabusTopics:
  - qualification: "a-level"
    topic: "business-objectives-and-strategic-decisions-ocr-alevel-business"
    subtopic: "decision-trees-ocr-alevel-business"
description: "Study guide to decision trees for OCR A Level Business H431: economic outcomes, expected values, switching probabilities and whether a test market is worth it."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers the Decision trees content in the area of study Business objectives and strategy of the OCR A Level Business (H431) specification, Version 2.1 (January 2026), final assessment summer 2027. It is numbered 1.14 on this site. The [decision making and decision trees study guide](/resources/ocr-a-level-business-decision-making-and-decision-trees/) explains the drawing conventions and works a single-stage and a two-stage tree. This page goes further: it calculates the economic outcome of every branch, finds the probability at which the best option changes, and uses a tree to judge whether paying for a test market is worthwhile. All businesses and figures are invented.

Use it with the [decision trees revision notes](/resources/ocr-a-level-business-h431-decision-trees-ocr-alevel-business-revision-notes/) and the [decision trees practice questions](/resources/ocr-a-level-business-h431-decision-trees-ocr-alevel-business-practice/). The course hub is [OCR A Level Business](/boards/ocr/a-level/business/).

## What the specification asks for

| Learners should be able to | Covered below |
|---|---|
| explain the nature and purpose of decision trees | Nature and purpose |
| calculate and interpret probabilities (in decimals and percentages) | Probabilities |
| calculate and interpret economic outcomes and expected values | Worked example 1 |
| evaluate the outcomes shown on a decision tree | Worked examples 1 and 2 |
| evaluate how a business should respond to the information contained in a decision tree | Responding to a tree |
| assess the importance of the information shown on a decision tree to a business | Worked example 3 |
| assess the usefulness of a decision tree when making a business decision | Usefulness |

## Nature and purpose

A decision tree is a diagram of a decision made under risk. Square nodes show decisions; circular nodes show chance events, with a probability on each branch. Costs are written on the branch where they are paid, and payoffs at the end of each branch. The purpose is to compare options on their expected value while making every assumption visible: the options considered, the outcomes thought possible, their probabilities and their values.

## Probabilities

A probability is the estimated likelihood of an outcome, written as a decimal (0.35) or a percentage (35%). At every chance node the probabilities must add up to 1 (100%). Interpreting 0.35 means: in many similar situations, this outcome would be expected about 35 times in 100. For a single decision, it happens or it does not. Probabilities come from market research, past records or managers' judgement, and their source determines how much trust they deserve.

## Worked example 1: economic outcomes and expected values

Westerby Foods has three options.

- **Option 1:** a new product line costing £120,000. High demand (0.6) brings £300,000; low demand (0.4) brings £80,000.
- **Option 2:** upgrade the existing line for £50,000. Good sales (0.7) bring £140,000; weak sales (0.3) bring £60,000.
- **Option 3:** do nothing, £0.

The **economic outcome** of a branch is its payoff minus the costs paid to reach it.

| Branch | Payoff | Cost | Economic outcome | Probability |
|---|---|---|---|---|
| 1, high demand | 300,000 | 120,000 | +180,000 | 0.6 |
| 1, low demand | 80,000 | 120,000 | −40,000 | 0.4 |
| 2, good sales | 140,000 | 50,000 | +90,000 | 0.7 |
| 2, weak sales | 60,000 | 50,000 | +10,000 | 0.3 |

**Expected values.** Two methods give the same answer.

- Method A, EV of payoffs then subtract cost. Option 1: (0.6 × 300,000) + (0.4 × 80,000) = 180,000 + 32,000 = £212,000; net gain 212,000 − 120,000 = **£92,000**. Option 2: (0.7 × 140,000) + (0.3 × 60,000) = 98,000 + 18,000 = £116,000; net gain 116,000 − 50,000 = **£66,000**.
- Method B, EV of economic outcomes. Option 1: (0.6 × 180,000) + (0.4 × −40,000) = 108,000 − 16,000 = **£92,000**. Option 2: (0.7 × 90,000) + (0.3 × 10,000) = 63,000 + 3,000 = **£66,000**.

Method B is useful because it shows the range of real results, not just the average.

**Interpreting the outcomes.** On expected value, Option 1 is better by £26,000. But Option 1 has a 40% chance of a £40,000 loss, while Option 2 cannot lose money on these figures: its worst outcome is a gain of £10,000. The spread for Option 1 runs from −£40,000 to +£180,000, a range of £220,000; for Option 2 it runs from +£10,000 to +£90,000, a range of £80,000.

## Worked example 2: when does the best option change?

The 0.6 chance of high demand is an estimate. How low could it fall before Option 2 becomes the better choice?

Let *p* be the probability of high demand for Option 1. Its net gain is:

p × 300,000 + (1 − p) × 80,000 − 120,000 = 220,000p − 40,000

Set this equal to Option 2's net gain of £66,000:

220,000p − 40,000 = 66,000, so p = 106,000 ÷ 220,000 = **0.48** (to 2 decimal places).

If the probability of high demand is below about 0.48, Option 2 has the higher expected value. Option 1 breaks even (net gain of zero) at p = 40,000 ÷ 220,000 = 0.18.

**Interpreting.** The managers' estimate of 0.6 is only 0.12 above the switching point. If their research is weak, or similar launches in the past have succeeded less than half the time, the recommendation is fragile. This kind of check is what turns a calculation into an evaluation.

## Worked example 3: is a test market worth it?

Westerby could first run a test market in one region for £15,000 before deciding on Option 1. Its managers estimate:

- The test is **good** with probability 0.6. Then high demand is very likely: 0.9 high, 0.1 low.
- The test is **poor** with probability 0.4. Then high demand is unlikely: 0.15 high, 0.85 low.

Work from right to left.

1. **After a good test**, launching: (0.9 × 300,000) + (0.1 × 80,000) = £278,000; net of the £120,000 launch cost, **£158,000**. Better than not launching (£0), so launch.
2. **After a poor test**, launching: (0.15 × 300,000) + (0.85 × 80,000) = £113,000; net of £120,000, **−£7,000**. Worse than £0, so do not launch.
3. **Test chance node:** (0.6 × 158,000) + (0.4 × 0) = £94,800.
4. **Net of the test cost:** 94,800 − 15,000 = **£79,800**.

Launching straight away has an expected net gain of £92,000. Testing first gives £79,800, so on expected value the test is **not** worth £15,000.

**Why?** Without its cost, the test route would be worth £94,800, which is only £2,800 more than launching directly. The information is worth about £2,800 because it changes the decision only after a poor test, saving the business from a launch with an expected loss of £7,000. Paying £15,000 for information worth about £2,800 lowers the expected value.

**But consider risk.** With the test, the worst outcome after a poor result is a £15,000 loss (the test cost), instead of the £40,000 loss from a direct launch into low demand. A business that cannot afford a £40,000 loss might still choose to test. This is how a tree shows the **importance of information** to a business: it puts a value on knowing more before committing.

## Responding to a tree

When a tree points to an option, a business should:

- **Check the worst case** against its reserves before acting on expected value.
- **Test sensitivity:** find how far a probability or payoff can move before the choice changes, as in worked example 2.
- **Ask where the numbers came from** and whether they could be biased.
- **Consider gathering more information** if the decision is close and the information is cheap.
- **Add qualitative factors** the tree leaves out: staff, brand, ethics, strategic fit.
- **Consider timing:** a tree ignores when cash flows arrive, so use investment appraisal alongside it for long projects.

## Usefulness

**Strengths.** It forces managers to set out options, outcomes and probabilities. It makes assumptions visible so they can be challenged. It weighs risk explicitly. It handles sequences of decisions, as in the test-market example. It supports sensitivity checks.

**Limitations.** Probabilities and payoffs are estimates, often based on judgement. Expected value is an average that the business will not actually receive from a single decision. Real outcomes are more varied than two or three branches. It ignores the timing of cash flows and qualitative factors. A precise-looking figure can create false confidence.

**Judgement.** A tree is most useful for a costly, one-off decision where the probabilities can be grounded in evidence, and least useful where the outcomes are new and the probabilities are guesses. It is an aid to judgement, not a substitute for it.

## Common mistakes

- Probabilities at a node that do not add to 1.
- Forgetting to subtract the cost of an option.
- Choosing on expected value without mentioning the worst case.
- Working left to right in a multi-stage tree.
- Treating expected value as the amount the business will receive.

## Exam technique

Show every line of working, label results in pounds and say which option the numbers favour. For "evaluate the outcomes", compare the expected values and the spread. For "assess usefulness", weigh strengths against limitations for this business, including how reliable its probabilities are.

Practise with the [decision trees practice questions](/resources/ocr-a-level-business-h431-decision-trees-ocr-alevel-business-practice/). Related content: [decision making](/resources/ocr-a-level-business-h431-decision-making-ocr-alevel-business/) and [risk and uncertainty](/resources/ocr-a-level-business-h431-risk-and-uncertainty-ocr-alevel-business/).

## Official syllabus

OCR, Advanced GCE in Business (H431), specification Version 2.1 (January 2026), for first assessment in 2017: area of study Business objectives and strategy, content Decision trees.
