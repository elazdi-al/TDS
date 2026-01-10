export interface Card {
  id: number;
  front: string;
  back: string;
  week: string;
}

export const controlSystemsCards: Card[] = [
  {
    id: 1,
    front: "What is the primary goal of Feedforward Control?",
    back: "To achieve **zero steady-state error** without relying solely on integral action (which can reduce stability). It adds a term $G^{-1}(0)$ to the input path.",
    week: "Feedforward"
  },
  {
    id: 2,
    front: "How does Feedforward Control differ from Feedback Control regarding stability?",
    back: "Feedforward control does not affect the closed-loop poles, so it generally **does not destabilize** the system, unlike feedback (especially integral) control.",
    week: "Feedforward"
  },
  {
    id: 3,
    front: "What is the fundamental constraint between Sensitivity ($S$) and Complementary Sensitivity ($T$)?",
    back: "$S(s) + T(s) = 1$. This implies a trade-off: improving noise rejection ($T \\approx 0$) degrades tracking performance ($T \\approx 1$), and vice versa.",
    week: "Loop Shaping"
  },
  {
    id: 4,
    front: "What is the purpose of a Lead Compensator?",
    back: "To **increase the phase margin** near the crossover frequency, thereby improving damping and reducing overshoot. It effectively acts like a PD controller.",
    week: "Loop Shaping"
  },
  {
    id: 5,
    front: "What is the purpose of a Lag Compensator?",
    back: "To **increase low-frequency gain** (reducing steady-state error) without significantly affecting the transient response (phase) at the crossover frequency. It acts like a PI controller.",
    week: "Loop Shaping"
  },
  {
    id: 6,
    front: "What does the LQR (Linear Quadratic Regulator) minimize?",
    back: "It minimizes a cost function $J = \\int_0^\\infty (x^T Q x + u^T R u) dt$, balancing **state deviation** (energy) against **control effort** (input energy).",
    week: "LQR"
  },
  {
    id: 7,
    front: "How is the optimal LQR gain $K$ computed?",
    back: "By solving the **Algebraic Riccati Equation (ARE)** for the matrix $P$, then setting $K = R^{-1}B^T P$.",
    week: "LQR"
  },
  {
    id: 8,
    front: "What is 'Derivative Kick' and how is it avoided?",
    back: "Large spikes in the control signal when the setpoint changes abruptly. It is avoided by applying the derivative action only to the **feedback signal (output)**, not the error.",
    week: "Week 2 - PID"
  },
  {
    id: 9,
    front: "What is Integrator Windup and how is it prevented?",
    back: "When the integrator accumulates a large error during **actuator saturation**. It is prevented by 'anti-windup' mechanisms (e.g., freezing the integrator when saturated).",
    week: "PID Impl"
  },
  {
    id: 10,
    front: "What is the Separation Principle?",
    back: "It states that the **controller** (state feedback) and the **observer** (state estimator) can be designed **independently**. The combined closed-loop poles are the union of the controller and observer poles.",
    week: "Week 12 - Estimators"
  },
  {
    id: 11,
    front: "How fast should Observer poles be relative to Controller poles?",
    back: "A rule of thumb is that observer poles should be **2-6 times faster** (further left in LHP) than controller poles to ensure the estimate converges before the controller acts.",
    week: "Week 12 - Estimators"
  },
  {
    id: 12,
    front: "What is the Nyquist Stability Criterion formula?",
    back: "$Z = N + P$, where $Z$ is unstable closed-loop poles (must be 0), $N$ is CW encirclements of -1, and $P$ is unstable open-loop poles.",
    week: "Week 5 - Stability"
  },
  {
    id: 13,
    front: "What is the 'Waterbed Effect' in control systems?",
    back: "Bode's Integral Formula implies that if sensitivity is reduced (improved) in one frequency range, it must necessarily **increase (degrade)** in another range for unstable open-loop systems.",
    week: "Week 7 - Robustness"
  },
  {
    id: 14,
    front: "What does the Gain Margin represent?",
    back: "The amount the system gain can be increased before the system becomes unstable (specifically, when the phase is -180 degrees).",
    week: "Week 7 - Robustness"
  },
  {
    id: 15,
    front: "Under what condition can we arbitrarily place closed-loop poles?",
    back: "If and only if the system is fully **controllable**.",
    week: "State Feedback"
  },
  {
    id: 16,
    front: "What is the condition for Observability?",
    back: "The observability matrix $\\mathcal{O} = [C^T, (CA)^T, ..., (CA^{n-1})^T]^T$ must have full rank ($n$).",
    week: "Week 12 - Estimators"
  },
  {
    id: 17,
    front: "Why do we use a Phase Margin of 30-60 degrees?",
    back: "To ensure good **damping** (limiting overshoot) and robustness against time delays or phase variation.",
    week: "Loop Shaping"
  },
  {
    id: 18,
    front: "How does System Type affect Steady-State Error?",
    back: "The **Type** (number of integrators) determines tracking ability. Type 0 has error for step; Type 1 zero error for step but error for ramp; Type 2 zero error for ramp.",
    week: "Week 7 - Robustness"
  },
  {
    id: 19,
    front: "What does a magnitude of -20 dB/decade slope correspond to?",
    back: "A single **pole** (or integrator) in the transfer function.",
    week: "Week 1 - Freq Response"
  },
  {
    id: 20,
    front: "What is the benefit of State-Space design over Frequency Domain?",
    back: "It handles **MIMO** (Multiple Input Multiple Output) systems naturally and allows for optimal control and arbitrary pole placement.",
    week: "State Feedback"
  },
  {
    id: 21,
    front: "What is the drawback of High Gain Feedback?",
    back: "While it reduces steady-state error and improves disturbance rejection, it increases sensitivity to **measurement noise** and can lead to instability if unmodeled dynamics are excited.",
    week: "Week 7 - Robustness"
  },
  {
    id: 22,
    front: "What is the role of the $D$ term in PID?",
    back: "It adds **damping** to the system, reducing overshoot and settling time, but can amplify high-frequency noise.",
    week: "Week 2 - PID"
  },
  {
    id: 23,
    front: "Frequency Response Definition",
    back: "The steady-state response of a system to a sinusoidal input $u(t) = \\sin(\\omega t)$, characterized by magnitude scaling and phase shift.",
    week: "Week 1 - Freq Response"
  },
  {
    id: 24,
    front: "What is a Non-Minimum Phase System?",
    back: "A system with zeros in the **Right Half Plane (RHP)**. It exhibits 'wrong way' initial behavior and extra phase lag.",
    week: "Week 1 - Freq Response"
  },
  {
    id: 25,
    front: "Bandwidth ($\\omega_{BW}$)",
    back: "The frequency range where the system gain is adequate (typically up to -3dB). It is inversely proportional to rise time/settling time.",
    week: "Week 1 - Freq Response"
  },
  {
    id: 26,
    front: "Effect of increasing $K_P$ (Proportional Gain)",
    back: "Reduces rise time and steady-state error, but **increases overshoot** and reduces stability margin.",
    week: "Week 2 - PID"
  },
  {
    id: 27,
    front: "Effect of increasing $K_I$ (Integral Gain)",
    back: "Eliminates steady-state error, but **increases overshoot** and settling time; can destabilize the system.",
    week: "Week 2 - PID"
  },
  {
    id: 28,
    front: "Why use a Filtered Derivative?",
    back: "Pure derivative action amplifies high-frequency noise. Filtering limits the gain at high frequencies to prevent this.",
    week: "Week 2 - PID"
  },
  {
    id: 29,
    front: "Ziegler-Nichols Tuning (Ultimate Gain)",
    back: "A heuristic method where $K_I$ and $K_D$ are zeroed, $K_P$ is increased until oscillation ($K_u$), and parameters are derived from $K_u$ and period $T_u$.",
    week: "Week 2 - PID"
  },
  {
    id: 30,
    front: "Nyquist Sampling Theorem",
    back: "For digital control, the sampling frequency $f_s$ must be at least twice the highest frequency component of the signal ($f_s > 2f_{max}$). Ideally 10-20x bandwidth.",
    week: "Week 2 - PID"
  },
  {
    id: 31,
    front: "BIBO Stability",
    back: "**Bounded Input, Bounded Output**. A system is BIBO stable if every bounded input produces a bounded output.",
    week: "Week 5 - Stability"
  },
  {
    id: 32,
    front: "Stability condition for Poles",
    back: "A continuous LTI system is stable if and only if **all poles** have strictly negative real parts (Left Half Plane).",
    week: "Week 5 - Stability"
  },
  {
    id: 33,
    front: "Simplified Nyquist Criterion",
    back: "If the open-loop system is stable ($P=0$), the closed-loop system is stable if and only if the Nyquist plot makes **zero encirclements** of -1 ($N=0$).",
    week: "Week 5 - Stability"
  },
  {
    id: 34,
    front: "Cauchy's Argument Principle",
    back: "A contour mapping $G(s)$ encircles the origin $N = Z - P$ times, relating winding number to poles and zeros inside the contour.",
    week: "Week 5 - Stability"
  },
  {
    id: 35,
    front: "Sensitivity Function $S(s)$",
    back: "$S(s) = \\frac{1}{1+L(s)}$. It dictates the system's ability to reject disturbances and robustness to model errors.",
    week: "Week 7 - Robustness"
  },
  {
    id: 36,
    front: "Complementary Sensitivity $T(s)$",
    back: "$T(s) = \\frac{L(s)}{1+L(s)}$. It dictates reference tracking performance and noise rejection at high frequencies.",
    week: "Week 7 - Robustness"
  },
  {
    id: 37,
    front: "Disturbance Rejection Rule",
    back: "Integrators in the **Controller** reject constant disturbances. Integrators in the Plant do not.",
    week: "Week 7 - Robustness"
  },
  {
    id: 38,
    front: "Relationship: Bandwidth vs Rise Time",
    back: "They are inversely related. Higher bandwidth allows faster signal changes, leading to a **shorter rise time**.",
    week: "Loop Shaping"
  },
  {
    id: 39,
    front: "Ideal Slope at Crossover",
    back: "A slope of **-20 dB/decade** at the crossover frequency is desired for a good Phase Margin (~90 degrees).",
    week: "Loop Shaping"
  },
  {
    id: 40,
    front: "Lead Compensator",
    back: "Adds positive phase (lead) to improve **Phase Margin** and damping. Increases bandwidth (faster response).",
    week: "Loop Shaping"
  },
  {
    id: 41,
    front: "Lag Compensator",
    back: "Increases low-frequency gain to reduce **Steady-State Error**, without significantly destabilizing phase at crossover.",
    week: "Loop Shaping"
  },
  {
    id: 42,
    front: "Controllability Matrix",
    back: "$\\mathcal{C} = [B, AB, A^2B, ..., A^{n-1}B]$. The system is controllable if this matrix has full rank ($n$).",
    week: "State Feedback"
  },
  {
    id: 43,
    front: "Observability Matrix",
    back: "$\\mathcal{O} = [C^T, (CA)^T, ..., (CA^{n-1})^T]^T$. The system is observable if this matrix has full rank ($n$).",
    week: "State Feedback"
  },
  {
    id: 44,
    front: "Ackermann's Formula",
    back: "A formula to compute the feedback gain vector $K$ that places poles at desired locations: $K = [0 ... 1]\\mathcal{C}^{-1}\\alpha(A)$.",
    week: "State Feedback"
  },
  {
    id: 45,
    front: "Reference Tracking Gain $\\bar{N}$",
    back: "A feedforward scalar applied to the reference $r$ to ensure unity steady-state gain: $\\bar{N} = \\frac{1}{C(B K - A)^{-1}B}$.",
    week: "State Feedback"
  },
  {
    id: 46,
    front: "Bryson's Rule",
    back: "A method for choosing LQR weights: normalize $Q$ and $R$ diagonal elements by the inverse square of the maximum acceptable value ($1/x_{max}^2$).",
    week: "LQR"
  },
  {
    id: 47,
    front: "Effect of large R in LQR",
    back: "A large $R$ penalizes control effort heavily, leading to **smaller inputs** and a **slower response**.",
    week: "LQR"
  },
  {
    id: 48,
    front: "Duality Principle",
    back: "The estimation problem for $(A,C)$ is mathematically equivalent to the control problem for $(A^T, C^T)$.",
    week: "Week 12 - Estimators"
  },
  {
    id: 49,
    front: "Estimator Error Dynamics",
    back: "Governed by $\\dot{e} = (A - LC)e$. The error converges to zero if eigenvalues of $(A-LC)$ are in the Left Half Plane.",
    week: "Week 12 - Estimators"
  },
  {
    id: 50,
    front: "Feedforward Law",
    back: "computes $u = G^{-1}(0)r$. It inverts the DC gain of the plant to achieve perfect steady-state tracking.",
    week: "Feedforward"
  }
];

