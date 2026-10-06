---
title: "OxfordAQA A-Level Business: Implementing a strategy (9725) -- Revision Notes"
seoTitle: "OxfordAQA Business 9725 Implementing Strategy Notes"
resourceType: "revision-notes"
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
description: "Revision notes for OxfordAQA A-level Business 9725 section 3.4.5: implementation factors, EST, LFT, total float, critical path and strategic drift."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

These notes condense section 3.4.5 Implementing a strategy from the OxfordAQA International AS and A-level Business (9725) specification, Version 1.1, for International AS exams May/June 2027 onwards and International A-level exams May/June 2028 onwards. This content is **International A-level only**, examined on the Unit 4: Business strategy paper. Anyone completing the earlier 9625 course should revise from the 9625 specification. For full explanations and longer worked examples, use the [implementing a strategy study guide](/resources/oxfordaqa-a-level-business-implementing-a-strategy/).

Practise next: [implementing a strategy practice questions](/resources/oxfordaqa-a-level-business-implementing-a-strategy-practice/) · [every 9725 Business topic](/boards/oxfordaqa/a-level/business/) · [tick-list for 9725 Business](/checklists/oxfordaqa/a-level/business/) · [short diagnostic quizzes](/diagnostics/)

## 3.4.5 at a glance

| Content area | Key ideas |
|---|---|
| Strategy implementation | Five success factors: resources, quality of planning and monitoring, leadership, communication, external factors. Why mission, objectives, strategy and functional decisions must link |
| The value of network analysis | Purpose and value of project management and network analysis; read, amend and complete networks; EST, LFT, total float; critical path |
| Strategic decision making | Value of strategic planning; why strategies fail; reasons for strategic drift |

## Key definitions

- **Strategy implementation:** turning a chosen strategy into action by organising resources, people and tasks.
- **Project:** a one-off undertaking with a defined goal, budget and deadline.
- **Project management:** planning, organising and controlling a project so it finishes on time, on budget and to the required quality.
- **Network analysis (critical path analysis):** a diagram-based method that sequences a project's activities and finds its minimum duration.
- **Earliest Start Time (EST):** the soonest an activity can begin, given everything before it.
- **Latest Finish Time (LFT):** the latest an activity can end without delaying the whole project.
- **Total float:** the time an activity can be delayed without extending the project.
- **Critical path:** the chain of activities with zero total float; any delay on it delays the project.
- **Strategic planning:** setting long-term objectives, choosing a strategy and committing resources to it.
- **Strategic drift:** a gradual widening gap between what a firm does and what its environment now requires.

## Five factors for successful implementation

| Factor | Ask yourself in the case |
|---|---|
| Resources | Is there enough finance, skilled labour, capacity and time? |
| Quality of planning and monitoring | Are tasks, owners, budgets and milestones set? Is progress checked against them? |
| Leadership | Is someone driving the strategy and making trade-offs in its favour? |
| Communication | Do staff, suppliers and investors know what is changing and why? |
| External factors | Could competitors, the economy, laws or technology knock the plan off course? |

Internal factors can be managed directly. External factors cannot be controlled, so the value of monitoring is that it allows a quick response.

## Why the links matter

Mission → objectives → strategy → functional decisions. When the links hold:

- functions pull in one direction instead of undermining each other
- money and people go to the activities the strategy needs most
- progress can be measured, because functional targets come from corporate ones
- staff see the purpose of change and commit to it.

When a link breaks, for example a bonus scheme that still rewards the old product, a sound strategy can fail in implementation. See the [strategic options notes](/resources/oxfordaqa-a-level-business-strategic-options-choosing-which-markets-to-revision-notes/) for the chain itself.

## Project management: purpose and value

- **Purpose:** deliver a defined outcome on time, within budget and to quality.
- **Value:** breaks strategy into owned tasks; one person is accountable; spending and progress are tracked; risks are spotted early.
- **Drawbacks:** costs management time; detailed plans can be inflexible.

## Network analysis

### Conventions

- Activities are arrows (letter plus duration). Nodes are circles.
- A node is often split into node number (left), EST (top right) and LFT (bottom right).
- An activity leaving a node cannot start until every activity entering that node has finished.
- One start node, one end node.

### Method in steps

```
1. Forward pass: start node EST = 0.
   Node EST = previous node EST + activity duration.
   Several arrows in → use the HIGHEST.
2. Final node: LFT = EST = project duration.
3. Backward pass: node LFT = next node LFT − activity duration.
   Several arrows out → use the LOWEST.
4. Total float for each activity:
   LFT (end node) − duration − EST (start node).
5. Critical path = activities with total float 0.
6. Check: add the durations along the critical path;
   the sum must equal the project duration.
```

### Formula table

| Quantity | How to find it |
|---|---|
| EST of a node | Highest of (EST of earlier node + duration) over every arrow in |
| LFT of a node | Lowest of (LFT of later node − duration) over every arrow out |
| Total float | LFT at end node − duration − EST at start node |
| Minimum project duration | EST (= LFT) of the final node |

### Small worked reminder

