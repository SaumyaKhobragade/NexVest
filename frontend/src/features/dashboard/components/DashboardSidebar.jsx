import { NavLink } from "react-router-dom";

function DashboardSidebar() {
    const linkClassName = ({ isActive }) =>
        `d-block text-decoration-none px-3 py-2 rounded ${isActive ? "bg-primary text-white" : "text-light"}`;

    return (
        <aside className="bg-dark text-white p-3" style={{ minWidth: "240px" }}>
            <h2 className="h5 mb-4">Dashboard</h2>
            <nav className="d-grid gap-2">
                <NavLink to="/dashboard" end className={linkClassName}>
                    Summary
                </NavLink>
                <NavLink to="/dashboard/orders" className={linkClassName}>
                    Orders
                </NavLink>
                <NavLink to="/dashboard/holdings" className={linkClassName}>
                    Holdings
                </NavLink>
                <NavLink to="/dashboard/positions" className={linkClassName}>
                    Positions
                </NavLink>
                <NavLink to="/dashboard/funds" className={linkClassName}>
                    Funds
                </NavLink>
                <NavLink to="/dashboard/apps" className={linkClassName}>
                    Apps
                </NavLink>
            </nav>
        </aside>
    );
}

export default DashboardSidebar;