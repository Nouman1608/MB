---
resourceId: "mb-ap-calcab-5.11-study-guide"
title: "Solving Optimization Problems: Study Guide (Calculus AB 5.11)"
description: "Learn to finish an optimization problem: justify that a critical point gives the absolute maximum or minimum, answer the exact question asked and explain the result in context."
course: "calculus-ab"
unit: 5
topics: ["5.11"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Setting up an optimization problem: variables, a function to optimize, a constraint and a domain (Topic 5.10)"
  - "The Candidates Test on a closed interval (Topic 5.5)"
  - "The first and second derivative tests (Topics 5.4 and 5.7)"
  - "Interpreting a derivative in context, with units (Topic 4.1)"
learningObjectives:
  - "Carry an optimization problem from the model to a final answer, choosing a valid way to justify an absolute maximum or minimum"
  - "Use the Candidates Test on a closed domain, and the single-critical-point argument on an open domain"
  - "Tell apart where an extreme value occurs and what the extreme value is, and give whichever the question asks for"
  - "Explain the meaning of a maximum or minimum value in context, naming the quantity, its units and when or where it happens"
  - "Recognise when an extreme value belongs to a rate and say what that means in context"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "mixed"
calculatorNote: "Both worked examples are done without a calculator. On calculator-active questions, show the setup, then give decimal answers correct to three decimal places."
related: ["mb-ap-calcab-5.11-revision-notes", "mb-ap-calcab-5.11-practice", "mb-ap-calcab-5.11-checklist"]
next: "mb-ap-calcab-5.11-practice"
prerequisiteResources: ["mb-ap-calcab-5.10-study-guide"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Finding a critical point is not the end. You must show it gives the absolute maximum or minimum on the whole domain."
  - "Closed domain: compare the function at every critical point and both endpoints. Open domain: one critical point plus a sign change of the derivative (or one sign of the second derivative) is enough."
  - "Answer the question asked: the location (such as x = 30 m), the extreme value (such as 240 m of fence) or another quantity that follows from them."
  - "A good final sentence names the quantity, gives the value with units and says when or where it happens."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 5.11 is common content, so the same page serves AB and BC students."
  - question: "What is the difference between Topic 5.10 and Topic 5.11?"
    answer: "Topic 5.10 is about building the model: choosing variables, writing the function to optimize and finding its domain. Topic 5.11 finishes the job: finding the extreme value, justifying that it is the absolute one and explaining what it means in context."
  - question: "Is the second derivative test enough to prove an absolute maximum?"
    answer: "Only with extra information. A negative second derivative at one critical point shows a relative maximum. It becomes an absolute maximum if that is the only critical point on an interval, or if the second derivative is negative across the whole domain."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## From a model to an answer

In Topic 5.10 you learned to turn a description into a function. You chose variables, wrote the quantity to make largest or smallest, used a constraint to remove a variable and stated the domain. That gives you a function of one variable, such as L(x) on x > 0.

Topic 5.11 is about the second half of the job. There are three things still to do:

1. **Find** the candidates for the extreme value, using the derivative.
2. **Justify** that your answer is the absolute (global) maximum or minimum on the whole domain, not just a local one.
3. **Answer and interpret.** Give exactly what the question asks for, with units, and say what it means in the situation.

Many students lose marks at steps 2 and 3, not in the calculus. A correct critical point with no justification, or a correct number with no meaning attached, is an incomplete answer.

## Step 2: justifying an absolute extremum

The method you use depends on the domain.

| Domain | Method | What you must show |
|---|---|---|
| Closed interval [a, b] | Candidates Test (Topic 5.5) | The value of the function at every critical point inside [a, b] and at both endpoints. The largest is the absolute maximum; the smallest is the absolute minimum. |
| Open or half-open interval, such as x > 0 | Single critical point with the first derivative test | c is the **only** critical point in the domain, and the derivative changes sign there (− to + for a minimum, + to − for a maximum). |
| Open or half-open interval | Single critical point with the second derivative | c is the only critical point, and the second derivative has the right sign at c (positive for a minimum, negative for a maximum). |
| Any interval | Second derivative of one sign everywhere | The graph is concave up on the whole domain (so a critical point is the absolute minimum) or concave down on the whole domain (absolute maximum). |

**Why the "only critical point" condition matters.** Suppose f is differentiable on an interval and has just one critical point, c, where f′ changes from negative to positive. Then f is decreasing on the whole interval to the left of c and increasing on the whole interval to the right. No other x value can give a smaller output, so f(c) is the absolute minimum. Without the "only" condition, another valley somewhere else could be lower.

**Why endpoints matter.** On a closed interval the largest or smallest value can sit at an endpoint, where the derivative need not be 0. If you only solve f′(x) = 0, you can miss the answer completely.

**Endpoints that are not allowed.** A length of 0 or a box with no height usually makes no sense, so the domain is often open, such as 0 < x < 10. Then you cannot use the Candidates Test directly. Use one of the single-critical-point arguments instead.

## Step 3: answering the question that was asked

An optimization problem has two kinds of answer, and questions ask for different ones.

- **Where** the extreme value happens: the input, such as "x = 30 m" or "t = 1.5 hours".
- **What** the extreme value is: the output, such as "240 m of fence" or "a profit of $386.25".

Read the final line of the question again before you write. "Find the dimensions" wants inputs. "Find the least cost" wants an output. "Find the price" may want a third quantity that you calculate from the input. Questions often ask for more than one of these.

### What a maximum or minimum means in context

The same calculus answer means different things depending on what the function measures. Always say which quantity, with units.

| If the function measures… | its maximum value means… | the location means… |
|---|---|---|
| An amount, such as profit P(x) in dollars | the most profit that is possible under the model | the input (number sold, price) that achieves it |
| A rate, such as a flow rate R(t) in litres per minute | the **fastest** flow, not the largest amount of liquid | the time when the flow is fastest |
| A length, area, cost or time to be minimised | the least possible length, area, cost or time | the dimensions or route that achieve it |

The middle row causes many errors. If R(t) is the rate at which cars pass a sensor, its maximum is the busiest moment, the highest number of cars **per minute**. It is not the time when the most cars have passed in total.

A good context sentence has three parts: **the quantity, the value with units, and when or where it happens.** For example: "The greatest daily profit the model allows is $386.25, when the café sells 225 cups a day."

## Worked example 1: a closed domain

**Question.** A café (fictional data) sells one cold drink. If it sells x cups a day, it can charge 6 − 0.01x dollars per cup. Each cup costs $1.50 to make, and the drink has fixed costs of $120 a day. The café can make at most 400 cups a day.

(a) Find the number of cups that gives the greatest daily profit, and justify your answer.
(b) What price per cup should it charge, and what is the greatest daily profit?
(c) Interpret the maximum value in context.

**Model (from Topic 5.10).** Profit = revenue − cost:

P(x) = x(6 − 0.01x) − (1.5x + 120) = 4.5x − 0.01x² − 120, for 0 ≤ x ≤ 400.

The domain is closed, because selling 0 cups or 400 cups are both possible.

1. **Derivative.** P′(x) = 4.5 − 0.02x.
2. **Critical points.** P′(x) = 0 gives 0.02x = 4.5, so x = 225. This is inside [0, 400]. P′ exists everywhere, so there are no other critical points.
3. **Candidates Test.** Evaluate P at the critical point and both endpoints:

| x | P(x) |
|---|---|
| 0 | −120 |
| 225 | 386.25 |
| 400 | 80 |

4. **Conclusion for (a).** The largest value is at x = 225. So selling **225 cups a day** gives the greatest daily profit. The justification is the comparison of all three candidates.
5. **Price for (b).** The price is 6 − 0.01(225) = 6 − 2.25 = **$3.75 per cup**. The greatest daily profit is P(225) = **$386.25**.
6. **Interpretation for (c).** Under this model, $386.25 is the most profit the café can make in one day, and it happens when the café sells 225 cups at $3.75 each. Selling fewer cups at a higher price, or more cups at a lower price, gives less profit.

<figure>
<svg viewBox="0 0 520 330" role="img" aria-labelledby="profit-title profit-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="profit-title">Graph of daily profit P(x) = 4.5x − 0.01x² − 120 for 0 ≤ x ≤ 400</title>
<desc id="profit-desc">A downward-opening parabola drawn only between x = 0 and x = 400 cups. It starts at the left endpoint (0, −120), shown as a filled dot, rises to its highest point at (225, 386.25), marked with a larger filled dot labelled "absolute maximum", and falls to the right endpoint (400, 80), shown as a filled dot. A dashed line runs from the peak down to x = 225 on the horizontal axis. The horizontal axis is the number of cups sold per day; the vertical axis is profit in dollars.</desc>
<rect x="0" y="0" width="520" height="330" fill="#ffffff"/>
<line x1="70" y1="219.1" x2="490" y2="219.1" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="70" y1="300" x2="70" y2="20" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="170" y="236">100</text><text x="270" y="236">200</text><text x="370" y="236">300</text><text x="470" y="236">400</text>
<text x="420" y="254">x (cups per day)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="63" y="270">−100</text><text x="63" y="223">0</text><text x="63" y="176">100</text><text x="63" y="129">200</text><text x="63" y="81">300</text><text x="63" y="34">400</text>
<text x="66" y="14">P (dollars)</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="170" y1="215" x2="170" y2="223"/><line x1="270" y1="215" x2="270" y2="223"/><line x1="370" y1="215" x2="370" y2="223"/><line x1="470" y1="215" x2="470" y2="223"/>
<line x1="66" y1="266.4" x2="74" y2="266.4"/><line x1="66" y1="171.8" x2="74" y2="171.8"/><line x1="66" y1="124.5" x2="74" y2="124.5"/><line x1="66" y1="77.3" x2="74" y2="77.3"/><line x1="66" y1="30" x2="74" y2="30"/>
</g>
<line x1="295" y1="42" x2="295" y2="219.1" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,275.8 95.0,225.6 120.0,181.3 145.0,142.9 170.0,110.4 195.0,83.8 220.0,63.1 245.0,48.3 270.0,39.5 295.0,36.5 320.0,39.5 345.0,48.3 370.0,63.1 395.0,83.8 420.0,110.4 445.0,142.9 470.0,181.3"/>
<circle cx="70" cy="275.8" r="5" fill="#1d2b44"/>
<circle cx="295" cy="36.5" r="7" fill="#1d2b44"/>
<circle cx="470" cy="181.3" r="5" fill="#1d2b44"/>
<text x="305" y="30" font-size="13" fill="#1d2b44">absolute maximum (225, 386.25)</text>
<text x="80" y="292" font-size="12" fill="#1d2b44">endpoint (0, −120)</text>
<text x="402" y="200" font-size="12" fill="#1d2b44">endpoint (400, 80)</text>
<text x="300" y="214" font-size="12" fill="#1d2b44">x = 225</text>
</svg>
<figcaption>Figure 1. The profit function from Worked example 1 on its closed domain. The three dots are the three candidates. The peak is higher than both endpoints, so it is the absolute maximum. The location is x = 225 cups; the value is $386.25.</figcaption>
</figure>

**Check.** P′(100) = 2.5 > 0 and P′(300) = −1.5 < 0, so profit rises and then falls, as the graph shows. P″(x) = −0.02 < 0 everywhere, which also confirms a maximum.

## Worked example 2: an open domain

**Question.** A farmer (fictional) wants a rectangular field of area 1,800 m², split into three equal pens by two straight fences parallel to one pair of sides. Find the dimensions that use the least total length of fencing. Justify that your answer gives the absolute minimum, and interpret the minimum value.

<figure>
<svg viewBox="0 0 520 280" role="img" aria-labelledby="pens-title pens-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pens-title">A rectangular field split into three equal pens</title>
<desc id="pens-desc">A rectangle twice as wide as it is tall. The top and bottom sides are each labelled y. The left and right sides are each labelled x. Two internal fences, drawn as dashed lines, run from top to bottom and divide the field into three equal pens labelled pen 1, pen 2 and pen 3. A note says there are four fences of length x and two of length y.</desc>
<rect x="0" y="0" width="520" height="280" fill="#ffffff"/>
<rect x="60" y="40" width="400" height="200" fill="none" stroke="#1d2b44" stroke-width="3"/>
<line x1="193.3" y1="40" x2="193.3" y2="240" stroke="#1d2b44" stroke-width="3" stroke-dasharray="8 5"/>
<line x1="326.7" y1="40" x2="326.7" y2="240" stroke="#1d2b44" stroke-width="3" stroke-dasharray="8 5"/>
<g font-size="14" fill="#1d2b44" text-anchor="middle">
<text x="126.7" y="145">pen 1</text><text x="260" y="145">pen 2</text><text x="393.3" y="145">pen 3</text>
<text x="260" y="30">y</text><text x="260" y="262">y</text>
<text x="44" y="145">x</text><text x="476" y="145">x</text>
</g>
<text x="260" y="276" font-size="12" fill="#1d2b44" text-anchor="middle">Four fences of length x (two ends, two dashed dividers) and two of length y</text>
</svg>
<figcaption>Figure 2. The field in Worked example 2. Counting the fences from the picture gives the total length 4x + 2y. The two dividers are drawn dashed only to tell them apart from the boundary; they are fences of the same kind.</figcaption>
</figure>

**Model.** Let x be the length of the sides parallel to the dividers and y the length of the other two sides. Total fencing L = 4x + 2y. The area constraint is xy = 1800, so y = 1800/x. Then

L(x) = 4x + 3600/x, for x > 0.

The domain is open: x = 0 is impossible, and there is no upper limit on x.

1. **Derivative.** L′(x) = 4 − 3600/x².
2. **Critical points.** L′(x) = 0 gives x² = 900, so x = 30 (the root x = −30 is outside the domain). L′ exists for every x > 0, so **x = 30 is the only critical point** in the domain.
3. **Justify.** L″(x) = 7200/x³, which is positive for all x > 0. So L is concave up on its whole domain, and the only critical point is the absolute minimum. (Alternatively: L′(10) = −32 < 0 and L′(60) = 3 > 0, so L′ changes from negative to positive at the only critical point.)
4. **Dimensions.** x = 30 m, and y = 1800/30 = 60 m. Each pen is 20 m by 30 m.
5. **Minimum value.** L(30) = 120 + 120 = 240 m.

**Answer.** The field should be 30 m by 60 m, with the dividers parallel to the 30 m sides. This needs **240 m** of fencing.

**Interpretation.** 240 m is the least fencing that can enclose 1,800 m² in three equal pens arranged this way. Any other choice of x needs more. For example, x = 20 and x = 45 both need 260 m.

**Why not just state x = 30?** The question asks for dimensions, so both 30 m and 60 m are needed, and it also asks you to interpret the minimum value, which is the 240 m.

## Using a graphing calculator

On calculator-active questions you may have a function whose critical point you cannot find by hand. You can graph f′ and find its zero, or graph f and use the maximum or minimum feature. Still write:

- the function you are optimizing and its domain;
- the equation you solved, such as "T′(x) = 0 at x = 2.683";
- your justification (Candidates Test values or the sign change of the derivative);
- the final answer, correct to three decimal places, with units.

Store unrounded values in the calculator and round only at the end. A calculator picture is evidence for you; the written reasoning is what earns credit.

## Common misconceptions

- **"The critical point is the answer."** It is only a candidate. On a closed interval, an endpoint can win. On an open interval, you need the "only critical point" argument.
- **Giving the location when the value is asked for, or the reverse.** "The maximum profit is 225" mixes up the number of cups with the profit.
- **Using f″(c) < 0 alone as proof of an absolute maximum.** This shows a relative maximum. Add "c is the only critical point on the interval", or show that f″ < 0 on the whole domain.
- **Keeping a critical point outside the domain.** A negative length or a time before the start is not a candidate.
- **Using the Candidates Test with endpoints that are not in the domain.** If x = 0 gives a box of height 0 that is not allowed, you cannot "compare with the endpoint". Use a sign argument instead.
- **Answers without units or context.** "240" is not an interpretation. "240 m of fencing, the least possible" is.
- **Treating the maximum of a rate as the maximum of an amount.** The busiest moment on a road is not the moment when the most cars have passed in total.
- **Writing "it" instead of naming the function.** Say "L has its absolute minimum at x = 30", not "it is smallest there".
- **Rounding a critical point early.** On a calculator question, use the stored value to evaluate the function, then round to three decimal places.

## Where this leads

You can now take an optimization problem from its model to a justified, interpreted answer. [Topic 5.10](/advanced-course-resources/calculus-ab/5-10-introduction-optimization-problems-study-guide/) covers building the model if you need to revisit it. Next, [Topic 5.12, Exploring Behaviors of Implicit Relations](/advanced-course-resources/calculus-ab/5-12-exploring-behaviors-implicit-relations-study-guide/), applies critical points and the derivative tests to curves that are not written as y = f(x). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/5-11-solving-optimization-problems-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/5-11-solving-optimization-problems-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/5-11-solving-optimization-problems-checklist/) to consolidate.
