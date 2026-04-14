import React from 'react';
import { Link } from 'react-router';


export const status = {
  'overdue': 'bg-orange-500 text-white',
  'almost due':'bg-red-500 text-white',
  'on-track': 'bg-green-500 text-white',
}

const FriendsCardDetails = ({ friend, index }) => {
    return (
        <div>
            <div key={index} className='mt-5'>
        <Link to={`/friendDetails/${friend.id}`} className="card bg-base-100 shadow-sm h-full">
          
          <figure className="px-5 pt-5 flex justify-center">
            <img
              src={friend.picture}
              alt="friend"
              className="w-20 h-20 rounded-full object-cover"
            />
          </figure>

          <div className="card-body items-center text-center">
            <h2 className="card-title">{friend.name}</h2>
            <p>{friend.days_since_contact} day ago</p>

            {/* Tags aligned properly */}
            <div className="flex flex-wrap justify-center gap-1">
              {
                friend.tags.map((tag, i) => (
                  <span key={i} className='text-[10px] bg-green-300 rounded-2xl px-2 py-1 text-black text-center'>
                    {tag.toUpperCase()}
                  </span>
                ))
              }
            </div>

           <span className={`px-3 py-1 rounded-full text-sm mt-2 ${status[friend.status]}`}>
  {friend.status}
</span>
          </div>

        </Link>
      </div>
            
        </div>
    );
};

export default FriendsCardDetails;