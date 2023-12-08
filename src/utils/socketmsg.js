import { io } from "socket.io-client";

// eslint-disable-next-line no-undef
const server_url = process.env.SERVER_URL || "http://localhost:4444";

export const socket = io(server_url);
