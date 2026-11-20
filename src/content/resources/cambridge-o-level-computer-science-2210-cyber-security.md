---
title: "Cambridge O Level Computer Science (2210): Cyber security"
seoTitle: "Cambridge O Level CS 2210 Cyber Security Guide"
resourceType: "study-guides"
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
description: "Study guide to Cambridge O Level Computer Science 2210 section 5.3: cyber security threats such as phishing, pharming, DDoS and malware, and the solutions used to keep data safe."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Section 5.3 of Cambridge O Level Computer Science 2210 has two learning statements. Candidates should **describe the processes involved in, and the aim of carrying out, a range of cyber security threats**, and **explain how a range of solutions are used to help keep data safe** from those threats. Questions usually give a scenario and ask you to name a threat, describe how it works or choose a suitable solution, so you need both the process and the aim for each threat.

## Part 1: the threats

The syllabus lists eight kinds of threat.

### Brute-force attack

**Process:** an attacker uses software to try a very large number of possible passwords or keys, one after another, until one works. Short, simple passwords are found quickly.

**Aim:** to discover a password or encryption key and gain access to an account or to read protected data.

### Data interception

**Process:** data is captured while it travels across a network, using a device or software known as a packet sniffer. On an unsecured wireless network, this can be done by anyone within range.

**Aim:** to read or copy the data, for example passwords, card numbers or private messages, so that it can be misused. Encrypted data that is intercepted is meaningless without the key.

### Distributed denial of service (DDoS) attack

**Process:** a very large number of requests are sent to a web server at the same time, usually from many infected computers (called a botnet) controlled by the attacker. The server cannot cope with the traffic and slows down or stops responding to genuine users.

**Aim:** to make a website or service unavailable, for example to cost a business sales, to damage its reputation or to demand money.

### Hacking

**Process:** a person gains unauthorised access to a computer system or network, for example by guessing a password or using a weakness in the software.

**Aim:** to steal, delete or change data, or to misuse the system. (Hacking is the unauthorised access. Other threats may be used to achieve it.)

### Malware

**Malware** is malicious software. The syllabus lists six types.

| Type | How it works | Aim |
|---|---|---|
| Virus | Attaches itself to a file or program and spreads when the infected file is run or shared | Damage or delete files, or disrupt the computer |
| Worm | Spreads by itself across a network, with no need for a host file or for user action | Use up bandwidth and resources, and spread to as many computers as possible |
| Trojan horse | Pretends to be a useful or harmless program, so the user installs it | Open the way for an attacker, steal data or install other malware |
| Spyware | Secretly records what the user does, such as the keys they press | Collect passwords, card details and other private information |
| Adware | Displays unwanted advertisements, and may track browsing | Earn money from the adverts or collect data about the user |
| Ransomware | Locks or encrypts the user's files | Demand payment (a ransom) before the files are released |

### Pharming

**Process:** malicious code installed on a user's computer (or a change to a DNS record) redirects the user to a fake website even when they type the correct web address.

**Aim:** to capture login details or payment details that the user types into the fake site, which looks identical to the real one.

### Phishing

**Process:** the attacker sends many emails or text messages that appear to come from a trusted organisation, such as a bank. The message urges the user to click a link, which leads to a fake website.

**Aim:** to trick the user into giving personal information such as passwords or card numbers.

**Pharming and phishing compared:** phishing needs the user to click a link in a message. Pharming redirects the user automatically, even when the correct address is typed.

### Social engineering

**Process:** an attacker manipulates people, instead of attacking the technology, so that they give away information or perform an action. Examples are pretending to be an IT technician on the phone, or leaving an infected memory stick where an employee will find it.

**Aim:** to obtain passwords, to enter a building or network, or to get the user to install malware. Phishing is one form of social engineering.

## Part 2: the solutions

The syllabus lists ten solutions. For each one, know what it does and which threat it helps against.

