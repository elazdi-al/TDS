import { Book, BookOpen, Database, type LucideIcon, Zap } from "lucide-react";
import type { Card } from "./cardUtils";
import { controlSystemsCards, machinesCards, tdsCards } from "./cards";
import { disCards } from "./disCards";

export type SubjectId =
	| "control-systems"
	| "machines-electriques"
	| "tds"
	| "dis";

export interface SubjectDefinition {
	id: SubjectId;
	path: `/${SubjectId}`;
	title: string;
	icon: LucideIcon;
	cards: Card[];
	emptyDescription?: string;
}

export const subjects: SubjectDefinition[] = [
	{
		id: "control-systems",
		path: "/control-systems",
		title: "Control Systems",
		icon: BookOpen,
		cards: controlSystemsCards,
	},
	{
		id: "machines-electriques",
		path: "/machines-electriques",
		title: "Machines Electriques",
		icon: Zap,
		cards: machinesCards,
	},
	{
		id: "tds",
		path: "/tds",
		title: "TDS",
		icon: Book,
		cards: tdsCards,
	},
	{
		id: "dis",
		path: "/dis",
		title: "DIS",
		icon: Database,
		cards: disCards,
		emptyDescription: "Add DIS cards to src/data/disCards.ts to populate this course.",
	},
];

export const defaultSubjectPath = subjects[0]?.path ?? "/control-systems";

export const subjectById = Object.fromEntries(
	subjects.map((subject) => [subject.id, subject]),
) as Record<SubjectId, SubjectDefinition>;
