# Summary: Google Votes: A Liquid Democracy Experiment on a Corporate Social Network

**Authors:** Steve Hardt and Lia C. R. Lopes  
**Date:** June 05, 2015  
**Source:** Technical Disclosure Commons

## Overview
This paper presents **Google Votes**, an internal experiment conducted at Google (2012-2015) to implement and test **Liquid Democracy** using the corporate Google+ social network. The experiment demonstrated that liquid democracy systems can be practically implemented on social networking software to combine the benefits of direct and representative democracy while mitigating their respective weaknesses.

## Liquid Democracy Concepts

### Comparison of Systems
*   **Direct Democracy:** Voters vote directly on all issues. Offers high control and accountability but scales poorly due to time/expertise constraints.
*   **Representative Democracy:** Voters elect representatives. Scales well but suffers from transparency issues, barriers to entry, election cycle distortions, and potential for abuse.
*   **Liquid Democracy (Delegable Proxy):** A hybrid system where:
    *   Voters can vote directly or **delegate** their vote to others.
    *   Delegations are **transitive** (e.g., if A delegates to B, and B to C, then C controls A's vote).
    *   Delegations can be changed or overridden at any time (instant accountability).
    *   Specialists emerge organically, creating a dynamic meritocracy without rigid election cycles.

### The Golden Rule of Liquid Democracy
To ensure trust and accountability, the authors propose a framework regarding vote visibility:
> **"If I give you my vote, I can see what you do with it."**

*   **Transparency Requirement:** The visibility of votes must mirror the delegation chain. If User A delegates to User B, User B's voting record must be visible to User A.
*   **Google Votes Policy:** The system adopted a policy where **all votes are publicly visible** to the entire voting group (Google employees) to maximize transparency, similar to how parliamentary votes are public.

## System Implementation
Google Votes was built as a web application integrated with Google's internal Google+ network, leveraging existing identity and social graph features.

### Key Features
1.  **Voting Styles:** Supported multiple voting methods, including:
    *   **Yes/No**
    *   **Plurality** (Select one)
    *   **Approval** (Select multiple)
    *   **Score** (1-5 stars)
    *   **Ranked:** Users rank options. The system defaults to the **Schulze method** (Condorcet-consistent) for tallying, though Borda count was used initially.
2.  **Delegation:** implemented by **category** (e.g., "food," "events"). A user delegates their vote to another specific to a topic.
3.  **Discovery & Discussion:**
    *   **Unbiased Sharing:** Sharing an issue neutrally to encourage participation.
    *   **Biased Sharing:** Sharing one's specific vote to influence others.
    *   **Discussion Aggregation:** Google+ posts related to an issue are aggregated directly on the voting page.
4.  **Feedback Loops:**
    *   **Voting Power Estimates:** Users see how much weight their vote carries based on incoming delegations.
    *   **Delegation Notifications:** When a delegate casts a vote on a user's behalf, the user is notified, allowing them to **override** the vote (vote directly) or remove the delegation if they disagree.

## Case Study: Usage at Google (2012-2015)
The system was used for real-world decision-making within the company.

*   **Scale:** Over 3 years, 20,000 Googlers visited, casting ~87,000 votes on 370 issues.
*   **Primary Application:** **Food and Microkitchen** decisions (e.g., stocking snacks, selecting menus). This domain provided high engagement with low business risk.
    *   *Example:* The "Mountain View Microkitchen Food Fair" involved ~4,600 voters selecting snacks to stock in offices.
*   **Other Applications:** GoogleServe logo selection, team T-shirt designs, and coding standards (Java).
*   **Delegation Metrics:**
    *   **3.6%** of total votes were delegated.
    *   Permission for "Delegation Advertisements" allowed users to campaign for proxies, resulting in 355 active delegations.
    *   Users with niche expertise (e.g., vegan diet) successfully garnered delegations to represent specific interests.

## Conclusion
The experiment showed that Liquid Democracy is a viable model for corporate governance and group decision-making. By lowering the barrier to entry for leadership and allowing flexible, transitive proxy voting, the system utilized the "social" nature of the network to distribute decision-making power effectively.
