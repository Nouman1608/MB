---
title: "OxfordAQA A-Level Computer Science: Networking and cyber security (9645) -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Networking Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Networking and cyber security"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 14
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "networking-and-cyber-security"
description: "Original practice questions with worked answers on OxfordAQA A-Level Computer Science networking: bit rates, subnets, DNS, CSMA and encryption."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

Use the set to practise section 3.14 (Networking and cyber security) of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards. Each question is International A-level only content, examined in the written Unit 4 paper.

Revise first with the [study guide](/resources/oxfordaqa-a-level-computer-science-networking-and-cyber-security/) and [revision notes](/resources/oxfordaqa-a-level-computer-science-networking-and-cyber-security-revision-notes/). Course links: [hub](/boards/oxfordaqa/a-level/computer-science/), [checklist](/checklists/oxfordaqa/a-level/computer-science/), [diagnostics](/diagnostics/).

Questions 4 to 12 use one context: Pemberwick Dental Practice, a clinic with fourteen staff, two treatment buildings and an online appointment site.

## Questions

**1.** Define **bit rate** and **latency**. **[2]**

**2.** A link operates at 3,200 baud and uses 64 distinct signal levels.

**(a)** Calculate the bit rate. Show your working. **[2]**
**(b)** Calculate how long a 48,000-byte file takes to send at this bit rate, ignoring any overheads. **[2]**
**(c)** State the effect on the maximum bit rate if the bandwidth of the link is halved. **[1]**

**3.** A sensor sends 1,200 characters by asynchronous transmission at 2,400 bit/s. Each character is sent as 1 start bit, 7 data bits and 2 stop bits.

**(a)** Explain the purpose of the start bit. **[1]**
**(b)** Calculate the time taken to send all the characters. **[2]**
**(c)** Calculate the percentage of transmitted bits that are data. **[1]**
**(d)** State one difference between synchronous and asynchronous transmission. **[1]**

**4.** Pemberwick Dental Practice stores patient records centrally.

**(a)** Explain why a client-server network suits the practice better than a peer-to-peer network. **[2]**
**(b)** The practice wants thin-client terminals at reception. Describe the hardware and networking requirements of this choice compared with thick clients. **[4]**

**5.** The two buildings are to be linked by cable. The link will carry large X-ray image files, and the cable runs past X-ray equipment. Recommend copper or fibre-optic cable, justifying your choice. **[3]**

**6.** Staff laptops connect by Wi-Fi.

**(a)** Explain why wireless networks use CSMA/CA rather than CSMA/CD. **[1]**
**(b)** Describe how CSMA/CA works when RTS/CTS is used. **[4]**

**7.** Name the **two** hardware components needed to add wireless networking to the practice, and describe **three** ways the wireless network can be secured. **[5]**

**8.** A packet leaves a server with a time to live of 5. Its route crosses seven routers.

**(a)** State the time to live after the fourth router, and which router discards the packet. **[2]**
**(b)** Explain why packets carry a sequence number. **[2]**

**9.** Patients book at `https://appointments.pemberwick-dental.org/slots/today.html`.

**(a)** Identify the FQDN and the domain name in this URL. **[2]**
**(b)** Describe how DNS finds the IP address for the FQDN when no server has it cached. **[4]**
**(c)** Explain why Internet registries are needed. **[2]**

**10.** Two computers in the practice have addresses 172.19.83.14 and 172.19.95.200.

**(a)** Using subnet mask 255.255.240.0, show that they are on the same subnet. **[3]**
**(b)** Determine whether they would be on the same subnet with mask 255.255.248.0. **[2]**
**(c)** Explain what is meant by a non-routable IP address. **[1]**
**(d)** Describe how a visiting dentist's laptop receives an IP address by DHCP, and give one advantage over manual configuration. **[5]**

**11.** The practice's IT contractor works remotely.

