---
title: "Cambridge IGCSE Computer Science (0478): Encryption"
resourceType: "study-guides"
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
description: "Study guide to Cambridge IGCSE Computer Science 0478 section 2.3: why data is encrypted in transmission, and how symmetric and asymmetric encryption work."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 2.3 of the Cambridge IGCSE Computer Science 0478 syllabus is short: candidates should "understand the need for and purpose of encryption when transmitting data" and "understand how data is encrypted using symmetric and asymmetric encryption", with the guidance note that asymmetric encryption "includes the use of public and private keys". Because the content is small, the questions on it are precise. Examiners want to see that you know what each key does, who holds it, and why one method solves a problem the other cannot.

This guide goes deeper than the topic overview in the [Data Transmission study guide](/resources/igcse-computer-science-data-transmission/). It follows a message through each method step by step and shows how to turn that knowledge into full-mark answers.

## Why encryption is needed

Data sent across a network passes through cables, wireless links, switches and routers that the sender does not control. Section 2.1 showed that packets can take different routes; any of those routes could be monitored. Someone who intercepts the packets can read them unless they have been encrypted.

Encryption **does not stop data being intercepted**. It makes intercepted data **meaningless** to anyone who does not hold the correct key. This is the single most important sentence in the subtopic, because many candidates lose a mark by writing that encryption "prevents hacking" or "stops data being stolen".

The purpose of encryption is therefore to keep transmitted data **confidential**: only the intended recipient can turn it back into a readable form. Typical reasons to encrypt include:

- personal data such as addresses, dates of birth or medical records;
- payment details sent to an online shop;
- passwords and login details;
- confidential business documents sent between offices.

## The vocabulary you must use

| Term | Meaning |
|---|---|
| Plaintext | The original, readable data before encryption |
| Ciphertext | The scrambled data produced by encryption; unreadable without the key |
| Encryption algorithm | The method (set of steps) used to turn plaintext into ciphertext |
| Key | A value used by the algorithm; a different key gives a different ciphertext |
| Decryption | Turning ciphertext back into plaintext using the correct key |

The algorithm itself is usually publicly known. The security comes from the **key**. If an attacker knows the algorithm but not the key, the ciphertext is still useless to them.

## Symmetric encryption

In symmetric encryption **the same key is used to encrypt and to decrypt** the data.

1. The sender and the receiver both need a copy of the same secret key.
2. The sender uses the key and the encryption algorithm to turn the plaintext into ciphertext.
3. The ciphertext is transmitted.
4. The receiver uses the same key to decrypt the ciphertext back to plaintext.

The weakness is the **key itself**. Before any secure message can be sent, the key has to reach the receiver. If it is sent across the same network and intercepted, the attacker can decrypt every message encrypted with it. This is often called the key distribution problem: keeping the key secret while sharing it.

Symmetric encryption is still widely used because it is fast and simple to apply to large amounts of data.

## Asymmetric encryption

Asymmetric encryption uses **two different keys that are mathematically linked**, called a key pair.

- The **public key** can be given to anyone. It is used to encrypt data sent to the key's owner.
- The **private key** is kept secret by its owner and is never transmitted. It is the only key that can decrypt data that was encrypted with the matching public key.

The process for sending a confidential message to a person called Ravi is:

1. Ravi generates a public key and a private key.
2. Ravi sends his public key to the sender (or publishes it). It does not matter if it is intercepted.
3. The sender encrypts the plaintext using **Ravi's public key**.
4. The ciphertext is transmitted.
5. Ravi decrypts it using **his own private key**.

An interceptor may have the public key and the ciphertext, but the public key cannot decrypt what it encrypted. Without Ravi's private key the message stays unreadable. This removes the key distribution problem, because the key that must stay secret never leaves its owner.

The direction matters. To send a message **to** someone, you use **their** public key. If Ravi wants to reply confidentially, he needs the sender's public key, and the sender decrypts with their own private key.

## Worked example 1: a symmetric key in action

The ciphers used on real networks are far more complex, but a simple letter shift shows what a key does. Here the algorithm is "move each letter forward in the alphabet" and the key is **3**.

| Plaintext letter | S | E | N | D |
|---|---|---|---|---|
| Ciphertext letter (shift 3) | V | H | Q | G |

