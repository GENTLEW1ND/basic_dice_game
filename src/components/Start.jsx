import React from 'react'
import styled from "styled-components"
import { Button } from '../styled/Buttons'

const Start = ({toggle}) => {
  return (
    <Container>
        <div><img src="\images\dices.png" alt="dice logo" /></div>
        <div className='content'>
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play now</Button>
        </div>
    </Container>
  )
}

export default Start

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;

  .content >h1{
    font-size: 96px;
    white-space: nowrap;
  }
`;
