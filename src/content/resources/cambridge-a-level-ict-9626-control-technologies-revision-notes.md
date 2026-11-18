---
title: "Cambridge A Level Information Technology (9626): Control technologies -- Revision Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["a-levels"]
topic: "Topic 3 – Monitoring and control"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 3.2
syllabusTopics:
  - qualification: "a-level"
    topic: "monitoring-and-control"
    subtopic: "control-technologies"
description: "Revision notes for Cambridge 9626 IT section 3.2: control sensors, actuator types, the named control systems, trade-offs, algorithm patterns and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense **section 3.2 Control technologies** (Topic 3 Monitoring and control) of the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. AS Level content, examined in Paper 1 Theory. Worked algorithms and a trace table are in the [control technologies study guide](/resources/cambridge-a-level-ict-9626-control-technologies/); test yourself with the [control technologies practice questions](/resources/cambridge-a-level-ict-9626-control-technologies-practice/).

## The control loop

Sensor → analogue-to-digital converter → microprocessor compares with preset value → signal to actuator → physical action → sensor reads again (**feedback**, so a **closed loop**).

## Key terms

| Term | Meaning |
|---|---|
| Control system | A system that uses sensor readings to act automatically on its environment |
| Microprocessor | The processor that compares readings with preset values and decides on action |
| Preset value | A stored target or limit, such as 21 °C |
| Actuator | A device that turns a control signal into movement or another physical action |
| Feedback | Output affecting the next input, so the system responds to its own action |
| Closed loop | A system that keeps reading sensors after acting |
| Induction loop | Wire loop in a road surface that detects a large metal object above it |
| Ultrasonic sensor | Measures distance from the echo time of a high-frequency sound pulse |
| WSAN | Wireless Sensor and Actuator Network: wireless nodes that sense and act without cabling |
| Smart motorway | Motorway where sensors measure traffic and the system sets variable speed limits and closes lanes |

## Sensor uses the syllabus names

- **Touch:** fluid-level detection, such as cooling water in a nuclear power plant.
- **Temperature:** greenhouses, heating, air conditioning.
- **Light level:** lighting, greenhouse lamps and blinds.
- **Light source:** car park barriers, where a car breaks a beam.
- **Moisture:** soil water content.
- **pH:** soil acidity.
- **Gas:** greenhouse carbon dioxide, ventilation, safety.
- **Infrared:** body heat in burglar alarms.
- **(Electro)magnetic field:** door contacts, vehicle detection.
- **Ultrasonic:** distance and parking sensors.
- **Induction loops:** car parks, barriers and traffic lights.
- **Sound:** breaking glass in burglar alarms.
- **Proximity:** switching off a smartphone screen when held to the ear.

## Actuators: the nine types

| Type | Key idea | Example |
|---|---|---|
| Linear | Straight-line movement | Door bolt |
| Rotary | Turning movement | Barrier arm, valve, fan |
| Soft | Flexible materials bend or grip | Fruit-picking gripper |
| Hydraulic | Pressurised liquid; very large force | Rising bollards |
| Pneumatic | Compressed air; fast | Bus doors |
| Electric | Motors and solenoids; precise | Motorised blinds |
| Thermal | Heat-driven expansion | Radiator valves |
| Magnetic | Electromagnet holds or releases | Door locks |
| Mechanic | Gears, screws and levers convert motion | Screw drive |

## Systems: one line each

- **Greenhouse:** temperature → heater and vents; moisture → water valves; light → lamps and blinds.
- **Central heating:** room temperature vs setting → boiler and pump.
- **Air conditioning:** temperature and humidity → compressor and fans.
- **Burglar alarm:** infrared, sound and door sensors → entry delay → siren or alert.
- **Traffic and pedestrian flow:** loops and cameras → signals and signs; smart motorways set variable limits and close lanes.
- **Car park barrier:** loop detects car → barrier rises → beam or loop confirms passage → barrier lowers; counter tracks spaces.
- **Traffic lights:** loops and push buttons → change sequence and timing.
- **WSAN:** wireless sensing and acting across large areas without cables.
- **Smart home:** sensors plus app or voice control of heating, lights, locks and appliances.

## Advantages and disadvantages

- **Advantages:** fast, continuous response; precise limits; frees staff; fewer people in dangerous places; energy saving.
- **Disadvantages:** installation and maintenance cost; faults cause wrong actions; stops in power or network failure; loss of staff skills; hacking risk for connected systems.

## Algorithm patterns

**Two thresholds (avoids constant switching):**

```
IF Temp > 26 THEN open vent
ELSE IF Temp < 22 THEN close vent
```

**Counter:** set before the loop (`Spaces ← 50`), subtract on entry, add on exit, check `Spaces > 0` before raising the barrier.

**Always:** read sensors inside the loop; include an end condition such as `UNTIL Power = 0`.

## Exam traps

- No feedback step in a system description.
- "A sensor" with no type.
- Hydraulic (liquid) and pneumatic (air) swapped.
- Reading the sensor once, before the loop.
- Forgetting the actuator: the algorithm decides but never sends a signal.
- Confusing a control system with a monitoring system.

## Self-test

1. What makes a control system a closed loop?
2. Which sensor detects a car above a buried wire loop?
3. Why does a smartphone use a proximity sensor?
4. Which sensor type suits detecting an intruder's body heat?
5. How does an ultrasonic sensor measure distance?
6. Distinguish hydraulic and pneumatic actuators.
7. Which actuator type uses heat to produce movement?
8. Give two sensors and two actuators used in a computer-controlled greenhouse.
9. What is a Wireless Sensor and Actuator Network?
10. Why use two thresholds rather than one in a greenhouse vent algorithm?
11. Give one advantage and one disadvantage of smart home control.
12. In the barrier algorithm, Spaces is 0 and a car arrives. What happens?

### Answers

1. It keeps reading the sensors after acting, so it responds to the effects of its own actions.
2. An induction loop.
3. To switch off the screen when the phone is held to the ear, saving power and preventing accidental touches.
4. Infrared.
5. It sends a high-frequency sound pulse and times the echo; a longer time means a greater distance.
6. Hydraulic actuators use pressurised liquid and give large forces; pneumatic actuators use compressed air and are fast.
7. Thermal.
8. Sensors: temperature, moisture (or light, gas). Actuators: vent motor, water valve (or heater, lamps).
9. A network of wireless nodes that sense conditions and act on them without cabling.
10. So the vent does not open and close repeatedly when the temperature hovers around one value.
11. Advantage: remote control and energy saving. Disadvantage: hacking risk (or cost, network failure).
12. The barrier stays down and "FULL" is displayed.
