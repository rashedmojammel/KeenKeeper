import React from 'react';
import Statsimg from '../../../assets/StatsFrame.png';

const Stats = () => {
    return (
        <div className='w-8/12 mx-auto'>
            <h1 className='text-3xl font-semibold mt-5'>Friendship Analytics</h1>
            <img src={Statsimg} alt="Stats" className='w-full h-auto mt-4' />
            
        </div>
    );
};

export default Stats;