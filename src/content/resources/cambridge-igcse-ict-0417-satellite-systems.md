---
title: "Cambridge IGCSE ICT (0417): Satellite systems"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 6: ICT applications"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 6.11
syllabusTopics:
  - qualification: "igcse"
    topic: "ict-applications"
    subtopic: "satellite-systems-0417"
description: "GPS, satellite navigation, GIS, satellite television and satellite phones explained, with uses, advantages and limits, for Cambridge IGCSE ICT 0417 6.11."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Section 6.11 of Cambridge IGCSE ICT 0417 asks for the "characteristics, uses, advantages and disadvantages of satellite systems including Global Positioning Systems (GPS), satellite navigation, Geographic Information Systems (GIS), media communication systems (satellite television, satellite phone)". Paper 1 (Theory) questions usually pick one of these and set it in a context, such as a delivery company or a remote village, so you need to know how each works well enough to say *why* it has its advantages and disadvantages.

The broader [ICT applications study guide](/resources/igcse-ict-applications-systems/) gives a one-paragraph summary of this section. This page goes deeper. For quick recall use the [satellite systems revision notes](/resources/cambridge-igcse-ict-0417-satellite-systems-revision-notes/), and test yourself with the [satellite systems practice questions](/resources/cambridge-igcse-ict-0417-satellite-systems-practice/).

## Two kinds of orbit, two kinds of job

The systems in this section rely on satellites in different orbits, and the orbit explains many of their characteristics.

- **GPS satellites** orbit at roughly 20 200 km above the Earth and are not fixed over one place. Several are always above the horizon from any point on the surface, so a receiver can usually see enough of them at once.
- **Satellites for television broadcasting** are usually **geostationary**: they orbit about 35 786 km above the equator, taking exactly one day to go round, so they appear to stay still in the sky. A dish can therefore be pointed at one spot and left there.

You will not be asked for orbit heights, but they explain why a dish faces one direction and why satellite calls have a short delay.

## Global Positioning System (GPS)

### How it works

GPS is a network of satellites, each carrying a very accurate clock. Every satellite continuously broadcasts a signal containing its position and the exact time the signal was sent. A GPS receiver (in a phone, car, watch or tracker) does the rest:

1. It receives signals from several satellites.
2. It compares the time each signal was sent with the time it arrived. The difference, multiplied by the speed of the radio signal, gives the distance to that satellite.
3. Knowing its distance from at least three satellites, it calculates the one point where those distances meet. A fourth satellite is normally used to correct the receiver's own, less accurate clock and to give height as well as position.

The receiver only *receives*; it sends nothing to the satellites. That is why GPS works without a phone signal, and why a tracker needs a mobile network to report its position.

### Worked example: why timing matters

Radio signals travel at about 300 000 km per second. A signal from a satellite 20 200 km away takes 20 200 ÷ 300 000 ≈ 0.067 seconds to arrive. If the receiver's timing were wrong by just one millionth of a second, the distance error would be 300 000 km/s × 0.000 001 s = 0.3 km, which is 300 metres. This is why the satellites carry very accurate clocks, and why the fourth satellite is used to correct the receiver's clock. (These figures are approximate and are for illustration.)

### Uses of GPS

- Finding the position of a person or vehicle, for example a hiker, a ship at sea or an aircraft.
- Tracking: a logistics company sees where each lorry is; parents track a child's phone; a farmer tracks livestock collars.
- Providing position data to other systems, including satellite navigation and GIS.

## Satellite navigation

Satellite navigation (sat nav) is **GPS combined with stored digital maps and route-finding software**. GPS supplies the current position; the software places that position on the map, works out a route to the destination and gives directions on screen and by voice. Most systems can also recalculate the route when a turn is missed, estimate the arrival time, show points of interest such as fuel stations, receive live traffic information and warn of speed limits.

### Advantages and disadvantages for a driver

| Advantages | Disadvantages |
|---|---|
| The driver does not need to read a paper map while driving, so attention stays on the road | Stored maps may be out of date, so new roads or closures are missing |
| Spoken directions mean the driver can keep looking ahead | Signal can be lost in tunnels, among tall buildings or under dense trees |
| Traffic updates and rerouting save time and fuel | It may send vehicles on routes unsuitable for them, such as narrow lanes for a large lorry |
| Estimated arrival time helps delivery planning | Over-reliance: drivers may follow directions without thinking or lose map-reading skills |
| Easy to find services such as the nearest fuel station | Entering a destination while moving is a distraction |

Link each point to the user: "saves the delivery company fuel because the route avoids hold-ups" beats "saves fuel".

