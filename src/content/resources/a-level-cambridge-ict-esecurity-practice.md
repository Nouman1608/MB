---
title: "Cambridge A Level Information Technology (ICT): eSecurity (9626) -- Practice Questions"
seoTitle: "Cambridge A Level ICT 9626 eSecurity Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "eSecurity"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 5
syllabusTopics:
  - qualification: "a-level"
    topic: "esecurity"
description: "Original practice questions with marked answers for Cambridge AS & A Level IT 9626 eSecurity: personal data, phishing, firewalls and malware."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover **topic 5, eSecurity**, of Cambridge International AS & A Level Information Technology (9626), following the syllabus for examination in 2025, 2026 and 2027 (version 3): section 5.1 Personal data and section 5.2 Malware. Topic 5 is an **AS Level** topic, examined in **Paper 1 (Theory)**, so every question here is a written question to answer on paper.

Learn the content first in the [eSecurity study guide](/resources/a-level-cambridge-ict-esecurity/) and the [eSecurity revision notes](/resources/a-level-cambridge-ict-esecurity-revision-notes/). Course hub: [Cambridge A Level ICT](/boards/cambridge/a-level/ict/). Checklist: [9626 checklist](/checklists/cambridge/a-level/ict/).

The answers show one acceptable set of points with a [1] for each creditworthy point. They are indicative marking written for this practice set, not official mark schemes; other valid points would also earn credit.

## Questions

**1.** State what is meant by **personal data**, and give **two** examples. **[3]**

**2.** Explain why a person should remove geotags from photos before posting them on social media. **[2]**

**3.** A customer receives a text message saying their parcel is held and asking them to follow a link to pay a fee.

**(a)** Identify this type of attack and describe how it works. **[2]**
**(b)** Explain why pharming is harder for a user to detect than this type of attack. **[2]**

**4.** A bank's call-centre staff can see customers' account details. Describe **three** measures the bank could take to meet its duty of confidence to its customers. **[6]**

**5.** A small accountancy firm has eight office computers connected to the internet through one router. Some staff also take laptops home.

**(a)** Explain **two** advantages of a hardware firewall for the office network. **[4]**
**(b)** Explain why the laptops should also run a software firewall. **[2]**

**6.** Describe each of these types of malware: **(i)** trojan, **(ii)** worm, **(iii)** adware, **(iv)** malicious bot. **[8]**

**7.** Explain the difference between signature-based and heuristic detection in anti-malware software. **[4]**

**8.** A furniture design company suspects a rival is trying to obtain its new designs.

**(a)** Name **two** types of malware that could be used for this industrial espionage. **[2]**
**(b)** Describe **two** consequences for the design company if the designs were stolen. **[4]**

**9.** A school's administration system is hit by ransomware.

**(a)** Describe what ransomware does to the system. **[2]**
**(b)** Describe **two** physical methods that could have prevented the attack or reduced its impact. **[4]**

**10.** An online clothing retailer stores customers' names, addresses, email addresses and payment details. Evaluate **two** methods the retailer could use to keep this personal data secure from unauthorised access. **[8]**

**11.** A hospital network holds patient records and controls some medical equipment. Discuss the advantages and disadvantages of using anti-malware software and physical prevention methods to protect it from malware, including rootkits. **[10]**

## Answers

**1.** Information that relates to a **living person** [1] who **can be identified** from it, alone or combined with other data [1]. Two examples, e.g. **date of birth and home address** [1].
*Examiner insight:* the definition earns two separate marks (living person; identifiable), and both examples are needed for the third mark.

**2.** A geotag stores the **GPS location** where the photo was taken in the file's metadata [1], so anyone who downloads it could find the person's **home or regular locations**, putting their safety or property at risk [1].
*Examiner insight:* "for privacy" alone is too vague for the second mark; say what the geotag reveals and why that is a risk.

**3. (a)** **Smishing** [1]: a text message pretending to come from a trusted firm, with a link to a fake website that collects payment or personal details [1].
**(b)** In pharming, malicious code or a tampered DNS server **redirects the browser to a fake site even when the correct address is typed** [1], so there is no suspicious message to spot and the address bar may look normal [1].
*Examiner insight:* in (a) the identification and the description are separate marks; "phishing" is not credited for a text message.

**4.** **Confidentiality clauses in staff contracts** [1], so staff are legally bound not to disclose customer details [1]. **Need-to-know access rights** [1], so each worker sees only the fields required for the call they are handling [1]. **Regular staff training** [1], so staff know what may be disclosed and to whom, and verify a caller's identity before discussing an account [1].
*Examiner insight:* each measure earns one mark for naming it and one for explaining it, so three measures with no explanations score half marks at most.

**5. (a)** It protects **all eight computers at once** at the point where the network meets the internet [1], so there is only one device to configure and no computer is left unprotected [1]. It runs on **its own hardware** [1], so it does not use the office computers' processing power or slow them down [1].
**(b)** At home the laptops are **outside the office network**, so the hardware firewall no longer filters their traffic [1]; a software firewall travels with the laptop and controls which applications can connect on any network [1].
*Examiner insight:* "Explain" needs the advantage and its effect; two bare advantages ("protects everything", "faster") earn only half the marks.

