import { Navigate } from "react-router-dom";
import { defaultSubjectPath } from "@/data/subjects";

export function HomePage() {
	return <Navigate to={defaultSubjectPath} replace />;
}
