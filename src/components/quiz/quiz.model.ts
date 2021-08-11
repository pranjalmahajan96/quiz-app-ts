import { Quiz1 } from "../../types";

export const quizModel: Quiz1 = {
  name: "HTML5",
  questions: [
    {
      ques: "Is HTML5 backward compatible with old browsers?",
      points: 1,
      negativePoints: 2,
      options: [
        {
          value: "True",
          isRight: true
        },
        {
          value: "False",
          isRight: false
        }
      ]
    },
    {
      ques:
        "Which of the following tag is used to represent the result of different types of output in HTML5?",
      points: 1,
      options: [
        {
          value: "output",
          isRight: true
        },
        {
          value: "placeholder",
          isRight: false
        },
        {
          value: "autofocus",
          isRight: false
        },
        {
          value: "required",
          isRight: false
        }
      ]
    },
    {
      ques: "When does a session storage data gets deleted in HTML5?",
      points: 1,
      options: [
        {
          value: "Immediately after the Session gets terminated",
          isRight: true
        },
        {
          value: "You need to call localStorage.clear() method",
          isRight: false
        },
        {
          value: "Both of the above",
          isRight: false
        },
        {
          value: "None of the above",
          isRight: false
        }
      ]
    },
    {
      ques:
        "Which of the following attribute triggers event when an element is being dragged over a valid drop target?",
      points: 1,
      options: [
        {
          value: "ondragleave",
          isRight: false
        },
        {
          value: "ondragover",
          isRight: true
        },
        {
          value: "ondrag",
          isRight: false
        },
        {
          value: "ondragstart",
          isRight: false
        }
      ]
    },
    {
      ques:
        "Which of the following attribute triggers event when the duration and other media data of a media element is loaded?",
      points: 1,
      options: [
        {
          value: "onloadstart",
          isRight: false
        },
        {
          value: "onloadedmetadata",
          isRight: true
        },
        {
          value: "onmessage",
          isRight: false
        },
        {
          value: "onoffline",
          isRight: false
        }
      ]
    }
  ]
};
