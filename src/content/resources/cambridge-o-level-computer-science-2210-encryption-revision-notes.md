---
title: "Cambridge O Level Computer Science (2210): Encryption -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge O Level Computer Science 2210 section 2.3: why data is encrypted, symmetric and asymmetric keys, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed notes for syllabus section 2.3, Encryption. For the full step-by-step explanation and a model answer, use the [Encryption study guide](/resources/cambridge-o-level-computer-science-2210-encryption/).

## Syllabus checklist

- The need for, and purpose of, encryption when transmitting data.
- How data is encrypted using symmetric encryption.
- How data is encrypted using asymmetric encryption, including public and private keys.

## The purpose in one sentence

Encryption makes transmitted data **meaningless to anyone who intercepts it** without the correct key, so it stays **confidential** to the intended recipient.

What encryption does **not** do: stop interception, block access to a network, or check for errors.

## Key terms

| Term | Definition |
|---|---|
| Interception | Data being copied or captured while it travels across a network |
| Plaintext | Readable data before encryption |
| Ciphertext | Scrambled data after encryption |
| Encryption algorithm | The steps used to turn plaintext into ciphertext |
| Key | The value used by the algorithm to encrypt and decrypt |
| Symmetric encryption | One shared key encrypts and decrypts |
| Asymmetric encryption | A linked pair: public key encrypts, private key decrypts |
| Public key | Shared openly; used to encrypt messages for its owner |
| Private key | Kept secret by its owner; never transmitted; used to decrypt |
| Key distribution problem | The difficulty of sharing a secret key without it being intercepted |

## Symmetric: what to write

- The **same key** is used to encrypt and to decrypt.
- The key must be **shared with the receiver first**.
- If the key is intercepted while being shared, **all** data encrypted with it can be read.
- Advantage: **quick** and **simple**, good for large volumes of data.

## Asymmetric: what to write

- The receiver has a **key pair**: public and private, mathematically linked.
- The receiver's **public key** is given to the sender.
- The sender **encrypts** with the receiver's public key.
- The receiver **decrypts** with their own **private key**.
- The private key **never leaves** the receiver, so it cannot be intercepted.
- Disadvantage: **slower** and more complex than symmetric.

## Scenario grid: whose key?

| Scenario | Encrypt with | Decrypt with |
|---|---|---|
| Patient sends symptoms to a clinic | Clinic's public key | Clinic's private key |
| Clinic replies to the patient | Patient's public key | Patient's private key |
| Two branches of a firm that already share a secret key | The shared key | The same shared key |
| A voter sends a vote to an online voting system | System's public key | System's private key |

Rule: **the receiver's keys protect a message to the receiver.**

## Symmetric versus asymmetric

| | Symmetric | Asymmetric |
|---|---|---|
| Keys | 1 | 2 |
| Secret key transmitted? | Yes | No |
| Risk | Key intercepted while shared | Private key stolen from its owner |
| Speed | Faster | Slower |
| Best when | Both sides already share a key safely; large data | First contact with a new recipient |

## Illustration of a key (not a real cipher)

Add-the-key digit method with key 4: plaintext 2059 becomes 6493 (2+4 = 6, 0+4 = 4, 5+4 = 9, 9+4 = 13 → 3). With key 6 the same plaintext becomes 8615. Same algorithm, different key, different ciphertext.

## Answer templates

**Explain why data should be encrypted (3 marks):** name the sensitive data in the scenario; say it could be intercepted while being transmitted; say encryption makes it meaningless to anyone without the key, so it stays confidential.

**Describe asymmetric encryption (4 marks):** the receiver has a linked public and private key; the receiver's public key is given to the sender; the sender encrypts with it; the receiver decrypts with their private key, which is never transmitted.

**Compare the methods (4 marks):** number of keys; whether a secret key has to be sent; one advantage of each, such as speed for symmetric and no key exchange risk for asymmetric.

## Exam traps

- **"It stops data being stolen."** Say instead: if stolen, it cannot be understood.
- **Keys with no owner.** Always write "the clinic's public key", not "the public key".
- **Wrong key for decryption.** The public key does not decrypt.
- **Moving the private key.** Any step where the private key is sent is wrong.
- **Mixing topics.** Parity checks, checksums and echo checks belong to error detection, not encryption.
- **Assuming one key pair covers both directions.** Each receiver uses their own pair.

## Self-test

1. Give the purpose of encrypting data before transmission.
2. State one thing encryption cannot do.
3. What is the key distribution problem?
4. In symmetric encryption, how many keys are needed by two people?
5. Give one advantage of symmetric encryption.
6. Which key does a sender use in asymmetric encryption?
7. Which key must never be transmitted?
8. Give one disadvantage of asymmetric encryption.
9. A student emails a teacher using asymmetric encryption. Which key decrypts the email?
10. Using the add-the-key digit method with key 3, encrypt 7140.
11. Why can the encryption algorithm be public without making data insecure?
12. Name the term for encrypted data.

**Answers**

1. To make the data meaningless if it is intercepted, so only the intended recipient can understand it.
2. Any one: stop interception; stop someone accessing a network; detect errors.
3. A secret key has to be shared with the receiver, and it could be intercepted while being shared.
4. One, shared between them.
5. It is fast and simple, so it suits large amounts of data.
6. The receiver's public key.
7. The private key.
8. It is slower and more complex than symmetric encryption.
9. The teacher's private key.
10. 0473 (7+3 = 10 → 0, 1+3 = 4, 4+3 = 7, 0+3 = 3).
11. Security depends on the key being secret, not the algorithm.
12. Ciphertext.
