import React from 'react';
import { FaPhone, FaComment, FaVideo } from 'react-icons/fa6';

import callIcon from '../../../../assets/call.png';
import textIcon from '../../../../assets/text.png';
import videoIcon from '../../../../assets/video.png';

export const typeIcons = {
    "Call": callIcon,
    "Text": textIcon,
    "Video": videoIcon
}
export const typeLabels = {
    "Call": "Called",
    "Text": "Texted",
    "Video": "Video called"
}

const TimelineCard = ({item}) => {
    return (
        <div className='flex gap-4 bg-white rounded-3xl p-4 mt-5 items-center'>
            <img 
                src={typeIcons[item.type]} 
                alt={item.type} 
                className='w-[30px] h-[30px] mt-4' 
            />
            <div className='mt-3'>
                <h1 className='text-2xl'>
                    {typeLabels[item.type]} <span className='font-semibold'>{item.name}</span>
                </h1>
                <p className='text-gray-500 text-sm'>{item.date}</p>
            </div>
        </div>
    );
};

export default TimelineCard;