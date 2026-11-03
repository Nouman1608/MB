---
title: "OxfordAQA International GCSE Mathematics: Solving quadratics: factorising, completing the square (9260)"
seoTitle: "OxfordAQA IGCSE Maths Solving Quadratics Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Solving quadratic equations by factorising, completing the square and the formula"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9260"]
syllabusSeries: "Version 5.1 (for exams May/June 2018 onwards)"
order: 82
syllabusTopics:
  - qualification: "igcse"
    topic: "algebra-oxfordaqa-igcse-maths"
    subtopic: "solving-equations-and-inequalities-oxfordaqa-igcse-maths"
description: "Study guide to solving quadratics by factorising, from a graph, by completing the square and by formula, for OxfordAQA International GCSE Maths."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This study guide covers reference A20 in section 3.2.3 of the OxfordAQA International GCSE Mathematics (9260) specification, Version 5.1 (for exams May/June 2018 onwards). It teaches how to solve quadratic equations by factorising, how to find approximate solutions from a graph, and, for Extension, how to use completing the square and the quadratic formula. The specification says all content can be assessed on the Extension tier question papers, so Core content is also Extension content. Statements marked "Extension only" are the additional Extension content.

Use it with the [revision notes](/resources/oxfordaqa-igcse-mathematics-solving-quadratic-equations-by-factorising-completing-revision-notes/) and the [practice questions](/resources/oxfordaqa-igcse-mathematics-solving-quadratic-equations-by-factorising-completing-practice/). The course page is [OxfordAQA IGCSE Mathematics](/boards/oxfordaqa/igcse/mathematics/) and the printable list is the [checklist](/checklists/oxfordaqa/igcse/mathematics/). To find your weak spots first, try a [free 10-minute diagnostic](/diagnostics/). Factorising expressions is revised in [algebra notation and manipulation](/resources/igcse-oxfordaqa-mathematics-algebra-notation-and-manipulation/), and the shape of the curve is in [graphs of quadratic and other functions](/resources/oxfordaqa-igcse-mathematics-graphs-of-quadratic-cubic-reciprocal-exponential-and/).

## What this guide covers

| Ref | What you must be able to do | Level |
|---|---|---|
| A20 | Solve quadratic equations algebraically by factorising | Core |
| A20 | Find approximate solutions of quadratic equations using a graph | Core |
| A20 | Solve quadratic equations by completing the square | Extension only |
| A20 | Solve quadratic equations by using the quadratic formula | Extension only |

Linear equations, simultaneous equations (including a line meeting a curve) and inequalities are separate topics and are not taught here.

## Step one: write the equation as "= 0"

A quadratic equation has the form ax² + bx + c = 0, where a ≠ 0. Every method below starts from this form, so rearrange first. Expand any brackets, collect terms on one side and leave 0 on the other.

The reason is the zero-product rule: when a product is 0, one of the factors must be 0. So (x − 4)(x + 9) = 0 means x − 4 = 0 or x + 9 = 0. This only works when the other side is 0. If you write (x − 4)(x + 9) = 10 and set each bracket equal to something, the answers are wrong.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-solving-quadratic-equations-by-factorising-completing--07-zero-product-trap.webp" width="900" height="746" alt="The curve y = (x-4)(x+9) crosses the x-axis at 4 and -9, but (x-4)(x+9) = 10 needs it to meet the line y = 10, at about 4.73 and -9.73. Setting each bracket to a number is wrong; rearrange to equal 0 first." loading="lazy">
  <figcaption>The zero-product rule only works when the other side is 0.</figcaption>
</figure>


## Solving by factorising (Core)

Check the pattern first.

**No constant term.** Take out a common factor. For 7x² − 21x = 0 write 7x(x − 3) = 0, so x = 0 or x = 3. Never divide both sides by x: that loses the solution x = 0.

**Difference of two squares.** a² − b² = (a − b)(a + b). For 25x² − 16 = 0 write (5x − 4)(5x + 4) = 0, so x = 4/5 or x = −4/5.

**Three terms with a = 1.** Look for a pair of numbers whose product is c and whose sum is b.

**Three terms with a ≠ 1.** Multiply a by c, find two numbers with that product that add to b, split the middle term, then factorise in pairs.

### Worked example 1: a = 1

Solve x² + 4x − 45 = 0.

