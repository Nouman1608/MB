---
title: "IB DP Mathematics: Analysis and Approaches (AA): 2.3 The graph of a function"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.03
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-3"
description: "Study guide to IB Maths AA 2.3: sketching graphs from given information or a context, copying a GDC graph onto paper, and graphing sums and differences."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This study guide covers section 2.3 of IB Diploma Programme Mathematics: Analysis and Approaches, common to SL and HL. The IB *Mathematics: analysis and approaches guide* (first assessment 2021) asks you to create a sketch from information given or from a context, including transferring a graph from a screen to paper, and to use technology to graph functions, including their sums and differences. The guide also expects you to know the difference between the command terms "draw" and "sketch".

The [straight lines, functions, inverses and quadratics guide](/resources/ib-dp-mathematics-aa-sl-lines-functions-quadratics/) introduces graphs together with key features. This page concentrates on the graphing skill itself: what a full-mark sketch contains, how to build one from a list of facts or a real situation, how to copy a calculator screen faithfully, and how to read the graph of a sum or difference. Key features found with technology are developed further in [2.4 key features of graphs](/resources/ib-dp-mathematics-analysis-and-approaches-2-4/). Afterwards, use the [2.3 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-2-3-revision-notes/) and the [2.3 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-2-3-practice/).

## Draw or sketch?

| Command term | What the examiner expects |
|---|---|
| Draw | An accurate, labelled graph in pencil, to scale, with points plotted correctly and joined by a smooth curve (or a ruled line for a straight line) |
| Sketch | The correct general shape and position, with the relevant features labelled; not necessarily to scale |

In both cases a graph with no labels loses marks, even if its shape is right.

## What every graph should show

- **Axes** labelled with the variables (x and y, or t and h in a context).
- **Intercepts** with both axes, as coordinates or values.
- **Turning points** (maxima and minima), with coordinates where known.
- **Asymptotes** as dashed lines, each labelled with its equation, and the curve approaching but not crossing a vertical asymptote.
- **End points** for a restricted domain: a closed dot for an included end (≤) and an open dot for an excluded end (<).
- **Behaviour at the edges:** does the curve keep rising, level off, or stop?

## Worked example 1: a sketch from given information

A function f has domain −2 ≤ x ≤ 5 with f(−2) = 3, zeros at x = 1 and x = 4, and one turning point, a minimum at (2.5, −2). Also f(5) = 2. Sketch y = f(x).

How to build it:

1. Plot the five known points: (−2, 3), (1, 0), (2.5, −2), (4, 0), (5, 2).
2. Use the single turning point: the curve must fall from (−2, 3) through (1, 0) to the minimum, then rise through (4, 0) to (5, 2). No other bends are allowed.
3. Put closed dots at both end points, because both are included.
4. Label the minimum and both zeros with coordinates.

Two facts follow from the sketch without any formula. The range is −2 ≤ f(x) ≤ 3, because the highest point is the left end, not the right one. The equation f(x) = 2.5 has exactly one solution, on the falling section, because the rising section only reaches 2.

## Worked example 2: a sketch from a context

A cup of tea at 90 °C is left in a room at 20 °C. Sketch its temperature T against time t.

- Start at (0, 90): the domain is t ≥ 0, so there is nothing to the left of the vertical axis.
- The tea cools, so the graph decreases.
- It cools fastest when it is hottest, so the graph is steepest at the start and flattens out.
- It never cools below room temperature: draw a dashed horizontal asymptote T = 20 and keep the curve above it.

A straight line falling to the t-axis would contradict the context twice: the rate would be constant and the temperature would reach 0 °C. Questions about contexts reward shapes that match the physical situation, so explain any feature you are unsure of in a short phrase next to the graph.

## Worked example 3: transferring a graph from a GDC

Sketch y = x e^(−0.5x) for 0 ≤ x ≤ 8.

```
Window: x from 0 to 8, y from −0.2 to 1
Key points from the GDC:
  start          (0, 0)
  maximum        (2, 0.736)
  end            (8, 0.147)
```

On paper, mark these three points first, at sensible positions on axes scaled 0 to 8 and 0 to 1. Then join them with the shape the screen shows: a rise to the maximum, then a long, slow fall that stays above the x-axis. Put closed dots at both ends, because the domain includes 0 and 8.

Common screen-to-paper faults:

- copying the window's corners as if they were part of the graph;
- letting the curve touch the x-axis at the right-hand end, when y is still 0.147;
- drawing the curve beyond x = 8 because the calculator default window was wider.

Write the window you used if the question does not give one; it shows the examiner why your sketch looks as it does.

## Sums and differences of functions

The guide asks you to graph sums and differences with technology. Two ideas make these graphs useful.

**Adding heights.** At each x, the height of y = f(x) + g(x) is f(x) + g(x). For f(x) = 4 − x² and g(x) = 2x, the sum at x = 2 is 0 + 4 = 4. Where g is zero, the sum touches f; where f is zero, it touches g.

**Zeros of a difference are intersections.** The equation f(x) = g(x) is the same as f(x) − g(x) = 0. So the zeros of y = f(x) − g(x) are the x-coordinates of the points where y = f(x) and y = g(x) meet. The sign of the difference tells you which graph is higher.

## Worked example 4: a difference with technology

Let f(x) = 2ˣ and g(x) = x². Graph h(x) = f(x) − g(x) for −2 ≤ x ≤ 5 and use it to compare f and g.

```
Zeros of h:        x = −0.767,  x = 2,  x = 4
Local maximum:     (0.485, 1.16)
Local minimum:     (3.21, −1.05)
h(x) > 0 for −0.767 < x < 2 and 4 < x ≤ 5   →  2ˣ > x² there
h(x) < 0 for −2 ≤ x < −0.767 and 2 < x < 4    →  2ˣ < x² there
```

The values 2 and 4 are exact (2² = 4 = 2², and 2⁴ = 16 = 4²), which you can confirm by substitution. The third zero has no algebraic method, which is why the guide expects technology here; give it to 3 significant figures.

## Common mistakes

- No labels on axes, intercepts or turning points.
- Asymptotes drawn as solid lines, unlabelled, or crossed by the curve.
- Open and closed end points confused, or a restricted-domain graph drawn as if it continued.
- Copying the calculator window rather than the curve, so the sketch ends at the window's edge.
- A context graph whose shape contradicts the situation, such as negative times or a temperature dropping below the room's.
- Reading zeros of f − g as y-values rather than x-values of intersections.

## Exam technique

- **Sketch:** shape and labelled features; one minute of planning saves redrawing.
- **Draw:** use the given scale, plot carefully and join smoothly.
- **Use technology to sketch:** state the window, then mark the GDC's key points on your axes before drawing.
- **Hence solve:** read solutions from the sketch you have just made; say which points you used.
- Give GDC values to 3 significant figures and coordinates in brackets.

## Where to go next

Condense this with the [2.3 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-2-3-revision-notes/), then try the [2.3 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-2-3-practice/). The [Functions strand overview](/resources/ib-dp-mathematics-aa-functions/) shows how graphing supports the rest of the topic.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section SL 2.3.
