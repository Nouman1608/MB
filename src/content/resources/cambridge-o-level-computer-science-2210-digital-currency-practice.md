---
title: "Cambridge O Level Computer Science (2210): Digital currency -- Practice Questions"
seoTitle: "Cambridge O Level CS 2210 Digital Currency Questions"
resourceType: "practice-questions"
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
description: "Original questions with answers on Cambridge O Level Computer Science 2210 section 5.2: digital currency, its uses and drawbacks, and how a blockchain records transactions."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Digital currency study guide](/resources/cambridge-o-level-computer-science-2210-digital-currency/) and [Digital currency revision notes](/resources/cambridge-o-level-computer-science-2210-digital-currency-revision-notes/)

---

## Section A

**1.** State what is meant by a digital currency. **[1]**

**2.** Give **one** way in which a digital currency can be used. **[1]**

**3.** State what is meant by a ledger. **[1]**

**4.** State what is meant by a blockchain, in its basic form. **[2]**

**5.** Give **two** items of data that are stored in a block of a blockchain. **[2]**

**6.** State the name given to a value calculated from the data in a block, which acts like a fingerprint. **[1]**

## Section B

**7.** Describe **two** advantages of paying for goods with a digital currency rather than cash. **[4]**

**8.** Describe **two** disadvantages of storing savings in a digital currency. **[4]**

**9.** A student says: "A digital currency is the same as the money in my bank account, because both are only on computers." Explain why the student's statement is not correct. **[2]**

**10.** A small blockchain has three blocks. Block 1 holds the transaction "Mia pays Noor 8" and a previous hash of 000. Block 2 holds "Noor pays Omar 3" and the hash of block 1. Block 3 holds "Omar pays Pia 1" and the hash of block 2.

**(a)** State what is stored in block 2 that links it to block 1. **[1]**

**(b)** Explain what happens to the hash of block 1 if someone changes "Mia pays Noor 8" to "Mia pays Noor 80". **[2]**

**(c)** Explain how this change would be detected. **[2]**

**11.** Explain why a copy of a blockchain held on one computer cannot easily be changed by a cheat. **[3]**

**12.** Describe how a new digital currency payment is added to a blockchain. **[4]**

**13.** Explain why a time stamp is stored in each block. **[2]**

**14.** A shop owner is deciding whether to accept a digital currency as payment.

**(a)** Give **two** benefits to the shop owner. **[2]**

**(b)** Give **two** risks to the shop owner. **[2]**

**15.** A student writes: "A blockchain stops anyone from reading a payment." Explain what is wrong with this statement and say what a blockchain does instead. **[3]**

---

## Answers

**1.** A currency that only exists electronically / has no physical notes or coins [1].

**2.** Any one: buying goods and services; sending money to other people; storing value or investing; paying for items in online services [1].

**3.** A record of transactions [1].

**4.** A digital ledger [1] that is a time-stamped series of records that cannot be altered [1].

**5.** Any two: transactions; a time stamp; the hash of the block; the hash of the previous block [1 each].

**6.** A hash [1].

**7.** Any two advantages, each with a development: payments can be made quickly, including to other countries [1], because there is no need to wait for a bank to move the money [1]; fees can be lower than card or bank transfers [1], so the shop or customer keeps more of the money [1]; no need to carry cash, so a payment can be made from a phone anywhere there is an internet connection [1] and it reduces the risk of cash being stolen [1]. Maximum 4.

**8.** Any two drawbacks, each with a development: the value can change quickly [1], so the savings could be worth much less when the owner wants to spend them [1]; if the password or key to the wallet is lost, the money may not be recoverable [1], because there is no bank to reset it [1]; the wallet or exchange could be hacked [1], and stolen currency is hard to get back [1]; payments are hard to reverse [1], so a mistake could lose the money [1]. Maximum 4.

**9.** A digital currency is a currency that only exists electronically [1]. The bank account holds money in a traditional currency, which also exists as notes and coins, and the bank keeps the record [1].

**10. (a)** The hash of block 1 (the previous hash) [1].
**(b)** The hash of block 1 changes [1] because the hash is calculated from the data in the block, and the data has changed [1].
**(c)** Block 2 still stores the old hash of block 1 [1]. The new hash of block 1 and the stored value no longer match, so the change is detected [1].

**11.** The blockchain is also copied on many other computers [1]. The cheat's altered copy would not match the others [1], and the cheat would have to change the hash in every later block on most of the copies at the same time [1].

**12.** The payment is sent to the network as a transaction [1]. The transaction is checked, for example to confirm the payer has enough currency [1]. It is stored in a new block that is time-stamped [1] and the block is added to the end of the chain, with the hash of the previous block [1]. (Accept: the copies of the ledger are updated.)

**13.** The time stamp records when the block was created [1], which puts the transactions in order and gives a record of when each payment happened [1].

**14. (a)** Any two: fast payment, including from customers in other countries; lower fees than some card payments; it may attract customers who want to use digital currency; no cash handling [1 each].
**(b)** Any two: the value of the currency may fall before the shop converts it; payments are hard to reverse, so a mistake or fraud cannot easily be put right; the shop's wallet could be hacked; the shop could lose access if the key is lost [1 each].

**15.** A blockchain does not hide the payment [1]. The records in a blockchain can be seen by the network [1]. What it does is keep a time-stamped record of transactions that cannot be altered, because each block is linked to the one before it by its hash [1].

---

## Where marks are usually lost

- Question 4: forgetting "time-stamped" or "cannot be altered".
- Question 7 and Question 8: stating a point but not developing it. The second mark is for the reason.
- Question 9: saying only that the two are different. State that a digital currency exists only electronically as its own currency.
- Question 10: saying that the hash "changes by itself". It changes because the data in the block changed.
- Question 11: saying the data is "locked" with no mention of copies or the chain.
- Question 12: describing only that "the block is added" with no check or time stamp.
- Question 14: giving benefits and risks for the customer, not the shop owner.
- Question 15: confusing a blockchain with encryption.

## Checking a blockchain answer

Trace the link in your answer: block, hash, next block holds that hash. If a change in an earlier block does not lead to a mismatch in the next block, the explanation is incomplete.
