import React, { createContext, useState } from 'react';
import { FaMessage, FaPhone, FaVideo } from 'react-icons/fa6';
import { toast } from 'react-toastify';

export const FriendsContext = createContext();



const FriendsProvider = ({children}) => {
     const [storedTimeline , setStroredTimeline] = useState([]);

   const handleCall = (friend) => {
    setStroredTimeline([...storedTimeline, {
        type: "Call",
        name: friend.name,
        date: new Date().toLocaleTimeString()
       
    }]);
     toast(
  <div className="flex items-center gap-2">
    <FaPhone />
    <span>Calling {friend.name}</span>
  </div>
);

}

const handleText = (friend) => {
    setStroredTimeline([...storedTimeline, {
        type: "Text",
        name: friend.name,
        date: new Date().toLocaleTimeString()
    }]);
        toast(
  <div className="flex items-center gap-2">
    <FaMessage />
    <span>Text sent to {friend.name}</span>
  </div>
);

}

const handleVideo = (friend) => {
    setStroredTimeline([...storedTimeline, {
        type: "Video",
        name: friend.name,
        date: new Date().toLocaleTimeString()
    }]);
        toast(
  <div className="flex items-center gap-2">
    <FaVideo />
    <span>Video call made to {friend.name}</span>
  </div>
);
}

    const data  ={
        storedTimeline,
        handleCall,
        handleText,
        handleVideo

    }
    return <FriendsContext.Provider value={data}>

        {children}
    </FriendsContext.Provider>
};

export default FriendsProvider;