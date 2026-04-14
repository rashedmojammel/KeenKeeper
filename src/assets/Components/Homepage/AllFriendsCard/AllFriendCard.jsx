import React, { use } from 'react';
// import FriendsCard from '../../../Ui/FriendsCardDetails';
import FriendsCardDetails from '../../../Ui/FriendsCardDetails';

const FriendCardPromise = fetch('/data.json').then(res => res.json());

const AllFriendCard = () => {

    const  FriendCard = use(FriendCardPromise);
    console.log(FriendCard);
    return (
       <div className='grid grid-cols-4 gap-5 w-9/12 mx-auto mt-8'>
  {
    FriendCard.map((friend, index) => (
      <FriendsCardDetails key={index} friend={friend} index={index} />
      
    ))
  }
</div>
);
};

export default AllFriendCard;