**6. (i) Trojan:** disguised as legitimate or useful software [1]; once installed it runs a hidden harmful payload, such as opening a back door, but does not copy itself [1].
**(ii) Worm:** a standalone program that replicates itself [1] and spreads across a network without user action, using up bandwidth [1].
**(iii) Adware:** displays unwanted adverts, pop-ups or redirects [1], often installed bundled with free software and may track browsing [1].
**(iv) Malicious bot:** malware that lets an attacker control the infected computer remotely [1], often as part of a botnet used to send spam or flood servers [1].
*Examiner insight:* two distinct points are needed for each type; "a type of malware that harms your computer" earns nothing because it fits every type.

**7.** **Signature-based** detection compares files with a database of **known malware signatures** [1]; it needs frequent updates and **cannot detect new malware** not yet in the database [1]. **Heuristic** detection looks for **suspicious behaviour or code patterns** [1]; it can detect new malware but can produce **false positives** by flagging safe files [1].
*Examiner insight:* a "difference" answer needs both sides stated; describing only one method caps the answer at half marks.

**8. (a)** Any two, e.g. **spyware** [1] and a **trojan** [1].
**(b)** **Loss of competitive advantage** [1]: the rival can bring similar furniture to market first, reducing the company's sales [1]. **Cost of investigation and new security** [1]: money and staff time go into finding how the malware got in and preventing it happening again [1].
*Examiner insight:* in (b) each consequence needs a development linked to the design company; generic "data loss" with no link scores one mark only.

**9. (a)** It **encrypts files** or locks the system so they cannot be used [1] and displays a **demand for payment** in return for the key [1].
**(b)** **Keeping backups offline**, disconnected from the network [1], so ransomware cannot encrypt them and the system can be restored without paying [1]. **Disabling or locking USB ports** on admin computers [1], so ransomware cannot be introduced from an infected memory stick [1].
*Examiner insight:* (b) asks for **physical** methods; anti-malware software is a software method and earns no credit here.

**10.** **Two-factor authentication for staff log-ins** [1]: even if a password is stolen through phishing, an attacker also needs the second code [1]. However, it slows log-in and staff need their phone or token with them [1]. **Firewalls** on the network and servers [1]: they block unauthorised connections and stop malware sending customer data out [1]. However, wrongly set rules can block genuine traffic or let threats through, and they cannot stop a member of staff giving details to a scammer [1]. **Conclusion:** two-factor authentication is more effective against stolen passwords, which phishing targets [1], but the retailer needs both, because they stop different routes of attack [1].
*Examiner insight:* "Evaluate" needs advantages, drawbacks and a justified judgement; a one-sided list of benefits is capped well below full marks.

**11.** **Anti-malware advantages:** scans files and network traffic automatically in real time [1] and quarantines or removes detected malware before it spreads to patient records [1]. **Anti-malware disadvantages:** signature-based scanning cannot detect new malware [1], and a **rootkit** can hide itself from scans because it runs with administrator-level access [1]; scanning also uses processing power, which may slow equipment that must respond quickly [1]. **Physical advantages:** air-gapping the medical equipment means network-spread malware cannot reach it [1]; locking server rooms and disabling USB ports removes the route of someone installing malware by hand [1]. **Physical disadvantages:** air-gapped equipment must have updates and data moved manually, which is slow [1], and staff lose the convenience of USB storage [1]. **Conclusion:** neither is enough alone; the hospital should combine updated anti-malware with physical controls, because physical methods cover the threats, such as rootkits and new malware, that software may miss [1].
*Examiner insight:* the conclusion mark needs a judgement linked back to the hospital context, not a repeat of the points already made.

## Where marks are usually lost

- Naming a security method without explaining how it stops the threat in the question.
- Calling a text-message attack "phishing" instead of smishing, or a phone call "phishing" instead of vishing.
- Describing pharming as clicking an email link.
- Giving software methods when the question asks for physical ones.
- Repeating the same point in different words, e.g. "cheap" and "inexpensive", for two marks.
- Leaving out the judgement in "evaluate" and "discuss" questions.
- Saying anti-malware software "stops all viruses".
- Writing generic consequences that are not linked to the organisation in the scenario.

## Next steps

- Recap with the [eSecurity revision notes](/resources/a-level-cambridge-ict-esecurity-revision-notes/).
- Re-read weak sections in the [eSecurity study guide](/resources/a-level-cambridge-ict-esecurity/).
- Related topic 1 practice on encryption: [Data Processing practice questions](/resources/a-ict-data-processing-practice/).
- See the full course on the [course hub](/boards/cambridge/a-level/ict/) and tick off the [9626 checklist](/checklists/cambridge/a-level/ict/).
- Try [all free 10-minute diagnostics](/diagnostics/).
- [Book a free trial class](/trial/).

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 3, Cambridge University Press & Assessment. Topic 5: eSecurity (5.1 Personal data; 5.2 Malware).
