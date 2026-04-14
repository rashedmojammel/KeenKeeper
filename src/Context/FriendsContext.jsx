import React, { createContext, useState } from 'react';

export const FriendsContext = createContext();



const FriendsProvider = ({children}) => {
     const [storedTimeline , setStroredTimeline] = useState([]);

    const handleCall = (friend) =>
    {     console.log("call", friend.name);  
          setStroredTimeline([...storedTimeline , `Called friend with id ${friend.id} at ${new Date().toLocaleTimeString()}`]);
          alert(`Calling friend${friend.name}...`); // Simulate call action

    }
    const handleText = (friend) =>
    {     console.log("text", friend.name);  
          setStroredTimeline([...storedTimeline , `Texted friend with id ${friend.id} at ${new Date().toLocaleTimeString()}`]);
          alert(`Texting friend  ${friend.name}...`); // Simulate text action

    }
    const handleVideo = (friend) =>
    {     console.log("video", friend.name); 
            setStroredTimeline([...storedTimeline , `Video called friend with id ${friend.id} at ${new Date().toLocaleTimeString()}`]);  
            alert(`Video calling friend${friend.name}...`); // Simulate video call action   

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