---
title: "Cambridge IGCSE Computer Science (0478): Digital currency -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original questions with full answers on Cambridge IGCSE Computer Science 0478 section 5.2: digital currency and blockchain."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs. Use these alongside the official past papers available from your board.

Related: [Digital currency study guide](/resources/cambridge-igcse-computer-science-0478-digital-currency/) and [Digital currency revision notes](/resources/cambridge-igcse-computer-science-0478-digital-currency-revision-notes/)

---

## Section A

**1.** State what is meant by a **digital currency**. **[1]**

**2.** State **two** ways in which a digital currency can be used. **[2]**

**3.** State what is meant by a **blockchain**. **[2]**

**4.** Name **two** items of data that a block in a blockchain holds. **[2]**

**5.** State what a digital wallet is used for. **[1]**

## Section B

**6.** Describe **two** advantages of using a digital currency instead of cash to pay a supplier in another country. **[4]**

**7.** Describe **two** risks of owning a digital currency. **[4]**

**8.** Describe the process by which a transaction is added to a blockchain. **[5]**

**9.** The ledger of a blockchain starts with these balances: Ria 30 units, Sam 12 units, Tom 8 units. Block 1 records: Ria pays Sam 10. Block 2 records: Sam pays Tom 15. Block 3 records: Tom pays Ria 6.

**(a)** Calculate the balance of each person after block 3. **[3]**

**(b)** Show that the total number of units is unchanged. **[1]**

**10.** Explain why the hash of the previous block is stored in each new block. **[2]**

**11.** A dishonest user changes a payment recorded in block 4 of a chain of 9 blocks. Explain what happens to the chain and why the change is likely to be noticed. **[4]**

**12.** A shop owner says: "Digital currency is exactly the same as the money in my bank account." Explain **one** way in which the statement could be considered correct and **one** way in which it is not. **[2]**

**13.** Evaluate whether a small online business should accept payment in a digital currency. **[4]**

---

## Answers

**1.** A currency that only exists electronically [1].

**2.** Any two from: buying goods and services; sending money to another person or country; investment; storing value in a digital wallet [1 each].

**3.** A digital ledger [1] that is a time-stamped series of records that cannot be altered [1].

**4.** Any two from: transaction data; time stamp; hash of the block; hash of the previous block [1 each].

**5.** To hold the user's access keys and show their balance, so they can send and receive the currency [1].

**6.** Any two developed advantages: it can be sent over the internet, so there is no physical cash to transport [1] and it can arrive quickly [1]; it avoids a bank passing on the payment, which can reduce delays and fees [1]; the transaction is recorded on the blockchain, giving a record that both sides can check [1]. Maximum 4.

**7.** Any two developed risks: the value can rise and fall quickly [1], so the owner could lose money [1]; if the access key for the wallet is lost, the currency may not be recoverable [1]; criminals may steal wallets or trick users into sending currency [1]; not all businesses accept it, so it may be hard to spend [1]. Maximum 4.

**8.** The user requests a transaction using their wallet [1]. The transaction is sent to a network of computers [1], which check that it is valid [1]. The valid transaction is grouped with others into a new block with a time stamp [1]. The block is given a hash and the hash of the previous block [1]. The block is added to the end of the chain and every copy is updated [1]. Maximum 5.

**9.** **(a)** After block 1: Ria 30 − 10 = 20, Sam 12 + 10 = 22, Tom 8. After block 2: Sam 22 − 15 = 7, Tom 8 + 15 = 23, Ria 20. After block 3: Tom 23 − 6 = 17, Ria 20 + 6 = 26, Sam 7. Final: Ria 26 [1], Sam 7 [1], Tom 17 [1].

**(b)** 26 + 7 + 17 = 50 and 30 + 12 + 8 = 50 [1].

**10.** It links each block to the previous one, forming a chain [1]. If an earlier block is altered, its hash changes and no longer matches the stored value, so the tampering is detected [1].

**11.** The contents of block 4 change, so the hash of block 4 changes [1]. Block 5 still holds the old hash of block 4, so the link no longer matches [1]. To hide the change the dishonest user would have to recalculate the hash for block 4 and every later block (5 to 9) [1]. The blockchain is also held on many computers, which would still hold the original block 4, so the difference is noticed [1].

**12.** Correct: both can be used to pay for goods and services, and a balance is shown on a screen [1]. Not correct: a digital currency only exists electronically and is recorded on a blockchain rather than being held by one bank, and its value can change quickly [1]. Accept any other valid difference.

**13.** Any four from: it may attract customers who prefer to pay with it [1]; payments can be received from other countries easily [1]; the value can fall quickly between sale and use, so the business could lose money [1]; many customers do not use it, so it may bring little extra trade [1]; the owner must keep the wallet keys secure, or the funds may be lost or stolen [1]. A judgement, for example that the business might accept it as an extra option while keeping standard methods [1]. Maximum 4.

---

## Where marks are usually lost

- Question 3: giving "a list of transactions" without time-stamped and cannot be altered.
- Question 6: describing the advantage in general ("it is better") without explaining why.
- Question 8: skipping the check by the network, or the step that adds the block to every copy.
- Question 9: updating only one person's balance in a block, so the total is wrong.
- Question 10: saying "so it is secure" without describing the link and the mismatch.
- Question 11: forgetting that the later blocks must also be recalculated, or that many copies exist.
- Question 13: describing only advantages.

## Quick reference for checking your answers

| Item | Key point |
|---|---|
| Digital currency | Only exists electronically |
| Blockchain | Digital ledger: time-stamped series of records that cannot be altered |
| Chain link | Each block holds the hash of the previous block |
| Protection | Change is detected; many copies exist |
