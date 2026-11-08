---
title: "IB DP Mathematics: Applications and Interpretation -- Statistics and Probability Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "Statistics and probability"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessment 2021"
order: 3
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
description: "Revision notes on the IB DP Maths AI statistics and probability strand: descriptive statistics, probability, distributions, inference and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-09-02
featured: false
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by muhammad-ghazali-siddiqui on 2026-09-29."
---

Statistics and probability is one of this course's two largest strands by teaching hours at both SL
(36 hours) and HL (52 hours), as the [full syllabus
guide](/resources/ib-dp-mathematics-applications-and-interpretation-syllabus-guide/) sets out --
reflecting how central data interpretation is to this course's identity. These notes work through the
strand's core skills with the technology fluency this course specifically expects, alongside the
[subject overview](/resources/ib-dp-mathematics-applications-and-interpretation-subject-guide/)
already on the site.

## Descriptive statistics

Covers summarising and displaying data -- measures of central tendency (mean, median, mode) and
spread (range, interquartile range, standard deviation), plus graphical displays (histograms, box
plots, cumulative frequency graphs). Revise choosing the right measure for a given dataset's shape:
the mean is sensitive to outliers, so a skewed dataset or one containing extreme values is often
better summarised by the median; standard deviation and interquartile range both measure spread, but
respond differently to outliers, and being able to explain which is more appropriate for a described
dataset is a frequently tested skill in its own right, not just calculating the values.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-statistics-probability--01-ai-mean-median-outlier.webp" width="900" height="790" alt="Dot plot and box plot of 11 values with an outlier at 40: median 6, mean 8.8, quartiles 4 and 8, IQR 4, 40 above the 1.5 x IQR fence of 14; without 40 the mean is 5.7." loading="lazy">
  <figcaption>An outlier drags the mean but barely moves the median and IQR.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-statistics-probability--02-ai-exclusive-vs-independent.webp" width="900" height="890" alt="Two unit squares with P(A) = 0.4 and P(B) = 0.5. Exclusive: strips do not overlap, P(A and B) = 0, P(A or B) = 0.9. Independent: strips cross in area 0.4 x 0.5 = 0.2, P(A or B) = 0.7." loading="lazy">
  <figcaption>Exclusive events have no overlap; independent events overlap by exactly the product of their probabilities.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-statistics-probability--03-ai-binomial-model.webp" width="900" height="810" alt="Bar chart of B(10, 0.3) with bars 0 to 3 shaded, totalling 0.650, with the conditions for a binomial model and mean np = 3." loading="lazy">
  <figcaption>A binomial model counts successes in a fixed number of independent trials with constant p.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-statistics-probability--04-ai-poisson-hl.webp" width="900" height="810" alt="Bar chart of Po(3) with bars for 5 or more events shaded, totalling 0.185 = 1 - P(X &lt;= 4); mean and variance both equal 3." loading="lazy">
  <figcaption>Poisson models random events at a constant average rate in a fixed interval (HL only).</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-statistics-probability--05-ai-normal-inverse.webp" width="900" height="810" alt="Normal curve N(50, 8^2) with the area to the left of x shaded as 0.9; the boundary is x = 60.3 from invNorm(0.9, 50, 8)." loading="lazy">
  <figcaption>The inverse normal turns a given area into the boundary value.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-statistics-probability--06-ai-correlation-causation.webp" width="900" height="1040" alt="Scatter of 20 students (hours against score) with the least-squares line and r about 0.93, and a diagram showing a hidden third factor could drive both variables." loading="lazy">
  <figcaption>A strong correlation does not by itself show that one variable causes the other.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-statistics-probability--07-ai-critical-region.webp" width="900" height="810" alt="Bar chart of B(20, 0.5) with bars 0 to 5 shaded as the 5% critical region for H1: p &lt; 0.5; P(X &lt;= 5) = 0.021, P(X &lt;= 6) = 0.058; observed 4 rejects H0." loading="lazy">
  <figcaption>A result in the critical region is unlikely enough under H0 to reject it.</figcaption>
</figure>


## Probability

Covers the foundational rules (complementary events, mutually exclusive events, independent events)
and their application to more complex situations using tree diagrams, Venn diagrams and sample space
diagrams. Revise the distinction between mutually exclusive events (cannot both occur) and independent
events (one occurring does not affect the probability of the other) -- confusing the two, and applying
the wrong combination rule as a result, is one of the most common probability errors at this level.

## Distributions

