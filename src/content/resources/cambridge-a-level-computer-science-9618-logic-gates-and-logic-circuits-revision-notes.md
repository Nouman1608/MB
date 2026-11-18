---
title: "Cambridge A Level Computer Science (9618): Logic Gates and Logic Circuits -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 3 – Hardware"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 3.2
syllabusTopics:
  - qualification: "a-level"
    topic: "hardware"
    subtopic: "logic-gates-and-logic-circuits"
description: "Revision notes for Cambridge 9618 section 3.2: gate truth tables, symbols, conversions between circuits, expressions and tables, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 3.2 Logic Gates and Logic Circuits of the Cambridge International AS & A Level Computer Science (9618) syllabus for 2026, AS content assessed on Paper 1. The [logic gates study guide](/resources/cambridge-a-level-computer-science-9618-logic-gates-and-logic-circuits/) has full worked examples; the [logic gates practice questions](/resources/cambridge-a-level-computer-science-9618-logic-gates-and-logic-circuits-practice/) test every conversion.

**Syllabus rule to remember:** all gates except NOT have **two inputs only**.

## Key terms

| Term | Meaning |
|---|---|
| Logic gate | An electronic component that performs a Boolean operation on one or two binary inputs |
| Truth table | A table listing the output for every possible combination of inputs |
| Logic expression | A statement of the output using AND, OR, NOT, NAND, NOR, XOR and brackets |
| Logic circuit | Gates connected so that outputs of some gates are inputs to others |
| Intermediate output | The output of a gate inside a circuit, used as an input to a later gate |
| Sum of products | An expression formed by ORing together one AND term for each row where the output is 1 |

## The gates in one table

| A | B | NOT A | A AND B | A OR B | A NAND B | A NOR B | A XOR B |
|---|---|---|---|---|---|---|---|
| 0 | 0 | 1 | 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 0 | 1 | 1 | 0 | 1 |
| 1 | 1 | 0 | 1 | 1 | 0 | 0 | 0 |

Memory hooks:

- **AND**: 1 only if all inputs are 1.
- **OR**: 0 only if all inputs are 0.
- **NAND**: 0 only if all inputs are 1 (opposite of AND).
- **NOR**: 1 only if all inputs are 0 (opposite of OR).
- **XOR**: 1 if inputs differ.

## Symbols (draw them, do not describe them, in the exam)

- NOT: triangle + bubble.
- AND: D shape (flat back, round front).
- OR: curved back, pointed front.
- NAND / NOR: AND / OR + bubble at the output.
- XOR: OR with a second curved line behind the inputs.

## Conversion recipes

| From → To | Method |
|---|---|
| Problem → expression | Translate phrase by phrase; bracket each gate's result; watch what 1 means for each input |
| Expression → circuit | Innermost brackets first; one gate per operator; two inputs per gate |
| Circuit → expression | Start at the output and work back, writing each gate's inputs in brackets |
| Expression or circuit → truth table | Binary-ordered input rows; a working column per gate; then output |
| Truth table → expression | Sum of products: one AND term per output-1 row (NOT for 0 inputs), terms joined by OR |
| Truth table → circuit | Write the sum-of-products expression, then draw it |

**Three-input terms** need two 2-input gates: (A AND B) AND C.

## Quick worked reminder

Expression: X = NOT (A OR B) OR (A AND C).

| A | B | C | A OR B | NOT (A OR B) | A AND C | X |
|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 0 | 1 |
| 0 | 0 | 1 | 0 | 1 | 0 | 1 |
| 0 | 1 | 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 1 | 1 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 | 0 | 0 | 0 |
| 1 | 1 | 1 | 1 | 0 | 1 | 1 |

NOT (A OR B) could also be drawn as a single NOR gate.

## Phrase → gate

- "both", "and" → AND
- "either", "at least one" → OR
- "exactly one", "but not both" → XOR
- "not both" → NAND
- "neither... nor" → NOR
- "is not", "is off" → NOT

## Exam traps

- Rows out of binary order, or 7 rows instead of 8.
- XOR and OR differ only in the 1, 1 row.
- NAND and NOR differ in the middle two rows.
- Three-input gates drawn when the syllabus allows only two inputs.
- Missing brackets in expressions.
- Missing the bubble on NOT, NAND or NOR symbols.
- Forgetting that one input can feed more than one gate.
- In sum of products, writing B instead of NOT B for a row where B = 0.

## Self-test

1. Which gate gives 1 only when both inputs are 0?
2. Which gate gives 0 only when both inputs are 1?
3. Complete: A XOR B for A = 1, B = 1 is ...
4. How many rows does a truth table with three inputs have?
5. Write an expression for: "The alarm sounds (X) if the window is open (W = 1) or the door is open (D = 1), but only when the system is armed (S = 1)."
6. Give X for W = 1, D = 0, S = 0 in question 5.
7. Write a sum-of-products expression for a two-input table where X = 1 only in rows A = 0, B = 1 and A = 1, B = 0.
8. Which single gate does your answer to question 7 represent?
9. How many 2-input AND gates are needed for A AND B AND C?
10. Write the expression for this circuit: A and B go into a NOR gate; its output and C go into an AND gate giving X.
11. Give X for A = 0, B = 0, C = 1 in question 10.
12. Why is it useful to add intermediate columns to a truth table?

### Answers

1. **NOR**.
2. **NAND**.
3. **0**.
4. 2³ = **8**.
5. X = **(W OR D) AND S**.
6. W OR D = 1, AND S = 0, so **X = 0**.
7. X = **(NOT A AND B) OR (A AND NOT B)**.
8. **XOR**.
9. **Two**: (A AND B) AND C.
10. X = **(A NOR B) AND C**.
11. A NOR B = 1; 1 AND 1 = **1**.
12. Each gate's output is worked out once and then reused, so errors are less likely and the examiner can follow the method.

## Official syllabus

Cambridge International AS & A Level Computer Science (9618) syllabus for 2026, Subject content, section 3.2 Logic Gates and Logic Circuits. Published by Cambridge International.
