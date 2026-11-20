---
title: "OxfordAQA A-Level Computer Science (9645): Basic encryption methods"
seoTitle: "OxfordAQA A-Level CS 9645 Basic Encryption Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 5 – Representing data"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 5.7
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "representing-data"
  - qualification: "a-level"
    topic: "representing-data"
    subtopic: "basic-encryption-methods-oxfordaqa-alevel-cs"
description: "OxfordAQA 9645 sub-topic 3.5.7 in depth: encryption terms, the Caesar and Vernam ciphers, perfect and computational security and the key exchange problem."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.5.7 Basic encryption methods** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.5 Representing data (AS). The specification asks you to understand and define **encryption**; to know the terms **cipher**, **plaintext**, **ciphertext** and **key**; to apply the **Caesar cipher** and the **Vernam cipher** (a one-time pad) to encrypt and decrypt; to explain why the Caesar cipher is easily cracked; to know what **perfect security** is and the **conditions** under which the Vernam cipher achieves it; to understand **computational security**; to understand the **key exchange problem**; and to know the difference between **symmetric** and **asymmetric** ciphers. Exam questions focus mainly on the Caesar and Vernam ciphers. Any other cipher used in an exam question will be explained in the question and be of similar conceptual difficulty.

For quick recall use the [basic encryption methods revision notes](/resources/oxfordaqa-a-level-computer-science-9645-basic-encryption-methods-revision-notes/), then try the [basic encryption methods practice questions](/resources/oxfordaqa-a-level-computer-science-9645-basic-encryption-methods-practice/). The topic-level [representing data study guide](/resources/oxfordaqa-a-level-computer-science-representing-data/) covers all of section 3.5. Every example below was checked with a script.

## Key terms

**Encryption** is the use of an algorithm to convert **plaintext** into **ciphertext** so that it cannot easily be understood by a third party who does not know **both** the method used and the **encryption key**.

| Term | Meaning |
|---|---|
| Plaintext | The original, readable message |
| Ciphertext | The scrambled message produced by encryption |
| Cipher | The algorithm used to encrypt and decrypt |
| Key | A value, such as a sequence of letters or bits, that the cipher applies to the plaintext to produce ciphertext |
| Decryption | Converting ciphertext back to plaintext, using the key |

## The Caesar cipher

The **Caesar cipher** replaces each letter by the letter a fixed number of places further along the alphabet. The fixed number is the **key** (the shift). The alphabet wraps round, so with a shift of 3, X becomes A, Y becomes B and Z becomes C. Spaces and punctuation are usually left unchanged.

To decrypt, shift each letter back by the key.

### Worked example 1: encrypting

Encrypt MEET AT DAWN with a key of 3.

| Plain | M | E | E | T | | A | T | | D | A | W | N |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Cipher | P | H | H | W | | D | W | | G | D | Z | Q |

The ciphertext is **PHHW DW GDZQ**. Shifting each letter back by 3 recovers MEET AT DAWN.

### Worked example 2: wrap-around

Encrypt WXYZ with key 4. W (22) plus 4 is 26, which wraps to position 0 (A). X becomes B, Y becomes C and Z becomes D. The ciphertext is **ABCD**. In the other direction, decrypting ABC with key 1 gives **ZAB**.

### Worked example 3: decrypting with a known key

The ciphertext HAAHJR HA UVVU was produced with key 7. Shift each letter back 7 places: H becomes A, A becomes T, J becomes C, R becomes K. The plaintext is **ATTACK AT NOON**.

### Why the Caesar cipher is easily cracked

The specification gives three reasons.

1. **There are only 25 possible keys** (shifts of 1 to 25). An attacker can simply try every one.
2. **Letter frequencies are preserved.** Every plaintext letter is always replaced by the same ciphertext letter, so the frequency of letters in the ciphertext matches the frequency in the plaintext. Counting letters (**frequency analysis**) reveals the shift, as the most common letters in English are E and T.
3. **One identified shift gives the whole key.** Once the shift for one letter is known, the shift applied to all the letters is known.

### Worked example 4: breaking by trying all keys

The ciphertext WKLV LV IXQ gives the following when each shift is tried:

| Key tried | Result |
|---|---|
| 1 | VJKU KU HWP |
| 2 | UIJT JT GVO |
| 3 | THIS IS FUN |
| 4 | SGHR HR ETM |

Only key 3 gives readable English, so the plaintext is THIS IS FUN.

### Worked example 5: frequency analysis

Plaintext THE TEST OF THE TEAM IS THE TEN is encrypted with key 4, giving XLI XIWX SJ XLI XIEQ MW XLI XIR. The most frequent ciphertext letter is X (7 times), then I (6 times). In English, T and E are among the most common letters, and X is 4 places after T, I is 4 places after E, so the shift is 4. Both letters suggest the same key.

## The Vernam cipher (one-time pad)

In the **Vernam cipher** the key is a long string of random characters or bits, and each part of the key is used once. There are two common forms.