## Geographic Information Systems (GIS)

A GIS is a computer system that **captures, stores, analyses and displays geographic data**: information linked to a location. Its key characteristic is **layers**. Each layer holds one type of data about the same area, for example roads, rivers, buildings, population, soil type or flood risk, and the user can switch layers on and off, place them on top of each other and run queries across them.

A GIS is not the same as GPS. GPS finds *where something is*; a GIS answers *questions about places*, such as "which houses lie within 200 metres of the river and are on land below a certain height?". A GIS may use GPS data as one of its inputs.

### Uses of GIS

- **Emergency services**: finding the nearest available ambulance or fire engine to an incident and showing access routes.
- **Planning**: a council deciding where to build a school by combining population, transport and land-use layers.
- **Environment**: mapping flood risk, tracking deforestation or recording where a protected species is found.
- **Utilities**: water, gas and telecoms companies recording where pipes and cables run, so engineers dig in the right place.

### Advantages and disadvantages

Advantages: many sets of data can be combined and compared on one map; patterns are easy to see visually; maps can be zoomed and queried, and updated far more easily than paper maps; decisions can be modelled before money is spent.

Disadvantages: the software and the data can be expensive; staff need training to use it well; large data sets need a lot of storage and processing power; the output is only as accurate and up to date as the data put into each layer; combining layers from different sources can raise privacy concerns when data about people is included.

## Media communication systems

### Satellite television

A broadcaster sends the programme signal up to a satellite (the **uplink**). The satellite amplifies the signal and sends it back down over a very wide area (the **downlink**). Each home receives it with a **dish** pointed at the satellite and a receiver box that decodes the channels, many of which are encrypted so that only subscribers can watch.

- **Advantages**: one satellite can cover a whole region, including remote and rural places with no cable network; many channels at high quality.
- **Disadvantages**: the dish needs a clear line of sight to the satellite, so buildings or trees can block it; heavy rain or snow can weaken the signal and cause the picture to break up; there is a short delay because of the distance travelled; the dish and receiver must be installed and correctly aligned.

### Satellite phones

A satellite phone connects **directly to a satellite**, not to a mobile phone mast, so it works almost anywhere on Earth with a view of the sky.

- **Uses**: ships at sea, aircraft, expeditions in deserts, mountains and polar regions, journalists in remote areas, and emergency and aid workers after a disaster has damaged ground networks.
- **Advantages**: coverage where there is no mobile network; independent of local infrastructure that may be destroyed by floods or earthquakes.
- **Disadvantages**: handsets and calls are much more expensive than mobile phones; they usually need to be outdoors with a clear view of the sky, so they often do not work inside buildings; there can be a noticeable delay in conversation, especially through geostationary satellites; data speeds are lower.

### Worked example: the delay on a live link

A news reporter in a remote region sends live video via a geostationary satellite. The signal travels up about 35 786 km and back down about 35 786 km: about 71 572 km in total. At 300 000 km per second this takes about 71 572 ÷ 300 000 ≈ 0.24 seconds, before any processing time. That is why the studio presenter and the reporter sometimes talk over each other. (Approximate figures, for illustration.)

## Annotated model answer

*Question: a charity sends engineers to repair water pumps in villages far from towns. Explain two advantages to the charity of giving each engineer a satellite phone.*

"The villages have no mobile phone masts, so an ordinary mobile would not work, but a satellite phone connects straight to a satellite and can be used from the village **[advantage, linked to the remote location]**. This means the engineer can call the office to order a spare part the same day, so the pump is repaired sooner **[consequence for the charity]**. Also, if there is an accident, the engineer can call for help immediately, which improves the engineers' safety **[second advantage with a reason]**."

Feature, link to the scenario, consequence: that is what "explain" requires.

## Common mistakes

- Writing that GPS satellites "track" the phone. The receiver works out its own position; the satellites only broadcast.
- Treating GPS, sat nav and GIS as the same thing. GPS gives position; sat nav adds maps and routes; GIS analyses layers of geographic data.
- Giving "expensive" as a disadvantage without saying what is expensive: the handset, the calls, the GIS software or the data.
- Listing advantages without linking them to the person or organisation in the question.

## Exam technique

- **State** or **give**: a short accurate point ("signal loss in tunnels").
- **Describe**: what the system does and how, for example the layers in a GIS.
- **Explain**: the point plus a reason or consequence, using "so" or "because".
- **Evaluate** or **discuss**: advantages *and* disadvantages for the named user, then a judgement, for example whether a lorry firm should rely only on sat nav.

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 6 "ICT applications", section 6.11 "Satellite systems".
