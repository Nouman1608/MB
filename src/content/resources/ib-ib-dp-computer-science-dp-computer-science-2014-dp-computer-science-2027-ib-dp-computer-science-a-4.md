---
title: "IB DP Computer Science A.4: Machine Learning"
resourceType: "study-guides"
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
description: "Study guide to A.4 Machine learning in IB DP Computer Science: rules versus learning, training data, features, supervised and unsupervised learning, and ethics."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-17: New page written from the IB subject brief and the site's Theme A coverage; please check the depth of A.4, especially the HL extension, against the full DP Computer Science guide."
publishedDate: 2026-11-17
featured: false
---

**A.4 Machine learning is the fourth sub-topic of Theme A, "Concepts of computer science", in the IB
Diploma Programme Computer Science course first assessed in 2027.** It asks how a computer can
improve at a task by learning from data instead of following rules a programmer has written. It
covers the difference between rule-based programming and machine learning, the core ideas of
training data and features, supervised and unsupervised learning, real-world applications and the
ethical issues they raise. The subject brief recommends 5 hours at SL and 18 at HL, the largest
difference between the levels in Theme A, so HL students study it in considerably more depth.

> **Scope of this page.** This page is written from the IB's public *Diploma Programme Subject Brief,
> Sciences: Computer science, first assessment 2027* (© International Baccalaureate Organization 2024)
> and the A.4 content summarised in our [Theme A study guide](/resources/ib-dp-computer-science-theme-a/).
> The detailed learning outcomes, including the HL extension, are in the full DP Computer Science
> guide; check your school's copy for the exact content and depth.

## What does A.4 cover?

- The distinction between traditional rule-based programming and machine learning, where a system
  derives its own rules from data.
- Core concepts: training data, features, and the difference between supervised and unsupervised
  learning.
- Real-world applications, and the ethical issues they raise, including bias in training data,
  transparency of automated decisions and the environmental cost of training large models.

## Rule-based programming or machine learning?

In **rule-based programming**, a programmer works out the rules and writes them as code: "if an email
contains more than five words from this list, mark it as spam". The program does exactly what it is
told, and its behaviour can be explained line by line. It works well when the rules are known and
stable, but it is hard to write rules for tasks such as recognising faces or speech, and the rules
must be rewritten by hand when the problem changes.

In **machine learning**, the programmer supplies examples and a learning method; the system finds the
patterns itself and produces a **model**, which is then used to make predictions about new data. It
suits tasks where the rules are too complex to write down or change over time. The cost is that it
needs large amounts of suitable data, its behaviour can be harder to explain, and it can only be as
good as the data it learns from.

| | Rule-based | Machine learning |
|---|---|---|
| Where the rules come from | The programmer | Patterns found in data |
| Needs | Expert knowledge of the rules | Large, representative data sets |
| Explaining a decision | Usually straightforward | Can be difficult |
| Adapting to change | Rewrite the rules | Retrain on new data |
| Suits | Clear, stable rules (tax calculation) | Complex patterns (image recognition) |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-4--01-rules-vs-learning.webp" width="900" height="778" alt="In rule-based programming, rules written by a person and data go into a program that produces answers. In machine learning, examples and a learning method go into a learning system that produces a model, which makes predictions. A table compares where the rules come from, what each needs, how easily decisions are explained, how each adapts to change and what each suits." loading="lazy">
  <figcaption>A programmer writes the rules, or the system finds them in the data.</figcaption>
</figure>

## Training data, features and labels

- **Training data:** the examples a model learns from. It must be large enough, accurate and
  **representative** of the situations the model will meet.
- **Features:** the measurable properties of each example that the model uses, such as an email's
  number of links, its sender's domain and certain words. Choosing useful features is part of
  designing a solution.
- **Labels:** in supervised learning, the correct answer attached to each training example, such as
  "spam" or "not spam".
- **Testing:** a model is checked on data it has not seen during training, to find out whether it
  works on new cases and has not simply memorised its examples.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-4--02-training-data-features-labels.webp" width="900" height="592" alt="The eight training emails from the worked example, each with one feature (number of suspicious words: 9, 1, 7, 2, 8, 0, 6, 3) and a label (spam or not). Training on features and labels produces a model, the threshold 4.5, which classifies a new email with 5 words as spam and one with 4 as not. Training data must be representative, and testing uses data not seen in training." loading="lazy">
  <figcaption>Features are the inputs, labels the correct answers; testing uses examples the model has not seen.</figcaption>
</figure>

## Supervised and unsupervised learning

**Supervised learning** uses **labelled** data. The model learns the relationship between features and
labels, then predicts labels for new examples.
- *Classification* predicts a category: spam or not spam, whether an image shows a cat.
- *Regression* predicts a number: the price of a house from its size and location.

**Unsupervised learning** uses **unlabelled** data. The model looks for structure on its own, such as
**clusters** of similar items: a shop might discover groups of customers with similar buying habits
without telling the system in advance what the groups are.

**How to tell them apart in a question:** if the scenario says the training data includes the correct
outcome for each example, it is supervised; if the system must find groupings or patterns without
being told the answers, it is unsupervised.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-4--03-supervised-unsupervised.webp" width="900" height="906" alt="Supervised learning uses labelled data: classification separates two labelled categories with a boundary and places a new point in one, and regression fits a line to predict a number such as a house price from its size. Unsupervised learning uses unlabelled points and finds clusters, such as groups of customers with similar buying habits." loading="lazy">
  <figcaption>Labelled data means supervised; finding groups without answers means unsupervised.</figcaption>
</figure>

## Worked example: learning a rule from data

