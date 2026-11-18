---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.9 Kinematic problems: displacement, velocity, acceleration and distance -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.09
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-9"
description: "Revision notes for IB DP Maths AA section 5.9 kinematics: s, v, a, speed, distance versus displacement, speeding up, exam traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense **section 5.9 of IB DP Mathematics: Analysis and Approaches: kinematic problems involving displacement, velocity, acceleration and total distance travelled**. It is SL content, examined at SL and HL. The [section 5.9 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-9/) has the full worked examples.

## Core recall

```
Down the chain (differentiate):  s → v = ds/dt → a = dv/dt = d²s/dt²
Up the chain (integrate):        a → v = ∫a dt + c → s = ∫v dt + k
Displacement (t₁ to t₂) = ∫ v dt
Distance     (t₁ to t₂) = ∫ |v| dt
Speed = |v|
```

- Every integration up the chain needs its own boundary condition: v at a known time for v, s at a known time for s.
- Displacement can be negative; distance and speed cannot.
- Distance equals the size of the displacement only if the particle never changes direction in the interval.
- **Changes direction:** v = 0 and v changes sign.
- **Speeding up:** v and a have the same sign. **Slowing down:** opposite signs.
- **Maximum displacement** in the positive direction: where v changes from + to −, or at an end point.
- **Maximum velocity:** where a = 0 and changes from + to −, or at an end point. **Maximum speed:** the largest |v|, which may come from the most negative v.

## Two ways to find total distance

1. **Position table** (best when s(t) is known): list s at the start, at each time v = 0 with a sign change, and at the end; add the absolute differences.
2. **Split the integral** (best when only v is known): ∫|v| dt = sum of |∫v dt| over each interval between zeros of v.

On Paper 2, integrate |v(t)| directly with the GDC, but still write ∫|v(t)| dt with its limits.

## Key terms

| Term | Meaning |
|---|---|
| Displacement s | signed position from a fixed origin O |
| Velocity v | ds/dt; sign shows direction |
| Speed | \|v\| |
| Acceleration a | dv/dt = d²s/dt²; sign shows direction of the change in velocity |
| At rest | v = 0 |
| Changes direction | v = 0 and v changes sign |
| Total distance travelled | ∫\|v\| dt over the interval |
| Initial | at t = 0 |

## Exam traps

- **Distance by ∫v dt.** Integrating straight across a zero of v gives displacement, not distance.
- **"Negative acceleration means slowing down."** Only if v is positive.
- **Missing constant.** v(t) from a(t) without +c, then a wrong s(t) for every later part.
- **Wrong condition.** Using s(0) to find the constant in v(t).
- **Start from rest.** v(0) = 0 at t = 0 is not a change of direction.
- **Units.** s in m, v in m s⁻¹, a in m s⁻² unless the question uses other units.
- **Rounded limits.** On the GDC, store the zero of v rather than retyping a 3 s.f. value.

## Self-test

1. s(t) = t³ − 9t² + 24t + 2. Find v(t) and a(t).
2. For question 1, find the times when the particle is at rest.
3. For question 1, find the total distance travelled from t = 0 to t = 6.
4. v(t) = 4 − t². At t = 3, find the speed and state whether the particle is speeding up.
5. v(t) = 3t² − 2t and s(0) = 4. Find s(t).
6. a(t) = 12t − 6 and v(0) = 4. Find v(2).
7. v(t) = t − 2 for 0 ≤ t ≤ 4. Find the displacement and the distance travelled.
8. A particle has v = −3 m s⁻¹ and a = 2 m s⁻² at an instant. Is it speeding up?
9. v(t) = 2 sin 2t for 0 ≤ t ≤ π. Find the displacement and the total distance.
10. s(t) = t e^(−t), t ≥ 0. Find the time when the particle changes direction.
11. Why does a GDC answer for distance still need ∫|v| dt written down?
12. A particle starts from rest. Explain why v(0) = 0 is not a change of direction.

## Answers

1. v(t) = 3t² − 18t + 24; a(t) = 6t − 18.
2. 3(t − 2)(t − 4) = 0, so t = 2 and t = 4.
3. s(0) = 2, s(2) = 22, s(4) = 18, s(6) = 38; distance = 20 + 4 + 20 = 44.
4. v(3) = −5, so speed 5; a = −2t = −6. v and a are both negative, so it is speeding up.
5. s(t) = t³ − t² + c, with s(0) = 4, so s(t) = t³ − t² + 4.
6. v(t) = 6t² − 6t + 4, so v(2) = 24 − 12 + 4 = 16.
7. Displacement ∫₀⁴(t − 2) dt = 0; distance = 2 + 2 = 4 (two triangles of area 2).
8. No. v and a have opposite signs, so the speed is decreasing: it is slowing down.
9. Displacement = [−cos 2t]₀^π = 0. Distance = 2 × ∫₀^(π/2) 2 sin 2t dt = 2 × 2 = 4.
10. v = (1 − t)e^(−t) = 0 at t = 1, and v changes from + to −, so t = 1.
11. The written integral with limits is the method; a bare number earns only the answer mark if it is correct, and nothing if it is not.
12. A change of direction needs v to change sign. At t = 0 there is no earlier motion, so the particle simply starts moving.

## Where next

Practise the full question types with the [section 5.9 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-9-practice/). For the integration techniques behind distance and displacement, see the [section 5.11 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-11-revision-notes/) and the [AA integration and kinematics revision notes](/resources/ib-dp-mathematics-aa-sl-integration-kinematics-revision-notes/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section SL 5.9.
