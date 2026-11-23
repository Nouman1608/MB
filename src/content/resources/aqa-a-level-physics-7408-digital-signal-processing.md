---
title: "AQA A-Level Physics (7408): Digital signal processing"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Electronics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 13.5
syllabusTopics:
  - qualification: "a-level"
    topic: "electronics-aqa-alevel"
    subtopic: "digital-signal-processing-aqa-alevel"
description: "Study guide to AQA A-Level Physics 7408 section 3.13.5: Boolean algebra, logic gates and truth tables, binary, BCD and Johnson counters, modulo-n and astables."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section 3.13.5, Digital signal processing, of the AQA AS and A-level Physics specification (7407/7408). It has three content statements: 3.13.5.1 Combinational logic, 3.13.5.2 Sequential logic and 3.13.5.3 Astables. The section is part of the A-level only Electronics option, assessed in Paper 3 Section B. The [Electronics study guide](/resources/aqa-a-level-physics-electronics/) gives a brief overview; this page works through truth tables, circuit design, counter sequences and clock timing in more detail. Follow it with the [digital signal processing revision notes](/resources/aqa-a-level-physics-7408-digital-signal-processing-revision-notes/) and the [digital signal processing practice questions](/resources/aqa-a-level-physics-7408-digital-signal-processing-practice/).

## What the specification asks for

| Content statement | Required |
|---|---|
| 3.13.5.1 Combinational logic | Boolean algebra related to truth tables and gates (Ā = not A, A · B = A and B, A + B = A or B); identify and use AND, NAND, OR, NOR, NOT and EOR gates in combination; construct and deduce a logic circuit from a truth table |
| 3.13.5.2 Sequential logic | Binary, BCD and Johnson counters; inputs (clock, reset, up/down); outputs; a modulo-n counter made from a basic counter with logic driving a reset pin |
| 3.13.5.3 Astables | The astable as an oscillator providing a clock pulse; clock rate (frequency), pulse width, period, duty cycle, mark-to-space ratio; varying the running frequency with an external RC network |

Gates and counters are treated as building blocks: their internal circuits are not required. No particular astable circuit or device (for example the 555 chip) is required.

## Combinational logic

In a **combinational** circuit, the output depends only on the present inputs. Each gate is defined by its truth table.

| A | B | AND A · B | NAND | OR A + B | NOR | EOR |
|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 0 | 1 | 0 | 0 |

NOT has one input: Ā is 1 when A is 0. NAND is AND followed by NOT; NOR is OR followed by NOT. EOR (exclusive OR) gives 1 when the inputs differ.

A useful reading of each gate:
- AND: 1 only when **all** inputs are 1.
- OR: 1 when **any** input is 1.
- NAND: 0 only when all inputs are 1.
- NOR: 1 only when all inputs are 0.

### Deducing a truth table from a circuit

Work in columns. Label every intermediate output, fill each column from the ones before it, and only then find the final output.

### Worked example 1: analysing a circuit

Inputs A and B go into a NOR gate. Its output and input C go into an AND gate, giving Q. Find the Boolean expression and the truth table.

```
Q = (NOT (A + B)) · C
```

| A | B | C | A + B | NOT(A + B) | Q |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 0 | 1 | 1 |
| 0 | 1 | 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 | 0 | 0 |
| 1 | 0 | 0 | 1 | 0 | 0 |
| 1 | 0 | 1 | 1 | 0 | 0 |
| 1 | 1 | 0 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 |

Q is 1 only for A = 0, B = 0, C = 1. Three inputs give 2³ = 8 rows; list them in binary order so none is missed.

### Constructing a circuit from a truth table

1. Find every row where the output is 1.
2. For each such row, write an AND term that is 1 only for that combination, using NOT on any input that is 0.
3. OR the terms together.
4. Simplify if you can, then draw the gates.

### Worked example 2: a majority voter

Three judges press buttons A, B and C. A light Q comes on when at least two press. Design the circuit.

| A | B | C | Q |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 |

Reading the problem directly, Q is 1 whenever any pair is pressed:

```
Q = A · B + B · C + A · C
```

Circuit: three 2-input AND gates (A with B, B with C, A with C) feeding a 3-input OR gate. Check row 111: every AND gives 1, so Q = 1, as required.

### Boolean algebra and truth tables

Two expressions are equivalent if they give the same truth table. NOT(A · B) and Ā + B̄ match on every row (1, 1, 1, 0), so one NAND gate can replace a NOT on each input followed by an OR.

## Sequential logic: counters

In a **sequential** circuit the output depends on the sequence of past inputs, so the circuit has memory. Counters change state on each **clock** pulse.

**Inputs.**
- **Clock**: each pulse advances the count by one.
- **Reset**: returns all outputs to 0.
- **Up/down**: chooses whether the count rises or falls.

