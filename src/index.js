import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ListItem from "./ListItem";
import Result from "./Result";

function ToDo(){
    const [items, setItem] = useState([
        {id:1, text:"first", checked: false, showInfo: false},
        {id:2, text:"second", checked: false, showInfo: false},
        {id:3, text:"third", checked: false, showInfo: false}
    ]);
    const [completed, setCompleted] = useState(0)
    const [log, addLog] = useState([])
    const [showLog, setShowLog] = useState(false)

    const handleChange = (e, item) => {
        addLog([...log, `Вы изменили задачу "${item.text}" ${Date()} на ${e.target.checked}`])
        item.checked = !item.checked /////////////////////////////////////////так нельзя делать?
        if (item.checked) setCompleted(completed+1)
        else setCompleted(completed-1)
        item.showInfo = true /////////////////////////////////////////////////так нельзя делать?
        setShowLog(false)
    }

    return (
        <>
            <ul className={'list'}>
                <ListItem handleChange={handleChange} items={items} />
            </ul>
            <Result log={log} completed={completed} setShowLog={setShowLog} showLog={showLog} />
        </>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(
    <ToDo />
)
