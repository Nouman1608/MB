---
resourceId: "mb-ap-calcab-6.1-study-guide"
title: "Exploring Accumulations of Change: Study Guide (Calculus AB 6.1)"
description: "Learn why the area between a rate graph and the axis measures accumulated change, how to find it with geometry, what its sign means and how to give it units."
course: "calculus-ab"
unit: 6
topics: ["6.1"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Reading a derivative as a rate of change with units (Topic 4.1)"
  - "Velocity as the rate of change of position (Topic 4.2)"
  - "Area formulas for rectangles, triangles, trapezoids and circles"
prerequisiteResources: ["mb-ap-calcab-5.12-study-guide"]
learningObjectives:
  - "Explain why the area between the graph of a rate of change and the horizontal axis measures how much a quantity changes"
  - "Find an accumulated change with geometry when the rate graph is made of lines and circular arcs"
  - "Decide the sign of an accumulated change from where the rate graph lies relative to the axis"
  - "Give an accumulated change the correct units: rate units multiplied by input units"
  - "Write a sentence that interprets an area under a rate graph in context, and use it with a starting amount"
skills: ["2", "4"]
studyMinutes: 40
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "Every area here comes from a geometry formula. Leave answers involving circles in terms of π, or give three decimal places."
related: ["mb-ap-calcab-6.1-revision-notes", "mb-ap-calcab-6.1-practice", "mb-ap-calcab-6.1-checklist"]
next: "mb-ap-calcab-6.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "The area between the graph of a rate of change and the horizontal axis tells you how much the quantity changed over that interval."
  - "Units of that area = units of the rate × units of the input. For example, kilowatts × hours = kilowatt-hours."
  - "Where the rate is positive, the area counts as an increase; where it is negative, the area counts as a decrease."
  - "When the rate graph is made of straight lines or circular arcs, find the area with geometry."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 6.1 is common content, so the same page serves AB and BC students."
  - question: "Is the area the amount of the quantity, or the change in it?"
    answer: "The change. To get the amount at the end, add the accumulated change to the amount you started with."
  - question: "Can an area be negative?"
    answer: "A geometric area is never negative. But when the rate graph is below the axis, the quantity is decreasing, so that area counts as a negative change. Keep the size and the sign separate in your head."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## The big idea in one line

Units 2 to 5 started with an amount and asked how fast it changes. Unit 6 turns this round. You know **how fast** something changes, and you want to know **how much** it changed.

The answer comes from area. If you graph the rate of change against time, the area between that graph and the time axis is the total change.

## Starting simple: a constant rate

A hose fills a paddling pool at a steady 25 litres per minute for 8 minutes. The water added is

**25 litres per minute × 8 minutes = 200 litres**

Now draw the rate as a graph: a horizontal line at height 25 from t = 0 to t = 8. The region under it is a rectangle 8 wide and 25 tall. Its area is 8 × 25 = 200. The area of the rectangle **is** the water added.

Look at the units as well as the numbers. The height is measured in litres per minute and the width in minutes. Multiplying them gives

**(litres/minute) × minutes = litres**

which is exactly the unit of the quantity that is changing.

## Rates that change in steps

Snow falls at 2 cm per hour for 3 hours, then at 0.5 cm per hour for the next 4 hours. Each step on the rate graph gives its own rectangle:

| Interval | Rate | Width | Area (change in depth) |
|---|---|---|---|
| 0 to 3 h | 2 cm/h | 3 h | 6 cm |
| 3 to 7 h | 0.5 cm/h | 4 h | 2 cm |
| **Total** | | | **8 cm** |

Adding the rectangles adds the changes. The snow got 8 cm deeper over the 7 hours.

## Rates that change smoothly

Most rates do not jump in steps; they vary all the time. You can still think of the region under the graph as made of very thin strips. On a thin enough strip the rate is almost constant, so the strip's area is almost the change during that short time. Adding all the strips gives the total change.

> **Key fact.** The area of the region between the graph of a rate of change and the horizontal axis, over an interval, gives the accumulated change in the quantity over that interval.

If the graph is made of straight segments and circular arcs, you can find that area exactly with geometry: rectangles, triangles, trapezoids and parts of circles. For curved graphs you will approximate the area with rectangles in [Topic 6.2](/advanced-course-resources/calculus-ab/6-2-approximating-areas-riemann-sums-study-guide/), and find it exactly later in the unit.

## Units of an accumulated change

The rule is the same every time:

**units of the area = units of the rate × units of the input variable**

| Rate of change | Input | Area means | Units of area |
|---|---|---|---|
| Velocity, km/h | time, h | change in position | km |
| Power into a battery, kW | time, h | change in stored energy | kWh |
| People entering, people/min | time, min | change in number of people | people |
| Rate of change of temperature, °C/h | time, h | change in temperature | °C |

If your units come out as "per" something, you have multiplied wrongly or mixed up the rate with the quantity.

## The sign of an accumulated change

A rate can be negative. Water can drain out, a battery can discharge and a drone can fly downwards.

- If the rate is **positive** on an interval, the graph is **above** the axis and the quantity **increases**. The accumulated change is positive.
- If the rate is **negative** on an interval, the graph is **below** the axis and the quantity **decreases**. The accumulated change is negative.

The region below the axis still has a positive geometric area. You attach the minus sign because the quantity is going down. So the **net change** over a long interval is

**net change = (area above the axis) − (area below the axis)**

Sometimes you want the **total amount of change**, ignoring direction. For motion this is the total distance travelled. Then you add the sizes of all the areas instead:

**total distance = (area above) + (area below)**

## Worked example 1: a home battery

A home battery stores solar energy. Let P(t) be the rate, in kilowatts (kW), at which energy flows into the battery, where t is hours after 9:00. P is positive while the battery charges and negative while it supplies the house. The graph of P is made of straight segments joining (0, 0), (2, 3), (5, 3), (6, 0), (8, −2) and (10, −2). At t = 0 the battery holds 4 kWh.

<figure>
<svg viewBox="0 0 520 320" role="img" aria-labelledby="batt-title batt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="batt-title">Graph of the charging rate P(t) of a home battery from t = 0 to t = 10 hours</title>
<desc id="batt-desc">Rate P in kilowatts against time t in hours. The graph rises in a straight line from (0, 0) to (2, 3), stays at 3 until t = 5, falls in a straight line to (6, 0), continues down to (8, −2) and stays at −2 until t = 10. The region between the graph and the t-axis from t = 0 to t = 6 lies above the axis, is lightly shaded and is labelled charging, plus 13.5 kilowatt-hours. The region from t = 6 to t = 10 lies below the axis, is hatched with diagonal lines and is labelled supplying, minus 6 kilowatt-hours.</desc>
<defs>
<pattern id="hatch61a" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="1.5"/></pattern>
</defs>
<rect x="0" y="0" width="520" height="320" fill="#ffffff"/>
<polygon points="60,190 140,40 260,40 300,190" fill="#fdf6e3" stroke="none"/>
<polygon points="300,190 380,290 460,290 460,190" fill="url(#hatch61a)" stroke="none"/>
<line x1="40" y1="190" x2="500" y2="190" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="300" x2="60" y2="20" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="140" y1="186" x2="140" y2="194"/><line x1="220" y1="186" x2="220" y2="194"/><line x1="300" y1="186" x2="300" y2="194"/><line x1="380" y1="186" x2="380" y2="194"/><line x1="460" y1="186" x2="460" y2="194"/>
<line x1="56" y1="40" x2="64" y2="40"/><line x1="56" y1="90" x2="64" y2="90"/><line x1="56" y1="140" x2="64" y2="140"/><line x1="56" y1="240" x2="64" y2="240"/><line x1="56" y1="290" x2="64" y2="290"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="140" y="207">2</text><text x="220" y="207">4</text><text x="300" y="207">6</text><text x="380" y="182">8</text><text x="460" y="182">10</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="53" y="44">3</text><text x="53" y="94">2</text><text x="53" y="144">1</text><text x="53" y="194">0</text><text x="53" y="244">−1</text><text x="53" y="294">−2</text>
</g>
<text x="66" y="22" font-size="12" fill="#1d2b44">P (kW)</text>
<text x="505" y="186" font-size="12" fill="#1d2b44" text-anchor="end">t (h)</text>
<polyline points="60,190 140,40 260,40 300,190 380,290 460,290" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<text x="195" y="120" font-size="13" fill="#1d2b44" text-anchor="middle">charging (above axis)</text>
<text x="195" y="138" font-size="13" fill="#1d2b44" text-anchor="middle">+13.5 kWh</text>
<text x="330" y="314" font-size="13" fill="#1d2b44" text-anchor="middle">supplying (below axis, hatched): −6 kWh</text>
</svg>
<figcaption>Figure 1. The battery's charging rate. The shaded region above the axis is energy stored; the hatched region below the axis is energy taken out. Each area has units of kW × h = kWh.</figcaption>
</figure>

**(a) What are the units of the area between P and the t-axis?**
kilowatts × hours = **kilowatt-hours (kWh)**, a unit of energy.

**(b) Find the change in stored energy from t = 0 to t = 6.**
The region above the axis splits into three shapes:

1. Triangle from t = 0 to t = 2: ½ × 2 × 3 = 3
2. Rectangle from t = 2 to t = 5: 3 × 3 = 9
3. Triangle from t = 5 to t = 6: ½ × 1 × 3 = 1.5

Total: 3 + 9 + 1.5 = **13.5 kWh**. The graph is above the axis, so this is an increase. Between 9:00 and 15:00 the battery gained 13.5 kWh.

**(c) Find the change from t = 6 to t = 10.**

1. Triangle from t = 6 to t = 8: ½ × 2 × 2 = 2
2. Rectangle from t = 8 to t = 10: 2 × 2 = 4

The graph is below the axis, so the change is −(2 + 4) = **−6 kWh**. Between 15:00 and 19:00 the battery supplied 6 kWh to the house.

**(d) How much energy is stored at t = 10?**
Start with the amount at t = 0 and add each change:

4 + 13.5 + (−6) = **11.5 kWh**

**Check.** The net change over the whole day is 13.5 − 6 = 7.5 kWh, and 4 + 7.5 = 11.5. Notice also that the stored energy is greatest at t = 6: before that the rate is positive, after it the rate is negative. At t = 6 the battery held 4 + 13.5 = 17.5 kWh.

## Worked example 2: a drone's height

A drone moves straight up and down. Its vertical velocity is v(t) metres per second, t seconds after a timer starts, for 0 ≤ t ≤ 12. Positive v means rising. The graph of v is:

- a semicircle **above** the axis from t = 0 to t = 4, with centre (2, 0) and radius 2;
- a straight segment from (4, 0) to (6, −3);
- the horizontal segment v = −3 from t = 6 to t = 10;
- a straight segment from (10, −3) to (12, 0).

At t = 0 the drone is 30 m above the ground.

<figure>
<svg viewBox="0 0 520 250" role="img" aria-labelledby="drone-title drone-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="drone-title">Graph of a drone's vertical velocity v(t) from t = 0 to t = 12 seconds</title>
<desc id="drone-desc">Velocity v in metres per second against time t in seconds, drawn with equal scales on both axes. From t = 0 to t = 4 the graph is a semicircle above the axis, reaching v = 2 at t = 2. The region under it is lightly shaded and labelled area 2π, rising. From t = 4 the graph drops in a straight line to (6, −3), stays at −3 until t = 10, then rises in a straight line to (12, 0). The trapezoid-shaped region between this part and the axis is hatched and labelled area 18, falling.</desc>
<defs>
<pattern id="hatch61b" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="1.5"/></pattern>
</defs>
<rect x="0" y="0" width="520" height="250" fill="#ffffff"/>
<path d="M60,110 A64,64 0 0 1 188,110 Z" fill="#fdf6e3" stroke="none"/>
<polygon points="188,110 252,206 380,206 444,110" fill="url(#hatch61b)" stroke="none"/>
<line x1="40" y1="110" x2="480" y2="110" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="225" x2="60" y2="22" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="124" y1="106" x2="124" y2="114"/><line x1="188" y1="106" x2="188" y2="114"/><line x1="252" y1="106" x2="252" y2="114"/><line x1="316" y1="106" x2="316" y2="114"/><line x1="380" y1="106" x2="380" y2="114"/><line x1="444" y1="106" x2="444" y2="114"/>
<line x1="56" y1="46" x2="64" y2="46"/><line x1="56" y1="78" x2="64" y2="78"/><line x1="56" y1="142" x2="64" y2="142"/><line x1="56" y1="174" x2="64" y2="174"/><line x1="56" y1="206" x2="64" y2="206"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="124" y="127">2</text><text x="184" y="127">4</text><text x="252" y="102">6</text><text x="316" y="102">8</text><text x="380" y="102">10</text><text x="444" y="102">12</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="53" y="50">2</text><text x="53" y="82">1</text><text x="53" y="146">−1</text><text x="53" y="178">−2</text><text x="53" y="210">−3</text>
</g>
<text x="66" y="22" font-size="12" fill="#1d2b44">v (m/s)</text>
<text x="490" y="114" font-size="12" fill="#1d2b44">t (s)</text>
<path d="M60,110 A64,64 0 0 1 188,110 L252,206 L380,206 L444,110" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<text x="124" y="90" font-size="12" fill="#1d2b44" text-anchor="middle">area 2π</text>
<text x="124" y="104" font-size="12" fill="#1d2b44" text-anchor="middle">rising</text>
<text x="316" y="232" font-size="13" fill="#1d2b44" text-anchor="middle">hatched area 18 (3 + 12 + 3): falling</text>
</svg>
<figcaption>Figure 2. The drone's vertical velocity. Both axes use the same scale, so the first piece really is a semicircle. The shaded area above the axis is metres risen; the hatched area below is metres fallen.</figcaption>
</figure>

**(a) Find the drone's change in height from t = 0 to t = 12.**

1. **Above the axis.** A semicircle of radius 2 has area ½ × π × 2² = **2π**. Units: (m/s) × s = m. The drone rises 2π ≈ 6.283 m.
2. **Below the axis.** Two triangles, each ½ × 2 × 3 = 3, and a rectangle 4 × 3 = 12. Total 3 + 12 + 3 = **18**. The drone falls 18 m.
3. **Net change** = 2π − 18 ≈ **−11.717 m**. The drone ends about 11.7 m lower than it started.

**(b) Find the total distance the drone travels.**
Add the sizes: 2π + 18 ≈ **24.283 m**.

**(c) How high is the drone at t = 12?**
30 + 2π − 18 = 12 + 2π ≈ **18.283 m** above the ground.

**Check.** The highest point is at t = 4, where v changes from positive to negative: 30 + 2π ≈ 36.283 m. From there it falls 18 m, to 18.283 m. The two routes agree.

**Why equal scales matter.** "Semicircle" describes the shape on the graph, so its radius is 2 units on each axis. On an exam graph, trust the description and the labelled points, not your ruler.

## Worked example 3: writing an interpretation

Sometimes you are given an area and asked what it means.

**Question.** R(t) is the rate, in passengers per minute, at which passengers enter a railway station, where t is minutes after 7:00. The area of the region between the graph of R and the t-axis from t = 10 to t = 30 is 2,450. Interpret this value.

**Answer.** Between 7:10 and 7:30, **2,450 passengers** entered the station.

A full interpretation has four parts:

1. **What** accumulated: the number of passengers who entered.
2. **The interval**, in the context's own terms: 7:10 to 7:30.
3. **The size**, and the direction if the rate can be negative.
4. **The units**: passengers, because (passengers/minute) × minutes = passengers.

Two wrong answers to avoid. "There are 2,450 passengers in the station at 7:30" confuses the change with the amount: some may have boarded trains, and some were there before 7:10. "Passengers enter at 2,450 per minute" confuses the area with the rate. The average rate over those 20 minutes is 2,450 ÷ 20 = 122.5 passengers per minute.

## Common misconceptions

- **"The area is the amount at the end."** The area is the change. Add it to the starting amount.
- **"Area below the axis adds on."** If the rate is negative, the quantity decreases. Subtract that area for the net change.
- **"Net change and total distance are the same."** They are equal only if the rate never changes sign. Otherwise total distance is larger.
- **Units copied from the rate.** The area under a graph in litres per minute is in litres, not litres per minute.
- **Reading the height as the answer.** The height of the rate graph at one time is a rate at that instant. The area over an interval is a change.
- **Ignoring the scale.** A gap of 1 on the t-axis might be 10 minutes. Use the axis values, not the number of grid squares.
- **Forgetting the interval in an interpretation.** "The battery gained 13.5 kWh" is incomplete. Say between which times.

## Where this leads

In [Topic 6.2](/advanced-course-resources/calculus-ab/6-2-approximating-areas-riemann-sums-study-guide/) you will estimate areas under curved rate graphs with rectangles and trapezoids, when geometry alone is not enough. Topic 6.3 names the exact area a definite integral. Later topics connect it to antiderivatives, and Unit 8 builds on the distance and net change ideas here. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/6-1-exploring-accumulations-change-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/6-1-exploring-accumulations-change-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/6-1-exploring-accumulations-change-checklist/) to consolidate.
