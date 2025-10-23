// components/ThemeToggle.jsx
"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // 'dark' or 'light'
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "dark" || saved === "light") {
        setTheme(saved);
      } else {
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(prefersDark ? "dark" : "light");
      }
    } catch (e) {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    } catch (e) {}
  }, [theme]);

  function toggle() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <button
      onClick={toggle}
      aria-pressed={theme === "dark"}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="fixed right-5 bottom-5 z-9999 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border transition-transform active:scale-95
                 bg-white/90 dark:bg-white/5 border-black/5 dark:border-white/6 text-black dark:text-white"
    >
      {theme === "dark" ? (
        // show sun icon (means currently dark; click -> light)
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M7.05 7.05L5.636 5.636M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      ) : (
        // show moon icon (means currently light; click -> dark)
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </button>
  );
}
