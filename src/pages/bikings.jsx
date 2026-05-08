import React from "react";
import { Link } from "react-router-dom";
import Route1 from "../bike_routes/route1.png";
import Route2 from "../bike_routes/route2.png";
import Route3 from "../bike_routes/route3.png";
function Biking() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors">
      <div className="flex flex-col justify-start items-center min-h-screen w-full">
        <div className="max-w-[600px] w-full mx-auto pt-0 pr-1 pl-1 pb-0 mt-[30px] mb-[60px]">
          <div className="pt-2">
            <Link
              to="/"
              className="px-2 underline hover:no-underline text-sm md:text-[0.80rem] lg:text-[0.85rem]"
            >
              back
            </Link>
          </div>

          <div className="px-2 pt-2 pb-4 text-3xl sm:text-[1.4rem] md:text-[1.5rem] lg:text-[2rem] font-bold text-left">
            bike routes
          </div>

          <div className="space-y-2 px-2">
            <img
              src={Route1}
              height="600"
              width="600"
              alt="Bike route 1 map showing 12.04 mile route"
            />
            <p className="text-sm md:text-[0.85rem] lg:text-[0.9rem] text-center italic py-1">
              ~12.04 miles
            </p>
            <img
              src={Route2}
              height="600"
              width="600"
              alt="Bike route 2 map showing 8.6 mile route"
            />
            <p className="text-sm md:text-[0.85rem] lg:text-[0.9rem] text-center italic py-1">
              ~8.6 miles
            </p>
            <img
              src={Route3}
              height="600"
              width="600"
              alt="Bike route 3 map showing 11.76 mile route"
            />
            <p className="text-sm md:text-[0.85rem] lg:text-[0.9rem] text-center italic py-1">
              ~11.76 miles
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Biking;
