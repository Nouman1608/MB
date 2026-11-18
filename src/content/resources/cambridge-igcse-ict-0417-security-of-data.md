---
title: "Cambridge IGCSE ICT (0417): Security of data"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 8: Safety and security"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 8.3
syllabusTopics:
  - qualification: "igcse"
    topic: "safety-and-security"
    subtopic: "security-of-data-0417"
description: "How hacking, phishing, pharming, malware and card fraud work, and how biometrics, SSL, encryption, firewalls and 2FA protect data, for IGCSE ICT 0417 8.3."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Section 8.3 of Cambridge IGCSE ICT 0417 is in two halves. **Threats to data**: "hacking, phishing, pharming, smishing, vishing, viruses, malware, card fraud", with card fraud including "shoulder surfing, card cloning, key logging". **Protection of data**: "biometrics, digital certificate, secure socket layer (SSL), encryption, firewall, two-factor authentication, user id and password". For each threat you need its characteristics, its effect and how to help prevent it; for each protection you need its purpose and how it works.

The [safety and security study guide](/resources/cambridge-igcse-ict-safety-and-security-study-guide/) gives a one-row summary of each threat and method. This page explains the mechanism behind each, step by step, because "explain" questions reward how it works, not just its name. Use the [security of data revision notes](/resources/cambridge-igcse-ict-0417-security-of-data-revision-notes/) for recall and the [security of data practice questions](/resources/cambridge-igcse-ict-0417-security-of-data-practice/) to apply it.

## Threats to data

### Hacking

**What it is**: gaining unauthorised access to a computer system. A hacker may guess or steal passwords, exploit weaknesses in software, or use an unprotected network connection.

**Effects**: data can be viewed (loss of privacy), changed or deleted (loss of integrity), stolen and sold, or used for identity theft; systems may be damaged or shut down.

**Measures to protect data**: firewalls to block unauthorised traffic; strong user IDs and passwords, with accounts locked after several failed attempts; two-factor authentication; encryption, so stolen data cannot be read; keeping software updated so known weaknesses are closed.

### Phishing, pharming, smishing and vishing

All four try to trick people into giving personal details, such as passwords or bank details, to a criminal. They differ in **how** the victim is reached.

| Threat | How it reaches the victim | What happens |
|---|---|---|
| **Phishing** | Email | A message that looks as if it comes from a bank, shop or school asks the user to click a link. The link opens a fake website where the user types in their details |
| **Pharming** | Malicious code | Code installed on the user's computer, or on a server that converts web addresses, sends the user to a fake website **even when they type the correct address** |
| **Smishing** | SMS text message | A text claims to be from a delivery firm or bank and includes a link or a number to call |
| **Vishing** | Voice call or voicemail | A caller pretends to be from a bank or a company's technical support and asks for details, or asks the victim to press keys to "confirm" information |

**How to help prevent them**:

- Do not click links or call numbers in unexpected emails or texts; type the organisation's address yourself or use its official app.
- Check the sender's address, and look for poor spelling, generic greetings ("Dear customer") and urgent threats.
- Never give passwords or PINs on the phone; end the call and ring the organisation on its official number.
- Against pharming: use up-to-date anti-malware software, and check the address bar shows the correct address, https and a valid certificate before entering details.

### Viruses and malware

**Malware** is any software designed to cause harm. A **virus** is one type: a program that copies itself and attaches to other files, and can delete or corrupt data, fill storage, slow the computer or make it crash. Other malware can spy on the user, display unwanted adverts or lock files until money is paid.

The syllabus asks specifically how to **avoid infecting a computer from a downloaded file**:

- download software and files only from trusted, official sources;
- scan every downloaded file with up-to-date anti-virus software before opening it;
- do not open attachments or run executable files from unknown senders;
- keep the operating system and applications updated.

### Card fraud

| Method | How it works | Prevention |
|---|---|---|
| **Shoulder surfing** | Watching someone enter their PIN or password, directly or with a hidden camera or binoculars | Shield the keypad with your hand; check for anyone standing close; use contactless where possible |
| **Card cloning** | A skimming device fitted to a card reader copies the data from the card's magnetic stripe, so a duplicate card can be made | Check card readers for anything loose or unusual; use chip-and-PIN or contactless, which are harder to copy |
| **Key logging** | Software (or a small hardware device) records every key pressed, capturing card numbers and passwords typed in | Anti-spyware software; on-screen keyboards or drop-down menus to select characters, so keys are not typed |

