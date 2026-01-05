# Summary: An Introduction to Vote-Counting Schemes

**Authors:** Jonathan Levin & Barry Nalebuff  
**Source:** *Journal of Economic Perspectives*, Volume 9, Number 1, Winter 1995, Pages 3–26

---

## Overview

This foundational paper provides a comprehensive introduction to **electoral system design** and **vote-counting mechanisms**. The authors survey **sixteen distinct voting methods**, demonstrating how they work, where they succeed, and where they fail. The paper emphasizes that while plurality rule is pervasive, it is inherently flawed—and fortunately, many suitable alternatives exist.

---

## Key Motivation

Electoral system design matters for several reasons:
- **Creation of new democracies** (e.g., eastern Europe in the 1990s)
- **Multi-candidate elections** (e.g., the 1992 U.S. presidential election with Perot)
- **Redistricting and gerrymandering debates**
- **Calls for more representative voting systems** (e.g., Lani Guinier's proposals)

The authors note that **Arrow's Impossibility Theorem** (1951) shows that *any* voting system applied to unrestricted voter preferences must have some defect—we are always choosing between flawed alternatives.

---

## Fundamental Concepts

### Voter Rankings & Paired Comparisons
- Most voting systems derive from **ordinal rankings** of candidates by voters
- Simple plurality rule discards too much data (only first choice matters)
- **Paired comparisons** infer head-to-head preferences from rankings (e.g., if a voter ranks a > b > c, then a beats b, a beats c, and b beats c)

### The Condorcet Winner
- A **Condorcet winner** is a candidate who defeats every other candidate in pairwise matchups
- Most vote-counting methods will elect a Condorcet winner when one exists
- Difficulties arise when **voting cycles** occur (e.g., a beats b, b beats c, c beats a)

### Paired-Comparisons Matrix
- Organizes pairwise vote counts into a matrix where the ijth entry is votes for candidate i over j
- A **win-loss matrix** simplifies to +1 (win), -1 (loss), or 0 (tie)

---

## The Sixteen Voting Methods

### **Rank-Scoring Rules (1-5)**

| Method | Description |
|--------|-------------|
| **1. Plurality Voting** | Each voter picks one candidate; most votes wins. Simple but flawed—can elect candidates opposed by the majority (vote-splitting). Leads to two-party systems (Duverger's Law). |
| **1a. Extensions** | *Single Nontransferable Vote* (Japan): one vote, top N win. *Cumulative Voting*: voters get multiple votes, can concentrate on one candidate. |
| **2. Approval Voting** | Voters approve/disapprove each candidate. Highest approval wins. Used by professional associations. Does not require ranking. |
| **3. Runoff Voting** | If no majority, top two candidates face a runoff. Prevents extreme minority candidates from winning. |
| **4. Single Transferable Vote (STV)** | Also called "Hare voting" or "alternative vote." Eliminates lowest-vote candidate iteratively; redistributes their votes to next preferences. Enables **proportional representation** without gerrymandering. |
| **5. Coombs Voting** | Eliminates candidate with the *most last-place votes* each round (rather than fewest first-place). Vulnerable to strategic positioning. |

### **Paired-Comparisons Rules (6-11)**

| Method | Description |
|--------|-------------|
| **6. Borda Voting** | Candidates receive k-1 points for first place, k-2 for second, etc. Total points determine ranking. Equivalent to summing pairwise victories. A Condorcet winner may *not* win under Borda. |
| **7. Copeland Voting** | Candidates scored by **win-loss record** across all pairwise matchups. Used in round-robin sports tournaments (Olympics, World Cup). Requires tiebreaker for cycles. |
| **8. Minimum Violations** | Finds the candidate ranking with the fewest contradictions (where a lower-ranked candidate beats a higher-ranked one). Computationally difficult. |
| **9. Ranked Pairs** | Implements Condorcet's principle: lock in the largest pairwise margins first, skipping any that would create a cycle. Proposed by T. N. Tideman. |
| **10. Simpson-Kramer Min-Max** | Each candidate's score = their *largest defeat* (max votes against). Winner has the *smallest* max defeat. Chooses the "least-objectionable" candidate. |
| **11. Kemeny-Young** | Maximizes voter agreement with the final ranking. Similar to minimum violations but weights by margin of victory, not just wins. |

### **Methods from Sports Tournaments (12-13)**

| Method | Description |
|--------|-------------|
| **12. Kendall-Wei / Power Rank** | Extends Copeland by accounting for the *strength of opponents beaten*. Uses eigenvector calculations on the win-loss or paired-comparisons matrix. |
| **13. Jech Method (Maximum Likelihood)** | Probabilistic: assigns each candidate a "strength" such that expected wins equal actual wins. Equivalent to Copeland for complete round-robins. |

### **Additional Methods (Appendix)**

| Method | Description |
|--------|-------------|
| **Young Method** | If no Condorcet winner, score = largest voter subset for which the candidate *is* a Condorcet winner. |
| **Dodgson Rule** | Score = number of ballot inversions needed to make a candidate a Condorcet winner (Lewis Carroll's proposal). Computationally difficult. |
| **Nanson Rule** | Iteratively eliminates candidates with below-average Borda scores. |
| **Estimated Centrality** | Assumes spatial preferences; winner is the candidate closest to the "median" voter position. |

---

## Empirical Findings

The authors tested nine methods on **30 British union elections** where voters ranked all candidates:
- **Plurality rule frequently differed** from other methods
- **STV occasionally differed**
- **All other methods agreed on the winner** in every case
- Differences appeared mainly in rankings of lower candidates
- A Condorcet winner typically existed and coincided with the Borda winner

This suggests: **when voter preferences have sufficient consensus, the choice of electoral system matters less.**

---

## Five Criteria for Choosing a Voting System

### 1. **Level of Complexity**
- Simpler methods (plurality, approval, Borda) are easier to implement and explain
- Complex methods (Kemeny-Young, power ranking) may require computers
- Acceptable complexity depends on the election context (political vs. committee)

### 2. **Voter Strategy Resistance**
- All systems are susceptible to strategic voting
- More complex schemes are harder to manipulate
- Borda admitted his method was "only for honest voters"

### 3. **Candidate Incentives**
- **Plurality**: encourages seeking minority blocs (centrifugal)
- **Approval voting**: encourages broad appeal (centripetal)
- **Paired-comparison methods**: candidates do best appealing to majorities

### 4. **Ranking vs. Picking a Winner**
- Some methods (Borda, Copeland, Kemeny-Young) work well for **full rankings**
- Others (plurality, approval, min-max) better suited for **choosing one winner**

### 5. **Minority Support vs. Safe Choice**
- **Plurality**: rewards passionate minorities
- **Approval, Borda, min-max**: reward consensus and broad acceptability
- *Product testing* may want polarizing options; *elections* typically want safe, representative choices

---

## Key Historical Context

- **Jean-Charles de Borda** (1770): Proposed weighted point scoring
- **Marquis de Condorcet** (1785): Emphasized pairwise comparisons and the idea that large majorities should override small ones
- **Charles Dodgson (Lewis Carroll)**: Studied tournaments and elections at Oxford
- **Kenneth Arrow** (1951): Proved no voting system can satisfy all desirable criteria

---

## Conclusion

No voting system is perfect—the choice is always between flawed alternatives. The authors conclude:

> "A voting system can't find a consensus when none exists."

The difficulty of electoral reform stems from:
1. Entrenched status quo powers
2. Conflicting goals (legitimacy, participation, discouraging factionalization, representativeness)
3. Lack of theoretical consensus on "the best" alternative

Despite the wealth of alternatives, **plurality rule persists** partly because when preferences are similar enough, most systems agree—making the flaws of plurality less visible in everyday elections.

---

## Relevance to Trust & Online Reputation

This paper provides foundational theory for understanding **aggregation mechanisms** in online reputation systems:
- **Rating aggregation** (e.g., averaging stars) parallels Borda scoring
- **Pairwise comparisons** underpin recommendation algorithms and ranking systems
- **Strategic behavior** in voting mirrors manipulation in online reviews
- **Condorcet principles** inform "best overall" determinations in crowdsourced rankings
- Understanding voting cycles helps explain why different reputation platforms may produce conflicting rankings for the same entities

---

*Summary prepared for TDS Week 4: Trust and Online Reputation*
