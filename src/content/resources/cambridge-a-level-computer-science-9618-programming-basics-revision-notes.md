---
title: "Cambridge A Level Computer Science (9618): Programming Basics -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 11: Programming"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 11.1
syllabusTopics:
  - qualification: "a-level"
    topic: "programming"
    subtopic: "programming-basics"
description: "Revision notes for 9618 section 11.1: declarations, constants, operators, input, output, built-in functions, design-to-pseudocode traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-18: Please check the constant declaration syntax and the built-in function names (TO_UPPER, TO_LOWER, IS_NUM) against the current 9618 pseudocode guide and insert."
publishedDate: 2026-11-18
featured: false
---

Condensed notes for 11.1 Programming Basics, AS content in Cambridge International AS & A Level Computer Science 9618, examined in Paper 2. You must turn a flowchart or structured English design into pseudocode, and write statements that declare and initialise constants and variables, assign values, evaluate arithmetic and logical expressions, read input, write output and call built-in functions.

Related: [Programming Basics study guide](/resources/cambridge-a-level-computer-science-9618-programming-basics/) · [Programming Basics practice questions](/resources/cambridge-a-level-computer-science-9618-programming-basics-practice/) · [Programming revision notes (all of Topic 11)](/resources/cambridge-a-level-computer-science-programming-revision-notes/)

## Statement forms

```
DECLARE <identifier> : <data type>
CONSTANT <identifier> = <value>
<identifier> ← <expression>
INPUT <identifier>
OUTPUT <value>, <value>, ...
```

- Declare every variable, with a type, before use.
- **Initialise** counters and running totals (for example Total ← 0) before they are added to.
- A constant gets its value once and is never assigned again.
- Several variables of one type can share a declaration: DECLARE X, Y : INTEGER.

## Operators and what they return

| Expression | Value | Why |
|---|---|---|
| 19 / 4 | 4.75 | / always gives a REAL |
| 19 DIV 4 | 4 | Whole-number quotient |
| 19 MOD 4 | 3 | Remainder |
| 3 + 4 * 2 | 11 | * before + |
| (3 + 4) * 2 | 14 | Brackets first |
| "Ab" & "cd" | "Abcd" | & joins strings |
| (5 > 2) AND (1 = 2) | FALSE | Both sides must be TRUE |
| (5 > 2) OR (1 = 2) | TRUE | One side TRUE is enough |
| NOT (5 > 2) | FALSE | Reverses the value |

## Built-in functions to recognise

- **Strings**: LENGTH, LEFT, RIGHT, MID (start position, then length; first character is position 1), TO_UPPER, TO_LOWER.
- **Conversion**: NUM_TO_STR, STR_TO_NUM, IS_NUM (checks a string is a valid number), ASC (character to code), CHR (code to character).
- **Numbers**: INT (integer part), RAND(x) (a REAL from 0 up to but not including x).
- The exam insert lists these. Any function not in the pseudocode guide will be described in the question. String functions are always given.
- **Nesting**: INT(RAND(10)) + 1 gives 1 to 10. LENGTH(TO_UPPER(Name)) = LENGTH(Name).

## Design to pseudocode

- **Structured English**: one numbered step usually becomes one or a few statements, in the same order.
- **Flowchart**: parallelogram = INPUT or OUTPUT; rectangle = assignment or calculation; diamond = condition (selection or a loop test); terminators = start and end.
- Keep the identifiers the design uses. Add DECLARE statements even if the design shows none.
- Check your code with one set of sample values before moving on.

**Quick conversion.** Structured English: "1. Input the price and the quantity. 2. Multiply them to give the subtotal. 3. Take off a fixed discount of 5%. 4. Output the amount to pay."

```
CONSTANT Discount = 0.05
DECLARE Price, Subtotal, ToPay : REAL
DECLARE Quantity : INTEGER
INPUT Price
INPUT Quantity
Subtotal ← Price * Quantity
ToPay ← Subtotal * (1 - Discount)
OUTPUT "Amount to pay: ", ToPay
```

Check: Price 12.00 and Quantity 3 give a subtotal of 36.00 and 36.00 × 0.95 = 34.20. The fixed 5% is a constant; Quantity is an INTEGER because it counts whole items.

## Key terms

| Term | Meaning |
|---|---|
| Variable | Named storage location whose value can change while the program runs |
| Constant | Named value fixed for the whole run of the program |
| Declaration | Statement giving an identifier and its data type |
| Initialisation | Giving a variable its first value before it is used |
| Assignment | Storing the value of an expression in a variable (←) |
| Expression | Values, variables and operators that evaluate to one value |
| Logical operator | AND, OR or NOT, combining or reversing BOOLEAN values |
| Built-in function | A function supplied with the language that returns a value |
| Library routine | A pre-written, pre-tested module available to programs |
| Structured English | A design written as numbered steps in restricted English |

## Exam traps

- ← assigns; = compares (and is used in a CONSTANT declaration).
- 10 / 5 is 2.0, a REAL. Use DIV for an INTEGER result.
- Average written as A + B + C / 3 divides only C.
- RIGHT(2009, 2) is invalid: convert first with NUM_TO_STR. 2009 MOD 100 gives 9, losing the leading zero of "09".
- MID("PAPER", 2, 3) is "APE", not "PER": the second argument is a start position, the third a length.
- An uninitialised total produces an unpredictable or rejected result.
- A string result is written with quotation marks; a number without.

## Self-test

1. Write a statement that declares a constant VatRate with the value 0.2.
2. Evaluate 47 DIV 8 and 47 MOD 8.
3. What is the data type of the result of 12 / 3?
4. Evaluate (3 + 9) / 4 * 2.
5. With X = 4 and Flag = TRUE, evaluate (X > 5) OR NOT Flag.
6. Evaluate MID("STATEMENT", 6, 4).
7. Write an expression that gives a random whole number from 1 to 20.
8. Why is a running total initialised to 0?
9. What does IS_NUM("12a") return?
10. Write one statement that outputs the text Total: followed by the value of Total.
11. Write pseudocode for the structured English step "Add the price of the item to the running total".
12. Give one benefit of using a library routine.

**Answers:** 1. CONSTANT VatRate = 0.2 2. 5 and 7 (8 × 5 = 40, 47 − 40 = 7). 3. REAL (the value is 4.0). 4. 12 / 4 = 3, 3 × 2 = 6. 5. FALSE OR FALSE, which is FALSE. 6. "MENT" (positions 6 to 9). 7. INT(RAND(20)) + 1 8. So the first addition starts from a known value; otherwise the variable's contents are undefined. 9. FALSE, because "12a" is not a valid number. 10. OUTPUT "Total: ", Total 11. Total ← Total + Price (using the identifiers the design gives). 12. It has already been written and tested, so it saves development time and is less likely to contain errors.
