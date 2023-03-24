import React from "react";

export default function Result (props){
    return(
        <>
            <div>
                Выполнено {props.completed} заданий
            </div>
            <button onClick={() => props.setShowLog(true)}>show log</button>
            <p>
                {props.showLog && props.log.map(item => (<p className={'par-log'} key={item.id}>{item}</p>))}
            </p>
        </>
    )
}