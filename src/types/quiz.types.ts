export type Option = {
    value: string;
    /**
     * For correct answer make this true
     */
    isRight: boolean;
  };
  
  export type Ques = {
    ques: string;
    points: number;
    negativePoints?: number;
    options: Option[];
  };
  
  export type Quiz = {
    name: string;
    questions: Ques[];
  };
  