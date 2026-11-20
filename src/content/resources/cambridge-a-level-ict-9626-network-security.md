---
title: "Cambridge A Level Information Technology (9626): Network security"
seoTitle: "A Level IT 9626 Network Security: Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Topic 14 – Communications technology"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 14.9
syllabusTopics:
  - qualification: "a-level"
    topic: "communications-technology"
  - qualification: "a-level"
    topic: "communications-technology"
    subtopic: "network-security"
description: "Cambridge 9626 IT section 14.9 study guide: network security threats, their impact, physical and software methods of prevention, and firewall configuration."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide teaches **section 14.9 Network security** of Topic 14 Communications technology in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is A Level content, examined in Paper 3 Advanced Theory. The [communications technology revision notes](/resources/a-level-cambridge-ict-communications-technology-revision-notes/) summarise the whole topic; this page goes deeper on network security. Use it with the [network security revision notes](/resources/cambridge-a-level-ict-9626-network-security-revision-notes/) and the [network security practice questions](/resources/cambridge-a-level-ict-9626-network-security-practice/).

## What section 14.9 covers

| Syllabus strand | What you must be able to do |
|---|---|
| Threats | Describe brute force, denial of service (DoS), botnets, malware, malicious actors, SQL injection and poor network policies |
| Impact | Explain the effects on individuals and organisations: data destruction, manipulation and modification, theft by unauthorised users, identity theft |
| Prevention | Explain physical methods, software methods (biometrics, anti-malware, anti-virus and anti-spyware, encryption, access rights) and firewall configuration |
| Evaluation | Give advantages and disadvantages of the methods |

Network security protects the **confidentiality** (only authorised people see data), **integrity** (data is accurate and unchanged) and **availability** (data and services are there when needed) of a network and the data on it.

## Threats

### Brute force

An attacker tries every possible password or key until one works, usually using software. It succeeds more easily against short or simple passwords.

**Worked example 1: size of the search.** A 4-digit PIN has 10⁴ = 10,000 combinations. A 6-digit PIN has 10⁶ = 1,000,000. A password of 8 characters chosen from 95 printable characters has 95⁸ = 6,634,204,312,890,625 combinations. At 1,000,000,000 guesses a second, that takes 6,634,204,312,890,625 ÷ 10⁹ ≈ 6.6 million seconds, about **77 days**. A password of 4 lower-case letters has only 26⁴ = 456,976 combinations, which a computer tries in under a second. Length and a wider range of characters make brute force much harder. Locking an account after a few failed attempts stops it altogether.

### Denial of service (DoS)

The attacker floods a server or network with so many requests that real users cannot be served. The service becomes slow or unavailable. A **distributed denial of service (DDoS)** comes from many computers at once.

### Botnets

A **botnet** is a network of infected computers or devices ("bots") controlled secretly by an attacker (the "bot herder"). Owners usually do not know that their device is part of it. Botnets are used to launch DDoS attacks, send spam, spread malware or mine currency.

**Worked example 2: a botnet attack.** A botnet has 20,000 devices, each sending 50 requests per second. Total = 20,000 × 50 = 1,000,000 requests per second. If the server can handle 5,000 requests per second, the attack is 1,000,000 ÷ 5,000 = **200 times** its capacity, so genuine users cannot get through.

### Malware

Malicious software: viruses (attach to files and spread when they are run), worms (spread across networks by themselves), trojans (pretend to be useful software), ransomware (locks or encrypts data until a payment is made), spyware (secretly records activity) and keyloggers (record key presses).

### Malicious actors (perpetrators)

People who attack networks, with different motives: criminals seeking money; hackers seeking challenge or reputation; hacktivists making a political point; competitors or foreign states spying; and **insiders** such as dissatisfied employees who already have access. Knowing who may attack, and why, helps decide what to protect.

### SQL injection

A website passes user input to a database in a Structured Query Language (SQL) statement. If the input is not checked, an attacker types SQL code into a form field so that the database runs it.

**Example.** A login page builds the statement: `SELECT * FROM users WHERE name = '` + input + `'`. If the attacker enters `x' OR '1'='1`, the condition becomes true for every row, so the database returns every user record, and the attacker may log in without a valid password, view, change or delete data. Prevention: **validate and sanitise** input, use **parameterised queries**, and give the database account only the permissions it needs.

### (Poor) network policies

A **network policy** is a set of rules for how a network is used and protected. Poor policies create weaknesses, for example: no rules on password strength, staff using personal USB drives, no updates, unlimited access for all users, unsecured guest Wi-Fi, no backups, or no training on phishing. Many breaches succeed because of such weaknesses and human error, not clever attacks.

