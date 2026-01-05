# Week 7: Liquid Democracy

## Overview

This lecture explores **Liquid Democracy** (also called **Delegative Democracy**)—an innovative approach to democratic participation that attempts to combine the best aspects of both direct and representative democracy. The core idea is that democracy should evolve alongside technology, and liquid democracy represents one promising direction for this evolution.

---

## Direct vs. Representative Democracy: A Recap

### Representative Democracy
- **Definition**: Voters elect representatives who discuss, decide, and vote on issues on their behalf.
- **Advantages**:
  - Less time and attention demands on voters
  - Allows for specialization (politicians spend full-time understanding complex issues)
- **Disadvantages**:
  - **Weakened accountability**: Representatives may have different priorities once elected
  - **Power distancing**: Decision-making becomes detached from voters
  - **Limited choice**: Voters must choose a party/representative that may not perfectly reflect their views on all issues
  - **Self-selection bias**: Representatives tend to be a specific type of person (those who want political power and reelection)

### Direct Democracy
- **Definition**: All eligible voters directly discuss, decide, and vote on issues themselves.
- **Advantages**:
  - Keeps power close to voters
  - Greater accountability
  - Rich information space—voters can express nuanced preferences on each issue
  - **Creates better citizens**: Encourages voters to study issues and become more engaged
- **Disadvantages**:
  - High time and attention demands on all voters
  - Some voters may lack the time, interest, or expertise to engage with every issue
  - Susceptible to the **"bright, shiny object" effect**: Hot-button issues capture disproportionate attention

### Case Study: Switzerland
Switzerland exemplifies successful direct democracy with:
- Strong culture of decentralization (power reserved to local levels)
- Government sends balanced information packets about ballot issues from multiple perspectives
- Demonstrates that **execution matters**—effectiveness depends heavily on implementation quality

---

## Liquid Democracy: The Core Concept

### Basic Idea
Liquid democracy gives voters **individual choice** for each issue:
1. **Vote directly** on issues you care about, have time for, or feel knowledgeable about
2. **Delegate your vote** to a trusted representative for issues you prefer not to engage with directly

### Key Innovation
Unlike traditional representative democracy, liquid democracy allows:
- **Issue-by-issue delegation**: Delegate to different people for different topics (e.g., one person for healthcare, another for economics)
- **Flexibility**: Can participate directly on some issues and delegate on others
- **Personalization**: Each voter's level of engagement can vary according to their preferences and capacity

### Historical Background

| Era | Contributor | Contribution |
|-----|-------------|--------------|
| 1800s | **Lewis Carroll** | Introduced idea of "clubbing" or combining votes |
| 1960s | **Gordon Moore** | Proposed proxy voting in political contexts |
| Long precedent | **Corporate boardrooms** | Proxy voting has been standard practice |
| 2002+ | Multiple researchers | Independent reinvention of liquid democracy concepts |
| 2003 | Anonymous ("Psyche") | Coined the term "liquid democracy" |

### Major Experiment: German Pirate Party
- Implemented liquid democracy using **Liquid Feedback** platform
- **Mixed results**: Some successes, some challenges
- Notable issue: One professor accumulated significant delegated voting power ("the most powerful pirate")
- Raised important questions about **concentration of voting power**

---

## Key Issues and Design Choices

### 1. Transitive Delegation

**Question**: If Alice delegates to Bob, and Bob delegates to Carol, should Alice's vote flow through to Carol?

#### Arguments Against Transitive Delegation
- **Trust may not be transitive**: I trust you to vote for me, but maybe not to choose who votes for me
- **Contributes to power concentration**: Votes can accumulate unexpectedly through chains of delegation
- **Loss of control**: Voters may not know where their vote ultimately ends up

#### Arguments For Transitive Delegation
- **Conceptual generality**: No obvious reason to impose arbitrary limits (why 2 hops but not 3?)
- **Trust chains work**: You may trust a neighbor more than a distant expert; your neighbor finds someone they trust; this can lead to better representation
- **Effective information flow**: You don't need to be an expert—just find someone slightly more expert than yourself

#### Alternative Approaches
- **Ranked-choice delegation**: List multiple delegates in order of preference; if first choice doesn't vote, move to second choice
- **Hop limits**: Allow only 1-2 transitive steps

### 2. Concentration of Voting Power

