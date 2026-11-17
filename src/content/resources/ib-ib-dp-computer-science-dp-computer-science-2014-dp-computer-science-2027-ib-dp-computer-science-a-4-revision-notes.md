---
title: "IB DP Computer Science A.4: Machine Learning -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["ib"]
topic: "A.4 -- Machine learning"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Computer Science"]
syllabusSeries: "First assessment 2027"
order: 1.4
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-a"
    subtopic: "ib-dp-computer-science-a-4"
description: "Recall notes on IB DP Computer Science A.4 Machine learning: rules versus learning, features, labels, learning types, applications and ethics, with a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-17: New page written from the IB subject brief and the site's Theme A coverage; please check the depth of A.4, especially the HL extension, against the full DP Computer Science guide."
publishedDate: 2026-11-17
featured: false
---

Condensed for quick recall of **A.4 Machine learning**, the fourth sub-topic of Theme A in IB DP
Computer Science, first assessment 2027 (5 hours SL / 18 hours HL). For explanations and the worked
threshold example, use the [A.4 study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-4/).
The exact learning outcomes, including the HL extension, are in the full DP guide held by your
school.

## Key terms

| Term | Meaning |
|---|---|
| Rule-based programming | The programmer writes explicit rules the program follows |
| Machine learning | A system derives its own rules (a model) from data |
| Model | What learning produces; used to make predictions on new data |
| Training data | The examples a model learns from |
| Test data | Examples kept back to check the model on unseen cases |
| Feature | A measurable property of an example used as input |
| Label | The correct output attached to a training example |
| Supervised learning | Learning from labelled examples |
| Unsupervised learning | Finding structure in unlabelled data |
| Classification | Predicting a category |
| Regression | Predicting a numerical value |
| Clustering | Grouping similar examples without labels |
| Bias (in data) | Data that misrepresents groups or reflects past unfairness |
| Transparency | Being able to explain how a decision was reached |

## Rules vs learning in four lines

1. Rules come from the **programmer** vs from **patterns in data**.
2. Rule-based suits **clear, stable** rules; learning suits **complex or changing** patterns.
3. Rule-based decisions are **easy to explain**; learned models can be **hard to explain**.
4. Rule-based needs **expert knowledge**; learning needs **large, representative data**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-4--01-rules-vs-learning.webp" width="900" height="778" alt="In rule-based programming, rules written by a person and data go into a program that produces answers. In machine learning, examples and a learning method go into a learning system that produces a model, which makes predictions. A table compares where the rules come from, what each needs, how easily decisions are explained, how each adapts to change and what each suits." loading="lazy">
  <figcaption>A programmer writes the rules, or the system finds them in the data.</figcaption>
</figure>

## The learning process

1. Collect data relevant to the task.
2. Prepare it: correct errors, remove duplicates, check it represents the situations the model will
   meet.
3. Choose features.
4. Train the model on the training data.
5. Test it on unseen data and evaluate its accuracy.
6. Use it to make predictions; retrain when new data or new situations arise.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-4--02-training-data-features-labels.webp" width="900" height="592" alt="The eight training emails from the worked example, each with one feature (number of suspicious words: 9, 1, 7, 2, 8, 0, 6, 3) and a label (spam or not). Training on features and labels produces a model, the threshold 4.5, which classifies a new email with 5 words as spam and one with 4 as not. Training data must be representative, and testing uses data not seen in training." loading="lazy">
  <figcaption>Features are the inputs, labels the correct answers; testing uses examples the model has not seen.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-4--05-threshold-number-line.webp" width="900" height="576" alt="A number line of suspicious words. The four not-spam training emails (0 to 3 words) average 1.5 and the four spam emails (6 to 9 words) average 7.5; the threshold 4.5 lies halfway. A new email with 5 suspicious words is classified as spam and one with 4 is not." loading="lazy">
  <figcaption>The threshold comes from the data, so retraining on new emails would move it.</figcaption>
</figure>

## Supervised or unsupervised?

| Clue in the scenario | Type | Example |
|---|---|---|
| Each example has a known correct answer | Supervised (classification) | Emails labelled spam / not spam |
| Each example has a known numerical outcome | Supervised (regression) | Past house sales with prices |
| No answers given; find groups or patterns | Unsupervised (clustering) | Customers grouped by buying habits |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-4--03-supervised-unsupervised.webp" width="900" height="906" alt="Supervised learning uses labelled data: classification separates two labelled categories with a boundary and places a new point in one, and regression fits a line to predict a number such as a house price from its size. Unsupervised learning uses unlabelled points and finds clusters, such as groups of customers with similar buying habits." loading="lazy">
  <figcaption>Labelled data means supervised; finding groups without answers means unsupervised.</figcaption>
