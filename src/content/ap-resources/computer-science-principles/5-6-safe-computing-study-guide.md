---
resourceId: "mb-ap-csp-5.6-study-guide"
title: "Safe Computing: Study Guide (Computer Science Principles 5.6)"
description: "How to keep data and devices safe: PII and privacy, passwords and multifactor authentication, symmetric and public key encryption, malware, phishing and other attacks, with two worked examples."
course: "computer-science-principles"
unit: 5
topics: ["5.6"]
resourceType: "study-guide"
prerequisites: 
  - "Topic 4.1 (data travel across the Internet in packets)"
  - "Topic 5.1 (effects of computing innovations)"
prerequisiteResources: ["mb-ap-csp-5.5-study-guide"]
learningObjectives: 
  - "Define personally identifiable information (PII) and explain how collected and combined data can risk privacy and safety"
  - "Explain authentication measures: strong passwords and multifactor authentication"
  - "Distinguish symmetric key from public key encryption, and explain the role of certificate authorities"
  - "Identify common threats (malware, viruses, phishing, keylogging, rogue access points, malicious links and downloads) and the protections against them"
skills: ["4", "5", "6"]
studyMinutes: 50
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-5.6-revision-notes", "mb-ap-csp-5.6-practice", "mb-ap-csp-5.6-checklist"]
next: "mb-ap-csp-5.6-practice"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "Personally identifiable information (PII) identifies, links, relates or describes an individual; collected and combined data can be used to deduce private information, and information placed online is difficult to delete."
  - "Authentication protects access: a strong password is easy for the user to remember but hard for others to guess, and multifactor authentication needs evidence from at least two categories (knowledge, possession, inherence)."
  - "Encryption encodes data to prevent unauthorised access: symmetric key encryption uses one key; public key encryption uses a public key to encrypt and a private key to decrypt."
  - "Threats include viruses and malware, phishing, keylogging, rogue access points, malicious links and untrustworthy downloads."
  - "Protections include software updates, malware scanning, careful permissions, and caution with links, attachments and free downloads."
faqs:
  - question: "What is personally identifiable information?"
    answer: "Information about an individual that identifies, links, relates or describes them. Examples include a Social Security number, age, race, phone number, medical information, financial information and biometric data."
  - question: "What is multifactor authentication?"
    answer: "A method of access control in which a user is granted access only after presenting several separate pieces of evidence, typically from at least two categories: knowledge (something they know), possession (something they have) and inherence (something they are)."
  - question: "What is the difference between symmetric key and public key encryption?"
    answer: "Symmetric key encryption uses one key for both encrypting and decrypting. Public key encryption uses a pair: anyone can use the public key to encrypt a message to its owner, but only the owner's private key can decrypt it."
  - question: "Do I need to know the mathematics of encryption?"
    answer: "No. The specific mathematical procedures for encryption and decryption are outside the scope of the course. You need to understand what encryption does, the two approaches and how they are used."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "drafted"
---

## Why safe computing matters

Computing is useful because it stores, moves and uses information about people. That is also why it carries risks. This topic covers three connected questions:

1. **What information about us is collected, and what can others learn from it?** (privacy)
2. **How do we stop the wrong people getting in, and how do we keep messages secret?** (authentication and encryption)
3. **How do attackers try to get in, and how do we defend?** (malware and attacks)

## Personal data and privacy

**Personally identifiable information (PII)** is information about an individual that **identifies, links, relates or describes** them. Examples: a Social Security number, age, race, phone number, medical information, financial information and biometric data (such as fingerprints).

Many systems collect more than we notice:

- **Search engines** can record and keep a **history of searches** and use it to suggest websites or for **targeted marketing**.
- **Websites** can record a history of who has viewed their pages.
- Devices, websites and networks can collect **location** information, including where you have been, how you got there and how long you stayed.

Collected data can be put to good use: PII stored online can simplify making purchases, and location data can improve maps. But there are risks.

- **Aggregation.** **Disparate** pieces of data, such as location, cookies and browsing history, can be **combined to create knowledge about an individual** that no single piece reveals. Combining information posted on social media with other sources can be used to **deduce private information**.
- **Unintended use.** Information placed online can be used in ways that were not intended, such as a message being forwarded or a post being seen by a future employer.
- **Permanence.** **Once information is placed online, it is difficult to delete.**
- **Crime.** PII can be used to stalk a person, steal an identity or help plan other crimes.
- **Permissions.** Users can control the **permissions** programs have for collecting information, and should review the permission settings of programs to protect their privacy.

## Authentication: proving who you are

**Authentication measures protect devices and information from unauthorised access.** Two key measures are:

- **Strong passwords.** A strong password is **easy for the user to remember but difficult for someone else to guess** based on knowledge of that user. Long, unusual combinations are stronger than short words or personal details such as birthdays.
- **Multifactor authentication (MFA).** Access is granted only after the user presents **several separate pieces of evidence**, typically from at least **two** of these categories:

