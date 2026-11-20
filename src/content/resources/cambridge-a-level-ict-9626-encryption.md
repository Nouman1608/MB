---
title: "Cambridge A Level Information Technology (9626): Encryption"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Topic 1 – Data processing and information"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 1.3
syllabusTopics:
  - qualification: "a-level"
    topic: "data-processing-and-information"
  - qualification: "a-level"
    topic: "data-processing-and-information"
    subtopic: "encryption"
description: "Cambridge 9626 IT section 1.3 study guide: why encryption is needed, symmetric and asymmetric methods, TLS/SSL and IPsec, uses of encryption, and advantages and disadvantages."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide teaches **section 1.3 Encryption** of Topic 1 Data processing and information in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is AS Level content, examined in Paper 1 Theory. The [Data processing and information overview](/resources/a-level-cambridge-ict-data-processing-and-information/) gives a short summary; this page explains how each method and protocol works and how to compare them. Use it with the [encryption practice questions](/resources/cambridge-a-level-ict-9626-encryption-practice/).

## What section 1.3 covers

| Syllabus point | What you must be able to do |
|---|---|
| The need for encryption | Explain why data must be protected |
| Methods | Describe symmetric encryption (private key only) and asymmetric encryption (private and public keys) |
| Protocols | Explain the purpose of TLS/SSL and IPsec, and their use in client-server communication |
| Uses | Protection of data and systems encryption |
| Evaluation | Give advantages and disadvantages of the different protocols and methods |

## The need for encryption

Data is often stored on devices that can be lost or stolen, and sent across networks where others may intercept it. A person who reads or copies the data can commit fraud, steal an identity, sell trade secrets or blackmail the owner.

**Encryption** scrambles data using an **algorithm** and a **key** so that it cannot be understood without the right key. The original readable data is **plaintext**. The scrambled data is **ciphertext**. Turning plaintext into ciphertext is **encryption**; turning ciphertext back into plaintext is **decryption**.

Encryption does not stop data from being stolen or intercepted. It makes the stolen data useless to anyone who does not have the key. Reasons organisations use it include protecting customers' personal and payment details, keeping to data protection laws, keeping business secrets safe and maintaining customer trust.

## Symmetric encryption

In **symmetric encryption** the **same key** is used to encrypt and to decrypt. The syllabus describes this as using a **private key only**: the key must be kept secret by both the sender and the receiver.

### Worked example 1: a simple symmetric cipher

A shift cipher is a very simple symmetric method. The key is the number of places each letter is moved along the alphabet. With the key 3, A becomes D, B becomes E, and so on. The sender encrypts the message `MEET AT NOON`.

1. Shift M by 3 to get P, and E by 3 to get H.
2. The second E also becomes H, and T becomes W, so `MEET` becomes `PHHW`.
3. In `AT`, A becomes D and T becomes W, giving `DW`.
4. In `NOON`, N becomes Q and O becomes R, giving `QRRQ`.
5. The ciphertext is `PHHW DW QRRQ`.

To decrypt, the receiver shifts each letter back by 3. They can do this only if they know the key, 3. Real symmetric algorithms use the same idea of one shared secret, but with far more complex scrambling that cannot be broken by guessing.

**How it works in practice:** both parties must have the same secret key before they begin. The key must be exchanged in a safe way, for example in person or already stored on both devices.

**Advantages:**
- It is **fast** and needs relatively little processing power, so it suits large amounts of data such as whole disks or video streams.
- It is simple to use for one user encrypting their own files, because that user holds the only key.

**Disadvantages:**
- The **key distribution problem**: if the key is sent over a network, someone may intercept it and then read everything.
- A different key is needed for each pair of communicators, so the number of keys grows quickly in a large organisation.
- If the key is lost, the data cannot be recovered. If the key is stolen, all the data is exposed.

## Asymmetric encryption

**Asymmetric encryption** uses a **pair of keys** that are mathematically linked.
- The **public key** can be given to anyone.
- The **private key** is kept secret by its owner.

Data encrypted with the public key can be decrypted only with the matching private key.

### Worked example 2: sending a confidential message

Asha wants to send Ben a private message.

1. Ben has a key pair. He publishes his **public key** and keeps his private key secret.
2. Asha obtains Ben's public key and uses it to encrypt her message.
3. The ciphertext is sent over the internet. Someone who intercepts it sees only scrambled data. Even Asha cannot decrypt it now, and the public key will not decrypt it.
4. Ben uses his **private key** to decrypt the message.

The secret key never travels over the network. That solves the key distribution problem.

If the keys are used the other way round, the owner encrypts something with their **private key** and anyone can decrypt it with the **public key**. This does not give confidentiality, since everyone has the public key, but it proves the sender's identity. This is the idea behind **digital signatures**.

