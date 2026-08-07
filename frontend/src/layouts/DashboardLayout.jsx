import { Outlet } from "react-router-dom";

function DashboardLayout() {
	return (
		<div className="container-fluid min-vh-100 p-0">
			<div className="bg-dark text-white px-4 py-3 d-flex align-items-center justify-content-between">
				<h1 className="h5 mb-0">NexVest Dashboard</h1>
				<span className="text-secondary">Layout ready for nested routes</span>
			</div>
			<main className="p-4">
				<Outlet />
			</main>
		</div>
	);
}

export default DashboardLayout;
