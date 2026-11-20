---
title: "OxfordAQA A-Level Computer Science (9645): Data types -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Data Types Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 1 – Procedural programming"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 1.1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "procedural-programming"
  - qualification: "a-level"
    topic: "procedural-programming"
    subtopic: "data-types-oxfordaqa-alevel-cs"
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.1.1 Data types: choosing types, conversions, comparisons and fixed-size values, with answers."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and practice on this content. They are **not** reproduced past-paper questions, and they do **not** replicate the exam's exact structure, question count or mark tariffs -- examination boards hold copyright in their own papers. Use these alongside the official past papers from your board or school.

These questions practise sub-topic **3.1.1 Data types** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: integer, real/float, Boolean, character, string and date/time. Code is Python.

Related pages: [data types study guide](/resources/oxfordaqa-a-level-computer-science-9645-data-types/) · [data types revision notes](/resources/oxfordaqa-a-level-computer-science-9645-data-types-revision-notes/)

## Section A

**1.** State the most appropriate data type for each item. **[4]**

**(a)** The number of students in a class.
**(b)** The average mark of a class.
**(c)** Whether a library book is on loan.
**(d)** A student's single-letter house code, such as `'R'`.

**2.** A programmer stores a customer's telephone number, `07911 123456`, as an integer. Give **two** reasons why this is a poor choice. **[2]**

**3.** State the difference between a character and a string. **[2]**

**4.** Give the value and the data type of each Python expression. **[4]**

**(a)** `9 // 4`
**(b)** `9 / 4`
**(c)** `int("8") + 1`
**(d)** `"8" + "1"`

## Section B

**5.** A program reads two numbers from the keyboard with `input()`, which always returns a string. The user types 9 and then 12.

```python
a = input()
b = input()
print(a < b)
print(a + b)
```

**(a)** State what the program prints. **[2]**
**(b)** Explain why the first output is not the result a user would expect. **[2]**
**(c)** Rewrite the two `input` lines so that both comparisons and arithmetic work as expected. **[1]**

**6.** A game stores a player's score as an integer using 8 bits, with no negative values.

**(a)** State the number of different values 8 bits can represent. **[1]**
**(b)** State the largest score that can be stored. **[1]**
**(c)** Explain what is meant by overflow in this context. **[2]**

**7.** The following code runs in Python.

```python
total = 0.1 + 0.2
print(total == 0.3)
```

**(a)** State what is printed. **[1]**
**(b)** Explain why. **[2]**
**(c)** Describe a better way to test whether `total` is equal to 0.3. **[1]**

**8.** A shop stores prices as whole pence in an integer variable, so that 19.99 pounds is stored as 1999.

**(a)** Give **one** advantage of this approach over a float. **[1]**
**(b)** Write an expression that uses DIV and MOD to display 1999 pence as the text `19.99`. Use `str()` where needed. **[3]**

**9.** An airline system records each passenger's date of birth.

**(a)** Explain why the date/time type is better than a string for this data. **[2]**
**(b)** Give **one** other piece of data in an airline system that suits the date/time type. **[1]**

**10.** A student writes this Python function with type hints.

```python
def total_cost(price: float, quantity: int) -> float:
    return price * quantity
```

**(a)** State what the hint `quantity: int` tells a reader. **[1]**
**(b)** State whether Python stops the call `total_cost("5", 2)` because of the hint. **[1]**
**(c)** State what that call returns. **[1]**
**(d)** Explain how a statically typed language such as C# would treat the equivalent call. **[2]**

## Answers

**1. (a)** Integer [1]
**(b)** Real/float [1]
**(c)** Boolean [1]
**(d)** Character [1]
**[4]**

**2.** Any two [1 each]: it is not used in arithmetic; the **leading zero would be lost** when stored as an integer; the **space** (and any `+` or brackets) cannot be stored in an integer. **[2]**

**3.** A character is a **single symbol** [1]; a string is a **sequence of characters** (zero or more) [1]. **[2]**

**4.**
**(a)** `2`, integer [1]
**(b)** `2.25`, float [1]
**(c)** `9`, integer [1]
**(d)** `"81"`, string [1]
**[4]**

**5. (a)** The first line prints `False` [1]; the second prints `912` [1]. **[2]**
**(b)** The inputs are **strings** [1], and strings are compared **character by character**: `'9'` has a larger character code than `'1'`, so `"9" < "12"` is False [1]. **[2]**
**(c)** `a = int(input())` and `b = int(input())` [1]. **[1]**
*Examiner insight:* With integers, `a < b` is True and `a + b` is 21.

**6. (a)** 2^8 = **256** [1]
**(b)** 256 − 1 = **255** [1]
**(c)** Overflow happens when a result is **too large to be represented** in the available bits [1]; for example, adding 1 to a score of 255 gives 256, which needs 9 bits [1]. **[2]**

**7. (a)** `False` [1]
**(b)** 0.1 and 0.2 **cannot be stored exactly** as binary fractions [1], so the sum is stored as a value very slightly different from 0.3 (0.30000000000000004) [1]. **[2]**
**(c)** Check whether the **absolute difference** between `total` and 0.3 is smaller than a small tolerance, such as `abs(total - 0.3) < 0.000001` [1]. **[1]**

**8. (a)** Any one [1]: integers are stored **exactly**; no rounding error; comparisons for equality are reliable.
**(b)** One example: `str(price // 100) + "." + str(price % 100)` [3 marks: DIV by 100 to get pounds [1]; MOD by 100 to get pence [1]; converting to strings and concatenating with a point [1]]. For 1999 this gives `"19.99"`. A price such as 1905 would give `"19.5"` with this code, so a fuller answer pads the pence to two digits; credit that as extra detail. **[3]**

**9. (a)** The date/time type supports **calendar arithmetic**, such as working out an age or whether a passenger is under 18 [1]; dates stored as strings **sort in the wrong order** and cannot be subtracted [1]. **[2]**
**(b)** Any one [1]: flight departure date and time; booking date; passport expiry date. **[1]**

**10. (a)** That `quantity` is **expected to be an integer** [1].
**(b)** **No** [1]; Python does not enforce hints at run time.
**(c)** `"55"` [1]: the string `"5"` repeated twice. (Accept "a string rather than a number".)
**(d)** The compiler checks types **before the program runs** [1], so the call with a string argument would be **rejected as a compile-time error** [1]. **[2]**

## Frequently asked questions

**Do I need to use type hints in the exam?**
No. The specification says they may help you become familiar with data types but are not a requirement.

**Is a Boolean the same as an integer 0 or 1?**
No. Some languages let you treat them alike, but a Boolean is a separate type with the values True and False.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.1.1 Data types.
