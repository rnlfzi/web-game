import React, { useEffect, useState } from "react";
import { startGame } from "../../utils/function";
import AppBar from "./AppBar";
import Choice from "./Choice";
import Modals from "./Modals";
import Show from "./Show";

const GameSection = () => {
  const [choice, setChoice] = useState("");
  const [round, setRound] = useState(0);
  const [info, setInfo] = useState(null);
  const [point, setPoint] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const increase = () => setRound((prev) => prev + 1)

  const clickHandle = (item) => {
    const response = startGame(item)
    setInfo(null);
    setChoice(item);
    increase();
    setTimeout(() => {
      setPoint((prev) => prev + response.point);
      setInfo(response)
    }, 2000)
  }

  const reset = () => {
    setChoice("");
    setRound(0);
    setInfo(null);
    setPoint(0);
    setIsDone(false)
  }

  useEffect(() => {
    if (round === 3) {
      setTimeout(() => {
        setIsDone(true)
      }, 4000)
    }
  }, [round]) 

  return (
    <>
      <AppBar point={point}  />
      <Modals done={isDone} point={point} reset={reset} />
      <Show choice={choice} round={round} info={info} isDone={isDone} />
      <Choice clickHandle={clickHandle} done={isDone} />
    </>
  );
};

export default GameSection;
