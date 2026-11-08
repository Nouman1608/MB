---
title: "Cambridge A Level Computer Science (9618): Security, privacy and data integrity -- Practice Questions"
seoTitle: "Cambridge 9618 Security and Data Integrity Practice"
resourceType: "practice-questions"
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
description: "Exam-style questions with answers on threats, security measures, validation, check digits, double entry, parity blocks and checksums for Cambridge AS 9618."
author: "marlbridge-academic-team"
publishedDate: 2026-11-08
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Security, privacy and data integrity revision notes](/resources/cambridge-a-level-computer-science-security-privacy-and-data-integrity-revision-notes/) · [study guide](/resources/cambridge-a-level-computer-science-security-privacy-and-data-integrity-study-guide/)

These questions cover all of Topic 6 of Cambridge International AS & A Level Computer Science 9618: data security (6.1) and data integrity (6.2), assessed in Paper 1. They are set in short scenarios, as Cambridge questions are, so every answer should use the scenario. Answers are in mark-scheme style.

---

## Questions

**1.** A dental clinic stores patient records on a networked computer system. Explain the difference between the **security**, the **privacy** and the **integrity** of these records. **[3]**

**2.** Explain why the clinic must protect the security of its computer system as well as the security of the data. **[2]**

**3.** Describe **three** security measures the clinic could use to protect its network, explaining how each one protects the system. **[6]**

**4.** **(a)** Describe what is meant by **phishing** and by **pharming**. **[4]**
**(b)** Describe **two** methods that can be used to restrict the risk from pharming. **[2]**

**5.** Explain how encryption protects patient data that is sent to a laboratory over the internet. **[2]**

**6.** The clinic's booking form has these fields. For each field, identify **one** suitable validation check and give an example of data that the check would reject.

**(a)** Patient ID (always 2 letters followed by 5 digits) **[2]**
**(b)** Number of appointments booked this year (cannot be negative, no upper limit) **[2]**
**(c)** Dentist code (must be one of the codes in the Dentist table) **[2]**
**(d)** Appointment length in minutes (from 10 to 90) **[2]**

**7.** Explain why a record can pass all its validation checks and still be incorrect. **[2]**

**8.** A product code has six digits and a modulus 11 check digit as a seventh digit. Weights 7, 6, 5, 4, 3, 2 are applied to the six digits from left to right. The check digit is 11 minus the remainder of the weighted sum divided by 11.

**(a)** Calculate the check digit for 418230. Show your working. **[3]**
**(b)** A user types 4128308 instead of the correct code 4182308, swapping two digits. Show how the check digit allows this error to be detected. **[3]**

**9.** Describe **double entry** and state **one** drawback of it. **[3]**

**10.** Four bytes and a parity byte are sent using **even** parity. The right-most bit of each byte is its parity bit, and the parity byte holds the column parity.

| | b1 | b2 | b3 | b4 | b5 | b6 | b7 | b8 |
|---|---|---|---|---|---|---|---|---|
| Byte 1 | 1 | 0 | 1 | 1 | 0 | 0 | 1 | 0 |
| Byte 2 | 0 | 1 | 1 | 0 | 0 | 1 | 1 | 1 |
| Byte 3 | 1 | 1 | 1 | 0 | 0 | 1 | 0 | 0 |
| Byte 4 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 1 |
| Parity byte | 0 | 0 | 1 | 0 | 0 | 0 | 1 | 0 |

**(a)** One bit was changed during transmission. Identify the byte and the bit position that are wrong, and explain how you found them. **[3]**
**(b)** Explain why a parity check on single bytes might not detect an error. **[2]**

**11.** Describe how a **checksum** is used to verify that a block of data has been transferred correctly. **[3]**

---

## Answers

**1.** Security: keeping the records safe from loss, damage and unauthorised access (e.g. hacking or deletion) [1]. Privacy: the patients' personal data is seen only by people entitled to it (e.g. dentists, not other patients) and used only for its intended purpose [1]. Integrity: the records are accurate, complete and consistent, e.g. treatments are recorded correctly and are not altered in error [1].

**2.** If the system is compromised, e.g. by malware or a hacker gaining control, the protection on the data can be bypassed [1]; the system could also be made unavailable (the clinic could not book or treat patients), or data could be altered without anyone knowing [1].

