---
title: "OxfordAQA IGCSE Computer Science (9210): Data compression -- Study Guide"
seoTitle: "OxfordAQA IGCSE CS 9210 Data Compression Study Guide"
resourceType: "study-guides"
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
description: "Study guide to OxfordAQA IGCSE Computer Science 9210 section 3.3.8: why data is compressed, building and reading Huffman trees, counting bits saved and run length encoding."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers section **3.3.8 Data compression** of OxfordAQA International GCSE Computer Science (9210). You
must **explain what data compression is** and why it may be necessary or desirable, and know that there are
different ways to do it. You must be able to explain, **build and interpret a Huffman tree**, show how a string is
compressed with it, **calculate the number of bits** needed for compressed data and for uncompressed data in ASCII,
and **explain run length encoding (RLE)**, representing data as **frequency/data pairs**.

## What is data compression?

**Data compression** means storing or sending data using **fewer bits** than the original representation, so that the
file is smaller. The data must be able to be rebuilt when it is needed.

Reasons for compressing data:

- **Less storage space.** More files fit on a device, or a given file takes up less of the capacity.
- **Faster transmission.** A smaller file takes less time to send over a network, and uses less of the available
  bandwidth.
- **Lower cost.** Less storage and less data transferred can reduce costs.
- **Practical limits.** Some data, such as video, would be too large to store or stream without being compressed.

There are different ways to compress data. This section of the specification covers two: **Huffman coding** and **run
length encoding**.

## Huffman coding

In a normal text file in 7-bit ASCII, every character uses the same number of bits (7), whether it is a common letter
such as E or a rare one such as Z. **Huffman coding** uses **variable-length codes**: characters that occur often get
**short codes**, and characters that occur rarely get **longer codes**. The total number of bits is then smaller.

The codes come from a **Huffman tree**, built from the frequencies of the characters in the data.

### Building a Huffman tree

1. **Count** how many times each character occurs (its frequency).
2. List the characters as separate **nodes**, each with its frequency.
3. Take the **two nodes with the lowest frequencies**. Join them under a new node whose frequency is their **sum**.
4. Repeat step 3, treating the new node as one of the nodes, until only **one node** (the root) is left.
5. **Label** every branch: left branches 0 and right branches 1.
6. The **code** for a character is the sequence of branch labels from the root down to that character.

If two nodes have the same frequency, you may choose either. The codes may differ between correct trees, but the
**total number of bits is the same**.

### Worked example 1: MAMMAL

The data is the word **MAMMAL**, six characters.

| Character | M | A | L |
|---|---|---|---|
| Frequency | 3 | 2 | 1 |

- The two lowest are L (1) and A (2). Join them to make a node of 3.
- Now the nodes are M (3) and the new node (3). Join them to make the root, with frequency 6.

Place M on the left of the root and the new node on the right, with L on the left and A on the right of the new node.

```
          root (6)
         0 /    \ 1
          M      node (3)
                0 /    \ 1
                 L        A
```

The codes are **M = 0**, **L = 10** and **A = 11**.

The compressed data is:

| Character | M | A | M | M | A | L |
|---|---|---|---|---|---|---|
| Code | 0 | 11 | 0 | 0 | 11 | 10 |

which is **0 11 0 0 11 10**, written as 011001110, a total of 9 bits.

Bits needed:

- Compressed: M 3 × 1 + A 2 × 2 + L 1 × 2 = 3 + 4 + 2 = **9 bits**.
- Uncompressed in 7-bit ASCII: 6 characters × 7 bits = **42 bits**.
- Bits saved: 42 - 9 = **33 bits**.

### Worked example 2: MISSISSIPPI

The word has 11 characters.

| Character | M | I | S | P |
|---|---|---|---|---|
| Frequency | 1 | 4 | 4 | 2 |

1. The two lowest are M (1) and P (2). Join them to make a node of 3.
2. The nodes are now the 3-node, I (4) and S (4). The lowest two are the 3-node and one of the 4s. Join the 3-node
   and I to make a node of 7.
3. Join S (4) and the 7-node to make the root (11).

With left = 0 and right = 1, and S on the left of the root, the codes are **S = 0**, **I = 11**, **M = 100** and **P = 101**.

| Character | Frequency | Code | Code length | Frequency × length |
|---|---|---|---|---|
| S | 4 | 0 | 1 | 4 |
| I | 4 | 11 | 2 | 8 |
| M | 1 | 100 | 3 | 3 |
| P | 2 | 101 | 3 | 6 |
| Total | 11 | | | **21** |

- Compressed: 21 bits.
- Uncompressed in 7-bit ASCII: 11 × 7 = 77 bits.
- Saved: 77 - 21 = **56 bits**.