### Binary (bitwise) form

The plaintext character codes are combined with the key bits using **XOR**. XOR gives 1 if the two bits are different and 0 if they are the same. The same operation decrypts, because XOR with the same key twice returns the original.

### Worked example 6: encrypting with XOR

Plaintext `CAT` uses 8-bit ASCII codes. The key is three random bytes.

| Letter | Plaintext bits | Key bits | Ciphertext (XOR) |
|---|---|---|---|
| C | 01000011 | 10110010 | 11110001 |
| A | 01000001 | 01101100 | 00101101 |
| T | 01010100 | 11100101 | 10110001 |

To decrypt, XOR the ciphertext with the same key. 11110001 XOR 10110010 gives 01000011 (C); 00101101 XOR 01101100 gives 01000001 (A); and 10110001 XOR 11100101 gives 01010100 (T). The original message is recovered.

### Letter form

Each letter has a value (A = 0, B = 1, ..., Z = 25). Add the key letter's value to the plaintext letter's value, wrapping after 25 (modulo 26). To decrypt, subtract.

### Worked example 7: letter Vernam

Encrypt HELP with the key XMCK. H (7) + X (23) = 30, which wraps to 4 (E). E (4) + M (12) = 16 (Q). L (11) + C (2) = 13 (N). P (15) + K (10) = 25 (Z). The ciphertext is **EQNZ**. Subtracting the key letters gives HELP again.

## Perfect security

A cipher is **perfectly secure** if **nothing can be learned about the plaintext by examining the ciphertext**. The Vernam cipher **can** be perfectly secure, but only if all these conditions are met:

1. the key is chosen **completely randomly**;
2. the key is **at least as long as the plaintext**;
3. the key is used **only once**;
4. the key is known **only to the sender and the receiver**.

Why does this work? With a truly random key as long as the message, every possible plaintext of that length is equally likely to produce the same ciphertext. For example, the ciphertext IFR could be YES (key KBZ) or any other three-letter word given a different key, so the ciphertext gives no clue.

If the key is reused, patterns appear that an attacker can exploit. If it is shorter than the message, it must repeat. If it is not random, it can be guessed.

## Computational security

Most ciphers used by computers are **computationally secure**. A computationally secure cipher is one where information about the plaintext **can** in principle be learned from the ciphertext, but algorithms to crack it take an **unfeasibly long time** or have a very low probability of success. Such ciphers use short keys that can be reused many times, which makes them practical. The security rests on the amount of computation needed, not on being mathematically impossible to break.

### Comparing the ciphers

| | Caesar | Vernam | Computationally secure ciphers |
|---|---|---|---|
| Security | Very little | Perfect, if all conditions are met | Practical security; cracking takes unfeasible time |
| Key | A single number (25 options) | Random, as long as the message, used once | Short key, reused |
| Practicality | Simple | Hard: huge keys, hard to share | Widely used |
| Type | Symmetric | Symmetric | Symmetric or asymmetric |

The Caesar cipher and the Vernam cipher offer completely different levels of security. Computationally secure ciphers lie between them.

## The key exchange problem

Both parties need the key, but sending it over an insecure channel risks interception. This is the **key exchange problem**: sharing the key between sender and receiver without it being at risk of interception. It is especially severe for the Vernam cipher, because the key is as long as the message and can be used only once.

## Symmetric and asymmetric ciphers

- A **symmetric** cipher uses the **same key** to encrypt and decrypt. The Caesar and Vernam ciphers are symmetric. They suffer from the key exchange problem.
- An **asymmetric** cipher uses **different, mathematically related keys** to encrypt and to decrypt. Because the two keys differ, the key exchange problem does not apply: the encryption key can be shared openly.

## Exam technique

- **Show each letter** when encrypting or decrypting, particularly where letters wrap round.
- **Write bit patterns in full** for XOR and align them.
- **Give three specific reasons** for the weakness of the Caesar cipher, using the specification's three points.
- **List all four conditions** for the Vernam cipher to be perfectly secure.
- **Separate perfect security from computational security** in comparison answers.

## Common mistakes

- Shifting in the wrong direction when decrypting.
- Forgetting to wrap from Z to A.
- Saying the Vernam cipher is always unbreakable. It is only perfectly secure if its conditions are met.
- Reusing a key and still calling the cipher a one-time pad.
- Saying asymmetric ciphers "do not use keys".
- Writing XOR results that fail the check: ciphertext XOR key must give back the plaintext.

## Next steps

- [Basic encryption methods revision notes](/resources/oxfordaqa-a-level-computer-science-9645-basic-encryption-methods-revision-notes/)
- [Basic encryption methods practice questions](/resources/oxfordaqa-a-level-computer-science-9645-basic-encryption-methods-practice/)
- [Representing characters study guide](/resources/oxfordaqa-a-level-computer-science-9645-representing-characters/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.5.7 Basic encryption methods.
