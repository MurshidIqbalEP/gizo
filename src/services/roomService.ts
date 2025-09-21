import toast from "react-hot-toast";
import api from "../lib/api";
import roomRoutes from "./endpoints/roomEndpoints";
import { QuizQuestion } from "@/types/room";

export const createRoom = async (roomName:string,limit:number,difficulty:string,type:string,hostId:string) => {
  try {
    const res = await api.post(roomRoutes.createRoom,{roomName,limit,difficulty,type,hostId});
    toast.success(res.data.message,);
    return res.data;
  } catch (error) {
    alert(error) 
  }
};

export const addQuestions = async(questions:QuizQuestion[],roomId:string) => {
  try {
    const res = await api.post(roomRoutes.addQuestion,{questions,roomId});
    toast.success(res.data.message,);
    return res.data;
  } catch (error) {
    alert(error) 
  }
};

