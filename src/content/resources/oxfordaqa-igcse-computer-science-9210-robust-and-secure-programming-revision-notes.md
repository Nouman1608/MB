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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-robust-and-secure-programming--01-robust-and-secure.webp" width="900" height="640" alt="A robust program keeps working sensibly with unexpected input and is supported by validation; a secure program only lets authorised users in and is supported by authentication; testing checks both. Validation only checks that data is reasonable: an age of 15 passes a range check of 11 to 18 even if the user is really 16." loading="lazy">
  <figcaption>Validation makes a program robust, authentication makes it secure, and testing checks both.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-robust-and-secure-programming--03-validation-checks.webp" width="900" height="630" alt="Three checks, each written as the condition that makes input invalid: presence, LEN(name) = 0; minimum length, LEN(username) &lt; 6; range, qty &lt; 1 OR qty > 20. On a length line from 0 to 7, lengths 0 to 5 fail the minimum-length check and 6 or more pass; the empty string, length 0, is already rejected, so a separate presence check is not needed." loading="lazy">
  <figcaption>Checks can overlap: the minimum-length check already rejects an empty string.</figcaption>
</figure>

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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-robust-and-secure-programming--02-validation-loop.webp" width="900" height="906" alt="Pseudocode and a flowchart for validating an age from 11 to 18. After the first input, while age &lt; 11 OR age > 18 is True the program shows an error message and asks again; once it is False the valid age is used. The REPEAT version instead repeats until age ≥ 11 AND age ≤ 18." loading="lazy">
  <figcaption>Keep asking until the input passes; the invalid test uses OR, the valid test uses AND.</figcaption>
</figure>

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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-robust-and-secure-programming--04-authentication-routine.webp" width="900" height="830" alt="A flowchart of the login routine. The username and password are input and checked together with AND. If both match, success is set to True; otherwise attempts goes up by 1 and a message says &quot;Incorrect username or password&quot;. The loop repeats until success OR attempts = MaxAttempts, then outputs Welcome or access denied." loading="lazy">
  <figcaption>Check both items with AND; stop on success OR when the attempts run out.</figcaption>
</figure>

## Test data

| Type | What it is | Range 1 to 10 example | Should be |
|---|---|---|---|
| Normal | Typical valid data | 5 | Accepted |
| Boundary | On the edge of the range | 1, 10 | Accepted |
| Boundary (just outside) | First invalid values | 0, 11 | Rejected |
| Erroneous | Invalid data | 47, −3, `"five"` | Rejected |

Some sources call 0 and 11 erroneous. **Always state the expected result**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-robust-and-secure-programming--05-test-data-quantity.webp" width="900" height="728" alt="A number line with the valid range 1 to 20 shaded. Normal data 7 is accepted. Boundary values 1 and 20 are accepted, and 0 and 21 just outside are rejected. Erroneous data such as 35, −4 and the text &quot;ten&quot; is rejected. Each type is listed with what the test proves." loading="lazy">
  <figcaption>Test inside, on and just beyond each limit, plus wrong data, and state the expected result for each.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-robust-and-secure-programming--06-password-test-plan.webp" width="900" height="618" alt="Four tests for a rule that passwords must be at least 8 characters. Sunbird42x (10 characters) is normal and accepted; Sunbird4 (8) is boundary and accepted, checking ≥ not >; Sunbird (7) is boundary and rejected as the longest invalid length; the empty string is erroneous and rejected." loading="lazy">
  <figcaption>Test just on and just below the minimum length, plus a typical and an empty value.</figcaption>
</figure>

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
