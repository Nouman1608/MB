---
title: "OxfordAQA A-Level Computer Science: Artificial intelligence (9645) -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Artificial Intelligence Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Artificial intelligence"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 16
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "artificial-intelligence-9645"
description: "Condensed notes on AI traits, neural networks, backpropagation, machine learning, bias, benefits and risks, plus a self-test, for OxfordAQA A-level."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

For full explanations and longer worked examples, read the [AI study guide](/resources/oxfordaqa-a-level-computer-science-artificial-intelligence/) first.

These notes cover section **3.16 Artificial intelligence** (3.16.1 to 3.16.3) of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1 (International AS exams May/June 2025 onwards, International A-level exams May/June 2026 onwards). Everything on this page is **International A-level only**. It is assessed in Unit 4 (Advanced concepts and principles of computer science), a written paper.

Links: [course hub](/boards/oxfordaqa/a-level/computer-science/) · [printable checklist](/checklists/oxfordaqa/a-level/computer-science/) · [AI practice questions](/resources/oxfordaqa-a-level-computer-science-artificial-intelligence-practice/) · [9645 exam preparation](/resources/oxfordaqa-a-level-computer-science-exam-preparation/) · [free 10-minute diagnostics](/diagnostics/)

## 3.16.1 Applications of AI

### Characteristics (learn this wording)

- There is **no one accepted definition** of AI.
- A system is often called artificially intelligent if it solves a **complex problem** and reaches a solution **using a method like a human's**, or one **at least as good as a human's**.
- The problems are typically ones that historically were **not solvable by computers**: they were believed to need human intelligence and **could not be solved algorithmically** on available hardware.

### Narrow vs general

| Narrow AI (all current systems) | Generally intelligent AI |
|---|---|
| Works in one narrow field | Would learn and reason across any field |
| Exists and is widely used | An **area of research** only |
| A translation tool cannot diagnose illness | Some argue deep learning systems are early versions; this is disputed |

### The four application areas

| Area | One-line summary |
|---|---|
| Generative AI | Creates new text, images, audio or code from patterns in its training data |
| Search and recommendation | Ranks results or suggests items from the behaviour of this user and similar users |
| Strategic games | Picks moves by looking ahead at possible positions and judging which lead to a win |
| Medical diagnosis | Analyses scans, results or symptoms and suggests conditions for a clinician to confirm |

Game milestones you can quote: Deep Blue beat world chess champion Garry Kasparov in 1997; AlphaGo beat Lee Sedol 4–1 at Go in 2016.

## 3.16.2 Creating AI systems

### Key definitions

| Term | Definition |
|---|---|
| Neural network | A network of nodes connected together in a similar way to neurons in the human brain |
| Node | A processing unit; it takes weighted inputs and produces an output |
| Weight | A value on a connection; the output of one node is multiplied by it to form an input to the next layer |
| Input layer | Receives the data, one node per input value |
| Hidden layer | Processing layer between input and output |
| Output layer | Gives the network's result |
| Backpropagation | Training method: the output error is passed backwards through the network and the weights are adjusted to reduce it |
| Deep learning | Uses neural networks with **several hidden layers**; more layers allow more complex problems to be solved |
| Machine learning | A type of AI whose **performance improves based on experience** |
| Bias | Systematic unfairness in a system's output, often caused by unrepresentative or unfair training data |

### Method in steps: one node's output

1. Multiply each input by the weight on its connection.
2. Add the products to get the weighted sum.
3. Apply the rule the question gives (for example, "output 1 if the sum is at least a threshold").
4. Pass the result on as a weighted input to the next layer.

**Worked reminder.** A hidden node receives 0.6, 0.2 and 0.9 on connections weighted 0.5, −1.5 and 0.8.
Sum = 0.30 − 0.30 + 0.72 = **0.72**. With a threshold of 0.7 the node outputs 1; with a threshold of 0.8 it outputs 0. Always show the sum before applying the rule.

### Method in steps: counting weights

If every node connects to every node in the next layer, multiply the sizes of each pair of neighbouring layers and add.
A deep network with layers 5, 4, 4, 2 has 5 × 4 + 4 × 4 + 4 × 2 = 20 + 16 + 8 = **44** weights, and **two** hidden layers.

