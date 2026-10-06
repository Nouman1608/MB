---
title: "OxfordAQA A-Level Business: Implementing a strategy (9725)"
seoTitle: "OxfordAQA Business 9725 Implementing a Strategy Guide"
resourceType: "study-guides"
subject: "business"
level: ["a-levels"]
topic: "Implementing a strategy"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9725"]
syllabusSeries: "9725 Version 1.1 (first teaching September 2026; first AS exams May/June 2027, first A-level exams May/June 2028)"
stage: "A"
order: 15
syllabusTopics:
  - qualification: "a-level"
    topic: "implementing-a-strategy-oxfordaqa-alevel-business"
description: "Study guide for OxfordAQA A-level Business 9725 section 3.4.5: implementation factors, network analysis with float, strategic planning and drift."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide is written to the OxfordAQA International AS and A-level Business (9725) specification, Version 1.1, for International AS exams May/June 2027 onwards and International A-level exams May/June 2028 onwards. It teaches section 3.4.5 Implementing a strategy, which sits inside 3.4 Business strategy and is **International A-level only** content. If you are completing the older 9625 specification, work from your own specification instead of this page. All businesses here are invented.

Condensed version: [revision notes](/resources/oxfordaqa-a-level-business-implementing-a-strategy-revision-notes/) · Questions with answers: [practice set](/resources/oxfordaqa-a-level-business-implementing-a-strategy-practice/) · Other topics: [9725 Business hub](/boards/oxfordaqa/a-level/business/) · Track coverage: [9725 Business tick-list](/checklists/oxfordaqa/a-level/business/) · Check your gaps: [10-minute diagnostics](/diagnostics/)

## Coverage of 3.4.5 at a glance

| Content heading | You need to be able to | Stage |
|---|---|---|
| Strategy implementation | Explain the factors that affect successful implementation (resources, quality of planning and monitoring, leadership, communication, external factors); explain why links between mission, objectives, strategy and functional decisions matter | International A-level only |
| The value of network analysis | Explain the purpose and value of project management and of network analysis; understand, interpret, amend and complete network diagrams; calculate Earliest Start Times, Latest Finish Times and total float; identify the critical path | International A-level only |
| Strategic decision making | Explain the value of strategic planning, why strategies fail and the reasons for strategic drift | International A-level only |

**Where it is tested.** Everything in 3.4 belongs to the Unit 4: Business strategy paper. That paper lasts 1 hour 45 minutes for 80 marks (30% of the International A-level): two case studies, each with five questions worth 40 marks. Network analysis is named in the quantitative skills appendix as a diagram you may need to interpret.

## 1. What makes implementation succeed

A chosen strategy delivers nothing until people, money and time are organised to carry it out. **Grenfold Batteries** makes battery packs for electric buses and has chosen a product development strategy: packs for home solar systems. The specification lists five factors.

| Factor | Why it matters | At Grenfold |
|---|---|---|
| **Resources** | Finance, people, equipment and time must match what the strategy needs | Needs certified installers and a testing rig; if cash is tied up in bus contracts, the launch slips |
| **Quality of planning and monitoring** | A plan sets tasks, owners, budgets and deadlines; monitoring compares progress with the plan | Monthly checks on installer numbers and unit cost reveal problems before money runs out |
| **Leadership** | Leaders set direction, make trade-offs and keep commitment going when results are slow | A chief executive who keeps pulling engineers back to bus orders signals the range is optional |
| **Communication** | Staff, suppliers and investors must understand what is changing and why | Sales staff who first hear of the range in a press release will not sell it with conviction |
| **External factors** | Competitor moves, interest rates, laws or technology can help or block a strategy | A cut in grants for home solar would shrink demand however well Grenfold executes |

The first four can be managed. External factors cannot, but good monitoring lets the firm respond quickly, for example by delaying a launch.

## 2. Why the links from mission to functional decisions matter

The [strategic options guide](/resources/oxfordaqa-a-level-business-strategic-options-choosing-which-markets-to/) sets out the chain from mission to functional decisions. Here the focus is on **why the links matter when implementing**.

- **Coordination:** functions stop making decisions that cancel each other out.
- **Resource allocation:** budgets and staff go where the strategy needs them first.
- **Measurement:** functional targets derived from corporate objectives show whether the strategy is working.
- **Commitment:** staff who see how their task serves the mission accept change more readily.
- **Early warning:** a decision that breaks the chain shows up as a conflict managers can fix.

