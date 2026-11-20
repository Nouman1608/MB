---
title: "Cambridge A Level Information Technology (9626): Networks"
seoTitle: "A Level IT 9626 Networks: Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Topic 14 – Communications technology"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 14.1
syllabusTopics:
  - qualification: "a-level"
    topic: "communications-technology"
  - qualification: "a-level"
    topic: "communications-technology"
    subtopic: "networks"
description: "Cambridge 9626 IT section 14.1 study guide: LAN, WAN, client-server, peer-to-peer, VPN and mobile networks, topologies, architecture, uses and trade-offs."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide teaches **section 14.1 Networks** of Topic 14 Communications technology in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is A Level content, examined in Paper 3 Advanced Theory. The [communications technology revision notes](/resources/a-level-cambridge-ict-communications-technology-revision-notes/) summarise the whole topic; this page goes deeper on network types. Use it with the [networks practice questions](/resources/cambridge-a-level-ict-9626-networks-practice/).

## What section 14.1 covers

| Syllabus strand | What you must be able to do |
|---|---|
| Types | Describe LAN, WAN, client-server, peer-to-peer, VPN and mobile networks |
| Characteristics | Explain topologies (physical and logical), architecture and protocols |
| Uses | Sharing and storing resources, sharing peripherals, exchanging data, BitTorrent, internet access, tunnelling, telephony, content delivery |
| Evaluation | Give advantages and disadvantages of each type |

A **network** is a set of computers and devices linked so that they can communicate and share resources.

## Types of network

### Local area network (LAN)

Covers a small area such as a school, office or home, and is owned and managed by one organisation. It uses cables (such as Ethernet) or Wi-Fi, and offers high speeds at low cost.

### Wide area network (WAN)

Covers a large area such as a country, or the world. It links LANs together using leased lines, fibre and satellites that are usually owned by telecommunications companies. The internet is the largest WAN. Speeds are lower and costs higher than for a LAN, and more can go wrong.

### Client-server

One or more powerful computers (**servers**) provide services and control access. Other computers (**clients**) request those services. Servers hold shared files, manage user accounts and security, and carry out backups centrally.

### Peer-to-peer (P2P)

Every computer has equal status and can act as both client and server. There is no central server. Each computer stores its own files and shares some of them directly with the others.

### Virtual private network (VPN)

A VPN uses a public network, usually the internet, to create a private, **encrypted connection** between a user or site and a private network. Data travels through a **tunnel**, so others on the internet cannot read it.

### Mobile networks

Mobile (cellular) networks provide wireless voice and data to phones and other devices through a network of base stations, each covering an area called a cell. (Section 14.8 explains them in detail.)

## Characteristics

### Topologies

A **topology** is the arrangement of the network. The **physical topology** is how devices and cables are really laid out. The **logical topology** is how data flows between devices, whatever the cables look like.

| Topology | Arrangement | Advantages | Disadvantages |
|---|---|---|---|
| Bus | All devices on one shared cable | Cheap; little cable | Cable fault stops everyone; collisions slow it as traffic rises |
| Star | Each device linked to a central switch or hub | Fault in one cable affects one device; easy to add devices; fast with a switch | Needs more cable; if the central device fails, all fail |
| Ring | Each device links to the next, in a loop | Predictable performance | One break can stop the ring (unless it is a double ring) |
| Mesh | Devices linked to several others | Very reliable; data takes alternate routes | Expensive; lots of cabling and configuration |
| Hybrid | Mixes two or more | Flexible, can be designed for need | Complex and costly |

**Worked example 1: links in a full mesh.** In a full mesh, each device connects to every other. For n devices the number of links is n × (n − 1) ÷ 2. For 8 devices that is 8 × 7 ÷ 2 = **28 links**. For 12 devices it is 12 × 11 ÷ 2 = **66 links**. A star with 12 devices needs only 12 cables to the central switch. This is why a full mesh is used only where reliability matters most.

For example, an Ethernet LAN built around a **hub** is a **physical star** (every cable runs to the hub) but a **logical bus**, because the hub repeats every signal to all ports, as on a shared cable. When a **switch** replaces the hub, the physical layout is still a star, and the logical behaviour is also star-like because the switch sends data only to the intended device.

