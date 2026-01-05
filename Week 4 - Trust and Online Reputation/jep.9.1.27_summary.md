# The Single Transferable Vote (STV)

**Author:** Nicolaus Tideman  
**Source:** *Journal of Economic Perspectives*, Volume 9, Number 1, Winter 1995, Pages 27–38

---

## Overview

The **Single Transferable Vote (STV)** is a method of proportional representation based on voter rankings of candidates. Its core principle is that the distribution of elected representatives should mirror the distribution of views within the electorate. STV is the dominant form of proportional representation in countries with British heritage, including:

- **Ireland** (Dáil/Assembly elections)
- **Australia** (Senate elections)
- **Malta** (House of Representatives)
- **United States** (Cambridge, MA City Council and School Committee; New York City Community School Boards)
- Various unions, religious, charitable, and professional organizations worldwide

---

## Core Mechanics of STV

### Fundamental Features

1. **Quota Establishment:** A threshold of votes that guarantees election.
2. **Surplus Transfer:** Votes exceeding the quota are redistributed to voters' next-ranked preferences.
3. **Sequential Elimination:** Candidates with the fewest votes are eliminated, with their votes transferred to remaining candidates.
4. **Ranking-Based:** Voters rank candidates in order of preference.

### Key Variations

Different STV implementations vary in:
- Quota computation method
- Whether surplus votes are randomly selected or fractionally distributed
- Tie-breaking procedures
- Treatment of already-elected candidates in surplus transfers

---

## Comparisons with Other Voting Systems

| System | Characteristics | Drawbacks Compared to STV |
|--------|-----------------|---------------------------|
| **Party List PR** | Voters select parties; seats allocated proportionally | Presupposes party definitions capture voter preferences; concentrates power in party officials |
| **Single-Member Districts (Plurality)** | Elected body tends toward uniformity | Creates conflict over district boundaries; diversity only from district variation |
| **At-Large (Multiple Votes)** | Voters cast multiple votes | Majority coalitions can capture all seats; premium on voter organization |

**STV's Advantage:** Voters classify candidates by any criteria they deem relevant, and the vote-counting process forms equal-sized representative groups organically.

---

## Historical Development

### Origins

- **1819 – Thomas Hill:** Developed the earliest STV-like rule for the Birmingham Society for Literary and Scientific Improvement. Voters wrote names on ballots; candidates with 5+ votes were elected; excess ballots were randomly selected for revote.

- **1855 – Carl Andrae (Denmark):** Introduced ranked ballots and the quota concept: `quota = floor(N/K)` where N = votes, K = seats. Ballots examined randomly; votes transfer to next-ranked unelected candidate.

- **1857 – Thomas Hare (London):** Independently reinvented and widely publicized the system. Later added the crucial provision of eliminating candidates with fewest votes and transferring their votes (1865).

---

## The Quota Question

### Hare Quota vs. Droop Quota

**Hare Quota:** `floor(N/K)`

**Droop Quota (1868):** `floor(N/(K+1)) + 1`

The Droop quota is the **smallest integer quota** such that no more than K candidates can achieve it simultaneously.

### Why Droop is Preferred

**Example:** 2 Democrats (D, E) and 2 Republicans (R, S) compete for 3 seats with 100 voters:
- 24: D > E > R > S
- 23: E > D > S > R
- 32: R > S > D > E
- 21: S > R > E > D

**With Hare Quota (33):** Democrats win 2 seats despite only having 47% support (S is eliminated first).

**With Droop Quota (26):** Republicans correctly receive the majority (2 seats).

### Newland-Britton (NB) Quota

An even more refined quota: `N/(K+1)` with tie-breaking rules, proposed by Robert Newland and Frank Britton (1973). Addresses edge cases where Droop quota can still produce unfair results.

---

## Determining Which Votes to Transfer

### The Stochastic Problem

Early systems (Hill, Hare, Droop) involved randomness in selecting which votes to transfer, producing potentially different outcomes from the same ballots.

### Solutions

