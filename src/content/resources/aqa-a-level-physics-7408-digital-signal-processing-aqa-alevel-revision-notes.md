---
title: "AQA A-Level Physics (7408): Digital signal processing -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for AQA A-Level Physics 7408 section 3.13.5: gate truth tables, Boolean notation, counter sequences, modulo-n resets and astable timing, with a self-test."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 3.13.5, Digital signal processing, of the AQA AS and A-level Physics specification (7407/7408): 3.13.5.1 Combinational logic, 3.13.5.2 Sequential logic and 3.13.5.3 Astables. The section is part of the A-level only Electronics option, assessed in Paper 3 Section B. For explanations and worked examples, read the [digital signal processing study guide](/resources/aqa-a-level-physics-7408-digital-signal-processing-aqa-alevel/); then practise with the [digital signal processing practice questions](/resources/aqa-a-level-physics-7408-digital-signal-processing-aqa-alevel-practice/).

## Gates in one table

| Inputs A B | AND | NAND | OR | NOR | EOR |
|---|---|---|---|---|---|
| 0 0 | 0 | 1 | 0 | 1 | 0 |
| 0 1 | 0 | 1 | 1 | 0 | 1 |
| 1 0 | 0 | 1 | 1 | 0 | 1 |
| 1 1 | 1 | 0 | 1 | 0 | 0 |

NOT: output is the opposite of the single input.

## Key terms

| Term | Meaning |
|---|---|
| Ā | NOT A |
| A · B | A AND B |
| A + B | A OR B |
| Combinational logic | Output depends only on the present inputs |
| Sequential logic | Output depends on the order of past inputs; the circuit has memory |
| Truth table | Every input combination (2ⁿ rows for n inputs) with its output |
| Clock input | Each pulse advances a counter by one |
| Reset input | Returns all counter outputs to 0 |
| Up/down input | Selects counting up or counting down |
| Binary counter | n outputs counting 0 to 2ⁿ − 1 |
| BCD counter | Counts 0 to 9 in binary-coded decimal, then returns to 0 |
| Johnson counter | n stages giving 2n states, one output changing per pulse |
| Modulo-n counter | Counter that resets on reaching n, showing 0 to n − 1 |
| Astable | Circuit with no stable state that oscillates to give a clock pulse |
| Pulse width | Time the output is high (mark time) |
| Duty cycle | Mark time / period |
| Mark-to-space ratio | Mark time / space time |

## Condensed recall

**Combinational logic**
- AND: all 1s. OR: any 1. NAND: 0 only for all 1s. NOR: 1 only for all 0s. EOR: inputs differ.
- Analyse a circuit by labelling every intermediate point and filling a column for each.
- Design from a truth table: one AND term per output-1 row (NOT on inputs that are 0), then OR the terms.
- Equivalent expressions have identical truth tables, for example NOT(A · B) and Ā + B̄.

**Counters**
- Binary output weights: Q₀ = 1, Q₁ = 2, Q₂ = 4, Q₃ = 8.
- Q₀ runs at half the clock frequency, Q₁ at a quarter, and so on.
- BCD: 0000 to 1001, then 0000.
- 3-stage Johnson: 000, 100, 110, 111, 011, 001 (6 states).
- Modulo-n: write n in binary, AND the outputs that are 1, drive reset. The state n lasts only an instant.

**Astables**
- T = mark + space; f = 1/T.
- Larger R or C gives a longer period and a lower frequency.
- If mark and space are both set by the same RC, changing C changes f but not the duty cycle.
- Knowledge of a particular astable circuit or chip is not required.

## Modulo-n reset table

| Modulo | n in binary | AND these outputs |
|---|---|---|
| 3 | 011 | Q₁, Q₀ |
| 5 | 101 | Q₂, Q₀ |
| 6 | 110 | Q₂, Q₁ |
| 7 | 111 | Q₂, Q₁, Q₀ |
| 9 | 1001 | Q₃, Q₀ |
| 10 | 1010 | Q₃, Q₁ |

## Exam traps

- Too few rows: three inputs need eight.
- Treating EOR as OR: they differ on the 1, 1 row.
- 2ⁿ states for a Johnson counter instead of 2n.
- Decoding n − 1 for a modulo-n counter, which gives a modulo-(n − 1) count.
- Duty cycle written as mark/space.
- Saying a larger capacitor increases the clock frequency.
- Describing gate internals: gates are building blocks only.

## Self-test

1. Write the Boolean expression for the output of a NOR gate with inputs A and B.
2. For which input combination does a NAND gate give 0?
3. How many rows does a truth table for four inputs need?
4. Inputs A and B feed an EOR gate; its output and C feed an AND gate. Give Q for A = 1, B = 0, C = 1.
5. Write a Boolean expression for "Q is 1 when A is 1 and B is 0".
6. State the outputs of a 3-bit binary counter after 6 clock pulses from reset.
7. What does a BCD counter show after the pulse that follows 1001?
8. List the states of a 2-stage Johnson counter.
9. Which outputs drive the reset for a modulo-12 counter?
10. An astable has mark time 3.0 ms and space time 2.0 ms. Find f, duty cycle and mark-to-space ratio.
11. A 2.0 kHz clock drives a binary counter. What is the frequency at Q₂?
12. The resistor in an astable's RC network is halved. What happens to the frequency?

### Answers

1. Q = NOT(A + B).
2. A = 1 and B = 1 (all inputs 1).
3. 2⁴ = 16.
4. EOR gives 1, AND with C = 1 gives Q = 1.
5. Q = A · B̄.
6. 110 (Q₂ = 1, Q₁ = 1, Q₀ = 0).
7. 0000.
8. 00, 10, 11, 01 (4 states).
9. 12 = 1100, so AND Q₃ and Q₂.
10. T = 5.0 ms, f = 200 Hz; duty cycle 60%; mark-to-space 3 : 2.
11. 2.0 kHz / 8 = 250 Hz.
12. The period halves (if both times scale with RC), so the frequency doubles.

## Official syllabus

AQA AS and A-level Physics (7407/7408) specification, AS and A-level exams June 2016 onwards, published by AQA. Section 3.13.5 Digital signal processing (A-level only), within section 3.13 Electronics.
