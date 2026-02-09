"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark" || stored === "light") {
        setTheme(stored);
        document.documentElement.classList.toggle("dark", stored === "dark");
        document.documentElement.classList.toggle("light", stored === "light");
        document.documentElement.setAttribute("data-theme", stored);
        console.log("ThemeToggle:init stored", stored, "html.class:", document.documentElement.className);
        console.log(
          "computed --background:",
          getComputedStyle(document.documentElement).getPropertyValue("--background")
        );
        return;
      }

      const prefersDark =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      const initial = prefersDark ? "dark" : "light";
      setTheme(initial);
      document.documentElement.classList.toggle("dark", initial === "dark");
      document.documentElement.classList.toggle("light", initial === "light");
      document.documentElement.setAttribute("data-theme", initial);
    } catch (e) {
      // localStorage may be unavailable in some environments
    }
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.classList.toggle("light", next === "light");
    document.documentElement.setAttribute("data-theme", next);
    console.log("ThemeToggle:toggle ->", next, "html.class:", document.documentElement.className);
    console.log(
      "computed --background after toggle:",
      getComputedStyle(document.documentElement).getPropertyValue("--background")
    );
  };

  return (
    <Button variant="ghost" size="sm" onClick={toggle} aria-label="Toggle theme">
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}
