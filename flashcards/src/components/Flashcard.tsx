import {
	motion,
	useMotionValue,
	useTransform,
	type PanInfo,
} from "motion/react";
import type { Card } from "../data/cards";

interface FlashcardProps {
	card: Card;
	isFlipped: boolean;
	onFlip: () => void;
	onSwipe: (direction: "left" | "right") => void;
	disabled?: boolean;
	direction?: number;
}

export function Flashcard({
	card,
	isFlipped,
	onFlip,
	onSwipe,
	disabled = false,
	direction = 0,
}: FlashcardProps) {
	const x = useMotionValue(0);
	const rotate = useTransform(x, [-200, 200], [-8, 8]); // Reduced rotation for subtlety
	const opacity = useTransform(
		x,
		[-200, -150, 0, 150, 200],
		[0.5, 1, 1, 1, 0.5],
	);

	const handleDragEnd = (_: unknown, info: PanInfo) => {
		const threshold = 100; // Increased threshold for intentionality
		const velocityThreshold = 500; // Require a flick

		if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
			onSwipe("right");
		} else if (
			info.offset.x < -threshold ||
			info.velocity.x < -velocityThreshold
		) {
			onSwipe("left");
		}
	};

	// Match the visual state of the disabled card exactly
	const initialScale = 0.92;
	const initialY = 20;

	const variants = {
		initial: {
			scale: initialScale,
			y: initialY,
			opacity: 0,
		},
		animate: {
			scale: 1,
			y: 0,
			opacity: 1,
			transition: {
				type: "spring" as const,
				stiffness: 300,
				damping: 25,
				mass: 0.8,
			},
		},
		exit: (customDir: number) => ({
			x: customDir * 1000,
			rotate: customDir * 45,
			opacity: 0,
			scale: 0.9,
			transition: {
				duration: 0.4,
				ease: [0.32, 0.72, 0, 1] as const, // Custom snappy ease
			},
		}),
	};

	if (disabled) {
		return (
			<div
				className="card"
				style={{
					transform: `scale(${initialScale}) translateY(${initialY}px)`,
					opacity: 1,
					zIndex: 0,
				}}
			>
				<div
					className="card-face"
					style={{
						filter: "contrast(0.9) brightness(1.1)", // Subtle depth effect
						boxShadow: "none", // Background cards shouldn't cast strong shadows? Or maybe soft one?
						backgroundColor: "var(--card-bg)",
					}}
				>
					<span className="week-badge" style={{ opacity: 0.5 }}>
						{card.week}
					</span>
					<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[var(--text-primary)] px-4 opacity-30 blur-[1px]">
						{card.front}
					</h2>
				</div>
			</div>
		);
	}

	return (
		<motion.div
			className="card"
			style={{
				x,
				rotate,
				opacity,
				zIndex: 10,
				cursor: "grab",
			}}
			drag="x"
			dragConstraints={{ left: 0, right: 0 }}
			dragElastic={0.1} // Feel a bit tighter
			onDragEnd={handleDragEnd}
			variants={variants}
			initial="initial"
			animate="animate"
			exit="exit"
			custom={direction}
			whileTap={{ scale: 1.05, cursor: "grabbing" }}
		>
			<motion.div
				className="w-full h-full relative preserve-3d"
				onClick={onFlip}
				animate={{
					rotateY: isFlipped ? 180 : 0,
					scale: isFlipped ? 1.02 : 1, // Subtle pop on flip
				}}
				transition={{
					type: "spring",
					stiffness: 260,
					damping: 20,
				}}
				style={{
					transformStyle: "preserve-3d",
				}}
			>
				<div className="card-face card-front">
					<span className="week-badge">{card.week}</span>
					<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[var(--text-primary)] px-4 select-none">
						{card.front}
					</h2>
				</div>

				<div className="card-face card-back">
					<span className="week-badge">{card.week}</span>
					<p className="text-lg md:text-2xl font-light leading-relaxed max-w-prose select-none">
						{card.back}
					</p>
				</div>
			</motion.div>
		</motion.div>
	);
}