</figure>

## Applications to have ready

Medical image analysis · fraud detection · recommendations · speech recognition and translation ·
recognising road signs and obstacles.

## Ethical issues: what, why, response

| Issue | Why it matters | Possible responses |
|---|---|---|
| Bias in training data | The model can repeat unfairness against groups that are under-represented or were treated unfairly in the past | Check data balance; test results by group; human review |
| Transparency | People affected may not understand or be able to challenge a decision; unclear accountability | Explainable models where stakes are high; right to human review; clear responsibility |
| Environmental cost | Training large models uses large amounts of energy and hardware | Weigh benefit against cost; reuse existing models; efficient hardware |

**Evaluation pattern:** benefit for the scenario → specific risk from the scenario's data or users →
response → judgement.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-4--06-ethical-issues.webp" width="900" height="812" alt="Three ethical issues traced from cause to effect to response: biased training data leads a model to repeat unfairness, answered by balanced data, testing across groups and human review; hard-to-explain models leave people unable to challenge decisions, raising accountability; and training large models costs energy, hardware and cooling, to be weighed against the benefit." loading="lazy">
  <figcaption>Link each ethical issue to the scenario’s data and users, then weigh it against the benefits.</figcaption>
</figure>

## Applying A.4 to a scenario

Suppose a council wants a model to decide which roads to repair first, trained on ten years of
complaints. A strong answer names the learning type (supervised, if past repairs are labelled by
urgency), the features (traffic volume, road age, number of complaints), a specific risk (areas
where fewer people complain could be under-represented, so their roads are repaired later), a
response (add objective sensor data and review decisions by area), and a judgement on whether the
benefit outweighs the risk.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-4--04-threshold-trace.webp" width="900" height="939" alt="The lesson’s pseudocode loops over eight emails, adding each word count to spamTotal or notTotal and counting each class. The trace table shows spamTotal reaching 30 over 4 spam emails and notTotal reaching 6 over 4 others. The averages are 7.5 and 1.5, so the output threshold is (7.5 + 1.5) ÷ 2 = 4.5." loading="lazy">
  <figcaption>The loop totals each class; halfway between the two averages gives the threshold 4.5.</figcaption>
</figure>

## Exam traps

- **"The computer understands."** It finds statistical patterns.
- **Features vs labels.** Features are inputs; labels are the correct outputs.
- **Clustering is unsupervised**, even if its results are useful.
- **Testing on training data** says little about new cases.
- **Generic ethics.** Tie bias, transparency or energy cost to the scenario.
- **Ignoring the case study.** Apply A.4 to the pre-released scenario.

## Self-test

1. State one difference between rule-based programming and machine learning.
2. Give one advantage and one disadvantage of machine learning compared with rule-based programming.
3. What are features?
4. What is a label?
5. Why must a model be tested on data it has not seen?
6. A hospital trains a system on X-rays marked "fracture" or "no fracture". What type of learning is
   this?
7. A streaming service groups viewers by viewing patterns without predefined categories. What type
   of learning is this?
8. Is predicting tomorrow's temperature classification or regression?
9. How can bias enter a machine learning system?
10. Why is transparency important for a model that decides loan applications?
11. Why does training large models raise an environmental concern?
12. In the study guide's threshold example, what threshold is learned, and how would an email with
    5 suspicious words be classified?

**Answers:** 1. In rule-based programming the programmer writes the rules; in machine learning the
system derives them from data. 2. Advantage, any one: handles complex patterns; adapts by retraining;
can find patterns people miss. Disadvantage, any one: needs large, representative data; harder to
explain; may learn bias. 3. Measurable properties of each example used as inputs. 4. The correct
output attached to a training example. 5. To check that it works on new cases rather than having
memorised its examples. 6. Supervised (classification). 7. Unsupervised (clustering). 8. Regression,
because the output is a number. 9. Through training data that under-represents some groups or
reflects past unfair decisions. 10. Applicants need to know why they were refused and be able to
challenge it, and someone must be accountable for errors. 11. It uses large amounts of computing
power and therefore energy. 12. 4.5; spam, because 5 is above the threshold.

## Related pages

- [A.4 Machine learning study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-4/)
- [A.4 Machine learning practice questions](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-4-practice/)
- [Theme A revision notes](/resources/ib-dp-computer-science-theme-a-revision-notes/)

## Official syllabus

International Baccalaureate Organization, *Diploma Programme Subject Brief -- Sciences: Computer
science*, first assessment 2027, © 2024.
