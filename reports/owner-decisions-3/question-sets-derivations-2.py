# Independent recomputation of every answer in the three draft question sets
# (9709 Functions and algebra, 9701 Acids/bases/pH/titration, 0625 Energy/work/power).
# Run: python question-sets-derivations-2.py   (standard library only)
# Method: each answer is recomputed from the question data and, where possible,
# by a second independent route (sampling, bisection, round trip, brute force).
# "page says" is the figure printed in the draft page's mark scheme.
from math import sqrt, log10, isclose

fails = []


def check(label, got, want, tol=1e-9):
    ok = abs(got - want) <= tol * max(1, abs(want))
    print(("PASS " if ok else "FAIL ") + f"{label}: computed {got!r}, page says {want!r}")
    if not ok:
        fails.append(label)


def truth(label, cond):
    print(("PASS " if cond else "FAIL ") + label)
    if not cond:
        fails.append(label)


def bisect(f, a, b, n=200):
    fa = f(a)
    for _ in range(n):
        m = (a + b) / 2
        if (f(m) > 0) == (fa > 0):
            a, fa = m, f(m)
        else:
            b = m
    return (a + b) / 2


print("=== SET 1: 9709 PURE MATHEMATICS 1, FUNCTIONS AND ALGEBRA (1.1, 1.2) ===")
# Q1 completing the square x^2 - 6x + 11 = (x-3)^2 + 2
f = lambda x: x * x - 6 * x + 11
for x in (-2.0, 0.0, 1.7, 3.0, 8.5):
    check(f"M1 (x-3)^2+2 at x={x}", (x - 3) ** 2 + 2, f(x))
check("M1(b) minimum of f over -20..20 step 0.001", min(f(i / 1000) for i in range(-20000, 20000)), 2, 1e-6)
# Q2 2x^2 + kx + 8 = 0 has no real roots iff -8 < k < 8
nr = lambda k: k * k - 4 * 2 * 8 < 0
truth("M2 k=-7.99, 0, 7.99 give no real roots", all(nr(k) for k in (-7.99, 0, 7.99)))
truth("M2 k=-8, 8 (repeated root) and k=-9, 9 do have real roots", not any(nr(k) for k in (-8, 8, -9, 9)))
# Q3 2x^2 - 5x - 12 > 0
g = lambda x: 2 * x * x - 5 * x - 12
check("M3 g(-1.5)", g(-1.5), 0)
check("M3 g(4)", g(4), 0)
xs = [i / 100 for i in range(-1000, 1000)]
truth("M3 g>0 exactly when x<-1.5 or x>4 (sampled)",
      all((g(x) > 0) == (x < -1.5 or x > 4) for x in xs if abs(x + 1.5) > 1e-9 and abs(x - 4) > 1e-9))
# Q4 2x + y = 7, x^2 + y^2 = 10
for x, y in ((3, 1), (2.6, 1.8)):
    check(f"M4 line at ({x},{y})", 2 * x + y, 7)
    check(f"M4 circle at ({x},{y})", x * x + y * y, 10)
disc = 28 ** 2 - 4 * 5 * 39
check("M4 discriminant of 5x^2-28x+39", disc, 4)
check("M4 smaller root", (28 - sqrt(disc)) / 10, 2.6)
check("M4 larger root", (28 + sqrt(disc)) / 10, 3)
pts = [(x / 10, round(7 - 2 * x / 10, 10)) for x in range(-60, 61)
       if abs((x / 10) ** 2 + (7 - 2 * x / 10) ** 2 - 10) < 1e-9]
check("M4 grid search (steps of 0.1) finds exactly 2 intersection points", len(pts), 2)
# Q5 x^4 - 13x^2 + 36 = 0
for x in (2, -2, 3, -3):
    check(f"M5 root x={x}", x ** 4 - 13 * x * x + 36, 0)
truth("M5 no other integer roots in -10..10", [x for x in range(-10, 11) if x ** 4 - 13 * x * x + 36 == 0] == [-3, -2, 2, 3])
# Q6 f(x)=3x-2, g(x)=x^2+1
F = lambda x: 3 * x - 2
G = lambda x: x * x + 1
for x in (-1.3, 0.0, 2.0, 5.5):
    check(f"M6(a) fg(x)=3x^2+1 at {x}", F(G(x)), 3 * x * x + 1)
    check(f"M6(a) gf(x)=9x^2-12x+5 at {x}", G(F(x)), 9 * x * x - 12 * x + 5)
