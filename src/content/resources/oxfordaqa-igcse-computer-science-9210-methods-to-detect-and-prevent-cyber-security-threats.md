---
title: "OxfordAQA IGCSE Computer Science (9210): Methods to detect and prevent cyber security threats -- Study Guide"
seoTitle: "OxfordAQA IGCSE CS 9210 Cyber Security Methods Guide"
resourceType: "study-guides"
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
description: "Study guide to OxfordAQA IGCSE Computer Science 9210 section 3.6.2: biometrics, password systems, CAPTCHA, email confirmation and automatic software updates."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers section **3.6.2 Methods to detect and prevent cyber security threats** of OxfordAQA International GCSE
Computer Science (9210). You must understand and be able to explain five security measures: **biometric measures**
(particularly for mobile devices), **password systems**, **CAPTCHA (or similar)**, **using email confirmations to confirm a
user's identity**, and **automatic software updates**. For each one you should be able to say **how it works**, **what threat it
addresses**, and give **advantages and disadvantages**. The threats themselves are covered in the [cyber security threats
study guide](/resources/oxfordaqa-igcse-computer-science-9210-cyber-security-threats/).

## Why use these measures?

No single measure stops every threat, so organisations use several together. Each measure of the five below does one of
these jobs:

- **Authentication**: checking that a person is who they say they are (biometrics, passwords, email confirmation).
- **Telling humans from programs**: stopping automated attacks (CAPTCHA).
- **Closing vulnerabilities**: removing weaknesses that attackers could use (software updates).

## Biometric measures

**Biometrics** identify a person by a **physical or behavioural characteristic** that is unique to them. The measure compares
a stored copy of the characteristic (a template) with a new scan taken when the user tries to get in.

Common biometrics on mobile devices:

| Biometric | How it works |
|---|---|
| Fingerprint | A sensor scans the pattern of ridges on a finger |
| Facial recognition | A camera maps the features of the face |
| Iris scan | A camera records the pattern of the coloured part of the eye |
| Voice recognition | The device recognises features of the user's voice |

**Advantages**

- The user has nothing to **remember**, so there is no password to forget.
- It is **quick and convenient**: a touch or a glance unlocks a phone.
- The characteristic is **hard to copy** or to share, unlike a password that can be told to someone else.
- It cannot be **guessed** like a weak password, and it works well on **mobile devices** where typing is awkward.

**Disadvantages**

- The sensors can be **expensive** to build into a device.
- The system may sometimes **reject** a genuine user (for example wet or injured fingers, poor light for face
  recognition, a cold affecting the voice) or, rarely, **accept** the wrong person.
- A biometric **cannot be changed** if the stored data is stolen, unlike a password.
- There are **privacy concerns** about where the biometric data is stored and how it is used.
- Some biometrics can sometimes be **copied** with a good photograph or a model of a fingerprint.

**Threats addressed:** weak passwords, and unauthorised access to a lost or stolen device. A thief who steals a locked
phone cannot easily open it.

## Password systems

A **password system** is the combination of rules and technology that uses secret passwords to control access. A strong
password system includes the following.

- **Strong password rules:** a minimum length, and a mixture of upper and lower case letters, numbers and symbols, with
  no common words or personal information. This makes guessing and brute-force attacks much harder.
- **A limit on login attempts:** an account is locked, or the user must wait, after a few wrong tries, which stops an attacker
  trying large numbers of passwords.
- **Different passwords for different accounts,** so that one stolen password does not give access to everything.
- **Changing passwords** when there is a suspicion of a breach, and changing default passwords at once.
- **Secure storage:** the system stores passwords in a protected form rather than as plain text, so a stolen database does not
  reveal them directly.

**Advantages:** cheap and simple to set up, familiar to users and usable on almost any system.

**Disadvantages:** users forget complex passwords, write them down or reuse them; passwords can be **phished**,
guessed or watched (shouldering); strict rules may annoy users and lead them to pick predictable patterns.

**Threats addressed:** unauthorised access, weak and default passwords.

## CAPTCHA (or similar)

**CAPTCHA** stands for **Completely Automated Public Turing test to tell Computers and Humans Apart**. It is a test that is
easy for a person but difficult for a program (a **bot**). Examples are reading distorted text, selecting all the pictures
that contain a certain object, or ticking a box after a short check of how the mouse moves.

*How it works:* the website shows the test when a user registers, logs in, posts a comment or buys something. The
action goes ahead only if the test is passed.

*What it protects against:*

- **Automated account creation** and **spam** posts by bots.
- **Brute-force attacks** that use a program to try thousands of passwords on a login page.
- Bots buying large numbers of tickets or products.

**Advantages:** it blocks many automated attacks at low cost.

**Disadvantages:** it can be **annoying** and slow the user down; it can be **hard to use** for people with some disabilities, such as poor
eyesight (so an alternative should be offered); and some tests can be solved by advanced programs or by people paid to
solve them, so it is not perfect.