| Category | Meaning | Example |
|---|---|---|
| Knowledge | Something you know | A password or PIN |
| Possession | Something you have | A phone that receives a code, or a security key |
| Inherence | Something you are | A fingerprint or face scan |

MFA requires **at least two steps** to unlock protected information, and each step adds a **new layer of security** that must be broken to gain unauthorised access. A stolen password alone is no longer enough.

## Encryption: keeping messages secret

**Encryption** is the process of **encoding data to prevent unauthorised access**; **decryption** is decoding it again. There are two common approaches:

- **Symmetric key encryption** uses **one key for both encryption and decryption**. Both sides must share the key in advance, which is a problem if they have never met.
- **Public key encryption** uses a **pair of keys**: a **public key** for encryption and a **private key** for decryption. The sender needs only the receiver's *public* key to encrypt; **the receiver's private key is required to decrypt**, and the receiver never has to share it.

<figure>
<svg viewBox="0 0 640 250" role="img" aria-labelledby="pk-title pk-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pk-title">Public key encryption of a message from Ana to Ben</title>
<desc id="pk-desc">On the left, a box labelled Ana, sender, holds the message hello. An arrow labelled encrypt with Ben's public key leads to a middle box labelled scrambled message, which could be intercepted on the network and cannot be read. An arrow labelled decrypt with Ben's private key leads to a right box labelled Ben, receiver, which shows hello. A note says Ben's public key is shared openly but his private key stays secret with Ben.</desc>
<rect x="0" y="0" width="640" height="250" fill="#ffffff"/>
<g fill="none" stroke="#1d2b44" stroke-width="2">
<rect x="15" y="60" width="150" height="80" rx="8"/>
<rect x="245" y="60" width="150" height="80" rx="8" stroke-dasharray="6 4"/>
<rect x="475" y="60" width="150" height="80" rx="8"/>
<line x1="165" y1="100" x2="241" y2="100"/><path d="M233 94 L243 100 L233 106"/>
<line x1="395" y1="100" x2="471" y2="100"/><path d="M463 94 L473 100 L463 106"/>
</g>
<g fill="#1d2b44" font-size="14" text-anchor="middle">
<text x="90" y="90" font-weight="bold">Ana (sender)</text><text x="90" y="115">message: "hello"</text>
<text x="320" y="90" font-weight="bold">Scrambled</text><text x="320" y="110">(unreadable on</text><text x="320" y="128">the network)</text>
<text x="550" y="90" font-weight="bold">Ben (receiver)</text><text x="550" y="115">message: "hello"</text>
<text x="203" y="42" font-size="13">encrypt with</text><text x="203" y="58" font-size="13">Ben's PUBLIC key</text>
<text x="433" y="42" font-size="13">decrypt with</text><text x="433" y="58" font-size="13">Ben's PRIVATE key</text>
<text x="320" y="190">Ben's public key is shared openly; his private key stays secret with Ben.</text>
<text x="320" y="212">Anyone who intercepts the scrambled message but lacks the private key cannot read it.</text>
</g>
</svg>
<figcaption>Figure 1. Public key encryption. Ana encrypts with Ben's public key; only Ben's private key can decrypt.</figcaption>
</figure>

**How do you know a public key really belongs to Ben?** **Certificate authorities** issue **digital certificates** that validate the ownership of encryption keys used in secure communications, based on a trust model. When your browser shows a secure connection to a site, a certificate is part of how it knows it has the site's real key. The specific mathematics of encryption is outside the course.

## Malware, updates and attacks

**Malware** is software intended to damage a computing system or take partial control of its operation. A **computer virus** is a malicious program that can copy itself and gain unauthorised access to a computer; it often attaches itself to a legitimate program and starts running on its own. **Virus and malware scanning software** can help protect a system.

All real-world systems have errors or design flaws that can be exploited, so **regular software updates** that fix errors help keep systems safe.

Common ways attackers gain access:

| Threat | What it is | Defence |
|---|---|---|
| **Phishing** | Tricking a user into giving personal information, for example by an email that looks like it comes from a bank | Be sceptical of unexpected messages; do not enter details after following a link; contact the organisation another way |
| **Keylogging** | A program that records every key pressed, to steal passwords and other confidential information | Scanning software; avoid untrustworthy downloads; MFA limits what a stolen password can do |
| **Rogue access point** | A wireless access point that gives unauthorised access to secure networks, letting data sent over a public network be intercepted, analysed or modified | Avoid sensitive tasks on unknown public Wi-Fi; use encrypted connections |
| **Malicious links and attachments** | Links disguised on a page or in an email, or unsolicited attachments and forms, which may come from unknown senders or from known senders whose security has been compromised | Do not open unexpected attachments; check where a link really leads |
| **Untrustworthy downloads** | Free software from freeware or shareware sites that may contain malware | Download only from trusted sources |

