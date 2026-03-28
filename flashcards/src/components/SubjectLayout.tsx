import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CourseDeck } from "@/components/CourseDeck";
import { subjects, type SubjectDefinition } from "@/data/subjects";
import { cn } from "@/lib/utils";

interface SubjectLayoutProps {
	subject: SubjectDefinition;
}

export function SubjectLayout({ subject }: SubjectLayoutProps) {
	useEffect(() => {
		document.title = `${subject.title} Flashcards`;
	}, [subject.title]);

	return (
		<div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[var(--bg-color)]">
			<nav className="absolute top-8 left-8 z-50 flex flex-col gap-6">
				{subjects.map((item) => (
					<NavLink
						key={item.id}
						to={item.path}
						className={({ isActive }) =>
							cn(
								"flex items-center gap-3 bg-transparent text-left text-sm font-medium outline-none ring-0 transition-opacity duration-100 ease-in-out hover:bg-transparent focus:bg-transparent focus:ring-0",
								isActive
									? "text-[var(--text-primary)] opacity-100"
									: "text-[var(--text-secondary)] opacity-40 hover:opacity-100",
							)
						}
					>
						{({ isActive }) => (
							<>
								<item.icon className="size-5" strokeWidth={isActive ? 2.5 : 2} />
								<span className="text-nowrap tracking-wide">{item.title}</span>
							</>
						)}
					</NavLink>
				))}
			</nav>

			<CourseDeck
				key={subject.id}
				sourceCards={subject.cards}
				emptyDescription={subject.emptyDescription}
			/>
		</div>
	);
}
