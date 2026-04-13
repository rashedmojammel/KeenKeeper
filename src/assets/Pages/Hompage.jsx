import React from 'react';
import HomepageTop from '../Components/Homepage/HomepageTop/HomepageTop';
import HomeStats from '../Components/Homepage/HomeStats/HomeStats';
import AllFriendCard from '../Components/Homepage/AllFriendsCard/AllFriendCard';


const Hompage = () => {
    return (
        <>
            <HomepageTop></HomepageTop>
            <HomeStats></HomeStats>
            <AllFriendCard></AllFriendCard>
        </>
    );
};

export default Hompage;