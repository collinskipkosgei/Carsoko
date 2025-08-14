import React from "react";

export default function CarIntro() {
  return (
    <div className="flex justify-center items-center py-10 px-4 bg-gray-100">
      <div className="bg-white shadow-md rounded-xl flex flex-col md:flex-row gap-6 overflow-hidden">
        
        <div className="md:w-1/2 w-full h-64 md:h-auto">
          <img
            className="w-full h-full object-cover rounded-l-xl"
            src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFtYm9yZ2hpbml8ZW58MHx8MHx8fDA%3D"
            alt="Car Sokoni Intro"
          />
        </div>

        <div className="md:w-1/2 w-full p-6 flex flex-col justify-center bg-blue-900 text-white rounded-r-xl">
          <div className="flex items-baseline gap-2 mb-2">
            <h2 className="text-sm uppercase font-semibold">Welcome to</h2>
            <h1 className="text-xl font-bold text-red-400">Car Sokoni</h1>
          </div>

          <p className="text-sm mb-2">
            Everything about a car should make your life simpler. That starts with buying it.
          </p>
          <p className="text-sm mb-2">
            At CarSoko, we've redefined car shopping. Our price promise guarantees you'll get 
            the perfect vehicle at the best value. With thousands of options all in one place, 
            your dream car is just a click away.
          </p>
          <p className="text-sm italic mb-2">
           Experience our award-winning Pre and After Sales Services - where your satisfaction is our top priority.
          </p>
          <p className="text-sm font-semibold">— Sir. Collins Kosgei, Director Car Soko Limited.</p>
        </div>
      </div>
    </div>
  );
}
