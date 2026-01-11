import { useState, useCallback, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Book, BookOpen, Zap, Trophy, RefreshCcw } from "lucide-react";
import { Flashcard } from "./components/Flashcard";
import { CategoryDropdown } from "./components/CategoryDropdown";
import {
	controlSystemsCards,
	machinesCards,
	tdsCards,
	shuffleCards,
	type Card,
} from "./data/cards";
import { cn } from "@/lib/utils";

// Helper to get the full source for a section
const getSource = (section: string): Card[] => {
	switch (section) {
		case "Control Systems":
			return controlSystemsCards;
		case "Machines Electriques":
			return machinesCards;
		case "TDS":
			return tdsCards;
		default:
			return [];
	}
};

function App() {
	const [activeSection, setActiveSection] = useState<
		"Machines Electriques" | "Control Systems" | "TDS"
	>("Control Systems");
	const [activeCategory, setActiveCategory] = useState<string>("All");
	const [isExamMode, setIsExamMode] = useState(false);

	// The active deck of cards (State Queue)
	const [cards, setCards] = useState<Card[]>(() =>
		shuffleCards(controlSystemsCards),
	);

	// Tracking correct answers per category: { "Week 1": count }
	const [correctCounts, setCorrectCounts] = useState<Record<string, number>>(
		{},
	);

	const [isFlipped, setIsFlipped] = useState(false);
	const [direction, setDirection] = useState(0);
	const [isSwitchingSection, setIsSwitchingSection] = useState(false);
	const [isProcessing, setIsProcessing] = useState(false);

	// Calculate total cards per category for the current section
	const sectionTotals = useMemo(() => {
		const source = getSource(activeSection);
		const totals: Record<string, number> = {};
		for (const card of source) {
			totals[card.week] = (totals[card.week] || 0) + 1;
		}
		return totals;
	}, [activeSection]);

	// Derive sorted categories list
	const categories = useMemo(() => {
		return Object.keys(sectionTotals).sort((a, b) =>
			a.localeCompare(b, undefined, { numeric: true }),
		);
	}, [sectionTotals]);

	// Reset game when section changes (but NOT when exam mode is toggled)
	// Reset game when section changes (but NOT when exam mode is toggled)
	useEffect(() => {
		const source = getSource(activeSection);
		const filteredSource =
			activeCategory === "All"
				? source
				: source.filter((c) => c.week === activeCategory);

		setCards(shuffleCards(filteredSource));
		setCorrectCounts({}); // Reset stats always on reset
		setIsFlipped(false);
		setDirection(0);
		setIsProcessing(false);
	}, [activeSection, activeCategory]);

	useEffect(() => {
		if (isSwitchingSection) {
			const timer = setTimeout(() => setIsSwitchingSection(false), 50);
			return () => clearTimeout(timer);
		}
	}, [isSwitchingSection]);

	const currentCard = cards[0];

	const triggerTransition = useCallback(
		(dir: "left" | "right") => {
			if (isProcessing) return; // Prevent race conditions
			setIsProcessing(true);

			const dirVal = dir === "right" ? 1 : -1;
			setDirection(dirVal); // Triggers exit animation direction

			setTimeout(() => {
				setIsFlipped(false);

				setCards((prevDeck) => {
					if (prevDeck.length === 0) return prevDeck;
					const [top, ...rest] = prevDeck;

					if (isExamMode) {
						// === EXAM MODE LOGIC ===
						if (dir === "right") {
							// GOT IT RIGHT: Remove from deck permanently for this session
							setCorrectCounts((prevStats) => ({
								...prevStats,
								[top.week]: (prevStats[top.week] || 0) + 1,
							}));
							return rest; // Card is gone
						}

						// GOT IT WRONG: Re-queue randomly
						if (rest.length === 0) return [top];
						const minIndex = 1;
						const maxIndex = rest.length;
						const insertIndex =
							Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
						const newDeck = [...rest];
						newDeck.splice(insertIndex, 0, top);

						return newDeck;
					}

					// === PRACTICE MODE LOGIC (Default) ===
					// Always re-queue, never remove, no stats
					if (rest.length === 0) return [top];

					// If right, maybe put it further back? For now, random re-insert for infinite play
					const minIndex = 3; // Put it at least 3 cards back if possible
					const maxIndex = rest.length;
					const insertIndex =
						Math.floor(
							Math.random() * (maxIndex - Math.min(minIndex, maxIndex) + 1),
						) + Math.min(minIndex, maxIndex);

					const newDeck = [...rest];
					newDeck.splice(insertIndex, 0, top);
					return newDeck;
				});
				setIsProcessing(false);
			}, 200);
		},
		[isExamMode, isProcessing],
	);

	const handleFlip = useCallback(() => setIsFlipped((prev) => !prev), []);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.repeat) return;
			// Only allow interaction if cards exist
			if (cards.length === 0) return;

			if (e.key === "ArrowLeft") triggerTransition("left");
			if (e.key === "ArrowRight") triggerTransition("right");
			if (e.key === " " || e.key === "Enter") {
				e.preventDefault();
				handleFlip();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [triggerTransition, handleFlip, cards.length]);

	const menuItems = [
		{
			title: "Control Systems",
			key: "Control Systems" as const,
			icon: BookOpen,
		},
		{
			title: "Machines Electriques",
			key: "Machines Electriques" as const,
			icon: Zap,
		},
		{
			title: "TDS",
			key: "TDS" as const,
			icon: Book,
		},
	];

	const handleSectionClick = (key: typeof activeSection) => {
		if (key === activeSection) return;
		// Reset stats instantly to prevent "flashing" incorrect percentages
		setCorrectCounts({});
		setIsSwitchingSection(true);
		setActiveSection(key);
		setActiveCategory("All");
	};

	const handleRestart = () => {
		const source = getSource(activeSection);
		const filteredSource =
			activeCategory === "All"
				? source
				: source.filter((c) => c.week === activeCategory);
		setCards(shuffleCards(filteredSource));
		setCorrectCounts({});
		setIsFlipped(false);
	};

	return (
		<div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--bg-color)]">
			{/* Minimalist Navigation */}
			<nav className="absolute top-8 left-8 flex flex-col gap-6 z-50">
				{menuItems.map((item) => (
					<button
						key={item.key}
						type="button"
						onClick={() => handleSectionClick(item.key)}
						className={cn(
							"flex items-center gap-3 text-sm font-medium group text-left bg-transparent hover:bg-transparent focus:bg-transparent outline-none ring-0 focus:ring-0 transition-opacity duration-100 ease-in-out",
							activeSection === item.key
								? "text-[var(--text-primary)] opacity-100"
								: "text-[var(--text-secondary)] opacity-40 hover:opacity-100",
						)}
					>
						<item.icon
							className="size-5"
							strokeWidth={activeSection === item.key ? 2.5 : 2}
						/>
						<span className="tracking-wide text-nowrap">{item.title}</span>
					</button>
				))}
			</nav>

			{/* Top Right Controls */}
			<div className="absolute top-8 right-8 flex items-center gap-6 z-[100]">
				<CategoryDropdown
					categories={categories}
					activeCategory={activeCategory}
					onSelect={setActiveCategory}
				/>

				{/* Restart Button - kept for functionality but minimalist */}
				{(cards.length === 0 || isExamMode) && (
					<button
						type="button"
						onClick={handleRestart}
						className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors opacity-50 hover:opacity-100"
						title="Restart Deck"
					>
						<RefreshCcw className="size-5" />
					</button>
				)}

				{/* Exam Mode Toggle */}
				<button
					type="button"
					onClick={() => setIsExamMode(!isExamMode)}
					className={cn(
						"flex items-center gap-2 px-2 py-1 text-sm font-medium transition-colors duration-200 outline-none bg-transparent hover:bg-transparent focus:bg-transparent ring-0 border-none",
						isExamMode
							? "text-[var(--text-primary)]"
							: "text-[var(--text-secondary)] opacity-50 hover:opacity-100",
					)}
				>
					<Trophy className="size-4" />
					<span>Exam Mode</span>
					{/* Simple Toggle Switch */}
					<div
						className={cn(
							"w-6 h-3 rounded-full relative ml-1 transition-colors duration-300",
							isExamMode
								? "bg-[var(--text-primary)]"
								: "bg-[var(--text-secondary)]/30",
						)}
					>
						<div
							className={cn(
								"absolute top-0.5 w-2 h-2 rounded-full bg-[var(--bg-color)] transition-all duration-300 shadow-sm",
								isExamMode ? "right-0.5" : "left-0.5",
							)}
						/>
					</div>
				</button>
			</div>

			{/* Stats Sidebar (Only in Exam Mode) - Minimalist */}
			<AnimatePresence>
				{isExamMode && (
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 20 }}
						transition={{ duration: 0 }}
						className="absolute top-1/2 right-12 -translate-y-1/2 z-[100] hidden xl:flex flex-col gap-6 w-64 pointer-events-none select-none"
					>
						{categories.map((cat) => {
							const total = sectionTotals[cat] || 1;
							const correct = correctCounts[cat] || 0;
							const percentage = Math.min(
								100,
								Math.round((correct / total) * 100),
							);
							const isComplete = correct === total;

							return (
								<div key={cat} className="flex flex-col gap-2">
									<div className="flex justify-between items-baseline text-sm font-medium text-[var(--text-secondary)]">
										<span
											className={cn(
												"flex-1 truncate mr-2",
												isComplete && "text-[var(--text-primary)]",
											)}
										>
											{cat}
										</span>
										<span className="opacity-70 tabular-nums">
											{percentage}%
										</span>
									</div>
									<div className="h-[2px] w-full bg-[var(--text-secondary)]/10 rounded-full overflow-hidden">
										<motion.div
											className={cn(
												"h-full",
												isComplete
													? "bg-[var(--text-primary)]"
													: "bg-[var(--text-primary)]/80",
											)}
											initial={{ width: 0 }}
											animate={{ width: `${percentage}%` }}
											transition={{ duration: 0.6, ease: "easeOut" }}
										/>
									</div>
								</div>
							);
						})}
					</motion.div>
				)}
			</AnimatePresence>

			{/* Main Content Area */}
			<div className="flex-1 w-full flex flex-col items-center justify-center relative">
				{cards.length > 0 ? (
					<div className="perspective-container relative w-full h-full flex items-center justify-center">
						{/* Background Stack (Next cards in deck) */}
						{Array.from({ length: 2 })
							.map((_, i) => i + 1)
							.reverse()
							.map((offset) => {
								const card = cards[offset];
								if (!card) return null;

								const scale = 1 - offset * 0.05;
								const y = offset * 24;
								const zIndex = -offset;

								return (
									<motion.div
										key={card.id}
										className="absolute w-full h-full flex items-center justify-center pointer-events-none"
										initial={{ scale, y, opacity: 0 }}
										animate={{ scale, y, opacity: 1 }}
										transition={{ duration: 0.4, ease: "easeOut" }}
										style={{ zIndex }}
									>
										<Flashcard
											card={card}
											isFlipped={false}
											onFlip={() => {}}
											onSwipe={() => {}}
											disabled={true}
											enableEnterAnimation={false}
										/>
									</motion.div>
								);
							})}

						{/* Current Card (Foreground) */}
						<div
							className="absolute w-full h-full flex items-center justify-center"
							style={{ zIndex: 10 }}
						>
							<AnimatePresence initial={false} mode="popLayout">
								{currentCard ? (
									<Flashcard
										key={currentCard.id}
										card={currentCard}
										isFlipped={isFlipped}
										onFlip={handleFlip}
										onSwipe={triggerTransition}
										direction={direction}
										enableEnterAnimation={!isSwitchingSection}
										enableExitAnimation={!isSwitchingSection}
									/>
								) : null}
							</AnimatePresence>
						</div>
					</div>
				) : (
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						className="flex flex-col items-center gap-4 text-[var(--text-secondary)]"
					>
						<div className="text-2xl font-light">All caught up!</div>
						<div className="text-sm opacity-60">
							Switch categories or refresh to restart
						</div>
					</motion.div>
				)}
			</div>
		</div>
	);
}

export default App;
