"use client";
import { Theme } from "@/types/theme";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import { Button } from ".";
export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="fixed top-0 left-0 w-full z-10">
      <div className="mx-auto px-2">
        <div className="relative flex items-center justify-between h-16">
          <Button.Icon href="/">
            <Icon icon="feather:home" />
          </Button.Icon>
          {/* <Button.Icon
            aria-label="Dark mode"
            onClick={() =>
              setTheme(theme === "dark" ? Theme.LIGHT : Theme.DARK)
            }
          >
            <Icon
              className={
                theme === Theme.DARK ? "text-yellow-200" : "text-blue-500"
              }
              icon={theme === Theme.DARK ? "feather:sun" : "feather:moon"}
            />
          </Button.Icon> */}
        </div>
      </div>
    </nav>
  );
};
