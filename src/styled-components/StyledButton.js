import styled, { css } from "styled-components";

const Hover = css`
  &:hover{
    background-color: aquamarine;
  }
`
const StyledButton = styled.button`
  margin: 0 10px;
  background-color: lightgreen;
  ${Hover}
`

export default StyledButton;