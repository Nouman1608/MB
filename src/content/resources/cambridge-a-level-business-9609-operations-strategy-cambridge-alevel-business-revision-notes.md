---
title: "Cambridge A Level Business (9609): Operations strategy -- Revision Notes"
resourceType: "revision-notes"
subject: "business"
level: ["a-levels"]
topic: "Operations management"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9609"]
syllabusSeries: "For examination in 2026, 2027 and 2028"
stage: "A"
order: 9.3
syllabusTopics:
  - qualification: "a-level"
    topic: "operations-management-a-cambridge-alevel-business"
    subtopic: "operations-strategy-cambridge-alevel-business"
description: "Condensed revision notes for Cambridge A Level Business 9609 section 9.3: resources, IT and AI, flexibility, ERP, lean production and CPA with floats."
author: "marlbridge-academic-team"
reviewer: "salman-ahmad"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to salman-ahmad (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---
These notes condense **section 9.3 Operations strategy** of the Cambridge International AS & A Level Business 9609 syllabus for examination in 2026, 2027 and 2028. The [operations strategy study guide](/resources/cambridge-a-level-business-9609-operations-strategy-cambridge-alevel-business/) works each idea through a scenario and a full network; the [operations strategy practice questions](/resources/cambridge-a-level-business-9609-operations-strategy-cambridge-alevel-business-practice/) test them. Operations strategy alongside quality is summarised in the [quality management and operations strategy notes](/resources/cambridge-a-level-business-quality-management-and-operations-strategy-revision-notes/).

## The central trade-off

**Cost (efficiency, lean, high utilisation)** versus **responsiveness (flexibility, spare capacity)**. Standard products sold on price → efficiency. Customised, premium products → flexibility.

## 9.3.1 Operational decisions

| Resource | How availability shapes the decision |
|---|---|
| Human | Numbers and skills limit output; shortages mean overtime, recruitment or training lead times |
| Marketing | Forecasts set volume; brand promise sets specification and quality; big customers raise profile but may crowd out others |
| Finance | Funds for equipment, inventory and training; working capital needed before customers pay |

Exam pattern: a "should we accept the order / expand / automate" question needs all three resources considered.

**IT and AI, from automating to predicting:**

- IT: computer-aided design, computer-controlled machines, stock records, online ordering.
- AI: demand forecasting, predictive maintenance, camera-based defect detection, scheduling.
- Changing role: managers move from gathering data to judging system recommendations.
- Risks: cost, data quality, cyber-security, staff resistance and job change.

## 9.3.2 Flexibility and innovation

| Flexibility | How achieved | Cost |
|---|---|---|
| Volume | Temporary staff, overtime, subcontracting, spare capacity | Higher unit cost; idle capacity |
| Delivery time | Finished-goods inventory, fast set-ups, priority scheduling | Holding cost; disruption |
| Specification | Multi-skilled staff, flexible machines, modular design | Training; fewer economies of scale |

**Process innovation:** changing current processes or adopting new ways of producing or delivering. Can raise all three flexibilities at once (for example, digital printing). Risks: capital cost, disruption, uncertain gains.

## 9.3.3 ERP

**Features:** one shared database; linked modules; real-time updating; automatic data transfer; reporting tools.

| Efficiency area | Mechanism |
|---|---|
| Inventory control | Live stock levels; automatic re-ordering |
| Costing and pricing | Costs recorded as they occur, so true unit cost is known |
| Capacity utilisation | Orders matched to free machine and staff time |
| Responses to change | A change reaches every department at once |
| Workforce flexibility | Skills and availability visible, so staff can be redeployed |
| Management information | One dashboard from one data source |

**Limits:** cost, disruption, training, depends on accurate data.

## 9.3.4 Lean production

**Aim:** minimum resources (materials, time, space, labour, inventory) to meet customer needs at the required quality.

| Strategy | Supports lean by | Limitation |
|---|---|---|
| Kaizen | Continuous small improvements from staff | Slow; needs lasting commitment |
| Quality circles | Groups solving quality problems | Time off the line; ideas ignored |
| Simultaneous engineering | Design, testing, production planning together | Needs tight coordination |
| Cell production | Teams own a whole task | Training, duplicated equipment |
| JIT manufacturing | Minimal inventory | Supplier failure stops production |
| Waste management | Removes defects, waiting, movement, over-production, excess stock | Waste hard to measure |

**System links:** JIT needs reliable quality (no buffer stock) → needs kaizen and quality circles → needs involved, multi-skilled staff.

**Named links:** inventory (low), quality (right first time), employee roles (multi-skilled, responsible), capacity (high utilisation, little slack), efficiency (lower unit cost).

## 9.3.5 Operations planning and CPA

**Need for planning:** right order, resources ready, delays spotted early, materials ordered just in time.

**Network elements:** activities (arrows), nodes (circles showing start and end), dummy activities (dotted arrows, zero duration, show a dependency only).

**Method:**

1. Forward pass: EST of a node = **largest** of (EST at start + duration) over arrows entering it.
2. Backward pass: LFT of a node = **smallest** of (LFT at end − duration) over arrows leaving it.
3. Critical path: activities with zero total float; its length is the minimum duration.
4. Total float = LFT at end − EST at start − duration.
5. Free float = EST at end − EST at start − duration.

**Interpretation:** total float is the delay possible without delaying the project; free float is the delay possible without delaying the next activity. A delay on the critical path delays the whole project by the same amount.

**Benefits:** minimum time, critical activities, where resources can move. **Limits:** estimated durations, no cost or resource limits shown, complex, needs updating.

## Key terms

| Term | Meaning |
|---|---|
| Process innovation | New or changed ways of producing or delivering |
| ERP | Integrated software linking all functions through one database |
| Lean production | Producing with the minimum of resources and waste |
| Kaizen | Continuous improvement through small steps |
| JIT | Inputs arrive only when needed |
| Critical path | Longest route through the network; zero total float |
| Dummy activity | Zero-time arrow showing a dependency |

## Exam traps

- Treating lean and flexible as the same thing.
- Naming ERP features without the efficiency area each improves.
- Reversing largest and smallest in the forward and backward passes.
- Confusing total and free float.
- Ignoring supplier reliability when evaluating JIT.

## Self-test

1. Name the three resources in 9.3.1.
2. Give one AI application in operations.
3. Name the three types of flexibility.
4. Define process innovation.
5. Name four of the six efficiency areas ERP improves.
6. Why does JIT depend on good quality?
7. Give one limitation of cell production.
8. What is a dummy activity?
9. On the forward pass, which value do you take where two arrows enter a node?
10. An activity runs from node 2 (EST 5) to node 3 (EST 12, LFT 15) and lasts 4 days. Calculate total and free float.
11. What happens to the project if a critical activity overruns by 3 days?
12. Give one limitation of CPA.

### Answers

1. Human, marketing, finance.
2. Demand forecasting, predictive maintenance, defect detection or scheduling.
3. Volume, delivery time, specification.
4. Changing current processes or adopting new ways of producing products or delivering services.
5. Any four: inventory control, costing and pricing, capacity utilisation, responses to change, workforce flexibility, management information.
6. There is no buffer stock, so faulty parts stop production.
7. Training costs or duplicated equipment.
8. A zero-duration arrow that shows a dependency without using time or resources.
9. The largest.
10. Total float = 15 − 5 − 4 = **6**; free float = 12 − 5 − 4 = **3**.
11. It finishes 3 days late.
12. Durations are only estimates (or: it ignores cost and resource limits).
