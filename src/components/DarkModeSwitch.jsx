'use client'
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {mounted && (
        <>
          {currentTheme === "dark" ? (
            <MdLightMode
              onClick={() => setTheme("light")}
              className="text-xl cursor-pointer hover:text-purple-400"
            />
          ) : (
            <MdDarkMode
              onClick={() => setTheme("dark")}
              className="text-xl cursor-pointer hover:text-purple-400"
            />
          )}
        </>
      )}
    </div>
  );
}

export default DarkModeSwitch;

