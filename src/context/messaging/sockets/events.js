import { socket } from "./index";
import { addClientToQueue } from "./emit";

export const socketEvents = () => {
  socket.on("connect", ()=>{
        addClientToQueue();
    });

    socket.on("receive_chat_id", (data)=>{
      console.log(data);
    })

    socket.on("incoming_private_message", (data)=>{
      console.log(data);
    })

  //TODO: add all necessary socket events
};