**Outputs.** One line per binary digit. For a 4-bit counter, Q₀ has weight 1, Q₁ weight 2, Q₂ weight 4 and Q₃ weight 8.

| Counter | Sequence | Number of states |
|---|---|---|
| Binary (n outputs) | 0 to 2ⁿ − 1, then back to 0 | 2ⁿ |
| BCD | 0 to 9 (0000 to 1001), then back to 0 | 10 |
| Johnson (n stages) | One output changes per pulse | 2n |

**Binary counter as a frequency divider.** Q₀ changes on every clock pulse, so its frequency is half the clock frequency; Q₁ is a quarter, Q₂ an eighth. A 1.0 kHz clock gives 500 Hz at Q₀ and 125 Hz at Q₂.

**BCD counter.** Binary-coded decimal counts one decimal digit. Each digit of a display needs its own BCD counter; when one passes from 9 to 0 it sends a pulse to the next.

**Johnson counter.** A 4-stage Johnson counter fills with 1s, then empties:

```
0000 → 1000 → 1100 → 1110 → 1111 → 0111 → 0011 → 0001 → 0000
```

There are 2 × 4 = 8 states, and only one output changes at each step, which avoids momentary false states.

### Modulo-n counters

A **modulo-n** counter counts 0 to n − 1. Take a binary counter with enough outputs and connect logic to the reset pin so that it resets the moment the count reaches n.

1. Write n in binary.
2. AND together the outputs that are 1 in n.
3. Connect the AND output to reset.

### Worked example 3: a modulo-5 counter

```
5 = 101 → AND Q₂ and Q₀ → reset
sequence shown: 000, 001, 010, 011, 100, (101 resets at once) → 000
```

The state 101 exists only for an instant, so the counter displays 0 to 4. No smaller count can trigger the reset early: any number with all the 1-bits of n is at least n. A modulo-6 counter would AND Q₂ and Q₁; a modulo-10 counter from a 4-bit binary counter would AND Q₃ and Q₁, behaving like a BCD counter.

## Astables

An **astable** circuit has no stable state: its output switches continuously between high and low, providing the **clock pulse** for counters.

| Quantity | Definition |
|---|---|
| Mark time | Time the output is high (the pulse width) |
| Space time | Time the output is low |
| Period T | Mark time + space time |
| Clock rate (frequency) f | 1/T |
| Duty cycle | Mark time / T, often as a percentage |
| Mark-to-space ratio | Mark time / space time |

**Varying the frequency.** An external resistor and capacitor set the timing. A larger R or C makes the capacitor take longer to charge and discharge between switching levels, so the period lengthens and the frequency falls. If both the mark and space times are proportional to RC, doubling C doubles the period and halves the frequency without changing the duty cycle.

### Worked example 4: clock timing

An astable has a mark time of 0.60 ms and a space time of 0.40 ms. It clocks a binary counter.

```
T = 0.60 + 0.40 = 1.00 ms         f = 1 / 1.00 ms = 1.0 kHz
duty cycle = 0.60 / 1.00 = 60%    mark-to-space = 0.60 / 0.40 = 3 : 2
counter output Q₁ frequency = 1.0 kHz / 4 = 250 Hz
C doubled (both times ∝ RC): T = 2.00 ms, f = 500 Hz, duty cycle still 60%
```

## Common mistakes

- Missing rows in a truth table: n inputs need 2ⁿ rows.
- Confusing EOR with OR on the 1, 1 row.
- Giving a Johnson counter 2ⁿ states instead of 2n.
- For a modulo-n counter, decoding n − 1 instead of n.
- Mixing up duty cycle (mark / period) and mark-to-space ratio (mark / space).
- Saying a larger capacitor raises the clock frequency.

## Exam technique

- **Deduce** or **complete** a truth table: show intermediate columns; they earn credit even if the final column slips.
- **Construct** or **design** a circuit: give the Boolean expression, then name each gate and its inputs in words.
- **State** questions on counters want the sequence or the number of states, not a description of flip-flops.
- **Calculate** questions on astables: write period first, then frequency, duty cycle and ratio, each with its unit or as a ratio.

## Next steps

Condense this page with the [digital signal processing revision notes](/resources/aqa-a-level-physics-7408-digital-signal-processing-revision-notes/), then try the [digital signal processing practice questions](/resources/aqa-a-level-physics-7408-digital-signal-processing-practice/). Clock-driven timing appears again in time-division multiplexing in [data communication systems](/resources/aqa-a-level-physics-7408-data-communication-systems/).

## Official syllabus

AQA AS and A-level Physics (7407/7408) specification, AS and A-level exams June 2016 onwards, published by AQA. Section 3.13.5 Digital signal processing (A-level only), within section 3.13 Electronics.
