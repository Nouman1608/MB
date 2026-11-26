# Independent recomputation of every answer in the three draft question sets.
# Run: python question-sets-derivations.py   (standard library only)
from fractions import Fraction as F
from math import comb, pi, log
from itertools import product
from collections import Counter

fails = []


def check(label, got, want, tol=1e-9):
    ok = abs(got - want) <= tol * max(1, abs(want))
    print(("PASS " if ok else "FAIL ") + f"{label}: computed {got!r}, page says {want!r}")
    if not ok:
        fails.append(label)


def d1(f, x, h=1e-6):  # independent numerical derivative
    return (f(x + h) - f(x - h)) / (2 * h)


def d2(f, x, h=1e-4):
    return (f(x + h) - 2 * f(x) + f(x - h)) / (h * h)


print("=== 9709 DIFFERENTIATION (1.7) ===")
f = lambda x: 5 * x**4 - 8 * x**0.5 + 3 / x**2
g = lambda x: 20 * x**3 - 4 * x**-0.5 - 6 * x**-3
for x in (0.7, 1.9, 4.0):
    check(f"D1 dy/dx at x={x}", d1(f, x), g(x), 1e-6)
f = lambda x: (3 * x - 2) ** 4
check("D2 gradient at x=1", d1(f, 1), 12, 1e-6)
f = lambda x: 2 * x**3 - 9 * x**2 + 12 * x + 1
for x in (1, 2):
    check(f"D3 stationary at x={x}", d1(f, x), 0, 1e-6)
check("D3 y(1)", f(1), 6)
check("D3 y(2)", f(2), 5)
check("D3 y'' at 1 (12x-18)", d2(f, 1), -6, 1e-5)
check("D3 y'' at 2", d2(f, 2), 6, 1e-5)
f = lambda x: x**2 + 6 / x
check("D4 y(2)", f(2), 7)
check("D4 gradient at 2", d1(f, 2), 2.5, 1e-6)
check("D4 tangent y-intercept 7-2.5*2", 7 - 2.5 * 2, 2)
check("D4 normal gradient", -1 / 2.5, -0.4)
check("D4 normal intercept 7+0.4*2", 7 + 0.4 * 2, 7.8)
check("D4 normal meets x-axis at x", 7.8 / 0.4, 19.5)
f = lambda x: 2 * x**3 - 3 * x**2 - 36 * x
for x in (-2, 3):
    check(f"D5 f'({x})=0", d1(f, x), 0, 1e-5)
print("PASS D5 sign check f'(0)<0:", d1(f, 0) < 0, " f'(4)>0:", d1(f, 4) > 0, " f'(-3)>0:", d1(f, -3) > 0)
check("D6 dA/dt = 2*pi*8*0.05", 2 * pi * 8 * 0.05, 2.5133, 1e-4)
for x in (3.0, 10.0, 12.5):
    check(f"D7 S = x^2+4xh with h=500/x^2, x={x}", x**2 + 4 * x * (500 / x**2), x**2 + 2000 / x)
S = lambda x: x**2 + 2000 / x
check("D7 dS/dx at 10", d1(S, 10), 0, 1e-6)
check("D7 S(10)", S(10), 300)
check("D7 S'' at 10", d2(S, 10), 6, 1e-4)
best = min((S(x / 1000), x / 1000) for x in range(1000, 40000))
check("D7 brute-force minimum at x", best[1], 10, 1e-3)
f = lambda x: x**3 - 3 * x**2 + 2 * x
for x in (0, 2):
    check(f"D8 gradient at x={x}", d1(f, x), 2, 1e-5)
    check(f"D8 y({x})", f(x), 0)
f = lambda x: (2 * x + 1) ** 3
check("D9 6(2x+1)^2 at x=1", d1(f, 1), 54, 1e-5)
check("D9 wrong answer 3(2x+1)^2 at x=1 differs", 3 * 9, 27)
f = lambda x: x**3 - 12 * x
check("D10 y(2)", f(2), -16)
check("D10 y'(2)", d1(f, 2), 0, 1e-6)
check("D10 y''(2)", d2(f, 2), 12, 1e-4)

