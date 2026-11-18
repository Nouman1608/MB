---
title: "IB DP Computer Science (DP Computer Science): Network Vulnerabilities and Countermeasures (HL) -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed HL notes on network vulnerabilities and countermeasures for IB DP Computer Science A.2: threats, defences, encryption, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-18: Written from the public subject brief and the A2.4.2-A2.4.3 label (network vulnerabilities and countermeasures, HL only); the exact learning outcomes were not available, so please check against the full DP Computer Science guide."
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **A2.4.2 and A2.4.3, network vulnerabilities and countermeasures**, HL-only
statements in A.2 Networks (IB DP Computer Science, first assessment 2027). For explanations and
worked scenarios, use the
[network vulnerabilities and countermeasures study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a2-network-vulnerabilities-countermeasures/);
for firewalls as network devices, see the
[A.2 Networks revision notes](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-2-revision-notes/).

## Key terms

| Term | Meaning |
|---|---|
| Vulnerability | A weakness that could be exploited |
| Threat | Something that could exploit a vulnerability |
| Countermeasure | A control that removes a weakness or reduces harm |
| Malware | Software installed without consent to cause harm |
| Worm | Malware that spreads across a network by itself |
| Trojan | Malware disguised as legitimate software |
| Ransomware | Malware that encrypts files and demands payment |
| Phishing | Fake messages that trick users into revealing details or running malware |
| Man-in-the-middle | Attacker secretly relays and can read or alter traffic between two parties |
| DDoS | Flooding a target with traffic from many devices so real users cannot be served |
| Botnet | Network of compromised devices controlled by an attacker |
| Brute force | Trying every possible password or key |
| SQL injection | Inserting SQL into an input so that it changes a query |
| Multi-factor authentication | Requiring two or more kinds of evidence of identity |
| Least privilege | Giving each user only the access they need |
| VPN | Encrypted tunnel across an untrusted network |

## Threat → countermeasure pairs

| Threat | Exploits | Countermeasures |
|---|---|---|
| Virus / trojan | Users running untrusted files | Anti-malware; restrict installation rights; training |
| Worm | Unpatched software | Patching; firewall closing unused ports |
| Ransomware | Unpatched systems, phishing | Patching; training; **offline backups** |
| Phishing | Lack of user awareness | Training; email filtering; multi-factor authentication |
| Interception | Plaintext traffic, open Wi-Fi | Encryption (TLS/HTTPS, WPA2/WPA3); VPN |
| Man-in-the-middle | Unauthenticated connections | TLS with certificates; avoid untrusted networks |
| DoS / DDoS | Limited server capacity | Traffic filtering; extra capacity; intrusion prevention |
| Brute force | Weak passwords | Long passwords; lockout after failures; MFA |
| SQL injection | Queries built from raw input | Parameterised queries; input validation |
| Insider misuse | Excess permissions | Least privilege; access logs; removing leavers' accounts |
| Rogue access point | Users trusting network names | Training; VPN; network monitoring |

## Encryption in four lines

- **Symmetric:** one shared key; fast; key must be exchanged securely.
- **Asymmetric:** public key encrypts, private key decrypts; public key can be shared openly; slower.
- **TLS (HTTPS):** asymmetric keys and certificates authenticate the server and agree a session key,
  then symmetric encryption protects the session.
- Encryption does **not** stop interception; it makes intercepted data **unreadable**.

## Defence in depth

Layer **technical** (firewall, encryption, patching, anti-malware), **procedural** (password policy,
least privilege, backups) and **human** (training) controls, so one failure is caught by another.

## Evaluating a countermeasure

Judge each control on four points: **effectiveness** (which threats it stops and which it does not),
**cost** (purchase, staff time, upkeep), **usability** (does it slow users down, so they work around
it?) and **coverage gaps** (what another layer must handle). A recommendation that weighs these beats
a longer list.

## Answer structure for scenario questions

1. Quote the weakness from the scenario.
2. Name the threat that exploits it and the harm.
3. Give a countermeasure and explain **how** it reduces that harm.
4. If asked to evaluate, add a cost or limitation and a priority.

## Exam traps

- A firewall filters traffic; it does **not** stop phishing or insiders.
- A **worm** self-spreads; a **virus** needs its host file to run.
- **DDoS** cannot be stopped by blocking one address.
- Backups protect against ransomware only if a copy is **offline** or otherwise unreachable.
- "Use a strong password" earns little; specify length, uniqueness, lockout or MFA.
- Always tie the countermeasure to the **specific** vulnerability in the scenario.

## Self-test

1. Distinguish a vulnerability from a threat.
2. How does a worm differ from a virus?
3. What does ransomware do?
4. Why is phishing described as social engineering?
5. Explain why a DDoS attack is harder to block than a DoS attack.
6. What does encryption achieve if data is intercepted?
7. Why can a public key be shared openly?
8. State two features of a strong authentication policy.
9. Which countermeasure prevents SQL injection, and how?
10. What is the principle of least privilege?
11. Why should one backup copy be kept offline?
12. Give one limitation of a firewall.

**Answers:**
1. A vulnerability is a weakness; a threat is something that could exploit it.
2. A worm spreads across a network by itself; a virus attaches to a file and spreads when that file is
   run.
3. It encrypts the victim's files and demands payment for the decryption key.
4. It manipulates people (by imitating a trusted sender) rather than exploiting technical flaws.
5. The traffic comes from many devices at once, so blocking one source address does not stop it.
6. It makes the data unreadable to anyone without the key.
7. Data encrypted with it can only be decrypted with the matching private key, which is kept secret.
8. Any two: long, unique passwords; account lockout after repeated failures; multi-factor
   authentication; no default passwords.
9. Parameterised queries: the input is sent separately from the query structure, so it is treated
   only as data, never as SQL code.
10. Each user is given only the permissions needed for their role.
11. So that ransomware or an attacker on the network cannot encrypt or delete it.
12. Any one: it cannot stop phishing; it cannot stop insiders with valid access; it cannot stop
    malware brought in on removable media; misconfigured rules leave gaps.

## Related pages

- [Network vulnerabilities and countermeasures practice questions](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a2-network-vulnerabilities-countermeasures-practice/)
- [Servers, client-server and peer-to-peer revision notes](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a2-client-server-peer-to-peer-revision-notes/)

## Official syllabus

International Baccalaureate Organization, *Diploma Programme Subject Brief -- Sciences: Computer
science*, first assessment 2027, © 2024.
