---
title: "Cambridge IGCSE Computer Science (0478): Cyber security"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 5: The internet and its uses"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 5.3
syllabusTopics:
  - qualification: "igcse"
    topic: "the-internet-and-its-uses"
  - qualification: "igcse"
    topic: "the-internet-and-its-uses"
    subtopic: "cyber-security-0478"
description: "Study guide to Cambridge IGCSE Computer Science 0478 section 5.3: the processes and aims of cyber security threats and the solutions used to keep data safe, with brute-force worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
Section 5.3 of the Cambridge IGCSE Computer Science 0478 syllabus has two content statements. You must **describe the processes involved in, and the aim of carrying out, a range of cyber security threats**, and you must **explain how a range of solutions are used to help keep data safe from security threats**. The threats named are brute-force attack, data interception, distributed denial of service (DDoS) attack, hacking, malware (virus, worm, Trojan horse, spyware, adware, ransomware), pharming, phishing and social engineering.

For each threat, learn two things: **how it works** (the process) and **why the attacker does it** (the aim).

## The threats

### Brute-force attack

**Process:** an attacker uses software to try every possible combination of characters until the correct password or PIN is found. **Aim:** to gain access to an account or system.

The time needed grows quickly with the length and variety of the password. Suppose the software can try 1,000 guesses per second.

| Password | Possible combinations | Time at 1,000 guesses per second (longest case) |
|---|---|---|
| 4-digit PIN (digits only) | 10 × 10 × 10 × 10 = 10,000 | 10 seconds |
| 6 lowercase letters | 26⁶ = 308,915,776 | about 3.6 days |
| 8 lowercase letters | 26⁸ = 208,827,064,576 | about 6.6 years |

Longer passwords, and passwords that mix letters, numbers and symbols, take far longer to find. Limiting the number of failed attempts also defeats the method.

### Data interception

**Process:** data being sent over a network is captured by an attacker, using a device or software called a **packet sniffer**, which reads the packets as they travel. **Aim:** to steal or read the data, such as passwords or card details. Encryption, covered below, makes intercepted data unreadable.

### Distributed denial of service (DDoS) attack

**Process:** an attacker uses a large number of computers, often infected with malware and controlled without their owners knowing, to send a huge number of requests to a web server at the same time. The server cannot handle them all. **Aim:** to make the website slow or unavailable to genuine users, which can cost the owner money and damage its reputation. "Distributed" means the requests come from many different computers, so blocking one source is not enough.

### Hacking

**Process:** gaining unauthorised access to a computer system or data, for example by using stolen passwords or by exploiting a weakness in software. **Aim:** to steal, change or delete data, or to misuse the system. (An ethical hacker has permission and tests a system to find its weaknesses.)

### Malware

**Malware** (malicious software) is software designed to harm a computer or its data or to steal information. The syllabus names six types.

| Type | Process | Aim |
|---|---|---|
| Virus | Attaches itself to a file or program; spreads when the infected file is run or copied by a user | Corrupt or delete data, or make the computer misbehave |
| Worm | Copies itself and spreads across a network on its own, without needing a user to run a file | Use up network bandwidth and memory; carry other harmful code |
| Trojan horse | Looks like useful or genuine software, so the user installs it. It then does something harmful | Give an attacker access, steal data or install other malware |
| Spyware | Secretly monitors what the user does, for example logging key presses | Send passwords and personal data to the attacker |
| Adware | Displays unwanted adverts, often as pop-ups, and may track browsing | Earn money for the attacker, and slow the computer |
| Ransomware | Encrypts or locks the user's files, then demands payment | Force the victim to pay money to get their data back |

The key difference between a virus and a worm: a virus needs a **host file** and a user action to spread; a worm spreads **by itself**.

### Pharming

**Process:** malicious code is installed on a user's computer, or a DNS record is altered, so that when the user types the correct web address they are **redirected to a fake website** that looks genuine. **Aim:** to collect personal data, such as login or bank details. The user does nothing wrong, so the attack can be hard to spot.

### Phishing

**Process:** the attacker sends an email, text or message that appears to come from a trusted organisation, with a link or attachment. The link leads to a fake website that collects the user's details. **Aim:** to obtain personal data such as passwords and bank details.

| | Phishing | Pharming |
|---|---|---|
| How the user reaches the fake site | By clicking a link in a message | By typing the real address; they are redirected |
| Action needed from user | Yes: click and enter details | No: redirected automatically |
| Cause | A deceptive message | Malicious code or altered DNS information |

### Social engineering

