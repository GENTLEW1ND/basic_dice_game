import { styled } from "styled-components";

const Rolldice = ({currentDice,roleDice}) => {

 

  return (
    <DiceContainer>
      <div onClick={roleDice} className="dice">
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice1 image" />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  );
};

export default Rolldice;

const DiceContainer = styled.div`
  display: flex;
  margin-top: 48px;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 24px;
  }
  .dice {
    cursor: pointer;
  }
`;
