"use client";

import Link from "next/link";
function Biking() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors">
      <div className="flex flex-col justify-start items-center min-h-screen w-full">
        <div className="max-w-[900px] w-full mx-auto pt-0 pr-1 pl-1 pb-0 mt-[30px] mb-[60px]">
          <div className="pt-2">
            <Link
              href="/"
              className="px-2 underline hover:no-underline text-sm md:text-[0.80rem] lg:text-[0.85rem]"
            >
              back
            </Link>
          </div>

          <div className="px-2 pt-2 pb-4 text-3xl sm:text-[1.4rem] md:text-[1.5rem] lg:text-[2rem] font-bold text-left">
            bike routes
          </div>

          <div className="space-y-8 px-2">
            <div className="flex flex-col items-center">
              <img
                src="/bike_routes/13.63.png"
                alt="Bike route 1 map showing 13.63 mile route"
                className="w-full max-w-[900px] h-auto"
              />
              <p className="text-sm md:text-[0.9rem] lg:text-[1rem] text-center italic py-2">
                ~13.63 miles
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="/bike_routes/16.68.png"
                alt="Bike route 2 map showing 16.68 mile route"
                className="w-full max-w-[900px] h-auto"
              />
              <p className="text-sm md:text-[0.9rem] lg:text-[1rem] text-center italic py-2">
                ~16.68 miles
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="/bike_routes/20.94.png"
                alt="Bike route 3 map showing 20.94 mile route"
                className="w-full max-w-[900px] h-auto "
              />
              <p className="text-sm md:text-[0.9rem] lg:text-[1rem] text-center italic py-2">
                ~20.94 miles
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Biking;
