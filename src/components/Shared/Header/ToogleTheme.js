"use client";
import { useEffect, useState } from "react";
import Sun from "/public/assets/header/sun.png";
import Moon from "/public/assets/header/moon.png";
import Image from "next/image";
import { useTheme } from "next-themes";

const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`w-11 n_md:w-14 h-[26px] border border-solid border-transparent dark:border-white md:h-[26px] rounded-full bg-primaryGradiant transition duration-300 focus:outline-none shadow relative`}
    >
      <div
        className={`absolute top-0 h-full leading-5 rounded-full transition-all duration-1000 ${
          theme === "dark"
            ? "translate-x-5 n_md:translate-x-7"
            : "translate-x-0"
        } p-[1px]`}
      >
        <Image
          onClick={toggleTheme}
          className={`rounded-full w-6 h-6 object-cover ${
            theme === "dark" ? "bg-black" : "bg-white"
          }`}
          src={theme === "dark" ? Moon : Sun}
          alt={theme === "dark" ? "dark theme" : "light theme"}
        />
      </div>
    </button>
  );
};

export default ToggleTheme;