## Worked example 1: the strength of a PIN, and why MFA helps

**Scenario.** A fictional phone lets an attacker try guesses at the PIN, at 1,000 guesses per second (the attacker uses a program, and the phone does not slow down guesses).

**Task.** (a) How many possible 4-digit PINs and 6-digit PINs are there? (b) How long would it take to try every one of each? (c) How does multifactor authentication change the situation?

**(a) Possibilities.** Each digit has 10 possibilities. A 4-digit PIN has 10 × 10 × 10 × 10 = **10,000** possibilities. A 6-digit PIN has 10 to the power 6 = **1,000,000**. Two extra digits make the number **100 times** larger (1,000,000 ÷ 10,000).

**(b) Time to try every possibility.** 4 digits: 10,000 ÷ 1,000 = **10 seconds**. 6 digits: 1,000,000 ÷ 1,000 = 1,000 seconds, which is 1,000 ÷ 60 = about **16.7 minutes**.

**(c) With MFA.** Suppose access also needs a code sent to the owner's second device (possession). Even if the attacker finds the PIN, they cannot unlock the phone without also having that device. Each factor must be broken separately.

**Interpretation.** A short, guessable PIN falls in seconds if guesses are not limited. Longer secrets help, and **limiting the number of guesses** and **adding a second factor** help much more. Note also that an attacker rarely tries every possibility in order: common choices such as 1234 or a birth year are tried first, which is why a strong password or PIN must also be hard to guess from knowledge of the user.

**Check.** The 100 times increase comes from two extra digits, each multiplying the possibilities by 10. The time scales the same way (10 seconds to 1,000 seconds is 100 times).

## Worked example 2: a toy symmetric key, and spotting attacks

**Part A: a toy symmetric cipher.** *This is for illustration only; it is far too weak to use for security, and the course does not require any particular method.* Use the key **3**: to encrypt, move each letter 3 places forward in the alphabet; to decrypt, move each letter 3 places back.

Encrypt `CAT`: C moves to F, A moves to D, T moves to W, giving **FDW**. Decrypt `FDW` with the same key 3: F back to C, D back to A, W back to T, giving **CAT**. The *same* key does both jobs, so this is symmetric. The problem: Ana and Ben must share the key 3 in advance by a safe route; if an attacker learns it, every message can be read. Public key encryption avoids this: Ben publishes a public key for anyone to use and keeps the private key to himself.

**Part B: classify the attacks.**

| Scenario | Threat | Suggested protection |
|---|---|---|
| An email says "Your account will be closed. Click here and enter your password." | Phishing | Do not click; go to the website by typing the address; report it |
| A free game from an unknown website installs a program that records everything typed | Untrustworthy download carrying keylogging malware | Download only from trusted sources; keep scanning software updated |
| In a café, a wireless network named like the café's appears, but it is run by someone else who can see the traffic | Rogue access point | Avoid sensitive tasks on public Wi-Fi; use encrypted connections; ask staff for the real network name |
| A message from a friend's account has an unexpected attachment | Malicious attachment from a compromised known sender | Check with the friend by another route before opening |

**Check.** Each row names the threat, matches its definition and offers a protection that fits it, not just "be careful".

## Common misconceptions

- **"PII is only my name."** It includes many items that identify, link or describe a person, such as a phone number, biometric data or medical information.
- **"Deleting a post removes it."** Once information is online it is difficult to delete.
- **"A long password of my own name is strong."** A strong password is hard to guess even with knowledge of the user.
- **"MFA means two passwords."** It requires evidence from at least two categories (knowledge, possession, inherence).
- **"Encryption makes a message impossible to intercept."** It makes an intercepted message unreadable without the key.
- **"Public key encryption needs the receiver's private key to send."** The sender uses the public key; only the receiver's private key decrypts.
- **"If a message comes from a friend, it is safe."** A friend's account may have been compromised.
- **"Updates are only about new features."** They fix errors that attackers could exploit.

## Where this leads

This completes Big Idea 5. Privacy and security connect back to data collection ([Topic 2.3](/advanced-course-resources/computer-science-principles/2-3-extracting-information-data-study-guide/)), networks ([Topic 4.1](/advanced-course-resources/computer-science-principles/4-1-the-internet-study-guide/)) and the effects of innovation ([5.1](/advanced-course-resources/computer-science-principles/5-1-beneficial-harmful-effects-study-guide/)). Test yourself with the [practice questions](/advanced-course-resources/computer-science-principles/5-6-safe-computing-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-principles/5-6-safe-computing-revision-notes/), and check your skills on the [checklist](/advanced-course-resources/computer-science-principles/5-6-safe-computing-checklist/). Then try the [Unit 5 diagnostic](/advanced-course-resources/computer-science-principles/unit-5-diagnostic/).
