# Information Gerrymandering and Undemocratic Decisions

**Authors:** Alexander J. Stewart, Mohsen Mosleh, Marina Diakonova, Antonio A. Arechar, David G. Rand, & Joshua B. Plotkin  
**Published in:** *Nature*, Volume 573, September 2019  
**DOI:** https://doi.org/10.1038/s41586-019-1507-6

---

## Overview

This study introduces and investigates **information gerrymandering**, a phenomenon where the structure of an influence network can systematically sway collective decision-making outcomes towards one party—even when both parties have equal sizes and each individual has equal influence. The research combines mathematical modeling, controlled experiments with 2,520 human subjects, and analysis of real-world political networks to demonstrate how information flow constraints threaten democratic decision-making.

---

## Key Concepts

### The Voter Game Model

The researchers developed a **voter game** to study collective decisions under incomplete information:

- **Players** are split into two equal-sized parties (e.g., "purple" and "yellow")
- **Voting intentions** can change over time based on continuously updated polling data
- **Influence networks** (directed graphs) determine which players' voting intentions each player can observe
- **Payoff structure:**
  - **Maximum payoff (B):** If your party exceeds a super-majority threshold (V > 0.5)
  - **Lower payoff (b):** If the opposing party exceeds the threshold
  - **Zero payoff:** If neither party reaches the threshold ("deadlock")

### Two Worldviews

1. **Compromise Worldview (b > 0):** Players prefer reaching any decision over deadlock—reflecting the practical value of broad consensus even while pursuing partisan interests
2. **Zero-Sum Worldview (b < 0):** Players prefer deadlock to their party losing—these individuals act as **zealots**, always voting for their party regardless of polls

---

## Information Gerrymandering Defined

**Information gerrymandering** occurs when parties have **asymmetric influence assortment**—that is, when one party distributes its influence on a network more effectively than the other, allowing it to flip a disproportionate number of persuadable voters.

### Key Metrics

#### Influence Assortment (aᵢ)

Measures whether a player is predominately exposed to:
- **Positive assortment:** Members of their own party
- **Negative assortment:** Members of the opposing party
- **No assortment:** Evenly split between parties

#### Influence Gap (Gᵢ)

Quantifies the difference in influence assortment between parties:
- **Positive influence gap (Gᵢ > 0):** The party benefits from information gerrymandering
- **Negative influence gap (Gᵢ < 0):** The party is disadvantaged

### How It Works

A party is most effective when it influences the largest number of people *just enough to flip their votes*, without wasting influence on those already convinced. This mirrors the principles of **electoral gerrymandering** (where voting districts are drawn to give one party disproportionate seat representation).

---

## Experimental Findings (n = 2,520 Human Subjects)

### Baseline Condition (No Influence Assortment)
- Each party achieved a winning consensus in roughly **25%** of replicates
- **Deadlock** occurred in approximately **50%** of replicates
- When polls are representative (equal party exposure), outcomes are unbiased

### Information Gerrymandering Effects (Asymmetric Assortment)
- Vote shares as large as **67%** for the more assorted party
- Mean vote share of **57%** for the favored party (vs. 50% expected)
- Statistically significant advantages (p = 0.003 for vote skew; p = 0.02 for consensus wins)

### Zealot Bots (Asymmetric Placement)
- **6 strategically placed zealot bots** can induce information gerrymandering
- Vote shares as large as **63%** for the party with a positive influence gap
- Mean vote share of **53%** for the favored party

### Symmetric Assortment (Both Parties Echo-Chamber)
- Neither party gains an advantage
- Frequency of consensus drops dramatically to **15%** (vs. 55% baseline)
- Both parties suffer from self-constructed echo chambers

### Symmetric Bots (Both Parties Use Bots)
- Neither party gains advantage
- **Deadlock occurred in 100%** of experimental replicates
- Complete breakdown of collective decision-making

---

## Mathematical Model Results

| Condition | Model Vote Share | Experiment Vote Share | Model Consensus | Experiment Consensus |
|-----------|------------------|----------------------|-----------------|---------------------|
| No assortment | 0.50 | 0.48 | 63% | 55% |
| Asymmetric assortment | 0.60 | 0.57 | 47% | 45% |
| Asymmetric bots | 0.56 | 0.53 | 19% | 18% |
| Symmetric assortment | 0.50 | 0.51 | 18% | 15% |
| Symmetric bots | 0.50 | 0.50 | 1% | 0% |

