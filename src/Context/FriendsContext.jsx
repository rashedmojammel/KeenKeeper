import React, { createContext, useState } from 'react';
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
     toast("Call made to " + friend.name);
}

const handleText = (friend) => {
    setStroredTimeline([...storedTimeline, {
        type: "Text",
        name: friend.name,
        date: new Date().toLocaleTimeString()
    }]);
        toast("Text sent to " + friend.name);
}

const handleVideo = (friend) => {
    setStroredTimeline([...storedTimeline, {
        type: "Video",
        name: friend.name,
        date: new Date().toLocaleTimeString()
    }]);
        toast("Video call made to " + friend.name);
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