---
title: "OxfordAQA IGCSE Computer Science (9210): Data compression -- Practice Questions"
seoTitle: "OxfordAQA IGCSE CS 9210 Data Compression Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 3: Data representation"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 3.08
syllabusTopics:
  - qualification: "igcse"
    topic: "data-representation-9210"
  - qualification: "igcse"
    topic: "data-representation-9210"
    subtopic: "data-compression-9210"
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on data compression, Huffman trees, bits saved and run length encoding."
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
> mark tariffs; examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Data compression study guide](/resources/oxfordaqa-igcse-computer-science-9210-data-compression/) | [Data compression revision notes](/resources/oxfordaqa-igcse-computer-science-9210-data-compression-revision-notes/)

These questions cover section 3.3.8 Data compression of the OxfordAQA International GCSE Computer Science (9210)
specification. In calculations, 7-bit ASCII uses 7 bits for each character.

---

## Section A

**1.** State what is meant by data compression. **[1]**

**2.** Give two reasons why a company might compress its data. **[2]**

**3.** A Huffman tree is built by repeatedly joining nodes. State which nodes are joined at each step. **[1]**

**4.** Calculate the number of bits needed to store the word TOMATO in 7-bit ASCII. **[1]**

## Section B

**5.** A text contains the characters A, B, C and D with these frequencies.

| Character | A | B | C | D |
|---|---|---|---|---|
| Frequency | 7 | 4 | 2 | 1 |

**(a)** Build the Huffman tree. Show each pair of nodes that is joined and the frequency of the new node. **[3]**

**(b)** State the code for each character, labelling left branches 0 and right branches 1. **[2]**

**(c)** Calculate the number of bits needed to store the text using the Huffman codes. **[2]**

**(d)** Calculate the number of bits needed to store the same text in 7-bit ASCII, and the number of bits saved. **[2]**

**6.** The Huffman tree below has been built for a message. Left branches are labelled 0 and right branches 1.

```
            root
           0 /   \ 1
          /       \
       node1     node2
      0 /  \ 1   0 /  \ 1
       O    T     E    node3
                      0 /  \ 1
                       R      S
```

**(a)** State the code for the character R. **[1]**

**(b)** Write the bits that represent the word TOES. **[2]**

**(c)** Decode the bit pattern 1101011101. **[2]**

**(d)** State the number of bits needed to store the word TOES in 7-bit ASCII and the number saved by using the
Huffman codes. **[2]**

**7.** The word TOMATO is compressed using Huffman coding.

**(a)** State the frequency of each character. **[1]**

**(b)** Build a Huffman tree and state the total number of bits needed for the compressed word. Any correct tree is
accepted. **[3]**

**8.** Explain why a character that occurs often is given a shorter code than a character that occurs rarely. **[2]**

**9.** Describe how run length encoding compresses data. **[2]**

**10.** Write each of these rows of a bitmap as frequency/data pairs.

**(a)** 11110000 **[1]**

**(b)** 00111100 **[2]**

**(c)** 01111110 **[2]**

**11.** The frequency/data pairs below are for one row of a bitmap. Write the row as bits.

```
3 0 2 1 4 0
```

**[2]**

**12.** The row 10101010 is encoded using run length encoding.

**(a)** Write the frequency/data pairs. **[2]**

**(b)** Explain why run length encoding is not suitable for this row. **[2]**

**13.** Compare Huffman coding and run length encoding. Give one situation where each is a suitable method. **[4]**

---

## Answers

**1.** Storing data using fewer bits so that the file is smaller [1].

**2.** Any two from: it needs less storage space [1]; it can be transmitted more quickly [1]; it uses less bandwidth,
or costs less [1].

**3.** The two nodes with the lowest frequencies [1].

**4.** 6 characters × 7 bits = 42 bits [1].

**5.** **(a)** D (1) and C (2) are joined to make a node of 3 [1]; the 3-node and B (4) are joined to make a node of 7
[1]; A (7) and the 7-node are joined to make the root (14) [1].
**(b)** A = 0 [1]; B = 11, C = 101, D = 100 [1]. (Other correct labellings with the same code lengths are accepted:
A has 1 bit, B has 2 bits, and C and D have 3 bits each.)
**(c)** 7 × 1 + 4 × 2 + 2 × 3 + 1 × 3 [1] = 7 + 8 + 6 + 3 = 24 bits [1].
**(d)** 14 characters × 7 = 98 bits [1]; 98 - 24 = 74 bits saved [1].

**6.** **(a)** Follow the path from the root: right (1), right (1), then left (0), so R = **110** [1].
**(b)** T = 01, O = 00, E = 10 and S = 111, so TOES is 01 00 10 111 [1], which is 010010111 [1].
**(c)** 110 (R) [1]; then 10 (E), 111 (S) and 01 (T), so the word is **REST** [1].
**(d)** 4 × 7 = 28 bits [1]; the Huffman code for TOES needs 9 bits, so 28 - 9 = 19 bits are saved [1].

**7.** **(a)** T 2, O 2, M 1, A 1 [1].
**(b)** Join M (1) and A (1) to make a node of 2 [1]; join two of the remaining nodes (for example T and O to make 4, or
T and the 2-node to make 4) and then join the last two to make the root of 6 [1]. In the first tree all four codes have 2 bits, so the total is 2 × 2 + 2 × 2 + 1 × 2 + 1 × 2 = 12 bits. In the second tree O has 1 bit, T has 2 bits and M and A have 3 bits, so the total is 2 × 1 + 2 × 2 + 1 × 3 + 1 × 3 = 12 bits [1]. Either way, the total is **12 bits**.

**8.** If frequent characters have short codes, the total number of bits is smaller [1], because the short codes are
used many times, so the overall file is smaller [1].

**9.** It replaces each run of identical values with a count and a value [1], so that long runs are stored as a
frequency/data pair instead of storing every value [1].

**10.** **(a)** 4 1 4 0 [1]. **(b)** 2 0 4 1 2 0 [2]. **(c)** 1 0 6 1 1 0 [2].

**11.** 000 11 0000 [1], which is 000110000 [1] (the row has 9 bits).

**12.** **(a)** 1 1 1 0 1 1 1 0 1 1 1 0 1 1 1 0 [2]. **(b)** There are no runs longer than one [1], so the encoded data has
16 numbers, which is more than the 8 values of the original, and the data becomes larger [1].

**13.** Huffman: gives shorter codes to frequent characters, so is suitable for text in which some characters
appear far more often than others [1 for the idea, 1 for the situation]. RLE: stores each run as a count and a value,
so it is suitable for a bitmap with large blocks of the same colour [1 for the idea, 1 for the situation].

---

## Where marks are usually lost

- Joining the highest frequencies instead of the two lowest in Question 5.
- Counting each character once instead of multiplying by its frequency.
- Using 8 bits per character in the ASCII calculation.
- Writing RLE pairs with the value first, or encoding the whole bitmap as one row.
- Not decoding step by step from the root, as in Question 6.
