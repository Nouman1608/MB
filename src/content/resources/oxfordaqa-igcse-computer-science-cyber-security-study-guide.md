---
title: "OxfordAQA IGCSE Computer Science (9210): Cyber security -- Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 6: Cyber security"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 6
syllabusTopics:
  - qualification: "igcse"
    topic: "cyber-security-9210"
description: "Cyber security threats such as social engineering, malware and brute force attacks, and the methods used to detect and prevent them, for OxfordAQA International GCSE 9210."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Cyber security is the protection of computer systems, networks and data from attack, damage and unauthorised access. Almost every organisation stores data about people, so a breach can cause financial loss, identity theft and harm to reputation. In OxfordAQA International GCSE Computer Science (9210) you need to know the main threats, how each works, and the measures that detect or prevent them. The best answers always say how a threat works and which measure stops it, not just the names.

## Where this fits in the specification

Cyber security is Topic 6, directly after computer networks, because most attacks travel across networks and many defences, such as firewalls and encryption, are network features. It also uses ideas from data representation (encryption changes data into a different form) and from relational databases (SQL injection targets database queries), so it is a good topic to revise alongside them.

## Why attacks happen

People attack systems for financial gain (stealing card details or demanding payment), to steal personal data, to disrupt a service, to gain information or competitive advantage, or simply to test their skill or cause damage. A threat can come from outside the organisation, or from inside it, through carelessness or deliberate misuse.

## Social engineering

**Social engineering** tricks people into giving away information or access, rather than breaking technical defences. People are often the weakest point in security. Techniques include:

- **Phishing**: an email or text that looks genuine and persuades the recipient to click a link or reveal details, such as a password. Warning signs are an unexpected message, a generic greeting, spelling mistakes, urgent wording and a link that does not match the real organisation.
- **Pharming**: redirecting a user from a genuine website to a fake one, even when the correct address is typed, so that login details are captured.
- **Blagging**: inventing a scenario, usually by phone, to persuade someone to hand over information, such as pretending to be from the bank.
- **Shouldering** (shoulder surfing): watching someone enter a PIN or password over their shoulder.

The main defence is training and awareness, along with sensible procedures, such as never giving a password by phone or email.

## Malware

**Malware** is software designed to harm a system or steal data. A **virus** attaches itself to a file and spreads when that file is opened or shared. A **worm** spreads by itself across a network without a host file. A **trojan** pretends to be useful software but contains harmful code. **Ransomware** locks or encrypts files and demands payment for release. **Spyware** secretly records what the user does, such as keystrokes. Effects include deleted or corrupted files, stolen data, slower computers and loss of control of the machine.

## Other threats

- **Brute force attack**: trying every possible combination of characters until the password is found. Longer passwords with a mix of character types take much longer to crack.
- **Denial of service (DoS) attack**: flooding a server with so many requests that it cannot respond to genuine users. A distributed attack (DDoS) uses many computers at once.
- **Data interception**: capturing data as it travels across a network, for example on an unsecured public Wi-Fi.
- **SQL injection**: entering SQL code into a web form field so that the database runs it, which can reveal or change data. Checking and sanitising user input prevents it.
- **Poor network policy**: weak passwords, no staff training, unpatched software and no rules about devices all leave gaps.

## Detecting and preventing threats

| Measure | What it does |
|---|---|
| Penetration testing | Authorised testers try to break into a system to find weaknesses before criminals do |
| Anti-malware software | Scans for and removes known malware and blocks suspicious files |
| Firewall | Monitors traffic and blocks unauthorised connections into and out of a network |
| Strong passwords and regular changes | Make guessing and brute force harder |
| User access levels | Limit each person to the data and actions they need |
| Encryption | Scrambles data so that intercepted data cannot be read without the key |
| Biometrics | Uses fingerprints or faces, which are hard to copy or share |
| CAPTCHA | A test that distinguishes humans from automated programs |
| Automatic software updates | Fix known weaknesses as soon as a patch is released |
| Backups | Allow data to be recovered after an attack |

**Encryption** converts plaintext into ciphertext using an algorithm and a key. Only someone with the right key can turn it back. It does not stop data from being intercepted; it makes intercepted data useless. A firewall does not remove malware that is already inside a device, which is why several layers of defence are used together.

## Worked example 1: how long does brute force take?

A hacker's program tries guesses at a steady rate. Compare three passwords.

(a) A 4-digit PIN uses only digits. Number of combinations = 10 x 10 x 10 x 10 = 10^4 = 10,000. At 1,000 guesses per second, the worst case is 10,000 / 1,000 = 10 seconds.

(b) A 6-character password of lower-case letters only. Combinations = 26^6 = 308,915,776. At 1,000,000 guesses per second the worst case is 308.9 seconds, which is just over 5 minutes.

(c) An 8-character password using upper-case, lower-case and digits (62 possible characters). Combinations = 62^8 = 218,340,105,584,896. At 1,000,000,000 guesses per second the worst case is about 218,340 seconds, which is about 60.7 hours, or about 2.5 days.

Lengthening the password and widening the character set increase the number of combinations dramatically, which is why both are recommended. The average attack finds the password in about half of the worst-case time, but the exam answer should use the total number of combinations unless told otherwise.

## Worked example 2: recommending protection

A medical clinic stores patient records on a server that staff use from their own devices, and it also has a public website with an appointment form. Recommend protection.

Strong measures would be: encryption of records stored on the server and sent across the network, so intercepted data cannot be read; user access levels so that reception staff can see appointments but not full medical notes; a firewall to block unauthorised connections; anti-malware software and automatic updates on every device; and staff training about phishing and blagging. For the web form, validate and sanitise input to prevent SQL injection. Penetration testing would then check that the measures work. A clear answer links each measure to a specific threat in the scenario.

## Common mistakes

- Confusing a virus and a worm. A worm spreads by itself; a virus needs a host file to be opened.
- Saying that a firewall "stops viruses". A firewall controls network traffic; anti-malware software deals with viruses.
- Describing phishing, pharming and blagging all as "hacking". They are social engineering or redirection, not technical break-ins.
- Saying encryption prevents interception. It protects the content after interception.
- Naming a measure without saying what threat it stops.
- Thinking cyber security is only about outsiders, when staff mistakes cause many breaches.
- Calling penetration testing an attack. It is authorised, to find weaknesses.

## Exam technique

For **describe** questions on a threat, say what the attacker does and what happens as a result. For **explain how** a measure helps, name the threat and say how the measure stops or limits it, for example "a firewall blocks incoming connections that are not on the allowed list, so a hacker cannot reach the internal network". For recommendation questions, pick measures to match the scenario and avoid listing every measure. Use the correct terms: **malware**, **phishing**, **brute force**, **encryption**, **penetration testing**.

## Check your understanding

1. What is social engineering? *Tricking people into revealing information or giving access, rather than attacking the technology.*
2. Give two signs that an email may be a phishing attempt. *Unexpected sender or message, generic greeting, spelling mistakes, urgent request, suspicious link.*
3. State one difference between a virus and a worm. *A virus attaches to a file and needs it to be opened; a worm spreads by itself across a network.*
4. How does a DoS attack affect a website? *It floods the server with requests so that genuine users cannot access the site.*
5. Why is a long password with mixed characters harder to crack? *There are many more possible combinations to try in a brute force attack.*
6. How many combinations does a 3-digit PIN have? *10^3 = 1,000.*
7. Explain the purpose of penetration testing. *Authorised testers look for weaknesses so they can be fixed before real attackers find them.*
8. Why does encryption protect data that is intercepted? *Without the key the ciphertext cannot be turned back into readable data.*
