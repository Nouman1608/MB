---
title: "OxfordAQA IGCSE Computer Science (9210): Methods to detect and prevent cyber security threats -- Revision Notes"
seoTitle: "OxfordAQA IGCSE CS 9210 Cyber Security Methods Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 6: Cyber security"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 6.02
syllabusTopics:
  - qualification: "igcse"
    topic: "cyber-security-9210"
  - qualification: "igcse"
    topic: "cyber-security-9210"
    subtopic: "methods-to-detect-and-prevent-cyber-security-threats-9210"
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.6.2: biometrics, password systems, CAPTCHA, email confirmation, automatic updates and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Condensed notes for section **3.6.2 Methods to detect and prevent cyber security threats** of OxfordAQA International
GCSE Computer Science (9210). Explanations are in the [Methods to detect and prevent cyber security threats study
guide](/resources/oxfordaqa-igcse-computer-science-9210-methods-to-detect-and-prevent-cyber-security-threats/).

## What the specification asks

Understand and explain these security measures:

- **biometric measures** (particularly for mobile devices)
- **password systems**
- **CAPTCHA** (or similar)
- using **email confirmations** to confirm a user's identity
- **automatic software updates**

For each: how it works, which threat it addresses, advantages and disadvantages.

## Biometric measures

Identify a person by a **unique physical characteristic**, compared with a stored template.

| Examples | Fingerprint, face, iris, voice |
|---|---|
| Advantages | Nothing to remember; quick and convenient; hard to share or copy; suits mobile devices |
| Disadvantages | Sensor cost; false rejections (wet fingers, poor light) and rare false acceptances; cannot be changed if stolen; privacy concerns |
| Threats addressed | Weak passwords; unauthorised access to a lost or stolen phone |

## Password systems

Rules and technology that use secret passwords to control access.

- Strong rules: **length**, mix of upper and lower case letters, numbers and symbols; no personal information.
- **Limit on attempts**: lock the account after a few wrong tries.
- **Different** password for each account; change default passwords.
- **Secure storage**: passwords are not kept as plain text.

| Advantages | Cheap, simple, familiar, works on almost any system |
|---|---|
| Disadvantages | Forgotten, written down or reused; can be phished, guessed or watched |
| Threats addressed | Unauthorised access; weak and default passwords |

## CAPTCHA

**C**ompletely **A**utomated **P**ublic **T**uring test to tell **C**omputers and **H**umans **A**part.

- A test that is easy for a person and hard for a program (bot): distorted text, picking images, a tick-box check.
- Shown at registration, login, posting and buying.
- Stops: **automated account creation**, **spam**, **brute-force** login attempts, bulk buying by bots.

| Advantages | Blocks many automated attacks cheaply |
|---|---|
| Disadvantages | Annoying; hard for some disabled users; some tests can be beaten |

## Email confirmation

An email with a **link or code** is sent to the address given; the user must use it.

- **Registering:** proves the address belongs to the person.
- **Password reset:** the link goes only to the registered address.
- **Alerts:** warns the owner of changes or suspicious sign-ins.

| Advantages | Cheap; checks the address is real and under the user's control; helps detect misuse |
|---|---|
| Disadvantages | Relies on the security of the email account; delays and spam folders; fake confirmation emails can be phishing |

## Automatic software updates

Patches and new versions are downloaded and installed automatically. They **fix vulnerabilities**.

| Advantages | Fast fixes; no need for the user to remember; new features and bug fixes |
|---|---|
| Disadvantages | Bandwidth and storage; restarts at awkward times; occasional new faults; needs a connection; unsupported software gets none |
| Threats addressed | Unpatched and outdated software; malware that uses known weaknesses |

## Choosing a measure

| Problem | Measure |
|---|---|
| A thief steals a locked phone | Biometrics (and a password) |
| A bot creates thousands of fake accounts | CAPTCHA |
| A user forgets their password | Email confirmation to the registered address |
| A newly found weakness in the operating system | Automatic updates |
| A brute-force attack on a login page | Limit on attempts; CAPTCHA |
| A short or default password | Strong password rules |

## Worked answers

**Explain how CAPTCHA reduces spam. [2 marks]** It gives a test that a person can pass but a program cannot easily pass,
so the bots that post spam are stopped from submitting the form.

**Give one advantage and one disadvantage of fingerprint recognition on a phone. [2 marks]** Advantage: it is quick and
the user has nothing to remember. Disadvantage: it may reject a genuine user with wet fingers.

**Explain why automatic updates improve security. [2 marks]** Updates fix vulnerabilities that attackers know about, and
doing it automatically means the fix is applied quickly without the user having to remember.

## Exam traps

- **Name only.** Say how the measure works.
- **Biometrics "cannot be hacked".** They can fail and cannot be changed.
- **CAPTCHA to identify users.** It tells humans from programs.
- **CAPTCHA stops all attacks.** It stops automated ones.
- **Email confirmation "encrypts".** It confirms access to an email address.
- **Updates "only add features".** Their security purpose is to fix vulnerabilities.
- **One-sided evaluation.** Give an advantage and a disadvantage.
- **Threat not linked.** Say which threat the measure addresses.

## Key terms

| Term | Meaning |
|---|---|
| Authentication | Checking that a person is who they claim to be |
| Biometric | A physical characteristic used to identify a person |
| Bot | A program that carries out automated tasks |
| Brute force | An attack that tries every possible password |
| Patch | An update that fixes a vulnerability |
| Template | The stored biometric data that a scan is compared with |

## Self-test

1. Name two biometric measures used on mobile devices.
2. State one advantage of a biometric measure compared with a password.
3. State one disadvantage of a biometric measure.
4. Give two rules that make a password strong.
5. State what a limit on login attempts prevents.
6. State what CAPTCHA stands for in your own words.
7. State two attacks that CAPTCHA helps to prevent.
8. Explain how an email confirmation can help a user who forgets a password.
9. Explain why automatic updates matter for security.
10. State one disadvantage of automatic updates.

**Answers:**
1. For example fingerprint and facial recognition.
2. For example the user has nothing to remember, or it is quick.
3. For example it can reject a genuine user, or it cannot be changed if stolen.
4. For example a minimum length and a mixture of letters, numbers and symbols.
5. An attacker trying large numbers of passwords (brute force).
6. A test to tell computers (programs) and humans apart.
7. Any two: automated account creation, spam, brute-force login attempts.
8. The reset link is sent to the registered email address, so only the owner of that mailbox can reset the password.
9. They fix known vulnerabilities quickly, without the user having to remember.
10. For example they use bandwidth, or can restart the device at an inconvenient time.

## Related resources

- [Methods to detect and prevent cyber security threats study guide](/resources/oxfordaqa-igcse-computer-science-9210-methods-to-detect-and-prevent-cyber-security-threats/)
- [Methods to detect and prevent cyber security threats practice questions](/resources/oxfordaqa-igcse-computer-science-9210-methods-to-detect-and-prevent-cyber-security-threats-practice/)
- [Cyber security threats revision notes](/resources/oxfordaqa-igcse-computer-science-9210-cyber-security-threats-revision-notes/)
