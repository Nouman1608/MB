---
title: "AQA A-Level Physics (7408): Digital signal processing -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original practice questions with mark-scheme answers on AQA A-Level Physics 7408 section 3.13.5: logic circuits, truth tables, counters and astable clocks."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover section 3.13.5, Digital signal processing, of the AQA AS and A-level Physics specification (7407/7408), part of the A-level only Electronics option assessed in Paper 3 Section B. Learn the content first with the [digital signal processing study guide](/resources/aqa-a-level-physics-7408-digital-signal-processing-aqa-alevel/) and the [digital signal processing revision notes](/resources/aqa-a-level-physics-7408-digital-signal-processing-aqa-alevel-revision-notes/). Counter outputs are labelled Q₀ (weight 1), Q₁ (weight 2), Q₂ (weight 4) and Q₃ (weight 8).

## Questions

### Section A: short questions

**1.** Write the truth table for a two-input EOR gate and state in words when its output is 1. **[2]**

**2.** Inputs A and B feed a NAND gate, and its output feeds a NOT gate, giving Q.

**(a)** Write a Boolean expression for Q. **[1]**
**(b)** Name the single gate that could replace this combination. **[1]**

**3.** State the number of distinct states of:

**(a)** a 5-stage Johnson counter. **[1]**
**(b)** a 5-bit binary counter. **[1]**

**4.** An astable runs at 400 Hz with a duty cycle of 25%. Calculate the period, the mark time, the space time and the mark-to-space ratio. **[3]**

**5.** Explain the difference between combinational logic and sequential logic. **[2]**

**6.** Name three inputs of a counting circuit and state the function of each. **[3]**

### Section B: structured questions

**7.** In a logic circuit, inputs A and B feed an OR gate and inputs B and C feed an AND gate. The outputs of these two gates feed a NAND gate, whose output is Q.

**(a)** Write a Boolean expression for Q. **[1]**
**(b)** Complete a truth table for the circuit, showing the outputs of the OR and AND gates. **[3]**
**(c)** Show that the circuit can be replaced by a single gate, and name it. **[1]**

**8.** A car's warning buzzer Q sounds when the ignition is on (I = 1) and either the seatbelt is not fastened (S = 0) or a door is open (D = 1).

**(a)** Write a Boolean expression for Q and complete its truth table. **[3]**
**(b)** Describe a logic circuit that produces Q, naming each gate and its inputs. **[2]**

**9.** A 4-bit binary counter is driven by a 3.2 kHz clock.

**(a)** State the outputs, as a binary number, after 9 clock pulses from reset. **[1]**
**(b)** Calculate the frequency of the signal at Q₃. **[1]**
**(c)** The counter is to become a modulo-7 counter. State which outputs must be combined, and the gate used, to drive the reset pin. **[2]**
**(d)** Explain why the counter never displays 7 for a measurable time. **[1]**

**10.** A Johnson counter has five stages and starts at 00000.

**(a)** List the states in order until the sequence repeats. **[2]**
**(b)** State the number of distinct states. **[1]**
**(c)** Give one advantage of the fact that only one output changes at each clock pulse. **[1]**

**11.** An electronic die uses an astable to clock a counter that cycles through six states while a button is held down. The astable has a mark time of 0.50 ms and a frequency of 1.2 kHz.

**(a)** Calculate the period, the space time and the duty cycle. **[3]**
**(b)** A 3-bit binary counter is made into a modulo-6 counter. State the outputs that must drive the reset through an AND gate. **[2]**
**(c)** Explain why the result shown when the button is released cannot be predicted by the player. **[1]**

**12.** An astable with an external RC network runs at 800 Hz when C = 10 nF. Both the mark and space times are proportional to RC.

**(a)** State the frequency when C is replaced by a 40 nF capacitor. **[1]**
**(b)** Explain your answer and state the effect on the duty cycle. **[2]**

## Answers

**1.** Truth table: 0 0 → 0; 0 1 → 1; 1 0 → 1; 1 1 → 0 [1]. The output is 1 when the inputs are different [1]. **[2]**
*Examiner insight:* An output of 1 for the 1, 1 row is the OR table, not EOR.

**2. (a)** Q = NOT(NOT(A · B)) = A · B [1]
**(b)** AND [1] **[2]**
*Examiner insight:* Two NOTs cancel; spotting this is what (b) tests.

**3. (a)** 2 × 5 = 10 [1]
**(b)** 2⁵ = 32 [1] **[2]**
*Examiner insight:* Swapping 2n and 2ⁿ loses both marks.

**4.** T = 1/400 = 2.5 ms [1]; mark = 0.25 × 2.5 = 0.625 ms and space = 2.5 − 0.625 = 1.875 ms [1]; mark-to-space = 0.625/1.875 = 1 : 3 [1] **[3]**
*Examiner insight:* A duty cycle of 25% is not a mark-to-space ratio of 1 : 4.

