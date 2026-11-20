---
title: "Cambridge O Level Computer Science (2210): Cyber security -- Revision Notes"
seoTitle: "Cambridge O Level CS 2210 Cyber Security Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 5 – The internet and its uses"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 5.3
syllabusTopics:
  - qualification: "o-level"
    topic: "the-internet-and-its-uses-2210"
  - qualification: "o-level"
    topic: "the-internet-and-its-uses-2210"
    subtopic: "cyber-security-2210"
description: "Revision notes for Cambridge O Level Computer Science 2210 section 5.3: each cyber security threat with its process and aim, the solutions that counter them, and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Condensed notes for syllabus section 5.3, Cyber security. For the full explanations and a model answer, use the [Cyber security study guide](/resources/cambridge-o-level-computer-science-2210-cyber-security/).

## Syllabus checklist

- The processes involved in, and the aim of, these threats: brute-force attack, data interception, distributed denial of service (DDoS) attack, hacking, malware (virus, worm, Trojan horse, spyware, adware, ransomware), pharming, phishing and social engineering.
- How these solutions keep data safe: access levels, anti-malware (anti-virus and anti-spyware), authentication (username and password, biometrics, two-step verification), automating software updates, checking the spelling and tone of communications, checking the URL attached to a link, firewalls, privacy settings, proxy servers and the secure socket layer (SSL) security protocol.

## Threats: process and aim

| Threat | Process (how) | Aim (why) |
|---|---|---|
| Brute-force attack | Software tries a huge number of passwords or keys in turn | Find the password or key and gain access |
| Data interception | Data is captured as it travels across a network (packet sniffer) | Read or copy sensitive data |
| DDoS attack | Many computers (a botnet) send a flood of requests to one server | Make the site or service unavailable |
| Hacking | Unauthorised access to a computer system | Steal, change or delete data, or misuse the system |
| Pharming | Malicious code redirects the user to a fake website, even if the correct address is typed | Capture login or payment details |
| Phishing | Emails or texts that look genuine, with a link to a fake site | Trick the user into giving personal data |
| Social engineering | Manipulating people to give information or take an action | Obtain passwords or access |

## Malware types

| Type | Key point |
|---|---|
| Virus | Attaches to a file or program; spreads when the file is run or shared |
| Worm | Spreads by itself across a network, with no host file |
| Trojan horse | Pretends to be useful so that the user installs it |
| Spyware | Secretly records what the user types or does |
| Adware | Shows unwanted adverts and may track browsing |
| Ransomware | Locks or encrypts files and demands a ransom |

Memory trick for the three that spread or hide: **virus** needs a **host**; **worm** needs **nothing**; **Trojan** needs the **user to be fooled**.

## Solutions

| Solution | What it does |
|---|---|
| Access levels | Give each user only the rights their role needs |
| Anti-malware | Scans and removes malware; needs regular updates |
| Authentication | Proves who the user is |
| Automating software updates | Installs security patches that close weaknesses |
| Checking spelling and tone | Spots false messages by poor spelling or an urgent tone |
| Checking the URL attached to a link | Spots fake addresses before clicking |
| Firewall | Examines traffic in and out of a network and blocks what breaks the rules |
| Privacy settings | Limit who can see personal data |
| Proxy server | Sits between the user and the web server; filters and can hide the user's address |
| SSL | Encrypts data between browser and server |

### Authentication methods

| Method | Strength | Weakness |
|---|---|---|
| Username and password | Cheap, simple | Can be guessed, shared or stolen |
| Biometrics | Hard to copy; cannot be forgotten | Needs hardware; can fail; cannot be changed if copied |
| Two-step verification | A stolen password is not enough | Needs a phone or device; slower |

## Which solution for which threat

| Threat | Solutions |
|---|---|
| Brute-force | Strong passwords, two-step verification |
| Interception | SSL and encryption |
| DDoS | Firewall, proxy server |
| Hacking | Firewall, authentication, access levels, updates |
| Malware | Anti-malware, updates, firewall |
| Pharming | Anti-malware, checking the URL |
| Phishing | Checking spelling, tone and URL |
| Social engineering | Training, privacy settings, access levels |

## Answer templates

**Describe a threat (3 marks):** name it; say how it works; say what the attacker wants.

**Explain how to keep data safe in a scenario (4 marks):** two solutions; for each, what it does and how it blocks the threat in the scenario.

**Compare phishing and pharming (3 marks):** phishing relies on a message and a click; pharming redirects automatically even when the correct address is typed; both aim to steal personal data.

**Explain how two-step verification protects an account (3 marks):** needs two separate steps; the second is something like a one-time code sent to the user's phone; a stolen password alone does not give access.

## Exam traps

- **Firewall as anti-virus.** A firewall filters traffic. Anti-malware removes malware.
- **Virus and worm swapped.** A worm spreads by itself.
- **Phishing and pharming swapped.** Pharming needs no click on a link.
- **A bare name.** "Ransomware" alone earns nothing; give process and aim.
- **Hacking called a type of malware.** Hacking is unauthorised access.
- **Biometrics called impossible to copy.** Say "harder to copy".

## Self-test

1. What is the aim of a DDoS attack?
2. How does a brute-force attack work?
3. What is the difference between a virus and a worm?
4. What does spyware do?
5. What does ransomware demand?
6. How does pharming differ from phishing?
7. Give one sign that an email is a phishing attempt.
8. What does a firewall do?
9. Why do software updates help security?
10. Give one advantage and one disadvantage of biometrics.
11. What does SSL do?
12. What is the purpose of access levels?

**Answers**

1. To make a website or service unavailable to genuine users.
2. Software tries a very large number of possible passwords or keys until one works.
3. A virus attaches to a host file and spreads when it is run or shared; a worm spreads by itself across a network.
4. It secretly records what the user does, such as the keys pressed, and sends it to the attacker.
5. Payment before the files are released.
6. Pharming redirects the user to a fake site automatically, even when the correct address is typed; phishing relies on a message with a link that the user clicks.
7. Any one: poor spelling; urgent or threatening tone; a link whose address does not match the real organisation.
8. It examines traffic in and out of a network and blocks traffic that does not meet its rules.
9. They install security patches that close weaknesses attackers could use.
10. Advantage: hard to copy or forget. Disadvantage: needs special hardware, may fail, or cannot be changed if copied.
11. It encrypts data sent between the browser and the web server.
12. To give each user only the rights they need, so they cannot see or change other data.
