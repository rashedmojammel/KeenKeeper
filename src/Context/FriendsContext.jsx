import React, { createContext, useEffect, useState } from "react";
import { FaMessage, FaPhone, FaVideo } from "react-icons/fa6";
import { toast } from "react-toastify";
import { getallTimelineFromLocalDB, addTimelineToLocalDB } from "../Utils/LocalDb";

export const FriendsContext = createContext();

const FriendsProvider = ({ children }) => {
  const [storedTimeline, setStroredTimeline] = useState([]);

  // 🔄 Load from localStorage on first render
  useEffect(() => {
    const data = getallTimelineFromLocalDB();
    setStroredTimeline(data);
  }, []);

  // 📞 CALL
  const handleCall = (friend) => {
    const newItem = {
      type: "Call",
      name: friend.name,
      date: new Date().toLocaleTimeString(),
    };

    setStroredTimeline((prev) => [...prev, newItem]);
    addTimelineToLocalDB(newItem);

    toast(
      <div className="flex items-center gap-2">
        <FaPhone className="text-green-400" />
        Calling {friend.name}
      </div>
    );
  };

  // 💬 TEXT
  const handleText = (friend) => {
    const newItem = {
      type: "Text",
      name: friend.name,
      date: new Date().toLocaleTimeString(),
    };

    setStroredTimeline((prev) => [...prev, newItem]);
    addTimelineToLocalDB(newItem);

    toast(
      <div className="flex items-center gap-2">
        <FaMessage className="text-blue-400" />
        Text sent to {friend.name}
      </div>
    );
  };

  // 🎥 VIDEO
  const handleVideo = (friend) => {
    const newItem = {
      type: "Video",
      name: friend.name,
      date: new Date().toLocaleTimeString(),
    };

    setStroredTimeline((prev) => [...prev, newItem]);
    addTimelineToLocalDB(newItem);

    toast(
      <div className="flex items-center gap-2">
        <FaVideo className="text-purple-400" />
        Video call made to {friend.name}
      </div>
    );
  };

  const data = {
    storedTimeline,
    handleCall,
    handleText,
    handleVideo,
  };

  return (
    <FriendsContext.Provider value={data}>
      {children}
    </FriendsContext.Provider>
  );
};

export default FriendsProvider;