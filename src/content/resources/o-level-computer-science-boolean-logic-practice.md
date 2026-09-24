---
title: "O Level Computer Science: Boolean logic — Practice Questions (Cambridge 2210)"
resourceType: "practice-questions"
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
description: "Original exam-style questions with full worked answers on NAND, NOR and XOR gates, writing logic expressions from problem statements and circuit descriptions, and working out outputs for every input combination, for Cambridge O Level Computer Science (2210)."
author: "marlbridge-academic-team"
publishedDate: 2026-09-24
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Each question practises a skill tested in the June 2025 Paper 22. After each answer there is a mark-scheme insight or a tip and, where one matches, the real question to try next.

---

## Questions

**1.** For each logic gate, give the output X for each of the four input combinations A = 0, B = 0; A = 0, B = 1; A = 1, B = 0; and A = 1, B = 1.

**(a)** A NAND gate.

**(b)** An XOR gate. **[4]**

**2.** A greenhouse sprinkler is controlled by a logic circuit with three inputs. Input A comes from a soil sensor: A = 0 means the soil is dry and A = 1 means the soil is wet. Input B = 1 means the air temperature is above 30 °C, and B = 0 means it is not. Input C = 1 means the manual override switch is on, and C = 0 means it is off. The sprinkler switches on (X = 1) only if the soil is dry and either the temperature is above 30 °C or the override switch is on.

**(a)** Write the logic expression for X.

**(b)** Work out the value of X for each of the eight combinations of A, B and C, from A = 0, B = 0, C = 0 up to A = 1, B = 1, C = 1. **[6]**

**3.** Work out the output X of the logic expression X = (A OR B) AND NOT (B AND C) for all eight combinations of the inputs A, B and C. **[4]**

**4.** A logic circuit is built like this: inputs A and B go into an AND gate; input C goes into a NOT gate; the outputs of the AND gate and the NOT gate go into an OR gate, whose output is X.

**(a)** Write the logic expression for this circuit.

**(b)** State the value of X when A = 1, B = 0 and C = 0. **[3]**

**5.** A two-input logic gate gives the output X = 1 only when both of its inputs A and B are 0. For every other input combination, X = 0.

**(a)** Name this logic gate.

**(b)** Write a logic expression for X that uses only the operators NOT and OR. **[2]**

---

## Answers

**1.** **(a)** NAND: A=0, B=0 → X=1; A=0, B=1 → X=1; A=1, B=0 → X=1; A=1, B=1 → **X=0** [2] (all four correct for 2 marks; two or three correct for 1 mark). **(b)** XOR: A=0, B=0 → X=0; A=0, B=1 → **X=1**; A=1, B=0 → **X=1**; A=1, B=1 → X=0 [2] (all four correct for 2 marks; two or three correct for 1 mark).

*Mark-scheme insight (June 2025):* The XOR outputs credited were 1 only when the two inputs are different (0 and 1, or 1 and 0), and 0 when they are the same. Check the row where both inputs are 1 carefully: XOR gives 0 there, whereas OR gives 1.

*Try the real question next:* Cambridge O Level Computer Science 2210, June 2025, Paper 22, Question 8.

**2.** **(a)** **X = NOT A AND (B OR C)**: NOT A, because the soil is dry when A = 0 [1]; AND (B OR C) [1]. **(b)** A=0, B=0, C=0 → X=0; A=0, B=0, C=1 → X=1; A=0, B=1, C=0 → X=1; A=0, B=1, C=1 → X=1; A=1, B=0, C=0 → X=0; A=1, B=0, C=1 → X=0; A=1, B=1, C=0 → X=0; A=1, B=1, C=1 → X=0. Eight correct [4]; six or seven correct [3]; four or five correct [2]; two or three correct [1].

*Mark-scheme insight (June 2025):* In the crane question, some inputs meant "present" when they were 0, so the credited expressions used NOT on those inputs. Equivalent forms were all accepted, for example writing the bracket as a single NOT of an AND, or expanding it into two AND terms joined by OR.

*Try the real question next:* Cambridge O Level Computer Science 2210, June 2025, Paper 22, Question 8.

**3.** A=0, B=0, C=0 → X=0; A=0, B=0, C=1 → X=0; A=0, B=1, C=0 → X=1; A=0, B=1, C=1 → X=0; A=1, B=0, C=0 → X=1; A=1, B=0, C=1 → X=1; A=1, B=1, C=0 → X=1; A=1, B=1, C=1 → X=0. Eight correct [4]; six or seven correct [3]; four or five correct [2]; two or three correct [1]. (Working: A OR B is 0 only for the first two rows; B AND C is 1 only when B = 1 and C = 1, which makes NOT (B AND C) = 0 and so X = 0 in those rows.)

*Mark-scheme insight (June 2025):* An eight-row answer was marked in bands: four marks for all eight outputs, three for six or seven, two for four or five and one for two or three. Working out the intermediate values (A OR B, then B AND C) for each row helps you pick up most of these marks even if one row goes wrong.

*Try the real question next:* Cambridge O Level Computer Science 2210, June 2025, Paper 22, Question 8.

**4.** **(a)** **X = (A AND B) OR NOT C** [1] for A AND B, [1] for OR NOT C. **(b)** A AND B = 1 AND 0 = 0; NOT C = NOT 0 = 1; 0 OR 1 = **1**, so X = 1 [1].

*Tip:* Follow the circuit from the inputs to the output, writing each gate's expression in brackets as you go; brackets show which operation happens first.

**5.** **(a)** **NOR** [1]. **(b)** **X = NOT (A OR B)** [1].

*Tip:* NOR is "NOT OR": it gives the opposite of OR, so its only 1 is when both inputs are 0. NAND is the opposite of AND, so its only 0 is when both inputs are 1.

---

## Where marks are usually lost

- Forgetting to use NOT on an input whose 0 value means the condition is true (for example "0 = soil dry").
- Leaving out brackets, so that an expression such as NOT A AND B OR C means something different from what was intended.
- Mixing up XOR and OR in the row where both inputs are 1.
- Rushing an eight-row answer; working out intermediate values for each row avoids careless errors.
- Confusing NAND with NOR when naming a gate from its outputs.
