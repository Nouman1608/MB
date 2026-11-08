---
title: "AQA A-Level Computer Science: Communication and Networking — Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 9: Fundamentals of communication and networking"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 9
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-communication-and-networking"
description: "Original practice questions with answers on transmission, Wi-Fi, packets, DNS, signatures, TCP/IP, subnets, NAT and REST for AQA A-Level CS 7517."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Communication and networking study guide](/resources/aqa-a-level-computer-science-fundamentals-of-communication-and-networking-study-guide/) | [Communication and networking revision notes](/resources/aqa-a-level-computer-science-fundamentals-of-communication-and-networking-revision-notes/)

These questions cover section 4.9 of the AQA A-Level Computer Science (7517) specification: communication
(4.9.1), networking (4.9.2), the Internet (4.9.3) and TCP/IP (4.9.4). This content is assessed on Paper 2.

---

## Section A: communication

**1.** **(a)** Define **baud rate** and **bit rate**. **[2]**
**(b)** A connection runs at 2,400 baud and encodes 2 bits in each signal change. Calculate its bit rate. **[1]**
**(c)** State the relationship between bit rate and bandwidth. **[1]**

**2.** Explain two advantages of serial transmission over parallel transmission. **[4]**

**3.** Describe the purpose of the start bit and stop bit in asynchronous transmission. **[2]**

**4.** Define **latency** and **protocol**. **[2]**

## Section B: networking

**5.** Explain how a network that is physically wired as a star can operate as a logical bus. **[3]**

**6.** A small design studio with four computers is choosing between peer-to-peer and client-server
networking. Recommend one, with two reasons. **[3]**

**7.** **(a)** State three ways a wireless network can be secured. **[3]**
**(b)** Describe how CSMA/CA with RTS/CTS is used to transmit a frame, and explain the problem that RTS/CTS
solves. **[5]**

## Section C: the Internet and security

**8.** **(a)** Explain how packet switching is used to send a file across the Internet. **[4]**
**(b)** State two items in a packet's header. **[2]**
**(c)** Explain the difference between a router and a gateway. **[2]**

**9.** For the URL `https://shop.example.co.uk/basket/view`:
**(a)** Identify the protocol, the fully qualified domain name and the domain name. **[3]**
**(b)** Describe how the browser obtains the IP address of the server. **[3]**
**(c)** Explain why Internet registries are needed. **[2]**

**10.** Describe how a firewall uses **stateful inspection**, and how this differs from simple packet
filtering. **[3]**

**11.** Alice sends Bob a signed contract.
**(a)** Describe how Alice creates a digital signature and how Bob checks it. **[5]**
**(b)** Explain why Bob needs Alice's digital certificate. **[2]**

**12.** Explain the difference between a worm and a trojan, and describe one way improved code quality reduces
the threat from malware. **[4]**

## Section D: TCP/IP and addressing

**13.** Describe what happens to an email message at each of the four layers of the TCP/IP stack as it is sent.
**[4]**

**14.** **(a)** Explain what a socket is. **[1]**
**(b)** Explain the difference between a well-known port and a client port. **[2]**

**15.** A host has IP address 10.4.150.23 and subnet mask 255.255.240.0.
**(a)** Calculate the network identifier. **[2]**
**(b)** Determine whether a host with address 10.4.160.5 is on the same subnet, showing your working. **[2]**

**16.** **(a)** Explain why IPv6 was introduced. **[1]**
**(b)** Explain the purpose of DHCP. **[2]**
**(c)** A home has one public IP address and ten devices. Explain how NAT allows them all to use the Internet, and
why port forwarding might be needed for a games server on one of the devices. **[4]**

**17.** **(a)** Explain why a live sports score website might use the WebSocket protocol rather than repeated HTTP
requests. **[2]**
**(b)** A web application uses a REST API connected to a database. State the HTTP method and SQL command used to
(i) display a list of products (ii) add a new review. **[2]**
**(c)** Give two reasons why JSON might be chosen instead of XML. **[2]**

**18.** A school is choosing between thin-client and thick-client computing for its library computers. Discuss
one advantage and one disadvantage of thin-client computing in this case. **[4]**

---

## Answers

**1. (a)** Baud rate: the number of signal changes per second [1]. Bit rate: the number of bits transmitted per
second [1].
**(b)** 2,400 × 2 = **4,800 bit/s** [1].
**(c)** Bit rate is directly proportional to bandwidth [1].

**2.** Any two, explained [2 each]: no **skew**, because bits do not travel on several wires that may deliver them
at slightly different times, so higher speeds are possible; no **crosstalk** between neighbouring wires; cheaper,
thinner cable with fewer wires; reliable over longer distances.

**3.** The start bit signals that a character is about to arrive and lets the receiver synchronise its clock to
the incoming data [1]. The stop bit marks the end of the character and gives the receiver time to process it
before the next [1].

**4.** Latency: the time delay between data being sent and it starting to be received [1]. Protocol: a set of
rules that govern communication between devices [1].

**5.** Each device is connected by its own cable to a central switch (physical star) [1]. The network uses a bus
protocol [1], so every frame is effectively broadcast to all devices and only the device it is addressed to
accepts it, as on a shared bus [1].

**6.** Peer-to-peer [1]: it is cheap because no dedicated server is needed [1], and with only four users it is
simple to set up and share files directly [1]. (Accept client-server if justified, e.g. central backups of
valuable design files and central security.)

