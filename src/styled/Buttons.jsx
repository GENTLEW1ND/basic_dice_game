import { styled } from "styled-components";

export const Button = styled.button`
    align-items: center;
    padding: 10px 10px;
    background-color: #000000;
    border-radius: 5px;
    color: white;
    width: 220px;
    /* border: none; */
    font-size: 16px;
    &:hover{
      cursor: pointer;
      background-color: white;
      color: black;
      transition: all 0.5s;
    }

`
export const OutLineButton = styled(Button)`
background-color: white;
color: black;
&:hover{
      background-color: black;
      color: white;
}
`
