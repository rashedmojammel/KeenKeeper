import React from 'react';
import { FaPlus } from 'react-icons/fa6';

const HomepageTop = () => {
    return (
       <div className='w-11/12 mx-auto mt-8 '>
            <div className='text-center space-y-4'>
                <h1 className='text-4xl font-bold'>Friends to keep close in your life</h1>
                <p className='text-gray-500'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
<br></br>relationships that matter most.</p>
<div className='flex justify-center'>
    <button className=' btn bg-green-900 text-white'><FaPlus></FaPlus>Add Friend</button>
            </div>

</div>

        </div>
    );
};

export default HomepageTop;