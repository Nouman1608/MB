---
title: "OxfordAQA A-Level Computer Science: Artificial intelligence (9645) -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Artificial Intelligence Practice"
resourceType: "practice-questions"
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
description: "Original AI questions with marked answers on neural network passes, training bias, machine learning, benefits and risks, for OxfordAQA A-level CS."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

This set covers section **3.16 Artificial intelligence** (3.16.1 to 3.16.3) of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1 (International AS exams May/June 2025 onwards, International A-level exams May/June 2026 onwards). The content tested is all **International A-level only**, assessed in Unit 4 (Advanced concepts and principles of computer science), a written paper. Any rule a node applies to its weighted sum is given in the question.

Start here: [AI study guide](/resources/oxfordaqa-a-level-computer-science-artificial-intelligence/) · [AI revision notes](/resources/oxfordaqa-a-level-computer-science-artificial-intelligence-revision-notes/) · [9645 course page](/boards/oxfordaqa/a-level/computer-science/) · [topic checklist](/checklists/oxfordaqa/a-level/computer-science/) · [10-minute diagnostics, free](/diagnostics/)

## Questions

**1.** Characteristics of artificial intelligence.

**(a)** Describe **two** features of a solution that could lead to a system being called artificially intelligent. **[2]**
**(b)** Explain why the problems that AI systems solve were historically not solved by computer systems. **[2]**

**2.** A software firm advertises its customer-service chatbot as "generally intelligent". Explain why this claim is unlikely to be accurate. **[2]**

**3.** State the application area of artificial intelligence that each system below belongs to. **[4]**

- System A: a program that creates a new illustration from a short written description.
- System B: a program that chooses its next move in a board game by looking ahead at possible positions.
- System C: a program that examines skin photographs and suggests possible conditions to a doctor.
- System D: an online shop feature that lists products a customer is likely to buy.

**4.** A small neural network has three input nodes, two hidden nodes P and Q, and one output node. Each node outputs **1 if its weighted sum is greater than 0**, otherwise 0. The inputs are 0.2, 0.9 and 0.5.

| Connection | Weights from inputs 1, 2, 3 |
|---|---|
| Inputs → P | 0.4, −0.3, 0.6 |
| Inputs → Q | −0.8, 0.1, 0.1 |

The weights from P and Q to the output node are 0.7 and −0.4.

**(a)** Calculate the weighted sum for node P and state its output. **[2]**
**(b)** Calculate the weighted sum for node Q and state its output. **[2]**
**(c)** Calculate the weighted sum for the output node and state the network's output. **[1]**

**5.** Neural network structure.

**(a)** Describe the structure of a simple neural network. **[3]**
**(b)** A network has an input layer of 6 nodes, three hidden layers of 8 nodes each, and an output layer of 3 nodes. State whether this is a deep learning network and justify your answer. **[2]**
**(c)** Every node is connected to every node in the next layer. Calculate the number of weights in the network. **[1]**

**6.** Describe how backpropagation is used to train a neural network. **[4]**

**7.** The fictional Kellsmoor Hospital's machine learning system predicts how many car park spaces are occupied at 10 a.m. The table shows its predictions for the same five days after one month and after one year of training.

| Day | Actual | After one month | After one year |
|---|---|---|---|
| 1 | 312 | 280 | 305 |
| 2 | 287 | 320 | 292 |
| 3 | 340 | 300 | 333 |
| 4 | 295 | 330 | 299 |
| 5 | 301 | 270 | 308 |

**(a)** Calculate the mean size of the error (ignoring its sign) for each version. **[3]**
**(b)** Explain how these results show that the system is an example of machine learning. **[2]**

**8.** The fictional Dockline Logistics trains an AI system to shortlist job applicants, using 3,600 past applications that led to a job offer: 540 from women and 3,060 from men. Tested on 150 women and 150 men judged equally qualified by recruiters, it shortlists 27 women and 63 men.

