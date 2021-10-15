import React, { useState, useEffect } from "react";

import { questions } from "../../constants/AppointmentQuestions";

export default function AppointmentScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(
    findQuestion(`initial`)
  );

  useEffect(() => {
    setCurrentQuestion(findQuestion(`initial`));
    return () => {};
  }, []);

  function findQuestion(questionName) {
    console.log(questions.find((x) => x.name === questionName));
    return questions.find((x) => x.name === questionName);
  }

  function printQuestion(question) {
    return (
      <div>
        <h3>{question.question}</h3>
        <ul>
          {question.answers.map((answer) => (
            <li>{answer.answer}</li>
          ))}
        </ul>
      </div>
    );
  }

  function handleQuiz(question) {
    if (question.finalAnswer !== undefined) {
      return <h1>{question.finalAnswer}</h1>;
    } else
      return (
        <div>
          <h3>{question.question}</h3>
          {question.answers.map((answer) => (
            <button
              onClick={() =>
                setCurrentQuestion(() => findQuestion(answer.nextQuestion))
              }
            >
              {answer.answer}
            </button>
          ))}
        </div>
      );
  }
  return (
    <div>
      <h1>AppointmentScreen</h1>
      {handleQuiz(currentQuestion)}
    </div>
  );
}