Covers discrete distributions (binomial at both levels; Poisson at HL only) and the continuous normal distribution (both levels), including
using technology to calculate probabilities and inverse-probability values (finding a value given a
probability, rather than the other way round) directly from a distribution rather than from tables.
Revise recognising which distribution model fits a described scenario: a binomial distribution models
a fixed number of independent trials each with the same success probability; a normal distribution
models continuous data clustering symmetrically around a mean.

## Inferential statistics

Covers using sample data to draw conclusions about a wider population, including correlation and
regression (fitting a line to bivariate data and interpreting its meaning) and hypothesis testing.
Revise the distinction between correlation and causation explicitly -- a strong correlation between
two variables in a dataset does not by itself establish that one variable causes changes in the
other, and a strong exam answer is expected to recognise this limitation when interpreting a
regression or correlation result, not just calculate the coefficient.

## Why technology fluency matters specifically for this strand

Because every external paper in this course allows technology throughout, calculating a standard
deviation, a binomial probability, or a regression line by hand when a calculator or software could do
it directly wastes exam time this course does not expect you to spend that way. Revision should
include actually running these calculations on your own exam-approved calculator or software
repeatedly, not just working through the underlying formulas on paper -- unfamiliarity with your own
technology under time pressure is a common and avoidable source of lost marks specifically in this
strand, where nearly every question involves a calculation a calculator is expected to handle.

## The skill this course rewards beyond calculation

Because assessment objectives include communication and interpretation alongside pure calculation, a
complete answer in this strand states what a calculated statistic actually means in the real-world
context of the question -- not just the numerical value. For example, calculating a correlation
coefficient is only half the task; explaining what that coefficient implies about the relationship
between the two variables, and whether that relationship is strong enough to be practically
meaningful, is the interpretive half the course specifically assesses.

## How to approach it

Because Statistics and probability is one of the two largest strands at both levels -- alongside
Functions at SL, but alongside Geometry and trigonometry at HL, where Functions drops to third --
prioritise fluency in fitting, interpreting and critiquing statistical models over pure hand-calculation when
allocating revision time. Practise reading a real or realistic dataset, choosing an appropriate
statistical tool, calculating it using your actual exam technology, and then writing one or two
sentences interpreting what the result means in context -- this three-part habit (choose, calculate,
interpret) mirrors exactly what a full-mark answer in this strand looks like.

## Self-test

1. Why might the median be a more appropriate summary statistic than the mean for a skewed dataset?
2. Distinguish mutually exclusive events from independent events.
3. What kind of scenario is typically modelled by a binomial distribution?
4. Why doesn't a strong correlation between two variables by itself establish causation?
5. Why is calculating a statistic only "half the task" in this course's own terms?

**Answers:** 1. Because the mean is sensitive to outliers and extreme values, which can pull it away
from where most of the data actually sits, while the median is not affected by extreme values in the
same way, making it a more representative "typical value" for skewed data. 2. Mutually exclusive
events cannot both occur at the same time; independent events are ones where one event occurring does
not affect the probability of the other occurring -- these are different properties and require
different probability rules. 3. A scenario with a fixed number of independent trials, each with the
same probability of success, and a discrete count of successes being modelled. 4. Because a
correlation only shows that two variables tend to change together in a dataset; it does not by itself
rule out other explanations, such as a third factor influencing both variables, or the relationship
being coincidental. 5. Because the course's assessment objectives include communication and
interpretation alongside calculation, so a full-mark answer explains what a calculated statistic means
in the real-world context of the question, not just reports the numerical value.

## Frequently asked questions

**How many teaching hours does statistics and probability have in IB Maths AI?**
Statistics and probability has 36 teaching hours at SL and 52 at HL, making it one of the course's two largest strands at both levels.

**What is the difference between mutually exclusive and independent events?**
Mutually exclusive events cannot both occur at the same time. Independent events are ones where one occurring does not affect the probability of the other, and confusing the two leads to using the wrong combination rule.

**Is the Poisson distribution in IB Maths AI SL?**
No. The binomial and normal distributions are studied at both levels, but the Poisson distribution is HL only.

**Why is calculating a statistic only half the task in IB Maths AI?**
The assessment objectives include communication and interpretation, so a complete answer explains what the calculated value means in the real-world context of the question, not just the number itself.

## Official syllabus

International Baccalaureate Organization, *Diploma Programme Subject Brief -- Mathematics: Applications
and Interpretation*, first assessment 2021, (c) 2019 -- the same source already cited by the
[full syllabus guide](/resources/ib-dp-mathematics-applications-and-interpretation-syllabus-guide/),
which first reproduced Statistics and probability's teaching hours and its place among the five content
strands from it.
