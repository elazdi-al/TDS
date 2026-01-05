# Quadratic Voting: How Mechanism Design Can Radicalize Democracy

**Authors:** Steven P. Lalley (University of Chicago) and E. Glen Weyl (Microsoft Research & Yale University)

**Source:** AEA Papers and Proceedings 2018, 108: 33–37

---

## Overview

This paper proposes **Quadratic Voting (QV)** as a novel voting mechanism derived from mechanism design theory. QV addresses the fundamental limitations of traditional one-person-one-vote (1p1v) democracy by allowing voters to express the **intensity of their preferences**, not just their direction. The authors argue that QV is the unique vote pricing rule that achieves social optimality under a price-taking model, providing an "invisible hand" for collective decision-making analogous to markets for private goods.

---

## 1. The Problem with Traditional Democracy

### Majority-Minority Conflicts
- Traditional democracy struggles with **majority-minority conflicts**, leading to the rise of "populist" tyrannies of the majority or plurality.
- This is identified as the "oldest and most persistent problem of democracy."

### Limitations of One-Person-One-Vote (1p1v)
- **1p1v rations influence equally**: Each voter gets exactly one unit of influence on any collective decision.
- **Blocks Pareto-improving trade**: Under 1p1v, citizens cannot trade influence across issues—someone who cares deeply about Issue A but little about Issue B cannot give up influence on B to gain more on A.
- **Fails to account for intensity of preference or knowledge**: Standard democracy treats a voter who is mildly in favor the same as one who is passionately in favor.

---

## 2. Quadratic Voting: The Mechanism

### Core Concept: Voice Credits
- Each voter is endowed with a large stock of **"voice credits"** that can be spent to influence collective decisions.
- Voters purchase votes using these credits; the **cost of votes is quadratic**:
  - **Cost = (number of votes)²**
  - Example: 1 vote costs 1 credit; 2 votes cost 4 credits; 3 votes cost 9 credits; etc.

### How QV Works
1. Voters choose a **continuous number of votes** (positive or negative) depending on which alternative they favor.
2. Alternative A is implemented if the sum of all votes is ≥ 0; otherwise, Alternative B wins.
3. Each voter pays voice credits equal to the **square of their votes** to a central clearing house.

### The Key Insight: Proportionality to Preference Intensity
- Under quadratic pricing, a voter's optimal number of votes is **proportional to their value** for the outcome.
- This is because quadratic functions have **linear derivatives**: the marginal cost of an additional vote increases linearly.
- Therefore, voters naturally express the strength of their preferences through their vote purchases.

---

## 3. Mathematical Foundation: Uniqueness Theorem

### Theorem 1
> *A vote pricing rule is robustly optimal if and only if it is quadratic.*

### The Price-Taking Model
- Assumes voters agree on the marginal pivotality of votes (probability that one vote swings the election).
- A rational voter maximizes: `2uᵢ × p × vᵢ − c(vᵢ)` where:
  - `uᵢ` = voter's value for seeing Alternative A prevail
  - `p` = perceived chance a vote is pivotal
  - `vᵢ` = number of votes purchased
  - `c(vᵢ)` = cost function

### Why Only Quadratic Works

| Pricing Rule | Behavior | Outcome |
|--------------|----------|---------|
| **Linear cost (power → 1)** | Voters with slightly greater values vote infinitely more | **Dictatorship of the most intense voter** |
| **Quadratic cost (power = 2)** | Votes proportional to values | **Optimal collective decisions** |
| **Very convex cost (power → ∞)** | All voters buy exactly one vote | **Equivalent to 1p1v** |

**QV is the optimal intermediate point** between the extremes of dictatorship (linear voting) and majority rule (1p1v).

---

## 4. Game-Theoretic Analysis and Robustness

### Theoretical Validation
- Under appropriate conditions and in **symmetric Bayes-Nash equilibria**, the price-taking assumption holds approximately for almost all voters.
- Welfare losses from QV **decay at rate 1/N** as population grows—the same convergence rate as private goods markets.

### Numerical and Experimental Evidence
- **Small populations**: Welfare lost from QV relative to optimum is very small (rarely more than a few percentage points).
- **1p1v losses**: May easily be near **100 percent**.
- **Laboratory experiments**: Participants don't play exactly as game theory predicts, but votes are generally **linearly proportional to values** with some noise, leading to outcomes much closer to optimal than 1p1v.

