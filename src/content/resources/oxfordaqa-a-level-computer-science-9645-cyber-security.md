---
title: "OxfordAQA A-Level Computer Science (9645): Cyber security"
seoTitle: "OxfordAQA 9645 Cyber Security Study Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.14.5 in depth: firewalls, symmetric and asymmetric encryption, key exchange, digital certificates and signatures, worms, trojans and viruses."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.14.5 Cyber security** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.14 Networking and cyber security. It is International A-level content, examined in Unit 4, the written paper. The specification asks you to understand how a **firewall** works (packet filtering, proxy server, stateful inspection); **symmetric and asymmetric (private/public key) encryption** and **key exchange**; how **digital certificates and digital signatures** are obtained and used; and to discuss **worms, trojans and viruses** and the vulnerabilities they exploit.

The topic-level [networking and cyber security study guide](/resources/oxfordaqa-a-level-computer-science-networking-and-cyber-security/) covers all of topic 3.14 in one pass. This page gives cyber security its own space, with small worked calculations that show the ideas. The numbers used are far too small to be secure; they exist only so that you can follow each step. Afterwards use the [cyber security revision notes](/resources/oxfordaqa-a-level-computer-science-9645-cyber-security-revision-notes/) and the [cyber security practice questions](/resources/oxfordaqa-a-level-computer-science-9645-cyber-security-practice/). The earlier AS topic on [basic encryption methods](/resources/oxfordaqa-a-level-computer-science-representing-data/) is useful background.

## Firewalls

A **firewall** sits between a network and the outside world (or between parts of a network). It examines traffic and **allows or blocks** it according to rules. It may be a dedicated device or software. There are three techniques you need.

### Packet filtering

A packet filter inspects each packet **on its own** and checks its header against a list of rules. The rules use the source IP address, destination IP address, port number and protocol. The first matching rule is applied.

| Rule | Source | Destination | Port | Action |
|---|---|---|---|---|
| 1 | any | web server | 443 | allow |
| 2 | any | web server | 80 | allow |
| 3 | 198.51.100.7 | any | any | block |
| 4 | any | any | any | block |

A packet to the web server on port 443 matches rule 1 and is allowed. A packet to the same server on port 22 matches no earlier rule, so rule 4 blocks it. This is fast and simple, but each packet is judged alone, so a packet that merely pretends to belong to a connection may get through.

### Proxy server

A **proxy server** acts as a go-between. A client sends its request to the proxy, which makes the request to the outside server on the client's behalf and passes the response back. The outside server sees only the proxy's address, so **internal addresses are hidden**. A proxy can also inspect the content of requests and responses, block unwanted sites, keep a log, and **cache** popular pages.

### Stateful inspection

A stateful firewall keeps a **table of connections** it has seen, and so knows the **state** of each one. It allows an incoming packet only if it belongs to an established connection started from inside, or matches a rule for new connections. A packet that claims to be a reply to a connection that does not exist is dropped. Because it takes account of context, it is more secure than simple packet filtering.

## Encryption

**Encryption** turns plaintext into unreadable ciphertext using a key, so only someone with the right key can read it.

### Symmetric encryption

Symmetric encryption uses **one shared secret key** to encrypt and decrypt.

**Worked example 1.** A shift cipher with the shared key 7 moves each letter 7 places along the alphabet. `MEETATNOON` becomes `TLLAHAUVVU`. The receiver shifts each letter back 7 places and recovers `MEETATNOON`. In another toy example the byte 01001000 is combined with the key byte 10110101 using XOR, giving 11111101. XOR with the same key gives back 01001000. Real systems use strong algorithms with much longer keys.

Symmetric encryption is **fast**, which makes it suitable for large amounts of data. Its weakness is the **key distribution problem**: both sides need the same key, and sending it over an insecure network risks interception. With n people who each need a private channel to every other person, n(n − 1)/2 separate keys are needed: 45 keys for 10 people, 4,950 for 100 and 499,500 for 1,000.

### Asymmetric (public/private key) encryption

Asymmetric encryption uses a **pair of keys**. The **public key** can be shared with anyone; the **private key** is kept secret. Data encrypted with one key can be decrypted only with the other.

**Worked example 2: toy RSA.** Take two small primes p = 11 and q = 13. Then n = p × q = 143 and (p − 1)(q − 1) = 120. Choose the public exponent e = 7. The private exponent d must satisfy e × d ≡ 1 (mod 120); d = 103 works, because 7 × 103 = 721 = 6 × 120 + 1.

- Public key: (n = 143, e = 7). Private key: (n = 143, d = 103).
- To send the message value 9, the sender computes 9⁷ mod 143 = **48**.
- The receiver computes 48¹⁰³ mod 143 = **9** and recovers the message.

