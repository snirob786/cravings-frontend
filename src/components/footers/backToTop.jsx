import { ChevronUp, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const BackToTop = ({}) => {
  const [theme, setTheme] = useState(""); // State to manage the current theme

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
    <>
      <div class="fixed lg:bottom-5 end-5 bottom-18 flex flex-col items-center bg-primary/25 rounded-full z-10">
        <button
          class="h-0 w-8 opacity-0 flex justify-center items-center transition-all duration-500 translate-y-5 z-10"
          data-toggle="back-to-top"
          onClick={() => handleThemeChange("dark")}
        >
          <ChevronUp
            class="h-5 w-5 text-primary-500 mt-1"
            data-lucide="chevron-up"
          />
        </button>
        <button class="rounded-full h-10 w-10 bg-primary text-white flex justify-center items-center z-20">
          {theme === "light" ? (
            <Sun
              class="h-5 w-5"
              data-lucide="sun"
              id="light-theme"
              onClick={() => handleThemeChange("dark")}
            />
          ) : (
            <Moon
              class="h-5 w-5"
              data-lucide="moon"
              id="dark-theme"
              onClick={() => handleThemeChange("light")}
            />
          )}
        </button>
      </div>
    </>
  );
};

export default BackToTop;
