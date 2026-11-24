---
title: "Cambridge IGCSE Computer Science (0478): Digital currency -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge IGCSE Computer Science 0478 section 5.2: digital currency, digital wallets, blockchain blocks, the hash link and why the ledger cannot be altered."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---
Condensed notes for syllabus section 5.2, Digital currency: the idea of a currency that only exists electronically, and the blockchain ledger used to track its transactions.

## Four facts to start with

1. A **digital currency** only exists electronically.
2. It is used to buy goods and services, send money, and as an investment.
3. A **blockchain** is a digital ledger: a time-stamped series of records that cannot be altered.
4. Each block stores the **hash of the previous block**, so the blocks form a chain.

## Key terms

| Term | Definition |
|---|---|
| Digital currency | Currency that only exists electronically |
| Cryptocurrency | Digital currency that uses encryption to secure its records |
| Digital wallet | Software or service that holds a user's access keys and shows their balance |
| Ledger | A record of transactions |
| Blockchain | Digital ledger of time-stamped records, grouped in blocks joined in a chain |
| Block | A group of transactions with a time stamp and hash |
| Hash | Fixed-length code worked out from data; changes completely if the data changes |
| Time stamp | The date and time at which a record was made |
| Network | The group of computers that each hold a copy of the blockchain and check transactions |

## Digital currency at a glance

| Point | Detail |
|---|---|
| Form | Electronic records only; no coins or notes |
| Uses | Pay for goods and services; send money abroad; investment; store value in a wallet |
| Benefits | Can be sent worldwide; no physical cash; transactions recorded |
| Drawbacks | Value changes quickly; not accepted everywhere; lost keys can mean lost money; theft and scams |

## Inside a block

| Item | Purpose |
|---|---|
| Transaction data | Who paid whom, how much |
| Time stamp | When it happened |
| Hash of this block | Fingerprint of the block |
| Hash of previous block | Chain link |

## Seven steps of a transaction

1. User requests a transaction from their wallet.
2. It is sent to a network of computers.
3. The computers check it is valid.
4. It is grouped with others into a block with a time stamp.
5. The block gets its hash and the previous block's hash.
6. The block is added to the end of the chain; every copy is updated.
7. The transaction is complete and visible in the ledger.

## Why the ledger cannot be altered

- Changing a block changes its hash.
- The next block holds the **old** hash, so the mismatch shows the change.
- A cheat would have to recalculate every later block.
- Many computers hold copies, so a cheat would have to change most of them at once.

## Worked example: spotting tampering

A chain has three blocks. Block 2 stores the hash `4F2A` of block 1. Someone changes a payment in block 1, and the hash of block 1 now works out as `9C71`. Block 2 still says `4F2A`. The mismatch shows that block 1 has been altered, and the other copies of the chain would still show the original block 1.

## Cash, bank money and digital currency

| | Cash | Bank balance | Digital currency |
|---|---|---|---|
| Physical | Yes | No | No |
| Record kept by | Nobody | The bank | The blockchain on many computers |
| Sent abroad | Carried or exchanged | Through banks | Over the internet |
| Main risk | Loss, theft | Fraud, hacking | Value changes, lost keys, wallet theft |

## Model answer to learn: describe how a transaction is recorded

A transaction is requested from a digital wallet and sent to a network of computers. They check it is valid. It is grouped with others into a block, time-stamped, given a hash and the hash of the previous block, and added to the end of the chain. All copies of the blockchain are updated.

## Exam traps

- **Digital currency is bank balance on a card.** It must only exist electronically.
- **Blockchain stored in one place.** It is stored on many computers.
- **"It is encrypted so it cannot be changed."** Use hash link and copies.
- **A block as one payment.** A block groups transactions.
- **Forgetting the time stamp.**
- **Hash as encryption.** A hash is a fingerprint, not a coded message.

## Self-test

1. What is meant by a digital currency?
2. Give two uses of a digital currency.
3. What is a digital wallet?
4. State two disadvantages of a digital currency.
5. What is a blockchain?
6. Give three items stored in a block.
7. What does the hash of the previous block do?
8. What happens to a block's hash if its data is changed?
9. Why is it hard to cheat by changing a block?
10. Where is a copy of a blockchain stored?

**Answers**

1. A currency that only exists electronically.
2. Any two: buying goods and services, sending money, investment, storing value.
3. Software or a service that holds the user's access keys and shows their balance.
4. Any two: value changes quickly, not accepted everywhere, lost keys mean lost money, theft or scams.
5. A digital ledger: a time-stamped series of records that cannot be altered.
6. Any three: transaction data, time stamp, its own hash, the previous block's hash.
7. It links the block to the one before it, forming a chain.
8. It changes completely.
9. The change breaks the hash link to the next block, and other computers hold the original copies.
10. On many computers in the network.

## Command words to expect

| Command word | What to write |
|---|---|
| State, Give, Identify | A short answer with no explanation |
| Define | A precise meaning |
| Describe | The main points or characteristics, or the steps in order |
| Explain | A reason or "how and why", supported with evidence from the question |
| Compare | Similarities and differences, naming both sides every time |
| Suggest | A sensible proposal that applies your knowledge to the situation given |
| Evaluate | A judgement based on advantages and disadvantages, ending with a conclusion |

## More on this topic

Read the full explanations in the [Digital currency study guide](/resources/cambridge-igcse-computer-science-0478-digital-currency/), then try the [Digital currency practice questions](/resources/cambridge-igcse-computer-science-0478-digital-currency-practice/).

## Official syllabus

Cambridge IGCSE Computer Science (0478) syllabus for 2026, 2027 and 2028, section 5.2:
[official syllabus PDF](https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf).
