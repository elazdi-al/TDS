import { SubjectLayout } from "@/components/SubjectLayout";
import { subjectById } from "@/data/subjects";

export function TdsPage() {
	return <SubjectLayout subject={subjectById.tds} />;
}
