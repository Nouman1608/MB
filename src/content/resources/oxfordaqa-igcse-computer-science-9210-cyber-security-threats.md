---
title: "OxfordAQA IGCSE Computer Science (9210): Cyber security threats -- Study Guide"
seoTitle: "OxfordAQA IGCSE CS 9210 Cyber Security Threats Guide"
resourceType: "study-guides"
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
description: "Study guide to OxfordAQA IGCSE Computer Science 9210 section 3.6.1: social engineering, malware, weak passwords, access rights, removable media, unpatched software and penetration testing."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers section **3.6.1 Cyber security threats** of OxfordAQA International GCSE Computer Science (9210),
together with the sub-sections on **social engineering** and **malicious code**. You must define **cyber security** and
describe its main purposes; explain **social engineering techniques**, **malicious code**, **weak and default
passwords**, **misconfigured access rights**, **removable media** and **unpatched and outdated software**; and explain
what **penetration testing** is and what it is used for. The measures used to detect and prevent threats are in the
[methods to detect and prevent cyber security threats study
guide](/resources/oxfordaqa-igcse-computer-science-9210-methods-to-detect-and-prevent-cyber-security-threats/).

## What is cyber security?

The specification says that "cyber security consists of the processes, practices and technologies designed to protect
networks, computers, programs and data from attack, damage or unauthorised access".

Its main purposes are therefore to:

- **protect data** from being stolen, changed or deleted by people who should not have access to it;
- **protect systems** (networks, computers and programs) from attack and damage;
- keep systems **available and working** for their legitimate users;
- prevent **unauthorised access**.

A **threat** is anything that could cause harm to a system or its data. A **vulnerability** is a weakness that a threat
can use. Most of the threats below succeed because of a weakness in people (they can be tricked), in settings (they are
not configured securely) or in software (it contains a flaw).

## Social engineering

**Social engineering** is "the art of manipulating people so they give up confidential information". Instead of breaking
into a computer system by technical means, the attacker tricks a person into helping. This works because people are often
the weakest part of a system: they are helpful, trusting, hurried or afraid of getting into trouble.

The specification names four forms.

### Blagging (pretexting)

**Blagging** is "the act of creating and using an invented scenario" (a pretext) to engage a victim, so that they
disclose information or do things they would not normally do. A caller may pretend to be from the IT department, a bank
or a supplier, and ask for a password or a verification code "to fix a problem".

*Example:* a caller says they are from the school's IT team and need a teacher's login to stop an account being closed.

### Phishing

**Phishing** is "a technique of fraudulently obtaining private information, often using email or SMS". The message looks like
it is from a trusted organisation, and tells the victim to click a link or open an attachment. The link leads to a fake
website that asks for a username, password or payment details, or the attachment installs malware.

*Signs of phishing:* an urgent or threatening tone, a generic greeting, spelling and grammar mistakes, a sender address that does
not match the organisation, and links whose real address is different from the text shown.

### Pharming

**Pharming** is "a cyberattack intended to redirect a website's traffic to another, fake site". The user may type the correct web
address, but is sent to a copy of the site that has been set up to collect their details. This is more difficult for the
user to notice than phishing, because they do not have to click on a suspicious link.

### Shouldering (shoulder surfing)

**Shouldering** is "observing a person's private information over their shoulder, for example cashpoint machine PIN
numbers". It can also happen on a train, in a café or in a classroom, when someone looks at a screen or watches a
password being typed.

### Protecting against social engineering

- **Training and awareness.** Staff and users should know the techniques and the warning signs.
- **Verify the request.** Contact the organisation using a number or address you already know, not the one in the message.
- **Never give out passwords or codes** on the phone, by email or by text.
- **Do not click on links or open attachments** in unexpected messages.
- **Cover the keypad** and screen, and be aware of who is nearby.
- **Use anti-malware and spam filters**, which block many phishing messages.
- Have clear **procedures** for confirming the identity of anyone who requests information.

## Malicious code (malware)

**Malware** is "an umbrella term used to refer to a variety of forms of hostile or intrusive software". The specification
names four types.

| Type | What it does | How it spreads or arrives |
|---|---|---|
| **Computer virus** | Attaches itself to a file or program; when that program is run, the virus runs and copies itself into other files. It can corrupt or delete data | Infected files, programs, removable media or email attachments; it needs a person to run the infected program |
| **Trojan** | Pretends to be useful or harmless software, but contains hidden malicious code. It may give the attacker access to the system. It does **not** copy itself | The user installs it because they believe it is genuine |
| **Spyware** | Secretly monitors what the user does, for example by recording keystrokes or browsing, and sends the information to the attacker | Often arrives hidden inside other software |
| **Adware** | Displays unwanted advertisements, and may track browsing to target them. It slows the computer and annoys the user | Often bundled with free software |

### Protecting against malware

- **Install anti-malware software** and keep it up to date, with regular scans.
- **Keep the operating system and applications updated.**
- **Only download software from trusted sources** and be careful about free programs.
- **Do not open attachments or links** from unknown or unexpected senders.
- **Use a firewall.**
- **Scan removable media** before use.
- **Limit user rights** so that ordinary users cannot install software.
- **Back up data** so that files can be restored after an attack.

