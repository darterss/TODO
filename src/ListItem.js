import React from "react";
import StyledButton from "./styled-components/StyledButton";
import styled from "styled-components";

const StyledLi = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  height: 50px;
`

export default function ListItem ( {items, setItem, handleChange,completed, setCompleted} ){

    function handleDeleteItem(item){
        const newItems = items;
        const index = newItems.findIndex(i => i.id === item.id )
        newItems.splice(index,1)
        setItem([...newItems])
        if (item.checked === true) setCompleted(completed-1)
    }
    return (<>
        {items.map(item => (<StyledLi key={item.id}>
            <label className={'label'}>
                <input className={'checkbox'}
                       onChange={e => handleChange(e, item)}
                       type={'checkbox'}
                />
                {item.text}</label>
            <StyledButton onClick={() => handleDeleteItem(item)}>Del</StyledButton>
            <p>{item.showInfo && `Вы изменили задачу "${item.text}" ${item.date} на ${item.checked}`}</p>
        </StyledLi>))}
    </>)
}