### Worked example 1: an alignment check at Grenfold

Grenfold's mission is "to make clean energy storage dependable for everyone". Its objective is that home packs earn a quarter of revenue within three years. Test each functional decision against that chain.

| Function | Decision | Linked? |
|---|---|---|
| Marketing | Partner with solar panel installers to sell packs as a bundle | Yes: reaches home buyers directly |
| Operations | Move the best test engineers back onto bus orders to protect monthly output | No: slows certification of home packs |
| Finance | Ring-fence a launch budget for two years | Yes: protects the strategy from short-term cuts |
| Human resources | Keep the existing bonus scheme, paid only on bus-pack output | No: rewards staff for ignoring the new range |

**Judgement.** Two decisions pull against the objective. Grenfold should add home-range targets to the bonus scheme and give the test team a fixed share of engineering hours; otherwise a well-chosen strategy fails because daily decisions reward the old business.

## 3. Project management

A **project** is a one-off set of tasks with a clear goal, a budget and a deadline, such as opening a site, launching a product or installing a new system. **Project management** is the planning, organising and controlling of those tasks.

**Purpose:** to deliver the project on time, within budget and to the required quality, with a named project manager, milestones and progress tracking.

**Value:** it turns a broad strategy into tasks with owners, gives one point of responsibility, lets progress and spending be compared with the plan, and flags risks and resource needs early. **Limits:** it adds cost and paperwork, and a rigid plan adapts slowly.

## 4. Network analysis

**Network analysis** (critical path analysis) is a project-management tool that shows the order of activities, which can run at the same time, and how long the whole project must take.

**Purpose and value.** It finds the **minimum project duration**; identifies **critical activities**, where any delay holds up the whole project; shows **total float** on the others, so staff and equipment can be moved; supports ordering supplies just in time; and becomes a monitoring tool.

**Limitations.** Durations are estimates. It shows nothing about cost or quality. Large networks must be redrawn when plans change, and the critical path can switch.

### Reading a network diagram

- Each **activity** is an arrow labelled with a letter and duration.
- Each **node** is a circle where activities start and end. A common layout shows the node number on the left, **Earliest Start Time (EST)** top right and **Latest Finish Time (LFT)** bottom right.
- An activity cannot begin until every activity ending at its start node is complete.
- The network has one start node and one end node.

### Calculating the values

```
EST (forward pass): start node = 0. For each later node,
  EST = EST of previous node + duration of the activity entering it.
  If several activities enter, take the HIGHEST value.

LFT (backward pass): final node LFT = its EST (the project length).
  Working back, LFT = LFT of next node − duration of the activity leaving.
  If several activities leave, take the LOWEST value.

Total float = LFT (at end node) − duration − EST (at start node)
```

The **critical path** runs through the activities with zero total float. It is the longest route through the network, and its length is the shortest possible project time.

### Worked example 2: Corrabine Studios opens a second studio

Corrabine Studios, a dance-fitness business, is opening a second studio as part of a market development strategy. Times are in weeks.

| Activity | Description | Duration | Depends on | Nodes |
|---|---|---|---|---|
| A | Agree lease | 3 | -- | 1 → 2 |
| B | Design fit-out | 4 | A | 2 → 3 |
| C | Recruit instructors | 5 | A | 2 → 4 |
| D | Building works | 6 | B | 3 → 5 |
| E | Order and receive equipment | 2 | B | 3 → 4 |
| F | Train instructors on equipment | 3 | C, E | 4 → 5 |
| G | Final fit-out and safety inspection | 2 | D, F | 5 → 6 |
| H | Pre-launch marketing | 4 | C, E | 4 → 6 |
| J | Trial week | 1 | G, H | 6 → 7 |

**Forward pass (EST):**

```
Node 1: 0
Node 2: 0 + 3 = 3
Node 3: 3 + 4 = 7
Node 4: via C 3 + 5 = 8; via E 7 + 2 = 9  → highest = 9
Node 5: via D 7 + 6 = 13; via F 9 + 3 = 12 → 13
Node 6: via G 13 + 2 = 15; via H 9 + 4 = 13 → 15
Node 7: 15 + 1 = 16   → project length 16 weeks
```

**Backward pass (LFT):**