**Process:** the attacker manipulates people into giving away confidential information or performing an action, rather than breaking into the computer by technical means. Examples include a caller pretending to be technical support, a person following staff through a secure door, or a message creating panic ("your account will close in an hour"). **Aim:** to get passwords, access or money. Phishing is a form of social engineering.

## The solutions

No single solution works for every threat, so organisations and individuals use several together.

| Solution | How it keeps data safe | Helps against |
|---|---|---|
| Access levels | Different users have different rights, such as read-only or full edit, so people can only reach the data they need | Hacking, misuse by staff |
| Anti-malware (anti-virus and anti-spyware) | Scans files and programs for known malware, and removes or quarantines it | Viruses, worms, Trojan horses, spyware |
| Authentication | Proves who a user is (see below) | Hacking, brute-force |
| Automating software updates | Fixes security weaknesses as soon as the supplier releases a patch | Hacking, malware |
| Checking spelling and tone of communications | Poor spelling, odd greetings and urgent or threatening wording are signs of a fake message | Phishing, social engineering |
| Checking the URL attached to a link | Hovering over a link shows the real address, which may differ from the text shown | Phishing, pharming |
| Firewall | Checks incoming and outgoing network traffic against rules and blocks unwanted traffic | Hacking, DDoS, malware |
| Privacy settings | Limit who can see personal data and what a website or app may collect | Data theft, social engineering |
| Proxy server | Sits between users and a website, filters requests and hides the user's own IP address; can be set to block certain sites and handle heavy traffic | Malware sites, DDoS |
| Secure socket layer (SSL) | Encrypts data sent between browser and server (HTTPS) | Data interception |

### Authentication in more detail

Authentication checks that a user is who they claim to be.

- **Username and password**: simple, but can be guessed, stolen or brute-forced. A strong password is long and mixes letters, numbers and symbols.
- **Biometrics**: uses a body feature such as a fingerprint, face or iris. Hard to copy, but can fail (a wet finger, poor light) and cannot be changed if stolen.
- **Two-step verification**: the user enters a password, then a second proof, such as a one-time code sent to their phone. An attacker with the password alone cannot get in.

### Firewall in more detail

A firewall can be hardware or software. It examines each packet and compares its source, destination and type with a set of rules. It blocks packets that break the rules. It can also stop programs on the inside of the network from connecting to unsafe places on the outside.

## Worked example: choosing solutions

A school wants to protect its student records. The records are held on a server. Staff log in from home.

1. **Hacking and brute-force attack.** Use strong passwords with two-step verification, and limit failed attempts.
2. **Staff seeing too much.** Use access levels so a teacher can see only their own classes.
3. **Interception of data sent from home.** Use SSL (HTTPS) so data is encrypted.
4. **Malware.** Use anti-malware on all computers and automate updates.
5. **Phishing emails to staff.** Teach staff to check the URL attached to a link and to look at the spelling and tone of messages.
6. **Unwanted traffic.** Use a firewall between the school network and the internet.

## Annotated model answer

**Question:** Describe how phishing is carried out and state its aim. [3]

> The attacker sends an email that appears to come from a trusted organisation, containing a link [1]. When the user clicks the link they are taken to a fake website that looks genuine, where they are asked to enter personal details [1]. The aim is to collect the user's personal data, such as passwords or bank details [1].

**Why it scores 3:** it covers the process in two steps and states the aim separately, which is exactly what the syllabus wording asks for.

## Common mistakes

- Giving the aim but not the process, or the process but not the aim.
- Saying a virus "spreads by itself". A worm does; a virus needs a user to run an infected file.
- Mixing up phishing and pharming. Phishing uses a message and a click; pharming redirects the user from the correct address.
- Saying a firewall "removes viruses". It filters network traffic; anti-malware removes malware.
- Saying SSL stops data being intercepted. It makes intercepted data unreadable.
- Describing a DDoS attack as coming from one computer.
- Writing "hackers" for every threat. Name the specific threat.

## Exam technique

- **Describe a threat**: say how it works (the process), then what the attacker wants (the aim).
- **Explain a solution**: say what it does and which threat it stops.
- **Match solution to scenario**: use the threat in the question, not a list of all solutions.
- **Be specific**: name the type of malware rather than saying "a virus" for everything.

## Practise this sub-topic

Use the [Cyber security revision notes](/resources/cambridge-igcse-computer-science-0478-cyber-security-revision-notes/) for quick recall and the [Cyber security practice questions](/resources/cambridge-igcse-computer-science-0478-cyber-security-practice/) to test yourself.

## Official syllabus

Cambridge IGCSE Computer Science (0478) syllabus for 2026, 2027 and 2028, section 5.3 Cyber security:
[official syllabus PDF](https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf).
