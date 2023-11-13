import React, {useContext} from 'react'
import SocketContext from '../../../../../../context/messaging/SocketContext';
import { getReceiverId } from '../chatbody/ChatBody';

const ConnectionList = ({props}) => {
    const {onlineUsers, messages, setMessages, setChatIndex} = props;

    const getChat = (userId) => {
        let exists = false;

        messages.forEach((message, index)=>{
            if(userId == getReceiverId(messages, index)){
                setChatIndex(index);
                exists = true;
                return;
            }
        });
        
        if(!exists){
            
            setMessages([
              ...messages,
              {
                _id: null,
                type: "Private",
                members: [
                  userId,
                  JSON.parse(localStorage.getItem("user"))["_id"],
                ],
                totalMessages: [],
                inbox: [],
                createdAt: Date.now(),
                updatedAt: Date.now(),
              },
            ]);
            setChatIndex(messages.length);
        }
    }

    return (
      <>
        <div className="h-screen p-4 right flex flex-col w-1/4 relative ">
          <div>
          <h1 className="text-lg font-bold">Connections</h1>
          <hr className="w-full" />
        </div>
          {onlineUsers.map((user, index) => {
            const onlineStatus = user.isOnline ? (
              <div className="rounded-full w-3 h-3 bg-green-500 mt-2 mx-6 relative left-8 bottom-5"></div>
            ) : null;
            const dateTime = new Date(Date.parse(user.lastSeen))
              .toLocaleString()
              .split(",");
            const lastSeen = user.isOnline ? (
              <p className="text-[8px]">Online</p>
            ) : (
              <div>
                <p className="text-[8px]">{dateTime[0].trim()}</p>

                <p className="text-[8px]">{dateTime[1].trim()}</p>
              </div>
            );
            return (
              <button
                key={index}
                className="w-full h-16 bg-white rounded-lg my-[1px] flex"
                onClick={() => getChat(user.userId)}
              >
                <div>
                  <div className="rounded-full w-12 h-12 bg-black mt-2 mx-6"></div>
                  {onlineStatus}
                </div>

                <div className="overflow-hidden grid justify-items-start">
                  <h1 className="text-md mt-2">{user.userName}</h1>
                  {lastSeen}
                </div>
              </button>
            );
          })}
        </div>
      </>
    );
}

export default ConnectionList
