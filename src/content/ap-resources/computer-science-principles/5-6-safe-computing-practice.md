---
resourceId: "mb-ap-csp-5.6-practice"
title: "Safe Computing: Practice Questions (Computer Science Principles 5.6)"
description: "Ten original practice questions on PII, authentication, encryption, malware and attacks such as phishing, keylogging and rogue access points, with full explanations and suggested rubrics."
course: "computer-science-principles"
unit: 5
topics: ["5.6"]
resourceType: "practice-questions"
prerequisites: 
  - "Topic 4.1 (data travel across the Internet in packets)"
prerequisiteResources: ["mb-ap-csp-5.6-study-guide"]
learningObjectives: 
  - "Apply safe computing to unfamiliar situations"
  - "Explain your reasoning in full sentences, as constructed responses require"
skills: ["4", "5", "6"]
studyMinutes: 55
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-5.6-study-guide", "mb-ap-csp-5.6-revision-notes", "mb-ap-csp-5.6-checklist"]
next: "mb-ap-csp-5.6-checklist"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "Original questions with fictional scenarios and Marlbridge-rendered pseudocode where code appears."
  - "Every answer explains why each wrong option is wrong."
  - "Rubrics are a suggested Marlbridge rubric, not official scoring."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "drafted"
---

These are **original Marlbridge practice questions**, not past exam questions. All people, products and organisations are fictional. The rubrics are a suggested Marlbridge rubric, not an official scoring guideline. No calculator is needed.

## Question 1 (multiple choice · foundation)

Which of the following is **personally identifiable information (PII)**?

- (A) A person's fingerprint data
- (B) The colour of the app's logo
- (C) The number of lines in a program
- (D) The name of a programming language

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Biometric data identify an individual.

- (B), (C) and (D) do not describe an individual.
</details>

## Question 2 (multiple choice · foundation)

A user logs in with a password and then enters a code sent to their phone. This is an example of

- (A) multifactor authentication using knowledge and possession
- (B) symmetric key encryption
- (C) a rogue access point
- (D) lossy compression

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The password is something they know; the phone is something they have.

- (B), (C) and (D) are unrelated.
</details>

## Question 3 (multiple choice · core)

In public key encryption, Ana wants to send Ben a private message. Which key does Ana use to encrypt it, and which key does Ben use to decrypt it?

- (A) Ben's public key to encrypt; Ben's private key to decrypt
- (B) Ana's private key to encrypt; Ben's private key to decrypt
- (C) Ben's private key to encrypt; Ben's public key to decrypt
- (D) The same shared key is used in both steps

<details>
<summary>Answer and explanation</summary>

**Answer: (A).**

- (B) Ana would not use her own private key for a message only Ben should read.
- (C) reverses the roles of the keys.
- (D) describes symmetric key encryption.
</details>

## Question 4 (multiple choice · core)

A fictional user receives an email, apparently from a streaming service, saying their account has a problem and asking them to enter their password on a linked page. This is most likely

- (A) phishing
- (B) keylogging
- (C) a certificate authority
- (D) open access

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** It tries to trick the user into providing personal information.

- (B) keylogging records keystrokes by a program.
- (C) certificate authorities validate keys.
- (D) open access concerns research output.
</details>

## Question 5 (multiple choice, select two · core)

Which **two** actions help protect a computer system?

- (A) Installing software updates that fix known errors
- (B) Using malware scanning software
- (C) Opening every unexpected attachment to check it
- (D) Downloading free software from any website

<details>
<summary>Answer and explanation</summary>

**Answer: (A) and (B).**

- (C) unexpected attachments may contain malware.
- (D) untrustworthy downloads can contain malware.
</details>

## Question 6 (multiple choice · core)

A fictional person uses a public wireless network in a café. The network was set up by an attacker with a name like the café's, so the attacker can see the traffic. This is

- (A) a rogue access point
- (B) multifactor authentication
- (C) a strong password
- (D) a digital certificate

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** A wireless access point that gives unauthorised access and allows interception.

- (B), (C) and (D) are protections, not threats.
</details>

## Question 7 (multiple choice · stretch)

A fictional fitness app records where its users run. It stores the location data for each user for years. Which concern is **best supported**?

