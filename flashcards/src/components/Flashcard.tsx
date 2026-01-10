import {
	motion,
	useMotionValue,
	useTransform,
	type PanInfo,
} from "motion/react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import type { Card } from "../data/cards";

interface FlashcardProps {
	card: Card;
	isFlipped: boolean;
	onFlip: () => void;
	onSwipe: (direction: "left" | "right") => void;
	disabled?: boolean;
	direction?: number;
	enableEnterAnimation?: boolean;
	enableExitAnimation?: boolean;
}

export function Flashcard({
	card,
	isFlipped,
	onFlip,
	onSwipe,
	disabled = false,
	direction = 0,
	enableEnterAnimation = true,
	enableExitAnimation = true,
}: FlashcardProps) {
	const x = useMotionValue(0);
	const rotate = useTransform(x, [-200, 200], [-4, 4]); // Reduced rotation for subtlety

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
			x:
				customDir *
				(typeof window !== "undefined" ? window.innerWidth + 500 : 2000),
			rotate: customDir * 20,
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.2, // Fast and snappy
				ease: "easeIn" as const, // Accelerate off screen
			},
		}),
	};

	if (disabled) {
		return (
			<div
				className="card"
				style={{
					zIndex: 0,
				}}
			>
				<div
					className="card-face"
					style={{
						backgroundColor: "var(--card-bg)",
						boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
					}}
				>
					<span className="week-badge" style={{ opacity: 0.8 }}>
						{card.week}
					</span>
					<div className="text-6xl md:text-8xl font-medium tracking-tight text-[var(--text-primary)] px-4 select-none">
						<ReactMarkdown
							remarkPlugins={[remarkMath]}
							rehypePlugins={[rehypeKatex]}
						>
							{card.front}
						</ReactMarkdown>
					</div>
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
				zIndex: 10,
				cursor: "grab",
			}}
			drag="x"
			dragConstraints={{ left: 0, right: 0 }}
			dragElastic={0.7} // Responsive drag
			onDragEnd={handleDragEnd}
			variants={variants}
			initial={enableEnterAnimation ? "initial" : false}
			animate="animate"
			exit={enableExitAnimation ? "exit" : undefined}
			custom={direction}
			whileTap={{ cursor: "grabbing" }}
		>
			<motion.div
				className="w-full h-full relative preserve-3d"
				onClick={onFlip}
				animate={{
					rotateY: isFlipped ? 180 : 0,
				}}
				transition={{
					type: "spring",
					stiffness: 260,
					damping: 40,
				}}
				style={{
					transformStyle: "preserve-3d",
				}}
			>
				<div className="card-face card-front">
					<span className="week-badge">{card.week}</span>
					<div className="text-6xl md:text-8xl font-medium tracking-tight text-[var(--text-primary)] px-4 select-none">
						<ReactMarkdown
							remarkPlugins={[remarkMath]}
							rehypePlugins={[rehypeKatex]}
						>
							{card.front}
						</ReactMarkdown>
					</div>
				</div>

				<div className="card-face card-back">
					<span className="week-badge">{card.week}</span>
					<div className="text-3xl md:text-5xl font-light leading-relaxed max-w-prose select-none">
						<ReactMarkdown
							remarkPlugins={[remarkMath]}
							rehypePlugins={[rehypeKatex]}
						>
							{card.back}
						</ReactMarkdown>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}
