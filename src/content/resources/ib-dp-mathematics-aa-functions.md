---
title: "IB DP Mathematics: Analysis and Approaches -- Functions Strand"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
description: "Study guide to the Functions strand of IB DP Mathematics: Analysis and Approaches: notation, composite and inverse functions, transformations and log pairs."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-09-06
featured: false
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by muhammad-ghazali-siddiqui on 2026-09-29; 2026-11-08: reviewed by muhammad-ghazali-siddiqui."
---

This guide covers the **Functions** strand, which carries 21 hours at
SL and 32 at HL for IB Diploma Programme Mathematics: Analysis and
Approaches, first assessment 2021. The [full syllabus
guide](/resources/ib-dp-mathematics-analysis-and-approaches-syllabus-guide/)
positions Functions deliberately before
[Calculus](/resources/ib-dp-mathematics-aa-calculus/) (28 hours SL / 55
hours HL) in the course structure, since nearly every calculus
technique assumes fluent, confident work with functions first.

## Where this fits in the syllabus

Differentiation and integration are, in essence, operations performed
*on* functions. A student who is shaky on transforming, graphing or
solving equations involving a function will find that weakness
resurfaces every time a Calculus question wraps a function in a
derivative or integral. Treating Functions purely as a stand-alone
topic, rather than as the toolkit the rest of the SL/HL course depends
on, is the single most common structural mistake in how students
sequence their own revision.

## Syllabus coverage

**IB DP MATHEMATICS: ANALYSIS AND APPROACHES -- FUNCTIONS**

- **The concept of a function** -- domain, range, and function
notation $f(x)$, including composite functions $f \circ g(x)$ and the
conditions needed for an inverse function $f^{-1}(x)$ to exist
- **Graphing and transforming functions** -- translations, stretches
and reflections applied to a base graph, and reading key features
(intercepts, turning points, asymptotes) directly from a graph or its
equation
- **Solving equations involving functions** -- both algebraically and
graphically, using technology to find intersections, since Analysis
and Approaches expects fluency in both routes
- **Types of function** most commonly assessed -- linear, quadratic,
exponential, logarithmic, and rational functions, each with a
recognisable graph shape and characteristic transformations

## Transformations at a glance

| Transformation | Effect on $y = f(x)$ |
|---|---|
| $y = f(x) + k$ | Vertical translation by $k$ |
| $y = f(x - a)$ | Horizontal translation by $a$ |
| $y = k f(x)$ | Vertical stretch, scale factor $k$ |
| $y = f(kx)$ | Horizontal stretch, scale factor $1/k$ |
| $y = -f(x)$ | Reflection in the $x$-axis |
| $y = f(-x)$ | Reflection in the $y$-axis |

Apply transformations to the **key features** of the base graph
(intercepts, turning points, asymptotes) directly, rather than
replotting the whole curve from scratch every time -- this is far
faster under exam time pressure and less error-prone for multi-step
transformations.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-functions--02-translations.webp" width="900" height="860" alt="The parabola y = x squared and two copies. One is moved up 2 units, with vertex (0, 2), for y = f(x) + 2. The other is moved 3 units right, with vertex (3, 0), for y = f(x - 3). Arrows run from the original vertex to each new vertex." loading="lazy">
  <figcaption>f(x) + k moves a graph up and f(x − a) moves it right, because the minus sign inside the bracket works the opposite way to how it looks.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-functions--03-stretches.webp" width="900" height="880" alt="Graph of f(x) = x squared minus 4 with two stretched versions. 2f(x) keeps the roots at -2 and 2 but doubles the y-values, so the y-intercept moves from -4 to -8. f(2x) squeezes towards the y-axis, moving the roots to -1 and 1 while the y-intercept stays at -4." loading="lazy">
  <figcaption>k f(x) stretches vertically by factor k; f(kx) stretches horizontally by factor 1/k.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-functions--04-reflections.webp" width="900" height="880" alt="A parabola with turning point (1, 1) and its two reflections. Negating the output, y = -f(x), gives an upside-down parabola with turning point (1, -1), a reflection in the x-axis. Negating the input, y = f(-x), gives a parabola with turning point (-1, 1), a reflection in the y-axis." loading="lazy">
  <figcaption>−f(x) reflects a graph in the x-axis and f(−x) reflects it in the y-axis; reflect the key points to get the new graph.</figcaption>
</figure>


## Worked example: composite and inverse functions

