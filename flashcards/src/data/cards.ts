export interface Card {
  id: number;
  front: string;
  back: string;
  week: string;
}

export const cards: Card[] = [
  // Week 1 & 2
  { id: 1, front: "OLIVER", back: "Licklider's predicted digital assistant that knows your preferences and helps filter information — today's algorithms and AI bots.", week: "Week 1 & 2" },
  { id: 2, front: "Gossip Protocol", back: "Network communication where computers call each other and \"copy\" messages, spreading information like rumors in a school.", week: "Week 1 & 2" },
  { id: 3, front: "The Digital Divide", back: "Licklider's warning: If only rich people have computers, will this power be a privilege for a few, or a right for everyone?", week: "Week 1 & 2" },
  { id: 4, front: "Usenet", back: "The \"grandfather\" of Reddit and Twitter — a global network (1979) where anyone could post a message for the world to see.", week: "Week 1 & 2" },
  { id: 5, front: "Signal-to-Noise Collapse", back: "When spam and junk overwhelm real conversations, making it too hard to find valuable content.", week: "Week 1 & 2" },
  { id: 6, front: "Dahl's 5 Criteria", back: "Rules for democracy: Effective Participation, Voting Equality, Enlightened Understanding, Control of Agenda, Inclusiveness.", week: "Week 1 & 2" },

  // Week 3
  { id: 7, front: "Power Laws", back: "Pattern where a tiny number of people get almost all the attention/resources — \"the rich get richer.\"", week: "Week 3" },
  { id: 8, front: "Million Follower Fallacy", back: "The assumption that more followers = more influence. Proven wrong: top lists for followers, retweets, and mentions have almost no overlap.", week: "Week 3" },
  { id: 9, front: "PageRank", back: "Google's algorithm treating links as votes. A page is important if important pages link to it (recursive importance).", week: "Week 3" },
  { id: 10, front: "Random Surfer / UBI", back: "PageRank solution to \"rank sinks\" — imagines a surfer who occasionally jumps randomly, giving every page a baseline chance.", week: "Week 3" },
  { id: 11, front: "Filter Bubbles", back: "Personalized views that show only what you already agree with, created by customized algorithms.", week: "Week 3" },
  { id: 12, front: "Google Bombing", back: "Coordinated linking to make a specific phrase return a specific (often embarrassing) result in search.", week: "Week 3" },
  { id: 13, front: "The Streisand Effect", back: "Trying to censor something backfires by drawing more attention to it.", week: "Week 3" },
  { id: 14, front: "r > g (Piketty)", back: "When return on capital exceeds economic growth, wealth concentrates at the top. Those who own get richer faster than those who work.", week: "Week 3" },

  // Week 4
  { id: 15, front: "Peer Review", back: "Independent experts evaluate scientific ideas before publication — the original trust algorithm.", week: "Week 4" },
  { id: 16, front: "h-index", back: "A researcher has index h if they have published h papers each cited at least h times. Balances quantity with quality.", week: "Week 4" },
  { id: 17, front: "Goodhart's Law", back: "\"When a measure becomes a target, it ceases to be a good measure.\" Explains gaming of metrics.", week: "Week 4" },
  { id: 18, front: "Citation Rings", back: "Groups agreeing to cite each other regardless of relevance to artificially inflate h-indices.", week: "Week 4" },
  { id: 19, front: "Black Hat SEO", back: "Unethical tricks to fool search algorithms: cloaking, link farms, invisible text, Google bombing.", week: "Week 4" },
  { id: 20, front: "SEME", back: "Search Engine Manipulation Effect — biased rankings can shift undecided voters by 20%+ invisibly.", week: "Week 4" },

  // Week 5
  { id: 21, front: "Plurality Voting", back: "\"First Past the Post\" — everyone gets one vote, most votes wins. Causes vote splitting and two-party systems.", week: "Week 5" },
  { id: 22, front: "Duverger's Law", back: "Vote splitting mathematically forces a rigid two-party system under plurality voting.", week: "Week 5" },
  { id: 23, front: "Instant Runoff (IRV)", back: "Voters rank candidates. Lowest vote-getter eliminated, their votes transfer to next preference. Repeat until winner.", week: "Week 5" },
  { id: 24, front: "Condorcet Winner", back: "The candidate who beats every other candidate in head-to-head matchups — the \"consensus candidate.\"", week: "Week 5" },
  { id: 25, front: "STV", back: "Single Transferable Vote: ranked voting with quota, surplus/eliminated vote transfers. Enables proportional representation.", week: "Week 5" },
  { id: 26, front: "Arrow's Impossibility Theorem", back: "No voting system is perfect. Every system has some flaw — democracy is choosing the least bad trade-offs.", week: "Week 5" },
  { id: 27, front: "Droop Quota", back: "(Total Votes / (Seats + 1)) + 1 — the smallest number such that no more candidates than seats can reach it.", week: "Week 5" },

  // Week 6
  { id: 28, front: "Proof of Work", back: "Miners solve useless puzzles to secure blockchain. Creates \"skin in the game\" but wastes energy and centralizes.", week: "Week 6" },
  { id: 29, front: "Double Spend Problem", back: "The risk of spending the same digital money twice — solved by blockchain's shared transaction history.", week: "Week 6" },
  { id: 30, front: "Smart Contracts", back: "Programs on Ethereum that run automatically on everyone's machine. \"Code is Law.\"", week: "Week 6" },
  { id: 31, front: "DAO", back: "Decentralized Autonomous Organization — run entirely by code, promising transparency and automation.", week: "Week 6" },
  { id: 32, front: "The DAO Hack (2016)", back: "$250M drained via bug. Ethereum developers forced a hard fork to reverse it, splitting into ETH and Ethereum Classic.", week: "Week 6" },
  { id: 33, front: "Token-Weighted Voting", back: "Blockchain voting where 1 Dollar = 1 Vote. A plutocracy, not a democracy.", week: "Week 6" },

  // Week 7 & 8
  { id: 34, front: "Liquid Democracy", back: "Hybrid system: vote directly on topics you understand, delegate to trusted experts on others. Revocable anytime.", week: "Week 7 & 8" },
  { id: 35, front: "Super-Voter Problem", back: "In liquid democracy, everyone delegating to one celebrity creates an \"accidental dictator.\"", week: "Week 7 & 8" },
  { id: 36, front: "Viscous Democracy", back: "Solution to delegation cycles: lose a fraction of power at each hop, so loops decay naturally.", week: "Week 7 & 8" },
  { id: 37, front: "Prediction Markets", back: "Using money to aggregate information. Contract price reflects probability of event occurring.", week: "Week 7 & 8" },
  { id: 38, front: "Quadratic Voting", back: "Vote cost increases quadratically: 1 vote = 1 credit, 2 votes = 4 credits, 10 votes = 100 credits.", week: "Week 7 & 8" },
  { id: 39, front: "Deliberative Polling", back: "Random sample + balanced information + structured discussion → reveals what people would think if informed.", week: "Week 7 & 8" },

  // Week 9
  { id: 40, front: "Kleroteria", back: "Ancient Athenian lottery device for randomly selecting magistrates — origin of the word \"lottery.\"", week: "Week 9" },
  { id: 41, front: "Venetian Doge Election", back: "10-stage process alternating random selection and deliberation to prevent any faction from controlling the outcome.", week: "Week 9" },
  { id: 42, front: "Risk-Limiting Audits", back: "Statistical method to verify elections: randomly sample ballots, compare to official results using statistical math.", week: "Week 9" },
  { id: 43, front: "Sybil Attack", back: "One actor creates many fake identities to subvert systems assuming \"one person, one vote.\"", week: "Week 9" },
  { id: 44, front: "Social Bots", back: "Automated accounts pretending to be human — can manipulate politics, move markets, manufacture consensus.", week: "Week 9" },

  // Week 10
  { id: 45, front: "Proof of Personhood", back: "Verifying you are a unique human without revealing who you are. Goal: non-disposable, unique, private identity.", week: "Week 10" },
  { id: 46, front: "Pseudonym Parties", back: "Physical synchronous attendance at the same time worldwide — your one body can't be in 1,000 places at once.", week: "Week 10" },
  { id: 47, front: "Web of Trust", back: "Users vouch for new users (like PGP). Fails because attackers can collude and create \"Sybil regions.\"", week: "Week 10" },
  { id: 48, front: "Aadhaar", back: "India's biometric ID system covering 1B+ people. Hard to fake but enables perfect state surveillance.", week: "Week 10" },
  { id: 49, front: "Idena (Flip Puzzles)", back: "Synchronous online puzzles (narrative logic) everyone solves at once — can't mentally solve 10 at the same time.", week: "Week 10" },

  // Week 11
  { id: 50, front: "Self-Sovereign Identity (SSI)", back: "You hold your own credentials in a digital wallet. No central authority can revoke your identity.", week: "Week 11" },
  { id: 51, front: "Zero-Knowledge Proofs", back: "Prove something (e.g., \"I'm over 18\") without revealing the underlying data (your birthday).", week: "Week 11" },
  { id: 52, front: "Tor (Onion Routing)", back: "Three-hop encryption: Node 1 sees who you are, Node 3 sees where you go, neither sees both. Weak to traffic analysis.", week: "Week 11" },
  { id: 53, front: "Mix Nets", back: "Collect messages in batch, cryptographically shuffle like a deck of cards, send in random order. High latency but strong privacy.", week: "Week 11" },
  { id: 54, front: "4chan Paradox", back: "Radical anonymity + extreme ephemerality = hyper-evolutionary meme culture, but drifts toward chaos and toxicity.", week: "Week 11" },

  // Week 12
  { id: 55, front: "Radicalization Pipeline", back: "YouTube algorithm pathway: IDW → Alt-lite → Alt-right. 40% of Alt-right commenters came from milder communities.", week: "Week 12" },
  { id: 56, front: "Information Gerrymandering", back: "Organizing communication networks to give one side unfair advantage — echo chambers beat scattered opponents.", week: "Week 12" },
  { id: 57, front: "Zealot Bots", back: "Automated accounts that never change their minds, placed strategically to sway entire networks.", week: "Week 12" },
  { id: 58, front: "i-Voting", back: "Internet voting. Slow adoption, mainly useful for expatriates. Security vs. convenience trade-off.", week: "Week 12" },
];

export function shuffleCards(cards: Card[]): Card[] {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
