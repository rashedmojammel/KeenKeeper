import React from 'react';
import call from '../../../../assets/call.png';
import { FaArrowCircleDown } from 'react-icons/fa';

const TimelineCard = ({item}) => {
    return (
        <div className='w-9/12 mx-auto'>
            <h1 className='text-3xl font-semibold mt-5'>Timeline</h1>
            <div className="dropdown dropdown-start">
                <div tabIndex="0" role="button" className="btn m-1 gap-15">Filter Timeline <FaArrowCircleDown></FaArrowCircleDown></div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
            <div className=''>
                <div className='flex gap-4 border-white  bg-white rounded-3xl p-4 mt-5'>
                    <img src={call} alt="Call" className='w-[30]  h-[30] mt-4' />
                    <div className=' items-center gap-2 mt-3'>
                        <h1 className='text-2xl'>Meeting <span>{item.name}</span></h1>
                        <p>{item.date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimelineCard;