import { QuizState1, ContextType1, QuizProviderProp1 } from "../types";

import { quizReducer } from "../reducer";
import { createContext, useContext, useReducer } from "react";

const initialState: QuizState1 = {
  score: 0,
  currentQues: 1,
  status: "starting"
};

const QuizContext = createContext<ContextType1>({} as ContextType1);

export const QuizProvider = ({ children }: QuizProviderProp1) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <>
      <QuizContext.Provider
        value={{
          state,
          dispatch
        }}
      >
        {children}
      </QuizContext.Provider>
    </>
  );
};

export const useQuiz = () => {
  return useContext(QuizContext);
};
