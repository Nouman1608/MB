---
title: "Cambridge IGCSE Computer Science (0478): Encryption -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 2: Data transmission"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 2.3
syllabusTopics:
  - qualification: "igcse"
    topic: "data-transmission"
    subtopic: "encryption-0478"
description: "Revision notes for Cambridge IGCSE Computer Science 0478 section 2.3 encryption: key terms, symmetric and asymmetric methods, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense syllabus section 2.3, Encryption. The syllabus asks for two things: the need for and purpose of encryption when transmitting data, and how data is encrypted using symmetric and asymmetric encryption, including public and private keys. For the full explanation and worked examples, use the [Encryption study guide](/resources/cambridge-igcse-computer-science-0478-encryption/).

## Need and purpose: the three-line answer

1. Data in transmission can be **intercepted** (for example on a wireless link or at a router it passes through).
2. Encryption turns plaintext into **ciphertext** using an algorithm and a **key**.
3. Intercepted ciphertext is **meaningless** without the correct key, so the data stays **confidential**.

Encryption does **not** prevent interception, stop a hacker accessing a network, or detect errors. Write "it makes the data meaningless if intercepted".

## Key terms

| Term | Definition to learn |
|---|---|
| Encryption | Scrambling data so it cannot be understood without a key |
| Decryption | Using a key to turn ciphertext back into plaintext |
| Plaintext | Data before it is encrypted |
| Ciphertext | Data after it has been encrypted |
| Key | A value used by the encryption algorithm to encrypt or decrypt |
| Symmetric encryption | The same key is used to encrypt and decrypt |
| Asymmetric encryption | Two linked keys: a public key to encrypt and a private key to decrypt |
| Public key | Can be shared with anyone; encrypts data sent to its owner |
| Private key | Kept secret by its owner; never transmitted; decrypts data encrypted with the matching public key |
| Key pair | A public key and a private key that are mathematically linked |

## Symmetric encryption in four steps

1. Sender and receiver share **one secret key**.
2. Sender encrypts plaintext with the key.
3. Ciphertext is sent.
4. Receiver decrypts with the **same** key.

**Weakness:** the key must be sent to the receiver first. If it is intercepted, every message encrypted with it can be read.

**Strength:** simple and quick, which suits large amounts of data.

## Asymmetric encryption in five steps

1. Receiver creates a **key pair**.
2. Receiver shares the **public key** with the sender.
3. Sender encrypts with the **receiver's public key**.
4. Ciphertext is sent.
5. Receiver decrypts with **their own private key**.

**Strength:** the private key never travels, so it cannot be intercepted. An interceptor holding the public key cannot decrypt.

**Weakness:** more complex and slower than symmetric encryption.

## The "whose key?" rule

The receiver owns both keys used to protect a message sent to them.

| Sending a confidential message to... | Encrypt with | Decrypt with |
|---|---|---|
| Aisha | Aisha's public key | Aisha's private key |
| A bank | The bank's public key | The bank's private key |
| A customer replying to the bank | The customer's public key | The customer's private key |

If both people want to send to each other, there are **two key pairs**, one each.

## Quick illustration of a key

A letter-shift cipher with key 5 turns HELP into MJQU (H→M, E→J, L→Q, P→U). With key 2 the same word becomes JGNR. Same algorithm, different key, different ciphertext. Real network encryption is far more complex, but the role of the key is the same.

## Comparison grid

| | Symmetric | Asymmetric |
|---|---|---|
| Keys | 1 shared | 2 linked (public, private) |
| Secret key sent across network? | Yes, before use | No |
| Speed | Faster | Slower |
| Risk | Key intercepted in transit | Private key lost or stolen from its owner |

## Exam traps

- **"Encryption stops hackers."** It does not stop access or interception; it stops the data being understood.
- **Wrong direction.** The sender never uses their own private key to keep a message to someone else confidential.
- **Anonymous keys.** "Encrypt with the public key" loses marks in a scenario. Write "the shop's public key".
- **Private key on the move.** Any answer where the private key is emailed or transmitted is wrong.
- **Topic confusion.** Encryption is about confidentiality; parity, checksum and echo check (section 2.2) are about detecting errors.
- **"Symmetric uses one key each."** No: symmetric uses one key shared by both sides.
- **Calling keys passwords.** A key is used by the algorithm; it is not something the user types to log in.

## Command-word reminders

- **State the purpose of encryption**: to make data meaningless if intercepted, so it stays confidential.
- **Describe symmetric encryption**: one key, shared, used to encrypt and to decrypt.
- **Describe asymmetric encryption**: key pair; public key shared and used to encrypt; private key kept secret and used to decrypt.
- **Explain why asymmetric is more secure for a first contact**: no secret key has to be transmitted, so none can be intercepted.

## Self-test

1. State the purpose of encrypting data before it is transmitted.
2. What is ciphertext?
3. How many keys does symmetric encryption use?
4. Give one drawback of symmetric encryption.
5. Which key is shared freely in asymmetric encryption?
6. Which key decrypts a message sent to Daniel using asymmetric encryption?
7. Why can an interceptor with a public key not read the ciphertext?
8. Give one drawback of asymmetric encryption compared with symmetric.
9. Using a letter shift with key 1, encrypt the word ZOO.
10. A student writes: "Encryption checks the data has not changed during transmission." Correct the statement.
11. Why is the encryption algorithm often public, yet the data is still secure?
12. Two friends want to send confidential messages in both directions using asymmetric encryption. How many key pairs are needed?

**Answers**

1. To make the data meaningless if it is intercepted, so only the intended recipient can understand it.
2. Data that has been encrypted and cannot be understood without the key.
3. One, shared by the sender and receiver.
4. The key has to be sent to the receiver, and if it is intercepted all messages using it can be decrypted.
5. The public key.
6. Daniel's private key.
7. A public key can only encrypt; decryption needs the matching private key, which is never transmitted.
8. It is more complex and slower to carry out.
9. APP (Z wraps round to A; O becomes P).
10. Encryption does not check for errors; it hides the meaning of data. Error detection methods such as parity checks or checksums check whether data has changed.
11. Security depends on the key, not the algorithm; without the correct key the ciphertext cannot be decrypted.
12. Two: one for each friend.

Practise full exam-style answers with the [Encryption practice questions](/resources/cambridge-igcse-computer-science-0478-encryption-practice/).
