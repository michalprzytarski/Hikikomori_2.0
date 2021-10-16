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
    if (question.doctor === `HOSPITAL`)
      return (
        <p
          className="FinalAnswer"
          style={{ color: "red", fontWeight: "bold", fontSize: "32px" }}
        >
          {question.finalAnswer}
        </p>
      );
    if (question.doctor !== undefined) {
      return (
        <>
          <p className="FinalAnswer">{question.finalAnswer}</p>
          <p
            className="Button"
            onClick={() => handleMakeAppointment(question.doctor)}
          >
            Make an appointment
          </p>
        </>
      );
    } else
      return (
        <>
          <p id="question">{question.question}</p>
          <ul>
            {question.answers.map((answer) => (
              <li
                key={answer.key}
                className="AnswerList"
                onClick={() =>
                  setCurrentQuestion(() => findQuestion(answer.nextQuestion))
                }
              >
                <p className="Button">{answer.answer}</p>
              </li>
            ))}
          </ul>
        </>
      );
  }

  function handleMakeAppointment(doctor) {
    console.log(`Umów spotkanie z ${doctor}`);
  }
  return (
    <div className="AppointmentScreenWrapper">
      <h1>MAKE AN APPOINTMENT</h1>
      <hr></hr>
      {handleQuiz(currentQuestion)}
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
