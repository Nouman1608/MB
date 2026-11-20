---
title: "Cambridge A Level Information Technology (9626): Digital currencies"
seoTitle: "A Level IT 9626 Digital Currencies: Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Topic 12 – IT in society"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 12.1
syllabusTopics:
  - qualification: "a-level"
    topic: "it-in-society"
  - qualification: "a-level"
    topic: "it-in-society"
    subtopic: "digital-currencies"
description: "Cambridge 9626 IT section 12.1 study guide: types of digital currency, centralised and decentralised systems, blockchain ledgers, and their impact and risks."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide teaches **section 12.1 Digital currencies** of Topic 12 IT in society in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is A Level content, examined in Paper 3 Advanced Theory. The [IT in society overview](/resources/a-level-cambridge-ict-it-in-society/) and its [revision notes](/resources/a-level-cambridge-ict-it-in-society-revision-notes/) cover the whole topic; this page goes deeper on digital currencies. Use it with the [digital currencies revision notes](/resources/cambridge-a-level-ict-9626-digital-currencies-revision-notes/) and the [digital currencies practice questions](/resources/cambridge-a-level-ict-9626-digital-currencies-practice/).

## What section 12.1 covers

| Syllabus strand | What you must be able to do |
|---|---|
| Types, characteristics and uses | Describe digital/electronic currency, virtual currency, cryptocurrency, central bank digital base money and stored value cards |
| Systems | Distinguish centralised systems (debit and credit cards, electronic point of sale) from decentralised systems (Bitcoin, Litecoin, peer-to-peer systems, mobile electronic wallets) |
| Blockchains | Explain blockchains as distributed ledgers for cryptocurrencies |
| Impact and risks | Discuss effects on individuals, businesses, governments and the global economy |
| Evaluation | Give advantages and disadvantages of different types |

A **digital currency** is money that exists only in electronic form. Nobody can hold a coin or a note. Value is recorded as data and moved by computer.

## Types of digital currency

**Digital (electronic) currency.** The value of a normal national currency, such as pounds or dollars, held in bank accounts and moved electronically. When you pay by card, no cash changes hands: numbers on two accounts change. The currency is still issued by the country and is legal tender.

**Virtual currency.** A currency created and controlled by a private company or community and used within a particular online world. In-game gold or gems are examples. It may not be exchangeable for real money, and the company can change its rules. It is not legal tender.

**Cryptocurrency.** A digital currency that uses cryptography to secure transactions and to control the creation of new units. Most are decentralised and recorded on a blockchain, with no bank or government in charge. Bitcoin and Litecoin are examples.

**Central bank digital base money.** A digital form of a country's legal tender, issued directly by the central bank. People or banks could hold it in a digital wallet. It has the stability of normal money, but it is under government control, so privacy concerns arise.

**Stored value card.** A card that holds a fixed amount of value paid in advance, such as a prepaid card, a gift card or a travel card. Spending reduces the stored value. It needs no bank account and is useful for budgeting or for children. Cards may be lost, may expire, and may charge fees.

## Centralised and decentralised systems

| | Centralised | Decentralised |
|---|---|---|
| Who controls it | A bank, card company or other central organisation | No single owner; rules are built into the software and agreed by users |
| Examples | Debit cards, credit cards, electronic point of sale (EPOS) | Bitcoin, Litecoin, peer-to-peer electronic monetary systems, mobile electronic wallets |
| Checking transactions | The central organisation approves each payment | The network of computers checks transactions together |
| If something goes wrong | The provider can refund, freeze or reverse payments | Transactions are usually final and cannot be reversed |
| Fees | Paid by the shop or customer to the provider | Paid to those who process the transaction, and vary with demand |

In an **EPOS** system, the terminal reads the card, sends the details to the card company, receives approval and records the sale. In a **mobile electronic wallet**, an app stores payment details or the keys needed to spend currency, so the user pays by holding a phone to a terminal or scanning a code.

## Blockchain as a distributed ledger

A **ledger** is a record of all transactions. In a centralised system, the bank keeps the ledger. A cryptocurrency instead uses a **distributed ledger** held as an identical copy on many computers (nodes) in the network. The structure is a **blockchain**.

