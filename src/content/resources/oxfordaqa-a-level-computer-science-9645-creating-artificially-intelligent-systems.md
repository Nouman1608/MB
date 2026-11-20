---
title: "OxfordAQA A-Level Computer Science (9645): Creating artificially intelligent systems"
seoTitle: "OxfordAQA 9645 Creating AI Systems Study Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.16.2 in depth: neural network structure, weights, backpropagation, deep learning, machine learning, training data and bias."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.16.2 Creating artificially intelligent systems** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.16 Artificial intelligence. It is International A-level content, examined in Unit 4, the written paper. The specification asks you to know what a **neural network** is and how it can be used, to describe its **structure**, to know that **backpropagation** is commonly used to train one, to know that **deep learning** uses several hidden layers, to know that **machine learning** improves performance with experience, and to know that AI systems are trained on data and that **care must be taken when selecting training data so that a system does not develop bias**.

The topic-level [artificial intelligence study guide](/resources/oxfordaqa-a-level-computer-science-artificial-intelligence/) covers all of topic 3.16 in one pass. This page gives the creation of AI systems its own space, with a complete forward pass, a worked training example and a bias example, all calculated step by step. Afterwards use the [creating AI systems revision notes](/resources/oxfordaqa-a-level-computer-science-9645-creating-artificially-intelligent-systems-revision-notes/) and the [creating AI systems practice questions](/resources/oxfordaqa-a-level-computer-science-9645-creating-artificially-intelligent-systems-practice/). The previous sub-topic covers [applications of AI](/resources/oxfordaqa-a-level-computer-science-9645-applications-of-artificial-intelligence/).

## What a neural network is

A **neural network** is a network of **nodes** connected together in a way similar to the neurons in a human brain. A node receives inputs, combines them, and passes an output on. Neural networks can learn to recognise patterns that are hard to describe with fixed rules, such as handwriting, speech, faces or the content of a photograph, and are used in many of the applications in the previous sub-topic.

### Structure

The nodes are arranged in **layers**. The **outputs of the nodes in one layer are weighted** to form the inputs to the nodes in the next layer. A simple network has three layers:

| Layer | Role |
|---|---|
| **Input layer** | Receives the data, for example the brightness of each pixel of an image |
| **Hidden layer** | Does the processing; its nodes are neither inputs nor outputs |
| **Output layer** | Gives the result, for example the probability that the image is each of ten digits |

A **weight** is a number on each connection that says how strongly the sending node influences the receiving node. A positive weight encourages, a negative weight discourages, and a weight near zero means little influence. Each node adds up its weighted inputs (and usually a constant called a bias), then applies an **activation function** that decides what it outputs. The specification does not require any particular activation function.

**Counting weights.** A network with 4 input nodes, 5 hidden nodes and 3 output nodes has 4 × 5 = 20 weights from input to hidden and 5 × 3 = 15 from hidden to output, so **35 weights** altogether. A larger network for recognising 28 × 28 pixel images with layers of 784, 128, 64 and 10 nodes has 784 × 128 + 128 × 64 + 64 × 10 = **109,184** weights. Learning means finding good values for all of them.

### Worked example 1: a forward pass

A network has two input nodes, two hidden nodes (H1 and H2) and one output node. Each hidden node uses the activation "output the total if it is positive, otherwise 0". The weights are:

- H1: weight 0.5 from input 1, weight 0.25 from input 2, bias 0.
- H2: weight −1 from input 1, weight 1 from input 2, bias 0.5.
- Output node: weight 2 from H1, weight 1 from H2, bias −1 (no activation, so the total is the output).

For the inputs (1, 2):

- H1 = 0.5 × 1 + 0.25 × 2 + 0 = **1.0**
- H2 = −1 × 1 + 1 × 2 + 0.5 = **1.5**
- Output = 2 × 1.0 + 1 × 1.5 − 1 = **2.5**

For the inputs (3, 0):

- H1 = 0.5 × 3 + 0.25 × 0 = **1.5**
- H2 = −1 × 3 + 1 × 0 + 0.5 = −2.5, which is negative, so the output is **0**
- Output = 2 × 1.5 + 1 × 0 − 1 = **2.0**

Different inputs, passed through the same weights, give different outputs. The network "knows" only what is stored in its weights.

## Deep learning

