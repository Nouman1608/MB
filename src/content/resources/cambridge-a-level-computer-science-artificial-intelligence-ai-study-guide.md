---
title: "Cambridge A Level Computer Science (9618): Artificial Intelligence (AI) -- Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 18: Artificial Intelligence (AI)"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 18
syllabusTopics:
  - qualification: "a-level"
    topic: "artificial-intelligence-ai"
  - qualification: "a-level"
    topic: "artificial-intelligence-ai"
    subtopic: "artificial-intelligence-sub"
description: "A Level study guide to Dijkstra's algorithm, A* search, machine learning types, neural networks, back-propagation and deep learning for Cambridge 9618."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Artificial intelligence (AI) is the use of computer systems to carry out tasks that normally need human judgement, such as finding the best route, recognising a face or deciding which message is spam. The Cambridge A Level topic has two threads: search algorithms for finding shortest paths in a graph, and machine learning, where a system improves its performance from data instead of following fixed rules written by a programmer.

## Where this fits in the specification

Topic 18 is A Level content, assessed on Paper 3. It uses graphs from the data structures work, links to the ethics topic (bias, accountability) and to the earlier ideas of abstraction and algorithm design. Questions typically ask you to trace a shortest-path algorithm on a given graph, or to describe and compare types of machine learning with a use for each.

## Shortest-path algorithms

A **graph** is made of **nodes** (vertices) joined by **edges**, and in a weighted graph each edge has a **weight** such as distance or time. A satnav models a road network this way.

### Dijkstra's algorithm

**Dijkstra's algorithm** finds the shortest path from a start node to every other node in a graph with non-negative weights. The method:

1. Give the start node distance 0 and every other node distance infinity. Mark all nodes unvisited.
2. Choose the unvisited node with the smallest known distance and mark it visited; its distance is now final.
3. For each unvisited neighbour, calculate distance of the chosen node plus edge weight. If this is smaller than the neighbour's recorded distance, update it and record the chosen node as the neighbour's predecessor.
4. Repeat from step 2 until the destination is visited or all nodes are visited.
5. Read the route by following predecessors back from the destination.

A **priority queue** is used to select the smallest distance efficiently. Dijkstra explores outwards in all directions, so it can examine many nodes that are not useful.

### A* algorithm

**A\*** is an improvement that is aimed at one destination. For each node it uses **f = g + h**, where **g** is the cost so far from the start and **h** is a **heuristic**, an estimate of the remaining cost to the goal (for example the straight-line distance on a map). It always expands the node with the lowest f, so it heads towards the goal and usually examines fewer nodes. If the heuristic never overestimates the true cost, A* still finds the shortest path. A heuristic of 0 for every node makes A* behave like Dijkstra. Typical uses are route planning, games and robot navigation.

## Machine learning

**Machine learning** is a branch of AI in which a system uses data to adjust its own behaviour, without being explicitly programmed for each case. Cambridge expects you to know the main types.

- **Supervised learning** trains on **labelled data**, where each example has the correct answer, such as emails marked "spam" or "not spam". The system adjusts itself to reduce the difference between its output and the label, then predicts labels for new data.
- **Unsupervised learning** uses **unlabelled data** and looks for structure itself, such as grouping customers with similar buying habits (**clustering**).
- **Reinforcement learning** has a system, or agent, act in an environment and receive **rewards** or penalties; it learns the actions that give the largest reward over time, as in a program learning to play a game.
- **Regression** is a supervised method that predicts a numerical value, such as a house price from its size and location.

A dataset is usually divided into **training data**, used to learn, and **test data**, used to check how well the model copes with unseen cases. A model that matches the training data too closely but does badly on new data is **overfitted**.

### Artificial neural networks and deep learning

An **artificial neural network** is a set of connected nodes (artificial neurons) arranged in layers: an **input layer**, one or more **hidden layers** and an **output layer**. Each connection has a **weight**. A neuron multiplies each input by its weight, adds them (often with a bias), and passes the result through an **activation function** that decides the output. Learning means adjusting the weights.

**Back-propagation** is the method used to train the network. The output is compared with the expected output to calculate the error, and that error is passed backwards through the layers so that each weight can be adjusted a little to reduce it. This is repeated over many examples. **Deep learning** uses neural networks with many hidden layers, which can learn complicated features such as edges, shapes and then whole objects in an image. It needs very large amounts of data and computing power, and its decisions can be hard to explain.

AI raises ethical issues that link to the ethics topic: bias in training data produces biased decisions, personal data may be misused, jobs may be automated, and it can be unclear who is responsible when an automated decision causes harm.

