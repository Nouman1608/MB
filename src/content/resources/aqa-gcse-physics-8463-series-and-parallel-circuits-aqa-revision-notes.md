---
title: "AQA GCSE Physics (8463): Series and parallel circuits -- Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["gcse"]
topic: "Electricity"
boards: ["aqa"]
qualifications: ["gcse"]
syllabusCodes: ["8463"]
syllabusSeries: "For first teaching 2016"
order: 2.2
syllabusTopics:
  - qualification: "gcse"
    topic: "electricity-aqa-gcse"
    subtopic: "series-and-parallel-circuits-aqa"
description: "Condensed AQA GCSE Physics 4.2.2 notes: series and parallel rules, why resistance rises or falls, equivalent resistance, sensor circuits and a self-test."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Recall notes for **4.2.2 Series and parallel circuits** in AQA GCSE Physics (8463). Paper 1, both tiers, no
Higher-only content.

Full explanations and five worked examples are in the [series and parallel circuits study guide](/resources/aqa-gcse-physics-8463-series-and-parallel-circuits-aqa/).
Test yourself with the [series and parallel circuits practice questions](/resources/aqa-gcse-physics-8463-series-and-parallel-circuits-aqa-practice/).

## The rules

| | Series | Parallel |
|---|---|---|
| Current | Same through each component | Branch currents add up to the total |
| pd | Supply pd shared between components | Same pd across each branch |
| Resistance | R_total = R₁ + R₂ | Less than the smallest individual resistor |
| Adding another resistor | Total resistance goes up | Total resistance goes down |
| One lamp breaks | Every component goes off | Other branches keep working |

The equation R_total = R₁ + R₂ must be recalled. You do **not** calculate the total of two resistors in parallel.

## Key terms

| Term | Meaning |
|---|---|
| Series | Components joined end to end in one loop: a single path for charge |
| Parallel | Components on separate branches between the same two points |
| Branch | One of the separate paths in a parallel circuit |
| Junction | A point where current splits or joins |
| Equivalent resistance | The single resistance that would draw the same current from the same supply |
| Sensor circuit | A thermistor or LDR in series with a fixed resistor, used for measurement or testing |

## Why the total resistance changes

- **Series:** charge passes through each resistor in turn, so adding one makes it harder for charge to flow; the
  current falls for the same pd, so total resistance rises.
- **Parallel:** each new resistor is an extra path; the total current rises for the same pd, so total resistance
  falls.

## Calculation routes

**Series (four steps):** add resistances → I = V ÷ R_total → V = IR for each → check the pds sum to the supply.

**Parallel:** each branch has the full supply pd → I = V ÷ R per branch → add the branch currents.

**Equivalent resistance of any network from readings:** R = supply pd ÷ total current.

**Unknown in series:** use the known resistor to find I, subtract its pd from the supply, then R = V ÷ I.

## Worked reminders

- 4.0 Ω + 8.0 Ω + 12 Ω on 6.0 V: R_total = 24 Ω, I = **0.25 A**, pds 1.0 V, 2.0 V, 3.0 V.
- Branches of 10 Ω and 40 Ω on 8.0 V: currents 0.80 A and 0.20 A, total **1.0 A**, equivalent **8.0 Ω**.
- 1.5 kΩ resistor reading 3.0 V in series with a lamp on 4.5 V: I = 0.0020 A, lamp pd 1.5 V, lamp R = **750 Ω**.

## Sensor circuits

- The pd shares in proportion to resistance, because the current is the same.
- Thermistor warms → its R falls → its pd falls → fixed resistor's pd rises.
- LDR gets darker → its R rises → its pd rises → fixed resistor's pd falls.
- Output for "switch on when cold" or "switch on when dark": take it across the sensor.
- Output for "switch on when hot" or "switch on when bright": take it across the fixed resistor.

## Exam traps

- **Swapping the rules:** current shared and pd the same is parallel; current the same and pd shared is series.
- **Parallel total too big:** a parallel total must be below the smallest branch resistance; a larger answer
  shows a method error.
- **Wrong pd:** in series, V = IR must use the pd across that component, not the supply pd.
- **Ammeter in a branch:** it reads only that branch's current, not the total.
- **Repeating the question:** "parallel resistance is lower because there are more resistors" scores nothing.
- **Identical components:** identical lamps in parallel carry equal currents; identical resistors in series take
  equal pds.

## Self-test

1. State how current behaves in a series circuit.
2. State how pd behaves across parallel branches.
3. Calculate the total resistance of 22 Ω and 47 Ω in series.
4. Explain why adding a resistor in parallel reduces the total resistance.
5. A 12 V supply is connected to 30 Ω and 10 Ω in series. Calculate the current.
6. For question 5, calculate the pd across the 30 Ω resistor.
7. Two branches carry 0.35 A and 0.15 A. What does the ammeter next to the supply read?
8. A 9.0 V supply drives 0.60 A into a parallel network. What is its equivalent resistance?
9. 5.0 Ω and 20 Ω are in parallel. Is the total more than 5.0 Ω, between 5.0 Ω and 20 Ω, or less than 5.0 Ω?
10. An LDR and a fixed resistor are in series. It gets darker. What happens to the pd across the LDR?
11. Which resistor in a series pair takes the larger share of the supply pd?
12. A 6.0 V supply, a 40 Ω resistor and a lamp are in series. The current is 0.10 A. Find the lamp's resistance.

### Answers

1. It is the same through every component.
2. It is the same across each branch.
3. 22 + 47 = **69 Ω**.
4. It adds an extra path for charge, so the total current increases for the same pd, meaning the total
   resistance is lower.
5. I = 12 ÷ 40 = **0.30 A**.
6. V = 0.30 × 30 = **9.0 V**.
7. 0.35 + 0.15 = **0.50 A**.
8. R = 9.0 ÷ 0.60 = **15 Ω**.
9. **Less than 5.0 Ω.**
10. It increases, because the LDR's resistance rises and it takes a bigger share.
11. The one with the larger resistance.
12. R_total = 6.0 ÷ 0.10 = 60 Ω; lamp = 60 − 40 = **20 Ω**.

## Official syllabus

AQA GCSE Physics (8463) specification, for teaching from September 2016 onwards, for exams in 2018 onwards
(Version 1.1, 30 September 2019), published by AQA. These notes cover 4.2.2 Series and parallel circuits.
