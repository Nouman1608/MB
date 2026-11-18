---
title: "IB DP Computer Science (DP Computer Science): Control Systems (HL) -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed HL notes on control systems for IB DP Computer Science A.1: sensors, actuators, feedback, open and closed loops, design choices and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-18: Written from the public subject brief and the A1.3.6-A1.3.7 label (control systems, HL only); the exact learning outcomes were not available, so please check scope and depth against the full DP Computer Science guide."
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **A1.3.6 and A1.3.7, control systems**, HL-only statements in A.1 Computer
fundamentals (IB DP Computer Science, first assessment 2027). For explanations and worked scenarios,
use the [control systems study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a1-control-systems/);
for the operating system content beside it, see the
[A.1 Computer fundamentals study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1/).
Check the full guide for the precise outcomes.

## Key terms

| Term | Meaning |
|---|---|
| Control system | A computer system that monitors and adjusts a physical process automatically |
| Sensor | Input device that measures a physical quantity and produces a signal |
| Actuator | Output device that turns a signal into physical movement or action |
| Controller | Processor (often a microcontroller) that compares readings with the set point and decides on outputs |
| Set point | Target value the system maintains |
| Feedback | Measurement of the output's effect, fed back into the controller |
| Open-loop | Control without feedback: outputs follow a fixed plan |
| Closed-loop | Control with feedback: outputs are adjusted according to measurements |
| ADC | Analogue-to-digital converter: turns a sensor's analogue signal into binary |
| DAC | Digital-to-analogue converter: turns binary into an analogue output signal |
| Embedded system | Dedicated computer built into a device to perform one task |
| Real-time system | One that must respond within a guaranteed time |
| Tolerance (hysteresis) band | A range around the set point that prevents rapid on-off switching |

## The control cycle in five steps

1. **Sensor** measures the quantity (via an **ADC** if analogue).
2. **Controller** compares the reading with the **set point**.
3. Controller decides on an action.
4. **Actuator** carries out the action.
5. **Feedback:** the sensor measures the new state, and the loop repeats.

## Open versus closed loop

| | Open-loop | Closed-loop |
|---|---|---|
| Feedback | None | Yes |
| Self-correcting | No | Yes |
| Cost and complexity | Low | Higher |
| Example | Timed washing programme; fixed-time traffic lights | Thermostat; cruise control; vehicle-detecting traffic lights |

## Matching sensors and actuators

| System | Sensor(s) | Actuator(s) |
|---|---|---|
| Central heating | Temperature | Heater relay or boiler valve |
| Automatic door | Infrared or motion | Door motor |
| Greenhouse | Soil moisture, temperature, light | Pump, vent motor, lamps |
| Car cruise control | Wheel speed | Throttle control |
| Street lighting | Light | Lamp switch |
| Burglar alarm | Motion, door contact | Siren, light |
| Traffic lights (adaptive) | Induction loop, camera | Light signals |

## Design choices to explain

- **Tolerance band:** stops the actuator switching on and off continuously around the set point.
- **Sampling interval:** fast-changing processes (braking, airbags) need frequent readings;
  slow ones (room temperature) do not.
- **Continuous loop:** a controller never ends; it runs while powered.
- **Fail-safe default:** if a sensor fails, the system moves to a safe state (lift brakes on, lights
  to a fixed cycle).
- **Redundant sensors:** duplicated sensors allow a faulty reading to be detected in safety-critical
  systems.

## Pseudocode pattern

```
LOOP
    reading <- READ_SENSOR(s)
    IF reading < lowLimit THEN
        SWITCH_ON(actuator)
    ELSE IF reading > highLimit THEN
        SWITCH_OFF(actuator)
    END IF
    WAIT(interval)
END LOOP
```

## Evaluation points

- **For:** faster and more consistent than people; continuous operation; works in hazardous places;
  saves energy by responding to real conditions.
- **Against:** wrong outputs if sensors fail or drift; initial cost; software errors in
  safety-critical systems; less human judgement in unusual cases.

## Exam traps

- Sensors **measure**; controllers **decide**; actuators **act**. Keep the verbs straight.
- Closed-loop answers must mention **feedback** and the output's effect being measured again.
- Analogue sensors need an **ADC** before a digital processor can use the reading.
- A timer is not a sensor of the process: a timed programme is still **open-loop**.
- Name the **specific** sensor and actuator for the scenario, not "a sensor".
- Real-time means **guaranteed response time**, not "very fast".

## Self-test

1. Define a control system.
2. Distinguish a sensor from an actuator.
3. What is a set point?
4. Explain the difference between open-loop and closed-loop control.
5. Why does a temperature sensor's reading usually pass through an ADC?
6. Give one example of an open-loop system.
7. Name a sensor and an actuator in an automatic door.
8. Why does a thermostat use a tolerance band?
9. Why must an anti-lock braking system sample its sensors more often than a heating system?
10. Define an embedded system and give one advantage.
11. What is meant by a fail-safe default? Give an example.
12. Give two drawbacks of using a control system rather than a human operator.

**Answers:**
1. A computer system that monitors a physical process and adjusts it automatically.
2. A sensor measures a physical quantity and sends a signal in; an actuator receives a signal and
   produces physical action.
3. The target value that the control system tries to maintain.
4. Open-loop sends outputs without measuring their effect; closed-loop measures the result (feedback)
   and adjusts the output to reach the set point.
5. The sensor produces an analogue signal; the processor can only work with binary values.
6. Any one: a timed washing programme; a basic toaster; fixed-time traffic lights.
7. Sensor: infrared/motion sensor. Actuator: door motor.
8. To stop the heater switching on and off rapidly as the temperature crosses the set point.
9. Wheel speed changes very quickly, so the system must respond within a fraction of a second;
   room temperature changes slowly.
10. A dedicated computer built into a device to do one job; any one advantage: low cost, small size,
    low power use.
11. The state the system moves to when something fails, chosen to be safe; for example, a lift
    applies its brakes if power is lost.
12. Any two: wrong decisions if a sensor fails; cost of installation; software errors could cause
    harm; cannot use judgement in unusual situations.

## Related pages

- [Control systems practice questions](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a1-control-systems-practice/)
- [A.1 Computer fundamentals revision notes](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1-revision-notes/)

## Official syllabus

International Baccalaureate Organization, *Diploma Programme Subject Brief -- Sciences: Computer
science*, first assessment 2027, © 2024.