**5.** In combinational logic, the output depends only on the present combination of inputs [1]. In sequential logic, the output also depends on previous inputs (the circuit stores a state), as in a counter [1]. **[2]**
*Examiner insight:* Give an example of each type for clarity, such as a majority voter and a counter.

**6.** Clock: each pulse advances the count by one [1]. Reset: sets all outputs to 0 [1]. Up/down: selects whether the counter counts up or down [1]. **[3]**
*Examiner insight:* "Clock: keeps time" is too vague; link it to advancing the count.

**7. (a)** Q = NOT((A + B) · (B · C)) [1]
**(b)** Table (A B C → OR, AND, Q): 000 → 0, 0, 1; 001 → 0, 0, 1; 010 → 1, 0, 1; 011 → 1, 1, 0; 100 → 1, 0, 1; 101 → 1, 0, 1; 110 → 1, 0, 1; 111 → 1, 1, 0. OR column correct [1]; AND column correct [1]; Q column correct [1]
**(c)** Q is 0 only when B = 1 and C = 1, which matches NOT(B · C), so a single NAND gate with inputs B and C replaces the circuit [1] **[5]**
*Examiner insight:* Whenever B · C = 1, B = 1, so A + B = 1 too; the OR gate adds nothing.

**8. (a)** Q = I · (S̄ + D) [1]. Table (I S D → Q): 000 → 0; 001 → 0; 010 → 0; 011 → 0; 100 → 1; 101 → 1; 110 → 0; 111 → 1 [2] (one mark for at least six correct rows)
**(b)** S through a NOT gate; S̄ and D into an OR gate [1]; the OR output and I into an AND gate, whose output is Q [1] **[5]**
*Examiner insight:* An expression without brackets, I · S̄ + D, would sound the buzzer with the ignition off; the brackets matter.

**9. (a)** 1001 [1]
**(b)** 3.2 kHz/16 = 200 Hz [1]
**(c)** 7 = 0111, so Q₂, Q₁ and Q₀ [1] go into a three-input AND gate driving reset [1]
**(d)** As soon as the count reaches 0111 the AND output goes high and resets the counter at once, so 7 lasts only an instant [1] **[5]**
*Examiner insight:* Decoding 6 (Q₂ and Q₁) would give a modulo-6 counter, not modulo-7.

**10. (a)** 00000, 10000, 11000, 11100, 11110, 11111, 01111, 00111, 00011, 00001 [2] (one mark for the filling half, one for the emptying half)
**(b)** 10 [1]
**(c)** No momentary false states (glitches) occur between counts, because only one output switches at a time; or each state can be decoded with a simple two-input gate [1] **[4]**
*Examiner insight:* Ending the list with 00000 repeated is acceptable; listing it as an eleventh distinct state is not.

**11. (a)** T = 1/1200 = 0.833 ms [1]; space = 0.833 − 0.50 = 0.33 ms [1]; duty cycle = 0.50/0.833 = 60% [1]
**(b)** 6 = 110, so Q₂ and Q₁ [2]
**(c)** The counter completes its six-state cycle 1200/6 = 200 times per second, far faster than a person can time the release, so the final state is effectively random [1] **[6]**
*Examiner insight:* A numerical justification, such as 200 cycles per second, makes the explanation in (c) secure.

**12. (a)** 200 Hz [1]
**(b)** The period is proportional to RC, so making C four times larger makes the period four times longer and the frequency a quarter [1]. Mark and space both scale by the same factor, so the duty cycle is unchanged [1] **[3]**
*Examiner insight:* Saying the frequency halves (from √4) confuses the astable with an LC circuit.

## Where marks are usually lost

- Truth tables with missing or repeated rows.
- Treating EOR as OR.
- Leaving brackets out of Boolean expressions.
- Using 2ⁿ for a Johnson counter or 2n for a binary counter.
- Decoding n − 1 for a modulo-n counter.
- Writing a duty cycle as mark/space.
- Using a square-root relationship for astable timing.

## Next steps

- Recap with the [digital signal processing revision notes](/resources/aqa-a-level-physics-7408-digital-signal-processing-aqa-alevel-revision-notes/).
- Re-read the [digital signal processing study guide](/resources/aqa-a-level-physics-7408-digital-signal-processing-aqa-alevel/).
- Try mixed questions across the option in the [Electronics practice questions](/resources/aqa-a-level-physics-electronics-practice/).

## Official syllabus

AQA AS and A-level Physics (7407/7408) specification, AS and A-level exams June 2016 onwards, published by AQA. Section 3.13.5 Digital signal processing (A-level only), within section 3.13 Electronics.
