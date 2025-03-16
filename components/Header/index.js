import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LoginDialog from "../LoginDialog";
import data from "../../data/portfolio.json";

export default function Header({ handleWorkScroll, handleAboutScroll }) {
  const { theme, setTheme } = useTheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const router = useRouter();
  
  const isHomePage = router.pathname === "/";
  const isBenchmarkingPage = router.pathname === "/benchmarking";
  const isCTOBookPage = router.pathname === "/cto-book";
  const isBlogPage = router.pathname.startsWith("/blog");

  return (
    <>
      <LoginDialog isOpen={isLoginOpen} setIsOpen={setIsLoginOpen} />
      <div className="w-full flex items-center justify-between">
        <h1 
          onClick={() => router.push("/")} 
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {data.name}.
        </h1>
        <div className="flex items-center">
          {/* Show Work and About buttons only on home page */}
          {isHomePage && (
            <>
              <button onClick={handleWorkScroll} className="mx-4 text-base font-normal hover:text-primary-500 transition-colors">
                Work
              </button>
              <button onClick={handleAboutScroll} className="mx-4 text-base font-normal hover:text-primary-500 transition-colors">
                About
              </button>
            </>
          )}

          {/* Show these links on all pages except their own respective pages */}
          {!isBenchmarkingPage && (
            <a href="/benchmarking" className="mx-4 text-base font-normal hover:text-primary-500 transition-colors">
              Benchmarking
            </a>
          )}
          
          {!isCTOBookPage && (
            <a href="/cto-book" className="mx-4 text-base font-normal hover:text-primary-500 transition-colors">
              CTO Book
            </a>
          )}

          {/* Show Blog and Resume links on all pages if enabled */}
          {data.showBlog && !isBlogPage && (
            <a href="/blog" className="mx-4 text-base font-normal hover:text-primary-500 transition-colors">
              Blog
            </a>
          )}
          
          {data.showResume && (
            <a href="/resume" className="mx-4 text-base font-normal hover:text-primary-500 transition-colors">
              Resume
            </a>
          )}

          {/* Show Home link on all pages except home page */}
          {!isHomePage && (
            <a href="/" className="mx-4 text-base font-normal hover:text-primary-500 transition-colors">
              Home
            </a>
          )}

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 rounded-lg bg-primary-100 hover:bg-primary-200 dark:bg-primary-900 dark:hover:bg-primary-800 flex items-center justify-center transition-all mx-4"
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-900 dark:text-primary-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-900 dark:text-primary-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>

          {!isLoggedIn && (
            <button
              onClick={() => setIsLoginOpen(true)}
              className="w-9 h-9 rounded-lg bg-primary-100 hover:bg-primary-200 dark:bg-primary-900 dark:hover:bg-primary-800 flex items-center justify-center transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-900 dark:text-primary-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
