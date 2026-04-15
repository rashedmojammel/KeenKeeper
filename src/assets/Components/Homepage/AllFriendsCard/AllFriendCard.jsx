import React, { use, Suspense } from 'react';
import FriendsCardDetails from '../../../Ui/FriendsCardDetails';

const FriendCardPromise = fetch('/data.json').then(res => res.json());

const FriendGrid = () => {
  const FriendCard = use(FriendCardPromise);
  return (
    <div className="grid grid-cols-2 h-full md:grid-cols-4 gap-5 w-full lg:w-9/12 px-2 mx-auto mt-8">
      {FriendCard.map((friend, index) => (
        <FriendsCardDetails key={index} friend={friend} index={index} />
      ))}
    </div>
  );
};

const AllFriendCard = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center mt-16">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      }
    >
      <FriendGrid />
    </Suspense>
  );
};

export default AllFriendCard;