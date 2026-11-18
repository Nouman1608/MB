---
title: "Cambridge A Level Computer Science (9618): Boolean Algebra and Logic Circuits -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 15: Hardware and Virtual Machines"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 15.2
syllabusTopics:
  - qualification: "a-level"
    topic: "hardware-and-virtual-machines"
    subtopic: "boolean-algebra-and-logic-circuits"
description: "Original 9618 practice questions with worked answers on truth tables, adders, SR and JK flip-flops, De Morgan's laws, simplification and Karnaugh maps."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Boolean algebra and logic circuits study guide](/resources/cambridge-a-level-computer-science-9618-boolean-algebra-and-logic-circuits/) · [Boolean algebra and logic circuits revision notes](/resources/cambridge-a-level-computer-science-9618-boolean-algebra-and-logic-circuits-revision-notes/)

---

## Section A

**1.** A three-input NAND gate has inputs A, B and C. State its output when:

**(a)** A = 1, B = 1, C = 1 **[1]**

**(b)** A = 1, B = 0, C = 1 **[1]**

**2.** Use De Morgan's laws to write an expression equivalent to NOT(A.B̄ + C̄.D) in which no bar covers more than one variable. **[3]**

**3.** Use Boolean algebra to simplify Ā.B.C + A.B.C + A.B.C̄. Show each step. **[3]**

**4.** Explain why the output of a flip-flop depends on its previous output as well as on its inputs, and state what this allows it to do. **[2]**

**5.** State the two logic gates needed to build a half adder, and the output each one produces. **[2]**

**6.** A circuit with inputs A, B and C has output 1 only for the inputs 001, 011 and 110.

**(a)** Write the sum-of-products expression for the output. **[2]**

**(b)** Simplify your expression. **[1]**

## Section B

**7.** A circuit has the expression X = A.B + B̄.C.

Complete a truth table for the circuit, including columns for A.B and B̄.C. **[4]**

**8.** An SR flip-flop is built from two NOR gates. Its output Q is initially 0.

**(a)** The inputs (S, R) are applied in this order: (1, 0), (0, 0), (0, 1), (0, 0). State the value of Q after each pair. **[4]**

**(b)** Explain why the input S = 1, R = 1 is not allowed. **[2]**

**9.** A JK flip-flop has output Q = 0. Five clock pulses arrive, with the inputs (J, K) set to (1, 0), (1, 1), (1, 1), (0, 1), (0, 0) at the pulses in that order.

**(a)** State the value of Q after each clock pulse. **[5]**

**(b)** Explain **one** advantage of a JK flip-flop over an SR flip-flop. **[2]**

**10.** **(a)** A full adder has inputs A, B and Cin. State the outputs S and Cout for each of these inputs: (0, 1, 1), (1, 0, 0) and (1, 1, 1). **[3]**

**(b)** Two full adders are chained to add the 2-bit numbers 11 and 01. Explain how the result is produced, giving the carry passed between the adders and the final 3-bit result. **[3]**

**11.** A circuit with inputs A, B, C and D has output Z = 1 for the inputs ABCD = 0001, 0011, 1001, 1011, 1100 and 1101. Z = 0 for every other input.

**(a)** Use a Karnaugh map to find a simplified sum-of-products expression for Z. Show your groups. **[5]**

**(b)** State **one** benefit of using a Karnaugh map rather than Boolean algebra for this problem. **[1]**

**12.** Use Boolean algebra to show that A.(Ā + B) + B.(B + C) simplifies to B. Name the law used at each step. **[4]**

---

## Answers

**1. (a)** **0** (NAND is 0 only when every input is 1) [1].

**(b)** **1** [1].

**2.** Outer bar over an OR: NOT(A.B̄) . NOT(C̄.D) [1]; NOT(A.B̄) = Ā + B [1]; NOT(C̄.D) = C + D̄ [1]. Result: **(Ā + B).(C + D̄)**.

**3.** Ā.B.C + A.B.C = B.C.(Ā + A) = B.C [1] (inverse: Ā + A = 1). So the expression is B.C + A.B.C̄ = B.(C + A.C̄) [1] = B.(C + A), using C + C̄.A = C + A [1]. Result: **B.(A + C)**, or A.B + B.C.

