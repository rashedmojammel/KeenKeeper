import React, { useContext } from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';
import { FaHandshakeSimple } from 'react-icons/fa6';

import { FriendsContext } from '../../../Context/FriendsContext';
import TimelineCard from './TimeLineCard/TimelineCard';

// Timeline.jsx
const Timeline = () => {
    const {storedTimeline} = useContext(FriendsContext);

    return (
        <div className='w-9/12 mx-auto'>
            {/* Fixed header - renders once */}
            <h1 className='text-3xl font-semibold mt-5'>Timeline</h1>
            <div className="dropdown dropdown-start">
                <div tabIndex="0" role="button" className="btn m-1 gap-15">
                    Filter Timeline <FaArrowCircleDown />
                </div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>

            {/* Mapped cards */}
            <div>
                {storedTimeline.map((item, index) => (
                    <TimelineCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Timeline;