---
title: "Cambridge A Level Information Technology (9626): Wireless technology"
seoTitle: "A Level IT 9626 Wireless Technology: Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Topic 14 – Communications technology"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 14.7
syllabusTopics:
  - qualification: "a-level"
    topic: "communications-technology"
  - qualification: "a-level"
    topic: "communications-technology"
    subtopic: "wireless-technology"
description: "Cambridge 9626 IT section 14.7 study guide: Wi-Fi, Bluetooth, infrared, microwave, radio and NFC, how they operate, wireless power, uses and security."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide teaches **section 14.7 Wireless technology** of Topic 14 Communications technology in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is A Level content, examined in Paper 3 Advanced Theory. The [communications technology revision notes](/resources/a-level-cambridge-ict-communications-technology-revision-notes/) summarise the whole topic; this page goes deeper on wireless methods. Use it with the [wireless technology revision notes](/resources/cambridge-a-level-ict-9626-wireless-technology-revision-notes/) and the [wireless technology practice questions](/resources/cambridge-a-level-ict-9626-wireless-technology-practice/).

## What section 14.7 covers

| Syllabus strand | What you must be able to do |
|---|---|
| Methods | Describe Wi-Fi, Bluetooth, infrared, microwave, radio and NFC |
| Operation | Explain methods of data transfer, wireless protocols and wireless power transfer |
| Uses | Data exchange, mobile communications and the Internet of Things |
| Security | Explain the issues, methods of prevention and wireless security protocols such as WEP and WPA |
| Evaluation | Give advantages and disadvantages of each method |

**Wireless transmission** sends data through the air (or space) using **electromagnetic waves** rather than cables. Different parts of the spectrum have different range, speed and ability to pass through walls. Lower frequencies travel further and pass through obstacles better. Higher frequencies carry more data but have shorter range.

## Methods of wireless transmission

### Wi-Fi

Wi-Fi connects devices to a local network through a **wireless access point** using radio waves, normally in the 2.4 GHz and 5 GHz bands. It follows the IEEE 802.11 family of standards. Range is typically tens of metres indoors. Speed is shared between all devices on the access point, and falls with distance and obstacles.

- *Advantages:* no cables; high speed; many devices can join; widely available.
- *Disadvantages:* shared bandwidth; interference from other networks and appliances; limited range; less secure than cable if poorly configured.

### Bluetooth

A short-range radio method (around 10 metres for common devices) in the 2.4 GHz band. It uses **frequency hopping**, switching rapidly between many channels to avoid interference. Devices **pair** to form a small network (piconet), with one master and up to seven active devices.

- *Advantages:* low power; cheap; easy pairing; good for headphones, keyboards, speakers and car systems.
- *Disadvantages:* short range; slower than Wi-Fi; risk of unauthorised pairing or eavesdropping if left discoverable.

### Infrared

Uses invisible light just below the visible spectrum. It needs a **line of sight** between sender and receiver and cannot pass through walls. Used in television remote controls and some short-range data links.

- *Advantages:* cheap; low power; no radio interference; hard to intercept outside the room.
- *Disadvantages:* very short range; line of sight; slow; can be disturbed by strong sunlight.

### Microwave

High-frequency radio waves that travel in a straight line and are used for **point-to-point** links between towers or dishes, and for satellite links. They carry a large amount of data. Towers are spaced up to a few tens of kilometres apart, because of the curve of the Earth, and must have a clear path.

- *Advantages:* high bandwidth; no cable to lay across difficult ground; good for linking sites.
- *Disadvantages:* needs line of sight; affected by heavy rain and obstacles; towers and dishes cost money; can be intercepted if not encrypted.

### Radio

Radio waves at lower frequencies travel long distances and pass through walls and buildings. Used for broadcast radio and television, walkie-talkies, mobile phone networks and many wireless networks.

- *Advantages:* long range; passes through obstacles; reaches many receivers.
- *Disadvantages:* lower data capacity at low frequencies; limited and licensed spectrum; interference; can be intercepted.

### Near Field Communication (NFC)

A very short-range method (a few centimetres) that uses magnetic induction at 13.56 MHz. When two devices are held close together, a small current is induced in the passive one, so a tag may need **no battery**. Used for contactless payment, ticketing, door entry and quick pairing of other devices.

- *Advantages:* quick and simple; very short range makes interception hard; low power.
- *Disadvantages:* very low data rate; works only within centimetres; can be abused by an attacker holding a reader close to a device.

## How wireless transmission operates

### Methods of data transfer

Data is **modulated** onto a carrier wave: the wave's amplitude, frequency or phase is changed to represent bits. The receiver demodulates it. Devices that share a medium must avoid sending at once. Wi-Fi listens before sending and waits (carrier sense with collision avoidance). Bluetooth uses time slots and hopping. Frequency ranges are divided into **channels**, so that nearby networks can use different ones.

### Wireless protocols

Protocols define how devices connect and exchange data: IEEE 802.11 for Wi-Fi, the Bluetooth specification, and the NFC standards. Higher up, the same internet protocols (TCP/IP) are used as on wired networks.

### Wireless power transfer

