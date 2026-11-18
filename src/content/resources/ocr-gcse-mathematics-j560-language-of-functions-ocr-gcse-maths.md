---
title: "OCR GCSE Mathematics (J560): Language of functions"
resourceType: "study-guides"
subject: "mathematics"
level: ["gcse"]
topic: "Topic 6 – Algebra"
boards: ["ocr"]
qualifications: ["gcse"]
syllabusCodes: ["J560"]
syllabusSeries: "Version 2.1 (August 2026), for first assessment in 2017"
order: 6.5
syllabusTopics:
  - qualification: "gcse"
    topic: "algebra-ocr-gcse-maths"
    subtopic: "language-of-functions-ocr-gcse-maths"
description: "OCR GCSE Maths J560 section 6.05 in depth: expressions as function machines with inputs and outputs, inverse functions and composite functions."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers section 6.05, Language of functions, of the OCR GCSE (9-1) Mathematics J560 specification, Version 2.1 (August 2026), for first assessment in 2017. Seeing simple expressions as functions with inputs and outputs is for **both tiers**. Inverse functions and composite functions are **Higher tier only** and are labelled.

The [inequalities and the language of functions guide](/resources/ocr-gcse-mathematics-inequalities-and-the-language-of-functions/) introduces 6.05 alongside inequalities. This page goes further on 6.05 alone: how the order of operations fixes the order of a machine, writing an expression from a machine, tables of inputs and outputs, two methods for inverses with a check, why order matters in a composite, and undoing a composite. Condense it with the [6.05 revision notes](/resources/ocr-gcse-mathematics-j560-language-of-functions-ocr-gcse-maths-revision-notes/) and test yourself with the [6.05 practice questions](/resources/ocr-gcse-mathematics-j560-language-of-functions-ocr-gcse-maths-practice/).

## What the specification asks

| Ref | Content | Tier |
|---|---|---|
| 6.05a | Interpret, where appropriate, simple expressions as functions with inputs and outputs, for example y = 2x + 3 as x → ×2 → +3 → y | Both tiers |
| 6.05a | Interpret the reverse process as the "inverse function" | Higher tier only |
| 6.05a | Interpret the succession of two functions as a "composite function" | Higher tier only |

The specification adds a note: **knowledge of function notation will not be required**. So OCR J560 questions describe functions in words, as machines, or as equations such as y = 2x + 3. This page does the same.

## Functions as inputs and outputs

A function is a rule that takes an input, applies one or more operations in a fixed order, and gives exactly one output. In y = 2x + 3, x is the input and y is the output.

The order of operations inside the expression tells you the order of the boxes in the machine. Brackets come first, then powers, then multiplication and division, then addition and subtraction.

**Worked example 1.** Draw machines for y = 3(x − 4) and y = 3x − 4. Find the output of each when the input is 10.

```
y = 3(x − 4):   x → −4 → ×3 → y      input 10: 10 − 4 = 6, 6 × 3 = 18
y = 3x − 4:     x → ×3 → −4 → y      input 10: 10 × 3 = 30, 30 − 4 = 26
```

The same two operations in a different order give a different function.

| Expression | Machine |
|---|---|
| y = x/2 + 5 | x → ÷2 → +5 → y |
| y = (x + 1)/4 | x → +1 → ÷4 → y |
| y = 2x² | x → square → ×2 → y |
| y = (2x)² | x → ×2 → square → y |
| y = 10 − x | x → subtract from 10 → y |

The last row shows why "−x then +10" is clumsy. A box such as "subtract from 10" is clearer, and it matters for inverses.

**Worked example 2.** A machine multiplies by 4, then subtracts 1, then divides by 3. Write the output y in terms of the input x, and find the output for input 7.

```
×4:   4x
−1:   4x − 1
÷3:   y = (4x − 1)/3
input 7: (28 − 1)/3 = 27/3 = 9
```

The bracket (or a fraction line under the whole of 4x − 1) is essential. Writing 4x − 1/3 would divide only the 1.

### Tables of inputs and outputs

**Worked example 3.** Complete a table for y = x² − 1 with inputs −2, −1, 0, 1 and 2.

| Input x | −2 | −1 | 0 | 1 | 2 |
|---|---|---|---|---|---|
| Output y | 3 | 0 | −1 | 0 | 3 |

Every input has exactly one output, but different inputs can share an output: −2 and 2 both give 3. That will matter when we try to reverse this machine.

To find an input from an output, set up an equation. For y = 3(x − 4) and output 21: 3(x − 4) = 21, so x − 4 = 7 and x = 11.

## Inverse functions (Higher tier only)

The inverse function reverses the process: it takes an output back to the input that produced it.

