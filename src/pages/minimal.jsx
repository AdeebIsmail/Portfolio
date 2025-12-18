import React, { useContext } from "react";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import { ThemeContext } from "../App";

function Home() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors ">
      <div className="flex flex-col justify-start items-center min-h-screen w-full">
        <div className="max-w-[600px] mx-auto p-0 mt-[30px] mb-[60px]">
          <div className="grid grid-cols-12 items-baseline">
            <div className="col-span-8">
              <div className="px-2 pt-2 pb-0 text-2xl md:text-[1.75rem] lg:text-[2rem] font-bold text-left">
                adeeb ismail
              </div>
            </div>

            <div className="col-span-4 flex flex-row justify-end items-center gap-2 px-2 pt-2 pb-0">
              <button
                onClick={toggleTheme}
                className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
              >
                <InvertColorsIcon className="text-lg" />
              </button>
              <div className="text-xs md:text-[0.85rem] lg:text-[0.9rem] text-right">
                books
              </div>
            </div>

            <div className="col-span-12">
              <div className="px-2 pt-1 pb-0 text-xs md:text-[0.85rem] lg:text-[0.9rem] text-left">
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
              <div className="px-2 pt-6 pb-2 text-sm md:text-[0.95rem] lg:text-base font-bold text-left">
                experience
              </div>
            </div>

            <div className="col-span-12">
              <div className="px-2 py-1 text-xs md:text-[0.85rem] lg:text-[0.9rem] text-left">
                Lockheed Martin (2024) - Software engineering intern on the
                manufacturing execution system for the f35
              </div>
              <div className="px-2 py-1 text-xs md:text-[0.85rem] lg:text-[0.9rem] text-left">
                Undergraduate Teaching Assistant (2023) - Teaching assistant for
                intro to python (engr 102) and experimental physics lab (engr
                216)
              </div>
              <div className="px-2 py-1 text-xs md:text-[0.85rem] lg:text-[0.9rem] text-left">
                Student Researcher (march 2025- may 2025) - Researched windows
                vulnerabilities and developed DLL injection code
              </div>
              <div className="px-2 py-1 text-xs md:text-[0.85rem] lg:text-[0.9rem] text-left">
                Code Sensei (2021-2023) - Teaching assistant over different
                programming topics
              </div>
            </div>

            <div className="col-span-12">
              <div className="px-2 pt-6 pb-2 text-sm md:text-[0.95rem] lg:text-base font-bold text-left">
                projects
              </div>
            </div>

            <div className="col-span-12">
              <div className="px-2 py-1 text-xs md:text-[0.85rem] lg:text-[0.9rem] text-left">
                Minimal Linux Kernel - Built a miniature operating system with
                physical and virtual memory, threading, a file system, etc
              </div>
              <div className="px-2 py-1 text-xs md:text-[0.85rem] lg:text-[0.9rem] text-left">
                <a
                  href="https://github.com/AdeebIsmail/PiDisplay"
                  className="underline hover:no-underline"
                >
                  PiDisplay
                </a>{" "}
                - Designed an e-ink display that dynamically displays the song
                currently playing on spotify
              </div>
              <div className="px-2 py-1 text-xs md:text-[0.85rem] lg:text-[0.9rem] text-left">
                <a
                  href="https://github.com/AdeebIsmail/PandaExpressPOS"
                  className="underline hover:no-underline"
                >
                  Point of sales system
                </a>{" "}
                - Full stack point of sales system for panda express
              </div>
              <div className="px-2 py-1 text-xs md:text-[0.85rem] lg:text-[0.9rem] text-left">
                <a
                  href="https://github.com/AdeebIsmail/fidelity-transaction-parser-rust"
                  className="underline hover:no-underline"
                >
                  Transaction Parser
                </a>{" "}
                - Rust based application that reads CSV transaction data from
                Fidelity and generates graphs and charts
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
