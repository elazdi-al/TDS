# Week 11: Identity and Anonymity

## Introduction
This lecture explores the tension between **online identity** and **anonymity**, examining technologies that support each and potential ways to balance them (e.g., "Accountable Anonymity").

## Identity Technologies
Mechanisms used to establish or prove identity online.

### 1. Weak Proxies
*   **IP Addresses & MAC Addresses**: Provide a weak form of identification but are not strictly tied to a real person by default.

### 2. Strong Identity Checking
*   **KYC (Know Your Customer)**: Used in financial systems; requires showing ID cards to cameras.
*   **Biometrics**:
    *   **Aadhaar (India)**: Massive biometric ID system.
    *   **Worldcoin**: A blockchain startup using "The Orb" to scan irises for a global biometric ID.

### 3. Social Trust Networks
*   **PGP (Pretty Good Privacy)**: Uses "web of trust" and key signing parties to verify identities.

### 4. Self-Sovereign Identity (SSI)
*   **Concept**: A digital wallet holding "identity attributes" (e.g., age, degree, citizenship) signed by authorities. Users share *only* the specific attributes required for a transaction (e.g., proving age > 18 without revealing name or exact birthdate).
*   **Pros**: Enhances privacy by minimizing data disclosure (Selective Disclosure).
*   **Cons**:
    *   **Service Denial**: Services often demand extensive data (user choice becomes "take it or leave it").
    *   **Correlation**: Revealing even a few attributes limits true anonymity.

---

## Anonymity Technologies
Tools designed to hide user identity and activity.

### 1. Weak/Natural Anonymity
*   **Random MAC Addresses**: Devices often use random MACs when scanning for networks to prevent tracking.
*   **Voice Obfuscation**: Hiding voice/face in media.
*   **Public Networks**: Using open Wi-Fi (e.g., cafes) to mask location/identity.

### 2. VPNs (Virtual Private Networks)
*   **Mechanism**: A single-hop relay. Traffic goes Client $\to$ VPN $\to$ Server.
*   **Pros**: Hides IP from destination; widely used for bypassing geo-restrictions.
*   **Cons**: **Single point of failure/trust**. The VPN provider sees both the user and the destination.

### 3. Apple Private Relay
*   **Mechanism**: Two-hop relay.
    *   Hop 1 (Apple): Sees IP (Who you are) but not destination.
    *   Hop 2 (Partner): Sees destination (Where you go) but not IP.
*   **Pros**: Better privacy than standard VPN; no single entity sees the full picture.
*   **Limit**: Keeps user in same geographic region (no geo-spoofing).

### 4. Tor (The Onion Router)
*   **Mechanism**: Three-hop circuit (Entry $\to$ Middle $\to$ Exit).
*   **Onion Routing**: Layers of encryption pealed off at each hop.
*   **Hidden Services (Dark Web)**: Servers can also be anonymous. Connection involves 6 hops total (3 for client + 3 for server).
*   **Weakness**: Susceptible to **Traffic Analysis**. A global adversary watching both ends (Client ISP + Server ISP) can correlate packet timing and patterns to de-anonymize users.

---

## Provable / Unconditional Anonymity
Protocols offering stronger theoretical guarantees than Tor, often at the cost of speed/latency.

### 1. Cascade Mix Nets (David Chaum)
*   **Mechanism**: Messages are collected in a **batch**, cryptographically shuffled (permuted) by a series of mix servers, and output in random order.
*   **Proof of Shuffle**: Mix servers use zero-knowledge proofs to show they mixed correctly without revealing the permutation.
*   **Pros**: Resists global adversaries (if at least one server is honest).
*   **Cons**: High latency (must wait for batch to fill); unsuitable for web browsing.
*   **Use Case**: **Electronic Voting** (shuffling votes to break the link to voters).

### 2. Dining Cryptographers (DC-Nets)
*   **Analogy**: Three cryptographers at dinner; one pays anonymously, or the NSA paid. They need to reveal *if* one of them paid without revealing *who*.
*   **Mechanism**:
    *   Pairs share secret random "coin flips" (0 or 1).
    *   Each participant XORs the coins they see.
    *   The "Payer" inverts their result (XORs with 1).
    *   The global XOR of all results reveals the message bit (1 if someone paid, 0 otherwise).
*   **Pros**: **Information-Theoretic Anonymity** (mathematically unbreakable, not just computational). Parallelizable.
*   **Cons**: Susceptible to **Jamming** (a malicious user can ruin the transmission anonymously).

---

## Balancing Identity & Anonymity
"Accountable Anonymity" aims to provide privacy while preventing abuse.

*   **Anonymous Credentials**: Cryptographic tokens proving a property (e.g., "Member of group X", "Authorized Student") without revealing individual identity.
*   **Anonymous Reputation**: Systems (e.g., **AnonRep**) where users build reputation pseudonymously. Misbehavior costs reputation, discouraging abuse without needing real names.
*   **Anonymous Cryptocurrency**: Digital cash systems like **Zcash** (ZeroCash) allowing private value transfer.