Power can be sent without a cable.

- **Inductive charging**: a coil in a charging pad produces a changing magnetic field, which induces a current in a coil in the device. Used for phone and toothbrush chargers. It works over a few millimetres to centimetres and is less efficient than a cable.
- **Resonant charging**: both coils are tuned to the same frequency, so power can be sent over greater distances (centimetres to metres), for example to charge a device placed near a charging surface.
- **Energy harvesting from radio waves**: very small amounts of power are collected from radio signals to run tiny sensors and tags.

*Advantages:* no connector to wear out; sealed devices; convenient. *Disadvantages:* wasted energy as heat; slower charging; the device must be correctly placed.

**Worked example 1: time to send a file.** A 5 MB photograph is sent by Bluetooth at an effective 2 Mbit/s and by Wi-Fi at an effective 150 Mbit/s. 5 MB = 5 × 8 = 40 megabits.

- Bluetooth: 40 ÷ 2 = **20 seconds**.
- Wi-Fi: 40 ÷ 150 = **0.27 seconds**.

This is why Bluetooth suits headphones and keyboards but not large file transfers.

## Uses

- **Data exchange:** transferring photographs between phones, printing from a laptop, sharing files.
- **Mobile communications:** phone calls and data over cellular radio, and links between towers using microwave.
- **Internet of Things (IoT):** sensors, thermostats and appliances use Wi-Fi, Bluetooth or low power radio to report data and be controlled. Low power and short range are important because the devices are small and may run on batteries for years.

## Security issues

| Issue | Description |
|---|---|
| Eavesdropping (interception) | Radio signals can be received by anyone in range, so data can be read |
| Unauthorised access | An attacker joins the network and uses its bandwidth or reaches its files |
| Rogue (fake) access point | A hotspot that looks genuine but captures users' data |
| Brute-force password guessing | Trying large numbers of passwords against a captured handshake |
| War driving | Searching for open wireless networks by moving through an area |
| Bluetooth attacks | Connecting to or reading from a discoverable device |

### Methods of prevention

- **Encryption** with a modern security protocol.
- A **strong, long passphrase**, changed from the default.
- Changing the default **administrator password** on the router.
- **MAC address filtering** (allowing only listed devices), which helps but is weak since addresses can be copied.
- **Turning off network name (SSID) broadcast**, which gives little real protection.
- Keeping **firmware updated**; turning off features such as WPS that are weak.
- Setting Bluetooth to **non-discoverable** when not pairing.
- Using a **VPN** on public hotspots, and a firewall.

### Wireless security protocols

| Protocol | Notes |
|---|---|
| WEP (Wired Equivalent Privacy) | The first standard; has serious flaws and can be broken in minutes; should not be used |
| WPA (Wi-Fi Protected Access) | Introduced as an interim fix for WEP, with better key management; now considered weak |
| WPA2 | Uses strong AES encryption; secure with a good passphrase; widely used |
| WPA3 | Newest; stronger protection against password-guessing and better protection on public networks |

**Worked example 2: why long passphrases matter.** Suppose an attacker can test 1,000,000,000 (10⁹) guesses per second against a captured handshake.

- An 8-character password using 62 symbols (upper case, lower case and digits): 62⁸ = 218,340,105,584,896 combinations. Time to try all = 218,340,105,584,896 ÷ 10⁹ ≈ 218,340 seconds, about **2.5 days**.
- A 12-character password using the same 62 symbols: 62¹² ≈ 3.2 × 10²¹ combinations, taking about **102,000 years**.
- An 8-character password using only 26 lower-case letters: 26⁸ = 208,827,064,576, which takes about **209 seconds**, around 3.5 minutes.

Length and variety greatly increase the work needed. A passphrase of random words is both long and memorable.

## Summary of advantages and disadvantages

| Method | Range | Speed | Main advantage | Main disadvantage |
|---|---|---|---|---|
| Wi-Fi | Tens of metres | High | Fast local network without cables | Shared bandwidth; security needs care |
| Bluetooth | About 10 m | Low to moderate | Low power, simple pairing | Short range |
| Infrared | Very short; line of sight | Low | Cheap; no interference | Blocked by objects |
| Microwave | Tens of km, line of sight | Very high | High bandwidth links | Needs clear path |
| Radio | Long | Lower | Long range, passes through walls | Interference; easy to intercept |
| NFC | A few cm | Very low | Fast tap; hard to intercept | Tiny range |

## Common mistakes

- Saying "wireless is faster than cable". Wired links are usually faster and more reliable.
- Mixing up Wi-Fi (network access) with the internet.
- Describing NFC as long range, or Bluetooth as high speed.
- Saying hiding the network name or filtering MAC addresses makes a network secure.
- Listing WEP as a good protection.
- Forgetting that infrared and microwave need a line of sight.

## Exam technique

- **Describe** each method with range, frequency type or technology, and a typical use.
- **Compare** two methods using range, speed, power, security and cost.
- **Security**: name the threat, the method of prevention and why it works.
- **Choosing a method**: link the scenario's distance, data volume and power supply to the method.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 14 Communications technology, section 14.7 Wireless technology.
