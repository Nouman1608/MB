---
title: "OxfordAQA IGCSE Computer Science (9210): Character encoding -- Practice Questions"
seoTitle: "OxfordAQA IGCSE CS 9210 Character Encoding Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 3: Data representation"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 3.05
syllabusTopics:
  - qualification: "igcse"
    topic: "data-representation-9210"
  - qualification: "igcse"
    topic: "data-representation-9210"
    subtopic: "character-encoding-9210"
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on character sets, 7-bit ASCII codes, sequences of codes and Unicode."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs; examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Character encoding study guide](/resources/oxfordaqa-igcse-computer-science-9210-character-encoding/) | [Character encoding revision notes](/resources/oxfordaqa-igcse-computer-science-9210-character-encoding-revision-notes/)

These questions cover section 3.3.5 Character encoding of the OxfordAQA International GCSE Computer Science (9210)
specification.

Use this information where needed: in 7-bit ASCII the capital letters run in order from A = 65, the lower-case
letters run in order from a = 97, the digits run in order from 0 = 48, and the space is 32.

---

## Section A

**1.** State what is meant by a character set. **[2]**

**2.** State the number of different characters that can be represented in 7-bit ASCII, and show how the number is
calculated. **[2]**

**3.** State the ASCII code of each of these characters.

**(a)** J **[1]**

**(b)** S **[1]**

**(c)** the digit character 6 **[1]**

**4.** State the character that has each of these ASCII codes.

**(a)** 69 **[1]**

**(b)** 102 **[1]**

## Section B

**5.** The word DOG is stored using 7-bit ASCII.

**(a)** Write down the decimal character code of each letter. **[2]**

**(b)** State the number of bits needed to store the word. **[1]**

**6.** The following character codes are stored in a file: 77, 97, 116, 104, 115. State the word they represent. **[2]**

**7.** The 7-bit binary pattern 100 1011 is the code for a character.

**(a)** Convert the pattern to a decimal number. **[1]**

**(b)** State the character it represents. **[1]**

**8.** State the ASCII code for the lower-case letter z, and show how you worked it out. **[2]**

**9.** A student types the digit 3 into a text file. Explain why the value stored for this character is not the binary
number 0000 0011, and state what is stored instead. **[3]**

**10.** Describe the purpose of Unicode. **[2]**

**11.** Give two advantages of Unicode over 7-bit ASCII and one disadvantage. **[3]**

**12.** A message has 25 characters. Calculate the number of bits needed to store it using 7-bit ASCII. **[2]**

**13.** A travel company wants a website that shows text in English, Arabic and Japanese. Explain why the company should
use Unicode rather than ASCII. **[3]**

**14.** A program changes a lower-case letter into a capital letter by subtracting 32 from its code.

**(a)** The ASCII code for d is 100. State the code and the letter that the program produces. **[2]**

**(b)** Explain why this method works for the letters of the alphabet. **[2]**

**15.** A text file written using ASCII is opened on a system that uses Unicode. The file contains only English letters
and digits. Explain why the text is still displayed correctly. **[2]**

---

## Answers

**1.** A list (or set) of characters that a computer system can represent [1]; each character has its own code [1].

**2.** 128 [1]; 2 to the power 7 (7 bits give 2⁷ patterns) [1].

**3.** **(a)** 74 [1] (65 + 9). **(b)** 83 [1] (65 + 18). **(c)** 54 [1] (48 + 6).

**4.** **(a)** E [1] (65 + 4). **(b)** f [1] (97 + 5).

**5.** **(a)** D is 68, O is 79 and G is 71 [2] (one mark for the method of counting places from 65, one mark for all
three codes correct). **(b)** 3 × 7 = 21 bits [1].

**6.** Maths [2] (M = 77, a = 97, t = 116, h = 104, s = 115; one mark for at least three letters correct).

**7.** **(a)** 75 [1] (64 + 8 + 2 + 1). **(b)** K [1] (65 + 10).

**8.** 122 [1]; a is 97 and z is the 26th letter, 25 places after a, so 97 + 25 = 122 [1].

**9.** The digit 3 is stored as a character and not as a number [1]. Characters are stored using their character
codes [1]; the code for the character 3 is 51, which is 011 0011 in 7 bits [1].

**10.** To provide a single (shared) set of codes [1] for the characters of many different languages and for special
symbols [1].

**11.** Advantages, any two from: it can represent many more characters [1]; it can represent the alphabets of many
languages [1]; it provides one standard that works across different systems [1]; one document can contain several
languages [1]. Disadvantage: it uses more bits per character, so files can be larger [1].

**12.** 25 × 7 [1] = 175 bits [1].

**13.** ASCII has only 128 characters, which are mainly for English [1]; it cannot represent Arabic or Japanese
characters [1]; Unicode has codes for characters of many languages, so all three languages can appear on the same
site [1].

**14.** **(a)** 100 - 32 = 68 [1]; the letter is D [1].
**(b)** The capital letters (65 to 90) and the lower-case letters (97 to 122) are in the same order [1]; each
lower-case letter has a code that is 32 more than the matching capital [1].

**15.** Unicode uses the same codes as ASCII for codes up to 127 [1]; English letters and digits are all within that
range, so they keep the same codes and are shown correctly [1].

---

## Where marks are usually lost

- Saying 7-bit ASCII has 256 characters in Question 2.
- Confusing the character 3 with the number 3 in Question 9.
- Counting one place too many or too few in a sequence, such as J = 65 + 10.
- Giving only "Unicode is better" instead of saying it has more characters.
- Forgetting that the space is a character with a code of its own.
