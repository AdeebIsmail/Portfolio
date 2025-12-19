import React, { useContext } from "react";
import { Link } from "react-router-dom";

function Books() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors">
      <div className="flex flex-col justify-start items-center min-h-screen w-full">
        <div className="max-w-[600px] mx-auto p-0 mt-[30px] mb-[60px]">
          <div>
            <Link
              to="/"
              className="px-2 underline hover:no-underline text-sm md:text-[0.80rem] lg:text-[0.85rem] text-left"
            >
              back
            </Link>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="w-3 h-3"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg> */}
          </div>

          <div className="px-2 pt-2 pb-4 text-4xl md:text-[1.4rem] lg:text-[1.5rem] font-bold text-left">
            favs
          </div>
          <div className="space-y-2">
            <div className="px-2 py-1 text-sm md:text-[0.85rem] lg:text-[0.9rem] text-left">
              <a
                href="https://www.goodreads.com/book/show/17262173-kenobi"
                className="underline hover:no-underline"
              >
                Kenobi (Star Wars)
              </a>{" "}
            </div>
            <div className="px-2 py-1 text-sm  md:text-[0.85rem] lg:text-[0.9rem] text-left">
              <a
                href="https://www.goodreads.com/book/show/59960.Batman"
                className="underline hover:no-underline"
              >
                Batman: The Dark Knight Returns
              </a>{" "}
            </div>
            <div className="px-2 py-1 text-sm md:text-[0.85rem] lg:text-[0.9rem] text-left">
              <a
                href="https://www.goodreads.com/book/show/5332742-the-lab"
                className="underline hover:no-underline"
              >
                The Lab
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Books;
