---
title: "Cambridge A Level Computer Science (9618): Logic Gates and Logic Circuits"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 3 – Hardware"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 3.2
syllabusTopics:
  - qualification: "a-level"
    topic: "hardware"
    subtopic: "logic-gates-and-logic-circuits"
description: "Study guide to Cambridge 9618 section 3.2: the six gates, and moving between problem statements, logic expressions, truth tables and circuits."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Section 3.2 Logic Gates and Logic Circuits of the Cambridge International AS & A Level Computer Science (9618) syllabus for 2026 is AS content assessed on Paper 1, Theory Fundamentals. You must use the symbols for, and define the functions of, the NOT, AND, OR, NAND, NOR and XOR (EOR) gates, and construct the truth table for each. You must then move between four representations in every direction: construct a **logic circuit** from a problem statement, a logic expression or a truth table; construct a **truth table** from a problem statement, a logic circuit or a logic expression; and construct a **logic expression** from a problem statement, a logic circuit or a truth table. The syllabus adds that "all gates except the NOT gate will have two inputs only".

The [Hardware study guide](/resources/cambridge-a-level-computer-science-hardware-study-guide/) introduces the gates. This page practises each conversion with fresh examples and shows how to avoid the errors that cost marks. Recall: [logic gates revision notes](/resources/cambridge-a-level-computer-science-9618-logic-gates-and-logic-circuits-revision-notes/) · Questions: [logic gates practice set](/resources/cambridge-a-level-computer-science-9618-logic-gates-and-logic-circuits-practice/).

## The six gates

| Gate | Function in words | Expression | Output is 1 when... |
|---|---|---|---|
| NOT | Inverts its single input | NOT A | A is 0 |
| AND | Both inputs must be 1 | A AND B | A = 1 and B = 1 |
| OR | At least one input is 1 | A OR B | either or both are 1 |
| NAND | NOT (A AND B) | A NAND B | not both are 1 |
| NOR | NOT (A OR B) | A NOR B | both are 0 |
| XOR (EOR) | Inputs differ | A XOR B | exactly one is 1 |

Combined truth table for two inputs:

| A | B | AND | OR | NAND | NOR | XOR |
|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 | 0 | 0 | 0 |

**Symbols.** In the exam you draw the standard symbols: NOT is a triangle with a small circle at its output; AND has a flat input side and a semicircular output side; OR has a curved input side and a pointed output; NAND and NOR are AND and OR with a small circle (the "bubble") at the output; XOR is an OR symbol with an extra curved line across its inputs. Draw them clearly: an AND that looks like an OR loses the mark.

## Writing truth tables systematically

With n inputs there are 2ⁿ rows: 4 rows for two inputs, 8 for three. List the inputs as binary counting from 000 to 111, so the right-hand column alternates 0, 1, the middle column goes in pairs and the left-hand column in fours. This guarantees no row is missed or repeated, and it is the order examiners expect.

For anything beyond a single gate, add a column for **each intermediate output**. Working columns are not required in the final answer, but they make errors much less likely and help the examiner follow your method.

## Worked example 1: problem statement → expression → truth table → circuit

*A greenhouse vent opens (X = 1) if the temperature is high (T = 1) and it is not raining (R = 0), or if the manual override is switched on (M = 1).*

**Expression.** Translate phrase by phrase: "temperature is high and it is not raining" is T AND NOT R; "or override is on" adds OR M.

```
X = (T AND NOT R) OR M
```

**Truth table**, with working columns:

| T | R | M | NOT R | T AND NOT R | X |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 | 1 |
| 0 | 1 | 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 | 0 | 1 |
| 1 | 0 | 0 | 1 | 1 | 1 |
| 1 | 0 | 1 | 1 | 1 | 1 |
| 1 | 1 | 0 | 0 | 0 | 0 |
| 1 | 1 | 1 | 0 | 0 | 1 |

**Circuit.** Build from the inside of the brackets outwards: R goes into a NOT gate; its output and T go into an AND gate; the AND output and M go into an OR gate, whose output is X. Three gates, each with the right number of inputs.

## Worked example 2: truth table → expression

| A | B | C | X |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 0 |

