import { useEffect, useState } from "react";
import {
	Book,
	BookOpen,
	Database,
	type LucideIcon,
	Zap,
} from "lucide-react";
import { CourseDeck } from "@/components/CourseDeck";
import { controlSystemsCards, machinesCards, tdsCards } from "@/data/cards";
import { disCards } from "@/data/disCards";
import { cn } from "@/lib/utils";

type SectionKey =
	| "Control Systems"
	| "Machines Electriques"
	| "TDS"
	| "DIS";

interface SectionItem {
	title: SectionKey;
	icon: LucideIcon;
}

const sections: SectionItem[] = [
	{
		title: "Control Systems",
		icon: BookOpen,
	},
	{
		title: "Machines Electriques",
		icon: Zap,
	},
	{
		title: "TDS",
		icon: Book,
	},
	{
		title: "DIS",
		icon: Database,
	},
];

const getSource = (section: SectionKey) => {
	switch (section) {
		case "Control Systems":
			return controlSystemsCards;
		case "Machines Electriques":
			return machinesCards;
		case "TDS":
			return tdsCards;
		case "DIS":
			return disCards;
	}
};

export function HomePage() {
	const [activeSection, setActiveSection] =
		useState<SectionKey>("Control Systems");

	useEffect(() => {
		document.title = `${activeSection} Flashcards`;
	}, [activeSection]);

	return (
		<div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--bg-color)]">
			<nav className="absolute top-8 left-8 flex flex-col gap-6 z-50">
				{sections.map((item) => (
					<button
						key={item.title}
						type="button"
						onClick={() => setActiveSection(item.title)}
						className={cn(
							"flex items-center gap-3 text-sm font-medium group text-left bg-transparent hover:bg-transparent focus:bg-transparent outline-none ring-0 focus:ring-0 transition-opacity duration-100 ease-in-out",
							activeSection === item.title
								? "text-[var(--text-primary)] opacity-100"
								: "text-[var(--text-secondary)] opacity-40 hover:opacity-100",
						)}
					>
						<item.icon
							className="size-5"
							strokeWidth={activeSection === item.title ? 2.5 : 2}
						/>
						<span className="tracking-wide text-nowrap">{item.title}</span>
					</button>
				))}
			</nav>

			<CourseDeck
				key={activeSection}
				sourceCards={getSource(activeSection)}
				emptyDescription="Add DIS cards to src/data/disCards.ts to populate this course."
			/>
		</div>
	);
}
