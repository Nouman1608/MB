---
title: "Cambridge A Level Information Technology (9626): Control technologies"
resourceType: "study-guides"
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
description: "Cambridge 9626 IT section 3.2 study guide: control sensors, the nine actuator types, named control systems, trade-offs and control algorithms traced."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide teaches **section 3.2 Control technologies** of Topic 3 Monitoring and control in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is AS Level content, examined in Paper 1 Theory, and the syllabus links it to writing algorithms and flowcharts (section 4.1). The [Monitoring and control overview](/resources/a-level-cambridge-ict-monitoring-and-control/) explains the sensor to processor to actuator idea; this page works through every sensor use, actuator type and system the syllabus lists, with algorithms. Use it with the [control technologies revision notes](/resources/cambridge-a-level-ict-9626-control-technologies-revision-notes/), the [control technologies practice questions](/resources/cambridge-a-level-ict-9626-control-technologies-practice/) and the [algorithms and flowcharts guide](/resources/a-level-cambridge-ict-algorithms-and-flowcharts/).

## What section 3.2 covers

| Syllabus point | Content |
|---|---|
| Sensors and their uses | Touch sensors for fluid levels; temperature; light level; light source (car park barriers); soil moisture; soil pH; gas; infrared for body heat; (electro)magnetic field; ultrasonic; induction loops; sound in burglar alarms; proximity sensors in smartphones |
| Actuators | Linear, rotary, soft, hydraulic, pneumatic, electric, thermal, magnetic, mechanic |
| Controlled systems | Greenhouses, central heating, air conditioning, burglar alarms, traffic and pedestrian flow (including smart motorways), car park barriers, traffic lights, Wireless Sensor and Actuator Networks, smart homes |
| Evaluation | Advantages and disadvantages of different control technologies |
| Algorithms | Write an algorithm or draw a flowchart for the processing in these systems |

## The control loop

1. A **sensor** measures a physical quantity.
2. An analogue-to-digital converter changes its signal into digital data.
3. The **microprocessor** compares the reading with a stored **preset value**.
4. If action is needed, it sends a signal (through a digital-to-analogue converter where the device needs one) to an **actuator**, which produces movement or another physical change.
5. The sensor keeps reading, so the system sees the effect of its own action. This **feedback** makes it a **closed loop**.

## Sensors and their uses in control

| Sensor | Use the syllabus names | What it detects |
|---|---|---|
| Touch | Detection devices measuring fluid levels, such as cooling water in a nuclear power plant | Whether liquid has reached the probe; if cooling water falls below it, pumps are started and alarms sound |
| Temperature | Greenhouses, heating, air conditioning | Air or water temperature |
| Light (level) | Lighting control, greenhouse lamps and blinds | How bright it is |
| Light (source) | Car park barrier systems | Whether a beam of light from a source is reaching the sensor; a vehicle breaking the beam is detected |
| Moisture | Soil water content in greenhouses and fields | How wet the soil is |
| pH | Soil acidity | Whether nutrients or lime need adding |
| Gas | Greenhouses, ventilation, safety systems | Levels of gases such as carbon dioxide or carbon monoxide |
| Infrared | Burglar alarms | Movement of human bodies, which emit heat |
| (Electro)magnetic field | Door and window contacts; vehicle detection | A change in a magnetic field, such as a magnet moving away when a door opens |
| Ultrasonic | Parking sensors; distance and level measurement | The time for a high-frequency sound pulse to reflect back, which gives distance |
| Induction loop | Car parks and barriers; traffic lights | A loop of wire in the road whose field changes when a large metal object, such as a car, is above it |
| Sound | Burglar alarms | Noise such as breaking glass |
| Proximity | Smartphones | The phone being held near the ear, so the screen is switched off to save power and avoid accidental touches |

## Actuators

An actuator turns a control signal into physical action.

| Type | How it acts | Example |
|---|---|---|
| Linear | Moves in a straight line | Pushing a window open; extending a door bolt |
| Rotary | Turns | Turning a valve; raising a barrier arm on a pivot; spinning a fan |
| Soft | Made of flexible materials that bend or squeeze | Grippers that pick fruit without bruising it |
| Hydraulic | Pressurised liquid drives a piston | Rising road bollards; heavy lifting equipment |
| Pneumatic | Compressed air drives a piston | Opening bus doors; fast-moving factory machinery |
| Electric | Electric motors or solenoids produce motion | Motorised blinds; pumps |
| Thermal | Heat makes a material expand or change shape, causing movement | Valves on radiators that close as the room warms |
| Magnetic | An electromagnet attracts or releases | Electromagnetic door locks |
| Mechanic | Gears, screws or levers convert one movement into another | A screw drive turning rotary motion into linear motion |

