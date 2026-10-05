---
resourceId: "mb-ap-calcab-7.3-study-guide"
title: "Sketching Slope Fields: Study Guide (Calculus AB 7.3)"
description: "Learn what a slope field shows, how to draw one by hand from a differential equation, and how to read its patterns to match equations and fields."
course: "calculus-ab"
unit: 7
topics: ["7.3"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Differential equations as statements about a derivative (Topic 7.1)"
  - "Checking that a function is a solution of a differential equation (Topic 7.2)"
  - "The derivative as the slope of a tangent line (Unit 2)"
  - "Gradients of straight lines: positive, negative, zero and steep"
prerequisiteResources: ["mb-ap-calcab-7.2-study-guide"]
learningObjectives:
  - "Explain what each short segment in a slope field represents"
  - "Draw a slope field by hand at a given set of points, using a table of slopes"
  - "Recognise the patterns produced when dy/dx depends only on x, only on y, or on both"
  - "Find where the segments are horizontal and where the slopes are positive or negative"
  - "Match a differential equation to its slope field by testing features and points"
skills: ["2", "1"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every slope field here without a calculator. The slopes are simple to compute by hand, and the drawing is done on paper."
related: ["mb-ap-calcab-7.3-revision-notes", "mb-ap-calcab-7.3-practice", "mb-ap-calcab-7.3-checklist"]
next: "mb-ap-calcab-7.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "A slope field draws, at each point of a grid, a short segment whose slope is the value of dy/dx at that point."
  - "Each segment is a tiny piece of the tangent line to the solution curve that passes through that point."
  - "To sketch one by hand: make a table of dy/dx at the given points, then draw short segments centred on the points with those slopes."
  - "If dy/dx depends only on x, every column of segments is identical. If it depends only on y, every row is identical."
  - "Segments are horizontal wherever dy/dx = 0. Use these lines, the signs of the slopes and one or two test points to match an equation to a field."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 7.3 is common content, so the same page serves AB and BC students."
  - question: "Do I need to solve the differential equation to draw its slope field?"
    answer: "No. You only substitute coordinates into dy/dx. That is the point of a slope field: it shows how solutions behave even before (or without) solving the equation."
  - question: "How long should each segment be?"
    answer: "Short, all about the same length, and centred on the point. Long lines run into neighbouring points and suggest that the slope stays constant along them, which it usually does not."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

A **differential equation** gives the derivative of an unknown function. In this unit it usually has the form **dy/dx = (an expression in x and y)**, for example dy/dx = x − 2y. You may also see y′ for dy/dx, or other letters such as dH/dt when the variables have a meaning. Coordinates are written (x, y), so the first number is always the x-value.

## What a slope field shows

Take dy/dx = x − 2y. You do not know the solution function y yet. But the equation still tells you something useful at every point. Suppose a solution curve passes through the point (3, 1). Its slope there must be

**dy/dx = 3 − 2(1) = 1**

So the curve crosses (3, 1) climbing at 45°. You can draw a short segment through (3, 1) with slope 1 to record that fact.

Do the same at many points and you get a **slope field** (also called a direction field). It is a picture of the differential equation, built on a finite grid of points in the plane.

- Each segment is a **small piece of a tangent line**. It shows the direction a solution curve would travel if it passed through that point.
- The segments do not show the solution itself. They are like wind arrows on a weather map: each one gives a direction, and a solution curve is a path that follows them.
- Because a solution curve must have the slope given by the equation at every point it passes through, the field shows how the whole family of solutions behaves. That is why a slope field is a way to **estimate solutions** without solving anything.

Notice what you need to make one: only substitution. No integration is involved.

### What the angles look like

Draw every segment the same length and centred on its point. Only the tilt carries information.

| Slope | How the segment looks |
|---|---|
| 0 | Horizontal |
| 1/2 | Gentle rise, about 27° above horizontal |
| 1 | Rises at 45° |
| 2 | Steeper, about 63° |
| 3 | Very steep, about 72° |
| −1 | Falls at 45° (going left to right) |

You do not need a protractor. Just keep the relative steepness consistent: a slope of 2 must look steeper than a slope of 1, and a slope of −1 must mirror a slope of 1. These angles assume the same scale on both axes.

## How to sketch a slope field by hand

Questions usually give you the points, often a small grid such as nine or fifteen dots on a set of axes. Work in three steps.

1. **Make a table.** List the points and substitute each one into dy/dx. Keep exact values such as 1/2.
2. **Look for structure first.** Before drawing, see which rows, columns or lines share the same slope. This saves time and catches arithmetic slips.
3. **Draw.** At each point, draw a short segment centred on the point with the computed slope. Horizontal for 0, rising to the right for positive, falling to the right for negative, steeper for larger size.

The table is your working. If a question asks you to sketch a slope field, the segments are what is assessed, but the table is how you make sure they are right.

## Worked example 1: drawing a slope field from a table

**Question.** Sketch the slope field for **dy/dx = x(y − 1)/2** at the fifteen points with x = −2, −1, 0, 1, 2 and y = 0, 1, 2.

1. **Look for structure.**
   - If x = 0, then dy/dx = 0 for every y. So the whole column x = 0 is horizontal.
   - If y = 1, then y − 1 = 0, so dy/dx = 0 for every x. The whole row y = 1 is horizontal.
2. **Make the table.** Substitute each remaining point. For example, at (2, 0): dy/dx = 2(0 − 1)/2 = −1. At (−1, 2): dy/dx = (−1)(2 − 1)/2 = −1/2.

| | x = −2 | x = −1 | x = 0 | x = 1 | x = 2 |
|---|---|---|---|---|---|
| **y = 2** | −1 | −1/2 | 0 | 1/2 | 1 |
| **y = 1** | 0 | 0 | 0 | 0 | 0 |
| **y = 0** | 1 | 1/2 | 0 | −1/2 | −1 |

3. **Draw the segments.** Each segment is centred on its point. In the row y = 2, the slopes go from falling at 45° on the left, through gentle falling, flat, gentle rising, to rising at 45° on the right. The row y = 0 is the mirror image of that pattern.

<figure>
<svg viewBox="0 0 424 264" role="img" aria-labelledby="sf73a-title sf73a-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sf73a-title">Slope field for dy/dx = x(y − 1)/2 at fifteen points</title>
<desc id="sf73a-desc">Fifteen short segments at x = −2, −1, 0, 1, 2 and y = 0, 1, 2. Every segment in the row y = 1 and every segment in the column x = 0 is horizontal. In the row y = 2 the slopes are −1, −1/2, 0, 1/2 and 1 from left to right, so segments fall on the left and rise on the right. In the row y = 0 the slopes are 1, 1/2, 0, −1/2 and −1, so segments rise on the left and fall on the right.</desc>
<rect x="0" y="0" width="424" height="264" fill="#ffffff"/>
<defs><clipPath id="sf73a-clip"><rect x="44" y="24" width="350" height="210"/></clipPath></defs>
<line x1="44" y1="199" x2="394" y2="199" stroke="#8a94a6" stroke-width="1"/>
<line x1="219" y1="234" x2="219" y2="24" stroke="#8a94a6" stroke-width="1"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="79" y="252">−2</text>
<text x="149" y="252">−1</text>
<text x="219" y="252">0</text>
<text x="289" y="252">1</text>
<text x="359" y="252">2</text>
<text x="408" y="252">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="36" y="203">0</text>
<text x="36" y="133">1</text>
<text x="36" y="63">2</text>
<text x="36" y="16">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1.8" stroke-linecap="round">
<line x1="63.7" y1="214.3" x2="94.3" y2="183.7"/>
<line x1="57.3" y1="129" x2="100.7" y2="129"/>
<line x1="63.7" y1="43.7" x2="94.3" y2="74.3"/>
<line x1="129.6" y1="208.7" x2="168.4" y2="189.3"/>
<line x1="127.3" y1="129" x2="170.7" y2="129"/>
<line x1="129.6" y1="49.3" x2="168.4" y2="68.7"/>
<line x1="197.3" y1="199" x2="240.7" y2="199"/>
<line x1="197.3" y1="129" x2="240.7" y2="129"/>
<line x1="197.3" y1="59" x2="240.7" y2="59"/>
<line x1="269.6" y1="189.3" x2="308.4" y2="208.7"/>
<line x1="267.3" y1="129" x2="310.7" y2="129"/>
<line x1="269.6" y1="68.7" x2="308.4" y2="49.3"/>
<line x1="343.7" y1="183.7" x2="374.3" y2="214.3"/>
<line x1="337.3" y1="129" x2="380.7" y2="129"/>
<line x1="343.7" y1="74.3" x2="374.3" y2="43.7"/>
</g>
</svg>
<figcaption>Figure 1. The completed slope field for dy/dx = x(y − 1)/2. The row y = 1 and the column x = 0 are horizontal. Above y = 1 segments rise for x &gt; 0 and fall for x &lt; 0; below y = 1 the pattern is reversed. Axes are unitless and use equal scales.</figcaption>
</figure>

**Check by signs.** The sign of x(y − 1) tells you where segments rise and fall. Above y = 1 (so y − 1 > 0), the sign matches the sign of x: falling on the left, rising on the right. Below y = 1 it is the other way round. The table agrees.

**Interpretation.** Any solution curve that meets the line y = 1 meets it travelling horizontally, and the same is true where a solution crosses the y-axis.

## Patterns that let you read a field quickly

Most fields you meet fall into one of three types. Recognising the type is the fastest way to match an equation to a picture.

| If dy/dx depends on... | What you see | Example |
|---|---|---|
| **x only** | Every vertical **column** is identical: all segments directly above each other are parallel. | dy/dx = sin x: horizontal along x = 0 and x = π, slope 1 along x = π/2 |
| **y only** | Every horizontal **row** is identical: all segments side by side are parallel. | dy/dx = y/2: horizontal along y = 0, slope 1 along y = 2, slope −1 along y = −2 |
| **x and y** | Neither rows nor columns repeat. Look for the curve where dy/dx = 0. | dy/dx = x(y − 1)/2 from Worked example 1 |

Four more features to test:

- **Zero slopes.** Solve dy/dx = 0. The solutions are lines or curves in the plane along which every segment is horizontal. For dy/dx = x − 2y this is the line y = x/2.
- **Signs.** Where dy/dx > 0, segments rise to the right; where dy/dx < 0, they fall. The zero-slope curves usually separate these regions.
- **Size.** Where |dy/dx| is large, segments are steep. For dy/dx = 1 − y², the segments are flat along y = ±1 and get steeper the further you go above y = 1 or below y = −1.
- **Test points.** Pick one or two easy points, such as (0, 0) or (1, 0), and compare the computed slope with the picture. One clear mismatch rules an equation out.

## Worked example 2: matching an equation to a field

**Question.** The slope field below is drawn at the points with x and y each going from −2 to 2 in steps of 0.5. Which differential equation does it show?

- (A) dy/dx = 1 − x²
- (B) dy/dx = 1 − y²
- (C) dy/dx = y² − 1
- (D) dy/dx = 1 − xy

<figure>
<svg viewBox="0 0 362 342" role="img" aria-labelledby="sf73b-title sf73b-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sf73b-title">Slope field to be matched to an equation</title>
<desc id="sf73b-desc">A grid of 81 short segments for x and y from −2 to 2 in steps of 0.5. Every segment in the same horizontal row has the same slope. The rows y = 1 and y = −1 are horizontal. The row y = 0 rises at 45 degrees. Rows between y = −1 and y = 1 rise; rows above y = 1 and below y = −1 fall, and they fall more steeply further from the x-axis, most steeply at y = 2 and y = −2.</desc>
<rect x="0" y="0" width="362" height="342" fill="#ffffff"/>
<defs><clipPath id="sf73b-clip"><rect x="44" y="24" width="288" height="288"/></clipPath></defs>
<line x1="44" y1="168" x2="332" y2="168" stroke="#8a94a6" stroke-width="1"/>
<line x1="188" y1="312" x2="188" y2="24" stroke="#8a94a6" stroke-width="1"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="330">−2</text>
<text x="124" y="330">−1</text>
<text x="188" y="330">0</text>
<text x="252" y="330">1</text>
<text x="316" y="330">2</text>
<text x="346" y="330">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="36" y="300">−2</text>
<text x="36" y="236">−1</text>
<text x="36" y="172">0</text>
<text x="36" y="108">1</text>
<text x="36" y="44">2</text>
<text x="36" y="16">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1.8" stroke-linecap="round">
<line x1="56.9" y1="286.6" x2="63.1" y2="305.4"/>
<line x1="53.8" y1="256.3" x2="66.2" y2="271.7"/>
<line x1="50.1" y1="232" x2="69.9" y2="232"/>
<line x1="52.1" y1="206" x2="67.9" y2="194"/>
<line x1="53" y1="175" x2="67" y2="161"/>
<line x1="52.1" y1="142" x2="67.9" y2="130"/>
<line x1="50.1" y1="104" x2="69.9" y2="104"/>
<line x1="53.8" y1="64.3" x2="66.2" y2="79.7"/>
<line x1="56.9" y1="30.6" x2="63.1" y2="49.4"/>
<line x1="88.9" y1="286.6" x2="95.1" y2="305.4"/>
<line x1="85.8" y1="256.3" x2="98.2" y2="271.7"/>
<line x1="82.1" y1="232" x2="101.9" y2="232"/>
<line x1="84.1" y1="206" x2="99.9" y2="194"/>
<line x1="85" y1="175" x2="99" y2="161"/>
<line x1="84.1" y1="142" x2="99.9" y2="130"/>
<line x1="82.1" y1="104" x2="101.9" y2="104"/>
<line x1="85.8" y1="64.3" x2="98.2" y2="79.7"/>
<line x1="88.9" y1="30.6" x2="95.1" y2="49.4"/>
<line x1="120.9" y1="286.6" x2="127.1" y2="305.4"/>
<line x1="117.8" y1="256.3" x2="130.2" y2="271.7"/>
<line x1="114.1" y1="232" x2="133.9" y2="232"/>
<line x1="116.1" y1="206" x2="131.9" y2="194"/>
<line x1="117" y1="175" x2="131" y2="161"/>
<line x1="116.1" y1="142" x2="131.9" y2="130"/>
<line x1="114.1" y1="104" x2="133.9" y2="104"/>
<line x1="117.8" y1="64.3" x2="130.2" y2="79.7"/>
<line x1="120.9" y1="30.6" x2="127.1" y2="49.4"/>
<line x1="152.9" y1="286.6" x2="159.1" y2="305.4"/>
<line x1="149.8" y1="256.3" x2="162.2" y2="271.7"/>
<line x1="146.1" y1="232" x2="165.9" y2="232"/>
<line x1="148.1" y1="206" x2="163.9" y2="194"/>
<line x1="149" y1="175" x2="163" y2="161"/>
<line x1="148.1" y1="142" x2="163.9" y2="130"/>
<line x1="146.1" y1="104" x2="165.9" y2="104"/>
<line x1="149.8" y1="64.3" x2="162.2" y2="79.7"/>
<line x1="152.9" y1="30.6" x2="159.1" y2="49.4"/>
<line x1="184.9" y1="286.6" x2="191.1" y2="305.4"/>
<line x1="181.8" y1="256.3" x2="194.2" y2="271.7"/>
<line x1="178.1" y1="232" x2="197.9" y2="232"/>
<line x1="180.1" y1="206" x2="195.9" y2="194"/>
<line x1="181" y1="175" x2="195" y2="161"/>
<line x1="180.1" y1="142" x2="195.9" y2="130"/>
<line x1="178.1" y1="104" x2="197.9" y2="104"/>
<line x1="181.8" y1="64.3" x2="194.2" y2="79.7"/>
<line x1="184.9" y1="30.6" x2="191.1" y2="49.4"/>
<line x1="216.9" y1="286.6" x2="223.1" y2="305.4"/>
<line x1="213.8" y1="256.3" x2="226.2" y2="271.7"/>
<line x1="210.1" y1="232" x2="229.9" y2="232"/>
<line x1="212.1" y1="206" x2="227.9" y2="194"/>
<line x1="213" y1="175" x2="227" y2="161"/>
<line x1="212.1" y1="142" x2="227.9" y2="130"/>
<line x1="210.1" y1="104" x2="229.9" y2="104"/>
<line x1="213.8" y1="64.3" x2="226.2" y2="79.7"/>
<line x1="216.9" y1="30.6" x2="223.1" y2="49.4"/>
<line x1="248.9" y1="286.6" x2="255.1" y2="305.4"/>
<line x1="245.8" y1="256.3" x2="258.2" y2="271.7"/>
<line x1="242.1" y1="232" x2="261.9" y2="232"/>
<line x1="244.1" y1="206" x2="259.9" y2="194"/>
<line x1="245" y1="175" x2="259" y2="161"/>
<line x1="244.1" y1="142" x2="259.9" y2="130"/>
<line x1="242.1" y1="104" x2="261.9" y2="104"/>
<line x1="245.8" y1="64.3" x2="258.2" y2="79.7"/>
<line x1="248.9" y1="30.6" x2="255.1" y2="49.4"/>
<line x1="280.9" y1="286.6" x2="287.1" y2="305.4"/>
<line x1="277.8" y1="256.3" x2="290.2" y2="271.7"/>
<line x1="274.1" y1="232" x2="293.9" y2="232"/>
<line x1="276.1" y1="206" x2="291.9" y2="194"/>
<line x1="277" y1="175" x2="291" y2="161"/>
<line x1="276.1" y1="142" x2="291.9" y2="130"/>
<line x1="274.1" y1="104" x2="293.9" y2="104"/>
<line x1="277.8" y1="64.3" x2="290.2" y2="79.7"/>
<line x1="280.9" y1="30.6" x2="287.1" y2="49.4"/>
<line x1="312.9" y1="286.6" x2="319.1" y2="305.4"/>
<line x1="309.8" y1="256.3" x2="322.2" y2="271.7"/>
<line x1="306.1" y1="232" x2="325.9" y2="232"/>
<line x1="308.1" y1="206" x2="323.9" y2="194"/>
<line x1="309" y1="175" x2="323" y2="161"/>
<line x1="308.1" y1="142" x2="323.9" y2="130"/>
<line x1="306.1" y1="104" x2="325.9" y2="104"/>
<line x1="309.8" y1="64.3" x2="322.2" y2="79.7"/>
<line x1="312.9" y1="30.6" x2="319.1" y2="49.4"/>
</g>
</svg>
<figcaption>Figure 2. A slope field drawn at the points with x and y from −2 to 2 in steps of 0.5. Each row of segments is identical, the rows y = 1 and y = −1 are flat, and the x-axis row rises at 45°. Axes are unitless and use equal scales.</figcaption>
</figure>

1. **Look at the rows and columns.** Every segment in a horizontal row has the same slope; the columns are not identical. So dy/dx depends on y only. That rules out (A), which depends on x only, and (D), which depends on both.
2. **Find the zero slopes.** The segments are horizontal along y = 1 and y = −1. Both (B) and (C) are 0 there, so this does not decide it.
3. **Use a test point.** Along the x-axis (y = 0), the segments rise at 45°, so the slope is 1. Option (B) gives 1 − 0² = 1. Option (C) gives 0² − 1 = −1, which would fall.
4. **Confirm with a second point.** At y = 2 the segments fall steeply. Option (B) gives 1 − 4 = −3, a steep fall. That matches.

**Answer.** **(B)**, dy/dx = 1 − y².

**Why the steps are in this order.** Structure (rows or columns) eliminates the most options for the least work. Zero slopes then narrow it further. A test point settles a choice between two equations that differ only in sign, which is a very common trap.

## A first look at solution curves

Because every segment is a piece of a tangent line, you can trace an approximate solution curve: start at a point and move so that the curve is always tangent to the segments near it. The curve does not have to pass through the grid points; between them, blend the directions smoothly.

<figure>
<svg viewBox="0 0 362 342" role="img" aria-labelledby="sf73c-title sf73c-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sf73c-title">Slope field for dy/dx = 1 − y² with the solution curve through (0, 0)</title>
<desc id="sf73c-desc">The same slope field as Figure 2, with a thick solution curve through the marked point (0, 0). From the origin the curve rises at 45 degrees, then bends and levels off just below the line y = 1 as x increases towards 2. To the left of the origin it falls and levels off just above the line y = −1. The curve is tangent to the nearby segments everywhere.</desc>
<rect x="0" y="0" width="362" height="342" fill="#ffffff"/>
<defs><clipPath id="sf73c-clip"><rect x="44" y="24" width="288" height="288"/></clipPath></defs>
<line x1="44" y1="168" x2="332" y2="168" stroke="#8a94a6" stroke-width="1"/>
<line x1="188" y1="312" x2="188" y2="24" stroke="#8a94a6" stroke-width="1"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="330">−2</text>
<text x="124" y="330">−1</text>
<text x="188" y="330">0</text>
<text x="252" y="330">1</text>
<text x="316" y="330">2</text>
<text x="346" y="330">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="36" y="300">−2</text>
<text x="36" y="236">−1</text>
<text x="36" y="172">0</text>
<text x="36" y="108">1</text>
<text x="36" y="44">2</text>
<text x="36" y="16">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1.8" stroke-linecap="round">
<line x1="56.9" y1="286.6" x2="63.1" y2="305.4"/>
<line x1="53.8" y1="256.3" x2="66.2" y2="271.7"/>
<line x1="50.1" y1="232" x2="69.9" y2="232"/>
<line x1="52.1" y1="206" x2="67.9" y2="194"/>
<line x1="53" y1="175" x2="67" y2="161"/>
<line x1="52.1" y1="142" x2="67.9" y2="130"/>
<line x1="50.1" y1="104" x2="69.9" y2="104"/>
<line x1="53.8" y1="64.3" x2="66.2" y2="79.7"/>
<line x1="56.9" y1="30.6" x2="63.1" y2="49.4"/>
<line x1="88.9" y1="286.6" x2="95.1" y2="305.4"/>
<line x1="85.8" y1="256.3" x2="98.2" y2="271.7"/>
<line x1="82.1" y1="232" x2="101.9" y2="232"/>
<line x1="84.1" y1="206" x2="99.9" y2="194"/>
<line x1="85" y1="175" x2="99" y2="161"/>
<line x1="84.1" y1="142" x2="99.9" y2="130"/>
<line x1="82.1" y1="104" x2="101.9" y2="104"/>
<line x1="85.8" y1="64.3" x2="98.2" y2="79.7"/>
<line x1="88.9" y1="30.6" x2="95.1" y2="49.4"/>
<line x1="120.9" y1="286.6" x2="127.1" y2="305.4"/>
<line x1="117.8" y1="256.3" x2="130.2" y2="271.7"/>
<line x1="114.1" y1="232" x2="133.9" y2="232"/>
<line x1="116.1" y1="206" x2="131.9" y2="194"/>
<line x1="117" y1="175" x2="131" y2="161"/>
<line x1="116.1" y1="142" x2="131.9" y2="130"/>
<line x1="114.1" y1="104" x2="133.9" y2="104"/>
<line x1="117.8" y1="64.3" x2="130.2" y2="79.7"/>
<line x1="120.9" y1="30.6" x2="127.1" y2="49.4"/>
<line x1="152.9" y1="286.6" x2="159.1" y2="305.4"/>
<line x1="149.8" y1="256.3" x2="162.2" y2="271.7"/>
<line x1="146.1" y1="232" x2="165.9" y2="232"/>
<line x1="148.1" y1="206" x2="163.9" y2="194"/>
<line x1="149" y1="175" x2="163" y2="161"/>
<line x1="148.1" y1="142" x2="163.9" y2="130"/>
<line x1="146.1" y1="104" x2="165.9" y2="104"/>
<line x1="149.8" y1="64.3" x2="162.2" y2="79.7"/>
<line x1="152.9" y1="30.6" x2="159.1" y2="49.4"/>
<line x1="184.9" y1="286.6" x2="191.1" y2="305.4"/>
<line x1="181.8" y1="256.3" x2="194.2" y2="271.7"/>
<line x1="178.1" y1="232" x2="197.9" y2="232"/>
<line x1="180.1" y1="206" x2="195.9" y2="194"/>
<line x1="181" y1="175" x2="195" y2="161"/>
<line x1="180.1" y1="142" x2="195.9" y2="130"/>
<line x1="178.1" y1="104" x2="197.9" y2="104"/>
<line x1="181.8" y1="64.3" x2="194.2" y2="79.7"/>
<line x1="184.9" y1="30.6" x2="191.1" y2="49.4"/>
<line x1="216.9" y1="286.6" x2="223.1" y2="305.4"/>
<line x1="213.8" y1="256.3" x2="226.2" y2="271.7"/>
<line x1="210.1" y1="232" x2="229.9" y2="232"/>
<line x1="212.1" y1="206" x2="227.9" y2="194"/>
<line x1="213" y1="175" x2="227" y2="161"/>
<line x1="212.1" y1="142" x2="227.9" y2="130"/>
<line x1="210.1" y1="104" x2="229.9" y2="104"/>
<line x1="213.8" y1="64.3" x2="226.2" y2="79.7"/>
<line x1="216.9" y1="30.6" x2="223.1" y2="49.4"/>
<line x1="248.9" y1="286.6" x2="255.1" y2="305.4"/>
<line x1="245.8" y1="256.3" x2="258.2" y2="271.7"/>
<line x1="242.1" y1="232" x2="261.9" y2="232"/>
<line x1="244.1" y1="206" x2="259.9" y2="194"/>
<line x1="245" y1="175" x2="259" y2="161"/>
<line x1="244.1" y1="142" x2="259.9" y2="130"/>
<line x1="242.1" y1="104" x2="261.9" y2="104"/>
<line x1="245.8" y1="64.3" x2="258.2" y2="79.7"/>
<line x1="248.9" y1="30.6" x2="255.1" y2="49.4"/>
<line x1="280.9" y1="286.6" x2="287.1" y2="305.4"/>
<line x1="277.8" y1="256.3" x2="290.2" y2="271.7"/>
<line x1="274.1" y1="232" x2="293.9" y2="232"/>
<line x1="276.1" y1="206" x2="291.9" y2="194"/>
<line x1="277" y1="175" x2="291" y2="161"/>
<line x1="276.1" y1="142" x2="291.9" y2="130"/>
<line x1="274.1" y1="104" x2="293.9" y2="104"/>
<line x1="277.8" y1="64.3" x2="290.2" y2="79.7"/>
<line x1="280.9" y1="30.6" x2="287.1" y2="49.4"/>
<line x1="312.9" y1="286.6" x2="319.1" y2="305.4"/>
<line x1="309.8" y1="256.3" x2="322.2" y2="271.7"/>
<line x1="306.1" y1="232" x2="325.9" y2="232"/>
<line x1="308.1" y1="206" x2="323.9" y2="194"/>
<line x1="309" y1="175" x2="323" y2="161"/>
<line x1="308.1" y1="142" x2="323.9" y2="130"/>
<line x1="306.1" y1="104" x2="325.9" y2="104"/>
<line x1="309.8" y1="64.3" x2="322.2" y2="79.7"/>
<line x1="312.9" y1="30.6" x2="319.1" y2="49.4"/>
</g>
<polyline points="44,230.6 45.4,230.5 46.9,230.5 48.3,230.4 49.8,230.3 51.2,230.2 52.6,230.2 54.1,230.1 55.5,230 57,229.9 58.4,229.8 59.8,229.7 61.3,229.6 62.7,229.5 64.2,229.4 65.6,229.3 67,229.1 68.5,229 69.9,228.9 71.4,228.7 72.8,228.6 74.2,228.4 75.7,228.3 77.1,228.1 78.6,227.9 80,227.8 81.4,227.6 82.9,227.4 84.3,227.2 85.8,227 87.2,226.7 88.6,226.5 90.1,226.3 91.5,226 93,225.8 94.4,225.5 95.8,225.2 97.3,224.9 98.7,224.6 100.2,224.3 101.6,223.9 103,223.6 104.5,223.2 105.9,222.9 107.4,222.5 108.8,222.1 110.2,221.6 111.7,221.2 113.1,220.8 114.6,220.3 116,219.8 117.4,219.3 118.9,218.8 120.3,218.2 121.8,217.7 123.2,217.1 124.6,216.5 126.1,215.8 127.5,215.2 129,214.5 130.4,213.8 131.8,213.1 133.3,212.4 134.7,211.6 136.2,210.9 137.6,210 139,209.2 140.5,208.4 141.9,207.5 143.4,206.6 144.8,205.6 146.2,204.7 147.7,203.7 149.1,202.7 150.6,201.7 152,200.6 153.4,199.6 154.9,198.4 156.3,197.3 157.8,196.2 159.2,195 160.6,193.8 162.1,192.6 163.5,191.4 165,190.1 166.4,188.8 167.8,187.5 169.3,186.2 170.7,184.9 172.2,183.5 173.6,182.2 175,180.8 176.5,179.4 177.9,178 179.4,176.6 180.8,175.2 182.2,173.7 183.7,172.3 185.1,170.9 186.6,169.4 188,168 189.4,166.6 190.9,165.1 192.3,163.7 193.8,162.3 195.2,160.8 196.6,159.4 198.1,158 199.5,156.6 201,155.2 202.4,153.8 203.8,152.5 205.3,151.1 206.7,149.8 208.2,148.5 209.6,147.2 211,145.9 212.5,144.6 213.9,143.4 215.4,142.2 216.8,141 218.2,139.8 219.7,138.7 221.1,137.6 222.6,136.4 224,135.4 225.4,134.3 226.9,133.3 228.3,132.3 229.8,131.3 231.2,130.4 232.6,129.4 234.1,128.5 235.5,127.6 237,126.8 238.4,126 239.8,125.1 241.3,124.4 242.7,123.6 244.2,122.9 245.6,122.2 247,121.5 248.5,120.8 249.9,120.2 251.4,119.5 252.8,118.9 254.2,118.3 255.7,117.8 257.1,117.2 258.6,116.7 260,116.2 261.4,115.7 262.9,115.2 264.3,114.8 265.8,114.4 267.2,113.9 268.6,113.5 270.1,113.1 271.5,112.8 273,112.4 274.4,112.1 275.8,111.7 277.3,111.4 278.7,111.1 280.2,110.8 281.6,110.5 283,110.2 284.5,110 285.9,109.7 287.4,109.5 288.8,109.3 290.2,109 291.7,108.8 293.1,108.6 294.6,108.4 296,108.2 297.4,108.1 298.9,107.9 300.3,107.7 301.8,107.6 303.2,107.4 304.6,107.3 306.1,107.1 307.5,107 309,106.9 310.4,106.7 311.8,106.6 313.3,106.5 314.7,106.4 316.2,106.3 317.6,106.2 319,106.1 320.5,106 321.9,105.9 323.4,105.8 324.8,105.8 326.2,105.7 327.7,105.6 329.1,105.5 330.6,105.5 332,105.4 332,105.4" fill="none" stroke="#1d2b44" stroke-width="3" clip-path="url(#sf73c-clip)"/>
<circle cx="188" cy="168" r="5" fill="#1d2b44"/>
<text x="196" y="186" font-size="13" fill="#1d2b44" stroke="#ffffff" stroke-width="4" stroke-linejoin="round" paint-order="stroke">(0, 0)</text>
</svg>
<figcaption>Figure 3. The solution curve of dy/dx = 1 − y² through (0, 0), drawn as a thick line on top of the field. It follows the segments: steep near the origin, flattening towards y = 1 on the right and towards y = −1 on the left.</figcaption>
</figure>

For dy/dx = 1 − y², the curve through (0, 0) rises steeply at first, then levels off as it approaches y = 1 on the right. Going left from (0, 0), it falls and levels off towards y = −1. (For background only: this particular solution is y = tanh x, the hyperbolic tangent, which is not part of the course. You do not need it to draw the curve.)

Topic 7.4 develops this into full reasoning: families of solutions, solutions that stay constant, and what happens in the long run.

## Common misconceptions

- **"The segments are the graph of the solution."** They are tangent directions. A solution curve follows them but is not made of them joined end to end.
- **Swapping x and y.** At (1, −2) the x-value is 1. Substituting the numbers in the wrong places is the most common arithmetic error in this topic.
- **Long lines instead of short segments.** A long line suggests the slope stays the same along it. Keep segments short and centred.
- **Inconsistent steepness.** If a slope of 2 looks the same as a slope of 1/2, the field misrepresents the equation. Compare segments with each other, not just with the horizontal.
- **Leaving out the zero slopes.** A slope of 0 still needs a segment: a horizontal one. A blank point is wrong.
- **Rows and columns mixed up.** dy/dx depending on x only makes identical **columns** (vertical lines of segments), not rows.
- **Matching on zero slopes alone.** dy/dx = 1 − y² and dy/dx = y² − 1 have the same horizontal segments but opposite slopes everywhere else. Always check a sign with a test point.
- **Thinking a field gives exact values.** It gives directions and shapes, so any value read from a sketched curve is an estimate.

## Where this leads

In Topic 7.4 you will use slope fields to reason about solutions: sketch the particular solution through a given point, spot constant solutions, describe long-run behaviour, and connect the field with the sign of the second derivative. Later in the unit, separation of variables gives exact solutions you can check against the field. BC students will also meet Euler's method, which follows the segments step by step to estimate values.

Next topic: [Reasoning Using Slope Fields](/advanced-course-resources/calculus-ab/7-4-reasoning-slope-fields-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/7-3-sketching-slope-fields-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/7-3-sketching-slope-fields-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/7-3-sketching-slope-fields-checklist/) to consolidate.
