---
title: "OxfordAQA A-Level Computer Science (9645): Cyber security -- Revision Notes"
seoTitle: "OxfordAQA 9645 Cyber Security Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 14 – Networking and cyber security"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 14.5
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "networking-and-cyber-security"
  - qualification: "a-level"
    topic: "networking-and-cyber-security"
    subtopic: "cyber-security-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.14.5: firewalls, symmetric and asymmetric encryption, key exchange, certificates, signatures and malware."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.14.5 Cyber security** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (International A-level content in topic 3.14, examined in Unit 4). For worked examples, see the [cyber security study guide](/resources/oxfordaqa-a-level-computer-science-9645-cyber-security/), then practise with the [cyber security practice questions](/resources/oxfordaqa-a-level-computer-science-9645-cyber-security-practice/).

## What the specification requires

- Understand how a **firewall** works: **packet filtering, proxy server, stateful inspection**.
- Understand **symmetric and asymmetric (private/public key) encryption** and **key exchange**.
- Understand how **digital certificates and digital signatures** are obtained and used.
- Discuss **worms, trojans and viruses** and the vulnerabilities they exploit.

## Key terms

| Term | Meaning |
|---|---|
| Firewall | Allows or blocks network traffic according to rules |
| Packet filtering | Judges each packet on its own using header details |
| Proxy server | An intermediary that makes requests on behalf of clients |
| Stateful inspection | Tracks connections and allows only packets that fit an established connection |
| Symmetric encryption | One shared secret key encrypts and decrypts |
| Asymmetric encryption | A public key and a private key form a pair |
| Key exchange | Securely agreeing a shared key |
| Digital signature | A hash encrypted with the sender's private key |
| Digital certificate | Links a public key to an identity; signed by a certificate authority |
| Certificate authority (CA) | A trusted organisation that issues certificates |

## Firewall techniques

| Technique | What it checks | Strength | Weakness |
|---|---|---|---|
| Packet filtering | Source and destination address, port, protocol, one packet at a time | Fast and simple | No knowledge of connections; spoofed packets may pass |
| Proxy server | Requests made on the client's behalf; content can be inspected | Hides internal addresses; can block sites and cache | Adds delay; can be a bottleneck |
| Stateful inspection | A table of connections and their state | Blocks packets that do not belong to a known connection | Uses more memory and processing |

## Symmetric and asymmetric encryption

| | Symmetric | Asymmetric |
|---|---|---|
| Keys | One shared secret key | Public key and private key |
| Speed | Fast | Slower |
| Main problem | Sharing the key safely | Slow for large data |
| Keys needed for n people to communicate privately | n(n − 1)/2 (45 for 10 people) | 2n (20 for 10 people) |
| Typical use | Encrypting bulk data | Key exchange, signatures, certificates |

- To send a **secret** to Sam: encrypt with Sam's **public** key. Only Sam's private key decrypts it.
- To **sign**: encrypt the hash with your **private** key. Anyone can check it with your public key.

### Toy RSA reminder

p = 11, q = 13, so n = 143. Public exponent e = 7, private exponent d = 103 (7 × 103 = 721 = 6 × 120 + 1).

| Step | Calculation | Result |
|---|---|---|
| Encrypt 9 | 9^7 mod 143 | 48 |
| Decrypt 48 | 48^103 mod 143 | 9 |
| Encrypt 42 | 42^7 mod 143 | 81 |
| Sign hash 42 | 42^103 mod 143 | 3 |
| Verify signature 3 | 3^7 mod 143 | 42 |

These numbers are far too small to be secure.

### Key exchange

- **Hybrid method (HTTPS):** use asymmetric encryption to exchange a symmetric key, then use that key for the data.
- **Diffie-Hellman example:** p = 23, g = 5. Alice sends 5^6 mod 23 = 8; Bob sends 5^15 mod 23 = 19. Each then computes the same shared key, 2.

## Digital signatures

1. Hash the message.
2. Encrypt the hash with the sender's **private** key (the signature).
3. Receiver decrypts the signature with the sender's **public** key.
4. Receiver hashes the message and compares. A match shows the sender is genuine and the message is **unchanged**.

## Digital certificates

- **Contents:** owner's name or domain, public key, validity dates, CA's signature.
- **Obtaining:** the owner sends the public key and proof of identity to a CA; the CA checks it, signs and returns the certificate.
- **Using:** a browser checks the CA's signature, the expiry date and that the name matches, then uses the public key to start an encrypted session.

## Malware

| | Virus | Worm | Trojan |
|---|---|---|---|
| Form | Attaches to a legitimate file | Standalone program | Disguised as legitimate software |
| Spreads | When infected file is run or shared | Copies itself across networks without user action | User installs it; does not self-replicate |
| Harm | Corrupts files, runs unwanted code | Uses bandwidth; carries payloads | Back door, data theft |

**Vulnerabilities exploited:** unpatched software (for example buffer overflows), users opening attachments or installing unknown software, open ports and unneeded services, weak passwords and over-generous permissions.

**Protection:** updates, anti-malware, firewall, backups, least privilege, user training.

## Exam traps

- **Signatures do not encrypt the message.** They prove origin and integrity.
- **Which key?** Encrypt a secret with the receiver's public key; sign with your own private key.
- **Trojans** do not replicate on their own; worms do.
- **Packet filtering** looks at one packet at a time; stateful inspection tracks connections.
- **Symmetric** is faster; **asymmetric** avoids the shared key problem.
- **Certificates** are signed by a CA; they are not self-proving.
- **Describe the vulnerability** as well as the malware.

## Quick self-test

1. Name the three firewall techniques in the specification.
2. What does packet filtering examine?
3. Why does a proxy server hide internal addresses?
4. How many keys does symmetric encryption use?
5. Which key do you use to encrypt a secret message for someone else?
6. Which key signs a message?
7. Why is key exchange needed?
8. What does a certificate authority do?
9. Name one item in a digital certificate.
10. How does a worm differ from a virus?
11. How does a trojan reach a computer?
12. Give one vulnerability that malware exploits.

### Answers

1. Packet filtering, proxy server, stateful inspection.
2. The header details of each packet: addresses, port and protocol.
3. External servers see only the proxy's address because the proxy makes the request.
4. One shared secret key.
5. The receiver's public key.
6. The sender's private key.
7. Symmetric encryption needs both sides to have the same key, and it must be shared securely.
8. It checks an owner's identity and signs a certificate that links a public key to that identity.
9. Any one of: owner's name or domain, public key, validity dates, the CA's signature.
10. A worm copies itself across networks without user action; a virus attaches to a file and needs it to be run or shared.
11. The user is tricked into installing it, because it is disguised as legitimate software.
12. Unpatched software (or weak passwords, or users opening attachments).

## More on this topic

- [Cyber security study guide](/resources/oxfordaqa-a-level-computer-science-9645-cyber-security/)
- [Cyber security practice questions](/resources/oxfordaqa-a-level-computer-science-9645-cyber-security-practice/)
- [TCP/IP revision notes](/resources/oxfordaqa-a-level-computer-science-9645-tcp-ip-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.14.5 Cyber security.
