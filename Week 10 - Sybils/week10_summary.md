# Week 10: Digital Identity, Sybil Attacks, and Proof of Personhood

This lecture explores the fundamental tension between **digital identity** and **privacy/anonymity** on the Internet, examining the Sybil attack problem and potential solutions such as *proof of personhood*.

---

## 1. The Identity vs. Anonymity Debate

### Arguments for Weaker Identities (Anonymity)
| Benefit | Explanation |
|---------|-------------|
| **Freedom of Speech** | Enables protest, resistance, and political organization, especially in countries with limited freedoms |
| **Privacy Protection** | Prevents invasive tracking by platforms and reduces exposure to identity theft |
| **Inclusivity** | Allows participation for those without legal documents (refugees, stateless individuals) |
| **Early Internet Design** | The Internet was intentionally designed to be inclusive and barrier-free |

### Arguments for Stronger Identities
| Benefit | Explanation |
|---------|-------------|
| **Fraud Prevention** | Stronger identities make scams and impersonation harder |
| **Accountability** | Enables tracking of illegal behavior (hate speech, harassment) |
| **Civility** | Incentivizes reasonable behavior and holds people accountable |
| **Advertising (Platform Interest)** | Allows platforms to track users for targeted advertising |

---

## 2. Why Platforms Avoid Strong Identity Checks

Despite potential benefits, most platforms resist implementing strong identity verification for several reasons:

1. **Risk of Data Leaks** — Legal and financial exposure if identity data is compromised
2. **Identity Theft Concerns** — Storing strong identities creates targets for thieves
3. **User Convenience (Primary Reason)** — Platforms prioritize frictionless onboarding to maximize user growth; any additional verification step could scare away users
4. **Exclusion Risks** — Many people lack official identification (refugees, stateless individuals)

---

## 3. The Sybil Attack

### Origin of the Term
- Named after a book titled *Sybil* about a woman with multiple personality disorder (20+ personalities)
- The term was adopted by Microsoft researcher **John Douceur** (~2000) to describe the Internet's "multiple personality disorder" problem

### Core Problems with Weak Identities

| Problem | Description |
|---------|-------------|
| **Problem A: Information Poverty** | Identities (IP addresses, email addresses) carry no inherent information about the person behind them |
| **Problem B: Cheapness & Disposability** | Identities can be synthesized automatically, at scale, for very low cost |

### Manifestations of These Problems

| Problem Type | Examples |
|--------------|----------|
| **Problem A (Accountability)** | Hate speech, scams, impersonation, illegal behavior without consequences |
| **Problem B (Scale Attack)** | Social bots, email spam, DDoS attacks, ballot stuffing in online votes |

### The Doonesbury Incident (Case Study)
- A cartoon held an Internet vote on which college a character should attend
- Used "one vote per IP address" as the anti-fraud mechanism
- **Problem 1 (Exclusion):** Multiple users behind NAT (Network Address Translation) couldn't all vote
- **Problem 2 (Ballot Stuffing):** MIT students had access to millions of unused IP addresses (Class A network) and wrote a script to vote repeatedly → MIT won the vote

---

## 4. Anti-Sybil Defenses

### 4.1 Weak Identity Proxies
| Proxy | Strength | Weaknesses |
|-------|----------|------------|
| **IP Addresses** | Very Weak | Easily changed, multiple users share addresses, many available |
| **Phone Numbers** | Slightly stronger | People can have multiple; getting cheaper |
| **Email Addresses** | Weak | Easily created; services like Gmail allow infinite aliases (user+anything@gmail.com) |
| **MAC Addresses** | Weak | Can be spoofed |

### 4.2 CAPTCHAs
- **Purpose:** Distinguish humans from bots
- **Problems:**
  - AI is getting increasingly good at solving CAPTCHAs
  - CAPTCHAs are getting progressively harder for real humans
  - Already exclusionary for many people (visual impairments, cognitive difficulties)
  - Arms race between attackers and defenders is unsustainable
  - **Endgame:** AI will eventually surpass humans at solving CAPTCHAs, making them useless

