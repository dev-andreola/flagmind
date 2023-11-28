import React from "react";

const Quiz = () => {
  const quizData = [
    {
      country: "Brazil",
      flag: "https://www.worldometers.info/img/flags/br-flag.gif",
      a: "México",
      b: "Japan",
      c: "Brazil",
      d: "Bulgaria",
    },
    {
      country: "Colombia",
      flag: "https://www.worldometers.info/img/flags/co-flag.gif",
      a: "India",
      b: "Japan",
      c: "Madagascar",
      d: "Haiti",
    },
  ];

  const currentQuestion = 0;

  console.log(quizData[currentQuestion]);

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
        <img
          className="w-72"
          src="https://www.worldometers.info/img/flags/br-flag.gif"
        />
      </div>
      {/* QUIZ ANSWERS CONTAINER */}
      <div className="bg-slate-100 rounded-t-lg p-3 w-2/3">
        <ul className="grid grid-cols-2" id="questionList">
          <li className="p-1 m-1 flex items-center justify-start gap-x-1 bg-slate-200 rounded-lg cursor-pointer">
            <input
              type="radio"
              name="answer"
              id="a"
              className="cursor-pointer"
            />
            <label className="cursor-pointer" htmlFor="a">
              México
            </label>
          </li>
          <li className="p-1 m-1 flex items-center justify-start gap-x-1 bg-slate-200 rounded-lg cursor-pointer">
            <input
              type="radio"
              name="answer"
              id="b"
              className="cursor-pointer"
            />
            <label className="cursor-pointer" htmlFor="b">
              Japão
            </label>
          </li>
          <li className="p-1 m-1 flex items-center justify-start gap-x-1 bg-slate-200 rounded-lg cursor-pointer">
            <input
              type="radio"
              name="answer"
              id="c"
              className="cursor-pointer"
            />
            <label className="cursor-pointer" htmlFor="c">
              Brazil
            </label>
          </li>
          <li className="p-1 m-1 flex items-center justify-start gap-x-1 bg-slate-200 rounded-lg cursor-pointer">
            <input
              type="radio"
              name="answer"
              id="d"
              className="cursor-pointer"
            />
            <label className="cursor-pointer" htmlFor="d">
              Bulgaria
            </label>
          </li>
        </ul>
      </div>
      {/* QUIZ SUBMIT BUTTON */}
      <button className="py-3 text-white font-bold tracking-widest uppercase w-full rounded-b-lg bg-slate-600 hover:bg-slate-500 text-center">
        Enviar
      </button>
    </div>
  );
};

export default Quiz;
