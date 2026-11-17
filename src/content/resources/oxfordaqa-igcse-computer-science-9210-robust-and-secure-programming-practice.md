---
title: "OxfordAQA IGCSE Computer Science (9210): Robust and secure programming -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 2 – Programming"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 2.12
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "robust-and-secure-programming-9210"
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on validation routines, authentication and normal, boundary and erroneous data."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-17
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Robust and secure programming study guide](/resources/oxfordaqa-igcse-computer-science-9210-robust-and-secure-programming/) | [Robust and secure programming revision notes](/resources/oxfordaqa-igcse-computer-science-9210-robust-and-secure-programming-revision-notes/)

These questions cover section 3.2.12 Robust and secure programming of the OxfordAQA International GCSE Computer
Science (9210) specification. Usernames and passwords are stored in plain text.

---

## Section A

**1.** State what is meant by **data validation**. **[1]**

**2.** Explain why validation cannot guarantee that data entered is correct. **[1]**

**3.** Write a condition that is true when the string `town` is empty. **[1]**

**4.** A field accepts whole numbers from 5 to 15 inclusive. Give one example of each:
**(a)** normal data **(b)** boundary data that should be accepted **(c)** erroneous data. **[3]**

**5.** State **two** checks that an authentication routine must make. **[2]**

## Section B

**6.** A gym booking system asks for the number of people in a group, which must be from 2 to 8.

**(a)** Write a validation routine that keeps asking until a valid number is entered and displays an error
message after each invalid entry. **[4]**
**(b)** Complete a test plan with **four** tests. For each, give the test data, its type and the expected result.
**[4]**
**(c)** Justify why your test plan includes boundary data. **[1]**

**7.** A program asks a user to choose a nickname. The nickname must be at least 3 characters long.

**(a)** Write a function `ValidNickname(nick)` that returns True if the nickname is acceptable and False
otherwise. **[3]**
**(b)** Explain why the function does not need a separate check that the nickname is empty. **[1]**

**8.** Write an authentication routine that allows a user up to **three** attempts to enter the username
`"tutor21"` and password `"Heron&Fox"`. It should output `"Access granted"` or `"Locked out"`. **[6]**

**9.** A student writes this validation routine for a percentage:

```
REPEAT
  p ← STRING_TO_INT(USERINPUT)
UNTIL p < 0 OR p > 100
```

**(a)** Describe what the routine actually does. **[1]**
**(b)** Write the corrected `UNTIL` line. **[1]**

**10.** A cinema program accepts a seat row letter from A to M. The row is stored as a single character `row`.

**(a)** Write a condition using character codes that is true when `row` is a valid row. (`"A"` is 65.) **[2]**
**(b)** Give one boundary value that should be accepted and one that should be rejected, with reasons. **[2]**

**11.** An authentication routine outputs `"Username not found"` when the username is wrong and
`"Password wrong"` when only the password is wrong. Explain why this is a security weakness and suggest an
improvement. **[2]**

**12.** A program validates the price of an item, which must be greater than 0 and no more than 500.00. Explain
why each of these values is useful test data: 0, 0.01, 500.00, 500.01 and `"free"`. **[3]**

---

## Answers

**1.** Checking that data entered follows set rules, so it is reasonable and sensible, before it is used [1].

**2.** Validation only checks that data obeys rules such as a range or length; a value can obey the rules and
still be wrong (for example a mistyped but valid age) [1].

**3.** `LEN(town) = 0` (or `town = ""`) [1].

**4.** (a) Any value from 6 to 14, for example 10 [1] (b) 5 or 15 [1] (c) for example 40, −2 or `"ten"`
[1]. (Accept 4 or 16 in (c) if identified as rejected.)

**5.** That the username matches the stored username [1] and that the password matches the stored password for
that user [1].

**6.** **(a)** One possible answer:

```
OUTPUT "How many people (2 to 8)?"
people ← STRING_TO_INT(USERINPUT)
WHILE people < 2 OR people > 8
  OUTPUT "Group size must be from 2 to 8. Try again"
  people ← STRING_TO_INT(USERINPUT)
ENDWHILE
```

Input before the check [1]; correct invalid condition using OR [1]; error message inside the loop [1]; input
repeated inside the loop [1].
**(b)** One mark for each correct test (data, type and expected result), for example:
- 5, normal, accepted [1]
- 2, boundary, accepted (or 8, boundary, accepted) [1]
- 9, boundary just outside, rejected (or 1) [1]
- 20 or `"four"`, erroneous, rejected [1]

**(c)** Boundary values check that the limits 2 and 8 are handled with the correct operators, where errors such
as `<` instead of `≤` are most likely [1].

**7.** **(a)**

```
SUBROUTINE ValidNickname(nick)
  IF LEN(nick) ≥ 3 THEN
    RETURN True
  ENDIF
  RETURN False
ENDSUBROUTINE
```

Function with the parameter [1]; correct length test with `≥ 3` [1]; True and False returned [1].
**(b)** An empty string has a length of 0, which is already less than 3, so it is rejected by the length check
[1].

**8.** One possible answer:

```
attempts ← 0
success ← False
REPEAT
  OUTPUT "Username:"
  user ← USERINPUT
  OUTPUT "Password:"
  pass ← USERINPUT
  IF user = "tutor21" AND pass = "Heron&Fox" THEN
    success ← True
  ENDIF
  attempts ← attempts + 1
UNTIL success OR attempts = 3
IF success THEN
  OUTPUT "Access granted"
ELSE
  OUTPUT "Locked out"
ENDIF
```

Username and password both input inside a loop [1]; both compared with AND [1]; attempt counter initialised and
increased [1]; loop ends on success [1]; loop ends after three failures [1]; correct message output after the loop
[1].

**9.** **(a)** It repeats while the value is valid and stops as soon as an **invalid** value is entered, so it
accepts only invalid data [1].
**(b)** `UNTIL p ≥ 0 AND p ≤ 100` [1].

**10.** **(a)** `CHAR_TO_CODE(row) ≥ 65 AND CHAR_TO_CODE(row) ≤ 77`: lower limit 65 [1]; upper limit 77 for M
combined with AND [1].
**(b)** Accept: `"A"` or `"M"`, because it is on the edge of the valid range and should be accepted [1]. Reject:
`"N"` (or `"@"`, code 64), because it is just outside the range and should be rejected [1].

**11.** The messages tell an intruder when they have found a real username, so they can then concentrate on
guessing its password [1]. Improvement: output one general message such as "Username or password incorrect" for
any failure [1].

**12.** 0 and 500.01 are just outside the limits and should be rejected, testing that the program uses `> 0`
and `≤ 500` correctly [1]; 0.01 and 500.00 are the smallest and largest valid values and should be accepted [1];
`"free"` is erroneous data of the wrong type, testing that the program rejects it without crashing [1].

---

## Where marks are usually lost

- Writing `AND` in the invalid condition, giving a loop that never repeats.
- Giving test data without its expected result.
- Checking the password but not the username.
- Forgetting to count attempts, or never stopping after three failures.
- Using a character code for M other than 77 (65 + 12).