```
Need two numbers with product −45 and sum +4.
Pairs of 45: 1,45  3,15  5,9
9 and −5 give product −45 and sum 4.
(x + 9)(x − 5) = 0
x + 9 = 0  or  x − 5 = 0
x = −9  or  x = 5
```

Check by substituting x = 5: 25 + 20 − 45 = 0. Correct.

### Worked example 2: a ≠ 1

Solve 8x² + 2x − 15 = 0.

```
a × c = 8 × (−15) = −120
Two numbers with product −120 and sum +2: 12 and −10
8x² + 12x − 10x − 15 = 0
4x(2x + 3) − 5(2x + 3) = 0
(2x + 3)(4x − 5) = 0
x = −3/2  or  x = 5/4
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-notation-vocabulary-and-manipulation--08-split-middle-term.webp" width="900" height="880" alt="Multiplying 3 by -8 gives -24; the numbers 12 and -2 multiply to -24 and add to 10, so 10x splits into 12x - 2x. The four terms fill a grid with columns 3x and -2 and rows x and +4, giving (3x - 2)(x + 4)." loading="lazy">
  <figcaption>Splitting the middle term with a x c, shown as an area grid.</figcaption>
</figure>


### Worked example 3: rearrange first

Solve x(x + 3) = 2x + 20.

```
x² + 3x = 2x + 20
x² + x − 20 = 0
(x + 5)(x − 4) = 0
x = −5  or  x = 4
```

### Worked example 4: a repeated solution

Solve x² − 10x + 25 = 0. This is (x − 5)² = 0, so x = 5. There is one solution, and you should say it is repeated or simply give x = 5 once.

### Worked example 5: an equation with x in a denominator

Solve x + 12/x = 7. Multiply every term by x (x ≠ 0): x² + 12 = 7x. Then x² − 7x + 12 = 0, so (x − 3)(x − 4) = 0 and x = 3 or x = 4.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-solving-quadratic-equations-by-factorising-completing--05-factors-give-roots.webp" width="900" height="980" alt="The curve y = x² + 4x - 45 crosses the x-axis at x = -9 and x = 5. Factorising gives (x + 9)(x - 5) = 0; a product is zero only if a factor is zero, so x = -9 or x = 5." loading="lazy">
  <figcaption>The solutions from the factors are exactly where the curve meets the x-axis.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-solving-quadratic-equations-by-factorising-completing--08-common-factor-repeated-root.webp" width="900" height="890" alt="y = 7x squared - 21x = 7x(x - 3) crosses the x-axis at 0 and 3, and dividing by x would lose x = 0. y = x squared - 10x + 25 = (x - 5) squared touches the x-axis only at x = 5, one repeated solution." loading="lazy">
  <figcaption>A common factor gives a root at 0; a perfect square gives one repeated root.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/algebraic-manipulation--02-factorise-trinomial-tiles.webp" width="900" height="670" alt="Tiles for x squared plus 5x plus 6 fit into a rectangle of width x plus 3 and height x plus 2. The six unit tiles fill the corner, which is why the numbers must multiply to 6 and add to 5. So the expression equals (x + 2)(x + 3)." loading="lazy">
  <figcaption>The tiles for x² + 5x + 6 build a rectangle with sides x + 2 and x + 3.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/algebraic-manipulation--03-difference-of-squares.webp" width="900" height="886" alt="A square of side a with a b-by-b square removed leaves a shape of area a squared minus b squared. Cut and rearranged it forms a rectangle a plus b by a minus b. With a = 5 and b = 3, 25 minus 9 equals 2 times 8." loading="lazy">
  <figcaption>a² − b² is the area of a rectangle with sides (a − b) and (a + b).</figcaption>
</figure>


## Approximate solutions from a graph (Core)

The solutions of a quadratic equation are the x-values where its curve meets a line. For ax² + bx + c = 0 the curve is y = ax² + bx + c and the line is y = 0, which is the x-axis. The solutions are the x-coordinates where the curve crosses the x-axis.

Here is a table for y = x² − 2x − 5.

| x | −2 | −1 | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|---|---|
| y | 3 | −2 | −5 | −6 | −5 | −2 | 3 |

Mark each point, then draw one smooth curve through them. The curve changes sign between x = −2 and x = −1, and between x = 3 and x = 4, so it crosses the x-axis in those two places.

### Worked example 6: reading roots

Use the graph of y = x² − 2x − 5 to solve x² − 2x − 5 = 0.

Read where the curve meets y = 0. A careful drawing gives about x = −1.4 and x = 3.4. State that these are approximate and round to the accuracy asked for, usually 1 decimal place. (The exact values are 1 ± √6, which round to −1.4 and 3.4.)

### Worked example 7: using a different line

The same graph can solve other equations. The method is to rearrange the new equation until one side matches the equation of the curve.

Solve x² − 2x − 2 = 0 using the graph of y = x² − 2x − 5.

```
x² − 2x − 2 = 0
x² − 2x − 5 = −3      (subtract 3 from both sides)
```

Draw the horizontal line y = −3 and read the x-coordinates where it meets the curve. They are about x = −0.7 and x = 2.7.

Another case: x² − 2x − 5 = 3 needs the line y = 3. The curve passes through (−2, 3) and (4, 3), so the solutions are x = −2 and x = 4.

Sketching a curve from a table of values is covered in the graphs guide linked above. Here the skill is choosing the right line and reading its intersections.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-graphs-of-functions-and-sketching-curves--02-solve-with-a-line.webp" width="900" height="1090" alt="The curve y = x² − 2x − 3 is drawn once. Its x-axis crossings (x = −1 and 3) solve x² − 2x − 3 = 0. Rearranging x² − 4x − 1 = 0 gives the line y = 2x − 2, which meets the curve at about x = −0.2 and 4.2." loading="lazy">
  <figcaption>Draw the curve once, then choose the line that matches the equation to solve.</figcaption>
</figure>


## Completing the square (Extension only)

Completing the square rewrites x² + bx + c as (x + b/2)² − (b/2)² + c. Then you can solve by isolating the bracket.

### Worked example 8: a = 1, even b

Solve x² + 12x + 5 = 0, leaving the answer in surd form and then to 2 decimal places.

```
x² + 12x + 5 = (x + 6)² − 36 + 5 = (x + 6)² − 31
(x + 6)² − 31 = 0
(x + 6)² = 31
x + 6 = ±√31
x = −6 + √31  or  x = −6 − √31
x = −0.43  or  x = −11.57
```

### Worked example 9: odd b

Solve x² − 5x − 2 = 0.

```
x² − 5x − 2 = (x − 5/2)² − 25/4 − 2 = (x − 5/2)² − 33/4
(x − 5/2)² = 33/4
x − 5/2 = ±√33/2
x = (5 ± √33)/2
x = 5.37  or  x = −0.37    (2 d.p.)
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/indices-and-equations--05-quadratic-surd-roots.webp" width="900" height="970" alt="The parabola y = x^2 - 4x - 3 has line of symmetry x = 2 and crosses the x axis a distance sqrt(7) either side, giving x = 2 +/- sqrt(7)." loading="lazy">
  <figcaption>The surd roots sit sqrt(7) either side of the line of symmetry x = 2.</figcaption>
