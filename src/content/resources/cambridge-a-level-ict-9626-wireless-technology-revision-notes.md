---
title: "Cambridge A Level Information Technology (9626): Wireless technology -- Revision Notes"
seoTitle: "A Level IT 9626 Wireless Technology: Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge 9626 IT section 14.7: wireless methods, operation, wireless power, uses, security protocols and a twelve-question self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes condense **section 14.7 Wireless technology** (Topic 14 Communications technology) of the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. A Level content, examined in Paper 3 Advanced Theory. Full explanations and worked examples are in the [wireless technology study guide](/resources/cambridge-a-level-ict-9626-wireless-technology/); test yourself with the [wireless technology practice questions](/resources/cambridge-a-level-ict-9626-wireless-technology-practice/).

## The five strands

1. Methods: Wi-Fi, Bluetooth, infrared, microwave, radio, NFC.
2. Operation: data transfer, wireless protocols, wireless power transfer.
3. Uses: data exchange, mobile communications, Internet of Things.
4. Security issues, prevention and security protocols (WEP, WPA and variants).
5. Advantages and disadvantages of each method.

## The six methods

| Method | Range | Key facts | Use |
|---|---|---|---|
| Wi-Fi | Tens of metres | Radio via access point, 2.4 and 5 GHz, 802.11 standards, shared bandwidth | Local networks, internet access |
| Bluetooth | About 10 m | 2.4 GHz, frequency hopping, pairing, low power | Headphones, keyboards, speakers |
| Infrared | Very short | Light, line of sight, cannot pass walls | Remote controls |
| Microwave | Tens of km | Straight line, point-to-point, high bandwidth, needs clear path | Tower links, satellite |
| Radio | Long | Passes walls, broadcast to many | Radio and television, mobile phones, walkie-talkies |
| NFC | A few cm | Magnetic induction, 13.56 MHz, tags need no battery | Contactless payment, tickets, quick pairing |

**Rule of thumb:** lower frequency means longer range and better passage through walls; higher frequency means more data but shorter range.

## Operation

- **Modulation:** data is carried by changing the amplitude, frequency or phase of a carrier wave; the receiver demodulates.
- **Channels:** the band is split into channels so nearby networks can avoid each other.
- **Avoiding collisions:** Wi-Fi listens before it sends; Bluetooth hops between channels in time slots.
- **Protocols:** IEEE 802.11 (Wi-Fi), Bluetooth specification, NFC standards; TCP/IP above them.

### Wireless power transfer

| Type | How | Distance | Example |
|---|---|---|---|
| Inductive | Changing magnetic field in one coil induces a current in another | Millimetres to centimetres | Phone charging pad |
| Resonant | Coils tuned to the same frequency | Centimetres to metres | Charging surface for several devices |
| Energy harvesting | Collects tiny power from radio waves | Within range of a transmitter | Sensors and tags |

Advantages: no connectors to wear; sealed devices. Disadvantages: energy lost as heat; slower; device must be well placed.

## Uses

| Use | Examples |
|---|---|
| Data exchange | Sharing photographs, wireless printing, file transfer |
| Mobile communications | Cellular networks, microwave links between towers |
| Internet of Things | Sensors, smart thermostats and appliances; low power and short range matter |

## Security: recall

| Threat | Prevention |
|---|---|
| Eavesdropping | Encrypt traffic (WPA2 or WPA3); use a VPN on public Wi-Fi |
| Unauthorised access | Strong passphrase; change default passwords; MAC filtering (weak) |
| Rogue access point | Check network names; use a VPN; turn off auto-connect |
| Brute-force guessing | Long random passphrase; WPA3 |
| War driving | Do not leave networks open |
| Bluetooth attack | Non-discoverable mode; refuse unknown pairing |

| Protocol | Status |
|---|---|
| WEP | Broken; do not use |
| WPA | Interim; weak |
| WPA2 | Strong AES encryption; secure with a good passphrase |
| WPA3 | Strongest; resists password-guessing |

**Weak measures:** hiding the network name and MAC filtering give little real protection, because names and addresses can be seen or copied.

## Advantages and disadvantages

| | Advantages | Disadvantages |
|---|---|---|
| Wireless in general | No cables; mobility; easy to add devices; reaches difficult places | Slower and less reliable than cable; interference; limited range; easier to intercept |
| Wi-Fi | Fast, widely available | Shared bandwidth; walls reduce speed |
| Bluetooth | Low power, simple | Short range, slow |
| Infrared | Cheap, no radio interference | Line of sight only |
| Microwave | High capacity | Needs clear path; affected by rain |
| Radio | Long range, goes through walls | Interference; spectrum limits |
| NFC | Fast, hard to intercept | Tiny range, low data rate |

## Quick examples

**File transfer time.** A 12 MB file is 96 megabits. By Bluetooth at 2 Mbit/s: 96 ÷ 2 = **48 seconds**. By Wi-Fi at 160 Mbit/s: 96 ÷ 160 = **0.6 seconds**.

**Password search.** A 6-character password from 10 digits has 10⁶ = 1,000,000 combinations. At 1,000,000 guesses per second it takes **1 second** to try all. Adding two more digits (10⁸) takes 100 seconds. Length matters most.

## Choosing a method

| Need | Method | Reason |
|---|---|---|
| Wireless headphones | Bluetooth | Low power and short range |
| Laptop at home | Wi-Fi | High speed, shared access |
| Link two sites 15 km apart with a clear view | Microwave | High bandwidth in a straight line |
| Tap to pay | NFC | Very short range, secure by proximity |
| Television remote | Infrared | Cheap, line of sight in a room |
| Town-wide broadcast | Radio | Long range, many receivers |

## Exam traps

- Saying wireless is always faster than cable.
- Giving WEP as a secure choice.
- Describing hidden SSID or MAC filtering as strong security.
- Mixing up the range of NFC and Bluetooth.
- Forgetting that microwave and infrared need line of sight.
- Describing a use but not the property of the method that suits it.

## Self-test

1. State the range of NFC.
2. Which method uses frequency hopping?
3. Why does infrared not suit communication between rooms?
4. Why do microwave links need a clear path?
5. Describe inductive charging.
6. What is WEP and why should it not be used?
7. Which wireless security protocol is the newest of those named?
8. Name two ways to protect a Wi-Fi network.
9. Why does MAC address filtering give weak protection?
10. State one use of wireless technology in the Internet of Things.
11. Give one disadvantage of wireless power transfer.
12. Calculate how long it takes to send a 4 MB file at 8 Mbit/s.

### Answers

1. A few centimetres.
2. Bluetooth.
3. It needs a line of sight and cannot pass through walls.
4. They travel in straight lines and are blocked by obstacles such as hills and buildings.
5. A coil in a charging pad makes a changing magnetic field, which induces a current in a coil in the device.
6. Wired Equivalent Privacy, an early Wi-Fi security protocol with serious flaws that can be broken quickly.
7. WPA3.
8. Any two: use WPA2 or WPA3; long passphrase; change default passwords; keep firmware updated; use a VPN.
9. MAC addresses can be seen in transmitted data and copied by an attacker.
10. Sensors reporting data to a hub, or controlling a thermostat or appliance remotely.
11. Any one: energy lost as heat; slower charging; device must be placed correctly.
12. 4 × 8 = 32 megabits; 32 ÷ 8 = 4 seconds.
