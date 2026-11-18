---
title: "Cambridge A Level Computer Science (9618): Data Security -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 6: Security, privacy and data integrity"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 6.1
syllabusTopics:
  - qualification: "a-level"
    topic: "security-privacy-and-data-integrity"
    subtopic: "data-security"
description: "Condensed notes on security, privacy and integrity, network threats and protective measures for Cambridge AS Computer Science 9618 6.1, with a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **6.1 Data Security** (AS content, Paper 1). The [Data Security study guide](/resources/cambridge-a-level-computer-science-9618-data-security/) explains each point in full; the [Data Security practice questions](/resources/cambridge-a-level-computer-science-9618-data-security-practice/) give exam-style practice. Section 6.2 is in the [Data Integrity revision notes](/resources/cambridge-a-level-computer-science-9618-data-integrity-revision-notes/).

## Three terms, three questions

| Term | Ask yourself | Example |
|---|---|---|
| Security | Is the data protected from loss, damage and unauthorised access? | Locked accounts, firewall, backups |
| Privacy | Is personal data used only by those entitled to, for agreed purposes? | Staff only view records they need for their job |
| Integrity | Is the data accurate, complete and consistent? | Stored dose matches the prescription |

Security is the toolkit; privacy and integrity are two of the things it protects. A privacy breach can happen with no security breach (an authorised user misusing access).

## Why secure the system as well as the data?

- An attacker who controls the system can install malware, capture data as it is typed or decrypted, alter software, or use the computer to attack others.
- If the system is unusable, the data is unavailable even if it is undamaged.
- Most attacks on data start by getting into the system.

## Threats

| Threat | Key feature to state |
|---|---|
| Virus | Attaches to another file; copies itself when that file runs; can corrupt or delete data |
| Spyware | Secretly monitors activity (e.g. key presses) and sends it to a third party |
| Hacker | Gains unauthorised access to steal, change or delete data |
| Phishing | Fake message tricks the user into giving details or following a link |
| Pharming | Malicious code or a tampered DNS entry redirects a correctly typed address to a fake site |

## Measures and how they work

| Measure | How it protects | Limitation |
|---|---|---|
| User accounts | Identify each user so rights can be applied and activity logged | Only as strong as the password |
| Passwords | Secret known only to the user | Guessed, shared or captured by spyware |
| Biometrics | Physical feature that cannot be forgotten or easily shared | False rejections; cannot be changed if stolen |
| Digital signature | Made with sender's private key, checked with sender's public key: proves sender and that the message is unaltered | Does not hide content |
| Firewall | Allows or blocks traffic by rules (e.g. address, port) | Cannot stop threats in allowed traffic, such as an opened attachment |
| Anti-virus | Scans for known patterns and suspicious behaviour; removes or quarantines | Needs regular updates; new malware may be missed |
| Anti-spyware | Detects and removes monitoring software | Needs regular updates |
| Encryption | Data unreadable without the key, at rest and in transit | Does not stop interception or deletion |
| Access rights | Limit each user or group to no access, read only or read/write | Wrongly set rights give too much access |

## Matching threats to restriction methods

| Threat | Methods that restrict it |
|---|---|
| Virus | Anti-virus updated regularly; do not open unexpected attachments; scan removable media |
| Spyware | Anti-spyware; firewall blocking unknown outgoing connections; on-screen keypads or two-step login so a captured password is not enough |
| Hacker | Firewall; strong passwords with lockout after failed attempts; keep software updated; access rights; encryption |
| Phishing | User training (check sender, never follow login links); email filtering; two-step authentication |
| Pharming | Check for a secure connection and the correct address in the browser; anti-virus to remove the redirecting code; use a trusted DNS service |

## Protecting the data itself

- **Encryption**: stolen or intercepted data cannot be understood without the key.
- **Access rights**: users see and change only what their role needs.
- Backups (from 8.2 and general good practice) let data be recovered after loss or damage.

## Stand-alone versus network

- **Stand-alone PC**: account password, anti-virus/anti-spyware, software firewall, disk encryption, backup.
- **Network**: central user accounts and group access rights, hardware firewall at the boundary, anti-virus on all machines and the mail server, encrypted remote connections.

## Exam traps

- A firewall filters traffic; it does not remove viruses.
- Encryption does not stop theft; it stops stolen data being read.
- Phishing needs the user to respond to a message; pharming works even when the address is typed correctly.
- A digital signature authenticates; it does not encrypt the message.
- Give the **how** for each measure: "anti-virus" alone is a name, not a description.
- Privacy is not a synonym for security.

## Self-test

1. Define data integrity.
2. Give an example of a privacy breach that is not a security breach.
3. Give one reason to protect the computer system and not just the data.
4. How does a virus differ from spyware?
5. A user types the bank's correct address but arrives at a fake site. Name the threat.
6. State what a firewall uses to decide whether to block traffic.
7. Why must anti-virus software be updated regularly?
8. Which key is used to check a digital signature?
9. Give one drawback of biometrics.
10. A laptop with an encrypted disk is stolen. What does encryption protect, and what does it not?
11. State the purpose of access rights.
12. Give two ways to reduce the risk from phishing.

**Answers**

1. Data that is accurate, complete and consistent.
2. A member of staff with valid access looks at a record they have no work reason to see.
3. An attacker in control of the system can capture data as it is entered or decrypted, install malware or use it to attack others.
4. A virus copies itself by attaching to other files and may damage data; spyware monitors activity and sends it to a third party.
5. Pharming.
6. Configured rules, for example about IP addresses or ports.
7. New malware appears constantly; it can only detect patterns that are in its database.
8. The sender's public key.
9. A genuine user may be rejected / a biometric cannot be changed if its data is stolen.
10. The data cannot be read without the key; it does not stop the laptop and its data being taken.
11. To control what each user or group can do (none, read only, read/write) with each file or table.
12. Any two: train users to check senders and not follow login links; email filtering; two-step authentication.
