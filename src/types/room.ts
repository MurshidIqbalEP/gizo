
export type RoomType = "public" | "private";

export type Difficulty = "easy" | "medium" | "hard";

export interface Room {
  id?: string;
  roomName: string;
  userLimit: number;
  difficulty: Difficulty;
  type: RoomType;
  hostId?: string;
  createdAt?: string;
}

export interface RoomErr {
  roomName: string;
  userLimit: string;
  difficulty: string;
  type: string;
}

export interface QuizOption {
  id: string
  text: string
  isCorrect: boolean
}

export interface QuizQuestion {
  id: string
  question: string
  options: QuizOption[]
}