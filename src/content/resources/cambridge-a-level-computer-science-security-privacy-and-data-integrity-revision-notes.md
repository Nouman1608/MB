---
title: "Cambridge A Level Computer Science (9618): Security, privacy and data integrity -- Revision Notes"
seoTitle: "Cambridge 9618 Security and Data Integrity Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 6: Security, privacy and data integrity"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 6
syllabusTopics:
  - qualification: "a-level"
    topic: "security-privacy-and-data-integrity"
  - qualification: "a-level"
    topic: "security-privacy-and-data-integrity"
    subtopic: "data-security"
  - qualification: "a-level"
    topic: "security-privacy-and-data-integrity"
    subtopic: "data-integrity"
description: "Revision notes on security threats and measures, validation checks, check digits, verification, parity bytes and blocks, and checksums for Cambridge AS 9618."
author: "marlbridge-academic-team"
publishedDate: 2026-11-08
featured: false
---

Topic 6 asks two questions about data: is it protected from people who should not see or change it (security and privacy), and is it accurate and unchanged after entry and transfer (integrity)? For Cambridge International AS & A Level Computer Science 9618 Paper 1 you must name threats and the measures against them, say how each measure works, and apply validation and verification methods, including parity and check digit calculations, to a scenario.

Related: [Security, privacy and data integrity study guide](/resources/cambridge-a-level-computer-science-security-privacy-and-data-integrity-study-guide/) · [practice questions](/resources/cambridge-a-level-computer-science-security-privacy-and-data-integrity-practice/) · [Computer Science course hub](/boards/cambridge/a-level/computer-science/)

## Syllabus coverage

| Section | Candidates should be able to |
|---|---|
| 6.1 | Explain the difference between the terms security, privacy and integrity of data |
| 6.1 | Show appreciation of the need for both the security of data and the security of the computer system |
| 6.1 | Describe security measures for systems from a stand-alone PC to a network: user accounts, passwords, authentication (digital signatures, biometrics), firewall, anti-virus, anti-spyware, encryption |
| 6.1 | Show understanding of threats from networks and the internet: malware (virus, spyware), hackers, phishing, pharming |
| 6.1 | Describe methods that can be used to restrict the risks posed by threats |
| 6.1 | Describe security methods to protect data, including encryption and access rights |
| 6.2 | Describe how validation and verification help protect the integrity of data |
| 6.2 | Describe and use validation: range, format, length, presence, existence, limit, check digit |
| 6.2 | Describe and use verification during data entry (visual check, double entry) and data transfer (parity check, byte and block; checksum) |

## Security, privacy and integrity: what is the difference?

| Term | Meaning | Example question to ask |
|---|---|---|
| Data security | Protecting data from loss, corruption and unauthorised access | Could someone steal or destroy the patient records? |
| Data privacy | Keeping personal data available only to those with a right to see it, and using it only for its stated purpose | Should the receptionist be able to read medical notes? |
| Data integrity | Data being accurate, complete and consistent, and unchanged except by authorised processes | Was the dose typed in correctly and transmitted unchanged? |

**Why secure the system as well as the data?** If the computer system itself is compromised (for example, malware gives a hacker control), every protection on the data can be bypassed, data can be changed without anyone noticing, and the system may stop working for its genuine users.

## Which threats does the syllabus name?

| Threat | What it is | Main measures against it |
|---|---|---|
| Virus | Malware that attaches to a file or program and replicates when it is run, corrupting or deleting data | Anti-virus software kept up to date; do not open unknown attachments |
| Spyware | Malware that secretly records the user's activity (e.g. key presses) and sends it to a third party | Anti-spyware software; firewall |
| Hacker | A person who gains unauthorised access to a system | Firewall, strong passwords, user accounts with access rights, encryption |
| Phishing | An email or message that pretends to be from a genuine organisation to trick the user into giving personal details or following a link | User awareness; spam filters; check the sender and the link |
| Pharming | Malicious code (on the PC or a DNS server) redirects the user to a fake website even when the correct address is typed | Anti-malware; check the site's certificate / padlock; keep software patched |

## How do the security measures work?

- **User accounts and passwords**: each user is identified and must authenticate before access; strong passwords that are changed regularly resist guessing.
- **Access rights**: each user or group is given only the permissions they need (none, read-only, read/write), so a breach of one account limits the damage.
- **Biometrics**: a physical characteristic (fingerprint, face, iris) is compared with a stored template; it cannot be forgotten and is hard to share.
- **Digital signatures**: authenticate the sender of a message and show it has not been altered (Topic 17 gives the mechanism).
- **Firewall**: sits between the computer or network and the internet, checks incoming and outgoing traffic against rules, and blocks traffic that does not meet them.
- **Anti-virus / anti-spyware**: scans files and memory for known malware signatures and suspicious behaviour, then quarantines or deletes it.
- **Encryption**: scrambles data with a key so it is unreadable without the matching key. It does not stop data being accessed or stolen, it makes stolen data useless. June 2025 examiners penalised answers saying encryption blocks access.