```
Node 7: 16
Node 6: 16 − 1 = 15
Node 5: 15 − 2 = 13
Node 4: via F 13 − 3 = 10; via H 15 − 4 = 11 → lowest = 10
Node 3: via D 13 − 6 = 7; via E 10 − 2 = 8   → 7
Node 2: via B 7 − 4 = 3; via C 10 − 5 = 5    → 3
Node 1: 3 − 3 = 0
```

**Total float:**

| Activity | LFT at end − duration − EST at start | Total float |
|---|---|---|
| A | 3 − 3 − 0 | 0 |
| B | 7 − 4 − 3 | 0 |
| C | 10 − 5 − 3 | 2 |
| D | 13 − 6 − 7 | 0 |
| E | 10 − 2 − 7 | 1 |
| F | 13 − 3 − 9 | 1 |
| G | 15 − 2 − 13 | 0 |
| H | 15 − 4 − 9 | 2 |
| J | 16 − 1 − 15 | 0 |

**Critical path: A → B → D → G → J**, minimum duration **16 weeks**. Check: 3 + 4 + 6 + 2 + 1 = 16.

**Interpretation.** Corrabine must watch A, B, D, G and J closely. Recruitment (C) and marketing (H) can each slip 2 weeks, so their staff could help elsewhere if a critical activity falls behind.

### Amending the network

The equipment supplier warns that delivery (E) will take 4 weeks, not 2. E has only 1 week of float, so an extra 2 weeks pushes the project back by 2 − 1 = 1 week.

Redo the forward pass from node 3: node 4 EST = 7 + 4 = 11; node 5 EST = highest of 13 (via D) and 11 + 3 = 14, so 14; node 6 EST = highest of 14 + 2 = 16 and 11 + 4 = 15, so 16; node 7 EST = **17 weeks**.

The new critical path is **A → B → E → F → G → J** (3 + 4 + 4 + 3 + 2 + 1 = 17), and building works now has 1 week of float. A faster supplier, or training on borrowed equipment so F no longer waits for E, would remove the delay.

## 5. Strategic decision making

### The value of strategic planning

**Strategic planning** sets long-term objectives, chooses the strategy and commits resources to it. It makes managers analyse the internal and external position before spending, gives a shared direction for functional decisions, sets targets to monitor against, and reassures investors and lenders. Its value falls when the environment changes fast: a detailed plan dates quickly and managers may cling to it, so outline plans reviewed often can work better.

### Why strategies fail

- **Poor choice:** weak analysis or over-optimistic forecasts.
- **Poor implementation:** any of the five factors in section 1.
- **Broken links:** functional decisions that do not support the strategy.
- **Staff resistance** to a change they do not understand or accept.
- **External shocks** the plan did not allow for, such as a recession.
- **Strategic drift** (below).

### Reasons for strategic drift

**Strategic drift** is a gradual mismatch between a firm's strategy and its changing environment: the firm keeps tweaking what it already does while customers, technology or competitors move faster. Performance slips slowly, then sharply. Reasons include:

- **Past success:** managers assume what worked before will keep working.
- **Culture:** shared beliefs and routines make new ideas seem risky.
- **Incremental change:** small tweaks feel safe but do not match a large external shift.
- **Poor environmental scanning:** managers miss early signs of change.
- **Leadership:** long-serving leaders defend their own strategy.

**Example.** Asherwick Books kept opening high-street shops and refreshing layouts for a decade while its customers moved to e-books and online ordering. Sales per shop slipped until losses forced closures. Better scanning, and leaders willing to question the store-led model, might have prompted an earlier move online.

## Common errors

- Listing the five implementation factors with no link to the case.
- Taking the lowest value on the forward pass or the highest on the backward pass; the rule is highest forward, lowest backward.
- Calculating float as LFT − EST without subtracting the duration.
- Calling the critical path the route with the fewest activities. It is the route with zero float, and the longest in time.
- Assuming every delay extends the project; compare it with the float.
- Describing strategic drift as a sudden collapse.

Next: [practice questions](/resources/oxfordaqa-a-level-business-implementing-a-strategy-practice/) and [case-study technique for 9725](/resources/oxfordaqa-a-level-business-exam-preparation/).

## Official syllabus

OxfordAQA International AS and A-level Business (9725) specification, Version 1.1, for International AS exams May/June 2027 onwards and International A-level exams May/June 2028 onwards. Published by OxfordAQA.
