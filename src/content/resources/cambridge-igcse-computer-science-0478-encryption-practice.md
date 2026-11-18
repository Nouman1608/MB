---
title: "Cambridge IGCSE Computer Science (0478): Encryption -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original practice questions with mark-scheme answers on Cambridge IGCSE Computer Science 0478 section 2.3: the purpose of encryption, symmetric and asymmetric keys."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Encryption study guide](/resources/cambridge-igcse-computer-science-0478-encryption/) and [Encryption revision notes](/resources/cambridge-igcse-computer-science-0478-encryption-revision-notes/)

---

## Section A

**1.** State what is meant by ciphertext. **[1]**

**2.** State the purpose of encrypting data before it is transmitted across a network. **[2]**

**3.** Identify the key that is used to decrypt data in symmetric encryption. **[1]**

**4.** Name the **two** keys that make up a key pair in asymmetric encryption, and state which one is kept secret. **[3]**

**5.** A student says: "If I encrypt my files before I send them, nobody can intercept them." Explain why the student is wrong. **[2]**

**6.** A message is encrypted with a letter-shift cipher where each letter moves forward **4** places in the alphabet. Encrypt the word **BIKE**, and state the value that acts as the key. **[2]**

## Section B

**7.** Describe how symmetric encryption is used to send a file from a head office to a branch office. **[4]**

**8.** An online shop uses asymmetric encryption so that customers can send their card details securely. Describe how the card details are encrypted and decrypted. Refer to the shop and the customer in your answer. **[4]**

**9.** Explain why asymmetric encryption overcomes the main weakness of symmetric encryption. **[3]**

**10.** Leila and Tom both want to send each other confidential messages using asymmetric encryption.

**(a)** State how many key pairs are needed.

**(b)** Tom is sending a message to Leila. Identify the key Tom uses and the key Leila uses. **[3]**

**11.** A news company sends very large video files every hour between two of its own studios, which already share a secret key that was installed in person. Discuss whether symmetric or asymmetric encryption is more suitable for these transfers. **[4]**

**12.** The ciphertext **JRRG** was produced with a letter-shift cipher. An interceptor learns that the key is 3.

**(a)** Decrypt the ciphertext.

**(b)** Explain what this shows about the importance of keeping a symmetric key secret. **[3]**

**13.** A hacker intercepts some packets travelling between a school and an examination board. The packets were encrypted with asymmetric encryption. The hacker also obtains the examination board's public key. Explain why the hacker still cannot read the data. **[3]**

**14.** The encryption algorithm a bank uses is published so that anyone can study it. Explain why the bank's transmitted data can still be secure. **[2]**

---

## Answers

**1.** Data that has been encrypted, so it cannot be understood without the correct key [1].

**2.** So that if the data is intercepted [1] it is meaningless / cannot be understood by anyone without the key, keeping it confidential [1].

**3.** The same key that was used to encrypt it (the single shared secret key) [1].

**4.** Public key [1]; private key [1]; the private key is kept secret by its owner [1].

**5.** Encryption does not stop the data being intercepted as it travels across the network [1]; it only makes intercepted data meaningless without the key [1].

**6.** B→F, I→M, K→O, E→I, giving **FMOI** [1]; the key is **4** (the number of places each letter is shifted) [1].

**7.** Head office and the branch must both hold the same secret key [1], which has to be shared securely first [1]. Head office encrypts the file with the key, producing ciphertext, which is transmitted [1]. The branch decrypts the ciphertext using the same key [1].

**8.** The shop generates a public key and a private key [1]. The shop's public key is sent to / made available to the customer [1]. The customer's computer encrypts the card details using the shop's public key before they are sent [1]. The shop decrypts the ciphertext with its own private key, which is never transmitted [1].

**9.** In symmetric encryption the secret key has to be sent to the receiver, so it could be intercepted and used to decrypt all the data [1]. In asymmetric encryption only the public key is shared [1]; the private key that decrypts never leaves its owner, so it cannot be intercepted in transit [1].

**10. (a)** Two key pairs (one belonging to Leila, one belonging to Tom) [1].
**(b)** Tom encrypts with **Leila's public key** [1]; Leila decrypts with **her own private key** [1].

**11.** Symmetric encryption is quicker / needs less processing than asymmetric encryption [1], which matters because the files are very large and sent frequently [1]. The usual weakness of symmetric encryption, sending the key across a network, does not apply because the key was installed in person [1]. So symmetric encryption is the more suitable choice here [1].

**12. (a)** Moving each letter back 3 places: J→G, R→O, R→O, G→D, giving **GOOD** [1].
**(b)** Anyone who obtains the key can decrypt the message as easily as the intended receiver [1], so if the key is intercepted the encryption gives no protection for any data encrypted with that key [1].

**13.** Data encrypted with the examination board's public key can only be decrypted with the board's matching private key [1]. A public key cannot be used to decrypt the data it encrypted [1]. The private key is kept by the board and never transmitted, so the hacker does not have it and the data stays meaningless [1].

**14.** The security depends on the key, not on keeping the algorithm secret [1]. Without the correct key, an attacker who knows the algorithm still cannot turn the ciphertext back into plaintext [1].

---

## Where marks are usually lost

- Writing that encryption "stops hacking" or "prevents interception" (Questions 2, 5 and 13).
- Leaving keys anonymous: "a public key" instead of "the shop's public key" (Question 8).
- Having the sender encrypt with their own private key, or transmitting a private key.
- In "discuss" questions, naming a method without linking the choice to details in the scenario, such as file size or how the key was shared (Question 11).
- Forgetting that a letter-shift key is the number of places moved, and shifting the wrong way when decrypting.
