---
title: "Cambridge O Level Computer Science (2210): Encryption -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 2 – Data transmission"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 2.3
syllabusTopics:
  - qualification: "o-level"
    topic: "data-transmission-2210"
    subtopic: "encryption"
description: "Original questions with answers on Cambridge O Level Computer Science 2210 section 2.3: the need for encryption, symmetric keys, public and private keys."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Encryption study guide](/resources/cambridge-o-level-computer-science-2210-encryption/) and [Encryption revision notes](/resources/cambridge-o-level-computer-science-2210-encryption-revision-notes/)

---

## Section A

**1.** State what is meant by plaintext. **[1]**

**2.** Identify the type of encryption that uses the same key to encrypt and decrypt data. **[1]**

**3.** State **two** examples of data that should be encrypted before it is sent over the internet. **[2]**

**4.** In asymmetric encryption, state which key is shared openly and which key is kept secret. **[2]**

**5.** A digit-shift method adds a key to each digit and keeps only the last digit of each answer. Using the key 5, encrypt the number 3816. **[2]**

**6.** State why intercepting encrypted data is of little use to a hacker who does not have the key. **[1]**

## Section B

**7.** Explain the need for encryption when a pharmacy sends prescriptions to a hospital over the internet. **[3]**

**8.** Describe how a document is encrypted and decrypted using symmetric encryption. **[3]**

**9.** Explain the main drawback of symmetric encryption when two people have never shared a key before. **[2]**

**10.** A voter submits a vote to an online election system that uses asymmetric encryption. Describe the role of the public key and the private key, stating who owns each one. **[4]**

**11.** A hacker intercepts both the online election system's public key and an encrypted vote. Explain why the hacker cannot read the vote. **[2]**

**12.** A company sends a confidential report to a supplier using asymmetric encryption. The supplier then replies with a confidential price list.

**(a)** Identify the key used to encrypt the report and the key used to decrypt it.

**(b)** Identify the key used to encrypt the reply. **[3]**

**13.** Compare symmetric and asymmetric encryption, giving **one** advantage of each. **[4]**

**14.** A student writes: "My messages are encrypted, so a checksum is not needed." Explain why the student is wrong. **[2]**

---

## Answers

**1.** The original, readable data before it is encrypted [1].

**2.** Symmetric encryption [1].

**3.** Any two, for example: passwords or login details [1]; bank card details [1]. Also accept: medical records; personal details such as addresses; confidential business documents.

**4.** The public key is shared openly [1]; the private key is kept secret by its owner [1].

**5.** 3+5 = 8, 8+5 = 13 → 3, 1+5 = 6, 6+5 = 11 → 1 [1], giving **8361** [1].

**6.** The ciphertext is meaningless / cannot be understood without the key used to decrypt it [1].

**7.** Prescriptions contain private medical information about patients [1]. Data sent over the internet passes through many devices and could be intercepted [1]. Encryption means that intercepted prescriptions are meaningless to anyone without the key, so patient data stays confidential [1].

**8.** The sender and receiver both hold the same secret key [1]. The sender uses the key with the encryption algorithm to turn the document into ciphertext, which is sent [1]. The receiver uses the same key to decrypt the ciphertext back into the document [1].

**9.** The key has to be sent to the other person before encrypted messages can be read [1]; if the key is intercepted while it is being sent, the interceptor can decrypt every message encrypted with it [1].

**10.** The election system owns both keys (a key pair) [1]. Its public key is given to voters [1] and is used by the voter's device to encrypt the vote [1]. The system's private key, which it never transmits, is used to decrypt the vote [1].

**11.** Data encrypted with the public key can only be decrypted with the matching private key [1]. The private key is never transmitted, so the hacker does not have it [1].

**12. (a)** The report is encrypted with the supplier's public key [1] and decrypted with the supplier's private key [1].
**(b)** The reply is encrypted with the company's public key [1].

**13.** Symmetric encryption uses one shared key, while asymmetric uses a linked public and private key pair [1]. In symmetric encryption the secret key must be transmitted, but in asymmetric encryption only the public key is shared [1]. Advantage of symmetric: it is faster / simpler, so suits large amounts of data [1]. Advantage of asymmetric: the private key never has to be sent, so it cannot be intercepted [1].

**14.** Encryption only hides the meaning of the data; it does not check whether data has been changed during transmission [1]. A checksum is still needed to detect errors such as bits being changed by interference [1].

---

## Where marks are usually lost

- Question 7: describing encryption in general without linking it to patient data or to interception.
- Question 10: writing "the public key encrypts and the private key decrypts" without saying they belong to the election system.
- Question 12: using the company's public key for the report. A message is protected with the **receiver's** keys.
- Question 13: listing features of each method separately instead of making direct comparisons.
- Question 5: forgetting to keep only the last digit when a sum goes past 9.
- Question 9: saying symmetric encryption is "weak" or "easy to crack". The drawback the syllabus points to is sharing the key, not the strength of the scrambling.
- Question 11: saying the hacker "cannot get past the encryption". Explain which key is missing and why it was never exposed.
- Question 14: treating encryption as if it also detects errors. Encryption and error detection solve different problems, so a transmission system often uses both.

## Checking a digit-shift answer

To check an encryption such as Question 5, decrypt your answer by subtracting the key from each digit, adding 10 first if the digit is smaller than the key. 8361 with key 5 gives 3, 8 (13 − 5), 1 (6 − 5) and 6 (11 − 5), which is the original 3816.
