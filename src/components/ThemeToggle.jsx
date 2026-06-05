import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  //////////Mee code eka ghuwama reload krddi podi stutter ekk enwa dark mode thiyla reload weddi milisecond late ekk thiynwa render wenna

  //   const [isDarkMode, setIsDarkMode] = useState(false);

  //   useEffect(() => {
  //     // Check localStorage for theme preference on component mount
  //     const storedTheme = localStorage.getItem("theme");

  //     if (storedTheme === "dark") {
  //       setIsDarkMode(true);
  //       document.documentElement.classList.add("dark");
  //     } else {
  //       document.documentElement.classList.remove("dark");
  //       setIsDarkMode(false);
  //     }
  //   }, []);
  //   const toggleTheme = () => {
  //     // Here you can also add logic to actually change the theme of your application
  //     if (isDarkMode) {
  //       document.documentElement.classList.remove("dark");

  //       //The localStorage is used to store the theme preference of the user, so that it can be persisted across sessions (When reload the last chosen theme is applied).
  //       // UseEffect is used to check the localStorage for the theme preference when the component mounts, and apply the theme accordingly.,

  //       localStorage.setItem("theme", "light");
  //       setIsDarkMode(false);
  //     } else {
  //       document.documentElement.classList.add("dark");
  //       localStorage.setItem("theme", "dark");
  //       setIsDarkMode(true);
  //     }
  //   };

  //////////Mekedi ehma wen naa, uda thiyana ekth hri, ee logical comments mewtath adali poddi wens wenne

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;

    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  //This multiple tailwind classes are merged using cn function.
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 p-2 rounded-full transition-colors duration-300",
        "sm:top-5 sm:right-5 sm:left-auto sm:translate-x-0",
        "focus:outline-hidden",
      )}
    >
      {/*If in dark mode, show moon icon, else show sun icon*/}
      {isDarkMode ? (
        <Moon className="h-6 w-6 text-yellow-300" />
      ) : (
        <Sun className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
