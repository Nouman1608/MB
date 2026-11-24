---
title: "Cambridge IGCSE Computer Science (0478): Types and methods of data transmission -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 2: Data transmission"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 2.1
syllabusTopics:
  - qualification: "igcse"
    topic: "data-transmission"
    subtopic: "types-and-methods-of-data-transmission-0478"
description: "Twelve original Cambridge IGCSE Computer Science 0478 questions on packets, packet switching, transmission methods and USB, with full mark-scheme answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

These questions cover **2.1 Types and methods of data transmission** in Topic 2, Data transmission, of the Cambridge
IGCSE Computer Science 0478 syllabus for 2026 to 2028.

Related: [Types and methods of data transmission study guide](/resources/cambridge-igcse-computer-science-0478-types-and-methods-of-data-transmission/)
and [revision notes](/resources/cambridge-igcse-computer-science-0478-types-and-methods-of-data-transmission-revision-notes/)

---

## Section A

**1.** State why data is broken down into packets before it is transmitted. **[1]**

**2.** Identify the part of a packet that contains the packet number. **[1]**

**3.** State the device that controls the route a packet takes across a network. **[1]**

**4.** Name the method of transmission in which data can travel in both directions, but not at the same time. **[1]**

**5.** State whether USB uses serial or parallel transmission. **[1]**

**6.** Define parallel data transmission. **[2]**

## Section B

**7.** A student sends a large video file to a friend across the internet.

**(a)** Describe the structure of one of the packets that make up the file. **[4]**
**(b)** Describe how packet switching is used to send the file to the friend's computer. **[5]**

**8.** Explain why serial transmission is more reliable than parallel transmission over a long distance. **[2]**

**9.** For each scenario, identify the most suitable direction of transmission (simplex, half-duplex or full-duplex)
and give a reason.

**(a)** A temperature sensor in a greenhouse sends readings to a monitoring computer. **[2]**
**(b)** Two security guards use radios on which only one person can talk at once. **[2]**
**(c)** A customer makes an online video call to a bank. **[2]**

**10.** A school connects two buildings 300 m apart with a network cable that must carry data both ways at the same
time. Identify the most suitable transmission methods and justify your choice. **[4]**

**11.** A user connects a new webcam to a laptop using a USB cable.

**(a)** Describe what happens when the webcam is first plugged in. **[2]**
**(b)** Give two benefits of using USB to connect the webcam. **[2]**
**(c)** Give one drawback of using USB. **[1]**

**12.** Packet switching allows packets to take different routes.

**(a)** Give one benefit of packets being able to take different routes. **[1]**
**(b)** Give one drawback that results from packets taking different routes. **[1]**

---

## Answers

**1.** Any one from: small packets can be sent independently, so they can take different routes; only a lost or damaged packet needs to be resent, not the whole file [1]

**2.** The header [1]

**3.** A router [1]

**4.** Half-duplex [1]

**5.** Serial [1]

**6.** Several bits are sent at the same time [1]; down several wires (or channels) [1]

**7. (a)** Header [1]; containing the destination address, the packet number and the originator's address [1]; payload, containing part of the video data [1]; trailer, marking the end of the packet (and holding error-checking data) [1]
**(b)** The file is broken down into packets [1]; each packet is sent independently [1]; routers control the route each packet takes, so packets may take different routes [1]; packets may arrive at the friend's computer out of order [1]; once the last packet arrives, they are reordered using the packet numbers [1] **[9]**
*Examiner insight:* In (b), the marks are for a sequence; a correct list of facts in a muddled order can still score, but missing "reordered using packet numbers" loses the last mark.

**8.** In parallel transmission, bits sent at the same time on different wires can arrive at slightly different times (skew) [1]; serial transmission sends bits one at a time down one wire, so they arrive in order and are less likely to be corrupted over a long distance [1]

**9. (a)** Simplex [1]; data only needs to travel from the sensor to the computer [1]
**(b)** Half-duplex [1]; data travels both ways, but only one guard can transmit at a time [1]
**(c)** Full-duplex [1]; both people need to send and receive sound and video at the same time [1] **[6]**

**10.** Serial [1]; the distance is long, so serial avoids skew and errors, and one wire is cheaper than several over 300 m [1]; full-duplex [1]; data must travel in both directions at the same time [1]
*Examiner insight:* Naming the methods without reasons linked to the scenario (distance, two-way at once) earns only half the marks.

**11. (a)** The computer detects the webcam automatically [1]; the correct driver is loaded or installed so it can be used [1]
**(b)** Any two from: USB is a standard supported by most computers [1]; it is detected automatically [1]; it can supply power to the webcam through the same cable [1]; the connector cannot be plugged in the wrong way [1]
**(c)** Any one from: cable length is limited; transmission rate is lower than some other interfaces [1] **[5]**

**12. (a)** Any one from: packets can avoid busy or broken parts of the network, so data still arrives [1]
**(b)** Packets may arrive out of order, so they must be reordered (or some may be delayed) [1] **[2]**

---

## Where marks are usually lost

- Header contents described only as "the address".
- Saying the router reorders the packets.
- Giving the direction method without the serial or parallel method when both are asked for.
- Choosing parallel for a long-distance link.
- Writing "it is faster" for USB as a benefit; benefits must be specific.
- Leaving reasons unlinked to the scenario in "justify" questions.

## More on this topic

- [Types and methods of data transmission study guide](/resources/cambridge-igcse-computer-science-0478-types-and-methods-of-data-transmission/)
- [Types and methods of data transmission revision notes](/resources/cambridge-igcse-computer-science-0478-types-and-methods-of-data-transmission-revision-notes/)
- [Data Transmission practice questions](/resources/igcse-computer-science-data-transmission-practice/) for the whole topic

## Official syllabus

Cambridge IGCSE Computer Science 0478 syllabus for 2026, 2027 and 2028 (Cambridge International) -- Topic 2 Data
transmission, 2.1 Types and methods of data transmission.