### 4.3 Cryptographic Certificates (PKI)
- More costly and harder to obtain
- Successfully adopted for **website identity** but not for individual people
- Process is seen as too inconvenient for general users

### 4.4 Physical Mail Verification
- Banks sometimes send multiple letters to verify identity
- Relies on trust in the postal service (which is not always reliable)

---

## 5. Proof of Identity vs. Proof of Personhood

### Proof of Identity
- **Focus:** Attributes and properties (name, age, photo, SSN, biometrics)
- **Use Cases:**
  - **KYC (Know Your Customer):** Legal requirement for financial institutions
  - **AML (Anti-Money Laundering):** Tracking fraud and suspicious activity
  - **Age Verification:** Alcohol/tobacco sales
- **Key Insight:** Businesses typically don't *care* about your actual identity—they care about legal compliance and accountability if fraud occurs

### Proof of Personhood
- **Core Question:** *Can we verify real people without identifying them?*
- **Goal:** Achieve **accountable anonymity**—strong privacy without disposable identities
- **Key Distinction:** Not an oxymoron; aims for non-disposable identities that preserve privacy

---

## 6. Approaches to Proof of Personhood

### Approach 1: In-Person Verification (Pseudonym Parties)
**Proposed by the lecturer ~15-20 years ago**

| Element | Description |
|---------|-------------|
| **Concept** | Regular, scheduled in-person events at designated locations |
| **Process** | Attend by deadline → doors close → leave in orderly fashion → receive one digital token |
| **Privacy Preserved** | No ID required; masks/costumes allowed |
| **Non-Disposability** | Cannot re-enter same cycle; must attend again for next cycle |
| **Inspiration** | Religious institutions have achieved similar regular attendance for thousands of years |
| **Challenges** | Corruption risks, costs of organizing events, convenience for participants |

**EnCointer Project:** Zurich-based project experimenting with in-person verification with moderate success

### Approach 2: Social/Trust Networks (Web of Trust)
- Based on PKI, PGP key signing parties
- Popular in blockchain communities
- People vouch for each other's personhood

### Approach 3: Biometric Authentication
- Example: **Aadhaar** (India's national biometric database)
  - Collects all 10 fingerprints and iris scans
  - Addresses widespread fraud (fake people claiming benefits)
  - **Privacy Risks:** Massive target for hackers; likely already compromised by various actors
- Research ongoing to make biometrics less privacy-invasive

### Approach 4: Online Presence-Based Verification
**Example: IDENA System**

| Feature | Description |
|---------|-------------|
| **Mechanism** | Synchronous online sessions where participants solve "flip puzzles" |
| **Flip Puzzles** | Four-picture sequences; correct order tells a coherent story |
| **Logic** | Real person with one consciousness can only solve one puzzle at a time |
| **Vulnerabilities** | AI may eventually solve these; already vulnerable to hired human solvers |

---

## 7. Key Takeaways

1. **Two Distinct Problems:** The Sybil problem has two facets—(A) lack of information about identities, and (B) cheap, disposable, automatically synthesizable identities. Solutions should address both.

2. **CAPTCHAs Are a Dead End:** The arms race with AI will eventually render CAPTCHAs useless or exclusionary.

3. **Proof of Personhood ≠ Proof of Identity:** We may be able to achieve accountability without sacrificing privacy.

4. **Accountable Anonymity Is Possible:** Non-disposable anonymous credentials could enable both privacy and accountability.

5. **In-Person Verification Has Promise:** Though impractical today, physical presence requirements could provide robust proof of personhood (inspired by religious institutions' long success with regular gatherings).

6. **Mass Surveillance Is Not the Answer:** While authoritarian approaches (e.g., China) have "solved" the identity problem, such solutions come at the cost of all privacy.

---

## 8. Looking Ahead
Next week's lecture will go deeper into **privacy and anonymity**, with particular focus on anonymity technologies and mechanisms.
