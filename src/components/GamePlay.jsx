import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import Rolldice from "./Rolldice";
import Rules from "./Rules";
import { useState } from "react";
import { Button, OutLineButton } from "../styled/Buttons";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectNumber, setSelectNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectNumber) {
      setError("You have not selected any number");
      return;
    }
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(() => randomNumber);

    if (selectNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else setScore((prev) => prev - 2);

    setSelectNumber(undefined);
  };

const resetScore = ()=>{
    setScore(0)
}

  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector
          setError={setError}
          error={error}
          selectNumber={selectNumber}
          setSelectNumber={setSelectNumber}
        />
      </div>
      <Rolldice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutLineButton onClick={resetScore}>Reset Score</OutLineButton>
        <Button onClick={()=> setShowRules((a)=>!a)}>{
          showRules? "Hide" : "show"
          }Show Rules</Button>
      </div>
      {showRules && <Rules/>}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns{
    margin-top: 40px;
    display: flex;
    gap:10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
