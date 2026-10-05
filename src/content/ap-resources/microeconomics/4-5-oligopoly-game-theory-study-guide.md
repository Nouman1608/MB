---
resourceId: "mb-ap-micro-4.5-study-guide"
title: "Oligopoly and Game Theory: Study Guide (Microeconomics 4.5)"
description: "Learn why oligopolists are interdependent and tempted to collude, how to read a payoff matrix, find dominant strategies and Nash equilibria, and calculate the incentive that changes a player's choice."
course: "microeconomics"
unit: 4
topics: ["4.5"]
resourceType: "study-guide"
prerequisites:
  - "Profit maximisation where marginal revenue equals marginal cost (Unit 3)"
  - "The monopoly outcome and deadweight loss (Topic 4.2)"
  - "Allocative efficiency: price equal to marginal cost"
prerequisiteResources: ["mb-ap-micro-4.4-study-guide"]
learningObjectives:
  - "Describe an oligopoly: few interdependent firms, high barriers to entry and an inefficient outcome"
  - "Explain why oligopolists are tempted to collude and form cartels, and why cartels tend to break down"
  - "Define a game, a strategy, a payoff matrix, a dominant strategy and a Nash equilibrium"
  - "Find each player's dominant strategy (if any) and every Nash equilibrium in a two-player, two-action game"
  - "Link the prisoner's dilemma to oligopoly behaviour and to non-market situations"
  - "Calculate the smallest change in payoffs that would alter a player's dominant strategy"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "four-function"
calculatorNote: "Only addition, subtraction and multiplication are needed. All firms and data are fictional"
related: ["mb-ap-micro-4.5-revision-notes", "mb-ap-micro-4.5-practice", "mb-ap-micro-4.5-checklist"]
next: "mb-ap-micro-4.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-microeconomics", "page-microeconomics"]
keyPoints:
  - "An oligopoly has a few firms behind high barriers to entry. Each firm's best choice depends on what its rivals do: the firms are interdependent."
  - "Oligopolists gain by colluding to act like one monopoly, but each member also gains by cheating, so cartels are hard to hold together."
  - "A dominant strategy is best whatever the other player does. A Nash equilibrium is a cell where neither player can do better by changing only its own action."
  - "In a prisoner's dilemma, both players follow their dominant strategies and end up worse off than if they had cooperated."
  - "To change a dominant strategy, a payment or penalty must close the largest payoff gap across the other player's actions."
  - "Even without a working cartel, oligopoly prices are usually higher and quantities lower than in perfect competition."
faqs:
  - question: "Is the Nash equilibrium always the best outcome for the players?"
    answer: "No. It is only stable: no player can gain by changing alone. In a prisoner's dilemma both players would be better off in a different cell."
  - question: "Does every game have a dominant strategy?"
    answer: "No. Often a player's best action depends on what the other player does. You can still find a Nash equilibrium by checking best responses."
  - question: "Which payoff in a cell belongs to which player?"
    answer: "By convention the first number belongs to the row player and the second to the column player. Always check the question's own key."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## What makes a market an oligopoly

An **oligopoly** is a market with **a few large firms** that together sell most of the output. When there are exactly two firms, it is a **duopoly**. Three features matter:

1. **High barriers to entry.** New firms find it hard to join. Barriers include large economies of scale, control of a key resource, patents or licences, and very high start-up costs.
2. **Interdependence.** Because each firm is large, its choices change its rivals' sales and profits. So each firm must think about how rivals will react before it sets a price, an output level or an advertising budget. This is the key difference from perfect competition, monopolistic competition and monopoly, where a firm can ignore individual rivals.
3. **Products may be identical or differentiated.** Cement or steel is much the same from any seller; cars and phones are differentiated. Both can be oligopolies.

An oligopoly is an **inefficient** market structure. Firms have market power, so price is usually above marginal cost (allocative inefficiency, with a deadweight loss), and barriers to entry can let economic profit last in the long run.

## Collusion and cartels

Throughout this guide we use a fictional island where only two firms, **Halden Cement** and **Ostra Cement**, sell cement. Market demand is **P = 100 − Q**, where Q is in thousand tonnes per week and P is in dollars per tonne. Each firm's marginal cost and average total cost are a constant **$20 per tonne**.

