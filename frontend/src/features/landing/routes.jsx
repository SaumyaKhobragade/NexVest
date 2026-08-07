import { Route } from "react-router-dom";

import LandingLayout from "./layouts/LandingLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";
import ProductsPage from "./pages/ProductsPage";
import SignupPage from "./pages/SignupPage";
import SupportPage from "./pages/SupportPage";

export const LandingRoutes = (
    <Route path="/" element={<LandingLayout />}>
        <Route index element={<HomePage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="product" element={<ProductsPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="support" element={<SupportPage />} />
    </Route>
);