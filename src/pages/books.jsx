import React, { useContext } from "react";

function Books() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors">
      <div className="flex flex-col justify-start items-center min-h-screen w-full">
        <div className="max-w-[600px] mx-auto p-0 mt-[30px] mb-[60px]">
          <div className="px-2 pt-2 pb-4 text-xl md:text-[1.4rem] lg:text-[1.5rem] font-bold text-left">
            favs
          </div>
          <div className="space-y-2">
            <div className="px-2 py-1 text-xs md:text-[0.8rem] lg:text-[0.85rem] text-left">
              <a
                href="https://www.goodreads.com/book/show/17262173-kenobi"
                className="underline hover:no-underline"
              >
                Kenobi (Star Wars)
              </a>{" "}
            </div>
            <div className="px-2 py-1 text-xs md:text-[0.8rem] lg:text-[0.85rem] text-left">
              <a
                href="https://www.goodreads.com/book/show/59960.Batman"
                className="underline hover:no-underline"
              >
                Batman: The Dark Knight Returns
              </a>{" "}
            </div>
            <div className="px-2 py-1 text-xs md:text-[0.8rem] lg:text-[0.85rem] text-left">
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