Given $f(x) = 2x + 3$ and $g(x) = x^2$, find $f \circ g(x)$ and
explain why $f^{-1}(x)$ exists but a general inverse of $g(x)$ over all
real $x$ does not. Substituting $g(x)$ into $f$ gives
$f(g(x)) = f(x^2) = 2x^2 + 3$. $f$ has an inverse because it is a
strictly increasing linear function -- one-to-one over its whole
domain -- so each output corresponds to exactly one input, which is
the condition an inverse function requires. $g(x) = x^2$ does not, in
general, have an inverse over all real numbers, because it is not
one-to-one: both $x = 2$ and $x = -2$ give $g(x) = 4$, so no single
inverse function can recover the original input without restricting
the domain first. This one-to-one reasoning -- not just mechanically
"swapping x and y" -- is what Analysis and Approaches mark schemes
reward when a question asks *why* an inverse does or does not exist.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-functions--05-composite-order.webp" width="900" height="910" alt="A flow diagram shows x going through g (squaring) and then through f (double and add 3), giving 2x squared plus 3. A graph shows y = x squared and y = 2x squared plus 3. At x = 2, g gives 4 and f of g gives 11; at x = -2 the same values appear." loading="lazy">
  <figcaption>In f(g(x)) the inner function g acts first; here f(g(x)) = 2x² + 3.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-functions--06-one-to-one-test.webp" width="900" height="1010" alt="Two graphs with a horizontal line. For g(x) = x squared, the line y = 4 cuts the curve at x = -2 and x = 2, so g is many-to-one and has no inverse over all real x. For f(x) = 2x + 3 the line y = 5 cuts once, at x = 1, so f is one-to-one and has an inverse." loading="lazy">
  <figcaption>A function has an inverse only if it is one-to-one: every horizontal line meets its graph at most once.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-functions--07-inverse-reflection.webp" width="900" height="1000" alt="The line y = 2x + 3 and its inverse y = (x - 3)/2 on equal axes with the dashed line y = x. The two lines are mirror images in y = x. The point (1, 5) on f maps to (5, 1) on the inverse, and the segment joining them crosses y = x at (3, 3)." loading="lazy">
  <figcaption>The graph of f⁻¹ is the graph of f reflected in the line y = x.</figcaption>
</figure>


## Logarithmic and exponential pairs

Exponential and logarithmic functions are inverses of each other, and
this strand expects fluent movement between the two forms: $y = a^x$
rewritten as $x = \log_a y$, and the graph of a logarithmic function
recognised as the reflection of the corresponding exponential graph in
the line $y = x$ -- the general graphical signature of any function and
its inverse. Questions combining exponential growth/decay models with
logarithms to solve for an unknown exponent are common, and rely on
this inverse relationship rather than a separate memorised technique.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-functions--08-exp-log-inverse.webp" width="900" height="990" alt="Graphs of y = 2 to the x and y = log base 2 of x with the dashed line y = x. They mirror each other in y = x. The point (3, 8) on the exponential reflects to (8, 3) on the logarithm, and (0, 1) to (1, 0). The exponential has horizontal asymptote y = 0 and the logarithm has vertical asymptote x = 0." loading="lazy">
  <figcaption>y = aˣ and y = logₐ x are inverses, so their graphs are reflections in y = x.</figcaption>
</figure>


## How to approach it

Confirm a function is one-to-one before finding its inverse, rather
than swapping variables by default -- examiners specifically reward
this justification, not just the mechanical swap. Practise sketching
each transformation from the table above onto a simple base graph such
as $y = x^2$, applying it to key features rather than replotting from
scratch. Convert confidently between exponential and logarithmic forms
of the same relationship, since this fluency underpins a recurring
question type. Cross-check an algebraic solution to an equation
involving functions against a graphical solution using technology,
since Paper 2 allows this directly and a mismatch between the two is a
useful signal that an error has been made somewhere in the working.
Because Functions underpins Calculus so directly, treat weak function
fluency as a Calculus-readiness problem, not just a Functions-topic
problem, and revise the two strands together rather than in strict
isolation.

## Exam traps

Swapping $x$ and $y$ mechanically to find an inverse without first
checking the function is one-to-one over the domain given. Applying a
horizontal transformation ($f(x-a)$ or $f(kx)$) in the wrong direction
relative to the sign given -- $f(x - a)$ shifts right, not left, a
common source of sign errors. Reading off asymptotes from a
transformed graph without checking how the transformation moved them.
Treating a graphical solution (technology) and an algebraic solution as
interchangeable without checking both give a consistent answer, since
Paper 2 explicitly allows technology for exactly this cross-check.

## Frequently asked questions

**Why does Functions come before Calculus in IB Maths AA?**
Differentiation and integration are operations performed on functions, so weaknesses in transforming, graphing or solving equations with functions resurface throughout Calculus in IB DP Mathematics: Analysis and Approaches.

**Why does g(x) = x² have no inverse over all real numbers?**
Because it is not one-to-one: two different inputs, such as 2 and −2, give the same output. Restricting the domain, for example to x ≥ 0, makes an inverse possible.

**What does y = −f(x) do to a graph?**
y = −f(x) reflects the graph in the x-axis, while y = f(−x) reflects it in the y-axis.

**What is a composite function?**
A composite function applies one function to the output of another. For example, with f(x) = 2x + 3 and g(x) = x², f(g(x)) = 2x² + 3.

## Official syllabus

International Baccalaureate Organization, *Diploma Programme Subject
Brief -- Mathematics: Analysis and Approaches*, first assessment 2021
-- the same source already cited by the [full syllabus
guide](/resources/ib-dp-mathematics-analysis-and-approaches-syllabus-guide/)
and the
[revision notes](/resources/ib-dp-mathematics-aa-functions-revision-notes/)
already on the site. Verified 2026-09-06.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-functions--01-domain-and-range.webp" width="900" height="810" alt="Graph of f(x) = square root of (x + 2) between x = -2 and x = 7. The allowed inputs, the domain, are marked on the x-axis from -2 to 7, and the outputs, the range, on the y-axis from 0 to 3. Dashed lines from the end point (7, 3) show where the range ends." loading="lazy">
  <figcaption>The domain is the set of inputs, the range the set of outputs, shown here for f(x) = √(x + 2).</figcaption>
</figure>

