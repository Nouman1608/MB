---
title: "Cambridge A Level Computer Science (9618): Data Security -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 6: Security, privacy and data integrity"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 6.1
syllabusTopics:
  - qualification: "a-level"
    topic: "security-privacy-and-data-integrity"
    subtopic: "data-security"
description: "Original questions with mark-scheme answers on security, privacy and integrity, malware, phishing, pharming and protective measures for Cambridge AS Computer Science 9618."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Data Security study guide](/resources/cambridge-a-level-computer-science-9618-data-security/) · [Data Security revision notes](/resources/cambridge-a-level-computer-science-9618-data-security-revision-notes/) · [Security, privacy and data integrity practice questions](/resources/cambridge-a-level-computer-science-security-privacy-and-data-integrity-practice/)

These questions practise section 6.1 Data Security of Cambridge International AS & A Level Computer Science 9618, assessed on Paper 1. All organisations are invented. Answers are in mark-scheme style, with [1] for each creditable point.

---

## Section A

**1.** State what is meant by the **privacy** of data. **[1]**

**2.** A firewall is installed on a home computer. State **two** ways in which the firewall helps protect the computer. **[2]**

**3.** Give **one** benefit and **one** drawback of using a fingerprint scanner instead of a password to log in to a laptop. **[2]**

**4.** Which statement about a digital signature is correct?

A: It encrypts the message so that only the receiver can read it.

B: It is a scanned image of the sender's handwritten signature.

C: It shows who sent a message and that the message has not been altered.

D: It prevents the message being intercepted.

**[1]**

**5.** Explain why anti-virus software might fail to detect a virus that was written last week. **[2]**

**6.** State **two** differences between a virus and spyware. **[2]**

## Section B

**7.** A sports centre stores members' names, dates of birth and medical notes. For each event below, state whether it is mainly a failure of security, privacy or integrity, and give a reason.

**(a)** A receptionist, who is allowed to view member records, reads a celebrity member's medical notes out of curiosity. **[2]**

**(b)** A member's date of birth is stored as 1/1/1900 after a typing error. **[2]**

**(c)** A burglar steals the unencrypted laptop holding the member records. **[2]**

**8.** Explain why an organisation must protect the security of its computer system as well as the security of the data stored on it. **[3]**

**9.** A customer of an online shop receives an email that appears to come from the shop, asking her to "confirm your account" using a link.

**(a)** Identify the threat. **[1]**

**(b)** Explain how this threat differs from pharming. **[2]**

**(c)** Describe **two** methods the shop could use to reduce the risk to its customers. **[4]**

**10.** A travel agent has six staff on a small office network. The manager may change all records; booking staff may change bookings but only view customer payment records; a trainee may only view bookings.

**(a)** Explain how access rights would be used to protect the data. **[3]**

**(b)** Explain how user accounts and passwords support the use of access rights. **[2]**

**11.** A charity's staff use laptops to visit clients at home, and connect to the office over the internet. Describe **two** ways in which encryption protects the charity's data in this situation. **[4]**

**12.** Describe **three** security measures suitable for a single stand-alone computer used by a freelance designer at home, and state the threat each one restricts. **[6]**

---

## Answers

**1.** Personal data is seen and used only by people entitled to see it, and only for the purposes the person agreed to / is kept confidential [1].

**2.** Any two: it examines incoming traffic and blocks connections that break its rules, such as attempts by hackers to connect [1]; it can block outgoing traffic from unauthorised programs, such as spyware sending data out [1]; it can block traffic from particular addresses or ports [1].

**3.** Benefit (one): a fingerprint cannot be forgotten / cannot easily be shared or guessed / is quicker to use [1].
Drawback (one): a genuine user may be falsely rejected (for example with a cut finger) / if the stored fingerprint data is stolen it cannot be changed like a password [1].

**4.** **C** [1].

**5.** Anti-virus software detects viruses by comparing files with a database of known virus patterns [1]. A new virus will not be in the database until the software is updated, so it may not be recognised [1].

**6.** Any two: a virus copies itself by attaching to other files, whereas spyware does not need to replicate [1]; a virus usually aims to damage, corrupt or delete data, whereas spyware aims to collect information secretly [1]; spyware sends the information it collects to a third party, whereas a virus does not need to send anything [1].

**7. (a)** Privacy [1]: the receptionist had legitimate access, so security was not broken, but the data was used for a purpose she was not entitled to [1].

**(b)** Integrity [1]: the stored data is inaccurate / does not match the real value [1].

**(c)** Security [1]: the data has been lost to an unauthorised person because the laptop was not protected / the data was not encrypted [1].

**8.** Any three: an attacker who gains control of the system can access or change the data on it [1]; malware installed on the system can capture data as it is typed or decrypted, so encryption at rest alone is not enough [1]; a compromised system can be used to attack other systems [1]; if the system is damaged or unusable, the data cannot be accessed even if it is intact [1].

**9. (a)** Phishing [1].

**(b)** In phishing the user is tricked by a message into following a link or replying with details [1]; in pharming the user is redirected to the fake site even though they type the correct address, by malicious code or a tampered DNS entry [1].

**(c)** Any two methods, two marks each (method plus how it helps):

- Tell customers the shop will never ask for login details by email [1], so customers recognise such emails as fake and do not respond [1].
- Use two-step authentication for customer accounts [1], so a stolen password alone does not give access to the account [1].
- Tell customers to type the shop's address themselves rather than follow links [1], so a link to a fake site is not used [1].

**10. (a)** Each user or group is given rights to each table or file [1]. The manager has read and write access to all records; booking staff have read/write access to bookings but read-only access to payment records [1]; the trainee has read-only access to bookings and no access to payment records [1].

**(b)** Each person logs in with their own account, so the system knows who the user is and applies that account's rights [1]; the password stops one person using another's account to gain higher rights [1].

**11.** Two ways, two marks each:

- Data stored on the laptops is encrypted [1], so if a laptop is lost or stolen the client data cannot be read without the key [1].
- Data sent between the laptops and the office is encrypted [1], so if it is intercepted on the internet it is unreadable [1].

**12.** Any three measures, one mark for the description and one for the threat:

- A password on the user account, long and with mixed characters [1]: restricts unauthorised access by someone using the computer / guessing the login [1].
- Anti-virus software, updated regularly, scanning files [1]: restricts viruses [1].
- Anti-spyware software [1]: restricts spyware recording key presses or activity [1].
- A software firewall that blocks unauthorised connections [1]: restricts hackers [1].
- Encryption of the hard disk [1]: restricts theft of data if the computer is stolen [1].

---

## Where marks are usually lost

- Naming a measure without describing how it works or which threat it restricts.
- Calling a curiosity look-up by an authorised user a security breach rather than a privacy failure.
- Confusing phishing with pharming.
- Stating that encryption prevents interception.
