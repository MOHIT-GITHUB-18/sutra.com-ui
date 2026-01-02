import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Popup from "./components/Popup";
import Navbar from "./uiComponents/Navbar";
import Sidebar from "./uiComponents/sidebar";
import Tree from "./uiComponents/TreeComponent/TreeMain";
import ComingSoon from "./components/ComingSoon";
import AppNavbar from "./components/AppNavbar";

export default function App() {

  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={<Home isDark={isDark} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/navbar"
            element={<Navbar isDark={isDark} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/tree"
            element={<Tree isDark={isDark} toggleTheme={toggleTheme} />}
          />
          <Route
            element={<Sidebar isDark={isDark} toggleTheme={toggleTheme} />}
          />
          <Route
            element={<AppNavbar isDark={isDark} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/comingsoon"
            element={<ComingSoon isDark={isDark} toggleTheme={toggleTheme} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
