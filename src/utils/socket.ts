import { io } from "socket.io-client";

const socket = io(process.env.NEXT_PUBLIC_SERVER_URL, {
   withCredentials: true,
  autoConnect: false,
  reconnection: true,          // try to reconnect automatically
  reconnectionAttempts: 10,    // number of retries
  reconnectionDelay: 2000,     // wait 2 seconds between tries
  timeout: 10000,      
});

export default socket;
