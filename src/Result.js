import React from "react";
import StyledButton from "./styled-components/StyledButton";
import styled from "styled-components";

const StyledP = styled.p`
  font-size: 90%;
  line-height: 10%;
`

export default function Result ({completed, log, showLog, setShowLog}){
    return(
        <>
            <div>
                Выполнено {completed} заданий
            </div>
            <StyledButton onClick={() => setShowLog(true)}>show log</StyledButton>
            <div>
                {showLog && log.map((item, index) => (<StyledP key={index}>{item}</StyledP>))}
            </div>
        </>
    )
}