## What is the difference between validation and verification?

- **Validation** is an automatic check by the computer that data is **reasonable / follows the rules**. It cannot tell you the data is correct: a valid date of birth can still be the wrong one.
- **Verification** checks that data has been **entered or transferred accurately**, i.e. matches the original.

## Validation checks you must know

| Check | Tests that | Example |
|---|---|---|
| Range | The value lies between a lower and an upper limit | Exam mark 0 to 75 |
| Limit | The value is on one side of a single boundary | Quantity ordered ≥ 1 |
| Format | Data follows a pattern | Two letters followed by four digits |
| Length | Data has a set number, or range, of characters | Phone number has 11 digits |
| Presence | The field is not empty | Surname must be entered |
| Existence | The value exists, e.g. in a file or list of allowed values | Product code exists in the stock table |
| Check digit | A digit calculated from the other digits matches the one entered | Last digit of an ISBN or a barcode |

## Worked example: modulus 11 check digit

Code 307521, weights 7, 6, 5, 4, 3, 2 from the left.

1. Products: 3×7 = 21, 0×6 = 0, 7×5 = 35, 5×4 = 20, 2×3 = 6, 1×2 = 2. Sum = 84.
2. 84 ÷ 11 = 7 remainder 7.
3. Check digit = 11 − 7 = 4 (in the common ISBN-style method a result of 10 is written as X and a remainder of 0 gives 0; a question will state its own rule). Full code: 3075214.
4. If the operator types 3705214 (two digits swapped), the sum becomes 21 + 42 + 0 + 20 + 6 + 2 = 91, remainder 3, expected check digit 8. 8 ≠ 4, so the error is detected.

## Verification methods

| When | Method | How it works |
|---|---|---|
| Data entry | Visual check | The user compares the data on screen with the source document |
| Data entry | Double entry | The data is entered twice and the computer compares the two; any mismatch is flagged |
| Data transfer | Parity check (byte) | Each byte includes a parity bit set so the number of 1s is even (even parity) or odd; the receiver counts the 1s in each byte |
| Data transfer | Parity block | Parity is checked for each byte (row) and for each bit position (column) using a parity byte; the row and column that fail meet at the wrong bit, which can be corrected |
| Data transfer | Checksum | The sender calculates a value from the block of data and sends it; the receiver recalculates it; different values mean an error and a request to resend |

A parity bit is worked out **for each byte**, from the number of 1s in that byte. June 2024 candidates lost marks by treating parity as one bit for all the data. Byte parity cannot detect an even number of bit errors in one byte, because the count of 1s stays even (or odd).

## Worked example: even parity

Seven data bits 0110101 have four 1s, so for even parity the parity bit is 0. If the byte received has five 1s, the parity is odd and the byte is rejected; the receiver requests retransmission.

## Common mistakes and exam traps

- Saying validation ensures data is **correct**. It only ensures data is **sensible**.
- Mixing up checksums, check digits and parity checks (June 2025). A check digit is validation of an entered code; parity and checksums verify transmitted data.
- Saying encryption prevents hacking or access. It makes intercepted data unreadable.
- Confusing phishing (the user is tricked by a message) with pharming (the user is redirected without being tricked by a message).
- Giving a measure without the threat it addresses, or without saying how it works in the scenario.

## Frequently asked questions

**Can verification prove that data is correct?**
No. Double entry only shows that two entries match; if the source document is wrong, both entries will be wrong. Verification shows data was copied accurately.

**Why use double entry instead of a visual check?**
The computer does the comparison, so it does not rely on a tired operator noticing a difference. It takes twice as long to enter the data.

**When is a parity block better than a byte parity check?**
A parity block can locate a single wrong bit (the intersection of the failing row and column) and so correct it without resending the data.

**Is a firewall hardware or software?**
It can be either: a program on a computer or a device between a network and the internet. In both cases it filters traffic using rules.

## Official syllabus

Cambridge International AS & A Level Computer Science 9618, syllabus for 2026 and syllabus for 2027, 2028 and 2029, Topic 6 Security, privacy and data integrity (6.1 Data Security, 6.2 Data Integrity). Examiner points come from Cambridge's Principal Examiner Reports, summarised on our [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
