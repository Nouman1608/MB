---
title: "OxfordAQA A-Level Computer Science (9645): Representing characters -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Representing Characters Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 5 – Representing data"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 5.4
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "representing-data"
  - qualification: "a-level"
    topic: "representing-data"
    subtopic: "representing-characters-oxfordaqa-alevel-cs"
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.5.4: character sets, ASCII, Unicode and UTF-8, working out codes and digits as characters."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and practice on this content. They are **not** reproduced past-paper questions, and they do **not** replicate the exam's exact structure, question count or mark tariffs -- examination boards hold copyright in their own papers. Use these alongside the official past papers from your board or school.

These questions practise sub-topic **3.5.4 Representing characters** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: character sets, ASCII, Unicode, UTF-8, blocks of codes and the difference between a digit's character code and its binary value.

Related pages: [representing characters study guide](/resources/oxfordaqa-a-level-computer-science-9645-representing-characters/) · [representing characters revision notes](/resources/oxfordaqa-a-level-computer-science-9645-representing-characters-revision-notes/)

## Section A

**1.** State what is meant by a character set. **[2]**

**2.** State the number of different characters that can be represented in 7-bit ASCII. **[1]**

**3.** State the number of bits that UTF-8 can use to represent one character. **[1]**

**4.** The ASCII code for `A` is 65. State the ASCII code for `T`. Show how you worked it out. **[2]**

## Section B

**5.** The ASCII code for `a` is 97.

**(a)** State the character with code 112. **[2]**
**(b)** Explain how the code for an upper-case letter can be found from the code of the same letter in lower case. **[2]**
**(c)** The code for `D` is 68. Use your answer to (b) to state the code for `d`. **[1]**

**6.** Write the word `Hi5` as a sequence of 7-bit ASCII codes. Use `H` = 72, `i` = 105 and `5` = 53, and give each code in decimal and binary. **[4]**

**7.** Explain **two** reasons why Unicode was introduced. **[4]**

**8.** UTF-8 was designed with backwards compatibility with ASCII.

**(a)** Explain what this means. **[2]**
**(b)** State **one** advantage of UTF-8 using a variable number of bits per character. **[1]**
**(c)** A text file contains 1,000 characters, all of them from the ASCII set. State the size of the file in bytes when stored in UTF-8. **[1]**

**9.** The digit character `8` has the ASCII code 56.

**(a)** Give the pure binary representation of the number 8. **[1]**
**(b)** Give the 7-bit ASCII pattern for the character `8`. **[1]**
**(c)** Give the 8-bit UTF-8 pattern for the character `8`. **[1]**
**(d)** Explain why the two patterns in (a) and (b) are different. **[2]**

**10.** A program reads the two characters `3` and `4` typed by a user. It adds their ASCII codes (51 and 52) and prints the result.

**(a)** State the result printed. **[1]**
**(b)** Explain why this is not the answer the user expects. **[2]**
**(c)** Describe how the program should convert each character to its numeric value. **[2]**

## Answers

**1.** A character set is the **list of characters** that a system can represent [1], in which each character has a **unique code** [1]. **[2]**

**2.** 2^7 = **128** [1]. **[1]**

**3.** **8, 16, 24 or 32** bits [1]. **[1]**

**4.** `T` is 19 places after `A` [1], so the code is 65 + 19 = **84** [1]. **[2]**

**5. (a)** 112 − 97 = 15 places after `a` [1], so the character is **p** [1]. **[2]**
**(b)** The lower-case block starts 32 above the upper-case block (97 and 65), so subtract **32** from the lower-case code [1] to get the upper-case code (and add 32 for the reverse) [1]. **[2]**
**(c)** 68 + 32 = **100** [1]. **[1]**

**6.**

| Character | Decimal code | 7-bit binary |
|---|---|---|
| H | 72 | 1001000 |
| i | 105 | 1101001 |
| 5 | 53 | 0110101 |

Each code correct in decimal and binary [1 each for H, i and 5]; sequence in the correct order [1]. **[4]**

**7.** Any two reasons, each with an explanation [2 each]: ASCII has only **128 codes**, so it cannot represent the characters of **other languages and writing systems** (such as Chinese or Arabic) [1], and Unicode gives each of these a unique code [1]; ASCII cannot represent many **symbols or emoji** [1], which Unicode includes [1]; different **extended character sets** used the same codes for different characters, so text could be misread [1], whereas Unicode gives every character one unique code so several languages can be mixed in one document [1]. **[4]**

**8. (a)** In both UTF-8 and ASCII the codes **0 to 127** represent the same characters [1], so a file that contains only ASCII characters is also valid UTF-8 and can be read by software that expects either [1]. **[2]**
**(b)** Any one [1]: common (ASCII) characters use only **8 bits**, so text files stay small; rarer characters can use more bits so a very large character set is still possible.
**(c)** **1,000 bytes** [1], since each ASCII character is one byte in UTF-8. **[1]**

**9. (a)** **1000** [1]. **[1]**
**(b)** **0111000** [1]. **[1]**
**(c)** **00111000** [1]. **[1]**
**(d)** The pattern in (a) is the **number** 8 written in binary [1]; the pattern in (b) is the **code of the character** `8`, which is a symbol with code 56 (48 + 8) and not the number itself [1]. **[2]**

**10. (a)** 51 + 52 = **103** [1]. **[1]**
**(b)** The user expects 7 (3 + 4) [1], but the program added the **character codes** of the digits, not their numeric values [1]. **[2]**
**(c)** **Subtract 48** (the code of `0`) from the code of each character to get its value [1], then add the two values (3 + 4 = 7) [1]. **[2]**

## Frequently asked questions

**Do I have to learn the ASCII table?**
No. The specification says you are not expected to remember the codes of particular characters, but you may be asked to work one out from another code in the same block.

**Is Unicode the same as UTF-8?**
No. Unicode is the character set; UTF-8 is one of several ways to encode it.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.5.4 Representing characters.
