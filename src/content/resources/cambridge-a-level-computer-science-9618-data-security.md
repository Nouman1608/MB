---
title: "Cambridge A Level Computer Science (9618): Data Security"
resourceType: "study-guides"
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
description: "Security, privacy and integrity compared, network threats, and how each protective measure works and fails, for Cambridge AS Computer Science 9618 6.1."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers **6.1 Data Security** in the Cambridge International AS & A Level Computer Science 9618 syllabus. It is AS content, examined on Paper 1. The [Security, privacy and data integrity study guide](/resources/cambridge-a-level-computer-science-security-privacy-and-data-integrity-study-guide/) introduces the whole of Topic 6 with short definitions; this page concentrates on 6.1 and explains **how** each measure works, what it cannot do, and how to match measures to threats in a scenario. Use the [Data Security revision notes](/resources/cambridge-a-level-computer-science-9618-data-security-revision-notes/) for quick recall and the [Data Security practice questions](/resources/cambridge-a-level-computer-science-9618-data-security-practice/) to test yourself.

## What 6.1 asks you to do

- explain the difference between the **security**, **privacy** and **integrity** of data
- appreciate the need for both the security of the **data** and the security of the **computer system**
- describe security measures for systems from a stand-alone PC to a network: user accounts, passwords, authentication techniques such as digital signatures and biometrics, firewall, anti-virus software, anti-spyware and encryption
- understand the threats posed by networks and the internet: malware (virus, spyware), hackers, phishing and pharming
- describe methods that restrict the risks posed by those threats
- describe security methods that protect the data itself, including encryption and access rights.

Topic 17 at A Level goes into how encryption, digital certificates and protocols such as TLS work in detail. At AS you need the purpose and effect of each measure.

## Security, privacy and integrity: one scenario, three questions

The three words are easiest to separate if you ask a different question for each. Take an invented online pharmacy that stores customers' names, addresses and prescriptions.

| Term | Question it answers | Pharmacy example of failure |
|---|---|---|
| **Security** | Is the data protected from loss, damage and access by people who should not have it? | A hacker copies the customer table; a disk fails with no backup |
| **Privacy** | Is personal data seen and used only by those entitled to, for the purposes the person agreed to? | A member of staff with legitimate access looks up a neighbour's prescription out of curiosity |
| **Integrity** | Is the data accurate, complete and consistent? | A dose is mistyped as 500 instead of 50 |

Notice that the privacy failure in the table involves no security breach at all: the member of staff had a valid login. Privacy is about **appropriate use**, and laws on data protection set out what organisations may do with personal data. Security is the set of **measures** that help achieve privacy and integrity, but it is not the same thing as either.

## Securing the data and securing the system

The syllabus asks you to appreciate why **both** matter.

- **Data** can be stolen, read, altered or deleted. Encryption and access rights protect it directly, and backups allow recovery.
- **The system** (hardware, operating system and software) can be taken over, damaged or made unusable. A system controlled by an attacker can have new malware installed, be used to attack other computers, or record everything typed into it, so even data that is encrypted at rest can be captured when it is decrypted for use.

A strong answer makes the link: protecting the system protects the data, because almost every attack on data begins with getting into the system.

## Threats from networks and the internet

| Threat | How it works | What it can do |
|---|---|---|
| **Virus** | Program that attaches itself to another file and copies itself when that file is run or opened | Corrupt or delete files, use up storage and processing time, spread to other computers |
| **Spyware** | Software installed without the user's knowledge that monitors activity, for example recording key presses | Sends passwords, card numbers and browsing activity to a third party |
| **Hacker** | Person who gains unauthorised access, for example by guessing weak passwords or exploiting unpatched software | Steal, change or delete data; install malware |
| **Phishing** | Email or message pretending to come from a trusted organisation, asking the user to reply with details or follow a link to a fake site | User hands over login details or personal data voluntarily |
| **Pharming** | Malicious code on the user's computer, or a tampered DNS entry, redirects a correctly typed address to a fake site | User enters details into a site that looks genuine |

The key difference between the last two: phishing needs the user to **act on a message**; pharming redirects the user even when they **type the correct address** themselves.

