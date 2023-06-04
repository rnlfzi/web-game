import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AddPage from "./pages/AddPage";
import GamePage from "./pages/GamePage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import LeaderboardPage from "./pages/LeaderboardPage";
import LoginPage from "./pages/LoginPage";
import ProfilPage from "./pages/ProfilPage";
import RegisterPage from "./pages/RegisterPage";
import StartPage from "./pages/StartPage";

const App = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const pathname = window.location.pathname;

  useEffect(() => {
    if ( !token && 
      pathname !== "/login" &&
      pathname !== "/register" &&
      pathname !== "/"
    ) navigate("/login")
  }, [pathname, token, navigate])

  if (pathname === "/login" || pathname === "/register") {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    )
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/:username" element={<ProfilPage />} />
        <Route path="/games/:gameId" element={<GamePage />} />
        <Route path="/games/start" element={<StartPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
