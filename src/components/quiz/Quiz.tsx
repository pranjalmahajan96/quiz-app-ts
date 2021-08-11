import { quizModel } from "./quiz.model";
import { useQuiz } from "../../context";
import { Header } from "../../components";

export const Quiz = () => {
  const buttonStyle = {
    display: "block",
    textAlign: "center" as const,
    fontSize: "1.2rem",
    width: "100%",
    margin: "0.2rem"
  };

  const { state, dispatch } = useQuiz();
  return (
    <div className="container centered-div" > 
    <Header username={"User"} score={state.score} status={state.status}  />
      <div >
        <h2>{quizModel.name}</h2>
      </div>

      {state.currentQues < quizModel.questions.length + 1 ? (
        <>
          <h2>
            Question No {state.currentQues}:
            {quizModel.questions[state.currentQues - 1].ques}
          </h2>

          <div className="centered-div">
            {quizModel.questions[state.currentQues - 1].options.map((opt) => (
              <div className="btn-width centered-div">
                    <button className="btn btn-filled btn-no-hover btn-width"
                    style={buttonStyle}
                    key={opt.value}
                    onClick={() => {
                      return opt.isRight
                        ? dispatch({
                            type: "RIGHT-ANS",
                            payload:
                              quizModel.questions[state.currentQues - 1].points
                          })
                        : dispatch({
                            type: "WRONG-ANS",
                            payload: quizModel.questions[state.currentQues - 1]
                              .negativePoints
                              ? quizModel.questions[state.currentQues - 1]
                                  .negativePoints
                              : 0
                          });
                    }}
                  >
                    {opt.value}
                  </button>
              </div>
              
            ))}

          </div>
        </>
      ) : (
        <>
          <h1>Quiz finished!</h1>
          <h2>
            Your score is: {state.score}/
            {quizModel.questions
              .map((q) => q.points)
              .reduce((acc, val) => acc + val, 0)}
          </h2>
          <span>
            <button className="btn btn-filled "
              onClick={() => dispatch({ type: "RESET" })}
            >
              TRY AGAIN?
            </button>
          </span>
        </>
      )}
    </div>
  );
};
