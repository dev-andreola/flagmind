import React, { useEffect, useState } from "react";

const Quiz = () => {
  const quizData = [
    {
      country: "Brazil",
      flag: "https://www.worldometers.info/img/flags/br-flag.gif",
      a: "México",
      b: "Japan",
      c: "Brazil",
      d: "Bulgaria",
      res: "c",
    },
    {
      country: "Colombia",
      flag: "https://www.worldometers.info/img/flags/co-flag.gif",
      a: "India",
      b: "Colombia",
      c: "Madagascar",
      d: "Haiti",
      res: "b",
    },
    {
      country: "Colombia",
      flag: "https://www.worldometers.info/img/flags/co-flag.gif",
      a: "India",
      b: "Colombia",
      c: "Madagascar",
      d: "Haiti",
      res: "b",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);

  const [userAnswer, setUserAnswer] = useState(undefined);

  const handleAnswerChange = (event) => {
    setUserAnswer(event.target.id);
  };

  // BUTTON ONCLICK EVENT
  const submit = () => {
    // IF DON'T HAVE ANY CHECKED
    if (!userAnswer) {
      alert("Você precisa preencher uma das opções!");
      return;
    }
    // GET THE ANSWER RIGHT
    if (userAnswer === quizData[currentQuestion].res) {
      setScore((prevScore) => prevScore + 1);
      alert("Acertou! Seu score atual é: " + (score + 1));
    }
    // IF THE QUESTIONS END
    if (currentQuestion >= quizData.length - 1) {
      alert("Você terminou! Seu score final é: " + score);
    } else {
      setCurrentQuestion((current) => current + 1);
    }
    // RESET USER ANSWER
    setUserAnswer(undefined);
  };

  return (
    <div className="rounded-lg flex flex-col justify-center items-center bg-white shadow-lg">
      {/* QUIZ HEADER CONTAINER */}
      <div className="py-3 px-12 rounded-lg bg-slate-200">
        <h2 className="text-2xl font-semibold text-center">Qual é o País?</h2>
        <p className="text-sm font-light">
          Analise a bandeira abaixo e selecione o país correspondente:
        </p>
      </div>
      {/* QUIZ IMAGE CONTAINER */}
      <div className="p-3">
        <img className="w-72" src={quizData[currentQuestion].flag} />
      </div>
      {/* QUIZ ANSWERS CONTAINER */}
      <div className="bg-slate-100 rounded-t-lg p-3 w-2/3">
        <ul className="grid grid-cols-2" id="questionList">
          {["a", "b", "c", "d"].map((answerId) => (
            <label htmlFor={answerId}>
              <li
                key={answerId}
                className="p-1 m-1 flex items-center justify-start gap-x-1 bg-slate-200 rounded-lg cursor-pointer"
              >
                <input
                  type="radio"
                  name="answer"
                  id={answerId}
                  className="cursor-pointer"
                  onChange={handleAnswerChange}
                  checked={userAnswer === answerId}
                />
                {quizData[currentQuestion][answerId]}
              </li>
            </label>
          ))}
        </ul>
      </div>
      {/* QUIZ SUBMIT BUTTON */}
      <button
        type="button"
        onClick={submit}
        className="py-3 text-white font-bold tracking-widest uppercase w-full rounded-b-lg bg-slate-500 hover:bg-green-800 text-center"
      >
        Enviar
      </button>
    </div>
  );
};

export default Quiz;
