---
title: "Cambridge A Level Information Technology (ICT): eSecurity (9626)"
seoTitle: "Cambridge A Level ICT 9626 eSecurity Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "eSecurity"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 5
syllabusTopics:
  - qualification: "a-level"
    topic: "esecurity"
description: "Study guide for Cambridge AS & A Level IT 9626 topic 5, eSecurity: personal data, phishing, pharming, firewalls, malware types and prevention."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide covers **topic 5, eSecurity**, of Cambridge International AS & A Level Information Technology (9626). It follows the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 3), sections 5.1 Personal data and 5.2 Malware. Topic 5 is an **AS Level** topic, so it is part of both the AS Level and the full A Level. It is examined in **Paper 1 (Theory)**, which is based on sections 1–11; Paper 2 (Practical) also expects you to apply knowledge from sections 1–7.

Encryption and the TLS/SSL and IPsec protocols belong to topic 1 and are taught in the [Data Processing and Information study guide](/resources/a-level-cambridge-ict-data-processing-and-information/). Course hub: [Cambridge A Level ICT](/boards/cambridge/a-level/ict/). Printable checklist: [9626 checklist](/checklists/cambridge/a-level/ict/). Not sure where your gaps are? Try a [free 10-minute diagnostic](/diagnostics/).

## What this topic covers

| Section | What you must be able to do | Stage and paper |
|---|---|---|
| 5.1 | Say what personal data is | AS, Paper 1 |
| 5.1 | Explain why personal data should be kept confidential, and how: removing geotags, anonymising, aggregating, duty of confidence measures | AS, Paper 1 |
| 5.1 | Explain how personal data is kept secure, including network security measures | AS, Paper 1 |
| 5.1 | Describe smishing, vishing, phishing and pharming, and how each is prevented, including hardware and software firewalls | AS, Paper 1 |
| 5.1 | Give advantages and disadvantages of the methods of preventing misuse | AS, Paper 1 |
| 5.2 | Describe trojans, worms, spyware, adware, rootkits, malicious bots and ransomware | AS, Paper 1 |
| 5.2 | Explain how malware is used for fraud, theft, industrial espionage and sabotage | AS, Paper 1 |
| 5.2 | Explain the consequences of malware for organisations and individuals | AS, Paper 1 |
| 5.2 | Describe malware prevention software and physical prevention methods, with advantages and disadvantages | AS, Paper 1 |

## 5.1 Personal data

### What personal data is

**Personal data** is any information that relates to a living person who can be identified from it, on its own or combined with other data. Examples: name, address, date of birth, phone number, email address, ID number, bank details, a photo, location history and medical records. A first name alone may not identify anyone; a first name plus a school plus a date of birth usually does.

### Why personal data should be kept confidential

- **Identity theft and fraud**: a criminal with your name, date of birth and bank details can open accounts or make purchases in your name.
- **Physical safety**: an address or live location can lead a burglar to you.
- **Discrimination**: health or financial details can be used unfairly against you.
- **Organisations' obligations**: a company that leaks customer data faces legal action and lost trust.

### How personal data can be kept confidential

- **Removing geotags.** A phone camera can store GPS coordinates inside a photo or video file as metadata. Anyone who downloads the file can read the exact place it was taken, such as your home. Turn off location tagging in the camera settings, or strip the metadata before sharing.
- **Anonymising.** Remove or replace anything that identifies a person (names, ID numbers, exact addresses) so the remaining data can be used, for example for research, without revealing who it is about.
- **Aggregating.** Combine individual records into totals or averages ("62 patients aged 40–49 attended") so no single person's record is shown.
- **Duty of confidence measures.** A duty of confidence exists when information is shared on the understanding that it stays private, as between a doctor and patient or an employer and employee. Measures that honour it include confidentiality clauses in contracts, staff training, giving access only to people who need the data for their job, getting consent before passing data on, and disposing of records securely.

### How personal data can be kept secure

