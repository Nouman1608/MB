---
title: "Cambridge A Level Information Technology (ICT): IT in society (9626) -- Revision Notes"
seoTitle: "9626 A Level IT: IT in Society Revision Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["a-levels"]
topic: "IT in society"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 12
syllabusTopics:
  - qualification: "a-level"
    topic: "it-in-society"
description: "Condensed revision notes on IT in society for Cambridge A Level IT 9626, with definition tables, data mining stages and a quick self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-06
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

For full explanations and worked examples, use the [IT in society study guide](/resources/a-level-cambridge-ict-it-in-society/). These notes condense **topic 12, IT in society** (sections 12.1–12.5) of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 3). It is **A Level only** content, and the syllabus states that Paper 3 (Advanced Theory) questions are based on sections 12–21. Paper 4 (Advanced Practical) candidates apply knowledge and understanding of all subject content.

Test yourself with the [practice questions](/resources/a-level-cambridge-ict-it-in-society-practice/), see the whole course on the [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/), tick outcomes off on the [9626 checklist](/checklists/cambridge/a-level/ict/), and check your gaps with a [free diagnostic](/diagnostics/).

## 12.1 Digital currencies

### Definitions

| Term | Recall it as |
|---|---|
| Digital/electronic currency | Money that exists and moves only electronically (umbrella term) |
| Virtual currency | Issued and controlled by its developers, used in one online community, largely unregulated |
| Cryptocurrency | Virtual currency secured by cryptography, recorded on a decentralised ledger |
| Central bank digital base money | Digital version of a country's official currency, issued and backed by the central bank |
| Stored value card | Value loaded in advance, spent down until topped up (prepaid, gift, transport cards) |

### Centralised vs decentralised

| | Centralised | Decentralised |
|---|---|---|
| Who checks transactions? | One authority (bank, card issuer) | A network of peers |
| Who keeps the record? | The authority's own database | Every node holds a copy of the ledger |
| Syllabus examples | Debit cards, credit cards, electronic point of sale | Bitcoin, Litecoin, peer-to-peer electronic monetary systems, mobile electronic wallets |
| Can a payment be reversed? | Often, through the bank | Usually not |

- **Debit card:** money leaves your own account. **Credit card:** you borrow from the issuer and repay later.
- **EPOS:** checkout terminal that records the sale, updates stock and passes the card payment for authorisation.
- **Mobile electronic wallet:** a phone app holding currency (or the keys to it) for direct payments.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-it-in-society--02-central-vs-decentral.webp" width="900" height="800" alt="Two panels. Centralised, for example a debit card payment: six customers connect to one bank, which keeps the one ledger and checks and records every payment. Decentralised, for example a Bitcoin payment: six computers are connected to each other, each holds a copy of the ledger, and there is no single authority." loading="lazy">
  <figcaption>A centralised system has one authority that checks and records every transaction; a decentralised one is checked by a network of computers.</figcaption>
</figure>


### Blockchain in steps

```
1. Transactions are grouped into a block
2. The block stores the hash of the previous block  -> chain
3. Nodes agree the block is valid (consensus)
4. The block is added to every copy of the ledger
5. Edit an old block -> its hash changes -> link breaks -> copy rejected
```

Key words to use: **distributed ledger**, **hash**, **nodes**, **consensus**, **append-only**, **transparent**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-it-in-society--01-blockchain-tamper.webp" width="900" height="900" alt="Two rows of four linked blocks. Each block stores the hash of the previous block, so the blocks form a chain. In the original chain every link matches. When block 2 is edited its hash changes, but block 3 still stores the old hash, so the link from block 2 to block 3 breaks. Below, the other nodes keep the original chain and the edited copy is rejected." loading="lazy">
  <figcaption>Changing an old block changes its hash, which no longer matches the hash stored in the next block, so the altered copy is rejected.</figcaption>
</figure>


### Impact and risks (one line each)

- **Individuals:** cheap, fast transfers and access without a bank account; but volatility, lost keys, irreversible payments, scams.
- **Businesses:** lower fees and new customers; but takings can lose value, unclear tax and regulation, hacking of wallets and exchanges.
- **Governments:** digital official money cuts cash costs and improves traceability; but pseudonymous currencies aid tax evasion and money laundering, and weaken control of the money supply.
- **Global economy:** cheaper cross-border payments; but bubbles and crashes can spread internationally.

## 12.2 Data mining

**Definition:** using software to search large data sets for previously unknown patterns, relationships and anomalies, to predict and support decisions.

### The six stages (learn the order)

