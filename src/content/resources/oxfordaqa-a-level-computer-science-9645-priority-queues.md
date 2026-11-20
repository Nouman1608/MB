---
title: "OxfordAQA A-Level Computer Science (9645): Priority Queues"
seoTitle: "OxfordAQA A-Level CS 9645 Priority Queues Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 10 – Advanced data structures"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 10.4
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "advanced-data-structures"
  - qualification: "a-level"
    topic: "advanced-data-structures"
    subtopic: "priority-queues-oxfordaqa-alevel-cs"
description: "OxfordAQA 9645 sub-topic 3.10.4 in depth: priority queues, enqueue and dequeue, uses, array implementations (ordered and unordered) and empty and full tests, with traces."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.10.4 Priority Queues** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.10 Advanced data structures (A-level). The specification asks you to know what a priority queue is; to apply the operations **add an item (enqueue)** and **remove an item (dequeue)** to data stored in one; to describe situations in which a priority queue is an appropriate data structure (it notes that priority queues can be used to implement some graph algorithms, such as breadth-first search or Dijkstra's algorithm); to understand how to **implement a priority queue using a one-dimensional array**; and, for array implementations, to understand how to **test whether the priority queue is empty or full**.

For quick recall use the [priority queues revision notes](/resources/oxfordaqa-a-level-computer-science-9645-priority-queues-revision-notes/), and test yourself with the [priority queues practice questions](/resources/oxfordaqa-a-level-computer-science-9645-priority-queues-practice/). The [advanced data structures study guide](/resources/oxfordaqa-a-level-computer-science-advanced-data-structures/) covers all of topic 3.10. Ordinary queues are covered in the [queues study guide](/resources/oxfordaqa-a-level-computer-science-9645-queues-oxfordaqa-alevel-cs/). Code is Python, and the traces shown were produced by running the code.

## What a priority queue is

In an ordinary queue, items leave in the order they arrived (first in, first out). In a **priority queue**, every item has a **priority**, and the item that leaves next is the one with the **highest priority**, whatever its arrival time. Items with the **same priority** leave in the order they arrived, so that equal items are treated fairly.

The specification does not fix whether a high priority is shown by a small number or a large one, so a question will say. In this guide, **a smaller number means a higher priority**: priority 1 is served before priority 2.

The two operations are:

- **Enqueue:** add an item with its priority.
- **Dequeue:** remove and return the item with the highest priority (and, among equals, the one that has waited longest).

## When a priority queue is appropriate

Use one when items must be processed in order of **importance** rather than arrival time.

- **Operating system scheduling:** processes with a higher priority get the processor first.
- **Print queues:** a short urgent job can go ahead of a long routine one.
- **Hospital accident and emergency:** patients are seen in order of how serious their condition is, not in order of arrival.
- **Event handling:** an interrupt from a fire alarm is dealt with before one from a keyboard.
- **Graph algorithms:** Dijkstra's shortest-path algorithm repeatedly needs the unvisited vertex with the smallest distance so far, which a priority queue provides. The specification also mentions breadth-first search.

A good answer names the situation **and** the reason that priority order matters: "In accident and emergency, a patient with a life-threatening injury must be treated before someone with a minor injury who arrived earlier."

## Implementing with a one-dimensional array

Each entry in the array holds a priority and an item. There are two common designs.

### Design 1: keep the array ordered

Insert each new item **in the right place** so that the array is always in priority order, with the highest priority at index 0.

- **Enqueue:** find the first position whose priority is *greater* than the new item's priority (so that equal priorities stay in arrival order), move the items from that position onwards one place to the right, and put the new item in the gap.
- **Dequeue:** take the item at index 0 and move the others one place to the left.

### Design 2: keep the array unordered

- **Enqueue:** put the item at the next free position. This is quick.
- **Dequeue:** scan the array to find the entry with the highest priority (the first one found, if there is a tie), remove it and close the gap.

The trade-off: in design 1 the work is done when adding; in design 2 it is done when removing. Which is better depends on how often each operation is used.

### The tests for empty and full

An array has a fixed size. The queue keeps a count of the items it holds.

- **Empty:** `count == 0`.
- **Full:** `count == capacity`, where capacity is the length of the array.

Both must be checked **before** an operation: do not dequeue from an empty queue and do not enqueue into a full one.

### Code for design 1

```python
class PriorityQueue:
    def __init__(self, capacity):
        self.capacity = capacity
        self.data = [None] * capacity
        self.count = 0

    def is_empty(self):
        return self.count == 0

    def is_full(self):
        return self.count == self.capacity

    def enqueue(self, priority, item):
        if self.is_full():
            return False
        i = 0
        while i < self.count and self.data[i][0] <= priority:
            i = i + 1
        for j in range(self.count, i, -1):
            self.data[j] = self.data[j - 1]
        self.data[i] = (priority, item)
        self.count = self.count + 1
        return True

    def dequeue(self):
        if self.is_empty():
            return None
        top = self.data[0]
        for j in range(self.count - 1):
            self.data[j] = self.data[j + 1]
        self.data[self.count - 1] = None
        self.count = self.count - 1
        return top
```

The `while` loop skips every item whose priority is less than or equal to the new one, so the new item is placed **after** items of equal priority. The `for` loop moves the later items one place right, starting from the end so that nothing is overwritten.

## Worked trace

A queue of capacity 5 is used for jobs. Each entry is shown as priority:item, and `-` is an empty position.

| Operation | Result | Count | Array (index 0 to 4) |
|---|---|---|---|
| enqueue 3:report | True | 1 | 3:report, -, -, -, - |
| enqueue 1:alarm | True | 2 | 1:alarm, 3:report, -, -, - |
| enqueue 2:update | True | 3 | 1:alarm, 2:update, 3:report, -, - |
| enqueue 1:disk | True | 4 | 1:alarm, 1:disk, 2:update, 3:report, - |
| dequeue | 1:alarm | 3 | 1:disk, 2:update, 3:report, -, - |
| enqueue 3:email | True | 4 | 1:disk, 2:update, 3:report, 3:email, - |
| enqueue 2:backup | True | 5 | 1:disk, 2:update, 2:backup, 3:report, 3:email |
| enqueue 4:extra | False (full) | 5 | 1:disk, 2:update, 2:backup, 3:report, 3:email |
| dequeue | 1:disk | 4 | 2:update, 2:backup, 3:report, 3:email, - |
| dequeue | 2:update | 3 | 2:backup, 3:report, 3:email, -, - |

Points the trace shows:

- The first dequeue returned `1:alarm`, not `3:report`, even though the report arrived first. That is the priority rule.
- `1:disk` was placed **after** `1:alarm`, which has the same priority, because it arrived later.
- `2:backup` went in between `2:update` and `3:report`: after the equal priority, before the lower one.
- `4:extra` was refused because the queue was full (count equals capacity).

### The unordered design on the same data

Enqueue 3:report, 1:alarm, 2:update and 1:disk into an unordered array and the array holds them in arrival order: 3:report, 1:alarm, 2:update, 1:disk. A dequeue scans for the smallest priority. The first 1 found is 1:alarm, which is removed, leaving 3:report, 2:update, 1:disk. The next dequeue finds 1:disk. The result is the same as in design 1, and the first of two equal items is chosen. The difference is the effort: enqueue is a single assignment, but each dequeue examines every item.

## Priority queue or ordinary queue?

| Feature | Ordinary queue | Priority queue |
|---|---|---|
| Next item out | The one that arrived first | The one with the highest priority |
| Items of equal priority | (not applicable) | Leave in arrival order |
| Array implementation | Pointers or a count | Either ordered insertion or a scan on removal |
| Typical use | Print jobs, keyboard buffer | Scheduling, emergency triage, Dijkstra's algorithm |

## Choosing between the two designs

| Scenario | Better design | Reason |
|---|---|---|
| Many items are added, and only a few are removed | Unordered | Each enqueue is a single assignment; the scan happens only when an item is removed |
| Items are added occasionally and removed constantly | Ordered | The highest priority item is always at index 0, so a dequeue needs no search |
| The queue is very short (five or six items) | Either | The difference in work is tiny |

For a queue that holds a thousand items, an ordered insertion may have to move several hundred items on average, while an unordered removal has to look at every one of them. Neither design is best in every case, which is why an exam question will ask you to **justify** your choice for a scenario.

## Link to graph algorithms

In Dijkstra's algorithm (sub-topic 3.11.1) the next vertex to be processed is always the unvisited vertex with the smallest distance found so far. If the vertices are held in a priority queue, with the distance as the priority, each dequeue delivers exactly that vertex. When a shorter route to a vertex is found, its entry is updated or a new entry is added with the smaller distance. This is the reason that the specification links priority queues with graph algorithms.

## Exam technique

- **State the convention** at the start of a trace: which priority number is highest.
- **Show the array after every operation.** Use a table with a column for the count.
- **Place equal priorities in arrival order.**
- **Check empty and full before every operation,** and say so when the operation is refused.
- **Give a reason when describing a use:** the situation and why order by priority matters.
- **For comparison questions,** say where the work is done: on insertion or on removal.

## Common mistakes

- Treating the queue as ordinary first in, first out.
- Inserting an item with the same priority before items that arrived earlier.
- Forgetting to shift the items when inserting or removing in an ordered array.
- Testing for full with `count == capacity - 1`.
- Dequeuing from an empty queue.
- Mixing up high priority with a high number, when the question defines a small number as the highest.

## Next steps

- [Priority queues revision notes](/resources/oxfordaqa-a-level-computer-science-9645-priority-queues-revision-notes/)
- [Priority queues practice questions](/resources/oxfordaqa-a-level-computer-science-9645-priority-queues-practice/)
- [Dictionaries study guide](/resources/oxfordaqa-a-level-computer-science-9645-dictionaries/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.10.4 Priority Queues.
