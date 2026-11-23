---
title: "IB DP Computer Science (DP Computer Science): Network Vulnerabilities and Countermeasures (HL)"
resourceType: "study-guides"
subject: "computer-science"
level: ["ib"]
topic: "A.2 -- Networks"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Computer Science"]
syllabusSeries: "First assessment 2027"
order: 1.22
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-a"
    subtopic: "ib-dp-computer-science-a-2"
description: "HL study guide to network vulnerabilities and countermeasures in IB DP Computer Science A.2: malware, interception, denial of service, and how to defend."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-18: Written from the public subject brief and the A2.4.2-A2.4.3 label (network vulnerabilities and countermeasures, HL only); the exact learning outcomes were not available, so please check the threats and countermeasures named against the full DP Computer Science guide."
publishedDate: 2026-11-18
featured: false
---

**This unit covers statements A2.4.2 and A2.4.3 of A.2 Networks, on network vulnerabilities and the
countermeasures against them, which the guide marks HL only.** The
[A.2 Networks study guide](/resources/ib-dp-computer-science-a-2/)
introduces hardware firewalls and HTTPS as devices and protocols; this page explains the threats they
defend against and the wider set of defences a network needs.

> **Scope of this page.** The statement numbers and their HL status come from the full DP Computer
> Science guide (first assessment 2027). Its exact wording, and the specific threats and
> countermeasures it lists, were not available when this page was written, so check your school's
> copy.

## Three words to use precisely

- A **vulnerability** is a weakness that could be exploited: an unpatched program, a weak password,
  an unencrypted connection.
- A **threat** is something that could exploit it: a person, a piece of malware, an automated attack.
- A **countermeasure** is an action or control that removes the weakness or reduces the harm.

Exam answers improve as soon as these are kept separate. "Phishing is a vulnerability" is loose;
"staff who have not been trained to recognise phishing are a vulnerability that a phishing email
exploits" is precise.

## Vulnerabilities and the threats that exploit them

### Malware

Malicious software installed without the owner's consent.

| Type | Behaviour |
|---|---|
| Virus | Attaches to a file or program and spreads when it is run |
| Worm | Spreads by itself across a network, exploiting vulnerabilities, without user action |
| Trojan | Disguised as useful software; carries a hidden harmful payload |
| Ransomware | Encrypts the victim's files and demands payment for the key |
| Spyware / keylogger | Secretly records activity or keystrokes and sends it to the attacker |

### Social engineering and phishing

Attacks on **people** rather than technology. A phishing email imitates a trusted sender to persuade
the user to click a link, open an attachment or type a password into a fake site. The vulnerability
is a lack of awareness, and one successful phish can give the attacker a valid account inside the
network.

### Interception (eavesdropping and man-in-the-middle)

Data travelling in **plaintext** can be read by anyone with access to the medium: on a public Wi-Fi
network, an attacker can capture packets. In a **man-in-the-middle** attack, the attacker secretly
relays traffic between two parties, reading or altering it.

### Denial of service (DoS and DDoS)

The attacker floods a server or network with requests so that legitimate users cannot be served. In a
**distributed** denial of service (DDoS), the requests come from many compromised devices (a
**botnet**) at once, so blocking a single source address does not stop it.

### Weak authentication

Short or reused passwords can be guessed by **brute force** (trying every combination) or by trying
passwords leaked from other sites. Default passwords left on routers or cameras are a common entry
point.

### Unpatched software and misconfiguration

Known flaws in operating systems, browsers and server software are fixed by **patches**. A device
that has not been updated is vulnerable to attacks that exploit those published flaws. Misconfigured
devices, such as an open port that should be closed, create similar gaps.

### Unsecured wireless networks and rogue access points

A Wi-Fi network with weak or no encryption lets outsiders join or listen. An attacker may set up a
**rogue access point** with a familiar name so that users connect to it instead.

### Injection attacks

If a web application builds a database query directly from what a user types, an attacker can type
SQL code that changes the query (**SQL injection**), revealing or deleting data. This links A.2 to the
SQL content in A.3.

### Insider threats

Current or former staff with legitimate access may misuse it deliberately or make careless mistakes.

## Countermeasures

