---
title: "OxfordAQA IGCSE Computer Science (9210): Cyber security threats -- Revision Notes"
seoTitle: "OxfordAQA IGCSE CS 9210 Cyber Security Threats Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 6: Cyber security"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 6.01
syllabusTopics:
  - qualification: "igcse"
    topic: "cyber-security-9210"
  - qualification: "igcse"
    topic: "cyber-security-9210"
    subtopic: "cyber-security-threats-9210"
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.6.1: social engineering, malware, passwords, access rights, removable media, patches and penetration testing."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed notes for section **3.6.1 Cyber security threats** of OxfordAQA International GCSE Computer Science (9210),
including social engineering and malicious code. Explanations are in the [Cyber security threats study
guide](/resources/oxfordaqa-igcse-computer-science-9210-cyber-security-threats/).

## What the specification asks

- Define **cyber security** and describe its main purposes.
- Explain: **social engineering**, **malicious code**, **weak and default passwords**, **misconfigured access
  rights**, **removable media**, **unpatched and outdated software**.
- Explain **penetration testing** and what it is used for (two types).
- Social engineering forms: blagging, phishing, pharming, shouldering.
- Malware forms: virus, trojan, spyware, adware. Say how each can be protected against.

## Cyber security

The processes, practices and technologies designed to **protect networks, computers, programs and data** from
**attack, damage or unauthorised access**.

## Social engineering

**Social engineering** is manipulating people so that they give up confidential information.

| Form | Meaning | Example |
|---|---|---|
| Blagging (pretexting) | Using an invented scenario to make a victim give up information or do something unusual | A caller pretends to be IT support and asks for a password |
| Phishing | Fraudulently obtaining private information, often by email or SMS | An email links to a fake bank website |
| Pharming | Redirecting a website's traffic to a fake site | The user types a correct address but lands on a copy |
| Shouldering | Observing private information over someone's shoulder | Watching a cashpoint PIN |

**Protection:** training; verify requests through a known contact; never give passwords or codes; do not click
unexpected links; cover keypads and screens; spam filters and anti-malware.

## Malware

**Malware** is an umbrella term for hostile or intrusive software.

| Type | Key point |
|---|---|
| Computer virus | Attaches to files or programs and **copies itself** when the infected program is run; may corrupt or delete data |
| Trojan | **Disguised** as genuine software; the user installs it; does not copy itself; may give an attacker access |
| Spyware | **Secretly records** the user's activity (such as keystrokes) and sends it to the attacker |
| Adware | Displays **unwanted adverts** and may track browsing |

**Protection:** anti-malware, kept updated; updated operating system and programs; download only from trusted
sources; do not open unknown attachments; firewall; scan removable media; limit user rights; keep backups.

## Other threats

| Threat | Why it is a risk | Reducing it |
|---|---|---|
| Weak passwords | Easily guessed or found by dictionary or brute-force attacks | Long passwords with mixed characters; no personal information; different password for each account |
| Default passwords | Published by the manufacturer, so known to attackers | Change them at set-up |
| Misconfigured access rights | Users can reach data or actions they should not | Least access needed; review regularly; remove leavers' accounts |
| Removable media | Carries malware past network defences; allows data to be copied away | Scan; disable autorun; limit ports; encrypt data |
| Unpatched or outdated software | Known vulnerabilities can be exploited | Install patches; turn on automatic updates; replace unsupported software |

## Penetration testing

**Penetration testing** is **authorised** attempts to gain access to resources without the normal means of access, to
**find weaknesses before real attackers do**.

| Type | Tester's knowledge | Simulates |
|---|---|---|
| Internal | Knows the system and may have basic credentials | A malicious insider |
| External | No knowledge of credentials | An attack from outside |

**Used for:** finding vulnerabilities (weak passwords, misconfigured rights, unpatched software), showing the possible
damage, and checking that security measures work.

## Spotting phishing

- Urgent or threatening language.
- A generic greeting.
- Spelling and grammar mistakes.
- A sender address or link that does not match the organisation.
- A request for personal or payment details.

## Matching situations to threats

| Situation | Threat |
|---|---|
| A caller says they are from the bank and asks for a code | Blagging |
| An email asks the user to log in at a fake site | Phishing |
| A correct web address leads to a fake site | Pharming |
| Someone reads a PIN over a shoulder | Shouldering |
| A "free tool" gives secret control of the PC | Trojan |
| A program logs what is typed | Spyware |
| An office router still uses "admin" | Default password |

## Exam traps

- **Everything called a virus.** Use the correct name.
- **Trojan copies itself.** It does not; a virus does.
- **Phishing and pharming confused.** Phishing is a deceptive message; pharming redirects the user.
- **Threat and protection mixed up.**
- **Social engineering as "hacking the computer".** It targets people.
- **Penetration testing as crime.** It is authorised.
- **Default password risk unexplained.** They are public knowledge.
- **"Update software" without a reason.** Updates fix known vulnerabilities.

## Key terms

| Term | Meaning |
|---|---|
| Threat | Anything that could cause harm to a system or data |
| Vulnerability | A weakness that a threat can use |
| Patch | An update that fixes a vulnerability |
| Access rights | Permissions that control what a user may do |
| Removable media | Devices such as USB sticks that are plugged in and removed |
| Malicious insider | A person inside an organisation who attacks it |

## Self-test

1. Define cyber security.
2. Define social engineering.
3. Name the form of social engineering in which a user is sent to a fake copy of a website.
4. State one difference between a virus and a trojan.
5. State what spyware does.
6. State what adware does.
7. Give two features of a weak password.
8. Explain why default passwords are a threat.
9. Explain why removable media are a threat.
10. State what a patch is.
11. State the purpose of penetration testing.
12. Name the two types of penetration testing described in the specification.

**Answers:**
1. The processes, practices and technologies designed to protect networks, computers, programs and data from attack,
   damage or unauthorised access.
2. Manipulating people so that they give up confidential information.
3. Pharming.
4. A virus copies itself into other files; a trojan is disguised as genuine software and does not copy itself.
5. Secretly records what the user does, such as keystrokes, and sends it to the attacker.
6. Displays unwanted adverts and may track browsing.
7. Any two: short, common word, includes personal information, simple sequence.
8. They are published by the manufacturer, so attackers know them.
9. They can carry malware past network defences, and they allow data to be copied and taken away.
10. An update from the maker that fixes a vulnerability.
11. To find weaknesses in a system before real attackers do.
12. Testing with knowledge of the system and possibly basic credentials (an insider attack), and testing with no
    knowledge of credentials (an external attack).

## Related resources

- [Cyber security threats study guide](/resources/oxfordaqa-igcse-computer-science-9210-cyber-security-threats/)
- [Cyber security threats practice questions](/resources/oxfordaqa-igcse-computer-science-9210-cyber-security-threats-practice/)
- [Methods to detect and prevent cyber security threats revision notes](/resources/oxfordaqa-igcse-computer-science-9210-methods-to-detect-and-prevent-cyber-security-threats-revision-notes/)
