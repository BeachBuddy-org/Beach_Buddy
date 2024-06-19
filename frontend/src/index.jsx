import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./App";

const app = document.getElementById("app");
ReactDOMClient.createRoot(app).render(<App />);
