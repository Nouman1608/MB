---
title: "IB DP Computer Science (DP Computer Science): Network Vulnerabilities and Countermeasures (HL) -- Practice Questions"
resourceType: "practice-questions"
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
description: "Twelve original HL questions on network vulnerabilities and countermeasures for IB DP Computer Science A.2, with full mark-scheme answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-18: Written from the public subject brief and the A2.4.2-A2.4.3 label (network vulnerabilities and countermeasures, HL only); please check the questions and mark allocations against the full DP Computer Science guide."
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- the IB holds copyright in its own papers. Use these alongside
> the official past papers available through your school or the IB store.

These questions cover **A2.4.2 and A2.4.3, network vulnerabilities and countermeasures** (HL only),
in A.2 Networks. Related: [study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a2-network-vulnerabilities-countermeasures/)
and [revision notes](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a2-network-vulnerabilities-countermeasures-revision-notes/).

## Section A

**1.** Define the term *vulnerability* in the context of network security. **[1]**

**2.** Distinguish between a virus and a worm. **[2]**

**3.** Outline how a phishing attack could give an attacker access to a school's network. **[2]**

**4.** State **two** features of multi-factor authentication. **[2]**

**5.** Explain why a distributed denial of service attack cannot usually be stopped by blocking one IP
address. **[2]**

**6.** Outline the principle of least privilege. **[1]**

## Section B

**7.** A student connects a laptop to a café's open Wi-Fi network and logs in to a website that uses
HTTP, not HTTPS.
**(a)** Explain the vulnerability in this situation. **[2]**
**(b)** Describe **two** countermeasures the student could use. **[4]**

**8.** Describe how symmetric and asymmetric encryption are combined when a browser connects to a
website using HTTPS. **[4]**

**9.** A web application builds this query from a form field:
```
query <- "SELECT * FROM Orders WHERE customerID = '" + inputID + "'"
```
**(a)** Explain how an attacker could exploit this code. **[2]**
**(b)** Describe **one** countermeasure. **[2]**

**10.** A company's files were encrypted by ransomware. Its only backup was on a drive permanently
connected to the same network, and this was also encrypted.
**(a)** Explain why the backup did not protect the company. **[2]**
**(b)** Suggest **two** other countermeasures that could have reduced the risk of this attack. **[2]**

**11.** Explain what is meant by *defence in depth* and why a hardware firewall alone is not enough to
protect a network. **[4]**

**12.** A small charity's case study describes the following: volunteers share one administrator
account; the router still uses its factory-set password; donors' card details are stored on an office
computer; staff have had no security training. Evaluate the most important risks and recommend
countermeasures, in order of priority. **[6]**

---

## Answers

**1.** A weakness in a system (hardware, software, configuration or human behaviour) that could be
exploited to gain unauthorised access or cause harm [1].

**2.** A virus attaches itself to a file or program and spreads when that file is run [1]; a worm is
self-replicating and spreads across a network without user action, by exploiting vulnerabilities
[1].

**3.** The attacker sends a fake message that appears to come from a trusted source, persuading a user
to enter their login details on a fake page or open a malicious attachment [1]; the attacker then
uses the captured credentials or installed malware to access the network as that user [1].

**4.** Any two, [1] each: it requires two or more different kinds of evidence of identity; for example
something the user knows (password); something the user has (phone or security key); something the
user is (fingerprint); a stolen password alone is not enough to log in. Maximum 2.

**5.** The attack traffic comes from many compromised devices (a botnet) with different addresses [1],
so blocking one address leaves the rest of the flood unaffected [1].

**6.** Each user is given only the access rights needed for their role, and no more [1].

**7. (a)** Data sent over HTTP is not encrypted [1], and on an open network other users can capture
packets and read the login details in plaintext [1].
**(b)** Two countermeasures, each [1] for naming and [1] for describing how it helps:
- Use only sites with HTTPS [1], which encrypts the data with TLS so captured packets are unreadable
  [1].
- Use a VPN [1], which creates an encrypted tunnel from the laptop, so traffic on the café network
  cannot be read [1].
- Avoid entering passwords on public Wi-Fi, or use a mobile data connection instead [1], removing the
  exposure to the shared network [1].
Maximum 4.

**8.** One mark per point, up to 4:
- The server sends its certificate containing its public key; the browser checks the certificate to
  authenticate the server [1].
- Asymmetric encryption is used to agree or exchange a shared session key securely [1].
- Only the server, with its private key, can complete the exchange [1].
- The session data is then encrypted with the shared key using symmetric encryption [1], which is
  faster for large amounts of data [1].
Maximum 4.

**9. (a)** The attacker types SQL code into the form field, such as `' OR '1'='1` [1], which changes
the meaning of the query so that it returns, alters or deletes data the attacker should not reach,
such as every customer's orders [1].
**(b)** Use a parameterised query [1], so the input is passed to the database separately from the
query structure and can only be treated as a value, never as SQL code [1]. (Alternatively, validate
input [1] by rejecting any value that is not in the expected format, for example digits only [1].)

**10. (a)** The backup drive was reachable on the network [1], so the ransomware could encrypt it in
the same way as the original files, leaving no usable copy [1].
**(b)** Any two, [1] each: keep a backup copy offline or off-site; install patches promptly; train
staff to recognise phishing; use anti-malware software; restrict users' permissions so malware
cannot reach all files. Maximum 2.

**11.** Defence in depth means using several layers of security controls (technical, procedural and
human) [1] so that if one layer fails, another still protects the network [1]. A firewall only
filters traffic according to its rules [1]; it cannot stop, for example, a user giving their password
to a phishing site, an insider misusing valid access, or malware brought in on a USB drive [1].

**12.** Award up to 6:
- Identifies the card details as the highest-value target, so protecting them is the first priority:
  encrypt or remove them, or use a payment provider so the charity does not store them [1].
- Explains the risk of the factory-set router password: it may be publicly known, allowing an
  attacker to change the router's settings or reach the network [1].
- Recommends changing it to a strong unique password and updating the router [1].
- Explains the risk of the shared administrator account: no accountability, and full access for
  anyone who learns the password [1].
- Recommends individual accounts with least privilege and MFA for administration [1].
- Recommends security training as a low-cost control against phishing, and gives a justified order
  of priority (card data, then router and accounts, then training) [1].
Maximum 6.

---

## Where marks are usually lost

- Calling a threat a vulnerability, or the reverse.
- Saying encryption stops data being intercepted.
- Listing countermeasures without linking each to a weakness in the scenario.
- Ignoring cost and practicality when asked to evaluate or prioritise.

## Frequently asked questions

**Do I need to know how encryption algorithms work mathematically?**
No mathematical detail is expected here; know what symmetric and asymmetric encryption do and how
HTTPS combines them. Check the full guide for the exact requirement.

**Are these real IB questions?**
No. They are original practice questions written for revision.
