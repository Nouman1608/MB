---
title: "OxfordAQA A-Level Computer Science (9645): Creating artificially intelligent systems -- Practice Questions"
seoTitle: "OxfordAQA 9645 Creating AI Systems Practice Questions"
resourceType: "practice-questions"
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
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.16.2 Creating AI systems: neural network layers and weights, backpropagation, deep learning and training data bias."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.16.2 Creating artificially intelligent systems** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: the structure of a neural network, backpropagation, deep learning, machine learning, and the selection of training data to avoid bias.

Related pages: [creating AI systems study guide](/resources/oxfordaqa-a-level-computer-science-9645-creating-artificially-intelligent-systems/) ·
[creating AI systems revision notes](/resources/oxfordaqa-a-level-computer-science-9645-creating-artificially-intelligent-systems-revision-notes/)

## Section A

**1.** Name the **three** layers of a simple neural network. **[2]**

**2.** State what is meant by **machine learning**. **[1]**

**3.** State the difference between a neural network and a deep learning system. **[1]**

## Section B

**4.** Describe how the nodes of a neural network are connected, and explain the role of the weights. **[3]**

**5.** A neural network has 2 input nodes, then a hidden layer of 3 nodes, then a second hidden layer of 3 nodes, then 1 output node. Every node is connected to every node in the next layer.

**(a)** Calculate the number of weights. **[2]**
**(b)** State whether this is a deep learning system, with a reason. **[1]**

**6.** A network has 2 inputs, two hidden nodes (A and B) and one output node.

- Hidden node A: weight 1 from input 1, weight −1 from input 2, bias 0.5.
- Hidden node B: weight 0.5 from input 1, weight 0.5 from input 2, bias −1.
- Each hidden node outputs its total if it is positive, otherwise 0.
- Output node: weight 2 from A, weight 3 from B, bias −1. It outputs its total.

**(a)** Calculate the output for the inputs (2, 1), showing the outputs of A and B. **[4]**
**(b)** Calculate the output for the inputs (0, 2). **[3]**

**7.** A single node produces output = weight × input. The input is 4, the target output is 2, the starting weight is 1.0, and after each pass the weight is reduced by 0.05 × error × input, where error = output − target.

**(a)** Calculate the output, the error and the new weight after the first pass. **[3]**
**(b)** Calculate the new weight after the second pass. **[2]**
**(c)** State what happens to the error over repeated passes and name the method used for networks with many layers. **[2]**

**8.** Describe how backpropagation is used to train a neural network. **[4]**

**9.** A bank trains a system to approve or refuse loans using 1,000 past applications. Group X made 800 of the applications, of which 640 were approved. Group Y made 200 of the applications, of which 40 were approved.

**(a)** Calculate the approval rate for each group. **[2]**
**(b)** Explain how a system trained on this data could develop bias. **[2]**
**(c)** Suggest **two** ways the bank could reduce the risk of bias. **[2]**

**10.** A system recognises two kinds of object using 1,000 training images: 900 of kind A and 100 of kind B. It always answers "A".

**(a)** Calculate its accuracy on the training images. **[1]**
**(b)** Explain why this accuracy is misleading. **[2]**

## Answers

**1.** Input layer **[1]**, hidden layer **[1]**, output layer **[1]**; award **[1]** for two correct and **[2]** for all three. **[2]**

**2.** A type of AI in which the performance of the system is improved based on experience **[1]**.

**3.** A deep learning system uses a neural network with several hidden layers **[1]**.

**4.** The nodes are arranged in layers **[1]**. The output of each node in one layer is connected to nodes in the next layer **[1]**. Each connection has a weight that is multiplied by the output, setting how strongly that node influences the next one, and the weights are what is adjusted when the network learns **[1]**. **[3]**

**5. (a)** 2 × 3 = 6 **[1]**; 3 × 3 = 9 and 3 × 1 = 3, so the total is 6 + 9 + 3 = **18** **[1]**. **[2]**
**(b)** Yes, because it has more than one (several) hidden layers **[1]**.

**6. (a)** A = 1 × 2 − 1 × 1 + 0.5 = **1.5** **[1]**. B = 0.5 × 2 + 0.5 × 1 − 1 = **0.5** **[1]**. Output = 2 × 1.5 + 3 × 0.5 − 1 **[1]** = **3.5** **[1]**. **[4]**
**(b)** A = 0 − 2 + 0.5 = −1.5, so A outputs 0 **[1]**. B = 0 + 1 − 1 = 0, so B outputs 0 **[1]**. Output = 2 × 0 + 3 × 0 − 1 = **−1** **[1]**. **[3]**

**7. (a)** Output = 1.0 × 4 = **4** **[1]**; error = 4 − 2 = **2** **[1]**; new weight = 1.0 − 0.05 × 2 × 4 = **0.6** **[1]**. **[3]**
**(b)** Output = 0.6 × 4 = 2.4, error = 0.4 **[1]**; new weight = 0.6 − 0.05 × 0.4 × 4 = **0.52** **[1]**. **[2]**
**(c)** The error becomes smaller on each pass (the output approaches the target) **[1]**. The method is backpropagation **[1]**. **[2]**

**8.** Award up to **[4]**: a training example is run through the network to produce an output (forward pass) **[1]**; the output is compared with the correct answer to find the error **[1]**; the error is passed backwards from the output layer through the hidden layers, working out how much each weight contributed to it **[1]**; each weight is adjusted to reduce the error, and the process is repeated with many examples **[1]**.

**9. (a)** Group X: 640 / 800 = **80%** **[1]**; group Y: 40 / 200 = **20%** **[1]**. **[2]**
**(b)** The past decisions approved far fewer applications from group Y **[1]**; a system trained to copy past decisions will learn and repeat that pattern, so it will favour group X even if the groups are equally likely to repay **[1]**. **[2]**
**(c)** Any two of: use training data that is representative of all groups **[1]**; check and correct the labels or past decisions that are unfair **[1]**; test the system's results for each group separately **[1]**; keep human review of decisions **[1]**. **[2]**

**10. (a)** 900 / 1,000 = **90%** **[1]**
**(b)** The data contains few examples of B, so a system that never recognises B still scores highly **[1]**; the figure hides the fact that it fails completely on kind B, so the training data is unrepresentative and the system is biased towards A **[1]**. **[2]**

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.16.2 Creating artificially intelligent systems.
