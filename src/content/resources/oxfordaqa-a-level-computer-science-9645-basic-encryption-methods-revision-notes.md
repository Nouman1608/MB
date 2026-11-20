---
title: "OxfordAQA A-Level Computer Science (9645): Basic encryption methods -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Basic Encryption Notes"
resourceType: "revision-notes"
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
description: "Recall notes for OxfordAQA 9645 sub-topic 3.5.7: Caesar and Vernam ciphers, perfect and computational security, key exchange and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.5.7 Basic encryption methods** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (AS content in topic 3.5 Representing data). For worked examples, see the [basic encryption methods study guide](/resources/oxfordaqa-a-level-computer-science-9645-basic-encryption-methods/); then practise with the [basic encryption methods practice questions](/resources/oxfordaqa-a-level-computer-science-9645-basic-encryption-methods-practice/).

## What the specification requires

- Define **encryption**: the use of an algorithm to convert plaintext into ciphertext so it cannot easily be understood by a third party who does not know both the method and the key.
- Know **cipher**, **plaintext**, **ciphertext** and **key**.
- Apply the **Caesar cipher** (encrypt and decrypt) and explain why it is **easily cracked**.
- Apply the **Vernam cipher** (one-time pad) to encrypt and decrypt.
- Know what **perfect security** is, that the Vernam cipher can achieve it, and the **conditions** needed.
- **Compare** the Caesar and Vernam ciphers.
- Know that most computer ciphers rely on **computational security**; compare with the Vernam cipher.
- Understand the **key exchange problem**; know **symmetric** and **asymmetric** ciphers.

## Key terms

| Term | Meaning |
|---|---|
| Plaintext | The original message |
| Ciphertext | The encrypted message |
| Cipher | The algorithm that encrypts and decrypts |
| Key | A value (letters or bits) used by the cipher |
| Perfect security | Nothing can be learned about the plaintext from the ciphertext |
| Computational security | Information could be learned, but cracking takes an unfeasible time or has very low chance of success |
| Key exchange problem | Sharing the key without it being intercepted |
| Symmetric | The same key encrypts and decrypts |
| Asymmetric | Different, mathematically related keys encrypt and decrypt |

## Caesar cipher

Shift each letter along the alphabet by the key; wrap from Z to A. Decrypt by shifting back.

Recomputed:

| Plaintext | Key | Ciphertext |
|---|---|---|
| COMPUTER SCIENCE | 9 | LXVYDCNA BLRNWLN |
| GOOD MORNING | 11 | RZZO XZCYTYR |
| LOCK THE DOOR | 6 | RUIQ ZNK JUUX |
| ZEBRA | 5 | EJGWF |
| YZ | 3 | BC |

Decrypting EJGWF with key 5 gives ZEBRA, because the shift is reversed (E back 5 is Z).

### Why it is easily cracked

1. Only **25 possible keys**.
2. **Letter frequencies** in the ciphertext match those of the plaintext (frequency analysis).
3. Once the shift of **one letter** is found, it is known for **all** letters.

## Vernam cipher

**Bitwise form:** ciphertext = plaintext XOR key. Decrypt with the same operation.

XOR: 0 and 0 gives 0; 0 and 1 gives 1; 1 and 0 gives 1; 1 and 1 gives 0.

| Letter | Plain bits | Key bits | Cipher bits |
|---|---|---|---|
| H | 01001000 | 01101011 | 00100011 |
| i | 01101001 | 10010110 | 11111111 |

Check: 00100011 XOR 01101011 gives back 01001000.

**Finding a key.** Plaintext XOR ciphertext gives the key. 01001111 XOR 11000110 = 10001001.

**Letter form:** add the key letter's value (A = 0 to Z = 25) modulo 26. Recomputed: SEND with key QVRJ gives IZEM; BOX with key MAD gives NOA.

### Conditions for perfect security

1. The key is **completely random**.
2. The key is **at least as long as the plaintext**.
3. The key is **used only once**.
4. The key is known **only to the sender and receiver**.

Why it works: with a random key as long as the message, any plaintext of that length could have produced a given ciphertext. The same ciphertext IFR is made from YES with key KBZ, so the ciphertext alone tells you nothing.

## Computational security

- Information about the plaintext **can** be found, but cracking takes **unfeasible time** or has a **very low probability of success**.
- Uses short, reusable keys, so it is practical.
- Most ciphers used by computers are of this kind.

## Comparisons

| | Caesar | Vernam | Computationally secure |
|---|---|---|---|
| Security | Almost none | Perfect, if conditions met | High in practice |
| Key | One shift (25 choices) | Long, random, used once | Short, reusable |
| Practical use | Teaching | Rare because of key length and sharing | Widespread |

## Key exchange and key types

| | Symmetric | Asymmetric |
|---|---|---|
| Keys | One key for both | Two related keys |
| Key exchange problem | Yes | No (the encryption key can be public) |
| Examples in the specification | Caesar, Vernam | (type, no named cipher needed) |

## Exam traps

- **Direction.** Add to encrypt and subtract to decrypt in the Caesar cipher.
- **Wrap-around.** After Z comes A.
- **Four conditions.** Vernam is perfectly secure only when all four hold.
- **Reusing a key** breaks the one-time property.
- **Computational is not perfect.** Information can be learned in principle.
- **Both Caesar and Vernam are symmetric.**
- **XOR check.** Ciphertext XOR key must return the plaintext.

## Quick self-test

1. Define encryption.
2. Encrypt ZEBRA with a Caesar key of 5.
3. Decrypt RUIQ ZNK JUUX with key 6.
4. State three reasons the Caesar cipher is easily cracked.
5. What does XOR give for 1 and 1?
6. Encrypt the bits 10110110 with the key 01101101.
7. What is perfect security?
8. List the four conditions for the Vernam cipher to be perfectly secure.
9. What is a computationally secure cipher?
10. What is the key exchange problem?
11. Is the Vernam cipher symmetric or asymmetric?
12. Why does an asymmetric cipher avoid the key exchange problem?

### Answers

1. Using an algorithm to convert plaintext into ciphertext so it cannot easily be understood by someone who does not know both the method and the key.
2. EJGWF.
3. LOCK THE DOOR.
4. Only 25 keys; letter frequencies are preserved; one found shift reveals all.
5. 0.
6. 11011011.
7. Nothing can be learned about the plaintext from the ciphertext.
8. Random key; at least as long as the plaintext; used once only; known only to sender and receiver.
9. One where information could be learned but cracking takes an unfeasible time or has a very low chance of success.
10. Sharing the key between sender and receiver without it being intercepted.
11. Symmetric.
12. The encryption and decryption keys are different, so the encryption key need not be kept secret.

## Next steps

- [Basic encryption methods study guide](/resources/oxfordaqa-a-level-computer-science-9645-basic-encryption-methods/)
- [Basic encryption methods practice questions](/resources/oxfordaqa-a-level-computer-science-9645-basic-encryption-methods-practice/)
- [Representing sound revision notes](/resources/oxfordaqa-a-level-computer-science-9645-representing-sound-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.5.7 Basic encryption methods.