</figure>


### Worked example 10: a ≠ 1

Solve 2x² − 12x + 5 = 0. Factor 2 out of the two x-terms only, not the constant.

```
2x² − 12x + 5 = 2(x² − 6x) + 5
              = 2[(x − 3)² − 9] + 5
              = 2(x − 3)² − 18 + 5
              = 2(x − 3)² − 13
2(x − 3)² = 13
(x − 3)² = 13/2
x = 3 ± √(13/2) = 3 ± √26/2
x = 5.55  or  x = 0.45    (2 d.p.)
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-solving-quadratic-equations-by-factorising-completing--04-complete-square-roots.webp" width="900" height="950" alt="The curve y = x² + 12x + 5 has its minimum at (-6, -31) on the line x = -6, and crosses the x-axis root 31 either side, at x = -0.43 and x = -11.57. Algebra: (x + 6)² - 31 = 0, (x + 6)² = 31, x = -6 plus or minus root 31." loading="lazy">
  <figcaption>Completing the square puts the vertex at (-6, -31), and the roots lie root 31 either side of x = -6.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-introduction-to-algebra-and-manipulation--06-complete-the-square.webp" width="900" height="870" alt="A square of side x + 4 is built from x^2, two strips 4x and a 4 by 4 corner of 16. So x^2 + 8x = (x + 4)^2 - 16, and x^2 + 8x - 5 = (x + 4)^2 - 21." loading="lazy">
  <figcaption>Half of 8 gives p = 4; the 16 added to complete the square must be taken away.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-edexcel-mathematics-use-of-symbols-and-algebraic-manipulation--05-complete-square-a2-graph.webp" width="900" height="940" alt="The parabola y = 2x squared + 6x - 1 has its lowest point at (-1.5, -5.5) on the line x = -1.5 and crosses the y axis at -1. Completing the square gives a = 2, b = 1.5, c = -5.5, the turning point." loading="lazy">
  <figcaption>The completed-square form reads off the turning point (-b, c).</figcaption>
</figure>


## The quadratic formula (Extension only)

The solutions of ax² + bx + c = 0, where a ≠ 0, are

x = (−b ± √(b² − 4ac)) / (2a)

The specification lists this among the formulae you are expected to know, so learn it. It comes from completing the square on the general equation.

Method: write the equation as "= 0", name a, b and c with their signs, substitute in brackets, then work out b² − 4ac before taking the square root.

### Worked example 11

Solve 3x² − 7x − 2 = 0, giving answers to 3 significant figures.

```
a = 3, b = −7, c = −2
b² − 4ac = (−7)² − 4(3)(−2) = 49 + 24 = 73
x = (7 ± √73) / 6
x = 2.59  or  x = −0.257
```

Notice that −b becomes +7, and that −4ac is +24 because c is negative.

### Worked example 12

Solve 5x² + 9x + 3 = 0 to 3 significant figures.

```
b² − 4ac = 81 − 60 = 21
x = (−9 ± √21) / 10
x = −0.442  or  x = −1.36
```

### When there is no solution

Try 2x² + 3x + 4 = 0. Here b² − 4ac = 9 − 32 = −23. A negative number has no real square root, so the equation has no real solutions. Write that conclusion rather than leaving the working unfinished. It also means the curve y = 2x² + 3x + 4 never touches the x-axis.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-solving-equations-and-inequalities--05-quadratic-formula-graph.webp" width="900" height="980" alt="The curve y = 3x² + 7x − 5 crosses the x-axis at x = −2.91 and x = 0.57, the two solutions the formula gives. The working shows a = 3, b = 7, c = −5 and b² − 4ac = 109." loading="lazy">
  <figcaption>The two answers from the formula are where the curve meets the x-axis.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-maths-4ma1-quadratic-equations--04-quad-discriminant.webp" width="900" height="1010" alt="Three parabolas: 3x² − 7x + 1 (b² − 4ac = 37) crosses the x-axis twice; x² − 6x + 9 (0) touches it once at x = 3; x² − 2x + 3 (−8) never reaches it, so there are no real solutions." loading="lazy">
  <figcaption>Positive discriminant: two solutions; zero: one repeated solution; negative: none.</figcaption>
</figure>


## Choosing a method

| Situation | Best method |
|---|---|
| Common factor or difference of two squares | Factorise |
| Integer numbers fit the product and sum quickly | Factorise |
| Question says "leave in surd form" or "complete the square" | Completing the square |
| Question says "to 2 decimal places" and factorising fails | Formula |
| Question gives a graph or table | Read from the graph |

If the question names a method, use that method. If it says "hence", use the previous part.

## Common errors

- Setting each bracket equal to a non-zero number, as in (x − 2)(x + 3) = 14 so x = 16. Expand and move everything to one side first.
- Dividing by x and losing x = 0.
- Sign slips when splitting the middle term, for example choosing 10 and 9 instead of 10 and −9.
- Writing −b² instead of (−b)² when b is negative. Use brackets.
- Forgetting that the formula's denominator, 2a, divides the whole top line.
- Completing the square on 2x² − 12x + 5 by halving 12 instead of halving 6 after taking out the 2.
- Giving only the positive root. Both ± values are usually needed.
- Reading graph solutions as the y-coordinates. Solutions are x-values.
- Rounding too early. Keep the full value until the last line.

## Next steps

Work through the [practice questions](/resources/oxfordaqa-igcse-mathematics-solving-quadratic-equations-by-factorising-completing-practice/), then use the [revision notes](/resources/oxfordaqa-igcse-mathematics-solving-quadratic-equations-by-factorising-completing-revision-notes/) to check recall.

## Official syllabus

OxfordAQA International GCSE Mathematics (9260), Version 5.1, for exams May/June 2018 onwards, published by OxfordAQA. Section 3.2.3, reference A20.
