"use client";

import { fetchRoomsByUser } from "@/services/roomService";
import socket from "@/utils/socket";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";

const MyQuiz = () => {
  const [quizes, setQuizes] = useState<any[]>([]);
  const { user } = useUser();

  useEffect(() => {
    if (!user) return;

    const fetchQuizzes = async () => {
      try {
        const q = await fetchRoomsByUser(user.id);
        setQuizes(q.rooms);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };

    fetchQuizzes();

    socket.on("roomMembers", ({ roomId, members }) => {
      setQuizes((prev) =>
        prev.map((room) =>
          room._id === roomId
            ? {
                ...room,
                joinedUsers: members.map((name: string) => ({ name })),
              }
            : room
        )
      );
    });
  }, [user]);

  const handleJoin = (roomId: string, name: string, userId: string) => {
    alert(roomId + name);
    socket.emit("joinRoom", { roomId, name, userId });
  };

  return (
    <div className="w-full h-screen  ">
      <div className="w-full h-[100px]  mt-4 flex justify-center items-center text-3xl font-medium">
        <h1>Your Quiz Arena</h1>
      </div>

      <div className="grid grid-cols-3 gap-1 gap-y-6 mt-6 p-20  ">
        {quizes.map((q, i) => (
          <div className="relative w-[400px] h-[250px]  bg-gray-200 rounded-xl shadow-md flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition-transform">
            <img
              src="Vector 7777.png"
              alt="vector"
              className="absolute top-3 left-3 w-[300px] h-[100px]"
            />
            {q.joinedUsers?.some(
              (u: any) => u.userId === user?.id || u.name === user?.fullName
            ) ? (
              <button className="absolute bottom-3 right-3 w-[200px] h-[70px] cursor-not-allowed opacity-80">
                <img
                  src="VectorButton.png"
                  alt="vector button"
                  className="w-full h-full"
                />
                <span className="absolute mt-5 ml-6 inset-0 flex items-center justify-center text-white font-medium text-lg">
                  Joined
                </span>
              </button>
            ) : (
              <button
                onClick={() =>
                  handleJoin(
                    q._id as string,
                    user?.fullName as string,
                    user?.id as string
                  )
                }
                className="absolute bottom-3 right-3 w-[200px] h-[70px]"
              >
                <img
                  src="VectorButton.png"
                  alt="vector button"
                  className="w-full h-full"
                />
                <span className="absolute mt-5 ml-6 inset-0 flex items-center justify-center text-white font-medium text-lg">
                  Join
                </span>
              </button>
            )}

            <div className="flex flex-col gap-2 absolute top-5 left-6">
              <h1 className="font-bold text-3xl">{q.roomName}</h1>
              <p className="font-medium text-xl">{q.type}</p>
            </div>

            {user!.id == q.hostId && (
              <button className="absolute right-2 top-2 px-4 py-1 rounded-3xl border-2 border-red-500   font-semibold shadow-md  transition">
                Host
              </button>
            )}

            <div className="flex  gap-7 absolute top-30 left-6 text-lg font-serif">
              <h1>Difficulty : {q.difficulty}</h1>
              <h1>UserLimit : {q.userLimit}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyQuiz;
