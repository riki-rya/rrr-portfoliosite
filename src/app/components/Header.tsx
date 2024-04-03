import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ui/toggle";

const Header = () => {
  return (
    <div className="divide-y border-gray-200 dark:border-gray-800 border-b">
      <div className="px-4 py-3 md:py-6 lg:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-y-2 md:space-y-0 md:space-x-6">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter mr-4 transition-all duration-1000 ease-out hover:text-shadow-red-lg hover:text-red-600"
            >
              rrr portfolio site
            </Link>
            <nav className="flex items-center space-x-6 text-sm">
              <Link
                className="font-medium text-gray-500 transition-all duration-1000 ease-out hover:text-shadow-cyan-lg hover:text-cyan-300 dark:text-gray-200 dark:hover:text-shadow-cyan-lg dark:hover:text-cyan-300"
                href="/blogs"
              >
                Blogs
              </Link>
              <Link
                className="font-medium text-gray-500 transition-all duration-1000 ease-out hover:text-cyan-300 hover:text-shadow-cyan-sm dark:text-gray-200 dark:hover:text-cyan-300 dark:hover:text-shadow-cyan-lg"
                href="/discordbot"
              >
                DiscordBot
              </Link>
              <Link
                className="bg-black py-3 px-4 text-white rounded-md font-medium transition-all duration-1000 ease-out hover:bg-gray-700/70 hover:text-cyan-300 dark:bg-white dark:text-black dark:hover:bg-gray-700/70 dark:hover:text-cyan-300"
                href="/contact"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="ml-auto">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;