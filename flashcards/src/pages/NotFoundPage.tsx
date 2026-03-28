import { useEffect } from "react";
import { Link } from "react-router-dom";
import { defaultSubjectPath, subjects } from "@/data/subjects";

export function NotFoundPage() {
	useEffect(() => {
		document.title = "Page Not Found";
	}, []);

	return (
		<div className="flex h-screen w-full items-center justify-center bg-[var(--bg-color)] px-6">
			<div className="flex max-w-xl flex-col items-center gap-6 text-center">
				<div className="space-y-3">
					<p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)]">
						404
					</p>
					<h1 className="text-3xl font-light text-[var(--text-primary)]">
						This flashcard page does not exist.
					</h1>
					<p className="text-sm text-[var(--text-secondary)]">
						Pick one of the subjects below to jump back into the deck.
					</p>
				</div>

				<div className="flex flex-wrap items-center justify-center gap-3">
					{subjects.map((subject) => (
						<Link
							key={subject.id}
							to={subject.path}
							className="rounded-full border border-[var(--text-secondary)]/15 px-4 py-2 text-sm text-[var(--text-secondary)] transition-colors hover:border-[var(--text-primary)]/20 hover:text-[var(--text-primary)]"
						>
							{subject.title}
						</Link>
					))}
				</div>

				<Link
					to={defaultSubjectPath}
					className="text-sm font-medium text-[var(--text-primary)] underline underline-offset-4"
				>
					Open the default deck
				</Link>
			</div>
		</div>
	);
}
