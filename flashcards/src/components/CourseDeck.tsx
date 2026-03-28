import { useState, useCallback, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "motion/react";
import { RefreshCcw, Trophy } from "lucide-react";
import { CategoryDropdown } from "./CategoryDropdown";
import { Flashcard } from "./Flashcard";
import { cn } from "@/lib/utils";
import { shuffleCards, type Card } from "@/data/cardUtils";

interface CourseDeckProps {
	sourceCards: Card[];
	emptyTitle?: string;
	emptyDescription?: string;
}

export function CourseDeck({
	sourceCards,
	emptyTitle = "No cards yet",
	emptyDescription = "Add cards to this course to populate the page.",
}: CourseDeckProps) {
	const [activeCategory, setActiveCategory] = useState("All");
	const [isExamMode, setIsExamMode] = useState(false);
	const [cards, setCards] = useState<Card[]>(() => shuffleCards(sourceCards));
	const [correctCounts, setCorrectCounts] = useState<Record<string, number>>(
		{},
	);
	const [isFlipped, setIsFlipped] = useState(false);
	const [direction, setDirection] = useState(0);
	const [isProcessing, setIsProcessing] = useState(false);

	const sectionTotals = useMemo(() => {
		const totals: Record<string, number> = {};
		for (const card of sourceCards) {
			totals[card.week] = (totals[card.week] || 0) + 1;
		}
		return totals;
	}, [sourceCards]);

	const categories = useMemo(() => {
		return Object.keys(sectionTotals).sort((a, b) =>
			a.localeCompare(b, undefined, { numeric: true }),
		);
	}, [sectionTotals]);

	const getFilteredSource = useCallback(
		(category: string) => {
			if (category === "All") return sourceCards;
			return sourceCards.filter((card) => card.week === category);
		},
		[sourceCards],
	);

	const filteredSource = useMemo(
		() => getFilteredSource(activeCategory),
		[activeCategory, getFilteredSource],
	);

	const resetDeck = useCallback((nextCards: Card[]) => {
		setCards(shuffleCards(nextCards));
		setCorrectCounts({});
		setIsFlipped(false);
		setDirection(0);
		setIsProcessing(false);
	}, []);

	const handleCategorySelect = useCallback(
		(category: string) => {
			setActiveCategory(category);
			resetDeck(getFilteredSource(category));
		},
		[getFilteredSource, resetDeck],
	);

	const currentCard = cards[0];

	const triggerTransition = useCallback(
		(dir: "left" | "right") => {
			if (isProcessing) return;
			setIsProcessing(true);

			const dirVal = dir === "right" ? 1 : -1;
			setDirection(dirVal);

			setTimeout(() => {
				setIsFlipped(false);

				setCards((prevDeck) => {
					if (prevDeck.length === 0) return prevDeck;
					const [top, ...rest] = prevDeck;

					if (isExamMode) {
						if (dir === "right") {
							setCorrectCounts((prevStats) => ({
								...prevStats,
								[top.week]: (prevStats[top.week] || 0) + 1,
							}));
							return rest;
						}

						if (rest.length === 0) return [top];
						const minIndex = 1;
						const maxIndex = rest.length;
						const insertIndex =
							Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
						const newDeck = [...rest];
						newDeck.splice(insertIndex, 0, top);

						return newDeck;
					}

					if (rest.length === 0) return [top];

					const minIndex = 3;
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
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.repeat || cards.length === 0) return;

			if (event.key === "ArrowLeft") triggerTransition("left");
			if (event.key === "ArrowRight") triggerTransition("right");
			if (event.key === " " || event.key === "Enter") {
				event.preventDefault();
				handleFlip();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [triggerTransition, handleFlip, cards.length]);

	const handleRestart = () => {
		resetDeck(filteredSource);
	};

	const isEmptyCourse = sourceCards.length === 0;

	return (
		<>
			<div className="absolute top-8 right-8 flex items-center gap-6 z-[100]">
				<CategoryDropdown
					categories={categories}
					activeCategory={activeCategory}
					onSelect={handleCategorySelect}
				/>

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

			<div className="flex-1 w-full flex flex-col items-center justify-center relative">
				{cards.length > 0 ? (
					<div className="perspective-container relative w-full h-full flex items-center justify-center">
						{Array.from({ length: 2 })
							.map((_, index) => index + 1)
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
						<div className="text-2xl font-light">
							{isEmptyCourse ? emptyTitle : "All caught up!"}
						</div>
						<div className="text-sm opacity-60">
							{isEmptyCourse
								? emptyDescription
								: "Switch categories or refresh to restart"}
						</div>
					</motion.div>
				)}
			</div>
		</>
	);
}