- **Perfectly competitive benchmark.** Price would be driven down to P = MC = $20. Then 100 − Q = 20, so Q = 80 thousand tonnes, and economic profit is zero.
- **Acting together as one monopoly.** Marginal revenue for a straight-line demand curve has twice the slope: MR = 100 − 2Q. Setting MR = MC: 100 − 2Q = 20, so Q = 40 thousand tonnes and P = 100 − 40 = $60. Joint profit = (60 − 20) × 40 = **$1,600 thousand per week**.

When firms openly agree to restrict output or fix prices, they **collude**. A formal group of colluding firms is a **cartel**. If Halden and Ostra agree on a quota of 20 thousand tonnes each, each earns (60 − 20) × 20 = **$800 thousand per week**. Far better than zero. So oligopolists have a strong **incentive to collude**. (In many countries, price-fixing cartels are illegal, which is one more reason they are hard to run.)

<figure>
<svg viewBox="0 0 560 420" role="img" aria-labelledby="olig1-title olig1-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="olig1-title">Cement market outcomes: competition, cartel and cheating</title>
<desc id="olig1-desc">Graph with quantity in thousand tonnes per week on the horizontal axis, 0 to 100, and price in dollars per tonne on the vertical axis, 0 to 100. The demand curve D is a straight line from a price of 100 at zero quantity down to zero price at 100 thousand tonnes. The marginal revenue curve MR is a steeper straight line from 100 down to zero at 50 thousand tonnes. A horizontal line at 20 dollars is labelled MC equals ATC. Point M on the demand curve at 40 thousand tonnes and 60 dollars is the cartel outcome, where MR meets MC. Point N on the demand curve at 50 thousand tonnes and 50 dollars is where both firms cheat. Point C at 80 thousand tonnes and 20 dollars, where demand meets MC, is the competitive outcome. A bracket below the quantity axis from 40 to 80 says oligopoly output usually lies in this range.</desc>
<rect x="0" y="0" width="560" height="420" fill="#ffffff"/>
<line x1="70" y1="330" x2="500" y2="330" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="330" x2="70" y2="30" stroke="#1d2b44" stroke-width="2"/>
<text x="70" y="348" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<text x="146" y="348" text-anchor="middle" font-size="12" fill="#1d2b44">20</text>
<text x="222" y="348" text-anchor="middle" font-size="12" fill="#1d2b44">40</text>
<text x="298" y="348" text-anchor="middle" font-size="12" fill="#1d2b44">60</text>
<text x="374" y="348" text-anchor="middle" font-size="12" fill="#1d2b44">80</text>
<text x="450" y="348" text-anchor="middle" font-size="12" fill="#1d2b44">100</text>
<text x="62" y="278" text-anchor="end" font-size="12" fill="#1d2b44">20</text>
<text x="62" y="222" text-anchor="end" font-size="12" fill="#1d2b44">40</text>
<text x="62" y="166" text-anchor="end" font-size="12" fill="#1d2b44">60</text>
<text x="62" y="110" text-anchor="end" font-size="12" fill="#1d2b44">80</text>
<text x="62" y="54" text-anchor="end" font-size="12" fill="#1d2b44">100</text>
<text x="280" y="408" text-anchor="middle" font-size="14" fill="#1d2b44">Quantity of cement (thousand tonnes per week)</text>
<text x="20" y="190" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 20 190)">Price ($ per tonne)</text>
<line x1="70" y1="50" x2="450" y2="330" stroke="#1d2b44" stroke-width="3"/>
<line x1="70" y1="50" x2="260" y2="330" stroke="#1d2b44" stroke-width="2" stroke-dasharray="9 6"/>
<line x1="70" y1="274" x2="488" y2="274" stroke="#1d2b44" stroke-width="2"/>
<line x1="222" y1="162" x2="222" y2="330" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 4"/>
<line x1="70" y1="162" x2="222" y2="162" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 4"/>
<line x1="260" y1="190" x2="260" y2="330" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 4"/>
<line x1="374" y1="274" x2="374" y2="330" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 4"/>
<circle cx="222" cy="162" r="5" fill="#1d2b44"/>
<text x="230" y="154" font-size="13" font-weight="600" fill="#1d2b44">M: cartel (40, $60)</text>
<circle cx="260" cy="190" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="268" y="184" font-size="13" font-weight="600" fill="#1d2b44">N: both cheat (50, $50)</text>
<circle cx="374" cy="274" r="5" fill="#1d2b44"/>
<text x="360" y="256" font-size="13" font-weight="600" fill="#1d2b44">C: competitive (80, $20)</text>
<text x="456" y="324" font-size="13" fill="#1d2b44">D</text>
<text x="266" y="324" font-size="13" fill="#1d2b44">MR (dashed)</text>
<text x="80" y="268" font-size="13" fill="#1d2b44">MC = ATC</text>
<path d="M222 356 L222 362 L374 362 L374 356" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="298" y="380" text-anchor="middle" font-size="12" fill="#1d2b44">oligopoly output usually in this range</text>
</svg>
<figcaption>Figure 1. The cement market. A cartel that acts like a monopoly produces at M. Perfect competition would produce at C. If both firms cheat on their quotas, the market moves to N: price falls but stays well above marginal cost.</figcaption>
</figure>