### Method in steps: backpropagation (describe, don't calculate)

1. Initialise weights.
2. Forward pass with a training example whose correct output is known.
3. Calculate the error (correct output compared with actual output).
4. Pass the error backwards from the output layer, adjusting weights to reduce it.
5. Repeat over many examples until the error is small enough.

### Training data and bias

- AI systems are often **trained using data**.
- The system learns whatever patterns the data contains, including unfair ones.
- Bias arises if a group is **under-represented**, or if the **historical decisions** in the data were unfair.
- Care in **selecting** training data, and testing each group separately, reduces the risk.
- Incorrect training data is a separate problem: the system can then output false information with apparent confidence.

## 3.16.3 Benefits and risks

| Benefits (specification examples) | Risks (the specification lists these) |
|---|---|
| Improved, more consistent decision making (e.g. more accurate analysis of medical data) | Elimination of jobs and its social impact |
| Very large data sets analysed quickly | Bias in decision making, e.g. by gender or race |
| Continuous availability | False information output if training data is incorrect |
| Lower cost of operation | Plagiarism |
| Available to more people, and where human expertise is scarce | Use in surveillance systems |
| | Risk to human existence from superintelligent systems |

**Answer frame for "discuss" questions.** Point (benefit or risk) → apply it to the scenario → consequence → (optionally) how it could be reduced. Balance both sides, then finish with a judgement tied to the scenario.

## Must-know distinctions

- **AI vs machine learning.** Machine learning is one *type* of AI: the one that improves with experience.
- **Neural network vs deep learning.** Every deep learning system uses a neural network; "deep" means **several hidden layers**.
- **Forward pass vs backpropagation.** Data flows forward to give an output; the error flows backward to change weights.
- **Narrow vs general.** Today's AI is narrow; general AI is research.
- **Biased data vs incorrect data.** Biased data produces unfair outputs for some groups; incorrect data produces false information. Both are risks, but they are different ones.
- **Generative vs recommendation.** One creates new content; the other selects from existing items.

## Quick self-test

1. Why should you avoid giving a single definition of AI?
2. State the two ways a solution can make a system count as artificially intelligent.
3. Name the three layers of a simple neural network.
4. A node gets inputs 0.4 and 0.5 on weights 1.5 and −0.4. Find the weighted sum.
5. How many weights are there in a fully connected network with layers 3, 6, 2?
6. What does backpropagation pass backwards through the network?
7. What makes a neural network "deep"?
8. Define machine learning.
9. A face-recognition door entry system for a sports club was trained mostly on photos of adults. Suggest one group of members it may perform poorly for, and explain why.
10. Which application area does an AI that writes a cover letter belong to?
11. Give two benefits of using AI in medical diagnosis.
12. Name two risks of generative AI that the specification lists.

### Answers

1. There is no one accepted definition, so describe the characteristics instead.
2. It uses a method similar to one a human might follow, or reaches a solution at least as good as a human's.
3. Input layer, hidden (processing) layer, output layer.
4. 0.4 × 1.5 + 0.5 × (−0.4) = 0.6 − 0.2 = **0.4**.
5. 3 × 6 + 6 × 2 = 18 + 12 = **30**.
6. The error between the actual and the correct output, used to adjust the weights.
7. It has several hidden layers.
8. A type of AI in which the system's performance improves based on experience.
9. Children: they were under-represented in the training data, so the system learned the features of adult faces and may fail to recognise younger members, locking them out.
10. Generative AI.
11. Any two: more accurate, consistent analysis of medical data; scans checked quickly; available at any hour; available where specialists are scarce; lower running cost.
12. Any two: plagiarism; false information if training data is incorrect; bias in its output.

## Where marks are usually lost

- Describing a neural network as "a computer brain" without nodes, layers and weighted connections.
- Saying a simple network has "an input, a processor and an output" instead of naming three **layers**.
- Applying the threshold rule to individual inputs rather than to the weighted **sum**.
- Claiming backpropagation sends the data, not the error, backwards.
- Defining deep learning by the amount of data rather than the number of hidden layers.
- Writing "the AI is biased" without saying which training data caused it.
- Listing benefits or risks generically when the question gives a scenario.
- Calling current systems generally intelligent, or stating superintelligence as a present-day fact.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.16 Artificial intelligence.