| Solution | How it keeps data safe | Helps against |
|---|---|---|
| **Access levels** | Different users are given different rights, such as read only, edit or full control. A user sees only what their role needs. | Hacking, misuse by insiders, accidental deletion |
| **Anti-malware** (anti-virus and anti-spyware) | Scans files and the system, compares them with known malware and removes or quarantines what it finds. Needs regular updates. | Viruses, worms, Trojan horses, spyware, adware, ransomware |
| **Authentication** | Proves who the user is before access is allowed. | Hacking, brute-force attacks |
| **Automating software updates** | Updates, including security patches, are installed automatically, which closes weaknesses that attackers use. | Hacking, malware |
| **Checking the spelling and tone of communications** | Poor spelling, unusual grammar or an urgent, threatening tone can show that a message is not genuine. | Phishing, social engineering |
| **Checking the URL attached to a link** | Look at the real address before clicking. A fake address may be spelt slightly wrongly or belong to a different domain. | Phishing, pharming |
| **Firewalls** | Examine traffic going into and out of a network and block anything that does not meet the rules. | Hacking, malware, DDoS |
| **Privacy settings** | Limit who can see a user's personal data on websites and social media. | Social engineering, misuse of data |
| **Proxy servers** | Sit between the user and the web server, can filter and block unsafe sites, and can hide the user's own address. | Malware, some DDoS traffic |
| **Secure socket layer (SSL)** | A security protocol that encrypts data between browser and server (used in HTTPS). | Data interception |

### Authentication in detail

- **Username and password:** the user knows both. A strong password is long and mixes letters, digits and symbols. It should not be reused or shared. Strong passwords resist brute-force attacks.
- **Biometrics:** uses a physical feature, such as a fingerprint, face or iris. It is hard to copy or guess, and the user cannot forget it. However, it needs special hardware, may fail, and cannot be changed if copied.
- **Two-step verification:** the user must pass two separate steps, such as a password followed by a one-time code sent to their phone. Even if the password is stolen, the attacker lacks the second step.

### Matching threats to solutions

| Threat | Useful solutions |
|---|---|
| Brute-force attack | Strong passwords, two-step verification, limiting login attempts |
| Data interception | SSL, encryption |
| DDoS attack | Firewall, proxy server |
| Hacking | Firewall, authentication, access levels, software updates |
| Malware | Anti-malware, software updates, firewall |
| Pharming | Anti-malware, checking the URL, software updates |
| Phishing | Checking spelling, tone and the URL attached to a link |
| Social engineering | Staff training, access levels, privacy settings |

## Worked example

**Question:** A bank customer receives an email that claims to be from her bank and asks her to click a link to confirm her password. Name the threat and describe **two** ways she can tell that it is not genuine. [3]

> The threat is phishing [1]. She can check the spelling and tone of the message, because poor spelling or an urgent, threatening tone suggests it is not from the bank [1]. She can check the URL attached to the link, which may not match the bank's real web address [1].

## Common mistakes

- **Saying a firewall removes viruses.** A firewall filters network traffic. Anti-malware removes malware.
- **Mixing up virus and worm.** A virus needs a host file and user action. A worm spreads on its own.
- **Mixing up phishing and pharming.** Phishing uses a message and a link. Pharming redirects automatically.
- **Naming only the threat.** Marks are given for the process and the aim.
- **Saying "use a strong password" for every threat.** Match the solution to the threat.
- **Saying DDoS involves one computer.** It is many computers at once.

## Exam technique

- **Describe a threat:** say how it works, then what the attacker wants.
- **Choose a solution:** name it, say what it does and link it to the threat in the scenario.
- **Authentication:** say which method and what is checked.
- **Do not give a solution that does not stop the threat.** Encryption does not stop interception, it makes it useless.

## Quick check

1. Which malware locks files until money is paid? *Ransomware.*
2. Which threat floods a server with requests from many computers? *DDoS.*
3. Name two methods of authentication. *Username and password; biometrics; two-step verification.*
4. What does a firewall examine? *The traffic going into and out of a network.*
5. Which solution encrypts data between a browser and a server? *SSL.*

## Continue with

Revise with the [Cyber security revision notes](/resources/cambridge-o-level-computer-science-2210-cyber-security-revision-notes/) and practise with the [Cyber security practice questions](/resources/cambridge-o-level-computer-science-2210-cyber-security-practice/).
