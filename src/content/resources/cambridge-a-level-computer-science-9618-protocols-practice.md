---
title: "Cambridge A Level Computer Science (9618): Protocols -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 14: Communication and internet technologies"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 14.1
syllabusTopics:
  - qualification: "a-level"
    topic: "communication-and-internet-technologies"
    subtopic: "protocols"
description: "Original 9618 section 14.1 questions with answers on protocols, layering, TCP/IP layer roles, encapsulation, and choosing the right protocol."
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

Related: [Protocols study guide](/resources/cambridge-a-level-computer-science-9618-protocols/) · [Protocols revision notes](/resources/cambridge-a-level-computer-science-9618-protocols-revision-notes/)

---

## Section A

**1.** Explain why a protocol is essential for communication between two computers. **[3]**

**2.** Give **two** benefits of implementing protocols as a stack of layers. **[2]**

**3.** Name the TCP/IP layer at which each of the following is added to the data.

**(a)** Source and destination IP addresses **[1]**

**(b)** Port numbers and sequence numbers **[1]**

**(c)** Hardware (MAC) addresses **[1]**

**4.** Identify the most suitable protocol for each task.

**(a)** A browser requests a news article from a web server. **[1]**

**(b)** An email client passes a new message to the sender's mail server. **[1]**

**(c)** A web designer uploads, renames and deletes files on a remote web host. **[1]**

## Section B

**5.** A packet travels from a laptop in a school, through three routers, to a web server.

**(a)** Explain why the destination IP address in the packet stays the same throughout the journey, but the hardware address in the frame changes. **[3]**

**(b)** State the TCP/IP layer at which the routers operate, and describe what each router does with the packet. **[3]**

**6.** Describe the functions of the Transport layer when a large file is sent from a server to a client using TCP. **[4]**

**7.** A salesperson spends most of the week travelling with no internet connection, reading email on one laptop only. Her colleague reads email on a phone, a tablet and a desktop computer.

Recommend a protocol for retrieving email for **each** person and justify your recommendations. **[4]**

**8.** Explain what is meant by encapsulation in the TCP/IP protocol suite. **[2]**

**9.** A charity distributes a 4 GB video of a fundraising concert to many thousands of supporters. It is considering making the file available by HTTP from its own server or by BitTorrent.

**(a)** Explain **two** advantages to the charity of using BitTorrent. **[4]**

**(b)** Describe the roles of the torrent file and the tracker. **[2]**

**10.** Describe how the HTTP request and response work when a browser displays a web page that contains two images. **[3]**

**11.** A user's laptop switches from a wired Ethernet connection to Wi-Fi in the middle of a session. Explain, with reference to layering, why the web browser does not need to be changed. **[2]**

---

## Answers

**1.** A protocol is an agreed set of rules for transmitting data [1]. It fixes details such as the data format, addressing, sequencing, flow control and error detection (any two) [1], so that the receiver can interpret the data correctly even if the devices and software come from different manufacturers [1].

**2.** Any two, 1 mark each: each layer has one function, so it is simpler to design and test [1]; a layer can be changed or replaced without changing the other layers [1]; different teams or manufacturers can develop different layers [1]; standard interfaces between layers make products compatible [1].

**3.** **(a)** Internet layer [1].

**(b)** Transport layer [1].

**(c)** Link layer [1].

**4.** **(a)** HTTP [1].

**(b)** SMTP [1].

**(c)** FTP [1].

**5.** **(a)** The IP addresses identify the original source and final destination, so they are not changed while the packet crosses networks [1]. A frame only carries data across one link, to the next device [1], so at each hop the packet is put into a new frame addressed to the hardware address of the next router or the server [1].

**(b)** The Internet layer [1]. Each router reads the destination IP address [1] and uses its routing table to forward the packet to the next router (next hop) on a route towards the destination [1].

**6.** Any four, 1 mark each: sets up a connection between the two hosts before data is sent (handshake) [1]; splits the file into segments and gives each a sequence number [1]; adds port numbers so the data reaches the correct application [1]; the receiver acknowledges segments and any not acknowledged are resent [1]; segments are put back in order using the sequence numbers [1]; controls the rate of sending so the receiver is not overwhelmed [1].

**7.** Salesperson: POP3 [1], because messages are downloaded to her one laptop and remain available to read when she has no connection [1]. Colleague: IMAP [1], because the mail stays on the server and all three devices show the same, synchronised mailbox, including read and deleted messages [1].

**8.** As data passes down the stack, each layer adds its own header (and the Link layer may add a trailer) to the data from the layer above [1]. At the receiver, each layer removes its header and passes the rest up, so each layer only deals with its own information [1].

**9.** **(a)** Any two advantages, 2 marks each: the supporters who download the file also upload pieces to each other [1], so the charity's server does not have to send the whole file to every supporter and its bandwidth costs are lower [1]; the more supporters download it [1], the more peers there are to share pieces, so downloads stay fast even when demand is high [1]; there is no single point of failure [1], because pieces are available from many peers if the charity's computer is offline [1].

**(b)** The torrent file describes the video (its name, size and pieces) and gives the address of the tracker [1]. The tracker keeps a list of the peers in the swarm that are sharing the video, and gives this list to each new peer [1].

**10.** The browser sends an HTTP request (GET) for the page to the web server [1]. The server returns a response containing a status code, such as 200, and the HTML of the page [1]. The browser reads the HTML, finds the two images and sends a further request for each, displaying them when the responses arrive [1].

**11.** Ethernet and Wi-Fi are protocols at the Link layer [1]. The layers above, including the Application layer protocol (HTTP) used by the browser, use the same interface to the layer below whichever link is used, so changing the Link layer does not affect them [1].

---

## Where marks are usually lost

- Describing a protocol only as "rules" without saying what the rules cover.
- Placing IP addresses or port numbers at the wrong layer.
- Recommending POP3 or IMAP without referring to the number of devices or offline use.
- Writing about BitTorrent from the user's point of view when the question asks about the distributor.