**Method (sum of products):**

1. Pick out every row where X = 1: rows 001, 011 and 110.
2. For each row, AND the inputs together, using NOT for any input that is 0 in that row.
3. OR the terms together.

```
X = (NOT A AND NOT B AND C) OR (NOT A AND B AND C) OR (A AND B AND NOT C)
```

Check one row: for A = 1, B = 1, C = 0, the third bracket is 1 AND 1 AND 1 = 1, so X = 1, as the table says.

The expression is correct but not simplified. Simplifying it with Boolean algebra is part of the A Level content, not section 3.2, so an AS question asks only for a correct expression unless it says otherwise.

**Drawing the circuit for it.** Because every gate except NOT has two inputs only, a three-input term such as NOT A AND NOT B AND C needs **two** AND gates: (NOT A AND NOT B) first, then that output AND C. Likewise, ORing three terms needs two OR gates. Drawing a three-input AND gate breaks the syllabus rule.

## Worked example 3: circuit → truth table → expression

*A circuit has three inputs. Gate 1 is a NAND gate with inputs A and B, giving P. Gate 2 is an XOR gate with inputs B and C, giving Q. Gate 3 is an AND gate with inputs P and Q, giving the output X.*

**Expression**, read from the output back to the inputs:

```
X = (A NAND B) AND (B XOR C)
```

**Truth table:**

| A | B | C | P = A NAND B | Q = B XOR C | X = P AND Q |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 1 | 1 | 1 | 1 |
| 0 | 1 | 0 | 1 | 1 | 1 |
| 0 | 1 | 1 | 1 | 0 | 0 |
| 1 | 0 | 0 | 1 | 0 | 0 |
| 1 | 0 | 1 | 1 | 1 | 1 |
| 1 | 1 | 0 | 0 | 1 | 0 |
| 1 | 1 | 1 | 0 | 0 | 0 |

Notice that input B feeds two gates. When reading a circuit, follow every branch of a wire: a junction dot means one input is shared.

## Translating problem statements

| Words in the statement | Logic |
|---|---|
| "and", "both", "as well as" | AND |
| "or", "either", "at least one" | OR |
| "not", "is off", "is open" (when 1 means closed) | NOT |
| "but not both", "exactly one of", "differ" | XOR |
| "not both" | NAND |
| "neither... nor" | NOR |

Watch the definition of 1 for each input. If D = 1 means the door is **closed**, "the door is open" is NOT D. Write the expression first, then check it against two or three rows of common sense before drawing anything.

## Common mistakes

- Missing or repeating rows by not counting in binary order.
- Confusing NAND with NOR, or OR with XOR in the last row (1, 1).
- Drawing gates with three inputs.
- Leaving out brackets: T AND NOT R OR M is ambiguous; write (T AND NOT R) OR M.
- Reading a circuit and forgetting that one input feeds more than one gate.
- Drawing a NOT gate without its bubble, or a NAND without its bubble.
- Writing a sum-of-products term that uses the input value instead of NOT for a 0 in that row.

## Exam technique

- **Construct a truth table**: list inputs in binary order, add working columns for each gate, then the output.
- **Construct a logic expression**: use brackets around each gate's output, and use the gate names in capitals (AND, OR, NOT).
- **Construct a logic circuit**: draw from inputs on the left to output on the right, one gate per operator, two inputs per gate, joining wires cleanly.
- **From a truth table**: sum of products is always a valid method, even if the expression is long.
- Check your final answer by testing one row where the output is 1 and one where it is 0.

Next: condense the method with the [logic gates revision notes](/resources/cambridge-a-level-computer-science-9618-logic-gates-and-logic-circuits-revision-notes/), then work through the [logic gates practice questions](/resources/cambridge-a-level-computer-science-9618-logic-gates-and-logic-circuits-practice/). The rest of Topic 3 is in the [computers and their components study guide](/resources/cambridge-a-level-computer-science-9618-computers-and-their-components/).

## Official syllabus

Cambridge International AS & A Level Computer Science (9618) syllabus for 2026, Subject content, section 3.2 Logic Gates and Logic Circuits. Published by Cambridge International.
