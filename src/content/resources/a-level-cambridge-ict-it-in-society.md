---
title: "Cambridge A Level Information Technology (ICT): IT in society (9626)"
seoTitle: "Cambridge A Level IT 9626: IT in Society Study Guide"
resourceType: "study-guides"
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
description: "Study guide to IT in society for Cambridge A Level IT 9626: digital currencies, data mining, social networking, impact of IT and online learning."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide covers **topic 12, IT in society** (sections 12.1–12.5) of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 3). It is **A Level only** content. The syllabus states that Paper 3 (Advanced Theory) questions are based on sections 12–21, so this topic is examined there; Paper 4 (Advanced Practical) tasks are set on sections 17–21, but candidates apply knowledge and understanding of all subject content.

Use it with the [revision notes](/resources/a-level-cambridge-ict-it-in-society-revision-notes/) and the [practice questions](/resources/a-level-cambridge-ict-it-in-society-practice/). The full course is on the [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/), and the [printable 9626 checklist](/checklists/cambridge/a-level/ict/) lists every outcome. To find your gaps first, try a [free diagnostic](/diagnostics/).

## What this topic covers

| Section | What you must be able to do | Level |
|---|---|---|
| 12.1 Digital currencies | Types, centralised and decentralised systems, blockchains, impacts and risks | A Level only |
| 12.2 Data mining | The process, its six stages, uses, advantages and disadvantages | A Level only |
| 12.3 Social networking services/platforms | Types, uses, impact on four groups, advantages and disadvantages | A Level only |
| 12.4 The impact of IT | Impact on areas of society, and on monitoring and surveillance | A Level only |
| 12.5 Technology enhanced learning | Methods of delivery, impact, advantages and disadvantages | A Level only |

## 12.1 Digital currencies

### Types and characteristics

| Type | What it is |
|---|---|
| Digital/electronic currency | Any money that exists and moves only in electronic form, such as a bank balance spent by card or online transfer. The umbrella term. |
| Virtual currency | Digital money issued and controlled by its developers, not a central bank, and usually used inside one online community, such as tokens in a game. Largely unregulated. |
| Cryptocurrency | A virtual currency secured by cryptography, with transactions usually recorded on a decentralised blockchain rather than by a bank. |
| Central bank digital base money | A digital form of a country's official currency, issued and backed by its central bank, with the same value as notes and coins. |
| Stored value card | A card holding a value loaded in advance, such as a prepaid, gift or transport card. Payments reduce the value until it is topped up. |

**Centralised systems** have one authority that checks and records every transaction. A **debit card** takes money straight from the holder's bank account. A **credit card** borrows from the issuer, repaid later. An **electronic point of sale (EPOS)** terminal records the sale, updates stock and sends the card payment to the bank for authorisation.

**Decentralised systems** have no single authority. **Bitcoin** and **Litecoin** are cryptocurrencies whose transactions are checked by a network of computers. **Peer-to-peer electronic monetary systems** let users pay each other directly. **Mobile electronic wallets** store a user's currency, or the keys to it, on a phone so payments go straight from one wallet to another.

### Blockchains as distributed ledgers

A **blockchain** is a **distributed ledger**: a record of transactions held as identical copies on many computers (nodes).

1. New transactions are grouped into a **block**.
2. Each block stores a **hash** of the previous block, so the blocks form a chain.
3. Nodes must agree a block is valid before it is added to every copy.
4. Blocks are only ever added, never edited.

Changing an old transaction changes that block's hash, so it no longer matches the hash stored in the next block. Other nodes hold the original, so the altered copy is rejected.

### Impact and risks

| Who | Impact | Risks |
|---|---|---|
| Individuals | Fast, low-cost transfers, including abroad; a phone wallet gives access without a bank account | Values can swing sharply; a lost private key or password means lost funds; payments cannot be reversed; scams |
| Businesses | Lower fees, faster settlement, new customers | Takings can lose value quickly; unclear regulation and tax rules; exchanges and wallets can be hacked |
| Governments | Central bank digital money cuts cash costs and makes payments traceable | Pseudonymous currencies help tax evasion and money laundering; less control over the money supply |
| Global economy | Cheaper cross-border trade and payments | Speculative bubbles and crashes can spread between countries |

