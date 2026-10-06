---
title: "Cambridge A Level Information Technology (ICT): Communications technology (9626) -- Practice Questions"
seoTitle: "A Level ICT 9626 Communications Technology Practice"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Communications technology"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 14
syllabusTopics:
  - qualification: "a-level"
    topic: "communications-technology"
description: "Original practice questions with marked answers for Cambridge A Level IT 9626 communications technology, from networks and protocols to disaster recovery."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover **topic 14, Communications technology**, of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 3), sections 14.1 to 14.10. The topic is **A Level only** and is assessed in **Paper 3 Advanced Theory**. Calculators are not allowed in that paper, so every question here is calculator-free.

Learn the content first in the [study guide](/resources/a-level-cambridge-ict-communications-technology/) and the [revision notes](/resources/a-level-cambridge-ict-communications-technology-revision-notes/). Course links: [hub](/boards/cambridge/a-level/ict/), [checklist](/checklists/cambridge/a-level/ict/), [diagnostics](/diagnostics/). Questions 11 and 12 combine several sections.

## Questions

**1.** Define the terms *bandwidth* and *bit rate*. **[2]**

**2.** Explain how a switch handles an incoming frame differently from a hub. **[3]**

**3.** (calculator-free) A 900 MB design file is uploaded over a link with a bit rate of 60 Mbit/s. Calculate the upload time in seconds. Take 1 MB as 8 Mbit. **[3]**

**4.** A school installs a proxy server between its network and the internet. Describe three functions it could perform. **[3]**

**5.** A sales manager reads email on a phone, a tablet and an office PC. Explain why IMAP is more suitable than POP3 for her, and name the protocol that sends her emails. **[4]**

**6.** For each use, state whether TCP or UDP is more suitable and explain why.

**(a)** A live video call. **[2]**
**(b)** Downloading a software update. **[2]**

**7.** Data can be sent by packet switching or circuit switching.

**(a)** Describe the structure of a packet. **[3]**
**(b)** Explain how circuit switching differs from packet switching. **[3]**

**8.** Addressing and routing.

**(a)** State the number of bits in an IPv4 address and in an IPv6 address. **[2]**
**(b)** Explain the purpose of ARP. **[2]**
**(c)** An internet service provider has hundreds of routers. Evaluate the use of dynamic rather than static routing. **[3]**

**9.** Wireless technology.

**(a)** Explain why NFC is used for contactless payment rather than Bluetooth. **[2]**
**(b)** A café offers Wi-Fi to customers. Describe four ways the owner can secure it. **[4]**

**10.** Mobile communication systems.

**(a)** Describe the structure of a cellular network, including what happens when a user moves. **[3]**
**(b)** Describe how a television signal is sent to homes by satellite. **[3]**

**11.** An engineering firm has 25 office staff. Each needs about 2 Mbit/s for cloud-based software at busy times. The office internet link is 40 Mbit/s. Some staff work from home.

**(a)** (calculator-free) Show whether the link is enough at busy times. **[2]**
**(b)** The firm is deciding between moving its files to the cloud and buying a file server for the office. Evaluate the two options. **[6]**
**(c)** Explain how a VPN lets home workers reach the office network securely. **[2]**

**12.** An online retailer is writing a disaster recovery plan. It scores risks from 1 to 5 for likelihood and impact.

| Risk | Likelihood | Impact |
|---|---|---|
| Server hardware failure | 3 | 4 |
| Flood at the data centre | 1 | 5 |
| Ransomware attack | 4 | 5 |

**(a)** (calculator-free) Quantify each risk and state which should be dealt with first. **[3]**
**(b)** Explain what SQL injection and denial of service are, giving one prevention method for each. **[4]**
**(c)** Describe a strategy to protect the retailer's power supply and data. **[3]**

## Answers

**1.** Bandwidth: the maximum rate at which a link can carry data, in bit/s [1]. Bit rate: the number of bits actually sent (or needed) per second [1].
*Examiner insight:* "Bandwidth is speed" is too vague; the idea of a maximum capacity is the point that separates it from bit rate.

**2.** A hub sends the frame out of every port [1]. A switch reads the destination MAC address [1] and, using its table of addresses and ports, sends the frame only to the correct port [1].
*Examiner insight:* Name the MAC address; "a switch is smarter" earns nothing on its own.

**3.** 900 × 8 = 7200 Mbit [1]. 7200 ÷ 60 [1] = **120 s** [1].
*Examiner insight:* Show the ×8 step; if the final figure is wrong, visible working is your only route to method credit.

**4.** Filters requests to block unsuitable sites [1]; caches frequently used pages so they load faster [1]; hides internal IP addresses from the internet [1]. Also accept: logs web use.
*Examiner insight:* Each function must be different; "filters" and "blocks sites" are the same point.

