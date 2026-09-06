---
title: "IB DP Mathematics: Analysis and Approaches -- Functions Strand Practice Questions"
resourceType: "practice-questions"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5
description: "Original practice questions with full worked answers on domain and range, composite and inverse functions, transformations, and equations combining exponentials and logarithms, for the Functions strand of IB Diploma Programme Mathematics: Analysis and Approaches."
author: "marlbridge-academic-team"
publishedDate: 2026-09-06
featured: false
---

> **These are original questions written for Marlbridge**, in the style and at the
> standard of the examination. They are **not** reproduced past-paper questions --
> the IB holds copyright in its own papers. Use these alongside the official past
> papers available through your school or the IB store.

Related: [Functions study guide](/resources/ib-dp-mathematics-aa-functions/) and
[revision notes](/resources/ib-dp-mathematics-aa-functions-revision-notes/).

---

## Section A

**1.** State the domain and range of $f(x) = \sqrt{x - 3}$. **[2]**

**2.** Given $f(x) = 2x - 1$, find $f^{-1}(x)$. **[2]**

**3.** Describe the transformation that maps $y = f(x)$ to $y = f(x) - 5$. **[1]**

---

## Section B

**4.** $f(x) = x^2 - 4$ and $g(x) = 3x + 1$.

**(a)** Find $f(g(1))$. **[2]**
**(b)** Find $g(f(1))$. **[2]**

**5.** The graph of $y = x^2$ is transformed to $y = -3(x+2)^2 + 1$.

**(a)** Describe the sequence of transformations applied to $y = x^2$ to obtain this graph. **[3]**
**(b)** State the coordinates of the resulting graph's vertex, and whether it is a maximum or minimum point. **[2]**

**6.** Solve $2^{x+1} = 30$, giving your answer to 3 significant figures. **[3]**

---

## Section C

**7.** Solve $\log_2(x) + \log_2(x - 2) = 3$, showing why one of the two solutions to the resulting quadratic must be rejected. **[5]**

**8.** $f(x) = \dfrac{2x+1}{x-3}$, $x \neq 3$.

**(a)** Find $f^{-1}(x)$, and state the value $x$ must not take. **[4]**
**(b)** Verify that $f^{-1}(f(0)) = 0$. **[2]**

---

## Worked answers

**1.** Domain: $x \geq 3$ (the expression under the root cannot be negative). Range: $f(x) \geq 0$ (a square root is never negative). **[2]**

**2.** Let $y = 2x - 1$, so $x = (y+1)/2$. Therefore $f^{-1}(x) = (x+1)/2$. **[2]**

**3.** A vertical translation of 5 units downward (a translation by $(0, -5)$). **[1]**

**4. (a)** $g(1) = 3(1) + 1 = 4$. $f(g(1)) = f(4) = 4^2 - 4 = 12$. **[2]**
**(b)** $f(1) = 1^2 - 4 = -3$. $g(f(1)) = g(-3) = 3(-3) + 1 = -8$. **[2]**

**5. (a)** Starting from $y = x^2$: a horizontal translation of 2 units left, giving $y = (x+2)^2$; then a vertical stretch with scale factor 3 and a reflection in the $x$-axis, giving $y = -3(x+2)^2$; then a vertical translation of 1 unit up, giving $y = -3(x+2)^2 + 1$. **[3]**
**(b)** The vertex of $y = x^2$ is $(0,0)$. The horizontal translation moves it to $(-2, 0)$; the stretch and reflection leave a vertex value of 0 unchanged (since $-3(0) = 0$), so it remains $(-2, 0)$; the vertical translation moves it to $(-2, 1)$. Since the coefficient of the squared term is negative ($-3$), this is a maximum point. **[2]**

**6.** Taking $\log$ of both sides: $(x+1)\ln 2 = \ln 30$, so $x + 1 = \dfrac{\ln 30}{\ln 2} = \dfrac{3.4012}{0.6931} = 4.9069$. Therefore $x = 3.9069... \approx 3.91$ (3 s.f.). **[3]**

**7.** Combining the logarithms: $\log_2[x(x-2)] = 3$, so $x(x-2) = 2^3 = 8$, giving $x^2 - 2x - 8 = 0$. Factorising: $(x-4)(x+2) = 0$, so $x = 4$ or $x = -2$. The original equation requires both $\log_2(x)$ and $\log_2(x-2)$ to be defined, which needs $x > 0$ and $x > 2$ simultaneously, i.e. $x > 2$. Since $x = -2$ does not satisfy this, it is rejected; only $x = 4$ is a valid solution. Checking: $\log_2(4) + \log_2(2) = 2 + 1 = 3$. **[5]**

**8. (a)** Let $y = \dfrac{2x+1}{x-3}$. Then $y(x-3) = 2x+1$, so $yx - 3y = 2x + 1$, giving $yx - 2x = 1 + 3y$, so $x(y-2) = 1 + 3y$, and $x = \dfrac{1+3y}{y-2}$. Therefore $f^{-1}(x) = \dfrac{1+3x}{x-2}$, and $x$ must not take the value $2$ (since this would make the denominator zero). **[4]**
**(b)** $f(0) = \dfrac{2(0)+1}{0-3} = \dfrac{1}{-3} = -\dfrac{1}{3}$. Then $f^{-1}\left(-\dfrac{1}{3}\right) = \dfrac{1 + 3\left(-\frac{1}{3}\right)}{-\frac{1}{3} - 2} = \dfrac{1 - 1}{-\frac{7}{3}} = \dfrac{0}{-\frac{7}{3}} = 0$, confirming $f^{-1}(f(0)) = 0$. **[2]**

## A note on method

Several of these questions (5, 7 and 8) are deliberately built so that a purely mechanical answer --
applying a rule without checking it actually applies -- gives a wrong or incomplete result. Question 5
rewards tracking what happens to the vertex specifically at each stage of a sequence of transformations,
rather than only substituting a single coordinate into the final equation and hoping the transformations
were applied in a sensible order. Question 7 is a reminder that solving a logarithmic equation by
combining logs and clearing them algebraically produces a quadratic with two roots, but the logarithmic
form itself restricts the domain, so checking each root against that restriction is not optional working
-- it is part of the method the mark scheme expects to see, and a numerically correct root that is not
checked against the domain, or that is left in without comment, typically does not receive full credit.
Question 8 similarly expects the excluded value of the inverse function's domain to be stated explicitly,
not left implicit, since a function defined by a fraction is only fully specified once its domain
restriction is given alongside the algebraic rule. Building this habit -- stating restrictions and
justifying rejected solutions explicitly, rather than only writing down a final numerical answer -- is
worth practising across every Functions question, not just the ones where a restriction happens to be
the main point being tested.

## Official syllabus

International Baccalaureate Organization, *Diploma Programme Subject Brief -- Mathematics: Analysis and Approaches*, first assessment 2021 -- the same source cited by the [study guide](/resources/ib-dp-mathematics-aa-functions/) and [revision notes](/resources/ib-dp-mathematics-aa-functions-revision-notes/). Verified 2026-09-06.
