---
title: "Cambridge A Level Computer Science (9618): Security, privacy and data integrity -- Study Guide"
resourceType: "study-guides"
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
description: "Cambridge 9618 Topic 6 study guide: security, privacy and integrity, threats and countermeasures, validation, verification, check digits and parity."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08 recheck: fixed a broken sentence fragment in the countermeasures list; aligned threats and measures to syllabus 6.1 (added integrity definition, digital signatures, anti-spyware; worms/trojans/ransomware/DoS no longer taught as required); please re-review; 2026-11-08: reviewed by harris-khan."
publishedDate: 2026-11-08
featured: false
---

This topic asks two related questions about the data a computer system holds. Is it safe from people who should not see or change it (security and privacy)? And is it correct, complete and unchanged when it is entered, stored and transmitted (integrity)? Cambridge expects you to name threats and countermeasures precisely, to explain why a measure works, and to apply validation and verification to a described system.

## Where this fits in the specification

Topic 6 is an AS Level topic, so it can be examined on Paper 1 (Theory Fundamentals) and in the theory parts of Paper 2. It splits into data security (6.1) and data integrity (6.2). Questions often give a short scenario, such as a clinic storing patient records, and ask you to apply ideas rather than recite lists.

## Data security and privacy

The syllabus (6.1) asks you to explain the difference between three terms:

- **Data security** means protecting data from loss, damage and unauthorised access.
- **Data privacy** is about keeping personal data confidential: the right of individuals to control who holds and uses their data. Data protection laws give people rights over their data and place duties on organisations.
- **Data integrity** means the data is accurate, complete and consistent, and has not been changed in error.

You also need to appreciate that both the **security of the data** and the **security of the computer system** matter: a system that is broken into can have its data stolen, but it can also be used to damage other systems or be made unavailable.

### What threats do networks and the internet pose?

The syllabus names these threats:

- **Malware**, including **viruses** (programs that copy themselves, attached to other files, and may corrupt or delete data) and **spyware** (software that secretly records activity, such as key presses, and sends it to a third party).
- **Hackers**: people who gain unauthorised access to a system, often by guessing or stealing passwords, to steal, change or delete data.
- **Phishing**: a fake email or message that tricks the user into revealing details or following a link to a fake website.
- **Pharming**: malicious code, or a tampered DNS record, sends the user to a fake website even though they typed the correct address.

Data is also at risk from accidents, such as accidental deletion, hardware failure, fire or power loss, which is why backup procedures matter.

### What security measures protect computer systems and data?

Match the measure to the threat and say how it helps.

- **User accounts and passwords** identify each user and control access. Strong passwords are long, mixed and changed when compromised.
- **Access rights** limit what each account can open, change or delete. A receptionist might have read-only access to appointments, while a doctor can edit clinical notes.
- **Authentication techniques** prove identity. **Biometrics** such as fingerprints use a physical trait that is hard to share, although a false rejection can lock out a genuine user. A **digital signature** proves who sent a message and that it has not been altered.
- **Firewalls** examine incoming and outgoing traffic and block anything that breaks the configured rules, protecting against hackers.
- **Anti-virus software** scans files for known virus signatures and suspicious behaviour, and must be kept up to date. **Anti-spyware** detects and removes spyware.
- **Encryption** makes stored or transmitted data unreadable without the key, so a stolen laptop or an intercepted message does not reveal its contents.
- **Backups**: regular copies stored in a different place allow recovery after loss. A backup stored beside the original is lost in the same fire.

These range from a stand-alone PC (password, anti-virus, encryption of the disk) to a network of computers (user accounts with access rights managed centrally, a firewall at the network boundary).

## Data integrity: validation and verification

Data integrity means that data is accurate, complete and consistent. A computer will process nonsense faithfully, so checks are built in at the point of entry and during transfer.

### Validation

**Validation** is an automatic check that data is reasonable and sensible. It cannot prove the data is correct. Typical checks:

| Check | What it tests | Example |
|---|---|---|
| Range | Value lies between limits | Month between 1 and 12 |
| Limit | One boundary only | Quantity must be at least 1 |
| Type | Right kind of data | Age is an integer |
| Length | Number of characters | Postcode 6 to 8 characters |
| Format | Pattern of characters | Two letters then four digits |
| Presence | Field is not empty | Surname must be entered |
| Existence | Value is on a list | Product code found in stock table |
| Uniqueness | No duplicate | Username not already used |
| Check digit | Calculated digit catches typing errors | Last digit of a code |

The value 31 passes a range check for day of month yet is still wrong for February. That is the reason validation is not enough on its own.

### Verification

**Verification** checks that data has been copied or entered accurately. During data entry the two usual methods are a **visual check** (the user reads the screen against the source) and **double entry** (the data is typed twice and the two entries compared). During data transfer you can use a **parity check** or a **checksum**.

### Parity checks

A parity bit is added so the number of 1s in the group is always even (even parity) or always odd (odd parity). The receiver counts the 1s and, if the parity is wrong, requests the data again. A **parity block** check adds a parity bit to each row and to each column of a block of bytes, so a single changed bit can be located at the crossing of the failing row and column and then corrected.

A **checksum** is calculated from the data by an agreed method and sent with it. The receiver recalculates it; a different result means the data changed.

