import React from "react";
import Header from "../components/Header";
import { useTheme } from "next-themes";

export default function CTOBook() {
  const { theme } = useTheme();

  return (
    <>
      <div className="container mx-auto mb-10">
        <Header isBlog={true} />
        <div className="mt-10">
          <h1 className="text-4xl font-bold text-primary-900 dark:text-primary-100">
            CTO BOOK
          </h1>
          <div className="mt-8 prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-800 dark:text-gray-200">
              Welcome to the CTO Book - A comprehensive guide for technical leaders.
            </p>
            
            {/* Add your CTO Book content here */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-primary-800 dark:text-primary-200">
                Table of Contents
              </h2>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-primary-600 dark:text-primary-400">01.</span>
                  <span className="text-gray-800 dark:text-gray-200">The Role of a CTO</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary-600 dark:text-primary-400">02.</span>
                  <span className="text-gray-800 dark:text-gray-200">Technical Strategy</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary-600 dark:text-primary-400">03.</span>
                  <span className="text-gray-800 dark:text-gray-200">Team Building</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
} 