## Protection of data

### Biometrics

Biometric methods identify a person from a unique **physical or behavioural characteristic**, such as a fingerprint, face, iris, retina or voice. The user's biometric data is stored in advance; at each login it is scanned and compared with the stored version.

- **Advantages**: cannot be forgotten, lost or easily shared; very hard to copy; fast to use.
- **Disadvantages**: the equipment costs more; recognition can fail, for example with a cut finger, poor lighting or a cold; storing people's biometric data raises privacy concerns, because unlike a password it cannot be changed if stolen.

### Digital certificate

**Purpose**: to prove that a website, and the public key it uses for encryption, really belong to the organisation named, so users can trust it before sending data.

**Contents** include: the name of the owner (person or organisation); a serial number; an expiry date; the owner's **public key**; and the **digital signature** of the **certificate authority** that issued it. The browser checks these automatically.

### Secure socket layer (SSL)

SSL creates an **encrypted link between the server and the client computer**. In outline:

1. The browser connects to a website and asks for a secure connection.
2. The server sends its digital certificate.
3. The browser checks the certificate is valid, unexpired and issued by a trusted certificate authority.
4. The browser and server agree an encryption key for the session.
5. All data sent between them from then on is encrypted.

The user sees **https** in the address and a **padlock** symbol.

### Encryption

Encryption scrambles data (**plaintext**) into an unreadable form (**ciphertext**) using an **encryption key**. Only someone with the correct key can **decrypt** it back. It does not stop data being intercepted or stolen; it makes stolen data useless.

*A simple illustration*: shifting every letter three places along the alphabet turns DATA into GDWD. The rule "shift by 3" is the key. Real encryption uses far more complex mathematics and very long keys, so it cannot be worked out by trying possibilities.

The syllabus names four uses: protecting data on **hard discs** (so a stolen laptop's files are unreadable), in **email** (so only the recipient can read the message), in the **cloud** (so the provider or a hacker cannot read stored files) and on **HTTPS websites** (so payment and login details cannot be read in transit).

### Firewall

**Purpose**: to protect a computer or network by **monitoring traffic** passing between it and the internet (or another network) and **blocking** traffic that does not meet set rules. It can block access from unknown sources, stop certain programs from connecting to the internet, block access to listed websites, and keep a log of attempts. It may be software on a computer or hardware between the network and the internet.

A firewall does not remove viruses already on a computer; that is the job of anti-virus software.

### Two-factor authentication (2FA)

**Purpose**: to make sure the person logging in is really the account owner, even if their password has been stolen.

**Function**: the user must provide **two different types** of evidence: something they **know** (a password or PIN), something they **have** (a phone receiving a one-time code, or a security token), or something they **are** (a fingerprint). A criminal with only the password cannot log in.

### User ID and password

The **user ID** identifies who is logging in and determines what they are allowed to access. The **password** authenticates them. Security is increased by:

- strong passwords that mix upper and lower case letters, digits and symbols, and are not easily guessed;
- not sharing passwords or writing them down where others can see;
- using a different password for each account;
- changing passwords if they may have been seen;
- locking an account after a set number of failed attempts;
- giving each user access only to the data they need.

## Worked example: matching protection to threat

*An online shop is worried about three threats. Suggest a protection for each and explain how it helps.*

| Threat | Protection | How it helps |
|---|---|---|
| A hacker stealing the customer database | Encryption of the stored data | Even if copied, the data cannot be read without the key |
| Customers' card details being intercepted at checkout | SSL with a digital certificate (HTTPS) | Data is encrypted between the customer's browser and the shop's server, and customers can check the site is genuine |
| Staff accounts being accessed with stolen passwords | Two-factor authentication | A stolen password is not enough without the one-time code on the staff member's phone |

## Common mistakes

- Confusing phishing (user tricked into clicking a link) with pharming (user redirected without clicking anything).
- Saying a firewall removes viruses.
- Saying encryption stops data being stolen. It makes stolen data unreadable.
- Listing a digital certificate's contents but not its purpose.
- Describing 2FA as "two passwords". The two factors must be different types.

## Exam technique

**Describe** a threat: say how it works and what the criminal gets. **Explain** a protection: say what it does and why that reduces the risk, using "so" or "because". **Compare** two threats such as phishing and pharming: give a matched difference ("whereas"). Use the syllabus's exact terms.

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 8 "Safety and security", section 8.3 "Security of data".
