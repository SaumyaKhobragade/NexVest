import { Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";
import Summary from "./pages/Summary";
import Orders from "./pages/Orders";
import Holdings from "./pages/Holdings";
import Positions from "./pages/Positions";
import Funds from "./pages/Funds";
import Apps from "./pages/Apps";

export const DashboardRoutes = (
    <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Summary />} />
        <Route path="orders" element={<Orders />} />
        <Route path="holdings" element={<Holdings />} />
        <Route path="positions" element={<Positions />} />
        <Route path="funds" element={<Funds />} />
        <Route path="apps" element={<Apps />} />
    </Route>
);