**Advantages vs disadvantages by type:** centralised systems offer consumer protection and stable value, but charge fees and depend on one organisation. Cryptocurrencies avoid a middleman but are volatile and weakly protected. Stored value cards limit overspending, but the value is lost with the card. Central bank digital money is as stable as cash, but spending can be tracked.

### Worked example 1 (Explain, 4 marks)

*Explain why a debit card payment is a centralised system but a Bitcoin payment is decentralised.*

- A debit card payment is authorised and recorded by the cardholder's bank, a single central authority. [1]
- The bank keeps the only official record of the account balance. [1]
- A Bitcoin payment is checked by many nodes in a network, with no single controlling organisation. [1]
- It is recorded on a blockchain copied across all nodes, so no one body owns the ledger. [1]

## 12.2 Data mining

**Data mining** is using software to search very large data sets for previously unknown patterns, relationships and anomalies, to predict outcomes and support decisions.

### The six stages

1. **Business understanding:** set the objective and what success looks like.
2. **Data understanding:** collect the data, describe it, explore it and check its quality.
3. **Data preparation:** select, clean (remove duplicates, correct errors, deal with missing values), combine and format the data.
4. **Data modelling:** apply techniques such as classification, clustering or association rules to build a model.
5. **Evaluation:** check whether the results are accurate and meet the business objectives; if not, return to an earlier stage.
6. **Deployment:** put the results to use, for example in reports or in a live system, and monitor them.

### Worked example 2 (data preparation)

*A retailer extracts 12,500 customer records. 4% are duplicates. Of the remaining records, 5% have no postcode and are removed. How many records are left, and which stage is this?*

```
Duplicates      = 4% of 12,500 = 500   ->  12,500 - 500 = 12,000
Missing postcode = 5% of 12,000 = 600  ->  12,000 - 600 = 11,400
```

**11,400 records** remain. Removing duplicates and incomplete records is **data preparation** (stage 3).

### How and why it is used

| Area | Example use |
|---|---|
| National security | Spotting patterns in travel, financial or communication data that may signal a threat |
| Surveillance | Analysing camera, location and phone data to track movements |
| Businesses | Finding which products are bought together, targeting offers, detecting card fraud |
| Scientific research | Finding patterns in huge experimental data sets, such as genetic or climate data |
| Healthcare | Identifying risk factors and predicting which patients need early treatment |
| Social and economic trends | Analysing spending, employment or online data to inform policy |

**Advantages:** with **all information in one place**, analysis is faster and gives a complete picture; hidden patterns support better decisions and earlier detection of fraud or disease. **Disadvantages:** one data store is one target for hackers; **ethical and privacy concerns** arise when data is used for purposes people did not agree to, or to profile them; patterns can be coincidences; skilled staff and software are costly.

## 12.3 Social networking services/platforms

| Type | Key features |
|---|---|
| Chat room | Real-time text conversation among many users, often strangers, about one topic |
| Instant messaging | Real-time private messages between contacts or small groups |
| Email | Messages to addresses, read when the receiver chooses; attachments; often formal |
| Forum | Threaded discussions that stay online and can be searched; usually moderated |
| Blog | Regular posts by one person or organisation, with reader comments |
| Microblog | Very short posts sent to followers and shared on quickly |

**Uses:** by individuals, businesses, organisations and governments, for education (class groups), finance (bank alerts), healthcare (patient support groups) and as news sources.

**Impact**

- **Individuals:** meeting new people, keeping in contact with family and friends, common interest groups, exchanging ideas. Negatives: intellectual isolation (seeing only views like your own), ideological polarisation, stereotyping, cognitive issues such as shorter attention spans, and effects on physical and mental health that differ by age group, for example lost sleep and less exercise in teenagers, or reduced loneliness in older people.
- **Businesses:** targeted advertising, product information, safety information such as recalls, and customer feedback.
- **Organisations:** disseminating information quickly, for example weather warnings.
- **Governments:** distributing useful information, updating regulations, advice and discussion on current issues, government news, feedback from citizens. Risks: censorship, and false or distorted information.