**(a)** Explain why networking protocols such as TCP/IP are organised in layers. **[2]**
**(b)** Explain what a socket is. **[2]**
**(c)** Explain why the contractor uses SSH, and why SFTP is preferred to FTP for uploading files to the appointment site. **[2]**
**(d)** A receptionist emails a patient who reads mail on a phone and a laptop. Describe how SMTP and IMAP are used. **[3]**

**12.** The appointment site must be protected.

**(a)** Explain how stateful inspection differs from packet filtering. **[2]**
**(b)** Explain how asymmetric encryption solves the key exchange problem of symmetric encryption. **[3]**
**(c)** Describe how the practice obtains a digital certificate and how a browser uses it. **[3]**
**(d)** Discuss how a worm and a trojan could each infect the practice's network, and the vulnerabilities each exploits. **[4]**

## Answers

**1.** Bit rate: the number of bits transmitted per second [1]. Latency: the time delay between data being sent and being received [1].
*Examiner insight:* "How fast data goes" fits neither term well; precise definitions earn credit where loose ones do not.

**2. (a)** log₂(64) = 6 bits per signal change [1]; 3,200 × 6 = **19,200 bit/s** [1].
**(b)** 48,000 × 8 = 384,000 bits [1]; 384,000 ÷ 19,200 = **20 s** [1].
**(c)** It halves, to **9,600 bit/s**, because bit rate is directly proportional to bandwidth [1].
*Examiner insight:* Convert bytes to bits before dividing; forgetting the ×8 is the usual slip.

**3. (a)** It brings the receiver's clock into phase with the sender's clock [1].
**(b)** 1 + 7 + 2 = 10 bits per character, so 12,000 bits [1]; 12,000 ÷ 2,400 = **5 s** [1].
**(c)** 7 ÷ 10 = **70%** [1].
**(d)** Synchronous sends a continuous stream kept in step by a shared timing signal; asynchronous sends characters individually with start and stop bits [1].
*Examiner insight:* "Start bit tells the receiver data is coming" is weaker than the clock-phase idea the specification uses.

**4. (a)** A server holds the records centrally, so everyone works from one up-to-date copy [1]; access rights, security and backups can be managed in one place [1].
**(b)** Thin-client terminals need little processing power or storage, so they are cheap [1]; the server must be powerful enough to run applications for every terminal [1]; the network must be fast and reliable because all processing traffic crosses it [1]; thick clients need capable local hardware but put less load on the network [1].
*Examiner insight:* Tie each point to the practice; generic lists of advantages earn less than points applied to the scenario.

**5.** Fibre-optic [1]: its higher speed and capacity suit large image files [1]; it is immune to electrical interference from the X-ray equipment [1].
*Examiner insight:* A recommendation without justification linked to the stated situation gains little.

**6. (a)** A wireless station cannot detect a collision while it is transmitting [1].
**(b)** The station listens and waits until the channel is idle [1]; it sends a Request to Send to the access point [1]; the access point replies Clear to Send, which other stations hear, so they stay silent [1]; the data is sent and the receiver returns an acknowledgement; no acknowledgement means retry after a random back-off [1].
*Examiner insight:* Keep the steps in order, and name who sends RTS and who sends CTS.

**7.** Wireless network adapter in each device [1]; wireless access point [1]. WPA2 encryption, so intercepted data cannot be read [1]; SSID broadcast disabled, so the network is not advertised [1]; MAC address allow list, so only approved devices can join [1].
*Examiner insight:* For "describe", say how each measure helps, not just its name.

**8. (a)** **1** after the fourth router [1]; discarded by the **fifth router** [1].
**(b)** Packets may take different routes and arrive out of order [1]; the receiver uses sequence numbers to reassemble them correctly and spot missing packets [1].
*Examiner insight:* Count carefully: the router that reduces the value to 0 is the one that discards the packet.