**Problem**: What if everyone delegates to the same popular figure (celebrity, expert)?

**Concerns**:
- Risk of creating an "accidental dictator"
- Single points of potential corruption
- Anyone with concentrated power (Taylor Swift, Trump, or anyone else) becomes a vulnerability

**Open question**: How do we balance freedom of delegation with preventing dangerous concentration?

### 3. Split Delegation

**Question**: Can voters divide their voting power among multiple delegates?

#### Example: Viscous Democracy
- A variant where voters can split their vote among 2-3 trusted people
- Voting power divides proportionally

#### Arguments For Split Delegation
- **Expressiveness**: Voters can indicate their true distribution of trust (e.g., 50% to Alice, 30% to Bob, 20% to Carol)
- **Mitigates concentration**: If German Pirate Party members could have split their votes, the professor might not have accumulated so much power
- **Avoids winner-take-all dynamics**: Second and third-choice delegates also receive some voting power

#### Concerns
- Computational complexity as votes fragment into smaller and smaller pieces
- May create messy delegation graphs

### 4. Vote Privacy and Coercion

**Problem**: How do we prevent vote buying and coercion in a system where delegation is visible?

#### Proposed Solutions

**Solution 1: Threshold for Delegates**
- Must accumulate a minimum number of delegated votes before exercising them
- Similar to requirements for political party registration
- **Trade-off**: Higher thresholds increase corruption resistance but limit voter choice

**Solution 2: Public/Private Vote Separation**
- **Public vote**: Your declared position as a delegate (visible for accountability)
- **Private vote**: Your actual personal vote (always secret)
- Everyone has both; even delegates cast private votes separately from their public positions
- Corrupted public votes don't compromise private democratic choice

### 5. Delegation Cycles

**Problem**: What happens if Alice delegates to Bob, Bob to Carol, and Carol back to Alice?

#### Solutions

**Resistive/Viscous Approach** (PageRank-inspired):
- Small fraction of voting power lost at each delegation step
- Cycles naturally diminish to negligible values
- Computationally tractable

**Linear Programming Approach** (Recent research):
- Treat the delegation graph as an LP problem
- Compute equilibrium over infinite time
- Votes flow continuously; cycles don't cause loss
- Bachelor thesis by David Holtzworth explored this approach

---

## Supporting Underrepresented Communities

Liquid democracy offers potential benefits for minority representation:
1. **Direct support**: Voters can delegate to representatives from underrepresented communities
2. **Indirect support**: Delegate to broad-minded representatives who consider diverse interests
3. **Explicit expression**: Cooperation and cross-community support can be expressed more directly than in traditional systems

---

## Current State and Future Directions

### What We Know
- Liquid democracy is **not mature yet**—no definitive "right way" to implement it
- Several experiments have provided valuable lessons (German Pirate Party, others)
- Core concept seems promising as a balance between direct and representative democracy

### Open Research Questions
1. What is the optimal level of transitive delegation (if any)?
2. How does split delegation affect concentration of voting power?
3. What threshold levels best balance corruption resistance and voter freedom?
4. How do real users behave in liquid democracy systems?
5. Can liquid democracy scale to national-level politics?

### Need for Experimentation
- A/B testing with different communities using different delegation rules
- Empirical studies on how splitting affects power concentration
- Long-term observation of delegation patterns

---

## Key Takeaways

1. **Liquid democracy = choice**: Voters decide whether to participate directly or delegate, on an issue-by-issue basis
2. **Best of both worlds**: Attempts to combine direct democracy's engagement with representative democracy's convenience
3. **Design choices matter**: Transitivity, splitting, thresholds, and privacy mechanisms all have trade-offs
4. **Execution is critical**: Success depends heavily on implementation quality (information provision, user interface, etc.)
5. **Still experimental**: Many open questions remain; ongoing research and experimentation needed
6. **Technology-democracy co-evolution**: Liquid democracy represents one vision for how democracy might evolve with digital tools

---

## Connections to Course Theme

Liquid democracy embodies core questions of the Technologies of Democratic Societies course:
- How can technology enhance (rather than undermine) democratic participation?
- What trade-offs exist between freedom, security, and efficiency in democratic systems?
- How do we design systems that work with human nature (varying levels of engagement, trust networks)?
- Can algorithmic approaches (PageRank, LP solving) help manage democratic complexity?