- (A) The combined location history could reveal where a user lives and when they are away, which could be used to harm them if it were exposed.
- (B) Location data can never reveal anything about a person.
- (C) Location data are automatically deleted from every system.
- (D) Location data are encrypted, so they cannot be misused.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Aggregated location data can be used to deduce private information.

- (B) is false.
- (C) information online is difficult to delete.
- (D) encryption does not prevent misuse by those who hold the keys.
</details>

## Question 8 (constructed response · core)

A fictional school moves its student records online. Each member of staff logs in with a password.

(a) Explain why adding multifactor authentication would improve security, naming two categories it could use. (3 points)

(b) Describe what makes a password strong. (1 point)

(c) Explain one way the school could reduce the risk of phishing. (1 point)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (5 points).**

| Point | Award when the response… |
|---|---|
| 1 | explains that MFA needs more than one piece of evidence, so a stolen password alone is not enough |
| 2 | names one category (knowledge, possession or inherence) |
| 3 | names a second, different category |
| 4 | says a strong password is easy for the user to remember but difficult for others to guess |
| 5 | gives a valid action (train staff to spot suspicious emails, to avoid entering details after following links, and to report them) |

**Sample response.** (a) With MFA an attacker who steals a password still needs a second item. It could use knowledge (a password) and possession (a code sent to the staff member's phone). (b) A strong password is easy for the owner to remember but hard for others to guess. (c) Teach staff not to enter their password after clicking a link in an email and to report suspicious messages.
</details>

## Question 9 (constructed response · core)

(a) Explain the difference between symmetric key encryption and public key encryption. (2 points)

(b) Explain one advantage of public key encryption when two people have never met. (1 point)

(c) Explain what a certificate authority does. (1 point)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (4 points).**

| Point | Award when the response… |
|---|---|
| 1 | says symmetric uses one key for both encryption and decryption |
| 2 | says public key uses a pair: public key to encrypt, private key to decrypt |
| 3 | gives an advantage (the sender needs only the public key, so no secret key has to be shared in advance) |
| 4 | says certificate authorities issue digital certificates that validate who owns an encryption key |

**Sample response.** (a) Symmetric: one key does both jobs. Public key: a public key encrypts and a different private key decrypts. (b) Two people who have never met can communicate secretly because the sender only needs the receiver's public key. (c) A certificate authority issues certificates that confirm a key really belongs to the person or organisation it claims to.
</details>

## Question 10 (constructed response · stretch)

Read this passage written by Marlbridge.

*"A fictional shop's app offers discounts. To use it, customers allow the app to see their location, contacts and purchase history. The shop says this lets it send better offers. A customer later finds that an offer arrived for a medicine she had only mentioned in a private message to a friend."*

(a) Explain one benefit and one privacy risk of the data collected. (2 points)

(b) Explain how combining different data could lead to the offer in the passage. (2 points)

(c) Suggest **one** action the customer and **one** action the shop could take to reduce the risk. (2 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (6 points).**

| Point | Award when the response… |
|---|---|
| 1 | gives a benefit (more relevant offers; convenience) |
| 2 | gives a privacy risk (sensitive information, such as health, can be deduced and could be misused) |
| 3 | explains that data from several sources (location, contacts, purchases, messages) can be combined to deduce private information |
| 4 | links this to the offer (the combined data suggested the medicine) |
| 5 | gives a customer action (review and limit the permissions the app has) |
| 6 | gives a shop action (collect less data, tell customers what is used, let them opt out, keep the data secure) |

**Sample response.** (a) Benefit: the offers may be more useful. Risk: the shop may learn about her health, which is sensitive. (b) The shop could combine her location (visiting a pharmacy), contacts and purchases to deduce a health matter, even if no single item says it. (c) The customer can turn off the contacts and location permissions. The shop could collect only the data it needs and let customers opt out of personalised offers.
</details>

## How did you do?

Questions 1 to 7 are multiple choice; 8 to 10 are written. If you missed Question 3, redraw Figure 1 from the [study guide](/advanced-course-resources/computer-science-principles/5-6-safe-computing-study-guide/) and label whose key is used at each step. If you lost marks in written questions, check that each protection you named fits the specific threat. Then use the [checklist](/advanced-course-resources/computer-science-principles/5-6-safe-computing-checklist/).