**9. (a)** FQDN: **appointments.pemberwick-dental.org** [1]; domain name: **pemberwick-dental.org** [1].
**(b)** The computer asks its DNS resolver [1]; the resolver asks a root name server, which refers it to the .org name servers [1]; a .org server refers it to the authoritative name server for pemberwick-dental.org [1]; that server returns the IP address, which the resolver caches and returns [1].
**(c)** They allocate IP addresses and record domain names [1] so that each public address and name is unique and no two organisations clash [1].
*Examiner insight:* Including "https://" or the path in the FQDN loses the mark.

**10. (a)** Third octets: 83 = 01010011, 95 = 01011111 [1]; AND with 240 (11110000) gives 01010000 = 80 for both [1]; both network identifiers are 172.19.80.0, so same subnet [1].
**(b)** AND with 248 (11111000): 83 → 80, 95 → 88 [1]; networks 172.19.80.0 and 172.19.88.0 differ, so **not** on the same subnet [1].
**(c)** An address from a private range, used inside local networks and not forwarded across the Internet [1].
**(d)** The laptop broadcasts a DHCP Discover [1]; a DHCP server replies with an Offer of an address and settings [1]; the laptop sends a Request for that address [1]; the server sends an Acknowledge and the address is leased for a set time [1]. Advantage: no duplicate addresses or typing errors [1].
*Examiner insight:* Show the binary AND; a bare answer gives nothing to credit if it is wrong.

**11. (a)** Each layer handles one part of the task and can be changed without altering the others [1]; standard interfaces let hardware and software from different makers work together [1].
**(b)** An IP address combined with a port number [1], identifying one endpoint of a connection so a host can run several connections at once [1].
**(c)** SSH gives encrypted remote login to run commands on the server [1]; SFTP encrypts transfers, while FTP sends data and passwords unencrypted [1].
**(d)** The receptionist's client sends the email by SMTP to the practice's mail server [1]; it is relayed by SMTP to the patient's mail server and stored [1]; the patient's devices use IMAP, so mail stays on the server and both devices stay in step [1].
*Examiner insight:* Name the right protocol at each stage; SMTP for retrieval is a frequent error.

**12. (a)** Packet filtering judges each packet alone against rules on addresses, ports and protocol [1]; stateful inspection tracks connections and admits only packets belonging to an established one [1].
**(b)** Symmetric encryption needs the shared key delivered securely [1]; the sender encrypts a new symmetric key with the recipient's public key, which only the recipient's private key can decrypt [1]; both then use the faster symmetric key [1].
**(c)** The practice sends its public key and identity details to a Certificate Authority, which verifies them [1]; the CA issues a certificate containing the public key, signed with the CA's private key [1]; the browser checks the CA's signature before trusting the site's public key [1].
**(d)** A worm spreads by itself across the network [1], exploiting unpatched operating system or service flaws [1]. A trojan arrives disguised as useful software, such as a fake update [1], exploiting users who install it and accounts with excess privileges [1].
*Examiner insight:* In "discuss", pair each malware type with its own vulnerability rather than one shared list.

## Where marks are usually lost

- Dividing bytes by bit rate without multiplying by 8.
- Using the number of signal levels as bits per change instead of log₂ of it.
- Giving a subnet answer with no binary working.
- Describing CSMA/CD when asked about wireless.
- Swapping the roles of the station and access point in RTS/CTS.
- Writing a whole URL when asked for the FQDN.
- Using the receiver's private key to sign.
- Listing malware names without the vulnerabilities they exploit.

## Next steps

- [Revision notes](/resources/oxfordaqa-a-level-computer-science-networking-and-cyber-security-revision-notes/)
- [Study guide](/resources/oxfordaqa-a-level-computer-science-networking-and-cyber-security/)
- [Course hub](/boards/oxfordaqa/a-level/computer-science/)
- [Printable checklist](/checklists/oxfordaqa/a-level/computer-science/)
- [All free 10-minute diagnostics](/diagnostics/)
- [Book a free trial class](/trial/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.14 Networking and cyber security.
