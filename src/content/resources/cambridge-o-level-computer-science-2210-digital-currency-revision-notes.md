---
title: "Cambridge O Level Computer Science (2210): Digital currency -- Revision Notes"
seoTitle: "Cambridge O Level CS 2210 Digital Currency Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge O Level Computer Science 2210 section 5.2: digital currency, how it is used, blockchain as a time-stamped ledger that cannot be altered, and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed notes for syllabus section 5.2, Digital currency. For the full explanation and a worked example of a blockchain, use the [Digital currency study guide](/resources/cambridge-o-level-computer-science-2210-digital-currency/).

## Syllabus checklist

- The concept of a digital currency and how digital currencies are used.
- The process of blockchain and how it is used to track digital currency transactions.

## The two definitions to learn word for word

- **Digital currency:** a currency that only exists electronically.
- **Blockchain (in its basic form):** a digital ledger, that is, a time-stamped series of records that cannot be altered.

## Key terms

| Term | Definition |
|---|---|
| Digital currency | Money that exists only electronically, with no notes or coins |
| Digital wallet | Software or an account that stores what is needed to spend a digital currency |
| Ledger | A record of transactions |
| Blockchain | A digital ledger: a time-stamped series of records that cannot be altered |
| Block | A group of transactions with a time stamp and hash values |
| Hash | A value calculated from the contents of a block, like a fingerprint |
| Time stamp | The date and time when a block was created |
| Transaction | A payment from one wallet to another |

## How digital currencies are used

- Buying goods and services online or in shops that accept them.
- Sending money to other people, including abroad.
- Storing value or investing.
- Paying for items in some online services.

### Benefits and drawbacks

| Benefits | Drawbacks |
|---|---|
| Fast payments, including international ones | Value can change quickly |
| Fees can be lower | Lost passwords or keys can mean lost money |
| No need to carry cash | Wallets and exchanges can be hacked |
| Past records are very hard to alter | Payments are hard to reverse |
| Can be used without a bank account | Not accepted by every business |

## Blockchain: the structure

A block contains:

1. a group of **transactions**;
2. a **time stamp**;
3. its own **hash**;
4. the **hash of the previous block**.

Blocks are linked **in order** into a chain. A new block is always added at the **end**. **Copies** of the chain are held on **many computers**.

## Why the records cannot be altered

1. Change any data in an old block.
2. Its hash changes.
3. The next block still holds the old hash, so the two **no longer match**.
4. The change is detected, and the chain from that point is broken.
5. The other copies of the blockchain still hold the original record, so the altered copy is rejected.

To succeed, a cheat would have to alter that block and **every later block** on **most** of the copies at once.

## How a payment is tracked

1. A payment is sent as a transaction.
2. The transaction is checked.
3. It is added to a new, time-stamped block.
4. The block is added to the end of the chain.
5. The copies of the ledger are updated.

The chain then holds a complete history of every transaction in the currency.

## Answer templates

**Describe what is meant by a digital currency (2 marks):** a currency that only exists electronically; no physical notes or coins; it is spent using the internet.

**Describe what is meant by blockchain (3 marks):** a digital ledger; a time-stamped series of records; that cannot be altered.

**Explain how blockchain tracks transactions (4 marks):** each transaction is recorded in a block; the block is time-stamped; blocks are linked into a chain by storing the previous block's hash; the chain is a record of every transaction.

**Discuss using digital currency (4 marks):** one benefit with reason (such as fast international payments); one drawback with reason (such as a changing value or hacking); apply to the scenario.

## Exam traps

- **"A digital currency is money in a bank account".** It must exist only electronically as its own currency.
- **"Blockchain is the currency".** It is the ledger that records the currency's transactions.
- **"Blockchain is encrypted so cannot be seen".** The protection is the linked hashes and shared copies.
- **Leaving out "time-stamped".** It is part of the definition.
- **"Blockchain is stored by one bank".** The copies are held on many computers.
- **Overclaiming "cannot be hacked".** Say that the records cannot be altered without being detected.

## Self-test

1. What is a digital currency?
2. Where is a digital currency stored by its owner?
3. Give two uses of digital currency.
4. Give two drawbacks of using digital currency.
5. What is a ledger?
6. What is blockchain, in its basic form?
7. State four items held in a block.
8. How are the blocks joined together?
9. What happens to the hash of a block if its data is changed?
10. Why is an altered block detected?
11. Why does holding copies on many computers help?
12. What is the effect of adding a new block to the end of the chain?

**Answers**

1. A currency that only exists electronically.
2. In a digital wallet.
3. Any two: buying goods and services; sending money to others; storing value or investing; paying for items in online services.
4. Any two: value changes quickly; lost passwords or keys; hacking; payments are hard to reverse; not accepted everywhere.
5. A record of transactions.
6. A digital ledger: a time-stamped series of records that cannot be altered.
7. Transactions; a time stamp; the block's hash; the hash of the previous block.
8. Each block stores the hash of the block before it.
9. It changes.
10. The changed hash no longer matches the previous hash stored in the next block.
11. A changed copy would not match the other copies, so it would be rejected.
12. The new transaction becomes a permanent, time-stamped part of the record.