## The language of game theory

Because oligopolists are interdependent, economists model their choices as **games**.

- A **game** is a situation where several **players** each choose an action, and each player's **payoff** depends on **both** its own choice and the choices of the others.
- A **strategy** is a complete plan of action for playing the game. In the simple games in this course, each player has two possible actions, so a strategy is simply "choose action A" or "choose action B".
- The **normal form** of a game is a **payoff matrix**: a table with one player's actions as rows and the other player's actions as columns. Each cell shows the payoffs that result from that pair of choices. By convention, **the first number is the row player's payoff and the second is the column player's**.
- A player has a **dominant strategy** when one action gives a **higher payoff whatever the other player does**.
- A **Nash equilibrium** is a pair of actions where **no player can raise its own payoff by changing its action alone**, taking the other player's action as given.

**Scope.** You only need games with **two players and two actions each**, played once, with both choosing at the same time. Games with more players or more actions, games played in sequence (game trees) and "mixed" strategies that randomise are outside the course.

## A method that always works

For a two-by-two payoff matrix:

1. **Row player's best responses.** Cover all the column player's numbers. For the first column, compare the row player's two payoffs and mark the higher one (for example with a star). Repeat for the second column.
2. **Column player's best responses.** For the first row, compare the column player's two payoffs and mark the higher one. Repeat for the second row.
3. **Dominant strategy.** If a player's marks are both on the same action, that action is its dominant strategy. If the marks are on different actions, the player has none.
4. **Nash equilibrium.** Any cell where **both** payoffs are marked is a Nash equilibrium. A game can have one, two, or (in this simple form) none.

Always compare a player's payoffs **within** a column (for the row player) or **within** a row (for the column player). Comparing across the diagonal is the most common error.

## Worked example 1: will the cement cartel hold?

**Question.** Halden and Ostra each choose to **keep the quota** (20 thousand tonnes) or **cheat** by secretly producing 25 thousand tonnes. Use P = 100 − Q and MC = ATC = $20.
(a) Build the payoff matrix of weekly profits.
(b) Find each firm's dominant strategy and the Nash equilibrium. Explain why this is a prisoner's dilemma.
(c) Suppose any firm that cheats would face an extra cost F per week (for example, because the other firm could find out and retaliate). How large must F be for "keep quota" to become a dominant strategy?

**(a)** Profit for each firm = (P − 20) × its own output.

1. Both keep: Q = 40, P = $60. Each earns 40 × 20 = **800**.
2. One cheats: Q = 20 + 25 = 45, P = $55. The cheater earns 35 × 25 = **875**; the loyal firm earns 35 × 20 = **700**.
3. Both cheat: Q = 50, P = $50. Each earns 30 × 25 = **750**.

Payoffs in $ thousand per week, written (Halden, Ostra):

