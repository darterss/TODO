import React, {useRef, useState} from "react";
import StyledButton from "./styled-components/StyledButton";
export default function AddItem( {items, setItem} ) {
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef()

    function handleChange (e) {
        setInputValue(e.target.value);
    }

    function handleKeyDown (e){
        if(e.key === 'Enter') handleClick ()
    }

    function handleClick () {
        if (inputValue !== '') {
            const date = new Date()
            setItem([...items, {id: date.getTime(), text: inputValue, checked: false, showInfo: false}])
            setInputValue('')
            inputRef.current.focus()
        }
    }

    return(
            <>
                <input autoFocus={true} ref={inputRef} value={inputValue} onChange={e => handleChange(e)}
                       onKeyDown={e => handleKeyDown(e)} type={'text'} />
                <StyledButton onClick={() => handleClick()}>Add</StyledButton>
            </>
    )}
