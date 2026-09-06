---
title: "IGCSE ICT: Networks and the Effects of Using Them — Revision Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["igcse"]
topic: "Networks and the effects of using them"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 4.5
syllabusTopics:
  - qualification: "igcse"
    topic: "networks-and-the-effects-of-using-them"
    subtopic: "networks-0417"
  - qualification: "igcse"
    topic: "networks-and-the-effects-of-using-them"
    subtopic: "network-issues-and-communication-0417"
description: "Condensed recall notes spanning both 4.1 Networks and 4.2 Network issues and communication, for Cambridge IGCSE ICT 0417, Topic 4."
author: "marlbridge-academic-team"
publishedDate: 2026-09-06
featured: false
---

Condensed for the final weeks, spanning both halves of Topic 4. For the full explanation, use the
[Networks study guide](/resources/igcse-ict-networks/) (4.1) and the
[Network Issues and Communication study guide](/resources/igcse-ict-network-issues-and-communication/) (4.2).

## 4.1 The router — three named functions

Connects networks/devices to the internet; stores computer addresses; routes data packets toward their destination. Learn all three separately — mark schemes credit each one.

## 4.1 Other network devices

**NIC** — lets a device connect to a network at all. **Hub** — broadcasts to every connected device regardless of intended recipient (simple, inefficient). **Switch** — learns which device is on which port, sends data only to the intended recipient (efficient). **Bridge** — joins two network segments into one.

## 4.1 Wi-fi vs Bluetooth

**Wi-fi:** connects a device to a wider network/internet, larger range. **Bluetooth:** connects two devices directly to each other, short range, no network infrastructure needed (headphones, wireless keyboard).

## 4.1 Cloud computing

Advantages: accessible from any internet-connected device; reduced reliance on local storage hardware. Disadvantages: depends on a working internet connection; relies on a third-party provider for security and availability.

## 4.1 Extranet, intranet, internet

**Intranet** — private, internal to one organisation only. **Extranet** — private network extended for controlled external access (suppliers, customers). **Internet** — global, publicly accessible. Same underlying technology throughout; what differs is *who is permitted to access it*.

## 4.1 LAN, WLAN, WAN

**LAN** — small area (one building/site), cabled. **WLAN** — wireless equivalent of a LAN, same small area. **WAN** — much larger area, connects multiple LANs across sites/cities/countries (the internet is the largest WAN).

## 4.2 Passwords

Strong = long + mixed character types (upper/lower/number/symbol) + avoids personal info. Weak = short, one character type, or guessable (name/birthdate). Regular changes limit how long a compromised password stays useful. Avoid interception with up-to-date anti-spyware.

## 4.2 Authentication beyond passwords

**Zero login** — passive signals (typing pattern, location, device recognition), no active entry. **Biometric** — fingerprint, iris, facial recognition. **Magnetic stripe / smart card** — data on a physical card, read by a reader. **Physical token** — separate hardware (keyfob generating a one-time code). **Electronic token** — equivalent code via an app.

Framework: "something you know" (password) + "something you have" (token/card) + "something you are" (biometric) = stronger multi-factor authentication.

## 4.2 Anti-malware

Removes/quarantines viruses; scans storage media used to transfer data; scans downloads. Must be **kept up to date** — it relies on a database of known malware signatures, so it cannot recognise malware discovered after its last update.

## 4.2 Electronic conferencing

**Video-conferencing** — camera, microphone, speaker, software, fast connection; suits seeing participants adding value (interview, negotiation). **Audio-conferencing** — microphone + speaker only, lower bandwidth; suits no visual need, cost/reliability matters more. **Web-conferencing** — adds document/screen sharing to audio/video; suits collaborative sessions needing shared live material.

## Worked example: matching the tool to the need

A company holds a weekly meeting reviewing a shared spreadsheet with staff across three countries, and a daily supplier catch-up needing only a spoken update. Weekly meeting → **web-conferencing** (needs to see/discuss the same live document — audio/video alone can't provide this). Daily catch-up → **audio-conferencing** (only a spoken update needed; video/web-conferencing would be unnecessary cost and complexity).


## Worked example: classifying a described network

A school connects its three campuses across a city, lets students access shared coursework wirelessly within each campus building, and allows a small number of approved textbook suppliers to upload new resources. Within one campus building, wireless student access is a **WLAN**. Connecting the three campuses across the city is a **WAN** (multiple sites, larger geographic area). The supplier upload system is the clearest case for an **extranet** — controlled, limited external access to specific resources, not a fully public internet system or a fully closed internal-only intranet. Practising this kind of combined classification, rather than revising each term in isolation, is the best check that the distinctions are genuinely understood.

## Why 4.2 depends on 4.1

The security and communication content in 4.2 exists specifically *because* data travels across the shared network paths described in 4.1 — LANs, WLANs, WANs, and the internet — where interception is possible. Electronic conferencing likewise depends on having a network connection (and, for video specifically, a sufficiently fast one) already in place. Treat 4.1 and 4.2 as one connected picture — "what can go wrong on the network, and how communication tools use that same network" — rather than two disconnected topic lists.

## Exam traps

- Vague "connects to the internet" for a router instead of naming all three functions.
- Confusing hub/switch/bridge — broadcast-to-all vs directed-to-recipient vs joining-two-segments.
- Extranet vs intranet — extranet allows *controlled external* access; intranet is internal-only.
- Naming an authentication method without placing it in the know/have/are framework.
- Forgetting anti-malware's update-dependency as a specific, statable fact.
- Choosing video/web-conferencing by default when a scenario only needs audio — match hardware to actual need.

## Self-test

1. Name the router's three functions.
2. Distinguish a hub from a switch.
3. What is the key difference between an intranet and an extranet?
4. Give the "three somethings" framework for authentication.
5. Why must anti-malware software be kept up to date?
6. A company needs staff in five offices to jointly edit a shared document while talking. Which conferencing type, and why?

**Answers:** 1. Connecting networks/devices to the internet; storing computer addresses; routing data packets. 2. A hub broadcasts to every connected device; a switch learns which device is on which port and sends data only to the intended recipient. 3. An intranet is accessible only within one organisation; an extranet extends controlled access to specific external parties while still restricting general public access. 4. Something you know (password), something you have (token/card), something you are (biometric). 5. It relies on a database of known malware signatures, so it cannot recognise malware discovered after its last update. 6. Web-conferencing — staff need to view and edit the same live document together, which audio- or video-conferencing alone cannot provide.
