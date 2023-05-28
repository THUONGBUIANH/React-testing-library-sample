import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const prepare = async (): Promise<void> => {
  if (import.meta.env.DEV) {
    const { worker } = await import("./mock/browser");
    worker.start();
  }
};

prepare().then(() => {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
