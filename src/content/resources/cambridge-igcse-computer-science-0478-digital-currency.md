---
title: "Cambridge IGCSE Computer Science (0478): Digital currency"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 5: The internet and its uses"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 5.2
syllabusTopics:
  - qualification: "igcse"
    topic: "the-internet-and-its-uses"
  - qualification: "igcse"
    topic: "the-internet-and-its-uses"
    subtopic: "digital-currency-0478"
description: "Study guide to Cambridge IGCSE Computer Science 0478 section 5.2: what a digital currency is, how it is used, and how blockchain works as a time-stamped digital ledger that cannot be altered."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
Section 5.2 of the Cambridge IGCSE Computer Science 0478 syllabus has two content statements. You must **understand the concept of a digital currency and how digital currencies are used**, and you must **understand the process of blockchain and how it is used to track digital currency transactions**. The syllabus defines a digital currency as one that **only exists electronically**, and describes blockchain, in its basic form, as a **digital ledger: a time-stamped series of records that cannot be altered**.

This guide explains both ideas with a worked example you can follow step by step.

## What is a digital currency?

Money in the form of coins and banknotes is physical. A **digital currency** has no physical form. It exists only as electronic records on computers. You cannot hold it in your hand.

Many people use digital money already. A balance in a bank account is shown on a screen, not held in a drawer. The difference with a digital currency is that it is normally created and tracked electronically from the start, and it is often not controlled by one bank or government. Many digital currencies are called **cryptocurrencies** because they use encryption to secure the records.

### How digital currencies are used

- **Buying goods and services** from businesses that accept them, online or in shops.
- **Sending money to another person**, including in another country, without handing over cash.
- **Investing**: people buy digital currency hoping its value will rise. Its value can rise and fall quickly.
- **Storing value** in a **digital wallet**, which is software or a service that holds the user's access keys and shows their balance.

### Advantages and disadvantages

| Advantages | Disadvantages |
|---|---|
| Can be sent anywhere in the world over the internet, often quickly | The value can change very quickly, so people can lose money |
| No physical cash to carry, lose or steal | Not accepted everywhere |
| Transactions are recorded and checked using a blockchain | If the access key is lost, the money may be lost for good |
| Can reduce the need for a bank to pass on a payment | Criminals can try to steal wallets or trick users into sending money |

## Blockchain

A **blockchain** is a **digital ledger**. A ledger is a record of transactions, like an accountant's book. A blockchain is:

- **digital**: it is stored electronically;
- **time-stamped**: every record is marked with the date and time;
- **a series of records**: transactions are collected into groups called **blocks**, and the blocks are joined in a chain;
- **unalterable**: once something is recorded, it cannot be changed without detection.

### What is in a block?

Each block usually holds:

| Item | Purpose |
|---|---|
| Transaction data | Who paid whom, and how much |
| Time stamp | When the block was created |
| Hash of the block | A code worked out from the block's contents, like a fingerprint |
| Hash of the previous block | Links this block to the one before it |

A **hash** is a fixed-length code produced from data by a mathematical function. If even one character in the data changes, the hash changes completely. That is why a hash works like a fingerprint for a block.

### Why it cannot be altered

Each block contains the hash of the block before it. This creates a chain.

Suppose someone changes a transaction in block 3 of a chain of 6 blocks.

1. The contents of block 3 change, so its hash changes.
2. Block 4 still holds the **old** hash of block 3, so the link between 3 and 4 is broken.
3. To hide the change, the cheat would have to recalculate the hash for block 3, then block 4, then 5, then 6.
4. The blockchain is also not stored in one place. **Copies are held on many computers** in a network. The cheat would have to change most of the copies at the same time.

This is why the record is described as one that **cannot be altered**: it is not impossible to type a change, but the change is detected, and the other copies would show the original records.

### The process of a transaction

1. A user **requests a transaction**, for example sending 5 units of currency to a friend, using their digital wallet.
2. The transaction is sent to a **network of computers**.
3. The computers **check that it is valid**, for example that the sender has enough currency.
4. The valid transaction is **grouped with others into a new block**, and given a time stamp.
5. The block is given its hash and the hash of the previous block.
6. The new block is **added to the end of the chain**, and every computer in the network updates its copy.
7. The transaction is **complete** and appears in the ledger for anyone on the network to check.

### Worked example: tracking balances in a ledger

The ledger below starts with these balances: Ana 20 units, Ben 10 units, Chen 5 units.

| Block | Transaction |
|---|---|
| 1 | Ana pays Ben 8 |
| 2 | Ben pays Chen 12 |
| 3 | Chen pays Ana 4 |

Work out each person's balance after block 3.

1. After block 1: Ana 20 − 8 = 12; Ben 10 + 8 = 18; Chen 5.
2. After block 2: Ben 18 − 12 = 6; Chen 5 + 12 = 17; Ana 12.
3. After block 3: Chen 17 − 4 = 13; Ana 12 + 4 = 16; Ben 6.

Final balances: Ana 16, Ben 6, Chen 13. The total is 35, the same as at the start (20 + 10 + 5), so no units were created or lost.

Because every block is in the chain, anyone checking the ledger can add the transactions up and find the same balances. If Ben claimed block 2 never happened, the chain would show that it did.

Now suppose someone alters block 1 to say "Ana pays Ben 2". Block 1's hash changes. Block 2 holds the old hash of block 1, so the mismatch shows the chain has been tampered with.

## Annotated model answer

**Question:** Explain how a blockchain helps to keep a record of digital currency transactions secure. [4]

> A blockchain is a time-stamped digital ledger of transactions held in blocks [1]. Each block contains the hash of the previous block, which links the blocks in a chain [1]. If a transaction in one block is altered, the hash of that block changes and no longer matches the hash stored in the next block, so the change is detected [1]. Copies of the blockchain are stored on many computers, so a cheat would have to alter all of them [1].

**Why it scores 4:** each sentence is a separate security point (ledger structure, the hash link, detection of alteration, many copies). Writing "it is encrypted so it is safe" would earn no mark because it does not explain how the chain works.

## Common mistakes

- Saying a digital currency is "any money you pay by card". A digital currency only exists electronically and is separate from cash held in a bank.
- Saying a blockchain cannot be changed "because it is locked". Explain the hash link and the many copies.
- Writing that a blockchain is stored on one central computer.
- Describing a block as a single transaction. A block normally holds a group of transactions.
- Mixing up hash and encryption. A hash is a fingerprint of data, not a message to be decoded.
- Saying digital currency is always safe or always rises in value.
- Missing the **time-stamped** feature when defining a blockchain.

## Exam technique

- **Understand the concept of a digital currency**: say it only exists electronically, then give a use.
- **Describe blockchain**: digital ledger, time-stamped series of records, cannot be altered.
- **Explain why it cannot be altered**: hash of previous block, change detected, many copies.
- **Use an example**: a transaction between two named people helps you keep the steps in order.

## Practise this sub-topic

Use the [Digital currency revision notes](/resources/cambridge-igcse-computer-science-0478-digital-currency-revision-notes/) for quick recall and the [Digital currency practice questions](/resources/cambridge-igcse-computer-science-0478-digital-currency-practice/) to test yourself.

## Official syllabus

Cambridge IGCSE Computer Science (0478) syllabus for 2026, 2027 and 2028, section 5.2 Digital currency:
[official syllabus PDF](https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf).
