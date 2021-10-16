import React, { useState } from "react";

import { questions } from "../../constants/AppointmentQuestions";

import "./AppiontmentScreen.css";

export default function AppointmentScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(
    findQuestion(`initial`)
  );

  function findQuestion(questionName) {
    return questions.find((x) => x.name === questionName);
  }

  function handleQuiz(question) {
    if (question.finalAnswer !== undefined) {
      return <p className="FinalAnswer">{question.finalAnswer}</p>;
    } else
      return (
        <div>
          <p id="question">{question.question}</p>
          {question.answers.map((answer) => (
            <div
              className="AnswerList"
              onClick={() =>
                setCurrentQuestion(() => findQuestion(answer.nextQuestion))
              }
            >
              <p className="Button">{answer.answer}</p>
            </div>
          ))}
        </div>
      );
  }
  return (
    <div className="AppointmentScreenWrapper">
      <h1>MAKE AN APPOINTMENT</h1>
      <hr></hr>
      <div id="appointment-questions">{handleQuiz(currentQuestion)}</div>
      <button
        id="appointment-restart"
        className="Button"
        onClick={() => setCurrentQuestion(findQuestion(`initial`))}
      >
        Restart
      </button>
    </div>
  );
}
