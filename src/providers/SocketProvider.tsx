"use client";
import { ReactNode, useEffect } from "react";
import socket from "@/utils/socket";

export const SocketProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

  return <>{children}</>;
};
