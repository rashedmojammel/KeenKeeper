import React, { useContext } from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';
import { FaHandshakeSimple } from 'react-icons/fa6';

import { FriendsContext } from '../../../Context/FriendsContext';
import TimelineCard from './TimeLineCard/TimelineCard';

const Timeline = () => {

    const {storedTimeline} = useContext(FriendsContext);
    console.log(storedTimeline, "from timeline");
    return (
        
        <div>
            
            {
                storedTimeline.map((item, index) => <TimelineCard key={index} item={item} />)
            }
        </div>
    )
};

export default Timeline;