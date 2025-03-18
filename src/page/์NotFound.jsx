import React from "react";

function NotFound() {
    return (
      <div className="flex justify-center bg-white h-100 container mx-auto max-w-[1320px] mt-20">
        <div    className="text-center h-auto md:h-[300px] my-10 py-0 md:py-5 flex flex-col items-center justify-center">
            <h1 className='text-5xl font-medium ' >404 Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
      </div>
    );
  }
  
  export default NotFound;
  