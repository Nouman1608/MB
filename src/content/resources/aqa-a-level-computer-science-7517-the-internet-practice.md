---
title: "AQA A-Level Computer Science (7517): The Internet -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of communication and networking"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 9.3
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-communication-and-networking"
    subtopic: "the-internet-7517"
description: "Original AQA 7517 section 4.9.3 questions with answers: packet switching, routing, DNS, firewalls, encryption, digital signatures and malware."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs: examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Internet study guide](/resources/aqa-a-level-computer-science-7517-the-internet/) | [Internet revision notes](/resources/aqa-a-level-computer-science-7517-the-internet-revision-notes/)

---

## Section A

**1.** State what a router does. **[1]**

**2.** State **two** items of information found in the header of a packet. **[2]**

**3.** Give the fully qualified domain name in the URL `https://mail.school.example.uk/inbox`. **[1]**

**4.** State the purpose of the domain name service. **[1]**

**5.** State what is meant by a worm. **[1]**

## Section B

**6.** A file of 2,500,000 bytes is sent across the Internet using packets with a payload of 1,400 bytes. Calculate the number of packets needed. **[2]**

**7.** Explain **two** advantages of packet switching compared with sending a message as one block along a single fixed route. **[4]**

**8.** Describe how a router uses a packet's hop count (time to live) and explain why the hop count is needed. **[3]**

**9.** Describe the steps by which the domain name `www.example.org` is converted to an IP address, assuming the browser does not already know it. **[5]**

**10.** Explain why Internet registries are needed. **[2]**

**11.** Describe how a stateful inspection firewall differs from a packet filtering firewall. **[3]**

**12.** Explain the difference between symmetric and asymmetric encryption, and explain why a secure web connection often uses both. **[5]**

**13.** In a toy asymmetric scheme the public key is (n = 55, e = 3) and the private key is (n = 55, d = 27). A message is encrypted by calculating the message to the power e, modulo n; and decrypted by calculating the ciphertext to the power d, modulo n.

**(a)** Encrypt the message 9. **[2]**
**(b)** The ciphertext 14 is received. Show that decrypting it gives 9. **[2]**
**(c)** State which key the receiver keeps secret, and explain why. **[2]**

**14.** Explain how a digital signature allows a receiver to check that a message has come from a named sender and has not been changed. **[4]**

**15.** Explain what a digital certificate is, how it is obtained, and how a web browser uses it. **[4]**

**16.** Compare a computer virus, a worm and a trojan, and suggest **two** ways in which an organisation can reduce the risk from malware. **[6]**

---

## Answers

**1.** It forwards packets between networks, using the destination IP address to choose the next hop [1].

**2.** Any two from: destination IP address; source IP address; sequence number; hop count (time to live); protocol [1 each].

**3.** `mail.school.example.uk` [1].

**4.** It translates a domain name into the IP address of the host [1].

**5.** Malware that copies itself across a network without needing a host file or user action, usually by exploiting a software flaw [1].

**6.** 2,500,000 ÷ 1,400 = 1,785.7 [1]; rounded up, 1,786 packets [1].

**7.** Any two advantages, each with an explanation [2 marks each]. Several conversations can share the same links efficiently, because packets from different messages are interleaved [1 each part]. If a link or router fails or is busy, packets can be sent by another route, so the network is more reliable [1 each part]. If a packet is lost or damaged, only that packet must be sent again, not the whole message [1 each part].

**8.** Each router reduces the hop count by one [1]; if the count reaches zero the packet is discarded [1]; this stops packets that cannot be delivered (for example because of a routing loop) from circulating for ever and using up network capacity [1].

**9.** The browser (and operating system) check their caches [1]; if not found, a request goes to the configured DNS server, for example the one run by the ISP [1]; if that does not know, it asks a root server, which points it to the server for the top-level domain `.org` [1]; the top-level domain server points to the authoritative name server for `example.org` [1]; the authoritative server returns the IP address, which is passed back to the browser (and cached for a time) [1].

**10.** They allocate IP addresses and record domain names so that each is unique worldwide [1], which means packets reach the intended device and the owner of a name can be identified [1].

**11.** A packet filtering firewall checks each packet individually against rules about addresses, ports and protocol [1]. A stateful inspection firewall also remembers the state of connections [1], so it allows incoming packets that are part of a connection started from inside the network and blocks unsolicited ones [1].

**12.** Symmetric encryption uses one key to encrypt and decrypt [1]; the problem is sharing that key securely [1]. Asymmetric encryption uses a pair of keys: a public key to encrypt and a private key to decrypt, so the public key can be shared openly [1]. Asymmetric encryption is slower [1], so the two are combined: asymmetric encryption is used to send a symmetric session key securely, then the faster symmetric encryption protects the data [1].

**13. (a)** 9³ = 729 [1]; 729 mod 55 = 14 [1] (55 × 13 = 715; 729 − 715 = 14).
**(b)** 14²⁷ mod 55 = 9 [1] (the working should show the modular arithmetic or state that the calculation gives 9); this is the original message [1].
**(c)** The private key (d = 27) [1], because anyone with it could decrypt messages sent to the receiver; the public key can be shared since it only allows encryption [1].

**14.** The sender calculates a hash of the message [1] and encrypts the hash with their private key; this is the signature [1]. The receiver decrypts the signature with the sender's public key, and calculates the hash of the received message [1]. If the two hashes match, the message has not been changed and came from the holder of the private key [1].

**15.** A digital certificate links a public key to the identity of its owner [1]. It is obtained by sending the public key and proof of identity to a certificate authority, which checks the identity and signs the certificate [1]. A browser checks the certificate's signature using the certificate authority's public key, which it already trusts [1], so it can be confident that the public key belongs to the site before it sends any secret information [1].

**16.** Virus: attaches itself to a file or program and spreads when the file is run or shared [1]. Worm: copies itself across a network without a host file or user action, using a software flaw [1]. Trojan: disguised as useful software and installed by the user; it does not copy itself [1]. Any two reductions [1 each]: improve code quality (validate input, test, review) so there are fewer flaws; keep software patched; use anti-malware and firewalls; monitor networks and logs; train users not to open unknown attachments or install unknown programs. Maximum 6 marks.

---

## Where marks are usually lost

- Not rounding up the number of packets.
- Using the wrong key: encrypt with the receiver's public key, sign with the sender's private key.
- Saying that a signature keeps a message secret.
- Calling a trojan self-replicating.
- Describing DNS as the way a router finds the next hop.
