---
resourceId: "mb-ap-csp-2.1-study-guide"
title: "Binary Numbers: Study Guide (Computer Science Principles 2.1)"
description: "How binary place value works, converting between binary and decimal, how many values n bits can hold, sampling, overflow and round-off, with two fully worked examples."
course: "computer-science-principles"
unit: 2
topics: ["2.1"]
resourceType: "study-guide"
prerequisites: 
  - "Place value in decimal numbers and powers of 2"
  - "Basic addition and subtraction by hand"
learningObjectives: 
  - "Convert positive whole numbers between binary and decimal, and check the result"
  - "Compare and order binary numbers, and state how many values n bits can represent"
  - "Explain how bits are grouped to represent numbers, characters and colours, and why the same bits can mean different things"
  - "Explain analog versus digital data, sampling, overflow and round-off errors"
skills: ["1", "3", "4"]
studyMinutes: 45
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-2.1-revision-notes", "mb-ap-csp-2.1-practice", "mb-ap-csp-2.1-checklist"]
next: "mb-ap-csp-2.1-practice"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "A bit is a binary digit (0 or 1); a byte is 8 bits; every digital value is built from bits."
  - "In binary, each place is worth a power of 2: 1, 2, 4, 8, 16 and so on, from the right."
  - "n bits can represent 2 to the power n different values, so each extra bit doubles the number of values."
  - "The same sequence of bits can represent different data in different contexts, such as a number, a character or a colour."
  - "Fixed numbers of bits limit the range of integers (overflow) and the accuracy of real numbers (round-off); analog data are approximated by sampling."
faqs:
  - question: "What is the quickest way to convert decimal to binary?"
    answer: "Write the place values 128, 64, 32, 16, 8, 4, 2, 1. Start from the largest value that fits into the number, write 1 there, subtract, and continue to the right. Write 0 for any place value that does not fit. Check by adding the place values with a 1."
  - question: "How many values can 6 bits represent?"
    answer: "2 to the power 6, which is 64 values (0 to 63 when the values are non-negative whole numbers)."
  - question: "Why do computers use binary?"
    answer: "Electronic circuits can reliably tell two states apart, such as on and off, or high and low voltage. Everything else (numbers, text, images, sound) is built by grouping bits and agreeing on what the groups mean."
  - question: "What is the difference between overflow and round-off?"
    answer: "Overflow happens when a whole number is too large to fit in the fixed number of bits available. Round-off happens when a real number cannot be stored exactly and is stored as an approximation."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Why does a computer use only 0 and 1?

A computer stores and moves data using devices that are reliably in one of two states: on or off, high voltage or low voltage, magnetised one way or the other. Two states are easy to tell apart even when electrical signals are slightly noisy. We write the two states as **0** and **1**. One such symbol is a **bit**, short for **binary digit**. A group of **8 bits is a byte**.

Everything a computer handles (a number, a letter, a colour, a song) is, at the lowest level, a sequence of bits. The reason a computer can still show you a photograph is **abstraction**: bits are *grouped* into larger units, and everyone (the programs and the hardware) agrees how to interpret each group. Abstraction reduces complexity by hiding details we do not need and bringing together those we do. You think about "the colour orange"; the computer handles a group of bits.

## How binary counting works

In the decimal system each place is worth ten times the place to its right: ones, tens, hundreds. Binary works the same way, but with **two** instead of ten. From the right, the places are worth 1, 2, 4, 8, 16, 32, 64, 128, and so on, each a power of 2 (the number 2 multiplied by itself that many times). A digit 1 means "include this place value"; a 0 means "leave it out".

