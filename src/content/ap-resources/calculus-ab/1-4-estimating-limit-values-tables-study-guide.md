---
resourceId: "mb-ap-calcab-1.4-study-guide"
title: "Estimating Limit Values from Tables: Study Guide (Calculus AB 1.4)"
description: "Learn how to read a table of values to estimate a limit, spot one-sided and non-existent limits, choose good x values and avoid the ways a table can mislead."
course: "calculus-ab"
unit: 1
topics: ["1.4"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Limit notation, including one-sided limits (Topic 1.2)"
  - "Estimating limits from a graph (Topic 1.3)"
  - "Using a calculator table or evaluating a function at a given x value"
prerequisiteResources: ["mb-ap-calcab-1.3-study-guide"]
learningObjectives:
  - "Estimate a limit from a table by reading the trend as x approaches a value from each side"
  - "Estimate one-sided limits from a table and decide whether the two-sided limit exists"
  - "Recognise table patterns that suggest a limit does not exist: different sides, unbounded values or oscillation"
  - "Build a useful table with a calculator and state how many decimal places an estimate can be trusted to"
  - "Explain why a table suggests a limit but cannot prove it"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "foundation"
calculator: "graphing"
calculatorNote: "A calculator table feature is helpful but not required to read a given table. Use radian mode. Values here were computed to high precision and rounded to 4 decimal places."
related: ["mb-ap-calcab-1.4-revision-notes", "mb-ap-calcab-1.4-practice", "mb-ap-calcab-1.4-checklist"]
next: "mb-ap-calcab-1.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "To estimate lim (x → c) f(x) from a table, look at f(x) for x values closer and closer to c from both sides. Ignore f(c) itself."
  - "If the left-side values and the right-side values head towards the same number, that number is your estimate of the limit."
  - "If the two sides head to different numbers, grow without bound, or keep jumping around, the table suggests the limit does not exist."
  - "A table is evidence, not proof. Report only the decimal places on which the values from both sides agree."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 1.4 is common content, so the same page serves AB and BC students."
  - question: "Do I need a calculator for table questions?"
    answer: "Not when the table is given to you; you only read it. Building your own table is quicker with a calculator's table feature, which is allowed only on the calculator sections of the exam."
  - question: "What if the table includes x = c itself?"
    answer: "Ignore that entry when you estimate the limit. A limit depends on values near c, not on the value at c."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so limits are written in a compact form:

- **lim (x → 2) f(x)** means "the limit as x approaches 2 of f(x)".
- **lim (x → 2⁻) f(x)** is the limit from the **left**: x approaches 2 through values less than 2.
- **lim (x → 2⁺) f(x)** is the limit from the **right**: x approaches 2 through values greater than 2.

On paper, write "x → 2" under "lim" and the small − or + as a superscript on the 2.

## What a table can tell you

In Topic 1.3 you estimated limits by looking at where a graph was heading. A table does the same job with numbers instead of a picture. You see some x values near c and the matching values of f(x). Then you ask: **as x gets closer to c, what number are the f(x) values getting closer to?**

A good table for a limit as x → c has three features:

1. It has x values on **both sides** of c (for a two-sided limit).
2. The x values get **closer and closer** to c, for example c ± 0.1, c ± 0.01, c ± 0.001.
3. It does **not need** the value at x = c. If f(c) appears, ignore it for the limit.

The third point matters because the definition of a limit only looks at x values near c, never at c itself. Often f(c) does not even exist, as in the 0/0 limits you will meet in Topic 1.6.

### How to read a table, step by step

1. **Read the left side** (x < c), moving towards c. Write down the number the values seem to approach. This estimates the left-hand limit.
2. **Read the right side** (x > c), moving towards c. This estimates the right-hand limit.
3. **Compare.** If both sides approach the same number L, estimate lim (x → c) f(x) ≈ L. If not, the two-sided limit does not exist.
4. **Decide how precise to be.** Look at the values closest to c on each side. Keep only the decimal places on which they agree.

<figure>
<svg viewBox="0 0 520 250" role="img" aria-labelledby="tbl-title tbl-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="tbl-title">Reading a table of values from both sides towards x = 2</title>
<desc id="tbl-desc">A table with two rows. The top row lists x values 1.9, 1.99, 1.999, then a dashed empty cell labelled x = 2 not needed, then 2.001, 2.01, 2.1. The bottom row lists f(x) values 9.3637, 9.8334, 9.8821, a dashed empty cell, 9.8929, 9.9420, 10.4511. An arrow labelled "from the left" points right along the left three columns towards the centre. An arrow labelled "from the right" points left along the right three columns towards the centre. Below the table, text reads: both sides approach about 9.89.</desc>
<rect x="0" y="0" width="520" height="250" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="1.5" fill="none">
<rect x="20" y="60" width="480" height="80"/>
<line x1="20" y1="100" x2="500" y2="100"/>
<line x1="80" y1="60" x2="80" y2="140"/>
<line x1="140" y1="60" x2="140" y2="140"/>
<line x1="200" y1="60" x2="200" y2="140"/>
<line x1="260" y1="60" x2="260" y2="140"/>
<line x1="320" y1="60" x2="320" y2="140"/>
<line x1="380" y1="60" x2="380" y2="140"/>
<line x1="440" y1="60" x2="440" y2="140"/>
</g>
<rect x="261" y="61" width="58" height="78" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 3"/>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="50" y="85" font-weight="bold">x</text>
<text x="50" y="125" font-weight="bold">f(x)</text>
<text x="110" y="85">1.9</text><text x="170" y="85">1.99</text><text x="230" y="85">1.999</text>
<text x="290" y="80" font-size="11">x = 2</text><text x="290" y="94" font-size="11">not needed</text>
<text x="350" y="85">2.001</text><text x="410" y="85">2.01</text><text x="470" y="85">2.1</text>
<text x="110" y="125">9.3637</text><text x="170" y="125">9.8334</text><text x="230" y="125">9.8821</text>
<text x="350" y="125">9.8929</text><text x="410" y="125">9.9420</text><text x="470" y="125">10.4511</text>
</g>
<g stroke="#1d2b44" stroke-width="2" fill="#1d2b44">
<line x1="90" y1="35" x2="245" y2="35"/>
<polygon points="255,35 243,29 243,41"/>
<line x1="490" y1="35" x2="335" y2="35"/>
<polygon points="325,35 337,29 337,41"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="168" y="25">from the left (x &lt; 2)</text>
<text x="412" y="25">from the right (x &gt; 2)</text>
</g>
<g stroke="#1d2b44" stroke-width="1.5" fill="#1d2b44">
<line x1="230" y1="150" x2="270" y2="185"/>
<polygon points="276,190 263,186 270,178"/>
<line x1="350" y1="150" x2="310" y2="185"/>
<polygon points="304,190 310,178 317,186"/>
</g>
<text x="290" y="215" font-size="14" fill="#1d2b44" text-anchor="middle" font-weight="bold">both sides approach about 9.89</text>
<text x="290" y="235" font-size="12" fill="#1d2b44" text-anchor="middle">estimate: lim (x → 2) f(x) ≈ 9.89</text>
</svg>
<figcaption>Figure 1. Read a table from the outside in. The arrows show the direction of reading on each side. The middle cell is empty on purpose: the limit as x → 2 does not use f(2). The values come from f(x) = (3ˣ − 9)/(x − 2) in Worked example 1.</figcaption>
</figure>

## One-sided limits from a table

Sometimes you only need one side. For lim (x → c⁻) f(x), read only the rows with x < c. For lim (x → c⁺) f(x), read only the rows with x > c.

The two-sided limit exists **only if** both one-sided limits exist and are equal. A table lets you check this directly: estimate each side separately, then compare.

## When a table suggests the limit does not exist

Topic 1.3 showed three ways a limit can fail to exist. Each one has a recognisable pattern in a table.

| Pattern in the table | What it suggests | Example near c |
|---|---|---|
| Left values approach one number, right values approach a different number | One-sided limits differ, so the two-sided limit does not exist | Worked example 2 |
| Values grow larger and larger in size (100, 10 000, 1 000 000, …) | f is unbounded near c; there is no finite limit | 1/(x − 3)² near x = 3 |
| Values keep jumping between different numbers however close x gets | f oscillates; the limit does not exist | sin(π/x) near x = 0 (Worked example 3) |

For the unbounded example, 1/(x − 3)² gives 100 at x = 2.9 and x = 3.1, then 10 000 at x = 2.99 and x = 3.01, then 1 000 000 at x = 2.999 and x = 3.001. The values do not settle on any number. You would describe this as f(x) increasing without bound, and you may write lim (x → 3) 1/(x − 3)² = ∞. Writing ∞ describes **how** the limit fails to exist; ∞ is not a real number.

## Building your own table

On a calculator section you may need to make your own table. A reliable recipe:

1. Use x = c − 0.1, c − 0.01, c − 0.001 and c + 0.001, c + 0.01, c + 0.1.
2. Set the calculator to **radian** mode if the function involves trig.
3. Record enough decimal places to see the trend (4 is usually enough).
4. If the closest values do not yet agree to the precision you need, go one step closer (c ± 0.0001).

**Do not go absurdly close.** Calculators and computers store numbers to a limited number of digits. With x extremely close to c, rounding errors take over. For example, with f(x) = (3ˣ − 9)/(x − 2) and x = 2 + 10⁻¹⁵, standard computer arithmetic (about 16 significant figures) returns exactly 10, which is wrong. Steps down to about c ± 0.0001 are safe for the functions in this course.

## Worked example 1: estimating a limit you cannot yet find exactly

**Question.** The table gives values of f(x) = (3ˣ − 9)/(x − 2), rounded to 4 decimal places. Estimate lim (x → 2) f(x).

| x | 1.9 | 1.99 | 1.999 | 2.001 | 2.01 | 2.1 |
|---|---|---|---|---|---|---|
| f(x) | 9.3637 | 9.8334 | 9.8821 | 9.8929 | 9.9420 | 10.4511 |

1. **Why a table?** Substituting x = 2 gives (9 − 9)/0 = 0/0, which does not decide the limit. None of the algebra in Topic 1.6 removes the problem here, so a numerical estimate is the sensible approach.
2. **Read from the left.** 9.3637, 9.8334, 9.8821: the values increase and the increases shrink (0.47, then 0.05). They seem to be levelling off a little below 9.89.
3. **Read from the right.** 10.4511, 9.9420, 9.8929: the values decrease, again by shrinking amounts. They seem to level off a little above 9.88.
4. **Compare.** Both sides close in on the same number, somewhere between 9.8821 and 9.8929.
5. **Decide the precision.** The two closest values, 9.8821 and 9.8929, both round to **9.9** to 1 decimal place. To 2 decimal places they give 9.88 and 9.89, which do not agree. So from this table the safe estimate is 9.9.
6. **Go closer for more precision.** At x = 1.9999 the value is 9.8870, and at x = 2.0001 it is 9.8881. Both round to 9.89.

**Answer.** lim (x → 2) f(x) ≈ **9.9** from the given table, or ≈ **9.89** after adding x = 1.9999 and x = 2.0001.

**Interpretation.** The graph of f has a hole at x = 2, at a height of about 9.89. (Background only: once you can differentiate exponential functions, later in the course, you will be able to show that the exact value is 9 ln 3 ≈ 9.8875. This topic only asks for estimates.)

## Worked example 2: two sides that disagree

**Question.** Let g(x) = (x² − 1)/|x − 1|. Use a table to estimate lim (x → 1⁻) g(x), lim (x → 1⁺) g(x) and, if it exists, lim (x → 1) g(x).

| x | 0.9 | 0.99 | 0.999 | 1.001 | 1.01 | 1.1 |
|---|---|---|---|---|---|---|
| g(x) | −1.9 | −1.99 | −1.999 | 2.001 | 2.01 | 2.1 |

1. **Check a value.** At x = 0.9: (0.81 − 1)/|−0.1| = −0.19/0.1 = −1.9. The table is consistent with the formula.
2. **Left side.** −1.9, −1.99, −1.999 approach **−2**. So lim (x → 1⁻) g(x) ≈ −2.
3. **Right side.** 2.1, 2.01, 2.001 approach **2**. So lim (x → 1⁺) g(x) ≈ 2.
4. **Compare.** The one-sided values approach different numbers, −2 and 2.

**Answer.** Left-hand limit ≈ −2, right-hand limit ≈ 2, so **lim (x → 1) g(x) does not exist**.

**Why it happens.** For x > 1, |x − 1| = x − 1, so g(x) = x + 1, which is near 2. For x < 1, |x − 1| = −(x − 1), so g(x) = −(x + 1), which is near −2. The graph has a jump at x = 1. The table showed this before any algebra.

**A common wrong answer** is 0, the average of −2 and 2. A limit is never found by averaging the two sides.

## Worked example 3: a table that misleads

**Question.** A student wants lim (x → 0) sin(π/x). She makes this table (radian mode):

| x | −0.1 | −0.01 | −0.001 | 0.001 | 0.01 | 0.1 |
|---|---|---|---|---|---|---|
| sin(π/x) | 0 | 0 | 0 | 0 | 0 | 0 |

She concludes that the limit is 0. Is she right?

1. **Check her values.** At x = 0.1, π/x = 10π, and sin(10π) = 0. At x = 0.01, π/x = 100π, and sin(100π) = 0. Every x she chose makes π/x a whole multiple of π, so every value is 0. (A calculator may show a tiny number such as −3 × 10⁻¹³ instead of 0. That is rounding error.)
2. **Try other x values just as close to 0.** At x = 2/21 ≈ 0.095, π/x = 10.5π and sin(10.5π) = 1. At x = 2/23 ≈ 0.087, π/x = 11.5π and sin(11.5π) = −1. Closer still, x = 2/201 ≈ 0.00995 gives 1 and x = 2/203 ≈ 0.00985 gives −1.
3. **Interpret.** However close you get to 0, there are x values giving 1 and x values giving −1. The function oscillates between −1 and 1 and never settles.

**Answer.** No. **lim (x → 0) sin(π/x) does not exist.** Her table looked convincing only because of the particular x values she chose.

**Lesson.** A table shows a sample. It can hide behaviour between the x values you picked. If a pattern looks suspiciously perfect, try a few "untidy" x values, or look at a graph as well.

## Common misconceptions

- **"The limit is the value in the table closest to c."** That value is only an approximation. Report the number the values are approaching, to a sensible precision.
- **"The limit is f(c)."** If the table shows f(c), ignore it. A limit depends only on nearby values. In many limit questions f(c) is not even defined.
- **Reading only one side.** A two-sided limit needs both sides. The left side alone gives the left-hand limit, nothing more.
- **Averaging different one-sided values.** If the left approaches −2 and the right approaches 2, the limit does not exist. It is not 0.
- **Claiming more decimal places than the table supports.** Keep only the digits on which the closest values from both sides agree.
- **"A table proves the limit."** A table suggests a value. It cannot rule out strange behaviour between or beyond the sampled points (Worked example 3).
- **"Huge values mean the limit is a huge number."** Values such as 1 000 000 that keep growing mean the function is unbounded, so there is no finite limit.
- **Using degree mode.** Trig limits in calculus use radians. Degree mode gives a completely different table.

## Where this leads

Tables are one of the three ways to represent a limit, alongside graphs ([Topic 1.3](/advanced-course-resources/calculus-ab/1-3-estimating-limit-values-graphs-study-guide/)) and algebra. Next, [Topic 1.5](/advanced-course-resources/calculus-ab/1-5-determining-limits-algebraic-properties-limits-study-guide/) shows how to find limits **exactly** using the properties of limits, and Topic 1.6 handles 0/0 forms by algebra. From then on, a table becomes a quick way to check an exact answer. In Unit 2, estimating a derivative from a table of values uses the same "approach from both sides" thinking. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/1-4-estimating-limit-values-tables-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/1-4-estimating-limit-values-tables-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/1-4-estimating-limit-values-tables-checklist/) to consolidate.
