if (import.meta.env.DEV) {
  import("eruda").then(({ default: eruda }) => {
    eruda.init();
  });
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Search from "./components/Search/Search";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/:cityName?" element={<App />}>
          <Route index element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