Only the holder of d can decrypt, and d cannot easily be found from n and e when n is the product of two very large primes. Asymmetric encryption solves the key distribution problem because the encryption key is public, but it is **much slower** than symmetric encryption. The number of keys for n people is only 2n (20 for 10 people, 200 for 100).

### Key exchange

Because symmetric encryption is fast but needs a shared key, systems such as HTTPS use both. First the two sides use an asymmetric method to **exchange a symmetric key** securely; then they use that key for the bulk of the data.

**Worked example 3: Diffie-Hellman key exchange.** Two people agree publicly on p = 23 and g = 5. Alice chooses a secret 6 and sends 5⁶ mod 23 = **8**. Bob chooses a secret 15 and sends 5¹⁵ mod 23 = **19**. Alice computes 19⁶ mod 23 = **2**; Bob computes 8¹⁵ mod 23 = **2**. Both now share the key 2, yet an eavesdropper who saw only 23, 5, 8 and 19 would have to solve a hard problem to find it. In another common method, one side generates a random symmetric key and sends it encrypted with the other side's public key.

## Digital signatures

A **digital signature** proves that a message came from a particular sender and was **not altered**.

1. The sender makes a short **hash** of the message.
2. The sender **encrypts the hash with their private key**. This is the signature, sent with the message.
3. The receiver decrypts the signature with the sender's **public key** and gets the hash.
4. The receiver hashes the received message. If the two hashes match, the message is **authentic** (only the private key holder could have made the signature) and has **not been changed** (any change would alter the hash).

With the toy key above, if the hash value is 42, the signature is 42¹⁰³ mod 143 = **3**. The receiver computes 3⁷ mod 143 = **42**, which matches the hash of the message received.

## Digital certificates

A signature only helps if you know the public key really belongs to the sender. A **digital certificate** links a public key to an identity. It contains the owner's name or domain, the owner's **public key**, the validity dates, and the **digital signature of the certificate authority (CA)** that issued it.

**How a certificate is obtained.** The organisation generates a key pair, keeps the private key and sends the public key and proof of identity to a trusted **certificate authority**. The CA checks the identity, then signs the certificate with the CA's private key and returns it.

**How it is used.** When a browser connects to a secure website, the server sends its certificate. The browser checks that it was signed by a CA it trusts (by checking the CA's signature with the CA's public key), that it has not expired, and that the name in it matches the website. It then uses the public key in the certificate to set up the encrypted session. If any check fails, the browser warns the user.

## Malware: worms, trojans and viruses

| | Virus | Worm | Trojan |
|---|---|---|---|
| How it exists | Attaches itself to a legitimate file or program | A standalone program | Disguised as useful or legitimate software |
| How it spreads | When the infected file is run or shared by a user | Copies itself across networks **without user action** | Does not copy itself; the user is tricked into installing it |
| What it does | Corrupts or deletes files, or runs unwanted code | Uses up bandwidth and resources; can carry other harmful code | May open a back door, steal data or install other malware |

**Vulnerabilities these exploit:**

- **Unpatched software**: known flaws, such as buffer overflows, that the supplier has fixed in an update that has not been installed (worms often spread this way).
- **Users**: opening unknown email attachments, running pirated software or being persuaded to install a program.
- **Open ports and unnecessary services** that give a worm somewhere to connect.
- **Weak passwords** and excessive privileges that let malware change the system.

**Protection** includes installing updates promptly, using anti-malware software, a firewall, backing up data, giving users only the permissions they need, and training users to be cautious.

## Exam technique

- **Firewalls:** name the technique and say what it examines (packet header, whole connection, or content through an intermediary).
- **Encryption:** state how many keys are used and which key does what.
- **Signatures:** the private key signs; the public key verifies.
- **Certificates:** name the certificate authority and say what it vouches for.
- **Malware:** compare on how it spreads and whether user action is needed.

## Common mistakes

- Saying a digital signature hides the message. It proves origin and integrity; it does not encrypt.
- Encrypting with the receiver's private key. To send a secret to someone, use their public key.
- Treating a trojan as self-replicating.
- Saying a virus spreads without any human action. That is a worm.
- Forgetting that asymmetric encryption is slower than symmetric.

## Next steps

- [Cyber security revision notes](/resources/oxfordaqa-a-level-computer-science-9645-cyber-security-revision-notes/)
- [Cyber security practice questions](/resources/oxfordaqa-a-level-computer-science-9645-cyber-security-practice/)
- [TCP/IP study guide](/resources/oxfordaqa-a-level-computer-science-9645-tcp-ip/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.14.5 Cyber security.
