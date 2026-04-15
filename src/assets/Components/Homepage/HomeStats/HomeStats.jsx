import React from 'react';
import { useLoaderData } from 'react-router';

const HomeStats = () => {
  
  const friendStats = useLoaderData();
  console.log(friendStats);

    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 md:w-8/12 mx-auto mt-8 border-b border-gray-300 pb-8 mx-auto'> 
            <div className="border-white bg-white shadow-lg rounded-lg flex flex-col items-center justify-center p-2 w-[200px] h-[100px]">
  <h1 className="text-2xl font-bold">7</h1>
  <p className="text-sm text-gray-600">Total Friends</p>
</div>
<div className="border-white bg-white shadow-lg rounded-lg flex flex-col items-center justify-center p-2 w-[200px] h-[100px]">
  <h1 className="text-2xl font-bold">6</h1>
  <p className="text-sm text-gray-600">On Track</p>
</div>
<div className="border-white bg-white shadow-lg rounded-lg flex flex-col items-center justify-center p-2 w-[200px] h-[100px]">
  <h1 className="text-2xl font-bold">5</h1>
  <p className="text-sm text-gray-600">Need Attention</p>
</div>
<div className="border-white bg-white   shadow-lg rounded-lg flex flex-col items-center justify-center p-2 w-[200px] h-[100px]">
  <h1 className="text-2xl font-bold">3</h1>
  <p className="text-sm text-gray-600">Interaction This Month</p>
</div>
          
        
        </div>
    );
};

export default HomeStats;