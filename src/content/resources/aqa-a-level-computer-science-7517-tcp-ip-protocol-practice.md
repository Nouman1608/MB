---
title: "AQA A-Level Computer Science (7517): The Transmission Control Protocol/Internet Protocol (TCP/IP) Protocol -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of communication and networking"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 9.4
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-communication-and-networking"
    subtopic: "the-transmission-control-protocol-internet-protocol-tcp-ip-protocol-7517"
description: "Original AQA 7517 section 4.9.4 questions with answers: TCP/IP layers, ports, application protocols, subnet masks, NAT, DHCP, REST and thin clients."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs: examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [TCP/IP study guide](/resources/aqa-a-level-computer-science-7517-tcp-ip-protocol/) | [TCP/IP revision notes](/resources/aqa-a-level-computer-science-7517-tcp-ip-protocol-revision-notes/)

---

## Section A

**1.** State the purpose of a MAC address. **[1]**

**2.** Name the application layer protocol used to send email from a client to a mail server. **[1]**

**3.** State what is meant by a socket. **[1]**

**4.** State which of the following addresses are private (non-routable): 192.168.4.20, 172.32.0.1, 10.1.1.1, 172.20.0.1. **[2]**

**5.** State **one** reason why IPv6 was introduced. **[1]**

## Section B

**6.** Describe the role of each of the four layers of the TCP/IP stack. **[4]**

**7.** A web browser on a laptop requests a page from a web server using HTTPS.

**(a)** State the well-known port used by the server. **[1]**
**(b)** Explain why the laptop uses a different, temporary port number. **[2]**

**8.** A subnet mask of 255.255.255.224 is used with the address 172.16.5.200.

**(a)** Write the last octet of the mask in binary. **[1]**
**(b)** Calculate the network identifier. **[3]**
**(c)** Calculate the number of usable host addresses on this subnet. **[2]**

**9.** The address 10.20.30.40 has the subnet mask 255.255.0.0. State the network identifier and calculate the number of usable host addresses. **[3]**

**10.** Explain the difference between the POP3 and SMTP protocols. **[2]**

**11.** Describe the difference between anonymous and non-anonymous FTP access, and give a situation in which each would be used. **[4]**

**12.** Explain what a DHCP server does and why a school network would use one. **[3]**

**13.** Explain how network address translation (NAT) allows 200 computers with private addresses to use one public address, and give one benefit. **[4]**

**14.** A company runs a web server on a private address inside its network. Explain how port forwarding allows customers on the Internet to reach it. **[3]**

**15.** Compare a WebSocket connection with a standard HTTP request and response, and give one application for which WebSocket is better suited. **[4]**

**16.** A web application manages a database of customers using REST. State the HTTP method and the SQL command that correspond to each CRUD action. **[4]**

**17.** State **two** advantages of JSON compared with XML for sending data between a server and a web application. **[2]**

**18.** A school is choosing between thin clients and thick clients for its computer rooms. Evaluate the choice. **[6]**

---

## Answers

**1.** It is a unique hardware address of a network adapter, used to deliver frames to the right device on the local network [1].

**2.** SMTP [1].

**3.** The combination of an IP address and a port number [1].

**4.** 192.168.4.20 [1], 10.1.1.1 and 172.20.0.1 [1] (all three needed for the second mark). 172.32.0.1 is outside the private range 172.16.0.0 to 172.31.255.255.

**5.** IPv4 addresses (32 bits) were running out as more devices connected, and IPv6 has a far larger address space (128 bits) [1].

**6.** Application: provides network services to programs and defines their messages, for example HTTP [1]. Transport: splits data into segments, adds port numbers and (with TCP) provides reliable, ordered delivery [1]. Network: adds IP addresses and routes packets between networks [1]. Link: sends frames over the local physical connection using MAC addresses [1].

**7. (a)** 443 [1].
**(b)** The client port is chosen temporarily by the operating system for the duration of the connection [1], so that the server's replies come back to the correct program on the laptop (several programs can use the network at once) [1].

**8. (a)** 11100000 [1].
**(b)** 200 in binary is 11001000 [1]; 11001000 AND 11100000 = 11000000 = 192 [1]; network identifier 172.16.5.192 [1].
**(c)** The mask has 3 network bits in the last octet, leaving 5 host bits [1]; 2⁵ − 2 = 30 usable addresses [1].

**9.** The network identifier is 10.20.0.0 [1]; the host part is the last 16 bits, so 2¹⁶ − 2 [1] = 65,534 usable hosts [1].

**10.** SMTP is used to send email (from a client to a server and between servers) [1]; POP3 is used to retrieve email from the mail server to the client [1].

**11.** Anonymous access needs no personal account: anyone can log in (usually with limited rights, mostly for downloading) [1], for example a public download site for free software [1]. Non-anonymous access requires a username and password [1], for example staff uploading private files to a company server [1].

**12.** A DHCP server automatically gives each device an IP address (and settings such as subnet mask, gateway and DNS server) when it joins the network [1], taking an address from a pool and leasing it for a time [1]. A school would use one because hundreds of devices connect and disconnect, so manual set-up would take time and cause duplicate addresses [1].

**13.** The router replaces the private source address and port of each outgoing packet with its own public address and a unique port [1]; it records this mapping in a table [1]; when a reply comes back, it uses the table to change the destination back to the correct private address [1]. Benefit, one of: saves public IPv4 addresses; hides internal addresses from the Internet [1].

**14.** The router has a public address, and customers send requests to it [1]; a port forwarding rule says that traffic arriving at the public port (for example 443) is sent to the private address and port of the web server [1]; without the rule, NAT would block the unsolicited incoming connection [1].

**15.** A standard HTTP exchange is a request followed by a response, then it finishes, and the server cannot send data unless asked [1]. A WebSocket creates a persistent, full-duplex connection over TCP [1], so either side can send data at any time without a new request [1]. It is better for live applications such as chat, online games or live scores [1].

**16.** Create: POST and INSERT [1]; Retrieve: GET and SELECT [1]; Update: PUT and UPDATE [1]; Delete: DELETE and DELETE [1].

**17.** Any two from: easier for a human to read; more compact; easier to create; easier and quicker for computers to parse [1 each].

**18.** Indicative content (up to 6 marks). Thin clients: processing is on the server, so the client machines are cheaper and simpler [1]; software is installed and updated in one place, which saves staff time [1]; but the clients need the network and a powerful server, and if either fails, no one can work [1]. Thick clients: they process locally and can work without the server, and the server load is lower [1]; but the machines cost more and each must be updated and maintained [1]. A justified judgement, for example that thin clients suit a large room of identical machines with a reliable network, whereas thick clients suit work needing heavy local processing or offline use [1].

---

## Where marks are usually lost

- Confusing the roles of port, IP address and MAC address.
- Mixing up SMTP and POP3.
- Forgetting to subtract 2 from the number of host addresses.
- Giving "NAT encrypts traffic" as a benefit.
- Mixing HTTP methods with CRUD actions (PUT is update; POST is create).
