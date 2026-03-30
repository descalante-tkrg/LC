import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FloralDeck from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FloralDeck />
  </StrictMode>
);
