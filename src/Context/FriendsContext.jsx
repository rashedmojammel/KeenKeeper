import React, { Children, createContext } from 'react';

export const FriendsContext = createContext();

const FriendsProvider = ({Children}) => {

    const data  ={
        test : "This is a test",
    }
    return <FriendsContext.Provider value={data}>

        {Children}
    </FriendsContext.Provider>
};

export default FriendsProvider;