| No. | Stage | Key action |
|---|---|---|
| 1 | Business understanding | Set the objective and success criteria |
| 2 | Data understanding | Collect, describe, explore, check quality |
| 3 | Data preparation | Select, clean, combine, format |
| 4 | Data modelling | Apply techniques (classification, clustering, association) to build a model |
| 5 | Evaluation | Does the model meet the objective? If not, go back |
| 6 | Deployment | Use the results in reports or live systems; monitor |

Memory hook: **B**usiness, **D**ata, **D**ata, **M**odel, **E**valuate, **D**eploy -- two "data" stages: first **understand**, then **prepare**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-it-in-society--03-data-mining-stages.webp" width="900" height="964" alt="Six numbered stages in order: 1 Business understanding (set the objective), 2 Data understanding (collect, explore, check quality), 3 Data preparation (select, clean, combine, format), 4 Data modelling (classification, clustering, association rules), 5 Evaluation (accurate? meets the objective?), 6 Deployment (use the results, then monitor). A dashed arrow runs from Evaluation back to stages 1 to 4 when the results are not good enough." loading="lazy">
  <figcaption>Data mining runs through six stages; if evaluation shows the results are not good enough, return to an earlier stage.</figcaption>
</figure>


### Uses

National security (threat patterns), surveillance (tracking movements), businesses (buying patterns, targeted offers, fraud detection), scientific research (patterns in huge data sets), healthcare (risk factors, predicting need), social and economic trends (informing policy).

### Advantages and disadvantages

| Advantages | Disadvantages |
|---|---|
| All information in one place: faster, more complete analysis | One data store is one target for hackers |
| Hidden patterns support better decisions | Ethical and privacy concerns: data used without consent, profiling |
| Early detection of fraud or disease | Patterns may be coincidence |
| Can reduce costs over time | Software and skilled staff are expensive |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-it-in-society--04-data-prep-example.webp" width="900" height="740" alt="Three bars drawn to scale show 12,500 customer records, then 12,000 after 500 duplicates (4%) are removed, then 11,400 after 600 records with no postcode (5% of 12,000) are removed. The result, 11,400, is data preparation, stage 3." loading="lazy">
  <figcaption>Removing 500 duplicates and then 600 records with no postcode leaves 11,400 of the 12,500 records.</figcaption>
</figure>


## 12.3 Social networking services/platforms

| Type | Real time? | Typical audience | Key point |
|---|---|---|---|
| Chat room | Yes | Many, often strangers | Topic-based, risk of unknown contacts |
| Instant messaging | Yes | Known contacts, small groups | Private and quick |
| Email | No | Named addresses | Formal record, attachments, spam and phishing |
| Forum | No | Anyone interested | Threaded, searchable, moderated |
| Blog | No | Readers of one author | Longer posts, comments |
| Microblog | Near real time | Followers | Very short posts, spread fast |

**Uses:** individuals, businesses, organisations, governments; for education, finance, healthcare, news sources.

**Impact checklist (syllabus examples):**
- Individuals: meeting new people, keeping in contact, common interest groups, exchanging ideas; intellectual isolation, physical and mental health of different age groups, ideological polarisation, stereotyping, cognitive issues.
- Businesses: advertising, product information, product safety information, customer feedback.
- Organisations: disseminate information, weather warnings.
- Governments: useful information, updated regulations, advice and discussion, government news, citizen feedback; censorship, false/distorted information.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-it-in-society--05-social-platform-types.webp" width="900" height="804" alt="Six cards each show an icon and one key feature: chat room (real-time, many users, one topic), instant messaging (real-time private messages), email (read when the receiver chooses), forum (threads stay online, moderated), blog (regular posts with comments), microblog (very short posts to followers)." loading="lazy">
  <figcaption>The six types of social networking service differ in how fast, how public and how lasting the messages are.</figcaption>
</figure>


## 12.4 The impact of IT

The twelve areas the syllabus lists: **sport, manufacturing, healthcare, education, banking, e-business and finance, news, entertainment and media, family and home, government, politics, individuals and organisations.** For each, have one positive and one negative ready, with a named technology.

**Monitoring and surveillance:**
- Individuals: safety vs loss of privacy.
- Organisations: data protection and productivity vs trust and morale.
- Security and policing: CCTV, number plate and facial recognition detect crime vs mass surveillance and misidentification.

## 12.5 Technology enhanced learning

| Method | One-line recall | Main drawback |
|---|---|---|
| Computer-based training | Self-paced software with built-in tests | Little human help |
| Online tutorials | Step-by-step web lessons on one skill | Narrow; quality varies |
| Networked courses | Course delivered over a network; shared materials, work submitted | Needs a reliable network |
| MOOC | Open online course for very large numbers | Little individual support |
| Video-conferencing | Live remote lessons with sound and video | Needs stable connection, fixed times |