## Worked example 1: a check digit

A library gives each member a 7-digit number followed by a modulus 11 check digit. Weights 8, 7, 6, 5, 4, 3, 2 are applied from left to right. Find the check digit for the member number 4829163.

1. Multiply each digit by its weight: 4x8 = 32, 8x7 = 56, 2x6 = 12, 9x5 = 45, 1x4 = 4, 6x3 = 18, 3x2 = 6.
2. Add the products: 32 + 56 + 12 + 45 + 4 + 18 + 6 = 173.
3. Divide by 11: 173 = 15 x 11 + 8, so the remainder is 8.
4. Check digit = 11 - 8 = 3.

The full number is 48291633. To validate an entry, recompute the check digit from its first seven digits and compare it with the eighth. If someone types 42891633 (second and third digits swapped), the weighted sum of 4289163 is 32 + 14 + 48 + 45 + 4 + 18 + 6 = 167, the remainder is 2, the check digit should be 9, and the typed 3 does not match, so the entry is rejected. A check digit is good at detecting single wrong digits and transposed neighbours, but it does not prove that the number belongs to a real member.

## Worked example 2: parity

A system uses even parity with the parity bit as the right-most bit. The seven data bits are 1011001.

1. Count the 1s: there are four, which is already even, so the parity bit is 0.
2. Transmitted byte: 10110010.
3. The receiver gets 10110110. It contains five 1s, which is odd, so an error is reported and retransmission requested.
4. Now suppose two bits flip and the receiver gets 10100110. It has four 1s, which is even, so the error goes unnoticed.

Parity therefore detects an odd number of changed bits but not an even number. In an exam, say that the check "may fail to detect two errors in the same byte".

A simple validation routine in Cambridge-style pseudocode shows how a range, type and presence check combine:

```
FUNCTION ValidMonth(Entry : STRING) RETURNS BOOLEAN
  DECLARE Index : INTEGER
  DECLARE Ch : CHAR
  IF LENGTH(Entry) = 0 THEN                  // presence
    RETURN FALSE
  ENDIF
  FOR Index ← 1 TO LENGTH(Entry)             // type: digits only
    Ch ← MID(Entry, Index, 1)
    IF Ch < '0' OR Ch > '9' THEN
      RETURN FALSE
    ENDIF
  NEXT Index
  IF LENGTH(Entry) = 1 THEN                  // range: 1 to 12
    RETURN Entry <> "0"
  ENDIF
  RETURN LENGTH(Entry) = 2 AND Entry >= "01" AND Entry <= "12"
ENDFUNCTION
```

## Common mistakes

- Saying validation makes sure data is correct. It only makes sure data is acceptable.
- Describing verification as "checking the data is right" without saying it compares against the original or a second entry.
- Giving a countermeasure without linking it to a threat. "Use a firewall" scores poorly against "A firewall blocks unsolicited incoming connections so a hacker cannot reach the database server".
- Treating a backup as security against theft. It helps recover data; encryption and access control limit who can read it.

## Exam technique

Command words matter. **State** and **give** need a short fact. **Describe** needs a sentence that says what happens. **Explain** needs a reason, so add "because" or "so that". **Justify** in a scenario asks you to choose and defend a measure. Marks usually come as pairs: the measure and its effect. When a question gives a scenario, use its details, such as "clinic", "patients" or "online shop", in your answer.

## Frequently asked questions

**What is the difference between security, privacy and integrity of data?**
Security protects data from loss, damage and unauthorised access. Privacy is about keeping personal data confidential and under the control of the person it concerns. Integrity means the data is accurate, complete and unchanged.

**Which validation checks does the 9618 syllabus name?**
Range, format, length, presence, existence and limit checks, and check digits. Type and uniqueness checks are useful extras but are not on the list.

**What is the difference between a parity byte check and a parity block check?**
A byte check adds one parity bit per byte and only detects an error. A block check adds parity to every row and column, so a single wrong bit can be located and corrected.

**Is a digital signature the same as encryption?**
No. A digital signature authenticates the sender and shows the message has not been altered; encryption hides the content from anyone without the key.

## Check your understanding

1. State the difference between data security and data privacy. *Security protects data from loss, damage and unauthorised access; privacy concerns an individual's control over how their personal data is collected and used.*
2. Explain how pharming differs from phishing. *Phishing tricks a user into acting on a fake message; pharming sends the user to a fake site automatically through malware or a changed DNS record, even when they type the correct address.*
3. Give two validation checks suitable for an input of a 4-digit PIN. *Length check (exactly 4 characters), type check (digits only); a presence check also applies.*
4. Describe double entry as a verification method. *The data is typed in twice, usually by different people or at different times, and the two copies are compared; a mismatch means one is wrong.*
5. Calculate the even-parity bit for 1101110. *There are five 1s, so the parity bit must be 1 to make six.*
6. Explain why 30 February passes a range check for day yet is still invalid. *The range check only tests 1 to 31; it does not link the day to the month, so a further check is needed.*
7. A weighted modulus 11 sum for a code is 140. Find the check digit. *140 = 12 x 11 + 8, remainder 8, so check digit = 11 - 8 = 3.*
8. Explain why a backup stored in the same room as the server gives limited protection. *Fire, flood or theft could destroy both copies, so the backup should be kept offsite.*