## Worked example 1: Dijkstra's algorithm

Find the shortest route from A to F. The edges and weights are: A-B 4, A-C 2, B-C 1, B-D 5, C-D 8, C-E 10, D-E 2, D-F 6, E-F 3.

| Step | Node chosen (final distance) | Updates |
|---|---|---|
| 1 | A (0) | B = 4, C = 2 |
| 2 | C (2) | B: 2 + 1 = 3 < 4, so B = 3; D = 2 + 8 = 10; E = 2 + 10 = 12 |
| 3 | B (3) | D: 3 + 5 = 8 < 10, so D = 8 |
| 4 | D (8) | E: 8 + 2 = 10 < 12, so E = 10; F = 8 + 6 = 14 |
| 5 | E (10) | F: 10 + 3 = 13 < 14, so F = 13 |
| 6 | F (13) | none |

The shortest distance to F is 13. Following the predecessors back: F came from E, E from D, D from B, B from C and C from A. The route is A, C, B, D, E, F, with total 2 + 1 + 5 + 2 + 3 = 13. Notice that the direct-looking route A, B, D, F costs 4 + 5 + 6 = 15, which is longer, and that B's distance was improved at step 2.

## Worked example 2: a neuron and an A* value

A neuron has two inputs 0.5 and 0.8, weights 0.4 and -0.2, and a bias of 0.1. The weighted sum is 0.5 x 0.4 + 0.8 x (-0.2) + 0.1 = 0.20 - 0.16 + 0.10 = 0.14. With a step activation that outputs 1 when the sum is above 0, the neuron outputs 1. If back-propagation found the output should have been 0, it would reduce the weight on the input that contributed most, here 0.4, and the bias.

For A*, suppose a node has a cost so far of g = 5 and a straight-line estimate to the goal of h = 3. Its score is f = 5 + 3 = 8. Another node with g = 2 and h = 7 has f = 9, so A* expands the first node, even though the second has travelled less far.

## Common mistakes

- Saying Dijkstra's algorithm works with negative weights. It does not.
- Choosing the neighbour with the smallest edge instead of the unvisited node with the smallest total distance.
- Confusing supervised learning (labelled data, known answers) with unsupervised learning (no labels).
- Describing back-propagation as passing inputs backwards. It passes the error backwards to adjust weights.
- Forgetting that A* needs a heuristic, or giving an overestimating heuristic.
- Writing that AI "thinks" or "understands"; describe what it does with data.

## Exam technique

For a Dijkstra trace, lay out a table with a column for each node and cross out superseded distances rather than rubbing them out, so working is visible. State the final route as well as the distance. For "describe" questions on learning types, give the data used, how it learns and one use. For "explain why" an algorithm is better, compare the number of nodes examined or the use of a heuristic.

## Check your understanding

1. Define a heuristic in A*. *An estimate of the remaining cost from a node to the goal, used with the cost so far to choose which node to expand.*
2. State one difference between Dijkstra's algorithm and A*. *Dijkstra explores outwards by distance so far only; A* adds a heuristic estimate to head towards the goal.*
3. Describe supervised learning with an example. *It learns from labelled data so it can predict labels for new data, such as classifying emails as spam.*
4. Give a use of reinforcement learning. *A game-playing program or a robot learning actions that earn rewards.*
5. Name the three types of layer in a neural network. *Input, hidden and output.*
6. What is back-propagation used for? *Passing the output error backwards to adjust the weights so the network's error reduces.*
7. In Worked example 1, what is the shortest distance from A to E and by which route? *10, via A, C, B, D, E.*
8. Give one ethical concern about machine learning. *Bias in the training data can lead to unfair decisions; or unclear responsibility for automated decisions.*

## Frequently asked questions

**What is the difference between Dijkstra's algorithm and A*?**
Dijkstra's algorithm explores outwards using only the distance so far. A* adds a heuristic estimate of the remaining cost, using f = g + h, so it heads towards one goal and usually examines fewer nodes.

**What is the difference between supervised and unsupervised learning?**
Supervised learning trains on labelled data where each example has the correct answer, such as emails marked spam. Unsupervised learning uses unlabelled data and finds structure itself, such as clustering customers.

**What is back-propagation?**
Back-propagation trains a neural network by comparing the output with the expected output and passing the error backwards through the layers, so each weight can be adjusted to reduce the error.

**Which paper assesses Artificial Intelligence in Cambridge 9618?**
Topic 18 Artificial Intelligence is A Level content assessed on Paper 3.
