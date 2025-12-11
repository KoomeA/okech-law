import { createRoot } from "react-dom/client";
import { loadAnalytics } from "./analytics";
import App from "./App";
import "./index.css";

loadAnalytics();

createRoot(document.getElementById("root")!).render(<App />);
