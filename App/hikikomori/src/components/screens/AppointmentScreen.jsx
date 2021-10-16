import React, { useState } from "react";

import { questions } from "../../constants/AppointmentQuestions";

import "./AppiontmentScreen.css";

export default function AppointmentScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(
    findQuestion(`initial`)
  );

  function findQuestion(questionName) {
    console.log(questions.find((x) => x.name === questionName));
    return questions.find((x) => x.name === questionName);
  }

  function handleQuiz(question) {
    if (question.finalAnswer !== undefined) {
      return <p className="FinalAnswer">{question.finalAnswer}</p>;
    } else
      return (
        <div>
          <p>{question.question}</p>
          {question.answers.map((answer) => (
            <div
              className="AnswerList"
              onClick={() =>
                setCurrentQuestion(() => findQuestion(answer.nextQuestion))
              }
            >
              <p>{answer.answer}</p>
            </div>
          ))}
        </div>
      );
  }
  return (
    <div className="AppointmentScreenWrapper">
      <h1>AppointmentScreen</h1>
      {handleQuiz(currentQuestion)}
      <button onClick={() => setCurrentQuestion(findQuestion(`initial`))}>
        Restart
      </button>
    </div>
  );
}
