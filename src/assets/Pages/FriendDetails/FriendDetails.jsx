import React from 'react';
import { FaArchive } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa6';
import { IoIosAlarm } from 'react-icons/io';
import { useLoaderData, useParams } from 'react-router';
import { status } from '../../Ui/FriendsCardDetails';

const FriendDetails = () => {
    const { id } = useParams();
    console.log(id);

    const friends = useLoaderData();
    console.log(friends);

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

      <div className="card-body items-center text-center p-4">
        <h2 className="card-title">{expectedFriend.name}</h2>
        <p className="text-sm text-gray-500">
          {expectedFriend.days_since_contact} days ago
        </p>

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
        </div>

        {/* Status */}
        <span
          className={`px-3 py-1 rounded-full text-sm mt-2 ${
            status[expectedFriend.status]
          }`}
        >
          {expectedFriend.status}
        </span>
      </div>
    </div>

     {/* {
    "id": 4,
    "name": "Liam Chen",
    "picture": "https://iruvijayanathan.com/wp-content/uploads/2016/10/download-8.jpg",
    "email": "liam.chen.dev@gmail.com",
    "days_since_contact": 9,
    "status": "almost due",
    "tags": ["gym", "close friend"],
    "bio": "Met at the local gym two years ago. Spot each other on bench presses and chat life.",
    "goal": 14,
    "next_due_date": "2026-04-20"
  }, */}
    



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
    <div className="grid grid-cols-4 gap-4">

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

      <div className="bg-white shadow rounded-lg p-4 text-center">
        <h1 className="text-2xl font-bold">{friends.length}</h1>
        <p className="text-sm text-gray-500">Total Friends</p>
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
        <button className="btn">Call</button>
        <button className="btn">Text</button>
        <button className="btn">Video</button>
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