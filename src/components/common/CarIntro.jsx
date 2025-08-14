import React from "react";

export default function CarIntro() {
  return (
    <div className="flex justify-center items-center py-10 px-4 bg-gray-100">
      <div className="bg-white shadow-md rounded-xl flex flex-col md:flex-row gap-6 overflow-hidden max-w-4xl w-full">
        
        <div className="md:w-1/2 w-full h-64 md:h-auto">
          <iframe
            className="w-full h-full rounded-l-xl"
            src="https://www.youtube.com/embed/73W8PgAEBrY"
            title="Car Intro Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="md:w-1/2 w-full p-6 flex flex-col justify-center bg-blue-900 text-white rounded-r-xl">
          <div className="flex items-baseline gap-2 mb-2">
            <h2 className="text-sm uppercase font-semibold">Welcome to</h2>
            <h1 className="text-xl font-bold text-red-400">Car Soko</h1>
          </div>

          <p className="text-sm mb-2">
            Everything about a car should make your life simpler. That starts with buying it.
          </p>
          <p className="text-sm mb-2">
            Here at Car Soko, finding the right car is easy. Backed by our price promise,
            you can shop safe in the knowledge that you are getting the best vehicle at the best price.
            With a huge range all under one roof there is really no need to go elsewhere!
          </p>
          <p className="text-sm italic mb-2">
            Be sure to experience top-tier Pre and After Sales Services.
          </p>
          <p className="text-sm font-semibold">— Sir. Meshack Korir, Director Car Soko Limited.</p>
        </div>
      </div>
    </div>
  );
}
