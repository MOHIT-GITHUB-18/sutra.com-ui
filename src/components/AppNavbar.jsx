import React from 'react'
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import { Search, Github, Sun, Moon } from "lucide-react";


const AppNavbar = ({ isDark, toggleTheme }) => {
  return (
    <nav
        className={`${
          isDark ? "bg-[#000] border-gray-700" : "bg-white border-gray-200"
        } border-b`}
      >
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left - Logo */}
            <Link to={"/"}>
              <div
                style={{ fontFamily: "cal sans, sans-serif" }}
                className={`text-[28px] ${
                  isDark ? "text-[#eee]" : "text-[#222]"
                }`}
              >
                Sutra.<span className="text-[#8E8E95]">com</span>
              </div>
            </Link>

            {/* Right - Search, GitHub, Theme Toggle */}
            <div className="flex items-center space-x-4">
              {/* GitHub Button */}
              <a
                href="https://github.com/MOHIT-GITHUB-18/sutra.com-ui"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isDark
                    ? "bg-[#222] hover:text-gray-400 text-gray-500"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                } p-2 rounded-lg cursor-pointer`}
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>

              {/* Dark/Light Mode Toggle */}
              <button
                onClick={toggleTheme}
                className={`${
                  isDark
                    ? "bg-[#222] hover:text-gray-400 text-gray-500"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                } p-2 rounded-lg cursor-pointer`}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default AppNavbar