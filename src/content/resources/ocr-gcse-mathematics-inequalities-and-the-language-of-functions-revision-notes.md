---
title: "OCR GCSE Mathematics: Inequalities and the language of functions (J560) -- Revision Notes"
seoTitle: "OCR GCSE Maths Inequalities and Functions Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["gcse"]
topic: "Inequalities and the language of functions"
boards: ["ocr"]
qualifications: ["gcse"]
syllabusCodes: ["J560"]
syllabusSeries: "Version 2.1 (August 2026), for first assessment in 2017"
order: 49
syllabusTopics:
  - qualification: "gcse"
    topic: "algebra-ocr-gcse-maths"
    subtopic: "algebraic-inequalities-ocr-gcse-maths"
  - qualification: "gcse"
    topic: "algebra-ocr-gcse-maths"
    subtopic: "language-of-functions-ocr-gcse-maths"
description: "Condensed OCR GCSE Maths J560 revision notes on inequalities and functions (6.04-6.05): methods, regions, inverses, composites and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These revision notes condense sections 6.04 (Algebraic inequalities) and 6.05 (Language of functions) of the OCR GCSE (9-1) Mathematics J560 specification, Version 2.1 (August 2026). Longer explanations and more examples are in the [study guide](/resources/ocr-gcse-mathematics-inequalities-and-the-language-of-functions/). Content that the specification gives only to Higher tier learners is labelled **Higher tier only**.

Links: [course hub](/boards/ocr/gcse/mathematics/), [printable checklist](/checklists/ocr/gcse/mathematics/), [practice questions](/resources/ocr-gcse-mathematics-inequalities-and-the-language-of-functions-practice/), [free diagnostics](/diagnostics/).

## Key definitions

- **Inequality:** a statement that one quantity is smaller or larger than another, using <, ≤, > or ≥.
- **Strict inequality:** < or >. The boundary value is not included.
- **Double inequality:** two limits at once, such as −5 < x ≤ 9.
- **Critical values:** the roots of the matching equation, where a quadratic changes sign. (Higher tier only)
- **Set notation:** {x | x ≥ 3} means the set of all x such that x ≥ 3. (Higher tier only)
- **Machine (function):** a rule that takes an input and gives an output, such as y = 2x + 3.
- **Inverse:** the reverse process. (Higher tier only)
- **Composite:** two machines used one after the other. (Higher tier only)

## Symbols and number lines (6.04a, both tiers)

| Inequality | Circle at the boundary | Direction |
|---|---|---|
| x < a | open | left |
| x ≤ a | closed | left |
| x > a | open | right |
| x ≥ a | closed | right |

A double inequality has two circles joined by a line. Integer solutions are whole numbers only, and a strict end is left out.

## Linear inequalities: method in steps (both tiers)

1. Expand brackets and collect x terms on one side.
2. Add or subtract to isolate the x term.
3. Divide or multiply to leave x on its own. **If you use a negative number, reverse the sign.**
4. Check by testing one value inside the solution and one outside.

**Reminder.** Solve 2x − 3 > 9.

```
2x > 12
x > 6
```

**Reminder (negative divide).** Solve −x/2 ≤ 3.

```
−x ≤ 6
x ≥ −6        (multiplied by −1, sign reversed)
```

**Double inequality.** Do the same step to all three parts. For −5 < 2x − 1 ≤ 9: add 1 to get −4 < 2x ≤ 10, then divide by 2 to get **−2 < x ≤ 5**.

## Quadratic inequalities: method in steps (Higher tier only)

1. Get 0 on one side.
2. Solve the matching equation for the critical values.
3. Sketch the curve (U-shaped when the x² coefficient is positive).
4. For < 0 or ≤ 0, take the part **between** the roots. For > 0 or ≥ 0, take the parts **outside** the roots.
5. Write the answer in the form the question asks for: inequalities or set notation.

| Inequality | Answer |
|---|---|
| x² − 11x + 24 ≤ 0 | 3 ≤ x ≤ 8 |
| x² − x − 6 > 0 | x < −2 or x > 3 |
| x² ≥ 4 | x ≤ −2 or x ≥ 2 |
| x² < 7x | 0 < x < 7 |

**Reminder.** Solve 3x² + 10x − 8 ≥ 0.

```
(3x − 2)(x + 4) ≥ 0
critical values: x = 2/3 and x = −4
outside the roots:
x ≤ −4 or x ≥ 2/3
```

In set notation this is {x | x ≤ −4 or x ≥ 2/3}.

**Must-know distinction.** "Between" is one inequality, 2 ≤ x ≤ 7. "Outside" is two separate inequalities joined by or. Never write 2 ≥ x ≥ 7.

## Regions on a graph: method in steps (6.04b, Higher tier only)

1. Turn each inequality into an equation and draw its line.
2. Use a solid line for ≤ or ≥, and a dashed line for < or >.
3. Test a point off the line. If it satisfies the inequality, keep its side; if not, take the other side.
4. Find where all conditions hold together.
5. Shade or label as the question instructs.

**Reminder.** For y > 1, x ≥ 0 and x + y < 5, the region is a triangle with corners (0, 1), (0, 5) and (4, 1). The lines y = 1 and x + y = 5 are dashed, and x = 0 is solid. The points with whole-number coordinates inside are (0, 2), (0, 3), (0, 4), (1, 2), (1, 3) and (2, 2).