---

## Real-World Evidence of Information Gerrymandering

### U.S. Congress (Bill Co-Sponsorship Networks)
- **Democrats** consistently exhibited positive influence assortment in both House and Senate
- **Republicans** historically had less assortment (negative influence gap)
- **Starting in 1994:** Republican influence assortment increased considerably and has remained nearly as high as Democrats
- This pattern is consistent with documented increases in Congressional polarization since the mid-1990s

### European Legislatures
- Significant differences in influence assortment (p < 0.01) between governing and non-governing parties in **6 out of 8** European legislative bodies analyzed:
  - Romania (upper and lower chambers)
  - Italy (upper and lower chambers)
  - France (lower chamber)
  - Czech Republic (lower chamber)

### Online Political Discussions (U.S. Elections)
- **2004 Blog Network:** Significant Republican-leaning influence gap
- **2010 Twitter-Mention Network:** Significant Republican-leaning influence gap
- **2016 News Intake Network:** Significant Democratic-leaning influence gap

---

## Simulations on Complex Networks

When simulating the voter game on large influence networks with power-law degree distributions:

- **Information gerrymandering arises easily** in realistic networks
- The **influence gap Gᵢ** continues to strongly predict vote outcomes
- Gerrymandering can induce **vote skews as large as 40%** when parties are equal-sized
- A **minority party** can be made to win a majority of votes through strategic network positioning
- The influence gap accounts for **at least 40%** of variance in vote share across diverse networks

---

## The Group-Level Social Dilemma

Information gerrymandering presents a **tragedy of the commons** scenario:

1. **Individual Incentive:** A party can benefit by increasing its influence assortment relative to the opposition through:
   - Strategic coordination among party members
   - Deployment of automated bots
   - Encouraging zero-sum worldviews among supporters

2. **Collective Consequence:** When both parties pursue this strategy:
   - Overall influence assortment increases
   - Neither party gains an advantage
   - The group becomes **trapped in deadlock**
   - Everyone receives zero payoff

### Analogy to the Prisoner's Dilemma
- Mutual "defection" (both parties gerrymandering) is the Nash equilibrium for two individuals
- However, mutual defection leaves everyone worse off
- Future research must identify mechanisms (like reciprocity, punishment, and reputation) to resolve this dilemma

---

## Key Threats to Democratic Decision-Making

The study identifies two distinct but intertwined threats:

1. **Information Campaigns:**
   - Fake news proliferation
   - Automated bots targeting messages for maximal effect
   - Exploitation of social media anonymity

2. **Polarized Political Debate:**
   - Echo chambers where users shut out dissenting voices
   - Affective polarization (negative attitudes toward opposing party members)
   - Zero-sum worldview adoption

### Vulnerabilities of Social Media
- Allows users to filter out opposing viewpoints
- Provides adversarial actors with anonymity
- Enables targeted messaging for maximum persuasive effect
- Effects extend beyond online world to traditional news media and voter behavior

---

## Implications for Democracy

### Symmetric Assortment = Democratic Outcomes
- When influence assortment is symmetric, the expected vote share equals party representation among voters

### Low Influence Assortment = Broad Consensus
- Decisions can be reached with broad consensus despite partisan preferences

### Asymmetric Assortment = Undemocratic Outcomes
- One party wins a disproportionate share of votes
- Outcomes do not reflect the true preferences of the population

---

## Methodology Summary

- **Experiments:** 2,520 human subjects recruited via Amazon Mechanical Turk
- **Game Design:** 24 players per game, 12 per party, 240-second duration
- **Payoffs:** B = 2 (win), b = 0.5 (lose), 0 (deadlock)
- **Super-majority threshold:** V = 60%
- **Validation:** 120 experimental sessions conducted March 13-22, 2018
- **Ethics:** IRB approved (Yale University #1307012383)
- **Data & Code:** Available at https://github.com/jplotkin/InformationGerrymandering

---

## Conclusion

This research provides:
1. **A quantitative framework** for understanding how network structure influences collective decisions
2. **Experimental validation** that information gerrymandering can systematically bias democratic outcomes
3. **Empirical evidence** that information gerrymandering is widespread in real-world political discourse
4. **A warning** about the group-level social dilemma: when all parties engage in gerrymandering, society loses its ability to reach consensus

The findings have profound implications for understanding and protecting democratic institutions in an era of social media, echo chambers, and automated influence campaigns.
