---
title: "A Level Computer Science: Communication and Internet Technologies (A Level) — Practice Questions (Cambridge 9618)"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Communication and internet technologies"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2027-2029"
stage: "A"
order: 14
syllabusTopics:
  - qualification: "a-level"
    topic: "communication-and-internet-technologies"
description: "Original exam-style questions with full worked answers on the layers of the TCP/IP protocol suite, email and peer-to-peer protocols, and packet switching compared with circuit switching, for Cambridge AS & A Level Computer Science (9618)."
author: "marlbridge-academic-team"
publishedDate: 2026-09-24
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Each question practises a skill tested in the June 2025 Paper 31. After each answer there is an examiner insight, a mark-scheme insight or a tip, and the real question to try next where one matches.

---

## Questions

**1.** A student uses a web browser to open an online library catalogue. Describe the purpose of the Application Layer of the TCP/IP protocol suite in this situation. **[3]**

**2.** Describe the purpose of the Transport Layer of the TCP/IP protocol suite when the library catalogue page from Question 1 is sent from the web server to the student's computer. **[3]**

**3.** State the purpose of:

**(a)** the Internet Layer of the TCP/IP protocol suite

**(b)** the Link Layer of the TCP/IP protocol suite. **[2]**

**4.** A film studio in Cape Town sends a large video file to an editor in Toronto over the internet. Describe how packet switching is used to transmit the file. **[4]**

**5.** A hospital runs live video consultations between doctors and patients. Explain why circuit switching could be suitable for these consultations, and state one drawback of using circuit switching. **[3]**

**6.** A game developer releases a large free update for its game using the BitTorrent protocol. Describe how a player's computer obtains the update using this protocol. **[3]**

**7.** A student reads their email on both a phone and a laptop. Identify the protocol used to send an email from the student's device to the mail server, and explain why IMAP is more suitable than POP3 for retrieving the student's email. **[2]**

---

## Answers

**1.** The Application Layer provides the **interface between the user's application (the browser) and the network**, giving access to services such as viewing web pages [1]. It holds the **protocols the application uses to exchange data**, here **HTTP/HTTPS** to request the catalogue page and receive it from the web server [1]. It can also provide **security for the communication**, such as encryption and authentication when HTTPS is used [1].

*Examiner insight (June 2025):* the best answers described what the layer does to prepare data for sending, or to present received data to the user, rather than simply naming the layers it passes data to or receives data from.

*Try the real question next:* Cambridge International AS & A Level Computer Science 9618, June 2025, Paper 31, Question 3.

**2.** The Transport Layer **splits the page data into segments** before sending and **reassembles the segments in the correct order** at the student's computer [1]. It provides **logical communication between the applications**, using port numbers so the data is delivered to the correct process (the browser) on the destination computer [1]. Using TCP, it ensures **reliable end-to-end delivery**: segments are acknowledged, and missing or damaged segments are detected and sent again; it also provides **flow control** so the receiver is not overwhelmed [1].

*Mark-scheme insight (June 2025):* credit was given for segmenting and reassembling data, delivery to the correct application process, error-free delivery in sequence, and flow control, so aim for several distinct functions rather than repeating one idea.

*Try the real question next:* Cambridge International AS & A Level Computer Science 9618, June 2025, Paper 31, Question 3.

**3.** **(a)** The Internet Layer **adds the source and destination IP addresses** to form packets and **routes each packet across the networks** towards its destination [1].

**(b)** The Link Layer **transmits the data over the physical network** between one device and the next, for example using MAC addresses and the hardware of a local network [1].

*Tip:* learn the four layers in order (Application, Transport, Internet, Link) with one key job for each; a short, precise job for each layer is worth more than a long description of just one.

**4.** The file is **split into packets** of a set size [1]. Each packet has a **header** containing the sender's and receiver's IP addresses and a **sequence number** [1]. Each packet is **sent independently**, with routers choosing the best available route at that moment, so packets may **take different routes** [1]. Packets may arrive **out of order** and are **reassembled in sequence** in Toronto; any **missing or damaged packets are requested and sent again** [1].

*Examiner insight (June 2025):* a number of candidates mixed up packet switching and circuit switching, and others wrote about benefits and drawbacks when the question only asked them to describe the process.

*Try the real question next:* Cambridge International AS & A Level Computer Science 9618, June 2025, Paper 31, Question 3.

**5.** In circuit switching a **dedicated path is set up between the two ends before the consultation starts**, and is kept for the whole call [1]. All the data follows this path, so it **arrives in order with a steady, low delay** and no reassembly is needed, which suits live video and sound [1]. Drawback: the path's **bandwidth is reserved even when no data is being sent**, so it is wasted and cannot be used by others (or: if any link in the path fails, the whole connection is lost) [1].

*Tip:* when a question gives a real-time use such as a call or video link, tie your answer to it: say why steady delay and in-order delivery matter for that use.

**6.** The update file is split into **small pieces** [1]. The player's computer contacts a **tracker**, which tells it which other computers (peers) in the **swarm** hold pieces of the file [1]. It **downloads different pieces from many peers at the same time**, and while downloading it also **uploads pieces it already has** to other peers; once it has all the pieces it can act as a **seed** for others [1].

*Tip:* BitTorrent answers should use the key terms (pieces, tracker, peers, swarm, seed) and make clear that each computer both downloads and uploads.

**7.** Email is sent from the device to the mail server using **SMTP** [1]. IMAP **keeps the messages on the server** and keeps every device in step (for example, read or deleted messages show the same on the phone and laptop), whereas POP3 normally **downloads the messages to one device and removes them from the server** [1].

*Tip:* SMTP pushes email out; POP3 and IMAP are used to collect it. If a question mentions more than one device, IMAP is almost always the better choice.

---

## Where marks are usually lost

- Describing which layer passes data to which, instead of what each TCP/IP layer actually does to the data.
- Mixing up packet switching (independent packets, different routes) with circuit switching (one dedicated path).
- Giving advantages and disadvantages when the question only asks for a description of the process.
- Forgetting the sequence number in the packet header and the reassembly of packets at the destination.
- Saying POP3 or IMAP is used to send email: sending uses SMTP.
