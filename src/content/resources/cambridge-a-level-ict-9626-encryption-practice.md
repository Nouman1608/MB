---
title: "Cambridge A Level Information Technology (9626): Encryption -- Practice Questions"
resourceType: "practice-questions"
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
description: "Thirteen original Cambridge 9626 IT section 1.3 questions with answers on symmetric and asymmetric encryption, TLS/SSL, IPsec and uses of encryption."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Encryption study guide](/resources/cambridge-a-level-ict-9626-encryption/)

These questions are for **section 1.3 Encryption** (Topic 1, AS Level) of Cambridge International AS & A Level Information Technology (9626), 2025–2027. All organisations are invented.

---

## Section A

**1.** Define the term encryption. **[2]**

**2.** State the difference between plaintext and ciphertext. **[2]**

**3.** Describe symmetric encryption. **[2]**

**4.** Identify the key used to decrypt a message that was encrypted with a person's public key. **[1]**

**5.** State **one** disadvantage of symmetric encryption. **[1]**

**6.** A simple shift cipher moves each letter 4 places forward in the alphabet, so A becomes E. Write the ciphertext for the word `CODE`. **[2]**

## Section B

**7.** Marlow Bank's website uses TLS.

**(a)** State the purpose of TLS. **[2]**

**(b)** Describe the steps that take place when a customer's browser first connects to the bank's website. **[5]**

**8.** Explain why asymmetric encryption is not normally used on its own to encrypt a large video file. **[3]**

**9.** Compare symmetric and asymmetric encryption. **[4]**

**10.** Brookside Engineering lets staff work from home. The staff need to reach files held on the company server.

**(a)** Name a protocol that could be used to protect the traffic and state what it does. **[3]**

**(b)** Explain why this protocol is more suitable here than relying on each application to be secure. **[3]**

**11.** A salesperson's laptop contains customer records and is stolen from a train. The laptop has full disk encryption turned on.

**(a)** Explain what full disk encryption is. **[2]**

**(b)** Explain why the thief probably cannot read the customer records. **[2]**

**(c)** State **two** other problems for the company that encryption does not prevent. **[2]**

**12.** Evaluate the use of encryption by an online shop that stores customer payment details. **[6]**

**13.** Explain what a digital certificate is used for in TLS. **[3]**

---

## Answers

**1.** Scrambling data using an algorithm and a key [1] so that it cannot be understood by anyone who does not have the correct key [1]. **[2]**

**2.** Plaintext is the original readable data [1]; ciphertext is the scrambled data produced by encryption [1]. **[2]**

**3.** The same key is used to encrypt and decrypt the data [1], so the key must be kept secret by both the sender and the receiver [1]. **[2]**

**4.** The recipient's private key [1]. **[1]**

**5.** Any one from: the key must be shared and could be intercepted [1]; a different key is needed for each pair of people [1]; if the key is lost or stolen all the data is at risk [1]. **[1]**

**6.** Shift each letter four places: C becomes G [1], O becomes S, D becomes H and E becomes I, giving `GSHI` [1]. **[2]**

**7. (a)** To provide an encrypted, secure connection between the browser and the server [1] so that data sent cannot be read if it is intercepted [1].

**(b)** The browser asks for a secure connection [1]. The server sends its digital certificate, which includes its public key [1]. The browser checks that the certificate is genuine and valid [1]. The browser and server use asymmetric encryption to agree a session key [1]. The rest of the session is encrypted with that session key using symmetric encryption [1]. **[7]**

**8.** Asymmetric encryption is slow and needs more processing power than symmetric encryption [1]. A large file would take a long time to encrypt and decrypt [1]. Instead, a symmetric key is used for the file and asymmetric encryption is used only to share that key safely [1]. **[3]**

**9.** Symmetric uses one shared secret key, whereas asymmetric uses a public and a private key [1]. Symmetric is faster, whereas asymmetric is slower [1]. Symmetric has a key distribution problem, whereas asymmetric avoids sharing the private key [1]. Symmetric suits large amounts of data, whereas asymmetric suits sharing keys and small messages or digital signatures [1]. **[4]**

**10. (a)** IPsec [1]. It authenticates and encrypts IP packets [1], so that all traffic between the home worker and the company server is protected, normally using a VPN [1].

**(b)** IPsec protects all traffic that passes through the connection, whatever application sends it [1]. Applications that are not secure themselves, such as an old file-sharing program, are therefore protected [1]. The company does not need to rely on each program being updated or configured correctly [1]. **[6]**

**11. (a)** All the data on the drive is encrypted [1], and it can be read only when the correct password or key is supplied at start-up [1].

**(b)** Without the key the files appear as unreadable ciphertext [1], and removing the drive and connecting it to another computer will not help [1].

**(c)** Any two from: the company has lost the laptop and must replace it [1]; staff cannot work until it is replaced [1]; data not backed up elsewhere may be lost [1]; if the password was written down or weak, the thief may unlock it [1]. **[6]**

**12.** Advantages: stored details cannot be read if the database is stolen [1]; details sent over the internet are protected from interception, for example by TLS [1]; it helps the shop meet data protection rules and builds customer trust [1]. Disadvantages: encryption and decryption use processing power and may slow the site [1]; if keys are lost, the shop cannot read its own data [1]; it does not protect against malware, or a member of staff who has the key and misuses the data [1]. Conclusion: the benefits outweigh the costs because the damage from a data breach is far greater, provided keys are managed carefully [1]. Any six marks. **[6]**

**13.** A digital certificate contains the website's public key and details of its owner [1] and is issued by a trusted certificate authority [1]. The browser uses it to check that the website is genuine, so the user is not tricked into using a fake site [1]. **[3]**

## Where marks are usually lost

- Confusing which key encrypts and which decrypts in asymmetric encryption.
- Saying encryption "stops hacking" instead of making stolen data unreadable.
- Describing TLS without the handshake order, or forgetting that the session uses symmetric encryption.
- Giving a protocol name without its purpose.
- Missing a conclusion in an evaluate question.
