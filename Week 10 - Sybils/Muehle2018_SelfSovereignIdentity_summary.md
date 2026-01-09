# Summary: A survey on essential components of a self-sovereign identity

**Authors:** Alexander Mühle, Andreas Grüner, Tatiana Gayvoronskaya, Christoph Meinel  
**Journal:** Computer Science Review 30 (2018) 80–86  
**Date:** 2018

## 1. Introduction
The paper provides a comprehensive survey of **Self-Sovereign Identity (SSI)**, a user-centric identity management concept enabled by blockchain technology. Unlike traditional models where identity providers (e.g., Facebook, Google) or service providers control identities, SSI allows individuals to fully own and manage their digital identities.

The study is structured around four essential components of SSI architecture:
1.  **Identification**
2.  **Authentication**
3.  **Verifiable Claims**
4.  **Storage**

## 2. Self-Sovereign Identity Architecture
The core philosophy of SSI is shifted from service-centric to **user-centric**.
-   **Actors:**
    -   **User (Holder/Subject):** Controls the identity and claims.
    -   **Claim Issuer:** Attests to attributes of the user (issues claims).
    -   **Relying Party (Verifier):** Verifies the user's identity and claims.
    -   **Identifier Registry:** Usually a blockchain acting as a decentralized root of trust, replacing the traditional Registration Authority.

-   **Models:**
    -   **Identifier Registry Model:** The blockchain maintains the mapping between an identifier and an authentication method (e.g., public key). Claims are stored off-chain.
    -   **Claim Registry Model:** An extension where the blockchain also stores cryptographic fingerprints (hashes) of claims to ensure integrity and facilitate revocation.

## 3. Identification
The paper discusses the challenge of creating identifiers that represent a user in a decentralized system, framed by **Zooko’s Triangle**. Zooko’s Triangle posits that it is difficult to achieve three properties simultaneously for names:
1.  **Decentralized**
2.  **Secure** (unique/collision-free)
3.  **Human-readable**

### Evolution of Identifiers:
-   **UUIDs:** Decentralized and secure, but not human-readable.
-   **Public Keys:** Secure and self-authenticating, but not human-readable.
-   **X.509/DNS:** Human-readable and secure, but centralized (rely on CAs or ICANN).
-   **Blockchain Name Systems:** Systems like **Namecoin** and **Ethereum Name Service (ENS)** "square" Zooko's triangle by using a distributed ledger to guarantee uniqueness for human-readable names without a central authority.

### Decentralized Identifiers (DIDs):
The W3C is standardizing **DIDs**, a new layer of identifiers. A DID document (stored on a blockchain or distributed ledger) contains the public keys and service endpoints necessary to interact with the identity.
-   **Format:** `did:method:specific-idstring`
-   This allows for interoperability across different blockchains (e.g., uPort, Sovrin, Bitcoin) via a universal resolver.

## 4. Authentication
Authentication in SSI typically relies on **Asymmetric Cryptography** (Public/Private Key pairs).
-   **Mechanism:** The public key is stored on the blockchain (linked to the identifier). The user proves identity by signing a challenge with their private key (Zero Knowledge Proof properties can also be used).
-   **Key Management:**
    -   **Storage:** Keys can be stored on user devices (smartphones are common) or as mnemonic phrases (12 words) for recovery.
    -   **Recovery:** Loss of private keys is a critical issue. Solutions include:
        -   **Social Recovery:** Using a quorum of delegates (e.g., friends, family) to vote on replacing a lost key (used by uPort).
        -   **Hierarchical keys:** Separating authentication from authorization, allowing a master key or delegates to rotate the authentication key.
-   **Biometrics:** Direct use is risky due to privacy; usually combined with local hardware or external services using cryptographic hashes.

## 5. Verifiable Claims
Verifiable claims are the core value carriers in SSI, functioning similarly to physical credentials (passports, degrees).
-   **Definitions:**
    -   **Claim:** A statement about a subject.
    -   **Credential:** A set of claims with metadata.
    -   **Verifiable Claim:** A claim signed by an issuer that can be cryptographically verified.
-   **Approaches:**
    -   **uPort/ERC780:** Uses an on-chain registry to store hashes of claims. This allows for timestamping and easier revocation/updates but potentially leaks metadata about the existence of claims.
    -   **W3C Data Model:** Does not strictly require a claim registry. The claim contains the identifier and is signed by the issuer. This is more privacy-preserving (no on-chain footprint for claims) but loses the immediate timestamping/revocation benefits of a registry.
-   **Trust Model:** Relying parties trust the **Issuer**, not the blockchain itself. The blockchain only provides the infrastructure to verify the issuer's key and the user's ownership of the identifier.

## 6. Storage
-   **Public (On-chain):** Minimal data required for the system to function. Includes identifiers, public keys, and service endpoints. Some public profile data (e.g., social media handles, avatars) can be stored here if the user desires.
-   **Private (Off-chain):** Most sensitive user data and claims are stored off-chain to preserve privacy.
    -   **User Devices:** Stored locally on smartphones (e.g., SelfKey). High privacy but risk of data loss or theft.
    -   **Cloud/Decentralized Storage:** Encrypted backups on cloud services (Dropbox, Google Drive - used by Blockstack) or decentralized file systems like **IPFS** (used by uPort).

## 7. Conclusion
SSI represents a paradigm shift enabling users to control their digital identities without intermediaries. By leveraging blockchain for **Decentralized Public Key Infrastructure (DPKI)** and registries, SSI solves the "root of trust" problem. The architecture is modular, separating the identifier (anchored on-chain) from the claims (stored off-chain), ensuring a balance between trust, security, and privacy.
