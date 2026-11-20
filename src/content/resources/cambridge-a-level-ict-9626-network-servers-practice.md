---
title: "Cambridge A Level Information Technology (9626): Network servers -- Practice Questions"
seoTitle: "A Level IT 9626 Network Servers: Practice Questions"
resourceType: "practice-questions"
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
description: "Thirteen original Cambridge 9626 IT section 14.3 questions with answers on server types, request and response, virtual servers and server farms."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs; examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Network servers study guide](/resources/cambridge-a-level-ict-9626-network-servers/) | [Communications technology revision notes](/resources/a-level-cambridge-ict-communications-technology-revision-notes/)

These questions are for **section 14.3 Network servers** (Topic 14, A Level) of Cambridge International AS & A Level Information Technology (9626), 2025–2027. All organisations and figures are invented.

---

## Section A

**1.** State the role of a print server. **[2]**

**2.** Describe the request and response method used between a client and a server. **[3]**

**3.** Identify the type of server that would be used for **each** of the following.

**(a)** Storing and sending web pages to browsers. **[1]**

**(b)** Holding incoming email until a user collects it. **[1]**

**(c)** Letting users upload and download large files by a file transfer protocol. **[1]**

**4.** Give **two** functions of a proxy server. **[2]**

**5.** State what is meant by a virtual server. **[2]**

## Section B

**6.** A school proxy server handles 8,000 page requests a day. 25% of the requests are for pages held in its cache, and an average page is 3 MB.

**(a)** Calculate the number of requests answered from the cache. **[1]**

**(b)** Calculate the amount of data that did not need to be downloaded from the internet. **[2]**

**(c)** Explain **one** other reason why a school would use a proxy server. **[2]**

**7.** A host computer has 128 GB of memory and reserves 16 GB for its own use. Each virtual server needs 12 GB.

**(a)** Calculate the maximum number of virtual servers the host can run. **[3]**

**(b)** Explain **two** advantages of using virtual servers rather than separate physical servers. **[4]**

**(c)** Describe **one** risk of running many virtual servers on one host. **[2]**

**8.** A server farm has 8 web servers. Each can handle 750 requests per second. At peak, demand is 4,800 requests per second.

**(a)** Calculate the total capacity of the farm. **[1]**

**(b)** Calculate the percentage of capacity used at peak. **[2]**

**(c)** Calculate the capacity if two servers fail, and state the effect on users. **[3]**

**9.** Explain the role of a load balancer in a server farm. **[3]**

**10.** An architecture firm has 40 staff who work on large drawings and need to share them, and to send them to clients. Evaluate the use of a file server and an FTP server for this firm. **[6]**

**11.** A company wants staff with older laptops to run a powerful design program. Explain how an applications server could help and give **one** drawback. **[4]**

**12.** A college is deciding whether to buy a mail server or to use an external provider's mail service. Discuss the advantages and disadvantages of having its own mail server. **[6]**

**13.** Describe what happens at a web server when a browser requests a page that does not exist. **[3]**

---

## Answers

**1.** It manages print jobs sent by many users [1], holding them in a queue and sending each in turn to a shared printer [1]. **[2]**

**2.** The client sends a request to the server, for example for a web page [1]. The server checks and processes the request [1]. The server sends back a response containing the data or an error message [1]. **[3]**

**3. (a)** Web server [1]. **(b)** Mail server [1]. **(c)** FTP server [1]. **[3]**

**4.** Any two from: caches pages to speed up repeated requests [1]; filters or blocks unwanted websites [1]; hides the addresses of clients [1]; logs which sites are visited [1]. **[2]**

**5.** A server that is created by software [1] and runs on a physical computer, sharing its hardware with other virtual servers, each behaving as if it were a separate machine [1]. **[2]**

**6. (a)** 8,000 × 0.25 = 2,000 [1].

**(b)** 2,000 × 3 [1] = 6,000 MB [1].

**(c)** Any one with a reason: to block unsuitable sites [1] so that pupils are protected and school rules enforced [1]; to log internet use [1] so that misuse can be traced [1]. **[5]**

**7. (a)** 128 − 16 = 112 GB available [1]; 112 ÷ 12 = 9.33 [1]; so 9 virtual servers [1].

**(b)** Any two, each with a reason: fewer physical machines, so lower cost of hardware, space and power [1][1]; new servers can be created, copied or moved quickly [1][1]; better use of hardware, as one machine's spare capacity is shared [1][1]; easier to test new software in a separate virtual server [1][1].

**(c)** If the host fails, all of the virtual servers on it fail [1], so many services are lost at once [1]. **[9]**

**8. (a)** 8 × 750 = 6,000 requests per second [1].

**(b)** 4,800 ÷ 6,000 [1] = 80% [1].

**(c)** 6 × 750 = 4,500 [1]. This is less than the demand of 4,800 [1], so some requests are delayed or refused [1]. **[6]**

**9.** It sends each new request to the least busy server [1], so no one server is overloaded [1] and users get faster responses; if a server fails, requests are sent to the others [1]. **[3]**

**10.** File server: staff share drawings in folders with access rights, so only the right people can change them [1]; one central copy and one backup, so everyone works on the latest version [1]; but if the server fails, work stops, and large drawings need fast network speeds [1]. FTP server: allows clients outside the firm to log in and download or upload large files efficiently [1]; access can be controlled with accounts [1]; but basic FTP does not encrypt passwords, so a secure version should be used, and it is a target for attack [1]. Judgement: both are needed, since they do different jobs; the file server for staff and the FTP server for clients [1]. Maximum 6 marks. **[6]**

**11.** The program is installed and runs on the applications server [1]. The laptops send the user's input and receive the screen display [1], so the processing is done by the powerful server and the old laptops need little power [1]. Drawback, for example: if the server or network fails, nobody can use the program, or the server must cope with the load from many users [1]. **[4]**

**12.** Advantages: the college controls its own data and security settings [1]; can set up accounts, storage limits and spam filtering as it wishes [1]; mail between staff stays within the college network and is quick [1]. Disadvantages: needs the cost of hardware, software and skilled staff [1]; must maintain backups and security updates [1]; if the server fails, mail is lost until fixed [1]; an external provider may offer better reliability and less cost [1]. Conclusion linked to the college's size and skills [1]. Maximum 6 marks. **[6]**

**13.** The browser sends a request for the page [1]. The server looks for the page and cannot find it [1]. It sends back a response containing an error message with a status code such as 404 (not found) [1]. **[3]**

## Where marks are usually lost

- Writing "stores files" for every server type.
- Describing request and response with no sequence, or without an error response.
- Giving a percentage without dividing by the total capacity.
- Rounding up the number of virtual servers when the result must be rounded down.
- Not linking the choice of server to the needs in the scenario.
