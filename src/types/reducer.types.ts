export type Status = "starting" | "finished" | "reset" | "playing";

export type QuizState = {
  score: number;
  currentQues: number;
  status: Status;
};

export type Action =
  | { type: "RIGHT-ANS"; payload: number }
  | { type: "WRONG-ANS"; payload?: number }
  | { type: "RESET" };
