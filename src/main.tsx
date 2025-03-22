import React from "react";
import ReactDOM from "react-dom/client";
import { DailyProvider } from "@daily-co/daily-react";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DailyProvider>
      <App />
    </DailyProvider>
  </React.StrictMode>,
);