**Impact on:** student and teacher **motivation** (interactive, instant feedback vs isolation, training load), **achievement** (repetition, tracking vs distraction), **autonomy** (choose time, place, pace vs self-discipline needed). Access gaps link to [the digital divide](/resources/a-level-cambridge-ict-the-digital-divide/).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-it-in-society--07-learning-methods.webp" width="900" height="958" alt="A learner icon connects to five methods of delivery: computer-based training (own pace, built-in tests), online tutorials (step-by-step, one skill), networked courses (share materials, submit work), MOOC (open to very large numbers), and video-conferencing (live sound and video)." loading="lazy">
  <figcaption>Five methods of delivering technology enhanced learning, from self-paced software to live video lessons.</figcaption>
</figure>


## Must-know distinctions

- **Virtual currency vs cryptocurrency:** all cryptocurrencies are virtual, but a game token is virtual without being cryptographic.
- **Cryptocurrency vs central bank digital money:** decentralised and volatile vs centrally issued and as stable as cash.
- **Data understanding vs data preparation:** checking quality vs fixing it.
- **Instant messaging vs chat room:** known contacts vs open rooms of many users.
- **MOOC vs networked course:** open to anyone at scale vs a closed group on one network.

## Quick self-test

1. Name the stage of data mining in which the model's results are checked against the objective.
2. Give one centralised and one decentralised digital currency system from the syllabus.
3. What does each block in a blockchain store that links it to the one before?
4. State one risk of cryptocurrency to a government.
5. A survey file has 3,200 records. 15% are removed during cleaning. How many remain, and in which stage?
6. State two syllabus examples of social media.
7. Give one negative impact of social networking on individuals named in the syllabus.
8. State one way IT has changed sport.
9. Which method of technology enhanced learning allows live questions from remote learners?
10. Give one disadvantage of having all information in one place.

### Answers

1. Evaluation (stage 5).
2. Centralised: debit card, credit card or EPOS. Decentralised: Bitcoin, Litecoin, peer-to-peer systems or mobile electronic wallets.
3. The hash of the previous block.
4. Any one: tax evasion, money laundering, loss of control over the money supply.
5. 15% of 3,200 = 480 removed, so **2,720** remain; data preparation (stage 3).
6. Any two: forums, blogs, microblogs.
7. Any one: intellectual isolation, ideological polarisation, stereotyping, cognitive issues, effects on physical or mental health.
8. For example, sensors track player performance, or video replays support referees.
9. Video-conferencing.
10. A single data store is a single target: one breach exposes everything.

## Where marks are usually lost

- Using "digital currency" and "cryptocurrency" as if they mean the same thing.
- Describing a blockchain as stored "on the internet" instead of as copies on many nodes.
- Saying a blockchain "cannot be changed" without explaining hashes and consensus.
- Listing the six data mining stages out of order, or merging stages 2 and 3.
- Giving a data mining use with no purpose: say what pattern is found and why it helps.
- Treating email, IM and chat rooms as interchangeable when a question asks you to compare.
- Writing only advantages in a "Discuss" or "Evaluate" answer.
- Naming an area such as "healthcare" without a specific technology and effect.
- Confusing the impact of technology enhanced learning on students with its impact on teachers.

## Frequently asked questions

**What are the six stages of data mining?**
In Cambridge 9626, the six stages are business understanding, data understanding, data preparation, data modelling, evaluation and deployment. Data understanding checks the quality of the data, while data preparation fixes it.

**What is the difference between a virtual currency and a cryptocurrency?**
A virtual currency is issued and controlled by its developers and used within one online community, and is largely unregulated. A cryptocurrency is a virtual currency secured by cryptography and recorded on a decentralised ledger.

**What is the difference between centralised and decentralised payment systems?**
In a centralised system, one authority such as a bank checks and records each transaction, as with debit and credit cards. In a decentralised system, such as Bitcoin, a network of peers checks transactions and every node holds a copy of the ledger.

**Is every digital currency a cryptocurrency?**
No. Digital currency is the umbrella term for any money that exists and moves only electronically, including a bank balance spent by card. Using the two terms as if they mean the same thing is a common mistake.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-it-in-society--06-discuss-banking-pairs.webp" width="900" height="988" alt="Three rows pair a benefit of IT in banking with its downside: bank online at any time, but branches close and offline customers lose out; systems block suspicious payments, but customers face phishing; contactless payment is faster, but stored card details can be stolen. A balance icon reminds students to give both sides, then a conclusion." loading="lazy">
  <figcaption>A Discuss answer pairs each point with its downside, as in this six-mark banking plan.</figcaption>
</figure>


## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, version 3 (published July 2025), Cambridge International, part of Cambridge University Press & Assessment. Topic 12, IT in society, sections 12.1–12.5.
