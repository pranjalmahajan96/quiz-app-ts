import { QuizState1, Action1 } from "../types";

export const quizReducer = (state: QuizState1, action: Action1): QuizState1 => {
  switch (action.type) {
    case "RIGHT-ANS":
      return {
        ...state,
        score: state.score + action.payload,
        currentQues: state.currentQues + 1,
        status: "playing"
      };
    case "WRONG-ANS":
      return {
        ...state,
        score: state.score ,
        currentQues: state.currentQues + 1,
        status: "playing"
      };
    case "RESET":
      return {
        ...state,
        score: 0,
        currentQues: 1,
        status: "reset"
      };
    default:
      console.log("You are breaking something");
      return state;
  }
};
