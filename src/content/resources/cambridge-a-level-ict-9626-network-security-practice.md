---
title: "Cambridge A Level Information Technology (9626): Network security -- Practice Questions"
seoTitle: "A Level IT 9626 Network Security: Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Topic 14 – Communications technology"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 14.9
syllabusTopics:
  - qualification: "a-level"
    topic: "communications-technology"
  - qualification: "a-level"
    topic: "communications-technology"
    subtopic: "network-security"
description: "Thirteen original Cambridge 9626 IT section 14.9 questions with answers on network threats, their impact and methods of prevention."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs; examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Network security study guide](/resources/cambridge-a-level-ict-9626-network-security/) | [Network security revision notes](/resources/cambridge-a-level-ict-9626-network-security-revision-notes/)

These questions are for **section 14.9 Network security** (Topic 14, A Level) of Cambridge International AS & A Level Information Technology (9626), 2025–2027. All organisations and figures are invented.

---

## Section A

**1.** Describe a brute force attack. **[2]**

**2.** Explain what is meant by a botnet. **[2]**

**3.** State **two** impacts of identity theft on an individual. **[2]**

**4.** Describe the purpose of a firewall. **[2]**

**5.** State what is meant by the principle of least privilege. **[2]**

**6.** Identify **two** physical methods of preventing unauthorised access to a server room. **[2]**

## Section B

**7.** A numeric PIN has 6 digits. An attacker can try 500 PINs per second.

**(a)** Calculate the number of possible PINs. **[1]**

**(b)** Calculate the longest time, in minutes to one decimal place, to try every PIN. **[2]**

**(c)** Describe **one** measure that would prevent this attack. **[2]**

**8.** A botnet of 8,000 infected devices each sends 25 requests per second to a website. The website can process 4,000 requests per second.

**(a)** Calculate the total number of requests per second. **[1]**

**(b)** Calculate how many times greater this is than the capacity of the website. **[1]**

**(c)** Explain the effect of the attack on genuine customers. **[2]**

**(d)** Describe **two** ways the website's owner could reduce the effect of such attacks. **[4]**

**9.** A website login form uses user input directly in a database query.

**(a)** Explain how an attacker could use SQL injection against this site. **[3]**

**(b)** Describe **two** ways of preventing it. **[4]**

**10.** Explain why encryption does not prevent data from being stolen but still protects it. **[3]**

**11.** A hospital network holds patient records. Discuss the impact on the hospital and its patients if a malicious actor deletes or changes records. **[6]**

**12.** A company has poor network policies: staff share passwords, use their own USB drives and never install updates. Explain how these weaknesses could lead to a security breach, and recommend three policy changes. **[6]**

**13.** Evaluate the use of biometric methods compared with passwords for controlling access to a company network. **[6]**

---

## Answers

**1.** An attacker uses software to try every possible password or key [1] until the right one is found and access is gained [1]. **[2]**

**2.** A group of computers or devices infected with malware [1] and controlled secretly by an attacker, often without the owners knowing [1]. **[2]**

**3.** Any two from: financial loss [1]; credit rating damaged [1]; time and stress restoring accounts [1]; being blamed for actions taken using the stolen identity [1]. **[2]**

**4.** A firewall examines traffic entering and leaving a network [1] and allows or blocks it according to rules, to stop unauthorised access [1]. **[2]**

**5.** Each user is given only the access rights [1] that they need to do their job, and no more [1]. **[2]**

**6.** Any two from: locked doors [1]; barriers [1]; CCTV [1]; alarm system [1]; security guard [1]. **[2]**

**7. (a)** 10⁶ = 1,000,000 [1].

**(b)** 1,000,000 ÷ 500 = 2,000 seconds [1]; 2,000 ÷ 60 = 33.3 minutes [1].

**(c)** Lock the account after a small number of failed attempts [1], so the attacker cannot try all the combinations; or use two-factor authentication so that the PIN alone is not enough [1].

**8. (a)** 8,000 × 25 = 200,000 requests per second [1].

**(b)** 200,000 ÷ 4,000 = 50 times [1].

**(c)** The site is overloaded, so pages load very slowly or not at all [1], and real customers cannot get through to buy, so the business loses sales and trust [1].

**(d)** Any two, each with a reason: a firewall or filter that blocks traffic from suspicious addresses [1][1]; extra server capacity or a service that spreads the load [1][1]; limiting the number of requests accepted from one address [1][1]; contacting the internet provider to block the traffic [1][1].

**9. (a)** The attacker types SQL code into a form field [1]. The site puts this text into the query without checking it, so the database runs it as part of the command [1]. This may return all user records, bypass the login or change or delete data [1].

**(b)** Validate and clean all input, rejecting or removing characters used in SQL commands [1][1]; use parameterised queries so the input is treated as data and not as code [1][1]; give the database account the least privilege, so that it cannot delete tables [1][1]. Any two, 2 marks each.

**10.** Encryption scrambles the data using a key [1]. A thief who copies the data cannot read it without the key [1], so the stolen data is useless, although the thief still has it [1]. **[3]**

**11.** Hospital: treatment may be delayed or wrong if records are missing or changed [1]; services may stop while records are restored from backups [1]; the hospital may be fined for failing to protect data [1]; loss of public trust and reputation [1]. Patients: a wrong allergy or dose could harm them [1]; private details could be exposed or sold [1]; delays to care cause distress [1]. Conclusion: backups, access rights and audit logs reduce the risk [1]. Maximum 6 marks. **[6]**

**12.** Breach: shared passwords mean anyone can log in as that user, so the real user cannot be traced and one leaked password gives access [1]; personal USB drives may carry malware into the network [1]; no updates leave known weaknesses that attackers can use [1]. Recommendations: each person has their own strong password, with two-factor authentication [1]; only approved, scanned devices may be used [1]; regular updates and patching are required [1]; also staff training and written rules [1]. Maximum 6 marks. **[6]**

**13.** Biometrics: cannot be forgotten, lost or easily shared [1]; hard to copy [1]; quick to use [1]. But: equipment is costly [1]; they may reject genuine users or accept wrong ones [1]; if stolen, a fingerprint cannot be changed [1]; privacy concerns about storing biometric data [1]. Passwords: cheap and easy to change [1], but weak ones can be guessed, forgotten or shared [1]. Judgement: combine both for sensitive systems [1]. Maximum 6 marks. **[6]**

## Where marks are usually lost

- Naming a threat without saying how it works.
- Saying a firewall "stops viruses".
- Forgetting the measure to prevent the attack, or giving a measure that does not match the threat.
- Not saying who suffers: the hospital, the customers or the patients.
- Calculating a time in seconds and forgetting to convert to minutes.
