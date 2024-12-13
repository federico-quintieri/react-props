import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/bodyHeader";
import Card from "./components/bodyCard";
import Footer from "./components/bodyfooter";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="centro">
      <Header />
      <Card />
    </div>
    <Footer />
  </StrictMode>
);
