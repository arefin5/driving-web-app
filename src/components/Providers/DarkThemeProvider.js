"use client";

import { ThemeProvider } from "next-themes";

const DarkThemeProvider = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;
