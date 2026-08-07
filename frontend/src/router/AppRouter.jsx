import { Routes, Route } from "react-router-dom";

import { LandingRoutes } from "../features/landing/routes";
import { DashboardRoutes } from "../features/dashboard/routes";
import NotFound from "../components/ui/NotFound";

function AppRouter() {
    return (
        <Routes>
            {LandingRoutes}
            {DashboardRoutes}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRouter;