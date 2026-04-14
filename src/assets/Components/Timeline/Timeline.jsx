import React, { useContext, useState } from 'react';
import { FaArrowCircleDown, FaSearch } from 'react-icons/fa';

import { FriendsContext } from '../../../Context/FriendsContext';
import TimelineCard from './TimeLineCard/TimelineCard';

const Timeline = () => {
    const { storedTimeline } = useContext(FriendsContext);
    const [sortingtype, setSortingType] = useState("");

    const filteredTimeline = sortingtype
        ? storedTimeline.filter(item => item.type === sortingtype)
        : storedTimeline;

    return (
        <div className='w-9/12 mx-auto'>
            <h1 className='text-3xl font-semibold mt-5'>Timeline</h1>
            <div className="dropdown dropdown-start">
                <div tabIndex="0" role="button" className="btn m-1 gap-15">
                    Filter: {sortingtype || "All"} <FaArrowCircleDown />
                </div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => setSortingType('')}><a>Show All</a></li>
                    <li onClick={() => setSortingType('Call')}><a>By Call</a></li>
                    <li onClick={() => setSortingType('Text')}><a>By Text</a></li>
                    <li onClick={() => setSortingType('Video')}><a>By Video</a></li>
                </ul>
            </div>

            <div>
                {filteredTimeline.length > 0
                    ? filteredTimeline.map((item, index) => (
                        <TimelineCard key={index} item={item} />
                    ))
                    : 
                    <div className='text-center text-black mt-5 p-20 bg-white rounded-3xl'>
                        <p className='flex justify-center items-center gap-3'><span><FaSearch></FaSearch></span>No interactions found.</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Timeline;