**4.** The outputs are fed back into the inputs of the gates (feedback), so the next output depends on the current output [1]. This lets it hold a value after the inputs are removed, so it stores one bit [1].

**5.** An XOR gate gives the sum, S = A ⊕ B [1]; an AND gate gives the carry, C = A.B [1].

**6. (a)** **Ā.B̄.C + Ā.B.C + A.B.C̄** [2] (1 mark for two correct terms, 2 for all three).

**(b)** Ā.B̄.C + Ā.B.C = Ā.C, so the output is **Ā.C + A.B.C̄** [1].

**7.**

| A | B | C | A.B | B̄.C | X |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 1 | 1 |
| 0 | 1 | 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 | 0 | 1 |

A.B column correct [1]; B̄.C column correct [1]; X column correct [2] (1 mark if one row wrong).

**8. (a)** (1, 0): **Q = 1** (set) [1]; (0, 0): **Q = 1** (held) [1]; (0, 1): **Q = 0** (reset) [1]; (0, 0): **Q = 0** (held) [1].

**(b)** With both inputs 1, both NOR gates output 0, so Q and Q̄ are both 0, which is not a valid (complementary) state [1]. When the inputs return to 0, the state the flip-flop settles in cannot be predicted [1].

**9. (a)** (1, 0): **1** [1]; (1, 1): toggles to **0** [1]; (1, 1): toggles to **1** [1]; (0, 1): **0** [1]; (0, 0): unchanged, **0** [1].

**(b)** In a JK flip-flop every input combination is valid: J = K = 1 makes the output toggle [1], whereas in an SR flip-flop S = R = 1 gives an unpredictable state; the JK is also clocked, so changes are synchronised with other flip-flops [1].

**10. (a)** (0, 1, 1): **S = 0, Cout = 1** [1]; (1, 0, 0): **S = 1, Cout = 0** [1]; (1, 1, 1): **S = 1, Cout = 1** [1].

**(b)** The first full adder adds the least significant bits, 1 + 1 with Cin = 0, giving S = 0 and a carry of **1** [1]. This carry is the Cin of the second full adder, which adds 1 + 0 + 1, giving S = 0 and Cout = 1 [1]. The final carry out becomes the third bit, so the result is **100** (3 + 1 = 4) [1].

**11. (a)** Map drawn with correct Gray-code labels [1]:

| AB \ CD | 00 | 01 | 11 | 10 |
|---|---|---|---|---|
| 00 | 0 | 1 | 1 | 0 |
| 01 | 0 | 0 | 0 | 0 |
| 11 | 1 | 1 | 0 | 0 |
| 10 | 0 | 1 | 1 | 0 |

- Group of four: cells 0001, 0011, 1001, 1011 (rows 00 and 10, which are adjacent because the map wraps; columns 01 and 11) [1]. B = 0 and D = 1 throughout: **B̄.D** [1].
- Group of two: cells 1100 and 1101 (row 11, columns 00 and 01) [1]. A = 1, B = 1, C = 0 throughout: **A.B.C̄**.

**Z = B̄.D + A.B.C̄** [1].

**(b)** Any one: grouping adjacent cells gives the minimal expression directly, with no need to choose which law to apply [1]; it is a systematic, visual method with less chance of error for four variables [1].

**12.** Expand: A.Ā + A.B + B.B + B.C (distributive) [1]. A.Ā = 0 (inverse) and B.B = B (idempotent), giving A.B + B + B.C [1]. Then B + A.B = B and B + B.C = B (absorption) [1], so the expression equals **B** [1].

---

## Where marks are usually lost

- Truth tables without intermediate columns, so one slip spreads through the output.
- K-map labels in binary order (00, 01, 10, 11) instead of 00, 01, 11, 10.
- Missing groups that wrap from the top row to the bottom row.
- Leaving a changing variable in a group's term.
- Treating S = R = 1 in an SR flip-flop as a toggle.
- Forgetting that the final carry out of a chained adder is part of the result.