## Impact of threats

| Impact | Meaning | Example |
|---|---|---|
| Data destruction | Data is deleted or made unusable | Malware wipes a hospital's records; ransomware encrypts files |
| Manipulation and modification | Data is changed without permission | Altering exam marks or bank balances |
| Theft by unauthorised users | Data is copied or taken | Customer database stolen and sold |
| Identity theft | Personal details used to pretend to be someone else | Opening credit accounts in a victim's name |

**On individuals:** financial loss, stress, damaged credit rating, loss of private information, and time spent restoring accounts.

**On organisations:** loss of income while services are down, cost of recovery, fines under data protection law, loss of customers' trust, damaged reputation, legal action, and loss of trade secrets.

## Methods of prevention

### Physical methods

- **Barriers and locks** on server rooms and cabinets.
- **Surveillance** with CCTV.
- **Alarm systems** to warn of break-ins.
- **Security guards** and visitor checks.
- Keeping equipment out of sight, and controlling the use of removable media.

*Advantages:* stop theft and tampering and are visible deterrents. *Disadvantages:* cost; do not stop attacks over the network; people can be bribed or make mistakes.

### Software methods

**Biometric methods** identify people by body characteristics, such as fingerprints, face or iris. *For:* hard to forget, lose or share. *Against:* cost; false rejections and acceptances; cannot be changed if copied; privacy concerns.

**Anti-malware, anti-virus and anti-spyware** programs scan files and activity, compare them with known patterns and unusual behaviour, and block, quarantine or remove threats. *For:* automatic protection against many threats. *Against:* must be updated constantly; cannot detect brand-new malware; slow the system; give a false sense of safety.

**Encryption** scrambles data using a key so that only people with the right key can read it. It protects data stored and data in transit, such as with HTTPS and VPNs. *For:* stolen data is useless to a thief. *Against:* if the key is lost, the data is lost; slows processing; needs managing keys.

**Access rights (permissions)** limit what each user can do: for example, read only, read and write, or no access. The principle of **least privilege** gives each user the minimum access needed. Combined with strong passwords and two-factor authentication, they control who gets in. *For:* limits the damage from a stolen account or an insider. *Against:* administration is time-consuming; users find it inconvenient.

### Firewalls

A firewall controls traffic entering and leaving a network using rules. Configuration includes:

- **Allow lists and block lists** of IP addresses and websites.
- **Port rules**: allow only necessary ports, such as those used for web traffic.
- **Protocol rules**: block unsafe protocols such as Telnet.
- **Direction**: block unsolicited incoming connections, but allow replies to requests made from inside.
- **Default deny**: block everything that is not specifically allowed.
- **Logging**: record blocked traffic, to spot attacks.

*For:* first line of defence; blocks many attacks; can limit staff access to sites. *Against:* cannot stop threats from inside, malware already inside, or attacks sent over allowed ports; incorrect rules block genuine traffic; needs expert management.

## Matching threat to prevention

| Threat | Main preventions |
|---|---|
| Brute force | Long complex passwords; account lock-out; two-factor authentication |
| DoS and botnets | Firewall and traffic filtering; extra capacity; patching devices; anti-malware to stop devices joining a botnet |
| Malware | Anti-malware; updates; no unknown attachments or USB drives; restricted rights |
| SQL injection | Input validation; parameterised queries; least privilege on database account |
| Malicious actors, including insiders | Access rights; monitoring and logs; physical security; staff screening |
| Poor policies | Written security policy; staff training; regular audits and updates |
| Theft of data | Encryption; access rights; backups kept securely |

No single method is enough. Good security uses several layers, so that if one fails, others still protect.

## Common mistakes

- Describing a threat only by its name ("malware steals data") without saying how it works.
- Treating DoS and DDoS as the same without mentioning that a botnet supplies many sources.
- Saying a firewall stops viruses. It filters traffic; anti-malware deals with viruses.
- Saying encryption stops theft. It stops the thief reading the data.
- Forgetting insiders and poor policies as threats.
- Listing physical and software methods without stating what each prevents.

## Exam technique

- **Threats**: define, explain how the attack works and state its effect.
- **Prevention**: name the method, say how it works and link it to the threat.
- **Evaluate**: give advantages and a limitation for each method, and recommend layers.
- Use the scenario: a bank, a school or a hospital have different priorities for data.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 14 Communications technology, section 14.9 Network security.
