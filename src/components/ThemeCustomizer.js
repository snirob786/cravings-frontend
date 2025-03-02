import React, { useState, useEffect } from "react";

const ThemeCustomizer = () => {
  const [theme, setTheme] = useState("light"); // State to manage the current theme

  useEffect(() => {
    // Initialize the theme based on localStorage
    const config = localStorage.getItem("__FOOD_CONFIG__");
    if (config) {
      const parsed = JSON.parse(config);
      setTheme(parsed.theme || "light");
    }

    // Apply the initial theme to the HTML element
    document.documentElement.classList.toggle("dark", theme === "dark");

    // Cleanup function (optional)
    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, []); // Run once on mount

  useEffect(() => {
    // Update the theme in localStorage whenever it changes
    localStorage.setItem("__FOOD_CONFIG__", JSON.stringify({ theme }));
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]); // Run whenever the theme changes

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme); // Update the theme state
  };

  return (
    <div>
      {/* Buttons to toggle between light and dark themes */}
      <button
        id="light-theme"
        className={theme === "dark" ? "hidden" : ""}
        onClick={() => handleThemeChange("dark")}
      >
        Switch to Dark Theme
      </button>

      <button
        id="dark-theme"
        className={theme === "light" ? "hidden" : ""}
        onClick={() => handleThemeChange("light")}
      >
        Switch to Light Theme
      </button>
    </div>
  );
};

export default ThemeCustomizer;
