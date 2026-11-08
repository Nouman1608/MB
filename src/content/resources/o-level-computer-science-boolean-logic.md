---
title: "O Level Computer Science: Boolean Logic (Cambridge 2210)"
resourceType: "study-guides"
subject: "computer-science"
level: ["o-levels"]
topic: "Boolean logic"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 10
syllabusTopics:
  - qualification: "o-level"
    topic: "boolean-logic-2210"
description: "Topic 10 guide for Cambridge O Level Computer Science 2210: six logic gates, truth tables, expressions and circuits, with worked conversions between all forms."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Topic 10 of Cambridge O Level Computer Science (2210) is about logic gates — the simple circuits that combine binary inputs into a binary output — and about describing the same logic in four ways: as a problem statement, a logic expression, a logic circuit and a truth table. The exam expects you to convert from any one of these to any other, for circuits of up to three inputs and one output.

## Where Topic 10 sits in 2210

Topic 10 closes the "Algorithms, programming and logic" half of the syllabus and is assessed on Paper 2 (1 hour 45 minutes, 75 marks). It has the same content as Topic 10 of Cambridge IGCSE Computer Science (0478). The standard gate symbols you must use are printed in section 4 of the syllabus. Two rules from the syllabus shape every answer: NOT is the only single-input gate, and all other gates are limited to two inputs; and circuits must be drawn for the statement given, without simplification.

## The six gates

Think of each gate as answering a question about its inputs.

| Gate | The question it answers | Output 1 when… |
|---|---|---|
| NOT | "Is the input off?" | the input is 0 |
| AND | "Are both on?" | A = 1 and B = 1 |
| OR | "Is at least one on?" | A = 1, B = 1, or both |
| NAND | "Are they not both on?" | anything except A = 1 and B = 1 |
| NOR | "Are both off?" | A = 0 and B = 0 |
| XOR (EOR) | "Are they different?" | exactly one input is 1 |

### Symbols

- **NOT** — a triangle pointing right with a small circle (the "inversion bubble") at its tip.
- **AND** — a D shape: flat input side, rounded output side.
- **OR** — a shield or arrowhead shape with a curved input side.
- **NAND** and **NOR** — the AND and OR shapes with an inversion bubble on the output.
- **XOR** — the OR shape with an extra curved line just behind the input side.

The bubble always means "invert". That is why NAND is AND followed by NOT, and NOR is OR followed by NOT.

## Truth tables

A truth table lists every possible combination of inputs and the output for each. Two inputs give 4 rows; three inputs give 8 rows. Write the inputs in binary counting order — 000, 001, 010 … 111 — so no combination is missed. This is also the order in which Cambridge prints the input columns.

| A | B | NOT A | A AND B | A OR B | A NAND B | A NOR B | A XOR B |
|---|---|---|---|---|---|---|---|
| 0 | 0 | 1 | 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 0 | 1 | 1 | 0 | 1 |
| 1 | 1 | 0 | 1 | 1 | 0 | 0 | 0 |

## Logic expressions

A logic expression writes the circuit as a formula using the gate names, with brackets to show which gate is applied first: `X = (A NAND B) AND (B OR C)`. Without brackets an expression can mean two different circuits, so always bracket each gate's inputs.

## Converting between the four forms

| From → to | Method |
|---|---|
| Problem statement → expression | Give each condition a letter; translate "and", "or", "not", "either … but not both" (XOR) |
| Expression → circuit | One gate per operator; innermost brackets first; outputs feed the next gate |
| Circuit → expression | Work left to right, writing each gate's output as a bracketed expression |
| Expression or circuit → truth table | Add one working column per gate; fill row by row |
| Truth table → expression | For each row where X = 1, AND the inputs (NOT for a 0); OR the rows together |
| Problem statement → truth table | Decide the output for each input combination directly from the words |

## Worked example 1: from a problem statement

*A quiz buzzer light (X) comes on when exactly one of two contestants presses their button (A, B), but only while the round is live (L = 1).*

"Exactly one of two" is XOR, and "only while" means AND: `X = (A XOR B) AND L`.

| A | B | L | A XOR B | X |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 0 | 0 | 0 |
| 1 | 1 | 1 | 0 | 0 |

The circuit: A and B into an XOR gate; its output and L into an AND gate; output X.

## Worked example 2: from a circuit

*Inputs A and B go into a NAND gate. Inputs B and C go into an OR gate. The two outputs go into an AND gate, giving X.*

Expression: `X = (A NAND B) AND (B OR C)`.

| A | B | C | A NAND B | B OR C | X |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 1 | 1 | 1 | 1 |
| 0 | 1 | 0 | 1 | 1 | 1 |
| 0 | 1 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 | 0 | 0 |
| 1 | 0 | 1 | 1 | 1 | 1 |
| 1 | 1 | 0 | 0 | 1 | 0 |
| 1 | 1 | 1 | 0 | 1 | 0 |

Notice that input B feeds two gates: in the drawing the line from B splits.

## Worked example 3: from a truth table

*X = 1 only when A = 0, B = 0, C = 1 and when A = 1, B = 0, C = 0.*

Row one becomes `NOT A AND NOT B AND C`; row two becomes `A AND NOT B AND NOT C`. Join them with OR:

`X = (NOT A AND NOT B AND C) OR (A AND NOT B AND NOT C)`

If you draw this circuit, remember each three-input AND has to be built from two two-input AND gates.

## Worked example 4: an input that means "true" when it is 0

*A safe opens (X = 1) when the correct code is entered (C = 1) and the alarm is not triggered. The alarm sensor gives T = 1 when triggered.*

The condition is "T is not 1", so the expression is `X = C AND NOT T`. Always read the meaning of each input value carefully — a 0 can be the condition you want.

## How to approach it

Learn the six output columns until you can write them instantly. In every truth table, add working columns rather than computing the final output in your head. When drawing, use a ruler-straight flow from inputs on the left to X on the right, label every input and the output, and draw exactly the gates the statement describes.

## Frequently asked questions

**How many inputs can a gate have in 2210?**
NOT has one input. The syllabus limits every other gate to two inputs, and whole circuits to three inputs and one output.

**What words in a problem statement mean XOR?**
Phrases such as "either … but not both", "exactly one of" or "the two are different" describe XOR.

**Should I simplify a circuit before drawing it?**
No. The 2210 syllabus says circuits must be drawn for the statement given, without simplification.

**Why do NAND and NOR have a small circle on the symbol?**
The circle means the output is inverted. NAND is an AND gate with its output inverted; NOR is an OR gate with its output inverted.

## Official syllabus

Cambridge International, *Cambridge O Level Computer Science (2210) syllabus for examination in 2026, 2027 and 2028*: [official syllabus PDF](https://www.cambridgeinternational.org/Images/697287-2026-2028-syllabus.pdf), Subject content, section 10 "Boolean logic", and section 4 for the logic gate symbols. Checked 2026-11-08.

Next steps: revise from the [Boolean logic revision notes](/resources/o-level-computer-science-boolean-logic-revision-notes/), then try the [Boolean logic practice questions](/resources/o-level-computer-science-boolean-logic-practice/).