export const machinesCards: Card[] = [
  {
    id: 101,
    front: "Relations fondamentales du Transformateur Idéal",
    back: "Rapport de transformation : $\\ddot{u} = \\frac{N_1}{N_2} = \\frac{U_1}{U_2} = -\\frac{I_2}{I_1}$.\nConservation de la puissance apparente : $S_1 = S_2$.\nImpédance ramenée au primaire : $Z'_2 = \\ddot{u}^2 Z_2$.",
    week: "Général"
  },
  {
    id: 102,
    front: "Qu'est-ce que l'Hypothèse de Kapp (Transformateur) ?",
    back: "Elle consiste à négliger le courant magnétisant ($I_0$) devant le courant de charge. Le schéma équivalent se réduit alors à une impédance de court-circuit en série : $Z_{cc} = R_{cc} + jX_{cc}$. Relation : $\\underline{U}_2' = \\underline{U}_1 - Z_{cc}\\underline{I}_1$.",
    week: "Général"
  },
  {
    id: 103,
    front: "Comment créer un champ magnétique tournant ?",
    back: "En disposant 3 bobines décalées de 120° dans l'espace et en les alimentant par un système de courants triphasés équilibrés (décalés de 120° dans le temps). L'amplitude résultante est constante ($1.5 B_{max}$) et tourne à la pulsation $\\omega$.",
    week: "Général"
  },
  {
    id: 104,
    front: "Quelles sont les deux conditions pour obtenir un couple moyen non nul ?",
    back: "1. Le stator et le rotor doivent avoir le **même nombre de paires de pôles** ($p$).\n2. Les champs magnétiques statorique et rotorique doivent être **synchrones** (tourner à la même vitesse).",
    week: "Général"
  },
  {
    id: 105,
    front: "Définition du Glissement $s$ (Machine Asynchrone)",
    back: "C'est l'écart relatif entre la vitesse du champ tournant (synchrisme $\\Omega_s$) et la vitesse mécanique du rotor ($\\Omega_m$) : $s = \\frac{\\Omega_s - \\Omega_m}{\\Omega_s}$. En fonctionnement moteur, $0 < s < 1$.",
    week: "Asynchrone"
  },
  {
    id: 106,
    front: "Que représente la résistance $\\frac{R'_r}{s}$ dans le schéma équivalent Asynchrone ?",
    back: "Elle modélise la puissance totale transmise au rotor. Elle est souvent décomposée en $R'_r$ (Pertes Joule Rotor) et $R'_r \\frac{1-s}{s}$ (Puissance Mécanique Utile).",
    week: "Asynchrone"
  },
  {
    id: 107,
    front: "Bilan de Puissance Rotorique (Asynchrone)",
    back: "Si $P_\\delta$ est la puissance transmise à l'entrefer :\n- Pertes Joule Rotor : $P_{jr} = s \\cdot P_\\delta$\n- Puissance Mécanique : $P_{mec} = (1-s) \\cdot P_\\delta$",
    week: "Asynchrone"
  },
  {
    id: 108,
    front: "Comportement du couple Asynchrone à faible glissement",
    back: "Près du synchronisme ($s \\to 0$), le couple est **proportionnel au glissement** ($T_{em} \\approx Ks$). C'est la zone de fonctionnement stable et usuelle.",
    week: "Asynchrone"
  },
  {
    id: 109,
    front: "De quoi dépend le Couple Maximal (Décrochage) d'une machine asynchrone ?",
    back: "Il est proportionnel au carré de la tension d'alimentation ($U^2$) et inversement proportionnel aux inductances de fuite. Il est **indépendant** de la résistance rotorique (qui n'influe que sur le glissement auquel ce max se produit).",
    week: "Asynchrone"
  },
  {
    id: 110,
    front: "Principe de la commande en $U/f$ constant",
    back: "En maintenant le rapport tension/fréquence constant, on maintient le flux magnétique constant. Cela permet de conserver le couple maximal constant sur toute la plage de vitesse (jusqu'au nominal).",
    week: "Asynchrone"
  },
  {
    id: 111,
    front: "Relation Vitesse-Fréquence (Machine Synchrone)",
    back: "$f = p \\cdot n$\n(ou $\\omega = p \\cdot \\Omega$)\nLa vitesse de rotation est rigoureusement fixée par la fréquence et le nombre de paires de pôles.",
    week: "Synchrone"
  },
  {
    id: 112,
    front: "Expression de la Tension Induite $U_i$ (Synchrone)",
    back: "$U_i = k \\cdot I_f \\cdot \\Omega$\nElle est proportionnelle au courant d'excitation $I_f$ (flux) et à la vitesse de rotation $\\Omega$.",
    week: "Synchrone"
  },
  {
    id: 113,
    front: "Schéma équivalent Synchrone (Pôles Lisses)",
    back: "Modèle monophasé simple : $\\underline{U} = R \\underline{I} + jX_d \\underline{I} + \\underline{U}_i$.\n$X_d$ est la réactance synchrone.",
    week: "Synchrone"
  },
  {
    id: 114,
    front: "Couple Synchrone : Pôles Lisses vs Saillants",
    back: "**Lisses** : $T_{em} \\propto \\sin \\delta$ (Uniquement couple synchrone).\n**Saillants** : $T_{em} \\propto \\sin \\delta + K \\sin 2\\delta$. Le terme en $\\sin 2\\delta$ est le **couple réluctant**, dû à l'anisotropie ($X_d \\neq X_q$).",
    week: "Synchrone"
  },
  {
    id: 115,
    front: "Limite de Stabilité Statique (Machine Synchrone)",
    back: "Le décrochage a lieu pour un angle de charge $\\delta = 90^\\circ$ (pour pôles lisses). Pour un fonctionnement stable en moteur, il faut $0 < \\delta < 90^\\circ$.",
    week: "Synchrone"
  },
  {
    id: 116,
    front: "Quelles sont les conditions de synchronisation au réseau ?",
    back: "1. Même Fréquence.\n2. Même Amplitude de tension.\n3. Même Phase.\n4. Même Ordre de succession des phases.",
    week: "Synchrone"
  },
  {
    id: 117,
    front: "Fonctionnement en Compensateur Synchrone",
    back: "En jouant sur l'excitation $I_f$ :\n- **Surexcitation** : La machine fournit du réactif $Q$ (comportement capacitif).\n- **Sous-excitation** : La machine consomme du réactif $Q$ (comportement inductif).",
    week: "Synchrone"
  },
  {
    id: 118,
    front: "Quel est le rôle du Collecteur dans une MCC ?",
    back: "Il agit comme un **onduleur mécanique**. Il inverse le sens du courant dans les conducteurs de l'induit au passage de la ligne neutre pour que le couple reste toujours orienté dans le même sens.",
    week: "MCC"
  },
  {
    id: 119,
    front: "Équations fondamentales de la MCC",
    back: "F.é.m : $U_i = k \\Phi \\Omega$\nCouple : $T_{em} = k \\Phi I$\nLoi des mailles (Moteur) : $U = RI + U_i$",
    week: "MCC"
  },
  {
    id: 120,
    front: "Caractéristiques du Moteur Série (MCC)",
    back: "Inducteur en série avec l'induit ($\\Phi \\propto I$).\n- Couple très élevé au démarrage ($T \\propto I^2$).\n- **Danger d'emballement à vide** ($\\Omega \\to \\infty$ si $I \\to 0$).",
    week: "MCC"
  },
  {
    id: 121,
    front: "Caractéristiques du Moteur Shunt (MCC)",
    back: "Inducteur en parallèle (Flux constant).\nVitesse stable, peu dépendante de la charge. Utilisé quand une vitesse constante est requise.",
    week: "MCC"
  },
  {
    id: 122,
    front: "Pourquoi limiter le courant de démarrage d'une MCC ?",
    back: "Au démarrage $\\Omega=0$ donc $U_i=0$. Le courant $I = U/R$ n'est limité que par la résistance d'induit (très faible). Il peut atteindre 10-20 fois $I_n$ et détruire la machine sans rhéostat ou tension progressive.",
    week: "MCC"
  },
  {
    id: 123,
    front: "Définition d'un Moteur Pas à Pas",
    back: "Moteur tournant par incréments angulaires discrets (pas) sous l'effet d'impulsions électriques programmées. Il permet un positionnement précis en boucle ouverte.",
    week: "Pas à Pas"
  },
  {
    id: 124,
    front: "Moteur Pas à Pas Réluctant",
    back: "Rotor en fer doux denté (pas d'aimants). Le couple provient de la minimisation de la réluctance. Pas de couple de maintien hors tension. Couple $\\propto I^2$.",
    week: "Pas à Pas"
  },
  {
    id: 125,
    front: "Moteur Pas à Pas Hybride",
    back: "Combine aimant permanent et rotor denté. Offre une haute résolution (ex: 200 pas/tour soit 1.8°) et un couple élevé (y compris couple de maintien).",
    week: "Pas à Pas"
  },
  {
    id: 126,
    front: "Modes de commande Pas à Pas",
    back: "**Pas entier** : Couple max.\n**Demi-pas** : Double la résolution, évite résonances.\n**Micropas** : Courants sinusoïdaux, résolution très fine, mouvement fluide et silencieux, mais couple réduit.",
    week: "Pas à Pas"
  },
  {
    id: 127,
    front: "Moteur Lavet",
    back: "Moteur pas à pas monophasé à aimant, typique de l'horlogerie (montres à quartz). Utilise des encoches pour définir le sens de rotation et les positions stables.",
    week: "Pas à Pas"
  },
  {
    id: 128,
    front: "Moteur Synchrone à Aimants Permanents (MSAP) vs Synchrone Bobiné",
    back: "Le rotor possède des aimants permanents au lieu d'un bobinage. Avantages : Pas de pertes rotor, pas de balais/bagues, densité de puissance élevée. Inconvénient : Coût des aimants, flux fixe.",
    week: "MSAP"
  },
  {
    id: 129,
    front: "Condition optimale de couple pour un MSAP",
    back: "Le couple est maximal ($3 k_\\Phi I$) lorsque le courant $I$ est **en phase** avec la force contre-électromotrice $U_i$ (angle $\\Psi=0$). Cela correspond à un champ statorique perpendiculaire au champ rotorique.",
    week: "MSAP"
  },
  {
    id: 130,
    front: "Qu'est-ce que le défluxage (Field Weakening) ?",
    back: "C'est une technique pour dépasser la vitesse nominale. On injecte un courant statorique négatif sur l'axe $d$ pour s'opposer au flux des aimants, réduisant ainsi la tension induite.",
    week: "MSAP"
  },
  {
    id: 131,
    front: "Différence BLDC vs PMSM",
    back: "**BLDC** : F.é.m trapézoïdale, courants en créneaux (commutation 120°), capteurs Hall.\n**PMSM** : F.é.m sinusoïdale, courants sinusoïdaux, contrôle vectoriel, encodeur, couple plus lisse.",
    week: "MSAP"
  },
  {
    id: 133,
    front: "Pourquoi le transport d'énergie se fait-il en Haute Tension ?",
    back: "À puissance constante ($S=UI$), augmenter $U$ permet de réduire $I$. Les pertes Joule ($P_J = RI^2$) diminuent donc avec le carré de la tension ($1/U^2$).",
    week: "Général"
  },
  {
    id: 134,
    front: "Que sont les Courants de Foucault et comment les réduire ?",
    back: "Des courants induits circulant dans la masse métallique du fer, créant de l'échauffement. On les réduit en utilisant des **tôles feuilletées** isolées les unes des autres.",
    week: "Général"
  },
  {
    id: 135,
    front: "Quelle est la différence entre Pertes Hystérésis et Pertes Foucault ?",
    back: "**Hystérésis** : Énergie perdue par la réorientation des domaines magnétiques (liée au matériau). **Foucault** : Courants induits (liée à la conductivité). Les deux forment les 'Pertes Fer'.",
    week: "Général"
  },
  {
    id: 136,
    front: "À quoi sert l'essai à vide d'un transformateur ?",
    back: "Il permet de mesurer les pertes fer et d'identifier les paramètres de la branche magnétisante ($R_{fer}$ et $X_m$), car le courant secondaire est nul.",
    week: "Général"
  },
  {
    id: 137,
    front: "À quoi sert l'essai en court-circuit d'un transformateur ?",
    back: "Il permet de mesurer les pertes Joule et d'identifier l'impédance de court-circuit série ($R_{cc}$ et $X_{cc}$), en négligeant la branche magnétisante.",
    week: "Général"
  },
  {
    id: 138,
    front: "Qu'est-ce qu'un Autotransformateur ?",
    back: "Un transformateur avec un seul enroulement et une prise intermédiaire. Il est plus économique (moins de cuivre) mais n'offre pas d'isolation galvanique entre primaire et secondaire.",
    week: "Général"
  },
  {
    id: 139,
    front: "Principe du démarrage Étoile-Triangle (Asynchrone)",
    back: "On alimente d'abord le stator en étoile (tension $\\div \\sqrt{3}$), ce qui divise le courant de démarrage par 3 (et le couple par 3). Puis on bascule en triangle pour la marche normale.",
    week: "Asynchrone"
  },
  {
    id: 140,
    front: "Conditions pour qu'une machine Asynchrone fonctionne en Génératrice",
    back: "Le rotor doit tourner plus vite que le champ tournant ($\\Omega_m > \\Omega_s$). Le glissement devient négatif ($s < 0$). Elle renvoie alors de la puissance active au réseau (mais consomme du réactif).",
    week: "Asynchrone"
  },
  {
    id: 141,
    front: "Pourquoi $X_d > X_q$ dans une machine synchrone à pôles saillants ?",
    back: "L'entrefer est plus petit sous les pôles (axe direct $d$) que dans l'espace interpolaire (axe en quadrature $q$). La réluctance est donc plus faible et l'inductance plus forte sur l'axe $d$.",
    week: "Synchrone"
  },
  {
    id: 142,
    front: "Quelles sont les 3 limites du Topogramme (Diagramme P-Q) d'une machine synchrone ?",
    back: "1. Limite thermique stator (courant max induit).\n2. Limite thermique rotor (courant max excitation).\n3. Limite de stabilité statique ($\\delta = 90^\\circ$).",
    week: "Synchrone"
  },
  {
    id: 143,
    front: "Caractéristique du Moteur Universel",
    back: "C'est un moteur série conçu pour fonctionner en AC. Comme le courant s'inverse simultanément dans l'inducteur et l'induit, le couple reste unidirectionnel ($T \\propto I^2$). Utilisé dans l'électroménager.",
    week: "MCC"
  },
  {
    id: 144,
    front: "Moteur Compound : Hypercompoundage vs Hypocompoundage",
    back: "**Hyper (Additif)** : Flux série s'ajoute au shunt $\\to$ fort couple démarrage.\n**Hypo (Soustractif)** : Flux série s'oppose $\\to$ régulation de vitesse très précise (mais risque d'instabilité).",
    week: "MCC"
  },
  {
    id: 145,
    front: "Les 4 Quadrants de fonctionnement d'une MCC",
    back: "Q1: Moteur sens avant.\nQ2: Génératrice (Freinage) sens avant.\nQ3: Moteur sens arrière.\nQ4: Génératrice sens arrière.\nNécessite un convertisseur réversible.",
    week: "MCC"
  },
  {
    id: 146,
    front: "Qu'est-ce que le Couple de Maintien (Holding Torque) d'un pas-à-pas ?",
    back: "C'est le couple maximal que le moteur peut opposer à la rotation lorsqu'il est à l'arrêt et alimenté, sans perdre sa position. (Spécifique aux moteurs à aimants/hybrides).",
    week: "Pas à Pas"
  },
  {
    id: 147,
    front: "Relation Pas - Vitesse (Stepper)",
    back: "La vitesse de rotation $n$ (tr/s) est : $n = \\frac{f_{pas}}{N_{pas/tour}}$.\nPour aller plus vite, il faut augmenter la fréquence des impulsions.",
    week: "Pas à Pas"
  },
  {
    id: 148,
    front: "Avantage du moteur MSAP sur le moteur thermique (Véhicule)",
    back: "Le MSAP fournit son couple maximal dès 0 tr/min, a un rendement >90% (vs ~35% thermique), et ne nécessite souvent qu'un réducteur fixe sans boîte de vitesses complexe.",
    week: "MSAP"
  },
  {
    id: 149,
    front: "Qu'est-ce que la \"Corner Speed\" (MSAP) ?",
    back: "C'est la vitesse où la tension induite atteint la tension maximale de l'onduleur. Au-delà, on doit réduire le flux (défluxage) pour continuer à accélérer à puissance constante.",
    week: "MSAP"
  },
  {
    id: 150,
    front: "Définition du système \"Per Unit\" (pu)",
    back: "Système d'unités réduites où chaque grandeur est divisée par une valeur de base ($U_n, S_n$). Facilite les comparaisons entre machines de tailles différentes.",
    week: "Général"
  },
  {
    id: 151,
    front: "Construction du Moteur à Griffes (Claw-Pole)",
    back: "Stator avec une seule bobine concentrique et des pièces polaires en forme de griffes imbriquées. Simple et économique, très utilisé en petite motorisation.",
    week: "Pas à Pas"
  },
  {
    id: 152,
    front: "Risque principal du Moteur Pas-à-Pas",
    back: "Le **décrochage** (perte de pas) si le couple résistant dépasse le couple moteur ou si l'accélération est trop brutale. Il ne peut pas se corriger seul (boucle ouverte).",
    week: "Pas à Pas"
  },
  {
    id: 153,
    front: "Pourquoi le facteur de puissance d'une machine Asynchrone est-il toujours inductif ?",
    back: "Car elle consomme toujours de la puissance réactive pour magnétiser son circuit (créer le champ tournant), n'ayant pas de source d'excitation propre comme la machine synchrone.",
    week: "Asynchrone"
  }
];

