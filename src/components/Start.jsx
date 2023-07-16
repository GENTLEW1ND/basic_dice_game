import React from 'react'
import styled from "styled-components"

const Start = () => {
  return (
    <Container>
        <img src="\images\dices.png" alt="dice logo" />
        <div>
            <h1>DICE GAME</h1>
            <Button>Play now</Button>
        </div>
    </Container>
  )
}

export default Start

const Container = styled.div`
    max-width: 1180px;
    

`;
const Button = styled.button`
    align-items: center;
    padding: 10px 10px;
    background-color: #000000;
    border-radius: 5px;
    color: white;
    width: 220px;
    border: none;

`