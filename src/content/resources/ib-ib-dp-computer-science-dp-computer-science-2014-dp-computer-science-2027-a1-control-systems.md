---
title: "IB DP Computer Science (DP Computer Science): Control Systems (HL)"
resourceType: "study-guides"
subject: "computer-science"
level: ["ib"]
topic: "A.1 -- Computer fundamentals"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Computer Science"]
syllabusSeries: "First assessment 2027"
order: 1.13
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-a"
    subtopic: "ib-dp-computer-science-a-1"
description: "HL study guide to control systems in IB DP Computer Science A.1: sensors, controllers, actuators, feedback, open and closed loops, with worked scenarios."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "Written from the public subject brief and the A1.3.6-A1.3.7 label (control systems, HL only); the exact learning outcomes were not available, so please check scope and depth against the full DP Computer Science guide."
publishedDate: 2026-11-18
featured: false
---

**This unit covers statements A1.3.6 and A1.3.7 of A.1 Computer fundamentals, on control systems,
which the guide marks HL only.** They sit in the same part of A.1 as the operating system, covered in
the [A.1 Computer fundamentals study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1/),
and they ask a related question: how does a computer manage not only its own hardware, but a
physical process in the world outside it?

> **Scope of this page.** The statement numbers and their HL status come from the full DP Computer
> Science guide (first assessment 2027). The guide's exact wording was not available when this page
> was written, so check your school's copy for the precise learning outcomes and examples it names.

## What is a control system?

A **control system** is a computer system that monitors and changes the state of a physical process
automatically, without a person making each decision. A central-heating thermostat, a set of traffic
lights, an automatic door and a car's cruise control are all control systems.

Every control system has the same building blocks:

| Part | Role | Examples |
|---|---|---|
| **Sensor** (input) | Measures a physical quantity and converts it to an electrical signal | Temperature, light, pressure, infrared motion, humidity, speed |
| **Controller** (process) | A processor, often a microcontroller, that compares the readings with the desired value and decides what to do | Embedded processor in a thermostat |
| **Actuator** (output) | Converts an electrical signal into physical action | Motor, valve, heater, relay, pump, lamp, buzzer |
| **Set point** | The target value the system tries to maintain | 21 °C in a room |
| **Feedback** | Information about the result of the output, measured again by the sensor | New room temperature after the heater has run |

Many sensors produce an **analogue** signal. An **analogue-to-digital converter (ADC)** turns it into
a binary value the processor can use. Some actuators need an analogue signal, so a
**digital-to-analogue converter (DAC)** may be needed on the output side. This links control systems
back to A.1's data representation: a sensor reading is stored as a binary number, and the number of
bits limits how precisely it can be recorded.

## Open-loop and closed-loop control

**Open-loop control** sends outputs without measuring their effect. A simple toaster or a washing
machine following a fixed timed programme is open-loop: it runs for a set time whatever the result.
It is cheap and simple, but it cannot correct itself if conditions change.

**Closed-loop control** uses **feedback**. The sensor measures the result of the output, the controller
compares it with the set point, and the output is adjusted. A thermostat is closed-loop: when the room
reaches the set point, the heater is switched off; when the temperature drops, it is switched on
again.

```
          set point
             |
             v
  sensor -> controller -> actuator -> physical process
     ^                                      |
     |______________ feedback _______________|
```

Closed-loop systems keep a process stable despite disturbances (an open window, a hill under a car)
but need sensors and more complex logic.

## The control loop as an algorithm

A controller runs a loop continuously. In the pseudocode style of the course:

```
setPoint <- 21
tolerance <- 0.5
LOOP
    temp <- READ_SENSOR(tempSensor)
    IF temp < setPoint - tolerance THEN
        SWITCH_ON(heater)
    ELSE IF temp > setPoint + tolerance THEN
        SWITCH_OFF(heater)
    END IF
    WAIT(5)                      // seconds before the next reading
END LOOP
```

Three design choices in this short algorithm are worth explaining in an exam:

1. **The tolerance band.** Without it, the heater would switch on and off every few seconds as the
   temperature crossed 21 °C, wearing out the relay. The band (20.5 °C to 21.5 °C) prevents rapid
   switching.
