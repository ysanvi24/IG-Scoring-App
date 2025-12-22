import React from "react";
import { Routes, Route } from "react-router-dom";
import PublicPage from "./publicPage";
import AdminPage from "./AdminPage";
import LoginPage from "./LoginPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}