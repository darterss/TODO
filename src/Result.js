import React from "react";

export default function Result ({completed, log, showLog, setShowLog}){
    return(
        <>
            <div>
                Выполнено {completed} заданий
            </div>
            <button onClick={() => setShowLog(true)}>show log</button>
            <div>
                {showLog && log.map((item, index) => (<p className={'par-log'} key={index}>{item}</p>))}
            </div>
        </>
    )
}