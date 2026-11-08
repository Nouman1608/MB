---
title: "Cambridge A Level Computer Science (9618): Security -- Practice Questions"
seoTitle: "Cambridge 9618 Encryption and Certificates Practice"
resourceType: "practice-questions"
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
description: "Paper 3-style questions with answers on symmetric and asymmetric encryption, quantum cryptography, TLS, certificates and signatures for Cambridge 9618."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Security revision notes](/resources/cambridge-a-level-computer-science-security-revision-notes/) · [Security study guide](/resources/cambridge-a-level-computer-science-security-study-guide/)

These questions cover Topic 17 Security of Cambridge International AS & A Level Computer Science 9618: encryption, encryption protocols and digital certificates (17.1). It is A Level content, assessed in Paper 3. In every answer, name each key precisely: whose key it is, and whether it is public, private or a session key.

---

## Questions

**1.** Define the terms **plain text** and **cipher text**. **[2]**

**2.** **(a)** Describe how data is encrypted and decrypted using symmetric key cryptography. **[2]**
**(b)** Explain the main drawback of symmetric key cryptography. **[2]**

**3.** A member of the public wants to send her tax details privately to the tax office over the internet. Describe how asymmetric encryption is used so that only the tax office can read the message. **[3]**

**4.** The tax office wants to publish a notice so that anyone can confirm it really came from the tax office. Explain how keys are used to send this verified message to the public. **[3]**

**5.** A web company needs a digital certificate. Describe how it acquires one. **[4]**

**6.** Describe how a digital signature is produced for an email and how the receiver uses it to check the email. **[5]**

**7.** **(a)** State the purpose of TLS. **[2]**
**(b)** Describe how TLS sets up a secure connection between a browser and a web server. **[5]**
**(c)** Give **two** situations where using TLS is appropriate. **[2]**

**8.** Explain why TLS uses both asymmetric and symmetric encryption. **[2]**

**9.** A bank is considering quantum cryptography to exchange keys between two of its data centres.

**(a)** State the purpose of quantum cryptography. **[1]**
**(b)** Give **two** benefits and **two** drawbacks for the bank. **[4]**

**10.** A team of 15 people all need to exchange private messages with each other. Calculate the number of keys needed with symmetric key cryptography, and the number of key pairs with asymmetric cryptography. **[2]**

---

## Answers

**1.** Plain text: the original data / message in readable form, before encryption [1]. Cipher text: the data after encryption, in a form that cannot be understood without the key [1].

**2. (a)** The sender uses an encryption algorithm with a secret key to convert plain text to cipher text [1]; the receiver uses the same key (with the decryption algorithm) to convert the cipher text back to plain text [1].
**(b)** The same key must be known by both the sender and the receiver, so it has to be sent / shared securely before communication [1]; if the key is intercepted during distribution, every message encrypted with it can be decrypted [1].

**3.** The tax office has a key pair and makes its public key available (e.g. through its digital certificate) [1]. The sender encrypts her message using the tax office's public key [1]. Only the matching private key, which only the tax office holds, can decrypt the message, so no one else can read it [1].

**4.** The tax office encrypts the notice (or a digest of it) with its own private key [1]. Anyone can decrypt it with the tax office's public key, which is freely available [1]. Because only the tax office holds the private key, successful decryption with its public key proves the notice came from the tax office [1].

**5.** The company generates a key pair and keeps the private key secret [1]. It sends its public key and details proving its identity to a certificate authority (CA) [1]. The CA checks that the company is who it claims to be [1]. The CA issues a certificate containing the company's name and public key (with serial number, validity dates and the CA's name), signed with the CA's private key [1].

**6.** Producing: the email is put through a hashing algorithm to produce a digest [1]; the digest is encrypted with the sender's private key to form the digital signature, which is sent with the email [1]. Checking: the receiver decrypts the signature with the sender's public key (from the sender's certificate) to recover the digest [1]; the receiver hashes the received email using the same algorithm [1]; if the two digests match, the email came from the sender and has not been altered [1].

**7. (a)** To provide a secure (encrypted) connection between a client and a server, so data sent cannot be read or altered if intercepted [1], and to authenticate the server so the client knows it is communicating with the genuine site [1].
**(b)** The browser requests a secure connection to the server [1]. The server sends its digital certificate containing its public key [1]. The browser checks that the certificate is valid / in date / issued by a trusted CA for that website [1]. The browser generates a symmetric session key, encrypts it with the server's public key and sends it [1]. The server decrypts it with its private key, and both then use the session key to encrypt all data for the session [1].
**(c)** Any two: online banking [1]; online shopping / entering card details [1]; logging in with a username and password [1]; sending personal data through a web form [1]; accessing email or cloud storage [1].

**8.** Asymmetric encryption allows the session key to be sent securely without a secret having been shared in advance [1]; symmetric encryption is much faster, so it is used for the large amount of data in the rest of the session [1].

**9. (a)** To distribute encryption keys securely, using the quantum properties of photons, so that any eavesdropping can be detected [1].
**(b)** Benefits (any two): an attempt to intercept the key disturbs the photons, so the bank knows and can discard the key [1]; security does not depend on a hard calculation, so it should resist future quantum computers [1]; keys can be changed frequently and securely [1]. Drawbacks (any two): the equipment is expensive and specialist [1]; it works only over limited distances / needs dedicated fibre between the centres [1]; the key exchange is slower [1]; errors can occur as photon polarisation changes over long distances [1].

**10.** Symmetric: 15 × 14 / 2 = **105** keys [1]. Asymmetric: **15** key pairs (one per person) [1].

---

## Where marks are usually lost

- Saying "the public key" or "the private key" without saying whose.
- Encrypting a private message with the sender's private key, which anyone could decrypt.
- Describing the whole TLS session as asymmetric.
- Mixing up the certificate (for the public key) and the signature (for the message).
- Claiming quantum cryptography makes data impossible to steal; it makes eavesdropping on the key detectable.

## Frequently asked questions

**How many marks does a TLS handshake usually carry?**
Typically one per correct step in order. Name the certificate, the check, the session key and which key encrypts it.

**Do I need to know how hashing algorithms work?**
No. You need to know that hashing produces a digest and that any change to the message changes the digest.

**Is SSL still used?**
TLS replaced SSL, but the syllabus names both. Describe them as the protocol that secures client-server communication.

## Official syllabus

Questions are written against Cambridge International AS & A Level Computer Science 9618, syllabus for 2026 and syllabus for 2027, 2028 and 2029, Topic 17 Security. Examiner comments by series are on the [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
