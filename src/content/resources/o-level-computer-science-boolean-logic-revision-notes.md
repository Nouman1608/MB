---
title: "O Level Computer Science: Boolean Logic — Revision Notes"
resourceType: "revision-notes"
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
description: "Boolean logic recall notes for Cambridge O Level Computer Science 2210: gate output patterns, words-to-gates, truth table drills and circuit-drawing rules."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

Topic 10 of Cambridge O Level Computer Science (2210) can be revised almost entirely from one table of gate outputs and a handful of conversion methods. On Paper 2 you will be asked to name gates, complete truth tables, write logic expressions and draw circuits from statements, expressions or tables — for up to three inputs and one output, with every gate except NOT limited to two inputs.

Condensed for the final weeks. For the full explanation and worked conversions, use the
[Boolean logic study guide](/resources/o-level-computer-science-boolean-logic/); to practise, use the
[Boolean logic practice questions](/resources/o-level-computer-science-boolean-logic-practice/).

## Syllabus coverage (2210, 2026–2028)

| Ref | What you must be able to do |
|---|---|
| 10.1 | Identify and use the standard logic gate symbols |
| 10.2 | Define the functions of NOT, AND, OR, NAND, NOR and XOR (EOR), including outputs for all inputs |
| 10.3(a) | Create a logic circuit from a problem statement, logic expression or truth table |
| 10.3(b) | Complete a truth table from a problem statement, logic expression or logic circuit |
| 10.3(c) | Write a logic expression from a problem statement, logic circuit or truth table |

## Gate fingerprints

Read each gate's output column top to bottom for inputs 00, 01, 10, 11. Each gate has its own four-digit pattern.

| Gate | Output pattern | Memory hook |
|---|---|---|
| AND | 0 0 0 1 | only the last row |
| OR | 0 1 1 1 | all but the first row |
| NAND | 1 1 1 0 | AND flipped |
| NOR | 1 0 0 0 | OR flipped |
| XOR | 0 1 1 0 | the middle two — inputs differ |
| NOT (one input: 0, 1) | 1 0 | flip it |

If a question gives you an output column and asks you to name the gate, match it to a fingerprint.

## Words → gates

| Words in the statement | Write |
|---|---|
| "and", "both", "as well as", "only while" | AND |
| "or", "either", "at least one" | OR |
| "not", "is off", "is not", input value 0 is the condition | NOT |
| "either … but not both", "exactly one", "different" | XOR |
| "not both" | NAND |
| "neither … nor" | NOR |

## Method cards

**Truth table from an expression:** inputs in order 000 → 111; one working column per bracket; final column last; check two rows by hand.

**Expression from a circuit:** label the output of each gate as you move left to right; nest them in brackets.

**Expression from a truth table:** for each row with X = 1, AND the three inputs (put NOT before any input that is 0); join the row-terms with OR.

**Circuit from an expression:** one gate symbol for every operator; draw the inner brackets first; split an input line if it is used twice; label A, B, C and X.

## Drill 1

`X = (A OR B) AND NOT C`

| A | B | C | A OR B | NOT C | X |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 1 | 1 |
| 0 | 1 | 1 | 1 | 0 | 0 |
| 1 | 0 | 0 | 1 | 1 | 1 |
| 1 | 0 | 1 | 1 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 1 | 1 | 0 | 0 |

## Drill 2

*A vending machine releases a drink (X = 1) when a coin has been inserted (C = 1) and the selected drink is not sold out (S = 1 means sold out).*

`X = C AND NOT S` — the NOT is needed because the condition you want is S = 0.

## Drill 3

*A circuit: A goes through a NOT gate; its output and B go into an OR gate; that output and C go into a NAND gate, giving X.*

`X = (NOT A OR B) NAND C`. When A = 1, B = 0, C = 1: NOT A = 0; 0 OR 0 = 0; 0 NAND 1 = 1, so X = 1.

## Circuit-drawing rules from the syllabus

- Use the standard symbols from section 4 of the syllabus.
- Every gate except NOT has exactly two inputs.
- Draw for the statement given — do not simplify.
- Maximum of three inputs and one output.

## 2210 and its sibling syllabus

Topic 10 in 2210 has the same learning outcomes and gate symbols as Cambridge IGCSE Computer Science (0478).

## Exam traps

Drawn from our [practice page](/resources/o-level-computer-science-boolean-logic-practice/), which paraphrases the Cambridge 2210 June 2025 Paper 22 mark scheme and lists where marks are usually lost:

- XOR outputs were credited as 1 **only** when the two inputs differ; treating the 1, 1 row as 1 confuses XOR with OR.
- In a question where two inputs were 0 when the condition was met, the expression needed NOT on those inputs. Read what 0 and 1 mean for each input.
- Eight-row truth tables were marked in bands (four marks for all eight outputs, three for six or seven, and so on), so working columns that prevent slips are worth the time.
- Missing brackets change the meaning: `NOT A AND B OR C` is ambiguous.
- NAND and NOR are easily swapped when naming a gate from its outputs — use the fingerprints.

## Frequently asked questions

**How do I tell NAND from NOR quickly?**
NAND outputs 0 only when both inputs are 1 (pattern 1110). NOR outputs 1 only when both inputs are 0 (pattern 1000).

**How many rows are in a truth table for three inputs?**
Eight: every combination from 000 to 111.

**What does EOR mean?**
EOR is another name for XOR, exclusive OR. The 2210 syllabus lists the gate as XOR (EOR).

## Self-test

1. Name the gate with the output pattern 1 0 0 0.
2. Write an expression for: the heater (X) is on when the room is cold (C = 1) and the window is not open (W = 1 means open).
3. Give X for `X = A XOR (B AND C)` when A = 1, B = 1, C = 1.
4. How many gates are needed to draw `X = (A AND B) OR (NOT C)`?
5. Why must a three-input AND in an expression be drawn as two gates?

**Answers:** 1. NOR. 2. `X = C AND NOT W`. 3. B AND C = 1; 1 XOR 1 = 0, so X = 0. 4. Three: AND, NOT and OR. 5. The 2210 syllabus limits all gates except NOT to two inputs.