**3.** Any three, each with a measure [1] and how it protects [1]:
- User accounts with passwords: each member of staff must log in, so only authorised users can access the system [1+1].
- Access rights: e.g. receptionists can view bookings but not clinical notes, so each user reaches only the data they need [1+1].
- Firewall: checks traffic between the clinic network and the internet against rules and blocks unauthorised traffic, stopping hackers reaching the server [1+1].
- Anti-virus / anti-spyware software: scans files and memory, detects malware by signature and quarantines or deletes it before it can damage or steal data [1+1].
- Biometrics: a fingerprint or face scan is compared with stored data, so a stolen password alone is not enough to log in [1+1].
- Encryption of stored data: if the server or a laptop is stolen, the records cannot be read without the key [1+1].

**4. (a)** Phishing: a message (e.g. an email) that appears to come from a genuine organisation [1] tricks the user into giving personal details or clicking a link to a fake site [1]. Pharming: malicious code is installed on the user's computer or a DNS server is altered [1], so the user is redirected to a fake website even when they type the correct web address [1].
**(b)** Any two: use up-to-date anti-malware to detect the redirecting code [1]; check the website's URL and digital certificate / that a secure connection is shown before entering details [1]; keep the operating system and browser patched [1].

**5.** The data is converted into ciphertext using a key before it is sent [1]. If it is intercepted, it cannot be understood without the decryption key; only the laboratory with the key can read it [1].

*Tip:* do not write that encryption stops the data being intercepted or accessed. It makes intercepted data unreadable.

**6.** One mark for a suitable check, one for a correctly rejected example.
**(a)** Format check [1]; rejects e.g. "1A23456" or "AB1234X" [1]. (A length check of 7 characters is also accepted, rejecting "AB1234".)
**(b)** Limit check (≥ 0) [1]; rejects e.g. −2 [1].
**(c)** Existence check [1]; rejects a code that is not in the Dentist table, e.g. "D99" if no such dentist exists [1].
**(d)** Range check (10 to 90) [1]; rejects e.g. 5 or 120 [1].

**7.** Validation only checks that data is reasonable / obeys rules, not that it is the true value [1]. For example, an appointment length of 30 minutes passes the range check even if 60 was intended [1].

**8. (a)** 4×7 + 1×6 + 8×5 + 2×4 + 3×3 + 0×2 = 28 + 6 + 40 + 8 + 9 + 0 [1] = 91 [1]. 91 ÷ 11 = 8 remainder 3, so the check digit is 11 − 3 = **8** (code 4182308) [1].
**(b)** The computer recalculates the check digit from the first six digits entered: 4×7 + 1×6 + 2×5 + 8×4 + 3×3 + 0×2 = 28 + 6 + 10 + 32 + 9 + 0 = 85 [1]. 85 ÷ 11 = 7 remainder 8, so the expected check digit is 11 − 8 = 3 [1]. The digit entered is 8, which does not match 3, so the code is rejected as mistyped [1].

**9.** The data is entered twice (often by two different operators) [1]; the computer compares the two versions and flags any differences for checking [1]. Drawback: it takes twice as long / costs more; or, if the source document is wrong, both entries will match and the error is not found [1].

**10. (a)** Byte 2 contains five 1s, which is odd, so byte 2 is wrong [1]. Column b5 contains 0, 0, 0, 1 with parity bit 0: one 1, which is odd, so column b5 is wrong [1]. The error is at the intersection: **byte 2, bit b5**, which should be 1 (and can be corrected by flipping it) [1].
**(b)** If an even number of bits in a byte change (e.g. two bits flip) [1], the number of 1s is still even, so the parity is still correct and the error is not detected [1].

**11.** The sender calculates a value (checksum) from the data in the block using an agreed algorithm [1] and sends it with the block. The receiver recalculates the checksum from the data received [1]. If the two values differ, an error has occurred and the block is requested again [1].

---

## Where marks are usually lost

- Writing "security keeps data safe" for all three terms in question 1. Each term needs its own meaning.
- Naming a measure such as "firewall" with no explanation of how it protects the clinic.
- Describing encryption as stopping access. It makes the data unreadable.
- Confusing a check digit (validation of an entered code) with a parity bit or checksum (verification of transferred data).
- Working out one parity bit for the whole block instead of one for each byte.

## Frequently asked questions

**Do validation questions always ask for an example?** Often. Give an example that fails the check you named; an example that a different check would reject does not score.

**How many marks does a parity block question carry?** Typically one each for identifying the row, the column and the bit, as in question 10. Show the count of 1s for the failing row and column.

**Is a type check on the syllabus?** The 9618 syllabus lists range, format, length, presence, existence, limit and check digit. Use those names where they fit the field.

## Official syllabus

Questions are written against Cambridge International AS & A Level Computer Science 9618, syllabus for 2026 and syllabus for 2027, 2028 and 2029, Topic 6 Security, privacy and data integrity. Examiner comments by series are on the [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
