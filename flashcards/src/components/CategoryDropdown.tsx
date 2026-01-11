import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Check, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryDropdownProps {
	categories: string[];
	activeCategory: string;
	onSelect: (category: string) => void;
}

export function CategoryDropdown({
	categories,
	activeCategory,
	onSelect,
}: CategoryDropdownProps) {
	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	// Close on click outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<div className="relative z-150" ref={containerRef}>
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className={cn(
					"flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 outline-none select-none",
					// Cleaner Inset: Very subtle inner shadow, almost invisible border
					"bg-[var(--bg-color)] shadow-[inset_0_1px_3px_rgba(0,0,0,0.03)] border border-[var(--text-secondary)]/5",
					"hover:border-[var(--text-secondary)]/20 hover:shadow-[inset_0_1px_4px_rgba(0,0,0,0.06)]",
					"text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
					isOpen &&
						"border-[var(--text-primary)]/20 text-[var(--text-primary)] shadow-[inset_0_2px_5px_rgba(0,0,0,0.05)]",
				)}
			>
				<Filter className="size-3.5 opacity-60" />
				<span className="max-w-[140px] truncate tracking-wide">
					{activeCategory === "All" ? "All Topics" : activeCategory}
				</span>
				<ChevronDown
					className={cn(
						"size-3.5 opacity-40 transition-transform duration-200 ml-1",
						isOpen && "rotate-180 opacity-80",
					)}
				/>
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: 6, scale: 0.98 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 4, scale: 0.98 }}
						transition={{ duration: 0.15, ease: "easeOut" }}
						className="absolute top-full right-0 mt-3 w-64 max-h-[60vh] overflow-y-auto rounded-2xl border border-[var(--text-secondary)]/5 bg-[var(--bg-color)]/80 backdrop-blur-2xl shadow-2xl p-1.5 flex flex-col gap-0.5 scrollbar-thin scrollbar-thumb-[var(--text-secondary)]/10 scrollbar-track-transparent"
					>
						{/* "All" Option */}
						<button
							type="button"
							onClick={() => {
								onSelect("All");
								setIsOpen(false);
							}}
							className={cn(
								"w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all duration-200 flex items-center justify-between group",
								activeCategory === "All"
									? "bg-[var(--text-primary)]/5 text-[var(--text-primary)] font-medium"
									: "text-[var(--text-secondary)] hover:bg-[var(--text-secondary)]/5 hover:text-[var(--text-primary)]",
							)}
						>
							<span className="opacity-90">All Topics</span>
							{activeCategory === "All" && (
								<motion.div
									initial={{ scale: 0.5, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									className="text-[var(--text-primary)]"
								>
									<Check className="size-3.5" strokeWidth={2.5} />
								</motion.div>
							)}
						</button>
						<div className="h-2" /> {/* Spacer instead of line */}
						{categories.map((cat) => (
							<button
								key={cat}
								type="button"
								onClick={() => {
									onSelect(cat);
									setIsOpen(false);
								}}
								className={cn(
									"w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all duration-200 flex items-center justify-between group",
									activeCategory === cat
										? "bg-[var(--text-primary)]/5 text-[var(--text-primary)] font-medium"
										: "text-[var(--text-secondary)] hover:bg-[var(--text-secondary)]/5 hover:text-[var(--text-primary)]",
								)}
							>
								<span className="truncate opacity-90 group-hover:opacity-100 pr-4">
									{cat}
								</span>
								{activeCategory === cat && (
									<motion.div
										initial={{ scale: 0.5, opacity: 0 }}
										animate={{ scale: 1, opacity: 1 }}
										className="text-[var(--text-primary)]"
									>
										<Check className="size-3.5" strokeWidth={2.5} />
									</motion.div>
								)}
							</button>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
