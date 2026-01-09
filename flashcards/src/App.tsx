import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Flashcard } from "./components/Flashcard";
import { cards as allCards, shuffleCards } from "./data/cards";

function App() {
	const [cards] = useState(() => shuffleCards(allCards));
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isFlipped, setIsFlipped] = useState(false);
	const [direction, setDirection] = useState(0);

	const currentCard = cards[currentIndex % cards.length];
	const nextCard = cards[(currentIndex + 1) % cards.length];

	const triggerTransition = useCallback((dir: "left" | "right") => {
		const dirVal = dir === "right" ? 1 : -1;
		setDirection(dirVal);

		setTimeout(() => {
			setIsFlipped(false);
			setCurrentIndex((prev) => prev + 1);
		}, 10);
	}, []);

	const handleFlip = () => setIsFlipped(!isFlipped);

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
	}, [triggerTransition, isFlipped]);

	return (
		<div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[var(--bg-color)] overflow-hidden">
			<div className="perspective-container relative">
				{/* Next Card (Background Stack) */}
				{/* No AnimatePresence here - we want instant replacement so the old BG card 
            (which is now the new FG card) doesn't linger in the BG slot. 
            The new BG card (Card 2) is the only thing we want to see appearing. */}
				<motion.div
					key={nextCard.id}
					className="absolute top-0 left-0 w-full h-full"
					initial={{ scale: 0.95, y: 20, opacity: 0 }}
					animate={{ scale: 1, y: 0, opacity: 1 }}
					transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
					style={{ zIndex: 0 }}
				>
					<Flashcard
						card={nextCard}
						isFlipped={false}
						onFlip={() => {}}
						onSwipe={() => {}}
						disabled={true}
					/>
				</motion.div>

				{/* Current Card (Foreground) */}
				<AnimatePresence initial={false}>
					<Flashcard
						key={currentCard.id}
						card={currentCard}
						isFlipped={isFlipped}
						onFlip={handleFlip}
						onSwipe={triggerTransition}
						direction={direction}
					/>
				</AnimatePresence>
			</div>	
		</div>
	);
}

export default App;
