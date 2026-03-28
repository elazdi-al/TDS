import {
	HashRouter,
	Route,
	Routes,
} from "react-router-dom";
import { ControlSystemsPage } from "@/pages/ControlSystemsPage";
import { DisPage } from "@/pages/DisPage";
import { HomePage } from "@/pages/HomePage";
import { MachinesElectriquesPage } from "@/pages/MachinesElectriquesPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { TdsPage } from "@/pages/TdsPage";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/control-systems" element={<ControlSystemsPage />} />
				<Route
					path="/machines-electriques"
					element={<MachinesElectriquesPage />}
				/>
				<Route path="/tds" element={<TdsPage />} />
				<Route path="/dis" element={<DisPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
