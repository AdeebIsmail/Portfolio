import React, { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/minimal";
import Books from "./pages/books";
import Biking from "./pages/bikings";

export const ThemeContext = createContext();

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.backgroundColor = "#000000";
      if (metaThemeColor) metaThemeColor.setAttribute("content", "#000000");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.backgroundColor = "#ffffff";
      if (metaThemeColor) metaThemeColor.setAttribute("content", "#ffffff");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        {/* <Route path="/biking" element={<Biking />} /> */}
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
