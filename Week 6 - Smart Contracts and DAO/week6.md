# Week 6: Blockchains, Smart Contracts, and DAOs

## Overview

This lecture explores the third major phase of decentralized systems excitement: blockchain technology, smart contracts, and Decentralized Autonomous Organizations (DAOs). It examines both the promising ideals and practical limitations of these technologies in the context of democratic societies.

---

## Three Phases of Decentralized Systems Excitement

Throughout recent decades, several waves of decentralized technology have captured public attention with promises of "democratizing" society:

### Phase 1: Usenet
- The original platform allowing anyone to message and participate in global public forums
- Promised to revolutionize society for the better
- Did not live up to its perceived promise, but also did not cause significant harm

### Phase 2: Peer-to-Peer (P2P)
- **Killer App**: File sharing (especially MP3s via Napster) – "Spotify before Spotify"
- **Cultural Context**: Widespread frustration with record labels' exploitative practices toward consumers and artists
- **Technical Advances**:
  - Distributed Hash Tables (DHTs) for scalable data management and efficient searches
  - BitTorrent for efficient data dissemination
  - Interplanetary File System (IPFS) – still used today
- Promised to revolutionize the internet and democratize everything
- Did not fully live up to expectations due to serious limitations

### Phase 3: Blockchain (Current Era)
- Bitcoin, Ethereum, smart contracts
- Decentralized Finance (DeFi), DAOs
- The focus of this lecture

---

## Bitcoin: Foundational Innovation

### Origins
- Released in **2008** by pseudonymous creator **Satoshi Nakamoto**
- Identity remains unknown; best guesses point to a researcher who has since passed away
- Released as both a paper and open-source project

### Four Key Distributed Systems Challenges Addressed

1. **Consensus/Agreement Problem**
   - Getting distributed nodes to agree on a common value/history
   - Even when some nodes may misbehave or die
   - Bitcoin provided a novel, unconventional solution

2. **Sybil Resistance**
   - Named after the famous psychology case of extreme multiple personality disorder
   - **Problem**: On the internet, identities are infinitely disposable – anyone can create unlimited identities
   - This makes voting systems vulnerable (unlimited identities = unlimited votes)
   - Bitcoin provided a partial solution

3. **Distributed Ledger Maintenance**
   - Maintaining a shared document/history among many parties
   - Write-only structure (append only, never modify past entries)

4. **Cryptocurrency**
   - First successful, self-maintaining digital cash
   - Incentive-compatible design that attracted real users and value

---

## Blockchain Structure and Proof of Work

### Basic Structure
- **Genesis Block**: The initial hard-coded starting point created by developers
- **Hash Chain**: Successive blocks linked by cryptographic hashes
- **Block Creation**: Approximately every 10 minutes (for Bitcoin)
- **Merkle Tree**: Cryptographic structure containing transactions within each block
- **Write-Only Ledger**: Once recorded, entries are never changed – only new blocks are added

### Consensus Through Competition
- Unlike traditional closed-environment consensus algorithms (T of N threshold approaches)
- Bitcoin uses **open, permissionless participation**
- Thousands of participants (miners) compete to add new blocks

### Proof of Work Mechanism
- To add a block, participants must solve a cryptographic puzzle
- The work is **intentionally useless** – its only purpose is to prove that a specific amount of computational work was performed
- Verification is cheap and fast, but performing the work is expensive

### Three Purposes of Proof of Work

1. **Rate Limiting**
   - Prevents blocks from being added too quickly
   - Ensures blocks have time to propagate across the network before the next block appears

2. **Skin in the Game**
   - Participants must invest resources before participating
   - The more invested, the more incentive to keep the system stable
   - Aligns individual incentives with system health

3. **Inclusiveness/Permissionlessness**
   - **Original Intent**: Anyone could join and participate without asking permission
   - **Reality**: This failed in practice – mining now requires specialized hardware, significant capital, and access to cheap electricity
   - Inclusiveness "went straight out the window" as mining became industrialized

### Criticisms of Proof of Work

- **Energy Waste**: Converted into a major environmental concern
- **Why Not Useful Work?**
  - Everyone agrees this would be better
  - **Problem**: Who defines "useful"? Who judges it?
  - Creates circular problems requiring committees and judges
  - No cryptographic primitive has succeeded in distinguishing useful from useless work
- **Economic Reality**: Bitcoin essentially converts wasted power into money – one of the most inefficient ways to create currency
- **Climate Impact**: Described as "a climate disaster of a way to make money"
- **Alternatives Exist**: Proof of Stake and other mechanisms now available; no new cryptocurrency should use Proof of Work

---

## Bitcoin Scripts and Smart Contracts

### Bitcoin Scripts: The Foundation
- Even original Bitcoin supported attaching small programs (scripts) to coins
- Scripts determine **who has the right to spend a coin** under what conditions

### How Scripts Work
1. When someone wants to spend a coin with an attached script:
   - Proposed transaction goes into a **virtual computer**
   - Script runs on the transaction as input
   - Output: **Yes** (authorized) or **No** (not authorized)

### Example: Multi-Signature Wallets
- **Use Case**: Joint organizational wallet requiring multiple approvals
- **Implementation**: Script with 3 public keys requiring 2 valid signatures
- Script checks each signature against its corresponding key
- Counts valid signatures and compares to threshold (≥2)
- Provides security against single-signer misbehavior

### Script Limitations in Bitcoin

1. **Determinism Required**
   - All instructions must have one and only one possible answer
   - Cannot use standard processor instruction sets (contain non-determinism)

2. **No External Inputs**
   - Scripts can only access: the proposed transaction + existing blockchain data
   - Cannot access websites or external world information
   - External data would violate determinism (different parties might see different data)

