---
title: "A Level Mathematics: Pure Mathematics 3 Trigonometry, Vectors and Complex Numbers — Practice Questions (Cambridge 9709)"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Pure Mathematics 3"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 3.2
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
description: "Original exam-style questions with full worked answers on the R cos(θ − α) form, double-angle equations, locating roots and fixed-point iteration, vector equations of lines, scalar products and areas, square roots of complex numbers and loci of complex numbers, for Cambridge International AS & A Level Mathematics (9709)."
author: "marlbridge-academic-team"
publishedDate: 2026-09-24
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Each question practises a skill tested in the June 2025 Paper 32. After each answer there is a tip and the real question to try next.

---

## Questions

**1.** **(a)** Write `8 sin θ + 15 cos θ` as `R cos(θ − α)`, with R > 0 and 0 < α < ½π, stating α to 4 decimal places.
**(b)** Hence solve the equation `8 sin 2x + 15 cos 2x = 10` for 0 < x < π. **[6]**

**2.** Solve the equation `tan 2x = 4 cot x` for 0° < x < 180°. **[4]**

**3.** By evaluating a suitable function at x = 1.2 and x = 1.4, show that the equation `x = 1 + e⁻ˣ` has a root in the interval 1.2 < x < 1.4. **[2]**

**4.** Starting with x₁ = 1.25, use the iteration `xₙ₊₁ = 1 + e^(−xₙ)` to find the root of `x = 1 + e⁻ˣ` correct to 2 decimal places, showing every iterate to 4 decimal places. **[3]**

**5.** The points A and B have position vectors `i − 2j + 4k` and `3i + j + 2k` relative to the origin O.
**(a)** Write down a vector equation of the line AB.
**(b)** Determine whether each of the points C(7, 7, −2) and D(5, 4, 1) lies on this line. **[4]**

**6.** The points P, Q and R have coordinates (2, 1, −1), (4, 3, 0) and (5, 1, 3).
**(a)** Calculate the exact value of cos QPR by means of a scalar product.
**(b)** Use your answer to part (a) to find the area of triangle PQR in exact form. **[5]**

**7.** Form a quartic equation in x and use it to find both square roots of `1 − 4√3 i`, giving each as x + iy with x and y exact real numbers. **[5]**

**8.** The complex number z satisfies `|z − 6 − 8i| = 3`. Find the least possible value of |z|. **[2]**

---

## Answers

**1.** **(a)** R = √(8² + 15²) = **17** [1]. R cos(θ − α) = R cos θ cos α + R sin θ sin α, so R sin α = 8 and R cos α = 15, giving tan α = 8/15 [1] and **α = 0.4900** [1].
**(b)** 17 cos(2x − 0.4900) = 10, so cos(2x − 0.4900) = 10/17 and 2x − 0.4900 = ±0.9419 + 2kπ [1]. Since 0 < 2x < 2π: 2x = 0.4900 + 0.9419 = 1.4319, or 2x = 0.4900 − 0.9419 + 2π = 5.8313 [1]. So **x = 0.716** or **x = 2.92** [1].

*Tip:* write the new range for 2x before solving, so that you look for every solution in 0 < 2x < 2π and not just the first one.

*Try the real question next:* Cambridge International AS & A Level Mathematics 9709, June 2025, Paper 32, Question 7.

**2.** Write in sines and cosines: `sin 2x/cos 2x = 4 cos x/sin x`, so `sin 2x sin x = 4 cos x cos 2x`, and with sin 2x = 2 sin x cos x this gives `2 sin² x cos x = 4 cos x cos 2x` [1]. Factorise: `cos x (2 sin² x − 4 cos 2x) = 0`, so cos x = 0, giving x = 90° (check: tan 180° = 0 and cot 90° = 0) [1]. Otherwise, using cos 2x = 1 − 2 sin² x: 2 sin² x = 4 − 8 sin² x, so sin² x = 2/5 and sin x = 0.6325 (sin x > 0 in this range) [1]. **x = 39.2°, 90° or 140.8°** [1].

