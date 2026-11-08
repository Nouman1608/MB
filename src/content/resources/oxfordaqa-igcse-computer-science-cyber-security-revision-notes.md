---
title: "OxfordAQA IGCSE Computer Science: Cyber Security — Revision Notes"
resourceType: "revision-notes"
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
description: "Recall notes on cyber security threats, social engineering, malware, penetration testing and prevention methods for OxfordAQA International GCSE 9210."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Cyber security (topic 3.6 of OxfordAQA International GCSE Computer Science 9210) is about the threats to
networks, computers, programs and data -- social engineering, malware, weak passwords, misconfigured access
rights, removable media and unpatched software -- and the methods used to detect and prevent them. It is
assessed on Paper 2, usually with "define", "explain how this threat works" and "suggest a protection"
questions, often set in a short scenario.

Condensed for the final weeks. For the full explanation, use the
[Cyber security study guide](/resources/oxfordaqa-igcse-computer-science-cyber-security-study-guide/).
Practise with the [Cyber security practice questions](/resources/oxfordaqa-igcse-computer-science-cyber-security-practice/).

## Syllabus coverage

OxfordAQA 9210 specification (Version 3.4), section 3.6:

- **3.6** Definition and main purposes of cyber security
- **3.6.1** Cyber security threats -- social engineering, malicious code, weak and default passwords,
  misconfigured access rights, removable media, unpatched/outdated software; penetration testing
- **3.6.1.1** Social engineering -- blagging (pretexting), phishing, pharming, shouldering (shoulder surfing)
- **3.6.1.2** Malicious code -- malware; computer virus, trojan, spyware, adware
- **3.6.2** Methods to detect and prevent threats -- biometric measures, password systems, CAPTCHA, email
  confirmations, automatic software updates

## What is cyber security?

**Cyber security** consists of the **processes, practices and technologies** designed to protect **networks,
computers, programs and data** from **attack, damage or unauthorised access**. Its main purposes: keep data
confidential, keep it accurate and undamaged, and keep systems available to the people who are allowed to use
them.

## The six threats

| Threat | Why it is a risk |
|---|---|
| **Social engineering** | People are manipulated into giving away information or access |
| **Malicious code (malware)** | Hostile software damages data, steals information or takes control |
| **Weak and default passwords** | Short, common or factory-set passwords are easily guessed or looked up |
| **Misconfigured access rights** | Users can open or change data they should not be able to see |
| **Removable media** | USB sticks can carry malware in, or let data be copied out and lost |
| **Unpatched / outdated software** | Known security holes stay open for attackers to exploit |

## Social engineering

**Social engineering** is the art of **manipulating people** so they give up confidential information.

| Form | What happens | Protection |
|---|---|---|
| **Blagging (pretexting)** | An **invented scenario** is used to persuade the victim to reveal information or do something they normally would not, e.g. a caller pretending to be from IT support | Staff training; verify identity by calling back on a known number; never share passwords |
| **Phishing** | **Fraudulent emails or SMS** messages try to obtain private information, often with a link to a fake login page | Check sender addresses and links; do not click links in unexpected messages; spam filters |
| **Pharming** | A cyberattack that **redirects a website's traffic to a fake site**, even when the correct address is typed | Check for HTTPS and the correct address; keep security software up to date |
| **Shouldering (shoulder surfing)** | **Observing** someone's private information over their shoulder, e.g. a PIN at a cashpoint | Shield the keypad; be aware of people nearby; privacy screens |

**Phishing vs pharming:** phishing tricks the **user** into visiting a fake site via a message; pharming
redirects the **traffic** so even a careful user who types the right address can arrive at the fake site.

## Malware

**Malware** is an umbrella term for a variety of forms of **hostile or intrusive software**.

| Type | Description |
|---|---|
| **Computer virus** | Attaches itself to a file or program and **copies itself** to other files when run, spreading when files are shared |
| **Trojan** | Malware **disguised as legitimate software**; the user installs it believing it is useful |
| **Spyware** | Secretly **monitors** what the user does (e.g. records keystrokes) and sends the information to a third party |
| **Adware** | Displays unwanted **advertisements**, and may track browsing to target them |

Protection: anti-malware software kept up to date; automatic updates to patch vulnerabilities; download only from
trusted sources; do not open unexpected attachments; scan removable media; limit user access rights.

## Penetration testing

**Penetration testing** is the process of attempting to gain access to resources **without knowledge of usernames,
passwords and other normal means of access** -- an organisation's own authorised test of its defences, so weaknesses
can be fixed before a real attacker finds them.

| Type | Tester has | Simulates |
|---|---|---|
| **Internal (insider) test** | Knowledge of, and possibly basic credentials for, the system | A **malicious insider** |
| **External test** | No knowledge of any credentials | An **external attack** |

## Detecting and preventing threats

| Measure | How it protects |
|---|---|
| **Biometric measures** | Use a unique physical feature -- fingerprint, face, iris -- to unlock a device, especially **mobile devices**; cannot be forgotten and is hard to share or copy |
| **Password systems** | Require strong passwords (length, mix of characters), regular changes, lock-out after several failed attempts |
| **CAPTCHA (or similar)** | A test that is easy for a human but hard for a program, so automated **bots** cannot create accounts or keep guessing passwords |
| **Email confirmations** | A link or code is sent to the user's email to **confirm their identity**, e.g. when creating an account or resetting a password |
| **Automatic software updates** | Security **patches** are installed as soon as they are released, closing known vulnerabilities |

### Worked example: matching threat to defence

```
Scenario: staff receive an email "from the bank" asking them to log in and confirm details.
Threat:   phishing (social engineering via email)
Defences: staff training to recognise phishing; check the sender and link address;
          spam filtering; strong passwords plus email confirmation for any password reset,
          so a stolen password alone is less useful
```

## Common mistakes / exam traps

- Confusing **phishing** (message tricks the user) with **pharming** (traffic redirected to a fake site).
- Describing a virus and a trojan the same way: a virus **replicates** by attaching to files; a trojan
  **disguises** itself as useful software.
- Writing "hacking" as a threat -- use the specification's terms (e.g. weak passwords, misconfigured access rights).
- Saying penetration testing is an attack by criminals -- it is **authorised** testing.
- Giving a protection that does not fit the threat, e.g. CAPTCHA against shoulder surfing.

## Frequently asked questions

**What is the difference between blagging and phishing?**
Blagging uses an invented scenario, often in person or by phone, to persuade a victim. Phishing uses fraudulent
emails or text messages, usually linking to a fake website, to collect private information.

**What are the two types of penetration testing?**
An internal test, where the tester has knowledge and possibly basic credentials, simulating a malicious insider; and
an external test, where the tester has no credentials, simulating an attack from outside.

**Why are automatic software updates a security measure?**
Updates often contain patches for security holes that attackers already know about. Installing them automatically
closes those holes as soon as possible.

## Related resources

[Cyber security study guide](/resources/oxfordaqa-igcse-computer-science-cyber-security-study-guide/) |
[Cyber security practice questions](/resources/oxfordaqa-igcse-computer-science-cyber-security-practice/) |
[Computer networks revision notes](/resources/oxfordaqa-igcse-computer-science-computer-networks-revision-notes/)

## Official syllabus

OxfordAQA International GCSE Computer Science (9210) specification, Version 3.4, section 3.6 --
[oxfordaqa.com/9210](https://www.oxfordaqa.com/qualifications/international-gcse-computer-science/).
