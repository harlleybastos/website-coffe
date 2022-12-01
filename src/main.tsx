import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppRoutes } from "./routes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <AppRoutes />
    <Footer />
  </React.StrictMode>
);