| Halden ↓ / Ostra → | Keep quota | Cheat |
|---|---|---|
| **Keep quota** | (800, 800) | (700, 875) |
| **Cheat** | (875, 700) | (750, 750) |

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="olig2-title olig2-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="olig2-title">Payoff matrix for the cement cartel game with best responses marked</title>
<desc id="olig2-desc">A two by two table. Rows are Halden's actions, Keep quota and Cheat. Columns are Ostra's actions, Keep quota and Cheat. Each cell lists Halden's profit then Ostra's profit in thousand dollars per week. Keep quota, Keep quota: Halden 800, Ostra 800. Keep quota for Halden, Cheat for Ostra: Halden 700, Ostra 875 with a star. Cheat for Halden, Keep quota for Ostra: Halden 875 with a star, Ostra 700. Cheat, Cheat: Halden 750 with a star and Ostra 750 with a star. Stars mark each firm's best response. The Cheat, Cheat cell has both stars and a thick dashed border, marking the Nash equilibrium.</desc>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<text x="350" y="30" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Ostra Cement (column player)</text>
<text x="40" y="170" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44" transform="rotate(-90 40 170)">Halden Cement (row player)</text>
<text x="265" y="70" text-anchor="middle" font-size="13" fill="#1d2b44">Keep quota</text>
<text x="435" y="70" text-anchor="middle" font-size="13" fill="#1d2b44">Cheat</text>
<text x="170" y="135" text-anchor="end" font-size="13" fill="#1d2b44">Keep quota</text>
<text x="170" y="215" text-anchor="end" font-size="13" fill="#1d2b44">Cheat</text>
<rect x="180" y="85" width="340" height="160" fill="none" stroke="#1d2b44" stroke-width="2"/>
<line x1="350" y1="85" x2="350" y2="245" stroke="#1d2b44" stroke-width="2"/>
<line x1="180" y1="165" x2="520" y2="165" stroke="#1d2b44" stroke-width="2"/>
<text x="265" y="120" text-anchor="middle" font-size="13" fill="#1d2b44">Halden 800</text>
<text x="265" y="142" text-anchor="middle" font-size="13" fill="#1d2b44">Ostra 800</text>
<text x="435" y="120" text-anchor="middle" font-size="13" fill="#1d2b44">Halden 700</text>
<text x="435" y="142" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2b44">Ostra 875 ★</text>
<text x="265" y="200" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2b44">Halden 875 ★</text>
<text x="265" y="222" text-anchor="middle" font-size="13" fill="#1d2b44">Ostra 700</text>
<rect x="356" y="171" width="158" height="68" fill="none" stroke="#1d2b44" stroke-width="3" stroke-dasharray="8 5"/>
<text x="435" y="200" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2b44">Halden 750 ★</text>
<text x="435" y="222" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2b44">Ostra 750 ★</text>
<text x="350" y="275" text-anchor="middle" font-size="12" fill="#1d2b44">★ = best response. Dashed box = Nash equilibrium.</text>
</svg>
<figcaption>Figure 2. Best responses are starred. Only the bottom-right cell has both payoffs starred, so (Cheat, Cheat) is the Nash equilibrium.</figcaption>
</figure>

**(b)** Halden's choices, one column at a time:

- If Ostra keeps the quota: keep 800, cheat 875. **Cheat** is better.
- If Ostra cheats: keep 700, cheat 750. **Cheat** is better.

Cheating is better in both cases, so **cheat is Halden's dominant strategy**. The game is symmetric, so cheat is also Ostra's dominant strategy (875 > 800 and 750 > 700).

The **Nash equilibrium is (Cheat, Cheat)**, with 750 each. Check: if Halden alone switched to keeping the quota, its profit would fall to 700, and the same is true for Ostra. Neither wants to move.

This is a **prisoner's dilemma**: each firm follows its dominant strategy, yet both earn 750 instead of the 800 they could have had by cooperating. (Keep, Keep) is not a Nash equilibrium, because either firm could raise its profit from 800 to 875 by cheating alone.

**(c)** The penalty F is subtracted from the payoff of cheating. "Keep quota" becomes dominant only if it beats cheating **against both** of Ostra's actions:

1. If Ostra keeps: need 800 > 875 − F, so F > 75.
2. If Ostra cheats: need 700 > 750 − F, so F > 50.

Both conditions must hold, so **F must be greater than $75 thousand per week**. If both firms face such a penalty, the Nash equilibrium moves to (Keep, Keep) with 800 each.

**Check.** A penalty between $50 and $75 thousand is not enough: Halden would still cheat whenever Ostra keeps the quota (875 − F > 800), so "keep" would not be dominant. The incentive must close the **largest** gap.

## Worked example 2: a game with only one dominant strategy

**Question.** Two fictional snack makers, **Corvell** (row) and **Dunmore** (column), each decide whether to **launch** a new flavour. Monthly profits in $ thousand, written (Corvell, Dunmore):

| Corvell ↓ / Dunmore → | Launch | Don't launch |
|---|---|---|
| **Launch** | (40, 35) | (60, 30) |
| **Don't launch** | (45, 40) | (50, 20) |

(a) Does each firm have a dominant strategy?
(b) Find the Nash equilibrium.
(c) A cost saving would add the same amount x to Corvell's profit whenever it launches. How large must x be for launching to become Corvell's dominant strategy? What is the new Nash equilibrium?

**(a)** Corvell (compare within each column):

- If Dunmore launches: launch 40, don't 45. **Don't launch** is better.
- If Dunmore doesn't: launch 60, don't 50. **Launch** is better.

