---
title: "Cambridge O Level Computer Science (2210): Encryption"
resourceType: "study-guides"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 2 – Data transmission"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 2.3
syllabusTopics:
  - qualification: "o-level"
    topic: "data-transmission-2210"
    subtopic: "encryption"
description: "Study guide to Cambridge O Level Computer Science 2210 section 2.3: why data is encrypted in transmission, and how symmetric and asymmetric keys are used."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

The encryption content in Cambridge O Level Computer Science 2210 is section 2.3. It has two learning statements: candidates should "understand the need for and purpose of encryption when transmitting data", and "understand how data is encrypted using symmetric and asymmetric encryption". The guidance adds that asymmetric encryption "includes the use of public and private keys".

That is all the syllabus asks, but questions on it are exacting: they test whether you can say **which key** is used at each step, **who** holds it and **why** the method protects the data. This guide builds those answers piece by piece. For how encryption fits with packets and error detection, see the [Data Transmission study guide](/resources/o-level-cambridge-computer-science-data-transmission/).

## Part 1: the need for encryption

Think about the journey of a message from a phone to a bank's server. It travels over the phone's Wi-Fi, through a home router, across the internet service provider's equipment, and through several more routers before it reaches the bank. At every point, someone with the right equipment could **intercept** (copy) the packets.

Encryption cannot stop that. What it does is make the copied data **unreadable**. The purpose of encryption is therefore:

- to keep data **confidential** while it is transmitted;
- so that **only the intended recipient**, who holds the right key, can understand it;
- so that anyone who intercepts it gets data that is meaningless to them.

Exam questions often present a scenario and ask why encryption is needed. Link the answer to the data in the scenario: login details could be used to access an account; medical records are private; exam papers must not be seen early.

## Part 2: the language of encryption

Before the methods, fix the words.

- The original, readable data is the **plaintext**.
- The encrypted, unreadable result is the **ciphertext**.
- The **encryption algorithm** is the set of steps that scrambles the data.
- The **key** is the value the algorithm uses. Change the key and the same plaintext gives different ciphertext.
- **Decryption** reverses the process to recover the plaintext.

Because algorithms are often public, everything depends on keeping the right key secret.

## Part 3: symmetric encryption

**Definition:** one key, shared by sender and receiver, is used both to encrypt and to decrypt.

### Illustration: a PIN sent with a digit key

This is a classroom illustration, not a real network cipher. The algorithm is "add the key to each digit, keeping only the last digit of the answer". The key is **7**.

| Plaintext digit | 4 | 8 | 1 | 5 |
|---|---|---|---|---|
| Add 7 | 11 | 15 | 8 | 12 |
| Ciphertext digit | 1 | 5 | 8 | 2 |

The PIN 4815 is sent as 1582. The receiver, who also holds the key 7, subtracts 7 from each digit (borrowing 10 where needed) and recovers 4815.

### The problem symmetric encryption creates

Both people need the key **before** any protected message can be sent. If the sender emails the key, or sends it in an unencrypted message, an interceptor can copy it. From then on every message encrypted with that key can be decrypted by the interceptor. This is the **key distribution** problem: how to share a secret key without exposing it.

Symmetric encryption remains useful because it is simple and fast, which matters when large amounts of data are protected and the key has already been shared safely.

## Part 4: asymmetric encryption

**Definition:** two keys are used, a **public key** and a **private key**. They are created together as a matching pair and are mathematically linked.

| Key | Who has it | What it does |
|---|---|---|
| Public key | Anyone; it can be published or sent openly | Encrypts data that is to be sent to the key's owner |
| Private key | Only the owner; never sent to anyone | Decrypts data that was encrypted with the matching public key |

### Step by step: a client sending a contract to a law firm

1. The law firm creates its key pair.
2. The law firm sends its public key to the client. It does not matter who else sees it.
3. The client encrypts the contract with **the law firm's public key**.
4. The ciphertext is sent across the internet.
5. The law firm decrypts it with **its own private key**.

Anyone who intercepts the contract and also has the public key still cannot decrypt it, because a public key cannot reverse its own encryption. Only the private key can, and it has never left the law firm. That is how asymmetric encryption solves the key distribution problem.

### Replies need a second key pair

If the law firm wants to reply confidentially, it must use **the client's public key**, and the client decrypts with **the client's private key**. Each person who receives confidential messages needs their own key pair.

## Part 5: putting the two side by side

| Question an examiner might ask | Symmetric | Asymmetric |
|---|---|---|
| How many keys? | One | Two, a linked pair |
| Which key encrypts? | The shared key | The receiver's public key |
| Which key decrypts? | The same shared key | The receiver's private key |
| Does a secret key cross the network? | Yes, it must be shared first | No, only the public key is shared |
| Main advantage | Fast and simple | No secret key has to be transmitted |
| Main disadvantage | Key can be intercepted while being shared | Slower and more complex |

## Annotated model answer

**Question:** A college sends exam results to students by email. Explain why the college should encrypt the results and why asymmetric encryption is a suitable method. [4]

> The results are personal data, and an email can be intercepted on its way to the student [1]; encryption makes the intercepted results meaningless to anyone without the key, so they stay confidential [1]. With asymmetric encryption the college encrypts each student's results using that student's public key [1], and only the student's private key, which is never transmitted, can decrypt them, so no secret key has to be sent to the student [1].

**Examiner's view:** the first two marks come from the **need and purpose**, tied to the scenario; the last two come from the **mechanism**, with each key given an owner.

## Common mistakes

- **"Encryption prevents interception."** Interception still happens; the data is meaningless.
- **Using the sender's private key to keep a message secret.** To send a confidential message, use the receiver's public key.
- **"The public key decrypts."** It only encrypts in this context.
- **Transmitting the private key.** Never.
- **Confusing encryption with error detection.** A checksum detects changes; encryption hides meaning.
- **One key pair for a two-way conversation.** Each receiver needs their own pair.

## Exam technique

- **Explain the need for encryption**: interception is possible; encryption makes the data meaningless; link to the sensitivity of the data in the scenario.
- **Describe symmetric encryption**: same key, shared in advance, encrypts and decrypts.
- **Describe asymmetric encryption**: pair of keys; public shared, encrypts; private kept, decrypts; name the owner each time.
- **Compare**: one advantage and one disadvantage of each, linked to key sharing and speed.

## Quick check

1. What happens to intercepted ciphertext if the interceptor has no key? *It cannot be understood.*
2. Decrypt the digit ciphertext 0369 sent with the add-7 key. *3692 (0−7 → 3, 3−7 → 6, 6−7 → 9, 9−7 → 2).*
3. A shop wants customers to send it card details. Whose key pair is used? *The shop's: customers encrypt with the shop's public key; the shop decrypts with its private key.*
4. Why is it safe to publish a public key? *It cannot decrypt data encrypted with it.*

## Continue with

Revise with the [Encryption revision notes](/resources/cambridge-o-level-computer-science-2210-encryption-revision-notes/) and practise with the [Encryption practice questions](/resources/cambridge-o-level-computer-science-2210-encryption-practice/).