<figure>
<svg viewBox="0 0 640 230" role="img" aria-labelledby="bin-title bin-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="bin-title">The binary number 00101101 shown with its place values</title>
<desc id="bin-desc">A row of eight boxes with place values from left to right: 128, 64, 32, 16, 8, 4, 2, 1. Beneath them the bits are 0, 0, 1, 0, 1, 1, 0, 1. The boxes holding a 1 are drawn with a thick border and are those for 32, 8, 4 and 1. A line below adds 32 plus 8 plus 4 plus 1 to give 45.</desc>
<rect x="0" y="0" width="640" height="230" fill="#ffffff"/>
<g fill="none" stroke="#1d2b44">
<rect x="40" y="30" width="70" height="46" stroke-width="1.5"/>
<rect x="110" y="30" width="70" height="46" stroke-width="1.5"/>
<rect x="180" y="30" width="70" height="46" stroke-width="4"/>
<rect x="250" y="30" width="70" height="46" stroke-width="1.5"/>
<rect x="320" y="30" width="70" height="46" stroke-width="4"/>
<rect x="390" y="30" width="70" height="46" stroke-width="4"/>
<rect x="460" y="30" width="70" height="46" stroke-width="1.5"/>
<rect x="530" y="30" width="70" height="46" stroke-width="4"/>
</g>
<g fill="#1d2b44" font-size="18" text-anchor="middle">
<text x="75" y="60">128</text><text x="145" y="60">64</text><text x="215" y="60">32</text><text x="285" y="60">16</text>
<text x="355" y="60">8</text><text x="425" y="60">4</text><text x="495" y="60">2</text><text x="565" y="60">1</text>
</g>
<g fill="#1d2b44" font-size="26" font-weight="bold" text-anchor="middle">
<text x="75" y="115">0</text><text x="145" y="115">0</text><text x="215" y="115">1</text><text x="285" y="115">0</text>
<text x="355" y="115">1</text><text x="425" y="115">1</text><text x="495" y="115">0</text><text x="565" y="115">1</text>
</g>
<g fill="#1d2b44" font-size="15" text-anchor="middle">
<text x="320" y="20">place value (a power of 2)</text>
<text x="320" y="150">bit: a thick box means the bit is 1</text>
<text x="320" y="190" font-size="18">32 + 8 + 4 + 1 = 45, so 00101101 in binary is 45 in decimal</text>
</g>
</svg>
<figcaption>Figure 1. The 8-bit pattern 00101101 with place values. The bits that are 1 are shown with a thick border; adding their place values gives 45.</figcaption>
</figure>

## Binary to decimal

Write the place values over the bits, then add the place values that sit above a 1.

For 1011: the places from the right are 1, 2, 4, 8. The bits 1, 0, 1, 1 (read from the left) sit above 8, 4, 2, 1. So the value is 8 + 0 + 2 + 1 = **11**.

## Decimal to binary

Two methods work. Use one and check with the other.

**Method A: largest place value first.** Take the largest place value not bigger than the number, write 1 under it, subtract it, and repeat with what is left. Write 0 under any place value that does not fit.

**Method B: repeated division by 2.** Divide by 2 and write down the remainder (0 or 1); repeat with the quotient until it is 0; read the remainders from last to first.

## Comparing binary numbers and counting values

To compare two binary numbers, convert both to decimal, or compare **place by place from the left**: the number with a 1 in the first position where they differ is larger. Longer numbers (with a leading 1) are larger than shorter ones. So 10110 (22) is larger than 1101 (13).

**How many values can n bits represent?** Each bit has two possible values, and every extra bit **doubles** the number of patterns. 1 bit gives 2 patterns, 2 bits give 4, 3 bits give 8, and n bits give 2 to the power n. For whole numbers starting at 0 the largest value is 2 to the power n, minus 1. Eight bits (a byte) gives 256 patterns, covering 0 to 255. To find the number of bits needed to represent a certain number of different values, find the smallest n for which 2 to the power n is at least that number.

## Same bits, different meanings

A pattern of bits has no meaning until we say what it stands for. The pattern 01000001 can be the whole number 65, or the letter "A" in a text code that assigns 65 to A, or part of a colour, or a piece of a sound sample. The **context** (which program is reading it, and what the data are declared to be) decides. Numbers, characters and colours are all examples of abstractions built by grouping bits.

## Analog data, sampling and approximation

**Analog** data change smoothly over time, with no gaps: the volume of a voice, the position of a runner, the brightness of a sunrise. Computers store **digital** data, in discrete steps. To store analog data we use **sampling**: measure the analog signal at regular intervals (the *samples*), then store each measurement using bits. More samples per second, and more bits per sample, give a closer approximation, but more bits to store. Using digital data to approximate real-world analog data is another example of abstraction.

## Limits: overflow and round-off

A fixed number of bits limits the whole numbers a program can hold. If a calculation produces a number bigger than the largest value that fits, an **overflow error** occurs. Some languages (including the one in the exam reference sheet) allow integers to grow as large as memory allows, but many do not.

Real numbers (numbers with fractional parts) also use a fixed number of bits, so some are stored only as **approximations**. The tiny difference can cause **round-off errors**. For example, a language might store 0.1 as a close, but not exact, binary value. The exam will not ask for specific range limits for real numbers.