Confidentiality is about who is *allowed* to see data; security stops anyone else getting at it. **Network security measures** include:

- user IDs with **strong passwords**, and **two-factor authentication** (a second proof such as a code sent to a phone);
- **biometric** checks (fingerprint, face) on devices;
- **access rights** so each user sees only the files they need;
- **encryption** of stored data and data in transit (see topic 1);
- **firewalls** at the edge of the network and on each computer;
- keeping operating systems and applications **updated** so known weaknesses are closed.

### How unauthorised people gather personal data

| Method | How it works | How to prevent it |
|---|---|---|
| **Phishing** | An email that pretends to come from a trusted organisation, with a link to a fake website where you type in personal or login details | Check the sender's address; don't click links in unexpected emails; type the known web address yourself; use spam filters |
| **Smishing** | The same trick by SMS text message, often with a short link or a number to call | Don't follow links in unexpected texts; contact the organisation using a number from its official website or your card |
| **Vishing** | A voice call or voicemail in which the caller pretends to be from a bank, tax office or support desk and asks for details | Hang up and call back on an official number; never give passwords or PINs over the phone |
| **Pharming** | Malicious code on your computer, or a tampered DNS server, sends you to a fake website **even when you type the correct address** | Anti-malware software; check the address bar and the site's security certificate; keep router and DNS settings protected |

Phishing, smishing and vishing need you to **respond** to a message; pharming needs **no action** beyond visiting a site you trust.

### Firewalls: hardware and software

A **firewall** checks incoming and outgoing traffic against a set of rules and blocks traffic that is not allowed, such as connections to known malicious sites, unauthorised remote access, or malware sending stolen data out.

- A **hardware firewall** is a separate device (often built into the router) between the internal network and the internet. It protects every device on the network at once and uses none of the computers' processing power. It cannot see traffic that passes between devices inside the network, and it costs more to buy and set up.
- A **software firewall** is a program on each computer. It can control which applications may use the network and protects a laptop on any network it joins. It must be installed and updated on every device and uses that device's resources.

### Advantages and disadvantages of preventing misuse

| Method | Advantage | Disadvantage |
|---|---|---|
| Strong passwords | Free and simple | Users forget them, reuse them or write them down |
| Two-factor authentication | A stolen password alone is not enough | Slower log-in; needs a phone or token that can be lost |
| Biometrics | Cannot be forgotten or easily shared | Equipment cost; can fail (injury, poor light); stored biometric data is itself personal data |
| Anonymising/aggregating | Data can still be used for research and statistics | Detail is lost; poorly anonymised data can sometimes be re-identified by combining it with other data |
| Firewalls | Block unauthorised traffic automatically | Badly set rules block genuine traffic or let threats through; cannot stop a user handing details over voluntarily |

### Worked example 1

*A hospital wants to publish a report on waiting times using patient records. Explain two ways it can keep patient data confidential.* **[4]**

1. **Anonymise** the records by removing names, patient numbers and addresses before analysis [1], so readers cannot link any figure to a named patient [1].
2. **Aggregate** the results, publishing totals and averages by department or age group [1], so no individual's record appears in the report [1].

Each way needs the method *and* how it protects confidentiality.

## 5.2 Malware

**Malware** is software written to harm a computer system or its user, or to gain access without permission.

### Types of malware

| Type | What it does |
|---|---|
| **Trojan** | Disguised as useful or legitimate software. Once installed it runs a hidden harmful payload, often opening a "back door" for an attacker. It does not copy itself to other computers. |
| **Worm** | A standalone program that **replicates itself** and spreads across a network on its own, with no host file and no user action. Its copies can slow networks by using bandwidth. |
| **Spyware** | Secretly monitors what the user does (sites visited, keys pressed, passwords typed) and sends the data to a third party. A keylogger is one form. |
| **Adware** | Displays unwanted adverts, pop-ups or browser redirects, often bundled with free software, and may track browsing to target the adverts. |
| **Rootkit** | Gives an attacker administrator-level ("root") control while **hiding its own presence** and that of other malware from the user and from security software. |
| **Malicious bots** | Malware that lets an attacker control an infected computer remotely. Many such computers form a **botnet**, used to send spam or flood a server with traffic. |
| **Ransomware** | Encrypts the victim's files or locks the system, then demands a payment for the key. Paying does not guarantee the files come back. |

