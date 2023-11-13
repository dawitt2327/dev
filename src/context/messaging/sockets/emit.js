import { socket } from "./index";

export const addClientToQueue = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  socket.emit("connect-user", user['_id']);
};
export const sendMessage = (data) => {
  socket.emit("private-message", data);
};

