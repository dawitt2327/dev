import React, { useState } from "react";
import FreelancerHeader from "../Header/Header";
import devaImg from "../../../../assets/images/Deva.jpg";

const NotificationPage = () => {
  // Example data for notifications
  const notifications = [
    {
      id: 1,
      type: "comment",
      content: "Daniel Demelash and 9 others have commented on your post.",
      avatar: devaImg,
      time: "10:30 AM",
    },
    {
      id: 2,
      type: "like",
      content: "Kalkidan Getahun and 7 others liked your post.",
      avatar: devaImg,
      time: "11:45 AM",
    },
    {
      id: 3,
      type: "reposted",
      content: "Dagmawi Neibiat reposted your post.",
      avatar: devaImg,
      time: "2:15 PM",
    },
    {
      id: 4,
      type: "send-birthday",
      content: "Wish Dagmawi Eyob a happy birthday!",
      avatar: devaImg,
      time: "9:00 AM",
    },
    {
      id: 5,
      type: "post",
      content: "You have a new follower: Mekdes Tibebu.",
      avatar: devaImg,
      time: "4:20 PM",
    },
    {
      id: 6,
      type: "profile-view",
      content: "Daniel Demelash viewed your profile.",
      avatar: devaImg,
      time: "1:30 PM",
    },
    {
      id: 7,
      type: "job-recommendation",
      content:
        "New job recommendation: Fullstack Software Developer at Addis Software.",
      avatar: devaImg,
      time: "3:45 PM",
    },
    {
      id: 8,
      type: "comment",
      content: "Daniel Demelash and 9 others have commented on your post.",
      avatar: devaImg,
      time: "10:30 AM",
    },
    {
      id: 9,
      type: "like",
      content: "Kalkidan Getahun and 7 others liked your post.",
      avatar: devaImg,
      time: "11:45 AM",
    },
    {
      id: 10,
      type: "reposted",
      content: "Dagmawi Neibiat reposted your post.",
      avatar: devaImg,
      time: "2:15 PM",
    },
    {
      id: 11,
      type: "send-birthday",
      content: "Wish Dagmawi Eyob a happy birthday!",
      avatar: devaImg,
      time: "9:00 AM",
    },
    {
      id: 12,
      type: "post",
      content: "You have a new follower: Mekdes Tibebu.",
      avatar: devaImg,
      time: "4:20 PM",
    },
    {
      id: 13,
      type: "profile-view",
      content: "Daniel Demelash viewed your profile.",
      avatar: devaImg,
      time: "1:30 PM",
    },
    {
      id: 14,
      type: "job-recommendation",
      content:
        "New job recommendation: Fullstack Software Developer at Addis Software.",
      avatar: devaImg,
      time: "3:45 PM",
    },

    // Add more notification data as needed
  ];

  return (
    <>
      <FreelancerHeader selectedNav={4} />
      <div className="flex justify-between ml-10">
        <div>
          {/* <div className="leftSide hidden md:flex flex-col gap-2 flex-shrink-0 w-auto h-50 items-start  mt-[100px]  p-10 shadow-lg rounded-[5%]">
            <h3 className="font-bold text-gray-800">
              Manage your Noifications
            </h3>
            <a
              href="#"
              className="cursor-pointer text-blue-500 hover:underline font-bold"
            >
              View Setting
            </a>
          </div> */}
          {/* <div className="unlock leftSide hidden md:flex flex-col flex-shrink-0 w-auto h-50 items-center  p-10 shadow-lg rounded-[5%] ">
            <img
              className="unlock mx-auto w-14 h-14 rounded-full sm:mx-0 sm:shrink-0"
              src={devaImg}
              alt="deva"
            />
            <p className="text-gray-800 font-bold">
              Dawit, Unlock your Colabs Premiere
            </p>
            <button className="shadow-lg text-blue-500 font-bold p-4">
              Unlock for 1 Month for Free
            </button>
          </div> */}
        </div>

        <div className="w-full flex-grow h-full mt-[50px] py-8">
          <div className="notifications items-center">
            {notifications.map((notification) => (
              <div key={notification.id} className="">
                <NotificationItem
                  type={notification.type}
                  content={notification.content}
                  avatar={notification.avatar}
                  time={notification.time}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const NotificationItem = ({ type, content, avatar, time }) => {
  let icon;
  switch (type) {
    case "comment":
      icon = "💬";
      break;
    case "like":
      icon = "👍";
      break;
    case "reposted":
      icon = "🔄";
      break;
    case "send-birthday":
      icon = "🎂";
      break;
    case "post":
      icon = "✉️";
      break;
    case "profile-view":
      icon = "👀";
      break;
    case "job-recommendation":
      icon = "💼";
      break;
    default:
      icon = "❗";
  }

  const [showNotification, setShowNotification] = useState(false);

  const handleNotificationClick = () => {
    setShowNotification(!showNotification);
  };

  return (
    <>
      <div className="py-8 px-8 w-2/3  my-[10px] mx-auto bg-white rounded-xl shadow-lg space-y-0 sm:py-1 sm:flex sm:items-center  sm:space-y-0 sm:space-x-1">
        <div className="avatar">
          <img
            className="block mx-auto w-10 h-auto rounded-full sm:mx-0 sm:shrink-0"
            src={avatar}
            alt="Avatar"
          />
        </div>
        <div className="notification-content">
          <span className="mr-2">{icon}</span>
          <span
            onClick={handleNotificationClick}
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            {content}
          </span>
          {showNotification && (
            <div className="notification-popup flex-grow justify-end mx-auto">
              <p className="grow text-lg">{content}</p>
              <p className="notification-time text-sm text-gray-600">{time}</p>
            </div>
          )}{" "}
          <br />
        </div>
      </div>
    </>
  );
};

export default NotificationPage;
