---
title: "A Level Computer Science: Data Representation (A Level) — Practice Questions (Cambridge 9618)"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Data Representation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2027-2029"
stage: "A"
order: 13
syllabusTopics:
  - qualification: "a-level"
    topic: "a-data-representation"
description: "Original exam-style questions with full worked answers on enumerated, composite and pointer data types, normalised binary floating-point representation and random file access by hashing, for Cambridge AS & A Level Computer Science (9618)."
author: "marlbridge-academic-team"
publishedDate: 2026-09-24
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Each question practises a skill tested in the June 2025 Paper 31. After each answer there is an examiner insight, a mark-scheme insight or a tip, and the real question to try next where one matches.

---

## Questions

**1.** A smoothie bar sells drinks in four cup sizes: Small, Medium, Large and Jumbo. Write a pseudocode statement to declare an enumerated data type, CupSize, that holds these four sizes. **[2]**

**2.** The smoothie bar's ordering program needs a composite (record) data type, SmoothieOrder, to hold the following data about each order: an order code made of letters and digits, the customer's name, the date of the order, the cup size (using CupSize from Question 1), the number of drinks ordered, the total price in dollars and cents, and whether the order has been paid for. Write pseudocode statements to declare SmoothieOrder, using the most appropriate data type for each field. **[4]**

**3.** A programmer wants to use a pointer to access an integer variable called Score indirectly.

**(a)** Write a pseudocode statement to declare a pointer type, TScorePointer, that points to an INTEGER.

**(b)** Write a pseudocode statement to declare a variable, ScorePtr, of this type.

**(c)** Assuming ScorePtr already holds the address of Score, write a pseudocode statement that uses ScorePtr to store the value 75 in Score. **[3]**

**4.** A computer stores real numbers in binary floating-point form using a 12-bit mantissa and a 4-bit exponent, both in two's complement. Give the binary number 0.000101101 in normalised floating-point form in this system, stating the mantissa and exponent separately. **[2]**

