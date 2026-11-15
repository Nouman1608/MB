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
reviewNote: "2026-11-08: credited to harris-khan (accountable teacher, D-379)."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-boolean-logic--01-bl-gates.webp" width="900" height="925" alt="Six boxes show the NOT, AND, OR, NAND, NOR and XOR (EOR) symbols, each with the question it answers. A small circle on an output means the output is inverted." loading="lazy">
  <figcaption>The six gates, their symbols and the question each one answers.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-boolean-logic--02-bl-truth-table.webp" width="900" height="674" alt="A four-row truth table for inputs A and B in binary counting order with columns NOT A, AND, OR, NAND, NOR and XOR. Arrows show NAND is the inverse of AND and NOR is the inverse of OR." loading="lazy">
  <figcaption>All six gates side by side for the four input combinations.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-boolean-logic--04-bl-ex1-buzzer.webp" width="900" height="942" alt="The expression X = (A XOR B) AND L, its circuit (A and B into XOR, then with L into AND) and the eight-row truth table where X is 1 only for rows 011 and 101." loading="lazy">
  <figcaption>The quiz buzzer goes from words to expression, circuit and truth table.</figcaption>
</figure>


## Method cards

**Truth table from an expression:** inputs in order 000 → 111; one working column per bracket; final column last; check two rows by hand.

**Expression from a circuit:** label the output of each gate as you move left to right; nest them in brackets.

**Expression from a truth table:** for each row with X = 1, AND the three inputs (put NOT before any input that is 0); join the row-terms with OR.

**Circuit from an expression:** one gate symbol for every operator; draw the inner brackets first; split an input line if it is used twice; label A, B, C and X.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-boolean-logic--03-bl-four-forms.webp" width="900" height="976" alt="Seven arrows link words, expression, circuit and truth table, each labelled with the one-line method from the lesson, such as letter each condition or OR the rows where X = 1." loading="lazy">
  <figcaption>How to convert between problem statement, expression, circuit and truth table.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-boolean-logic--06-bl-ex3-table.webp" width="900" height="900" alt="An eight-row table with the two rows where X is 1 highlighted. Each becomes an AND term, and the two terms join through an OR gate. A small circuit shows a three-input AND built from two two-input ANDs." loading="lazy">
  <figcaption>Turn each 1-row into an AND term, then OR the terms.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-boolean-logic--07-bl-ex4-inverted.webp" width="900" height="850" alt="The safe opens when the code is correct (C = 1) and the alarm is not triggered (T = 0). A NOT gate on T feeds an AND gate with C; only the row C = 1, T = 0 gives X = 1." loading="lazy">
  <figcaption>X = C AND NOT T, because a 0 on the alarm input is the wanted condition.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-boolean-logic--05-bl-ex2-circuit.webp" width="900" height="1002" alt="A circuit with NAND (A,B), OR (B,C) and an AND giving X, with the line from B splitting to two gates, and the eight-row table with one working column per gate." loading="lazy">
  <figcaption>Reading a circuit gate by gate to get X = (A NAND B) AND (B OR C).</figcaption>
</figure>


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