**Advantages vs disadvantages by type:** chat rooms and IM are fast but poor as a permanent record. Email keeps a formal record but is slower and attracts spam and phishing. Forums and blogs keep searchable content but need moderation. Microblogs reach large audiences quickly, so false information spreads quickly too.

## 12.4 The impact of IT

| Area | Positive impact | Negative impact |
|---|---|---|
| Sport | Performance sensors, video replays for referees | Costly technology favours rich teams |
| Manufacturing | Robots work continuously and accurately | Fewer unskilled jobs |
| Healthcare | Electronic records, remote consultations | Records are a hacking target |
| Education | Online resources available anywhere | Learners without devices fall behind |
| Banking | 24-hour online banking | Branch closures; online fraud |
| E-business and finance | Global customers, automated trading | High street shops lose trade |
| News | Instant reporting, citizen journalism | Unchecked stories spread |
| Entertainment and media | Streaming on demand | Piracy; less shared viewing |
| Family and home | Smart devices, video calls with relatives | Screen time replaces conversation |
| Government | Online tax and licence services | Excludes people offline |
| Politics | Direct contact with voters | Targeted misinformation |
| Individuals and organisations | Remote working, faster communication | Always contactable; skills gaps |

### Monitoring and surveillance

- **Individuals:** CCTV, phone location data and online tracking improve safety but reduce privacy.
- **Organisations:** employers may monitor emails, internet use or keystrokes to protect data and check productivity, but trust and morale can suffer.
- **Security and policing:** CCTV, automatic number plate recognition and facial recognition help detect and prove crime, but raise fears of mass surveillance, misidentification of innocent people and misuse of the data.

### Worked example 3 (Discuss, planning a 6-mark answer)

*Discuss the impact of IT on banking.* Pair each point with its downside: online banking works at any time without travel [1], but branches close, hurting customers who are offline [1]; automated systems block suspicious payments [1], but customers face phishing [1]; contactless payment is faster [1], but stored card details can be stolen [1].

## 12.5 Technology enhanced learning

| Method | Description |
|---|---|
| Computer-based training (CBT) | Software that learners work through at their own pace, often with built-in tests |
| Online tutorials | Web-based step-by-step lessons or videos on one skill |
| Networked courses | Courses delivered over a network, where learners share materials and submit work |
| Massive open online courses (MOOC) | Online courses open to very large numbers of learners, with videos, quizzes and forums |
| Video-conferencing | Live lessons with sound and video between a teacher and learners in different places |

**Impact**

- **Student and teacher motivation:** interactive content and instant feedback motivate students; automatic marking frees teacher time. Isolation reduces some students' motivation, and teachers need training and time to build content.
- **Achievement:** learners can repeat material, and teachers can track progress to target help. Distractions and less face-to-face support can lower achievement.
- **Autonomy:** learners choose when, where and how fast they study, which needs self-discipline.

**Advantages vs disadvantages:** CBT and online tutorials are self-paced but offer little human help. Networked courses track work but need a reliable network. MOOCs reach huge numbers cheaply but give little individual support. Video-conferencing allows live questions but needs a stable connection and fixed times. Access gaps link to [the digital divide](/resources/a-level-cambridge-ict-the-digital-divide/).

## Common errors

- **Calling every digital currency a cryptocurrency.** A debit card balance is digital but centralised.
- **Saying a blockchain "cannot be hacked".** Say altered copies are **detected and rejected**.
- **Mixing stages 2 and 3 of data mining.** Checking quality is data understanding; cleaning is data preparation.
- **One-sided "Discuss" answers.** Give both sides, then a conclusion.

## Where to go next

- [IT in society revision notes](/resources/a-level-cambridge-ict-it-in-society-revision-notes/) and [practice questions](/resources/a-level-cambridge-ict-it-in-society-practice/)
- Related: [eSecurity](/resources/a-level-cambridge-ict-esecurity/) for protecting personal data, and [Data processing and information](/resources/a-level-cambridge-ict-data-processing-and-information/)

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, version 3 (published July 2025), Cambridge International, part of Cambridge University Press & Assessment. Topic 12, IT in society, sections 12.1–12.5.
