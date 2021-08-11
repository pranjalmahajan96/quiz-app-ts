import { QuizState1 } from "./index";
import { Action } from "./reducer.types";
import React from "react";

type Dispatch = (action: Action) => void;

export type ContextType = {
  state: QuizState1;
  dispatch: Dispatch;
};

export type QuizProviderProp = {
  children: React.ReactNode;
};
