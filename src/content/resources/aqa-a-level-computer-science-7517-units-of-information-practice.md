---
title: "AQA A-Level Computer Science (7517): Units of information -- Practice Questions"
seoTitle: "AQA A-Level CS Units of Information Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data representation"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 5.3
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-representation"
  - qualification: "a-level"
    topic: "fundamentals-of-data-representation"
    subtopic: "units-of-information-7517"
description: "Original AQA 7517 section 4.5.3 questions with answers: bits and bytes, numbers of values, and binary and decimal prefixes in size calculations."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs, because examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Units of information study guide](/resources/aqa-a-level-computer-science-7517-units-of-information/) | [Units of information revision notes](/resources/aqa-a-level-computer-science-7517-units-of-information-revision-notes/)

Use 1 kB = 10³ B, 1 MB = 10⁶ B, 1 GB = 10⁹ B, 1 KiB = 2¹⁰ B, 1 MiB = 2²⁰ B and 1 GiB = 2³⁰ B.

---

## Section A

**1.** State the number of bits in a byte. **[1]**

**2.** State the number of different values that can be represented using 7 bits. **[1]**

**3.** State the name and symbol of the binary prefix that represents 2²⁰. **[2]**

**4.** State the number of bytes in one kilobyte (1 kB) and in one kibibyte (1 KiB). **[2]**

**5.** State what is meant by the term bit. **[1]**

## Section B

**6.** A system stores the colour of each square on a board using a code. There are 70 different colours.

**(a)** Calculate the smallest number of bits needed for each code. Show your working. **[2]**
**(b)** State how many extra colours could be added before another bit would be needed. **[1]**

**7.** An image file is 2.5 MiB in size.

**(a)** Express the size in KiB. **[1]**
**(b)** Express the size in bytes. **[2]**

**8.** A memory buffer holds 4 KiB.

**(a)** Calculate the number of bytes in the buffer. **[1]**
**(b)** Calculate the number of bits in the buffer. **[2]**

**9.** A file has a size of 6,291,456 bytes. Express the size in MiB. Show your working. **[2]**

**10.** A storage drive is advertised as having a capacity of 256 GB. The operating system reports the capacity in GiB.

**(a)** Calculate the capacity in bytes. **[1]**
**(b)** Calculate the capacity reported by the operating system, to one decimal place. **[2]**
**(c)** Explain why the reported figure is smaller than the advertised figure although no storage has been lost. **[2]**

**11.** A phone has 16 GB of storage free. Each photograph is 2.5 MB. Calculate the number of photographs that can be stored. **[2]**

**12.** Explain why a 1 MiB file is larger than a 1 MB file, and calculate the difference in bytes. **[3]**

**13.** An address bus has 12 lines, each carrying one bit of a memory address. Calculate the number of different memory locations that can be addressed. **[2]**

**14.** Explain why the number of bits needed to represent 257 different values is 9 and not 8. **[2]**

**15.** A student says, "8 bits can store numbers up to 256." Explain the error in this statement and give the correct range for unsigned binary numbers using 8 bits. **[3]**

**16.** A text file stores each character in one byte. A document contains 45,000 characters. State the size of the file in kB, and in KiB to one decimal place. **[3]**

---

## Answers

**1.** 8 [1].

**2.** 2⁷ = 128 [1].

**3.** Mebi [1]; Mi [1].

**4.** 1 kB = 1,000 bytes [1]; 1 KiB = 1,024 bytes [1].

**5.** A binary digit; the fundamental unit of information, with the value 0 or 1 [1].

**6. (a)** 2⁶ = 64 is less than 70, so 6 bits are not enough [1]; 2⁷ = 128 is at least 70, so 7 bits are needed [1].
**(b)** 128 − 70 = 58 [1].

**7. (a)** 2.5 × 1,024 = 2,560 KiB [1].
**(b)** 2.5 × 2²⁰ = 2.5 × 1,048,576 [1] = 2,621,440 bytes [1].

**8. (a)** 4 × 1,024 = 4,096 bytes [1].
**(b)** 4,096 × 8 [1] = 32,768 bits [1].

**9.** 6,291,456 ÷ 1,048,576 [1] = 6 MiB [1].

**10. (a)** 256 × 10⁹ = 256,000,000,000 bytes [1].
**(b)** 256,000,000,000 ÷ 1,073,741,824 [1] = 238.4 GiB (to one decimal place) [1].
**(c)** The manufacturer uses decimal prefixes (1 GB = 10⁹ bytes) [1]; the operating system uses binary prefixes, and a gibibyte (2³⁰ bytes) is larger than a gigabyte, so the same number of bytes gives a smaller number of units [1].

**11.** 16 GB = 16,000 MB (16 × 10⁹ bytes ÷ 10⁶) [1]; 16,000 ÷ 2.5 = 6,400 photographs [1].

**12.** A mebibyte uses a binary prefix, so 1 MiB = 2²⁰ = 1,048,576 bytes [1]; a megabyte uses a decimal prefix, so 1 MB = 10⁶ = 1,000,000 bytes [1]; the difference is 48,576 bytes [1].

**13.** Each line has two possible values, so the number of addresses is 2¹² [1] = 4,096 [1].

**14.** 8 bits give 2⁸ = 256 different patterns, which is one fewer than 257 [1]; so one extra bit is needed, and 9 bits give 2⁹ = 512 patterns, which is enough [1].

**15.** 8 bits give 2⁸ = 256 different values, but unsigned binary starts at 0, so the largest value is 255 [1]; the range is 0 to 2⁸ − 1 [1], that is 0 to 255 [1].

**16.** 45,000 bytes = 45 kB [1]; 45,000 ÷ 1,024 [1] = 43.9 KiB (to one decimal place) [1].

---

## Where marks are usually lost

- Using 1,000 for the number of bytes in a kibibyte, or 1,024 for a kilobyte.
- Rounding down when finding the number of bits needed.
- Forgetting to multiply by 8 when converting bytes to bits.
- Confusing the number of values (2ⁿ) with the largest value (2ⁿ − 1).
- Not explaining the difference between advertised and reported capacity in terms of decimal and binary prefixes.
