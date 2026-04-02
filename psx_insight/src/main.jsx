import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import ForgotPassword from "./pages/forgotPassword.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  </BrowserRouter>,
);
