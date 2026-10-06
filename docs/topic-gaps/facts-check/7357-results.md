# Facts check -- group 7357 (AQA A-level Mathematics), D-399

All 54 pages in /home/claude/gaps/facts/7357.txt were read. The statistics pages were read in full, and so were the
mechanics study guides and quantities/units pages. The pure, kinematics, forces and moments notes and practice pages
were scanned for named results, constants, real data and software or calculator behaviour. Most content is method,
definition, invented question data or arithmetic, none of which is in scope. Statements the specification itself
makes were checked against /home/claude/syllabi/aqa-current/7357-current.txt and skipped. These include: the DEFRA
Family Food 2014 large data set for 2018-19, the 2020 replacement data set being available only on the AQA website,
the four DfE requirements, g not being a universal constant, the Appendix B formulae, the calculator minimum, Paper 3
covering K-O, OT2.6 and aim 4.1.

## Claims checked

| # | Claim | Page(s) | Verdict | Source |
|---|---|---|---|---|
| 1 | STDEV.P = standard deviation with divisor n (population) | use-of-data guide, notes | Confirmed | https://support.microsoft.com/en-US/Excel/functions/stdev-p-function |
| 2 | STDEV.S = standard deviation with divisor n − 1 (sample) | use-of-data guide, notes, practice Q3(b) | Confirmed | https://support.microsoft.com/en-us/excel/functions/stdev-s-function |
| 3 | QUARTILE.INC gives quartiles | use-of-data guide, notes | Confirmed (percentile 0..1 inclusive) | https://support.microsoft.com/en-US/Excel/functions/quartile-inc-function |
| 4 | COUNTBLANK counts blank cells | use-of-data guide, notes | Confirmed | https://support.microsoft.com/en-us/Excel/countblank-function |
| 5 | "count rows with COUNT" | use-of-data guide | **Corrected**: COUNT counts only cells containing numbers and skips blanks and text, so it does not count rows | https://support.microsoft.com/en-US/Excel/count-function |
| 6 | =RAND() column, sort, take first rows gives a simple random sample | use-of-data guide, notes, practice | Confirmed (RAND gives a uniform random number in [0, 1)) | https://support.microsoft.com/excel/functions/rand-function |
| 7 | AVERAGE, MEDIAN, MIN, MAX as Excel-style function names | use-of-data guide, notes | Confirmed (standard Excel function names) | Microsoft Support function pages above |
| 8 | Different packages/calculators compute quartiles slightly differently | use-of-data guide, notes, data presentation guide | Confirmed (Hyndman & Fan: nine definitions in common software) | https://blogs.sas.com/content/iml/2017/05/24/definitions-sample-quantiles.html |
| 9 | Large data set description (DEFRA Family Food 2014; new set from 2020, AQA website only) | use-of-data, sampling | Matches the spec (3.21.1); no description beyond the spec | spec text |
| 10 | g = 9.8 or 9.81 used to varying accuracy; g depends on location | quantities, forces, kinematics pages | Confirmed (spec R3 states it) | spec text |
| 11 | g = 9.78 and 9.83 m s⁻² at different locations | quantities guide WE3, forces practice Q3 | Confirmed: normal gravity is 9.780 at the equator and 9.832 at the poles | https://en.wikipedia.org/wiki/Theoretical_gravity ; https://farside.ph.utexas.edu/teaching/355/Surveyhtml/node63.html |
| 12 | "At a place where g = 9.7 m s⁻²" | quantities revision notes | **Corrected** to 9.78 (weight 48.9 N): surface g on Earth runs from about 9.78 to 9.83, so 9.7 is not a realistic surface value | same as 11 |
| 13 | g changes slightly with location and height | kinematics notes | Confirmed | https://en.wikipedia.org/wiki/Theoretical_gravity |
| 14 | SI base units metre, second, kilogram; 1 N = 1 kg m s⁻² | quantities guide, notes, practice | Confirmed | https://www.nist.gov/node/777691 ; https://physics.nist.gov/cuu/Units/register2.html |
| 15 | r critical value 0.3783 (n = 20, 1-tail 5%) | hypothesis guide WE5 | Confirmed with scipy: 0.3783 | scipy (t-distribution, df = n − 2) |
| 16 | r critical value 0.4409 (n = 15, 1-tail 5%) | hypothesis practice Q6 | Confirmed with scipy: 0.4409 | scipy |
| 17 | r critical value 0.4973 (n = 12, 1-tail 5%) | hypothesis notes Q10 | Confirmed with scipy: 0.4973 | scipy |
| 18 | z = 1.282, 1.645, 1.960, 2.326, 2.576 (and 1.2816, 0.8416, 1.0364, 0.6745, 2.3263) | hypothesis, distributions pages | Confirmed with scipy | scipy norm.ppf |
| 19 | p-values 0.095 (r = 0.31, n = 30) and 0.069 (r = 0.29, n = 40), 2-tail | hypothesis guide WE6, practice Q7 | Consistent: scipy gives 0.0955 and 0.0695 | scipy |
| 20 | 68% / 95% / 99.7% within 1, 2, 3 s.d. | distributions guide, notes | Confirmed: 0.6827, 0.9545, 0.9973 | scipy |
| 21 | Binomial and Normal probabilities quoted in worked examples and answers (hypothesis, distributions, probability pages) | several | All reproduced with scipy; no discrepancies | scipy |
| 22 | n² + n + 41 prime for n = 1 to 39, fails at 40 (1681 = 41²) | proof guide | Confirmed with sympy | sympy |
| 23 | 2·3·5·7·11·13 + 1 = 30031 = 59 × 509 | proof guide | Confirmed | sympy |
| 24 | 2¹¹ − 1 = 2047 = 23 × 89 | proof practice | Confirmed | sympy |
| 25 | n² − n + 11 first fails at n = 11 | proof notes | Confirmed | sympy |
| 26 | e ≈ 2.718; ∫₀¹ e^(x²) dx ≈ 1.4627; ∫₀¹ √(1 + x) dx = 1.2190 | exponentials, numerical methods | Confirmed | numpy/scipy quad |
| 27 | Spec names continuous compound interest, radioactive decay, drug concentration, population growth as F7 contexts | exponentials guide | Matches spec F7 ("examples may include") | spec text |
| 28 | Standard pack: 52 cards (13 hearts) | distributions practice Q9(a) | Confirmed (common knowledge; nothing depends on a figure beyond 52) | n/a |

## Edits made

1. `aqa-a-level-mathematics-use-of-data-in-statistics.md`: in the technology table, changed "count rows with COUNT and
   blanks with COUNTBLANK" to "count numerical entries with COUNT (it skips blanks and text) and blanks with
   COUNTBLANK". check_new.py: OK (2,064 words).
2. `aqa-a-level-mathematics-quantities-and-units-in-mechanics-revision-notes.md`: in the mass-versus-weight reminder,
   changed "At a place where g = 9.7 m s⁻² its weight is 48.5 N" to "At a place where g = 9.78 m s⁻² its weight is 48.9 N"
   (5 × 9.78 = 48.9). check_new.py: OK (1,583 words).

No other page needed changes. Nothing was left unresolved.