h = lambda x: F(G(x)) - G(F(x))
r1 = 1 + sqrt(3) / 3
r2 = 1 - sqrt(3) / 3
check("M6(b) fg=gf at 1+sqrt3/3", h(r1), 0)
check("M6(b) fg=gf at 1-sqrt3/3", h(r2), 0)
check("M6(b) bisection root in (1,2)", bisect(h, 1, 2), r1)
check("M6(b) bisection root in (0,1)", bisect(h, 0, 1), r2)
check("M6(b) 3sf of larger root", round(r1, 2), 1.58)
check("M6(b) 3sf of smaller root", round(r2, 3), 0.423)
# Q7 f(x)=x^2-4x+1, x>=2
f7 = lambda x: x * x - 4 * x + 1
for x in (2, 2.5, 4, 7.3):
    check(f"M7(a) (x-2)^2-3 at {x}", (x - 2) ** 2 - 3, f7(x))
check("M7(a) minimum over x>=2", min(f7(2 + i / 1000) for i in range(0, 20000)), -3)
finv = lambda y: 2 + sqrt(y + 3)
for x in (2, 2.5, 4, 7.3):
    check(f"M7(b) f^-1(f({x}))", finv(f7(x)), x)
for y in (-3, 0, 5, 12.5):
    check(f"M7(b) f(f^-1({y}))", f7(finv(y)), y)
truth("M7(b) f is one-one on x>=2 (strictly increasing, sampled)",
      all(f7(2 + i / 100) < f7(2 + (i + 1) / 100) for i in range(0, 2000)))
truth("M7(b) f is NOT one-one on all real x (f(1) = f(3))", f7(1) == f7(3))
# Q8 g(x) = (2x+3)/(x-1), x != 1
g8 = lambda x: (2 * x + 3) / (x - 1)
g8i = lambda y: (y + 3) / (y - 2)
for x in (-4, 0, 0.5, 2, 9):
    check(f"M8(a) g^-1(g({x}))", g8i(g8(x)), x)
for y in (-3, 0, 1, 3, 10):
    check(f"M8(a) g(g^-1({y}))", g8(g8i(y)), y)
truth("M8(c) g(x) - 2 = 5/(x-1), which is never 0, so g never takes the value 2 (sampled)",
      all(isclose(g8(x) - 2, 5 / (x - 1)) and g8(x) != 2 for x in (-50, -3, 0, 0.9, 1.1, 4, 80)))
# Q9 minimum B(4,-1) and transformations, checked on a concrete f with that minimum
ff = lambda x: (x - 4) ** 2 - 1
grid = [i / 100 for i in range(0, 1200)]
m_a = min(((ff(x) + 3), x) for x in grid)
m_b = min(((ff(x - 1)), x) for x in grid)
m_c = min(((2 * ff(x)), x) for x in grid)
m_d = min(((ff(2 * x)), x) for x in grid)
check("M9(a) y=f(x)+3: minimum x", m_a[1], 4)
check("M9(a) y=f(x)+3: minimum y", m_a[0], 2)
check("M9(b) y=f(x-1): minimum x", m_b[1], 5)
check("M9(b) y=f(x-1): minimum y", m_b[0], -1)
check("M9(c) y=2f(x): minimum x", m_c[1], 4)
check("M9(c) y=2f(x): minimum y", m_c[0], -2)
check("M9(d) y=f(2x): minimum x", m_d[1], 2)
check("M9(d) y=f(2x): minimum y", m_d[0], -1)
# Q10 x^2 + kx + (k+3) = 0 has a repeated root
for k in (6, -2):
    check(f"M10(a) discriminant at k={k}", k * k - 4 * (k + 3), 0)
truth("M10(a) no other integer k in -50..50", [k for k in range(-50, 51) if k * k - 4 * (k + 3) == 0] == [-2, 6])
check("M10(b) k=6, x=-3 is a root", (-3) ** 2 + 6 * (-3) + 9, 0)
check("M10(b) k=-2, x=1 is a root", 1 + (-2) * 1 + 1, 0)
marks1 = [3, 3, 3, 5, 4, 6, 6, 5, 6, 6]
check("Set 1 total marks", sum(marks1), 47)