| Countermeasure | What it does | Main threats addressed |
|---|---|---|
| **Firewall** | Inspects traffic and allows or blocks it according to rules (addresses, ports, protocols) | Unauthorised access; some malware traffic |
| **Encryption** | Turns plaintext into ciphertext that only key holders can read; for example TLS (HTTPS) and WPA2/WPA3 on Wi-Fi | Interception; man-in-the-middle; unsecured Wi-Fi |
| **Strong authentication** | Long unique passwords, account lockout after failed attempts, **multi-factor authentication** (something you know + have + are) | Brute force; stolen passwords; phishing |
| **Access control (least privilege)** | Each user gets only the permissions they need | Insider threats; limits damage from a compromised account |
| **Anti-malware software** | Scans files and behaviour for known and suspicious malware | Viruses, worms, trojans, spyware |
| **Patching and updates** | Installs fixes for known flaws promptly | Worms and exploits of known vulnerabilities |
| **Virtual private network (VPN)** | Creates an encrypted tunnel across an untrusted network | Interception on public Wi-Fi; remote access |
| **Intrusion detection / prevention** | Monitors traffic for patterns of attack and alerts or blocks | Scanning, DoS, unusual activity |
| **Input validation and parameterised queries** | Treat user input as data, never as code | SQL injection |
| **User training** | Teaches staff to recognise phishing and report incidents | Social engineering |
| **Backups (including offline copies)** | Allow data to be restored | Ransomware; accidental deletion |
| **Physical security** | Locks server rooms; controls access to network ports | Theft; direct tampering |

### How encryption protects data in transit

**Symmetric encryption** uses the same key to encrypt and decrypt; it is fast, but the key must be
shared safely. **Asymmetric encryption** uses a key pair: data encrypted with the public key can only
be decrypted with the matching private key, so the public key can be shared openly. TLS, which
underlies HTTPS, uses asymmetric encryption and certificates to authenticate the server and agree a
shared key, then uses fast symmetric encryption for the rest of the session.

## Defence in depth

No single countermeasure is enough. A firewall does not stop a user who types their password into a
fake site; training does not stop a worm exploiting an unpatched server. Organisations combine
**technical** controls (firewalls, encryption, patching), **procedural** controls (password policy,
least privilege, backup schedule) and **human** controls (training) so that if one layer fails,
another still protects the network.

## Worked example: securing a scenario

**Scenario.** A dental practice has a reception computer, three surgery computers and a server holding
patient records. Staff use one shared password. Patients can use the practice's Wi-Fi, which is the
same network as the server. The server has not been updated for two years.

| Vulnerability | Threat | Countermeasure |
|---|---|---|
| Shared password | Anyone who learns it can access every record; no record of who did what | Individual accounts with strong passwords and multi-factor authentication; access logs |
| Patient Wi-Fi on the same network as the server | A patient's infected device, or an attacker, can reach the server | Separate guest network isolated by the router/firewall |
| Unpatched server | Malware exploiting known flaws, such as ransomware | Apply updates; schedule automatic patching |
| No mention of backups | Ransomware could make records unrecoverable | Regular encrypted backups, one copy kept offline |

A strong answer prioritises: the isolated guest network and patching close the most direct routes to
the patient records, so they come first.

## Worked example: SQL injection and its fix

A login form builds its query by joining strings:

```
query <- "SELECT * FROM Users WHERE name = '" + inputName + "'"
```

If the user types `' OR '1'='1` as the name, the query becomes:

```
SELECT * FROM Users WHERE name = '' OR '1'='1'
```

Because `'1'='1'` is always true, every row is returned. The countermeasure is a **parameterised
query**, in which the database receives the query structure and the user's input separately, so the
input can only ever be treated as a value, never as SQL. Validating input (rejecting unexpected
characters or lengths) adds a second layer.

## Common mistakes

- **"A firewall stops all attacks."** It filters traffic by rules; it does not stop phishing, insider
  misuse or malware brought in on a USB drive.
- **"Encryption prevents interception."** Data can still be intercepted; encryption makes it
  unreadable.
- **Confusing a virus and a worm.** A worm spreads by itself; a virus needs a host file to be run.
- **Generic lists.** In a case study, link each countermeasure to the specific weakness described.
- **Forgetting the human layer.** Many successful attacks start with social engineering.

## Exam technique for the command words

- **Describe** a threat: what the attacker does, how it exploits a weakness and the effect.
- **Explain** a countermeasure: how it works and why it reduces that specific risk.
- **Evaluate** a security plan: effectiveness, cost, inconvenience to users, what it does not cover,
  and a conclusion.
- **Suggest** improvements for a scenario: one vulnerability, one matching countermeasure, each tied to
  the details given.

## Practise and revise

- [Network vulnerabilities and countermeasures revision notes](/resources/ib-dp-computer-science-2014-dp-computer-science-2027-a2-network-vulnerabilities-revision-notes/)
- [Network vulnerabilities and countermeasures practice questions](/resources/ib-dp-computer-science-2014-dp-computer-science-2027-a2-network-vulnerabilities-practice/)
- [A.3 Databases study guide](/resources/ib-dp-computer-science-a-3/)

## Source

International Baccalaureate Organization, *Diploma Programme Subject Brief, Sciences: Computer
science, first assessment 2027* (© 2024). The complete subject guide is available through the IB
Programme Resource Centre.