## How each measure works, and what it cannot do

### User accounts and passwords

Each user has an account with a username and password, so the system can identify who is logged in and apply that person's access rights and record their activity. Weaknesses: passwords can be guessed, shared, written down or captured by spyware. Restrict the risk by requiring long passwords with mixed character types, locking an account after several failed attempts, and requiring a change if a password may have been revealed.

### Authentication: biometrics and digital signatures

**Authentication** means confirming that a user, or the sender of a message, is who they claim to be.

- **Biometrics** use a physical characteristic such as a fingerprint, face or iris. The characteristic cannot be forgotten or easily handed to someone else. However, readings vary slightly each time, so the system can wrongly reject a genuine user or, more rarely, accept the wrong person; and a biometric cannot be changed if its stored data is stolen.
- A **digital signature** is attached to an electronic message or document. It is produced using the **sender's private key** and checked by the receiver using the **sender's public key**. A valid signature shows who sent the message and that it has not been altered since it was signed. It does **not** hide the content; that is the job of encryption.

Authentication is often strengthened by requiring two different kinds of evidence, for example a password plus a code sent to the user's phone, so a stolen password alone is not enough.

### Firewall

A **firewall** is hardware or software that sits between a computer or network and the outside network and examines each item of traffic, allowing or blocking it according to rules, for example by IP address or port. It can block attempts by hackers to connect and stop unauthorised programs sending data out. It cannot stop a threat that arrives through traffic it allows, such as a virus in an email attachment the user opens.

### Anti-virus and anti-spyware

**Anti-virus software** scans files and memory, comparing them against a database of known virus patterns and looking for suspicious behaviour; infected files are removed or **quarantined**. **Anti-spyware** does the same job for spyware, detecting and removing programs that monitor the user. Both are only as good as their latest update, because a brand-new piece of malware will not be in the database yet.

### Encryption

**Encryption** uses an algorithm and a key to turn plaintext into ciphertext. Anyone without the correct key who obtains the data sees only meaningless ciphertext. It protects data **stored** (a stolen laptop with an encrypted disk) and data **in transit** (details sent to a website). It does not stop data being intercepted, copied or deleted; it only stops it being understood. If the key is lost, the owner cannot read the data either.

### Access rights

**Access rights** set what each user or group may do with each file, folder or table: no access, read only, or read and write (which may include create and delete). They limit the damage any one account can cause, whether through a mistake, a dishonest employee or a hacker who steals that account's password.

## From a stand-alone PC to a network

| Setting | Typical measures |
|---|---|
| Stand-alone PC at home | Password on the user account, anti-virus and anti-spyware kept updated, software firewall, encrypted disk, regular backup |
| Office network | Individual user accounts managed centrally, access rights by group, hardware firewall where the network meets the internet, anti-virus on every machine and on the mail server, encrypted connections for remote staff |

## Worked example: an annotated answer

*A small accountancy firm's staff work from home and connect to the office network. Describe **two** methods the firm could use to restrict the risk from phishing and spyware.* **[4]**

> Staff could be trained to check the sender's address and to never follow links in emails asking for login details, and instead to type the firm's address themselves [1]; this means a phishing email cannot get them to enter their password on a fake site [1].
> Anti-spyware software could be installed on every home computer and updated regularly [1], so programs that record key presses are detected and removed before they can send passwords to a third party [1].

Each method gets a mark for **what** is done and a mark for **how it reduces the risk**. Naming "anti-spyware" alone earns only half.

## Common mistakes

- Treating privacy and security as the same word. Privacy is about appropriate use; security is protection.
- Saying a firewall removes viruses. It filters traffic; anti-virus software removes viruses.
- Saying encryption prevents data being stolen. It stops stolen data being understood.
- Mixing up phishing and pharming.
- Describing a digital signature as a scanned handwritten signature.
- Listing measures without linking each one to the threat in the question.

## Exam technique

**Describe** questions on measures need what the measure is and how it protects. **Explain the difference** questions need a contrasting point for each term, ideally with the same example used for both. For **scenario** questions, pick measures that fit the setting (a home PC does not need a central account server) and connect every point to the named threat.
