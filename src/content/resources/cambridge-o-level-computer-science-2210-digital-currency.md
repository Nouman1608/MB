---
title: "Cambridge O Level Computer Science (2210): Digital currency"
seoTitle: "Cambridge O Level CS 2210 Digital Currency Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 5 – The internet and its uses"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 5.2
syllabusTopics:
  - qualification: "o-level"
    topic: "the-internet-and-its-uses-2210"
  - qualification: "o-level"
    topic: "the-internet-and-its-uses-2210"
    subtopic: "digital-currency-2210"
description: "Study guide to Cambridge O Level Computer Science 2210 section 5.2: what a digital currency is, how it is used, and how blockchain works as a digital ledger of time-stamped records that cannot be altered."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Section 5.2 of Cambridge O Level Computer Science 2210 is short but it is examined precisely. It has two learning statements. Candidates should understand the **concept of a digital currency** and how digital currencies are used, and they should understand the **process of blockchain** and how it is used to track digital currency transactions. The guidance defines a digital currency as one that "only exists electronically", and blockchain, "in its basic form", as a **digital ledger**, that is "a time-stamped series of records that cannot be altered".

This guide builds both ideas from the beginning and uses a small worked example so that you can explain how a blockchain protects a record.

## Part 1: what is a digital currency?

Money in the form of notes and coins is physical. A **digital currency** is money that **only exists electronically**. There are no notes or coins. It exists as entries in computer systems and is held and moved using computers, phones and the internet.

Some features that are common to digital currencies:

- They are held in a **digital wallet**, which is software or an online account that stores the details needed to spend the currency.
- They are exchanged using the **internet**. A payment is a message from one wallet to another.
- Many (such as cryptocurrencies) are not controlled by a single bank or government. Their records are shared across many computers.
- They can be **exchanged for traditional currency** at an exchange, where there is one available.

Online bank balances are also electronic, but they are held by a bank in a traditional currency. In the syllabus, a digital currency is the currency itself existing only in electronic form.

## Part 2: how digital currencies are used

People use digital currency to:

- **buy goods and services** from businesses that accept it, online or in shops;
- **transfer money** directly to another person, including to someone in another country;
- **store value** or **invest**, in the hope that the value will rise;
- **pay for in-game or in-platform items** in some online services.

### Advantages

- Payments can be quick, including between countries.
- Fees can be lower than for some traditional transfers.
- The user does not need to carry cash.
- Where the record is shared (see blockchain below), it is difficult to change past transactions.

### Disadvantages

- The **value can change a lot** in a short time, so savings can fall quickly.
- If the owner **loses the wallet password or key**, the money may be impossible to recover.
- Wallets and exchanges can be **hacked**.
- A payment sent by mistake is often **hard or impossible to reverse**.
- It is **not accepted** by every business.
- Its anonymity can make it attractive for crime.

## Part 3: the problem that blockchain solves

If a currency has no physical form, what stops someone from copying a digital coin and spending it twice, or changing a record to say they have more money? Traditional systems solve this with a bank that keeps the official record. A digital currency without a central bank needs another way to keep one trusted record of who paid whom. **Blockchain** is that way.

## Part 4: blockchain

A **ledger** is a record of transactions. A **blockchain**, in its basic form, is a **digital ledger**: a **time-stamped series of records that cannot be altered**.

### Blocks and the chain

The ledger is split into **blocks**. A block holds:

- a group of **transactions** (for example, "Asha pays Ben 5 coins");
- a **time stamp** that shows when the block was created;
- a **hash**: a value calculated from the contents of the block, which works like a fingerprint;
- the **hash of the previous block**.

Because each block contains the hash of the block before it, the blocks form a **chain**. A new block is always added to the end.

### How the record cannot be altered

If someone changes any data in an old block, the hash calculated from that block changes. But the next block still contains the old hash. The two no longer match, which shows that something has been altered, and the chain after it is broken.

Another protection: the blockchain is not stored in one place. **Copies are held by many computers** in the network. A change on one copy would not match the other copies, so it would be rejected.

### A toy example

Real blockchains use strong hash functions. For this illustration, the "hash" is simply the sum of the character codes of the block's text, kept to three digits. It is only for showing the idea.

| Block | Transaction | Previous hash | Block hash |
|---|---|---|---|
| 1 | Asha pays Ben 5 | 000 | 693 |
| 2 | Ben pays Chen 2 | 693 | 710 |
| 3 | Chen pays Dara 1 | 710 | 799 |

Now a cheat changes block 1 to "Asha pays Ben 50". The hash of block 1 is recalculated and becomes 741, not 693. But block 2 still stores 693 as the previous hash. The numbers do not match, so everyone can see that block 1 was changed. To hide it, the cheat would have to recalculate block 2, then block 3, and every later block, and do it on most of the copies at the same time. That is why the record is treated as unalterable.

### How blockchain is used to track digital currency

When a payment is made:

1. The payment is sent to the network as a transaction.
2. The transaction is checked, for example to confirm the payer has enough currency.
3. It is added, with other transactions, to a **new block**, which is time-stamped.
4. The block is joined to the **end of the chain** and the copies are updated.
5. The payment is now a permanent part of the shared ledger.

Anyone can follow the chain to see where a coin came from, which tracks every transaction in the currency. The ledger shows wallet identifiers, not names, so the records can be traced without necessarily showing who owns each wallet.

## Worked example

**Question:** Explain how a blockchain helps to prevent a digital currency transaction from being changed after it has been recorded. [4]

> Each transaction is stored in a block with a time stamp [1]. Each block contains a hash of the block before it, so the blocks are linked in a chain [1]. If the data in an earlier block is changed, its hash changes and no longer matches the hash stored in the next block, so the change is detected [1]. Copies of the blockchain are held on many computers, so an altered copy would not match the others [1].

## Common mistakes

- **Calling a bank balance a digital currency.** A digital currency only exists electronically and is its own currency.
- **Saying blockchain "encrypts" the data.** Its main protection is the chain of hashes, not secrecy.
- **Saying a blockchain "cannot be hacked".** The syllabus says the records cannot be altered; keep to that wording.
- **Forgetting the time stamp.** Time-stamped is part of the definition.
- **Thinking the ledger is kept by one company.** The copies are shared across many computers.
- **Treating a blockchain as the currency.** It is the ledger that tracks the currency.

## Exam technique

- **Define a digital currency:** "a currency that only exists electronically".
- **Define blockchain:** a digital ledger; a time-stamped series of records; cannot be altered.
- **Explain tracking transactions:** transactions go into blocks, blocks are linked into a chain, the chain is the record of every transaction.
- **Give a balanced answer** when asked about benefits and drawbacks of using digital currency.

## Quick check

1. What does it mean to say a currency "only exists electronically"? *It has no physical notes or coins.*
2. What is a ledger? *A record of transactions.*
3. Give two things stored in a block. *Transactions and a time stamp (also the hash of the block and the previous hash).*
4. What happens if an earlier block is changed? *Its hash changes and no longer matches the next block.*
5. Give one risk of using a digital currency. *The value can change quickly; the wallet may be hacked; lost keys cannot be recovered.*

## Continue with

Revise with the [Digital currency revision notes](/resources/cambridge-o-level-computer-science-2210-digital-currency-revision-notes/) and practise with the [Digital currency practice questions](/resources/cambridge-o-level-computer-science-2210-digital-currency-practice/).
