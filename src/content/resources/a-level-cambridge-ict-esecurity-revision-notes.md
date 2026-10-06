---
title: "Cambridge A Level Information Technology (ICT): eSecurity (9626) -- Revision Notes"
seoTitle: "Cambridge A Level ICT 9626 eSecurity Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge AS & A Level IT 9626 eSecurity: personal data, confidentiality, phishing types, firewalls, malware and prevention."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

For full explanations and worked examples, read the [eSecurity study guide](/resources/a-level-cambridge-ict-esecurity/) first. These notes condense **topic 5, eSecurity**, of Cambridge International AS & A Level Information Technology (9626), following the syllabus for examination in 2025, 2026 and 2027 (version 3). They cover sections **5.1 Personal data** and **5.2 Malware**. Topic 5 is an **AS Level** topic, examined in **Paper 1 (Theory)**; Paper 2 (Practical) also expects you to apply this knowledge.

Then test yourself with the [eSecurity practice questions](/resources/a-level-cambridge-ict-esecurity-practice/). Course hub: [Cambridge A Level ICT](/boards/cambridge/a-level/ict/). Checklist: [9626 checklist](/checklists/cambridge/a-level/ict/). Encryption is revised with topic 1 in the [Data Processing revision notes](/resources/a-ict-data-processing-revision-notes/). Find your gaps with a [free diagnostic](/diagnostics/).

## 5.1 Personal data: definitions

| Term | Definition |
|---|---|
| Personal data | Information about a living person who can be identified from it, alone or combined with other data |
| Confidential | Seen only by people who are entitled to see it |
| Secure | Protected from access, change or loss by anyone unauthorised |
| Geotag | GPS location stored as metadata in a photo or video file |
| Anonymising | Removing or replacing identifiers (name, ID number, address) from each record |
| Aggregating | Combining many records into totals or averages so no individual record is shown |
| Duty of confidence | The obligation not to disclose information that was shared on the understanding it stays private |

**Examples of personal data:** name, address, date of birth, phone number, email, ID number, bank details, photo, location history, medical records.

**Why keep it confidential:** identity theft, fraud, physical danger (stalking, burglary), discrimination, and the legal and reputational damage to an organisation that leaks it.

### Method in steps: keeping data confidential

1. **Geotags.** Turn off location tagging on the camera, or strip the metadata before posting.
2. **Anonymise** data used for research or testing.
3. **Aggregate** data that will be published as statistics.
4. **Duty of confidence measures:** confidentiality clauses, staff training, need-to-know access, consent before sharing, secure disposal of records.

### Network security measures (keeping data secure)

- User IDs and strong passwords
- Two-factor authentication
- Biometrics
- Access rights (levels of permission)
- Encryption (topic 1)
- Hardware and software firewalls
- Regular software updates

## How data is gathered by unauthorised people

| Attack | Channel | User action needed? | Prevention |
|---|---|---|---|
| Phishing | Email with link to fake site | Yes: clicks and types details | Check sender; don't click; type address yourself; spam filter |
| Smishing | SMS text message | Yes: follows link or calls number | Ignore links; contact firm on official number |
| Vishing | Phone call or voicemail | Yes: tells caller details | Hang up; call back on official number; never give PIN or password |
| Pharming | Malicious code or tampered DNS redirects browser | No: correct address typed | Anti-malware; check address bar and certificate; secure router/DNS |

### Must-know distinction: hardware vs software firewall

| Hardware firewall | Software firewall |
|---|---|
| Separate device, often in the router | Program on each computer |
| Protects every device on the network | Protects one device, on any network it joins |
| Uses none of the computers' resources | Uses that computer's processing power |
| Cannot see traffic between internal devices | Can control which applications use the network |
| Higher cost, one place to configure | Must be installed and updated on every device |

A firewall **filters traffic**. It does not remove malware and cannot stop a person giving their details to a scammer.

### Advantages and disadvantages (preventing misuse)

| Method | + | − |
|---|---|---|
| Strong passwords | Free, simple | Forgotten, reused or written down |
| Two-factor authentication | Stolen password alone is useless | Slower; needs phone or token |
| Biometrics | Can't be forgotten or lent | Cost; can fail; biometric data is itself personal data |
| Anonymise/aggregate | Data still usable | Detail lost; re-identification possible |
| Staff training | Targets the human weakness | Time, cost, must be repeated |
| Firewalls | Automatic blocking | Wrong rules block genuine traffic or let threats in |

## 5.2 Malware

| Type | Key feature | Self-replicates? |
|---|---|---|
| Trojan | Looks legitimate; hidden payload; often opens a back door | No |
| Worm | Standalone; spreads across networks by itself; uses bandwidth | Yes |
| Spyware | Secretly records activity (e.g. keystrokes) and sends it to a third party | No |
| Adware | Unwanted adverts, pop-ups, redirects; often bundled with free software | No |
| Rootkit | Administrator-level access; hides itself and other malware | No |
| Malicious bot | Infected computer controlled remotely; part of a botnet | Can spread, depending on type |
| Ransomware | Encrypts files or locks system; demands payment | No |

