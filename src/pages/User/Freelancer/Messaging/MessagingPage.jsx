import React, { useEffect, useState } from "react";
import FreelancerHeader from "../Header/Header";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import ChatList from "./components/chatlist/ChatList";
import ChatBody from "./components/chatbody/ChatBody";
import ConnectionList from "./components/connectionlist/ConnectionList";
import Grid from "@mui/material/Grid";
import "./messagingpage.css";
import Divider from "@mui/material/Divider";
import axios from "axios";
import SocketContext from "../../../../context/messaging/SocketContext";
import { BaseURL } from "../../../../services/constants/Constants";


export const getMessages = async () => {
  const response = await axios.get(
    `${BaseURL}messaging/${JSON.parse(localStorage.getItem("user"))["_id"]}`
  );
  return response["data"]["messages"];
};

export const fetchProfileData = async (onlineUsers) => {
  const response = await axios.post(
    `${BaseURL}profile/data`,
    { userIds: onlineUsers },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response.data;
};

const MessagingPage = () => {
  const theme = useTheme();
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [ messages, setMessages ] = useState([]);
  const [chatIndex, setChatIndex] = useState(0);
  const [profileData, setProfileData] = useState([]);
  
  useEffect(() => {
    const fetchLastSeen = async () =>  
          await axios.post(
            `${BaseURL}messaging/lastSeen`,
            {
              userIds: JSON.parse(localStorage.getItem("user"))[
                "connections"
              ].join(","),
            },
            { headers: { "Content-Type": "application/json" } }
          );

    fetchLastSeen().then((value) => {
      setOnlineUsers(value["data"]);
    });

    getMessages().then((value) => {
      setMessages(value);
    });
    
  }, []);

  useEffect(() => {
    let receiverIds = [];
    messages.forEach((message) =>
      message.members.forEach((member) => {
        if (member !== JSON.parse(localStorage.getItem("user"))["_id"])
          receiverIds.push(member);
      })
    );
  
    fetchProfileData(receiverIds).then((value) => {
      setProfileData(value);
    });
  }, [messages]);

  return (
    <>
        <FreelancerHeader selectedNav={3} />
        <div className="w-full h-full mt-[50px] px-20 py-8">
          <div
            style={{
              position: "fixed",
            }}
          >
            <Box
              sx={{
                backgroundColor: theme.palette.background.paper,
                boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.15)",
                width: 1400,
                height: "82vh",
                borderRadius: "14px",
              }}
            >
                <div className="main__chatbody h-[100%]">
                  <Grid container spacing={0}>
                    <Grid item xs={6} md={4}>
                      <ChatList props={{messages, onlineUsers, profileData, setChatIndex }} />
                    </Grid>
                    <Divider orientation="vertical" variant="middle" flexItem />

                    <ChatBody props={{messages, setMessages, chatIndex, profileData }}/>
                  </Grid>

                  <ConnectionList props={{onlineUsers, messages, setMessages, setChatIndex}}/>
                </div>
            </Box>
          </div>
        </div>
    </>
  );
};

export default MessagingPage;