**Advantages:**
- No secret key has to be shared, so the key distribution problem is solved.
- Anyone can send a confidential message to the owner of a public key.
- It supports digital signatures that prove who sent a message.

**Disadvantages:**
- It is **slower** and needs more processing power than symmetric encryption, so it is not suited to encrypting large amounts of data directly.
- Keys are long and more complex to manage.
- A user must be sure that a public key really belongs to the claimed owner, otherwise an attacker could supply a false key. This is why digital certificates are used.

| Feature | Symmetric | Asymmetric |
|---|---|---|
| Keys | One shared secret key | A public key and a private key |
| Speed | Fast | Slower |
| Key sharing | Secret key must be shared safely | Only the public key is shared |
| Best use | Encrypting large amounts of data | Exchanging keys, signatures, small messages |

## Encryption protocols

A **protocol** is an agreed set of rules. Encryption protocols set out how two devices agree on keys and then protect the data they exchange.

### Transport Layer Security (TLS) and Secure Socket Layer (SSL)

**Purpose:** to provide a secure, encrypted connection between two applications, such as a web browser and a web server, across an insecure network. TLS is the newer protocol and replaced SSL, but the two names are often used together.

**Use in client-server communication.** When a browser (the client) connects to a secure website (the server), a **handshake** takes place:

1. The client asks for a secure connection.
2. The server sends a **digital certificate** that contains its public key and has been issued by a trusted certificate authority.
3. The client checks that the certificate is valid and genuine.
4. The two sides use asymmetric encryption to agree a **session key**.
5. The rest of the session uses fast **symmetric** encryption with that session key.

This combines the strengths of both methods: asymmetric encryption to share the key safely, and symmetric encryption for speed. Users see this as `https://` and a padlock symbol. It protects online banking, shopping and logins from being read on the way.

### Internet Protocol Security (IPsec)

**Purpose:** to secure communication at the level of whole IP packets. It authenticates the packets and encrypts their contents, so every application that uses the connection is protected without having to be changed.

**Use in client-server communication.** IPsec is often used to build **virtual private networks (VPNs)**. A worker's laptop (the client) sets up an IPsec connection to the company's server over the internet. All traffic between them is encrypted, so the worker can reach the company's files safely from a hotel or café.

### Comparing TLS/SSL and IPsec

| Feature | TLS/SSL | IPsec |
|---|---|---|
| Protects | One application connection, usually a web session | All traffic between two devices or networks |
| Setup | Built into browsers and servers, no extra software | Often needs configuration or VPN software |
| Typical use | Online shopping, banking, email over the web | Site-to-site links, remote workers on VPNs |
| Advantage | Easy for the public to use; certificate shows who the website is | Covers all applications automatically |
| Disadvantage | Only protects the application using it | More complex to set up and manage |

## Uses of encryption

**Protection of data.** Data that is stored or sent can be encrypted. Examples include encrypting files before sending them by email, protecting a database of customer details, encrypting messages and securing online payments. If the data is stolen, it is of no use without the key.

**Systems encryption.** Whole systems can be encrypted, not just single files. **Full disk encryption** encrypts everything on a hard drive or SSD, so a stolen laptop cannot be read by removing the drive. Mobile phones, USB drives and back-up media can be encrypted in the same way. The user enters a password, passphrase or biometric check to unlock the system when it starts.

### Advantages of encryption in general

- Data stolen or intercepted cannot be understood without the key.
- It helps organisations meet data protection requirements.
- It builds customer trust in online services.

### Disadvantages of encryption in general

- Encryption and decryption need **processing time**, which can slow systems down.
- If the **key is lost**, even the owner cannot recover the data.
- It does not stop other threats such as malware, or users with legitimate access misusing data.
- Strong encryption may delay law enforcement and make it harder to share data between organisations.
- Poor key management, such as weak passwords, can undo the protection.

## Common mistakes

- Saying that encryption "stops hackers getting in". It makes captured data unreadable, but does not block access to the system.
- Confusing the keys: in asymmetric encryption, the **public** key encrypts a message for the owner and the **private** key decrypts it.
- Saying symmetric encryption uses "two keys" or asymmetric uses "one key".
- Writing that TLS "is the same as" HTTPS. HTTPS is HTTP carried over TLS.
- Describing SSL as the current protocol. TLS replaced SSL, though the names are used together.
- Forgetting the **purpose** of a protocol when asked for it, and listing only its name.

## Exam technique

- **Describe** a method: name the keys, say who holds them, and state what each does.
- **Explain** a protocol: give its purpose, then the order of the main steps.
- **Compare**: use words such as "whereas" and mention both sides in each sentence.
- **Suggest** or **justify**: link the choice to the scenario. For example, a company with remote staff reaching internal files would justify IPsec because all traffic on the VPN is encrypted.
- Keep advantages and disadvantages specific. "It is secure" earns nothing on its own.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 1 Data processing and information, section 1.3 Encryption.
