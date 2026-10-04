---
resourceId: "mb-ap-calcab-1.2-study-guide"
title: "Defining Limits and Using Limit Notation: Study Guide (Calculus AB 1.2)"
description: "Learn what a limit means, how to read and write limit notation correctly, and how one limit statement looks as a graph, a table and a formula."
course: "calculus-ab"
unit: 1
topics: ["1.2"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Function notation: reading f(3) as the output of f when the input is 3"
  - "Reading values from graphs and tables"
  - "The idea of change at an instant (Topic 1.1)"
prerequisiteResources: ["mb-ap-calcab-1.1-study-guide"]
learningObjectives:
  - "Describe in words what it means for f(x) to approach a number R as x approaches c"
  - "Write a limit statement in correct notation, with every part in place"
  - "Read a limit statement aloud and explain it in context, with units"
  - "Explain why a limit at c does not depend on the value f(c)"
  - "Recognise the same limit in a graph, a table of values and a formula"
skills: ["2", "3", "4"]
studyMinutes: 35
difficulty: "foundation"
calculator: "none-needed"
calculatorNote: "No calculator is needed. Table values are given to the decimal places shown."
related: ["mb-ap-calcab-1.2-revision-notes", "mb-ap-calcab-1.2-practice", "mb-ap-calcab-1.2-checklist"]
next: "mb-ap-calcab-1.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "lim (x → c) f(x) = R means you can make f(x) as close to R as you like by taking x close enough to c, with x ≠ c."
  - "A limit is a single real number. If no such number exists, say the limit does not exist."
  - "The limit at c ignores f(c). The value f(c) can equal the limit, differ from it, or not exist at all."
  - "Every part of the notation matters: lim, the arrow x → c under it, the function, and the value."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 1.2 is common content, so the same page serves AB and BC students."
  - question: "Do I need the epsilon-delta definition of a limit?"
    answer: "No. The formal epsilon-delta definition is not assessed on either exam. You need the informal idea of 'as close as you like' and correct notation. The background section on this page shows what the words mean with numbers."
  - question: "If f(c) exists, is the limit always f(c)?"
    answer: "No. For many familiar functions the two are equal, but the limit is decided only by values near c. A function can have f(c) = 5 while its limit at c is 3."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so limits are written in a compact form:

**lim (x → 3) f(x)** means "the limit as x approaches 3 of f(x)".

On paper, write "lim" with "x → 3" underneath it, then f(x) to the right. Both forms mean the same thing.

## What a limit describes

In Topic 1.1 you saw that an average rate of change needs two different inputs. At a single instant the change in the input is zero, so the average rate is undefined. Calculus gets round this by asking a different question: **what value do the outputs head towards as the input gets close to a point?** The answer is a limit.

Here is the idea in plain words.

> **Informal definition.** Let f be a function and c a number. The limit of f(x) as x approaches c is the real number R if you can make f(x) as close to R as you like by choosing x close enough to c, but not equal to c.

If such a number R exists, you write

**lim (x → c) f(x) = R**

Three parts of the definition do most of the work.

1. **"x close enough to c, but not equal to c."** You look at inputs on both sides of c, near c. You never use x = c itself.
2. **"As close to R as you like."** It is not enough for f(x) to get *near* R. For any closeness you choose, however small, there must be inputs near c that keep f(x) at least that close.
3. **"A real number R."** The limit is one number. If the outputs do not settle on one real number, the limit **does not exist**.

## Reading and writing limit notation

Each symbol in **lim (x → c) f(x) = R** has a job.

| Part | Read it as | What it tells you |
|---|---|---|
| lim | "the limit" | You are describing where outputs are heading, not one output |
| x → c | "as x approaches c" | The input value you are moving towards |
| f(x) | "of f of x" | The function whose outputs you watch |
| = R | "is R" | The single real number the outputs approach |

So lim (x → −1) g(x) = 4 is read "the limit as x approaches −1 of g of x is 4". In words: as x gets closer and closer to −1, the values of g(x) get as close as you like to 4.

**An equivalent arrow form.** You may also see "g(x) → 4 as x → −1". It means exactly the same thing. Use whichever form the question uses.

**The letter does not matter.** lim (t → 2) f(t) and lim (x → 2) f(x) are the same number. The letter under "lim" must match the letter inside the function.

**Notation you will meet next.** Topic 1.3 adds one-sided limits, written with a small sign after c (x → c⁻ from the left, x → c⁺ from the right), and the shorthand "= ∞" for unbounded behaviour. A limit written as "= ∞" is still a limit that does not exist as a real number.

## The limit ignores f(c)

The definition says "not equal to c". This has a big consequence: **the value f(c) plays no part in the limit.** Look at this function.

g(x) = ½x² + 1 for x ≠ 2, and g(2) = 5.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="g12-title g12-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="g12-title">Graph of g with a hole at (2, 3) and a separate solid point at (2, 5)</title>
<desc id="g12-desc">A U-shaped curve y = one half x squared plus 1 is drawn for x from −1 to 3.5. Its lowest point is (0, 1). At x = 2 the curve has an open circle at height 3, so the curve itself skips that point. A separate filled dot sits above it at (2, 5), showing g(2) = 5. Dashed guide lines run from the open circle to 2 on the x-axis and to 3 on the y-axis. As x approaches 2 from either side, the curve heads towards height 3, not 5.</desc>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<line x1="60" y1="300" x2="545" y2="300" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="180" y1="318" x2="180" y2="22" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="316">−1</text><text x="280" y="316">1</text><text x="380" y="316">2</text><text x="480" y="316">3</text>
<text x="550" y="295">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="173" y="232">2</text><text x="173" y="196">3</text><text x="173" y="160">4</text><text x="173" y="124">5</text><text x="173" y="88">6</text><text x="173" y="52">7</text>
<text x="173" y="24">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="80" y1="296" x2="80" y2="304"/><line x1="280" y1="296" x2="280" y2="304"/><line x1="380" y1="296" x2="380" y2="304"/><line x1="480" y1="296" x2="480" y2="304"/>
<line x1="176" y1="228" x2="184" y2="228"/><line x1="176" y1="192" x2="184" y2="192"/><line x1="176" y1="156" x2="184" y2="156"/><line x1="176" y1="120" x2="184" y2="120"/><line x1="176" y1="84" x2="184" y2="84"/><line x1="176" y1="48" x2="184" y2="48"/>
</g>
<line x1="380" y1="198" x2="380" y2="300" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<line x1="180" y1="192" x2="374" y2="192" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<path d="M80,246.0 L105,253.9 L130,259.5 L155,262.9 L180,264.0 L205,262.9 L230,259.5 L255,253.9 L280,246.0 L305,235.9 L330,223.5 L355,208.9 L380,192.0 L405,172.9 L430,151.5 L455,127.9 L480,102.0 L505,73.9 L530,43.5" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="380" cy="192" r="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="380" cy="120" r="6" fill="#1d2b44"/>
<text x="392" y="213" font-size="13" fill="#1d2b44">open circle: limit is 3</text>
<text x="300" y="116" font-size="13" fill="#1d2b44" text-anchor="end">solid dot: g(2) = 5</text>
<text x="196" y="285" font-size="13" fill="#1d2b44">y = ½x² + 1 (x ≠ 2)</text>
</svg>
<figcaption>Figure 1. The curve heads towards height 3 from both sides as x → 2, so lim (x → 2) g(x) = 3. The solid dot shows the separate value g(2) = 5. The open circle and the solid dot are told apart by shape (hollow or filled), not by colour. Axes are unitless.</figcaption>
</figure>

The outputs near x = 2 crowd towards 3. The single point at height 5 does not change where they are heading. So

**lim (x → 2) g(x) = 3, but g(2) = 5.**

The same limit would be 3 if g(2) were 3, or if g(2) were not defined at all. Three cases can happen at x = c:

| Case | Example | Limit at c | f(c) |
|---|---|---|---|
| Value matches limit | g at x = 0 | 1 | 1 |
| Value differs from limit | g at x = 2 | 3 | 5 |
| No value at all | ½x² + 1 with x = 2 removed from the domain | 3 | undefined |

## One limit, three representations

A limit statement can be shown graphically, numerically or analytically. Here is the same fact, **lim (x → 2) g(x) = 3**, in each form.

**Graphically.** Figure 1: trace the curve towards x = 2 from the left and from the right. Both paths head to height 3.

**Numerically.** A table with inputs closing in on 2 from both sides:

| x | 1.9 | 1.99 | 1.999 | 2.001 | 2.01 | 2.1 |
|---|---|---|---|---|---|---|
| g(x) | 2.805 | 2.98005 | 2.9980005 | 3.0020005 | 3.02005 | 3.205 |

The table does not include x = 2, and it does not need to. The outputs close in on 3 from below and from above. A table *suggests* a limit. It cannot prove one, because it only shows finitely many inputs.

**Analytically.** In symbols, lim (x → 2) g(x) = 3. Here you can confirm it from the formula: for x ≠ 2, g(x) = ½x² + 1, and as x → 2 this heads to ½(4) + 1 = 3.

Good answers move between the forms. If you are given notation, you should be able to say what the graph must look like near c, and which table values would fit.

## What "as close as you like" means (background)

*This section is background. The formal epsilon-delta definition is not assessed on either exam. It is here only to make the words of the definition concrete.*

Take f(x) = 3x + 1 near c = 2. The outputs approach 7. Suppose someone demands that f(x) be within 0.3 of 7. That means 6.7 < f(x) < 7.3. Solving gives 1.9 < x < 2.1. So every x within 0.1 of 2 does the job.

Demand more: within 0.003 of 7. Now you need x within 0.001 of 2, that is 1.999 < x < 2.001. Whatever closeness is demanded, a small enough window around 2 meets it. That is what "as close as you like" means.

<figure>
<svg viewBox="0 0 520 330" role="img" aria-labelledby="band-title band-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="band-title">Zoomed graph of y = 3x + 1 near x = 2 with a target band around 7 and an input window around 2</title>
<desc id="band-desc">A straight line rises from (1.5, 5.5) to (2.5, 8.5). Two horizontal dashed lines at y = 6.7 and y = 7.3 mark a target band of width 0.3 either side of 7. Two vertical dotted lines at x = 1.9 and x = 2.1 mark an input window of width 0.1 either side of 2. Inside the input window the line stays inside the target band. The point (2, 7) is marked with a small open circle because the definition never uses x = 2 itself.</desc>
<rect x="0" y="0" width="520" height="330" fill="#ffffff"/>
<line x1="80" y1="300" x2="500" y2="300" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="80" y1="315" x2="80" y2="20" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="80" y="138" width="420" height="54" fill="#eef2f8"/>
<line x1="80" y1="138" x2="500" y2="138" stroke="#1d2b44" stroke-width="1" stroke-dasharray="6 4"/>
<line x1="80" y1="192" x2="500" y2="192" stroke="#1d2b44" stroke-width="1" stroke-dasharray="6 4"/>
<line x1="240" y1="30" x2="240" y2="300" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3"/>
<line x1="320" y1="30" x2="320" y2="300" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3"/>
<line x1="80" y1="300" x2="480" y2="30" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="280" cy="165" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="316">1.5</text><text x="240" y="316">1.9</text><text x="280" y="316">2</text><text x="320" y="316">2.1</text><text x="480" y="316">2.5</text>
<text x="508" y="296">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="74" y="142">7.3</text><text x="74" y="169">7</text><text x="74" y="196">6.7</text><text x="74" y="34">8.5</text><text x="74" y="296">5.5</text>
</g>
<text x="330" y="132" font-size="12" fill="#1d2b44">dashed: target band 6.7 to 7.3</text>
<text x="330" y="60" font-size="12" fill="#1d2b44">dotted: input window 1.9 to 2.1</text>
<text x="300" y="250" font-size="13" fill="#1d2b44">y = 3x + 1</text>
</svg>
<figcaption>Figure 2. To keep f(x) within 0.3 of 7 (dashed lines), it is enough to keep x within 0.1 of 2 (dotted lines). A tighter band needs a narrower window, and one always exists. The band and window are labelled by line style and text, not by colour.</figcaption>
</figure>

## Worked example 1: translating between words, notation and context

**Question.** A delivery drone climbs and then hovers. H(t) is its height in metres, t seconds after take-off.

(a) Write in limit notation: "As the time gets closer and closer to 8 seconds, the drone's height gets as close as we like to 30 metres."
(b) Explain in words, with units, what lim (t → 12) H(t) = 30 means.
(c) Does lim (t → 8) H(t) = 30 tell you the value of H(8)?

1. **Find c and R in (a).** The input is time t, and it approaches 8, so c = 8. The output is height, and it approaches 30, so R = 30.
2. **Write the statement.** **lim (t → 8) H(t) = 30.** Use t, the letter the question uses, both under "lim" and inside H.
3. **Read the notation in (b).** The input t approaches 12. The outputs H(t) approach 30. Add units and context: as the time gets closer to 12 seconds after take-off, from either side, the drone's height gets as close as we like to 30 metres.
4. **Apply the definition in (c).** The limit uses times near 8, never t = 8 itself. So the statement alone does not give H(8).

**Answers.** (a) lim (t → 8) H(t) = 30. (b) As t approaches 12 s, the height approaches 30 m. (c) No.

**Interpretation.** A real drone's height changes smoothly, so in practice H(8) will also be 30 m. But that conclusion uses extra information about the drone (that its height has no sudden jumps). It does not come from the limit statement. Topic 1.11 makes this idea precise as continuity.

## Worked example 2: deciding which limit statements are true

**Question.** Use g from Figure 1: g(x) = ½x² + 1 for x ≠ 2, and g(2) = 5. Decide whether each statement is true or false, with a reason.

(i) lim (x → 2) g(x) = 5
(ii) lim (x → 2) g(x) = 3
(iii) g(2) = 3
(iv) lim (x → 0) g(x) = g(0)
(v) lim (x → 3) g(x) = 5.5

1. **(i) False.** For x near 2 but not equal to 2, g(x) = ½x² + 1 is close to 3, not 5. The value 5 is only g(2), which the limit ignores.
2. **(ii) True.** The graph heads to height 3 from both sides, and the table values close in on 3.
3. **(iii) False.** g(2) is defined separately as 5. The statement mixes up the value at 2 with the limit at 2.
4. **(iv) True.** Near 0 the outputs approach ½(0)² + 1 = 1, and g(0) = 1. Here the limit and the value happen to match.
5. **(v) True.** Near 3 the formula ½x² + 1 applies on both sides, and the outputs approach ½(9) + 1 = 5.5.

**Check.** Compare (ii) and (iii). The same two numbers, 2 and 3, appear in both. One statement is about where outputs head; the other is about a single output. Only the first is true.

## Common misconceptions

- **"The limit is the value at c."** The limit uses only x near c, with x ≠ c. The value f(c) may differ or may not exist.
- **"If f(c) is undefined, the limit does not exist."** Not so. A missing point (a hole) does not stop nearby outputs from approaching a number.
- **Leaving out "x → c".** "lim f(x) = 3" does not say where x is heading. The limit of the same function can be different at different points.
- **Dropping "lim".** "(x → 2) g(x) = 3" or "g(x) = 3" is a different (and false) statement. Keep "lim" on every line.
- **Swapping c and R.** In lim (x → 2) g(x) = 3, the 2 is an input and the 3 is an output. Writing lim (x → 3) g(x) = 2 means something else entirely.
- **"Getting near R is enough."** The outputs must get *as close as you like* to R, not just within some fixed distance. A number slightly off, such as 3.01, is not the limit here.
- **"A table proves the limit."** A table suggests a value. Use the formula, a graph or later results (Topics 1.5 and 1.6) to justify it.
- **Mismatched letters.** lim (x → 2) f(t) is not well formed. The variable under "lim" must be the input of the function.

## Where this leads

You now have the language. Topic 1.3, [Estimating Limit Values from Graphs](/advanced-course-resources/calculus-ab/1-3-estimating-limit-values-graphs-study-guide/), uses it to read limits from graphs, including one-sided limits and limits that do not exist. Topic 1.4 does the same with tables. If you need a reminder of why limits are needed at all, revisit Topic 1.1, [Introducing Calculus: Can Change Occur at an Instant?](/advanced-course-resources/calculus-ab/1-1-introducing-calculus-change-occur-instant-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/1-2-defining-limits-limit-notation-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/1-2-defining-limits-limit-notation-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/1-2-defining-limits-limit-notation-checklist/) to consolidate.