A **deep learning** system uses a neural network with **several hidden layers**. Each layer can build on the patterns found by the one before: early layers might detect edges in an image, later layers shapes, and the last layers whole objects. Using **more layers allows more complex problems to be solved**, but needs more data and more computing power to train.

## Training with backpropagation

A new network has arbitrary weights, so its outputs are poor. **Backpropagation** is the method **commonly used to train** a neural network. In outline:

1. Give the network a training example and run a **forward pass** to get its output.
2. Compare the output with the **correct answer** to find the **error**.
3. Work **backwards** from the output layer through the hidden layers, finding how much each weight contributed to the error.
4. **Adjust each weight** slightly in the direction that reduces the error.
5. Repeat for many examples, many times.

**Worked example 2: adjusting one weight.** Take the simplest case, one node whose output is weight × input. The input is 2, the target is 3, and the starting weight is 0.5. After each pass the weight is changed by subtracting 0.1 × error × input, where the error is (output − target).

| Pass | Weight | Output | Error | Squared-error measure (½ × error²) | Adjustment | New weight |
|---|---|---|---|---|---|---|
| 1 | 0.5 | 1.0 | −2.0 | 2.0 | −0.1 × (−2.0) × 2 = +0.4 | 0.9 |
| 2 | 0.9 | 1.8 | −1.2 | 0.72 | +0.24 | 1.14 |
| 3 | 1.14 | 2.28 | −0.72 | 0.2592 | +0.144 | 1.284 |
| 4 | 1.284 | 2.568 | −0.432 | 0.0933 | +0.0864 | 1.3704 |

The error falls on every pass and the weight moves towards 1.5, the value that gives exactly 3. In a real network the same idea is applied to every weight, passing the error backwards through the layers, which is why the method is called backpropagation.

## Machine learning

**Machine learning** is a type of artificial intelligence in which the **performance of the system is improved based on experience**. Instead of being given fixed rules by a programmer, the system learns from examples. Training a neural network with backpropagation is machine learning: the experience is the training data, and performance (accuracy on the task) improves as the weights are adjusted.

## Training data and bias

AI systems are often **trained using data**, and the quality of the data decides the quality of the system. **Care must be taken when selecting the training data so that the system does not develop bias.**

**Worked example 3: unrepresentative data.** A system is trained to recognise two kinds of object, A and B, from 1,000 images: 900 of A and only 100 of B. A model that always answers "A" would be right 900 / 1,000 = **90%** of the time on this data, yet it would never recognise B. The data under-represents B, so the system is poor at the thing it was never shown enough of.

Good practice in choosing training data:

- make it **representative** of everyone and everything the system will meet, including all groups of people;
- make it **accurate and correctly labelled**, since errors in the data become errors in the system;
- make it **large enough** and varied enough;
- keep some data **back for testing**, so the system is judged on examples it has not seen. A system that scores 99% on its training data but 71% on unseen data has learned the training examples rather than the underlying pattern.
- **review the results for different groups**, not just the overall accuracy.

If historical data reflects past unfairness, a system trained on it will learn and repeat that unfairness. The risks of bias are considered in the [benefits and risks sub-topic](/resources/oxfordaqa-a-level-computer-science-9645-benefits-risks-of-artificial-intelligence/).

## Exam technique

- **Structure questions:** name the three layers and say how the layers are linked (weighted outputs become inputs).
- **Deep learning:** say "several hidden layers", and link more layers to more complex problems.
- **Backpropagation:** say that error is calculated at the output and passed backwards, and weights are adjusted to reduce it.
- **Bias:** link the cause (unrepresentative or prejudiced training data) to the effect (unfair or inaccurate output).

## Common mistakes

- Saying a neural network contains a rule written by a programmer for each decision.
- Confusing the hidden layer with a secret layer; it is simply between input and output.
- Saying backpropagation passes data backwards. It passes the error backwards to adjust weights.
- Believing that more data always fixes bias. The data must be representative.
- Describing machine learning and artificial intelligence as identical. Machine learning is a type of AI.

## Next steps

- [Creating AI systems revision notes](/resources/oxfordaqa-a-level-computer-science-9645-creating-artificially-intelligent-systems-revision-notes/)
- [Creating AI systems practice questions](/resources/oxfordaqa-a-level-computer-science-9645-creating-artificially-intelligent-systems-practice/)
- [Benefits and risks of AI study guide](/resources/oxfordaqa-a-level-computer-science-9645-benefits-risks-of-artificial-intelligence/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.16.2 Creating artificially intelligent systems.
