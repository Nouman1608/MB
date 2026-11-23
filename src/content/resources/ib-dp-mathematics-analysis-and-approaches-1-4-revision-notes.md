---
title: "IB DP Mathematics: Analysis and Approaches (AA): 1.4 Financial applications of geometric sequences and series -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Number and algebra"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.4
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-4"
description: "Revision notes for IB DP Maths AA section 1.4: compound interest, compounding periods, TVM entries, depreciation, real value, traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-18: Please confirm that the real value of an investment after inflation sits within the AA guide's section 1.4 guidance; it is included here as on the existing unit pages."
publishedDate: 2026-11-18
featured: false
---

These notes condense syllabus section **1.4** of IB DP Mathematics: Analysis and Approaches (first
assessment 2021), common to SL and HL: compound interest and annual depreciation as applications of
geometric sequences. For full worked examples, see the
[section 1.4 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-1-4/);
then practise with the
[section 1.4 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-1-4-practice/).
All amounts below are invented for practice.

## Formulae

```
Compound interest:   FV = PV × (1 + r/(100k))^(kn)
Depreciation:        value = initial × (1 − r/100)^n
Real value:          real = FV ÷ (1 + i/100)^n,  i = annual inflation rate
```

k = 1 (yearly), 2 (half-yearly), 4 (quarterly), 12 (monthly). You will not be asked to derive the formula.

## Key terms

| Term | Meaning |
|---|---|
| Present value, PV | The amount at the start |
| Future value, FV | The amount after n years |
| Nominal annual rate, r | The quoted yearly percentage before dividing by k |
| Compounding period | How often interest is added (k times a year) |
| Simple interest | The same interest each year: arithmetic growth |
| Compound interest | Interest on the balance including earlier interest: geometric growth |
| Depreciation | A fall in value by a fixed percentage each year |
| Real value | A future amount expressed in today's purchasing power |
| TVM solver | GDC financial package (N, I%, PV, PMT, FV, P/Y, C/Y) |

## TVM entries

| Entry | Set to |
|---|---|
| N | Total number of **periods** (kn), not years |
| I% | The **annual** rate (negative for depreciation) |
| PV | The starting amount, **negative** (money paid out) |
| PMT | 0 for a single lump sum |
| FV | The unknown, or the target if solving for N or I% |
| P/Y, C/Y | Both equal to k |

Always write your entries in the answer.

## Methods in steps

**Future value.** Rate per period r/k; periods kn; multiply.

**Time to reach a target.** Solve PV × factor^m > target for m periods (logs or TVM); round m **up**; convert
to years and months if needed; check m − 1 and m.

**Rate.** Isolate the factor: factor = (FV/PV)^(1/(kn)); then r = 100k(factor − 1).

**Depreciation.** Factor 1 − r/100; same methods as above.

**Real value.** Find FV first; divide by the inflation factor for the same number of years; use the
unrounded FV.

## Worked reminder

£4000 at 5% for 3 years:

```
Yearly:       4000 × 1.05^3  = £4630.50
Half-yearly:  4000 × 1.025^6 = £4638.77
Simple:       4000 + 3 × 200 = £4600.00
```

## Paper 1 or Paper 2?

| Paper 1 (no technology) | Paper 2 (technology) |
|---|---|
| Factors with exact powers, such as 1.1² or 0.9² | Monthly or quarterly compounding |
| Finding a rate from a perfect square or cube | Solving for N or I% with TVM |
| Comparing simple and compound interest in small cases | Real value after several years |

## Must-know distinctions

| Looks similar | Difference |
|---|---|
| Nominal annual rate and rate per period | 6% a year compounded monthly is 0.5% per month |
| Years and periods | 8 years compounded quarterly is 32 periods |
| Money value and real value | Real value divides by the inflation factor to give today's purchasing power |
| Interest and depreciation factors | 1 + r/100 for growth; 1 − r/100 for depreciation |
| Simple and compound interest | Fixed amount each year (arithmetic) versus a fixed percentage of the current balance (geometric) |

## Exam traps

- **Annual rate used per period.** 6% compounded monthly is 0.5% per month.
- **N in years.** Monthly for 8 years means N = 96.
- **Same signs for PV and FV** on the TVM solver gives an error or a nonsense answer.
- **Depreciation factor above 1.** A 22% fall is a factor of 0.78.
- **Fractional periods.** Interest is added at the end of each period, so round the number of periods up.
- **Rounding early.** Keep full values until the final penny.

## Quick self-test

1. State the rate per period for 6% a year compounded monthly.
2. Find the value of £4000 after 3 years at 5% compounded yearly.
3. Find the value of £4000 after 3 years at 5% compounded half-yearly.
4. Interest is compounded quarterly for 8 years. What is N?
5. State the factor for depreciation of 18% a year.
6. A £20 000 machine depreciates by 10% a year. Find its value after 2 years.
7. Which kind of interest gives an arithmetic sequence of balances?
8. £11 000 is received in 2 years' time. Inflation is 4% a year. Find its real value today.
9. £5000 grows to £5832 in 2 years with yearly compounding. Find the rate.
10. Why must a number of compounding periods be rounded up when finding the time to reach a target?
11. Why is PV entered as a negative number on a TVM solver?
12. £1000 is invested at 7.2% compounded yearly. After how many complete years has it first doubled?

### Answers

1. 0.5% per month.
2. £4630.50.
3. £4638.77.
4. N = 32.
5. 0.82.
6. £16 200.
7. Simple interest.
8. 11 000 ÷ 1.04² = £10 170.12.
9. (1 + r/100)² = 1.1664, so 1 + r/100 = 1.08 and r = 8%.
10. Interest is only added at the end of each whole period, so the target is not reached part-way through one.
11. It shows money paid out; the solver uses opposite signs for money paid and received.
12. n > ln 2/ln 1.072 = 9.97, so after 10 years.

## Next steps

- [Section 1.4 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-1-4/)
- [Section 1.4 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-1-4-practice/)
- [Section 1.3 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-1-3-revision-notes/)
- [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/)

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*,
first assessment 2021: syllabus section 1.4, financial applications of geometric sequences and series.
