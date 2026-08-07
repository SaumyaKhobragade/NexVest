import { Outlet } from "react-router-dom";

import DashboardSidebar from "../components/DashboardSidebar";

function DashboardLayout() {
    return (
        <div className="d-flex min-vh-100 bg-light">
            <DashboardSidebar />
            <main className="flex-grow-1 p-4">
                <Outlet />
            </main>
        </div>
    );
}

export default DashboardLayout;