"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

function Providers({ children }) {
  return (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      className="text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transaction-colors duration-200"
    >
      {children}
    </ThemeProvider>
  );
}

export default Providers;
