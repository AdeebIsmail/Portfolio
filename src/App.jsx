import React, { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/minimal";
import Books from "./pages/books";

export const ThemeContext = createContext();

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
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
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