3. **No Loops (Bitcoin specific)**
   - Control flow allowed, but only forward branches
   - **Reason**: Prevents non-termination
   - All miners must re-run scripts to verify blocks – infinite loops would create denial-of-service vulnerabilities
   - Even terminating but long-running scripts cause resource consumption problems

### Ethereum's Innovation: Smart Contracts
- Relaxed the "no loops" restriction
- Introduced **Gas**: An execution quota limiting virtual CPU cycles
- Scripts can loop, but run out of gas and become invalid if they exceed limits
- Still cannot solve determinism or no-external-inputs problems
- Result: **Turing-complete computation** on the blockchain

---

## Decentralized Finance (DeFi)

Smart contracts enabled a range of financial applications:

### Types of DeFi Applications

- **Alternative Currencies**: Various digital coins with different philosophies and rules (some more legitimate than others)
- **Digital Investment Mechanisms**:
  - **ICOs (Initial Coin Offerings)**: Attempted all-digital substitute for IPOs
  - **NFTs (Non-Fungible Tokens)**: Tradable digital tokens representing anything (often just images)
- **Decentralized Exchanges**
- **Automated Market Makers (AMMs)**

### Automated Market Makers: How They Work
- Smart contract holds **two pools of different currencies** (or cryptocurrencies)
- Users request exchanges: trade currency A for currency B (or vice versa)
- **Algorithmic Pricing**: Exchange rate adjusts automatically based on supply and demand
  - High demand for B → B becomes more expensive relative to A
  - High demand for A → A becomes more expensive relative to B
- **Arbitrage Incentive**: If any AMM is mispriced, traders profit by correcting it
- Result: Decentralized price discovery without central authority

---

## Decentralized Autonomous Organizations (DAOs)

### The Vision
- All-digital, all-decentralized equivalent of traditional organizations (corporations, nonprofits, etc.)
- **Constitution in Code**: Formation rules, governance rules, operational rules encoded in smart contracts
- The entire organization "lives on the blockchain"

### Promised Benefits

1. **Automatic, Fair, Transparent Enforcement**
   - Rules execute exactly as coded
   - No human discretion or bias in enforcement

2. **Transparency**
   - Everything on the blockchain is public
   - Anyone can inspect the code and understand the rules
   - Immutable record everyone agrees upon

3. **"Code is Law"**
   - Ultimate embodiment of Lawrence Lessig's principle
   - Whatever the code says, happens – that IS the law for the organization

### Problems and Limitations

#### 1. Bug Vulnerabilities
- Code bugs become legal bugs
- Once deployed and funded, changing the code is difficult or impossible
- Security bugs can be exploited

#### 2. Upgrade Dilemmas
- **Upgrade Mechanisms**: Added complexity to allow bug fixes
- **The Backdoor Problem**: Who controls upgrade keys?
  - Can be used for legitimate fixes
  - Can be used for selfish exploitation
- **Recentralization**: Often a small development team controls upgrade keys, reintroducing centralization

#### 3. Hidden Centralization
- Many "decentralized" projects are actually controlled by very few parties
- Small groups often control:
  - Mining power
  - Upgrade authority
  - Governance decisions

---

## Case Study: "The DAO" Hack (2016)

### Background
- A specific DAO (just called "The DAO") for crowdfunding projects on Ethereum
- Became enormously popular – accumulated a significant fraction of all Ethereum's value

### The Attack
- Anonymous hacker discovered a **recursion bug** in the code
- Began exploiting it to exfiltrate funds to a private mirror DAO
- 30-day lockout prevented immediate theft, but extraction was ongoing

### The Dilemma
Two philosophical camps emerged:

**"Code is Law" Purists**:
- The attacker was exploiting code anyone could have inspected
- Nothing technically "wrong" was being done
- This is how the system is supposed to work

**Pragmatists**:
- Investors didn't want to lose their money
- If The DAO failed, all of Ethereum might collapse with it

### Resolution: "Too Big to Fail"
- **Main Ethereum developers** decided to intervene
- Modified Ethereum's core protocol to:
  - Claw back the stolen funds
  - Cancel The DAO
  - Refund all investors
- First blockchain example of **"too big to fail"** intervention
- Paralleled to real-world bailouts (e.g., Credit Suisse in Switzerland)

### The Fork: Ethereum Classic (ETC)
- A vocal minority refused to accept the intervention
- Forked their own version of Ethereum: **Ethereum Classic**
- Maintained the original chain where the hack "succeeded"
- Represented philosophical opposition to too-big-to-fail logic
- Still exists today

---

## Key Takeaways

1. **Idealism vs. Reality**: Blockchain technologies emerged with democratic, inclusive ideals but often evolved into centralized, exclusive systems

2. **Proof of Work Trade-offs**: Elegant technical solution with serious practical and environmental costs

3. **Smart Contracts**: Powerful but limited by determinism requirements and no-external-input constraints

4. **"Code is Law" Tension**: When code contains bugs, the philosophy conflicts with human expectations of fairness

5. **Governance Challenges**: DAOs face the same fundamental problems as traditional organizations – just in different forms

6. **Too Big to Fail**: Even "decentralized" systems can reach a scale where intervention becomes necessary, undermining core principles

---

## Course Context

This lecture continues the course's exploration of how technology intersects with democratic principles:
- **Influence and Power**: Who controls blockchain systems? (miners, developers, early investors)
- **Inclusiveness**: Permissionless ideals often fail in practice
- **Transparency vs. Complexity**: Code is public, but understanding it requires expertise
- **Democratic Governance**: How do communities resolve fundamental disagreements? (forks)

---

*Note: Related assigned readings provide deeper analysis of voting behavior in liquid democracy experiments and algorithmic governance frameworks.*
