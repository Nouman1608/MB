---
title: "OxfordAQA IGCSE Computer Science (9210): String handling operations in a programming language -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 2 – Programming"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 2.08
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "string-handling-operations-9210"
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on length, substring, position, character codes and string conversion."
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

Related: [String handling study guide](/resources/oxfordaqa-igcse-computer-science-9210-string-handling-operations/) | [String handling revision notes](/resources/oxfordaqa-igcse-computer-science-9210-string-handling-operations-revision-notes/)

These questions cover section 3.2.8 String handling operations in a programming language of the OxfordAQA
International GCSE Computer Science (9210) specification. Positions are counted from 0, and
`SUBSTRING(start, end, s)` includes both the start and the end positions. In ASCII, `"A"` is 65 and `"a"` is 97.

---

## Section A

**1.** `city ← "Kampala"`. State the result of:
**(a)** `LEN(city)` **(b)** `POSITION(city, "p")` **(c)** `SUBSTRING(1, 3, city)` **(d)** `city + "!"`. **[4]**

**2.** State the result of `CHAR_TO_CODE("J")`. **[1]**

**3.** State the result of `CODE_TO_CHAR(CHAR_TO_CODE("b") + 2)`. **[1]**

**4.** State the value and the data type of the result of:
**(a)** `"6" + "6"` **(b)** `STRING_TO_INT("6") + 6`. **[4]**

**5.** Explain what is meant by **concatenation**. **[1]**

## Section B

**6.** Write pseudocode that asks the user for a word and outputs its first and last characters. **[4]**

**7.** Study this pseudocode:

```
s ← "level"
r ← ""
FOR i ← 0 TO LEN(s) - 1
  r ← SUBSTRING(i, i, s) + r
ENDFOR
IF r = s THEN
  OUTPUT "Yes"
ELSE
  OUTPUT "No"
ENDIF
```

**(a)** State the value of `r` after the first two passes of the loop. **[2]**
**(b)** State the output, and describe the purpose of the algorithm. **[2]**
**(c)** State the output if `s` were `"Level"`, and explain why. **[2]**

**8.** A company makes product codes from the first two letters of a category, a dash, and a stock number. For
example, category `"Garden"` and stock number `57` give `"Ga-57"`.

**(a)** Write a single pseudocode statement that sets `code` from the variables `category` and `stockNum` (an
integer). **[3]**
**(b)** Explain why a conversion operation is needed in your answer. **[1]**

**9.** Write pseudocode that inputs a password and outputs `"Contains a digit"` if any character is a digit, or
`"No digit"` otherwise. Use character codes. **[5]**

**10.** A program converts a single lower-case letter `ch` to a capital letter.

**(a)** Write an expression that does this using character codes. **[2]**
**(b)** Explain why the method works. **[1]**

**11.** A sensor sends readings as strings, such as `"23.6"`. A program receives two readings, `r1` and `r2`, and
must output their mean.

**(a)** Write the pseudocode. **[3]**
**(b)** State the output for `"23.6"` and `"24.0"`. **[1]**

**12.** Explain why a programmer extracting the last two digits of the year 2007 as text should use
`SUBSTRING(2, 3, INT_TO_STRING(year))` rather than `INT_TO_STRING(year MOD 100)`. **[2]**

**13.** An email address is stored in `email`, for example `"tariq@example.org"`. It contains exactly one `"@"`.

**(a)** Write pseudocode that uses `POSITION` and `SUBSTRING` to output the part of the address before the `"@"`.
**[2]**
**(b)** Write pseudocode that outputs the part after the `"@"`. **[2]**
**(c)** State both outputs for the example address. **[2]**

---

## Answers

**1.** (a) 7 [1] (b) 3 [1] (c) `"amp"` [1] (d) `"Kampala!"` [1].

**2.** 74 [1].

**3.** `"d"` [1].

**4.** **(a)** `"66"` [1], a string [1].
**(b)** 12 [1], an integer [1].

**5.** Joining two or more strings together end to end to make one string [1].

**6.** One possible answer:

```
OUTPUT "Enter a word"
word ← USERINPUT
OUTPUT SUBSTRING(0, 0, word)
OUTPUT SUBSTRING(LEN(word) - 1, LEN(word) - 1, word)
```

Prompt and input [1]; first character at position 0 [1]; use of `LEN(word) - 1` for the last position [1]; both
characters output [1].

**7.** **(a)** After pass 1: `"l"` [1]; after pass 2: `"el"` [1].
**(b)** "Yes" [1]. It reverses the string and checks whether it reads the same backwards as forwards (a
palindrome) [1].
**(c)** "No" [1], because the reversed string is `"leveL"`, and capital and lower-case letters have different
character codes, so the strings are not equal [1].

**8.** **(a)** `code ← SUBSTRING(0, 1, category) + "-" + INT_TO_STRING(stockNum)`
Substring of the first two letters [1]; dash concatenated [1]; stock number converted to a string and
concatenated [1].
**(b)** `stockNum` is an integer and must be a string before it can be joined to other strings [1].

**9.** One possible answer:

```
password ← USERINPUT
hasDigit ← False
FOR i ← 0 TO LEN(password) - 1
  code ← CHAR_TO_CODE(SUBSTRING(i, i, password))
  IF code ≥ 48 AND code ≤ 57 THEN
    hasDigit ← True
  ENDIF
ENDFOR
IF hasDigit THEN
  OUTPUT "Contains a digit"
ELSE
  OUTPUT "No digit"
ENDIF
```

Input and loop over every character [1]; each character extracted and converted to its code [1]; range check
48 to 57 [1]; flag set when a digit is found [1]; correct message output after the loop [1].

**10.** **(a)** `CODE_TO_CHAR(CHAR_TO_CODE(ch) - 32)`: conversion to code and back [1]; subtracting 32 [1].
**(b)** Letter codes run in sequence and each lower-case letter's code is 32 more than its capital letter's
code [1].

**11.** **(a)**

```
v1 ← STRING_TO_REAL(r1)
v2 ← STRING_TO_REAL(r2)
OUTPUT (v1 + v2) / 2
```

Both strings converted to real [1]; values added with brackets [1]; divided by 2 and output [1].
**(b)** 23.8 [1].

**12.** `2007 MOD 100` is the integer 7, so converting it gives `"7"` and the leading zero is lost [1]; taking the
characters at positions 2 and 3 of the string `"2007"` gives `"07"`, which keeps both digits [1].


**13.** **(a)** `at ← POSITION(email, "@")` [1], then `OUTPUT SUBSTRING(0, at - 1, email)` [1].
**(b)** `OUTPUT SUBSTRING(at + 1, LEN(email) - 1, email)`: start just after the `"@"` [1]; end at the last
position [1].
**(c)** `"tariq"` [1] and `"example.org"` [1].
---

## Where marks are usually lost

- Counting positions from 1 when the question counts from 0.
- Forgetting that `LEN(s) - 1` is the last position.
- Joining an integer to a string without `INT_TO_STRING`.
- Treating `"Level"` and `"level"` as equal.
- Checking for a digit with a condition that can never be true, such as `code < 48 AND code > 57`.
