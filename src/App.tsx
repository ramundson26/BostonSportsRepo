import React from "react";

import { useState } from "react";

import { Button } from "@material-tailwind/react";

import { CarouselExample } from "./CarouselExample";

import { HeadlinesList } from "./HeadlinesList";

import { StatsTable } from "./StatsTable";

function App() {
  return (
    <div className="w-96 h-96 bg-red-800">
      <Button>click me</Button>
    </div>
  );

  /*
  const [whichPage, setWhichPage] = useState(0);

  return (
  <>
  <div className="flex flex-row text-red-600 bg-red-200 text-3xl font-bold items-center">
        <h1 className="ml-2">ESPN BOSTON</h1>
      </div>

    
      

      <div className="flex flex-row">

        <div className="w-1/5 h-screen flex flex-col grid">
         
        {whichPage === 0 ? (

              <Button
                onClick={() => setWhichPage(2)}
                className=" text-blue-900 bg-red-800 font-serif font-semibold text-2xl"
              >
                <img
                  className="w-10"
                  src="https://static.clubs.nfl.com/image/upload/patriots/lyrj8gcyuz6ojrz8ae2u.jpg"
                  alt=""
                />
              </Button>
              <Button
                onClick={() => setWhichPage(2)}
                className="bg-black text-yellow-800 font-serif font-semibold text-2xl">
                <img
                  src="https://cdn.uni-watch.com/app/uploads/2023/06/Screenshot-2023-06-27-at-12.55.01-PM-scaled.jpeg"
                  alt=""
                />
              </Button>
              <Button
                onClick={() => setWhichPage(2)}
                className="bg-green-700 text-white font-serif font-semibold text-2xl"
              >
                <img
                  src="https://i.pinimg.com/736x/23/c7/98/23c7982b7145a6e65f677f7bb9e21121.jpg"
                  alt=""
                />
              </Button>
              <Button
                onClick={() => setWhichPage(2)}
                className="text-red-800 bg-blue-900 font-serif font-semibold text-2xl"
              >
                <img
                  src="https://m.media-amazon.com/images/I/61sc7K7borS.jpg"
                  alt=""
                />
              </Button>
           
          ) : (
            
              
              <Button
                onClick={() => setWhichPage(0)}
                className="w-10 h-6 bg-blue-gray-400 rounded-xl"
              >
                {" "}
                Return to main page{" "}
              </Button>
            
          )}
        </div>
        <div className="w-4/5 h-screen">
          <HeadlinesList />
          <StatsTable />
          <CarouselExample />
        </div>
      </div>
  </>
      
   
  );*/
}

export default App;