print("\n=== 9709 DISCRETE RANDOM VARIABLES (5.4) ===")
p = F(1) - F(3, 10) - F(2, 10) - F(1, 10)
check("S1 p", float(p), 0.4)
xs = [2, 4, 6, 8]
ps = [F(3, 10), F(2, 10), p, F(1, 10)]
E = sum(x * q for x, q in zip(xs, ps))
E2 = sum(x * x * q for x, q in zip(xs, ps))
check("S1 E(X)", float(E), 4.6)
check("S1 E(X^2)", float(E2), 25.2)
check("S1 Var(X)", float(E2 - E * E), 4.04)
b = lambda n, k, pr: comb(n, k) * pr**k * (1 - pr) ** (n - k)
check("S2 P(X=4) B(10,0.35)", b(10, 4, 0.35), 0.2377, 1e-3)
print("   S2 unrounded P(X=4)=%.6f  P(X<=2)=%.6f  P(X>=3)=%.6f" % (b(10, 4, .35), sum(b(10, k, .35) for k in range(3)), 1 - sum(b(10, k, .35) for k in range(3))))
check("S2 P(X>=3)", 1 - sum(b(10, k, 0.35) for k in range(3)), 0.7384, 1e-3)
print("   S3 unrounded P10=%.6f P11=%.6f P12=%.6f" % (b(12, 10, .8), b(12, 11, .8), b(12, 12, .8)))
check("S3 P(X=10) B(12,0.8)", b(12, 10, 0.8), 0.2835, 1e-3)
check("S3 P(X>=11)", b(12, 11, 0.8) + b(12, 12, 0.8), 0.2749, 1e-3)
check("S4 E(X) B(40,0.15)", 40 * 0.15, 6)
check("S4 Var(X)", 40 * 0.15 * 0.85, 5.1)
pg = lambda r, pr: pr * (1 - pr) ** (r - 1)
check("S5 P(X=5) Geo(0.2)", pg(5, 0.2), 0.08192, 1e-9)
check("S5 E(X)", 1 / 0.2, 5)
check("S5 P(X>3)", 0.8**3, 0.512)
check("S5 P(X>3) by summation", 1 - sum(pg(r, 0.2) for r in (1, 2, 3)), 0.512, 1e-9)
n = next(n for n in range(1, 100) if 1 - 0.8**n > 0.95)
check("S6 smallest n", n, 14)
print("   S6 n=13 -> %.5f ; n=14 -> %.5f ; ln0.05/ln0.8 = %.4f" % (1 - .8**13, 1 - .8**14, log(.05) / log(.8)))
sol = [(a / 10, c / 10) for a in range(11) for c in range(11) if a + c == 7 and abs(a / 10 + 2 * c / 10 + 0.9 - 2.0) < 1e-9]
print("   S7 solutions in tenths:", sol)
check("S7 a", sol[0][0], 0.3)
check("S7 b", sol[0][1], 0.4)
c = Counter(abs(i - j) for i, j in product(range(1, 5), repeat=2))
print("   S8 counts out of 16:", dict(sorted(c.items())))
check("S8 P(0)", c[0] / 16, 0.25)
check("S8 P(1)", c[1] / 16, 0.375)
check("S8 P(2)", c[2] / 16, 0.25)
check("S8 P(3)", c[3] / 16, 0.125)
E = sum(F(k * v, 16) for k, v in c.items())
E2 = sum(F(k * k * v, 16) for k, v in c.items())
check("S8 E(X)", float(E), 1.25)
print("   S8 E(X^2) =", E2, " Var =", E2 - E * E, "=", float(E2 - E * E))
check("S8 Var(X)", float(E2 - E * E), 0.9375)  # corrected from a wrong first-draft figure; script caught it
net = {7: F(1, 6), 0: F(2, 6), -3: F(3, 6)}
check("S9 E(net gain)", float(sum(k * v for k, v in net.items())), -1 / 3, 1e-12)

print("\n=== 9701 CHEMICAL EQUILIBRIA Kc and Kp (7.1) ===")
check("C3 Kc H2+I2<=>2HI", 0.90**2 / (0.20 * 0.15), 27.0)
so3 = 0.60
so2 = 0.80 - so3
o2 = 0.50 - so3 / 2
check("C4 n(SO2) at eq", so2, 0.20)
check("C4 n(O2) at eq", o2, 0.20)
cs = [so3 / 4, so2 / 4, o2 / 4]
print("   C4 concentrations SO3, SO2, O2 =", cs)
check("C4 Kc", cs[0] ** 2 / (cs[1] ** 2 * cs[2]), 180.0, 1e-9)
print("   C4 common error (volume ignored) gives", so3**2 / (so2**2 * o2))
ester = 4.0 * 0.30 * 0.20 / 0.30
check("C5 n(ester)", ester, 0.80)
check("C5 Kc back-check", (ester * 0.30) / (0.30 * 0.20), 4.0)
check("C6 [N2O4] = 170 x 0.020^2", 170 * 0.020**2, 0.068)
nt = 1.50
x1, x2 = 0.50 / nt, 1.00 / nt
p1, p2 = x1 * 200, x2 * 200
check("C7 x(N2O4)", x1, 1 / 3)
check("C7 x(NO2)", x2, 2 / 3)
check("C7 p(N2O4) kPa", p1, 66.667, 1e-5)
check("C7 p(NO2) kPa", p2, 133.333, 1e-5)
check("C7 Kp kPa", p2**2 / p1, 266.667, 1e-5)
print("   C7 Kp to 3 s.f. = %.3g" % (p2**2 / p1))
kc8 = 0.30**2 / (0.50 * 1.50**3)
print("   C8 Kc = %.5f -> 3 s.f. %.3g" % (kc8, kc8))
check("C8 Kc", kc8, 0.0533, 1e-2)
print("   C9 gas moles: N2+3H2 =", 1 + 3, "; 2NH3 =", 2)
print("\nFAILURES:", fails if fails else "none")
