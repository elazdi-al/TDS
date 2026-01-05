# Week 5: Election Methods and Vote Counting Schemes

## Introduction
This week's session focuses on election methods, specifically focusing on the mechanics and implications of different vote counting schemes. Unlike previous topics on influence and reputation, this section examines how we aggregate individual preferences into a collective decision.

## Desired Properties of an Election System
When designing an election system, several key properties are desirable:

1.  **Fairness**:
    *   **Voter Fairness**: Every vote should carry equal weight.
    *   **Candidate Fairness**: The system should not favor specific candidates (e.g., based on ballot order).
2.  **Simplicity**: The voting process should be easy to understand and execute for the average citizen.
3.  **Accessibility**: Voting must be accessible to everyone, including those with mobility challenges.
4.  **Information Access**: Voters should have access to accurate facts rather than just emotional manipulation or fake news.
5.  **Integrity**:
    *   **No Double Counting**: One person, one vote.
    *   **Confidentiality**: Secret ballots to prevent coercion or bribery.
6.  **Efficiency and Representation**: The outcome should accurately reflect the will of the people.
7.  **Practicality**: The system should be logistically feasible and cost-effective (not requiring excessive rounds of voting).
8.  **Determinism**: The vote counting algorithm should always produce the same result given the same inputs (no random winners).

## Vote Counting Schemes

### 1. Plurality Rule (First-Past-The-Post)
*   **Mechanism**: Voters select their single top choice. The candidate with the most votes wins.
*   **Pros**:
    *   Extremely simple.
    *   Works effectively for elections with only two candidates.
*   **Cons**:
    *   **Vote Splitting**: In three-candidate scenarios (e.g., two Left, one Right), similar candidates split the vote, potentially allowing a less popular candidate to win.
    *   **Strategic Voting**: Encourages voters to vote for the "lesser of two evils" rather than their true preference to avoid wasting their vote.
    *   **Two-Party Dominance**: Tends to entrench a two-party system (Duverger's Law) as people coalesce around viable candidates.

### 2. Condorcet Method
*   **Mechanism**: Voters rank candidates. The winner is the candidate who defeats every other candidate in a head-to-head pairwise comparison.
*   **Pros**:
    *   Utilizes more information (full rankings) than plurality.
    *   **Centrist Bias**: Tends to favor centrist or moderate candidates who are acceptable to a broad range of voters (e.g., second choice for both Left and Right extremes), leading to less polarizing outcomes.
*   **Cons**:
    *   **Condorcet Cycles**: It is possible to have a cycle (A beats B, B beats C, C beats A), resulting in no clear winner.
    *   Complex to count and resolve cycles.

### 3. Runoff Voting
*   **Mechanism**: If no candidate secures a majority ($>50\%$) in the first round, a second round is held between the top two candidates.
*   **Pros**: Ensures the final winner has majority support.
*   **Cons**:
    *   **High Cost**: Running two separate elections is expensive.
    *   **Voter Fatigue**: Turnout often drops significantly in the second round.
    *   **Strategic Voting**: Issues remain in the first round.

### 4. Instant Runoff Voting (IRV) / Alternative Vote
*   **Mechanism**: Voters rank candidates. If no candidate has a majority of first-choice votes, the candidate with the *fewest* first-choice votes is eliminated. Their votes are redistributed to the voters' next preferences. This repeats until a winner emerges.
*   **Context**: This is the single-winner version of the Single Transferable Vote (STV).
*   **Pros**: Simulates a runoff in a single election event.

### 5. Borda Count
*   **Mechanism**: Voters rank candidates. Points are assigned based on rank (e.g., if there are $K$ candidates, 1st choice gets $K-1$ points, last gets 0). The candidate with the most total points wins.

### 6. Coombs' Method
*   **Mechanism**: Similar to IRV, but instead of eliminating the candidate with the fewest first-place votes, it eliminates the candidate with the **most last-place votes**.
*   **Pros/Cons**: Can eliminate polarizing candidates early, but might also eliminate a popular majority candidate if they are strongly disliked by a minority.

### 7. Approval Voting
*   **Mechanism**: Voters select (approve) as many candidates as they like. The candidate with the most approvals wins.
*   **Pros**:
    *   Simple ballot.
    *   Allows expression of support for multiple acceptable candidates without fear of vote splitting.
    *   Treats all approved candidates equally (no ranking).

### 8. Single Transferable Vote (STV)
*   **Mechanism**: A proportional representation system used for multi-winner elections. It involves a quota for winning and the redistribution of surplus votes (votes above the quota) from winning candidates to remaining candidates based on rankings.

## Conclusion and Key Takeaways
*   **No Perfect System**: Every voting system has trade-offs (Arrow's Impossibility Theorem implied).
*   **Strategic vs. Honest Voting**: Ideally, a system should encourage honest voting, but many (like Plurality) incentivize strategic voting.
*   **Impact on Candidates**: The choice of system influences who wins. Plurality favors polarized major parties; Condorcet favors centrists; Approval favors broad acceptability.