### Robustness Features
QV performs well even under:
- Collusion
- Uncertainty about value distributions
- Voter irrationality or non-consequentialist behavior

---

## 5. Comparison with Other Voting Mechanisms

### Category 1: Optimal but Fragile Mechanisms

| Mechanism | Problem |
|-----------|---------|
| **Vickrey-Clarke-Groves (VCG)** | Extremely sensitive to collusion by even small groups; requires large, uncertain monetary expenditures |
| **Groves-Ledyard / Hylland-Zeckhauser** | Only applicable to continuous public goods (rarely arise in practice) |

### Category 2: Practical but Non-Optimal Mechanisms

| Mechanism | Problem |
|-----------|---------|
| **Approval Voting (Brams & Fishburn)** | Does not allow expression of preference intensity |
| **Storable Votes (Casella)** | Linear voting function induces dictatorship of most intense voters |
| **Qualitative Voting (Hortala-Vallve)** | Similar issues with extreme voters |

### QV's Niche
- Combines the **simplicity and practicality** of non-optimal mechanisms
- With an **approximation to optimality** of fragile mechanisms

---

## 6. Practical Applications

### Current Applications
- **Polling and survey research**: Evidence shows significant improvements over existing preference elicitation methods.
- Research studies demonstrate QV's effectiveness in revealing true preferences.

### Speculative Applications (Requiring Further Experimentation)
- **Political elections**: Higher stakes require more experimentation at smaller scales first.
- **Corporate governance**: Proposed as a more efficient voting mechanism for shareholders.

---

## 7. "Radical Democracy" – Multiple Meanings

The authors describe QV as creating a "radical democracy" in three senses:

1. **Mathematical Radical**: Votes equal the **square root (radical)** of voice credits spent.

2. **Philosophical Roots**: Returns to what democratic framers (Hamilton, Condorcet, Bentham) envisioned—ensuring the state serves the **general happiness of the people maximally**.

3. **Expanded Rights**: **Liberates citizens** from the "straightjacket" of 1p1v influence rationing, allowing full and free expression of political views.

---

## 8. Broader Vision: Radical Markets

### Extending Mechanism Design Beyond Voting
- The paper connects QV to a broader vision of **radical markets** that challenge traditional property rights.
- **Vickrey Commons**: A thought experiment where assets (other than personal property) are continuously auctioned, with revenue returned to the public as a **social dividend**.

### Breaking Ideological Deadlocks
- QV and related mechanisms illustrate potential to **transcend left-right political divisions**.
- Takes free market logic to its extreme while simultaneously abolishing private property and most inequality.

---

## 9. Key Takeaways

| Aspect | Traditional 1p1v | Quadratic Voting |
|--------|------------------|------------------|
| Preference expression | Binary (for/against) | Continuous (intensity) |
| Influence distribution | Fixed per person | Purchased proportionally |
| Cost structure | None | Quadratic |
| Majority tyranny | Possible | Mitigated |
| Minority protection | Weak | Strong (intense minorities can outweigh apathetic majorities) |
| Optimality | Not optimal | Approximately optimal |
| Trade-offs | None allowed | Implicit across issues |

---

## 10. Conclusion

Quadratic Voting represents a significant contribution from mechanism design theory to democratic practice. By requiring voters to pay quadratically for votes, QV naturally elicits preference intensity and produces collectively optimal outcomes. The mechanism is:

- **Theoretically grounded**: Uniquely optimal among vote pricing rules
- **Empirically validated**: Performs well in experiments and numerical simulations
- **Practically promising**: Already applied in polling; higher-stakes applications pending further testing

The authors advocate for "cautious but increasingly ambitious experimentation" to realize QV's potential to create a more responsive, efficient, and truly representative democracy.

---

## References (Selected)

- Lalley, S.P. & Weyl, E.G. (2017). "Nash Equilibria for Quadratic Voting."
- Posner, E.A. & Weyl, E.G. (2015). "Voting Squared: Quadratic Voting in Democratic Politics."
- Posner, E.A. & Weyl, E.G. (2018). *Radical Markets: Uprooting Capitalism and Democracy for a Just Society*.
- Quarfoot, D. et al. (2017). "Quadratic Voting in the Wild: Real People, Real Votes."
- Vickrey, W. (1961). "Counterspeculation, Auctions, and Competitive Sealed Tenders."