A very simple supervised learner can show the idea. Each training email has one feature, the number
of suspicious words, and a label. The algorithm learns a threshold halfway between the average of each
class.

```
words  <- [9, 1, 7, 2, 8, 0, 6, 3]
labels <- ["spam", "not", "spam", "not", "spam", "not", "spam", "not"]
spamTotal <- 0
spamCount <- 0
notTotal <- 0
notCount <- 0
FOR i FROM 0 TO 7
    IF labels[i] = "spam" THEN
        spamTotal <- spamTotal + words[i]
        spamCount <- spamCount + 1
    ELSE
        notTotal <- notTotal + words[i]
        notCount <- notCount + 1
    ENDIF
ENDFOR
threshold <- (spamTotal / spamCount + notTotal / notCount) / 2
OUTPUT threshold
```

| i | words[i] | labels[i] | spamTotal | spamCount | notTotal | notCount |
|---|---|---|---|---|---|---|
| 0 | 9 | spam | 9 | 1 | 0 | 0 |
| 1 | 1 | not | 9 | 1 | 1 | 1 |
| 2 | 7 | spam | 16 | 2 | 1 | 1 |
| 3 | 2 | not | 16 | 2 | 3 | 2 |
| 4 | 8 | spam | 24 | 3 | 3 | 2 |
| 5 | 0 | not | 24 | 3 | 3 | 3 |
| 6 | 6 | spam | 30 | 4 | 3 | 3 |
| 7 | 3 | not | 30 | 4 | 6 | 4 |

Averages are 30 ÷ 4 = 7.5 and 6 ÷ 4 = 1.5, so the threshold is (7.5 + 1.5) ÷ 2 = **4.5**. A new email
with 5 suspicious words would be classified as spam; one with 4 would not. The important point is that
no programmer chose 4.5: it came from the labelled data, and it would change if the system were
retrained on different emails. Real systems use many features and far more sophisticated methods,
but the principle is the same.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-4--04-threshold-trace.webp" width="900" height="939" alt="The lesson’s pseudocode loops over eight emails, adding each word count to spamTotal or notTotal and counting each class. The trace table shows spamTotal reaching 30 over 4 spam emails and notTotal reaching 6 over 4 others. The averages are 7.5 and 1.5, so the output threshold is (7.5 + 1.5) ÷ 2 = 4.5." loading="lazy">
  <figcaption>The loop totals each class; halfway between the two averages gives the threshold 4.5.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-4--05-threshold-number-line.webp" width="900" height="576" alt="A number line of suspicious words. The four not-spam training emails (0 to 3 words) average 1.5 and the four spam emails (6 to 9 words) average 7.5; the threshold 4.5 lies halfway. A new email with 5 suspicious words is classified as spam and one with 4 is not." loading="lazy">
  <figcaption>The threshold comes from the data, so retraining on new emails would move it.</figcaption>
</figure>

## Where is machine learning used?

- **Health care:** spotting signs of disease in medical images.
- **Finance:** flagging card transactions that look fraudulent.
- **Online services:** recommending films, products or posts.
- **Language:** speech recognition, translation and predictive text.
- **Transport:** helping vehicles recognise road signs and obstacles.

## What ethical issues does machine learning raise?

**Bias in training data.** If the training data under-represents some groups, or reflects past
unfair decisions, the model can learn and repeat that unfairness. A recruitment model trained on a
company's past hiring could favour the kinds of applicants hired before. Responses include checking
data for balance, testing the model's results for different groups, and human review of decisions.

**Transparency of automated decisions.** Some models are difficult to explain, even for their
designers. If a loan, a medical recommendation or a job application is decided automatically, the
people affected may not be able to find out why or challenge the result. This raises questions of
accountability: who is responsible when a model is wrong?

**Environmental cost.** Training large models uses a great deal of computing power, and therefore
energy, along with the hardware and cooling it requires. Developers must weigh the benefit of a larger
model against this cost.

In an evaluation question, balance benefits (speed, accuracy at scale, finding patterns humans miss)
against these risks, and reach a judgement about the specific application in the scenario.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-4--06-ethical-issues.webp" width="900" height="812" alt="Three ethical issues traced from cause to effect to response: biased training data leads a model to repeat unfairness, answered by balanced data, testing across groups and human review; hard-to-explain models leave people unable to challenge decisions, raising accountability; and training large models costs energy, hardware and cooling, to be weighed against the benefit." loading="lazy">
  <figcaption>Link each ethical issue to the scenario’s data and users, then weigh it against the benefits.</figcaption>
</figure>

## Common mistakes

- Saying a machine learning system "thinks" or "understands": it finds statistical patterns in data.
- Confusing features (inputs) with labels (the correct outputs in supervised learning).
- Calling clustering "supervised" because the results are useful.
- Writing about ethics in general terms without linking it to the scenario's data and users.
- Treating A.4 as purely technical: the course treats ethical issues as integral content.

## Frequently asked questions

**Why is A.4 so much longer at HL?**
The brief gives 5 hours at SL and 18 at HL; the full guide sets out the extra HL content.

**Do I need to program a machine learning model?**
Theme A is mostly explanation and evaluation; short algorithms like the example above help you
understand the idea of learning from data.

## Related pages

- [A.4 Machine learning revision notes](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-4-revision-notes/)
- [A.4 Machine learning practice questions](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-4-practice/)
- [A.3 Databases study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-3/)
- [Theme A study guide](/resources/ib-dp-computer-science-theme-a/)

## Source

International Baccalaureate Organization, *Diploma Programme Subject Brief, Sciences: Computer
science, first assessment 2027* (© 2024). The complete subject guide is available through the IB
Programme Resource Centre.
