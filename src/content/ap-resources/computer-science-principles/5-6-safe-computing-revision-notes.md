---
resourceId: "mb-ap-csp-5.6-revision-notes"
title: "Safe Computing: Revision Notes (Computer Science Principles 5.6)"
description: "One-page recap of safe computing: PII, privacy risks, strong passwords, multifactor authentication, symmetric and public key encryption, certificate authorities, malware and common attacks."
course: "computer-science-principles"
unit: 5
topics: ["5.6"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-5.6-study-guide"]
learningObjectives: 
  - "Recall the key ideas of safe computing without notes"
  - "Spot the common errors before making them"
skills: ["4", "5", "6"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-5.6-study-guide", "mb-ap-csp-5.6-practice", "mb-ap-csp-5.6-checklist"]
next: "mb-ap-csp-5.6-practice"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "Personally identifiable information (PII) identifies, links, relates or describes an individual; collected and combined data can be used to deduce private information, and information placed online is difficult to delete."
  - "Authentication protects access: a strong password is easy for the user to remember but hard for others to guess, and multifactor authentication needs evidence from at least two categories (knowledge, possession, inherence)."
  - "Encryption encodes data to prevent unauthorised access: symmetric key encryption uses one key; public key encryption uses a public key to encrypt and a private key to decrypt."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "drafted"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/computer-science-principles/5-6-safe-computing-study-guide/).

## Recap

- **PII**: information that identifies, links, relates or describes an individual (for example Social Security number, age, race, phone number, medical, financial and biometric data).
- Searches, page views and **location** can be recorded; **aggregated** data can reveal private information; information online is **hard to delete**.
- **Permissions**: users can control what programs collect; review them.
- **Strong password**: easy to remember, hard for others to guess. **MFA**: evidence from at least two categories: knowledge, possession, inherence.
- **Encryption** encodes data; **decryption** decodes it. **Symmetric**: one key. **Public key**: public key encrypts; private key decrypts.
- **Certificate authorities** issue digital certificates validating key ownership.
- **Malware** damages or takes control; a **virus** copies itself. **Updates** fix flaws.
- Attacks: **phishing**, **keylogging**, **rogue access points**, **malicious links and attachments**, **untrustworthy downloads**.

## Key relationships

| Idea | How to recognise it |
|---|---|
| Phishing | Trick to get you to reveal information |
| Keylogging | Records keystrokes |
| Rogue access point | Fake or unauthorised wireless network |
| Symmetric key | Same key encrypts and decrypts |
| Public key | Anyone encrypts with public; owner decrypts with private |
| MFA | Two or more categories of evidence |
| Possible PINs | 10 to the power (number of digits) |

## Assumptions and conventions

- Name the threat and then a protection that fits it.
- In public key questions, say **whose** key is used for each step.
- The mathematics of encryption is not required.

## Mistakes to avoid

1. Saying the sender needs the receiver's private key.
2. Describing MFA as two passwords.
3. Treating any email from a known sender as safe.
4. Giving "be careful" as a protection without saying what to do.
5. Forgetting that aggregated data can reveal more than single items.
6. Confusing a virus (copies itself) with malware in general.

## Two quick worked examples

**1.** A 4-digit PIN has 10 × 10 × 10 × 10 = 10,000 possibilities and a 6-digit PIN has 1,000,000, which is 100 times as many. If an attacker can try 1,000 guesses per second, all 4-digit PINs take 10 seconds and all 6-digit PINs take 1,000 seconds.

**2.** An email asks you to confirm your bank login by clicking a link. This is phishing. A good response is not to click, to go to the bank's site by typing its address and to report the message. If you had already typed the password, multifactor authentication would still require a second proof.

## A revision routine

Write the three categories of evidence used in multifactor authentication, with an example of each. Draw the public key encryption diagram from memory and label whose key is used at each step. Then list five threats with a matching protection for each, making sure each protection fits its threat, and finish by calculating the number of possible PINs for 4, 5 and 6 digits.

## Quick self-check

1. Which key decrypts a message sent using public key encryption? *(The receiver's private key.)*
2. A password plus a code on your phone: which two categories? *(Knowledge and possession.)*
3. A program records every key you press. What is it called? *(Keylogging.)*

Next: [practice questions](/advanced-course-resources/computer-science-principles/5-6-safe-computing-practice/).