The plaintext SEND becomes the ciphertext VHQG. The receiver, who has been given the key 3, moves each letter back three places and recovers SEND. The same key has been used both ways, which is what makes it symmetric.

Now suppose the key 3 was sent in an unencrypted email and intercepted. The attacker can decrypt VHQG and every later message just as easily as the receiver. That is the key distribution problem in miniature. A different key, such as 7, would turn the same plaintext into different ciphertext, which shows why the key, not the algorithm, has to be kept secret.

## Worked example 2: an annotated model answer

**Question:** A hospital sends patient records to a laboratory over the internet using asymmetric encryption. Describe how the records are encrypted and decrypted. [4]

**Model answer:**

> The laboratory has a public key and a private key that are linked [1]. The laboratory's public key is given to the hospital [1]. The hospital encrypts the records with the laboratory's public key, turning them into ciphertext [1]. The laboratory decrypts the ciphertext using its own private key, which only it holds and which is never sent [1].

**Why it scores 4:** every key is named with its owner ("the laboratory's public key"). Weaker answers write "a public key encrypts it and a private key decrypts it", which leaves the examiner unsure whose keys they are and often earns only two marks.

## Comparing the two methods

| Feature | Symmetric | Asymmetric |
|---|---|---|
| Number of keys | One shared secret key | A linked pair: public and private |
| Key used to encrypt | The shared key | The receiver's public key |
| Key used to decrypt | The same shared key | The receiver's private key |
| Key that must be transmitted | The secret key, which is a risk | Only the public key, which is safe to share |
| Main weakness | If the key is intercepted, all messages can be read | More complex and slower to process |

A common pattern is a "discuss which method" question. A good answer states that asymmetric encryption is more secure for sending to a new recipient because no secret key has to be sent, while symmetric encryption is quicker for large volumes of data once both sides already share a key securely.

## Common mistakes

- **"Encryption stops data being intercepted."** It does not. Interception can still happen; the ciphertext is meaningless without the key.
- **"The private key encrypts the message to the receiver."** For confidentiality, the sender uses the receiver's public key; the receiver's private key decrypts.
- **Not saying whose key it is.** "The public key" on its own is vague. Write "the receiver's public key".
- **Sending the private key.** The private key never leaves its owner. If an answer has it transmitted, the method has been misunderstood.
- **Mixing encryption with error detection.** Parity checks and checksums (section 2.2) detect changes to data; encryption hides its meaning. Neither does the other's job.
- **Saying asymmetric encryption uses "two passwords".** The keys are values used by the encryption algorithm, not passwords typed by a user.

## Exam technique for the command words

- **State**: one precise fact. "State what is meant by ciphertext" needs only "data that has been encrypted and cannot be understood without the key".
- **Describe**: give the steps in order. For asymmetric encryption, cover key pair, sharing the public key, encrypting with it, decrypting with the private key.
- **Explain**: give a reason linked to the scenario. "Explain why the company uses asymmetric encryption" needs the idea that the private key never has to be sent, so it cannot be intercepted.
- **Identify**: name a method or key without description.

In scenario questions, use the names from the question. If a bank and a customer are involved, write "the bank's public key", not "key A".

## Check your understanding

1. What is the difference between plaintext and ciphertext? *Plaintext is readable data before encryption; ciphertext is the encrypted, unreadable form.*
2. Why does encryption not prevent interception? *The data can still be captured as it travels; encryption only makes the captured data meaningless without the key.*
3. In symmetric encryption, which key decrypts the data? *The same key that encrypted it.*
4. Using the shift-3 key, encrypt the word CAB. *FDE.*
5. Which key does a sender use to send a confidential message with asymmetric encryption? *The receiver's public key.*
6. Why is it safe for a public key to be intercepted? *It can only encrypt; it cannot decrypt data encrypted with it, so the matching private key is still needed.*

## Keep going

Condense this guide with the [Encryption revision notes](/resources/cambridge-igcse-computer-science-0478-encryption-revision-notes/), then test yourself with the [Encryption practice questions](/resources/cambridge-igcse-computer-science-0478-encryption-practice/), which include worked mark schemes for describe and explain questions.
