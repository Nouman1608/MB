---
title: "OxfordAQA A-Level Computer Science (9645): Creating artificially intelligent systems -- Revision Notes"
seoTitle: "OxfordAQA 9645 Creating AI Systems Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 16 – Artificial intelligence"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 16.2
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "artificial-intelligence-9645"
  - qualification: "a-level"
    topic: "artificial-intelligence-9645"
    subtopic: "creating-artificially-intelligent-systems-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.16.2: neural network structure, backpropagation, deep learning, machine learning, training data and bias."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.16.2 Creating artificially intelligent systems** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (International A-level content in topic 3.16, examined in Unit 4). For worked examples, see the [creating AI systems study guide](/resources/oxfordaqa-a-level-computer-science-9645-creating-artificially-intelligent-systems/), then practise with the [creating AI systems practice questions](/resources/oxfordaqa-a-level-computer-science-9645-creating-artificially-intelligent-systems-practice/).

## What the specification requires

- Know what a **neural network** is and how it can be used.
- Describe the **structure** of a neural network: nodes in layers, weighted outputs forming the next layer's inputs; a simple network has **input, hidden and output layers**.
- Know that **backpropagation** is commonly used to train a neural network.
- Know that **deep learning** uses several hidden layers; more layers allow more complex problems.
- Know that **machine learning** improves performance based on experience.
- Know that systems are trained using data, and that **care must be taken in selecting training data to avoid bias**.

## Key terms

| Term | Meaning |
|---|---|
| Neural network | Nodes connected in layers, similar to neurons in a brain |
| Node | Combines weighted inputs and passes on an output |
| Weight | A number on a connection showing how strongly one node affects the next |
| Input layer | Receives the data |
| Hidden layer | Processing layer between input and output |
| Output layer | Gives the result |
| Backpropagation | Passes the error backwards through the network to adjust the weights |
| Deep learning | Neural networks with several hidden layers |
| Machine learning | Performance improves based on experience |
| Training data | Examples the system learns from |
| Bias | Systematically unfair or inaccurate results, often from unrepresentative data |

## Network structure

| Layer | Role |
|---|---|
| Input | Takes in the data (for example pixel values) |
| Hidden | Processes; its outputs are weighted to form inputs to the next layer |
| Output | Gives the answer (for example a category) |

- Weights on connections between layers are what the network learns.
- Number of weights between layers = nodes in one layer × nodes in the next. A 4-5-3 network has 4 × 5 + 5 × 3 = **35** weights.

### Forward pass reminder

Hidden node H1: weights 0.5 and 0.25, bias 0. Hidden node H2: weights −1 and 1, bias 0.5. Output: weights 2 and 1 from H1 and H2, bias −1. Hidden nodes output the total if positive, otherwise 0.

| Inputs | H1 | H2 | Output |
|---|---|---|---|
| (1, 2) | 0.5 + 0.5 = 1.0 | −1 + 2 + 0.5 = 1.5 | 2 + 1.5 − 1 = 2.5 |
| (3, 0) | 1.5 | −2.5, so 0 | 3 + 0 − 1 = 2.0 |

## Training by backpropagation

1. Forward pass: run an example through the network.
2. Compare the output with the correct answer to get the **error**.
3. Pass the error **backwards** through the layers to find each weight's contribution.
4. **Adjust the weights** to reduce the error.
5. Repeat with many examples.

Single-weight reminder (input 2, target 3, learning rate 0.1, start weight 0.5): the weight goes 0.5, 0.9, 1.14, 1.284, 1.3704 and the output goes 1.0, 1.8, 2.28, 2.568, 2.7408 towards the target 3. The error shrinks each pass.

## Deep learning and machine learning

- **Deep learning** = several hidden layers. More layers allow **more complex problems**, but need more data and computing power.
- **Machine learning** is a type of AI where the system learns from **experience** (training data), rather than from fixed rules written by a programmer.
- Neural networks trained by backpropagation are machine learning.

## Training data and bias

- Systems are often trained on data; the data shapes the system.
- Poor data gives poor or **biased** systems.

| Problem with the data | Effect | Remedy |
|---|---|---|
| Under-represents a group or class | Poor accuracy for that group | Include representative examples |
| Reflects past unfair decisions | The system repeats the unfairness | Review and correct the data |
| Wrong labels | The system learns wrong answers | Check the labelling |
| Too little data | Poor generalisation | Collect more varied data |

Example: 900 images of A and 100 of B. A model that always answers "A" scores 90% on this data but never recognises B.

- Keep some data back for **testing** on unseen examples. High accuracy on the training data but low accuracy on new data (for example 99% against 71%) means the system has learned the examples rather than the pattern.
- Check results for **each group**, not just overall.

## Exam traps

- **Hidden layer** simply lies between input and output.
- **Backpropagation** passes the **error** backwards, not the data.
- **Deep** means several hidden layers, not just a big network.
- **Machine learning is a type of AI**, not the same thing.
- **Bias** comes mostly from the training data; more data does not fix it unless it is representative.
- **Weights** are what the network learns.
- **Test data** must be separate from training data.

## Quick self-test

1. What is a neural network?
2. Name the three layers of a simple neural network.
3. What is a weight?
4. How many weights are there in a 3-4-2 network?
5. What is backpropagation used for?
6. What does the backward pass carry?
7. What is deep learning?
8. Why use more layers?
9. What is machine learning?
10. What is the effect of under-represented groups in training data?
11. Why is some data kept back for testing?
12. In the forward pass reminder, what is the output for inputs (1, 2)?

### Answers

1. A network of nodes connected in layers, similar to neurons in the brain.
2. Input, hidden and output layers.
3. A number on a connection that sets how strongly one node influences the next.
4. 3 × 4 + 4 × 2 = 20.
5. Training the network by adjusting the weights to reduce error.
6. The error, so that each weight can be adjusted.
7. A neural network with several hidden layers.
8. More layers allow more complex problems to be solved.
9. A type of AI in which the performance of the system improves based on experience.
10. The system performs poorly (or unfairly) for those groups.
11. To check that the system works on unseen examples.
12. 2.5

## More on this topic

- [Creating AI systems study guide](/resources/oxfordaqa-a-level-computer-science-9645-creating-artificially-intelligent-systems/)
- [Creating AI systems practice questions](/resources/oxfordaqa-a-level-computer-science-9645-creating-artificially-intelligent-systems-practice/)
- [Applications of AI revision notes](/resources/oxfordaqa-a-level-computer-science-9645-applications-of-artificial-intelligence-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.16.2 Creating artificially intelligent systems.
