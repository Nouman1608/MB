---
title: "Cambridge A Level Information Technology (9626): Network servers"
seoTitle: "A Level IT 9626 Network Servers: Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Topic 14 – Communications technology"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 14.3
syllabusTopics:
  - qualification: "a-level"
    topic: "communications-technology"
  - qualification: "a-level"
    topic: "communications-technology"
    subtopic: "network-servers"
description: "Cambridge 9626 IT section 14.3 study guide: file, web, mail, application, print, FTP, proxy and virtual servers, request and response, and server farms."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide teaches **section 14.3 Network servers** of Topic 14 Communications technology in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is A Level content, examined in Paper 3 Advanced Theory. The [communications technology revision notes](/resources/a-level-cambridge-ict-communications-technology-revision-notes/) summarise the whole topic; this page goes deeper on servers. Use it with the [network servers practice questions](/resources/cambridge-a-level-ict-9626-network-servers-practice/).

## What section 14.3 covers

| Syllabus strand | What you must be able to do |
|---|---|
| Types | Describe file, web, mail, applications, print, FTP, proxy and virtual servers |
| Role | Explain the function of servers in a network |
| Operation | Explain the request and response method, and how servers work within server farms |
| Evaluation | Give advantages and disadvantages of each type of server in a given scenario |

A **server** is a computer, or a program running on one, that provides a service to other computers called **clients**. Servers are usually built for reliability, with fast processors, large memory, multiple disks and often a backup power supply. The **role** of a server is to provide a shared resource or service so that it need not be repeated on every client.

## Request and response

Servers and clients communicate by **request and response**.

1. The client sends a **request**, such as "send me this web page".
2. The server receives it, checks that the client is allowed to ask, and processes it.
3. The server sends a **response**, such as the page, or an error message if the item cannot be found.
4. The client displays or uses the response.

A web page request has a method (such as GET), the address of the page and details about the client. The response includes a **status code** (for example, 200 means success, 404 means not found) and the data. The server handles many requests at once, queuing or sharing them, and normally does not start the conversation. This model is used by almost every network service.

## Types of server

### File server

Stores files centrally and controls who can read, change or delete them. Users save their documents to shared folders, so files are available from any computer, and backups are made in one place. *For:* central backup and access rights; easy sharing. *Against:* if it fails, nobody can reach their files; large demand needs fast storage and network.

### Web server

Stores web pages and sends them to browsers on request, using HTTP or HTTPS. It may run scripts or connect to databases to build pages. *For:* the site is available worldwide at all times. *Against:* a target for attack; slows if many users request pages at once.

### Mail server

Receives, stores and forwards email. An outgoing mail server sends messages to other mail servers (SMTP), and an incoming server stores messages until the user collects them (POP3 or IMAP). *For:* mail is available from any device and can be filtered for spam and viruses. *Against:* a source of attack through phishing; mailbox space is limited and must be managed.

### Applications server

Runs software on behalf of clients, so the program and its data are held centrally. Users see the program on their screen but processing takes place on the server. *For:* software is installed and updated once; weaker client computers can run demanding programs. *Against:* heavy load on the server; if it fails, no one can run the application.

### Print server

Manages print jobs from many users to one or more printers, holding them in a queue. *For:* printers are shared; jobs wait their turn; usage can be recorded and limited per user. *Against:* a failure or a jammed job can block the queue.

### FTP server

Stores files for transfer using the File Transfer Protocol. Users log in and upload or download files, often large ones. *For:* efficient for large files; access can be controlled. *Against:* ordinary FTP sends passwords unencrypted, so a secure version is needed; a target for attackers.

### Proxy server

Sits between clients and the internet. A client sends its request to the proxy, which sends it on to the website, and returns the response. It can **cache** pages that have been requested, **filter** sites that are not allowed, **log** use, and hide the clients' own addresses. *For:* faster access to repeated pages, saves bandwidth, enforces rules, adds some privacy. *Against:* adds delay for pages not cached; a single point of failure; may log private activity.

