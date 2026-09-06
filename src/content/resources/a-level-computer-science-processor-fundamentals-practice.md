---
title: "A Level Computer Science: Processor Fundamentals — Practice Questions (Cambridge 9618)"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Processor Fundamentals"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 4
syllabusTopics:
  - qualification: "a-level"
    topic: "processor-fundamentals"
description: "Original exam-style practice questions with full worked answers on the fetch-execute cycle, assembly language tracing, addressing modes and bit manipulation, for Cambridge AS & A Level Computer Science (9618) Topic 4 Processor Fundamentals."
author: "marlbridge-academic-team"
publishedDate: 2026-09-06
featured: false
---
> **These are original questions written for Marlbridge**, in the style and at the
> standard of the examination. They are **not** reproduced past-paper questions —
> Cambridge International holds copyright in its own papers. Use these alongside the
> official past papers available free from your board.

Related: [Processor Fundamentals study guide](/resources/a-level-computer-science-processor-fundamentals/)
and [revision notes](/resources/a-level-computer-science-processor-fundamentals-revision-notes/)

---

## Section A

**1.** Name the two registers that together allow the CPU to fetch an instruction from memory. **[2]**

**2.** Distinguish between immediate and direct addressing modes. **[2]**

**3.** Which single logical operation is used to toggle specific bits in a byte, leaving others
unchanged? **[1]**

## Section B

**4.** A byte holds the value 11010010. A programmer wants to set the two least significant bits to 1
without changing any other bit.

**(a)** State the logical operation and the mask that should be used. **[2]**
**(b)** Show the resulting byte value after this operation is applied. **[2]**

**5.** Describe the sequence of register changes that occurs during the fetch stage of the
fetch-execute cycle, naming the specific registers involved. **[4]**

**6.** An assembly language instruction can either contain a value directly, or contain the address
where a value is stored.

**(a)** Name the addressing mode used in each case. **[2]**
**(b)** Explain one situation where using the address-based mode would be more useful than embedding
the value directly in the instruction. **[3]**

**7.** A byte holds the value 01101101. A question asks how to clear (set to 0) the four most
significant bits while leaving the four least significant bits unchanged.

**(a)** State the logical operation and mask required. **[2]**
**(b)** Give the resulting byte value. **[1]**

**8.** State the purpose of the accumulator, and explain why the arithmetic-logic unit (ALU) needs
access to it during an ADD instruction. **[3]**

**9.** A programmer wants to test whether the third bit (from the right, counting from bit 0) of a
byte is set to 1, without changing the byte itself.

**(a)** Name the logical operation and mask that could be used for this test. **[2]**
**(b)** Explain how the result of this operation indicates whether the bit was set. **[3]**

---

## Answers

**1.** The program counter (PC), which holds the address of the next instruction to be fetched, and
the memory address register (MAR), which receives that address so it can be sent to memory [2].

**2.** In immediate addressing, the instruction contains the actual value to be used directly [1]. In
direct addressing, the instruction contains the address of the memory location where the value is
stored, rather than the value itself [1].

**3.** XOR [1].

**4. (a)** OR with the mask 00000011 [2].
**(b)** 11010010 OR 00000011 = **11010011** [2].

**5.** The address of the next instruction, held in the program counter (PC), is copied into the
memory address register (MAR) [1]. The instruction stored at that address in memory is then copied
into the memory data register (MDR) [1]. The program counter is incremented so it points to the
address of the following instruction [1]. Finally, the instruction is copied from the MDR into the
current instruction register (CIR), ready to be decoded [1].

**6. (a)** Directly containing the value: immediate addressing [1]. Containing the address of the
value: direct addressing [1].
**(b)** Direct (address-based) addressing is more useful when the value needs to be looked up or may
change during program execution — for example, when working with a variable stored in memory whose
value is updated as the program runs, since the instruction can reference the same memory location
repeatedly without needing to be rewritten each time the value changes [2–3].

**7. (a)** AND with the mask 00001111 [2].
**(b)** 01101101 AND 00001111 = **00001101** [1].

**8.** The accumulator is a register used to store the results of arithmetic and logical operations
performed by the ALU [1–2]. During an ADD instruction, the ALU needs access to the accumulator because
it typically holds one of the operands to be added, and the result of the addition is usually written
back into the accumulator once the operation completes [1–2].

**9. (a)** AND with the mask 00000100 (a mask with a 1 only in the position of the third bit, bit 2)
[2].
**(b)** If the third bit of the original byte was 1, the AND operation produces a non-zero result
(00000100), since that bit position is preserved while every other bit is forced to 0 [1–2]. If the
third bit was 0, the AND operation produces a result of all zeros, since ANDing 0 with 1 in that
position still gives 0 [1]. The presence or absence of a non-zero result therefore indicates whether
the tested bit was originally set.

## A note on exam technique for this topic

Every bit-manipulation question above follows the same worked-example method the study guide
recommends: identify which bits need to change and which must stay the same, choose the logical
operation whose behaviour matches that requirement (AND with 0s to clear, OR with 1s to set, XOR with
1s to toggle), and then apply the mask bit by bit rather than reasoning about the result abstractly.
Question 5 rewards the same discipline applied to the fetch-execute cycle: naming the specific
register at each step, in the correct order, rather than describing the cycle as a single vague
action. Question 9 shows the same test-a-bit skill in reverse from questions 4 and 7: using AND with a single-bit mask to check a bit's state, rather than to change it, is a distinct but closely related application of the same operation.
