import { Provider } from "@/components/ui/provider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Day1 from "./day1.jsx";
import Day2 from "./day2.jsx";
import Day3 from "./day3/day3";
import NavBar from "./components/layout/header";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="day1" element={<Day1 />} />
          <Route path="day2" element={<Day2 />} />
          <Route path="day3" element={<Day3 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
