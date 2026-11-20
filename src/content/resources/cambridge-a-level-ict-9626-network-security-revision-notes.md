---
title: "Cambridge A Level Information Technology (9626): Network security -- Revision Notes"
seoTitle: "A Level IT 9626 Network Security: Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge 9626 IT section 14.9: security threats, their impact, physical and software prevention, firewalls and a twelve-question self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes condense **section 14.9 Network security** (Topic 14 Communications technology) of the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. A Level content, examined in Paper 3 Advanced Theory. Full explanations and worked examples are in the [network security study guide](/resources/cambridge-a-level-ict-9626-network-security/); test yourself with the [network security practice questions](/resources/cambridge-a-level-ict-9626-network-security-practice/).

## The aims of security

| Aim | Meaning |
|---|---|
| Confidentiality | Only authorised people can read the data |
| Integrity | Data is accurate and has not been changed |
| Availability | Data and services are usable when needed |

## Threats: recall

| Threat | What it is | Key point |
|---|---|---|
| Brute force | Trying every possible password or key | Defeated by length, variety and lock-out |
| Denial of service (DoS) | Flooding a server so users cannot be served | DDoS comes from many sources |
| Botnet | Infected devices controlled by an attacker | Used for DDoS, spam, spreading malware |
| Malware | Malicious software | Viruses, worms, trojans, ransomware, spyware, keyloggers |
| Malicious actors | Criminals, hackers, hacktivists, spies, insiders | Different motives; insiders have access already |
| SQL injection | SQL code typed into a form that the database runs | Stopped by input validation and parameterised queries |
| Poor network policies | Weak rules, no training, no updates | Many breaches are caused by people |

## Impact: recall

| Impact | Example |
|---|---|
| Data destruction | Malware or ransomware makes data unusable |
| Manipulation and modification | Changing marks or balances |
| Theft by unauthorised users | Copying a customer database |
| Identity theft | Using stolen details to open accounts |

**Individuals:** money lost, stress, damaged credit, private information exposed. **Organisations:** lost income, recovery cost, fines, lost trust, legal action, lost trade secrets.

## Prevention: recall

| Method | How it works | For | Against |
|---|---|---|---|
| Barriers, locks | Stop physical entry | Simple deterrent | Do not stop network attacks |
| Surveillance, alarms | Watch and warn | Evidence and warning | Cost; need monitoring |
| Security guards | People check entry | Flexible | Cost; can make mistakes |
| Biometrics | Identify by body feature | Cannot be forgotten or shared easily | Cost; errors; cannot be changed |
| Anti-malware, anti-virus, anti-spyware | Scan and remove threats | Automatic protection | Needs updates; misses new malware |
| Encryption | Scrambles data with a key | Stolen data is unreadable | Key loss means data loss |
| Access rights | Limit what each user can do | Limits damage; least privilege | Administration time |
| Firewall | Filters traffic by rules | First line of defence | Cannot stop inside threats or allowed traffic |

## Firewall configuration: recall

- Allow or block by **IP address** or site.
- Allow only needed **ports and protocols**; block Telnet.
- Block unsolicited **incoming** connections; allow replies to outgoing requests.
- **Default deny**: block everything not allowed.
- **Log** blocked traffic.

## Threat to defence

| Threat | Defence |
|---|---|
| Brute force | Long varied password; lock-out after failed attempts; two-factor authentication |
| DoS and botnet | Firewall filtering; extra capacity; patch devices; anti-malware |
| Malware | Anti-malware; updates; do not open unknown attachments |
| SQL injection | Validate input; parameterised queries; least privilege |
| Insiders | Access rights; logs; physical security |
| Poor policies | Written policy; training; audits |

## Quick examples

**Brute force.** A PIN of 4 digits has 10⁴ = **10,000** combinations. At 100 guesses per second: 10,000 ÷ 100 = **100 seconds**. With a lock-out after 3 attempts, only 3 guesses are possible.

**Botnet.** 5,000 bots each send 20 requests per second: 5,000 × 20 = **100,000** requests per second. A server that handles 2,000 per second is overloaded by 100,000 ÷ 2,000 = **50 times**.

**SQL injection.** Entering `x' OR '1'='1` makes the condition always true, so all records are returned. Parameterised queries treat the input as data and not as code.

## Layers of defence

No single method is enough. A bank might use: locked server room (physical), staff photo passes (physical), strong passwords and two-factor login (access), encryption of stored and transmitted data, a firewall at the network edge, anti-malware on all devices, and staff training under a written policy. If one layer fails, the others still protect.

## Exam traps

- Defining a threat but not explaining how it works.
- Saying a firewall removes viruses.
- Saying encryption stops data being stolen.
- Forgetting insiders and poor policies.
- Naming a method without linking it to a threat.
- Ignoring the limitations of each method.

## Self-test

1. What is a brute force attack?
2. Distinguish between DoS and DDoS.
3. What is a botnet?
4. Name two types of malware.
5. Why are insiders a threat?
6. How does SQL injection work?
7. What is the impact of identity theft on an individual?
8. State two physical methods of security.
9. Give one advantage and one disadvantage of biometrics.
10. What does encryption protect?
11. What is meant by least privilege?
12. 2,500 bots each send 40 requests per second. How many requests per second is that?

### Answers

1. Trying every possible password or key until the right one works, usually with software.
2. DoS floods a target from one source; DDoS uses many sources at once, often a botnet.
3. A network of infected devices controlled secretly by an attacker.
4. Any two: virus, worm, trojan, ransomware, spyware, keylogger.
5. They already have access and knowledge of the system.
6. An attacker enters SQL code into an input field, and the database runs it because the input is not checked.
7. Financial loss, damage to credit rating, time and stress in recovering.
8. Any two: locks, barriers, CCTV, alarms, security guards.
9. Advantage: cannot be forgotten or easily shared. Disadvantage: cost, or errors in matching.
10. Data stored or sent: unauthorised people cannot read it without the key.
11. Each user is given only the access needed for their job.
12. 2,500 × 40 = 100,000 requests per second.
