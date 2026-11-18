---
title: "IB DP Computer Science (DP Computer Science): Control Systems (HL) -- Practice Questions"
resourceType: "practice-questions"
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
description: "Twelve original HL questions on control systems for IB DP Computer Science A.1: sensors, actuators, feedback, control algorithms and evaluation, with answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-18: Written from the public subject brief and the A1.3.6-A1.3.7 label (control systems, HL only); please check the questions and mark allocations against the full DP Computer Science guide."
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- the IB holds copyright in its own papers. Use these alongside
> the official past papers available through your school or the IB store.

These questions cover **A1.3.6 and A1.3.7, control systems** (HL only), inside A.1 Computer
fundamentals. Related: [control systems study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a1-control-systems/)
and [revision notes](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a1-control-systems-revision-notes/).

## Section A

**1.** Define the term *actuator*. **[1]**

**2.** State the purpose of feedback in a control system. **[1]**

**3.** Identify **one** sensor and **one** actuator that would be used in a system that switches
street lights on at dusk. **[2]**

**4.** Distinguish between open-loop and closed-loop control, giving an example of each. **[4]**

**5.** Outline why an analogue-to-digital converter is needed between a pressure sensor and a
microcontroller. **[2]**

**6.** Outline **two** reasons why control systems are usually built as embedded systems rather than
run on general-purpose computers. **[2]**

## Section B

**7.** A smart fridge must keep its interior between 3 °C and 5 °C.
**(a)** Identify the sensor and the actuator. **[2]**
**(b)** Construct an algorithm, in pseudocode, for the fridge's controller. **[4]**
**(c)** Explain why the algorithm uses two limits rather than a single set point. **[2]**

**8.** Describe how a car's cruise control maintains a constant speed when the car starts to climb a
hill. **[4]**

**9.** An airbag system must decide to inflate within a very short, fixed time after a collision is
detected.
**(a)** State the term for a system that must respond within a guaranteed time. **[1]**
**(b)** Explain why the airbag controller samples its sensors very frequently. **[2]**
**(c)** Suggest **one** way the designers could reduce the risk of the airbag inflating because of a
faulty sensor. **[1]**

**10.** A town replaces its fixed-time traffic lights with lights that detect waiting vehicles.
Explain **two** benefits and **one** drawback of the new system. **[3]**

**11.** A school greenhouse uses a soil-moisture sensor and a pump. A student's program reads the
sensor once every 24 hours and runs the pump for 10 minutes if the soil is dry. On hot days the
plants wilt. Explain the problem with this design and suggest **two** improvements. **[4]**

**12.** A hospital is considering an automated system that monitors patients' blood oxygen and adjusts
the flow of oxygen without a nurse's intervention. Evaluate this proposal. **[6]**

---

## Answers

**1.** An output device that converts an electrical signal into physical action, such as movement [1].

**2.** To measure the effect of the output so that the controller can adjust it to keep the process at
the set point [1].

**3.** Sensor: light sensor [1]. Actuator: switch or relay that turns the lamps on [1].

**4.** Open-loop control produces outputs without measuring their effect [1], for example a washing
machine running a fixed timed programme or fixed-time traffic lights [1]. Closed-loop control
measures the result of the output and adjusts it (uses feedback) [1], for example a thermostat
controlling a heater [1].

**5.** The pressure sensor produces a continuously varying (analogue) signal [1]; the microcontroller
can only process digital (binary) values, so the signal must be converted [1].

**6.** Any two, [1] each: lower cost; smaller size so it fits inside the device; lower power use; more
reliable because it runs a single dedicated program; can start instantly. Maximum 2.

**7. (a)** Sensor: temperature sensor [1]. Actuator: compressor (cooling unit) switch or relay [1].
**(b)** One mark each for: a continuous loop [1]; reading the temperature sensor inside the loop [1];
switching the compressor on above 5 °C [1]; switching it off below 3 °C [1]. Example:
```
LOOP
    temp <- READ_SENSOR(fridgeTemp)
    IF temp > 5 THEN
        SWITCH_ON(compressor)
    ELSE IF temp < 3 THEN
        SWITCH_OFF(compressor)
    END IF
    WAIT(10)
END LOOP
```
**(c)** With one set point, the compressor would switch on and off every time the temperature crossed
it [1], causing rapid switching that wastes energy and wears out the compressor; two limits allow it
to run for longer, less frequent periods [1].

**8.** One mark per point, up to 4:
- A speed sensor measures the car's actual speed [1].
- The controller compares it with the set speed chosen by the driver [1].
- On the hill the measured speed drops below the set speed [1].
- The controller signals the actuator to increase the throttle (engine power) [1].
- The speed is measured again (feedback) and the throttle adjusted until the set speed is restored,
  then reduced again [1].
Maximum 4.

**9. (a)** A real-time system [1].
**(b)** A collision changes the car's motion within a fraction of a second [1], so infrequent readings
could detect it too late for the airbag to protect the occupant [1].
**(c)** Any one [1]: use two or more sensors and inflate only if they agree; run self-checks on the
sensors when the car starts and warn the driver of a fault.

**10.** Benefits, any two, [1] each: green phases can be extended while traffic is flowing, reducing
queues; phases with no waiting vehicles can be skipped, reducing waiting time and fuel use; the
timing adapts to rush hours and special events. Drawback, any one [1]: higher installation and
maintenance cost; a sensor failure could cause wrong timings unless there is a safe fallback; more
complex software that must be tested. Maximum 3.

**11.** One mark for the problem, one for its explanation, and one for each improvement:
- Problem: the sensor is read only once a day [1], so on hot days the soil dries out between readings
  and the system cannot respond in time (there is effectively almost no feedback) [1].
- Improvements, any two, [1] each: read the sensor much more frequently, for example every few
  minutes; run the pump until the moisture reaches the set point, reading the sensor while it runs,
  instead of a fixed 10 minutes; add a temperature sensor so that watering increases on hot days.
Maximum 4.

**12.** Award up to 6:
- Benefit: continuous monitoring and immediate adjustment, faster than a nurse checking periodically
  [1].
- Benefit: frees nurses for other care and reduces human error from tiredness [1].
- Risk: a faulty or displaced sensor could cause too much or too little oxygen, directly harming the
  patient [1].
- Risk: software errors in a safety-critical system could have serious consequences, so extensive
  testing and certification are needed [1].
- Mitigation: alarms that alert staff to unusual readings, redundant sensors, limits on how far the
  system can change the flow, and a manual override [1].
- Justified conclusion: for example, suitable if used with alarms, limits and regular checks by
  nursing staff rather than replacing them entirely [1].
Maximum 6.

---

## Where marks are usually lost

- Writing "sensor" or "motor" without saying what it measures or moves in the scenario.
- Control algorithms that read the sensor only once, outside the loop.
- Describing closed-loop control without the output's effect being measured again.
- Evaluations of safety-critical systems that give benefits but no risks or safeguards.

## Frequently asked questions

**Do I need to know the internal electronics of sensors?**
No. You need to know what each sensor measures and how its reading is used by the controller.

**Are these real IB questions?**
No. They are original practice questions written for revision.