Hydraulic actuators give very large forces; pneumatic ones are fast and clean but less precise; electric ones are easy to control precisely.

## Microprocessor-controlled systems

- **Greenhouses:** temperature sensors control heaters and vent motors; moisture sensors control watering valves; light sensors control lamps and blinds; gas sensors can control carbon dioxide levels.
- **Central heating:** a temperature sensor compares room temperature with the setting; the boiler and pump switch on below it and off above it, often with a timer.
- **Air conditioning:** temperature and humidity sensors control the compressor and fans to cool and dry the air.
- **Burglar alarms:** infrared, sound and magnetic door sensors are read when the alarm is set; a triggered sensor starts a delay for entering the code, then sounds the siren or alerts a monitoring company.
- **Traffic and pedestrian flow:** induction loops and cameras measure traffic so signals and signs can respond. On **smart motorways**, sensors measure traffic speed and flow, and the system sets variable speed limits on overhead signs and can close lanes after an incident.
- **Car park barriers:** an induction loop detects a car at the barrier, the barrier rises, and a light beam or second loop confirms the car has passed before it lowers. A counter tracks free spaces.
- **Traffic lights:** induction loops and pedestrian push buttons tell the microprocessor where traffic is waiting, so it can change the sequence and timings instead of running a fixed cycle.
- **Wireless Sensor and Actuator Networks:** many battery-powered sensor and actuator nodes communicate wirelessly. Sensors report readings, and actuators respond, without cabling, for example across a large farm or building.
- **Smart homes:** heating, lighting, locks, blinds and appliances are controlled by sensors and by the owner through an app or voice assistant, often remotely.

## Advantages and disadvantages of control technologies

**Advantages:** systems respond faster than people and work continuously; conditions are kept within precise limits; staff are freed from repetitive checks; dangerous environments need fewer people; energy can be saved by heating or lighting only when needed.

**Disadvantages:** high cost to install and maintain; a sensor or actuator fault can make the system act wrongly, for example flooding a greenhouse; power or network failures stop the system; staff skills may be lost; connected systems such as smart homes can be hacked.

## Writing control algorithms

### Worked example 1: greenhouse

The vent opens above 26 °C and closes below 22 °C, so it does not keep switching around a single value. Watering runs when soil moisture is below 40.

```
REPEAT
    READ Temp from temperature sensor
    IF Temp > 26 THEN
        Send signal to vent motor to open vent
    ELSE
        IF Temp < 22 THEN
            Send signal to vent motor to close vent
        ENDIF
    ENDIF
    READ Moisture from moisture sensor
    IF Moisture < 40 THEN
        Open water valve
    ELSE
        Close water valve
    ENDIF
    Wait 60 seconds
    INPUT Power
UNTIL Power = 0
```

Between 22 °C and 26 °C the vent stays as it is. Using two thresholds stops the motor opening and closing every few seconds when the temperature hovers near one value.

### Worked example 2: car park barrier with a space counter

```
Spaces ← 2
REPEAT
    READ EntryLoop from entry induction loop
    IF EntryLoop = 1 THEN
        IF Spaces > 0 THEN
            Raise entry barrier
            Spaces ← Spaces - 1
        ELSE
            PRINT "FULL"
        ENDIF
    ENDIF
    READ ExitLoop from exit induction loop
    IF ExitLoop = 1 THEN
        Raise exit barrier
        Spaces ← Spaces + 1
    ENDIF
    INPUT Power
UNTIL Power = 0
```

Trace with four events, starting with 2 spaces:

| Event | EntryLoop | ExitLoop | Action | Spaces |
|---|---|---|---|---|
| Car arrives | 1 | 0 | Entry barrier raised | 1 |
| Car arrives | 1 | 0 | Entry barrier raised | 0 |
| Car arrives | 1 | 0 | "FULL" displayed | 0 |
| Car leaves | 0 | 1 | Exit barrier raised | 1 |

In a flowchart, each IF becomes a decision diamond with Yes and No exits, each READ is an input parallelogram, and actions such as raising the barrier are process rectangles. The flowline returns to the first READ to show the loop.

## Common mistakes

- Describing a control system without the feedback step.
- Naming "a sensor" without saying which type and what it detects.
- Mixing up hydraulic (liquid) and pneumatic (air) actuators.
- Using a single threshold where the scenario needs on and off values.
- Writing an algorithm that reads the sensor once, outside the loop.

## Exam technique

- **Describe** a system: sensor → conversion → microprocessor compares with preset value → actuator → feedback.
- **Explain** a choice of sensor or actuator by linking what it detects or does to the scenario.
- **Algorithm** questions: read inside the loop, compare with the values given, send each actuator signal, and include a way for the loop to end.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 3 Monitoring and control, section 3.2 Control technologies, with section 4.1 Algorithms.
