// import { createBrowserRouter } from "react-router";
import MainLayout from "../assets/Layout/MainLayout";
import Hompage from "../assets/Pages/Hompage";
import Timeline from "../assets/Components/Timeline/Timeline";
import Stats from "../assets/Components/Stats/Stats";
import { createBrowserRouter } from "react-router";
import FriendDetails from "../assets/Pages/FriendDetails/FriendDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { 
        index : true,
        element : <Hompage></Hompage>

      },
      {
        path : "/home",
        element : <Hompage></Hompage>
      },
      {
        path : "/timeline",
        element : <Timeline></Timeline>
      },
      {
        path : "/stats",
        element : <Stats></Stats>
      },
      {
        path : "/friendDetails/:id",
        element : <FriendDetails></FriendDetails>,
        loader : () => fetch("/data.json"),
      },


    ]

  },
]);