If you had joined the 3-node with S instead of I at step 2, the tree would look different, but the total would still
be 21 bits.

### Counting bits correctly

- **Compressed bits** = sum of (frequency × code length) for every character. Do not count each distinct character
  once.
- **Uncompressed bits in ASCII** = number of characters in the data × 7. Spaces and punctuation count as
  characters.
- **Bits saved** = uncompressed - compressed.

### Interpreting a given Huffman tree

You may be given a finished tree and asked for the code of a character, or to decode a bit pattern. To find the code
of a character, follow the path from the root to the character and write down the label on each branch.

```
          root
         0 /   \ 1
          E      node
                0 /   \ 1
                 T      node
                       0 /  \ 1
                        A      N
```

The codes are **E = 0**, **T = 10**, **A = 110** and **N = 111**.

To **decode**, read the bits from the left, follow the branches from the root, and when a character is reached write it
down and return to the root. The bits **111011010** are read as 111 (N), 0 (E), 110 (A), 10 (T), which spells **NEAT**.

To **encode** a word, join the codes. The word TEA is 10, 0, 110, which gives **100110**, a total of 6 bits. The same word
in 7-bit ASCII needs 21 bits.

Because no code is the start of another code (E is 0, and no other code starts with 0), the bits can be decoded without
any separators.

## Run length encoding (RLE)

**Run length encoding** compresses data in which the same value repeats in **runs**. Instead of storing every value, it
stores **frequency/data pairs**: the **number of times** a value repeats, followed by the **value**.

The specification gives an example: the row 0000011100000011 becomes **5 0 3 1 6 0 2 1**. This reads as five 0s, three
1s, six 0s and two 1s.

### Encoding

1. Start at the left of the row.
2. Count how many times the first value repeats in a row, and write the count, then the value.
3. Move to the next different value and repeat until the end of the row.

| Row | Runs | RLE pairs |
|---|---|---|
| 1111000011111111 | four 1s, four 0s, eight 1s | 4 1 4 0 8 1 |
| 00111100 | two 0s, four 1s, two 0s | 2 0 4 1 2 0 |
| 1111111100000000 | eight 1s, eight 0s | 8 1 8 0 |

For a bitmap, the question may give several rows. Encode **each row separately**, as in the specification's wording
"the frequency and value pairs for each row".

### Decoding

Read each pair as a count and a value, and write the value that many times. The pairs **3 0 2 1 3 0** give 000, 11 and 000,
which is **00011000**.

### When RLE works well and when it does not

RLE saves space when the data has **long runs** of the same value, as in a simple logo with large blocks of one colour.
The row 0000000000000001 (16 values) becomes 15 0 1 1, only four values.

It works badly when the values change often. The row 10101010 has no runs longer than one, so the RLE is **1 1 1 0 1 1 1 0 1 1
1 0 1 1 1 0**, which is 16 numbers instead of 8 values: the "compressed" data is **larger**. A good answer to "when is
RLE not suitable" mentions data with few or no repeated values.

## Comparing the two methods

| | Huffman coding | Run length encoding |
|---|---|---|
| Idea | Frequent characters get shorter codes | Stores a count and a value for each run |
| Works best when | Some characters occur much more often than others | There are long runs of identical values |
| Needs | A tree (the code table) to decode | Nothing extra; the pairs are self-explanatory |
| Typical use in this course | Text | Simple bitmaps |

## Common mistakes

- Joining the **highest** frequencies instead of the **lowest**.
- Forgetting to add the new node's frequency (the sum) when choosing the next two nodes.
- Counting each character only once when calculating the compressed size, rather than multiplying by its **frequency**.
- Using 8 bits for ASCII, when this specification uses **7-bit ASCII**.
- Forgetting spaces or punctuation when counting the characters.
- Assigning 0 and 1 inconsistently, so that the codes are ambiguous.
- Writing the RLE pairs as value then count. The specification's order is **frequency first, then value**.
- Encoding a bitmap as one long row instead of **row by row**.
- Saying that compression always makes a file smaller. For data without runs, RLE can make it larger.

## Exam technique

- **Build a tree** by listing the frequencies, then showing each join with its sum, so that the examiner can follow
  the method.
- **Show every product** in a bit calculation: 3 × 1, 2 × 2, and so on, then the total.
- **State both totals** (compressed and uncompressed) before you state the saving.
- For **RLE**, write the pairs in a clear row, separated by spaces, and check by decoding.
- **Explain why** to compress in terms of storage space and transmission time.

## Next steps

For a condensed summary and a self-test, use the [Data compression revision
notes](/resources/oxfordaqa-igcse-computer-science-9210-data-compression-revision-notes/), and practise with the
[Data compression practice
questions](/resources/oxfordaqa-igcse-computer-science-9210-data-compression-practice/).
