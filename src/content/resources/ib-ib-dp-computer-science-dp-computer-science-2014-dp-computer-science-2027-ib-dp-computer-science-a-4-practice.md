---
title: "IB DP Computer Science A.4: Machine Learning -- Practice Questions"
resourceType: "practice-questions"
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
description: "Twelve original questions on rules versus learning, learning types, a trace table, bias, transparency and energy use for IB DP Computer Science A.4."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-17
featured: false
reviewNeeded: true
reviewNote: "New page written from the IB subject brief and the site's Theme A coverage; please check the questions and mark allocations against the full DP Computer Science guide, including the HL extension."
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- the IB holds copyright in its own papers. Use these alongside
> the official past papers available through your school or the IB store.

Related: [A.4 Machine learning study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-4/)
and [revision notes](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-4-revision-notes/).

## Section A

**1.** Distinguish between rule-based programming and machine learning. **[2]**

**2.** Define the terms training data and feature. **[2]**

**3.** State whether each task uses supervised or unsupervised learning.
**(a)** Predicting whether a tumour in a scan is harmful, trained on scans already diagnosed by
doctors. **[1]**
**(b)** Grouping news articles by topic when no topics have been given. **[1]**
**(c)** Predicting a used car's price from past sales with known prices. **[1]**

**4.** Distinguish between classification and regression, with an example of each. **[2]**

**5.** State why a model should be tested on data it was not trained on. **[1]**

**6.** State **two** real-world applications of machine learning. **[2]**

## Section B

**7.** The algorithm below learns a spam threshold from labelled training emails.

```
words  <- [8, 2, 6, 0, 10, 4]
labels <- ["spam", "not", "spam", "not", "spam", "not"]
spamTotal <- 0
spamCount <- 0
notTotal <- 0
notCount <- 0
FOR i FROM 0 TO 5
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

**(a)** Copy and complete a trace table with columns i, spamTotal, spamCount, notTotal and notCount. **[3]**
**(b)** State the output, and how an email with 6 suspicious words would be classified. **[2]**
**(c)** Explain why this is an example of learning rather than rule-based programming. **[1]**

**8.** A company's spam filter uses rules written by its programmers. Explain why it may become less
effective over time, and how a machine learning approach could address this. **[4]**

**9.** A firm trains a model to shortlist job applicants using records of the people it hired over the
last twenty years.
**(a)** Explain how bias could arise in this model. **[2]**
**(b)** Describe **two** measures the firm could take to reduce the risk of unfair decisions. **[4]**

**10.** A hospital uses a model to recommend whether patients need further tests. Explain why the
transparency of the model's decisions matters in this context. **[4]**

**11.** A start-up plans to train a very large language model from scratch for a simple customer-help
task. Evaluate this plan with reference to environmental cost. **[3]**

**12.** A supermarket wants to group its customers so that it can send them different offers, but has
no existing categories.
**(a)** Identify the type of learning and justify your answer. **[2]**
**(b)** Suggest **two** features it could use. **[2]**
**(c)** Discuss **one** ethical issue the plan raises. **[3]**

---

## Answers

**1.** In rule-based programming the programmer works out and writes the rules [1]; in machine
learning the system derives its own rules (a model) from data [1].

**2.** Training data: the examples a model learns from [1]. Feature: a measurable property of each
example used as an input to the model [1].

**3. (a)** Supervised [1].
**(b)** Unsupervised [1].
**(c)** Supervised [1].

**4.** Classification predicts a category, e.g. spam or not spam [1]; regression predicts a number,
e.g. a house price [1].

**5.** To check that the model works on new cases and has not simply memorised its training examples [1].

**6.** Any two, [1] each: medical image analysis; fraud detection; recommendation systems; speech
recognition; translation; recognising road signs. Maximum 2.

**7. (a)** One mark for rows 0–1, one for rows 2–3, one for rows 4–5 [3]:

| i | spamTotal | spamCount | notTotal | notCount |
|---|---|---|---|---|
| 0 | 8 | 1 | 0 | 0 |
| 1 | 8 | 1 | 2 | 1 |
| 2 | 14 | 2 | 2 | 1 |
| 3 | 14 | 2 | 2 | 2 |
| 4 | 24 | 3 | 2 | 2 |
| 5 | 24 | 3 | 6 | 3 |

**(b)** Threshold = (24 ÷ 3 + 6 ÷ 3) ÷ 2 = (8 + 2) ÷ 2 = 5 [1]; an email with 6 words is above the
threshold, so it is classified as spam [1].
**(c)** The threshold is not chosen by the programmer but calculated from the labelled data, and it
would change if the training data changed [1].

**8.** Any two developed points, [2] each:
- Spammers change their wording to avoid the listed words, so fixed rules stop matching new spam [2].
- Programmers must keep writing and testing new rules by hand, which is slow and may miss new
  patterns [2].
- A machine learning filter can be retrained on recent labelled emails, so it learns new patterns
  automatically [2].
- It can combine many features at once, such as links, sender and wording, which would be hard to
  express as hand-written rules [2].
Maximum 4.

**9. (a)** If past hiring favoured certain groups, the training data reflects that unfairness [1], so
the model learns to prefer applicants who resemble those hired before and may disadvantage others
[1].
**(b)** Any two, [2] each: check the training data for under-represented groups and balance it;
test the model's shortlisting rates for different groups before and during use; remove features that
act as stand-ins for protected characteristics; keep a human reviewer responsible for final
decisions; allow applicants to ask for a decision to be explained or reviewed. Maximum 4.

**10.** Any two developed points, [2] each:
- Doctors need to understand why a recommendation was made so that they can check it against their
  own judgement before acting [2].
- Patients have a right to know how decisions about their care are reached and to question them [2].
- If the model makes an error, it must be clear who is accountable and how the error happened, so it
  can be corrected [2].
- A model that cannot be explained may hide bias, for example performing worse for some patient
  groups [2].
Maximum 4.

**11.** Training a very large model uses large amounts of computing power and energy [1]. For a simple
task, the benefit is unlikely to justify this cost [1], so a smaller model, an existing model or a
rule-based system may be a better choice; a judgement is required [1].

**12. (a)** Unsupervised learning (clustering) [1], because there are no labels or existing categories;
the system must find groups itself [1].
**(b)** Any two, [1] each: how often a customer shops; average amount spent; types of products bought;
time of day of visits; whether they use offers. Maximum 2.
**(c)** An issue identified [1], explained [1] and evaluated with a response [1]. For example: privacy
of purchase data, which can reveal personal information such as health [1]; customers may not expect
their data to be analysed in this way [1]; the supermarket should be open about its use and let
customers opt out, which makes the plan more acceptable [1].

## Where marks are usually lost

- Confusing features with labels, or supervised with unsupervised learning.
- Trace tables that update the wrong total.
- Ethical answers that do not refer to the scenario.
- Evaluations with no judgement.

## Frequently asked questions

**How deep do HL students need to go?**
A.4 has 5 hours at SL and 18 at HL; HL students should use the full guide for the extra content.

**Are these real IB questions?**
No. They are original practice questions.