## Worked example 1: decimal to binary and back

**Task.** Convert 45 to binary, check it, then convert 11010110 to decimal.

**Part A: 45 to binary (method A).** Place values: 128, 64, 32, 16, 8, 4, 2, 1.

| Place value | Fits into what is left? | Bit | What is left |
|---|---|---|---|
| 128 | no (128 > 45) | 0 | 45 |
| 64 | no | 0 | 45 |
| 32 | yes | 1 | 45 - 32 = 13 |
| 16 | no (16 > 13) | 0 | 13 |
| 8 | yes | 1 | 13 - 8 = 5 |
| 4 | yes | 1 | 5 - 4 = 1 |
| 2 | no | 0 | 1 |
| 1 | yes | 1 | 0 |

Reading the bits from the top: **00101101**, or 101101 without the leading zeros.

**Check by method B (division).** 45 ÷ 2 = 22 remainder 1; 22 ÷ 2 = 11 remainder 0; 11 ÷ 2 = 5 remainder 1; 5 ÷ 2 = 2 remainder 1; 2 ÷ 2 = 1 remainder 0; 1 ÷ 2 = 0 remainder 1. Reading remainders from last to first: 1, 0, 1, 1, 0, 1 = **101101**. This agrees.

**Part B: 11010110 to decimal.** Bits over place values 128, 64, 32, 16, 8, 4, 2, 1: the 1s are at 128, 64, 16, 4 and 2. The sum is 128 + 64 + 16 + 4 + 2 = **214**.

**Check.** Convert 214 back. 214 - 128 = 86; 86 - 64 = 22; 22 has no 32; 22 - 16 = 6; no 8; 6 - 4 = 2; 2 - 2 = 0; so 128, 64, 16, 4, 2 give 11010110. Consistent.

## Worked example 2: how many bits, and what overflows?

**Scenario.** A fictional ticket machine stores each ticket number in a counter. Tickets are numbered from 0.

**Task.** (a) If there are 300 different tickets, how many bits are needed? (b) A machine with an 8-bit counter shows 11111111 (255) and prints one more ticket. What happens, and what is the term for it?

**(a) Bits needed.** We need the smallest n such that 2 to the power n is at least 300. Eight bits give 2 to the power 8 = 256, which is **fewer** than 300 (the values 0 to 255). Nine bits give 2 to the power 9 = 512, which is enough. So **9 bits** are needed. (In binary, 300 is 100101100, which also has nine digits.)

**(b) Overflow.** The next number is 256, which in binary is 100000000: nine bits. The counter has only eight bits, so the value cannot be stored. The result may wrap around to 00000000 or be wrong in another way, depending on the system. This is an **overflow error**: the value is outside the range that the fixed number of bits can represent.

**Check.** The range of an 8-bit counter is 0 to 255, which is 256 patterns. The 257th ticket, numbered 256, is the first that does not fit. A fix would be to use more bits (for example, 16, which allows 65,536 patterns).

## Common misconceptions

- **"Binary 100 means one hundred."** It means 4 (one 4, no 2, no 1). Say "one zero zero" and convert.
- **"More bits for a number means a bigger number."** Leading zeros add bits without changing the value: 00101101 and 101101 are both 45.
- **"n bits can represent n values."** They can represent 2 to the power n values; each bit doubles the count.
- **"The same bits always mean the same thing."** Meaning depends on context: number, character, colour.
- **"Digital data are exact copies of analog data."** Sampling approximates. A higher sampling rate gives a closer approximation, but it is never an exact copy of a smoothly changing signal.
- **"Overflow and round-off are the same."** Overflow concerns whole numbers outside the range; round-off concerns real numbers that cannot be stored exactly.
- **"A byte is 4 bits."** A byte is 8 bits.

## Where this leads

Next, [Data Compression](/advanced-course-resources/computer-science-principles/2-2-data-compression-study-guide/) asks how to use fewer bits for the same data. Binary also underlies later topics, such as the IP addresses in Unit 4 and the representation of data that programs process in Unit 3. Practise with the [practice questions](/advanced-course-resources/computer-science-principles/2-1-binary-numbers-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-principles/2-1-binary-numbers-revision-notes/), and check your skills on the [checklist](/advanced-course-resources/computer-science-principles/2-1-binary-numbers-checklist/).
