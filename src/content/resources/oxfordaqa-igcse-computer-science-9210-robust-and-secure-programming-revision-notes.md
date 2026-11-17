---
title: "OxfordAQA IGCSE Computer Science (9210): Robust and secure programming -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.2.12: validation checks, authentication routines, test data types, traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-17
featured: false
---

Condensed notes for section **3.2.12 Robust and secure programming** of OxfordAQA International GCSE Computer
Science (9210). The full routines and a password test plan are in the [robust and secure programming study
guide](/resources/oxfordaqa-igcse-computer-science-9210-robust-and-secure-programming/).

## What the specification asks

- Write **simple data validation routines**: e.g. minimum string length, empty string, numeric range (such as 1
  to 10).
- Write **simple authentication routines** using a **username and password** in **plain text** (no encryption
  needed).
- **Select** normal (typical), boundary and erroneous **test data**, and **justify** the choice.

## Validation essentials

- Validation checks data is **reasonable** (follows rules), not that it is **true**.
- Structure: **input → check → repeat until valid**.

| Check | Valid when | Invalid when |
|---|---|---|
| Presence (not empty) | `LEN(s) > 0` | `LEN(s) = 0` |
| Minimum length *n* | `LEN(s) ≥ n` | `LEN(s) < n` |
| Range low to high | `x ≥ low AND x ≤ high` | `x < low OR x > high` |

## Two loop templates

```
REPEAT                                  -- simplest
  OUTPUT "Enter a score (0 to 50)"
  score ← STRING_TO_INT(USERINPUT)
UNTIL score ≥ 0 AND score ≤ 50

OUTPUT "Enter a code"                   -- with an error message
code ← USERINPUT
WHILE LEN(code) < 4
  OUTPUT "Code must be at least 4 characters"
  code ← USERINPUT
ENDWHILE
```

## Authentication essentials

- Compare **both** username and password: `user = storedUser AND pass = storedPass`.
- Loop to allow retries; often **limit attempts** with a counter and a constant.
- Loop ends on **success OR attempts used up**.
- Give a **general** error message ("username or password incorrect").
- Comparisons are **case-sensitive**.
- Plain text only at this level.

```
attempts ← 0
REPEAT
  user ← USERINPUT
  pass ← USERINPUT
  ok ← (user = "admin7" AND pass = "Lark55")
  attempts ← attempts + 1
UNTIL ok OR attempts = 3
```

## Test data

| Type | What it is | Range 1 to 10 example | Should be |
|---|---|---|---|
| Normal | Typical valid data | 5 | Accepted |
| Boundary | On the edge of the range | 1, 10 | Accepted |
| Boundary (just outside) | First invalid values | 0, 11 | Rejected |
| Erroneous | Invalid data | 47, −3, `"five"` | Rejected |

Some sources call 0 and 11 erroneous. **Always state the expected result**.

## Justifications to reuse

- **Normal:** proves ordinary valid input is processed correctly.
- **Boundary:** proves the limits use the right operator (`≤`, not `<`).
- **Erroneous:** proves invalid input is rejected and the program does not crash.

## Key terms

| Term | Meaning |
|---|---|
| Robust | Copes with invalid or unexpected input without failing |
| Validation | Checking input follows set rules before it is used |
| Presence check | Checking that something has been entered (string not empty) |
| Length check | Checking a string has an allowed number of characters |
| Range check | Checking a number lies between a lower and an upper limit |
| Authentication | Confirming a user's identity, here with username and password |
| Normal data | Typical valid test data |
| Boundary data | Test data at the limits of the valid range |
| Erroneous data | Invalid test data that should be rejected |

## Exam traps

- "Validation ensures data is correct": wrong; it checks it is **reasonable**.
- Invalid range written with `AND`: `x < 1 AND x > 10` is never true.
- Boundary data from one side only.
- Test data without an expected result.
- Authentication that checks only the username or only the password.
- Range check without converting input from string first.
- An empty-string check **and** a minimum-length check together: the length check alone already rejects `""`.

## Self-test

1. State the difference between validation and authentication.
2. Write a condition that is true when `name` is empty.
3. Write a condition that is true when `pin` (a string) has fewer than 4 characters.
4. Write a condition that is true when `temp` is outside the range −10 to 40.
5. Give one normal, two boundary and one erroneous value for a mark out of 100.
6. Explain why boundary data is important.
7. Explain why an authentication routine should not say which detail was wrong.
8. Why might an authentication loop use `OR` in its `UNTIL` condition?
9. Can validation prove a user has entered their real date of birth? Explain.
10. A program accepts 1 to 10 but rejects 10. Which type of test data revealed the error, and what is the likely
cause?
11. Why is `"abc"` a useful erroneous test value for a range check on a number?
12. Does the specification require passwords to be encrypted in your routines?

**Answers:**
1. Validation checks data follows rules; authentication checks that the user is who they claim to be.
2. `LEN(name) = 0` (or `name = ""`).
3. `LEN(pin) < 4`.
4. `temp < -10 OR temp > 40`.
5. For example: normal 64; boundary 0 and 100 (accepted), or −1 and 101 (rejected); erroneous 250 or `"sixty"`.
6. It checks the limits of the valid range, where errors with `<` and `≤` are most likely.
7. Revealing that the username was correct would help an unauthorised person guess the password.
8. The loop must stop when the login succeeds or when the attempts run out, whichever comes first.
9. No; validation checks the date is reasonable (a real date in a sensible range), not that it is true.
10. Boundary data; the condition probably uses `< 10` instead of `≤ 10`.
11. It tests what happens when the input is not a number, which could crash a program that converts it without
checking.
12. No; plain text usernames and passwords are used.

## Related resources

- [Robust and secure programming study guide](/resources/oxfordaqa-igcse-computer-science-9210-robust-and-secure-programming/)
- [Robust and secure programming practice questions](/resources/oxfordaqa-igcse-computer-science-9210-robust-and-secure-programming-practice/)
- [Data structures, subroutines and translators revision notes](/resources/oxfordaqa-igcse-computer-science-programming-structures-and-translators-revision-notes/)
