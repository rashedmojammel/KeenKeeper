import React, { useContext } from 'react';
import { FaArchive } from 'react-icons/fa';
import { FaComment, FaPhone, FaTrash, FaVideo } from 'react-icons/fa6';
import { IoIosAlarm } from 'react-icons/io';
import { useLoaderData, useParams } from 'react-router';
import { status } from '../../Ui/FriendsCardDetails';
import { FriendsContext } from '../../../Context/FriendsContext';

const FriendDetails = () => {
    const { id } = useParams();
    console.log(id);

    const friendContext = useContext(FriendsContext);
    console.log(friendContext , "from friend details");

    const friends = useLoaderData();
    console.log(friends);

    const { handleCall, handleText, handleVideo } = useContext(FriendsContext);
    console.log(handleCall, handleText, handleVideo , "from friend details");

   
    const expectedFriend = friends.find(friend => friend.id === Number(id));
    console.log(expectedFriend);    
    return (
        <div className='bg-gray-100'>
             <div className="grid grid-cols-5 gap-6 p-6  min-h-screen w-9/12 mx-auto">

  {/* LEFT SIDEBAR */}
  <div className="col-span-1 flex flex-col gap-4">

    {/* Profile Card */}
    <div className="card bg-base-100 shadow-md">
      <figure className="pt-6 flex justify-center">
        <img
          src={expectedFriend.picture}
          alt="friend"
          className="w-20 h-20 rounded-full object-cover"
        />
      </figure>

      <div className="card-body items-center text-center p-6">
        <h2 className="card-title">{expectedFriend.name}</h2>

        <span
          className={`px-3 py-1 rounded-full text-sm mt-2 ${
            status[expectedFriend.status]
          }`}
        >
          {expectedFriend.status}
        </span>
        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-1 mt-2">
          {expectedFriend.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] bg-green-300 rounded-full px-2 py-1 text-black"
            >
              {tag.toUpperCase()}
            </span>
          ))}
        <p className="text-sm text-gray-500">{expectedFriend.bio}</p>
        <p className="text-sm text-gray-500 mt-1">Email : {expectedFriend.email}</p>
        

        
        </div>

        {/* Status */}
        
      </div>
    </div>

    {/* Buttons */}
    <div className="rounded-xl p-3 space-y-2 text-sm">

      <div className="flex items-center gap-2 bg-white cursor-pointer hover:bg-gray-100 p-2 rounded">
        <IoIosAlarm /> Snooze 2 Weeks
      </div>

      <div className="cursor-pointer  bg-white flex items-center gap-2 hover:bg-gray-100 p-2 rounded">
        <FaArchive></FaArchive> Archive
      </div>

      <div className="cursor-pointer  bg-white flex items-center gap-2     hover:bg-red-100 text-red-500 p-2 rounded">
        <FaTrash></FaTrash> Delete
      </div>
    </div>
  </div>

  {/* RIGHT CONTENT */}
  <div className="col-span-4 flex flex-col gap-6">

    {/* TOP STATS */}
    <div className="grid grid-cols-3 gap-4">

      <div className="bg-white shadow rounded-lg p-4 text-center">
        <h1 className="text-2xl font-bold">{expectedFriend.days_since_contact}</h1>
        <p className="text-sm text-gray-500">Days Since Contact</p>
      </div>

      <div className="bg-white shadow rounded-lg p-4 text-center">
        <h1 className="text-2xl font-bold">{expectedFriend.goal}</h1>
        <p className="text-sm text-gray-500">Goal (Days)</p>
      </div>

      <div className="bg-white shadow rounded-lg p-4 text-center">
        <h1 className="text-2xl font-bold">{expectedFriend.next_due_date}</h1>
        <p className="text-sm text-gray-500">Next Due</p>
      </div>

    </div>

    {/* RELATIONSHIP GOAL */}
    <div className="bg-white shadow rounded-lg p-5 flex justify-between items-center">
      <div>
        <h2 className="font-semibold">{expectedFriend.goal}'s Relationship Goal</h2>
        <p className="text-sm text-gray-500">
          Connect every <span className="font-bold">30 days</span>
        </p>
      </div>
      <button className="btn btn-sm">Edit</button>
    </div>

    {/* QUICK ACTIONS */}
    <div className="bg-white shadow rounded-lg p-5">
      <h2 className="mb-3 font-semibold">Quick Check-In</h2>

      <div className="grid grid-cols-3 gap-4">
        <button onClick={() => handleCall(expectedFriend)} className="btn flex flex-col p-10 text-xl"><span><FaPhone></FaPhone></span> Call</button>
        <button onClick={() => handleText(expectedFriend)} className="btn flex flex-col p-10 text-xl"><span><FaComment></FaComment></span> Text</button>
        <button onClick={() => handleVideo(expectedFriend)} className="btn flex flex-col p-10 text-xl"><span><FaVideo></FaVideo></span  > Video</button>
      </div>
    </div>

    {/* RECENT INTERACTIONS */}
    <div className="bg-white shadow rounded-lg p-5">
      <div className="flex justify-between mb-3">
        <h2 className="font-semibold">Recent Interactions</h2>
        <button className="btn btn-xs">Full History</button>
      </div>

      <div className="space-y-3 text-sm">
        <p>📩 Asked for career advice</p>
        <p>📞 Industry conference meetup</p>
        <p>🎥 Video call</p>
      </div>
    </div>

  </div>
</div>

        </div>
       
    );
};

export default FriendDetails;