### Uses of malware

- **Fraud**: spyware captures banking logins so money can be moved; bots generate fake clicks on paid adverts.
- **Theft**: of money, personal data, identities, or files held to ransom.
- **Industrial espionage**: a trojan or spyware planted in a rival company copies designs, price lists or plans.
- **Sabotage**: worms or other malware damage, delete or disrupt systems, for example stopping a factory's control systems or taking a website offline with a botnet.

### Consequences of malware

| For organisations | For individuals |
|---|---|
| Lost income while systems are down | Money stolen from accounts |
| Cost of investigation, recovery and new security | Identity theft and damaged credit |
| Loss or corruption of data | Loss of personal files and photos |
| Damaged reputation; customers leave | Privacy invaded, e.g. messages or webcam accessed |
| Legal action or fines if customer data leaks | Slow or unusable devices |
| Loss of competitive advantage after espionage | |

### Malware prevention: software methods

- **Anti-malware (anti-virus) software** scans files, emails and downloads. **Signature-based** detection compares files with a database of known malware, so it needs regular updates and cannot recognise brand-new malware. **Heuristic** detection looks for suspicious behaviour, so it can catch new malware but may flag safe files (false positives). Detected files are deleted or **quarantined**.
- **Firewalls** block unauthorised connections, including bots contacting their controller.
- **Software updates (patches)** close the weaknesses that worms exploit.

### Malware prevention: physical methods

- Don't connect unknown USB sticks or other removable media; organisations can **disable or physically lock USB ports**.
- **Restrict physical access** to servers and computers (locked rooms, swipe cards) so nobody can install malware by hand.
- Keep highly sensitive systems **air-gapped**, with no connection to other networks.
- Keep **backups offline** (disconnected from the network) so ransomware cannot encrypt them too.

### Advantages and disadvantages of malware prevention

| Method | Advantage | Disadvantage |
|---|---|---|
| Anti-malware software | Automatic, real-time scanning; removes or quarantines threats | Needs constant updates and a subscription; uses processing power; cannot detect every new threat |
| Disabling USB ports | Removes a common route for malware into a network | Staff lose a convenient way to move files |
| Air-gapping | Network-spread malware cannot reach the system | Data transfer is slow and manual; removable media still pose a risk |
| Offline backups | Data can be restored without paying a ransom | Backups must be made regularly and tested; recent work may be lost |

### Worked example 2

*Explain why a rootkit is harder to deal with than adware.* **[3]**

A rootkit runs with administrator-level access [1], so it can alter the operating system and **hide itself and other malware** from the user and from anti-malware scans [1]. Adware reveals itself through visible adverts and can usually be removed like other software; a rootkit may need specialist tools or a full operating system reinstall [1].

## Common errors

- Calling phishing malware. It is a trick to make a person hand over data.
- Describing pharming as "clicking a link in an email". That is phishing; pharming redirects you even when you type the correct address.
- Saying a trojan spreads itself. Worms self-replicate; trojans rely on the user installing them.
- Confusing anonymising (removing identifiers from each record) with aggregating (combining records into totals).

## Next steps

Test recall with the [revision notes](/resources/a-level-cambridge-ict-esecurity-revision-notes/), then try the [practice questions](/resources/a-level-cambridge-ict-esecurity-practice/). See also [Hardware and Software](/resources/a-level-cambridge-ict-hardware-and-software/).

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 3, Cambridge University Press & Assessment. Topic 5: eSecurity (5.1 Personal data; 5.2 Malware).