**5.** IMAP keeps messages on the mail server [1], so all three devices show the same inbox and folders [1]. POP3 normally downloads messages to one device and removes them from the server [1], so other devices would miss them. Emails are sent with **SMTP** [1].
*Examiner insight:* Link the protocol to her situation (several devices); a textbook definition alone answers only part of the question.

**6. (a)** UDP [1]: no acknowledgements or resending, so less delay; a lost packet matters less than lag in a live call [1].
**(b)** TCP [1]: every packet must arrive and be in order, and TCP acknowledges and resends lost data [1].
*Examiner insight:* The choice alone is not enough; the reason must refer to the use (delay for calls, completeness for files).

**7. (a)** Header containing source and destination addresses [1] and a sequence number [1]; payload containing the data, with a trailer holding an error check [1].
**(b)** Circuit switching reserves a dedicated channel [1] for the whole session [1], whereas in packet switching packets share links and may take different routes [1].
*Examiner insight:* In (b) write both sides of the comparison; describing only circuit switching leaves the "differs" half unanswered.

**8. (a)** IPv4: 32 bits [1]. IPv6: 128 bits [1].
**(b)** ARP finds the MAC address [1] that matches a known IP address on the local network, so the frame can be delivered [1].
**(c)** Dynamic routing updates routing tables automatically, so it adapts when a link fails [1]; static routing would need hundreds of tables kept by hand [1]; but dynamic routing uses bandwidth and processing to share route information, though for a large network the benefits outweigh this [1].
*Examiner insight:* "Evaluate" needs a drawback and a conclusion, not only advantages.

**9. (a)** NFC works only when devices are almost touching [1], so it is harder to intercept and a payment cannot be made accidentally from across a room [1].
**(b)** Use WPA2 or WPA3, not WEP [1]; set a strong passphrase and change it regularly [1]; change the router's default admin password [1]; keep firmware updated [1]. Also accept: a separate guest network for customers.
*Examiner insight:* "Use a password" is too general; say which password and why.

**10. (a)** The area is divided into cells, each served by a base station [1]; neighbouring cells use different frequencies so they can be reused elsewhere [1]; as a user moves, the connection is handed over to the next cell's base station [1].
**(b)** The signal is encoded and sent from a ground station on the uplink [1]; the satellite's transponder amplifies it and changes its frequency [1]; it is sent back on the downlink and received by home dishes [1].
*Examiner insight:* Keep the steps in order; uplink and downlink must both appear.

**11. (a)** 25 × 2 = 50 Mbit/s needed [1], which is more than 40 Mbit/s, so **the link is not enough** at busy times [1].
**(b)** Cloud: no hardware to buy and storage grows on demand [1]; files are reachable from home [1]; but it depends on the internet link, already overloaded [1]. File server: fast local access not limited by the link [1]; but it costs more to buy and maintain and is a single point of failure [1]. Conclusion: a file server, or a cloud move only with a faster link [1].
**(c)** The VPN creates an encrypted tunnel over the internet [1], so home workers' traffic cannot be read and they connect as if on the office LAN [1].
*Examiner insight:* In (b), use the figure from (a); a conclusion tied to the scenario is what turns a list into an evaluation.

**12. (a)** Server failure 3 × 4 = 12; flood 1 × 5 = 5 [1]; ransomware 4 × 5 = 20 [1]. **Ransomware** first [1].
**(b)** SQL injection: database code typed into a web form to read or change data [1]; prevent by checking and rejecting unsafe input [1]. DoS: flooding the server with requests so customers cannot reach it [1]; prevent with a firewall that blocks suspicious traffic [1].
**(c)** A UPS and surge protection keep servers running and undamaged during power problems [1]; regular back-ups [1] stored off site or in the cloud, with the restore process tested [1].
*Examiner insight:* In (c) "make back-ups" alone is thin; frequency, location and testing are separate points.

## Where marks are usually lost

- Writing "faster" with no reason when comparing TCP and UDP.
- Forgetting to multiply megabytes by 8.
- Naming a server without saying what it does in the scenario.
- Describing only one side of a "differs" or "compare" question.
- Listing advantages in an "evaluate" question with no drawback or conclusion.
- Giving the same security measure twice in different words.
- Confusing MAC addresses (local delivery) with IP addresses (routing).
- Leaving out the uplink or downlink in a satellite description.

## Next steps

- [Revision notes](/resources/a-level-cambridge-ict-communications-technology-revision-notes/)
- [Study guide](/resources/a-level-cambridge-ict-communications-technology/)
- [9626 course hub](/boards/cambridge/a-level/ict/)
- [Printable checklist](/checklists/cambridge/a-level/ict/)
- [All free 10-minute diagnostics](/diagnostics/)
- [Book a free trial class](/trial/)

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027 (version 3), Cambridge University Press & Assessment: topic 14, Communications technology, sections 14.1 to 14.10.
