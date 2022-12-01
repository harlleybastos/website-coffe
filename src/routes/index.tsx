import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "../App";

import { ProductDetails } from "../components/ProductDetails";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/products/:productId"
          element={<ProductDetails />}
        />
      </Routes>
    </Router>
  );
};