**Writing inequalities from a region.** Go through the boundary lines one at a time. Take a point well inside the region and put it into that line's equation. Choose the symbol that makes the test true.

## Functions as machines (6.05a)

**Both tiers.** y = 2x + 3 means: input x, multiply by 2, add 3, output y.

- Input −1 gives 2(−1) + 3 = 1.
- Output 11 means 2x + 3 = 11, so x = 4.

**Inverse (Higher tier only).** Reverse the steps and their order, and swap each step for its opposite.

```
y = (x − 4)/5:   x → [ − 4 ] → [ ÷ 5 ] → y
inverse:         y → [ × 5 ] → [ + 4 ] → x
```

So x = 5y + 4. For output 3, the input was 19.

**Composite (Higher tier only).** The output of the first machine is the input of the second. Machine C multiplies by 4 and machine D subtracts 3.

- C then D: 4x − 3. Input 6 gives 21.
- D then C: 4(x − 3). Input 6 gives 12.

The order changes the result.

| Idea | Key point |
|---|---|
| Inverse | Opposite steps, reverse order |
| Composite | First output goes into the second machine |
| Squaring step | Reverse gives a positive and a negative root |
| Notation | The specification does not require function notation |

## Worked reminders

**Brackets and unknowns on both sides.** Solve 3(x − 2) ≥ 5x + 4.

```
3x − 6 ≥ 5x + 4
−2x ≥ 10             (subtract 5x, add 6)
x ≤ −5               (divide by −2, reverse the sign)
```

Check: x = −6 gives −24 ≥ −26, which is true.

**Forming an inequality.** A hall costs £8 plus £3 for each guest, and the budget is under £40. Write 8 + 3n < 40, so 3n < 32 and n < 10.67. The greatest number of guests is **10**, because n must be a whole number.

**Solving with a composite.** Using machines C and D above, C then D gives 4x − 3. For C then D to give 45: 4x − 3 = 45, so 4x = 48 and **x = 12**.

**Inverse of a bracketed machine.** The machine y = 2(x + 5) adds 5 and then doubles. The inverse halves and then subtracts 5, so x = y/2 − 5. For output 18, x = 9 − 5 = **4**.

## Three ways to write a solution

| Form | Example | Used for |
|---|---|---|
| Inequality | −2 < x ≤ 5 | any answer |
| Number line | circles and a line | showing a range (both tiers) |
| Set notation | {x \| −2 < x ≤ 5} | Higher tier only |

Give the form the question asks for. If it does not say, an inequality is the safest choice.

## Quick self-test

1. Solve 3x − 8 ≥ 13.
2. Solve 9 − 4x < 1.
3. Solve −5 < 2x − 1 ≤ 9 and list the integer solutions.
4. A number line has an open circle at 3 and an arrow pointing right. Write the inequality.
5. (Higher tier only) Solve x² − 11x + 24 ≤ 0.
6. (Higher tier only) Solve x² > 64 and write the answer in set notation.
7. (Higher tier only) Which of the points (2, 1) and (0, 3) satisfy both x + y ≤ 4 and y > x?
8. A machine is y = 6x + 1. Find the output for input 5, and the input for output 43.
9. (Higher tier only) A machine is y = (x − 4)/5. Write the inverse as an equation for x, and use it to find the input that gives output 3.
10. (Higher tier only) Machine C multiplies by 4 and machine D subtracts 3. Find the result of C then D, and of D then C, for input 6.

### Answers

1. 3x ≥ 21, so **x ≥ 7**.
2. −4x < −8, so **x > 2** (sign reversed).
3. −4 < 2x ≤ 10, so −2 < x ≤ 5. Integers: **−1, 0, 1, 2, 3, 4, 5**.
4. **x > 3**.
5. (x − 3)(x − 8) ≤ 0, so **3 ≤ x ≤ 8**.
6. Critical values ±8; outside the roots. **x < −8 or x > 8**, which is {x | x < −8 or x > 8}.
7. (2, 1): 3 ≤ 4 is true but 1 > 2 is false. (0, 3): 3 ≤ 4 and 3 > 0 are both true. **Only (0, 3)**.
8. 6 × 5 + 1 = **31**. For 43: 6x = 42, so **x = 7**.
9. **x = 5y + 4**. For y = 3, x = 15 + 4 = **19**.
10. C then D: 24 − 3 = **21**. D then C: 3 × 4 = **12**.

## Where marks are usually lost

- Keeping the original sign after a multiplication or division by a negative number.
- Giving only the critical values of a quadratic inequality and not the range.
- Writing "between" when the inequality needs "outside", or the other way round.
- Writing one impossible chain such as 2 ≥ x ≥ 7 instead of two separate inequalities with or.
- Losing the negative solution of x² ≤ k by writing only x ≤ √k.
- Using a solid line for < or > on a graph, or a dashed line for ≤ or ≥.
- Not testing a point, and shading the wrong side of a line.
- Counting a boundary integer that a strict inequality excludes.
- Building an inverse with the right steps in the wrong order.
- Doing the two machines of a composite in the wrong order.

## Official syllabus

OCR GCSE (9-1) Mathematics (J560) specification, Version 2.1 (August 2026), first assessment 2017, published by OCR (Oxford Cambridge and RSA) - sections 6.04 Algebraic inequalities and 6.05 Language of functions.
