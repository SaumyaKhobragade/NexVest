import { Routes, Route } from 'react-router-dom';

import HomePage from "./pages/home/HomePage";
import Signup from "./pages/signup/Signup";
import AboutPage from "./pages/about/AboutPage";
import ProductPage from "./pages/products/ProductsPage";
import PricingPage from "./pages/pricing/PricingPage";
import SupportPage from "./pages/support/SupportPage";

import NotFound from "./components/ui/NotFound";
import LandingLayout from "./layouts/LandingLayout";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout />}>
        <Route index element={<HomePage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="dashboard/*" element={<DashboardLayout />} />
    </Routes>
  )
}

export default App;