**7. (a)** Use WPA2 (or WPA) encryption [1]; disable SSID broadcast [1]; use a MAC address allow list [1].
**(b)** The device listens to check whether the channel is idle; if busy it waits a random back-off period [1].
When idle, it sends a **Request to Send** to the access point [1]. The access point replies with **Clear to Send**,
which all devices in range hear, so the others delay transmitting [1]. The device sends its frame and the receiver
returns an acknowledgement; if none arrives, it assumes a collision and retries after a back-off [1]. RTS/CTS
solves the **hidden node** problem: two devices that cannot hear each other but can both reach the access point
would otherwise transmit at the same time [1].

**8. (a)** The file is split into packets [1], each given a header containing addressing information [1]. Each
packet is sent independently and routers forward it towards the destination, so packets may take **different
routes** [1]. At the destination they are reassembled in the correct order using their sequence numbers, and any
missing packets are requested again [1].
**(b)** Any two: source IP address, destination IP address, packet sequence number, time to live, protocol [2].
**(c)** A router forwards packets between networks that use the same protocols [1]; a gateway connects networks
using different protocols and translates between them [1].

**9. (a)** Protocol: HTTPS [1]. FQDN: shop.example.co.uk [1]. Domain name: example.co.uk [1].
**(b)** The browser sends the domain name to a DNS server [1]. If the server holds the record it returns the IP
address; otherwise the request is passed up the hierarchy of name servers until one that knows the address
answers [1]. The IP address is returned to the browser, which then connects to the web server [1].
**(c)** Every IP address and domain name must be globally **unique** [1], so registries allocate them centrally and
keep records of who holds each one [1].

**10.** Stateful inspection keeps a record of the connections that are open [1] and checks each packet against
it, allowing only packets that belong to a legitimate, established connection [1]. Packet filtering examines
each packet on its own, using only rules about IP addresses, ports and protocols [1].

**11. (a)** Alice creates a hash (digest) of the contract [1] and encrypts the hash with **her private key** to form
the signature, which she sends with the contract [1]. Bob decrypts the signature using **Alice's public key** to
recover the hash [1]. He hashes the contract he received himself [1]. If the two hashes match, the contract came
from Alice and has not been altered [1].
**(b)** The certificate is issued and signed by a trusted Certificate Authority [1] and confirms that the public key
really belongs to Alice, not an impostor [1].

**12.** A worm is self-replicating and spreads across a network on its own [1]; a trojan disguises itself as
legitimate software and relies on the user installing it [1]. Code quality: code reviews and thorough testing
remove vulnerabilities, such as buffer overflows, that malware exploits [1], so there are fewer weaknesses to
attack [1].

**13.** Application: the email client formats the message using SMTP [1]. Transport: TCP splits it into segments,
numbers them and adds the source and destination port numbers [1]. Network: IP adds the source and destination IP
addresses to form packets [1]. Link: the network interface adds MAC addresses for the next hop and transmits the
frames on the physical medium [1].

**14. (a)** An IP address combined with a port number, identifying one end of a connection to a specific process
[1].
**(b)** Well-known ports (0-1023) are fixed numbers identifying standard services on servers, e.g. 80 for HTTP
[1]; client ports are temporary numbers allocated by the client's operating system for the duration of one
connection [1].

**15. (a)** Third byte: 150 = 10010110; AND 240 = 11110000 gives 10010000 = 144 [1]. Network identifier
**10.4.144.0** [1].
**(b)** 160 = 10100000; AND 11110000 = 10100000 = 160, so its network identifier is 10.4.160.0 [1]. This differs
from 10.4.144.0, so it is **not** on the same subnet [1].

**16. (a)** IPv4's 32-bit addresses were running out; IPv6 uses 128 bits to give far more addresses [1].
**(b)** DHCP automatically allocates an IP address (and settings such as subnet mask and default gateway) to a
device when it joins the network [1], from a pool, so addresses do not have to be configured manually and are
not duplicated [1].
**(c)** Devices have private, non-routable addresses [1]. The router replaces the private source address of
outgoing packets with its public address and records the mapping in a translation table, so replies can be sent
back to the right device [1]. Incoming connections that were not requested have no entry, so they are not
delivered [1]. Port forwarding sets a rule sending all traffic arriving on a specific public port to the games
server's private address, so other players can connect to it [1].

**17. (a)** WebSocket keeps a persistent, full-duplex connection open [1], so the server can push new scores to the
browser immediately, without the overhead of the browser repeatedly sending new requests [1].
**(b)** (i) GET -> SELECT [1] (ii) POST -> INSERT [1].
**(c)** Any two: easier for humans to read; more compact; easier to create; easier and quicker for computers to
parse [2].

**18.** Advantage (any one, explained): terminals are cheaper; software is installed and updated once on the
server; data is stored and backed up centrally [2]. Disadvantage (any one, explained): if the network or server
fails, no computer can work; performance falls when many users are active; dependence on network bandwidth [2].

---

## Where marks are usually lost

- Calculating subnets in denary instead of ANDing the binary values.
- In the digital signature process, using the receiver's keys or forgetting to compare the two hashes.
- Describing CSMA/CA as detecting collisions -- it **avoids** them; detection is CSMA/CD.
- Mixing up POP3 (retrieves email) and SMTP (sends email).

## Frequently asked questions

**Do I need to remember port numbers?**
The 7517 specification asks you to explain what well-known and client ports are for, not to list numbers. Knowing
common ones such as 80 and 443 helps you give clear examples.

**Is CSMA/CD examined?**
No. The specification states that knowledge of CSMA/CD is not required. Learn CSMA/CA with and without RTS/CTS.