1. **Irish Method:** Stratified random sampling by next-choice candidate (reduces but doesn't eliminate randomness).

2. **Senatorial Rules (1880, J.B. Gregory):** Each voter receives 100 votes; surpluses are transferred proportionally from all voters in the surplus group. This eliminates outcome randomness.

3. **Meek's Method (1969):** For each elected candidate, calculates a retention fraction (0-1) such that they end up with exactly a quota. Every vote for that candidate contributes proportionally to the surplus transfer.

4. **Warren's Method:** Criticizes Meek for inequitable "charging" of voters. Proposes all supporters of an elected candidate pay the same "price" (percentage of their vote) toward that election.

---

## Key Controversy: Incomplete Ballots

### Two Approaches

**Newland-Britton Approach:** When encountering non-transferable votes (incomplete rankings), increase the weight of transferable votes to maintain total vote count.

**Meek's Approach:** Reduce the quota instead, treating incomplete rankings as partial abstentions. 

**Tideman's Position:** Agrees with Meek—voters who decline to complete rankings are choosing to forego voting power, which should benefit all remaining voters equally (via reduced quota), not just voters in the same "bundle."

---

## Theoretical Limitations of STV

### Universal Limitations (All Vote-Counting Rules)

| Theorem | Implication |
|---------|-------------|
| **Arrow's Impossibility Theorem** | Subject to inconsistency as agenda changes; vulnerable to agenda manipulation |
| **Gibbard-Satterthwaite Theorem** | No non-dictatorial ranking-based rule can motivate truthful voting in all circumstances |

### STV-Specific Limitations

1. **Lacks Nonnegative Responsiveness:** An upward movement of a candidate on one ballot can *harm* that candidate.
   - *Example:* 11 voters, 3 candidates. Moving B ahead of C on one ballot causes B to lose instead of win.

2. **Lacks Condorcet Consistency:** A candidate who beats all others head-to-head may still lose under STV.
   - *Example:* A candidate who is everyone's second choice beats all others pairwise but is eliminated first (no first-place votes).

---

## CPO-STV: A Refined Alternative

**Comparison of Pairs of Outcomes by STV** (CPO-STV) was designed to achieve **Condorcet consistency** when electing a single candidate.

### Mechanism

1. List every possible set of winners (combinations of K candidates).
2. Compare each pair of outcome sets using STV-like vote allocation.
3. The winning set is the one that beats all others in head-to-head comparisons.
4. If no Condorcet winner exists, select the set whose *worst loss is least bad* (min-max rule).

### Properties

- **Single-candidate elections:** Reduces to the min-max rule.
- **K of K+1 candidates:** Reduces to ordinary STV.
- **CPO-STV = Synthesis of STV + min-max rule.**

### Computational Challenges

| Scenario | Possible Outcomes |
|----------|-------------------|
| 7 of 15 candidates | 6,435 |
| 10 of 20 candidates | 184,000+ |

Modern parallel processing makes this more feasible, but algorithmic efficiency remains important.

---

## The Refinement-Comprehensibility Trade-Off

### The Core Tension

Each STV refinement addresses specific objections but adds computational complexity and reduces comprehensibility to general voters.

### Positions

- **Conservative View:** Rules more sophisticated than 1970s Northern Ireland Senatorial rules would be "unacceptable to a general electorate."
- **Moderate View:** Stop at Newland-Britton or Meek rules.
- **Academic Value:** Sophisticated rules reveal the costs of simplification and the magnitude of losses from simpler rules.

### Tideman's Conclusion

In real elections, sophisticated rules generally produce outcomes that simpler rules would achieve with *very few changed votes*. When differences occur, sophisticated rules yield *more defensible* outcomes.

> "It is sensible to use the most sophisticated STV rule that engenders no significant opposition for its sophistication, and rest assured that no great harm is done."

---

## Key Terms and Definitions

| Term | Definition |
|------|------------|
| **Quota** | Minimum votes required for guaranteed election |
| **Surplus** | Votes exceeding the quota that are redistributed |
| **Proportionality for Solid Coalitions (PSC)** | If J quotas of voters rank all candidates in set C first, at least J candidates from C will be elected |
| **Condorcet Consistency** | The candidate who beats all others head-to-head wins |
| **Nonnegative Responsiveness** | Moving a candidate up on a ballot cannot hurt them |
| **CPO-STV** | STV variant achieving Condorcet consistency via pairwise outcome comparisons |

---

## References (Select)

- Arrow, Kenneth. *Social Choice and Individual Values* (1963)
- Dummett, Michael. *Voting Procedures* (1984)
- Gibbard, Allan. "Manipulation of Voting Schemes" (1973)
- Hare, Thomas. *Treatise on the Election of Representatives* (1859)
- Meek, Brian. "Une Nouvelle Approche du Scrutin Transférable" (1969)
- Newland & Britton. *How to Conduct an Election by the Single Transferable Vote* (1973/1976)

---

## Relevance to Course Themes

This paper connects to **Week 4: Trust and Online Reputation** through its analysis of:

1. **Mechanism Design:** How voting rules shape incentives and outcomes in collective decision-making.
2. **Aggregation of Preferences:** The fundamental challenge of translating individual rankings into fair collective choices.
3. **Trade-offs in System Design:** The tension between theoretical optimality and practical comprehensibility mirrors trade-offs in online reputation systems.
4. **Strategic Behavior:** The Gibbard-Satterthwaite theorem's implications for strategic manipulation apply equally to voting and to gaming reputation systems.