## Email confirmation

**Email confirmation** uses an email sent to the address that the user gave, to **confirm the user's identity**. The email
contains a **link** or a **code** that the user must use to complete an action.

*Typical uses:*

- **Registering an account:** a confirmation link proves that the address belongs to the person signing up.
- **Resetting a password:** the link is sent only to the registered address, so a person who does not have access to that
  mailbox cannot reset the password.
- **Warning of changes or suspicious sign-ins:** the account owner is notified so that they can react if it was not them.

**Advantages:** it is cheap and easy to use, it checks that the email address is real and in the user's control, and it can
detect misuse of an account.

**Disadvantages:** it depends on the **security of the email account itself**; if an attacker has taken over the email, they
can use the confirmation; email can be **delayed** or end up in a spam folder; and users may be tricked by fake
confirmation emails that are really phishing, so they should check the sender.

## Automatic software updates

**Automatic software updates** download and install **patches** and new versions without the user having to do anything.
Updates fix **vulnerabilities** that have been found in the operating system, browser and other programs.

*Why it matters:* attackers search for systems that have not been patched, because the weakness is already known. An
update closes it. If the user has to start the update manually, it may be put off or forgotten, so automatic updates
close the gap quickly.

**Advantages:** vulnerabilities are fixed **quickly**; users do not need to remember or understand; devices stay protected,
and new features and bug fixes arrive too.

**Disadvantages:** updates may use **bandwidth** and storage; a device may **restart** or be slow at an inconvenient time; an
update can occasionally introduce a new fault; and the device needs an **internet connection**. Updates also come only
from the maker, so software that is no longer supported gets none.

**Threats addressed:** unpatched and outdated software, and malware that uses known weaknesses.

## Comparing the measures

| Measure | Main job | Main threat addressed | Main drawback |
|---|---|---|---|
| Biometrics | Check who the person is | Weak passwords; stolen devices | Cost, mistakes, cannot be changed |
| Password systems | Check who the person is | Unauthorised access | Users forget, reuse or can be tricked |
| CAPTCHA | Tell humans from bots | Automated attacks, spam | Annoying; accessibility problems |
| Email confirmation | Confirm identity and email address | Fake registrations; account takeover | Relies on email security |
| Automatic updates | Fix vulnerabilities | Unpatched software | Bandwidth; restarts; occasional faults |

## Worked examples

**A phone manufacturer wants to improve security. Evaluate fingerprint recognition.** Advantage: the user does not have to
remember anything and it is quick, and a fingerprint is hard to share or guess. Disadvantage: the sensor can reject a
genuine user with wet fingers, and if the fingerprint data is stolen it cannot be changed. Overall it suits a
mobile device well because it is convenient, but it is best used together with another measure, such as a password.

**A shop's website is flooded with fake accounts created by a program. Suggest a measure and explain how it helps.** Add a
CAPTCHA to the registration page. A program cannot easily pass the test, so only real people can create accounts, and
the bot's attack is stopped.

**Explain how email confirmation helps when a user forgets a password.** The reset link is sent to the email address stored
on the account. Only the account owner, who has access to that mailbox, can use it, so a stranger cannot reset the password.

## Common mistakes

- Giving only a **name** of a measure without saying how it **works**.
- Saying that biometrics are **"unhackable"** or "always accurate". They can make mistakes and cannot be changed.
- Describing CAPTCHA as a way to **identify** a particular user. It tells **humans from programs**.
- Saying that CAPTCHA stops all hacking. It addresses **automated** attacks.
- Saying that email confirmation **encrypts** data. It confirms that the person has access to an email address.
- Writing that updates are only for **new features**. Their security purpose is to **fix vulnerabilities**.
- Giving an advantage but no disadvantage when the question asks for an **evaluation**.
- Forgetting to link the measure to the **threat** that it addresses.

## Exam technique

- **Explain** questions need how the measure works and what it achieves, joined by "so" or "because".
- **Advantages and disadvantages** questions need at least one point on each side, each stated in terms of the
  scenario.
- **Suggest a measure** questions: name the measure that matches the threat described (bots: CAPTCHA; lost phone:
  biometrics; known software weakness: updates).
- **Compare** questions: use a table, or write one point on each measure for each criterion.
- Use the terms **authenticate**, **unauthorised access** and **vulnerability** where they fit.

## Next steps

For a condensed summary and a self-test, use the [Methods to detect and prevent cyber security threats revision
notes](/resources/oxfordaqa-igcse-computer-science-9210-methods-to-detect-and-prevent-cyber-security-threats-revision-notes/),
and practise with the [Methods to detect and prevent cyber security threats practice
questions](/resources/oxfordaqa-igcse-computer-science-9210-methods-to-detect-and-prevent-cyber-security-threats-practice/).
