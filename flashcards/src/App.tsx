import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Book, BookOpen, Zap } from "lucide-react";
import { Flashcard } from "./components/Flashcard";
import {
	controlSystemsCards,
	machinesCards,
	tdsCards,
	shuffleCards,
} from "./data/cards";
import { cn } from "@/lib/utils";

function App() {
	const [activeSection, setActiveSection] = useState<
		"Machines Electriques" | "Control Systems" | "TDS"
	>("Control Systems");
	const [cards, setCards] = useState(() => shuffleCards(controlSystemsCards));
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isFlipped, setIsFlipped] = useState(false);
	const [direction, setDirection] = useState(0);
	const [isSwitchingSection, setIsSwitchingSection] = useState(false);

	useEffect(() => {
		let source = controlSystemsCards;
		switch (activeSection) {
			case "Control Systems":
				source = controlSystemsCards;
				break;
			case "Machines Electriques":
				source = machinesCards;
				break;
			case "TDS":
				source = tdsCards;
				break;
		}
		setCards(shuffleCards(source));
		setCurrentIndex(0);
		setIsFlipped(false);
		// We keep isSwitchingSection true until the cards are updated and rendered once
	}, [activeSection]);

	useEffect(() => {
		if (isSwitchingSection) {
			const timer = setTimeout(() => setIsSwitchingSection(false), 50);
			return () => clearTimeout(timer);
		}
	}, [cards, isSwitchingSection]);

	const currentCard = cards[currentIndex % cards.length];

	const triggerTransition = useCallback((dir: "left" | "right") => {
		const dirVal = dir === "right" ? 1 : -1;
		setDirection(dirVal);

		setTimeout(() => {
			setIsFlipped(false);
			setCurrentIndex((prev) => prev + 1);
		}, 10);
	}, []);

	const handleFlip = useCallback(() => setIsFlipped((prev) => !prev), []);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.repeat) return;
			if (e.key === "ArrowLeft") triggerTransition("left");
			if (e.key === "ArrowRight") triggerTransition("right");
			if (e.key === " " || e.key === "Enter") {
				e.preventDefault();
				handleFlip();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [triggerTransition, handleFlip]);

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
		setIsSwitchingSection(true);
		setActiveSection(key);
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

			{/* Main Content Area */}
			<div className="flex-1 w-full flex flex-col items-center justify-center relative">
				{cards.length > 0 ? (
					<div className="perspective-container relative w-full h-full flex items-center justify-center">
						{/* Background Stack */}
						{Array.from({ length: 2 })
							.map((_, i) => i + 1)
							.reverse()
							.map((offset) => {
								const cardIndex = (currentIndex + offset) % cards.length;
								const card = cards[cardIndex];
								const scale = 1 - offset * 0.05; // 0.95, 0.90
								const y = offset * 24; // 24px, 48px
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
						<div // Moved div outside AnimatePresence to ensure proper exit animations
							className="absolute w-full h-full flex items-center justify-center"
							style={{ zIndex: 10 }}
						>
							<AnimatePresence initial={false}>
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
							</AnimatePresence>
						</div>
					</div>
				) : (
					<div className="text-[var(--text-secondary)] text-lg animate-pulse">
						No cards available
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
