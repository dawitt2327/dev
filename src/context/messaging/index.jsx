import React, { useState } from "react";
import SocketContext from "./SocketContext";
import { initSockets } from "./sockets/index";

const SocketProvider = (props) => {
  const [messages, setMessages] = useState([]);
  

  initSockets();
  
  return (
    <SocketContext.Provider value={{messages, setMessages }}>
      {props.children}
    </SocketContext.Provider>

  );
};
export default SocketProvider;
