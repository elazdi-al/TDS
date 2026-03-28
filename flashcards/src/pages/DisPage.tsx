import { SubjectLayout } from "@/components/SubjectLayout";
import { subjectById } from "@/data/subjects";

export function DisPage() {
	return <SubjectLayout subject={subjectById.dis} />;
}
