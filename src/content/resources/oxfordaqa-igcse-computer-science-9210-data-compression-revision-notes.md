---
title: "OxfordAQA IGCSE Computer Science (9210): Data compression -- Revision Notes"
seoTitle: "OxfordAQA IGCSE CS 9210 Data Compression Notes"
resourceType: "revision-notes"
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
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.3.8: reasons for compression, Huffman trees, bits saved, run length encoding and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

Condensed notes for section **3.3.8 Data compression** of OxfordAQA International GCSE Computer Science (9210).
Full worked examples are in the [Data compression study
guide](/resources/oxfordaqa-igcse-computer-science-9210-data-compression/).

## What the specification asks

- Explain what **data compression** is, and why it may be necessary or desirable; know that there are different
  ways to do it.
- Explain **Huffman coding**. **Build** and **interpret** a Huffman tree; show how a string is compressed with it.
- **Calculate the bits** needed for compressed data, and for uncompressed data in **ASCII**.
- Explain **run length encoding (RLE)** and represent data as **frequency/data pairs**.

## Why compress

- Less storage needed.
- Faster to send; uses less bandwidth.
- Lower cost.
- Some data (video) is too large to store or stream without it.

## Huffman coding

Frequent characters get **short** codes; rare characters get **long** codes. The codes come from a tree.

### Building the tree

1. Count the frequency of each character.
2. Join the **two lowest** frequencies under a new node (frequency = the sum).
3. Repeat with the new node included, until one node (the root) is left.
4. Label branches: left 0, right 1.
5. A character's code is the path from the root to it.

Ties: any choice may be used. The codes can differ, but the total bits are the same.

### Example: MAMMAL

| Character | M | A | L |
|---|---|---|---|
| Frequency | 3 | 2 | 1 |

Join L (1) and A (2) to make 3; join M (3) and that node to make the root (6). Codes: M = 0, L = 10, A = 11.

Compressed bits: 3 × 1 + 2 × 2 + 1 × 2 = 9. Uncompressed: 6 × 7 = 42. Saved: 33.

### Example: MISSISSIPPI

| Character | Frequency | Code | Frequency × length |
|---|---|---|---|
| S | 4 | 0 | 4 |
| I | 4 | 11 | 8 |
| M | 1 | 100 | 3 |
| P | 2 | 101 | 6 |

Compressed: 21 bits. Uncompressed: 11 × 7 = 77. Saved: 56.

### Bit calculations

- **Compressed** = sum of (frequency × code length).
- **Uncompressed (7-bit ASCII)** = number of characters × 7.
- **Saved** = uncompressed - compressed.

### Interpreting a tree

- Follow branches from the root to a character; write down each label for its code.
- To decode: read bits, follow the branches, write a character when a leaf is reached, return to the root.

With E = 0, T = 10, A = 110 and N = 111: 111 0 110 10 decodes to NEAT; TEA encodes as 10 0 110, which is 6 bits.

Codes are **prefix free**: no code begins with another code, so the bits can be decoded without gaps.

## Run length encoding (RLE)

Stores **frequency/data pairs**: how many times, then the value.

| Row | RLE |
|---|---|
| 0000011100000011 | 5 0 3 1 6 0 2 1 |
| 1111000011111111 | 4 1 4 0 8 1 |
| 00111100 | 2 0 4 1 2 0 |
| 1111111100000000 | 8 1 8 0 |
| 0000000000000001 | 15 0 1 1 |

- **Encode** each row of a bitmap separately.
- **Decode:** 3 0 2 1 3 0 gives 000 11 000, which is 00011000.
- **Works well** with long runs (simple images with large blocks of one value).
- **Works badly** when values change often: 10101010 gives 1 1 1 0 1 1 1 0 1 1 1 0 1 1 1 0, which is larger.

## Comparing Huffman and RLE

| | Huffman | RLE |
|---|---|---|
| Idea | Shorter codes for common characters | Count and value for each run |
| Best for | Text with uneven character frequencies | Long runs of the same value |
| Needs | The tree to decode | Pairs only |

## Model answer

**Explain how run length encoding compresses 0000011100000011. [3 marks]** The row has runs of identical values. Each run is
stored as a frequency and a value: five 0s, three 1s, six 0s and two 1s, giving 5 0 3 1 6 0 2 1. Eight numbers are stored
instead of 16 separate bits.

## Exam traps

- **Joining the highest frequencies.** Always join the two lowest.
- **Forgetting the sum** as the frequency of the new node.
- **Counting each character once** in the compressed total. Multiply by the frequency.
- **Using 8 bits per ASCII character.** Use 7.
- **Leaving out spaces** when counting characters.
- **RLE pairs in the wrong order.** Frequency first, then value.
- **One long row for a bitmap.** Encode each row separately.
- **"Compression always shrinks a file."** RLE can enlarge data with no runs.
- **No working.** Show each join and each product.

## Key terms

| Term | Meaning |
|---|---|
| Compression | Storing data using fewer bits |
| Huffman tree | A tree whose branch labels give a short code to frequent characters |
| Node | A point in the tree: a character or a joined pair |
| Root | The top node of the tree |
| Run | A sequence of identical values |
| Frequency/data pair | A count and the value that repeats |

## Self-test

1. Give two reasons for compressing data.
2. State which two nodes are joined at each step of building a Huffman tree.
3. A text has 20 characters in 7-bit ASCII. State the number of bits uncompressed.
4. In a Huffman tree, a character occurs 5 times and has the code 10. State its contribution to the compressed total.
5. Calculate the bits saved if 20 characters are compressed to 55 bits.
6. Write 0000111100 as frequency/data pairs.
7. Decode the pairs 2 1 5 0 1 1.
8. State why 10101010 is unsuitable for RLE.
9. In the tree E = 0, T = 10, A = 110, N = 111, state the code for T and decode 1100.
10. State one difference between Huffman coding and RLE.

**Answers:**
1. For example: less storage space; faster transmission.
2. The two with the lowest frequencies.
3. 140 (20 × 7).
4. 10 (5 × 2).
5. 85 bits (140 - 55).
6. 4 0 4 1 2 0.
7. 11000001.
8. It has no runs, so the RLE data (16 numbers) is larger than the original 8 values.
9. T = 10. 1100 is 110 (A) followed by 0 (E): AE.
10. Huffman gives frequent characters shorter codes; RLE replaces runs with a count and a value.

## More resources on this topic

- [Data compression study guide](/resources/oxfordaqa-igcse-computer-science-9210-data-compression/)
- [Data compression practice questions](/resources/oxfordaqa-igcse-computer-science-9210-data-compression-practice/)
- [Representing images revision notes](/resources/oxfordaqa-igcse-computer-science-9210-representing-images-revision-notes/)