print()
print("=== SET 2: 9701 ACIDS, BASES, pH AND TITRATION (25.1; AS 2.4 assumed) ===")
Kw = 1.00e-14
pH = lambda h: -log10(h)
# Q1 0.0250 mol dm-3 HCl
check("A1 pH of 0.0250 mol/dm3 HCl", round(pH(0.0250), 2), 1.60)
# Q2 0.0400 NaOH
h2 = Kw / 0.0400
check("A2 [H+] = Kw/[OH-]", h2, 2.5e-13)
check("A2 pH", round(pH(h2), 2), 12.60)
check("A2 pH via 14 - pOH (second route)", round(14 + log10(0.0400), 2), 12.60)
# Q3 0.0150 Ba(OH)2, [OH-] = 0.0300
oh3 = 2 * 0.0150
h3 = Kw / oh3
check("A3 [OH-]", oh3, 0.0300)
check("A3 [H+] (to 3 s.f., in 1e-13)", round(h3 / 1e-13, 2), 3.33)
check("A3 pH", round(pH(h3), 2), 12.48)
# Q4 pH 3.45
check("A4 [H+] = 10^-3.45 (3 s.f., in 1e-4)", round(10 ** -3.45 / 1e-4, 2), 3.55)
check("A4 round trip: pH of 3.55e-4", round(pH(3.55e-4), 2), 3.45)
# Q5 ethanoic acid 0.100, Ka = 1.74e-5
Ka = 1.74e-5
h5 = sqrt(Ka * 0.100)
check("A5(b) [H+] (in 1e-3)", round(h5 / 1e-3, 2), 1.32)
check("A5(b) pH", round(pH(h5), 2), 2.88)
c = 0.100
hx = (-Ka + sqrt(Ka * Ka + 4 * Ka * c)) / 2  # exact solution of Ka = x^2/(c-x)
truth("A5(c) approximation is fair: exact [H+] within 1% of approximate", abs(hx - h5) / hx < 0.01)
check("A5(c) exact pH to 2 d.p. equals approximate pH", round(pH(hx), 2), 2.88)
# Q6 weak acid HX 0.200 pH 2.85
h6 = 10 ** -2.85
Ka6 = h6 * h6 / 0.200
check("A6 [H+] (in 1e-3)", round(h6 / 1e-3, 2), 1.41)
check("A6 Ka (3 s.f., in 1e-6)", round(Ka6 / 1e-6, 2), 9.98)
check("A6 pKa to 2 d.p.", round(-log10(Ka6), 2), 5.00)
# Q7 titration: 25.0 cm3 NaOH vs 0.100 mol/dm3 HCl; titres
titres = [22.40, 21.60, 21.70, 21.60]
conc = [t for t in titres if abs(t - 21.60) <= 0.10]
mean = sum(conc) / len(conc)
check("A7(a) number of concordant titres used", len(conc), 3)
check("A7(a) mean titre of concordant results", round(mean, 2), 21.63)
nHCl = 0.100 * mean / 1000
cNaOH = nHCl / 0.0250
check("A7(a) n(HCl) (in 1e-3)", round(nHCl / 1e-3, 2), 2.16)
check("A7(a) c(NaOH) 3 s.f.", round(cNaOH, 4), 0.0865)
check("A7(b) pH of the NaOH using 0.0865", round(pH(Kw / 0.0865), 2), 12.94)
check("A7(b) same pH from the unrounded concentration", round(pH(Kw / cNaOH), 2), 12.94)
# Q8 H2SO4 + 2NaOH
nH2 = 0.0500 * 0.0250
nOH = 2 * nH2
V8 = nOH / 0.150 * 1000
check("A8 n(H2SO4) (in 1e-3)", round(nH2 / 1e-3, 2), 1.25)
check("A8 n(NaOH) (in 1e-3)", round(nOH / 1e-3, 2), 2.50)
check("A8 V(NaOH) in cm3, 3 s.f.", round(V8, 1), 16.7)
# Q9 mixing 25.0 cm3 0.200 HCl + 40.0 cm3 0.100 NaOH
nA = 0.200 * 0.0250
nB = 0.100 * 0.0400
ex = nA - nB
c9 = ex / 0.0650
check("A9 n(HCl) (in 1e-3)", round(nA / 1e-3, 2), 5.00)
check("A9 n(NaOH) (in 1e-3)", round(nB / 1e-3, 2), 4.00)
check("A9 n(excess H+) (in 1e-3)", round(ex / 1e-3, 2), 1.00)
check("A9 [H+] (in 1e-2)", round(c9 / 1e-2, 2), 1.54)
check("A9 pH", round(pH(c9), 2), 1.81)
# Q10 buffer
h10 = Ka * 0.200 / 0.150
check("A10(a) [H+] (in 1e-5)", round(h10 / 1e-5, 2), 2.32)
check("A10(a) pH", round(pH(h10), 2), 4.63)
pH0 = pH(Ka * 0.200 / 0.150)
pH1 = pH(Ka * (0.200 + 0.0010) / (0.150 - 0.0010))  # 0.0010 mol H+ added to 1.00 dm3 of buffer
truth("A10(b) adding 0.0010 mol H+ to 1.00 dm3 of the buffer changes pH by less than 0.02", abs(pH1 - pH0) < 0.02)
print(f"      (change in pH on adding 0.0010 mol H+ to 1.00 dm3: {pH1 - pH0:+.4f})")
marks2 = [2, 3, 3, 2, 6, 4, 7, 3, 4, 5]
check("Set 2 total marks", sum(marks2), 39)

