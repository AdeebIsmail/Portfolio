import React from "react";
import { Link } from "react-router-dom";
import Route1 from "../bike_routes/route1.png";
import Route2 from "../bike_routes/route2.png";
import Route3 from "../bike_routes/route3.png";
function Biking() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors">
      <div className="flex flex-col justify-start items-center min-h-screen w-full">
        <div className="max-w-[600px] w-full mx-auto p-0 mt-[30px] mb-[60px]">
          <div>
            <Link
              to="/"
              className="px-2 underline hover:no-underline text-sm md:text-[0.80rem] lg:text-[0.85rem]"
            >
              back
            </Link>
          </div>

          <div className="px-2 pt-2 pb-4 text-4xl md:text-[1.4rem] lg:text-[1.5rem] font-bold text-left">
            bike routes
          </div>

          <div className="space-y-2">
            <div className="px-2 py-1 text-sm md:text-[0.85rem] lg:text-[0.9rem] text-center italic">
              <img
                src={Route1}
                height="600"
                width="600"
                alt="Bike route 1 map showing 12.04 mile route"
              />
              <figcaption className="py-1">~12.04 miles</figcaption>
            </div>
            <div className="px-2 py-1 text-sm md:text-[0.85rem] lg:text-[0.9rem] text-center italic">
              <img
                src={Route2}
                height="600"
                width="600"
                alt="Bike route 2 map showing 8.6 mile route"
              />
              <figcaption className="py-1">~8.6 miles</figcaption>
            </div>
            <div className="px-2 py-1 text-sm  md:text-[0.85rem] lg:text-[0.9rem] text-center italic">
              <img
                src={Route3}
                height="600"
                width="600"
                alt="Bike route 2 map showing 11.76 mile route"
              />
              <figcaption className="py-1">~11.76 miles</figcaption>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Biking;