### Architecture

Network **architecture** is the overall design: which devices do which jobs, and how they are linked. The main examples are client-server and peer-to-peer. A client-server design is centrally managed and scales to large numbers of users. A peer-to-peer design is simple and has no dedicated server.

### Protocols

Protocols are the agreed rules that let devices communicate, such as Ethernet for LANs, and TCP/IP for the internet (see section 14.6). Each type of network uses protocols suited to its design. A VPN uses tunnelling protocols and encryption.

## Uses of networks

| Use | Explanation |
|---|---|
| Sharing and storage of resources | Files, programs and databases are held on a server for all to use |
| Sharing peripherals | Many users send jobs to one printer or scanner |
| Exchange of data | Email, messaging and file transfer between users |
| BitTorrent for large files | A peer-to-peer method where a file is split into pieces and downloaded from many users at once |
| Access to internet services | Web, email and cloud services through a shared connection |
| Tunnelling | A VPN carries private data across a public network |
| Telephony | Voice over IP calls and mobile calls |
| Content delivery | Servers placed near users send streaming video or software downloads quickly |

**Worked example 2: BitTorrent against one server.** A 4 GB file (4 × 8,000 = 32,000 megabits) is downloaded.

- From a single server giving 8 megabits per second: 32,000 ÷ 8 = **4,000 seconds**, about 67 minutes.
- From 10 peers, each giving 8 megabits per second at the same time, the total is 80 megabits per second: 32,000 ÷ 80 = **400 seconds**, about 7 minutes.

The load is shared across the peers, so no single machine is overloaded. The downside is that the quality and legality of the pieces depend on the peers, and file sharing can be used to spread copyright material or malware.

**Worked example 3: transfer time on a LAN.** A 2 GB file is copied over a 100 megabit per second network at its full speed. 2 GB = 2 × 8,000 = 16,000 megabits. Time = 16,000 ÷ 100 = **160 seconds**. In practice, network traffic and overheads make it slower.

## Advantages and disadvantages of each type

| Type | Advantages | Disadvantages |
|---|---|---|
| LAN | Fast; low cost; easy to manage; shares resources | Limited area; a failure affects all users; security threats spread |
| WAN | Connects distant sites and people; access to remote data | Slower; expensive; relies on third parties; harder to secure |
| Client-server | Central security, backup and management; scales well; users have accounts | Servers and staff are costly; a server failure stops service; clients depend on the server |
| Peer-to-peer | Cheap and simple; no server needed; no single point of failure | Poor security; no central backup; slower as the number of users rises; hard to manage |
| VPN | Secure remote access over the internet; cheaper than a private line; hides the user's location | Slower because of encryption; needs set-up; trust in the VPN provider |
| Mobile network | Wireless access almost anywhere; supports voice and data | Signal can be weak; data costs; slower than fixed lines in some places |

## Choosing a network

| Situation | Suitable network | Reason |
|---|---|---|
| Three-person office sharing a printer | Peer-to-peer LAN | Cheap, little management needed |
| School with 800 users who need accounts and secure files | Client-server LAN | Central control, security and backup |
| Company with offices in several countries | WAN | Links distant sites |
| Staff who work from home and need company files | VPN | Secure access across the internet |
| Sales staff travelling | Mobile network | Access away from fixed lines |

## Common mistakes

- Saying a WAN is simply "a bigger LAN". The key differences are ownership, the lines used and the area covered.
- Mixing up physical and logical topology.
- Saying a peer-to-peer network has no security. Each machine can have its own passwords, but there is no central control.
- Claiming a VPN makes the user completely anonymous.
- Giving advantages without relating them to the scenario (for example "it is cheap" for a large school).
- Forgetting that the star topology depends on a central device.

## Exam technique

- **Describe** a network type: what it covers, who controls it and how devices relate.
- **Compare** two types using the same criteria, such as cost, security, management and performance.
- **Recommend** a network for a scenario: name the type, then link two features to the needs.
- For topologies, say what is *physical* (cables) and what is *logical* (data flow).

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 14 Communications technology, section 14.1 Networks.
