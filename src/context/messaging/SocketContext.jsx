import { createContext } from "react"; 

const SocketContext = createContext({  
  messages: [],
  onlineUsers: []
}); 

export default SocketContext;