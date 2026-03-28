import { SubjectLayout } from "@/components/SubjectLayout";
import { subjectById } from "@/data/subjects";

export function ControlSystemsPage() {
	return <SubjectLayout subject={subjectById["control-systems"]} />;
}