Two arrows enter node 5: activity P (4 days) from node 3, whose EST is 6, and activity R (3 days) from node 4, whose EST is 8.

```
Via P: 6 + 4 = 10      Via R: 8 + 3 = 11
EST at node 5 = 11 (the higher)
```

If node 5's LFT is 12, total float on P = 12 − 4 − 6 = **2 days**; on R = 12 − 3 − 8 = **1 day**.

### Amending a network

When a duration changes:

1. Compare the extra time with the activity's total float.
2. Extra time ≤ float → project length unchanged, but the float is used up.
3. Extra time > float → project extends by (extra time − float).
4. Redo both passes from the changed point; the critical path may move.

When a new dependency is added, redraw that part of the network and redo both passes.

### Value and limitations of network analysis

| Value | Limitations |
|---|---|
| Gives the shortest possible project time | Durations are estimates and may be wrong |
| Shows which activities need tight control | Ignores cost and quality |
| Float shows where resources can be moved | Large networks are slow to draw and update |
| Supports just-in-time ordering of inputs | The critical path can change during the project |
| Becomes a tool to monitor progress | Encourages focus on time over other objectives |

## Strategic decision making

**Value of strategic planning:** forces analysis before committing resources; gives a shared direction; sets targets to monitor; builds investor and lender confidence. **Weakness:** detailed plans date quickly in fast-changing markets.

**Why strategies fail:** poor choice (weak analysis, optimistic forecasts); poor implementation (any of the five factors); functional decisions that do not support the strategy; staff resistance; external shocks; strategic drift.

**Reasons for strategic drift:**

- past success breeds complacency
- a strong culture treats new ideas as threats
- change is incremental while the environment shifts sharply
- weak scanning of customers, technology and competitors
- leaders protect the strategy they built.

## Must-know distinctions

- **EST vs LFT:** EST comes from the forward pass (take the highest); LFT comes from the backward pass (take the lowest).
- **Total float vs zero float:** activities with float can slip a little; critical activities cannot slip at all.
- **Critical path vs shortest route:** the critical path is the longest route in time, and it sets the shortest project duration.
- **Strategy failure vs strategic drift:** failure can be sudden and have many causes; drift is slow and comes from not adapting.
- **Planning vs implementing:** a good plan can still fail if resources, leadership or communication are weak.

## Quick self-test

Pyrford Signs is installing a digital sign for a client. Times are in days.

| Activity | Duration | Depends on | Nodes |
|---|---|---|---|
| A Site survey | 4 | -- | 1 → 2 |
| B Draft designs | 2 | A | 2 → 3 |
| C Build sign frame | 7 | A | 2 → 4 |
| D Client approves designs | 3 | B | 3 → 4 |
| E Install and test | 2 | C, D | 4 → 5 |

1. What is the EST at node 3?
2. What is the EST at node 4?
3. What is the LFT at node 3?
4. Calculate the total float on activity D.
5. State the critical path and minimum duration.
6. Client approval (D) now takes 6 days. Find the new project duration and critical path.
7. List the five factors that affect successful implementation of a strategy.
8. Give **two** limitations of network analysis.
9. Felsham Dairies kept adding new flavours of full-fat milk for years while shoppers switched to plant-based drinks. Name this problem and give one likely reason for it.
10. Why does linking functional targets to corporate objectives help a business monitor its strategy?

### Answers

1. 4 + 2 = **6 days**.
2. Via C: 4 + 7 = 11; via D: 6 + 3 = 9. Highest: **11 days**.
3. Project length = 11 + 2 = 13. Node 4 LFT = 13 − 2 = 11; node 3 LFT = 11 − 3 = **8 days**.
4. 11 − 3 − 6 = **2 days**.
5. **A → C → E**, **13 days** (4 + 7 + 2).
6. D's 3 extra days exceed its 2 days of float by 1, so the project takes **14 days**. Node 4 EST = 6 + 6 = 12, then 12 + 2 = 14. New critical path **A → B → D → E** (4 + 2 + 6 + 2 = 14).
7. Resources; quality of planning and monitoring; leadership; communication; external factors.
8. Any two: durations are only estimates; it ignores cost and quality; large networks are hard to update; the critical path can change.
9. **Strategic drift.** Likely reasons: past success with full-fat milk, a culture that resisted new products, or poor scanning of changing tastes.
10. Each function's results can be compared with targets that come from the corporate objective, so managers can see which part of the strategy is falling behind.

## Where marks are usually lost

- Taking the lower value at a node on the forward pass.
- Taking the higher value at a node on the backward pass.
- Writing total float as LFT − EST and forgetting to subtract the duration.
- Using the LFT of the activity's start node instead of its end node.
- Stating the critical path without the project duration, or without checking the durations add up to it.
- Saying a delay always extends the project, without comparing it with the float.
- Listing implementation factors without saying how each would help or hinder the case business.
- Defining strategic drift as a single bad decision rather than a gradual mismatch.

## Official syllabus

OxfordAQA International AS and A-level Business (9725) specification, Version 1.1, for International AS exams May/June 2027 onwards and International A-level exams May/June 2028 onwards. Published by OxfordAQA.