## Weak and default passwords

A **weak password** is easy to guess or to find by trying many possibilities. Examples are short passwords, common words, names,
dates of birth and sequences such as "123456". Attackers use **dictionary** attacks (trying lists of common passwords) and
**brute-force** attacks (trying every combination), and a short, simple password is found quickly.

A **default password** is the one set by the manufacturer on a router, camera, or other device, such as "admin". Default
passwords are widely published, so any device left on its default settings can be accessed by an attacker.

*Reducing the threat:* change every default password; use long passwords with a mix of letters, numbers and symbols; avoid
personal information; use a different password for each account.

## Misconfigured access rights

**Access rights** (permissions) decide what each user may see, change or delete. They are **misconfigured** if users are
given **more access than they need**, if files or folders are accidentally shared with everyone, or if the rights of
people who have left are not removed.

*The threat:* a user, or an attacker who has taken over that user's account, can read or change confidential data, or
install software. A single error in a setting can expose a whole database.

*Reducing the threat:* give each user only the access that their job needs; review rights regularly; remove accounts when
people leave; check the settings of shared files and cloud services.

## Removable media

**Removable media** are devices such as USB memory sticks, external hard drives and discs that are plugged into a computer
and then removed.

*The threats:* malware on a device can be carried **past network defences** straight into a computer; a person can
quickly **copy confidential data** onto a device and take it away; a lost device can reveal its data to a finder.

*Reducing the threat:* scan every device before use; switch off automatic running of programs from media; limit or lock
USB ports; use only devices from trusted sources; encrypt data stored on portable devices.

## Unpatched and outdated software

Software contains mistakes. Some of them are **vulnerabilities** that an attacker can use to take control of a system. When
the maker finds a vulnerability, it releases an update called a **patch**. **Unpatched** software is software where the
patch has not been installed; **outdated** software is no longer supported, so new weaknesses are not fixed at all.

*The threat:* the details of fixed vulnerabilities are public, so attackers target the systems that have not been updated.

*Reducing the threat:* install updates as soon as they are available (or turn on automatic updates); replace software that
is no longer supported.

## Penetration testing

**Penetration testing** is "the process of attempting to gain access to resources without knowledge of usernames, passwords
and other normal means of access". An organisation pays authorised testers to try to break into its own systems, in
order to **find weaknesses before real attackers do**. The results are reported, and the weaknesses can then be fixed.

The specification names two types.

| Type | The tester's starting point | What it simulates |
|---|---|---|
| **Internal** test | Has knowledge of the system and perhaps basic credentials (such as a normal user login) | A **malicious insider**, such as a dishonest employee, attacking from inside the system |
| **External** test | Has **no** knowledge of any credentials | An **external attack** by someone outside the organisation |

*Purpose:* to find vulnerabilities (for example weak passwords, misconfigured access rights or unpatched software),
to show how much damage an attacker could do, and to test whether the existing security measures work.

## Worked example: matching threats to descriptions

| Situation | Threat |
|---|---|
| A caller claims to be from the bank and asks for a customer's security code | Blagging |
| An email with a link to a fake bank website asks the user to log in | Phishing |
| A user types the correct address but arrives at a copy of the website | Pharming |
| A person reads a PIN over a customer's shoulder at a cash machine | Shouldering |
| A free "game" installs a hidden program that gives control of the computer | Trojan |
| A program records everything a user types and sends it away | Spyware |
| An office router still uses the password "admin" | Default password |
| A student account can delete the school's database | Misconfigured access rights |

## Common mistakes

- Calling every threat a "virus". Use the correct names: virus, trojan, spyware or adware.
- Saying that a trojan **copies itself**. A trojan disguises itself, and a virus copies itself.
- Defining phishing and pharming in the same way. Phishing tricks a user by a message; pharming **redirects** the user to a fake site.
- Giving a **protection** when the question asks what the threat **is**, and vice versa.
- Saying social engineering is "hacking into a computer". It manipulates **people**.
- Forgetting that shouldering is about watching **private information**.
- Describing penetration testing as hacking by criminals. It is **authorised** testing.
- Not saying why **default** passwords are a problem. They are publicly known.
- Writing "update your software" without saying that it **fixes known vulnerabilities**.

## Exam technique

- **Define** questions use the key idea of each term, such as "redirects traffic to a fake site" for pharming.
- **Describe a threat** questions need what the attacker does and what harm results.
- **Explain how to protect** questions need a method and a reason, such as "install anti-malware, which scans and removes
  malicious code".
- **Identify the threat** in a scenario: pick the one detail that matches the definition.
- **Penetration testing**: state that it is authorised, that it tries to gain access, and that its purpose is to find
  weaknesses; give both types.

## More on this topic

For a condensed summary and a self-test, use the [Cyber security threats revision
notes](/resources/oxfordaqa-igcse-computer-science-9210-cyber-security-threats-revision-notes/), and practise with the
[Cyber security threats practice
questions](/resources/oxfordaqa-igcse-computer-science-9210-cyber-security-threats-practice/).
