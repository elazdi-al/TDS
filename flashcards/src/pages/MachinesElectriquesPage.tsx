import { SubjectLayout } from "@/components/SubjectLayout";
import { subjectById } from "@/data/subjects";

export function MachinesElectriquesPage() {
	return <SubjectLayout subject={subjectById["machines-electriques"]} />;
}
