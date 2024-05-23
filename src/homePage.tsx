import React from "react";
import { useState } from "react";
import { AccordionExample } from "./AccodionExample";



const [whichPage, setWhichPage] = useState(0);

return (
  <div>
    <div className="flex flex-row text-red-600 bg-red-200 text-3xl font-bold items-center">
      <h1 className="ml-2">ESPN BOSTON</h1>
    </div>
    {whichPage === 1 ? (
      <div className="flex flex-row">
        <div className="w-1/5 h-screen flex flex-col grid">
          <>
            <Button
              onClick={() => setWhichPage(2)}
              className=" text-blue-900 bg-red-800 font-serif font-semibold text-2xl"
            >
              Patriots
            </Button>
            <Button
              onClick={() => setWhichPage(3)}
              className="bg-black text-yellow-800 font-serif font-semibold text-2xl"
            >
              Bruins
            </Button>
            <Button
              onClick={() => setWhichPage(4)}
              className="bg-green-700 text-white font-serif font-semibold text-2xl"
            >
              Celtics
            </Button>
            <Button
              onClick={() => setWhichPage(5)}
              className="text-red-800 bg-blue-900 font-serif font-semibold text-2xl"
            >
              Red Sox
            </Button>
          </>
        </div>
        <div>
          <AccordionExample />
        </div>
      </div>
    ) : (
      <div>
        <Button
          onClick={() => setWhichPage(1)}
          className="w-39 h-30 bg-blue-gray-400 rounded-xl"
        >
          Return to main page
        </Button>
      </div>
    )}
  </div>
);
}