**(a)** Calculate the percentage of the training examples that came from women. **[1]**
**(b)** Calculate the shortlisting rate for women and for men. **[2]**
**(c)** Explain how the training data has caused bias in this system. **[2]**
**(d)** Suggest **two** actions Dockline could take to reduce this bias. **[2]**

**9.** A school is concerned about students using a generative AI tool to write history essays. Explain **two** risks, from the use of artificial intelligence, that apply in this situation. **[4]**

**10.** A country with very few eye specialists plans an AI system that analyses photographs of the back of the eye, taken at local pharmacies, to detect early eye disease. Explain **three** benefits of using AI here. **[6]**

**11.** A city plans AI cameras at every metro station that recognise passengers who have previously avoided fares and alert staff, replacing most ticket inspectors. Discuss the benefits and risks of this proposal. **[9]**

## Answers

**1. (a)** It reaches a solution using a method similar to one a human might follow. [1]
It reaches a solution at least as good as one a human might reach. [1]
**(b)** They were believed to require human intelligence. [1]
They could not be solved algorithmically using the computer hardware available at the time. [1]
*Examiner insight:* "It can think" does not answer (a); both points must compare the method or the solution with a human's.

**2.** Current AI systems are not generally intelligent; they work in narrow fields. [1]
The chatbot handles customer-service tasks only and could not reason across any field as a person can; general intelligence is still research. [1]
*Examiner insight:* Apply the point to the chatbot; repeating the narrow/general definition twice makes only one point.

**3.** System A: generative AI. [1]
System B: playing strategic games. [1]
System C: medical diagnosis. [1]
System D: search and recommendation systems. [1]
*Examiner insight:* Use the specification's names for the areas; "image AI" for System A is too vague to show the area has been identified.

**4. (a)** P sum = 0.2 × 0.4 + 0.9 × (−0.3) + 0.5 × 0.6 = 0.08 − 0.27 + 0.30 = 0.11 [1]
0.11 > 0, so **P outputs 1**. [1]
**(b)** Q sum = 0.2 × (−0.8) + 0.9 × 0.1 + 0.5 × 0.1 = −0.16 + 0.09 + 0.05 = −0.02 [1]
−0.02 is not greater than 0, so **Q outputs 0**. [1]
**(c)** Output sum = 1 × 0.7 + 0 × (−0.4) = 0.7 > 0, so the **network outputs 1**. [1]
*Examiner insight:* Show each product before adding; a bare 1 or 0 hides your method if a sign slips.

**5. (a)** It is made of nodes arranged in layers. [1]
There is an input layer, a hidden (processing) layer and an output layer. [1]
The outputs of nodes in one layer are weighted to form the inputs to nodes in the next layer. [1]
**(b)** Yes, it is a deep learning network. [1]
It has several (three) hidden layers, not just one. [1]
**(c)** 6 × 8 + 8 × 8 + 8 × 8 + 8 × 3 = 48 + 64 + 64 + 24 = **200** weights. [1]
*Examiner insight:* In (b), justify "deep" by the number of hidden layers, not the number of nodes or the amount of data.

**6.** Weights are given starting values and a training example with a known correct output is passed forward. [1]
The network's output is compared with the correct output to find the error. [1]
The error is passed backwards, from the output layer towards the input layer, and the weights are adjusted to reduce it. [1]
This is repeated for many training examples until the error is acceptably small. [1]
*Examiner insight:* Name the error as what travels backwards; saying the data goes backwards describes a different process.

**7. (a)** One month: errors 32, 33, 40, 35, 31; mean = 171 ÷ 5 [1] = **34.2 spaces**. [1]
One year: errors 7, 5, 7, 4, 7; mean = 30 ÷ 5 = **6.0 spaces**. [1]
**(b)** Machine learning is AI whose performance improves based on experience. [1]
After a year of data (more experience), the same system's mean error is much smaller than after one month. [1]
*Examiner insight:* Use absolute errors; letting positive and negative errors cancel gives a misleadingly small mean.

