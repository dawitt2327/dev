import io from "socket.io-client";
import { socketEvents } from "./events";
import { BaseURL } from "../../../services/constants/Constants";

export const socket = io(
    BaseURL.replace('/api/v1/', ''),
{
    autoConnect: false
});

export const initSockets = ( ) => {
    socket.connect();
    
    socketEvents();
};