1. New transactions are collected into a **block**.
2. Computers called miners (or verifying nodes) check that the transactions are valid, for example that the sender really owns the coins.
3. The block receives a **hash**, a fixed-length code calculated from its contents. Any change to the contents gives a completely different hash.
4. Each block stores the hash of the **block before it**, so the blocks are chained.
5. The network agrees (reaches **consensus**) on the next block, and every node adds it to its copy.

**Worked example 1: why altering a record fails.** Suppose a chain has blocks 1, 2, 3 and 4. A fraudster changes a payment in block 2.

1. Block 2's contents change, so its hash changes.
2. Block 3 holds the old hash of block 2, so it no longer matches. Block 3 is now invalid.
3. Block 3's hash would have to be recalculated, which in turn invalidates block 4, and so on.
4. The fraudster would also have to do this on most of the copies held by the network, faster than new blocks are added.

This makes the ledger very hard to alter and gives the user confidence without a bank. Transactions use **public key cryptography**: a user signs a payment with a private key, and others check the signature using the public key.

## Uses of digital currencies

- Everyday purchases in shops and online.
- Sending money abroad, often faster and cheaper than a bank transfer.
- Saving and investment, since people buy cryptocurrencies hoping to sell at a higher price.
- Payments for people with no bank account.
- Micropayments, such as paying a small amount to read an article.
- Controlled spending: stored value cards for pocket money or travel.

## Impact and risks

**On individuals.** Benefits: fast payments, convenience, access for people without bank accounts, and more control over their own money. Risks: volatile prices, theft by hackers, scams, losing the private key (and so the coins), and no protection if a payment is wrongly sent.

**Worked example 2: volatility.** A person buys 0.05 of a coin priced at £20,000 each, paying 0.05 × 20,000 = £1,000. Later the price falls by 30%, to £14,000. The holding is now worth 0.05 × 14,000 = £700, a loss of £300. Payment cards do not behave like this, because the value of the pound in the account does not swing by 30% in weeks.

**On businesses.** Benefits: possibly lower payment fees, new customers, fast international payments. Risks: price swings between the sale and conversion to local currency, accepting payments that cannot be reversed, regulatory uncertainty, and the cost of new systems and staff training.

**On governments.** Benefits: central bank digital money could cut cash handling costs, improve tracking of payments and tax collection, and speed up benefit payments. Risks: loss of control over the money supply when many people use cryptocurrencies, use of cryptocurrencies for money laundering, tax evasion or crime, difficulty in regulating a system without a single owner, and cyber attacks.

**On the global economy.** Benefits: cheaper cross-border payments and a more inclusive financial system. Risks: sudden price collapses that spread losses, uncertainty for investors, and the very large electricity use of some mining systems, which harms the environment.

## Advantages and disadvantages by type

| Type | Advantages | Disadvantages |
|---|---|---|
| Debit and credit cards (centralised) | Widely accepted; refunds and fraud protection; stable value | Fees; tied to a bank; the provider can see all spending |
| Stored value cards | No bank account needed; helps budgeting | Value is lost if the card is lost or expires; limited use |
| Central bank digital money | Stable value; government backed | Privacy concerns; may be used to track spending |
| Cryptocurrency | Fast and international; no central control; transactions are secure and traceable | Volatile; transactions cannot be reversed; complicated; energy use; used in crime |
| Virtual currency | Convenient inside its own platform | Limited use; the company controls the rules and value |
| Mobile wallets | Quick and convenient; no card to carry | Depends on the phone, battery and signal; theft if the phone is not protected |

## Common mistakes

- Using "digital currency" and "cryptocurrency" as if they mean the same. Cryptocurrency is one type of digital currency.
- Saying all digital currencies are decentralised. Card payments are centralised.
- Saying blockchain is "unhackable". It is very hard to alter, but wallets, exchanges and users can still be attacked.
- Forgetting that decentralised transactions are usually irreversible.
- Describing a blockchain without mentioning the link between blocks or the shared copies.
- Giving advantages and disadvantages without naming the type of currency they apply to.

## Exam technique

- **Describe** a type: say what it is, who issues it and how it is used.
- **Distinguish** centralised from decentralised: give who controls it and what follows from that.
- **Explain blockchain**: blocks, hashes, links, shared copies and consensus.
- **Discuss impact**: cover benefits and risks for each group named in the question.
- **Evaluate**: reach a judgement that fits the scenario, such as the customer's need for stability or speed.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 12 IT in society, section 12.1 Digital currencies.
