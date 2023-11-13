import React, { useContext, useState, useEffect } from "react";
import "./chatlist.css";
import ChatListItems from "./ChatListItems";
import SocketContext from "../../../../../../context/messaging/SocketContext";
import { getReceiverId } from "../chatbody/ChatBody";

const ChatList = ({props}) => {
  const { messages, onlineUsers, profileData, setChatIndex } = props; 
  
  return (
      <div className="main__chatlist">
        <div className="chatlist__heading">
          <h2>Messages</h2>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Message ..." required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {
          messages.map((item, index) => {
            let isOnline = "";
            onlineUsers.forEach(users => {
              if(users.userId === item.senderId){ 
                isOnline = "active"
              }
            });
            let userName = ''

            profileData.forEach((value)=>{
              if(value._id === getReceiverId(messages, index))
                userName = `${value.firstName} ${value.lastName}`;
            });
            let lastMessage =
              item.totalMessages.length !== 0 ? item.totalMessages[item.totalMessages.length - 1].message : '';
            return (
              <ChatListItems
                name={userName}
                key={index}
                chatIndex={index}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={isOnline}
                lastOnline={new Date(item.updatedAt).toLocaleDateString()}
                lastMessage={lastMessage}
                //image={item.image}
                setChatIndex={setChatIndex}
              />
            );
          })}
        </div>
      </div>
    );
}

export default ChatList;