*Tip:* do not divide by an expression such as cos x that can be zero; factorise it out instead. Rewriting everything in tan x here would lose the solution x = 90°, where tan x is undefined but the original equation still holds.

*Try the real question next:* Cambridge International AS & A Level Mathematics 9709, June 2025, Paper 32, Question 4.

**3.** Let f(x) = x − 1 − e⁻ˣ. f(1.2) = 0.2 − e^(−1.2) = −0.101 and f(1.4) = 0.4 − e^(−1.4) = 0.153 [1]. The sign changes and f is continuous, so there is a root between 1.2 and 1.4 [1].

*Tip:* rearrange to f(x) = 0 first, give the values you calculated, and state the conclusion in words.

*Try the real question next:* Cambridge International AS & A Level Mathematics 9709, June 2025, Paper 32, Question 6(b).

**4.** Iterates: 1.25, 1.2865, 1.2762, 1.2791, 1.2783, 1.2785, 1.2785 [2]. The root is **1.28** to 2 decimal places [1].

*Tip:* keep going until two successive iterates agree when rounded to the accuracy asked for, and use the full calculator value each time, not the rounded one.

*Try the real question next:* Cambridge International AS & A Level Mathematics 9709, June 2025, Paper 32, Question 6(c).

**5.** **(a)** AB = (3i + j + 2k) − (i − 2j + 4k) = 2i + 3j − 2k [1]. **r = i − 2j + 4k + λ(2i + 3j − 2k)** [1].
**(b)** For C, the x-component gives 1 + 2λ = 7, so λ = 3; then y = −2 + 9 = 7 and z = 4 − 6 = −2, which match, so **C lies on the line** [1]. For D, 1 + 2λ = 5 gives λ = 2; then y = 4 matches but z = 4 − 4 = 0 ≠ 1, so **D does not lie on the line** [1].

*Tip:* find λ from one component, then check it in all the other components. One matching component is not enough.

*Try the real question next:* Cambridge International AS & A Level Mathematics 9709, June 2025, Paper 32, Question 9(a).

**6.** **(a)** PQ = (2, 2, 1) and PR = (3, 0, 4) [1]. PQ · PR = 6 + 0 + 4 = 10, |PQ| = 3 and |PR| = 5 [1]. cos QPR = 10/15 = **2/3** [1].
**(b)** sin QPR = √(1 − 4/9) = √5/3 [1]. Area = ½ × 3 × 5 × √5/3 = **5√5/2** [1].

*Tip:* both vectors must start at the vertex of the angle (here P). Using QP instead of PQ changes the sign of the scalar product and gives the wrong angle.

*Try the real question next:* Cambridge International AS & A Level Mathematics 9709, June 2025, Paper 32, Question 9.

**7.** Let (x + iy)² = 1 − 4√3 i. Comparing real and imaginary parts: x² − y² = 1 and 2xy = −4√3 [1]. So y = −2√3/x and x² − 12/x² = 1, giving `x⁴ − x² − 12 = 0` [1]. `(x² − 4)(x² + 3) = 0`, and x is real, so x² = 4 and x = ±2 [1]. Then y = ∓√3 [1]. The square roots are **2 − √3 i** and **−2 + √3 i** [1].

*Tip:* match the sign of y to each value of x using 2xy, and reject x² = −3 because x must be real.

*Try the real question next:* Cambridge International AS & A Level Mathematics 9709, June 2025, Paper 32, Question 5.

**8.** The points lie on a circle with centre 6 + 8i and radius 3. The centre is √(6² + 8²) = 10 from the origin [1]. The least value of |z| is 10 − 3 = **7** [1].

*Tip:* |z − a| = r is a circle with centre a. The nearest point to the origin lies on the line through the origin and the centre.

*Try the real question next:* Cambridge International AS & A Level Mathematics 9709, June 2025, Paper 32, Question 3.

---

## Where marks are usually lost

- α given in degrees or to too few decimal places when radians to 4 decimal places were asked for.
- Only one solution found after solving for 2x, because the range was not doubled.
- A point tested on a line using only one component.
- Vectors for an angle not both taken from the vertex.
- Signs of x and y mixed up when square roots of a complex number are paired.