**8. (a)** 540 ÷ 3,600 × 100 = **15%**. [1]
**(b)** Women: 27 ÷ 150 × 100 = **18%**. [1]
Men: 63 ÷ 150 × 100 = **42%**. [1]
**(c)** Most successful examples in the training data were from men, so the system learned features linked to male applicants as signs of success. [1]
It therefore favours men over equally qualified women, so its decisions are biased by gender. [1]
**(d)** Retrain the system on data with a balanced, representative mix of applicants. [1]
Test the shortlisting rate for each group before use and after every update, and keep a human reviewer for final decisions. [1]
*Examiner insight:* In (c), "the data is biased" alone is too thin; link the 15% under-representation to the unequal shortlisting rates.

**9.** Plagiarism: the tool's output may closely copy existing published work. [1]
A student submitting it presents someone else's words or ideas as their own. [1]
False information: if its training data contained errors, it can state wrong dates or events as fact. [1]
A student who trusts it may put those errors in the essay. [1]
*Examiner insight:* "Explain" needs each risk developed in the essay context, not just named.

**10.** Any three benefits, each applied. For example:
Available where expertise is scarce: few specialists exist [1], but any local pharmacy can take photos, so many more people are checked. [1]
Large data sets analysed quickly: thousands of photos screened per day [1], so specialists see only flagged patients. [1]
Continuous availability: the system works at any hour [1], so results are not delayed by specialists' working hours. [1]
Also creditworthy: more consistent decisions; lower cost of operation.
*Examiner insight:* Link each benefit to the pharmacies or the shortage of specialists; a generic list shows knowledge but no application.

**11.** Indicative points; a full answer covers at least two benefits, two risks and a judgement:
Benefit: cameras watch every station continuously, unlike inspectors on shifts. [1]
Benefit: they can check very large numbers of faces quickly at busy times. [1]
Benefit: lower running cost than employing many inspectors. [1]
Risk: most inspectors lose their jobs, with social impact on their families. [1]
Risk: groups under-represented in the training images may be misidentified more often, causing unfair stops (bias by race or gender). [1]
Risk: incorrect watch-list or training data could flag innocent passengers. [1]
Risk: it is surveillance of every passenger, which could be used beyond fare checks. [1]
Mitigation: test accuracy for each group, and have staff confirm a match before acting. [1]
Judgement tied to the scenario, e.g. the gains do not outweigh the bias and surveillance risks without human checks and strict limits on data use. [1]
*Examiner insight:* Cover both sides and end with a judgement that follows from your points; a long one-sided list is a weaker answer.

## Where marks are usually lost

- Defining AI with one fixed sentence instead of the characteristics.
- Applying the node rule to single inputs, not the weighted sum.
- Saying backpropagation sends data, rather than the error, backwards.
- Judging "deep" by the number of nodes rather than hidden layers.
- Averaging signed errors so that they cancel out.
- Stating "bias" without the training-data cause and its effect on a named group.
- Giving generic benefits and risks with no link to the scenario.

## Next steps

- Recap definitions and methods with the [AI revision notes](/resources/oxfordaqa-a-level-computer-science-artificial-intelligence-revision-notes/).
- Reread the [AI study guide](/resources/oxfordaqa-a-level-computer-science-artificial-intelligence/) where you dropped marks.
- Plan your Unit 4 revision with [9645 exam preparation](/resources/oxfordaqa-a-level-computer-science-exam-preparation/).
- Tick off section 3.16 on the [9645 checklist](/checklists/oxfordaqa/a-level/computer-science/) and browse the [course page](/boards/oxfordaqa/a-level/computer-science/).
- Test other topics with [all free 10-minute diagnostics](/diagnostics/).
- [Book a free trial class](/trial/).

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.16 Artificial intelligence.