print()
print("=== SET 3: 0625 ENERGY, WORK AND POWER (1.7) ===")
g = 9.8
check("P1 W = Fd = 45 x 6.0", 45 * 6.0, 270)
check("P2 P = W/t = 4800/12", 4800 / 12, 400)
Ek = 0.5 * 1200 * 15 ** 2
check("P4(a) Ek", Ek, 135000)
check("P4(a) Ek in 1e5 J", Ek / 1e5, 1.35)
check("P4(b) d = W/F = 135000/6750", Ek / 6750, 20.0)
Ep = 65.0 * g * 3.20
check("P5(a) change in Ep", Ep, 2038.4)
check("P5(a) 3 s.f.", float(f"{Ep:.3g}"), 2040)
Pw = Ep / 8.00
check("P5(b) power", Pw, 254.8)
check("P5(b) 3 s.f.", float(f"{Pw:.3g}"), 255)
v6 = sqrt(2 * g * 4.0)
check("P6 speed", v6, 8.854, 1e-3)
check("P6 speed 3 s.f.", float(f"{v6:.3g}"), 8.85)
check("P6 mass cancels (m=0.50 and m=7.3 give the same v)", sqrt(2 * (0.5 * g * 4.0) / 0.5), sqrt(2 * (7.3 * g * 4.0) / 7.3))
check("P6 energy balance mgh - (1/2)mv^2", 0.50 * g * 4.0 - 0.5 * 0.50 * v6 ** 2, 0)
useful = 200 * g * 1.5
check("P7(a) useful energy output", useful, 2940)
check("P7(a) efficiency %", useful / 5000 * 100, 58.8)
check("P7(b) energy not usefully transferred", 5000 - useful, 2060)
out = 4000 * 0.75
check("P8(a) useful power output", out, 3000)
W8 = 600 * g * 12
check("P8(b) work done raising the load", W8, 70560)
t8 = W8 / out
check("P8(b) time", t8, 23.52)
check("P8(b) time 3 s.f.", float(f"{t8:.3g}"), 23.5)
W10 = 80 * 5.0
check("P10(a) work done", W10, 400)
v10 = sqrt(2 * W10 / 25)
check("P10(c) speed", v10, 5.657, 1e-3)
check("P10(c) speed 3 s.f.", float(f"{v10:.3g}"), 5.66)
check("P10(c) Ek at that speed returns 400 J", 0.5 * 25 * v10 ** 2, 400)
marks3 = [2, 2, 3, 4, 4, 3, 5, 5, 3, 6]
check("Set 3 total marks", sum(marks3), 37)

print()
print("FAILURES:", fails if fails else "none")