Corvell's best action depends on Dunmore's choice, so **Corvell has no dominant strategy**.

Dunmore (compare within each row):

- If Corvell launches: launch 35, don't 30. **Launch**.
- If Corvell doesn't: launch 40, don't 20. **Launch**.

**Launch is Dunmore's dominant strategy.**

**(b)** Corvell can predict that Dunmore will launch. Its best response to "launch" is "don't launch" (45 > 40). So the **Nash equilibrium is (Don't launch, Launch)**, with payoffs (45, 40). Check the other cells: in (Launch, Launch) Corvell would switch (45 > 40); in (Launch, Don't) Dunmore would switch (35 > 30); in (Don't, Don't) Dunmore would switch (40 > 20). Only one cell is stable.

**(c)** Launching must beat not launching in **both** columns:

1. If Dunmore launches: 40 + x > 45, so x > 5.
2. If Dunmore doesn't: 60 + x > 50, already true for any x ≥ 0.

So x must be **greater than $5 thousand per month**. With x = 8, for example, Corvell's payoffs from launching become 48 and 68; launching is dominant for both firms, and the new Nash equilibrium is **(Launch, Launch)** with payoffs (48, 35).

**Interpretation.** You do not need both players to have a dominant strategy to find a Nash equilibrium. A player without one simply picks its best response to what the other player is expected to do.

## Why oligopolists rarely reach the monopoly outcome

The cement game shows the general problem. A cartel can reach the monopoly outcome only if every member restricts output, but:

- **each member gains by cheating** if the others keep their side of the deal, just as each prisoner gains by confessing;
- cheating is often **hard to detect**, especially when firms give secret discounts;
- with **more firms**, agreeing and monitoring becomes harder;
- collusion is **illegal** in many countries, so agreements cannot be enforced in court.

So oligopoly outcomes usually lie **between** monopoly and perfect competition. Even at (Cheat, Cheat), the cement price is $50, well above marginal cost of $20, and output is 50 thousand tonnes, below the competitive 80 thousand. In general, **prices are higher and quantities lower** in oligopoly than in perfect competition, and the market is allocatively inefficient.

## Games outside markets

The same structure appears whenever individual and group interests clash. Two neighbouring countries may both gain from limiting pollution of a shared river, yet each gains even more by polluting while the other cuts back. Two students on a joint project may each be tempted to let the other do the work. In each case, a dominant strategy of "not cooperating" leads to an outcome both would like to avoid. Fines, rewards and enforceable agreements work by changing the payoffs, exactly as in Worked example 1(c).

## Common misconceptions

- **"The Nash equilibrium is the cell with the highest total payoff."** It is the cell where no player can gain by changing alone. In the cement game the highest total is (Keep, Keep), but the equilibrium is (Cheat, Cheat).
- **"A dominant strategy gives the player its highest number in the whole matrix."** It gives the higher payoff **in each column** (or each row), compared one at a time. Corvell's best single payoff is 60, yet it has no dominant strategy.
- **"Comparing the row player's payoff with the column player's payoff."** A player only compares its own payoffs. Halden never compares its 800 with Ostra's 875.
- **"If one player has no dominant strategy, there is no equilibrium."** Worked example 2 has a unique Nash equilibrium with only one dominant strategy.
- **"To change a dominant strategy, closing one gap is enough."** The incentive must beat the largest gap across the other player's actions ($75, not $50, in Worked example 1).
- **"Oligopolies always charge the monopoly price."** Cartels tend to break down, so oligopoly prices are usually below the monopoly price, though still above the competitive price.
- **"Oligopoly firms take the price as given."** They have market power and are interdependent; only perfectly competitive firms are price takers.

## Where this leads

This topic ends Unit 4. Next you move from product markets to the markets for labour and other resources, starting with [Topic 5.1, Introduction to Factor Markets](/advanced-course-resources/microeconomics/5-1-introduction-factor-markets-study-guide/). Before that, test yourself with the [practice questions](/advanced-course-resources/microeconomics/4-5-oligopoly-game-theory-practice/), then use the [revision notes](/advanced-course-resources/microeconomics/4-5-oligopoly-game-theory-revision-notes/) and the [checklist](/advanced-course-resources/microeconomics/4-5-oligopoly-game-theory-checklist/) to consolidate. For the market structure that came just before, see [Topic 4.4, Monopolistic Competition](/advanced-course-resources/microeconomics/4-4-monopolistic-competition-study-guide/).