export const tdsCards: Card[] = [
  // Week 1 & 2
  { id: 1, front: "What was Licklider's 'OLIVER'?", back: "Licklider's predicted digital assistant that knows your preferences and helps filter information — today's algorithms and AI bots.", week: "Week 1 & 2" },
  { id: 2, front: "Gossip Protocol", back: "Network communication where computers call each other and \"copy\" messages, spreading information like rumors in a school.", week: "Week 1 & 2" },
  { id: 3, front: "Licklider's Warning: The Digital Divide", back: "Licklider's warning: If only rich people have computers, will this power be a privilege for a few, or a right for everyone?", week: "Week 1 & 2" },
  { id: 4, front: "What was Usenet (1979)?", back: "The \"grandfather\" of Reddit and Twitter — a global network (1979) where anyone could post a message for the world to see.", week: "Week 1 & 2" },
  { id: 5, front: "What is 'Signal-to-Noise Collapse'?", back: "When spam and junk overwhelm real conversations, making it too hard to find valuable content.", week: "Week 1 & 2" },
  { id: 6, front: "What are Dahl's 5 Criteria for Democracy?", back: "Rules for democracy: Effective Participation, Voting Equality, Enlightened Understanding, Control of Agenda, Inclusiveness.", week: "Week 1 & 2" },
  { id: 59, front: "Communication as Modeling", back: "Licklider's idea: real communication isn't just sending files — it's about understanding what's in another person's head (their mental model).", week: "Week 1 & 2" },
  { id: 60, front: "UUCP", back: "Unix-to-Unix Copy Protocol — early method where one computer calls another over phone lines to copy files, enabling Usenet.", week: "Week 1 & 2" },
  { id: 61, front: "Newsgroups", back: "Instead of emailing one person, you post to a topic (like \"Unix-Lovers\") — precursor to modern forums and subreddits.", week: "Week 1 & 2" },
  { id: 62, front: "Decentralization", back: "No single company owns the system — it's run by regular people connecting their computers. Key feature of early internet.", week: "Week 1 & 2" },
  { id: 63, front: "What was the Canter & Siegel Spam Incident?", back: "1994 incident where lawyers posted Green Card ads to every Usenet group — proving the system could be exploited for free advertising.", week: "Week 1 & 2" },
  { id: 64, front: "Sock Puppets", back: "Fake accounts created by one person to vote or post multiple times — breaks the \"one person, one vote\" principle.", week: "Week 1 & 2" },
  { id: 65, front: "Effective Participation", back: "Dahl's Rule #1: Everyone must have a real chance to speak and be heard BEFORE a decision is made.", week: "Week 1 & 2" },
  { id: 66, front: "Dahl's Rule: Voting Equality", back: "Dahl's Rule #2: When it's time to decide, every vote must count exactly the same — one person, one vote.", week: "Week 1 & 2" },
  { id: 67, front: "Dahl's Rule: Enlightened Understanding", back: "Dahl's Rule #3: Citizens need access to truth and different facts to make smart choices.", week: "Week 1 & 2" },
  { id: 68, front: "Dahl's Rule: Control of the Agenda", back: "Dahl's Rule #4: The people (not a king or CEO) must decide what topics are important to discuss.", week: "Week 1 & 2" },
  { id: 69, front: "Inclusiveness", back: "Dahl's Rule #5: Every adult subject to the rules must be allowed to participate in democracy.", week: "Week 1 & 2" },
  { id: 70, front: "Uncensored Speech ≠ Democracy", back: "Usenet proved that freedom to say anything is not the same as freedom to decide together — abuse breaks the process.", week: "Week 1 & 2" },

  // Week 3
  { id: 7, front: "Power Laws", back: "Pattern where a tiny number of people get almost all the attention/resources — \"the rich get richer.\"", week: "Week 3" },
  { id: 8, front: "Million Follower Fallacy", back: "The assumption that more followers = more influence. Proven wrong: top lists for followers, retweets, and mentions have almost no overlap.", week: "Week 3" },
  { id: 9, front: "How does PageRank work?", back: "Google's algorithm treating links as votes. A page is important if important pages link to it (recursive importance).", week: "Week 3" },
  { id: 10, front: "Random Surfer / UBI", back: "PageRank solution to \"rank sinks\" — imagines a surfer who occasionally jumps randomly, giving every page a baseline chance.", week: "Week 3" },
  { id: 11, front: "What are Filter Bubbles?", back: "Personalized views that show only what you already agree with, created by customized algorithms.", week: "Week 3" },
  { id: 12, front: "Google Bombing", back: "Coordinated linking to make a specific phrase return a specific (often embarrassing) result in search.", week: "Week 3" },
  { id: 13, front: "What is the Streisand Effect?", back: "Trying to censor something backfires by drawing more attention to it.", week: "Week 3" },
  { id: 14, front: "Explain Piketty's Wealth Formula (r > g)", back: "When return on capital exceeds economic growth, wealth concentrates at the top. Those who own get richer faster than those who work.", week: "Week 3" },
  { id: 71, front: "What does 'Indegree' measure in influence?", back: "Measures POPULARITY — people are watching but not necessarily listening. Top users: CNN, Obama.", week: "Week 3" },
  { id: 72, front: "Retweets as Influence", back: "Measures CONTENT VALUE — people share what you say. Top users: Mashable, NYTimes.", week: "Week 3" },
  { id: 73, front: "Mentions as Influence", back: "Measures NAME VALUE/ENGAGEMENT — people talk ABOUT you. Top users: celebrities.", week: "Week 3" },
  { id: 74, front: "Influentials Theory", back: "Traditional view: A small elite of \"opinion leaders\" drives trends. Target them, and the message spreads.", week: "Week 3" },
  { id: 75, front: "Accidental Influentials", back: "Modern view: Trends depend on how READY society is to adopt them, not on who starts them.", week: "Week 3" },
  { id: 76, front: "Recursive Importance", back: "In PageRank, a page is important if IMPORTANT pages link to it — one NYT link > 1,000 random blog links.", week: "Week 3" },
  { id: 77, front: "Rank Sink Problem", back: "In PageRank, pages linking only to each other would hoard all power like dictators — solved by random jumps.", week: "Week 3" },
  { id: 78, front: "Personalized PageRank", back: "The \"random jump\" destination is customized to your bookmarks — powerful but creates filter bubbles.", week: "Week 3" },
  { id: 79, front: "The Pornography Paradox", back: "Porn sites had high traffic but low PageRank — people consume privately but don't publicly endorse.", week: "Week 3" },
  { id: 80, front: "U-Shaped Inequality", back: "Piketty's finding: mid-20th century equality was an anomaly caused by wars; inequality has returned sharply since 1980.", week: "Week 3" },
  { id: 81, front: "Democracy as Influence Metric", back: "Voting measures who convinced whom. Campaigning creates influence; voting measures its success.", week: "Week 3" },

  // Week 4
  { id: 15, front: "Peer Review", back: "Independent experts evaluate scientific ideas before publication — the original trust algorithm.", week: "Week 4" },
  { id: 16, front: "h-index", back: "A researcher has index h if they have published h papers each cited at least h times. Balances quantity with quality.", week: "Week 4" },
  { id: 17, front: "State Goodhart's Law", back: "\"When a measure becomes a target, it ceases to be a good measure.\" Explains gaming of metrics.", week: "Week 4" },
  { id: 18, front: "Citation Rings", back: "Groups agreeing to cite each other regardless of relevance to artificially inflate h-indices.", week: "Week 4" },
  { id: 19, front: "Black Hat SEO", back: "Unethical tricks to fool search algorithms: cloaking, link farms, invisible text, Google bombing.", week: "Week 4" },
  { id: 20, front: "What is the Search Engine Manipulation Effect (SEME)?", back: "Search Engine Manipulation Effect — biased rankings can shift undecided voters by 20%+ invisibly.", week: "Week 4" },
  { id: 82, front: "Hierarchy of Trust", back: "Pre-prints (low) → Conferences (medium-high) → Journals (high, gold standard) — not all publications equal.", week: "Week 4" },
  { id: 83, front: "Single-Blind Review", back: "Reviewers know the authors; authors don't know reviewers. Reduces some bias.", week: "Week 4" },
  { id: 84, front: "Double-Blind Review", back: "Neither party knows the other — the most rigorous standard for minimizing reviewer bias.", week: "Week 4" },
  { id: 85, front: "Honorary Authorship", back: "35.5% of academics admitted adding authors who contributed nothing — gaming the citation system.", week: "Week 4" },
  { id: 86, front: "Coercive Citations", back: "14.1% of academics reported being forced by editors to cite the editor's own journal.", week: "Week 4" },
  { id: 87, front: "Power of Page 1", back: "91.5% of clicks happen on the first search page — if you're not there, you're invisible.", week: "Week 4" },
  { id: 88, front: "Cloaking", back: "Black hat SEO: showing one page to the crawler (optimized) and a different page to users (spam).", week: "Week 4" },
  { id: 89, front: "Link Farms", back: "Networks of fake websites created solely to link to a target, exploiting PageRank's \"links as votes.\"", week: "Week 4" },
  { id: 90, front: "Invisible Text SEO", back: "Hiding keywords (white text on white background) so bots index them while users see nothing.", week: "Week 4" },
  { id: 91, front: "SEO Bowling", back: "Harming a competitor by pointing \"bad\" links from spam sites at them, triggering a penalty.", week: "Week 4" },
  { id: 92, front: "Invisible Gerrymandering", back: "SEME enables personalized results where regulators see neutral pages while targeted voters see bias.", week: "Week 4" },

  // Week 5
  { id: 21, front: "Plurality Voting", back: "\"First Past the Post\" — everyone gets one vote, most votes wins. Causes vote splitting and two-party systems.", week: "Week 5" },
  { id: 22, front: "What does Duverger's Law predict?", back: "Vote splitting mathematically forces a rigid two-party system under plurality voting.", week: "Week 5" },
  { id: 23, front: "Instant Runoff (IRV)", back: "Voters rank candidates. Lowest vote-getter eliminated, their votes transfer to next preference. Repeat until winner.", week: "Week 5" },
  { id: 24, front: "Condorcet Winner", back: "The candidate who beats every other candidate in head-to-head matchups — the \"consensus candidate.\"", week: "Week 5" },
  { id: 25, front: "STV", back: "Single Transferable Vote: ranked voting with quota, surplus/eliminated vote transfers. Enables proportional representation.", week: "Week 5" },
  { id: 26, front: "What is Arrow's Impossibility Theorem?", back: "No voting system is perfect. Every system has some flaw — democracy is choosing the least bad trade-offs.", week: "Week 5" },
  { id: 27, front: "Droop Quota", back: "(Total Votes / (Seats + 1)) + 1 — the smallest number such that no more candidates than seats can reach it.", week: "Week 5" },
  { id: 93, front: "Vote Splitting", back: "Two similar candidates split their voters — a minority candidate wins even if majority prefers the other ideology.", week: "Week 5" },
  { id: 94, front: "Strategic Voting", back: "Voting for the \"lesser of two evils\" rather than your true preference — forced by plurality systems.", week: "Week 5" },
  { id: 95, front: "How does Runoff Voting work?", back: "If no majority in round 1, top two face a second election. Ensures majority support but causes voter fatigue.", week: "Week 5" },
  { id: 96, front: "Condorcet Cycles", back: "A beats B, B beats C, C beats A — no clear winner in head-to-head matchups. A flaw of Condorcet method.", week: "Week 5" },
  { id: 97, front: "Borda Count", back: "Ranked scoring: 1st place gets max points, last gets 0. Finds highest average approval, not passionate #1 choice.", week: "Week 5" },
  { id: 98, front: "Coombs' Method", back: "Like IRV, but eliminates the candidate with the MOST last-place votes — removes polarizing figures early.", week: "Week 5" },
  { id: 99, front: "How does Approval Voting work?", back: "Check boxes for as many candidates as you like. Simple, eliminates vote splitting, no wasted votes.", week: "Week 5" },
  { id: 100, front: "Hare Quota", back: "Total Votes / Seats — simpler than Droop but can give unfair results in STV elections.", week: "Week 5" },
  { id: 101, front: "Proportional Representation", back: "If 30% support Greens, they get ~30% of seats. STV achieves this; plurality does not.", week: "Week 5" },
  { id: 102, front: "What is the Gibbard-Satterthwaite Theorem?", back: "No ranking-based voting system can guarantee voters always benefit from honest voting — every system can be gamed.", week: "Week 5" },
  { id: 103, front: "Democracy as Engineering", back: "Democracy is not just values — it's an engineering problem. The algorithm determines winners.", week: "Week 5" },

  // Week 6
  { id: 28, front: "Proof of Work", back: "Miners solve useless puzzles to secure blockchain. Creates \"skin in the game\" but wastes energy and centralizes.", week: "Week 6" },
  { id: 29, front: "What is the Double Spend Problem?", back: "The risk of spending the same digital money twice — solved by blockchain's shared transaction history.", week: "Week 6" },
  { id: 30, front: "Smart Contracts", back: "Programs on Ethereum that run automatically on everyone's machine. \"Code is Law.\"", week: "Week 6" },
  { id: 31, front: "DAO", back: "Decentralized Autonomous Organization — run entirely by code, promising transparency and automation.", week: "Week 6" },
  { id: 32, front: "What happened in The DAO Hack (2016)?", back: "$250M drained via bug. Ethereum developers forced a hard fork to reverse it, splitting into ETH and Ethereum Classic.", week: "Week 6" },
  { id: 33, front: "Token-Weighted Voting", back: "Blockchain voting where 1 Dollar = 1 Vote. A plutocracy, not a democracy.", week: "Week 6" },
  { id: 104, front: "Three Waves of Decentralization", back: "Usenet (1979) → P2P/Napster (2000s) → Blockchain (2008). Each promised freedom; each re-centralized.", week: "Week 6" },
  { id: 105, front: "Usenet's Failure", back: "First decentralization wave — killed by spam and noise because it had no moderation.", week: "Week 6" },
  { id: 106, front: "P2P's Failure", back: "Second wave (Napster) — lost to centralized streaming (Spotify) due to legal issues and convenience.", week: "Week 6" },
  { id: 107, front: "Blockchain's Failure Mode", back: "Third wave — promised to cut out banks but re-centralized around mining pools and large token holders.", week: "Week 6" },
  { id: 108, front: "Hard Fork", back: "Blockchain split where developers rewrite history — Ethereum did this after The DAO hack, creating Ethereum Classic.", week: "Week 6" },
  { id: 109, front: "Ethereum Classic", back: "The original Ethereum chain kept by \"Code is Law\" purists who refused to reverse The DAO hack.", week: "Week 6" },
  { id: 110, front: "Explain the 'Code is Law' philosophy", back: "Blockchain philosophy: rules execute exactly as coded, no human override. Bugs become \"legal\" exploits.", week: "Week 6" },
  { id: 111, front: "Decentralization Paradox", back: "\"Decentralized\" systems inevitably re-centralize around capital — mining pools, large token holders, core developers.", week: "Week 6" },

  // Week 7 & 8
  { id: 34, front: "How does Liquid Democracy work?", back: "Hybrid system: vote directly on topics you understand, delegate to trusted experts on others. Revocable anytime.", week: "Week 7 & 8" },
  { id: 35, front: "Super-Voter Problem", back: "In liquid democracy, everyone delegating to one celebrity creates an \"accidental dictator.\"", week: "Week 7 & 8" },
  { id: 36, front: "Viscous Democracy", back: "Solution to delegation cycles: lose a fraction of power at each hop, so loops decay naturally.", week: "Week 7 & 8" },
  { id: 37, front: "Prediction Markets", back: "Using money to aggregate information. Contract price reflects probability of event occurring.", week: "Week 7 & 8" },
  { id: 38, front: "Quadratic Voting", back: "Vote cost increases quadratically: 1 vote = 1 credit, 2 votes = 4 credits, 10 votes = 100 credits.", week: "Week 7 & 8" },
  { id: 39, front: "Deliberative Polling", back: "Random sample + balanced information + structured discussion → reveals what people would think if informed.", week: "Week 7 & 8" },
  { id: 112, front: "Representative Democracy", back: "Politicians specialize in complex issues, but you're stuck with \"party bundles\" of positions you may not all agree with.", week: "Week 7 & 8" },
  { id: 113, front: "Direct Democracy", back: "Maximum control on every issue — but exhausting. Hot-button issues dominate; important boring topics get ignored.", week: "Week 7 & 8" },
  { id: 114, front: "Transitivity (Trust Chains)", back: "If you delegate to Alice and she delegates to Bob, your vote goes to Bob — risk of unexpected power concentration.", week: "Week 7 & 8" },
  { id: 115, front: "Split Delegation", back: "Solution to super-voters: divide your vote (50% to A, 50% to B) to spread power in liquid democracy.", week: "Week 7 & 8" },
  { id: 116, front: "LiquidFeedback", back: "German Pirate Party experiment (2009-2013). Super-voters emerged but acted as stabilizers, not dictators.", week: "Week 7 & 8" },
  { id: 117, front: "Google Votes", back: "Internal Google experiment (2012-2015) with 20,000 employees. Only 3.6% delegated — mostly low-stakes decisions.", week: "Week 7 & 8" },
  { id: 118, front: "Crowdfunding", back: "Community raises money directly for projects. Democratic but favors wealthy, flashy over needed.", week: "Week 7 & 8" },
  { id: 119, front: "Crowdfunding Risk: Displacing Government", back: "If citizens crowdfund to fix roads, government faces less pressure to do its job.", week: "Week 7 & 8" },
  { id: 120, front: "Skin in the Game", back: "Prediction markets use real money, forcing honesty — you bet on what you actually believe.", week: "Week 7 & 8" },
  { id: 121, front: "Iowa Electronic Markets", back: "Prediction market that outperformed Gallup polls — 1.5% error vs 2.1% in week before elections.", week: "Week 7 & 8" },
  { id: 122, front: "What is the 'Oracle Problem' in prediction markets?", back: "Prediction markets need a trusted source to verify actual outcomes — disagreements can break the system.", week: "Week 7 & 8" },
  { id: 123, front: "Voice Credits", back: "Budget in Quadratic Voting. Spend all on one issue you care about, or spread across many.", week: "Week 7 & 8" },
  { id: 124, front: "Why is the Quadratic cost function optimal?", back: "Linear cost = dictatorship of intense. Steep cost = everyone casts 1 vote. Quadratic = optimal sweet spot.", week: "Week 7 & 8" },
  { id: 125, front: "Quadratic Voting Protects Minorities", back: "A passionate minority can outweigh an indifferent majority on issues they care deeply about.", week: "Week 7 & 8" },
  { id: 126, front: "Deliberative Weekend", back: "Core of deliberative polling: participants discuss in small groups with trained moderators ensuring balance.", week: "Week 7 & 8" },
  { id: 127, front: "Opinions Change with Information", back: "Deliberative polling finding: over half of policy items show significant shifts after deliberation.", week: "Week 7 & 8" },
  { id: 128, front: "No Group Polarization in DP", back: "Deliberative polling finding: about half of groups unify, half diversify — no systematic polarization.", week: "Week 7 & 8" },

  // Week 9
  { id: 40, front: "Kleroteria", back: "Ancient Athenian lottery device for randomly selecting magistrates — origin of the word \"lottery.\"", week: "Week 9" },
  { id: 41, front: "Venetian Doge Election", back: "10-stage process alternating random selection and deliberation to prevent any faction from controlling the outcome.", week: "Week 9" },
  { id: 42, front: "Risk-Limiting Audits", back: "Statistical method to verify elections: randomly sample ballots, compare to official results using statistical math.", week: "Week 9" },
  { id: 43, front: "What is a Sybil Attack?", back: "One actor creates many fake identities to subvert systems assuming \"one person, one vote.\"", week: "Week 9" },
  { id: 44, front: "What are Social Bots?", back: "Automated accounts pretending to be human — can manipulate politics, move markets, manufacture consensus.", week: "Week 9" },
  { id: 129, front: "Why Randomness?", back: "Anti-corruption (can't bribe unknown selectee), fairness (equal chance), fresh perspectives (newcomers not captured).", week: "Week 9" },
  { id: 130, front: "Athenian Lottery Rules", back: "One-year terms, hold office only ONCE in lifetime, showing DESIRE for position could disqualify you.", week: "Week 9" },
  { id: 131, front: "Trial by Jury", back: "Randomly selected peers may be fairer than expert judges who carry biases — ordinary people understand ordinary situations.", week: "Week 9" },
  { id: 132, front: "Random Vote Counters", back: "Swiss method: vote counters randomly selected before each election — impossible to corrupt in advance.", week: "Week 9" },
  { id: 133, front: "Tie-Breaking by Coin Flip", back: "When elections are exactly tied, randomness preserves fairness — neither side gains advantage.", week: "Week 9" },
  { id: 134, front: "Randomness in STV", back: "When surplus votes transfer, one method randomly selects which ballots — simple but non-deterministic.", week: "Week 9" },
  { id: 135, front: "Douceur's Sybil Proof (2002)", back: "Without a trusted central authority, it's nearly impossible to guarantee \"one person, one identity\" in decentralized systems.", week: "Week 9" },
  { id: 136, front: "Simultaneous Validation", back: "To stop Sybils, you must validate everyone at once — checking one at a time lets attackers reuse resources.", week: "Week 9" },
  { id: 137, front: "2013 White House Tweet Crash", back: "A fake bot tweet about a White House attack crashed the stock market instantly — showing bot power.", week: "Week 9" },
  { id: 138, front: "Astroturfing", back: "Using bots to create the illusion that a fringe opinion is widely held — manufacturing fake consensus.", week: "Week 9" },
  { id: 139, front: "Bot Detection: Network-Based", back: "Bots often cluster together with few links to real users — detect tight-knit \"sybil\" communities.", week: "Week 9" },
  { id: 140, front: "Bot Detection: Crowdsourcing", back: "Humans evaluate profiles (Online Social Turing Test). High accuracy but expensive and slow.", week: "Week 9" },

  // Week 10
  { id: 45, front: "What is the goal of Proof of Personhood?", back: "Verifying you are a unique human without revealing who you are. Goal: non-disposable, unique, private identity.", week: "Week 10" },
  { id: 46, front: "Pseudonym Parties", back: "Physical synchronous attendance at the same time worldwide — your one body can't be in 1,000 places at once.", week: "Week 10" },
  { id: 47, front: "Web of Trust", back: "Users vouch for new users (like PGP). Fails because attackers can collude and create \"Sybil regions.\"", week: "Week 10" },
  { id: 48, front: "Aadhaar", back: "India's biometric ID system covering 1B+ people. Hard to fake but enables perfect state surveillance.", week: "Week 10" },
  { id: 49, front: "Idena (Flip Puzzles)", back: "Synchronous online puzzles (narrative logic) everyone solves at once — can't mentally solve 10 at the same time.", week: "Week 10" },
  { id: 141, front: "Doonesbury IP Address Flaw", back: "One IP = one vote? MIT owned millions of IPs, one student voted more than the rest of the internet combined.", week: "Week 10" },
  { id: 142, front: "Resources ≠ Identity", back: "If identity costs money or skill, democracy becomes plutocracy. Buying IPs or coding bots = more votes.", week: "Week 10" },
  { id: 143, front: "Platform Incentive Problem", back: "Why don't platforms verify IDs? Friction kills growth, storing IDs creates \"honey pot\" for hackers, excludes refugees.", week: "Week 10" },
  { id: 144, front: "Death of IP Addresses", back: "VPNs, NATs, and IPv6 make IP addresses meaningless for identity verification.", week: "Week 10" },
  { id: 145, front: "CAPTCHAs Failed", back: "AI is now better at image recognition than humans — CAPTCHAs punish humans while bots breeze past.", week: "Week 10" },
  { id: 146, front: "Sybil Regions", back: "In web of trust, once attackers get in, they vouch for each other infinitely — creating massive fake networks.", week: "Week 10" },
  { id: 147, front: "Global Synchronicity", back: "Everyone meets at physical locations at the exact same time — one body can't be in 1,000 places.", week: "Week 10" },
  { id: 148, front: "Biometrics Trade-off", back: "Extremely hard to fake, but zero privacy — if database leaks, you can't reset your fingerprints.", week: "Week 10" },
  { id: 149, front: "Weak vs Strong Identity", back: "Internet was built on weak identities (free speech) but broke democracy. Strong identity fixes Sybils but kills privacy.", week: "Week 10" },

  // Week 11
  { id: 50, front: "What is Self-Sovereign Identity (SSI)?", back: "You hold your own credentials in a digital wallet. No central authority can revoke your identity.", week: "Week 11" },
  { id: 51, front: "Zero-Knowledge Proofs", back: "Prove something (e.g., \"I'm over 18\") without revealing the underlying data (your birthday).", week: "Week 11" },
  { id: 52, front: "How does Tor (Onion Routing) work?", back: "Three-hop encryption: Node 1 sees who you are, Node 3 sees where you go, neither sees both. Weak to traffic analysis.", week: "Week 11" },
  { id: 53, front: "Mix Nets", back: "Collect messages in batch, cryptographically shuffle like a deck of cards, send in random order. High latency but strong privacy.", week: "Week 11" },
  { id: 54, front: "Explain the '4chan Paradox'", back: "Radical anonymity + extreme ephemerality = hyper-evolutionary meme culture, but drifts toward chaos and toxicity.", week: "Week 11" },
  { id: 150, front: "Centralized Identity (Web 1.0)", back: "Different username/password for every site. Site owners control your data.", week: "Week 11" },
  { id: 151, front: "Federated Identity (Web 2.0)", back: "\"Login with Google\" — convenient but Google becomes the surveillance overlord of your life.", week: "Week 11" },
  { id: 152, front: "Triangle of Trust", back: "SSI model: Issuer signs credential → Holder stores in wallet → Verifier checks signature on blockchain.", week: "Week 11" },
  { id: 153, front: "Selective Disclosure", back: "With SSI + zero-knowledge proofs, prove you're \"over 18\" without sharing birthday or name.", week: "Week 11" },
  { id: 154, front: "VPN Weakness", back: "VPNs are just trust transfer — you hide from ISP but now VPN provider sees everything.", week: "Week 11" },
  { id: 155, front: "Traffic Analysis Attack", back: "Tor weakness: a global adversary watching both ends can match timing of packets to de-anonymize.", week: "Week 11" },
  { id: 156, front: "Chaumian Mixing", back: "Mix nets: messages collected in batch, cryptographically shuffled, sent in random order — mathematically breaks link.", week: "Week 11" },
  { id: 157, front: "Mix Net Trade-off", back: "Great for email/voting due to strong privacy, but high latency (wait for batch) makes it terrible for browsing.", week: "Week 11" },
  { id: 158, front: "4chan's /b/ Board", back: "90% \"Anonymous\" posts, threads die in minutes (5 seconds on front page) — creates hyper-evolutionary meme pressure.", week: "Week 11" },
  { id: 159, front: "Community Without Identity", back: "4chan proves community CAN exist without identity — but without reputation, it drifts toward chaos.", week: "Week 11" },
  { id: 160, front: "Accountable Anonymity", back: "The synthesis goal: prove we are citizens without doxxing ourselves — neither surveillance state nor 4chan chaos.", week: "Week 11" },
  { id: 161, front: "Anonymity as Spectrum", back: "Anonymity isn't binary (on/off). Tor for browsing, Mix Nets for voting, SSI for credentials — different levels.", week: "Week 11" },

  // Week 12
  { id: 55, front: "Radicalization Pipeline", back: "YouTube algorithm pathway: IDW → Alt-lite → Alt-right. 40% of Alt-right commenters came from milder communities.", week: "Week 12" },
  { id: 56, front: "What is Information Gerrymandering?", back: "Organizing communication networks to give one side unfair advantage — echo chambers beat scattered opponents.", week: "Week 12" },
  { id: 57, front: "Zealot Bots", back: "Automated accounts that never change their minds, placed strategically to sway entire networks.", week: "Week 12" },
  { id: 58, front: "i-Voting", back: "Internet voting. Slow adoption, mainly useful for expatriates. Security vs. convenience trade-off.", week: "Week 12" },
  { id: 162, front: "Polarization", back: "The formation of \"Us vs. Them\" tribes — moving from disagreement to tribal warfare.", week: "Week 12" },
  { id: 163, front: "Radicalization", back: "The process of moving people from normal disagreements to extreme, violent, or hateful views.", week: "Week 12" },
  { id: 164, front: "Intellectual Dark Web (IDW)", back: "Controversial but mainstream academics discussing taboos — e.g., Jordan Peterson, Joe Rogan. Entry point to pipeline.", week: "Week 12" },
  { id: 165, front: "Alt-lite", back: "Right-wing activists flirting with extreme ideas but denying overt racism — e.g., Proud Boys. Middle of pipeline.", week: "Week 12" },
  { id: 166, front: "Alt-right", back: "Openly white supremacist and hate groups — e.g., Richard Spencer. End of radicalization pipeline.", week: "Week 12" },
  { id: 167, front: "One-Way Migration", back: "YouTube finding: people drift from moderate to extreme, rarely the other way — the escalator goes up.", week: "Week 12" },
  { id: 168, front: "Recommended Channels", back: "YouTube feature that bridges gaps — helps users find the next level of extremism even when video recommender doesn't.", week: "Week 12" },
  { id: 169, front: "Echo Chamber Advantage", back: "A unified group talking only to itself beats a scattered opposition — concentrated influence wins.", week: "Week 12" },
  { id: 170, front: "Gerrymandering Deadlock", back: "If both sides build separate echo chambers, they stop talking entirely — society loses ability to reach consensus.", week: "Week 12" },
  { id: 171, front: "i-Voting for Expatriates", back: "Main use case for internet voting: 50-60% usage for citizens abroad where postal mail is unreliable.", week: "Week 12" },
  { id: 172, front: "New Digital Divide", back: "i-Voting usage depends less on age/income than IT literacy — complexity locks out non-tech-savvy voters.", week: "Week 12" },
  { id: 173, front: "Technology as Lens", back: "Technology is not Big Brother watching — it's a lens that distorts reality by maximizing engagement through radical content.", week: "Week 12" },
  { id: 174, front: "Architecture of Influence", back: "To fix democracy, we don't just need better voters — we need to redesign how information flows through networks.", week: "Week 12" },
  { id: 175, front: "Engagement Optimization", back: "Algorithms optimize for engagement, which favors outrage and extremism — users funneled into echo chambers.", week: "Week 12" },
  // New Additions
  { id: 176, front: "What is the 'Rank Sink' problem in PageRank?", back: "When a group of pages link only to each other to hoard importance. Solved by the 'Random Surfer' model.", week: "Week 3" },
  { id: 177, front: "What is the difference between Single-Blind and Double-Blind review?", back: "Single-blind: reviewers know authors (authors don't know reviewers). Double-blind: neither knows the other (reduces bias).", week: "Week 4" },
  { id: 178, front: "Explain the 'Coombs Method' of voting", back: "Like Instant Runoff, but eliminates the candidate with the MOST last-place votes (removing polarizing figures).", week: "Week 5" },
  { id: 179, front: "What is the 'Decentralization Paradox' in Blockchain?", back: "Systems designed to be decentralized inevitably re-centralize around capital (mining pools, whales, core devs).", week: "Week 6" },
  { id: 180, front: "What is 'Viscous Democracy'?", back: "A solution to delegation loops in Liquid Democracy: power decays slightly with each transfer, dampening cycles.", week: "Week 7 & 8" },
  { id: 181, front: "Why are 'Random Vote Counters' used in Switzerland?", back: "To prevent election fraud—counters are selected randomly just before the election, so they can't be bribed in advance.", week: "Week 9" },
  { id: 182, front: "Why are 'Pseudonym Parties' hard to scale?", back: "They require global physical synchronicity (everyone meeting at once), which is high friction and hard to organize.", week: "Week 10" },
  { id: 183, front: "What is the 'Traffic Analysis' attack on Tor?", back: "A global adversary watching both ends of the network can correlate packet timing to de-anonymize users.", week: "Week 11" },
  { id: 184, front: "What is the 'Zealot Effect' in Information Gerrymandering?", back: "A few unwavering 'zealot' agents can sway the consensus of an entire network if placed strategically.", week: "Week 12" },
];

export function shuffleCards(cards: Card[]): Card[] {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