**Worked example 1: bandwidth saved by a proxy cache.** A school proxy handles 10,000 page requests in a day, and 35% of them are for pages already in the cache. Requests served from the cache = 10,000 × 0.35 = **3,500**. If an average page is 2 MB, the data not downloaded from the internet is 3,500 × 2 = **7,000 MB**, about 7 GB. Pages load faster, and the school's internet connection is less busy.

### Virtual server

A **virtual server** is a software-based server running on a physical machine using **virtualisation** software. One physical computer hosts several virtual servers, each with its own operating system and resources, and each acts as if it were separate. *For:* better use of hardware; lower costs for equipment, space and power; virtual servers are quick to create, copy or move. *Against:* if the physical host fails, all the virtual servers on it fail; the host needs plenty of memory and processing power; skilled staff are required.

**Worked example 2: how many virtual servers fit on one host?** A host has 64 GB of memory and reserves 8 GB for itself. Each virtual server needs 8 GB. Memory available = 64 − 8 = 56 GB. Number of virtual servers = 56 ÷ 8 = **7**. Without virtualisation, seven physical machines would be needed.

## Servers within server farms

A **server farm** (or server cluster) is a large group of servers working together in one location, usually a data centre. Reasons:

- **Capacity**: a single server cannot serve millions of users, so the work is shared.
- **Load balancing**: a device or program sends each new request to the least busy server.
- **Reliability**: if one server fails, the others continue, a feature called **redundancy**.
- **Specialisation**: web, application and database servers can be separate groups.
- **Scalability**: adding servers increases capacity.

A farm also needs strong cooling, backup power, security and monitoring, which makes it costly.

**Worked example 3: capacity of a farm.** A farm has 12 web servers, and each can handle 500 requests per second. Total capacity = 12 × 500 = 6,000 requests per second. At peak, demand is 5,400, so the farm is working at 5,400 ÷ 6,000 = **90%** of capacity. If one server fails, capacity falls to 11 × 500 = 5,500, which still meets the demand. If two fail, capacity is 10 × 500 = 5,000, which is less than 5,400, so requests are delayed or refused. The designers must plan the number of spare servers.

## Choosing a server for a scenario

| Scenario | Server | Reason |
|---|---|---|
| Staff in a firm need shared folders with access rights | File server | Central storage, permissions and backup |
| A shop wants its catalogue online | Web server | Delivers pages to browsers |
| A college blocks unsuitable sites and wants faster repeat page loads | Proxy server | Filters and caches |
| A designer needs a heavy program on an old laptop | Applications server | Processing is done on the server |
| A firm needs to test three systems without buying three machines | Virtual servers | Several systems on one host |
| An architect sends large drawings to clients | FTP server | Efficient large file transfer |

## Servers and their usual protocols

| Server | Usual protocol or service |
|---|---|
| Web | HTTP and HTTPS |
| Mail | SMTP to send; POP3 or IMAP to collect |
| FTP | File Transfer Protocol |
| File | Shared folders with permissions |
| Print | Print queue management |
| Proxy | Forwards and caches web requests |

## Common mistakes

- Saying a server "stores everything". Each type provides a specific service.
- Mixing up a web server (sends pages) with an application server (runs programs).
- Describing a proxy server as only a firewall. Its main roles are caching, filtering and hiding addresses.
- Describing request and response in one line, without the stages or the status.
- Forgetting that a virtual server shares the physical host's resources.
- Giving "cheaper" as the only advantage of a server farm, without capacity, load balancing or redundancy.

## Exam technique

- **Describe** a server: what it stores or does, and who uses it.
- **Explain** a role using "so that" reasoning, such as "print jobs are queued so that users share one printer".
- **Request and response**: use the sequence, in order, with a named example.
- **Scenario questions**: name the server, give its function and link it to the need in the question.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 14 Communications technology, section 14.3 Network servers.
