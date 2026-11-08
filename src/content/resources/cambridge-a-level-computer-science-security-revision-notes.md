---
title: "Cambridge A Level Computer Science (9618): Security -- Revision Notes"
seoTitle: "Cambridge 9618 Encryption and Certificates Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 17: Security"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 17
syllabusTopics:
  - qualification: "a-level"
    topic: "security"
  - qualification: "a-level"
    topic: "security"
    subtopic: "encryption-encryption-protocols-and-digital-certificates"
description: "Revision notes on symmetric and asymmetric keys, private and verified messages, quantum cryptography, TLS, certificates and digital signatures for Cambridge 9618."
author: "marlbridge-academic-team"
publishedDate: 2026-11-08
featured: false
---

Topic 17 Security explains how encryption protects data in A Level detail: symmetric and asymmetric key cryptography, which key is used to send a private message and which to send a verified one, quantum cryptography, the SSL/TLS protocols, and how digital certificates are acquired and used to produce digital signatures. In Cambridge International AS & A Level Computer Science 9618 it is examined in Paper 3, where most marks depend on naming the right key at each step.

Related: [Security study guide](/resources/cambridge-a-level-computer-science-security-study-guide/) · [Security practice questions](/resources/cambridge-a-level-computer-science-security-practice/) · [AS Security, privacy and data integrity revision notes](/resources/cambridge-a-level-computer-science-security-privacy-and-data-integrity-revision-notes/)

## Syllabus coverage

| Section | Candidates should be able to |
|---|---|
| 17.1 | Show understanding of how encryption works: public key, private key, plain text, cipher text, encryption, symmetric key cryptography, asymmetric key cryptography |
| 17.1 | Explain how keys are used to send a private message from the public to an individual or organisation, and to send a verified message to the public |
| 17.1 | Explain how data is encrypted and decrypted using symmetric and asymmetric cryptography |
| 17.1 | Explain the purpose, benefits and drawbacks of quantum cryptography |
| 17.1 | Show awareness of SSL/TLS: purpose, use in client-server communication, situations where it is appropriate |
| 17.1 | Show understanding of digital certification: how a certificate is acquired and how it is used to produce digital signatures |

## Key definitions

| Term | Definition |
|---|---|
| Plain text | The original, readable data |
| Cipher text | The encrypted, unreadable form of the data |
| Encryption | Using an algorithm and a key to turn plain text into cipher text |
| Symmetric key cryptography | The same secret key is used to encrypt and decrypt |
| Asymmetric key cryptography | A matching key pair is used: data encrypted with one key can only be decrypted with the other |
| Public key | The key of a pair that is given to anyone |
| Private key | The key of a pair kept secret by its owner |
| Digital signature | A digest of a message encrypted with the sender's private key, used to verify the sender and that the message is unchanged |
| Digital certificate | An electronic document from a certificate authority that links a public key to its owner's identity |

## Symmetric and asymmetric compared

| | Symmetric | Asymmetric |
|---|---|---|
| Keys | One shared secret key | Public and private key pair per user |
| Speed | Fast; suits large amounts of data | Much slower; more processing |
| Main problem | The key must be shared securely in advance; interception exposes every message | Slower; the public key must be shown to belong to its owner (hence certificates) |
| Keys for n users all communicating privately | n(n − 1)/2 | n pairs |

## Which key is used?

| Aim | Sender encrypts with | Receiver decrypts with | What it achieves |
|---|---|---|---|
| Private message from the public to an organisation | The **organisation's public key** | The organisation's **private key** | Only the organisation can read it (confidentiality) |
| Verified message from an organisation to the public | The **organisation's private key** | The organisation's **public key** (available to anyone) | Anyone can read it, but it can only have come from the key's owner (authentication) |

Memory aid: to **hide** a message use the **receiver's public** key; to **prove** who sent it use the **sender's private** key.

## How a digital signature is produced and checked

1. The sender applies a hashing algorithm to the message to produce a **digest**.
2. The digest is encrypted with the **sender's private key**; this is the digital signature, sent with the message.
3. The receiver decrypts the signature with the **sender's public key** (taken from the sender's digital certificate) to recover the digest.
4. The receiver hashes the received message with the same algorithm and compares the two digests.
5. Matching digests show that the message came from the sender (authenticity) and was not altered (integrity).

The signature does not make the message secret; encrypt the message as well if confidentiality is needed.

## How a digital certificate is acquired

1. The organisation generates its key pair and keeps the private key secret.
2. It sends its public key and proof of identity to a **certificate authority (CA)**.
3. The CA checks the identity.
4. The CA creates a certificate holding the owner's name, the owner's public key, a serial number, the validity dates and the CA's name, and **signs it with the CA's private key**.
5. Anyone can check the certificate with the CA's public key (held in browsers and operating systems) and then trust the public key inside it.

## SSL/TLS in client-server communication

**Purpose**: to give a secure, encrypted connection between a client (browser) and a server, so data in transit cannot be read or altered, and the server's identity is authenticated. TLS is the successor to SSL.

Simplified handshake:

1. The client requests a secure connection.
2. The server sends its digital certificate (with its public key).
3. The client checks the certificate is valid, in date, for this site and signed by a trusted CA.
4. The client creates a **session key** (symmetric), encrypts it with the server's **public key** and sends it.
5. The server decrypts the session key with its **private key**.
6. All further data is encrypted with the symmetric session key.

Asymmetric encryption shares the key safely; symmetric encryption is used for the data because it is fast.

**Appropriate situations**: online banking, online shopping and payments, logging in to any account, sending personal data through web forms, email between client and mail server, and cloud storage.

## Quantum cryptography

| Purpose | Benefits | Drawbacks |
|---|---|---|
| To distribute an encryption key securely using the quantum properties of photons (quantum key distribution) | Any eavesdropping disturbs the photons and is detected, so a compromised key is discarded; security rests on physics rather than on the difficulty of a calculation, so it is expected to resist attack by quantum computers | Needs expensive, specialist equipment and dedicated fibre or line-of-sight links; works only over limited distances; slower key exchange; photon polarisation can change over long distances, causing errors |

## Worked example: counting keys

A group of 8 people each need to exchange private messages with every other person.

- Symmetric: 8 × 7 / 2 = 28 shared secret keys, each to be distributed securely.
- Asymmetric: 8 key pairs (16 keys), and only the 8 public keys need distributing, openly.

## Common mistakes and exam traps

- Encrypting a private message with the **sender's** key; it must be the **receiver's** public key.
- Saying a digital signature hides the message.
- Saying TLS encrypts all data asymmetrically; the data is sent using a symmetric session key.
- Naming HTTP as a TLS protocol (June 2025 examiner report). HTTPS is HTTP over TLS.
- Confusing a digital certificate (vouches for a public key) with a digital signature (vouches for a message).
- Writing that encryption prevents interception; it makes intercepted data unreadable.

## Frequently asked questions

**Why not use asymmetric encryption for everything?** It needs much more processing, so it is slow for large amounts of data. It is used to exchange a symmetric key safely, which then encrypts the data.

**How does the browser know the server's public key is genuine?** The key is in a certificate signed by a CA. The browser verifies the CA's signature using the CA's public key, which is already stored on the device.

**What is a digest?** A fixed-length value produced by applying a hashing algorithm to the message. Any change to the message gives a different digest.

## Official syllabus

Cambridge International AS & A Level Computer Science 9618, syllabus for 2026 and syllabus for 2027, 2028 and 2029, Topic 17 Security (17.1 Encryption, Encryption Protocols and Digital certificates). Examiner points are summarised on our [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