**Method 1: reverse the machine.** Undo each box, in the opposite order.

**Worked example 4 (Higher tier only).** Find the inverse of y = x/2 + 5.

```
machine:  x → ÷2 → +5 → y
reverse:  x → −5 → ×2 → y
inverse:  y = 2(x − 5)
```

Check with a number: input 6 gives 6/2 + 5 = 8. The inverse takes 8 to 2(8 − 5) = 6, back to the start.

**Method 2: swap and rearrange.** Write x where y was and y where x was, then make y the subject. This is safer when the machine has awkward boxes.

**Worked example 5 (Higher tier only).** Find the inverse of y = 4 − 3x.

```
swap:        x = 4 − 3y
rearrange:   3y = 4 − x
inverse:     y = (4 − x)/3
```

Check: input 2 gives 4 − 6 = −2. The inverse takes −2 to (4 + 2)/3 = 2.

Reversing the machine box by box would need care here: the original is "×3, then subtract from 4". Undoing "subtract from 4" is again "subtract from 4", and then ÷3 undoes ×3. Both methods agree.

**Self-inverse functions.** Some functions are their own inverse. For y = 10 − x, input 3 gives 7 and input 7 gives 3. For y = 12/x, input 4 gives 3 and input 3 gives 4.

**When a machine cannot be reversed.** For y = x² − 1, the output 3 came from both 2 and −2, so a single reverse machine cannot know which input to return. Questions at this level choose functions where the reverse works, or limit the inputs to positive numbers.

## Composite functions (Higher tier only)

A composite function applies one function and then feeds its output straight into a second function.

**Worked example 6 (Higher tier only).** Machine P is y = x + 3. Machine Q is y = 2x². (a) Find expressions for "P then Q" and "Q then P". (b) Find the input that gives the same output from both.

```
(a) P then Q:  x → +3 → square → ×2,   y = 2(x + 3)²
    Q then P:  x → square → ×2 → +3,   y = 2x² + 3

(b) 2(x + 3)² = 2x² + 3
    2x² + 12x + 18 = 2x² + 3
    12x = −15
    x = −1.25
```

Check: P then Q gives (1.75)² × 2 = 6.125; Q then P gives 2 × 1.5625 + 3 = 6.125.

The two orders give different functions, so always read which machine comes first. In "P then Q", substitute the whole expression for P wherever x appears in Q.

### Undoing a composite

To reverse "A then B", undo B first and then undo A, just as you take off your shoes before your socks.

**Worked example 7 (Higher tier only).** Machine A is y = 2x − 1 and machine B is y = x/3. Find the inverse of "A then B".

```
A then B:   y = (2x − 1)/3          (×2, −1, ÷3)
reverse:    ×3, then +1, then ÷2
inverse:    y = (3x + 1)/2
```

Check: input 5 gives (10 − 1)/3 = 3, and the inverse takes 3 to (9 + 1)/2 = 5.

## Common mistakes

- Putting machine boxes in the order they are read from left to right, rather than the order of operations: y = 3(x − 4) starts with −4.
- Losing brackets when writing an expression from a machine, so only part of the expression is divided.
- Reversing each box but keeping the original order, which gives the wrong inverse.
- Undoing "subtract from 10" with "add 10".
- Applying the two functions of a composite in the wrong order.
- Substituting only the letter, not the whole expression, when forming a composite.
- Not checking an inverse with a number, which takes seconds and catches most errors.

## Exam technique for OCR command words

- **Write down** or **Find the output**: one line of working per box is enough, but show each step.
- **Write an expression for** or **Find y in terms of x**: give a single simplified expression, with brackets wherever an operation applies to more than one term.
- **Find the inverse** (Higher tier only): give your answer as y = ... and check it with one input.
- **Show that** a composite is a given expression (Higher tier only): write the substitution line, then expand fully. The marks are for the steps, since the answer is printed.
- **Explain** why two orders differ: give one input and the two different outputs.

## Next steps

- Condense the methods with the [language of functions revision notes](/resources/ocr-gcse-mathematics-j560-language-of-functions-ocr-gcse-maths-revision-notes/).
- Test yourself with the [language of functions practice questions](/resources/ocr-gcse-mathematics-j560-language-of-functions-ocr-gcse-maths-practice/).
- Revise rearranging in the [algebraic formulae guide](/resources/ocr-gcse-mathematics-algebraic-formulae-forming-substituting-rearranging/), which is the skill behind the swap-and-rearrange method.

## Official syllabus

OCR GCSE (9-1) Mathematics J560, Version 2.1 (August 2026), for first assessment in 2017, published by OCR. Section 6.05, Language of functions.
