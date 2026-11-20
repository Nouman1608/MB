---
title: "OxfordAQA A-Level Computer Science (9645): Basic encryption methods -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Basic Encryption Practice"
resourceType: "practice-questions"
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
description: "Twelve original OxfordAQA 9645 questions on sub-topic 3.5.7: Caesar and Vernam ciphers, perfect and computational security and key exchange, with answers."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and practice on this content. They are **not** reproduced past-paper questions, and they do **not** replicate the exam's exact structure, question count or mark tariffs -- examination boards hold copyright in their own papers. Use these alongside the official past papers from your board or school.

These questions practise sub-topic **3.5.7 Basic encryption methods** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: encryption terms, the Caesar and Vernam ciphers, perfect and computational security, the key exchange problem and symmetric and asymmetric ciphers. In letter ciphers A = 0, B = 1 and so on to Z = 25, and the alphabet wraps round.

Related pages: [basic encryption methods study guide](/resources/oxfordaqa-a-level-computer-science-9645-basic-encryption-methods/) · [basic encryption methods revision notes](/resources/oxfordaqa-a-level-computer-science-9645-basic-encryption-methods-revision-notes/)

## Section A

**1.** Define the terms plaintext and ciphertext. **[2]**

**2.** State what is meant by a key in a cipher. **[1]**

**3.** State the difference between a symmetric cipher and an asymmetric cipher. **[2]**

**4.** Encrypt the word PROGRAM using a Caesar cipher with a key of 2. **[2]**

## Section B

**5.** The message `QIIX QI EX RSSR` was encrypted with a Caesar cipher using a key of 4. Decrypt it and show how you found the first word. **[3]**

**6.** Describe **three** reasons why the Caesar cipher is easily cracked. **[3]**

**7.** An intercepted Caesar ciphertext contains the letter H 6 times out of 17 letters, and no other letter more than twice. The sender wrote ordinary English text.

**(a)** Suggest the plaintext letter that H probably stands for. **[1]**
**(b)** State the key that this suggests. **[1]**
**(c)** Explain why this method works on a Caesar cipher. **[2]**

**8.** A Vernam cipher uses XOR on 8-bit patterns. The plaintext byte for `S` is 01010011 and the key byte is 00110101.

**(a)** Calculate the ciphertext byte. **[2]**
**(b)** Show how the receiver recovers the plaintext. **[2]**

**9.** The plaintext byte 01001111 was encrypted using a one-time pad and the ciphertext byte is 11000110. Calculate the key byte. **[2]**

**10.** A letter-based Vernam cipher adds the key letter's value to the plaintext letter's value (modulo 26).

**(a)** Encrypt CODE with the key TYPW. **[3]**
**(b)** Decrypt the ciphertext IZEM using the key QVRJ. **[3]**

**11.** State **four** conditions that must be met for the Vernam cipher to be perfectly secure, and explain what perfect security means. **[5]**

**12.** A bank is deciding whether to protect its network traffic with a Vernam cipher or with a computationally secure cipher.

**(a)** Explain what is meant by a computationally secure cipher. **[2]**
**(b)** Give **two** reasons why the bank is likely to choose a computationally secure cipher. **[2]**
**(c)** Explain the key exchange problem and why it affects symmetric ciphers. **[2]**

## Answers

**1.** Plaintext is the **original, readable message** [1]; ciphertext is the **encrypted (scrambled) message** produced by the cipher [1]. **[2]**

**2.** A value, such as a sequence of letters or bits, that the cipher applies to the plaintext to convert it to ciphertext [1]. **[1]**

**3.** A symmetric cipher uses the **same key** to encrypt and decrypt [1]; an asymmetric cipher uses **different, mathematically related keys** [1]. **[2]**

**4.** P to R, R to T, O to Q, G to I, R to T, A to C, M to O: **RTQITCO** [2: all seven correct [2]; five or six correct [1]]. **[2]**

**5.** Each letter is shifted back 4 places [1]. Q back 4 is M, I back 4 is E, I back 4 is E, X back 4 is T, so the first word is MEET [1]. The full plaintext is **MEET ME AT NOON** [1]. **[3]**

**6.** Any three [1 each]: there are only **25 possible keys**, so all can be tried; the frequency of letters in the ciphertext **matches** the plaintext, so frequency analysis works; once the shift for **one letter** is identified, it is known for **all** letters. **[3]**

**7. (a)** **E** (the commonest letter in English) [1]. **[1]**
**(b)** H is 3 places after E, so the key is **3** [1]. **[1]**
**(c)** Each plaintext letter is always replaced by the same ciphertext letter, so letter **frequencies are preserved** [1]; the most common ciphertext letter therefore matches the most common plaintext letter and reveals the shift [1]. **[2]**

**8. (a)** 01010011 XOR 00110101: XOR gives 1 where the two bits differ [1], so the ciphertext is **01100110** [1]. **[2]**
**(b)** XOR the ciphertext with the same key [1]: 01100110 XOR 00110101 = 01010011, the original plaintext for S [1]. **[2]**

**9.** Plaintext XOR ciphertext gives the key [1]: 01001111 XOR 11000110 = **10001001** [1]. **[2]**

**10. (a)** C (2) + T (19) = 21, which is V; O (14) + Y (24) = 38, which wraps to 12, M; D (3) + P (15) = 18, S; E (4) + W (22) = 26, which wraps to 0, A. The ciphertext is **VMSA** [3: method with wrap-around shown [1]; at least two letters correct [1]; all four correct [1]]. **[3]**
**(b)** I (8) − Q (16) = −8, which wraps to 18, S; Z (25) − V (21) = 4, E; E (4) − R (17) = −13, which wraps to 13, N; M (12) − J (9) = 3, D. The plaintext is **SEND** [3: subtraction method [1]; wrap-around handled [1]; all four letters correct [1]]. **[3]**

**11.** Any four conditions [1 each]: the key is chosen **completely randomly**; the key is **at least as long as the plaintext**; the key is used **only once**; the key is known **only to the sender and receiver**. Perfect security means nothing can be learned about the plaintext from the ciphertext [1]. **[5]**

**12. (a)** A computationally secure cipher is one where information about the plaintext **could** be learned from the ciphertext [1], but the algorithms to crack it take an **unfeasibly long time** or have a very low probability of success [1]. **[2]**
**(b)** Any two [1 each]: the key can be **short and reused**, whereas Vernam needs a key as long as every message; no need to share a **new long key** for every message; they are practical for large amounts of data; they can be asymmetric, avoiding key exchange. **[2]**
**(c)** The key exchange problem is **sharing the key between sender and receiver without it being intercepted** [1]; a symmetric cipher uses the same key to encrypt and decrypt, so the key must be passed to the receiver securely before use [1]. **[2]**

## Frequently asked questions

**Do I need to learn other ciphers?**
Exam questions focus on the Caesar and Vernam ciphers. If another cipher appears, the question explains it and it will be of similar difficulty.

**Is the Vernam cipher always unbreakable?**
No. It can be perfectly secure only if the key is random, at least as long as the message, used once and known only to the sender and receiver.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.5.7 Basic encryption methods.
