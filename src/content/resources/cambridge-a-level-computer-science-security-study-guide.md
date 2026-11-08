---
title: "Cambridge A Level Computer Science (9618): Security -- Study Guide"
resourceType: "study-guides"
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
description: "A Level study guide to symmetric and asymmetric encryption, TLS, digital signatures and digital certificates for Cambridge Computer Science 9618."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

At AS Level you learn that encryption makes intercepted data unreadable. At A Level you must explain how it does so: the difference between symmetric and asymmetric keys, how a secure connection is set up, how a digital signature proves who sent a message, and how a digital certificate lets a browser trust a website. These are favourite extended-answer topics on Paper 3.

## Where this fits in the specification

Topic 17 is A Level content and builds on the AS topic on security, privacy and data integrity and on the communication topics. The questions often use a scenario such as online banking or a messaging app and ask you to explain how the data is protected at each step. The vocabulary is precise, so learn the terms below exactly.

## Encryption basics

**Encryption** converts **plaintext** into **ciphertext** using an algorithm and a **key**. **Decryption** reverses the process. The algorithm is normally public; the security rests on the secrecy of the key. A longer key means more possible keys, so a **brute-force attack** (trying every key) takes longer. Encryption protects **confidentiality**; on its own it does not stop data being deleted or altered.

### Symmetric encryption

In **symmetric encryption** the same secret key encrypts and decrypts. It is fast and suits large amounts of data, but it has the **key distribution problem**: the sender and receiver must share the key securely before they start, and if it is intercepted all messages can be read. The number of keys also grows quickly with the number of users, because each pair needs its own.

### Asymmetric encryption

**Asymmetric encryption** uses a **key pair**. The **public key** is shared openly and the **private key** is kept secret by its owner. Data encrypted with one key can only be decrypted with the other. To send a confidential message to Priya you encrypt with Priya's public key; only Priya's private key can decrypt it. This removes the need to exchange a secret in advance. Its drawbacks are that it is much slower and needs more processing than symmetric encryption, so it is rarely used for bulk data.

### Quantum cryptography

**Quantum cryptography** uses properties of quantum states of particles, such as photons, to share a key. Any attempt to observe the particles disturbs them, so eavesdropping can be detected. You only need to know the idea at this level and why it matters: some current public-key methods could be broken by powerful quantum computers, so new approaches are being developed.

## Digital signatures

A **digital signature** shows that a message came from the claimed sender and has not been changed. The sender produces a **digest** of the message using a hashing algorithm, then encrypts the digest with the sender's **private key**; that encrypted digest is the signature and is sent with the message. The receiver decrypts the signature with the sender's **public key** to get one digest, calculates a digest of the received message and compares them. If they match, the message is authentic (the signer holds the private key) and has integrity (it was not altered). It gives **non-repudiation**, because the signer cannot easily deny sending it. Note that the signature does not hide the message; confidentiality needs separate encryption.

## Digital certificates

How does a browser know a public key belongs to the real bank and not an impostor? A **digital certificate** binds a public key to an identity. It is issued by a **certificate authority (CA)**, a trusted organisation that first checks the identity of the applicant. A certificate usually contains the owner's name, the owner's public key, the serial number, the validity dates, the name of the issuing CA and the CA's digital signature. A browser checks the CA's signature using the CA's public key, which is stored in the browser or operating system, and checks the certificate is in date.

## Encryption protocols: SSL and TLS

**Transport Layer Security (TLS)**, which replaced **Secure Sockets Layer (SSL)**, protects data between a client and a server. It is what makes the address start with https. The details are simplified here to the stages examiners expect:

1. The client connects and asks the server to prove its identity.
2. The server sends its **digital certificate** with its public key.
3. The client checks the certificate: is it from a trusted CA, in date and for this site?
4. The client generates a **session key** (a symmetric key), encrypts it with the server's public key and sends it.
5. The server decrypts the session key with its private key.
6. Both sides now use the **symmetric session key** to encrypt the data exchanged for the rest of the session.

The design uses asymmetric encryption to share a key safely and symmetric encryption for speed. Uses include online banking and shopping, email, and cloud storage. A limitation is that the protocol protects data in transit only; it does not protect a server that is hacked or a user whose own device has malware.

## Worked example 1: counting keys

A company of 12 staff wants every pair of staff to communicate privately.

- **Symmetric**: each pair needs a different shared key. Number of pairs = 12 x 11 / 2 = 66 keys, each of which has to be distributed secretly.
- **Asymmetric**: each person needs one key pair, giving 12 pairs, which is 24 keys, and only the 12 public keys need to be shared openly.

If a 13th person joins, the symmetric system needs 12 further keys (13 x 12 / 2 = 78 in total), while the asymmetric system needs one more pair. This demonstrates the key management benefit of asymmetric methods, which is why TLS uses one to protect the exchange of a symmetric key.

## Worked example 2: a toy key pair

Real keys are hundreds of digits long, but a tiny RSA-style example shows the principle of two matching keys. This is for understanding only; the specification does not ask you to calculate RSA values.

Take n = 33, public key e = 3 and private key d = 7. These work together because 3 x 7 = 21 and 21 leaves remainder 1 when divided by 20, a number linked to the factors 3 and 11 of 33.

1. Message M = 4. Encrypt with the public key: 4^3 = 64, and 64 mod 33 = 31. The ciphertext is 31.
2. Decrypt with the private key: 31^7 mod 33 = 4. The original message is recovered.

Anyone can use (n, e) to encrypt, but decrypting requires d. With n = 33 it is easy to find that 33 = 3 x 11 and work out d; the security of real systems depends on n being so large that it cannot be factorised in a realistic time. For a signature, the roles are reversed: the digest is transformed with the private key and anyone can check it with the public key.

## Common mistakes

- Saying encryption stops hackers getting the data. It stops them reading it.
- Reversing the keys: confidential messages use the receiver's public key; signatures use the sender's private key.
- Writing that a signature encrypts the whole message for secrecy.
- Saying TLS uses asymmetric encryption for all the data. It uses it to share a session key.
- Confusing a digital certificate with a digital signature. A certificate vouches for a key; a signature vouches for a message.
- Stating that a longer key makes a cipher unbreakable instead of harder to brute force.

## Exam technique

**Describe how** questions need steps in the correct order, with the key used at each step named as public, private or session. Give the reason for each design choice, such as "symmetric for speed". In scenario questions mention what is being protected (confidentiality, integrity, authenticity). Diagrams are accepted if labelled clearly.

## Check your understanding

1. State two differences between symmetric and asymmetric encryption. *Symmetric uses one shared key and is fast; asymmetric uses a public and private key pair and is slower but avoids sharing a secret key.*
2. Which key does Anna use to send a confidential message to Ben? *Ben's public key.*
3. Describe the purpose of a digital signature. *To show the message came from the claimed sender and has not been altered.*
4. List three items found in a digital certificate. *The owner's name, the owner's public key and the issuing CA (also validity dates or serial number).*
5. Why does TLS switch to a session key? *Symmetric encryption is much faster, so it is used for the bulk of the data once the key has been shared securely.*
6. How many symmetric keys are needed for 20 people who all need private pairs? *20 x 19 / 2 = 190.*
7. What does a certificate authority do? *It verifies the identity of the applicant and issues a signed certificate binding their public key to that identity.*
8. Explain one limitation of encryption. *It does not prevent the data being deleted, and it does not protect it if the key is stolen or the device is compromised.*