2. **The sampling interval.** Reading every 5 seconds is enough for room temperature, which changes
   slowly. A car's anti-lock braking system must sample many times a second, because wheel speed
   changes very quickly.
3. **The infinite loop.** A control system never "finishes"; it runs for as long as it is powered.

## Worked example: a greenhouse

A greenhouse must keep soil moist and the air below 30 °C.

**Inputs.** A soil-moisture sensor and a temperature sensor.
**Outputs.** A water pump (actuator) and a motor that opens a roof vent.
**Processing.** The controller reads both sensors in turn. If moisture is below the set point, the
pump runs for a short time, then the moisture is read again (feedback). If temperature exceeds 30 °C,
the vent motor opens the vent; when it falls below a lower threshold, the vent closes.

An annotated model answer to "Explain how feedback is used in the greenhouse system" [4]:

> The moisture sensor measures the soil after the pump has run **[1: names the sensor and the
> measurement of the result]**. The controller compares the new reading with the set point **[1:
> comparison]**. If the soil is still too dry, the pump is switched on again; if it is moist enough, the
> pump stays off **[1: adjustment of output]**. In this way the output continuously affects the next
> input, keeping the moisture close to the set point despite evaporation on hot days **[1: purpose of
> the loop, linked to the scenario]**.

## Worked example: traffic lights at a junction

A fixed-time set of lights is open-loop: each phase lasts a set number of seconds. Adding induction
loops or cameras that detect waiting vehicles makes it closed-loop. The controller can extend a green
phase while traffic is still flowing and skip a phase when no car is waiting, reducing queues. The
cost is extra sensors, more complex software and more points of failure; the system must also fall
back safely (for example, to a fixed timing) if a sensor fails.

## Embedded systems and real-time response

Most controllers are **embedded systems**: a microcontroller dedicated to one task, built into the
device it controls, with its program stored in non-volatile memory. Compared with a general-purpose
computer, it is cheaper, smaller and uses less power, but it cannot easily be reprogrammed for other
tasks.

Many control systems are **real-time**: the output must be produced within a guaranteed time. An
airbag controller that responds a fraction of a second late has failed, even if its decision is
correct. Safety-critical control systems therefore need thorough testing, fail-safe behaviour (a
lift brakes if power is lost) and sometimes duplicate sensors so that one faulty reading can be
detected.

## Evaluating control systems

| Benefits | Drawbacks |
|---|---|
| Respond faster and more consistently than people | Sensor failure or poor calibration gives wrong decisions |
| Work continuously, including in dangerous places | Initial cost of sensors, actuators and software |
| Can save energy or materials by responding to actual conditions | Bugs in safety-critical systems can cause harm |
| Free people from repetitive monitoring | Loss of human judgement in unusual situations |

## Common mistakes

- **Calling a sensor an actuator** or vice versa. Sensors measure; actuators act.
- **Describing a closed-loop system without the word feedback**, or without saying that the output's
  effect is measured again.
- **Saying the sensor "decides".** The controller decides; the sensor only measures.
- **Forgetting the ADC** when an analogue sensor feeds a digital processor.
- **Listing parts without the scenario.** Name the specific sensor and actuator for the system given.

## Exam technique for the command words

- **Identify** the sensors and actuators: name the type and what it measures or moves.
- **Describe** a control system: input, processing (comparison with set point), output, feedback.
- **Explain** why feedback matters: link the measurement of the output to the adjustment.
- **Construct** an algorithm: a continuous loop, a sensor read, a comparison with a threshold, an
  output command and a wait.
- **Evaluate** automation in a case study: benefits, risks, safety, cost and a conclusion.

## Practise and revise

- [Control systems revision notes](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a1-control-systems-revision-notes/)
- [Control systems practice questions](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a1-control-systems-practice/)
- [A.1 Computer fundamentals revision notes](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1-revision-notes/)

## Source

International Baccalaureate Organization, *Diploma Programme Subject Brief, Sciences: Computer
science, first assessment 2027* (© 2024). The complete subject guide is available through the IB
Programme Resource Centre.
