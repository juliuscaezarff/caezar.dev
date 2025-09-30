import React, { useEffect } from "react";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "../theme-provider";

function Header() {
  const { theme, setTheme } = useTheme();

  // Add effect to handle theme transition
  useEffect(() => {
    // Add transition class to body when component mounts
    document.documentElement.classList.add("theme-transition");

    // Remove transition after changes are complete to prevent unwanted transitions
    const handleTransitionEnd = () => {
      document.documentElement.classList.remove("theme-transition");
    };

    document.documentElement.addEventListener(
      "transitionend",
      handleTransitionEnd
    );

    return () => {
      document.documentElement.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );
    };
  }, []);

  // Add transition class before theme change and remove it after
  const handleThemeChange = () => {
    document.documentElement.classList.add("theme-transition");
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <div className="flex justify-between items-center p-3 w-full z-20">
        <div className="flex items-center">
          <div className="text-base text-[var(--primary)]">Julius Caezar</div>
        </div>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={handleThemeChange}
            className="p-2 rounded-md bg-transparent hover:bg-[var(--accent)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="h-[18px] w-[18px] text-[var(--muted-foreground)]" />
            ) : (
              <Sun className="h-[18px] w-[18px] text-[var(--muted-foreground)]" />
            )}
          </button>
        </div>
      </div>

      {/* <hr className="border-t border-[var(--border)] relative w-screen left-[50%] right-[50%] -translate-x-[50%]" /> */}
    </div>
  );
}

export default Header;
