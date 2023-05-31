import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import ListItem from "./ListItem";
import Result from "./Result";
import AddItem from "./AddItem"
import styled from "styled-components";

const StyledUl = styled.ul`
  width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

function ToDo(){
    const [items, setItem] = useState([
        {id:1, text:"first", checked: false, showInfo: false, date: Date()},
        {id:2, text:"second", checked: false, showInfo: false, date: Date()},
        {id:3, text:"third", checked: false, showInfo: false, date: Date()}
    ]);
    const [completed, setCompleted] = useState(0)  // нужно ли использовать state или нужно просто переменную?
    const [log, addLog] = useState([])             // нужно ли использовать state или нужно просто переменную?
    const [showLog, setShowLog] = useState(false)  // нужно ли использовать state или нужно просто переменную?

    const handleChange = (e, item) => {
        addLog([...log, `Вы изменили задачу "${item.text}" ${Date()} на ${e.target.checked}`])
        if (item.checked) setCompleted(completed-1)
        else setCompleted(completed+1)

        const newItem = items.map(i => {
            if (i.id === item.id) return {...i, checked: !item.checked, showInfo: true, date: Date()}
            return i
        })
        setItem(newItem)
        setShowLog(false)
    }

    return (
        <>
            <AddItem items={items} setItem={setItem}/>
            <StyledUl>
                <ListItem handleChange={handleChange} items={items} setItem={setItem}
                          completed={completed} setCompleted={setCompleted} />
            </StyledUl>
            <Result log={log} completed={completed} setShowLog={setShowLog} showLog={showLog} />
        </>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<ToDo />)