### Uses of malware

- **Fraud**: stolen logins used to move money; fake advert clicks by bots.
- **Theft**: money, data, identities, intellectual property.
- **Industrial espionage**: spyware or trojans copy a rival's plans and designs.
- **Sabotage**: disrupting or damaging systems, e.g. a botnet flooding a website.

### Consequences

- **Organisations:** downtime and lost income, recovery costs, data loss, reputational damage, fines or legal action, loss of competitive advantage.
- **Individuals:** money stolen, identity theft, lost files and photos, privacy invaded, unusable devices.

### Prevention

**Software:** anti-malware (signature-based and heuristic scanning, quarantine), anti-spyware, ad blockers, firewalls, email filtering, updates/patches.

**Physical:** don't use unknown removable media; disable or lock USB ports; lock server rooms and restrict physical access; air-gap critical systems; keep backups offline.

| Must-know distinction | |
|---|---|
| Signature-based detection | Matches known malware; needs updates; misses new malware |
| Heuristic detection | Spots suspicious behaviour; can catch new malware; more false positives |
| Worm vs trojan | Worm spreads itself; trojan relies on a user installing it |
| Phishing vs pharming | Phishing needs the user to respond; pharming redirects with no user action |
| Malware vs social engineering | Malware is software; phishing, smishing and vishing trick people |

### Advantages and disadvantages (malware prevention)

| Method | + | − |
|---|---|---|
| Anti-malware | Automatic, real-time | Needs updates and subscription; slows device; not perfect |
| Updates/patches | Closes known holes | Restarts; possible compatibility problems |
| Disabling USB ports | Blocks a common entry route | Inconvenient for staff |
| Air-gapping | Network malware can't reach it | Slow, manual data transfer |
| Offline backups | Recover without paying ransom | Must be regular and tested; latest work may be lost |

## Worked reminders

**"Describe vishing." [2]**
A phone call or voicemail in which the caller pretends to be from a trusted organisation such as a bank [1] to persuade the person to reveal personal details such as account numbers or passwords [1].

**"Explain how a software firewall could limit the damage from a malicious bot." [2]**
The firewall checks outgoing traffic against its rules [1], so it can block the bot's connection to the attacker's control server, stopping the computer being used in a botnet or sending data out [1].

**"Give one advantage and one disadvantage of keeping backups offline." [2]**
Advantage: ransomware on the network cannot reach and encrypt them, so files can be restored without paying [1]. Disadvantage: they must be made and updated by hand, so work since the last backup may be lost [1].

### Method in steps: scenario questions

1. Identify the **threat** in the scenario (e.g. a text with a link = smishing; files encrypted = ransomware).
2. Name a **specific** prevention method that matches that threat.
3. Explain **how** it stops or limits the threat in this context.
4. For "evaluate" or "discuss", add a **drawback** and finish with a **judgement**.

## Quick self-test

1. State what makes data "personal data".
2. Give one reason a photo posted online could reveal where someone lives.
3. Distinguish between anonymising and aggregating.
4. Name the attack that uses an SMS message.
5. Which attack can succeed even when the user types the correct web address?
6. Give one advantage of a hardware firewall over a software firewall.
7. Which type of malware spreads across a network without any user action?
8. What does ransomware do?
9. Name the malware used to control many computers as one network.
10. Give one disadvantage of signature-based anti-malware.
11. State one physical method of preventing malware.
12. Give one use of malware by a business against a competitor.

### Answers

1. It relates to a living person who can be identified from it, alone or combined with other data.
2. A geotag in the file's metadata can store the GPS location where it was taken.
3. Anonymising removes identifiers from each record; aggregating combines records into totals or averages.
4. Smishing.
5. Pharming.
6. It protects every device on the network at once (or uses none of the computers' processing power).
7. A worm.
8. Encrypts files or locks the system and demands payment for access.
9. Malicious bots (a botnet).
10. It cannot detect new malware that is not yet in its database (and needs frequent updates).
11. Disable or lock USB ports; restrict access to server rooms; air-gap systems; keep offline backups.
12. Industrial espionage, e.g. spyware copying a rival's product designs.

## Where marks are usually lost

- Naming a method ("use a firewall") without saying **how** it stops the specific threat in the question.
- Describing pharming as a fake email link; that is phishing.
- Saying a trojan replicates itself.
- Calling phishing, smishing or vishing "malware" rather than tricks that target people.
- Giving the same point twice in an advantages/disadvantages answer, e.g. "cheap" and "low cost".
- Answering "evaluate" questions with only advantages; you need both sides and a conclusion.
- Writing "anti-virus stops all malware"; new malware can get past signature checks.
- Confusing confidentiality (who is allowed to see the data) with security (stopping unauthorised access).
- Forgetting that ransomware victims may not get files back even after paying.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 3, Cambridge University Press & Assessment. Topic 5: eSecurity (5.1 Personal data; 5.2 Malware).
