import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";

function Home() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors ">
      <div className="flex flex-col justify-start items-center min-h-screen w-full">
        <div className="max-w-[600px] mx-auto pt-0 pr-1 pl-1 pb-0 mt-[30px] mb-[60px]">
          <div className="grid grid-cols-12 items-baseline">
            <div className="col-span-8">
              <div className="px-2 pt-2 pb-0 text-4xl sm:text-[1.4rem] md:text-[1.5rem] lg:text-[2rem] font-bold text-left">
                adeeb ismail
              </div>
            </div>

            <div className="col-span-4 flex flex-row justify-end items-center gap-2 px-2 pt-2 pb-0">
              <button
                onClick={toggleTheme}
                className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              </button>
              <div className="z text-[clamp(0.7rem,3.2vw,0.875rem)] text-right">
                <Link to="/books" className="underline hover:no-underline">
                  books
                </Link>
              </div>
              <div className="z text-[clamp(0.7rem,3.2vw,0.875rem)] text-right">
                <Link to="/biking" className="underline hover:no-underline">
                  biking
                </Link>
              </div>
            </div>

            <div className="col-span-12">
              <div className="px-2 pt-1 pb-0 text-[clamp(0.7rem,3.2vw,0.875rem)] text-left">
                adeebismail9@tamu.edu |{" "}
                <a
                  href="https://www.linkedin.com/in/adeeb-m-ismail/"
                  className="underline hover:no-underline"
                >
                  linkedin
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/AdeebIsmail"
                  className="underline hover:no-underline"
                >
                  github
                </a>
              </div>
            </div>

            <div className="col-span-12">
              <div className="px-2 pt-6 pb-2 text-base md:text-[1rem] lg:text-[1.2rem] font-bold text-left">
                experience
              </div>
            </div>

            <div className="col-span-12 space-y-4">
              <div>
                <div className="flex justify-between items-center px-2 gap-2">
                  <div className="font-medium text-[clamp(0.7rem,3.2vw,0.875rem)] text-left min-w-0">
                    Software Engineering Intern - Lockheed Martin
                  </div>

                  <div className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">
                    2024 - 2026
                  </div>
                </div>

                <div className="px-2 text-[clamp(0.7rem,3.2vw,0.875rem)] text-left">
                  Supporting the manufacturing execution system (mes) for the
                  f-35 lightning II program
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center px-2 gap-2">
                  <div className="font-medium text-[clamp(0.7rem,3.2vw,0.875rem)] text-left min-w-0">
                    Undergraduate Teaching Assistant - Texas A&amp;M
                  </div>

                  <div className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">
                    2023 - 2026
                  </div>
                </div>

                <div className="px-2   text-[clamp(0.7rem,3.2vw,0.875rem)] text-left">
                  Teaching assistant for intro to python (engr 102) and
                  experimental physics lab (engr 216)
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center px-2 gap-2">
                  <div className="font-medium text-[clamp(0.7rem,3.2vw,0.875rem)] text-left min-w-0">
                    Student Researcher - Texas A&amp;M
                  </div>

                  <div className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">
                    Mar 2025 - May 2025
                  </div>
                </div>

                <div className="px-2 text-[clamp(0.7rem,3.2vw,0.875rem)] text-left">
                  Researched windows vulnerabilities and developed dll injection
                  code
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center px-2 gap-2">
                  <div className="font-medium text-[clamp(0.7rem,3.2vw,0.875rem)] text-left min-w-0">
                    Code Sensei - Code Ninjas
                  </div>

                  <div className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">
                    2021 - 2023
                  </div>
                </div>

                <div className="px-2 text-[clamp(0.7rem,3.2vw,0.875rem)] text-left">
                  Taught programming fundamentals and assisted students across
                  multiple topics
                </div>
              </div>
            </div>

            <div className="col-span-12">
              <div className="px-2 pt-6 pb-2 text-base md:text-[1rem] lg:text-[1.2rem] font-bold text-left">
                projects
              </div>
            </div>

            <div className="col-span-12">
              <div className="px-2 py-1 text-[clamp(0.7rem,3.2vw,0.875rem)] text-left">
                Interactive BRL-CAD Raytracing Visualizer - Tool for visualizing
                BRL-CAD geometry using ray tracing
              </div>
              <div className="px-2 py-1 text-[clamp(0.7rem,3.2vw,0.875rem)] text-left">
                Minimal Linux Kernel - Miniature operating system with physical
                and virtual memory, threading, a file system, etc
              </div>
              <div className="px-2 py-1 text-[clamp(0.7rem,3.2vw,0.875rem)] text-left">
                <a
                  href="https://github.com/AdeebIsmail/PiDisplay"
                  className="underline hover:no-underline"
                >
                  PiDisplay
                </a>{" "}
                - E-ink display that dynamically displays the song currently
                playing on spotify
              </div>
              <div className="px-2 py-1 text-[clamp(0.7rem,3.2vw,0.875rem)] text-left">
                <a
                  href="https://github.com/AdeebIsmail/PandaExpressPOS"
                  className="underline hover:no-underline"
                >
                  Point of sales system
                </a>{" "}
                - Full stack point of sales system for panda express
              </div>
              <div className="px-2 py-1 text-[clamp(0.7rem,3.2vw,0.875rem)] text-left">
                <a
                  href="https://github.com/AdeebIsmail/route-map-generator"
                  className="underline hover:no-underline"
                >
                  route-map-generator
                </a>{" "}
                - Custom map generator for creating and visualizing biking
                routes
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