**5.** Using the same system as Question 4 (12-bit mantissa, 4-bit exponent, both two's complement), work out how the denary number −13.625 is stored as a normalised mantissa and exponent. Show your working. **[4]**

**6.** A different system uses an 8-bit mantissa and a 4-bit exponent, both in two's complement. A number is stored with mantissa 10110000 and exponent 0010. Calculate its denary value, showing your working. **[2]**

**7.** A sports club stores member records in a random (direct-access) file with 1000 record positions, numbered 0 to 999. The position for each record is calculated with the hashing algorithm: position = MemberID MOD 1000.

**(a)** Calculate the position of the record for MemberID 45217.

**(b)** A new member has MemberID 83217. Explain the problem that occurs when this record is added, and describe one way the program could deal with it. **[4]**

---

## Answers

**1.** `TYPE CupSize = (Small, Medium, Large, Jumbo)` — the keyword TYPE with the identifier CupSize and an equals sign [1]; the four values listed in brackets, separated by commas, with no quotation marks [1].

*Mark-scheme insight (June 2025):* the mark scheme gives one mark for the `TYPE` keyword, identifier and equals sign, and a separate mark for the complete list of values in brackets.

*Try the real question next:* Cambridge International AS & A Level Computer Science 9618, June 2025, Paper 31, Question 1.

**2.**
```
TYPE SmoothieOrder
    DECLARE OrderCode : STRING
    DECLARE CustomerName : STRING
    DECLARE OrderDate : DATE
    DECLARE Size : CupSize
    DECLARE NumberOfDrinks : INTEGER
    DECLARE TotalPrice : REAL
    DECLARE Paid : BOOLEAN
ENDTYPE
```
**TYPE SmoothieOrder … ENDTYPE** correctly opening and closing the declaration [1]; **DECLARE** used for every field [1]; any four fields with suitable data types [1]; the remaining fields correct, including **CupSize** for the size, **STRING** for the code that contains letters and **REAL** for the price [1].

*Examiner insight (June 2025):* the most common errors were choosing an unsuitable data type for some fields and leaving out DECLARE, or not placing it in front of each field inside the type.

*Try the real question next:* Cambridge International AS & A Level Computer Science 9618, June 2025, Paper 31, Question 1.

**3.** **(a)** `TYPE TScorePointer = ^INTEGER` — the caret before the data type shows it is a pointer type [1].

**(b)** `DECLARE ScorePtr : TScorePointer` [1]

**(c)** `ScorePtr^ ← 75` — the caret after the variable name dereferences the pointer, so the value is stored at the address it holds, which is Score [1].

*Tip:* in Cambridge pseudocode the caret goes **before** the type name when you declare a pointer type, and **after** the variable name when you follow (dereference) the pointer; mixing these up is an easy way to lose marks.

**4.** Move the binary point three places to the right so the mantissa starts 0.1: 0.000101101 = 0.101101 × 2⁻³. Mantissa: **0.10110100000** (12 bits, padded with zeros on the right) [1]; exponent: −3 in 4-bit two's complement = **1101** [1]

*Examiner insight (June 2025):* most candidates earned at least one mark on the matching question, and the most common error was an incorrect exponent, so count the places the point moves carefully and remember that moving it right gives a negative exponent.

*Try the real question next:* Cambridge International AS & A Level Computer Science 9618, June 2025, Paper 31, Question 2.

**5.** 13.625 in binary: 13 = 1101 and 0.625 = 0.5 + 0.125 = 0.101, so +13.625 = 01101.101 [1]. Two's complement (flip the bits and add 1 in the last place): 10010.010 + 0.001 = **10010.011** [1]. Check: −16 + 2 + 0.25 + 0.125 = −13.625. Normalise by moving the binary point four places to the left so the mantissa starts 1.0: 1.0010011 × 2⁴. Mantissa: **1.00100110000** [1]; exponent: +4 = **0100** [1]

*Mark-scheme insight (June 2025):* marks on the matching question were available for working (the positive binary value, its two's complement and the movement of the binary point) as well as for the final mantissa and exponent, so always show each stage.

*Try the real question next:* Cambridge International AS & A Level Computer Science 9618, June 2025, Paper 31, Question 2.

**6.** Exponent 0010 = +2, so the binary point moves two places to the right: 1.0110000 becomes 101.10000 [1]. In two's complement: −4 + 1 + 0.5 = **−2.5** [1]. (Alternatively: mantissa = −1 + 0.25 + 0.125 = −0.625, and −0.625 × 2² = −2.5.)

*Tip:* when the mantissa starts with 1 the number is negative; give the leftmost bit its negative place value after moving the point, rather than converting the bits as if they were positive.

**7.** **(a)** 45217 MOD 1000 = **217**, so the record is stored at position 217 [1].

**(b)** 83217 MOD 1000 is also 217, so the hashing algorithm gives a position that is already occupied: this is a **collision** [1]. One way to deal with it: search forwards from position 217 to the **next free position** and store the record there (linear probing) [1]; when the record is looked up later, the program starts at the hashed position and checks each record in turn until it finds the matching MemberID [1]. (Alternatively: store the record in a separate **overflow area** and search that area when the record is not at its hashed position.)

*Tip:* when describing how a collision is handled, explain how the record is **found again** later as well as where it is stored; a method that stores the record but gives no way of finding it again is incomplete.

---

## Where marks are usually lost

- Getting the sign of the exponent wrong: moving the binary point to the right to normalise gives a negative exponent.
- Forgetting that a normalised positive mantissa starts 01 and a normalised negative mantissa starts 10.
- Not showing working for floating-point conversions, which throws away the method marks.
- Using unsuitable data types in record declarations, such as INTEGER for a code that contains letters or a telephone number.
- Leaving out DECLARE, or ENDTYPE, in a composite type declaration.
