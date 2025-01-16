import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Router } from "react-router-dom";
import Context from "./utils/Context.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <Context>
    <BrowserRouter>
      <Router basename="/E-com/">
        <App />
      </Router>
      <ToastContainer />
    </BrowserRouter>
  </Context>
);
